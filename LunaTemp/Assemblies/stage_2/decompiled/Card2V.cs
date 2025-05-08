using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class Card2V : MonoBehaviour, IPointerClickHandler, IEventSystemHandler
{
	public bool _us = true;

	public GameObject _arm;

	public Episode4v2 _episode;

	public bool _dragon = false;

	public bool _isMainCard = false;

	[SerializeField]
	private float moveDuration = 0.5f;

	[SerializeField]
	private float scaleDuration = 0.2f;

	[SerializeField]
	private Vector3 targetScale = new Vector3(0.8f, 0.8f, 1f);

	private RectTransform rectTransform;

	private void Awake()
	{
		rectTransform = GetComponent<RectTransform>();
	}

	public void OnPointerClick(PointerEventData eventData)
	{
		if (_dragon)
		{
			_episode.CreateArmUp();
		}
		_episode._armO.gameObject.SetActive(false);
		if (!_us || !(_episode != null) || !_episode.TrySpendForCard())
		{
			return;
		}
		Point[] points = new Point[6] { _episode._point1, _episode._point2, _episode._point3, _episode._point4, _episode._point5, _episode._point6 };
		Point[] array = points;
		foreach (Point pt in array)
		{
			if (!pt._occupied)
			{
				pt._occupied = true;
				StartCoroutine(AnimateCardMoveAndScale(pt));
				if (_isMainCard)
				{
					_episode.NotifyCardChosen();
				}
				if (_dragon && !_episode._dragonCards.Contains(this))
				{
					_episode.IncrementDragonCard(this);
				}
				if (!_dragon && !_episode._dragonCards.Contains(this))
				{
					_episode.IncrementDragonCard(this);
				}
				break;
			}
		}
	}

	private IEnumerator AnimateCardMoveAndScale(Point targetPoint)
	{
		Vector3 originalScale = rectTransform.localScale;
		Vector3 startWorldPos = base.transform.position;
		Vector3 targetWorldPos = targetPoint.transform.position;
		yield return StartCoroutine(ScaleTo(targetScale, scaleDuration));
		float time = 0f;
		while (time < moveDuration)
		{
			base.transform.position = Vector3.Lerp(startWorldPos, targetWorldPos, time / moveDuration);
			time += Time.unscaledDeltaTime;
			yield return null;
		}
		base.transform.position = targetWorldPos;
		base.transform.SetParent(targetPoint.transform, true);
		yield return StartCoroutine(ScaleTo(originalScale, scaleDuration));
		rectTransform.localPosition = Vector3.zero;
		rectTransform.localScale = originalScale;
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
}
