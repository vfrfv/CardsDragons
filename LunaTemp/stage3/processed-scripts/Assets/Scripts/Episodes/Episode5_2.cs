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

    private Card _cardDracone5;

    private CanvasGroup _victoryCanvasGroup;

    private void Awake()
    {
        if (_winDefeat != null)
        {
            _victoryCanvasGroup = _winDefeat.GetComponent<CanvasGroup>();
            if (_victoryCanvasGroup == null)
            {
                _victoryCanvasGroup = _winDefeat.AddComponent<CanvasGroup>();
            }
            _victoryCanvasGroup.alpha = 0;
            _winDefeat.SetActive(false);
        }
    }

    private void OnEnable()
    {
        _particleSystem.Play();
        _button.SetActive(true);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _particleSystem.Stop();
        Battle();
        _button.SetActive(false);
    }

    public void InitialiseCards(Card card1)
    {
        _cardDracone5 = card1;
    }

    private void Battle()
    {
        _battle.gameObject.SetActive(true);

        StartCoroutine(DestroyingEnemies());
    }

    private IEnumerator DestroyingEnemies()
    {
        yield return new WaitForSeconds(1f);

        _particleSystem1.Play();
        _particleSystem2.Play();
        _particleSystem3.Play();
        _particleSystem4.Play();
        _particleSystem5.Play();
        _particleSystem6.Play();
        _cardDracone5.PlayParticle();
        // партиклы

        yield return new WaitForSeconds(0.2f);

        _cardEnemye1.gameObject.SetActive(false);
        _cardEnemye2.gameObject.SetActive(false);
        _cardDracone1.SetActive(false);
        _cardDracone2.SetActive(false);
        _cardDracone3.SetActive(false);
        _cardDracone4.gameObject.SetActive(false);
        _cardDracone5.gameObject.SetActive(false);

        yield return new WaitForSeconds(1f);

        _winDefeat.SetActive(true);
        StartCoroutine(FadeInVictory());

        yield return new WaitForSeconds(2f);
        _winFinal.gameObject.SetActive(true);
    }

    private IEnumerator FadeInVictory()
    {
        float duration = 0.5f;
        float elapsed = 0f;

        _victoryCanvasGroup.alpha = 0;
        _winDefeat.transform.localScale = Vector3.zero;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;

            _victoryCanvasGroup.alpha = Mathf.Clamp01(t);
            _winDefeat.transform.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, t);

            yield return null;
        }

        _victoryCanvasGroup.alpha = 1;
        _winDefeat.transform.localScale = Vector3.one;
    }
}
