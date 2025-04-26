var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointSpring' )
  var i453 = data
  i452.spring = i453[0]
  i452.damper = i453[1]
  i452.targetPosition = i453[2]
  return i452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor' )
  var i455 = data
  i454.m_TargetVelocity = i455[0]
  i454.m_Force = i455[1]
  i454.m_FreeSpin = i455[2]
  return i454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointLimits' )
  var i457 = data
  i456.m_Min = i457[0]
  i456.m_Max = i457[1]
  i456.m_Bounciness = i457[2]
  i456.m_BounceMinVelocity = i457[3]
  i456.m_ContactDistance = i457[4]
  i456.minBounce = i457[5]
  i456.maxBounce = i457[6]
  return i456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointDrive' )
  var i459 = data
  i458.m_PositionSpring = i459[0]
  i458.m_PositionDamper = i459[1]
  i458.m_MaximumForce = i459[2]
  i458.m_UseAcceleration = i459[3]
  return i458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i461 = data
  i460.m_Spring = i461[0]
  i460.m_Damper = i461[1]
  return i460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i463 = data
  i462.m_Limit = i463[0]
  i462.m_Bounciness = i463[1]
  i462.m_ContactDistance = i463[2]
  return i462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i465 = data
  i464.m_ExtremumSlip = i465[0]
  i464.m_ExtremumValue = i465[1]
  i464.m_AsymptoteSlip = i465[2]
  i464.m_AsymptoteValue = i465[3]
  i464.m_Stiffness = i465[4]
  return i464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i467 = data
  i466.m_LowerAngle = i467[0]
  i466.m_UpperAngle = i467[1]
  return i466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i469 = data
  i468.m_MotorSpeed = i469[0]
  i468.m_MaximumMotorTorque = i469[1]
  return i468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i471 = data
  i470.m_DampingRatio = i471[0]
  i470.m_Frequency = i471[1]
  i470.m_Angle = i471[2]
  return i470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i473 = data
  i472.m_LowerTranslation = i473[0]
  i472.m_UpperTranslation = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i475 = data
  i474.name = i475[0]
  i474.width = i475[1]
  i474.height = i475[2]
  i474.mipmapCount = i475[3]
  i474.anisoLevel = i475[4]
  i474.filterMode = i475[5]
  i474.hdr = !!i475[6]
  i474.format = i475[7]
  i474.wrapMode = i475[8]
  i474.alphaIsTransparency = !!i475[9]
  i474.alphaSource = i475[10]
  i474.graphicsFormat = i475[11]
  i474.sRGBTexture = !!i475[12]
  i474.desiredColorSpace = i475[13]
  i474.wrapU = i475[14]
  i474.wrapV = i475[15]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i477 = data
  i476.position = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.scale = new pc.Vec3( i477[3], i477[4], i477[5] )
  i476.rotation = new pc.Quat(i477[6], i477[7], i477[8], i477[9])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i479 = data
  i478.enabled = !!i479[0]
  request.r(i479[1], i479[2], 0, i478, 'sharedMaterial')
  var i481 = i479[3]
  var i480 = []
  for(var i = 0; i < i481.length; i += 2) {
  request.r(i481[i + 0], i481[i + 1], 2, i480, '')
  }
  i478.sharedMaterials = i480
  i478.receiveShadows = !!i479[4]
  i478.shadowCastingMode = i479[5]
  i478.sortingLayerID = i479[6]
  i478.sortingOrder = i479[7]
  i478.lightmapIndex = i479[8]
  i478.lightmapSceneIndex = i479[9]
  i478.lightmapScaleOffset = new pc.Vec4( i479[10], i479[11], i479[12], i479[13] )
  i478.lightProbeUsage = i479[14]
  i478.reflectionProbeUsage = i479[15]
  request.r(i479[16], i479[17], 0, i478, 'mesh')
  i478.meshCount = i479[18]
  i478.activeVertexStreamsCount = i479[19]
  i478.alignment = i479[20]
  i478.renderMode = i479[21]
  i478.sortMode = i479[22]
  i478.lengthScale = i479[23]
  i478.velocityScale = i479[24]
  i478.cameraVelocityScale = i479[25]
  i478.normalDirection = i479[26]
  i478.sortingFudge = i479[27]
  i478.minParticleSize = i479[28]
  i478.maxParticleSize = i479[29]
  i478.pivot = new pc.Vec3( i479[30], i479[31], i479[32] )
  request.r(i479[33], i479[34], 0, i478, 'trailMaterial')
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i485 = data
  i484.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i485[0], i484.main)
  i484.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i485[1], i484.colorBySpeed)
  i484.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i485[2], i484.colorOverLifetime)
  i484.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i485[3], i484.emission)
  i484.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i485[4], i484.rotationBySpeed)
  i484.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i485[5], i484.rotationOverLifetime)
  i484.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i485[6], i484.shape)
  i484.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i485[7], i484.sizeBySpeed)
  i484.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i485[8], i484.sizeOverLifetime)
  i484.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i485[9], i484.textureSheetAnimation)
  i484.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i485[10], i484.velocityOverLifetime)
  i484.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i485[11], i484.noise)
  i484.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i485[12], i484.inheritVelocity)
  i484.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i485[13], i484.forceOverLifetime)
  i484.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i485[14], i484.limitVelocityOverLifetime)
  i484.useAutoRandomSeed = !!i485[15]
  i484.randomSeed = i485[16]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemMain()
  var i487 = data
  i486.duration = i487[0]
  i486.loop = !!i487[1]
  i486.prewarm = !!i487[2]
  i486.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[3], i486.startDelay)
  i486.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[4], i486.startLifetime)
  i486.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[5], i486.startSpeed)
  i486.startSize3D = !!i487[6]
  i486.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[7], i486.startSizeX)
  i486.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[8], i486.startSizeY)
  i486.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[9], i486.startSizeZ)
  i486.startRotation3D = !!i487[10]
  i486.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[11], i486.startRotationX)
  i486.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[12], i486.startRotationY)
  i486.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[13], i486.startRotationZ)
  i486.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i487[14], i486.startColor)
  i486.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[15], i486.gravityModifier)
  i486.simulationSpace = i487[16]
  request.r(i487[17], i487[18], 0, i486, 'customSimulationSpace')
  i486.simulationSpeed = i487[19]
  i486.useUnscaledTime = !!i487[20]
  i486.scalingMode = i487[21]
  i486.playOnAwake = !!i487[22]
  i486.maxParticles = i487[23]
  i486.emitterVelocityMode = i487[24]
  i486.stopAction = i487[25]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i488 = root || new pc.MinMaxCurve()
  var i489 = data
  i488.mode = i489[0]
  i488.curveMin = new pc.AnimationCurve( { keys_flow: i489[1] } )
  i488.curveMax = new pc.AnimationCurve( { keys_flow: i489[2] } )
  i488.curveMultiplier = i489[3]
  i488.constantMin = i489[4]
  i488.constantMax = i489[5]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i490 = root || new pc.MinMaxGradient()
  var i491 = data
  i490.mode = i491[0]
  i490.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i491[1], i490.gradientMin)
  i490.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i491[2], i490.gradientMax)
  i490.colorMin = new pc.Color(i491[3], i491[4], i491[5], i491[6])
  i490.colorMax = new pc.Color(i491[7], i491[8], i491[9], i491[10])
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i493 = data
  i492.mode = i493[0]
  var i495 = i493[1]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i495[i + 0]) );
  }
  i492.colorKeys = i494
  var i497 = i493[2]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i497[i + 0]) );
  }
  i492.alphaKeys = i496
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemColorBySpeed()
  var i499 = data
  i498.enabled = !!i499[0]
  i498.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i499[1], i498.color)
  i498.range = new pc.Vec2( i499[2], i499[3] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i503 = data
  i502.color = new pc.Color(i503[0], i503[1], i503[2], i503[3])
  i502.time = i503[4]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i507 = data
  i506.alpha = i507[0]
  i506.time = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemColorOverLifetime()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i509[1], i508.color)
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemEmitter()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[1], i510.rateOverTime)
  i510.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[2], i510.rateOverDistance)
  var i513 = i511[3]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i513[i + 0]) );
  }
  i510.bursts = i512
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemBurst()
  var i517 = data
  i516.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[0], i516.count)
  i516.cycleCount = i517[1]
  i516.minCount = i517[2]
  i516.maxCount = i517[3]
  i516.repeatInterval = i517[4]
  i516.time = i517[5]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemRotationBySpeed()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[1], i518.x)
  i518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[2], i518.y)
  i518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[3], i518.z)
  i518.separateAxes = !!i519[4]
  i518.range = new pc.Vec2( i519[5], i519[6] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemRotationOverLifetime()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.separateAxes = !!i521[4]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemShape()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.shapeType = i523[1]
  i522.randomDirectionAmount = i523[2]
  i522.sphericalDirectionAmount = i523[3]
  i522.randomPositionAmount = i523[4]
  i522.alignToDirection = !!i523[5]
  i522.radius = i523[6]
  i522.radiusMode = i523[7]
  i522.radiusSpread = i523[8]
  i522.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[9], i522.radiusSpeed)
  i522.radiusThickness = i523[10]
  i522.angle = i523[11]
  i522.length = i523[12]
  i522.boxThickness = new pc.Vec3( i523[13], i523[14], i523[15] )
  i522.meshShapeType = i523[16]
  request.r(i523[17], i523[18], 0, i522, 'mesh')
  request.r(i523[19], i523[20], 0, i522, 'meshRenderer')
  request.r(i523[21], i523[22], 0, i522, 'skinnedMeshRenderer')
  i522.useMeshMaterialIndex = !!i523[23]
  i522.meshMaterialIndex = i523[24]
  i522.useMeshColors = !!i523[25]
  i522.normalOffset = i523[26]
  i522.arc = i523[27]
  i522.arcMode = i523[28]
  i522.arcSpread = i523[29]
  i522.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[30], i522.arcSpeed)
  i522.donutRadius = i523[31]
  i522.position = new pc.Vec3( i523[32], i523[33], i523[34] )
  i522.rotation = new pc.Vec3( i523[35], i523[36], i523[37] )
  i522.scale = new pc.Vec3( i523[38], i523[39], i523[40] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemSizeBySpeed()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[1], i524.x)
  i524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[2], i524.y)
  i524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[3], i524.z)
  i524.separateAxes = !!i525[4]
  i524.range = new pc.Vec2( i525[5], i525[6] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemSizeOverLifetime()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[1], i526.x)
  i526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[2], i526.y)
  i526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[3], i526.z)
  i526.separateAxes = !!i527[4]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.mode = i529[1]
  i528.animation = i529[2]
  i528.numTilesX = i529[3]
  i528.numTilesY = i529[4]
  i528.useRandomRow = !!i529[5]
  i528.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[6], i528.frameOverTime)
  i528.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[7], i528.startFrame)
  i528.cycleCount = i529[8]
  i528.rowIndex = i529[9]
  i528.flipU = i529[10]
  i528.flipV = i529[11]
  i528.spriteCount = i529[12]
  var i531 = i529[13]
  var i530 = []
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 2, i530, '')
  }
  i528.sprites = i530
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[1], i534.x)
  i534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[2], i534.y)
  i534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[3], i534.z)
  i534.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[4], i534.radial)
  i534.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[5], i534.speedModifier)
  i534.space = i535[6]
  i534.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[7], i534.orbitalX)
  i534.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[8], i534.orbitalY)
  i534.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[9], i534.orbitalZ)
  i534.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[10], i534.orbitalOffsetX)
  i534.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[11], i534.orbitalOffsetY)
  i534.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[12], i534.orbitalOffsetZ)
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemNoise()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.separateAxes = !!i537[1]
  i536.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.strengthX)
  i536.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.strengthY)
  i536.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[4], i536.strengthZ)
  i536.frequency = i537[5]
  i536.damping = !!i537[6]
  i536.octaveCount = i537[7]
  i536.octaveMultiplier = i537[8]
  i536.octaveScale = i537[9]
  i536.quality = i537[10]
  i536.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[11], i536.scrollSpeed)
  i536.scrollSpeedMultiplier = i537[12]
  i536.remapEnabled = !!i537[13]
  i536.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[14], i536.remapX)
  i536.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[15], i536.remapY)
  i536.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[16], i536.remapZ)
  i536.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[17], i536.positionAmount)
  i536.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[18], i536.rotationAmount)
  i536.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[19], i536.sizeAmount)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemInheritVelocity()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.mode = i539[1]
  i538.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.curve)
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemForceOverLifetime()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[1], i540.x)
  i540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.y)
  i540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.z)
  i540.space = i541[4]
  i540.randomized = !!i541[5]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[1], i542.limit)
  i542.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[2], i542.limitX)
  i542.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[3], i542.limitY)
  i542.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[4], i542.limitZ)
  i542.dampen = i543[5]
  i542.separateAxes = !!i543[6]
  i542.space = i543[7]
  i542.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[8], i542.drag)
  i542.multiplyDragByParticleSize = !!i543[9]
  i542.multiplyDragByParticleVelocity = !!i543[10]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i545 = data
  i544.name = i545[0]
  i544.tagId = i545[1]
  i544.enabled = !!i545[2]
  i544.isStatic = !!i545[3]
  i544.layer = i545[4]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i546 = root || new pc.UnityMaterial()
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.renderQueue = i547[3]
  i546.enableInstancing = !!i547[4]
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i549[i + 0]) );
  }
  i546.floatParameters = i548
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i551[i + 0]) );
  }
  i546.colorParameters = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i553[i + 0]) );
  }
  i546.vectorParameters = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i555[i + 0]) );
  }
  i546.textureParameters = i554
  var i557 = i547[9]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i557[i + 0]) );
  }
  i546.materialFlags = i556
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Color(i565[1], i565[2], i565[3], i565[4])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Vec4( i569[1], i569[2], i569[3], i569[4] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'value')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i577 = data
  i576.name = i577[0]
  i576.enabled = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i579 = data
  i578.name = i579[0]
  i578.halfPrecision = !!i579[1]
  i578.useUInt32IndexFormat = !!i579[2]
  i578.vertexCount = i579[3]
  i578.aabb = i579[4]
  var i581 = i579[5]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( !!i581[i + 0] );
  }
  i578.streams = i580
  i578.vertices = i579[6]
  var i583 = i579[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i583[i + 0]) );
  }
  i578.subMeshes = i582
  var i585 = i579[8]
  var i584 = []
  for(var i = 0; i < i585.length; i += 16) {
    i584.push( new pc.Mat4().setData(i585[i + 0], i585[i + 1], i585[i + 2], i585[i + 3],  i585[i + 4], i585[i + 5], i585[i + 6], i585[i + 7],  i585[i + 8], i585[i + 9], i585[i + 10], i585[i + 11],  i585[i + 12], i585[i + 13], i585[i + 14], i585[i + 15]) );
  }
  i578.bindposes = i584
  var i587 = i579[9]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i587[i + 0]) );
  }
  i578.blendShapes = i586
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i593 = data
  i592.triangles = i593[0]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i599 = data
  i598.name = i599[0]
  var i601 = i599[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i601[i + 0]) );
  }
  i598.frames = i600
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i603 = data
  i602.name = i603[0]
  i602.index = i603[1]
  i602.startup = !!i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.aspect = i605[1]
  i604.orthographic = !!i605[2]
  i604.orthographicSize = i605[3]
  i604.backgroundColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.nearClipPlane = i605[8]
  i604.farClipPlane = i605[9]
  i604.fieldOfView = i605[10]
  i604.depth = i605[11]
  i604.clearFlags = i605[12]
  i604.cullingMask = i605[13]
  i604.rect = i605[14]
  request.r(i605[15], i605[16], 0, i604, 'targetTexture')
  i604.usePhysicalProperties = !!i605[17]
  i604.focalLength = i605[18]
  i604.sensorSize = new pc.Vec2( i605[19], i605[20] )
  i604.lensShift = new pc.Vec2( i605[21], i605[22] )
  i604.gateFit = i605[23]
  i604.commandBufferCount = i605[24]
  i604.cameraType = i605[25]
  return i604
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i607 = data
  i606.m_RenderShadows = !!i607[0]
  i606.m_RequiresDepthTextureOption = i607[1]
  i606.m_RequiresOpaqueTextureOption = i607[2]
  i606.m_CameraType = i607[3]
  var i609 = i607[4]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.m_Cameras = i608
  i606.m_RendererIndex = i607[5]
  i606.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i607[6] )
  request.r(i607[7], i607[8], 0, i606, 'm_VolumeTrigger')
  i606.m_VolumeFrameworkUpdateModeOption = i607[9]
  i606.m_RenderPostProcessing = !!i607[10]
  i606.m_Antialiasing = i607[11]
  i606.m_AntialiasingQuality = i607[12]
  i606.m_StopNaN = !!i607[13]
  i606.m_Dithering = !!i607[14]
  i606.m_ClearDepth = !!i607[15]
  i606.m_AllowXRRendering = !!i607[16]
  i606.m_AllowHDROutput = !!i607[17]
  i606.m_UseScreenCoordOverride = !!i607[18]
  i606.m_ScreenSizeOverride = new pc.Vec4( i607[19], i607[20], i607[21], i607[22] )
  i606.m_ScreenCoordScaleBias = new pc.Vec4( i607[23], i607[24], i607[25], i607[26] )
  i606.m_RequiresDepthTexture = !!i607[27]
  i606.m_RequiresColorTexture = !!i607[28]
  i606.m_Version = i607[29]
  i606.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i607[30], i606.m_TaaSettings)
  return i606
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i613 = data
  i612.m_Quality = i613[0]
  i612.m_FrameInfluence = i613[1]
  i612.m_JitterScale = i613[2]
  i612.m_MipBias = i613[3]
  i612.m_VarianceClampScale = i613[4]
  i612.m_ContrastAdaptiveSharpening = i613[5]
  return i612
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i615 = data
  i614.m_ComponentVersion = i615[0]
  i614.m_LightType = i615[1]
  i614.m_BlendStyleIndex = i615[2]
  i614.m_FalloffIntensity = i615[3]
  i614.m_Color = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.m_Intensity = i615[8]
  i614.m_LightVolumeIntensity = i615[9]
  i614.m_LightVolumeIntensityEnabled = !!i615[10]
  i614.m_ApplyToSortingLayers = i615[11]
  request.r(i615[12], i615[13], 0, i614, 'm_LightCookieSprite')
  request.r(i615[14], i615[15], 0, i614, 'm_DeprecatedPointLightCookieSprite')
  i614.m_LightOrder = i615[16]
  i614.m_AlphaBlendOnOverlap = !!i615[17]
  i614.m_OverlapOperation = i615[18]
  i614.m_NormalMapDistance = i615[19]
  i614.m_NormalMapQuality = i615[20]
  i614.m_UseNormalMap = !!i615[21]
  i614.m_ShadowIntensityEnabled = !!i615[22]
  i614.m_ShadowIntensity = i615[23]
  i614.m_ShadowVolumeIntensityEnabled = !!i615[24]
  i614.m_ShadowVolumeIntensity = i615[25]
  i614.m_PointLightInnerAngle = i615[26]
  i614.m_PointLightOuterAngle = i615[27]
  i614.m_PointLightInnerRadius = i615[28]
  i614.m_PointLightOuterRadius = i615[29]
  i614.m_ShapeLightParametricSides = i615[30]
  i614.m_ShapeLightParametricAngleOffset = i615[31]
  i614.m_ShapeLightParametricRadius = i615[32]
  i614.m_ShapeLightFalloffSize = i615[33]
  i614.m_ShapeLightFalloffOffset = new pc.Vec2( i615[34], i615[35] )
  var i617 = i615[36]
  var i616 = []
  for(var i = 0; i < i617.length; i += 3) {
    i616.push( new pc.Vec3( i617[i + 0], i617[i + 1], i617[i + 2] ) );
  }
  i614.m_ShapePath = i616
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i621 = data
  i620.pivot = new pc.Vec2( i621[0], i621[1] )
  i620.anchorMin = new pc.Vec2( i621[2], i621[3] )
  i620.anchorMax = new pc.Vec2( i621[4], i621[5] )
  i620.sizeDelta = new pc.Vec2( i621[6], i621[7] )
  i620.anchoredPosition3D = new pc.Vec3( i621[8], i621[9], i621[10] )
  i620.rotation = new pc.Quat(i621[11], i621[12], i621[13], i621[14])
  i620.scale = new pc.Vec3( i621[15], i621[16], i621[17] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.planeDistance = i623[1]
  i622.referencePixelsPerUnit = i623[2]
  i622.isFallbackOverlay = !!i623[3]
  i622.renderMode = i623[4]
  i622.renderOrder = i623[5]
  i622.sortingLayerName = i623[6]
  i622.sortingOrder = i623[7]
  i622.scaleFactor = i623[8]
  request.r(i623[9], i623[10], 0, i622, 'worldCamera')
  i622.overrideSorting = !!i623[11]
  i622.pixelPerfect = !!i623[12]
  i622.targetDisplay = i623[13]
  i622.overridePixelPerfect = !!i623[14]
  return i622
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i625 = data
  i624.m_UiScaleMode = i625[0]
  i624.m_ReferencePixelsPerUnit = i625[1]
  i624.m_ScaleFactor = i625[2]
  i624.m_ReferenceResolution = new pc.Vec2( i625[3], i625[4] )
  i624.m_ScreenMatchMode = i625[5]
  i624.m_MatchWidthOrHeight = i625[6]
  i624.m_PhysicalUnit = i625[7]
  i624.m_FallbackScreenDPI = i625[8]
  i624.m_DefaultSpriteDPI = i625[9]
  i624.m_DynamicPixelsPerUnit = i625[10]
  i624.m_PresetInfoIsWorld = !!i625[11]
  return i624
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i627 = data
  i626.m_IgnoreReversedGraphics = !!i627[0]
  i626.m_BlockingObjects = i627[1]
  i626.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i627[2] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i629 = data
  i628.cullTransparentMesh = !!i629[0]
  return i628
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Image' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Sprite')
  i630.m_Type = i631[2]
  i630.m_PreserveAspect = !!i631[3]
  i630.m_FillCenter = !!i631[4]
  i630.m_FillMethod = i631[5]
  i630.m_FillAmount = i631[6]
  i630.m_FillClockwise = !!i631[7]
  i630.m_FillOrigin = i631[8]
  i630.m_UseSpriteMesh = !!i631[9]
  i630.m_PixelsPerUnitMultiplier = i631[10]
  request.r(i631[11], i631[12], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[13]
  i630.m_Color = new pc.Color(i631[14], i631[15], i631[16], i631[17])
  i630.m_RaycastTarget = !!i631[18]
  i630.m_RaycastPadding = new pc.Vec4( i631[19], i631[20], i631[21], i631[22] )
  return i630
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Text' )
  var i633 = data
  i632.m_FontData = request.d('UnityEngine.UI.FontData', i633[0], i632.m_FontData)
  i632.m_Text = i633[1]
  request.r(i633[2], i633[3], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[4]
  i632.m_Color = new pc.Color(i633[5], i633[6], i633[7], i633[8])
  i632.m_RaycastTarget = !!i633[9]
  i632.m_RaycastPadding = new pc.Vec4( i633[10], i633[11], i633[12], i633[13] )
  return i632
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.FontData' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Font')
  i634.m_FontSize = i635[2]
  i634.m_FontStyle = i635[3]
  i634.m_BestFit = !!i635[4]
  i634.m_MinSize = i635[5]
  i634.m_MaxSize = i635[6]
  i634.m_Alignment = i635[7]
  i634.m_AlignByGeometry = !!i635[8]
  i634.m_RichText = !!i635[9]
  i634.m_HorizontalOverflow = i635[10]
  i634.m_VerticalOverflow = i635[11]
  i634.m_LineSpacing = i635[12]
  return i634
}

Deserializers["Episode5"] = function (request, data, root) {
  var i636 = root || request.c( 'Episode5' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, '_card1_1_2')
  request.r(i637[2], i637[3], 0, i636, '_card1_2_2')
  request.r(i637[4], i637[5], 0, i636, '_card1_3_2')
  request.r(i637[6], i637[7], 0, i636, '_card1_1')
  request.r(i637[8], i637[9], 0, i636, '_card2_1')
  request.r(i637[10], i637[11], 0, i636, '_coinsText')
  return i636
}

Deserializers["Episode1"] = function (request, data, root) {
  var i638 = root || request.c( 'Episode1' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, '_arm')
  request.r(i639[2], i639[3], 0, i638, '_points')
  request.r(i639[4], i639[5], 0, i638, '_unit')
  request.r(i639[6], i639[7], 0, i638, '_particleSystem')
  request.r(i639[8], i639[9], 0, i638, '_textCoins')
  request.r(i639[10], i639[11], 0, i638, '_textDamage')
  request.r(i639[12], i639[13], 0, i638, '_textHealth')
  request.r(i639[14], i639[15], 0, i638, '_textHealth2')
  request.r(i639[16], i639[17], 0, i638, '_textDamage2')
  i638.scaleDuration = i639[18]
  i638.moveDuration = i639[19]
  i638.targetScale = new pc.Vec3( i639[20], i639[21], i639[22] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'animatorController')
  request.r(i641[2], i641[3], 0, i640, 'avatar')
  i640.updateMode = i641[4]
  i640.hasTransformHierarchy = !!i641[5]
  i640.applyRootMotion = !!i641[6]
  var i643 = i641[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.humanBones = i642
  i640.enabled = !!i641[8]
  return i640
}

Deserializers["Episode2"] = function (request, data, root) {
  var i646 = root || request.c( 'Episode2' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, '_arm')
  request.r(i647[2], i647[3], 0, i646, '_points')
  request.r(i647[4], i647[5], 0, i646, '_unit1')
  request.r(i647[6], i647[7], 0, i646, '_unit2')
  request.r(i647[8], i647[9], 0, i646, '_particleSystem1')
  request.r(i647[10], i647[11], 0, i646, '_particleSystem2')
  request.r(i647[12], i647[13], 0, i646, '_textCoins')
  request.r(i647[14], i647[15], 0, i646, '_textDamage')
  request.r(i647[16], i647[17], 0, i646, '_textHealth')
  request.r(i647[18], i647[19], 0, i646, '_textHealth2')
  request.r(i647[20], i647[21], 0, i646, '_textDamage2')
  i646.scaleDuration = i647[22]
  i646.moveDuration = i647[23]
  i646.targetScale = new pc.Vec3( i647[24], i647[25], i647[26] )
  return i646
}

Deserializers["Episode4"] = function (request, data, root) {
  var i648 = root || request.c( 'Episode4' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, '_cardDragcone1_1')
  request.r(i649[2], i649[3], 0, i648, '_cardDragcone2_2')
  request.r(i649[4], i649[5], 0, i648, '_cardDragcone')
  request.r(i649[6], i649[7], 0, i648, '_arm3_3')
  request.r(i649[8], i649[9], 0, i648, '_shopButton')
  request.r(i649[10], i649[11], 0, i648, '_points')
  request.r(i649[12], i649[13], 0, i648, '_textCoins')
  i648.scaleDuration = i649[14]
  i648.moveDuration = i649[15]
  i648.targetScale = new pc.Vec3( i649[16], i649[17], i649[18] )
  return i648
}

Deserializers["Episode3"] = function (request, data, root) {
  var i650 = root || request.c( 'Episode3' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, '_battle')
  request.r(i651[2], i651[3], 0, i650, '_button')
  request.r(i651[4], i651[5], 0, i650, '_cardDracone')
  request.r(i651[6], i651[7], 0, i650, '_point')
  request.r(i651[8], i651[9], 0, i650, '_cardEnemye1')
  request.r(i651[10], i651[11], 0, i650, '_cardEnemye2')
  request.r(i651[12], i651[13], 0, i650, '_cardEnemye3')
  request.r(i651[14], i651[15], 0, i650, '_particleSystem1')
  request.r(i651[16], i651[17], 0, i650, '_particleSystem2')
  request.r(i651[18], i651[19], 0, i650, '_particleSystem3')
  request.r(i651[20], i651[21], 0, i650, '_textCoins')
  request.r(i651[22], i651[23], 0, i650, '_winVictoty')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i653 = data
  i652.m_Alpha = i653[0]
  i652.m_Interactable = !!i653[1]
  i652.m_BlocksRaycasts = !!i653[2]
  i652.m_IgnoreParentGroups = !!i653[3]
  i652.enabled = !!i653[4]
  return i652
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_FirstSelected')
  i654.m_sendNavigationEvents = !!i655[2]
  i654.m_DragThreshold = i655[3]
  return i654
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i657 = data
  i656.m_HorizontalAxis = i657[0]
  i656.m_VerticalAxis = i657[1]
  i656.m_SubmitButton = i657[2]
  i656.m_CancelButton = i657[3]
  i656.m_InputActionsPerSecond = i657[4]
  i656.m_RepeatDelay = i657[5]
  i656.m_ForceModuleActive = !!i657[6]
  i656.m_SendPointerHoverToParent = !!i657[7]
  return i656
}

Deserializers["Scenario"] = function (request, data, root) {
  var i658 = root || request.c( 'Scenario' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, '_episode1')
  request.r(i659[2], i659[3], 0, i658, '_episode2')
  request.r(i659[4], i659[5], 0, i658, '_episode3')
  request.r(i659[6], i659[7], 0, i658, '_episode4')
  request.r(i659[8], i659[9], 0, i658, '_episode5')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i661 = data
  i660.ambientIntensity = i661[0]
  i660.reflectionIntensity = i661[1]
  i660.ambientMode = i661[2]
  i660.ambientLight = new pc.Color(i661[3], i661[4], i661[5], i661[6])
  i660.ambientSkyColor = new pc.Color(i661[7], i661[8], i661[9], i661[10])
  i660.ambientGroundColor = new pc.Color(i661[11], i661[12], i661[13], i661[14])
  i660.ambientEquatorColor = new pc.Color(i661[15], i661[16], i661[17], i661[18])
  i660.fogColor = new pc.Color(i661[19], i661[20], i661[21], i661[22])
  i660.fogEndDistance = i661[23]
  i660.fogStartDistance = i661[24]
  i660.fogDensity = i661[25]
  i660.fog = !!i661[26]
  request.r(i661[27], i661[28], 0, i660, 'skybox')
  i660.fogMode = i661[29]
  var i663 = i661[30]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i663[i + 0]) );
  }
  i660.lightmaps = i662
  i660.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i661[31], i660.lightProbes)
  i660.lightmapsMode = i661[32]
  i660.mixedBakeMode = i661[33]
  i660.environmentLightingMode = i661[34]
  i660.ambientProbe = new pc.SphericalHarmonicsL2(i661[35])
  i660.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i661[36])
  i660.useReferenceAmbientProbe = !!i661[37]
  request.r(i661[38], i661[39], 0, i660, 'customReflection')
  request.r(i661[40], i661[41], 0, i660, 'defaultReflection')
  i660.defaultReflectionMode = i661[42]
  i660.defaultReflectionResolution = i661[43]
  i660.sunLightObjectId = i661[44]
  i660.pixelLightCount = i661[45]
  i660.defaultReflectionHDR = !!i661[46]
  i660.hasLightDataAsset = !!i661[47]
  i660.hasManualGenerate = !!i661[48]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'lightmapColor')
  request.r(i667[2], i667[3], 0, i666, 'lightmapDirection')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i668 = root || new UnityEngine.LightProbes()
  var i669 = data
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i675 = data
  i674.enabled = !!i675[0]
  i674.type = i675[1]
  i674.color = new pc.Color(i675[2], i675[3], i675[4], i675[5])
  i674.cullingMask = i675[6]
  i674.intensity = i675[7]
  i674.range = i675[8]
  i674.spotAngle = i675[9]
  i674.shadows = i675[10]
  i674.shadowNormalBias = i675[11]
  i674.shadowBias = i675[12]
  i674.shadowStrength = i675[13]
  i674.shadowResolution = i675[14]
  i674.lightmapBakeType = i675[15]
  i674.renderMode = i675[16]
  request.r(i675[17], i675[18], 0, i674, 'cookie')
  i674.cookieSize = i675[19]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i677 = data
  i676.AdditionalLightsPerObjectLimit = i677[0]
  i676.AdditionalLightsRenderingMode = i677[1]
  i676.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i677[2], i676.LightRenderingMode)
  i676.ColorGradingLutSize = i677[3]
  i676.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i677[4], i676.ColorGradingMode)
  i676.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i677[5], i676.MainLightRenderingMode)
  i676.MainLightRenderingModeValue = i677[6]
  i676.MainLightShadowsSupported = !!i677[7]
  i676.MixedLightingSupported = !!i677[8]
  i676.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i677[9], i676.MsaaQuality)
  i676.MSAA = i677[10]
  i676.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i677[11], i676.OpaqueDownsampling)
  i676.RenderScale = i677[12]
  i676.RequireDepthTexture = !!i677[13]
  i676.RequireOpaqueTexture = !!i677[14]
  i676.ShadowAtlasResolution = i677[15]
  i676.ShadowDepthBias = i677[16]
  i676.SupportsHDR = !!i677[17]
  i676.SupportsTerrainHoles = !!i677[18]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i679 = data
  i678.Disabled = i679[0]
  i678.PerVertex = i679[1]
  i678.PerPixel = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i681 = data
  i680.LowDynamicRange = i681[0]
  i680.HighDynamicRange = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i683 = data
  i682.Disabled = i683[0]
  i682._2x = i683[1]
  i682._4x = i683[2]
  i682._8x = i683[3]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i685 = data
  i684.None = i685[0]
  i684._2xBilinear = i685[1]
  i684._4xBox = i685[2]
  i684._4xBilinear = i685[3]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i687 = data
  var i689 = i687[0]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i689[i + 0]));
  }
  i686.ShaderCompilationErrors = i688
  i686.name = i687[1]
  i686.guid = i687[2]
  var i691 = i687[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i686.shaderDefinedKeywords = i690
  var i693 = i687[4]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i693[i + 0]) );
  }
  i686.passes = i692
  var i695 = i687[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i695[i + 0]) );
  }
  i686.usePasses = i694
  var i697 = i687[6]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i697[i + 0]) );
  }
  i686.defaultParameterValues = i696
  request.r(i687[7], i687[8], 0, i686, 'unityFallbackShader')
  i686.readDepth = !!i687[9]
  i686.isCreatedByShaderGraph = !!i687[10]
  i686.compiled = !!i687[11]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i701 = data
  i700.shaderName = i701[0]
  i700.errorMessage = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i706 = root || new pc.UnityShaderPass()
  var i707 = data
  i706.id = i707[0]
  i706.subShaderIndex = i707[1]
  i706.name = i707[2]
  i706.passType = i707[3]
  i706.grabPassTextureName = i707[4]
  i706.usePass = !!i707[5]
  i706.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[6], i706.zTest)
  i706.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[7], i706.zWrite)
  i706.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[8], i706.culling)
  i706.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i707[9], i706.blending)
  i706.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i707[10], i706.alphaBlending)
  i706.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[11], i706.colorWriteMask)
  i706.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[12], i706.offsetUnits)
  i706.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[13], i706.offsetFactor)
  i706.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[14], i706.stencilRef)
  i706.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[15], i706.stencilReadMask)
  i706.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[16], i706.stencilWriteMask)
  i706.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[17], i706.stencilOp)
  i706.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[18], i706.stencilOpFront)
  i706.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[19], i706.stencilOpBack)
  var i709 = i707[20]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i709[i + 0]) );
  }
  i706.tags = i708
  var i711 = i707[21]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i706.passDefinedKeywords = i710
  var i713 = i707[22]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i713[i + 0]) );
  }
  i706.passDefinedKeywordGroups = i712
  var i715 = i707[23]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i715[i + 0]) );
  }
  i706.variants = i714
  var i717 = i707[24]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i717[i + 0]) );
  }
  i706.excludedVariants = i716
  i706.hasDepthReader = !!i707[25]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i719 = data
  i718.val = i719[0]
  i718.name = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i721 = data
  i720.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[0], i720.src)
  i720.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[1], i720.dst)
  i720.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[2], i720.op)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i723 = data
  i722.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[0], i722.pass)
  i722.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[1], i722.fail)
  i722.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[2], i722.zFail)
  i722.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[3], i722.comp)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i727 = data
  i726.name = i727[0]
  i726.value = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i730.keywords = i732
  i730.hasDiscard = !!i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i737 = data
  i736.passId = i737[0]
  i736.subShaderIndex = i737[1]
  var i739 = i737[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.vertexProgram = i737[3]
  i736.fragmentProgram = i737[4]
  i736.exportedForWebGl2 = !!i737[5]
  i736.readDepth = !!i737[6]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'shader')
  i742.pass = i743[2]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i747 = data
  i746.name = i747[0]
  i746.type = i747[1]
  i746.value = new pc.Vec4( i747[2], i747[3], i747[4], i747[5] )
  i746.textureValue = i747[6]
  i746.shaderPropertyFlag = i747[7]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'texture')
  i748.aabb = i749[3]
  i748.vertices = i749[4]
  i748.triangles = i749[5]
  i748.textureRect = UnityEngine.Rect.MinMaxRect(i749[6], i749[7], i749[8], i749[9])
  i748.packedRect = UnityEngine.Rect.MinMaxRect(i749[10], i749[11], i749[12], i749[13])
  i748.border = new pc.Vec4( i749[14], i749[15], i749[16], i749[17] )
  i748.transparency = i749[18]
  i748.bounds = i749[19]
  i748.pixelsPerUnit = i749[20]
  i748.textureWidth = i749[21]
  i748.textureHeight = i749[22]
  i748.nativeSize = new pc.Vec2( i749[23], i749[24] )
  i748.pivot = new pc.Vec2( i749[25], i749[26] )
  i748.textureRectOffset = new pc.Vec2( i749[27], i749[28] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i751 = data
  i750.name = i751[0]
  i750.wrapMode = i751[1]
  i750.isLooping = !!i751[2]
  i750.length = i751[3]
  var i753 = i751[4]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i753[i + 0]) );
  }
  i750.curves = i752
  var i755 = i751[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i755[i + 0]) );
  }
  i750.events = i754
  i750.halfPrecision = !!i751[6]
  i750._frameRate = i751[7]
  i750.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i751[8], i750.localBounds)
  i750.hasMuscleCurves = !!i751[9]
  var i757 = i751[10]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i750.clipMuscleConstant = i756
  i750.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i751[11], i750.clipBindingConstant)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i761 = data
  i760.path = i761[0]
  i760.hash = i761[1]
  i760.componentType = i761[2]
  i760.property = i761[3]
  i760.keys = i761[4]
  var i763 = i761[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i763[i + 0]) );
  }
  i760.objectReferenceKeys = i762
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i767 = data
  i766.time = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'value')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i771 = data
  i770.functionName = i771[0]
  i770.floatParameter = i771[1]
  i770.intParameter = i771[2]
  i770.stringParameter = i771[3]
  request.r(i771[4], i771[5], 0, i770, 'objectReferenceParameter')
  i770.time = i771[6]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i773 = data
  i772.center = new pc.Vec3( i773[0], i773[1], i773[2] )
  i772.extends = new pc.Vec3( i773[3], i773[4], i773[5] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.genericBindings = i778
  var i781 = i777[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.pptrCurveMapping = i780
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i783 = data
  i782.name = i783[0]
  i782.ascent = i783[1]
  i782.originalLineHeight = i783[2]
  i782.fontSize = i783[3]
  var i785 = i783[4]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i785[i + 0]) );
  }
  i782.characterInfo = i784
  request.r(i783[5], i783[6], 0, i782, 'texture')
  i782.originalFontSize = i783[7]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i789 = data
  i788.index = i789[0]
  i788.advance = i789[1]
  i788.bearing = i789[2]
  i788.glyphWidth = i789[3]
  i788.glyphHeight = i789[4]
  i788.minX = i789[5]
  i788.maxX = i789[6]
  i788.minY = i789[7]
  i788.maxY = i789[8]
  i788.uvBottomLeftX = i789[9]
  i788.uvBottomLeftY = i789[10]
  i788.uvBottomRightX = i789[11]
  i788.uvBottomRightY = i789[12]
  i788.uvTopLeftX = i789[13]
  i788.uvTopLeftY = i789[14]
  i788.uvTopRightX = i789[15]
  i788.uvTopRightY = i789[16]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i791 = data
  i790.name = i791[0]
  var i793 = i791[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i793[i + 0]) );
  }
  i790.layers = i792
  var i795 = i791[2]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i795[i + 0]) );
  }
  i790.parameters = i794
  i790.animationClips = i791[3]
  i790.avatarUnsupported = i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i799 = data
  i798.name = i799[0]
  i798.defaultWeight = i799[1]
  i798.blendingMode = i799[2]
  i798.avatarMask = i799[3]
  i798.syncedLayerIndex = i799[4]
  i798.syncedLayerAffectsTiming = !!i799[5]
  i798.syncedLayers = i799[6]
  i798.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i799[7], i798.stateMachine)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i801 = data
  i800.id = i801[0]
  i800.name = i801[1]
  i800.path = i801[2]
  var i803 = i801[3]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i803[i + 0]) );
  }
  i800.states = i802
  var i805 = i801[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i805[i + 0]) );
  }
  i800.machines = i804
  var i807 = i801[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i807[i + 0]) );
  }
  i800.entryStateTransitions = i806
  var i809 = i801[6]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i809[i + 0]) );
  }
  i800.exitStateTransitions = i808
  var i811 = i801[7]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i811[i + 0]) );
  }
  i800.anyStateTransitions = i810
  i800.defaultStateId = i801[8]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i815 = data
  i814.id = i815[0]
  i814.name = i815[1]
  i814.cycleOffset = i815[2]
  i814.cycleOffsetParameter = i815[3]
  i814.cycleOffsetParameterActive = !!i815[4]
  i814.mirror = !!i815[5]
  i814.mirrorParameter = i815[6]
  i814.mirrorParameterActive = !!i815[7]
  i814.motionId = i815[8]
  i814.nameHash = i815[9]
  i814.fullPathHash = i815[10]
  i814.speed = i815[11]
  i814.speedParameter = i815[12]
  i814.speedParameterActive = !!i815[13]
  i814.tag = i815[14]
  i814.tagHash = i815[15]
  i814.writeDefaultValues = !!i815[16]
  var i817 = i815[17]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.behaviours = i816
  var i819 = i815[18]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i819[i + 0]) );
  }
  i814.transitions = i818
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i825 = data
  i824.fullPath = i825[0]
  i824.canTransitionToSelf = !!i825[1]
  i824.duration = i825[2]
  i824.exitTime = i825[3]
  i824.hasExitTime = !!i825[4]
  i824.hasFixedDuration = !!i825[5]
  i824.interruptionSource = i825[6]
  i824.offset = i825[7]
  i824.orderedInterruption = !!i825[8]
  i824.destinationStateId = i825[9]
  i824.isExit = !!i825[10]
  i824.mute = !!i825[11]
  i824.solo = !!i825[12]
  var i827 = i825[13]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i827[i + 0]) );
  }
  i824.conditions = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i833 = data
  i832.destinationStateId = i833[0]
  i832.isExit = !!i833[1]
  i832.mute = !!i833[2]
  i832.solo = !!i833[3]
  var i835 = i833[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i835[i + 0]) );
  }
  i832.conditions = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i839 = data
  i838.defaultBool = !!i839[0]
  i838.defaultFloat = i839[1]
  i838.defaultInt = i839[2]
  i838.name = i839[3]
  i838.nameHash = i839[4]
  i838.type = i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i843[i + 0]) );
  }
  i840.files = i842
  i840.componentToPrefabIds = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i847 = data
  i846.path = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'unityObject')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i851[i + 0]) );
  }
  i848.scriptsExecutionOrder = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i853[i + 0]) );
  }
  i848.sortingLayers = i852
  var i855 = i849[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i855[i + 0]) );
  }
  i848.cullingLayers = i854
  i848.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i849[3], i848.timeSettings)
  i848.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i849[4], i848.physicsSettings)
  i848.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i849[5], i848.physics2DSettings)
  i848.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i849[6], i848.qualitySettings)
  i848.enableRealtimeShadows = !!i849[7]
  i848.enableAutoInstancing = !!i849[8]
  i848.enableDynamicBatching = !!i849[9]
  i848.lightmapEncodingQuality = i849[10]
  i848.desiredColorSpace = i849[11]
  var i857 = i849[12]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i848.allTags = i856
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i861 = data
  i860.name = i861[0]
  i860.value = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i865 = data
  i864.id = i865[0]
  i864.name = i865[1]
  i864.value = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i871 = data
  i870.fixedDeltaTime = i871[0]
  i870.maximumDeltaTime = i871[1]
  i870.timeScale = i871[2]
  i870.maximumParticleTimestep = i871[3]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i873 = data
  i872.gravity = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.defaultSolverIterations = i873[3]
  i872.bounceThreshold = i873[4]
  i872.autoSyncTransforms = !!i873[5]
  i872.autoSimulation = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i875[i + 0]) );
  }
  i872.collisionMatrix = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.layerId = i879[1]
  i878.otherLayerId = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'material')
  i880.gravity = new pc.Vec2( i881[2], i881[3] )
  i880.positionIterations = i881[4]
  i880.velocityIterations = i881[5]
  i880.velocityThreshold = i881[6]
  i880.maxLinearCorrection = i881[7]
  i880.maxAngularCorrection = i881[8]
  i880.maxTranslationSpeed = i881[9]
  i880.maxRotationSpeed = i881[10]
  i880.baumgarteScale = i881[11]
  i880.baumgarteTOIScale = i881[12]
  i880.timeToSleep = i881[13]
  i880.linearSleepTolerance = i881[14]
  i880.angularSleepTolerance = i881[15]
  i880.defaultContactOffset = i881[16]
  i880.autoSimulation = !!i881[17]
  i880.queriesHitTriggers = !!i881[18]
  i880.queriesStartInColliders = !!i881[19]
  i880.callbacksOnDisable = !!i881[20]
  i880.reuseCollisionCallbacks = !!i881[21]
  i880.autoSyncTransforms = !!i881[22]
  var i883 = i881[23]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[i + 0]) );
  }
  i888.qualityLevels = i890
  var i893 = i889[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i888.names = i892
  i888.shadows = i889[2]
  i888.anisotropicFiltering = i889[3]
  i888.antiAliasing = i889[4]
  i888.lodBias = i889[5]
  i888.shadowCascades = i889[6]
  i888.shadowDistance = i889[7]
  i888.shadowmaskMode = i889[8]
  i888.shadowProjection = i889[9]
  i888.shadowResolution = i889[10]
  i888.softParticles = !!i889[11]
  i888.softVegetation = !!i889[12]
  i888.activeColorSpace = i889[13]
  i888.desiredColorSpace = i889[14]
  i888.masterTextureLimit = i889[15]
  i888.maxQueuedFrames = i889[16]
  i888.particleRaycastBudget = i889[17]
  i888.pixelLightCount = i889[18]
  i888.realtimeReflectionProbes = !!i889[19]
  i888.shadowCascade2Split = i889[20]
  i888.shadowCascade4Split = new pc.Vec3( i889[21], i889[22], i889[23] )
  i888.streamingMipmapsActive = !!i889[24]
  i888.vSyncCount = i889[25]
  i888.asyncUploadBufferSize = i889[26]
  i888.asyncUploadTimeSlice = i889[27]
  i888.billboardsFaceCameraPosition = !!i889[28]
  i888.shadowNearPlaneOffset = i889[29]
  i888.streamingMipmapsMemoryBudget = i889[30]
  i888.maximumLODLevel = i889[31]
  i888.streamingMipmapsAddAllCameras = !!i889[32]
  i888.streamingMipmapsMaxLevelReduction = i889[33]
  i888.streamingMipmapsRenderersPerFrame = i889[34]
  i888.resolutionScalingFixedDPIFactor = i889[35]
  i888.streamingMipmapsMaxFileIORequests = i889[36]
  i888.currentQualityLevel = i889[37]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i899 = data
  i898.weight = i899[0]
  i898.vertices = i899[1]
  i898.normals = i899[2]
  i898.tangents = i899[3]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i903 = data
  i902.mode = i903[0]
  i902.parameter = i903[1]
  i902.threshold = i903[2]
  return i902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[43],"44":[7],"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[46],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[54],"62":[54],"63":[54],"64":[54],"65":[54],"66":[54],"67":[7],"68":[69],"70":[71],"72":[71],"13":[12],"73":[12],"74":[75],"76":[77],"78":[7],"79":[12],"80":[69,12],"81":[12,17],"82":[12],"83":[17,12],"84":[69],"85":[17,12],"86":[12],"87":[7],"10":[7],"88":[34],"89":[75],"90":[91],"92":[12],"93":[12],"16":[13],"18":[17,12],"94":[12],"15":[13],"95":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[12],"102":[12],"103":[12],"104":[17,12],"105":[12],"106":[12],"107":[12],"108":[12],"20":[17,12],"109":[12],"110":[31],"111":[31],"32":[31],"112":[31],"113":[7],"114":[7],"115":[75]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","Episode5","UnityEngine.GameObject","Episode1","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Episode2","Episode4","Episode3","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Arcein-Rush";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "44c3daab4de35354e9e92df1696c57a0";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1722";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3489";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e62ff478-ae3d-481f-a0e3-a6ddba86f66a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

