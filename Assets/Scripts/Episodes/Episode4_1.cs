using System;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode4_1 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _cart1__2;
    [SerializeField] private GameObject _cart2__2;
    [SerializeField] private GameObject _cart3__2;

    [SerializeField] private GameObject _cart1_1;
    [SerializeField] private GameObject _cart2_1;
    [SerializeField] private GameObject _cart3_1;

    [SerializeField] private GameObject _arm;
    [SerializeField] private Text _coinText;

    [SerializeField] private ParticleSystem _particleSystem;
    [SerializeField] private ParticleSystem _particleDragon;

    public event Action End2;

    private void OnEnable()
    {
        _particleDragon.Play();
        _particleSystem.Play();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _particleSystem.Stop();

        _coinText.text = "6";
        _cart1__2.SetActive(true);
        _cart2__2.SetActive(true);
        _cart3__2.SetActive(true);

        _cart1_1.SetActive(false);
        _cart2_1.SetActive(false);
        _cart3_1.SetActive(false);

        _arm.SetActive(false);

        End2?.Invoke();
        this.enabled = false;
    }
}
