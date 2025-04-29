using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class Episode7 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _battle;
    [SerializeField] private GameObject _button;

    [SerializeField] private GameObject _cardEnemye1;
    [SerializeField] private GameObject _cardEnemye2;
    [SerializeField] private GameObject _cardEnemye3;
    [SerializeField] private GameObject _cardEnemye4;
    [SerializeField] private GameObject _cardEnemye5;
    [SerializeField] private GameObject _cardEnemye6;

    [SerializeField] private GameObject _cardDragon1;
    [SerializeField] private GameObject _cardDragon2;
    [SerializeField] private GameObject _cardDragon3;

    [SerializeField] private ParticleSystem _particleSystem1;
    [SerializeField] private ParticleSystem _particleSystem2;
    [SerializeField] private ParticleSystem _particleSystem3;
    [SerializeField] private ParticleSystem _particleSystem4;
    [SerializeField] private ParticleSystem _particleSystem5;
    [SerializeField] private ParticleSystem _particleSystem6;

    [SerializeField] private GameObject _winVictoty;
    [SerializeField] private GameObject _winFinal;

    [SerializeField] private ParticleSystem _particleSystem;
    [SerializeField] private ParticleSystem _particleDragon;

    [SerializeField] private Episode3 _episode3;

    private CanvasGroup _victoryCanvasGroup;

    private void Awake()
    {
        if (_winVictoty != null)
        {
            _victoryCanvasGroup = _winVictoty.GetComponent<CanvasGroup>();
            if (_victoryCanvasGroup == null)
            {
                _victoryCanvasGroup = _winVictoty.AddComponent<CanvasGroup>();
            }
            _victoryCanvasGroup.alpha = 0;
            _winVictoty.SetActive(false);
        }
    }

    private void OnEnable()
    {
        _button.SetActive(true);
        _particleSystem.Play();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        Battle();
        _button.SetActive(false);
        _particleSystem.Stop();
        _particleDragon.Stop();
    }

    private void Battle()
    {
        _battle.gameObject.SetActive(true);
        StartCoroutine(AnimateDragons());
    }

    private IEnumerator AnimateDragons()
    {
        // ������ ������� �� ������ � ������� ��� ��������
        Vector3 originalDragon1Pos = _cardDragon1.GetComponent<RectTransform>().localPosition;
        Vector3 originalDragon2Pos = _cardDragon2.GetComponent<RectTransform>().localPosition;
        Vector3 originalDragon3Pos = _cardDragon3.GetComponent<RectTransform>().localPosition;

        // ������� ������� 1 � ������ 1 � 2
        Vector3 enemy1Pos = _cardEnemye1.GetComponent<RectTransform>().position;
        Vector3 enemy2Pos = _cardEnemye2.GetComponent<RectTransform>().position;

        // �������� ����� �� ������� �����
        yield return StartCoroutine(AnimateAttack(_cardDragon1, _cardEnemye1, enemy1Pos, _particleSystem6));
        _cardEnemye1.SetActive(false); // ���������� ������� �����

        // �������� ����� �� ������� �����
        yield return StartCoroutine(AnimateAttack(_cardDragon1, _cardEnemye2, enemy2Pos, _particleSystem1));
        _cardEnemye2.SetActive(false); // ���������� ������� �����

        // ����� ����������� ���� ������ ���������� ������� �� �������� �������
        yield return StartCoroutine(MoveTo(_cardDragon1.GetComponent<RectTransform>(), originalDragon1Pos, 0.1f));

        // ������� ������� 2 � ������ 3 � 4
        Vector3 enemy3Pos = _cardEnemye3.GetComponent<RectTransform>().position;
        Vector3 enemy4Pos = _cardEnemye4.GetComponent<RectTransform>().position;

        // �������� ����� �� �������� �����
        yield return StartCoroutine(AnimateAttack(_cardDragon2, _cardEnemye3, enemy3Pos, _particleSystem5));
        _cardEnemye3.SetActive(false); // ���������� �������� �����

        // �������� ����� �� ���������� �����
        yield return StartCoroutine(AnimateAttack(_cardDragon2, _cardEnemye4, enemy4Pos, _particleSystem2));
        _cardEnemye4.SetActive(false); // ���������� ���������� �����

        // ����� ����������� ���� ������ ���������� ������� �� �������� �������
        yield return StartCoroutine(MoveTo(_cardDragon2.GetComponent<RectTransform>(), originalDragon2Pos, 0.1f));

        // ������� ������� 3 � ������ 5 � 6
        Vector3 enemy5Pos = _cardEnemye5.GetComponent<RectTransform>().position;
        Vector3 enemy6Pos = _cardEnemye6.GetComponent<RectTransform>().position;

        // �������� ����� �� ������ �����
        yield return StartCoroutine(AnimateAttack(_cardDragon3, _cardEnemye5, enemy5Pos, _particleSystem3));
        _cardEnemye5.SetActive(false); // ���������� ������ �����

        // �������� ����� �� ������� �����
        yield return StartCoroutine(AnimateAttack(_cardDragon3, _cardEnemye6, enemy6Pos, _particleSystem4));
        _cardEnemye6.SetActive(false); // ���������� ������� �����

        // ����� ����������� ���� ������ ���������� ������� �� �������� �������
        yield return StartCoroutine(MoveTo(_cardDragon3.GetComponent<RectTransform>(), originalDragon3Pos, 0.1f));

        // ����� ���� ��� ������� ��������� ���� ������, ���������� ������
        yield return new WaitForSeconds(1f);
        _winVictoty.SetActive(true);
        //StartCoroutine(FadeInVictory());
         StartCoroutine(_episode3.FadeInVictory());

        yield return new WaitForSeconds(2f);
        _winFinal.gameObject.SetActive(true);
    }


    private IEnumerator AnimateAttack(GameObject dragon, GameObject enemy, [Bridge.Ref] Vector3 enemyPosition, ParticleSystem particle)
    {
        RectTransform dragonRect = dragon.GetComponent<RectTransform>();
        Vector3 originalPosition = dragonRect.localPosition;
        Vector3 originalScale = dragonRect.localScale;

        // ����������� ������� ���������� ����� � ��������� ���������� ������������ �������� �������
        Vector3 localEnemyPos = dragonRect.parent.InverseTransformPoint(enemyPosition);

        // ��������� �������
        yield return StartCoroutine(ScaleTo(dragonRect, new Vector3(1.2f, 1.2f, 1f), 0.1f));

        // ������� ������� � �����
        yield return StartCoroutine(MoveTo(dragonRect, localEnemyPos, 0.1f));

        // ������ �����
        particle.Play();

        // ���������� ������� � �������� ���������
        yield return new WaitForSeconds(0.2f);

        // ���������� ������� � �������� �������
        yield return StartCoroutine(ScaleTo(dragonRect, originalScale, 0.1f));

        // ���������� ������� �� ��������� �������
        yield return StartCoroutine(MoveTo(dragonRect, originalPosition, 0.1f));
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

    //private IEnumerator FadeInVictory()
    //{
    //    //float duration = 0.5f;
    //    //float elapsed = 0f;

    //    //_victoryCanvasGroup.alpha = 0;
    //    //_winVictoty.transform.localScale = Vector3.zero;

    //    //while (elapsed < duration)
    //    //{
    //    //    elapsed += Time.deltaTime;
    //    //    float t = elapsed / duration;

    //    //    _victoryCanvasGroup.alpha = Mathf.Clamp01(t);
    //    //    _winVictoty.transform.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, t);

    //    //    yield return null;
    //    //}

    //    //_victoryCanvasGroup.alpha = 1;
    //    //_winVictoty.transform.localScale = Vector3.one;
    //}
}
