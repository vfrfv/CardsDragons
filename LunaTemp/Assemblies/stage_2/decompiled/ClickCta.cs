using Luna.Unity;
using UnityEngine;

public class ClickCta : MonoBehaviour
{
	public GameObject GameObject;

	public GameObject GameObject2;

	public void Click()
	{
		GameObject2.SetActive(true);
		Playable.InstallFullGame();
		GameObject.SetActive(true);
	}
}
