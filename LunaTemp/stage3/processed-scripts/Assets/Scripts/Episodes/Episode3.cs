using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode3 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _battle;
    [SerializeField] private GameObject _button;

    [SerializeField] private GameObject _cardDracone;
    [SerializeField] private RectTransform _point;

    [SerializeField] private GameObject _cardEnemye1;
    [SerializeField] private GameObject _cardEnemye2;
    [SerializeField] private GameObject _cardEnemye3;

    [SerializeField] private ParticleSystem _particleSystem1;
    [SerializeField] private ParticleSystem _particleSystem2;
    [SerializeField] private ParticleSystem _particleSystem3;

    [SerializeField] private Text _textCoins;
    [SerializeField] private GameObject _winVictoty;

    public event Action End;

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
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        Battle();
        _button.SetActive(false);
    }

    private void Battle()
    {
        _cardDracone.transform.position = _point.position;
        _battle.gameObject.SetActive(true);

        StartCoroutine(DestroyingEnemies());
    }

    private IEnumerator DestroyingEnemies()
    {
        yield return new WaitForSeconds(0.7f);

        _particleSystem1.Play();
        _particleSystem2.Play();
        _particleSystem3.Play();

        yield return new WaitForSeconds(0.2f);

        _cardEnemye1.gameObject.SetActive(false);
        _cardEnemye2.gameObject.SetActive(false);
        _cardEnemye3.gameObject.SetActive(false);

        yield return new WaitForSeconds(1f);

        _winVictoty.SetActive(true);
        StartCoroutine(FadeInVictory());
        _textCoins.text = "7";

        yield return new WaitForSeconds(2f);

        _battle.gameObject.SetActive(false);
        _winVictoty.gameObject.SetActive(false);
        End?.Invoke();
    }

    private IEnumerator FadeInVictory()
    {
        float duration = 0.5f;
        float elapsed = 0f;

        _victoryCanvasGroup.alpha = 0;
        _winVictoty.transform.localScale = Vector3.zero;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;

            _victoryCanvasGroup.alpha = Mathf.Clamp01(t);
            _winVictoty.transform.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, t);

            yield return null;
        }

        _victoryCanvasGroup.alpha = 1;
        _winVictoty.transform.localScale = Vector3.one;
    }
}