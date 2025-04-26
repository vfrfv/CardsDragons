using System;
using System.Collections;
using System.Collections.Generic;
using Unity.Burst.Intrinsics;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode4 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _cardDragcone1_1;
    [SerializeField] private GameObject _cardDragcone2_2;
    [SerializeField] private GameObject _cardDragcone;
    [SerializeField] private GameObject _arm3_3;

    [SerializeField] private GameObject _shopButton;
    [SerializeField] private RectTransform _points;
    [SerializeField] private Text _textCoins;

    [SerializeField] private float scaleDuration = 0.2f;
    [SerializeField] private float moveDuration = 0.5f;
    [SerializeField] private Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);

    private RectTransform rectTransform;
    private Vector3 originalScale;
    private Vector3 originalLocalPosition;

    public event Action End;

    private void OnEnable()
    {
        _shopButton.SetActive(true);
        _cardDragcone1_1.SetActive(true);
        _cardDragcone2_2.SetActive(true);
        _cardDragcone.SetActive(false);
        _arm3_3.SetActive(true);

        rectTransform = GetComponent<RectTransform>();
        originalScale = rectTransform.localScale;
        originalLocalPosition = rectTransform.localPosition;
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _arm3_3.SetActive(false);
        _textCoins.text = "4";
        StartCoroutine(AnimateCard());
    }

    private IEnumerator AnimateCard()
    {
        yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));

        yield return StartCoroutine(MoveTo(_points.localPosition, moveDuration));

        yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));

        // Подождать для показа эффекта
        yield return new WaitForSecondsRealtime(0.2f);

        End?.Invoke();
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
