var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSpring' )
  var i473 = data
  i472.spring = i473[0]
  i472.damper = i473[1]
  i472.targetPosition = i473[2]
  return i472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor' )
  var i475 = data
  i474.m_TargetVelocity = i475[0]
  i474.m_Force = i475[1]
  i474.m_FreeSpin = i475[2]
  return i474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointLimits' )
  var i477 = data
  i476.m_Min = i477[0]
  i476.m_Max = i477[1]
  i476.m_Bounciness = i477[2]
  i476.m_BounceMinVelocity = i477[3]
  i476.m_ContactDistance = i477[4]
  i476.minBounce = i477[5]
  i476.maxBounce = i477[6]
  return i476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointDrive' )
  var i479 = data
  i478.m_PositionSpring = i479[0]
  i478.m_PositionDamper = i479[1]
  i478.m_MaximumForce = i479[2]
  i478.m_UseAcceleration = i479[3]
  return i478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i481 = data
  i480.m_Spring = i481[0]
  i480.m_Damper = i481[1]
  return i480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i483 = data
  i482.m_Limit = i483[0]
  i482.m_Bounciness = i483[1]
  i482.m_ContactDistance = i483[2]
  return i482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i485 = data
  i484.m_ExtremumSlip = i485[0]
  i484.m_ExtremumValue = i485[1]
  i484.m_AsymptoteSlip = i485[2]
  i484.m_AsymptoteValue = i485[3]
  i484.m_Stiffness = i485[4]
  return i484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i487 = data
  i486.m_LowerAngle = i487[0]
  i486.m_UpperAngle = i487[1]
  return i486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i489 = data
  i488.m_MotorSpeed = i489[0]
  i488.m_MaximumMotorTorque = i489[1]
  return i488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i491 = data
  i490.m_DampingRatio = i491[0]
  i490.m_Frequency = i491[1]
  i490.m_Angle = i491[2]
  return i490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i493 = data
  i492.m_LowerTranslation = i493[0]
  i492.m_UpperTranslation = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i495 = data
  i494.name = i495[0]
  i494.width = i495[1]
  i494.height = i495[2]
  i494.mipmapCount = i495[3]
  i494.anisoLevel = i495[4]
  i494.filterMode = i495[5]
  i494.hdr = !!i495[6]
  i494.format = i495[7]
  i494.wrapMode = i495[8]
  i494.alphaIsTransparency = !!i495[9]
  i494.alphaSource = i495[10]
  i494.graphicsFormat = i495[11]
  i494.sRGBTexture = !!i495[12]
  i494.desiredColorSpace = i495[13]
  i494.wrapU = i495[14]
  i494.wrapV = i495[15]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i497 = data
  i496.position = new pc.Vec3( i497[0], i497[1], i497[2] )
  i496.scale = new pc.Vec3( i497[3], i497[4], i497[5] )
  i496.rotation = new pc.Quat(i497[6], i497[7], i497[8], i497[9])
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i499 = data
  i498.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i499[0], i498.main)
  i498.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i499[1], i498.colorBySpeed)
  i498.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i499[2], i498.colorOverLifetime)
  i498.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i499[3], i498.emission)
  i498.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i499[4], i498.rotationBySpeed)
  i498.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i499[5], i498.rotationOverLifetime)
  i498.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i499[6], i498.shape)
  i498.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i499[7], i498.sizeBySpeed)
  i498.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i499[8], i498.sizeOverLifetime)
  i498.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i499[9], i498.textureSheetAnimation)
  i498.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i499[10], i498.velocityOverLifetime)
  i498.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i499[11], i498.noise)
  i498.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i499[12], i498.inheritVelocity)
  i498.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i499[13], i498.forceOverLifetime)
  i498.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i499[14], i498.limitVelocityOverLifetime)
  i498.useAutoRandomSeed = !!i499[15]
  i498.randomSeed = i499[16]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemMain()
  var i501 = data
  i500.duration = i501[0]
  i500.loop = !!i501[1]
  i500.prewarm = !!i501[2]
  i500.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[3], i500.startDelay)
  i500.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[4], i500.startLifetime)
  i500.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[5], i500.startSpeed)
  i500.startSize3D = !!i501[6]
  i500.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[7], i500.startSizeX)
  i500.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[8], i500.startSizeY)
  i500.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[9], i500.startSizeZ)
  i500.startRotation3D = !!i501[10]
  i500.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[11], i500.startRotationX)
  i500.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[12], i500.startRotationY)
  i500.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[13], i500.startRotationZ)
  i500.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i501[14], i500.startColor)
  i500.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[15], i500.gravityModifier)
  i500.simulationSpace = i501[16]
  request.r(i501[17], i501[18], 0, i500, 'customSimulationSpace')
  i500.simulationSpeed = i501[19]
  i500.useUnscaledTime = !!i501[20]
  i500.scalingMode = i501[21]
  i500.playOnAwake = !!i501[22]
  i500.maxParticles = i501[23]
  i500.emitterVelocityMode = i501[24]
  i500.stopAction = i501[25]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i502 = root || new pc.MinMaxCurve()
  var i503 = data
  i502.mode = i503[0]
  i502.curveMin = new pc.AnimationCurve( { keys_flow: i503[1] } )
  i502.curveMax = new pc.AnimationCurve( { keys_flow: i503[2] } )
  i502.curveMultiplier = i503[3]
  i502.constantMin = i503[4]
  i502.constantMax = i503[5]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i504 = root || new pc.MinMaxGradient()
  var i505 = data
  i504.mode = i505[0]
  i504.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i505[1], i504.gradientMin)
  i504.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i505[2], i504.gradientMax)
  i504.colorMin = new pc.Color(i505[3], i505[4], i505[5], i505[6])
  i504.colorMax = new pc.Color(i505[7], i505[8], i505[9], i505[10])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i507 = data
  i506.mode = i507[0]
  var i509 = i507[1]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i509[i + 0]) );
  }
  i506.colorKeys = i508
  var i511 = i507[2]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i511[i + 0]) );
  }
  i506.alphaKeys = i510
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemColorBySpeed()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i513[1], i512.color)
  i512.range = new pc.Vec2( i513[2], i513[3] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i517 = data
  i516.color = new pc.Color(i517[0], i517[1], i517[2], i517[3])
  i516.time = i517[4]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i521 = data
  i520.alpha = i521[0]
  i520.time = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemColorOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i523[1], i522.color)
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemEmitter()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[1], i524.rateOverTime)
  i524.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[2], i524.rateOverDistance)
  var i527 = i525[3]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i527[i + 0]) );
  }
  i524.bursts = i526
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemBurst()
  var i531 = data
  i530.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[0], i530.count)
  i530.cycleCount = i531[1]
  i530.minCount = i531[2]
  i530.maxCount = i531[3]
  i530.repeatInterval = i531[4]
  i530.time = i531[5]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemRotationBySpeed()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[1], i532.x)
  i532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[2], i532.y)
  i532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[3], i532.z)
  i532.separateAxes = !!i533[4]
  i532.range = new pc.Vec2( i533[5], i533[6] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemRotationOverLifetime()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[1], i534.x)
  i534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[2], i534.y)
  i534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[3], i534.z)
  i534.separateAxes = !!i535[4]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemShape()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.shapeType = i537[1]
  i536.randomDirectionAmount = i537[2]
  i536.sphericalDirectionAmount = i537[3]
  i536.randomPositionAmount = i537[4]
  i536.alignToDirection = !!i537[5]
  i536.radius = i537[6]
  i536.radiusMode = i537[7]
  i536.radiusSpread = i537[8]
  i536.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[9], i536.radiusSpeed)
  i536.radiusThickness = i537[10]
  i536.angle = i537[11]
  i536.length = i537[12]
  i536.boxThickness = new pc.Vec3( i537[13], i537[14], i537[15] )
  i536.meshShapeType = i537[16]
  request.r(i537[17], i537[18], 0, i536, 'mesh')
  request.r(i537[19], i537[20], 0, i536, 'meshRenderer')
  request.r(i537[21], i537[22], 0, i536, 'skinnedMeshRenderer')
  i536.useMeshMaterialIndex = !!i537[23]
  i536.meshMaterialIndex = i537[24]
  i536.useMeshColors = !!i537[25]
  i536.normalOffset = i537[26]
  i536.arc = i537[27]
  i536.arcMode = i537[28]
  i536.arcSpread = i537[29]
  i536.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[30], i536.arcSpeed)
  i536.donutRadius = i537[31]
  i536.position = new pc.Vec3( i537[32], i537[33], i537[34] )
  i536.rotation = new pc.Vec3( i537[35], i537[36], i537[37] )
  i536.scale = new pc.Vec3( i537[38], i537[39], i537[40] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemSizeBySpeed()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[1], i538.x)
  i538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.y)
  i538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.z)
  i538.separateAxes = !!i539[4]
  i538.range = new pc.Vec2( i539[5], i539[6] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemSizeOverLifetime()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[1], i540.x)
  i540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.y)
  i540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.z)
  i540.separateAxes = !!i541[4]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.mode = i543[1]
  i542.animation = i543[2]
  i542.numTilesX = i543[3]
  i542.numTilesY = i543[4]
  i542.useRandomRow = !!i543[5]
  i542.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[6], i542.frameOverTime)
  i542.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[7], i542.startFrame)
  i542.cycleCount = i543[8]
  i542.rowIndex = i543[9]
  i542.flipU = i543[10]
  i542.flipV = i543[11]
  i542.spriteCount = i543[12]
  var i545 = i543[13]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.sprites = i544
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.x)
  i548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.y)
  i548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[3], i548.z)
  i548.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[4], i548.radial)
  i548.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[5], i548.speedModifier)
  i548.space = i549[6]
  i548.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[7], i548.orbitalX)
  i548.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[8], i548.orbitalY)
  i548.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[9], i548.orbitalZ)
  i548.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[10], i548.orbitalOffsetX)
  i548.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[11], i548.orbitalOffsetY)
  i548.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[12], i548.orbitalOffsetZ)
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemNoise()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.separateAxes = !!i551[1]
  i550.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[2], i550.strengthX)
  i550.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[3], i550.strengthY)
  i550.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[4], i550.strengthZ)
  i550.frequency = i551[5]
  i550.damping = !!i551[6]
  i550.octaveCount = i551[7]
  i550.octaveMultiplier = i551[8]
  i550.octaveScale = i551[9]
  i550.quality = i551[10]
  i550.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[11], i550.scrollSpeed)
  i550.scrollSpeedMultiplier = i551[12]
  i550.remapEnabled = !!i551[13]
  i550.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[14], i550.remapX)
  i550.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[15], i550.remapY)
  i550.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[16], i550.remapZ)
  i550.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[17], i550.positionAmount)
  i550.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[18], i550.rotationAmount)
  i550.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[19], i550.sizeAmount)
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemInheritVelocity()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.mode = i553[1]
  i552.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.curve)
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemForceOverLifetime()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.space = i555[4]
  i554.randomized = !!i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.limit)
  i556.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.limitX)
  i556.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.limitY)
  i556.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[4], i556.limitZ)
  i556.dampen = i557[5]
  i556.separateAxes = !!i557[6]
  i556.space = i557[7]
  i556.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[8], i556.drag)
  i556.multiplyDragByParticleSize = !!i557[9]
  i556.multiplyDragByParticleVelocity = !!i557[10]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i559 = data
  i558.enabled = !!i559[0]
  request.r(i559[1], i559[2], 0, i558, 'sharedMaterial')
  var i561 = i559[3]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558.sharedMaterials = i560
  i558.receiveShadows = !!i559[4]
  i558.shadowCastingMode = i559[5]
  i558.sortingLayerID = i559[6]
  i558.sortingOrder = i559[7]
  i558.lightmapIndex = i559[8]
  i558.lightmapSceneIndex = i559[9]
  i558.lightmapScaleOffset = new pc.Vec4( i559[10], i559[11], i559[12], i559[13] )
  i558.lightProbeUsage = i559[14]
  i558.reflectionProbeUsage = i559[15]
  request.r(i559[16], i559[17], 0, i558, 'mesh')
  i558.meshCount = i559[18]
  i558.activeVertexStreamsCount = i559[19]
  i558.alignment = i559[20]
  i558.renderMode = i559[21]
  i558.sortMode = i559[22]
  i558.lengthScale = i559[23]
  i558.velocityScale = i559[24]
  i558.cameraVelocityScale = i559[25]
  i558.normalDirection = i559[26]
  i558.sortingFudge = i559[27]
  i558.minParticleSize = i559[28]
  i558.maxParticleSize = i559[29]
  i558.pivot = new pc.Vec3( i559[30], i559[31], i559[32] )
  request.r(i559[33], i559[34], 0, i558, 'trailMaterial')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i565 = data
  i564.name = i565[0]
  i564.tagId = i565[1]
  i564.enabled = !!i565[2]
  i564.isStatic = !!i565[3]
  i564.layer = i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i566 = root || new pc.UnityMaterial()
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'shader')
  i566.renderQueue = i567[3]
  i566.enableInstancing = !!i567[4]
  var i569 = i567[5]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i569[i + 0]) );
  }
  i566.floatParameters = i568
  var i571 = i567[6]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i571[i + 0]) );
  }
  i566.colorParameters = i570
  var i573 = i567[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i573[i + 0]) );
  }
  i566.vectorParameters = i572
  var i575 = i567[8]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i575[i + 0]) );
  }
  i566.textureParameters = i574
  var i577 = i567[9]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i577[i + 0]) );
  }
  i566.materialFlags = i576
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Color(i585[1], i585[2], i585[3], i585[4])
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = new pc.Vec4( i589[1], i589[2], i589[3], i589[4] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'value')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i597 = data
  i596.name = i597[0]
  i596.enabled = !!i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i599 = data
  i598.name = i599[0]
  i598.halfPrecision = !!i599[1]
  i598.useUInt32IndexFormat = !!i599[2]
  i598.vertexCount = i599[3]
  i598.aabb = i599[4]
  var i601 = i599[5]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( !!i601[i + 0] );
  }
  i598.streams = i600
  i598.vertices = i599[6]
  var i603 = i599[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i603[i + 0]) );
  }
  i598.subMeshes = i602
  var i605 = i599[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 16) {
    i604.push( new pc.Mat4().setData(i605[i + 0], i605[i + 1], i605[i + 2], i605[i + 3],  i605[i + 4], i605[i + 5], i605[i + 6], i605[i + 7],  i605[i + 8], i605[i + 9], i605[i + 10], i605[i + 11],  i605[i + 12], i605[i + 13], i605[i + 14], i605[i + 15]) );
  }
  i598.bindposes = i604
  var i607 = i599[9]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i607[i + 0]) );
  }
  i598.blendShapes = i606
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i613 = data
  i612.triangles = i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i619 = data
  i618.name = i619[0]
  var i621 = i619[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i621[i + 0]) );
  }
  i618.frames = i620
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'clip')
  request.r(i623[2], i623[3], 0, i622, 'outputAudioMixerGroup')
  i622.playOnAwake = !!i623[4]
  i622.loop = !!i623[5]
  i622.time = i623[6]
  i622.volume = i623[7]
  i622.pitch = i623[8]
  i622.enabled = !!i623[9]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i625 = data
  i624.pivot = new pc.Vec2( i625[0], i625[1] )
  i624.anchorMin = new pc.Vec2( i625[2], i625[3] )
  i624.anchorMax = new pc.Vec2( i625[4], i625[5] )
  i624.sizeDelta = new pc.Vec2( i625[6], i625[7] )
  i624.anchoredPosition3D = new pc.Vec3( i625[8], i625[9], i625[10] )
  i624.rotation = new pc.Quat(i625[11], i625[12], i625[13], i625[14])
  i624.scale = new pc.Vec3( i625[15], i625[16], i625[17] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i627 = data
  i626.cullTransparentMesh = !!i627[0]
  return i626
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Image' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Sprite')
  i628.m_Type = i629[2]
  i628.m_PreserveAspect = !!i629[3]
  i628.m_FillCenter = !!i629[4]
  i628.m_FillMethod = i629[5]
  i628.m_FillAmount = i629[6]
  i628.m_FillClockwise = !!i629[7]
  i628.m_FillOrigin = i629[8]
  i628.m_UseSpriteMesh = !!i629[9]
  i628.m_PixelsPerUnitMultiplier = i629[10]
  request.r(i629[11], i629[12], 0, i628, 'm_Material')
  i628.m_Maskable = !!i629[13]
  i628.m_Color = new pc.Color(i629[14], i629[15], i629[16], i629[17])
  i628.m_RaycastTarget = !!i629[18]
  i628.m_RaycastPadding = new pc.Vec4( i629[19], i629[20], i629[21], i629[22] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i631 = data
  i630.m_Alpha = i631[0]
  i630.m_Interactable = !!i631[1]
  i630.m_BlocksRaycasts = !!i631[2]
  i630.m_IgnoreParentGroups = !!i631[3]
  i630.enabled = !!i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i633 = data
  i632.name = i633[0]
  i632.index = i633[1]
  i632.startup = !!i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i635 = data
  i634.enabled = !!i635[0]
  i634.aspect = i635[1]
  i634.orthographic = !!i635[2]
  i634.orthographicSize = i635[3]
  i634.backgroundColor = new pc.Color(i635[4], i635[5], i635[6], i635[7])
  i634.nearClipPlane = i635[8]
  i634.farClipPlane = i635[9]
  i634.fieldOfView = i635[10]
  i634.depth = i635[11]
  i634.clearFlags = i635[12]
  i634.cullingMask = i635[13]
  i634.rect = i635[14]
  request.r(i635[15], i635[16], 0, i634, 'targetTexture')
  i634.usePhysicalProperties = !!i635[17]
  i634.focalLength = i635[18]
  i634.sensorSize = new pc.Vec2( i635[19], i635[20] )
  i634.lensShift = new pc.Vec2( i635[21], i635[22] )
  i634.gateFit = i635[23]
  i634.commandBufferCount = i635[24]
  i634.cameraType = i635[25]
  return i634
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i637 = data
  i636.m_RenderShadows = !!i637[0]
  i636.m_RequiresDepthTextureOption = i637[1]
  i636.m_RequiresOpaqueTextureOption = i637[2]
  i636.m_CameraType = i637[3]
  var i639 = i637[4]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 1, i638, '')
  }
  i636.m_Cameras = i638
  i636.m_RendererIndex = i637[5]
  i636.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i637[6] )
  request.r(i637[7], i637[8], 0, i636, 'm_VolumeTrigger')
  i636.m_VolumeFrameworkUpdateModeOption = i637[9]
  i636.m_RenderPostProcessing = !!i637[10]
  i636.m_Antialiasing = i637[11]
  i636.m_AntialiasingQuality = i637[12]
  i636.m_StopNaN = !!i637[13]
  i636.m_Dithering = !!i637[14]
  i636.m_ClearDepth = !!i637[15]
  i636.m_AllowXRRendering = !!i637[16]
  i636.m_AllowHDROutput = !!i637[17]
  i636.m_UseScreenCoordOverride = !!i637[18]
  i636.m_ScreenSizeOverride = new pc.Vec4( i637[19], i637[20], i637[21], i637[22] )
  i636.m_ScreenCoordScaleBias = new pc.Vec4( i637[23], i637[24], i637[25], i637[26] )
  i636.m_RequiresDepthTexture = !!i637[27]
  i636.m_RequiresColorTexture = !!i637[28]
  i636.m_Version = i637[29]
  i636.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i637[30], i636.m_TaaSettings)
  return i636
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i643 = data
  i642.m_Quality = i643[0]
  i642.m_FrameInfluence = i643[1]
  i642.m_JitterScale = i643[2]
  i642.m_MipBias = i643[3]
  i642.m_VarianceClampScale = i643[4]
  i642.m_ContrastAdaptiveSharpening = i643[5]
  return i642
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i645 = data
  i644.m_ComponentVersion = i645[0]
  i644.m_LightType = i645[1]
  i644.m_BlendStyleIndex = i645[2]
  i644.m_FalloffIntensity = i645[3]
  i644.m_Color = new pc.Color(i645[4], i645[5], i645[6], i645[7])
  i644.m_Intensity = i645[8]
  i644.m_LightVolumeIntensity = i645[9]
  i644.m_LightVolumeIntensityEnabled = !!i645[10]
  i644.m_ApplyToSortingLayers = i645[11]
  request.r(i645[12], i645[13], 0, i644, 'm_LightCookieSprite')
  request.r(i645[14], i645[15], 0, i644, 'm_DeprecatedPointLightCookieSprite')
  i644.m_LightOrder = i645[16]
  i644.m_AlphaBlendOnOverlap = !!i645[17]
  i644.m_OverlapOperation = i645[18]
  i644.m_NormalMapDistance = i645[19]
  i644.m_NormalMapQuality = i645[20]
  i644.m_UseNormalMap = !!i645[21]
  i644.m_ShadowIntensityEnabled = !!i645[22]
  i644.m_ShadowIntensity = i645[23]
  i644.m_ShadowVolumeIntensityEnabled = !!i645[24]
  i644.m_ShadowVolumeIntensity = i645[25]
  i644.m_PointLightInnerAngle = i645[26]
  i644.m_PointLightOuterAngle = i645[27]
  i644.m_PointLightInnerRadius = i645[28]
  i644.m_PointLightOuterRadius = i645[29]
  i644.m_ShapeLightParametricSides = i645[30]
  i644.m_ShapeLightParametricAngleOffset = i645[31]
  i644.m_ShapeLightParametricRadius = i645[32]
  i644.m_ShapeLightFalloffSize = i645[33]
  i644.m_ShapeLightFalloffOffset = new pc.Vec2( i645[34], i645[35] )
  var i647 = i645[36]
  var i646 = []
  for(var i = 0; i < i647.length; i += 3) {
    i646.push( new pc.Vec3( i647[i + 0], i647[i + 1], i647[i + 2] ) );
  }
  i644.m_ShapePath = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i651 = data
  i650.enabled = !!i651[0]
  i650.planeDistance = i651[1]
  i650.referencePixelsPerUnit = i651[2]
  i650.isFallbackOverlay = !!i651[3]
  i650.renderMode = i651[4]
  i650.renderOrder = i651[5]
  i650.sortingLayerName = i651[6]
  i650.sortingOrder = i651[7]
  i650.scaleFactor = i651[8]
  request.r(i651[9], i651[10], 0, i650, 'worldCamera')
  i650.overrideSorting = !!i651[11]
  i650.pixelPerfect = !!i651[12]
  i650.targetDisplay = i651[13]
  i650.overridePixelPerfect = !!i651[14]
  return i650
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i653 = data
  i652.m_UiScaleMode = i653[0]
  i652.m_ReferencePixelsPerUnit = i653[1]
  i652.m_ScaleFactor = i653[2]
  i652.m_ReferenceResolution = new pc.Vec2( i653[3], i653[4] )
  i652.m_ScreenMatchMode = i653[5]
  i652.m_MatchWidthOrHeight = i653[6]
  i652.m_PhysicalUnit = i653[7]
  i652.m_FallbackScreenDPI = i653[8]
  i652.m_DefaultSpriteDPI = i653[9]
  i652.m_DynamicPixelsPerUnit = i653[10]
  i652.m_PresetInfoIsWorld = !!i653[11]
  return i652
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i655 = data
  i654.m_IgnoreReversedGraphics = !!i655[0]
  i654.m_BlockingObjects = i655[1]
  i654.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i655[2] )
  return i654
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Text' )
  var i657 = data
  i656.m_FontData = request.d('UnityEngine.UI.FontData', i657[0], i656.m_FontData)
  i656.m_Text = i657[1]
  request.r(i657[2], i657[3], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[4]
  i656.m_Color = new pc.Color(i657[5], i657[6], i657[7], i657[8])
  i656.m_RaycastTarget = !!i657[9]
  i656.m_RaycastPadding = new pc.Vec4( i657[10], i657[11], i657[12], i657[13] )
  return i656
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.FontData' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_Font')
  i658.m_FontSize = i659[2]
  i658.m_FontStyle = i659[3]
  i658.m_BestFit = !!i659[4]
  i658.m_MinSize = i659[5]
  i658.m_MaxSize = i659[6]
  i658.m_Alignment = i659[7]
  i658.m_AlignByGeometry = !!i659[8]
  i658.m_RichText = !!i659[9]
  i658.m_HorizontalOverflow = i659[10]
  i658.m_VerticalOverflow = i659[11]
  i658.m_LineSpacing = i659[12]
  return i658
}

Deserializers["Episode5"] = function (request, data, root) {
  var i660 = root || request.c( 'Episode5' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, '_card1_1_2')
  request.r(i661[2], i661[3], 0, i660, '_card1_2_2')
  request.r(i661[4], i661[5], 0, i660, '_card1_3_2')
  request.r(i661[6], i661[7], 0, i660, '_card1_1')
  request.r(i661[8], i661[9], 0, i660, '_card2_1')
  request.r(i661[10], i661[11], 0, i660, '_coinsText')
  request.r(i661[12], i661[13], 0, i660, '_particleSystem')
  return i660
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i662 = root || request.c( 'Episode4_1' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, '_cart1__2')
  request.r(i663[2], i663[3], 0, i662, '_cart2__2')
  request.r(i663[4], i663[5], 0, i662, '_cart3__2')
  request.r(i663[6], i663[7], 0, i662, '_cart1_1')
  request.r(i663[8], i663[9], 0, i662, '_cart2_1')
  request.r(i663[10], i663[11], 0, i662, '_cart3_1')
  request.r(i663[12], i663[13], 0, i662, '_arm')
  request.r(i663[14], i663[15], 0, i662, '_coinText')
  request.r(i663[16], i663[17], 0, i662, '_particleSystem')
  request.r(i663[18], i663[19], 0, i662, '_particleDragon')
  return i662
}

Deserializers["Episode1"] = function (request, data, root) {
  var i664 = root || request.c( 'Episode1' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, '_arm')
  request.r(i665[2], i665[3], 0, i664, '_points')
  request.r(i665[4], i665[5], 0, i664, '_unit')
  request.r(i665[6], i665[7], 0, i664, '_particleSystem')
  request.r(i665[8], i665[9], 0, i664, '_textCoins')
  request.r(i665[10], i665[11], 0, i664, '_textDamage')
  request.r(i665[12], i665[13], 0, i664, '_textHealth')
  request.r(i665[14], i665[15], 0, i664, '_textHealth2')
  request.r(i665[16], i665[17], 0, i664, '_textDamage2')
  i664.scaleDuration = i665[18]
  i664.moveDuration = i665[19]
  i664.targetScale = new pc.Vec3( i665[20], i665[21], i665[22] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'animatorController')
  request.r(i667[2], i667[3], 0, i666, 'avatar')
  i666.updateMode = i667[4]
  i666.hasTransformHierarchy = !!i667[5]
  i666.applyRootMotion = !!i667[6]
  var i669 = i667[7]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.humanBones = i668
  i666.enabled = !!i667[8]
  return i666
}

Deserializers["Card"] = function (request, data, root) {
  var i672 = root || request.c( 'Card' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_points')
  i672.scaleDuration = i673[2]
  i672.moveDuration = i673[3]
  i672.targetScale = new pc.Vec3( i673[4], i673[5], i673[6] )
  request.r(i673[7], i673[8], 0, i672, '_particleSystem')
  request.r(i673[9], i673[10], 0, i672, '_particleDragon')
  return i672
}

Deserializers["Episode4"] = function (request, data, root) {
  var i674 = root || request.c( 'Episode4' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_cardDragcone1_1')
  request.r(i675[2], i675[3], 0, i674, '_cardDragcone2_2')
  request.r(i675[4], i675[5], 0, i674, '_cardDragcone')
  request.r(i675[6], i675[7], 0, i674, '_arm3_3')
  request.r(i675[8], i675[9], 0, i674, '_shopButton')
  request.r(i675[10], i675[11], 0, i674, '_points')
  request.r(i675[12], i675[13], 0, i674, '_textCoins')
  i674.scaleDuration = i675[14]
  i674.moveDuration = i675[15]
  i674.targetScale = new pc.Vec3( i675[16], i675[17], i675[18] )
  return i674
}

Deserializers["Episode2"] = function (request, data, root) {
  var i676 = root || request.c( 'Episode2' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, '_arm')
  request.r(i677[2], i677[3], 0, i676, '_points')
  request.r(i677[4], i677[5], 0, i676, '_unit1')
  request.r(i677[6], i677[7], 0, i676, '_unit2')
  request.r(i677[8], i677[9], 0, i676, '_particleSystem1')
  request.r(i677[10], i677[11], 0, i676, '_particleSystem2')
  request.r(i677[12], i677[13], 0, i676, '_textCoins')
  request.r(i677[14], i677[15], 0, i676, '_textDamage')
  request.r(i677[16], i677[17], 0, i676, '_textHealth')
  request.r(i677[18], i677[19], 0, i676, '_textHealth2')
  request.r(i677[20], i677[21], 0, i676, '_textDamage2')
  i676.scaleDuration = i677[22]
  i676.moveDuration = i677[23]
  i676.targetScale = new pc.Vec3( i677[24], i677[25], i677[26] )
  return i676
}

Deserializers["Episode6"] = function (request, data, root) {
  var i678 = root || request.c( 'Episode6' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, '_arm')
  request.r(i679[2], i679[3], 0, i678, '_points')
  request.r(i679[4], i679[5], 0, i678, '_cart')
  request.r(i679[6], i679[7], 0, i678, '_cartPoint')
  request.r(i679[8], i679[9], 0, i678, '_coinsText')
  request.r(i679[10], i679[11], 0, i678, '_textDamage')
  request.r(i679[12], i679[13], 0, i678, '_textHealth')
  request.r(i679[14], i679[15], 0, i678, '_textHealth2')
  request.r(i679[16], i679[17], 0, i678, '_textDamage2')
  i678.scaleDuration = i679[18]
  i678.moveDuration = i679[19]
  i678.targetScale = new pc.Vec3( i679[20], i679[21], i679[22] )
  request.r(i679[23], i679[24], 0, i678, '_particleDragon')
  request.r(i679[25], i679[26], 0, i678, '_particleCards')
  return i678
}

Deserializers["Episode3"] = function (request, data, root) {
  var i680 = root || request.c( 'Episode3' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, '_battle')
  request.r(i681[2], i681[3], 0, i680, '_button')
  request.r(i681[4], i681[5], 0, i680, '_cardDracone')
  request.r(i681[6], i681[7], 0, i680, '_point')
  request.r(i681[8], i681[9], 0, i680, '_cardEnemye1')
  request.r(i681[10], i681[11], 0, i680, '_cardEnemye2')
  request.r(i681[12], i681[13], 0, i680, '_cardEnemye3')
  request.r(i681[14], i681[15], 0, i680, '_cardDragon1')
  request.r(i681[16], i681[17], 0, i680, '_cardDragon2')
  request.r(i681[18], i681[19], 0, i680, '_cardDragon3')
  request.r(i681[20], i681[21], 0, i680, '_particleSystem1')
  request.r(i681[22], i681[23], 0, i680, '_particleSystem2')
  request.r(i681[24], i681[25], 0, i680, '_particleSystem3')
  request.r(i681[26], i681[27], 0, i680, '_particleButton')
  request.r(i681[28], i681[29], 0, i680, '_textCoins')
  request.r(i681[30], i681[31], 0, i680, '_winVictoty')
  request.r(i681[32], i681[33], 0, i680, '_winInscription')
  request.r(i681[34], i681[35], 0, i680, '_winInscription2')
  request.r(i681[36], i681[37], 0, i680, '_winInscription3')
  request.r(i681[38], i681[39], 0, i680, '_parentsDisplay')
  return i680
}

Deserializers["Episode7"] = function (request, data, root) {
  var i682 = root || request.c( 'Episode7' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, '_battle')
  request.r(i683[2], i683[3], 0, i682, '_button')
  request.r(i683[4], i683[5], 0, i682, '_cardEnemye1')
  request.r(i683[6], i683[7], 0, i682, '_cardEnemye2')
  request.r(i683[8], i683[9], 0, i682, '_cardEnemye3')
  request.r(i683[10], i683[11], 0, i682, '_cardEnemye4')
  request.r(i683[12], i683[13], 0, i682, '_cardEnemye5')
  request.r(i683[14], i683[15], 0, i682, '_cardEnemye6')
  request.r(i683[16], i683[17], 0, i682, '_cardDragon1')
  request.r(i683[18], i683[19], 0, i682, '_cardDragon2')
  request.r(i683[20], i683[21], 0, i682, '_cardDragon3')
  request.r(i683[22], i683[23], 0, i682, '_particleSystem1')
  request.r(i683[24], i683[25], 0, i682, '_particleSystem2')
  request.r(i683[26], i683[27], 0, i682, '_particleSystem3')
  request.r(i683[28], i683[29], 0, i682, '_particleSystem4')
  request.r(i683[30], i683[31], 0, i682, '_particleSystem5')
  request.r(i683[32], i683[33], 0, i682, '_particleSystem6')
  request.r(i683[34], i683[35], 0, i682, '_winVictoty')
  request.r(i683[36], i683[37], 0, i682, '_winFinal')
  request.r(i683[38], i683[39], 0, i682, '_particleSystem')
  request.r(i683[40], i683[41], 0, i682, '_particleDragon')
  request.r(i683[42], i683[43], 0, i682, '_episode3')
  return i682
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i684 = root || request.c( 'Episode4_2' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, '_battle')
  request.r(i685[2], i685[3], 0, i684, '_button')
  request.r(i685[4], i685[5], 0, i684, '_cardEnemye1')
  request.r(i685[6], i685[7], 0, i684, '_cardEnemye2')
  request.r(i685[8], i685[9], 0, i684, '_cardEnemye3')
  request.r(i685[10], i685[11], 0, i684, '_cardDracone1')
  request.r(i685[12], i685[13], 0, i684, '_cardDracone2')
  request.r(i685[14], i685[15], 0, i684, '_cardDracone3')
  request.r(i685[16], i685[17], 0, i684, '_winDefeat')
  request.r(i685[18], i685[19], 0, i684, '_winFinal')
  request.r(i685[20], i685[21], 0, i684, '_particleSystem1')
  request.r(i685[22], i685[23], 0, i684, '_particleSystem2')
  request.r(i685[24], i685[25], 0, i684, '_particleSystem3')
  request.r(i685[26], i685[27], 0, i684, '_particleSystem4')
  request.r(i685[28], i685[29], 0, i684, '_particleSystem5')
  request.r(i685[30], i685[31], 0, i684, '_particleSystem6')
  request.r(i685[32], i685[33], 0, i684, '_particleSystem7')
  request.r(i685[34], i685[35], 0, i684, '_particleButtun')
  request.r(i685[36], i685[37], 0, i684, '_particleDragon')
  request.r(i685[38], i685[39], 0, i684, '_layer')
  request.r(i685[40], i685[41], 0, i684, '_winInscription')
  request.r(i685[42], i685[43], 0, i684, '_winInscription2')
  request.r(i685[44], i685[45], 0, i684, '_winInscription3')
  return i684
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i686 = root || request.c( 'Episode5_2' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_battle')
  request.r(i687[2], i687[3], 0, i686, '_button')
  request.r(i687[4], i687[5], 0, i686, '_cardEnemye1')
  request.r(i687[6], i687[7], 0, i686, '_cardEnemye2')
  request.r(i687[8], i687[9], 0, i686, '_cardEnemye3')
  request.r(i687[10], i687[11], 0, i686, '_cardDracone1')
  request.r(i687[12], i687[13], 0, i686, '_cardDracone2')
  request.r(i687[14], i687[15], 0, i686, '_cardDracone3')
  request.r(i687[16], i687[17], 0, i686, '_cardDracone4')
  request.r(i687[18], i687[19], 0, i686, '_winDefeat')
  request.r(i687[20], i687[21], 0, i686, '_winFinal')
  request.r(i687[22], i687[23], 0, i686, '_particleSystem1')
  request.r(i687[24], i687[25], 0, i686, '_particleSystem2')
  request.r(i687[26], i687[27], 0, i686, '_particleSystem3')
  request.r(i687[28], i687[29], 0, i686, '_particleSystem4')
  request.r(i687[30], i687[31], 0, i686, '_particleSystem5')
  request.r(i687[32], i687[33], 0, i686, '_particleSystem6')
  request.r(i687[34], i687[35], 0, i686, '_particleSystem7')
  request.r(i687[36], i687[37], 0, i686, '_particleSystem')
  request.r(i687[38], i687[39], 0, i686, '_layer')
  request.r(i687[40], i687[41], 0, i686, '_winInscription')
  request.r(i687[42], i687[43], 0, i686, '_winInscription2')
  request.r(i687[44], i687[45], 0, i686, '_winInscription3')
  return i686
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i688 = root || request.c( 'ArmAnimation' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, '_targetButton')
  i688.flyDuration = i689[2]
  i688.shrinkDuration = i689[3]
  i688.restoreDuration = i689[4]
  return i688
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_FirstSelected')
  i690.m_sendNavigationEvents = !!i691[2]
  i690.m_DragThreshold = i691[3]
  return i690
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i693 = data
  i692.m_HorizontalAxis = i693[0]
  i692.m_VerticalAxis = i693[1]
  i692.m_SubmitButton = i693[2]
  i692.m_CancelButton = i693[3]
  i692.m_InputActionsPerSecond = i693[4]
  i692.m_RepeatDelay = i693[5]
  i692.m_ForceModuleActive = !!i693[6]
  i692.m_SendPointerHoverToParent = !!i693[7]
  return i692
}

Deserializers["Scenario"] = function (request, data, root) {
  var i694 = root || request.c( 'Scenario' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, '_episode1')
  request.r(i695[2], i695[3], 0, i694, '_episode2')
  request.r(i695[4], i695[5], 0, i694, '_episode3')
  request.r(i695[6], i695[7], 0, i694, '_episode4')
  request.r(i695[8], i695[9], 0, i694, '_episode4_1')
  request.r(i695[10], i695[11], 0, i694, '_episode4_2')
  request.r(i695[12], i695[13], 0, i694, '_episode5')
  request.r(i695[14], i695[15], 0, i694, '_episode5_1')
  request.r(i695[16], i695[17], 0, i694, '_episode6')
  request.r(i695[18], i695[19], 0, i694, '_episode7')
  request.r(i695[20], i695[21], 0, i694, '_card1__1')
  request.r(i695[22], i695[23], 0, i694, '_card1__2')
  request.r(i695[24], i695[25], 0, i694, '_card1__3')
  request.r(i695[26], i695[27], 0, i694, '_coinsText')
  return i694
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i696 = root || request.c( 'Episode5_1' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, '_card1')
  request.r(i697[2], i697[3], 0, i696, '_card2')
  request.r(i697[4], i697[5], 0, i696, '_episode5')
  request.r(i697[6], i697[7], 0, i696, 'episode4_1')
  request.r(i697[8], i697[9], 0, i696, 'episode5_2')
  request.r(i697[10], i697[11], 0, i696, '_texCoins')
  request.r(i697[12], i697[13], 0, i696, '_particleSystem')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i699 = data
  i698.ambientIntensity = i699[0]
  i698.reflectionIntensity = i699[1]
  i698.ambientMode = i699[2]
  i698.ambientLight = new pc.Color(i699[3], i699[4], i699[5], i699[6])
  i698.ambientSkyColor = new pc.Color(i699[7], i699[8], i699[9], i699[10])
  i698.ambientGroundColor = new pc.Color(i699[11], i699[12], i699[13], i699[14])
  i698.ambientEquatorColor = new pc.Color(i699[15], i699[16], i699[17], i699[18])
  i698.fogColor = new pc.Color(i699[19], i699[20], i699[21], i699[22])
  i698.fogEndDistance = i699[23]
  i698.fogStartDistance = i699[24]
  i698.fogDensity = i699[25]
  i698.fog = !!i699[26]
  request.r(i699[27], i699[28], 0, i698, 'skybox')
  i698.fogMode = i699[29]
  var i701 = i699[30]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i701[i + 0]) );
  }
  i698.lightmaps = i700
  i698.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i699[31], i698.lightProbes)
  i698.lightmapsMode = i699[32]
  i698.mixedBakeMode = i699[33]
  i698.environmentLightingMode = i699[34]
  i698.ambientProbe = new pc.SphericalHarmonicsL2(i699[35])
  i698.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i699[36])
  i698.useReferenceAmbientProbe = !!i699[37]
  request.r(i699[38], i699[39], 0, i698, 'customReflection')
  request.r(i699[40], i699[41], 0, i698, 'defaultReflection')
  i698.defaultReflectionMode = i699[42]
  i698.defaultReflectionResolution = i699[43]
  i698.sunLightObjectId = i699[44]
  i698.pixelLightCount = i699[45]
  i698.defaultReflectionHDR = !!i699[46]
  i698.hasLightDataAsset = !!i699[47]
  i698.hasManualGenerate = !!i699[48]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'lightmapColor')
  request.r(i705[2], i705[3], 0, i704, 'lightmapDirection')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i706 = root || new UnityEngine.LightProbes()
  var i707 = data
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i713 = data
  i712.enabled = !!i713[0]
  i712.type = i713[1]
  i712.color = new pc.Color(i713[2], i713[3], i713[4], i713[5])
  i712.cullingMask = i713[6]
  i712.intensity = i713[7]
  i712.range = i713[8]
  i712.spotAngle = i713[9]
  i712.shadows = i713[10]
  i712.shadowNormalBias = i713[11]
  i712.shadowBias = i713[12]
  i712.shadowStrength = i713[13]
  i712.shadowResolution = i713[14]
  i712.lightmapBakeType = i713[15]
  i712.renderMode = i713[16]
  request.r(i713[17], i713[18], 0, i712, 'cookie')
  i712.cookieSize = i713[19]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i715 = data
  i714.AdditionalLightsPerObjectLimit = i715[0]
  i714.AdditionalLightsRenderingMode = i715[1]
  i714.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i715[2], i714.LightRenderingMode)
  i714.ColorGradingLutSize = i715[3]
  i714.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i715[4], i714.ColorGradingMode)
  i714.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i715[5], i714.MainLightRenderingMode)
  i714.MainLightRenderingModeValue = i715[6]
  i714.MainLightShadowsSupported = !!i715[7]
  i714.MixedLightingSupported = !!i715[8]
  i714.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i715[9], i714.MsaaQuality)
  i714.MSAA = i715[10]
  i714.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i715[11], i714.OpaqueDownsampling)
  i714.RenderScale = i715[12]
  i714.RequireDepthTexture = !!i715[13]
  i714.RequireOpaqueTexture = !!i715[14]
  i714.ShadowAtlasResolution = i715[15]
  i714.ShadowDepthBias = i715[16]
  i714.SupportsHDR = !!i715[17]
  i714.SupportsTerrainHoles = !!i715[18]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i717 = data
  i716.Disabled = i717[0]
  i716.PerVertex = i717[1]
  i716.PerPixel = i717[2]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i719 = data
  i718.LowDynamicRange = i719[0]
  i718.HighDynamicRange = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i721 = data
  i720.Disabled = i721[0]
  i720._2x = i721[1]
  i720._4x = i721[2]
  i720._8x = i721[3]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i723 = data
  i722.None = i723[0]
  i722._2xBilinear = i723[1]
  i722._4xBox = i723[2]
  i722._4xBilinear = i723[3]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i725 = data
  var i727 = i725[0]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i727[i + 0]));
  }
  i724.ShaderCompilationErrors = i726
  i724.name = i725[1]
  i724.guid = i725[2]
  var i729 = i725[3]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i724.shaderDefinedKeywords = i728
  var i731 = i725[4]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i731[i + 0]) );
  }
  i724.passes = i730
  var i733 = i725[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i733[i + 0]) );
  }
  i724.usePasses = i732
  var i735 = i725[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i735[i + 0]) );
  }
  i724.defaultParameterValues = i734
  request.r(i725[7], i725[8], 0, i724, 'unityFallbackShader')
  i724.readDepth = !!i725[9]
  i724.isCreatedByShaderGraph = !!i725[10]
  i724.compiled = !!i725[11]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i739 = data
  i738.shaderName = i739[0]
  i738.errorMessage = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i744 = root || new pc.UnityShaderPass()
  var i745 = data
  i744.id = i745[0]
  i744.subShaderIndex = i745[1]
  i744.name = i745[2]
  i744.passType = i745[3]
  i744.grabPassTextureName = i745[4]
  i744.usePass = !!i745[5]
  i744.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[6], i744.zTest)
  i744.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[7], i744.zWrite)
  i744.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[8], i744.culling)
  i744.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i745[9], i744.blending)
  i744.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i745[10], i744.alphaBlending)
  i744.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[11], i744.colorWriteMask)
  i744.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[12], i744.offsetUnits)
  i744.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[13], i744.offsetFactor)
  i744.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[14], i744.stencilRef)
  i744.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[15], i744.stencilReadMask)
  i744.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[16], i744.stencilWriteMask)
  i744.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[17], i744.stencilOp)
  i744.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[18], i744.stencilOpFront)
  i744.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[19], i744.stencilOpBack)
  var i747 = i745[20]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i747[i + 0]) );
  }
  i744.tags = i746
  var i749 = i745[21]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i744.passDefinedKeywords = i748
  var i751 = i745[22]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i751[i + 0]) );
  }
  i744.passDefinedKeywordGroups = i750
  var i753 = i745[23]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i753[i + 0]) );
  }
  i744.variants = i752
  var i755 = i745[24]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i755[i + 0]) );
  }
  i744.excludedVariants = i754
  i744.hasDepthReader = !!i745[25]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i757 = data
  i756.val = i757[0]
  i756.name = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i759 = data
  i758.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[0], i758.src)
  i758.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[1], i758.dst)
  i758.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[2], i758.op)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i761 = data
  i760.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[0], i760.pass)
  i760.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[1], i760.fail)
  i760.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[2], i760.zFail)
  i760.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[3], i760.comp)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i765 = data
  i764.name = i765[0]
  i764.value = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i768.keywords = i770
  i768.hasDiscard = !!i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i775 = data
  i774.passId = i775[0]
  i774.subShaderIndex = i775[1]
  var i777 = i775[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i774.keywords = i776
  i774.vertexProgram = i775[3]
  i774.fragmentProgram = i775[4]
  i774.exportedForWebGl2 = !!i775[5]
  i774.readDepth = !!i775[6]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'shader')
  i780.pass = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i785 = data
  i784.name = i785[0]
  i784.type = i785[1]
  i784.value = new pc.Vec4( i785[2], i785[3], i785[4], i785[5] )
  i784.textureValue = i785[6]
  i784.shaderPropertyFlag = i785[7]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'texture')
  i786.aabb = i787[3]
  i786.vertices = i787[4]
  i786.triangles = i787[5]
  i786.textureRect = UnityEngine.Rect.MinMaxRect(i787[6], i787[7], i787[8], i787[9])
  i786.packedRect = UnityEngine.Rect.MinMaxRect(i787[10], i787[11], i787[12], i787[13])
  i786.border = new pc.Vec4( i787[14], i787[15], i787[16], i787[17] )
  i786.transparency = i787[18]
  i786.bounds = i787[19]
  i786.pixelsPerUnit = i787[20]
  i786.textureWidth = i787[21]
  i786.textureHeight = i787[22]
  i786.nativeSize = new pc.Vec2( i787[23], i787[24] )
  i786.pivot = new pc.Vec2( i787[25], i787[26] )
  i786.textureRectOffset = new pc.Vec2( i787[27], i787[28] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i789 = data
  i788.name = i789[0]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i791 = data
  i790.name = i791[0]
  i790.wrapMode = i791[1]
  i790.isLooping = !!i791[2]
  i790.length = i791[3]
  var i793 = i791[4]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i793[i + 0]) );
  }
  i790.curves = i792
  var i795 = i791[5]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i795[i + 0]) );
  }
  i790.events = i794
  i790.halfPrecision = !!i791[6]
  i790._frameRate = i791[7]
  i790.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i791[8], i790.localBounds)
  i790.hasMuscleCurves = !!i791[9]
  var i797 = i791[10]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i790.clipMuscleConstant = i796
  i790.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i791[11], i790.clipBindingConstant)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i801 = data
  i800.path = i801[0]
  i800.hash = i801[1]
  i800.componentType = i801[2]
  i800.property = i801[3]
  i800.keys = i801[4]
  var i803 = i801[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i803[i + 0]) );
  }
  i800.objectReferenceKeys = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i807 = data
  i806.time = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'value')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i811 = data
  i810.functionName = i811[0]
  i810.floatParameter = i811[1]
  i810.intParameter = i811[2]
  i810.stringParameter = i811[3]
  request.r(i811[4], i811[5], 0, i810, 'objectReferenceParameter')
  i810.time = i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i813 = data
  i812.center = new pc.Vec3( i813[0], i813[1], i813[2] )
  i812.extends = new pc.Vec3( i813[3], i813[4], i813[5] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.genericBindings = i818
  var i821 = i817[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i816.pptrCurveMapping = i820
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i823 = data
  i822.name = i823[0]
  i822.ascent = i823[1]
  i822.originalLineHeight = i823[2]
  i822.fontSize = i823[3]
  var i825 = i823[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i825[i + 0]) );
  }
  i822.characterInfo = i824
  request.r(i823[5], i823[6], 0, i822, 'texture')
  i822.originalFontSize = i823[7]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i829 = data
  i828.index = i829[0]
  i828.advance = i829[1]
  i828.bearing = i829[2]
  i828.glyphWidth = i829[3]
  i828.glyphHeight = i829[4]
  i828.minX = i829[5]
  i828.maxX = i829[6]
  i828.minY = i829[7]
  i828.maxY = i829[8]
  i828.uvBottomLeftX = i829[9]
  i828.uvBottomLeftY = i829[10]
  i828.uvBottomRightX = i829[11]
  i828.uvBottomRightY = i829[12]
  i828.uvTopLeftX = i829[13]
  i828.uvTopLeftY = i829[14]
  i828.uvTopRightX = i829[15]
  i828.uvTopRightY = i829[16]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i831 = data
  i830.name = i831[0]
  var i833 = i831[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i833[i + 0]) );
  }
  i830.layers = i832
  var i835 = i831[2]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i835[i + 0]) );
  }
  i830.parameters = i834
  i830.animationClips = i831[3]
  i830.avatarUnsupported = i831[4]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i839 = data
  i838.name = i839[0]
  i838.defaultWeight = i839[1]
  i838.blendingMode = i839[2]
  i838.avatarMask = i839[3]
  i838.syncedLayerIndex = i839[4]
  i838.syncedLayerAffectsTiming = !!i839[5]
  i838.syncedLayers = i839[6]
  i838.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i839[7], i838.stateMachine)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i841 = data
  i840.id = i841[0]
  i840.name = i841[1]
  i840.path = i841[2]
  var i843 = i841[3]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i843[i + 0]) );
  }
  i840.states = i842
  var i845 = i841[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i845[i + 0]) );
  }
  i840.machines = i844
  var i847 = i841[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i847[i + 0]) );
  }
  i840.entryStateTransitions = i846
  var i849 = i841[6]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i849[i + 0]) );
  }
  i840.exitStateTransitions = i848
  var i851 = i841[7]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i851[i + 0]) );
  }
  i840.anyStateTransitions = i850
  i840.defaultStateId = i841[8]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i855 = data
  i854.id = i855[0]
  i854.name = i855[1]
  i854.cycleOffset = i855[2]
  i854.cycleOffsetParameter = i855[3]
  i854.cycleOffsetParameterActive = !!i855[4]
  i854.mirror = !!i855[5]
  i854.mirrorParameter = i855[6]
  i854.mirrorParameterActive = !!i855[7]
  i854.motionId = i855[8]
  i854.nameHash = i855[9]
  i854.fullPathHash = i855[10]
  i854.speed = i855[11]
  i854.speedParameter = i855[12]
  i854.speedParameterActive = !!i855[13]
  i854.tag = i855[14]
  i854.tagHash = i855[15]
  i854.writeDefaultValues = !!i855[16]
  var i857 = i855[17]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.behaviours = i856
  var i859 = i855[18]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i859[i + 0]) );
  }
  i854.transitions = i858
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i865 = data
  i864.fullPath = i865[0]
  i864.canTransitionToSelf = !!i865[1]
  i864.duration = i865[2]
  i864.exitTime = i865[3]
  i864.hasExitTime = !!i865[4]
  i864.hasFixedDuration = !!i865[5]
  i864.interruptionSource = i865[6]
  i864.offset = i865[7]
  i864.orderedInterruption = !!i865[8]
  i864.destinationStateId = i865[9]
  i864.isExit = !!i865[10]
  i864.mute = !!i865[11]
  i864.solo = !!i865[12]
  var i867 = i865[13]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i867[i + 0]) );
  }
  i864.conditions = i866
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i873 = data
  i872.destinationStateId = i873[0]
  i872.isExit = !!i873[1]
  i872.mute = !!i873[2]
  i872.solo = !!i873[3]
  var i875 = i873[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i875[i + 0]) );
  }
  i872.conditions = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i879 = data
  i878.defaultBool = !!i879[0]
  i878.defaultFloat = i879[1]
  i878.defaultInt = i879[2]
  i878.name = i879[3]
  i878.nameHash = i879[4]
  i878.type = i879[5]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i883[i + 0]) );
  }
  i880.files = i882
  i880.componentToPrefabIds = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i887 = data
  i886.path = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'unityObject')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i891[i + 0]) );
  }
  i888.scriptsExecutionOrder = i890
  var i893 = i889[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i893[i + 0]) );
  }
  i888.sortingLayers = i892
  var i895 = i889[2]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i895[i + 0]) );
  }
  i888.cullingLayers = i894
  i888.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i889[3], i888.timeSettings)
  i888.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i889[4], i888.physicsSettings)
  i888.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i889[5], i888.physics2DSettings)
  i888.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i889[6], i888.qualitySettings)
  i888.enableRealtimeShadows = !!i889[7]
  i888.enableAutoInstancing = !!i889[8]
  i888.enableDynamicBatching = !!i889[9]
  i888.lightmapEncodingQuality = i889[10]
  i888.desiredColorSpace = i889[11]
  var i897 = i889[12]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i888.allTags = i896
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i901 = data
  i900.name = i901[0]
  i900.value = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i905 = data
  i904.id = i905[0]
  i904.name = i905[1]
  i904.value = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i909 = data
  i908.id = i909[0]
  i908.name = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i911 = data
  i910.fixedDeltaTime = i911[0]
  i910.maximumDeltaTime = i911[1]
  i910.timeScale = i911[2]
  i910.maximumParticleTimestep = i911[3]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i913 = data
  i912.gravity = new pc.Vec3( i913[0], i913[1], i913[2] )
  i912.defaultSolverIterations = i913[3]
  i912.bounceThreshold = i913[4]
  i912.autoSyncTransforms = !!i913[5]
  i912.autoSimulation = !!i913[6]
  var i915 = i913[7]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i915[i + 0]) );
  }
  i912.collisionMatrix = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i919 = data
  i918.enabled = !!i919[0]
  i918.layerId = i919[1]
  i918.otherLayerId = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'material')
  i920.gravity = new pc.Vec2( i921[2], i921[3] )
  i920.positionIterations = i921[4]
  i920.velocityIterations = i921[5]
  i920.velocityThreshold = i921[6]
  i920.maxLinearCorrection = i921[7]
  i920.maxAngularCorrection = i921[8]
  i920.maxTranslationSpeed = i921[9]
  i920.maxRotationSpeed = i921[10]
  i920.baumgarteScale = i921[11]
  i920.baumgarteTOIScale = i921[12]
  i920.timeToSleep = i921[13]
  i920.linearSleepTolerance = i921[14]
  i920.angularSleepTolerance = i921[15]
  i920.defaultContactOffset = i921[16]
  i920.autoSimulation = !!i921[17]
  i920.queriesHitTriggers = !!i921[18]
  i920.queriesStartInColliders = !!i921[19]
  i920.callbacksOnDisable = !!i921[20]
  i920.reuseCollisionCallbacks = !!i921[21]
  i920.autoSyncTransforms = !!i921[22]
  var i923 = i921[23]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i923[i + 0]) );
  }
  i920.collisionMatrix = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i927 = data
  i926.enabled = !!i927[0]
  i926.layerId = i927[1]
  i926.otherLayerId = i927[2]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i931[i + 0]) );
  }
  i928.qualityLevels = i930
  var i933 = i929[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i928.names = i932
  i928.shadows = i929[2]
  i928.anisotropicFiltering = i929[3]
  i928.antiAliasing = i929[4]
  i928.lodBias = i929[5]
  i928.shadowCascades = i929[6]
  i928.shadowDistance = i929[7]
  i928.shadowmaskMode = i929[8]
  i928.shadowProjection = i929[9]
  i928.shadowResolution = i929[10]
  i928.softParticles = !!i929[11]
  i928.softVegetation = !!i929[12]
  i928.activeColorSpace = i929[13]
  i928.desiredColorSpace = i929[14]
  i928.masterTextureLimit = i929[15]
  i928.maxQueuedFrames = i929[16]
  i928.particleRaycastBudget = i929[17]
  i928.pixelLightCount = i929[18]
  i928.realtimeReflectionProbes = !!i929[19]
  i928.shadowCascade2Split = i929[20]
  i928.shadowCascade4Split = new pc.Vec3( i929[21], i929[22], i929[23] )
  i928.streamingMipmapsActive = !!i929[24]
  i928.vSyncCount = i929[25]
  i928.asyncUploadBufferSize = i929[26]
  i928.asyncUploadTimeSlice = i929[27]
  i928.billboardsFaceCameraPosition = !!i929[28]
  i928.shadowNearPlaneOffset = i929[29]
  i928.streamingMipmapsMemoryBudget = i929[30]
  i928.maximumLODLevel = i929[31]
  i928.streamingMipmapsAddAllCameras = !!i929[32]
  i928.streamingMipmapsMaxLevelReduction = i929[33]
  i928.streamingMipmapsRenderersPerFrame = i929[34]
  i928.resolutionScalingFixedDPIFactor = i929[35]
  i928.streamingMipmapsMaxFileIORequests = i929[36]
  i928.currentQualityLevel = i929[37]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i939 = data
  i938.weight = i939[0]
  i938.vertices = i939[1]
  i938.normals = i939[2]
  i938.tangents = i939[3]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i943 = data
  i942.mode = i943[0]
  i942.parameter = i943[1]
  i942.threshold = i943[2]
  return i942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[15],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[15],"78":[79],"80":[81],"82":[81],"20":[9],"83":[9],"84":[85],"86":[87],"88":[15],"89":[15],"18":[15],"90":[44],"91":[85],"92":[93],"94":[9],"95":[9],"22":[20],"12":[10,9],"96":[9],"21":[20],"97":[9],"98":[9],"99":[9],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[10,9],"107":[9],"108":[9],"109":[9],"110":[9],"23":[10,9],"111":[9],"112":[40],"113":[40],"41":[40],"114":[40],"115":[15],"116":[15],"117":[85]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","Episode5","UnityEngine.GameObject","Episode4_1","Episode1","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Card","Episode4","Episode2","Episode6","Episode3","Episode7","Episode4_2","Episode5_2","ArmAnimation","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "4.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Arcein-Rush";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1593";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3097";

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

Deserializers.buildID = "4c70e6fc-a998-48fc-ab8e-f800e7008096";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

