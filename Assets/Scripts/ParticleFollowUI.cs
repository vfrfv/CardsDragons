using UnityEngine;

public class ParticleFollowUI : MonoBehaviour
{
    public RectTransform _buttonButtle;             // UI-������� (��������, ������)
    public RectTransform _buttonShop;               // ������ UI-�������
    public Camera uiCamera;                         // ������, ��������� � Canvas
    public ParticleSystem _particleEffectButton;    // Particle System ��� ������ ������
    public ParticleSystem _particleEffectButtonShop;// Particle System ��� ������ ������
    public float zOffset = 1.0f;                    // �������� �� ������

    void Update()
    {
        if (uiCamera == null)
            return;

        if (_buttonButtle != null && _particleEffectButton != null)
        {
            Vector2 screenPosButtle = RectTransformUtility.WorldToScreenPoint(uiCamera, _buttonButtle.position);
            Vector3 worldPosButtle = uiCamera.ScreenToWorldPoint(new Vector3(screenPosButtle.x, screenPosButtle.y, zOffset));
            _particleEffectButton.transform.position = worldPosButtle;
        }

        if (_buttonShop != null && _particleEffectButtonShop != null)
        {
            Vector2 screenPosShop = RectTransformUtility.WorldToScreenPoint(uiCamera, _buttonShop.position);
            Vector3 worldPosShop = uiCamera.ScreenToWorldPoint(new Vector3(screenPosShop.x, screenPosShop.y, zOffset));
            _particleEffectButtonShop.transform.position = worldPosShop;
        }
    }
}
