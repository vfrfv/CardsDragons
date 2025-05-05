using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class Episode5_2 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _battle;
    [SerializeField] private GameObject _button;

    [SerializeField] private GameObject _cardEnemye1;
    [SerializeField] private GameObject _cardEnemye2;
    [SerializeField] private GameObject _cardEnemye3;

    [SerializeField] private GameObject _cardDracone1;
    [SerializeField] private GameObject _cardDracone2;
    [SerializeField] private GameObject _cardDracone3;
    [SerializeField] private GameObject _cardDracone4;

    [SerializeField] private GameObject _winDefeat;
    [SerializeField] private GameObject _winFinal;

    [SerializeField] private ParticleSystem _particleSystem1;
    [SerializeField] private ParticleSystem _particleSystem2;
    [SerializeField] private ParticleSystem _particleSystem3;
    [SerializeField] private ParticleSystem _particleSystem4;
    [SerializeField] private ParticleSystem _particleSystem5;
    [SerializeField] private ParticleSystem _particleSystem6;
    [SerializeField] private ParticleSystem _particleSystem7;

    [SerializeField] private ParticleSystem _particleSystem;

    [SerializeField] private GameObject _layer;

    [SerializeField] private GameObject _winInscription;
    [SerializeField] private GameObject _winInscription2;
    [SerializeField] private GameObject _winInscription3;

    private Card _cardDracone5;

    private CanvasGroup _victoryCanvasGroup;

    private void Awake()
    {
        if (_winDefeat != null)
        {
            _victoryCanvasGroup = _winDefeat.GetComponent<CanvasGroup>();
            if (_victoryCanvasGroup == null)
                _victoryCanvasGroup = _winDefeat.AddComponent<CanvasGroup>();

            _victoryCanvasGroup.alpha = 0;
            _winDefeat.SetActive(false);
        }
    }

    private void OnEnable()
    {
        _button.SetActive(true);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _button.SetActive(false);
        _battle.gameObject.SetActive(true);
        StartCoroutine(BattleSequence());
    }

    public void InitialiseCards( Card card2)
    {
        _cardDracone5 = card2;
    }

    private IEnumerator BattleSequence()
    {
        // === Enemye1 ������� ������, ����� ������������ ===
        yield return StartCoroutine(AnimateAttack(_cardEnemye1, _cardDracone1, _particleSystem1, returnToOriginal: false));
        _cardDracone1.SetActive(false);

        yield return StartCoroutine(AnimateAttack(_cardEnemye1, _cardDracone2, _particleSystem2, returnToOriginal: false));
        _cardDracone2.SetActive(false);

        var info1 = _cardEnemye1.GetComponent<ReturnInfo>();
        if (info1 != null)
        {
            yield return StartCoroutine(ReturnToOriginalPosition(_cardEnemye1.GetComponent<RectTransform>(), info1.State));
            Destroy(info1);
        }

        // === Dracone3 ������� Enemye1 ===
        yield return StartCoroutine(AnimateAttack(_cardDracone3, _cardEnemye1, _particleSystem3));
        _cardEnemye1.SetActive(false);

        // === Enemye2 ������� ������, ����� ������������ ===
        yield return StartCoroutine(AnimateAttack(_cardEnemye2, _cardDracone3, _particleSystem4, returnToOriginal: false));
        _cardDracone3.SetActive(false);

        yield return StartCoroutine(AnimateAttack(_cardEnemye2, _cardDracone4.gameObject, _particleSystem5, returnToOriginal: false));
        _cardDracone4.gameObject.SetActive(false);

        var info2 = _cardEnemye2.GetComponent<ReturnInfo>();
        if (info2 != null)
        {
            yield return StartCoroutine(ReturnToOriginalPosition(_cardEnemye2.GetComponent<RectTransform>(), info2.State));
            Destroy(info2);
        }

        // === Dracone5 ������� Enemye2 ===
        yield return StartCoroutine(AnimateAttack(_cardDracone5.gameObject, _cardEnemye2, _particleSystem6));
        _cardEnemye2.SetActive(false);

        // === Enemye3 ������� Dracone5 (��������� �����) ===
        yield return StartCoroutine(AnimateAttack(_cardEnemye3, _cardDracone5.gameObject, _particleSystem7));
        _cardDracone5.gameObject.SetActive(false);

        yield return new WaitForSeconds(1f);

        _winDefeat.SetActive(true);
        StartCoroutine(FadeInVictory());

        yield return new WaitForSeconds(2f);
        _winFinal.gameObject.SetActive(true);
    }

    private IEnumerator AnimateAttack(GameObject attacker, GameObject target, ParticleSystem effect, bool returnToOriginal = true)
    {
        RectTransform attackerRect = attacker.GetComponent<RectTransform>();
        RectTransform targetRect = target.GetComponent<RectTransform>();

        // ��������� �������� ������
        AttackState state = new AttackState
        {
            OriginalParent = attackerRect.parent,
            OriginalLocalPos = attackerRect.localPosition
        };

        attackerRect.SetParent(_layer.transform, worldPositionStays: true);
        Vector3 targetPos = _layer.transform.InverseTransformPoint(targetRect.position);

        yield return StartCoroutine(ScaleTo(attackerRect, new Vector3(1.2f, 1.2f, 1f), 0.1f));
        yield return StartCoroutine(MoveTo(attackerRect, targetPos, 0.2f));
        effect.Play();
        yield return new WaitForSeconds(0.2f);
        yield return StartCoroutine(ScaleTo(attackerRect, Vector3.one, 0.1f));

        if (returnToOriginal)
        {
            yield return StartCoroutine(ReturnToOriginalPosition(attackerRect, state));
        }
        else
        {
            // ���������� ��������� ��� ������������ �������� �������
            attackerRect.gameObject.AddComponent<ReturnInfo>().State = state;
        }
    }

    private IEnumerator ReturnToOriginalPosition(RectTransform attackerRect, AttackState state)
    {
        attackerRect.SetParent(state.OriginalParent, worldPositionStays: true);
        yield return StartCoroutine(MoveTo(attackerRect, state.OriginalLocalPos, 0.2f));
    }

    private IEnumerator ScaleTo(RectTransform rectTransform, [Bridge.Ref] Vector3 target, float duration)
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

    private IEnumerator MoveTo(RectTransform rectTransform, [Bridge.Ref] Vector3 target, float duration)
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
        float appearDuration = 0.1f; // �������� ��������� ������
        float scaleDuration = 0.2f; // �������� �������� �������� ��������
        float smallScale = 0.5f;
        float overshootScale = 1.2f;

        // 1. ���������� ���� ������
        _winDefeat.SetActive(true);
        _victoryCanvasGroup.alpha = 0;
        _winDefeat.transform.localScale = Vector3.one;

        float elapsed = 0f;
        while (elapsed < appearDuration)
        {
            elapsed += Time.deltaTime;
            _victoryCanvasGroup.alpha = Mathf.Clamp01(elapsed / appearDuration);
            yield return null;
        }
        _victoryCanvasGroup.alpha = 1;

        // 2. �������� ������ �������
        yield return StartCoroutine(AnimatePopIn(_winInscription, smallScale, overshootScale, scaleDuration));

        // ����� ����� ���������
        yield return new WaitForSeconds(0.1f);

        // 3. �������� ������ �������
        yield return StartCoroutine(AnimatePopIn(_winInscription2, smallScale, overshootScale, scaleDuration, _winInscription2.transform.localScale));

        // ����� ����� ���������
        yield return new WaitForSeconds(0.1f);

        // 4. �������� ������� �������
        yield return StartCoroutine(AnimatePopIn(_winInscription3, smallScale, overshootScale, scaleDuration, _winInscription3.transform.localScale));
    }

    private IEnumerator AnimatePopIn(GameObject target, float startScale, float overshootScale, float duration, Vector3? targetScale = null)
    {
        target.SetActive(true);

        RectTransform rect = target.GetComponent<RectTransform>();
        rect.localScale = Vector3.one * startScale;

        Vector3 normalScale = targetScale ?? Vector3.one; // ���� �� ������� targetScale, �� ���������� Vector3.one

        float elapsed = 0f;
        Vector3 overshoot = Vector3.one * overshootScale;

        // ��� 1: ����������� �� overshootScale
        while (elapsed < duration / 2f)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / (duration / 2f);
            rect.localScale = Vector3.Lerp(Vector3.one * startScale, overshoot, t);
            yield return null;
        }

        rect.localScale = overshoot;

        // ��� 2: ��������� �� ����������� �������
        elapsed = 0f;
        while (elapsed < duration / 2f)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / (duration / 2f);
            rect.localScale = Vector3.Lerp(overshoot, normalScale, t);
            yield return null;
        }

        rect.localScale = normalScale;
    }
    private class AttackState
    {
        public Transform OriginalParent;
        public Vector3 OriginalLocalPos;
    }

    private class ReturnInfo : MonoBehaviour
    {
        public AttackState State;
    }
}
