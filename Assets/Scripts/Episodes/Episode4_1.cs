using System;
using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Episode4_1 : MonoBehaviour, IPointerClickHandler
{
    [SerializeField] private GameObject _cart1__2;
    [SerializeField] private GameObject _cart2__2;
    [SerializeField] private GameObject _cart3__2;

    [SerializeField] private GameObject _cart1_1;
    [SerializeField] private GameObject _cart2_1;
    [SerializeField] private GameObject _cart3_1;

    [SerializeField] private GameObject _arm;
    [SerializeField] private Text _coinText;

    [SerializeField] private ParticleSystem _particleSystem;
    [SerializeField] private ParticleSystem _particleDragon;

    public event Action End2;

    private void OnEnable()
    {
        _particleDragon.Play();
        _particleSystem.Play();
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        _particleSystem.Stop();
        _coinText.text = "6"; // Update the coin count

        // Start the animation for disappearing old objects and showing new ones
        StartCoroutine(AnimateObjects());
    }

    private IEnumerator AnimateObjects()
    {
        // Start hiding the old objects with scale animation
        Coroutine hideCart1_1 = StartCoroutine(ScaleAndHide(_cart1_1, 0.5f));
        Coroutine hideCart2_1 = StartCoroutine(ScaleAndHide(_cart2_1, 0.5f));
        Coroutine hideCart3_1 = StartCoroutine(ScaleAndHide(_cart3_1, 0.5f));

        // Activate the new objects
        _cart1__2.SetActive(true);
        _cart2__2.SetActive(true);
        _cart3__2.SetActive(true);

        // Start showing the new objects with scale-up animation
        Coroutine showCart1_2 = StartCoroutine(ScaleUp(_cart1__2));
        Coroutine showCart2_2 = StartCoroutine(ScaleUp(_cart2__2));
        Coroutine showCart3_2 = StartCoroutine(ScaleUp(_cart3__2));

        // Wait for the old objects to finish hiding
        yield return hideCart1_1;
        yield return hideCart2_1;
        yield return hideCart3_1;

        // Wait for the new objects to finish showing
        yield return showCart1_2;
        yield return showCart2_2;
        yield return showCart3_2;

        // Deactivate the old arm object
        _arm.SetActive(false);

        // Trigger the end event
        End2?.Invoke();

        // Disable this script after the animation is done
        this.enabled = false;
    }

    private IEnumerator ScaleAndHide(GameObject obj, float targetScale)
    {
        RectTransform rectTransform = obj.GetComponent<RectTransform>();
        Vector3 originalScale = rectTransform.localScale;
        Vector3 target = Vector3.one * targetScale;
        float duration = 0.2f;
        float elapsed = 0f;

        // Smoothly scale down the object
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            rectTransform.localScale = Vector3.Lerp(originalScale, target, t);
            yield return null;
        }

        rectTransform.localScale = target;
        obj.SetActive(false); // Deactivate the object after the animation
    }

    private IEnumerator ScaleUp(GameObject obj)
    {
        RectTransform rectTransform = obj.GetComponent<RectTransform>();
        rectTransform.localScale = Vector3.zero; // Start from small size

        float duration = 0.2f;
        float elapsed = 0f;

        // Smoothly scale up the object to its original size
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            rectTransform.localScale = Vector3.Lerp(Vector3.zero, Vector3.one, t);
            yield return null;
        }

        rectTransform.localScale = Vector3.one; // Ensure it's at full size at the end
    }
}
