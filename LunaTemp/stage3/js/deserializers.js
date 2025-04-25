var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.JointSpring' )
  var i1333 = data
  i1332.spring = i1333[0]
  i1332.damper = i1333[1]
  i1332.targetPosition = i1333[2]
  return i1332
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.JointMotor' )
  var i1335 = data
  i1334.m_TargetVelocity = i1335[0]
  i1334.m_Force = i1335[1]
  i1334.m_FreeSpin = i1335[2]
  return i1334
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.JointLimits' )
  var i1337 = data
  i1336.m_Min = i1337[0]
  i1336.m_Max = i1337[1]
  i1336.m_Bounciness = i1337[2]
  i1336.m_BounceMinVelocity = i1337[3]
  i1336.m_ContactDistance = i1337[4]
  i1336.minBounce = i1337[5]
  i1336.maxBounce = i1337[6]
  return i1336
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.JointDrive' )
  var i1339 = data
  i1338.m_PositionSpring = i1339[0]
  i1338.m_PositionDamper = i1339[1]
  i1338.m_MaximumForce = i1339[2]
  i1338.m_UseAcceleration = i1339[3]
  return i1338
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1341 = data
  i1340.m_Spring = i1341[0]
  i1340.m_Damper = i1341[1]
  return i1340
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1343 = data
  i1342.m_Limit = i1343[0]
  i1342.m_Bounciness = i1343[1]
  i1342.m_ContactDistance = i1343[2]
  return i1342
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1345 = data
  i1344.m_ExtremumSlip = i1345[0]
  i1344.m_ExtremumValue = i1345[1]
  i1344.m_AsymptoteSlip = i1345[2]
  i1344.m_AsymptoteValue = i1345[3]
  i1344.m_Stiffness = i1345[4]
  return i1344
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1347 = data
  i1346.m_LowerAngle = i1347[0]
  i1346.m_UpperAngle = i1347[1]
  return i1346
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1349 = data
  i1348.m_MotorSpeed = i1349[0]
  i1348.m_MaximumMotorTorque = i1349[1]
  return i1348
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1351 = data
  i1350.m_DampingRatio = i1351[0]
  i1350.m_Frequency = i1351[1]
  i1350.m_Angle = i1351[2]
  return i1350
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1353 = data
  i1352.m_LowerTranslation = i1353[0]
  i1352.m_UpperTranslation = i1353[1]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1355 = data
  i1354.name = i1355[0]
  i1354.width = i1355[1]
  i1354.height = i1355[2]
  i1354.mipmapCount = i1355[3]
  i1354.anisoLevel = i1355[4]
  i1354.filterMode = i1355[5]
  i1354.hdr = !!i1355[6]
  i1354.format = i1355[7]
  i1354.wrapMode = i1355[8]
  i1354.alphaIsTransparency = !!i1355[9]
  i1354.alphaSource = i1355[10]
  i1354.graphicsFormat = i1355[11]
  i1354.sRGBTexture = !!i1355[12]
  i1354.desiredColorSpace = i1355[13]
  i1354.wrapU = i1355[14]
  i1354.wrapV = i1355[15]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1357 = data
  i1356.position = new pc.Vec3( i1357[0], i1357[1], i1357[2] )
  i1356.scale = new pc.Vec3( i1357[3], i1357[4], i1357[5] )
  i1356.rotation = new pc.Quat(i1357[6], i1357[7], i1357[8], i1357[9])
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1359 = data
  i1358.enabled = !!i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'sharedMaterial')
  var i1361 = i1359[3]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 2) {
  request.r(i1361[i + 0], i1361[i + 1], 2, i1360, '')
  }
  i1358.sharedMaterials = i1360
  i1358.receiveShadows = !!i1359[4]
  i1358.shadowCastingMode = i1359[5]
  i1358.sortingLayerID = i1359[6]
  i1358.sortingOrder = i1359[7]
  i1358.lightmapIndex = i1359[8]
  i1358.lightmapSceneIndex = i1359[9]
  i1358.lightmapScaleOffset = new pc.Vec4( i1359[10], i1359[11], i1359[12], i1359[13] )
  i1358.lightProbeUsage = i1359[14]
  i1358.reflectionProbeUsage = i1359[15]
  request.r(i1359[16], i1359[17], 0, i1358, 'mesh')
  i1358.meshCount = i1359[18]
  i1358.activeVertexStreamsCount = i1359[19]
  i1358.alignment = i1359[20]
  i1358.renderMode = i1359[21]
  i1358.sortMode = i1359[22]
  i1358.lengthScale = i1359[23]
  i1358.velocityScale = i1359[24]
  i1358.cameraVelocityScale = i1359[25]
  i1358.normalDirection = i1359[26]
  i1358.sortingFudge = i1359[27]
  i1358.minParticleSize = i1359[28]
  i1358.maxParticleSize = i1359[29]
  i1358.pivot = new pc.Vec3( i1359[30], i1359[31], i1359[32] )
  request.r(i1359[33], i1359[34], 0, i1358, 'trailMaterial')
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1365 = data
  i1364.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1365[0], i1364.main)
  i1364.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1365[1], i1364.colorBySpeed)
  i1364.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1365[2], i1364.colorOverLifetime)
  i1364.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1365[3], i1364.emission)
  i1364.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1365[4], i1364.rotationBySpeed)
  i1364.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1365[5], i1364.rotationOverLifetime)
  i1364.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1365[6], i1364.shape)
  i1364.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1365[7], i1364.sizeBySpeed)
  i1364.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1365[8], i1364.sizeOverLifetime)
  i1364.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1365[9], i1364.textureSheetAnimation)
  i1364.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1365[10], i1364.velocityOverLifetime)
  i1364.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1365[11], i1364.noise)
  i1364.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1365[12], i1364.inheritVelocity)
  i1364.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1365[13], i1364.forceOverLifetime)
  i1364.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1365[14], i1364.limitVelocityOverLifetime)
  i1364.useAutoRandomSeed = !!i1365[15]
  i1364.randomSeed = i1365[16]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1366 = root || new pc.ParticleSystemMain()
  var i1367 = data
  i1366.duration = i1367[0]
  i1366.loop = !!i1367[1]
  i1366.prewarm = !!i1367[2]
  i1366.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[3], i1366.startDelay)
  i1366.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[4], i1366.startLifetime)
  i1366.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[5], i1366.startSpeed)
  i1366.startSize3D = !!i1367[6]
  i1366.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[7], i1366.startSizeX)
  i1366.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[8], i1366.startSizeY)
  i1366.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[9], i1366.startSizeZ)
  i1366.startRotation3D = !!i1367[10]
  i1366.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[11], i1366.startRotationX)
  i1366.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[12], i1366.startRotationY)
  i1366.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[13], i1366.startRotationZ)
  i1366.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1367[14], i1366.startColor)
  i1366.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1367[15], i1366.gravityModifier)
  i1366.simulationSpace = i1367[16]
  request.r(i1367[17], i1367[18], 0, i1366, 'customSimulationSpace')
  i1366.simulationSpeed = i1367[19]
  i1366.useUnscaledTime = !!i1367[20]
  i1366.scalingMode = i1367[21]
  i1366.playOnAwake = !!i1367[22]
  i1366.maxParticles = i1367[23]
  i1366.emitterVelocityMode = i1367[24]
  i1366.stopAction = i1367[25]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1368 = root || new pc.MinMaxCurve()
  var i1369 = data
  i1368.mode = i1369[0]
  i1368.curveMin = new pc.AnimationCurve( { keys_flow: i1369[1] } )
  i1368.curveMax = new pc.AnimationCurve( { keys_flow: i1369[2] } )
  i1368.curveMultiplier = i1369[3]
  i1368.constantMin = i1369[4]
  i1368.constantMax = i1369[5]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1370 = root || new pc.MinMaxGradient()
  var i1371 = data
  i1370.mode = i1371[0]
  i1370.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1371[1], i1370.gradientMin)
  i1370.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1371[2], i1370.gradientMax)
  i1370.colorMin = new pc.Color(i1371[3], i1371[4], i1371[5], i1371[6])
  i1370.colorMax = new pc.Color(i1371[7], i1371[8], i1371[9], i1371[10])
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1373 = data
  i1372.mode = i1373[0]
  var i1375 = i1373[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1375[i + 0]) );
  }
  i1372.colorKeys = i1374
  var i1377 = i1373[2]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1377[i + 0]) );
  }
  i1372.alphaKeys = i1376
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1378 = root || new pc.ParticleSystemColorBySpeed()
  var i1379 = data
  i1378.enabled = !!i1379[0]
  i1378.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1379[1], i1378.color)
  i1378.range = new pc.Vec2( i1379[2], i1379[3] )
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1383 = data
  i1382.color = new pc.Color(i1383[0], i1383[1], i1383[2], i1383[3])
  i1382.time = i1383[4]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1387 = data
  i1386.alpha = i1387[0]
  i1386.time = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1388 = root || new pc.ParticleSystemColorOverLifetime()
  var i1389 = data
  i1388.enabled = !!i1389[0]
  i1388.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1389[1], i1388.color)
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1390 = root || new pc.ParticleSystemEmitter()
  var i1391 = data
  i1390.enabled = !!i1391[0]
  i1390.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[1], i1390.rateOverTime)
  i1390.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[2], i1390.rateOverDistance)
  var i1393 = i1391[3]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1393[i + 0]) );
  }
  i1390.bursts = i1392
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1396 = root || new pc.ParticleSystemBurst()
  var i1397 = data
  i1396.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[0], i1396.count)
  i1396.cycleCount = i1397[1]
  i1396.minCount = i1397[2]
  i1396.maxCount = i1397[3]
  i1396.repeatInterval = i1397[4]
  i1396.time = i1397[5]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1398 = root || new pc.ParticleSystemRotationBySpeed()
  var i1399 = data
  i1398.enabled = !!i1399[0]
  i1398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[1], i1398.x)
  i1398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[2], i1398.y)
  i1398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[3], i1398.z)
  i1398.separateAxes = !!i1399[4]
  i1398.range = new pc.Vec2( i1399[5], i1399[6] )
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1400 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1401 = data
  i1400.enabled = !!i1401[0]
  i1400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1401[1], i1400.x)
  i1400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1401[2], i1400.y)
  i1400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1401[3], i1400.z)
  i1400.separateAxes = !!i1401[4]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1402 = root || new pc.ParticleSystemShape()
  var i1403 = data
  i1402.enabled = !!i1403[0]
  i1402.shapeType = i1403[1]
  i1402.randomDirectionAmount = i1403[2]
  i1402.sphericalDirectionAmount = i1403[3]
  i1402.randomPositionAmount = i1403[4]
  i1402.alignToDirection = !!i1403[5]
  i1402.radius = i1403[6]
  i1402.radiusMode = i1403[7]
  i1402.radiusSpread = i1403[8]
  i1402.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1403[9], i1402.radiusSpeed)
  i1402.radiusThickness = i1403[10]
  i1402.angle = i1403[11]
  i1402.length = i1403[12]
  i1402.boxThickness = new pc.Vec3( i1403[13], i1403[14], i1403[15] )
  i1402.meshShapeType = i1403[16]
  request.r(i1403[17], i1403[18], 0, i1402, 'mesh')
  request.r(i1403[19], i1403[20], 0, i1402, 'meshRenderer')
  request.r(i1403[21], i1403[22], 0, i1402, 'skinnedMeshRenderer')
  i1402.useMeshMaterialIndex = !!i1403[23]
  i1402.meshMaterialIndex = i1403[24]
  i1402.useMeshColors = !!i1403[25]
  i1402.normalOffset = i1403[26]
  i1402.arc = i1403[27]
  i1402.arcMode = i1403[28]
  i1402.arcSpread = i1403[29]
  i1402.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1403[30], i1402.arcSpeed)
  i1402.donutRadius = i1403[31]
  i1402.position = new pc.Vec3( i1403[32], i1403[33], i1403[34] )
  i1402.rotation = new pc.Vec3( i1403[35], i1403[36], i1403[37] )
  i1402.scale = new pc.Vec3( i1403[38], i1403[39], i1403[40] )
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1404 = root || new pc.ParticleSystemSizeBySpeed()
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[1], i1404.x)
  i1404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[2], i1404.y)
  i1404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[3], i1404.z)
  i1404.separateAxes = !!i1405[4]
  i1404.range = new pc.Vec2( i1405[5], i1405[6] )
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1406 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[1], i1406.x)
  i1406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[2], i1406.y)
  i1406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[3], i1406.z)
  i1406.separateAxes = !!i1407[4]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1408 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1409 = data
  i1408.enabled = !!i1409[0]
  i1408.mode = i1409[1]
  i1408.animation = i1409[2]
  i1408.numTilesX = i1409[3]
  i1408.numTilesY = i1409[4]
  i1408.useRandomRow = !!i1409[5]
  i1408.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1409[6], i1408.frameOverTime)
  i1408.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1409[7], i1408.startFrame)
  i1408.cycleCount = i1409[8]
  i1408.rowIndex = i1409[9]
  i1408.flipU = i1409[10]
  i1408.flipV = i1409[11]
  i1408.spriteCount = i1409[12]
  var i1411 = i1409[13]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 2, i1410, '')
  }
  i1408.sprites = i1410
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1414 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1415 = data
  i1414.enabled = !!i1415[0]
  i1414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[1], i1414.x)
  i1414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[2], i1414.y)
  i1414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[3], i1414.z)
  i1414.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[4], i1414.radial)
  i1414.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[5], i1414.speedModifier)
  i1414.space = i1415[6]
  i1414.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[7], i1414.orbitalX)
  i1414.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[8], i1414.orbitalY)
  i1414.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[9], i1414.orbitalZ)
  i1414.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[10], i1414.orbitalOffsetX)
  i1414.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[11], i1414.orbitalOffsetY)
  i1414.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[12], i1414.orbitalOffsetZ)
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1416 = root || new pc.ParticleSystemNoise()
  var i1417 = data
  i1416.enabled = !!i1417[0]
  i1416.separateAxes = !!i1417[1]
  i1416.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[2], i1416.strengthX)
  i1416.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[3], i1416.strengthY)
  i1416.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[4], i1416.strengthZ)
  i1416.frequency = i1417[5]
  i1416.damping = !!i1417[6]
  i1416.octaveCount = i1417[7]
  i1416.octaveMultiplier = i1417[8]
  i1416.octaveScale = i1417[9]
  i1416.quality = i1417[10]
  i1416.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[11], i1416.scrollSpeed)
  i1416.scrollSpeedMultiplier = i1417[12]
  i1416.remapEnabled = !!i1417[13]
  i1416.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[14], i1416.remapX)
  i1416.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[15], i1416.remapY)
  i1416.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[16], i1416.remapZ)
  i1416.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[17], i1416.positionAmount)
  i1416.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[18], i1416.rotationAmount)
  i1416.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[19], i1416.sizeAmount)
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1418 = root || new pc.ParticleSystemInheritVelocity()
  var i1419 = data
  i1418.enabled = !!i1419[0]
  i1418.mode = i1419[1]
  i1418.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1419[2], i1418.curve)
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1420 = root || new pc.ParticleSystemForceOverLifetime()
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[1], i1420.x)
  i1420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[2], i1420.y)
  i1420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[3], i1420.z)
  i1420.space = i1421[4]
  i1420.randomized = !!i1421[5]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1422 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1423 = data
  i1422.enabled = !!i1423[0]
  i1422.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[1], i1422.limit)
  i1422.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[2], i1422.limitX)
  i1422.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[3], i1422.limitY)
  i1422.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[4], i1422.limitZ)
  i1422.dampen = i1423[5]
  i1422.separateAxes = !!i1423[6]
  i1422.space = i1423[7]
  i1422.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[8], i1422.drag)
  i1422.multiplyDragByParticleSize = !!i1423[9]
  i1422.multiplyDragByParticleVelocity = !!i1423[10]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1425 = data
  i1424.name = i1425[0]
  i1424.tagId = i1425[1]
  i1424.enabled = !!i1425[2]
  i1424.isStatic = !!i1425[3]
  i1424.layer = i1425[4]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1426 = root || new pc.UnityMaterial()
  var i1427 = data
  i1426.name = i1427[0]
  request.r(i1427[1], i1427[2], 0, i1426, 'shader')
  i1426.renderQueue = i1427[3]
  i1426.enableInstancing = !!i1427[4]
  var i1429 = i1427[5]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1429[i + 0]) );
  }
  i1426.floatParameters = i1428
  var i1431 = i1427[6]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1431[i + 0]) );
  }
  i1426.colorParameters = i1430
  var i1433 = i1427[7]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1433[i + 0]) );
  }
  i1426.vectorParameters = i1432
  var i1435 = i1427[8]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1435[i + 0]) );
  }
  i1426.textureParameters = i1434
  var i1437 = i1427[9]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1437[i + 0]) );
  }
  i1426.materialFlags = i1436
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1441 = data
  i1440.name = i1441[0]
  i1440.value = i1441[1]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.value = new pc.Color(i1445[1], i1445[2], i1445[3], i1445[4])
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.value = new pc.Vec4( i1449[1], i1449[2], i1449[3], i1449[4] )
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1453 = data
  i1452.name = i1453[0]
  request.r(i1453[1], i1453[2], 0, i1452, 'value')
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.enabled = !!i1457[1]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.halfPrecision = !!i1459[1]
  i1458.useUInt32IndexFormat = !!i1459[2]
  i1458.vertexCount = i1459[3]
  i1458.aabb = i1459[4]
  var i1461 = i1459[5]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( !!i1461[i + 0] );
  }
  i1458.streams = i1460
  i1458.vertices = i1459[6]
  var i1463 = i1459[7]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1463[i + 0]) );
  }
  i1458.subMeshes = i1462
  var i1465 = i1459[8]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 16) {
    i1464.push( new pc.Mat4().setData(i1465[i + 0], i1465[i + 1], i1465[i + 2], i1465[i + 3],  i1465[i + 4], i1465[i + 5], i1465[i + 6], i1465[i + 7],  i1465[i + 8], i1465[i + 9], i1465[i + 10], i1465[i + 11],  i1465[i + 12], i1465[i + 13], i1465[i + 14], i1465[i + 15]) );
  }
  i1458.bindposes = i1464
  var i1467 = i1459[9]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1467[i + 0]) );
  }
  i1458.blendShapes = i1466
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1473 = data
  i1472.triangles = i1473[0]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1479 = data
  i1478.name = i1479[0]
  var i1481 = i1479[1]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1481[i + 0]) );
  }
  i1478.frames = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.index = i1483[1]
  i1482.startup = !!i1483[2]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.aspect = i1485[1]
  i1484.orthographic = !!i1485[2]
  i1484.orthographicSize = i1485[3]
  i1484.backgroundColor = new pc.Color(i1485[4], i1485[5], i1485[6], i1485[7])
  i1484.nearClipPlane = i1485[8]
  i1484.farClipPlane = i1485[9]
  i1484.fieldOfView = i1485[10]
  i1484.depth = i1485[11]
  i1484.clearFlags = i1485[12]
  i1484.cullingMask = i1485[13]
  i1484.rect = i1485[14]
  request.r(i1485[15], i1485[16], 0, i1484, 'targetTexture')
  i1484.usePhysicalProperties = !!i1485[17]
  i1484.focalLength = i1485[18]
  i1484.sensorSize = new pc.Vec2( i1485[19], i1485[20] )
  i1484.lensShift = new pc.Vec2( i1485[21], i1485[22] )
  i1484.gateFit = i1485[23]
  i1484.commandBufferCount = i1485[24]
  i1484.cameraType = i1485[25]
  return i1484
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1487 = data
  i1486.m_RenderShadows = !!i1487[0]
  i1486.m_RequiresDepthTextureOption = i1487[1]
  i1486.m_RequiresOpaqueTextureOption = i1487[2]
  i1486.m_CameraType = i1487[3]
  var i1489 = i1487[4]
  var i1488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 1, i1488, '')
  }
  i1486.m_Cameras = i1488
  i1486.m_RendererIndex = i1487[5]
  i1486.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1487[6] )
  request.r(i1487[7], i1487[8], 0, i1486, 'm_VolumeTrigger')
  i1486.m_VolumeFrameworkUpdateModeOption = i1487[9]
  i1486.m_RenderPostProcessing = !!i1487[10]
  i1486.m_Antialiasing = i1487[11]
  i1486.m_AntialiasingQuality = i1487[12]
  i1486.m_StopNaN = !!i1487[13]
  i1486.m_Dithering = !!i1487[14]
  i1486.m_ClearDepth = !!i1487[15]
  i1486.m_AllowXRRendering = !!i1487[16]
  i1486.m_AllowHDROutput = !!i1487[17]
  i1486.m_UseScreenCoordOverride = !!i1487[18]
  i1486.m_ScreenSizeOverride = new pc.Vec4( i1487[19], i1487[20], i1487[21], i1487[22] )
  i1486.m_ScreenCoordScaleBias = new pc.Vec4( i1487[23], i1487[24], i1487[25], i1487[26] )
  i1486.m_RequiresDepthTexture = !!i1487[27]
  i1486.m_RequiresColorTexture = !!i1487[28]
  i1486.m_Version = i1487[29]
  i1486.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1487[30], i1486.m_TaaSettings)
  return i1486
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1493 = data
  i1492.m_Quality = i1493[0]
  i1492.m_FrameInfluence = i1493[1]
  i1492.m_JitterScale = i1493[2]
  i1492.m_MipBias = i1493[3]
  i1492.m_VarianceClampScale = i1493[4]
  i1492.m_ContrastAdaptiveSharpening = i1493[5]
  return i1492
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i1495 = data
  i1494.m_ComponentVersion = i1495[0]
  i1494.m_LightType = i1495[1]
  i1494.m_BlendStyleIndex = i1495[2]
  i1494.m_FalloffIntensity = i1495[3]
  i1494.m_Color = new pc.Color(i1495[4], i1495[5], i1495[6], i1495[7])
  i1494.m_Intensity = i1495[8]
  i1494.m_LightVolumeIntensity = i1495[9]
  i1494.m_LightVolumeIntensityEnabled = !!i1495[10]
  i1494.m_ApplyToSortingLayers = i1495[11]
  request.r(i1495[12], i1495[13], 0, i1494, 'm_LightCookieSprite')
  request.r(i1495[14], i1495[15], 0, i1494, 'm_DeprecatedPointLightCookieSprite')
  i1494.m_LightOrder = i1495[16]
  i1494.m_AlphaBlendOnOverlap = !!i1495[17]
  i1494.m_OverlapOperation = i1495[18]
  i1494.m_NormalMapDistance = i1495[19]
  i1494.m_NormalMapQuality = i1495[20]
  i1494.m_UseNormalMap = !!i1495[21]
  i1494.m_ShadowIntensityEnabled = !!i1495[22]
  i1494.m_ShadowIntensity = i1495[23]
  i1494.m_ShadowVolumeIntensityEnabled = !!i1495[24]
  i1494.m_ShadowVolumeIntensity = i1495[25]
  i1494.m_PointLightInnerAngle = i1495[26]
  i1494.m_PointLightOuterAngle = i1495[27]
  i1494.m_PointLightInnerRadius = i1495[28]
  i1494.m_PointLightOuterRadius = i1495[29]
  i1494.m_ShapeLightParametricSides = i1495[30]
  i1494.m_ShapeLightParametricAngleOffset = i1495[31]
  i1494.m_ShapeLightParametricRadius = i1495[32]
  i1494.m_ShapeLightFalloffSize = i1495[33]
  i1494.m_ShapeLightFalloffOffset = new pc.Vec2( i1495[34], i1495[35] )
  var i1497 = i1495[36]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 3) {
    i1496.push( new pc.Vec3( i1497[i + 0], i1497[i + 1], i1497[i + 2] ) );
  }
  i1494.m_ShapePath = i1496
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1501 = data
  i1500.pivot = new pc.Vec2( i1501[0], i1501[1] )
  i1500.anchorMin = new pc.Vec2( i1501[2], i1501[3] )
  i1500.anchorMax = new pc.Vec2( i1501[4], i1501[5] )
  i1500.sizeDelta = new pc.Vec2( i1501[6], i1501[7] )
  i1500.anchoredPosition3D = new pc.Vec3( i1501[8], i1501[9], i1501[10] )
  i1500.rotation = new pc.Quat(i1501[11], i1501[12], i1501[13], i1501[14])
  i1500.scale = new pc.Vec3( i1501[15], i1501[16], i1501[17] )
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1503 = data
  i1502.enabled = !!i1503[0]
  i1502.planeDistance = i1503[1]
  i1502.referencePixelsPerUnit = i1503[2]
  i1502.isFallbackOverlay = !!i1503[3]
  i1502.renderMode = i1503[4]
  i1502.renderOrder = i1503[5]
  i1502.sortingLayerName = i1503[6]
  i1502.sortingOrder = i1503[7]
  i1502.scaleFactor = i1503[8]
  request.r(i1503[9], i1503[10], 0, i1502, 'worldCamera')
  i1502.overrideSorting = !!i1503[11]
  i1502.pixelPerfect = !!i1503[12]
  i1502.targetDisplay = i1503[13]
  i1502.overridePixelPerfect = !!i1503[14]
  return i1502
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1505 = data
  i1504.m_UiScaleMode = i1505[0]
  i1504.m_ReferencePixelsPerUnit = i1505[1]
  i1504.m_ScaleFactor = i1505[2]
  i1504.m_ReferenceResolution = new pc.Vec2( i1505[3], i1505[4] )
  i1504.m_ScreenMatchMode = i1505[5]
  i1504.m_MatchWidthOrHeight = i1505[6]
  i1504.m_PhysicalUnit = i1505[7]
  i1504.m_FallbackScreenDPI = i1505[8]
  i1504.m_DefaultSpriteDPI = i1505[9]
  i1504.m_DynamicPixelsPerUnit = i1505[10]
  i1504.m_PresetInfoIsWorld = !!i1505[11]
  return i1504
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1507 = data
  i1506.m_IgnoreReversedGraphics = !!i1507[0]
  i1506.m_BlockingObjects = i1507[1]
  i1506.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1507[2] )
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1509 = data
  i1508.cullTransparentMesh = !!i1509[0]
  return i1508
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.Image' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'm_Sprite')
  i1510.m_Type = i1511[2]
  i1510.m_PreserveAspect = !!i1511[3]
  i1510.m_FillCenter = !!i1511[4]
  i1510.m_FillMethod = i1511[5]
  i1510.m_FillAmount = i1511[6]
  i1510.m_FillClockwise = !!i1511[7]
  i1510.m_FillOrigin = i1511[8]
  i1510.m_UseSpriteMesh = !!i1511[9]
  i1510.m_PixelsPerUnitMultiplier = i1511[10]
  request.r(i1511[11], i1511[12], 0, i1510, 'm_Material')
  i1510.m_Maskable = !!i1511[13]
  i1510.m_Color = new pc.Color(i1511[14], i1511[15], i1511[16], i1511[17])
  i1510.m_RaycastTarget = !!i1511[18]
  i1510.m_RaycastPadding = new pc.Vec4( i1511[19], i1511[20], i1511[21], i1511[22] )
  return i1510
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.UI.Text' )
  var i1513 = data
  i1512.m_FontData = request.d('UnityEngine.UI.FontData', i1513[0], i1512.m_FontData)
  i1512.m_Text = i1513[1]
  request.r(i1513[2], i1513[3], 0, i1512, 'm_Material')
  i1512.m_Maskable = !!i1513[4]
  i1512.m_Color = new pc.Color(i1513[5], i1513[6], i1513[7], i1513[8])
  i1512.m_RaycastTarget = !!i1513[9]
  i1512.m_RaycastPadding = new pc.Vec4( i1513[10], i1513[11], i1513[12], i1513[13] )
  return i1512
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'm_Font')
  i1514.m_FontSize = i1515[2]
  i1514.m_FontStyle = i1515[3]
  i1514.m_BestFit = !!i1515[4]
  i1514.m_MinSize = i1515[5]
  i1514.m_MaxSize = i1515[6]
  i1514.m_Alignment = i1515[7]
  i1514.m_AlignByGeometry = !!i1515[8]
  i1514.m_RichText = !!i1515[9]
  i1514.m_HorizontalOverflow = i1515[10]
  i1514.m_VerticalOverflow = i1515[11]
  i1514.m_LineSpacing = i1515[12]
  return i1514
}

Deserializers["Episode1"] = function (request, data, root) {
  var i1516 = root || request.c( 'Episode1' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, '_arm')
  request.r(i1517[2], i1517[3], 0, i1516, '_points')
  request.r(i1517[4], i1517[5], 0, i1516, '_unit')
  request.r(i1517[6], i1517[7], 0, i1516, '_particleSystem')
  request.r(i1517[8], i1517[9], 0, i1516, '_textCoins')
  request.r(i1517[10], i1517[11], 0, i1516, '_textDamage')
  request.r(i1517[12], i1517[13], 0, i1516, '_textHealth')
  request.r(i1517[14], i1517[15], 0, i1516, '_textHealth2')
  request.r(i1517[16], i1517[17], 0, i1516, '_textDamage2')
  i1516.scaleDuration = i1517[18]
  i1516.moveDuration = i1517[19]
  i1516.targetScale = new pc.Vec3( i1517[20], i1517[21], i1517[22] )
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'animatorController')
  request.r(i1519[2], i1519[3], 0, i1518, 'avatar')
  i1518.updateMode = i1519[4]
  i1518.hasTransformHierarchy = !!i1519[5]
  i1518.applyRootMotion = !!i1519[6]
  var i1521 = i1519[7]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 2, i1520, '')
  }
  i1518.humanBones = i1520
  i1518.enabled = !!i1519[8]
  return i1518
}

Deserializers["Episode2"] = function (request, data, root) {
  var i1524 = root || request.c( 'Episode2' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, '_arm')
  request.r(i1525[2], i1525[3], 0, i1524, '_points')
  request.r(i1525[4], i1525[5], 0, i1524, '_unit1')
  request.r(i1525[6], i1525[7], 0, i1524, '_unit2')
  request.r(i1525[8], i1525[9], 0, i1524, '_particleSystem1')
  request.r(i1525[10], i1525[11], 0, i1524, '_particleSystem2')
  request.r(i1525[12], i1525[13], 0, i1524, '_textCoins')
  request.r(i1525[14], i1525[15], 0, i1524, '_textDamage')
  request.r(i1525[16], i1525[17], 0, i1524, '_textHealth')
  request.r(i1525[18], i1525[19], 0, i1524, '_textHealth2')
  request.r(i1525[20], i1525[21], 0, i1524, '_textDamage2')
  i1524.scaleDuration = i1525[22]
  i1524.moveDuration = i1525[23]
  i1524.targetScale = new pc.Vec3( i1525[24], i1525[25], i1525[26] )
  return i1524
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'm_FirstSelected')
  i1526.m_sendNavigationEvents = !!i1527[2]
  i1526.m_DragThreshold = i1527[3]
  return i1526
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1529 = data
  i1528.m_HorizontalAxis = i1529[0]
  i1528.m_VerticalAxis = i1529[1]
  i1528.m_SubmitButton = i1529[2]
  i1528.m_CancelButton = i1529[3]
  i1528.m_InputActionsPerSecond = i1529[4]
  i1528.m_RepeatDelay = i1529[5]
  i1528.m_ForceModuleActive = !!i1529[6]
  i1528.m_SendPointerHoverToParent = !!i1529[7]
  return i1528
}

Deserializers["Scenario"] = function (request, data, root) {
  var i1530 = root || request.c( 'Scenario' )
  var i1531 = data
  request.r(i1531[0], i1531[1], 0, i1530, '_episode1')
  request.r(i1531[2], i1531[3], 0, i1530, '_episode2')
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1533 = data
  i1532.ambientIntensity = i1533[0]
  i1532.reflectionIntensity = i1533[1]
  i1532.ambientMode = i1533[2]
  i1532.ambientLight = new pc.Color(i1533[3], i1533[4], i1533[5], i1533[6])
  i1532.ambientSkyColor = new pc.Color(i1533[7], i1533[8], i1533[9], i1533[10])
  i1532.ambientGroundColor = new pc.Color(i1533[11], i1533[12], i1533[13], i1533[14])
  i1532.ambientEquatorColor = new pc.Color(i1533[15], i1533[16], i1533[17], i1533[18])
  i1532.fogColor = new pc.Color(i1533[19], i1533[20], i1533[21], i1533[22])
  i1532.fogEndDistance = i1533[23]
  i1532.fogStartDistance = i1533[24]
  i1532.fogDensity = i1533[25]
  i1532.fog = !!i1533[26]
  request.r(i1533[27], i1533[28], 0, i1532, 'skybox')
  i1532.fogMode = i1533[29]
  var i1535 = i1533[30]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1535[i + 0]) );
  }
  i1532.lightmaps = i1534
  i1532.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1533[31], i1532.lightProbes)
  i1532.lightmapsMode = i1533[32]
  i1532.mixedBakeMode = i1533[33]
  i1532.environmentLightingMode = i1533[34]
  i1532.ambientProbe = new pc.SphericalHarmonicsL2(i1533[35])
  i1532.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1533[36])
  i1532.useReferenceAmbientProbe = !!i1533[37]
  request.r(i1533[38], i1533[39], 0, i1532, 'customReflection')
  request.r(i1533[40], i1533[41], 0, i1532, 'defaultReflection')
  i1532.defaultReflectionMode = i1533[42]
  i1532.defaultReflectionResolution = i1533[43]
  i1532.sunLightObjectId = i1533[44]
  i1532.pixelLightCount = i1533[45]
  i1532.defaultReflectionHDR = !!i1533[46]
  i1532.hasLightDataAsset = !!i1533[47]
  i1532.hasManualGenerate = !!i1533[48]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'lightmapColor')
  request.r(i1539[2], i1539[3], 0, i1538, 'lightmapDirection')
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1540 = root || new UnityEngine.LightProbes()
  var i1541 = data
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1547 = data
  i1546.enabled = !!i1547[0]
  i1546.type = i1547[1]
  i1546.color = new pc.Color(i1547[2], i1547[3], i1547[4], i1547[5])
  i1546.cullingMask = i1547[6]
  i1546.intensity = i1547[7]
  i1546.range = i1547[8]
  i1546.spotAngle = i1547[9]
  i1546.shadows = i1547[10]
  i1546.shadowNormalBias = i1547[11]
  i1546.shadowBias = i1547[12]
  i1546.shadowStrength = i1547[13]
  i1546.shadowResolution = i1547[14]
  i1546.lightmapBakeType = i1547[15]
  i1546.renderMode = i1547[16]
  request.r(i1547[17], i1547[18], 0, i1546, 'cookie')
  i1546.cookieSize = i1547[19]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1549 = data
  i1548.AdditionalLightsPerObjectLimit = i1549[0]
  i1548.AdditionalLightsRenderingMode = i1549[1]
  i1548.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1549[2], i1548.LightRenderingMode)
  i1548.ColorGradingLutSize = i1549[3]
  i1548.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1549[4], i1548.ColorGradingMode)
  i1548.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1549[5], i1548.MainLightRenderingMode)
  i1548.MainLightRenderingModeValue = i1549[6]
  i1548.MainLightShadowsSupported = !!i1549[7]
  i1548.MixedLightingSupported = !!i1549[8]
  i1548.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1549[9], i1548.MsaaQuality)
  i1548.MSAA = i1549[10]
  i1548.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1549[11], i1548.OpaqueDownsampling)
  i1548.RenderScale = i1549[12]
  i1548.RequireDepthTexture = !!i1549[13]
  i1548.RequireOpaqueTexture = !!i1549[14]
  i1548.ShadowAtlasResolution = i1549[15]
  i1548.ShadowDepthBias = i1549[16]
  i1548.SupportsHDR = !!i1549[17]
  i1548.SupportsTerrainHoles = !!i1549[18]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1551 = data
  i1550.Disabled = i1551[0]
  i1550.PerVertex = i1551[1]
  i1550.PerPixel = i1551[2]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1553 = data
  i1552.LowDynamicRange = i1553[0]
  i1552.HighDynamicRange = i1553[1]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1555 = data
  i1554.Disabled = i1555[0]
  i1554._2x = i1555[1]
  i1554._4x = i1555[2]
  i1554._8x = i1555[3]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1557 = data
  i1556.None = i1557[0]
  i1556._2xBilinear = i1557[1]
  i1556._4xBox = i1557[2]
  i1556._4xBilinear = i1557[3]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1559 = data
  var i1561 = i1559[0]
  var i1560 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1561[i + 0]));
  }
  i1558.ShaderCompilationErrors = i1560
  i1558.name = i1559[1]
  i1558.guid = i1559[2]
  var i1563 = i1559[3]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( i1563[i + 0] );
  }
  i1558.shaderDefinedKeywords = i1562
  var i1565 = i1559[4]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1565[i + 0]) );
  }
  i1558.passes = i1564
  var i1567 = i1559[5]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1567[i + 0]) );
  }
  i1558.usePasses = i1566
  var i1569 = i1559[6]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1569[i + 0]) );
  }
  i1558.defaultParameterValues = i1568
  request.r(i1559[7], i1559[8], 0, i1558, 'unityFallbackShader')
  i1558.readDepth = !!i1559[9]
  i1558.isCreatedByShaderGraph = !!i1559[10]
  i1558.compiled = !!i1559[11]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1573 = data
  i1572.shaderName = i1573[0]
  i1572.errorMessage = i1573[1]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1578 = root || new pc.UnityShaderPass()
  var i1579 = data
  i1578.id = i1579[0]
  i1578.subShaderIndex = i1579[1]
  i1578.name = i1579[2]
  i1578.passType = i1579[3]
  i1578.grabPassTextureName = i1579[4]
  i1578.usePass = !!i1579[5]
  i1578.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[6], i1578.zTest)
  i1578.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[7], i1578.zWrite)
  i1578.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[8], i1578.culling)
  i1578.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1579[9], i1578.blending)
  i1578.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1579[10], i1578.alphaBlending)
  i1578.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[11], i1578.colorWriteMask)
  i1578.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[12], i1578.offsetUnits)
  i1578.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[13], i1578.offsetFactor)
  i1578.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[14], i1578.stencilRef)
  i1578.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[15], i1578.stencilReadMask)
  i1578.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1579[16], i1578.stencilWriteMask)
  i1578.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1579[17], i1578.stencilOp)
  i1578.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1579[18], i1578.stencilOpFront)
  i1578.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1579[19], i1578.stencilOpBack)
  var i1581 = i1579[20]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1581[i + 0]) );
  }
  i1578.tags = i1580
  var i1583 = i1579[21]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( i1583[i + 0] );
  }
  i1578.passDefinedKeywords = i1582
  var i1585 = i1579[22]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1585[i + 0]) );
  }
  i1578.passDefinedKeywordGroups = i1584
  var i1587 = i1579[23]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1587[i + 0]) );
  }
  i1578.variants = i1586
  var i1589 = i1579[24]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1589[i + 0]) );
  }
  i1578.excludedVariants = i1588
  i1578.hasDepthReader = !!i1579[25]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1591 = data
  i1590.val = i1591[0]
  i1590.name = i1591[1]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1593 = data
  i1592.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1593[0], i1592.src)
  i1592.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1593[1], i1592.dst)
  i1592.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1593[2], i1592.op)
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1595 = data
  i1594.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1595[0], i1594.pass)
  i1594.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1595[1], i1594.fail)
  i1594.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1595[2], i1594.zFail)
  i1594.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1595[3], i1594.comp)
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1599 = data
  i1598.name = i1599[0]
  i1598.value = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1603 = data
  var i1605 = i1603[0]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( i1605[i + 0] );
  }
  i1602.keywords = i1604
  i1602.hasDiscard = !!i1603[1]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1609 = data
  i1608.passId = i1609[0]
  i1608.subShaderIndex = i1609[1]
  var i1611 = i1609[2]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( i1611[i + 0] );
  }
  i1608.keywords = i1610
  i1608.vertexProgram = i1609[3]
  i1608.fragmentProgram = i1609[4]
  i1608.exportedForWebGl2 = !!i1609[5]
  i1608.readDepth = !!i1609[6]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, 'shader')
  i1614.pass = i1615[2]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.type = i1619[1]
  i1618.value = new pc.Vec4( i1619[2], i1619[3], i1619[4], i1619[5] )
  i1618.textureValue = i1619[6]
  i1618.shaderPropertyFlag = i1619[7]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1621 = data
  i1620.name = i1621[0]
  request.r(i1621[1], i1621[2], 0, i1620, 'texture')
  i1620.aabb = i1621[3]
  i1620.vertices = i1621[4]
  i1620.triangles = i1621[5]
  i1620.textureRect = UnityEngine.Rect.MinMaxRect(i1621[6], i1621[7], i1621[8], i1621[9])
  i1620.packedRect = UnityEngine.Rect.MinMaxRect(i1621[10], i1621[11], i1621[12], i1621[13])
  i1620.border = new pc.Vec4( i1621[14], i1621[15], i1621[16], i1621[17] )
  i1620.transparency = i1621[18]
  i1620.bounds = i1621[19]
  i1620.pixelsPerUnit = i1621[20]
  i1620.textureWidth = i1621[21]
  i1620.textureHeight = i1621[22]
  i1620.nativeSize = new pc.Vec2( i1621[23], i1621[24] )
  i1620.pivot = new pc.Vec2( i1621[25], i1621[26] )
  i1620.textureRectOffset = new pc.Vec2( i1621[27], i1621[28] )
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.wrapMode = i1623[1]
  i1622.isLooping = !!i1623[2]
  i1622.length = i1623[3]
  var i1625 = i1623[4]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1625[i + 0]) );
  }
  i1622.curves = i1624
  var i1627 = i1623[5]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1627[i + 0]) );
  }
  i1622.events = i1626
  i1622.halfPrecision = !!i1623[6]
  i1622._frameRate = i1623[7]
  i1622.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1623[8], i1622.localBounds)
  i1622.hasMuscleCurves = !!i1623[9]
  var i1629 = i1623[10]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1622.clipMuscleConstant = i1628
  i1622.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1623[11], i1622.clipBindingConstant)
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1633 = data
  i1632.path = i1633[0]
  i1632.hash = i1633[1]
  i1632.componentType = i1633[2]
  i1632.property = i1633[3]
  i1632.keys = i1633[4]
  var i1635 = i1633[5]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1635[i + 0]) );
  }
  i1632.objectReferenceKeys = i1634
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1639 = data
  i1638.time = i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'value')
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1643 = data
  i1642.functionName = i1643[0]
  i1642.floatParameter = i1643[1]
  i1642.intParameter = i1643[2]
  i1642.stringParameter = i1643[3]
  request.r(i1643[4], i1643[5], 0, i1642, 'objectReferenceParameter')
  i1642.time = i1643[6]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1645 = data
  i1644.center = new pc.Vec3( i1645[0], i1645[1], i1645[2] )
  i1644.extends = new pc.Vec3( i1645[3], i1645[4], i1645[5] )
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( i1651[i + 0] );
  }
  i1648.genericBindings = i1650
  var i1653 = i1649[1]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( i1653[i + 0] );
  }
  i1648.pptrCurveMapping = i1652
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1655 = data
  i1654.name = i1655[0]
  i1654.ascent = i1655[1]
  i1654.originalLineHeight = i1655[2]
  i1654.fontSize = i1655[3]
  var i1657 = i1655[4]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1657[i + 0]) );
  }
  i1654.characterInfo = i1656
  request.r(i1655[5], i1655[6], 0, i1654, 'texture')
  i1654.originalFontSize = i1655[7]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1661 = data
  i1660.index = i1661[0]
  i1660.advance = i1661[1]
  i1660.bearing = i1661[2]
  i1660.glyphWidth = i1661[3]
  i1660.glyphHeight = i1661[4]
  i1660.minX = i1661[5]
  i1660.maxX = i1661[6]
  i1660.minY = i1661[7]
  i1660.maxY = i1661[8]
  i1660.uvBottomLeftX = i1661[9]
  i1660.uvBottomLeftY = i1661[10]
  i1660.uvBottomRightX = i1661[11]
  i1660.uvBottomRightY = i1661[12]
  i1660.uvTopLeftX = i1661[13]
  i1660.uvTopLeftY = i1661[14]
  i1660.uvTopRightX = i1661[15]
  i1660.uvTopRightY = i1661[16]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1663 = data
  i1662.name = i1663[0]
  var i1665 = i1663[1]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1665[i + 0]) );
  }
  i1662.layers = i1664
  var i1667 = i1663[2]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1667[i + 0]) );
  }
  i1662.parameters = i1666
  i1662.animationClips = i1663[3]
  i1662.avatarUnsupported = i1663[4]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1671 = data
  i1670.name = i1671[0]
  i1670.defaultWeight = i1671[1]
  i1670.blendingMode = i1671[2]
  i1670.avatarMask = i1671[3]
  i1670.syncedLayerIndex = i1671[4]
  i1670.syncedLayerAffectsTiming = !!i1671[5]
  i1670.syncedLayers = i1671[6]
  i1670.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1671[7], i1670.stateMachine)
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1673 = data
  i1672.id = i1673[0]
  i1672.name = i1673[1]
  i1672.path = i1673[2]
  var i1675 = i1673[3]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1675[i + 0]) );
  }
  i1672.states = i1674
  var i1677 = i1673[4]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1677[i + 0]) );
  }
  i1672.machines = i1676
  var i1679 = i1673[5]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1679[i + 0]) );
  }
  i1672.entryStateTransitions = i1678
  var i1681 = i1673[6]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1681[i + 0]) );
  }
  i1672.exitStateTransitions = i1680
  var i1683 = i1673[7]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1683[i + 0]) );
  }
  i1672.anyStateTransitions = i1682
  i1672.defaultStateId = i1673[8]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1687 = data
  i1686.id = i1687[0]
  i1686.name = i1687[1]
  i1686.cycleOffset = i1687[2]
  i1686.cycleOffsetParameter = i1687[3]
  i1686.cycleOffsetParameterActive = !!i1687[4]
  i1686.mirror = !!i1687[5]
  i1686.mirrorParameter = i1687[6]
  i1686.mirrorParameterActive = !!i1687[7]
  i1686.motionId = i1687[8]
  i1686.nameHash = i1687[9]
  i1686.fullPathHash = i1687[10]
  i1686.speed = i1687[11]
  i1686.speedParameter = i1687[12]
  i1686.speedParameterActive = !!i1687[13]
  i1686.tag = i1687[14]
  i1686.tagHash = i1687[15]
  i1686.writeDefaultValues = !!i1687[16]
  var i1689 = i1687[17]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 2, i1688, '')
  }
  i1686.behaviours = i1688
  var i1691 = i1687[18]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1691[i + 0]) );
  }
  i1686.transitions = i1690
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1697 = data
  i1696.fullPath = i1697[0]
  i1696.canTransitionToSelf = !!i1697[1]
  i1696.duration = i1697[2]
  i1696.exitTime = i1697[3]
  i1696.hasExitTime = !!i1697[4]
  i1696.hasFixedDuration = !!i1697[5]
  i1696.interruptionSource = i1697[6]
  i1696.offset = i1697[7]
  i1696.orderedInterruption = !!i1697[8]
  i1696.destinationStateId = i1697[9]
  i1696.isExit = !!i1697[10]
  i1696.mute = !!i1697[11]
  i1696.solo = !!i1697[12]
  var i1699 = i1697[13]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1699[i + 0]) );
  }
  i1696.conditions = i1698
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1705 = data
  i1704.destinationStateId = i1705[0]
  i1704.isExit = !!i1705[1]
  i1704.mute = !!i1705[2]
  i1704.solo = !!i1705[3]
  var i1707 = i1705[4]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1707[i + 0]) );
  }
  i1704.conditions = i1706
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1711 = data
  i1710.defaultBool = !!i1711[0]
  i1710.defaultFloat = i1711[1]
  i1710.defaultInt = i1711[2]
  i1710.name = i1711[3]
  i1710.nameHash = i1711[4]
  i1710.type = i1711[5]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1713 = data
  var i1715 = i1713[0]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1715[i + 0]) );
  }
  i1712.files = i1714
  i1712.componentToPrefabIds = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1719 = data
  i1718.path = i1719[0]
  request.r(i1719[1], i1719[2], 0, i1718, 'unityObject')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1721 = data
  var i1723 = i1721[0]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1723[i + 0]) );
  }
  i1720.scriptsExecutionOrder = i1722
  var i1725 = i1721[1]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1725[i + 0]) );
  }
  i1720.sortingLayers = i1724
  var i1727 = i1721[2]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1727[i + 0]) );
  }
  i1720.cullingLayers = i1726
  i1720.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1721[3], i1720.timeSettings)
  i1720.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1721[4], i1720.physicsSettings)
  i1720.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1721[5], i1720.physics2DSettings)
  i1720.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1721[6], i1720.qualitySettings)
  i1720.enableRealtimeShadows = !!i1721[7]
  i1720.enableAutoInstancing = !!i1721[8]
  i1720.enableDynamicBatching = !!i1721[9]
  i1720.lightmapEncodingQuality = i1721[10]
  i1720.desiredColorSpace = i1721[11]
  var i1729 = i1721[12]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( i1729[i + 0] );
  }
  i1720.allTags = i1728
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1733 = data
  i1732.name = i1733[0]
  i1732.value = i1733[1]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1737 = data
  i1736.id = i1737[0]
  i1736.name = i1737[1]
  i1736.value = i1737[2]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1741 = data
  i1740.id = i1741[0]
  i1740.name = i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1743 = data
  i1742.fixedDeltaTime = i1743[0]
  i1742.maximumDeltaTime = i1743[1]
  i1742.timeScale = i1743[2]
  i1742.maximumParticleTimestep = i1743[3]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1745 = data
  i1744.gravity = new pc.Vec3( i1745[0], i1745[1], i1745[2] )
  i1744.defaultSolverIterations = i1745[3]
  i1744.bounceThreshold = i1745[4]
  i1744.autoSyncTransforms = !!i1745[5]
  i1744.autoSimulation = !!i1745[6]
  var i1747 = i1745[7]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1747[i + 0]) );
  }
  i1744.collisionMatrix = i1746
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.layerId = i1751[1]
  i1750.otherLayerId = i1751[2]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'material')
  i1752.gravity = new pc.Vec2( i1753[2], i1753[3] )
  i1752.positionIterations = i1753[4]
  i1752.velocityIterations = i1753[5]
  i1752.velocityThreshold = i1753[6]
  i1752.maxLinearCorrection = i1753[7]
  i1752.maxAngularCorrection = i1753[8]
  i1752.maxTranslationSpeed = i1753[9]
  i1752.maxRotationSpeed = i1753[10]
  i1752.baumgarteScale = i1753[11]
  i1752.baumgarteTOIScale = i1753[12]
  i1752.timeToSleep = i1753[13]
  i1752.linearSleepTolerance = i1753[14]
  i1752.angularSleepTolerance = i1753[15]
  i1752.defaultContactOffset = i1753[16]
  i1752.autoSimulation = !!i1753[17]
  i1752.queriesHitTriggers = !!i1753[18]
  i1752.queriesStartInColliders = !!i1753[19]
  i1752.callbacksOnDisable = !!i1753[20]
  i1752.reuseCollisionCallbacks = !!i1753[21]
  i1752.autoSyncTransforms = !!i1753[22]
  var i1755 = i1753[23]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1755[i + 0]) );
  }
  i1752.collisionMatrix = i1754
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.layerId = i1759[1]
  i1758.otherLayerId = i1759[2]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1761 = data
  var i1763 = i1761[0]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1763[i + 0]) );
  }
  i1760.qualityLevels = i1762
  var i1765 = i1761[1]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( i1765[i + 0] );
  }
  i1760.names = i1764
  i1760.shadows = i1761[2]
  i1760.anisotropicFiltering = i1761[3]
  i1760.antiAliasing = i1761[4]
  i1760.lodBias = i1761[5]
  i1760.shadowCascades = i1761[6]
  i1760.shadowDistance = i1761[7]
  i1760.shadowmaskMode = i1761[8]
  i1760.shadowProjection = i1761[9]
  i1760.shadowResolution = i1761[10]
  i1760.softParticles = !!i1761[11]
  i1760.softVegetation = !!i1761[12]
  i1760.activeColorSpace = i1761[13]
  i1760.desiredColorSpace = i1761[14]
  i1760.masterTextureLimit = i1761[15]
  i1760.maxQueuedFrames = i1761[16]
  i1760.particleRaycastBudget = i1761[17]
  i1760.pixelLightCount = i1761[18]
  i1760.realtimeReflectionProbes = !!i1761[19]
  i1760.shadowCascade2Split = i1761[20]
  i1760.shadowCascade4Split = new pc.Vec3( i1761[21], i1761[22], i1761[23] )
  i1760.streamingMipmapsActive = !!i1761[24]
  i1760.vSyncCount = i1761[25]
  i1760.asyncUploadBufferSize = i1761[26]
  i1760.asyncUploadTimeSlice = i1761[27]
  i1760.billboardsFaceCameraPosition = !!i1761[28]
  i1760.shadowNearPlaneOffset = i1761[29]
  i1760.streamingMipmapsMemoryBudget = i1761[30]
  i1760.maximumLODLevel = i1761[31]
  i1760.streamingMipmapsAddAllCameras = !!i1761[32]
  i1760.streamingMipmapsMaxLevelReduction = i1761[33]
  i1760.streamingMipmapsRenderersPerFrame = i1761[34]
  i1760.resolutionScalingFixedDPIFactor = i1761[35]
  i1760.streamingMipmapsMaxFileIORequests = i1761[36]
  i1760.currentQualityLevel = i1761[37]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1771 = data
  i1770.weight = i1771[0]
  i1770.vertices = i1771[1]
  i1770.normals = i1771[2]
  i1770.tangents = i1771[3]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1775 = data
  i1774.mode = i1775[0]
  i1774.parameter = i1775[1]
  i1774.threshold = i1775[2]
  return i1774
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[7],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[7],"64":[65],"66":[67],"68":[67],"13":[12],"69":[12],"70":[71],"72":[73],"74":[7],"75":[12],"76":[65,12],"77":[12,17],"78":[12],"79":[17,12],"80":[65],"81":[17,12],"82":[12],"83":[7],"10":[7],"84":[30],"85":[71],"86":[87],"88":[12],"89":[12],"16":[13],"18":[17,12],"90":[12],"15":[13],"91":[12],"92":[12],"93":[12],"94":[12],"95":[12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[17,12],"101":[12],"102":[12],"103":[12],"104":[12],"20":[17,12],"105":[12],"106":[27],"107":[27],"28":[27],"108":[27],"109":[7],"110":[7],"111":[71]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.ParticleSystem","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.Light2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","Episode1","UnityEngine.GameObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Episode2","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Scenario","UnityEngine.Light","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "CardsDragons";

Deserializers.lunaInitializationTime = "04/25/2025 11:02:07";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

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

Deserializers.buildID = "6994b52c-3bc3-4aae-9690-b74e4afe08cb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

