var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointSpring' )
  var i1489 = data
  i1488.spring = i1489[0]
  i1488.damper = i1489[1]
  i1488.targetPosition = i1489[2]
  return i1488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.JointMotor' )
  var i1491 = data
  i1490.m_TargetVelocity = i1491[0]
  i1490.m_Force = i1491[1]
  i1490.m_FreeSpin = i1491[2]
  return i1490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.JointLimits' )
  var i1493 = data
  i1492.m_Min = i1493[0]
  i1492.m_Max = i1493[1]
  i1492.m_Bounciness = i1493[2]
  i1492.m_BounceMinVelocity = i1493[3]
  i1492.m_ContactDistance = i1493[4]
  i1492.minBounce = i1493[5]
  i1492.maxBounce = i1493[6]
  return i1492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.JointDrive' )
  var i1495 = data
  i1494.m_PositionSpring = i1495[0]
  i1494.m_PositionDamper = i1495[1]
  i1494.m_MaximumForce = i1495[2]
  i1494.m_UseAcceleration = i1495[3]
  return i1494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1497 = data
  i1496.m_Spring = i1497[0]
  i1496.m_Damper = i1497[1]
  return i1496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1499 = data
  i1498.m_Limit = i1499[0]
  i1498.m_Bounciness = i1499[1]
  i1498.m_ContactDistance = i1499[2]
  return i1498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1501 = data
  i1500.m_ExtremumSlip = i1501[0]
  i1500.m_ExtremumValue = i1501[1]
  i1500.m_AsymptoteSlip = i1501[2]
  i1500.m_AsymptoteValue = i1501[3]
  i1500.m_Stiffness = i1501[4]
  return i1500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1503 = data
  i1502.m_LowerAngle = i1503[0]
  i1502.m_UpperAngle = i1503[1]
  return i1502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1505 = data
  i1504.m_MotorSpeed = i1505[0]
  i1504.m_MaximumMotorTorque = i1505[1]
  return i1504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1507 = data
  i1506.m_DampingRatio = i1507[0]
  i1506.m_Frequency = i1507[1]
  i1506.m_Angle = i1507[2]
  return i1506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1509 = data
  i1508.m_LowerTranslation = i1509[0]
  i1508.m_UpperTranslation = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.width = i1511[1]
  i1510.height = i1511[2]
  i1510.mipmapCount = i1511[3]
  i1510.anisoLevel = i1511[4]
  i1510.filterMode = i1511[5]
  i1510.hdr = !!i1511[6]
  i1510.format = i1511[7]
  i1510.wrapMode = i1511[8]
  i1510.alphaIsTransparency = !!i1511[9]
  i1510.alphaSource = i1511[10]
  i1510.graphicsFormat = i1511[11]
  i1510.sRGBTexture = !!i1511[12]
  i1510.desiredColorSpace = i1511[13]
  i1510.wrapU = i1511[14]
  i1510.wrapV = i1511[15]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1513 = data
  i1512.position = new pc.Vec3( i1513[0], i1513[1], i1513[2] )
  i1512.scale = new pc.Vec3( i1513[3], i1513[4], i1513[5] )
  i1512.rotation = new pc.Quat(i1513[6], i1513[7], i1513[8], i1513[9])
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1515 = data
  i1514.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1515[0], i1514.main)
  i1514.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1515[1], i1514.colorBySpeed)
  i1514.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1515[2], i1514.colorOverLifetime)
  i1514.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1515[3], i1514.emission)
  i1514.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1515[4], i1514.rotationBySpeed)
  i1514.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1515[5], i1514.rotationOverLifetime)
  i1514.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1515[6], i1514.shape)
  i1514.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1515[7], i1514.sizeBySpeed)
  i1514.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1515[8], i1514.sizeOverLifetime)
  i1514.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1515[9], i1514.textureSheetAnimation)
  i1514.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1515[10], i1514.velocityOverLifetime)
  i1514.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1515[11], i1514.noise)
  i1514.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1515[12], i1514.inheritVelocity)
  i1514.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1515[13], i1514.forceOverLifetime)
  i1514.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1515[14], i1514.limitVelocityOverLifetime)
  i1514.useAutoRandomSeed = !!i1515[15]
  i1514.randomSeed = i1515[16]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1516 = root || new pc.ParticleSystemMain()
  var i1517 = data
  i1516.duration = i1517[0]
  i1516.loop = !!i1517[1]
  i1516.prewarm = !!i1517[2]
  i1516.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[3], i1516.startDelay)
  i1516.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[4], i1516.startLifetime)
  i1516.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[5], i1516.startSpeed)
  i1516.startSize3D = !!i1517[6]
  i1516.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[7], i1516.startSizeX)
  i1516.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[8], i1516.startSizeY)
  i1516.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[9], i1516.startSizeZ)
  i1516.startRotation3D = !!i1517[10]
  i1516.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[11], i1516.startRotationX)
  i1516.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[12], i1516.startRotationY)
  i1516.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[13], i1516.startRotationZ)
  i1516.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1517[14], i1516.startColor)
  i1516.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[15], i1516.gravityModifier)
  i1516.simulationSpace = i1517[16]
  request.r(i1517[17], i1517[18], 0, i1516, 'customSimulationSpace')
  i1516.simulationSpeed = i1517[19]
  i1516.useUnscaledTime = !!i1517[20]
  i1516.scalingMode = i1517[21]
  i1516.playOnAwake = !!i1517[22]
  i1516.maxParticles = i1517[23]
  i1516.emitterVelocityMode = i1517[24]
  i1516.stopAction = i1517[25]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1518 = root || new pc.MinMaxCurve()
  var i1519 = data
  i1518.mode = i1519[0]
  i1518.curveMin = new pc.AnimationCurve( { keys_flow: i1519[1] } )
  i1518.curveMax = new pc.AnimationCurve( { keys_flow: i1519[2] } )
  i1518.curveMultiplier = i1519[3]
  i1518.constantMin = i1519[4]
  i1518.constantMax = i1519[5]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1520 = root || new pc.MinMaxGradient()
  var i1521 = data
  i1520.mode = i1521[0]
  i1520.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1521[1], i1520.gradientMin)
  i1520.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1521[2], i1520.gradientMax)
  i1520.colorMin = new pc.Color(i1521[3], i1521[4], i1521[5], i1521[6])
  i1520.colorMax = new pc.Color(i1521[7], i1521[8], i1521[9], i1521[10])
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1523 = data
  i1522.mode = i1523[0]
  var i1525 = i1523[1]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1525[i + 0]) );
  }
  i1522.colorKeys = i1524
  var i1527 = i1523[2]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1527[i + 0]) );
  }
  i1522.alphaKeys = i1526
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1528 = root || new pc.ParticleSystemColorBySpeed()
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1529[1], i1528.color)
  i1528.range = new pc.Vec2( i1529[2], i1529[3] )
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1533 = data
  i1532.color = new pc.Color(i1533[0], i1533[1], i1533[2], i1533[3])
  i1532.time = i1533[4]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1537 = data
  i1536.alpha = i1537[0]
  i1536.time = i1537[1]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1538 = root || new pc.ParticleSystemColorOverLifetime()
  var i1539 = data
  i1538.enabled = !!i1539[0]
  i1538.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1539[1], i1538.color)
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1540 = root || new pc.ParticleSystemEmitter()
  var i1541 = data
  i1540.enabled = !!i1541[0]
  i1540.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[1], i1540.rateOverTime)
  i1540.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1541[2], i1540.rateOverDistance)
  var i1543 = i1541[3]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1543[i + 0]) );
  }
  i1540.bursts = i1542
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1546 = root || new pc.ParticleSystemBurst()
  var i1547 = data
  i1546.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[0], i1546.count)
  i1546.cycleCount = i1547[1]
  i1546.minCount = i1547[2]
  i1546.maxCount = i1547[3]
  i1546.repeatInterval = i1547[4]
  i1546.time = i1547[5]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1548 = root || new pc.ParticleSystemRotationBySpeed()
  var i1549 = data
  i1548.enabled = !!i1549[0]
  i1548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1549[1], i1548.x)
  i1548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1549[2], i1548.y)
  i1548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1549[3], i1548.z)
  i1548.separateAxes = !!i1549[4]
  i1548.range = new pc.Vec2( i1549[5], i1549[6] )
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1550 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1551 = data
  i1550.enabled = !!i1551[0]
  i1550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[1], i1550.x)
  i1550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[2], i1550.y)
  i1550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[3], i1550.z)
  i1550.separateAxes = !!i1551[4]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1552 = root || new pc.ParticleSystemShape()
  var i1553 = data
  i1552.enabled = !!i1553[0]
  i1552.shapeType = i1553[1]
  i1552.randomDirectionAmount = i1553[2]
  i1552.sphericalDirectionAmount = i1553[3]
  i1552.randomPositionAmount = i1553[4]
  i1552.alignToDirection = !!i1553[5]
  i1552.radius = i1553[6]
  i1552.radiusMode = i1553[7]
  i1552.radiusSpread = i1553[8]
  i1552.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[9], i1552.radiusSpeed)
  i1552.radiusThickness = i1553[10]
  i1552.angle = i1553[11]
  i1552.length = i1553[12]
  i1552.boxThickness = new pc.Vec3( i1553[13], i1553[14], i1553[15] )
  i1552.meshShapeType = i1553[16]
  request.r(i1553[17], i1553[18], 0, i1552, 'mesh')
  request.r(i1553[19], i1553[20], 0, i1552, 'meshRenderer')
  request.r(i1553[21], i1553[22], 0, i1552, 'skinnedMeshRenderer')
  i1552.useMeshMaterialIndex = !!i1553[23]
  i1552.meshMaterialIndex = i1553[24]
  i1552.useMeshColors = !!i1553[25]
  i1552.normalOffset = i1553[26]
  i1552.arc = i1553[27]
  i1552.arcMode = i1553[28]
  i1552.arcSpread = i1553[29]
  i1552.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[30], i1552.arcSpeed)
  i1552.donutRadius = i1553[31]
  i1552.position = new pc.Vec3( i1553[32], i1553[33], i1553[34] )
  i1552.rotation = new pc.Vec3( i1553[35], i1553[36], i1553[37] )
  i1552.scale = new pc.Vec3( i1553[38], i1553[39], i1553[40] )
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1554 = root || new pc.ParticleSystemSizeBySpeed()
  var i1555 = data
  i1554.enabled = !!i1555[0]
  i1554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[1], i1554.x)
  i1554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[2], i1554.y)
  i1554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[3], i1554.z)
  i1554.separateAxes = !!i1555[4]
  i1554.range = new pc.Vec2( i1555[5], i1555[6] )
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1556 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1557 = data
  i1556.enabled = !!i1557[0]
  i1556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1557[1], i1556.x)
  i1556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1557[2], i1556.y)
  i1556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1557[3], i1556.z)
  i1556.separateAxes = !!i1557[4]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1558 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.mode = i1559[1]
  i1558.animation = i1559[2]
  i1558.numTilesX = i1559[3]
  i1558.numTilesY = i1559[4]
  i1558.useRandomRow = !!i1559[5]
  i1558.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[6], i1558.frameOverTime)
  i1558.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1559[7], i1558.startFrame)
  i1558.cycleCount = i1559[8]
  i1558.rowIndex = i1559[9]
  i1558.flipU = i1559[10]
  i1558.flipV = i1559[11]
  i1558.spriteCount = i1559[12]
  var i1561 = i1559[13]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 2) {
  request.r(i1561[i + 0], i1561[i + 1], 2, i1560, '')
  }
  i1558.sprites = i1560
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1564 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[1], i1564.x)
  i1564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[2], i1564.y)
  i1564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[3], i1564.z)
  i1564.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[4], i1564.radial)
  i1564.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[5], i1564.speedModifier)
  i1564.space = i1565[6]
  i1564.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[7], i1564.orbitalX)
  i1564.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[8], i1564.orbitalY)
  i1564.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[9], i1564.orbitalZ)
  i1564.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[10], i1564.orbitalOffsetX)
  i1564.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[11], i1564.orbitalOffsetY)
  i1564.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[12], i1564.orbitalOffsetZ)
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1566 = root || new pc.ParticleSystemNoise()
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.separateAxes = !!i1567[1]
  i1566.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[2], i1566.strengthX)
  i1566.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[3], i1566.strengthY)
  i1566.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[4], i1566.strengthZ)
  i1566.frequency = i1567[5]
  i1566.damping = !!i1567[6]
  i1566.octaveCount = i1567[7]
  i1566.octaveMultiplier = i1567[8]
  i1566.octaveScale = i1567[9]
  i1566.quality = i1567[10]
  i1566.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[11], i1566.scrollSpeed)
  i1566.scrollSpeedMultiplier = i1567[12]
  i1566.remapEnabled = !!i1567[13]
  i1566.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[14], i1566.remapX)
  i1566.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[15], i1566.remapY)
  i1566.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[16], i1566.remapZ)
  i1566.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[17], i1566.positionAmount)
  i1566.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[18], i1566.rotationAmount)
  i1566.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[19], i1566.sizeAmount)
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemInheritVelocity()
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.mode = i1569[1]
  i1568.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[2], i1568.curve)
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemForceOverLifetime()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[1], i1570.x)
  i1570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[2], i1570.y)
  i1570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[3], i1570.z)
  i1570.space = i1571[4]
  i1570.randomized = !!i1571[5]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[1], i1572.limit)
  i1572.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[2], i1572.limitX)
  i1572.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[3], i1572.limitY)
  i1572.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[4], i1572.limitZ)
  i1572.dampen = i1573[5]
  i1572.separateAxes = !!i1573[6]
  i1572.space = i1573[7]
  i1572.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[8], i1572.drag)
  i1572.multiplyDragByParticleSize = !!i1573[9]
  i1572.multiplyDragByParticleVelocity = !!i1573[10]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1575 = data
  i1574.enabled = !!i1575[0]
  request.r(i1575[1], i1575[2], 0, i1574, 'sharedMaterial')
  var i1577 = i1575[3]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 2) {
  request.r(i1577[i + 0], i1577[i + 1], 2, i1576, '')
  }
  i1574.sharedMaterials = i1576
  i1574.receiveShadows = !!i1575[4]
  i1574.shadowCastingMode = i1575[5]
  i1574.sortingLayerID = i1575[6]
  i1574.sortingOrder = i1575[7]
  i1574.lightmapIndex = i1575[8]
  i1574.lightmapSceneIndex = i1575[9]
  i1574.lightmapScaleOffset = new pc.Vec4( i1575[10], i1575[11], i1575[12], i1575[13] )
  i1574.lightProbeUsage = i1575[14]
  i1574.reflectionProbeUsage = i1575[15]
  request.r(i1575[16], i1575[17], 0, i1574, 'mesh')
  i1574.meshCount = i1575[18]
  i1574.activeVertexStreamsCount = i1575[19]
  i1574.alignment = i1575[20]
  i1574.renderMode = i1575[21]
  i1574.sortMode = i1575[22]
  i1574.lengthScale = i1575[23]
  i1574.velocityScale = i1575[24]
  i1574.cameraVelocityScale = i1575[25]
  i1574.normalDirection = i1575[26]
  i1574.sortingFudge = i1575[27]
  i1574.minParticleSize = i1575[28]
  i1574.maxParticleSize = i1575[29]
  i1574.pivot = new pc.Vec3( i1575[30], i1575[31], i1575[32] )
  request.r(i1575[33], i1575[34], 0, i1574, 'trailMaterial')
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1581 = data
  i1580.name = i1581[0]
  i1580.tagId = i1581[1]
  i1580.enabled = !!i1581[2]
  i1580.isStatic = !!i1581[3]
  i1580.layer = i1581[4]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1582 = root || new pc.UnityMaterial()
  var i1583 = data
  i1582.name = i1583[0]
  request.r(i1583[1], i1583[2], 0, i1582, 'shader')
  i1582.renderQueue = i1583[3]
  i1582.enableInstancing = !!i1583[4]
  var i1585 = i1583[5]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1585[i + 0]) );
  }
  i1582.floatParameters = i1584
  var i1587 = i1583[6]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1587[i + 0]) );
  }
  i1582.colorParameters = i1586
  var i1589 = i1583[7]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1589[i + 0]) );
  }
  i1582.vectorParameters = i1588
  var i1591 = i1583[8]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1591[i + 0]) );
  }
  i1582.textureParameters = i1590
  var i1593 = i1583[9]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1593[i + 0]) );
  }
  i1582.materialFlags = i1592
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.value = i1597[1]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.value = new pc.Color(i1601[1], i1601[2], i1601[3], i1601[4])
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1605 = data
  i1604.name = i1605[0]
  i1604.value = new pc.Vec4( i1605[1], i1605[2], i1605[3], i1605[4] )
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1609 = data
  i1608.name = i1609[0]
  request.r(i1609[1], i1609[2], 0, i1608, 'value')
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1613 = data
  i1612.name = i1613[0]
  i1612.enabled = !!i1613[1]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.halfPrecision = !!i1615[1]
  i1614.useUInt32IndexFormat = !!i1615[2]
  i1614.vertexCount = i1615[3]
  i1614.aabb = i1615[4]
  var i1617 = i1615[5]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( !!i1617[i + 0] );
  }
  i1614.streams = i1616
  i1614.vertices = i1615[6]
  var i1619 = i1615[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1619[i + 0]) );
  }
  i1614.subMeshes = i1618
  var i1621 = i1615[8]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 16) {
    i1620.push( new pc.Mat4().setData(i1621[i + 0], i1621[i + 1], i1621[i + 2], i1621[i + 3],  i1621[i + 4], i1621[i + 5], i1621[i + 6], i1621[i + 7],  i1621[i + 8], i1621[i + 9], i1621[i + 10], i1621[i + 11],  i1621[i + 12], i1621[i + 13], i1621[i + 14], i1621[i + 15]) );
  }
  i1614.bindposes = i1620
  var i1623 = i1615[9]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1623[i + 0]) );
  }
  i1614.blendShapes = i1622
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1629 = data
  i1628.triangles = i1629[0]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1635 = data
  i1634.name = i1635[0]
  var i1637 = i1635[1]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1637[i + 0]) );
  }
  i1634.frames = i1636
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'clip')
  request.r(i1639[2], i1639[3], 0, i1638, 'outputAudioMixerGroup')
  i1638.playOnAwake = !!i1639[4]
  i1638.loop = !!i1639[5]
  i1638.time = i1639[6]
  i1638.volume = i1639[7]
  i1638.pitch = i1639[8]
  i1638.enabled = !!i1639[9]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1641 = data
  i1640.pivot = new pc.Vec2( i1641[0], i1641[1] )
  i1640.anchorMin = new pc.Vec2( i1641[2], i1641[3] )
  i1640.anchorMax = new pc.Vec2( i1641[4], i1641[5] )
  i1640.sizeDelta = new pc.Vec2( i1641[6], i1641[7] )
  i1640.anchoredPosition3D = new pc.Vec3( i1641[8], i1641[9], i1641[10] )
  i1640.rotation = new pc.Quat(i1641[11], i1641[12], i1641[13], i1641[14])
  i1640.scale = new pc.Vec3( i1641[15], i1641[16], i1641[17] )
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1643 = data
  i1642.cullTransparentMesh = !!i1643[0]
  return i1642
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.UI.Image' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'm_Sprite')
  i1644.m_Type = i1645[2]
  i1644.m_PreserveAspect = !!i1645[3]
  i1644.m_FillCenter = !!i1645[4]
  i1644.m_FillMethod = i1645[5]
  i1644.m_FillAmount = i1645[6]
  i1644.m_FillClockwise = !!i1645[7]
  i1644.m_FillOrigin = i1645[8]
  i1644.m_UseSpriteMesh = !!i1645[9]
  i1644.m_PixelsPerUnitMultiplier = i1645[10]
  request.r(i1645[11], i1645[12], 0, i1644, 'm_Material')
  i1644.m_Maskable = !!i1645[13]
  i1644.m_Color = new pc.Color(i1645[14], i1645[15], i1645[16], i1645[17])
  i1644.m_RaycastTarget = !!i1645[18]
  i1644.m_RaycastPadding = new pc.Vec4( i1645[19], i1645[20], i1645[21], i1645[22] )
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1647 = data
  i1646.m_Alpha = i1647[0]
  i1646.m_Interactable = !!i1647[1]
  i1646.m_BlocksRaycasts = !!i1647[2]
  i1646.m_IgnoreParentGroups = !!i1647[3]
  i1646.enabled = !!i1647[4]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.index = i1649[1]
  i1648.startup = !!i1649[2]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.aspect = i1651[1]
  i1650.orthographic = !!i1651[2]
  i1650.orthographicSize = i1651[3]
  i1650.backgroundColor = new pc.Color(i1651[4], i1651[5], i1651[6], i1651[7])
  i1650.nearClipPlane = i1651[8]
  i1650.farClipPlane = i1651[9]
  i1650.fieldOfView = i1651[10]
  i1650.depth = i1651[11]
  i1650.clearFlags = i1651[12]
  i1650.cullingMask = i1651[13]
  i1650.rect = i1651[14]
  request.r(i1651[15], i1651[16], 0, i1650, 'targetTexture')
  i1650.usePhysicalProperties = !!i1651[17]
  i1650.focalLength = i1651[18]
  i1650.sensorSize = new pc.Vec2( i1651[19], i1651[20] )
  i1650.lensShift = new pc.Vec2( i1651[21], i1651[22] )
  i1650.gateFit = i1651[23]
  i1650.commandBufferCount = i1651[24]
  i1650.cameraType = i1651[25]
  return i1650
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1653 = data
  i1652.m_RenderShadows = !!i1653[0]
  i1652.m_RequiresDepthTextureOption = i1653[1]
  i1652.m_RequiresOpaqueTextureOption = i1653[2]
  i1652.m_CameraType = i1653[3]
  var i1655 = i1653[4]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 1, i1654, '')
  }
  i1652.m_Cameras = i1654
  i1652.m_RendererIndex = i1653[5]
  i1652.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1653[6] )
  request.r(i1653[7], i1653[8], 0, i1652, 'm_VolumeTrigger')
  i1652.m_VolumeFrameworkUpdateModeOption = i1653[9]
  i1652.m_RenderPostProcessing = !!i1653[10]
  i1652.m_Antialiasing = i1653[11]
  i1652.m_AntialiasingQuality = i1653[12]
  i1652.m_StopNaN = !!i1653[13]
  i1652.m_Dithering = !!i1653[14]
  i1652.m_ClearDepth = !!i1653[15]
  i1652.m_AllowXRRendering = !!i1653[16]
  i1652.m_AllowHDROutput = !!i1653[17]
  i1652.m_UseScreenCoordOverride = !!i1653[18]
  i1652.m_ScreenSizeOverride = new pc.Vec4( i1653[19], i1653[20], i1653[21], i1653[22] )
  i1652.m_ScreenCoordScaleBias = new pc.Vec4( i1653[23], i1653[24], i1653[25], i1653[26] )
  i1652.m_RequiresDepthTexture = !!i1653[27]
  i1652.m_RequiresColorTexture = !!i1653[28]
  i1652.m_Version = i1653[29]
  i1652.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1653[30], i1652.m_TaaSettings)
  return i1652
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1659 = data
  i1658.m_Quality = i1659[0]
  i1658.m_FrameInfluence = i1659[1]
  i1658.m_JitterScale = i1659[2]
  i1658.m_MipBias = i1659[3]
  i1658.m_VarianceClampScale = i1659[4]
  i1658.m_ContrastAdaptiveSharpening = i1659[5]
  return i1658
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i1661 = data
  i1660.m_ComponentVersion = i1661[0]
  i1660.m_LightType = i1661[1]
  i1660.m_BlendStyleIndex = i1661[2]
  i1660.m_FalloffIntensity = i1661[3]
  i1660.m_Color = new pc.Color(i1661[4], i1661[5], i1661[6], i1661[7])
  i1660.m_Intensity = i1661[8]
  i1660.m_LightVolumeIntensity = i1661[9]
  i1660.m_LightVolumeIntensityEnabled = !!i1661[10]
  i1660.m_ApplyToSortingLayers = i1661[11]
  request.r(i1661[12], i1661[13], 0, i1660, 'm_LightCookieSprite')
  request.r(i1661[14], i1661[15], 0, i1660, 'm_DeprecatedPointLightCookieSprite')
  i1660.m_LightOrder = i1661[16]
  i1660.m_AlphaBlendOnOverlap = !!i1661[17]
  i1660.m_OverlapOperation = i1661[18]
  i1660.m_NormalMapDistance = i1661[19]
  i1660.m_NormalMapQuality = i1661[20]
  i1660.m_UseNormalMap = !!i1661[21]
  i1660.m_ShadowIntensityEnabled = !!i1661[22]
  i1660.m_ShadowIntensity = i1661[23]
  i1660.m_ShadowVolumeIntensityEnabled = !!i1661[24]
  i1660.m_ShadowVolumeIntensity = i1661[25]
  i1660.m_PointLightInnerAngle = i1661[26]
  i1660.m_PointLightOuterAngle = i1661[27]
  i1660.m_PointLightInnerRadius = i1661[28]
  i1660.m_PointLightOuterRadius = i1661[29]
  i1660.m_ShapeLightParametricSides = i1661[30]
  i1660.m_ShapeLightParametricAngleOffset = i1661[31]
  i1660.m_ShapeLightParametricRadius = i1661[32]
  i1660.m_ShapeLightFalloffSize = i1661[33]
  i1660.m_ShapeLightFalloffOffset = new pc.Vec2( i1661[34], i1661[35] )
  var i1663 = i1661[36]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 3) {
    i1662.push( new pc.Vec3( i1663[i + 0], i1663[i + 1], i1663[i + 2] ) );
  }
  i1660.m_ShapePath = i1662
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1667 = data
  i1666.enabled = !!i1667[0]
  i1666.planeDistance = i1667[1]
  i1666.referencePixelsPerUnit = i1667[2]
  i1666.isFallbackOverlay = !!i1667[3]
  i1666.renderMode = i1667[4]
  i1666.renderOrder = i1667[5]
  i1666.sortingLayerName = i1667[6]
  i1666.sortingOrder = i1667[7]
  i1666.scaleFactor = i1667[8]
  request.r(i1667[9], i1667[10], 0, i1666, 'worldCamera')
  i1666.overrideSorting = !!i1667[11]
  i1666.pixelPerfect = !!i1667[12]
  i1666.targetDisplay = i1667[13]
  i1666.overridePixelPerfect = !!i1667[14]
  return i1666
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1669 = data
  i1668.m_UiScaleMode = i1669[0]
  i1668.m_ReferencePixelsPerUnit = i1669[1]
  i1668.m_ScaleFactor = i1669[2]
  i1668.m_ReferenceResolution = new pc.Vec2( i1669[3], i1669[4] )
  i1668.m_ScreenMatchMode = i1669[5]
  i1668.m_MatchWidthOrHeight = i1669[6]
  i1668.m_PhysicalUnit = i1669[7]
  i1668.m_FallbackScreenDPI = i1669[8]
  i1668.m_DefaultSpriteDPI = i1669[9]
  i1668.m_DynamicPixelsPerUnit = i1669[10]
  i1668.m_PresetInfoIsWorld = !!i1669[11]
  return i1668
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1671 = data
  i1670.m_IgnoreReversedGraphics = !!i1671[0]
  i1670.m_BlockingObjects = i1671[1]
  i1670.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1671[2] )
  return i1670
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i1672 = root || request.c( 'ClickCta' )
  var i1673 = data
  return i1672
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.Text' )
  var i1675 = data
  i1674.m_FontData = request.d('UnityEngine.UI.FontData', i1675[0], i1674.m_FontData)
  i1674.m_Text = i1675[1]
  request.r(i1675[2], i1675[3], 0, i1674, 'm_Material')
  i1674.m_Maskable = !!i1675[4]
  i1674.m_Color = new pc.Color(i1675[5], i1675[6], i1675[7], i1675[8])
  i1674.m_RaycastTarget = !!i1675[9]
  i1674.m_RaycastPadding = new pc.Vec4( i1675[10], i1675[11], i1675[12], i1675[13] )
  return i1674
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_Font')
  i1676.m_FontSize = i1677[2]
  i1676.m_FontStyle = i1677[3]
  i1676.m_BestFit = !!i1677[4]
  i1676.m_MinSize = i1677[5]
  i1676.m_MaxSize = i1677[6]
  i1676.m_Alignment = i1677[7]
  i1676.m_AlignByGeometry = !!i1677[8]
  i1676.m_RichText = !!i1677[9]
  i1676.m_HorizontalOverflow = i1677[10]
  i1676.m_VerticalOverflow = i1677[11]
  i1676.m_LineSpacing = i1677[12]
  return i1676
}

Deserializers["Episode5"] = function (request, data, root) {
  var i1678 = root || request.c( 'Episode5' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, '_card1_1_2')
  request.r(i1679[2], i1679[3], 0, i1678, '_card1_2_2')
  request.r(i1679[4], i1679[5], 0, i1678, '_card1_3_2')
  request.r(i1679[6], i1679[7], 0, i1678, '_card1_1')
  request.r(i1679[8], i1679[9], 0, i1678, '_card2_1')
  request.r(i1679[10], i1679[11], 0, i1678, '_coinsText')
  request.r(i1679[12], i1679[13], 0, i1678, '_particleSystem')
  return i1678
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i1680 = root || request.c( 'Episode4_1' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, '_cart1__2')
  request.r(i1681[2], i1681[3], 0, i1680, '_cart2__2')
  request.r(i1681[4], i1681[5], 0, i1680, '_cart3__2')
  request.r(i1681[6], i1681[7], 0, i1680, '_cart1_1')
  request.r(i1681[8], i1681[9], 0, i1680, '_cart2_1')
  request.r(i1681[10], i1681[11], 0, i1680, '_cart3_1')
  request.r(i1681[12], i1681[13], 0, i1680, '_arm')
  request.r(i1681[14], i1681[15], 0, i1680, '_coinText')
  request.r(i1681[16], i1681[17], 0, i1680, '_particleSystem')
  request.r(i1681[18], i1681[19], 0, i1680, '_particleDragon')
  return i1680
}

Deserializers["Episode1"] = function (request, data, root) {
  var i1682 = root || request.c( 'Episode1' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, '_arm')
  request.r(i1683[2], i1683[3], 0, i1682, '_points')
  request.r(i1683[4], i1683[5], 0, i1682, '_unit')
  request.r(i1683[6], i1683[7], 0, i1682, '_particleSystem')
  request.r(i1683[8], i1683[9], 0, i1682, '_textCoins')
  request.r(i1683[10], i1683[11], 0, i1682, '_textDamage')
  request.r(i1683[12], i1683[13], 0, i1682, '_textHealth')
  request.r(i1683[14], i1683[15], 0, i1682, '_textHealth2')
  request.r(i1683[16], i1683[17], 0, i1682, '_textDamage2')
  i1682.scaleDuration = i1683[18]
  i1682.moveDuration = i1683[19]
  i1682.targetScale = new pc.Vec3( i1683[20], i1683[21], i1683[22] )
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'animatorController')
  request.r(i1685[2], i1685[3], 0, i1684, 'avatar')
  i1684.updateMode = i1685[4]
  i1684.hasTransformHierarchy = !!i1685[5]
  i1684.applyRootMotion = !!i1685[6]
  var i1687 = i1685[7]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 2, i1686, '')
  }
  i1684.humanBones = i1686
  i1684.enabled = !!i1685[8]
  return i1684
}

Deserializers["Card"] = function (request, data, root) {
  var i1690 = root || request.c( 'Card' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, '_points')
  i1690.scaleDuration = i1691[2]
  i1690.moveDuration = i1691[3]
  i1690.targetScale = new pc.Vec3( i1691[4], i1691[5], i1691[6] )
  request.r(i1691[7], i1691[8], 0, i1690, '_particleSystem')
  request.r(i1691[9], i1691[10], 0, i1690, '_particleDragon')
  return i1690
}

Deserializers["Episode4"] = function (request, data, root) {
  var i1692 = root || request.c( 'Episode4' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, '_cardDragcone1_1')
  request.r(i1693[2], i1693[3], 0, i1692, '_cardDragcone2_2')
  request.r(i1693[4], i1693[5], 0, i1692, '_cardDragcone')
  request.r(i1693[6], i1693[7], 0, i1692, '_arm3_3')
  request.r(i1693[8], i1693[9], 0, i1692, '_shopButton')
  request.r(i1693[10], i1693[11], 0, i1692, '_points')
  request.r(i1693[12], i1693[13], 0, i1692, '_textCoins')
  i1692.scaleDuration = i1693[14]
  i1692.moveDuration = i1693[15]
  i1692.targetScale = new pc.Vec3( i1693[16], i1693[17], i1693[18] )
  return i1692
}

Deserializers["Episode2"] = function (request, data, root) {
  var i1694 = root || request.c( 'Episode2' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, '_arm')
  request.r(i1695[2], i1695[3], 0, i1694, '_points')
  request.r(i1695[4], i1695[5], 0, i1694, '_unit1')
  request.r(i1695[6], i1695[7], 0, i1694, '_unit2')
  request.r(i1695[8], i1695[9], 0, i1694, '_particleSystem1')
  request.r(i1695[10], i1695[11], 0, i1694, '_particleSystem2')
  request.r(i1695[12], i1695[13], 0, i1694, '_textCoins')
  request.r(i1695[14], i1695[15], 0, i1694, '_textDamage')
  request.r(i1695[16], i1695[17], 0, i1694, '_textHealth')
  request.r(i1695[18], i1695[19], 0, i1694, '_textHealth2')
  request.r(i1695[20], i1695[21], 0, i1694, '_textDamage2')
  i1694.scaleDuration = i1695[22]
  i1694.moveDuration = i1695[23]
  i1694.targetScale = new pc.Vec3( i1695[24], i1695[25], i1695[26] )
  return i1694
}

Deserializers["Episode6"] = function (request, data, root) {
  var i1696 = root || request.c( 'Episode6' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, '_arm')
  request.r(i1697[2], i1697[3], 0, i1696, '_points')
  request.r(i1697[4], i1697[5], 0, i1696, '_cart')
  request.r(i1697[6], i1697[7], 0, i1696, '_cartPoint')
  request.r(i1697[8], i1697[9], 0, i1696, '_coinsText')
  request.r(i1697[10], i1697[11], 0, i1696, '_textDamage')
  request.r(i1697[12], i1697[13], 0, i1696, '_textHealth')
  request.r(i1697[14], i1697[15], 0, i1696, '_textHealth2')
  request.r(i1697[16], i1697[17], 0, i1696, '_textDamage2')
  i1696.scaleDuration = i1697[18]
  i1696.moveDuration = i1697[19]
  i1696.targetScale = new pc.Vec3( i1697[20], i1697[21], i1697[22] )
  request.r(i1697[23], i1697[24], 0, i1696, '_particleDragon')
  request.r(i1697[25], i1697[26], 0, i1696, '_particleCards')
  return i1696
}

Deserializers["Episode3"] = function (request, data, root) {
  var i1698 = root || request.c( 'Episode3' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, '_battle')
  request.r(i1699[2], i1699[3], 0, i1698, '_button')
  request.r(i1699[4], i1699[5], 0, i1698, '_cardDracone')
  request.r(i1699[6], i1699[7], 0, i1698, '_point')
  request.r(i1699[8], i1699[9], 0, i1698, '_cardEnemye1')
  request.r(i1699[10], i1699[11], 0, i1698, '_cardEnemye2')
  request.r(i1699[12], i1699[13], 0, i1698, '_cardEnemye3')
  request.r(i1699[14], i1699[15], 0, i1698, '_cardDragon1')
  request.r(i1699[16], i1699[17], 0, i1698, '_cardDragon2')
  request.r(i1699[18], i1699[19], 0, i1698, '_cardDragon3')
  request.r(i1699[20], i1699[21], 0, i1698, '_particleSystem1')
  request.r(i1699[22], i1699[23], 0, i1698, '_particleSystem2')
  request.r(i1699[24], i1699[25], 0, i1698, '_particleSystem3')
  request.r(i1699[26], i1699[27], 0, i1698, '_particleButton')
  request.r(i1699[28], i1699[29], 0, i1698, '_textCoins')
  request.r(i1699[30], i1699[31], 0, i1698, '_winVictoty')
  request.r(i1699[32], i1699[33], 0, i1698, '_winInscription')
  request.r(i1699[34], i1699[35], 0, i1698, '_winInscription2')
  request.r(i1699[36], i1699[37], 0, i1698, '_winInscription3')
  request.r(i1699[38], i1699[39], 0, i1698, '_parentsDisplay')
  return i1698
}

Deserializers["Episode7"] = function (request, data, root) {
  var i1700 = root || request.c( 'Episode7' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, '_battle')
  request.r(i1701[2], i1701[3], 0, i1700, '_button')
  request.r(i1701[4], i1701[5], 0, i1700, '_cardEnemye1')
  request.r(i1701[6], i1701[7], 0, i1700, '_cardEnemye2')
  request.r(i1701[8], i1701[9], 0, i1700, '_cardEnemye3')
  request.r(i1701[10], i1701[11], 0, i1700, '_cardEnemye4')
  request.r(i1701[12], i1701[13], 0, i1700, '_cardEnemye5')
  request.r(i1701[14], i1701[15], 0, i1700, '_cardEnemye6')
  request.r(i1701[16], i1701[17], 0, i1700, '_cardDragon1')
  request.r(i1701[18], i1701[19], 0, i1700, '_cardDragon2')
  request.r(i1701[20], i1701[21], 0, i1700, '_cardDragon3')
  request.r(i1701[22], i1701[23], 0, i1700, '_particleSystem1')
  request.r(i1701[24], i1701[25], 0, i1700, '_particleSystem2')
  request.r(i1701[26], i1701[27], 0, i1700, '_particleSystem3')
  request.r(i1701[28], i1701[29], 0, i1700, '_particleSystem4')
  request.r(i1701[30], i1701[31], 0, i1700, '_particleSystem5')
  request.r(i1701[32], i1701[33], 0, i1700, '_particleSystem6')
  request.r(i1701[34], i1701[35], 0, i1700, '_winVictoty')
  request.r(i1701[36], i1701[37], 0, i1700, '_winFinal')
  request.r(i1701[38], i1701[39], 0, i1700, '_particleSystem')
  request.r(i1701[40], i1701[41], 0, i1700, '_particleDragon')
  request.r(i1701[42], i1701[43], 0, i1700, '_episode3')
  return i1700
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i1702 = root || request.c( 'Episode4_2' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, '_battle')
  request.r(i1703[2], i1703[3], 0, i1702, '_button')
  request.r(i1703[4], i1703[5], 0, i1702, '_cardEnemye1')
  request.r(i1703[6], i1703[7], 0, i1702, '_cardEnemye2')
  request.r(i1703[8], i1703[9], 0, i1702, '_cardEnemye3')
  request.r(i1703[10], i1703[11], 0, i1702, '_cardDracone1')
  request.r(i1703[12], i1703[13], 0, i1702, '_cardDracone2')
  request.r(i1703[14], i1703[15], 0, i1702, '_cardDracone3')
  request.r(i1703[16], i1703[17], 0, i1702, '_winDefeat')
  request.r(i1703[18], i1703[19], 0, i1702, '_winFinal')
  request.r(i1703[20], i1703[21], 0, i1702, '_particleSystem1')
  request.r(i1703[22], i1703[23], 0, i1702, '_particleSystem2')
  request.r(i1703[24], i1703[25], 0, i1702, '_particleSystem3')
  request.r(i1703[26], i1703[27], 0, i1702, '_particleSystem4')
  request.r(i1703[28], i1703[29], 0, i1702, '_particleSystem5')
  request.r(i1703[30], i1703[31], 0, i1702, '_particleSystem6')
  request.r(i1703[32], i1703[33], 0, i1702, '_particleSystem7')
  request.r(i1703[34], i1703[35], 0, i1702, '_particleButtun')
  request.r(i1703[36], i1703[37], 0, i1702, '_particleDragon')
  request.r(i1703[38], i1703[39], 0, i1702, '_layer')
  request.r(i1703[40], i1703[41], 0, i1702, '_winInscription')
  request.r(i1703[42], i1703[43], 0, i1702, '_winInscription2')
  request.r(i1703[44], i1703[45], 0, i1702, '_winInscription3')
  return i1702
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i1704 = root || request.c( 'Episode5_2' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, '_battle')
  request.r(i1705[2], i1705[3], 0, i1704, '_button')
  request.r(i1705[4], i1705[5], 0, i1704, '_cardEnemye1')
  request.r(i1705[6], i1705[7], 0, i1704, '_cardEnemye2')
  request.r(i1705[8], i1705[9], 0, i1704, '_cardEnemye3')
  request.r(i1705[10], i1705[11], 0, i1704, '_cardDracone1')
  request.r(i1705[12], i1705[13], 0, i1704, '_cardDracone2')
  request.r(i1705[14], i1705[15], 0, i1704, '_cardDracone3')
  request.r(i1705[16], i1705[17], 0, i1704, '_cardDracone4')
  request.r(i1705[18], i1705[19], 0, i1704, '_winDefeat')
  request.r(i1705[20], i1705[21], 0, i1704, '_winFinal')
  request.r(i1705[22], i1705[23], 0, i1704, '_particleSystem1')
  request.r(i1705[24], i1705[25], 0, i1704, '_particleSystem2')
  request.r(i1705[26], i1705[27], 0, i1704, '_particleSystem3')
  request.r(i1705[28], i1705[29], 0, i1704, '_particleSystem4')
  request.r(i1705[30], i1705[31], 0, i1704, '_particleSystem5')
  request.r(i1705[32], i1705[33], 0, i1704, '_particleSystem6')
  request.r(i1705[34], i1705[35], 0, i1704, '_particleSystem7')
  request.r(i1705[36], i1705[37], 0, i1704, '_particleSystem')
  request.r(i1705[38], i1705[39], 0, i1704, '_layer')
  request.r(i1705[40], i1705[41], 0, i1704, '_winInscription')
  request.r(i1705[42], i1705[43], 0, i1704, '_winInscription2')
  request.r(i1705[44], i1705[45], 0, i1704, '_winInscription3')
  return i1704
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i1706 = root || request.c( 'ArmAnimation' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, '_targetButton')
  i1706.flyDuration = i1707[2]
  i1706.shrinkDuration = i1707[3]
  i1706.restoreDuration = i1707[4]
  return i1706
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.Button' )
  var i1709 = data
  i1708.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1709[0], i1708.m_OnClick)
  i1708.m_Navigation = request.d('UnityEngine.UI.Navigation', i1709[1], i1708.m_Navigation)
  i1708.m_Transition = i1709[2]
  i1708.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1709[3], i1708.m_Colors)
  i1708.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1709[4], i1708.m_SpriteState)
  i1708.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1709[5], i1708.m_AnimationTriggers)
  i1708.m_Interactable = !!i1709[6]
  request.r(i1709[7], i1709[8], 0, i1708, 'm_TargetGraphic')
  return i1708
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1711 = data
  i1710.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1711[0], i1710.m_PersistentCalls)
  return i1710
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1713 = data
  var i1715 = i1713[0]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.add(request.d('UnityEngine.Events.PersistentCall', i1715[i + 0]));
  }
  i1712.m_Calls = i1714
  return i1712
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'm_Target')
  i1718.m_TargetAssemblyTypeName = i1719[2]
  i1718.m_MethodName = i1719[3]
  i1718.m_Mode = i1719[4]
  i1718.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1719[5], i1718.m_Arguments)
  i1718.m_CallState = i1719[6]
  return i1718
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'm_ObjectArgument')
  i1720.m_ObjectArgumentAssemblyTypeName = i1721[2]
  i1720.m_IntArgument = i1721[3]
  i1720.m_FloatArgument = i1721[4]
  i1720.m_StringArgument = i1721[5]
  i1720.m_BoolArgument = !!i1721[6]
  return i1720
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1723 = data
  i1722.m_Mode = i1723[0]
  i1722.m_WrapAround = !!i1723[1]
  request.r(i1723[2], i1723[3], 0, i1722, 'm_SelectOnUp')
  request.r(i1723[4], i1723[5], 0, i1722, 'm_SelectOnDown')
  request.r(i1723[6], i1723[7], 0, i1722, 'm_SelectOnLeft')
  request.r(i1723[8], i1723[9], 0, i1722, 'm_SelectOnRight')
  return i1722
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1725 = data
  i1724.m_NormalColor = new pc.Color(i1725[0], i1725[1], i1725[2], i1725[3])
  i1724.m_HighlightedColor = new pc.Color(i1725[4], i1725[5], i1725[6], i1725[7])
  i1724.m_PressedColor = new pc.Color(i1725[8], i1725[9], i1725[10], i1725[11])
  i1724.m_SelectedColor = new pc.Color(i1725[12], i1725[13], i1725[14], i1725[15])
  i1724.m_DisabledColor = new pc.Color(i1725[16], i1725[17], i1725[18], i1725[19])
  i1724.m_ColorMultiplier = i1725[20]
  i1724.m_FadeDuration = i1725[21]
  return i1724
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'm_HighlightedSprite')
  request.r(i1727[2], i1727[3], 0, i1726, 'm_PressedSprite')
  request.r(i1727[4], i1727[5], 0, i1726, 'm_SelectedSprite')
  request.r(i1727[6], i1727[7], 0, i1726, 'm_DisabledSprite')
  return i1726
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1729 = data
  i1728.m_NormalTrigger = i1729[0]
  i1728.m_HighlightedTrigger = i1729[1]
  i1728.m_PressedTrigger = i1729[2]
  i1728.m_SelectedTrigger = i1729[3]
  i1728.m_DisabledTrigger = i1729[4]
  return i1728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_FirstSelected')
  i1730.m_sendNavigationEvents = !!i1731[2]
  i1730.m_DragThreshold = i1731[3]
  return i1730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1733 = data
  i1732.m_HorizontalAxis = i1733[0]
  i1732.m_VerticalAxis = i1733[1]
  i1732.m_SubmitButton = i1733[2]
  i1732.m_CancelButton = i1733[3]
  i1732.m_InputActionsPerSecond = i1733[4]
  i1732.m_RepeatDelay = i1733[5]
  i1732.m_ForceModuleActive = !!i1733[6]
  i1732.m_SendPointerHoverToParent = !!i1733[7]
  return i1732
}

Deserializers["Scenario"] = function (request, data, root) {
  var i1734 = root || request.c( 'Scenario' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, '_episode1')
  request.r(i1735[2], i1735[3], 0, i1734, '_episode2')
  request.r(i1735[4], i1735[5], 0, i1734, '_episode3')
  request.r(i1735[6], i1735[7], 0, i1734, '_episode4')
  request.r(i1735[8], i1735[9], 0, i1734, '_episode4_1')
  request.r(i1735[10], i1735[11], 0, i1734, '_episode4_2')
  request.r(i1735[12], i1735[13], 0, i1734, '_episode5')
  request.r(i1735[14], i1735[15], 0, i1734, '_episode5_1')
  request.r(i1735[16], i1735[17], 0, i1734, '_episode6')
  request.r(i1735[18], i1735[19], 0, i1734, '_episode7')
  request.r(i1735[20], i1735[21], 0, i1734, '_card1__1')
  request.r(i1735[22], i1735[23], 0, i1734, '_card1__2')
  request.r(i1735[24], i1735[25], 0, i1734, '_card1__3')
  request.r(i1735[26], i1735[27], 0, i1734, '_coinsText')
  return i1734
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i1736 = root || request.c( 'Episode5_1' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, '_card1')
  request.r(i1737[2], i1737[3], 0, i1736, '_card2')
  request.r(i1737[4], i1737[5], 0, i1736, '_episode5')
  request.r(i1737[6], i1737[7], 0, i1736, 'episode4_1')
  request.r(i1737[8], i1737[9], 0, i1736, 'episode5_2')
  request.r(i1737[10], i1737[11], 0, i1736, '_texCoins')
  request.r(i1737[12], i1737[13], 0, i1736, '_particleSystem')
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1739 = data
  i1738.ambientIntensity = i1739[0]
  i1738.reflectionIntensity = i1739[1]
  i1738.ambientMode = i1739[2]
  i1738.ambientLight = new pc.Color(i1739[3], i1739[4], i1739[5], i1739[6])
  i1738.ambientSkyColor = new pc.Color(i1739[7], i1739[8], i1739[9], i1739[10])
  i1738.ambientGroundColor = new pc.Color(i1739[11], i1739[12], i1739[13], i1739[14])
  i1738.ambientEquatorColor = new pc.Color(i1739[15], i1739[16], i1739[17], i1739[18])
  i1738.fogColor = new pc.Color(i1739[19], i1739[20], i1739[21], i1739[22])
  i1738.fogEndDistance = i1739[23]
  i1738.fogStartDistance = i1739[24]
  i1738.fogDensity = i1739[25]
  i1738.fog = !!i1739[26]
  request.r(i1739[27], i1739[28], 0, i1738, 'skybox')
  i1738.fogMode = i1739[29]
  var i1741 = i1739[30]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1741[i + 0]) );
  }
  i1738.lightmaps = i1740
  i1738.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1739[31], i1738.lightProbes)
  i1738.lightmapsMode = i1739[32]
  i1738.mixedBakeMode = i1739[33]
  i1738.environmentLightingMode = i1739[34]
  i1738.ambientProbe = new pc.SphericalHarmonicsL2(i1739[35])
  i1738.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1739[36])
  i1738.useReferenceAmbientProbe = !!i1739[37]
  request.r(i1739[38], i1739[39], 0, i1738, 'customReflection')
  request.r(i1739[40], i1739[41], 0, i1738, 'defaultReflection')
  i1738.defaultReflectionMode = i1739[42]
  i1738.defaultReflectionResolution = i1739[43]
  i1738.sunLightObjectId = i1739[44]
  i1738.pixelLightCount = i1739[45]
  i1738.defaultReflectionHDR = !!i1739[46]
  i1738.hasLightDataAsset = !!i1739[47]
  i1738.hasManualGenerate = !!i1739[48]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'lightmapColor')
  request.r(i1745[2], i1745[3], 0, i1744, 'lightmapDirection')
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1746 = root || new UnityEngine.LightProbes()
  var i1747 = data
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1753 = data
  i1752.enabled = !!i1753[0]
  i1752.type = i1753[1]
  i1752.color = new pc.Color(i1753[2], i1753[3], i1753[4], i1753[5])
  i1752.cullingMask = i1753[6]
  i1752.intensity = i1753[7]
  i1752.range = i1753[8]
  i1752.spotAngle = i1753[9]
  i1752.shadows = i1753[10]
  i1752.shadowNormalBias = i1753[11]
  i1752.shadowBias = i1753[12]
  i1752.shadowStrength = i1753[13]
  i1752.shadowResolution = i1753[14]
  i1752.lightmapBakeType = i1753[15]
  i1752.renderMode = i1753[16]
  request.r(i1753[17], i1753[18], 0, i1752, 'cookie')
  i1752.cookieSize = i1753[19]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1755 = data
  i1754.AdditionalLightsPerObjectLimit = i1755[0]
  i1754.AdditionalLightsRenderingMode = i1755[1]
  i1754.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1755[2], i1754.LightRenderingMode)
  i1754.ColorGradingLutSize = i1755[3]
  i1754.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1755[4], i1754.ColorGradingMode)
  i1754.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1755[5], i1754.MainLightRenderingMode)
  i1754.MainLightRenderingModeValue = i1755[6]
  i1754.MainLightShadowsSupported = !!i1755[7]
  i1754.MixedLightingSupported = !!i1755[8]
  i1754.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1755[9], i1754.MsaaQuality)
  i1754.MSAA = i1755[10]
  i1754.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1755[11], i1754.OpaqueDownsampling)
  i1754.RenderScale = i1755[12]
  i1754.RequireDepthTexture = !!i1755[13]
  i1754.RequireOpaqueTexture = !!i1755[14]
  i1754.ShadowAtlasResolution = i1755[15]
  i1754.ShadowDepthBias = i1755[16]
  i1754.SupportsHDR = !!i1755[17]
  i1754.SupportsTerrainHoles = !!i1755[18]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1757 = data
  i1756.Disabled = i1757[0]
  i1756.PerVertex = i1757[1]
  i1756.PerPixel = i1757[2]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1759 = data
  i1758.LowDynamicRange = i1759[0]
  i1758.HighDynamicRange = i1759[1]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1761 = data
  i1760.Disabled = i1761[0]
  i1760._2x = i1761[1]
  i1760._4x = i1761[2]
  i1760._8x = i1761[3]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1763 = data
  i1762.None = i1763[0]
  i1762._2xBilinear = i1763[1]
  i1762._4xBox = i1763[2]
  i1762._4xBilinear = i1763[3]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1765 = data
  var i1767 = i1765[0]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1767[i + 0]));
  }
  i1764.ShaderCompilationErrors = i1766
  i1764.name = i1765[1]
  i1764.guid = i1765[2]
  var i1769 = i1765[3]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( i1769[i + 0] );
  }
  i1764.shaderDefinedKeywords = i1768
  var i1771 = i1765[4]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1771[i + 0]) );
  }
  i1764.passes = i1770
  var i1773 = i1765[5]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1773[i + 0]) );
  }
  i1764.usePasses = i1772
  var i1775 = i1765[6]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1775[i + 0]) );
  }
  i1764.defaultParameterValues = i1774
  request.r(i1765[7], i1765[8], 0, i1764, 'unityFallbackShader')
  i1764.readDepth = !!i1765[9]
  i1764.isCreatedByShaderGraph = !!i1765[10]
  i1764.compiled = !!i1765[11]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1779 = data
  i1778.shaderName = i1779[0]
  i1778.errorMessage = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1784 = root || new pc.UnityShaderPass()
  var i1785 = data
  i1784.id = i1785[0]
  i1784.subShaderIndex = i1785[1]
  i1784.name = i1785[2]
  i1784.passType = i1785[3]
  i1784.grabPassTextureName = i1785[4]
  i1784.usePass = !!i1785[5]
  i1784.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[6], i1784.zTest)
  i1784.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[7], i1784.zWrite)
  i1784.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[8], i1784.culling)
  i1784.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1785[9], i1784.blending)
  i1784.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1785[10], i1784.alphaBlending)
  i1784.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[11], i1784.colorWriteMask)
  i1784.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[12], i1784.offsetUnits)
  i1784.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[13], i1784.offsetFactor)
  i1784.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[14], i1784.stencilRef)
  i1784.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[15], i1784.stencilReadMask)
  i1784.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1785[16], i1784.stencilWriteMask)
  i1784.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1785[17], i1784.stencilOp)
  i1784.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1785[18], i1784.stencilOpFront)
  i1784.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1785[19], i1784.stencilOpBack)
  var i1787 = i1785[20]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1787[i + 0]) );
  }
  i1784.tags = i1786
  var i1789 = i1785[21]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( i1789[i + 0] );
  }
  i1784.passDefinedKeywords = i1788
  var i1791 = i1785[22]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1791[i + 0]) );
  }
  i1784.passDefinedKeywordGroups = i1790
  var i1793 = i1785[23]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1793[i + 0]) );
  }
  i1784.variants = i1792
  var i1795 = i1785[24]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1795[i + 0]) );
  }
  i1784.excludedVariants = i1794
  i1784.hasDepthReader = !!i1785[25]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1797 = data
  i1796.val = i1797[0]
  i1796.name = i1797[1]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1799 = data
  i1798.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[0], i1798.src)
  i1798.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[1], i1798.dst)
  i1798.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[2], i1798.op)
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1801 = data
  i1800.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[0], i1800.pass)
  i1800.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[1], i1800.fail)
  i1800.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[2], i1800.zFail)
  i1800.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[3], i1800.comp)
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1805 = data
  i1804.name = i1805[0]
  i1804.value = i1805[1]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( i1811[i + 0] );
  }
  i1808.keywords = i1810
  i1808.hasDiscard = !!i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1815 = data
  i1814.passId = i1815[0]
  i1814.subShaderIndex = i1815[1]
  var i1817 = i1815[2]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( i1817[i + 0] );
  }
  i1814.keywords = i1816
  i1814.vertexProgram = i1815[3]
  i1814.fragmentProgram = i1815[4]
  i1814.exportedForWebGl2 = !!i1815[5]
  i1814.readDepth = !!i1815[6]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, 'shader')
  i1820.pass = i1821[2]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1825 = data
  i1824.name = i1825[0]
  i1824.type = i1825[1]
  i1824.value = new pc.Vec4( i1825[2], i1825[3], i1825[4], i1825[5] )
  i1824.textureValue = i1825[6]
  i1824.shaderPropertyFlag = i1825[7]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1827 = data
  i1826.name = i1827[0]
  request.r(i1827[1], i1827[2], 0, i1826, 'texture')
  i1826.aabb = i1827[3]
  i1826.vertices = i1827[4]
  i1826.triangles = i1827[5]
  i1826.textureRect = UnityEngine.Rect.MinMaxRect(i1827[6], i1827[7], i1827[8], i1827[9])
  i1826.packedRect = UnityEngine.Rect.MinMaxRect(i1827[10], i1827[11], i1827[12], i1827[13])
  i1826.border = new pc.Vec4( i1827[14], i1827[15], i1827[16], i1827[17] )
  i1826.transparency = i1827[18]
  i1826.bounds = i1827[19]
  i1826.pixelsPerUnit = i1827[20]
  i1826.textureWidth = i1827[21]
  i1826.textureHeight = i1827[22]
  i1826.nativeSize = new pc.Vec2( i1827[23], i1827[24] )
  i1826.pivot = new pc.Vec2( i1827[25], i1827[26] )
  i1826.textureRectOffset = new pc.Vec2( i1827[27], i1827[28] )
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1829 = data
  i1828.name = i1829[0]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.wrapMode = i1831[1]
  i1830.isLooping = !!i1831[2]
  i1830.length = i1831[3]
  var i1833 = i1831[4]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1833[i + 0]) );
  }
  i1830.curves = i1832
  var i1835 = i1831[5]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1835[i + 0]) );
  }
  i1830.events = i1834
  i1830.halfPrecision = !!i1831[6]
  i1830._frameRate = i1831[7]
  i1830.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1831[8], i1830.localBounds)
  i1830.hasMuscleCurves = !!i1831[9]
  var i1837 = i1831[10]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( i1837[i + 0] );
  }
  i1830.clipMuscleConstant = i1836
  i1830.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1831[11], i1830.clipBindingConstant)
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1841 = data
  i1840.path = i1841[0]
  i1840.hash = i1841[1]
  i1840.componentType = i1841[2]
  i1840.property = i1841[3]
  i1840.keys = i1841[4]
  var i1843 = i1841[5]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1843[i + 0]) );
  }
  i1840.objectReferenceKeys = i1842
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1847 = data
  i1846.time = i1847[0]
  request.r(i1847[1], i1847[2], 0, i1846, 'value')
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1851 = data
  i1850.functionName = i1851[0]
  i1850.floatParameter = i1851[1]
  i1850.intParameter = i1851[2]
  i1850.stringParameter = i1851[3]
  request.r(i1851[4], i1851[5], 0, i1850, 'objectReferenceParameter')
  i1850.time = i1851[6]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1853 = data
  i1852.center = new pc.Vec3( i1853[0], i1853[1], i1853[2] )
  i1852.extends = new pc.Vec3( i1853[3], i1853[4], i1853[5] )
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1857 = data
  var i1859 = i1857[0]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1856.genericBindings = i1858
  var i1861 = i1857[1]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( i1861[i + 0] );
  }
  i1856.pptrCurveMapping = i1860
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.ascent = i1863[1]
  i1862.originalLineHeight = i1863[2]
  i1862.fontSize = i1863[3]
  var i1865 = i1863[4]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1865[i + 0]) );
  }
  i1862.characterInfo = i1864
  request.r(i1863[5], i1863[6], 0, i1862, 'texture')
  i1862.originalFontSize = i1863[7]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1869 = data
  i1868.index = i1869[0]
  i1868.advance = i1869[1]
  i1868.bearing = i1869[2]
  i1868.glyphWidth = i1869[3]
  i1868.glyphHeight = i1869[4]
  i1868.minX = i1869[5]
  i1868.maxX = i1869[6]
  i1868.minY = i1869[7]
  i1868.maxY = i1869[8]
  i1868.uvBottomLeftX = i1869[9]
  i1868.uvBottomLeftY = i1869[10]
  i1868.uvBottomRightX = i1869[11]
  i1868.uvBottomRightY = i1869[12]
  i1868.uvTopLeftX = i1869[13]
  i1868.uvTopLeftY = i1869[14]
  i1868.uvTopRightX = i1869[15]
  i1868.uvTopRightY = i1869[16]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1871 = data
  i1870.name = i1871[0]
  var i1873 = i1871[1]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1873[i + 0]) );
  }
  i1870.layers = i1872
  var i1875 = i1871[2]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1875[i + 0]) );
  }
  i1870.parameters = i1874
  i1870.animationClips = i1871[3]
  i1870.avatarUnsupported = i1871[4]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1879 = data
  i1878.name = i1879[0]
  i1878.defaultWeight = i1879[1]
  i1878.blendingMode = i1879[2]
  i1878.avatarMask = i1879[3]
  i1878.syncedLayerIndex = i1879[4]
  i1878.syncedLayerAffectsTiming = !!i1879[5]
  i1878.syncedLayers = i1879[6]
  i1878.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1879[7], i1878.stateMachine)
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1881 = data
  i1880.id = i1881[0]
  i1880.name = i1881[1]
  i1880.path = i1881[2]
  var i1883 = i1881[3]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1883[i + 0]) );
  }
  i1880.states = i1882
  var i1885 = i1881[4]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1885[i + 0]) );
  }
  i1880.machines = i1884
  var i1887 = i1881[5]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1887[i + 0]) );
  }
  i1880.entryStateTransitions = i1886
  var i1889 = i1881[6]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1889[i + 0]) );
  }
  i1880.exitStateTransitions = i1888
  var i1891 = i1881[7]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1891[i + 0]) );
  }
  i1880.anyStateTransitions = i1890
  i1880.defaultStateId = i1881[8]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1895 = data
  i1894.id = i1895[0]
  i1894.name = i1895[1]
  i1894.cycleOffset = i1895[2]
  i1894.cycleOffsetParameter = i1895[3]
  i1894.cycleOffsetParameterActive = !!i1895[4]
  i1894.mirror = !!i1895[5]
  i1894.mirrorParameter = i1895[6]
  i1894.mirrorParameterActive = !!i1895[7]
  i1894.motionId = i1895[8]
  i1894.nameHash = i1895[9]
  i1894.fullPathHash = i1895[10]
  i1894.speed = i1895[11]
  i1894.speedParameter = i1895[12]
  i1894.speedParameterActive = !!i1895[13]
  i1894.tag = i1895[14]
  i1894.tagHash = i1895[15]
  i1894.writeDefaultValues = !!i1895[16]
  var i1897 = i1895[17]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1894.behaviours = i1896
  var i1899 = i1895[18]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1899[i + 0]) );
  }
  i1894.transitions = i1898
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1905 = data
  i1904.fullPath = i1905[0]
  i1904.canTransitionToSelf = !!i1905[1]
  i1904.duration = i1905[2]
  i1904.exitTime = i1905[3]
  i1904.hasExitTime = !!i1905[4]
  i1904.hasFixedDuration = !!i1905[5]
  i1904.interruptionSource = i1905[6]
  i1904.offset = i1905[7]
  i1904.orderedInterruption = !!i1905[8]
  i1904.destinationStateId = i1905[9]
  i1904.isExit = !!i1905[10]
  i1904.mute = !!i1905[11]
  i1904.solo = !!i1905[12]
  var i1907 = i1905[13]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1907[i + 0]) );
  }
  i1904.conditions = i1906
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1913 = data
  i1912.destinationStateId = i1913[0]
  i1912.isExit = !!i1913[1]
  i1912.mute = !!i1913[2]
  i1912.solo = !!i1913[3]
  var i1915 = i1913[4]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1915[i + 0]) );
  }
  i1912.conditions = i1914
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1919 = data
  i1918.defaultBool = !!i1919[0]
  i1918.defaultFloat = i1919[1]
  i1918.defaultInt = i1919[2]
  i1918.name = i1919[3]
  i1918.nameHash = i1919[4]
  i1918.type = i1919[5]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1923[i + 0]) );
  }
  i1920.files = i1922
  i1920.componentToPrefabIds = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1927 = data
  i1926.path = i1927[0]
  request.r(i1927[1], i1927[2], 0, i1926, 'unityObject')
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1929 = data
  var i1931 = i1929[0]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1931[i + 0]) );
  }
  i1928.scriptsExecutionOrder = i1930
  var i1933 = i1929[1]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1933[i + 0]) );
  }
  i1928.sortingLayers = i1932
  var i1935 = i1929[2]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1935[i + 0]) );
  }
  i1928.cullingLayers = i1934
  i1928.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1929[3], i1928.timeSettings)
  i1928.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1929[4], i1928.physicsSettings)
  i1928.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1929[5], i1928.physics2DSettings)
  i1928.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1929[6], i1928.qualitySettings)
  i1928.enableRealtimeShadows = !!i1929[7]
  i1928.enableAutoInstancing = !!i1929[8]
  i1928.enableDynamicBatching = !!i1929[9]
  i1928.lightmapEncodingQuality = i1929[10]
  i1928.desiredColorSpace = i1929[11]
  var i1937 = i1929[12]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( i1937[i + 0] );
  }
  i1928.allTags = i1936
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.value = i1941[1]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1945 = data
  i1944.id = i1945[0]
  i1944.name = i1945[1]
  i1944.value = i1945[2]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1949 = data
  i1948.id = i1949[0]
  i1948.name = i1949[1]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1951 = data
  i1950.fixedDeltaTime = i1951[0]
  i1950.maximumDeltaTime = i1951[1]
  i1950.timeScale = i1951[2]
  i1950.maximumParticleTimestep = i1951[3]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1953 = data
  i1952.gravity = new pc.Vec3( i1953[0], i1953[1], i1953[2] )
  i1952.defaultSolverIterations = i1953[3]
  i1952.bounceThreshold = i1953[4]
  i1952.autoSyncTransforms = !!i1953[5]
  i1952.autoSimulation = !!i1953[6]
  var i1955 = i1953[7]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1955[i + 0]) );
  }
  i1952.collisionMatrix = i1954
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1959 = data
  i1958.enabled = !!i1959[0]
  i1958.layerId = i1959[1]
  i1958.otherLayerId = i1959[2]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'material')
  i1960.gravity = new pc.Vec2( i1961[2], i1961[3] )
  i1960.positionIterations = i1961[4]
  i1960.velocityIterations = i1961[5]
  i1960.velocityThreshold = i1961[6]
  i1960.maxLinearCorrection = i1961[7]
  i1960.maxAngularCorrection = i1961[8]
  i1960.maxTranslationSpeed = i1961[9]
  i1960.maxRotationSpeed = i1961[10]
  i1960.baumgarteScale = i1961[11]
  i1960.baumgarteTOIScale = i1961[12]
  i1960.timeToSleep = i1961[13]
  i1960.linearSleepTolerance = i1961[14]
  i1960.angularSleepTolerance = i1961[15]
  i1960.defaultContactOffset = i1961[16]
  i1960.autoSimulation = !!i1961[17]
  i1960.queriesHitTriggers = !!i1961[18]
  i1960.queriesStartInColliders = !!i1961[19]
  i1960.callbacksOnDisable = !!i1961[20]
  i1960.reuseCollisionCallbacks = !!i1961[21]
  i1960.autoSyncTransforms = !!i1961[22]
  var i1963 = i1961[23]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1963[i + 0]) );
  }
  i1960.collisionMatrix = i1962
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.layerId = i1967[1]
  i1966.otherLayerId = i1967[2]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1971[i + 0]) );
  }
  i1968.qualityLevels = i1970
  var i1973 = i1969[1]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1968.names = i1972
  i1968.shadows = i1969[2]
  i1968.anisotropicFiltering = i1969[3]
  i1968.antiAliasing = i1969[4]
  i1968.lodBias = i1969[5]
  i1968.shadowCascades = i1969[6]
  i1968.shadowDistance = i1969[7]
  i1968.shadowmaskMode = i1969[8]
  i1968.shadowProjection = i1969[9]
  i1968.shadowResolution = i1969[10]
  i1968.softParticles = !!i1969[11]
  i1968.softVegetation = !!i1969[12]
  i1968.activeColorSpace = i1969[13]
  i1968.desiredColorSpace = i1969[14]
  i1968.masterTextureLimit = i1969[15]
  i1968.maxQueuedFrames = i1969[16]
  i1968.particleRaycastBudget = i1969[17]
  i1968.pixelLightCount = i1969[18]
  i1968.realtimeReflectionProbes = !!i1969[19]
  i1968.shadowCascade2Split = i1969[20]
  i1968.shadowCascade4Split = new pc.Vec3( i1969[21], i1969[22], i1969[23] )
  i1968.streamingMipmapsActive = !!i1969[24]
  i1968.vSyncCount = i1969[25]
  i1968.asyncUploadBufferSize = i1969[26]
  i1968.asyncUploadTimeSlice = i1969[27]
  i1968.billboardsFaceCameraPosition = !!i1969[28]
  i1968.shadowNearPlaneOffset = i1969[29]
  i1968.streamingMipmapsMemoryBudget = i1969[30]
  i1968.maximumLODLevel = i1969[31]
  i1968.streamingMipmapsAddAllCameras = !!i1969[32]
  i1968.streamingMipmapsMaxLevelReduction = i1969[33]
  i1968.streamingMipmapsRenderersPerFrame = i1969[34]
  i1968.resolutionScalingFixedDPIFactor = i1969[35]
  i1968.streamingMipmapsMaxFileIORequests = i1969[36]
  i1968.currentQualityLevel = i1969[37]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1979 = data
  i1978.weight = i1979[0]
  i1978.vertices = i1979[1]
  i1978.normals = i1979[2]
  i1978.tangents = i1979[3]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1983 = data
  i1982.mode = i1983[0]
  i1982.parameter = i1983[1]
  i1982.threshold = i1983[2]
  return i1982
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[15],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[15],"80":[81],"82":[83],"84":[83],"20":[9],"85":[9],"86":[87],"88":[89],"90":[15],"91":[15],"18":[15],"92":[46],"93":[87],"94":[95],"96":[9],"97":[9],"22":[20],"12":[10,9],"98":[9],"21":[20],"99":[9],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[9],"107":[9],"108":[10,9],"109":[9],"110":[9],"111":[9],"112":[9],"24":[10,9],"113":[9],"114":[42],"115":[42],"43":[42],"116":[42],"117":[15],"118":[15],"119":[87]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ClickCta","UnityEngine.UI.Text","UnityEngine.Font","Episode5","UnityEngine.GameObject","Episode4_1","Episode1","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Card","Episode4","Episode2","Episode6","Episode3","Episode7","Episode4_2","Episode5_2","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "12.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1581";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3086";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CardsDragons";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8f5abf78-15a6-4c8f-a339-4e4687bd0c96";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

