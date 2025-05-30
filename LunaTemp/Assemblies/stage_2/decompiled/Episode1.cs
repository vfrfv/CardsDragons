using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode1 : MonoBehaviour, IPointerClickHandler, IEventSystemHandler
{
	[SerializeField]
	private GameObject _arm;

	[SerializeField]
	private RectTransform _points;

	[SerializeField]
	private RectTransform _unit;

	[SerializeField]
	private ParticleSystem _particleSystem;

	[SerializeField]
	private Text _textCoins;

	[SerializeField]
	private Text _textDamage;

	[SerializeField]
	private Text _textHealth;

	[SerializeField]
	private GameObject _textHealth2;

	[SerializeField]
	private GameObject _textDamage2;

	[SerializeField]
	private float scaleDuration = 0.2f;

	[SerializeField]
	private float moveDuration = 0.5f;

	[SerializeField]
	private Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);

	private RectTransform rectTransform;

	private Vector3 originalScale;

	private Vector3 originalLocalPosition;

	private Transform originalParent;

	public event Action End;

	private void OnEnable()
	{
		rectTransform = GetComponent<RectTransform>();
		_arm.SetActive(true);
		originalScale = rectTransform.localScale;
		originalLocalPosition = rectTransform.localPosition;
		originalParent = rectTransform.parent;
	}

	public void OnPointerClick(PointerEventData eventData)
	{
		_arm.SetActive(false);
		_textCoins.text = "3";
		StartCoroutine(AnimateCard());
	}

	private IEnumerator AnimateCard()
	{
		Vector3 worldPosPoints = _points.position;
		Vector3 worldPosUnit = _unit.position;
		Vector3 localTargetPosPoints = originalParent.InverseTransformPoint(worldPosPoints);
		Vector3 localTargetPosUnit = originalParent.InverseTransformPoint(worldPosUnit);
		yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));
		yield return StartCoroutine(MoveTo(localTargetPosPoints, moveDuration));
		yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));
		yield return StartCoroutine(MoveTo(localTargetPosUnit, moveDuration));
		_particleSystem.Play();
		_unit.gameObject.SetActive(false);
		yield return StartCoroutine(MoveTo(localTargetPosPoints, moveDuration));
		_textDamage.gameObject.SetActive(false);
		_textHealth.gameObject.SetActive(false);
		_textHealth2.gameObject.SetActive(true);
		_textDamage2.gameObject.SetActive(true);
		yield return new WaitForSecondsRealtime(0.2f);
		this.End?.Invoke();
	}

	private IEnumerator ScaleTo(Vector3 target, float duration)
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

	private IEnumerator MoveTo(Vector3 target, float duration)
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
