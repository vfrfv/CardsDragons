var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5174 = root || request.c( 'UnityEngine.JointSpring' )
  var i5175 = data
  i5174.spring = i5175[0]
  i5174.damper = i5175[1]
  i5174.targetPosition = i5175[2]
  return i5174
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5176 = root || request.c( 'UnityEngine.JointMotor' )
  var i5177 = data
  i5176.m_TargetVelocity = i5177[0]
  i5176.m_Force = i5177[1]
  i5176.m_FreeSpin = i5177[2]
  return i5176
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5178 = root || request.c( 'UnityEngine.JointLimits' )
  var i5179 = data
  i5178.m_Min = i5179[0]
  i5178.m_Max = i5179[1]
  i5178.m_Bounciness = i5179[2]
  i5178.m_BounceMinVelocity = i5179[3]
  i5178.m_ContactDistance = i5179[4]
  i5178.minBounce = i5179[5]
  i5178.maxBounce = i5179[6]
  return i5178
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5180 = root || request.c( 'UnityEngine.JointDrive' )
  var i5181 = data
  i5180.m_PositionSpring = i5181[0]
  i5180.m_PositionDamper = i5181[1]
  i5180.m_MaximumForce = i5181[2]
  i5180.m_UseAcceleration = i5181[3]
  return i5180
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5182 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5183 = data
  i5182.m_Spring = i5183[0]
  i5182.m_Damper = i5183[1]
  return i5182
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5184 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5185 = data
  i5184.m_Limit = i5185[0]
  i5184.m_Bounciness = i5185[1]
  i5184.m_ContactDistance = i5185[2]
  return i5184
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5186 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5187 = data
  i5186.m_ExtremumSlip = i5187[0]
  i5186.m_ExtremumValue = i5187[1]
  i5186.m_AsymptoteSlip = i5187[2]
  i5186.m_AsymptoteValue = i5187[3]
  i5186.m_Stiffness = i5187[4]
  return i5186
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5188 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5189 = data
  i5188.m_LowerAngle = i5189[0]
  i5188.m_UpperAngle = i5189[1]
  return i5188
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5190 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5191 = data
  i5190.m_MotorSpeed = i5191[0]
  i5190.m_MaximumMotorTorque = i5191[1]
  return i5190
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5192 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5193 = data
  i5192.m_DampingRatio = i5193[0]
  i5192.m_Frequency = i5193[1]
  i5192.m_Angle = i5193[2]
  return i5192
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5194 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5195 = data
  i5194.m_LowerTranslation = i5195[0]
  i5194.m_UpperTranslation = i5195[1]
  return i5194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5197 = data
  i5196.name = i5197[0]
  i5196.width = i5197[1]
  i5196.height = i5197[2]
  i5196.mipmapCount = i5197[3]
  i5196.anisoLevel = i5197[4]
  i5196.filterMode = i5197[5]
  i5196.hdr = !!i5197[6]
  i5196.format = i5197[7]
  i5196.wrapMode = i5197[8]
  i5196.alphaIsTransparency = !!i5197[9]
  i5196.alphaSource = i5197[10]
  i5196.graphicsFormat = i5197[11]
  i5196.sRGBTexture = !!i5197[12]
  i5196.desiredColorSpace = i5197[13]
  i5196.wrapU = i5197[14]
  i5196.wrapV = i5197[15]
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5199 = data
  i5198.pivot = new pc.Vec2( i5199[0], i5199[1] )
  i5198.anchorMin = new pc.Vec2( i5199[2], i5199[3] )
  i5198.anchorMax = new pc.Vec2( i5199[4], i5199[5] )
  i5198.sizeDelta = new pc.Vec2( i5199[6], i5199[7] )
  i5198.anchoredPosition3D = new pc.Vec3( i5199[8], i5199[9], i5199[10] )
  i5198.rotation = new pc.Quat(i5199[11], i5199[12], i5199[13], i5199[14])
  i5198.scale = new pc.Vec3( i5199[15], i5199[16], i5199[17] )
  return i5198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5201 = data
  i5200.cullTransparentMesh = !!i5201[0]
  return i5200
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5202 = root || request.c( 'UnityEngine.UI.Image' )
  var i5203 = data
  request.r(i5203[0], i5203[1], 0, i5202, 'm_Sprite')
  i5202.m_Type = i5203[2]
  i5202.m_PreserveAspect = !!i5203[3]
  i5202.m_FillCenter = !!i5203[4]
  i5202.m_FillMethod = i5203[5]
  i5202.m_FillAmount = i5203[6]
  i5202.m_FillClockwise = !!i5203[7]
  i5202.m_FillOrigin = i5203[8]
  i5202.m_UseSpriteMesh = !!i5203[9]
  i5202.m_PixelsPerUnitMultiplier = i5203[10]
  request.r(i5203[11], i5203[12], 0, i5202, 'm_Material')
  i5202.m_Maskable = !!i5203[13]
  i5202.m_Color = new pc.Color(i5203[14], i5203[15], i5203[16], i5203[17])
  i5202.m_RaycastTarget = !!i5203[18]
  i5202.m_RaycastPadding = new pc.Vec4( i5203[19], i5203[20], i5203[21], i5203[22] )
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5205 = data
  request.r(i5205[0], i5205[1], 0, i5204, 'animatorController')
  request.r(i5205[2], i5205[3], 0, i5204, 'avatar')
  i5204.updateMode = i5205[4]
  i5204.hasTransformHierarchy = !!i5205[5]
  i5204.applyRootMotion = !!i5205[6]
  var i5207 = i5205[7]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 2) {
  request.r(i5207[i + 0], i5207[i + 1], 2, i5206, '')
  }
  i5204.humanBones = i5206
  i5204.enabled = !!i5205[8]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5211 = data
  i5210.name = i5211[0]
  i5210.tagId = i5211[1]
  i5210.enabled = !!i5211[2]
  i5210.isStatic = !!i5211[3]
  i5210.layer = i5211[4]
  return i5210
}

Deserializers["Episode1"] = function (request, data, root) {
  var i5212 = root || request.c( 'Episode1' )
  var i5213 = data
  request.r(i5213[0], i5213[1], 0, i5212, '_arm')
  request.r(i5213[2], i5213[3], 0, i5212, '_points')
  request.r(i5213[4], i5213[5], 0, i5212, '_unit')
  request.r(i5213[6], i5213[7], 0, i5212, '_particleSystem')
  request.r(i5213[8], i5213[9], 0, i5212, '_textCoins')
  request.r(i5213[10], i5213[11], 0, i5212, '_textDamage')
  request.r(i5213[12], i5213[13], 0, i5212, '_textHealth')
  request.r(i5213[14], i5213[15], 0, i5212, '_textHealth2')
  request.r(i5213[16], i5213[17], 0, i5212, '_textDamage2')
  i5212.scaleDuration = i5213[18]
  i5212.moveDuration = i5213[19]
  i5212.targetScale = new pc.Vec3( i5213[20], i5213[21], i5213[22] )
  return i5212
}

Deserializers["Card2V"] = function (request, data, root) {
  var i5214 = root || request.c( 'Card2V' )
  var i5215 = data
  i5214._us = !!i5215[0]
  request.r(i5215[1], i5215[2], 0, i5214, '_arm')
  request.r(i5215[3], i5215[4], 0, i5214, '_episode')
  i5214._dragon = !!i5215[5]
  i5214._isMainCard = !!i5215[6]
  i5214.moveDuration = i5215[7]
  i5214.scaleDuration = i5215[8]
  i5214.targetScale = new pc.Vec3( i5215[9], i5215[10], i5215[11] )
  return i5214
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5216 = root || request.c( 'UnityEngine.UI.Text' )
  var i5217 = data
  i5216.m_FontData = request.d('UnityEngine.UI.FontData', i5217[0], i5216.m_FontData)
  i5216.m_Text = i5217[1]
  request.r(i5217[2], i5217[3], 0, i5216, 'm_Material')
  i5216.m_Maskable = !!i5217[4]
  i5216.m_Color = new pc.Color(i5217[5], i5217[6], i5217[7], i5217[8])
  i5216.m_RaycastTarget = !!i5217[9]
  i5216.m_RaycastPadding = new pc.Vec4( i5217[10], i5217[11], i5217[12], i5217[13] )
  return i5216
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5218 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5219 = data
  request.r(i5219[0], i5219[1], 0, i5218, 'm_Font')
  i5218.m_FontSize = i5219[2]
  i5218.m_FontStyle = i5219[3]
  i5218.m_BestFit = !!i5219[4]
  i5218.m_MinSize = i5219[5]
  i5218.m_MaxSize = i5219[6]
  i5218.m_Alignment = i5219[7]
  i5218.m_AlignByGeometry = !!i5219[8]
  i5218.m_RichText = !!i5219[9]
  i5218.m_HorizontalOverflow = i5219[10]
  i5218.m_VerticalOverflow = i5219[11]
  i5218.m_LineSpacing = i5219[12]
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5221 = data
  i5220.position = new pc.Vec3( i5221[0], i5221[1], i5221[2] )
  i5220.scale = new pc.Vec3( i5221[3], i5221[4], i5221[5] )
  i5220.rotation = new pc.Quat(i5221[6], i5221[7], i5221[8], i5221[9])
  return i5220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5223 = data
  i5222.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5223[0], i5222.main)
  i5222.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5223[1], i5222.colorBySpeed)
  i5222.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5223[2], i5222.colorOverLifetime)
  i5222.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5223[3], i5222.emission)
  i5222.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5223[4], i5222.rotationBySpeed)
  i5222.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5223[5], i5222.rotationOverLifetime)
  i5222.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5223[6], i5222.shape)
  i5222.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5223[7], i5222.sizeBySpeed)
  i5222.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5223[8], i5222.sizeOverLifetime)
  i5222.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5223[9], i5222.textureSheetAnimation)
  i5222.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5223[10], i5222.velocityOverLifetime)
  i5222.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5223[11], i5222.noise)
  i5222.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5223[12], i5222.inheritVelocity)
  i5222.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5223[13], i5222.forceOverLifetime)
  i5222.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5223[14], i5222.limitVelocityOverLifetime)
  i5222.useAutoRandomSeed = !!i5223[15]
  i5222.randomSeed = i5223[16]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5224 = root || new pc.ParticleSystemMain()
  var i5225 = data
  i5224.duration = i5225[0]
  i5224.loop = !!i5225[1]
  i5224.prewarm = !!i5225[2]
  i5224.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[3], i5224.startDelay)
  i5224.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[4], i5224.startLifetime)
  i5224.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[5], i5224.startSpeed)
  i5224.startSize3D = !!i5225[6]
  i5224.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[7], i5224.startSizeX)
  i5224.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[8], i5224.startSizeY)
  i5224.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[9], i5224.startSizeZ)
  i5224.startRotation3D = !!i5225[10]
  i5224.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[11], i5224.startRotationX)
  i5224.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[12], i5224.startRotationY)
  i5224.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[13], i5224.startRotationZ)
  i5224.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5225[14], i5224.startColor)
  i5224.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5225[15], i5224.gravityModifier)
  i5224.simulationSpace = i5225[16]
  request.r(i5225[17], i5225[18], 0, i5224, 'customSimulationSpace')
  i5224.simulationSpeed = i5225[19]
  i5224.useUnscaledTime = !!i5225[20]
  i5224.scalingMode = i5225[21]
  i5224.playOnAwake = !!i5225[22]
  i5224.maxParticles = i5225[23]
  i5224.emitterVelocityMode = i5225[24]
  i5224.stopAction = i5225[25]
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5226 = root || new pc.MinMaxCurve()
  var i5227 = data
  i5226.mode = i5227[0]
  i5226.curveMin = new pc.AnimationCurve( { keys_flow: i5227[1] } )
  i5226.curveMax = new pc.AnimationCurve( { keys_flow: i5227[2] } )
  i5226.curveMultiplier = i5227[3]
  i5226.constantMin = i5227[4]
  i5226.constantMax = i5227[5]
  return i5226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5228 = root || new pc.MinMaxGradient()
  var i5229 = data
  i5228.mode = i5229[0]
  i5228.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5229[1], i5228.gradientMin)
  i5228.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5229[2], i5228.gradientMax)
  i5228.colorMin = new pc.Color(i5229[3], i5229[4], i5229[5], i5229[6])
  i5228.colorMax = new pc.Color(i5229[7], i5229[8], i5229[9], i5229[10])
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5231 = data
  i5230.mode = i5231[0]
  var i5233 = i5231[1]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 1) {
    i5232.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5233[i + 0]) );
  }
  i5230.colorKeys = i5232
  var i5235 = i5231[2]
  var i5234 = []
  for(var i = 0; i < i5235.length; i += 1) {
    i5234.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5235[i + 0]) );
  }
  i5230.alphaKeys = i5234
  return i5230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5236 = root || new pc.ParticleSystemColorBySpeed()
  var i5237 = data
  i5236.enabled = !!i5237[0]
  i5236.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5237[1], i5236.color)
  i5236.range = new pc.Vec2( i5237[2], i5237[3] )
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5241 = data
  i5240.color = new pc.Color(i5241[0], i5241[1], i5241[2], i5241[3])
  i5240.time = i5241[4]
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5245 = data
  i5244.alpha = i5245[0]
  i5244.time = i5245[1]
  return i5244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5246 = root || new pc.ParticleSystemColorOverLifetime()
  var i5247 = data
  i5246.enabled = !!i5247[0]
  i5246.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5247[1], i5246.color)
  return i5246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5248 = root || new pc.ParticleSystemEmitter()
  var i5249 = data
  i5248.enabled = !!i5249[0]
  i5248.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5249[1], i5248.rateOverTime)
  i5248.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5249[2], i5248.rateOverDistance)
  var i5251 = i5249[3]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5251[i + 0]) );
  }
  i5248.bursts = i5250
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5254 = root || new pc.ParticleSystemBurst()
  var i5255 = data
  i5254.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5255[0], i5254.count)
  i5254.cycleCount = i5255[1]
  i5254.minCount = i5255[2]
  i5254.maxCount = i5255[3]
  i5254.repeatInterval = i5255[4]
  i5254.time = i5255[5]
  return i5254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5256 = root || new pc.ParticleSystemRotationBySpeed()
  var i5257 = data
  i5256.enabled = !!i5257[0]
  i5256.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5257[1], i5256.x)
  i5256.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5257[2], i5256.y)
  i5256.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5257[3], i5256.z)
  i5256.separateAxes = !!i5257[4]
  i5256.range = new pc.Vec2( i5257[5], i5257[6] )
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5258 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5259 = data
  i5258.enabled = !!i5259[0]
  i5258.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5259[1], i5258.x)
  i5258.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5259[2], i5258.y)
  i5258.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5259[3], i5258.z)
  i5258.separateAxes = !!i5259[4]
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5260 = root || new pc.ParticleSystemShape()
  var i5261 = data
  i5260.enabled = !!i5261[0]
  i5260.shapeType = i5261[1]
  i5260.randomDirectionAmount = i5261[2]
  i5260.sphericalDirectionAmount = i5261[3]
  i5260.randomPositionAmount = i5261[4]
  i5260.alignToDirection = !!i5261[5]
  i5260.radius = i5261[6]
  i5260.radiusMode = i5261[7]
  i5260.radiusSpread = i5261[8]
  i5260.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5261[9], i5260.radiusSpeed)
  i5260.radiusThickness = i5261[10]
  i5260.angle = i5261[11]
  i5260.length = i5261[12]
  i5260.boxThickness = new pc.Vec3( i5261[13], i5261[14], i5261[15] )
  i5260.meshShapeType = i5261[16]
  request.r(i5261[17], i5261[18], 0, i5260, 'mesh')
  request.r(i5261[19], i5261[20], 0, i5260, 'meshRenderer')
  request.r(i5261[21], i5261[22], 0, i5260, 'skinnedMeshRenderer')
  i5260.useMeshMaterialIndex = !!i5261[23]
  i5260.meshMaterialIndex = i5261[24]
  i5260.useMeshColors = !!i5261[25]
  i5260.normalOffset = i5261[26]
  i5260.arc = i5261[27]
  i5260.arcMode = i5261[28]
  i5260.arcSpread = i5261[29]
  i5260.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5261[30], i5260.arcSpeed)
  i5260.donutRadius = i5261[31]
  i5260.position = new pc.Vec3( i5261[32], i5261[33], i5261[34] )
  i5260.rotation = new pc.Vec3( i5261[35], i5261[36], i5261[37] )
  i5260.scale = new pc.Vec3( i5261[38], i5261[39], i5261[40] )
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5262 = root || new pc.ParticleSystemSizeBySpeed()
  var i5263 = data
  i5262.enabled = !!i5263[0]
  i5262.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5263[1], i5262.x)
  i5262.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5263[2], i5262.y)
  i5262.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5263[3], i5262.z)
  i5262.separateAxes = !!i5263[4]
  i5262.range = new pc.Vec2( i5263[5], i5263[6] )
  return i5262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5264 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5265 = data
  i5264.enabled = !!i5265[0]
  i5264.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5265[1], i5264.x)
  i5264.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5265[2], i5264.y)
  i5264.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5265[3], i5264.z)
  i5264.separateAxes = !!i5265[4]
  return i5264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5266 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5267 = data
  i5266.enabled = !!i5267[0]
  i5266.mode = i5267[1]
  i5266.animation = i5267[2]
  i5266.numTilesX = i5267[3]
  i5266.numTilesY = i5267[4]
  i5266.useRandomRow = !!i5267[5]
  i5266.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5267[6], i5266.frameOverTime)
  i5266.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5267[7], i5266.startFrame)
  i5266.cycleCount = i5267[8]
  i5266.rowIndex = i5267[9]
  i5266.flipU = i5267[10]
  i5266.flipV = i5267[11]
  i5266.spriteCount = i5267[12]
  var i5269 = i5267[13]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 2) {
  request.r(i5269[i + 0], i5269[i + 1], 2, i5268, '')
  }
  i5266.sprites = i5268
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5272 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5273 = data
  i5272.enabled = !!i5273[0]
  i5272.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[1], i5272.x)
  i5272.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[2], i5272.y)
  i5272.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[3], i5272.z)
  i5272.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[4], i5272.radial)
  i5272.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[5], i5272.speedModifier)
  i5272.space = i5273[6]
  i5272.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[7], i5272.orbitalX)
  i5272.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[8], i5272.orbitalY)
  i5272.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[9], i5272.orbitalZ)
  i5272.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[10], i5272.orbitalOffsetX)
  i5272.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[11], i5272.orbitalOffsetY)
  i5272.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[12], i5272.orbitalOffsetZ)
  return i5272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5274 = root || new pc.ParticleSystemNoise()
  var i5275 = data
  i5274.enabled = !!i5275[0]
  i5274.separateAxes = !!i5275[1]
  i5274.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[2], i5274.strengthX)
  i5274.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[3], i5274.strengthY)
  i5274.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[4], i5274.strengthZ)
  i5274.frequency = i5275[5]
  i5274.damping = !!i5275[6]
  i5274.octaveCount = i5275[7]
  i5274.octaveMultiplier = i5275[8]
  i5274.octaveScale = i5275[9]
  i5274.quality = i5275[10]
  i5274.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[11], i5274.scrollSpeed)
  i5274.scrollSpeedMultiplier = i5275[12]
  i5274.remapEnabled = !!i5275[13]
  i5274.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[14], i5274.remapX)
  i5274.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[15], i5274.remapY)
  i5274.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[16], i5274.remapZ)
  i5274.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[17], i5274.positionAmount)
  i5274.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[18], i5274.rotationAmount)
  i5274.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[19], i5274.sizeAmount)
  return i5274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5276 = root || new pc.ParticleSystemInheritVelocity()
  var i5277 = data
  i5276.enabled = !!i5277[0]
  i5276.mode = i5277[1]
  i5276.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5277[2], i5276.curve)
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5278 = root || new pc.ParticleSystemForceOverLifetime()
  var i5279 = data
  i5278.enabled = !!i5279[0]
  i5278.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5279[1], i5278.x)
  i5278.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5279[2], i5278.y)
  i5278.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5279[3], i5278.z)
  i5278.space = i5279[4]
  i5278.randomized = !!i5279[5]
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5280 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5281 = data
  i5280.enabled = !!i5281[0]
  i5280.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5281[1], i5280.limit)
  i5280.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5281[2], i5280.limitX)
  i5280.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5281[3], i5280.limitY)
  i5280.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5281[4], i5280.limitZ)
  i5280.dampen = i5281[5]
  i5280.separateAxes = !!i5281[6]
  i5280.space = i5281[7]
  i5280.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5281[8], i5280.drag)
  i5280.multiplyDragByParticleSize = !!i5281[9]
  i5280.multiplyDragByParticleVelocity = !!i5281[10]
  return i5280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5283 = data
  i5282.enabled = !!i5283[0]
  request.r(i5283[1], i5283[2], 0, i5282, 'sharedMaterial')
  var i5285 = i5283[3]
  var i5284 = []
  for(var i = 0; i < i5285.length; i += 2) {
  request.r(i5285[i + 0], i5285[i + 1], 2, i5284, '')
  }
  i5282.sharedMaterials = i5284
  i5282.receiveShadows = !!i5283[4]
  i5282.shadowCastingMode = i5283[5]
  i5282.sortingLayerID = i5283[6]
  i5282.sortingOrder = i5283[7]
  i5282.lightmapIndex = i5283[8]
  i5282.lightmapSceneIndex = i5283[9]
  i5282.lightmapScaleOffset = new pc.Vec4( i5283[10], i5283[11], i5283[12], i5283[13] )
  i5282.lightProbeUsage = i5283[14]
  i5282.reflectionProbeUsage = i5283[15]
  request.r(i5283[16], i5283[17], 0, i5282, 'mesh')
  i5282.meshCount = i5283[18]
  i5282.activeVertexStreamsCount = i5283[19]
  i5282.alignment = i5283[20]
  i5282.renderMode = i5283[21]
  i5282.sortMode = i5283[22]
  i5282.lengthScale = i5283[23]
  i5282.velocityScale = i5283[24]
  i5282.cameraVelocityScale = i5283[25]
  i5282.normalDirection = i5283[26]
  i5282.sortingFudge = i5283[27]
  i5282.minParticleSize = i5283[28]
  i5282.maxParticleSize = i5283[29]
  i5282.pivot = new pc.Vec3( i5283[30], i5283[31], i5283[32] )
  request.r(i5283[33], i5283[34], 0, i5282, 'trailMaterial')
  return i5282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5289 = data
  request.r(i5289[0], i5289[1], 0, i5288, 'clip')
  request.r(i5289[2], i5289[3], 0, i5288, 'outputAudioMixerGroup')
  i5288.playOnAwake = !!i5289[4]
  i5288.loop = !!i5289[5]
  i5288.time = i5289[6]
  i5288.volume = i5289[7]
  i5288.pitch = i5289[8]
  i5288.enabled = !!i5289[9]
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5290 = root || new pc.UnityMaterial()
  var i5291 = data
  i5290.name = i5291[0]
  request.r(i5291[1], i5291[2], 0, i5290, 'shader')
  i5290.renderQueue = i5291[3]
  i5290.enableInstancing = !!i5291[4]
  var i5293 = i5291[5]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5293[i + 0]) );
  }
  i5290.floatParameters = i5292
  var i5295 = i5291[6]
  var i5294 = []
  for(var i = 0; i < i5295.length; i += 1) {
    i5294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5295[i + 0]) );
  }
  i5290.colorParameters = i5294
  var i5297 = i5291[7]
  var i5296 = []
  for(var i = 0; i < i5297.length; i += 1) {
    i5296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5297[i + 0]) );
  }
  i5290.vectorParameters = i5296
  var i5299 = i5291[8]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5299[i + 0]) );
  }
  i5290.textureParameters = i5298
  var i5301 = i5291[9]
  var i5300 = []
  for(var i = 0; i < i5301.length; i += 1) {
    i5300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5301[i + 0]) );
  }
  i5290.materialFlags = i5300
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5305 = data
  i5304.name = i5305[0]
  i5304.value = i5305[1]
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5309 = data
  i5308.name = i5309[0]
  i5308.value = new pc.Color(i5309[1], i5309[2], i5309[3], i5309[4])
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5313 = data
  i5312.name = i5313[0]
  i5312.value = new pc.Vec4( i5313[1], i5313[2], i5313[3], i5313[4] )
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5317 = data
  i5316.name = i5317[0]
  request.r(i5317[1], i5317[2], 0, i5316, 'value')
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5321 = data
  i5320.name = i5321[0]
  i5320.enabled = !!i5321[1]
  return i5320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5323 = data
  i5322.name = i5323[0]
  i5322.halfPrecision = !!i5323[1]
  i5322.useUInt32IndexFormat = !!i5323[2]
  i5322.vertexCount = i5323[3]
  i5322.aabb = i5323[4]
  var i5325 = i5323[5]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( !!i5325[i + 0] );
  }
  i5322.streams = i5324
  i5322.vertices = i5323[6]
  var i5327 = i5323[7]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5327[i + 0]) );
  }
  i5322.subMeshes = i5326
  var i5329 = i5323[8]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 16) {
    i5328.push( new pc.Mat4().setData(i5329[i + 0], i5329[i + 1], i5329[i + 2], i5329[i + 3],  i5329[i + 4], i5329[i + 5], i5329[i + 6], i5329[i + 7],  i5329[i + 8], i5329[i + 9], i5329[i + 10], i5329[i + 11],  i5329[i + 12], i5329[i + 13], i5329[i + 14], i5329[i + 15]) );
  }
  i5322.bindposes = i5328
  var i5331 = i5323[9]
  var i5330 = []
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5331[i + 0]) );
  }
  i5322.blendShapes = i5330
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5337 = data
  i5336.triangles = i5337[0]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5343 = data
  i5342.name = i5343[0]
  var i5345 = i5343[1]
  var i5344 = []
  for(var i = 0; i < i5345.length; i += 1) {
    i5344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5345[i + 0]) );
  }
  i5342.frames = i5344
  return i5342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5347 = data
  i5346.m_Alpha = i5347[0]
  i5346.m_Interactable = !!i5347[1]
  i5346.m_BlocksRaycasts = !!i5347[2]
  i5346.m_IgnoreParentGroups = !!i5347[3]
  i5346.enabled = !!i5347[4]
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5349 = data
  i5348.name = i5349[0]
  i5348.index = i5349[1]
  i5348.startup = !!i5349[2]
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5351 = data
  i5350.enabled = !!i5351[0]
  i5350.aspect = i5351[1]
  i5350.orthographic = !!i5351[2]
  i5350.orthographicSize = i5351[3]
  i5350.backgroundColor = new pc.Color(i5351[4], i5351[5], i5351[6], i5351[7])
  i5350.nearClipPlane = i5351[8]
  i5350.farClipPlane = i5351[9]
  i5350.fieldOfView = i5351[10]
  i5350.depth = i5351[11]
  i5350.clearFlags = i5351[12]
  i5350.cullingMask = i5351[13]
  i5350.rect = i5351[14]
  request.r(i5351[15], i5351[16], 0, i5350, 'targetTexture')
  i5350.usePhysicalProperties = !!i5351[17]
  i5350.focalLength = i5351[18]
  i5350.sensorSize = new pc.Vec2( i5351[19], i5351[20] )
  i5350.lensShift = new pc.Vec2( i5351[21], i5351[22] )
  i5350.gateFit = i5351[23]
  i5350.commandBufferCount = i5351[24]
  i5350.cameraType = i5351[25]
  return i5350
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i5352 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i5353 = data
  i5352.m_RenderShadows = !!i5353[0]
  i5352.m_RequiresDepthTextureOption = i5353[1]
  i5352.m_RequiresOpaqueTextureOption = i5353[2]
  i5352.m_CameraType = i5353[3]
  var i5355 = i5353[4]
  var i5354 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i5355.length; i += 2) {
  request.r(i5355[i + 0], i5355[i + 1], 1, i5354, '')
  }
  i5352.m_Cameras = i5354
  i5352.m_RendererIndex = i5353[5]
  i5352.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5353[6] )
  request.r(i5353[7], i5353[8], 0, i5352, 'm_VolumeTrigger')
  i5352.m_VolumeFrameworkUpdateModeOption = i5353[9]
  i5352.m_RenderPostProcessing = !!i5353[10]
  i5352.m_Antialiasing = i5353[11]
  i5352.m_AntialiasingQuality = i5353[12]
  i5352.m_StopNaN = !!i5353[13]
  i5352.m_Dithering = !!i5353[14]
  i5352.m_ClearDepth = !!i5353[15]
  i5352.m_AllowXRRendering = !!i5353[16]
  i5352.m_AllowHDROutput = !!i5353[17]
  i5352.m_UseScreenCoordOverride = !!i5353[18]
  i5352.m_ScreenSizeOverride = new pc.Vec4( i5353[19], i5353[20], i5353[21], i5353[22] )
  i5352.m_ScreenCoordScaleBias = new pc.Vec4( i5353[23], i5353[24], i5353[25], i5353[26] )
  i5352.m_RequiresDepthTexture = !!i5353[27]
  i5352.m_RequiresColorTexture = !!i5353[28]
  i5352.m_Version = i5353[29]
  i5352.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i5353[30], i5352.m_TaaSettings)
  return i5352
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i5358 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i5359 = data
  i5358.m_Quality = i5359[0]
  i5358.m_FrameInfluence = i5359[1]
  i5358.m_JitterScale = i5359[2]
  i5358.m_MipBias = i5359[3]
  i5358.m_VarianceClampScale = i5359[4]
  i5358.m_ContrastAdaptiveSharpening = i5359[5]
  return i5358
}

Deserializers["ParticleFollowUI"] = function (request, data, root) {
  var i5360 = root || request.c( 'ParticleFollowUI' )
  var i5361 = data
  request.r(i5361[0], i5361[1], 0, i5360, '_buttonButtle')
  request.r(i5361[2], i5361[3], 0, i5360, '_buttonShop')
  request.r(i5361[4], i5361[5], 0, i5360, 'uiCamera')
  request.r(i5361[6], i5361[7], 0, i5360, '_particleEffectButton')
  request.r(i5361[8], i5361[9], 0, i5360, '_particleEffectButtonShop')
  i5360.zOffset = i5361[10]
  return i5360
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i5362 = root || request.c( 'ClickCta' )
  var i5363 = data
  request.r(i5363[0], i5363[1], 0, i5362, 'GameObject')
  request.r(i5363[2], i5363[3], 0, i5362, 'GameObject2')
  return i5362
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i5364 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i5365 = data
  i5364.m_ComponentVersion = i5365[0]
  i5364.m_LightType = i5365[1]
  i5364.m_BlendStyleIndex = i5365[2]
  i5364.m_FalloffIntensity = i5365[3]
  i5364.m_Color = new pc.Color(i5365[4], i5365[5], i5365[6], i5365[7])
  i5364.m_Intensity = i5365[8]
  i5364.m_LightVolumeIntensity = i5365[9]
  i5364.m_LightVolumeIntensityEnabled = !!i5365[10]
  i5364.m_ApplyToSortingLayers = i5365[11]
  request.r(i5365[12], i5365[13], 0, i5364, 'm_LightCookieSprite')
  request.r(i5365[14], i5365[15], 0, i5364, 'm_DeprecatedPointLightCookieSprite')
  i5364.m_LightOrder = i5365[16]
  i5364.m_AlphaBlendOnOverlap = !!i5365[17]
  i5364.m_OverlapOperation = i5365[18]
  i5364.m_NormalMapDistance = i5365[19]
  i5364.m_NormalMapQuality = i5365[20]
  i5364.m_UseNormalMap = !!i5365[21]
  i5364.m_ShadowIntensityEnabled = !!i5365[22]
  i5364.m_ShadowIntensity = i5365[23]
  i5364.m_ShadowVolumeIntensityEnabled = !!i5365[24]
  i5364.m_ShadowVolumeIntensity = i5365[25]
  i5364.m_PointLightInnerAngle = i5365[26]
  i5364.m_PointLightOuterAngle = i5365[27]
  i5364.m_PointLightInnerRadius = i5365[28]
  i5364.m_PointLightOuterRadius = i5365[29]
  i5364.m_ShapeLightParametricSides = i5365[30]
  i5364.m_ShapeLightParametricAngleOffset = i5365[31]
  i5364.m_ShapeLightParametricRadius = i5365[32]
  i5364.m_ShapeLightFalloffSize = i5365[33]
  i5364.m_ShapeLightFalloffOffset = new pc.Vec2( i5365[34], i5365[35] )
  var i5367 = i5365[36]
  var i5366 = []
  for(var i = 0; i < i5367.length; i += 3) {
    i5366.push( new pc.Vec3( i5367[i + 0], i5367[i + 1], i5367[i + 2] ) );
  }
  i5364.m_ShapePath = i5366
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5371 = data
  i5370.enabled = !!i5371[0]
  i5370.planeDistance = i5371[1]
  i5370.referencePixelsPerUnit = i5371[2]
  i5370.isFallbackOverlay = !!i5371[3]
  i5370.renderMode = i5371[4]
  i5370.renderOrder = i5371[5]
  i5370.sortingLayerName = i5371[6]
  i5370.sortingOrder = i5371[7]
  i5370.scaleFactor = i5371[8]
  request.r(i5371[9], i5371[10], 0, i5370, 'worldCamera')
  i5370.overrideSorting = !!i5371[11]
  i5370.pixelPerfect = !!i5371[12]
  i5370.targetDisplay = i5371[13]
  i5370.overridePixelPerfect = !!i5371[14]
  return i5370
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5372 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5373 = data
  i5372.m_UiScaleMode = i5373[0]
  i5372.m_ReferencePixelsPerUnit = i5373[1]
  i5372.m_ScaleFactor = i5373[2]
  i5372.m_ReferenceResolution = new pc.Vec2( i5373[3], i5373[4] )
  i5372.m_ScreenMatchMode = i5373[5]
  i5372.m_MatchWidthOrHeight = i5373[6]
  i5372.m_PhysicalUnit = i5373[7]
  i5372.m_FallbackScreenDPI = i5373[8]
  i5372.m_DefaultSpriteDPI = i5373[9]
  i5372.m_DynamicPixelsPerUnit = i5373[10]
  i5372.m_PresetInfoIsWorld = !!i5373[11]
  return i5372
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5374 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5375 = data
  i5374.m_IgnoreReversedGraphics = !!i5375[0]
  i5374.m_BlockingObjects = i5375[1]
  i5374.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5375[2] )
  return i5374
}

Deserializers["Point"] = function (request, data, root) {
  var i5376 = root || request.c( 'Point' )
  var i5377 = data
  i5376._occupied = !!i5377[0]
  return i5376
}

Deserializers["Episode6"] = function (request, data, root) {
  var i5378 = root || request.c( 'Episode6' )
  var i5379 = data
  request.r(i5379[0], i5379[1], 0, i5378, '_arm')
  request.r(i5379[2], i5379[3], 0, i5378, '_points')
  request.r(i5379[4], i5379[5], 0, i5378, '_cart')
  request.r(i5379[6], i5379[7], 0, i5378, '_cartPoint')
  request.r(i5379[8], i5379[9], 0, i5378, '_coinsText')
  request.r(i5379[10], i5379[11], 0, i5378, '_textDamage')
  request.r(i5379[12], i5379[13], 0, i5378, '_textHealth')
  request.r(i5379[14], i5379[15], 0, i5378, '_textHealth2')
  request.r(i5379[16], i5379[17], 0, i5378, '_textDamage2')
  i5378.scaleDuration = i5379[18]
  i5378.moveDuration = i5379[19]
  i5378.targetScale = new pc.Vec3( i5379[20], i5379[21], i5379[22] )
  request.r(i5379[23], i5379[24], 0, i5378, '_particleDragon')
  request.r(i5379[25], i5379[26], 0, i5378, '_particleCards')
  return i5378
}

Deserializers["Episode2"] = function (request, data, root) {
  var i5380 = root || request.c( 'Episode2' )
  var i5381 = data
  request.r(i5381[0], i5381[1], 0, i5380, '_arm')
  request.r(i5381[2], i5381[3], 0, i5380, '_points')
  request.r(i5381[4], i5381[5], 0, i5380, '_unit1')
  request.r(i5381[6], i5381[7], 0, i5380, '_unit2')
  request.r(i5381[8], i5381[9], 0, i5380, '_particleSystem1')
  request.r(i5381[10], i5381[11], 0, i5380, '_particleSystem2')
  request.r(i5381[12], i5381[13], 0, i5380, '_textCoins')
  request.r(i5381[14], i5381[15], 0, i5380, '_textDamage')
  request.r(i5381[16], i5381[17], 0, i5380, '_textHealth')
  request.r(i5381[18], i5381[19], 0, i5380, '_textHealth2')
  request.r(i5381[20], i5381[21], 0, i5380, '_textDamage2')
  i5380.scaleDuration = i5381[22]
  i5380.moveDuration = i5381[23]
  i5380.targetScale = new pc.Vec3( i5381[24], i5381[25], i5381[26] )
  return i5380
}

Deserializers["Episode5"] = function (request, data, root) {
  var i5382 = root || request.c( 'Episode5' )
  var i5383 = data
  request.r(i5383[0], i5383[1], 0, i5382, '_card1_1_2')
  request.r(i5383[2], i5383[3], 0, i5382, '_card1_2_2')
  request.r(i5383[4], i5383[5], 0, i5382, '_card1_3_2')
  request.r(i5383[6], i5383[7], 0, i5382, '_card1_1')
  request.r(i5383[8], i5383[9], 0, i5382, '_card2_1')
  request.r(i5383[10], i5383[11], 0, i5382, '_coinsText')
  request.r(i5383[12], i5383[13], 0, i5382, '_particleSystem')
  return i5382
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i5384 = root || request.c( 'Episode4_1' )
  var i5385 = data
  request.r(i5385[0], i5385[1], 0, i5384, '_cart1__2')
  request.r(i5385[2], i5385[3], 0, i5384, '_cart2__2')
  request.r(i5385[4], i5385[5], 0, i5384, '_cart3__2')
  request.r(i5385[6], i5385[7], 0, i5384, '_cart1_1')
  request.r(i5385[8], i5385[9], 0, i5384, '_cart2_1')
  request.r(i5385[10], i5385[11], 0, i5384, '_cart3_1')
  request.r(i5385[12], i5385[13], 0, i5384, '_arm')
  request.r(i5385[14], i5385[15], 0, i5384, '_coinText')
  request.r(i5385[16], i5385[17], 0, i5384, '_particleSystem')
  request.r(i5385[18], i5385[19], 0, i5384, '_particleDragon')
  return i5384
}

Deserializers["UpdateButton"] = function (request, data, root) {
  var i5386 = root || request.c( 'UpdateButton' )
  var i5387 = data
  request.r(i5387[0], i5387[1], 0, i5386, '_episode')
  request.r(i5387[2], i5387[3], 0, i5386, '_arm')
  return i5386
}

Deserializers["Episode3"] = function (request, data, root) {
  var i5388 = root || request.c( 'Episode3' )
  var i5389 = data
  request.r(i5389[0], i5389[1], 0, i5388, '_battle')
  request.r(i5389[2], i5389[3], 0, i5388, '_button')
  request.r(i5389[4], i5389[5], 0, i5388, '_cardDracone')
  request.r(i5389[6], i5389[7], 0, i5388, '_point')
  request.r(i5389[8], i5389[9], 0, i5388, '_cardEnemye1')
  request.r(i5389[10], i5389[11], 0, i5388, '_cardEnemye2')
  request.r(i5389[12], i5389[13], 0, i5388, '_cardEnemye3')
  request.r(i5389[14], i5389[15], 0, i5388, '_cardDragon1')
  request.r(i5389[16], i5389[17], 0, i5388, '_cardDragon2')
  request.r(i5389[18], i5389[19], 0, i5388, '_cardDragon3')
  request.r(i5389[20], i5389[21], 0, i5388, '_particleSystem1')
  request.r(i5389[22], i5389[23], 0, i5388, '_particleSystem2')
  request.r(i5389[24], i5389[25], 0, i5388, '_particleSystem3')
  request.r(i5389[26], i5389[27], 0, i5388, '_particleButton')
  request.r(i5389[28], i5389[29], 0, i5388, '_textCoins')
  request.r(i5389[30], i5389[31], 0, i5388, '_winVictoty')
  request.r(i5389[32], i5389[33], 0, i5388, '_winInscription')
  request.r(i5389[34], i5389[35], 0, i5388, '_winInscription2')
  request.r(i5389[36], i5389[37], 0, i5388, '_winInscription3')
  request.r(i5389[38], i5389[39], 0, i5388, '_parentsDisplay')
  request.r(i5389[40], i5389[41], 0, i5388, '_cardL')
  return i5388
}

Deserializers["Episode7"] = function (request, data, root) {
  var i5390 = root || request.c( 'Episode7' )
  var i5391 = data
  request.r(i5391[0], i5391[1], 0, i5390, 'button')
  request.r(i5391[2], i5391[3], 0, i5390, '_battle')
  request.r(i5391[4], i5391[5], 0, i5390, '_button')
  request.r(i5391[6], i5391[7], 0, i5390, '_cardEnemye1')
  request.r(i5391[8], i5391[9], 0, i5390, '_cardEnemye2')
  request.r(i5391[10], i5391[11], 0, i5390, '_cardEnemye3')
  request.r(i5391[12], i5391[13], 0, i5390, '_cardEnemye4')
  request.r(i5391[14], i5391[15], 0, i5390, '_cardEnemye5')
  request.r(i5391[16], i5391[17], 0, i5390, '_cardEnemye6')
  request.r(i5391[18], i5391[19], 0, i5390, '_cardDragon1')
  request.r(i5391[20], i5391[21], 0, i5390, '_cardDragon2')
  request.r(i5391[22], i5391[23], 0, i5390, '_cardDragon3')
  request.r(i5391[24], i5391[25], 0, i5390, '_particleSystem1')
  request.r(i5391[26], i5391[27], 0, i5390, '_particleSystem2')
  request.r(i5391[28], i5391[29], 0, i5390, '_particleSystem3')
  request.r(i5391[30], i5391[31], 0, i5390, '_particleSystem4')
  request.r(i5391[32], i5391[33], 0, i5390, '_particleSystem5')
  request.r(i5391[34], i5391[35], 0, i5390, '_particleSystem6')
  request.r(i5391[36], i5391[37], 0, i5390, '_winVictoty')
  request.r(i5391[38], i5391[39], 0, i5390, '_winFinal')
  request.r(i5391[40], i5391[41], 0, i5390, '_particleSystem')
  request.r(i5391[42], i5391[43], 0, i5390, '_particleDragon')
  request.r(i5391[44], i5391[45], 0, i5390, '_episode3')
  return i5390
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i5392 = root || request.c( 'Episode4_2' )
  var i5393 = data
  request.r(i5393[0], i5393[1], 0, i5392, '_buttonF')
  request.r(i5393[2], i5393[3], 0, i5392, '_battle')
  request.r(i5393[4], i5393[5], 0, i5392, '_button')
  request.r(i5393[6], i5393[7], 0, i5392, '_cardEnemye1')
  request.r(i5393[8], i5393[9], 0, i5392, '_cardEnemye2')
  request.r(i5393[10], i5393[11], 0, i5392, '_cardEnemye3')
  request.r(i5393[12], i5393[13], 0, i5392, '_cardDracone1')
  request.r(i5393[14], i5393[15], 0, i5392, '_cardDracone2')
  request.r(i5393[16], i5393[17], 0, i5392, '_cardDracone3')
  request.r(i5393[18], i5393[19], 0, i5392, '_winDefeat')
  request.r(i5393[20], i5393[21], 0, i5392, '_winFinal')
  request.r(i5393[22], i5393[23], 0, i5392, '_particleSystem1')
  request.r(i5393[24], i5393[25], 0, i5392, '_particleSystem2')
  request.r(i5393[26], i5393[27], 0, i5392, '_particleSystem3')
  request.r(i5393[28], i5393[29], 0, i5392, '_particleSystem4')
  request.r(i5393[30], i5393[31], 0, i5392, '_particleSystem5')
  request.r(i5393[32], i5393[33], 0, i5392, '_particleSystem6')
  request.r(i5393[34], i5393[35], 0, i5392, '_particleSystem7')
  request.r(i5393[36], i5393[37], 0, i5392, '_particleSystem8')
  request.r(i5393[38], i5393[39], 0, i5392, '_particleSystem9')
  request.r(i5393[40], i5393[41], 0, i5392, '_particleButtun')
  request.r(i5393[42], i5393[43], 0, i5392, '_particleDragon')
  request.r(i5393[44], i5393[45], 0, i5392, '_layer')
  request.r(i5393[46], i5393[47], 0, i5392, '_winInscription')
  request.r(i5393[48], i5393[49], 0, i5392, '_winInscription2')
  request.r(i5393[50], i5393[51], 0, i5392, '_winInscription3')
  return i5392
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i5394 = root || request.c( 'Episode5_2' )
  var i5395 = data
  request.r(i5395[0], i5395[1], 0, i5394, '_battle')
  request.r(i5395[2], i5395[3], 0, i5394, '_button')
  request.r(i5395[4], i5395[5], 0, i5394, '_cardEnemye1')
  request.r(i5395[6], i5395[7], 0, i5394, '_cardEnemye2')
  request.r(i5395[8], i5395[9], 0, i5394, '_cardEnemye3')
  request.r(i5395[10], i5395[11], 0, i5394, '_cardDracone1')
  request.r(i5395[12], i5395[13], 0, i5394, '_cardDracone2')
  request.r(i5395[14], i5395[15], 0, i5394, '_cardDracone3')
  request.r(i5395[16], i5395[17], 0, i5394, '_cardDracone4')
  request.r(i5395[18], i5395[19], 0, i5394, '_winDefeat')
  request.r(i5395[20], i5395[21], 0, i5394, '_winFinal')
  request.r(i5395[22], i5395[23], 0, i5394, '_particleSystem1')
  request.r(i5395[24], i5395[25], 0, i5394, '_particleSystem2')
  request.r(i5395[26], i5395[27], 0, i5394, '_particleSystem3')
  request.r(i5395[28], i5395[29], 0, i5394, '_particleSystem4')
  request.r(i5395[30], i5395[31], 0, i5394, '_particleSystem5')
  request.r(i5395[32], i5395[33], 0, i5394, '_particleSystem6')
  request.r(i5395[34], i5395[35], 0, i5394, '_particleSystem7')
  request.r(i5395[36], i5395[37], 0, i5394, '_particleSystem')
  request.r(i5395[38], i5395[39], 0, i5394, '_layer')
  request.r(i5395[40], i5395[41], 0, i5394, '_winInscription')
  request.r(i5395[42], i5395[43], 0, i5394, '_winInscription2')
  request.r(i5395[44], i5395[45], 0, i5394, '_winInscription3')
  return i5394
}

Deserializers["Buttle"] = function (request, data, root) {
  var i5396 = root || request.c( 'Buttle' )
  var i5397 = data
  request.r(i5397[0], i5397[1], 0, i5396, '_episode')
  request.r(i5397[2], i5397[3], 0, i5396, '_buttonShop')
  request.r(i5397[4], i5397[5], 0, i5396, '_buttonButtle')
  request.r(i5397[6], i5397[7], 0, i5396, '_particle')
  request.r(i5397[8], i5397[9], 0, i5396, '_episode7')
  request.r(i5397[10], i5397[11], 0, i5396, '_episode4_2')
  return i5396
}

Deserializers["ArmAnimation"] = function (request, data, root) {
  var i5398 = root || request.c( 'ArmAnimation' )
  var i5399 = data
  request.r(i5399[0], i5399[1], 0, i5398, '_targetButton')
  i5398.flyDuration = i5399[2]
  i5398.shrinkDuration = i5399[3]
  i5398.restoreDuration = i5399[4]
  return i5398
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5400 = root || request.c( 'UnityEngine.UI.Button' )
  var i5401 = data
  i5400.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5401[0], i5400.m_OnClick)
  i5400.m_Navigation = request.d('UnityEngine.UI.Navigation', i5401[1], i5400.m_Navigation)
  i5400.m_Transition = i5401[2]
  i5400.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5401[3], i5400.m_Colors)
  i5400.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5401[4], i5400.m_SpriteState)
  i5400.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5401[5], i5400.m_AnimationTriggers)
  i5400.m_Interactable = !!i5401[6]
  request.r(i5401[7], i5401[8], 0, i5400, 'm_TargetGraphic')
  return i5400
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5402 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5403 = data
  i5402.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5403[0], i5402.m_PersistentCalls)
  return i5402
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5404 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5405 = data
  var i5407 = i5405[0]
  var i5406 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5407.length; i += 1) {
    i5406.add(request.d('UnityEngine.Events.PersistentCall', i5407[i + 0]));
  }
  i5404.m_Calls = i5406
  return i5404
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5410 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5411 = data
  request.r(i5411[0], i5411[1], 0, i5410, 'm_Target')
  i5410.m_TargetAssemblyTypeName = i5411[2]
  i5410.m_MethodName = i5411[3]
  i5410.m_Mode = i5411[4]
  i5410.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5411[5], i5410.m_Arguments)
  i5410.m_CallState = i5411[6]
  return i5410
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5412 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5413 = data
  request.r(i5413[0], i5413[1], 0, i5412, 'm_ObjectArgument')
  i5412.m_ObjectArgumentAssemblyTypeName = i5413[2]
  i5412.m_IntArgument = i5413[3]
  i5412.m_FloatArgument = i5413[4]
  i5412.m_StringArgument = i5413[5]
  i5412.m_BoolArgument = !!i5413[6]
  return i5412
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5414 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5415 = data
  i5414.m_Mode = i5415[0]
  i5414.m_WrapAround = !!i5415[1]
  request.r(i5415[2], i5415[3], 0, i5414, 'm_SelectOnUp')
  request.r(i5415[4], i5415[5], 0, i5414, 'm_SelectOnDown')
  request.r(i5415[6], i5415[7], 0, i5414, 'm_SelectOnLeft')
  request.r(i5415[8], i5415[9], 0, i5414, 'm_SelectOnRight')
  return i5414
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5416 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5417 = data
  i5416.m_NormalColor = new pc.Color(i5417[0], i5417[1], i5417[2], i5417[3])
  i5416.m_HighlightedColor = new pc.Color(i5417[4], i5417[5], i5417[6], i5417[7])
  i5416.m_PressedColor = new pc.Color(i5417[8], i5417[9], i5417[10], i5417[11])
  i5416.m_SelectedColor = new pc.Color(i5417[12], i5417[13], i5417[14], i5417[15])
  i5416.m_DisabledColor = new pc.Color(i5417[16], i5417[17], i5417[18], i5417[19])
  i5416.m_ColorMultiplier = i5417[20]
  i5416.m_FadeDuration = i5417[21]
  return i5416
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5418 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5419 = data
  request.r(i5419[0], i5419[1], 0, i5418, 'm_HighlightedSprite')
  request.r(i5419[2], i5419[3], 0, i5418, 'm_PressedSprite')
  request.r(i5419[4], i5419[5], 0, i5418, 'm_SelectedSprite')
  request.r(i5419[6], i5419[7], 0, i5418, 'm_DisabledSprite')
  return i5418
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5420 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5421 = data
  i5420.m_NormalTrigger = i5421[0]
  i5420.m_HighlightedTrigger = i5421[1]
  i5420.m_PressedTrigger = i5421[2]
  i5420.m_SelectedTrigger = i5421[3]
  i5420.m_DisabledTrigger = i5421[4]
  return i5420
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5422 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5423 = data
  request.r(i5423[0], i5423[1], 0, i5422, 'm_FirstSelected')
  i5422.m_sendNavigationEvents = !!i5423[2]
  i5422.m_DragThreshold = i5423[3]
  return i5422
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5424 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5425 = data
  i5424.m_HorizontalAxis = i5425[0]
  i5424.m_VerticalAxis = i5425[1]
  i5424.m_SubmitButton = i5425[2]
  i5424.m_CancelButton = i5425[3]
  i5424.m_InputActionsPerSecond = i5425[4]
  i5424.m_RepeatDelay = i5425[5]
  i5424.m_ForceModuleActive = !!i5425[6]
  i5424.m_SendPointerHoverToParent = !!i5425[7]
  return i5424
}

Deserializers["Scenario"] = function (request, data, root) {
  var i5426 = root || request.c( 'Scenario' )
  var i5427 = data
  request.r(i5427[0], i5427[1], 0, i5426, '_episode1')
  request.r(i5427[2], i5427[3], 0, i5426, '_episode2')
  request.r(i5427[4], i5427[5], 0, i5426, '_episode3')
  request.r(i5427[6], i5427[7], 0, i5426, '_episode4v2')
  return i5426
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i5428 = root || request.c( 'Episode5_1' )
  var i5429 = data
  request.r(i5429[0], i5429[1], 0, i5428, '_card1')
  request.r(i5429[2], i5429[3], 0, i5428, '_card2')
  request.r(i5429[4], i5429[5], 0, i5428, '_episode5')
  request.r(i5429[6], i5429[7], 0, i5428, 'episode4_1')
  request.r(i5429[8], i5429[9], 0, i5428, 'episode5_2')
  request.r(i5429[10], i5429[11], 0, i5428, '_texCoins')
  request.r(i5429[12], i5429[13], 0, i5428, '_particleSystem')
  return i5428
}

Deserializers["Episode4v2"] = function (request, data, root) {
  var i5430 = root || request.c( 'Episode4v2' )
  var i5431 = data
  request.r(i5431[0], i5431[1], 0, i5430, '_point1')
  request.r(i5431[2], i5431[3], 0, i5430, '_point2')
  request.r(i5431[4], i5431[5], 0, i5430, '_point3')
  request.r(i5431[6], i5431[7], 0, i5430, '_point4')
  request.r(i5431[8], i5431[9], 0, i5430, '_point5')
  request.r(i5431[10], i5431[11], 0, i5430, '_point6')
  request.r(i5431[12], i5431[13], 0, i5430, '_buttle')
  var i5433 = i5431[14]
  var i5432 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i5433.length; i += 2) {
  request.r(i5433[i + 0], i5433[i + 1], 1, i5432, '')
  }
  i5430._dragonCards = i5432
  var i5435 = i5431[15]
  var i5434 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i5435.length; i += 2) {
  request.r(i5435[i + 0], i5435[i + 1], 1, i5434, '')
  }
  i5430._nonDragonCards = i5434
  request.r(i5431[16], i5431[17], 0, i5430, '_armO')
  request.r(i5431[18], i5431[19], 0, i5430, '_armU')
  i5430._cardsDragon = i5431[20]
  i5430._isUpgrade = !!i5431[21]
  i5430._isButtle = !!i5431[22]
  i5430._isArm = !!i5431[23]
  var i5437 = i5431[24]
  var i5436 = new (System.Collections.Generic.List$1(Bridge.ns('Card2V')))
  for(var i = 0; i < i5437.length; i += 2) {
  request.r(i5437[i + 0], i5437[i + 1], 1, i5436, '')
  }
  i5430._cards = i5436
  request.r(i5431[25], i5431[26], 0, i5430, '_card')
  request.r(i5431[27], i5431[28], 0, i5430, '_updateButton')
  request.r(i5431[29], i5431[30], 0, i5430, '_TMony')
  request.r(i5431[31], i5431[32], 0, i5430, '_buttleButton')
  request.r(i5431[33], i5431[34], 0, i5430, '_pointS1')
  request.r(i5431[35], i5431[36], 0, i5430, '_pointS2')
  request.r(i5431[37], i5431[38], 0, i5430, '_pointS3')
  request.r(i5431[39], i5431[40], 0, i5430, '_arm')
  request.r(i5431[41], i5431[42], 0, i5430, '_arm2')
  request.r(i5431[43], i5431[44], 0, i5430, '_cardPointUpgrade')
  request.r(i5431[45], i5431[46], 0, i5430, '_textHealth3')
  request.r(i5431[47], i5431[48], 0, i5430, '_textDamage3')
  request.r(i5431[49], i5431[50], 0, i5430, '_layer')
  request.r(i5431[51], i5431[52], 0, i5430, '_particle')
  request.r(i5431[53], i5431[54], 0, i5430, '_particle2')
  request.r(i5431[55], i5431[56], 0, i5430, '_particleU')
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5441 = data
  i5440.ambientIntensity = i5441[0]
  i5440.reflectionIntensity = i5441[1]
  i5440.ambientMode = i5441[2]
  i5440.ambientLight = new pc.Color(i5441[3], i5441[4], i5441[5], i5441[6])
  i5440.ambientSkyColor = new pc.Color(i5441[7], i5441[8], i5441[9], i5441[10])
  i5440.ambientGroundColor = new pc.Color(i5441[11], i5441[12], i5441[13], i5441[14])
  i5440.ambientEquatorColor = new pc.Color(i5441[15], i5441[16], i5441[17], i5441[18])
  i5440.fogColor = new pc.Color(i5441[19], i5441[20], i5441[21], i5441[22])
  i5440.fogEndDistance = i5441[23]
  i5440.fogStartDistance = i5441[24]
  i5440.fogDensity = i5441[25]
  i5440.fog = !!i5441[26]
  request.r(i5441[27], i5441[28], 0, i5440, 'skybox')
  i5440.fogMode = i5441[29]
  var i5443 = i5441[30]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 1) {
    i5442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5443[i + 0]) );
  }
  i5440.lightmaps = i5442
  i5440.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5441[31], i5440.lightProbes)
  i5440.lightmapsMode = i5441[32]
  i5440.mixedBakeMode = i5441[33]
  i5440.environmentLightingMode = i5441[34]
  i5440.ambientProbe = new pc.SphericalHarmonicsL2(i5441[35])
  i5440.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5441[36])
  i5440.useReferenceAmbientProbe = !!i5441[37]
  request.r(i5441[38], i5441[39], 0, i5440, 'customReflection')
  request.r(i5441[40], i5441[41], 0, i5440, 'defaultReflection')
  i5440.defaultReflectionMode = i5441[42]
  i5440.defaultReflectionResolution = i5441[43]
  i5440.sunLightObjectId = i5441[44]
  i5440.pixelLightCount = i5441[45]
  i5440.defaultReflectionHDR = !!i5441[46]
  i5440.hasLightDataAsset = !!i5441[47]
  i5440.hasManualGenerate = !!i5441[48]
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5447 = data
  request.r(i5447[0], i5447[1], 0, i5446, 'lightmapColor')
  request.r(i5447[2], i5447[3], 0, i5446, 'lightmapDirection')
  return i5446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5448 = root || new UnityEngine.LightProbes()
  var i5449 = data
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5455 = data
  i5454.enabled = !!i5455[0]
  i5454.type = i5455[1]
  i5454.color = new pc.Color(i5455[2], i5455[3], i5455[4], i5455[5])
  i5454.cullingMask = i5455[6]
  i5454.intensity = i5455[7]
  i5454.range = i5455[8]
  i5454.spotAngle = i5455[9]
  i5454.shadows = i5455[10]
  i5454.shadowNormalBias = i5455[11]
  i5454.shadowBias = i5455[12]
  i5454.shadowStrength = i5455[13]
  i5454.shadowResolution = i5455[14]
  i5454.lightmapBakeType = i5455[15]
  i5454.renderMode = i5455[16]
  request.r(i5455[17], i5455[18], 0, i5454, 'cookie')
  i5454.cookieSize = i5455[19]
  return i5454
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i5456 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i5457 = data
  request.r(i5457[0], i5457[1], 0, i5456, 'panelPrefab')
  var i5459 = i5457[2]
  var i5458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i5459.length; i += 1) {
    i5458.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i5459[i + 0]));
  }
  i5456.prefabs = i5458
  return i5456
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i5462 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i5463 = data
  i5462.type = i5463[0]
  request.r(i5463[1], i5463[2], 0, i5462, 'prefab')
  return i5462
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i5464 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i5465 = data
  i5464.m_Spacing = i5465[0]
  i5464.m_ChildForceExpandWidth = !!i5465[1]
  i5464.m_ChildForceExpandHeight = !!i5465[2]
  i5464.m_ChildControlWidth = !!i5465[3]
  i5464.m_ChildControlHeight = !!i5465[4]
  i5464.m_ChildScaleWidth = !!i5465[5]
  i5464.m_ChildScaleHeight = !!i5465[6]
  i5464.m_ReverseArrangement = !!i5465[7]
  i5464.m_Padding = UnityEngine.RectOffset.FromPaddings(i5465[8], i5465[9], i5465[10], i5465[11])
  i5464.m_ChildAlignment = i5465[12]
  return i5464
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i5466 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i5467 = data
  i5466.m_HorizontalFit = i5467[0]
  i5466.m_VerticalFit = i5467[1]
  return i5466
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i5468 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i5469 = data
  request.r(i5469[0], i5469[1], 0, i5468, 'contentHolder')
  return i5468
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i5470 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i5471 = data
  request.r(i5471[0], i5471[1], 0, i5470, 'nameLabel')
  request.r(i5471[2], i5471[3], 0, i5470, 'scrollRect')
  request.r(i5471[4], i5471[5], 0, i5470, 'viewport')
  request.r(i5471[6], i5471[7], 0, i5470, 'Canvas')
  return i5470
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i5472 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i5473 = data
  i5472.m_IgnoreLayout = !!i5473[0]
  i5472.m_MinWidth = i5473[1]
  i5472.m_MinHeight = i5473[2]
  i5472.m_PreferredWidth = i5473[3]
  i5472.m_PreferredHeight = i5473[4]
  i5472.m_FlexibleWidth = i5473[5]
  i5472.m_FlexibleHeight = i5473[6]
  i5472.m_LayoutPriority = i5473[7]
  return i5472
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i5474 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i5475 = data
  request.r(i5475[0], i5475[1], 0, i5474, 'm_Content')
  i5474.m_Horizontal = !!i5475[2]
  i5474.m_Vertical = !!i5475[3]
  i5474.m_MovementType = i5475[4]
  i5474.m_Elasticity = i5475[5]
  i5474.m_Inertia = !!i5475[6]
  i5474.m_DecelerationRate = i5475[7]
  i5474.m_ScrollSensitivity = i5475[8]
  request.r(i5475[9], i5475[10], 0, i5474, 'm_Viewport')
  request.r(i5475[11], i5475[12], 0, i5474, 'm_HorizontalScrollbar')
  request.r(i5475[13], i5475[14], 0, i5474, 'm_VerticalScrollbar')
  i5474.m_HorizontalScrollbarVisibility = i5475[15]
  i5474.m_VerticalScrollbarVisibility = i5475[16]
  i5474.m_HorizontalScrollbarSpacing = i5475[17]
  i5474.m_VerticalScrollbarSpacing = i5475[18]
  i5474.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i5475[19], i5474.m_OnValueChanged)
  return i5474
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i5476 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i5477 = data
  i5476.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5477[0], i5476.m_PersistentCalls)
  return i5476
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5478 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5479 = data
  i5478.m_ShowMaskGraphic = !!i5479[0]
  return i5478
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i5480 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i5481 = data
  request.r(i5481[0], i5481[1], 0, i5480, 'm_HandleRect')
  i5480.m_Direction = i5481[2]
  i5480.m_Value = i5481[3]
  i5480.m_Size = i5481[4]
  i5480.m_NumberOfSteps = i5481[5]
  i5480.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i5481[6], i5480.m_OnValueChanged)
  i5480.m_Navigation = request.d('UnityEngine.UI.Navigation', i5481[7], i5480.m_Navigation)
  i5480.m_Transition = i5481[8]
  i5480.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5481[9], i5480.m_Colors)
  i5480.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5481[10], i5480.m_SpriteState)
  i5480.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5481[11], i5480.m_AnimationTriggers)
  i5480.m_Interactable = !!i5481[12]
  request.r(i5481[13], i5481[14], 0, i5480, 'm_TargetGraphic')
  return i5480
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i5482 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i5483 = data
  i5482.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5483[0], i5482.m_PersistentCalls)
  return i5482
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i5484 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i5485 = data
  var i5487 = i5485[0]
  var i5486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i5487[i + 0]));
  }
  i5484.m_Delegates = i5486
  return i5484
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i5490 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i5491 = data
  i5490.eventID = i5491[0]
  i5490.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i5491[1], i5490.callback)
  return i5490
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i5492 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i5493 = data
  i5492.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5493[0], i5492.m_PersistentCalls)
  return i5492
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i5494 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i5495 = data
  request.r(i5495[0], i5495[1], 0, i5494, 'nameLabel')
  request.r(i5495[2], i5495[3], 0, i5494, 'valueLabel')
  i5494.colorDefault = new pc.Color(i5495[4], i5495[5], i5495[6], i5495[7])
  i5494.colorSelected = new pc.Color(i5495[8], i5495[9], i5495[10], i5495[11])
  return i5494
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i5496 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i5497 = data
  request.r(i5497[0], i5497[1], 0, i5496, 'nameLabel')
  request.r(i5497[2], i5497[3], 0, i5496, 'valueToggle')
  request.r(i5497[4], i5497[5], 0, i5496, 'checkmarkImage')
  i5496.colorDefault = new pc.Color(i5497[6], i5497[7], i5497[8], i5497[9])
  i5496.colorSelected = new pc.Color(i5497[10], i5497[11], i5497[12], i5497[13])
  return i5496
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i5498 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i5499 = data
  i5498.toggleTransition = i5499[0]
  request.r(i5499[1], i5499[2], 0, i5498, 'graphic')
  i5498.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5499[3], i5498.onValueChanged)
  request.r(i5499[4], i5499[5], 0, i5498, 'm_Group')
  i5498.m_IsOn = !!i5499[6]
  i5498.m_Navigation = request.d('UnityEngine.UI.Navigation', i5499[7], i5498.m_Navigation)
  i5498.m_Transition = i5499[8]
  i5498.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5499[9], i5498.m_Colors)
  i5498.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5499[10], i5498.m_SpriteState)
  i5498.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5499[11], i5498.m_AnimationTriggers)
  i5498.m_Interactable = !!i5499[12]
  request.r(i5499[13], i5499[14], 0, i5498, 'm_TargetGraphic')
  return i5498
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i5500 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i5501 = data
  i5500.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5501[0], i5500.m_PersistentCalls)
  return i5500
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i5502 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i5503 = data
  request.r(i5503[0], i5503[1], 0, i5502, 'nameLabel')
  request.r(i5503[2], i5503[3], 0, i5502, 'valueLabel')
  i5502.colorDefault = new pc.Color(i5503[4], i5503[5], i5503[6], i5503[7])
  i5502.colorSelected = new pc.Color(i5503[8], i5503[9], i5503[10], i5503[11])
  return i5502
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i5504 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i5505 = data
  request.r(i5505[0], i5505[1], 0, i5504, 'nameLabel')
  request.r(i5505[2], i5505[3], 0, i5504, 'valueLabel')
  i5504.colorDefault = new pc.Color(i5505[4], i5505[5], i5505[6], i5505[7])
  i5504.colorSelected = new pc.Color(i5505[8], i5505[9], i5505[10], i5505[11])
  return i5504
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i5506 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i5507 = data
  request.r(i5507[0], i5507[1], 0, i5506, 'nameLabel')
  request.r(i5507[2], i5507[3], 0, i5506, 'valueLabel')
  i5506.colorDefault = new pc.Color(i5507[4], i5507[5], i5507[6], i5507[7])
  i5506.colorSelected = new pc.Color(i5507[8], i5507[9], i5507[10], i5507[11])
  return i5506
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i5508 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i5509 = data
  request.r(i5509[0], i5509[1], 0, i5508, 'nextButtonText')
  request.r(i5509[2], i5509[3], 0, i5508, 'previousButtonText')
  request.r(i5509[4], i5509[5], 0, i5508, 'nameLabel')
  request.r(i5509[6], i5509[7], 0, i5508, 'valueLabel')
  i5508.colorDefault = new pc.Color(i5509[8], i5509[9], i5509[10], i5509[11])
  i5508.colorSelected = new pc.Color(i5509[12], i5509[13], i5509[14], i5509[15])
  return i5508
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i5510 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i5511 = data
  request.r(i5511[0], i5511[1], 0, i5510, 'nameLabel')
  i5510.colorDefault = new pc.Color(i5511[2], i5511[3], i5511[4], i5511[5])
  i5510.colorSelected = new pc.Color(i5511[6], i5511[7], i5511[8], i5511[9])
  return i5510
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i5512 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i5513 = data
  request.r(i5513[0], i5513[1], 0, i5512, 'nameLabel')
  request.r(i5513[2], i5513[3], 0, i5512, 'valueToggle')
  i5512.colorDefault = new pc.Color(i5513[4], i5513[5], i5513[6], i5513[7])
  i5512.colorSelected = new pc.Color(i5513[8], i5513[9], i5513[10], i5513[11])
  return i5512
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i5514 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i5515 = data
  i5514.toggleTransition = i5515[0]
  request.r(i5515[1], i5515[2], 0, i5514, 'graphic')
  i5514.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5515[3], i5514.onValueChanged)
  request.r(i5515[4], i5515[5], 0, i5514, 'content')
  request.r(i5515[6], i5515[7], 0, i5514, 'arrowOpened')
  request.r(i5515[8], i5515[9], 0, i5514, 'arrowClosed')
  request.r(i5515[10], i5515[11], 0, i5514, 'm_Group')
  i5514.m_IsOn = !!i5515[12]
  i5514.m_Navigation = request.d('UnityEngine.UI.Navigation', i5515[13], i5514.m_Navigation)
  i5514.m_Transition = i5515[14]
  i5514.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5515[15], i5514.m_Colors)
  i5514.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5515[16], i5514.m_SpriteState)
  i5514.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5515[17], i5514.m_AnimationTriggers)
  i5514.m_Interactable = !!i5515[18]
  request.r(i5515[19], i5515[20], 0, i5514, 'm_TargetGraphic')
  return i5514
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i5516 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i5517 = data
  request.r(i5517[0], i5517[1], 0, i5516, 'nameLabel')
  request.r(i5517[2], i5517[3], 0, i5516, 'valueToggle')
  request.r(i5517[4], i5517[5], 0, i5516, 'colorImage')
  request.r(i5517[6], i5517[7], 0, i5516, 'fieldR')
  request.r(i5517[8], i5517[9], 0, i5516, 'fieldG')
  request.r(i5517[10], i5517[11], 0, i5516, 'fieldB')
  request.r(i5517[12], i5517[13], 0, i5516, 'fieldA')
  i5516.colorDefault = new pc.Color(i5517[14], i5517[15], i5517[16], i5517[17])
  i5516.colorSelected = new pc.Color(i5517[18], i5517[19], i5517[20], i5517[21])
  return i5516
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i5518 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i5519 = data
  request.r(i5519[0], i5519[1], 0, i5518, 'nameLabel')
  request.r(i5519[2], i5519[3], 0, i5518, 'valueLabel')
  i5518.colorDefault = new pc.Color(i5519[4], i5519[5], i5519[6], i5519[7])
  i5518.colorSelected = new pc.Color(i5519[8], i5519[9], i5519[10], i5519[11])
  return i5518
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i5520 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i5521 = data
  request.r(i5521[0], i5521[1], 0, i5520, 'nameLabel')
  request.r(i5521[2], i5521[3], 0, i5520, 'valueToggle')
  request.r(i5521[4], i5521[5], 0, i5520, 'fieldX')
  request.r(i5521[6], i5521[7], 0, i5520, 'fieldY')
  i5520.colorDefault = new pc.Color(i5521[8], i5521[9], i5521[10], i5521[11])
  i5520.colorSelected = new pc.Color(i5521[12], i5521[13], i5521[14], i5521[15])
  return i5520
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i5522 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i5523 = data
  request.r(i5523[0], i5523[1], 0, i5522, 'nameLabel')
  request.r(i5523[2], i5523[3], 0, i5522, 'valueToggle')
  request.r(i5523[4], i5523[5], 0, i5522, 'fieldX')
  request.r(i5523[6], i5523[7], 0, i5522, 'fieldY')
  request.r(i5523[8], i5523[9], 0, i5522, 'fieldZ')
  i5522.colorDefault = new pc.Color(i5523[10], i5523[11], i5523[12], i5523[13])
  i5522.colorSelected = new pc.Color(i5523[14], i5523[15], i5523[16], i5523[17])
  return i5522
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i5524 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i5525 = data
  request.r(i5525[0], i5525[1], 0, i5524, 'nameLabel')
  request.r(i5525[2], i5525[3], 0, i5524, 'valueToggle')
  request.r(i5525[4], i5525[5], 0, i5524, 'fieldX')
  request.r(i5525[6], i5525[7], 0, i5524, 'fieldY')
  request.r(i5525[8], i5525[9], 0, i5524, 'fieldZ')
  request.r(i5525[10], i5525[11], 0, i5524, 'fieldW')
  i5524.colorDefault = new pc.Color(i5525[12], i5525[13], i5525[14], i5525[15])
  i5524.colorSelected = new pc.Color(i5525[16], i5525[17], i5525[18], i5525[19])
  return i5524
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i5526 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i5527 = data
  i5526.colorDefault = new pc.Color(i5527[0], i5527[1], i5527[2], i5527[3])
  i5526.colorSelected = new pc.Color(i5527[4], i5527[5], i5527[6], i5527[7])
  return i5526
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5528 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5529 = data
  i5528.m_Spacing = i5529[0]
  i5528.m_ChildForceExpandWidth = !!i5529[1]
  i5528.m_ChildForceExpandHeight = !!i5529[2]
  i5528.m_ChildControlWidth = !!i5529[3]
  i5528.m_ChildControlHeight = !!i5529[4]
  i5528.m_ChildScaleWidth = !!i5529[5]
  i5528.m_ChildScaleHeight = !!i5529[6]
  i5528.m_ReverseArrangement = !!i5529[7]
  i5528.m_Padding = UnityEngine.RectOffset.FromPaddings(i5529[8], i5529[9], i5529[10], i5529[11])
  i5528.m_ChildAlignment = i5529[12]
  return i5528
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i5530 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i5531 = data
  i5530.colorDefault = new pc.Color(i5531[0], i5531[1], i5531[2], i5531[3])
  i5530.colorSelected = new pc.Color(i5531[4], i5531[5], i5531[6], i5531[7])
  return i5530
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i5532 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i5533 = data
  request.r(i5533[0], i5533[1], 0, i5532, 'nameLabel')
  request.r(i5533[2], i5533[3], 0, i5532, 'header')
  i5532.colorDefault = new pc.Color(i5533[4], i5533[5], i5533[6], i5533[7])
  i5532.colorSelected = new pc.Color(i5533[8], i5533[9], i5533[10], i5533[11])
  return i5532
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i5534 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i5535 = data
  request.r(i5535[0], i5535[1], 0, i5534, 'nameLabel')
  request.r(i5535[2], i5535[3], 0, i5534, 'valueToggle')
  var i5537 = i5535[4]
  var i5536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i5537.length; i += 2) {
  request.r(i5537[i + 0], i5537[i + 1], 1, i5536, '')
  }
  i5534.toggles = i5536
  i5534.colorDefault = new pc.Color(i5535[5], i5535[6], i5535[7], i5535[8])
  i5534.colorSelected = new pc.Color(i5535[9], i5535[10], i5535[11], i5535[12])
  return i5534
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i5540 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i5541 = data
  request.r(i5541[0], i5541[1], 0, i5540, 'nameLabel')
  request.r(i5541[2], i5541[3], 0, i5540, 'valueToggle')
  request.r(i5541[4], i5541[5], 0, i5540, 'checkmarkImage')
  i5540.colorDefault = new pc.Color(i5541[6], i5541[7], i5541[8], i5541[9])
  i5540.colorSelected = new pc.Color(i5541[10], i5541[11], i5541[12], i5541[13])
  return i5540
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i5542 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i5543 = data
  request.r(i5543[0], i5543[1], 0, i5542, 'nameLabel')
  request.r(i5543[2], i5543[3], 0, i5542, 'valueToggle')
  request.r(i5543[4], i5543[5], 0, i5542, 'checkmarkImage')
  i5542.colorDefault = new pc.Color(i5543[6], i5543[7], i5543[8], i5543[9])
  i5542.colorSelected = new pc.Color(i5543[10], i5543[11], i5543[12], i5543[13])
  return i5542
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i5544 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i5545 = data
  request.r(i5545[0], i5545[1], 0, i5544, 'nextButtonText')
  request.r(i5545[2], i5545[3], 0, i5544, 'previousButtonText')
  request.r(i5545[4], i5545[5], 0, i5544, 'nameLabel')
  request.r(i5545[6], i5545[7], 0, i5544, 'valueLabel')
  i5544.colorDefault = new pc.Color(i5545[8], i5545[9], i5545[10], i5545[11])
  i5544.colorSelected = new pc.Color(i5545[12], i5545[13], i5545[14], i5545[15])
  return i5544
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i5546 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i5547 = data
  request.r(i5547[0], i5547[1], 0, i5546, 'nameLabel')
  request.r(i5547[2], i5547[3], 0, i5546, 'valueToggle')
  i5546.colorDefault = new pc.Color(i5547[4], i5547[5], i5547[6], i5547[7])
  i5546.colorSelected = new pc.Color(i5547[8], i5547[9], i5547[10], i5547[11])
  return i5546
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i5548 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i5549 = data
  request.r(i5549[0], i5549[1], 0, i5548, 'nameLabel')
  i5548.colorDefault = new pc.Color(i5549[2], i5549[3], i5549[4], i5549[5])
  i5548.colorSelected = new pc.Color(i5549[6], i5549[7], i5549[8], i5549[9])
  return i5548
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i5550 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i5551 = data
  request.r(i5551[0], i5551[1], 0, i5550, 'nameLabel')
  request.r(i5551[2], i5551[3], 0, i5550, 'valueLabel')
  request.r(i5551[4], i5551[5], 0, i5550, 'progressBarRect')
  i5550.colorDefault = new pc.Color(i5551[6], i5551[7], i5551[8], i5551[9])
  i5550.colorSelected = new pc.Color(i5551[10], i5551[11], i5551[12], i5551[13])
  return i5550
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i5552 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i5553 = data
  request.r(i5553[0], i5553[1], 0, i5552, 'nameLabel')
  request.r(i5553[2], i5553[3], 0, i5552, 'valueLabel')
  i5552.colorDefault = new pc.Color(i5553[4], i5553[5], i5553[6], i5553[7])
  i5552.colorSelected = new pc.Color(i5553[8], i5553[9], i5553[10], i5553[11])
  return i5552
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i5554 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i5555 = data
  request.r(i5555[0], i5555[1], 0, i5554, 'nameLabel')
  request.r(i5555[2], i5555[3], 0, i5554, 'valueLabel')
  i5554.colorDefault = new pc.Color(i5555[4], i5555[5], i5555[6], i5555[7])
  i5554.colorSelected = new pc.Color(i5555[8], i5555[9], i5555[10], i5555[11])
  return i5554
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i5556 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i5557 = data
  request.r(i5557[0], i5557[1], 0, i5556, 'nextButtonText')
  request.r(i5557[2], i5557[3], 0, i5556, 'previousButtonText')
  request.r(i5557[4], i5557[5], 0, i5556, 'nameLabel')
  request.r(i5557[6], i5557[7], 0, i5556, 'valueLabel')
  i5556.colorDefault = new pc.Color(i5557[8], i5557[9], i5557[10], i5557[11])
  i5556.colorSelected = new pc.Color(i5557[12], i5557[13], i5557[14], i5557[15])
  return i5556
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i5558 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i5559 = data
  request.r(i5559[0], i5559[1], 0, i5558, 'nextButtonText')
  request.r(i5559[2], i5559[3], 0, i5558, 'previousButtonText')
  request.r(i5559[4], i5559[5], 0, i5558, 'nameLabel')
  request.r(i5559[6], i5559[7], 0, i5558, 'valueLabel')
  i5558.colorDefault = new pc.Color(i5559[8], i5559[9], i5559[10], i5559[11])
  i5558.colorSelected = new pc.Color(i5559[12], i5559[13], i5559[14], i5559[15])
  return i5558
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i5560 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i5561 = data
  request.r(i5561[0], i5561[1], 0, i5560, 'panel')
  request.r(i5561[2], i5561[3], 0, i5560, 'valuePrefab')
  return i5560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i5562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i5563 = data
  i5562.AdditionalLightsPerObjectLimit = i5563[0]
  i5562.AdditionalLightsRenderingMode = i5563[1]
  i5562.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i5563[2], i5562.LightRenderingMode)
  i5562.ColorGradingLutSize = i5563[3]
  i5562.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i5563[4], i5562.ColorGradingMode)
  i5562.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i5563[5], i5562.MainLightRenderingMode)
  i5562.MainLightRenderingModeValue = i5563[6]
  i5562.SupportsMainLightShadows = !!i5563[7]
  i5562.MixedLightingSupported = !!i5563[8]
  i5562.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i5563[9], i5562.MsaaQuality)
  i5562.MSAA = i5563[10]
  i5562.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i5563[11], i5562.OpaqueDownsampling)
  i5562.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i5563[12], i5562.MainLightShadowmapResolution)
  i5562.MainLightShadowmapResolutionValue = i5563[13]
  i5562.SupportsSoftShadows = !!i5563[14]
  i5562.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i5563[15], i5562.SoftShadowQuality)
  i5562.SoftShadowQualityValue = i5563[16]
  i5562.ShadowDistance = i5563[17]
  i5562.ShadowCascadeCount = i5563[18]
  i5562.Cascade2Split = i5563[19]
  i5562.Cascade3Split = new pc.Vec2( i5563[20], i5563[21] )
  i5562.Cascade4Split = new pc.Vec3( i5563[22], i5563[23], i5563[24] )
  i5562.CascadeBorder = i5563[25]
  i5562.ShadowDepthBias = i5563[26]
  i5562.ShadowNormalBias = i5563[27]
  i5562.RenderScale = i5563[28]
  i5562.RequireDepthTexture = !!i5563[29]
  i5562.RequireOpaqueTexture = !!i5563[30]
  i5562.SupportsHDR = !!i5563[31]
  i5562.SupportsTerrainHoles = !!i5563[32]
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i5564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i5565 = data
  i5564.Disabled = i5565[0]
  i5564.PerVertex = i5565[1]
  i5564.PerPixel = i5565[2]
  return i5564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i5566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i5567 = data
  i5566.LowDynamicRange = i5567[0]
  i5566.HighDynamicRange = i5567[1]
  return i5566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i5568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i5569 = data
  i5568.Disabled = i5569[0]
  i5568._2x = i5569[1]
  i5568._4x = i5569[2]
  i5568._8x = i5569[3]
  return i5568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i5570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i5571 = data
  i5570.None = i5571[0]
  i5570._2xBilinear = i5571[1]
  i5570._4xBox = i5571[2]
  i5570._4xBilinear = i5571[3]
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i5572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i5573 = data
  i5572._256 = i5573[0]
  i5572._512 = i5573[1]
  i5572._1024 = i5573[2]
  i5572._2048 = i5573[3]
  i5572._4096 = i5573[4]
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i5574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i5575 = data
  i5574.UsePipelineSettings = i5575[0]
  i5574.Low = i5575[1]
  i5574.Medium = i5575[2]
  i5574.High = i5575[3]
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5577 = data
  var i5579 = i5577[0]
  var i5578 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5579.length; i += 1) {
    i5578.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5579[i + 0]));
  }
  i5576.ShaderCompilationErrors = i5578
  i5576.name = i5577[1]
  i5576.guid = i5577[2]
  var i5581 = i5577[3]
  var i5580 = []
  for(var i = 0; i < i5581.length; i += 1) {
    i5580.push( i5581[i + 0] );
  }
  i5576.shaderDefinedKeywords = i5580
  var i5583 = i5577[4]
  var i5582 = []
  for(var i = 0; i < i5583.length; i += 1) {
    i5582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5583[i + 0]) );
  }
  i5576.passes = i5582
  var i5585 = i5577[5]
  var i5584 = []
  for(var i = 0; i < i5585.length; i += 1) {
    i5584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5585[i + 0]) );
  }
  i5576.usePasses = i5584
  var i5587 = i5577[6]
  var i5586 = []
  for(var i = 0; i < i5587.length; i += 1) {
    i5586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5587[i + 0]) );
  }
  i5576.defaultParameterValues = i5586
  request.r(i5577[7], i5577[8], 0, i5576, 'unityFallbackShader')
  i5576.readDepth = !!i5577[9]
  i5576.isCreatedByShaderGraph = !!i5577[10]
  i5576.compiled = !!i5577[11]
  return i5576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5591 = data
  i5590.shaderName = i5591[0]
  i5590.errorMessage = i5591[1]
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5596 = root || new pc.UnityShaderPass()
  var i5597 = data
  i5596.id = i5597[0]
  i5596.subShaderIndex = i5597[1]
  i5596.name = i5597[2]
  i5596.passType = i5597[3]
  i5596.grabPassTextureName = i5597[4]
  i5596.usePass = !!i5597[5]
  i5596.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[6], i5596.zTest)
  i5596.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[7], i5596.zWrite)
  i5596.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[8], i5596.culling)
  i5596.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5597[9], i5596.blending)
  i5596.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5597[10], i5596.alphaBlending)
  i5596.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[11], i5596.colorWriteMask)
  i5596.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[12], i5596.offsetUnits)
  i5596.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[13], i5596.offsetFactor)
  i5596.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[14], i5596.stencilRef)
  i5596.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[15], i5596.stencilReadMask)
  i5596.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5597[16], i5596.stencilWriteMask)
  i5596.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5597[17], i5596.stencilOp)
  i5596.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5597[18], i5596.stencilOpFront)
  i5596.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5597[19], i5596.stencilOpBack)
  var i5599 = i5597[20]
  var i5598 = []
  for(var i = 0; i < i5599.length; i += 1) {
    i5598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5599[i + 0]) );
  }
  i5596.tags = i5598
  var i5601 = i5597[21]
  var i5600 = []
  for(var i = 0; i < i5601.length; i += 1) {
    i5600.push( i5601[i + 0] );
  }
  i5596.passDefinedKeywords = i5600
  var i5603 = i5597[22]
  var i5602 = []
  for(var i = 0; i < i5603.length; i += 1) {
    i5602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5603[i + 0]) );
  }
  i5596.passDefinedKeywordGroups = i5602
  var i5605 = i5597[23]
  var i5604 = []
  for(var i = 0; i < i5605.length; i += 1) {
    i5604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5605[i + 0]) );
  }
  i5596.variants = i5604
  var i5607 = i5597[24]
  var i5606 = []
  for(var i = 0; i < i5607.length; i += 1) {
    i5606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5607[i + 0]) );
  }
  i5596.excludedVariants = i5606
  i5596.hasDepthReader = !!i5597[25]
  return i5596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5609 = data
  i5608.val = i5609[0]
  i5608.name = i5609[1]
  return i5608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5611 = data
  i5610.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5611[0], i5610.src)
  i5610.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5611[1], i5610.dst)
  i5610.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5611[2], i5610.op)
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5613 = data
  i5612.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5613[0], i5612.pass)
  i5612.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5613[1], i5612.fail)
  i5612.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5613[2], i5612.zFail)
  i5612.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5613[3], i5612.comp)
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5617 = data
  i5616.name = i5617[0]
  i5616.value = i5617[1]
  return i5616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5621 = data
  var i5623 = i5621[0]
  var i5622 = []
  for(var i = 0; i < i5623.length; i += 1) {
    i5622.push( i5623[i + 0] );
  }
  i5620.keywords = i5622
  i5620.hasDiscard = !!i5621[1]
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5627 = data
  i5626.passId = i5627[0]
  i5626.subShaderIndex = i5627[1]
  var i5629 = i5627[2]
  var i5628 = []
  for(var i = 0; i < i5629.length; i += 1) {
    i5628.push( i5629[i + 0] );
  }
  i5626.keywords = i5628
  i5626.vertexProgram = i5627[3]
  i5626.fragmentProgram = i5627[4]
  i5626.exportedForWebGl2 = !!i5627[5]
  i5626.readDepth = !!i5627[6]
  return i5626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5633 = data
  request.r(i5633[0], i5633[1], 0, i5632, 'shader')
  i5632.pass = i5633[2]
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5637 = data
  i5636.name = i5637[0]
  i5636.type = i5637[1]
  i5636.value = new pc.Vec4( i5637[2], i5637[3], i5637[4], i5637[5] )
  i5636.textureValue = i5637[6]
  i5636.shaderPropertyFlag = i5637[7]
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5639 = data
  i5638.name = i5639[0]
  request.r(i5639[1], i5639[2], 0, i5638, 'texture')
  i5638.aabb = i5639[3]
  i5638.vertices = i5639[4]
  i5638.triangles = i5639[5]
  i5638.textureRect = UnityEngine.Rect.MinMaxRect(i5639[6], i5639[7], i5639[8], i5639[9])
  i5638.packedRect = UnityEngine.Rect.MinMaxRect(i5639[10], i5639[11], i5639[12], i5639[13])
  i5638.border = new pc.Vec4( i5639[14], i5639[15], i5639[16], i5639[17] )
  i5638.transparency = i5639[18]
  i5638.bounds = i5639[19]
  i5638.pixelsPerUnit = i5639[20]
  i5638.textureWidth = i5639[21]
  i5638.textureHeight = i5639[22]
  i5638.nativeSize = new pc.Vec2( i5639[23], i5639[24] )
  i5638.pivot = new pc.Vec2( i5639[25], i5639[26] )
  i5638.textureRectOffset = new pc.Vec2( i5639[27], i5639[28] )
  return i5638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5641 = data
  i5640.name = i5641[0]
  return i5640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5643 = data
  i5642.name = i5643[0]
  i5642.wrapMode = i5643[1]
  i5642.isLooping = !!i5643[2]
  i5642.length = i5643[3]
  var i5645 = i5643[4]
  var i5644 = []
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5645[i + 0]) );
  }
  i5642.curves = i5644
  var i5647 = i5643[5]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 1) {
    i5646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5647[i + 0]) );
  }
  i5642.events = i5646
  i5642.halfPrecision = !!i5643[6]
  i5642._frameRate = i5643[7]
  i5642.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5643[8], i5642.localBounds)
  i5642.hasMuscleCurves = !!i5643[9]
  var i5649 = i5643[10]
  var i5648 = []
  for(var i = 0; i < i5649.length; i += 1) {
    i5648.push( i5649[i + 0] );
  }
  i5642.clipMuscleConstant = i5648
  i5642.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5643[11], i5642.clipBindingConstant)
  return i5642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5653 = data
  i5652.path = i5653[0]
  i5652.hash = i5653[1]
  i5652.componentType = i5653[2]
  i5652.property = i5653[3]
  i5652.keys = i5653[4]
  var i5655 = i5653[5]
  var i5654 = []
  for(var i = 0; i < i5655.length; i += 1) {
    i5654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5655[i + 0]) );
  }
  i5652.objectReferenceKeys = i5654
  return i5652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5659 = data
  i5658.time = i5659[0]
  request.r(i5659[1], i5659[2], 0, i5658, 'value')
  return i5658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5663 = data
  i5662.functionName = i5663[0]
  i5662.floatParameter = i5663[1]
  i5662.intParameter = i5663[2]
  i5662.stringParameter = i5663[3]
  request.r(i5663[4], i5663[5], 0, i5662, 'objectReferenceParameter')
  i5662.time = i5663[6]
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5665 = data
  i5664.center = new pc.Vec3( i5665[0], i5665[1], i5665[2] )
  i5664.extends = new pc.Vec3( i5665[3], i5665[4], i5665[5] )
  return i5664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5669 = data
  var i5671 = i5669[0]
  var i5670 = []
  for(var i = 0; i < i5671.length; i += 1) {
    i5670.push( i5671[i + 0] );
  }
  i5668.genericBindings = i5670
  var i5673 = i5669[1]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 1) {
    i5672.push( i5673[i + 0] );
  }
  i5668.pptrCurveMapping = i5672
  return i5668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5675 = data
  i5674.name = i5675[0]
  i5674.ascent = i5675[1]
  i5674.originalLineHeight = i5675[2]
  i5674.fontSize = i5675[3]
  var i5677 = i5675[4]
  var i5676 = []
  for(var i = 0; i < i5677.length; i += 1) {
    i5676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5677[i + 0]) );
  }
  i5674.characterInfo = i5676
  request.r(i5675[5], i5675[6], 0, i5674, 'texture')
  i5674.originalFontSize = i5675[7]
  return i5674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5681 = data
  i5680.index = i5681[0]
  i5680.advance = i5681[1]
  i5680.bearing = i5681[2]
  i5680.glyphWidth = i5681[3]
  i5680.glyphHeight = i5681[4]
  i5680.minX = i5681[5]
  i5680.maxX = i5681[6]
  i5680.minY = i5681[7]
  i5680.maxY = i5681[8]
  i5680.uvBottomLeftX = i5681[9]
  i5680.uvBottomLeftY = i5681[10]
  i5680.uvBottomRightX = i5681[11]
  i5680.uvBottomRightY = i5681[12]
  i5680.uvTopLeftX = i5681[13]
  i5680.uvTopLeftY = i5681[14]
  i5680.uvTopRightX = i5681[15]
  i5680.uvTopRightY = i5681[16]
  return i5680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5683 = data
  i5682.name = i5683[0]
  var i5685 = i5683[1]
  var i5684 = []
  for(var i = 0; i < i5685.length; i += 1) {
    i5684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5685[i + 0]) );
  }
  i5682.layers = i5684
  var i5687 = i5683[2]
  var i5686 = []
  for(var i = 0; i < i5687.length; i += 1) {
    i5686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5687[i + 0]) );
  }
  i5682.parameters = i5686
  i5682.animationClips = i5683[3]
  i5682.avatarUnsupported = i5683[4]
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5691 = data
  i5690.name = i5691[0]
  i5690.defaultWeight = i5691[1]
  i5690.blendingMode = i5691[2]
  i5690.avatarMask = i5691[3]
  i5690.syncedLayerIndex = i5691[4]
  i5690.syncedLayerAffectsTiming = !!i5691[5]
  i5690.syncedLayers = i5691[6]
  i5690.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5691[7], i5690.stateMachine)
  return i5690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5693 = data
  i5692.id = i5693[0]
  i5692.name = i5693[1]
  i5692.path = i5693[2]
  var i5695 = i5693[3]
  var i5694 = []
  for(var i = 0; i < i5695.length; i += 1) {
    i5694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5695[i + 0]) );
  }
  i5692.states = i5694
  var i5697 = i5693[4]
  var i5696 = []
  for(var i = 0; i < i5697.length; i += 1) {
    i5696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5697[i + 0]) );
  }
  i5692.machines = i5696
  var i5699 = i5693[5]
  var i5698 = []
  for(var i = 0; i < i5699.length; i += 1) {
    i5698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5699[i + 0]) );
  }
  i5692.entryStateTransitions = i5698
  var i5701 = i5693[6]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5701[i + 0]) );
  }
  i5692.exitStateTransitions = i5700
  var i5703 = i5693[7]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5703[i + 0]) );
  }
  i5692.anyStateTransitions = i5702
  i5692.defaultStateId = i5693[8]
  return i5692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5707 = data
  i5706.id = i5707[0]
  i5706.name = i5707[1]
  i5706.cycleOffset = i5707[2]
  i5706.cycleOffsetParameter = i5707[3]
  i5706.cycleOffsetParameterActive = !!i5707[4]
  i5706.mirror = !!i5707[5]
  i5706.mirrorParameter = i5707[6]
  i5706.mirrorParameterActive = !!i5707[7]
  i5706.motionId = i5707[8]
  i5706.nameHash = i5707[9]
  i5706.fullPathHash = i5707[10]
  i5706.speed = i5707[11]
  i5706.speedParameter = i5707[12]
  i5706.speedParameterActive = !!i5707[13]
  i5706.tag = i5707[14]
  i5706.tagHash = i5707[15]
  i5706.writeDefaultValues = !!i5707[16]
  var i5709 = i5707[17]
  var i5708 = []
  for(var i = 0; i < i5709.length; i += 2) {
  request.r(i5709[i + 0], i5709[i + 1], 2, i5708, '')
  }
  i5706.behaviours = i5708
  var i5711 = i5707[18]
  var i5710 = []
  for(var i = 0; i < i5711.length; i += 1) {
    i5710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5711[i + 0]) );
  }
  i5706.transitions = i5710
  return i5706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5717 = data
  i5716.fullPath = i5717[0]
  i5716.canTransitionToSelf = !!i5717[1]
  i5716.duration = i5717[2]
  i5716.exitTime = i5717[3]
  i5716.hasExitTime = !!i5717[4]
  i5716.hasFixedDuration = !!i5717[5]
  i5716.interruptionSource = i5717[6]
  i5716.offset = i5717[7]
  i5716.orderedInterruption = !!i5717[8]
  i5716.destinationStateId = i5717[9]
  i5716.isExit = !!i5717[10]
  i5716.mute = !!i5717[11]
  i5716.solo = !!i5717[12]
  var i5719 = i5717[13]
  var i5718 = []
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5719[i + 0]) );
  }
  i5716.conditions = i5718
  return i5716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5725 = data
  i5724.destinationStateId = i5725[0]
  i5724.isExit = !!i5725[1]
  i5724.mute = !!i5725[2]
  i5724.solo = !!i5725[3]
  var i5727 = i5725[4]
  var i5726 = []
  for(var i = 0; i < i5727.length; i += 1) {
    i5726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5727[i + 0]) );
  }
  i5724.conditions = i5726
  return i5724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5731 = data
  i5730.defaultBool = !!i5731[0]
  i5730.defaultFloat = i5731[1]
  i5730.defaultInt = i5731[2]
  i5730.name = i5731[3]
  i5730.nameHash = i5731[4]
  i5730.type = i5731[5]
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5733 = data
  var i5735 = i5733[0]
  var i5734 = []
  for(var i = 0; i < i5735.length; i += 1) {
    i5734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5735[i + 0]) );
  }
  i5732.files = i5734
  i5732.componentToPrefabIds = i5733[1]
  return i5732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5739 = data
  i5738.path = i5739[0]
  request.r(i5739[1], i5739[2], 0, i5738, 'unityObject')
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5741 = data
  var i5743 = i5741[0]
  var i5742 = []
  for(var i = 0; i < i5743.length; i += 1) {
    i5742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5743[i + 0]) );
  }
  i5740.scriptsExecutionOrder = i5742
  var i5745 = i5741[1]
  var i5744 = []
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5745[i + 0]) );
  }
  i5740.sortingLayers = i5744
  var i5747 = i5741[2]
  var i5746 = []
  for(var i = 0; i < i5747.length; i += 1) {
    i5746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5747[i + 0]) );
  }
  i5740.cullingLayers = i5746
  i5740.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5741[3], i5740.timeSettings)
  i5740.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5741[4], i5740.physicsSettings)
  i5740.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5741[5], i5740.physics2DSettings)
  i5740.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5741[6], i5740.qualitySettings)
  i5740.enableRealtimeShadows = !!i5741[7]
  i5740.enableAutoInstancing = !!i5741[8]
  i5740.enableDynamicBatching = !!i5741[9]
  i5740.lightmapEncodingQuality = i5741[10]
  i5740.desiredColorSpace = i5741[11]
  var i5749 = i5741[12]
  var i5748 = []
  for(var i = 0; i < i5749.length; i += 1) {
    i5748.push( i5749[i + 0] );
  }
  i5740.allTags = i5748
  return i5740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5753 = data
  i5752.name = i5753[0]
  i5752.value = i5753[1]
  return i5752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5757 = data
  i5756.id = i5757[0]
  i5756.name = i5757[1]
  i5756.value = i5757[2]
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5761 = data
  i5760.id = i5761[0]
  i5760.name = i5761[1]
  return i5760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5763 = data
  i5762.fixedDeltaTime = i5763[0]
  i5762.maximumDeltaTime = i5763[1]
  i5762.timeScale = i5763[2]
  i5762.maximumParticleTimestep = i5763[3]
  return i5762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5765 = data
  i5764.gravity = new pc.Vec3( i5765[0], i5765[1], i5765[2] )
  i5764.defaultSolverIterations = i5765[3]
  i5764.bounceThreshold = i5765[4]
  i5764.autoSyncTransforms = !!i5765[5]
  i5764.autoSimulation = !!i5765[6]
  var i5767 = i5765[7]
  var i5766 = []
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5767[i + 0]) );
  }
  i5764.collisionMatrix = i5766
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5771 = data
  i5770.enabled = !!i5771[0]
  i5770.layerId = i5771[1]
  i5770.otherLayerId = i5771[2]
  return i5770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5773 = data
  request.r(i5773[0], i5773[1], 0, i5772, 'material')
  i5772.gravity = new pc.Vec2( i5773[2], i5773[3] )
  i5772.positionIterations = i5773[4]
  i5772.velocityIterations = i5773[5]
  i5772.velocityThreshold = i5773[6]
  i5772.maxLinearCorrection = i5773[7]
  i5772.maxAngularCorrection = i5773[8]
  i5772.maxTranslationSpeed = i5773[9]
  i5772.maxRotationSpeed = i5773[10]
  i5772.baumgarteScale = i5773[11]
  i5772.baumgarteTOIScale = i5773[12]
  i5772.timeToSleep = i5773[13]
  i5772.linearSleepTolerance = i5773[14]
  i5772.angularSleepTolerance = i5773[15]
  i5772.defaultContactOffset = i5773[16]
  i5772.autoSimulation = !!i5773[17]
  i5772.queriesHitTriggers = !!i5773[18]
  i5772.queriesStartInColliders = !!i5773[19]
  i5772.callbacksOnDisable = !!i5773[20]
  i5772.reuseCollisionCallbacks = !!i5773[21]
  i5772.autoSyncTransforms = !!i5773[22]
  var i5775 = i5773[23]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5775[i + 0]) );
  }
  i5772.collisionMatrix = i5774
  return i5772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5779 = data
  i5778.enabled = !!i5779[0]
  i5778.layerId = i5779[1]
  i5778.otherLayerId = i5779[2]
  return i5778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5781 = data
  var i5783 = i5781[0]
  var i5782 = []
  for(var i = 0; i < i5783.length; i += 1) {
    i5782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5783[i + 0]) );
  }
  i5780.qualityLevels = i5782
  var i5785 = i5781[1]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.push( i5785[i + 0] );
  }
  i5780.names = i5784
  i5780.shadows = i5781[2]
  i5780.anisotropicFiltering = i5781[3]
  i5780.antiAliasing = i5781[4]
  i5780.lodBias = i5781[5]
  i5780.shadowCascades = i5781[6]
  i5780.shadowDistance = i5781[7]
  i5780.shadowmaskMode = i5781[8]
  i5780.shadowProjection = i5781[9]
  i5780.shadowResolution = i5781[10]
  i5780.softParticles = !!i5781[11]
  i5780.softVegetation = !!i5781[12]
  i5780.activeColorSpace = i5781[13]
  i5780.desiredColorSpace = i5781[14]
  i5780.masterTextureLimit = i5781[15]
  i5780.maxQueuedFrames = i5781[16]
  i5780.particleRaycastBudget = i5781[17]
  i5780.pixelLightCount = i5781[18]
  i5780.realtimeReflectionProbes = !!i5781[19]
  i5780.shadowCascade2Split = i5781[20]
  i5780.shadowCascade4Split = new pc.Vec3( i5781[21], i5781[22], i5781[23] )
  i5780.streamingMipmapsActive = !!i5781[24]
  i5780.vSyncCount = i5781[25]
  i5780.asyncUploadBufferSize = i5781[26]
  i5780.asyncUploadTimeSlice = i5781[27]
  i5780.billboardsFaceCameraPosition = !!i5781[28]
  i5780.shadowNearPlaneOffset = i5781[29]
  i5780.streamingMipmapsMemoryBudget = i5781[30]
  i5780.maximumLODLevel = i5781[31]
  i5780.streamingMipmapsAddAllCameras = !!i5781[32]
  i5780.streamingMipmapsMaxLevelReduction = i5781[33]
  i5780.streamingMipmapsRenderersPerFrame = i5781[34]
  i5780.resolutionScalingFixedDPIFactor = i5781[35]
  i5780.streamingMipmapsMaxFileIORequests = i5781[36]
  i5780.currentQualityLevel = i5781[37]
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5791 = data
  i5790.weight = i5791[0]
  i5790.vertices = i5791[1]
  i5790.normals = i5791[2]
  i5790.tangents = i5791[3]
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5795 = data
  i5794.mode = i5795[0]
  i5794.parameter = i5795[1]
  i5794.threshold = i5795[2]
  return i5794
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[100],"101":[23],"102":[103],"104":[103],"105":[103],"106":[103],"107":[103],"108":[103],"109":[103],"110":[111],"112":[111],"113":[111],"114":[111],"115":[111],"116":[111],"117":[111],"118":[111],"119":[111],"120":[111],"121":[111],"122":[111],"123":[111],"124":[23],"125":[126],"127":[128],"129":[128],"29":[0],"70":[0],"130":[131],"132":[133],"134":[23],"135":[23],"25":[23],"136":[50],"137":[131],"138":[139],"140":[0],"141":[0],"31":[29],"3":[1,0],"142":[0],"30":[29],"53":[0],"143":[0],"77":[0],"144":[0],"57":[0],"145":[0],"52":[0],"59":[0],"146":[0],"147":[1,0],"148":[0],"58":[0],"56":[0],"149":[0],"10":[1,0],"63":[0],"150":[46],"151":[46],"47":[46],"152":[46],"153":[23],"154":[23],"155":[131]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","Episode1","UnityEngine.GameObject","UnityEngine.UI.Text","Card2V","UnityEngine.Font","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Mesh","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","ParticleFollowUI","ClickCta","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Point","Episode6","Episode2","Episode5","Episode4_1","UpdateButton","Episode4v2","Episode3","Episode7","Episode4_2","Episode5_2","Buttle","ArmAnimation","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

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

Deserializers.buildID = "226d14e6-e172-4b80-b80d-f0df4043bf9e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

