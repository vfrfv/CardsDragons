using UnityEngine;
using UnityEngine.EventSystems;

public class Buttle : MonoBehaviour, IPointerClickHandler
{
    public Episode4v2 _episode;

    [SerializeField] private Episode7 _episode7;
    [SerializeField] private Episode4_2 _episode4_2;

    private void OnEnable()
    {

    }

    public void OnPointerClick(PointerEventData eventData)
    {
        StartButtle();
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
