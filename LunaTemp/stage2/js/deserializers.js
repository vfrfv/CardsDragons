var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4194 = root || request.c( 'UnityEngine.JointSpring' )
  var i4195 = data
  i4194.spring = i4195[0]
  i4194.damper = i4195[1]
  i4194.targetPosition = i4195[2]
  return i4194
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4196 = root || request.c( 'UnityEngine.JointMotor' )
  var i4197 = data
  i4196.m_TargetVelocity = i4197[0]
  i4196.m_Force = i4197[1]
  i4196.m_FreeSpin = i4197[2]
  return i4196
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4198 = root || request.c( 'UnityEngine.JointLimits' )
  var i4199 = data
  i4198.m_Min = i4199[0]
  i4198.m_Max = i4199[1]
  i4198.m_Bounciness = i4199[2]
  i4198.m_BounceMinVelocity = i4199[3]
  i4198.m_ContactDistance = i4199[4]
  i4198.minBounce = i4199[5]
  i4198.maxBounce = i4199[6]
  return i4198
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4200 = root || request.c( 'UnityEngine.JointDrive' )
  var i4201 = data
  i4200.m_PositionSpring = i4201[0]
  i4200.m_PositionDamper = i4201[1]
  i4200.m_MaximumForce = i4201[2]
  i4200.m_UseAcceleration = i4201[3]
  return i4200
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4202 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4203 = data
  i4202.m_Spring = i4203[0]
  i4202.m_Damper = i4203[1]
  return i4202
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4204 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4205 = data
  i4204.m_Limit = i4205[0]
  i4204.m_Bounciness = i4205[1]
  i4204.m_ContactDistance = i4205[2]
  return i4204
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4206 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4207 = data
  i4206.m_ExtremumSlip = i4207[0]
  i4206.m_ExtremumValue = i4207[1]
  i4206.m_AsymptoteSlip = i4207[2]
  i4206.m_AsymptoteValue = i4207[3]
  i4206.m_Stiffness = i4207[4]
  return i4206
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4208 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4209 = data
  i4208.m_LowerAngle = i4209[0]
  i4208.m_UpperAngle = i4209[1]
  return i4208
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4210 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4211 = data
  i4210.m_MotorSpeed = i4211[0]
  i4210.m_MaximumMotorTorque = i4211[1]
  return i4210
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4212 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4213 = data
  i4212.m_DampingRatio = i4213[0]
  i4212.m_Frequency = i4213[1]
  i4212.m_Angle = i4213[2]
  return i4212
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4214 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4215 = data
  i4214.m_LowerTranslation = i4215[0]
  i4214.m_UpperTranslation = i4215[1]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4217 = data
  i4216.name = i4217[0]
  i4216.width = i4217[1]
  i4216.height = i4217[2]
  i4216.mipmapCount = i4217[3]
  i4216.anisoLevel = i4217[4]
  i4216.filterMode = i4217[5]
  i4216.hdr = !!i4217[6]
  i4216.format = i4217[7]
  i4216.wrapMode = i4217[8]
  i4216.alphaIsTransparency = !!i4217[9]
  i4216.alphaSource = i4217[10]
  i4216.graphicsFormat = i4217[11]
  i4216.sRGBTexture = !!i4217[12]
  i4216.desiredColorSpace = i4217[13]
  i4216.wrapU = i4217[14]
  i4216.wrapV = i4217[15]
  return i4216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4219 = data
  i4218.position = new pc.Vec3( i4219[0], i4219[1], i4219[2] )
  i4218.scale = new pc.Vec3( i4219[3], i4219[4], i4219[5] )
  i4218.rotation = new pc.Quat(i4219[6], i4219[7], i4219[8], i4219[9])
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4221 = data
  i4220.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4221[0], i4220.main)
  i4220.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4221[1], i4220.colorBySpeed)
  i4220.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4221[2], i4220.colorOverLifetime)
  i4220.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4221[3], i4220.emission)
  i4220.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4221[4], i4220.rotationBySpeed)
  i4220.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4221[5], i4220.rotationOverLifetime)
  i4220.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4221[6], i4220.shape)
  i4220.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4221[7], i4220.sizeBySpeed)
  i4220.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4221[8], i4220.sizeOverLifetime)
  i4220.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4221[9], i4220.textureSheetAnimation)
  i4220.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4221[10], i4220.velocityOverLifetime)
  i4220.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4221[11], i4220.noise)
  i4220.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4221[12], i4220.inheritVelocity)
  i4220.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4221[13], i4220.forceOverLifetime)
  i4220.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4221[14], i4220.limitVelocityOverLifetime)
  i4220.useAutoRandomSeed = !!i4221[15]
  i4220.randomSeed = i4221[16]
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4222 = root || new pc.ParticleSystemMain()
  var i4223 = data
  i4222.duration = i4223[0]
  i4222.loop = !!i4223[1]
  i4222.prewarm = !!i4223[2]
  i4222.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[3], i4222.startDelay)
  i4222.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[4], i4222.startLifetime)
  i4222.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[5], i4222.startSpeed)
  i4222.startSize3D = !!i4223[6]
  i4222.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[7], i4222.startSizeX)
  i4222.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[8], i4222.startSizeY)
  i4222.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[9], i4222.startSizeZ)
  i4222.startRotation3D = !!i4223[10]
  i4222.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[11], i4222.startRotationX)
  i4222.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[12], i4222.startRotationY)
  i4222.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[13], i4222.startRotationZ)
  i4222.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4223[14], i4222.startColor)
  i4222.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4223[15], i4222.gravityModifier)
  i4222.simulationSpace = i4223[16]
  request.r(i4223[17], i4223[18], 0, i4222, 'customSimulationSpace')
  i4222.simulationSpeed = i4223[19]
  i4222.useUnscaledTime = !!i4223[20]
  i4222.scalingMode = i4223[21]
  i4222.playOnAwake = !!i4223[22]
  i4222.maxParticles = i4223[23]
  i4222.emitterVelocityMode = i4223[24]
  i4222.stopAction = i4223[25]
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4224 = root || new pc.MinMaxCurve()
  var i4225 = data
  i4224.mode = i4225[0]
  i4224.curveMin = new pc.AnimationCurve( { keys_flow: i4225[1] } )
  i4224.curveMax = new pc.AnimationCurve( { keys_flow: i4225[2] } )
  i4224.curveMultiplier = i4225[3]
  i4224.constantMin = i4225[4]
  i4224.constantMax = i4225[5]
  return i4224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4226 = root || new pc.MinMaxGradient()
  var i4227 = data
  i4226.mode = i4227[0]
  i4226.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4227[1], i4226.gradientMin)
  i4226.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4227[2], i4226.gradientMax)
  i4226.colorMin = new pc.Color(i4227[3], i4227[4], i4227[5], i4227[6])
  i4226.colorMax = new pc.Color(i4227[7], i4227[8], i4227[9], i4227[10])
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4229 = data
  i4228.mode = i4229[0]
  var i4231 = i4229[1]
  var i4230 = []
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4231[i + 0]) );
  }
  i4228.colorKeys = i4230
  var i4233 = i4229[2]
  var i4232 = []
  for(var i = 0; i < i4233.length; i += 1) {
    i4232.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4233[i + 0]) );
  }
  i4228.alphaKeys = i4232
  return i4228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4234 = root || new pc.ParticleSystemColorBySpeed()
  var i4235 = data
  i4234.enabled = !!i4235[0]
  i4234.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4235[1], i4234.color)
  i4234.range = new pc.Vec2( i4235[2], i4235[3] )
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4239 = data
  i4238.color = new pc.Color(i4239[0], i4239[1], i4239[2], i4239[3])
  i4238.time = i4239[4]
  return i4238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4243 = data
  i4242.alpha = i4243[0]
  i4242.time = i4243[1]
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4244 = root || new pc.ParticleSystemColorOverLifetime()
  var i4245 = data
  i4244.enabled = !!i4245[0]
  i4244.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4245[1], i4244.color)
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4246 = root || new pc.ParticleSystemEmitter()
  var i4247 = data
  i4246.enabled = !!i4247[0]
  i4246.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4247[1], i4246.rateOverTime)
  i4246.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4247[2], i4246.rateOverDistance)
  var i4249 = i4247[3]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4249[i + 0]) );
  }
  i4246.bursts = i4248
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4252 = root || new pc.ParticleSystemBurst()
  var i4253 = data
  i4252.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4253[0], i4252.count)
  i4252.cycleCount = i4253[1]
  i4252.minCount = i4253[2]
  i4252.maxCount = i4253[3]
  i4252.repeatInterval = i4253[4]
  i4252.time = i4253[5]
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4254 = root || new pc.ParticleSystemRotationBySpeed()
  var i4255 = data
  i4254.enabled = !!i4255[0]
  i4254.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4255[1], i4254.x)
  i4254.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4255[2], i4254.y)
  i4254.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4255[3], i4254.z)
  i4254.separateAxes = !!i4255[4]
  i4254.range = new pc.Vec2( i4255[5], i4255[6] )
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4256 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4257 = data
  i4256.enabled = !!i4257[0]
  i4256.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4257[1], i4256.x)
  i4256.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4257[2], i4256.y)
  i4256.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4257[3], i4256.z)
  i4256.separateAxes = !!i4257[4]
  return i4256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4258 = root || new pc.ParticleSystemShape()
  var i4259 = data
  i4258.enabled = !!i4259[0]
  i4258.shapeType = i4259[1]
  i4258.randomDirectionAmount = i4259[2]
  i4258.sphericalDirectionAmount = i4259[3]
  i4258.randomPositionAmount = i4259[4]
  i4258.alignToDirection = !!i4259[5]
  i4258.radius = i4259[6]
  i4258.radiusMode = i4259[7]
  i4258.radiusSpread = i4259[8]
  i4258.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4259[9], i4258.radiusSpeed)
  i4258.radiusThickness = i4259[10]
  i4258.angle = i4259[11]
  i4258.length = i4259[12]
  i4258.boxThickness = new pc.Vec3( i4259[13], i4259[14], i4259[15] )
  i4258.meshShapeType = i4259[16]
  request.r(i4259[17], i4259[18], 0, i4258, 'mesh')
  request.r(i4259[19], i4259[20], 0, i4258, 'meshRenderer')
  request.r(i4259[21], i4259[22], 0, i4258, 'skinnedMeshRenderer')
  i4258.useMeshMaterialIndex = !!i4259[23]
  i4258.meshMaterialIndex = i4259[24]
  i4258.useMeshColors = !!i4259[25]
  i4258.normalOffset = i4259[26]
  i4258.arc = i4259[27]
  i4258.arcMode = i4259[28]
  i4258.arcSpread = i4259[29]
  i4258.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4259[30], i4258.arcSpeed)
  i4258.donutRadius = i4259[31]
  i4258.position = new pc.Vec3( i4259[32], i4259[33], i4259[34] )
  i4258.rotation = new pc.Vec3( i4259[35], i4259[36], i4259[37] )
  i4258.scale = new pc.Vec3( i4259[38], i4259[39], i4259[40] )
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4260 = root || new pc.ParticleSystemSizeBySpeed()
  var i4261 = data
  i4260.enabled = !!i4261[0]
  i4260.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4261[1], i4260.x)
  i4260.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4261[2], i4260.y)
  i4260.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4261[3], i4260.z)
  i4260.separateAxes = !!i4261[4]
  i4260.range = new pc.Vec2( i4261[5], i4261[6] )
  return i4260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4262 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4263 = data
  i4262.enabled = !!i4263[0]
  i4262.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[1], i4262.x)
  i4262.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[2], i4262.y)
  i4262.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[3], i4262.z)
  i4262.separateAxes = !!i4263[4]
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4264 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4265 = data
  i4264.enabled = !!i4265[0]
  i4264.mode = i4265[1]
  i4264.animation = i4265[2]
  i4264.numTilesX = i4265[3]
  i4264.numTilesY = i4265[4]
  i4264.useRandomRow = !!i4265[5]
  i4264.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[6], i4264.frameOverTime)
  i4264.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[7], i4264.startFrame)
  i4264.cycleCount = i4265[8]
  i4264.rowIndex = i4265[9]
  i4264.flipU = i4265[10]
  i4264.flipV = i4265[11]
  i4264.spriteCount = i4265[12]
  var i4267 = i4265[13]
  var i4266 = []
  for(var i = 0; i < i4267.length; i += 2) {
  request.r(i4267[i + 0], i4267[i + 1], 2, i4266, '')
  }
  i4264.sprites = i4266
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4270 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4271 = data
  i4270.enabled = !!i4271[0]
  i4270.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[1], i4270.x)
  i4270.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[2], i4270.y)
  i4270.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[3], i4270.z)
  i4270.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[4], i4270.radial)
  i4270.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[5], i4270.speedModifier)
  i4270.space = i4271[6]
  i4270.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[7], i4270.orbitalX)
  i4270.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[8], i4270.orbitalY)
  i4270.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[9], i4270.orbitalZ)
  i4270.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[10], i4270.orbitalOffsetX)
  i4270.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[11], i4270.orbitalOffsetY)
  i4270.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[12], i4270.orbitalOffsetZ)
  return i4270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4272 = root || new pc.ParticleSystemNoise()
  var i4273 = data
  i4272.enabled = !!i4273[0]
  i4272.separateAxes = !!i4273[1]
  i4272.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[2], i4272.strengthX)
  i4272.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[3], i4272.strengthY)
  i4272.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[4], i4272.strengthZ)
  i4272.frequency = i4273[5]
  i4272.damping = !!i4273[6]
  i4272.octaveCount = i4273[7]
  i4272.octaveMultiplier = i4273[8]
  i4272.octaveScale = i4273[9]
  i4272.quality = i4273[10]
  i4272.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[11], i4272.scrollSpeed)
  i4272.scrollSpeedMultiplier = i4273[12]
  i4272.remapEnabled = !!i4273[13]
  i4272.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[14], i4272.remapX)
  i4272.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[15], i4272.remapY)
  i4272.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[16], i4272.remapZ)
  i4272.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[17], i4272.positionAmount)
  i4272.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[18], i4272.rotationAmount)
  i4272.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4273[19], i4272.sizeAmount)
  return i4272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4274 = root || new pc.ParticleSystemInheritVelocity()
  var i4275 = data
  i4274.enabled = !!i4275[0]
  i4274.mode = i4275[1]
  i4274.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4275[2], i4274.curve)
  return i4274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4276 = root || new pc.ParticleSystemForceOverLifetime()
  var i4277 = data
  i4276.enabled = !!i4277[0]
  i4276.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4277[1], i4276.x)
  i4276.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4277[2], i4276.y)
  i4276.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4277[3], i4276.z)
  i4276.space = i4277[4]
  i4276.randomized = !!i4277[5]
  return i4276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4278 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4279 = data
  i4278.enabled = !!i4279[0]
  i4278.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4279[1], i4278.limit)
  i4278.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4279[2], i4278.limitX)
  i4278.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4279[3], i4278.limitY)
  i4278.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4279[4], i4278.limitZ)
  i4278.dampen = i4279[5]
  i4278.separateAxes = !!i4279[6]
  i4278.space = i4279[7]
  i4278.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4279[8], i4278.drag)
  i4278.multiplyDragByParticleSize = !!i4279[9]
  i4278.multiplyDragByParticleVelocity = !!i4279[10]
  return i4278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4281 = data
  i4280.enabled = !!i4281[0]
  request.r(i4281[1], i4281[2], 0, i4280, 'sharedMaterial')
  var i4283 = i4281[3]
  var i4282 = []
  for(var i = 0; i < i4283.length; i += 2) {
  request.r(i4283[i + 0], i4283[i + 1], 2, i4282, '')
  }
  i4280.sharedMaterials = i4282
  i4280.receiveShadows = !!i4281[4]
  i4280.shadowCastingMode = i4281[5]
  i4280.sortingLayerID = i4281[6]
  i4280.sortingOrder = i4281[7]
  i4280.lightmapIndex = i4281[8]
  i4280.lightmapSceneIndex = i4281[9]
  i4280.lightmapScaleOffset = new pc.Vec4( i4281[10], i4281[11], i4281[12], i4281[13] )
  i4280.lightProbeUsage = i4281[14]
  i4280.reflectionProbeUsage = i4281[15]
  request.r(i4281[16], i4281[17], 0, i4280, 'mesh')
  i4280.meshCount = i4281[18]
  i4280.activeVertexStreamsCount = i4281[19]
  i4280.alignment = i4281[20]
  i4280.renderMode = i4281[21]
  i4280.sortMode = i4281[22]
  i4280.lengthScale = i4281[23]
  i4280.velocityScale = i4281[24]
  i4280.cameraVelocityScale = i4281[25]
  i4280.normalDirection = i4281[26]
  i4280.sortingFudge = i4281[27]
  i4280.minParticleSize = i4281[28]
  i4280.maxParticleSize = i4281[29]
  i4280.pivot = new pc.Vec3( i4281[30], i4281[31], i4281[32] )
  request.r(i4281[33], i4281[34], 0, i4280, 'trailMaterial')
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4287 = data
  i4286.name = i4287[0]
  i4286.tagId = i4287[1]
  i4286.enabled = !!i4287[2]
  i4286.isStatic = !!i4287[3]
  i4286.layer = i4287[4]
  return i4286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4288 = root || new pc.UnityMaterial()
  var i4289 = data
  i4288.name = i4289[0]
  request.r(i4289[1], i4289[2], 0, i4288, 'shader')
  i4288.renderQueue = i4289[3]
  i4288.enableInstancing = !!i4289[4]
  var i4291 = i4289[5]
  var i4290 = []
  for(var i = 0; i < i4291.length; i += 1) {
    i4290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4291[i + 0]) );
  }
  i4288.floatParameters = i4290
  var i4293 = i4289[6]
  var i4292 = []
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4293[i + 0]) );
  }
  i4288.colorParameters = i4292
  var i4295 = i4289[7]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4295[i + 0]) );
  }
  i4288.vectorParameters = i4294
  var i4297 = i4289[8]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 1) {
    i4296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4297[i + 0]) );
  }
  i4288.textureParameters = i4296
  var i4299 = i4289[9]
  var i4298 = []
  for(var i = 0; i < i4299.length; i += 1) {
    i4298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4299[i + 0]) );
  }
  i4288.materialFlags = i4298
  return i4288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4303 = data
  i4302.name = i4303[0]
  i4302.value = i4303[1]
  return i4302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4307 = data
  i4306.name = i4307[0]
  i4306.value = new pc.Color(i4307[1], i4307[2], i4307[3], i4307[4])
  return i4306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4311 = data
  i4310.name = i4311[0]
  i4310.value = new pc.Vec4( i4311[1], i4311[2], i4311[3], i4311[4] )
  return i4310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4315 = data
  i4314.name = i4315[0]
  request.r(i4315[1], i4315[2], 0, i4314, 'value')
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4319 = data
  i4318.name = i4319[0]
  i4318.enabled = !!i4319[1]
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4321 = data
  i4320.name = i4321[0]
  i4320.halfPrecision = !!i4321[1]
  i4320.useUInt32IndexFormat = !!i4321[2]
  i4320.vertexCount = i4321[3]
  i4320.aabb = i4321[4]
  var i4323 = i4321[5]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.push( !!i4323[i + 0] );
  }
  i4320.streams = i4322
  i4320.vertices = i4321[6]
  var i4325 = i4321[7]
  var i4324 = []
  for(var i = 0; i < i4325.length; i += 1) {
    i4324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4325[i + 0]) );
  }
  i4320.subMeshes = i4324
  var i4327 = i4321[8]
  var i4326 = []
  for(var i = 0; i < i4327.length; i += 16) {
    i4326.push( new pc.Mat4().setData(i4327[i + 0], i4327[i + 1], i4327[i + 2], i4327[i + 3],  i4327[i + 4], i4327[i + 5], i4327[i + 6], i4327[i + 7],  i4327[i + 8], i4327[i + 9], i4327[i + 10], i4327[i + 11],  i4327[i + 12], i4327[i + 13], i4327[i + 14], i4327[i + 15]) );
  }
  i4320.bindposes = i4326
  var i4329 = i4321[9]
  var i4328 = []
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4329[i + 0]) );
  }
  i4320.blendShapes = i4328
  return i4320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4335 = data
  i4334.triangles = i4335[0]
  return i4334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4341 = data
  i4340.name = i4341[0]
  var i4343 = i4341[1]
  var i4342 = []
  for(var i = 0; i < i4343.length; i += 1) {
    i4342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4343[i + 0]) );
  }
  i4340.frames = i4342
  return i4340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4345 = data
  i4344.pivot = new pc.Vec2( i4345[0], i4345[1] )
  i4344.anchorMin = new pc.Vec2( i4345[2], i4345[3] )
  i4344.anchorMax = new pc.Vec2( i4345[4], i4345[5] )
  i4344.sizeDelta = new pc.Vec2( i4345[6], i4345[7] )
  i4344.anchoredPosition3D = new pc.Vec3( i4345[8], i4345[9], i4345[10] )
  i4344.rotation = new pc.Quat(i4345[11], i4345[12], i4345[13], i4345[14])
  i4344.scale = new pc.Vec3( i4345[15], i4345[16], i4345[17] )
  return i4344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4347 = data
  i4346.cullTransparentMesh = !!i4347[0]
  return i4346
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4348 = root || request.c( 'UnityEngine.UI.Image' )
  var i4349 = data
  request.r(i4349[0], i4349[1], 0, i4348, 'm_Sprite')
  i4348.m_Type = i4349[2]
  i4348.m_PreserveAspect = !!i4349[3]
  i4348.m_FillCenter = !!i4349[4]
  i4348.m_FillMethod = i4349[5]
  i4348.m_FillAmount = i4349[6]
  i4348.m_FillClockwise = !!i4349[7]
  i4348.m_FillOrigin = i4349[8]
  i4348.m_UseSpriteMesh = !!i4349[9]
  i4348.m_PixelsPerUnitMultiplier = i4349[10]
  request.r(i4349[11], i4349[12], 0, i4348, 'm_Material')
  i4348.m_Maskable = !!i4349[13]
  i4348.m_Color = new pc.Color(i4349[14], i4349[15], i4349[16], i4349[17])
  i4348.m_RaycastTarget = !!i4349[18]
  i4348.m_RaycastPadding = new pc.Vec4( i4349[19], i4349[20], i4349[21], i4349[22] )
  return i4348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4351 = data
  i4350.m_Alpha = i4351[0]
  i4350.m_Interactable = !!i4351[1]
  i4350.m_BlocksRaycasts = !!i4351[2]
  i4350.m_IgnoreParentGroups = !!i4351[3]
  i4350.enabled = !!i4351[4]
  return i4350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4353 = data
  i4352.name = i4353[0]
  i4352.index = i4353[1]
  i4352.startup = !!i4353[2]
  return i4352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4355 = data
  i4354.enabled = !!i4355[0]
  i4354.aspect = i4355[1]
  i4354.orthographic = !!i4355[2]
  i4354.orthographicSize = i4355[3]
  i4354.backgroundColor = new pc.Color(i4355[4], i4355[5], i4355[6], i4355[7])
  i4354.nearClipPlane = i4355[8]
  i4354.farClipPlane = i4355[9]
  i4354.fieldOfView = i4355[10]
  i4354.depth = i4355[11]
  i4354.clearFlags = i4355[12]
  i4354.cullingMask = i4355[13]
  i4354.rect = i4355[14]
  request.r(i4355[15], i4355[16], 0, i4354, 'targetTexture')
  i4354.usePhysicalProperties = !!i4355[17]
  i4354.focalLength = i4355[18]
  i4354.sensorSize = new pc.Vec2( i4355[19], i4355[20] )
  i4354.lensShift = new pc.Vec2( i4355[21], i4355[22] )
  i4354.gateFit = i4355[23]
  i4354.commandBufferCount = i4355[24]
  i4354.cameraType = i4355[25]
  return i4354
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i4356 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i4357 = data
  i4356.m_RenderShadows = !!i4357[0]
  i4356.m_RequiresDepthTextureOption = i4357[1]
  i4356.m_RequiresOpaqueTextureOption = i4357[2]
  i4356.m_CameraType = i4357[3]
  var i4359 = i4357[4]
  var i4358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i4359.length; i += 2) {
  request.r(i4359[i + 0], i4359[i + 1], 1, i4358, '')
  }
  i4356.m_Cameras = i4358
  i4356.m_RendererIndex = i4357[5]
  i4356.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4357[6] )
  request.r(i4357[7], i4357[8], 0, i4356, 'm_VolumeTrigger')
  i4356.m_VolumeFrameworkUpdateModeOption = i4357[9]
  i4356.m_RenderPostProcessing = !!i4357[10]
  i4356.m_Antialiasing = i4357[11]
  i4356.m_AntialiasingQuality = i4357[12]
  i4356.m_StopNaN = !!i4357[13]
  i4356.m_Dithering = !!i4357[14]
  i4356.m_ClearDepth = !!i4357[15]
  i4356.m_AllowXRRendering = !!i4357[16]
  i4356.m_AllowHDROutput = !!i4357[17]
  i4356.m_UseScreenCoordOverride = !!i4357[18]
  i4356.m_ScreenSizeOverride = new pc.Vec4( i4357[19], i4357[20], i4357[21], i4357[22] )
  i4356.m_ScreenCoordScaleBias = new pc.Vec4( i4357[23], i4357[24], i4357[25], i4357[26] )
  i4356.m_RequiresDepthTexture = !!i4357[27]
  i4356.m_RequiresColorTexture = !!i4357[28]
  i4356.m_Version = i4357[29]
  i4356.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i4357[30], i4356.m_TaaSettings)
  return i4356
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i4362 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i4363 = data
  i4362.m_Quality = i4363[0]
  i4362.m_FrameInfluence = i4363[1]
  i4362.m_JitterScale = i4363[2]
  i4362.m_MipBias = i4363[3]
  i4362.m_VarianceClampScale = i4363[4]
  i4362.m_ContrastAdaptiveSharpening = i4363[5]
  return i4362
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i4364 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i4365 = data
  i4364.m_ComponentVersion = i4365[0]
  i4364.m_LightType = i4365[1]
  i4364.m_BlendStyleIndex = i4365[2]
  i4364.m_FalloffIntensity = i4365[3]
  i4364.m_Color = new pc.Color(i4365[4], i4365[5], i4365[6], i4365[7])
  i4364.m_Intensity = i4365[8]
  i4364.m_LightVolumeIntensity = i4365[9]
  i4364.m_LightVolumeIntensityEnabled = !!i4365[10]
  i4364.m_ApplyToSortingLayers = i4365[11]
  request.r(i4365[12], i4365[13], 0, i4364, 'm_LightCookieSprite')
  request.r(i4365[14], i4365[15], 0, i4364, 'm_DeprecatedPointLightCookieSprite')
  i4364.m_LightOrder = i4365[16]
  i4364.m_AlphaBlendOnOverlap = !!i4365[17]
  i4364.m_OverlapOperation = i4365[18]
  i4364.m_NormalMapDistance = i4365[19]
  i4364.m_NormalMapQuality = i4365[20]
  i4364.m_UseNormalMap = !!i4365[21]
  i4364.m_ShadowIntensityEnabled = !!i4365[22]
  i4364.m_ShadowIntensity = i4365[23]
  i4364.m_ShadowVolumeIntensityEnabled = !!i4365[24]
  i4364.m_ShadowVolumeIntensity = i4365[25]
  i4364.m_PointLightInnerAngle = i4365[26]
  i4364.m_PointLightOuterAngle = i4365[27]
  i4364.m_PointLightInnerRadius = i4365[28]
  i4364.m_PointLightOuterRadius = i4365[29]
  i4364.m_ShapeLightParametricSides = i4365[30]
  i4364.m_ShapeLightParametricAngleOffset = i4365[31]
  i4364.m_ShapeLightParametricRadius = i4365[32]
  i4364.m_ShapeLightFalloffSize = i4365[33]
  i4364.m_ShapeLightFalloffOffset = new pc.Vec2( i4365[34], i4365[35] )
  var i4367 = i4365[36]
  var i4366 = []
  for(var i = 0; i < i4367.length; i += 3) {
    i4366.push( new pc.Vec3( i4367[i + 0], i4367[i + 1], i4367[i + 2] ) );
  }
  i4364.m_ShapePath = i4366
  return i4364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4371 = data
  i4370.enabled = !!i4371[0]
  i4370.planeDistance = i4371[1]
  i4370.referencePixelsPerUnit = i4371[2]
  i4370.isFallbackOverlay = !!i4371[3]
  i4370.renderMode = i4371[4]
  i4370.renderOrder = i4371[5]
  i4370.sortingLayerName = i4371[6]
  i4370.sortingOrder = i4371[7]
  i4370.scaleFactor = i4371[8]
  request.r(i4371[9], i4371[10], 0, i4370, 'worldCamera')
  i4370.overrideSorting = !!i4371[11]
  i4370.pixelPerfect = !!i4371[12]
  i4370.targetDisplay = i4371[13]
  i4370.overridePixelPerfect = !!i4371[14]
  return i4370
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4372 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4373 = data
  i4372.m_UiScaleMode = i4373[0]
  i4372.m_ReferencePixelsPerUnit = i4373[1]
  i4372.m_ScaleFactor = i4373[2]
  i4372.m_ReferenceResolution = new pc.Vec2( i4373[3], i4373[4] )
  i4372.m_ScreenMatchMode = i4373[5]
  i4372.m_MatchWidthOrHeight = i4373[6]
  i4372.m_PhysicalUnit = i4373[7]
  i4372.m_FallbackScreenDPI = i4373[8]
  i4372.m_DefaultSpriteDPI = i4373[9]
  i4372.m_DynamicPixelsPerUnit = i4373[10]
  i4372.m_PresetInfoIsWorld = !!i4373[11]
  return i4372
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4374 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4375 = data
  i4374.m_IgnoreReversedGraphics = !!i4375[0]
  i4374.m_BlockingObjects = i4375[1]
  i4374.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4375[2] )
  return i4374
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4376 = root || request.c( 'UnityEngine.UI.Text' )
  var i4377 = data
  i4376.m_FontData = request.d('UnityEngine.UI.FontData', i4377[0], i4376.m_FontData)
  i4376.m_Text = i4377[1]
  request.r(i4377[2], i4377[3], 0, i4376, 'm_Material')
  i4376.m_Maskable = !!i4377[4]
  i4376.m_Color = new pc.Color(i4377[5], i4377[6], i4377[7], i4377[8])
  i4376.m_RaycastTarget = !!i4377[9]
  i4376.m_RaycastPadding = new pc.Vec4( i4377[10], i4377[11], i4377[12], i4377[13] )
  return i4376
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4378 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4379 = data
  request.r(i4379[0], i4379[1], 0, i4378, 'm_Font')
  i4378.m_FontSize = i4379[2]
  i4378.m_FontStyle = i4379[3]
  i4378.m_BestFit = !!i4379[4]
  i4378.m_MinSize = i4379[5]
  i4378.m_MaxSize = i4379[6]
  i4378.m_Alignment = i4379[7]
  i4378.m_AlignByGeometry = !!i4379[8]
  i4378.m_RichText = !!i4379[9]
  i4378.m_HorizontalOverflow = i4379[10]
  i4378.m_VerticalOverflow = i4379[11]
  i4378.m_LineSpacing = i4379[12]
  return i4378
}

Deserializers["Episode5"] = function (request, data, root) {
  var i4380 = root || request.c( 'Episode5' )
  var i4381 = data
  request.r(i4381[0], i4381[1], 0, i4380, '_card1_1_2')
  request.r(i4381[2], i4381[3], 0, i4380, '_card1_2_2')
  request.r(i4381[4], i4381[5], 0, i4380, '_card1_3_2')
  request.r(i4381[6], i4381[7], 0, i4380, '_card1_1')
  request.r(i4381[8], i4381[9], 0, i4380, '_card2_1')
  request.r(i4381[10], i4381[11], 0, i4380, '_coinsText')
  request.r(i4381[12], i4381[13], 0, i4380, '_particleSystem')
  return i4380
}

Deserializers["Episode4_1"] = function (request, data, root) {
  var i4382 = root || request.c( 'Episode4_1' )
  var i4383 = data
  request.r(i4383[0], i4383[1], 0, i4382, '_cart1__2')
  request.r(i4383[2], i4383[3], 0, i4382, '_cart2__2')
  request.r(i4383[4], i4383[5], 0, i4382, '_cart3__2')
  request.r(i4383[6], i4383[7], 0, i4382, '_cart1_1')
  request.r(i4383[8], i4383[9], 0, i4382, '_cart2_1')
  request.r(i4383[10], i4383[11], 0, i4382, '_cart3_1')
  request.r(i4383[12], i4383[13], 0, i4382, '_arm')
  request.r(i4383[14], i4383[15], 0, i4382, '_coinText')
  request.r(i4383[16], i4383[17], 0, i4382, '_particleSystem')
  request.r(i4383[18], i4383[19], 0, i4382, '_particleDragon')
  return i4382
}

Deserializers["Episode1"] = function (request, data, root) {
  var i4384 = root || request.c( 'Episode1' )
  var i4385 = data
  request.r(i4385[0], i4385[1], 0, i4384, '_arm')
  request.r(i4385[2], i4385[3], 0, i4384, '_points')
  request.r(i4385[4], i4385[5], 0, i4384, '_unit')
  request.r(i4385[6], i4385[7], 0, i4384, '_particleSystem')
  request.r(i4385[8], i4385[9], 0, i4384, '_textCoins')
  request.r(i4385[10], i4385[11], 0, i4384, '_textDamage')
  request.r(i4385[12], i4385[13], 0, i4384, '_textHealth')
  request.r(i4385[14], i4385[15], 0, i4384, '_textHealth2')
  request.r(i4385[16], i4385[17], 0, i4384, '_textDamage2')
  i4384.scaleDuration = i4385[18]
  i4384.moveDuration = i4385[19]
  i4384.targetScale = new pc.Vec3( i4385[20], i4385[21], i4385[22] )
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4387 = data
  request.r(i4387[0], i4387[1], 0, i4386, 'animatorController')
  request.r(i4387[2], i4387[3], 0, i4386, 'avatar')
  i4386.updateMode = i4387[4]
  i4386.hasTransformHierarchy = !!i4387[5]
  i4386.applyRootMotion = !!i4387[6]
  var i4389 = i4387[7]
  var i4388 = []
  for(var i = 0; i < i4389.length; i += 2) {
  request.r(i4389[i + 0], i4389[i + 1], 2, i4388, '')
  }
  i4386.humanBones = i4388
  i4386.enabled = !!i4387[8]
  return i4386
}

Deserializers["Card"] = function (request, data, root) {
  var i4392 = root || request.c( 'Card' )
  var i4393 = data
  request.r(i4393[0], i4393[1], 0, i4392, '_points')
  i4392.scaleDuration = i4393[2]
  i4392.moveDuration = i4393[3]
  i4392.targetScale = new pc.Vec3( i4393[4], i4393[5], i4393[6] )
  request.r(i4393[7], i4393[8], 0, i4392, '_particleSystem')
  request.r(i4393[9], i4393[10], 0, i4392, '_particleDragon')
  return i4392
}

Deserializers["Episode2"] = function (request, data, root) {
  var i4394 = root || request.c( 'Episode2' )
  var i4395 = data
  request.r(i4395[0], i4395[1], 0, i4394, '_arm')
  request.r(i4395[2], i4395[3], 0, i4394, '_points')
  request.r(i4395[4], i4395[5], 0, i4394, '_unit1')
  request.r(i4395[6], i4395[7], 0, i4394, '_unit2')
  request.r(i4395[8], i4395[9], 0, i4394, '_particleSystem1')
  request.r(i4395[10], i4395[11], 0, i4394, '_particleSystem2')
  request.r(i4395[12], i4395[13], 0, i4394, '_textCoins')
  request.r(i4395[14], i4395[15], 0, i4394, '_textDamage')
  request.r(i4395[16], i4395[17], 0, i4394, '_textHealth')
  request.r(i4395[18], i4395[19], 0, i4394, '_textHealth2')
  request.r(i4395[20], i4395[21], 0, i4394, '_textDamage2')
  i4394.scaleDuration = i4395[22]
  i4394.moveDuration = i4395[23]
  i4394.targetScale = new pc.Vec3( i4395[24], i4395[25], i4395[26] )
  return i4394
}

Deserializers["Episode4"] = function (request, data, root) {
  var i4396 = root || request.c( 'Episode4' )
  var i4397 = data
  request.r(i4397[0], i4397[1], 0, i4396, '_cardDragcone1_1')
  request.r(i4397[2], i4397[3], 0, i4396, '_cardDragcone2_2')
  request.r(i4397[4], i4397[5], 0, i4396, '_cardDragcone')
  request.r(i4397[6], i4397[7], 0, i4396, '_arm3_3')
  request.r(i4397[8], i4397[9], 0, i4396, '_shopButton')
  request.r(i4397[10], i4397[11], 0, i4396, '_points')
  request.r(i4397[12], i4397[13], 0, i4396, '_textCoins')
  i4396.scaleDuration = i4397[14]
  i4396.moveDuration = i4397[15]
  i4396.targetScale = new pc.Vec3( i4397[16], i4397[17], i4397[18] )
  return i4396
}

Deserializers["Episode6"] = function (request, data, root) {
  var i4398 = root || request.c( 'Episode6' )
  var i4399 = data
  request.r(i4399[0], i4399[1], 0, i4398, '_arm')
  request.r(i4399[2], i4399[3], 0, i4398, '_points')
  request.r(i4399[4], i4399[5], 0, i4398, '_cart')
  request.r(i4399[6], i4399[7], 0, i4398, '_cartPoint')
  request.r(i4399[8], i4399[9], 0, i4398, '_coinsText')
  request.r(i4399[10], i4399[11], 0, i4398, '_textDamage')
  request.r(i4399[12], i4399[13], 0, i4398, '_textHealth')
  request.r(i4399[14], i4399[15], 0, i4398, '_textHealth2')
  request.r(i4399[16], i4399[17], 0, i4398, '_textDamage2')
  i4398.scaleDuration = i4399[18]
  i4398.moveDuration = i4399[19]
  i4398.targetScale = new pc.Vec3( i4399[20], i4399[21], i4399[22] )
  request.r(i4399[23], i4399[24], 0, i4398, '_particleDragon')
  request.r(i4399[25], i4399[26], 0, i4398, '_particleCards')
  return i4398
}

Deserializers["Episode3"] = function (request, data, root) {
  var i4400 = root || request.c( 'Episode3' )
  var i4401 = data
  request.r(i4401[0], i4401[1], 0, i4400, '_battle')
  request.r(i4401[2], i4401[3], 0, i4400, '_button')
  request.r(i4401[4], i4401[5], 0, i4400, '_cardDracone')
  request.r(i4401[6], i4401[7], 0, i4400, '_point')
  request.r(i4401[8], i4401[9], 0, i4400, '_cardEnemye1')
  request.r(i4401[10], i4401[11], 0, i4400, '_cardEnemye2')
  request.r(i4401[12], i4401[13], 0, i4400, '_cardEnemye3')
  request.r(i4401[14], i4401[15], 0, i4400, '_particleSystem1')
  request.r(i4401[16], i4401[17], 0, i4400, '_particleSystem2')
  request.r(i4401[18], i4401[19], 0, i4400, '_particleSystem3')
  request.r(i4401[20], i4401[21], 0, i4400, '_particleButton')
  request.r(i4401[22], i4401[23], 0, i4400, '_textCoins')
  request.r(i4401[24], i4401[25], 0, i4400, '_winVictoty')
  return i4400
}

Deserializers["Episode7"] = function (request, data, root) {
  var i4402 = root || request.c( 'Episode7' )
  var i4403 = data
  request.r(i4403[0], i4403[1], 0, i4402, '_battle')
  request.r(i4403[2], i4403[3], 0, i4402, '_button')
  request.r(i4403[4], i4403[5], 0, i4402, '_cardEnemye1')
  request.r(i4403[6], i4403[7], 0, i4402, '_cardEnemye2')
  request.r(i4403[8], i4403[9], 0, i4402, '_cardEnemye3')
  request.r(i4403[10], i4403[11], 0, i4402, '_cardEnemye4')
  request.r(i4403[12], i4403[13], 0, i4402, '_cardEnemye5')
  request.r(i4403[14], i4403[15], 0, i4402, '_cardEnemye6')
  request.r(i4403[16], i4403[17], 0, i4402, '_particleSystem1')
  request.r(i4403[18], i4403[19], 0, i4402, '_particleSystem2')
  request.r(i4403[20], i4403[21], 0, i4402, '_particleSystem3')
  request.r(i4403[22], i4403[23], 0, i4402, '_particleSystem4')
  request.r(i4403[24], i4403[25], 0, i4402, '_particleSystem5')
  request.r(i4403[26], i4403[27], 0, i4402, '_particleSystem6')
  request.r(i4403[28], i4403[29], 0, i4402, '_winVictoty')
  request.r(i4403[30], i4403[31], 0, i4402, '_winFinal')
  request.r(i4403[32], i4403[33], 0, i4402, '_particleSystem')
  request.r(i4403[34], i4403[35], 0, i4402, '_particleDragon')
  return i4402
}

Deserializers["Episode4_2"] = function (request, data, root) {
  var i4404 = root || request.c( 'Episode4_2' )
  var i4405 = data
  request.r(i4405[0], i4405[1], 0, i4404, '_battle')
  request.r(i4405[2], i4405[3], 0, i4404, '_button')
  request.r(i4405[4], i4405[5], 0, i4404, '_cardEnemye1')
  request.r(i4405[6], i4405[7], 0, i4404, '_cardEnemye2')
  request.r(i4405[8], i4405[9], 0, i4404, '_cardDracone1')
  request.r(i4405[10], i4405[11], 0, i4404, '_cardDracone2')
  request.r(i4405[12], i4405[13], 0, i4404, '_cardDracone3')
  request.r(i4405[14], i4405[15], 0, i4404, '_winDefeat')
  request.r(i4405[16], i4405[17], 0, i4404, '_winFinal')
  request.r(i4405[18], i4405[19], 0, i4404, '_particleSystem1')
  request.r(i4405[20], i4405[21], 0, i4404, '_particleSystem2')
  request.r(i4405[22], i4405[23], 0, i4404, '_particleSystem3')
  request.r(i4405[24], i4405[25], 0, i4404, '_particleSystem4')
  request.r(i4405[26], i4405[27], 0, i4404, '_particleSystem5')
  request.r(i4405[28], i4405[29], 0, i4404, '_particleButtun')
  request.r(i4405[30], i4405[31], 0, i4404, '_particleDragon')
  return i4404
}

Deserializers["Episode5_2"] = function (request, data, root) {
  var i4406 = root || request.c( 'Episode5_2' )
  var i4407 = data
  request.r(i4407[0], i4407[1], 0, i4406, '_battle')
  request.r(i4407[2], i4407[3], 0, i4406, '_button')
  request.r(i4407[4], i4407[5], 0, i4406, '_cardEnemye1')
  request.r(i4407[6], i4407[7], 0, i4406, '_cardEnemye2')
  request.r(i4407[8], i4407[9], 0, i4406, '_cardDracone1')
  request.r(i4407[10], i4407[11], 0, i4406, '_cardDracone2')
  request.r(i4407[12], i4407[13], 0, i4406, '_cardDracone3')
  request.r(i4407[14], i4407[15], 0, i4406, '_cardDracone4')
  request.r(i4407[16], i4407[17], 0, i4406, '_winDefeat')
  request.r(i4407[18], i4407[19], 0, i4406, '_winFinal')
  request.r(i4407[20], i4407[21], 0, i4406, '_particleSystem1')
  request.r(i4407[22], i4407[23], 0, i4406, '_particleSystem2')
  request.r(i4407[24], i4407[25], 0, i4406, '_particleSystem3')
  request.r(i4407[26], i4407[27], 0, i4406, '_particleSystem4')
  request.r(i4407[28], i4407[29], 0, i4406, '_particleSystem5')
  request.r(i4407[30], i4407[31], 0, i4406, '_particleSystem6')
  request.r(i4407[32], i4407[33], 0, i4406, '_particleSystem7')
  request.r(i4407[34], i4407[35], 0, i4406, '_particleSystem')
  return i4406
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4408 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4409 = data
  request.r(i4409[0], i4409[1], 0, i4408, 'm_FirstSelected')
  i4408.m_sendNavigationEvents = !!i4409[2]
  i4408.m_DragThreshold = i4409[3]
  return i4408
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4410 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4411 = data
  i4410.m_HorizontalAxis = i4411[0]
  i4410.m_VerticalAxis = i4411[1]
  i4410.m_SubmitButton = i4411[2]
  i4410.m_CancelButton = i4411[3]
  i4410.m_InputActionsPerSecond = i4411[4]
  i4410.m_RepeatDelay = i4411[5]
  i4410.m_ForceModuleActive = !!i4411[6]
  i4410.m_SendPointerHoverToParent = !!i4411[7]
  return i4410
}

Deserializers["Scenario"] = function (request, data, root) {
  var i4412 = root || request.c( 'Scenario' )
  var i4413 = data
  request.r(i4413[0], i4413[1], 0, i4412, '_episode1')
  request.r(i4413[2], i4413[3], 0, i4412, '_episode2')
  request.r(i4413[4], i4413[5], 0, i4412, '_episode3')
  request.r(i4413[6], i4413[7], 0, i4412, '_episode4')
  request.r(i4413[8], i4413[9], 0, i4412, '_episode4_1')
  request.r(i4413[10], i4413[11], 0, i4412, '_episode4_2')
  request.r(i4413[12], i4413[13], 0, i4412, '_episode5')
  request.r(i4413[14], i4413[15], 0, i4412, '_episode5_1')
  request.r(i4413[16], i4413[17], 0, i4412, '_episode6')
  request.r(i4413[18], i4413[19], 0, i4412, '_episode7')
  request.r(i4413[20], i4413[21], 0, i4412, '_card1__1')
  request.r(i4413[22], i4413[23], 0, i4412, '_card1__2')
  request.r(i4413[24], i4413[25], 0, i4412, '_card1__3')
  request.r(i4413[26], i4413[27], 0, i4412, '_coinsText')
  return i4412
}

Deserializers["Episode5_1"] = function (request, data, root) {
  var i4414 = root || request.c( 'Episode5_1' )
  var i4415 = data
  request.r(i4415[0], i4415[1], 0, i4414, '_card1')
  request.r(i4415[2], i4415[3], 0, i4414, '_card2')
  request.r(i4415[4], i4415[5], 0, i4414, '_episode5')
  request.r(i4415[6], i4415[7], 0, i4414, 'episode4_1')
  request.r(i4415[8], i4415[9], 0, i4414, 'episode5_2')
  request.r(i4415[10], i4415[11], 0, i4414, '_texCoins')
  request.r(i4415[12], i4415[13], 0, i4414, '_particleSystem')
  return i4414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4417 = data
  i4416.ambientIntensity = i4417[0]
  i4416.reflectionIntensity = i4417[1]
  i4416.ambientMode = i4417[2]
  i4416.ambientLight = new pc.Color(i4417[3], i4417[4], i4417[5], i4417[6])
  i4416.ambientSkyColor = new pc.Color(i4417[7], i4417[8], i4417[9], i4417[10])
  i4416.ambientGroundColor = new pc.Color(i4417[11], i4417[12], i4417[13], i4417[14])
  i4416.ambientEquatorColor = new pc.Color(i4417[15], i4417[16], i4417[17], i4417[18])
  i4416.fogColor = new pc.Color(i4417[19], i4417[20], i4417[21], i4417[22])
  i4416.fogEndDistance = i4417[23]
  i4416.fogStartDistance = i4417[24]
  i4416.fogDensity = i4417[25]
  i4416.fog = !!i4417[26]
  request.r(i4417[27], i4417[28], 0, i4416, 'skybox')
  i4416.fogMode = i4417[29]
  var i4419 = i4417[30]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4419[i + 0]) );
  }
  i4416.lightmaps = i4418
  i4416.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4417[31], i4416.lightProbes)
  i4416.lightmapsMode = i4417[32]
  i4416.mixedBakeMode = i4417[33]
  i4416.environmentLightingMode = i4417[34]
  i4416.ambientProbe = new pc.SphericalHarmonicsL2(i4417[35])
  i4416.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4417[36])
  i4416.useReferenceAmbientProbe = !!i4417[37]
  request.r(i4417[38], i4417[39], 0, i4416, 'customReflection')
  request.r(i4417[40], i4417[41], 0, i4416, 'defaultReflection')
  i4416.defaultReflectionMode = i4417[42]
  i4416.defaultReflectionResolution = i4417[43]
  i4416.sunLightObjectId = i4417[44]
  i4416.pixelLightCount = i4417[45]
  i4416.defaultReflectionHDR = !!i4417[46]
  i4416.hasLightDataAsset = !!i4417[47]
  i4416.hasManualGenerate = !!i4417[48]
  return i4416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4423 = data
  request.r(i4423[0], i4423[1], 0, i4422, 'lightmapColor')
  request.r(i4423[2], i4423[3], 0, i4422, 'lightmapDirection')
  return i4422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4424 = root || new UnityEngine.LightProbes()
  var i4425 = data
  return i4424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4431 = data
  i4430.enabled = !!i4431[0]
  i4430.type = i4431[1]
  i4430.color = new pc.Color(i4431[2], i4431[3], i4431[4], i4431[5])
  i4430.cullingMask = i4431[6]
  i4430.intensity = i4431[7]
  i4430.range = i4431[8]
  i4430.spotAngle = i4431[9]
  i4430.shadows = i4431[10]
  i4430.shadowNormalBias = i4431[11]
  i4430.shadowBias = i4431[12]
  i4430.shadowStrength = i4431[13]
  i4430.shadowResolution = i4431[14]
  i4430.lightmapBakeType = i4431[15]
  i4430.renderMode = i4431[16]
  request.r(i4431[17], i4431[18], 0, i4430, 'cookie')
  i4430.cookieSize = i4431[19]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i4432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i4433 = data
  i4432.AdditionalLightsPerObjectLimit = i4433[0]
  i4432.AdditionalLightsRenderingMode = i4433[1]
  i4432.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i4433[2], i4432.LightRenderingMode)
  i4432.ColorGradingLutSize = i4433[3]
  i4432.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i4433[4], i4432.ColorGradingMode)
  i4432.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i4433[5], i4432.MainLightRenderingMode)
  i4432.MainLightRenderingModeValue = i4433[6]
  i4432.MainLightShadowsSupported = !!i4433[7]
  i4432.MixedLightingSupported = !!i4433[8]
  i4432.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i4433[9], i4432.MsaaQuality)
  i4432.MSAA = i4433[10]
  i4432.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i4433[11], i4432.OpaqueDownsampling)
  i4432.RenderScale = i4433[12]
  i4432.RequireDepthTexture = !!i4433[13]
  i4432.RequireOpaqueTexture = !!i4433[14]
  i4432.ShadowAtlasResolution = i4433[15]
  i4432.ShadowDepthBias = i4433[16]
  i4432.SupportsHDR = !!i4433[17]
  i4432.SupportsTerrainHoles = !!i4433[18]
  return i4432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i4434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i4435 = data
  i4434.Disabled = i4435[0]
  i4434.PerVertex = i4435[1]
  i4434.PerPixel = i4435[2]
  return i4434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i4436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i4437 = data
  i4436.LowDynamicRange = i4437[0]
  i4436.HighDynamicRange = i4437[1]
  return i4436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i4438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i4439 = data
  i4438.Disabled = i4439[0]
  i4438._2x = i4439[1]
  i4438._4x = i4439[2]
  i4438._8x = i4439[3]
  return i4438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i4441 = data
  i4440.None = i4441[0]
  i4440._2xBilinear = i4441[1]
  i4440._4xBox = i4441[2]
  i4440._4xBilinear = i4441[3]
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4443 = data
  var i4445 = i4443[0]
  var i4444 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4445.length; i += 1) {
    i4444.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4445[i + 0]));
  }
  i4442.ShaderCompilationErrors = i4444
  i4442.name = i4443[1]
  i4442.guid = i4443[2]
  var i4447 = i4443[3]
  var i4446 = []
  for(var i = 0; i < i4447.length; i += 1) {
    i4446.push( i4447[i + 0] );
  }
  i4442.shaderDefinedKeywords = i4446
  var i4449 = i4443[4]
  var i4448 = []
  for(var i = 0; i < i4449.length; i += 1) {
    i4448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4449[i + 0]) );
  }
  i4442.passes = i4448
  var i4451 = i4443[5]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 1) {
    i4450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4451[i + 0]) );
  }
  i4442.usePasses = i4450
  var i4453 = i4443[6]
  var i4452 = []
  for(var i = 0; i < i4453.length; i += 1) {
    i4452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4453[i + 0]) );
  }
  i4442.defaultParameterValues = i4452
  request.r(i4443[7], i4443[8], 0, i4442, 'unityFallbackShader')
  i4442.readDepth = !!i4443[9]
  i4442.isCreatedByShaderGraph = !!i4443[10]
  i4442.compiled = !!i4443[11]
  return i4442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4457 = data
  i4456.shaderName = i4457[0]
  i4456.errorMessage = i4457[1]
  return i4456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4462 = root || new pc.UnityShaderPass()
  var i4463 = data
  i4462.id = i4463[0]
  i4462.subShaderIndex = i4463[1]
  i4462.name = i4463[2]
  i4462.passType = i4463[3]
  i4462.grabPassTextureName = i4463[4]
  i4462.usePass = !!i4463[5]
  i4462.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[6], i4462.zTest)
  i4462.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[7], i4462.zWrite)
  i4462.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[8], i4462.culling)
  i4462.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4463[9], i4462.blending)
  i4462.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4463[10], i4462.alphaBlending)
  i4462.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[11], i4462.colorWriteMask)
  i4462.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[12], i4462.offsetUnits)
  i4462.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[13], i4462.offsetFactor)
  i4462.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[14], i4462.stencilRef)
  i4462.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[15], i4462.stencilReadMask)
  i4462.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[16], i4462.stencilWriteMask)
  i4462.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4463[17], i4462.stencilOp)
  i4462.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4463[18], i4462.stencilOpFront)
  i4462.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4463[19], i4462.stencilOpBack)
  var i4465 = i4463[20]
  var i4464 = []
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4465[i + 0]) );
  }
  i4462.tags = i4464
  var i4467 = i4463[21]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( i4467[i + 0] );
  }
  i4462.passDefinedKeywords = i4466
  var i4469 = i4463[22]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 1) {
    i4468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4469[i + 0]) );
  }
  i4462.passDefinedKeywordGroups = i4468
  var i4471 = i4463[23]
  var i4470 = []
  for(var i = 0; i < i4471.length; i += 1) {
    i4470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4471[i + 0]) );
  }
  i4462.variants = i4470
  var i4473 = i4463[24]
  var i4472 = []
  for(var i = 0; i < i4473.length; i += 1) {
    i4472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4473[i + 0]) );
  }
  i4462.excludedVariants = i4472
  i4462.hasDepthReader = !!i4463[25]
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4475 = data
  i4474.val = i4475[0]
  i4474.name = i4475[1]
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4477 = data
  i4476.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4477[0], i4476.src)
  i4476.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4477[1], i4476.dst)
  i4476.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4477[2], i4476.op)
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4479 = data
  i4478.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[0], i4478.pass)
  i4478.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[1], i4478.fail)
  i4478.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[2], i4478.zFail)
  i4478.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[3], i4478.comp)
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4483 = data
  i4482.name = i4483[0]
  i4482.value = i4483[1]
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4487 = data
  var i4489 = i4487[0]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( i4489[i + 0] );
  }
  i4486.keywords = i4488
  i4486.hasDiscard = !!i4487[1]
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4493 = data
  i4492.passId = i4493[0]
  i4492.subShaderIndex = i4493[1]
  var i4495 = i4493[2]
  var i4494 = []
  for(var i = 0; i < i4495.length; i += 1) {
    i4494.push( i4495[i + 0] );
  }
  i4492.keywords = i4494
  i4492.vertexProgram = i4493[3]
  i4492.fragmentProgram = i4493[4]
  i4492.exportedForWebGl2 = !!i4493[5]
  i4492.readDepth = !!i4493[6]
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4499 = data
  request.r(i4499[0], i4499[1], 0, i4498, 'shader')
  i4498.pass = i4499[2]
  return i4498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4503 = data
  i4502.name = i4503[0]
  i4502.type = i4503[1]
  i4502.value = new pc.Vec4( i4503[2], i4503[3], i4503[4], i4503[5] )
  i4502.textureValue = i4503[6]
  i4502.shaderPropertyFlag = i4503[7]
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4505 = data
  i4504.name = i4505[0]
  request.r(i4505[1], i4505[2], 0, i4504, 'texture')
  i4504.aabb = i4505[3]
  i4504.vertices = i4505[4]
  i4504.triangles = i4505[5]
  i4504.textureRect = UnityEngine.Rect.MinMaxRect(i4505[6], i4505[7], i4505[8], i4505[9])
  i4504.packedRect = UnityEngine.Rect.MinMaxRect(i4505[10], i4505[11], i4505[12], i4505[13])
  i4504.border = new pc.Vec4( i4505[14], i4505[15], i4505[16], i4505[17] )
  i4504.transparency = i4505[18]
  i4504.bounds = i4505[19]
  i4504.pixelsPerUnit = i4505[20]
  i4504.textureWidth = i4505[21]
  i4504.textureHeight = i4505[22]
  i4504.nativeSize = new pc.Vec2( i4505[23], i4505[24] )
  i4504.pivot = new pc.Vec2( i4505[25], i4505[26] )
  i4504.textureRectOffset = new pc.Vec2( i4505[27], i4505[28] )
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4507 = data
  i4506.name = i4507[0]
  i4506.wrapMode = i4507[1]
  i4506.isLooping = !!i4507[2]
  i4506.length = i4507[3]
  var i4509 = i4507[4]
  var i4508 = []
  for(var i = 0; i < i4509.length; i += 1) {
    i4508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4509[i + 0]) );
  }
  i4506.curves = i4508
  var i4511 = i4507[5]
  var i4510 = []
  for(var i = 0; i < i4511.length; i += 1) {
    i4510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4511[i + 0]) );
  }
  i4506.events = i4510
  i4506.halfPrecision = !!i4507[6]
  i4506._frameRate = i4507[7]
  i4506.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4507[8], i4506.localBounds)
  i4506.hasMuscleCurves = !!i4507[9]
  var i4513 = i4507[10]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( i4513[i + 0] );
  }
  i4506.clipMuscleConstant = i4512
  i4506.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4507[11], i4506.clipBindingConstant)
  return i4506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4517 = data
  i4516.path = i4517[0]
  i4516.hash = i4517[1]
  i4516.componentType = i4517[2]
  i4516.property = i4517[3]
  i4516.keys = i4517[4]
  var i4519 = i4517[5]
  var i4518 = []
  for(var i = 0; i < i4519.length; i += 1) {
    i4518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4519[i + 0]) );
  }
  i4516.objectReferenceKeys = i4518
  return i4516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4523 = data
  i4522.time = i4523[0]
  request.r(i4523[1], i4523[2], 0, i4522, 'value')
  return i4522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4527 = data
  i4526.functionName = i4527[0]
  i4526.floatParameter = i4527[1]
  i4526.intParameter = i4527[2]
  i4526.stringParameter = i4527[3]
  request.r(i4527[4], i4527[5], 0, i4526, 'objectReferenceParameter')
  i4526.time = i4527[6]
  return i4526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4529 = data
  i4528.center = new pc.Vec3( i4529[0], i4529[1], i4529[2] )
  i4528.extends = new pc.Vec3( i4529[3], i4529[4], i4529[5] )
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4533 = data
  var i4535 = i4533[0]
  var i4534 = []
  for(var i = 0; i < i4535.length; i += 1) {
    i4534.push( i4535[i + 0] );
  }
  i4532.genericBindings = i4534
  var i4537 = i4533[1]
  var i4536 = []
  for(var i = 0; i < i4537.length; i += 1) {
    i4536.push( i4537[i + 0] );
  }
  i4532.pptrCurveMapping = i4536
  return i4532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4539 = data
  i4538.name = i4539[0]
  i4538.ascent = i4539[1]
  i4538.originalLineHeight = i4539[2]
  i4538.fontSize = i4539[3]
  var i4541 = i4539[4]
  var i4540 = []
  for(var i = 0; i < i4541.length; i += 1) {
    i4540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4541[i + 0]) );
  }
  i4538.characterInfo = i4540
  request.r(i4539[5], i4539[6], 0, i4538, 'texture')
  i4538.originalFontSize = i4539[7]
  return i4538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4545 = data
  i4544.index = i4545[0]
  i4544.advance = i4545[1]
  i4544.bearing = i4545[2]
  i4544.glyphWidth = i4545[3]
  i4544.glyphHeight = i4545[4]
  i4544.minX = i4545[5]
  i4544.maxX = i4545[6]
  i4544.minY = i4545[7]
  i4544.maxY = i4545[8]
  i4544.uvBottomLeftX = i4545[9]
  i4544.uvBottomLeftY = i4545[10]
  i4544.uvBottomRightX = i4545[11]
  i4544.uvBottomRightY = i4545[12]
  i4544.uvTopLeftX = i4545[13]
  i4544.uvTopLeftY = i4545[14]
  i4544.uvTopRightX = i4545[15]
  i4544.uvTopRightY = i4545[16]
  return i4544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4547 = data
  i4546.name = i4547[0]
  var i4549 = i4547[1]
  var i4548 = []
  for(var i = 0; i < i4549.length; i += 1) {
    i4548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4549[i + 0]) );
  }
  i4546.layers = i4548
  var i4551 = i4547[2]
  var i4550 = []
  for(var i = 0; i < i4551.length; i += 1) {
    i4550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4551[i + 0]) );
  }
  i4546.parameters = i4550
  i4546.animationClips = i4547[3]
  i4546.avatarUnsupported = i4547[4]
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4555 = data
  i4554.name = i4555[0]
  i4554.defaultWeight = i4555[1]
  i4554.blendingMode = i4555[2]
  i4554.avatarMask = i4555[3]
  i4554.syncedLayerIndex = i4555[4]
  i4554.syncedLayerAffectsTiming = !!i4555[5]
  i4554.syncedLayers = i4555[6]
  i4554.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4555[7], i4554.stateMachine)
  return i4554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4557 = data
  i4556.id = i4557[0]
  i4556.name = i4557[1]
  i4556.path = i4557[2]
  var i4559 = i4557[3]
  var i4558 = []
  for(var i = 0; i < i4559.length; i += 1) {
    i4558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4559[i + 0]) );
  }
  i4556.states = i4558
  var i4561 = i4557[4]
  var i4560 = []
  for(var i = 0; i < i4561.length; i += 1) {
    i4560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4561[i + 0]) );
  }
  i4556.machines = i4560
  var i4563 = i4557[5]
  var i4562 = []
  for(var i = 0; i < i4563.length; i += 1) {
    i4562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4563[i + 0]) );
  }
  i4556.entryStateTransitions = i4562
  var i4565 = i4557[6]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 1) {
    i4564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4565[i + 0]) );
  }
  i4556.exitStateTransitions = i4564
  var i4567 = i4557[7]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4567[i + 0]) );
  }
  i4556.anyStateTransitions = i4566
  i4556.defaultStateId = i4557[8]
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4571 = data
  i4570.id = i4571[0]
  i4570.name = i4571[1]
  i4570.cycleOffset = i4571[2]
  i4570.cycleOffsetParameter = i4571[3]
  i4570.cycleOffsetParameterActive = !!i4571[4]
  i4570.mirror = !!i4571[5]
  i4570.mirrorParameter = i4571[6]
  i4570.mirrorParameterActive = !!i4571[7]
  i4570.motionId = i4571[8]
  i4570.nameHash = i4571[9]
  i4570.fullPathHash = i4571[10]
  i4570.speed = i4571[11]
  i4570.speedParameter = i4571[12]
  i4570.speedParameterActive = !!i4571[13]
  i4570.tag = i4571[14]
  i4570.tagHash = i4571[15]
  i4570.writeDefaultValues = !!i4571[16]
  var i4573 = i4571[17]
  var i4572 = []
  for(var i = 0; i < i4573.length; i += 2) {
  request.r(i4573[i + 0], i4573[i + 1], 2, i4572, '')
  }
  i4570.behaviours = i4572
  var i4575 = i4571[18]
  var i4574 = []
  for(var i = 0; i < i4575.length; i += 1) {
    i4574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4575[i + 0]) );
  }
  i4570.transitions = i4574
  return i4570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4581 = data
  i4580.fullPath = i4581[0]
  i4580.canTransitionToSelf = !!i4581[1]
  i4580.duration = i4581[2]
  i4580.exitTime = i4581[3]
  i4580.hasExitTime = !!i4581[4]
  i4580.hasFixedDuration = !!i4581[5]
  i4580.interruptionSource = i4581[6]
  i4580.offset = i4581[7]
  i4580.orderedInterruption = !!i4581[8]
  i4580.destinationStateId = i4581[9]
  i4580.isExit = !!i4581[10]
  i4580.mute = !!i4581[11]
  i4580.solo = !!i4581[12]
  var i4583 = i4581[13]
  var i4582 = []
  for(var i = 0; i < i4583.length; i += 1) {
    i4582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4583[i + 0]) );
  }
  i4580.conditions = i4582
  return i4580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4589 = data
  i4588.destinationStateId = i4589[0]
  i4588.isExit = !!i4589[1]
  i4588.mute = !!i4589[2]
  i4588.solo = !!i4589[3]
  var i4591 = i4589[4]
  var i4590 = []
  for(var i = 0; i < i4591.length; i += 1) {
    i4590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4591[i + 0]) );
  }
  i4588.conditions = i4590
  return i4588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4595 = data
  i4594.defaultBool = !!i4595[0]
  i4594.defaultFloat = i4595[1]
  i4594.defaultInt = i4595[2]
  i4594.name = i4595[3]
  i4594.nameHash = i4595[4]
  i4594.type = i4595[5]
  return i4594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4597 = data
  var i4599 = i4597[0]
  var i4598 = []
  for(var i = 0; i < i4599.length; i += 1) {
    i4598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4599[i + 0]) );
  }
  i4596.files = i4598
  i4596.componentToPrefabIds = i4597[1]
  return i4596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4603 = data
  i4602.path = i4603[0]
  request.r(i4603[1], i4603[2], 0, i4602, 'unityObject')
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4605 = data
  var i4607 = i4605[0]
  var i4606 = []
  for(var i = 0; i < i4607.length; i += 1) {
    i4606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4607[i + 0]) );
  }
  i4604.scriptsExecutionOrder = i4606
  var i4609 = i4605[1]
  var i4608 = []
  for(var i = 0; i < i4609.length; i += 1) {
    i4608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4609[i + 0]) );
  }
  i4604.sortingLayers = i4608
  var i4611 = i4605[2]
  var i4610 = []
  for(var i = 0; i < i4611.length; i += 1) {
    i4610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4611[i + 0]) );
  }
  i4604.cullingLayers = i4610
  i4604.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4605[3], i4604.timeSettings)
  i4604.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4605[4], i4604.physicsSettings)
  i4604.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4605[5], i4604.physics2DSettings)
  i4604.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4605[6], i4604.qualitySettings)
  i4604.enableRealtimeShadows = !!i4605[7]
  i4604.enableAutoInstancing = !!i4605[8]
  i4604.enableDynamicBatching = !!i4605[9]
  i4604.lightmapEncodingQuality = i4605[10]
  i4604.desiredColorSpace = i4605[11]
  var i4613 = i4605[12]
  var i4612 = []
  for(var i = 0; i < i4613.length; i += 1) {
    i4612.push( i4613[i + 0] );
  }
  i4604.allTags = i4612
  return i4604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4617 = data
  i4616.name = i4617[0]
  i4616.value = i4617[1]
  return i4616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4621 = data
  i4620.id = i4621[0]
  i4620.name = i4621[1]
  i4620.value = i4621[2]
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4625 = data
  i4624.id = i4625[0]
  i4624.name = i4625[1]
  return i4624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4627 = data
  i4626.fixedDeltaTime = i4627[0]
  i4626.maximumDeltaTime = i4627[1]
  i4626.timeScale = i4627[2]
  i4626.maximumParticleTimestep = i4627[3]
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4629 = data
  i4628.gravity = new pc.Vec3( i4629[0], i4629[1], i4629[2] )
  i4628.defaultSolverIterations = i4629[3]
  i4628.bounceThreshold = i4629[4]
  i4628.autoSyncTransforms = !!i4629[5]
  i4628.autoSimulation = !!i4629[6]
  var i4631 = i4629[7]
  var i4630 = []
  for(var i = 0; i < i4631.length; i += 1) {
    i4630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4631[i + 0]) );
  }
  i4628.collisionMatrix = i4630
  return i4628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4635 = data
  i4634.enabled = !!i4635[0]
  i4634.layerId = i4635[1]
  i4634.otherLayerId = i4635[2]
  return i4634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4637 = data
  request.r(i4637[0], i4637[1], 0, i4636, 'material')
  i4636.gravity = new pc.Vec2( i4637[2], i4637[3] )
  i4636.positionIterations = i4637[4]
  i4636.velocityIterations = i4637[5]
  i4636.velocityThreshold = i4637[6]
  i4636.maxLinearCorrection = i4637[7]
  i4636.maxAngularCorrection = i4637[8]
  i4636.maxTranslationSpeed = i4637[9]
  i4636.maxRotationSpeed = i4637[10]
  i4636.baumgarteScale = i4637[11]
  i4636.baumgarteTOIScale = i4637[12]
  i4636.timeToSleep = i4637[13]
  i4636.linearSleepTolerance = i4637[14]
  i4636.angularSleepTolerance = i4637[15]
  i4636.defaultContactOffset = i4637[16]
  i4636.autoSimulation = !!i4637[17]
  i4636.queriesHitTriggers = !!i4637[18]
  i4636.queriesStartInColliders = !!i4637[19]
  i4636.callbacksOnDisable = !!i4637[20]
  i4636.reuseCollisionCallbacks = !!i4637[21]
  i4636.autoSyncTransforms = !!i4637[22]
  var i4639 = i4637[23]
  var i4638 = []
  for(var i = 0; i < i4639.length; i += 1) {
    i4638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4639[i + 0]) );
  }
  i4636.collisionMatrix = i4638
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4643 = data
  i4642.enabled = !!i4643[0]
  i4642.layerId = i4643[1]
  i4642.otherLayerId = i4643[2]
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4645 = data
  var i4647 = i4645[0]
  var i4646 = []
  for(var i = 0; i < i4647.length; i += 1) {
    i4646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4647[i + 0]) );
  }
  i4644.qualityLevels = i4646
  var i4649 = i4645[1]
  var i4648 = []
  for(var i = 0; i < i4649.length; i += 1) {
    i4648.push( i4649[i + 0] );
  }
  i4644.names = i4648
  i4644.shadows = i4645[2]
  i4644.anisotropicFiltering = i4645[3]
  i4644.antiAliasing = i4645[4]
  i4644.lodBias = i4645[5]
  i4644.shadowCascades = i4645[6]
  i4644.shadowDistance = i4645[7]
  i4644.shadowmaskMode = i4645[8]
  i4644.shadowProjection = i4645[9]
  i4644.shadowResolution = i4645[10]
  i4644.softParticles = !!i4645[11]
  i4644.softVegetation = !!i4645[12]
  i4644.activeColorSpace = i4645[13]
  i4644.desiredColorSpace = i4645[14]
  i4644.masterTextureLimit = i4645[15]
  i4644.maxQueuedFrames = i4645[16]
  i4644.particleRaycastBudget = i4645[17]
  i4644.pixelLightCount = i4645[18]
  i4644.realtimeReflectionProbes = !!i4645[19]
  i4644.shadowCascade2Split = i4645[20]
  i4644.shadowCascade4Split = new pc.Vec3( i4645[21], i4645[22], i4645[23] )
  i4644.streamingMipmapsActive = !!i4645[24]
  i4644.vSyncCount = i4645[25]
  i4644.asyncUploadBufferSize = i4645[26]
  i4644.asyncUploadTimeSlice = i4645[27]
  i4644.billboardsFaceCameraPosition = !!i4645[28]
  i4644.shadowNearPlaneOffset = i4645[29]
  i4644.streamingMipmapsMemoryBudget = i4645[30]
  i4644.maximumLODLevel = i4645[31]
  i4644.streamingMipmapsAddAllCameras = !!i4645[32]
  i4644.streamingMipmapsMaxLevelReduction = i4645[33]
  i4644.streamingMipmapsRenderersPerFrame = i4645[34]
  i4644.resolutionScalingFixedDPIFactor = i4645[35]
  i4644.streamingMipmapsMaxFileIORequests = i4645[36]
  i4644.currentQualityLevel = i4645[37]
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4655 = data
  i4654.weight = i4655[0]
  i4654.vertices = i4655[1]
  i4654.normals = i4655[2]
  i4654.tangents = i4655[3]
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4659 = data
  i4658.mode = i4659[0]
  i4658.parameter = i4659[1]
  i4658.threshold = i4659[2]
  return i4658
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[13],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[13],"75":[76],"77":[78],"79":[78],"18":[7],"80":[7],"81":[82],"83":[84],"85":[13],"86":[13],"16":[13],"87":[41],"88":[82],"89":[90],"91":[7],"92":[7],"20":[18],"10":[8,7],"93":[7],"19":[18],"94":[7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"100":[7],"101":[7],"102":[7],"103":[8,7],"104":[7],"105":[7],"106":[7],"107":[7],"21":[8,7],"108":[7],"109":[37],"110":[37],"38":[37],"111":[37],"112":[13],"113":[13],"114":[82]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","Episode5","UnityEngine.GameObject","Episode4_1","Episode1","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Card","Episode2","Episode4","Episode6","Episode3","Episode7","Episode4_2","Episode5_2","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","Episode5_1","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "2.9";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1592";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3096";

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

Deserializers.buildID = "c21deb06-13a4-474e-9308-0709bab16717";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

