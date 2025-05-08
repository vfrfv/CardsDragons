using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class Card2V : MonoBehaviour, IPointerClickHandler
{
    public bool _us = true;
    public GameObject _arm;
    public Episode4v2 _episode;

    public bool _isMainCard = false;

    [SerializeField] private float moveDuration = 0.5f;
    [SerializeField] private float scaleDuration = 0.2f;
    [SerializeField] private Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);

    private RectTransform rectTransform;

    private void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (_arm != null)
            _arm.SetActive(false);

        if (_us && _episode != null)
        {
            if (!_episode.TrySpendForCard()) return;

            Point[] points = {
                _episode._point1, _episode._point2, _episode._point3,
                _episode._point4, _episode._point5, _episode._point6
            };

            foreach (Point pt in points)
            {
                if (!pt._occupied)
                {
                    pt._occupied = true;
                    StartCoroutine(AnimateCardMoveAndScale(pt));

                    if (_isMainCard)
                        _episode.NotifyCardChosen();

                    break;
                }
            }
        }
    }

    private IEnumerator AnimateCardMoveAndScale(Point targetPoint)
    {
        // Сохраняем исходные значения
        Vector3 originalScale = rectTransform.localScale;
        Vector3 startWorldPos = transform.position;
        Vector3 targetWorldPos = targetPoint.transform.position;

        // 1. Scale down
        yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));

        // 2. Move to target position (world space)
        float time = 0f;
        while (time < moveDuration)
        {
            transform.position = Vector3.Lerp(startWorldPos, targetWorldPos, time / moveDuration);
            time += Time.unscaledDeltaTime;
            yield return null;
        }
        transform.position = targetWorldPos;

        // 3. Change parent AFTER move is done
        transform.SetParent(targetPoint.transform, worldPositionStays: true);

        // 4. Scale back to original
        yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));

        // 5. Reset local position and scale
        rectTransform.localPosition = Vector3.zero;
        rectTransform.localScale = originalScale;
    }

    private IEnumerator ScaleTo(Vector3 target, float duration)
    {
        float time = 0f;
        Vector3 start = rectTransform.localScale;

        while (time < duration)
        {
            rectTransform.localScale = Vector3.Lerp(start, target, time / duration);
            time += Time.unscaledDeltaTime;
            yield return null;
        }

        rectTransform.localScale = target;
    }
}
