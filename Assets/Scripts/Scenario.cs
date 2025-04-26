using UnityEngine;

public class Scenario : MonoBehaviour
{
    [SerializeField] private Episode1 _episode1;
    [SerializeField] private Episode2 _episode2;
    [SerializeField] private Episode3 _episode3;
    [SerializeField] private Episode4 _episode4;
    [SerializeField] private Episode5 _episode5;
    [SerializeField] private Episode6 _episode6;
    [SerializeField] private Episode7 _episode7;

    private void OnEnable()
    {
        _episode1.End += TurnEpisode2;
        _episode2.End += TurnEpisode3;
        _episode3.End += TurnEpisode4;
        _episode4.End += TurnEpisode5;
        _episode5.End += TurnEpisode6;
        _episode6.End += TurnEpisode7;
    }

    private void OnDisable()
    {
        _episode1.End -= TurnEpisode2;
        _episode2.End -= TurnEpisode3;
        _episode3.End -= TurnEpisode4;
        _episode4.End -= TurnEpisode5;
        _episode5.End -= TurnEpisode6;
        _episode6.End -= TurnEpisode7;
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

    private void TurnEpisode3()
    {
        _episode2.enabled = false;
        _episode3.enabled = true;
    }

    private void TurnEpisode4()
    {
        _episode3.enabled = false;
        _episode4.gameObject.SetActive(true);
    }

    private void TurnEpisode5()
    {
        _episode4.enabled = false;
        _episode5.enabled = true;
    }

    private void TurnEpisode6()
    {
        _episode5.enabled = false;
        _episode6.enabled = true;
    }

    private void TurnEpisode7()
    {
        _episode6.enabled = false;
        _episode7.enabled = true;
    }
}
