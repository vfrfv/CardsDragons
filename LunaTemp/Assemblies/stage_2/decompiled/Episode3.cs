using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode3 : MonoBehaviour, IPointerClickHandler, IEventSystemHandler
{
	[SerializeField]
	private GameObject _battle;

	[SerializeField]
	private GameObject _button;

	[SerializeField]
	private GameObject _cardDracone;

	[SerializeField]
	private RectTransform _point;

	[SerializeField]
	private GameObject _cardEnemye1;

	[SerializeField]
	private GameObject _cardEnemye2;

	[SerializeField]
	private GameObject _cardEnemye3;

	[SerializeField]
	private GameObject _cardDragon1;

	[SerializeField]
	private GameObject _cardDragon2;

	[SerializeField]
	private GameObject _cardDragon3;

	[SerializeField]
	private ParticleSystem _particleSystem1;

	[SerializeField]
	private ParticleSystem _particleSystem2;

	[SerializeField]
	private ParticleSystem _particleSystem3;

	[SerializeField]
	private ParticleSystem _particleButton;

	[SerializeField]
	private Text _textCoins;

	[SerializeField]
	private GameObject _winVictoty;

	[SerializeField]
	private GameObject _winInscription;

	[SerializeField]
	private GameObject _winInscription2;

	[SerializeField]
	private GameObject _winInscription3;

	[SerializeField]
	private GameObject _parentsDisplay;

	[SerializeField]
	private GameObject _cardL;

	private CanvasGroup _victoryCanvasGroup;

	public event Action End;

	private void Awake()
	{
		if (_winVictoty != null)
		{
			_victoryCanvasGroup = _winVictoty.GetComponent<CanvasGroup>();
			if (_victoryCanvasGroup == null)
			{
				_victoryCanvasGroup = _winVictoty.AddComponent<CanvasGroup>();
			}
			_victoryCanvasGroup.alpha = 0f;
			_winVictoty.SetActive(false);
		}
	}

	private void OnEnable()
	{
		_particleButton.Play();
		_button.SetActive(true);
	}

	public void OnPointerClick(PointerEventData eventData)
	{
		Battle();
		_button.SetActive(false);
		_particleButton.Stop();
		_cardL.SetActive(false);
	}

	private void Battle()
	{
		_cardDracone.transform.position = _point.position;
		StartCoroutine(SlideBattleUI());
	}

	private IEnumerator DestroyingEnemies()
	{
		yield return new WaitForSeconds(0.7f);
		yield return StartCoroutine(AnimateAttack(_cardDragon1, _cardEnemye1));
		_cardEnemye1.SetActive(false);
		_particleSystem1.Play();
		yield return new WaitForSeconds(0.2f);
		yield return StartCoroutine(AnimateAttack(_cardDragon2, _cardEnemye2));
		_cardEnemye2.SetActive(false);
		_particleSystem2.Play();
		yield return new WaitForSeconds(0.2f);
		yield return StartCoroutine(AnimateAttack(_cardDragon3, _cardEnemye3));
		_cardEnemye3.SetActive(false);
		_particleSystem3.Play();
		yield return new WaitForSeconds(1f);
		_winVictoty.SetActive(true);
		StartCoroutine(FadeInVictory());
		_textCoins.text = "7";
		yield return new WaitForSeconds(2f);
		_battle.SetActive(false);
		_winInscription.SetActive(false);
		_winInscription2.SetActive(false);
		_winInscription3.SetActive(false);
		_winVictoty.SetActive(false);
		this.End?.Invoke();
	}

	public IEnumerator FadeInVictory()
	{
		float appearDuration = 0.1f;
		float scaleDuration = 0.2f;
		float smallScale = 0.5f;
		float overshootScale = 1.2f;
		_winVictoty.SetActive(true);
		_victoryCanvasGroup.alpha = 0f;
		_winVictoty.transform.localScale = Vector3.one;
		float elapsed = 0f;
		while (elapsed < appearDuration)
		{
			elapsed += Time.deltaTime;
			_victoryCanvasGroup.alpha = Mathf.Clamp01(elapsed / appearDuration);
			yield return null;
		}
		_victoryCanvasGroup.alpha = 1f;
		yield return StartCoroutine(AnimatePopIn(_winInscription, smallScale, overshootScale, scaleDuration));
		yield return new WaitForSeconds(0.1f);
		yield return StartCoroutine(AnimatePopIn(_winInscription2, smallScale, overshootScale, scaleDuration, _winInscription2.transform.localScale));
		yield return new WaitForSeconds(0.1f);
		yield return StartCoroutine(AnimatePopIn(_winInscription3, smallScale, overshootScale, scaleDuration, _winInscription3.transform.localScale));
	}

	private IEnumerator AnimatePopIn(GameObject target, float startScale, float overshootScale, float duration, Vector3? targetScale = null)
	{
		target.SetActive(true);
		RectTransform rect = target.GetComponent<RectTransform>();
		rect.localScale = Vector3.one * startScale;
		Vector3 normalScale = targetScale ?? Vector3.one;
		float elapsed2 = 0f;
		Vector3 overshoot = Vector3.one * overshootScale;
		while (elapsed2 < duration / 2f)
		{
			elapsed2 += Time.deltaTime;
			float t = elapsed2 / (duration / 2f);
			rect.localScale = Vector3.Lerp(Vector3.one * startScale, overshoot, t);
			yield return null;
		}
		rect.localScale = overshoot;
		elapsed2 = 0f;
		while (elapsed2 < duration / 2f)
		{
			elapsed2 += Time.deltaTime;
			float t2 = elapsed2 / (duration / 2f);
			rect.localScale = Vector3.Lerp(overshoot, normalScale, t2);
			yield return null;
		}
		rect.localScale = normalScale;
	}

	private IEnumerator SlideBattleUI()
	{
		RectTransform rectTransform = _battle.GetComponent<RectTransform>();
		Vector2 originalPosition = rectTransform.anchoredPosition;
		Vector2 startPosition = (rectTransform.anchoredPosition = originalPosition + new Vector2(0f, 1000f));
		_battle.SetActive(true);
		float duration = 0.1f;
		float elapsed = 0f;
		while (elapsed < duration)
		{
			elapsed += Time.deltaTime;
			float t = elapsed / duration;
			rectTransform.anchoredPosition = Vector2.Lerp(startPosition, originalPosition, t);
			yield return null;
		}
		rectTransform.anchoredPosition = originalPosition;
		StartCoroutine(DestroyingEnemies());
	}

	private IEnumerator AnimateAttack(GameObject dragon, GameObject enemy)
	{
		RectTransform dragonRect = dragon.GetComponent<RectTransform>();
		RectTransform enemyRect = enemy.GetComponent<RectTransform>();
		Vector3 originalScale = dragonRect.localScale;
		Vector3 originalPosition = dragonRect.localPosition;
		Vector3 enemyPosition = dragonRect.parent.InverseTransformPoint(enemyRect.position);
		float scaleDuration = 0.1f;
		float moveDuration = 0.1f;
		Vector3 targetScale = new Vector3(1.2f, 1.2f, 1f);
		yield return StartCoroutine(ScaleTo(dragonRect, targetScale, scaleDuration));
		yield return StartCoroutine(MoveTo(dragonRect, enemyPosition, moveDuration));
		yield return StartCoroutine(ScaleTo(dragonRect, originalScale, scaleDuration));
		yield return StartCoroutine(MoveTo(dragonRect, originalPosition, moveDuration));
	}

	private IEnumerator ScaleTo(RectTransform rectTransform, Vector3 target, float duration)
	{
		float time = 0f;
		Vector3 start = rectTransform.localScale;
		while (time < duration)
		{
			rectTransform.localScale = Vector3.Lerp(start, target, time / duration);
			time += Time.unscaledDeltaTime;
			yield return null;
		}
		rectTransform.localScale = target;
	}

	private IEnumerator MoveTo(RectTransform rectTransform, Vector3 target, float duration)
	{
		float time = 0f;
		Vector3 start = rectTransform.localPosition;
		while (time < duration)
		{
			rectTransform.localPosition = Vector3.Lerp(start, target, time / duration);
			time += Time.unscaledDeltaTime;
			yield return null;
		}
		rectTransform.localPosition = target;
	}
}
