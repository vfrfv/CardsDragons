using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode5 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _card1_1_2;
    [SerializeField] private GameObject _card1_2_2;
    [SerializeField] private GameObject _card1_3_2;

    [SerializeField] private GameObject _card1_1;
    [SerializeField] private GameObject _card2_1;

    [SerializeField] private Text _coinsText;
    [SerializeField] private ParticleSystem _particleSystem;

    public event Action End;

    private void OnEnable()
    {
        // _particleSystem.Play(); // ���� �����, ����������������� ��� ��������� ������
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _particleSystem.Stop();
        _coinsText.text = "3";

        // �������� �������� ��� ���������� ���� � ��������� �����
        StartCoroutine(AnimateCards());
    }

    private IEnumerator AnimateCards()
    {
        // ��������� �������� ���������� ��� ������ ���� � ��������� ��� ����� ������������
        Coroutine hideCardsCoroutine1 = StartCoroutine(ScaleAndHide(_card1_1, 0.5f));
        Coroutine hideCardsCoroutine2 = StartCoroutine(ScaleAndHide(_card2_1, 0.5f));

        // ���������� ����� ����� � �������� �� �������� ���������
        _card1_1_2.SetActive(true);
        _card1_2_2.SetActive(true);
        _card1_3_2.SetActive(true);

        Coroutine showCardsCoroutine1 = StartCoroutine(ScaleUp(_card1_1_2));
        Coroutine showCardsCoroutine2 = StartCoroutine(ScaleUp(_card1_2_2));
        Coroutine showCardsCoroutine3 = StartCoroutine(ScaleUp(_card1_3_2));

        // ���� ���������� ���� ��������
        yield return hideCardsCoroutine1;
        yield return hideCardsCoroutine2;

        // ���� ���������� �������� ��������� ����� ����
        yield return showCardsCoroutine1;
        yield return showCardsCoroutine2;
        yield return showCardsCoroutine3;

        End?.Invoke();
    }

    private IEnumerator ScaleAndHide(GameObject card, float targetScale)
    {
        RectTransform rectTransform = card.GetComponent<RectTransform>();
        Vector3 originalScale = rectTransform.localScale;
        Vector3 target = Vector3.one * targetScale;
        float duration = 0.2f;
        float elapsed = 0f;

        // ������� ���������� ��������
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            rectTransform.localScale = Vector3.Lerp(originalScale, target, t);
            yield return null;
        }

        rectTransform.localScale = target;
        card.SetActive(false); // ��������� �������� ����� ��������
    }

    private IEnumerator ScaleUp(GameObject card)
    {
        RectTransform rectTransform = card.GetComponent<RectTransform>();
        rectTransform.localScale = Vector3.zero; // �������� � ���������� �������

        float duration = 0.2f;
        float elapsed = 0f;

        // ������� ���������� �������� �� ����������� �������
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            rectTransform.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, t);
            yield return null;
        }

        rectTransform.localScale = Vector3.one; // ��������, ��� � ����� ������� ����� 1
    }
}
