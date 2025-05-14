var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.JointSpring' )
  var i1555 = data
  i1554.spring = i1555[0]
  i1554.damper = i1555[1]
  i1554.targetPosition = i1555[2]
  return i1554
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.JointMotor' )
  var i1557 = data
  i1556.m_TargetVelocity = i1557[0]
  i1556.m_Force = i1557[1]
  i1556.m_FreeSpin = i1557[2]
  return i1556
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.JointLimits' )
  var i1559 = data
  i1558.m_Min = i1559[0]
  i1558.m_Max = i1559[1]
  i1558.m_Bounciness = i1559[2]
  i1558.m_BounceMinVelocity = i1559[3]
  i1558.m_ContactDistance = i1559[4]
  i1558.minBounce = i1559[5]
  i1558.maxBounce = i1559[6]
  return i1558
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.JointDrive' )
  var i1561 = data
  i1560.m_PositionSpring = i1561[0]
  i1560.m_PositionDamper = i1561[1]
  i1560.m_MaximumForce = i1561[2]
  i1560.m_UseAcceleration = i1561[3]
  return i1560
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1563 = data
  i1562.m_Spring = i1563[0]
  i1562.m_Damper = i1563[1]
  return i1562
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1565 = data
  i1564.m_Limit = i1565[0]
  i1564.m_Bounciness = i1565[1]
  i1564.m_ContactDistance = i1565[2]
  return i1564
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1567 = data
  i1566.m_ExtremumSlip = i1567[0]
  i1566.m_ExtremumValue = i1567[1]
  i1566.m_AsymptoteSlip = i1567[2]
  i1566.m_AsymptoteValue = i1567[3]
  i1566.m_Stiffness = i1567[4]
  return i1566
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1569 = data
  i1568.m_LowerAngle = i1569[0]
  i1568.m_UpperAngle = i1569[1]
  return i1568
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1571 = data
  i1570.m_MotorSpeed = i1571[0]
  i1570.m_MaximumMotorTorque = i1571[1]
  return i1570
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1573 = data
  i1572.m_DampingRatio = i1573[0]
  i1572.m_Frequency = i1573[1]
  i1572.m_Angle = i1573[2]
  return i1572
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1575 = data
  i1574.m_LowerTranslation = i1575[0]
  i1574.m_UpperTranslation = i1575[1]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.width = i1577[1]
  i1576.height = i1577[2]
  i1576.mipmapCount = i1577[3]
  i1576.anisoLevel = i1577[4]
  i1576.filterMode = i1577[5]
  i1576.hdr = !!i1577[6]
  i1576.format = i1577[7]
  i1576.wrapMode = i1577[8]
  i1576.alphaIsTransparency = !!i1577[9]
  i1576.alphaSource = i1577[10]
  i1576.graphicsFormat = i1577[11]
  i1576.sRGBTexture = !!i1577[12]
  i1576.desiredColorSpace = i1577[13]
  i1576.wrapU = i1577[14]
  i1576.wrapV = i1577[15]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1579 = data
  i1578.position = new pc.Vec3( i1579[0], i1579[1], i1579[2] )
  i1578.scale = new pc.Vec3( i1579[3], i1579[4], i1579[5] )
  i1578.rotation = new pc.Quat(i1579[6], i1579[7], i1579[8], i1579[9])
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1581 = data
  i1580.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1581[0], i1580.main)
  i1580.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1581[1], i1580.colorBySpeed)
  i1580.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1581[2], i1580.colorOverLifetime)
  i1580.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1581[3], i1580.emission)
  i1580.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1581[4], i1580.rotationBySpeed)
  i1580.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1581[5], i1580.rotationOverLifetime)
  i1580.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1581[6], i1580.shape)
  i1580.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1581[7], i1580.sizeBySpeed)
  i1580.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1581[8], i1580.sizeOverLifetime)
  i1580.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1581[9], i1580.textureSheetAnimation)
  i1580.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1581[10], i1580.velocityOverLifetime)
  i1580.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1581[11], i1580.noise)
  i1580.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1581[12], i1580.inheritVelocity)
  i1580.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1581[13], i1580.forceOverLifetime)
  i1580.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1581[14], i1580.limitVelocityOverLifetime)
  i1580.useAutoRandomSeed = !!i1581[15]
  i1580.randomSeed = i1581[16]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemMain()
  var i1583 = data
  i1582.duration = i1583[0]
  i1582.loop = !!i1583[1]
  i1582.prewarm = !!i1583[2]
  i1582.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[3], i1582.startDelay)
  i1582.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[4], i1582.startLifetime)
  i1582.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[5], i1582.startSpeed)
  i1582.startSize3D = !!i1583[6]
  i1582.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[7], i1582.startSizeX)
  i1582.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[8], i1582.startSizeY)
  i1582.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[9], i1582.startSizeZ)
  i1582.startRotation3D = !!i1583[10]
  i1582.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[11], i1582.startRotationX)
  i1582.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[12], i1582.startRotationY)
  i1582.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[13], i1582.startRotationZ)
  i1582.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1583[14], i1582.startColor)
  i1582.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[15], i1582.gravityModifier)
  i1582.simulationSpace = i1583[16]
  request.r(i1583[17], i1583[18], 0, i1582, 'customSimulationSpace')
  i1582.simulationSpeed = i1583[19]
  i1582.useUnscaledTime = !!i1583[20]
  i1582.scalingMode = i1583[21]
  i1582.playOnAwake = !!i1583[22]
  i1582.maxParticles = i1583[23]
  i1582.emitterVelocityMode = i1583[24]
  i1582.stopAction = i1583[25]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1584 = root || new pc.MinMaxCurve()
  var i1585 = data
  i1584.mode = i1585[0]
  i1584.curveMin = new pc.AnimationCurve( { keys_flow: i1585[1] } )
  i1584.curveMax = new pc.AnimationCurve( { keys_flow: i1585[2] } )
  i1584.curveMultiplier = i1585[3]
  i1584.constantMin = i1585[4]
  i1584.constantMax = i1585[5]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1586 = root || new pc.MinMaxGradient()
  var i1587 = data
  i1586.mode = i1587[0]
  i1586.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1587[1], i1586.gradientMin)
  i1586.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1587[2], i1586.gradientMax)
  i1586.colorMin = new pc.Color(i1587[3], i1587[4], i1587[5], i1587[6])
  i1586.colorMax = new pc.Color(i1587[7], i1587[8], i1587[9], i1587[10])
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1589 = data
  i1588.mode = i1589[0]
  var i1591 = i1589[1]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1591[i + 0]) );
  }
  i1588.colorKeys = i1590
  var i1593 = i1589[2]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1593[i + 0]) );
  }
  i1588.alphaKeys = i1592
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1594 = root || new pc.ParticleSystemColorBySpeed()
  var i1595 = data
  i1594.enabled = !!i1595[0]
  i1594.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1595[1], i1594.color)
  i1594.range = new pc.Vec2( i1595[2], i1595[3] )
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1599 = data
  i1598.color = new pc.Color(i1599[0], i1599[1], i1599[2], i1599[3])
  i1598.time = i1599[4]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1603 = data
  i1602.alpha = i1603[0]
  i1602.time = i1603[1]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1604 = root || new pc.ParticleSystemColorOverLifetime()
  var i1605 = data
  i1604.enabled = !!i1605[0]
  i1604.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1605[1], i1604.color)
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1606 = root || new pc.ParticleSystemEmitter()
  var i1607 = data
  i1606.enabled = !!i1607[0]
  i1606.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[1], i1606.rateOverTime)
  i1606.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[2], i1606.rateOverDistance)
  var i1609 = i1607[3]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1609[i + 0]) );
  }
  i1606.bursts = i1608
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1612 = root || new pc.ParticleSystemBurst()
  var i1613 = data
  i1612.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1613[0], i1612.count)
  i1612.cycleCount = i1613[1]
  i1612.minCount = i1613[2]
  i1612.maxCount = i1613[3]
  i1612.repeatInterval = i1613[4]
  i1612.time = i1613[5]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1614 = root || new pc.ParticleSystemRotationBySpeed()
  var i1615 = data
  i1614.enabled = !!i1615[0]
  i1614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1615[1], i1614.x)
  i1614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1615[2], i1614.y)
  i1614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1615[3], i1614.z)
  i1614.separateAxes = !!i1615[4]
  i1614.range = new pc.Vec2( i1615[5], i1615[6] )
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1616 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1617 = data
  i1616.enabled = !!i1617[0]
  i1616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1617[1], i1616.x)
  i1616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1617[2], i1616.y)
  i1616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1617[3], i1616.z)
  i1616.separateAxes = !!i1617[4]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1618 = root || new pc.ParticleSystemShape()
  var i1619 = data
  i1618.enabled = !!i1619[0]
  i1618.shapeType = i1619[1]
  i1618.randomDirectionAmount = i1619[2]
  i1618.sphericalDirectionAmount = i1619[3]
  i1618.randomPositionAmount = i1619[4]
  i1618.alignToDirection = !!i1619[5]
  i1618.radius = i1619[6]
  i1618.radiusMode = i1619[7]
  i1618.radiusSpread = i1619[8]
  i1618.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1619[9], i1618.radiusSpeed)
  i1618.radiusThickness = i1619[10]
  i1618.angle = i1619[11]
  i1618.length = i1619[12]
  i1618.boxThickness = new pc.Vec3( i1619[13], i1619[14], i1619[15] )
  i1618.meshShapeType = i1619[16]
  request.r(i1619[17], i1619[18], 0, i1618, 'mesh')
  request.r(i1619[19], i1619[20], 0, i1618, 'meshRenderer')
  request.r(i1619[21], i1619[22], 0, i1618, 'skinnedMeshRenderer')
  i1618.useMeshMaterialIndex = !!i1619[23]
  i1618.meshMaterialIndex = i1619[24]
  i1618.useMeshColors = !!i1619[25]
  i1618.normalOffset = i1619[26]
  i1618.arc = i1619[27]
  i1618.arcMode = i1619[28]
  i1618.arcSpread = i1619[29]
  i1618.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1619[30], i1618.arcSpeed)
  i1618.donutRadius = i1619[31]
  i1618.position = new pc.Vec3( i1619[32], i1619[33], i1619[34] )
  i1618.rotation = new pc.Vec3( i1619[35], i1619[36], i1619[37] )
  i1618.scale = new pc.Vec3( i1619[38], i1619[39], i1619[40] )
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1620 = root || new pc.ParticleSystemSizeBySpeed()
  var i1621 = data
  i1620.enabled = !!i1621[0]
  i1620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[1], i1620.x)
  i1620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[2], i1620.y)
  i1620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[3], i1620.z)
  i1620.separateAxes = !!i1621[4]
  i1620.range = new pc.Vec2( i1621[5], i1621[6] )
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1622 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1623 = data
  i1622.enabled = !!i1623[0]
  i1622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[1], i1622.x)
  i1622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[2], i1622.y)
  i1622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[3], i1622.z)
  i1622.separateAxes = !!i1623[4]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1624 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1625 = data
  i1624.enabled = !!i1625[0]
  i1624.mode = i1625[1]
  i1624.animation = i1625[2]
  i1624.numTilesX = i1625[3]
  i1624.numTilesY = i1625[4]
  i1624.useRandomRow = !!i1625[5]
  i1624.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1625[6], i1624.frameOverTime)
  i1624.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1625[7], i1624.startFrame)
  i1624.cycleCount = i1625[8]
  i1624.rowIndex = i1625[9]
  i1624.flipU = i1625[10]
  i1624.flipV = i1625[11]
  i1624.spriteCount = i1625[12]
  var i1627 = i1625[13]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 2) {
  request.r(i1627[i + 0], i1627[i + 1], 2, i1626, '')
  }
  i1624.sprites = i1626
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1630 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[1], i1630.x)
  i1630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[2], i1630.y)
  i1630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[3], i1630.z)
  i1630.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[4], i1630.radial)
  i1630.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[5], i1630.speedModifier)
  i1630.space = i1631[6]
  i1630.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[7], i1630.orbitalX)
  i1630.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[8], i1630.orbitalY)
  i1630.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[9], i1630.orbitalZ)
  i1630.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[10], i1630.orbitalOffsetX)
  i1630.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[11], i1630.orbitalOffsetY)
  i1630.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[12], i1630.orbitalOffsetZ)
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1632 = root || new pc.ParticleSystemNoise()
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.separateAxes = !!i1633[1]
  i1632.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[2], i1632.strengthX)
  i1632.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[3], i1632.strengthY)
  i1632.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[4], i1632.strengthZ)
  i1632.frequency = i1633[5]
  i1632.damping = !!i1633[6]
  i1632.octaveCount = i1633[7]
  i1632.octaveMultiplier = i1633[8]
  i1632.octaveScale = i1633[9]
  i1632.quality = i1633[10]
  i1632.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[11], i1632.scrollSpeed)
  i1632.scrollSpeedMultiplier = i1633[12]
  i1632.remapEnabled = !!i1633[13]
  i1632.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[14], i1632.remapX)
  i1632.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[15], i1632.remapY)
  i1632.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[16], i1632.remapZ)
  i1632.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[17], i1632.positionAmount)
  i1632.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[18], i1632.rotationAmount)
  i1632.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[19], i1632.sizeAmount)
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1634 = root || new pc.ParticleSystemInheritVelocity()
  var i1635 = data
  i1634.enabled = !!i1635[0]
  i1634.mode = i1635[1]
  i1634.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[2], i1634.curve)
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1636 = root || new pc.ParticleSystemForceOverLifetime()
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[1], i1636.x)
  i1636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[2], i1636.y)
  i1636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[3], i1636.z)
  i1636.space = i1637[4]
  i1636.randomized = !!i1637[5]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1638 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1639 = data
  i1638.enabled = !!i1639[0]
  i1638.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[1], i1638.limit)
  i1638.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[2], i1638.limitX)
  i1638.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[3], i1638.limitY)
  i1638.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[4], i1638.limitZ)
  i1638.dampen = i1639[5]
  i1638.separateAxes = !!i1639[6]
  i1638.space = i1639[7]
  i1638.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[8], i1638.drag)
  i1638.multiplyDragByParticleSize = !!i1639[9]
  i1638.multiplyDragByParticleVelocity = !!i1639[10]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1641 = data
  i1640.enabled = !!i1641[0]
  request.r(i1641[1], i1641[2], 0, i1640, 'sharedMaterial')
  var i1643 = i1641[3]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 2, i1642, '')
  }
  i1640.sharedMaterials = i1642
  i1640.receiveShadows = !!i1641[4]
  i1640.shadowCastingMode = i1641[5]
  i1640.sortingLayerID = i1641[6]
  i1640.sortingOrder = i1641[7]
  i1640.lightmapIndex = i1641[8]
  i1640.lightmapSceneIndex = i1641[9]
  i1640.lightmapScaleOffset = new pc.Vec4( i1641[10], i1641[11], i1641[12], i1641[13] )
  i1640.lightProbeUsage = i1641[14]
  i1640.reflectionProbeUsage = i1641[15]
  request.r(i1641[16], i1641[17], 0, i1640, 'mesh')
  i1640.meshCount = i1641[18]
  i1640.activeVertexStreamsCount = i1641[19]
  i1640.alignment = i1641[20]
  i1640.renderMode = i1641[21]
  i1640.sortMode = i1641[22]
  i1640.lengthScale = i1641[23]
  i1640.velocityScale = i1641[24]
  i1640.cameraVelocityScale = i1641[25]
  i1640.normalDirection = i1641[26]
  i1640.sortingFudge = i1641[27]
  i1640.minParticleSize = i1641[28]
  i1640.maxParticleSize = i1641[29]
  i1640.pivot = new pc.Vec3( i1641[30], i1641[31], i1641[32] )
  request.r(i1641[33], i1641[34], 0, i1640, 'trailMaterial')
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'clip')
  request.r(i1647[2], i1647[3], 0, i1646, 'outputAudioMixerGroup')
  i1646.playOnAwake = !!i1647[4]
  i1646.loop = !!i1647[5]
  i1646.time = i1647[6]
  i1646.volume = i1647[7]
  i1646.pitch = i1647[8]
  i1646.enabled = !!i1647[9]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.tagId = i1649[1]
  i1648.enabled = !!i1649[2]
  i1648.isStatic = !!i1649[3]
  i1648.layer = i1649[4]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1650 = root || new pc.UnityMaterial()
  var i1651 = data
  i1650.name = i1651[0]
  request.r(i1651[1], i1651[2], 0, i1650, 'shader')
  i1650.renderQueue = i1651[3]
  i1650.enableInstancing = !!i1651[4]
  var i1653 = i1651[5]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1653[i + 0]) );
  }
  i1650.floatParameters = i1652
  var i1655 = i1651[6]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1655[i + 0]) );
  }
  i1650.colorParameters = i1654
  var i1657 = i1651[7]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1657[i + 0]) );
  }
  i1650.vectorParameters = i1656
  var i1659 = i1651[8]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1659[i + 0]) );
  }
  i1650.textureParameters = i1658
  var i1661 = i1651[9]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1661[i + 0]) );
  }
  i1650.materialFlags = i1660
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.value = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.value = new pc.Color(i1669[1], i1669[2], i1669[3], i1669[4])
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.value = new pc.Vec4( i1673[1], i1673[2], i1673[3], i1673[4] )
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1677 = data
  i1676.name = i1677[0]
  request.r(i1677[1], i1677[2], 0, i1676, 'value')
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.enabled = !!i1681[1]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1683 = data
  i1682.pivot = new pc.Vec2( i1683[0], i1683[1] )
  i1682.anchorMin = new pc.Vec2( i1683[2], i1683[3] )
  i1682.anchorMax = new pc.Vec2( i1683[4], i1683[5] )
  i1682.sizeDelta = new pc.Vec2( i1683[6], i1683[7] )
  i1682.anchoredPosition3D = new pc.Vec3( i1683[8], i1683[9], i1683[10] )
  i1682.rotation = new pc.Quat(i1683[11], i1683[12], i1683[13], i1683[14])
  i1682.scale = new pc.Vec3( i1683[15], i1683[16], i1683[17] )
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1685 = data
  i1684.cullTransparentMesh = !!i1685[0]
  return i1684
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.UI.Image' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'm_Sprite')
  i1686.m_Type = i1687[2]
  i1686.m_PreserveAspect = !!i1687[3]
  i1686.m_FillCenter = !!i1687[4]
  i1686.m_FillMethod = i1687[5]
  i1686.m_FillAmount = i1687[6]
  i1686.m_FillClockwise = !!i1687[7]
  i1686.m_FillOrigin = i1687[8]
  i1686.m_UseSpriteMesh = !!i1687[9]
  i1686.m_PixelsPerUnitMultiplier = i1687[10]
  request.r(i1687[11], i1687[12], 0, i1686, 'm_Material')
  i1686.m_Maskable = !!i1687[13]
  i1686.m_Color = new pc.Color(i1687[14], i1687[15], i1687[16], i1687[17])
  i1686.m_RaycastTarget = !!i1687[18]
  i1686.m_RaycastPadding = new pc.Vec4( i1687[19], i1687[20], i1687[21], i1687[22] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'animatorController')
  request.r(i1689[2], i1689[3], 0, i1688, 'avatar')
  i1688.updateMode = i1689[4]
  i1688.hasTransformHierarchy = !!i1689[5]
  i1688.applyRootMotion = !!i1689[6]
  var i1691 = i1689[7]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 2) {
  request.r(i1691[i + 0], i1691[i + 1], 2, i1690, '')
  }
  i1688.humanBones = i1690
  i1688.enabled = !!i1689[8]
  return i1688
}

Deserializers["Episode1"] = function (request, data, root) {
  var i1694 = root || request.c( 'Episode1' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, '_arm')
  request.r(i1695[2], i1695[3], 0, i1694, '_points')
  request.r(i1695[4], i1695[5], 0, i1694, '_unit')
  request.r(i1695[6], i1695[7], 0, i1694, '_particleSystem')
  request.r(i1695[8], i1695[9], 0, i1694, '_textCoins')
  request.r(i1695[10], i1695[11], 0, i1694, '_textDamage')
  request.r(i1695[12], i1695[13], 0, i1694, '_textHealth')
  request.r(i1695[14], i1695[15], 0, i1694, '_textHealth2')
  request.r(i1695[16], i1695[17], 0, i1694, '_textDamage2')
  i1694.scaleDuration = i1695[18]
  i1694.moveDuration = i1695[19]
  i1694.targetScale = new pc.Vec3( i1695[20], i1695[21], i1695[22] )
  return i1694
}

Deserializers["Card2V"] = function (request, data, root) {
  var i1696 = root || request.c( 'Card2V' )
  var i1697 = data
  i1696._us = !!i1697[0]
  request.r(i1697[1], i1697[2], 0, i1696, '_arm')
  request.r(i1697[3], i1697[4], 0, i1696, '_episode')
  i1696._dragon = !!i1697[5]
  i1696._isMainCard = !!i1697[6]
  i1696.moveDuration = i1697[7]
  i1696.scaleDuration = i1697[8]
  i1696.targetScale = new pc.Vec3( i1697[9], i1697[10], i1697[11] )
  return i1696
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.UI.Text' )
  var i1699 = data
  i1698.m_FontData = request.d('UnityEngine.UI.FontData', i1699[0], i1698.m_FontData)
  i1698.m_Text = i1699[1]
  request.r(i1699[2], i1699[3], 0, i1698, 'm_Material')
  i1698.m_Maskable = !!i1699[4]
  i1698.m_Color = new pc.Color(i1699[5], i1699[6], i1699[7], i1699[8])
  i1698.m_RaycastTarget = !!i1699[9]
  i1698.m_RaycastPadding = new pc.Vec4( i1699[10], i1699[11], i1699[12], i1699[13] )
  return i1698
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'm_Font')
  i1700.m_FontSize = i1701[2]
  i1700.m_FontStyle = i1701[3]
  i1700.m_BestFit = !!i1701[4]
  i1700.m_MinSize = i1701[5]
  i1700.m_MaxSize = i1701[6]
  i1700.m_Alignment = i1701[7]
  i1700.m_AlignByGeometry = !!i1701[8]
  i1700.m_RichText = !!i1701[9]
  i1700.m_HorizontalOverflow = i1701[10]
  i1700.m_VerticalOverflow = i1701[11]
  i1700.m_LineSpacing = i1701[12]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.halfPrecision = !!i1703[1]
  i1702.useUInt32IndexFormat = !!i1703[2]
  i1702.vertexCount = i1703[3]
  i1702.aabb = i1703[4]
  var i1705 = i1703[5]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( !!i1705[i + 0] );
  }
  i1702.streams = i1704
  i1702.vertices = i1703[6]
  var i1707 = i1703[7]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1707[i + 0]) );
  }
  i1702.subMeshes = i1706
  var i1709 = i1703[8]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 16) {
    i1708.push( new pc.Mat4().setData(i1709[i + 0], i1709[i + 1], i1709[i + 2], i1709[i + 3],  i1709[i + 4], i1709[i + 5], i1709[i + 6], i1709[i + 7],  i1709[i + 8], i1709[i + 9], i1709[i + 10], i1709[i + 11],  i1709[i + 12], i1709[i + 13], i1709[i + 14], i1709[i + 15]) );
  }
  i1702.bindposes = i1708
  var i1711 = i1703[9]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1711[i + 0]) );
  }
  i1702.blendShapes = i1710
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1717 = data
  i1716.triangles = i1717[0]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1723 = data
  i1722.name = i1723[0]
  var i1725 = i1723[1]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1725[i + 0]) );
  }
  i1722.frames = i1724
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1727 = data
  i1726.m_Alpha = i1727[0]
  i1726.m_Interactable = !!i1727[1]
  i1726.m_BlocksRaycasts = !!i1727[2]
  i1726.m_IgnoreParentGroups = !!i1727[3]
  i1726.enabled = !!i1727[4]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1729 = data
  i1728.name = i1729[0]
  i1728.index = i1729[1]
  i1728.startup = !!i1729[2]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.aspect = i1731[1]
  i1730.orthographic = !!i1731[2]
  i1730.orthographicSize = i1731[3]
  i1730.backgroundColor = new pc.Color(i1731[4], i1731[5], i1731[6], i1731[7])
  i1730.nearClipPlane = i1731[8]
  i1730.farClipPlane = i1731[9]
  i1730.fieldOfView = i1731[10]
  i1730.depth = i1731[11]
  i1730.clearFlags = i1731[12]
  i1730.cullingMask = i1731[13]
  i1730.rect = i1731[14]
  request.r(i1731[15], i1731[16], 0, i1730, 'targetTexture')
  i1730.usePhysicalProperties = !!i1731[17]
  i1730.focalLength = i1731[18]
  i1730.sensorSize = new pc.Vec2( i1731[19], i1731[20] )
  i1730.lensShift = new pc.Vec2( i1731[21], i1731[22] )
  i1730.gateFit = i1731[23]
  i1730.commandBufferCount = i1731[24]
  i1730.cameraType = i1731[25]
  return i1730
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1733 = data
  i1732.m_RenderShadows = !!i1733[0]
  i1732.m_RequiresDepthTextureOption = i1733[1]
  i1732.m_RequiresOpaqueTextureOption = i1733[2]
  i1732.m_CameraType = i1733[3]
  var i1735 = i1733[4]
  var i1734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 1, i1734, '')
  }
  i1732.m_Cameras = i1734
  i1732.m_RendererIndex = i1733[5]
  i1732.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1733[6] )
  request.r(i1733[7], i1733[8], 0, i1732, 'm_VolumeTrigger')
  i1732.m_VolumeFrameworkUpdateModeOption = i1733[9]
  i1732.m_RenderPostProcessing = !!i1733[10]
  i1732.m_Antialiasing = i1733[11]
  i1732.m_AntialiasingQuality = i1733[12]
  i1732.m_StopNaN = !!i1733[13]
  i1732.m_Dithering = !!i1733[14]
  i1732.m_ClearDepth = !!i1733[15]
  i1732.m_AllowXRRendering = !!i1733[16]
  i1732.m_AllowHDROutput = !!i1733[17]
  i1732.m_UseScreenCoordOverride = !!i1733[18]
  i1732.m_ScreenSizeOverride = new pc.Vec4( i1733[19], i1733[20], i1733[21], i1733[22] )
  i1732.m_ScreenCoordScaleBias = new pc.Vec4( i1733[23], i1733[24], i1733[25], i1733[26] )
  i1732.m_RequiresDepthTexture = !!i1733[27]
  i1732.m_RequiresColorTexture = !!i1733[28]
  i1732.m_Version = i1733[29]
  i1732.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1733[30], i1732.m_TaaSettings)
  return i1732
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1739 = data
  i1738.m_Quality = i1739[0]
  i1738.m_FrameInfluence = i1739[1]
  i1738.m_JitterScale = i1739[2]
  i1738.m_MipBias = i1739[3]
  i1738.m_VarianceClampScale = i1739[4]
  i1738.m_ContrastAdaptiveSharpening = i1739[5]
  return i1738
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i1740 = root || request.c( 'ParticleFollowUI' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, '_buttonButtle')
  request.r(i1741[2], i1741[3], 0, i1740, '_buttonShop')
  request.r(i1741[4], i1741[5], 0, i1740, 'uiCamera')
  request.r(i1741[6], i1741[7], 0, i1740, '_particleEffectButton')
  request.r(i1741[8], i1741[9], 0, i1740, '_particleEffectButtonShop')
  i1740.zOffset = i1741[10]
  return i1740
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i1742 = root || request.c( 'ClickCta' )
  var i1743 = data
  return i1742
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i1745 = data
  i1744.m_ComponentVersion = i1745[0]
  i1744.m_LightType = i1745[1]
  i1744.m_BlendStyleIndex = i1745[2]
  i1744.m_FalloffIntensity = i1745[3]
  i1744.m_Color = new pc.Color(i1745[4], i1745[5], i1745[6], i1745[7])
  i1744.m_Intensity = i1745[8]
  i1744.m_LightVolumeIntensity = i1745[9]
  i1744.m_LightVolumeIntensityEnabled = !!i1745[10]
  i1744.m_ApplyToSortingLayers = i1745[11]
  request.r(i1745[12], i1745[13], 0, i1744, 'm_LightCookieSprite')
  request.r(i1745[14], i1745[15], 0, i1744, 'm_DeprecatedPointLightCookieSprite')
  i1744.m_LightOrder = i1745[16]
  i1744.m_AlphaBlendOnOverlap = !!i1745[17]
  i1744.m_OverlapOperation = i1745[18]
  i1744.m_NormalMapDistance = i1745[19]
  i1744.m_NormalMapQuality = i1745[20]
  i1744.m_UseNormalMap = !!i1745[21]
  i1744.m_ShadowIntensityEnabled = !!i1745[22]
  i1744.m_ShadowIntensity = i1745[23]
  i1744.m_ShadowVolumeIntensityEnabled = !!i1745[24]
  i1744.m_ShadowVolumeIntensity = i1745[25]
  i1744.m_PointLightInnerAngle = i1745[26]
  i1744.m_PointLightOuterAngle = i1745[27]
  i1744.m_PointLightInnerRadius = i1745[28]
  i1744.m_PointLightOuterRadius = i1745[29]
  i1744.m_ShapeLightParametricSides = i1745[30]
  i1744.m_ShapeLightParametricAngleOffset = i1745[31]
  i1744.m_ShapeLightParametricRadius = i1745[32]
  i1744.m_ShapeLightFalloffSize = i1745[33]
  i1744.m_ShapeLightFalloffOffset = new pc.Vec2( i1745[34], i1745[35] )
  var i1747 = i1745[36]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 3) {
    i1746.push( new pc.Vec3( i1747[i + 0], i1747[i + 1], i1747[i + 2] ) );
  }
  i1744.m_ShapePath = i1746
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.planeDistance = i1751[1]
  i1750.referencePixelsPerUnit = i1751[2]
  i1750.isFallbackOverlay = !!i1751[3]
  i1750.renderMode = i1751[4]
  i1750.renderOrder = i1751[5]
  i1750.sortingLayerName = i1751[6]
  i1750.sortingOrder = i1751[7]
  i1750.scaleFactor = i1751[8]
  request.r(i1751[9], i1751[10], 0, i1750, 'worldCamera')
  i1750.overrideSorting = !!i1751[11]
  i1750.pixelPerfect = !!i1751[12]
  i1750.targetDisplay = i1751[13]
  i1750.overridePixelPerfect = !!i1751[14]
  return i1750
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1753 = data
  i1752.m_UiScaleMode = i1753[0]
  i1752.m_ReferencePixelsPerUnit = i1753[1]
  i1752.m_ScaleFactor = i1753[2]
  i1752.m_ReferenceResolution = new pc.Vec2( i1753[3], i1753[4] )
  i1752.m_ScreenMatchMode = i1753[5]
  i1752.m_MatchWidthOrHeight = i1753[6]
  i1752.m_PhysicalUnit = i1753[7]
  i1752.m_FallbackScreenDPI = i1753[8]
  i1752.m_DefaultSpriteDPI = i1753[9]
  i1752.m_DynamicPixelsPerUnit = i1753[10]
  i1752.m_PresetInfoIsWorld = !!i1753[11]
  return i1752
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1755 = data
  i1754.m_IgnoreReversedGraphics = !!i1755[0]
  i1754.m_BlockingObjects = i1755[1]
  i1754.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1755[2] )
  return i1754
}

Deserializers["CardEnemy"] = function (request, data, root) {
  var i1756 = root || request.c( 'CardEnemy' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, '_particleSystem')
  return i1756
}

Deserializers["Point"] = function (request, data, root) {
  var i1758 = root || request.c( 'Point' )
  var i1759 = data
  i1758._occupied = !!i1759[0]
  return i1758
}

Deserializers["Episode6"] = function (request, data, root) {
  var i1760 = root || request.c( 'Episode6' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, '_arm')
  request.r(i1761[2], i1761[3], 0, i1760, '_points')
  request.r(i1761[4], i1761[5], 0, i1760, '_cart')
  request.r(i1761[6], i1761[7], 0, i1760, '_cartPoint')
  request.r(i1761[8], i1761[9], 0, i1760, '_coinsText')
  request.r(i1761[10], i1761[11], 0, i1760, '_textDamage')
  request.r(i1761[12], i1761[13], 0, i1760, '_textHealth')
  request.r(i1761[14], i1761[15], 0, i1760, '_textHealth2')
  request.r(i1761[16], i1761[17], 0, i1760, '_textDamage2')
  i1760.scaleDuration = i1761[18]
  i1760.moveDuration = i1761[19]
  i1760.targetScale = new pc.Vec3( i1761[20], i1761[21], i1761[22] )
  request.r(i1761[23], i1761[24], 0, i1760, '_particleDragon')
  request.r(i1761[25], i1761[26], 0, i1760, '_particleCards')
  return i1760
}

Deserializers["Episode2"] = function (request, data, root) {
  var i1762 = root || request.c( 'Episode2' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, '_arm')
  request.r(i1763[2], i1763[3], 0, i1762, '_points')
  request.r(i1763[4], i1763[5], 0, i1762, '_unit1')
  request.r(i1763[6], i1763[7], 0, i1762, '_unit2')
  request.r(i1763[8], i1763[9], 0, i1762, '_particleSystem1')
  request.r(i1763[10], i1763[11], 0, i1762, '_particleSystem2')
  request.r(i1763[12], i1763[13], 0, i1762, '_textCoins')
  request.r(i1763[14], i1763[15], 0, i1762, '_textDamage')
  request.r(i1763[16], i1763[17], 0, i1762, '_textHealth')
  request.r(i1763[18], i1763[19], 0, i1762, '_textHealth2')
  request.r(i1763[20], i1763[21], 0, i1762, '_textDamage2')
  i1762.scaleDuration = i1763[22]
  i1762.moveDuration = i1763[23]
  i1762.targetScale = new pc.Vec3( i1763[24], i1763[25], i1763[26] )
  return i1762
}

Deserializers["Episode5"] = function (request, data, root) {
  var i1764 = root || request.c( 'Episode5' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, '_card1_1_2')
  request.r(i1765[2], i1765[3], 0, i1764, '_card1_2_2')
  request.r(i1765[4], i1765[5], 0, i1764, '_card1_3_2')
  request.r(i1765[6], i1765[7], 0, i1764, '_card1_1')
  request.r(i1765[8], i1765[9], 0, i1764, '_card2_1')
  request.r(i1765[10], i1765[11], 0, i1764, '_coinsText')
  request.r(i1765[12], i1765[13], 0, i1764, '_particleSystem')
  return i1764
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i1766 = root || request.c( 'Episode4_1' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, '_cart1__2')
  request.r(i1767[2], i1767[3], 0, i1766, '_cart2__2')
  request.r(i1767[4], i1767[5], 0, i1766, '_cart3__2')
  request.r(i1767[6], i1767[7], 0, i1766, '_cart1_1')
  request.r(i1767[8], i1767[9], 0, i1766, '_cart2_1')
  request.r(i1767[10], i1767[11], 0, i1766, '_cart3_1')
  request.r(i1767[12], i1767[13], 0, i1766, '_arm')
  request.r(i1767[14], i1767[15], 0, i1766, '_coinText')
  request.r(i1767[16], i1767[17], 0, i1766, '_particleSystem')
  request.r(i1767[18], i1767[19], 0, i1766, '_particleDragon')
  return i1766
}

Deserializers["UpdateButton"] = function (request, data, root) {
  var i1768 = root || request.c( 'UpdateButton' )
  var i1769 = data
  request.r(i1769[0], i1769[1], 0, i1768, '_episode')
  request.r(i1769[2], i1769[3], 0, i1768, '_arm')
  return i1768
}

Deserializers["Episode3"] = function (request, data, root) {
  var i1770 = root || request.c( 'Episode3' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, '_battle')
  request.r(i1771[2], i1771[3], 0, i1770, '_button')
  request.r(i1771[4], i1771[5], 0, i1770, '_cardDracone')
  request.r(i1771[6], i1771[7], 0, i1770, '_point')
  request.r(i1771[8], i1771[9], 0, i1770, '_cardEnemye1')
  request.r(i1771[10], i1771[11], 0, i1770, '_cardEnemye2')
  request.r(i1771[12], i1771[13], 0, i1770, '_cardEnemye3')
  request.r(i1771[14], i1771[15], 0, i1770, '_cardDragon1')
  request.r(i1771[16], i1771[17], 0, i1770, '_cardDragon2')
  request.r(i1771[18], i1771[19], 0, i1770, '_cardDragon3')
  request.r(i1771[20], i1771[21], 0, i1770, '_particleSystem1')
  request.r(i1771[22], i1771[23], 0, i1770, '_particleSystem2')
  request.r(i1771[24], i1771[25], 0, i1770, '_particleSystem3')
  request.r(i1771[26], i1771[27], 0, i1770, '_particleButton')
  request.r(i1771[28], i1771[29], 0, i1770, '_textCoins')
  request.r(i1771[30], i1771[31], 0, i1770, '_winVictoty')
  request.r(i1771[32], i1771[33], 0, i1770, '_winInscription')
  request.r(i1771[34], i1771[35], 0, i1770, '_winInscription2')
  request.r(i1771[36], i1771[37], 0, i1770, '_winInscription3')
  request.r(i1771[38], i1771[39], 0, i1770, '_parentsDisplay')
  request.r(i1771[40], i1771[41], 0, i1770, '_cardL')
  return i1770
}

Deserializers["Episode7"] = function (request, data, root) {
  var i1772 = root || request.c( 'Episode7' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'button')
  request.r(i1773[2], i1773[3], 0, i1772, '_battle')
  request.r(i1773[4], i1773[5], 0, i1772, '_button')
  request.r(i1773[6], i1773[7], 0, i1772, '_cardEnemye1')
  request.r(i1773[8], i1773[9], 0, i1772, '_cardEnemye2')
  request.r(i1773[10], i1773[11], 0, i1772, '_cardEnemye3')
  request.r(i1773[12], i1773[13], 0, i1772, '_cardEnemye4')
  request.r(i1773[14], i1773[15], 0, i1772, '_cardEnemye5')
  request.r(i1773[16], i1773[17], 0, i1772, '_cardEnemye6')
  request.r(i1773[18], i1773[19], 0, i1772, '_cardDragon1')
  request.r(i1773[20], i1773[21], 0, i1772, '_cardDragon2')
  request.r(i1773[22], i1773[23], 0, i1772, '_cardDragon3')
  request.r(i1773[24], i1773[25], 0, i1772, '_particleSystem1')
  request.r(i1773[26], i1773[27], 0, i1772, '_particleSystem2')
  request.r(i1773[28], i1773[29], 0, i1772, '_particleSystem3')
  request.r(i1773[30], i1773[31], 0, i1772, '_particleSystem4')
  request.r(i1773[32], i1773[33], 0, i1772, '_particleSystem5')
  request.r(i1773[34], i1773[35], 0, i1772, '_particleSystem6')
  request.r(i1773[36], i1773[37], 0, i1772, '_winVictoty')
  request.r(i1773[38], i1773[39], 0, i1772, '_winFinal')
  request.r(i1773[40], i1773[41], 0, i1772, '_particleSystem')
  request.r(i1773[42], i1773[43], 0, i1772, '_particleDragon')
  request.r(i1773[44], i1773[45], 0, i1772, '_episode3')
  return i1772
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i1774 = root || request.c( 'Episode4_2' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, '_buttonF')
  request.r(i1775[2], i1775[3], 0, i1774, '_battle')
  request.r(i1775[4], i1775[5], 0, i1774, '_button')
  request.r(i1775[6], i1775[7], 0, i1774, '_cardEnemye1')
  request.r(i1775[8], i1775[9], 0, i1774, '_cardEnemye2')
  request.r(i1775[10], i1775[11], 0, i1774, '_cardEnemye3')
  request.r(i1775[12], i1775[13], 0, i1774, '_cardDracone1')
  request.r(i1775[14], i1775[15], 0, i1774, '_cardDracone2')
  request.r(i1775[16], i1775[17], 0, i1774, '_cardDracone3')
  request.r(i1775[18], i1775[19], 0, i1774, '_winDefeat')
  request.r(i1775[20], i1775[21], 0, i1774, '_winFinal')
  request.r(i1775[22], i1775[23], 0, i1774, '_particleSystem1')
  request.r(i1775[24], i1775[25], 0, i1774, '_particleSystem2')
  request.r(i1775[26], i1775[27], 0, i1774, '_particleSystem3')
  request.r(i1775[28], i1775[29], 0, i1774, '_particleSystem4')
  request.r(i1775[30], i1775[31], 0, i1774, '_particleSystem5')
  request.r(i1775[32], i1775[33], 0, i1774, '_particleSystem6')
  request.r(i1775[34], i1775[35], 0, i1774, '_particleSystem7')
  request.r(i1775[36], i1775[37], 0, i1774, '_particleSystem8')
  request.r(i1775[38], i1775[39], 0, i1774, '_particleSystem9')
  request.r(i1775[40], i1775[41], 0, i1774, '_particleButtun')
  request.r(i1775[42], i1775[43], 0, i1774, '_particleDragon')
  request.r(i1775[44], i1775[45], 0, i1774, '_layer')
  request.r(i1775[46], i1775[47], 0, i1774, '_winInscription')
  request.r(i1775[48], i1775[49], 0, i1774, '_winInscription2')
  request.r(i1775[50], i1775[51], 0, i1774, '_winInscription3')
  return i1774
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i1776 = root || request.c( 'Episode5_2' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, '_battle')
  request.r(i1777[2], i1777[3], 0, i1776, '_button')
  request.r(i1777[4], i1777[5], 0, i1776, '_cardEnemye1')
  request.r(i1777[6], i1777[7], 0, i1776, '_cardEnemye2')
  request.r(i1777[8], i1777[9], 0, i1776, '_cardEnemye3')
  request.r(i1777[10], i1777[11], 0, i1776, '_cardDracone1')
  request.r(i1777[12], i1777[13], 0, i1776, '_cardDracone2')
  request.r(i1777[14], i1777[15], 0, i1776, '_cardDracone3')
  request.r(i1777[16], i1777[17], 0, i1776, '_cardDracone4')
  request.r(i1777[18], i1777[19], 0, i1776, '_winDefeat')
  request.r(i1777[20], i1777[21], 0, i1776, '_winFinal')
  request.r(i1777[22], i1777[23], 0, i1776, '_particleSystem1')
  request.r(i1777[24], i1777[25], 0, i1776, '_particleSystem2')
  request.r(i1777[26], i1777[27], 0, i1776, '_particleSystem3')
  request.r(i1777[28], i1777[29], 0, i1776, '_particleSystem4')
  request.r(i1777[30], i1777[31], 0, i1776, '_particleSystem5')
  request.r(i1777[32], i1777[33], 0, i1776, '_particleSystem6')
  request.r(i1777[34], i1777[35], 0, i1776, '_particleSystem7')
  request.r(i1777[36], i1777[37], 0, i1776, '_particleSystem')
  request.r(i1777[38], i1777[39], 0, i1776, '_layer')
  request.r(i1777[40], i1777[41], 0, i1776, '_winInscription')
  request.r(i1777[42], i1777[43], 0, i1776, '_winInscription2')
  request.r(i1777[44], i1777[45], 0, i1776, '_winInscription3')
  return i1776
}

Deserializers["Buttle"] = function (request, data, root) {
  var i1778 = root || request.c( 'Buttle' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, '_episode')
  request.r(i1779[2], i1779[3], 0, i1778, '_buttonShop')
  request.r(i1779[4], i1779[5], 0, i1778, '_buttonButtle')
  request.r(i1779[6], i1779[7], 0, i1778, '_particle')
  request.r(i1779[8], i1779[9], 0, i1778, '_episode7')
  request.r(i1779[10], i1779[11], 0, i1778, '_episode4_2')
  return i1778
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i1780 = root || request.c( 'ArmAnimation' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, '_targetButton')
  i1780.flyDuration = i1781[2]
  i1780.shrinkDuration = i1781[3]
  i1780.restoreDuration = i1781[4]
  return i1780
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.UI.Button' )
  var i1783 = data
  i1782.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1783[0], i1782.m_OnClick)
  i1782.m_Navigation = request.d('UnityEngine.UI.Navigation', i1783[1], i1782.m_Navigation)
  i1782.m_Transition = i1783[2]
  i1782.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1783[3], i1782.m_Colors)
  i1782.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1783[4], i1782.m_SpriteState)
  i1782.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1783[5], i1782.m_AnimationTriggers)
  i1782.m_Interactable = !!i1783[6]
  request.r(i1783[7], i1783[8], 0, i1782, 'm_TargetGraphic')
  return i1782
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1785 = data
  i1784.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1785[0], i1784.m_PersistentCalls)
  return i1784
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1787 = data
  var i1789 = i1787[0]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.add(request.d('UnityEngine.Events.PersistentCall', i1789[i + 0]));
  }
  i1786.m_Calls = i1788
  return i1786
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'm_Target')
  i1792.m_TargetAssemblyTypeName = i1793[2]
  i1792.m_MethodName = i1793[3]
  i1792.m_Mode = i1793[4]
  i1792.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1793[5], i1792.m_Arguments)
  i1792.m_CallState = i1793[6]
  return i1792
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'm_ObjectArgument')
  i1794.m_ObjectArgumentAssemblyTypeName = i1795[2]
  i1794.m_IntArgument = i1795[3]
  i1794.m_FloatArgument = i1795[4]
  i1794.m_StringArgument = i1795[5]
  i1794.m_BoolArgument = !!i1795[6]
  return i1794
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1797 = data
  i1796.m_Mode = i1797[0]
  i1796.m_WrapAround = !!i1797[1]
  request.r(i1797[2], i1797[3], 0, i1796, 'm_SelectOnUp')
  request.r(i1797[4], i1797[5], 0, i1796, 'm_SelectOnDown')
  request.r(i1797[6], i1797[7], 0, i1796, 'm_SelectOnLeft')
  request.r(i1797[8], i1797[9], 0, i1796, 'm_SelectOnRight')
  return i1796
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1799 = data
  i1798.m_NormalColor = new pc.Color(i1799[0], i1799[1], i1799[2], i1799[3])
  i1798.m_HighlightedColor = new pc.Color(i1799[4], i1799[5], i1799[6], i1799[7])
  i1798.m_PressedColor = new pc.Color(i1799[8], i1799[9], i1799[10], i1799[11])
  i1798.m_SelectedColor = new pc.Color(i1799[12], i1799[13], i1799[14], i1799[15])
  i1798.m_DisabledColor = new pc.Color(i1799[16], i1799[17], i1799[18], i1799[19])
  i1798.m_ColorMultiplier = i1799[20]
  i1798.m_FadeDuration = i1799[21]
  return i1798
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'm_HighlightedSprite')
  request.r(i1801[2], i1801[3], 0, i1800, 'm_PressedSprite')
  request.r(i1801[4], i1801[5], 0, i1800, 'm_SelectedSprite')
  request.r(i1801[6], i1801[7], 0, i1800, 'm_DisabledSprite')
  return i1800
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1803 = data
  i1802.m_NormalTrigger = i1803[0]
  i1802.m_HighlightedTrigger = i1803[1]
  i1802.m_PressedTrigger = i1803[2]
  i1802.m_SelectedTrigger = i1803[3]
  i1802.m_DisabledTrigger = i1803[4]
  return i1802
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'm_FirstSelected')
  i1804.m_sendNavigationEvents = !!i1805[2]
  i1804.m_DragThreshold = i1805[3]
  return i1804
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1807 = data
  i1806.m_HorizontalAxis = i1807[0]
  i1806.m_VerticalAxis = i1807[1]
  i1806.m_SubmitButton = i1807[2]
  i1806.m_CancelButton = i1807[3]
  i1806.m_InputActionsPerSecond = i1807[4]
  i1806.m_RepeatDelay = i1807[5]
  i1806.m_ForceModuleActive = !!i1807[6]
  i1806.m_SendPointerHoverToParent = !!i1807[7]
  return i1806
}

Deserializers["Scenario"] = function (request, data, root) {
  var i1808 = root || request.c( 'Scenario' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, '_episode1')
  request.r(i1809[2], i1809[3], 0, i1808, '_episode2')
  request.r(i1809[4], i1809[5], 0, i1808, '_episode3')
  request.r(i1809[6], i1809[7], 0, i1808, '_episode4v2')
  return i1808
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i1810 = root || request.c( 'Episode5_1' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, '_card1')
  request.r(i1811[2], i1811[3], 0, i1810, '_card2')
  request.r(i1811[4], i1811[5], 0, i1810, '_episode5')
  request.r(i1811[6], i1811[7], 0, i1810, 'episode4_1')
  request.r(i1811[8], i1811[9], 0, i1810, 'episode5_2')
  request.r(i1811[10], i1811[11], 0, i1810, '_texCoins')
  request.r(i1811[12], i1811[13], 0, i1810, '_particleSystem')
  return i1810
}

Deserializers["Episode4v2"] = function (request, data, root) {
  var i1812 = root || request.c( 'Episode4v2' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, '_point1')
  request.r(i1813[2], i1813[3], 0, i1812, '_point2')
  request.r(i1813[4], i1813[5], 0, i1812, '_point3')
  request.r(i1813[6], i1813[7], 0, i1812, '_point4')
  request.r(i1813[8], i1813[9], 0, i1812, '_point5')
  request.r(i1813[10], i1813[11], 0, i1812, '_point6')
  request.r(i1813[12], i1813[13], 0, i1812, '_buttle')
  var i1815 = i1813[14]
  var i1814 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i1815.length; i += 2) {
  request.r(i1815[i + 0], i1815[i + 1], 1, i1814, '')
  }
  i1812._dragonCards = i1814
  var i1817 = i1813[15]
  var i1816 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 1, i1816, '')
  }
  i1812._nonDragonCards = i1816
  request.r(i1813[16], i1813[17], 0, i1812, '_armO')
  request.r(i1813[18], i1813[19], 0, i1812, '_armU')
  i1812._cardsDragon = i1813[20]
  i1812._isUpgrade = !!i1813[21]
  i1812._isButtle = !!i1813[22]
  i1812._isArm = !!i1813[23]
  var i1819 = i1813[24]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i1819.length; i += 2) {
  request.r(i1819[i + 0], i1819[i + 1], 1, i1818, '')
  }
  i1812._cards = i1818
  request.r(i1813[25], i1813[26], 0, i1812, '_card')
  request.r(i1813[27], i1813[28], 0, i1812, '_updateButton')
  request.r(i1813[29], i1813[30], 0, i1812, '_TMony')
  request.r(i1813[31], i1813[32], 0, i1812, '_buttleButton')
  request.r(i1813[33], i1813[34], 0, i1812, '_pointS1')
  request.r(i1813[35], i1813[36], 0, i1812, '_pointS2')
  request.r(i1813[37], i1813[38], 0, i1812, '_pointS3')
  request.r(i1813[39], i1813[40], 0, i1812, '_arm')
  request.r(i1813[41], i1813[42], 0, i1812, '_arm2')
  request.r(i1813[43], i1813[44], 0, i1812, '_cardPointUpgrade')
  request.r(i1813[45], i1813[46], 0, i1812, '_textHealth3')
  request.r(i1813[47], i1813[48], 0, i1812, '_textDamage3')
  request.r(i1813[49], i1813[50], 0, i1812, '_layer')
  request.r(i1813[51], i1813[52], 0, i1812, '_particle')
  request.r(i1813[53], i1813[54], 0, i1812, '_particle2')
  request.r(i1813[55], i1813[56], 0, i1812, '_particleU')
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1823 = data
  i1822.ambientIntensity = i1823[0]
  i1822.reflectionIntensity = i1823[1]
  i1822.ambientMode = i1823[2]
  i1822.ambientLight = new pc.Color(i1823[3], i1823[4], i1823[5], i1823[6])
  i1822.ambientSkyColor = new pc.Color(i1823[7], i1823[8], i1823[9], i1823[10])
  i1822.ambientGroundColor = new pc.Color(i1823[11], i1823[12], i1823[13], i1823[14])
  i1822.ambientEquatorColor = new pc.Color(i1823[15], i1823[16], i1823[17], i1823[18])
  i1822.fogColor = new pc.Color(i1823[19], i1823[20], i1823[21], i1823[22])
  i1822.fogEndDistance = i1823[23]
  i1822.fogStartDistance = i1823[24]
  i1822.fogDensity = i1823[25]
  i1822.fog = !!i1823[26]
  request.r(i1823[27], i1823[28], 0, i1822, 'skybox')
  i1822.fogMode = i1823[29]
  var i1825 = i1823[30]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1825[i + 0]) );
  }
  i1822.lightmaps = i1824
  i1822.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1823[31], i1822.lightProbes)
  i1822.lightmapsMode = i1823[32]
  i1822.mixedBakeMode = i1823[33]
  i1822.environmentLightingMode = i1823[34]
  i1822.ambientProbe = new pc.SphericalHarmonicsL2(i1823[35])
  i1822.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1823[36])
  i1822.useReferenceAmbientProbe = !!i1823[37]
  request.r(i1823[38], i1823[39], 0, i1822, 'customReflection')
  request.r(i1823[40], i1823[41], 0, i1822, 'defaultReflection')
  i1822.defaultReflectionMode = i1823[42]
  i1822.defaultReflectionResolution = i1823[43]
  i1822.sunLightObjectId = i1823[44]
  i1822.pixelLightCount = i1823[45]
  i1822.defaultReflectionHDR = !!i1823[46]
  i1822.hasLightDataAsset = !!i1823[47]
  i1822.hasManualGenerate = !!i1823[48]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1829 = data
  request.r(i1829[0], i1829[1], 0, i1828, 'lightmapColor')
  request.r(i1829[2], i1829[3], 0, i1828, 'lightmapDirection')
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1830 = root || new UnityEngine.LightProbes()
  var i1831 = data
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.type = i1837[1]
  i1836.color = new pc.Color(i1837[2], i1837[3], i1837[4], i1837[5])
  i1836.cullingMask = i1837[6]
  i1836.intensity = i1837[7]
  i1836.range = i1837[8]
  i1836.spotAngle = i1837[9]
  i1836.shadows = i1837[10]
  i1836.shadowNormalBias = i1837[11]
  i1836.shadowBias = i1837[12]
  i1836.shadowStrength = i1837[13]
  i1836.shadowResolution = i1837[14]
  i1836.lightmapBakeType = i1837[15]
  i1836.renderMode = i1837[16]
  request.r(i1837[17], i1837[18], 0, i1836, 'cookie')
  i1836.cookieSize = i1837[19]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1839 = data
  i1838.AdditionalLightsPerObjectLimit = i1839[0]
  i1838.AdditionalLightsRenderingMode = i1839[1]
  i1838.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1839[2], i1838.LightRenderingMode)
  i1838.ColorGradingLutSize = i1839[3]
  i1838.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1839[4], i1838.ColorGradingMode)
  i1838.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1839[5], i1838.MainLightRenderingMode)
  i1838.MainLightRenderingModeValue = i1839[6]
  i1838.SupportsMainLightShadows = !!i1839[7]
  i1838.MixedLightingSupported = !!i1839[8]
  i1838.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1839[9], i1838.MsaaQuality)
  i1838.MSAA = i1839[10]
  i1838.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1839[11], i1838.OpaqueDownsampling)
  i1838.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1839[12], i1838.MainLightShadowmapResolution)
  i1838.MainLightShadowmapResolutionValue = i1839[13]
  i1838.SupportsSoftShadows = !!i1839[14]
  i1838.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1839[15], i1838.SoftShadowQuality)
  i1838.SoftShadowQualityValue = i1839[16]
  i1838.ShadowDistance = i1839[17]
  i1838.ShadowCascadeCount = i1839[18]
  i1838.Cascade2Split = i1839[19]
  i1838.Cascade3Split = new pc.Vec2( i1839[20], i1839[21] )
  i1838.Cascade4Split = new pc.Vec3( i1839[22], i1839[23], i1839[24] )
  i1838.CascadeBorder = i1839[25]
  i1838.ShadowDepthBias = i1839[26]
  i1838.ShadowNormalBias = i1839[27]
  i1838.RenderScale = i1839[28]
  i1838.RequireDepthTexture = !!i1839[29]
  i1838.RequireOpaqueTexture = !!i1839[30]
  i1838.SupportsHDR = !!i1839[31]
  i1838.SupportsTerrainHoles = !!i1839[32]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1841 = data
  i1840.Disabled = i1841[0]
  i1840.PerVertex = i1841[1]
  i1840.PerPixel = i1841[2]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1843 = data
  i1842.LowDynamicRange = i1843[0]
  i1842.HighDynamicRange = i1843[1]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1845 = data
  i1844.Disabled = i1845[0]
  i1844._2x = i1845[1]
  i1844._4x = i1845[2]
  i1844._8x = i1845[3]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1847 = data
  i1846.None = i1847[0]
  i1846._2xBilinear = i1847[1]
  i1846._4xBox = i1847[2]
  i1846._4xBilinear = i1847[3]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1849 = data
  i1848._256 = i1849[0]
  i1848._512 = i1849[1]
  i1848._1024 = i1849[2]
  i1848._2048 = i1849[3]
  i1848._4096 = i1849[4]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1851 = data
  i1850.UsePipelineSettings = i1851[0]
  i1850.Low = i1851[1]
  i1850.Medium = i1851[2]
  i1850.High = i1851[3]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1853 = data
  var i1855 = i1853[0]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1855[i + 0]));
  }
  i1852.ShaderCompilationErrors = i1854
  i1852.name = i1853[1]
  i1852.guid = i1853[2]
  var i1857 = i1853[3]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1852.shaderDefinedKeywords = i1856
  var i1859 = i1853[4]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1859[i + 0]) );
  }
  i1852.passes = i1858
  var i1861 = i1853[5]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1861[i + 0]) );
  }
  i1852.usePasses = i1860
  var i1863 = i1853[6]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1863[i + 0]) );
  }
  i1852.defaultParameterValues = i1862
  request.r(i1853[7], i1853[8], 0, i1852, 'unityFallbackShader')
  i1852.readDepth = !!i1853[9]
  i1852.isCreatedByShaderGraph = !!i1853[10]
  i1852.compiled = !!i1853[11]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1867 = data
  i1866.shaderName = i1867[0]
  i1866.errorMessage = i1867[1]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1872 = root || new pc.UnityShaderPass()
  var i1873 = data
  i1872.id = i1873[0]
  i1872.subShaderIndex = i1873[1]
  i1872.name = i1873[2]
  i1872.passType = i1873[3]
  i1872.grabPassTextureName = i1873[4]
  i1872.usePass = !!i1873[5]
  i1872.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[6], i1872.zTest)
  i1872.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[7], i1872.zWrite)
  i1872.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[8], i1872.culling)
  i1872.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1873[9], i1872.blending)
  i1872.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1873[10], i1872.alphaBlending)
  i1872.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[11], i1872.colorWriteMask)
  i1872.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[12], i1872.offsetUnits)
  i1872.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[13], i1872.offsetFactor)
  i1872.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[14], i1872.stencilRef)
  i1872.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[15], i1872.stencilReadMask)
  i1872.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1873[16], i1872.stencilWriteMask)
  i1872.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1873[17], i1872.stencilOp)
  i1872.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1873[18], i1872.stencilOpFront)
  i1872.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1873[19], i1872.stencilOpBack)
  var i1875 = i1873[20]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1875[i + 0]) );
  }
  i1872.tags = i1874
  var i1877 = i1873[21]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( i1877[i + 0] );
  }
  i1872.passDefinedKeywords = i1876
  var i1879 = i1873[22]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1879[i + 0]) );
  }
  i1872.passDefinedKeywordGroups = i1878
  var i1881 = i1873[23]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1881[i + 0]) );
  }
  i1872.variants = i1880
  var i1883 = i1873[24]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1883[i + 0]) );
  }
  i1872.excludedVariants = i1882
  i1872.hasDepthReader = !!i1873[25]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1885 = data
  i1884.val = i1885[0]
  i1884.name = i1885[1]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1887 = data
  i1886.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1887[0], i1886.src)
  i1886.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1887[1], i1886.dst)
  i1886.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1887[2], i1886.op)
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1889 = data
  i1888.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[0], i1888.pass)
  i1888.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[1], i1888.fail)
  i1888.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[2], i1888.zFail)
  i1888.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[3], i1888.comp)
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.value = i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1897 = data
  var i1899 = i1897[0]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( i1899[i + 0] );
  }
  i1896.keywords = i1898
  i1896.hasDiscard = !!i1897[1]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1903 = data
  i1902.passId = i1903[0]
  i1902.subShaderIndex = i1903[1]
  var i1905 = i1903[2]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( i1905[i + 0] );
  }
  i1902.keywords = i1904
  i1902.vertexProgram = i1903[3]
  i1902.fragmentProgram = i1903[4]
  i1902.exportedForWebGl2 = !!i1903[5]
  i1902.readDepth = !!i1903[6]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1909 = data
  request.r(i1909[0], i1909[1], 0, i1908, 'shader')
  i1908.pass = i1909[2]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1913 = data
  i1912.name = i1913[0]
  i1912.type = i1913[1]
  i1912.value = new pc.Vec4( i1913[2], i1913[3], i1913[4], i1913[5] )
  i1912.textureValue = i1913[6]
  i1912.shaderPropertyFlag = i1913[7]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1915 = data
  i1914.name = i1915[0]
  request.r(i1915[1], i1915[2], 0, i1914, 'texture')
  i1914.aabb = i1915[3]
  i1914.vertices = i1915[4]
  i1914.triangles = i1915[5]
  i1914.textureRect = UnityEngine.Rect.MinMaxRect(i1915[6], i1915[7], i1915[8], i1915[9])
  i1914.packedRect = UnityEngine.Rect.MinMaxRect(i1915[10], i1915[11], i1915[12], i1915[13])
  i1914.border = new pc.Vec4( i1915[14], i1915[15], i1915[16], i1915[17] )
  i1914.transparency = i1915[18]
  i1914.bounds = i1915[19]
  i1914.pixelsPerUnit = i1915[20]
  i1914.textureWidth = i1915[21]
  i1914.textureHeight = i1915[22]
  i1914.nativeSize = new pc.Vec2( i1915[23], i1915[24] )
  i1914.pivot = new pc.Vec2( i1915[25], i1915[26] )
  i1914.textureRectOffset = new pc.Vec2( i1915[27], i1915[28] )
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1917 = data
  i1916.name = i1917[0]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.wrapMode = i1919[1]
  i1918.isLooping = !!i1919[2]
  i1918.length = i1919[3]
  var i1921 = i1919[4]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1921[i + 0]) );
  }
  i1918.curves = i1920
  var i1923 = i1919[5]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1923[i + 0]) );
  }
  i1918.events = i1922
  i1918.halfPrecision = !!i1919[6]
  i1918._frameRate = i1919[7]
  i1918.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1919[8], i1918.localBounds)
  i1918.hasMuscleCurves = !!i1919[9]
  var i1925 = i1919[10]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( i1925[i + 0] );
  }
  i1918.clipMuscleConstant = i1924
  i1918.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1919[11], i1918.clipBindingConstant)
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1929 = data
  i1928.path = i1929[0]
  i1928.hash = i1929[1]
  i1928.componentType = i1929[2]
  i1928.property = i1929[3]
  i1928.keys = i1929[4]
  var i1931 = i1929[5]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1931[i + 0]) );
  }
  i1928.objectReferenceKeys = i1930
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1935 = data
  i1934.time = i1935[0]
  request.r(i1935[1], i1935[2], 0, i1934, 'value')
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1939 = data
  i1938.functionName = i1939[0]
  i1938.floatParameter = i1939[1]
  i1938.intParameter = i1939[2]
  i1938.stringParameter = i1939[3]
  request.r(i1939[4], i1939[5], 0, i1938, 'objectReferenceParameter')
  i1938.time = i1939[6]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1941 = data
  i1940.center = new pc.Vec3( i1941[0], i1941[1], i1941[2] )
  i1940.extends = new pc.Vec3( i1941[3], i1941[4], i1941[5] )
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1945 = data
  var i1947 = i1945[0]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( i1947[i + 0] );
  }
  i1944.genericBindings = i1946
  var i1949 = i1945[1]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( i1949[i + 0] );
  }
  i1944.pptrCurveMapping = i1948
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1951 = data
  i1950.name = i1951[0]
  i1950.ascent = i1951[1]
  i1950.originalLineHeight = i1951[2]
  i1950.fontSize = i1951[3]
  var i1953 = i1951[4]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1953[i + 0]) );
  }
  i1950.characterInfo = i1952
  request.r(i1951[5], i1951[6], 0, i1950, 'texture')
  i1950.originalFontSize = i1951[7]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1957 = data
  i1956.index = i1957[0]
  i1956.advance = i1957[1]
  i1956.bearing = i1957[2]
  i1956.glyphWidth = i1957[3]
  i1956.glyphHeight = i1957[4]
  i1956.minX = i1957[5]
  i1956.maxX = i1957[6]
  i1956.minY = i1957[7]
  i1956.maxY = i1957[8]
  i1956.uvBottomLeftX = i1957[9]
  i1956.uvBottomLeftY = i1957[10]
  i1956.uvBottomRightX = i1957[11]
  i1956.uvBottomRightY = i1957[12]
  i1956.uvTopLeftX = i1957[13]
  i1956.uvTopLeftY = i1957[14]
  i1956.uvTopRightX = i1957[15]
  i1956.uvTopRightY = i1957[16]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1959 = data
  i1958.name = i1959[0]
  var i1961 = i1959[1]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1961[i + 0]) );
  }
  i1958.layers = i1960
  var i1963 = i1959[2]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1963[i + 0]) );
  }
  i1958.parameters = i1962
  i1958.animationClips = i1959[3]
  i1958.avatarUnsupported = i1959[4]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1967 = data
  i1966.name = i1967[0]
  i1966.defaultWeight = i1967[1]
  i1966.blendingMode = i1967[2]
  i1966.avatarMask = i1967[3]
  i1966.syncedLayerIndex = i1967[4]
  i1966.syncedLayerAffectsTiming = !!i1967[5]
  i1966.syncedLayers = i1967[6]
  i1966.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1967[7], i1966.stateMachine)
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1969 = data
  i1968.id = i1969[0]
  i1968.name = i1969[1]
  i1968.path = i1969[2]
  var i1971 = i1969[3]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1971[i + 0]) );
  }
  i1968.states = i1970
  var i1973 = i1969[4]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1973[i + 0]) );
  }
  i1968.machines = i1972
  var i1975 = i1969[5]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1975[i + 0]) );
  }
  i1968.entryStateTransitions = i1974
  var i1977 = i1969[6]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1977[i + 0]) );
  }
  i1968.exitStateTransitions = i1976
  var i1979 = i1969[7]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1979[i + 0]) );
  }
  i1968.anyStateTransitions = i1978
  i1968.defaultStateId = i1969[8]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1983 = data
  i1982.id = i1983[0]
  i1982.name = i1983[1]
  i1982.cycleOffset = i1983[2]
  i1982.cycleOffsetParameter = i1983[3]
  i1982.cycleOffsetParameterActive = !!i1983[4]
  i1982.mirror = !!i1983[5]
  i1982.mirrorParameter = i1983[6]
  i1982.mirrorParameterActive = !!i1983[7]
  i1982.motionId = i1983[8]
  i1982.nameHash = i1983[9]
  i1982.fullPathHash = i1983[10]
  i1982.speed = i1983[11]
  i1982.speedParameter = i1983[12]
  i1982.speedParameterActive = !!i1983[13]
  i1982.tag = i1983[14]
  i1982.tagHash = i1983[15]
  i1982.writeDefaultValues = !!i1983[16]
  var i1985 = i1983[17]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 2) {
  request.r(i1985[i + 0], i1985[i + 1], 2, i1984, '')
  }
  i1982.behaviours = i1984
  var i1987 = i1983[18]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1987[i + 0]) );
  }
  i1982.transitions = i1986
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1993 = data
  i1992.fullPath = i1993[0]
  i1992.canTransitionToSelf = !!i1993[1]
  i1992.duration = i1993[2]
  i1992.exitTime = i1993[3]
  i1992.hasExitTime = !!i1993[4]
  i1992.hasFixedDuration = !!i1993[5]
  i1992.interruptionSource = i1993[6]
  i1992.offset = i1993[7]
  i1992.orderedInterruption = !!i1993[8]
  i1992.destinationStateId = i1993[9]
  i1992.isExit = !!i1993[10]
  i1992.mute = !!i1993[11]
  i1992.solo = !!i1993[12]
  var i1995 = i1993[13]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1995[i + 0]) );
  }
  i1992.conditions = i1994
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2001 = data
  i2000.destinationStateId = i2001[0]
  i2000.isExit = !!i2001[1]
  i2000.mute = !!i2001[2]
  i2000.solo = !!i2001[3]
  var i2003 = i2001[4]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2003[i + 0]) );
  }
  i2000.conditions = i2002
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2007 = data
  i2006.defaultBool = !!i2007[0]
  i2006.defaultFloat = i2007[1]
  i2006.defaultInt = i2007[2]
  i2006.name = i2007[3]
  i2006.nameHash = i2007[4]
  i2006.type = i2007[5]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2009 = data
  var i2011 = i2009[0]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2011[i + 0]) );
  }
  i2008.files = i2010
  i2008.componentToPrefabIds = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2015 = data
  i2014.path = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'unityObject')
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2017 = data
  var i2019 = i2017[0]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2019[i + 0]) );
  }
  i2016.scriptsExecutionOrder = i2018
  var i2021 = i2017[1]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2021[i + 0]) );
  }
  i2016.sortingLayers = i2020
  var i2023 = i2017[2]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2023[i + 0]) );
  }
  i2016.cullingLayers = i2022
  i2016.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2017[3], i2016.timeSettings)
  i2016.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2017[4], i2016.physicsSettings)
  i2016.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2017[5], i2016.physics2DSettings)
  i2016.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2017[6], i2016.qualitySettings)
  i2016.enableRealtimeShadows = !!i2017[7]
  i2016.enableAutoInstancing = !!i2017[8]
  i2016.enableDynamicBatching = !!i2017[9]
  i2016.lightmapEncodingQuality = i2017[10]
  i2016.desiredColorSpace = i2017[11]
  var i2025 = i2017[12]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( i2025[i + 0] );
  }
  i2016.allTags = i2024
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.value = i2029[1]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2033 = data
  i2032.id = i2033[0]
  i2032.name = i2033[1]
  i2032.value = i2033[2]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2037 = data
  i2036.id = i2037[0]
  i2036.name = i2037[1]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2039 = data
  i2038.fixedDeltaTime = i2039[0]
  i2038.maximumDeltaTime = i2039[1]
  i2038.timeScale = i2039[2]
  i2038.maximumParticleTimestep = i2039[3]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2041 = data
  i2040.gravity = new pc.Vec3( i2041[0], i2041[1], i2041[2] )
  i2040.defaultSolverIterations = i2041[3]
  i2040.bounceThreshold = i2041[4]
  i2040.autoSyncTransforms = !!i2041[5]
  i2040.autoSimulation = !!i2041[6]
  var i2043 = i2041[7]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2043[i + 0]) );
  }
  i2040.collisionMatrix = i2042
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2047 = data
  i2046.enabled = !!i2047[0]
  i2046.layerId = i2047[1]
  i2046.otherLayerId = i2047[2]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'material')
  i2048.gravity = new pc.Vec2( i2049[2], i2049[3] )
  i2048.positionIterations = i2049[4]
  i2048.velocityIterations = i2049[5]
  i2048.velocityThreshold = i2049[6]
  i2048.maxLinearCorrection = i2049[7]
  i2048.maxAngularCorrection = i2049[8]
  i2048.maxTranslationSpeed = i2049[9]
  i2048.maxRotationSpeed = i2049[10]
  i2048.baumgarteScale = i2049[11]
  i2048.baumgarteTOIScale = i2049[12]
  i2048.timeToSleep = i2049[13]
  i2048.linearSleepTolerance = i2049[14]
  i2048.angularSleepTolerance = i2049[15]
  i2048.defaultContactOffset = i2049[16]
  i2048.autoSimulation = !!i2049[17]
  i2048.queriesHitTriggers = !!i2049[18]
  i2048.queriesStartInColliders = !!i2049[19]
  i2048.callbacksOnDisable = !!i2049[20]
  i2048.reuseCollisionCallbacks = !!i2049[21]
  i2048.autoSyncTransforms = !!i2049[22]
  var i2051 = i2049[23]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2051[i + 0]) );
  }
  i2048.collisionMatrix = i2050
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2055 = data
  i2054.enabled = !!i2055[0]
  i2054.layerId = i2055[1]
  i2054.otherLayerId = i2055[2]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2057 = data
  var i2059 = i2057[0]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2059[i + 0]) );
  }
  i2056.qualityLevels = i2058
  var i2061 = i2057[1]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2056.names = i2060
  i2056.shadows = i2057[2]
  i2056.anisotropicFiltering = i2057[3]
  i2056.antiAliasing = i2057[4]
  i2056.lodBias = i2057[5]
  i2056.shadowCascades = i2057[6]
  i2056.shadowDistance = i2057[7]
  i2056.shadowmaskMode = i2057[8]
  i2056.shadowProjection = i2057[9]
  i2056.shadowResolution = i2057[10]
  i2056.softParticles = !!i2057[11]
  i2056.softVegetation = !!i2057[12]
  i2056.activeColorSpace = i2057[13]
  i2056.desiredColorSpace = i2057[14]
  i2056.masterTextureLimit = i2057[15]
  i2056.maxQueuedFrames = i2057[16]
  i2056.particleRaycastBudget = i2057[17]
  i2056.pixelLightCount = i2057[18]
  i2056.realtimeReflectionProbes = !!i2057[19]
  i2056.shadowCascade2Split = i2057[20]
  i2056.shadowCascade4Split = new pc.Vec3( i2057[21], i2057[22], i2057[23] )
  i2056.streamingMipmapsActive = !!i2057[24]
  i2056.vSyncCount = i2057[25]
  i2056.asyncUploadBufferSize = i2057[26]
  i2056.asyncUploadTimeSlice = i2057[27]
  i2056.billboardsFaceCameraPosition = !!i2057[28]
  i2056.shadowNearPlaneOffset = i2057[29]
  i2056.streamingMipmapsMemoryBudget = i2057[30]
  i2056.maximumLODLevel = i2057[31]
  i2056.streamingMipmapsAddAllCameras = !!i2057[32]
  i2056.streamingMipmapsMaxLevelReduction = i2057[33]
  i2056.streamingMipmapsRenderersPerFrame = i2057[34]
  i2056.resolutionScalingFixedDPIFactor = i2057[35]
  i2056.streamingMipmapsMaxFileIORequests = i2057[36]
  i2056.currentQualityLevel = i2057[37]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2067 = data
  i2066.weight = i2067[0]
  i2066.vertices = i2067[1]
  i2066.normals = i2067[2]
  i2066.tangents = i2067[3]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2071 = data
  i2070.mode = i2071[0]
  i2070.parameter = i2071[1]
  i2070.threshold = i2071[2]
  return i2070
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[23],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[23],"85":[86],"87":[88],"89":[88],"29":[8],"90":[8],"91":[92],"93":[94],"95":[23],"96":[23],"25":[23],"97":[51],"98":[92],"99":[100],"101":[8],"102":[8],"31":[29],"11":[9,8],"103":[8],"30":[29],"104":[8],"105":[8],"106":[8],"107":[8],"108":[8],"109":[8],"110":[8],"111":[8],"112":[8],"113":[9,8],"114":[8],"115":[8],"116":[8],"117":[8],"18":[9,8],"118":[8],"119":[47],"120":[47],"48":[47],"121":[47],"122":[23],"123":[23],"124":[92]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Episode1","UnityEngine.GameObject","UnityEngine.UI.Text","Card2V","UnityEngine.Font","UnityEngine.Mesh","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","ParticleFollowUI","ClickCta","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CardEnemy","Point","Episode6","Episode2","Episode5","Episode4_1","UpdateButton","Episode4v2","Episode3","Episode7","Episode4_2","Episode5_2","Buttle","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "18.8";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3054";

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

Deserializers.buildID = "b4c34f9e-83e0-44f3-a60d-e1e4c144f13f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

