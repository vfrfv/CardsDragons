using UnityEngine;
using UnityEngine.EventSystems;

public class Card2V : MonoBehaviour, IPointerClickHandler
{
    public bool _us = true;
    public GameObject _arm;
    public Episode4v2 _episode;

    public bool _isMainCard = false; // Флаг: это ли _card

    public void OnPointerClick(PointerEventData eventData)
    {
        if (_arm != null)
        {
            _arm.SetActive(false);
        }


        if (_us && _episode != null)
        {
            Point[] points = {
                _episode._point1, _episode._point2, _episode._point3,
                _episode._point4, _episode._point5, _episode._point6
            };

            foreach (Point pt in points)
            {
                if (!pt._occupied)
                {
                    transform.SetParent(pt.transform);
                    transform.localPosition = Vector3.zero;
                    transform.localScale = Vector3.one;
                    pt._occupied = true;

                    // Если это _card, уведомляем об этом
                    if (_isMainCard)
                        _episode.NotifyCardChosen();

                    break;
                }
            }
        }
    }
}
