using System;
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

    public event Action End;

    public void OnPointerClick(PointerEventData eventData)
    {
        _coinsText.text = "3";

        _card1_1.SetActive(false);
        _card2_1.SetActive(false);

        _card1_1_2.SetActive(true);
        _card1_2_2.SetActive(true);
        _card1_3_2.SetActive(true);

        End?.Invoke();
    }
}
