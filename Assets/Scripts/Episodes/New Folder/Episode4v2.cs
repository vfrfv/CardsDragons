using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Episode4v2 : MonoBehaviour
{
    [SerializeField] private List<Card2V> _cards = new List<Card2V>();
    [SerializeField] private Card2V _card;

    [SerializeField] private GameObject _updateButton;
    [SerializeField] private Text _TMony;

    [SerializeField] private RectTransform _pointS1;
    [SerializeField] private RectTransform _pointS2;
    [SerializeField] private RectTransform _pointS3;

    [SerializeField] public Point _point1;
    [SerializeField] public Point _point2;
    [SerializeField] public Point _point3;
    [SerializeField] public Point _point4;
    [SerializeField] public Point _point5;
    [SerializeField] public Point _point6;

    [SerializeField] private GameObject _arm;
    [SerializeField] private GameObject _arm2;

    private bool _cardChosen = false;      // Выбрали ли _card
    private bool _cardUsed = false;        // Был ли уже тройной спавн _card
    private bool _firstUpdateDone = false; // Был ли первый клик по кнопке обновления
    private bool _mainCardArmUsed = false;

    private void OnEnable()
    {
        _cardChosen = false;
        _cardUsed = false;
        _firstUpdateDone = false;

        SpawnCards();
        _updateButton.SetActive(true);
    }

    public void OnUpdateButtonClick()
    {
        _firstUpdateDone = true;
        ClearOldCards();
        SpawnCards();
    }

    private void SpawnCards()
    {
        List<Card2V> selectedCards = new List<Card2V>();

        if (!_firstUpdateDone)
        {
            // Первый спавн: 2 случайные карты + _card
            while (selectedCards.Count < 2)
            {
                Card2V rand = _cards[Random.Range(0, _cards.Count)];
                if (!selectedCards.Contains(rand)) selectedCards.Add(rand);
            }
            selectedCards.Add(_card);
        }
        else if (_cardChosen && !_cardUsed)
        {
            // Если _card была выбрана — один раз спавним 3 _card
            selectedCards.Add(_card);
            selectedCards.Add(_card);
            selectedCards.Add(_card);
            _cardUsed = true;
        }
        else
        {
            // Дальнейшие спавны — только случайные карты из _cards
            while (selectedCards.Count < 3)
            {
                Card2V rand = _cards[Random.Range(0, _cards.Count)];
                if (!selectedCards.Contains(rand)) selectedCards.Add(rand);
            }
        }

        // Перемешиваем карты
        for (int i = 0; i < selectedCards.Count; i++)
        {
            Card2V temp = selectedCards[i];
            int rand = Random.Range(i, selectedCards.Count);
            selectedCards[i] = selectedCards[rand];
            selectedCards[rand] = temp;
        }

        // Спавним на точки S
        RectTransform[] spawnPoints = { _pointS1, _pointS2, _pointS3 };
        for (int i = 0; i < spawnPoints.Length; i++)
        {
            Card2V cardInstance = Instantiate(selectedCards[i], spawnPoints[i]);

            // Устанавливаем ссылку на Episode4v2 и флаг для _card
            cardInstance._episode = this;
            cardInstance._isMainCard = (selectedCards[i] == _card);

            cardInstance.transform.localPosition = Vector3.zero;
            cardInstance.transform.localScale = Vector3.one;

            if (_mainCardArmUsed == false)
            {
                if (cardInstance._arm != null)
                {
                    cardInstance._arm.SetActive(true);
                    _mainCardArmUsed = true;
                }
            }
            else
            {
                if (cardInstance._arm != null)
                {
                    cardInstance._arm.SetActive(false);
                }
            }
        }
    }

    private void ClearOldCards()
    {
        foreach (RectTransform point in new[] { _pointS1, _pointS2, _pointS3 })
        {
            foreach (Transform child in point)
                Destroy(child.gameObject);
        }
    }

    public void NotifyCardChosen()
    {
        _cardChosen = true;
    }
}
