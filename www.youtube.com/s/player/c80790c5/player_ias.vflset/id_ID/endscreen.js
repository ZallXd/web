(function(g) {
    var window = this;
    'use strict';
    var jQc = function(f) {
            f.publish("autonavvisibility")
        },
        pf7 = function(f, k) {
            f.zk("onAutonavCoundownStarted", k)
        },
        sQ4 = function(f) {
            return f.isBackground() && f.fh()
        },
        AXh = function(f) {
            var k, K, N;
            return f == null ? void 0 : (k = f.playerOverlays) == null ? void 0 : (K = k.playerOverlayRenderer) == null ? void 0 : (N = K.autoplay) == null ? void 0 : N.playerOverlayAutoplayRenderer
        },
        UD = function(f) {
            var k = f.U(),
                K = k.V;
            g.D.call(this, {
                B: "a",
                W: "ytp-autonav-suggestion-card",
                N: {
                    href: "{{url}}",
                    target: K ? k.Fj : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                S: [{
                    B: "div",
                    ez: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    N: {
                        style: "{{background}}"
                    },
                    S: [{
                        B: "div",
                        N: {
                            "aria-label": "{{timestamp}}"
                        },
                        ez: ["ytp-autonav-timestamp"],
                        p9: "{{duration}}"
                    }, {
                        B: "div",
                        ez: ["ytp-autonav-live-stamp"],
                        p9: "Live"
                    }, {
                        B: "div",
                        ez: ["ytp-autonav-upcoming-stamp"],
                        p9: "Mendatang"
                    }, {
                        B: "div",
                        W: "ytp-autonav-list-overlay",
                        S: [{
                            B: "div",
                            W: "ytp-autonav-mix-text",
                            p9: "Mix"
                        }, {
                            B: "div",
                            W: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    B: "div",
                    ez: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    p9: "{{title}}"
                }, {
                    B: "div",
                    ez: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    p9: "{{author}}"
                }, {
                    B: "div",
                    ez: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    p9: "{{views_and_publish_time}}"
                }]
            });
            this.L = f;
            this.suggestion =
                null;
            this.G = K;
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress)
        },
        Sr = function(f, k) {
            k = k === void 0 ? !1 : k;
            g.D.call(this, {
                B: "div",
                W: "ytp-autonav-endscreen-countdown-overlay"
            });
            var K = this;
            this.T = k;
            this.cancelCommand = this.J = void 0;
            this.Y = 0;
            this.container = new g.D({
                B: "div",
                W: "ytp-autonav-endscreen-countdown-container"
            });
            g.E(this, this.container);
            this.container.f9(this.element);
            k = f.U();
            var N = k.V;
            this.L = f;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.L.getVideoData());
            this.C(f, "videodatachange", this.onVideoDataChange);
            this.G = new g.D({
                B: "div",
                W: "ytp-autonav-endscreen-upnext-container",
                N: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                S: [{
                    B: "div",
                    W: "ytp-autonav-endscreen-upnext-header"
                }, {
                    B: "div",
                    W: "ytp-autonav-endscreen-upnext-alternative-header",
                    p9: "{{autoplayAlternativeHeader}}"
                }, {
                    B: "a",
                    W: "ytp-autonav-endscreen-link-container",
                    N: {
                        href: "{{url}}",
                        target: N ? k.Fj : ""
                    },
                    S: [{
                        B: "div",
                        W: "ytp-autonav-endscreen-upnext-thumbnail",
                        N: {
                            style: "{{background}}"
                        },
                        S: [{
                            B: "div",
                            N: {
                                "aria-label": "{{timestamp}}"
                            },
                            ez: ["ytp-autonav-timestamp"],
                            p9: "{{duration}}"
                        }, {
                            B: "div",
                            ez: ["ytp-autonav-live-stamp"],
                            p9: "Live"
                        }, {
                            B: "div",
                            ez: ["ytp-autonav-upcoming-stamp"],
                            p9: "Mendatang"
                        }]
                    }, {
                        B: "div",
                        W: "ytp-autonav-endscreen-video-info",
                        S: [{
                            B: "div",
                            W: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            B: "div",
                            W: "ytp-autonav-endscreen-upnext-title",
                            p9: "{{title}}"
                        }, {
                            B: "div",
                            W: "ytp-autonav-endscreen-upnext-author",
                            p9: "{{author}}"
                        }, {
                            B: "div",
                            W: "ytp-autonav-view-and-date",
                            p9: "{{views_and_publish_time}}"
                        }, {
                            B: "div",
                            W: "ytp-autonav-author-and-view",
                            p9: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.E(this, this.G);
            this.G.f9(this.container.element);
            N || this.C(this.G.hL("ytp-autonav-endscreen-link-container"), "click", this.oO);
            this.L.createClientVe(this.container.element, this, 115127);
            this.L.createClientVe(this.G.hL("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.D({
                B: "div",
                W: "ytp-autonav-overlay"
            });
            g.E(this, this.overlay);
            this.overlay.f9(this.container.element);
            this.D = new g.D({
                B: "div",
                W: "ytp-autonav-endscreen-button-container"
            });
            g.E(this, this.D);
            this.D.f9(this.container.element);
            this.cancelButton = new g.D({
                B: "button",
                ez: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", "ytp-autonav-endscreen-upnext-button-rounded"],
                N: {
                    "aria-label": "Batalkan pemutaran otomatis"
                },
                p9: "Batalkan"
            });
            g.E(this, this.cancelButton);
            this.cancelButton.f9(this.D.element);
            this.cancelButton.listen("click", this.j9, this);
            this.L.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.D({
                B: "a",
                ez: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    "ytp-autonav-endscreen-upnext-button-rounded"
                ],
                N: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Putar video selanjutnya"
                },
                p9: "Putar Sekarang"
            });
            g.E(this, this.playButton);
            this.playButton.f9(this.D.element);
            this.playButton.listen("click", this.oO, this);
            this.L.createServerVe(this.playButton.element, this.playButton, !0);
            (k = this.L.getVideoData()) && EEJ(this, k);
            this.V = new g.K_(function() {
                Ff7(K)
            }, 500);
            g.E(this, this.V);
            this.Eg();
            this.C(f, "autonavvisibility", this.Eg);
            this.L.Z("web_autonav_color_transition") && (this.C(f, "autonavchange", this.NV), this.C(f, "onAutonavCoundownStarted", this.tL2))
        },
        bK = function(f) {
            var k = f.L.qz(!0, f.L.isFullscreen());
            g.ds(f.container.element, "ytp-autonav-endscreen-small-mode", f.Ey(k));
            g.ds(f.container.element, "ytp-autonav-endscreen-is-premium", !!f.suggestion && !!f.suggestion.yGw);
            g.ds(f.L.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !f.L.Y$());
            g.ds(f.L.getRootNode(), "countdown-running", f.v3());
            g.ds(f.container.element, "ytp-player-content", f.L.Y$());
            g.vr(f.overlay.element, {
                width: k.width + "px"
            });
            if (!f.v3()) {
                f.L.Y$() ? Pip(f, Math.round(DK5(f) / 1E3)) : Pip(f);
                k = !!f.suggestion && !!f.suggestion.Wz;
                var K = f.L.Y$() ||
                    !k;
                g.ds(f.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !K && k);
                g.ds(f.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", K && !k);
                f.D.T3(f.L.Y$());
                g.ds(f.element, "ytp-enable-w2w-color-transitions", QQr(f))
            }
        },
        Ff7 = function(f) {
            var k = DK5(f),
                K = Math,
                N = K.min;
            var v = f.Y ? Date.now() - f.Y : 0;
            K = N.call(K, v, k);
            Pip(f, Math.ceil((k - K) / 1E3));
            k - K <= 500 && f.v3() ? f.select(!0) : f.v3() && f.V.start()
        },
        DK5 = function(f) {
            if (f.L.isFullscreen()) {
                var k;
                f = (k = f.L.getVideoData()) == null ? void 0 : k.bN;
                return f === -1 || f === void 0 ? 8E3 : f
            }
            return f.L.mL() >= 0 ? f.L.mL() : g.Nm(f.L.U().experiments, "autoplay_time") || 1E4
        },
        EEJ = function(f, k) {
            k = k.getWatchNextResponse();
            var K, N;
            k = (K = AXh(k)) == null ? void 0 : (N = K.nextButton) == null ? void 0 : N.buttonRenderer;
            f.J = k == null ? void 0 : k.navigationEndpoint;
            K = k == null ? void 0 : k.trackingParams;
            f.playButton && K && f.L.setTrackingParams(f.playButton.element, K)
        },
        QQr = function(f) {
            var k;
            return !((k = f.L.getVideoData()) == null || !k.watchToWatchTransitionRenderer)
        },
        Pip = function(f, k) {
            k = k === void 0 ? -1 : k;
            f = f.G.hL("ytp-autonav-endscreen-upnext-header");
            g.XB(f);
            if (k >= 0) {
                k = String(k);
                var K = "Berikutnya dalam $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    N = "Berikutnya dalam $SECONDS".indexOf(K);
                if (N >= 0) {
                    f.appendChild(g.ZF("Berikutnya dalam $SECONDS".slice(0, N)));
                    var v = g.h$("span");
                    g.bE(v, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.Ll(v, k);
                    f.appendChild(v);
                    f.appendChild(g.ZF("Berikutnya dalam $SECONDS".slice(N + K.length)));
                    return
                }
            }
            g.Ll(f, "Berikutnya")
        },
        mT = function(f, k) {
            g.D.call(this, {
                B: "div",
                ez: ["html5-endscreen", "ytp-player-content", k || "base-endscreen"]
            });
            this.created = !1;
            this.player = f
        },
        nh = function(f) {
            g.D.call(this, {
                B: "div",
                ez: ["ytp-upnext", "ytp-player-content"],
                N: {
                    "aria-label": "{{aria_label}}"
                },
                S: [{
                    B: "div",
                    W: "ytp-cued-thumbnail-overlay-image",
                    N: {
                        style: "{{background}}"
                    }
                }, {
                    B: "span",
                    W: "ytp-upnext-top",
                    S: [{
                        B: "span",
                        W: "ytp-upnext-header",
                        p9: "Berikutnya"
                    }, {
                        B: "span",
                        W: "ytp-upnext-title",
                        p9: "{{title}}"
                    }, {
                        B: "span",
                        W: "ytp-upnext-author",
                        p9: "{{author}}"
                    }]
                }, {
                    B: "a",
                    W: "ytp-upnext-autoplay-icon",
                    N: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Putar video selanjutnya"
                    },
                    S: [{
                        B: "svg",
                        N: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        S: [{
                            B: "circle",
                            W: "ytp-svg-autoplay-circle",
                            N: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            B: "circle",
                            W: "ytp-svg-autoplay-ring",
                            N: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            B: "path",
                            W: "ytp-svg-fill",
                            N: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    B: "span",
                    W: "ytp-upnext-bottom",
                    S: [{
                        B: "span",
                        W: "ytp-upnext-cancel"
                    }, {
                        B: "span",
                        W: "ytp-upnext-paused",
                        p9: "Putar otomatis dijeda"
                    }]
                }]
            });
            this.api = f;
            this.cancelButton = null;
            this.J = this.hL("ytp-svg-autoplay-ring");
            this.Y = this.notification = this.G = this.suggestion = null;
            this.V = new g.K_(this.lq, 5E3, this);
            this.D = 0;
            var k = this.hL("ytp-upnext-cancel");
            this.cancelButton = new g.D({
                B: "button",
                ez: ["ytp-upnext-cancel-button", "ytp-button"],
                N: {
                    tabindex: "0",
                    "aria-label": "Batalkan pemutaran otomatis"
                },
                p9: "Batalkan"
            });
            g.E(this, this.cancelButton);
            this.cancelButton.listen("click", this.zy, this);
            this.cancelButton.f9(k);
            this.cancelButton &&
                this.api.createClientVe(this.cancelButton.element, this, 115129);
            g.E(this, this.V);
            this.api.createClientVe(this.element, this, 18788);
            k = this.hL("ytp-upnext-autoplay-icon");
            this.C(k, "click", this.u3);
            this.api.createClientVe(k, this, 115130);
            this.MC();
            this.C(f, "autonavvisibility", this.MC);
            this.C(f, "mdxnowautoplaying", this.Btx);
            this.C(f, "mdxautoplaycanceled", this.hE4);
            g.ds(this.element, "ytp-upnext-mobile", this.api.U().D)
        },
        Vfr = function(f, k) {
            if (k) return k;
            if (f.api.isFullscreen()) {
                var K;
                f = (K = f.api.getVideoData()) == null ? void 0 : K.bN;
                return f === -1 || f === void 0 ? 8E3 : f
            }
            return f.api.mL() >= 0 ? f.api.mL() : g.Nm(f.api.U().experiments, "autoplay_time") || 1E4
        },
        $K1 = function(f, k) {
            k = Vfr(f, k);
            var K = Math,
                N = K.min;
            var v = (0, g.hz)() - f.D;
            K = N.call(K, v, k);
            k = k === 0 ? 1 : Math.min(K / k, 1);
            f.J.setAttribute("stroke-dashoffset", "" + -211 * (k + 1));
            k >= 1 && f.v3() && f.api.getPresentingPlayerType() !== 3 ? f.select(!0) : f.v3() && f.G.start()
        },
        OD = function(f) {
            mT.call(this, f, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.D({
                B: "div",
                W: "ytp-suggestion-panel",
                S: [{
                    B: "div",
                    ez: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    p9: "Video lainnya"
                }]
            });
            this.X = new g.D({
                B: "div",
                W: "ytp-suggestions-container"
            });
            this.videos = [];
            this.Y = null;
            this.J = this.T = !1;
            this.D = new Sr(this.player);
            g.E(this, this.D);
            this.D.f9(this.element);
            f.getVideoData().xV ? this.G = this.D : (this.G = new nh(f), g.I1(this.player, this.G.element, 4), g.E(this, this.G));
            this.overlay = new g.D({
                B: "div",
                W: "ytp-autonav-overlay-cancelled-state"
            });
            g.E(this, this.overlay);
            this.overlay.f9(this.element);
            this.V = new g.to(this);
            g.E(this, this.V);
            g.E(this, this.table);
            this.table.f9(this.element);
            this.table.show();
            g.E(this, this.X);
            this.X.f9(this.table.element);
            this.hide()
        },
        xR = function(f) {
            var k = f.Y$();
            k !== f.J && (f.J = k, jQc(f.player), f.J ? (f.D !== f.G && f.D.hide(), f.table.hide()) : (f.D !== f.G && f.D.show(), f.table.show()))
        },
        IDi = function(f) {
            mT.call(this, f, "videowall-endscreen");
            var k = this;
            this.L = f;
            this.stills = [];
            this.Y = this.videoData = null;
            this.V = this.T = !1;
            this.X = null;
            g.n_(this.element, "modern-videowall-endscreen");
            this.D = new g.to(this);
            g.E(this, this.D);
            this.J = new g.K_(function() {
                g.n_(k.element, "ytp-show-tiles")
            }, 0);
            g.E(this, this.J);
            this.table = new g.bH({
                B: "div",
                W: "ytp-modern-endscreen-content"
            });
            g.E(this, this.table);
            this.table.f9(this.element);
            f.getVideoData().xV ? this.G = new Sr(f, !0) : this.G = new nh(f);
            g.E(this, this.G);
            g.I1(this.player, this.G.element, 4);
            f.createClientVe(this.element, this, 158789);
            this.hide()
        },
        gJ = function(f) {
            return g.i4(f.player) && f.Hy() && !f.Y
        },
        dJ = function(f) {
            var k = f.Y$();
            k !== f.T && (f.T = k, jQc(f.player))
        },
        i5i = function(f) {
            mT.call(this, f, "subscribecard-endscreen");
            this.G = new g.D({
                B: "div",
                W: "ytp-subscribe-card",
                S: [{
                    B: "img",
                    W: "ytp-author-image",
                    N: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    B: "div",
                    W: "ytp-subscribe-card-right",
                    S: [{
                        B: "div",
                        W: "ytp-author-name",
                        p9: "{{author}}"
                    }, {
                        B: "div",
                        W: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.E(this, this.G);
            this.G.f9(this.element);
            var k = f.getVideoData();
            this.subscribeButton = new g.iM("Subscribe", null, "Unsubscribe", null, !0, !1, k.hs, k.subscribed, "trailer-endscreen", null, f, !1);
            g.E(this, this.subscribeButton);
            this.subscribeButton.f9(this.G.hL("html5-subscribe-button-container"));
            this.C(f, "videodatachange", this.Tk);
            this.Tk();
            this.hide()
        },
        tV = function(f) {
            var k = f.U(),
                K = g.OV || g.PQ ? {
                    style: "will-change: opacity"
                } : void 0,
                N = k.V,
                v = ["ytp-videowall-still"];
            k.D && v.push("ytp-videowall-show-text");
            g.D.call(this, {
                B: "a",
                ez: v,
                N: {
                    href: "{{url}}",
                    target: N ? k.Fj : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                S: [{
                    B: "div",
                    W: "ytp-videowall-still-image",
                    N: {
                        style: "{{background}}"
                    }
                }, {
                    B: "span",
                    W: "ytp-videowall-still-info",
                    N: {
                        "aria-hidden": "true"
                    },
                    S: [{
                        B: "span",
                        W: "ytp-videowall-still-info-bg",
                        S: [{
                            B: "span",
                            W: "ytp-videowall-still-info-content",
                            N: K,
                            S: [{
                                    B: "span",
                                    W: "ytp-videowall-still-info-title",
                                    p9: "{{title}}"
                                },
                                {
                                    B: "span",
                                    W: "ytp-videowall-still-info-author",
                                    p9: "{{author_and_views}}"
                                }, {
                                    B: "span",
                                    W: "ytp-videowall-still-info-live",
                                    p9: "Live"
                                }, {
                                    B: "span",
                                    W: "ytp-videowall-still-info-duration",
                                    p9: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    B: "span",
                    ez: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    N: {
                        "aria-hidden": "true"
                    },
                    S: [{
                        B: "span",
                        W: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        B: "span",
                        W: "ytp-videowall-still-listlabel-length",
                        S: [" (", {
                            B: "span",
                            p9: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    B: "span",
                    ez: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    N: {
                        "aria-hidden": "true"
                    },
                    S: [{
                        B: "span",
                        W: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        B: "span",
                        W: "ytp-videowall-still-listlabel-length",
                        p9: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.D = N;
            this.api = f;
            this.G = new g.to(this);
            g.E(this, this.G);
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress);
            this.G.C(f, "videodatachange", this.onVideoDataChange);
            f.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        rJ = function(f) {
            mT.call(this, f, "videowall-endscreen");
            var k = this;
            this.L = f;
            this.Y = 0;
            this.stills = [];
            this.V = this.videoData = null;
            this.J = this.X = !1;
            this.j = null;
            this.D = new g.to(this);
            g.E(this, this.D);
            this.T = new g.K_(function() {
                g.n_(k.element, "ytp-show-tiles")
            }, 0);
            g.E(this, this.T);
            var K = new g.D({
                B: "button",
                ez: ["ytp-button", "ytp-endscreen-previous"],
                N: {
                    "aria-label": "Sebelumnya"
                },
                S: [g.wT()]
            });
            g.E(this, K);
            K.f9(this.element);
            K.listen("click", this.Ig, this);
            this.table = new g.bH({
                B: "div",
                W: "ytp-endscreen-content"
            });
            g.E(this, this.table);
            this.table.f9(this.element);
            K = new g.D({
                B: "button",
                ez: ["ytp-button", "ytp-endscreen-next"],
                N: {
                    "aria-label": "Berikutnya"
                },
                S: [g.G8()]
            });
            g.E(this, K);
            K.f9(this.element);
            K.listen("click", this.wR, this);
            f.getVideoData().xV ? this.G = new Sr(f, !0) :
                this.G = new nh(f);
            g.E(this, this.G);
            g.I1(this.player, this.G.element, 4);
            f.createClientVe(this.element, this, 158789);
            this.hide()
        },
        wJ = function(f) {
            return g.i4(f.player) && f.Hy() && !f.V
        },
        Gk = function(f) {
            var k = f.Y$();
            k !== f.X && (f.X = k, jQc(f.player))
        },
        zT5 = function(f, k) {
            g.D.call(this, {
                B: "button",
                ez: ["ytp-watch-on-youtube-button", "ytp-button"],
                p9: "{{content}}"
            });
            this.L = f;
            this.buttonType = this.buttonType = k;
            this.NR();
            this.buttonType === 2 && g.n_(this.element, "ytp-continue-watching-button");
            this.listen("click", this.onClick);
            this.listen("videodatachange", this.NR);
            this.T3(!0)
        },
        y4 = function(f) {
            mT.call(this, f, "watch-again-on-youtube-endscreen");
            this.watchButton = new zT5(f, 1);
            g.E(this, this.watchButton);
            this.watchButton.f9(this.element);
            g.RgS(f) && (this.G = new g.im(f), g.E(this, this.G), this.D = new g.D({
                B: "div",
                ez: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                N: {
                    tabIndex: "-1"
                },
                S: [this.G]
            }), g.E(this, this.D), this.G.f9(this.D.element), this.D.f9(this.element));
            f.createClientVe(this.element, this, 156914);
            this.hide()
        },
        KQ1 = function(f) {
            g.dK.call(this, f);
            var k = this;
            this.endScreen = null;
            this.G = this.D = this.Y = !1;
            this.listeners = new g.to(this);
            g.E(this, this.listeners);
            var K = f.U();
            f.isEmbedsShortsMode() ? this.endScreen = new y4(f) : Tx3(f) ? (this.Y = !0, fP4(this), this.G ? this.endScreen = new OD(f) : K.Z("delhi_modern_endscreen") ? this.endScreen = new IDi(f) : this.endScreen = new rJ(f)) : K.N_ ? this.endScreen = new i5i(f) : this.endScreen = new mT(f);
            g.E(this, this.endScreen);
            g.I1(f, this.endScreen.element, 4);
            krJ(this);
            this.listeners.C(f, "videodatachange", this.onVideoDataChange, this);
            this.listeners.C(f, g.$B("endscreen"), function(N) {
                k.onCueRangeEnter(N)
            });
            this.listeners.C(f, g.Ib("endscreen"), function(N) {
                k.onCueRangeExit(N)
            })
        },
        fP4 = function(f) {
            var k = f.player.getVideoData();
            if (!k || f.G === k.Ud && f.D === k.xV) return !1;
            f.G = k.Ud;
            f.D = k.xV;
            return !0
        },
        Tx3 = function(f) {
            f = f.U();
            return f.F7 && !f.N_ && !f.disableOrganicUi
        },
        krJ = function(f) {
            f.player.fS("endscreen");
            var k = f.player.getVideoData();
            k = new g.QR(Math.max((k.lengthSeconds - 10) * 1E3, 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var K = new g.QR(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            f.player.yK([k, K])
        };
    g.Ak.prototype.mL = g.jS(8, function() {
        return this.app.mL()
    });
    g.gf.prototype.mL = g.jS(7, function() {
        return this.getVideoData().Ao
    });
    g.Ly.prototype.SF = g.jS(6, function(f) {
        this.B3().SF(f)
    });
    g.PH.prototype.SF = g.jS(5, function(f) {
        this.dM !== f && (this.dM = f, this.QT())
    });
    g.w(UD, g.D);
    UD.prototype.select = function() {
        this.L.tC(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.y_ || void 0) && this.L.logClick(this.element)
    };
    UD.prototype.onClick = function(f) {
        g.y6(f, this.L, this.G, this.suggestion.sessionData || void 0) && this.select()
    };
    UD.prototype.onKeyPress = function(f) {
        switch (f.keyCode) {
            case 13:
            case 32:
                f.defaultPrevented || (this.select(), f.preventDefault())
        }
    };
    g.w(Sr, g.D);
    g.t = Sr.prototype;
    g.t.zs = function(f) {
        this.suggestion !== f && (this.suggestion = f, g.NO(this.G, f), this.playButton.updateValue("url", this.suggestion.nU()), bK(this))
    };
    g.t.v3 = function() {
        return this.Y > 0
    };
    g.t.SA = function() {
        this.v3() || (this.Y = Date.now(), Ff7(this), pf7(this.L, DK5(this)), g.ds(this.L.getRootNode(), "countdown-running", this.v3()))
    };
    g.t.mC = function() {
        this.bT();
        Ff7(this);
        var f = this.G.hL("ytp-autonav-endscreen-upnext-header");
        f && g.Ll(f, "Berikutnya")
    };
    g.t.bT = function() {
        this.v3() && (this.V.stop(), this.Y = 0)
    };
    g.t.select = function(f) {
        this.L.nextVideo(!1, f === void 0 ? !1 : f);
        this.bT()
    };
    g.t.oO = function(f) {
        g.y6(f, this.L) && (f.currentTarget === this.playButton.element ? this.L.logClick(this.playButton.element) : f.currentTarget === this.G.hL("ytp-autonav-endscreen-link-container") && (f = this.G.hL("ytp-autonav-endscreen-link-container"), this.L.logVisibility(f, !0), this.L.logClick(f)), this.J ? (this.L.zk("innertubeCommand", this.J), this.bT()) : this.select())
    };
    g.t.j9 = function() {
        this.L.logClick(this.cancelButton.element);
        g.F5(this.L, !0);
        this.cancelCommand && this.L.zk("innertubeCommand", this.cancelCommand)
    };
    g.t.onVideoDataChange = function(f, k) {
        EEJ(this, k);
        f = k.getWatchNextResponse();
        var K, N;
        f = (K = AXh(f)) == null ? void 0 : (N = K.cancelButton) == null ? void 0 : N.buttonRenderer;
        this.cancelCommand = f == null ? void 0 : f.command
    };
    g.t.tL2 = function(f) {
        if (QQr(this)) {
            var k = this.L.getVideoData().watchToWatchTransitionRenderer,
                K = k == null ? void 0 : k.fromColorPaletteDark;
            k = k == null ? void 0 : k.toColorPaletteDark;
            if (K && k) {
                var N = this.element;
                N.style.setProperty("--w2w-start-background-color", g.pG(K.surgeColor));
                N.style.setProperty("--w2w-start-primary-text-color", g.pG(K.primaryTitleColor));
                N.style.setProperty("--w2w-start-secondary-text-color", g.pG(K.secondaryTitleColor));
                N.style.setProperty("--w2w-end-background-color", g.pG(k.surgeColor));
                N.style.setProperty("--w2w-end-primary-text-color", g.pG(k.primaryTitleColor));
                N.style.setProperty("--w2w-end-secondary-text-color", g.pG(k.secondaryTitleColor));
                N.style.setProperty("--w2w-animation-duration", f + "ms")
            }
            g.ds(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.t.NV = function(f) {
        this.L.Z("web_autonav_color_transition") && f !== 2 && g.ds(this.element, "ytp-w2w-animate", !1)
    };
    g.t.Eg = function() {
        var f = this.L.Y$();
        this.T && this.pN !== f && this.T3(f);
        bK(this);
        this.L.logVisibility(this.container.element, f);
        this.L.logVisibility(this.cancelButton.element, f);
        this.L.logVisibility(this.G.hL("ytp-autonav-endscreen-link-container"), f);
        this.L.logVisibility(this.playButton.element, f)
    };
    g.t.Ey = function(f) {
        return f.width < 400 || f.height < 459
    };
    g.w(mT, g.D);
    g.t = mT.prototype;
    g.t.create = function() {
        this.created = !0
    };
    g.t.destroy = function() {
        this.created = !1
    };
    g.t.Hy = function() {
        return !1
    };
    g.t.Y$ = function() {
        return !1
    };
    g.t.CE = function() {
        return !1
    };
    g.w(nh, g.D);
    g.t = nh.prototype;
    g.t.lq = function() {
        this.notification && (this.V.stop(), this.aQ(this.Y), this.Y = null, this.notification.close(), this.notification = null)
    };
    g.t.zs = function(f) {
        this.suggestion = f;
        g.NO(this, f, "hqdefault.jpg")
    };
    g.t.MC = function() {
        this.T3(this.api.Y$());
        this.api.logVisibility(this.element, this.api.Y$());
        this.api.logVisibility(this.hL("ytp-upnext-autoplay-icon"), this.api.Y$());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.Y$())
    };
    g.t.REL = function() {
        window.focus();
        this.lq()
    };
    g.t.SA = function(f) {
        var k = this;
        this.v3() || (g.Hq("a11y-announce", "Berikutnya " + this.suggestion.title), this.D = (0, g.hz)(), this.G = new g.K_(function() {
            $K1(k, f)
        }, 25), $K1(this, f), pf7(this.api, Vfr(this, f)));
        g.xq(this.element, "ytp-upnext-autoplay-paused")
    };
    g.t.hide = function() {
        g.D.prototype.hide.call(this)
    };
    g.t.v3 = function() {
        return !!this.G
    };
    g.t.mC = function() {
        this.bT();
        this.D = (0, g.hz)();
        $K1(this);
        g.n_(this.element, "ytp-upnext-autoplay-paused")
    };
    g.t.bT = function() {
        this.v3() && (this.G.dispose(), this.G = null)
    };
    g.t.select = function(f) {
        f = f === void 0 ? !1 : f;
        if (this.api.U().Z("autonav_notifications") && f && window.Notification && typeof document.hasFocus === "function") {
            var k = Notification.permission;
            k === "default" ? Notification.requestPermission() : k !== "granted" || document.hasFocus() || (this.lq(), this.notification = new Notification("Berikutnya", {
                body: this.suggestion.title,
                icon: this.suggestion.Av()
            }), this.Y = this.C(this.notification, "click", this.REL), this.V.start())
        }
        this.bT();
        this.api.nextVideo(!1, f)
    };
    g.t.u3 = function(f) {
        !g.en(this.cancelButton.element, f.target) && g.y6(f, this.api) && (this.api.Y$() && this.api.logClick(this.hL("ytp-upnext-autoplay-icon")), this.select())
    };
    g.t.zy = function() {
        this.api.Y$() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.F5(this.api, !0)
    };
    g.t.Btx = function(f) {
        this.api.getPresentingPlayerType();
        this.show();
        this.SA(f)
    };
    g.t.hE4 = function() {
        this.api.getPresentingPlayerType();
        this.bT();
        this.hide()
    };
    g.t.VD = function() {
        this.bT();
        this.lq();
        g.D.prototype.VD.call(this)
    };
    g.w(OD, mT);
    g.t = OD.prototype;
    g.t.create = function() {
        mT.prototype.create.call(this);
        this.V.C(this.player, "appresize", this.je);
        this.V.C(this.player, "onVideoAreaChange", this.je);
        this.V.C(this.player, "videodatachange", this.onVideoDataChange);
        this.V.C(this.player, "autonavchange", this.Te);
        this.V.C(this.player, "onAutonavCancelled", this.PJ);
        this.onVideoDataChange()
    };
    g.t.show = function() {
        mT.prototype.show.call(this);
        (this.T || this.Y && this.Y !== this.videoData.clientPlaybackNonce) && g.F5(this.player, !1);
        g.i4(this.player) && this.Hy() && !this.Y ? (xR(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 || sQ4(this.player.uE()) && this.player.Z("web_player_pip_logging_fix") ? this.G.select(!0) : this.G.SA() : this.videoData.autonavState === 3 && this.G.mC()) : (g.F5(this.player, !0), xR(this));
        this.je()
    };
    g.t.hide = function() {
        mT.prototype.hide.call(this);
        this.G.mC();
        xR(this)
    };
    g.t.je = function() {
        var f = this.player.qz(!0, this.player.isFullscreen());
        xR(this);
        bK(this.D);
        g.ds(this.element, "ytp-autonav-cancelled-small-mode", this.Ey(f));
        g.ds(this.element, "ytp-autonav-cancelled-tiny-mode", this.uF(f));
        g.ds(this.element, "ytp-autonav-cancelled-mini-mode", f.width <= 400 || f.height <= 360);
        this.overlay && g.vr(this.overlay.element, {
            width: f.width + "px"
        });
        if (!this.J)
            for (f = 0; f < this.videos.length; f++) g.ds(this.videos[f].element, "ytp-suggestion-card-with-margin", f % 2 === 1)
    };
    g.t.onVideoDataChange = function() {
        var f = this.player.getVideoData();
        if (this.videoData !== f && f) {
            this.videoData = f;
            f = this.videoData.suggestions;
            var k = g.GU(this.videoData);
            k && (this.G.zs(k), this.G !== this.D && this.D.zs(k));
            if (f && f.length)
                for (k = 0; k < NRp.length; ++k) {
                    var K = NRp[k];
                    if (f && f[K]) {
                        this.videos[k] = new UD(this.player);
                        var N = this.videos[k];
                        K = f[K];
                        N.suggestion !== K && (N.suggestion = K, g.NO(N, K));
                        g.E(this, this.videos[k]);
                        this.videos[k].f9(this.X.element)
                    }
                }
            this.je()
        }
    };
    g.t.Te = function(f) {
        f === 1 ? (this.T = !1, this.Y = this.videoData.clientPlaybackNonce, this.G.bT(), this.pN && this.je()) : (this.T = !0, this.Y$() && (f === 2 ? this.G.SA() : f === 3 && this.G.mC()))
    };
    g.t.PJ = function(f) {
        f ? this.Te(1) : (this.Y = null, this.T = !1)
    };
    g.t.Hy = function() {
        return this.videoData.autonavState !== 1
    };
    g.t.Ey = function(f) {
        return (f.width < 910 || f.height < 459) && !this.uF(f) && !(f.width <= 400 || f.height <= 360)
    };
    g.t.uF = function(f) {
        return f.width < 800 && !(f.width <= 400 || f.height <= 360)
    };
    g.t.Y$ = function() {
        return this.pN && g.i4(this.player) && this.Hy() && !this.Y
    };
    var NRp = [1, 3, 2, 4];
    g.w(IDi, mT);
    g.t = IDi.prototype;
    g.t.create = function() {
        mT.prototype.create.call(this);
        var f = this.player.getVideoData();
        f && (this.videoData = f);
        this.ej();
        this.D.C(this.player, "appresize", this.ej);
        this.D.C(this.player, "onVideoAreaChange", this.ej);
        this.D.C(this.player, "videodatachange", this.onVideoDataChange);
        this.D.C(this.player, "autonavchange", this.ou);
        this.D.C(this.player, "onAutonavCancelled", this.S9);
        f = this.videoData.autonavState;
        f !== this.X && this.ou(f);
        this.D.C(this.element, "transitionend", this.y3)
    };
    g.t.destroy = function() {
        g.pH(this.D);
        g.y2(this.stills);
        this.stills = [];
        mT.prototype.destroy.call(this);
        g.xq(this.element, "ytp-show-tiles");
        this.J.stop();
        this.X = this.videoData.autonavState
    };
    g.t.Hy = function() {
        return this.videoData.autonavState !== 1
    };
    g.t.show = function() {
        var f = this.pN;
        mT.prototype.show.call(this);
        g.xq(this.element, "ytp-show-tiles");
        this.player.U().D ? g.vI(this.J) : this.J.start();
        (this.V || this.Y && this.Y !== this.videoData.clientPlaybackNonce) && g.F5(this.player, !1);
        gJ(this) ? (dJ(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 || sQ4(this.player.uE()) && this.player.Z("web_player_pip_logging_fix") ? this.G.select(!0) : this.G.SA() : this.videoData.autonavState === 3 && this.G.mC()) : (g.F5(this.player, !0), dJ(this));
        f !== this.pN &&
            this.player.logVisibility(this.element, !0)
    };
    g.t.hide = function() {
        var f = this.pN;
        mT.prototype.hide.call(this);
        this.G.mC();
        dJ(this);
        f !== this.pN && this.player.logVisibility(this.element, !1)
    };
    g.t.y3 = function(f) {
        f.target === this.element && this.ej()
    };
    g.t.ej = function() {
        var f, k, K, N;
        var v = ((f = this.videoData) == null ? 0 : (k = f.suggestions) == null ? 0 : k.length) ? (K = this.videoData) == null ? void 0 : K.suggestions : [(N = this.videoData) == null ? void 0 : g.GU(N)];
        if (v.length) {
            k = this.L.qz(!0, this.L.isFullscreen());
            f = Math.floor((k.width - 64 + 16) / (g.v5(k.width * .27, 250, 450) + 16));
            k = Math.min(3, Math.floor((k.height - 64) / ((k.width - 64 - (f - 1) * 16) / f * .5625 + 70)));
            g.gs(this.element, ["ytp-modern-endscreen-limit-rows-1", "ytp-modern-endscreen-limit-rows-2", "ytp-modern-endscreen-limit-rows-3"]);
            g.n_(this.element, "ytp-modern-endscreen-limit-rows-" + k);
            g.ds(this.element, "ytp-modern-endscreen-single-item", f === 1);
            g.ds(this.element, "ytp-modern-endscreen-row-0", k === 0);
            f = this.table.element;
            f.ariaLive = "polite";
            this.G.zs(g.GU(this.videoData));
            this.G instanceof Sr && bK(this.G);
            g.ds(this.element, "ytp-endscreen-takeover", gJ(this));
            dJ(this);
            k = 0;
            f.ariaBusy = "true";
            K = v.length;
            for (N = 0; N < K; N++) {
                var M = N % K,
                    H = this.stills[N];
                H || (H = new g.vH(this.player), this.stills[N] = H, f.appendChild(H.element));
                g.FER(H, v[M]);
                k++
            }
            this.stills.length =
                k
        }
    };
    g.t.onVideoDataChange = function() {
        var f = this.player.getVideoData({
            playerType: 1
        });
        this.videoData !== f && (f != null && g.GU(f) ? (this.videoData = f, this.ej()) : this.player.Dw("missg", {
            vid: (f == null ? void 0 : f.videoId) || "",
            cpn: (f == null ? void 0 : f.clientPlaybackNonce) || ""
        }))
    };
    g.t.CE = function() {
        return this.G.v3()
    };
    g.t.ou = function(f) {
        f === 1 ? (this.V = !1, this.Y = this.videoData.clientPlaybackNonce, this.G.bT(), this.pN && this.ej()) : (this.V = !0, this.pN && gJ(this) && (f === 2 ? this.G.SA() : f === 3 && this.G.mC()))
    };
    g.t.S9 = function(f) {
        if (f) {
            for (f = 0; f < this.stills.length; f++) this.L.logVisibility(this.stills[f].element, !0);
            this.ou(1)
        } else this.Y = null, this.V = !1;
        this.ej()
    };
    g.t.Y$ = function() {
        return this.pN && gJ(this)
    };
    g.w(i5i, mT);
    i5i.prototype.Tk = function() {
        var f = this.player.getVideoData();
        this.G.update({
            profilePicture: f.profilePicture,
            author: f.author
        });
        this.subscribeButton.channelId = f.hs;
        var k = this.subscribeButton;
        f.subscribed ? k.G() : k.D()
    };
    g.w(tV, g.D);
    tV.prototype.select = function() {
        this.api.tC(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.y_ || void 0) && this.api.logClick(this.element)
    };
    tV.prototype.onClick = function(f) {
        if (g.QE(this.api.U()) && this.api.Z("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var k = this.suggestion.nU(),
                K = {};
            g.Qk(this.api, K);
            k = g.X_(k, K);
            g.WY(k, this.api, f)
        } else g.y6(f, this.api, this.D, this.suggestion.sessionData || void 0) && this.select()
    };
    tV.prototype.onKeyPress = function(f) {
        switch (f.keyCode) {
            case 13:
            case 32:
                f.defaultPrevented || (this.select(), f.preventDefault())
        }
    };
    tV.prototype.onVideoDataChange = function() {
        var f = this.api.getVideoData(),
            k = this.api.U();
        this.D = f.Ps ? !1 : k.V
    };
    g.w(rJ, mT);
    g.t = rJ.prototype;
    g.t.create = function() {
        mT.prototype.create.call(this);
        var f = this.player.getVideoData();
        f && (this.videoData = f);
        this.Ev();
        this.D.C(this.player, "appresize", this.Ev);
        this.D.C(this.player, "onVideoAreaChange", this.Ev);
        this.D.C(this.player, "videodatachange", this.onVideoDataChange);
        this.D.C(this.player, "autonavchange", this.M6);
        this.D.C(this.player, "onAutonavCancelled", this.Kf);
        f = this.videoData.autonavState;
        f !== this.j && this.M6(f);
        this.D.C(this.element, "transitionend", this.vJ)
    };
    g.t.destroy = function() {
        g.pH(this.D);
        g.y2(this.stills);
        this.stills = [];
        mT.prototype.destroy.call(this);
        g.xq(this.element, "ytp-show-tiles");
        this.T.stop();
        this.j = this.videoData.autonavState
    };
    g.t.Hy = function() {
        return this.videoData.autonavState !== 1
    };
    g.t.show = function() {
        var f = this.pN;
        mT.prototype.show.call(this);
        g.xq(this.element, "ytp-show-tiles");
        this.player.U().D ? g.vI(this.T) : this.T.start();
        (this.J || this.V && this.V !== this.videoData.clientPlaybackNonce) && g.F5(this.player, !1);
        wJ(this) ? (Gk(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 || sQ4(this.player.uE()) && this.player.Z("web_player_pip_logging_fix") ? this.G.select(!0) : this.G.SA() : this.videoData.autonavState === 3 && this.G.mC()) : (g.F5(this.player, !0), Gk(this));
        f !== this.pN &&
            this.player.logVisibility(this.element, !0)
    };
    g.t.hide = function() {
        var f = this.pN;
        mT.prototype.hide.call(this);
        this.G.mC();
        Gk(this);
        f !== this.pN && this.player.logVisibility(this.element, !1)
    };
    g.t.vJ = function(f) {
        f.target === this.element && this.Ev()
    };
    g.t.Ev = function() {
        var f, k, K, N;
        var v = ((f = this.videoData) == null ? 0 : (k = f.suggestions) == null ? 0 : k.length) ? (K = this.videoData) == null ? void 0 : K.suggestions : [(N = this.videoData) == null ? void 0 : g.GU(N)];
        if (v.length) {
            g.n_(this.element, "ytp-endscreen-paginate");
            var M = this.L.qz(!0, this.L.isFullscreen());
            if (f = g.hk(this.L)) f = f.G1() ? 48 : 32, M.width -= f * 2;
            var H = M.width / M.height;
            N = 96 / 54;
            k = f = 2;
            var U = Math.max(M.width / 96, 2),
                S = Math.max(M.height / 54, 2);
            K = v.length;
            var b = K * 4;
            for (b -= 4; b > 0 && (f < U || k < S);) {
                var m = f / 2,
                    n = k / 2,
                    x = f <= U - 2 && b >=
                    n * 4,
                    O = k <= S - 2 && b >= m * 4;
                if ((m + 1) / n * N / H > H / (m / (n + 1) * N) && O) b -= m * 4, k += 2;
                else if (x) b -= n * 4, f += 2;
                else if (O) b -= m * 4, k += 2;
                else break
            }
            N = !1;
            b >= 12 && K * 4 - b <= 6 && (k >= 4 || f >= 4) && (N = !0);
            b = f * 96;
            U = k * 54;
            H = b / U < H ? M.height / U : M.width / b;
            H = Math.min(H, 2);
            b = Math.floor(Math.min(M.width, b * H));
            U = Math.floor(Math.min(M.height, U * H));
            M = this.table.element;
            M.ariaLive = "polite";
            g.gM(M, b, U);
            g.vr(M, {
                marginLeft: b / -2 + "px",
                marginTop: U / -2 + "px"
            });
            this.G.zs(g.GU(this.videoData));
            this.G instanceof Sr && bK(this.G);
            g.ds(this.element, "ytp-endscreen-takeover",
                wJ(this));
            Gk(this);
            b += 4;
            U += 4;
            H = 0;
            M.ariaBusy = "true";
            for (S = 0; S < f; S++)
                for (m = 0; m < k; m++)
                    if (n = H, O = 0, N && S >= f - 2 && m >= k - 2 ? O = 1 : m % 2 === 0 && S % 2 === 0 && (m < 2 && S < 2 ? m === 0 && S === 0 && (O = 2) : O = 2), n = g.MD(n + this.Y, K), O !== 0) {
                        x = this.stills[H];
                        x || (x = new tV(this.player), this.stills[H] = x, M.appendChild(x.element));
                        var d = Math.floor(U * m / k),
                            G = Math.floor(b * S / f),
                            W = Math.floor(U * (m + O) / k) - d - 4,
                            J = Math.floor(b * (S + O) / f) - G - 4;
                        g.mk(x.element, G, d);
                        g.gM(x.element, J, W);
                        g.vr(x.element, "transitionDelay", (m + S) / 20 + "s");
                        g.ds(x.element, "ytp-videowall-still-mini",
                            O === 1);
                        g.ds(x.element, "ytp-videowall-still-large", O > 2);
                        O = Math.max(J, W);
                        g.ds(x.element, "ytp-videowall-still-round-large", O >= 256);
                        g.ds(x.element, "ytp-videowall-still-round-medium", O > 96 && O < 256);
                        g.ds(x.element, "ytp-videowall-still-round-small", O <= 96);
                        n = v[n];
                        x.suggestion !== n && (x.suggestion = n, O = x.api.U(), d = g.md(x.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", g.NO(x, n, d), g.QE(O) && !x.api.Z("web_player_log_click_before_generating_ve_conversion_params") && (O = n.nU(), d = {}, g.Y$(x.api, "addEmbedsConversionTrackingParams", [d]), O = g.X_(O, d), x.updateValue("url", O)), (n = (n = n.sessionData) && n.itct) && x.api.setTrackingParams(x.element, n));
                        H++
                    }
            M.ariaBusy = "false";
            g.ds(this.element, "ytp-endscreen-paginate", H < K);
            for (v = this.stills.length - 1; v >= H; v--) f = this.stills[v], g.ao(f.element), g.G4(f);
            this.stills.length = H
        }
    };
    g.t.onVideoDataChange = function() {
        var f = this.player.getVideoData({
            playerType: 1
        });
        this.videoData !== f && (f != null && g.GU(f) ? (this.Y = 0, this.videoData = f, this.Ev()) : this.player.Dw("missg", {
            vid: (f == null ? void 0 : f.videoId) || "",
            cpn: (f == null ? void 0 : f.clientPlaybackNonce) || ""
        }))
    };
    g.t.wR = function() {
        this.Y += this.stills.length;
        this.Ev()
    };
    g.t.Ig = function() {
        this.Y -= this.stills.length;
        this.Ev()
    };
    g.t.CE = function() {
        return this.G.v3()
    };
    g.t.M6 = function(f) {
        f === 1 ? (this.J = !1, this.V = this.videoData.clientPlaybackNonce, this.G.bT(), this.pN && this.Ev()) : (this.J = !0, this.pN && wJ(this) && (f === 2 ? this.G.SA() : f === 3 && this.G.mC()))
    };
    g.t.Kf = function(f) {
        if (f) {
            for (f = 0; f < this.stills.length; f++) this.L.logVisibility(this.stills[f].element, !0);
            this.M6(1)
        } else this.V = null, this.J = !1;
        this.Ev()
    };
    g.t.Y$ = function() {
        return this.pN && wJ(this)
    };
    g.w(zT5, g.D);
    g.t = zT5.prototype;
    g.t.NR = function() {
        switch (this.buttonType) {
            case 1:
                var f = "Tonton lagi di YouTube";
                var k = 156915;
                break;
            case 2:
                f = "Lanjutkan menonton di YouTube";
                k = 156942;
                break;
            default:
                f = "Lanjutkan menonton di YouTube", k = 156942
        }
        this.update({
            content: f
        });
        this.L.hasVe(this.element) && this.L.destroyVe(this.element);
        this.L.createClientVe(this.element, this, k)
    };
    g.t.onClick = function(f) {
        this.L.Z("web_player_log_click_before_generating_ve_conversion_params") && this.L.logClick(this.element);
        g.WY(this.getVideoUrl(), this.L, f);
        this.L.Z("web_player_log_click_before_generating_ve_conversion_params") || this.L.logClick(this.element)
    };
    g.t.getVideoUrl = function() {
        var f = !0;
        switch (this.buttonType) {
            case 1:
                f = !0;
                break;
            case 2:
                f = !1
        }
        f = this.L.getVideoUrl(f, !1, !1, !0);
        var k = this.L.U();
        if (g.QE(k)) {
            var K = {};
            g.QE(k) && g.Y$(this.L, "addEmbedsConversionTrackingParams", [K]);
            f = g.X_(f, K)
        }
        return f
    };
    g.t.logVisibility = function() {
        this.L.logVisibility(this.element, this.pN && this.Fj)
    };
    g.t.show = function() {
        g.D.prototype.show.call(this);
        this.logVisibility()
    };
    g.t.hide = function() {
        g.D.prototype.hide.call(this);
        this.logVisibility()
    };
    g.t.vO = function(f) {
        g.D.prototype.vO.call(this, f);
        this.logVisibility()
    };
    g.w(y4, mT);
    y4.prototype.hasSuggestions = function() {
        var f;
        return (f = this.G) == null ? void 0 : f.hasSuggestions()
    };
    y4.prototype.show = function() {
        if (this.player.getPlayerState() !== 3) {
            mT.prototype.show.call(this);
            var f = this.D;
            if (f) {
                var k = this.G.hasSuggestions();
                g.ds(this.element, "ytp-shorts-branded-ui", k);
                k ? f.show() : f.hide()
            }
            var K;
            (K = g.hk(this.player)) == null || K.SF(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.vO(!0)
        }
    };
    y4.prototype.hide = function() {
        mT.prototype.hide.call(this);
        var f;
        (f = g.hk(this.player)) == null || f.SF(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.vO(!1)
    };
    g.w(KQ1, g.dK);
    g.t = KQ1.prototype;
    g.t.DK = function() {
        var f = this.player.getVideoData(),
            k = f.mutedAutoplay && (f.limitedPlaybackDurationInSeconds > 0 || f.endSeconds > 0 || f.mutedAutoplayDurationMode !== 2);
        if (this.player.isEmbedsShortsMode() && !k) return !0;
        var K;
        var N = !!((f == null ? 0 : g.GU(f)) || (f == null ? 0 : (K = f.suggestions) == null ? 0 : K.length));
        N = !Tx3(this.player) || N;
        f = f.wI;
        K = this.player.dV();
        return N && !f && !K && !k
    };
    g.t.Y$ = function() {
        return this.endScreen.Y$()
    };
    g.t.gnH = function() {
        return this.Y$() ? this.endScreen.CE() : !1
    };
    g.t.VD = function() {
        this.player.fS("endscreen");
        g.dK.prototype.VD.call(this)
    };
    g.t.load = function() {
        var f = this.player.getVideoData();
        var k = f.transitionEndpointAtEndOfStream;
        if (k && k.videoId) {
            var K = this.player.Ad().pX.get("heartbeat"),
                N = g.GU(f);
            !N || k.videoId !== N.videoId || f.MG ? (this.player.tC(k.videoId, void 0, void 0, !0, !0, k), K && K.mY("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), f = !0) : f = !1
        } else f = !1;
        f || (g.dK.prototype.load.call(this), this.endScreen.show())
    };
    g.t.unload = function() {
        g.dK.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.t.onCueRangeEnter = function(f) {
        this.DK() && (this.endScreen.created || this.endScreen.create(), f.getId() === "load" && this.load())
    };
    g.t.onCueRangeExit = function(f) {
        f.getId() === "load" && this.loaded && this.unload()
    };
    g.t.onVideoDataChange = function() {
        krJ(this);
        this.Y && fP4(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.G ? this.endScreen = new OD(this.player) : this.endScreen = new rJ(this.player), g.E(this, this.endScreen), g.I1(this.player, this.endScreen.element, 4))
    };
    g.gK("endscreen", KQ1);
})(_yt_player);