using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode4_1 : MonoBehaviour, IPointerClickHandler, IEventSystemHandler
{
	[SerializeField]
	private GameObject _cart1__2;

	[SerializeField]
	private GameObject _cart2__2;

	[SerializeField]
	private GameObject _cart3__2;

	[SerializeField]
	private GameObject _cart1_1;

	[SerializeField]
	private GameObject _cart2_1;

	[SerializeField]
	private GameObject _cart3_1;

	[SerializeField]
	private GameObject _arm;

	[SerializeField]
	private Text _coinText;

	[SerializeField]
	private ParticleSystem _particleSystem;

	[SerializeField]
	private ParticleSystem _particleDragon;

	public event Action End2;

	private void OnEnable()
	{
		_particleDragon.Play();
		_particleSystem.Play();
	}

	public void OnPointerClick(PointerEventData eventData)
	{
		_particleSystem.Stop();
		_coinText.text = "6";
		StartCoroutine(AnimateObjects());
	}

	private IEnumerator AnimateObjects()
	{
		StartCoroutine(ScaleAndHide(_cart1_1, 0.5f));
		StartCoroutine(ScaleAndHide(_cart2_1, 0.5f));
		StartCoroutine(ScaleAndHide(_cart3_1, 0.5f));
		_cart1__2.SetActive(true);
		_cart2__2.SetActive(true);
		_cart3__2.SetActive(true);
		StartCoroutine(ScaleUp(_cart1__2));
		StartCoroutine(ScaleUp(_cart2__2));
		StartCoroutine(ScaleUp(_cart3__2));
		yield return new WaitForSeconds(0.7f);
		_arm.SetActive(false);
		this.End2?.Invoke();
		base.enabled = false;
	}

	private IEnumerator ScaleAndHide(GameObject obj, float targetScale)
	{
		RectTransform rectTransform = obj.GetComponent<RectTransform>();
		Vector3 originalScale = rectTransform.localScale;
		Vector3 target = Vector3.one * targetScale;
		float duration = 0.2f;
		float elapsed = 0f;
		while (elapsed < duration)
		{
			elapsed += Time.deltaTime;
			float t = elapsed / duration;
			rectTransform.localScale = Vector3.Lerp(originalScale, target, t);
			yield return null;
		}
		rectTransform.localScale = target;
		obj.SetActive(false);
	}

	private IEnumerator ScaleUp(GameObject obj)
	{
		RectTransform rectTransform = obj.GetComponent<RectTransform>();
		rectTransform.localScale = Vector3.zero;
		float duration = 0.2f;
		float elapsed = 0f;
		while (elapsed < duration)
		{
			elapsed += Time.deltaTime;
			float t = elapsed / duration;
			rectTransform.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, t);
			yield return null;
		}
		rectTransform.localScale = Vector3.one;
	}
}
