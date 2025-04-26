var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSpring' )
  var i447 = data
  i446.spring = i447[0]
  i446.damper = i447[1]
  i446.targetPosition = i447[2]
  return i446
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointMotor' )
  var i449 = data
  i448.m_TargetVelocity = i449[0]
  i448.m_Force = i449[1]
  i448.m_FreeSpin = i449[2]
  return i448
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointLimits' )
  var i451 = data
  i450.m_Min = i451[0]
  i450.m_Max = i451[1]
  i450.m_Bounciness = i451[2]
  i450.m_BounceMinVelocity = i451[3]
  i450.m_ContactDistance = i451[4]
  i450.minBounce = i451[5]
  i450.maxBounce = i451[6]
  return i450
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointDrive' )
  var i453 = data
  i452.m_PositionSpring = i453[0]
  i452.m_PositionDamper = i453[1]
  i452.m_MaximumForce = i453[2]
  i452.m_UseAcceleration = i453[3]
  return i452
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i455 = data
  i454.m_Spring = i455[0]
  i454.m_Damper = i455[1]
  return i454
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i457 = data
  i456.m_Limit = i457[0]
  i456.m_Bounciness = i457[1]
  i456.m_ContactDistance = i457[2]
  return i456
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i459 = data
  i458.m_ExtremumSlip = i459[0]
  i458.m_ExtremumValue = i459[1]
  i458.m_AsymptoteSlip = i459[2]
  i458.m_AsymptoteValue = i459[3]
  i458.m_Stiffness = i459[4]
  return i458
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i461 = data
  i460.m_LowerAngle = i461[0]
  i460.m_UpperAngle = i461[1]
  return i460
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i463 = data
  i462.m_MotorSpeed = i463[0]
  i462.m_MaximumMotorTorque = i463[1]
  return i462
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i465 = data
  i464.m_DampingRatio = i465[0]
  i464.m_Frequency = i465[1]
  i464.m_Angle = i465[2]
  return i464
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i467 = data
  i466.m_LowerTranslation = i467[0]
  i466.m_UpperTranslation = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i469 = data
  i468.name = i469[0]
  i468.width = i469[1]
  i468.height = i469[2]
  i468.mipmapCount = i469[3]
  i468.anisoLevel = i469[4]
  i468.filterMode = i469[5]
  i468.hdr = !!i469[6]
  i468.format = i469[7]
  i468.wrapMode = i469[8]
  i468.alphaIsTransparency = !!i469[9]
  i468.alphaSource = i469[10]
  i468.graphicsFormat = i469[11]
  i468.sRGBTexture = !!i469[12]
  i468.desiredColorSpace = i469[13]
  i468.wrapU = i469[14]
  i468.wrapV = i469[15]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i471 = data
  i470.position = new pc.Vec3( i471[0], i471[1], i471[2] )
  i470.scale = new pc.Vec3( i471[3], i471[4], i471[5] )
  i470.rotation = new pc.Quat(i471[6], i471[7], i471[8], i471[9])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i473 = data
  i472.enabled = !!i473[0]
  request.r(i473[1], i473[2], 0, i472, 'sharedMaterial')
  var i475 = i473[3]
  var i474 = []
  for(var i = 0; i < i475.length; i += 2) {
  request.r(i475[i + 0], i475[i + 1], 2, i474, '')
  }
  i472.sharedMaterials = i474
  i472.receiveShadows = !!i473[4]
  i472.shadowCastingMode = i473[5]
  i472.sortingLayerID = i473[6]
  i472.sortingOrder = i473[7]
  i472.lightmapIndex = i473[8]
  i472.lightmapSceneIndex = i473[9]
  i472.lightmapScaleOffset = new pc.Vec4( i473[10], i473[11], i473[12], i473[13] )
  i472.lightProbeUsage = i473[14]
  i472.reflectionProbeUsage = i473[15]
  request.r(i473[16], i473[17], 0, i472, 'mesh')
  i472.meshCount = i473[18]
  i472.activeVertexStreamsCount = i473[19]
  i472.alignment = i473[20]
  i472.renderMode = i473[21]
  i472.sortMode = i473[22]
  i472.lengthScale = i473[23]
  i472.velocityScale = i473[24]
  i472.cameraVelocityScale = i473[25]
  i472.normalDirection = i473[26]
  i472.sortingFudge = i473[27]
  i472.minParticleSize = i473[28]
  i472.maxParticleSize = i473[29]
  i472.pivot = new pc.Vec3( i473[30], i473[31], i473[32] )
  request.r(i473[33], i473[34], 0, i472, 'trailMaterial')
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i479 = data
  i478.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i479[0], i478.main)
  i478.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i479[1], i478.colorBySpeed)
  i478.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i479[2], i478.colorOverLifetime)
  i478.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i479[3], i478.emission)
  i478.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i479[4], i478.rotationBySpeed)
  i478.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i479[5], i478.rotationOverLifetime)
  i478.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i479[6], i478.shape)
  i478.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i479[7], i478.sizeBySpeed)
  i478.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i479[8], i478.sizeOverLifetime)
  i478.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i479[9], i478.textureSheetAnimation)
  i478.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i479[10], i478.velocityOverLifetime)
  i478.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i479[11], i478.noise)
  i478.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i479[12], i478.inheritVelocity)
  i478.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i479[13], i478.forceOverLifetime)
  i478.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i479[14], i478.limitVelocityOverLifetime)
  i478.useAutoRandomSeed = !!i479[15]
  i478.randomSeed = i479[16]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemMain()
  var i481 = data
  i480.duration = i481[0]
  i480.loop = !!i481[1]
  i480.prewarm = !!i481[2]
  i480.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[3], i480.startDelay)
  i480.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[4], i480.startLifetime)
  i480.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[5], i480.startSpeed)
  i480.startSize3D = !!i481[6]
  i480.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[7], i480.startSizeX)
  i480.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[8], i480.startSizeY)
  i480.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[9], i480.startSizeZ)
  i480.startRotation3D = !!i481[10]
  i480.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[11], i480.startRotationX)
  i480.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[12], i480.startRotationY)
  i480.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[13], i480.startRotationZ)
  i480.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i481[14], i480.startColor)
  i480.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[15], i480.gravityModifier)
  i480.simulationSpace = i481[16]
  request.r(i481[17], i481[18], 0, i480, 'customSimulationSpace')
  i480.simulationSpeed = i481[19]
  i480.useUnscaledTime = !!i481[20]
  i480.scalingMode = i481[21]
  i480.playOnAwake = !!i481[22]
  i480.maxParticles = i481[23]
  i480.emitterVelocityMode = i481[24]
  i480.stopAction = i481[25]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i482 = root || new pc.MinMaxCurve()
  var i483 = data
  i482.mode = i483[0]
  i482.curveMin = new pc.AnimationCurve( { keys_flow: i483[1] } )
  i482.curveMax = new pc.AnimationCurve( { keys_flow: i483[2] } )
  i482.curveMultiplier = i483[3]
  i482.constantMin = i483[4]
  i482.constantMax = i483[5]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i484 = root || new pc.MinMaxGradient()
  var i485 = data
  i484.mode = i485[0]
  i484.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i485[1], i484.gradientMin)
  i484.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i485[2], i484.gradientMax)
  i484.colorMin = new pc.Color(i485[3], i485[4], i485[5], i485[6])
  i484.colorMax = new pc.Color(i485[7], i485[8], i485[9], i485[10])
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i487 = data
  i486.mode = i487[0]
  var i489 = i487[1]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i489[i + 0]) );
  }
  i486.colorKeys = i488
  var i491 = i487[2]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i491[i + 0]) );
  }
  i486.alphaKeys = i490
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i492 = root || new pc.ParticleSystemColorBySpeed()
  var i493 = data
  i492.enabled = !!i493[0]
  i492.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i493[1], i492.color)
  i492.range = new pc.Vec2( i493[2], i493[3] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i497 = data
  i496.color = new pc.Color(i497[0], i497[1], i497[2], i497[3])
  i496.time = i497[4]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i501 = data
  i500.alpha = i501[0]
  i500.time = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemColorOverLifetime()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i503[1], i502.color)
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemEmitter()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[1], i504.rateOverTime)
  i504.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.rateOverDistance)
  var i507 = i505[3]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i507[i + 0]) );
  }
  i504.bursts = i506
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemBurst()
  var i511 = data
  i510.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[0], i510.count)
  i510.cycleCount = i511[1]
  i510.minCount = i511[2]
  i510.maxCount = i511[3]
  i510.repeatInterval = i511[4]
  i510.time = i511[5]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemRotationBySpeed()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.x)
  i512.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.y)
  i512.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[3], i512.z)
  i512.separateAxes = !!i513[4]
  i512.range = new pc.Vec2( i513[5], i513[6] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemRotationOverLifetime()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[1], i514.x)
  i514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.y)
  i514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.z)
  i514.separateAxes = !!i515[4]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemShape()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.shapeType = i517[1]
  i516.randomDirectionAmount = i517[2]
  i516.sphericalDirectionAmount = i517[3]
  i516.randomPositionAmount = i517[4]
  i516.alignToDirection = !!i517[5]
  i516.radius = i517[6]
  i516.radiusMode = i517[7]
  i516.radiusSpread = i517[8]
  i516.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[9], i516.radiusSpeed)
  i516.radiusThickness = i517[10]
  i516.angle = i517[11]
  i516.length = i517[12]
  i516.boxThickness = new pc.Vec3( i517[13], i517[14], i517[15] )
  i516.meshShapeType = i517[16]
  request.r(i517[17], i517[18], 0, i516, 'mesh')
  request.r(i517[19], i517[20], 0, i516, 'meshRenderer')
  request.r(i517[21], i517[22], 0, i516, 'skinnedMeshRenderer')
  i516.useMeshMaterialIndex = !!i517[23]
  i516.meshMaterialIndex = i517[24]
  i516.useMeshColors = !!i517[25]
  i516.normalOffset = i517[26]
  i516.arc = i517[27]
  i516.arcMode = i517[28]
  i516.arcSpread = i517[29]
  i516.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[30], i516.arcSpeed)
  i516.donutRadius = i517[31]
  i516.position = new pc.Vec3( i517[32], i517[33], i517[34] )
  i516.rotation = new pc.Vec3( i517[35], i517[36], i517[37] )
  i516.scale = new pc.Vec3( i517[38], i517[39], i517[40] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemSizeBySpeed()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[1], i518.x)
  i518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[2], i518.y)
  i518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[3], i518.z)
  i518.separateAxes = !!i519[4]
  i518.range = new pc.Vec2( i519[5], i519[6] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemSizeOverLifetime()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.separateAxes = !!i521[4]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.mode = i523[1]
  i522.animation = i523[2]
  i522.numTilesX = i523[3]
  i522.numTilesY = i523[4]
  i522.useRandomRow = !!i523[5]
  i522.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[6], i522.frameOverTime)
  i522.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[7], i522.startFrame)
  i522.cycleCount = i523[8]
  i522.rowIndex = i523[9]
  i522.flipU = i523[10]
  i522.flipV = i523[11]
  i522.spriteCount = i523[12]
  var i525 = i523[13]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522.sprites = i524
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.x)
  i528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.y)
  i528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.z)
  i528.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[4], i528.radial)
  i528.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[5], i528.speedModifier)
  i528.space = i529[6]
  i528.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[7], i528.orbitalX)
  i528.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[8], i528.orbitalY)
  i528.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[9], i528.orbitalZ)
  i528.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[10], i528.orbitalOffsetX)
  i528.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[11], i528.orbitalOffsetY)
  i528.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[12], i528.orbitalOffsetZ)
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemNoise()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.separateAxes = !!i531[1]
  i530.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[2], i530.strengthX)
  i530.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[3], i530.strengthY)
  i530.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[4], i530.strengthZ)
  i530.frequency = i531[5]
  i530.damping = !!i531[6]
  i530.octaveCount = i531[7]
  i530.octaveMultiplier = i531[8]
  i530.octaveScale = i531[9]
  i530.quality = i531[10]
  i530.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[11], i530.scrollSpeed)
  i530.scrollSpeedMultiplier = i531[12]
  i530.remapEnabled = !!i531[13]
  i530.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[14], i530.remapX)
  i530.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[15], i530.remapY)
  i530.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[16], i530.remapZ)
  i530.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[17], i530.positionAmount)
  i530.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[18], i530.rotationAmount)
  i530.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[19], i530.sizeAmount)
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemInheritVelocity()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.mode = i533[1]
  i532.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[2], i532.curve)
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemForceOverLifetime()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[1], i534.x)
  i534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[2], i534.y)
  i534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[3], i534.z)
  i534.space = i535[4]
  i534.randomized = !!i535[5]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[1], i536.limit)
  i536.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.limitX)
  i536.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.limitY)
  i536.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[4], i536.limitZ)
  i536.dampen = i537[5]
  i536.separateAxes = !!i537[6]
  i536.space = i537[7]
  i536.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[8], i536.drag)
  i536.multiplyDragByParticleSize = !!i537[9]
  i536.multiplyDragByParticleVelocity = !!i537[10]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i539 = data
  i538.name = i539[0]
  i538.tagId = i539[1]
  i538.enabled = !!i539[2]
  i538.isStatic = !!i539[3]
  i538.layer = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i540 = root || new pc.UnityMaterial()
  var i541 = data
  i540.name = i541[0]
  request.r(i541[1], i541[2], 0, i540, 'shader')
  i540.renderQueue = i541[3]
  i540.enableInstancing = !!i541[4]
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i543[i + 0]) );
  }
  i540.floatParameters = i542
  var i545 = i541[6]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i545[i + 0]) );
  }
  i540.colorParameters = i544
  var i547 = i541[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i547[i + 0]) );
  }
  i540.vectorParameters = i546
  var i549 = i541[8]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i549[i + 0]) );
  }
  i540.textureParameters = i548
  var i551 = i541[9]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i551[i + 0]) );
  }
  i540.materialFlags = i550
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Color(i559[1], i559[2], i559[3], i559[4])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Vec4( i563[1], i563[2], i563[3], i563[4] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'value')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i571 = data
  i570.name = i571[0]
  i570.enabled = !!i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i573 = data
  i572.name = i573[0]
  i572.halfPrecision = !!i573[1]
  i572.useUInt32IndexFormat = !!i573[2]
  i572.vertexCount = i573[3]
  i572.aabb = i573[4]
  var i575 = i573[5]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( !!i575[i + 0] );
  }
  i572.streams = i574
  i572.vertices = i573[6]
  var i577 = i573[7]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i577[i + 0]) );
  }
  i572.subMeshes = i576
  var i579 = i573[8]
  var i578 = []
  for(var i = 0; i < i579.length; i += 16) {
    i578.push( new pc.Mat4().setData(i579[i + 0], i579[i + 1], i579[i + 2], i579[i + 3],  i579[i + 4], i579[i + 5], i579[i + 6], i579[i + 7],  i579[i + 8], i579[i + 9], i579[i + 10], i579[i + 11],  i579[i + 12], i579[i + 13], i579[i + 14], i579[i + 15]) );
  }
  i572.bindposes = i578
  var i581 = i573[9]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i581[i + 0]) );
  }
  i572.blendShapes = i580
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i587 = data
  i586.triangles = i587[0]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i593 = data
  i592.name = i593[0]
  var i595 = i593[1]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i595[i + 0]) );
  }
  i592.frames = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i597 = data
  i596.name = i597[0]
  i596.index = i597[1]
  i596.startup = !!i597[2]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i599 = data
  i598.enabled = !!i599[0]
  i598.aspect = i599[1]
  i598.orthographic = !!i599[2]
  i598.orthographicSize = i599[3]
  i598.backgroundColor = new pc.Color(i599[4], i599[5], i599[6], i599[7])
  i598.nearClipPlane = i599[8]
  i598.farClipPlane = i599[9]
  i598.fieldOfView = i599[10]
  i598.depth = i599[11]
  i598.clearFlags = i599[12]
  i598.cullingMask = i599[13]
  i598.rect = i599[14]
  request.r(i599[15], i599[16], 0, i598, 'targetTexture')
  i598.usePhysicalProperties = !!i599[17]
  i598.focalLength = i599[18]
  i598.sensorSize = new pc.Vec2( i599[19], i599[20] )
  i598.lensShift = new pc.Vec2( i599[21], i599[22] )
  i598.gateFit = i599[23]
  i598.commandBufferCount = i599[24]
  i598.cameraType = i599[25]
  return i598
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i601 = data
  i600.m_RenderShadows = !!i601[0]
  i600.m_RequiresDepthTextureOption = i601[1]
  i600.m_RequiresOpaqueTextureOption = i601[2]
  i600.m_CameraType = i601[3]
  var i603 = i601[4]
  var i602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 1, i602, '')
  }
  i600.m_Cameras = i602
  i600.m_RendererIndex = i601[5]
  i600.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i601[6] )
  request.r(i601[7], i601[8], 0, i600, 'm_VolumeTrigger')
  i600.m_VolumeFrameworkUpdateModeOption = i601[9]
  i600.m_RenderPostProcessing = !!i601[10]
  i600.m_Antialiasing = i601[11]
  i600.m_AntialiasingQuality = i601[12]
  i600.m_StopNaN = !!i601[13]
  i600.m_Dithering = !!i601[14]
  i600.m_ClearDepth = !!i601[15]
  i600.m_AllowXRRendering = !!i601[16]
  i600.m_AllowHDROutput = !!i601[17]
  i600.m_UseScreenCoordOverride = !!i601[18]
  i600.m_ScreenSizeOverride = new pc.Vec4( i601[19], i601[20], i601[21], i601[22] )
  i600.m_ScreenCoordScaleBias = new pc.Vec4( i601[23], i601[24], i601[25], i601[26] )
  i600.m_RequiresDepthTexture = !!i601[27]
  i600.m_RequiresColorTexture = !!i601[28]
  i600.m_Version = i601[29]
  i600.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i601[30], i600.m_TaaSettings)
  return i600
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i607 = data
  i606.m_Quality = i607[0]
  i606.m_FrameInfluence = i607[1]
  i606.m_JitterScale = i607[2]
  i606.m_MipBias = i607[3]
  i606.m_VarianceClampScale = i607[4]
  i606.m_ContrastAdaptiveSharpening = i607[5]
  return i606
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i609 = data
  i608.m_ComponentVersion = i609[0]
  i608.m_LightType = i609[1]
  i608.m_BlendStyleIndex = i609[2]
  i608.m_FalloffIntensity = i609[3]
  i608.m_Color = new pc.Color(i609[4], i609[5], i609[6], i609[7])
  i608.m_Intensity = i609[8]
  i608.m_LightVolumeIntensity = i609[9]
  i608.m_LightVolumeIntensityEnabled = !!i609[10]
  i608.m_ApplyToSortingLayers = i609[11]
  request.r(i609[12], i609[13], 0, i608, 'm_LightCookieSprite')
  request.r(i609[14], i609[15], 0, i608, 'm_DeprecatedPointLightCookieSprite')
  i608.m_LightOrder = i609[16]
  i608.m_AlphaBlendOnOverlap = !!i609[17]
  i608.m_OverlapOperation = i609[18]
  i608.m_NormalMapDistance = i609[19]
  i608.m_NormalMapQuality = i609[20]
  i608.m_UseNormalMap = !!i609[21]
  i608.m_ShadowIntensityEnabled = !!i609[22]
  i608.m_ShadowIntensity = i609[23]
  i608.m_ShadowVolumeIntensityEnabled = !!i609[24]
  i608.m_ShadowVolumeIntensity = i609[25]
  i608.m_PointLightInnerAngle = i609[26]
  i608.m_PointLightOuterAngle = i609[27]
  i608.m_PointLightInnerRadius = i609[28]
  i608.m_PointLightOuterRadius = i609[29]
  i608.m_ShapeLightParametricSides = i609[30]
  i608.m_ShapeLightParametricAngleOffset = i609[31]
  i608.m_ShapeLightParametricRadius = i609[32]
  i608.m_ShapeLightFalloffSize = i609[33]
  i608.m_ShapeLightFalloffOffset = new pc.Vec2( i609[34], i609[35] )
  var i611 = i609[36]
  var i610 = []
  for(var i = 0; i < i611.length; i += 3) {
    i610.push( new pc.Vec3( i611[i + 0], i611[i + 1], i611[i + 2] ) );
  }
  i608.m_ShapePath = i610
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i615 = data
  i614.pivot = new pc.Vec2( i615[0], i615[1] )
  i614.anchorMin = new pc.Vec2( i615[2], i615[3] )
  i614.anchorMax = new pc.Vec2( i615[4], i615[5] )
  i614.sizeDelta = new pc.Vec2( i615[6], i615[7] )
  i614.anchoredPosition3D = new pc.Vec3( i615[8], i615[9], i615[10] )
  i614.rotation = new pc.Quat(i615[11], i615[12], i615[13], i615[14])
  i614.scale = new pc.Vec3( i615[15], i615[16], i615[17] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i617 = data
  i616.enabled = !!i617[0]
  i616.planeDistance = i617[1]
  i616.referencePixelsPerUnit = i617[2]
  i616.isFallbackOverlay = !!i617[3]
  i616.renderMode = i617[4]
  i616.renderOrder = i617[5]
  i616.sortingLayerName = i617[6]
  i616.sortingOrder = i617[7]
  i616.scaleFactor = i617[8]
  request.r(i617[9], i617[10], 0, i616, 'worldCamera')
  i616.overrideSorting = !!i617[11]
  i616.pixelPerfect = !!i617[12]
  i616.targetDisplay = i617[13]
  i616.overridePixelPerfect = !!i617[14]
  return i616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i619 = data
  i618.m_UiScaleMode = i619[0]
  i618.m_ReferencePixelsPerUnit = i619[1]
  i618.m_ScaleFactor = i619[2]
  i618.m_ReferenceResolution = new pc.Vec2( i619[3], i619[4] )
  i618.m_ScreenMatchMode = i619[5]
  i618.m_MatchWidthOrHeight = i619[6]
  i618.m_PhysicalUnit = i619[7]
  i618.m_FallbackScreenDPI = i619[8]
  i618.m_DefaultSpriteDPI = i619[9]
  i618.m_DynamicPixelsPerUnit = i619[10]
  i618.m_PresetInfoIsWorld = !!i619[11]
  return i618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i621 = data
  i620.m_IgnoreReversedGraphics = !!i621[0]
  i620.m_BlockingObjects = i621[1]
  i620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i621[2] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i623 = data
  i622.cullTransparentMesh = !!i623[0]
  return i622
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Image' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_Sprite')
  i624.m_Type = i625[2]
  i624.m_PreserveAspect = !!i625[3]
  i624.m_FillCenter = !!i625[4]
  i624.m_FillMethod = i625[5]
  i624.m_FillAmount = i625[6]
  i624.m_FillClockwise = !!i625[7]
  i624.m_FillOrigin = i625[8]
  i624.m_UseSpriteMesh = !!i625[9]
  i624.m_PixelsPerUnitMultiplier = i625[10]
  request.r(i625[11], i625[12], 0, i624, 'm_Material')
  i624.m_Maskable = !!i625[13]
  i624.m_Color = new pc.Color(i625[14], i625[15], i625[16], i625[17])
  i624.m_RaycastTarget = !!i625[18]
  i624.m_RaycastPadding = new pc.Vec4( i625[19], i625[20], i625[21], i625[22] )
  return i624
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Text' )
  var i627 = data
  i626.m_FontData = request.d('UnityEngine.UI.FontData', i627[0], i626.m_FontData)
  i626.m_Text = i627[1]
  request.r(i627[2], i627[3], 0, i626, 'm_Material')
  i626.m_Maskable = !!i627[4]
  i626.m_Color = new pc.Color(i627[5], i627[6], i627[7], i627[8])
  i626.m_RaycastTarget = !!i627[9]
  i626.m_RaycastPadding = new pc.Vec4( i627[10], i627[11], i627[12], i627[13] )
  return i626
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.FontData' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Font')
  i628.m_FontSize = i629[2]
  i628.m_FontStyle = i629[3]
  i628.m_BestFit = !!i629[4]
  i628.m_MinSize = i629[5]
  i628.m_MaxSize = i629[6]
  i628.m_Alignment = i629[7]
  i628.m_AlignByGeometry = !!i629[8]
  i628.m_RichText = !!i629[9]
  i628.m_HorizontalOverflow = i629[10]
  i628.m_VerticalOverflow = i629[11]
  i628.m_LineSpacing = i629[12]
  return i628
}

Deserializers["Episode1"] = function (request, data, root) {
  var i630 = root || request.c( 'Episode1' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, '_arm')
  request.r(i631[2], i631[3], 0, i630, '_points')
  request.r(i631[4], i631[5], 0, i630, '_unit')
  request.r(i631[6], i631[7], 0, i630, '_particleSystem')
  request.r(i631[8], i631[9], 0, i630, '_textCoins')
  request.r(i631[10], i631[11], 0, i630, '_textDamage')
  request.r(i631[12], i631[13], 0, i630, '_textHealth')
  request.r(i631[14], i631[15], 0, i630, '_textHealth2')
  request.r(i631[16], i631[17], 0, i630, '_textDamage2')
  i630.scaleDuration = i631[18]
  i630.moveDuration = i631[19]
  i630.targetScale = new pc.Vec3( i631[20], i631[21], i631[22] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'animatorController')
  request.r(i633[2], i633[3], 0, i632, 'avatar')
  i632.updateMode = i633[4]
  i632.hasTransformHierarchy = !!i633[5]
  i632.applyRootMotion = !!i633[6]
  var i635 = i633[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.humanBones = i634
  i632.enabled = !!i633[8]
  return i632
}

Deserializers["Episode2"] = function (request, data, root) {
  var i638 = root || request.c( 'Episode2' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, '_arm')
  request.r(i639[2], i639[3], 0, i638, '_points')
  request.r(i639[4], i639[5], 0, i638, '_unit1')
  request.r(i639[6], i639[7], 0, i638, '_unit2')
  request.r(i639[8], i639[9], 0, i638, '_particleSystem1')
  request.r(i639[10], i639[11], 0, i638, '_particleSystem2')
  request.r(i639[12], i639[13], 0, i638, '_textCoins')
  request.r(i639[14], i639[15], 0, i638, '_textDamage')
  request.r(i639[16], i639[17], 0, i638, '_textHealth')
  request.r(i639[18], i639[19], 0, i638, '_textHealth2')
  request.r(i639[20], i639[21], 0, i638, '_textDamage2')
  i638.scaleDuration = i639[22]
  i638.moveDuration = i639[23]
  i638.targetScale = new pc.Vec3( i639[24], i639[25], i639[26] )
  return i638
}

Deserializers["Episode3"] = function (request, data, root) {
  var i640 = root || request.c( 'Episode3' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, '_battle')
  request.r(i641[2], i641[3], 0, i640, '_button')
  request.r(i641[4], i641[5], 0, i640, '_particleSystem1')
  request.r(i641[6], i641[7], 0, i640, '_particleSystem2')
  request.r(i641[8], i641[9], 0, i640, '_particleSystem3')
  return i640
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_FirstSelected')
  i642.m_sendNavigationEvents = !!i643[2]
  i642.m_DragThreshold = i643[3]
  return i642
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i645 = data
  i644.m_HorizontalAxis = i645[0]
  i644.m_VerticalAxis = i645[1]
  i644.m_SubmitButton = i645[2]
  i644.m_CancelButton = i645[3]
  i644.m_InputActionsPerSecond = i645[4]
  i644.m_RepeatDelay = i645[5]
  i644.m_ForceModuleActive = !!i645[6]
  i644.m_SendPointerHoverToParent = !!i645[7]
  return i644
}

Deserializers["Scenario"] = function (request, data, root) {
  var i646 = root || request.c( 'Scenario' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, '_episode1')
  request.r(i647[2], i647[3], 0, i646, '_episode2')
  request.r(i647[4], i647[5], 0, i646, '_episode3')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i649 = data
  i648.ambientIntensity = i649[0]
  i648.reflectionIntensity = i649[1]
  i648.ambientMode = i649[2]
  i648.ambientLight = new pc.Color(i649[3], i649[4], i649[5], i649[6])
  i648.ambientSkyColor = new pc.Color(i649[7], i649[8], i649[9], i649[10])
  i648.ambientGroundColor = new pc.Color(i649[11], i649[12], i649[13], i649[14])
  i648.ambientEquatorColor = new pc.Color(i649[15], i649[16], i649[17], i649[18])
  i648.fogColor = new pc.Color(i649[19], i649[20], i649[21], i649[22])
  i648.fogEndDistance = i649[23]
  i648.fogStartDistance = i649[24]
  i648.fogDensity = i649[25]
  i648.fog = !!i649[26]
  request.r(i649[27], i649[28], 0, i648, 'skybox')
  i648.fogMode = i649[29]
  var i651 = i649[30]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i651[i + 0]) );
  }
  i648.lightmaps = i650
  i648.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i649[31], i648.lightProbes)
  i648.lightmapsMode = i649[32]
  i648.mixedBakeMode = i649[33]
  i648.environmentLightingMode = i649[34]
  i648.ambientProbe = new pc.SphericalHarmonicsL2(i649[35])
  i648.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i649[36])
  i648.useReferenceAmbientProbe = !!i649[37]
  request.r(i649[38], i649[39], 0, i648, 'customReflection')
  request.r(i649[40], i649[41], 0, i648, 'defaultReflection')
  i648.defaultReflectionMode = i649[42]
  i648.defaultReflectionResolution = i649[43]
  i648.sunLightObjectId = i649[44]
  i648.pixelLightCount = i649[45]
  i648.defaultReflectionHDR = !!i649[46]
  i648.hasLightDataAsset = !!i649[47]
  i648.hasManualGenerate = !!i649[48]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'lightmapColor')
  request.r(i655[2], i655[3], 0, i654, 'lightmapDirection')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i656 = root || new UnityEngine.LightProbes()
  var i657 = data
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i663 = data
  i662.enabled = !!i663[0]
  i662.type = i663[1]
  i662.color = new pc.Color(i663[2], i663[3], i663[4], i663[5])
  i662.cullingMask = i663[6]
  i662.intensity = i663[7]
  i662.range = i663[8]
  i662.spotAngle = i663[9]
  i662.shadows = i663[10]
  i662.shadowNormalBias = i663[11]
  i662.shadowBias = i663[12]
  i662.shadowStrength = i663[13]
  i662.shadowResolution = i663[14]
  i662.lightmapBakeType = i663[15]
  i662.renderMode = i663[16]
  request.r(i663[17], i663[18], 0, i662, 'cookie')
  i662.cookieSize = i663[19]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i665 = data
  i664.AdditionalLightsPerObjectLimit = i665[0]
  i664.AdditionalLightsRenderingMode = i665[1]
  i664.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i665[2], i664.LightRenderingMode)
  i664.ColorGradingLutSize = i665[3]
  i664.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i665[4], i664.ColorGradingMode)
  i664.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i665[5], i664.MainLightRenderingMode)
  i664.MainLightRenderingModeValue = i665[6]
  i664.MainLightShadowsSupported = !!i665[7]
  i664.MixedLightingSupported = !!i665[8]
  i664.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i665[9], i664.MsaaQuality)
  i664.MSAA = i665[10]
  i664.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i665[11], i664.OpaqueDownsampling)
  i664.RenderScale = i665[12]
  i664.RequireDepthTexture = !!i665[13]
  i664.RequireOpaqueTexture = !!i665[14]
  i664.ShadowAtlasResolution = i665[15]
  i664.ShadowDepthBias = i665[16]
  i664.SupportsHDR = !!i665[17]
  i664.SupportsTerrainHoles = !!i665[18]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i667 = data
  i666.Disabled = i667[0]
  i666.PerVertex = i667[1]
  i666.PerPixel = i667[2]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i669 = data
  i668.LowDynamicRange = i669[0]
  i668.HighDynamicRange = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i671 = data
  i670.Disabled = i671[0]
  i670._2x = i671[1]
  i670._4x = i671[2]
  i670._8x = i671[3]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i673 = data
  i672.None = i673[0]
  i672._2xBilinear = i673[1]
  i672._4xBox = i673[2]
  i672._4xBilinear = i673[3]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i675 = data
  var i677 = i675[0]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i677.length; i += 1) {
    i676.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i677[i + 0]));
  }
  i674.ShaderCompilationErrors = i676
  i674.name = i675[1]
  i674.guid = i675[2]
  var i679 = i675[3]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i674.shaderDefinedKeywords = i678
  var i681 = i675[4]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i681[i + 0]) );
  }
  i674.passes = i680
  var i683 = i675[5]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i683[i + 0]) );
  }
  i674.usePasses = i682
  var i685 = i675[6]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i685[i + 0]) );
  }
  i674.defaultParameterValues = i684
  request.r(i675[7], i675[8], 0, i674, 'unityFallbackShader')
  i674.readDepth = !!i675[9]
  i674.isCreatedByShaderGraph = !!i675[10]
  i674.compiled = !!i675[11]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i689 = data
  i688.shaderName = i689[0]
  i688.errorMessage = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i694 = root || new pc.UnityShaderPass()
  var i695 = data
  i694.id = i695[0]
  i694.subShaderIndex = i695[1]
  i694.name = i695[2]
  i694.passType = i695[3]
  i694.grabPassTextureName = i695[4]
  i694.usePass = !!i695[5]
  i694.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[6], i694.zTest)
  i694.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[7], i694.zWrite)
  i694.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[8], i694.culling)
  i694.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i695[9], i694.blending)
  i694.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i695[10], i694.alphaBlending)
  i694.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[11], i694.colorWriteMask)
  i694.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[12], i694.offsetUnits)
  i694.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[13], i694.offsetFactor)
  i694.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[14], i694.stencilRef)
  i694.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[15], i694.stencilReadMask)
  i694.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[16], i694.stencilWriteMask)
  i694.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[17], i694.stencilOp)
  i694.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[18], i694.stencilOpFront)
  i694.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i695[19], i694.stencilOpBack)
  var i697 = i695[20]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i697[i + 0]) );
  }
  i694.tags = i696
  var i699 = i695[21]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i694.passDefinedKeywords = i698
  var i701 = i695[22]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i701[i + 0]) );
  }
  i694.passDefinedKeywordGroups = i700
  var i703 = i695[23]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i703[i + 0]) );
  }
  i694.variants = i702
  var i705 = i695[24]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i694.excludedVariants = i704
  i694.hasDepthReader = !!i695[25]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i707 = data
  i706.val = i707[0]
  i706.name = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i709 = data
  i708.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[0], i708.src)
  i708.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[1], i708.dst)
  i708.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i709[2], i708.op)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i711 = data
  i710.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.pass)
  i710.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.fail)
  i710.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.zFail)
  i710.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[3], i710.comp)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i715 = data
  i714.name = i715[0]
  i714.value = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i719 = data
  var i721 = i719[0]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i718.keywords = i720
  i718.hasDiscard = !!i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i725 = data
  i724.passId = i725[0]
  i724.subShaderIndex = i725[1]
  var i727 = i725[2]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i724.keywords = i726
  i724.vertexProgram = i725[3]
  i724.fragmentProgram = i725[4]
  i724.exportedForWebGl2 = !!i725[5]
  i724.readDepth = !!i725[6]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'shader')
  i730.pass = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i735 = data
  i734.name = i735[0]
  i734.type = i735[1]
  i734.value = new pc.Vec4( i735[2], i735[3], i735[4], i735[5] )
  i734.textureValue = i735[6]
  i734.shaderPropertyFlag = i735[7]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i737 = data
  i736.name = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'texture')
  i736.aabb = i737[3]
  i736.vertices = i737[4]
  i736.triangles = i737[5]
  i736.textureRect = UnityEngine.Rect.MinMaxRect(i737[6], i737[7], i737[8], i737[9])
  i736.packedRect = UnityEngine.Rect.MinMaxRect(i737[10], i737[11], i737[12], i737[13])
  i736.border = new pc.Vec4( i737[14], i737[15], i737[16], i737[17] )
  i736.transparency = i737[18]
  i736.bounds = i737[19]
  i736.pixelsPerUnit = i737[20]
  i736.textureWidth = i737[21]
  i736.textureHeight = i737[22]
  i736.nativeSize = new pc.Vec2( i737[23], i737[24] )
  i736.pivot = new pc.Vec2( i737[25], i737[26] )
  i736.textureRectOffset = new pc.Vec2( i737[27], i737[28] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i739 = data
  i738.name = i739[0]
  i738.wrapMode = i739[1]
  i738.isLooping = !!i739[2]
  i738.length = i739[3]
  var i741 = i739[4]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i741[i + 0]) );
  }
  i738.curves = i740
  var i743 = i739[5]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i743[i + 0]) );
  }
  i738.events = i742
  i738.halfPrecision = !!i739[6]
  i738._frameRate = i739[7]
  i738.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i739[8], i738.localBounds)
  i738.hasMuscleCurves = !!i739[9]
  var i745 = i739[10]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i738.clipMuscleConstant = i744
  i738.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i739[11], i738.clipBindingConstant)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i749 = data
  i748.path = i749[0]
  i748.hash = i749[1]
  i748.componentType = i749[2]
  i748.property = i749[3]
  i748.keys = i749[4]
  var i751 = i749[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i751[i + 0]) );
  }
  i748.objectReferenceKeys = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i755 = data
  i754.time = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'value')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i759 = data
  i758.functionName = i759[0]
  i758.floatParameter = i759[1]
  i758.intParameter = i759[2]
  i758.stringParameter = i759[3]
  request.r(i759[4], i759[5], 0, i758, 'objectReferenceParameter')
  i758.time = i759[6]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i761 = data
  i760.center = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.extends = new pc.Vec3( i761[3], i761[4], i761[5] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i764.genericBindings = i766
  var i769 = i765[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i764.pptrCurveMapping = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i771 = data
  i770.name = i771[0]
  i770.ascent = i771[1]
  i770.originalLineHeight = i771[2]
  i770.fontSize = i771[3]
  var i773 = i771[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i773[i + 0]) );
  }
  i770.characterInfo = i772
  request.r(i771[5], i771[6], 0, i770, 'texture')
  i770.originalFontSize = i771[7]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i777 = data
  i776.index = i777[0]
  i776.advance = i777[1]
  i776.bearing = i777[2]
  i776.glyphWidth = i777[3]
  i776.glyphHeight = i777[4]
  i776.minX = i777[5]
  i776.maxX = i777[6]
  i776.minY = i777[7]
  i776.maxY = i777[8]
  i776.uvBottomLeftX = i777[9]
  i776.uvBottomLeftY = i777[10]
  i776.uvBottomRightX = i777[11]
  i776.uvBottomRightY = i777[12]
  i776.uvTopLeftX = i777[13]
  i776.uvTopLeftY = i777[14]
  i776.uvTopRightX = i777[15]
  i776.uvTopRightY = i777[16]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i779 = data
  i778.name = i779[0]
  var i781 = i779[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i781[i + 0]) );
  }
  i778.layers = i780
  var i783 = i779[2]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i783[i + 0]) );
  }
  i778.parameters = i782
  i778.animationClips = i779[3]
  i778.avatarUnsupported = i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i787 = data
  i786.name = i787[0]
  i786.defaultWeight = i787[1]
  i786.blendingMode = i787[2]
  i786.avatarMask = i787[3]
  i786.syncedLayerIndex = i787[4]
  i786.syncedLayerAffectsTiming = !!i787[5]
  i786.syncedLayers = i787[6]
  i786.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i787[7], i786.stateMachine)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  i788.path = i789[2]
  var i791 = i789[3]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i791[i + 0]) );
  }
  i788.states = i790
  var i793 = i789[4]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i793[i + 0]) );
  }
  i788.machines = i792
  var i795 = i789[5]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i795[i + 0]) );
  }
  i788.entryStateTransitions = i794
  var i797 = i789[6]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i797[i + 0]) );
  }
  i788.exitStateTransitions = i796
  var i799 = i789[7]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i799[i + 0]) );
  }
  i788.anyStateTransitions = i798
  i788.defaultStateId = i789[8]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i803 = data
  i802.id = i803[0]
  i802.name = i803[1]
  i802.cycleOffset = i803[2]
  i802.cycleOffsetParameter = i803[3]
  i802.cycleOffsetParameterActive = !!i803[4]
  i802.mirror = !!i803[5]
  i802.mirrorParameter = i803[6]
  i802.mirrorParameterActive = !!i803[7]
  i802.motionId = i803[8]
  i802.nameHash = i803[9]
  i802.fullPathHash = i803[10]
  i802.speed = i803[11]
  i802.speedParameter = i803[12]
  i802.speedParameterActive = !!i803[13]
  i802.tag = i803[14]
  i802.tagHash = i803[15]
  i802.writeDefaultValues = !!i803[16]
  var i805 = i803[17]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.behaviours = i804
  var i807 = i803[18]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i807[i + 0]) );
  }
  i802.transitions = i806
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i813 = data
  i812.fullPath = i813[0]
  i812.canTransitionToSelf = !!i813[1]
  i812.duration = i813[2]
  i812.exitTime = i813[3]
  i812.hasExitTime = !!i813[4]
  i812.hasFixedDuration = !!i813[5]
  i812.interruptionSource = i813[6]
  i812.offset = i813[7]
  i812.orderedInterruption = !!i813[8]
  i812.destinationStateId = i813[9]
  i812.isExit = !!i813[10]
  i812.mute = !!i813[11]
  i812.solo = !!i813[12]
  var i815 = i813[13]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i815[i + 0]) );
  }
  i812.conditions = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i821 = data
  i820.destinationStateId = i821[0]
  i820.isExit = !!i821[1]
  i820.mute = !!i821[2]
  i820.solo = !!i821[3]
  var i823 = i821[4]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i823[i + 0]) );
  }
  i820.conditions = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i827 = data
  i826.defaultBool = !!i827[0]
  i826.defaultFloat = i827[1]
  i826.defaultInt = i827[2]
  i826.name = i827[3]
  i826.nameHash = i827[4]
  i826.type = i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i829 = data
  var i831 = i829[0]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i831[i + 0]) );
  }
  i828.files = i830
  i828.componentToPrefabIds = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i835 = data
  i834.path = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'unityObject')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i839[i + 0]) );
  }
  i836.scriptsExecutionOrder = i838
  var i841 = i837[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i841[i + 0]) );
  }
  i836.sortingLayers = i840
  var i843 = i837[2]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i843[i + 0]) );
  }
  i836.cullingLayers = i842
  i836.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i837[3], i836.timeSettings)
  i836.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i837[4], i836.physicsSettings)
  i836.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i837[5], i836.physics2DSettings)
  i836.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i837[6], i836.qualitySettings)
  i836.enableRealtimeShadows = !!i837[7]
  i836.enableAutoInstancing = !!i837[8]
  i836.enableDynamicBatching = !!i837[9]
  i836.lightmapEncodingQuality = i837[10]
  i836.desiredColorSpace = i837[11]
  var i845 = i837[12]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i836.allTags = i844
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i849 = data
  i848.name = i849[0]
  i848.value = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i853 = data
  i852.id = i853[0]
  i852.name = i853[1]
  i852.value = i853[2]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i857 = data
  i856.id = i857[0]
  i856.name = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i859 = data
  i858.fixedDeltaTime = i859[0]
  i858.maximumDeltaTime = i859[1]
  i858.timeScale = i859[2]
  i858.maximumParticleTimestep = i859[3]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i861 = data
  i860.gravity = new pc.Vec3( i861[0], i861[1], i861[2] )
  i860.defaultSolverIterations = i861[3]
  i860.bounceThreshold = i861[4]
  i860.autoSyncTransforms = !!i861[5]
  i860.autoSimulation = !!i861[6]
  var i863 = i861[7]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i863[i + 0]) );
  }
  i860.collisionMatrix = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i867 = data
  i866.enabled = !!i867[0]
  i866.layerId = i867[1]
  i866.otherLayerId = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'material')
  i868.gravity = new pc.Vec2( i869[2], i869[3] )
  i868.positionIterations = i869[4]
  i868.velocityIterations = i869[5]
  i868.velocityThreshold = i869[6]
  i868.maxLinearCorrection = i869[7]
  i868.maxAngularCorrection = i869[8]
  i868.maxTranslationSpeed = i869[9]
  i868.maxRotationSpeed = i869[10]
  i868.baumgarteScale = i869[11]
  i868.baumgarteTOIScale = i869[12]
  i868.timeToSleep = i869[13]
  i868.linearSleepTolerance = i869[14]
  i868.angularSleepTolerance = i869[15]
  i868.defaultContactOffset = i869[16]
  i868.autoSimulation = !!i869[17]
  i868.queriesHitTriggers = !!i869[18]
  i868.queriesStartInColliders = !!i869[19]
  i868.callbacksOnDisable = !!i869[20]
  i868.reuseCollisionCallbacks = !!i869[21]
  i868.autoSyncTransforms = !!i869[22]
  var i871 = i869[23]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i871[i + 0]) );
  }
  i868.collisionMatrix = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i875 = data
  i874.enabled = !!i875[0]
  i874.layerId = i875[1]
  i874.otherLayerId = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i879[i + 0]) );
  }
  i876.qualityLevels = i878
  var i881 = i877[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i876.names = i880
  i876.shadows = i877[2]
  i876.anisotropicFiltering = i877[3]
  i876.antiAliasing = i877[4]
  i876.lodBias = i877[5]
  i876.shadowCascades = i877[6]
  i876.shadowDistance = i877[7]
  i876.shadowmaskMode = i877[8]
  i876.shadowProjection = i877[9]
  i876.shadowResolution = i877[10]
  i876.softParticles = !!i877[11]
  i876.softVegetation = !!i877[12]
  i876.activeColorSpace = i877[13]
  i876.desiredColorSpace = i877[14]
  i876.masterTextureLimit = i877[15]
  i876.maxQueuedFrames = i877[16]
  i876.particleRaycastBudget = i877[17]
  i876.pixelLightCount = i877[18]
  i876.realtimeReflectionProbes = !!i877[19]
  i876.shadowCascade2Split = i877[20]
  i876.shadowCascade4Split = new pc.Vec3( i877[21], i877[22], i877[23] )
  i876.streamingMipmapsActive = !!i877[24]
  i876.vSyncCount = i877[25]
  i876.asyncUploadBufferSize = i877[26]
  i876.asyncUploadTimeSlice = i877[27]
  i876.billboardsFaceCameraPosition = !!i877[28]
  i876.shadowNearPlaneOffset = i877[29]
  i876.streamingMipmapsMemoryBudget = i877[30]
  i876.maximumLODLevel = i877[31]
  i876.streamingMipmapsAddAllCameras = !!i877[32]
  i876.streamingMipmapsMaxLevelReduction = i877[33]
  i876.streamingMipmapsRenderersPerFrame = i877[34]
  i876.resolutionScalingFixedDPIFactor = i877[35]
  i876.streamingMipmapsMaxFileIORequests = i877[36]
  i876.currentQualityLevel = i877[37]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i887 = data
  i886.weight = i887[0]
  i886.vertices = i887[1]
  i886.normals = i887[2]
  i886.tangents = i887[3]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i891 = data
  i890.mode = i891[0]
  i890.parameter = i891[1]
  i890.threshold = i891[2]
  return i890
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[7],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[43],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[51],"59":[51],"60":[51],"61":[51],"62":[51],"63":[51],"64":[7],"65":[66],"67":[68],"69":[68],"13":[12],"70":[12],"71":[72],"73":[74],"75":[7],"76":[12],"77":[66,12],"78":[12,17],"79":[12],"80":[17,12],"81":[66],"82":[17,12],"83":[12],"84":[7],"10":[7],"85":[31],"86":[72],"87":[88],"89":[12],"90":[12],"16":[13],"18":[17,12],"91":[12],"15":[13],"92":[12],"93":[12],"94":[12],"95":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[12],"101":[17,12],"102":[12],"103":[12],"104":[12],"105":[12],"20":[17,12],"106":[12],"107":[28],"108":[28],"29":[28],"109":[28],"110":[7],"111":[7],"112":[72]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","Episode1","UnityEngine.GameObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Episode2","Episode3","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.buildID = "af71d763-632c-4b44-af20-ff912fca3b03";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

