using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode6 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _arm;

    [SerializeField] private RectTransform _points;
    [SerializeField] private GameObject _cart;
    [SerializeField] private GameObject _cartPoint;
    [SerializeField] private Text _coinsText;

    [SerializeField] private Text _textDamage;
    [SerializeField] private Text _textHealth;
    [SerializeField] private GameObject _textHealth2;
    [SerializeField] private GameObject _textDamage2;

    [SerializeField] private float scaleDuration = 0.2f;
    [SerializeField] private float moveDuration = 0.5f;
    [SerializeField] private Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);

    private RectTransform rectTransform;
    private Vector3 originalScale;
    private Vector3 originalLocalPosition;

    public event Action End;

    private void OnEnable()
    {
        _arm.SetActive(true);

        rectTransform = GetComponent<RectTransform>();
        originalScale = rectTransform.localScale;
        originalLocalPosition = rectTransform.localPosition;
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _arm.SetActive(false);
        _coinsText.text = "0";
        StartCoroutine(AnimateCard());
    }

    private IEnumerator AnimateCard()
    {
        yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));

        yield return StartCoroutine(MoveTo(_points.localPosition, moveDuration));

        yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));

        // ��������� ��� ������ �������
        yield return new WaitForSecondsRealtime(0.2f);

        // ����� �����!
        yield return new WaitForSecondsRealtime(0.5f);

        // ���� � _cartPoint
        Vector3 cartPointPosition = _cartPoint.transform.localPosition;
        Coroutine moveEpisode = StartCoroutine(MoveTo(cartPointPosition, moveDuration));
        Coroutine moveCart = StartCoroutine(MoveObjectTo(_cart, cartPointPosition, moveDuration));

        // ���� ��� ��������
        yield return moveEpisode;
        yield return moveCart;

        // �������� _cart � _cartPoint
        _cart.SetActive(false);
        _cartPoint.SetActive(false);

        // ����������� Episode6
        //yield return StartCoroutine(ScaleTo(targetScale * 2f, scaleDuration));

        // ���������� � ������������ ������
        //yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));

        _textDamage.gameObject.SetActive(false);
        _textHealth.gameObject.SetActive(false);
        _textHealth2.gameObject.SetActive(true);
        _textDamage2.gameObject.SetActive(true);

        End?.Invoke();
    }

    // ��������� ����� ����� ��� ����������� �������
    private IEnumerator MoveObjectTo(GameObject obj, [Bridge.Ref] Vector3 target, float duration)
    {
        float time = 0f;
        RectTransform objRect = obj.GetComponent<RectTransform>();
        Vector3 start = objRect.localPosition;

        while (time < duration)
        {
            objRect.localPosition = Vector3.Lerp(start, target, time / duration);
            time += Time.unscaledDeltaTime;
            yield return null;
        }

        objRect.localPosition = target;
    }

    private IEnumerator ScaleTo([Bridge.Ref] Vector3 target, float duration)
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

    private IEnumerator MoveTo([Bridge.Ref] Vector3 target, float duration)
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
