using UnityEngine;
using UnityEngine.UI;

public class Scenario : MonoBehaviour
{
    [SerializeField] private Episode1 _episode1;
    [SerializeField] private Episode2 _episode2;
    [SerializeField] private Episode3 _episode3;
    [SerializeField] private Episode4 _episode4;
    [SerializeField] private Episode4_1 _episode4_1;
    [SerializeField] private Episode4_2 _episode4_2;
    [SerializeField] private Episode5 _episode5;
    [SerializeField] private Episode5_1 _episode5_1;
    [SerializeField] private Episode6 _episode6;
    [SerializeField] private Episode7 _episode7;

    [SerializeField] private Card _card1__1;
    [SerializeField] private Card _card1__2;
    [SerializeField] private Card _card1__3;

    [SerializeField] private Text _coinsText;

    private Card _takencard1;
    private Card _takencard2;

    private bool _taken = false;

    private int _cardsTaken = 0;

    private void OnEnable()
    {
        _episode1.End += TurnEpisode2;
        _episode2.End += TurnEpisode3;
        //_episode3.End += TurnEpisode4And4_1;
        //_episode4.End += TurnEpisode5And5_1;
        //_episode5.End += TurnEpisode6;
        //_episode6.End += TurnEpisode7;

        //_card1__1.They += CheckingCombat;
        //_card1__2.They += CheckingCombat;
        //_card1__3.They += CheckingCombat;
    }

    private void OnDisable()
    {
        _episode1.End -= TurnEpisode2;
        _episode2.End -= TurnEpisode3;
        //_episode3.End -= TurnEpisode4And4_1;
        //_episode4.End -= TurnEpisode5And5_1;
        //_episode5.End -= TurnEpisode6;
        //_episode6.End -= TurnEpisode7;
    }

    private void Start()
    {
        _episode2.enabled = false;
        _episode1.enabled = true;
    }

    private void TurnEpisode2()
    {
        _episode1.enabled = false;
        _episode2.enabled = true;
    }

    private void TurnEpisode3()
    {
        _episode2.enabled = false;
        _episode3.enabled = true;
    }

    //private void TurnEpisode4And4_1()
    //{
    //    _episode3.enabled = false;
    //    _episode4.gameObject.SetActive(true);
    //    _episode4_1.enabled = true;
    //}

    //private void TurnEpisode5And5_1()
    //{
    //    _episode4_1.enabled = false;
    //    _episode4.enabled = false;
    //    _episode5.enabled = true;
    //    _episode5_1.enabled = true;
    //}

    //private void TurnEpisode6()
    //{
    //    _episode5.enabled = false;
    //    _episode6.enabled = true;
    //}

    //private void TurnEpisode7()
    //{
    //    _episode6.enabled = false;
    //    _episode7.enabled = true;
    //}

    //private void CheckingCombat(Card card)
    //{
    //    if (_taken == false)
    //    {
    //        _takencard1 = card;
    //        _taken = true;
    //    }
    //    else
    //    {
    //        _takencard2 = card;
    //    }

    //    _cardsTaken++;

    //    int currentCoins = int.Parse(_coinsText.text);
    //    currentCoins -= 3;
    //    _coinsText.text = currentCoins.ToString();

    //    if (_cardsTaken >= 2)
    //    {
    //        _episode4_2.enabled = true;
    //        _episode3.enabled = false;
    //        _episode7.enabled = false;
    //        _episode4_2.InitialiseCards(_takencard1, _takencard2);

    //        _card1__1.enabled = false;
    //        _card1__2.enabled = false;
    //        _card1__3.enabled = false;
    //        Debug.Log("Запускаю бой 2 сценария");
    //    }
    //}
}
