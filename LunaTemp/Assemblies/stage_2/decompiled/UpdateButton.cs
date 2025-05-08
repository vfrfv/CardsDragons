using UnityEngine;
using UnityEngine.EventSystems;

public class UpdateButton : MonoBehaviour, IPointerClickHandler, IEventSystemHandler
{
	public Episode4v2 _episode;

	public GameObject _arm;

	public void OnPointerClick(PointerEventData eventData)
	{
		_episode.OnUpdateButtonClick();
	}
}
