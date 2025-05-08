if ( TRACE ) { TRACE( JSON.parse( '["ArmAnimation#init","ArmAnimation#Start","ArmAnimation#AnimateArm","Buttle#OnEnable","Buttle#OnPointerClick","Buttle#StartButtle","Buttle#ButtleLoss","Card#init","Card#OnEnable","Card#OnPointerClick","Card#PlayParticle","Card#AnimateCard","Card#ScaleTo","Card#MoveTo","Card2V#init","Card2V#Awake","Card2V#OnPointerClick","Card2V#AnimateCardMoveAndScale","Card2V#ScaleTo","ClickCta#Click","Episode1#init","Episode1#OnEnable","Episode1#OnPointerClick","Episode1#AnimateCard","Episode1#ScaleTo","Episode1#MoveTo","Episode2#init","Episode2#OnEnable","Episode2#OnPointerClick","Episode2#AnimateCard","Episode2#ScaleTo","Episode2#MoveTo","Episode3#Awake","Episode3#OnEnable","Episode3#OnPointerClick","Episode3#Battle","Episode3#DestroyingEnemies","Episode3#FadeInVictory","Episode3#AnimatePopIn","Episode3#SlideBattleUI","Episode3#AnimateAttack","Episode3#ScaleTo","Episode3#MoveTo","Episode4#init","Episode4#OnEnable","Episode4#OnPointerClick","Episode4#AnimateCard","Episode4#ScaleTo","Episode4#MoveTo","Episode4_1#OnEnable","Episode4_1#OnPointerClick","Episode4_1#AnimateObjects","Episode4_1#ScaleAndHide","Episode4_1#ScaleUp","Episode4_2#Awake","Episode4_2#OnEnable","Episode4_2#OnPointerClick","Episode4_2#InitialiseCards","Episode4_2#BattleSequence","Episode4_2#AnimateAttack","Episode4_2#ReturnToOriginalPosition","Episode4_2#ScaleTo","Episode4_2#MoveTo","Episode4_2#FadeInVictory","Episode4_2#AnimatePopIn","Episode4_2.AttackState#init","Episode4v2#init","Episode4v2#OnEnable","Episode4v2#CreateArmUp","Episode4v2#UpdateMoneyText","Episode4v2#IncrementDragonCard","Episode4v2#TrySpendForCard","Episode4v2#OnUpdateButtonClick","Episode4v2#SpawnCards","Episode4v2#ClearOldCards","Episode4v2#NotifyCardChosen","Episode4v2#AnimateCardUpdate","Episode4v2#ScaleAndHide","Episode4v2#ScaleUp","Episode4v2#UpgradeCardsAnimation","Episode4v2#MoveToWorldSpace","Episode4v2#ScaleTo","Episode4v2#ShakeEffect","Episode5#OnEnable","Episode5#OnPointerClick","Episode5#AnimateCards","Episode5#ScaleAndHide","Episode5#ScaleUp","Episode5_1#init","Episode5_1#OnEnable","Episode5_1#CheckCardSufficiency","Episode5_2#Awake","Episode5_2#OnEnable","Episode5_2#OnPointerClick","Episode5_2#InitialiseCards","Episode5_2#BattleSequence","Episode5_2#AnimateAttack","Episode5_2#ReturnToOriginalPosition","Episode5_2#ScaleTo","Episode5_2#MoveTo","Episode5_2#FadeInVictory","Episode5_2#AnimatePopIn","Episode5_2.AttackState#init","Episode6#init","Episode6#OnEnable","Episode6#OnPointerClick","Episode6#AnimateCard","Episode6#ShakeEffect","Episode6#MoveObjectTo","Episode6#ScaleTo","Episode6#MoveTo","Episode7#Awake","Episode7#OnEnable","Episode7#OnPointerClick","Episode7#Battle","Episode7#AnimateDragons","Episode7#AnimateAttack","Episode7#ScaleTo","Episode7#MoveTo","ParticleFollowUI#init","ParticleFollowUI#Update","Point#init","Scenario#init","Scenario#OnEnable","Scenario#OnDisable","Scenario#Start","Scenario#TurnEpisode2","Scenario#TurnEpisode3","Scenario#TurnEpisode4","UpdateButton#OnPointerClick"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ArmAnimation start.*/
    Bridge.define("ArmAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _targetButton: null,
            flyDuration: 0,
            shrinkDuration: 0,
            restoreDuration: 0,
            _armRect: null,
            _startPos: null,
            _targetPos: null,
            _originalScaleArm: null,
            _originalScaleButton: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ArmAnimation#init", this ); }

                this._startPos = new UnityEngine.Vector3();
                this._targetPos = new UnityEngine.Vector3();
                this._originalScaleArm = new UnityEngine.Vector3();
                this._originalScaleButton = new UnityEngine.Vector3();
                this.flyDuration = 1.0;
                this.shrinkDuration = 0.3;
                this.restoreDuration = 0.3;
            }
        },
        methods: {
            /*ArmAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ArmAnimation#Start", this ); }

                this._armRect = this.GetComponent(UnityEngine.RectTransform);
                this._startPos = this._armRect.position.$clone();
                this._targetPos = this._targetButton.rectTransform.position.$clone();
                this._originalScaleArm = this._armRect.localScale.$clone();
                this._originalScaleButton = this._targetButton.rectTransform.localScale.$clone();
                this.StartCoroutine$1(this.AnimateArm());
            },
            /*ArmAnimation.Start end.*/

            /*ArmAnimation.AnimateArm start.*/
            AnimateArm: function () {
if ( TRACE ) { TRACE( "ArmAnimation#AnimateArm", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed3,
                    t,
                    smoothT,
                    shrinkScaleArm,
                    shrinkScaleButton,
                    t2,
                    t3,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed3 = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed3 < this.flyDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t = elapsed3 / this.flyDuration;
                                        smoothT = pc.math.smoothstep(0.0, 1.0, t);
                                        this._armRect.position = new pc.Vec3().lerp( this._startPos, this._targetPos, smoothT );
                                        elapsed3 += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._armRect.position = this._targetPos.$clone();
                                        shrinkScaleArm = this._originalScaleArm.$clone().clone().scale( 0.5 );
                                        shrinkScaleButton = this._originalScaleButton.$clone().clone().scale( 0.5 );
                                        elapsed3 = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed3 < this.shrinkDuration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    t2 = elapsed3 / this.shrinkDuration;
                                        this._armRect.localScale = new pc.Vec3().lerp( this._originalScaleArm, shrinkScaleArm, t2 );
                                        this._targetButton.rectTransform.localScale = new pc.Vec3().lerp( this._originalScaleButton, shrinkScaleButton, t2 );
                                        elapsed3 += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this._armRect.localScale = shrinkScaleArm.$clone();
                                        this._targetButton.rectTransform.localScale = shrinkScaleButton.$clone();
                                        elapsed3 = 0.0;
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if ( elapsed3 < this.restoreDuration ) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    t3 = elapsed3 / this.restoreDuration;
                                        this._armRect.localScale = new pc.Vec3().lerp( shrinkScaleArm, this._originalScaleArm, t3 );
                                        this._targetButton.rectTransform.localScale = new pc.Vec3().lerp( shrinkScaleButton, this._originalScaleButton, t3 );
                                        elapsed3 += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 9;
                                        continue;
                                }
                                case 12: {
                                    this._armRect.localScale = this._originalScaleArm.$clone();
                                        this._targetButton.rectTransform.localScale = this._originalScaleButton.$clone();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.7);
                                        $step = 13;
                                        return true;
                                }
                                case 13: {
                                    this._armRect.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ArmAnimation.AnimateArm end.*/


        }
    });
    /*ArmAnimation end.*/

    /*Buttle start.*/
    Bridge.define("Buttle", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _episode: null,
            _buttonShop: null,
            _buttonButtle: null,
            _episode7: null,
            _episode4_2: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Buttle.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Buttle#OnEnable", this ); }

                this._buttonButtle.SetActive(true);
            },
            /*Buttle.OnEnable end.*/

            /*Buttle.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Buttle#OnPointerClick", this ); }

                this.StartButtle();
                this._buttonShop.SetActive(false);
            },
            /*Buttle.OnPointerClick end.*/

            /*Buttle.StartButtle start.*/
            StartButtle: function () {
if ( TRACE ) { TRACE( "Buttle#StartButtle", this ); }

                if (this._episode._isUpgrade) {
                    this._episode7.enabled = true;
                } else {
                    this.ButtleLoss();
                }
            },
            /*Buttle.StartButtle end.*/

            /*Buttle.ButtleLoss start.*/
            ButtleLoss: function () {
if ( TRACE ) { TRACE( "Buttle#ButtleLoss", this ); }

                this._episode4_2.enabled = true;
                this._episode4_2.InitialiseCards(this._episode._nonDragonCards, this._episode._dragonCards);
            },
            /*Buttle.ButtleLoss end.*/


        }
    });
    /*Buttle end.*/

    /*Card start.*/
    Bridge.define("Card", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _points: null,
            scaleDuration: 0,
            moveDuration: 0,
            targetScale: null,
            _particleSystem: null,
            _particleDragon: null,
            rectTransform: null,
            originalScale: null,
            originalLocalPosition: null
        },
        events: {
            They: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Card#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.originalScale = new UnityEngine.Vector3();
                this.originalLocalPosition = new UnityEngine.Vector3();
                this.scaleDuration = 0.2;
                this.moveDuration = 0.5;
                this.targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
            }
        },
        methods: {
            /*Card.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Card#OnEnable", this ); }

                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this.originalScale = this.rectTransform.localScale.$clone();
                this.originalLocalPosition = this.rectTransform.localPosition.$clone();
            },
            /*Card.OnEnable end.*/

            /*Card.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Card#OnPointerClick", this ); }

                if (UnityEngine.Component.op_Inequality(this._particleDragon, null)) {
                    this._particleDragon.Stop();
                }
                this.StartCoroutine$1(this.AnimateCard());
            },
            /*Card.OnPointerClick end.*/

            /*Card.PlayParticle start.*/
            PlayParticle: function () {
if ( TRACE ) { TRACE( "Card#PlayParticle", this ); }

                this._particleSystem.Play();
            },
            /*Card.PlayParticle end.*/

            /*Card.AnimateCard start.*/
            AnimateCard: function () {
if ( TRACE ) { TRACE( "Card#AnimateCard", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone(), this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale.$clone(), this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    !Bridge.staticEquals(this.They, null) ? this.They(this) : null;
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Card.AnimateCard end.*/

            /*Card.ScaleTo start.*/
            ScaleTo: function (target, duration) {
if ( TRACE ) { TRACE( "Card#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Card.ScaleTo end.*/

            /*Card.MoveTo start.*/
            MoveTo: function (target, duration) {
if ( TRACE ) { TRACE( "Card#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Card.MoveTo end.*/


        }
    });
    /*Card end.*/

    /*Card2V start.*/
    Bridge.define("Card2V", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _us: false,
            _arm: null,
            _episode: null,
            _dragon: false,
            _isMainCard: false,
            moveDuration: 0,
            scaleDuration: 0,
            targetScale: null,
            rectTransform: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Card2V#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this._us = true;
                this._dragon = false;
                this._isMainCard = false;
                this.moveDuration = 0.5;
                this.scaleDuration = 0.2;
                this.targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
            }
        },
        methods: {
            /*Card2V.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Card2V#Awake", this ); }

                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
            },
            /*Card2V.Awake end.*/

            /*Card2V.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Card2V#OnPointerClick", this ); }

                var $t;
                if (this._dragon) {
                    this._episode.CreateArmUp();
                }
                this._episode._armO.gameObject.SetActive(false);
                if (!this._us || !(UnityEngine.MonoBehaviour.op_Inequality(this._episode, null)) || !this._episode.TrySpendForCard()) {
                    return;
                }
                var points = System.Array.init([this._episode._point1, this._episode._point2, this._episode._point3, this._episode._point4, this._episode._point5, this._episode._point6], Point);
                var array = points;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var pt = $t.Current;
                        if (!pt._occupied) {
                            pt._occupied = true;
                            this.StartCoroutine$1(this.AnimateCardMoveAndScale(pt));
                            if (this._isMainCard) {
                                this._episode.NotifyCardChosen();
                            }
                            if (this._dragon && !this._episode._dragonCards.contains(this)) {
                                this._episode.IncrementDragonCard(this);
                            }
                            if (!this._dragon && !this._episode._dragonCards.contains(this)) {
                                this._episode.IncrementDragonCard(this);
                            }
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Card2V.OnPointerClick end.*/

            /*Card2V.AnimateCardMoveAndScale start.*/
            AnimateCardMoveAndScale: function (targetPoint) {
if ( TRACE ) { TRACE( "Card2V#AnimateCardMoveAndScale", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    originalScale,
                    startWorldPos,
                    targetWorldPos,
                    time,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    originalScale = this.rectTransform.localScale.$clone();
                                        startWorldPos = this.transform.position.$clone();
                                        targetWorldPos = targetPoint.transform.position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone(), this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    time = 0.0;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( time < this.moveDuration ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    this.transform.position = new pc.Vec3().lerp( startWorldPos, targetWorldPos, time / this.moveDuration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    this.transform.position = targetWorldPos.$clone();
                                        this.transform.SetParent(targetPoint.transform, true);
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(originalScale.$clone(), this.scaleDuration));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.rectTransform.localPosition = pc.Vec3.ZERO.clone();
                                        this.rectTransform.localScale = originalScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Card2V.AnimateCardMoveAndScale end.*/

            /*Card2V.ScaleTo start.*/
            ScaleTo: function (target, duration) {
if ( TRACE ) { TRACE( "Card2V#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Card2V.ScaleTo end.*/


        }
    });
    /*Card2V end.*/

    /*ClickCta start.*/
    Bridge.define("ClickCta", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ClickCta.Click start.*/
            Click: function () {
if ( TRACE ) { TRACE( "ClickCta#Click", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*ClickCta.Click end.*/


        }
    });
    /*ClickCta end.*/

    /*Episode1 start.*/
    Bridge.define("Episode1", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _arm: null,
            _points: null,
            _unit: null,
            _particleSystem: null,
            _textCoins: null,
            _textDamage: null,
            _textHealth: null,
            _textHealth2: null,
            _textDamage2: null,
            scaleDuration: 0,
            moveDuration: 0,
            targetScale: null,
            rectTransform: null,
            originalScale: null,
            originalLocalPosition: null
        },
        events: {
            End: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode1#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.originalScale = new UnityEngine.Vector3();
                this.originalLocalPosition = new UnityEngine.Vector3();
                this.scaleDuration = 0.2;
                this.moveDuration = 0.5;
                this.targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
            }
        },
        methods: {
            /*Episode1.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode1#OnEnable", this ); }

                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this._arm.SetActive(true);
                this.originalScale = this.rectTransform.localScale.$clone();
                this.originalLocalPosition = this.rectTransform.localPosition.$clone();
            },
            /*Episode1.OnEnable end.*/

            /*Episode1.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode1#OnPointerClick", this ); }

                this._arm.SetActive(false);
                this._textCoins.text = "3";
                this.StartCoroutine$1(this.AnimateCard());
            },
            /*Episode1.OnPointerClick end.*/

            /*Episode1.AnimateCard start.*/
            AnimateCard: function () {
if ( TRACE ) { TRACE( "Episode1#AnimateCard", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone(), this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale.$clone(), this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._unit.localPosition.$clone(), this.moveDuration));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._particleSystem.Play();
                                        this._unit.gameObject.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this._textDamage.gameObject.SetActive(false);
                                        this._textHealth.gameObject.SetActive(false);
                                        this._textHealth2.gameObject.SetActive(true);
                                        this._textDamage2.gameObject.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    !Bridge.staticEquals(this.End, null) ? this.End() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode1.AnimateCard end.*/

            /*Episode1.ScaleTo start.*/
            ScaleTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode1#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode1.ScaleTo end.*/

            /*Episode1.MoveTo start.*/
            MoveTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode1#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode1.MoveTo end.*/


        }
    });
    /*Episode1 end.*/

    /*Episode2 start.*/
    Bridge.define("Episode2", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _arm: null,
            _points: null,
            _unit1: null,
            _unit2: null,
            _particleSystem1: null,
            _particleSystem2: null,
            _textCoins: null,
            _textDamage: null,
            _textHealth: null,
            _textHealth2: null,
            _textDamage2: null,
            scaleDuration: 0,
            moveDuration: 0,
            targetScale: null,
            rectTransform: null,
            originalScale: null,
            originalLocalPosition: null
        },
        events: {
            End: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode2#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.originalScale = new UnityEngine.Vector3();
                this.originalLocalPosition = new UnityEngine.Vector3();
                this.scaleDuration = 0.2;
                this.moveDuration = 0.5;
                this.targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
            }
        },
        methods: {
            /*Episode2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode2#OnEnable", this ); }

                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this._arm.SetActive(true);
                this.originalScale = this.rectTransform.localScale.$clone();
                this.originalLocalPosition = this.rectTransform.localPosition.$clone();
            },
            /*Episode2.OnEnable end.*/

            /*Episode2.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode2#OnPointerClick", this ); }

                this._arm.SetActive(false);
                this._textCoins.text = "0";
                this.StartCoroutine$1(this.AnimateCard());
            },
            /*Episode2.OnPointerClick end.*/

            /*Episode2.AnimateCard start.*/
            AnimateCard: function () {
if ( TRACE ) { TRACE( "Episode2#AnimateCard", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone(), this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale.$clone(), this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._unit1.localPosition.$clone(), this.moveDuration));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._unit1.gameObject.SetActive(false);
                                        this._particleSystem1.Play();
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._unit2.localPosition.$clone(), this.moveDuration));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this._unit2.gameObject.SetActive(false);
                                        this._particleSystem2.Play();
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._textDamage.gameObject.SetActive(false);
                                        this._textHealth.gameObject.SetActive(false);
                                        this._textHealth2.gameObject.SetActive(true);
                                        this._textDamage2.gameObject.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    !Bridge.staticEquals(this.End, null) ? this.End() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode2.AnimateCard end.*/

            /*Episode2.ScaleTo start.*/
            ScaleTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode2#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode2.ScaleTo end.*/

            /*Episode2.MoveTo start.*/
            MoveTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode2#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode2.MoveTo end.*/


        }
    });
    /*Episode2 end.*/

    /*Episode3 start.*/
    Bridge.define("Episode3", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardDracone: null,
            _point: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
            _cardEnemye3: null,
            _cardDragon1: null,
            _cardDragon2: null,
            _cardDragon3: null,
            _particleSystem1: null,
            _particleSystem2: null,
            _particleSystem3: null,
            _particleButton: null,
            _textCoins: null,
            _winVictoty: null,
            _winInscription: null,
            _winInscription2: null,
            _winInscription3: null,
            _parentsDisplay: null,
            _cardL: null,
            _victoryCanvasGroup: null
        },
        events: {
            End: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode3.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Episode3#Awake", this ); }

                if (UnityEngine.GameObject.op_Inequality(this._winVictoty, null)) {
                    this._victoryCanvasGroup = this._winVictoty.GetComponent(UnityEngine.CanvasGroup);
                    if (UnityEngine.MonoBehaviour.op_Equality(this._victoryCanvasGroup, null)) {
                        this._victoryCanvasGroup = this._winVictoty.AddComponent(UnityEngine.CanvasGroup);
                    }
                    this._victoryCanvasGroup.alpha = 0.0;
                    this._winVictoty.SetActive(false);
                }
            },
            /*Episode3.Awake end.*/

            /*Episode3.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode3#OnEnable", this ); }

                this._particleButton.Play();
                this._button.SetActive(true);
            },
            /*Episode3.OnEnable end.*/

            /*Episode3.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode3#OnPointerClick", this ); }

                this.Battle();
                this._button.SetActive(false);
                this._particleButton.Stop();
                this._cardL.SetActive(false);
            },
            /*Episode3.OnPointerClick end.*/

            /*Episode3.Battle start.*/
            Battle: function () {
if ( TRACE ) { TRACE( "Episode3#Battle", this ); }

                this._cardDracone.transform.position = this._point.position.$clone();
                this.StartCoroutine$1(this.SlideBattleUI());
            },
            /*Episode3.Battle end.*/

            /*Episode3.DestroyingEnemies start.*/
            DestroyingEnemies: function () {
if ( TRACE ) { TRACE( "Episode3#DestroyingEnemies", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.7);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon1, this._cardEnemye1));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardEnemye1.SetActive(false);
                                        this._particleSystem1.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon2, this._cardEnemye2));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._cardEnemye2.SetActive(false);
                                        this._particleSystem2.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon3, this._cardEnemye3));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this._cardEnemye3.SetActive(false);
                                        this._particleSystem3.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._winVictoty.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());
                                        this._textCoins.text = "7";
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this._battle.SetActive(false);
                                        this._winInscription.SetActive(false);
                                        this._winInscription2.SetActive(false);
                                        this._winInscription3.SetActive(false);
                                        this._winVictoty.SetActive(false);
                                        !Bridge.staticEquals(this.End, null) ? this.End() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.DestroyingEnemies end.*/

            /*Episode3.FadeInVictory start.*/
            FadeInVictory: function () {
if ( TRACE ) { TRACE( "Episode3#FadeInVictory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    appearDuration,
                    scaleDuration,
                    smallScale,
                    overshootScale,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    appearDuration = 0.1;
                                        scaleDuration = 0.2;
                                        smallScale = 0.5;
                                        overshootScale = 1.2;
                                        this._winVictoty.SetActive(true);
                                        this._victoryCanvasGroup.alpha = 0.0;
                                        this._winVictoty.transform.localScale = new pc.Vec3( 1, 1, 1 );
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < appearDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, elapsed / appearDuration));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1.0;
                                        $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription, smallScale, overshootScale, scaleDuration));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription2, smallScale, overshootScale, scaleDuration, this._winInscription2.transform.localScale.$clone()));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription3, smallScale, overshootScale, scaleDuration, this._winInscription3.transform.localScale.$clone()));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.FadeInVictory end.*/

            /*Episode3.AnimatePopIn start.*/
            AnimatePopIn: function (target, startScale, overshootScale, duration, targetScale) {
if ( TRACE ) { TRACE( "Episode3#AnimatePopIn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rect,
                    normalScale,
                    $t,
                    elapsed2,
                    overshoot,
                    t,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (targetScale === void 0) { targetScale = null; }
                                        target.SetActive(true);
                                        rect = target.GetComponent(UnityEngine.RectTransform);
                                        rect.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( startScale );
                                        normalScale = ($t = targetScale, $t != null ? $t : new pc.Vec3( 1, 1, 1 ));
                                        elapsed2 = 0.0;
                                        overshoot = new pc.Vec3( 1, 1, 1 ).clone().scale( overshootScale );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed2 < duration / 2.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t = elapsed2 / (duration / 2.0);
                                        rect.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ).clone().scale( startScale ), overshoot, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rect.localScale = overshoot.$clone();
                                        elapsed2 = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed2 < duration / 2.0 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t2 = elapsed2 / (duration / 2.0);
                                        rect.localScale = new pc.Vec3().lerp( overshoot, normalScale, t2 );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    rect.localScale = normalScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.AnimatePopIn end.*/

            /*Episode3.SlideBattleUI start.*/
            SlideBattleUI: function () {
if ( TRACE ) { TRACE( "Episode3#SlideBattleUI", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rectTransform,
                    originalPosition,
                    startPosition,
                    $t,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rectTransform = this._battle.GetComponent(UnityEngine.RectTransform);
                                        originalPosition = rectTransform.anchoredPosition.$clone();
                                        startPosition = (($t = originalPosition.$clone().add( new pc.Vec2( 0.0, 1000.0 ) ), rectTransform.anchoredPosition = $t.$clone(), $t));
                                        this._battle.SetActive(true);
                                        duration = 0.1;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        rectTransform.anchoredPosition = new pc.Vec2().lerp( startPosition, originalPosition, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.anchoredPosition = originalPosition.$clone();
                                        this.StartCoroutine$1(this.DestroyingEnemies());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.SlideBattleUI end.*/

            /*Episode3.AnimateAttack start.*/
            AnimateAttack: function (dragon, enemy) {
if ( TRACE ) { TRACE( "Episode3#AnimateAttack", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    dragonRect,
                    enemyRect,
                    originalScale,
                    originalPosition,
                    enemyPosition,
                    scaleDuration,
                    moveDuration,
                    targetScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    dragonRect = dragon.GetComponent(UnityEngine.RectTransform);
                                        enemyRect = enemy.GetComponent(UnityEngine.RectTransform);
                                        originalScale = dragonRect.localScale.$clone();
                                        originalPosition = dragonRect.localPosition.$clone();
                                        enemyPosition = dragonRect.parent.InverseTransformPoint(enemyRect.position);
                                        scaleDuration = 0.1;
                                        moveDuration = 0.1;
                                        targetScale = new pc.Vec3( 1.2, 1.2, 1.0 );
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(dragonRect, targetScale.$clone(), scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(dragonRect, enemyPosition.$clone(), moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(dragonRect, originalScale.$clone(), scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(dragonRect, originalPosition.$clone(), moveDuration));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.AnimateAttack end.*/

            /*Episode3.ScaleTo start.*/
            ScaleTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode3#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.ScaleTo end.*/

            /*Episode3.MoveTo start.*/
            MoveTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode3#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode3.MoveTo end.*/


        }
    });
    /*Episode3 end.*/

    /*Episode4 start.*/
    Bridge.define("Episode4", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _cardDragcone1_1: null,
            _cardDragcone2_2: null,
            _cardDragcone: null,
            _arm3_3: null,
            _shopButton: null,
            _points: null,
            _textCoins: null,
            scaleDuration: 0,
            moveDuration: 0,
            targetScale: null,
            rectTransform: null,
            originalScale: null,
            originalLocalPosition: null
        },
        events: {
            End: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode4#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.originalScale = new UnityEngine.Vector3();
                this.originalLocalPosition = new UnityEngine.Vector3();
                this.scaleDuration = 0.2;
                this.moveDuration = 0.5;
                this.targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
            }
        },
        methods: {
            /*Episode4.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode4#OnEnable", this ); }

                this._shopButton.SetActive(true);
                this._cardDragcone1_1.SetActive(true);
                this._cardDragcone2_2.SetActive(true);
                this._cardDragcone.SetActive(false);
                this._arm3_3.SetActive(true);
                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this.originalScale = this.rectTransform.localScale.$clone();
                this.originalLocalPosition = this.rectTransform.localPosition.$clone();
            },
            /*Episode4.OnEnable end.*/

            /*Episode4.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode4#OnPointerClick", this ); }

                this._arm3_3.SetActive(false);
                this._textCoins.text = "4";
                this.StartCoroutine$1(this.AnimateCard());
            },
            /*Episode4.OnPointerClick end.*/

            /*Episode4.AnimateCard start.*/
            AnimateCard: function () {
if ( TRACE ) { TRACE( "Episode4#AnimateCard", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone(), this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale.$clone(), this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    !Bridge.staticEquals(this.End, null) ? this.End() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4.AnimateCard end.*/

            /*Episode4.ScaleTo start.*/
            ScaleTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode4#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4.ScaleTo end.*/

            /*Episode4.MoveTo start.*/
            MoveTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode4#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4.MoveTo end.*/


        }
    });
    /*Episode4 end.*/

    /*Episode4_1 start.*/
    Bridge.define("Episode4_1", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _cart1__2: null,
            _cart2__2: null,
            _cart3__2: null,
            _cart1_1: null,
            _cart2_1: null,
            _cart3_1: null,
            _arm: null,
            _coinText: null,
            _particleSystem: null,
            _particleDragon: null
        },
        events: {
            End2: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode4_1.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode4_1#OnEnable", this ); }

                this._particleDragon.Play();
                this._particleSystem.Play();
            },
            /*Episode4_1.OnEnable end.*/

            /*Episode4_1.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode4_1#OnPointerClick", this ); }

                this._particleSystem.Stop();
                this._coinText.text = "6";
                this.StartCoroutine$1(this.AnimateObjects());
            },
            /*Episode4_1.OnPointerClick end.*/

            /*Episode4_1.AnimateObjects start.*/
            AnimateObjects: function () {
if ( TRACE ) { TRACE( "Episode4_1#AnimateObjects", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.StartCoroutine$1(this.ScaleAndHide(this._cart1_1, 0.5));
                                        this.StartCoroutine$1(this.ScaleAndHide(this._cart2_1, 0.5));
                                        this.StartCoroutine$1(this.ScaleAndHide(this._cart3_1, 0.5));
                                        this._cart1__2.SetActive(true);
                                        this._cart2__2.SetActive(true);
                                        this._cart3__2.SetActive(true);
                                        this.StartCoroutine$1(this.ScaleUp(this._cart1__2));
                                        this.StartCoroutine$1(this.ScaleUp(this._cart2__2));
                                        this.StartCoroutine$1(this.ScaleUp(this._cart3__2));
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.7);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._arm.SetActive(false);
                                        !Bridge.staticEquals(this.End2, null) ? this.End2() : null;
                                        Bridge.ensureBaseProperty(this, "enabled").$UnityEngine$Component$enabled = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_1.AnimateObjects end.*/

            /*Episode4_1.ScaleAndHide start.*/
            ScaleAndHide: function (obj, targetScale) {
if ( TRACE ) { TRACE( "Episode4_1#ScaleAndHide", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rectTransform,
                    originalScale,
                    target,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rectTransform = obj.GetComponent(UnityEngine.RectTransform);
                                        originalScale = rectTransform.localScale.$clone();
                                        target = new pc.Vec3( 1, 1, 1 ).clone().scale( targetScale );
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        rectTransform.localScale = new pc.Vec3().lerp( originalScale, target, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = target.$clone();
                                        obj.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_1.ScaleAndHide end.*/

            /*Episode4_1.ScaleUp start.*/
            ScaleUp: function (obj) {
if ( TRACE ) { TRACE( "Episode4_1#ScaleUp", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rectTransform,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rectTransform = obj.GetComponent(UnityEngine.RectTransform);
                                        rectTransform.localScale = pc.Vec3.ZERO.clone();
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        rectTransform.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = new pc.Vec3( 1, 1, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_1.ScaleUp end.*/


        }
    });
    /*Episode4_1 end.*/

    /*Episode4_2 start.*/
    Bridge.define("Episode4_2", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
            _cardEnemye3: null,
            _cardDracone1: null,
            _cardDracone2: null,
            _cardDracone3: null,
            _winDefeat: null,
            _winFinal: null,
            _particleSystem1: null,
            _particleSystem2: null,
            _particleSystem3: null,
            _particleSystem4: null,
            _particleSystem5: null,
            _particleSystem6: null,
            _particleSystem7: null,
            _particleSystem8: null,
            _particleSystem9: null,
            _particleButtun: null,
            _particleDragon: null,
            _layer: null,
            _cardDracone4: null,
            _cardDracone5: null,
            _victoryCanvasGroup: null,
            _winInscription: null,
            _winInscription2: null,
            _winInscription3: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode4_2.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Episode4_2#Awake", this ); }

                if (UnityEngine.GameObject.op_Inequality(this._winDefeat, null)) {
                    this._victoryCanvasGroup = this._winDefeat.GetComponent(UnityEngine.CanvasGroup);
                    if (UnityEngine.MonoBehaviour.op_Equality(this._victoryCanvasGroup, null)) {
                        this._victoryCanvasGroup = this._winDefeat.AddComponent(UnityEngine.CanvasGroup);
                    }
                    this._victoryCanvasGroup.alpha = 0.0;
                    this._winDefeat.SetActive(false);
                }
            },
            /*Episode4_2.Awake end.*/

            /*Episode4_2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode4_2#OnEnable", this ); }

                this._particleButtun.Stop();
                this._button.SetActive(false);
                this._battle.gameObject.SetActive(true);
                this.StartCoroutine$1(this.BattleSequence());
                this._particleDragon.Stop();
            },
            /*Episode4_2.OnEnable end.*/

            /*Episode4_2.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode4_2#OnPointerClick", this ); }

                this._particleButtun.Stop();
                this._button.SetActive(false);
                this._battle.gameObject.SetActive(true);
                this.StartCoroutine$1(this.BattleSequence());
            },
            /*Episode4_2.OnPointerClick end.*/

            /*Episode4_2.InitialiseCards start.*/
            InitialiseCards: function (list1, list2) {
if ( TRACE ) { TRACE( "Episode4_2#InitialiseCards", this ); }

                var combinedCards = new (System.Collections.Generic.List$1(Card2V)).ctor();
                if (list1 != null) {
                    combinedCards.AddRange(list1);
                }
                if (list2 != null) {
                    combinedCards.AddRange(list2);
                }
                if (combinedCards.Count === 0) {
                    this._cardDracone4 = null;
                    this._cardDracone5 = null;
                } else if (combinedCards.Count === 1) {
                    this._cardDracone4 = combinedCards.getItem(0);
                    this._cardDracone5 = null;
                } else {
                    this._cardDracone4 = combinedCards.getItem(0);
                    this._cardDracone5 = combinedCards.getItem(1);
                }
            },
            /*Episode4_2.InitialiseCards end.*/

            /*Episode4_2.BattleSequence start.*/
            BattleSequence: function () {
if ( TRACE ) { TRACE( "Episode4_2#BattleSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    info1,
                    info2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye1, this._cardDracone1, this._particleSystem1, false));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._cardDracone1.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye1, this._cardDracone2, this._particleSystem2, false));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardDracone2.SetActive(false);
                                        info1 = this._cardEnemye1.GetComponent(Episode4_2.ReturnInfo);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(info1, null)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.ReturnToOriginalPosition(this._cardEnemye1.GetComponent(UnityEngine.RectTransform), info1.State));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    UnityEngine.Object.Destroy(info1);
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDracone3, this._cardEnemye1, this._particleSystem3));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this._cardEnemye1.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye2, this._cardDracone3, this._particleSystem4, false));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._cardDracone3.SetActive(false);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this._cardDracone4, null)) {
                                            $step = 8;
                                            continue;
                                        } else  {
                                            $step = 22;
                                            continue;
                                        }
                                }
                                case 8: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye2, this._cardDracone4.gameObject, this._particleSystem5, false));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    this._cardDracone4.gameObject.SetActive(false);
                                        info2 = this._cardEnemye2.GetComponent(Episode4_2.ReturnInfo);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(info2, null)) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    $enumerator.current = this.StartCoroutine$1(this.ReturnToOriginalPosition(this._cardEnemye2.GetComponent(UnityEngine.RectTransform), info2.State));
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    UnityEngine.Object.Destroy(info2);
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this._cardDracone5, null)) {
                                            $step = 13;
                                            continue;
                                        } else  {
                                            $step = 18;
                                            continue;
                                        }
                                }
                                case 13: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDracone5.gameObject, this._cardEnemye2, this._particleSystem8));
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    this._cardEnemye2.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye3, this._cardDracone5.gameObject, this._particleSystem9));
                                        $step = 15;
                                        return true;
                                }
                                case 15: {
                                    this._cardDracone5.gameObject.SetActive(false);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 16;
                                        return true;
                                }
                                case 16: {
                                    this._winDefeat.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 17;
                                        return true;
                                }
                                case 17: {
                                    this._winFinal.gameObject.SetActive(true);
                                    $step = 21;
                                    continue;
                                }
                                case 18: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 19;
                                        return true;
                                }
                                case 19: {
                                    this._winDefeat.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 20;
                                        return true;
                                }
                                case 20: {
                                    this._winFinal.gameObject.SetActive(true);
                                    $step = 21;
                                    continue;
                                }
                                case 21: {
                                    $step = 25;
                                    continue;
                                }
                                case 22: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 23;
                                        return true;
                                }
                                case 23: {
                                    this._winDefeat.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 24;
                                        return true;
                                }
                                case 24: {
                                    this._winFinal.gameObject.SetActive(true);
                                    $step = 25;
                                    continue;
                                }
                                case 25: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.BattleSequence end.*/

            /*Episode4_2.AnimateAttack start.*/
            AnimateAttack: function (attacker, target, effect, returnToOriginal) {
if ( TRACE ) { TRACE( "Episode4_2#AnimateAttack", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    attackerRect,
                    targetRect,
                    state,
                    $t,
                    targetPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (returnToOriginal === void 0) { returnToOriginal = true; }
                                        attackerRect = attacker.GetComponent(UnityEngine.RectTransform);
                                        targetRect = target.GetComponent(UnityEngine.RectTransform);
                                        state = ($t = new Episode4_2.AttackState(), $t.OriginalParent = attackerRect.parent, $t.OriginalLocalPos = attackerRect.localPosition.$clone(), $t);
                                        attackerRect.SetParent(this._layer.transform, true);
                                        targetPos = this._layer.transform.InverseTransformPoint(targetRect.position);
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(attackerRect, new pc.Vec3( 1.2, 1.2, 1.0 ), 0.1));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(attackerRect, targetPos.$clone(), 0.2));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (UnityEngine.Component.op_Inequality(effect, null)) {
                                            effect.Play();
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(attackerRect, new pc.Vec3( 1, 1, 1 ), 0.1));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    if (returnToOriginal) {
                                            $step = 5;
                                            continue;
                                        } else  {
                                            $step = 7;
                                            continue;
                                        }
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.ReturnToOriginalPosition(attackerRect, state));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $step = 8;
                                    continue;
                                }
                                case 7: {
                                    attackerRect.gameObject.AddComponent(Episode4_2.ReturnInfo).State = state;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.AnimateAttack end.*/

            /*Episode4_2.ReturnToOriginalPosition start.*/
            ReturnToOriginalPosition: function (attackerRect, state) {
if ( TRACE ) { TRACE( "Episode4_2#ReturnToOriginalPosition", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    attackerRect.SetParent(state.OriginalParent, true);
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(attackerRect, state.OriginalLocalPos.$clone(), 0.2));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.ReturnToOriginalPosition end.*/

            /*Episode4_2.ScaleTo start.*/
            ScaleTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode4_2#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.ScaleTo end.*/

            /*Episode4_2.MoveTo start.*/
            MoveTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode4_2#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.MoveTo end.*/

            /*Episode4_2.FadeInVictory start.*/
            FadeInVictory: function () {
if ( TRACE ) { TRACE( "Episode4_2#FadeInVictory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    appearDuration,
                    scaleDuration,
                    smallScale,
                    overshootScale,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    appearDuration = 0.1;
                                        scaleDuration = 0.2;
                                        smallScale = 0.5;
                                        overshootScale = 1.2;
                                        this._winDefeat.SetActive(true);
                                        this._victoryCanvasGroup.alpha = 0.0;
                                        this._winDefeat.transform.localScale = new pc.Vec3( 1, 1, 1 );
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < appearDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, elapsed / appearDuration));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1.0;
                                        $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription, smallScale, overshootScale, scaleDuration));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription2, smallScale, overshootScale, scaleDuration, this._winInscription2.transform.localScale.$clone()));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription3, smallScale, overshootScale, scaleDuration, this._winInscription3.transform.localScale.$clone()));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.FadeInVictory end.*/

            /*Episode4_2.AnimatePopIn start.*/
            AnimatePopIn: function (target, startScale, overshootScale, duration, targetScale) {
if ( TRACE ) { TRACE( "Episode4_2#AnimatePopIn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rect,
                    normalScale,
                    $t,
                    elapsed2,
                    overshoot,
                    t,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (targetScale === void 0) { targetScale = null; }
                                        target.SetActive(true);
                                        rect = target.GetComponent(UnityEngine.RectTransform);
                                        rect.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( startScale );
                                        normalScale = ($t = targetScale, $t != null ? $t : new pc.Vec3( 1, 1, 1 ));
                                        elapsed2 = 0.0;
                                        overshoot = new pc.Vec3( 1, 1, 1 ).clone().scale( overshootScale );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed2 < duration / 2.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t = elapsed2 / (duration / 2.0);
                                        rect.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ).clone().scale( startScale ), overshoot, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rect.localScale = overshoot.$clone();
                                        elapsed2 = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed2 < duration / 2.0 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t2 = elapsed2 / (duration / 2.0);
                                        rect.localScale = new pc.Vec3().lerp( overshoot, normalScale, t2 );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    rect.localScale = normalScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4_2.AnimatePopIn end.*/


        }
    });
    /*Episode4_2 end.*/

    /*Episode4_2+AttackState start.*/
    Bridge.define("Episode4_2.AttackState", {
        $kind: 1002,
        fields: {
            OriginalParent: null,
            OriginalLocalPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode4_2.AttackState#init", this ); }

                this.OriginalLocalPos = new UnityEngine.Vector3();
            }
        }
    });
    /*Episode4_2+AttackState end.*/

    /*Episode4_2+ReturnInfo start.*/
    Bridge.define("Episode4_2.ReturnInfo", {
        inherits: [UnityEngine.MonoBehaviour],
        $kind: 1002,
        fields: {
            State: null
        }
    });
    /*Episode4_2+ReturnInfo end.*/

    /*Episode4v2 start.*/
    Bridge.define("Episode4v2", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cards: null,
            _card: null,
            _updateButton: null,
            _TMony: null,
            _buttleButton: null,
            _pointS1: null,
            _pointS2: null,
            _pointS3: null,
            _point1: null,
            _point2: null,
            _point3: null,
            _point4: null,
            _point5: null,
            _point6: null,
            _arm: null,
            _arm2: null,
            _cardPointUpgrade: null,
            _textHealth3: null,
            _textDamage3: null,
            _layer: null,
            _particle: null,
            _particle2: null,
            _particleU: null,
            _buttle: null,
            _dragonCards: null,
            _nonDragonCards: null,
            _armO: null,
            _armU: null,
            _mony: 0,
            _cardsDragon: 0,
            _cardChosen: false,
            _cardUsed: false,
            _firstUpdateDone: false,
            _mainCardArmUsed: false,
            _isUpgrade: false,
            _isButtle: false,
            _isArm: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode4v2#init", this ); }

                this._cards = new (System.Collections.Generic.List$1(Card2V)).ctor();
                this._dragonCards = new (System.Collections.Generic.List$1(Card2V)).ctor();
                this._nonDragonCards = new (System.Collections.Generic.List$1(Card2V)).ctor();
                this._mony = 7;
                this._cardsDragon = 0;
                this._cardChosen = false;
                this._cardUsed = false;
                this._firstUpdateDone = false;
                this._mainCardArmUsed = false;
                this._isUpgrade = false;
                this._isButtle = false;
                this._isArm = false;
            }
        },
        methods: {
            /*Episode4v2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode4v2#OnEnable", this ); }

                this._isButtle = true;
                this._cardUsed = false;
                this._firstUpdateDone = false;
                this.SpawnCards();
                this._updateButton.SetActive(true);
                this.UpdateMoneyText();
                this._particle.Play();
                this._particle2.Play();
            },
            /*Episode4v2.OnEnable end.*/

            /*Episode4v2.CreateArmUp start.*/
            CreateArmUp: function () {
if ( TRACE ) { TRACE( "Episode4v2#CreateArmUp", this ); }

                if (!this._isArm) {
                    this._armU = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this._arm, this._updateButton.transform);
                    this._isArm = true;
                }
            },
            /*Episode4v2.CreateArmUp end.*/

            /*Episode4v2.UpdateMoneyText start.*/
            UpdateMoneyText: function () {
if ( TRACE ) { TRACE( "Episode4v2#UpdateMoneyText", this ); }

                this._TMony.text = Bridge.toString(this._mony);
                if (this._mony < 3) {
                    this._particle2.Stop();
                }
                if (this._mony <= 1) {
                    this._armU.gameObject.SetActive(false);
                    this._buttleButton.SetActive(true);
                    this._buttle.enabled = true;
                } else {
                    this._buttleButton.SetActive(false);
                }
                if (this._mony <= 0) {
                    this._particle.Stop();
                }
            },
            /*Episode4v2.UpdateMoneyText end.*/

            /*Episode4v2.IncrementDragonCard start.*/
            IncrementDragonCard: function (card) {
if ( TRACE ) { TRACE( "Episode4v2#IncrementDragonCard", this ); }

                if (card._dragon) {
                    this._cardsDragon = (this._cardsDragon + 1) | 0;
                    this._dragonCards.add(card);
                    if (this._dragonCards.Count === 2) {
                        this._isUpgrade = true;
                        this.StartCoroutine$1(this.UpgradeCardsAnimation());
                    }
                } else if (!this._nonDragonCards.contains(card)) {
                    this._nonDragonCards.add(card);
                }
            },
            /*Episode4v2.IncrementDragonCard end.*/

            /*Episode4v2.TrySpendForCard start.*/
            TrySpendForCard: function () {
if ( TRACE ) { TRACE( "Episode4v2#TrySpendForCard", this ); }

                if (this._mony >= 3) {
                    this._mony = (this._mony - 3) | 0;
                    this.UpdateMoneyText();
                    return true;
                }
                return false;
            },
            /*Episode4v2.TrySpendForCard end.*/

            /*Episode4v2.OnUpdateButtonClick start.*/
            OnUpdateButtonClick: function () {
if ( TRACE ) { TRACE( "Episode4v2#OnUpdateButtonClick", this ); }

                this._armU.gameObject.SetActive(false);
                if (this._mony >= 1) {
                    this._mony = (this._mony - 1) | 0;
                    this.UpdateMoneyText();
                    this._firstUpdateDone = true;
                    this.StartCoroutine$1(this.AnimateCardUpdate());
                }
            },
            /*Episode4v2.OnUpdateButtonClick end.*/

            /*Episode4v2.SpawnCards start.*/
            SpawnCards: function () {
if ( TRACE ) { TRACE( "Episode4v2#SpawnCards", this ); }

                var selectedCards = new (System.Collections.Generic.List$1(Card2V)).ctor();
                if (!this._firstUpdateDone) {
                    while (selectedCards.Count < 2) {
                        var rand3 = this._cards.getItem(UnityEngine.Random.Range(0, this._cards.Count));
                        if (!selectedCards.contains(rand3)) {
                            selectedCards.add(rand3);
                        }
                    }
                    selectedCards.add(this._card);
                } else if (this._cardChosen && !this._cardUsed) {
                    selectedCards.add(this._card);
                    selectedCards.add(this._card);
                    selectedCards.add(this._card);
                    this._cardUsed = true;
                } else {
                    while (selectedCards.Count < 3) {
                        var rand = this._cards.getItem(UnityEngine.Random.Range(0, this._cards.Count));
                        if (!selectedCards.contains(rand)) {
                            selectedCards.add(rand);
                        }
                    }
                }
                for (var j = 0; j < selectedCards.Count; j = (j + 1) | 0) {
                    var temp = selectedCards.getItem(j);
                    var rand2 = UnityEngine.Random.Range(j, selectedCards.Count);
                    selectedCards.setItem(j, selectedCards.getItem(rand2));
                    selectedCards.setItem(rand2, temp);
                }
                var spawnPoints = System.Array.init([this._pointS1, this._pointS2, this._pointS3], UnityEngine.RectTransform);
                for (var i = 0; i < spawnPoints.length; i = (i + 1) | 0) {
                    var cardInstance = UnityEngine.Object.Instantiate(Card2V, selectedCards.getItem(i), spawnPoints[i]);
                    cardInstance._episode = this;
                    cardInstance._isMainCard = Bridge.referenceEquals(selectedCards.getItem(i).name, this._card.name);
                    cardInstance.transform.localPosition = pc.Vec3.ZERO.clone();
                    cardInstance.transform.localScale = new pc.Vec3( 1, 1, 1 );
                    if (!this._mainCardArmUsed) {
                        if (UnityEngine.GameObject.op_Inequality(cardInstance._arm, null)) {
                            this._armO = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this._arm);
                            this._armO.transform.SetParent(cardInstance.transform, false);
                            this._mainCardArmUsed = true;
                        }
                    } else if (!(UnityEngine.GameObject.op_Inequality(cardInstance._arm, null))) {
                    }
                }
            },
            /*Episode4v2.SpawnCards end.*/

            /*Episode4v2.ClearOldCards start.*/
            ClearOldCards: function () {
if ( TRACE ) { TRACE( "Episode4v2#ClearOldCards", this ); }

                var $t, $t1;
                var array = System.Array.init([this._pointS1, this._pointS2, this._pointS3], UnityEngine.RectTransform);
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var point = $t.Current;
                        $t1 = Bridge.getEnumerator(point);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                UnityEngine.Object.Destroy(child.gameObject);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Episode4v2.ClearOldCards end.*/

            /*Episode4v2.NotifyCardChosen start.*/
            NotifyCardChosen: function () {
if ( TRACE ) { TRACE( "Episode4v2#NotifyCardChosen", this ); }

                this._cardChosen = true;
            },
            /*Episode4v2.NotifyCardChosen end.*/

            /*Episode4v2.AnimateCardUpdate start.*/
            AnimateCardUpdate: function () {
if ( TRACE ) { TRACE( "Episode4v2#AnimateCardUpdate", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    oldPoints,
                    oldCards,
                    $t,
                    point,
                    $t1,
                    child,
                    $t2,
                    card2,
                    $t3,
                    card,
                    selectedCards,
                    rand2,
                    rand,
                    spawnPoints,
                    newCard,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    oldPoints = Bridge.fn.bind(this, function (_o1) {
                                                _o1.add(this._pointS1);
                                                _o1.add(this._pointS2);
                                                _o1.add(this._pointS3);
                                                return _o1;
                                            })(new (System.Collections.Generic.List$1(UnityEngine.RectTransform)).ctor());
                                        oldCards = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                                        $t = Bridge.getEnumerator(oldPoints);
                                        try {
                                            while ($t.moveNext()) {
                                                point = $t.Current;
                                                $t1 = Bridge.getEnumerator(point);
                                                try {
                                                    while ($t1.moveNext()) {
                                                        child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                                        oldCards.add(child.gameObject);
                                                    }
                                                } finally {
                                                    if (Bridge.is($t1, System.IDisposable)) {
                                                        $t1.System$IDisposable$Dispose();
                                                    }
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        $t2 = Bridge.getEnumerator(oldCards);
                                        try {
                                            while ($t2.moveNext()) {
                                                card2 = $t2.Current;
                                                this.StartCoroutine$1(this.ScaleAndHide(card2, 0.2));
                                            }
                                        } finally {
                                            if (Bridge.is($t2, System.IDisposable)) {
                                                $t2.System$IDisposable$Dispose();
                                            }
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.25);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $t3 = Bridge.getEnumerator(oldCards);
                                        try {
                                            while ($t3.moveNext()) {
                                                card = $t3.Current;
                                                UnityEngine.Object.Destroy(card);
                                            }
                                        } finally {
                                            if (Bridge.is($t3, System.IDisposable)) {
                                                $t3.System$IDisposable$Dispose();
                                            }
                                        }
                                        selectedCards = new (System.Collections.Generic.List$1(Card2V)).ctor();
                                        if (!this._firstUpdateDone) {
                                            while (selectedCards.Count < 2) {
                                                rand2 = this._cards.getItem(UnityEngine.Random.Range(0, this._cards.Count));
                                                if (!selectedCards.contains(rand2)) {
                                                    selectedCards.add(rand2);
                                                }
                                            }
                                            selectedCards.add(this._card);
                                        } else if (this._cardChosen && !this._cardUsed) {
                                            selectedCards.add(this._card);
                                            selectedCards.add(this._card);
                                            selectedCards.add(this._card);
                                            this._cardUsed = true;
                                        } else {
                                            while (selectedCards.Count < 3) {
                                                rand = this._cards.getItem(UnityEngine.Random.Range(0, this._cards.Count));
                                                if (!selectedCards.contains(rand)) {
                                                    selectedCards.add(rand);
                                                }
                                            }
                                        }
                                        spawnPoints = System.Array.init([this._pointS1, this._pointS2, this._pointS3], UnityEngine.RectTransform);
                                        for (var i = 0; i < spawnPoints.length; i = (i + 1) | 0) {
                                            newCard = UnityEngine.Object.Instantiate(Card2V, selectedCards.getItem(i), spawnPoints[i]);
                                            newCard._episode = this;
                                            newCard._isMainCard = UnityEngine.MonoBehaviour.op_Equality(selectedCards.getItem(i), this._card);
                                            newCard.transform.localScale = pc.Vec3.ZERO.clone();
                                            newCard.transform.localPosition = pc.Vec3.ZERO.clone();
                                            if (!this._mainCardArmUsed && UnityEngine.GameObject.op_Inequality(newCard._arm, null)) {
                                                newCard._arm.SetActive(true);
                                                this._mainCardArmUsed = true;
                                            } else if (UnityEngine.GameObject.op_Inequality(newCard._arm, null)) {
                                                newCard._arm.SetActive(false);
                                            }
                                            this.StartCoroutine$1(this.ScaleUp(newCard.gameObject));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.AnimateCardUpdate end.*/

            /*Episode4v2.ScaleAndHide start.*/
            ScaleAndHide: function (card, targetScale) {
if ( TRACE ) { TRACE( "Episode4v2#ScaleAndHide", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rt,
                    original,
                    target,
                    duration,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rt = card.GetComponent(UnityEngine.RectTransform);
                                        original = rt.localScale.$clone();
                                        target = new pc.Vec3( 1, 1, 1 ).clone().scale( targetScale );
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        rt.localScale = new pc.Vec3().lerp( original, target, elapsed / duration );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rt.localScale = target.$clone();
                                        card.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.ScaleAndHide end.*/

            /*Episode4v2.ScaleUp start.*/
            ScaleUp: function (card) {
if ( TRACE ) { TRACE( "Episode4v2#ScaleUp", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rt,
                    duration,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rt = card.GetComponent(UnityEngine.RectTransform);
                                        rt.localScale = pc.Vec3.ZERO.clone();
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        rt.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), elapsed / duration );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rt.localScale = new pc.Vec3( 1, 1, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.ScaleUp end.*/

            /*Episode4v2.UpgradeCardsAnimation start.*/
            UpgradeCardsAnimation: function () {
if ( TRACE ) { TRACE( "Episode4v2#UpgradeCardsAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    card1,
                    card2,
                    rt1,
                    rt2,
                    originalScale1,
                    originalScale2,
                    targetScale,
                    scaleDuration,
                    moveDuration,
                    targetPosition,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._isUpgrade = true;
                                        card1 = this._dragonCards.getItem(0).gameObject;
                                        card2 = this._dragonCards.getItem(1).gameObject;
                                        rt1 = card1.GetComponent(UnityEngine.RectTransform);
                                        rt2 = card2.GetComponent(UnityEngine.RectTransform);
                                        originalScale1 = rt1.localScale.$clone();
                                        originalScale2 = rt2.localScale.$clone();
                                        targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
                                        scaleDuration = 0.2;
                                        moveDuration = 0.5;
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(rt1, targetScale.$clone(), scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(rt2, targetScale.$clone(), scaleDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    targetPosition = this._cardPointUpgrade.transform.position.$clone();
                                        card1.SetActive(true);
                                        card2.SetActive(true);
                                        this.StartCoroutine$1(this.MoveToWorldSpace(rt1, targetPosition.$clone(), moveDuration));
                                        this.StartCoroutine$1(this.MoveToWorldSpace(rt2, targetPosition.$clone(), moveDuration));
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._particleU.Play();
                                        card1.transform.SetParent(this._cardPointUpgrade.transform);
                                        card2.transform.SetParent(this._cardPointUpgrade.transform);
                                        rt1.localPosition = pc.Vec3.ZERO.clone();
                                        rt2.localPosition = pc.Vec3.ZERO.clone();
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(rt1, originalScale1.$clone(), scaleDuration));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(rt2, originalScale2.$clone(), scaleDuration));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    UnityEngine.Object.Destroy(card1);
                                        UnityEngine.Object.Destroy(card2);
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this._cardPointUpgrade.GetComponent(UnityEngine.RectTransform), targetScale.$clone().clone().scale( 2.0 ), scaleDuration));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShakeEffect(this._cardPointUpgrade.GetComponent(UnityEngine.RectTransform), 1.0));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._particleU.Stop();
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this._cardPointUpgrade.GetComponent(UnityEngine.RectTransform), new pc.Vec3( 1, 1, 1 ), scaleDuration));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this._textHealth3.SetActive(true);
                                        this._textDamage3.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.UpgradeCardsAnimation end.*/

            /*Episode4v2.MoveToWorldSpace start.*/
            MoveToWorldSpace: function (rt, target, duration) {
if ( TRACE ) { TRACE( "Episode4v2#MoveToWorldSpace", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    startPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        startPos = rt.position.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rt.position = new pc.Vec3().lerp( startPos, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rt.position = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.MoveToWorldSpace end.*/

            /*Episode4v2.ScaleTo start.*/
            ScaleTo: function (rt, targetScale, duration) {
if ( TRACE ) { TRACE( "Episode4v2#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    startScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        startScale = rt.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rt.localScale = new pc.Vec3().lerp( startScale, targetScale, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rt.localScale = targetScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.ScaleTo end.*/

            /*Episode4v2.ShakeEffect start.*/
            ShakeEffect: function (rt, duration) {
if ( TRACE ) { TRACE( "Episode4v2#ShakeEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    originalPosition,
                    shakeAmount,
                    xOffset,
                    yOffset,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsedTime = 0.0;
                                        originalPosition = rt.localPosition.$clone();
                                        shakeAmount = 10.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    xOffset = UnityEngine.Random.Range$1(0.0 - shakeAmount, shakeAmount);
                                        yOffset = UnityEngine.Random.Range$1(0.0 - shakeAmount, shakeAmount);
                                        rt.localPosition = new pc.Vec3( originalPosition.x + xOffset, originalPosition.y + yOffset, originalPosition.z );
                                        elapsedTime += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rt.localPosition = originalPosition.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode4v2.ShakeEffect end.*/


        }
    });
    /*Episode4v2 end.*/

    /*Episode5 start.*/
    Bridge.define("Episode5", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _card1_1_2: null,
            _card1_2_2: null,
            _card1_3_2: null,
            _card1_1: null,
            _card2_1: null,
            _coinsText: null,
            _particleSystem: null
        },
        events: {
            End: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode5.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode5#OnEnable", this ); }
 },
            /*Episode5.OnEnable end.*/

            /*Episode5.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode5#OnPointerClick", this ); }

                this._particleSystem.Stop();
                this._coinsText.text = "3";
                this.StartCoroutine$1(this.AnimateCards());
            },
            /*Episode5.OnPointerClick end.*/

            /*Episode5.AnimateCards start.*/
            AnimateCards: function () {
if ( TRACE ) { TRACE( "Episode5#AnimateCards", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.StartCoroutine$1(this.ScaleAndHide(this._card1_1, 0.5));
                                        this.StartCoroutine$1(this.ScaleAndHide(this._card2_1, 0.5));
                                        this._card1_1_2.SetActive(true);
                                        this._card1_2_2.SetActive(true);
                                        this._card1_3_2.SetActive(true);
                                        this.StartCoroutine$1(this.ScaleUp(this._card1_1_2));
                                        this.StartCoroutine$1(this.ScaleUp(this._card1_2_2));
                                        this.StartCoroutine$1(this.ScaleUp(this._card1_3_2));
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.7);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    !Bridge.staticEquals(this.End, null) ? this.End() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5.AnimateCards end.*/

            /*Episode5.ScaleAndHide start.*/
            ScaleAndHide: function (card, targetScale) {
if ( TRACE ) { TRACE( "Episode5#ScaleAndHide", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rectTransform,
                    originalScale,
                    target,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rectTransform = card.GetComponent(UnityEngine.RectTransform);
                                        originalScale = rectTransform.localScale.$clone();
                                        target = new pc.Vec3( 1, 1, 1 ).clone().scale( targetScale );
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        rectTransform.localScale = new pc.Vec3().lerp( originalScale, target, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = target.$clone();
                                        card.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5.ScaleAndHide end.*/

            /*Episode5.ScaleUp start.*/
            ScaleUp: function (card) {
if ( TRACE ) { TRACE( "Episode5#ScaleUp", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rectTransform,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    rectTransform = card.GetComponent(UnityEngine.RectTransform);
                                        rectTransform.localScale = pc.Vec3.ZERO.clone();
                                        duration = 0.2;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        rectTransform.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = new pc.Vec3( 1, 1, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5.ScaleUp end.*/


        }
    });
    /*Episode5 end.*/

    /*Episode5_1 start.*/
    Bridge.define("Episode5_1", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _card1: null,
            _card2: null,
            _episode5: null,
            episode4_1: null,
            episode5_2: null,
            _texCoins: null,
            _particleSystem: null,
            _tCard: null,
            _isPlayed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode5_1#init", this ); }

                this._isPlayed = false;
            }
        },
        methods: {
            /*Episode5_1.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode5_1#OnEnable", this ); }

                this._card1.enabled = true;
                this._card2.enabled = true;
                this._card1.addThey(Bridge.fn.cacheBind(this, this.CheckCardSufficiency));
                this._card2.addThey(Bridge.fn.cacheBind(this, this.CheckCardSufficiency));
            },
            /*Episode5_1.OnEnable end.*/

            /*Episode5_1.CheckCardSufficiency start.*/
            CheckCardSufficiency: function (card) {
if ( TRACE ) { TRACE( "Episode5_1#CheckCardSufficiency", this ); }

                this._particleSystem.Stop();
                this._tCard = card;
                this._isPlayed = true;
                this._texCoins.text = "0";
                if (this._isPlayed) {
                    this._episode5.enabled = false;
                    this.episode4_1.enabled = false;
                    this._card1.enabled = false;
                    this._card2.enabled = false;
                    this.episode5_2.enabled = true;
                    this.episode5_2.InitialiseCards(this._tCard);
                    UnityEngine.Debug.Log$1("\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u044e 3 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439");
                }
            },
            /*Episode5_1.CheckCardSufficiency end.*/


        }
    });
    /*Episode5_1 end.*/

    /*Episode5_2 start.*/
    Bridge.define("Episode5_2", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
            _cardEnemye3: null,
            _cardDracone1: null,
            _cardDracone2: null,
            _cardDracone3: null,
            _cardDracone4: null,
            _winDefeat: null,
            _winFinal: null,
            _particleSystem1: null,
            _particleSystem2: null,
            _particleSystem3: null,
            _particleSystem4: null,
            _particleSystem5: null,
            _particleSystem6: null,
            _particleSystem7: null,
            _particleSystem: null,
            _layer: null,
            _winInscription: null,
            _winInscription2: null,
            _winInscription3: null,
            _cardDracone5: null,
            _victoryCanvasGroup: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode5_2.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Episode5_2#Awake", this ); }

                if (UnityEngine.GameObject.op_Inequality(this._winDefeat, null)) {
                    this._victoryCanvasGroup = this._winDefeat.GetComponent(UnityEngine.CanvasGroup);
                    if (UnityEngine.MonoBehaviour.op_Equality(this._victoryCanvasGroup, null)) {
                        this._victoryCanvasGroup = this._winDefeat.AddComponent(UnityEngine.CanvasGroup);
                    }
                    this._victoryCanvasGroup.alpha = 0.0;
                    this._winDefeat.SetActive(false);
                }
            },
            /*Episode5_2.Awake end.*/

            /*Episode5_2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode5_2#OnEnable", this ); }

                this._button.SetActive(true);
            },
            /*Episode5_2.OnEnable end.*/

            /*Episode5_2.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode5_2#OnPointerClick", this ); }

                this._button.SetActive(false);
                this._battle.gameObject.SetActive(true);
                this.StartCoroutine$1(this.BattleSequence());
            },
            /*Episode5_2.OnPointerClick end.*/

            /*Episode5_2.InitialiseCards start.*/
            InitialiseCards: function (card2) {
if ( TRACE ) { TRACE( "Episode5_2#InitialiseCards", this ); }

                this._cardDracone5 = card2;
            },
            /*Episode5_2.InitialiseCards end.*/

            /*Episode5_2.BattleSequence start.*/
            BattleSequence: function () {
if ( TRACE ) { TRACE( "Episode5_2#BattleSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    info1,
                    info2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye1, this._cardDracone1, this._particleSystem1, false));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._cardDracone1.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye1, this._cardDracone2, this._particleSystem2, false));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardDracone2.SetActive(false);
                                        info1 = this._cardEnemye1.GetComponent(Episode5_2.ReturnInfo);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(info1, null)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.ReturnToOriginalPosition(this._cardEnemye1.GetComponent(UnityEngine.RectTransform), info1.State));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    UnityEngine.Object.Destroy(info1);
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDracone3, this._cardEnemye1, this._particleSystem3));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this._cardEnemye1.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye2, this._cardDracone3, this._particleSystem4, false));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._cardDracone3.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye2, this._cardDracone4.gameObject, this._particleSystem5, false));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this._cardDracone4.gameObject.SetActive(false);
                                        info2 = this._cardEnemye2.GetComponent(Episode5_2.ReturnInfo);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(info2, null)) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 9: {
                                    $enumerator.current = this.StartCoroutine$1(this.ReturnToOriginalPosition(this._cardEnemye2.GetComponent(UnityEngine.RectTransform), info2.State));
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    UnityEngine.Object.Destroy(info2);
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDracone5.gameObject, this._cardEnemye2, this._particleSystem6));
                                        $step = 12;
                                        return true;
                                }
                                case 12: {
                                    this._cardEnemye2.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardEnemye3, this._cardDracone5.gameObject, this._particleSystem7));
                                        $step = 13;
                                        return true;
                                }
                                case 13: {
                                    this._cardDracone5.gameObject.SetActive(false);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    this._winDefeat.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 15;
                                        return true;
                                }
                                case 15: {
                                    this._winFinal.gameObject.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.BattleSequence end.*/

            /*Episode5_2.AnimateAttack start.*/
            AnimateAttack: function (attacker, target, effect, returnToOriginal) {
if ( TRACE ) { TRACE( "Episode5_2#AnimateAttack", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    attackerRect,
                    targetRect,
                    state,
                    $t,
                    targetPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (returnToOriginal === void 0) { returnToOriginal = true; }
                                        attackerRect = attacker.GetComponent(UnityEngine.RectTransform);
                                        targetRect = target.GetComponent(UnityEngine.RectTransform);
                                        state = ($t = new Episode5_2.AttackState(), $t.OriginalParent = attackerRect.parent, $t.OriginalLocalPos = attackerRect.localPosition.$clone(), $t);
                                        attackerRect.SetParent(this._layer.transform, true);
                                        targetPos = this._layer.transform.InverseTransformPoint(targetRect.position);
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(attackerRect, new pc.Vec3( 1.2, 1.2, 1.0 ), 0.1));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(attackerRect, targetPos.$clone(), 0.2));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    effect.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(attackerRect, new pc.Vec3( 1, 1, 1 ), 0.1));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    if (returnToOriginal) {
                                            $step = 5;
                                            continue;
                                        } else  {
                                            $step = 7;
                                            continue;
                                        }
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.ReturnToOriginalPosition(attackerRect, state));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $step = 8;
                                    continue;
                                }
                                case 7: {
                                    attackerRect.gameObject.AddComponent(Episode5_2.ReturnInfo).State = state;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.AnimateAttack end.*/

            /*Episode5_2.ReturnToOriginalPosition start.*/
            ReturnToOriginalPosition: function (attackerRect, state) {
if ( TRACE ) { TRACE( "Episode5_2#ReturnToOriginalPosition", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    attackerRect.SetParent(state.OriginalParent, true);
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(attackerRect, state.OriginalLocalPos.$clone(), 0.2));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.ReturnToOriginalPosition end.*/

            /*Episode5_2.ScaleTo start.*/
            ScaleTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode5_2#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.ScaleTo end.*/

            /*Episode5_2.MoveTo start.*/
            MoveTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode5_2#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.MoveTo end.*/

            /*Episode5_2.FadeInVictory start.*/
            FadeInVictory: function () {
if ( TRACE ) { TRACE( "Episode5_2#FadeInVictory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    appearDuration,
                    scaleDuration,
                    smallScale,
                    overshootScale,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    appearDuration = 0.1;
                                        scaleDuration = 0.2;
                                        smallScale = 0.5;
                                        overshootScale = 1.2;
                                        this._winDefeat.SetActive(true);
                                        this._victoryCanvasGroup.alpha = 0.0;
                                        this._winDefeat.transform.localScale = new pc.Vec3( 1, 1, 1 );
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < appearDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, elapsed / appearDuration));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1.0;
                                        $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription, smallScale, overshootScale, scaleDuration));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription2, smallScale, overshootScale, scaleDuration, this._winInscription2.transform.localScale.$clone()));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    $enumerator.current = this.StartCoroutine$1(this.AnimatePopIn(this._winInscription3, smallScale, overshootScale, scaleDuration, this._winInscription3.transform.localScale.$clone()));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.FadeInVictory end.*/

            /*Episode5_2.AnimatePopIn start.*/
            AnimatePopIn: function (target, startScale, overshootScale, duration, targetScale) {
if ( TRACE ) { TRACE( "Episode5_2#AnimatePopIn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rect,
                    normalScale,
                    $t,
                    elapsed2,
                    overshoot,
                    t,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (targetScale === void 0) { targetScale = null; }
                                        target.SetActive(true);
                                        rect = target.GetComponent(UnityEngine.RectTransform);
                                        rect.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( startScale );
                                        normalScale = ($t = targetScale, $t != null ? $t : new pc.Vec3( 1, 1, 1 ));
                                        elapsed2 = 0.0;
                                        overshoot = new pc.Vec3( 1, 1, 1 ).clone().scale( overshootScale );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed2 < duration / 2.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t = elapsed2 / (duration / 2.0);
                                        rect.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ).clone().scale( startScale ), overshoot, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rect.localScale = overshoot.$clone();
                                        elapsed2 = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed2 < duration / 2.0 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t2 = elapsed2 / (duration / 2.0);
                                        rect.localScale = new pc.Vec3().lerp( overshoot, normalScale, t2 );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    rect.localScale = normalScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode5_2.AnimatePopIn end.*/


        }
    });
    /*Episode5_2 end.*/

    /*Episode5_2+AttackState start.*/
    Bridge.define("Episode5_2.AttackState", {
        $kind: 1002,
        fields: {
            OriginalParent: null,
            OriginalLocalPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode5_2.AttackState#init", this ); }

                this.OriginalLocalPos = new UnityEngine.Vector3();
            }
        }
    });
    /*Episode5_2+AttackState end.*/

    /*Episode5_2+ReturnInfo start.*/
    Bridge.define("Episode5_2.ReturnInfo", {
        inherits: [UnityEngine.MonoBehaviour],
        $kind: 1002,
        fields: {
            State: null
        }
    });
    /*Episode5_2+ReturnInfo end.*/

    /*Episode6 start.*/
    Bridge.define("Episode6", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _arm: null,
            _points: null,
            _cart: null,
            _cartPoint: null,
            _coinsText: null,
            _textDamage: null,
            _textHealth: null,
            _textHealth2: null,
            _textDamage2: null,
            scaleDuration: 0,
            moveDuration: 0,
            targetScale: null,
            _particleDragon: null,
            _particleCards: null,
            rectTransform: null,
            originalScale: null,
            originalLocalPosition: null
        },
        events: {
            End: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Episode6#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.originalScale = new UnityEngine.Vector3();
                this.originalLocalPosition = new UnityEngine.Vector3();
                this.scaleDuration = 0.2;
                this.moveDuration = 0.5;
                this.targetScale = new pc.Vec3( 0.8, 0.8, 1.0 );
            }
        },
        methods: {
            /*Episode6.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode6#OnEnable", this ); }

                this._arm.SetActive(true);
                this.rectTransform = this.GetComponent(UnityEngine.RectTransform);
                this.originalScale = this.rectTransform.localScale.$clone();
                this.originalLocalPosition = this.rectTransform.localPosition.$clone();
            },
            /*Episode6.OnEnable end.*/

            /*Episode6.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode6#OnPointerClick", this ); }

                this._particleDragon.Stop();
                this._arm.SetActive(false);
                this._coinsText.text = "0";
                this.StartCoroutine$1(this.AnimateCard());
            },
            /*Episode6.OnPointerClick end.*/

            /*Episode6.AnimateCard start.*/
            AnimateCard: function () {
if ( TRACE ) { TRACE( "Episode6#AnimateCard", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    cartPointPosition,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone(), this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition.$clone(), this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale.$clone(), this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.5);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    cartPointPosition = this._cartPoint.transform.localPosition.$clone();
                                        this.StartCoroutine$1(this.MoveTo(cartPointPosition.$clone(), 0.3));
                                        this.StartCoroutine$1(this.MoveObjectTo(this._cart, cartPointPosition.$clone(), 0.3));
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.7);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this._particleCards.Play();
                                        this._cart.SetActive(false);
                                        this._cartPoint.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone().clone().scale( 2.0 ), this.scaleDuration));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShakeEffect(1.0));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this._particleCards.Stop();
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale.$clone(), this.scaleDuration));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    this._textDamage.gameObject.SetActive(false);
                                        this._textHealth.gameObject.SetActive(false);
                                        this._textHealth2.gameObject.SetActive(true);
                                        this._textDamage2.gameObject.SetActive(true);
                                        !Bridge.staticEquals(this.End, null) ? this.End() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode6.AnimateCard end.*/

            /*Episode6.ShakeEffect start.*/
            ShakeEffect: function (duration) {
if ( TRACE ) { TRACE( "Episode6#ShakeEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    originalPosition,
                    shakeAmount,
                    xOffset,
                    yOffset,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsedTime = 0.0;
                                        originalPosition = this.rectTransform.localPosition.$clone();
                                        shakeAmount = 10.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    xOffset = UnityEngine.Random.Range$1(0.0 - shakeAmount, shakeAmount);
                                        yOffset = UnityEngine.Random.Range$1(0.0 - shakeAmount, shakeAmount);
                                        this.rectTransform.localPosition = new pc.Vec3( originalPosition.x + xOffset, originalPosition.y + yOffset, originalPosition.z );
                                        elapsedTime += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localPosition = originalPosition.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode6.ShakeEffect end.*/

            /*Episode6.MoveObjectTo start.*/
            MoveObjectTo: function (obj, target, duration) {
if ( TRACE ) { TRACE( "Episode6#MoveObjectTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    objRect,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        objRect = obj.GetComponent(UnityEngine.RectTransform);
                                        start = objRect.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    objRect.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    objRect.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode6.MoveObjectTo end.*/

            /*Episode6.ScaleTo start.*/
            ScaleTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode6#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode6.ScaleTo end.*/

            /*Episode6.MoveTo start.*/
            MoveTo: function (target, duration) {
if ( TRACE ) { TRACE( "Episode6#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = this.rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode6.MoveTo end.*/


        }
    });
    /*Episode6 end.*/

    /*Episode7 start.*/
    Bridge.define("Episode7", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
            _cardEnemye3: null,
            _cardEnemye4: null,
            _cardEnemye5: null,
            _cardEnemye6: null,
            _cardDragon1: null,
            _cardDragon2: null,
            _cardDragon3: null,
            _particleSystem1: null,
            _particleSystem2: null,
            _particleSystem3: null,
            _particleSystem4: null,
            _particleSystem5: null,
            _particleSystem6: null,
            _winVictoty: null,
            _winFinal: null,
            _particleSystem: null,
            _particleDragon: null,
            _episode3: null,
            _victoryCanvasGroup: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode7.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Episode7#Awake", this ); }

                if (UnityEngine.GameObject.op_Inequality(this._winVictoty, null)) {
                    this._victoryCanvasGroup = this._winVictoty.GetComponent(UnityEngine.CanvasGroup);
                    if (UnityEngine.MonoBehaviour.op_Equality(this._victoryCanvasGroup, null)) {
                        this._victoryCanvasGroup = this._winVictoty.AddComponent(UnityEngine.CanvasGroup);
                    }
                    this._victoryCanvasGroup.alpha = 0.0;
                    this._winVictoty.SetActive(false);
                }
            },
            /*Episode7.Awake end.*/

            /*Episode7.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode7#OnEnable", this ); }

                this.Battle();
                this._button.SetActive(false);
                this._particleSystem.Stop();
                this._particleDragon.Stop();
            },
            /*Episode7.OnEnable end.*/

            /*Episode7.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode7#OnPointerClick", this ); }

                this.Battle();
                this._button.SetActive(false);
                this._particleSystem.Stop();
                this._particleDragon.Stop();
            },
            /*Episode7.OnPointerClick end.*/

            /*Episode7.Battle start.*/
            Battle: function () {
if ( TRACE ) { TRACE( "Episode7#Battle", this ); }

                this._battle.gameObject.SetActive(true);
                this.StartCoroutine$1(this.AnimateDragons());
            },
            /*Episode7.Battle end.*/

            /*Episode7.AnimateDragons start.*/
            AnimateDragons: function () {
if ( TRACE ) { TRACE( "Episode7#AnimateDragons", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    originalDragon1Pos,
                    originalDragon2Pos,
                    originalDragon3Pos,
                    enemy1Pos,
                    enemy2Pos,
                    enemy3Pos,
                    enemy4Pos,
                    enemy5Pos,
                    enemy6Pos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    originalDragon1Pos = this._cardDragon1.GetComponent(UnityEngine.RectTransform).localPosition.$clone();
                                        originalDragon2Pos = this._cardDragon2.GetComponent(UnityEngine.RectTransform).localPosition.$clone();
                                        originalDragon3Pos = this._cardDragon3.GetComponent(UnityEngine.RectTransform).localPosition.$clone();
                                        enemy1Pos = this._cardEnemye1.GetComponent(UnityEngine.RectTransform).position.$clone();
                                        enemy2Pos = this._cardEnemye2.GetComponent(UnityEngine.RectTransform).position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon1, this._cardEnemye1, enemy1Pos.$clone(), this._particleSystem1));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._cardEnemye1.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon1, this._cardEnemye2, enemy2Pos.$clone(), this._particleSystem2));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardEnemye2.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._cardDragon1.GetComponent(UnityEngine.RectTransform), originalDragon1Pos.$clone(), 0.1));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    enemy3Pos = this._cardEnemye3.GetComponent(UnityEngine.RectTransform).position.$clone();
                                        enemy4Pos = this._cardEnemye4.GetComponent(UnityEngine.RectTransform).position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon2, this._cardEnemye3, enemy3Pos.$clone(), this._particleSystem3));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._cardEnemye3.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon2, this._cardEnemye4, enemy4Pos.$clone(), this._particleSystem4));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this._cardEnemye4.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._cardDragon2.GetComponent(UnityEngine.RectTransform), originalDragon2Pos.$clone(), 0.1));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    enemy5Pos = this._cardEnemye5.GetComponent(UnityEngine.RectTransform).position.$clone();
                                        enemy6Pos = this._cardEnemye6.GetComponent(UnityEngine.RectTransform).position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon3, this._cardEnemye5, enemy5Pos.$clone(), this._particleSystem6));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this._cardEnemye5.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.AnimateAttack(this._cardDragon3, this._cardEnemye6, enemy6Pos.$clone(), this._particleSystem5));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    this._cardEnemye6.SetActive(false);
                                        $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._cardDragon3.GetComponent(UnityEngine.RectTransform), originalDragon3Pos.$clone(), 0.1));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    this._winVictoty.SetActive(true);
                                        this.StartCoroutine$1(this._episode3.FadeInVictory());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    this._winFinal.gameObject.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode7.AnimateDragons end.*/

            /*Episode7.AnimateAttack start.*/
            AnimateAttack: function (dragon, enemy, enemyPosition, particle) {
if ( TRACE ) { TRACE( "Episode7#AnimateAttack", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    dragonRect,
                    originalPosition,
                    originalScale,
                    localEnemyPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    dragonRect = dragon.GetComponent(UnityEngine.RectTransform);
                                        originalPosition = dragonRect.localPosition.$clone();
                                        originalScale = dragonRect.localScale.$clone();
                                        localEnemyPos = dragonRect.parent.InverseTransformPoint(enemyPosition);
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(dragonRect, new pc.Vec3( 1.2, 1.2, 1.0 ), 0.1));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(dragonRect, localEnemyPos.$clone(), 0.1));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    particle.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(dragonRect, originalScale.$clone(), 0.1));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(dragonRect, originalPosition.$clone(), 0.1));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode7.AnimateAttack end.*/

            /*Episode7.ScaleTo start.*/
            ScaleTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode7#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localScale.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localScale = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localScale = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode7.ScaleTo end.*/

            /*Episode7.MoveTo start.*/
            MoveTo: function (rectTransform, target, duration) {
if ( TRACE ) { TRACE( "Episode7#MoveTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    start,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0.0;
                                        start = rectTransform.localPosition.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    rectTransform.localPosition = new pc.Vec3().lerp( start, target, time / duration );
                                        time += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    rectTransform.localPosition = target.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Episode7.MoveTo end.*/


        }
    });
    /*Episode7 end.*/

    /*ParticleFollowUI start.*/
    Bridge.define("ParticleFollowUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _buttonButtle: null,
            _buttonShop: null,
            uiCamera: null,
            _particleEffectButton: null,
            _particleEffectButtonShop: null,
            zOffset: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ParticleFollowUI#init", this ); }

                this.zOffset = 1.0;
            }
        },
        methods: {
            /*ParticleFollowUI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ParticleFollowUI#Update", this ); }

                if (!(UnityEngine.Component.op_Equality(this.uiCamera, null))) {
                    if (UnityEngine.Component.op_Inequality(this._buttonButtle, null) && UnityEngine.Component.op_Inequality(this._particleEffectButton, null)) {
                        var screenPosButtle = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.uiCamera, this._buttonButtle.position);
                        var worldPosButtle = this.uiCamera.ScreenToWorldPoint(new pc.Vec3( screenPosButtle.x, screenPosButtle.y, this.zOffset ));
                        this._particleEffectButton.transform.position = worldPosButtle.$clone();
                    }
                    if (UnityEngine.Component.op_Inequality(this._buttonShop, null) && UnityEngine.Component.op_Inequality(this._particleEffectButtonShop, null)) {
                        var screenPosShop = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.uiCamera, this._buttonShop.position);
                        var worldPosShop = this.uiCamera.ScreenToWorldPoint(new pc.Vec3( screenPosShop.x, screenPosShop.y, this.zOffset ));
                        this._particleEffectButtonShop.transform.position = worldPosShop.$clone();
                    }
                }
            },
            /*ParticleFollowUI.Update end.*/


        }
    });
    /*ParticleFollowUI end.*/

    /*Point start.*/
    Bridge.define("Point", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _occupied: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Point#init", this ); }

                this._occupied = false;
            }
        }
    });
    /*Point end.*/

    /*Scenario start.*/
    Bridge.define("Scenario", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _episode1: null,
            _episode2: null,
            _episode3: null,
            _episode4v2: null,
            _takencard1: null,
            _takencard2: null,
            _taken: false,
            _cardsTaken: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Scenario#init", this ); }

                this._taken = false;
                this._cardsTaken = 0;
            }
        },
        methods: {
            /*Scenario.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Scenario#OnEnable", this ); }

                this._episode1.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
                this._episode3.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode4));
            },
            /*Scenario.OnEnable end.*/

            /*Scenario.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Scenario#OnDisable", this ); }

                this._episode1.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
                this._episode3.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode4));
            },
            /*Scenario.OnDisable end.*/

            /*Scenario.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Scenario#Start", this ); }

                this._episode2.enabled = false;
                this._episode1.enabled = true;
            },
            /*Scenario.Start end.*/

            /*Scenario.TurnEpisode2 start.*/
            TurnEpisode2: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode2", this ); }

                this._episode1.enabled = false;
                this._episode2.enabled = true;
            },
            /*Scenario.TurnEpisode2 end.*/

            /*Scenario.TurnEpisode3 start.*/
            TurnEpisode3: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode3", this ); }

                this._episode2.enabled = false;
                this._episode3.enabled = true;
            },
            /*Scenario.TurnEpisode3 end.*/

            /*Scenario.TurnEpisode4 start.*/
            TurnEpisode4: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode4", this ); }

                this._episode3.enabled = false;
                this._episode4v2.enabled = true;
            },
            /*Scenario.TurnEpisode4 end.*/


        }
    });
    /*Scenario end.*/

    /*UpdateButton start.*/
    Bridge.define("UpdateButton", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler,UnityEngine.EventSystems.IEventSystemHandler],
        fields: {
            _episode: null,
            _arm: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*UpdateButton.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "UpdateButton#OnPointerClick", this ); }

                this._episode.OnUpdateButtonClick();
            },
            /*UpdateButton.OnPointerClick end.*/


        }
    });
    /*UpdateButton end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System.Collections","System","UnityEngine","UnityEngine.UI","UnityEngine.EventSystems","System.Collections.Generic"];

    /*ArmAnimation start.*/
    $m("ArmAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateArm","t":8,"sn":"AnimateArm","rt":$n[0].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"_armRect","t":4,"rt":$n[2].RectTransform,"sn":"_armRect"},{"a":1,"n":"_originalScaleArm","t":4,"rt":$n[2].Vector3,"sn":"_originalScaleArm"},{"a":1,"n":"_originalScaleButton","t":4,"rt":$n[2].Vector3,"sn":"_originalScaleButton"},{"a":1,"n":"_startPos","t":4,"rt":$n[2].Vector3,"sn":"_startPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_targetButton","t":4,"rt":$n[3].Image,"sn":"_targetButton"},{"a":1,"n":"_targetPos","t":4,"rt":$n[2].Vector3,"sn":"_targetPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flyDuration","t":4,"rt":$n[1].Single,"sn":"flyDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"restoreDuration","t":4,"rt":$n[1].Single,"sn":"restoreDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shrinkDuration","t":4,"rt":$n[1].Single,"sn":"shrinkDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ArmAnimation end.*/

    /*Buttle start.*/
    $m("Buttle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ButtleLoss","t":8,"sn":"ButtleLoss","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"StartButtle","t":8,"sn":"StartButtle","rt":$n[1].Void},{"a":2,"n":"_buttonButtle","t":4,"rt":$n[2].GameObject,"sn":"_buttonButtle"},{"a":2,"n":"_buttonShop","t":4,"rt":$n[2].GameObject,"sn":"_buttonShop"},{"a":2,"n":"_episode","t":4,"rt":Episode4v2,"sn":"_episode"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode4_2","t":4,"rt":Episode4_2,"sn":"_episode4_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode7","t":4,"rt":Episode7,"sn":"_episode7"}]}; }, $n);
    /*Buttle end.*/

    /*Card start.*/
    $m("Card", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"PlayParticle","t":8,"sn":"PlayParticle","rt":$n[1].Void},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[2].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[2].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"},{"a":2,"n":"They","t":2,"ad":{"a":2,"n":"add_They","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addThey","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_They","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeThey","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Card end.*/

    /*Card2V start.*/
    $m("Card2V", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCardMoveAndScale","t":8,"pi":[{"n":"targetPoint","pt":Point,"ps":0}],"sn":"AnimateCardMoveAndScale","rt":$n[0].IEnumerator,"p":[Point]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":2,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"a":2,"n":"_dragon","t":4,"rt":$n[1].Boolean,"sn":"_dragon","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_episode","t":4,"rt":Episode4v2,"sn":"_episode"},{"a":2,"n":"_isMainCard","t":4,"rt":$n[1].Boolean,"sn":"_isMainCard","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_us","t":4,"rt":$n[1].Boolean,"sn":"_us","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"}]}; }, $n);
    /*Card2V end.*/

    /*ClickCta start.*/
    $m("ClickCta", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Click","t":8,"sn":"Click","rt":$n[1].Void}]}; }, $n);
    /*ClickCta end.*/

    /*Episode1 start.*/
    $m("Episode1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[2].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[3].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[3].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[2].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[3].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[2].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit","t":4,"rt":$n[2].RectTransform,"sn":"_unit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[2].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode1 end.*/

    /*Episode2 start.*/
    $m("Episode2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[2].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[3].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[3].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[2].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[3].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[2].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit1","t":4,"rt":$n[2].RectTransform,"sn":"_unit1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit2","t":4,"rt":$n[2].RectTransform,"sn":"_unit2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[2].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode2 end.*/

    /*Episode3 start.*/
    $m("Episode3", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateAttack","t":8,"pi":[{"n":"dragon","pt":$n[2].GameObject,"ps":0},{"n":"enemy","pt":$n[2].GameObject,"ps":1}],"sn":"AnimateAttack","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[2].GameObject]},{"a":1,"n":"AnimatePopIn","t":8,"pi":[{"n":"target","pt":$n[2].GameObject,"ps":0},{"n":"startScale","pt":$n[1].Single,"ps":1},{"n":"overshootScale","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"targetScale","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"AnimatePopIn","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[1].Single,$n[1].Single,$n[1].Single,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[1].Void},{"a":1,"n":"DestroyingEnemies","t":8,"sn":"DestroyingEnemies","rt":$n[0].IEnumerator},{"a":2,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"SlideBattleUI","t":8,"sn":"SlideBattleUI","rt":$n[0].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[2].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[2].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragon1","t":4,"rt":$n[2].GameObject,"sn":"_cardDragon1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragon2","t":4,"rt":$n[2].GameObject,"sn":"_cardDragon2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragon3","t":4,"rt":$n[2].GameObject,"sn":"_cardDragon3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardL","t":4,"rt":$n[2].GameObject,"sn":"_cardL"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_parentsDisplay","t":4,"rt":$n[2].GameObject,"sn":"_parentsDisplay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleButton","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_point","t":4,"rt":$n[2].RectTransform,"sn":"_point"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[3].Text,"sn":"_textCoins"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription","t":4,"rt":$n[2].GameObject,"sn":"_winInscription"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription2","t":4,"rt":$n[2].GameObject,"sn":"_winInscription2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription3","t":4,"rt":$n[2].GameObject,"sn":"_winInscription3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winVictoty","t":4,"rt":$n[2].GameObject,"sn":"_winVictoty"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode3 end.*/

    /*Episode4 start.*/
    $m("Episode4", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm3_3","t":4,"rt":$n[2].GameObject,"sn":"_arm3_3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone","t":4,"rt":$n[2].GameObject,"sn":"_cardDragcone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone1_1","t":4,"rt":$n[2].GameObject,"sn":"_cardDragcone1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone2_2","t":4,"rt":$n[2].GameObject,"sn":"_cardDragcone2_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[2].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopButton","t":4,"rt":$n[2].GameObject,"sn":"_shopButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[3].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[2].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode4 end.*/

    /*Episode4v2 start.*/
    $m("Episode4v2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCardUpdate","t":8,"sn":"AnimateCardUpdate","rt":$n[0].IEnumerator},{"a":1,"n":"ClearOldCards","t":8,"sn":"ClearOldCards","rt":$n[1].Void},{"a":2,"n":"CreateArmUp","t":8,"sn":"CreateArmUp","rt":$n[1].Void},{"a":2,"n":"IncrementDragonCard","t":8,"pi":[{"n":"card","pt":Card2V,"ps":0}],"sn":"IncrementDragonCard","rt":$n[1].Void,"p":[Card2V]},{"a":1,"n":"MoveToWorldSpace","t":8,"pi":[{"n":"rt","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MoveToWorldSpace","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":2,"n":"NotifyCardChosen","t":8,"sn":"NotifyCardChosen","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnUpdateButtonClick","t":8,"sn":"OnUpdateButtonClick","rt":$n[1].Void},{"a":1,"n":"ScaleAndHide","t":8,"pi":[{"n":"card","pt":$n[2].GameObject,"ps":0},{"n":"targetScale","pt":$n[1].Single,"ps":1}],"sn":"ScaleAndHide","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[1].Single]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"rt","pt":$n[2].RectTransform,"ps":0},{"n":"targetScale","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"ScaleUp","t":8,"pi":[{"n":"card","pt":$n[2].GameObject,"ps":0}],"sn":"ScaleUp","rt":$n[0].IEnumerator,"p":[$n[2].GameObject]},{"a":1,"n":"ShakeEffect","t":8,"pi":[{"n":"rt","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ShakeEffect","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[1].Single]},{"a":1,"n":"SpawnCards","t":8,"sn":"SpawnCards","rt":$n[1].Void},{"a":2,"n":"TrySpendForCard","t":8,"sn":"TrySpendForCard","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"UpdateMoneyText","t":8,"sn":"UpdateMoneyText","rt":$n[1].Void},{"a":1,"n":"UpgradeCardsAnimation","t":8,"sn":"UpgradeCardsAnimation","rt":$n[0].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_TMony","t":4,"rt":$n[3].Text,"sn":"_TMony"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm2","t":4,"rt":$n[2].GameObject,"sn":"_arm2"},{"a":2,"n":"_armO","t":4,"rt":$n[2].GameObject,"sn":"_armO"},{"a":2,"n":"_armU","t":4,"rt":$n[2].GameObject,"sn":"_armU"},{"a":2,"n":"_buttle","t":4,"rt":Buttle,"sn":"_buttle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buttleButton","t":4,"rt":$n[2].GameObject,"sn":"_buttleButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card","t":4,"rt":Card2V,"sn":"_card"},{"a":1,"n":"_cardChosen","t":4,"rt":$n[1].Boolean,"sn":"_cardChosen","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardPointUpgrade","t":4,"rt":$n[2].GameObject,"sn":"_cardPointUpgrade"},{"a":1,"n":"_cardUsed","t":4,"rt":$n[1].Boolean,"sn":"_cardUsed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cards","t":4,"rt":$n[5].List$1(Card2V),"sn":"_cards"},{"a":2,"n":"_cardsDragon","t":4,"rt":$n[1].Int32,"sn":"_cardsDragon","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_dragonCards","t":4,"rt":$n[5].List$1(Card2V),"sn":"_dragonCards"},{"a":1,"n":"_firstUpdateDone","t":4,"rt":$n[1].Boolean,"sn":"_firstUpdateDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_isArm","t":4,"rt":$n[1].Boolean,"sn":"_isArm","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_isButtle","t":4,"rt":$n[1].Boolean,"sn":"_isButtle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_isUpgrade","t":4,"rt":$n[1].Boolean,"sn":"_isUpgrade","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_layer","t":4,"rt":$n[2].GameObject,"sn":"_layer"},{"a":1,"n":"_mainCardArmUsed","t":4,"rt":$n[1].Boolean,"sn":"_mainCardArmUsed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_mony","t":4,"rt":$n[1].Int32,"sn":"_mony","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_nonDragonCards","t":4,"rt":$n[5].List$1(Card2V),"sn":"_nonDragonCards"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particle","t":4,"rt":$n[2].ParticleSystem,"sn":"_particle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particle2","t":4,"rt":$n[2].ParticleSystem,"sn":"_particle2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleU","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleU"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_point1","t":4,"rt":Point,"sn":"_point1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_point2","t":4,"rt":Point,"sn":"_point2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_point3","t":4,"rt":Point,"sn":"_point3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_point4","t":4,"rt":Point,"sn":"_point4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_point5","t":4,"rt":Point,"sn":"_point5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_point6","t":4,"rt":Point,"sn":"_point6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pointS1","t":4,"rt":$n[2].RectTransform,"sn":"_pointS1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pointS2","t":4,"rt":$n[2].RectTransform,"sn":"_pointS2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pointS3","t":4,"rt":$n[2].RectTransform,"sn":"_pointS3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage3","t":4,"rt":$n[2].GameObject,"sn":"_textDamage3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth3","t":4,"rt":$n[2].GameObject,"sn":"_textHealth3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_updateButton","t":4,"rt":$n[2].GameObject,"sn":"_updateButton"}]}; }, $n);
    /*Episode4v2 end.*/

    /*Episode4_1 start.*/
    $m("Episode4_1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateObjects","t":8,"sn":"AnimateObjects","rt":$n[0].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleAndHide","t":8,"pi":[{"n":"obj","pt":$n[2].GameObject,"ps":0},{"n":"targetScale","pt":$n[1].Single,"ps":1}],"sn":"ScaleAndHide","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[1].Single]},{"a":1,"n":"ScaleUp","t":8,"pi":[{"n":"obj","pt":$n[2].GameObject,"ps":0}],"sn":"ScaleUp","rt":$n[0].IEnumerator,"p":[$n[2].GameObject]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart1_1","t":4,"rt":$n[2].GameObject,"sn":"_cart1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart1__2","t":4,"rt":$n[2].GameObject,"sn":"_cart1__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart2_1","t":4,"rt":$n[2].GameObject,"sn":"_cart2_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart2__2","t":4,"rt":$n[2].GameObject,"sn":"_cart2__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart3_1","t":4,"rt":$n[2].GameObject,"sn":"_cart3_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart3__2","t":4,"rt":$n[2].GameObject,"sn":"_cart3__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinText","t":4,"rt":$n[3].Text,"sn":"_coinText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"a":2,"n":"End2","t":2,"ad":{"a":2,"n":"add_End2","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd2","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End2","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd2","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode4_1 end.*/

    /*Episode4_2 start.*/
    $m("Episode4_2", function () { return {"nested":[Episode4_2.AttackState,Episode4_2.ReturnInfo],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateAttack","t":8,"pi":[{"n":"attacker","pt":$n[2].GameObject,"ps":0},{"n":"target","pt":$n[2].GameObject,"ps":1},{"n":"effect","pt":$n[2].ParticleSystem,"ps":2},{"n":"returnToOriginal","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"AnimateAttack","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[2].GameObject,$n[2].ParticleSystem,$n[1].Boolean]},{"a":1,"n":"AnimatePopIn","t":8,"pi":[{"n":"target","pt":$n[2].GameObject,"ps":0},{"n":"startScale","pt":$n[1].Single,"ps":1},{"n":"overshootScale","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"targetScale","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"AnimatePopIn","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[1].Single,$n[1].Single,$n[1].Single,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"BattleSequence","t":8,"sn":"BattleSequence","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":2,"n":"InitialiseCards","t":8,"pi":[{"n":"list1","pt":$n[5].List$1(Card2V),"ps":0},{"n":"list2","pt":$n[5].List$1(Card2V),"ps":1}],"sn":"InitialiseCards","rt":$n[1].Void,"p":[$n[5].List$1(Card2V),$n[5].List$1(Card2V)]},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ReturnToOriginalPosition","t":8,"pi":[{"n":"attackerRect","pt":$n[2].RectTransform,"ps":0},{"n":"state","pt":Episode4_2.AttackState,"ps":1}],"sn":"ReturnToOriginalPosition","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,Episode4_2.AttackState]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[2].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[2].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone1","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone2","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone3","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone3"},{"a":1,"n":"_cardDracone4","t":4,"rt":Card2V,"sn":"_cardDracone4"},{"a":1,"n":"_cardDracone5","t":4,"rt":Card2V,"sn":"_cardDracone5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_layer","t":4,"rt":$n[2].GameObject,"sn":"_layer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleButtun","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleButtun"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem4","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem5","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem6","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem7","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem7"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem8","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem8"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem9","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem9"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winDefeat","t":4,"rt":$n[2].GameObject,"sn":"_winDefeat"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winFinal","t":4,"rt":$n[2].GameObject,"sn":"_winFinal"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription","t":4,"rt":$n[2].GameObject,"sn":"_winInscription"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription2","t":4,"rt":$n[2].GameObject,"sn":"_winInscription2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription3","t":4,"rt":$n[2].GameObject,"sn":"_winInscription3"}]}; }, $n);
    /*Episode4_2 end.*/

    /*Episode4_2+AttackState start.*/
    $m("Episode4_2.AttackState", function () { return {"td":Episode4_2,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OriginalLocalPos","t":4,"rt":$n[2].Vector3,"sn":"OriginalLocalPos"},{"a":2,"n":"OriginalParent","t":4,"rt":$n[2].Transform,"sn":"OriginalParent"}]}; }, $n);
    /*Episode4_2+AttackState end.*/

    /*Episode4_2+ReturnInfo start.*/
    $m("Episode4_2.ReturnInfo", function () { return {"td":Episode4_2,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"State","t":4,"rt":Episode4_2.AttackState,"sn":"State"}]}; }, $n);
    /*Episode4_2+ReturnInfo end.*/

    /*Episode5 start.*/
    $m("Episode5", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCards","t":8,"sn":"AnimateCards","rt":$n[0].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleAndHide","t":8,"pi":[{"n":"card","pt":$n[2].GameObject,"ps":0},{"n":"targetScale","pt":$n[1].Single,"ps":1}],"sn":"ScaleAndHide","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[1].Single]},{"a":1,"n":"ScaleUp","t":8,"pi":[{"n":"card","pt":$n[2].GameObject,"ps":0}],"sn":"ScaleUp","rt":$n[0].IEnumerator,"p":[$n[2].GameObject]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_1","t":4,"rt":$n[2].GameObject,"sn":"_card1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_1_2","t":4,"rt":$n[2].GameObject,"sn":"_card1_1_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_2_2","t":4,"rt":$n[2].GameObject,"sn":"_card1_2_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_3_2","t":4,"rt":$n[2].GameObject,"sn":"_card1_3_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card2_1","t":4,"rt":$n[2].GameObject,"sn":"_card2_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsText","t":4,"rt":$n[3].Text,"sn":"_coinsText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode5 end.*/

    /*Episode5_1 start.*/
    $m("Episode5_1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckCardSufficiency","t":8,"pi":[{"n":"card","pt":Card,"ps":0}],"sn":"CheckCardSufficiency","rt":$n[1].Void,"p":[Card]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1","t":4,"rt":Card,"sn":"_card1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card2","t":4,"rt":Card,"sn":"_card2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode5","t":4,"rt":Episode5,"sn":"_episode5"},{"a":1,"n":"_isPlayed","t":4,"rt":$n[1].Boolean,"sn":"_isPlayed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"a":1,"n":"_tCard","t":4,"rt":Card,"sn":"_tCard"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_texCoins","t":4,"rt":$n[3].Text,"sn":"_texCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"episode4_1","t":4,"rt":Episode4_1,"sn":"episode4_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"episode5_2","t":4,"rt":Episode5_2,"sn":"episode5_2"}]}; }, $n);
    /*Episode5_1 end.*/

    /*Episode5_2 start.*/
    $m("Episode5_2", function () { return {"nested":[Episode5_2.AttackState,Episode5_2.ReturnInfo],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateAttack","t":8,"pi":[{"n":"attacker","pt":$n[2].GameObject,"ps":0},{"n":"target","pt":$n[2].GameObject,"ps":1},{"n":"effect","pt":$n[2].ParticleSystem,"ps":2},{"n":"returnToOriginal","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"AnimateAttack","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[2].GameObject,$n[2].ParticleSystem,$n[1].Boolean]},{"a":1,"n":"AnimatePopIn","t":8,"pi":[{"n":"target","pt":$n[2].GameObject,"ps":0},{"n":"startScale","pt":$n[1].Single,"ps":1},{"n":"overshootScale","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"targetScale","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"AnimatePopIn","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[1].Single,$n[1].Single,$n[1].Single,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"BattleSequence","t":8,"sn":"BattleSequence","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":2,"n":"InitialiseCards","t":8,"pi":[{"n":"card2","pt":Card,"ps":0}],"sn":"InitialiseCards","rt":$n[1].Void,"p":[Card]},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ReturnToOriginalPosition","t":8,"pi":[{"n":"attackerRect","pt":$n[2].RectTransform,"ps":0},{"n":"state","pt":Episode5_2.AttackState,"ps":1}],"sn":"ReturnToOriginalPosition","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,Episode5_2.AttackState]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[2].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[2].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone1","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone2","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone3","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone4","t":4,"rt":$n[2].GameObject,"sn":"_cardDracone4"},{"a":1,"n":"_cardDracone5","t":4,"rt":Card,"sn":"_cardDracone5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_layer","t":4,"rt":$n[2].GameObject,"sn":"_layer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem4","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem5","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem6","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem7","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem7"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winDefeat","t":4,"rt":$n[2].GameObject,"sn":"_winDefeat"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winFinal","t":4,"rt":$n[2].GameObject,"sn":"_winFinal"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription","t":4,"rt":$n[2].GameObject,"sn":"_winInscription"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription2","t":4,"rt":$n[2].GameObject,"sn":"_winInscription2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winInscription3","t":4,"rt":$n[2].GameObject,"sn":"_winInscription3"}]}; }, $n);
    /*Episode5_2 end.*/

    /*Episode5_2+AttackState start.*/
    $m("Episode5_2.AttackState", function () { return {"td":Episode5_2,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OriginalLocalPos","t":4,"rt":$n[2].Vector3,"sn":"OriginalLocalPos"},{"a":2,"n":"OriginalParent","t":4,"rt":$n[2].Transform,"sn":"OriginalParent"}]}; }, $n);
    /*Episode5_2+AttackState end.*/

    /*Episode5_2+ReturnInfo start.*/
    $m("Episode5_2.ReturnInfo", function () { return {"td":Episode5_2,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"State","t":4,"rt":Episode5_2.AttackState,"sn":"State"}]}; }, $n);
    /*Episode5_2+ReturnInfo end.*/

    /*Episode6 start.*/
    $m("Episode6", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveObjectTo","t":8,"pi":[{"n":"obj","pt":$n[2].GameObject,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MoveObjectTo","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"ShakeEffect","t":8,"pi":[{"n":"duration","pt":$n[1].Single,"ps":0}],"sn":"ShakeEffect","rt":$n[0].IEnumerator,"p":[$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart","t":4,"rt":$n[2].GameObject,"sn":"_cart"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cartPoint","t":4,"rt":$n[2].GameObject,"sn":"_cartPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsText","t":4,"rt":$n[3].Text,"sn":"_coinsText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleCards","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleCards"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[2].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[3].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[2].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[3].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[2].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[2].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[2].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[2].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Episode6 end.*/

    /*Episode7 start.*/
    $m("Episode7", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateAttack","t":8,"pi":[{"n":"dragon","pt":$n[2].GameObject,"ps":0},{"n":"enemy","pt":$n[2].GameObject,"ps":1},{"n":"enemyPosition","pt":$n[2].Vector3,"ps":2},{"n":"particle","pt":$n[2].ParticleSystem,"ps":3}],"sn":"AnimateAttack","rt":$n[0].IEnumerator,"p":[$n[2].GameObject,$n[2].GameObject,$n[2].Vector3,$n[2].ParticleSystem]},{"a":1,"n":"AnimateDragons","t":8,"sn":"AnimateDragons","rt":$n[0].IEnumerator},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[1].Void},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0},{"n":"target","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[2].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[2].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragon1","t":4,"rt":$n[2].GameObject,"sn":"_cardDragon1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragon2","t":4,"rt":$n[2].GameObject,"sn":"_cardDragon2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragon3","t":4,"rt":$n[2].GameObject,"sn":"_cardDragon3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye4","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye5","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye6","t":4,"rt":$n[2].GameObject,"sn":"_cardEnemye6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode3","t":4,"rt":Episode3,"sn":"_episode3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem4","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem5","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem6","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem6"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winFinal","t":4,"rt":$n[2].GameObject,"sn":"_winFinal"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winVictoty","t":4,"rt":$n[2].GameObject,"sn":"_winVictoty"}]}; }, $n);
    /*Episode7 end.*/

    /*ParticleFollowUI start.*/
    $m("ParticleFollowUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"_buttonButtle","t":4,"rt":$n[2].RectTransform,"sn":"_buttonButtle"},{"a":2,"n":"_buttonShop","t":4,"rt":$n[2].RectTransform,"sn":"_buttonShop"},{"a":2,"n":"_particleEffectButton","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleEffectButton"},{"a":2,"n":"_particleEffectButtonShop","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleEffectButtonShop"},{"a":2,"n":"uiCamera","t":4,"rt":$n[2].Camera,"sn":"uiCamera"},{"a":2,"n":"zOffset","t":4,"rt":$n[1].Single,"sn":"zOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ParticleFollowUI end.*/

    /*Point start.*/
    $m("Point", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"_occupied","t":4,"rt":$n[1].Boolean,"sn":"_occupied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Point end.*/

    /*Scenario start.*/
    $m("Scenario", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"TurnEpisode2","t":8,"sn":"TurnEpisode2","rt":$n[1].Void},{"a":1,"n":"TurnEpisode3","t":8,"sn":"TurnEpisode3","rt":$n[1].Void},{"a":1,"n":"TurnEpisode4","t":8,"sn":"TurnEpisode4","rt":$n[1].Void},{"a":1,"n":"_cardsTaken","t":4,"rt":$n[1].Int32,"sn":"_cardsTaken","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode1","t":4,"rt":Episode1,"sn":"_episode1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode2","t":4,"rt":Episode2,"sn":"_episode2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode3","t":4,"rt":Episode3,"sn":"_episode3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode4v2","t":4,"rt":Episode4v2,"sn":"_episode4v2"},{"a":1,"n":"_taken","t":4,"rt":$n[1].Boolean,"sn":"_taken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_takencard1","t":4,"rt":Card,"sn":"_takencard1"},{"a":1,"n":"_takencard2","t":4,"rt":Card,"sn":"_takencard2"}]}; }, $n);
    /*Scenario end.*/

    /*UpdateButton start.*/
    $m("UpdateButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"a":2,"n":"_episode","t":4,"rt":Episode4v2,"sn":"_episode"}]}; }, $n);
    /*UpdateButton end.*/

    }});
