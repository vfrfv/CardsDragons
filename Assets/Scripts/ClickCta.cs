using UnityEngine;
using UnityEngine.EventSystems;

public class ClickCta : MonoBehaviour
{
    public void Click()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
