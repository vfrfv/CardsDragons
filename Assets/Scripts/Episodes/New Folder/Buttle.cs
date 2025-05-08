using UnityEngine;
using UnityEngine.EventSystems;

public class Buttle : MonoBehaviour, IPointerClickHandler
{
    public Episode4v2 _episode;

    [SerializeField] private GameObject _buttle2;

    [SerializeField] private GameObject _cardEnemye1;
    [SerializeField] private GameObject _cardEnemye2;
    [SerializeField] private GameObject _cardEnemye3;
    [SerializeField] private GameObject _cardEnemye4;
    [SerializeField] private GameObject _cardEnemye5;
    [SerializeField] private GameObject _cardEnemye6;

    [SerializeField] private Episode7 _episode7;

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
            _buttle2.SetActive(true);
        }
    }

    private void ButtleVictiry()
    {

    }
}
