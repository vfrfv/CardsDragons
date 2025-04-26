var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointSpring' )
  var i467 = data
  i466.spring = i467[0]
  i466.damper = i467[1]
  i466.targetPosition = i467[2]
  return i466
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor' )
  var i469 = data
  i468.m_TargetVelocity = i469[0]
  i468.m_Force = i469[1]
  i468.m_FreeSpin = i469[2]
  return i468
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointLimits' )
  var i471 = data
  i470.m_Min = i471[0]
  i470.m_Max = i471[1]
  i470.m_Bounciness = i471[2]
  i470.m_BounceMinVelocity = i471[3]
  i470.m_ContactDistance = i471[4]
  i470.minBounce = i471[5]
  i470.maxBounce = i471[6]
  return i470
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointDrive' )
  var i473 = data
  i472.m_PositionSpring = i473[0]
  i472.m_PositionDamper = i473[1]
  i472.m_MaximumForce = i473[2]
  i472.m_UseAcceleration = i473[3]
  return i472
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i475 = data
  i474.m_Spring = i475[0]
  i474.m_Damper = i475[1]
  return i474
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i477 = data
  i476.m_Limit = i477[0]
  i476.m_Bounciness = i477[1]
  i476.m_ContactDistance = i477[2]
  return i476
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i479 = data
  i478.m_ExtremumSlip = i479[0]
  i478.m_ExtremumValue = i479[1]
  i478.m_AsymptoteSlip = i479[2]
  i478.m_AsymptoteValue = i479[3]
  i478.m_Stiffness = i479[4]
  return i478
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i481 = data
  i480.m_LowerAngle = i481[0]
  i480.m_UpperAngle = i481[1]
  return i480
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i483 = data
  i482.m_MotorSpeed = i483[0]
  i482.m_MaximumMotorTorque = i483[1]
  return i482
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i485 = data
  i484.m_DampingRatio = i485[0]
  i484.m_Frequency = i485[1]
  i484.m_Angle = i485[2]
  return i484
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i487 = data
  i486.m_LowerTranslation = i487[0]
  i486.m_UpperTranslation = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i489 = data
  i488.name = i489[0]
  i488.width = i489[1]
  i488.height = i489[2]
  i488.mipmapCount = i489[3]
  i488.anisoLevel = i489[4]
  i488.filterMode = i489[5]
  i488.hdr = !!i489[6]
  i488.format = i489[7]
  i488.wrapMode = i489[8]
  i488.alphaIsTransparency = !!i489[9]
  i488.alphaSource = i489[10]
  i488.graphicsFormat = i489[11]
  i488.sRGBTexture = !!i489[12]
  i488.desiredColorSpace = i489[13]
  i488.wrapU = i489[14]
  i488.wrapV = i489[15]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i491 = data
  i490.position = new pc.Vec3( i491[0], i491[1], i491[2] )
  i490.scale = new pc.Vec3( i491[3], i491[4], i491[5] )
  i490.rotation = new pc.Quat(i491[6], i491[7], i491[8], i491[9])
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i493 = data
  i492.enabled = !!i493[0]
  request.r(i493[1], i493[2], 0, i492, 'sharedMaterial')
  var i495 = i493[3]
  var i494 = []
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 2, i494, '')
  }
  i492.sharedMaterials = i494
  i492.receiveShadows = !!i493[4]
  i492.shadowCastingMode = i493[5]
  i492.sortingLayerID = i493[6]
  i492.sortingOrder = i493[7]
  i492.lightmapIndex = i493[8]
  i492.lightmapSceneIndex = i493[9]
  i492.lightmapScaleOffset = new pc.Vec4( i493[10], i493[11], i493[12], i493[13] )
  i492.lightProbeUsage = i493[14]
  i492.reflectionProbeUsage = i493[15]
  request.r(i493[16], i493[17], 0, i492, 'mesh')
  i492.meshCount = i493[18]
  i492.activeVertexStreamsCount = i493[19]
  i492.alignment = i493[20]
  i492.renderMode = i493[21]
  i492.sortMode = i493[22]
  i492.lengthScale = i493[23]
  i492.velocityScale = i493[24]
  i492.cameraVelocityScale = i493[25]
  i492.normalDirection = i493[26]
  i492.sortingFudge = i493[27]
  i492.minParticleSize = i493[28]
  i492.maxParticleSize = i493[29]
  i492.pivot = new pc.Vec3( i493[30], i493[31], i493[32] )
  request.r(i493[33], i493[34], 0, i492, 'trailMaterial')
  return i492
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i559 = data
  i558.name = i559[0]
  i558.tagId = i559[1]
  i558.enabled = !!i559[2]
  i558.isStatic = !!i559[3]
  i558.layer = i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i560 = root || new pc.UnityMaterial()
  var i561 = data
  i560.name = i561[0]
  request.r(i561[1], i561[2], 0, i560, 'shader')
  i560.renderQueue = i561[3]
  i560.enableInstancing = !!i561[4]
  var i563 = i561[5]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i563[i + 0]) );
  }
  i560.floatParameters = i562
  var i565 = i561[6]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i565[i + 0]) );
  }
  i560.colorParameters = i564
  var i567 = i561[7]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i567[i + 0]) );
  }
  i560.vectorParameters = i566
  var i569 = i561[8]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i569[i + 0]) );
  }
  i560.textureParameters = i568
  var i571 = i561[9]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i571[i + 0]) );
  }
  i560.materialFlags = i570
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = new pc.Color(i579[1], i579[2], i579[3], i579[4])
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i583 = data
  i582.name = i583[0]
  i582.value = new pc.Vec4( i583[1], i583[2], i583[3], i583[4] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i587 = data
  i586.name = i587[0]
  request.r(i587[1], i587[2], 0, i586, 'value')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i591 = data
  i590.name = i591[0]
  i590.enabled = !!i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i593 = data
  i592.name = i593[0]
  i592.halfPrecision = !!i593[1]
  i592.useUInt32IndexFormat = !!i593[2]
  i592.vertexCount = i593[3]
  i592.aabb = i593[4]
  var i595 = i593[5]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( !!i595[i + 0] );
  }
  i592.streams = i594
  i592.vertices = i593[6]
  var i597 = i593[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i597[i + 0]) );
  }
  i592.subMeshes = i596
  var i599 = i593[8]
  var i598 = []
  for(var i = 0; i < i599.length; i += 16) {
    i598.push( new pc.Mat4().setData(i599[i + 0], i599[i + 1], i599[i + 2], i599[i + 3],  i599[i + 4], i599[i + 5], i599[i + 6], i599[i + 7],  i599[i + 8], i599[i + 9], i599[i + 10], i599[i + 11],  i599[i + 12], i599[i + 13], i599[i + 14], i599[i + 15]) );
  }
  i592.bindposes = i598
  var i601 = i593[9]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i601[i + 0]) );
  }
  i592.blendShapes = i600
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i607 = data
  i606.triangles = i607[0]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i613 = data
  i612.name = i613[0]
  var i615 = i613[1]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i615[i + 0]) );
  }
  i612.frames = i614
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i617 = data
  i616.pivot = new pc.Vec2( i617[0], i617[1] )
  i616.anchorMin = new pc.Vec2( i617[2], i617[3] )
  i616.anchorMax = new pc.Vec2( i617[4], i617[5] )
  i616.sizeDelta = new pc.Vec2( i617[6], i617[7] )
  i616.anchoredPosition3D = new pc.Vec3( i617[8], i617[9], i617[10] )
  i616.rotation = new pc.Quat(i617[11], i617[12], i617[13], i617[14])
  i616.scale = new pc.Vec3( i617[15], i617[16], i617[17] )
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i619 = data
  i618.cullTransparentMesh = !!i619[0]
  return i618
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Image' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Sprite')
  i620.m_Type = i621[2]
  i620.m_PreserveAspect = !!i621[3]
  i620.m_FillCenter = !!i621[4]
  i620.m_FillMethod = i621[5]
  i620.m_FillAmount = i621[6]
  i620.m_FillClockwise = !!i621[7]
  i620.m_FillOrigin = i621[8]
  i620.m_UseSpriteMesh = !!i621[9]
  i620.m_PixelsPerUnitMultiplier = i621[10]
  request.r(i621[11], i621[12], 0, i620, 'm_Material')
  i620.m_Maskable = !!i621[13]
  i620.m_Color = new pc.Color(i621[14], i621[15], i621[16], i621[17])
  i620.m_RaycastTarget = !!i621[18]
  i620.m_RaycastPadding = new pc.Vec4( i621[19], i621[20], i621[21], i621[22] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i623 = data
  i622.m_Alpha = i623[0]
  i622.m_Interactable = !!i623[1]
  i622.m_BlocksRaycasts = !!i623[2]
  i622.m_IgnoreParentGroups = !!i623[3]
  i622.enabled = !!i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i625 = data
  i624.name = i625[0]
  i624.index = i625[1]
  i624.startup = !!i625[2]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i627 = data
  i626.enabled = !!i627[0]
  i626.aspect = i627[1]
  i626.orthographic = !!i627[2]
  i626.orthographicSize = i627[3]
  i626.backgroundColor = new pc.Color(i627[4], i627[5], i627[6], i627[7])
  i626.nearClipPlane = i627[8]
  i626.farClipPlane = i627[9]
  i626.fieldOfView = i627[10]
  i626.depth = i627[11]
  i626.clearFlags = i627[12]
  i626.cullingMask = i627[13]
  i626.rect = i627[14]
  request.r(i627[15], i627[16], 0, i626, 'targetTexture')
  i626.usePhysicalProperties = !!i627[17]
  i626.focalLength = i627[18]
  i626.sensorSize = new pc.Vec2( i627[19], i627[20] )
  i626.lensShift = new pc.Vec2( i627[21], i627[22] )
  i626.gateFit = i627[23]
  i626.commandBufferCount = i627[24]
  i626.cameraType = i627[25]
  return i626
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i629 = data
  i628.m_RenderShadows = !!i629[0]
  i628.m_RequiresDepthTextureOption = i629[1]
  i628.m_RequiresOpaqueTextureOption = i629[2]
  i628.m_CameraType = i629[3]
  var i631 = i629[4]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i628.m_Cameras = i630
  i628.m_RendererIndex = i629[5]
  i628.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i629[6] )
  request.r(i629[7], i629[8], 0, i628, 'm_VolumeTrigger')
  i628.m_VolumeFrameworkUpdateModeOption = i629[9]
  i628.m_RenderPostProcessing = !!i629[10]
  i628.m_Antialiasing = i629[11]
  i628.m_AntialiasingQuality = i629[12]
  i628.m_StopNaN = !!i629[13]
  i628.m_Dithering = !!i629[14]
  i628.m_ClearDepth = !!i629[15]
  i628.m_AllowXRRendering = !!i629[16]
  i628.m_AllowHDROutput = !!i629[17]
  i628.m_UseScreenCoordOverride = !!i629[18]
  i628.m_ScreenSizeOverride = new pc.Vec4( i629[19], i629[20], i629[21], i629[22] )
  i628.m_ScreenCoordScaleBias = new pc.Vec4( i629[23], i629[24], i629[25], i629[26] )
  i628.m_RequiresDepthTexture = !!i629[27]
  i628.m_RequiresColorTexture = !!i629[28]
  i628.m_Version = i629[29]
  i628.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i629[30], i628.m_TaaSettings)
  return i628
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i635 = data
  i634.m_Quality = i635[0]
  i634.m_FrameInfluence = i635[1]
  i634.m_JitterScale = i635[2]
  i634.m_MipBias = i635[3]
  i634.m_VarianceClampScale = i635[4]
  i634.m_ContrastAdaptiveSharpening = i635[5]
  return i634
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i637 = data
  i636.m_ComponentVersion = i637[0]
  i636.m_LightType = i637[1]
  i636.m_BlendStyleIndex = i637[2]
  i636.m_FalloffIntensity = i637[3]
  i636.m_Color = new pc.Color(i637[4], i637[5], i637[6], i637[7])
  i636.m_Intensity = i637[8]
  i636.m_LightVolumeIntensity = i637[9]
  i636.m_LightVolumeIntensityEnabled = !!i637[10]
  i636.m_ApplyToSortingLayers = i637[11]
  request.r(i637[12], i637[13], 0, i636, 'm_LightCookieSprite')
  request.r(i637[14], i637[15], 0, i636, 'm_DeprecatedPointLightCookieSprite')
  i636.m_LightOrder = i637[16]
  i636.m_AlphaBlendOnOverlap = !!i637[17]
  i636.m_OverlapOperation = i637[18]
  i636.m_NormalMapDistance = i637[19]
  i636.m_NormalMapQuality = i637[20]
  i636.m_UseNormalMap = !!i637[21]
  i636.m_ShadowIntensityEnabled = !!i637[22]
  i636.m_ShadowIntensity = i637[23]
  i636.m_ShadowVolumeIntensityEnabled = !!i637[24]
  i636.m_ShadowVolumeIntensity = i637[25]
  i636.m_PointLightInnerAngle = i637[26]
  i636.m_PointLightOuterAngle = i637[27]
  i636.m_PointLightInnerRadius = i637[28]
  i636.m_PointLightOuterRadius = i637[29]
  i636.m_ShapeLightParametricSides = i637[30]
  i636.m_ShapeLightParametricAngleOffset = i637[31]
  i636.m_ShapeLightParametricRadius = i637[32]
  i636.m_ShapeLightFalloffSize = i637[33]
  i636.m_ShapeLightFalloffOffset = new pc.Vec2( i637[34], i637[35] )
  var i639 = i637[36]
  var i638 = []
  for(var i = 0; i < i639.length; i += 3) {
    i638.push( new pc.Vec3( i639[i + 0], i639[i + 1], i639[i + 2] ) );
  }
  i636.m_ShapePath = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.planeDistance = i643[1]
  i642.referencePixelsPerUnit = i643[2]
  i642.isFallbackOverlay = !!i643[3]
  i642.renderMode = i643[4]
  i642.renderOrder = i643[5]
  i642.sortingLayerName = i643[6]
  i642.sortingOrder = i643[7]
  i642.scaleFactor = i643[8]
  request.r(i643[9], i643[10], 0, i642, 'worldCamera')
  i642.overrideSorting = !!i643[11]
  i642.pixelPerfect = !!i643[12]
  i642.targetDisplay = i643[13]
  i642.overridePixelPerfect = !!i643[14]
  return i642
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i645 = data
  i644.m_UiScaleMode = i645[0]
  i644.m_ReferencePixelsPerUnit = i645[1]
  i644.m_ScaleFactor = i645[2]
  i644.m_ReferenceResolution = new pc.Vec2( i645[3], i645[4] )
  i644.m_ScreenMatchMode = i645[5]
  i644.m_MatchWidthOrHeight = i645[6]
  i644.m_PhysicalUnit = i645[7]
  i644.m_FallbackScreenDPI = i645[8]
  i644.m_DefaultSpriteDPI = i645[9]
  i644.m_DynamicPixelsPerUnit = i645[10]
  i644.m_PresetInfoIsWorld = !!i645[11]
  return i644
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i647 = data
  i646.m_IgnoreReversedGraphics = !!i647[0]
  i646.m_BlockingObjects = i647[1]
  i646.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i647[2] )
  return i646
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Text' )
  var i649 = data
  i648.m_FontData = request.d('UnityEngine.UI.FontData', i649[0], i648.m_FontData)
  i648.m_Text = i649[1]
  request.r(i649[2], i649[3], 0, i648, 'm_Material')
  i648.m_Maskable = !!i649[4]
  i648.m_Color = new pc.Color(i649[5], i649[6], i649[7], i649[8])
  i648.m_RaycastTarget = !!i649[9]
  i648.m_RaycastPadding = new pc.Vec4( i649[10], i649[11], i649[12], i649[13] )
  return i648
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.FontData' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_Font')
  i650.m_FontSize = i651[2]
  i650.m_FontStyle = i651[3]
  i650.m_BestFit = !!i651[4]
  i650.m_MinSize = i651[5]
  i650.m_MaxSize = i651[6]
  i650.m_Alignment = i651[7]
  i650.m_AlignByGeometry = !!i651[8]
  i650.m_RichText = !!i651[9]
  i650.m_HorizontalOverflow = i651[10]
  i650.m_VerticalOverflow = i651[11]
  i650.m_LineSpacing = i651[12]
  return i650
}

Deserializers["Episode5"] = function (request, data, root) {
  var i652 = root || request.c( 'Episode5' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, '_card1_1_2')
  request.r(i653[2], i653[3], 0, i652, '_card1_2_2')
  request.r(i653[4], i653[5], 0, i652, '_card1_3_2')
  request.r(i653[6], i653[7], 0, i652, '_card1_1')
  request.r(i653[8], i653[9], 0, i652, '_card2_1')
  request.r(i653[10], i653[11], 0, i652, '_coinsText')
  return i652
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i654 = root || request.c( 'Episode4_1' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, '_cart1__2')
  request.r(i655[2], i655[3], 0, i654, '_cart2__2')
  request.r(i655[4], i655[5], 0, i654, '_cart3__2')
  request.r(i655[6], i655[7], 0, i654, '_cart1_1')
  request.r(i655[8], i655[9], 0, i654, '_cart2_1')
  request.r(i655[10], i655[11], 0, i654, '_cart3_1')
  request.r(i655[12], i655[13], 0, i654, '_arm')
  request.r(i655[14], i655[15], 0, i654, '_coinText')
  return i654
}

Deserializers["Episode1"] = function (request, data, root) {
  var i656 = root || request.c( 'Episode1' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, '_arm')
  request.r(i657[2], i657[3], 0, i656, '_points')
  request.r(i657[4], i657[5], 0, i656, '_unit')
  request.r(i657[6], i657[7], 0, i656, '_particleSystem')
  request.r(i657[8], i657[9], 0, i656, '_textCoins')
  request.r(i657[10], i657[11], 0, i656, '_textDamage')
  request.r(i657[12], i657[13], 0, i656, '_textHealth')
  request.r(i657[14], i657[15], 0, i656, '_textHealth2')
  request.r(i657[16], i657[17], 0, i656, '_textDamage2')
  i656.scaleDuration = i657[18]
  i656.moveDuration = i657[19]
  i656.targetScale = new pc.Vec3( i657[20], i657[21], i657[22] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'animatorController')
  request.r(i659[2], i659[3], 0, i658, 'avatar')
  i658.updateMode = i659[4]
  i658.hasTransformHierarchy = !!i659[5]
  i658.applyRootMotion = !!i659[6]
  var i661 = i659[7]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.humanBones = i660
  i658.enabled = !!i659[8]
  return i658
}

Deserializers["Card"] = function (request, data, root) {
  var i664 = root || request.c( 'Card' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, '_points')
  i664.scaleDuration = i665[2]
  i664.moveDuration = i665[3]
  i664.targetScale = new pc.Vec3( i665[4], i665[5], i665[6] )
  request.r(i665[7], i665[8], 0, i664, '_particleSystem')
  return i664
}

Deserializers["Episode2"] = function (request, data, root) {
  var i666 = root || request.c( 'Episode2' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, '_arm')
  request.r(i667[2], i667[3], 0, i666, '_points')
  request.r(i667[4], i667[5], 0, i666, '_unit1')
  request.r(i667[6], i667[7], 0, i666, '_unit2')
  request.r(i667[8], i667[9], 0, i666, '_particleSystem1')
  request.r(i667[10], i667[11], 0, i666, '_particleSystem2')
  request.r(i667[12], i667[13], 0, i666, '_textCoins')
  request.r(i667[14], i667[15], 0, i666, '_textDamage')
  request.r(i667[16], i667[17], 0, i666, '_textHealth')
  request.r(i667[18], i667[19], 0, i666, '_textHealth2')
  request.r(i667[20], i667[21], 0, i666, '_textDamage2')
  i666.scaleDuration = i667[22]
  i666.moveDuration = i667[23]
  i666.targetScale = new pc.Vec3( i667[24], i667[25], i667[26] )
  return i666
}

Deserializers["Episode4"] = function (request, data, root) {
  var i668 = root || request.c( 'Episode4' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, '_cardDragcone1_1')
  request.r(i669[2], i669[3], 0, i668, '_cardDragcone2_2')
  request.r(i669[4], i669[5], 0, i668, '_cardDragcone')
  request.r(i669[6], i669[7], 0, i668, '_arm3_3')
  request.r(i669[8], i669[9], 0, i668, '_shopButton')
  request.r(i669[10], i669[11], 0, i668, '_points')
  request.r(i669[12], i669[13], 0, i668, '_textCoins')
  i668.scaleDuration = i669[14]
  i668.moveDuration = i669[15]
  i668.targetScale = new pc.Vec3( i669[16], i669[17], i669[18] )
  return i668
}

Deserializers["Episode6"] = function (request, data, root) {
  var i670 = root || request.c( 'Episode6' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, '_arm')
  request.r(i671[2], i671[3], 0, i670, '_points')
  request.r(i671[4], i671[5], 0, i670, '_cart')
  request.r(i671[6], i671[7], 0, i670, '_cartPoint')
  request.r(i671[8], i671[9], 0, i670, '_coinsText')
  request.r(i671[10], i671[11], 0, i670, '_textDamage')
  request.r(i671[12], i671[13], 0, i670, '_textHealth')
  request.r(i671[14], i671[15], 0, i670, '_textHealth2')
  request.r(i671[16], i671[17], 0, i670, '_textDamage2')
  i670.scaleDuration = i671[18]
  i670.moveDuration = i671[19]
  i670.targetScale = new pc.Vec3( i671[20], i671[21], i671[22] )
  return i670
}

Deserializers["Episode3"] = function (request, data, root) {
  var i672 = root || request.c( 'Episode3' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_battle')
  request.r(i673[2], i673[3], 0, i672, '_button')
  request.r(i673[4], i673[5], 0, i672, '_cardDracone')
  request.r(i673[6], i673[7], 0, i672, '_point')
  request.r(i673[8], i673[9], 0, i672, '_cardEnemye1')
  request.r(i673[10], i673[11], 0, i672, '_cardEnemye2')
  request.r(i673[12], i673[13], 0, i672, '_cardEnemye3')
  request.r(i673[14], i673[15], 0, i672, '_particleSystem1')
  request.r(i673[16], i673[17], 0, i672, '_particleSystem2')
  request.r(i673[18], i673[19], 0, i672, '_particleSystem3')
  request.r(i673[20], i673[21], 0, i672, '_textCoins')
  request.r(i673[22], i673[23], 0, i672, '_winVictoty')
  return i672
}

Deserializers["Episode7"] = function (request, data, root) {
  var i674 = root || request.c( 'Episode7' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_battle')
  request.r(i675[2], i675[3], 0, i674, '_button')
  request.r(i675[4], i675[5], 0, i674, '_cardEnemye1')
  request.r(i675[6], i675[7], 0, i674, '_cardEnemye2')
  request.r(i675[8], i675[9], 0, i674, '_cardEnemye3')
  request.r(i675[10], i675[11], 0, i674, '_cardEnemye4')
  request.r(i675[12], i675[13], 0, i674, '_cardEnemye5')
  request.r(i675[14], i675[15], 0, i674, '_cardEnemye6')
  request.r(i675[16], i675[17], 0, i674, '_particleSystem1')
  request.r(i675[18], i675[19], 0, i674, '_particleSystem2')
  request.r(i675[20], i675[21], 0, i674, '_particleSystem3')
  request.r(i675[22], i675[23], 0, i674, '_particleSystem4')
  request.r(i675[24], i675[25], 0, i674, '_particleSystem5')
  request.r(i675[26], i675[27], 0, i674, '_particleSystem6')
  request.r(i675[28], i675[29], 0, i674, '_winVictoty')
  request.r(i675[30], i675[31], 0, i674, '_winFinal')
  return i674
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i676 = root || request.c( 'Episode4_2' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, '_battle')
  request.r(i677[2], i677[3], 0, i676, '_button')
  request.r(i677[4], i677[5], 0, i676, '_cardEnemye1')
  request.r(i677[6], i677[7], 0, i676, '_cardEnemye2')
  request.r(i677[8], i677[9], 0, i676, '_cardDracone1')
  request.r(i677[10], i677[11], 0, i676, '_cardDracone2')
  request.r(i677[12], i677[13], 0, i676, '_cardDracone3')
  request.r(i677[14], i677[15], 0, i676, '_winDefeat')
  request.r(i677[16], i677[17], 0, i676, '_winFinal')
  request.r(i677[18], i677[19], 0, i676, '_particleSystem1')
  request.r(i677[20], i677[21], 0, i676, '_particleSystem2')
  request.r(i677[22], i677[23], 0, i676, '_particleSystem3')
  request.r(i677[24], i677[25], 0, i676, '_particleSystem4')
  request.r(i677[26], i677[27], 0, i676, '_particleSystem5')
  return i676
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i678 = root || request.c( 'Episode5_2' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, '_battle')
  request.r(i679[2], i679[3], 0, i678, '_button')
  request.r(i679[4], i679[5], 0, i678, '_cardEnemye1')
  request.r(i679[6], i679[7], 0, i678, '_cardEnemye2')
  request.r(i679[8], i679[9], 0, i678, '_cardDracone1')
  request.r(i679[10], i679[11], 0, i678, '_cardDracone2')
  request.r(i679[12], i679[13], 0, i678, '_cardDracone3')
  request.r(i679[14], i679[15], 0, i678, '_cardDracone4')
  request.r(i679[16], i679[17], 0, i678, '_winDefeat')
  request.r(i679[18], i679[19], 0, i678, '_winFinal')
  request.r(i679[20], i679[21], 0, i678, '_particleSystem1')
  request.r(i679[22], i679[23], 0, i678, '_particleSystem2')
  request.r(i679[24], i679[25], 0, i678, '_particleSystem3')
  request.r(i679[26], i679[27], 0, i678, '_particleSystem4')
  request.r(i679[28], i679[29], 0, i678, '_particleSystem5')
  request.r(i679[30], i679[31], 0, i678, '_particleSystem6')
  request.r(i679[32], i679[33], 0, i678, '_particleSystem7')
  return i678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_FirstSelected')
  i680.m_sendNavigationEvents = !!i681[2]
  i680.m_DragThreshold = i681[3]
  return i680
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i683 = data
  i682.m_HorizontalAxis = i683[0]
  i682.m_VerticalAxis = i683[1]
  i682.m_SubmitButton = i683[2]
  i682.m_CancelButton = i683[3]
  i682.m_InputActionsPerSecond = i683[4]
  i682.m_RepeatDelay = i683[5]
  i682.m_ForceModuleActive = !!i683[6]
  i682.m_SendPointerHoverToParent = !!i683[7]
  return i682
}

Deserializers["Scenario"] = function (request, data, root) {
  var i684 = root || request.c( 'Scenario' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, '_episode1')
  request.r(i685[2], i685[3], 0, i684, '_episode2')
  request.r(i685[4], i685[5], 0, i684, '_episode3')
  request.r(i685[6], i685[7], 0, i684, '_episode4')
  request.r(i685[8], i685[9], 0, i684, '_episode4_1')
  request.r(i685[10], i685[11], 0, i684, '_episode4_2')
  request.r(i685[12], i685[13], 0, i684, '_episode5')
  request.r(i685[14], i685[15], 0, i684, '_episode5_1')
  request.r(i685[16], i685[17], 0, i684, '_episode6')
  request.r(i685[18], i685[19], 0, i684, '_episode7')
  request.r(i685[20], i685[21], 0, i684, '_card1__1')
  request.r(i685[22], i685[23], 0, i684, '_card1__2')
  request.r(i685[24], i685[25], 0, i684, '_card1__3')
  request.r(i685[26], i685[27], 0, i684, '_coinsText')
  return i684
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i686 = root || request.c( 'Episode5_1' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_card1')
  request.r(i687[2], i687[3], 0, i686, '_card2')
  request.r(i687[4], i687[5], 0, i686, '_episode5')
  request.r(i687[6], i687[7], 0, i686, 'episode4_1')
  request.r(i687[8], i687[9], 0, i686, 'episode5_2')
  request.r(i687[10], i687[11], 0, i686, '_texCoins')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i689 = data
  i688.ambientIntensity = i689[0]
  i688.reflectionIntensity = i689[1]
  i688.ambientMode = i689[2]
  i688.ambientLight = new pc.Color(i689[3], i689[4], i689[5], i689[6])
  i688.ambientSkyColor = new pc.Color(i689[7], i689[8], i689[9], i689[10])
  i688.ambientGroundColor = new pc.Color(i689[11], i689[12], i689[13], i689[14])
  i688.ambientEquatorColor = new pc.Color(i689[15], i689[16], i689[17], i689[18])
  i688.fogColor = new pc.Color(i689[19], i689[20], i689[21], i689[22])
  i688.fogEndDistance = i689[23]
  i688.fogStartDistance = i689[24]
  i688.fogDensity = i689[25]
  i688.fog = !!i689[26]
  request.r(i689[27], i689[28], 0, i688, 'skybox')
  i688.fogMode = i689[29]
  var i691 = i689[30]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i691[i + 0]) );
  }
  i688.lightmaps = i690
  i688.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i689[31], i688.lightProbes)
  i688.lightmapsMode = i689[32]
  i688.mixedBakeMode = i689[33]
  i688.environmentLightingMode = i689[34]
  i688.ambientProbe = new pc.SphericalHarmonicsL2(i689[35])
  i688.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i689[36])
  i688.useReferenceAmbientProbe = !!i689[37]
  request.r(i689[38], i689[39], 0, i688, 'customReflection')
  request.r(i689[40], i689[41], 0, i688, 'defaultReflection')
  i688.defaultReflectionMode = i689[42]
  i688.defaultReflectionResolution = i689[43]
  i688.sunLightObjectId = i689[44]
  i688.pixelLightCount = i689[45]
  i688.defaultReflectionHDR = !!i689[46]
  i688.hasLightDataAsset = !!i689[47]
  i688.hasManualGenerate = !!i689[48]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'lightmapColor')
  request.r(i695[2], i695[3], 0, i694, 'lightmapDirection')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i696 = root || new UnityEngine.LightProbes()
  var i697 = data
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.type = i703[1]
  i702.color = new pc.Color(i703[2], i703[3], i703[4], i703[5])
  i702.cullingMask = i703[6]
  i702.intensity = i703[7]
  i702.range = i703[8]
  i702.spotAngle = i703[9]
  i702.shadows = i703[10]
  i702.shadowNormalBias = i703[11]
  i702.shadowBias = i703[12]
  i702.shadowStrength = i703[13]
  i702.shadowResolution = i703[14]
  i702.lightmapBakeType = i703[15]
  i702.renderMode = i703[16]
  request.r(i703[17], i703[18], 0, i702, 'cookie')
  i702.cookieSize = i703[19]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i705 = data
  i704.AdditionalLightsPerObjectLimit = i705[0]
  i704.AdditionalLightsRenderingMode = i705[1]
  i704.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i705[2], i704.LightRenderingMode)
  i704.ColorGradingLutSize = i705[3]
  i704.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i705[4], i704.ColorGradingMode)
  i704.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i705[5], i704.MainLightRenderingMode)
  i704.MainLightRenderingModeValue = i705[6]
  i704.MainLightShadowsSupported = !!i705[7]
  i704.MixedLightingSupported = !!i705[8]
  i704.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i705[9], i704.MsaaQuality)
  i704.MSAA = i705[10]
  i704.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i705[11], i704.OpaqueDownsampling)
  i704.RenderScale = i705[12]
  i704.RequireDepthTexture = !!i705[13]
  i704.RequireOpaqueTexture = !!i705[14]
  i704.ShadowAtlasResolution = i705[15]
  i704.ShadowDepthBias = i705[16]
  i704.SupportsHDR = !!i705[17]
  i704.SupportsTerrainHoles = !!i705[18]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i707 = data
  i706.Disabled = i707[0]
  i706.PerVertex = i707[1]
  i706.PerPixel = i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i709 = data
  i708.LowDynamicRange = i709[0]
  i708.HighDynamicRange = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i711 = data
  i710.Disabled = i711[0]
  i710._2x = i711[1]
  i710._4x = i711[2]
  i710._8x = i711[3]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i713 = data
  i712.None = i713[0]
  i712._2xBilinear = i713[1]
  i712._4xBox = i713[2]
  i712._4xBilinear = i713[3]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i717[i + 0]));
  }
  i714.ShaderCompilationErrors = i716
  i714.name = i715[1]
  i714.guid = i715[2]
  var i719 = i715[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.shaderDefinedKeywords = i718
  var i721 = i715[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i721[i + 0]) );
  }
  i714.passes = i720
  var i723 = i715[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i723[i + 0]) );
  }
  i714.usePasses = i722
  var i725 = i715[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i725[i + 0]) );
  }
  i714.defaultParameterValues = i724
  request.r(i715[7], i715[8], 0, i714, 'unityFallbackShader')
  i714.readDepth = !!i715[9]
  i714.isCreatedByShaderGraph = !!i715[10]
  i714.compiled = !!i715[11]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i729 = data
  i728.shaderName = i729[0]
  i728.errorMessage = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i734 = root || new pc.UnityShaderPass()
  var i735 = data
  i734.id = i735[0]
  i734.subShaderIndex = i735[1]
  i734.name = i735[2]
  i734.passType = i735[3]
  i734.grabPassTextureName = i735[4]
  i734.usePass = !!i735[5]
  i734.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[6], i734.zTest)
  i734.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[7], i734.zWrite)
  i734.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[8], i734.culling)
  i734.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i735[9], i734.blending)
  i734.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i735[10], i734.alphaBlending)
  i734.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[11], i734.colorWriteMask)
  i734.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[12], i734.offsetUnits)
  i734.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[13], i734.offsetFactor)
  i734.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[14], i734.stencilRef)
  i734.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[15], i734.stencilReadMask)
  i734.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[16], i734.stencilWriteMask)
  i734.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[17], i734.stencilOp)
  i734.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[18], i734.stencilOpFront)
  i734.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[19], i734.stencilOpBack)
  var i737 = i735[20]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i737[i + 0]) );
  }
  i734.tags = i736
  var i739 = i735[21]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.passDefinedKeywords = i738
  var i741 = i735[22]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i741[i + 0]) );
  }
  i734.passDefinedKeywordGroups = i740
  var i743 = i735[23]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i734.variants = i742
  var i745 = i735[24]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i745[i + 0]) );
  }
  i734.excludedVariants = i744
  i734.hasDepthReader = !!i735[25]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i747 = data
  i746.val = i747[0]
  i746.name = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i749 = data
  i748.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.src)
  i748.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.dst)
  i748.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.op)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i751 = data
  i750.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[0], i750.pass)
  i750.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[1], i750.fail)
  i750.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[2], i750.zFail)
  i750.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[3], i750.comp)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i755 = data
  i754.name = i755[0]
  i754.value = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i758.keywords = i760
  i758.hasDiscard = !!i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i765 = data
  i764.passId = i765[0]
  i764.subShaderIndex = i765[1]
  var i767 = i765[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i764.keywords = i766
  i764.vertexProgram = i765[3]
  i764.fragmentProgram = i765[4]
  i764.exportedForWebGl2 = !!i765[5]
  i764.readDepth = !!i765[6]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'shader')
  i770.pass = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i775 = data
  i774.name = i775[0]
  i774.type = i775[1]
  i774.value = new pc.Vec4( i775[2], i775[3], i775[4], i775[5] )
  i774.textureValue = i775[6]
  i774.shaderPropertyFlag = i775[7]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'texture')
  i776.aabb = i777[3]
  i776.vertices = i777[4]
  i776.triangles = i777[5]
  i776.textureRect = UnityEngine.Rect.MinMaxRect(i777[6], i777[7], i777[8], i777[9])
  i776.packedRect = UnityEngine.Rect.MinMaxRect(i777[10], i777[11], i777[12], i777[13])
  i776.border = new pc.Vec4( i777[14], i777[15], i777[16], i777[17] )
  i776.transparency = i777[18]
  i776.bounds = i777[19]
  i776.pixelsPerUnit = i777[20]
  i776.textureWidth = i777[21]
  i776.textureHeight = i777[22]
  i776.nativeSize = new pc.Vec2( i777[23], i777[24] )
  i776.pivot = new pc.Vec2( i777[25], i777[26] )
  i776.textureRectOffset = new pc.Vec2( i777[27], i777[28] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i779 = data
  i778.name = i779[0]
  i778.wrapMode = i779[1]
  i778.isLooping = !!i779[2]
  i778.length = i779[3]
  var i781 = i779[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i781[i + 0]) );
  }
  i778.curves = i780
  var i783 = i779[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i783[i + 0]) );
  }
  i778.events = i782
  i778.halfPrecision = !!i779[6]
  i778._frameRate = i779[7]
  i778.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i779[8], i778.localBounds)
  i778.hasMuscleCurves = !!i779[9]
  var i785 = i779[10]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i778.clipMuscleConstant = i784
  i778.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i779[11], i778.clipBindingConstant)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i789 = data
  i788.path = i789[0]
  i788.hash = i789[1]
  i788.componentType = i789[2]
  i788.property = i789[3]
  i788.keys = i789[4]
  var i791 = i789[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i791[i + 0]) );
  }
  i788.objectReferenceKeys = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i795 = data
  i794.time = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'value')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i799 = data
  i798.functionName = i799[0]
  i798.floatParameter = i799[1]
  i798.intParameter = i799[2]
  i798.stringParameter = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'objectReferenceParameter')
  i798.time = i799[6]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i801 = data
  i800.center = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.extends = new pc.Vec3( i801[3], i801[4], i801[5] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.genericBindings = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.pptrCurveMapping = i808
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i811 = data
  i810.name = i811[0]
  i810.ascent = i811[1]
  i810.originalLineHeight = i811[2]
  i810.fontSize = i811[3]
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i813[i + 0]) );
  }
  i810.characterInfo = i812
  request.r(i811[5], i811[6], 0, i810, 'texture')
  i810.originalFontSize = i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i817 = data
  i816.index = i817[0]
  i816.advance = i817[1]
  i816.bearing = i817[2]
  i816.glyphWidth = i817[3]
  i816.glyphHeight = i817[4]
  i816.minX = i817[5]
  i816.maxX = i817[6]
  i816.minY = i817[7]
  i816.maxY = i817[8]
  i816.uvBottomLeftX = i817[9]
  i816.uvBottomLeftY = i817[10]
  i816.uvBottomRightX = i817[11]
  i816.uvBottomRightY = i817[12]
  i816.uvTopLeftX = i817[13]
  i816.uvTopLeftY = i817[14]
  i816.uvTopRightX = i817[15]
  i816.uvTopRightY = i817[16]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i819 = data
  i818.name = i819[0]
  var i821 = i819[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i821[i + 0]) );
  }
  i818.layers = i820
  var i823 = i819[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i823[i + 0]) );
  }
  i818.parameters = i822
  i818.animationClips = i819[3]
  i818.avatarUnsupported = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i827 = data
  i826.name = i827[0]
  i826.defaultWeight = i827[1]
  i826.blendingMode = i827[2]
  i826.avatarMask = i827[3]
  i826.syncedLayerIndex = i827[4]
  i826.syncedLayerAffectsTiming = !!i827[5]
  i826.syncedLayers = i827[6]
  i826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i827[7], i826.stateMachine)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  i828.path = i829[2]
  var i831 = i829[3]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i831[i + 0]) );
  }
  i828.states = i830
  var i833 = i829[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i833[i + 0]) );
  }
  i828.machines = i832
  var i835 = i829[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i835[i + 0]) );
  }
  i828.entryStateTransitions = i834
  var i837 = i829[6]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i837[i + 0]) );
  }
  i828.exitStateTransitions = i836
  var i839 = i829[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i839[i + 0]) );
  }
  i828.anyStateTransitions = i838
  i828.defaultStateId = i829[8]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i843 = data
  i842.id = i843[0]
  i842.name = i843[1]
  i842.cycleOffset = i843[2]
  i842.cycleOffsetParameter = i843[3]
  i842.cycleOffsetParameterActive = !!i843[4]
  i842.mirror = !!i843[5]
  i842.mirrorParameter = i843[6]
  i842.mirrorParameterActive = !!i843[7]
  i842.motionId = i843[8]
  i842.nameHash = i843[9]
  i842.fullPathHash = i843[10]
  i842.speed = i843[11]
  i842.speedParameter = i843[12]
  i842.speedParameterActive = !!i843[13]
  i842.tag = i843[14]
  i842.tagHash = i843[15]
  i842.writeDefaultValues = !!i843[16]
  var i845 = i843[17]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.behaviours = i844
  var i847 = i843[18]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i847[i + 0]) );
  }
  i842.transitions = i846
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i853 = data
  i852.fullPath = i853[0]
  i852.canTransitionToSelf = !!i853[1]
  i852.duration = i853[2]
  i852.exitTime = i853[3]
  i852.hasExitTime = !!i853[4]
  i852.hasFixedDuration = !!i853[5]
  i852.interruptionSource = i853[6]
  i852.offset = i853[7]
  i852.orderedInterruption = !!i853[8]
  i852.destinationStateId = i853[9]
  i852.isExit = !!i853[10]
  i852.mute = !!i853[11]
  i852.solo = !!i853[12]
  var i855 = i853[13]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i855[i + 0]) );
  }
  i852.conditions = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i861 = data
  i860.destinationStateId = i861[0]
  i860.isExit = !!i861[1]
  i860.mute = !!i861[2]
  i860.solo = !!i861[3]
  var i863 = i861[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i863[i + 0]) );
  }
  i860.conditions = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i867 = data
  i866.defaultBool = !!i867[0]
  i866.defaultFloat = i867[1]
  i866.defaultInt = i867[2]
  i866.name = i867[3]
  i866.nameHash = i867[4]
  i866.type = i867[5]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i871[i + 0]) );
  }
  i868.files = i870
  i868.componentToPrefabIds = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i875 = data
  i874.path = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'unityObject')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i879[i + 0]) );
  }
  i876.scriptsExecutionOrder = i878
  var i881 = i877[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i881[i + 0]) );
  }
  i876.sortingLayers = i880
  var i883 = i877[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i883[i + 0]) );
  }
  i876.cullingLayers = i882
  i876.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i877[3], i876.timeSettings)
  i876.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i877[4], i876.physicsSettings)
  i876.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i877[5], i876.physics2DSettings)
  i876.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i877[6], i876.qualitySettings)
  i876.enableRealtimeShadows = !!i877[7]
  i876.enableAutoInstancing = !!i877[8]
  i876.enableDynamicBatching = !!i877[9]
  i876.lightmapEncodingQuality = i877[10]
  i876.desiredColorSpace = i877[11]
  var i885 = i877[12]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i876.allTags = i884
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i893 = data
  i892.id = i893[0]
  i892.name = i893[1]
  i892.value = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i897 = data
  i896.id = i897[0]
  i896.name = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i899 = data
  i898.fixedDeltaTime = i899[0]
  i898.maximumDeltaTime = i899[1]
  i898.timeScale = i899[2]
  i898.maximumParticleTimestep = i899[3]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i901 = data
  i900.gravity = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.defaultSolverIterations = i901[3]
  i900.bounceThreshold = i901[4]
  i900.autoSyncTransforms = !!i901[5]
  i900.autoSimulation = !!i901[6]
  var i903 = i901[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i903[i + 0]) );
  }
  i900.collisionMatrix = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.layerId = i907[1]
  i906.otherLayerId = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'material')
  i908.gravity = new pc.Vec2( i909[2], i909[3] )
  i908.positionIterations = i909[4]
  i908.velocityIterations = i909[5]
  i908.velocityThreshold = i909[6]
  i908.maxLinearCorrection = i909[7]
  i908.maxAngularCorrection = i909[8]
  i908.maxTranslationSpeed = i909[9]
  i908.maxRotationSpeed = i909[10]
  i908.baumgarteScale = i909[11]
  i908.baumgarteTOIScale = i909[12]
  i908.timeToSleep = i909[13]
  i908.linearSleepTolerance = i909[14]
  i908.angularSleepTolerance = i909[15]
  i908.defaultContactOffset = i909[16]
  i908.autoSimulation = !!i909[17]
  i908.queriesHitTriggers = !!i909[18]
  i908.queriesStartInColliders = !!i909[19]
  i908.callbacksOnDisable = !!i909[20]
  i908.reuseCollisionCallbacks = !!i909[21]
  i908.autoSyncTransforms = !!i909[22]
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i911[i + 0]) );
  }
  i908.collisionMatrix = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i915 = data
  i914.enabled = !!i915[0]
  i914.layerId = i915[1]
  i914.otherLayerId = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i919[i + 0]) );
  }
  i916.qualityLevels = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.names = i920
  i916.shadows = i917[2]
  i916.anisotropicFiltering = i917[3]
  i916.antiAliasing = i917[4]
  i916.lodBias = i917[5]
  i916.shadowCascades = i917[6]
  i916.shadowDistance = i917[7]
  i916.shadowmaskMode = i917[8]
  i916.shadowProjection = i917[9]
  i916.shadowResolution = i917[10]
  i916.softParticles = !!i917[11]
  i916.softVegetation = !!i917[12]
  i916.activeColorSpace = i917[13]
  i916.desiredColorSpace = i917[14]
  i916.masterTextureLimit = i917[15]
  i916.maxQueuedFrames = i917[16]
  i916.particleRaycastBudget = i917[17]
  i916.pixelLightCount = i917[18]
  i916.realtimeReflectionProbes = !!i917[19]
  i916.shadowCascade2Split = i917[20]
  i916.shadowCascade4Split = new pc.Vec3( i917[21], i917[22], i917[23] )
  i916.streamingMipmapsActive = !!i917[24]
  i916.vSyncCount = i917[25]
  i916.asyncUploadBufferSize = i917[26]
  i916.asyncUploadTimeSlice = i917[27]
  i916.billboardsFaceCameraPosition = !!i917[28]
  i916.shadowNearPlaneOffset = i917[29]
  i916.streamingMipmapsMemoryBudget = i917[30]
  i916.maximumLODLevel = i917[31]
  i916.streamingMipmapsAddAllCameras = !!i917[32]
  i916.streamingMipmapsMaxLevelReduction = i917[33]
  i916.streamingMipmapsRenderersPerFrame = i917[34]
  i916.resolutionScalingFixedDPIFactor = i917[35]
  i916.streamingMipmapsMaxFileIORequests = i917[36]
  i916.currentQualityLevel = i917[37]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i927 = data
  i926.weight = i927[0]
  i926.vertices = i927[1]
  i926.normals = i927[2]
  i926.tangents = i927[3]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i931 = data
  i930.mode = i931[0]
  i930.parameter = i931[1]
  i930.threshold = i931[2]
  return i930
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[13],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[13],"75":[76],"77":[78],"79":[78],"18":[7],"80":[7],"81":[82],"83":[84],"85":[13],"86":[13],"16":[13],"87":[41],"88":[82],"89":[90],"91":[7],"92":[7],"20":[18],"10":[8,7],"93":[7],"19":[18],"94":[7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"100":[7],"101":[7],"102":[7],"103":[8,7],"104":[7],"105":[7],"106":[7],"107":[7],"21":[8,7],"108":[7],"109":[37],"110":[37],"38":[37],"111":[37],"112":[13],"113":[13],"114":[82]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","Episode5","UnityEngine.GameObject","Episode4_1","Episode1","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Card","Episode2","Episode4","Episode6","Episode3","Episode7","Episode4_2","Episode5_2","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "1.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1593";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3102";

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

Deserializers.buildID = "f13030db-3759-4b7d-8cd9-04dd44b38727";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

