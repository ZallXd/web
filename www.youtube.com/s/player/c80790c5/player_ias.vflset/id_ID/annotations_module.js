(function(g) {
    var window = this;
    'use strict';
    var hT = function(f) {
            f.publish("cardstatechange", f.bd() && f.h9() ? 1 : 0)
        },
        Z5 = function(f, k) {
            var K = g.Zp(k),
                N = K ? k : arguments;
            for (K = K ? 0 : 1; K < N.length; K++) {
                if (f == null) return;
                f = f[N[K]]
            }
            return f
        },
        qf7 = function(f) {
            var k = g.OE(f);
            f = g.dM(f);
            return new g.kf(k.x, k.y, f.width, f.height)
        },
        X03 = function(f, k, K) {
            var N = N === void 0 ? {} : N;
            var v;
            return v = g.qS(f, k, function() {
                g.XK(v);
                K.apply(f, arguments)
            }, N)
        },
        u7 = function(f) {
            f = g.a7(f);
            delete qv[f];
            g.h4(qv) && Xa && Xa.stop()
        },
        aoq = function() {
            Xa || (Xa = new g.K_(function() {
                up1()
            }, 20));
            var f = Xa;
            f.isActive() || f.start()
        },
        up1 = function() {
            var f = g.Ar();
            g.Oh(qv, function(k) {
                eGh(k, f)
            });
            g.h4(qv) || aoq()
        },
        a6 = function(f, k, K, N) {
            g.tn.call(this);
            if (!Array.isArray(f) || !Array.isArray(k)) throw Error("Start and end parameters must be arrays");
            if (f.length != k.length) throw Error("Start and end points must be the same length");
            this.D = f;
            this.X = k;
            this.duration = K;
            this.J = N;
            this.coords = [];
            this.progress = this.T = 0;
            this.V = null
        },
        eGh = function(f, k) {
            k < f.startTime && (f.endTime = k + f.endTime - f.startTime, f.startTime = k);
            f.progress = (k - f.startTime) / (f.endTime - f.startTime);
            f.progress > 1 && (f.progress = 1);
            f.T = 1E3 / (k - f.V);
            f.V = k;
            LwJ(f, f.progress);
            f.progress == 1 ? (f.G = 0, u7(f), f.onFinish(), f.M4()) : f.isPlaying() && f.kL()
        },
        LwJ = function(f, k) {
            typeof f.J === "function" && (k = f.J(k));
            f.coords = Array(f.D.length);
            for (var K = 0; K < f.D.length; K++) f.coords[K] = (f.X[K] - f.D[K]) * k + f.D[K]
        },
        j_q = function(f, k) {
            g.Mp.call(this, f);
            this.coords = k.coords;
            this.x = k.coords[0];
            this.y = k.coords[1];
            this.z = k.coords[2];
            this.duration = k.duration;
            this.progress = k.progress;
            this.fps = k.T;
            this.state = k.G
        },
        ej = function(f, k, K, N, v) {
            a6.call(this, k, K, N, v);
            this.element = f
        },
        p0c = function(f, k, K, N, v) {
            if (k.length != 2 || K.length != 2) throw Error("Start and end points must be 2D");
            ej.call(this, f, k, K, N, v)
        },
        s_1 = function(f) {
            return Math.pow(f, 3)
        },
        A97 = function(f) {
            return 3 * f * f - 2 * f * f * f
        },
        Eer = function(f) {
            g.A.call(this);
            this.D = f || window;
            this.G = []
        },
        LQ = function(f) {
            return f.baseUrl || null
        },
        jj = function(f, k) {
            return g.Aw(g.ZL(f, k), function(K) {
                return !!K
            })
        },
        Fwq = function(f, k, K) {
            function N(kK) {
                var HR = kK.hovercardButton;
                if (!HR) return null;
                HR = HR.subscribeButtonRenderer;
                if (!HR) return null;
                var xK = M(HR.unsubscribedButtonText),
                    KW = M(HR.subscribedButtonText);
                if (HR.subscribed) {
                    var yM = M(HR.subscriberCountWithUnsubscribeText);
                    var iv = M(HR.subscriberCountText)
                } else yM = M(HR.subscriberCountText), iv = M(HR.subscriberCountWithSubscribeText);
                var lh = null;
                if (kK.signinEndpoint) {
                    lh = Z5(kK, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!lh) {
                        var HJ, QM;
                        lh = (QM = g.r((HJ = HR.signInEndpoint) == null ? void 0 : HJ.commandMetadata, g.W1)) == null ?
                            void 0 : QM.url
                    }
                    if (!lh) return null
                }
                return xK && (KW || lh) ? {
                    subscribed: HR.subscribed,
                    subscribeText: xK,
                    subscribeCount: yM,
                    unsubscribeText: KW,
                    unsubscribeCount: iv,
                    enabled: HR.enabled,
                    signinUrl: lh,
                    classic: kK.useClassicSubscribeButton
                } : null
            }

            function v(kK) {
                if (kK) {
                    var HR = [],
                        xK = kK.videoId;
                    xK && HR.push("v=" + xK);
                    (xK = kK.playlistId) && HR.push("list=" + xK);
                    (kK = kK.startTimeSeconds) && HR.push("t=" + kK);
                    return "/watch?" + HR.join("&")
                }
            }

            function M(kK) {
                if (!kK) return null;
                var HR = kK.simpleText;
                return HR ? HR : kK.runs ? g.ZL(kK.runs, function(xK) {
                    return xK.text
                }).join("") : null
            }
            k = k.endscreenElementRenderer;
            if (!k) return null;
            var H = k.style,
                U = k.endpoint || {},
                S = null,
                b = null,
                m = !1,
                n = null,
                x = null,
                O = null,
                d = null,
                G = !1,
                W = null,
                J = null,
                c = null,
                Z = null,
                X = null,
                F = null;
            if (H === "VIDEO") g.r(U, g.pf) ? S = g.r(U, g.pf).url : (F = g.r(U, g.wp), S = v(F)), b = !1, n = f, k.thumbnailOverlays ? (m = k.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, x = M(m.text), m = m.style === "LIVE") : x = M(k.videoDuration);
            else if (H === "PLAYLIST") g.r(U, g.pf) ? S = g.r(U, g.pf).url : (F = g.r(U, g.wp), S = v(F)), b = !1, n = f, O = M(k.playlistLength);
            else if (H ===
                "CHANNEL") {
                if (G = Z5(U, "browseEndpoint", "browseId")) d = G, S = "/channel/" + d;
                b = !1;
                n = "new";
                (G = !!k.isSubscribe) ? W = N(k): J = M(k.subscribersText)
            } else H === "WEBSITE" ? ((c = Z5(U, "urlEndpoint", "url")) && (S = c), b = !0, n = "new", c = k.icon.thumbnails[0].url) : H === "CREATOR_MERCHANDISE" && (k.productPrice && (Z = M(k.productPrice)), k.additionalFeesText && (X = M(k.additionalFeesText)), (b = Z5(U, "urlEndpoint", "url")) && (S = b), b = !0, n = "new");
            f = Z5(k, "title", "accessibility", "accessibilityData", "label");
            var p = k.endpoint ? k.endpoint.clickTrackingParams :
                null,
                I = "";
            if (k.metadata) {
                var fW = M(k.metadata);
                fW && (I = fW)
            }
            return {
                id: "element-" + K,
                type: H,
                title: M(k.title),
                metadata: I,
                callToAction: M(k.callToAction),
                QC: k.image,
                iconUrl: c,
                left: Number(k.left),
                width: Number(k.width),
                top: Number(k.top),
                aspectRatio: Number(k.aspectRatio),
                startMs: Math.floor(Number(k.startMs)),
                endMs: Math.floor(Number(k.endMs)),
                videoDuration: x,
                cS: m,
                playlistLength: O,
                channelId: d,
                subscribeButton: W,
                subscribersText: J,
                isSubscribe: G,
                targetUrl: S || null,
                Dek: b,
                sessionData: p ? {
                    itct: p
                } : null,
                JB9: n,
                i_: f ? f : null,
                isPlaceholder: k.isPlaceholder,
                impressionUrls: jj(k.impressionUrls || [], LQ),
                zfL: jj(k.hovercardShowUrls || [], LQ),
                clickUrls: jj(U.loggingUrls || [], LQ),
                visualElement: g.G1(k.trackingParams),
                productPrice: Z,
                additionalFeesText: X,
                watchEndpoint: F || null
            }
        },
        PYq = function(f, k) {
            var K = {
                startMs: Math.floor(Number(f.startMs)),
                impressionUrls: jj(f.impressionUrls || [], LQ),
                elements: jj(f.elements || [], function(N, v) {
                    return Fwq(k, N, v)
                })
            };
            f.trackingParams && (K.visualElement = g.G1(f.trackingParams));
            return K
        },
        D7W = function(f) {
            g.dK.call(this, f);
            this.V = this.endscreen = null;
            this.D = {};
            this.T = {};
            this.J = this.Y = null;
            this.j = [];
            this.G = null;
            this.xn = !0;
            this.X = 0;
            f = f.U();
            this.Fj = g.Tt(f) || g.kp(f);
            this.events = new g.to(this);
            g.E(this, this.events);
            this.events.C(this.player, g.$B("creatorendscreen"), this.onCueRangeEnter);
            this.events.C(this.player, g.Ib("creatorendscreen"), this.onCueRangeExit);
            this.events.C(this.player, "resize", this.jy);
            this.events.C(window, "focus", this.frw);
            this.load();
            var k = g.h$("STYLE");
            (g.GE("HEAD")[0] || document.body).appendChild(k);
            this.addOnDisposeCallback(function() {
                g.ao(k)
            });
            k.sheet && (k.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), k.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        Q_p = function(f) {
            return f.player.getVideoData().Ps ? "current" : f.Fj ? "new" : "current"
        },
        pQ = function(f) {
            return f.player.U().playerStyle === "creator-endscreen-editor"
        },
        V$5 = function(f) {
            var k = f.player.getVideoData(),
                K = k.videoId;
            f.V && f.V.abort();
            K = {
                method: "POST",
                onFinish: function(v) {
                    var M = f.V = null;
                    v.status === 200 && (v = v.responseText, v.substring(0, 3) === ")]}" && (v = v.substring(3), M = JSON.parse(v), M = PYq(M, Q_p(f))));
                    sc(f, M)
                },
                urlParams: {
                    v: K
                },
                withCredentials: !0
            };
            f.Fj && (K.urlParams.ptype = "embedded");
            var N = k.ri;
            N && (K.postParams = {
                ad_tracking: N
            });
            if (k = g.FuC(k))
                if (k = g.R_(k), k = g.o_(k)) f.V = g.uO(k, K)
        },
        sc = function(f, k, K) {
            K = K === void 0 ? !0 : K;
            f.player.fS("creatorendscreen");
            f.Y && (f.Y.dispose(), f.Y = null, f.J.dispose(), f.J = null);
            for (var N = g.h(Object.values(f.D)), v = N.next(); !v.done; v = N.next()) v.value.dispose();
            f.D = {};
            f.T = {};
            f.j.length > 0 && (f.j.forEach(function(U) {
                U.dispose()
            }), f.j.length = 0);
            f.G && (g.xq(f.G, "ytp-ce-element-show"), f.G.setAttribute("aria-hidden", "true"));
            f.X = 0;
            if ((f.endscreen = k) && k.elements) {
                K && $7W(f);
                K = [];
                N = new g.QR(k.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                K.push(N);
                f.player.U().D || (f.Y = new g.D({
                    B: "div",
                    W: "ytp-ce-shadow"
                }), g.I1(f.player, f.Y.element, 4), f.J = new g.vX(f.Y, 200));
                for (N = 0; N < k.elements.length; ++N) {
                    v = k.elements[N];
                    var M = Ioc(f, v);
                    if (M) {
                        f.D[v.id] = M;
                        f.T[v.id] = v;
                        g.I1(f.player, M.element, 4);
                        var H = new g.QR(v.startMs, v.endMs, {
                            id: "ytp-ce-element-" +
                                v.id,
                            namespace: "creatorendscreen"
                        });
                        K.push(H);
                        irq(f, M, v)
                    } else g.uA(new g.dZ("buildEndscreenElement null", v))
                }
                f.player.yK(K);
                f.jy()
            }
        },
        $7W = function(f) {
            var k = g.CC(),
                K = g.ok();
            K && k && f.endscreen.visualElement && g.U9(g.QZ)(void 0, K, k, f.endscreen.visualElement)
        },
        Ioc = function(f, k) {
            var K = null;
            switch (k.type) {
                case "VIDEO":
                    f = {
                        B: "div",
                        ez: ["ytp-ce-element", "ytp-ce-video"],
                        N: {
                            tabindex: "0",
                            "aria-label": k.i_ || "",
                            "aria-hidden": "true"
                        },
                        S: [{
                            B: "div",
                            W: "ytp-ce-element-shadow"
                        }, {
                            B: "div",
                            W: "ytp-ce-covering-image",
                            N: AT(k)
                        }, {
                            B: "div",
                            W: "ytp-ce-covering-shadow-top"
                        }, {
                            B: "a",
                            W: "ytp-ce-covering-overlay",
                            N: {
                                href: Ec(f, k.targetUrl),
                                tabindex: "-1"
                            },
                            S: [{
                                B: "div",
                                ez: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                N: {
                                    dir: g.WI(k.title || "")
                                },
                                p9: k.title
                            }, {
                                B: "div",
                                W: k.cS ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                p9: k.videoDuration || void 0
                            }]
                        }]
                    };
                    K = new g.D(f);
                    break;
                case "PLAYLIST":
                    f = {
                        B: "div",
                        ez: ["ytp-ce-element", "ytp-ce-playlist"],
                        N: {
                            tabindex: "0",
                            "aria-label": k.i_ || "",
                            "aria-hidden": "true"
                        },
                        S: [{
                            B: "div",
                            W: "ytp-ce-element-shadow"
                        }, {
                            B: "div",
                            W: "ytp-ce-covering-image",
                            N: AT(k)
                        }, {
                            B: "div",
                            W: "ytp-ce-covering-shadow-top"
                        }, {
                            B: "a",
                            W: "ytp-ce-covering-overlay",
                            N: {
                                href: Ec(f, k.targetUrl),
                                tabindex: "-1"
                            },
                            S: [{
                                B: "div",
                                ez: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                N: {
                                    dir: g.WI(k.title || "")
                                },
                                p9: k.title
                            }, {
                                B: "div",
                                W: "ytp-ce-playlist-count",
                                S: [{
                                    B: "div",
                                    W: "ytp-ce-playlist-icon"
                                }, {
                                    B: "div",
                                    W: "ytp-ce-playlist-count-text",
                                    p9: k.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    K = new g.D(f);
                    break;
                case "CHANNEL":
                    K = {
                        B: "div",
                        ez: ["ytp-ce-element", "ytp-ce-channel", k.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        N: {
                            tabindex: "0",
                            "aria-label": k.i_ || "",
                            "aria-hidden": "true"
                        },
                        S: [{
                            B: "div",
                            W: "ytp-ce-element-shadow"
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-overlay",
                            S: [{
                                B: "div",
                                W: "ytp-ce-expanding-overlay-hider"
                            }, {
                                B: "div",
                                W: "ytp-ce-expanding-overlay-background"
                            }, {
                                B: "div",
                                W: "ytp-ce-expanding-overlay-content",
                                S: [{
                                    B: "div",
                                    W: "ytp-ce-expanding-overlay-body",
                                    S: [{
                                        B: "div",
                                        W: "ytp-ce-expanding-overlay-body-padding",
                                        S: [{
                                            B: "a",
                                            ez: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            N: {
                                                href: Ec(f, k.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.WI(k.title || "")
                                            },
                                            p9: k.title
                                        }, k.subscribeButton ? {
                                            B: "div",
                                            W: "ytp-ce-subscribe-container",
                                            S: [{
                                                B: "div",
                                                W: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", k.subscribersText ? {
                                            B: "div",
                                            W: "ytp-ce-channel-subscribers-text",
                                            p9: k.subscribersText
                                        } : "", k.metadata ? {
                                            B: "div",
                                            ez: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            p9: k.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-image",
                            N: AT(k)
                        }]
                    };
                    K = new g.D(K);
                    var N = g.W5(document, "div", "ytp-ce-channel-subscribe", K.element)[0];
                    if (k.subscribeButton && k.channelId) {
                        g.n_(N, "ytp-ce-subscribe-button");
                        if (f.player.U().D) {
                            var v = null;
                            var M = k.sessionData.itct
                        } else v = "endscreen", M = null;
                        v = new g.iM(k.subscribeButton.subscribeText, k.subscribeButton.subscribeCount, k.subscribeButton.unsubscribeText, k.subscribeButton.unsubscribeCount, !!k.subscribeButton.enabled, !!k.subscribeButton.classic,
                            k.channelId, !!k.subscribeButton.subscribed, v, M, f.player, !1);
                        N.appendChild(v.element);
                        f.j.push(v)
                    }
                    break;
                case "WEBSITE":
                    f = {
                        B: "div",
                        ez: ["ytp-ce-element", "ytp-ce-website"],
                        N: {
                            tabindex: "0",
                            "aria-label": k.i_ || "",
                            "aria-hidden": "true"
                        },
                        S: [{
                            B: "div",
                            W: "ytp-ce-element-shadow"
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-overlay",
                            S: [{
                                B: "div",
                                W: "ytp-ce-expanding-overlay-hider"
                            }, {
                                B: "div",
                                W: "ytp-ce-expanding-overlay-background"
                            }, {
                                B: "div",
                                W: "ytp-ce-expanding-overlay-content",
                                S: [{
                                    B: "div",
                                    W: "ytp-ce-expanding-overlay-body",
                                    S: [{
                                        B: "div",
                                        W: "ytp-ce-expanding-overlay-body-padding",
                                        S: [{
                                            B: "div",
                                            W: "ytp-ce-website-title",
                                            N: {
                                                dir: g.WI(k.title || "")
                                            },
                                            p9: k.title
                                        }, {
                                            B: "div",
                                            W: "ytp-ce-website-metadata",
                                            p9: k.metadata
                                        }, {
                                            B: "a",
                                            ez: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            N: {
                                                href: Ec(f, k.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            p9: k.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-image",
                            N: AT(k)
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-icon",
                            N: zGJ(k.iconUrl)
                        }]
                    };
                    K = new g.D(f);
                    break;
                case "CREATOR_MERCHANDISE":
                    K = "", k.productPrice && (K = {
                        B: "div",
                        W: "ytp-ce-merchandise-price-container",
                        S: [{
                            B: "div",
                            W: "ytp-ce-merchandise-price",
                            p9: k.productPrice
                        }]
                    }, k.additionalFeesText && K.S.push({
                        B: "div",
                        W: "ytp-ce-merchandise-additional-fees",
                        p9: k.additionalFeesText
                    })), f = {
                        B: "div",
                        ez: ["ytp-ce-element", "ytp-ce-merchandise"],
                        N: {
                            tabindex: "0",
                            "aria-label": k.i_ || "",
                            "aria-hidden": "true"
                        },
                        S: [{
                            B: "div",
                            W: "ytp-ce-element-shadow"
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-overlay",
                            S: [{
                                B: "div",
                                W: "ytp-ce-expanding-overlay-hider"
                            }, {
                                B: "div",
                                W: "ytp-ce-expanding-overlay-background"
                            }, {
                                B: "div",
                                W: "ytp-ce-expanding-overlay-content",
                                S: [{
                                    B: "div",
                                    W: "ytp-ce-expanding-overlay-body",
                                    S: [{
                                        B: "div",
                                        W: "ytp-ce-expanding-overlay-body-padding",
                                        S: [{
                                            B: "div",
                                            W: "ytp-ce-merchandise-title",
                                            N: {
                                                dir: g.WI(k.title || "")
                                            },
                                            p9: k.title
                                        }, K, {
                                            B: "div",
                                            W: "ytp-ce-merchandise-metadata",
                                            p9: k.metadata
                                        }, {
                                            B: "a",
                                            ez: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            N: {
                                                href: Ec(f, k.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            p9: k.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            B: "div",
                            W: "ytp-ce-expanding-image",
                            N: AT(k)
                        }, {
                            B: "div",
                            W: "ytp-ce-merchandise-invideo-cta-container",
                            S: [{
                                B: "div",
                                W: "ytp-ce-merchandise-invideo-cta",
                                p9: k.callToAction || void 0
                            }]
                        }]
                    }, K = new g.D(f)
            }
            k.isPlaceholder && g.n_(K.element, "ytp-ce-placeholder");
            return K
        },
        AT = function(f) {
            if (f.QC) var k = f.QC.thumbnails;
            return zGJ(k ? k[k.length - 1].url : null)
        },
        zGJ = function(f) {
            return f ? {
                style: "background-image: url(" + f + ")"
            } : {}
        },
        irq = function(f, k, K) {
            function N(S) {
                S && (k.listen("blur", function() {
                    S.style.display != "none" && f.xn && S.focus()
                }), k.C(S, "focus", M), k.C(S, "blur", H))
            }

            function v(S) {
                f.X += S;
                f.X > 0 ? (g.n_(k.element, "ytp-ce-force-expand"), Fa(f, K.id, !0)) : (g.xq(k.element, "ytp-ce-force-expand"), g.xq(k.element, "ytp-ce-element-hover"), Fa(f, K.id, !1))
            }

            function M() {
                v(1)
            }

            function H() {
                v(-1)
            }
            k.listen("mouseenter", function() {
                TLv(f, k, K)
            });
            k.listen("mouseleave", function() {
                fFW(f, k, K)
            });
            f.player.U().D || k.listen("click", function() {
                g.n_(k.element, "ytp-ce-element-hover")
            });
            k.listen("click", function(S) {
                kEr(f, K, S)
            });
            k.listen("keypress", function(S) {
                kEr(f, K, S)
            });
            k.listen("focus", function() {
                TLv(f, k, K)
            });
            k.listen("blur", function() {
                fFW(f, k, K)
            });
            k.listen("touchstart", function() {
                TLv(f, k, K)
            });
            var U = g.Cl("ytp-ce-expanding-overlay-hider", k.element);
            U && k.C(U, "touchstart", function(S) {
                S.stopPropagation();
                g.xq(k.element, "ytp-ce-element-hover");
                g.xq(k.element, "ytp-ce-force-expand")
            });
            k.listen("keydown", function(S) {
                f.xn = S.keyCode === 9 && !S.shiftKey
            });
            N(g.Cl("ytp-sb-subscribe", k.element));
            N(g.Cl("ytp-sb-unsubscribe", k.element));
            k.listen("focus", M);
            k.listen("blur", H)
        },
        kEr = function(f, k, K) {
            if (k.targetUrl && (!K || K.type !== "keypress" || K.keyCode === 13)) {
                for (var N = K.target; N && !g.md(N, "ytp-ce-element");) {
                    g.md(N, "subscribe-label") && KPv(f, k);
                    if (g.md(N, "ytp-ce-channel-subscribe")) return;
                    N = N.parentElement || null
                }
                if (!N || g.md(N, "ytp-ce-element-hover")) {
                    K.preventDefault();
                    K.stopPropagation();
                    if (N = f.D[k.id]) fFW(f, N, k), N.element.blur();
                    if (K.ctrlKey || K.metaKey || k.JB9 === "new") KPv(f, k), f.player.sendVideoStatsEngageEvent(17, void 0), f.player.pauseVideo(), K = g.R_(Ec(f, k.targetUrl)), K = g.o_(K), g.Q1(K, void 0, k.sessionData);
                    else {
                        var v = g.xp(f.player.U()) || f.player.getVideoData().Ps,
                            M = function() {
                                var H = Ec(f, k.targetUrl),
                                    U = k.sessionData,
                                    S = k.watchEndpoint,
                                    b =
                                    g.O9(H);
                                v && b && (b.v || b.list) ? f.player.tC(b.v, U, b.list, !1, void 0, S || void 0) : g.DM(H, U)
                            };
                        KPv(f, k, function() {
                            f.player.sendVideoStatsEngageEvent(17, M)
                        })
                    }
                }
            }
        },
        Ec = function(f, k) {
            f = f.player.U();
            if (k) {
                if (k.startsWith("//")) return f.protocol + ":" + k;
                if (k.startsWith("/")) return g.Ww(f) + k
            } else return "";
            return k
        },
        TLv = function(f, k, K) {
            g.md(k.element, "ytp-ce-element-hover") || (K.type === "VIDEO" || K.type === "PLAYLIST" ? g.n_(k.element, "ytp-ce-element-hover") : f.player.U().D ? (new g.K_(function() {
                g.n_(k.element, "ytp-ce-element-hover")
            }, 200)).start() : g.n_(k.element, "ytp-ce-element-hover"), PL(f, K.zfL), Fa(f, K.id, !0))
        },
        fFW = function(f, k, K) {
            g.xq(k.element, "ytp-ce-element-hover");
            g.xq(k.element, "ytp-ce-force-expand");
            Fa(f, K.id, !1)
        },
        Fa = function(f, k, K) {
            f.Y && (K ? f.J.show() : f.J.hide());
            for (var N = g.h(Object.keys(f.D)), v = N.next(); !v.done; v = N.next()) v = v.value, v !== k && g.ds(f.D[v].element, "ytp-ce-element-shadow-show", K)
        },
        PL = function(f, k, K) {
            function N() {
                M || (v++, v === k.length && (H.stop(), K && K()))
            }
            if (!k || k.length === 0 || pQ(f)) K && K();
            else {
                k = NGv(f, k);
                var v = 0,
                    M = !1,
                    H = new g.K_(function() {
                        M = !0;
                        K && K()
                    }, 1E3, f);
                H.start();
                for (f = 0; f < k.length; f++) g.s4(k[f], N)
            }
        },
        KPv = function(f, k, K) {
            PL(f, k.clickUrls, K);
            (f = g.ok()) && k.Dek && g.vT(f, k.visualElement)
        },
        NGv = function(f, k) {
            var K = f.player.getVideoData().clientPlaybackNonce;
            f = f.player.getCurrentTime().toFixed(2);
            K = {
                CPN: K,
                AD_CPN: K,
                MT: f
            };
            f = [];
            for (var N = 0; N < k.length; N++) f.push(vc7(k[N], K));
            return f
        },
        vc7 = function(f, k) {
            return f.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(K) {
                var N = unescape(K);
                N = N.substring(1, N.length - 1);
                return k[N] ? escape(k[N]) : K
            })
        },
        Mni = function(f) {
            return typeof f === "string" ? f : ""
        },
        D5 = function(f, k, K) {
            for (var N in k)
                if (k[N] === f) return f;
            return K
        },
        Hl7 = function(f, k, K, N) {
            this.value = f;
            this.target = k;
            this.showLinkIcon = K;
            this.G = N
        },
        QV = function(f) {
            return f.value ? f.value : null
        },
        VV = function(f) {
            if (!f) return null;
            var k = g.R_(Mni(f.value));
            k = g.o_(k);
            if (!k) return null;
            var K = D5(f.target, lF5, "current");
            if (K == null) f = null;
            else {
                var N = f.show_link_icon;
                f = new Hl7(k, K, N === "true" || N === "false" ? N === "true" : !0, f.pause_on_navigation != null ? f.pause_on_navigation : !0)
            }
            return f
        },
        UD1 = function(f, k, K) {
            this.type = f;
            this.trigger = k;
            this.url = K
        },
        mDi = function(f) {
            if (!f) return null;
            var k = D5(f.type, SJJ),
                K = D5(f.trigger, blJ);
            f = f.url;
            f = Array.isArray(f) && f.length ? f[0] : f;
            f = VV(f ? f : null);
            return k ? new UD1(k, K, f) : null
        },
        nc5 = function(f, k, K, N, v) {
            this.id = f;
            this.type = k;
            this.style = K;
            this.data = v;
            this.action = N || []
        },
        Ol4 = function(f, k) {
            return g.$1(f.action, k)
        },
        xDJ = function(f, k) {
            this.context = f;
            this.G = k
        },
        gc3 = function(f) {
            return f.customMessage ? $g("div", "iv-card-message", f.customMessage) : ""
        },
        I6 = function(f, k) {
            f = "background-image: url(" + f + ");";
            var K = [];
            k && K.push(k);
            return {
                B: "div",
                W: "iv-card-image",
                N: {
                    style: f
                },
                S: K
            }
        },
        dDc = function(f) {
            if (!f.metaInfo || f.metaInfo.length === 0) return "";
            var k = [];
            f = g.h(f.metaInfo);
            for (var K = f.next(); !K.done; K = f.next()) k.push($g("li", "", K.value));
            return {
                B: "ul",
                W: "iv-card-meta-info",
                S: k
            }
        },
        $g = function(f, k, K) {
            k ? typeof k === "string" ? k = {
                "class": k
            } : Array.isArray(k) && (k = {
                "class": k.join(" ")
            }) : k = {};
            k.dir = g.WI(K);
            return {
                B: f,
                N: k,
                p9: K
            }
        },
        tn0 = function(f) {
            if (!f.customMessage) return "";
            var k = ["iv-card-action", "iv-card-primary-link"],
                K = {};
            f.qL && (k.push("iv-card-action-icon"), K.style = "background-image: url(" + f.qL + ");");
            K.dir = g.WI(f.customMessage);
            var N = [{
                B: "span",
                p9: f.customMessage
            }];
            f.showLinkIcon && (N.push("\u00a0"), N.push({
                B: "span",
                W: "iv-card-link-icon"
            }));
            return {
                B: "div",
                ez: k,
                N: K,
                S: N
            }
        },
        i7 = function(f, k, K, N) {
            if (N) {
                k = g.h(k);
                for (var v = k.next(); !v.done; v = k.next()) f.G(v.value, N, K.id, K.sessionData, K.v7.click, 5)
            }
        },
        r$h = function(f, k) {
            this.merchant = f;
            this.price = k
        },
        w57 = function(f) {
            var k;
            (k = f) && !(k = f.length > 1 ? f.charAt(0) === "/" && f.charAt(1) !== "/" : f === "/") && (k = f.replace(/^(https?:)?\/\//, "").split("/", 1), k = !k || k.length < 1 || !k[0] ? [] : k[0].toLowerCase().split(".").reverse(), k = k[0] === "com" && k[1] === "youtube" || k[0] === "be" && k[1] === "youtu");
            return k ? f.indexOf("/redirect?") === -1 : !1
        },
        GE1 = function(f, k) {
            return k ? k : w57(f) ? "current" : "new"
        },
        zy = function(f, k) {
            g.A.call(this);
            var K = this;
            this.element = f;
            this.context = k;
            this.vH = !1;
            this.Xj = new Map;
            this.qx = new Map;
            this.context.L.addEventListener(g.$B("annotations_module"), function(N) {
                (N = K.Xj.get(N)) && N.apply(K)
            });
            this.context.L.addEventListener(g.Ib("annotations_module"), function(N) {
                (N = K.qx.get(N)) && N.apply(K)
            })
        },
        Ty = function(f, k, K, N, v, M, H) {
            f.context.G.listen(k, "click", function(U) {
                f.OF(K, N, v, M || [], H || 0, U)
            });
            f.context.G.listen(k, "touchstart", function() {
                f.vH = !1
            });
            f.context.G.listen(k, "touchmove", function() {
                f.vH = !0
            })
        },
        CZi = function(f) {
            var k;
            return ((k = g.r(f, g.pf)) == null ? 0 : k.url) ? g.r(f, g.pf).url : (f = g.r(f, g.wp)) && f.videoId ? (k = "/watch?v=" + f.videoId, f.playlistId && (k += "&list=" + f.playlistId), f.index && (k += "&index=" + f.index), f.startTimeSeconds && (k += "&t=" + f.startTimeSeconds), k) : null
        },
        fq = function(f, k, K) {
            return {
                Ar: (f.impressionLoggingUrlsV2s || []).map(function(N) {
                    return N.baseUrl || ""
                }),
                click: (K.loggingUrls || []).map(function(N) {
                    return N.baseUrl || ""
                }),
                close: (k.dismissLoggingUrlsV2s || []).map(function(N) {
                    return N.baseUrl || ""
                }),
                fV: (k.impressionLoggingUrlsV2s || []).map(function(N) {
                    return N.baseUrl || ""
                }),
                H4: (k.clickLoggingUrlsV2s || []).map(function(N) {
                    return N.baseUrl || ""
                })
            }
        },
        ocq = function(f, k, K) {
            zy.call(this, k, K);
            var N = this;
            this.L = f;
            this.eventId = null;
            this.BO = this.L9 = this.aM = this.Y = this.isInitialized = !1;
            this.cards = [];
            this.g9 = this.J = this.QD = this.T = this.Mx = this.G = null;
            this.xn = [];
            this.Yn = this.j = this.TO = this.cH = null;
            this.X = 0;
            this.Rw = new g.K_(function() {}, K.K.iJ ? 4E3 : 3E3);
            g.E(this, this.Rw);
            this.u2 = new g.K_(function() {});
            g.E(this, this.u2);
            this.BH = new xDJ(K, function(v, M, H, U, S, b) {
                Ty(N, v, M, H, U, S, b)
            });
            this.Fj = new g.D({
                B: "div",
                W: "iv-drawer",
                N: {
                    id: "iv-drawer"
                },
                S: [{
                    B: "div",
                    W: "iv-drawer-header",
                    N: {
                        "aria-role": "heading"
                    },
                    S: [{
                        B: "span",
                        W: "iv-drawer-header-text"
                    }, {
                        B: "button",
                        ez: ["iv-drawer-close-button", "ytp-button"],
                        N: {
                            "aria-label": "Sembunyikan kartu",
                            tabindex: "0"
                        }
                    }]
                }, {
                    B: "div",
                    W: "iv-drawer-content"
                }]
            });
            g.E(this, this.Fj);
            this.V = this.Fj.element;
            this.Sz = new g.vX(this.Fj, 330);
            g.E(this, this.Sz);
            this.xV = g.Cl("iv-drawer-header-text", this.V);
            this.D = g.Cl("iv-drawer-content", this.V);
            this.addCueRange(0, K.videoData.lengthSeconds *
                1E3, "",
                function() {
                    N.aM && kV(N, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (N.aM = N.Y) && Kq(N)
                });
            this.Zw = new g.to(this);
            g.E(this, this.Zw);
            this.L.addEventListener("videodatachange", this.U$.bind(this))
        },
        YJc = function(f, k) {
            k = k.data;
            k.autoOpenMs && f.addCueRange(k.autoOpenMs, 0x8000000000000, "", function() {
                kV(f, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            k.autoCloseMs && f.addCueRange(k.autoCloseMs, 0x8000000000000, "", function() {
                Kq(f)
            });
            var K = k.headerText;
            g.Ll(f.xV, K);
            f.J && (f.L.Z("player_tooltip_data_title_killswitch") ? f.J.setAttribute("title", K) : f.J.setAttribute("data-tooltip-title", K));
            k.eventId && (f.eventId = k.eventId);
            f.cH = g.G1(k.trackingParams);
            f.j = g.G1(k.closeTrackingParams);
            f.TO = g.G1(k.iconTrackingParams)
        },
        J$q = function(f, k) {
            var K = k.cardId ? k.cardId : "cr:" + f.X,
                N = f.L.U().experiments.PH("enable_error_corrections_infocard_web_client");
            if (!k.content && k.teaser.simpleCardTeaserRenderer && N) {
                var v = k.teaser.simpleCardTeaserRenderer,
                    M = k.icon ? k.icon.infoCardIconRenderer : null;
                if (v.channelAvatar && v.channelAvatar.thumbnails && v.channelAvatar.thumbnails.length > 0) var H = N1(v.channelAvatar.thumbnails, 22, 22).url;
                k = {
                    id: K,
                    timestamp: f.X,
                    type: "simple",
                    teaserText: g.dT(v.message),
                    teaserDurationMs: Number(k.cueRanges[0].teaserDurationMs),
                    startMs: Number(k.cueRanges[0].startCardActiveMs),
                    autoOpen: !!k.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    v7: {},
                    J9: null,
                    Tu: v.trackingParams ?
                        g.G1(v.trackingParams) : null,
                    TO: M && M.trackingParams ? g.G1(M.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    qL: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: v.onTapCommand || null,
                    KG: H
                };
                vv(f, k)
            } else {
                var U;
                if ((U = k.content) == null ? 0 : U.simpleCardContentRenderer) {
                    if (!k.cueRanges.length) return;
                    H = (v = k.content) == null ? void 0 : v.simpleCardContentRenderer;
                    v = k.teaser.simpleCardTeaserRenderer;
                    M = k.icon ? k.icon.infoCardIconRenderer : null;
                    k = {
                        id: K,
                        timestamp: f.X,
                        type: "simple",
                        teaserText: g.dT(v.message),
                        teaserDurationMs: Number(k.cueRanges[0].teaserDurationMs),
                        startMs: Number(k.cueRanges[0].startCardActiveMs),
                        autoOpen: !!k.autoOpen,
                        sessionData: M1(f, K, k, H),
                        sponsored: !1,
                        v7: fq(H, v, H.command),
                        J9: H.trackingParams ? g.G1(H.trackingParams) : null,
                        Tu: v.trackingParams ? g.G1(v.trackingParams) : null,
                        TO: M && M.trackingParams ? g.G1(M.trackingParams) : null,
                        imageUrl: N1(H.image.thumbnails, 290, 290).url,
                        displayDomain: H.displayDomain ? g.dT(H.displayDomain) : null,
                        showLinkIcon: !!H.showLinkIcon,
                        qL: null,
                        title: H.title ? g.dT(H.title) : "",
                        customMessage: H.callToAction ? g.dT(H.callToAction) : "",
                        url: g.r(H.command, g.pf).url ? VV({
                            pause_on_navigation: !f.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.r(H.command, g.pf).url
                        }) : null,
                        onClickCommand: null
                    };
                    vv(f, k)
                } else {
                    var S;
                    if ((S = k.content) == null ? 0 : S.collaboratorInfoCardContentRenderer) {
                        if (!k.cueRanges.length) return;
                        H = (M = k.content) == null ? void 0 : M.collaboratorInfoCardContentRenderer;
                        v = k.teaser.simpleCardTeaserRenderer;
                        M = k.icon ? k.icon.infoCardIconRenderer : null;
                        k = {
                            id: K,
                            timestamp: f.X,
                            type: "collaborator",
                            teaserText: g.dT(v.message),
                            teaserDurationMs: Number(k.cueRanges[0].teaserDurationMs),
                            startMs: Number(k.cueRanges[0].startCardActiveMs),
                            autoOpen: !!k.autoOpen,
                            sessionData: M1(f, K, k, H),
                            sponsored: !1,
                            v7: fq(H, v, H.endpoint),
                            J9: H.trackingParams ? g.G1(H.trackingParams) : null,
                            Tu: v.trackingParams ? g.G1(v.trackingParams) : null,
                            TO: M && M.trackingParams ? g.G1(M.trackingParams) : null,
                            channelId: g.r(H.endpoint, g.Db).browseId,
                            customMessage: H.customText ? g.dT(H.customText) : null,
                            profileImageUrl: N1(H.channelAvatar.thumbnails, 290,
                                290).url,
                            title: H.channelName ? g.dT(H.channelName) : "",
                            metaInfo: [H.subscriberCountText ? g.dT(H.subscriberCountText) : ""],
                            url: VV({
                                pause_on_navigation: !f.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.r(H.endpoint, g.Db).canonicalBaseUrl ? g.r(H.endpoint, g.Db).canonicalBaseUrl : "/channel/" + g.r(H.endpoint, g.Db).browseId
                            }),
                            onClickCommand: null
                        };
                        vv(f, k)
                    } else {
                        var b;
                        if ((b = k.content) == null ? 0 : b.playlistInfoCardContentRenderer) {
                            if (!k.cueRanges.length) return;
                            var m;
                            H = (m = k.content) == null ? void 0 : m.playlistInfoCardContentRenderer;
                            v = k.teaser.simpleCardTeaserRenderer;
                            M = k.icon ? k.icon.infoCardIconRenderer : null;
                            k = {
                                id: K,
                                timestamp: f.X,
                                type: "playlist",
                                teaserText: g.dT(v.message),
                                teaserDurationMs: Number(k.cueRanges[0].teaserDurationMs),
                                startMs: Number(k.cueRanges[0].startCardActiveMs),
                                autoOpen: !!k.autoOpen,
                                sessionData: M1(f, K, k, H),
                                sponsored: !1,
                                v7: fq(H, v, H.action),
                                J9: H.trackingParams ? g.G1(H.trackingParams) : null,
                                Tu: v.trackingParams ? g.G1(v.trackingParams) : null,
                                TO: M && M.trackingParams ? g.G1(M.trackingParams) : null,
                                Ik: N1(H.playlistThumbnail.thumbnails,
                                    258, 290).url,
                                customMessage: H.customMessage ? g.dT(H.customMessage) : null,
                                playlistVideoCount: g.dT(H.playlistVideoCount),
                                title: H.playlistTitle ? g.dT(H.playlistTitle) : "",
                                metaInfo: [H.channelName ? g.dT(H.channelName) : "", H.videoCountText ? g.dT(H.videoCountText) : ""],
                                url: VV({
                                    pause_on_navigation: !f.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: CZi(H.action)
                                }),
                                onClickCommand: null
                            };
                            vv(f, k)
                        } else {
                            var n;
                            if ((n = k.content) == null ? 0 : n.videoInfoCardContentRenderer) {
                                if (!k.cueRanges.length) return;
                                var x;
                                H = (x = k.content) ==
                                    null ? void 0 : x.videoInfoCardContentRenderer;
                                v = k.teaser.simpleCardTeaserRenderer;
                                M = k.icon ? k.icon.infoCardIconRenderer : null;
                                k = {
                                    id: K,
                                    timestamp: f.X,
                                    type: "video",
                                    teaserText: g.dT(v.message),
                                    teaserDurationMs: Number(k.cueRanges[0].teaserDurationMs),
                                    startMs: Number(k.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!k.autoOpen,
                                    sessionData: M1(f, K, k, H),
                                    sponsored: !1,
                                    v7: fq(H, v, H.action),
                                    J9: H.trackingParams ? g.G1(H.trackingParams) : null,
                                    Tu: v.trackingParams ? g.G1(v.trackingParams) : null,
                                    TO: M && M.trackingParams ? g.G1(M.trackingParams) : null,
                                    Ik: N1(H.videoThumbnail.thumbnails, 258, 290).url,
                                    videoDuration: H.lengthString ? g.dT(H.lengthString) : null,
                                    customMessage: H.customMessage ? g.dT(H.customMessage) : null,
                                    title: H.videoTitle ? g.dT(H.videoTitle) : "",
                                    metaInfo: [H.channelName ? g.dT(H.channelName) : "", H.viewCountText ? g.dT(H.viewCountText) : ""],
                                    isLiveNow: !!H.badge,
                                    url: VV({
                                        pause_on_navigation: !f.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: CZi(H.action)
                                    }),
                                    onClickCommand: null
                                };
                                vv(f, k)
                            }
                        }
                    }
                }
            }
            f.X++
        },
        N1 = function(f, k, K) {
            for (var N = -1, v = -1, M = 0; M < f.length; M++) {
                if (f[M].height ===
                    k || f[M].width === K) return f[M];
                ((f[M].height || 0) < k || (f[M].width || 0) < K) && (N < 0 || (f[N].height || 0) < (f[M].height || 0) || (f[N].width || 0) < (f[M].width || 0)) ? N = M: ((f[M].height || 0) >= k || (f[M].width || 0) >= K) && (v < 0 || (f[v].height || 0) > (f[M].height || 0) || (f[v].width || 0) > (f[M].width || 0)) && (v = M)
            }
            return f[v >= 0 ? v : N]
        },
        M1 = function(f, k, K, N) {
            return {
                feature: K.feature ? K.feature : "cards",
                src_vid: f.context.videoData.videoId,
                annotation_id: k,
                ei: f.context.videoData.eventId || "",
                itct: N.trackingParams || ""
            }
        },
        BG4 = function(f, k) {
            if (k = Rcr(f, k)) k === f.G && (f.G = null), f.L.removeCueRange(k.a5.id), g.ao(k.uh), g.Nd(f.cards, k), f.bq(), Hv(f)
        },
        kV = function(f, k, K) {
            if (!f.Y) {
                f.Sz.show();
                f.Mx = new g.K_(function() {
                    g.n_(f.context.L.getRootNode(), g.j8.IV_DRAWER_OPEN)
                }, 0);
                f.Mx.start();
                f.Zw.C(f.D, "mousewheel", function(H) {
                    f.Rw.start();
                    H.preventDefault();
                    H = H || window.event;
                    var U = 0;
                    H.type == "MozMousePixelScroll" ? U = 0 == (H.axis == H.HORIZONTAL_AXIS) ? H.detail : 0 : window.opera ? U = H.detail : U = H.wheelDelta % 120 == 0 ? "WebkitTransform" in document.documentElement.style ? window.chrome && navigator.platform.indexOf("Mac") == 0 ? H.wheelDeltaY / -30 : H.wheelDeltaY / -1.2 : H.wheelDelta / -1.6 : H.wheelDeltaY / -3;
                    if (H = U) f.D.scrollTop += H
                });
                f.Y = !0;
                var N = g.ok();
                N && f.cH && f.j && g.Kf(N, [f.cH, f.j]);
                k = {
                    TRIGGER_TYPE: k
                };
                for (var v = g.h(f.cards), M = v.next(); !M.done; M = v.next()) M = M.value, M.Vr || (M.Vr = !0, c$3(f.context.logger, M.a5.v7.Ar, k)), N && g.Kf(N, [M.a5.J9]);
                hT(f.L);
                K && (f.T = new g.K_(function() {
                    f.QD = f.J;
                    f.g9.focus()
                }, 330), f.T.start())
            }
        },
        Kq = function(f) {
            f.Y && (f.Sz.hide(), g.pH(f.Zw), g.xq(f.context.L.getRootNode(), g.j8.IV_DRAWER_OPEN), f.Y = !1, hT(f.L), f.T && f.T.stop(), f.T = new g.K_(function() {
                f.QD && (f.QD.focus(), f.QD = null)
            }, 330), f.T.start())
        },
        hcc = function(f) {
            g.Ot(f.RM(), [g.j8.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.I1(f.L, f.V, 5);
            f.aK();
            f.J = g.Cl("ytp-cards-button", f.L.getRootNode());
            f.g9 = g.Cl("iv-drawer-close-button", f.V);
            f.isInitialized = !0
        },
        Zlr = function(f) {
            f.xn.push(g.vq("iv-teaser-shown", f.HJ, f));
            f.xn.push(g.vq("iv-teaser-hidden", f.EVk, f));
            f.xn.push(g.vq("iv-teaser-clicked", f.Ty, f));
            f.BO = !0
        },
        qJ1 = function(f, k) {
            var K;
            return k.onClickCommand && ((K = g.r(k.onClickCommand, g.mW5)) == null ? void 0 : K.targetId) === "engagement-panel-error-corrections" ? (f.Yn = k, !0) : !1
        },
        X5i = function(f, k) {
            f.Yn = k;
            var K = f.L.getVideoData();
            if (!K) return !1;
            K = g.$p(K);
            if (K == null ? 0 : K.markersMap)
                for (var N, v = 0;
                    ((N = K) == null ? void 0 : N.markersMap.length) > v; v++) {
                    var M = void 0,
                        H = (M = K) == null ? void 0 : M.markersMap[v];
                    if (H.key === "ERROR_CORRECTION_MARKERS" && (M = void 0, (H = (M = H.value) == null ? void 0 : M.markers) && H.length > 0)) return N = void 0, k.startMs = ((N = g.r(H[0], g.$tC)) == null ? void 0 : N.timeRangeStartMillis) || 0, f.Yn = null, !0
                }
            return !1
        },
        vv = function(f, k) {
            if (!qJ1(f, k) || X5i(f, k)) {
                var K = uBr(f, k);
                if (K) {
                    var N = {
                        a5: k,
                        uh: K.element,
                        Vr: !1
                    };
                    if (k.onClickCommand) f.L.Z("web_infocards_teaser_show_logging_fix") && (f.BO || Zlr(f), BG4(f, k.id), K = f.findLastIndex(N), g.mx(f.cards, K, 0, N));
                    else {
                        f.isInitialized || hcc(f);
                        BG4(f, k.id);
                        var v = f.findLastIndex(N);
                        g.mx(f.cards, v, 0, N);
                        K.f9(f.D, v);
                        f.bq()
                    }
                    k.autoOpen ? f.addCueRange(k.startMs, 0x8000000000000, k.id, function() {
                        f.Y || (f.G = N, Hv(f), aFc(f, N), kV(f, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (K = f.context.L.getCurrentTime() * 1E3, K < 5E3 && K > k.startMs && ec5(f, N), f.addCueRange(k.startMs,
                        k.startMs + 1, k.id,
                        function() {
                            ec5(f, N)
                        }), Hv(f))
                }
            }
        },
        uBr = function(f, k) {
            switch (k.type) {
                case "simple":
                    f = f.BH;
                    var K = k.displayDomain ? {
                        B: "div",
                        W: "iv-card-image-text",
                        p9: k.displayDomain
                    } : void 0;
                    var N = tn0(k);
                    K = {
                        B: "div",
                        ez: ["iv-card"],
                        S: [{
                            B: "a",
                            W: "iv-click-target",
                            N: {
                                href: k.url ? QV(k.url) || "" : ""
                            },
                            S: [I6(k.imageUrl, K), {
                                B: "div",
                                W: "iv-card-content",
                                S: [$g("h2", void 0, k.title), N]
                            }]
                        }]
                    };
                    K = new g.D(K);
                    i7(f, g.yw("iv-click-target", K.element), k, k.url);
                    k = K;
                    break;
                case "collaborator":
                    f = f.BH;
                    K = {
                        B: "div",
                        ez: ["iv-card", "iv-card-channel"],
                        S: [{
                            B: "a",
                            ez: ["iv-click-target"],
                            N: {
                                href: QV(k.url) || "",
                                "data-ytid": k.channelId
                            },
                            S: [I6(k.profileImageUrl),
                                {
                                    B: "div",
                                    W: "iv-card-content",
                                    S: [gc3(k), {
                                        B: "h2",
                                        W: "iv-card-primary-link",
                                        p9: k.title
                                    }, dDc(k)]
                                }
                            ]
                        }]
                    };
                    K = new g.D(K);
                    i7(f, g.yw("iv-click-target", K.element), k, k.url);
                    k = K;
                    break;
                case "playlist":
                    f = f.BH;
                    K = {
                        B: "div",
                        ez: ["iv-card", "iv-card-playlist"],
                        S: [{
                            B: "a",
                            W: "iv-click-target",
                            N: {
                                href: QV(k.url) || ""
                            },
                            S: [I6(k.Ik, {
                                B: "div",
                                W: "iv-card-image-overlay",
                                S: [{
                                    B: "span",
                                    W: "iv-card-playlist-video-count",
                                    p9: k.playlistVideoCount
                                }]
                            }), {
                                B: "div",
                                W: "iv-card-content",
                                S: [gc3(k), $g("h2", "iv-card-primary-link", k.title), dDc(k)]
                            }]
                        }]
                    };
                    K = new g.D(K);
                    i7(f, g.yw("iv-click-target", K.element), k, k.url);
                    k = K;
                    break;
                case "productListing":
                    f = f.BH;
                    var v = k.offers.length != 0;
                    K = ["iv-card"];
                    N = "";
                    var M = tn0(k);
                    v && (K.push("iv-card-product-listing"), N = "iv-card-primary-link", M = k.offers[0], v = [], M.price && v.push({
                        B: "div",
                        W: "iv-card-offer-price",
                        p9: M.price
                    }), M.merchant && v.push({
                        B: "div",
                        W: "iv-card-offer-merchant",
                        p9: M.merchant
                    }), M = {
                        B: "div",
                        S: v
                    });
                    v = k.url ? QV(k.url) || "" : "";
                    K = {
                        B: "div",
                        ez: K,
                        N: {
                            tabindex: "0"
                        },
                        S: [{
                            B: "a",
                            ez: ["iv-card-image", "iv-click-target"],
                            N: {
                                style: "background-image: url(" +
                                    k.imageUrl + ");",
                                href: v,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            B: "div",
                            W: "iv-card-content",
                            S: [k.sponsored ? {
                                B: "div",
                                W: "iv-card-sponsored",
                                S: ["Bersponsor", {
                                    B: "div",
                                    W: "iv-ad-info-container",
                                    S: [{
                                        B: "div",
                                        W: "iv-ad-info",
                                        p9: "{{adInfo}}"
                                    }, {
                                        B: "div",
                                        W: "iv-ad-info-icon-container",
                                        S: [{
                                            B: "div",
                                            W: "iv-ad-info-icon"
                                        }, {
                                            B: "div",
                                            W: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                B: "a",
                                W: "iv-click-target",
                                N: {
                                    href: v
                                },
                                S: [$g("h2", N, k.title), M]
                            }]
                        }]
                    };
                    K = new g.D(K);
                    N = g.h$("span");
                    g.Ll(N, "Anda melihat produk ini karena menurut kami relevan dengan video tersebut. Google dapat menerima kompensasi dari penjual.");
                    K.setContent(N, "adInfo");
                    i7(f, g.yw("iv-click-target", K.element), k, k.url);
                    k = K;
                    break;
                case "video":
                    f = f.BH;
                    N = k.videoDuration ? {
                        B: "span",
                        W: "iv-card-video-duration",
                        p9: k.videoDuration
                    } : void 0;
                    M = k.isLiveNow ? {
                        B: "span",
                        ez: ["yt-badge", "yt-badge-live"],
                        p9: "LIVE SEKARANG"
                    } : null;
                    v = {
                        B: "div",
                        ez: ["iv-card", "iv-card-video"],
                        S: [{
                            B: "a",
                            W: "iv-click-target",
                            N: {
                                href: ((K = k.url) == null ? void 0 : QV(K)) || ""
                            },
                            S: [I6(k.Ik, N), {
                                B: "div",
                                W: "iv-card-content",
                                S: [gc3(k), $g("h2", "iv-card-primary-link", k.title), dDc(k), M]
                            }]
                        }]
                    };
                    K = new g.D(v);
                    i7(f, g.yw("iv-click-target", K.element), k, k.url);
                    k = K;
                    break;
                default:
                    return null
            }
            return k
        },
        LPJ = function(f) {
            if (f.G) return f.G.a5.type === "productListing";
            if (f.L.Z("enable_wn_infocards")) {
                var k;
                return !((k = f.cards) == null || !k.length) && g.qB(f.cards, function(K) {
                    return K.a5.type === "productListing"
                })
            }
            return g.qB(f.cards, function(K) {
                return K.a5.type === "productListing"
            })
        },
        Hv = function(f) {
            g.ds(f.L.getRootNode(), "ytp-cards-shopping-active", LPJ(f))
        },
        ec5 = function(f, k) {
            if (!g.md(f.L.getRootNode(), "ytp-cards-teaser-shown")) {
                if (f.G !== k) {
                    var K = g.ok(),
                        N = f.G ? f.G.a5.TO : f.TO;
                    K && N && g.Nb(K, [N]);
                    f.G = k;
                    Hv(f)
                }(K = f.isInitialized && f.RM().style.display == "none") || (K = f.context.L.getPlayerState(), N = K === 0 && f.context.L.getCurrentTime() === 0, K = !(K === 1 || K === 3 || N));
                if (!K && k.a5.teaserDurationMs) {
                    var v;
                    K = {
                        teaserText: k.a5.teaserText,
                        durationMs: k.a5.teaserDurationMs,
                        onClickCommand: k.a5.onClickCommand,
                        KG: (v = k.a5.KG) != null ? v : null
                    };
                    f.L.jF(!0, K)
                }
                f.u2.isActive() || ((!f.Y || !f.Rw.isActive() && f.L9) && aFc(f, k), f.u2.start(910 + k.a5.teaserDurationMs))
            }
        },
        aFc = function(f, k) {
            f.Fj.pN ? (k = new a6([0,
                f.D.scrollTop
            ], [0, k.uh.offsetTop], 600, A97), f.context.Y.listen(k, "animate", function(K) {
                f.D.scrollTop = K.y
            }), f.context.Y.listen(k, "finish", function(K) {
                f.D.scrollTop = K.y
            }), k.play()) : (f.Fj.T3(!0), f.D.scrollTop = k.uh.offsetTop, f.Fj.T3(!1))
        },
        ln = function(f) {
            return f.G && f.G.a5 ? f.G.a5 : f.cards[0] && f.cards[0].a5 ? f.cards[0].a5 : null
        },
        Rcr = function(f, k) {
            return g.$1(f.cards, function(K) {
                return K.a5.id === k
            })
        },
        U5 = function(f, k, K) {
            zy.call(this, f, k);
            this.annotation = K;
            this.isActive = !1
        },
        jor = function(f) {
            var k = f.annotation.data;
            "start_ms" in k && "end_ms" in k && f.addCueRange(Number(k.start_ms), Number(k.end_ms), f.annotation.id, function() {
                f.show()
            }, function() {
                f.hide()
            })
        },
        SG = function(f, k, K) {
            U5.call(this, f, k, K);
            this.G = null;
            this.Y = !1;
            this.D = null
        },
        p5v = function(f, k) {
            var K = K === void 0 ? 0 : K;
            var N = qf7(k).width;
            g.mk(k, N);
            K = new p0c(k, [N, k.offsetTop], [N - N - K, k.offsetTop], 200, s_1);
            g.E(f, K);
            f.context.Y.listen(K, "begin", function() {
                g.tC(k, !0)
            });
            K.play()
        },
        soc = function(f, k, K, N, v, M, H) {
            this.G = f;
            this.Y = k;
            this.K = K;
            this.videoData = N;
            this.logger = v;
            this.L = M;
            this.D = H
        },
        A$W = function(f, k, K) {
            U5.call(this, f, k, K);
            var N = this;
            this.j = this.isCollapsed = this.Fj = !1;
            this.T = 5E3;
            this.D = this.Y = this.G = this.V = null;
            this.X = this.createElement({
                B: "div",
                ez: ["iv-promo-contents"]
            });
            this.J = new g.K_(function() {
                N.G.setAttribute("aria-hidden", "true");
                g.tC(N.Y, !1);
                g.tC(N.D, !0)
            }, 700, this);
            g.E(this, this.J)
        },
        FPJ = function(f) {
            var k = f.annotation.data;
            if (f.annotation.style === "cta") var K = 6;
            else if (f.annotation.style === "video" || f.annotation.style === "playlist") K = 7;
            f.T = k.collapsedelay_ms || f.T;
            var N = ["iv-promo", "iv-promo-inactive"];
            f.RM().setAttribute("aria-hidden", "true");
            f.RM().setAttribute("aria-label", "Promosi");
            f.RM().tabIndex = 0;
            var v = f.annotation.At(),
                M = k.image_url;
            if (M) {
                var H = f.createElement({
                    B: "div",
                    ez: ["iv-promo-img", "iv-click-target"]
                });
                M = f.createElement({
                    B: "img",
                    N: {
                        src: M,
                        "aria-hidden": "true"
                    }
                });
                H.appendChild(M);
                k.video_duration && !k.is_live ?
                    (M = f.createElement({
                        B: "span",
                        W: "iv-promo-video-duration",
                        p9: k.video_duration
                    }), H.appendChild(M)) : k.playlist_length && (M = f.createElement({
                        B: "span",
                        W: "iv-promo-playlist-length",
                        p9: k.playlist_length.toString()
                    }), H.appendChild(M));
                v && Ty(f, H, v, f.annotation.id, k.session_data, void 0, K)
            }
            v ? (M = f.createElement({
                B: "a",
                W: "iv-promo-txt"
            }), g.c0(M, QV(v)), f.G = M) : f.G = f.createElement({
                B: "div",
                W: "iv-promo-txt"
            });
            switch (f.annotation.style) {
                case "cta":
                case "website":
                    var U = f.createElement({
                        B: "p",
                        S: [{
                            B: "strong",
                            p9: k.text_line_1
                        }]
                    });
                    var S = f.createElement({
                        B: "p",
                        S: [{
                            B: "span",
                            W: "iv-promo-link",
                            p9: k.text_line_2
                        }]
                    });
                    if (M = k.text_line_3) {
                        N.push("iv-promo-website-card-cta-redesign");
                        var b = f.createElement({
                            B: "button",
                            ez: ["iv-promo-round-expand-icon", "ytp-button"]
                        });
                        M = f.createElement({
                            B: "button",
                            ez: ["iv-button", "iv-promo-button"],
                            S: [{
                                B: "span",
                                W: "iv-button-content",
                                p9: M
                            }]
                        });
                        var m = f.createElement({
                            B: "div",
                            W: "iv-promo-button-container"
                        });
                        m.appendChild(M);
                        v && Ty(f, f.RM(), v, f.annotation.id, k.session_data, void 0, K)
                    }
                    g.n_(f.G, "iv-click-target");
                    v && Ty(f, f.G, v, f.annotation.id, k.session_data, void 0, K);
                    break;
                case "playlist":
                case "video":
                    U = f.createElement({
                        B: "p",
                        S: [{
                            B: "span",
                            p9: k.text_line_1
                        }]
                    }), S = f.createElement({
                        B: "p",
                        S: [{
                            B: "strong",
                            p9: k.text_line_2
                        }]
                    }), k.is_live && (U = S, S = f.createElement({
                        B: "span",
                        ez: ["yt-badge", "iv-promo-badge-live"],
                        p9: "LIVE SEKARANG"
                    })), g.n_(f.G, "iv-click-target"), v && Ty(f, f.G, v, f.annotation.id, k.session_data, void 0, K), N.push("iv-promo-video")
            }
            U && f.G.appendChild(U);
            S && f.G.appendChild(S);
            f.X.appendChild(f.G);
            m && f.X.appendChild(m);
            K = f.createElement({
                B: "div",
                W: "iv-promo-actions"
            });
            f.D = f.createElement({
                B: "button",
                ez: ["iv-promo-expand", "ytp-button"]
            });
            f.D.title = "Luaskan";
            f.context.G.listen(f.D, "click", function(n) {
                Ec4(f, 5E3, n)
            });
            K.appendChild(f.D);
            g.tC(f.D, !1);
            f.context.G.listen(f.RM(), "mouseover", f.L4H, f);
            f.context.G.listen(f.RM(), "mouseout", f.efL, f);
            f.context.G.listen(f.RM(), "touchend", function(n) {
                Ec4(f, 5E3, n)
            });
            f.Y = f.createElement({
                B: "button",
                ez: ["iv-promo-close", "ytp-button"]
            });
            f.Y.title = "Tutup";
            f.context.G.listen(f.Y, "click", f.annotation.style === "cta" && k.text_line_3 ? f.cLx : f.ALw, f);
            K.appendChild(f.Y);
            g.Ot(f.RM(), N);
            H && (g.qD(f.RM(), H), b && H.appendChild(b));
            g.qD(f.RM(), f.X);
            g.qD(f.RM(), K)
        },
        Ec4 = function(f, k, K) {
            K.stopPropagation();
            PZi(f);
            DDJ(f, k);
            f.G.focus()
        },
        Qo4 = function(f) {
            f.isCollapsed || f.j || f.V || (g.n_(f.RM(), "iv-promo-collapsed"), f.isCollapsed = !0, f.J.start())
        },
        PZi = function(f) {
            f.J.stop();
            f.isCollapsed && (g.gs(f.RM(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), f.isCollapsed = !1, f.G && f.G.removeAttribute("aria-hidden"), g.tC(f.D, !1), g.tC(f.Y, !0))
        },
        DDJ = function(f, k) {
            f.V || (f.V = g.sS(function() {
                VnW(this);
                Qo4(this)
            }, k, f))
        },
        VnW = function(f) {
            f.V && (g.Y1.clearTimeout(f.V), f.V = null)
        },
        $Dp = function(f) {
            this.L = f
        },
        c$3 = function(f, k, K) {
            k && (K ? bn(f, k.map(function(N) {
                return g.aS(N, K)
            })) : bn(f, k))
        },
        bn = function(f, k, K, N) {
            var v = 1,
                M = void 0,
                H = -1;
            if (K) {
                var U = !1;
                M = function() {
                    v--;
                    v || U || (clearTimeout(H), U = !0, K())
                };
                H = setTimeout(function() {
                    U = !0;
                    K()
                }, 1E3)
            }
            k = g.h(k || []);
            for (var S = k.next(); !S.done; S = k.next()) S = S.value, v++, g.s4(S, M);
            N && (v++, N !== 0 && f.L.sendVideoStatsEngageEvent(N, M))
        },
        TGi = function(f) {
            g.dK.call(this, f);
            var k = this;
            this.Fj = this.xn = !1;
            this.loadNumber = 0;
            this.T = {};
            this.logger = new $Dp(this.player);
            this.J = new g.to(this);
            this.X = this.V = null;
            this.events = new g.to(this);
            this.iM = this.j = this.G = null;
            this.Yn = [];
            g.E(this, this.J);
            this.J.C(this.player, "onVideoAreaChange", function() {
                k.publish("onVideoAreaChange")
            });
            this.J.C(this.player, "onHideControls", function() {
                k.publish("onHideControls")
            });
            this.J.C(this.player, "onShowControls", function() {
                k.publish("onShowControls")
            });
            this.J.C(this.player, "resize", function(M) {
                k.publish("resize", M)
            });
            this.J.C(this.player, "presentingplayerstatechange", function(M) {
                k.publish("presentingplayerstatechange", M)
            });
            this.subscribe("presentingplayerstatechange", this.WJ, this);
            this.subscribe("resize", this.yI, this);
            this.player.U().L9.subscribe("vast_info_card_add", this.rW, this);
            g.E(this, this.events);
            this.BH = this.createElement({
                B: "div",
                W: "video-custom-annotations"
            });
            this.D = new g.D({
                B: "div",
                ez: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.E(this, this.D);
            g.I1(this.player, this.D.element, 4);
            this.D.hide();
            this.Y = new g.D({
                B: "div",
                ez: ["ytp-iv-video-content"]
            });
            g.E(this, this.Y);
            f = this.createElement({
                B: "div",
                W: "video-annotations"
            });
            f.appendChild(this.BH);
            this.Y.element.appendChild(f);
            this.DK() ? this.load() : this.player.Z("web_fix_annotations") && (this.V = function() {
                k.loaded || k.r9() || !k.DK() || (IFv(k), k.load())
            }, this.player.addEventListener("videodatachange", this.V));
            var K = this.createElement({
                B: "style"
            });
            (g.GE("HEAD")[0] || document.body).appendChild(K);
            this.addOnDisposeCallback(function() {
                g.ao(K)
            });
            if (f = K.sheet) {
                for (var N = g.h(ilr), v = N.next(); !v.done; v = N.next()) f.insertRule(v.value, 0);
                N = g.h(zc4);
                for (v = N.next(); !v.done; v = N.next()) f.insertRule(v.value, 0)
            }
        },
        fL4 = function(f) {
            f = f.createElement({
                B: "div",
                ez: ["annotation", "annotation-type-custom"]
            });
            g.tC(f, !1);
            return f
        },
        kpW = function(f) {
            var k = f.player.U();
            f = f.player.getVideoData();
            return (k.annotationsLoadPolicy || f.annotationsLoadPolicy) === 1 && !f.Ba || k.L9.get(f.videoId) || g.fy(f) || g.k$(f) ? !0 : !1
        },
        HBv = function(f, k) {
            function K(H) {
                var U = f.loadNumber;
                f.X = null;
                f.loaded && f.loadNumber === U && f.player.getVideoData().videoId === N && (H = g.C0(H) && H.responseXML ? H.responseXML : null) && (Kkr(f, H), g.n_(f.player.getRootNode(), "iv-module-loaded"))
            }
            var N = k.videoId;
            g.l1() && (K = NMq(f, K));
            var v = {
                format: "XML",
                onFinish: K,
                onError: function() {
                    f.X = null
                },
                urlParams: {}
            };
            k.isPharma && (v.urlParams.pharma = "1");
            v.method = "POST";
            v.withCredentials = !0;
            var M = f.player.U().L9.get(N);
            M && vf3(v, M);
            M = M && M.KO;
            if (!k.kN || M) f.V = function() {
                if (!f.xn) f.onVideoDataChange(v);
                var H = f.player.getVideoData();
                (H == null ? 0 : g.TU(H)) && !f.Fj && MY4(f, H)
            }, f.player.addEventListener("videodatachange", f.V)
        },
        lLi = function(f, k) {
            k = !k.isCued() && !g.Q(k, 1024);
            f.D.T3(k);
            f.Y.T3(k)
        },
        IFv = function(f) {
            f.V && (f.player.removeEventListener("videodatachange", f.V), f.V = null)
        },
        UBc = function(f, k) {
            for (var K = {}, N = g.h(k.attributes), v = N.next(); !v.done; v = N.next()) v = v.value, K[v.name] = v.nodeValue;
            for (N = 0; N < k.childNodes.length; N++)
                if (v = k.childNodes[N], g.qW(v) && v.nodeType == 1) {
                    if (K[v.tagName]) var M = K[v.tagName];
                    else if (v.tagName === "data") {
                        v.childNodes.length > 0 && (M = v.childNodes[0].nodeValue, K[v.tagName] = typeof M === "string" ? M.trim() : M);
                        continue
                    } else M = [], K[v.tagName] = M;
                    v && v.tagName === "TEXT" ? v.childNodes.length === 1 && v.childNodes[0].nodeType === 3 ? M.push(v.childNodes[0].nodeValue) : M.push("") : v && M.push(UBc(f, v))
                }
            return K
        },
        SEv = function(f) {
            var k = f.player.getVideoData();
            if (k.TX) {
                var K = f.player.U().L9.get(k.videoId);
                if (K) {
                    var N = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(v, M, H) {
                            v = f.loadNumber;
                            M = k.videoId;
                            f.loaded && f.loadNumber === v && f.player.getVideoData().videoId === M && (H = g.C0(H) && H.responseXML ? H.responseXML : null) && Kkr(f, H)
                        }
                    };
                    g.l1() && (N.onFinish = NMq(f, N.onFinish));
                    N.postParams = {
                        ic_only: "1"
                    };
                    vf3(N, K);
                    f.xn = !0;
                    g.uO(k.TX, N)
                }
            }
        },
        vf3 = function(f, k) {
            f.method = "POST";
            f.postParams = f.postParams || {};
            k.KO && (f.postParams.ic_coll = k.KO);
            k.M3 && (f.postParams.ic_track = k.M3)
        },
        bBh = function(f) {
            var k = new g.D({
                B: "div"
            });
            g.tC(k.element, !1);
            var K = new ocq(f.player, k.element, ma(f));
            g.E(K, k);
            k.f9(f.D.element);
            K.dY();
            return K
        },
        MY4 = function(f, k) {
            var K, N;
            if (k = (K = k.getWatchNextResponse()) == null ? void 0 : (N = K.cards) == null ? void 0 : N.cardCollectionRenderer) f.Fj = !0, mBc(f, k), k.headerText && f.iM && (K = g.dT(k.headerText), f.player.Z("player_tooltip_data_title_killswitch") ? f.iM.setAttribute("title", K) : f.iM.setAttribute("data-tooltip-title", K))
        },
        ma = function(f) {
            if (!f.j) {
                var k = new Eer(f);
                g.E(f, k);
                var K = new g.yQ(f);
                g.E(f, K);
                f.j = new soc(k, K, f.player.U(), f.player.getVideoData(), f.logger, f.player, f.xx)
            }
            return f.j
        },
        Kkr = function(f, k) {
            var K = !1,
                N = k.getElementsByTagName("annotations");
            if (N && !(N.length < 1) && (N = N[0].getAttribute("itct"))) {
                var v = g.ok();
                if (v) {
                    var M = g.CC();
                    M && g.U9(g.Da)(void 0, v, M, [g.G1(N)])
                }
            }
            k = k.getElementsByTagName("annotation");
            for (N = 0; N < k.length; N++) {
                M = UBc(f, k[N]);
                v = null;
                try {
                    if (M) {
                        var H = M.id,
                            U = /.+/;
                        var S = typeof H === "string" && U != null && H != null && H.match(U) ? H : "";
                        var b = D5(M.type, nfh),
                            m = D5(M.style, OB4),
                            n = Mni(M.data),
                            x = n.length !== 0 ? JSON.parse(n) : {};
                        var O = M.action;
                        M = mDi;
                        if (O == null) var d = null;
                        else if (g.Zp(O)) {
                            U = [];
                            for (var G = g.h(O), W = G.next(); !W.done; W = G.next()) {
                                var J = M(W.value);
                                J && U.push(J)
                            }
                            d = U
                        } else {
                            var c = M(O);
                            d = c ? [c] : []
                        }
                        v = S && b ? new nc5(S, b, m, d, x) : null
                    } else v = null
                } catch (fW) {}
                if (v)
                    if (v.type === "branding" || v.type === "promotion") {
                        M = f;
                        U = v;
                        var Z = fL4(M),
                            X = null;
                        switch (U.type) {
                            case "branding":
                                if (M.player.U().iR) break;
                                M.player.Z("web_player_overlay_positioned_layout") ? (Z.setAttribute("data-overlay-order", "11"), M.player.B7(Z, 4, !0)) : M.D.element.appendChild(Z);
                                X = new SG(Z, ma(M), U);
                                break;
                            case "promotion":
                                g.I1(M.player, Z, 4), X = new A$W(Z, ma(M), U)
                        }
                        X && X.dY();
                        if (M = X) g.E(f, M), f.T[v.id] = M
                    } else if (v.type ===
                    "card" || v.type === "drawer") {
                    f.G || (f.G = bBh(f), g.E(f, f.G));
                    if (v.type === "card") {
                        Z = f.G;
                        var F = (K = v) && K.data && K.data.card_type;
                        v = K.data;
                        if (F) switch (M = v.tracking || {}, M = {
                            Ar: M.impression,
                            click: M.click,
                            close: M.close,
                            fV: M.teaser_impression,
                            H4: M.teaser_click
                        }, U = v.tracking_params || {}, X = null, F) {
                            case "collaborator":
                                K = {
                                    id: K.id,
                                    timestamp: v.timestamp || 0,
                                    type: v.card_type,
                                    teaserText: v.teaser_text,
                                    teaserDurationMs: v.teaser_duration_ms,
                                    startMs: v.start_ms,
                                    autoOpen: v.auto_open || !1,
                                    sessionData: v.session_data || {},
                                    sponsored: v.sponsored ||
                                        !1,
                                    v7: M,
                                    J9: U.card ? g.G1(U.card) : null,
                                    Tu: U.teaser ? g.G1(U.teaser) : null,
                                    TO: U.icon ? g.G1(U.icon) : null,
                                    channelId: v.channel_id,
                                    customMessage: v.custom_message ? v.custom_message : null,
                                    profileImageUrl: v.image_url,
                                    title: v.title,
                                    metaInfo: v.meta_info,
                                    url: VV({
                                        pause_on_navigation: v.pause_on_navigation,
                                        target: v.target || "new",
                                        value: v.url
                                    }),
                                    onClickCommand: null
                                };
                                vv(Z, K);
                                break;
                            case "playlist":
                                K = {
                                    id: K.id,
                                    timestamp: v.timestamp || 0,
                                    type: v.card_type,
                                    teaserText: v.teaser_text,
                                    teaserDurationMs: v.teaser_duration_ms,
                                    startMs: v.start_ms,
                                    autoOpen: v.auto_open || !1,
                                    sessionData: v.session_data || {},
                                    sponsored: v.sponsored || !1,
                                    v7: M,
                                    J9: U.card ? g.G1(U.card) : null,
                                    Tu: U.teaser ? g.G1(U.teaser) : null,
                                    TO: U.icon ? g.G1(U.icon) : null,
                                    Ik: v.image_url,
                                    playlistVideoCount: v.playlist_video_count,
                                    customMessage: v.custom_message ? v.custom_message : null,
                                    title: v.title,
                                    metaInfo: v.meta_info,
                                    url: VV({
                                        pause_on_navigation: v.pause_on_navigation,
                                        target: v.target || "new",
                                        value: v.url
                                    }),
                                    onClickCommand: null
                                };
                                vv(Z, K);
                                break;
                            case "productListing":
                                v.signin_url && (X = VV({
                                    target: "current",
                                    value: v.signin_url
                                }));
                                F = [];
                                for (var p = v.offers || [], I = 0; I < p.length; I++) F.push(new r$h(g.$e(p[I].merchant), g.$e(p[I].price)));
                                K = {
                                    id: K.id,
                                    timestamp: v.timestamp || 0,
                                    type: v.card_type,
                                    teaserText: v.teaser_text,
                                    teaserDurationMs: v.teaser_duration_ms,
                                    startMs: v.start_ms,
                                    autoOpen: v.auto_open || !1,
                                    sessionData: v.session_data || {},
                                    sponsored: v.sponsored || !1,
                                    v7: M,
                                    J9: U.card ? g.G1(U.card) : null,
                                    Tu: U.teaser ? g.G1(U.teaser) : null,
                                    TO: U.icon ? g.G1(U.icon) : null,
                                    imageUrl: v.image_url,
                                    displayDomain: v.display_domain ? v.display_domain : null,
                                    showLinkIcon: !!v.show_link_icon,
                                    qL: v.button_icon_url ? v.button_icon_url : null,
                                    title: v.title,
                                    customMessage: v.custom_message ? v.custom_message : null,
                                    url: VV({
                                        pause_on_navigation: v.pause_on_navigation,
                                        target: v.target || "new",
                                        value: v.url
                                    }),
                                    WOf: X,
                                    HDj: v.signin_title ? v.signin_title : void 0,
                                    T1H: v.signin_message ? v.signin_message : void 0,
                                    offers: F,
                                    onClickCommand: null
                                };
                                vv(Z, K);
                                break;
                            case "simple":
                                K = {
                                    id: K.id,
                                    timestamp: v.timestamp || 0,
                                    type: v.card_type,
                                    teaserText: v.teaser_text,
                                    teaserDurationMs: v.teaser_duration_ms,
                                    startMs: v.start_ms,
                                    autoOpen: v.auto_open || !1,
                                    sessionData: v.session_data || {},
                                    sponsored: v.sponsored || !1,
                                    v7: M,
                                    J9: U.card ? g.G1(U.card) : null,
                                    Tu: U.teaser ? g.G1(U.teaser) : null,
                                    TO: U.icon ? g.G1(U.icon) : null,
                                    imageUrl: v.image_url,
                                    displayDomain: v.display_domain ? v.display_domain : null,
                                    showLinkIcon: !!v.show_link_icon,
                                    qL: v.button_icon_url ? v.button_icon_url : null,
                                    title: v.title,
                                    customMessage: v.custom_message ? v.custom_message : null,
                                    url: VV({
                                        pause_on_navigation: v.pause_on_navigation,
                                        target: v.target || "new",
                                        value: v.url
                                    }),
                                    onClickCommand: null
                                };
                                vv(Z, K);
                                break;
                            case "video":
                                K = {
                                    id: K.id,
                                    timestamp: v.timestamp || 0,
                                    type: v.card_type,
                                    teaserText: v.teaser_text,
                                    teaserDurationMs: v.teaser_duration_ms,
                                    startMs: v.start_ms,
                                    autoOpen: v.auto_open || !1,
                                    sessionData: v.session_data || {},
                                    sponsored: v.sponsored || !1,
                                    v7: M,
                                    J9: U.card ? g.G1(U.card) : null,
                                    Tu: U.teaser ? g.G1(U.teaser) : null,
                                    TO: U.icon ? g.G1(U.icon) : null,
                                    Ik: v.image_url,
                                    videoDuration: v.video_duration || null,
                                    customMessage: v.custom_message ? v.custom_message : null,
                                    title: v.title,
                                    metaInfo: v.meta_info,
                                    isLiveNow: !!v.is_live_now,
                                    url: VV({
                                        pause_on_navigation: v.pause_on_navigation,
                                        target: v.target || "new",
                                        value: v.url
                                    }),
                                    onClickCommand: null
                                }, vv(Z, K)
                        }
                    } else YJc(f.G, v);
                    K = !0
                }
            }
            K && (hT(f.player), f.yI())
        },
        mBc = function(f, k) {
            var K = !1;
            f.G || (f.G = bBh(f), g.E(f, f.G));
            for (var N = g.h(k.cards || []), v = N.next(); !v.done; v = N.next()) v = v.value, v.cardRenderer && (J$q(f.G, v.cardRenderer), K = !0);
            if (K) {
                var M;
                (M = f.player.getVideoData()) != null && g.TU(M) || (K = f.G, N = k.headerText ? g.dT(k.headerText) : "", g.Ll(K.xV, N), K.J && (K.L.Z("player_tooltip_data_title_killswitch") ? K.J.setAttribute("title", N) : K.J.setAttribute("data-tooltip-title", N)), K.context.videoData.eventId && (K.eventId = K.context.videoData.eventId), K.cH = k.trackingParams ? g.G1(k.trackingParams) : null, K.j =
                    k.closeButton.infoCardIconRenderer.trackingParams ? g.G1(k.closeButton.infoCardIconRenderer.trackingParams) : null, K.TO = k.icon.infoCardIconRenderer.trackingParams ? g.G1(k.icon.infoCardIconRenderer.trackingParams) : null, f.yI());
                hT(f.player)
            }
        },
        xBi = function(f, k, K, N, v) {
            if (!f.player.U().iR) {
                var M = [];
                k.navigationEndpoint && g.r(k.navigationEndpoint, g.Db) && g.r(k.navigationEndpoint, g.Db).browseId && M.push(new UD1("openUrl", "click", new Hl7("/channel/" + g.r(k.navigationEndpoint, g.Db).browseId, "new", !0, !0)));
                var H = k.watermark.thumbnails[0];
                N = {
                    channel_name: k.channelName,
                    end_ms: k.endTimeMs,
                    image_height: H.height,
                    image_type: 1,
                    image_url: H.url,
                    image_width: H.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: K,
                        ei: v,
                        feature: "iv",
                        itct: k.trackingParams,
                        src_vid: N
                    },
                    start_ms: k.startTimeMs
                };
                if (k.subscribeButton && g.r(k.subscribeButton,
                        g.Qb)) {
                    N.channel_id = g.r(k.subscribeButton, g.Qb).channelId;
                    var U;
                    k = g.r(k.subscribeButton, g.Qb);
                    H = v = null;
                    k.subscribed ? (k.subscriberCountWithUnsubscribeText && (v = g.dT(k.subscriberCountWithUnsubscribeText)), k.subscriberCountText && (H = g.dT(k.subscriberCountText))) : (k.subscriberCountText && (v = g.dT(k.subscriberCountText)), k.subscriberCountWithSubscribeText && (H = g.dT(k.subscriberCountWithSubscribeText)));
                    var S, b = ((S = g.r((U = k.signInEndpoint) == null ? void 0 : U.commandMetadata, g.W1)) == null ? void 0 : S.url) || "";
                    U = {
                        subscribeText: g.dT(k.unsubscribedButtonText),
                        subscribeCount: v || "",
                        unsubscribeText: g.dT(k.subscribedButtonText),
                        unsubscribeCount: H || "",
                        enabled: k.enabled || !1,
                        classic: !1,
                        subscribed: k.subscribed || !1,
                        feature: "iv",
                        signInUrl: b
                    };
                    N.standalone_subscribe_button_data = U
                }
                M = new nc5(K, "branding", "branding", M, N);
                U = fL4(f);
                f.player.Z("web_player_overlay_positioned_layout") ? (U.setAttribute("data-overlay-order", "11"), f.player.B7(U, 4, !0)) : f.D.element.appendChild(U);
                M = new SG(U, ma(f), M);
                M.dY();
                g.E(M, M);
                f.T[K] = M
            }
        },
        NMq = function(f, k) {
            return function() {
                var K = g.r0.apply(0,
                    arguments);
                f.r9() || f.Yn.push(g.VQ.df(function() {
                    k.apply(null, g.q(K))
                }))
            }
        },
        gfJ = function(f) {
            return f === "annotation-editor" || f === "live-dashboard"
        };
    g.Ak.prototype.jF = g.jS(35, function(f, k) {
        var K = g.hI(this.Ad());
        K && K.jF(f, k)
    });
    var qv = {},
        Xa = null;
    g.Fi(a6, g.tn);
    g.t = a6.prototype;
    g.t.getDuration = function() {
        return this.duration
    };
    g.t.play = function(f) {
        if (f || this.G == 0) this.progress = 0, this.coords = this.D;
        else if (this.isPlaying()) return !1;
        u7(this);
        this.startTime = f = g.Ar();
        this.isPaused() && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.V = this.startTime;
        this.progress || this.MY();
        this.yp("play");
        this.isPaused() && this.yp("resume");
        this.G = 1;
        var k = g.a7(this);
        k in qv || (qv[k] = this);
        aoq();
        eGh(this, f);
        return !0
    };
    g.t.stop = function(f) {
        u7(this);
        this.G = 0;
        f && (this.progress = 1);
        LwJ(this, this.progress);
        this.onStop();
        this.M4()
    };
    g.t.pause = function() {
        this.isPlaying() && (u7(this), this.G = -1, this.yp("pause"))
    };
    g.t.VD = function() {
        this.G == 0 || this.stop(!1);
        this.yp("destroy");
        a6.Xc.VD.call(this)
    };
    g.t.destroy = function() {
        this.dispose()
    };
    g.t.kL = function() {
        this.yp("animate")
    };
    g.t.yp = function(f) {
        this.dispatchEvent(new j_q(f, this))
    };
    g.Fi(j_q, g.Mp);
    g.Fi(ej, a6);
    ej.prototype.Y = function() {};
    ej.prototype.kL = function() {
        this.Y();
        ej.Xc.kL.call(this)
    };
    ej.prototype.M4 = function() {
        this.Y();
        ej.Xc.M4.call(this)
    };
    ej.prototype.MY = function() {
        this.Y();
        ej.Xc.MY.call(this)
    };
    g.Fi(p0c, ej);
    p0c.prototype.Y = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.w(Eer, g.A);
    g.t = Eer.prototype;
    g.t.listen = function(f, k, K, N) {
        K = (0, g.jq)(K, N || this.D);
        f = g.qS(f, k, K);
        this.G.push(f);
        return f
    };
    g.t.Tc = function(f, k, K, N) {
        K = (0, g.jq)(K, N || this.D);
        f = X03(f, k, K);
        this.G.push(f);
        return f
    };
    g.t.aQ = function(f) {
        g.XK(f);
        g.Nd(this.G, f)
    };
    g.t.removeAll = function() {
        g.XK(this.G);
        this.G.length = 0
    };
    g.t.VD = function() {
        this.removeAll();
        g.A.prototype.VD.call(this)
    };
    g.w(D7W, g.dK);
    g.t = D7W.prototype;
    g.t.load = function() {
        g.dK.prototype.load.call(this);
        if (!pQ(this)) {
            var f = g.PRn(this.player.getVideoData());
            f ? (f = PYq(f, Q_p(this)), sc(this, f, !1)) : V$5(this)
        }
    };
    g.t.unload = function() {
        sc(this, null);
        this.V && (this.V.abort(), this.V = null);
        g.dK.prototype.unload.call(this)
    };
    g.t.qf = function(f, k) {
        return pQ(this) ? f === "loadCustomEndscreenRenderer" ? (f = PYq(k, "new"), sc(this, f), !0) : null : null
    };
    g.t.getOptions = function() {
        return pQ(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.t.jy = function() {
        if (this.endscreen && this.endscreen.elements) {
            var f = this.player.getVideoContentRect();
            if (f && f.width !== 0 && f.height !== 0) {
                var k = this.player.getPlayerSize();
                if (k && k.width !== 0 && k.height !== 0) {
                    var K = f.width / f.height;
                    var N = 0;
                    for (var v = -1, M = 0; M < dBi.length; M++) {
                        var H = Math.abs(k.width - dBi[M]);
                        if (v === -1 || N >= H) v = M, N = H
                    }
                    N = tYr[v];
                    this.Y && g.vr(this.Y.element, "outline-width", Math.max(k.width, k.height) + "px");
                    for (k = 0; k < this.endscreen.elements.length; ++k)
                        if (M = this.endscreen.elements[k].id, v = this.D[M],
                            H = this.T[M], v && H) {
                            var U = H.width * K / H.aspectRatio,
                                S = Math.round(H.width * f.width);
                            M = Math.round(U * f.height);
                            var b = f.left + Math.round(H.left * f.width),
                                m = f.top + Math.round(H.top * f.height);
                            g.gM(v.element, S, M);
                            g.mk(v.element, b, m);
                            g.gs(v.element, rC7);
                            S > 256 || M > 256 ? g.n_(v.element, "ytp-ce-large-round") : S > 96 || M > 96 ? g.n_(v.element, "ytp-ce-medium-round") : g.n_(v.element, "ytp-ce-small-round");
                            g.gs(v.element, wr7);
                            S = H.left + H.width / 2;
                            H = H.top + U / 2;
                            g.n_(v.element, S <= .5 && H <= .5 ? "ytp-ce-top-left-quad" : S > .5 && H <= .5 ? "ytp-ce-top-right-quad" :
                                S <= .5 && H > .5 ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.gs(v.element, tYr);
                            g.n_(v.element, N);
                            (v = g.W5(document, "div", "ytp-ce-expanding-overlay-body", v.element)[0]) && g.vr(v, "height", M + "px")
                        }
                }
            }
        }
    };
    g.t.onCueRangeEnter = function(f) {
        if (this.endscreen)
            if (f.getId() === "ytp-ce-in-endscreen") PL(this, this.endscreen.impressionUrls), (f = g.ok()) && this.endscreen.visualElement && g.kA(f, this.endscreen.visualElement), this.G && (g.n_(this.G, "ytp-ce-element-show"), this.G.removeAttribute("aria-hidden"), this.player.bd() ? g.n_(this.G, "ytp-ce-hide-button-lower") : g.xq(this.G, "ytp-ce-hide-button-lower"));
            else {
                f = f.getId().substring(15);
                var k = this.D[f],
                    K = this.T[f];
                g.n_(k.element, "ytp-ce-element-show");
                k.element.removeAttribute("aria-hidden");
                k = this.player.getRootNode();
                g.n_(k, "ytp-ce-shown");
                PL(this, K.impressionUrls);
                (k = g.ok()) && g.kA(k, K.visualElement);
                this.player.U().j && this.player.zk("endscreenelementshown", f)
            }
    };
    g.t.onCueRangeExit = function(f) {
        if (f.getId() === "ytp-ce-in-endscreen") this.G && (g.xq(this.G, "ytp-ce-element-show"), this.G.setAttribute("aria-hidden", "true"));
        else {
            f = f.getId().substring(15);
            var k = this.D[f];
            g.xq(k.element, "ytp-ce-element-show");
            k.element.setAttribute("aria-hidden", "true");
            k = this.player.getRootNode();
            g.xq(k, "ytp-ce-shown");
            this.player.U().j && this.player.zk("endscreenelementhidden", f)
        }
    };
    g.t.frw = function(f) {
        var k = this;
        f.target === window && (new g.K_(function() {
            for (var K = g.h(Object.values(k.D)), N = K.next(); !N.done; N = K.next()) g.gs(N.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    g.t.T3 = function(f) {
        for (var k = g.h(Object.values(this.D)), K = k.next(); !K.done; K = k.next()) K = K.value, f ? K.element.setAttribute("hidden", "") : K.element.removeAttribute("hidden")
    };
    g.t.Xpj = function(f) {
        this.G && this.player.getRootNode().removeChild(this.G);
        f && (g.n_(f, "ytp-ce-hide-button-container"), this.G = f, g.I1(this.player, this.G, 4))
    };
    var dBi = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        tYr = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        wr7 = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        rC7 = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var lF5 = {
        wLz: "current",
        of4: "new"
    };
    var SJJ = {
            CLOSE: "close",
            U5H: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        blJ = {
            Ebn: "click",
            CLOSE: "close",
            g_j: "hidden",
            u59: "rollOut",
            Puw: "rollOver",
            DDH: "shown"
        };
    nc5.prototype.At = function() {
        var f = Ol4(this, function(k) {
            return k.type === "openUrl" && k.url != null
        });
        return f ? f.url : null
    };
    var OB4 = {
            WGL: "anchored",
            WA: "branding",
            CHANNEL: "channel",
            K_n: "cta",
            F0f: "highlightText",
            uNk: "label",
            PLAYLIST: "playlist",
            POPUP: "popup",
            JIk: "speech",
            SUBSCRIBE: "subscribe",
            dDk: "title",
            VIDEO: "video",
            Vpw: "website"
        },
        nfh = {
            WA: "branding",
            a1z: "card",
            Vwf: "drawer",
            GRw: "highlight",
            Bd9: "marker",
            prz: "promotion",
            TEXT: "text",
            U42: "widget"
        };
    var ilr = [".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
            ".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
            ".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", ".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
            ".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", ".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}"
        ],
        zc4 = [".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", ".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
            ".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", ".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}"
        ];
    g.w(zy, g.A);
    g.t = zy.prototype;
    g.t.addCueRange = function(f, k, K, N, v) {
        f = new g.QR(f, k, {
            id: K,
            namespace: "annotations_module"
        });
        N && this.Xj.set(f, N);
        v && this.qx.set(f, v);
        this.context.L.yK([f], 1)
    };
    g.t.dY = function() {
        this.context.D.subscribe("resize", this.bq, this)
    };
    g.t.RM = function() {
        return this.element
    };
    g.t.OF = function(f, k, K, N, v, M) {
        if (this.vH) return !1;
        M && (M.stopPropagation(), M.preventDefault());
        this.navigate(f, K, N, v);
        return !1
    };
    g.t.show = function() {};
    g.t.hide = function() {};
    g.t.destroy = function() {
        g.ao(this.RM())
    };
    g.t.bq = function() {};
    g.t.navigate = function(f, k, K, N) {
        var v = this,
            M = QV(f);
        if (M) {
            var H = GE1(M, f.target),
                U = function() {
                    f.G && v.context.L.pauseVideo();
                    var S = v.context.videoData.Ps || !1,
                        b = g.O9(M || "");
                    S && b && (b.v || b.list) ? v.context.L.tC(b.v, k, b.list, !1) : g.Q1(M || "", H === "current" ? "_top" : void 0, k)
                };
            H === "new" && (U(), U = null);
            bn(this.context.logger, K, U, N);
            w57(M) || (K = g.ok(), N = k.itct, K && N && g.vT(K, g.G1(N)))
        }
    };
    g.t.VD = function() {
        this.Xj.clear();
        this.qx.clear();
        g.A.prototype.VD.call(this)
    };
    g.t.createElement = function(f) {
        f = new g.D(f);
        g.E(this, f);
        return f.element
    };
    g.w(ocq, zy);
    g.t = ocq.prototype;
    g.t.U$ = function() {
        this.Yn && vv(this, this.Yn)
    };
    g.t.isAvailable = function() {
        var f;
        if (f = !!this.cards.length)(f = this.L.getRootNode()) ? (f = g.dM(f), f = 173 < f.width && 173 < f.height) : f = !1;
        return f
    };
    g.t.bq = function() {
        var f = this.isAvailable();
        g.tC(this.RM(), f);
        g.ds(this.context.L.getRootNode(), g.j8.IV_DRAWER_ENABLED, f);
        hT(this.L)
    };
    g.t.destroy = function() {
        this.L.jF(!1);
        try {
            this.L.getRootNode().removeChild(this.V)
        } catch (f) {}
        g.M6(this.xn);
        g.pH(this.Zw);
        this.Mx && this.Mx.dispose();
        this.T && this.T.dispose();
        zy.prototype.destroy.call(this)
    };
    g.t.aK = function() {
        var f = this;
        this.context.G.listen(g.Cl("iv-drawer-close-button", this.V), "click", this.gj, this);
        this.context.G.listen(this.D, "touchend", function() {
            f.Rw.start()
        });
        this.context.G.listen(this.D, "scroll", this.H2, this);
        this.context.D.subscribe("onHideControls", function() {
            f.L9 = !0
        });
        this.context.D.subscribe("onShowControls", function() {
            f.L9 = !1
        });
        this.context.D.subscribe("onVideoAreaChange", function() {
            f.L9 = g.md(f.L.getRootNode(), "ytp-autohide")
        });
        this.xn.push(g.vq("iv-button-shown", this.ZNz, this));
        this.xn.push(g.vq("iv-button-hidden", this.ONz, this));
        Zlr(this)
    };
    g.t.findLastIndex = function(f) {
        if (this.cards.length === 0) return 0;
        var k = g.I7(this.cards, function(K) {
            return f.a5.startMs > K.a5.startMs || f.a5.startMs === K.a5.startMs && f.a5.timestamp >= K.a5.timestamp ? !0 : !1
        });
        return k === -1 ? 0 : k + 1
    };
    g.t.gj = function() {
        if (this.Y) {
            bn(this.context.logger, ln(this).v7.close);
            var f = g.ok();
            f && this.j && g.vT(f, this.j);
            Kq(this)
        }
    };
    g.t.H2 = function() {
        g.ds(this.V, "iv-drawer-scrolled", this.D.scrollTop > 0)
    };
    g.t.ZNz = function() {
        var f = g.ok(),
            k = ln(this);
        k = k ? k.TO : this.TO;
        f && k && g.Kf(f, [k])
    };
    g.t.ONz = function() {
        var f = g.ok(),
            k = ln(this);
        k = k ? k.TO : this.TO;
        f && k && g.Nb(f, [k])
    };
    g.t.HJ = function() {
        var f = ln(this);
        bn(this.context.logger, f.v7.fV);
        var k = g.ok();
        if (k && f)
            if (this.L.Z("web_infocards_teaser_show_logging_fix")) {
                var K = [];
                f.Tu && K.push(f.Tu);
                f.TO && K.push(f.TO);
                K.length > 0 && g.Kf(k, K)
            } else g.Kf(k, [f.Tu, f.TO])
    };
    g.t.EVk = function() {
        var f = g.ok(),
            k = ln(this);
        f && k && g.Nb(f, [k.Tu])
    };
    g.t.Ty = function(f) {
        var k = ln(this),
            K = g.ok();
        this.G ? f ? (f = this.context.logger, bn(f, k.v7.H4), f.L.sendVideoStatsEngageEvent(4, void 0), K && k.Tu && g.vT(K, k.Tu)) : (f = this.context.logger, bn(f, k.v7.H4), f.L.sendVideoStatsEngageEvent(4, void 0), K && k.TO && g.vT(K, k.TO)) : (f = this.context.logger, bn(f, k.v7.H4), f.L.sendVideoStatsEngageEvent(4, void 0), K && this.TO && g.vT(K, this.TO))
    };
    g.w(U5, zy);
    U5.prototype.dY = function() {
        zy.prototype.dY.call(this);
        jor(this)
    };
    U5.prototype.show = function() {
        zy.prototype.show.call(this);
        var f = g.ok(),
            k = this.annotation.data;
        f && k && (k = k.session_data) && g.Kf(f, [g.G1(k.itct)])
    };
    U5.prototype.hide = function() {
        zy.prototype.hide.call(this);
        var f = g.ok(),
            k = this.annotation.data;
        f && k && (k = k.session_data) && g.Nb(f, [g.G1(k.itct)])
    };
    g.w(SG, U5);
    SG.prototype.show = function() {
        if (!this.isActive) {
            U5.prototype.show.call(this);
            if (!this.Y) {
                g.n_(this.RM(), "iv-branding");
                var f = this.annotation.data;
                this.G = this.createElement({
                    B: "img",
                    ez: ["branding-img", "iv-click-target"],
                    N: {
                        "aria-label": "Watermark channel",
                        src: f.image_url,
                        width: f.image_width,
                        height: f.image_height
                    }
                });
                g.tC(this.G, !1);
                var k = this.createElement({
                    B: "button",
                    ez: ["branding-img-container", "ytp-button"]
                });
                k.appendChild(this.G);
                this.RM().appendChild(k);
                var K = this.annotation.At();
                K && Ty(this, k,
                    K, this.annotation.id, f.session_data);
                this.Y = !0
            }
            g.tC(this.RM(), !0);
            this.isActive = !0;
            if (this.G) {
                try {
                    p5v(this, this.G)
                } catch (N) {}
                g.n_(this.context.L.getRootNode(), "ytp-branding-shown");
                this.context.L.getRootNode().style.setProperty("--branding-image-width", this.G.getAttribute("width") + "px")
            }
        }
    };
    SG.prototype.hide = function() {
        this.isActive && (U5.prototype.hide.call(this), g.tC(this.RM(), !1), this.isActive = !1, g.xq(this.context.L.getRootNode(), "ytp-branding-shown"))
    };
    SG.prototype.destroy = function() {
        this.D && (this.D.dispose(), this.D = null);
        g.xq(this.context.L.getRootNode(), "ytp-branding-shown");
        U5.prototype.destroy.call(this)
    };
    g.w(A$W, U5);
    g.t = A$W.prototype;
    g.t.show = function() {
        this.isActive || (U5.prototype.show.call(this), this.Fj || (FPJ(this), this.Fj = !0), g.tC(this.RM(), !0), g.sS(function() {
            g.xq(this.RM(), "iv-promo-inactive")
        }, 100, this), this.RM().removeAttribute("aria-hidden"), this.isActive = !0, VnW(this), PZi(this), DDJ(this, this.T))
    };
    g.t.hide = function() {
        this.isActive && (g.n_(this.RM(), "iv-promo-inactive"), this.isActive = !1, this.RM().setAttribute("aria-hidden", "true"))
    };
    g.t.OF = function(f, k, K, N, v, M) {
        return this.isCollapsed ? !1 : U5.prototype.OF.call(this, f, k, K, N, v, M)
    };
    g.t.L4H = function(f) {
        this.j = !0;
        Ec4(this, 500, f)
    };
    g.t.efL = function() {
        this.j = !1;
        Qo4(this)
    };
    g.t.ALw = function(f) {
        f.stopPropagation();
        this.hide()
    };
    g.t.cLx = function(f) {
        f.stopPropagation();
        VnW(this);
        this.isCollapsed = !0;
        g.n_(this.RM(), "iv-promo-collapsed-no-delay");
        this.J.start()
    };
    g.t.destroy = function() {
        this.J.dispose();
        U5.prototype.destroy.call(this)
    };
    g.w(TGi, g.dK);
    g.t = TGi.prototype;
    g.t.qf = function(f, k) {
        if (!gfJ(this.player.U().playerStyle)) return null;
        switch (f) {
            case "loadCustomAnnotationsXml":
                return (f = g.$b(k)) && Kkr(this, f), !0;
            case "removeCustomAnnotationById":
                return k && this.G && (BG4(this.G, k), hT(this.player)), !0
        }
        return null
    };
    g.t.getOptions = function() {
        return gfJ(this.player.U().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.t.DK = function() {
        var f = this.player.getVideoData(),
            k, K, N = (k = f.getWatchNextResponse()) == null ? void 0 : (K = k.playerOverlays) == null ? void 0 : K.playerOverlayRenderer;
        if (f.Ps || this.player.isMutedByEmbedsMutedAutoplay()) return !1;
        if (!this.player.Z("web_fix_annotations")) return kpW(this);
        if (kpW(this)) {
            if ((N == null ? void 0 : N.isWatermarkEnforced) === !0) return !0;
            var v;
            return (v = N == null ? void 0 : N.isAnnotationsEnabled) != null ? v : !1
        }
        return !1
    };
    g.t.yI = function() {
        if (this.Y) {
            var f = this.player.K9().getVideoContentRect(!0);
            g.gM(this.Y.element, f.width, f.height);
            g.mk(this.Y.element, f.left, f.top)
        }
        if (this.G) {
            var k = this.player.qz();
            f = this.G;
            k = k.width;
            g.ds(f.V, "iv-drawer-small", k <= 426);
            g.ds(f.V, "iv-drawer-big", k >= 1280)
        }
    };
    g.t.WJ = function(f) {
        lLi(this, f.state);
        g.Q(f.state, 2) && (this.bd() && this.h9() && this.player.getPresentingPlayerType() !== 2 && this.zf(!1), this.jF(!1))
    };
    g.t.load = function() {
        g.dK.prototype.load.call(this);
        lLi(this, this.player.getPlayerStateObject());
        this.loadNumber++;
        var f = this.player.getVideoData();
        HBv(this, f);
        g.I1(this.player, this.Y.element, 4);
        this.yI();
        var k = g.k$(f),
            K = g.fy(f);
        if (this.player.Z("web_fix_annotations")) {
            if (k) {
                k.featuredChannel && xBi(this, k.featuredChannel, k.annotationId || "branding", f.videoId || null, f.eventId || null);
                var N, v;
                k = (N = this.player.getVideoData().getWatchNextResponse()) == null ? void 0 : (v = N.playerOverlays) == null ? void 0 : v.playerOverlayRenderer;
                if (k != null && k.isWatermarkEnforced && (k == null || !k.isAnnotationsEnabled)) return
            }
            K && mBc(this, K)
        } else K && mBc(this, K), k && k.featuredChannel && xBi(this, k.featuredChannel, k.annotationId || "branding", f.videoId || null, f.eventId || null);
        this.iM = g.Cl("ytp-cards-button", this.player.getRootNode());
        g.TU(f) && MY4(this, f)
    };
    g.t.onVideoDataChange = function() {};
    g.t.unload = function() {
        this.player.fS("annotations_module");
        for (var f = g.h(Object.keys(this.T)), k = f.next(); !k.done; k = f.next()) this.T[k.value].destroy();
        this.j = null;
        this.G && (this.G.destroy(), this.G = null, hT(this.player));
        this.xn = !1;
        this.X && (this.X.abort(), this.X = null);
        this.Fj = !1;
        this.T = {};
        this.D.hide();
        g.dK.prototype.unload.call(this);
        this.Y.detach();
        IFv(this)
    };
    g.t.rW = function(f) {
        f === this.player.getVideoData().videoId && (this.loaded ? SEv(this) : this.load())
    };
    g.t.bd = function() {
        var f;
        return ((f = this.G) == null ? void 0 : f.isAvailable()) || this.Fj
    };
    g.t.h9 = function() {
        return !!this.G && this.G.Y
    };
    g.t.zf = function(f, k, K) {
        k = k === void 0 ? !1 : k;
        this.bd();
        this.G && (f ? K ? kV(this.G, K, k) : kV(this.G, "YOUTUBE_DRAWER_AUTO_OPEN", k) : Kq(this.G))
    };
    g.t.jF = function(f, k) {
        this.player.publish(f ? "cardsteasershow" : "cardsteaserhide", k)
    };
    g.t.VD = function() {
        this.player.U().L9.unsubscribe("vast_info_card_add", this.rW, this);
        g.xq(this.player.getRootNode(), g.j8.IV_DRAWER_OPEN);
        for (var f = this.Yn, k = g.VQ, K = 0, N = f.length; K < N; K++) k.No(f[K]);
        this.Yn.length = 0;
        g.dK.prototype.VD.call(this)
    };
    g.t.createElement = function(f) {
        f = new g.D(f);
        g.E(this, f);
        return f.element
    };
    g.gK("annotations_module", TGi);
    g.gK("creatorendscreen", D7W);
})(_yt_player);