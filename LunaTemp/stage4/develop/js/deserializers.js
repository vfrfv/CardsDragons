var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSpring' )
  var i497 = data
  i496.spring = i497[0]
  i496.damper = i497[1]
  i496.targetPosition = i497[2]
  return i496
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor' )
  var i499 = data
  i498.m_TargetVelocity = i499[0]
  i498.m_Force = i499[1]
  i498.m_FreeSpin = i499[2]
  return i498
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointLimits' )
  var i501 = data
  i500.m_Min = i501[0]
  i500.m_Max = i501[1]
  i500.m_Bounciness = i501[2]
  i500.m_BounceMinVelocity = i501[3]
  i500.m_ContactDistance = i501[4]
  i500.minBounce = i501[5]
  i500.maxBounce = i501[6]
  return i500
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointDrive' )
  var i503 = data
  i502.m_PositionSpring = i503[0]
  i502.m_PositionDamper = i503[1]
  i502.m_MaximumForce = i503[2]
  i502.m_UseAcceleration = i503[3]
  return i502
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i505 = data
  i504.m_Spring = i505[0]
  i504.m_Damper = i505[1]
  return i504
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i507 = data
  i506.m_Limit = i507[0]
  i506.m_Bounciness = i507[1]
  i506.m_ContactDistance = i507[2]
  return i506
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i509 = data
  i508.m_ExtremumSlip = i509[0]
  i508.m_ExtremumValue = i509[1]
  i508.m_AsymptoteSlip = i509[2]
  i508.m_AsymptoteValue = i509[3]
  i508.m_Stiffness = i509[4]
  return i508
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i511 = data
  i510.m_LowerAngle = i511[0]
  i510.m_UpperAngle = i511[1]
  return i510
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i513 = data
  i512.m_MotorSpeed = i513[0]
  i512.m_MaximumMotorTorque = i513[1]
  return i512
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i515 = data
  i514.m_DampingRatio = i515[0]
  i514.m_Frequency = i515[1]
  i514.m_Angle = i515[2]
  return i514
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i517 = data
  i516.m_LowerTranslation = i517[0]
  i516.m_UpperTranslation = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i519 = data
  i518.name = i519[0]
  i518.width = i519[1]
  i518.height = i519[2]
  i518.mipmapCount = i519[3]
  i518.anisoLevel = i519[4]
  i518.filterMode = i519[5]
  i518.hdr = !!i519[6]
  i518.format = i519[7]
  i518.wrapMode = i519[8]
  i518.alphaIsTransparency = !!i519[9]
  i518.alphaSource = i519[10]
  i518.graphicsFormat = i519[11]
  i518.sRGBTexture = !!i519[12]
  i518.desiredColorSpace = i519[13]
  i518.wrapU = i519[14]
  i518.wrapV = i519[15]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i521 = data
  i520.position = new pc.Vec3( i521[0], i521[1], i521[2] )
  i520.scale = new pc.Vec3( i521[3], i521[4], i521[5] )
  i520.rotation = new pc.Quat(i521[6], i521[7], i521[8], i521[9])
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i523 = data
  i522.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i523[0], i522.main)
  i522.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i523[1], i522.colorBySpeed)
  i522.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i523[2], i522.colorOverLifetime)
  i522.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i523[3], i522.emission)
  i522.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i523[4], i522.rotationBySpeed)
  i522.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i523[5], i522.rotationOverLifetime)
  i522.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i523[6], i522.shape)
  i522.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i523[7], i522.sizeBySpeed)
  i522.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i523[8], i522.sizeOverLifetime)
  i522.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i523[9], i522.textureSheetAnimation)
  i522.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i523[10], i522.velocityOverLifetime)
  i522.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i523[11], i522.noise)
  i522.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i523[12], i522.inheritVelocity)
  i522.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i523[13], i522.forceOverLifetime)
  i522.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i523[14], i522.limitVelocityOverLifetime)
  i522.useAutoRandomSeed = !!i523[15]
  i522.randomSeed = i523[16]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemMain()
  var i525 = data
  i524.duration = i525[0]
  i524.loop = !!i525[1]
  i524.prewarm = !!i525[2]
  i524.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[3], i524.startDelay)
  i524.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[4], i524.startLifetime)
  i524.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[5], i524.startSpeed)
  i524.startSize3D = !!i525[6]
  i524.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[7], i524.startSizeX)
  i524.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[8], i524.startSizeY)
  i524.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[9], i524.startSizeZ)
  i524.startRotation3D = !!i525[10]
  i524.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[11], i524.startRotationX)
  i524.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[12], i524.startRotationY)
  i524.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[13], i524.startRotationZ)
  i524.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i525[14], i524.startColor)
  i524.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[15], i524.gravityModifier)
  i524.simulationSpace = i525[16]
  request.r(i525[17], i525[18], 0, i524, 'customSimulationSpace')
  i524.simulationSpeed = i525[19]
  i524.useUnscaledTime = !!i525[20]
  i524.scalingMode = i525[21]
  i524.playOnAwake = !!i525[22]
  i524.maxParticles = i525[23]
  i524.emitterVelocityMode = i525[24]
  i524.stopAction = i525[25]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i526 = root || new pc.MinMaxCurve()
  var i527 = data
  i526.mode = i527[0]
  i526.curveMin = new pc.AnimationCurve( { keys_flow: i527[1] } )
  i526.curveMax = new pc.AnimationCurve( { keys_flow: i527[2] } )
  i526.curveMultiplier = i527[3]
  i526.constantMin = i527[4]
  i526.constantMax = i527[5]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i528 = root || new pc.MinMaxGradient()
  var i529 = data
  i528.mode = i529[0]
  i528.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i529[1], i528.gradientMin)
  i528.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i529[2], i528.gradientMax)
  i528.colorMin = new pc.Color(i529[3], i529[4], i529[5], i529[6])
  i528.colorMax = new pc.Color(i529[7], i529[8], i529[9], i529[10])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i531 = data
  i530.mode = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i533[i + 0]) );
  }
  i530.colorKeys = i532
  var i535 = i531[2]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i535[i + 0]) );
  }
  i530.alphaKeys = i534
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemColorBySpeed()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i537[1], i536.color)
  i536.range = new pc.Vec2( i537[2], i537[3] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i541 = data
  i540.color = new pc.Color(i541[0], i541[1], i541[2], i541[3])
  i540.time = i541[4]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i545 = data
  i544.alpha = i545[0]
  i544.time = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemColorOverLifetime()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i547[1], i546.color)
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemEmitter()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.rateOverTime)
  i548.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.rateOverDistance)
  var i551 = i549[3]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i551[i + 0]) );
  }
  i548.bursts = i550
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemBurst()
  var i555 = data
  i554.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[0], i554.count)
  i554.cycleCount = i555[1]
  i554.minCount = i555[2]
  i554.maxCount = i555[3]
  i554.repeatInterval = i555[4]
  i554.time = i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemRotationBySpeed()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.separateAxes = !!i557[4]
  i556.range = new pc.Vec2( i557[5], i557[6] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemRotationOverLifetime()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemShape()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.shapeType = i561[1]
  i560.randomDirectionAmount = i561[2]
  i560.sphericalDirectionAmount = i561[3]
  i560.randomPositionAmount = i561[4]
  i560.alignToDirection = !!i561[5]
  i560.radius = i561[6]
  i560.radiusMode = i561[7]
  i560.radiusSpread = i561[8]
  i560.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[9], i560.radiusSpeed)
  i560.radiusThickness = i561[10]
  i560.angle = i561[11]
  i560.length = i561[12]
  i560.boxThickness = new pc.Vec3( i561[13], i561[14], i561[15] )
  i560.meshShapeType = i561[16]
  request.r(i561[17], i561[18], 0, i560, 'mesh')
  request.r(i561[19], i561[20], 0, i560, 'meshRenderer')
  request.r(i561[21], i561[22], 0, i560, 'skinnedMeshRenderer')
  i560.useMeshMaterialIndex = !!i561[23]
  i560.meshMaterialIndex = i561[24]
  i560.useMeshColors = !!i561[25]
  i560.normalOffset = i561[26]
  i560.arc = i561[27]
  i560.arcMode = i561[28]
  i560.arcSpread = i561[29]
  i560.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[30], i560.arcSpeed)
  i560.donutRadius = i561[31]
  i560.position = new pc.Vec3( i561[32], i561[33], i561[34] )
  i560.rotation = new pc.Vec3( i561[35], i561[36], i561[37] )
  i560.scale = new pc.Vec3( i561[38], i561[39], i561[40] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemSizeBySpeed()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.separateAxes = !!i563[4]
  i562.range = new pc.Vec2( i563[5], i563[6] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemSizeOverLifetime()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.separateAxes = !!i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.mode = i567[1]
  i566.animation = i567[2]
  i566.numTilesX = i567[3]
  i566.numTilesY = i567[4]
  i566.useRandomRow = !!i567[5]
  i566.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[6], i566.frameOverTime)
  i566.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[7], i566.startFrame)
  i566.cycleCount = i567[8]
  i566.rowIndex = i567[9]
  i566.flipU = i567[10]
  i566.flipV = i567[11]
  i566.spriteCount = i567[12]
  var i569 = i567[13]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sprites = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[4], i572.radial)
  i572.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[5], i572.speedModifier)
  i572.space = i573[6]
  i572.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[7], i572.orbitalX)
  i572.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[8], i572.orbitalY)
  i572.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[9], i572.orbitalZ)
  i572.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[10], i572.orbitalOffsetX)
  i572.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[11], i572.orbitalOffsetY)
  i572.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[12], i572.orbitalOffsetZ)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemNoise()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.separateAxes = !!i575[1]
  i574.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.strengthX)
  i574.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.strengthY)
  i574.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[4], i574.strengthZ)
  i574.frequency = i575[5]
  i574.damping = !!i575[6]
  i574.octaveCount = i575[7]
  i574.octaveMultiplier = i575[8]
  i574.octaveScale = i575[9]
  i574.quality = i575[10]
  i574.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[11], i574.scrollSpeed)
  i574.scrollSpeedMultiplier = i575[12]
  i574.remapEnabled = !!i575[13]
  i574.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[14], i574.remapX)
  i574.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[15], i574.remapY)
  i574.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[16], i574.remapZ)
  i574.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[17], i574.positionAmount)
  i574.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[18], i574.rotationAmount)
  i574.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[19], i574.sizeAmount)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemInheritVelocity()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.mode = i577[1]
  i576.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.curve)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemForceOverLifetime()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.space = i579[4]
  i578.randomized = !!i579[5]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.limit)
  i580.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.limitX)
  i580.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.limitY)
  i580.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[4], i580.limitZ)
  i580.dampen = i581[5]
  i580.separateAxes = !!i581[6]
  i580.space = i581[7]
  i580.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[8], i580.drag)
  i580.multiplyDragByParticleSize = !!i581[9]
  i580.multiplyDragByParticleVelocity = !!i581[10]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i583 = data
  i582.enabled = !!i583[0]
  request.r(i583[1], i583[2], 0, i582, 'sharedMaterial')
  var i585 = i583[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sharedMaterials = i584
  i582.receiveShadows = !!i583[4]
  i582.shadowCastingMode = i583[5]
  i582.sortingLayerID = i583[6]
  i582.sortingOrder = i583[7]
  i582.lightmapIndex = i583[8]
  i582.lightmapSceneIndex = i583[9]
  i582.lightmapScaleOffset = new pc.Vec4( i583[10], i583[11], i583[12], i583[13] )
  i582.lightProbeUsage = i583[14]
  i582.reflectionProbeUsage = i583[15]
  request.r(i583[16], i583[17], 0, i582, 'mesh')
  i582.meshCount = i583[18]
  i582.activeVertexStreamsCount = i583[19]
  i582.alignment = i583[20]
  i582.renderMode = i583[21]
  i582.sortMode = i583[22]
  i582.lengthScale = i583[23]
  i582.velocityScale = i583[24]
  i582.cameraVelocityScale = i583[25]
  i582.normalDirection = i583[26]
  i582.sortingFudge = i583[27]
  i582.minParticleSize = i583[28]
  i582.maxParticleSize = i583[29]
  i582.pivot = new pc.Vec3( i583[30], i583[31], i583[32] )
  request.r(i583[33], i583[34], 0, i582, 'trailMaterial')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i589 = data
  i588.name = i589[0]
  i588.tagId = i589[1]
  i588.enabled = !!i589[2]
  i588.isStatic = !!i589[3]
  i588.layer = i589[4]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i590 = root || new pc.UnityMaterial()
  var i591 = data
  i590.name = i591[0]
  request.r(i591[1], i591[2], 0, i590, 'shader')
  i590.renderQueue = i591[3]
  i590.enableInstancing = !!i591[4]
  var i593 = i591[5]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i593[i + 0]) );
  }
  i590.floatParameters = i592
  var i595 = i591[6]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i595[i + 0]) );
  }
  i590.colorParameters = i594
  var i597 = i591[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i597[i + 0]) );
  }
  i590.vectorParameters = i596
  var i599 = i591[8]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i599[i + 0]) );
  }
  i590.textureParameters = i598
  var i601 = i591[9]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i601[i + 0]) );
  }
  i590.materialFlags = i600
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i609 = data
  i608.name = i609[0]
  i608.value = new pc.Color(i609[1], i609[2], i609[3], i609[4])
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i613 = data
  i612.name = i613[0]
  i612.value = new pc.Vec4( i613[1], i613[2], i613[3], i613[4] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i617 = data
  i616.name = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'value')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i621 = data
  i620.name = i621[0]
  i620.enabled = !!i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i623 = data
  i622.name = i623[0]
  i622.halfPrecision = !!i623[1]
  i622.useUInt32IndexFormat = !!i623[2]
  i622.vertexCount = i623[3]
  i622.aabb = i623[4]
  var i625 = i623[5]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( !!i625[i + 0] );
  }
  i622.streams = i624
  i622.vertices = i623[6]
  var i627 = i623[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i627[i + 0]) );
  }
  i622.subMeshes = i626
  var i629 = i623[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 16) {
    i628.push( new pc.Mat4().setData(i629[i + 0], i629[i + 1], i629[i + 2], i629[i + 3],  i629[i + 4], i629[i + 5], i629[i + 6], i629[i + 7],  i629[i + 8], i629[i + 9], i629[i + 10], i629[i + 11],  i629[i + 12], i629[i + 13], i629[i + 14], i629[i + 15]) );
  }
  i622.bindposes = i628
  var i631 = i623[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i631[i + 0]) );
  }
  i622.blendShapes = i630
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i637 = data
  i636.triangles = i637[0]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i643 = data
  i642.name = i643[0]
  var i645 = i643[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i645[i + 0]) );
  }
  i642.frames = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'clip')
  request.r(i647[2], i647[3], 0, i646, 'outputAudioMixerGroup')
  i646.playOnAwake = !!i647[4]
  i646.loop = !!i647[5]
  i646.time = i647[6]
  i646.volume = i647[7]
  i646.pitch = i647[8]
  i646.enabled = !!i647[9]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i649 = data
  i648.pivot = new pc.Vec2( i649[0], i649[1] )
  i648.anchorMin = new pc.Vec2( i649[2], i649[3] )
  i648.anchorMax = new pc.Vec2( i649[4], i649[5] )
  i648.sizeDelta = new pc.Vec2( i649[6], i649[7] )
  i648.anchoredPosition3D = new pc.Vec3( i649[8], i649[9], i649[10] )
  i648.rotation = new pc.Quat(i649[11], i649[12], i649[13], i649[14])
  i648.scale = new pc.Vec3( i649[15], i649[16], i649[17] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i651 = data
  i650.cullTransparentMesh = !!i651[0]
  return i650
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Image' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'm_Sprite')
  i652.m_Type = i653[2]
  i652.m_PreserveAspect = !!i653[3]
  i652.m_FillCenter = !!i653[4]
  i652.m_FillMethod = i653[5]
  i652.m_FillAmount = i653[6]
  i652.m_FillClockwise = !!i653[7]
  i652.m_FillOrigin = i653[8]
  i652.m_UseSpriteMesh = !!i653[9]
  i652.m_PixelsPerUnitMultiplier = i653[10]
  request.r(i653[11], i653[12], 0, i652, 'm_Material')
  i652.m_Maskable = !!i653[13]
  i652.m_Color = new pc.Color(i653[14], i653[15], i653[16], i653[17])
  i652.m_RaycastTarget = !!i653[18]
  i652.m_RaycastPadding = new pc.Vec4( i653[19], i653[20], i653[21], i653[22] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i655 = data
  i654.m_Alpha = i655[0]
  i654.m_Interactable = !!i655[1]
  i654.m_BlocksRaycasts = !!i655[2]
  i654.m_IgnoreParentGroups = !!i655[3]
  i654.enabled = !!i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i657 = data
  i656.name = i657[0]
  i656.index = i657[1]
  i656.startup = !!i657[2]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i659 = data
  i658.enabled = !!i659[0]
  i658.aspect = i659[1]
  i658.orthographic = !!i659[2]
  i658.orthographicSize = i659[3]
  i658.backgroundColor = new pc.Color(i659[4], i659[5], i659[6], i659[7])
  i658.nearClipPlane = i659[8]
  i658.farClipPlane = i659[9]
  i658.fieldOfView = i659[10]
  i658.depth = i659[11]
  i658.clearFlags = i659[12]
  i658.cullingMask = i659[13]
  i658.rect = i659[14]
  request.r(i659[15], i659[16], 0, i658, 'targetTexture')
  i658.usePhysicalProperties = !!i659[17]
  i658.focalLength = i659[18]
  i658.sensorSize = new pc.Vec2( i659[19], i659[20] )
  i658.lensShift = new pc.Vec2( i659[21], i659[22] )
  i658.gateFit = i659[23]
  i658.commandBufferCount = i659[24]
  i658.cameraType = i659[25]
  return i658
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i661 = data
  i660.m_RenderShadows = !!i661[0]
  i660.m_RequiresDepthTextureOption = i661[1]
  i660.m_RequiresOpaqueTextureOption = i661[2]
  i660.m_CameraType = i661[3]
  var i663 = i661[4]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 1, i662, '')
  }
  i660.m_Cameras = i662
  i660.m_RendererIndex = i661[5]
  i660.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i661[6] )
  request.r(i661[7], i661[8], 0, i660, 'm_VolumeTrigger')
  i660.m_VolumeFrameworkUpdateModeOption = i661[9]
  i660.m_RenderPostProcessing = !!i661[10]
  i660.m_Antialiasing = i661[11]
  i660.m_AntialiasingQuality = i661[12]
  i660.m_StopNaN = !!i661[13]
  i660.m_Dithering = !!i661[14]
  i660.m_ClearDepth = !!i661[15]
  i660.m_AllowXRRendering = !!i661[16]
  i660.m_AllowHDROutput = !!i661[17]
  i660.m_UseScreenCoordOverride = !!i661[18]
  i660.m_ScreenSizeOverride = new pc.Vec4( i661[19], i661[20], i661[21], i661[22] )
  i660.m_ScreenCoordScaleBias = new pc.Vec4( i661[23], i661[24], i661[25], i661[26] )
  i660.m_RequiresDepthTexture = !!i661[27]
  i660.m_RequiresColorTexture = !!i661[28]
  i660.m_Version = i661[29]
  i660.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i661[30], i660.m_TaaSettings)
  return i660
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i667 = data
  i666.m_Quality = i667[0]
  i666.m_FrameInfluence = i667[1]
  i666.m_JitterScale = i667[2]
  i666.m_MipBias = i667[3]
  i666.m_VarianceClampScale = i667[4]
  i666.m_ContrastAdaptiveSharpening = i667[5]
  return i666
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i669 = data
  i668.m_ComponentVersion = i669[0]
  i668.m_LightType = i669[1]
  i668.m_BlendStyleIndex = i669[2]
  i668.m_FalloffIntensity = i669[3]
  i668.m_Color = new pc.Color(i669[4], i669[5], i669[6], i669[7])
  i668.m_Intensity = i669[8]
  i668.m_LightVolumeIntensity = i669[9]
  i668.m_LightVolumeIntensityEnabled = !!i669[10]
  i668.m_ApplyToSortingLayers = i669[11]
  request.r(i669[12], i669[13], 0, i668, 'm_LightCookieSprite')
  request.r(i669[14], i669[15], 0, i668, 'm_DeprecatedPointLightCookieSprite')
  i668.m_LightOrder = i669[16]
  i668.m_AlphaBlendOnOverlap = !!i669[17]
  i668.m_OverlapOperation = i669[18]
  i668.m_NormalMapDistance = i669[19]
  i668.m_NormalMapQuality = i669[20]
  i668.m_UseNormalMap = !!i669[21]
  i668.m_ShadowIntensityEnabled = !!i669[22]
  i668.m_ShadowIntensity = i669[23]
  i668.m_ShadowVolumeIntensityEnabled = !!i669[24]
  i668.m_ShadowVolumeIntensity = i669[25]
  i668.m_PointLightInnerAngle = i669[26]
  i668.m_PointLightOuterAngle = i669[27]
  i668.m_PointLightInnerRadius = i669[28]
  i668.m_PointLightOuterRadius = i669[29]
  i668.m_ShapeLightParametricSides = i669[30]
  i668.m_ShapeLightParametricAngleOffset = i669[31]
  i668.m_ShapeLightParametricRadius = i669[32]
  i668.m_ShapeLightFalloffSize = i669[33]
  i668.m_ShapeLightFalloffOffset = new pc.Vec2( i669[34], i669[35] )
  var i671 = i669[36]
  var i670 = []
  for(var i = 0; i < i671.length; i += 3) {
    i670.push( new pc.Vec3( i671[i + 0], i671[i + 1], i671[i + 2] ) );
  }
  i668.m_ShapePath = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i675 = data
  i674.enabled = !!i675[0]
  i674.planeDistance = i675[1]
  i674.referencePixelsPerUnit = i675[2]
  i674.isFallbackOverlay = !!i675[3]
  i674.renderMode = i675[4]
  i674.renderOrder = i675[5]
  i674.sortingLayerName = i675[6]
  i674.sortingOrder = i675[7]
  i674.scaleFactor = i675[8]
  request.r(i675[9], i675[10], 0, i674, 'worldCamera')
  i674.overrideSorting = !!i675[11]
  i674.pixelPerfect = !!i675[12]
  i674.targetDisplay = i675[13]
  i674.overridePixelPerfect = !!i675[14]
  return i674
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i677 = data
  i676.m_UiScaleMode = i677[0]
  i676.m_ReferencePixelsPerUnit = i677[1]
  i676.m_ScaleFactor = i677[2]
  i676.m_ReferenceResolution = new pc.Vec2( i677[3], i677[4] )
  i676.m_ScreenMatchMode = i677[5]
  i676.m_MatchWidthOrHeight = i677[6]
  i676.m_PhysicalUnit = i677[7]
  i676.m_FallbackScreenDPI = i677[8]
  i676.m_DefaultSpriteDPI = i677[9]
  i676.m_DynamicPixelsPerUnit = i677[10]
  i676.m_PresetInfoIsWorld = !!i677[11]
  return i676
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i679 = data
  i678.m_IgnoreReversedGraphics = !!i679[0]
  i678.m_BlockingObjects = i679[1]
  i678.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i679[2] )
  return i678
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i680 = root || request.c( 'ClickCta' )
  var i681 = data
  return i680
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Text' )
  var i683 = data
  i682.m_FontData = request.d('UnityEngine.UI.FontData', i683[0], i682.m_FontData)
  i682.m_Text = i683[1]
  request.r(i683[2], i683[3], 0, i682, 'm_Material')
  i682.m_Maskable = !!i683[4]
  i682.m_Color = new pc.Color(i683[5], i683[6], i683[7], i683[8])
  i682.m_RaycastTarget = !!i683[9]
  i682.m_RaycastPadding = new pc.Vec4( i683[10], i683[11], i683[12], i683[13] )
  return i682
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.FontData' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_Font')
  i684.m_FontSize = i685[2]
  i684.m_FontStyle = i685[3]
  i684.m_BestFit = !!i685[4]
  i684.m_MinSize = i685[5]
  i684.m_MaxSize = i685[6]
  i684.m_Alignment = i685[7]
  i684.m_AlignByGeometry = !!i685[8]
  i684.m_RichText = !!i685[9]
  i684.m_HorizontalOverflow = i685[10]
  i684.m_VerticalOverflow = i685[11]
  i684.m_LineSpacing = i685[12]
  return i684
}

Deserializers["Episode5"] = function (request, data, root) {
  var i686 = root || request.c( 'Episode5' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_card1_1_2')
  request.r(i687[2], i687[3], 0, i686, '_card1_2_2')
  request.r(i687[4], i687[5], 0, i686, '_card1_3_2')
  request.r(i687[6], i687[7], 0, i686, '_card1_1')
  request.r(i687[8], i687[9], 0, i686, '_card2_1')
  request.r(i687[10], i687[11], 0, i686, '_coinsText')
  request.r(i687[12], i687[13], 0, i686, '_particleSystem')
  return i686
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i688 = root || request.c( 'Episode4_1' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, '_cart1__2')
  request.r(i689[2], i689[3], 0, i688, '_cart2__2')
  request.r(i689[4], i689[5], 0, i688, '_cart3__2')
  request.r(i689[6], i689[7], 0, i688, '_cart1_1')
  request.r(i689[8], i689[9], 0, i688, '_cart2_1')
  request.r(i689[10], i689[11], 0, i688, '_cart3_1')
  request.r(i689[12], i689[13], 0, i688, '_arm')
  request.r(i689[14], i689[15], 0, i688, '_coinText')
  request.r(i689[16], i689[17], 0, i688, '_particleSystem')
  request.r(i689[18], i689[19], 0, i688, '_particleDragon')
  return i688
}

Deserializers["Episode1"] = function (request, data, root) {
  var i690 = root || request.c( 'Episode1' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, '_arm')
  request.r(i691[2], i691[3], 0, i690, '_points')
  request.r(i691[4], i691[5], 0, i690, '_unit')
  request.r(i691[6], i691[7], 0, i690, '_particleSystem')
  request.r(i691[8], i691[9], 0, i690, '_textCoins')
  request.r(i691[10], i691[11], 0, i690, '_textDamage')
  request.r(i691[12], i691[13], 0, i690, '_textHealth')
  request.r(i691[14], i691[15], 0, i690, '_textHealth2')
  request.r(i691[16], i691[17], 0, i690, '_textDamage2')
  i690.scaleDuration = i691[18]
  i690.moveDuration = i691[19]
  i690.targetScale = new pc.Vec3( i691[20], i691[21], i691[22] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'animatorController')
  request.r(i693[2], i693[3], 0, i692, 'avatar')
  i692.updateMode = i693[4]
  i692.hasTransformHierarchy = !!i693[5]
  i692.applyRootMotion = !!i693[6]
  var i695 = i693[7]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.humanBones = i694
  i692.enabled = !!i693[8]
  return i692
}

Deserializers["Card"] = function (request, data, root) {
  var i698 = root || request.c( 'Card' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, '_points')
  i698.scaleDuration = i699[2]
  i698.moveDuration = i699[3]
  i698.targetScale = new pc.Vec3( i699[4], i699[5], i699[6] )
  request.r(i699[7], i699[8], 0, i698, '_particleSystem')
  request.r(i699[9], i699[10], 0, i698, '_particleDragon')
  return i698
}

Deserializers["Episode4"] = function (request, data, root) {
  var i700 = root || request.c( 'Episode4' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, '_cardDragcone1_1')
  request.r(i701[2], i701[3], 0, i700, '_cardDragcone2_2')
  request.r(i701[4], i701[5], 0, i700, '_cardDragcone')
  request.r(i701[6], i701[7], 0, i700, '_arm3_3')
  request.r(i701[8], i701[9], 0, i700, '_shopButton')
  request.r(i701[10], i701[11], 0, i700, '_points')
  request.r(i701[12], i701[13], 0, i700, '_textCoins')
  i700.scaleDuration = i701[14]
  i700.moveDuration = i701[15]
  i700.targetScale = new pc.Vec3( i701[16], i701[17], i701[18] )
  return i700
}

Deserializers["Episode2"] = function (request, data, root) {
  var i702 = root || request.c( 'Episode2' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_arm')
  request.r(i703[2], i703[3], 0, i702, '_points')
  request.r(i703[4], i703[5], 0, i702, '_unit1')
  request.r(i703[6], i703[7], 0, i702, '_unit2')
  request.r(i703[8], i703[9], 0, i702, '_particleSystem1')
  request.r(i703[10], i703[11], 0, i702, '_particleSystem2')
  request.r(i703[12], i703[13], 0, i702, '_textCoins')
  request.r(i703[14], i703[15], 0, i702, '_textDamage')
  request.r(i703[16], i703[17], 0, i702, '_textHealth')
  request.r(i703[18], i703[19], 0, i702, '_textHealth2')
  request.r(i703[20], i703[21], 0, i702, '_textDamage2')
  i702.scaleDuration = i703[22]
  i702.moveDuration = i703[23]
  i702.targetScale = new pc.Vec3( i703[24], i703[25], i703[26] )
  return i702
}

Deserializers["Episode6"] = function (request, data, root) {
  var i704 = root || request.c( 'Episode6' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, '_arm')
  request.r(i705[2], i705[3], 0, i704, '_points')
  request.r(i705[4], i705[5], 0, i704, '_cart')
  request.r(i705[6], i705[7], 0, i704, '_cartPoint')
  request.r(i705[8], i705[9], 0, i704, '_coinsText')
  request.r(i705[10], i705[11], 0, i704, '_textDamage')
  request.r(i705[12], i705[13], 0, i704, '_textHealth')
  request.r(i705[14], i705[15], 0, i704, '_textHealth2')
  request.r(i705[16], i705[17], 0, i704, '_textDamage2')
  i704.scaleDuration = i705[18]
  i704.moveDuration = i705[19]
  i704.targetScale = new pc.Vec3( i705[20], i705[21], i705[22] )
  request.r(i705[23], i705[24], 0, i704, '_particleDragon')
  request.r(i705[25], i705[26], 0, i704, '_particleCards')
  return i704
}

Deserializers["Episode3"] = function (request, data, root) {
  var i706 = root || request.c( 'Episode3' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, '_battle')
  request.r(i707[2], i707[3], 0, i706, '_button')
  request.r(i707[4], i707[5], 0, i706, '_cardDracone')
  request.r(i707[6], i707[7], 0, i706, '_point')
  request.r(i707[8], i707[9], 0, i706, '_cardEnemye1')
  request.r(i707[10], i707[11], 0, i706, '_cardEnemye2')
  request.r(i707[12], i707[13], 0, i706, '_cardEnemye3')
  request.r(i707[14], i707[15], 0, i706, '_cardDragon1')
  request.r(i707[16], i707[17], 0, i706, '_cardDragon2')
  request.r(i707[18], i707[19], 0, i706, '_cardDragon3')
  request.r(i707[20], i707[21], 0, i706, '_particleSystem1')
  request.r(i707[22], i707[23], 0, i706, '_particleSystem2')
  request.r(i707[24], i707[25], 0, i706, '_particleSystem3')
  request.r(i707[26], i707[27], 0, i706, '_particleButton')
  request.r(i707[28], i707[29], 0, i706, '_textCoins')
  request.r(i707[30], i707[31], 0, i706, '_winVictoty')
  request.r(i707[32], i707[33], 0, i706, '_winInscription')
  request.r(i707[34], i707[35], 0, i706, '_winInscription2')
  request.r(i707[36], i707[37], 0, i706, '_winInscription3')
  request.r(i707[38], i707[39], 0, i706, '_parentsDisplay')
  return i706
}

Deserializers["Episode7"] = function (request, data, root) {
  var i708 = root || request.c( 'Episode7' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, '_battle')
  request.r(i709[2], i709[3], 0, i708, '_button')
  request.r(i709[4], i709[5], 0, i708, '_cardEnemye1')
  request.r(i709[6], i709[7], 0, i708, '_cardEnemye2')
  request.r(i709[8], i709[9], 0, i708, '_cardEnemye3')
  request.r(i709[10], i709[11], 0, i708, '_cardEnemye4')
  request.r(i709[12], i709[13], 0, i708, '_cardEnemye5')
  request.r(i709[14], i709[15], 0, i708, '_cardEnemye6')
  request.r(i709[16], i709[17], 0, i708, '_cardDragon1')
  request.r(i709[18], i709[19], 0, i708, '_cardDragon2')
  request.r(i709[20], i709[21], 0, i708, '_cardDragon3')
  request.r(i709[22], i709[23], 0, i708, '_particleSystem1')
  request.r(i709[24], i709[25], 0, i708, '_particleSystem2')
  request.r(i709[26], i709[27], 0, i708, '_particleSystem3')
  request.r(i709[28], i709[29], 0, i708, '_particleSystem4')
  request.r(i709[30], i709[31], 0, i708, '_particleSystem5')
  request.r(i709[32], i709[33], 0, i708, '_particleSystem6')
  request.r(i709[34], i709[35], 0, i708, '_winVictoty')
  request.r(i709[36], i709[37], 0, i708, '_winFinal')
  request.r(i709[38], i709[39], 0, i708, '_particleSystem')
  request.r(i709[40], i709[41], 0, i708, '_particleDragon')
  request.r(i709[42], i709[43], 0, i708, '_episode3')
  return i708
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i710 = root || request.c( 'Episode4_2' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, '_battle')
  request.r(i711[2], i711[3], 0, i710, '_button')
  request.r(i711[4], i711[5], 0, i710, '_cardEnemye1')
  request.r(i711[6], i711[7], 0, i710, '_cardEnemye2')
  request.r(i711[8], i711[9], 0, i710, '_cardEnemye3')
  request.r(i711[10], i711[11], 0, i710, '_cardDracone1')
  request.r(i711[12], i711[13], 0, i710, '_cardDracone2')
  request.r(i711[14], i711[15], 0, i710, '_cardDracone3')
  request.r(i711[16], i711[17], 0, i710, '_winDefeat')
  request.r(i711[18], i711[19], 0, i710, '_winFinal')
  request.r(i711[20], i711[21], 0, i710, '_particleSystem1')
  request.r(i711[22], i711[23], 0, i710, '_particleSystem2')
  request.r(i711[24], i711[25], 0, i710, '_particleSystem3')
  request.r(i711[26], i711[27], 0, i710, '_particleSystem4')
  request.r(i711[28], i711[29], 0, i710, '_particleSystem5')
  request.r(i711[30], i711[31], 0, i710, '_particleSystem6')
  request.r(i711[32], i711[33], 0, i710, '_particleSystem7')
  request.r(i711[34], i711[35], 0, i710, '_particleButtun')
  request.r(i711[36], i711[37], 0, i710, '_particleDragon')
  request.r(i711[38], i711[39], 0, i710, '_layer')
  request.r(i711[40], i711[41], 0, i710, '_winInscription')
  request.r(i711[42], i711[43], 0, i710, '_winInscription2')
  request.r(i711[44], i711[45], 0, i710, '_winInscription3')
  return i710
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i712 = root || request.c( 'Episode5_2' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, '_battle')
  request.r(i713[2], i713[3], 0, i712, '_button')
  request.r(i713[4], i713[5], 0, i712, '_cardEnemye1')
  request.r(i713[6], i713[7], 0, i712, '_cardEnemye2')
  request.r(i713[8], i713[9], 0, i712, '_cardEnemye3')
  request.r(i713[10], i713[11], 0, i712, '_cardDracone1')
  request.r(i713[12], i713[13], 0, i712, '_cardDracone2')
  request.r(i713[14], i713[15], 0, i712, '_cardDracone3')
  request.r(i713[16], i713[17], 0, i712, '_cardDracone4')
  request.r(i713[18], i713[19], 0, i712, '_winDefeat')
  request.r(i713[20], i713[21], 0, i712, '_winFinal')
  request.r(i713[22], i713[23], 0, i712, '_particleSystem1')
  request.r(i713[24], i713[25], 0, i712, '_particleSystem2')
  request.r(i713[26], i713[27], 0, i712, '_particleSystem3')
  request.r(i713[28], i713[29], 0, i712, '_particleSystem4')
  request.r(i713[30], i713[31], 0, i712, '_particleSystem5')
  request.r(i713[32], i713[33], 0, i712, '_particleSystem6')
  request.r(i713[34], i713[35], 0, i712, '_particleSystem7')
  request.r(i713[36], i713[37], 0, i712, '_particleSystem')
  request.r(i713[38], i713[39], 0, i712, '_layer')
  request.r(i713[40], i713[41], 0, i712, '_winInscription')
  request.r(i713[42], i713[43], 0, i712, '_winInscription2')
  request.r(i713[44], i713[45], 0, i712, '_winInscription3')
  return i712
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i714 = root || request.c( 'ArmAnimation' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_targetButton')
  i714.flyDuration = i715[2]
  i714.shrinkDuration = i715[3]
  i714.restoreDuration = i715[4]
  return i714
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Button' )
  var i717 = data
  i716.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i717[0], i716.m_OnClick)
  i716.m_Navigation = request.d('UnityEngine.UI.Navigation', i717[1], i716.m_Navigation)
  i716.m_Transition = i717[2]
  i716.m_Colors = request.d('UnityEngine.UI.ColorBlock', i717[3], i716.m_Colors)
  i716.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i717[4], i716.m_SpriteState)
  i716.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i717[5], i716.m_AnimationTriggers)
  i716.m_Interactable = !!i717[6]
  request.r(i717[7], i717[8], 0, i716, 'm_TargetGraphic')
  return i716
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('UnityEngine.Events.PersistentCall', i723[i + 0]));
  }
  i720.m_Calls = i722
  return i720
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_Target')
  i726.m_TargetAssemblyTypeName = i727[2]
  i726.m_MethodName = i727[3]
  i726.m_Mode = i727[4]
  i726.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i727[5], i726.m_Arguments)
  i726.m_CallState = i727[6]
  return i726
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'm_ObjectArgument')
  i728.m_ObjectArgumentAssemblyTypeName = i729[2]
  i728.m_IntArgument = i729[3]
  i728.m_FloatArgument = i729[4]
  i728.m_StringArgument = i729[5]
  i728.m_BoolArgument = !!i729[6]
  return i728
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i731 = data
  i730.m_Mode = i731[0]
  i730.m_WrapAround = !!i731[1]
  request.r(i731[2], i731[3], 0, i730, 'm_SelectOnUp')
  request.r(i731[4], i731[5], 0, i730, 'm_SelectOnDown')
  request.r(i731[6], i731[7], 0, i730, 'm_SelectOnLeft')
  request.r(i731[8], i731[9], 0, i730, 'm_SelectOnRight')
  return i730
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i733 = data
  i732.m_NormalColor = new pc.Color(i733[0], i733[1], i733[2], i733[3])
  i732.m_HighlightedColor = new pc.Color(i733[4], i733[5], i733[6], i733[7])
  i732.m_PressedColor = new pc.Color(i733[8], i733[9], i733[10], i733[11])
  i732.m_SelectedColor = new pc.Color(i733[12], i733[13], i733[14], i733[15])
  i732.m_DisabledColor = new pc.Color(i733[16], i733[17], i733[18], i733[19])
  i732.m_ColorMultiplier = i733[20]
  i732.m_FadeDuration = i733[21]
  return i732
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_HighlightedSprite')
  request.r(i735[2], i735[3], 0, i734, 'm_PressedSprite')
  request.r(i735[4], i735[5], 0, i734, 'm_SelectedSprite')
  request.r(i735[6], i735[7], 0, i734, 'm_DisabledSprite')
  return i734
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i737 = data
  i736.m_NormalTrigger = i737[0]
  i736.m_HighlightedTrigger = i737[1]
  i736.m_PressedTrigger = i737[2]
  i736.m_SelectedTrigger = i737[3]
  i736.m_DisabledTrigger = i737[4]
  return i736
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_FirstSelected')
  i738.m_sendNavigationEvents = !!i739[2]
  i738.m_DragThreshold = i739[3]
  return i738
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i741 = data
  i740.m_HorizontalAxis = i741[0]
  i740.m_VerticalAxis = i741[1]
  i740.m_SubmitButton = i741[2]
  i740.m_CancelButton = i741[3]
  i740.m_InputActionsPerSecond = i741[4]
  i740.m_RepeatDelay = i741[5]
  i740.m_ForceModuleActive = !!i741[6]
  i740.m_SendPointerHoverToParent = !!i741[7]
  return i740
}

Deserializers["Scenario"] = function (request, data, root) {
  var i742 = root || request.c( 'Scenario' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_episode1')
  request.r(i743[2], i743[3], 0, i742, '_episode2')
  request.r(i743[4], i743[5], 0, i742, '_episode3')
  request.r(i743[6], i743[7], 0, i742, '_episode4')
  request.r(i743[8], i743[9], 0, i742, '_episode4_1')
  request.r(i743[10], i743[11], 0, i742, '_episode4_2')
  request.r(i743[12], i743[13], 0, i742, '_episode5')
  request.r(i743[14], i743[15], 0, i742, '_episode5_1')
  request.r(i743[16], i743[17], 0, i742, '_episode6')
  request.r(i743[18], i743[19], 0, i742, '_episode7')
  request.r(i743[20], i743[21], 0, i742, '_card1__1')
  request.r(i743[22], i743[23], 0, i742, '_card1__2')
  request.r(i743[24], i743[25], 0, i742, '_card1__3')
  request.r(i743[26], i743[27], 0, i742, '_coinsText')
  return i742
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i744 = root || request.c( 'Episode5_1' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, '_card1')
  request.r(i745[2], i745[3], 0, i744, '_card2')
  request.r(i745[4], i745[5], 0, i744, '_episode5')
  request.r(i745[6], i745[7], 0, i744, 'episode4_1')
  request.r(i745[8], i745[9], 0, i744, 'episode5_2')
  request.r(i745[10], i745[11], 0, i744, '_texCoins')
  request.r(i745[12], i745[13], 0, i744, '_particleSystem')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i747 = data
  i746.ambientIntensity = i747[0]
  i746.reflectionIntensity = i747[1]
  i746.ambientMode = i747[2]
  i746.ambientLight = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.ambientSkyColor = new pc.Color(i747[7], i747[8], i747[9], i747[10])
  i746.ambientGroundColor = new pc.Color(i747[11], i747[12], i747[13], i747[14])
  i746.ambientEquatorColor = new pc.Color(i747[15], i747[16], i747[17], i747[18])
  i746.fogColor = new pc.Color(i747[19], i747[20], i747[21], i747[22])
  i746.fogEndDistance = i747[23]
  i746.fogStartDistance = i747[24]
  i746.fogDensity = i747[25]
  i746.fog = !!i747[26]
  request.r(i747[27], i747[28], 0, i746, 'skybox')
  i746.fogMode = i747[29]
  var i749 = i747[30]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i749[i + 0]) );
  }
  i746.lightmaps = i748
  i746.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i747[31], i746.lightProbes)
  i746.lightmapsMode = i747[32]
  i746.mixedBakeMode = i747[33]
  i746.environmentLightingMode = i747[34]
  i746.ambientProbe = new pc.SphericalHarmonicsL2(i747[35])
  i746.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i747[36])
  i746.useReferenceAmbientProbe = !!i747[37]
  request.r(i747[38], i747[39], 0, i746, 'customReflection')
  request.r(i747[40], i747[41], 0, i746, 'defaultReflection')
  i746.defaultReflectionMode = i747[42]
  i746.defaultReflectionResolution = i747[43]
  i746.sunLightObjectId = i747[44]
  i746.pixelLightCount = i747[45]
  i746.defaultReflectionHDR = !!i747[46]
  i746.hasLightDataAsset = !!i747[47]
  i746.hasManualGenerate = !!i747[48]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'lightmapColor')
  request.r(i753[2], i753[3], 0, i752, 'lightmapDirection')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i754 = root || new UnityEngine.LightProbes()
  var i755 = data
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i761 = data
  i760.enabled = !!i761[0]
  i760.type = i761[1]
  i760.color = new pc.Color(i761[2], i761[3], i761[4], i761[5])
  i760.cullingMask = i761[6]
  i760.intensity = i761[7]
  i760.range = i761[8]
  i760.spotAngle = i761[9]
  i760.shadows = i761[10]
  i760.shadowNormalBias = i761[11]
  i760.shadowBias = i761[12]
  i760.shadowStrength = i761[13]
  i760.shadowResolution = i761[14]
  i760.lightmapBakeType = i761[15]
  i760.renderMode = i761[16]
  request.r(i761[17], i761[18], 0, i760, 'cookie')
  i760.cookieSize = i761[19]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i763 = data
  i762.AdditionalLightsPerObjectLimit = i763[0]
  i762.AdditionalLightsRenderingMode = i763[1]
  i762.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i763[2], i762.LightRenderingMode)
  i762.ColorGradingLutSize = i763[3]
  i762.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i763[4], i762.ColorGradingMode)
  i762.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i763[5], i762.MainLightRenderingMode)
  i762.MainLightRenderingModeValue = i763[6]
  i762.MainLightShadowsSupported = !!i763[7]
  i762.MixedLightingSupported = !!i763[8]
  i762.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i763[9], i762.MsaaQuality)
  i762.MSAA = i763[10]
  i762.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i763[11], i762.OpaqueDownsampling)
  i762.RenderScale = i763[12]
  i762.RequireDepthTexture = !!i763[13]
  i762.RequireOpaqueTexture = !!i763[14]
  i762.ShadowAtlasResolution = i763[15]
  i762.ShadowDepthBias = i763[16]
  i762.SupportsHDR = !!i763[17]
  i762.SupportsTerrainHoles = !!i763[18]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i765 = data
  i764.Disabled = i765[0]
  i764.PerVertex = i765[1]
  i764.PerPixel = i765[2]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i767 = data
  i766.LowDynamicRange = i767[0]
  i766.HighDynamicRange = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i769 = data
  i768.Disabled = i769[0]
  i768._2x = i769[1]
  i768._4x = i769[2]
  i768._8x = i769[3]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i771 = data
  i770.None = i771[0]
  i770._2xBilinear = i771[1]
  i770._4xBox = i771[2]
  i770._4xBilinear = i771[3]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i775[i + 0]));
  }
  i772.ShaderCompilationErrors = i774
  i772.name = i773[1]
  i772.guid = i773[2]
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.shaderDefinedKeywords = i776
  var i779 = i773[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i779[i + 0]) );
  }
  i772.passes = i778
  var i781 = i773[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i781[i + 0]) );
  }
  i772.usePasses = i780
  var i783 = i773[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i783[i + 0]) );
  }
  i772.defaultParameterValues = i782
  request.r(i773[7], i773[8], 0, i772, 'unityFallbackShader')
  i772.readDepth = !!i773[9]
  i772.isCreatedByShaderGraph = !!i773[10]
  i772.compiled = !!i773[11]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i787 = data
  i786.shaderName = i787[0]
  i786.errorMessage = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i792 = root || new pc.UnityShaderPass()
  var i793 = data
  i792.id = i793[0]
  i792.subShaderIndex = i793[1]
  i792.name = i793[2]
  i792.passType = i793[3]
  i792.grabPassTextureName = i793[4]
  i792.usePass = !!i793[5]
  i792.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[6], i792.zTest)
  i792.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[7], i792.zWrite)
  i792.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[8], i792.culling)
  i792.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i793[9], i792.blending)
  i792.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i793[10], i792.alphaBlending)
  i792.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[11], i792.colorWriteMask)
  i792.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[12], i792.offsetUnits)
  i792.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[13], i792.offsetFactor)
  i792.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[14], i792.stencilRef)
  i792.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[15], i792.stencilReadMask)
  i792.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[16], i792.stencilWriteMask)
  i792.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i793[17], i792.stencilOp)
  i792.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i793[18], i792.stencilOpFront)
  i792.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i793[19], i792.stencilOpBack)
  var i795 = i793[20]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i795[i + 0]) );
  }
  i792.tags = i794
  var i797 = i793[21]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.passDefinedKeywords = i796
  var i799 = i793[22]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i799[i + 0]) );
  }
  i792.passDefinedKeywordGroups = i798
  var i801 = i793[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i801[i + 0]) );
  }
  i792.variants = i800
  var i803 = i793[24]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i803[i + 0]) );
  }
  i792.excludedVariants = i802
  i792.hasDepthReader = !!i793[25]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i805 = data
  i804.val = i805[0]
  i804.name = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i807 = data
  i806.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[0], i806.src)
  i806.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.dst)
  i806.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.op)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i809 = data
  i808.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[0], i808.pass)
  i808.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[1], i808.fail)
  i808.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[2], i808.zFail)
  i808.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[3], i808.comp)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i813 = data
  i812.name = i813[0]
  i812.value = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.keywords = i818
  i816.hasDiscard = !!i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i823 = data
  i822.passId = i823[0]
  i822.subShaderIndex = i823[1]
  var i825 = i823[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i822.keywords = i824
  i822.vertexProgram = i823[3]
  i822.fragmentProgram = i823[4]
  i822.exportedForWebGl2 = !!i823[5]
  i822.readDepth = !!i823[6]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'shader')
  i828.pass = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i833 = data
  i832.name = i833[0]
  i832.type = i833[1]
  i832.value = new pc.Vec4( i833[2], i833[3], i833[4], i833[5] )
  i832.textureValue = i833[6]
  i832.shaderPropertyFlag = i833[7]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i835 = data
  i834.name = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'texture')
  i834.aabb = i835[3]
  i834.vertices = i835[4]
  i834.triangles = i835[5]
  i834.textureRect = UnityEngine.Rect.MinMaxRect(i835[6], i835[7], i835[8], i835[9])
  i834.packedRect = UnityEngine.Rect.MinMaxRect(i835[10], i835[11], i835[12], i835[13])
  i834.border = new pc.Vec4( i835[14], i835[15], i835[16], i835[17] )
  i834.transparency = i835[18]
  i834.bounds = i835[19]
  i834.pixelsPerUnit = i835[20]
  i834.textureWidth = i835[21]
  i834.textureHeight = i835[22]
  i834.nativeSize = new pc.Vec2( i835[23], i835[24] )
  i834.pivot = new pc.Vec2( i835[25], i835[26] )
  i834.textureRectOffset = new pc.Vec2( i835[27], i835[28] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i837 = data
  i836.name = i837[0]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i839 = data
  i838.name = i839[0]
  i838.wrapMode = i839[1]
  i838.isLooping = !!i839[2]
  i838.length = i839[3]
  var i841 = i839[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i841[i + 0]) );
  }
  i838.curves = i840
  var i843 = i839[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i843[i + 0]) );
  }
  i838.events = i842
  i838.halfPrecision = !!i839[6]
  i838._frameRate = i839[7]
  i838.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i839[8], i838.localBounds)
  i838.hasMuscleCurves = !!i839[9]
  var i845 = i839[10]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i838.clipMuscleConstant = i844
  i838.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i839[11], i838.clipBindingConstant)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i849 = data
  i848.path = i849[0]
  i848.hash = i849[1]
  i848.componentType = i849[2]
  i848.property = i849[3]
  i848.keys = i849[4]
  var i851 = i849[5]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i851[i + 0]) );
  }
  i848.objectReferenceKeys = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i855 = data
  i854.time = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'value')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i859 = data
  i858.functionName = i859[0]
  i858.floatParameter = i859[1]
  i858.intParameter = i859[2]
  i858.stringParameter = i859[3]
  request.r(i859[4], i859[5], 0, i858, 'objectReferenceParameter')
  i858.time = i859[6]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i861 = data
  i860.center = new pc.Vec3( i861[0], i861[1], i861[2] )
  i860.extends = new pc.Vec3( i861[3], i861[4], i861[5] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.genericBindings = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i864.pptrCurveMapping = i868
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i871 = data
  i870.name = i871[0]
  i870.ascent = i871[1]
  i870.originalLineHeight = i871[2]
  i870.fontSize = i871[3]
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i873[i + 0]) );
  }
  i870.characterInfo = i872
  request.r(i871[5], i871[6], 0, i870, 'texture')
  i870.originalFontSize = i871[7]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i877 = data
  i876.index = i877[0]
  i876.advance = i877[1]
  i876.bearing = i877[2]
  i876.glyphWidth = i877[3]
  i876.glyphHeight = i877[4]
  i876.minX = i877[5]
  i876.maxX = i877[6]
  i876.minY = i877[7]
  i876.maxY = i877[8]
  i876.uvBottomLeftX = i877[9]
  i876.uvBottomLeftY = i877[10]
  i876.uvBottomRightX = i877[11]
  i876.uvBottomRightY = i877[12]
  i876.uvTopLeftX = i877[13]
  i876.uvTopLeftY = i877[14]
  i876.uvTopRightX = i877[15]
  i876.uvTopRightY = i877[16]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i879 = data
  i878.name = i879[0]
  var i881 = i879[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i881[i + 0]) );
  }
  i878.layers = i880
  var i883 = i879[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i883[i + 0]) );
  }
  i878.parameters = i882
  i878.animationClips = i879[3]
  i878.avatarUnsupported = i879[4]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i887 = data
  i886.name = i887[0]
  i886.defaultWeight = i887[1]
  i886.blendingMode = i887[2]
  i886.avatarMask = i887[3]
  i886.syncedLayerIndex = i887[4]
  i886.syncedLayerAffectsTiming = !!i887[5]
  i886.syncedLayers = i887[6]
  i886.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i887[7], i886.stateMachine)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i889 = data
  i888.id = i889[0]
  i888.name = i889[1]
  i888.path = i889[2]
  var i891 = i889[3]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i891[i + 0]) );
  }
  i888.states = i890
  var i893 = i889[4]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i893[i + 0]) );
  }
  i888.machines = i892
  var i895 = i889[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i895[i + 0]) );
  }
  i888.entryStateTransitions = i894
  var i897 = i889[6]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i897[i + 0]) );
  }
  i888.exitStateTransitions = i896
  var i899 = i889[7]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i899[i + 0]) );
  }
  i888.anyStateTransitions = i898
  i888.defaultStateId = i889[8]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i903 = data
  i902.id = i903[0]
  i902.name = i903[1]
  i902.cycleOffset = i903[2]
  i902.cycleOffsetParameter = i903[3]
  i902.cycleOffsetParameterActive = !!i903[4]
  i902.mirror = !!i903[5]
  i902.mirrorParameter = i903[6]
  i902.mirrorParameterActive = !!i903[7]
  i902.motionId = i903[8]
  i902.nameHash = i903[9]
  i902.fullPathHash = i903[10]
  i902.speed = i903[11]
  i902.speedParameter = i903[12]
  i902.speedParameterActive = !!i903[13]
  i902.tag = i903[14]
  i902.tagHash = i903[15]
  i902.writeDefaultValues = !!i903[16]
  var i905 = i903[17]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.behaviours = i904
  var i907 = i903[18]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i907[i + 0]) );
  }
  i902.transitions = i906
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i913 = data
  i912.fullPath = i913[0]
  i912.canTransitionToSelf = !!i913[1]
  i912.duration = i913[2]
  i912.exitTime = i913[3]
  i912.hasExitTime = !!i913[4]
  i912.hasFixedDuration = !!i913[5]
  i912.interruptionSource = i913[6]
  i912.offset = i913[7]
  i912.orderedInterruption = !!i913[8]
  i912.destinationStateId = i913[9]
  i912.isExit = !!i913[10]
  i912.mute = !!i913[11]
  i912.solo = !!i913[12]
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i915[i + 0]) );
  }
  i912.conditions = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i921 = data
  i920.destinationStateId = i921[0]
  i920.isExit = !!i921[1]
  i920.mute = !!i921[2]
  i920.solo = !!i921[3]
  var i923 = i921[4]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i923[i + 0]) );
  }
  i920.conditions = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i927 = data
  i926.defaultBool = !!i927[0]
  i926.defaultFloat = i927[1]
  i926.defaultInt = i927[2]
  i926.name = i927[3]
  i926.nameHash = i927[4]
  i926.type = i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i931[i + 0]) );
  }
  i928.files = i930
  i928.componentToPrefabIds = i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i935 = data
  i934.path = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'unityObject')
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i939[i + 0]) );
  }
  i936.scriptsExecutionOrder = i938
  var i941 = i937[1]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i941[i + 0]) );
  }
  i936.sortingLayers = i940
  var i943 = i937[2]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i943[i + 0]) );
  }
  i936.cullingLayers = i942
  i936.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i937[3], i936.timeSettings)
  i936.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i937[4], i936.physicsSettings)
  i936.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i937[5], i936.physics2DSettings)
  i936.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i937[6], i936.qualitySettings)
  i936.enableRealtimeShadows = !!i937[7]
  i936.enableAutoInstancing = !!i937[8]
  i936.enableDynamicBatching = !!i937[9]
  i936.lightmapEncodingQuality = i937[10]
  i936.desiredColorSpace = i937[11]
  var i945 = i937[12]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i936.allTags = i944
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i949 = data
  i948.name = i949[0]
  i948.value = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i953 = data
  i952.id = i953[0]
  i952.name = i953[1]
  i952.value = i953[2]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i957 = data
  i956.id = i957[0]
  i956.name = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i959 = data
  i958.fixedDeltaTime = i959[0]
  i958.maximumDeltaTime = i959[1]
  i958.timeScale = i959[2]
  i958.maximumParticleTimestep = i959[3]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i961 = data
  i960.gravity = new pc.Vec3( i961[0], i961[1], i961[2] )
  i960.defaultSolverIterations = i961[3]
  i960.bounceThreshold = i961[4]
  i960.autoSyncTransforms = !!i961[5]
  i960.autoSimulation = !!i961[6]
  var i963 = i961[7]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i963[i + 0]) );
  }
  i960.collisionMatrix = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i967 = data
  i966.enabled = !!i967[0]
  i966.layerId = i967[1]
  i966.otherLayerId = i967[2]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'material')
  i968.gravity = new pc.Vec2( i969[2], i969[3] )
  i968.positionIterations = i969[4]
  i968.velocityIterations = i969[5]
  i968.velocityThreshold = i969[6]
  i968.maxLinearCorrection = i969[7]
  i968.maxAngularCorrection = i969[8]
  i968.maxTranslationSpeed = i969[9]
  i968.maxRotationSpeed = i969[10]
  i968.baumgarteScale = i969[11]
  i968.baumgarteTOIScale = i969[12]
  i968.timeToSleep = i969[13]
  i968.linearSleepTolerance = i969[14]
  i968.angularSleepTolerance = i969[15]
  i968.defaultContactOffset = i969[16]
  i968.autoSimulation = !!i969[17]
  i968.queriesHitTriggers = !!i969[18]
  i968.queriesStartInColliders = !!i969[19]
  i968.callbacksOnDisable = !!i969[20]
  i968.reuseCollisionCallbacks = !!i969[21]
  i968.autoSyncTransforms = !!i969[22]
  var i971 = i969[23]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i971[i + 0]) );
  }
  i968.collisionMatrix = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i975 = data
  i974.enabled = !!i975[0]
  i974.layerId = i975[1]
  i974.otherLayerId = i975[2]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i979[i + 0]) );
  }
  i976.qualityLevels = i978
  var i981 = i977[1]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i976.names = i980
  i976.shadows = i977[2]
  i976.anisotropicFiltering = i977[3]
  i976.antiAliasing = i977[4]
  i976.lodBias = i977[5]
  i976.shadowCascades = i977[6]
  i976.shadowDistance = i977[7]
  i976.shadowmaskMode = i977[8]
  i976.shadowProjection = i977[9]
  i976.shadowResolution = i977[10]
  i976.softParticles = !!i977[11]
  i976.softVegetation = !!i977[12]
  i976.activeColorSpace = i977[13]
  i976.desiredColorSpace = i977[14]
  i976.masterTextureLimit = i977[15]
  i976.maxQueuedFrames = i977[16]
  i976.particleRaycastBudget = i977[17]
  i976.pixelLightCount = i977[18]
  i976.realtimeReflectionProbes = !!i977[19]
  i976.shadowCascade2Split = i977[20]
  i976.shadowCascade4Split = new pc.Vec3( i977[21], i977[22], i977[23] )
  i976.streamingMipmapsActive = !!i977[24]
  i976.vSyncCount = i977[25]
  i976.asyncUploadBufferSize = i977[26]
  i976.asyncUploadTimeSlice = i977[27]
  i976.billboardsFaceCameraPosition = !!i977[28]
  i976.shadowNearPlaneOffset = i977[29]
  i976.streamingMipmapsMemoryBudget = i977[30]
  i976.maximumLODLevel = i977[31]
  i976.streamingMipmapsAddAllCameras = !!i977[32]
  i976.streamingMipmapsMaxLevelReduction = i977[33]
  i976.streamingMipmapsRenderersPerFrame = i977[34]
  i976.resolutionScalingFixedDPIFactor = i977[35]
  i976.streamingMipmapsMaxFileIORequests = i977[36]
  i976.currentQualityLevel = i977[37]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i987 = data
  i986.weight = i987[0]
  i986.vertices = i987[1]
  i986.normals = i987[2]
  i986.tangents = i987[3]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i991 = data
  i990.mode = i991[0]
  i990.parameter = i991[1]
  i990.threshold = i991[2]
  return i990
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1593";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3094";

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

Deserializers.buildID = "90eef572-184f-4e84-81a0-f512dfd1ec13";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

