using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Episode4v2 : MonoBehaviour
{
	[SerializeField]
	private List<Card2V> _cards = new List<Card2V>();

	[SerializeField]
	private Card2V _card;

	[SerializeField]
	private GameObject _updateButton;

	[SerializeField]
	private Text _TMony;

	[SerializeField]
	private GameObject _buttleButton;

	[SerializeField]
	private RectTransform _pointS1;

	[SerializeField]
	private RectTransform _pointS2;

	[SerializeField]
	private RectTransform _pointS3;

	[SerializeField]
	public Point _point1;

	[SerializeField]
	public Point _point2;

	[SerializeField]
	public Point _point3;

	[SerializeField]
	public Point _point4;

	[SerializeField]
	public Point _point5;

	[SerializeField]
	public Point _point6;

	[SerializeField]
	private GameObject _arm;

	[SerializeField]
	private GameObject _arm2;

	[SerializeField]
	private GameObject _cardPointUpgrade;

	[SerializeField]
	private GameObject _textHealth3;

	[SerializeField]
	private GameObject _textDamage3;

	[SerializeField]
	private GameObject _layer;

	[SerializeField]
	private ParticleSystem _particle;

	[SerializeField]
	private ParticleSystem _particle2;

	[SerializeField]
	private ParticleSystem _particleU;

	public Buttle _buttle;

	public List<Card2V> _dragonCards = new List<Card2V>();

	public List<Card2V> _nonDragonCards = new List<Card2V>();

	public GameObject _armO;

	public GameObject _armU;

	private int _mony = 7;

	public int _cardsDragon = 0;

	private bool _cardChosen = false;

	private bool _cardUsed = false;

	private bool _firstUpdateDone = false;

	private bool _mainCardArmUsed = false;

	public bool _isUpgrade = false;

	public bool _isButtle = false;

	public bool _isArm = false;

	private void OnEnable()
	{
		_isButtle = true;
		_cardUsed = false;
		_firstUpdateDone = false;
		SpawnCards();
		_updateButton.SetActive(true);
		UpdateMoneyText();
		_particle.Play();
		_particle2.Play();
	}

	public void CreateArmUp()
	{
		if (!_isArm)
		{
			_armU = Object.Instantiate(_arm, _updateButton.transform);
			_isArm = true;
		}
	}

	private void UpdateMoneyText()
	{
		_TMony.text = _mony.ToString();
		if (_mony < 3)
		{
			_particle2.Stop();
		}
		if (_mony <= 1)
		{
			_armU.gameObject.SetActive(false);
			_buttleButton.SetActive(true);
			_buttle.enabled = true;
		}
		else
		{
			_buttleButton.SetActive(false);
		}
		if (_mony <= 0)
		{
			_particle.Stop();
		}
	}

	public void IncrementDragonCard(Card2V card)
	{
		if (card._dragon)
		{
			_cardsDragon++;
			_dragonCards.Add(card);
			if (_dragonCards.Count == 2)
			{
				_isUpgrade = true;
				StartCoroutine(UpgradeCardsAnimation());
			}
		}
		else if (!_nonDragonCards.Contains(card))
		{
			_nonDragonCards.Add(card);
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
		_armU.gameObject.SetActive(false);
		if (_mony >= 1)
		{
			_mony--;
			UpdateMoneyText();
			_firstUpdateDone = true;
			StartCoroutine(AnimateCardUpdate());
		}
	}

	private void SpawnCards()
	{
		List<Card2V> selectedCards = new List<Card2V>();
		if (!_firstUpdateDone)
		{
			while (selectedCards.Count < 2)
			{
				Card2V rand3 = _cards[Random.Range(0, _cards.Count)];
				if (!selectedCards.Contains(rand3))
				{
					selectedCards.Add(rand3);
				}
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
				if (!selectedCards.Contains(rand))
				{
					selectedCards.Add(rand);
				}
			}
		}
		for (int j = 0; j < selectedCards.Count; j++)
		{
			Card2V temp = selectedCards[j];
			int rand2 = Random.Range(j, selectedCards.Count);
			selectedCards[j] = selectedCards[rand2];
			selectedCards[rand2] = temp;
		}
		RectTransform[] spawnPoints = new RectTransform[3] { _pointS1, _pointS2, _pointS3 };
		for (int i = 0; i < spawnPoints.Length; i++)
		{
			Card2V cardInstance = Object.Instantiate(selectedCards[i], spawnPoints[i]);
			cardInstance._episode = this;
			cardInstance._isMainCard = selectedCards[i] == _card;
			cardInstance.transform.localPosition = Vector3.zero;
			cardInstance.transform.localScale = Vector3.one;
			if (!_mainCardArmUsed)
			{
				if (cardInstance._arm != null)
				{
					_armO = Object.Instantiate(_arm);
					_armO.transform.SetParent(cardInstance.transform, false);
					_mainCardArmUsed = true;
				}
			}
			else if (!(cardInstance._arm != null))
			{
			}
		}
	}

	private void ClearOldCards()
	{
		RectTransform[] array = new RectTransform[3] { _pointS1, _pointS2, _pointS3 };
		foreach (RectTransform point in array)
		{
			foreach (Transform child in point)
			{
				Object.Destroy(child.gameObject);
			}
		}
	}

	public void NotifyCardChosen()
	{
		_cardChosen = true;
	}

	private IEnumerator AnimateCardUpdate()
	{
		List<RectTransform> oldPoints = new List<RectTransform> { _pointS1, _pointS2, _pointS3 };
		List<GameObject> oldCards = new List<GameObject>();
		foreach (RectTransform point in oldPoints)
		{
			foreach (Transform child in point)
			{
				oldCards.Add(child.gameObject);
			}
		}
		foreach (GameObject card2 in oldCards)
		{
			StartCoroutine(ScaleAndHide(card2, 0.2f));
		}
		yield return new WaitForSeconds(0.25f);
		foreach (GameObject card in oldCards)
		{
			Object.Destroy(card);
		}
		List<Card2V> selectedCards = new List<Card2V>();
		if (!_firstUpdateDone)
		{
			while (selectedCards.Count < 2)
			{
				Card2V rand2 = _cards[Random.Range(0, _cards.Count)];
				if (!selectedCards.Contains(rand2))
				{
					selectedCards.Add(rand2);
				}
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
				if (!selectedCards.Contains(rand))
				{
					selectedCards.Add(rand);
				}
			}
		}
		RectTransform[] spawnPoints = new RectTransform[3] { _pointS1, _pointS2, _pointS3 };
		for (int i = 0; i < spawnPoints.Length; i++)
		{
			Card2V newCard = Object.Instantiate(selectedCards[i], spawnPoints[i]);
			newCard._episode = this;
			newCard._isMainCard = selectedCards[i] == _card;
			newCard.transform.localScale = Vector3.zero;
			newCard.transform.localPosition = Vector3.zero;
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
		_isUpgrade = true;
		GameObject card1 = _dragonCards[0].gameObject;
		GameObject card2 = _dragonCards[1].gameObject;
		RectTransform rt1 = card1.GetComponent<RectTransform>();
		RectTransform rt2 = card2.GetComponent<RectTransform>();
		Vector3 originalScale1 = rt1.localScale;
		Vector3 originalScale2 = rt2.localScale;
		Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);
		float scaleDuration = 0.2f;
		float moveDuration = 0.5f;
		yield return StartCoroutine(ScaleTo(rt1, targetScale, scaleDuration));
		yield return StartCoroutine(ScaleTo(rt2, targetScale, scaleDuration));
		Vector3 targetPosition = _cardPointUpgrade.transform.position;
		card1.SetActive(true);
		card2.SetActive(true);
		StartCoroutine(MoveToWorldSpace(rt1, targetPosition, moveDuration));
		StartCoroutine(MoveToWorldSpace(rt2, targetPosition, moveDuration));
		yield return new WaitForSeconds(0.4f);
		_particleU.Play();
		card1.transform.SetParent(_cardPointUpgrade.transform);
		card2.transform.SetParent(_cardPointUpgrade.transform);
		rt1.localPosition = Vector3.zero;
		rt2.localPosition = Vector3.zero;
		yield return StartCoroutine(ScaleTo(rt1, originalScale1, scaleDuration));
		yield return StartCoroutine(ScaleTo(rt2, originalScale2, scaleDuration));
		Object.Destroy(card1);
		Object.Destroy(card2);
		yield return StartCoroutine(ScaleTo(_cardPointUpgrade.GetComponent<RectTransform>(), targetScale * 2f, scaleDuration));
		yield return StartCoroutine(ShakeEffect(_cardPointUpgrade.GetComponent<RectTransform>(), 1f));
		_particleU.Stop();
		yield return StartCoroutine(ScaleTo(_cardPointUpgrade.GetComponent<RectTransform>(), Vector3.one, scaleDuration));
		_textHealth3.SetActive(true);
		_textDamage3.SetActive(true);
	}

	private IEnumerator MoveToWorldSpace(RectTransform rt, Vector3 target, float duration)
	{
		float time = 0f;
		Vector3 startPos = rt.position;
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
		float shakeAmount = 10f;
		while (elapsedTime < duration)
		{
			float xOffset = Random.Range(0f - shakeAmount, shakeAmount);
			float yOffset = Random.Range(0f - shakeAmount, shakeAmount);
			rt.localPosition = new Vector3(originalPosition.x + xOffset, originalPosition.y + yOffset, originalPosition.z);
			elapsedTime += Time.deltaTime;
			yield return null;
		}
		rt.localPosition = originalPosition;
	}
}
