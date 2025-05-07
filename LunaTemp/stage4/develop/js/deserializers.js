var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointSpring' )
  var i499 = data
  i498.spring = i499[0]
  i498.damper = i499[1]
  i498.targetPosition = i499[2]
  return i498
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor' )
  var i501 = data
  i500.m_TargetVelocity = i501[0]
  i500.m_Force = i501[1]
  i500.m_FreeSpin = i501[2]
  return i500
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointLimits' )
  var i503 = data
  i502.m_Min = i503[0]
  i502.m_Max = i503[1]
  i502.m_Bounciness = i503[2]
  i502.m_BounceMinVelocity = i503[3]
  i502.m_ContactDistance = i503[4]
  i502.minBounce = i503[5]
  i502.maxBounce = i503[6]
  return i502
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointDrive' )
  var i505 = data
  i504.m_PositionSpring = i505[0]
  i504.m_PositionDamper = i505[1]
  i504.m_MaximumForce = i505[2]
  i504.m_UseAcceleration = i505[3]
  return i504
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i507 = data
  i506.m_Spring = i507[0]
  i506.m_Damper = i507[1]
  return i506
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i509 = data
  i508.m_Limit = i509[0]
  i508.m_Bounciness = i509[1]
  i508.m_ContactDistance = i509[2]
  return i508
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i511 = data
  i510.m_ExtremumSlip = i511[0]
  i510.m_ExtremumValue = i511[1]
  i510.m_AsymptoteSlip = i511[2]
  i510.m_AsymptoteValue = i511[3]
  i510.m_Stiffness = i511[4]
  return i510
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i513 = data
  i512.m_LowerAngle = i513[0]
  i512.m_UpperAngle = i513[1]
  return i512
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i515 = data
  i514.m_MotorSpeed = i515[0]
  i514.m_MaximumMotorTorque = i515[1]
  return i514
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i517 = data
  i516.m_DampingRatio = i517[0]
  i516.m_Frequency = i517[1]
  i516.m_Angle = i517[2]
  return i516
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i519 = data
  i518.m_LowerTranslation = i519[0]
  i518.m_UpperTranslation = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i521 = data
  i520.name = i521[0]
  i520.width = i521[1]
  i520.height = i521[2]
  i520.mipmapCount = i521[3]
  i520.anisoLevel = i521[4]
  i520.filterMode = i521[5]
  i520.hdr = !!i521[6]
  i520.format = i521[7]
  i520.wrapMode = i521[8]
  i520.alphaIsTransparency = !!i521[9]
  i520.alphaSource = i521[10]
  i520.graphicsFormat = i521[11]
  i520.sRGBTexture = !!i521[12]
  i520.desiredColorSpace = i521[13]
  i520.wrapU = i521[14]
  i520.wrapV = i521[15]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i523 = data
  i522.position = new pc.Vec3( i523[0], i523[1], i523[2] )
  i522.scale = new pc.Vec3( i523[3], i523[4], i523[5] )
  i522.rotation = new pc.Quat(i523[6], i523[7], i523[8], i523[9])
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i525 = data
  i524.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i525[0], i524.main)
  i524.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i525[1], i524.colorBySpeed)
  i524.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i525[2], i524.colorOverLifetime)
  i524.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i525[3], i524.emission)
  i524.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i525[4], i524.rotationBySpeed)
  i524.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i525[5], i524.rotationOverLifetime)
  i524.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i525[6], i524.shape)
  i524.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i525[7], i524.sizeBySpeed)
  i524.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i525[8], i524.sizeOverLifetime)
  i524.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i525[9], i524.textureSheetAnimation)
  i524.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i525[10], i524.velocityOverLifetime)
  i524.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i525[11], i524.noise)
  i524.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i525[12], i524.inheritVelocity)
  i524.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i525[13], i524.forceOverLifetime)
  i524.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i525[14], i524.limitVelocityOverLifetime)
  i524.useAutoRandomSeed = !!i525[15]
  i524.randomSeed = i525[16]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemMain()
  var i527 = data
  i526.duration = i527[0]
  i526.loop = !!i527[1]
  i526.prewarm = !!i527[2]
  i526.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[3], i526.startDelay)
  i526.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[4], i526.startLifetime)
  i526.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[5], i526.startSpeed)
  i526.startSize3D = !!i527[6]
  i526.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[7], i526.startSizeX)
  i526.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[8], i526.startSizeY)
  i526.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[9], i526.startSizeZ)
  i526.startRotation3D = !!i527[10]
  i526.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[11], i526.startRotationX)
  i526.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[12], i526.startRotationY)
  i526.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[13], i526.startRotationZ)
  i526.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i527[14], i526.startColor)
  i526.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[15], i526.gravityModifier)
  i526.simulationSpace = i527[16]
  request.r(i527[17], i527[18], 0, i526, 'customSimulationSpace')
  i526.simulationSpeed = i527[19]
  i526.useUnscaledTime = !!i527[20]
  i526.scalingMode = i527[21]
  i526.playOnAwake = !!i527[22]
  i526.maxParticles = i527[23]
  i526.emitterVelocityMode = i527[24]
  i526.stopAction = i527[25]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i528 = root || new pc.MinMaxCurve()
  var i529 = data
  i528.mode = i529[0]
  i528.curveMin = new pc.AnimationCurve( { keys_flow: i529[1] } )
  i528.curveMax = new pc.AnimationCurve( { keys_flow: i529[2] } )
  i528.curveMultiplier = i529[3]
  i528.constantMin = i529[4]
  i528.constantMax = i529[5]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i530 = root || new pc.MinMaxGradient()
  var i531 = data
  i530.mode = i531[0]
  i530.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i531[1], i530.gradientMin)
  i530.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i531[2], i530.gradientMax)
  i530.colorMin = new pc.Color(i531[3], i531[4], i531[5], i531[6])
  i530.colorMax = new pc.Color(i531[7], i531[8], i531[9], i531[10])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i533 = data
  i532.mode = i533[0]
  var i535 = i533[1]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i535[i + 0]) );
  }
  i532.colorKeys = i534
  var i537 = i533[2]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i537[i + 0]) );
  }
  i532.alphaKeys = i536
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemColorBySpeed()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i539[1], i538.color)
  i538.range = new pc.Vec2( i539[2], i539[3] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i543 = data
  i542.color = new pc.Color(i543[0], i543[1], i543[2], i543[3])
  i542.time = i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i547 = data
  i546.alpha = i547[0]
  i546.time = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemColorOverLifetime()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i549[1], i548.color)
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemEmitter()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[1], i550.rateOverTime)
  i550.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[2], i550.rateOverDistance)
  var i553 = i551[3]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i553[i + 0]) );
  }
  i550.bursts = i552
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemBurst()
  var i557 = data
  i556.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[0], i556.count)
  i556.cycleCount = i557[1]
  i556.minCount = i557[2]
  i556.maxCount = i557[3]
  i556.repeatInterval = i557[4]
  i556.time = i557[5]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemRotationBySpeed()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  i558.range = new pc.Vec2( i559[5], i559[6] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemRotationOverLifetime()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemShape()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.shapeType = i563[1]
  i562.randomDirectionAmount = i563[2]
  i562.sphericalDirectionAmount = i563[3]
  i562.randomPositionAmount = i563[4]
  i562.alignToDirection = !!i563[5]
  i562.radius = i563[6]
  i562.radiusMode = i563[7]
  i562.radiusSpread = i563[8]
  i562.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[9], i562.radiusSpeed)
  i562.radiusThickness = i563[10]
  i562.angle = i563[11]
  i562.length = i563[12]
  i562.boxThickness = new pc.Vec3( i563[13], i563[14], i563[15] )
  i562.meshShapeType = i563[16]
  request.r(i563[17], i563[18], 0, i562, 'mesh')
  request.r(i563[19], i563[20], 0, i562, 'meshRenderer')
  request.r(i563[21], i563[22], 0, i562, 'skinnedMeshRenderer')
  i562.useMeshMaterialIndex = !!i563[23]
  i562.meshMaterialIndex = i563[24]
  i562.useMeshColors = !!i563[25]
  i562.normalOffset = i563[26]
  i562.arc = i563[27]
  i562.arcMode = i563[28]
  i562.arcSpread = i563[29]
  i562.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[30], i562.arcSpeed)
  i562.donutRadius = i563[31]
  i562.position = new pc.Vec3( i563[32], i563[33], i563[34] )
  i562.rotation = new pc.Vec3( i563[35], i563[36], i563[37] )
  i562.scale = new pc.Vec3( i563[38], i563[39], i563[40] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemSizeBySpeed()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.separateAxes = !!i565[4]
  i564.range = new pc.Vec2( i565[5], i565[6] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemSizeOverLifetime()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[1], i566.x)
  i566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.y)
  i566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.z)
  i566.separateAxes = !!i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.mode = i569[1]
  i568.animation = i569[2]
  i568.numTilesX = i569[3]
  i568.numTilesY = i569[4]
  i568.useRandomRow = !!i569[5]
  i568.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[6], i568.frameOverTime)
  i568.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[7], i568.startFrame)
  i568.cycleCount = i569[8]
  i568.rowIndex = i569[9]
  i568.flipU = i569[10]
  i568.flipV = i569[11]
  i568.spriteCount = i569[12]
  var i571 = i569[13]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.sprites = i570
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[4], i574.radial)
  i574.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[5], i574.speedModifier)
  i574.space = i575[6]
  i574.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[7], i574.orbitalX)
  i574.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[8], i574.orbitalY)
  i574.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[9], i574.orbitalZ)
  i574.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[10], i574.orbitalOffsetX)
  i574.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[11], i574.orbitalOffsetY)
  i574.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[12], i574.orbitalOffsetZ)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemNoise()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.separateAxes = !!i577[1]
  i576.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.strengthX)
  i576.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.strengthY)
  i576.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[4], i576.strengthZ)
  i576.frequency = i577[5]
  i576.damping = !!i577[6]
  i576.octaveCount = i577[7]
  i576.octaveMultiplier = i577[8]
  i576.octaveScale = i577[9]
  i576.quality = i577[10]
  i576.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[11], i576.scrollSpeed)
  i576.scrollSpeedMultiplier = i577[12]
  i576.remapEnabled = !!i577[13]
  i576.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[14], i576.remapX)
  i576.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[15], i576.remapY)
  i576.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[16], i576.remapZ)
  i576.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[17], i576.positionAmount)
  i576.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[18], i576.rotationAmount)
  i576.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[19], i576.sizeAmount)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemInheritVelocity()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.mode = i579[1]
  i578.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.curve)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemForceOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.space = i581[4]
  i580.randomized = !!i581[5]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.limit)
  i582.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.limitX)
  i582.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.limitY)
  i582.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[4], i582.limitZ)
  i582.dampen = i583[5]
  i582.separateAxes = !!i583[6]
  i582.space = i583[7]
  i582.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[8], i582.drag)
  i582.multiplyDragByParticleSize = !!i583[9]
  i582.multiplyDragByParticleVelocity = !!i583[10]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i585 = data
  i584.enabled = !!i585[0]
  request.r(i585[1], i585[2], 0, i584, 'sharedMaterial')
  var i587 = i585[3]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sharedMaterials = i586
  i584.receiveShadows = !!i585[4]
  i584.shadowCastingMode = i585[5]
  i584.sortingLayerID = i585[6]
  i584.sortingOrder = i585[7]
  i584.lightmapIndex = i585[8]
  i584.lightmapSceneIndex = i585[9]
  i584.lightmapScaleOffset = new pc.Vec4( i585[10], i585[11], i585[12], i585[13] )
  i584.lightProbeUsage = i585[14]
  i584.reflectionProbeUsage = i585[15]
  request.r(i585[16], i585[17], 0, i584, 'mesh')
  i584.meshCount = i585[18]
  i584.activeVertexStreamsCount = i585[19]
  i584.alignment = i585[20]
  i584.renderMode = i585[21]
  i584.sortMode = i585[22]
  i584.lengthScale = i585[23]
  i584.velocityScale = i585[24]
  i584.cameraVelocityScale = i585[25]
  i584.normalDirection = i585[26]
  i584.sortingFudge = i585[27]
  i584.minParticleSize = i585[28]
  i584.maxParticleSize = i585[29]
  i584.pivot = new pc.Vec3( i585[30], i585[31], i585[32] )
  request.r(i585[33], i585[34], 0, i584, 'trailMaterial')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i591 = data
  i590.name = i591[0]
  i590.tagId = i591[1]
  i590.enabled = !!i591[2]
  i590.isStatic = !!i591[3]
  i590.layer = i591[4]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i592 = root || new pc.UnityMaterial()
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'shader')
  i592.renderQueue = i593[3]
  i592.enableInstancing = !!i593[4]
  var i595 = i593[5]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i595[i + 0]) );
  }
  i592.floatParameters = i594
  var i597 = i593[6]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i597[i + 0]) );
  }
  i592.colorParameters = i596
  var i599 = i593[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i599[i + 0]) );
  }
  i592.vectorParameters = i598
  var i601 = i593[8]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i601[i + 0]) );
  }
  i592.textureParameters = i600
  var i603 = i593[9]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i603[i + 0]) );
  }
  i592.materialFlags = i602
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = new pc.Color(i611[1], i611[2], i611[3], i611[4])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Vec4( i615[1], i615[2], i615[3], i615[4] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'value')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i623 = data
  i622.name = i623[0]
  i622.enabled = !!i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i625 = data
  i624.name = i625[0]
  i624.halfPrecision = !!i625[1]
  i624.useUInt32IndexFormat = !!i625[2]
  i624.vertexCount = i625[3]
  i624.aabb = i625[4]
  var i627 = i625[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( !!i627[i + 0] );
  }
  i624.streams = i626
  i624.vertices = i625[6]
  var i629 = i625[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i629[i + 0]) );
  }
  i624.subMeshes = i628
  var i631 = i625[8]
  var i630 = []
  for(var i = 0; i < i631.length; i += 16) {
    i630.push( new pc.Mat4().setData(i631[i + 0], i631[i + 1], i631[i + 2], i631[i + 3],  i631[i + 4], i631[i + 5], i631[i + 6], i631[i + 7],  i631[i + 8], i631[i + 9], i631[i + 10], i631[i + 11],  i631[i + 12], i631[i + 13], i631[i + 14], i631[i + 15]) );
  }
  i624.bindposes = i630
  var i633 = i625[9]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i633[i + 0]) );
  }
  i624.blendShapes = i632
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i639 = data
  i638.triangles = i639[0]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i645 = data
  i644.name = i645[0]
  var i647 = i645[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i647[i + 0]) );
  }
  i644.frames = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'clip')
  request.r(i649[2], i649[3], 0, i648, 'outputAudioMixerGroup')
  i648.playOnAwake = !!i649[4]
  i648.loop = !!i649[5]
  i648.time = i649[6]
  i648.volume = i649[7]
  i648.pitch = i649[8]
  i648.enabled = !!i649[9]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i651 = data
  i650.pivot = new pc.Vec2( i651[0], i651[1] )
  i650.anchorMin = new pc.Vec2( i651[2], i651[3] )
  i650.anchorMax = new pc.Vec2( i651[4], i651[5] )
  i650.sizeDelta = new pc.Vec2( i651[6], i651[7] )
  i650.anchoredPosition3D = new pc.Vec3( i651[8], i651[9], i651[10] )
  i650.rotation = new pc.Quat(i651[11], i651[12], i651[13], i651[14])
  i650.scale = new pc.Vec3( i651[15], i651[16], i651[17] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i653 = data
  i652.cullTransparentMesh = !!i653[0]
  return i652
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.Image' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Sprite')
  i654.m_Type = i655[2]
  i654.m_PreserveAspect = !!i655[3]
  i654.m_FillCenter = !!i655[4]
  i654.m_FillMethod = i655[5]
  i654.m_FillAmount = i655[6]
  i654.m_FillClockwise = !!i655[7]
  i654.m_FillOrigin = i655[8]
  i654.m_UseSpriteMesh = !!i655[9]
  i654.m_PixelsPerUnitMultiplier = i655[10]
  request.r(i655[11], i655[12], 0, i654, 'm_Material')
  i654.m_Maskable = !!i655[13]
  i654.m_Color = new pc.Color(i655[14], i655[15], i655[16], i655[17])
  i654.m_RaycastTarget = !!i655[18]
  i654.m_RaycastPadding = new pc.Vec4( i655[19], i655[20], i655[21], i655[22] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i657 = data
  i656.m_Alpha = i657[0]
  i656.m_Interactable = !!i657[1]
  i656.m_BlocksRaycasts = !!i657[2]
  i656.m_IgnoreParentGroups = !!i657[3]
  i656.enabled = !!i657[4]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i659 = data
  i658.name = i659[0]
  i658.index = i659[1]
  i658.startup = !!i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i661 = data
  i660.enabled = !!i661[0]
  i660.aspect = i661[1]
  i660.orthographic = !!i661[2]
  i660.orthographicSize = i661[3]
  i660.backgroundColor = new pc.Color(i661[4], i661[5], i661[6], i661[7])
  i660.nearClipPlane = i661[8]
  i660.farClipPlane = i661[9]
  i660.fieldOfView = i661[10]
  i660.depth = i661[11]
  i660.clearFlags = i661[12]
  i660.cullingMask = i661[13]
  i660.rect = i661[14]
  request.r(i661[15], i661[16], 0, i660, 'targetTexture')
  i660.usePhysicalProperties = !!i661[17]
  i660.focalLength = i661[18]
  i660.sensorSize = new pc.Vec2( i661[19], i661[20] )
  i660.lensShift = new pc.Vec2( i661[21], i661[22] )
  i660.gateFit = i661[23]
  i660.commandBufferCount = i661[24]
  i660.cameraType = i661[25]
  return i660
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i663 = data
  i662.m_RenderShadows = !!i663[0]
  i662.m_RequiresDepthTextureOption = i663[1]
  i662.m_RequiresOpaqueTextureOption = i663[2]
  i662.m_CameraType = i663[3]
  var i665 = i663[4]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.m_Cameras = i664
  i662.m_RendererIndex = i663[5]
  i662.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i663[6] )
  request.r(i663[7], i663[8], 0, i662, 'm_VolumeTrigger')
  i662.m_VolumeFrameworkUpdateModeOption = i663[9]
  i662.m_RenderPostProcessing = !!i663[10]
  i662.m_Antialiasing = i663[11]
  i662.m_AntialiasingQuality = i663[12]
  i662.m_StopNaN = !!i663[13]
  i662.m_Dithering = !!i663[14]
  i662.m_ClearDepth = !!i663[15]
  i662.m_AllowXRRendering = !!i663[16]
  i662.m_AllowHDROutput = !!i663[17]
  i662.m_UseScreenCoordOverride = !!i663[18]
  i662.m_ScreenSizeOverride = new pc.Vec4( i663[19], i663[20], i663[21], i663[22] )
  i662.m_ScreenCoordScaleBias = new pc.Vec4( i663[23], i663[24], i663[25], i663[26] )
  i662.m_RequiresDepthTexture = !!i663[27]
  i662.m_RequiresColorTexture = !!i663[28]
  i662.m_Version = i663[29]
  i662.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i663[30], i662.m_TaaSettings)
  return i662
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i669 = data
  i668.m_Quality = i669[0]
  i668.m_FrameInfluence = i669[1]
  i668.m_JitterScale = i669[2]
  i668.m_MipBias = i669[3]
  i668.m_VarianceClampScale = i669[4]
  i668.m_ContrastAdaptiveSharpening = i669[5]
  return i668
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i670 = root || request.c( 'ParticleFollowUI' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, '_buttonButtle')
  request.r(i671[2], i671[3], 0, i670, '_buttonShop')
  request.r(i671[4], i671[5], 0, i670, 'uiCamera')
  request.r(i671[6], i671[7], 0, i670, '_particleEffectButton')
  request.r(i671[8], i671[9], 0, i670, '_particleEffectButtonShop')
  i670.zOffset = i671[10]
  return i670
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i673 = data
  i672.m_ComponentVersion = i673[0]
  i672.m_LightType = i673[1]
  i672.m_BlendStyleIndex = i673[2]
  i672.m_FalloffIntensity = i673[3]
  i672.m_Color = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.m_Intensity = i673[8]
  i672.m_LightVolumeIntensity = i673[9]
  i672.m_LightVolumeIntensityEnabled = !!i673[10]
  i672.m_ApplyToSortingLayers = i673[11]
  request.r(i673[12], i673[13], 0, i672, 'm_LightCookieSprite')
  request.r(i673[14], i673[15], 0, i672, 'm_DeprecatedPointLightCookieSprite')
  i672.m_LightOrder = i673[16]
  i672.m_AlphaBlendOnOverlap = !!i673[17]
  i672.m_OverlapOperation = i673[18]
  i672.m_NormalMapDistance = i673[19]
  i672.m_NormalMapQuality = i673[20]
  i672.m_UseNormalMap = !!i673[21]
  i672.m_ShadowIntensityEnabled = !!i673[22]
  i672.m_ShadowIntensity = i673[23]
  i672.m_ShadowVolumeIntensityEnabled = !!i673[24]
  i672.m_ShadowVolumeIntensity = i673[25]
  i672.m_PointLightInnerAngle = i673[26]
  i672.m_PointLightOuterAngle = i673[27]
  i672.m_PointLightInnerRadius = i673[28]
  i672.m_PointLightOuterRadius = i673[29]
  i672.m_ShapeLightParametricSides = i673[30]
  i672.m_ShapeLightParametricAngleOffset = i673[31]
  i672.m_ShapeLightParametricRadius = i673[32]
  i672.m_ShapeLightFalloffSize = i673[33]
  i672.m_ShapeLightFalloffOffset = new pc.Vec2( i673[34], i673[35] )
  var i675 = i673[36]
  var i674 = []
  for(var i = 0; i < i675.length; i += 3) {
    i674.push( new pc.Vec3( i675[i + 0], i675[i + 1], i675[i + 2] ) );
  }
  i672.m_ShapePath = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.planeDistance = i679[1]
  i678.referencePixelsPerUnit = i679[2]
  i678.isFallbackOverlay = !!i679[3]
  i678.renderMode = i679[4]
  i678.renderOrder = i679[5]
  i678.sortingLayerName = i679[6]
  i678.sortingOrder = i679[7]
  i678.scaleFactor = i679[8]
  request.r(i679[9], i679[10], 0, i678, 'worldCamera')
  i678.overrideSorting = !!i679[11]
  i678.pixelPerfect = !!i679[12]
  i678.targetDisplay = i679[13]
  i678.overridePixelPerfect = !!i679[14]
  return i678
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i681 = data
  i680.m_UiScaleMode = i681[0]
  i680.m_ReferencePixelsPerUnit = i681[1]
  i680.m_ScaleFactor = i681[2]
  i680.m_ReferenceResolution = new pc.Vec2( i681[3], i681[4] )
  i680.m_ScreenMatchMode = i681[5]
  i680.m_MatchWidthOrHeight = i681[6]
  i680.m_PhysicalUnit = i681[7]
  i680.m_FallbackScreenDPI = i681[8]
  i680.m_DefaultSpriteDPI = i681[9]
  i680.m_DynamicPixelsPerUnit = i681[10]
  i680.m_PresetInfoIsWorld = !!i681[11]
  return i680
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i683 = data
  i682.m_IgnoreReversedGraphics = !!i683[0]
  i682.m_BlockingObjects = i683[1]
  i682.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i683[2] )
  return i682
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i684 = root || request.c( 'ClickCta' )
  var i685 = data
  return i684
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Text' )
  var i687 = data
  i686.m_FontData = request.d('UnityEngine.UI.FontData', i687[0], i686.m_FontData)
  i686.m_Text = i687[1]
  request.r(i687[2], i687[3], 0, i686, 'm_Material')
  i686.m_Maskable = !!i687[4]
  i686.m_Color = new pc.Color(i687[5], i687[6], i687[7], i687[8])
  i686.m_RaycastTarget = !!i687[9]
  i686.m_RaycastPadding = new pc.Vec4( i687[10], i687[11], i687[12], i687[13] )
  return i686
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.FontData' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_Font')
  i688.m_FontSize = i689[2]
  i688.m_FontStyle = i689[3]
  i688.m_BestFit = !!i689[4]
  i688.m_MinSize = i689[5]
  i688.m_MaxSize = i689[6]
  i688.m_Alignment = i689[7]
  i688.m_AlignByGeometry = !!i689[8]
  i688.m_RichText = !!i689[9]
  i688.m_HorizontalOverflow = i689[10]
  i688.m_VerticalOverflow = i689[11]
  i688.m_LineSpacing = i689[12]
  return i688
}

Deserializers["Episode5"] = function (request, data, root) {
  var i690 = root || request.c( 'Episode5' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, '_card1_1_2')
  request.r(i691[2], i691[3], 0, i690, '_card1_2_2')
  request.r(i691[4], i691[5], 0, i690, '_card1_3_2')
  request.r(i691[6], i691[7], 0, i690, '_card1_1')
  request.r(i691[8], i691[9], 0, i690, '_card2_1')
  request.r(i691[10], i691[11], 0, i690, '_coinsText')
  request.r(i691[12], i691[13], 0, i690, '_particleSystem')
  return i690
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i692 = root || request.c( 'Episode4_1' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, '_cart1__2')
  request.r(i693[2], i693[3], 0, i692, '_cart2__2')
  request.r(i693[4], i693[5], 0, i692, '_cart3__2')
  request.r(i693[6], i693[7], 0, i692, '_cart1_1')
  request.r(i693[8], i693[9], 0, i692, '_cart2_1')
  request.r(i693[10], i693[11], 0, i692, '_cart3_1')
  request.r(i693[12], i693[13], 0, i692, '_arm')
  request.r(i693[14], i693[15], 0, i692, '_coinText')
  request.r(i693[16], i693[17], 0, i692, '_particleSystem')
  request.r(i693[18], i693[19], 0, i692, '_particleDragon')
  return i692
}

Deserializers["Episode1"] = function (request, data, root) {
  var i694 = root || request.c( 'Episode1' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, '_arm')
  request.r(i695[2], i695[3], 0, i694, '_points')
  request.r(i695[4], i695[5], 0, i694, '_unit')
  request.r(i695[6], i695[7], 0, i694, '_particleSystem')
  request.r(i695[8], i695[9], 0, i694, '_textCoins')
  request.r(i695[10], i695[11], 0, i694, '_textDamage')
  request.r(i695[12], i695[13], 0, i694, '_textHealth')
  request.r(i695[14], i695[15], 0, i694, '_textHealth2')
  request.r(i695[16], i695[17], 0, i694, '_textDamage2')
  i694.scaleDuration = i695[18]
  i694.moveDuration = i695[19]
  i694.targetScale = new pc.Vec3( i695[20], i695[21], i695[22] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'animatorController')
  request.r(i697[2], i697[3], 0, i696, 'avatar')
  i696.updateMode = i697[4]
  i696.hasTransformHierarchy = !!i697[5]
  i696.applyRootMotion = !!i697[6]
  var i699 = i697[7]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.humanBones = i698
  i696.enabled = !!i697[8]
  return i696
}

Deserializers["Card"] = function (request, data, root) {
  var i702 = root || request.c( 'Card' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_points')
  i702.scaleDuration = i703[2]
  i702.moveDuration = i703[3]
  i702.targetScale = new pc.Vec3( i703[4], i703[5], i703[6] )
  request.r(i703[7], i703[8], 0, i702, '_particleSystem')
  request.r(i703[9], i703[10], 0, i702, '_particleDragon')
  return i702
}

Deserializers["Episode4"] = function (request, data, root) {
  var i704 = root || request.c( 'Episode4' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, '_cardDragcone1_1')
  request.r(i705[2], i705[3], 0, i704, '_cardDragcone2_2')
  request.r(i705[4], i705[5], 0, i704, '_cardDragcone')
  request.r(i705[6], i705[7], 0, i704, '_arm3_3')
  request.r(i705[8], i705[9], 0, i704, '_shopButton')
  request.r(i705[10], i705[11], 0, i704, '_points')
  request.r(i705[12], i705[13], 0, i704, '_textCoins')
  i704.scaleDuration = i705[14]
  i704.moveDuration = i705[15]
  i704.targetScale = new pc.Vec3( i705[16], i705[17], i705[18] )
  return i704
}

Deserializers["Episode2"] = function (request, data, root) {
  var i706 = root || request.c( 'Episode2' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, '_arm')
  request.r(i707[2], i707[3], 0, i706, '_points')
  request.r(i707[4], i707[5], 0, i706, '_unit1')
  request.r(i707[6], i707[7], 0, i706, '_unit2')
  request.r(i707[8], i707[9], 0, i706, '_particleSystem1')
  request.r(i707[10], i707[11], 0, i706, '_particleSystem2')
  request.r(i707[12], i707[13], 0, i706, '_textCoins')
  request.r(i707[14], i707[15], 0, i706, '_textDamage')
  request.r(i707[16], i707[17], 0, i706, '_textHealth')
  request.r(i707[18], i707[19], 0, i706, '_textHealth2')
  request.r(i707[20], i707[21], 0, i706, '_textDamage2')
  i706.scaleDuration = i707[22]
  i706.moveDuration = i707[23]
  i706.targetScale = new pc.Vec3( i707[24], i707[25], i707[26] )
  return i706
}

Deserializers["Episode6"] = function (request, data, root) {
  var i708 = root || request.c( 'Episode6' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, '_arm')
  request.r(i709[2], i709[3], 0, i708, '_points')
  request.r(i709[4], i709[5], 0, i708, '_cart')
  request.r(i709[6], i709[7], 0, i708, '_cartPoint')
  request.r(i709[8], i709[9], 0, i708, '_coinsText')
  request.r(i709[10], i709[11], 0, i708, '_textDamage')
  request.r(i709[12], i709[13], 0, i708, '_textHealth')
  request.r(i709[14], i709[15], 0, i708, '_textHealth2')
  request.r(i709[16], i709[17], 0, i708, '_textDamage2')
  i708.scaleDuration = i709[18]
  i708.moveDuration = i709[19]
  i708.targetScale = new pc.Vec3( i709[20], i709[21], i709[22] )
  request.r(i709[23], i709[24], 0, i708, '_particleDragon')
  request.r(i709[25], i709[26], 0, i708, '_particleCards')
  return i708
}

Deserializers["Episode3"] = function (request, data, root) {
  var i710 = root || request.c( 'Episode3' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, '_battle')
  request.r(i711[2], i711[3], 0, i710, '_button')
  request.r(i711[4], i711[5], 0, i710, '_cardDracone')
  request.r(i711[6], i711[7], 0, i710, '_point')
  request.r(i711[8], i711[9], 0, i710, '_cardEnemye1')
  request.r(i711[10], i711[11], 0, i710, '_cardEnemye2')
  request.r(i711[12], i711[13], 0, i710, '_cardEnemye3')
  request.r(i711[14], i711[15], 0, i710, '_cardDragon1')
  request.r(i711[16], i711[17], 0, i710, '_cardDragon2')
  request.r(i711[18], i711[19], 0, i710, '_cardDragon3')
  request.r(i711[20], i711[21], 0, i710, '_particleSystem1')
  request.r(i711[22], i711[23], 0, i710, '_particleSystem2')
  request.r(i711[24], i711[25], 0, i710, '_particleSystem3')
  request.r(i711[26], i711[27], 0, i710, '_particleButton')
  request.r(i711[28], i711[29], 0, i710, '_textCoins')
  request.r(i711[30], i711[31], 0, i710, '_winVictoty')
  request.r(i711[32], i711[33], 0, i710, '_winInscription')
  request.r(i711[34], i711[35], 0, i710, '_winInscription2')
  request.r(i711[36], i711[37], 0, i710, '_winInscription3')
  request.r(i711[38], i711[39], 0, i710, '_parentsDisplay')
  return i710
}

Deserializers["Episode7"] = function (request, data, root) {
  var i712 = root || request.c( 'Episode7' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, '_battle')
  request.r(i713[2], i713[3], 0, i712, '_button')
  request.r(i713[4], i713[5], 0, i712, '_cardEnemye1')
  request.r(i713[6], i713[7], 0, i712, '_cardEnemye2')
  request.r(i713[8], i713[9], 0, i712, '_cardEnemye3')
  request.r(i713[10], i713[11], 0, i712, '_cardEnemye4')
  request.r(i713[12], i713[13], 0, i712, '_cardEnemye5')
  request.r(i713[14], i713[15], 0, i712, '_cardEnemye6')
  request.r(i713[16], i713[17], 0, i712, '_cardDragon1')
  request.r(i713[18], i713[19], 0, i712, '_cardDragon2')
  request.r(i713[20], i713[21], 0, i712, '_cardDragon3')
  request.r(i713[22], i713[23], 0, i712, '_particleSystem1')
  request.r(i713[24], i713[25], 0, i712, '_particleSystem2')
  request.r(i713[26], i713[27], 0, i712, '_particleSystem3')
  request.r(i713[28], i713[29], 0, i712, '_particleSystem4')
  request.r(i713[30], i713[31], 0, i712, '_particleSystem5')
  request.r(i713[32], i713[33], 0, i712, '_particleSystem6')
  request.r(i713[34], i713[35], 0, i712, '_winVictoty')
  request.r(i713[36], i713[37], 0, i712, '_winFinal')
  request.r(i713[38], i713[39], 0, i712, '_particleSystem')
  request.r(i713[40], i713[41], 0, i712, '_particleDragon')
  request.r(i713[42], i713[43], 0, i712, '_episode3')
  return i712
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i714 = root || request.c( 'Episode4_2' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_battle')
  request.r(i715[2], i715[3], 0, i714, '_button')
  request.r(i715[4], i715[5], 0, i714, '_cardEnemye1')
  request.r(i715[6], i715[7], 0, i714, '_cardEnemye2')
  request.r(i715[8], i715[9], 0, i714, '_cardEnemye3')
  request.r(i715[10], i715[11], 0, i714, '_cardDracone1')
  request.r(i715[12], i715[13], 0, i714, '_cardDracone2')
  request.r(i715[14], i715[15], 0, i714, '_cardDracone3')
  request.r(i715[16], i715[17], 0, i714, '_winDefeat')
  request.r(i715[18], i715[19], 0, i714, '_winFinal')
  request.r(i715[20], i715[21], 0, i714, '_particleSystem1')
  request.r(i715[22], i715[23], 0, i714, '_particleSystem2')
  request.r(i715[24], i715[25], 0, i714, '_particleSystem3')
  request.r(i715[26], i715[27], 0, i714, '_particleSystem4')
  request.r(i715[28], i715[29], 0, i714, '_particleSystem5')
  request.r(i715[30], i715[31], 0, i714, '_particleSystem6')
  request.r(i715[32], i715[33], 0, i714, '_particleSystem7')
  request.r(i715[34], i715[35], 0, i714, '_particleButtun')
  request.r(i715[36], i715[37], 0, i714, '_particleDragon')
  request.r(i715[38], i715[39], 0, i714, '_layer')
  request.r(i715[40], i715[41], 0, i714, '_winInscription')
  request.r(i715[42], i715[43], 0, i714, '_winInscription2')
  request.r(i715[44], i715[45], 0, i714, '_winInscription3')
  return i714
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i716 = root || request.c( 'Episode5_2' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, '_battle')
  request.r(i717[2], i717[3], 0, i716, '_button')
  request.r(i717[4], i717[5], 0, i716, '_cardEnemye1')
  request.r(i717[6], i717[7], 0, i716, '_cardEnemye2')
  request.r(i717[8], i717[9], 0, i716, '_cardEnemye3')
  request.r(i717[10], i717[11], 0, i716, '_cardDracone1')
  request.r(i717[12], i717[13], 0, i716, '_cardDracone2')
  request.r(i717[14], i717[15], 0, i716, '_cardDracone3')
  request.r(i717[16], i717[17], 0, i716, '_cardDracone4')
  request.r(i717[18], i717[19], 0, i716, '_winDefeat')
  request.r(i717[20], i717[21], 0, i716, '_winFinal')
  request.r(i717[22], i717[23], 0, i716, '_particleSystem1')
  request.r(i717[24], i717[25], 0, i716, '_particleSystem2')
  request.r(i717[26], i717[27], 0, i716, '_particleSystem3')
  request.r(i717[28], i717[29], 0, i716, '_particleSystem4')
  request.r(i717[30], i717[31], 0, i716, '_particleSystem5')
  request.r(i717[32], i717[33], 0, i716, '_particleSystem6')
  request.r(i717[34], i717[35], 0, i716, '_particleSystem7')
  request.r(i717[36], i717[37], 0, i716, '_particleSystem')
  request.r(i717[38], i717[39], 0, i716, '_layer')
  request.r(i717[40], i717[41], 0, i716, '_winInscription')
  request.r(i717[42], i717[43], 0, i716, '_winInscription2')
  request.r(i717[44], i717[45], 0, i716, '_winInscription3')
  return i716
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i718 = root || request.c( 'ArmAnimation' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, '_targetButton')
  i718.flyDuration = i719[2]
  i718.shrinkDuration = i719[3]
  i718.restoreDuration = i719[4]
  return i718
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Button' )
  var i721 = data
  i720.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i721[0], i720.m_OnClick)
  i720.m_Navigation = request.d('UnityEngine.UI.Navigation', i721[1], i720.m_Navigation)
  i720.m_Transition = i721[2]
  i720.m_Colors = request.d('UnityEngine.UI.ColorBlock', i721[3], i720.m_Colors)
  i720.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i721[4], i720.m_SpriteState)
  i720.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i721[5], i720.m_AnimationTriggers)
  i720.m_Interactable = !!i721[6]
  request.r(i721[7], i721[8], 0, i720, 'm_TargetGraphic')
  return i720
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i723 = data
  i722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i723[0], i722.m_PersistentCalls)
  return i722
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i725 = data
  var i727 = i725[0]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('UnityEngine.Events.PersistentCall', i727[i + 0]));
  }
  i724.m_Calls = i726
  return i724
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'm_Target')
  i730.m_TargetAssemblyTypeName = i731[2]
  i730.m_MethodName = i731[3]
  i730.m_Mode = i731[4]
  i730.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i731[5], i730.m_Arguments)
  i730.m_CallState = i731[6]
  return i730
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_ObjectArgument')
  i732.m_ObjectArgumentAssemblyTypeName = i733[2]
  i732.m_IntArgument = i733[3]
  i732.m_FloatArgument = i733[4]
  i732.m_StringArgument = i733[5]
  i732.m_BoolArgument = !!i733[6]
  return i732
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i735 = data
  i734.m_Mode = i735[0]
  i734.m_WrapAround = !!i735[1]
  request.r(i735[2], i735[3], 0, i734, 'm_SelectOnUp')
  request.r(i735[4], i735[5], 0, i734, 'm_SelectOnDown')
  request.r(i735[6], i735[7], 0, i734, 'm_SelectOnLeft')
  request.r(i735[8], i735[9], 0, i734, 'm_SelectOnRight')
  return i734
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i737 = data
  i736.m_NormalColor = new pc.Color(i737[0], i737[1], i737[2], i737[3])
  i736.m_HighlightedColor = new pc.Color(i737[4], i737[5], i737[6], i737[7])
  i736.m_PressedColor = new pc.Color(i737[8], i737[9], i737[10], i737[11])
  i736.m_SelectedColor = new pc.Color(i737[12], i737[13], i737[14], i737[15])
  i736.m_DisabledColor = new pc.Color(i737[16], i737[17], i737[18], i737[19])
  i736.m_ColorMultiplier = i737[20]
  i736.m_FadeDuration = i737[21]
  return i736
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_HighlightedSprite')
  request.r(i739[2], i739[3], 0, i738, 'm_PressedSprite')
  request.r(i739[4], i739[5], 0, i738, 'm_SelectedSprite')
  request.r(i739[6], i739[7], 0, i738, 'm_DisabledSprite')
  return i738
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i741 = data
  i740.m_NormalTrigger = i741[0]
  i740.m_HighlightedTrigger = i741[1]
  i740.m_PressedTrigger = i741[2]
  i740.m_SelectedTrigger = i741[3]
  i740.m_DisabledTrigger = i741[4]
  return i740
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_FirstSelected')
  i742.m_sendNavigationEvents = !!i743[2]
  i742.m_DragThreshold = i743[3]
  return i742
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i745 = data
  i744.m_HorizontalAxis = i745[0]
  i744.m_VerticalAxis = i745[1]
  i744.m_SubmitButton = i745[2]
  i744.m_CancelButton = i745[3]
  i744.m_InputActionsPerSecond = i745[4]
  i744.m_RepeatDelay = i745[5]
  i744.m_ForceModuleActive = !!i745[6]
  i744.m_SendPointerHoverToParent = !!i745[7]
  return i744
}

Deserializers["Scenario"] = function (request, data, root) {
  var i746 = root || request.c( 'Scenario' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_episode1')
  request.r(i747[2], i747[3], 0, i746, '_episode2')
  request.r(i747[4], i747[5], 0, i746, '_episode3')
  request.r(i747[6], i747[7], 0, i746, '_episode4')
  request.r(i747[8], i747[9], 0, i746, '_episode4_1')
  request.r(i747[10], i747[11], 0, i746, '_episode4_2')
  request.r(i747[12], i747[13], 0, i746, '_episode5')
  request.r(i747[14], i747[15], 0, i746, '_episode5_1')
  request.r(i747[16], i747[17], 0, i746, '_episode6')
  request.r(i747[18], i747[19], 0, i746, '_episode7')
  request.r(i747[20], i747[21], 0, i746, '_card1__1')
  request.r(i747[22], i747[23], 0, i746, '_card1__2')
  request.r(i747[24], i747[25], 0, i746, '_card1__3')
  request.r(i747[26], i747[27], 0, i746, '_coinsText')
  return i746
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i748 = root || request.c( 'Episode5_1' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, '_card1')
  request.r(i749[2], i749[3], 0, i748, '_card2')
  request.r(i749[4], i749[5], 0, i748, '_episode5')
  request.r(i749[6], i749[7], 0, i748, 'episode4_1')
  request.r(i749[8], i749[9], 0, i748, 'episode5_2')
  request.r(i749[10], i749[11], 0, i748, '_texCoins')
  request.r(i749[12], i749[13], 0, i748, '_particleSystem')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i751 = data
  i750.ambientIntensity = i751[0]
  i750.reflectionIntensity = i751[1]
  i750.ambientMode = i751[2]
  i750.ambientLight = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.ambientSkyColor = new pc.Color(i751[7], i751[8], i751[9], i751[10])
  i750.ambientGroundColor = new pc.Color(i751[11], i751[12], i751[13], i751[14])
  i750.ambientEquatorColor = new pc.Color(i751[15], i751[16], i751[17], i751[18])
  i750.fogColor = new pc.Color(i751[19], i751[20], i751[21], i751[22])
  i750.fogEndDistance = i751[23]
  i750.fogStartDistance = i751[24]
  i750.fogDensity = i751[25]
  i750.fog = !!i751[26]
  request.r(i751[27], i751[28], 0, i750, 'skybox')
  i750.fogMode = i751[29]
  var i753 = i751[30]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i753[i + 0]) );
  }
  i750.lightmaps = i752
  i750.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i751[31], i750.lightProbes)
  i750.lightmapsMode = i751[32]
  i750.mixedBakeMode = i751[33]
  i750.environmentLightingMode = i751[34]
  i750.ambientProbe = new pc.SphericalHarmonicsL2(i751[35])
  i750.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i751[36])
  i750.useReferenceAmbientProbe = !!i751[37]
  request.r(i751[38], i751[39], 0, i750, 'customReflection')
  request.r(i751[40], i751[41], 0, i750, 'defaultReflection')
  i750.defaultReflectionMode = i751[42]
  i750.defaultReflectionResolution = i751[43]
  i750.sunLightObjectId = i751[44]
  i750.pixelLightCount = i751[45]
  i750.defaultReflectionHDR = !!i751[46]
  i750.hasLightDataAsset = !!i751[47]
  i750.hasManualGenerate = !!i751[48]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'lightmapColor')
  request.r(i757[2], i757[3], 0, i756, 'lightmapDirection')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i758 = root || new UnityEngine.LightProbes()
  var i759 = data
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i765 = data
  i764.enabled = !!i765[0]
  i764.type = i765[1]
  i764.color = new pc.Color(i765[2], i765[3], i765[4], i765[5])
  i764.cullingMask = i765[6]
  i764.intensity = i765[7]
  i764.range = i765[8]
  i764.spotAngle = i765[9]
  i764.shadows = i765[10]
  i764.shadowNormalBias = i765[11]
  i764.shadowBias = i765[12]
  i764.shadowStrength = i765[13]
  i764.shadowResolution = i765[14]
  i764.lightmapBakeType = i765[15]
  i764.renderMode = i765[16]
  request.r(i765[17], i765[18], 0, i764, 'cookie')
  i764.cookieSize = i765[19]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i767 = data
  i766.AdditionalLightsPerObjectLimit = i767[0]
  i766.AdditionalLightsRenderingMode = i767[1]
  i766.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i767[2], i766.LightRenderingMode)
  i766.ColorGradingLutSize = i767[3]
  i766.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i767[4], i766.ColorGradingMode)
  i766.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i767[5], i766.MainLightRenderingMode)
  i766.MainLightRenderingModeValue = i767[6]
  i766.MainLightShadowsSupported = !!i767[7]
  i766.MixedLightingSupported = !!i767[8]
  i766.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i767[9], i766.MsaaQuality)
  i766.MSAA = i767[10]
  i766.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i767[11], i766.OpaqueDownsampling)
  i766.RenderScale = i767[12]
  i766.RequireDepthTexture = !!i767[13]
  i766.RequireOpaqueTexture = !!i767[14]
  i766.ShadowAtlasResolution = i767[15]
  i766.ShadowDepthBias = i767[16]
  i766.SupportsHDR = !!i767[17]
  i766.SupportsTerrainHoles = !!i767[18]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i769 = data
  i768.Disabled = i769[0]
  i768.PerVertex = i769[1]
  i768.PerPixel = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i771 = data
  i770.LowDynamicRange = i771[0]
  i770.HighDynamicRange = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i773 = data
  i772.Disabled = i773[0]
  i772._2x = i773[1]
  i772._4x = i773[2]
  i772._8x = i773[3]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i775 = data
  i774.None = i775[0]
  i774._2xBilinear = i775[1]
  i774._4xBox = i775[2]
  i774._4xBilinear = i775[3]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i777 = data
  var i779 = i777[0]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i779[i + 0]));
  }
  i776.ShaderCompilationErrors = i778
  i776.name = i777[1]
  i776.guid = i777[2]
  var i781 = i777[3]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.shaderDefinedKeywords = i780
  var i783 = i777[4]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i783[i + 0]) );
  }
  i776.passes = i782
  var i785 = i777[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i785[i + 0]) );
  }
  i776.usePasses = i784
  var i787 = i777[6]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i787[i + 0]) );
  }
  i776.defaultParameterValues = i786
  request.r(i777[7], i777[8], 0, i776, 'unityFallbackShader')
  i776.readDepth = !!i777[9]
  i776.isCreatedByShaderGraph = !!i777[10]
  i776.compiled = !!i777[11]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i791 = data
  i790.shaderName = i791[0]
  i790.errorMessage = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i796 = root || new pc.UnityShaderPass()
  var i797 = data
  i796.id = i797[0]
  i796.subShaderIndex = i797[1]
  i796.name = i797[2]
  i796.passType = i797[3]
  i796.grabPassTextureName = i797[4]
  i796.usePass = !!i797[5]
  i796.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[6], i796.zTest)
  i796.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[7], i796.zWrite)
  i796.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[8], i796.culling)
  i796.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i797[9], i796.blending)
  i796.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i797[10], i796.alphaBlending)
  i796.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[11], i796.colorWriteMask)
  i796.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[12], i796.offsetUnits)
  i796.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[13], i796.offsetFactor)
  i796.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[14], i796.stencilRef)
  i796.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[15], i796.stencilReadMask)
  i796.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[16], i796.stencilWriteMask)
  i796.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[17], i796.stencilOp)
  i796.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[18], i796.stencilOpFront)
  i796.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[19], i796.stencilOpBack)
  var i799 = i797[20]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i799[i + 0]) );
  }
  i796.tags = i798
  var i801 = i797[21]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i796.passDefinedKeywords = i800
  var i803 = i797[22]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i803[i + 0]) );
  }
  i796.passDefinedKeywordGroups = i802
  var i805 = i797[23]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i805[i + 0]) );
  }
  i796.variants = i804
  var i807 = i797[24]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i807[i + 0]) );
  }
  i796.excludedVariants = i806
  i796.hasDepthReader = !!i797[25]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i809 = data
  i808.val = i809[0]
  i808.name = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i811 = data
  i810.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[0], i810.src)
  i810.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[1], i810.dst)
  i810.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[2], i810.op)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i813 = data
  i812.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[0], i812.pass)
  i812.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[1], i812.fail)
  i812.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[2], i812.zFail)
  i812.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[3], i812.comp)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.hasDiscard = !!i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i827 = data
  i826.passId = i827[0]
  i826.subShaderIndex = i827[1]
  var i829 = i827[2]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i826.keywords = i828
  i826.vertexProgram = i827[3]
  i826.fragmentProgram = i827[4]
  i826.exportedForWebGl2 = !!i827[5]
  i826.readDepth = !!i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'shader')
  i832.pass = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i837 = data
  i836.name = i837[0]
  i836.type = i837[1]
  i836.value = new pc.Vec4( i837[2], i837[3], i837[4], i837[5] )
  i836.textureValue = i837[6]
  i836.shaderPropertyFlag = i837[7]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i839 = data
  i838.name = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'texture')
  i838.aabb = i839[3]
  i838.vertices = i839[4]
  i838.triangles = i839[5]
  i838.textureRect = UnityEngine.Rect.MinMaxRect(i839[6], i839[7], i839[8], i839[9])
  i838.packedRect = UnityEngine.Rect.MinMaxRect(i839[10], i839[11], i839[12], i839[13])
  i838.border = new pc.Vec4( i839[14], i839[15], i839[16], i839[17] )
  i838.transparency = i839[18]
  i838.bounds = i839[19]
  i838.pixelsPerUnit = i839[20]
  i838.textureWidth = i839[21]
  i838.textureHeight = i839[22]
  i838.nativeSize = new pc.Vec2( i839[23], i839[24] )
  i838.pivot = new pc.Vec2( i839[25], i839[26] )
  i838.textureRectOffset = new pc.Vec2( i839[27], i839[28] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i841 = data
  i840.name = i841[0]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i843 = data
  i842.name = i843[0]
  i842.wrapMode = i843[1]
  i842.isLooping = !!i843[2]
  i842.length = i843[3]
  var i845 = i843[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i845[i + 0]) );
  }
  i842.curves = i844
  var i847 = i843[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i847[i + 0]) );
  }
  i842.events = i846
  i842.halfPrecision = !!i843[6]
  i842._frameRate = i843[7]
  i842.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i843[8], i842.localBounds)
  i842.hasMuscleCurves = !!i843[9]
  var i849 = i843[10]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i842.clipMuscleConstant = i848
  i842.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i843[11], i842.clipBindingConstant)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i853 = data
  i852.path = i853[0]
  i852.hash = i853[1]
  i852.componentType = i853[2]
  i852.property = i853[3]
  i852.keys = i853[4]
  var i855 = i853[5]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i855[i + 0]) );
  }
  i852.objectReferenceKeys = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i859 = data
  i858.time = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'value')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i863 = data
  i862.functionName = i863[0]
  i862.floatParameter = i863[1]
  i862.intParameter = i863[2]
  i862.stringParameter = i863[3]
  request.r(i863[4], i863[5], 0, i862, 'objectReferenceParameter')
  i862.time = i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.extends = new pc.Vec3( i865[3], i865[4], i865[5] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.genericBindings = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.pptrCurveMapping = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i875 = data
  i874.name = i875[0]
  i874.ascent = i875[1]
  i874.originalLineHeight = i875[2]
  i874.fontSize = i875[3]
  var i877 = i875[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i877[i + 0]) );
  }
  i874.characterInfo = i876
  request.r(i875[5], i875[6], 0, i874, 'texture')
  i874.originalFontSize = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i881 = data
  i880.index = i881[0]
  i880.advance = i881[1]
  i880.bearing = i881[2]
  i880.glyphWidth = i881[3]
  i880.glyphHeight = i881[4]
  i880.minX = i881[5]
  i880.maxX = i881[6]
  i880.minY = i881[7]
  i880.maxY = i881[8]
  i880.uvBottomLeftX = i881[9]
  i880.uvBottomLeftY = i881[10]
  i880.uvBottomRightX = i881[11]
  i880.uvBottomRightY = i881[12]
  i880.uvTopLeftX = i881[13]
  i880.uvTopLeftY = i881[14]
  i880.uvTopRightX = i881[15]
  i880.uvTopRightY = i881[16]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i883 = data
  i882.name = i883[0]
  var i885 = i883[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i885[i + 0]) );
  }
  i882.layers = i884
  var i887 = i883[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i887[i + 0]) );
  }
  i882.parameters = i886
  i882.animationClips = i883[3]
  i882.avatarUnsupported = i883[4]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i891 = data
  i890.name = i891[0]
  i890.defaultWeight = i891[1]
  i890.blendingMode = i891[2]
  i890.avatarMask = i891[3]
  i890.syncedLayerIndex = i891[4]
  i890.syncedLayerAffectsTiming = !!i891[5]
  i890.syncedLayers = i891[6]
  i890.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i891[7], i890.stateMachine)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i893 = data
  i892.id = i893[0]
  i892.name = i893[1]
  i892.path = i893[2]
  var i895 = i893[3]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i895[i + 0]) );
  }
  i892.states = i894
  var i897 = i893[4]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i897[i + 0]) );
  }
  i892.machines = i896
  var i899 = i893[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i899[i + 0]) );
  }
  i892.entryStateTransitions = i898
  var i901 = i893[6]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i901[i + 0]) );
  }
  i892.exitStateTransitions = i900
  var i903 = i893[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i903[i + 0]) );
  }
  i892.anyStateTransitions = i902
  i892.defaultStateId = i893[8]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  i906.cycleOffset = i907[2]
  i906.cycleOffsetParameter = i907[3]
  i906.cycleOffsetParameterActive = !!i907[4]
  i906.mirror = !!i907[5]
  i906.mirrorParameter = i907[6]
  i906.mirrorParameterActive = !!i907[7]
  i906.motionId = i907[8]
  i906.nameHash = i907[9]
  i906.fullPathHash = i907[10]
  i906.speed = i907[11]
  i906.speedParameter = i907[12]
  i906.speedParameterActive = !!i907[13]
  i906.tag = i907[14]
  i906.tagHash = i907[15]
  i906.writeDefaultValues = !!i907[16]
  var i909 = i907[17]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.behaviours = i908
  var i911 = i907[18]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i911[i + 0]) );
  }
  i906.transitions = i910
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i917 = data
  i916.fullPath = i917[0]
  i916.canTransitionToSelf = !!i917[1]
  i916.duration = i917[2]
  i916.exitTime = i917[3]
  i916.hasExitTime = !!i917[4]
  i916.hasFixedDuration = !!i917[5]
  i916.interruptionSource = i917[6]
  i916.offset = i917[7]
  i916.orderedInterruption = !!i917[8]
  i916.destinationStateId = i917[9]
  i916.isExit = !!i917[10]
  i916.mute = !!i917[11]
  i916.solo = !!i917[12]
  var i919 = i917[13]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i919[i + 0]) );
  }
  i916.conditions = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i925 = data
  i924.destinationStateId = i925[0]
  i924.isExit = !!i925[1]
  i924.mute = !!i925[2]
  i924.solo = !!i925[3]
  var i927 = i925[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i927[i + 0]) );
  }
  i924.conditions = i926
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i931 = data
  i930.defaultBool = !!i931[0]
  i930.defaultFloat = i931[1]
  i930.defaultInt = i931[2]
  i930.name = i931[3]
  i930.nameHash = i931[4]
  i930.type = i931[5]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i933 = data
  var i935 = i933[0]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i935[i + 0]) );
  }
  i932.files = i934
  i932.componentToPrefabIds = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i939 = data
  i938.path = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'unityObject')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i941 = data
  var i943 = i941[0]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i943[i + 0]) );
  }
  i940.scriptsExecutionOrder = i942
  var i945 = i941[1]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i945[i + 0]) );
  }
  i940.sortingLayers = i944
  var i947 = i941[2]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i947[i + 0]) );
  }
  i940.cullingLayers = i946
  i940.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i941[3], i940.timeSettings)
  i940.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i941[4], i940.physicsSettings)
  i940.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i941[5], i940.physics2DSettings)
  i940.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i941[6], i940.qualitySettings)
  i940.enableRealtimeShadows = !!i941[7]
  i940.enableAutoInstancing = !!i941[8]
  i940.enableDynamicBatching = !!i941[9]
  i940.lightmapEncodingQuality = i941[10]
  i940.desiredColorSpace = i941[11]
  var i949 = i941[12]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i940.allTags = i948
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i953 = data
  i952.name = i953[0]
  i952.value = i953[1]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i957 = data
  i956.id = i957[0]
  i956.name = i957[1]
  i956.value = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i961 = data
  i960.id = i961[0]
  i960.name = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i963 = data
  i962.fixedDeltaTime = i963[0]
  i962.maximumDeltaTime = i963[1]
  i962.timeScale = i963[2]
  i962.maximumParticleTimestep = i963[3]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i965 = data
  i964.gravity = new pc.Vec3( i965[0], i965[1], i965[2] )
  i964.defaultSolverIterations = i965[3]
  i964.bounceThreshold = i965[4]
  i964.autoSyncTransforms = !!i965[5]
  i964.autoSimulation = !!i965[6]
  var i967 = i965[7]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i967[i + 0]) );
  }
  i964.collisionMatrix = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i971 = data
  i970.enabled = !!i971[0]
  i970.layerId = i971[1]
  i970.otherLayerId = i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'material')
  i972.gravity = new pc.Vec2( i973[2], i973[3] )
  i972.positionIterations = i973[4]
  i972.velocityIterations = i973[5]
  i972.velocityThreshold = i973[6]
  i972.maxLinearCorrection = i973[7]
  i972.maxAngularCorrection = i973[8]
  i972.maxTranslationSpeed = i973[9]
  i972.maxRotationSpeed = i973[10]
  i972.baumgarteScale = i973[11]
  i972.baumgarteTOIScale = i973[12]
  i972.timeToSleep = i973[13]
  i972.linearSleepTolerance = i973[14]
  i972.angularSleepTolerance = i973[15]
  i972.defaultContactOffset = i973[16]
  i972.autoSimulation = !!i973[17]
  i972.queriesHitTriggers = !!i973[18]
  i972.queriesStartInColliders = !!i973[19]
  i972.callbacksOnDisable = !!i973[20]
  i972.reuseCollisionCallbacks = !!i973[21]
  i972.autoSyncTransforms = !!i973[22]
  var i975 = i973[23]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i975[i + 0]) );
  }
  i972.collisionMatrix = i974
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i979 = data
  i978.enabled = !!i979[0]
  i978.layerId = i979[1]
  i978.otherLayerId = i979[2]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i983[i + 0]) );
  }
  i980.qualityLevels = i982
  var i985 = i981[1]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i980.names = i984
  i980.shadows = i981[2]
  i980.anisotropicFiltering = i981[3]
  i980.antiAliasing = i981[4]
  i980.lodBias = i981[5]
  i980.shadowCascades = i981[6]
  i980.shadowDistance = i981[7]
  i980.shadowmaskMode = i981[8]
  i980.shadowProjection = i981[9]
  i980.shadowResolution = i981[10]
  i980.softParticles = !!i981[11]
  i980.softVegetation = !!i981[12]
  i980.activeColorSpace = i981[13]
  i980.desiredColorSpace = i981[14]
  i980.masterTextureLimit = i981[15]
  i980.maxQueuedFrames = i981[16]
  i980.particleRaycastBudget = i981[17]
  i980.pixelLightCount = i981[18]
  i980.realtimeReflectionProbes = !!i981[19]
  i980.shadowCascade2Split = i981[20]
  i980.shadowCascade4Split = new pc.Vec3( i981[21], i981[22], i981[23] )
  i980.streamingMipmapsActive = !!i981[24]
  i980.vSyncCount = i981[25]
  i980.asyncUploadBufferSize = i981[26]
  i980.asyncUploadTimeSlice = i981[27]
  i980.billboardsFaceCameraPosition = !!i981[28]
  i980.shadowNearPlaneOffset = i981[29]
  i980.streamingMipmapsMemoryBudget = i981[30]
  i980.maximumLODLevel = i981[31]
  i980.streamingMipmapsAddAllCameras = !!i981[32]
  i980.streamingMipmapsMaxLevelReduction = i981[33]
  i980.streamingMipmapsRenderersPerFrame = i981[34]
  i980.resolutionScalingFixedDPIFactor = i981[35]
  i980.streamingMipmapsMaxFileIORequests = i981[36]
  i980.currentQualityLevel = i981[37]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i991 = data
  i990.weight = i991[0]
  i990.vertices = i991[1]
  i990.normals = i991[2]
  i990.tangents = i991[3]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i995 = data
  i994.mode = i995[0]
  i994.parameter = i995[1]
  i994.threshold = i995[2]
  return i994
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[15],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[15],"81":[82],"83":[84],"85":[84],"21":[9],"86":[9],"87":[88],"89":[90],"91":[15],"92":[15],"18":[15],"93":[47],"94":[88],"95":[96],"97":[9],"98":[9],"23":[21],"12":[10,9],"99":[9],"22":[21],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[9],"107":[9],"108":[9],"109":[10,9],"110":[9],"111":[9],"112":[9],"113":[9],"25":[10,9],"114":[9],"115":[43],"116":[43],"44":[43],"117":[43],"118":[15],"119":[15],"120":[88]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","ParticleFollowUI","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ClickCta","UnityEngine.UI.Text","UnityEngine.Font","Episode5","UnityEngine.GameObject","Episode4_1","Episode1","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Card","Episode4","Episode2","Episode6","Episode3","Episode7","Episode4_2","Episode5_2","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "12.2";

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

Deserializers.buildID = "f2430059-a69c-461d-bb5a-a6d0a6e61adf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

