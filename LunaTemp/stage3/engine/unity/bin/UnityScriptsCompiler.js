if ( TRACE ) { TRACE( JSON.parse( '["Episode1#init","Episode1#OnEnable","Episode1#OnPointerClick","Episode1#AnimateCard","Episode1#ScaleTo","Episode1#MoveTo","Episode2#init","Episode2#OnEnable","Episode2#OnPointerClick","Episode2#AnimateCard","Episode2#ScaleTo","Episode2#MoveTo","Episode3#Awake","Episode3#OnEnable","Episode3#OnPointerClick","Episode3#Battle","Episode3#DestroyingEnemies","Episode3#FadeInVictory","Episode4#init","Episode4#OnEnable","Episode4#OnPointerClick","Episode4#AnimateCard","Episode4#ScaleTo","Episode4#MoveTo","Episode5#OnPointerClick","Scenario#OnEnable","Scenario#OnDisable","Scenario#Start","Scenario#TurnEpisode2","Scenario#TurnEpisode3","Scenario#TurnEpisode4","Scenario#TurnEpisode5"]' ) ); }
/**
 * @version 1.0.9247.20495
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

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

                this._button.SetActive(true);
            },
            /*Episode3.OnEnable end.*/

            /*Episode3.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode3#OnPointerClick", this ); }

                this.Battle();
                this._button.SetActive(false);
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
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
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

    /*Episode5 start.*/
    Bridge.define("Episode5", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            _card1_1_2: null,
            _card1_2_2: null,
            _card1_3_2: null,
            _card1_1: null,
            _card2_1: null,
            _coinsText: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
            /*Episode5.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "Episode5#OnPointerClick", this ); }

                this._coinsText.text = "3";

                this._card1_1.SetActive(false);
                this._card2_1.SetActive(false);

                this._card1_1_2.SetActive(true);
                this._card1_2_2.SetActive(true);
                this._card1_3_2.SetActive(true);
            },
            /*Episode5.OnPointerClick end.*/


        }
    });
    /*Episode5 end.*/

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
            _episode5: null
        },
        methods: {
            /*Scenario.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Scenario#OnEnable", this ); }

                this._episode1.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
                this._episode3.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode4));
                this._episode4.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode5));
            },
            /*Scenario.OnEnable end.*/

            /*Scenario.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Scenario#OnDisable", this ); }

                this._episode1.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
                this._episode3.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode4));
                this._episode4.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode5));
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
                this._episode4.gameObject.SetActive(true);
            },
            /*Scenario.TurnEpisode4 end.*/

            /*Scenario.TurnEpisode5 start.*/
            TurnEpisode5: function () {
if ( TRACE ) { TRACE( "Scenario#TurnEpisode5", this ); }

                this._episode4.enabled = false;
                this._episode5.enabled = true;
            },
            /*Scenario.TurnEpisode5 end.*/


        }
    });
    /*Scenario end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System.Collections","UnityEngine","System","UnityEngine.EventSystems","UnityEngine.UI"];

    /*Episode1 start.*/
    $m("Episode1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[1].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[4].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[1].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[4].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[1].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit","t":4,"rt":$n[1].RectTransform,"sn":"_unit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode1 end.*/

    /*Episode2 start.*/
    $m("Episode2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[1].GameObject,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage","t":4,"rt":$n[4].Text,"sn":"_textDamage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textDamage2","t":4,"rt":$n[1].GameObject,"sn":"_textDamage2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth","t":4,"rt":$n[4].Text,"sn":"_textHealth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textHealth2","t":4,"rt":$n[1].GameObject,"sn":"_textHealth2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit1","t":4,"rt":$n[1].RectTransform,"sn":"_unit1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unit2","t":4,"rt":$n[1].RectTransform,"sn":"_unit2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode2 end.*/

    /*Episode3 start.*/
    $m("Episode3", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].Void},{"a":1,"n":"DestroyingEnemies","t":8,"sn":"DestroyingEnemies","rt":$n[0].IEnumerator},{"a":1,"n":"FadeInVictory","t":8,"sn":"FadeInVictory","rt":$n[0].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[1].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[1].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDracone","t":4,"rt":$n[1].GameObject,"sn":"_cardDracone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye1","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye2","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardEnemye3","t":4,"rt":$n[1].GameObject,"sn":"_cardEnemye3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_point","t":4,"rt":$n[1].RectTransform,"sn":"_point"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"a":1,"n":"_victoryCanvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"_victoryCanvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_winVictoty","t":4,"rt":$n[1].GameObject,"sn":"_winVictoty"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode3 end.*/

    /*Episode4 start.*/
    $m("Episode4", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCard","t":8,"sn":"AnimateCard","rt":$n[0].IEnumerator},{"a":1,"n":"MoveTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"ScaleTo","rt":$n[0].IEnumerator,"p":[$n[1].Vector3,$n[2].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm3_3","t":4,"rt":$n[1].GameObject,"sn":"_arm3_3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone","t":4,"rt":$n[1].GameObject,"sn":"_cardDragcone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone1_1","t":4,"rt":$n[1].GameObject,"sn":"_cardDragcone1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cardDragcone2_2","t":4,"rt":$n[1].GameObject,"sn":"_cardDragcone2_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_points","t":4,"rt":$n[1].RectTransform,"sn":"_points"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopButton","t":4,"rt":$n[1].GameObject,"sn":"_shopButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textCoins","t":4,"rt":$n[4].Text,"sn":"_textCoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalLocalPosition","t":4,"rt":$n[1].Vector3,"sn":"originalLocalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[1].Vector3,"sn":"originalScale"},{"a":1,"n":"rectTransform","t":4,"rt":$n[1].RectTransform,"sn":"rectTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[2].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[1].Vector3,"sn":"targetScale"},{"a":2,"n":"End","t":2,"ad":{"a":2,"n":"add_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnd","rt":$n[2].Void,"p":[Function]},"r":{"a":2,"n":"remove_End","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnd","rt":$n[2].Void,"p":[Function]}}]}; }, $n);
    /*Episode4 end.*/

    /*Episode5 start.*/
    $m("Episode5", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_1","t":4,"rt":$n[1].GameObject,"sn":"_card1_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_1_2","t":4,"rt":$n[1].GameObject,"sn":"_card1_1_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_2_2","t":4,"rt":$n[1].GameObject,"sn":"_card1_2_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card1_3_2","t":4,"rt":$n[1].GameObject,"sn":"_card1_3_2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_card2_1","t":4,"rt":$n[1].GameObject,"sn":"_card2_1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinsText","t":4,"rt":$n[4].Text,"sn":"_coinsText"}]}; }, $n);
    /*Episode5 end.*/

    /*Scenario start.*/
    $m("Scenario", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[2].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"TurnEpisode2","t":8,"sn":"TurnEpisode2","rt":$n[2].Void},{"a":1,"n":"TurnEpisode3","t":8,"sn":"TurnEpisode3","rt":$n[2].Void},{"a":1,"n":"TurnEpisode4","t":8,"sn":"TurnEpisode4","rt":$n[2].Void},{"a":1,"n":"TurnEpisode5","t":8,"sn":"TurnEpisode5","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode1","t":4,"rt":Episode1,"sn":"_episode1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode2","t":4,"rt":Episode2,"sn":"_episode2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode3","t":4,"rt":Episode3,"sn":"_episode3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode4","t":4,"rt":Episode4,"sn":"_episode4"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode5","t":4,"rt":Episode5,"sn":"_episode5"}]}; }, $n);
    /*Scenario end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
