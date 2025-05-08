using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Episode4v2 : MonoBehaviour
{
    [SerializeField] private List<Card2V> _cards = new List<Card2V>();
    [SerializeField] private Card2V _card;

    [SerializeField] private GameObject _updateButton;
    [SerializeField] private Text _TMony;
    [SerializeField] private GameObject _buttleButton;

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

    [SerializeField] private GameObject _cardPointUpgrade;
    [SerializeField] private GameObject _textHealth3;
    [SerializeField] private GameObject _textDamage3;

    public List<Card2V> _dragonCards = new List<Card2V>();

    private int _mony = 7;
     public int _cardsDragon = 0;

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
        UpdateMoneyText();
    }

    private void Update()
    {
        Debug.Log("Карт драконов " + _dragonCards.Count);
    }

    private void UpdateMoneyText()
    {
        _TMony.text = _mony.ToString();

        if (_mony <= 1)
        {
            _buttleButton.SetActive(true);
        }
        else
        {
            _buttleButton.SetActive(false);
        }
    }

    public void IncrementDragonCard(Card2V card)
    {
        _cardsDragon++;
        _dragonCards.Add(card);

        if (_dragonCards.Count == 2)
        {
            StartCoroutine(UpgradeCardsAnimation());
        }
    }

    public bool TrySpendForCard()
    {
        if (_mony >= 3)
        {
            _mony -= 3;
            UpdateMoneyText();
            return true;
        }
        return false;
    }

    public void OnUpdateButtonClick()
    {
        if (_mony < 1) return;

        _mony -= 1;
        UpdateMoneyText();

        _firstUpdateDone = true;

        StartCoroutine(AnimateCardUpdate());
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

    private IEnumerator AnimateCardUpdate()
    {
        List<RectTransform> oldPoints = new() { _pointS1, _pointS2, _pointS3 };
        List<GameObject> oldCards = new();

        foreach (RectTransform point in oldPoints)
        {
            foreach (Transform child in point)
            {
                oldCards.Add(child.gameObject);
            }
        }

        // Уменьшаем и скрываем старые карты
        foreach (var card in oldCards)
        {
            StartCoroutine(ScaleAndHide(card, 0.2f));
        }

        yield return new WaitForSeconds(0.25f); // Ждём окончания анимации

        // Удаляем их после анимации
        foreach (var card in oldCards)
        {
            Destroy(card);
        }

        // Спавним новые карты
        List<Card2V> selectedCards = new();

        if (!_firstUpdateDone)
        {
            while (selectedCards.Count < 2)
            {
                Card2V rand = _cards[Random.Range(0, _cards.Count)];
                if (!selectedCards.Contains(rand)) selectedCards.Add(rand);
            }
            selectedCards.Add(_card);
        }
        else if (_cardChosen && !_cardUsed)
        {
            selectedCards.Add(_card);
            selectedCards.Add(_card);
            selectedCards.Add(_card);
            _cardUsed = true;
        }
        else
        {
            while (selectedCards.Count < 3)
            {
                Card2V rand = _cards[Random.Range(0, _cards.Count)];
                if (!selectedCards.Contains(rand)) selectedCards.Add(rand);
            }
        }

        // Перемешка
        for (int i = 0; i < selectedCards.Count; i++)
        {
            var temp = selectedCards[i];
            int rand = Random.Range(i, selectedCards.Count);
            selectedCards[i] = selectedCards[rand];
            selectedCards[rand] = temp;
        }

        RectTransform[] spawnPoints = { _pointS1, _pointS2, _pointS3 };
        for (int i = 0; i < spawnPoints.Length; i++)
        {
            Card2V newCard = Instantiate(selectedCards[i], spawnPoints[i]);
            newCard._episode = this;
            newCard._isMainCard = (selectedCards[i] == _card);

            newCard.transform.localScale = Vector3.zero;
            newCard.transform.localPosition = Vector3.zero;

            // Активация руки
            if (!_mainCardArmUsed && newCard._arm != null)
            {
                newCard._arm.SetActive(true);
                _mainCardArmUsed = true;
            }
            else if (newCard._arm != null)
            {
                newCard._arm.SetActive(false);
            }

            StartCoroutine(ScaleUp(newCard.gameObject));
        }
    }
    private IEnumerator ScaleAndHide(GameObject card, float targetScale)
    {
        RectTransform rt = card.GetComponent<RectTransform>();
        Vector3 original = rt.localScale;
        Vector3 target = Vector3.one * targetScale;

        float duration = 0.2f;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            rt.localScale = Vector3.Lerp(original, target, elapsed / duration);
            yield return null;
        }

        rt.localScale = target;
        card.SetActive(false);
    }

    private IEnumerator ScaleUp(GameObject card)
    {
        RectTransform rt = card.GetComponent<RectTransform>();
        rt.localScale = Vector3.zero;

        float duration = 0.2f;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            rt.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, elapsed / duration);
            yield return null;
        }

        rt.localScale = Vector3.one;
    }

    private IEnumerator UpgradeCardsAnimation()
    {
        // Получаем карты и их RectTransform
        GameObject card1 = _dragonCards[0].gameObject;
        GameObject card2 = _dragonCards[1].gameObject;

        RectTransform rt1 = card1.GetComponent<RectTransform>();
        RectTransform rt2 = card2.GetComponent<RectTransform>();

        // Сохраняем их начальные размеры
        Vector3 originalScale1 = rt1.localScale;
        Vector3 originalScale2 = rt2.localScale;

        Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);
        float scaleDuration = 0.2f;
        float moveDuration = 0.5f;

        // Масштабируем карты вниз перед анимацией
        yield return StartCoroutine(ScaleTo(rt1, targetScale, scaleDuration));
        yield return StartCoroutine(ScaleTo(rt2, targetScale, scaleDuration));

        // Получаем мировую позицию для целевой точки
        Vector3 targetPosition = _cardPointUpgrade.transform.position;

        // Делаем карты невидимыми во время их движения (это важно, если они случайно исчезают)
        card1.SetActive(true);
        card2.SetActive(true);

        // Запускаем одновременные анимации для обеих карт
        Coroutine moveCard1 = StartCoroutine(MoveToWorldSpace(rt1, targetPosition, moveDuration));
        Coroutine moveCard2 = StartCoroutine(MoveToWorldSpace(rt2, targetPosition, moveDuration));

        // Ждем, пока обе карты не достигнут целевой позиции
        yield return moveCard1;
        yield return moveCard2;

        // После завершения анимации перемещения, меняем родителя карт на _cardPointUpgrade
        card1.transform.SetParent(_cardPointUpgrade.transform);
        card2.transform.SetParent(_cardPointUpgrade.transform);

        // Устанавливаем локальную позицию карт на (0,0) относительно нового родителя
        rt1.localPosition = Vector3.zero;
        rt2.localPosition = Vector3.zero;

        // Масштабируем карты обратно
        yield return StartCoroutine(ScaleTo(rt1, originalScale1, scaleDuration));
        yield return StartCoroutine(ScaleTo(rt2, originalScale2, scaleDuration));

        // После того как карты "поехали" и остановились, они исчезают
        Destroy(card1);
        Destroy(card2);

        // Увеличиваем и трясем _cardPointUpgrade
        yield return StartCoroutine(ScaleTo(_cardPointUpgrade.GetComponent<RectTransform>(), targetScale * 2f, scaleDuration));
        yield return StartCoroutine(ShakeEffect(_cardPointUpgrade.GetComponent<RectTransform>(), 1f));

        // Возвращаем _cardPointUpgrade к исходному размеру
        yield return StartCoroutine(ScaleTo(_cardPointUpgrade.GetComponent<RectTransform>(), Vector3.one, scaleDuration));

        // Показываем тексты
        _textHealth3.SetActive(true);
        _textDamage3.SetActive(true);

        // Очищаем список
        _dragonCards.Clear();
    }

    private IEnumerator MoveToWorldSpace(RectTransform rt, Vector3 target, float duration)
    {
        float time = 0f;
        Vector3 startPos = rt.position;  // Используем мировые координаты

        while (time < duration)
        {
            rt.position = Vector3.Lerp(startPos, target, time / duration);
            time += Time.unscaledDeltaTime;
            yield return null;
        }

        rt.position = target;
    }

    private IEnumerator ScaleTo(RectTransform rt, Vector3 targetScale, float duration)
    {
        float time = 0f;
        Vector3 startScale = rt.localScale;

        while (time < duration)
        {
            rt.localScale = Vector3.Lerp(startScale, targetScale, time / duration);
            time += Time.unscaledDeltaTime;
            yield return null;
        }

        rt.localScale = targetScale;
    }

    private IEnumerator ShakeEffect(RectTransform rt, float duration)
    {
        float elapsedTime = 0f;
        Vector3 originalPosition = rt.localPosition;
        float shakeAmount = 10f; // Амплитуда тряски

        while (elapsedTime < duration)
        {
            float xOffset = UnityEngine.Random.Range(-shakeAmount, shakeAmount);
            float yOffset = UnityEngine.Random.Range(-shakeAmount, shakeAmount);

            rt.localPosition = new Vector3(originalPosition.x + xOffset, originalPosition.y + yOffset, originalPosition.z);

            elapsedTime += Time.deltaTime;

            yield return null;
        }

        // В конце тряски возвращаем объект в исходное положение
        rt.localPosition = originalPosition;
    }

}
