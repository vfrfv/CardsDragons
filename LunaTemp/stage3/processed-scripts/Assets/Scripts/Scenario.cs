using UnityEngine;

public class Scenario : MonoBehaviour
{
    [SerializeField] private Episode1 _episode1;
    [SerializeField] private Episode2 _episode2;

    private void OnEnable()
    {
        _episode1.End += TurnEpisode2;
    }

    private void OnDisable()
    {
        _episode1.End -= TurnEpisode2;
    }

    private void Start()
    {
        _episode2.enabled = false;
        _episode1.enabled = true;
    }

    private void TurnEpisode2()
    {
        _episode1.enabled = false;
        _episode2.enabled = true;
    }
}
