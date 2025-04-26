using UnityEngine;
using UnityEngine.EventSystems;

public class Episode3 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _battle;
    [SerializeField] private GameObject _button;

    [SerializeField] private ParticleSystem _particleSystem1;
    [SerializeField] private ParticleSystem _particleSystem2;
    [SerializeField] private ParticleSystem _particleSystem3;

    private void OnEnable()
    {
        _button.SetActive(true);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        Battle();
        _button.SetActive(false);
    }

    private void Battle()
    {
        _battle.gameObject.SetActive(true);
    }
}
