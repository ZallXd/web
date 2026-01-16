(function(g) {
    var window = this;
    'use strict';
    var Wk3 = function(f, k, K) {
            g.L(function(N) {
                f.D = g.uO(k, K);
                g.vJ(N)
            })
        },
        nq = function(f) {
            f.isActive() || f.start()
        },
        Cor = function(f, k) {
            return k ? f.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        of7 = function(f) {
            return g.xp(f) || f.Z("web_enable_caption_language_preference_stickiness")
        },
        YE5 = function(f, k) {
            var K = new g.q_;
            K.languageCode = f.languageCode;
            K.languageName = f.languageName;
            K.name = f.name;
            K.displayName = f.displayName;
            K.kind = f.kind;
            K.isDefault = !1;
            K.G = f.G;
            K.isTranslateable = f.isTranslateable;
            K.vssId = f.vssId;
            K.url = f.url;
            K.translationLanguage = k;
            f.xtags && (K.xtags = f.xtags);
            f.captionId && (K.captionId = f.captionId);
            return K
        },
        JCi = function(f, k) {
            var K, N, v;
            return g.L(function(M) {
                if (M.G == 1) return K = f + "|" + k, g.e(M, g.f1(), 2);
                if (M.G != 3) {
                    N = M.D;
                    if (!N) throw g.od("gct");
                    return g.e(M, g.fs(N), 3)
                }
                v = M.D;
                return M.return(v.get("captions", K))
            })
        },
        Rdc = function(f, k, K) {
            JCi(f, k).then(function(N) {
                N && K(N.trackData, new g.q_(N.metadata))
            })
        },
        hdp = function(f) {
            if (!BMJ.test(f)) throw Error("'" + f + "' is not a valid hex color");
            f.length == 4 && (f = f.replace(cC7, "#$1$1$2$2$3$3"));
            f = f.toLowerCase();
            f = parseInt(f.slice(1), 16);
            return [f >> 16, f >> 8 & 255, f & 255]
        },
        ZB5 = function() {
            var f = void 0;
            f = f === void 0 ? {} : f;
            var k = "suggest_correction" in g.z4v ? g.z4v.suggest_correction : "Edit caption";
            k = k || "";
            var K = {},
                N;
            for (N in f) {
                K = {
                    rJ: K.rJ
                };
                K.rJ = N;
                var v = function(M) {
                    return function() {
                        return String(f[M.rJ])
                    }
                }(K);
                k = k.replace(new RegExp("\\$\\{" + K.rJ + "\\}", "gi"), v);
                k = k.replace(new RegExp("\\$" + K.rJ, "gi"), v)
            }
            return k
        },
        qEh = function() {
            return g.Eo("yt-player-caption-display-settings")
        },
        Xr7 = function(f) {
            g.rK.call(this, f);
            this.D = new Set
        },
        O5 = function() {
            this.segments = []
        },
        uO1 = function(f, k) {
            var K = g.xN(f.segments, k);
            K >= 0 || K < 0 && (-K - 1) % 2 === 1 || (K = -K - 1, K > 0 && k - f.segments[K - 1] === 1 && K < f.segments.length && f.segments[K] - k === 1 ? (g.kN(f.segments, K), g.kN(f.segments, K - 1)) : K > 0 && k - f.segments[K - 1] === 1 ? f.segments[K - 1] = k : K < f.segments.length && f.segments[K] - k === 1 ? f.segments[K] = k : (g.mx(f.segments, K, 0, k), g.mx(f.segments, K + 1, 0, k)))
        },
        aL7 = function(f, k, K, N, v, M) {
            g.A.call(this);
            this.policy = f;
            this.player = k;
            this.sC = K;
            this.j = N;
            this.J = v;
            this.Fj = M;
            this.V = new O5;
            this.T = -1;
            this.D = this.Y = this.G = null;
            this.xn = 0;
            this.X = new g.K_(this.DC, 1E3, this);
            this.events = new g.to(this);
            g.E(this, this.X);
            g.E(this, this.events);
            this.events.C(k, "SEEK_COMPLETE", this.zD);
            this.zD();
            this.DC()
        },
        ed7 = function(f) {
            return f.G && f.G.J ? f.G.J + f.player.WO() < f.player.getCurrentTime() : !1
        },
        Lk7 = function(f, k) {
            if (f.policy.ND && f.player.Yf()) {
                var K = g.wt(k, f.policy, {});
                K.set("pot", f.player.Yf());
                K = K.At()
            } else K = g.wt(k, f.policy, {}).At();
            var N = {
                format: "RAW",
                withCredentials: !0
            };
            if (f.policy.Zw) {
                N.method = "POST";
                var v = k.V;
                v && Object.keys(v).length > 0 ? N.postBody = g.II(v, g.Rh) : N.postBody = (0, g.$s)([120, 0])
            }
            f.J && (N.responseType = "arraybuffer");
            var M = ++f.xn,
                H = (0, g.hz)();
            f.D = g.jC(K, N, 3, 100, -1, function(U) {
                U.errorCode === "net.timeout" && f.player.Dw("capnt", {
                    rn: M++
                })
            }).then(function(U) {
                if (f.policy.e2 && M % 100 === 1) {
                    var S = (0, g.hz)();
                    f.player.Dw("caprsp", {
                        rn: M,
                        ms: S - H,
                        kb: (U.xhr.responseText.length / 1024).toFixed()
                    })
                }
                a: {
                    U = U.xhr;f.r9();
                    if (f.Y) {
                        var b = !(f.J ? U.response : U.responseText) || U.status >= 400;
                        if (S = g.uIA(U)) {
                            U = g.wt(f.Y, f.policy, {});
                            f.Y.UL(U, S);
                            Lk7(f, f.Y);
                            break a
                        }
                        if (b) f.player.Dw("capfail", {
                            status: U.status
                        });
                        else {
                            var m;
                            g.sH("fcb_r", (0, g.hz)(), ((m = f.player.getVideoData()) == null ? void 0 : m.Fj) || "");
                            m = f.Y.w9[0];
                            S = m.OC;
                            f.j != null && f.T !== S && (f.J ? f.j(U.response, (m.startTime + f.player.WO()) * 1E3) : f.j(U.responseText, (m.startTime + f.player.WO()) *
                                1E3), f.T = S)
                        }
                    }
                    f.Y = null;f.D = null
                }
            }).H3(function(U) {
                f.Y = null;
                f.D = null;
                var S;
                f.player.Dw("capfail", {
                    rn: M,
                    status: (S = U.xhr) == null ? void 0 : S.status
                })
            });
            f.Y = k;
            uO1(f.V, f.Y.w9[0].OC)
        },
        xV = function(f, k) {
            g.rK.call(this, k);
            this.D = f;
            this.L = k;
            this.V = null;
            this.T = !1;
            this.logger = new g.cx("caps");
            this.X = g.dOM(this.L, this.D)
        },
        prq = function(f, k) {
            var K = [],
                N;
            for (N in f.D.G)
                if (f.D.G.hasOwnProperty(N)) {
                    var v = f.D.G[N];
                    if (g.GY(v, k || null)) {
                        var M = v.info.id,
                            H = M,
                            U = "." + M,
                            S = "",
                            b = "";
                        if (v = v.info.captionTrack) M = v.languageCode, H = v.displayName, U = v.vssId, S = v.kind, b = v.id;
                        else {
                            v = M;
                            var m = g.w0c.get(v);
                            m == null && (m = jjh[v] || jjh[v.replace(/-/g, "_")], g.w0c.set(v, m));
                            v = m;
                            H = v || H
                        }
                        K.push(new g.q_({
                            id: N,
                            languageCode: M,
                            languageName: H,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: U,
                            kind: S,
                            captionId: b
                        }))
                    }
                }
            return K
        },
        sj7 = function(f, k) {
            return k != null && k in f.D.G ? f.D.G[k] : null
        },
        ACq = function(f, k, K) {
            var N = [],
                v;
            for (v in f.D.G)
                if (f.D.G.hasOwnProperty(v)) {
                    var M = f.D.G[v];
                    if (g.GY(M, K || null)) {
                        var H = M.info.captionTrack;
                        H && H.languageCode === k && N.push(M)
                    }
                }
            return N.length ? N[0] : null
        },
        gX = function(f, k, K, N, v, M, H, U, S, b) {
            var m = b.isInline() && !0,
                n = {};
            Object.assign(n, k);
            Object.assign(n, f.params);
            Object.assign(n, K);
            var x = {};
            Object.assign(x, k.I2);
            f.params.I2 && Object.assign(x, f.params.I2);
            Object.assign(x, K.I2);
            m && (n.windowOpacity = .6, x.backgroundOpacity = 0);
            n.I2 = x;
            var O = n.eK === 1,
                d = [{
                    B: "span",
                    W: "captions-text",
                    N: {
                        style: "word-wrap: normal; display: block;"
                    }
                }],
                G, W, J;
            (U = U.PH("caption_edit_on_hover") && ((G = b.getVideoData().getPlayerResponse()) == null ? void 0 : (W = G.captions) == null ? void 0 : (J = W.playerCaptionsTracklistRenderer) == null ? void 0 : J.openTranscriptCommand)) &&
            d.unshift({
                B: "button",
                W: "caption-edit",
                N: {
                    tabindex: "0",
                    "aria-label": ZB5()
                },
                S: [{
                    B: "svg",
                    N: {
                        fill: "#e3e3e3",
                        height: "100%",
                        viewBox: "5 5 38 38",
                        width: "100%"
                    },
                    S: [{
                        B: "path",
                        N: {
                            d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                        }
                    }]
                }]
            });
            g.D.call(this, {
                B: "div",
                W: "caption-window",
                N: {
                    id: "caption-window-" + f.id,
                    dir: O ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: n.lang
                },
                S: d
            });
            var c =
                this;
            this.T = [];
            this.cH = !1;
            this.D = f;
            this.L9 = this.QD = null;
            this.F7 = M;
            this.KN = H;
            this.X = null;
            this.maxWidth = M * .96;
            this.maxHeight = H * .96;
            this.G = n;
            this.z3 = K;
            this.Yn = k;
            this.V = this.hL("captions-text");
            this.aM = this.V.style.getPropertyValue("box-decoration-break") !== "" || this.V.style.getPropertyValue("-webkit-box-decoration-break") !== "";
            this.Mx = Efv(N, v, M, H);
            this.YX = S;
            U && (this.J = this.hL("caption-edit"), this.C(this.J, "click", function() {
                c.YX()
            }));
            this.type = 0;
            this.Xj = this.Mx * Fk5(x);
            this.g9 = m;
            f = new g.hx(this.element, !0);
            g.E(this, f);
            f.subscribe("dragstart", this.qV, this);
            f.subscribe("dragmove", this.Cf, this);
            f.subscribe("dragend", this.X2, this);
            this.Sz = this.qx = this.vH = this.u2 = 0;
            f = "";
            this.G.windowOpacity && (f = hdp(this.G.windowColor), f = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + this.G.windowOpacity + ")");
            k = {
                "background-color": f,
                display: this.G.isVisible === !1 ? "none" : "",
                "text-align": Poi[this.G.textAlign]
            };
            this.aM && (k["border-radius"] = f ? this.Xj / 8 + "px" : "");
            (this.Y =
                this.D.params.eK === 2 || this.D.params.eK === 3) && DBW(this, this.element);
            g.vr(this.element, k);
            if (m) {
                var Z;
                (Z = this.element.parentElement) == null || Z.style.setProperty("--caption-window-color", f)
            }
            switch (this.G.LF) {
                case 0:
                case 1:
                case 2:
                    g.n_(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.n_(this.element, "ytp-caption-window-bottom")
            }
        },
        DBW = function(f, k) {
            var K = "vertical-rl";
            f.G.kA === 1 && (K = "vertical-lr");
            g.Ga && (K = K === "vertical-lr" ? "tb-lr" : "tb-rl");
            g.vr(k, "-o-writing-mode", K);
            g.vr(k, "-webkit-writing-mode", K);
            g.vr(k, "writing-mode", K);
            g.vr(k, "text-orientation", "upright");
            g.n_(k, "ytp-vertical-caption");
            f.D.params.eK === 3 && (g.vr(k, "text-orientation", ""), g.vr(k, "transform", "rotate(180deg)"))
        },
        Fk5 = function(f) {
            var k = 1 + .25 * (f.fontSizeIncrement || 0);
            if (f.offset === 0 || f.offset === 2) k *= .8;
            return k
        },
        QjJ = function(f, k) {
            var K = {},
                N = k.background ? k.background : f.G.I2.background;
            if (k.backgroundOpacity != null || k.background) {
                var v = k.backgroundOpacity != null ? k.backgroundOpacity : f.G.I2.backgroundOpacity;
                N = hdp(N);
                K.background = "rgba(" + N[0] + "," + N[1] + "," + N[2] + "," + v + ")";
                f.aM && (K["box-decoration-break"] = "clone", K["border-radius"] = f.Xj / 8 + "px")
            }
            if (k.fontSizeIncrement != null || k.offset != null) K["font-size"] = f.Mx * Fk5(k) + "px";
            N = 1;
            v = k.color || f.G.I2.color;
            if (k.color || k.textOpacity != null) v = hdp(v), N = k.textOpacity == null ? f.G.I2.textOpacity : k.textOpacity, v = "rgba(" + v[0] + "," + v[1] + "," + v[2] + "," + N + ")",
                K.color = v, K.fill = v;
            var M = k.charEdgeStyle;
            M === 0 && (M = void 0);
            if (M) {
                v = "rgba(34, 34, 34, " + N + ")";
                var H = "rgba(204, 204, 204, " + N + ")";
                k.Pf && (H = v = k.Pf);
                var U = f.Mx / 16 / 2,
                    S = Math.max(U, 1),
                    b = Math.max(2 * U, 1),
                    m = Math.max(3 * U, 1),
                    n = Math.max(5 * U, 1);
                N = [];
                switch (M) {
                    case 4:
                        for (; m <= n; m += U) N.push(b + "px " + b + "px " + m + "px " + v);
                        break;
                    case 1:
                        b = window.devicePixelRatio >= 2 ? .5 : 1;
                        for (M = S; M <= m; M += b) N.push(M + "px " + M + "px " + v);
                        break;
                    case 2:
                        N.push(S + "px " + S + "px " + H);
                        N.push("-" + S + "px -" + S + "px " + v);
                        break;
                    case 3:
                        for (m = 0; m < 5; m++) N.push("0 0 " +
                            b + "px " + v)
                }
                K["text-shadow"] = N.join(", ")
            }
            v = "";
            switch (k.fontFamily) {
                case 1:
                    v = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    v = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    v = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    v = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    v = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    v = g.ka() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : 'Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    v = '"YouTube Noto", Roboto, Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            v && (K["font-family"] = v);
            v = k.offset;
            v == null && (v = f.G.I2.offset);
            switch (v) {
                case 0:
                    K["vertical-align"] = "sub";
                    break;
                case 2:
                    K["vertical-align"] = "super"
            }
            k.fontFamily === 7 && (K["font-variant"] = "small-caps");
            k.bold && (K["font-weight"] = "bold");
            k.italic && (K["font-style"] = "italic");
            k.underline && (K["text-decoration"] =
                "underline");
            k.N9w && (K.visibility = "hidden");
            k.Jr === 1 && f.Y && (K["text-combine-upright"] = "all", K["text-orientation"] = "mixed", v = g.rC || g.Wk, f.D.params.eK === 3 ? K.transform = v ? "rotate(90deg)" : "rotate(180deg)" : v && (K.transform = "rotate(-90deg)"));
            if (k.textEmphasis === 1 || k.textEmphasis === 2 || k.textEmphasis === 3 || k.textEmphasis === 4 || k.textEmphasis === 5)
                if (g.rC) K["font-weight"] = "bold";
                else switch (K["text-emphasis-style"] = "filled circle", K["text-emphasis-color"] = "currentcolor", K["webkit-text-emphasis"] = "filled circle",
                    k.textEmphasis) {
                    case 4:
                    case 3:
                        K["text-emphasis-position"] = "under left";
                        K["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        K["text-emphasis-position"] = "over right", K["webkit-text-emphasis-position"] = "over right"
                }
            return K
        },
        dX = function(f) {
            f = f.split("px");
            return f.length > 0 ? (f = Number(f[0])) ? f : 0 : 0
        },
        VYh = function(f) {
            f.X = g.h$("SPAN");
            g.vr(f.X, {
                display: "block"
            });
            g.n_(f.X, "caption-visual-line");
            f.V.appendChild(f.X)
        },
        $Br = function(f, k) {
            var K = g.h$("SPAN");
            g.vr(K, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.vr(K, QjJ(f, k));
            K.classList.add("ytp-caption-segment");
            f.X.appendChild(K);
            K.previousElementSibling && (g.vr(K.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.vr(K, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return K
        },
        ILW = function(f, k, K) {
            f.cH = f.cH || !!K;
            var N = {};
            Object.assign(N, f.G.I2);
            Object.assign(N, K || k.G);
            Object.assign(N, f.z3.I2);
            (K = !f.X) && VYh(f);
            for (var v = f.QD && f.L9 && g.ug(N, f.L9) ? f.QD : $Br(f, N), M = typeof k.text === "string", H = M ? k.text.split("\n") : [k.text], U = 0; U < H.length; U++) {
                var S = U > 0 || !k.append,
                    b = H[U];
                S && !K ? (VYh(f), v = $Br(f, N)) : S && K && (K = !1);
                b && (v.appendChild(M ? g.ZF(b) : b), M || b.tagName !== "RUBY" || b.childElementCount !== 4 || g.rC || !g.Hr(b.children[2], "text-emphasis") || (S = f.Y ? "padding-right" : "padding-top", g.Hr(b.children[2], "text-emphasis-position") && (S =
                    f.Y ? "padding-left" : "padding-bottom"), g.J$ ? g.vr(v, S, "1em") : g.vr(v, S, "0.5em")))
            }
            f.L9 = N;
            f.QD = v;
            f.T.push(k)
        },
        Efv = function(f, k, K, N) {
            var v = k / 360 * 16;
            k >= f && (f = 640, N > K * 1.3 && (f = 480), v = K / f * 16);
            return v
        },
        zdq = function() {
            this.Y = this.time = this.mode = this.D = 0;
            this.V = new iB7(this);
            this.J = new iB7(this);
            this.G = [];
            this.clear()
        },
        fl5 = function(f, k, K) {
            if (f === 255 && k === 255 || !f && !k) return {
                Wy: f,
                XJ: k,
                result: 0
            };
            f = TM7[f];
            k = TM7[k];
            if (f & 128) {
                var N;
                if (N = !(k & 128)) N = k, N = K.Oe() && K.XJ === N;
                if (N) return {
                    Wy: f,
                    XJ: k,
                    result: 1
                }
            } else if (k & 128 && 1 <= f && f <= 31) return {
                Wy: f,
                XJ: k,
                result: 2
            };
            return {
                Wy: f,
                XJ: k,
                result: 3
            }
        },
        Krc = function(f, k, K, N) {
            k === 255 && K === 255 || !k && !K ? (++f.Y === 45 && f.reset(), f.V.D.clear(), f.J.D.clear()) : (f.Y = 0, kGi(f.V, k, K, N))
        },
        NE0 = function(f, k) {
            f.G.sort(function(v, M) {
                var H = v.time - M.time;
                return H === 0 ? v.order - M.order : H
            });
            for (var K = g.h(f.G), N = K.next(); !N.done; N = K.next()) N = N.value, f.time = N.time, N.type === 0 ? Krc(f, N.uv, N.P5, k) : N.type === 1 && f.D & 496 && kGi(f.J, N.uv, N.P5, k);
            f.G.length = 0
        },
        tq = function() {
            this.type = 0
        },
        rX = function() {
            this.state = this.XJ = this.Wy = 0
        },
        vGq = function() {
            this.timestamp = this.G = 0
        },
        wX = function(f) {
            this.J = f;
            this.Y = [];
            this.G = this.D = this.row = 0;
            this.style = new tq;
            for (f = this.V = 0; f <= 15; f++) {
                this.Y[f] = [];
                for (var k = 0; k <= 32; k++) this.Y[f][k] = new vGq
            }
        },
        Gv = function(f, k) {
            if (f.style.type === 3) {
                for (var K = 0, N = 0, v = f.J.time + 0, M = "", H = "", U = v, S = 1; S <= 15; ++S) {
                    for (var b = !1, m = N ? N : 1; m <= 32; ++m) {
                        var n = f.Y[S][m];
                        if (n.G !== 0) {
                            K === 0 && (K = S, N = m);
                            b = String.fromCharCode(n.G);
                            var x = n.timestamp;
                            x < v && (v = x);
                            n.timestamp = U;
                            H && (M += H, H = "");
                            M += b;
                            b = !0
                        }
                        if ((n.G === 0 || m === 32) && b) {
                            H = "\n";
                            break
                        } else if (N && !b) break
                    }
                    if (K && !b) break
                }
                M && k.V(K, N, v, U, M)
            } else
                for (N = K = 0, M = v = f.J.time + 0, H = 1; H <= 15; ++H)
                    for (U = "", S = 1; S <= 32; ++S)
                        if (m = f.Y[H][S], n = m.G, n !== 0 && (K === 0 && (K = H, N = S), b = String.fromCharCode(n), x = m.timestamp, x <= v && (v = x), U += b, m.reset()), S === 32 || n === 0) U && k.V(K, N, v, M, U), v = M, U = "", N = K = 0
        },
        S3p = function(f, k) {
            switch (f) {
                case 0:
                    return Meq[(k & 127) - 32];
                case 1:
                    return Hc3[k & 15];
                case 2:
                    return ll0[k & 31];
                case 3:
                    return UIJ[k & 31]
            }
            return 0
        },
        yI = function(f) {
            return f.Y[f.row][f.D]
        },
        Wv = function(f, k, K) {
            k >= 2 && f.D > 1 && (--f.D, yI(f).G = 0);
            var N = yI(f);
            N.timestamp = f.J.time + 0;
            N.G = S3p(k, K);
            f.D < 32 && f.D++
        },
        bc7 = function(f, k, K, N) {
            for (var v = 0; v < N; v++)
                for (var M = 0; M <= 32; M++) {
                    var H = f.Y[k + v][M],
                        U = f.Y[K + v][M];
                    H.G = U.G;
                    H.timestamp = U.timestamp
                }
        },
        Cq = function(f, k, K) {
            for (var N = 0; N < K; N++)
                for (var v = 0; v <= 32; v++) f.Y[k + N][v].reset()
        },
        mIc = function(f) {
            f.row = f.G > 0 ? f.G : 1;
            f.D = 1;
            Cq(f, 0, 15)
        },
        nG7 = function(f) {
            this.Y = f;
            this.J = 0;
            this.style = new tq;
            this.T = new wX(this.Y);
            this.X = new wX(this.Y);
            this.text = new wX(this.Y);
            this.D = this.T;
            this.V = this.X;
            this.G = this.D
        },
        Occ = function(f, k, K) {
            var N = f.D,
                v = !1;
            switch (f.style.get()) {
                case 4:
                case 1:
                case 2:
                    f.style.get() === 4 && N.G > 0 || (Gv(N, K), mIc(f.D), mIc(f.V), N.row = 15, N.G = k, v = !0)
            }
            f.style.set(3);
            f.G = N;
            f.G.style = f.style;
            f.Y.mode = 1 << N.V;
            v ? N.D = 1 : N.G !== k && (N.G > k ? (Gv(N, K), Cq(N, N.row - N.G, k)) : N.row < k && (k = N.G), N.G = k)
        },
        xIJ = function(f) {
            f.style.set(1);
            f.G = f.V;
            f.G.G = 0;
            f.G.style = f.style;
            f.Y.mode = 1 << f.G.V
        },
        gG0 = function(f) {
            f.style.set(4);
            f.G = f.text;
            f.G.style = f.style;
            f.Y.mode = 1 << f.G.V
        },
        iB7 = function(f) {
            this.G = f;
            this.J = 0;
            this.Y = new nG7(this.G);
            this.T = new nG7(this.G);
            this.D = new rX;
            this.V = this.Y
        },
        kGi = function(f, k, K, N) {
            f.D.update();
            k = fl5(k, K, f.D);
            switch (k.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var v = k.Wy;
            K = k.XJ;
            if (32 <= v || !v) f.G.mode & f.G.D && (k = v, k & 128 && (k = 127), K & 128 && (K = 127), f = f.V.G, k & 96 && Wv(f, 0, k), K & 96 && Wv(f, 0, K), k !== 0 && K !== 0 && f.style.type === 3 && Gv(f, N));
            else if (v & 16) a: if (!f.D.matches(v, K) && (k = f.D, k.Wy = v, k.XJ = K, k.state = 2, k = v & 8 ? f.T : f.Y, f.V = k, f.G.mode = 1 << (f.J << 2) + (k.J << 1) + (k.style.type === 4 ? 1 : 0), (f.G.mode | 1 << (f.J << 2) + (k.J << 1) + (k.style.type !== 4 ? 1 : 0)) & f.G.D))
                if (K & 64) {
                    N = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(v & 7) << 1 | K >> 5 & 1];
                    f = K & 16 ? ((K & 14) >> 1) * 4 : 0;
                    K = k.G;
                    switch (k.style.get()) {
                        case 4:
                            N = K.row;
                            break;
                        case 3:
                            if (N !== K.row) {
                                if (N < K.G && (N = K.G, N === K.row)) break;
                                var M = 1 + K.row - K.G,
                                    H = 1 + N - K.G;
                                bc7(K, H, M, K.G);
                                k = M;
                                v = K.G;
                                H < M ? (M = H + v - M, M > 0 && (k += M, v -= M)) : (M = M + v - H, M > 0 && (v -= M));
                                Cq(K, k, v)
                            }
                    }
                    K.row = N;
                    K.D = f + 1
                } else switch (v & 7) {
                    case 1:
                        switch (K & 112) {
                            case 32:
                                Wv(k.G, 0, 32);
                                break a;
                            case 48:
                                K === 57 ? (N = k.G, yI(N).G = 0, N.D < 32 && N.D++) : Wv(k.G, 1, K & 15)
                        }
                        break;
                    case 2:
                        K & 32 && Wv(k.G, 2, K & 31);
                        break;
                    case 3:
                        K & 32 && Wv(k.G, 3, K & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= K && K <= 47) switch (K) {
                            case 32:
                                xIJ(k);
                                break;
                            case 33:
                                N = k.G;
                                N.D > 1 && (--N.D, yI(N).G = 0);
                                break;
                            case 36:
                                N = k.G;
                                k = yI(N);
                                for (f = 0; f <= 15; f++)
                                    for (K = 0; K <= 32; K++)
                                        if (N.Y[f][K] === k) {
                                            for (; K <= 32; K++) N.Y[f][K].reset();
                                            break
                                        }
                                break;
                            case 37:
                                Occ(k, 2, N);
                                break;
                            case 38:
                                Occ(k, 3, N);
                                break;
                            case 39:
                                Occ(k, 4, N);
                                break;
                            case 40:
                                Wv(k.G, 0, 32);
                                break;
                            case 41:
                                k.style.set(2);
                                k.G = k.D;
                                k.G.G = 0;
                                k.G.style = k.style;
                                k.Y.mode = 1 << k.G.V;
                                break;
                            case 42:
                                N = k.text;
                                N.G = 15;
                                N.style.set(4);
                                mIc(N);
                                gG0(k);
                                break;
                            case 43:
                                gG0(k);
                                break;
                            case 44:
                                f = k.D;
                                switch (k.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        Gv(f, N)
                                }
                                Cq(f,
                                    0, 15);
                                break;
                            case 45:
                                b: {
                                    f = k.G;
                                    switch (k.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (f.row < 15) {
                                                ++f.row;
                                                f.D = 1;
                                                break b
                                            }break;
                                        case 3:
                                    }
                                    f.G < 2 && (f.G = 2, f.row < f.G && (f.row = f.G));k = f.row - f.G + 1;Gv(f, N);bc7(f, k, k + 1, f.G - 1);Cq(f, f.row, 1)
                                }
                                break;
                            case 46:
                                Cq(k.V, 0, 15);
                                break;
                            case 47:
                                Gv(k.D, N), k.V.updateTime(k.Y.time + 0), N = k.V, k.V = k.D, k.D = N, xIJ(k)
                        }
                        break;
                    case 7:
                        switch (K) {
                            case 33:
                            case 34:
                            case 35:
                                N = k.G, (N.D += K & 3) > 32 && (N.D = 32)
                        }
                }
        },
        dIh = function() {},
        oz = function(f, k, K, N, v, M, H) {
            M = M === void 0 ? !1 : M;
            H = H === void 0 ? null : H;
            g.QR.call(this, f, f + k, {
                priority: K,
                namespace: "captions"
            });
            this.windowId = N;
            this.text = v;
            this.append = M;
            this.G = H
        },
        rm4 = function(f, k, K, N, v, M, H) {
            var U = M[0],
                S = H[U.getAttribute("p")];
            if (S.lz === 1) {
                var b = M[1],
                    m = M[2];
                M = M[3];
                U.getAttribute("t");
                b.getAttribute("t");
                m.getAttribute("t");
                M.getAttribute("t");
                U.getAttribute("p");
                b.getAttribute("p");
                M.getAttribute("p");
                H = H[m.getAttribute("p")];
                U = teJ(U.textContent, b.textContent, m.textContent, M.textContent, H);
                return new oz(f, k, v, K, U, N, S)
            }
            switch (S.lz) {
                case 9:
                case 10:
                    S.textEmphasis = 1;
                    break;
                case 11:
                    S.textEmphasis = 2;
                    break;
                case 12:
                    S.textEmphasis = 3;
                    break;
                case 13:
                    S.textEmphasis = 4;
                    break;
                case 14:
                    S.textEmphasis = 5
            }
            return new oz(f, k, v, K, U.textContent ||
                "", N, S)
        },
        teJ = function(f, k, K, N, v) {
            var M = g.ka(),
                H = M ? g.h$("DIV") : g.h$("RUBY"),
                U = g.h$("SPAN");
            U.textContent = f;
            H.appendChild(U);
            f = M ? g.h$("DIV") : g.h$("RP");
            f.textContent = k;
            H.appendChild(f);
            k = M ? g.h$("DIV") : g.h$("RT");
            k.textContent = K;
            H.appendChild(k);
            K = v.lz;
            if (K === 10 || K === 11 || K === 12 || K === 13 || K === 14)
                if (g.vr(k, "text-emphasis-style", "filled circle"), g.vr(k, "text-emphasis-color", "currentcolor"), g.vr(k, "webkit-text-emphasis", "filled circle"), v.lz === 11 || v.lz === 13) g.vr(k, "webkit-text-emphasis-position", "under left"), g.vr(k, "text-emphasis-position", "under left");
            K = !0;
            if (v.lz === 4 || v.lz === 7 || v.lz === 12 ||
                v.lz === 14) g.vr(H, "ruby-position", "over"), g.vr(H, "-webkit-ruby-position", "before");
            else if (v.lz === 5 || v.lz === 6 || v.lz === 11 || v.lz === 13) g.vr(H, "ruby-position", "under"), g.vr(H, "-webkit-ruby-position", "after"), K = !1;
            v = M ? g.h$("DIV") : g.h$("RP");
            v.textContent = N;
            H.appendChild(v);
            M && (N = K, g.vr(H, {
                display: "inline-block",
                position: "relative"
            }), M = H.firstElementChild.nextElementSibling, g.vr(M, "display", "none"), M = M.nextElementSibling, g.vr(M, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.vr(H.lastElementChild, "display", "none"), N ? (g.vr(H, "padding-top", "0.6em"), g.vr(M, "top", "0")) : (g.vr(H, "padding-bottom", "0.6em"), g.vr(M, "bottom", "0")));
            return H
        },
        YV = function() {
            g.A.apply(this, arguments)
        },
        Jq = function(f, k, K, N, v) {
            g.QR.call(this, f, f + k, {
                priority: K,
                namespace: "captions"
            });
            this.id = N;
            this.params = v;
            this.G = []
        },
        wK5 = function(f) {
            var k = "_" + Rz++;
            return new Jq(0, 0x8000000000000, 0, k, f)
        },
        Bv = function(f) {
            YV.call(this);
            this.V = f;
            this.pens = {};
            this.j = {};
            this.Fj = {};
            this.J = "_" + Rz++;
            this.X = {};
            this.D = this.G = null;
            this.T = !0
        },
        cv = function(f, k) {
            f = f.getAttribute(k);
            if (f != null) return Number(f)
        },
        hq = function(f, k) {
            f = f.getAttribute(k);
            if (f != null) return f === "1"
        },
        Z_ = function(f, k) {
            f = cv(f, k);
            return f !== void 0 ? f : null
        },
        Xx = function(f, k) {
            f = f.getAttribute(k);
            if (f != null) return q1.test(f), f
        },
        GGh = function(f, k) {
            var K = {},
                N = k.getAttribute("ws");
            Object.assign(K, N ? f.Fj[N] : f.V);
            f = Z_(k, "mh");
            f != null && (K.YO = f);
            f = Z_(k, "ju");
            f != null && (K.textAlign = f);
            f = Z_(k, "pd");
            f != null && (K.eK = f);
            f = Z_(k, "sd");
            f != null && (K.kA = f);
            f = Xx(k, "wfc");
            f != null && (K.windowColor = f);
            k = cv(k, "wfo");
            k !== void 0 && (K.windowOpacity = k / 255);
            return K
        },
        ymW = function(f, k) {
            var K = {},
                N = k.getAttribute("wp");
            N && Object.assign(K, f.j[N]);
            f = Z_(k, "ap");
            f != null && (K.LF = f);
            f = cv(k, "cc");
            f != null && (K.bB = f);
            f = cv(k, "ah");
            f != null && (K.mG = f);
            f = cv(k, "rc");
            f != null && (K.Sp = f);
            k = cv(k, "av");
            k != null && (K.zn = k);
            return K
        },
        Wri = function(f, k, K, N) {
            var v = {};
            Object.assign(v, ymW(f, k));
            Object.assign(v, GGh(f, k));
            N ? g.ug(v, f.V) ? (N = f.J, v = f.V) : N = "_" + Rz++ : N = k.getAttribute("id") || "_" + Rz++;
            f = cv(k, "t") + K;
            k = cv(k, "d") || 0x8000000000000;
            if (v.eK === 2 || v.eK === 3) K = v.Sp, v.Sp = v.bB, v.bB = K;
            return new Jq(f, k, 0, N, v)
        },
        un = function(f) {
            YV.call(this);
            this.T = f;
            this.G = new Map;
            this.V = new Map;
            this.J = new Map;
            this.D = new Map
        },
        az = function(f) {
            f = g.v5(Math.round(f), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substring(0, 7 - f.length) + f
        },
        CS5 = function(f, k, K, N, v) {
            N === 0 && (N = 0x8000000000000);
            var M = {};
            k.wpWinPosId && Object.assign(M, f.V.get(k.wpWinPosId));
            k.wsWinStyleId && Object.assign(M, f.J.get(k.wsWinStyleId));
            f = k.rcRowCount;
            f !== void 0 && (M.Sp = f);
            k = k.ccColCount;
            k !== void 0 && (M.bB = k);
            if (M.eK === 2 || M.eK === 3) k = M.Sp, M.Sp = M.bB, M.bB = k;
            return new Jq(K, N, 0, v, M)
        },
        eG = function(f, k, K) {
            g.rK.call(this, f);
            this.videoData = k;
            this.audioTrack = K;
            this.J = k.Si
        },
        Lq = function(f, k, K, N, v, M, H, U, S, b) {
            gX.call(this, f, k, K, N, v, M, H, U, S, b);
            this.type = 1
        },
        jG = function(f, k, K) {
            this.trackData = f;
            this.T = K;
            this.version = this.J = this.Y = this.byteOffset = 0;
            this.D = [];
            this.G = new DataView(this.trackData)
        },
        pq = function(f) {
            var k = f.byteOffset;
            f.byteOffset += 1;
            return f.G.getUint8(k)
        },
        s5 = function(f) {
            var k = f.byteOffset;
            f.byteOffset += 4;
            return f.G.getUint32(k)
        },
        Aq = function(f, k) {
            YV.call(this);
            this.D = f;
            this.V = k;
            this.track = this.V.languageName === "CC3" ? 4 : 0;
            this.G = new zdq;
            this.G.D = 1 << this.track
        },
        Y37 = function(f) {
            if (typeof f === "string") return !1;
            f = new jG(f, 8, 0);
            return oGv(f)
        },
        oGv = function(f) {
            if (!(f.byteOffset < f.G.byteLength) || s5(f) !== 1380139777) return !1;
            f.version = pq(f);
            if (f.version > 1) return !1;
            pq(f);
            pq(f);
            pq(f);
            return !0
        },
        E5 = function(f, k, K, N, v, M, H, U, S, b) {
            gX.call(this, f, k, K, N, v, M, H, U, S, b);
            var m = this;
            this.type = 2;
            this.BH = [];
            this.xn = this.j = this.Zw = 0;
            this.Rw = NaN;
            this.xV = 0;
            this.Qj = null;
            this.BO = new g.K_(this.Vq, 433, this);
            this.J && (b.createClientVe(this.J, this, 167342), this.C(this.J, "click", function() {
                b.logClick(m.J)
            }), f = new g.hx(this.element, !0), g.E(this, f), f.subscribe("hoverstart", function() {
                b.logVisibility(m.J, !0)
            }, this));
            g.n_(this.element, "ytp-caption-window-rollup");
            g.E(this, this.BO);
            g.vr(this.element, "overflow", "hidden")
        },
        Jmh = function(f, k) {
            if (!k) return "";
            f.Y && f.D.params.kA !== 1 && (k *= -1);
            return "translate" + (f.Y ? "X" : "Y") + "(" + k + "px)"
        },
        REr = function(f) {
            f.BH = Array.from(f.element.getElementsByClassName("caption-visual-line"));
            for (var k = f.D.params.Sp, K = 0, N = 0, v = f.BH.length - 1; K < k && v > -1;) {
                var M = f.BH[v];
                N += f.Y ? M.offsetWidth : M.offsetHeight;
                K++;
                v--
            }
            f.j = N;
            k = Math;
            K = k.max;
            isNaN(f.Rw) && ((N = f.G.bB) ? (v = g.h$("SPAN"), g.Ll(v, "\u2013".repeat(N)), g.vr(v, QjJ(f, f.G.I2)), f.V.appendChild(v), f.Rw = v.offsetWidth, f.V.removeChild(v)) : f.Rw = 0);
            N = f.V;
            f.xn = K.call(k, f.Rw, f.xV, (f.Y ? N.offsetHeight : N.offsetWidth) + 1)
        },
        BEc = function(f, k) {
            REr(f);
            var K = f.BH.reduce(function(M, H) {
                return (f.Y ? H.offsetWidth : H.offsetHeight) + M
            }, 0);
            K = f.j - K;
            if (K !== f.Zw) {
                var N = K > 0 && f.Zw === 0,
                    v = K < f.Zw;
                k || isNaN(K) || N || !v || (g.n_(f.element, "ytp-rollup-mode"), f.C(f.element, "transitionend", f.Vq));
                g.vr(f.V, "transform", Jmh(f, K));
                f.Zw = K
            }
            REr(f)
        },
        cmc = function(f, k, K, N) {
            var v = this;
            this.L = f;
            this.Y = k;
            this.logger = K;
            this.td = N;
            this.D0 = [];
            this.ge = [];
            this.G = null;
            this.bj = {
                XeD: function() {
                    return v.G
                },
                dK: function() {
                    return v.D0
                }
            };
            f = g.Nm(this.L.U().experiments, "html5_override_micro_discontinuities_threshold_ms");
            this.D = f > 0 ? f : 10
        },
        Zc0 = function(f, k) {
            f.G = function(K, N) {
                if (K.info.Y) {
                    var v = K;
                    if (f.ge.length > 0) {
                        for (v = f.ge.shift(); f.ge.length > 0;) v = g.XS(v, f.ge.shift());
                        v = g.XS(v, K)
                    }
                    if (v) {
                        K = v;
                        try {
                            var M = g.uw(K) * 1E3
                        } catch (b) {
                            M = K.info.startTime * 1E3
                        }
                        try {
                            var H = g.YVb(K) * 1E3
                        } catch (b) {
                            H = K.info.duration * 1E3
                        }
                        if (M < 0 || H < 0) M < 0 && (M = K.info.startTime * 1E3), H < 0 && (H = K.info.duration * 1E3);
                        K.info.startTime = M / 1E3;
                        K.info.V = M / 1E3;
                        K.info.duration = H / 1E3;
                        K.info.X = H / 1E3;
                        M = f.Cy(v);
                        H = M.OC;
                        M = {
                            formatId: M.formatId,
                            startTimeMs: M.startTimeMs,
                            durationMs: M.durationMs,
                            wf: H,
                            j6: H
                        };
                        H = hE7(f.D0, M.startTimeMs);
                        var U = (K = H >= 0 ? f.D0[H] : null) ?
                            K.startTimeMs + K.durationMs : 0,
                            S = M.startTimeMs + M.durationMs;
                        !K || M.startTimeMs - U > f.D ? f.D0.splice(H + 1, 0, M) : (K.durationMs = Math.max(U, S) - K.startTimeMs, K.j6 = Math.max(K.j6, M.j6));
                        N(f.D0);
                        M = g.qA(v);
                        N = f.Y;
                        M = M.buffer.slice(M.byteOffset, M.byteLength + M.byteOffset);
                        v = v.info.V;
                        N.T ? N.V == null ? g.hL(N.logger, 350058965, "Null loaded track meta data at captions data received") : k.Lx(M, N.V, v * 1E3) : g.hL(N.logger, 350058965, "Null Representation at captions data received")
                    } else g.hL(f.logger, 350058965, "Empty slice")
                } else f.ge.push(K)
            };
            f.L.addEventListener("sabrCaptionsDataLoaded", f.G)
        },
        hE7 = function(f, k) {
            f = g.xN(f, {
                startTimeMs: k
            }, function(K, N) {
                return K.startTimeMs - N.startTimeMs
            });
            return f >= 0 ? f : -f - 2
        },
        Fx = function(f, k) {
            g.rK.call(this, k);
            this.D = f;
            this.L = k;
            this.logger = new g.cx("caps");
            this.V = this.T = null;
            this.X = new cmc(this.L, this, this.logger, this.D.td)
        },
        q3J = function(f, k) {
            var K = [],
                N;
            for (N in f.D.G)
                if (f.D.G.hasOwnProperty(N)) {
                    var v = f.D.G[N];
                    if (g.GY(v, k || null)) {
                        var M = v.info.id,
                            H = M,
                            U = "." + M,
                            S = "",
                            b = "";
                        if (v = v.info.captionTrack) M = v.languageCode, H = v.displayName, U = v.vssId, S = v.kind, b = v.id;
                        K.push(new g.q_({
                            id: N,
                            languageCode: M,
                            languageName: H,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: U,
                            kind: S,
                            captionId: b
                        }))
                    }
                }
            return K
        },
        XK1 = function(f, k, K) {
            var N = [],
                v;
            for (v in f.D.G)
                if (f.D.G.hasOwnProperty(v)) {
                    var M = f.D.G[v];
                    if (g.GY(M, K || null)) {
                        var H = M.info.captionTrack;
                        H && H.languageCode === k && N.push(M)
                    }
                }
            return N.length ? N[0] : null
        },
        uzh = function(f, k) {
            if (!g.IUh(f) || f.G != null && g.dOM(k, f.G) && f.G.G.rawcc != null) return !1;
            k = !!f.G && f.G.isManifestless && Object.values(f.G.G).some(function(K) {
                return g.GY(K, "386")
            });
            f = !!f.G && !f.G.isManifestless && g.jhC(f.G);
            return k || f
        },
        alh = function() {
            YV.call(this)
        },
        Lrp = function(f) {
            var k = eEW.length;
            if (f.byteLength < k) return !1;
            f = new Uint8Array(f, 0, k);
            for (var K = 0; K < k; K++)
                if (eEW[K] !== f[K]) return !1;
            return !0
        },
        jx7 = function(f, k, K, N, v, M, H, U, S) {
            switch (H.tagName) {
                case "b":
                    U.bold = !0;
                    break;
                case "i":
                    U.italic = !0;
                    break;
                case "u":
                    U.underline = !0
            }
            for (var b = 0; b < H.childNodes.length; b++) {
                var m = H.childNodes[b];
                if (m.nodeType === 3) m = new oz(k, K, N, v.id, m.nodeValue, M || b > 0, g.h4(U) ? void 0 : U), S.push(m), v.G.push(m);
                else {
                    var n = {};
                    Object.assign(n, U);
                    jx7(f, k, K, N, v, !0, m, n, S)
                }
            }
        },
        pK0 = function(f) {
            var k = f.split(":");
            f = 0;
            k = g.h(k);
            for (var K = k.next(); !K.done; K = k.next()) f = f * 60 + Number(K.value);
            return f * 1E3
        },
        sx0 = function(f, k, K, N) {
            N = Object.assign({
                YO: 0
            }, N);
            return new Jq(f, k, K, "_" + Rz++, N)
        },
        Pv = function(f, k) {
            g.A.call(this);
            this.L = f;
            this.K = k;
            this.G = null;
            this.fN = this.L.h7();
            this.logger = new g.cx("caps")
        },
        EG7 = function(f, k, K) {
            if (typeof k === "string" || Y37(k)) return [{
                trackData: k,
                Zm: K
            }];
            if (typeof k === "string" && k.substring(0, 6) === "WEBVTT" || typeof k !== "string" && Lrp(k)) return [{
                trackData: k,
                Zm: K
            }];
            var N = new DataView(k);
            if (N.byteLength <= 8 || N.getUint32(4) !== 1718909296) return [];
            var v = g.JSZ(N);
            if (f.fN && v) {
                var M = g.rSA(v),
                    H = g.weS(v);
                v = v.m_;
                M && v && f.fN.GI(v, M, H)
            }
            f = g.hc(N, 1835295092);
            if (!f || !f.length || !f[0].size) return [];
            M = [];
            for (H = 0; H < f.length; H++) v = f[H], v = new Uint8Array(k, v.dataOffset, v.size - (v.dataOffset - v.offset)), v = g.J_(v), M.push({
                trackData: v,
                Zm: K + H * 1E3
            });
            Am3(N, M, K);
            return M = M.filter(function(U) {
                return !!U.trackData
            })
        },
        Am3 = function(f, k, K) {
            var N = g.yy(f, 0, 1836476516),
                v = 9E4;
            N && (v = g.WM(N) || 9E4);
            N = 0;
            for (var M = g.hc(f, 1836019558), H = 0; H < M.length; H++) {
                var U = M[H];
                H < k.length && (U = g.yy(f, U.dataOffset, 1953653094)) && (U = g.yy(f, U.dataOffset, 1952867444)) && (U = g.BM(U) / v * 1E3, H === 0 && (N = U), k[H].Zm = U - N + K || K * H * 1E3)
            }
        },
        Fr4 = function(f, k, K) {
            f.G || (f.G = new alh);
            f = f.G.Y(k, K);
            Math.random() < .01 && g.uA(Error("Deprecated subtitles format in web player: WebVTT"));
            return f
        },
        PS1 = function(f) {
            var k = {};
            if (f = g.aP(f)) k.lang = f, g.XR7.test(f) && (k.eK = 1);
            return k
        },
        Vev = function(f) {
            g.dK.call(this, f);
            var k = this;
            this.L = f;
            this.QD = [];
            this.BH = {};
            this.Xj = {};
            this.X = !1;
            this.Y = "NONE";
            this.D = this.Fj = this.xn = this.Mx = this.u2 = null;
            this.xV = {
                vp: function() {
                    k.vp()
                },
                Lx: function(M, H, U, S) {
                    k.Lx(M, H, U, S)
                }
            };
            this.G = null;
            this.K = this.L.U();
            this.videoData = this.L.getVideoData();
            this.g9 = this.L.K9();
            this.J = {
                I2: {}
            };
            this.T = {
                I2: {}
            };
            g.ON(this.videoData) ? this.Y = "OFFLINE" : g.gIK(this.videoData, this.L) ? this.Y = "HLS" : uzh(this.videoData, this.L) ? this.Y = "SABR_LIVE" : g.tJb(this.videoData, this.L) ? this.Y = "LIVE" : this.videoData.captionTracks.length ? this.Y = "INNERTUBE" : this.videoData.Qj && (this.Y = "TTS");
            this.qx = this.K.controlsType === "3";
            this.Sz = new Pv(this.L, this.K);
            this.Rw = new g.to(this);
            this.j = new g.D({
                B: "div",
                W: "ytp-caption-window-container",
                N: {
                    id: "ytp-caption-window-container"
                }
            });
            this.Yn = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            var K = null,
                N = g.Fh("yt-html5-player-modules::subtitlesModuleData");
            N && (K = new g.Xh(N));
            this.storage = K;
            var v;
            this.vH = !((v = f.qr()) == null || !v.S8());
            this.V = DIp(this);
            this.cH = !this.V && this.qx && this.vH && (this.Y === "LIVE" || this.Y === "SABR_LIVE");
            g.E(this, this.Sz);
            this.V ? this.Zw = this.L9 = null : (this.L9 = new g.kq(this.wS, void 0, this), g.E(this, this.L9), this.Zw = new g.K_(this.BLH, 2E3, this), g.E(this, this.Zw));
            g.E(this, this.Rw);
            g.I1(this.player, this.j.element, 4);
            g.E(this, this.j);
            this.V || this.Rw.C(f, "resize", this.SR);
            (this.BO = g.zt(this.K) && !g.R8() && !this.L.isFullscreen() && !this.V && !this.cH) && this.Rw.C(f, "resize", this.pUD);
            this.Rw.C(f, "onPlaybackAudioChange", this.a0C);
            this.Rw.C(f, g.$B("captions"), function(M) {
                k.onCueRangeEnter(M)
            });
            this.Rw.C(f, g.Ib("captions"), function(M) {
                k.onCueRangeExit(M)
            });
            Qx4(this, qEh() || {});
            this.player.lR("onCaptionsModuleAvailable");
            this.Y === "HLS" && this.V && (f = this.L.qr().RM(), this.vH && this.Rw.C(f.textTracks, "addtrack", this.Vuk))
        },
        ic0 = function(f) {
            if (f.K.lT === 1 || f.videoData.Gg === 1 || g.Fm(f.videoData, "yt:cc") === "alwayson") return !0;
            if (f.videoData.captionTracks.length) var k = f.getAudioTrack().D;
            if (f.K.lT === 2) {
                if (g.xp(f.K)) var K = $I4(f);
                else if (f.storage) try {
                    K = f.storage.get("module-enabled")
                } catch (v) {
                    f.storage.remove("module-enabled")
                } else K = null;
                if (K != null) return !!K
            }
            K = Cor(f.player.getAudioTrack(), g.xp(f.K));
            var N = g.Fm(f.videoData, "yt:cc");
            if (Il5(f) === void 0) {
                if (K === "CAPTIONS_INITIAL_STATE_ON_RECOMMENDED") return N ? N === "on" : !0;
                if (K === "CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED") return N === "on"
            } else return N === "on";
            return k === "ON" || g.Fm(f.videoData,
                "yt:cc") === "on"
        },
        D_ = function(f, k) {
            if (f.G && (k === void 0 || !k) || !f.videoData.captionTracks.length) return !1;
            f = f.getAudioTrack();
            return !!f.G || f.D === "FORCED_ON"
        },
        Il5 = function(f) {
            var k = void 0,
                K = g.$a().m4(65);
            if (g.xp(f.K) && K != null) {
                if ($I4(f) != null) return !1;
                k = !K
            }
            return k
        },
        VI = function(f, k) {
            if (!f.D) return null;
            if (f.Fj && f.Fj.V) return f.Fj.V;
            k = zEc(f, k);
            k = g.IF(f.D.G, k);
            var K = null;
            if (of7(f.K)) {
                var N = f.L.isInline() ? void 0 : g.Eo("yt-player-caption-sticky-language");
                for (var v = [N, f.videoData.captionsLanguagePreference, f.K.captionsLanguagePreference, g.Fm(f.videoData, "yt:cc_default_lang")], M = !1, H = 0; H < v.length; H++) {
                    var U = v[H];
                    if (U) {
                        M = !0;
                        for (var S = 0; S < k.length; S++)
                            if (g.aP(k[S]) === U) return k[S];
                        for (S = 0; S < k.length; S++)
                            if (g.aP(k[S]).split("-")[0] === U.split("-")[0]) return k[S]
                    }
                }
                if (M && f.D && (v = f.D.J, v.length))
                    for (v = g.h(v),
                        M = v.next(); !M.done; M = v.next())
                        if (M = M.value, M.languageCode === N) {
                            K = M;
                            break
                        }
            } else
                for (N = [f.videoData.captionsLanguagePreference, f.K.captionsLanguagePreference, g.Fm(f.videoData, "yt:cc_default_lang")], v = 0; v < N.length; v++)
                    for (M = 0; M < k.length; M++)
                        if (g.aP(k[M]) === N[v]) return k[M];
            N = null;
            f.Fj && f.Fj.Y && (N = f.Fj.Y);
            N || (N = k.find(function(b) {
                return b.isDefault
            }) || null);
            N || (N = k[0] || QI(f));
            N && K && g.aP(N).split("-")[0] !== K.languageCode.split("-")[0] && (N = YE5(N, K));
            return N
        },
        QI = function(f) {
            return f.Fj && f.Fj.G
        },
        $V = function(f) {
            var k = QI(f);
            return !!k && f.G === k
        },
        TE1 = function(f, k) {
            if (f.G) {
                var K = f.L.qr().RM().textTracks,
                    N = null;
                f.Y === "HLS" ? N = f.G.getId() : N = f.G.toString();
                for (var v = 0; v < K.length; v++) {
                    var M = K[v];
                    M.id === N && (k ? M.mode !== "showing" && (M.mode = "showing", M = f.G, f.Vy(M, !!M, $V(f) ? "g" : f.X ? "m" : "s")) : M.mode === "showing" && (M.mode = "disabled"))
                }
            }
        },
        Tv = function(f, k, K) {
            f.loaded && f.unload();
            K != null && (f.X = K, f.X && (g.xp(f.K) ? Iz(f, !!k) : zv(f, !!k)));
            k !== null || D_(f, !0) || f.Vy(k, !!k, f.X ? "m" : "s");
            f.G = k;
            D_(f) && (f.G = QI(f));
            var N;
            fDv(f, (N = f.G) != null ? N : void 0);
            f.load()
        },
        Kf4 = function(f, k) {
            if (k instanceof Jq) {
                var K = f.BH[k.id];
                K && K.D !== k && (K.dispose(), delete f.BH[k.id], K = null);
                K || (K = kTc(f, k)) && (f.BH[k.id] = K)
            } else K = k.windowId, f.Xj[K] || (f.Xj[K] = []), f.Xj[K].push(k)
        },
        kTc = function(f, k) {
            var K = Nxh(f);
            if (!K) return null;
            var N = f.G ? g.aP(f.G) : null;
            N && g.XR7.test(N) && (k.params.eK = 1);
            var v = f.g9.getPlayerSize();
            N = v.height * f.Yn.height;
            v = v.width * f.Yn.width;
            f.K.playerStyle !== "google-live" || f.J.isDefault || Object.assign(k.params, f.J);
            switch (k.params.YO != null ? k.params.YO : k.G.length > 1 ? 1 : 0) {
                case 1:
                    return new Lq(k, f.J, f.T, K.width, K.height, v, N, f.K.experiments, f.ZX.bind(f), f.L);
                case 2:
                    return new E5(k, f.J, f.T, K.width, K.height, v, N, f.K.experiments, f.ZX.bind(f), f.L);
                default:
                    return new gX(k, f.J, f.T, K.width, K.height, v,
                        N, f.K.experiments, f.ZX.bind(f), f.L)
            }
        },
        Qx4 = function(f, k, K) {
            K = K === void 0 ? !1 : K;
            var N = fh.I2;
            f.J = {};
            Object.assign(f.J, fh);
            f.J.I2 = {};
            Object.assign(f.J.I2, N);
            f.T = {
                I2: {}
            };
            var v = k.backgroundOverride ? f.T : f.J,
                M = k.background || N.background;
            q1.test(M);
            v.I2.background = M;
            v = k.colorOverride ? f.T : f.J;
            M = k.color || N.color;
            q1.test(M);
            v.I2.color = M;
            v = k.windowColorOverride ? f.T : f.J;
            M = k.windowColor || fh.windowColor;
            q1.test(M);
            v.windowColor = M;
            v = k.backgroundOpacityOverride ? f.T : f.J;
            M = k.backgroundOpacity;
            M == null && (M = N.backgroundOpacity);
            v.I2.backgroundOpacity = M;
            v = k.fontSizeIncrementOverride ? f.T : f.J;
            M = k.fontSizeIncrement;
            M == null && (M = N.fontSizeIncrement);
            v.I2.fontSizeIncrement = M;
            M = k.fontStyleOverride ? f.T : f.J;
            v = k.fontStyle;
            v == null && (v = N.bold && N.italic ? 3 : N.bold ? 1 : N.italic ? 2 : 0);
            M = M.I2;
            switch (v) {
                case 1:
                    M.bold = !0;
                    delete M.italic;
                    break;
                case 2:
                    delete M.bold;
                    M.italic = !0;
                    break;
                case 3:
                    M.bold = !0;
                    M.italic = !0;
                    break;
                default:
                    delete M.bold, delete M.italic
            }
            v = k.textOpacityOverride ? f.T : f.J;
            M = k.textOpacity;
            M == null && (M = N.textOpacity);
            v.I2.textOpacity = M;
            v = k.windowOpacityOverride ? f.T : f.J;
            M = k.windowOpacity;
            M == null && (M = fh.windowOpacity);
            v.windowOpacity =
                M;
            v = k.charEdgeStyleOverride ? f.T : f.J;
            M = k.charEdgeStyle;
            M == null && (M = N.charEdgeStyle);
            v.I2.charEdgeStyle = M;
            v = k.fontFamilyOverride ? f.T : f.J;
            M = k.fontFamily;
            M == null && (M = N.fontFamily);
            v.I2.fontFamily = M;
            f.loaded && f.SR();
            K && g.AW("yt-player-caption-display-settings", k, 2592E3)
        },
        vEi = function(f, k) {
            if (!f.D) return {};
            if (k) {
                g.h4(k) || f.OJ(k.vss_id, "m");
                if (f.V && f.Y !== "HLS" || !g.qW(k)) return;
                if (g.h4(k)) {
                    Tv(f, null, !0);
                    return
                }
                for (var K, N = g.IF(f.D.G, !0), v = 0; v < N.length; v++) {
                    var M = N[v];
                    M.languageCode !== k.languageCode || K && (M.languageName !== k.languageName || (M.captionId || "") !== (k.captionId || "") || g.X4(M) !== k.displayName) || (K = k.translationLanguage ? YE5(M, k.translationLanguage) : M)
                }
                f.ym(k.position);
                !K || K === f.G && f.loaded || (k = g.e8(), N = g.aP(K), k.length && N === k[k.length - 1] || (k.push(N), g.AW("yt-player-caption-language-preferences", k)),
                    of7(f.K) && !f.L.isInline() && g.AW("yt-player-caption-sticky-language", N, 2592E3), Tv(f, K, !0))
            } else return f.loaded && f.G && !$V(f) ? g.uP(f.G) : {};
            return ""
        },
        H5h = function(f, k, K) {
            k && !f.xn ? (k = wK5({
                eK: 0,
                lang: "id"
            }), f.xn = [k, new oz(k.start, k.end - k.start, 0, k.id, K != null ? K : "Subtitel akan terlihat seperti ini")], f.player.yK(f.xn)) : !k && f.xn && (MfW(f, f.xn), f.xn = null)
        },
        MfW = function(f, k) {
            f.player.E3(k);
            k = g.h(k);
            for (var K = k.next(); !K.done; K = k.next()) g.Nd(f.QD, K.value);
            nq(f.L9)
        },
        fDv = function(f, k) {
            f.K.Z("html5_modify_caption_vss_logging") && (f.videoData.r7 = k)
        },
        Nxh = function(f) {
            var k = f.g9.getVideoContentRect(!0).height,
                K = f.g9.getVideoContentRect(!0).width;
            if (!k || !K) return null;
            k *= f.Yn.height;
            K *= f.Yn.width;
            return {
                width: K,
                height: k
            }
        },
        zv = function(f, k) {
            if (f.storage) try {
                f.storage.set("module-enabled", k)
            } catch (K) {}
        },
        Iz = function(f, k) {
            f.L.isInline() || g.AW("yt-player-sticky-caption", k, 2592E3)
        },
        $I4 = function(f) {
            if (!f.L.isInline()) return g.Eo("yt-player-sticky-caption")
        },
        DIp = function(f) {
            var k, K = !((k = f.L.qr()) == null || !k.PT());
            return f.Y === "HLS" && K ? !0 : f.qx && K && f.Y !== "LIVE" && f.Y !== "SABR_LIVE"
        },
        zEc = function(f, k) {
            if (f.Y === "HLS") return !1;
            g.Nw(f.videoData) && (k = !0);
            k || (k = f.Y === "TTS" ? !1 : f.Y === "INNERTUBE" ? !1 : !0);
            return k || f.K.Z("web_deprecate_always_includes_asr_setting") && g.xp(f.K) ? !0 : !!g.$a().m4(66)
        };
    g.iD.prototype.GI = g.jS(64, function(f, k, K) {
        this.D.set(f, {
            g1: k,
            Qc: K
        })
    });
    g.zg.prototype.GI = g.jS(63, function(f, k, K) {
        this.xn.GI(f, k, K)
    });
    g.rK.prototype.UU = g.jS(62, function() {
        return !1
    });
    g.rK.prototype.L0 = g.jS(61, function() {});
    g.wK.prototype.L0 = g.jS(60, function(f, k, K) {
        var N = this;
        this.r9();
        k = this.AN(f, k);
        var v = this.ow.U().Z("html5_report_captions_ctmp_qoe"),
            M = (0, g.hz)();
        this.uT();
        Wk3(this, k, {
            format: "RAW",
            onSuccess: function(H) {
                N.D = null;
                if (v) {
                    var U = (H.responseText.length / 1024).toFixed(),
                        S = (0, g.hz)();
                    N.videoData.Dw("capresp", {
                        ms: S - M,
                        kb: U
                    })
                }
                K.Lx(H.responseText, f)
            },
            onError: v ? function(H) {
                var U;
                H = (U = H == null ? void 0 : H.status) != null ? U : 0;
                N.videoData.Dw("capfail", {
                    status: H
                })
            } : void 0,
            withCredentials: !0
        })
    });
    g.yo.prototype.L0 = g.jS(59, function(f, k, K) {
        var N = this;
        this.r9();
        k = this.AN(f, k);
        this.uT();
        this.D = g.uO(k, {
            format: "RAW",
            onSuccess: function(v) {
                N.D = null;
                K.Lx(v.responseText, f)
            },
            withCredentials: !0
        })
    });
    g.ju.prototype.WG = g.jS(58, function() {
        for (var f = g.W5(document, "track", void 0, this.G), k = 0; k < f.length; k++) g.ao(f[k])
    });
    g.qa.prototype.WG = g.jS(57, function() {
        this.mediaElement.WG()
    });
    g.ju.prototype.S8 = g.jS(56, function() {
        return !(!this.G.textTracks || !this.G.textTracks.addEventListener)
    });
    g.qa.prototype.S8 = g.jS(55, function() {
        return this.mediaElement.S8()
    });
    g.ju.prototype.PT = g.jS(54, function() {
        return !!this.G.textTracks
    });
    g.qa.prototype.PT = g.jS(53, function() {
        return this.mediaElement.PT()
    });
    g.ju.prototype.Zv = g.jS(52, function(f) {
        for (var k = 0; k < f.length; k++) this.G.appendChild(f[k])
    });
    g.qa.prototype.Zv = g.jS(51, function(f) {
        this.mediaElement.Zv(f)
    });
    g.Ak.prototype.Wr = g.jS(39, function(f) {
        return g.wf(this.app, {
            playerType: void 0
        }).Wr(f)
    });
    g.KR.prototype.Wr = g.jS(38, function(f) {
        return this.Gk.PN.Wr(f)
    });
    g.WA.prototype.Wr = g.jS(37, function(f) {
        return this.tG().some(function(k) {
            return k.namespace === f
        })
    });
    g.jA.prototype.Wr = g.jS(36, function() {
        return !1
    });
    g.Ak.prototype.OJ = g.jS(34, function(f, k) {
        this.app.b2().OJ(f, k)
    });
    g.KR.prototype.OJ = g.jS(33, function(f, k) {
        this.Gk.OJ(f, k)
    });
    g.e6.prototype.OJ = g.jS(32, function(f, k) {
        f = [f, k];
        g.ai(this, g.pg(this.provider), "cfi", f)
    });
    g.GB.prototype.OJ = g.jS(31, function(f, k) {
        this.qoe && this.qoe.OJ(f, k)
    });
    g.DR.prototype.OJ = g.jS(30, function(f, k) {
        this.Me.OJ(f, k)
    });
    g.jA.prototype.OJ = g.jS(29, function() {});
    g.Ak.prototype.Vy = g.jS(28, function(f, k, K) {
        this.app.b2().Vy(f, k, K)
    });
    g.KR.prototype.Vy = g.jS(27, function(f, k, K) {
        this.Gk.Vy(f, k, K)
    });
    g.e6.prototype.Vy = g.jS(26, function(f, k, K) {
        if (this.L9 !== f || this.Qj !== k) k = k === "rawcc" ? "" : k, K = [f, k, this.L9, K], g.ai(this, g.pg(this.provider), "cfs", K), this.L9 = f, this.Qj = k
    });
    g.GB.prototype.Vy = g.jS(25, function(f, k, K) {
        this.qoe && this.qoe.Vy(f, k, K)
    });
    g.DR.prototype.Vy = g.jS(24, function(f, k, K) {
        this.Me.Vy(f, k, K)
    });
    g.jA.prototype.Vy = g.jS(23, function() {});
    g.Up.prototype.RF = g.jS(3, function(f) {
        return (f = this.Ix(f)) ? f.G : 0
    });
    g.jL.prototype.RF = g.jS(2, function() {
        return 0
    });
    var cC7 = /#(.)(.)(.)/,
        BMJ = /^#(?:[0-9a-f]{3}){1,2}$/i,
        jjh = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Acehnese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgc: "Haryanvi",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksik\u00e1",
            blo: "Anii",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            csw: "Swampy Cree",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fula",
            ff_Adlm: "Fula (Adlam)",
            ff_Latn: "Fula (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kk_Arab: "Kazakh (Arabic)",
            kk_Cyrl: "Kazakh (Cyrillic)",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kok_Deva: "Konkani (Devanagari)",
            kok_Latn: "Konkani (Latin)",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            ku_Latn: "Kurdish (Latin)",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            kxv: "Kuvi",
            kxv_Deva: "Kuvi (Devanagari)",
            kxv_Latn: "Kuvi (Latin)",
            kxv_Orya: "Kuvi (Odia)",
            kxv_Telu: "Kuvi (Telugu)",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Western Panjabi",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lij: "Ligurian",
            lkt: "Lakota",
            lmo: "Lombard",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaw",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pms: "Piedmontese",
            pon: "Pohnpeian",
            prg: "Prussian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Yakut",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            szl: "Silesian",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelauan",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tok: "Toki Pona",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vec: "Venetian",
            vi: "Vietnamese",
            vmw: "Makhuwa",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xnr: "Kangri",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        },
        lDh = {
            en: "English"
        };
    g.w(Xr7, g.rK);
    Xr7.prototype.rr = function(f) {
        var k = this.ow.qr();
        if (k && k.RM()) {
            k = k.RM().textTracks;
            k = g.h(k);
            for (var K = k.next(); !K.done; K = k.next()) K = K.value, K.kind === "subtitles" && !this.D.has(K.language) && K.language && (g.tI(this.G, new g.q_({
                languageCode: K.language,
                languageName: K.language,
                kind: K.kind,
                id: K.id,
                displayName: lDh[K.label] || K.label,
                vss_id: "." + K.language
            })), this.D.add(K.language))
        }
        g.IF(this.G).length > 0 && f.vp()
    };
    O5.prototype.contains = function(f) {
        f = g.xN(this.segments, f);
        return f >= 0 || f < 0 && (-f - 1) % 2 === 1
    };
    O5.prototype.length = function() {
        return this.segments.length / 2
    };
    g.w(aL7, g.A);
    g.t = aL7.prototype;
    g.t.VD = function() {
        g.A.prototype.VD.call(this);
        this.D && this.D.cancel()
    };
    g.t.zD = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.t.seekTo = function(f) {
        f -= this.player.WO();
        var k = this.G;
        this.G = g.Q5(this.sC.JN(f).w9);
        k !== this.G && this.Fj && this.Fj()
    };
    g.t.reset = function() {
        this.V = new O5;
        this.T = -1;
        this.D && (this.D.cancel(), this.D = null)
    };
    g.t.DC = function() {
        this.r9();
        var f;
        if (f = this.G != null) f = this.G, f = f.sC.RH(f);
        if (f && !this.D && !(this.G && this.G.startTime - this.player.getCurrentTime() > 30)) {
            f = this.G;
            f = f.sC.m$(f);
            var k = f.w9[0],
                K;
            if ((K = this.player.getVideoData()) == null ? 0 : K.enableServerStitchedDai)
                if (K = this.player.h7()) {
                    var N = k.sC.info.id,
                        v = k.OC,
                        M = f.w9[0].V;
                    if (this.policy.Zw) {
                        if (K = g.pwe(K, M, v, N, 3)) f.V = K
                    } else if (N = K.K6(M, v, N, 3))
                        if (M = 2, K.Sa.has(v) ? M = 0 : g.vVK(K, v) && (M = 1), K = M, K === 0) N && (f.G = new g.cR(N));
                        else if (K === 2) {
                        this.X.start();
                        ed7(this) &&
                            this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            k.sC.index.Jm(k.OC) ? (this.V.contains(f.w9[0].OC) || Lk7(this, f), this.G = g.Q5(f.w9)) : ed7(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.X.start()
    };
    g.w(xV, g.rK);
    g.t = xV.prototype;
    g.t.L0 = function(f, k, K) {
        var N = this;
        this.uT();
        k = sj7(this, f.getId());
        k || (k = f.languageCode, k = this.D.isManifestless ? ACq(this, k, "386") : ACq(this, k));
        if (k) {
            var v = (k.index.RF(k.index.Fo()) - k.index.getStartTime(k.index.Fo())) * 1E3,
                M = new g.u4n(this.L.U());
            this.V = new aL7(M, this.L, k, function(H, U) {
                K.Lx(H, f, U, v)
            }, this.X || g.Qi(k.info), function() {
                N.V && N.V.reset();
                N.T = !0
            })
        }
    };
    g.t.UU = function() {
        var f = this.T;
        this.T = !1;
        return f
    };
    g.t.rr = function(f) {
        var k = this.L.U().Z("html5_fallback_if_rawcc_missing");
        var K = this.D.G.rawcc != null;
        if (!this.X || !K && k) k = this.D.isManifestless ? prq(this, "386") : prq(this);
        else {
            if (!K) {
                g.hL(this.logger, 386248249, "rawcc used but unavailable");
                return
            }
            k = [new g.q_({
                id: "rawcc",
                languageCode: "rawcc",
                languageName: "CC1",
                is_servable: !0,
                is_default: !0,
                is_translateable: !1,
                vss_id: ".en"
            }), new g.q_({
                id: "rawcc",
                languageCode: "rawcc",
                languageName: "CC3",
                is_servable: !0,
                is_default: !0,
                is_translateable: !1,
                vss_id: ".en"
            })]
        }
        k = g.h(k);
        for (K = k.next(); !K.done; K = k.next()) g.tI(this.G, K.value);
        f.vp()
    };
    g.t.uT = function() {
        this.V && (this.V.dispose(), this.V = null)
    };
    g.t.AN = function() {
        return ""
    };
    var q1 = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var Poi = ["left", "right", "center", "justify"];
    g.w(gX, g.D);
    g.t = gX.prototype;
    g.t.qV = function(f, k) {
        this.qx = f;
        this.Sz = k;
        var K = g.xf(this.element, this.element.parentElement);
        this.u2 = f - K.x;
        this.vH = k - K.y
    };
    g.t.Cf = function(f, k) {
        if (f !== this.qx || k !== this.Sz) {
            g.md(this.element, "ytp-dragging") || g.n_(this.element, "ytp-dragging");
            var K = g.dM(this.element);
            f = f - this.u2 - .02 * this.F7;
            var N = k - this.vH - .02 * this.KN,
                v = (f + K.width / 2) / this.maxWidth * 3;
            v = Math.floor(g.v5(v, 0, 2));
            var M = (N + K.height / 2) / this.maxHeight * 3;
            M = Math.floor(g.v5(M, 0, 2));
            k = v + M * 3;
            f = (f + v / 2 * K.width) / this.maxWidth;
            f = g.v5(f, 0, 1) * 100;
            K = (N + M / 2 * K.height) / this.maxHeight;
            K = g.v5(K, 0, 1) * 100;
            this.D.params.LF = k;
            this.D.params.zn = K;
            this.D.params.mG = f;
            this.D.params.isDefault = !1;
            this.G.LF = k;
            this.G.zn = K;
            this.G.mG = f;
            this.G.isDefault = !1;
            this.Yn.LF = k;
            this.Yn.zn = K;
            this.Yn.mG = f;
            this.Yn.isDefault = !1;
            this.eq()
        }
    };
    g.t.X2 = function() {
        g.xq(this.element, "ytp-dragging")
    };
    g.t.eq = function() {
        this.I9(this.T)
    };
    g.t.I9 = function(f) {
        var k = this.g9 ? 0 : Math.min(this.sf(), this.maxWidth),
            K = this.hK(),
            N = this.g9;
        if (N) {
            var v = getComputedStyle(this.V.parentNode);
            v = dX(v.borderLeftWidth) + dX(v.borderRightWidth) + dX(v.paddingLeft) + dX(v.paddingRight)
        } else v = 0;
        var M = v;
        v = "";
        this.D.params.eK === 3 && (v = "rotate(180deg)");
        var H = N ? "calc(96% - " + M + "px)" : "96%";
        g.vr(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: k ? k + "px" : "",
            height: K ? K + "px" : "",
            "max-width": H,
            "max-height": H,
            margin: "",
            transform: ""
        });
        this.Lr(f);
        v = {
            transform: v,
            top: "",
            left: "",
            width: k ? k + "px" : "",
            height: K ? K + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var U = this.G.mG * .96 + 2;
        H = this.G.LF;
        switch (H) {
            case 0:
            case 3:
            case 6:
                (N = this.G.I2.fontSizeIncrement) && N > 0 && this.G.eK !== 2 && this.G.eK !== 3 && (U = Math.max(U / (1 + N * 2), 2));
                v.left = U + "%";
                break;
            case 1:
            case 4:
            case 7:
                v.left = U + "%";
                U = this.V.offsetWidth;
                k || U ? (k = k || U + 1, v.width = k + "px", v["margin-left"] = N ? k / -2 - M / 2 + "px" : k / -2 + "px") : v.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                v.right = 100 - U + "%"
        }
        N = this.G.zn * .96 + 2;
        switch (H) {
            case 0:
            case 1:
            case 2:
                v.top =
                    N + "%";
                break;
            case 3:
            case 4:
            case 5:
                v.top = N + "%";
                (K = K || this.element.clientHeight) ? (v.height = K + "px", v["margin-top"] = K / -2 + "px") : v.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                v.bottom = 100 - N + "%"
        }
        g.vr(this.element, v);
        if (this.J) {
            K = this.V.offsetHeight;
            N = 1;
            for (k = 0; k < f.length; k++) v = f[k], typeof v.text === "string" && (N += v.text.split("\n").length - 1, v.append || k === 0 || N++);
            K /= N;
            this.J.style.height = K + "px";
            this.J.style.width = K + "px";
            this.element.style.paddingLeft = K + 5 + "px";
            this.element.style.paddingRight = K +
                5 + "px";
            f = Number(this.element.style.marginLeft.replace("px", "")) - K - 5;
            K = Number(this.element.style.marginRight.replace("px", "")) - K - 5;
            this.element.style.marginLeft = f + "px";
            this.element.style.marginRight = K + "px"
        }
    };
    g.t.Lr = function(f) {
        var k;
        for (k = 0; k < f.length && f[k] === this.T[k]; k++);
        if (this.cH || this.T.length > k) k = 0, this.cH = !1, this.T = [], this.X = this.L9 = this.QD = null, g.XB(this.V);
        for (; k < f.length; k++) ILW(this, f[k])
    };
    g.t.sf = function() {
        return 0
    };
    g.t.hK = function() {
        return 0
    };
    g.t.toString = function() {
        return g.D.prototype.toString.call(this)
    };
    zdq.prototype.clear = function() {
        this.Y = this.time = this.mode = 0;
        this.G = [];
        this.reset()
    };
    zdq.prototype.reset = function() {
        this.mode = 0;
        this.V.reset(0);
        this.J.reset(1)
    };
    var TM7 = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    tq.prototype.set = function(f) {
        this.type = f
    };
    tq.prototype.get = function() {
        return this.type
    };
    rX.prototype.clear = function() {
        this.state = 0
    };
    rX.prototype.update = function() {
        this.state = this.state === 2 ? 1 : 0
    };
    rX.prototype.Oe = function() {
        return this.state !== 0
    };
    rX.prototype.matches = function(f, k) {
        return this.Oe() && f === this.Wy && k === this.XJ
    };
    vGq.prototype.reset = function() {
        this.timestamp = this.G = 0
    };
    wX.prototype.updateTime = function(f) {
        for (var k = 1; k <= 15; ++k)
            for (var K = 1; K <= 32; ++K) this.Y[k][K].timestamp = f
    };
    wX.prototype.debugString = function() {
        for (var f = "\n", k = 1; k <= 15; ++k) {
            for (var K = 1; K <= 32; ++K) {
                var N = this.Y[k][K];
                f = N.G === 0 ? f + "_" : f + String.fromCharCode(N.G)
            }
            f += "\n"
        }
        return f
    };
    wX.prototype.reset = function(f) {
        for (var k = 0; k <= 15; k++)
            for (var K = 0; K <= 32; K++) this.Y[k][K].reset();
        this.V = f;
        this.G = 0;
        this.D = this.row = 1
    };
    var Meq = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        Hc3 = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        ll0 = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        UIJ = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    nG7.prototype.reset = function(f, k) {
        this.J = k;
        this.style.set(2);
        this.D = this.T;
        this.V = this.X;
        this.G = this.D;
        var K = (f << 2) + (k << 1);
        this.T.reset(K);
        this.X.reset(K);
        this.text.reset((f << 2) + (k << 1) + 1)
    };
    iB7.prototype.reset = function(f) {
        this.J = f;
        this.D.clear();
        this.V = this.Y;
        this.Y.reset(f, 0);
        this.T.reset(f, 1)
    };
    dIh.prototype.V = function() {};
    g.w(oz, g.QR);
    oz.prototype.toString = function() {
        return g.QR.prototype.toString.call(this)
    };
    g.w(YV, g.A);
    YV.prototype.reset = function() {};
    g.w(Jq, g.QR);
    Jq.prototype.toString = function() {
        return g.QR.prototype.toString.call(this)
    };
    var Rz = 0;
    g.w(Bv, YV);
    Bv.prototype.reset = function() {
        this.X = {};
        this.D = this.G = null;
        this.T = !0
    };
    Bv.prototype.Y = function(f, k) {
        f = f.firstChild;
        f.getAttribute("format");
        k = k || 0;
        Number.isFinite(k);
        f = Array.from(f.childNodes);
        f = g.h(f);
        for (var K = f.next(); !K.done; K = f.next())
            if (K = K.value, K.nodeType === 1) switch (K.tagName) {
                case "head":
                    var N = K;
                    break;
                case "body":
                    var v = K
            }
        if (N)
            for (N = Array.from(N.childNodes), N = g.h(N), f = N.next(); !f.done; f = N.next())
                if (f = f.value, f.nodeType === 1) switch (f.tagName) {
                    case "pen":
                        K = f.getAttribute("id");
                        var M = this.pens,
                            H = {},
                            U = f.getAttribute("p");
                        U && Object.assign(H, this.pens[U]);
                        U = hq(f, "b");
                        U != null && (H.bold = U);
                        U = hq(f, "i");
                        U != null && (H.italic = U);
                        U = hq(f, "u");
                        U != null && (H.underline = U);
                        U = Z_(f, "et");
                        U != null && (H.charEdgeStyle = U);
                        U = Z_(f, "of");
                        U != null && (H.offset = U);
                        U = Xx(f, "bc");
                        U != null && (H.background = U);
                        U = Xx(f, "ec");
                        U != null && (H.Pf = U);
                        U = Xx(f, "fc");
                        U != null && (H.color = U);
                        U = Z_(f, "fs");
                        U != null && U !== 0 && (H.fontFamily = U);
                        U = cv(f, "sz");
                        U !== void 0 && (H.fontSizeIncrement = U / 100 - 1);
                        U = cv(f, "bo");
                        U !== void 0 && (H.backgroundOpacity = U / 255);
                        U = cv(f, "fo");
                        U !== void 0 && (H.textOpacity = U / 255);
                        U = Z_(f, "rb");
                        U != null && U !== 10 &&
                            U !== 0 && (H.lz = U > 10 ? U - 1 : U);
                        f = Z_(f, "hg");
                        f != null && (H.Jr = f);
                        M[K] = H;
                        break;
                    case "ws":
                        K = f.getAttribute("id");
                        this.Fj[K] = GGh(this, f);
                        break;
                    case "wp":
                        K = f.getAttribute("id"), this.j[K] = ymW(this, f)
                }
        if (v) {
            N = [];
            v = Array.from(v.childNodes);
            v = g.h(v);
            for (f = v.next(); !f.done; f = v.next())
                if (f = f.value, f.nodeType === 1) switch (f.tagName) {
                    case "w":
                        this.G = Wri(this, f, k, !1);
                        (f = this.X[this.G.id]) && f.end > this.G.start && (f.end = this.G.start);
                        this.X[this.G.id] = this.G;
                        N.push(this.G);
                        break;
                    case "p":
                        var S = f;
                        U = k;
                        K = [];
                        M = S.getAttribute("w") ||
                            this.J;
                        H = !!hq(S, "a");
                        U = (cv(S, "t") || 0) + U;
                        var b = cv(S, "d") || 5E3;
                        H || (!this.T && this.D && this.D.windowId === M && this.D.end > U && (this.D.end = U), this.D && this.D.text === "\n" && (this.D.text = ""));
                        var m = H ? 6 : 5,
                            n = S.getAttribute("p");
                        n = n ? this.pens[n] : null;
                        var x = Array.from(S.childNodes);
                        x.length && (this.T = S.getAttribute("d") != null);
                        for (S = 0; S < x.length; S++) {
                            var O = x[S],
                                d = void 0;
                            S > 0 && (H = !0);
                            var G = void 0;
                            O.nodeType === 1 && (G = O);
                            if (G && G.tagName === "s") {
                                if ((O = (O = G.getAttribute("p")) ? this.pens[O] : null) && O.lz && (O.lz === 1 ? (O = x.slice(S,
                                        S + 4), O.length === 4 && (d = rm4(U, b, M, H, m, O, this.pens), S += 3)) : d = rm4(U, b, M, H, m, [G], this.pens)), !d) {
                                    var W = G;
                                    d = U;
                                    G = b;
                                    O = M;
                                    var J = H,
                                        c = m,
                                        Z = W.textContent ? W.textContent : "",
                                        X = W.getAttribute("p");
                                    X = X ? this.pens[X] : null;
                                    W = cv(W, "t") || 0;
                                    d = new oz(d + W, G - W, c, O, Z, J, X)
                                }
                            } else d = new oz(U, b, m, M, O.textContent || "", H, n);
                            K.push(d);
                            this.D = d
                        }
                        if (K.length > 0)
                            for (K[0].windowId === this.J && (this.G = Wri(this, f, k, !0), N.push(this.G)), f = g.h(K), K = f.next(); !K.done; K = f.next()) K = K.value, K.windowId = this.G.id, this.G.G.push(K), N.push(K)
                }
            k = N
        } else k = [];
        return k
    };
    var UKh = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.w(un, YV);
    un.prototype.reset = function() {
        this.D.clear()
    };
    un.prototype.Y = function(f, k) {
        var K = JSON.parse(f);
        if (!K) return [];
        if (K.pens) {
            f = 0;
            for (var N = g.h(K.pens), v = N.next(); !v.done; v = N.next()) {
                v = v.value;
                var M = {},
                    H = v.pParentId;
                H && Object.assign(M, this.G.get(H));
                v.bAttr && (M.bold = !0);
                v.iAttr && (M.italic = !0);
                v.uAttr && (M.underline = !0);
                H = v.ofOffset;
                H != null && (M.offset = H);
                v.szPenSize !== void 0 && (M.fontSizeIncrement = v.szPenSize / 100 - 1);
                H = v.etEdgeType;
                H != null && (M.charEdgeStyle = H);
                v.ecEdgeColor !== void 0 && (M.Pf = az(v.ecEdgeColor));
                H = v.fsFontStyle;
                H != null && H !== 0 && (M.fontFamily =
                    H);
                v.fcForeColor !== void 0 && (M.color = az(v.fcForeColor));
                v.foForeAlpha !== void 0 && (M.textOpacity = v.foForeAlpha / 255);
                v.bcBackColor !== void 0 && (M.background = az(v.bcBackColor));
                v.boBackAlpha !== void 0 && (M.backgroundOpacity = v.boBackAlpha / 255);
                (H = v.rbRuby) && H !== 10 && (M.lz = H > 10 ? H - 1 : H, M.textEmphasis = UKh.get(M.lz));
                v.hgHorizGroup && (M.Jr = v.hgHorizGroup);
                this.G.set(f++, M)
            }
        }
        if (K.wsWinStyles)
            for (f = 0, N = g.h(K.wsWinStyles), v = N.next(); !v.done; v = N.next()) v = v.value, M = {}, (H = v.wsParentId) ? Object.assign(M, this.J.get(H)) : Object.assign(M,
                this.T), v.mhModeHint !== void 0 && (M.YO = v.mhModeHint), v.juJustifCode !== void 0 && (M.textAlign = v.juJustifCode), v.pdPrintDir !== void 0 && (M.eK = v.pdPrintDir), v.sdScrollDir !== void 0 && (M.kA = v.sdScrollDir), v.wfcWinFillColor !== void 0 && (M.windowColor = az(v.wfcWinFillColor)), v.wfoWinFillAlpha !== void 0 && (M.windowOpacity = v.wfoWinFillAlpha / 255), this.J.set(f++, M);
        if (K.wpWinPositions)
            for (f = 0, N = g.h(K.wpWinPositions), v = N.next(); !v.done; v = N.next()) v = v.value, M = {}, (H = v.wpParentId) && Object.assign(M, this.V.get(H)), v.ahHorPos !==
                void 0 && (M.mG = v.ahHorPos), v.apPoint !== void 0 && (M.LF = v.apPoint), v.avVerPos !== void 0 && (M.zn = v.avVerPos), v.ccCols !== void 0 && (M.bB = v.ccCols), v.rcRows !== void 0 && (M.Sp = v.rcRows), this.V.set(f++, M);
        if (K.events) {
            f = [];
            K = g.h(K.events);
            for (N = K.next(); !N.done; N = K.next()) {
                var U = N.value;
                v = (U.tStartMs || 0) + k;
                M = U.dDurationMs || 0;
                if (U.id) H = String(U.id), N = CS5(this, U, v, M, H), f.push(N), this.D.set(H, N);
                else {
                    U.wWinId ? H = U.wWinId.toString() : (H = "_" + Rz++, N = CS5(this, U, v, M, H), f.push(N), this.D.set(H, N));
                    N = f;
                    var S = U;
                    M === 0 && (M = 5E3);
                    U = this.D.get(H);
                    var b = !!S.aAppend,
                        m = b ? 6 : 5,
                        n = S.segs,
                        x = null;
                    S.pPenId && (x = this.G.get(S.pPenId));
                    for (S = 0; S < n.length; S++) {
                        var O = n[S],
                            d = O.utf8;
                        if (d) {
                            var G = O.tOffsetMs || 0,
                                W = null;
                            O.pPenId && (W = this.G.get(O.pPenId));
                            if ((U.params.YO != null ? U.params.YO : U.G.length > 1 ? 1 : 0) === 2 && b && d === "\n") continue;
                            O = null;
                            var J = [],
                                c;
                            if (c = W && W.lz === 1) {
                                c = n;
                                var Z = S;
                                if (Z + 3 >= c.length || !c[Z + 1].pPenId || !c[Z + 2].pPenId || !c[Z + 3].pPenId) c = !1;
                                else {
                                    var X = c[Z + 1].pPenId;
                                    (X = this.G.get(X)) && X.lz && X.lz === 2 ? (X = c[Z + 2].pPenId, X = this.G.get(X), !X || !X.lz ||
                                        X.lz < 3 ? c = !1 : (X = c[Z + 3].pPenId, c = (X = this.G.get(X)) && X.lz && X.lz === 2 ? !0 : !1)) : c = !1
                                }
                            }
                            if (c) G = n[S + 1].utf8, O = n[S + 3].utf8, c = n[S + 2].utf8, Z = this.G.get(n[S + 2].pPenId), d = teJ(d, G, c, O, Z), O = new oz(v, M, m, H, d, b, W), S += 3;
                            else {
                                if (d.indexOf("<") > -1) {
                                    var F = void 0;
                                    J = W;
                                    c = x;
                                    Z = v;
                                    X = M;
                                    var p = G,
                                        I = m,
                                        fW = b,
                                        kK = [],
                                        HR = g.$b("<html>" + d + "</html>");
                                    if (!HR.getElementsByTagName("parsererror").length && ((F = HR.firstChild) == null ? 0 : F.childNodes.length))
                                        for (F = g.h(HR.firstChild.childNodes), HR = F.next(); !HR.done; HR = F.next()) {
                                            HR = HR.value;
                                            var xK = void 0,
                                                KW = void 0,
                                                yM = (KW = (xK = HR.textContent) == null ? void 0 : xK.replace(/\n/g, "")) != null ? KW : "";
                                            if (HR.nodeType !== 3 || yM && yM.match(/^ *$/) == null) {
                                                xK = {};
                                                Object.assign(xK, J || c);
                                                KW = void 0;
                                                switch ((KW = HR) == null ? void 0 : KW.tagName) {
                                                    case "b":
                                                        xK.bold = !0;
                                                        break;
                                                    case "i":
                                                        xK.italic = !0;
                                                        break;
                                                    case "u":
                                                        xK.underline = !0
                                                }
                                                kK.push(new oz(Z + p, X - p, I, U.id, yM, fW, xK))
                                            }
                                        }
                                    J = kK
                                }
                                J.length || (J = [new oz(v + G, M - G, m, U.id, d, b, W || x)])
                            }
                            if (J.length)
                                for (b = g.h(J), W = b.next(); !W.done; W = b.next()) W = W.value, N.push(W), U.G.push(W);
                            else O && (N.push(O), U.G.push(O))
                        }
                        b = !0
                    }
                }
            }
            k = f
        } else k = [];
        return k
    };
    g.w(eG, g.rK);
    eG.prototype.L0 = function(f, k, K) {
        Rdc(this.videoData.videoId, f.vssId, K.Lx)
    };
    eG.prototype.rr = function(f) {
        if (this.audioTrack)
            for (var k = g.h(this.audioTrack.captionTracks), K = k.next(); !K.done; K = k.next()) g.tI(this.G, K.value);
        f.vp()
    };
    g.w(Lq, gX);
    Lq.prototype.Lr = function(f) {
        var k = this.D.G;
        gX.prototype.Lr.call(this, f);
        for (f = f.length; f < k.length; f++) {
            var K = k[f];
            if (M && K.G === v) var N = M;
            else {
                N = {};
                Object.assign(N, K.G);
                Object.assign(N, S2c);
                var v = K.G;
                var M = N
            }
            ILW(this, K, N)
        }
    };
    var S2c = {
        N9w: !0
    };
    g.w(jG, dIh);
    jG.prototype.V = function(f, k, K, N, v) {
        if (K < N) {
            var M = "_" + Rz++;
            K = K / 1E3 - this.T;
            N = N / 1E3 - this.T;
            f = new Jq(K, N - K, 5, M, {
                textAlign: 0,
                LF: 0,
                mG: k * 2.5,
                zn: f * 5.33
            });
            v = new oz(K, N - K, 5, M, v);
            this.D.push(f);
            this.D.push(v)
        }
    };
    g.w(Aq, YV);
    Aq.prototype.Y = function(f) {
        f = new jG(f, f.byteLength, this.D);
        if (oGv(f)) {
            for (; f.byteOffset < f.G.byteLength;)
                for (f.version === 0 ? f.Y = s5(f) * (1E3 / 45) : f.version === 1 && (f.Y = s5(f) * 4294967296 + s5(f)), f.J = pq(f); f.J > 0; f.J--) {
                    var k = pq(f),
                        K = pq(f),
                        N = pq(f);
                    k & 4 && (k & 3) === this.track && (this.track === 0 || this.track === 1) && (k = this.G, k.G.push({
                        time: f.Y,
                        type: this.track,
                        uv: K,
                        P5: N,
                        order: k.G.length
                    }))
                }
            NE0(this.G, f);
            return f.D
        }
        return []
    };
    Aq.prototype.reset = function() {
        this.G.clear()
    };
    g.w(E5, gX);
    g.t = E5.prototype;
    g.t.eq = function() {
        g.vI(this.BO)
    };
    g.t.Vq = function() {
        this.element.removeEventListener("transitionend", this.Vq, !1);
        g.xq(this.element, "ytp-rollup-mode");
        this.I9(this.Qj, !0)
    };
    g.t.hK = function() {
        return this.Y ? this.xn : this.j
    };
    g.t.sf = function() {
        return this.Y ? this.j : this.xn
    };
    g.t.I9 = function(f, k) {
        this.Qj = f;
        if (this.D.params.Sp) {
            for (var K = 0, N = 0; N < this.T.length && K < f.length; N++) this.T[N] === f[K] && K++;
            K > 0 && K < f.length && (f = this.T.concat(f.slice(K)));
            this.xV = this.xn;
            this.j = this.xn = 0;
            gX.prototype.I9.call(this, f);
            BEc(this, k)
        }
        gX.prototype.I9.call(this, f)
    };
    cmc.prototype.unload = function() {
        this.G != null && (this.L.removeEventListener("sabrCaptionsDataLoaded", this.G), this.G = null);
        this.D0 = [];
        this.L.publish("sabrCaptionsBufferedRangesUpdated", this.D0)
    };
    cmc.prototype.Cy = function(f) {
        return {
            formatId: g.$n(f.info.sC.info, this.td),
            OC: f.info.OC + (this.td ? 0 : 1),
            startTimeMs: f.info.V * 1E3,
            durationMs: f.info.X * 1E3
        }
    };
    g.w(Fx, g.rK);
    Fx.prototype.L0 = function(f, k, K) {
        this.uT();
        k = f.getId();
        k = k != null && k in this.D.G ? this.D.G[k] : null;
        k || (k = f.languageCode, k = this.D.isManifestless ? XK1(this, k, "386") : XK1(this, k));
        k && (this.V = f, this.T = k, Zc0(this.X, K), this.L.publish("sabrCaptionsTrackChanged", g.$n(k.info, this.D.td)))
    };
    Fx.prototype.rr = function(f) {
        var k = this.D.isManifestless ? q3J(this, "386") : q3J(this);
        k = g.h(k);
        for (var K = k.next(); !K.done; K = k.next()) g.tI(this.G, K.value);
        f.vp()
    };
    Fx.prototype.uT = function() {
        this.V && (this.V = this.T = null, this.X.unload(), this.L.publish("sabrCaptionsTrackChanged", null))
    };
    Fx.prototype.AN = function() {
        return ""
    };
    var eEW = "WEBVTT".split("").map(function(f) {
        return f.charCodeAt(0)
    });
    g.w(alh, YV);
    alh.prototype.Y = function(f, k) {
        f instanceof ArrayBuffer && (f = g.J_(new Uint8Array(f)));
        var K = [];
        f = f.split(b53);
        for (var N = 1; N < f.length; N++) {
            var v = f[N],
                M = k;
            if (v !== "" && !mK4.test(v)) {
                var H = nEv.exec(v);
                if (H && H.length >= 4) {
                    var U = pK0(H[1]),
                        S = pK0(H[2]) - U;
                    U += M;
                    var b = (H = H[3]) ? H.split(" ") : [];
                    H = {};
                    var m = null;
                    var n = "";
                    var x = null,
                        O = "";
                    b = g.h(b);
                    for (var d = b.next(); !d.done; d = b.next())
                        if (d = d.value.split(":"), d.length === 2) {
                            var G = d[1];
                            switch (d[0]) {
                                case "line":
                                    d = G.split(",");
                                    d[0].endsWith("%") && (m = d[0], H.zn = Number.parseInt(m,
                                        10), d.length === 2 && (n = d[1].trim()));
                                    break;
                                case "position":
                                    d = G.split(",");
                                    x = d[0];
                                    H.mG = Number.parseInt(x, 10);
                                    d.length === 2 && (O = d[1].trim());
                                    break;
                                case "align":
                                    switch (G) {
                                        case "start":
                                            H.textAlign = 0;
                                            break;
                                        case "middle":
                                            H.textAlign = 2;
                                            break;
                                        case "end":
                                            H.textAlign = 1
                                    }
                            }
                        }
                    m || n || (n = "end");
                    if (!x) switch (H.textAlign) {
                        case 0:
                            H.mG = 0;
                            break;
                        case 1:
                            H.mG = 100;
                            break;
                        case 2:
                            H.mG = 50
                    }
                    if (H.textAlign != null) {
                        m = 0;
                        switch (n) {
                            case "center":
                                m += 3;
                                break;
                            case "end":
                                m += 6;
                                break;
                            default:
                                m += 0
                        }
                        switch (O) {
                            case "line-left":
                                m += 0;
                                break;
                            case "center":
                                m +=
                                    1;
                                break;
                            case "line-right":
                                m += 2;
                                break;
                            default:
                                switch (H.textAlign) {
                                    case 0:
                                        m += 0;
                                        break;
                                    case 2:
                                        m += 1;
                                        break;
                                    case 1:
                                        m += 2
                                }
                        }
                        n = m < 0 || m > 8 ? 7 : m;
                        H.LF = n
                    }
                    v = v.substring(nEv.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    O = H;
                    H = v;
                    v = {};
                    if (H.indexOf("<") < 0 && H.indexOf("&") < 0) M = sx0(U, S, 5, O), S = new oz(U, S, 5, M.id, H, !1, g.h4(v) ? void 0 : v), K.push(M), K.push(S), M.G.push(S);
                    else
                        for (n = H.split(O53), n.length === 1 ? (H = 5, O = sx0(U, S, H, O)) : (m = H = 6, O = Object.assign({
                                bB: 32
                            }, O), O = new Jq(U, S, m, "_" + Rz++, O)), K.push(O), m = U, x = 0; x < n.length; x++) b = n[x],
                            x % 2 === 0 ? (d = g.$b("<html>" + b + "</html>"), d.getElementsByTagName("parsererror").length ? (G = d.createElement("span"), G.appendChild(d.createTextNode(b))) : G = d.firstChild, jx7(this, m, S - (m - U), H, O, x > 0, G, v, K)) : m = pK0(b) + M
                }
                nEv.lastIndex = 0
            }
        }
        return K
    };
    var mK4 = /^NOTE/,
        b53 = /(?:\r\n|\r|\n){2,}/,
        nEv = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        O53 = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.w(Pv, g.A);
    Pv.prototype.clear = function() {
        this.G && this.G.dispose();
        this.G = null
    };
    Pv.prototype.reset = function() {
        this.G && this.G.reset()
    };
    Pv.prototype.VD = function() {
        g.A.prototype.VD.call(this);
        this.clear()
    };
    var fh = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        LF: 7,
        mG: 50,
        zn: 100,
        isDefault: !0,
        I2: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.w(Vev, g.dK);
    g.t = Vev.prototype;
    g.t.VD = function() {
        if (this.V || this.cH) {
            var f = this.L.qr();
            f && !f.r9() && f.WG()
        } else H5h(this, !1);
        g.dK.prototype.VD.call(this)
    };
    g.t.GG = function() {
        return this.K.Z("html5_honor_caption_availabilities_in_audio_track") && this.Y !== "LIVE" && this.Y !== "SABR_LIVE"
    };
    g.t.DK = function() {
        if (this.qx) return this.V || this.cH;
        if (this.Y === "HLS") return this.V;
        var f = this.getAudioTrack();
        if (this.GG()) {
            if (!f.captionTracks.length) return !1;
            if (!this.D) return !0
        }
        f = Cor(f, g.xp(this.K));
        return f === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? !0 : f === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" ? D_(this) : Il5(this) || D_(this) ? !0 : ic0(this)
    };
    g.t.load = function() {
        g.dK.prototype.load.call(this);
        this.Fj = this.getAudioTrack();
        if (this.D) this.G && (this.Sz.clear(), this.V ? TE1(this, !0) : this.player.getPresentingPlayerType() !== 3 && this.D.L0(this.G, "json3", this.xV), this.Y !== "HLS" && this.V || this.cH || $V(this) || this.player.lR("captionschanged", g.uP(this.G)));
        else {
            var f;
            this.Y === "OFFLINE" ? f = new eG(this.player, this.videoData, this.getAudioTrack()) : this.Y === "SABR_LIVE" ? f = new Fx(this.videoData.G, this.player) : this.Y === "HLS" ? f = new Xr7(this.player) : this.Y === "LIVE" ?
                f = new xV(this.videoData.G, this.player) : this.Y === "INNERTUBE" ? f = new g.wK(this.player, this.videoData, this.getAudioTrack()) : f = new g.yo(this.player, this.videoData.Qj, this.videoData.videoId, g.TWK(this.videoData), this.videoData.XK, this.videoData.eventId);
            this.D = f;
            g.E(this, this.D);
            this.D.rr(this.xV)
        }
    };
    g.t.unload = function() {
        this.V && this.G ? TE1(this, !1) : (this.Zw && g.MN(this.Zw), this.player.fS("captions"), this.QD = [], this.D && this.D.uT(), this.Sz.clear(), this.xn && this.player.yK(this.xn), this.SR());
        g.dK.prototype.unload.call(this);
        this.player.h4();
        this.player.lR("captionschanged", {})
    };
    g.t.create = function() {
        this.DK() && this.load();
        var f;
        a: {
            var k, K, N;
            if (this.K.Z("web_player_nitrate_promo_tooltip") && ((k = this.videoData.getPlayerResponse()) == null ? 0 : (K = k.captions) == null ? 0 : (N = K.playerCaptionsTracklistRenderer) == null ? 0 : N.enableTouchCaptionsNitrate)) {
                var v, M;
                if (k = (f = this.videoData.getPlayerResponse()) == null ? void 0 : (v = f.captions) == null ? void 0 : (M = v.playerCaptionsTracklistRenderer) == null ? void 0 : M.captionTracks)
                    for (f = g.h(k), v = f.next(); !v.done; v = f.next())
                        if (v = v.value, v.kind === "asr" && v.languageCode ===
                            "en") {
                            f = !0;
                            break a
                        }
            }
            f = !1
        }
        f && this.L.publish("showpromotooltip", this.j.element)
    };
    g.t.vp = function() {
        var f = Cor(this.player.getAudioTrack(), g.xp(this.K));
        var k = f === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? VI(this, this.X) : f === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" && D_(this) ? QI(this) : Il5(this) || this.X || ic0(this) ? VI(this, this.X) : D_(this) ? QI(this) : null;
        if (this.Y !== "HLS" && this.V || this.cH) {
            var K = g.IF(this.D.G, !0);
            f = [];
            for (var N = 0; N < K.length; N++) {
                var v = K[N],
                    M = g.h$("TRACK");
                M.setAttribute("kind", "subtitles");
                M.setAttribute("label", g.X4(v));
                M.setAttribute("srclang", g.aP(v));
                M.setAttribute("id",
                    v.toString());
                this.cH || M.setAttribute("src", this.D.AN(v, "vtt"));
                v === k && M.setAttribute("default", "1");
                f.push(M)
            }
            k = this.L.qr();
            k.Zv(f);
            f = k.RM();
            this.vH && this.Rw.C(f.textTracks, "change", this.BKw)
        } else !this.G && k && Tv(this, k), this.player.lR("onCaptionsTrackListChanged"), this.player.R5("onApiChange")
    };
    g.t.getTrackById = function(f) {
        for (var k = g.IF(this.D.G, !0), K = 0; K < k.length; K++)
            if (k[K].toString() === f) return k[K];
        return null
    };
    g.t.BKw = function() {
        for (var f = this.L.qr().RM().textTracks, k = null, K = 0; K < f.length; K++) f[K].mode === "showing" && (k = this.getTrackById(f[K].id));
        (this.loaded ? this.G : null) !== k && Tv(this, k, !0)
    };
    g.t.Vuk = function() {
        var f;
        (f = this.D) == null || f.rr(this.xV)
    };
    g.t.X74 = function() {
        !this.G && this.V || this.unload()
    };
    g.t.Lx = function(f, k, K, N) {
        if (f) {
            var v;
            fDv(this, (v = this.G) != null ? v : void 0);
            this.D.UU() && (this.QD = [], this.L.fS("captions"), nq(this.L9), this.Sz.reset());
            a: {
                v = this.Sz;N = N || 0;K = EG7(v, f, K || 0);f = [];
                try {
                    for (var M = g.h(K), H = M.next(); !H.done; H = M.next()) {
                        var U = H.value,
                            S = U.trackData,
                            b = U.Zm,
                            m = v.K.Z("safari_live_drm_captions_fix");
                        if (typeof S !== "string") {
                            K = f;
                            var n = K.concat;
                            if (m && Lrp(S)) var x = Fr4(v, S, b);
                            else {
                                var O = v,
                                    d = k,
                                    G = S,
                                    W = b,
                                    J = N;
                                if (!Y37(G)) throw Error("Invalid binary caption track data");
                                O.G || (O.G = new Aq(J, d));
                                x = O.G.Y(G, W)
                            }
                            var c = n.call(K, x)
                        } else {
                            if (S.substring(0, 6) === "WEBVTT") var Z = f.concat(Fr4(v, S, b));
                            else {
                                K = f;
                                var X = K.concat;
                                b: {
                                    d = O = void 0;G = v;W = k;
                                    if (S[0] === "{") try {
                                        G.G || (G.G = new un(PS1(W)));
                                        var F = d = G.G.Y(S, b);
                                        break b
                                    } catch (KW) {
                                        g.qk(KW);
                                        F = [];
                                        break b
                                    }
                                    var p = g.$b(S);
                                    if (!p || !p.firstChild) {
                                        var I = Error("Invalid caption track data");
                                        I.params = S;
                                        throw I;
                                    }
                                    if (p.firstChild.tagName === "timedtext") {
                                        if (Number(p.firstChild.getAttribute("format")) === 3) {
                                            G.G || (G.G = new Bv(PS1(W), G.K));
                                            F = O = G.G.Y(p, b);
                                            break b
                                        }
                                        var fW = Error("Unsupported subtitles format in web player (Format2)");
                                        fW.params = S;
                                        throw fW;
                                    }
                                    if (p.firstChild.tagName === "transcript") {
                                        var kK = Error("Unsupported subtitles format in web player (Format1)");
                                        kK.params = S;
                                        throw kK;
                                    }
                                    var HR = Error("Invalid caption track data");HR.params = S;
                                    throw HR;
                                }
                                Z = X.call(K, F)
                            }
                            c = Z
                        }
                        f = c
                    }
                    var xK = f;
                    break a
                } catch (KW) {
                    g.hL(v.logger, 187101178, "Captions parsing failed: " + KW.message + ". ");
                    v.clear();
                    xK = [];
                    break a
                }
                xK = void 0
            }
            k = xK;
            k.length > 0 && (xK = this.G, this.Vy(xK, !!xK, $V(this) ? "g" : this.X ? "m" : "s"));
            this.player.yK(k, void 0, this.Y === "LIVE" || this.Y === "SABR_LIVE");
            !this.X || this.cH || $V(this) || g.wj(this.K) || g.f7(this.K) || g.jw(this.K) || this.K.BH === "shortspage" || this.player.isInline() || (g.MN(this.Zw), k = wK5({
                    LF: 0,
                    mG: 5,
                    zn: 5,
                    Sp: 2,
                    textAlign: 0,
                    eK: 0,
                    lang: "id"
                }), this.Mx = [k], xK = ["Klik ", " untuk mengubah setelan"], this.u2 || (M = new g.bH(g.ZZ()), g.E(this, M), this.u2 = M.element), M = k.end - k.start, (H = g.X4(this.G)) && this.Mx.push(new oz(k.start, M, 0, k.id, H)), this.Mx.push(new oz(k.start, M, 0, k.id, xK[0]), new oz(k.start, M, 0, k.id, this.u2, !0), new oz(k.start, M, 0, k.id, xK[1], !0)), this.player.yK(this.Mx),
                g.NN(this.Zw));
            !this.X || this.cH || $V(this) || (g.xp(this.K) ? Iz(this, !0) : zv(this, !0), this.Fj && (this.Fj.V = this.G), this.player.h4());
            this.X = !1
        }
    };
    g.t.onCueRangeEnter = function(f) {
        this.QD.push(f);
        nq(this.L9)
    };
    g.t.onCueRangeExit = function(f) {
        g.Nd(this.QD, f);
        this.D instanceof xV && this.D.X && this.player.E3([f]);
        nq(this.L9)
    };
    g.t.getCaptionWindowContainerId = function() {
        return this.j.element.id
    };
    g.t.BLH = function() {
        MfW(this, this.Mx);
        this.Mx = null
    };
    g.t.wS = function() {
        var f = this;
        if (!this.BO || !this.V) {
            this.L9.stop();
            g.UWA(this.Xj);
            this.QD.sort(g.VR);
            var k = this.QD;
            if (this.xn) {
                var K = g.Aw(k, function(M) {
                    return this.xn.indexOf(M) === -1
                }, this);
                K.length && (k = K)
            }
            k = g.h(k);
            for (K = k.next(); !K.done; K = k.next()) Kf4(this, K.value);
            k = g.h(Object.entries(this.BH));
            var N = k.next();
            for (K = {}; !N.done; K = {
                    ZF: void 0,
                    s9: void 0
                }, N = k.next()) {
                var v = g.h(N.value);
                N = v.next().value;
                v = v.next().value;
                K.ZF = N;
                K.s9 = v;
                this.Xj[K.ZF] ? (K.s9.element.parentNode || (K.s9 instanceof E5 || K.s9 instanceof Lq || g.lv(this.BH, function(M) {
                    return function(H, U) {
                        U !== M.ZF && H.D.params.LF === M.s9.D.params.LF && H.D.params.mG === M.s9.D.params.mG && H.D.params.zn === M.s9.D.params.zn && (H.dispose(), delete f.BH[U]);
                        return U === M.ZF
                    }
                }(K), this), this.j.element.appendChild(K.s9.element)), K.s9.I9(this.Xj[K.ZF])) : (K.s9.dispose(), delete this.BH[K.ZF])
            }
        }
    };
    g.t.AGj = function() {
        Qx4(this, {}, !0);
        this.player.lR("captionssettingschanged")
    };
    g.t.lk = function() {
        var f = fh.I2;
        f = {
            background: f.background,
            backgroundOpacity: f.backgroundOpacity,
            charEdgeStyle: f.charEdgeStyle,
            color: f.color,
            fontFamily: f.fontFamily,
            fontSizeIncrement: f.fontSizeIncrement,
            fontStyle: f.bold && f.italic ? 3 : f.bold ? 1 : f.italic ? 2 : 0,
            textOpacity: f.textOpacity,
            windowColor: fh.windowColor,
            windowOpacity: fh.windowOpacity
        };
        var k = qEh() || {};
        k.background != null && (f.background = k.background);
        k.backgroundOverride != null && (f.backgroundOverride = k.backgroundOverride);
        k.backgroundOpacity != null && (f.backgroundOpacity =
            k.backgroundOpacity);
        k.backgroundOpacityOverride != null && (f.backgroundOpacityOverride = k.backgroundOpacityOverride);
        k.charEdgeStyle != null && (f.charEdgeStyle = k.charEdgeStyle);
        k.charEdgeStyleOverride != null && (f.charEdgeStyleOverride = k.charEdgeStyleOverride);
        k.color != null && (f.color = k.color);
        k.colorOverride != null && (f.colorOverride = k.colorOverride);
        k.fontFamily != null && (f.fontFamily = k.fontFamily);
        k.fontFamilyOverride != null && (f.fontFamilyOverride = k.fontFamilyOverride);
        k.fontSizeIncrement != null && (f.fontSizeIncrement =
            k.fontSizeIncrement);
        k.fontSizeIncrementOverride != null && (f.fontSizeIncrementOverride = k.fontSizeIncrementOverride);
        k.fontStyle != null && (f.fontStyle = k.fontStyle);
        k.fontStyleOverride != null && (f.fontStyleOverride = k.fontStyleOverride);
        k.textOpacity != null && (f.textOpacity = k.textOpacity);
        k.textOpacityOverride != null && (f.textOpacityOverride = k.textOpacityOverride);
        k.windowColor != null && (f.windowColor = k.windowColor);
        k.windowColorOverride != null && (f.windowColorOverride = k.windowColorOverride);
        k.windowOpacity != null &&
            (f.windowOpacity = k.windowOpacity);
        k.windowOpacityOverride != null && (f.windowOpacityOverride = k.windowOpacityOverride);
        return f
    };
    g.t.F3 = function(f, k) {
        var K = {};
        Object.assign(K, qEh());
        Object.assign(K, f);
        Qx4(this, K, k);
        this.player.lR("captionssettingschanged")
    };
    g.t.SR = function() {
        !this.V && this.loaded && (g.Oh(this.BH, function(f, k) {
            f.dispose();
            delete this.BH[k]
        }, this), this.wS())
    };
    g.t.qf = function(f, k) {
        switch (f) {
            case "fontSize":
                if (isNaN(k)) break;
                f = g.v5(k, -2, 4);
                this.F3({
                    fontSizeIncrement: f
                });
                return f;
            case "reload":
                k && !this.V && Tv(this, this.G, !0);
                break;
            case "stickyLoading":
                k !== void 0 && this.K.j && (g.xp(this.K) ? Iz(this, !!k) : zv(this, !!k));
                break;
            case "track":
                return vEi(this, k);
            case "tracklist":
                return this.D ? g.ZL(g.IF(this.D.G, !(!k || !k.includeAsr)), function(K) {
                    return g.uP(K)
                }) : [];
            case "translationLanguages":
                return this.D ? this.D.J.map(function(K) {
                    return Object.assign({}, K)
                }) : [];
            case "sampleSubtitles":
                this.V || k === void 0 || H5h(this, !!k);
                break;
            case "sampleSubtitlesCustomized":
                this.V || H5h(this, !!k, k);
                break;
            case "recommendedTranslationLanguages":
                return g.e8();
            case "defaultTranslationSourceTrackIndices":
                return this.D ? this.D.j : []
        }
    };
    g.t.getOptions = function() {
        var f = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.K.j && f.push("stickyLoading");
        return f
    };
    g.t.G7 = function() {
        var f = this.G;
        if (this.L.Wr("captions")) {
            if (this.K.Z("html5_modify_caption_vss_logging")) {
                var k;
                return (f = (k = this.videoData.r7) != null ? k : null) ? {
                    cc: g.DCA(f)
                } : {}
            }
            if (f) return k = f.vssId, f.translationLanguage && k && (k = "t" + k + "." + g.aP(f)), {
                cc: k
            }
        }
        return {}
    };
    g.t.ei9 = function() {
        this.isSubtitlesOn() ? (g.xp(this.K) ? Iz(this, !1) : zv(this, !1), fDv(this), Tv(this, null, !0)) : this.kR()
    };
    g.t.kR = function() {
        var f = $V(this) || !this.G ? VI(this, !0) : this.G;
        f && this.OJ(f.vssId, "m");
        this.isSubtitlesOn() || Tv(this, $V(this) || !this.G ? VI(this, !0) : this.G, !0)
    };
    g.t.isSubtitlesOn = function() {
        return !!this.loaded && !!this.G && !$V(this)
    };
    g.t.a0C = function() {
        var f = $V(this);
        D_(this, f) ? Tv(this, this.getAudioTrack().G, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.GG() && (this.X = !1, this.G = null, this.D && (this.D.dispose(), this.D = null)), this.DK() && (f ? Tv(this, VI(this, !1), !1) : this.load()))
    };
    g.t.ym = function(f) {
        f && (this.Yn = {
            top: f.top,
            right: f.right,
            bottom: f.bottom,
            left: f.left,
            width: 1 - f.left - f.right,
            height: 1 - f.top - f.bottom
        }, this.j.element.style.top = this.Yn.top * 100 + "%", this.j.element.style.left = this.Yn.left * 100 + "%", this.j.element.style.width = this.Yn.width * 100 + "%", this.j.element.style.height = this.Yn.height * 100 + "%", this.j.element.style.position = "absolute", f = Nxh(this)) && (this.j.element.style.width = f.width + "px", this.j.element.style.height = f.height + "px")
    };
    g.t.onVideoDataChange = function(f, k) {
        f === "newdata" && (this.videoData = k, this.loaded && this.unload(), this.X = !1, this.G = null, this.D && (this.D.dispose(), this.D = null, this.player.lR("captionschanged", {})), this.DK() && this.load())
    };
    g.t.getAudioTrack = function() {
        return this.player.getAudioTrack()
    };
    g.t.pUD = function() {
        var f = this.L.qr();
        f && !f.r9() && f.WG();
        this.L.isFullscreen() ? (this.V = this.qx = !0, this.loaded && this.vp()) : (this.qx = this.K.controlsType === "3", this.V = DIp(this));
        Tv(this, this.G)
    };
    g.t.ZX = function() {
        var f, k, K, N = (f = this.videoData.getPlayerResponse()) == null ? void 0 : (k = f.captions) == null ? void 0 : (K = k.playerCaptionsTracklistRenderer) == null ? void 0 : K.openTranscriptCommand;
        N && this.player.zk("innertubeCommand", N)
    };
    g.t.Vy = function(f, k, K) {
        var N = /&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm,
            v = "";
        f && (v = f.vssId, v = v.replace(N, ""));
        var M = "";
        f && f.getId() && (M = f.getId() || "");
        f && f.getXtags() && (f = f.getXtags(), f = f.replace(N, ""), M = M.concat(";" + f));
        this.Y === "HLS" && (M = "");
        this.L.Vy(k ? v : "", k ? M : "", K)
    };
    g.t.OJ = function(f, k) {
        f = (f || "").replace(/&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm, "");
        f.length > 0 && this.L.OJ(f, k)
    };
    g.gK("captions", Vev);
})(_yt_player);