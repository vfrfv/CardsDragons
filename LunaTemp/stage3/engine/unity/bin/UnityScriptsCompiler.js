if ( TRACE ) { TRACE( JSON.parse( '["Episode1#init","Episode1#OnEnable","Episode1#OnPointerClick","Episode1#AnimateCard","Episode1#ScaleTo","Episode1#MoveTo","Episode2#init","Episode2#OnEnable","Episode2#OnPointerClick","Episode2#AnimateCard","Episode2#ScaleTo","Episode2#MoveTo","Episode3#OnEnable","Episode3#OnPointerClick","Episode3#Battle","Scenario#OnEnable","Scenario#OnDisable","Scenario#Start","Scenario#TurnEpisode2","Scenario#TurnEpisode3"]' ) ); }
/**
 * @version 1.0.9246.31633
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
            _particleSystem1: null,
            _particleSystem2: null,
            _particleSystem3: null
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        methods: {
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

                this._battle.gameObject.SetActive(true);
            },
            /*Episode3.Battle end.*/


        }
    });
    /*Episode3 end.*/

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
            _episode3: null
        },
        methods: {
            /*Scenario.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Scenario#OnEnable", this ); }

                this._episode1.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
            },
            /*Scenario.OnEnable end.*/

            /*Scenario.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Scenario#OnDisable", this ); }

                this._episode1.removeEnd(Bridge.fn.cacheBind(this, this.TurnEpisode2));
                this._episode2.addEnd(Bridge.fn.cacheBind(this, this.TurnEpisode3));
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
    $m("Episode3", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[2].Void,"p":[$n[3].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_battle","t":4,"rt":$n[1].GameObject,"sn":"_battle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[1].GameObject,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem1","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem2","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem3","t":4,"rt":$n[1].ParticleSystem,"sn":"_particleSystem3"}]}; }, $n);
    /*Episode3 end.*/

    /*Scenario start.*/
    $m("Scenario", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[2].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[2].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"TurnEpisode2","t":8,"sn":"TurnEpisode2","rt":$n[2].Void},{"a":1,"n":"TurnEpisode3","t":8,"sn":"TurnEpisode3","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode1","t":4,"rt":Episode1,"sn":"_episode1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode2","t":4,"rt":Episode2,"sn":"_episode2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_episode3","t":4,"rt":Episode3,"sn":"_episode3"}]}; }, $n);
    /*Scenario end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
