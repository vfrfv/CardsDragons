using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class ArmAnimation : MonoBehaviour
{
    [SerializeField] private Image _targetButton;
    [SerializeField] private float flyDuration = 1.0f;
    [SerializeField] private float shrinkDuration = 0.3f;
    [SerializeField] private float restoreDuration = 0.3f;

    private RectTransform _armRect;
    private Vector3 _startPos;
    private Vector3 _targetPos;
    private Vector3 _originalScaleArm;
    private Vector3 _originalScaleButton;

    void Start()
    {
        _armRect = GetComponent<RectTransform>();
        _startPos = _armRect.position;
        _targetPos = _targetButton.rectTransform.position;
        _originalScaleArm = _armRect.localScale;
        _originalScaleButton = _targetButton.rectTransform.localScale;

        StartCoroutine(AnimateArm());
    }

    IEnumerator AnimateArm()
    {
        // Летит к кнопке
        float elapsed = 0f;
        while (elapsed < flyDuration)
        {
            float t = elapsed / flyDuration;
            float smoothT = Mathf.SmoothStep(0f, 1f, t); // Замедление ближе к цели
            _armRect.position = Vector3.Lerp(_startPos, _targetPos, smoothT);
            elapsed += Time.deltaTime;
            yield return null;
        }
        _armRect.position = _targetPos;

        // Уменьшение
        Vector3 shrinkScaleArm = _originalScaleArm * 0.5f;
        Vector3 shrinkScaleButton = _originalScaleButton * 0.5f;

        elapsed = 0f;
        while (elapsed < shrinkDuration)
        {
            float t = elapsed / shrinkDuration;
            _armRect.localScale = Vector3.Lerp(_originalScaleArm, shrinkScaleArm, t);
            _targetButton.rectTransform.localScale = Vector3.Lerp(_originalScaleButton, shrinkScaleButton, t);
            elapsed += Time.deltaTime;
            yield return null;
        }
        _armRect.localScale = shrinkScaleArm;
        _targetButton.rectTransform.localScale = shrinkScaleButton;

        // Восстановление
        elapsed = 0f;
        while (elapsed < restoreDuration)
        {
            float t = elapsed / restoreDuration;
            _armRect.localScale = Vector3.Lerp(shrinkScaleArm, _originalScaleArm, t);
            _targetButton.rectTransform.localScale = Vector3.Lerp(shrinkScaleButton, _originalScaleButton, t);
            elapsed += Time.deltaTime;
            yield return null;
        }
        _armRect.localScale = _originalScaleArm;
        _targetButton.rectTransform.localScale = _originalScaleButton;

        yield return new WaitForSeconds(0.7f);
        // Исчезновение
        _armRect.gameObject.SetActive(false);
    }

}
