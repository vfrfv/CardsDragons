using UnityEngine;

public class ClickCta : MonoBehaviour
{
    public GameObject GameObject;
    public GameObject GameObject2;

    public void Click()
    {
        GameObject2.SetActive(true);
        Luna.Unity.Playable.InstallFullGame();
        GameObject.SetActive(true);
    }
}
