if ( TRACE ) { TRACE( JSON.parse( '["Card#init","Card#OnEnable","Card#OnPointerClick","Card#PlayParticle","Card#AnimateCard","Card#ScaleTo","Card#MoveTo","Episode1#init","Episode1#OnEnable","Episode1#OnPointerClick","Episode1#AnimateCard","Episode1#ScaleTo","Episode1#MoveTo","Episode2#init","Episode2#OnEnable","Episode2#OnPointerClick","Episode2#AnimateCard","Episode2#ScaleTo","Episode2#MoveTo","Episode3#Awake","Episode3#OnEnable","Episode3#OnPointerClick","Episode3#Battle","Episode3#DestroyingEnemies","Episode3#FadeInVictory","Episode4#init","Episode4#OnEnable","Episode4#OnPointerClick","Episode4#AnimateCard","Episode4#ScaleTo","Episode4#MoveTo","Episode4_1#OnEnable","Episode4_1#OnPointerClick","Episode4_2#Awake","Episode4_2#OnEnable","Episode4_2#OnPointerClick","Episode4_2#InitialiseCards","Episode4_2#Battle","Episode4_2#DestroyingEnemies","Episode4_2#FadeInVictory","Episode5#OnEnable","Episode5#OnPointerClick","Episode5_1#init","Episode5_1#OnEnable","Episode5_1#CheckCardSufficiency","Episode5_2#Awake","Episode5_2#OnEnable","Episode5_2#OnPointerClick","Episode5_2#InitialiseCards","Episode5_2#Battle","Episode5_2#DestroyingEnemies","Episode5_2#FadeInVictory","Episode6#init","Episode6#OnEnable","Episode6#OnPointerClick","Episode6#AnimateCard","Episode6#MoveObjectTo","Episode6#ScaleTo","Episode6#MoveTo","Episode7#Awake","Episode7#OnEnable","Episode7#OnPointerClick","Episode7#Battle","Episode7#DestroyingEnemies","Episode7#FadeInVictory","Scenario#init","Scenario#OnEnable","Scenario#OnDisable","Scenario#Start","Scenario#TurnEpisode2","Scenario#TurnEpisode3","Scenario#TurnEpisode4And4_1","Scenario#TurnEpisode5And5_1","Scenario#TurnEpisode6","Scenario#TurnEpisode7","Scenario#CheckingCombat"]' ) ); }
/**
 * @version 1.0.9249.19583
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Card start.*/
    Bridge.define("Card", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale, this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition, this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale, this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    !Bridge.staticEquals(this.They, null) ? this.They(this) : null;
                                        // ��������� ��� ������ �������
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

    /*Episode1 start.*/
    Bridge.define("Episode1", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale, this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition, this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale, this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._particleSystem.Play();

                                        this._textDamage.gameObject.SetActive(false);
                                        this._textHealth.gameObject.SetActive(false);
                                        this._textHealth2.gameObject.SetActive(true);
                                        this._textDamage2.gameObject.SetActive(true);
                                        // ��������� ��� ������ �������
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._unit.gameObject.SetActive(false);

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
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale, this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition, this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale, this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._particleSystem1.Play();
                                        this._particleSystem2.Play();

                                        this._textDamage.gameObject.SetActive(false);
                                        this._textHealth.gameObject.SetActive(false);
                                        this._textHealth2.gameObject.SetActive(true);
                                        this._textDamage2.gameObject.SetActive(true);
                                        // ��������� ��� ������ �������
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._unit1.gameObject.SetActive(false);
                                        this._unit2.gameObject.SetActive(false);

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
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardDracone: null,
            _point: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
            _cardEnemye3: null,
            _particleSystem1: null,
            _particleSystem2: null,
            _particleSystem3: null,
            _particleButton: null,
            _textCoins: null,
            _winVictoty: null,
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
                    this._victoryCanvasGroup.alpha = 0;
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
            },
            /*Episode3.OnPointerClick end.*/

            /*Episode3.Battle start.*/
            Battle: function () {
if ( TRACE ) { TRACE( "Episode3#Battle", this ); }

                this._cardDracone.transform.position = this._point.position.$clone();
                this._battle.gameObject.SetActive(true);

                this.StartCoroutine$1(this.DestroyingEnemies());
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
                                    this._particleSystem1.Play();
                                        this._particleSystem2.Play();
                                        this._particleSystem3.Play();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardEnemye1.gameObject.SetActive(false);
                                        this._cardEnemye2.gameObject.SetActive(false);
                                        this._cardEnemye3.gameObject.SetActive(false);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._winVictoty.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());
                                        this._textCoins.text = "7";

                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._battle.gameObject.SetActive(false);
                                        this._winVictoty.gameObject.SetActive(false);
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
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = 0.5;
                                        elapsed = 0.0;

                                        this._victoryCanvasGroup.alpha = 0;
                                        this._winVictoty.transform.localScale = pc.Vec3.ZERO.clone();
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

                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, t));
                                        this._winVictoty.transform.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), t );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1;
                                        this._winVictoty.transform.localScale = new pc.Vec3( 1, 1, 1 );

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


        }
    });
    /*Episode3 end.*/

    /*Episode4 start.*/
    Bridge.define("Episode4", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale, this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition, this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale, this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    // ��������� ��� ������ �������
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
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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
                this._cart1__2.SetActive(true);
                this._cart2__2.SetActive(true);
                this._cart3__2.SetActive(true);

                this._cart1_1.SetActive(false);
                this._cart2_1.SetActive(false);
                this._cart3_1.SetActive(false);

                this._arm.SetActive(false);

                !Bridge.staticEquals(this.End2, null) ? this.End2() : null;
                this.enabled = false;
            },
            /*Episode4_1.OnPointerClick end.*/


        }
    });
    /*Episode4_1 end.*/

    /*Episode4_2 start.*/
    Bridge.define("Episode4_2", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
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
            _particleButtun: null,
            _particleDragon: null,
            _cardDracone4: null,
            _cardDracone5: null,
            _victoryCanvasGroup: null
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
                    this._victoryCanvasGroup.alpha = 0;
                    this._winDefeat.SetActive(false);
                }
            },
            /*Episode4_2.Awake end.*/

            /*Episode4_2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode4_2#OnEnable", this ); }

                this._button.SetActive(true);
                this._particleButtun.Play();
                this._particleDragon.Stop();
            },
            /*Episode4_2.OnEnable end.*/

            /*Episode4_2.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode4_2#OnPointerClick", this ); }

                this._particleButtun.Stop();
                this.Battle();
                this._button.SetActive(false);
            },
            /*Episode4_2.OnPointerClick end.*/

            /*Episode4_2.InitialiseCards start.*/
            InitialiseCards: function (card1, card2) {
if ( TRACE ) { TRACE( "Episode4_2#InitialiseCards", this ); }

                this._cardDracone4 = card1;
                this._cardDracone5 = card2;
            },
            /*Episode4_2.InitialiseCards end.*/

            /*Episode4_2.Battle start.*/
            Battle: function () {
if ( TRACE ) { TRACE( "Episode4_2#Battle", this ); }

                this._battle.gameObject.SetActive(true);

                this.StartCoroutine$1(this.DestroyingEnemies());
            },
            /*Episode4_2.Battle end.*/

            /*Episode4_2.DestroyingEnemies start.*/
            DestroyingEnemies: function () {
if ( TRACE ) { TRACE( "Episode4_2#DestroyingEnemies", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._particleSystem1.Play();
                                        this._particleSystem2.Play();
                                        this._particleSystem3.Play();
                                        this._particleSystem4.Play();
                                        this._particleSystem5.Play();
                                        this._cardDracone4.PlayParticle();
                                        this._cardDracone5.PlayParticle();
                                        // ��������

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardEnemye1.gameObject.SetActive(false);
                                        this._cardEnemye2.gameObject.SetActive(false);
                                        this._cardDracone1.SetActive(false);
                                        this._cardDracone2.SetActive(false);
                                        this._cardDracone3.SetActive(false);
                                        this._cardDracone4.gameObject.SetActive(false);
                                        this._cardDracone5.gameObject.SetActive(false);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._winDefeat.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());

                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
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
            /*Episode4_2.DestroyingEnemies end.*/

            /*Episode4_2.FadeInVictory start.*/
            FadeInVictory: function () {
if ( TRACE ) { TRACE( "Episode4_2#FadeInVictory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = 0.5;
                                        elapsed = 0.0;

                                        this._victoryCanvasGroup.alpha = 0;
                                        this._winDefeat.transform.localScale = pc.Vec3.ZERO.clone();
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

                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, t));
                                        this._winDefeat.transform.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), t );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1;
                                        this._winDefeat.transform.localScale = new pc.Vec3( 1, 1, 1 );

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


        }
    });
    /*Episode4_2 end.*/

    /*Episode5 start.*/
    Bridge.define("Episode5", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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

                //_particleSystem.Play();
            },
            /*Episode5.OnEnable end.*/

            /*Episode5.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode5#OnPointerClick", this ); }

                this._particleSystem.Stop();
                this._coinsText.text = "3";

                this._card1_1.SetActive(false);
                this._card2_1.SetActive(false);

                this._card1_1_2.SetActive(true);
                this._card1_2_2.SetActive(true);
                this._card1_3_2.SetActive(true);

                !Bridge.staticEquals(this.End, null) ? this.End() : null;
            },
            /*Episode5.OnPointerClick end.*/


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

                if (this._isPlayed === true) {
                    this._episode5.enabled = false;
                    this.episode4_1.enabled = false;
                    this._card1.enabled = false;
                    this._card2.enabled = false;

                    this.episode5_2.enabled = true;
                    this.episode5_2.InitialiseCards(this._tCard);
                    UnityEngine.Debug.Log$1("\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd 3 \ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd");
                }
            },
            /*Episode5_1.CheckCardSufficiency end.*/


        }
    });
    /*Episode5_1 end.*/

    /*Episode5_2 start.*/
    Bridge.define("Episode5_2", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
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
                    this._victoryCanvasGroup.alpha = 0;
                    this._winDefeat.SetActive(false);
                }
            },
            /*Episode5_2.Awake end.*/

            /*Episode5_2.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode5_2#OnEnable", this ); }

                this._particleSystem.Play();
                this._button.SetActive(true);
            },
            /*Episode5_2.OnEnable end.*/

            /*Episode5_2.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode5_2#OnPointerClick", this ); }

                this._particleSystem.Stop();
                this.Battle();
                this._button.SetActive(false);
            },
            /*Episode5_2.OnPointerClick end.*/

            /*Episode5_2.InitialiseCards start.*/
            InitialiseCards: function (card1) {
if ( TRACE ) { TRACE( "Episode5_2#InitialiseCards", this ); }

                this._cardDracone5 = card1;
            },
            /*Episode5_2.InitialiseCards end.*/

            /*Episode5_2.Battle start.*/
            Battle: function () {
if ( TRACE ) { TRACE( "Episode5_2#Battle", this ); }

                this._battle.gameObject.SetActive(true);

                this.StartCoroutine$1(this.DestroyingEnemies());
            },
            /*Episode5_2.Battle end.*/

            /*Episode5_2.DestroyingEnemies start.*/
            DestroyingEnemies: function () {
if ( TRACE ) { TRACE( "Episode5_2#DestroyingEnemies", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._particleSystem1.Play();
                                        this._particleSystem2.Play();
                                        this._particleSystem3.Play();
                                        this._particleSystem4.Play();
                                        this._particleSystem5.Play();
                                        this._particleSystem6.Play();
                                        this._cardDracone5.PlayParticle();
                                        // ��������

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardEnemye1.gameObject.SetActive(false);
                                        this._cardEnemye2.gameObject.SetActive(false);
                                        this._cardDracone1.SetActive(false);
                                        this._cardDracone2.SetActive(false);
                                        this._cardDracone3.SetActive(false);
                                        this._cardDracone4.gameObject.SetActive(false);
                                        this._cardDracone5.gameObject.SetActive(false);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._winDefeat.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());

                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
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
            /*Episode5_2.DestroyingEnemies end.*/

            /*Episode5_2.FadeInVictory start.*/
            FadeInVictory: function () {
if ( TRACE ) { TRACE( "Episode5_2#FadeInVictory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = 0.5;
                                        elapsed = 0.0;

                                        this._victoryCanvasGroup.alpha = 0;
                                        this._winDefeat.transform.localScale = pc.Vec3.ZERO.clone();
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

                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, t));
                                        this._winDefeat.transform.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), t );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1;
                                        this._winDefeat.transform.localScale = new pc.Vec3( 1, 1, 1 );

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


        }
    });
    /*Episode5_2 end.*/

    /*Episode6 start.*/
    Bridge.define("Episode6", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
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
                    moveEpisode,
                    moveCart,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale, this.scaleDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTo(this._points.localPosition, this.moveDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale, this.scaleDuration));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    // ��������� ��� ������ �������
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    // ����� �����!
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.5);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    // ���� � _cartPoint
                                        cartPointPosition = this._cartPoint.transform.localPosition.$clone();
                                        moveEpisode = this.StartCoroutine$1(this.MoveTo(cartPointPosition, this.moveDuration));
                                        moveCart = this.StartCoroutine$1(this.MoveObjectTo(this._cart, cartPointPosition, this.moveDuration));

                                        // ���� ��� ��������
                                        //yield return moveEpisode;
                                        //yield return moveCart;
                                        this._particleCards.Play();
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(0.7);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    // �������� _cart � _cartPoint
                                        this._cart.SetActive(false);
                                        this._cartPoint.SetActive(false);
                                        this._particleCards.Stop();
                                        //����������� Episode6
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.targetScale.$clone().clone().scale( 2.0 ), this.scaleDuration));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    //���������� � ������������ ������
                                        $enumerator.current = this.StartCoroutine$1(this.ScaleTo(this.originalScale, this.scaleDuration));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
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
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            _battle: null,
            _button: null,
            _cardEnemye1: null,
            _cardEnemye2: null,
            _cardEnemye3: null,
            _cardEnemye4: null,
            _cardEnemye5: null,
            _cardEnemye6: null,
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
                    this._victoryCanvasGroup.alpha = 0;
                    this._winVictoty.SetActive(false);
                }
            },
            /*Episode7.Awake end.*/

            /*Episode7.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Episode7#OnEnable", this ); }

                this._button.SetActive(true);
                this._particleSystem.Play();
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

                this.StartCoroutine$1(this.DestroyingEnemies());
            },
            /*Episode7.Battle end.*/

            /*Episode7.DestroyingEnemies start.*/
            DestroyingEnemies: function () {
if ( TRACE ) { TRACE( "Episode7#DestroyingEnemies", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._particleSystem1.Play();
                                        this._particleSystem2.Play();
                                        this._particleSystem3.Play();
                                        this._particleSystem4.Play();
                                        this._particleSystem5.Play();
                                        this._particleSystem6.Play();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this._cardEnemye1.gameObject.SetActive(false);
                                        this._cardEnemye2.gameObject.SetActive(false);
                                        this._cardEnemye3.gameObject.SetActive(false);
                                        this._cardEnemye4.SetActive(false);
                                        this._cardEnemye5.SetActive(false);
                                        this._cardEnemye6.SetActive(false);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this._winVictoty.SetActive(true);
                                        this.StartCoroutine$1(this.FadeInVictory());

                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
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
            /*Episode7.DestroyingEnemies end.*/

            /*Episode7.FadeInVictory start.*/
            FadeInVictory: function () {
if ( TRACE ) { TRACE( "Episode7#FadeInVictory", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    duration = 0.5;
                                        elapsed = 0.0;

                                        this._victoryCanvasGroup.alpha = 0;
                                        this._winVictoty.transform.localScale = pc.Vec3.ZERO.clone();
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

                                        this._victoryCanvasGroup.alpha = Math.max(0, Math.min(1, t));
                                        this._winVictoty.transform.localScale = new pc.Vec3().lerp( pc.Vec3.ZERO.clone(), new pc.Vec3( 1, 1, 1 ), t );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._victoryCanvasGroup.alpha = 1;
                                        this._winVictoty.transform.localScale = new pc.Vec3( 1, 1, 1 );

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
            /*Episode7.FadeInVictory end.*/


        }
    });
    /*Episode7 end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Scenario start.*/
    Bridge.define("Scenario", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _episode1: null,
            _episode2: null,
            _episode3: null,
            _episode4: null,
            _episode4_1: null,
            _episode4_2: null,
            _episode5: null,
            _episode5_1: null,
            _episode6: null,
            _episode7: null,
            _card1__1: null,
            _card1__2: null,
            _card1__3: null,
            _coinsText: null,
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
                this._episode3.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode4And4_1));
                this._episode4.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode5And5_1));
                this._episode5.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode6));
                this._episode6.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode7));

                this._card1__1.addThey(Bridge.fn.cacheBind(this, this.CheckingCombat));
                this._card1__2.addThey(Bridge.fn.cacheBind(this, this.CheckingCombat));
                this._card1__3.addThey(Bridge.fn.cacheBind(this, this.CheckingCombat));
            },
            /*Scenario.OnEnable end.*/

            /*Scenario.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Scenario#OnDisable", this ); }

                this._episode1.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
                this._episode3.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode4And4_1));
                this._episode4.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode5And5_1));
                this._episode5.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode6));
                this._episode6.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode7));
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

            /*Scenario.TurnEpisode4And4_1 start.*/
            TurnEpisode4And4_1: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode4And4_1", this ); }

                this._episode3.enabled = false;
                this._episode4.gameObject.SetActive(true);
                this._episode4_1.enabled = true;
            },
            /*Scenario.TurnEpisode4And4_1 end.*/

            /*Scenario.TurnEpisode5And5_1 start.*/
            TurnEpisode5And5_1: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode5And5_1", this ); }

                this._episode4_1.enabled = false;
                this._episode4.enabled = false;
                this._episode5.enabled = true;
                this._episode5_1.enabled = true;
            },
            /*Scenario.TurnEpisode5And5_1 end.*/

            /*Scenario.TurnEpisode6 start.*/
            TurnEpisode6: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode6", this ); }

                this._episode5.enabled = false;
                this._episode6.enabled = true;
            },
            /*Scenario.TurnEpisode6 end.*/

            /*Scenario.TurnEpisode7 start.*/
            TurnEpisode7: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode7", this ); }

                this._episode6.enabled = false;
                this._episode7.enabled = true;
            },
            /*Scenario.TurnEpisode7 end.*/

            /*Scenario.CheckingCombat start.*/
            CheckingCombat: function (card) {
if ( TRACE ) { TRACE( "Scenario#CheckingCombat", this ); }

                if (this._taken === false) {
                    this._takencard1 = card;
                    this._taken = true;
                } else {
                    this._takencard2 = card;
                }

                this._cardsTaken = (this._cardsTaken + 1) | 0;

                var currentCoins = System.Int32.parse(this._coinsText.text);
                currentCoins = (currentCoins - 3) | 0;
                this._coinsText.text = Bridge.toString(currentCoins);

                if (this._cardsTaken >= 2) {
                    this._episode4_2.enabled = true;
                    this._episode3.enabled = false;
                    this._episode7.enabled = false;
                    this._episode4_2.InitialiseCards(this._takencard1, this._takencard2);

                    this._card1__1.enabled = false;
                    this._card1__2.enabled = false;
                    this._card1__3.enabled = false;
                    UnityEngine.Debug.Log$1("\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd \ufffd\ufffd\ufffd 2 \ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd");
                }
            },
            /*Scenario.CheckingCombat end.*/


        }
    });
    /*Scenario end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System.Collections","UnityEngine","System","UnityEngine.EventSystems","UnityEngine.UI"];

    /*Card start.*/
    $m("Card", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"PlayParticle","t":8,"sn":"PlayParticle","rt":$n[2].Void},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"They","t":2,"ad":{"a":2,"n":"add_They","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addThey","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_They","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeThey","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Card end.*/

    /*Episode1 start.*/
    $m("Episode1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[1].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[4].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[1].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[4].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[1].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit","t":4,"rt":$n[1].RectTransform,"sn":"_unit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode1 end.*/

    /*Episode2 start.*/
    $m("Episode2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[1].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[4].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[1].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[4].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[1].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit1","t":4,"rt":$n[1].RectTransform,"sn":"_unit1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit2","t":4,"rt":$n[1].RectTransform,"sn":"_unit2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode2 end.*/

    /*Episode3 start.*/
    $m("Episode3", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].Void},{"a":1,"n":"DestroyingEnemies","t":8,"sn":"DestroyingEnemies","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[1].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[1].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleButton","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_point","t":4,"rt":$n[1].RectTransform,"sn":"_point"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winVictoty","t":4,"rt":$n[1].GameObject,"sn":"_winVictoty"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode3 end.*/

    /*Episode4_1 start.*/
    $m("Episode4_1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[1].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart1_1","t":4,"rt":$n[1].GameObject,"sn":"_cart1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart1__2","t":4,"rt":$n[1].GameObject,"sn":"_cart1__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart2_1","t":4,"rt":$n[1].GameObject,"sn":"_cart2_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart2__2","t":4,"rt":$n[1].GameObject,"sn":"_cart2__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart3_1","t":4,"rt":$n[1].GameObject,"sn":"_cart3_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart3__2","t":4,"rt":$n[1].GameObject,"sn":"_cart3__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinText","t":4,"rt":$n[4].Text,"sn":"_coinText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"a":2,"n":"End2","t":2,"ad":{"a":2,"n":"add_End2","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd2","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End2","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd2","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode4_1 end.*/

    /*Episode4_2 start.*/
    $m("Episode4_2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].Void},{"a":1,"n":"DestroyingEnemies","t":8,"sn":"DestroyingEnemies","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":2,"n":"InitialiseCards","t":8,"pi":[{"n":"card1","pt":Card,"ps":0},{"n":"card2","pt":Card,"ps":1}],"sn":"InitialiseCards","rt":$n[2].Void,"p":[Card,Card]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[1].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[1].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone1","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone2","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone3","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone3"},{"a":1,"n":"_cardDracone4","t":4,"rt":Card,"sn":"_cardDracone4"},{"a":1,"n":"_cardDracone5","t":4,"rt":Card,"sn":"_cardDracone5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleButtun","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleButtun"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem4","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem5","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem5"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winDefeat","t":4,"rt":$n[1].GameObject,"sn":"_winDefeat"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winFinal","t":4,"rt":$n[1].GameObject,"sn":"_winFinal"}]}; }, $n);
    /*Episode4_2 end.*/

    /*Episode4 start.*/
    $m("Episode4", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm3_3","t":4,"rt":$n[1].GameObject,"sn":"_arm3_3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone","t":4,"rt":$n[1].GameObject,"sn":"_cardDragcone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone1_1","t":4,"rt":$n[1].GameObject,"sn":"_cardDragcone1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone2_2","t":4,"rt":$n[1].GameObject,"sn":"_cardDragcone2_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopButton","t":4,"rt":$n[1].GameObject,"sn":"_shopButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode4 end.*/

    /*Episode5_1 start.*/
    $m("Episode5_1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckCardSufficiency","t":8,"pi":[{"n":"card","pt":Card,"ps":0}],"sn":"CheckCardSufficiency","rt":$n[2].Void,"p":[Card]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1","t":4,"rt":Card,"sn":"_card1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card2","t":4,"rt":Card,"sn":"_card2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode5","t":4,"rt":Episode5,"sn":"_episode5"},{"a":1,"n":"_isPlayed","t":4,"rt":$n[2].Boolean,"sn":"_isPlayed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"a":1,"n":"_tCard","t":4,"rt":Card,"sn":"_tCard"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_texCoins","t":4,"rt":$n[4].Text,"sn":"_texCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"episode4_1","t":4,"rt":Episode4_1,"sn":"episode4_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"episode5_2","t":4,"rt":Episode5_2,"sn":"episode5_2"}]}; }, $n);
    /*Episode5_1 end.*/

    /*Episode5_2 start.*/
    $m("Episode5_2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].Void},{"a":1,"n":"DestroyingEnemies","t":8,"sn":"DestroyingEnemies","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":2,"n":"InitialiseCards","t":8,"pi":[{"n":"card1","pt":Card,"ps":0}],"sn":"InitialiseCards","rt":$n[2].Void,"p":[Card]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[1].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[1].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone1","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone2","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone3","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone4","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone4"},{"a":1,"n":"_cardDracone5","t":4,"rt":Card,"sn":"_cardDracone5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem4","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem5","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem6","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem7","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem7"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winDefeat","t":4,"rt":$n[1].GameObject,"sn":"_winDefeat"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winFinal","t":4,"rt":$n[1].GameObject,"sn":"_winFinal"}]}; }, $n);
    /*Episode5_2 end.*/

    /*Episode5 start.*/
    $m("Episode5", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_1","t":4,"rt":$n[1].GameObject,"sn":"_card1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_1_2","t":4,"rt":$n[1].GameObject,"sn":"_card1_1_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_2_2","t":4,"rt":$n[1].GameObject,"sn":"_card1_2_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_3_2","t":4,"rt":$n[1].GameObject,"sn":"_card1_3_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card2_1","t":4,"rt":$n[1].GameObject,"sn":"_card2_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsText","t":4,"rt":$n[4].Text,"sn":"_coinsText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode5 end.*/

    /*Episode6 start.*/
    $m("Episode6", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveObjectTo","t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[2].Single,"ps":2}],"sn":"MoveObjectTo","rt":$n[0].IEnumerator,"p":[$n[1].GameObject,$n[1].Vector3,$n[2].Single]},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[1].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cart","t":4,"rt":$n[1].GameObject,"sn":"_cart"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cartPoint","t":4,"rt":$n[1].GameObject,"sn":"_cartPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsText","t":4,"rt":$n[4].Text,"sn":"_coinsText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleCards","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleCards"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[4].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[1].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[4].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[1].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode6 end.*/

    /*Episode7 start.*/
    $m("Episode7", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].Void},{"a":1,"n":"DestroyingEnemies","t":8,"sn":"DestroyingEnemies","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[1].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[1].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye4","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye5","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye6","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleDragon","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleDragon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem4","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem5","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem6","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem6"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winFinal","t":4,"rt":$n[1].GameObject,"sn":"_winFinal"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winVictoty","t":4,"rt":$n[1].GameObject,"sn":"_winVictoty"}]}; }, $n);
    /*Episode7 end.*/

    /*Scenario start.*/
    $m("Scenario", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckingCombat","t":8,"pi":[{"n":"card","pt":Card,"ps":0}],"sn":"CheckingCombat","rt":$n[2].Void,"p":[Card]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[2].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"TurnEpisode2","t":8,"sn":"TurnEpisode2","rt":$n[2].Void},{"a":1,"n":"TurnEpisode3","t":8,"sn":"TurnEpisode3","rt":$n[2].Void},{"a":1,"n":"TurnEpisode4And4_1","t":8,"sn":"TurnEpisode4And4_1","rt":$n[2].Void},{"a":1,"n":"TurnEpisode5And5_1","t":8,"sn":"TurnEpisode5And5_1","rt":$n[2].Void},{"a":1,"n":"TurnEpisode6","t":8,"sn":"TurnEpisode6","rt":$n[2].Void},{"a":1,"n":"TurnEpisode7","t":8,"sn":"TurnEpisode7","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1__1","t":4,"rt":Card,"sn":"_card1__1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1__2","t":4,"rt":Card,"sn":"_card1__2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1__3","t":4,"rt":Card,"sn":"_card1__3"},{"a":1,"n":"_cardsTaken","t":4,"rt":$n[2].Int32,"sn":"_cardsTaken","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsText","t":4,"rt":$n[4].Text,"sn":"_coinsText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode1","t":4,"rt":Episode1,"sn":"_episode1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode2","t":4,"rt":Episode2,"sn":"_episode2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode3","t":4,"rt":Episode3,"sn":"_episode3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode4","t":4,"rt":Episode4,"sn":"_episode4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode4_1","t":4,"rt":Episode4_1,"sn":"_episode4_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode4_2","t":4,"rt":Episode4_2,"sn":"_episode4_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode5","t":4,"rt":Episode5,"sn":"_episode5"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode5_1","t":4,"rt":Episode5_1,"sn":"_episode5_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode6","t":4,"rt":Episode6,"sn":"_episode6"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode7","t":4,"rt":Episode7,"sn":"_episode7"},{"a":1,"n":"_taken","t":4,"rt":$n[2].Boolean,"sn":"_taken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_takencard1","t":4,"rt":Card,"sn":"_takencard1"},{"a":1,"n":"_takencard2","t":4,"rt":Card,"sn":"_takencard2"}]}; }, $n);
    /*Scenario end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
