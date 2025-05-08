using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class ArmAnimation : MonoBehaviour
{
	[SerializeField]
	private Image _targetButton;

	[SerializeField]
	private float flyDuration = 1f;

	[SerializeField]
	private float shrinkDuration = 0.3f;

	[SerializeField]
	private float restoreDuration = 0.3f;

	private RectTransform _armRect;

	private Vector3 _startPos;

	private Vector3 _targetPos;

	private Vector3 _originalScaleArm;

	private Vector3 _originalScaleButton;

	private void Start()
	{
		_armRect = GetComponent<RectTransform>();
		_startPos = _armRect.position;
		_targetPos = _targetButton.rectTransform.position;
		_originalScaleArm = _armRect.localScale;
		_originalScaleButton = _targetButton.rectTransform.localScale;
		StartCoroutine(AnimateArm());
	}

	private IEnumerator AnimateArm()
	{
		float elapsed3 = 0f;
		while (elapsed3 < flyDuration)
		{
			float t = elapsed3 / flyDuration;
			float smoothT = Mathf.SmoothStep(0f, 1f, t);
			_armRect.position = Vector3.Lerp(_startPos, _targetPos, smoothT);
			elapsed3 += Time.deltaTime;
			yield return null;
		}
		_armRect.position = _targetPos;
		Vector3 shrinkScaleArm = _originalScaleArm * 0.5f;
		Vector3 shrinkScaleButton = _originalScaleButton * 0.5f;
		elapsed3 = 0f;
		while (elapsed3 < shrinkDuration)
		{
			float t2 = elapsed3 / shrinkDuration;
			_armRect.localScale = Vector3.Lerp(_originalScaleArm, shrinkScaleArm, t2);
			_targetButton.rectTransform.localScale = Vector3.Lerp(_originalScaleButton, shrinkScaleButton, t2);
			elapsed3 += Time.deltaTime;
			yield return null;
		}
		_armRect.localScale = shrinkScaleArm;
		_targetButton.rectTransform.localScale = shrinkScaleButton;
		elapsed3 = 0f;
		while (elapsed3 < restoreDuration)
		{
			float t3 = elapsed3 / restoreDuration;
			_armRect.localScale = Vector3.Lerp(shrinkScaleArm, _originalScaleArm, t3);
			_targetButton.rectTransform.localScale = Vector3.Lerp(shrinkScaleButton, _originalScaleButton, t3);
			elapsed3 += Time.deltaTime;
			yield return null;
		}
		_armRect.localScale = _originalScaleArm;
		_targetButton.rectTransform.localScale = _originalScaleButton;
		yield return new WaitForSeconds(0.7f);
		_armRect.gameObject.SetActive(false);
	}
}
