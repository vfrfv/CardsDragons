using System;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode4_1 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _cart1__2;
    [SerializeField] private GameObject _cart2__2;
    [SerializeField] private GameObject _cart3__2;
    [SerializeField] private GameObject _arm;
    [SerializeField] private Text _coinText;

    public event Action End2;

    private void OnEnable()
    {

    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _coinText.text = "6";
        _cart1__2.SetActive(true);
        _cart2__2.SetActive(true);
        _cart3__2.SetActive(true);

        _arm.SetActive(false);

        End2?.Invoke();
    }
}
