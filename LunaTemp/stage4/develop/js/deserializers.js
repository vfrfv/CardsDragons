var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointSpring' )
  var i519 = data
  i518.spring = i519[0]
  i518.damper = i519[1]
  i518.targetPosition = i519[2]
  return i518
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointMotor' )
  var i521 = data
  i520.m_TargetVelocity = i521[0]
  i520.m_Force = i521[1]
  i520.m_FreeSpin = i521[2]
  return i520
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointLimits' )
  var i523 = data
  i522.m_Min = i523[0]
  i522.m_Max = i523[1]
  i522.m_Bounciness = i523[2]
  i522.m_BounceMinVelocity = i523[3]
  i522.m_ContactDistance = i523[4]
  i522.minBounce = i523[5]
  i522.maxBounce = i523[6]
  return i522
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointDrive' )
  var i525 = data
  i524.m_PositionSpring = i525[0]
  i524.m_PositionDamper = i525[1]
  i524.m_MaximumForce = i525[2]
  i524.m_UseAcceleration = i525[3]
  return i524
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i527 = data
  i526.m_Spring = i527[0]
  i526.m_Damper = i527[1]
  return i526
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i529 = data
  i528.m_Limit = i529[0]
  i528.m_Bounciness = i529[1]
  i528.m_ContactDistance = i529[2]
  return i528
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i531 = data
  i530.m_ExtremumSlip = i531[0]
  i530.m_ExtremumValue = i531[1]
  i530.m_AsymptoteSlip = i531[2]
  i530.m_AsymptoteValue = i531[3]
  i530.m_Stiffness = i531[4]
  return i530
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i533 = data
  i532.m_LowerAngle = i533[0]
  i532.m_UpperAngle = i533[1]
  return i532
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i535 = data
  i534.m_MotorSpeed = i535[0]
  i534.m_MaximumMotorTorque = i535[1]
  return i534
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i537 = data
  i536.m_DampingRatio = i537[0]
  i536.m_Frequency = i537[1]
  i536.m_Angle = i537[2]
  return i536
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i539 = data
  i538.m_LowerTranslation = i539[0]
  i538.m_UpperTranslation = i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i541 = data
  i540.name = i541[0]
  i540.width = i541[1]
  i540.height = i541[2]
  i540.mipmapCount = i541[3]
  i540.anisoLevel = i541[4]
  i540.filterMode = i541[5]
  i540.hdr = !!i541[6]
  i540.format = i541[7]
  i540.wrapMode = i541[8]
  i540.alphaIsTransparency = !!i541[9]
  i540.alphaSource = i541[10]
  i540.graphicsFormat = i541[11]
  i540.sRGBTexture = !!i541[12]
  i540.desiredColorSpace = i541[13]
  i540.wrapU = i541[14]
  i540.wrapV = i541[15]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i543 = data
  i542.position = new pc.Vec3( i543[0], i543[1], i543[2] )
  i542.scale = new pc.Vec3( i543[3], i543[4], i543[5] )
  i542.rotation = new pc.Quat(i543[6], i543[7], i543[8], i543[9])
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i545 = data
  i544.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i545[0], i544.main)
  i544.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i545[1], i544.colorBySpeed)
  i544.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i545[2], i544.colorOverLifetime)
  i544.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i545[3], i544.emission)
  i544.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i545[4], i544.rotationBySpeed)
  i544.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i545[5], i544.rotationOverLifetime)
  i544.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i545[6], i544.shape)
  i544.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i545[7], i544.sizeBySpeed)
  i544.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i545[8], i544.sizeOverLifetime)
  i544.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i545[9], i544.textureSheetAnimation)
  i544.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i545[10], i544.velocityOverLifetime)
  i544.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i545[11], i544.noise)
  i544.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i545[12], i544.inheritVelocity)
  i544.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i545[13], i544.forceOverLifetime)
  i544.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i545[14], i544.limitVelocityOverLifetime)
  i544.useAutoRandomSeed = !!i545[15]
  i544.randomSeed = i545[16]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemMain()
  var i547 = data
  i546.duration = i547[0]
  i546.loop = !!i547[1]
  i546.prewarm = !!i547[2]
  i546.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[3], i546.startDelay)
  i546.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[4], i546.startLifetime)
  i546.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[5], i546.startSpeed)
  i546.startSize3D = !!i547[6]
  i546.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[7], i546.startSizeX)
  i546.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[8], i546.startSizeY)
  i546.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[9], i546.startSizeZ)
  i546.startRotation3D = !!i547[10]
  i546.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[11], i546.startRotationX)
  i546.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[12], i546.startRotationY)
  i546.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[13], i546.startRotationZ)
  i546.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i547[14], i546.startColor)
  i546.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[15], i546.gravityModifier)
  i546.simulationSpace = i547[16]
  request.r(i547[17], i547[18], 0, i546, 'customSimulationSpace')
  i546.simulationSpeed = i547[19]
  i546.useUnscaledTime = !!i547[20]
  i546.scalingMode = i547[21]
  i546.playOnAwake = !!i547[22]
  i546.maxParticles = i547[23]
  i546.emitterVelocityMode = i547[24]
  i546.stopAction = i547[25]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i548 = root || new pc.MinMaxCurve()
  var i549 = data
  i548.mode = i549[0]
  i548.curveMin = new pc.AnimationCurve( { keys_flow: i549[1] } )
  i548.curveMax = new pc.AnimationCurve( { keys_flow: i549[2] } )
  i548.curveMultiplier = i549[3]
  i548.constantMin = i549[4]
  i548.constantMax = i549[5]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i550 = root || new pc.MinMaxGradient()
  var i551 = data
  i550.mode = i551[0]
  i550.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i551[1], i550.gradientMin)
  i550.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i551[2], i550.gradientMax)
  i550.colorMin = new pc.Color(i551[3], i551[4], i551[5], i551[6])
  i550.colorMax = new pc.Color(i551[7], i551[8], i551[9], i551[10])
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i553 = data
  i552.mode = i553[0]
  var i555 = i553[1]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i555[i + 0]) );
  }
  i552.colorKeys = i554
  var i557 = i553[2]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i557[i + 0]) );
  }
  i552.alphaKeys = i556
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemColorBySpeed()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i559[1], i558.color)
  i558.range = new pc.Vec2( i559[2], i559[3] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i563 = data
  i562.color = new pc.Color(i563[0], i563[1], i563[2], i563[3])
  i562.time = i563[4]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i567 = data
  i566.alpha = i567[0]
  i566.time = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemColorOverLifetime()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i569[1], i568.color)
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemEmitter()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.rateOverTime)
  i570.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.rateOverDistance)
  var i573 = i571[3]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i573[i + 0]) );
  }
  i570.bursts = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemBurst()
  var i577 = data
  i576.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[0], i576.count)
  i576.cycleCount = i577[1]
  i576.minCount = i577[2]
  i576.maxCount = i577[3]
  i576.repeatInterval = i577[4]
  i576.time = i577[5]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemRotationBySpeed()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.separateAxes = !!i579[4]
  i578.range = new pc.Vec2( i579[5], i579[6] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemRotationOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.separateAxes = !!i581[4]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemShape()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.shapeType = i583[1]
  i582.randomDirectionAmount = i583[2]
  i582.sphericalDirectionAmount = i583[3]
  i582.randomPositionAmount = i583[4]
  i582.alignToDirection = !!i583[5]
  i582.radius = i583[6]
  i582.radiusMode = i583[7]
  i582.radiusSpread = i583[8]
  i582.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[9], i582.radiusSpeed)
  i582.radiusThickness = i583[10]
  i582.angle = i583[11]
  i582.length = i583[12]
  i582.boxThickness = new pc.Vec3( i583[13], i583[14], i583[15] )
  i582.meshShapeType = i583[16]
  request.r(i583[17], i583[18], 0, i582, 'mesh')
  request.r(i583[19], i583[20], 0, i582, 'meshRenderer')
  request.r(i583[21], i583[22], 0, i582, 'skinnedMeshRenderer')
  i582.useMeshMaterialIndex = !!i583[23]
  i582.meshMaterialIndex = i583[24]
  i582.useMeshColors = !!i583[25]
  i582.normalOffset = i583[26]
  i582.arc = i583[27]
  i582.arcMode = i583[28]
  i582.arcSpread = i583[29]
  i582.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[30], i582.arcSpeed)
  i582.donutRadius = i583[31]
  i582.position = new pc.Vec3( i583[32], i583[33], i583[34] )
  i582.rotation = new pc.Vec3( i583[35], i583[36], i583[37] )
  i582.scale = new pc.Vec3( i583[38], i583[39], i583[40] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemSizeBySpeed()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.x)
  i584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.y)
  i584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.z)
  i584.separateAxes = !!i585[4]
  i584.range = new pc.Vec2( i585[5], i585[6] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemSizeOverLifetime()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.separateAxes = !!i587[4]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.mode = i589[1]
  i588.animation = i589[2]
  i588.numTilesX = i589[3]
  i588.numTilesY = i589[4]
  i588.useRandomRow = !!i589[5]
  i588.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[6], i588.frameOverTime)
  i588.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[7], i588.startFrame)
  i588.cycleCount = i589[8]
  i588.rowIndex = i589[9]
  i588.flipU = i589[10]
  i588.flipV = i589[11]
  i588.spriteCount = i589[12]
  var i591 = i589[13]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.sprites = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[4], i594.radial)
  i594.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[5], i594.speedModifier)
  i594.space = i595[6]
  i594.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[7], i594.orbitalX)
  i594.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[8], i594.orbitalY)
  i594.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[9], i594.orbitalZ)
  i594.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[10], i594.orbitalOffsetX)
  i594.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[11], i594.orbitalOffsetY)
  i594.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[12], i594.orbitalOffsetZ)
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemNoise()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.separateAxes = !!i597[1]
  i596.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.strengthX)
  i596.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.strengthY)
  i596.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[4], i596.strengthZ)
  i596.frequency = i597[5]
  i596.damping = !!i597[6]
  i596.octaveCount = i597[7]
  i596.octaveMultiplier = i597[8]
  i596.octaveScale = i597[9]
  i596.quality = i597[10]
  i596.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[11], i596.scrollSpeed)
  i596.scrollSpeedMultiplier = i597[12]
  i596.remapEnabled = !!i597[13]
  i596.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[14], i596.remapX)
  i596.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[15], i596.remapY)
  i596.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[16], i596.remapZ)
  i596.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[17], i596.positionAmount)
  i596.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[18], i596.rotationAmount)
  i596.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[19], i596.sizeAmount)
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemInheritVelocity()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.mode = i599[1]
  i598.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.curve)
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemForceOverLifetime()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[1], i600.x)
  i600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.y)
  i600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.z)
  i600.space = i601[4]
  i600.randomized = !!i601[5]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[1], i602.limit)
  i602.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.limitX)
  i602.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.limitY)
  i602.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.limitZ)
  i602.dampen = i603[5]
  i602.separateAxes = !!i603[6]
  i602.space = i603[7]
  i602.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[8], i602.drag)
  i602.multiplyDragByParticleSize = !!i603[9]
  i602.multiplyDragByParticleVelocity = !!i603[10]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i605 = data
  i604.enabled = !!i605[0]
  request.r(i605[1], i605[2], 0, i604, 'sharedMaterial')
  var i607 = i605[3]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.sharedMaterials = i606
  i604.receiveShadows = !!i605[4]
  i604.shadowCastingMode = i605[5]
  i604.sortingLayerID = i605[6]
  i604.sortingOrder = i605[7]
  i604.lightmapIndex = i605[8]
  i604.lightmapSceneIndex = i605[9]
  i604.lightmapScaleOffset = new pc.Vec4( i605[10], i605[11], i605[12], i605[13] )
  i604.lightProbeUsage = i605[14]
  i604.reflectionProbeUsage = i605[15]
  request.r(i605[16], i605[17], 0, i604, 'mesh')
  i604.meshCount = i605[18]
  i604.activeVertexStreamsCount = i605[19]
  i604.alignment = i605[20]
  i604.renderMode = i605[21]
  i604.sortMode = i605[22]
  i604.lengthScale = i605[23]
  i604.velocityScale = i605[24]
  i604.cameraVelocityScale = i605[25]
  i604.normalDirection = i605[26]
  i604.sortingFudge = i605[27]
  i604.minParticleSize = i605[28]
  i604.maxParticleSize = i605[29]
  i604.pivot = new pc.Vec3( i605[30], i605[31], i605[32] )
  request.r(i605[33], i605[34], 0, i604, 'trailMaterial')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'clip')
  request.r(i611[2], i611[3], 0, i610, 'outputAudioMixerGroup')
  i610.playOnAwake = !!i611[4]
  i610.loop = !!i611[5]
  i610.time = i611[6]
  i610.volume = i611[7]
  i610.pitch = i611[8]
  i610.enabled = !!i611[9]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i613 = data
  i612.name = i613[0]
  i612.tagId = i613[1]
  i612.enabled = !!i613[2]
  i612.isStatic = !!i613[3]
  i612.layer = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i614 = root || new pc.UnityMaterial()
  var i615 = data
  i614.name = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'shader')
  i614.renderQueue = i615[3]
  i614.enableInstancing = !!i615[4]
  var i617 = i615[5]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i617[i + 0]) );
  }
  i614.floatParameters = i616
  var i619 = i615[6]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i619[i + 0]) );
  }
  i614.colorParameters = i618
  var i621 = i615[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i621[i + 0]) );
  }
  i614.vectorParameters = i620
  var i623 = i615[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i623[i + 0]) );
  }
  i614.textureParameters = i622
  var i625 = i615[9]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i625[i + 0]) );
  }
  i614.materialFlags = i624
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i629 = data
  i628.name = i629[0]
  i628.value = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i633 = data
  i632.name = i633[0]
  i632.value = new pc.Color(i633[1], i633[2], i633[3], i633[4])
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i637 = data
  i636.name = i637[0]
  i636.value = new pc.Vec4( i637[1], i637[2], i637[3], i637[4] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i641 = data
  i640.name = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'value')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i645 = data
  i644.name = i645[0]
  i644.enabled = !!i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i647 = data
  i646.pivot = new pc.Vec2( i647[0], i647[1] )
  i646.anchorMin = new pc.Vec2( i647[2], i647[3] )
  i646.anchorMax = new pc.Vec2( i647[4], i647[5] )
  i646.sizeDelta = new pc.Vec2( i647[6], i647[7] )
  i646.anchoredPosition3D = new pc.Vec3( i647[8], i647[9], i647[10] )
  i646.rotation = new pc.Quat(i647[11], i647[12], i647[13], i647[14])
  i646.scale = new pc.Vec3( i647[15], i647[16], i647[17] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i649 = data
  i648.cullTransparentMesh = !!i649[0]
  return i648
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Image' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_Sprite')
  i650.m_Type = i651[2]
  i650.m_PreserveAspect = !!i651[3]
  i650.m_FillCenter = !!i651[4]
  i650.m_FillMethod = i651[5]
  i650.m_FillAmount = i651[6]
  i650.m_FillClockwise = !!i651[7]
  i650.m_FillOrigin = i651[8]
  i650.m_UseSpriteMesh = !!i651[9]
  i650.m_PixelsPerUnitMultiplier = i651[10]
  request.r(i651[11], i651[12], 0, i650, 'm_Material')
  i650.m_Maskable = !!i651[13]
  i650.m_Color = new pc.Color(i651[14], i651[15], i651[16], i651[17])
  i650.m_RaycastTarget = !!i651[18]
  i650.m_RaycastPadding = new pc.Vec4( i651[19], i651[20], i651[21], i651[22] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'animatorController')
  request.r(i653[2], i653[3], 0, i652, 'avatar')
  i652.updateMode = i653[4]
  i652.hasTransformHierarchy = !!i653[5]
  i652.applyRootMotion = !!i653[6]
  var i655 = i653[7]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.humanBones = i654
  i652.enabled = !!i653[8]
  return i652
}

Deserializers["Episode1"] = function (request, data, root) {
  var i658 = root || request.c( 'Episode1' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, '_arm')
  request.r(i659[2], i659[3], 0, i658, '_points')
  request.r(i659[4], i659[5], 0, i658, '_unit')
  request.r(i659[6], i659[7], 0, i658, '_particleSystem')
  request.r(i659[8], i659[9], 0, i658, '_textCoins')
  request.r(i659[10], i659[11], 0, i658, '_textDamage')
  request.r(i659[12], i659[13], 0, i658, '_textHealth')
  request.r(i659[14], i659[15], 0, i658, '_textHealth2')
  request.r(i659[16], i659[17], 0, i658, '_textDamage2')
  i658.scaleDuration = i659[18]
  i658.moveDuration = i659[19]
  i658.targetScale = new pc.Vec3( i659[20], i659[21], i659[22] )
  return i658
}

Deserializers["Card2V"] = function (request, data, root) {
  var i660 = root || request.c( 'Card2V' )
  var i661 = data
  i660._us = !!i661[0]
  request.r(i661[1], i661[2], 0, i660, '_arm')
  request.r(i661[3], i661[4], 0, i660, '_episode')
  i660._dragon = !!i661[5]
  i660._isMainCard = !!i661[6]
  i660.moveDuration = i661[7]
  i660.scaleDuration = i661[8]
  i660.targetScale = new pc.Vec3( i661[9], i661[10], i661[11] )
  return i660
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Text' )
  var i663 = data
  i662.m_FontData = request.d('UnityEngine.UI.FontData', i663[0], i662.m_FontData)
  i662.m_Text = i663[1]
  request.r(i663[2], i663[3], 0, i662, 'm_Material')
  i662.m_Maskable = !!i663[4]
  i662.m_Color = new pc.Color(i663[5], i663[6], i663[7], i663[8])
  i662.m_RaycastTarget = !!i663[9]
  i662.m_RaycastPadding = new pc.Vec4( i663[10], i663[11], i663[12], i663[13] )
  return i662
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.FontData' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'm_Font')
  i664.m_FontSize = i665[2]
  i664.m_FontStyle = i665[3]
  i664.m_BestFit = !!i665[4]
  i664.m_MinSize = i665[5]
  i664.m_MaxSize = i665[6]
  i664.m_Alignment = i665[7]
  i664.m_AlignByGeometry = !!i665[8]
  i664.m_RichText = !!i665[9]
  i664.m_HorizontalOverflow = i665[10]
  i664.m_VerticalOverflow = i665[11]
  i664.m_LineSpacing = i665[12]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i667 = data
  i666.name = i667[0]
  i666.halfPrecision = !!i667[1]
  i666.useUInt32IndexFormat = !!i667[2]
  i666.vertexCount = i667[3]
  i666.aabb = i667[4]
  var i669 = i667[5]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( !!i669[i + 0] );
  }
  i666.streams = i668
  i666.vertices = i667[6]
  var i671 = i667[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i671[i + 0]) );
  }
  i666.subMeshes = i670
  var i673 = i667[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 16) {
    i672.push( new pc.Mat4().setData(i673[i + 0], i673[i + 1], i673[i + 2], i673[i + 3],  i673[i + 4], i673[i + 5], i673[i + 6], i673[i + 7],  i673[i + 8], i673[i + 9], i673[i + 10], i673[i + 11],  i673[i + 12], i673[i + 13], i673[i + 14], i673[i + 15]) );
  }
  i666.bindposes = i672
  var i675 = i667[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i675[i + 0]) );
  }
  i666.blendShapes = i674
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i681 = data
  i680.triangles = i681[0]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i687 = data
  i686.name = i687[0]
  var i689 = i687[1]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i689[i + 0]) );
  }
  i686.frames = i688
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i691 = data
  i690.m_Alpha = i691[0]
  i690.m_Interactable = !!i691[1]
  i690.m_BlocksRaycasts = !!i691[2]
  i690.m_IgnoreParentGroups = !!i691[3]
  i690.enabled = !!i691[4]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i693 = data
  i692.name = i693[0]
  i692.index = i693[1]
  i692.startup = !!i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.aspect = i695[1]
  i694.orthographic = !!i695[2]
  i694.orthographicSize = i695[3]
  i694.backgroundColor = new pc.Color(i695[4], i695[5], i695[6], i695[7])
  i694.nearClipPlane = i695[8]
  i694.farClipPlane = i695[9]
  i694.fieldOfView = i695[10]
  i694.depth = i695[11]
  i694.clearFlags = i695[12]
  i694.cullingMask = i695[13]
  i694.rect = i695[14]
  request.r(i695[15], i695[16], 0, i694, 'targetTexture')
  i694.usePhysicalProperties = !!i695[17]
  i694.focalLength = i695[18]
  i694.sensorSize = new pc.Vec2( i695[19], i695[20] )
  i694.lensShift = new pc.Vec2( i695[21], i695[22] )
  i694.gateFit = i695[23]
  i694.commandBufferCount = i695[24]
  i694.cameraType = i695[25]
  return i694
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i697 = data
  i696.m_RenderShadows = !!i697[0]
  i696.m_RequiresDepthTextureOption = i697[1]
  i696.m_RequiresOpaqueTextureOption = i697[2]
  i696.m_CameraType = i697[3]
  var i699 = i697[4]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i696.m_Cameras = i698
  i696.m_RendererIndex = i697[5]
  i696.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i697[6] )
  request.r(i697[7], i697[8], 0, i696, 'm_VolumeTrigger')
  i696.m_VolumeFrameworkUpdateModeOption = i697[9]
  i696.m_RenderPostProcessing = !!i697[10]
  i696.m_Antialiasing = i697[11]
  i696.m_AntialiasingQuality = i697[12]
  i696.m_StopNaN = !!i697[13]
  i696.m_Dithering = !!i697[14]
  i696.m_ClearDepth = !!i697[15]
  i696.m_AllowXRRendering = !!i697[16]
  i696.m_AllowHDROutput = !!i697[17]
  i696.m_UseScreenCoordOverride = !!i697[18]
  i696.m_ScreenSizeOverride = new pc.Vec4( i697[19], i697[20], i697[21], i697[22] )
  i696.m_ScreenCoordScaleBias = new pc.Vec4( i697[23], i697[24], i697[25], i697[26] )
  i696.m_RequiresDepthTexture = !!i697[27]
  i696.m_RequiresColorTexture = !!i697[28]
  i696.m_Version = i697[29]
  i696.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i697[30], i696.m_TaaSettings)
  return i696
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i703 = data
  i702.m_Quality = i703[0]
  i702.m_FrameInfluence = i703[1]
  i702.m_JitterScale = i703[2]
  i702.m_MipBias = i703[3]
  i702.m_VarianceClampScale = i703[4]
  i702.m_ContrastAdaptiveSharpening = i703[5]
  return i702
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i704 = root || request.c( 'ParticleFollowUI' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, '_buttonButtle')
  request.r(i705[2], i705[3], 0, i704, '_buttonShop')
  request.r(i705[4], i705[5], 0, i704, 'uiCamera')
  request.r(i705[6], i705[7], 0, i704, '_particleEffectButton')
  request.r(i705[8], i705[9], 0, i704, '_particleEffectButtonShop')
  i704.zOffset = i705[10]
  return i704
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i706 = root || request.c( 'ClickCta' )
  var i707 = data
  return i706
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i709 = data
  i708.m_ComponentVersion = i709[0]
  i708.m_LightType = i709[1]
  i708.m_BlendStyleIndex = i709[2]
  i708.m_FalloffIntensity = i709[3]
  i708.m_Color = new pc.Color(i709[4], i709[5], i709[6], i709[7])
  i708.m_Intensity = i709[8]
  i708.m_LightVolumeIntensity = i709[9]
  i708.m_LightVolumeIntensityEnabled = !!i709[10]
  i708.m_ApplyToSortingLayers = i709[11]
  request.r(i709[12], i709[13], 0, i708, 'm_LightCookieSprite')
  request.r(i709[14], i709[15], 0, i708, 'm_DeprecatedPointLightCookieSprite')
  i708.m_LightOrder = i709[16]
  i708.m_AlphaBlendOnOverlap = !!i709[17]
  i708.m_OverlapOperation = i709[18]
  i708.m_NormalMapDistance = i709[19]
  i708.m_NormalMapQuality = i709[20]
  i708.m_UseNormalMap = !!i709[21]
  i708.m_ShadowIntensityEnabled = !!i709[22]
  i708.m_ShadowIntensity = i709[23]
  i708.m_ShadowVolumeIntensityEnabled = !!i709[24]
  i708.m_ShadowVolumeIntensity = i709[25]
  i708.m_PointLightInnerAngle = i709[26]
  i708.m_PointLightOuterAngle = i709[27]
  i708.m_PointLightInnerRadius = i709[28]
  i708.m_PointLightOuterRadius = i709[29]
  i708.m_ShapeLightParametricSides = i709[30]
  i708.m_ShapeLightParametricAngleOffset = i709[31]
  i708.m_ShapeLightParametricRadius = i709[32]
  i708.m_ShapeLightFalloffSize = i709[33]
  i708.m_ShapeLightFalloffOffset = new pc.Vec2( i709[34], i709[35] )
  var i711 = i709[36]
  var i710 = []
  for(var i = 0; i < i711.length; i += 3) {
    i710.push( new pc.Vec3( i711[i + 0], i711[i + 1], i711[i + 2] ) );
  }
  i708.m_ShapePath = i710
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.planeDistance = i715[1]
  i714.referencePixelsPerUnit = i715[2]
  i714.isFallbackOverlay = !!i715[3]
  i714.renderMode = i715[4]
  i714.renderOrder = i715[5]
  i714.sortingLayerName = i715[6]
  i714.sortingOrder = i715[7]
  i714.scaleFactor = i715[8]
  request.r(i715[9], i715[10], 0, i714, 'worldCamera')
  i714.overrideSorting = !!i715[11]
  i714.pixelPerfect = !!i715[12]
  i714.targetDisplay = i715[13]
  i714.overridePixelPerfect = !!i715[14]
  return i714
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i717 = data
  i716.m_UiScaleMode = i717[0]
  i716.m_ReferencePixelsPerUnit = i717[1]
  i716.m_ScaleFactor = i717[2]
  i716.m_ReferenceResolution = new pc.Vec2( i717[3], i717[4] )
  i716.m_ScreenMatchMode = i717[5]
  i716.m_MatchWidthOrHeight = i717[6]
  i716.m_PhysicalUnit = i717[7]
  i716.m_FallbackScreenDPI = i717[8]
  i716.m_DefaultSpriteDPI = i717[9]
  i716.m_DynamicPixelsPerUnit = i717[10]
  i716.m_PresetInfoIsWorld = !!i717[11]
  return i716
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i719 = data
  i718.m_IgnoreReversedGraphics = !!i719[0]
  i718.m_BlockingObjects = i719[1]
  i718.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i719[2] )
  return i718
}

Deserializers["CardEnemy"] = function (request, data, root) {
  var i720 = root || request.c( 'CardEnemy' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, '_particleSystem')
  return i720
}

Deserializers["Point"] = function (request, data, root) {
  var i722 = root || request.c( 'Point' )
  var i723 = data
  i722._occupied = !!i723[0]
  return i722
}

Deserializers["Episode6"] = function (request, data, root) {
  var i724 = root || request.c( 'Episode6' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_arm')
  request.r(i725[2], i725[3], 0, i724, '_points')
  request.r(i725[4], i725[5], 0, i724, '_cart')
  request.r(i725[6], i725[7], 0, i724, '_cartPoint')
  request.r(i725[8], i725[9], 0, i724, '_coinsText')
  request.r(i725[10], i725[11], 0, i724, '_textDamage')
  request.r(i725[12], i725[13], 0, i724, '_textHealth')
  request.r(i725[14], i725[15], 0, i724, '_textHealth2')
  request.r(i725[16], i725[17], 0, i724, '_textDamage2')
  i724.scaleDuration = i725[18]
  i724.moveDuration = i725[19]
  i724.targetScale = new pc.Vec3( i725[20], i725[21], i725[22] )
  request.r(i725[23], i725[24], 0, i724, '_particleDragon')
  request.r(i725[25], i725[26], 0, i724, '_particleCards')
  return i724
}

Deserializers["Episode2"] = function (request, data, root) {
  var i726 = root || request.c( 'Episode2' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_arm')
  request.r(i727[2], i727[3], 0, i726, '_points')
  request.r(i727[4], i727[5], 0, i726, '_unit1')
  request.r(i727[6], i727[7], 0, i726, '_unit2')
  request.r(i727[8], i727[9], 0, i726, '_particleSystem1')
  request.r(i727[10], i727[11], 0, i726, '_particleSystem2')
  request.r(i727[12], i727[13], 0, i726, '_textCoins')
  request.r(i727[14], i727[15], 0, i726, '_textDamage')
  request.r(i727[16], i727[17], 0, i726, '_textHealth')
  request.r(i727[18], i727[19], 0, i726, '_textHealth2')
  request.r(i727[20], i727[21], 0, i726, '_textDamage2')
  i726.scaleDuration = i727[22]
  i726.moveDuration = i727[23]
  i726.targetScale = new pc.Vec3( i727[24], i727[25], i727[26] )
  return i726
}

Deserializers["Episode5"] = function (request, data, root) {
  var i728 = root || request.c( 'Episode5' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '_card1_1_2')
  request.r(i729[2], i729[3], 0, i728, '_card1_2_2')
  request.r(i729[4], i729[5], 0, i728, '_card1_3_2')
  request.r(i729[6], i729[7], 0, i728, '_card1_1')
  request.r(i729[8], i729[9], 0, i728, '_card2_1')
  request.r(i729[10], i729[11], 0, i728, '_coinsText')
  request.r(i729[12], i729[13], 0, i728, '_particleSystem')
  return i728
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i730 = root || request.c( 'Episode4_1' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, '_cart1__2')
  request.r(i731[2], i731[3], 0, i730, '_cart2__2')
  request.r(i731[4], i731[5], 0, i730, '_cart3__2')
  request.r(i731[6], i731[7], 0, i730, '_cart1_1')
  request.r(i731[8], i731[9], 0, i730, '_cart2_1')
  request.r(i731[10], i731[11], 0, i730, '_cart3_1')
  request.r(i731[12], i731[13], 0, i730, '_arm')
  request.r(i731[14], i731[15], 0, i730, '_coinText')
  request.r(i731[16], i731[17], 0, i730, '_particleSystem')
  request.r(i731[18], i731[19], 0, i730, '_particleDragon')
  return i730
}

Deserializers["UpdateButton"] = function (request, data, root) {
  var i732 = root || request.c( 'UpdateButton' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_episode')
  request.r(i733[2], i733[3], 0, i732, '_arm')
  return i732
}

Deserializers["Episode3"] = function (request, data, root) {
  var i734 = root || request.c( 'Episode3' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, '_battle')
  request.r(i735[2], i735[3], 0, i734, '_button')
  request.r(i735[4], i735[5], 0, i734, '_cardDracone')
  request.r(i735[6], i735[7], 0, i734, '_point')
  request.r(i735[8], i735[9], 0, i734, '_cardEnemye1')
  request.r(i735[10], i735[11], 0, i734, '_cardEnemye2')
  request.r(i735[12], i735[13], 0, i734, '_cardEnemye3')
  request.r(i735[14], i735[15], 0, i734, '_cardDragon1')
  request.r(i735[16], i735[17], 0, i734, '_cardDragon2')
  request.r(i735[18], i735[19], 0, i734, '_cardDragon3')
  request.r(i735[20], i735[21], 0, i734, '_particleSystem1')
  request.r(i735[22], i735[23], 0, i734, '_particleSystem2')
  request.r(i735[24], i735[25], 0, i734, '_particleSystem3')
  request.r(i735[26], i735[27], 0, i734, '_particleButton')
  request.r(i735[28], i735[29], 0, i734, '_textCoins')
  request.r(i735[30], i735[31], 0, i734, '_winVictoty')
  request.r(i735[32], i735[33], 0, i734, '_winInscription')
  request.r(i735[34], i735[35], 0, i734, '_winInscription2')
  request.r(i735[36], i735[37], 0, i734, '_winInscription3')
  request.r(i735[38], i735[39], 0, i734, '_parentsDisplay')
  request.r(i735[40], i735[41], 0, i734, '_cardL')
  return i734
}

Deserializers["Episode7"] = function (request, data, root) {
  var i736 = root || request.c( 'Episode7' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'button')
  request.r(i737[2], i737[3], 0, i736, '_battle')
  request.r(i737[4], i737[5], 0, i736, '_button')
  request.r(i737[6], i737[7], 0, i736, '_cardEnemye1')
  request.r(i737[8], i737[9], 0, i736, '_cardEnemye2')
  request.r(i737[10], i737[11], 0, i736, '_cardEnemye3')
  request.r(i737[12], i737[13], 0, i736, '_cardEnemye4')
  request.r(i737[14], i737[15], 0, i736, '_cardEnemye5')
  request.r(i737[16], i737[17], 0, i736, '_cardEnemye6')
  request.r(i737[18], i737[19], 0, i736, '_cardDragon1')
  request.r(i737[20], i737[21], 0, i736, '_cardDragon2')
  request.r(i737[22], i737[23], 0, i736, '_cardDragon3')
  request.r(i737[24], i737[25], 0, i736, '_particleSystem1')
  request.r(i737[26], i737[27], 0, i736, '_particleSystem2')
  request.r(i737[28], i737[29], 0, i736, '_particleSystem3')
  request.r(i737[30], i737[31], 0, i736, '_particleSystem4')
  request.r(i737[32], i737[33], 0, i736, '_particleSystem5')
  request.r(i737[34], i737[35], 0, i736, '_particleSystem6')
  request.r(i737[36], i737[37], 0, i736, '_winVictoty')
  request.r(i737[38], i737[39], 0, i736, '_winFinal')
  request.r(i737[40], i737[41], 0, i736, '_particleSystem')
  request.r(i737[42], i737[43], 0, i736, '_particleDragon')
  request.r(i737[44], i737[45], 0, i736, '_episode3')
  return i736
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i738 = root || request.c( 'Episode4_2' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, '_buttonF')
  request.r(i739[2], i739[3], 0, i738, '_battle')
  request.r(i739[4], i739[5], 0, i738, '_button')
  request.r(i739[6], i739[7], 0, i738, '_cardEnemye1')
  request.r(i739[8], i739[9], 0, i738, '_cardEnemye2')
  request.r(i739[10], i739[11], 0, i738, '_cardEnemye3')
  request.r(i739[12], i739[13], 0, i738, '_cardDracone1')
  request.r(i739[14], i739[15], 0, i738, '_cardDracone2')
  request.r(i739[16], i739[17], 0, i738, '_cardDracone3')
  request.r(i739[18], i739[19], 0, i738, '_winDefeat')
  request.r(i739[20], i739[21], 0, i738, '_winFinal')
  request.r(i739[22], i739[23], 0, i738, '_particleSystem1')
  request.r(i739[24], i739[25], 0, i738, '_particleSystem2')
  request.r(i739[26], i739[27], 0, i738, '_particleSystem3')
  request.r(i739[28], i739[29], 0, i738, '_particleSystem4')
  request.r(i739[30], i739[31], 0, i738, '_particleSystem5')
  request.r(i739[32], i739[33], 0, i738, '_particleSystem6')
  request.r(i739[34], i739[35], 0, i738, '_particleSystem7')
  request.r(i739[36], i739[37], 0, i738, '_particleSystem8')
  request.r(i739[38], i739[39], 0, i738, '_particleSystem9')
  request.r(i739[40], i739[41], 0, i738, '_particleButtun')
  request.r(i739[42], i739[43], 0, i738, '_particleDragon')
  request.r(i739[44], i739[45], 0, i738, '_layer')
  request.r(i739[46], i739[47], 0, i738, '_winInscription')
  request.r(i739[48], i739[49], 0, i738, '_winInscription2')
  request.r(i739[50], i739[51], 0, i738, '_winInscription3')
  return i738
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i740 = root || request.c( 'Episode5_2' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, '_battle')
  request.r(i741[2], i741[3], 0, i740, '_button')
  request.r(i741[4], i741[5], 0, i740, '_cardEnemye1')
  request.r(i741[6], i741[7], 0, i740, '_cardEnemye2')
  request.r(i741[8], i741[9], 0, i740, '_cardEnemye3')
  request.r(i741[10], i741[11], 0, i740, '_cardDracone1')
  request.r(i741[12], i741[13], 0, i740, '_cardDracone2')
  request.r(i741[14], i741[15], 0, i740, '_cardDracone3')
  request.r(i741[16], i741[17], 0, i740, '_cardDracone4')
  request.r(i741[18], i741[19], 0, i740, '_winDefeat')
  request.r(i741[20], i741[21], 0, i740, '_winFinal')
  request.r(i741[22], i741[23], 0, i740, '_particleSystem1')
  request.r(i741[24], i741[25], 0, i740, '_particleSystem2')
  request.r(i741[26], i741[27], 0, i740, '_particleSystem3')
  request.r(i741[28], i741[29], 0, i740, '_particleSystem4')
  request.r(i741[30], i741[31], 0, i740, '_particleSystem5')
  request.r(i741[32], i741[33], 0, i740, '_particleSystem6')
  request.r(i741[34], i741[35], 0, i740, '_particleSystem7')
  request.r(i741[36], i741[37], 0, i740, '_particleSystem')
  request.r(i741[38], i741[39], 0, i740, '_layer')
  request.r(i741[40], i741[41], 0, i740, '_winInscription')
  request.r(i741[42], i741[43], 0, i740, '_winInscription2')
  request.r(i741[44], i741[45], 0, i740, '_winInscription3')
  return i740
}

Deserializers["Buttle"] = function (request, data, root) {
  var i742 = root || request.c( 'Buttle' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_episode')
  request.r(i743[2], i743[3], 0, i742, '_buttonShop')
  request.r(i743[4], i743[5], 0, i742, '_buttonButtle')
  request.r(i743[6], i743[7], 0, i742, '_particle')
  request.r(i743[8], i743[9], 0, i742, '_episode7')
  request.r(i743[10], i743[11], 0, i742, '_episode4_2')
  return i742
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i744 = root || request.c( 'ArmAnimation' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, '_targetButton')
  i744.flyDuration = i745[2]
  i744.shrinkDuration = i745[3]
  i744.restoreDuration = i745[4]
  return i744
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Button' )
  var i747 = data
  i746.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i747[0], i746.m_OnClick)
  i746.m_Navigation = request.d('UnityEngine.UI.Navigation', i747[1], i746.m_Navigation)
  i746.m_Transition = i747[2]
  i746.m_Colors = request.d('UnityEngine.UI.ColorBlock', i747[3], i746.m_Colors)
  i746.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i747[4], i746.m_SpriteState)
  i746.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i747[5], i746.m_AnimationTriggers)
  i746.m_Interactable = !!i747[6]
  request.r(i747[7], i747[8], 0, i746, 'm_TargetGraphic')
  return i746
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i749 = data
  i748.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i749[0], i748.m_PersistentCalls)
  return i748
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i751 = data
  var i753 = i751[0]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('UnityEngine.Events.PersistentCall', i753[i + 0]));
  }
  i750.m_Calls = i752
  return i750
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_Target')
  i756.m_TargetAssemblyTypeName = i757[2]
  i756.m_MethodName = i757[3]
  i756.m_Mode = i757[4]
  i756.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i757[5], i756.m_Arguments)
  i756.m_CallState = i757[6]
  return i756
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_ObjectArgument')
  i758.m_ObjectArgumentAssemblyTypeName = i759[2]
  i758.m_IntArgument = i759[3]
  i758.m_FloatArgument = i759[4]
  i758.m_StringArgument = i759[5]
  i758.m_BoolArgument = !!i759[6]
  return i758
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i761 = data
  i760.m_Mode = i761[0]
  i760.m_WrapAround = !!i761[1]
  request.r(i761[2], i761[3], 0, i760, 'm_SelectOnUp')
  request.r(i761[4], i761[5], 0, i760, 'm_SelectOnDown')
  request.r(i761[6], i761[7], 0, i760, 'm_SelectOnLeft')
  request.r(i761[8], i761[9], 0, i760, 'm_SelectOnRight')
  return i760
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i763 = data
  i762.m_NormalColor = new pc.Color(i763[0], i763[1], i763[2], i763[3])
  i762.m_HighlightedColor = new pc.Color(i763[4], i763[5], i763[6], i763[7])
  i762.m_PressedColor = new pc.Color(i763[8], i763[9], i763[10], i763[11])
  i762.m_SelectedColor = new pc.Color(i763[12], i763[13], i763[14], i763[15])
  i762.m_DisabledColor = new pc.Color(i763[16], i763[17], i763[18], i763[19])
  i762.m_ColorMultiplier = i763[20]
  i762.m_FadeDuration = i763[21]
  return i762
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_HighlightedSprite')
  request.r(i765[2], i765[3], 0, i764, 'm_PressedSprite')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectedSprite')
  request.r(i765[6], i765[7], 0, i764, 'm_DisabledSprite')
  return i764
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i767 = data
  i766.m_NormalTrigger = i767[0]
  i766.m_HighlightedTrigger = i767[1]
  i766.m_PressedTrigger = i767[2]
  i766.m_SelectedTrigger = i767[3]
  i766.m_DisabledTrigger = i767[4]
  return i766
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_FirstSelected')
  i768.m_sendNavigationEvents = !!i769[2]
  i768.m_DragThreshold = i769[3]
  return i768
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i771 = data
  i770.m_HorizontalAxis = i771[0]
  i770.m_VerticalAxis = i771[1]
  i770.m_SubmitButton = i771[2]
  i770.m_CancelButton = i771[3]
  i770.m_InputActionsPerSecond = i771[4]
  i770.m_RepeatDelay = i771[5]
  i770.m_ForceModuleActive = !!i771[6]
  i770.m_SendPointerHoverToParent = !!i771[7]
  return i770
}

Deserializers["Scenario"] = function (request, data, root) {
  var i772 = root || request.c( 'Scenario' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, '_episode1')
  request.r(i773[2], i773[3], 0, i772, '_episode2')
  request.r(i773[4], i773[5], 0, i772, '_episode3')
  request.r(i773[6], i773[7], 0, i772, '_episode4v2')
  return i772
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i774 = root || request.c( 'Episode5_1' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, '_card1')
  request.r(i775[2], i775[3], 0, i774, '_card2')
  request.r(i775[4], i775[5], 0, i774, '_episode5')
  request.r(i775[6], i775[7], 0, i774, 'episode4_1')
  request.r(i775[8], i775[9], 0, i774, 'episode5_2')
  request.r(i775[10], i775[11], 0, i774, '_texCoins')
  request.r(i775[12], i775[13], 0, i774, '_particleSystem')
  return i774
}

Deserializers["Episode4v2"] = function (request, data, root) {
  var i776 = root || request.c( 'Episode4v2' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, '_point1')
  request.r(i777[2], i777[3], 0, i776, '_point2')
  request.r(i777[4], i777[5], 0, i776, '_point3')
  request.r(i777[6], i777[7], 0, i776, '_point4')
  request.r(i777[8], i777[9], 0, i776, '_point5')
  request.r(i777[10], i777[11], 0, i776, '_point6')
  request.r(i777[12], i777[13], 0, i776, '_buttle')
  var i779 = i777[14]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 1, i778, '')
  }
  i776._dragonCards = i778
  var i781 = i777[15]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i776._nonDragonCards = i780
  request.r(i777[16], i777[17], 0, i776, '_armO')
  request.r(i777[18], i777[19], 0, i776, '_armU')
  i776._cardsDragon = i777[20]
  i776._isUpgrade = !!i777[21]
  i776._isButtle = !!i777[22]
  i776._isArm = !!i777[23]
  var i783 = i777[24]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i776._cards = i782
  request.r(i777[25], i777[26], 0, i776, '_card')
  request.r(i777[27], i777[28], 0, i776, '_updateButton')
  request.r(i777[29], i777[30], 0, i776, '_TMony')
  request.r(i777[31], i777[32], 0, i776, '_buttleButton')
  request.r(i777[33], i777[34], 0, i776, '_pointS1')
  request.r(i777[35], i777[36], 0, i776, '_pointS2')
  request.r(i777[37], i777[38], 0, i776, '_pointS3')
  request.r(i777[39], i777[40], 0, i776, '_arm')
  request.r(i777[41], i777[42], 0, i776, '_arm2')
  request.r(i777[43], i777[44], 0, i776, '_cardPointUpgrade')
  request.r(i777[45], i777[46], 0, i776, '_textHealth3')
  request.r(i777[47], i777[48], 0, i776, '_textDamage3')
  request.r(i777[49], i777[50], 0, i776, '_layer')
  request.r(i777[51], i777[52], 0, i776, '_particle')
  request.r(i777[53], i777[54], 0, i776, '_particle2')
  request.r(i777[55], i777[56], 0, i776, '_particleU')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i787 = data
  i786.ambientIntensity = i787[0]
  i786.reflectionIntensity = i787[1]
  i786.ambientMode = i787[2]
  i786.ambientLight = new pc.Color(i787[3], i787[4], i787[5], i787[6])
  i786.ambientSkyColor = new pc.Color(i787[7], i787[8], i787[9], i787[10])
  i786.ambientGroundColor = new pc.Color(i787[11], i787[12], i787[13], i787[14])
  i786.ambientEquatorColor = new pc.Color(i787[15], i787[16], i787[17], i787[18])
  i786.fogColor = new pc.Color(i787[19], i787[20], i787[21], i787[22])
  i786.fogEndDistance = i787[23]
  i786.fogStartDistance = i787[24]
  i786.fogDensity = i787[25]
  i786.fog = !!i787[26]
  request.r(i787[27], i787[28], 0, i786, 'skybox')
  i786.fogMode = i787[29]
  var i789 = i787[30]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i789[i + 0]) );
  }
  i786.lightmaps = i788
  i786.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i787[31], i786.lightProbes)
  i786.lightmapsMode = i787[32]
  i786.mixedBakeMode = i787[33]
  i786.environmentLightingMode = i787[34]
  i786.ambientProbe = new pc.SphericalHarmonicsL2(i787[35])
  i786.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i787[36])
  i786.useReferenceAmbientProbe = !!i787[37]
  request.r(i787[38], i787[39], 0, i786, 'customReflection')
  request.r(i787[40], i787[41], 0, i786, 'defaultReflection')
  i786.defaultReflectionMode = i787[42]
  i786.defaultReflectionResolution = i787[43]
  i786.sunLightObjectId = i787[44]
  i786.pixelLightCount = i787[45]
  i786.defaultReflectionHDR = !!i787[46]
  i786.hasLightDataAsset = !!i787[47]
  i786.hasManualGenerate = !!i787[48]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'lightmapColor')
  request.r(i793[2], i793[3], 0, i792, 'lightmapDirection')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i794 = root || new UnityEngine.LightProbes()
  var i795 = data
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i801 = data
  i800.enabled = !!i801[0]
  i800.type = i801[1]
  i800.color = new pc.Color(i801[2], i801[3], i801[4], i801[5])
  i800.cullingMask = i801[6]
  i800.intensity = i801[7]
  i800.range = i801[8]
  i800.spotAngle = i801[9]
  i800.shadows = i801[10]
  i800.shadowNormalBias = i801[11]
  i800.shadowBias = i801[12]
  i800.shadowStrength = i801[13]
  i800.shadowResolution = i801[14]
  i800.lightmapBakeType = i801[15]
  i800.renderMode = i801[16]
  request.r(i801[17], i801[18], 0, i800, 'cookie')
  i800.cookieSize = i801[19]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i803 = data
  i802.AdditionalLightsPerObjectLimit = i803[0]
  i802.AdditionalLightsRenderingMode = i803[1]
  i802.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i803[2], i802.LightRenderingMode)
  i802.ColorGradingLutSize = i803[3]
  i802.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i803[4], i802.ColorGradingMode)
  i802.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i803[5], i802.MainLightRenderingMode)
  i802.MainLightRenderingModeValue = i803[6]
  i802.SupportsMainLightShadows = !!i803[7]
  i802.MixedLightingSupported = !!i803[8]
  i802.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i803[9], i802.MsaaQuality)
  i802.MSAA = i803[10]
  i802.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i803[11], i802.OpaqueDownsampling)
  i802.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i803[12], i802.MainLightShadowmapResolution)
  i802.MainLightShadowmapResolutionValue = i803[13]
  i802.SupportsSoftShadows = !!i803[14]
  i802.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i803[15], i802.SoftShadowQuality)
  i802.SoftShadowQualityValue = i803[16]
  i802.ShadowDistance = i803[17]
  i802.ShadowCascadeCount = i803[18]
  i802.Cascade2Split = i803[19]
  i802.Cascade3Split = new pc.Vec2( i803[20], i803[21] )
  i802.Cascade4Split = new pc.Vec3( i803[22], i803[23], i803[24] )
  i802.CascadeBorder = i803[25]
  i802.ShadowDepthBias = i803[26]
  i802.ShadowNormalBias = i803[27]
  i802.RenderScale = i803[28]
  i802.RequireDepthTexture = !!i803[29]
  i802.RequireOpaqueTexture = !!i803[30]
  i802.SupportsHDR = !!i803[31]
  i802.SupportsTerrainHoles = !!i803[32]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i805 = data
  i804.Disabled = i805[0]
  i804.PerVertex = i805[1]
  i804.PerPixel = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i807 = data
  i806.LowDynamicRange = i807[0]
  i806.HighDynamicRange = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i809 = data
  i808.Disabled = i809[0]
  i808._2x = i809[1]
  i808._4x = i809[2]
  i808._8x = i809[3]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i811 = data
  i810.None = i811[0]
  i810._2xBilinear = i811[1]
  i810._4xBox = i811[2]
  i810._4xBilinear = i811[3]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i813 = data
  i812._256 = i813[0]
  i812._512 = i813[1]
  i812._1024 = i813[2]
  i812._2048 = i813[3]
  i812._4096 = i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i815 = data
  i814.UsePipelineSettings = i815[0]
  i814.Low = i815[1]
  i814.Medium = i815[2]
  i814.High = i815[3]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i817 = data
  var i819 = i817[0]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i819[i + 0]));
  }
  i816.ShaderCompilationErrors = i818
  i816.name = i817[1]
  i816.guid = i817[2]
  var i821 = i817[3]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i816.shaderDefinedKeywords = i820
  var i823 = i817[4]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i823[i + 0]) );
  }
  i816.passes = i822
  var i825 = i817[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i825[i + 0]) );
  }
  i816.usePasses = i824
  var i827 = i817[6]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i827[i + 0]) );
  }
  i816.defaultParameterValues = i826
  request.r(i817[7], i817[8], 0, i816, 'unityFallbackShader')
  i816.readDepth = !!i817[9]
  i816.isCreatedByShaderGraph = !!i817[10]
  i816.compiled = !!i817[11]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i831 = data
  i830.shaderName = i831[0]
  i830.errorMessage = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i836 = root || new pc.UnityShaderPass()
  var i837 = data
  i836.id = i837[0]
  i836.subShaderIndex = i837[1]
  i836.name = i837[2]
  i836.passType = i837[3]
  i836.grabPassTextureName = i837[4]
  i836.usePass = !!i837[5]
  i836.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[6], i836.zTest)
  i836.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[7], i836.zWrite)
  i836.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[8], i836.culling)
  i836.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i837[9], i836.blending)
  i836.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i837[10], i836.alphaBlending)
  i836.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[11], i836.colorWriteMask)
  i836.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[12], i836.offsetUnits)
  i836.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[13], i836.offsetFactor)
  i836.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[14], i836.stencilRef)
  i836.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[15], i836.stencilReadMask)
  i836.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i837[16], i836.stencilWriteMask)
  i836.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i837[17], i836.stencilOp)
  i836.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i837[18], i836.stencilOpFront)
  i836.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i837[19], i836.stencilOpBack)
  var i839 = i837[20]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i839[i + 0]) );
  }
  i836.tags = i838
  var i841 = i837[21]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i836.passDefinedKeywords = i840
  var i843 = i837[22]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i843[i + 0]) );
  }
  i836.passDefinedKeywordGroups = i842
  var i845 = i837[23]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i845[i + 0]) );
  }
  i836.variants = i844
  var i847 = i837[24]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i847[i + 0]) );
  }
  i836.excludedVariants = i846
  i836.hasDepthReader = !!i837[25]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i849 = data
  i848.val = i849[0]
  i848.name = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i851 = data
  i850.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[0], i850.src)
  i850.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[1], i850.dst)
  i850.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[2], i850.op)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i853 = data
  i852.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[0], i852.pass)
  i852.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[1], i852.fail)
  i852.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[2], i852.zFail)
  i852.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[3], i852.comp)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i857 = data
  i856.name = i857[0]
  i856.value = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i861 = data
  var i863 = i861[0]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( i863[i + 0] );
  }
  i860.keywords = i862
  i860.hasDiscard = !!i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i867 = data
  i866.passId = i867[0]
  i866.subShaderIndex = i867[1]
  var i869 = i867[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i866.keywords = i868
  i866.vertexProgram = i867[3]
  i866.fragmentProgram = i867[4]
  i866.exportedForWebGl2 = !!i867[5]
  i866.readDepth = !!i867[6]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'shader')
  i872.pass = i873[2]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i877 = data
  i876.name = i877[0]
  i876.type = i877[1]
  i876.value = new pc.Vec4( i877[2], i877[3], i877[4], i877[5] )
  i876.textureValue = i877[6]
  i876.shaderPropertyFlag = i877[7]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i879 = data
  i878.name = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'texture')
  i878.aabb = i879[3]
  i878.vertices = i879[4]
  i878.triangles = i879[5]
  i878.textureRect = UnityEngine.Rect.MinMaxRect(i879[6], i879[7], i879[8], i879[9])
  i878.packedRect = UnityEngine.Rect.MinMaxRect(i879[10], i879[11], i879[12], i879[13])
  i878.border = new pc.Vec4( i879[14], i879[15], i879[16], i879[17] )
  i878.transparency = i879[18]
  i878.bounds = i879[19]
  i878.pixelsPerUnit = i879[20]
  i878.textureWidth = i879[21]
  i878.textureHeight = i879[22]
  i878.nativeSize = new pc.Vec2( i879[23], i879[24] )
  i878.pivot = new pc.Vec2( i879[25], i879[26] )
  i878.textureRectOffset = new pc.Vec2( i879[27], i879[28] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i881 = data
  i880.name = i881[0]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i883 = data
  i882.name = i883[0]
  i882.wrapMode = i883[1]
  i882.isLooping = !!i883[2]
  i882.length = i883[3]
  var i885 = i883[4]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i885[i + 0]) );
  }
  i882.curves = i884
  var i887 = i883[5]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i887[i + 0]) );
  }
  i882.events = i886
  i882.halfPrecision = !!i883[6]
  i882._frameRate = i883[7]
  i882.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i883[8], i882.localBounds)
  i882.hasMuscleCurves = !!i883[9]
  var i889 = i883[10]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i882.clipMuscleConstant = i888
  i882.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i883[11], i882.clipBindingConstant)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i893 = data
  i892.path = i893[0]
  i892.hash = i893[1]
  i892.componentType = i893[2]
  i892.property = i893[3]
  i892.keys = i893[4]
  var i895 = i893[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i895[i + 0]) );
  }
  i892.objectReferenceKeys = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i899 = data
  i898.time = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'value')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i903 = data
  i902.functionName = i903[0]
  i902.floatParameter = i903[1]
  i902.intParameter = i903[2]
  i902.stringParameter = i903[3]
  request.r(i903[4], i903[5], 0, i902, 'objectReferenceParameter')
  i902.time = i903[6]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i905 = data
  i904.center = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.extends = new pc.Vec3( i905[3], i905[4], i905[5] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i908.genericBindings = i910
  var i913 = i909[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i908.pptrCurveMapping = i912
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i915 = data
  i914.name = i915[0]
  i914.ascent = i915[1]
  i914.originalLineHeight = i915[2]
  i914.fontSize = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i917[i + 0]) );
  }
  i914.characterInfo = i916
  request.r(i915[5], i915[6], 0, i914, 'texture')
  i914.originalFontSize = i915[7]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i921 = data
  i920.index = i921[0]
  i920.advance = i921[1]
  i920.bearing = i921[2]
  i920.glyphWidth = i921[3]
  i920.glyphHeight = i921[4]
  i920.minX = i921[5]
  i920.maxX = i921[6]
  i920.minY = i921[7]
  i920.maxY = i921[8]
  i920.uvBottomLeftX = i921[9]
  i920.uvBottomLeftY = i921[10]
  i920.uvBottomRightX = i921[11]
  i920.uvBottomRightY = i921[12]
  i920.uvTopLeftX = i921[13]
  i920.uvTopLeftY = i921[14]
  i920.uvTopRightX = i921[15]
  i920.uvTopRightY = i921[16]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i923 = data
  i922.name = i923[0]
  var i925 = i923[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i925[i + 0]) );
  }
  i922.layers = i924
  var i927 = i923[2]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i927[i + 0]) );
  }
  i922.parameters = i926
  i922.animationClips = i923[3]
  i922.avatarUnsupported = i923[4]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i931 = data
  i930.name = i931[0]
  i930.defaultWeight = i931[1]
  i930.blendingMode = i931[2]
  i930.avatarMask = i931[3]
  i930.syncedLayerIndex = i931[4]
  i930.syncedLayerAffectsTiming = !!i931[5]
  i930.syncedLayers = i931[6]
  i930.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i931[7], i930.stateMachine)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i933 = data
  i932.id = i933[0]
  i932.name = i933[1]
  i932.path = i933[2]
  var i935 = i933[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i935[i + 0]) );
  }
  i932.states = i934
  var i937 = i933[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i937[i + 0]) );
  }
  i932.machines = i936
  var i939 = i933[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i939[i + 0]) );
  }
  i932.entryStateTransitions = i938
  var i941 = i933[6]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i941[i + 0]) );
  }
  i932.exitStateTransitions = i940
  var i943 = i933[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i943[i + 0]) );
  }
  i932.anyStateTransitions = i942
  i932.defaultStateId = i933[8]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  i946.cycleOffset = i947[2]
  i946.cycleOffsetParameter = i947[3]
  i946.cycleOffsetParameterActive = !!i947[4]
  i946.mirror = !!i947[5]
  i946.mirrorParameter = i947[6]
  i946.mirrorParameterActive = !!i947[7]
  i946.motionId = i947[8]
  i946.nameHash = i947[9]
  i946.fullPathHash = i947[10]
  i946.speed = i947[11]
  i946.speedParameter = i947[12]
  i946.speedParameterActive = !!i947[13]
  i946.tag = i947[14]
  i946.tagHash = i947[15]
  i946.writeDefaultValues = !!i947[16]
  var i949 = i947[17]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.behaviours = i948
  var i951 = i947[18]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i951[i + 0]) );
  }
  i946.transitions = i950
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i957 = data
  i956.fullPath = i957[0]
  i956.canTransitionToSelf = !!i957[1]
  i956.duration = i957[2]
  i956.exitTime = i957[3]
  i956.hasExitTime = !!i957[4]
  i956.hasFixedDuration = !!i957[5]
  i956.interruptionSource = i957[6]
  i956.offset = i957[7]
  i956.orderedInterruption = !!i957[8]
  i956.destinationStateId = i957[9]
  i956.isExit = !!i957[10]
  i956.mute = !!i957[11]
  i956.solo = !!i957[12]
  var i959 = i957[13]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i959[i + 0]) );
  }
  i956.conditions = i958
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i965 = data
  i964.destinationStateId = i965[0]
  i964.isExit = !!i965[1]
  i964.mute = !!i965[2]
  i964.solo = !!i965[3]
  var i967 = i965[4]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i967[i + 0]) );
  }
  i964.conditions = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i971 = data
  i970.defaultBool = !!i971[0]
  i970.defaultFloat = i971[1]
  i970.defaultInt = i971[2]
  i970.name = i971[3]
  i970.nameHash = i971[4]
  i970.type = i971[5]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i975[i + 0]) );
  }
  i972.files = i974
  i972.componentToPrefabIds = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i979 = data
  i978.path = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'unityObject')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i983[i + 0]) );
  }
  i980.scriptsExecutionOrder = i982
  var i985 = i981[1]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i985[i + 0]) );
  }
  i980.sortingLayers = i984
  var i987 = i981[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i987[i + 0]) );
  }
  i980.cullingLayers = i986
  i980.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i981[3], i980.timeSettings)
  i980.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i981[4], i980.physicsSettings)
  i980.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i981[5], i980.physics2DSettings)
  i980.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i981[6], i980.qualitySettings)
  i980.enableRealtimeShadows = !!i981[7]
  i980.enableAutoInstancing = !!i981[8]
  i980.enableDynamicBatching = !!i981[9]
  i980.lightmapEncodingQuality = i981[10]
  i980.desiredColorSpace = i981[11]
  var i989 = i981[12]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i980.allTags = i988
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i993 = data
  i992.name = i993[0]
  i992.value = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i997 = data
  i996.id = i997[0]
  i996.name = i997[1]
  i996.value = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1003 = data
  i1002.fixedDeltaTime = i1003[0]
  i1002.maximumDeltaTime = i1003[1]
  i1002.timeScale = i1003[2]
  i1002.maximumParticleTimestep = i1003[3]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1005 = data
  i1004.gravity = new pc.Vec3( i1005[0], i1005[1], i1005[2] )
  i1004.defaultSolverIterations = i1005[3]
  i1004.bounceThreshold = i1005[4]
  i1004.autoSyncTransforms = !!i1005[5]
  i1004.autoSimulation = !!i1005[6]
  var i1007 = i1005[7]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1007[i + 0]) );
  }
  i1004.collisionMatrix = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.layerId = i1011[1]
  i1010.otherLayerId = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'material')
  i1012.gravity = new pc.Vec2( i1013[2], i1013[3] )
  i1012.positionIterations = i1013[4]
  i1012.velocityIterations = i1013[5]
  i1012.velocityThreshold = i1013[6]
  i1012.maxLinearCorrection = i1013[7]
  i1012.maxAngularCorrection = i1013[8]
  i1012.maxTranslationSpeed = i1013[9]
  i1012.maxRotationSpeed = i1013[10]
  i1012.baumgarteScale = i1013[11]
  i1012.baumgarteTOIScale = i1013[12]
  i1012.timeToSleep = i1013[13]
  i1012.linearSleepTolerance = i1013[14]
  i1012.angularSleepTolerance = i1013[15]
  i1012.defaultContactOffset = i1013[16]
  i1012.autoSimulation = !!i1013[17]
  i1012.queriesHitTriggers = !!i1013[18]
  i1012.queriesStartInColliders = !!i1013[19]
  i1012.callbacksOnDisable = !!i1013[20]
  i1012.reuseCollisionCallbacks = !!i1013[21]
  i1012.autoSyncTransforms = !!i1013[22]
  var i1015 = i1013[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1015[i + 0]) );
  }
  i1012.collisionMatrix = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.layerId = i1019[1]
  i1018.otherLayerId = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1023[i + 0]) );
  }
  i1020.qualityLevels = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.names = i1024
  i1020.shadows = i1021[2]
  i1020.anisotropicFiltering = i1021[3]
  i1020.antiAliasing = i1021[4]
  i1020.lodBias = i1021[5]
  i1020.shadowCascades = i1021[6]
  i1020.shadowDistance = i1021[7]
  i1020.shadowmaskMode = i1021[8]
  i1020.shadowProjection = i1021[9]
  i1020.shadowResolution = i1021[10]
  i1020.softParticles = !!i1021[11]
  i1020.softVegetation = !!i1021[12]
  i1020.activeColorSpace = i1021[13]
  i1020.desiredColorSpace = i1021[14]
  i1020.masterTextureLimit = i1021[15]
  i1020.maxQueuedFrames = i1021[16]
  i1020.particleRaycastBudget = i1021[17]
  i1020.pixelLightCount = i1021[18]
  i1020.realtimeReflectionProbes = !!i1021[19]
  i1020.shadowCascade2Split = i1021[20]
  i1020.shadowCascade4Split = new pc.Vec3( i1021[21], i1021[22], i1021[23] )
  i1020.streamingMipmapsActive = !!i1021[24]
  i1020.vSyncCount = i1021[25]
  i1020.asyncUploadBufferSize = i1021[26]
  i1020.asyncUploadTimeSlice = i1021[27]
  i1020.billboardsFaceCameraPosition = !!i1021[28]
  i1020.shadowNearPlaneOffset = i1021[29]
  i1020.streamingMipmapsMemoryBudget = i1021[30]
  i1020.maximumLODLevel = i1021[31]
  i1020.streamingMipmapsAddAllCameras = !!i1021[32]
  i1020.streamingMipmapsMaxLevelReduction = i1021[33]
  i1020.streamingMipmapsRenderersPerFrame = i1021[34]
  i1020.resolutionScalingFixedDPIFactor = i1021[35]
  i1020.streamingMipmapsMaxFileIORequests = i1021[36]
  i1020.currentQualityLevel = i1021[37]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1031 = data
  i1030.weight = i1031[0]
  i1030.vertices = i1031[1]
  i1030.normals = i1031[2]
  i1030.tangents = i1031[3]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1035 = data
  i1034.mode = i1035[0]
  i1034.parameter = i1035[1]
  i1034.threshold = i1035[2]
  return i1034
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

Deserializers.buildID = "cfe5cfcb-1de0-4b6c-b1bf-88dbb62fbf10";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

