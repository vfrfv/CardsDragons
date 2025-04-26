using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class Card : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private RectTransform _points;

    [SerializeField] private float scaleDuration = 0.2f;
    [SerializeField] private float moveDuration = 0.5f;
    [SerializeField] private Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);

    [SerializeField] private ParticleSystem _particleSystem;

    private RectTransform rectTransform;
    private Vector3 originalScale;
    private Vector3 originalLocalPosition;

    public event Action<Card> They;

    private void OnEnable()
    {
        rectTransform = GetComponent<RectTransform>();

        originalScale = rectTransform.localScale;
        originalLocalPosition = rectTransform.localPosition;
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        StartCoroutine(AnimateCard());
    }

    public void PlayParticle()
    {
        _particleSystem.Play();
    }

    private IEnumerator AnimateCard()
    {
        yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));

        yield return StartCoroutine(MoveTo(_points.localPosition, moveDuration));

        yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));
        They?.Invoke(this);
        // Подождать для показа эффекта
        yield return new WaitForSecondsRealtime(0.2f);
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

    private IEnumerator MoveTo(Vector3 target, float duration)
    {
        float time = 0f;
        Vector3 start = rectTransform.localPosition;

        while (time < duration)
        {
            rectTransform.localPosition = Vector3.Lerp(start, target, time / duration);
            time += Time.unscaledDeltaTime;
            yield return null;
        }

        rectTransform.localPosition = target;
    }
}
