using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode2 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _arm;
    [SerializeField] private RectTransform _points;
    [SerializeField] private RectTransform _unit1;
    [SerializeField] private RectTransform _unit2;
    [SerializeField] private ParticleSystem _particleSystem1;
    [SerializeField] private ParticleSystem _particleSystem2;
    [SerializeField] private Text _textCoins;
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
    private Transform originalParent;

    public event Action End;

    private void OnEnable()
    {
        rectTransform = GetComponent<RectTransform>();
        _arm.SetActive(true);

        originalScale = rectTransform.localScale;
        originalLocalPosition = rectTransform.localPosition;
        originalParent = rectTransform.parent;
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _arm.SetActive(false);
        _textCoins.text = "0";
        StartCoroutine(AnimateCard());
    }

    private IEnumerator AnimateCard()
    {
        // Получаем позиции в мировых координатах
        Vector3 worldPosPoints = _points.position;
        Vector3 worldPosUnit1 = _unit1.position;
        Vector3 worldPosUnit2 = _unit2.position;

        // Переводим их в локальные координаты относительно исходного родителя
        Vector3 localPosPoints = originalParent.InverseTransformPoint(worldPosPoints);
        Vector3 localPosUnit1 = originalParent.InverseTransformPoint(worldPosUnit1);
        Vector3 localPosUnit2 = originalParent.InverseTransformPoint(worldPosUnit2);

        yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));
        yield return StartCoroutine(MoveTo(localPosPoints, moveDuration));

        yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));
        yield return StartCoroutine(MoveTo(localPosUnit1, moveDuration));
        _unit1.gameObject.SetActive(false);
        _particleSystem1.Play();

        yield return StartCoroutine(MoveTo(localPosPoints, moveDuration));
        yield return StartCoroutine(MoveTo(localPosUnit2, moveDuration));
        _unit2.gameObject.SetActive(false);
        _particleSystem2.Play();

        yield return StartCoroutine(MoveTo(localPosPoints, moveDuration));

        _textDamage.gameObject.SetActive(false);
        _textHealth.gameObject.SetActive(false);
        _textHealth2.gameObject.SetActive(true);
        _textDamage2.gameObject.SetActive(true);

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
