var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSpring' )
  var i517 = data
  i516.spring = i517[0]
  i516.damper = i517[1]
  i516.targetPosition = i517[2]
  return i516
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointMotor' )
  var i519 = data
  i518.m_TargetVelocity = i519[0]
  i518.m_Force = i519[1]
  i518.m_FreeSpin = i519[2]
  return i518
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointLimits' )
  var i521 = data
  i520.m_Min = i521[0]
  i520.m_Max = i521[1]
  i520.m_Bounciness = i521[2]
  i520.m_BounceMinVelocity = i521[3]
  i520.m_ContactDistance = i521[4]
  i520.minBounce = i521[5]
  i520.maxBounce = i521[6]
  return i520
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointDrive' )
  var i523 = data
  i522.m_PositionSpring = i523[0]
  i522.m_PositionDamper = i523[1]
  i522.m_MaximumForce = i523[2]
  i522.m_UseAcceleration = i523[3]
  return i522
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i525 = data
  i524.m_Spring = i525[0]
  i524.m_Damper = i525[1]
  return i524
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i527 = data
  i526.m_Limit = i527[0]
  i526.m_Bounciness = i527[1]
  i526.m_ContactDistance = i527[2]
  return i526
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i529 = data
  i528.m_ExtremumSlip = i529[0]
  i528.m_ExtremumValue = i529[1]
  i528.m_AsymptoteSlip = i529[2]
  i528.m_AsymptoteValue = i529[3]
  i528.m_Stiffness = i529[4]
  return i528
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i531 = data
  i530.m_LowerAngle = i531[0]
  i530.m_UpperAngle = i531[1]
  return i530
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i533 = data
  i532.m_MotorSpeed = i533[0]
  i532.m_MaximumMotorTorque = i533[1]
  return i532
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i535 = data
  i534.m_DampingRatio = i535[0]
  i534.m_Frequency = i535[1]
  i534.m_Angle = i535[2]
  return i534
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i537 = data
  i536.m_LowerTranslation = i537[0]
  i536.m_UpperTranslation = i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i539 = data
  i538.name = i539[0]
  i538.width = i539[1]
  i538.height = i539[2]
  i538.mipmapCount = i539[3]
  i538.anisoLevel = i539[4]
  i538.filterMode = i539[5]
  i538.hdr = !!i539[6]
  i538.format = i539[7]
  i538.wrapMode = i539[8]
  i538.alphaIsTransparency = !!i539[9]
  i538.alphaSource = i539[10]
  i538.graphicsFormat = i539[11]
  i538.sRGBTexture = !!i539[12]
  i538.desiredColorSpace = i539[13]
  i538.wrapU = i539[14]
  i538.wrapV = i539[15]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i541 = data
  i540.pivot = new pc.Vec2( i541[0], i541[1] )
  i540.anchorMin = new pc.Vec2( i541[2], i541[3] )
  i540.anchorMax = new pc.Vec2( i541[4], i541[5] )
  i540.sizeDelta = new pc.Vec2( i541[6], i541[7] )
  i540.anchoredPosition3D = new pc.Vec3( i541[8], i541[9], i541[10] )
  i540.rotation = new pc.Quat(i541[11], i541[12], i541[13], i541[14])
  i540.scale = new pc.Vec3( i541[15], i541[16], i541[17] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i543 = data
  i542.cullTransparentMesh = !!i543[0]
  return i542
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Image' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_Sprite')
  i544.m_Type = i545[2]
  i544.m_PreserveAspect = !!i545[3]
  i544.m_FillCenter = !!i545[4]
  i544.m_FillMethod = i545[5]
  i544.m_FillAmount = i545[6]
  i544.m_FillClockwise = !!i545[7]
  i544.m_FillOrigin = i545[8]
  i544.m_UseSpriteMesh = !!i545[9]
  i544.m_PixelsPerUnitMultiplier = i545[10]
  request.r(i545[11], i545[12], 0, i544, 'm_Material')
  i544.m_Maskable = !!i545[13]
  i544.m_Color = new pc.Color(i545[14], i545[15], i545[16], i545[17])
  i544.m_RaycastTarget = !!i545[18]
  i544.m_RaycastPadding = new pc.Vec4( i545[19], i545[20], i545[21], i545[22] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'animatorController')
  request.r(i547[2], i547[3], 0, i546, 'avatar')
  i546.updateMode = i547[4]
  i546.hasTransformHierarchy = !!i547[5]
  i546.applyRootMotion = !!i547[6]
  var i549 = i547[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.humanBones = i548
  i546.enabled = !!i547[8]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i553 = data
  i552.name = i553[0]
  i552.tagId = i553[1]
  i552.enabled = !!i553[2]
  i552.isStatic = !!i553[3]
  i552.layer = i553[4]
  return i552
}

Deserializers["Episode1"] = function (request, data, root) {
  var i554 = root || request.c( 'Episode1' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, '_arm')
  request.r(i555[2], i555[3], 0, i554, '_points')
  request.r(i555[4], i555[5], 0, i554, '_unit')
  request.r(i555[6], i555[7], 0, i554, '_particleSystem')
  request.r(i555[8], i555[9], 0, i554, '_textCoins')
  request.r(i555[10], i555[11], 0, i554, '_textDamage')
  request.r(i555[12], i555[13], 0, i554, '_textHealth')
  request.r(i555[14], i555[15], 0, i554, '_textHealth2')
  request.r(i555[16], i555[17], 0, i554, '_textDamage2')
  i554.scaleDuration = i555[18]
  i554.moveDuration = i555[19]
  i554.targetScale = new pc.Vec3( i555[20], i555[21], i555[22] )
  return i554
}

Deserializers["Card2V"] = function (request, data, root) {
  var i556 = root || request.c( 'Card2V' )
  var i557 = data
  i556._us = !!i557[0]
  request.r(i557[1], i557[2], 0, i556, '_arm')
  request.r(i557[3], i557[4], 0, i556, '_episode')
  i556._dragon = !!i557[5]
  i556._isMainCard = !!i557[6]
  i556.moveDuration = i557[7]
  i556.scaleDuration = i557[8]
  i556.targetScale = new pc.Vec3( i557[9], i557[10], i557[11] )
  return i556
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.Text' )
  var i559 = data
  i558.m_FontData = request.d('UnityEngine.UI.FontData', i559[0], i558.m_FontData)
  i558.m_Text = i559[1]
  request.r(i559[2], i559[3], 0, i558, 'm_Material')
  i558.m_Maskable = !!i559[4]
  i558.m_Color = new pc.Color(i559[5], i559[6], i559[7], i559[8])
  i558.m_RaycastTarget = !!i559[9]
  i558.m_RaycastPadding = new pc.Vec4( i559[10], i559[11], i559[12], i559[13] )
  return i558
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.FontData' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'm_Font')
  i560.m_FontSize = i561[2]
  i560.m_FontStyle = i561[3]
  i560.m_BestFit = !!i561[4]
  i560.m_MinSize = i561[5]
  i560.m_MaxSize = i561[6]
  i560.m_Alignment = i561[7]
  i560.m_AlignByGeometry = !!i561[8]
  i560.m_RichText = !!i561[9]
  i560.m_HorizontalOverflow = i561[10]
  i560.m_VerticalOverflow = i561[11]
  i560.m_LineSpacing = i561[12]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i563 = data
  i562.position = new pc.Vec3( i563[0], i563[1], i563[2] )
  i562.scale = new pc.Vec3( i563[3], i563[4], i563[5] )
  i562.rotation = new pc.Quat(i563[6], i563[7], i563[8], i563[9])
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i565 = data
  i564.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i565[0], i564.main)
  i564.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i565[1], i564.colorBySpeed)
  i564.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i565[2], i564.colorOverLifetime)
  i564.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i565[3], i564.emission)
  i564.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i565[4], i564.rotationBySpeed)
  i564.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i565[5], i564.rotationOverLifetime)
  i564.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i565[6], i564.shape)
  i564.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i565[7], i564.sizeBySpeed)
  i564.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i565[8], i564.sizeOverLifetime)
  i564.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i565[9], i564.textureSheetAnimation)
  i564.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i565[10], i564.velocityOverLifetime)
  i564.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i565[11], i564.noise)
  i564.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i565[12], i564.inheritVelocity)
  i564.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i565[13], i564.forceOverLifetime)
  i564.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i565[14], i564.limitVelocityOverLifetime)
  i564.useAutoRandomSeed = !!i565[15]
  i564.randomSeed = i565[16]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemMain()
  var i567 = data
  i566.duration = i567[0]
  i566.loop = !!i567[1]
  i566.prewarm = !!i567[2]
  i566.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.startDelay)
  i566.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[4], i566.startLifetime)
  i566.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[5], i566.startSpeed)
  i566.startSize3D = !!i567[6]
  i566.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[7], i566.startSizeX)
  i566.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[8], i566.startSizeY)
  i566.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[9], i566.startSizeZ)
  i566.startRotation3D = !!i567[10]
  i566.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[11], i566.startRotationX)
  i566.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[12], i566.startRotationY)
  i566.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[13], i566.startRotationZ)
  i566.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i567[14], i566.startColor)
  i566.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[15], i566.gravityModifier)
  i566.simulationSpace = i567[16]
  request.r(i567[17], i567[18], 0, i566, 'customSimulationSpace')
  i566.simulationSpeed = i567[19]
  i566.useUnscaledTime = !!i567[20]
  i566.scalingMode = i567[21]
  i566.playOnAwake = !!i567[22]
  i566.maxParticles = i567[23]
  i566.emitterVelocityMode = i567[24]
  i566.stopAction = i567[25]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i568 = root || new pc.MinMaxCurve()
  var i569 = data
  i568.mode = i569[0]
  i568.curveMin = new pc.AnimationCurve( { keys_flow: i569[1] } )
  i568.curveMax = new pc.AnimationCurve( { keys_flow: i569[2] } )
  i568.curveMultiplier = i569[3]
  i568.constantMin = i569[4]
  i568.constantMax = i569[5]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i570 = root || new pc.MinMaxGradient()
  var i571 = data
  i570.mode = i571[0]
  i570.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i571[1], i570.gradientMin)
  i570.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i571[2], i570.gradientMax)
  i570.colorMin = new pc.Color(i571[3], i571[4], i571[5], i571[6])
  i570.colorMax = new pc.Color(i571[7], i571[8], i571[9], i571[10])
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i573 = data
  i572.mode = i573[0]
  var i575 = i573[1]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i575[i + 0]) );
  }
  i572.colorKeys = i574
  var i577 = i573[2]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i577[i + 0]) );
  }
  i572.alphaKeys = i576
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemColorBySpeed()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i579[1], i578.color)
  i578.range = new pc.Vec2( i579[2], i579[3] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i583 = data
  i582.color = new pc.Color(i583[0], i583[1], i583[2], i583[3])
  i582.time = i583[4]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i587 = data
  i586.alpha = i587[0]
  i586.time = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemColorOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i589[1], i588.color)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemEmitter()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.rateOverTime)
  i590.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.rateOverDistance)
  var i593 = i591[3]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i593[i + 0]) );
  }
  i590.bursts = i592
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemBurst()
  var i597 = data
  i596.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[0], i596.count)
  i596.cycleCount = i597[1]
  i596.minCount = i597[2]
  i596.maxCount = i597[3]
  i596.repeatInterval = i597[4]
  i596.time = i597[5]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemRotationBySpeed()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[1], i598.x)
  i598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.y)
  i598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[3], i598.z)
  i598.separateAxes = !!i599[4]
  i598.range = new pc.Vec2( i599[5], i599[6] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemRotationOverLifetime()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[1], i600.x)
  i600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.y)
  i600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.z)
  i600.separateAxes = !!i601[4]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemShape()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.shapeType = i603[1]
  i602.randomDirectionAmount = i603[2]
  i602.sphericalDirectionAmount = i603[3]
  i602.randomPositionAmount = i603[4]
  i602.alignToDirection = !!i603[5]
  i602.radius = i603[6]
  i602.radiusMode = i603[7]
  i602.radiusSpread = i603[8]
  i602.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[9], i602.radiusSpeed)
  i602.radiusThickness = i603[10]
  i602.angle = i603[11]
  i602.length = i603[12]
  i602.boxThickness = new pc.Vec3( i603[13], i603[14], i603[15] )
  i602.meshShapeType = i603[16]
  request.r(i603[17], i603[18], 0, i602, 'mesh')
  request.r(i603[19], i603[20], 0, i602, 'meshRenderer')
  request.r(i603[21], i603[22], 0, i602, 'skinnedMeshRenderer')
  i602.useMeshMaterialIndex = !!i603[23]
  i602.meshMaterialIndex = i603[24]
  i602.useMeshColors = !!i603[25]
  i602.normalOffset = i603[26]
  i602.arc = i603[27]
  i602.arcMode = i603[28]
  i602.arcSpread = i603[29]
  i602.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[30], i602.arcSpeed)
  i602.donutRadius = i603[31]
  i602.position = new pc.Vec3( i603[32], i603[33], i603[34] )
  i602.rotation = new pc.Vec3( i603[35], i603[36], i603[37] )
  i602.scale = new pc.Vec3( i603[38], i603[39], i603[40] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemSizeBySpeed()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[1], i604.x)
  i604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.y)
  i604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.z)
  i604.separateAxes = !!i605[4]
  i604.range = new pc.Vec2( i605[5], i605[6] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemSizeOverLifetime()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.x)
  i606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.y)
  i606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.z)
  i606.separateAxes = !!i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.mode = i609[1]
  i608.animation = i609[2]
  i608.numTilesX = i609[3]
  i608.numTilesY = i609[4]
  i608.useRandomRow = !!i609[5]
  i608.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[6], i608.frameOverTime)
  i608.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[7], i608.startFrame)
  i608.cycleCount = i609[8]
  i608.rowIndex = i609[9]
  i608.flipU = i609[10]
  i608.flipV = i609[11]
  i608.spriteCount = i609[12]
  var i611 = i609[13]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.sprites = i610
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[1], i614.x)
  i614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.y)
  i614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[3], i614.z)
  i614.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[4], i614.radial)
  i614.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[5], i614.speedModifier)
  i614.space = i615[6]
  i614.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[7], i614.orbitalX)
  i614.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[8], i614.orbitalY)
  i614.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[9], i614.orbitalZ)
  i614.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[10], i614.orbitalOffsetX)
  i614.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[11], i614.orbitalOffsetY)
  i614.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[12], i614.orbitalOffsetZ)
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemNoise()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.separateAxes = !!i617[1]
  i616.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[2], i616.strengthX)
  i616.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[3], i616.strengthY)
  i616.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[4], i616.strengthZ)
  i616.frequency = i617[5]
  i616.damping = !!i617[6]
  i616.octaveCount = i617[7]
  i616.octaveMultiplier = i617[8]
  i616.octaveScale = i617[9]
  i616.quality = i617[10]
  i616.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[11], i616.scrollSpeed)
  i616.scrollSpeedMultiplier = i617[12]
  i616.remapEnabled = !!i617[13]
  i616.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[14], i616.remapX)
  i616.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[15], i616.remapY)
  i616.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[16], i616.remapZ)
  i616.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[17], i616.positionAmount)
  i616.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[18], i616.rotationAmount)
  i616.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[19], i616.sizeAmount)
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemInheritVelocity()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.mode = i619[1]
  i618.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[2], i618.curve)
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemForceOverLifetime()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[1], i620.x)
  i620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.y)
  i620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[3], i620.z)
  i620.space = i621[4]
  i620.randomized = !!i621[5]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.limit)
  i622.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.limitX)
  i622.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.limitY)
  i622.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[4], i622.limitZ)
  i622.dampen = i623[5]
  i622.separateAxes = !!i623[6]
  i622.space = i623[7]
  i622.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[8], i622.drag)
  i622.multiplyDragByParticleSize = !!i623[9]
  i622.multiplyDragByParticleVelocity = !!i623[10]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i625 = data
  i624.enabled = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'sharedMaterial')
  var i627 = i625[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.sharedMaterials = i626
  i624.receiveShadows = !!i625[4]
  i624.shadowCastingMode = i625[5]
  i624.sortingLayerID = i625[6]
  i624.sortingOrder = i625[7]
  i624.lightmapIndex = i625[8]
  i624.lightmapSceneIndex = i625[9]
  i624.lightmapScaleOffset = new pc.Vec4( i625[10], i625[11], i625[12], i625[13] )
  i624.lightProbeUsage = i625[14]
  i624.reflectionProbeUsage = i625[15]
  request.r(i625[16], i625[17], 0, i624, 'mesh')
  i624.meshCount = i625[18]
  i624.activeVertexStreamsCount = i625[19]
  i624.alignment = i625[20]
  i624.renderMode = i625[21]
  i624.sortMode = i625[22]
  i624.lengthScale = i625[23]
  i624.velocityScale = i625[24]
  i624.cameraVelocityScale = i625[25]
  i624.normalDirection = i625[26]
  i624.sortingFudge = i625[27]
  i624.minParticleSize = i625[28]
  i624.maxParticleSize = i625[29]
  i624.pivot = new pc.Vec3( i625[30], i625[31], i625[32] )
  request.r(i625[33], i625[34], 0, i624, 'trailMaterial')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'clip')
  request.r(i631[2], i631[3], 0, i630, 'outputAudioMixerGroup')
  i630.playOnAwake = !!i631[4]
  i630.loop = !!i631[5]
  i630.time = i631[6]
  i630.volume = i631[7]
  i630.pitch = i631[8]
  i630.enabled = !!i631[9]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i632 = root || new pc.UnityMaterial()
  var i633 = data
  i632.name = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'shader')
  i632.renderQueue = i633[3]
  i632.enableInstancing = !!i633[4]
  var i635 = i633[5]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i635[i + 0]) );
  }
  i632.floatParameters = i634
  var i637 = i633[6]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i637[i + 0]) );
  }
  i632.colorParameters = i636
  var i639 = i633[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i639[i + 0]) );
  }
  i632.vectorParameters = i638
  var i641 = i633[8]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i641[i + 0]) );
  }
  i632.textureParameters = i640
  var i643 = i633[9]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i643[i + 0]) );
  }
  i632.materialFlags = i642
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = new pc.Color(i651[1], i651[2], i651[3], i651[4])
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = new pc.Vec4( i655[1], i655[2], i655[3], i655[4] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i659 = data
  i658.name = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'value')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i663 = data
  i662.name = i663[0]
  i662.enabled = !!i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i665 = data
  i664.name = i665[0]
  i664.halfPrecision = !!i665[1]
  i664.useUInt32IndexFormat = !!i665[2]
  i664.vertexCount = i665[3]
  i664.aabb = i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( !!i667[i + 0] );
  }
  i664.streams = i666
  i664.vertices = i665[6]
  var i669 = i665[7]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i669[i + 0]) );
  }
  i664.subMeshes = i668
  var i671 = i665[8]
  var i670 = []
  for(var i = 0; i < i671.length; i += 16) {
    i670.push( new pc.Mat4().setData(i671[i + 0], i671[i + 1], i671[i + 2], i671[i + 3],  i671[i + 4], i671[i + 5], i671[i + 6], i671[i + 7],  i671[i + 8], i671[i + 9], i671[i + 10], i671[i + 11],  i671[i + 12], i671[i + 13], i671[i + 14], i671[i + 15]) );
  }
  i664.bindposes = i670
  var i673 = i665[9]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i673[i + 0]) );
  }
  i664.blendShapes = i672
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i679 = data
  i678.triangles = i679[0]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i685 = data
  i684.name = i685[0]
  var i687 = i685[1]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i687[i + 0]) );
  }
  i684.frames = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i689 = data
  i688.m_Alpha = i689[0]
  i688.m_Interactable = !!i689[1]
  i688.m_BlocksRaycasts = !!i689[2]
  i688.m_IgnoreParentGroups = !!i689[3]
  i688.enabled = !!i689[4]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i691 = data
  i690.name = i691[0]
  i690.index = i691[1]
  i690.startup = !!i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i693 = data
  i692.enabled = !!i693[0]
  i692.aspect = i693[1]
  i692.orthographic = !!i693[2]
  i692.orthographicSize = i693[3]
  i692.backgroundColor = new pc.Color(i693[4], i693[5], i693[6], i693[7])
  i692.nearClipPlane = i693[8]
  i692.farClipPlane = i693[9]
  i692.fieldOfView = i693[10]
  i692.depth = i693[11]
  i692.clearFlags = i693[12]
  i692.cullingMask = i693[13]
  i692.rect = i693[14]
  request.r(i693[15], i693[16], 0, i692, 'targetTexture')
  i692.usePhysicalProperties = !!i693[17]
  i692.focalLength = i693[18]
  i692.sensorSize = new pc.Vec2( i693[19], i693[20] )
  i692.lensShift = new pc.Vec2( i693[21], i693[22] )
  i692.gateFit = i693[23]
  i692.commandBufferCount = i693[24]
  i692.cameraType = i693[25]
  return i692
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i695 = data
  i694.m_RenderShadows = !!i695[0]
  i694.m_RequiresDepthTextureOption = i695[1]
  i694.m_RequiresOpaqueTextureOption = i695[2]
  i694.m_CameraType = i695[3]
  var i697 = i695[4]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i694.m_Cameras = i696
  i694.m_RendererIndex = i695[5]
  i694.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i695[6] )
  request.r(i695[7], i695[8], 0, i694, 'm_VolumeTrigger')
  i694.m_VolumeFrameworkUpdateModeOption = i695[9]
  i694.m_RenderPostProcessing = !!i695[10]
  i694.m_Antialiasing = i695[11]
  i694.m_AntialiasingQuality = i695[12]
  i694.m_StopNaN = !!i695[13]
  i694.m_Dithering = !!i695[14]
  i694.m_ClearDepth = !!i695[15]
  i694.m_AllowXRRendering = !!i695[16]
  i694.m_AllowHDROutput = !!i695[17]
  i694.m_UseScreenCoordOverride = !!i695[18]
  i694.m_ScreenSizeOverride = new pc.Vec4( i695[19], i695[20], i695[21], i695[22] )
  i694.m_ScreenCoordScaleBias = new pc.Vec4( i695[23], i695[24], i695[25], i695[26] )
  i694.m_RequiresDepthTexture = !!i695[27]
  i694.m_RequiresColorTexture = !!i695[28]
  i694.m_Version = i695[29]
  i694.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i695[30], i694.m_TaaSettings)
  return i694
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i701 = data
  i700.m_Quality = i701[0]
  i700.m_FrameInfluence = i701[1]
  i700.m_JitterScale = i701[2]
  i700.m_MipBias = i701[3]
  i700.m_VarianceClampScale = i701[4]
  i700.m_ContrastAdaptiveSharpening = i701[5]
  return i700
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i702 = root || request.c( 'ParticleFollowUI' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_buttonButtle')
  request.r(i703[2], i703[3], 0, i702, '_buttonShop')
  request.r(i703[4], i703[5], 0, i702, 'uiCamera')
  request.r(i703[6], i703[7], 0, i702, '_particleEffectButton')
  request.r(i703[8], i703[9], 0, i702, '_particleEffectButtonShop')
  i702.zOffset = i703[10]
  return i702
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i704 = root || request.c( 'ClickCta' )
  var i705 = data
  return i704
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i707 = data
  i706.m_ComponentVersion = i707[0]
  i706.m_LightType = i707[1]
  i706.m_BlendStyleIndex = i707[2]
  i706.m_FalloffIntensity = i707[3]
  i706.m_Color = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.m_Intensity = i707[8]
  i706.m_LightVolumeIntensity = i707[9]
  i706.m_LightVolumeIntensityEnabled = !!i707[10]
  i706.m_ApplyToSortingLayers = i707[11]
  request.r(i707[12], i707[13], 0, i706, 'm_LightCookieSprite')
  request.r(i707[14], i707[15], 0, i706, 'm_DeprecatedPointLightCookieSprite')
  i706.m_LightOrder = i707[16]
  i706.m_AlphaBlendOnOverlap = !!i707[17]
  i706.m_OverlapOperation = i707[18]
  i706.m_NormalMapDistance = i707[19]
  i706.m_NormalMapQuality = i707[20]
  i706.m_UseNormalMap = !!i707[21]
  i706.m_ShadowIntensityEnabled = !!i707[22]
  i706.m_ShadowIntensity = i707[23]
  i706.m_ShadowVolumeIntensityEnabled = !!i707[24]
  i706.m_ShadowVolumeIntensity = i707[25]
  i706.m_PointLightInnerAngle = i707[26]
  i706.m_PointLightOuterAngle = i707[27]
  i706.m_PointLightInnerRadius = i707[28]
  i706.m_PointLightOuterRadius = i707[29]
  i706.m_ShapeLightParametricSides = i707[30]
  i706.m_ShapeLightParametricAngleOffset = i707[31]
  i706.m_ShapeLightParametricRadius = i707[32]
  i706.m_ShapeLightFalloffSize = i707[33]
  i706.m_ShapeLightFalloffOffset = new pc.Vec2( i707[34], i707[35] )
  var i709 = i707[36]
  var i708 = []
  for(var i = 0; i < i709.length; i += 3) {
    i708.push( new pc.Vec3( i709[i + 0], i709[i + 1], i709[i + 2] ) );
  }
  i706.m_ShapePath = i708
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i713 = data
  i712.enabled = !!i713[0]
  i712.planeDistance = i713[1]
  i712.referencePixelsPerUnit = i713[2]
  i712.isFallbackOverlay = !!i713[3]
  i712.renderMode = i713[4]
  i712.renderOrder = i713[5]
  i712.sortingLayerName = i713[6]
  i712.sortingOrder = i713[7]
  i712.scaleFactor = i713[8]
  request.r(i713[9], i713[10], 0, i712, 'worldCamera')
  i712.overrideSorting = !!i713[11]
  i712.pixelPerfect = !!i713[12]
  i712.targetDisplay = i713[13]
  i712.overridePixelPerfect = !!i713[14]
  return i712
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i715 = data
  i714.m_UiScaleMode = i715[0]
  i714.m_ReferencePixelsPerUnit = i715[1]
  i714.m_ScaleFactor = i715[2]
  i714.m_ReferenceResolution = new pc.Vec2( i715[3], i715[4] )
  i714.m_ScreenMatchMode = i715[5]
  i714.m_MatchWidthOrHeight = i715[6]
  i714.m_PhysicalUnit = i715[7]
  i714.m_FallbackScreenDPI = i715[8]
  i714.m_DefaultSpriteDPI = i715[9]
  i714.m_DynamicPixelsPerUnit = i715[10]
  i714.m_PresetInfoIsWorld = !!i715[11]
  return i714
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i717 = data
  i716.m_IgnoreReversedGraphics = !!i717[0]
  i716.m_BlockingObjects = i717[1]
  i716.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i717[2] )
  return i716
}

Deserializers["Point"] = function (request, data, root) {
  var i718 = root || request.c( 'Point' )
  var i719 = data
  i718._occupied = !!i719[0]
  return i718
}

Deserializers["Episode6"] = function (request, data, root) {
  var i720 = root || request.c( 'Episode6' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, '_arm')
  request.r(i721[2], i721[3], 0, i720, '_points')
  request.r(i721[4], i721[5], 0, i720, '_cart')
  request.r(i721[6], i721[7], 0, i720, '_cartPoint')
  request.r(i721[8], i721[9], 0, i720, '_coinsText')
  request.r(i721[10], i721[11], 0, i720, '_textDamage')
  request.r(i721[12], i721[13], 0, i720, '_textHealth')
  request.r(i721[14], i721[15], 0, i720, '_textHealth2')
  request.r(i721[16], i721[17], 0, i720, '_textDamage2')
  i720.scaleDuration = i721[18]
  i720.moveDuration = i721[19]
  i720.targetScale = new pc.Vec3( i721[20], i721[21], i721[22] )
  request.r(i721[23], i721[24], 0, i720, '_particleDragon')
  request.r(i721[25], i721[26], 0, i720, '_particleCards')
  return i720
}

Deserializers["Episode2"] = function (request, data, root) {
  var i722 = root || request.c( 'Episode2' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, '_arm')
  request.r(i723[2], i723[3], 0, i722, '_points')
  request.r(i723[4], i723[5], 0, i722, '_unit1')
  request.r(i723[6], i723[7], 0, i722, '_unit2')
  request.r(i723[8], i723[9], 0, i722, '_particleSystem1')
  request.r(i723[10], i723[11], 0, i722, '_particleSystem2')
  request.r(i723[12], i723[13], 0, i722, '_textCoins')
  request.r(i723[14], i723[15], 0, i722, '_textDamage')
  request.r(i723[16], i723[17], 0, i722, '_textHealth')
  request.r(i723[18], i723[19], 0, i722, '_textHealth2')
  request.r(i723[20], i723[21], 0, i722, '_textDamage2')
  i722.scaleDuration = i723[22]
  i722.moveDuration = i723[23]
  i722.targetScale = new pc.Vec3( i723[24], i723[25], i723[26] )
  return i722
}

Deserializers["Episode5"] = function (request, data, root) {
  var i724 = root || request.c( 'Episode5' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_card1_1_2')
  request.r(i725[2], i725[3], 0, i724, '_card1_2_2')
  request.r(i725[4], i725[5], 0, i724, '_card1_3_2')
  request.r(i725[6], i725[7], 0, i724, '_card1_1')
  request.r(i725[8], i725[9], 0, i724, '_card2_1')
  request.r(i725[10], i725[11], 0, i724, '_coinsText')
  request.r(i725[12], i725[13], 0, i724, '_particleSystem')
  return i724
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i726 = root || request.c( 'Episode4_1' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_cart1__2')
  request.r(i727[2], i727[3], 0, i726, '_cart2__2')
  request.r(i727[4], i727[5], 0, i726, '_cart3__2')
  request.r(i727[6], i727[7], 0, i726, '_cart1_1')
  request.r(i727[8], i727[9], 0, i726, '_cart2_1')
  request.r(i727[10], i727[11], 0, i726, '_cart3_1')
  request.r(i727[12], i727[13], 0, i726, '_arm')
  request.r(i727[14], i727[15], 0, i726, '_coinText')
  request.r(i727[16], i727[17], 0, i726, '_particleSystem')
  request.r(i727[18], i727[19], 0, i726, '_particleDragon')
  return i726
}

Deserializers["UpdateButton"] = function (request, data, root) {
  var i728 = root || request.c( 'UpdateButton' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '_episode')
  request.r(i729[2], i729[3], 0, i728, '_arm')
  return i728
}

Deserializers["Episode3"] = function (request, data, root) {
  var i730 = root || request.c( 'Episode3' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, '_battle')
  request.r(i731[2], i731[3], 0, i730, '_button')
  request.r(i731[4], i731[5], 0, i730, '_cardDracone')
  request.r(i731[6], i731[7], 0, i730, '_point')
  request.r(i731[8], i731[9], 0, i730, '_cardEnemye1')
  request.r(i731[10], i731[11], 0, i730, '_cardEnemye2')
  request.r(i731[12], i731[13], 0, i730, '_cardEnemye3')
  request.r(i731[14], i731[15], 0, i730, '_cardDragon1')
  request.r(i731[16], i731[17], 0, i730, '_cardDragon2')
  request.r(i731[18], i731[19], 0, i730, '_cardDragon3')
  request.r(i731[20], i731[21], 0, i730, '_particleSystem1')
  request.r(i731[22], i731[23], 0, i730, '_particleSystem2')
  request.r(i731[24], i731[25], 0, i730, '_particleSystem3')
  request.r(i731[26], i731[27], 0, i730, '_particleButton')
  request.r(i731[28], i731[29], 0, i730, '_textCoins')
  request.r(i731[30], i731[31], 0, i730, '_winVictoty')
  request.r(i731[32], i731[33], 0, i730, '_winInscription')
  request.r(i731[34], i731[35], 0, i730, '_winInscription2')
  request.r(i731[36], i731[37], 0, i730, '_winInscription3')
  request.r(i731[38], i731[39], 0, i730, '_parentsDisplay')
  request.r(i731[40], i731[41], 0, i730, '_cardL')
  return i730
}

Deserializers["Episode7"] = function (request, data, root) {
  var i732 = root || request.c( 'Episode7' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'button')
  request.r(i733[2], i733[3], 0, i732, '_battle')
  request.r(i733[4], i733[5], 0, i732, '_button')
  request.r(i733[6], i733[7], 0, i732, '_cardEnemye1')
  request.r(i733[8], i733[9], 0, i732, '_cardEnemye2')
  request.r(i733[10], i733[11], 0, i732, '_cardEnemye3')
  request.r(i733[12], i733[13], 0, i732, '_cardEnemye4')
  request.r(i733[14], i733[15], 0, i732, '_cardEnemye5')
  request.r(i733[16], i733[17], 0, i732, '_cardEnemye6')
  request.r(i733[18], i733[19], 0, i732, '_cardDragon1')
  request.r(i733[20], i733[21], 0, i732, '_cardDragon2')
  request.r(i733[22], i733[23], 0, i732, '_cardDragon3')
  request.r(i733[24], i733[25], 0, i732, '_particleSystem1')
  request.r(i733[26], i733[27], 0, i732, '_particleSystem2')
  request.r(i733[28], i733[29], 0, i732, '_particleSystem3')
  request.r(i733[30], i733[31], 0, i732, '_particleSystem4')
  request.r(i733[32], i733[33], 0, i732, '_particleSystem5')
  request.r(i733[34], i733[35], 0, i732, '_particleSystem6')
  request.r(i733[36], i733[37], 0, i732, '_winVictoty')
  request.r(i733[38], i733[39], 0, i732, '_winFinal')
  request.r(i733[40], i733[41], 0, i732, '_particleSystem')
  request.r(i733[42], i733[43], 0, i732, '_particleDragon')
  request.r(i733[44], i733[45], 0, i732, '_episode3')
  return i732
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i734 = root || request.c( 'Episode4_2' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, '_buttonF')
  request.r(i735[2], i735[3], 0, i734, '_battle')
  request.r(i735[4], i735[5], 0, i734, '_button')
  request.r(i735[6], i735[7], 0, i734, '_cardEnemye1')
  request.r(i735[8], i735[9], 0, i734, '_cardEnemye2')
  request.r(i735[10], i735[11], 0, i734, '_cardEnemye3')
  request.r(i735[12], i735[13], 0, i734, '_cardDracone1')
  request.r(i735[14], i735[15], 0, i734, '_cardDracone2')
  request.r(i735[16], i735[17], 0, i734, '_cardDracone3')
  request.r(i735[18], i735[19], 0, i734, '_winDefeat')
  request.r(i735[20], i735[21], 0, i734, '_winFinal')
  request.r(i735[22], i735[23], 0, i734, '_particleSystem1')
  request.r(i735[24], i735[25], 0, i734, '_particleSystem2')
  request.r(i735[26], i735[27], 0, i734, '_particleSystem3')
  request.r(i735[28], i735[29], 0, i734, '_particleSystem4')
  request.r(i735[30], i735[31], 0, i734, '_particleSystem5')
  request.r(i735[32], i735[33], 0, i734, '_particleSystem6')
  request.r(i735[34], i735[35], 0, i734, '_particleSystem7')
  request.r(i735[36], i735[37], 0, i734, '_particleSystem8')
  request.r(i735[38], i735[39], 0, i734, '_particleSystem9')
  request.r(i735[40], i735[41], 0, i734, '_particleButtun')
  request.r(i735[42], i735[43], 0, i734, '_particleDragon')
  request.r(i735[44], i735[45], 0, i734, '_layer')
  request.r(i735[46], i735[47], 0, i734, '_winInscription')
  request.r(i735[48], i735[49], 0, i734, '_winInscription2')
  request.r(i735[50], i735[51], 0, i734, '_winInscription3')
  return i734
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i736 = root || request.c( 'Episode5_2' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, '_battle')
  request.r(i737[2], i737[3], 0, i736, '_button')
  request.r(i737[4], i737[5], 0, i736, '_cardEnemye1')
  request.r(i737[6], i737[7], 0, i736, '_cardEnemye2')
  request.r(i737[8], i737[9], 0, i736, '_cardEnemye3')
  request.r(i737[10], i737[11], 0, i736, '_cardDracone1')
  request.r(i737[12], i737[13], 0, i736, '_cardDracone2')
  request.r(i737[14], i737[15], 0, i736, '_cardDracone3')
  request.r(i737[16], i737[17], 0, i736, '_cardDracone4')
  request.r(i737[18], i737[19], 0, i736, '_winDefeat')
  request.r(i737[20], i737[21], 0, i736, '_winFinal')
  request.r(i737[22], i737[23], 0, i736, '_particleSystem1')
  request.r(i737[24], i737[25], 0, i736, '_particleSystem2')
  request.r(i737[26], i737[27], 0, i736, '_particleSystem3')
  request.r(i737[28], i737[29], 0, i736, '_particleSystem4')
  request.r(i737[30], i737[31], 0, i736, '_particleSystem5')
  request.r(i737[32], i737[33], 0, i736, '_particleSystem6')
  request.r(i737[34], i737[35], 0, i736, '_particleSystem7')
  request.r(i737[36], i737[37], 0, i736, '_particleSystem')
  request.r(i737[38], i737[39], 0, i736, '_layer')
  request.r(i737[40], i737[41], 0, i736, '_winInscription')
  request.r(i737[42], i737[43], 0, i736, '_winInscription2')
  request.r(i737[44], i737[45], 0, i736, '_winInscription3')
  return i736
}

Deserializers["Buttle"] = function (request, data, root) {
  var i738 = root || request.c( 'Buttle' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, '_episode')
  request.r(i739[2], i739[3], 0, i738, '_buttonShop')
  request.r(i739[4], i739[5], 0, i738, '_buttonButtle')
  request.r(i739[6], i739[7], 0, i738, '_particle')
  request.r(i739[8], i739[9], 0, i738, '_episode7')
  request.r(i739[10], i739[11], 0, i738, '_episode4_2')
  return i738
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i740 = root || request.c( 'ArmAnimation' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, '_targetButton')
  i740.flyDuration = i741[2]
  i740.shrinkDuration = i741[3]
  i740.restoreDuration = i741[4]
  return i740
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Button' )
  var i743 = data
  i742.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i743[0], i742.m_OnClick)
  i742.m_Navigation = request.d('UnityEngine.UI.Navigation', i743[1], i742.m_Navigation)
  i742.m_Transition = i743[2]
  i742.m_Colors = request.d('UnityEngine.UI.ColorBlock', i743[3], i742.m_Colors)
  i742.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i743[4], i742.m_SpriteState)
  i742.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i743[5], i742.m_AnimationTriggers)
  i742.m_Interactable = !!i743[6]
  request.r(i743[7], i743[8], 0, i742, 'm_TargetGraphic')
  return i742
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i745 = data
  i744.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i745[0], i744.m_PersistentCalls)
  return i744
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i747 = data
  var i749 = i747[0]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(request.d('UnityEngine.Events.PersistentCall', i749[i + 0]));
  }
  i746.m_Calls = i748
  return i746
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_Target')
  i752.m_TargetAssemblyTypeName = i753[2]
  i752.m_MethodName = i753[3]
  i752.m_Mode = i753[4]
  i752.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i753[5], i752.m_Arguments)
  i752.m_CallState = i753[6]
  return i752
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_ObjectArgument')
  i754.m_ObjectArgumentAssemblyTypeName = i755[2]
  i754.m_IntArgument = i755[3]
  i754.m_FloatArgument = i755[4]
  i754.m_StringArgument = i755[5]
  i754.m_BoolArgument = !!i755[6]
  return i754
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i757 = data
  i756.m_Mode = i757[0]
  i756.m_WrapAround = !!i757[1]
  request.r(i757[2], i757[3], 0, i756, 'm_SelectOnUp')
  request.r(i757[4], i757[5], 0, i756, 'm_SelectOnDown')
  request.r(i757[6], i757[7], 0, i756, 'm_SelectOnLeft')
  request.r(i757[8], i757[9], 0, i756, 'm_SelectOnRight')
  return i756
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i759 = data
  i758.m_NormalColor = new pc.Color(i759[0], i759[1], i759[2], i759[3])
  i758.m_HighlightedColor = new pc.Color(i759[4], i759[5], i759[6], i759[7])
  i758.m_PressedColor = new pc.Color(i759[8], i759[9], i759[10], i759[11])
  i758.m_SelectedColor = new pc.Color(i759[12], i759[13], i759[14], i759[15])
  i758.m_DisabledColor = new pc.Color(i759[16], i759[17], i759[18], i759[19])
  i758.m_ColorMultiplier = i759[20]
  i758.m_FadeDuration = i759[21]
  return i758
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_HighlightedSprite')
  request.r(i761[2], i761[3], 0, i760, 'm_PressedSprite')
  request.r(i761[4], i761[5], 0, i760, 'm_SelectedSprite')
  request.r(i761[6], i761[7], 0, i760, 'm_DisabledSprite')
  return i760
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i763 = data
  i762.m_NormalTrigger = i763[0]
  i762.m_HighlightedTrigger = i763[1]
  i762.m_PressedTrigger = i763[2]
  i762.m_SelectedTrigger = i763[3]
  i762.m_DisabledTrigger = i763[4]
  return i762
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_FirstSelected')
  i764.m_sendNavigationEvents = !!i765[2]
  i764.m_DragThreshold = i765[3]
  return i764
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i767 = data
  i766.m_HorizontalAxis = i767[0]
  i766.m_VerticalAxis = i767[1]
  i766.m_SubmitButton = i767[2]
  i766.m_CancelButton = i767[3]
  i766.m_InputActionsPerSecond = i767[4]
  i766.m_RepeatDelay = i767[5]
  i766.m_ForceModuleActive = !!i767[6]
  i766.m_SendPointerHoverToParent = !!i767[7]
  return i766
}

Deserializers["Scenario"] = function (request, data, root) {
  var i768 = root || request.c( 'Scenario' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_episode1')
  request.r(i769[2], i769[3], 0, i768, '_episode2')
  request.r(i769[4], i769[5], 0, i768, '_episode3')
  request.r(i769[6], i769[7], 0, i768, '_episode4v2')
  return i768
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i770 = root || request.c( 'Episode5_1' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, '_card1')
  request.r(i771[2], i771[3], 0, i770, '_card2')
  request.r(i771[4], i771[5], 0, i770, '_episode5')
  request.r(i771[6], i771[7], 0, i770, 'episode4_1')
  request.r(i771[8], i771[9], 0, i770, 'episode5_2')
  request.r(i771[10], i771[11], 0, i770, '_texCoins')
  request.r(i771[12], i771[13], 0, i770, '_particleSystem')
  return i770
}

Deserializers["Episode4v2"] = function (request, data, root) {
  var i772 = root || request.c( 'Episode4v2' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, '_point1')
  request.r(i773[2], i773[3], 0, i772, '_point2')
  request.r(i773[4], i773[5], 0, i772, '_point3')
  request.r(i773[6], i773[7], 0, i772, '_point4')
  request.r(i773[8], i773[9], 0, i772, '_point5')
  request.r(i773[10], i773[11], 0, i772, '_point6')
  request.r(i773[12], i773[13], 0, i772, '_buttle')
  var i775 = i773[14]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i772._dragonCards = i774
  var i777 = i773[15]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i772._nonDragonCards = i776
  request.r(i773[16], i773[17], 0, i772, '_armO')
  request.r(i773[18], i773[19], 0, i772, '_armU')
  i772._cardsDragon = i773[20]
  i772._isUpgrade = !!i773[21]
  i772._isButtle = !!i773[22]
  i772._isArm = !!i773[23]
  var i779 = i773[24]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 1, i778, '')
  }
  i772._cards = i778
  request.r(i773[25], i773[26], 0, i772, '_card')
  request.r(i773[27], i773[28], 0, i772, '_updateButton')
  request.r(i773[29], i773[30], 0, i772, '_TMony')
  request.r(i773[31], i773[32], 0, i772, '_buttleButton')
  request.r(i773[33], i773[34], 0, i772, '_pointS1')
  request.r(i773[35], i773[36], 0, i772, '_pointS2')
  request.r(i773[37], i773[38], 0, i772, '_pointS3')
  request.r(i773[39], i773[40], 0, i772, '_arm')
  request.r(i773[41], i773[42], 0, i772, '_arm2')
  request.r(i773[43], i773[44], 0, i772, '_cardPointUpgrade')
  request.r(i773[45], i773[46], 0, i772, '_textHealth3')
  request.r(i773[47], i773[48], 0, i772, '_textDamage3')
  request.r(i773[49], i773[50], 0, i772, '_layer')
  request.r(i773[51], i773[52], 0, i772, '_particle')
  request.r(i773[53], i773[54], 0, i772, '_particle2')
  request.r(i773[55], i773[56], 0, i772, '_particleU')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i783 = data
  i782.ambientIntensity = i783[0]
  i782.reflectionIntensity = i783[1]
  i782.ambientMode = i783[2]
  i782.ambientLight = new pc.Color(i783[3], i783[4], i783[5], i783[6])
  i782.ambientSkyColor = new pc.Color(i783[7], i783[8], i783[9], i783[10])
  i782.ambientGroundColor = new pc.Color(i783[11], i783[12], i783[13], i783[14])
  i782.ambientEquatorColor = new pc.Color(i783[15], i783[16], i783[17], i783[18])
  i782.fogColor = new pc.Color(i783[19], i783[20], i783[21], i783[22])
  i782.fogEndDistance = i783[23]
  i782.fogStartDistance = i783[24]
  i782.fogDensity = i783[25]
  i782.fog = !!i783[26]
  request.r(i783[27], i783[28], 0, i782, 'skybox')
  i782.fogMode = i783[29]
  var i785 = i783[30]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i785[i + 0]) );
  }
  i782.lightmaps = i784
  i782.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i783[31], i782.lightProbes)
  i782.lightmapsMode = i783[32]
  i782.mixedBakeMode = i783[33]
  i782.environmentLightingMode = i783[34]
  i782.ambientProbe = new pc.SphericalHarmonicsL2(i783[35])
  i782.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i783[36])
  i782.useReferenceAmbientProbe = !!i783[37]
  request.r(i783[38], i783[39], 0, i782, 'customReflection')
  request.r(i783[40], i783[41], 0, i782, 'defaultReflection')
  i782.defaultReflectionMode = i783[42]
  i782.defaultReflectionResolution = i783[43]
  i782.sunLightObjectId = i783[44]
  i782.pixelLightCount = i783[45]
  i782.defaultReflectionHDR = !!i783[46]
  i782.hasLightDataAsset = !!i783[47]
  i782.hasManualGenerate = !!i783[48]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'lightmapColor')
  request.r(i789[2], i789[3], 0, i788, 'lightmapDirection')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i790 = root || new UnityEngine.LightProbes()
  var i791 = data
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i797 = data
  i796.enabled = !!i797[0]
  i796.type = i797[1]
  i796.color = new pc.Color(i797[2], i797[3], i797[4], i797[5])
  i796.cullingMask = i797[6]
  i796.intensity = i797[7]
  i796.range = i797[8]
  i796.spotAngle = i797[9]
  i796.shadows = i797[10]
  i796.shadowNormalBias = i797[11]
  i796.shadowBias = i797[12]
  i796.shadowStrength = i797[13]
  i796.shadowResolution = i797[14]
  i796.lightmapBakeType = i797[15]
  i796.renderMode = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'cookie')
  i796.cookieSize = i797[19]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i799 = data
  i798.AdditionalLightsPerObjectLimit = i799[0]
  i798.AdditionalLightsRenderingMode = i799[1]
  i798.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i799[2], i798.LightRenderingMode)
  i798.ColorGradingLutSize = i799[3]
  i798.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i799[4], i798.ColorGradingMode)
  i798.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i799[5], i798.MainLightRenderingMode)
  i798.MainLightRenderingModeValue = i799[6]
  i798.SupportsMainLightShadows = !!i799[7]
  i798.MixedLightingSupported = !!i799[8]
  i798.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i799[9], i798.MsaaQuality)
  i798.MSAA = i799[10]
  i798.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i799[11], i798.OpaqueDownsampling)
  i798.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i799[12], i798.MainLightShadowmapResolution)
  i798.MainLightShadowmapResolutionValue = i799[13]
  i798.SupportsSoftShadows = !!i799[14]
  i798.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i799[15], i798.SoftShadowQuality)
  i798.SoftShadowQualityValue = i799[16]
  i798.ShadowDistance = i799[17]
  i798.ShadowCascadeCount = i799[18]
  i798.Cascade2Split = i799[19]
  i798.Cascade3Split = new pc.Vec2( i799[20], i799[21] )
  i798.Cascade4Split = new pc.Vec3( i799[22], i799[23], i799[24] )
  i798.CascadeBorder = i799[25]
  i798.ShadowDepthBias = i799[26]
  i798.ShadowNormalBias = i799[27]
  i798.RenderScale = i799[28]
  i798.RequireDepthTexture = !!i799[29]
  i798.RequireOpaqueTexture = !!i799[30]
  i798.SupportsHDR = !!i799[31]
  i798.SupportsTerrainHoles = !!i799[32]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i801 = data
  i800.Disabled = i801[0]
  i800.PerVertex = i801[1]
  i800.PerPixel = i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i803 = data
  i802.LowDynamicRange = i803[0]
  i802.HighDynamicRange = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i805 = data
  i804.Disabled = i805[0]
  i804._2x = i805[1]
  i804._4x = i805[2]
  i804._8x = i805[3]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i807 = data
  i806.None = i807[0]
  i806._2xBilinear = i807[1]
  i806._4xBox = i807[2]
  i806._4xBilinear = i807[3]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i809 = data
  i808._256 = i809[0]
  i808._512 = i809[1]
  i808._1024 = i809[2]
  i808._2048 = i809[3]
  i808._4096 = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i811 = data
  i810.UsePipelineSettings = i811[0]
  i810.Low = i811[1]
  i810.Medium = i811[2]
  i810.High = i811[3]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i815[i + 0]));
  }
  i812.ShaderCompilationErrors = i814
  i812.name = i813[1]
  i812.guid = i813[2]
  var i817 = i813[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.shaderDefinedKeywords = i816
  var i819 = i813[4]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i819[i + 0]) );
  }
  i812.passes = i818
  var i821 = i813[5]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i821[i + 0]) );
  }
  i812.usePasses = i820
  var i823 = i813[6]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i823[i + 0]) );
  }
  i812.defaultParameterValues = i822
  request.r(i813[7], i813[8], 0, i812, 'unityFallbackShader')
  i812.readDepth = !!i813[9]
  i812.isCreatedByShaderGraph = !!i813[10]
  i812.compiled = !!i813[11]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i827 = data
  i826.shaderName = i827[0]
  i826.errorMessage = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i832 = root || new pc.UnityShaderPass()
  var i833 = data
  i832.id = i833[0]
  i832.subShaderIndex = i833[1]
  i832.name = i833[2]
  i832.passType = i833[3]
  i832.grabPassTextureName = i833[4]
  i832.usePass = !!i833[5]
  i832.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[6], i832.zTest)
  i832.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[7], i832.zWrite)
  i832.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[8], i832.culling)
  i832.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[9], i832.blending)
  i832.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[10], i832.alphaBlending)
  i832.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[11], i832.colorWriteMask)
  i832.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[12], i832.offsetUnits)
  i832.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[13], i832.offsetFactor)
  i832.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[14], i832.stencilRef)
  i832.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[15], i832.stencilReadMask)
  i832.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[16], i832.stencilWriteMask)
  i832.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[17], i832.stencilOp)
  i832.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[18], i832.stencilOpFront)
  i832.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[19], i832.stencilOpBack)
  var i835 = i833[20]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i835[i + 0]) );
  }
  i832.tags = i834
  var i837 = i833[21]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.passDefinedKeywords = i836
  var i839 = i833[22]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i839[i + 0]) );
  }
  i832.passDefinedKeywordGroups = i838
  var i841 = i833[23]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i841[i + 0]) );
  }
  i832.variants = i840
  var i843 = i833[24]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i832.excludedVariants = i842
  i832.hasDepthReader = !!i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i845 = data
  i844.val = i845[0]
  i844.name = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i847 = data
  i846.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[0], i846.src)
  i846.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[1], i846.dst)
  i846.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[2], i846.op)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i849 = data
  i848.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.pass)
  i848.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.fail)
  i848.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.zFail)
  i848.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[3], i848.comp)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i853 = data
  i852.name = i853[0]
  i852.value = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.hasDiscard = !!i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i863 = data
  i862.passId = i863[0]
  i862.subShaderIndex = i863[1]
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.vertexProgram = i863[3]
  i862.fragmentProgram = i863[4]
  i862.exportedForWebGl2 = !!i863[5]
  i862.readDepth = !!i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'shader')
  i868.pass = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i873 = data
  i872.name = i873[0]
  i872.type = i873[1]
  i872.value = new pc.Vec4( i873[2], i873[3], i873[4], i873[5] )
  i872.textureValue = i873[6]
  i872.shaderPropertyFlag = i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'texture')
  i874.aabb = i875[3]
  i874.vertices = i875[4]
  i874.triangles = i875[5]
  i874.textureRect = UnityEngine.Rect.MinMaxRect(i875[6], i875[7], i875[8], i875[9])
  i874.packedRect = UnityEngine.Rect.MinMaxRect(i875[10], i875[11], i875[12], i875[13])
  i874.border = new pc.Vec4( i875[14], i875[15], i875[16], i875[17] )
  i874.transparency = i875[18]
  i874.bounds = i875[19]
  i874.pixelsPerUnit = i875[20]
  i874.textureWidth = i875[21]
  i874.textureHeight = i875[22]
  i874.nativeSize = new pc.Vec2( i875[23], i875[24] )
  i874.pivot = new pc.Vec2( i875[25], i875[26] )
  i874.textureRectOffset = new pc.Vec2( i875[27], i875[28] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i877 = data
  i876.name = i877[0]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i879 = data
  i878.name = i879[0]
  i878.wrapMode = i879[1]
  i878.isLooping = !!i879[2]
  i878.length = i879[3]
  var i881 = i879[4]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i881[i + 0]) );
  }
  i878.curves = i880
  var i883 = i879[5]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i883[i + 0]) );
  }
  i878.events = i882
  i878.halfPrecision = !!i879[6]
  i878._frameRate = i879[7]
  i878.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i879[8], i878.localBounds)
  i878.hasMuscleCurves = !!i879[9]
  var i885 = i879[10]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i878.clipMuscleConstant = i884
  i878.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i879[11], i878.clipBindingConstant)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i889 = data
  i888.path = i889[0]
  i888.hash = i889[1]
  i888.componentType = i889[2]
  i888.property = i889[3]
  i888.keys = i889[4]
  var i891 = i889[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i891[i + 0]) );
  }
  i888.objectReferenceKeys = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i895 = data
  i894.time = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'value')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i899 = data
  i898.functionName = i899[0]
  i898.floatParameter = i899[1]
  i898.intParameter = i899[2]
  i898.stringParameter = i899[3]
  request.r(i899[4], i899[5], 0, i898, 'objectReferenceParameter')
  i898.time = i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i901 = data
  i900.center = new pc.Vec3( i901[0], i901[1], i901[2] )
  i900.extends = new pc.Vec3( i901[3], i901[4], i901[5] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i904.genericBindings = i906
  var i909 = i905[1]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i904.pptrCurveMapping = i908
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i911 = data
  i910.name = i911[0]
  i910.ascent = i911[1]
  i910.originalLineHeight = i911[2]
  i910.fontSize = i911[3]
  var i913 = i911[4]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i913[i + 0]) );
  }
  i910.characterInfo = i912
  request.r(i911[5], i911[6], 0, i910, 'texture')
  i910.originalFontSize = i911[7]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i917 = data
  i916.index = i917[0]
  i916.advance = i917[1]
  i916.bearing = i917[2]
  i916.glyphWidth = i917[3]
  i916.glyphHeight = i917[4]
  i916.minX = i917[5]
  i916.maxX = i917[6]
  i916.minY = i917[7]
  i916.maxY = i917[8]
  i916.uvBottomLeftX = i917[9]
  i916.uvBottomLeftY = i917[10]
  i916.uvBottomRightX = i917[11]
  i916.uvBottomRightY = i917[12]
  i916.uvTopLeftX = i917[13]
  i916.uvTopLeftY = i917[14]
  i916.uvTopRightX = i917[15]
  i916.uvTopRightY = i917[16]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i919 = data
  i918.name = i919[0]
  var i921 = i919[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i921[i + 0]) );
  }
  i918.layers = i920
  var i923 = i919[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i923[i + 0]) );
  }
  i918.parameters = i922
  i918.animationClips = i919[3]
  i918.avatarUnsupported = i919[4]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i927 = data
  i926.name = i927[0]
  i926.defaultWeight = i927[1]
  i926.blendingMode = i927[2]
  i926.avatarMask = i927[3]
  i926.syncedLayerIndex = i927[4]
  i926.syncedLayerAffectsTiming = !!i927[5]
  i926.syncedLayers = i927[6]
  i926.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i927[7], i926.stateMachine)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i929 = data
  i928.id = i929[0]
  i928.name = i929[1]
  i928.path = i929[2]
  var i931 = i929[3]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i931[i + 0]) );
  }
  i928.states = i930
  var i933 = i929[4]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i933[i + 0]) );
  }
  i928.machines = i932
  var i935 = i929[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i935[i + 0]) );
  }
  i928.entryStateTransitions = i934
  var i937 = i929[6]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i937[i + 0]) );
  }
  i928.exitStateTransitions = i936
  var i939 = i929[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i939[i + 0]) );
  }
  i928.anyStateTransitions = i938
  i928.defaultStateId = i929[8]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i943 = data
  i942.id = i943[0]
  i942.name = i943[1]
  i942.cycleOffset = i943[2]
  i942.cycleOffsetParameter = i943[3]
  i942.cycleOffsetParameterActive = !!i943[4]
  i942.mirror = !!i943[5]
  i942.mirrorParameter = i943[6]
  i942.mirrorParameterActive = !!i943[7]
  i942.motionId = i943[8]
  i942.nameHash = i943[9]
  i942.fullPathHash = i943[10]
  i942.speed = i943[11]
  i942.speedParameter = i943[12]
  i942.speedParameterActive = !!i943[13]
  i942.tag = i943[14]
  i942.tagHash = i943[15]
  i942.writeDefaultValues = !!i943[16]
  var i945 = i943[17]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i942.behaviours = i944
  var i947 = i943[18]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i947[i + 0]) );
  }
  i942.transitions = i946
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i953 = data
  i952.fullPath = i953[0]
  i952.canTransitionToSelf = !!i953[1]
  i952.duration = i953[2]
  i952.exitTime = i953[3]
  i952.hasExitTime = !!i953[4]
  i952.hasFixedDuration = !!i953[5]
  i952.interruptionSource = i953[6]
  i952.offset = i953[7]
  i952.orderedInterruption = !!i953[8]
  i952.destinationStateId = i953[9]
  i952.isExit = !!i953[10]
  i952.mute = !!i953[11]
  i952.solo = !!i953[12]
  var i955 = i953[13]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i955[i + 0]) );
  }
  i952.conditions = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i961 = data
  i960.destinationStateId = i961[0]
  i960.isExit = !!i961[1]
  i960.mute = !!i961[2]
  i960.solo = !!i961[3]
  var i963 = i961[4]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i963[i + 0]) );
  }
  i960.conditions = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i967 = data
  i966.defaultBool = !!i967[0]
  i966.defaultFloat = i967[1]
  i966.defaultInt = i967[2]
  i966.name = i967[3]
  i966.nameHash = i967[4]
  i966.type = i967[5]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i971[i + 0]) );
  }
  i968.files = i970
  i968.componentToPrefabIds = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i975 = data
  i974.path = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'unityObject')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i979[i + 0]) );
  }
  i976.scriptsExecutionOrder = i978
  var i981 = i977[1]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i981[i + 0]) );
  }
  i976.sortingLayers = i980
  var i983 = i977[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i983[i + 0]) );
  }
  i976.cullingLayers = i982
  i976.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i977[3], i976.timeSettings)
  i976.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i977[4], i976.physicsSettings)
  i976.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i977[5], i976.physics2DSettings)
  i976.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i977[6], i976.qualitySettings)
  i976.enableRealtimeShadows = !!i977[7]
  i976.enableAutoInstancing = !!i977[8]
  i976.enableDynamicBatching = !!i977[9]
  i976.lightmapEncodingQuality = i977[10]
  i976.desiredColorSpace = i977[11]
  var i985 = i977[12]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i976.allTags = i984
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i989 = data
  i988.name = i989[0]
  i988.value = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i993 = data
  i992.id = i993[0]
  i992.name = i993[1]
  i992.value = i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i997 = data
  i996.id = i997[0]
  i996.name = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i999 = data
  i998.fixedDeltaTime = i999[0]
  i998.maximumDeltaTime = i999[1]
  i998.timeScale = i999[2]
  i998.maximumParticleTimestep = i999[3]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1001 = data
  i1000.gravity = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.defaultSolverIterations = i1001[3]
  i1000.bounceThreshold = i1001[4]
  i1000.autoSyncTransforms = !!i1001[5]
  i1000.autoSimulation = !!i1001[6]
  var i1003 = i1001[7]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1003[i + 0]) );
  }
  i1000.collisionMatrix = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.layerId = i1007[1]
  i1006.otherLayerId = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'material')
  i1008.gravity = new pc.Vec2( i1009[2], i1009[3] )
  i1008.positionIterations = i1009[4]
  i1008.velocityIterations = i1009[5]
  i1008.velocityThreshold = i1009[6]
  i1008.maxLinearCorrection = i1009[7]
  i1008.maxAngularCorrection = i1009[8]
  i1008.maxTranslationSpeed = i1009[9]
  i1008.maxRotationSpeed = i1009[10]
  i1008.baumgarteScale = i1009[11]
  i1008.baumgarteTOIScale = i1009[12]
  i1008.timeToSleep = i1009[13]
  i1008.linearSleepTolerance = i1009[14]
  i1008.angularSleepTolerance = i1009[15]
  i1008.defaultContactOffset = i1009[16]
  i1008.autoSimulation = !!i1009[17]
  i1008.queriesHitTriggers = !!i1009[18]
  i1008.queriesStartInColliders = !!i1009[19]
  i1008.callbacksOnDisable = !!i1009[20]
  i1008.reuseCollisionCallbacks = !!i1009[21]
  i1008.autoSyncTransforms = !!i1009[22]
  var i1011 = i1009[23]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1011[i + 0]) );
  }
  i1008.collisionMatrix = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.layerId = i1015[1]
  i1014.otherLayerId = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1019[i + 0]) );
  }
  i1016.qualityLevels = i1018
  var i1021 = i1017[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1016.names = i1020
  i1016.shadows = i1017[2]
  i1016.anisotropicFiltering = i1017[3]
  i1016.antiAliasing = i1017[4]
  i1016.lodBias = i1017[5]
  i1016.shadowCascades = i1017[6]
  i1016.shadowDistance = i1017[7]
  i1016.shadowmaskMode = i1017[8]
  i1016.shadowProjection = i1017[9]
  i1016.shadowResolution = i1017[10]
  i1016.softParticles = !!i1017[11]
  i1016.softVegetation = !!i1017[12]
  i1016.activeColorSpace = i1017[13]
  i1016.desiredColorSpace = i1017[14]
  i1016.masterTextureLimit = i1017[15]
  i1016.maxQueuedFrames = i1017[16]
  i1016.particleRaycastBudget = i1017[17]
  i1016.pixelLightCount = i1017[18]
  i1016.realtimeReflectionProbes = !!i1017[19]
  i1016.shadowCascade2Split = i1017[20]
  i1016.shadowCascade4Split = new pc.Vec3( i1017[21], i1017[22], i1017[23] )
  i1016.streamingMipmapsActive = !!i1017[24]
  i1016.vSyncCount = i1017[25]
  i1016.asyncUploadBufferSize = i1017[26]
  i1016.asyncUploadTimeSlice = i1017[27]
  i1016.billboardsFaceCameraPosition = !!i1017[28]
  i1016.shadowNearPlaneOffset = i1017[29]
  i1016.streamingMipmapsMemoryBudget = i1017[30]
  i1016.maximumLODLevel = i1017[31]
  i1016.streamingMipmapsAddAllCameras = !!i1017[32]
  i1016.streamingMipmapsMaxLevelReduction = i1017[33]
  i1016.streamingMipmapsRenderersPerFrame = i1017[34]
  i1016.resolutionScalingFixedDPIFactor = i1017[35]
  i1016.streamingMipmapsMaxFileIORequests = i1017[36]
  i1016.currentQualityLevel = i1017[37]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1027 = data
  i1026.weight = i1027[0]
  i1026.vertices = i1027[1]
  i1026.normals = i1027[2]
  i1026.tangents = i1027[3]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1031 = data
  i1030.mode = i1031[0]
  i1030.parameter = i1031[1]
  i1030.threshold = i1031[2]
  return i1030
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[23],"84":[85],"86":[87],"88":[87],"29":[0],"89":[0],"90":[91],"92":[93],"94":[23],"95":[23],"25":[23],"96":[50],"97":[91],"98":[99],"100":[0],"101":[0],"31":[29],"3":[1,0],"102":[0],"30":[29],"103":[0],"104":[0],"105":[0],"106":[0],"107":[0],"108":[0],"109":[0],"110":[0],"111":[0],"112":[1,0],"113":[0],"114":[0],"115":[0],"116":[0],"10":[1,0],"117":[0],"118":[46],"119":[46],"47":[46],"120":[46],"121":[23],"122":[23],"123":[91]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Episode1","UnityEngine.GameObject","UnityEngine.UI.Text","Card2V","UnityEngine.Font","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Mesh","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","ParticleFollowUI","ClickCta","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Point","Episode6","Episode2","Episode5","Episode4_1","UpdateButton","Episode4v2","Episode3","Episode7","Episode4_2","Episode5_2","Buttle","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "16.9";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3055";

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

Deserializers.buildID = "6cdfdefa-bcbe-4f00-b18b-d46164be90fa";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

