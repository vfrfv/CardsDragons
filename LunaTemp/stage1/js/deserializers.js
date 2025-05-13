var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.JointSpring' )
  var i1549 = data
  i1548.spring = i1549[0]
  i1548.damper = i1549[1]
  i1548.targetPosition = i1549[2]
  return i1548
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.JointMotor' )
  var i1551 = data
  i1550.m_TargetVelocity = i1551[0]
  i1550.m_Force = i1551[1]
  i1550.m_FreeSpin = i1551[2]
  return i1550
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.JointLimits' )
  var i1553 = data
  i1552.m_Min = i1553[0]
  i1552.m_Max = i1553[1]
  i1552.m_Bounciness = i1553[2]
  i1552.m_BounceMinVelocity = i1553[3]
  i1552.m_ContactDistance = i1553[4]
  i1552.minBounce = i1553[5]
  i1552.maxBounce = i1553[6]
  return i1552
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.JointDrive' )
  var i1555 = data
  i1554.m_PositionSpring = i1555[0]
  i1554.m_PositionDamper = i1555[1]
  i1554.m_MaximumForce = i1555[2]
  i1554.m_UseAcceleration = i1555[3]
  return i1554
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1557 = data
  i1556.m_Spring = i1557[0]
  i1556.m_Damper = i1557[1]
  return i1556
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1559 = data
  i1558.m_Limit = i1559[0]
  i1558.m_Bounciness = i1559[1]
  i1558.m_ContactDistance = i1559[2]
  return i1558
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1561 = data
  i1560.m_ExtremumSlip = i1561[0]
  i1560.m_ExtremumValue = i1561[1]
  i1560.m_AsymptoteSlip = i1561[2]
  i1560.m_AsymptoteValue = i1561[3]
  i1560.m_Stiffness = i1561[4]
  return i1560
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1563 = data
  i1562.m_LowerAngle = i1563[0]
  i1562.m_UpperAngle = i1563[1]
  return i1562
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1565 = data
  i1564.m_MotorSpeed = i1565[0]
  i1564.m_MaximumMotorTorque = i1565[1]
  return i1564
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1567 = data
  i1566.m_DampingRatio = i1567[0]
  i1566.m_Frequency = i1567[1]
  i1566.m_Angle = i1567[2]
  return i1566
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1569 = data
  i1568.m_LowerTranslation = i1569[0]
  i1568.m_UpperTranslation = i1569[1]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.width = i1571[1]
  i1570.height = i1571[2]
  i1570.mipmapCount = i1571[3]
  i1570.anisoLevel = i1571[4]
  i1570.filterMode = i1571[5]
  i1570.hdr = !!i1571[6]
  i1570.format = i1571[7]
  i1570.wrapMode = i1571[8]
  i1570.alphaIsTransparency = !!i1571[9]
  i1570.alphaSource = i1571[10]
  i1570.graphicsFormat = i1571[11]
  i1570.sRGBTexture = !!i1571[12]
  i1570.desiredColorSpace = i1571[13]
  i1570.wrapU = i1571[14]
  i1570.wrapV = i1571[15]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1573 = data
  i1572.pivot = new pc.Vec2( i1573[0], i1573[1] )
  i1572.anchorMin = new pc.Vec2( i1573[2], i1573[3] )
  i1572.anchorMax = new pc.Vec2( i1573[4], i1573[5] )
  i1572.sizeDelta = new pc.Vec2( i1573[6], i1573[7] )
  i1572.anchoredPosition3D = new pc.Vec3( i1573[8], i1573[9], i1573[10] )
  i1572.rotation = new pc.Quat(i1573[11], i1573[12], i1573[13], i1573[14])
  i1572.scale = new pc.Vec3( i1573[15], i1573[16], i1573[17] )
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1575 = data
  i1574.cullTransparentMesh = !!i1575[0]
  return i1574
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.Image' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'm_Sprite')
  i1576.m_Type = i1577[2]
  i1576.m_PreserveAspect = !!i1577[3]
  i1576.m_FillCenter = !!i1577[4]
  i1576.m_FillMethod = i1577[5]
  i1576.m_FillAmount = i1577[6]
  i1576.m_FillClockwise = !!i1577[7]
  i1576.m_FillOrigin = i1577[8]
  i1576.m_UseSpriteMesh = !!i1577[9]
  i1576.m_PixelsPerUnitMultiplier = i1577[10]
  request.r(i1577[11], i1577[12], 0, i1576, 'm_Material')
  i1576.m_Maskable = !!i1577[13]
  i1576.m_Color = new pc.Color(i1577[14], i1577[15], i1577[16], i1577[17])
  i1576.m_RaycastTarget = !!i1577[18]
  i1576.m_RaycastPadding = new pc.Vec4( i1577[19], i1577[20], i1577[21], i1577[22] )
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'animatorController')
  request.r(i1579[2], i1579[3], 0, i1578, 'avatar')
  i1578.updateMode = i1579[4]
  i1578.hasTransformHierarchy = !!i1579[5]
  i1578.applyRootMotion = !!i1579[6]
  var i1581 = i1579[7]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1578.humanBones = i1580
  i1578.enabled = !!i1579[8]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1585 = data
  i1584.name = i1585[0]
  i1584.tagId = i1585[1]
  i1584.enabled = !!i1585[2]
  i1584.isStatic = !!i1585[3]
  i1584.layer = i1585[4]
  return i1584
}

Deserializers["Episode1"] = function (request, data, root) {
  var i1586 = root || request.c( 'Episode1' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, '_arm')
  request.r(i1587[2], i1587[3], 0, i1586, '_points')
  request.r(i1587[4], i1587[5], 0, i1586, '_unit')
  request.r(i1587[6], i1587[7], 0, i1586, '_particleSystem')
  request.r(i1587[8], i1587[9], 0, i1586, '_textCoins')
  request.r(i1587[10], i1587[11], 0, i1586, '_textDamage')
  request.r(i1587[12], i1587[13], 0, i1586, '_textHealth')
  request.r(i1587[14], i1587[15], 0, i1586, '_textHealth2')
  request.r(i1587[16], i1587[17], 0, i1586, '_textDamage2')
  i1586.scaleDuration = i1587[18]
  i1586.moveDuration = i1587[19]
  i1586.targetScale = new pc.Vec3( i1587[20], i1587[21], i1587[22] )
  return i1586
}

Deserializers["Card2V"] = function (request, data, root) {
  var i1588 = root || request.c( 'Card2V' )
  var i1589 = data
  i1588._us = !!i1589[0]
  request.r(i1589[1], i1589[2], 0, i1588, '_arm')
  request.r(i1589[3], i1589[4], 0, i1588, '_episode')
  i1588._dragon = !!i1589[5]
  i1588._isMainCard = !!i1589[6]
  i1588.moveDuration = i1589[7]
  i1588.scaleDuration = i1589[8]
  i1588.targetScale = new pc.Vec3( i1589[9], i1589[10], i1589[11] )
  return i1588
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.UI.Text' )
  var i1591 = data
  i1590.m_FontData = request.d('UnityEngine.UI.FontData', i1591[0], i1590.m_FontData)
  i1590.m_Text = i1591[1]
  request.r(i1591[2], i1591[3], 0, i1590, 'm_Material')
  i1590.m_Maskable = !!i1591[4]
  i1590.m_Color = new pc.Color(i1591[5], i1591[6], i1591[7], i1591[8])
  i1590.m_RaycastTarget = !!i1591[9]
  i1590.m_RaycastPadding = new pc.Vec4( i1591[10], i1591[11], i1591[12], i1591[13] )
  return i1590
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'm_Font')
  i1592.m_FontSize = i1593[2]
  i1592.m_FontStyle = i1593[3]
  i1592.m_BestFit = !!i1593[4]
  i1592.m_MinSize = i1593[5]
  i1592.m_MaxSize = i1593[6]
  i1592.m_Alignment = i1593[7]
  i1592.m_AlignByGeometry = !!i1593[8]
  i1592.m_RichText = !!i1593[9]
  i1592.m_HorizontalOverflow = i1593[10]
  i1592.m_VerticalOverflow = i1593[11]
  i1592.m_LineSpacing = i1593[12]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1595 = data
  i1594.position = new pc.Vec3( i1595[0], i1595[1], i1595[2] )
  i1594.scale = new pc.Vec3( i1595[3], i1595[4], i1595[5] )
  i1594.rotation = new pc.Quat(i1595[6], i1595[7], i1595[8], i1595[9])
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1597 = data
  i1596.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1597[0], i1596.main)
  i1596.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1597[1], i1596.colorBySpeed)
  i1596.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1597[2], i1596.colorOverLifetime)
  i1596.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1597[3], i1596.emission)
  i1596.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1597[4], i1596.rotationBySpeed)
  i1596.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1597[5], i1596.rotationOverLifetime)
  i1596.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1597[6], i1596.shape)
  i1596.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1597[7], i1596.sizeBySpeed)
  i1596.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1597[8], i1596.sizeOverLifetime)
  i1596.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1597[9], i1596.textureSheetAnimation)
  i1596.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1597[10], i1596.velocityOverLifetime)
  i1596.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1597[11], i1596.noise)
  i1596.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1597[12], i1596.inheritVelocity)
  i1596.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1597[13], i1596.forceOverLifetime)
  i1596.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1597[14], i1596.limitVelocityOverLifetime)
  i1596.useAutoRandomSeed = !!i1597[15]
  i1596.randomSeed = i1597[16]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1598 = root || new pc.ParticleSystemMain()
  var i1599 = data
  i1598.duration = i1599[0]
  i1598.loop = !!i1599[1]
  i1598.prewarm = !!i1599[2]
  i1598.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[3], i1598.startDelay)
  i1598.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[4], i1598.startLifetime)
  i1598.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[5], i1598.startSpeed)
  i1598.startSize3D = !!i1599[6]
  i1598.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[7], i1598.startSizeX)
  i1598.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[8], i1598.startSizeY)
  i1598.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[9], i1598.startSizeZ)
  i1598.startRotation3D = !!i1599[10]
  i1598.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[11], i1598.startRotationX)
  i1598.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[12], i1598.startRotationY)
  i1598.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[13], i1598.startRotationZ)
  i1598.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1599[14], i1598.startColor)
  i1598.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[15], i1598.gravityModifier)
  i1598.simulationSpace = i1599[16]
  request.r(i1599[17], i1599[18], 0, i1598, 'customSimulationSpace')
  i1598.simulationSpeed = i1599[19]
  i1598.useUnscaledTime = !!i1599[20]
  i1598.scalingMode = i1599[21]
  i1598.playOnAwake = !!i1599[22]
  i1598.maxParticles = i1599[23]
  i1598.emitterVelocityMode = i1599[24]
  i1598.stopAction = i1599[25]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1600 = root || new pc.MinMaxCurve()
  var i1601 = data
  i1600.mode = i1601[0]
  i1600.curveMin = new pc.AnimationCurve( { keys_flow: i1601[1] } )
  i1600.curveMax = new pc.AnimationCurve( { keys_flow: i1601[2] } )
  i1600.curveMultiplier = i1601[3]
  i1600.constantMin = i1601[4]
  i1600.constantMax = i1601[5]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1602 = root || new pc.MinMaxGradient()
  var i1603 = data
  i1602.mode = i1603[0]
  i1602.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1603[1], i1602.gradientMin)
  i1602.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1603[2], i1602.gradientMax)
  i1602.colorMin = new pc.Color(i1603[3], i1603[4], i1603[5], i1603[6])
  i1602.colorMax = new pc.Color(i1603[7], i1603[8], i1603[9], i1603[10])
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1605 = data
  i1604.mode = i1605[0]
  var i1607 = i1605[1]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1607[i + 0]) );
  }
  i1604.colorKeys = i1606
  var i1609 = i1605[2]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1609[i + 0]) );
  }
  i1604.alphaKeys = i1608
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1610 = root || new pc.ParticleSystemColorBySpeed()
  var i1611 = data
  i1610.enabled = !!i1611[0]
  i1610.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1611[1], i1610.color)
  i1610.range = new pc.Vec2( i1611[2], i1611[3] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1615 = data
  i1614.color = new pc.Color(i1615[0], i1615[1], i1615[2], i1615[3])
  i1614.time = i1615[4]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1619 = data
  i1618.alpha = i1619[0]
  i1618.time = i1619[1]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1620 = root || new pc.ParticleSystemColorOverLifetime()
  var i1621 = data
  i1620.enabled = !!i1621[0]
  i1620.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1621[1], i1620.color)
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1622 = root || new pc.ParticleSystemEmitter()
  var i1623 = data
  i1622.enabled = !!i1623[0]
  i1622.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[1], i1622.rateOverTime)
  i1622.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[2], i1622.rateOverDistance)
  var i1625 = i1623[3]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1625[i + 0]) );
  }
  i1622.bursts = i1624
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1628 = root || new pc.ParticleSystemBurst()
  var i1629 = data
  i1628.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[0], i1628.count)
  i1628.cycleCount = i1629[1]
  i1628.minCount = i1629[2]
  i1628.maxCount = i1629[3]
  i1628.repeatInterval = i1629[4]
  i1628.time = i1629[5]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1630 = root || new pc.ParticleSystemRotationBySpeed()
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[1], i1630.x)
  i1630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[2], i1630.y)
  i1630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[3], i1630.z)
  i1630.separateAxes = !!i1631[4]
  i1630.range = new pc.Vec2( i1631[5], i1631[6] )
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1632 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[1], i1632.x)
  i1632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[2], i1632.y)
  i1632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[3], i1632.z)
  i1632.separateAxes = !!i1633[4]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1634 = root || new pc.ParticleSystemShape()
  var i1635 = data
  i1634.enabled = !!i1635[0]
  i1634.shapeType = i1635[1]
  i1634.randomDirectionAmount = i1635[2]
  i1634.sphericalDirectionAmount = i1635[3]
  i1634.randomPositionAmount = i1635[4]
  i1634.alignToDirection = !!i1635[5]
  i1634.radius = i1635[6]
  i1634.radiusMode = i1635[7]
  i1634.radiusSpread = i1635[8]
  i1634.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[9], i1634.radiusSpeed)
  i1634.radiusThickness = i1635[10]
  i1634.angle = i1635[11]
  i1634.length = i1635[12]
  i1634.boxThickness = new pc.Vec3( i1635[13], i1635[14], i1635[15] )
  i1634.meshShapeType = i1635[16]
  request.r(i1635[17], i1635[18], 0, i1634, 'mesh')
  request.r(i1635[19], i1635[20], 0, i1634, 'meshRenderer')
  request.r(i1635[21], i1635[22], 0, i1634, 'skinnedMeshRenderer')
  i1634.useMeshMaterialIndex = !!i1635[23]
  i1634.meshMaterialIndex = i1635[24]
  i1634.useMeshColors = !!i1635[25]
  i1634.normalOffset = i1635[26]
  i1634.arc = i1635[27]
  i1634.arcMode = i1635[28]
  i1634.arcSpread = i1635[29]
  i1634.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[30], i1634.arcSpeed)
  i1634.donutRadius = i1635[31]
  i1634.position = new pc.Vec3( i1635[32], i1635[33], i1635[34] )
  i1634.rotation = new pc.Vec3( i1635[35], i1635[36], i1635[37] )
  i1634.scale = new pc.Vec3( i1635[38], i1635[39], i1635[40] )
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1636 = root || new pc.ParticleSystemSizeBySpeed()
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[1], i1636.x)
  i1636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[2], i1636.y)
  i1636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[3], i1636.z)
  i1636.separateAxes = !!i1637[4]
  i1636.range = new pc.Vec2( i1637[5], i1637[6] )
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1638 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1639 = data
  i1638.enabled = !!i1639[0]
  i1638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[1], i1638.x)
  i1638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[2], i1638.y)
  i1638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[3], i1638.z)
  i1638.separateAxes = !!i1639[4]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1640 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1641 = data
  i1640.enabled = !!i1641[0]
  i1640.mode = i1641[1]
  i1640.animation = i1641[2]
  i1640.numTilesX = i1641[3]
  i1640.numTilesY = i1641[4]
  i1640.useRandomRow = !!i1641[5]
  i1640.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1641[6], i1640.frameOverTime)
  i1640.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1641[7], i1640.startFrame)
  i1640.cycleCount = i1641[8]
  i1640.rowIndex = i1641[9]
  i1640.flipU = i1641[10]
  i1640.flipV = i1641[11]
  i1640.spriteCount = i1641[12]
  var i1643 = i1641[13]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 2, i1642, '')
  }
  i1640.sprites = i1642
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1646 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1647 = data
  i1646.enabled = !!i1647[0]
  i1646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[1], i1646.x)
  i1646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[2], i1646.y)
  i1646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[3], i1646.z)
  i1646.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[4], i1646.radial)
  i1646.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[5], i1646.speedModifier)
  i1646.space = i1647[6]
  i1646.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[7], i1646.orbitalX)
  i1646.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[8], i1646.orbitalY)
  i1646.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[9], i1646.orbitalZ)
  i1646.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[10], i1646.orbitalOffsetX)
  i1646.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[11], i1646.orbitalOffsetY)
  i1646.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[12], i1646.orbitalOffsetZ)
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1648 = root || new pc.ParticleSystemNoise()
  var i1649 = data
  i1648.enabled = !!i1649[0]
  i1648.separateAxes = !!i1649[1]
  i1648.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[2], i1648.strengthX)
  i1648.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[3], i1648.strengthY)
  i1648.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[4], i1648.strengthZ)
  i1648.frequency = i1649[5]
  i1648.damping = !!i1649[6]
  i1648.octaveCount = i1649[7]
  i1648.octaveMultiplier = i1649[8]
  i1648.octaveScale = i1649[9]
  i1648.quality = i1649[10]
  i1648.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[11], i1648.scrollSpeed)
  i1648.scrollSpeedMultiplier = i1649[12]
  i1648.remapEnabled = !!i1649[13]
  i1648.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[14], i1648.remapX)
  i1648.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[15], i1648.remapY)
  i1648.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[16], i1648.remapZ)
  i1648.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[17], i1648.positionAmount)
  i1648.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[18], i1648.rotationAmount)
  i1648.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[19], i1648.sizeAmount)
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1650 = root || new pc.ParticleSystemInheritVelocity()
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.mode = i1651[1]
  i1650.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[2], i1650.curve)
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1652 = root || new pc.ParticleSystemForceOverLifetime()
  var i1653 = data
  i1652.enabled = !!i1653[0]
  i1652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[1], i1652.x)
  i1652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[2], i1652.y)
  i1652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[3], i1652.z)
  i1652.space = i1653[4]
  i1652.randomized = !!i1653[5]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1654 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1655 = data
  i1654.enabled = !!i1655[0]
  i1654.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1655[1], i1654.limit)
  i1654.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1655[2], i1654.limitX)
  i1654.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1655[3], i1654.limitY)
  i1654.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1655[4], i1654.limitZ)
  i1654.dampen = i1655[5]
  i1654.separateAxes = !!i1655[6]
  i1654.space = i1655[7]
  i1654.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1655[8], i1654.drag)
  i1654.multiplyDragByParticleSize = !!i1655[9]
  i1654.multiplyDragByParticleVelocity = !!i1655[10]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1657 = data
  i1656.enabled = !!i1657[0]
  request.r(i1657[1], i1657[2], 0, i1656, 'sharedMaterial')
  var i1659 = i1657[3]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 2, i1658, '')
  }
  i1656.sharedMaterials = i1658
  i1656.receiveShadows = !!i1657[4]
  i1656.shadowCastingMode = i1657[5]
  i1656.sortingLayerID = i1657[6]
  i1656.sortingOrder = i1657[7]
  i1656.lightmapIndex = i1657[8]
  i1656.lightmapSceneIndex = i1657[9]
  i1656.lightmapScaleOffset = new pc.Vec4( i1657[10], i1657[11], i1657[12], i1657[13] )
  i1656.lightProbeUsage = i1657[14]
  i1656.reflectionProbeUsage = i1657[15]
  request.r(i1657[16], i1657[17], 0, i1656, 'mesh')
  i1656.meshCount = i1657[18]
  i1656.activeVertexStreamsCount = i1657[19]
  i1656.alignment = i1657[20]
  i1656.renderMode = i1657[21]
  i1656.sortMode = i1657[22]
  i1656.lengthScale = i1657[23]
  i1656.velocityScale = i1657[24]
  i1656.cameraVelocityScale = i1657[25]
  i1656.normalDirection = i1657[26]
  i1656.sortingFudge = i1657[27]
  i1656.minParticleSize = i1657[28]
  i1656.maxParticleSize = i1657[29]
  i1656.pivot = new pc.Vec3( i1657[30], i1657[31], i1657[32] )
  request.r(i1657[33], i1657[34], 0, i1656, 'trailMaterial')
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'clip')
  request.r(i1663[2], i1663[3], 0, i1662, 'outputAudioMixerGroup')
  i1662.playOnAwake = !!i1663[4]
  i1662.loop = !!i1663[5]
  i1662.time = i1663[6]
  i1662.volume = i1663[7]
  i1662.pitch = i1663[8]
  i1662.enabled = !!i1663[9]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1664 = root || new pc.UnityMaterial()
  var i1665 = data
  i1664.name = i1665[0]
  request.r(i1665[1], i1665[2], 0, i1664, 'shader')
  i1664.renderQueue = i1665[3]
  i1664.enableInstancing = !!i1665[4]
  var i1667 = i1665[5]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1667[i + 0]) );
  }
  i1664.floatParameters = i1666
  var i1669 = i1665[6]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1669[i + 0]) );
  }
  i1664.colorParameters = i1668
  var i1671 = i1665[7]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1671[i + 0]) );
  }
  i1664.vectorParameters = i1670
  var i1673 = i1665[8]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1673[i + 0]) );
  }
  i1664.textureParameters = i1672
  var i1675 = i1665[9]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1675[i + 0]) );
  }
  i1664.materialFlags = i1674
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.value = i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.value = new pc.Color(i1683[1], i1683[2], i1683[3], i1683[4])
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = new pc.Vec4( i1687[1], i1687[2], i1687[3], i1687[4] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1691 = data
  i1690.name = i1691[0]
  request.r(i1691[1], i1691[2], 0, i1690, 'value')
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.enabled = !!i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.halfPrecision = !!i1697[1]
  i1696.useUInt32IndexFormat = !!i1697[2]
  i1696.vertexCount = i1697[3]
  i1696.aabb = i1697[4]
  var i1699 = i1697[5]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( !!i1699[i + 0] );
  }
  i1696.streams = i1698
  i1696.vertices = i1697[6]
  var i1701 = i1697[7]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1701[i + 0]) );
  }
  i1696.subMeshes = i1700
  var i1703 = i1697[8]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 16) {
    i1702.push( new pc.Mat4().setData(i1703[i + 0], i1703[i + 1], i1703[i + 2], i1703[i + 3],  i1703[i + 4], i1703[i + 5], i1703[i + 6], i1703[i + 7],  i1703[i + 8], i1703[i + 9], i1703[i + 10], i1703[i + 11],  i1703[i + 12], i1703[i + 13], i1703[i + 14], i1703[i + 15]) );
  }
  i1696.bindposes = i1702
  var i1705 = i1697[9]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1705[i + 0]) );
  }
  i1696.blendShapes = i1704
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1711 = data
  i1710.triangles = i1711[0]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1717 = data
  i1716.name = i1717[0]
  var i1719 = i1717[1]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1719[i + 0]) );
  }
  i1716.frames = i1718
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1721 = data
  i1720.m_Alpha = i1721[0]
  i1720.m_Interactable = !!i1721[1]
  i1720.m_BlocksRaycasts = !!i1721[2]
  i1720.m_IgnoreParentGroups = !!i1721[3]
  i1720.enabled = !!i1721[4]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1723 = data
  i1722.name = i1723[0]
  i1722.index = i1723[1]
  i1722.startup = !!i1723[2]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.aspect = i1725[1]
  i1724.orthographic = !!i1725[2]
  i1724.orthographicSize = i1725[3]
  i1724.backgroundColor = new pc.Color(i1725[4], i1725[5], i1725[6], i1725[7])
  i1724.nearClipPlane = i1725[8]
  i1724.farClipPlane = i1725[9]
  i1724.fieldOfView = i1725[10]
  i1724.depth = i1725[11]
  i1724.clearFlags = i1725[12]
  i1724.cullingMask = i1725[13]
  i1724.rect = i1725[14]
  request.r(i1725[15], i1725[16], 0, i1724, 'targetTexture')
  i1724.usePhysicalProperties = !!i1725[17]
  i1724.focalLength = i1725[18]
  i1724.sensorSize = new pc.Vec2( i1725[19], i1725[20] )
  i1724.lensShift = new pc.Vec2( i1725[21], i1725[22] )
  i1724.gateFit = i1725[23]
  i1724.commandBufferCount = i1725[24]
  i1724.cameraType = i1725[25]
  return i1724
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1727 = data
  i1726.m_RenderShadows = !!i1727[0]
  i1726.m_RequiresDepthTextureOption = i1727[1]
  i1726.m_RequiresOpaqueTextureOption = i1727[2]
  i1726.m_CameraType = i1727[3]
  var i1729 = i1727[4]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 1, i1728, '')
  }
  i1726.m_Cameras = i1728
  i1726.m_RendererIndex = i1727[5]
  i1726.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1727[6] )
  request.r(i1727[7], i1727[8], 0, i1726, 'm_VolumeTrigger')
  i1726.m_VolumeFrameworkUpdateModeOption = i1727[9]
  i1726.m_RenderPostProcessing = !!i1727[10]
  i1726.m_Antialiasing = i1727[11]
  i1726.m_AntialiasingQuality = i1727[12]
  i1726.m_StopNaN = !!i1727[13]
  i1726.m_Dithering = !!i1727[14]
  i1726.m_ClearDepth = !!i1727[15]
  i1726.m_AllowXRRendering = !!i1727[16]
  i1726.m_AllowHDROutput = !!i1727[17]
  i1726.m_UseScreenCoordOverride = !!i1727[18]
  i1726.m_ScreenSizeOverride = new pc.Vec4( i1727[19], i1727[20], i1727[21], i1727[22] )
  i1726.m_ScreenCoordScaleBias = new pc.Vec4( i1727[23], i1727[24], i1727[25], i1727[26] )
  i1726.m_RequiresDepthTexture = !!i1727[27]
  i1726.m_RequiresColorTexture = !!i1727[28]
  i1726.m_Version = i1727[29]
  i1726.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1727[30], i1726.m_TaaSettings)
  return i1726
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1733 = data
  i1732.m_Quality = i1733[0]
  i1732.m_FrameInfluence = i1733[1]
  i1732.m_JitterScale = i1733[2]
  i1732.m_MipBias = i1733[3]
  i1732.m_VarianceClampScale = i1733[4]
  i1732.m_ContrastAdaptiveSharpening = i1733[5]
  return i1732
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i1734 = root || request.c( 'ParticleFollowUI' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, '_buttonButtle')
  request.r(i1735[2], i1735[3], 0, i1734, '_buttonShop')
  request.r(i1735[4], i1735[5], 0, i1734, 'uiCamera')
  request.r(i1735[6], i1735[7], 0, i1734, '_particleEffectButton')
  request.r(i1735[8], i1735[9], 0, i1734, '_particleEffectButtonShop')
  i1734.zOffset = i1735[10]
  return i1734
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i1736 = root || request.c( 'ClickCta' )
  var i1737 = data
  return i1736
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i1739 = data
  i1738.m_ComponentVersion = i1739[0]
  i1738.m_LightType = i1739[1]
  i1738.m_BlendStyleIndex = i1739[2]
  i1738.m_FalloffIntensity = i1739[3]
  i1738.m_Color = new pc.Color(i1739[4], i1739[5], i1739[6], i1739[7])
  i1738.m_Intensity = i1739[8]
  i1738.m_LightVolumeIntensity = i1739[9]
  i1738.m_LightVolumeIntensityEnabled = !!i1739[10]
  i1738.m_ApplyToSortingLayers = i1739[11]
  request.r(i1739[12], i1739[13], 0, i1738, 'm_LightCookieSprite')
  request.r(i1739[14], i1739[15], 0, i1738, 'm_DeprecatedPointLightCookieSprite')
  i1738.m_LightOrder = i1739[16]
  i1738.m_AlphaBlendOnOverlap = !!i1739[17]
  i1738.m_OverlapOperation = i1739[18]
  i1738.m_NormalMapDistance = i1739[19]
  i1738.m_NormalMapQuality = i1739[20]
  i1738.m_UseNormalMap = !!i1739[21]
  i1738.m_ShadowIntensityEnabled = !!i1739[22]
  i1738.m_ShadowIntensity = i1739[23]
  i1738.m_ShadowVolumeIntensityEnabled = !!i1739[24]
  i1738.m_ShadowVolumeIntensity = i1739[25]
  i1738.m_PointLightInnerAngle = i1739[26]
  i1738.m_PointLightOuterAngle = i1739[27]
  i1738.m_PointLightInnerRadius = i1739[28]
  i1738.m_PointLightOuterRadius = i1739[29]
  i1738.m_ShapeLightParametricSides = i1739[30]
  i1738.m_ShapeLightParametricAngleOffset = i1739[31]
  i1738.m_ShapeLightParametricRadius = i1739[32]
  i1738.m_ShapeLightFalloffSize = i1739[33]
  i1738.m_ShapeLightFalloffOffset = new pc.Vec2( i1739[34], i1739[35] )
  var i1741 = i1739[36]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 3) {
    i1740.push( new pc.Vec3( i1741[i + 0], i1741[i + 1], i1741[i + 2] ) );
  }
  i1738.m_ShapePath = i1740
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1745 = data
  i1744.enabled = !!i1745[0]
  i1744.planeDistance = i1745[1]
  i1744.referencePixelsPerUnit = i1745[2]
  i1744.isFallbackOverlay = !!i1745[3]
  i1744.renderMode = i1745[4]
  i1744.renderOrder = i1745[5]
  i1744.sortingLayerName = i1745[6]
  i1744.sortingOrder = i1745[7]
  i1744.scaleFactor = i1745[8]
  request.r(i1745[9], i1745[10], 0, i1744, 'worldCamera')
  i1744.overrideSorting = !!i1745[11]
  i1744.pixelPerfect = !!i1745[12]
  i1744.targetDisplay = i1745[13]
  i1744.overridePixelPerfect = !!i1745[14]
  return i1744
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1747 = data
  i1746.m_UiScaleMode = i1747[0]
  i1746.m_ReferencePixelsPerUnit = i1747[1]
  i1746.m_ScaleFactor = i1747[2]
  i1746.m_ReferenceResolution = new pc.Vec2( i1747[3], i1747[4] )
  i1746.m_ScreenMatchMode = i1747[5]
  i1746.m_MatchWidthOrHeight = i1747[6]
  i1746.m_PhysicalUnit = i1747[7]
  i1746.m_FallbackScreenDPI = i1747[8]
  i1746.m_DefaultSpriteDPI = i1747[9]
  i1746.m_DynamicPixelsPerUnit = i1747[10]
  i1746.m_PresetInfoIsWorld = !!i1747[11]
  return i1746
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1749 = data
  i1748.m_IgnoreReversedGraphics = !!i1749[0]
  i1748.m_BlockingObjects = i1749[1]
  i1748.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1749[2] )
  return i1748
}

Deserializers["Point"] = function (request, data, root) {
  var i1750 = root || request.c( 'Point' )
  var i1751 = data
  i1750._occupied = !!i1751[0]
  return i1750
}

Deserializers["Episode6"] = function (request, data, root) {
  var i1752 = root || request.c( 'Episode6' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, '_arm')
  request.r(i1753[2], i1753[3], 0, i1752, '_points')
  request.r(i1753[4], i1753[5], 0, i1752, '_cart')
  request.r(i1753[6], i1753[7], 0, i1752, '_cartPoint')
  request.r(i1753[8], i1753[9], 0, i1752, '_coinsText')
  request.r(i1753[10], i1753[11], 0, i1752, '_textDamage')
  request.r(i1753[12], i1753[13], 0, i1752, '_textHealth')
  request.r(i1753[14], i1753[15], 0, i1752, '_textHealth2')
  request.r(i1753[16], i1753[17], 0, i1752, '_textDamage2')
  i1752.scaleDuration = i1753[18]
  i1752.moveDuration = i1753[19]
  i1752.targetScale = new pc.Vec3( i1753[20], i1753[21], i1753[22] )
  request.r(i1753[23], i1753[24], 0, i1752, '_particleDragon')
  request.r(i1753[25], i1753[26], 0, i1752, '_particleCards')
  return i1752
}

Deserializers["Episode2"] = function (request, data, root) {
  var i1754 = root || request.c( 'Episode2' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, '_arm')
  request.r(i1755[2], i1755[3], 0, i1754, '_points')
  request.r(i1755[4], i1755[5], 0, i1754, '_unit1')
  request.r(i1755[6], i1755[7], 0, i1754, '_unit2')
  request.r(i1755[8], i1755[9], 0, i1754, '_particleSystem1')
  request.r(i1755[10], i1755[11], 0, i1754, '_particleSystem2')
  request.r(i1755[12], i1755[13], 0, i1754, '_textCoins')
  request.r(i1755[14], i1755[15], 0, i1754, '_textDamage')
  request.r(i1755[16], i1755[17], 0, i1754, '_textHealth')
  request.r(i1755[18], i1755[19], 0, i1754, '_textHealth2')
  request.r(i1755[20], i1755[21], 0, i1754, '_textDamage2')
  i1754.scaleDuration = i1755[22]
  i1754.moveDuration = i1755[23]
  i1754.targetScale = new pc.Vec3( i1755[24], i1755[25], i1755[26] )
  return i1754
}

Deserializers["Episode5"] = function (request, data, root) {
  var i1756 = root || request.c( 'Episode5' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, '_card1_1_2')
  request.r(i1757[2], i1757[3], 0, i1756, '_card1_2_2')
  request.r(i1757[4], i1757[5], 0, i1756, '_card1_3_2')
  request.r(i1757[6], i1757[7], 0, i1756, '_card1_1')
  request.r(i1757[8], i1757[9], 0, i1756, '_card2_1')
  request.r(i1757[10], i1757[11], 0, i1756, '_coinsText')
  request.r(i1757[12], i1757[13], 0, i1756, '_particleSystem')
  return i1756
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i1758 = root || request.c( 'Episode4_1' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, '_cart1__2')
  request.r(i1759[2], i1759[3], 0, i1758, '_cart2__2')
  request.r(i1759[4], i1759[5], 0, i1758, '_cart3__2')
  request.r(i1759[6], i1759[7], 0, i1758, '_cart1_1')
  request.r(i1759[8], i1759[9], 0, i1758, '_cart2_1')
  request.r(i1759[10], i1759[11], 0, i1758, '_cart3_1')
  request.r(i1759[12], i1759[13], 0, i1758, '_arm')
  request.r(i1759[14], i1759[15], 0, i1758, '_coinText')
  request.r(i1759[16], i1759[17], 0, i1758, '_particleSystem')
  request.r(i1759[18], i1759[19], 0, i1758, '_particleDragon')
  return i1758
}

Deserializers["UpdateButton"] = function (request, data, root) {
  var i1760 = root || request.c( 'UpdateButton' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, '_episode')
  request.r(i1761[2], i1761[3], 0, i1760, '_arm')
  return i1760
}

Deserializers["Episode3"] = function (request, data, root) {
  var i1762 = root || request.c( 'Episode3' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, '_battle')
  request.r(i1763[2], i1763[3], 0, i1762, '_button')
  request.r(i1763[4], i1763[5], 0, i1762, '_cardDracone')
  request.r(i1763[6], i1763[7], 0, i1762, '_point')
  request.r(i1763[8], i1763[9], 0, i1762, '_cardEnemye1')
  request.r(i1763[10], i1763[11], 0, i1762, '_cardEnemye2')
  request.r(i1763[12], i1763[13], 0, i1762, '_cardEnemye3')
  request.r(i1763[14], i1763[15], 0, i1762, '_cardDragon1')
  request.r(i1763[16], i1763[17], 0, i1762, '_cardDragon2')
  request.r(i1763[18], i1763[19], 0, i1762, '_cardDragon3')
  request.r(i1763[20], i1763[21], 0, i1762, '_particleSystem1')
  request.r(i1763[22], i1763[23], 0, i1762, '_particleSystem2')
  request.r(i1763[24], i1763[25], 0, i1762, '_particleSystem3')
  request.r(i1763[26], i1763[27], 0, i1762, '_particleButton')
  request.r(i1763[28], i1763[29], 0, i1762, '_textCoins')
  request.r(i1763[30], i1763[31], 0, i1762, '_winVictoty')
  request.r(i1763[32], i1763[33], 0, i1762, '_winInscription')
  request.r(i1763[34], i1763[35], 0, i1762, '_winInscription2')
  request.r(i1763[36], i1763[37], 0, i1762, '_winInscription3')
  request.r(i1763[38], i1763[39], 0, i1762, '_parentsDisplay')
  request.r(i1763[40], i1763[41], 0, i1762, '_cardL')
  return i1762
}

Deserializers["Episode7"] = function (request, data, root) {
  var i1764 = root || request.c( 'Episode7' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'button')
  request.r(i1765[2], i1765[3], 0, i1764, '_battle')
  request.r(i1765[4], i1765[5], 0, i1764, '_button')
  request.r(i1765[6], i1765[7], 0, i1764, '_cardEnemye1')
  request.r(i1765[8], i1765[9], 0, i1764, '_cardEnemye2')
  request.r(i1765[10], i1765[11], 0, i1764, '_cardEnemye3')
  request.r(i1765[12], i1765[13], 0, i1764, '_cardEnemye4')
  request.r(i1765[14], i1765[15], 0, i1764, '_cardEnemye5')
  request.r(i1765[16], i1765[17], 0, i1764, '_cardEnemye6')
  request.r(i1765[18], i1765[19], 0, i1764, '_cardDragon1')
  request.r(i1765[20], i1765[21], 0, i1764, '_cardDragon2')
  request.r(i1765[22], i1765[23], 0, i1764, '_cardDragon3')
  request.r(i1765[24], i1765[25], 0, i1764, '_particleSystem1')
  request.r(i1765[26], i1765[27], 0, i1764, '_particleSystem2')
  request.r(i1765[28], i1765[29], 0, i1764, '_particleSystem3')
  request.r(i1765[30], i1765[31], 0, i1764, '_particleSystem4')
  request.r(i1765[32], i1765[33], 0, i1764, '_particleSystem5')
  request.r(i1765[34], i1765[35], 0, i1764, '_particleSystem6')
  request.r(i1765[36], i1765[37], 0, i1764, '_winVictoty')
  request.r(i1765[38], i1765[39], 0, i1764, '_winFinal')
  request.r(i1765[40], i1765[41], 0, i1764, '_particleSystem')
  request.r(i1765[42], i1765[43], 0, i1764, '_particleDragon')
  request.r(i1765[44], i1765[45], 0, i1764, '_episode3')
  return i1764
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i1766 = root || request.c( 'Episode4_2' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, '_buttonF')
  request.r(i1767[2], i1767[3], 0, i1766, '_battle')
  request.r(i1767[4], i1767[5], 0, i1766, '_button')
  request.r(i1767[6], i1767[7], 0, i1766, '_cardEnemye1')
  request.r(i1767[8], i1767[9], 0, i1766, '_cardEnemye2')
  request.r(i1767[10], i1767[11], 0, i1766, '_cardEnemye3')
  request.r(i1767[12], i1767[13], 0, i1766, '_cardDracone1')
  request.r(i1767[14], i1767[15], 0, i1766, '_cardDracone2')
  request.r(i1767[16], i1767[17], 0, i1766, '_cardDracone3')
  request.r(i1767[18], i1767[19], 0, i1766, '_winDefeat')
  request.r(i1767[20], i1767[21], 0, i1766, '_winFinal')
  request.r(i1767[22], i1767[23], 0, i1766, '_particleSystem1')
  request.r(i1767[24], i1767[25], 0, i1766, '_particleSystem2')
  request.r(i1767[26], i1767[27], 0, i1766, '_particleSystem3')
  request.r(i1767[28], i1767[29], 0, i1766, '_particleSystem4')
  request.r(i1767[30], i1767[31], 0, i1766, '_particleSystem5')
  request.r(i1767[32], i1767[33], 0, i1766, '_particleSystem6')
  request.r(i1767[34], i1767[35], 0, i1766, '_particleSystem7')
  request.r(i1767[36], i1767[37], 0, i1766, '_particleSystem8')
  request.r(i1767[38], i1767[39], 0, i1766, '_particleSystem9')
  request.r(i1767[40], i1767[41], 0, i1766, '_particleButtun')
  request.r(i1767[42], i1767[43], 0, i1766, '_particleDragon')
  request.r(i1767[44], i1767[45], 0, i1766, '_layer')
  request.r(i1767[46], i1767[47], 0, i1766, '_winInscription')
  request.r(i1767[48], i1767[49], 0, i1766, '_winInscription2')
  request.r(i1767[50], i1767[51], 0, i1766, '_winInscription3')
  return i1766
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i1768 = root || request.c( 'Episode5_2' )
  var i1769 = data
  request.r(i1769[0], i1769[1], 0, i1768, '_battle')
  request.r(i1769[2], i1769[3], 0, i1768, '_button')
  request.r(i1769[4], i1769[5], 0, i1768, '_cardEnemye1')
  request.r(i1769[6], i1769[7], 0, i1768, '_cardEnemye2')
  request.r(i1769[8], i1769[9], 0, i1768, '_cardEnemye3')
  request.r(i1769[10], i1769[11], 0, i1768, '_cardDracone1')
  request.r(i1769[12], i1769[13], 0, i1768, '_cardDracone2')
  request.r(i1769[14], i1769[15], 0, i1768, '_cardDracone3')
  request.r(i1769[16], i1769[17], 0, i1768, '_cardDracone4')
  request.r(i1769[18], i1769[19], 0, i1768, '_winDefeat')
  request.r(i1769[20], i1769[21], 0, i1768, '_winFinal')
  request.r(i1769[22], i1769[23], 0, i1768, '_particleSystem1')
  request.r(i1769[24], i1769[25], 0, i1768, '_particleSystem2')
  request.r(i1769[26], i1769[27], 0, i1768, '_particleSystem3')
  request.r(i1769[28], i1769[29], 0, i1768, '_particleSystem4')
  request.r(i1769[30], i1769[31], 0, i1768, '_particleSystem5')
  request.r(i1769[32], i1769[33], 0, i1768, '_particleSystem6')
  request.r(i1769[34], i1769[35], 0, i1768, '_particleSystem7')
  request.r(i1769[36], i1769[37], 0, i1768, '_particleSystem')
  request.r(i1769[38], i1769[39], 0, i1768, '_layer')
  request.r(i1769[40], i1769[41], 0, i1768, '_winInscription')
  request.r(i1769[42], i1769[43], 0, i1768, '_winInscription2')
  request.r(i1769[44], i1769[45], 0, i1768, '_winInscription3')
  return i1768
}

Deserializers["Buttle"] = function (request, data, root) {
  var i1770 = root || request.c( 'Buttle' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, '_episode')
  request.r(i1771[2], i1771[3], 0, i1770, '_buttonShop')
  request.r(i1771[4], i1771[5], 0, i1770, '_buttonButtle')
  request.r(i1771[6], i1771[7], 0, i1770, '_particle')
  request.r(i1771[8], i1771[9], 0, i1770, '_episode7')
  request.r(i1771[10], i1771[11], 0, i1770, '_episode4_2')
  return i1770
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i1772 = root || request.c( 'ArmAnimation' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, '_targetButton')
  i1772.flyDuration = i1773[2]
  i1772.shrinkDuration = i1773[3]
  i1772.restoreDuration = i1773[4]
  return i1772
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.UI.Button' )
  var i1775 = data
  i1774.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1775[0], i1774.m_OnClick)
  i1774.m_Navigation = request.d('UnityEngine.UI.Navigation', i1775[1], i1774.m_Navigation)
  i1774.m_Transition = i1775[2]
  i1774.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1775[3], i1774.m_Colors)
  i1774.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1775[4], i1774.m_SpriteState)
  i1774.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1775[5], i1774.m_AnimationTriggers)
  i1774.m_Interactable = !!i1775[6]
  request.r(i1775[7], i1775[8], 0, i1774, 'm_TargetGraphic')
  return i1774
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1777 = data
  i1776.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1777[0], i1776.m_PersistentCalls)
  return i1776
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1779 = data
  var i1781 = i1779[0]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.add(request.d('UnityEngine.Events.PersistentCall', i1781[i + 0]));
  }
  i1778.m_Calls = i1780
  return i1778
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'm_Target')
  i1784.m_TargetAssemblyTypeName = i1785[2]
  i1784.m_MethodName = i1785[3]
  i1784.m_Mode = i1785[4]
  i1784.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1785[5], i1784.m_Arguments)
  i1784.m_CallState = i1785[6]
  return i1784
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1787 = data
  request.r(i1787[0], i1787[1], 0, i1786, 'm_ObjectArgument')
  i1786.m_ObjectArgumentAssemblyTypeName = i1787[2]
  i1786.m_IntArgument = i1787[3]
  i1786.m_FloatArgument = i1787[4]
  i1786.m_StringArgument = i1787[5]
  i1786.m_BoolArgument = !!i1787[6]
  return i1786
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1789 = data
  i1788.m_Mode = i1789[0]
  i1788.m_WrapAround = !!i1789[1]
  request.r(i1789[2], i1789[3], 0, i1788, 'm_SelectOnUp')
  request.r(i1789[4], i1789[5], 0, i1788, 'm_SelectOnDown')
  request.r(i1789[6], i1789[7], 0, i1788, 'm_SelectOnLeft')
  request.r(i1789[8], i1789[9], 0, i1788, 'm_SelectOnRight')
  return i1788
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1791 = data
  i1790.m_NormalColor = new pc.Color(i1791[0], i1791[1], i1791[2], i1791[3])
  i1790.m_HighlightedColor = new pc.Color(i1791[4], i1791[5], i1791[6], i1791[7])
  i1790.m_PressedColor = new pc.Color(i1791[8], i1791[9], i1791[10], i1791[11])
  i1790.m_SelectedColor = new pc.Color(i1791[12], i1791[13], i1791[14], i1791[15])
  i1790.m_DisabledColor = new pc.Color(i1791[16], i1791[17], i1791[18], i1791[19])
  i1790.m_ColorMultiplier = i1791[20]
  i1790.m_FadeDuration = i1791[21]
  return i1790
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'm_HighlightedSprite')
  request.r(i1793[2], i1793[3], 0, i1792, 'm_PressedSprite')
  request.r(i1793[4], i1793[5], 0, i1792, 'm_SelectedSprite')
  request.r(i1793[6], i1793[7], 0, i1792, 'm_DisabledSprite')
  return i1792
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1795 = data
  i1794.m_NormalTrigger = i1795[0]
  i1794.m_HighlightedTrigger = i1795[1]
  i1794.m_PressedTrigger = i1795[2]
  i1794.m_SelectedTrigger = i1795[3]
  i1794.m_DisabledTrigger = i1795[4]
  return i1794
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'm_FirstSelected')
  i1796.m_sendNavigationEvents = !!i1797[2]
  i1796.m_DragThreshold = i1797[3]
  return i1796
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1799 = data
  i1798.m_HorizontalAxis = i1799[0]
  i1798.m_VerticalAxis = i1799[1]
  i1798.m_SubmitButton = i1799[2]
  i1798.m_CancelButton = i1799[3]
  i1798.m_InputActionsPerSecond = i1799[4]
  i1798.m_RepeatDelay = i1799[5]
  i1798.m_ForceModuleActive = !!i1799[6]
  i1798.m_SendPointerHoverToParent = !!i1799[7]
  return i1798
}

Deserializers["Scenario"] = function (request, data, root) {
  var i1800 = root || request.c( 'Scenario' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, '_episode1')
  request.r(i1801[2], i1801[3], 0, i1800, '_episode2')
  request.r(i1801[4], i1801[5], 0, i1800, '_episode3')
  request.r(i1801[6], i1801[7], 0, i1800, '_episode4v2')
  return i1800
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i1802 = root || request.c( 'Episode5_1' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, '_card1')
  request.r(i1803[2], i1803[3], 0, i1802, '_card2')
  request.r(i1803[4], i1803[5], 0, i1802, '_episode5')
  request.r(i1803[6], i1803[7], 0, i1802, 'episode4_1')
  request.r(i1803[8], i1803[9], 0, i1802, 'episode5_2')
  request.r(i1803[10], i1803[11], 0, i1802, '_texCoins')
  request.r(i1803[12], i1803[13], 0, i1802, '_particleSystem')
  return i1802
}

Deserializers["Episode4v2"] = function (request, data, root) {
  var i1804 = root || request.c( 'Episode4v2' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, '_point1')
  request.r(i1805[2], i1805[3], 0, i1804, '_point2')
  request.r(i1805[4], i1805[5], 0, i1804, '_point3')
  request.r(i1805[6], i1805[7], 0, i1804, '_point4')
  request.r(i1805[8], i1805[9], 0, i1804, '_point5')
  request.r(i1805[10], i1805[11], 0, i1804, '_point6')
  request.r(i1805[12], i1805[13], 0, i1804, '_buttle')
  var i1807 = i1805[14]
  var i1806 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 1, i1806, '')
  }
  i1804._dragonCards = i1806
  var i1809 = i1805[15]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i1809.length; i += 2) {
  request.r(i1809[i + 0], i1809[i + 1], 1, i1808, '')
  }
  i1804._nonDragonCards = i1808
  request.r(i1805[16], i1805[17], 0, i1804, '_armO')
  request.r(i1805[18], i1805[19], 0, i1804, '_armU')
  i1804._cardsDragon = i1805[20]
  i1804._isUpgrade = !!i1805[21]
  i1804._isButtle = !!i1805[22]
  i1804._isArm = !!i1805[23]
  var i1811 = i1805[24]
  var i1810 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 1, i1810, '')
  }
  i1804._cards = i1810
  request.r(i1805[25], i1805[26], 0, i1804, '_card')
  request.r(i1805[27], i1805[28], 0, i1804, '_updateButton')
  request.r(i1805[29], i1805[30], 0, i1804, '_TMony')
  request.r(i1805[31], i1805[32], 0, i1804, '_buttleButton')
  request.r(i1805[33], i1805[34], 0, i1804, '_pointS1')
  request.r(i1805[35], i1805[36], 0, i1804, '_pointS2')
  request.r(i1805[37], i1805[38], 0, i1804, '_pointS3')
  request.r(i1805[39], i1805[40], 0, i1804, '_arm')
  request.r(i1805[41], i1805[42], 0, i1804, '_arm2')
  request.r(i1805[43], i1805[44], 0, i1804, '_cardPointUpgrade')
  request.r(i1805[45], i1805[46], 0, i1804, '_textHealth3')
  request.r(i1805[47], i1805[48], 0, i1804, '_textDamage3')
  request.r(i1805[49], i1805[50], 0, i1804, '_layer')
  request.r(i1805[51], i1805[52], 0, i1804, '_particle')
  request.r(i1805[53], i1805[54], 0, i1804, '_particle2')
  request.r(i1805[55], i1805[56], 0, i1804, '_particleU')
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1815 = data
  i1814.ambientIntensity = i1815[0]
  i1814.reflectionIntensity = i1815[1]
  i1814.ambientMode = i1815[2]
  i1814.ambientLight = new pc.Color(i1815[3], i1815[4], i1815[5], i1815[6])
  i1814.ambientSkyColor = new pc.Color(i1815[7], i1815[8], i1815[9], i1815[10])
  i1814.ambientGroundColor = new pc.Color(i1815[11], i1815[12], i1815[13], i1815[14])
  i1814.ambientEquatorColor = new pc.Color(i1815[15], i1815[16], i1815[17], i1815[18])
  i1814.fogColor = new pc.Color(i1815[19], i1815[20], i1815[21], i1815[22])
  i1814.fogEndDistance = i1815[23]
  i1814.fogStartDistance = i1815[24]
  i1814.fogDensity = i1815[25]
  i1814.fog = !!i1815[26]
  request.r(i1815[27], i1815[28], 0, i1814, 'skybox')
  i1814.fogMode = i1815[29]
  var i1817 = i1815[30]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1817[i + 0]) );
  }
  i1814.lightmaps = i1816
  i1814.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1815[31], i1814.lightProbes)
  i1814.lightmapsMode = i1815[32]
  i1814.mixedBakeMode = i1815[33]
  i1814.environmentLightingMode = i1815[34]
  i1814.ambientProbe = new pc.SphericalHarmonicsL2(i1815[35])
  i1814.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1815[36])
  i1814.useReferenceAmbientProbe = !!i1815[37]
  request.r(i1815[38], i1815[39], 0, i1814, 'customReflection')
  request.r(i1815[40], i1815[41], 0, i1814, 'defaultReflection')
  i1814.defaultReflectionMode = i1815[42]
  i1814.defaultReflectionResolution = i1815[43]
  i1814.sunLightObjectId = i1815[44]
  i1814.pixelLightCount = i1815[45]
  i1814.defaultReflectionHDR = !!i1815[46]
  i1814.hasLightDataAsset = !!i1815[47]
  i1814.hasManualGenerate = !!i1815[48]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, 'lightmapColor')
  request.r(i1821[2], i1821[3], 0, i1820, 'lightmapDirection')
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1822 = root || new UnityEngine.LightProbes()
  var i1823 = data
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1829 = data
  i1828.enabled = !!i1829[0]
  i1828.type = i1829[1]
  i1828.color = new pc.Color(i1829[2], i1829[3], i1829[4], i1829[5])
  i1828.cullingMask = i1829[6]
  i1828.intensity = i1829[7]
  i1828.range = i1829[8]
  i1828.spotAngle = i1829[9]
  i1828.shadows = i1829[10]
  i1828.shadowNormalBias = i1829[11]
  i1828.shadowBias = i1829[12]
  i1828.shadowStrength = i1829[13]
  i1828.shadowResolution = i1829[14]
  i1828.lightmapBakeType = i1829[15]
  i1828.renderMode = i1829[16]
  request.r(i1829[17], i1829[18], 0, i1828, 'cookie')
  i1828.cookieSize = i1829[19]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1831 = data
  i1830.AdditionalLightsPerObjectLimit = i1831[0]
  i1830.AdditionalLightsRenderingMode = i1831[1]
  i1830.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1831[2], i1830.LightRenderingMode)
  i1830.ColorGradingLutSize = i1831[3]
  i1830.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1831[4], i1830.ColorGradingMode)
  i1830.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1831[5], i1830.MainLightRenderingMode)
  i1830.MainLightRenderingModeValue = i1831[6]
  i1830.SupportsMainLightShadows = !!i1831[7]
  i1830.MixedLightingSupported = !!i1831[8]
  i1830.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1831[9], i1830.MsaaQuality)
  i1830.MSAA = i1831[10]
  i1830.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1831[11], i1830.OpaqueDownsampling)
  i1830.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1831[12], i1830.MainLightShadowmapResolution)
  i1830.MainLightShadowmapResolutionValue = i1831[13]
  i1830.SupportsSoftShadows = !!i1831[14]
  i1830.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1831[15], i1830.SoftShadowQuality)
  i1830.SoftShadowQualityValue = i1831[16]
  i1830.ShadowDistance = i1831[17]
  i1830.ShadowCascadeCount = i1831[18]
  i1830.Cascade2Split = i1831[19]
  i1830.Cascade3Split = new pc.Vec2( i1831[20], i1831[21] )
  i1830.Cascade4Split = new pc.Vec3( i1831[22], i1831[23], i1831[24] )
  i1830.CascadeBorder = i1831[25]
  i1830.ShadowDepthBias = i1831[26]
  i1830.ShadowNormalBias = i1831[27]
  i1830.RenderScale = i1831[28]
  i1830.RequireDepthTexture = !!i1831[29]
  i1830.RequireOpaqueTexture = !!i1831[30]
  i1830.SupportsHDR = !!i1831[31]
  i1830.SupportsTerrainHoles = !!i1831[32]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1833 = data
  i1832.Disabled = i1833[0]
  i1832.PerVertex = i1833[1]
  i1832.PerPixel = i1833[2]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1835 = data
  i1834.LowDynamicRange = i1835[0]
  i1834.HighDynamicRange = i1835[1]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1837 = data
  i1836.Disabled = i1837[0]
  i1836._2x = i1837[1]
  i1836._4x = i1837[2]
  i1836._8x = i1837[3]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1839 = data
  i1838.None = i1839[0]
  i1838._2xBilinear = i1839[1]
  i1838._4xBox = i1839[2]
  i1838._4xBilinear = i1839[3]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1841 = data
  i1840._256 = i1841[0]
  i1840._512 = i1841[1]
  i1840._1024 = i1841[2]
  i1840._2048 = i1841[3]
  i1840._4096 = i1841[4]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1843 = data
  i1842.UsePipelineSettings = i1843[0]
  i1842.Low = i1843[1]
  i1842.Medium = i1843[2]
  i1842.High = i1843[3]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1845 = data
  var i1847 = i1845[0]
  var i1846 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1847[i + 0]));
  }
  i1844.ShaderCompilationErrors = i1846
  i1844.name = i1845[1]
  i1844.guid = i1845[2]
  var i1849 = i1845[3]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( i1849[i + 0] );
  }
  i1844.shaderDefinedKeywords = i1848
  var i1851 = i1845[4]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1851[i + 0]) );
  }
  i1844.passes = i1850
  var i1853 = i1845[5]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1853[i + 0]) );
  }
  i1844.usePasses = i1852
  var i1855 = i1845[6]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1855[i + 0]) );
  }
  i1844.defaultParameterValues = i1854
  request.r(i1845[7], i1845[8], 0, i1844, 'unityFallbackShader')
  i1844.readDepth = !!i1845[9]
  i1844.isCreatedByShaderGraph = !!i1845[10]
  i1844.compiled = !!i1845[11]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1859 = data
  i1858.shaderName = i1859[0]
  i1858.errorMessage = i1859[1]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1864 = root || new pc.UnityShaderPass()
  var i1865 = data
  i1864.id = i1865[0]
  i1864.subShaderIndex = i1865[1]
  i1864.name = i1865[2]
  i1864.passType = i1865[3]
  i1864.grabPassTextureName = i1865[4]
  i1864.usePass = !!i1865[5]
  i1864.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[6], i1864.zTest)
  i1864.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[7], i1864.zWrite)
  i1864.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[8], i1864.culling)
  i1864.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1865[9], i1864.blending)
  i1864.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1865[10], i1864.alphaBlending)
  i1864.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[11], i1864.colorWriteMask)
  i1864.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[12], i1864.offsetUnits)
  i1864.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[13], i1864.offsetFactor)
  i1864.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[14], i1864.stencilRef)
  i1864.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[15], i1864.stencilReadMask)
  i1864.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1865[16], i1864.stencilWriteMask)
  i1864.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1865[17], i1864.stencilOp)
  i1864.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1865[18], i1864.stencilOpFront)
  i1864.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1865[19], i1864.stencilOpBack)
  var i1867 = i1865[20]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1867[i + 0]) );
  }
  i1864.tags = i1866
  var i1869 = i1865[21]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( i1869[i + 0] );
  }
  i1864.passDefinedKeywords = i1868
  var i1871 = i1865[22]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1871[i + 0]) );
  }
  i1864.passDefinedKeywordGroups = i1870
  var i1873 = i1865[23]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1873[i + 0]) );
  }
  i1864.variants = i1872
  var i1875 = i1865[24]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1875[i + 0]) );
  }
  i1864.excludedVariants = i1874
  i1864.hasDepthReader = !!i1865[25]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1877 = data
  i1876.val = i1877[0]
  i1876.name = i1877[1]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1879 = data
  i1878.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[0], i1878.src)
  i1878.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[1], i1878.dst)
  i1878.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1879[2], i1878.op)
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1881 = data
  i1880.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1881[0], i1880.pass)
  i1880.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1881[1], i1880.fail)
  i1880.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1881[2], i1880.zFail)
  i1880.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1881[3], i1880.comp)
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.value = i1885[1]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1889 = data
  var i1891 = i1889[0]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( i1891[i + 0] );
  }
  i1888.keywords = i1890
  i1888.hasDiscard = !!i1889[1]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1895 = data
  i1894.passId = i1895[0]
  i1894.subShaderIndex = i1895[1]
  var i1897 = i1895[2]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( i1897[i + 0] );
  }
  i1894.keywords = i1896
  i1894.vertexProgram = i1895[3]
  i1894.fragmentProgram = i1895[4]
  i1894.exportedForWebGl2 = !!i1895[5]
  i1894.readDepth = !!i1895[6]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'shader')
  i1900.pass = i1901[2]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.type = i1905[1]
  i1904.value = new pc.Vec4( i1905[2], i1905[3], i1905[4], i1905[5] )
  i1904.textureValue = i1905[6]
  i1904.shaderPropertyFlag = i1905[7]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1907 = data
  i1906.name = i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'texture')
  i1906.aabb = i1907[3]
  i1906.vertices = i1907[4]
  i1906.triangles = i1907[5]
  i1906.textureRect = UnityEngine.Rect.MinMaxRect(i1907[6], i1907[7], i1907[8], i1907[9])
  i1906.packedRect = UnityEngine.Rect.MinMaxRect(i1907[10], i1907[11], i1907[12], i1907[13])
  i1906.border = new pc.Vec4( i1907[14], i1907[15], i1907[16], i1907[17] )
  i1906.transparency = i1907[18]
  i1906.bounds = i1907[19]
  i1906.pixelsPerUnit = i1907[20]
  i1906.textureWidth = i1907[21]
  i1906.textureHeight = i1907[22]
  i1906.nativeSize = new pc.Vec2( i1907[23], i1907[24] )
  i1906.pivot = new pc.Vec2( i1907[25], i1907[26] )
  i1906.textureRectOffset = new pc.Vec2( i1907[27], i1907[28] )
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1909 = data
  i1908.name = i1909[0]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.wrapMode = i1911[1]
  i1910.isLooping = !!i1911[2]
  i1910.length = i1911[3]
  var i1913 = i1911[4]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1913[i + 0]) );
  }
  i1910.curves = i1912
  var i1915 = i1911[5]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1915[i + 0]) );
  }
  i1910.events = i1914
  i1910.halfPrecision = !!i1911[6]
  i1910._frameRate = i1911[7]
  i1910.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1911[8], i1910.localBounds)
  i1910.hasMuscleCurves = !!i1911[9]
  var i1917 = i1911[10]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( i1917[i + 0] );
  }
  i1910.clipMuscleConstant = i1916
  i1910.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1911[11], i1910.clipBindingConstant)
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1921 = data
  i1920.path = i1921[0]
  i1920.hash = i1921[1]
  i1920.componentType = i1921[2]
  i1920.property = i1921[3]
  i1920.keys = i1921[4]
  var i1923 = i1921[5]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1923[i + 0]) );
  }
  i1920.objectReferenceKeys = i1922
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1927 = data
  i1926.time = i1927[0]
  request.r(i1927[1], i1927[2], 0, i1926, 'value')
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1931 = data
  i1930.functionName = i1931[0]
  i1930.floatParameter = i1931[1]
  i1930.intParameter = i1931[2]
  i1930.stringParameter = i1931[3]
  request.r(i1931[4], i1931[5], 0, i1930, 'objectReferenceParameter')
  i1930.time = i1931[6]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1933 = data
  i1932.center = new pc.Vec3( i1933[0], i1933[1], i1933[2] )
  i1932.extends = new pc.Vec3( i1933[3], i1933[4], i1933[5] )
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1937 = data
  var i1939 = i1937[0]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( i1939[i + 0] );
  }
  i1936.genericBindings = i1938
  var i1941 = i1937[1]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( i1941[i + 0] );
  }
  i1936.pptrCurveMapping = i1940
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1943 = data
  i1942.name = i1943[0]
  i1942.ascent = i1943[1]
  i1942.originalLineHeight = i1943[2]
  i1942.fontSize = i1943[3]
  var i1945 = i1943[4]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1945[i + 0]) );
  }
  i1942.characterInfo = i1944
  request.r(i1943[5], i1943[6], 0, i1942, 'texture')
  i1942.originalFontSize = i1943[7]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1949 = data
  i1948.index = i1949[0]
  i1948.advance = i1949[1]
  i1948.bearing = i1949[2]
  i1948.glyphWidth = i1949[3]
  i1948.glyphHeight = i1949[4]
  i1948.minX = i1949[5]
  i1948.maxX = i1949[6]
  i1948.minY = i1949[7]
  i1948.maxY = i1949[8]
  i1948.uvBottomLeftX = i1949[9]
  i1948.uvBottomLeftY = i1949[10]
  i1948.uvBottomRightX = i1949[11]
  i1948.uvBottomRightY = i1949[12]
  i1948.uvTopLeftX = i1949[13]
  i1948.uvTopLeftY = i1949[14]
  i1948.uvTopRightX = i1949[15]
  i1948.uvTopRightY = i1949[16]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1951 = data
  i1950.name = i1951[0]
  var i1953 = i1951[1]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1953[i + 0]) );
  }
  i1950.layers = i1952
  var i1955 = i1951[2]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1955[i + 0]) );
  }
  i1950.parameters = i1954
  i1950.animationClips = i1951[3]
  i1950.avatarUnsupported = i1951[4]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1959 = data
  i1958.name = i1959[0]
  i1958.defaultWeight = i1959[1]
  i1958.blendingMode = i1959[2]
  i1958.avatarMask = i1959[3]
  i1958.syncedLayerIndex = i1959[4]
  i1958.syncedLayerAffectsTiming = !!i1959[5]
  i1958.syncedLayers = i1959[6]
  i1958.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1959[7], i1958.stateMachine)
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1961 = data
  i1960.id = i1961[0]
  i1960.name = i1961[1]
  i1960.path = i1961[2]
  var i1963 = i1961[3]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1963[i + 0]) );
  }
  i1960.states = i1962
  var i1965 = i1961[4]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1965[i + 0]) );
  }
  i1960.machines = i1964
  var i1967 = i1961[5]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1967[i + 0]) );
  }
  i1960.entryStateTransitions = i1966
  var i1969 = i1961[6]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1969[i + 0]) );
  }
  i1960.exitStateTransitions = i1968
  var i1971 = i1961[7]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1971[i + 0]) );
  }
  i1960.anyStateTransitions = i1970
  i1960.defaultStateId = i1961[8]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1975 = data
  i1974.id = i1975[0]
  i1974.name = i1975[1]
  i1974.cycleOffset = i1975[2]
  i1974.cycleOffsetParameter = i1975[3]
  i1974.cycleOffsetParameterActive = !!i1975[4]
  i1974.mirror = !!i1975[5]
  i1974.mirrorParameter = i1975[6]
  i1974.mirrorParameterActive = !!i1975[7]
  i1974.motionId = i1975[8]
  i1974.nameHash = i1975[9]
  i1974.fullPathHash = i1975[10]
  i1974.speed = i1975[11]
  i1974.speedParameter = i1975[12]
  i1974.speedParameterActive = !!i1975[13]
  i1974.tag = i1975[14]
  i1974.tagHash = i1975[15]
  i1974.writeDefaultValues = !!i1975[16]
  var i1977 = i1975[17]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 2) {
  request.r(i1977[i + 0], i1977[i + 1], 2, i1976, '')
  }
  i1974.behaviours = i1976
  var i1979 = i1975[18]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1979[i + 0]) );
  }
  i1974.transitions = i1978
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1985 = data
  i1984.fullPath = i1985[0]
  i1984.canTransitionToSelf = !!i1985[1]
  i1984.duration = i1985[2]
  i1984.exitTime = i1985[3]
  i1984.hasExitTime = !!i1985[4]
  i1984.hasFixedDuration = !!i1985[5]
  i1984.interruptionSource = i1985[6]
  i1984.offset = i1985[7]
  i1984.orderedInterruption = !!i1985[8]
  i1984.destinationStateId = i1985[9]
  i1984.isExit = !!i1985[10]
  i1984.mute = !!i1985[11]
  i1984.solo = !!i1985[12]
  var i1987 = i1985[13]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1987[i + 0]) );
  }
  i1984.conditions = i1986
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1993 = data
  i1992.destinationStateId = i1993[0]
  i1992.isExit = !!i1993[1]
  i1992.mute = !!i1993[2]
  i1992.solo = !!i1993[3]
  var i1995 = i1993[4]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1995[i + 0]) );
  }
  i1992.conditions = i1994
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1999 = data
  i1998.defaultBool = !!i1999[0]
  i1998.defaultFloat = i1999[1]
  i1998.defaultInt = i1999[2]
  i1998.name = i1999[3]
  i1998.nameHash = i1999[4]
  i1998.type = i1999[5]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2001 = data
  var i2003 = i2001[0]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2003[i + 0]) );
  }
  i2000.files = i2002
  i2000.componentToPrefabIds = i2001[1]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2007 = data
  i2006.path = i2007[0]
  request.r(i2007[1], i2007[2], 0, i2006, 'unityObject')
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2009 = data
  var i2011 = i2009[0]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2011[i + 0]) );
  }
  i2008.scriptsExecutionOrder = i2010
  var i2013 = i2009[1]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2013[i + 0]) );
  }
  i2008.sortingLayers = i2012
  var i2015 = i2009[2]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2015[i + 0]) );
  }
  i2008.cullingLayers = i2014
  i2008.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2009[3], i2008.timeSettings)
  i2008.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2009[4], i2008.physicsSettings)
  i2008.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2009[5], i2008.physics2DSettings)
  i2008.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2009[6], i2008.qualitySettings)
  i2008.enableRealtimeShadows = !!i2009[7]
  i2008.enableAutoInstancing = !!i2009[8]
  i2008.enableDynamicBatching = !!i2009[9]
  i2008.lightmapEncodingQuality = i2009[10]
  i2008.desiredColorSpace = i2009[11]
  var i2017 = i2009[12]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( i2017[i + 0] );
  }
  i2008.allTags = i2016
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2021 = data
  i2020.name = i2021[0]
  i2020.value = i2021[1]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2025 = data
  i2024.id = i2025[0]
  i2024.name = i2025[1]
  i2024.value = i2025[2]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2029 = data
  i2028.id = i2029[0]
  i2028.name = i2029[1]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2031 = data
  i2030.fixedDeltaTime = i2031[0]
  i2030.maximumDeltaTime = i2031[1]
  i2030.timeScale = i2031[2]
  i2030.maximumParticleTimestep = i2031[3]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2033 = data
  i2032.gravity = new pc.Vec3( i2033[0], i2033[1], i2033[2] )
  i2032.defaultSolverIterations = i2033[3]
  i2032.bounceThreshold = i2033[4]
  i2032.autoSyncTransforms = !!i2033[5]
  i2032.autoSimulation = !!i2033[6]
  var i2035 = i2033[7]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2035[i + 0]) );
  }
  i2032.collisionMatrix = i2034
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2039 = data
  i2038.enabled = !!i2039[0]
  i2038.layerId = i2039[1]
  i2038.otherLayerId = i2039[2]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'material')
  i2040.gravity = new pc.Vec2( i2041[2], i2041[3] )
  i2040.positionIterations = i2041[4]
  i2040.velocityIterations = i2041[5]
  i2040.velocityThreshold = i2041[6]
  i2040.maxLinearCorrection = i2041[7]
  i2040.maxAngularCorrection = i2041[8]
  i2040.maxTranslationSpeed = i2041[9]
  i2040.maxRotationSpeed = i2041[10]
  i2040.baumgarteScale = i2041[11]
  i2040.baumgarteTOIScale = i2041[12]
  i2040.timeToSleep = i2041[13]
  i2040.linearSleepTolerance = i2041[14]
  i2040.angularSleepTolerance = i2041[15]
  i2040.defaultContactOffset = i2041[16]
  i2040.autoSimulation = !!i2041[17]
  i2040.queriesHitTriggers = !!i2041[18]
  i2040.queriesStartInColliders = !!i2041[19]
  i2040.callbacksOnDisable = !!i2041[20]
  i2040.reuseCollisionCallbacks = !!i2041[21]
  i2040.autoSyncTransforms = !!i2041[22]
  var i2043 = i2041[23]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2043[i + 0]) );
  }
  i2040.collisionMatrix = i2042
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2047 = data
  i2046.enabled = !!i2047[0]
  i2046.layerId = i2047[1]
  i2046.otherLayerId = i2047[2]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2049 = data
  var i2051 = i2049[0]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2051[i + 0]) );
  }
  i2048.qualityLevels = i2050
  var i2053 = i2049[1]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( i2053[i + 0] );
  }
  i2048.names = i2052
  i2048.shadows = i2049[2]
  i2048.anisotropicFiltering = i2049[3]
  i2048.antiAliasing = i2049[4]
  i2048.lodBias = i2049[5]
  i2048.shadowCascades = i2049[6]
  i2048.shadowDistance = i2049[7]
  i2048.shadowmaskMode = i2049[8]
  i2048.shadowProjection = i2049[9]
  i2048.shadowResolution = i2049[10]
  i2048.softParticles = !!i2049[11]
  i2048.softVegetation = !!i2049[12]
  i2048.activeColorSpace = i2049[13]
  i2048.desiredColorSpace = i2049[14]
  i2048.masterTextureLimit = i2049[15]
  i2048.maxQueuedFrames = i2049[16]
  i2048.particleRaycastBudget = i2049[17]
  i2048.pixelLightCount = i2049[18]
  i2048.realtimeReflectionProbes = !!i2049[19]
  i2048.shadowCascade2Split = i2049[20]
  i2048.shadowCascade4Split = new pc.Vec3( i2049[21], i2049[22], i2049[23] )
  i2048.streamingMipmapsActive = !!i2049[24]
  i2048.vSyncCount = i2049[25]
  i2048.asyncUploadBufferSize = i2049[26]
  i2048.asyncUploadTimeSlice = i2049[27]
  i2048.billboardsFaceCameraPosition = !!i2049[28]
  i2048.shadowNearPlaneOffset = i2049[29]
  i2048.streamingMipmapsMemoryBudget = i2049[30]
  i2048.maximumLODLevel = i2049[31]
  i2048.streamingMipmapsAddAllCameras = !!i2049[32]
  i2048.streamingMipmapsMaxLevelReduction = i2049[33]
  i2048.streamingMipmapsRenderersPerFrame = i2049[34]
  i2048.resolutionScalingFixedDPIFactor = i2049[35]
  i2048.streamingMipmapsMaxFileIORequests = i2049[36]
  i2048.currentQualityLevel = i2049[37]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2059 = data
  i2058.weight = i2059[0]
  i2058.vertices = i2059[1]
  i2058.normals = i2059[2]
  i2058.tangents = i2059[3]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2063 = data
  i2062.mode = i2063[0]
  i2062.parameter = i2063[1]
  i2062.threshold = i2063[2]
  return i2062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[23],"84":[85],"86":[87],"88":[87],"29":[0],"89":[0],"90":[91],"92":[93],"94":[23],"95":[23],"25":[23],"96":[50],"97":[91],"98":[99],"100":[0],"101":[0],"31":[29],"3":[1,0],"102":[0],"30":[29],"103":[0],"104":[0],"105":[0],"106":[0],"107":[0],"108":[0],"109":[0],"110":[0],"111":[0],"112":[1,0],"113":[0],"114":[0],"115":[0],"116":[0],"10":[1,0],"117":[0],"118":[46],"119":[46],"47":[46],"120":[46],"121":[23],"122":[23],"123":[91]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Episode1","UnityEngine.GameObject","UnityEngine.UI.Text","Card2V","UnityEngine.Font","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Mesh","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","ParticleFollowUI","ClickCta","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Point","Episode6","Episode2","Episode5","Episode4_1","UpdateButton","Episode4v2","Episode3","Episode7","Episode4_2","Episode5_2","Buttle","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "16.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Arcein-Rush";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "44c3daab4de35354e9e92df1696c57a0";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: \ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1580";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3055";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CardsDragons";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "54c97e46-890c-4678-931a-4dea9f496b04";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

