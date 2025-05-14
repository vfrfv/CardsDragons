using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode4_2 : MonoBehaviour, IPointerClickHandler, IEventSystemHandler
{
	private class AttackState
	{
		public Transform OriginalParent;

		public Vector3 OriginalLocalPos;
	}

	private class ReturnInfo : MonoBehaviour
	{
		public AttackState State;
	}

	[SerializeField]
	private GameObject _battle;

	[SerializeField]
	private GameObject _button;

	[SerializeField]
	private GameObject _cardEnemye1;

	[SerializeField]
	private GameObject _cardEnemye2;

	[SerializeField]
	private GameObject _cardEnemye3;

	[SerializeField]
	private GameObject _cardDracone1;

	[SerializeField]
	private GameObject _cardDracone2;

	[SerializeField]
	private GameObject _cardDracone3;

	[SerializeField]
	private GameObject _winDefeat;

	[SerializeField]
	private GameObject _winFinal;

	[SerializeField]
	private ParticleSystem _particleSystem1;

	[SerializeField]
	private ParticleSystem _particleSystem2;

	[SerializeField]
	private ParticleSystem _particleSystem3;

	[SerializeField]
	private ParticleSystem _particleSystem4;

	[SerializeField]
	private ParticleSystem _particleSystem5;

	[SerializeField]
	private ParticleSystem _particleSystem6;

	[SerializeField]
	private ParticleSystem _particleSystem7;

	[SerializeField]
	private ParticleSystem _particleSystem8;

	[SerializeField]
	private ParticleSystem _particleSystem9;

	[SerializeField]
	private ParticleSystem _particleButtun;

	[SerializeField]
	private ParticleSystem _particleDragon;

	[SerializeField]
	private GameObject _layer;

	private Card2V _cardDracone4;

	private Card2V _cardDracone5;

	private CanvasGroup _victoryCanvasGroup;

	[SerializeField]
	private GameObject _winInscription;

	[SerializeField]
	private GameObject _winInscription2;

	[SerializeField]
	private GameObject _winInscription3;

	public Button _buttonF;

	private bool _two;

	private void Awake()
	{
		if (_winDefeat != null)
		{
			_victoryCanvasGroup = _winDefeat.GetComponent<CanvasGroup>();
			if (_victoryCanvasGroup == null)
			{
				_victoryCanvasGroup = _winDefeat.AddComponent<CanvasGroup>();
			}
			_victoryCanvasGroup.alpha = 0f;
			_winDefeat.SetActive(false);
		}
	}

	private void OnEnable()
	{
		_particleButtun.Stop();
		_button.SetActive(false);
		_battle.gameObject.SetActive(true);
		StartCoroutine(BattleSequence());
		_particleDragon.Stop();
	}

	public void OnPointerClick(PointerEventData eventData)
	{
		_particleButtun.Stop();
		_button.SetActive(false);
		_battle.gameObject.SetActive(true);
		StartCoroutine(BattleSequence());
	}

	public void InitialiseCards(List<Card2V> list1, List<Card2V> list2)
	{
		List<Card2V> combinedCards = new List<Card2V>();
		if (list1 != null)
		{
			combinedCards.AddRange(list1);
		}
		if (list2 != null)
		{
			combinedCards.AddRange(list2);
		}
		if (list1.Count > 0 && list2.Count > 0)
		{
			Debug.Log("Два листа");
			_two = true;
		}
		else
		{
			Debug.Log("Один листа");
			_two = false;
		}
		if (combinedCards.Count == 0)
		{
			_cardDracone4 = null;
			_cardDracone5 = null;
		}
		else if (combinedCards.Count == 1)
		{
			_cardDracone4 = combinedCards[0];
			_cardDracone5 = null;
		}
		else
		{
			_cardDracone4 = combinedCards[0];
			_cardDracone5 = combinedCards[1];
		}
	}

	private IEnumerator BattleSequence()
	{
		yield return StartCoroutine(AnimateAttack(_cardEnemye1, _cardDracone1, _particleSystem1, false));
		_cardDracone1.SetActive(false);
		yield return StartCoroutine(AnimateAttack(_cardEnemye1, _cardDracone2, _particleSystem2, false));
		_cardDracone2.SetActive(false);
		ReturnInfo info1 = _cardEnemye1.GetComponent<ReturnInfo>();
		if (info1 != null)
		{
			yield return StartCoroutine(ReturnToOriginalPosition(_cardEnemye1.GetComponent<RectTransform>(), info1.State));
			Object.Destroy(info1);
		}
		yield return StartCoroutine(AnimateAttack(_cardDracone3, _cardEnemye1, _particleSystem3));
		_cardEnemye1.SetActive(false);
		yield return StartCoroutine(AnimateAttack(_cardEnemye2, _cardDracone3, _particleSystem4, false));
		_cardDracone3.SetActive(false);
		if (_cardDracone4 != null)
		{
			if (_two)
			{
				yield return StartCoroutine(AnimateAttack(_cardEnemye2, _cardDracone4.gameObject, null, false));
				CardEnemy cardEnemy4 = _cardEnemye2.GetComponent<CardEnemy>();
				cardEnemy4._particleSystem.Play();
				_cardDracone4.gameObject.SetActive(false);
			}
			else
			{
				yield return StartCoroutine(AnimateAttack(_cardEnemye2, _cardDracone4.gameObject, null, false));
				CardEnemy cardEnemy3 = _cardEnemye2.GetComponent<CardEnemy>();
				cardEnemy3._particleSystem.Play();
				_cardDracone4.gameObject.SetActive(false);
			}
			ReturnInfo info2 = _cardEnemye2.GetComponent<ReturnInfo>();
			if (info2 != null)
			{
				yield return StartCoroutine(ReturnToOriginalPosition(_cardEnemye2.GetComponent<RectTransform>(), info2.State));
				Object.Destroy(info2);
			}
			if (_cardDracone5 != null)
			{
				yield return StartCoroutine(AnimateAttack(_cardDracone5.gameObject, _cardEnemye2, _particleSystem8));
				_cardEnemye2.SetActive(false);
				if (_cardDracone5 != null)
				{
					if (_two)
					{
						yield return StartCoroutine(AnimateAttack(_cardEnemye3, _cardDracone5.gameObject, null));
						CardEnemy cardEnemy2 = _cardEnemye3.GetComponent<CardEnemy>();
						cardEnemy2._particleSystem.Play();
						_cardDracone5.gameObject.SetActive(false);
					}
					else
					{
						yield return StartCoroutine(AnimateAttack(_cardEnemye3, _cardDracone5.gameObject, null));
						CardEnemy cardEnemy = _cardEnemye3.GetComponent<CardEnemy>();
						cardEnemy._particleSystem.Play();
						_cardDracone5.gameObject.SetActive(false);
					}
				}
				yield return new WaitForSeconds(1f);
				_winDefeat.SetActive(true);
				StartCoroutine(FadeInVictory());
				yield return new WaitForSeconds(2f);
				_winFinal.gameObject.SetActive(true);
			}
			else
			{
				yield return new WaitForSeconds(0.5f);
				_winDefeat.SetActive(true);
				StartCoroutine(FadeInVictory());
				yield return new WaitForSeconds(2f);
				_winFinal.gameObject.SetActive(true);
			}
		}
		else
		{
			yield return new WaitForSeconds(0.5f);
			_winDefeat.SetActive(true);
			StartCoroutine(FadeInVictory());
			yield return new WaitForSeconds(2f);
			_winFinal.gameObject.SetActive(true);
		}
	}

	private IEnumerator AnimateAttack(GameObject attacker, GameObject target, ParticleSystem effect, bool returnToOriginal = true)
	{
		RectTransform attackerRect = attacker.GetComponent<RectTransform>();
		RectTransform targetRect = target.GetComponent<RectTransform>();
		AttackState state = new AttackState
		{
			OriginalParent = attackerRect.parent,
			OriginalLocalPos = attackerRect.localPosition
		};
		attackerRect.SetParent(_layer.transform, true);
		Vector3 targetPos = _layer.transform.InverseTransformPoint(targetRect.position);
		yield return StartCoroutine(ScaleTo(attackerRect, new Vector3(1.2f, 1.2f, 1f), 0.1f));
		yield return StartCoroutine(MoveTo(attackerRect, targetPos, 0.2f));
		if (effect != null)
		{
			effect.Play();
		}
		yield return new WaitForSeconds(0.2f);
		yield return StartCoroutine(ScaleTo(attackerRect, Vector3.one, 0.1f));
		if (returnToOriginal)
		{
			yield return StartCoroutine(ReturnToOriginalPosition(attackerRect, state));
		}
		else
		{
			attackerRect.gameObject.AddComponent<ReturnInfo>().State = state;
		}
	}

	private IEnumerator ReturnToOriginalPosition(RectTransform attackerRect, AttackState state)
	{
		Vector3 targetWorldPos = state.OriginalParent.TransformPoint(state.OriginalLocalPos);
		StartCoroutine(MoveToWorldPosition(attackerRect, targetWorldPos, 0.2f));
		yield return new WaitForSeconds(0.2f);
		attackerRect.SetParent(state.OriginalParent, true);
		attackerRect.localPosition = state.OriginalLocalPos;
	}

	private IEnumerator MoveToWorldPosition(RectTransform rectTransform, Vector3 targetWorldPos, float duration)
	{
		float time = 0f;
		Vector3 startPos = rectTransform.position;
		while (time < duration)
		{
			rectTransform.position = Vector3.Lerp(startPos, targetWorldPos, time / duration);
			time += Time.unscaledDeltaTime;
			yield return null;
		}
		rectTransform.position = targetWorldPos;
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

	private IEnumerator FadeInVictory()
	{
		float appearDuration = 0.1f;
		float scaleDuration = 0.2f;
		float smallScale = 0.5f;
		float overshootScale = 1.2f;
		_winDefeat.SetActive(true);
		_victoryCanvasGroup.alpha = 0f;
		_winDefeat.transform.localScale = Vector3.one;
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
}
