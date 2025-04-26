using UnityEngine;
using UnityEngine.UI;

public class Episode5_1 : MonoBehaviour
{
    [SerializeField] private Card _card1;
    [SerializeField] private Card _card2;

    [SerializeField] private Episode5 _episode5;
    [SerializeField] private Episode4_1 episode4_1;
    [SerializeField] private Episode5_2 episode5_2;
    [SerializeField] private Text _texCoins;

    private Card _tCard;
    private bool _isPlayed = false;

    private void OnEnable()
    {
        _card1.enabled = true;
        _card2.enabled = true;

        _card1.They += CheckCardSufficiency;
        _card2.They += CheckCardSufficiency;
    }

    private void CheckCardSufficiency(Card card)
    {
        _tCard = card;
        _isPlayed = true;
        _texCoins.text = "0";

        if (_isPlayed == true)
        {
            _episode5.enabled = false;
            episode4_1.enabled = false;
            _card1.enabled = false;
            _card2.enabled = false;

            episode5_2.enabled = true;
            episode5_2.InitialiseCards(_tCard);
            Debug.Log("Запускаю 3 сценарий");
        }
    }
}
