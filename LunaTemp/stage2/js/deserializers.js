var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointSpring' )
  var i513 = data
  i512.spring = i513[0]
  i512.damper = i513[1]
  i512.targetPosition = i513[2]
  return i512
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointMotor' )
  var i515 = data
  i514.m_TargetVelocity = i515[0]
  i514.m_Force = i515[1]
  i514.m_FreeSpin = i515[2]
  return i514
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointLimits' )
  var i517 = data
  i516.m_Min = i517[0]
  i516.m_Max = i517[1]
  i516.m_Bounciness = i517[2]
  i516.m_BounceMinVelocity = i517[3]
  i516.m_ContactDistance = i517[4]
  i516.minBounce = i517[5]
  i516.maxBounce = i517[6]
  return i516
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointDrive' )
  var i519 = data
  i518.m_PositionSpring = i519[0]
  i518.m_PositionDamper = i519[1]
  i518.m_MaximumForce = i519[2]
  i518.m_UseAcceleration = i519[3]
  return i518
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i521 = data
  i520.m_Spring = i521[0]
  i520.m_Damper = i521[1]
  return i520
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i523 = data
  i522.m_Limit = i523[0]
  i522.m_Bounciness = i523[1]
  i522.m_ContactDistance = i523[2]
  return i522
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i525 = data
  i524.m_ExtremumSlip = i525[0]
  i524.m_ExtremumValue = i525[1]
  i524.m_AsymptoteSlip = i525[2]
  i524.m_AsymptoteValue = i525[3]
  i524.m_Stiffness = i525[4]
  return i524
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i527 = data
  i526.m_LowerAngle = i527[0]
  i526.m_UpperAngle = i527[1]
  return i526
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i529 = data
  i528.m_MotorSpeed = i529[0]
  i528.m_MaximumMotorTorque = i529[1]
  return i528
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i531 = data
  i530.m_DampingRatio = i531[0]
  i530.m_Frequency = i531[1]
  i530.m_Angle = i531[2]
  return i530
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i533 = data
  i532.m_LowerTranslation = i533[0]
  i532.m_UpperTranslation = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i535 = data
  i534.name = i535[0]
  i534.width = i535[1]
  i534.height = i535[2]
  i534.mipmapCount = i535[3]
  i534.anisoLevel = i535[4]
  i534.filterMode = i535[5]
  i534.hdr = !!i535[6]
  i534.format = i535[7]
  i534.wrapMode = i535[8]
  i534.alphaIsTransparency = !!i535[9]
  i534.alphaSource = i535[10]
  i534.graphicsFormat = i535[11]
  i534.sRGBTexture = !!i535[12]
  i534.desiredColorSpace = i535[13]
  i534.wrapU = i535[14]
  i534.wrapV = i535[15]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i537 = data
  i536.pivot = new pc.Vec2( i537[0], i537[1] )
  i536.anchorMin = new pc.Vec2( i537[2], i537[3] )
  i536.anchorMax = new pc.Vec2( i537[4], i537[5] )
  i536.sizeDelta = new pc.Vec2( i537[6], i537[7] )
  i536.anchoredPosition3D = new pc.Vec3( i537[8], i537[9], i537[10] )
  i536.rotation = new pc.Quat(i537[11], i537[12], i537[13], i537[14])
  i536.scale = new pc.Vec3( i537[15], i537[16], i537[17] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i539 = data
  i538.cullTransparentMesh = !!i539[0]
  return i538
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Image' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_Sprite')
  i540.m_Type = i541[2]
  i540.m_PreserveAspect = !!i541[3]
  i540.m_FillCenter = !!i541[4]
  i540.m_FillMethod = i541[5]
  i540.m_FillAmount = i541[6]
  i540.m_FillClockwise = !!i541[7]
  i540.m_FillOrigin = i541[8]
  i540.m_UseSpriteMesh = !!i541[9]
  i540.m_PixelsPerUnitMultiplier = i541[10]
  request.r(i541[11], i541[12], 0, i540, 'm_Material')
  i540.m_Maskable = !!i541[13]
  i540.m_Color = new pc.Color(i541[14], i541[15], i541[16], i541[17])
  i540.m_RaycastTarget = !!i541[18]
  i540.m_RaycastPadding = new pc.Vec4( i541[19], i541[20], i541[21], i541[22] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'animatorController')
  request.r(i543[2], i543[3], 0, i542, 'avatar')
  i542.updateMode = i543[4]
  i542.hasTransformHierarchy = !!i543[5]
  i542.applyRootMotion = !!i543[6]
  var i545 = i543[7]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.humanBones = i544
  i542.enabled = !!i543[8]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i549 = data
  i548.name = i549[0]
  i548.tagId = i549[1]
  i548.enabled = !!i549[2]
  i548.isStatic = !!i549[3]
  i548.layer = i549[4]
  return i548
}

Deserializers["Episode1"] = function (request, data, root) {
  var i550 = root || request.c( 'Episode1' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, '_arm')
  request.r(i551[2], i551[3], 0, i550, '_points')
  request.r(i551[4], i551[5], 0, i550, '_unit')
  request.r(i551[6], i551[7], 0, i550, '_particleSystem')
  request.r(i551[8], i551[9], 0, i550, '_textCoins')
  request.r(i551[10], i551[11], 0, i550, '_textDamage')
  request.r(i551[12], i551[13], 0, i550, '_textHealth')
  request.r(i551[14], i551[15], 0, i550, '_textHealth2')
  request.r(i551[16], i551[17], 0, i550, '_textDamage2')
  i550.scaleDuration = i551[18]
  i550.moveDuration = i551[19]
  i550.targetScale = new pc.Vec3( i551[20], i551[21], i551[22] )
  return i550
}

Deserializers["Card2V"] = function (request, data, root) {
  var i552 = root || request.c( 'Card2V' )
  var i553 = data
  i552._us = !!i553[0]
  request.r(i553[1], i553[2], 0, i552, '_arm')
  request.r(i553[3], i553[4], 0, i552, '_episode')
  i552._dragon = !!i553[5]
  i552._isMainCard = !!i553[6]
  i552.moveDuration = i553[7]
  i552.scaleDuration = i553[8]
  i552.targetScale = new pc.Vec3( i553[9], i553[10], i553[11] )
  return i552
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.Text' )
  var i555 = data
  i554.m_FontData = request.d('UnityEngine.UI.FontData', i555[0], i554.m_FontData)
  i554.m_Text = i555[1]
  request.r(i555[2], i555[3], 0, i554, 'm_Material')
  i554.m_Maskable = !!i555[4]
  i554.m_Color = new pc.Color(i555[5], i555[6], i555[7], i555[8])
  i554.m_RaycastTarget = !!i555[9]
  i554.m_RaycastPadding = new pc.Vec4( i555[10], i555[11], i555[12], i555[13] )
  return i554
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.FontData' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_Font')
  i556.m_FontSize = i557[2]
  i556.m_FontStyle = i557[3]
  i556.m_BestFit = !!i557[4]
  i556.m_MinSize = i557[5]
  i556.m_MaxSize = i557[6]
  i556.m_Alignment = i557[7]
  i556.m_AlignByGeometry = !!i557[8]
  i556.m_RichText = !!i557[9]
  i556.m_HorizontalOverflow = i557[10]
  i556.m_VerticalOverflow = i557[11]
  i556.m_LineSpacing = i557[12]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i559 = data
  i558.position = new pc.Vec3( i559[0], i559[1], i559[2] )
  i558.scale = new pc.Vec3( i559[3], i559[4], i559[5] )
  i558.rotation = new pc.Quat(i559[6], i559[7], i559[8], i559[9])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i561 = data
  i560.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i561[0], i560.main)
  i560.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i561[1], i560.colorBySpeed)
  i560.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i561[2], i560.colorOverLifetime)
  i560.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i561[3], i560.emission)
  i560.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i561[4], i560.rotationBySpeed)
  i560.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i561[5], i560.rotationOverLifetime)
  i560.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i561[6], i560.shape)
  i560.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i561[7], i560.sizeBySpeed)
  i560.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i561[8], i560.sizeOverLifetime)
  i560.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i561[9], i560.textureSheetAnimation)
  i560.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i561[10], i560.velocityOverLifetime)
  i560.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i561[11], i560.noise)
  i560.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i561[12], i560.inheritVelocity)
  i560.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i561[13], i560.forceOverLifetime)
  i560.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i561[14], i560.limitVelocityOverLifetime)
  i560.useAutoRandomSeed = !!i561[15]
  i560.randomSeed = i561[16]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemMain()
  var i563 = data
  i562.duration = i563[0]
  i562.loop = !!i563[1]
  i562.prewarm = !!i563[2]
  i562.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.startDelay)
  i562.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[4], i562.startLifetime)
  i562.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[5], i562.startSpeed)
  i562.startSize3D = !!i563[6]
  i562.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[7], i562.startSizeX)
  i562.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[8], i562.startSizeY)
  i562.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[9], i562.startSizeZ)
  i562.startRotation3D = !!i563[10]
  i562.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[11], i562.startRotationX)
  i562.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[12], i562.startRotationY)
  i562.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[13], i562.startRotationZ)
  i562.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i563[14], i562.startColor)
  i562.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[15], i562.gravityModifier)
  i562.simulationSpace = i563[16]
  request.r(i563[17], i563[18], 0, i562, 'customSimulationSpace')
  i562.simulationSpeed = i563[19]
  i562.useUnscaledTime = !!i563[20]
  i562.scalingMode = i563[21]
  i562.playOnAwake = !!i563[22]
  i562.maxParticles = i563[23]
  i562.emitterVelocityMode = i563[24]
  i562.stopAction = i563[25]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i564 = root || new pc.MinMaxCurve()
  var i565 = data
  i564.mode = i565[0]
  i564.curveMin = new pc.AnimationCurve( { keys_flow: i565[1] } )
  i564.curveMax = new pc.AnimationCurve( { keys_flow: i565[2] } )
  i564.curveMultiplier = i565[3]
  i564.constantMin = i565[4]
  i564.constantMax = i565[5]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i566 = root || new pc.MinMaxGradient()
  var i567 = data
  i566.mode = i567[0]
  i566.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i567[1], i566.gradientMin)
  i566.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i567[2], i566.gradientMax)
  i566.colorMin = new pc.Color(i567[3], i567[4], i567[5], i567[6])
  i566.colorMax = new pc.Color(i567[7], i567[8], i567[9], i567[10])
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i569 = data
  i568.mode = i569[0]
  var i571 = i569[1]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i571[i + 0]) );
  }
  i568.colorKeys = i570
  var i573 = i569[2]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i573[i + 0]) );
  }
  i568.alphaKeys = i572
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemColorBySpeed()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i575[1], i574.color)
  i574.range = new pc.Vec2( i575[2], i575[3] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i579 = data
  i578.color = new pc.Color(i579[0], i579[1], i579[2], i579[3])
  i578.time = i579[4]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i583 = data
  i582.alpha = i583[0]
  i582.time = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemColorOverLifetime()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i585[1], i584.color)
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemEmitter()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.rateOverTime)
  i586.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.rateOverDistance)
  var i589 = i587[3]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i589[i + 0]) );
  }
  i586.bursts = i588
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemBurst()
  var i593 = data
  i592.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[0], i592.count)
  i592.cycleCount = i593[1]
  i592.minCount = i593[2]
  i592.maxCount = i593[3]
  i592.repeatInterval = i593[4]
  i592.time = i593[5]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemRotationBySpeed()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.separateAxes = !!i595[4]
  i594.range = new pc.Vec2( i595[5], i595[6] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemRotationOverLifetime()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[1], i596.x)
  i596.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.y)
  i596.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.z)
  i596.separateAxes = !!i597[4]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemShape()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.shapeType = i599[1]
  i598.randomDirectionAmount = i599[2]
  i598.sphericalDirectionAmount = i599[3]
  i598.randomPositionAmount = i599[4]
  i598.alignToDirection = !!i599[5]
  i598.radius = i599[6]
  i598.radiusMode = i599[7]
  i598.radiusSpread = i599[8]
  i598.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[9], i598.radiusSpeed)
  i598.radiusThickness = i599[10]
  i598.angle = i599[11]
  i598.length = i599[12]
  i598.boxThickness = new pc.Vec3( i599[13], i599[14], i599[15] )
  i598.meshShapeType = i599[16]
  request.r(i599[17], i599[18], 0, i598, 'mesh')
  request.r(i599[19], i599[20], 0, i598, 'meshRenderer')
  request.r(i599[21], i599[22], 0, i598, 'skinnedMeshRenderer')
  i598.useMeshMaterialIndex = !!i599[23]
  i598.meshMaterialIndex = i599[24]
  i598.useMeshColors = !!i599[25]
  i598.normalOffset = i599[26]
  i598.arc = i599[27]
  i598.arcMode = i599[28]
  i598.arcSpread = i599[29]
  i598.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[30], i598.arcSpeed)
  i598.donutRadius = i599[31]
  i598.position = new pc.Vec3( i599[32], i599[33], i599[34] )
  i598.rotation = new pc.Vec3( i599[35], i599[36], i599[37] )
  i598.scale = new pc.Vec3( i599[38], i599[39], i599[40] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemSizeBySpeed()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[1], i600.x)
  i600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.y)
  i600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.z)
  i600.separateAxes = !!i601[4]
  i600.range = new pc.Vec2( i601[5], i601[6] )
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemSizeOverLifetime()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[1], i602.x)
  i602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.y)
  i602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.z)
  i602.separateAxes = !!i603[4]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.mode = i605[1]
  i604.animation = i605[2]
  i604.numTilesX = i605[3]
  i604.numTilesY = i605[4]
  i604.useRandomRow = !!i605[5]
  i604.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[6], i604.frameOverTime)
  i604.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[7], i604.startFrame)
  i604.cycleCount = i605[8]
  i604.rowIndex = i605[9]
  i604.flipU = i605[10]
  i604.flipV = i605[11]
  i604.spriteCount = i605[12]
  var i607 = i605[13]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.sprites = i606
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[1], i610.x)
  i610.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[2], i610.y)
  i610.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[3], i610.z)
  i610.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[4], i610.radial)
  i610.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[5], i610.speedModifier)
  i610.space = i611[6]
  i610.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[7], i610.orbitalX)
  i610.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[8], i610.orbitalY)
  i610.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[9], i610.orbitalZ)
  i610.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[10], i610.orbitalOffsetX)
  i610.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[11], i610.orbitalOffsetY)
  i610.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[12], i610.orbitalOffsetZ)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemNoise()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.separateAxes = !!i613[1]
  i612.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[2], i612.strengthX)
  i612.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[3], i612.strengthY)
  i612.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[4], i612.strengthZ)
  i612.frequency = i613[5]
  i612.damping = !!i613[6]
  i612.octaveCount = i613[7]
  i612.octaveMultiplier = i613[8]
  i612.octaveScale = i613[9]
  i612.quality = i613[10]
  i612.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[11], i612.scrollSpeed)
  i612.scrollSpeedMultiplier = i613[12]
  i612.remapEnabled = !!i613[13]
  i612.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[14], i612.remapX)
  i612.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[15], i612.remapY)
  i612.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[16], i612.remapZ)
  i612.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[17], i612.positionAmount)
  i612.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[18], i612.rotationAmount)
  i612.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[19], i612.sizeAmount)
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemInheritVelocity()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.mode = i615[1]
  i614.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.curve)
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemForceOverLifetime()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[1], i616.x)
  i616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[2], i616.y)
  i616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[3], i616.z)
  i616.space = i617[4]
  i616.randomized = !!i617[5]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[1], i618.limit)
  i618.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[2], i618.limitX)
  i618.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[3], i618.limitY)
  i618.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[4], i618.limitZ)
  i618.dampen = i619[5]
  i618.separateAxes = !!i619[6]
  i618.space = i619[7]
  i618.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[8], i618.drag)
  i618.multiplyDragByParticleSize = !!i619[9]
  i618.multiplyDragByParticleVelocity = !!i619[10]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i621 = data
  i620.enabled = !!i621[0]
  request.r(i621[1], i621[2], 0, i620, 'sharedMaterial')
  var i623 = i621[3]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.sharedMaterials = i622
  i620.receiveShadows = !!i621[4]
  i620.shadowCastingMode = i621[5]
  i620.sortingLayerID = i621[6]
  i620.sortingOrder = i621[7]
  i620.lightmapIndex = i621[8]
  i620.lightmapSceneIndex = i621[9]
  i620.lightmapScaleOffset = new pc.Vec4( i621[10], i621[11], i621[12], i621[13] )
  i620.lightProbeUsage = i621[14]
  i620.reflectionProbeUsage = i621[15]
  request.r(i621[16], i621[17], 0, i620, 'mesh')
  i620.meshCount = i621[18]
  i620.activeVertexStreamsCount = i621[19]
  i620.alignment = i621[20]
  i620.renderMode = i621[21]
  i620.sortMode = i621[22]
  i620.lengthScale = i621[23]
  i620.velocityScale = i621[24]
  i620.cameraVelocityScale = i621[25]
  i620.normalDirection = i621[26]
  i620.sortingFudge = i621[27]
  i620.minParticleSize = i621[28]
  i620.maxParticleSize = i621[29]
  i620.pivot = new pc.Vec3( i621[30], i621[31], i621[32] )
  request.r(i621[33], i621[34], 0, i620, 'trailMaterial')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'clip')
  request.r(i627[2], i627[3], 0, i626, 'outputAudioMixerGroup')
  i626.playOnAwake = !!i627[4]
  i626.loop = !!i627[5]
  i626.time = i627[6]
  i626.volume = i627[7]
  i626.pitch = i627[8]
  i626.enabled = !!i627[9]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i628 = root || new pc.UnityMaterial()
  var i629 = data
  i628.name = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'shader')
  i628.renderQueue = i629[3]
  i628.enableInstancing = !!i629[4]
  var i631 = i629[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i631[i + 0]) );
  }
  i628.floatParameters = i630
  var i633 = i629[6]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i633[i + 0]) );
  }
  i628.colorParameters = i632
  var i635 = i629[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i635[i + 0]) );
  }
  i628.vectorParameters = i634
  var i637 = i629[8]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i637[i + 0]) );
  }
  i628.textureParameters = i636
  var i639 = i629[9]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i639[i + 0]) );
  }
  i628.materialFlags = i638
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Color(i647[1], i647[2], i647[3], i647[4])
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = new pc.Vec4( i651[1], i651[2], i651[3], i651[4] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i655 = data
  i654.name = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'value')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i659 = data
  i658.name = i659[0]
  i658.enabled = !!i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i661 = data
  i660.name = i661[0]
  i660.halfPrecision = !!i661[1]
  i660.useUInt32IndexFormat = !!i661[2]
  i660.vertexCount = i661[3]
  i660.aabb = i661[4]
  var i663 = i661[5]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( !!i663[i + 0] );
  }
  i660.streams = i662
  i660.vertices = i661[6]
  var i665 = i661[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i665[i + 0]) );
  }
  i660.subMeshes = i664
  var i667 = i661[8]
  var i666 = []
  for(var i = 0; i < i667.length; i += 16) {
    i666.push( new pc.Mat4().setData(i667[i + 0], i667[i + 1], i667[i + 2], i667[i + 3],  i667[i + 4], i667[i + 5], i667[i + 6], i667[i + 7],  i667[i + 8], i667[i + 9], i667[i + 10], i667[i + 11],  i667[i + 12], i667[i + 13], i667[i + 14], i667[i + 15]) );
  }
  i660.bindposes = i666
  var i669 = i661[9]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i669[i + 0]) );
  }
  i660.blendShapes = i668
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i675 = data
  i674.triangles = i675[0]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i681 = data
  i680.name = i681[0]
  var i683 = i681[1]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i683[i + 0]) );
  }
  i680.frames = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i685 = data
  i684.m_Alpha = i685[0]
  i684.m_Interactable = !!i685[1]
  i684.m_BlocksRaycasts = !!i685[2]
  i684.m_IgnoreParentGroups = !!i685[3]
  i684.enabled = !!i685[4]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i687 = data
  i686.name = i687[0]
  i686.index = i687[1]
  i686.startup = !!i687[2]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.aspect = i689[1]
  i688.orthographic = !!i689[2]
  i688.orthographicSize = i689[3]
  i688.backgroundColor = new pc.Color(i689[4], i689[5], i689[6], i689[7])
  i688.nearClipPlane = i689[8]
  i688.farClipPlane = i689[9]
  i688.fieldOfView = i689[10]
  i688.depth = i689[11]
  i688.clearFlags = i689[12]
  i688.cullingMask = i689[13]
  i688.rect = i689[14]
  request.r(i689[15], i689[16], 0, i688, 'targetTexture')
  i688.usePhysicalProperties = !!i689[17]
  i688.focalLength = i689[18]
  i688.sensorSize = new pc.Vec2( i689[19], i689[20] )
  i688.lensShift = new pc.Vec2( i689[21], i689[22] )
  i688.gateFit = i689[23]
  i688.commandBufferCount = i689[24]
  i688.cameraType = i689[25]
  return i688
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i691 = data
  i690.m_RenderShadows = !!i691[0]
  i690.m_RequiresDepthTextureOption = i691[1]
  i690.m_RequiresOpaqueTextureOption = i691[2]
  i690.m_CameraType = i691[3]
  var i693 = i691[4]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i690.m_Cameras = i692
  i690.m_RendererIndex = i691[5]
  i690.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i691[6] )
  request.r(i691[7], i691[8], 0, i690, 'm_VolumeTrigger')
  i690.m_VolumeFrameworkUpdateModeOption = i691[9]
  i690.m_RenderPostProcessing = !!i691[10]
  i690.m_Antialiasing = i691[11]
  i690.m_AntialiasingQuality = i691[12]
  i690.m_StopNaN = !!i691[13]
  i690.m_Dithering = !!i691[14]
  i690.m_ClearDepth = !!i691[15]
  i690.m_AllowXRRendering = !!i691[16]
  i690.m_AllowHDROutput = !!i691[17]
  i690.m_UseScreenCoordOverride = !!i691[18]
  i690.m_ScreenSizeOverride = new pc.Vec4( i691[19], i691[20], i691[21], i691[22] )
  i690.m_ScreenCoordScaleBias = new pc.Vec4( i691[23], i691[24], i691[25], i691[26] )
  i690.m_RequiresDepthTexture = !!i691[27]
  i690.m_RequiresColorTexture = !!i691[28]
  i690.m_Version = i691[29]
  i690.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i691[30], i690.m_TaaSettings)
  return i690
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i697 = data
  i696.m_Quality = i697[0]
  i696.m_FrameInfluence = i697[1]
  i696.m_JitterScale = i697[2]
  i696.m_MipBias = i697[3]
  i696.m_VarianceClampScale = i697[4]
  i696.m_ContrastAdaptiveSharpening = i697[5]
  return i696
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i698 = root || request.c( 'ParticleFollowUI' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, '_buttonButtle')
  request.r(i699[2], i699[3], 0, i698, '_buttonShop')
  request.r(i699[4], i699[5], 0, i698, 'uiCamera')
  request.r(i699[6], i699[7], 0, i698, '_particleEffectButton')
  request.r(i699[8], i699[9], 0, i698, '_particleEffectButtonShop')
  i698.zOffset = i699[10]
  return i698
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i701 = data
  i700.m_ComponentVersion = i701[0]
  i700.m_LightType = i701[1]
  i700.m_BlendStyleIndex = i701[2]
  i700.m_FalloffIntensity = i701[3]
  i700.m_Color = new pc.Color(i701[4], i701[5], i701[6], i701[7])
  i700.m_Intensity = i701[8]
  i700.m_LightVolumeIntensity = i701[9]
  i700.m_LightVolumeIntensityEnabled = !!i701[10]
  i700.m_ApplyToSortingLayers = i701[11]
  request.r(i701[12], i701[13], 0, i700, 'm_LightCookieSprite')
  request.r(i701[14], i701[15], 0, i700, 'm_DeprecatedPointLightCookieSprite')
  i700.m_LightOrder = i701[16]
  i700.m_AlphaBlendOnOverlap = !!i701[17]
  i700.m_OverlapOperation = i701[18]
  i700.m_NormalMapDistance = i701[19]
  i700.m_NormalMapQuality = i701[20]
  i700.m_UseNormalMap = !!i701[21]
  i700.m_ShadowIntensityEnabled = !!i701[22]
  i700.m_ShadowIntensity = i701[23]
  i700.m_ShadowVolumeIntensityEnabled = !!i701[24]
  i700.m_ShadowVolumeIntensity = i701[25]
  i700.m_PointLightInnerAngle = i701[26]
  i700.m_PointLightOuterAngle = i701[27]
  i700.m_PointLightInnerRadius = i701[28]
  i700.m_PointLightOuterRadius = i701[29]
  i700.m_ShapeLightParametricSides = i701[30]
  i700.m_ShapeLightParametricAngleOffset = i701[31]
  i700.m_ShapeLightParametricRadius = i701[32]
  i700.m_ShapeLightFalloffSize = i701[33]
  i700.m_ShapeLightFalloffOffset = new pc.Vec2( i701[34], i701[35] )
  var i703 = i701[36]
  var i702 = []
  for(var i = 0; i < i703.length; i += 3) {
    i702.push( new pc.Vec3( i703[i + 0], i703[i + 1], i703[i + 2] ) );
  }
  i700.m_ShapePath = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.planeDistance = i707[1]
  i706.referencePixelsPerUnit = i707[2]
  i706.isFallbackOverlay = !!i707[3]
  i706.renderMode = i707[4]
  i706.renderOrder = i707[5]
  i706.sortingLayerName = i707[6]
  i706.sortingOrder = i707[7]
  i706.scaleFactor = i707[8]
  request.r(i707[9], i707[10], 0, i706, 'worldCamera')
  i706.overrideSorting = !!i707[11]
  i706.pixelPerfect = !!i707[12]
  i706.targetDisplay = i707[13]
  i706.overridePixelPerfect = !!i707[14]
  return i706
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i709 = data
  i708.m_UiScaleMode = i709[0]
  i708.m_ReferencePixelsPerUnit = i709[1]
  i708.m_ScaleFactor = i709[2]
  i708.m_ReferenceResolution = new pc.Vec2( i709[3], i709[4] )
  i708.m_ScreenMatchMode = i709[5]
  i708.m_MatchWidthOrHeight = i709[6]
  i708.m_PhysicalUnit = i709[7]
  i708.m_FallbackScreenDPI = i709[8]
  i708.m_DefaultSpriteDPI = i709[9]
  i708.m_DynamicPixelsPerUnit = i709[10]
  i708.m_PresetInfoIsWorld = !!i709[11]
  return i708
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i711 = data
  i710.m_IgnoreReversedGraphics = !!i711[0]
  i710.m_BlockingObjects = i711[1]
  i710.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i711[2] )
  return i710
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i712 = root || request.c( 'ClickCta' )
  var i713 = data
  return i712
}

Deserializers["Point"] = function (request, data, root) {
  var i714 = root || request.c( 'Point' )
  var i715 = data
  i714._occupied = !!i715[0]
  return i714
}

Deserializers["Episode6"] = function (request, data, root) {
  var i716 = root || request.c( 'Episode6' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, '_arm')
  request.r(i717[2], i717[3], 0, i716, '_points')
  request.r(i717[4], i717[5], 0, i716, '_cart')
  request.r(i717[6], i717[7], 0, i716, '_cartPoint')
  request.r(i717[8], i717[9], 0, i716, '_coinsText')
  request.r(i717[10], i717[11], 0, i716, '_textDamage')
  request.r(i717[12], i717[13], 0, i716, '_textHealth')
  request.r(i717[14], i717[15], 0, i716, '_textHealth2')
  request.r(i717[16], i717[17], 0, i716, '_textDamage2')
  i716.scaleDuration = i717[18]
  i716.moveDuration = i717[19]
  i716.targetScale = new pc.Vec3( i717[20], i717[21], i717[22] )
  request.r(i717[23], i717[24], 0, i716, '_particleDragon')
  request.r(i717[25], i717[26], 0, i716, '_particleCards')
  return i716
}

Deserializers["Episode2"] = function (request, data, root) {
  var i718 = root || request.c( 'Episode2' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, '_arm')
  request.r(i719[2], i719[3], 0, i718, '_points')
  request.r(i719[4], i719[5], 0, i718, '_unit1')
  request.r(i719[6], i719[7], 0, i718, '_unit2')
  request.r(i719[8], i719[9], 0, i718, '_particleSystem1')
  request.r(i719[10], i719[11], 0, i718, '_particleSystem2')
  request.r(i719[12], i719[13], 0, i718, '_textCoins')
  request.r(i719[14], i719[15], 0, i718, '_textDamage')
  request.r(i719[16], i719[17], 0, i718, '_textHealth')
  request.r(i719[18], i719[19], 0, i718, '_textHealth2')
  request.r(i719[20], i719[21], 0, i718, '_textDamage2')
  i718.scaleDuration = i719[22]
  i718.moveDuration = i719[23]
  i718.targetScale = new pc.Vec3( i719[24], i719[25], i719[26] )
  return i718
}

Deserializers["Episode5"] = function (request, data, root) {
  var i720 = root || request.c( 'Episode5' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, '_card1_1_2')
  request.r(i721[2], i721[3], 0, i720, '_card1_2_2')
  request.r(i721[4], i721[5], 0, i720, '_card1_3_2')
  request.r(i721[6], i721[7], 0, i720, '_card1_1')
  request.r(i721[8], i721[9], 0, i720, '_card2_1')
  request.r(i721[10], i721[11], 0, i720, '_coinsText')
  request.r(i721[12], i721[13], 0, i720, '_particleSystem')
  return i720
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i722 = root || request.c( 'Episode4_1' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, '_cart1__2')
  request.r(i723[2], i723[3], 0, i722, '_cart2__2')
  request.r(i723[4], i723[5], 0, i722, '_cart3__2')
  request.r(i723[6], i723[7], 0, i722, '_cart1_1')
  request.r(i723[8], i723[9], 0, i722, '_cart2_1')
  request.r(i723[10], i723[11], 0, i722, '_cart3_1')
  request.r(i723[12], i723[13], 0, i722, '_arm')
  request.r(i723[14], i723[15], 0, i722, '_coinText')
  request.r(i723[16], i723[17], 0, i722, '_particleSystem')
  request.r(i723[18], i723[19], 0, i722, '_particleDragon')
  return i722
}

Deserializers["UpdateButton"] = function (request, data, root) {
  var i724 = root || request.c( 'UpdateButton' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_episode')
  request.r(i725[2], i725[3], 0, i724, '_arm')
  return i724
}

Deserializers["Episode3"] = function (request, data, root) {
  var i726 = root || request.c( 'Episode3' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_battle')
  request.r(i727[2], i727[3], 0, i726, '_button')
  request.r(i727[4], i727[5], 0, i726, '_cardDracone')
  request.r(i727[6], i727[7], 0, i726, '_point')
  request.r(i727[8], i727[9], 0, i726, '_cardEnemye1')
  request.r(i727[10], i727[11], 0, i726, '_cardEnemye2')
  request.r(i727[12], i727[13], 0, i726, '_cardEnemye3')
  request.r(i727[14], i727[15], 0, i726, '_cardDragon1')
  request.r(i727[16], i727[17], 0, i726, '_cardDragon2')
  request.r(i727[18], i727[19], 0, i726, '_cardDragon3')
  request.r(i727[20], i727[21], 0, i726, '_particleSystem1')
  request.r(i727[22], i727[23], 0, i726, '_particleSystem2')
  request.r(i727[24], i727[25], 0, i726, '_particleSystem3')
  request.r(i727[26], i727[27], 0, i726, '_particleButton')
  request.r(i727[28], i727[29], 0, i726, '_textCoins')
  request.r(i727[30], i727[31], 0, i726, '_winVictoty')
  request.r(i727[32], i727[33], 0, i726, '_winInscription')
  request.r(i727[34], i727[35], 0, i726, '_winInscription2')
  request.r(i727[36], i727[37], 0, i726, '_winInscription3')
  request.r(i727[38], i727[39], 0, i726, '_parentsDisplay')
  request.r(i727[40], i727[41], 0, i726, '_cardL')
  return i726
}

Deserializers["Episode7"] = function (request, data, root) {
  var i728 = root || request.c( 'Episode7' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '_battle')
  request.r(i729[2], i729[3], 0, i728, '_button')
  request.r(i729[4], i729[5], 0, i728, '_cardEnemye1')
  request.r(i729[6], i729[7], 0, i728, '_cardEnemye2')
  request.r(i729[8], i729[9], 0, i728, '_cardEnemye3')
  request.r(i729[10], i729[11], 0, i728, '_cardEnemye4')
  request.r(i729[12], i729[13], 0, i728, '_cardEnemye5')
  request.r(i729[14], i729[15], 0, i728, '_cardEnemye6')
  request.r(i729[16], i729[17], 0, i728, '_cardDragon1')
  request.r(i729[18], i729[19], 0, i728, '_cardDragon2')
  request.r(i729[20], i729[21], 0, i728, '_cardDragon3')
  request.r(i729[22], i729[23], 0, i728, '_particleSystem1')
  request.r(i729[24], i729[25], 0, i728, '_particleSystem2')
  request.r(i729[26], i729[27], 0, i728, '_particleSystem3')
  request.r(i729[28], i729[29], 0, i728, '_particleSystem4')
  request.r(i729[30], i729[31], 0, i728, '_particleSystem5')
  request.r(i729[32], i729[33], 0, i728, '_particleSystem6')
  request.r(i729[34], i729[35], 0, i728, '_winVictoty')
  request.r(i729[36], i729[37], 0, i728, '_winFinal')
  request.r(i729[38], i729[39], 0, i728, '_particleSystem')
  request.r(i729[40], i729[41], 0, i728, '_particleDragon')
  request.r(i729[42], i729[43], 0, i728, '_episode3')
  return i728
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i730 = root || request.c( 'Episode4_2' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, '_battle')
  request.r(i731[2], i731[3], 0, i730, '_button')
  request.r(i731[4], i731[5], 0, i730, '_cardEnemye1')
  request.r(i731[6], i731[7], 0, i730, '_cardEnemye2')
  request.r(i731[8], i731[9], 0, i730, '_cardEnemye3')
  request.r(i731[10], i731[11], 0, i730, '_cardDracone1')
  request.r(i731[12], i731[13], 0, i730, '_cardDracone2')
  request.r(i731[14], i731[15], 0, i730, '_cardDracone3')
  request.r(i731[16], i731[17], 0, i730, '_winDefeat')
  request.r(i731[18], i731[19], 0, i730, '_winFinal')
  request.r(i731[20], i731[21], 0, i730, '_particleSystem1')
  request.r(i731[22], i731[23], 0, i730, '_particleSystem2')
  request.r(i731[24], i731[25], 0, i730, '_particleSystem3')
  request.r(i731[26], i731[27], 0, i730, '_particleSystem4')
  request.r(i731[28], i731[29], 0, i730, '_particleSystem5')
  request.r(i731[30], i731[31], 0, i730, '_particleSystem6')
  request.r(i731[32], i731[33], 0, i730, '_particleSystem7')
  request.r(i731[34], i731[35], 0, i730, '_particleSystem8')
  request.r(i731[36], i731[37], 0, i730, '_particleSystem9')
  request.r(i731[38], i731[39], 0, i730, '_particleButtun')
  request.r(i731[40], i731[41], 0, i730, '_particleDragon')
  request.r(i731[42], i731[43], 0, i730, '_layer')
  request.r(i731[44], i731[45], 0, i730, '_winInscription')
  request.r(i731[46], i731[47], 0, i730, '_winInscription2')
  request.r(i731[48], i731[49], 0, i730, '_winInscription3')
  return i730
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i732 = root || request.c( 'Episode5_2' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_battle')
  request.r(i733[2], i733[3], 0, i732, '_button')
  request.r(i733[4], i733[5], 0, i732, '_cardEnemye1')
  request.r(i733[6], i733[7], 0, i732, '_cardEnemye2')
  request.r(i733[8], i733[9], 0, i732, '_cardEnemye3')
  request.r(i733[10], i733[11], 0, i732, '_cardDracone1')
  request.r(i733[12], i733[13], 0, i732, '_cardDracone2')
  request.r(i733[14], i733[15], 0, i732, '_cardDracone3')
  request.r(i733[16], i733[17], 0, i732, '_cardDracone4')
  request.r(i733[18], i733[19], 0, i732, '_winDefeat')
  request.r(i733[20], i733[21], 0, i732, '_winFinal')
  request.r(i733[22], i733[23], 0, i732, '_particleSystem1')
  request.r(i733[24], i733[25], 0, i732, '_particleSystem2')
  request.r(i733[26], i733[27], 0, i732, '_particleSystem3')
  request.r(i733[28], i733[29], 0, i732, '_particleSystem4')
  request.r(i733[30], i733[31], 0, i732, '_particleSystem5')
  request.r(i733[32], i733[33], 0, i732, '_particleSystem6')
  request.r(i733[34], i733[35], 0, i732, '_particleSystem7')
  request.r(i733[36], i733[37], 0, i732, '_particleSystem')
  request.r(i733[38], i733[39], 0, i732, '_layer')
  request.r(i733[40], i733[41], 0, i732, '_winInscription')
  request.r(i733[42], i733[43], 0, i732, '_winInscription2')
  request.r(i733[44], i733[45], 0, i732, '_winInscription3')
  return i732
}

Deserializers["Buttle"] = function (request, data, root) {
  var i734 = root || request.c( 'Buttle' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, '_episode')
  request.r(i735[2], i735[3], 0, i734, '_buttonShop')
  request.r(i735[4], i735[5], 0, i734, '_buttonButtle')
  request.r(i735[6], i735[7], 0, i734, '_episode7')
  request.r(i735[8], i735[9], 0, i734, '_episode4_2')
  return i734
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i736 = root || request.c( 'ArmAnimation' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, '_targetButton')
  i736.flyDuration = i737[2]
  i736.shrinkDuration = i737[3]
  i736.restoreDuration = i737[4]
  return i736
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Button' )
  var i739 = data
  i738.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i739[0], i738.m_OnClick)
  i738.m_Navigation = request.d('UnityEngine.UI.Navigation', i739[1], i738.m_Navigation)
  i738.m_Transition = i739[2]
  i738.m_Colors = request.d('UnityEngine.UI.ColorBlock', i739[3], i738.m_Colors)
  i738.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i739[4], i738.m_SpriteState)
  i738.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i739[5], i738.m_AnimationTriggers)
  i738.m_Interactable = !!i739[6]
  request.r(i739[7], i739[8], 0, i738, 'm_TargetGraphic')
  return i738
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i741 = data
  i740.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i741[0], i740.m_PersistentCalls)
  return i740
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('UnityEngine.Events.PersistentCall', i745[i + 0]));
  }
  i742.m_Calls = i744
  return i742
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Target')
  i748.m_TargetAssemblyTypeName = i749[2]
  i748.m_MethodName = i749[3]
  i748.m_Mode = i749[4]
  i748.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i749[5], i748.m_Arguments)
  i748.m_CallState = i749[6]
  return i748
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_ObjectArgument')
  i750.m_ObjectArgumentAssemblyTypeName = i751[2]
  i750.m_IntArgument = i751[3]
  i750.m_FloatArgument = i751[4]
  i750.m_StringArgument = i751[5]
  i750.m_BoolArgument = !!i751[6]
  return i750
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i753 = data
  i752.m_Mode = i753[0]
  i752.m_WrapAround = !!i753[1]
  request.r(i753[2], i753[3], 0, i752, 'm_SelectOnUp')
  request.r(i753[4], i753[5], 0, i752, 'm_SelectOnDown')
  request.r(i753[6], i753[7], 0, i752, 'm_SelectOnLeft')
  request.r(i753[8], i753[9], 0, i752, 'm_SelectOnRight')
  return i752
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i755 = data
  i754.m_NormalColor = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  i754.m_HighlightedColor = new pc.Color(i755[4], i755[5], i755[6], i755[7])
  i754.m_PressedColor = new pc.Color(i755[8], i755[9], i755[10], i755[11])
  i754.m_SelectedColor = new pc.Color(i755[12], i755[13], i755[14], i755[15])
  i754.m_DisabledColor = new pc.Color(i755[16], i755[17], i755[18], i755[19])
  i754.m_ColorMultiplier = i755[20]
  i754.m_FadeDuration = i755[21]
  return i754
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_HighlightedSprite')
  request.r(i757[2], i757[3], 0, i756, 'm_PressedSprite')
  request.r(i757[4], i757[5], 0, i756, 'm_SelectedSprite')
  request.r(i757[6], i757[7], 0, i756, 'm_DisabledSprite')
  return i756
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i759 = data
  i758.m_NormalTrigger = i759[0]
  i758.m_HighlightedTrigger = i759[1]
  i758.m_PressedTrigger = i759[2]
  i758.m_SelectedTrigger = i759[3]
  i758.m_DisabledTrigger = i759[4]
  return i758
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_FirstSelected')
  i760.m_sendNavigationEvents = !!i761[2]
  i760.m_DragThreshold = i761[3]
  return i760
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i763 = data
  i762.m_HorizontalAxis = i763[0]
  i762.m_VerticalAxis = i763[1]
  i762.m_SubmitButton = i763[2]
  i762.m_CancelButton = i763[3]
  i762.m_InputActionsPerSecond = i763[4]
  i762.m_RepeatDelay = i763[5]
  i762.m_ForceModuleActive = !!i763[6]
  i762.m_SendPointerHoverToParent = !!i763[7]
  return i762
}

Deserializers["Scenario"] = function (request, data, root) {
  var i764 = root || request.c( 'Scenario' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, '_episode1')
  request.r(i765[2], i765[3], 0, i764, '_episode2')
  request.r(i765[4], i765[5], 0, i764, '_episode3')
  request.r(i765[6], i765[7], 0, i764, '_episode4v2')
  return i764
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i766 = root || request.c( 'Episode5_1' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, '_card1')
  request.r(i767[2], i767[3], 0, i766, '_card2')
  request.r(i767[4], i767[5], 0, i766, '_episode5')
  request.r(i767[6], i767[7], 0, i766, 'episode4_1')
  request.r(i767[8], i767[9], 0, i766, 'episode5_2')
  request.r(i767[10], i767[11], 0, i766, '_texCoins')
  request.r(i767[12], i767[13], 0, i766, '_particleSystem')
  return i766
}

Deserializers["Episode4v2"] = function (request, data, root) {
  var i768 = root || request.c( 'Episode4v2' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_point1')
  request.r(i769[2], i769[3], 0, i768, '_point2')
  request.r(i769[4], i769[5], 0, i768, '_point3')
  request.r(i769[6], i769[7], 0, i768, '_point4')
  request.r(i769[8], i769[9], 0, i768, '_point5')
  request.r(i769[10], i769[11], 0, i768, '_point6')
  request.r(i769[12], i769[13], 0, i768, '_buttle')
  var i771 = i769[14]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i768._dragonCards = i770
  var i773 = i769[15]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i768._nonDragonCards = i772
  request.r(i769[16], i769[17], 0, i768, '_armO')
  request.r(i769[18], i769[19], 0, i768, '_armU')
  i768._cardsDragon = i769[20]
  i768._isUpgrade = !!i769[21]
  i768._isButtle = !!i769[22]
  i768._isArm = !!i769[23]
  var i775 = i769[24]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i768._cards = i774
  request.r(i769[25], i769[26], 0, i768, '_card')
  request.r(i769[27], i769[28], 0, i768, '_updateButton')
  request.r(i769[29], i769[30], 0, i768, '_TMony')
  request.r(i769[31], i769[32], 0, i768, '_buttleButton')
  request.r(i769[33], i769[34], 0, i768, '_pointS1')
  request.r(i769[35], i769[36], 0, i768, '_pointS2')
  request.r(i769[37], i769[38], 0, i768, '_pointS3')
  request.r(i769[39], i769[40], 0, i768, '_arm')
  request.r(i769[41], i769[42], 0, i768, '_arm2')
  request.r(i769[43], i769[44], 0, i768, '_cardPointUpgrade')
  request.r(i769[45], i769[46], 0, i768, '_textHealth3')
  request.r(i769[47], i769[48], 0, i768, '_textDamage3')
  request.r(i769[49], i769[50], 0, i768, '_layer')
  request.r(i769[51], i769[52], 0, i768, '_particle')
  request.r(i769[53], i769[54], 0, i768, '_particle2')
  request.r(i769[55], i769[56], 0, i768, '_particleU')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i779 = data
  i778.ambientIntensity = i779[0]
  i778.reflectionIntensity = i779[1]
  i778.ambientMode = i779[2]
  i778.ambientLight = new pc.Color(i779[3], i779[4], i779[5], i779[6])
  i778.ambientSkyColor = new pc.Color(i779[7], i779[8], i779[9], i779[10])
  i778.ambientGroundColor = new pc.Color(i779[11], i779[12], i779[13], i779[14])
  i778.ambientEquatorColor = new pc.Color(i779[15], i779[16], i779[17], i779[18])
  i778.fogColor = new pc.Color(i779[19], i779[20], i779[21], i779[22])
  i778.fogEndDistance = i779[23]
  i778.fogStartDistance = i779[24]
  i778.fogDensity = i779[25]
  i778.fog = !!i779[26]
  request.r(i779[27], i779[28], 0, i778, 'skybox')
  i778.fogMode = i779[29]
  var i781 = i779[30]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i781[i + 0]) );
  }
  i778.lightmaps = i780
  i778.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i779[31], i778.lightProbes)
  i778.lightmapsMode = i779[32]
  i778.mixedBakeMode = i779[33]
  i778.environmentLightingMode = i779[34]
  i778.ambientProbe = new pc.SphericalHarmonicsL2(i779[35])
  i778.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i779[36])
  i778.useReferenceAmbientProbe = !!i779[37]
  request.r(i779[38], i779[39], 0, i778, 'customReflection')
  request.r(i779[40], i779[41], 0, i778, 'defaultReflection')
  i778.defaultReflectionMode = i779[42]
  i778.defaultReflectionResolution = i779[43]
  i778.sunLightObjectId = i779[44]
  i778.pixelLightCount = i779[45]
  i778.defaultReflectionHDR = !!i779[46]
  i778.hasLightDataAsset = !!i779[47]
  i778.hasManualGenerate = !!i779[48]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'lightmapColor')
  request.r(i785[2], i785[3], 0, i784, 'lightmapDirection')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i786 = root || new UnityEngine.LightProbes()
  var i787 = data
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i793 = data
  i792.enabled = !!i793[0]
  i792.type = i793[1]
  i792.color = new pc.Color(i793[2], i793[3], i793[4], i793[5])
  i792.cullingMask = i793[6]
  i792.intensity = i793[7]
  i792.range = i793[8]
  i792.spotAngle = i793[9]
  i792.shadows = i793[10]
  i792.shadowNormalBias = i793[11]
  i792.shadowBias = i793[12]
  i792.shadowStrength = i793[13]
  i792.shadowResolution = i793[14]
  i792.lightmapBakeType = i793[15]
  i792.renderMode = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'cookie')
  i792.cookieSize = i793[19]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i795 = data
  i794.AdditionalLightsPerObjectLimit = i795[0]
  i794.AdditionalLightsRenderingMode = i795[1]
  i794.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i795[2], i794.LightRenderingMode)
  i794.ColorGradingLutSize = i795[3]
  i794.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i795[4], i794.ColorGradingMode)
  i794.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i795[5], i794.MainLightRenderingMode)
  i794.MainLightRenderingModeValue = i795[6]
  i794.MainLightShadowsSupported = !!i795[7]
  i794.MixedLightingSupported = !!i795[8]
  i794.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i795[9], i794.MsaaQuality)
  i794.MSAA = i795[10]
  i794.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i795[11], i794.OpaqueDownsampling)
  i794.RenderScale = i795[12]
  i794.RequireDepthTexture = !!i795[13]
  i794.RequireOpaqueTexture = !!i795[14]
  i794.ShadowAtlasResolution = i795[15]
  i794.ShadowDepthBias = i795[16]
  i794.SupportsHDR = !!i795[17]
  i794.SupportsTerrainHoles = !!i795[18]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i797 = data
  i796.Disabled = i797[0]
  i796.PerVertex = i797[1]
  i796.PerPixel = i797[2]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i799 = data
  i798.LowDynamicRange = i799[0]
  i798.HighDynamicRange = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i801 = data
  i800.Disabled = i801[0]
  i800._2x = i801[1]
  i800._4x = i801[2]
  i800._8x = i801[3]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i803 = data
  i802.None = i803[0]
  i802._2xBilinear = i803[1]
  i802._4xBox = i803[2]
  i802._4xBilinear = i803[3]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i805 = data
  var i807 = i805[0]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i807[i + 0]));
  }
  i804.ShaderCompilationErrors = i806
  i804.name = i805[1]
  i804.guid = i805[2]
  var i809 = i805[3]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.shaderDefinedKeywords = i808
  var i811 = i805[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i811[i + 0]) );
  }
  i804.passes = i810
  var i813 = i805[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i813[i + 0]) );
  }
  i804.usePasses = i812
  var i815 = i805[6]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i815[i + 0]) );
  }
  i804.defaultParameterValues = i814
  request.r(i805[7], i805[8], 0, i804, 'unityFallbackShader')
  i804.readDepth = !!i805[9]
  i804.isCreatedByShaderGraph = !!i805[10]
  i804.compiled = !!i805[11]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i819 = data
  i818.shaderName = i819[0]
  i818.errorMessage = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i824 = root || new pc.UnityShaderPass()
  var i825 = data
  i824.id = i825[0]
  i824.subShaderIndex = i825[1]
  i824.name = i825[2]
  i824.passType = i825[3]
  i824.grabPassTextureName = i825[4]
  i824.usePass = !!i825[5]
  i824.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[6], i824.zTest)
  i824.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[7], i824.zWrite)
  i824.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[8], i824.culling)
  i824.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i825[9], i824.blending)
  i824.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i825[10], i824.alphaBlending)
  i824.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[11], i824.colorWriteMask)
  i824.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[12], i824.offsetUnits)
  i824.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[13], i824.offsetFactor)
  i824.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[14], i824.stencilRef)
  i824.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[15], i824.stencilReadMask)
  i824.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[16], i824.stencilWriteMask)
  i824.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i825[17], i824.stencilOp)
  i824.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i825[18], i824.stencilOpFront)
  i824.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i825[19], i824.stencilOpBack)
  var i827 = i825[20]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i827[i + 0]) );
  }
  i824.tags = i826
  var i829 = i825[21]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i824.passDefinedKeywords = i828
  var i831 = i825[22]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i831[i + 0]) );
  }
  i824.passDefinedKeywordGroups = i830
  var i833 = i825[23]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i833[i + 0]) );
  }
  i824.variants = i832
  var i835 = i825[24]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i835[i + 0]) );
  }
  i824.excludedVariants = i834
  i824.hasDepthReader = !!i825[25]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i837 = data
  i836.val = i837[0]
  i836.name = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i839 = data
  i838.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[0], i838.src)
  i838.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[1], i838.dst)
  i838.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[2], i838.op)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i841 = data
  i840.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[0], i840.pass)
  i840.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[1], i840.fail)
  i840.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[2], i840.zFail)
  i840.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[3], i840.comp)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i845 = data
  i844.name = i845[0]
  i844.value = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i848.keywords = i850
  i848.hasDiscard = !!i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i855 = data
  i854.passId = i855[0]
  i854.subShaderIndex = i855[1]
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i854.keywords = i856
  i854.vertexProgram = i855[3]
  i854.fragmentProgram = i855[4]
  i854.exportedForWebGl2 = !!i855[5]
  i854.readDepth = !!i855[6]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'shader')
  i860.pass = i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i865 = data
  i864.name = i865[0]
  i864.type = i865[1]
  i864.value = new pc.Vec4( i865[2], i865[3], i865[4], i865[5] )
  i864.textureValue = i865[6]
  i864.shaderPropertyFlag = i865[7]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i867 = data
  i866.name = i867[0]
  request.r(i867[1], i867[2], 0, i866, 'texture')
  i866.aabb = i867[3]
  i866.vertices = i867[4]
  i866.triangles = i867[5]
  i866.textureRect = UnityEngine.Rect.MinMaxRect(i867[6], i867[7], i867[8], i867[9])
  i866.packedRect = UnityEngine.Rect.MinMaxRect(i867[10], i867[11], i867[12], i867[13])
  i866.border = new pc.Vec4( i867[14], i867[15], i867[16], i867[17] )
  i866.transparency = i867[18]
  i866.bounds = i867[19]
  i866.pixelsPerUnit = i867[20]
  i866.textureWidth = i867[21]
  i866.textureHeight = i867[22]
  i866.nativeSize = new pc.Vec2( i867[23], i867[24] )
  i866.pivot = new pc.Vec2( i867[25], i867[26] )
  i866.textureRectOffset = new pc.Vec2( i867[27], i867[28] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i869 = data
  i868.name = i869[0]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i871 = data
  i870.name = i871[0]
  i870.wrapMode = i871[1]
  i870.isLooping = !!i871[2]
  i870.length = i871[3]
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i873[i + 0]) );
  }
  i870.curves = i872
  var i875 = i871[5]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i875[i + 0]) );
  }
  i870.events = i874
  i870.halfPrecision = !!i871[6]
  i870._frameRate = i871[7]
  i870.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i871[8], i870.localBounds)
  i870.hasMuscleCurves = !!i871[9]
  var i877 = i871[10]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i870.clipMuscleConstant = i876
  i870.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i871[11], i870.clipBindingConstant)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i881 = data
  i880.path = i881[0]
  i880.hash = i881[1]
  i880.componentType = i881[2]
  i880.property = i881[3]
  i880.keys = i881[4]
  var i883 = i881[5]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i883[i + 0]) );
  }
  i880.objectReferenceKeys = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i887 = data
  i886.time = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'value')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i891 = data
  i890.functionName = i891[0]
  i890.floatParameter = i891[1]
  i890.intParameter = i891[2]
  i890.stringParameter = i891[3]
  request.r(i891[4], i891[5], 0, i890, 'objectReferenceParameter')
  i890.time = i891[6]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i893 = data
  i892.center = new pc.Vec3( i893[0], i893[1], i893[2] )
  i892.extends = new pc.Vec3( i893[3], i893[4], i893[5] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i896.genericBindings = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.pptrCurveMapping = i900
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i903 = data
  i902.name = i903[0]
  i902.ascent = i903[1]
  i902.originalLineHeight = i903[2]
  i902.fontSize = i903[3]
  var i905 = i903[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i905[i + 0]) );
  }
  i902.characterInfo = i904
  request.r(i903[5], i903[6], 0, i902, 'texture')
  i902.originalFontSize = i903[7]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i909 = data
  i908.index = i909[0]
  i908.advance = i909[1]
  i908.bearing = i909[2]
  i908.glyphWidth = i909[3]
  i908.glyphHeight = i909[4]
  i908.minX = i909[5]
  i908.maxX = i909[6]
  i908.minY = i909[7]
  i908.maxY = i909[8]
  i908.uvBottomLeftX = i909[9]
  i908.uvBottomLeftY = i909[10]
  i908.uvBottomRightX = i909[11]
  i908.uvBottomRightY = i909[12]
  i908.uvTopLeftX = i909[13]
  i908.uvTopLeftY = i909[14]
  i908.uvTopRightX = i909[15]
  i908.uvTopRightY = i909[16]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i911 = data
  i910.name = i911[0]
  var i913 = i911[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i913[i + 0]) );
  }
  i910.layers = i912
  var i915 = i911[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i915[i + 0]) );
  }
  i910.parameters = i914
  i910.animationClips = i911[3]
  i910.avatarUnsupported = i911[4]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i919 = data
  i918.name = i919[0]
  i918.defaultWeight = i919[1]
  i918.blendingMode = i919[2]
  i918.avatarMask = i919[3]
  i918.syncedLayerIndex = i919[4]
  i918.syncedLayerAffectsTiming = !!i919[5]
  i918.syncedLayers = i919[6]
  i918.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i919[7], i918.stateMachine)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i921 = data
  i920.id = i921[0]
  i920.name = i921[1]
  i920.path = i921[2]
  var i923 = i921[3]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i923[i + 0]) );
  }
  i920.states = i922
  var i925 = i921[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i925[i + 0]) );
  }
  i920.machines = i924
  var i927 = i921[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i927[i + 0]) );
  }
  i920.entryStateTransitions = i926
  var i929 = i921[6]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i929[i + 0]) );
  }
  i920.exitStateTransitions = i928
  var i931 = i921[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i931[i + 0]) );
  }
  i920.anyStateTransitions = i930
  i920.defaultStateId = i921[8]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.cycleOffset = i935[2]
  i934.cycleOffsetParameter = i935[3]
  i934.cycleOffsetParameterActive = !!i935[4]
  i934.mirror = !!i935[5]
  i934.mirrorParameter = i935[6]
  i934.mirrorParameterActive = !!i935[7]
  i934.motionId = i935[8]
  i934.nameHash = i935[9]
  i934.fullPathHash = i935[10]
  i934.speed = i935[11]
  i934.speedParameter = i935[12]
  i934.speedParameterActive = !!i935[13]
  i934.tag = i935[14]
  i934.tagHash = i935[15]
  i934.writeDefaultValues = !!i935[16]
  var i937 = i935[17]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.behaviours = i936
  var i939 = i935[18]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i939[i + 0]) );
  }
  i934.transitions = i938
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i945 = data
  i944.fullPath = i945[0]
  i944.canTransitionToSelf = !!i945[1]
  i944.duration = i945[2]
  i944.exitTime = i945[3]
  i944.hasExitTime = !!i945[4]
  i944.hasFixedDuration = !!i945[5]
  i944.interruptionSource = i945[6]
  i944.offset = i945[7]
  i944.orderedInterruption = !!i945[8]
  i944.destinationStateId = i945[9]
  i944.isExit = !!i945[10]
  i944.mute = !!i945[11]
  i944.solo = !!i945[12]
  var i947 = i945[13]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i947[i + 0]) );
  }
  i944.conditions = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i953 = data
  i952.destinationStateId = i953[0]
  i952.isExit = !!i953[1]
  i952.mute = !!i953[2]
  i952.solo = !!i953[3]
  var i955 = i953[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i955[i + 0]) );
  }
  i952.conditions = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i959 = data
  i958.defaultBool = !!i959[0]
  i958.defaultFloat = i959[1]
  i958.defaultInt = i959[2]
  i958.name = i959[3]
  i958.nameHash = i959[4]
  i958.type = i959[5]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i961 = data
  var i963 = i961[0]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i963[i + 0]) );
  }
  i960.files = i962
  i960.componentToPrefabIds = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i967 = data
  i966.path = i967[0]
  request.r(i967[1], i967[2], 0, i966, 'unityObject')
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i971[i + 0]) );
  }
  i968.scriptsExecutionOrder = i970
  var i973 = i969[1]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i973[i + 0]) );
  }
  i968.sortingLayers = i972
  var i975 = i969[2]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i975[i + 0]) );
  }
  i968.cullingLayers = i974
  i968.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i969[3], i968.timeSettings)
  i968.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i969[4], i968.physicsSettings)
  i968.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i969[5], i968.physics2DSettings)
  i968.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i969[6], i968.qualitySettings)
  i968.enableRealtimeShadows = !!i969[7]
  i968.enableAutoInstancing = !!i969[8]
  i968.enableDynamicBatching = !!i969[9]
  i968.lightmapEncodingQuality = i969[10]
  i968.desiredColorSpace = i969[11]
  var i977 = i969[12]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i968.allTags = i976
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i981 = data
  i980.name = i981[0]
  i980.value = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i985 = data
  i984.id = i985[0]
  i984.name = i985[1]
  i984.value = i985[2]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i989 = data
  i988.id = i989[0]
  i988.name = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i991 = data
  i990.fixedDeltaTime = i991[0]
  i990.maximumDeltaTime = i991[1]
  i990.timeScale = i991[2]
  i990.maximumParticleTimestep = i991[3]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i993 = data
  i992.gravity = new pc.Vec3( i993[0], i993[1], i993[2] )
  i992.defaultSolverIterations = i993[3]
  i992.bounceThreshold = i993[4]
  i992.autoSyncTransforms = !!i993[5]
  i992.autoSimulation = !!i993[6]
  var i995 = i993[7]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i995[i + 0]) );
  }
  i992.collisionMatrix = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i999 = data
  i998.enabled = !!i999[0]
  i998.layerId = i999[1]
  i998.otherLayerId = i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'material')
  i1000.gravity = new pc.Vec2( i1001[2], i1001[3] )
  i1000.positionIterations = i1001[4]
  i1000.velocityIterations = i1001[5]
  i1000.velocityThreshold = i1001[6]
  i1000.maxLinearCorrection = i1001[7]
  i1000.maxAngularCorrection = i1001[8]
  i1000.maxTranslationSpeed = i1001[9]
  i1000.maxRotationSpeed = i1001[10]
  i1000.baumgarteScale = i1001[11]
  i1000.baumgarteTOIScale = i1001[12]
  i1000.timeToSleep = i1001[13]
  i1000.linearSleepTolerance = i1001[14]
  i1000.angularSleepTolerance = i1001[15]
  i1000.defaultContactOffset = i1001[16]
  i1000.autoSimulation = !!i1001[17]
  i1000.queriesHitTriggers = !!i1001[18]
  i1000.queriesStartInColliders = !!i1001[19]
  i1000.callbacksOnDisable = !!i1001[20]
  i1000.reuseCollisionCallbacks = !!i1001[21]
  i1000.autoSyncTransforms = !!i1001[22]
  var i1003 = i1001[23]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1003[i + 0]) );
  }
  i1000.collisionMatrix = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.layerId = i1007[1]
  i1006.otherLayerId = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1011[i + 0]) );
  }
  i1008.qualityLevels = i1010
  var i1013 = i1009[1]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1008.names = i1012
  i1008.shadows = i1009[2]
  i1008.anisotropicFiltering = i1009[3]
  i1008.antiAliasing = i1009[4]
  i1008.lodBias = i1009[5]
  i1008.shadowCascades = i1009[6]
  i1008.shadowDistance = i1009[7]
  i1008.shadowmaskMode = i1009[8]
  i1008.shadowProjection = i1009[9]
  i1008.shadowResolution = i1009[10]
  i1008.softParticles = !!i1009[11]
  i1008.softVegetation = !!i1009[12]
  i1008.activeColorSpace = i1009[13]
  i1008.desiredColorSpace = i1009[14]
  i1008.masterTextureLimit = i1009[15]
  i1008.maxQueuedFrames = i1009[16]
  i1008.particleRaycastBudget = i1009[17]
  i1008.pixelLightCount = i1009[18]
  i1008.realtimeReflectionProbes = !!i1009[19]
  i1008.shadowCascade2Split = i1009[20]
  i1008.shadowCascade4Split = new pc.Vec3( i1009[21], i1009[22], i1009[23] )
  i1008.streamingMipmapsActive = !!i1009[24]
  i1008.vSyncCount = i1009[25]
  i1008.asyncUploadBufferSize = i1009[26]
  i1008.asyncUploadTimeSlice = i1009[27]
  i1008.billboardsFaceCameraPosition = !!i1009[28]
  i1008.shadowNearPlaneOffset = i1009[29]
  i1008.streamingMipmapsMemoryBudget = i1009[30]
  i1008.maximumLODLevel = i1009[31]
  i1008.streamingMipmapsAddAllCameras = !!i1009[32]
  i1008.streamingMipmapsMaxLevelReduction = i1009[33]
  i1008.streamingMipmapsRenderersPerFrame = i1009[34]
  i1008.resolutionScalingFixedDPIFactor = i1009[35]
  i1008.streamingMipmapsMaxFileIORequests = i1009[36]
  i1008.currentQualityLevel = i1009[37]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1019 = data
  i1018.weight = i1019[0]
  i1018.vertices = i1019[1]
  i1018.normals = i1019[2]
  i1018.tangents = i1019[3]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1023 = data
  i1022.mode = i1023[0]
  i1022.parameter = i1023[1]
  i1022.threshold = i1023[2]
  return i1022
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[23],"84":[85],"86":[87],"88":[87],"28":[0],"89":[0],"90":[91],"92":[93],"94":[23],"95":[23],"25":[23],"96":[50],"97":[91],"98":[99],"100":[0],"101":[0],"30":[28],"3":[1,0],"102":[0],"29":[28],"103":[0],"104":[0],"105":[0],"106":[0],"107":[0],"108":[0],"109":[0],"110":[0],"111":[0],"112":[1,0],"113":[0],"114":[0],"115":[0],"116":[0],"10":[1,0],"117":[0],"118":[46],"119":[46],"47":[46],"120":[46],"121":[23],"122":[23],"123":[91]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Episode1","UnityEngine.GameObject","UnityEngine.UI.Text","Card2V","UnityEngine.Font","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Mesh","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","ParticleFollowUI","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ClickCta","Point","Episode6","Episode2","Episode5","Episode4_1","UpdateButton","Episode4v2","Episode3","Episode7","Episode4_2","Episode5_2","Buttle","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "13.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1579";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3084";

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

Deserializers.buildID = "29883756-8141-4f37-b6e9-e0649a424231";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

