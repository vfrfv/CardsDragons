using UnityEngine;
using UnityEngine.EventSystems;

public class Buttle : MonoBehaviour, IPointerClickHandler
{
    public Episode4v2 _episode;
    public GameObject _buttonShop;
    public GameObject _buttonButtle;

    [SerializeField] private Episode7 _episode7;
    [SerializeField] private Episode4_2 _episode4_2;
    public GameObject _particle;

    private void OnEnable()
    {
        _buttonButtle.SetActive(true);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        StartButtle();
        _buttonShop.SetActive(false);
        _particle.SetActive(false);
    }

    private void StartButtle()
    {
        if (_episode._isUpgrade == true)
        {
           _episode7.enabled = true;
        }
        else
        {
            ButtleLoss();
        }
    }

    private void ButtleLoss()
    {
        _episode4_2.enabled = true;
        _episode4_2.InitialiseCards(_episode._nonDragonCards, _episode._dragonCards);
    }
}
