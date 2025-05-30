using UnityEngine;

public class Scenario : MonoBehaviour
{
	[SerializeField]
	private Episode1 _episode1;

	[SerializeField]
	private Episode2 _episode2;

	[SerializeField]
	private Episode3 _episode3;

	[SerializeField]
	private Episode4v2 _episode4v2;

	private Card _takencard1;

	private Card _takencard2;

	private bool _taken = false;

	private int _cardsTaken = 0;

	private void OnEnable()
	{
		_episode1.End += TurnEpisode2;
		_episode2.End += TurnEpisode3;
		_episode3.End += TurnEpisode4;
	}

	private void OnDisable()
	{
		_episode1.End -= TurnEpisode2;
		_episode2.End -= TurnEpisode3;
		_episode3.End -= TurnEpisode4;
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
		_episode4v2.enabled = true;
	}
}
