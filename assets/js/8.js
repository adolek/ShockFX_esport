! function(e, n) {
    e.wp = e.wp || {}, e.wp.mediaelement = new function() {
        var e = {};
        return {
            initialize: function() {
                "undefined" != typeof _wpmejsSettings && (e = n.extend(!0, {}, _wpmejsSettings)), e.classPrefix = "mejs-", e.success = e.success || function(e) {
                    var n, t;
                    e.rendererName && -1 !== e.rendererName.indexOf("flash") && (n = e.attributes.autoplay && "false" !== e.attributes.autoplay, t = e.attributes.loop && "false" !== e.attributes.loop, n && e.addEventListener("canplay", function() {
                        e.play()
                    }, !1), t && e.addEventListener("ended", function() {
                        e.play()
                    }, !1))
                }, e.customError = function(e, n) {
                    if (-1 !== e.rendererName.indexOf("flash") || -1 !== e.rendererName.indexOf("flv")) return '<a href="' + n.src + '">' + mejsL10n.strings["mejs.download-file"] + "</a>"
                }, n(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function() {
                    return !n(this).parent().hasClass("mejs-mediaelement")
                }).mediaelementplayer(e)
            }
        }
    }, n(e.wp.mediaelement.initialize)
}(window, jQuery);;
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            var check = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function() {
                t.appeared = true;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0)
                while (length--)($.fn.appear.checks[length])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);;;
window.Modernizr = function(a, b, c) {
        function C(a) {
            j.cssText = a
        }

        function D(a, b) {
            return C(n.join(a + ";") + (b || ""))
        }

        function E(a, b) {
            return typeof a === b
        }

        function F(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function G(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function H(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function I(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" ");
            return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
        }

        function J() {
            e.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
                return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
                return t
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = {
                svg: "http://www.w3.org/2000/svg"
            },
            s = {},
            t = {},
            u = {},
            v = [],
            w = v.slice,
            x, y = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            z = function() {
                function d(d, e) {
                    e = e || b.createElement(a[d] || "div"), d = "on" + d;
                    var f = d in e;
                    return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
                }
                var a = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return d
            }(),
            A = {}.hasOwnProperty,
            B;
        !E(A, "undefined") && !E(A.call, "undefined") ? B = function(a, b) {
            return A.call(a, b)
        } : B = function(a, b) {
            return b in a && E(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = w.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(w.call(arguments)))
                };
            return e
        }), s.flexbox = function() {
            return I("flexWrap")
        }, s.flexboxlegacy = function() {
            return I("boxDirection")
        }, s.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, s.canvastext = function() {
            return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
        }, s.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, s.hashchange = function() {
            return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, s.history = function() {
            return !!a.history && !!history.pushState
        }, s.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, s.rgba = function() {
            return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
        }, s.hsla = function() {
            return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
        }, s.multiplebgs = function() {
            return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
        }, s.backgroundsize = function() {
            return I("backgroundSize")
        }, s.borderimage = function() {
            return I("borderImage")
        }, s.borderradius = function() {
            return I("borderRadius")
        }, s.boxshadow = function() {
            return I("boxShadow")
        }, s.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }, s.opacity = function() {
            return D("opacity:.55"), /^0.55$/.test(j.opacity)
        }, s.cssanimations = function() {
            return I("animationName")
        }, s.csscolumns = function() {
            return I("columnCount")
        }, s.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
        }, s.cssreflections = function() {
            return I("boxReflect")
        }, s.csstransforms = function() {
            return !!I("transform")
        }, s.csstransforms3d = function() {
            var a = !!I("perspective");
            return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, s.csstransitions = function() {
            return I("transition")
        }, s.fontface = function() {
            var a;
            return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, s.generatedcontent = function() {
            var a;
            return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, s.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) {}
            return c
        }, s.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (d) {}
            return c
        }, s.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
        }, s.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
        }, s.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
        };
        for (var K in s) B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
        return e.input || J(), e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) B(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, C(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
                return G([a])
            }, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };;
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
! function(factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], factory) : jQuery && !jQuery.fn.hoverIntent && factory(jQuery)
}(function($) {
    "use strict";
    var cX, cY, _cfg = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        INSTANCE_COUNT = 0,
        track = function(ev) {
            cX = ev.pageX, cY = ev.pageY
        },
        compare = function(ev, $el, s, cfg) {
            if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) return $el.off(s.event, track), delete s.timeoutId, s.isActive = !0, ev.pageX = cX, ev.pageY = cY, delete s.pX, delete s.pY, cfg.over.apply($el[0], [ev]);
            s.pX = cX, s.pY = cY, s.timeoutId = setTimeout(function() {
                compare(ev, $el, s, cfg)
            }, cfg.interval)
        },
        delay = function(ev, $el, s, out) {
            return delete $el.data("hoverIntent")[s.id], out.apply($el[0], [ev])
        };
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var instanceId = INSTANCE_COUNT++,
            cfg = $.extend({}, _cfg);
        $.isPlainObject(handlerIn) ? (cfg = $.extend(cfg, handlerIn), $.isFunction(cfg.out) || (cfg.out = cfg.over)) : cfg = $.isFunction(handlerOut) ? $.extend(cfg, {
            over: handlerIn,
            out: handlerOut,
            selector: selector
        }) : $.extend(cfg, {
            over: handlerIn,
            out: handlerIn,
            selector: handlerOut
        });
        var handleHover = function(e) {
            var ev = $.extend({}, e),
                $el = $(this),
                hoverIntentData = $el.data("hoverIntent");
            hoverIntentData || $el.data("hoverIntent", hoverIntentData = {});
            var state = hoverIntentData[instanceId];
            state || (hoverIntentData[instanceId] = state = {
                id: instanceId
            }), state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId));
            var mousemove = state.event = "mousemove.hoverIntent.hoverIntent" + instanceId;
            if ("mouseenter" === e.type) {
                if (state.isActive) return;
                state.pX = ev.pageX, state.pY = ev.pageY, $el.off(mousemove, track).on(mousemove, track), state.timeoutId = setTimeout(function() {
                    compare(ev, $el, state, cfg)
                }, cfg.interval)
            } else {
                if (!state.isActive) return;
                $el.off(mousemove, track), state.timeoutId = setTimeout(function() {
                    delay(ev, $el, state, cfg.out)
                }, cfg.timeout)
            }
        };
        return this.on({
            "mouseenter.hoverIntent": handleHover,
            "mouseleave.hoverIntent": handleHover
        }, cfg.selector)
    }
});;
(function() {
    var initializing = false;
    window.JQClass = function() {};
    JQClass.classes = {};
    JQClass.extend = function extender(prop) {
        var base = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        for (var name in prop) {
            prototype[name] = typeof prop[name] == 'function' && typeof base[name] == 'function' ? (function(name, fn) {
                return function() {
                    var __super = this._super;
                    this._super = function(args) {
                        return base[name].apply(this, args || []);
                    };
                    var ret = fn.apply(this, arguments);
                    this._super = __super;
                    return ret;
                };
            })(name, prop[name]) : prop[name];
        }

        function JQClass() {
            if (!initializing && this._init) {
                this._init.apply(this, arguments);
            }
        }
        JQClass.prototype = prototype;
        JQClass.prototype.constructor = JQClass;
        JQClass.extend = extender;
        return JQClass;
    };
})();
(function($) {
    JQClass.classes.JQPlugin = JQClass.extend({
        name: 'plugin',
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return 'is-' + this.name;
        },
        _init: function() {
            $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
            var jqName = camelCase(this.name);
            $[jqName] = this;
            $.fn[jqName] = function(options) {
                var otherArgs = Array.prototype.slice.call(arguments, 1);
                if ($[jqName]._isNotChained(options, otherArgs)) {
                    return $[jqName][options].apply($[jqName], [this[0]].concat(otherArgs));
                }
                return this.each(function() {
                    if (typeof options === 'string') {
                        if (options[0] === '_' || !$[jqName][options]) {
                            throw 'Unknown method: ' + options;
                        }
                        $[jqName][options].apply($[jqName], [this].concat(otherArgs));
                    } else {
                        $[jqName]._attach(this, options);
                    }
                });
            };
        },
        setDefaults: function(options) {
            $.extend(this.defaultOptions, options || {});
        },
        _isNotChained: function(name, otherArgs) {
            if (name === 'option' && (otherArgs.length === 0 || (otherArgs.length === 1 && typeof otherArgs[0] === 'string'))) {
                return true;
            }
            return $.inArray(name, this._getters) > -1;
        },
        _attach: function(elem, options) {
            elem = $(elem);
            if (elem.hasClass(this._getMarker())) {
                return;
            }
            elem.addClass(this._getMarker());
            options = $.extend({}, this.defaultOptions, this._getMetadata(elem), options || {});
            var inst = $.extend({
                name: this.name,
                elem: elem,
                options: options
            }, this._instSettings(elem, options));
            elem.data(this.name, inst);
            this._postAttach(elem, inst);
            this.option(elem, options);
        },
        _instSettings: function(elem, options) {
            return {};
        },
        _postAttach: function(elem, inst) {},
        _getMetadata: function(elem) {
            try {
                var data = elem.data(this.name.toLowerCase()) || '';
                data = data.replace(/'/g, '"');
                data = data.replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {
                    var count = data.substring(0, i).match(/"/g);
                    return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');
                });
                data = $.parseJSON('{' + data + '}');
                for (var name in data) {
                    var value = data[name];
                    if (typeof value === 'string' && value.match(/^new Date\((.*)\)$/)) {
                        data[name] = eval(value);
                    }
                }
                return data;
            } catch (e) {
                return {};
            }
        },
        _getInst: function(elem) {
            return $(elem).data(this.name) || {};
        },
        option: function(elem, name, value) {
            elem = $(elem);
            var inst = elem.data(this.name);
            if (!name || (typeof name === 'string' && value == null)) {
                var options = (inst || {}).options;
                return (options && name ? options[name] : options);
            }
            if (!elem.hasClass(this._getMarker())) {
                return;
            }
            var options = name || {};
            if (typeof name === 'string') {
                options = {};
                options[name] = value;
            }
            this._optionsChanged(elem, inst, options);
            $.extend(inst.options, options);
        },
        _optionsChanged: function(elem, inst, options) {},
        destroy: function(elem) {
            elem = $(elem);
            if (!elem.hasClass(this._getMarker())) {
                return;
            }
            this._preDestroy(elem, this._getInst(elem));
            elem.removeData(this.name).removeClass(this._getMarker());
        },
        _preDestroy: function(elem, inst) {}
    });

    function camelCase(name) {
        return name.replace(/-([a-z])/g, function(match, group) {
            return group.toUpperCase();
        });
    }
    $.JQPlugin = {
        createPlugin: function(superClass, overrides) {
            if (typeof superClass === 'object') {
                overrides = superClass;
                superClass = 'JQPlugin';
            }
            superClass = camelCase(superClass);
            var className = camelCase(overrides.name);
            JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
            new JQClass.classes[className]();
        }
    };
})(jQuery);;
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()))
    }, e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length) return this._items = b.get().map(function(b) {
            return a(b)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var e = -1,
            f = 30,
            g = this.width(),
            h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
        }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }), a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }, e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);;
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();; /*!fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids*/
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t()
}(this, function() {
    "use strict";

    function e(e) {
        return new RegExp("^(https?:)?//(?:" + d.players.join("|") + ").*$", "i").test(e)
    }

    function t(e, t) {
        return parseInt(e, 10) / parseInt(t, 10) * 100 + "%"
    }

    function i(i) {
        if ((e(i.src) || e(i.data)) && !i.getAttribute("data-fluidvids")) {
            var n = document.createElement("div");
            i.parentNode.insertBefore(n, i), i.className += (i.className ? " " : "") + "fluidvids-item", i.setAttribute("data-fluidvids", "loaded"), n.className += "fluidvids", n.style.paddingTop = t(i.height, i.width), n.appendChild(i)
        }
    }

    function n() {
        var e = document.createElement("div");
        e.innerHTML = "<p>x</p><style>" + o + "</style>", r.appendChild(e.childNodes[1])
    }
    var d = {
            selector: ["iframe", "object"],
            players: ["www.youtube.com", "player.vimeo.com"]
        },
        o = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
        r = document.head || document.getElementsByTagName("head")[0];
    return d.render = function() {
        for (var e = document.querySelectorAll(d.selector.join()), t = e.length; t--;) i(e[t])
    }, d.init = function(e) {
        for (var t in e) d[t] = e[t];
        d.render(), n()
    }, d
});;
! function t(e, n, r) {
    function o(i, s) {
        if (!n[i]) {
            if (!e[i]) {
                var a = "function" == typeof require && require;
                if (!s && a) return a(i, !0);
                if (l) return l(i, !0);
                var c = new Error("Cannot find module '" + i + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[i] = {
                exports: {}
            };
            e[i][0].call(u.exports, function(t) {
                var n = e[i][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, r)
        }
        return n[i].exports
    }
    for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
    return o
}({
    1: [function(t, e, n) {
        "use strict";

        function r(t) {
            t.fn.perfectScrollbar = function(t) {
                return this.each(function() {
                    if ("object" == typeof t || "undefined" == typeof t) {
                        var e = t;
                        l.get(this) || o.initialize(this, e)
                    } else {
                        var n = t;
                        "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
                    }
                })
            }
        }
        var o = t("../main"),
            l = t("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], r);
        else {
            var i = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof i && r(i)
        }
        e.exports = r
    }, {
        "../main": 6,
        "../plugin/instances": 17
    }],
    2: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function l(t, e) {
            for (var n in e) {
                var r = e[n];
                "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
            }
            return t
        }
        var i = {};
        i.create = function(t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, i.appendTo = function(t, e) {
            return e.appendChild(t), t
        }, i.css = function(t, e, n) {
            return "object" == typeof e ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
        }, i.matches = function(t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : t.msMatchesSelector(e)
        }, i.remove = function(t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }, i.queryChildren = function(t, e) {
            return Array.prototype.filter.call(t.childNodes, function(t) {
                return i.matches(t, e)
            })
        }, e.exports = i
    }, {}],
    3: [function(t, e, n) {
        "use strict";
        var r = function(t) {
            this.element = t, this.events = {}
        };
        r.prototype.bind = function(t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, r.prototype.unbind = function(t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function(r) {
                return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1)
            }, this)
        }, r.prototype.unbindAll = function() {
            for (var t in this.events) this.unbind(t)
        };
        var o = function() {
            this.eventElements = []
        };
        o.prototype.eventElement = function(t) {
            var e = this.eventElements.filter(function(e) {
                return e.element === t
            })[0];
            return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
        }, o.prototype.bind = function(t, e, n) {
            this.eventElement(t).bind(e, n)
        }, o.prototype.unbind = function(t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, o.prototype.unbindAll = function() {
            for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
        }, o.prototype.once = function(t, e, n) {
            var r = this.eventElement(t),
                o = function(t) {
                    r.unbind(e, o), n(t)
                };
            r.bind(e, o)
        }, e.exports = o
    }, {}],
    4: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    5: [function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n = ["ps--in-scrolling"];
            return e = "undefined" == typeof t ? ["ps--x", "ps--y"] : ["ps--" + t], n.concat(e)
        }
        var o = t("./dom"),
            l = n.toInt = function(t) {
                return parseInt(t, 10) || 0
            };
        n.isEditable = function(t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function(t) {
            for (var e = 0; e < t.classList.length; e++) {
                var n = t.classList[e];
                0 === n.indexOf("ps-") && t.classList.remove(n)
            }
        }, n.outerWidth = function(t) {
            return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function(t, e) {
            for (var n = r(e), o = 0; o < n.length; o++) t.classList.add(n[o])
        }, n.stopScrolling = function(t, e) {
            for (var n = r(e), o = 0; o < n.length; o++) t.classList.remove(n[o])
        }, n.env = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
        }
    }, {
        "./dom": 2
    }],
    6: [function(t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"),
            o = t("./plugin/initialize"),
            l = t("./plugin/update");
        e.exports = {
            initialize: o,
            update: l,
            destroy: r
        }
    }, {
        "./plugin/destroy": 8,
        "./plugin/initialize": 16,
        "./plugin/update": 20
    }],
    7: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            return {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }
    }, {}],
    8: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances");
        e.exports = function(t) {
            var e = l.get(t);
            e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t))
        }
    }, {
        "../lib/dom": 2,
        "../lib/helper": 5,
        "./instances": 17
    }],
    9: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }
            var r = function(t) {
                t.stopPropagation()
            };
            e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r) {
                var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
                    s = o > e.scrollbarYTop ? 1 : -1;
                i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation()
            }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r) {
                var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
                    s = o > e.scrollbarXLeft ? 1 : -1;
                i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation()
            })
        }
        var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 17,
        "../update-geometry": 18,
        "../update-scroll": 19
    }],
    10: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n) {
                var o = r + n * e.railXRatio,
                    i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
                var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                c(t, "left", s)
            }
            var r = null,
                o = null,
                s = function(e) {
                    n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
                },
                u = function() {
                    l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
                };
            e.event.bind(e.scrollbarX, "mousedown", function(n) {
                o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(t, e) {
            function n(n) {
                var o = r + n * e.railYRatio,
                    i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
                var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                c(t, "top", s)
            }
            var r = null,
                o = null,
                s = function(e) {
                    n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
                },
                u = function() {
                    l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
                };
            e.event.bind(e.scrollbarY, "mousedown", function(n) {
                o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }
        var l = t("../../lib/helper"),
            i = t("../../lib/dom"),
            s = t("../instances"),
            a = t("../update-geometry"),
            c = t("../update-scroll");
        e.exports = function(t) {
            var e = s.get(t);
            r(t, e), o(t, e)
        }
    }, {
        "../../lib/dom": 2,
        "../../lib/helper": 5,
        "../instances": 17,
        "../update-geometry": 18,
        "../update-scroll": 19
    }],
    11: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                }
                var l = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }
            var r = !1;
            e.event.bind(t, "mouseenter", function() {
                r = !0
            }), e.event.bind(t, "mouseleave", function() {
                r = !1
            });
            var i = !1;
            e.event.bind(e.ownerDocument, "keydown", function(c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");
                    if (r || u) {
                        var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (d) {
                            if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                            else
                                for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                            if (o.isEditable(d)) return
                        }
                        var p = 0,
                            f = 0;
                        switch (c.which) {
                            case 37:
                                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                                break;
                            case 33:
                                f = 90;
                                break;
                            case 32:
                                f = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                f = -90;
                                break;
                            case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                break;
                            case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                break;
                            default:
                                return
                        }
                        a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault()
                    }
                }
            })
        }
        var o = t("../../lib/helper"),
            l = t("../../lib/dom"),
            i = t("../instances"),
            s = t("../update-geometry"),
            a = t("../update-scroll");
        e.exports = function(t) {
            var e = i.get(t);
            r(t, e)
        }
    }, {
        "../../lib/dom": 2,
        "../../lib/helper": 5,
        "../instances": 17,
        "../update-geometry": 18,
        "../update-scroll": 19
    }],
    12: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                }
                var l = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }

            function r(t) {
                var e = t.deltaX,
                    n = -1 * t.deltaY;
                return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
            }

            function o(e, n) {
                var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (r) {
                    var o = window.getComputedStyle(r),
                        l = [o.overflow, o.overflowX, o.overflowY].join("");
                    if (!l.match(/(scroll|auto)/)) return !1;
                    var i = r.scrollHeight - r.clientHeight;
                    if (i > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === i && n < 0)) return !0;
                    var s = r.scrollLeft - r.clientWidth;
                    if (s > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === s && e > 0)) return !0
                }
                return !1
            }

            function s(s) {
                var c = r(s),
                    u = c[0],
                    d = c[1];
                o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
            }
            var a = !1;
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
        }
        var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 17,
        "../update-geometry": 18,
        "../update-scroll": 19
    }],
    13: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            e.event.bind(t, "scroll", function() {
                l(t)
            })
        }
        var o = t("../instances"),
            l = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 17,
        "../update-geometry": 18
    }],
    14: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function r() {
                c || (c = setInterval(function() {
                    return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c)
                }, 50))
            }

            function a() {
                c && (clearInterval(c), c = null), o.stopScrolling(t)
            }
            var c = null,
                u = {
                    top: 0,
                    left: 0
                },
                d = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function() {
                t.contains(n()) ? d = !0 : (d = !1, a())
            }), e.event.bind(window, "mouseup", function() {
                d && (d = !1, a())
            }), e.event.bind(window, "keyup", function() {
                d && (d = !1, a())
            }), e.event.bind(window, "mousemove", function(e) {
                if (d) {
                    var n = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        l = {
                            left: t.offsetLeft,
                            right: t.offsetLeft + t.offsetWidth,
                            top: t.offsetTop,
                            bottom: t.offsetTop + t.offsetHeight
                        };
                    n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
                }
            })
        }
        var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) {
            var e = l.get(t);
            r(t, e)
        }
    }, {
        "../../lib/helper": 5,
        "../instances": 17,
        "../update-geometry": 18,
        "../update-scroll": 19
    }],
    15: [function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            function o(n, r) {
                var o = t.scrollTop,
                    l = t.scrollLeft,
                    i = Math.abs(n),
                    s = Math.abs(r);
                if (s > i) {
                    if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
                } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;
                return !0
            }

            function a(e, n) {
                s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t)
            }

            function c() {
                w = !0
            }

            function u() {
                w = !1
            }

            function d(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function p(t) {
                return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
            }

            function f(t) {
                if (p(t)) {
                    Y = !0;
                    var e = d(t);
                    g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
                }
            }

            function h(t) {
                if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
                    var n = d(t),
                        r = {
                            pageX: n.pageX,
                            pageY: n.pageY
                        },
                        l = r.pageX - g.pageX,
                        i = r.pageY - g.pageY;
                    a(l, i), g = r;
                    var s = (new Date).getTime(),
                        c = s - v;
                    c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function b() {
                !w && Y && (Y = !1, e.settings.swipeEasing && (clearInterval(y), y = setInterval(function() {
                    return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
                }, 10)))
            }
            var g = {},
                v = 0,
                m = {},
                y = null,
                w = !1,
                Y = !1;
            n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
        }
        var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                var e = l.get(t);
                r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
            }
        }
    }, {
        "../../lib/helper": 5,
        "../instances": 17,
        "../update-geometry": 18,
        "../update-scroll": 19
    }],
    16: [function(t, e, n) {
        "use strict";
        var r = t("./instances"),
            o = t("./update-geometry"),
            l = {
                "click-rail": t("./handler/click-rail"),
                "drag-scrollbar": t("./handler/drag-scrollbar"),
                keyboard: t("./handler/keyboard"),
                wheel: t("./handler/mouse-wheel"),
                touch: t("./handler/touch"),
                selection: t("./handler/selection")
            },
            i = t("./handler/native-scroll");
        e.exports = function(t, e) {
            t.classList.add("ps");
            var n = r.add(t, "object" == typeof e ? e : {});
            t.classList.add("ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(e) {
                l[e](t)
            }), i(t), o(t)
        }
    }, {
        "./handler/click-rail": 9,
        "./handler/drag-scrollbar": 10,
        "./handler/keyboard": 11,
        "./handler/mouse-wheel": 12,
        "./handler/native-scroll": 13,
        "./handler/selection": 14,
        "./handler/touch": 15,
        "./instances": 17,
        "./update-geometry": 18
    }],
    17: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                t.classList.add("ps--focus")
            }

            function r() {
                t.classList.remove("ps--focus")
            }
            var o = this;
            o.settings = a();
            for (var l in e) o.settings[l] = e[l];
            o.containerWidth = null, o.containerHeight = null, o.contentWidth = null, o.contentHeight = null, o.isRtl = "rtl" === c.css(t, "direction"), o.isNegativeScroll = function() {
                var e = t.scrollLeft,
                    n = null;
                return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
            }(), o.negativeScrollAdjustment = o.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.event = new u, o.ownerDocument = t.ownerDocument || document, o.scrollbarXRail = c.appendTo(c.create("div", "ps__scrollbar-x-rail"), t), o.scrollbarX = c.appendTo(c.create("div", "ps__scrollbar-x"), o.scrollbarXRail), o.scrollbarX.setAttribute("tabindex", 0), o.event.bind(o.scrollbarX, "focus", n), o.event.bind(o.scrollbarX, "blur", r), o.scrollbarXActive = null, o.scrollbarXWidth = null, o.scrollbarXLeft = null, o.scrollbarXBottom = s.toInt(c.css(o.scrollbarXRail, "bottom")), o.isScrollbarXUsingBottom = o.scrollbarXBottom === o.scrollbarXBottom, o.scrollbarXTop = o.isScrollbarXUsingBottom ? null : s.toInt(c.css(o.scrollbarXRail, "top")), o.railBorderXWidth = s.toInt(c.css(o.scrollbarXRail, "borderLeftWidth")) + s.toInt(c.css(o.scrollbarXRail, "borderRightWidth")), c.css(o.scrollbarXRail, "display", "block"), o.railXMarginWidth = s.toInt(c.css(o.scrollbarXRail, "marginLeft")) + s.toInt(c.css(o.scrollbarXRail, "marginRight")), c.css(o.scrollbarXRail, "display", ""), o.railXWidth = null, o.railXRatio = null, o.scrollbarYRail = c.appendTo(c.create("div", "ps__scrollbar-y-rail"), t), o.scrollbarY = c.appendTo(c.create("div", "ps__scrollbar-y"), o.scrollbarYRail), o.scrollbarY.setAttribute("tabindex", 0), o.event.bind(o.scrollbarY, "focus", n), o.event.bind(o.scrollbarY, "blur", r), o.scrollbarYActive = null, o.scrollbarYHeight = null, o.scrollbarYTop = null, o.scrollbarYRight = s.toInt(c.css(o.scrollbarYRail, "right")), o.isScrollbarYUsingRight = o.scrollbarYRight === o.scrollbarYRight, o.scrollbarYLeft = o.isScrollbarYUsingRight ? null : s.toInt(c.css(o.scrollbarYRail, "left")), o.scrollbarYOuterWidth = o.isRtl ? s.outerWidth(o.scrollbarY) : null, o.railBorderYWidth = s.toInt(c.css(o.scrollbarYRail, "borderTopWidth")) + s.toInt(c.css(o.scrollbarYRail, "borderBottomWidth")), c.css(o.scrollbarYRail, "display", "block"), o.railYMarginHeight = s.toInt(c.css(o.scrollbarYRail, "marginTop")) + s.toInt(c.css(o.scrollbarYRail, "marginBottom")), c.css(o.scrollbarYRail, "display", ""), o.railYHeight = null, o.railYRatio = null
        }

        function o(t) {
            return t.getAttribute("data-ps-id")
        }

        function l(t, e) {
            t.setAttribute("data-ps-id", e)
        }

        function i(t) {
            t.removeAttribute("data-ps-id")
        }
        var s = t("../lib/helper"),
            a = t("./default-setting"),
            c = t("../lib/dom"),
            u = t("../lib/event-manager"),
            d = t("../lib/guid"),
            p = {};
        n.add = function(t, e) {
            var n = d();
            return l(t, n), p[n] = new r(t, e), p[n]
        }, n.remove = function(t) {
            delete p[o(t)], i(t)
        }, n.get = function(t) {
            return p[o(t)]
        }
    }, {
        "../lib/dom": 2,
        "../lib/event-manager": 3,
        "../lib/guid": 4,
        "../lib/helper": 5,
        "./default-setting": 7
    }],
    18: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function o(t, e) {
            var n = {
                width: e.railXWidth
            };
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, i.css(e.scrollbarXRail, n);
            var r = {
                top: t.scrollTop,
                height: e.railYHeight
            };
            e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, i.css(e.scrollbarYRail, r), i.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), i.css(e.scrollbarY, {
                top: e.scrollbarYTop,
                height: e.scrollbarYHeight - e.railBorderYWidth
            })
        }
        var l = t("../lib/helper"),
            i = t("../lib/dom"),
            s = t("./instances"),
            a = t("./update-scroll");
        e.exports = function(t) {
            var e = s.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
            var n;
            t.contains(e.scrollbarXRail) || (n = i.queryChildren(t, ".ps__scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
                i.remove(t)
            }), i.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = i.queryChildren(t, ".ps__scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
                i.remove(t)
            }), i.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, a(t, "left", 0)), e.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, a(t, "top", 0))
        }
    }, {
        "../lib/dom": 2,
        "../lib/helper": 5,
        "./instances": 17,
        "./update-scroll": 19
    }],
    19: [function(t, e, n) {
        "use strict";
        var r = t("./instances"),
            o = function(t) {
                var e = document.createEvent("Event");
                return e.initEvent(t, !0, !0), e
            };
        e.exports = function(t, e, n) {
            if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
            "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(o("ps-x-reach-start")));
            var l = r.get(t);
            "top" === e && n >= l.contentHeight - l.containerHeight && (n = l.contentHeight - l.containerHeight, n - t.scrollTop <= 2 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && n >= l.contentWidth - l.containerWidth && (n = l.contentWidth - l.containerWidth, n - t.scrollLeft <= 2 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === l.lastTop && (l.lastTop = t.scrollTop), void 0 === l.lastLeft && (l.lastLeft = t.scrollLeft), "top" === e && n < l.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && n > l.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && n < l.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && n > l.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && n !== l.lastTop && (t.scrollTop = l.lastTop = n, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && n !== l.lastLeft && (t.scrollLeft = l.lastLeft = n, t.dispatchEvent(o("ps-scroll-x")))
        }
    }, {
        "./instances": 17
    }],
    20: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = t("./update-scroll");
        e.exports = function(t) {
            var e = l.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
        }
    }, {
        "../lib/dom": 2,
        "../lib/helper": 5,
        "./instances": 17,
        "./update-geometry": 18,
        "./update-scroll": 19
    }]
}, {}, [1]);;
/*!
 * VERSION: 1.9.0
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = (_gsScope.document || {}).documentElement,
            b = _gsScope,
            c = function(c, d) {
                var e = "x" === d ? "Width" : "Height",
                    f = "scroll" + e,
                    g = "client" + e,
                    h = document.body;
                return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e]
            },
            d = function(a) {
                return "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === b || a.nodeType && a.style ? a : null
            },
            e = function(c, d) {
                var e = "scroll" + ("x" === d ? "Left" : "Top");
                return c === b && (null != c.pageXOffset ? e = "page" + d.toUpperCase() + "Offset" : c = null != a[e] ? a : document.body),
                    function() {
                        return c[e]
                    }
            },
            f = function(c, f) {
                var g = d(c).getBoundingClientRect(),
                    h = !f || f === b || f === document.body,
                    i = (h ? a : f).getBoundingClientRect(),
                    j = {
                        x: g.left - i.left,
                        y: g.top - i.top
                    };
                return !h && f && (j.x += e(f, "x")(), j.y += e(f, "y")()), j
            },
            g = function(a, b, d) {
                var e = typeof a;
                return isNaN(a) ? "number" === e || "string" === e && "=" === a.charAt(1) ? a : "max" === a ? c(b, d) : Math.min(c(b, d), f(a, b)[d]) : parseFloat(a)
            },
            h = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.9.0",
                init: function(a, c, d) {
                    return this._wdw = a === b, this._target = a, this._tween = d, "object" != typeof c ? (c = {
                        y: c
                    }, "string" == typeof c.y && "max" !== c.y && "=" !== c.y.charAt(1) && (c.x = c.y)) : c.nodeType && (c = {
                        y: c,
                        x: c
                    }), this.vars = c, this._autoKill = c.autoKill !== !1, this.getX = e(a, "x"), this.getY = e(a, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != c.x ? (this._addTween(this, "x", this.x, g(c.x, a, "x") - (c.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != c.y ? (this._addTween(this, "y", this.y, g(c.y, a, "y") - (c.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(a) {
                    this._super.setRatio.call(this, a);
                    var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        f = e - this.yPrev,
                        g = d - this.xPrev,
                        i = h.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (g > i || -i > g) && d < c(this._target, "x") && (this.skipX = !0), !this.skipY && (f > i || -i > f) && e < c(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            i = h.prototype;
        h.max = c, h.getOffset = f, h.buildGetter = e, h.autoKillThreshold = 7, i._kill = function(a) {
            return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
    }("ScrollToPlugin");;
(function($) {
    "use strict";
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() {
        windowHeight = $window.height();
    });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() {
            firstTop = $this.offset().top;
        });
        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }
        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
! function($) {
    $.prettyPhoto = {
        version: "3.1.6"
    };
    var options = $.prettyPhoto.options = {
        hook: "rel",
        animation_speed: "fast",
        ajaxcallback: function() {},
        slideshow: 5e3,
        autoplay_slideshow: !1,
        opacity: .8,
        show_title: !0,
        allow_resize: !0,
        allow_expand: !0,
        default_width: 500,
        default_height: 344,
        counter_separator_label: "/",
        theme: "pp_default",
        horizontal_padding: 20,
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        deeplinking: !0,
        overlay_gallery: !0,
        overlay_gallery_max: 30,
        keyboard_shortcuts: !0,
        changepicturecallback: function() {},
        callback: function() {},
        ie6_fallback: !0,
        markup: '<div class="pp_pic_holder" {vc-data}> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
        gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
        image_markup: '<img id="fullResImage" src="{path}" />',
        flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
        quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
        iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
        inline_markup: '<div class="pp_inline">{content}</div>',
        custom_markup: "",
        social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
    };

    function getHashtag() {
        var url = location.href;
        return hashtag = -1 !== url.indexOf("#prettyPhoto") && decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function getParam(name, url) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(url);
        return null == results ? "" : results[1]
    }
    $.fn.prettyPhoto = function(pp_settings) {
        pp_settings = jQuery.extend({}, options, pp_settings);
        var pp_dimensions, pp_open, pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth, pp_slideshow, matchedObjects = this,
            percentBased = !1,
            windowHeight = $(window).height(),
            windowWidth = $(window).width();

        function _showContent() {
            $(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (windowHeight / 2 - pp_dimensions.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: pp_dimensions.contentHeight,
                width: pp_dimensions.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: windowWidth / 2 - pp_dimensions.containerWidth / 2 < 0 ? 0 : windowWidth / 2 - pp_dimensions.containerWidth / 2,
                width: pp_dimensions.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(pp_dimensions.height).width(pp_dimensions.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == _getFileType(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (pp_dimensions.resized ? $("a.pp_expand,a.pp_contract").show() : $("a.pp_expand").hide()), !settings.autoplay_slideshow || pp_slideshow || pp_open || $.prettyPhoto.startSlideshow(), settings.changepicturecallback(), pp_open = !0
            }), isSet && settings.overlay_gallery && "image" == _getFileType(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((pp_dimensions.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, $.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"), pp_settings.ajaxcallback()
        }

        function _hideContent(callback) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                $(".pp_loaderIcon").show(), callback()
            })
        }

        function _fitToViewport(width, height) {
            if (resized = !1, _getDimensions(width, height), imageWidth = width, imageHeight = height, (windowWidth < pp_containerWidth || windowHeight < pp_containerHeight) && doresize && settings.allow_resize && !percentBased) {
                for (resized = !0, fitting = !1; !fitting;) windowWidth < pp_containerWidth ? (imageWidth = windowWidth - 200, imageHeight = height / width * imageWidth) : windowHeight < pp_containerHeight ? (imageHeight = windowHeight - 200, imageWidth = width / height * imageHeight) : fitting = !0, pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
                (windowWidth < pp_containerWidth || windowHeight < pp_containerHeight) && _fitToViewport(pp_containerWidth, pp_containerHeight), _getDimensions(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(pp_containerHeight),
                containerWidth: Math.floor(pp_containerWidth) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(pp_contentHeight),
                contentWidth: Math.floor(pp_contentWidth),
                resized: resized
            }
        }

        function _getDimensions(width, height) {
            width = parseFloat(width), height = parseFloat(height), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(width), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(width), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo($("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), pp_contentHeight = height + detailsHeight, pp_contentWidth = width, pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), pp_containerWidth = width
        }

        function _getFileType(itemSrc) {
            return itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i) ? "youtube" : itemSrc.match(/vimeo\.com/i) ? "vimeo" : itemSrc.match(/\b.mov\b/i) ? "quicktime" : itemSrc.match(/\b.swf\b/i) ? "flash" : itemSrc.match(/\biframe=true\b/i) ? "iframe" : itemSrc.match(/\bajax=true\b/i) ? "ajax" : itemSrc.match(/\bcustom=true\b/i) ? "custom" : "#" == itemSrc.substr(0, 1) ? "inline" : "image"
        }

        function _center_overlay() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _get_scroll(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = windowHeight / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > windowHeight) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: windowWidth / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _get_scroll() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function _build_overlay(caller) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), $("body").append(settings.markup), $pp_pic_holder = $(".pp_pic_holder"), $ppt = $(".ppt"), $pp_overlay = $("div.pp_overlay"), $pp_pic_holder.toggleClass("is-single", pp_images.length <= 1), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = $(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").on("click", function() {
                    return $.prettyPhoto.changeGalleryPage("next"), $.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").on("click", function() {
                    return $.prettyPhoto.changeGalleryPage("previous"), $.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(i) {
                    $(this).find("a").on("click", function() {
                        return $.prettyPhoto.changePage(i), $.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").on("click", function() {
                return $.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.addClass("pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: $(document).height(),
                width: $(window).width()
            }).bind("click", function() {
                settings.modal || $.prettyPhoto.close()
            }), $("a.pp_close").bind("click", function(e) {
                return e && e.preventDefault && e.preventDefault(), $.prettyPhoto.close(), !1
            }), settings.allow_expand && $("a.pp_expand").bind("click", function(e) {
                return $(this).hasClass("pp_expand") ? ($(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : ($(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), _hideContent(function() {
                    $.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return $.prettyPhoto.changePage("previous"), $.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return $.prettyPhoto.changePage("next"), $.prettyPhoto.stopSlideshow(), !1
            }), _center_overlay()
        }
        return doresize = !0, scroll_pos = _get_scroll(), $(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            _center_overlay(), windowHeight = $(window).height(), windowWidth = $(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height($(document).height()).width(windowWidth)
        }), pp_settings.keyboard_shortcuts && $(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                case 37:
                    $.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                case 39:
                    $.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                case 27:
                    settings.modal || $.prettyPhoto.close(), e.preventDefault()
            }
        }), $.prettyPhoto.initialize = function() {
            return settings = pp_settings, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = $(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(matchedObjects, function(n, i) {
                if (-1 != $(n).attr(settings.hook).indexOf(theRel)) return $(n).attr("href")
            }) : $.makeArray($(this).attr("href")), pp_titles = isSet ? jQuery.map(matchedObjects, function(n, i) {
                if (-1 != $(n).attr(settings.hook).indexOf(theRel)) return $(n).find("img").attr("alt") ? $(n).find("img").attr("alt") : ""
            }) : $.makeArray($(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(matchedObjects, function(n, i) {
                if (-1 != $(n).attr(settings.hook).indexOf(theRel)) return $(n).attr("title") ? $(n).attr("title") : ""
            }) : $.makeArray($(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray($(this).attr("href"), pp_images), rel_index = isSet ? set_position : $("a[" + settings.hook + "^='" + theRel + "']").index($(this)), _build_overlay(this), settings.allow_resize && $(window).bind("scroll.prettyphoto", function() {
                _center_overlay()
            }), $.prettyPhoto.open(), !1
        }, $.prettyPhoto.open = function(event) {
            return "undefined" == typeof settings && (settings = pp_settings, pp_images = $.makeArray(event), pp_titles = arguments[1] ? $.makeArray(arguments[1]) : $.makeArray(""), pp_descriptions = arguments[2] ? $.makeArray(arguments[2]) : $.makeArray(""), isSet = 1 < pp_images.length, set_position = arguments[3] ? arguments[3] : 0, _build_overlay(event.target)), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), 1 < $(pp_images).size() ? $(".pp_nav").show() : $(".pp_nav").hide(), $(".pp_loaderIcon").show(), settings.deeplinking && function() {
                if ("undefined" == typeof theRel) return;
                location.hash = theRel + "/" + rel_index + "/"
            }(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + $(pp_images).size()), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(getParam("width", pp_images[set_position])) ? getParam("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(getParam("height", pp_images[set_position])) ? getParam("height", pp_images[set_position]) : settings.default_height.toString(), percentBased = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat($(window).height() * parseFloat(movie_height) / 100 - 150), percentBased = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat($(window).width() * parseFloat(movie_width) / 100 - 150), percentBased = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, _getFileType(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < $(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            pp_dimensions = _fitToViewport(imgPreloader.width, imgPreloader.height), _showContent()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), $.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        pp_dimensions = _fitToViewport(movie_width, movie_height), movie_id = getParam("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], 0 < movie_id.indexOf("?") && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), 0 < movie_id.indexOf("&") && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "https://www.youtube.com/embed/" + movie_id, getParam("rel", pp_images[set_position]) ? movie += "?rel=" + getParam("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        pp_dimensions = _fitToViewport(movie_width, movie_height), movie_id = pp_images[set_position];
                        var match = movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);
                        movie = "https://player.vimeo.com/video/" + match[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = pp_dimensions.width + "/embed/?moog_width=" + pp_dimensions.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, pp_dimensions.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        (pp_dimensions = _fitToViewport(movie_width, movie_height)).height += 15, pp_dimensions.contentHeight += 15, pp_dimensions.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        pp_dimensions = _fitToViewport(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        pp_dimensions = _fitToViewport(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, pp_dimensions = _fitToViewport(movie_width, movie_height), doresize = !0, skipInjection = !0, $.get(pp_images[set_position], function(responseHTML) {
                            toInject = settings.inline_markup.replace(/{content}/g, responseHTML), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, _showContent()
                        });
                        break;
                    case "custom":
                        pp_dimensions = _fitToViewport(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($("body")).show(), doresize = !1, pp_dimensions = _fitToViewport($(myClone).width(), $(myClone).height()), doresize = !0, $(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, $(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, _showContent())
            }), !1
        }, $.prettyPhoto.changePage = function(direction) {
            currentGalleryPage = 0, "previous" == direction ? (set_position--, set_position < 0 && (set_position = $(pp_images).size() - 1)) : "next" == direction ? (set_position++, set_position > $(pp_images).size() - 1 && (set_position = 0)) : set_position = direction, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && $(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), _hideContent(function() {
                $.prettyPhoto.open()
            })
        }, $.prettyPhoto.changeGalleryPage = function(direction) {
            "next" == direction ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == direction ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = direction, slide_speed = "next" == direction || "previous" == direction ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, $.prettyPhoto.startSlideshow = function() {
            void 0 === pp_slideshow ? ($pp_pic_holder.find(".pp_play").off("click").removeClass("pp_play").addClass("pp_pause").on("click", function() {
                return $.prettyPhoto.stopSlideshow(), !1
            }), pp_slideshow = setInterval($.prettyPhoto.startSlideshow, settings.slideshow)) : $.prettyPhoto.changePage("next")
        }, $.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").off("click").removeClass("pp_pause").addClass("pp_play").on("click", function() {
                return $.prettyPhoto.startSlideshow(), !1
            }), clearInterval(pp_slideshow), pp_slideshow = void 0
        }, $.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || ($.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), $("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                $(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), $(this).remove(), $(window).unbind("scroll.prettyphoto"), -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto"), settings.callback(), doresize = !0, pp_open = !1, delete settings
            }))
        }, !pp_alreadyInitialized && getHashtag() && (pp_alreadyInitialized = !0, hashIndex = getHashtag(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            $("a[" + pp_settings.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", $.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;;
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});; /*!waitForImages jQuery Plugin 2018-02-13*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    var b = "waitForImages",
        c = function(a) {
            return a.srcset && a.sizes
        }(new Image);
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    }, a.expr.pseudos["has-src"] = function(b) {
        return a(b).is('img[src][src!=""]')
    }, a.expr.pseudos.uncached = function(b) {
        return !!a(b).is(":has-src") && !b.complete
    }, a.fn.waitForImages = function() {
        var d, e, f, g = 0,
            h = 0,
            i = a.Deferred(),
            j = this,
            k = [],
            l = a.waitForImages.hasImageProperties || [],
            m = a.waitForImages.hasImageAttributes || [],
            n = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
        if (a.isPlainObject(arguments[0]) ? (f = arguments[0].waitForAll, e = arguments[0].each, d = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? f = arguments[0] : (d = arguments[0], e = arguments[1], f = arguments[2]), d = d || a.noop, e = e || a.noop, f = !!f, !a.isFunction(d) || !a.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var b = a(this);
            f ? b.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:has-src") && !b.is("[srcset]") && k.push({
                    src: b.attr("src"),
                    element: b[0]
                }), a.each(l, function(a, c) {
                    var d, e = b.css(c);
                    if (!e) return !0;
                    for (; d = n.exec(e);) k.push({
                        src: d[2],
                        element: b[0]
                    })
                }), a.each(m, function(a, c) {
                    var d = b.attr(c);
                    return !d || void k.push({
                        src: b.attr("src"),
                        srcset: b.attr("srcset"),
                        element: b[0]
                    })
                })
            }) : b.find("img:has-src").each(function() {
                k.push({
                    src: this.src,
                    element: this
                })
            })
        }), g = k.length, h = 0, 0 === g && (d.call(j), i.resolveWith(j)), a.each(k, function(f, k) {
            var l = new Image,
                m = "load." + b + " error." + b;
            a(l).one(m, function b(c) {
                var f = [h, g, "load" == c.type];
                if (h++, e.apply(k.element, f), i.notifyWith(k.element, f), a(this).off(m, b), h == g) return d.call(j[0]), i.resolveWith(j[0]), !1
            }), c && k.srcset && (l.srcset = k.srcset, l.sizes = k.sizes), l.src = k.src
        }), i.promise()
    }
});;
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) {
            s.error(t)
        };
    return o(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function(t, e, i) {
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e), delete s[n]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var s = i.toDashed(n),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, n, u)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - o,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) {
        o.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, o._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, o._manageStamp = function(t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            o = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});;
/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function() {
    function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c]
    }
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var b = a.prototype;
    return b.contains = function(a) {
        var b = a.width || 0,
            c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
    }, b.overlaps = function(a) {
        var b = this.x + this.width,
            c = this.y + this.height,
            d = a.x + a.width,
            e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y
    }, b.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b)) return !1;
        var c, d = [],
            e = this.x + this.width,
            f = this.y + this.height,
            g = b.x + b.width,
            h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }), d.push(c)), e > g && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }), d.push(c)), f > h && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }), d.push(c)), this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }), d.push(c)), d
    }, b.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height
    }, a
}),
function(a, b) {
    if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof module && module.exports) module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
    }
    var c = b.prototype;
    c.reset = function() {
        this.spaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b), this.sorter = d[this.sortDirection] || d.downwardLeftToRight
    }, c.pack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b];
            if (c.canFit(a)) {
                this.placeInSpace(a, c);
                break
            }
        }
    }, c.columnPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b],
                d = c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01;
            if (d) {
                a.y = c.y, this.placed(a);
                break
            }
        }
    }, c.rowPack = function(a) {
        for (var b = 0; b < this.spaces.length; b++) {
            var c = this.spaces[b],
                d = c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01;
            if (d) {
                a.x = c.x, this.placed(a);
                break
            }
        }
    }, c.placeInSpace = function(a, b) {
        a.x = b.x, a.y = b.y, this.placed(a)
    }, c.placed = function(a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
            var d = this.spaces[c],
                e = d.getMaximalFreeRects(a);
            e ? b.push.apply(b, e) : b.push(d)
        }
        this.spaces = b, this.mergeSortSpaces()
    }, c.mergeSortSpaces = function() {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
    }, c.addSpace = function(a) {
        this.spaces.push(a), this.mergeSortSpaces()
    }, b.mergeRects = function(a) {
        var b = 0,
            c = a[b];
        a: for (; c;) {
            for (var d = 0, e = a[b + d]; e;) {
                if (e == c) d++;
                else {
                    if (e.contains(c)) {
                        a.splice(b, 1), c = a[b];
                        continue a
                    }
                    c.contains(e) ? a.splice(b + d, 1) : d++
                }
                e = a[b + d]
            }
            b++, c = a[b]
        }
        return a
    };
    var d = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y
        }
    };
    return b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("./rect")) : a.Packery.Item = b(a.Outlayer, a.Packery.Rect)
}(window, function(a, b) {
    var c = document.documentElement.style,
        d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
        e = function() {
            a.Item.apply(this, arguments)
        },
        f = e.prototype = Object.create(a.Item.prototype),
        g = f._create;
    f._create = function() {
        g.call(this), this.rect = new b
    };
    var h = f.moveTo;
    return f.moveTo = function(a, b) {
        var c = Math.abs(this.position.x - a),
            d = Math.abs(this.position.y - b),
            e = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > c && 1 > d;
        return e ? void this.goTo(a, b) : void h.apply(this, arguments)
    }, f.enablePlacing = function() {
        this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
    }, f.disablePlacing = function() {
        this.isPlacing = !1
    }, f.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
    }, f.showDropPlaceholder = function() {
        var a = this.dropPlaceholder;
        a || (a = this.dropPlaceholder = document.createElement("div"), a.className = "packery-drop-placeholder", a.style.position = "absolute"), a.style.width = this.size.width + "px", a.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(a)
    }, f.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }, f.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder)
    }, e
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e) {
    function f(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x
    }

    function g(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y
    }

    function h(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y;
        return Math.sqrt(c * c + d * d)
    }
    c.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1
    };
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    j._create = function() {
        b.prototype._create.call(this), this.packer = new d, this.shiftPacker = new d, this.isEnabled = !0, this.dragItemCount = 0;
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element)
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                a.itemDragEnd(this.element)
            }
        }, this.handleUIDraggable = {
            start: function(b, c) {
                c && a.itemDragStart(b.currentTarget)
            },
            drag: function(b, c) {
                c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
            },
            stop: function(b, c) {
                c && a.itemDragEnd(b.currentTarget)
            }
        }
    }, j._resetLayout = function() {
        this.getSize(), this._getMeasurements();
        var a, b, c;
        this._getOption("horizontal") ? (a = 1 / 0, b = this.size.innerHeight + this.gutter, c = "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter, b = 1 / 0, c = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = a, this.packer.height = this.shiftPacker.height = b, this.packer.sortDirection = this.shiftPacker.sortDirection = c, this.packer.reset(), this.maxY = 0, this.maxX = 0
    }, j._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
    }, j._getItemLayoutPosition = function(a) {
        if (this._setRectSize(a.element, a.rect), this.isShifting || this.dragItemCount > 0) {
            var b = this._getPackMethod();
            this.packer[b](a.rect)
        } else this.packer.pack(a.rect);
        return this._setMaxXY(a.rect), a.rect
    }, j.shiftLayout = function() {
        this.isShifting = !0, this.layout(), delete this.isShifting
    }, j._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }, j._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
    }, j._setRectSize = function(b, c) {
        var d = a(b),
            e = d.outerWidth,
            f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
    }, j._applyGridGutter = function(a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
            d = c && 1 > c ? "round" : "ceil";
        return a = Math[d](a / b) * b
    }, j._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }, j._manageStamp = function(a) {
        var b, d = this.getItem(a);
        if (d && d.isPlacing) b = d.rect;
        else {
            var e = this._getElementOffset(a);
            b = new c({
                x: this._getOption("originLeft") ? e.left : e.right,
                y: this._getOption("originTop") ? e.top : e.bottom
            })
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
    }, j.sortItemsByPosition = function() {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a)
    }, j.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this.stamp(d.element), d.enablePlacing(), this.updateShiftTargets(d), b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, this.shift(d, b, c), this._bindFitEvents(d), d.moveTo(d.rect.x, d.rect.y), this.shiftLayout(), this.unstamp(d.element), this.sortItemsByPosition(), d.disablePlacing())
    }, j._bindFitEvents = function(a) {
        function b() {
            d++, 2 == d && c.dispatchEvent("fitComplete", null, [a])
        }
        var c = this,
            d = 0;
        a.once("layout", b), this.once("layoutComplete", b)
    }, j.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }, j.needsResizeLayout = function() {
        var b = a(this.element),
            c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c]
    }, j.resizeShiftPercentLayout = function() {
        var b = this._getItemsForLayout(this.items),
            c = this._getOption("horizontal"),
            d = c ? "y" : "x",
            e = c ? "height" : "width",
            f = c ? "rowHeight" : "columnWidth",
            g = c ? "innerHeight" : "innerWidth",
            h = this[f];
        if (h = h && h + this.gutter) {
            this._getMeasurements();
            var i = this[f] + this.gutter;
            b.forEach(function(a) {
                var b = Math.round(a.rect[d] / h);
                a.rect[d] = b * i
            })
        } else {
            var j = a(this.element)[g] + this.gutter,
                k = this.packer[e];
            b.forEach(function(a) {
                a.rect[d] = a.rect[d] / k * j
            })
        }
        this.shiftLayout()
    }, j.itemDragStart = function(a) {
        if (this.isEnabled) {
            this.stamp(a);
            var b = this.getItem(a);
            b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b))
        }
    }, j.updateShiftTargets = function(a) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var b = this._getOption("originLeft"),
            d = this._getOption("originTop");
        this.stamps.forEach(function(a) {
            var e = this.getItem(a);
            if (!e || !e.isPlacing) {
                var f = this._getElementOffset(a),
                    g = new c({
                        x: b ? f.left : f.right,
                        y: d ? f.top : f.bottom
                    });
                this._setRectSize(a, g), this.shiftPacker.placed(g)
            }
        }, this);
        var e = this._getOption("horizontal"),
            f = e ? "rowHeight" : "columnWidth",
            g = e ? "height" : "width";
        this.shiftTargetKeys = [], this.shiftTargets = [];
        var h, i = this[f];
        if (i = i && i + this.gutter) {
            var j = Math.ceil(a.rect[g] / i),
                k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
            h = (k - j) * i;
            for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h)
        } else h = this.shiftPacker[g] + this.gutter - a.rect[g], this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items),
            n = this._getPackMethod();
        m.forEach(function(a) {
            var b = a.rect;
            this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
            var c = e ? b.x + b.width : b.x,
                d = e ? b.y : b.y + b.height;
            if (this._addShiftTarget(c, d, h), i)
                for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
                    var k = e ? c : b.x + i * j,
                        l = e ? b.y + i * j : d;
                    this._addShiftTarget(k, l, h)
                }
        }, this)
    }, j._addShiftTarget = function(a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && d > c)) {
            var e = a + "," + b,
                f = -1 != this.shiftTargetKeys.indexOf(e);
            f || (this.shiftTargetKeys.push(e), this.shiftTargets.push({
                x: a,
                y: b
            }))
        }
    }, j.shift = function(a, b, c) {
        var d, e = 1 / 0,
            f = {
                x: b,
                y: c
            };
        this.shiftTargets.forEach(function(a) {
            var b = h(a, f);
            e > b && (d = a, e = b)
        }), a.rect.x = d.x, a.rect.y = d.y
    };
    var k = 120;
    j.itemDragMove = function(a, b, c) {
        function d() {
            f.shift(e, b, c), e.positionDropPlaceholder(), f.layout()
        }
        var e = this.isEnabled && this.getItem(a);
        if (e) {
            b -= this.size.paddingLeft, c -= this.size.paddingTop;
            var f = this,
                g = new Date;
            this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(d, k)) : (d(), this._itemDragTime = g)
        }
    }, j.itemDragEnd = function(a) {
        function b() {
            d++, 2 == d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), e.dispatchEvent("dragItemPositioned", null, [c]))
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
            clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
            var d = 0,
                e = this;
            c.once("layout", b), this.once("layoutComplete", b), c.moveTo(c.rect.x, c.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), c.disablePlacing(), this.unstamp(c.element)
        }
    }, j.bindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "on")
    }, j.unbindDraggabillyEvents = function(a) {
        this._bindDraggabillyEvents(a, "off")
    }, j._bindDraggabillyEvents = function(a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd)
    }, j.bindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "on")
    }, j.unbindUIDraggableEvents = function(a) {
        this._bindUIDraggableEvents(a, "off")
    }, j._bindUIDraggableEvents = function(a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop)
    };
    var l = j.destroy;
    return j.destroy = function() {
        l.apply(this, arguments), this.isEnabled = !1
    }, i.Rect = c, i.Packer = d, i
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], b) : "object" == typeof module && module.exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")) : b(a.Isotope.LayoutMode, a.Packery)
}(window, function(a, b) {
    var c = a.create("packery"),
        d = c.prototype,
        e = {
            _getElementOffset: !0,
            _getMeasurement: !0
        };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function() {
        this.packer = this.packer || new b.Packer, this.shiftPacker = this.shiftPacker || new b.Packer, g.apply(this, arguments)
    };
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect, h.call(this, a)
    };
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function() {
        return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this)
    };
    var j = d._getOption;
    return d._getOption = function(a) {
        return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.isotope, arguments)
    }, c
});;
(function($, window, document, undefined) {
    var defaults = {
        bounds: true,
        strictBounds: false,
        country: null,
        map: false,
        details: false,
        detailsAttribute: "name",
        detailsScope: null,
        autoselect: true,
        location: false,
        mapOptions: {
            zoom: 14,
            scrollwheel: false,
            mapTypeId: "roadmap"
        },
        markerOptions: {
            draggable: false
        },
        maxZoom: 16,
        types: ["geocode"],
        blur: false,
        geocodeAfterResult: false,
        restoreValueAfterBlur: false
    };
    var componentTypes = ("street_address route intersection political " + "country administrative_area_level_1 administrative_area_level_2 " + "administrative_area_level_3 colloquial_area locality sublocality " + "neighborhood premise subpremise postal_code natural_feature airport " + "park point_of_interest post_box street_number floor room " + "lat lng viewport location " + "formatted_address location_type bounds").split(" ");
    var placesDetails = ("id place_id url website vicinity reference name rating " + "international_phone_number icon formatted_phone_number").split(" ");

    function GeoComplete(input, options) {
        this.options = $.extend(true, {}, defaults, options);
        if (options && options.types) {
            this.options.types = options.types
        }
        this.input = input;
        this.$input = $(input);
        this._defaults = defaults;
        this._name = "geocomplete";
        this.init()
    }
    $.extend(GeoComplete.prototype, {
        init: function() {
            this.initMap();
            this.initMarker();
            this.initGeocoder();
            this.initDetails();
            this.initLocation()
        },
        initMap: function() {
            if (!this.options.map) {
                return
            }
            if (typeof this.options.map.setCenter == "function") {
                this.map = this.options.map;
                return
            }
            this.map = new google.maps.Map($(this.options.map)[0], this.options.mapOptions);
            google.maps.event.addListener(this.map, "click", $.proxy(this.mapClicked, this));
            google.maps.event.addListener(this.map, "dragend", $.proxy(this.mapDragged, this));
            google.maps.event.addListener(this.map, "idle", $.proxy(this.mapIdle, this));
            google.maps.event.addListener(this.map, "zoom_changed", $.proxy(this.mapZoomed, this))
        },
        initMarker: function() {
            if (!this.map) {
                return
            }
            var options = $.extend(this.options.markerOptions, {
                map: this.map
            });
            if (options.disabled) {
                return
            }
            this.marker = new google.maps.Marker(options);
            google.maps.event.addListener(this.marker, "dragend", $.proxy(this.markerDragged, this))
        },
        initGeocoder: function() {
            var selected = false;
            var options = {
                types: this.options.types,
                bounds: this.options.bounds === true ? null : this.options.bounds,
                componentRestrictions: this.options.componentRestrictions,
                strictBounds: this.options.strictBounds
            };
            if (this.options.country) {
                options.componentRestrictions = {
                    country: this.options.country
                }
            }
            this.autocomplete = new google.maps.places.Autocomplete(this.input, options);
            this.geocoder = new google.maps.Geocoder;
            if (this.map && this.options.bounds === true) {
                this.autocomplete.bindTo("bounds", this.map)
            }
            google.maps.event.addListener(this.autocomplete, "place_changed", $.proxy(this.placeChanged, this));
            this.$input.on("keypress." + this._name, function(event) {
                if (event.keyCode === 13) {
                    return false
                }
            });
            if (this.options.geocodeAfterResult === true) {
                this.$input.bind("keypress." + this._name, $.proxy(function() {
                    if (event.keyCode != 9 && this.selected === true) {
                        this.selected = false
                    }
                }, this))
            }
            this.$input.bind("geocode." + this._name, $.proxy(function() {
                this.find()
            }, this));
            this.$input.bind("geocode:result." + this._name, $.proxy(function() {
                this.lastInputVal = this.$input.val()
            }, this));
            if (this.options.blur === true) {
                this.$input.on("blur." + this._name, $.proxy(function() {
                    if (this.options.geocodeAfterResult === true && this.selected === true) {
                        return
                    }
                    if (this.options.restoreValueAfterBlur === true && this.selected === true) {
                        setTimeout($.proxy(this.restoreLastValue, this), 0)
                    } else {
                        this.find()
                    }
                }, this))
            }
        },
        initDetails: function() {
            if (!this.options.details) {
                return
            }
            if (this.options.detailsScope) {
                var $details = $(this.input).parents(this.options.detailsScope).find(this.options.details)
            } else {
                var $details = $(this.options.details)
            }
            var attribute = this.options.detailsAttribute,
                details = {};

            function setDetail(value) {
                details[value] = $details.find("[" + attribute + "=" + value + "]")
            }
            $.each(componentTypes, function(index, key) {
                setDetail(key);
                setDetail(key + "_short")
            });
            $.each(placesDetails, function(index, key) {
                setDetail(key)
            });
            this.$details = $details;
            this.details = details
        },
        initLocation: function() {
            var location = this.options.location,
                latLng;
            if (!location) {
                return
            }
            if (typeof location == "string") {
                this.find(location);
                return
            }
            if (location instanceof Array) {
                latLng = new google.maps.LatLng(location[0], location[1])
            }
            if (location instanceof google.maps.LatLng) {
                latLng = location
            }
            if (latLng) {
                if (this.map) {
                    this.map.setCenter(latLng)
                }
                if (this.marker) {
                    this.marker.setPosition(latLng)
                }
            }
        },
        destroy: function() {
            if (this.map) {
                google.maps.event.clearInstanceListeners(this.map);
                google.maps.event.clearInstanceListeners(this.marker)
            }
            this.autocomplete.unbindAll();
            google.maps.event.clearInstanceListeners(this.autocomplete);
            google.maps.event.clearInstanceListeners(this.input);
            this.$input.removeData();
            this.$input.off(this._name);
            this.$input.unbind("." + this._name)
        },
        find: function(address) {
            this.geocode({
                address: address || this.$input.val()
            })
        },
        geocode: function(request) {
            if (!request.address) {
                return
            }
            if (this.options.bounds && !request.bounds) {
                if (this.options.bounds === true) {
                    request.bounds = this.map && this.map.getBounds()
                } else {
                    request.bounds = this.options.bounds
                }
            }
            if (this.options.country) {
                request.region = this.options.country
            }
            this.geocoder.geocode(request, $.proxy(this.handleGeocode, this))
        },
        selectFirstResult: function() {
            var selected = "";
            if ($(".pac-item-selected")[0]) {
                selected = "-selected"
            }
            var $span1 = $(".pac-container:visible .pac-item" + selected + ":first span:nth-child(2)").text();
            var $span2 = $(".pac-container:visible .pac-item" + selected + ":first span:nth-child(3)").text();
            var firstResult = $span1;
            if ($span2) {
                firstResult += " - " + $span2
            }
            this.$input.val(firstResult);
            return firstResult
        },
        restoreLastValue: function() {
            if (this.lastInputVal) {
                this.$input.val(this.lastInputVal)
            }
        },
        handleGeocode: function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var result = results[0];
                this.$input.val(result.formatted_address);
                this.update(result);
                if (results.length > 1) {
                    this.trigger("geocode:multiple", results)
                }
            } else {
                this.trigger("geocode:error", status)
            }
        },
        trigger: function(event, argument) {
            this.$input.trigger(event, [argument])
        },
        center: function(geometry) {
            if (geometry.viewport) {
                this.map.fitBounds(geometry.viewport);
                if (this.map.getZoom() > this.options.maxZoom) {
                    this.map.setZoom(this.options.maxZoom)
                }
            } else {
                this.map.setZoom(this.options.maxZoom);
                this.map.setCenter(geometry.location)
            }
            if (this.marker) {
                this.marker.setPosition(geometry.location);
                this.marker.setAnimation(this.options.markerOptions.animation)
            }
        },
        update: function(result) {
            if (this.map) {
                this.center(result.geometry)
            }
            if (this.$details) {
                this.fillDetails(result)
            }
            this.trigger("geocode:result", result)
        },
        fillDetails: function(result) {
            var data = {},
                geometry = result.geometry,
                viewport = geometry.viewport,
                bounds = geometry.bounds;
            $.each(result.address_components, function(index, object) {
                var name = object.types[0];
                $.each(object.types, function(index, name) {
                    data[name] = object.long_name;
                    data[name + "_short"] = object.short_name
                })
            });
            $.each(placesDetails, function(index, key) {
                data[key] = result[key]
            });
            $.extend(data, {
                formatted_address: result.formatted_address,
                location_type: geometry.location_type || "PLACES",
                viewport: viewport,
                bounds: bounds,
                location: geometry.location,
                lat: geometry.location.lat(),
                lng: geometry.location.lng()
            });
            $.each(this.details, $.proxy(function(key, $detail) {
                var value = data[key];
                this.setDetail($detail, value)
            }, this));
            this.data = data
        },
        setDetail: function($element, value) {
            if (value === undefined) {
                value = ""
            } else if (typeof value.toUrlValue == "function") {
                value = value.toUrlValue()
            }
            if ($element.is(":input")) {
                $element.val(value)
            } else {
                $element.text(value)
            }
        },
        markerDragged: function(event) {
            this.trigger("geocode:dragged", event.latLng)
        },
        mapClicked: function(event) {
            this.trigger("geocode:click", event.latLng)
        },
        mapDragged: function(event) {
            this.trigger("geocode:mapdragged", this.map.getCenter())
        },
        mapIdle: function(event) {
            this.trigger("geocode:idle", this.map.getCenter())
        },
        mapZoomed: function(event) {
            this.trigger("geocode:zoom", this.map.getZoom())
        },
        resetMarker: function() {
            this.marker.setPosition(this.data.location);
            this.setDetail(this.details.lat, this.data.location.lat());
            this.setDetail(this.details.lng, this.data.location.lng())
        },
        placeChanged: function() {
            var place = this.autocomplete.getPlace();
            this.selected = true;
            if (!place.geometry) {
                if (this.options.autoselect) {
                    var autoSelection = this.selectFirstResult();
                    this.find(autoSelection)
                }
            } else {
                this.update(place)
            }
        }
    });
    $.fn.geocomplete = function(options) {
        var attribute = "plugin_geocomplete";
        if (typeof options == "string") {
            var instance = $(this).data(attribute) || $(this).geocomplete().data(attribute),
                prop = instance[options];
            if (typeof prop == "function") {
                prop.apply(instance, Array.prototype.slice.call(arguments, 1));
                return $(this)
            } else {
                if (arguments.length == 2) {
                    prop = arguments[1]
                }
                return prop
            }
        } else {
            return this.each(function() {
                var instance = $.data(this, attribute);
                if (!instance) {
                    instance = new GeoComplete(this, options);
                    $.data(this, attribute, instance)
                }
            })
        }
    }
})(jQuery, window, document);;
/*! http://keith-wood.name/countdown.html
Countdown for jQuery v2.1.0.
Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2008.
Available under the MIT (http://keith-wood.name/licence.html) license.
Please attribute the author if you use it. */
! function(a) {
    "use strict";
    var b = "countdown",
        c = 0,
        d = 1,
        e = 2,
        f = 3,
        g = 4,
        h = 5,
        i = 6;
    a.JQPlugin.createPlugin({
        name: b,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _rtlClass: b + "-rtl",
        _sectionClass: b + "-section",
        _amountClass: b + "-amount",
        _periodClass: b + "-period",
        _rowClass: b + "-row",
        _holdingClass: b + "-holding",
        _showClass: b + "-show",
        _descrClass: b + "-descr",
        _timerElems: [],
        _init: function() {
            function b(a) {
                var h = a < 1e12 ? e ? window.performance.now() + window.performance.timing.navigationStart : d() : a || d();
                h - g >= 1e3 && (c._updateElems(), g = h), f(b)
            }
            var c = this;
            this._super(), this._serverSyncs = [];
            var d = "function" == typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                },
                e = window.performance && "function" == typeof window.performance.now,
                f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                g = 0;
            !f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null, a.countdown._timer = setInterval(function() {
                c._updateElems()
            }, 1e3)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(), f(b))
        },
        UTCDate: function(a, b, c, d, e, f, g, h) {
            "object" == typeof b && b instanceof Date && (h = b.getMilliseconds(), g = b.getSeconds(), f = b.getMinutes(), e = b.getHours(), d = b.getDate(), c = b.getMonth(), b = b.getFullYear());
            var i = new Date;
            return i.setUTCFullYear(b), i.setUTCDate(1), i.setUTCMonth(c || 0), i.setUTCDate(d || 1), i.setUTCHours(e || 0), i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)), i.setUTCSeconds(g || 0), i.setUTCMilliseconds(h || 0), i
        },
        periodsToSeconds: function(a) {
            return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
        },
        resync: function() {
            var b = this;
            a("." + this._getMarker()).each(function() {
                var c = a.data(this, b.name);
                if (c.options.serverSync) {
                    for (var d = null, e = 0; e < b._serverSyncs.length; e++)
                        if (b._serverSyncs[e][0] === c.options.serverSync) {
                            d = b._serverSyncs[e];
                            break
                        } if (b._eqNull(d[2])) {
                        var f = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(this, []) : null;
                        d[2] = (f ? (new Date).getTime() - f.getTime() : 0) - d[1]
                    }
                    c._since && c._since.setMilliseconds(c._since.getMilliseconds() + d[2]), c._until.setMilliseconds(c._until.getMilliseconds() + d[2])
                }
            });
            for (var c = 0; c < b._serverSyncs.length; c++) b._eqNull(b._serverSyncs[c][2]) || (b._serverSyncs[c][1] += b._serverSyncs[c][2], delete b._serverSyncs[c][2])
        },
        _instSettings: function(a, b) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(a) {
            this._hasElem(a) || this._timerElems.push(a)
        },
        _hasElem: function(b) {
            return a.inArray(b, this._timerElems) > -1
        },
        _removeElem: function(b) {
            this._timerElems = a.map(this._timerElems, function(a) {
                return a === b ? null : a
            })
        },
        _updateElems: function() {
            for (var a = this._timerElems.length - 1; a >= 0; a--) this._updateCountdown(this._timerElems[a])
        },
        _optionsChanged: function(b, c, d) {
            d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(c.options, d);
            var e = c.options.timezone !== d.timezone;
            a.extend(c.options, d), this._adjustSettings(b, c, !this._eqNull(d.until) || !this._eqNull(d.since) || e);
            var f = new Date;
            (c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]), this._updateCountdown(b, c)
        },
        _updateCountdown: function(b, c) {
            if (b = b.jquery ? b : a(b), c = c || this._getInst(b)) {
                if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL), "pause" !== c._hold && a.isFunction(c.options.onTick)) {
                    var d = "lap" !== c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
                    1 !== c.options.tickInterval && this.periodsToSeconds(d) % c.options.tickInterval !== 0 || c.options.onTick.apply(b[0], [d])
                }
                var e = "pause" !== c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime());
                if (e && !c._expiring) {
                    if (c._expiring = !0, this._hasElem(b[0]) || c.options.alwaysExpire) {
                        if (this._removeElem(b[0]), a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []), c.options.expiryText) {
                            var f = c.options.layout;
                            c.options.layout = c.options.expiryText, this._updateCountdown(b[0], c), c.options.layout = f
                        }
                        c.options.expiryUrl && (window.location = c.options.expiryUrl)
                    }
                    c._expiring = !1
                } else "pause" === c._hold && this._removeElem(b[0])
            }
        },
        _resetExtraLabels: function(a, b) {
            var c = null;
            for (c in b) c.match(/[Ll]abels[02-9]|compactLabels1/) && (a[c] = b[c]);
            for (c in a) c.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof b[c] && (a[c] = null)
        },
        _eqNull: function(a) {
            return "undefined" == typeof a || null === a
        },
        _adjustSettings: function(b, c, d) {
            for (var e = null, f = 0; f < this._serverSyncs.length; f++)
                if (this._serverSyncs[f][0] === c.options.serverSync) {
                    e = this._serverSyncs[f][1];
                    break
                } var g = null,
                h = null;
            if (this._eqNull(e)) {
                var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null;
                g = new Date, h = i ? g.getTime() - i.getTime() : 0, this._serverSyncs.push([c.options.serverSync, h])
            } else g = new Date, h = c.options.serverSync ? e : 0;
            var j = c.options.timezone;
            j = this._eqNull(j) ? -g.getTimezoneOffset() : j, (d || !d && this._eqNull(c._until) && this._eqNull(c._since)) && (c._since = c.options.since, this._eqNull(c._since) || (c._since = this.UTCDate(j, this._determineTime(c._since, null)), c._since && h && c._since.setMilliseconds(c._since.getMilliseconds() + h)), c._until = this.UTCDate(j, this._determineTime(c.options.until, g)), h && c._until.setMilliseconds(c._until.getMilliseconds() + h)), c._show = this._determineShow(c)
        },
        _preDestroy: function(a, b) {
            this._removeElem(a[0]), a.empty()
        },
        pause: function(a) {
            this._hold(a, "pause")
        },
        lap: function(a) {
            this._hold(a, "lap")
        },
        resume: function(a) {
            this._hold(a, null)
        },
        toggle: function(b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "pause"](b)
        },
        toggleLap: function(b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "lap"](b)
        },
        _hold: function(b, c) {
            var d = a.data(b, this.name);
            if (d) {
                if ("pause" === d._hold && !c) {
                    d._periods = d._savePeriods;
                    var e = d._since ? "-" : "+";
                    d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"), this._addElem(b)
                }
                d._hold = c, d._savePeriods = "pause" === c ? d._periods : null, a.data(b, this.name, d), this._updateCountdown(b, d)
            }
        },
        getTimes: function(b) {
            var c = a.data(b, this.name);
            return c ? "pause" === c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
        },
        _determineTime: function(a, b) {
            var c = this,
                d = function(a) {
                    var b = new Date;
                    return b.setTime(b.getTime() + 1e3 * a), b
                },
                e = function(a) {
                    a = a.toLowerCase();
                    for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k;) {
                        switch (k[2] || "s") {
                            case "s":
                                i += parseInt(k[1], 10);
                                break;
                            case "m":
                                h += parseInt(k[1], 10);
                                break;
                            case "h":
                                g += parseInt(k[1], 10);
                                break;
                            case "d":
                                f += parseInt(k[1], 10);
                                break;
                            case "w":
                                f += 7 * parseInt(k[1], 10);
                                break;
                            case "o":
                                e += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e));
                                break;
                            case "y":
                                d += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e))
                        }
                        k = j.exec(a)
                    }
                    return new Date(d, e, f, g, h, i, 0)
                },
                f = this._eqNull(a) ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
            return f && f.setMilliseconds(0), f
        },
        _getDaysInMonth: function(a, b) {
            return 32 - new Date(a, b, 32).getDate()
        },
        _normalLabels: function(a) {
            return a
        },
        _generateHTML: function(b) {
            var j = this;
            b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
            var k = !1,
                l = 0,
                m = b.options.significant,
                n = a.extend({}, b._show),
                o = null;
            for (o = c; o <= i; o++) k = k || "?" === b._show[o] && b._periods[o] > 0, n[o] = "?" !== b._show[o] || k ? b._show[o] : null, l += n[o] ? 1 : 0, m -= b._periods[o] > 0 ? 1 : 0;
            var p = [!1, !1, !1, !1, !1, !1, !1];
            for (o = i; o >= c; o--) b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0, m--));
            var q = b.options.compact ? b.options.compactLabels : b.options.labels,
                r = b.options.whichLabels || this._normalLabels,
                s = function(a) {
                    var c = b.options["compactLabels" + r(b._periods[a])];
                    return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
                },
                t = b.options.padZeroes ? 2 : 1,
                u = function(a) {
                    var c = b.options["labels" + r(b._periods[a])];
                    return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span>" : ""
                };
            return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
        },
        _buildLayout: function(b, j, k, l, m, n) {
            for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function(a) {
                    return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
                }, r = function(a, c) {
                    return b.options.digits[Math.floor(a / c) % 10]
                }, s = {
                    desc: b.options.description,
                    sep: b.options.timeSeparator,
                    yl: q(c),
                    yn: this._minDigits(b, b._periods[c], 1),
                    ynn: this._minDigits(b, b._periods[c], 2),
                    ynnn: this._minDigits(b, b._periods[c], 3),
                    y1: r(b._periods[c], 1),
                    y10: r(b._periods[c], 10),
                    y100: r(b._periods[c], 100),
                    y1000: r(b._periods[c], 1e3),
                    ol: q(d),
                    on: this._minDigits(b, b._periods[d], 1),
                    onn: this._minDigits(b, b._periods[d], 2),
                    onnn: this._minDigits(b, b._periods[d], 3),
                    o1: r(b._periods[d], 1),
                    o10: r(b._periods[d], 10),
                    o100: r(b._periods[d], 100),
                    o1000: r(b._periods[d], 1e3),
                    wl: q(e),
                    wn: this._minDigits(b, b._periods[e], 1),
                    wnn: this._minDigits(b, b._periods[e], 2),
                    wnnn: this._minDigits(b, b._periods[e], 3),
                    w1: r(b._periods[e], 1),
                    w10: r(b._periods[e], 10),
                    w100: r(b._periods[e], 100),
                    w1000: r(b._periods[e], 1e3),
                    dl: q(f),
                    dn: this._minDigits(b, b._periods[f], 1),
                    dnn: this._minDigits(b, b._periods[f], 2),
                    dnnn: this._minDigits(b, b._periods[f], 3),
                    d1: r(b._periods[f], 1),
                    d10: r(b._periods[f], 10),
                    d100: r(b._periods[f], 100),
                    d1000: r(b._periods[f], 1e3),
                    hl: q(g),
                    hn: this._minDigits(b, b._periods[g], 1),
                    hnn: this._minDigits(b, b._periods[g], 2),
                    hnnn: this._minDigits(b, b._periods[g], 3),
                    h1: r(b._periods[g], 1),
                    h10: r(b._periods[g], 10),
                    h100: r(b._periods[g], 100),
                    h1000: r(b._periods[g], 1e3),
                    ml: q(h),
                    mn: this._minDigits(b, b._periods[h], 1),
                    mnn: this._minDigits(b, b._periods[h], 2),
                    mnnn: this._minDigits(b, b._periods[h], 3),
                    m1: r(b._periods[h], 1),
                    m10: r(b._periods[h], 10),
                    m100: r(b._periods[h], 100),
                    m1000: r(b._periods[h], 1e3),
                    sl: q(i),
                    sn: this._minDigits(b, b._periods[i], 1),
                    snn: this._minDigits(b, b._periods[i], 2),
                    snnn: this._minDigits(b, b._periods[i], 3),
                    s1: r(b._periods[i], 1),
                    s10: r(b._periods[i], 10),
                    s100: r(b._periods[i], 100),
                    s1000: r(b._periods[i], 1e3)
                }, t = k, u = c; u <= i; u++) {
                var v = "yowdhms".charAt(u),
                    w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
                t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
            }
            return a.each(s, function(a, b) {
                var c = new RegExp("\\{" + a + "\\}", "g");
                t = t.replace(c, b)
            }), t
        },
        _minDigits: function(a, b, c) {
            return b = "" + b, b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b, this._translateDigits(a, b.substr(b.length - c)))
        },
        _translateDigits: function(a, b) {
            return ("" + b).replace(/[0-9]/g, function(b) {
                return a.options.digits[b]
            })
        },
        _determineShow: function(a) {
            var b = a.options.format,
                j = [];
            return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null, j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null, j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null, j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null, j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null, j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null, j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null, j
        },
        _calculatePeriods: function(a, b, j, k) {
            a._now = k, a._now.setMilliseconds(0);
            var l = new Date(a._now.getTime());
            a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()), k.getTime() > a._until.getTime() && (a._now = k = l));
            var m = [0, 0, 0, 0, 0, 0, 0];
            if (b[c] || b[d]) {
                var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()),
                    o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
                    p = l.getDate() === k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o),
                    q = function(a) {
                        return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
                    },
                    r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
                m[c] = b[c] ? Math.floor(r / 12) : 0, m[d] = b[d] ? r - 12 * m[c] : 0, k = new Date(k.getTime());
                var s = k.getDate() === n,
                    t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
                k.getDate() > t && k.setDate(t), k.setFullYear(k.getFullYear() + m[c]), k.setMonth(k.getMonth() + m[d]), s && k.setDate(t)
            }
            var u = Math.floor((l.getTime() - k.getTime()) / 1e3),
                v = null,
                w = function(a, c) {
                    m[a] = b[a] ? Math.floor(u / c) : 0, u -= m[a] * c
                };
            if (w(e, 604800), w(f, 86400), w(g, 3600), w(h, 60), w(i, 1), u > 0 && !a._since) {
                var x = [1, 12, 4.3482, 7, 24, 60, 60],
                    y = i,
                    z = 1;
                for (v = i; v >= c; v--) b[v] && (m[y] >= z && (m[y] = 0, u = 1), u > 0 && (m[v]++, u = 0, y = v, z = 1)), z *= x[v]
            }
            if (j)
                for (v = c; v <= i; v++) j && m[v] ? j-- : j || (m[v] = 0);
            return m
        }
    })
}(jQuery);;
(function($) {
    "use strict";
    $.fn.countTo = function(options) {
        options = $.extend({}, $.fn.countTo.defaults, options || {});
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;
        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));
                if (typeof(options.onUpdate) === 'function') {
                    options.onUpdate.call(_this, value);
                }
                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;
                    if (typeof(options.onComplete) === 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    };
})(jQuery);;
(function(a) {
    "use strict";
    a.fn.absoluteCounter = function(b) {
        b = a.extend({}, a.fn.absoluteCounter.defaults, b || {});
        return a(this).each(function() {
            var d = this,
                g = b.speed,
                f = b.setStyles,
                e = b.delayedStart,
                c = b.fadeInDelay;
            if (f) {
                a(d).css({
                    display: "block",
                    position: "relative",
                    overflow: "hidden"
                }).addClass('animated')
            }
            a(d).css("opacity", "0");
            a(d).animate({
                opacity: 0
            }, e, function() {
                var l = a(d).text();
                a(d).text("");
                for (var k = 0; k < l.length; k++) {
                    var n = l.charAt(k);
                    var m = "";
                    if (parseInt(n, 10) >= 0) {
                        m = '<span class="onedigit p' + (l.length - k) + " d" + n + '">';
                        for (var h = 0; h <= parseInt(n, 10); h++) {
                            m += '<span class="n' + (h % 10) + '">' + (h % 10) + "</span>"
                        }
                        m += "</span>"
                    } else {
                        m = '<span class="onedigit p' + (l.length - k) + ' char"><span class="c">' + n + "</span></span>"
                    }
                    a(d).append(m)
                }
                a(d).animate({
                    opacity: 1
                }, c);
                a("span.onedigit", d).each(function(i, o) {
                    if (f) {
                        a(o).css({
                            "float": "left",
                            position: "relative"
                        });
                        a("span", a(o)).css({
                            display: "block"
                        })
                    }
                    var p = a("span", a(o)).length,
                        j = a(d).height();
                    a(o).css({
                        height: (p * j) + "px",
                        top: "0"
                    });
                    a("span", a(o)).css({
                        height: j + "px"
                    });
                    a(o).animate({
                        top: -1 * ((p - 1) * j) + "px"
                    }, g, function() {
                        if (typeof(b.onComplete) === "function") {
                            b.onComplete.call(d)
                        }
                    })
                })
            })
        })
    };
    a.fn.absoluteCounter.defaults = {
        speed: 2000,
        setStyles: true,
        onComplete: null,
        delayedStart: 0,
        fadeInDelay: 0
    }
}(jQuery));;
! function(t, s, e) {
    "use strict";
    var i = function(t, s) {
        var i = this;
        this.el = t, this.options = {}, Object.keys(r).forEach(function(t) {
            i.options[t] = r[t]
        }), Object.keys(s).forEach(function(t) {
            i.options[t] = s[t]
        }), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.fadeOut = this.options.fadeOut, this.fadeOutClass = this.options.fadeOutClass, this.fadeOutDelay = this.options.fadeOutDelay, e && this.options.stringsElement instanceof e ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    i.prototype = {
        constructor: i,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            var t = this;
            if (this.showCursor === !0 && (this.cursor = s.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) {
                this.strings = [], this.stringsElement.style.display = "none";
                var e = Array.prototype.slice.apply(this.stringsElement.children);
                e.forEach(function(s) {
                    t.strings.push(s.innerHTML)
                })
            }
            this.init()
        },
        typewrite: function(t, s) {
            if (this.stop !== !0) {
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor.classList.remove(this.fadeOutClass));
                var e = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var e = 0,
                        r = t.substr(s);
                    if ("^" === r.charAt(0)) {
                        var o = 1;
                        /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
                    }
                    if ("html" === i.contentType) {
                        var n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";
                            for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
                            s++, a += h
                        }
                    }
                    i.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() {
                                i.backspace(t, s)
                            }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            var e = t.substr(0, s + 1);
                            i.attr ? i.el.setAttribute(i.attr, e) : i.isInput ? i.el.value = e : "html" === i.contentType ? i.el.innerHTML = e : i.el.textContent = e, s++, i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function(t, s) {
            var e = this;
            if (this.stop !== !0) {
                if (this.fadeOut) return void this.initFadeOut();
                var i = Math.round(70 * Math.random()) + this.backSpeed;
                e.timeout = setTimeout(function() {
                    if ("html" === e.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var i = "";
                            "<" !== t.substr(s - 1).charAt(0) && (i -= t.substr(s).charAt(0), s--, !(s < 0)););
                        s--, i += "<"
                    }
                    var r = t.substr(0, s);
                    e.replaceText(r), s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.shuffle && (e.sequence = e.shuffleArray(e.sequence)), e.init()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s))
                }, i)
            }
        },
        initFadeOut: function() {
            return self = this, this.el.className += " " + this.fadeOutClass, this.cursor.className += " " + this.fadeOutClass, setTimeout(function() {
                self.arrayPos++, self.replaceText(""), self.strings.length > self.arrayPos ? self.typewrite(self.strings[self.sequence[self.arrayPos]], 0) : (self.typewrite(self.strings[0], 0), self.arrayPos = 0)
            }, self.fadeOutDelay)
        },
        replaceText: function(t) {
            this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
        },
        shuffleArray: function(t) {
            var s, e, i = t.length;
            if (i)
                for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
            return t
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            this.el.getAttribute("id");
            this.el.textContent = "", "undefined" != typeof this.cursor && "undefined" != typeof this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, i["new"] = function(t, e) {
        var r = Array.prototype.slice.apply(s.querySelectorAll(t));
        r.forEach(function(t) {
            var s = t._typed,
                r = "object" == typeof e && e;
            s && s.reset(), t._typed = s = new i(t, r), "string" == typeof e && s[e]()
        })
    }, e && (e.fn.typed = function(t) {
        return this.each(function() {
            var s = e(this),
                r = s.data("typed"),
                o = "object" == typeof t && t;
            r && r.reset(), s.data("typed", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }), t.Typed = i;
    var r = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window, document, window.jQuery);;
/*!
 * fullPage 2.9.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        l = "." + a,
        r = "fp-responsive",
        s = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        f = "fp-viewing",
        u = "active",
        h = "." + u,
        p = "fp-completely",
        v = "." + p,
        g = ".section",
        m = "fp-section",
        w = "." + m,
        y = w + h,
        S = w + ":first",
        b = w + ":last",
        x = "fp-tableCell",
        C = "." + x,
        T = "fp-auto-height",
        k = "fp-normal-scroll",
        L = "fp-nav",
        A = "#" + L,
        O = "fp-tooltip",
        I = "." + O,
        E = "fp-show-active",
        M = ".slide",
        B = "fp-slide",
        R = "." + B,
        z = R + h,
        H = "fp-slides",
        D = "." + H,
        P = "fp-slidesContainer",
        q = "." + P,
        F = "fp-table",
        V = "fp-slidesNav",
        j = "." + V,
        Y = j + " a",
        N = "fp-controlArrow",
        X = "." + N,
        U = "fp-prev",
        W = "." + U,
        K = N + " " + U,
        _ = X + W,
        Q = "fp-next",
        G = "." + Q,
        J = N + " " + Q,
        Z = X + G,
        $ = e(n),
        ee = e(t);
    e.fn.fullpage = function(N) {
        function W(n, t) {
            n || Zn(0), ot("autoScrolling", n, t);
            var o = e(y);
            N.autoScrolling && !N.scrollBar ? (lt.css({
                overflow: "hidden",
                height: "100%"
            }), Q(Rt.recordHistory, "internal"), gt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && Zn(o.position().top)) : (lt.css({
                overflow: "visible",
                height: "initial"
            }), Q(!1, "internal"), gt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), o.length && lt.scrollTop(o.position().top))
        }

        function Q(e, n) {
            ot("recordHistory", e, n)
        }

        function G(e, n) {
            ot("scrollingSpeed", e, n)
        }

        function ne(e, n) {
            ot("fitToSection", e, n)
        }

        function te(e) {
            N.lockAnchors = e
        }

        function oe(e) {
            e ? (Xn(), Un()) : (Nn(), Wn())
        }

        function ie(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                et(n, t, "m")
            })) : (et(n, "all", "m"), n ? (oe(!0), Kn()) : (oe(!1), _n()))
        }

        function ae(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                et(n, t, "k")
            })) : (et(n, "all", "k"), N.keyboardScrolling = n)
        }

        function le() {
            var n = e(y).prev(w);
            n.length || !N.loopTop && !N.continuousVertical || (n = e(w).last()), n.length && Ne(n, null, !0)
        }

        function re() {
            var n = e(y).next(w);
            n.length || !N.loopBottom && !N.continuousVertical || (n = e(w).first()), n.length && Ne(n, null, !1)
        }

        function se(e, n) {
            G(0, "internal"), ce(e, n), G(Rt.scrollingSpeed, "internal")
        }

        function ce(e, n) {
            var t = Rn(e);
            "undefined" != typeof n ? Hn(e, n) : t.length > 0 && Ne(t)
        }

        function de(e) {
            Ve("right", e)
        }

        function fe(e) {
            Ve("left", e)
        }

        function ue(n) {
            if (!gt.hasClass(c)) {
                wt = !0, mt = $.height(), e(w).each(function() {
                    var n = e(this).find(D),
                        t = e(this).find(R);
                    N.verticalCentered && e(this).find(C).css("height", Mn(e(this)) + "px"), e(this).css("height", mt + "px"), t.length > 1 && mn(n, n.find(z))
                }), N.scrollOverflow && Ct.createScrollBarForAll();
                var t = e(y),
                    o = t.index(w);
                o && se(o + 1), wt = !1, e.isFunction(N.afterResize) && n && N.afterResize.call(gt), e.isFunction(N.afterReBuild) && !n && N.afterReBuild.call(gt)
            }
        }

        function he(n) {
            var t = rt.hasClass(r);
            n ? t || (W(!1, "internal"), ne(!1, "internal"), e(A).hide(), rt.addClass(r), e.isFunction(N.afterResponsive) && N.afterResponsive.call(gt, n)) : t && (W(Rt.autoScrolling, "internal"), ne(Rt.autoScrolling, "internal"), e(A).show(), rt.removeClass(r), e.isFunction(N.afterResponsive) && N.afterResponsive.call(gt, n))
        }

        function pe() {
            N.css3 && (N.css3 = Yn()), N.scrollBar = N.scrollBar || N.hybrid, ge(), me(), ie(!0), W(N.autoScrolling, "internal"), xn(), jn(), "complete" === t.readyState && nn(), $.on("load", nn)
        }

        function ve() {
            $.on("scroll", Ie).on("hashchange", tn).blur(fn).resize(bn), ee.keydown(an).keyup(rn).on("click touchstart", A + " a", un).on("click touchstart", Y, hn).on("click", I, ln), e(w).on("click touchstart", X, dn), N.normalScrollElements && (ee.on("mouseenter touchstart", N.normalScrollElements, function() {
                ie(!1)
            }), ee.on("mouseleave touchend", N.normalScrollElements, function() {
                ie(!0)
            }))
        }

        function ge() {
            var n = gt.find(N.sectionSelector);
            N.anchors.length || (N.anchors = n.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()), N.navigationTooltips.length || (N.navigationTooltips = n.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function me() {
            gt.css({
                height: "100%",
                position: "relative"
            }), gt.addClass(a), e("html").addClass(d), mt = $.height(), gt.removeClass(c), be(), e(w).each(function(n) {
                var t = e(this),
                    o = t.find(R),
                    i = o.length;
                t.data("fp-styles", t.attr("style")), ye(t, n), Se(t, n), i > 0 ? we(t, o, i) : N.verticalCentered && En(t)
            }), N.fixedElements && N.css3 && e(N.fixedElements).appendTo(rt), N.navigation && Ce(), Te(), N.scrollOverflow ? Ct = N.scrollOverflowHandler.init(N) : Ae()
        }

        function we(n, t, o) {
            var i = 100 * o,
                a = 100 / o;
            t.wrapAll('<div class="' + P + '" />'), t.parent().wrap('<div class="' + H + '" />'), n.find(q).css("width", i + "%"), o > 1 && (N.controlArrows && xe(n), N.slidesNavigation && Pn(n, o)), t.each(function(n) {
                e(this).css("width", a + "%"), N.verticalCentered && En(e(this))
            });
            var l = n.find(z);
            l.length && (0 !== e(y).index(w) || 0 === e(y).index(w) && 0 !== l.index()) ? Jn(l, "internal") : t.eq(0).addClass(u)
        }

        function ye(n, t) {
            t || 0 !== e(y).length || n.addClass(u), ut = e(y), n.css("height", mt + "px"), N.paddingTop && n.css("padding-top", N.paddingTop), N.paddingBottom && n.css("padding-bottom", N.paddingBottom), "undefined" != typeof N.sectionsColor[t] && n.css("background-color", N.sectionsColor[t]), "undefined" != typeof N.anchors[t] && n.attr("data-anchor", N.anchors[t])
        }

        function Se(n, t) {
            "undefined" != typeof N.anchors[t] && n.hasClass(u) && An(N.anchors[t], t), N.menu && N.css3 && e(N.menu).closest(l).length && e(N.menu).appendTo(rt)
        }

        function be() {
            gt.find(N.sectionSelector).addClass(m), gt.find(N.slideSelector).addClass(B)
        }

        function xe(e) {
            e.find(D).after('<div class="' + K + '"></div><div class="' + J + '"></div>'), "#fff" != N.controlArrowColor && (e.find(Z).css("border-color", "transparent transparent transparent " + N.controlArrowColor), e.find(_).css("border-color", "transparent " + N.controlArrowColor + " transparent transparent")), N.loopHorizontal || e.find(_).hide()
        }

        function Ce() {
            rt.append('<div id="' + L + '"><ul></ul></div>');
            var n = e(A);
            n.addClass(function() {
                return N.showActiveTooltip ? E + " " + N.navigationPosition : N.navigationPosition
            });
            for (var t = 0; t < e(w).length; t++) {
                var o = "";
                N.anchors.length && (o = N.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    a = N.navigationTooltips[t];
                "undefined" != typeof a && "" !== a && (i += '<div class="' + O + " " + N.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
            }
            e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(y).index(w)).find("a").addClass(u)
        }

        function Te() {
            gt.find('iframe[src*="youtube.com/embed/"]').each(function() {
                ke(e(this), "enablejsapi=1")
            })
        }

        function ke(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Le(t) + n)
        }

        function Le(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Ae() {
            var n = e(y);
            n.addClass(p), Ge(n), Je(n), N.scrollOverflow && N.scrollOverflowHandler.afterLoad(), Oe() && e.isFunction(N.afterLoad) && N.afterLoad.call(n, n.data("anchor"), n.index(w) + 1), e.isFunction(N.afterRender) && N.afterRender.call(gt)
        }

        function Oe() {
            var e = Rn(on().section);
            return !e || e.length && e.index() === ut.index()
        }

        function Ie() {
            var n;
            if (!N.autoScrolling || N.scrollBar) {
                var o = $.scrollTop(),
                    i = Be(o),
                    a = 0,
                    l = o + $.height() / 2,
                    r = rt.height() - $.height() === o,
                    s = t.querySelectorAll(w);
                if (r) a = s.length - 1;
                else if (o)
                    for (var c = 0; c < s.length; ++c) {
                        var d = s[c];
                        d.offsetTop <= l && (a = c)
                    } else a = 0;
                if (Me(i) && (e(y).hasClass(p) || e(y).addClass(p).siblings().removeClass(p)), n = e(s).eq(a), !n.hasClass(u)) {
                    zt = !0;
                    var f, h, v = e(y),
                        g = v.index(w) + 1,
                        m = On(n),
                        S = n.data("anchor"),
                        b = n.index(w) + 1,
                        x = n.find(z);
                    x.length && (h = x.data("anchor"), f = x.index()), St && (n.addClass(u).siblings().removeClass(u), e.isFunction(N.onLeave) && N.onLeave.call(v, g, b, m), e.isFunction(N.afterLoad) && N.afterLoad.call(n, S, b), $e(v), Ge(n), Je(n), An(S, b - 1), N.anchors.length && (ct = S), qn(f, h, S, b)), clearTimeout(At), At = setTimeout(function() {
                        zt = !1
                    }, 100)
                }
                N.fitToSection && (clearTimeout(Ot), Ot = setTimeout(function() {
                    N.fitToSection && e(y).outerHeight() <= mt && Ee()
                }, N.fitToSectionDelay))
            }
        }

        function Ee() {
            St && (wt = !0, Ne(e(y)), wt = !1)
        }

        function Me(n) {
            var t = e(y).position().top,
                o = t + $.height();
            return "up" == n ? o >= $.scrollTop() + $.height() : t <= $.scrollTop()
        }

        function Be(e) {
            var n = e > Ht ? "down" : "up";
            return Ht = e, jt = e, n
        }

        function Re(n) {
            if (xt.m[n]) {
                var t = "down" === n ? re : le;
                if (N.scrollOverflow) {
                    var o = N.scrollOverflowHandler.scrollable(e(y)),
                        i = "down" === n ? "bottom" : "top";
                    if (o.length > 0) {
                        if (!N.scrollOverflowHandler.isScrolled(i, o)) return !0;
                        t()
                    } else t()
                } else t()
            }
        }

        function ze(e) {
            var n = e.originalEvent;
            N.autoScrolling && De(n) && e.preventDefault()
        }

        function He(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(w);
            if (De(t)) {
                N.autoScrolling && n.preventDefault();
                var a = Gn(t);
                qt = a.y, Ft = a.x, i.find(D).length && o.abs(Pt - Ft) > o.abs(Dt - qt) ? !ht && o.abs(Pt - Ft) > $.outerWidth() / 100 * N.touchSensitivity && (Pt > Ft ? xt.m.right && de(i) : xt.m.left && fe(i)) : N.autoScrolling && St && o.abs(Dt - qt) > $.height() / 100 * N.touchSensitivity && (Dt > qt ? Re("down") : qt > Dt && Re("up"))
            }
        }

        function De(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function Pe(e) {
            var n = e.originalEvent;
            if (N.fitToSection && lt.stop(), De(n)) {
                var t = Gn(n);
                Dt = t.y, Pt = t.x
            }
        }

        function qe(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) t += i[a];
            return o.ceil(t / n)
        }

        function Fe(t) {
            var i = (new Date).getTime(),
                a = e(v).hasClass(k);
            if (N.autoScrolling && !ft && !a) {
                t = t || n.event;
                var l = t.wheelDelta || -t.deltaY || -t.detail,
                    r = o.max(-1, o.min(1, l)),
                    s = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    c = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !s;
                bt.length > 149 && bt.shift(), bt.push(o.abs(l)), N.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var d = i - Vt;
                if (Vt = i, d > 200 && (bt = []), St) {
                    var f = qe(bt, 10),
                        u = qe(bt, 70),
                        h = f >= u;
                    h && c && Re(r < 0 ? "down" : "up")
                }
                return !1
            }
            N.fitToSection && lt.stop()
        }

        function Ve(n, t) {
            var o = "undefined" == typeof t ? e(y) : t,
                i = o.find(D),
                a = i.find(R).length;
            if (!(!i.length || ht || a < 2)) {
                var l = i.find(z),
                    r = null;
                if (r = "left" === n ? l.prev(R) : l.next(R), !r.length) {
                    if (!N.loopHorizontal) return;
                    r = "left" === n ? l.siblings(":last") : l.siblings(":first")
                }
                ht = !0, mn(i, r, n)
            }
        }

        function je() {
            e(z).each(function() {
                Jn(e(this), "internal")
            })
        }

        function Ye(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > jt,
                i = t - mt + e.outerHeight(),
                a = N.bigSectionsDestination;
            return e.outerHeight() > mt ? (o || a) && "bottom" !== a || (t = i) : (o || wt && e.is(":last-child")) && (t = i), jt = t, t
        }

        function Ne(n, t, o) {
            if ("undefined" != typeof n) {
                var i, a, l = Ye(n),
                    r = {
                        element: n,
                        callback: t,
                        isMovementUp: o,
                        dtop: l,
                        yMovement: On(n),
                        anchorLink: n.data("anchor"),
                        sectionIndex: n.index(w),
                        activeSlide: n.find(z),
                        activeSection: e(y),
                        leavingSection: e(y).index(w) + 1,
                        localIsResizing: wt
                    };
                r.activeSection.is(n) && !wt || N.scrollBar && $.scrollTop() === r.dtop && !n.hasClass(T) || (r.activeSlide.length && (i = r.activeSlide.data("anchor"), a = r.activeSlide.index()), e.isFunction(N.onLeave) && !r.localIsResizing && N.onLeave.call(r.activeSection, r.leavingSection, r.sectionIndex + 1, r.yMovement) === !1 || (N.autoScrolling && N.continuousVertical && "undefined" != typeof r.isMovementUp && (!r.isMovementUp && "up" == r.yMovement || r.isMovementUp && "down" == r.yMovement) && (r = We(r)), r.localIsResizing || $e(r.activeSection), N.scrollOverflow && N.scrollOverflowHandler.beforeLeave(), n.addClass(u).siblings().removeClass(u), Ge(n), N.scrollOverflow && N.scrollOverflowHandler.onLeave(), St = !1, qn(a, i, r.anchorLink, r.sectionIndex), Xe(r), ct = r.anchorLink, An(r.anchorLink, r.sectionIndex)))
            }
        }

        function Xe(n) {
            if (N.css3 && N.autoScrolling && !N.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                Bn(t, !0), N.scrollingSpeed ? (clearTimeout(kt), kt = setTimeout(function() {
                    _e(n)
                }, N.scrollingSpeed)) : _e(n)
            } else {
                var i = Ue(n);
                e(i.element).animate(i.options, N.scrollingSpeed, N.easing).promise().done(function() {
                    N.scrollBar ? setTimeout(function() {
                        _e(n)
                    }, 30) : _e(n)
                })
            }
        }

        function Ue(e) {
            var n = {};
            return N.autoScrolling && !N.scrollBar ? (n.options = {
                top: -e.dtop
            }, n.element = l) : (n.options = {
                scrollTop: e.dtop
            }, n.element = "html, body"), n
        }

        function We(n) {
            return n.isMovementUp ? e(y).before(n.activeSection.nextAll(w)) : e(y).after(n.activeSection.prevAll(w).get().reverse()), Zn(e(y).position().top), je(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = On(n.element), n.leavingSection = n.activeSection.index(w) + 1, n.sectionIndex = n.element.index(w), n
        }

        function Ke(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(S).before(n.wrapAroundElements) : e(b).after(n.wrapAroundElements), Zn(e(y).position().top), je())
        }

        function _e(n) {
            Ke(n), e.isFunction(N.afterLoad) && !n.localIsResizing && N.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), N.scrollOverflow && N.scrollOverflowHandler.afterLoad(), n.localIsResizing || Je(n.element), n.element.addClass(p).siblings().removeClass(p), St = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function Qe(e, n) {
            e.attr(n, e.data(n)).removeAttr("data-" + n)
        }

        function Ge(n) {
            if (N.lazyLoading) {
                var t, o = en(n);
                o.find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                    if (t = e(this), e.each(["src", "srcset"], function(e, n) {
                            var o = t.attr("data-" + n);
                            "undefined" != typeof o && o && Qe(t, n)
                        }), t.is("source")) {
                        var n = t.closest("video").length ? "video" : "audio";
                        t.closest(n).get(0).load()
                    }
                })
            }
        }

        function Je(n) {
            var t = en(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && Ze(n), n.onload = function() {
                    n.hasAttribute("data-autoplay") && Ze(n)
                }
            })
        }

        function Ze(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function $e(n) {
            var t = en(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function en(n) {
            var t = n.find(z);
            return t.length && (n = e(t)), n
        }

        function nn() {
            var e = on(),
                n = e.section,
                t = e.slide;
            n && (N.animateAnchor ? Hn(n, t) : se(n, t))
        }

        function tn() {
            if (!zt && !N.lockAnchors) {
                var e = on(),
                    n = e.section,
                    t = e.slide,
                    o = "undefined" == typeof ct,
                    i = "undefined" == typeof ct && "undefined" == typeof t && !ht;
                n.length && (n && n !== ct && !o || i || !ht && dt != t) && Hn(n, t)
            }
        }

        function on() {
            var e, t, o = n.location.hash;
            if (o.length) {
                var i = o.replace("#", "").split("/"),
                    a = o.indexOf("#/") > -1;
                e = a ? "/" + i[1] : decodeURIComponent(i[0]);
                var l = a ? i[2] : i[1];
                l && l.length && (t = decodeURIComponent(l))
            }
            return {
                section: e,
                slide: t
            }
        }

        function an(n) {
            clearTimeout(It);
            var t = e(":focus"),
                o = n.which;
            if (9 === o) vn(n);
            else if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && N.keyboardScrolling && N.autoScrolling) {
                var i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(), ft = n.ctrlKey, It = setTimeout(function() {
                    pn(n)
                }, 150)
            }
        }

        function ln() {
            e(this).prev().trigger("click")
        }

        function rn(e) {
            yt && (ft = e.ctrlKey)
        }

        function sn(e) {
            2 == e.which && (Yt = e.pageY, gt.on("mousemove", gn))
        }

        function cn(e) {
            2 == e.which && gt.off("mousemove")
        }

        function dn() {
            var n = e(this).closest(w);
            e(this).hasClass(U) ? xt.m.left && fe(n) : xt.m.right && de(n)
        }

        function fn() {
            yt = !1, ft = !1
        }

        function un(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Ne(e(w).eq(t))
        }

        function hn(n) {
            n.preventDefault();
            var t = e(this).closest(w).find(D),
                o = t.find(R).eq(e(this).closest("li").index());
            mn(t, o)
        }

        function pn(n) {
            var t = n.shiftKey;
            if (St || !([37, 39].indexOf(n.which) < 0)) switch (n.which) {
                case 38:
                case 33:
                    xt.k.up && le();
                    break;
                case 32:
                    if (t && xt.k.up) {
                        le();
                        break
                    }
                    case 40:
                    case 34:
                        xt.k.down && re();
                        break;
                    case 36:
                        xt.k.up && ce(1);
                        break;
                    case 35:
                        xt.k.down && ce(e(w).length);
                        break;
                    case 37:
                        xt.k.left && fe();
                        break;
                    case 39:
                        xt.k.right && de();
                        break;
                    default:
                        return
            }
        }

        function vn(n) {
            function t(e) {
                return e.preventDefault(), s.first().focus()
            }
            var o = n.shiftKey,
                i = e(":focus"),
                a = e(y),
                l = a.find(z),
                r = l.length ? l : a,
                s = r.find(Bt);
            i.length ? i.closest(y, z).length || (i = t(n)) : t(n), (!o && i.is(s.last()) || o && i.is(s.first())) && n.preventDefault()
        }

        function gn(e) {
            St && (e.pageY < Yt && xt.m.up ? le() : e.pageY > Yt && xt.m.down && re()), Yt = e.pageY
        }

        function mn(n, t, o) {
            var i = n.closest(w),
                a = {
                    slides: n,
                    destiny: t,
                    direction: o,
                    destinyPos: t.position(),
                    slideIndex: t.index(),
                    section: i,
                    sectionIndex: i.index(w),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(j),
                    slideAnchor: Vn(t),
                    prevSlide: i.find(z),
                    prevSlideIndex: i.find(z).index(),
                    localIsResizing: wt
                };
            return a.xMovement = In(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (St = !1), N.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(N.onSlideLeave) && N.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.direction, a.slideIndex) === !1 ? void(ht = !1) : (t.addClass(u).siblings().removeClass(u), a.localIsResizing || ($e(a.prevSlide), Ge(t)), !N.loopHorizontal && N.controlArrows && (i.find(_).toggle(0 !== a.slideIndex), i.find(Z).toggle(!t.is(":last-child"))), i.hasClass(u) && !a.localIsResizing && qn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void yn(n, a, !0))
        }

        function wn(n) {
            Sn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(N.afterSlideLoad) && N.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), St = !0, Je(n.destiny)), ht = !1
        }

        function yn(e, n, t) {
            var i = n.destinyPos;
            if (N.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                Cn(e.find(q)).css($n(a)), Lt = setTimeout(function() {
                    t && wn(n)
                }, N.scrollingSpeed, N.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, N.scrollingSpeed, N.easing, function() {
                t && wn(n)
            })
        }

        function Sn(e, n) {
            e.find(h).removeClass(u), e.find("li").eq(n).find("a").addClass(u)
        }

        function bn() {
            if (xn(), pt) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = $.height();
                    o.abs(i - Nt) > 20 * o.max(Nt, i) / 100 && (ue(!0), Nt = i)
                }
            } else clearTimeout(Tt), Tt = setTimeout(function() {
                ue(!0)
            }, 350)
        }

        function xn() {
            var e = N.responsive || N.responsiveWidth,
                n = N.responsiveHeight,
                t = e && $.outerWidth() < e,
                o = n && $.height() < n;
            e && n ? he(t || o) : e ? he(t) : n && he(o)
        }

        function Cn(e) {
            var n = "all " + N.scrollingSpeed + "ms " + N.easingcss3;
            return e.removeClass(s), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function Tn(e) {
            return e.addClass(s)
        }

        function kn(n, t) {
            N.navigation && (e(A).find(h).removeClass(u), n ? e(A).find('a[href="#' + n + '"]').addClass(u) : e(A).find("li").eq(t).find("a").addClass(u))
        }

        function Ln(n) {
            N.menu && (e(N.menu).find(h).removeClass(u), e(N.menu).find('[data-menuanchor="' + n + '"]').addClass(u))
        }

        function An(e, n) {
            Ln(e), kn(e, n)
        }

        function On(n) {
            var t = e(y).index(w),
                o = n.index(w);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function In(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function En(e) {
            e.hasClass(F) || e.addClass(F).wrapInner('<div class="' + x + '" style="height:' + Mn(e) + 'px;" />')
        }

        function Mn(e) {
            var n = mt;
            if (N.paddingTop || N.paddingBottom) {
                var t = e;
                t.hasClass(m) || (t = e.closest(w));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = mt - o
            }
            return n
        }

        function Bn(e, n) {
            n ? Cn(gt) : Tn(gt), gt.css($n(e)), setTimeout(function() {
                gt.removeClass(s)
            }, 10)
        }

        function Rn(n) {
            var t = gt.find(w + '[data-anchor="' + n + '"]');
            if (!t.length) {
                var o = "undefined" != typeof n ? n - 1 : 0;
                t = e(w).eq(o)
            }
            return t
        }

        function zn(e, n) {
            var t = n.find(R + '[data-anchor="' + e + '"]');
            return t.length || (e = "undefined" != typeof e ? e : 0, t = n.find(R).eq(e)), t
        }

        function Hn(e, n) {
            var t = Rn(e);
            if (t.length) {
                var o = zn(n, t);
                e === ct || t.hasClass(u) ? Dn(o) : Ne(t, function() {
                    Dn(o)
                })
            }
        }

        function Dn(e) {
            e.length && mn(e.closest(D), e)
        }

        function Pn(e, n) {
            e.append('<div class="' + V + '"><ul></ul></div>');
            var t = e.find(j);
            t.addClass(N.slidesNavPosition);
            for (var o = 0; o < n; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(u)
        }

        function qn(e, n, t, o) {
            var i = "";
            N.anchors.length && !N.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), dt = n, Fn(i + "/" + n)) : "undefined" != typeof e ? (dt = n, Fn(t)) : Fn(t)), jn()
        }

        function Fn(e) {
            if (N.recordHistory) location.hash = e;
            else if (pt || vt) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function Vn(e) {
            var n = e.data("anchor"),
                t = e.index();
            return "undefined" == typeof n && (n = t), n
        }

        function jn() {
            var n = e(y),
                t = n.find(z),
                o = Vn(n),
                i = Vn(t),
                a = String(o);
            t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            rt[0].className = rt[0].className.replace(l, ""), rt.addClass(f + "-" + a)
        }

        function Yn() {
            var e, o = t.createElement("p"),
                a = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t.body.insertBefore(o, null);
            for (var l in a) o.style[l] !== i && (o.style[l] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[l]));
            return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Nn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", Fe, !1), t.removeEventListener("wheel", Fe, !1), t.removeEventListener("MozMousePixelScroll", Fe, !1)) : t.detachEvent("onmousewheel", Fe)
        }

        function Xn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", Fe, !1) : t[e](o + a, Fe, !1)
        }

        function Un() {
            gt.on("mousedown", sn).on("mouseup", cn)
        }

        function Wn() {
            gt.off("mousedown", sn).off("mouseup", cn)
        }

        function Kn() {
            (pt || vt) && (N.autoScrolling && rt.off(Mt.touchmove).on(Mt.touchmove, ze), e(l).off(Mt.touchstart).on(Mt.touchstart, Pe).off(Mt.touchmove).on(Mt.touchmove, He))
        }

        function _n() {
            (pt || vt) && (N.autoScrolling && rt.off(Mt.touchmove), e(l).off(Mt.touchstart).off(Mt.touchmove))
        }

        function Qn() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Gn(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, vt && De(e) && (N.scrollBar || !N.autoScrolling) && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function Jn(e, n) {
            G(0, "internal"), "undefined" != typeof n && (wt = !0), mn(e.closest(D), e), "undefined" != typeof n && (wt = !1), G(Rt.scrollingSpeed, "internal")
        }

        function Zn(e) {
            var n = o.round(e);
            if (N.css3 && N.autoScrolling && !N.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                Bn(t, !1)
            } else N.autoScrolling && !N.scrollBar ? gt.css("top", -n) : lt.scrollTop(n)
        }

        function $n(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function et(n, t, o) {
            "all" !== t ? xt[o][t] = n : e.each(Object.keys(xt[o]), function(e, t) {
                xt[o][t] = n
            })
        }

        function nt(n) {
            W(!1, "internal"), ie(!1), ae(!1), gt.addClass(c), clearTimeout(Lt), clearTimeout(kt), clearTimeout(Tt), clearTimeout(At), clearTimeout(Ot), $.off("scroll", Ie).off("hashchange", tn).off("resize", bn), ee.off("click touchstart", A + " a").off("mouseenter", A + " li").off("mouseleave", A + " li").off("click touchstart", Y).off("mouseover", N.normalScrollElements).off("mouseout", N.normalScrollElements), e(w).off("click touchstart", X), clearTimeout(Lt), clearTimeout(kt), n && tt()
        }

        function tt() {
            Zn(0), gt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                Qe(e(this), "src")
            }), gt.find("img[data-srcset]").each(function() {
                Qe(e(this), "srcset")
            }), e(A + ", " + j + ", " + X).remove(), e(w).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(R).css({
                width: ""
            }), gt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), lt.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(d), rt.removeClass(r), e.each(rt.get(0).className.split(/\s+/), function(e, n) {
                0 === n.indexOf(f) && rt.removeClass(n)
            }), e(w + ", " + R).each(function() {
                N.scrollOverflowHandler && N.scrollOverflowHandler.remove(e(this)), e(this).removeClass(F + " " + u), e(this).attr("style", e(this).data("fp-styles"))
            }), Tn(gt), gt.find(C + ", " + q + ", " + D).each(function() {
                e(this).replaceWith(this.childNodes)
            }), gt.css({
                "-webkit-transition": "none",
                transition: "none"
            }), lt.scrollTop(0);
            var n = [m, B, P];
            e.each(n, function(n, t) {
                e("." + t).removeClass(t)
            })
        }

        function ot(e, n, t) {
            N[e] = n, "internal" !== t && (Rt[e] = n)
        }

        function it() {
            var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return e("html").hasClass(d) ? void at("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (N.continuousVertical && (N.loopTop || N.loopBottom) && (N.continuousVertical = !1, at("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), N.scrollBar && N.scrollOverflow && at("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !N.continuousVertical || !N.scrollBar && N.autoScrolling || (N.continuousVertical = !1, at("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), N.scrollOverflow && !N.scrollOverflowHandler && (N.scrollOverflow = !1, at("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), e.each(n, function(e, n) {
                N[n] && at("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n)
            }), void e.each(N.anchors, function(n, t) {
                var o = ee.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                    }),
                    i = ee.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                    });
                (i.length || o.length) && (at("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && at("error", '"' + t + '" is is being used by another element `id` property'), o.length && at("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function at(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(d)) return void it();
        var lt = e("html, body"),
            rt = e("body"),
            st = e.fn.fullpage;
        N = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: g,
            slideSelector: M,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, N);
        var ct, dt, ft, ut, ht = !1,
            pt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            vt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            gt = e(this),
            mt = $.height(),
            wt = !1,
            yt = !0,
            St = !0,
            bt = [],
            xt = {};
        xt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, xt.k = e.extend(!0, {}, xt.m);
        var Ct, Tt, kt, Lt, At, Ot, It, Et = Qn(),
            Mt = {
                touchmove: "ontouchmove" in n ? "touchmove" : Et.move,
                touchstart: "ontouchstart" in n ? "touchstart" : Et.down
            },
            Bt = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
            Rt = e.extend(!0, {}, N);
        it(), e.extend(e.easing, {
            easeInOutCubic: function(e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), e(this).length && (st.version = "2.9.5", st.setAutoScrolling = W, st.setRecordHistory = Q, st.setScrollingSpeed = G, st.setFitToSection = ne, st.setLockAnchors = te, st.setMouseWheelScrolling = oe, st.setAllowScrolling = ie, st.setKeyboardScrolling = ae, st.moveSectionUp = le, st.moveSectionDown = re, st.silentMoveTo = se, st.moveTo = ce, st.moveSlideRight = de, st.moveSlideLeft = fe, st.fitToSection = Ee, st.reBuild = ue, st.setResponsive = he, st.destroy = nt, st.shared = {
            afterRenderActions: Ae
        }, pe(), ve());
        var zt = !1,
            Ht = 0,
            Dt = 0,
            Pt = 0,
            qt = 0,
            Ft = 0,
            Vt = (new Date).getTime(),
            jt = 0,
            Yt = 0,
            Nt = mt
    }
});;
(function() {
    (function($) {
        $.easyPieChart = function(el, options) {
            var addScaleLine, animateLine, drawLine, easeInOutQuad, renderBackground, renderScale, renderTrack, _this = this;
            this.el = el;
            this.$el = $(el);
            this.$el.data("easyPieChart", this);
            this.init = function() {
                var percent;
                _this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
                percent = parseInt(_this.$el.data('percent'), 10);
                _this.percentage = 0;
                _this.canvas = $("<canvas width='" + _this.options.size + "' height='" + _this.options.size + "'></canvas>").get(0);
                _this.$el.append(_this.canvas);
                if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
                    G_vmlCanvasManager.initElement(_this.canvas)
                }
                _this.ctx = _this.canvas.getContext('2d');
                if (window.devicePixelRatio > 1.5) {
                    $(_this.canvas).css({
                        width: _this.options.size,
                        height: _this.options.size
                    });
                    _this.canvas.width *= 2;
                    _this.canvas.height *= 2;
                    _this.ctx.scale(2, 2)
                }
                _this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
                _this.$el.addClass('easyPieChart');
                _this.$el.css({
                    width: _this.options.size,
                    height: _this.options.size,
                    lineHeight: "" + _this.options.size + "px"
                });
                _this.update(percent);
                return _this
            };
            this.update = function(percent) {
                if (_this.options.animate === false) {
                    return drawLine(percent)
                } else {
                    return animateLine(_this.percentage, percent)
                }
            };
            renderScale = function() {
                var i, _i, _results;
                _this.ctx.fillStyle = _this.options.scaleColor;
                _this.ctx.lineWidth = 1;
                _results = [];
                for (i = _i = 0; _i <= 24; i = ++_i) {
                    _results.push(addScaleLine(i))
                }
                return _results
            };
            addScaleLine = function(i) {
                var offset;
                offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
                _this.ctx.save();
                _this.ctx.rotate(i * Math.PI / 12);
                _this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
                return _this.ctx.restore()
            };
            renderTrack = function() {
                var offset;
                offset = _this.options.size / 2 - _this.options.lineWidth / 2;
                if (_this.options.scaleColor !== false) {
                    offset -= _this.options.size * 0.08
                }
                _this.ctx.beginPath();
                _this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
                _this.ctx.closePath();
                _this.ctx.strokeStyle = _this.options.trackColor;
                _this.ctx.lineWidth = _this.options.lineWidth;
                return _this.ctx.stroke()
            };
            renderBackground = function() {
                if (_this.options.scaleColor !== false) {
                    renderScale()
                }
                if (_this.options.trackColor !== false) {
                    return renderTrack()
                }
            };
            drawLine = function(percent) {
                var offset;
                renderBackground();
                _this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
                _this.ctx.lineCap = _this.options.lineCap;
                _this.ctx.lineWidth = _this.options.lineWidth;
                offset = _this.options.size / 2 - _this.options.lineWidth / 2;
                if (_this.options.scaleColor !== false) {
                    offset -= _this.options.size * 0.08
                }
                _this.ctx.save();
                _this.ctx.rotate(-Math.PI / 2);
                _this.ctx.beginPath();
                _this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
                _this.ctx.stroke();
                return _this.ctx.restore()
            };
            animateLine = function(from, to) {
                var currentStep, fps, steps;
                fps = 30;
                steps = fps * _this.options.animate / 1000;
                currentStep = 0;
                _this.options.onStart.call(_this);
                _this.percentage = to;
                if (_this.animation) {
                    clearInterval(_this.animation);
                    _this.animation = false
                }
                return _this.animation = setInterval(function() {
                    _this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
                    renderBackground.call(_this);
                    drawLine.call(_this, [easeInOutQuad(currentStep, from, to - from, steps)]);
                    currentStep++;
                    if ((currentStep / steps) > 1) {
                        clearInterval(_this.animation);
                        _this.animation = false;
                        return _this.options.onStop.call(_this)
                    }
                }, 1000 / fps)
            };
            easeInOutQuad = function(t, b, c, d) {
                var easeIn, easing;
                easeIn = function(t) {
                    return Math.pow(t, 2)
                };
                easing = function(t) {
                    if (t < 1) {
                        return easeIn(t)
                    } else {
                        return 2 - easeIn((t / 2) * -2 + 2)
                    }
                };
                t /= d / 2;
                return c / 2 * easing(t) + b
            };
            return this.init()
        };
        $.easyPieChart.defaultOptions = {
            barColor: '#ef1e25',
            trackColor: '#f2f2f2',
            scaleColor: '#dfe0e0',
            lineCap: 'round',
            size: 110,
            lineWidth: 3,
            animate: false,
            onStart: $.noop,
            onStop: $.noop
        };
        $.fn.easyPieChart = function(options) {
            return $.each(this, function(i, el) {
                var $el;
                $el = $(el);
                if (!$el.data('easyPieChart')) {
                    return $el.data('easyPieChart', new $.easyPieChart(el, options))
                }
            })
        };
        return void 0
    })(jQuery)
}).call(this);;
/*!
 * multiscroll.js 0.1.8 Beta
 * https://github.com/alvarotrigo/multiscroll.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, t, n, o, i) {
    e.fn.multiscroll = function(s) {
        function a() {
            var n = t.location.hash.replace("#", ""),
                o = n;
            if (o.length) {
                var i = e(".ms-left").find('[data-anchor="' + o + '"]'),
                    s = "undefined" == typeof lastScrolledDestiny;
                (s || o !== lastScrolledDestiny) && h(i)
            }
        }

        function l(t) {
            clearTimeout(O);
            var o = e(n.activeElement);
            if (!o.is("textarea") && !o.is("input") && !o.is("select") && s.keyboardScrolling) {
                var i = t.which,
                    a = [40, 38, 32, 33, 34];
                e.inArray(i, a) > -1 && t.preventDefault(), O = setTimeout(function() {
                    r(t)
                }, 150)
            }
        }

        function r(t) {
            var n = t.shiftKey;
            switch (t.which) {
                case 38:
                case 33:
                    X.moveSectionUp();
                    break;
                case 32:
                    if (n) {
                        X.moveSectionUp();
                        break
                    }
                    case 40:
                    case 34:
                        X.moveSectionDown();
                        break;
                    case 36:
                        X.moveTo(1);
                        break;
                    case 35:
                        X.moveTo(e(".ms-left .ms-section").length);
                        break;
                    default:
                        return
            }
        }

        function c(t) {
            t.preventDefault();
            var n = e(this).parent().index();
            h(e(".ms-left .ms-section").eq(n))
        }

        function m() {
            var t = e(this).data("tooltip");
            e('<div class="multiscroll-tooltip ' + s.navigationPosition + '">' + t + "</div>").hide().appendTo(e(this)).fadeIn(200)
        }

        function f() {
            e(this).find(".multiscroll-tooltip").fadeOut(200, function() {
                e(this).remove()
            })
        }

        function d() {
            N = e(t).height(), e(".ms-tableCell").each(function() {
                e(this).css({
                    height: P(e(this).parent())
                })
            }), u(), e.isFunction(s.afterResize) && s.afterResize.call(this)
        }

        function u() {
            s.css3 ? (S(e(".ms-left"), "translate3d(0px, -" + e(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), S(e(".ms-right"), "translate3d(0px, -" + e(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (e(".ms-left").css("top", -e(".ms-left").find(".ms-section.active").position().top), e(".ms-right").css("top", -e(".ms-right").find(".ms-section.active").position().top))
        }

        function h(t) {
            var n = t.index(),
                o = e(".ms-right").find(".ms-section").eq(W - 1 - n),
                i = t.data("anchor"),
                a = e(".ms-left .ms-section.active"),
                l = a.index() + 1,
                r = b(t);
            K = !0;
            var c = {
                left: t.position().top,
                right: o.position().top
            };
            if (o.addClass("active").siblings().removeClass("active"), t.addClass("active").siblings().removeClass("active"), C(i), s.css3) {
                e.isFunction(s.onLeave) && s.onLeave.call(this, l, n + 1, r);
                var m = "translate3d(0px, -" + c.left + "px, 0px)",
                    f = "translate3d(0px, -" + c.right + "px, 0px)";
                S(e(".ms-left"), m, !0), S(e(".ms-right"), f, !0), setTimeout(function() {
                    e.isFunction(s.afterLoad) && s.afterLoad.call(this, i, n + 1), setTimeout(function() {
                        K = !1
                    }, q)
                }, s.scrollingSpeed)
            } else e.isFunction(s.onLeave) && s.onLeave.call(this, l, n + 1, r), e(".ms-left").animate({
                top: -c.left
            }, s.scrollingSpeed, s.easing, function() {
                e.isFunction(s.afterLoad) && s.afterLoad.call(this, i, n + 1), setTimeout(function() {
                    K = !1
                }, q)
            }), e(".ms-right").animate({
                top: -c.right
            }, s.scrollingSpeed, s.easing);
            lastScrolledDestiny = i, w(i), x(i, n)
        }

        function v() {
            n.addEventListener ? (n.removeEventListener("mousewheel", g, !1), n.removeEventListener("wheel", g, !1)) : n.detachEvent("onmousewheel", g)
        }

        function p() {
            n.addEventListener ? (n.addEventListener("mousewheel", g, !1), n.addEventListener("wheel", g, !1)) : n.attachEvent("onmousewheel", g)
        }

        function g(e) {
            e = t.event || e;
            var n = o.max(-1, o.min(1, e.wheelDelta || -e.deltaY || -e.detail));
            return K || (n < 0 ? X.moveSectionDown() : X.moveSectionUp()), !1
        }

        function S(e, t, n) {
            e.toggleClass("ms-easing", n), e.css(y(t))
        }

        function y(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function x(t, n) {
            s.navigation && (e("#multiscroll-nav").find(".active").removeClass("active"), t ? e("#multiscroll-nav").find('a[href="#' + t + '"]').addClass("active") : e("#multiscroll-nav").find("li").eq(n).find("a").addClass("active"))
        }

        function w(t) {
            s.menu && (e(s.menu).find(".active").removeClass("active"), e(s.menu).find('[data-menuanchor="' + t + '"]').addClass("active"))
        }

        function b(t) {
            var n = e(".ms-left .ms-section.active").index(),
                o = t.index();
            return n > o ? "up" : "down"
        }

        function C(e) {
            s.anchors.length && (location.hash = e), T()
        }

        function T() {
            var t = e(".ms-left .ms-section.active"),
                n = t.data("anchor"),
                o = t.index(),
                i = String(o);
            s.anchors.length && (i = n), i = i.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?ms-viewing-[^\\s]+\\b", "g");
            e("body")[0].className = e("body")[0].className.replace(a, ""), e("body").addClass("ms-viewing-" + i)
        }

        function E() {
            var e, o = n.createElement("p"),
                s = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            n.body.insertBefore(o, null);
            for (var a in s) o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(s[a]));
            return n.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function M(e) {
            e.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + P(e) + 'px" />')
        }

        function P(e) {
            var t = N;
            if (s.paddingTop || s.paddingBottom) {
                var n = parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom"));
                t = N - n
            }
            return t
        }

        function k() {
            var n = t.location.hash.replace("#", ""),
                o = e('.ms-left .ms-section[data-anchor="' + n + '"]');
            n.length && h(o)
        }

        function L(n) {
            var i = n.originalEvent;
            if (D(i)) {
                n.preventDefault();
                e(".ms-left .ms-section.active");
                if (!K) {
                    var a = F(i);
                    A = a.y, V = a.x, o.abs(Q - A) > e(t).height() / 100 * s.touchSensitivity && (Q > A ? X.moveSectionDown() : A > Q && X.moveSectionUp())
                }
            }
        }

        function D(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function z(e) {
            var t = e.originalEvent;
            if (D(t)) {
                var n = F(t);
                Q = n.y, j = n.x
            }
        }

        function B() {
            I && (MSPointer = Y(), e(n).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, z), e(n).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, L))
        }

        function R() {
            I && (MSPointer = Y(), e(n).off("touchstart " + MSPointer.down), e(n).off("touchmove " + MSPointer.move))
        }

        function Y() {
            var e;
            return e = t.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function F(e) {
            var t = [];
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, I && D(e) && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }
        var X = e.fn.multiscroll;
        s = e.extend({
            verticalCentered: !0,
            scrollingSpeed: 700,
            easing: "easeInQuart",
            menu: !1,
            sectionsColor: [],
            anchors: [],
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            loopBottom: !1,
            loopTop: !1,
            css3: !1,
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            normalScrollElements: null,
            keyboardScrolling: !0,
            touchSensitivity: 5,
            sectionSelector: ".ms-section",
            leftSelector: ".ms-left",
            rightSelector: ".ms-right",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null
        }, s);
        var q = 600,
            I = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
        ".ms-right" !== s.rightSelector && e(s.rightSelector).addClass("ms-right"), ".ms-left" !== s.leftSelector && e(s.leftSelector).addClass("ms-left");
        var U, W = e(".ms-left").find(".ms-section").length,
            K = !1,
            N = e(t).height();
        p(), B(), s.css3 && (s.css3 = E()), e("html, body").css({
            overflow: "hidden",
            height: "100%"
        }), ".ms-section" !== s.sectionSelector && e(s.sectionSelector).each(function() {
            e(this).addClass("ms-section")
        }), s.navigation && (e("body").append('<div id="multiscroll-nav"><ul></ul></div>'), U = e("#multiscroll-nav"), U.css("color", s.navigationColor), U.addClass(s.navigationPosition)), e(".ms-right, .ms-left").css({
            width: "50%",
            position: "absolute",
            height: "100%",
            "-ms-touch-action": "none"
        }), e(".ms-right").css({
            right: "1px",
            top: "0",
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), e(".ms-left").css({
            left: "0",
            top: "0",
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), e(".ms-left .ms-section, .ms-right .ms-section").each(function() {
            var t = e(this).index();
            if ((s.paddingTop || s.paddingBottom) && e(this).css("padding", s.paddingTop + " 0 " + s.paddingBottom + " 0"), "undefined" != typeof s.sectionsColor[t] && e(this).css("background-color", s.sectionsColor[t]), "undefined" != typeof s.anchors[t] && e(this).attr("data-anchor", s.anchors[t]), s.verticalCentered && M(e(this)), e(this).closest(".ms-left").length && s.navigation) {
                var n = "";
                s.anchors.length && (n = s.anchors[t]);
                var o = s.navigationTooltips[t];
                "undefined" == typeof o && (o = ""), s.navigation && U.find("ul").append('<li data-tooltip="' + o + '"><a href="#' + n + '"><span></span></a></li>')
            }
        }), e(".ms-right").html(e(".ms-right").find(".ms-section").get().reverse()), e(".ms-left .ms-section, .ms-right .ms-section").each(function() {
            var t = e(this).index();
            e(this).css({
                height: "100%"
            }), !t && s.navigation && U.find("li").eq(t).find("a").addClass("active")
        }).promise().done(function() {
            e(".ms-left .ms-section.active").length || (e(".ms-right").find(".ms-section").last().addClass("active"), e(".ms-left").find(".ms-section").first().addClass("active")), s.navigation && U.css("margin-top", "-" + U.height() / 2 + "px"), e.isFunction(s.afterRender) && s.afterRender.call(this), u(), T(), e(t).on("load", function() {
                k()
            })
        }), e(t).on("hashchange", a), e(n).keydown(l);
        var O;
        e(n).mousedown(function(e) {
            if (1 == e.button) return e.preventDefault(), !1
        }), e(n).on("click", "#multiscroll-nav a", c), e(n).on({
            mouseenter: m,
            mouseleave: f
        }, "#multiscroll-nav li"), s.normalScrollElements && (e(n).on("mouseenter", s.normalScrollElements, function() {
            X.setMouseWheelScrolling(!1)
        }), e(n).on("mouseleave", s.normalScrollElements, function() {
            X.setMouseWheelScrolling(!0)
        })), e(t).on("resize", d), X.moveSectionUp = function() {
            var t = e(".ms-left .ms-section.active").prev(".ms-section");
            !t.length && s.loopTop && (t = e(".ms-left .ms-section").last()), t.length && h(t)
        }, X.moveSectionDown = function() {
            var t = e(".ms-left .ms-section.active").next(".ms-section");
            !t.length && s.loopBottom && (t = e(".ms-left .ms-section").first()), t.length && h(t)
        }, X.moveTo = function(t) {
            var n = "";
            n = isNaN(t) ? e('.ms-left [data-anchor="' + t + '"]') : e(".ms-left .ms-section").eq(t - 1), h(n)
        }, X.setKeyboardScrolling = function(e) {
            s.keyboardScrolling = e
        }, X.setMouseWheelScrolling = function(e) {
            e ? p() : v()
        }, X.setScrollingSpeed = function(e) {
            s.scrollingSpeed = e
        };
        var Q = 0,
            j = 0,
            A = 0,
            V = 0;
        X.destroy = function() {
            X.setKeyboardScrolling(!1), X.setMouseWheelScrolling(!1), R(), e(t).off("hashchange", a).off("resize", d), e(n).off("mouseenter", "#multiscroll-nav li").off("mouseleave", "#multiscroll-nav li").off("click", "#multiscroll-nav a")
        }, X.build = function() {
            X.setKeyboardScrolling(!0), X.setMouseWheelScrolling(!0), B(), e(t).on("hashchange", a).on("resize", d), e(n).on("mouseenter", "#multiscroll-nav li", m).on("mouseleave", "#multiscroll-nav li", f).on("click", "#multiscroll-nav a", c)
        }
    }
}(jQuery, window, document, Math);; /*!Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
            var b;
            return function() {
                    if (!b || !b.requirejs) {
                        b ? c = b : b = {};
                        var a, c, d;
                        ! function(b) {
                            function e(a, b) {
                                return u.call(a, b)
                            }

                            function f(a, b) {
                                var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                    o = s.map,
                                    p = o && o["*"] || {};
                                if (a && "." === a.charAt(0))
                                    if (b) {
                                        for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                            if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                                            else if (".." === m) {
                                            if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                            k > 0 && (a.splice(k - 1, 2), k -= 2)
                                        }
                                        a = a.join("/")
                                    } else 0 === a.indexOf("./") && (a = a.substring(2));
                                if ((n || p) && o) {
                                    for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                        if (d = c.slice(0, k).join("/"), n)
                                            for (l = n.length; l > 0; l -= 1)
                                                if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                                    f = e, h = k;
                                                    break
                                                } if (f) break;
                                        !i && p && p[d] && (i = p[d], j = k)
                                    }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                                }
                                return a
                            }

                            function g(a, c) {
                                return function() {
                                    var d = v.call(arguments, 0);
                                    return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                                }
                            }

                            function h(a) {
                                return function(b) {
                                    return f(b, a)
                                }
                            }

                            function i(a) {
                                return function(b) {
                                    q[a] = b
                                }
                            }

                            function j(a) {
                                if (e(r, a)) {
                                    var c = r[a];
                                    delete r[a], t[a] = !0, m.apply(b, c)
                                }
                                if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                                return q[a]
                            }

                            function k(a) {
                                var b, c = a ? a.indexOf("!") : -1;
                                return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                            }

                            function l(a) {
                                return function() {
                                    return s && s.config && s.config[a] || {}
                                }
                            }
                            var m, n, o, p, q = {},
                                r = {},
                                s = {},
                                t = {},
                                u = Object.prototype.hasOwnProperty,
                                v = [].slice,
                                w = /\.js$/;
                            o = function(a, b) {
                                var c, d = k(a),
                                    e = d[0];
                                return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                    f: e ? e + "!" + a : a,
                                    n: a,
                                    pr: e,
                                    p: c
                                }
                            }, p = {
                                require: function(a) {
                                    return g(a)
                                },
                                exports: function(a) {
                                    var b = q[a];
                                    return "undefined" != typeof b ? b : q[a] = {}
                                },
                                module: function(a) {
                                    return {
                                        id: a,
                                        uri: "",
                                        exports: q[a],
                                        config: l(a)
                                    }
                                }
                            }, m = function(a, c, d, f) {
                                var h, k, l, m, n, s, u = [],
                                    v = typeof d;
                                if (f = f || a, "undefined" === v || "function" === v) {
                                    for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                        if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                                        else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                    else if ("module" === k) h = u[n] = p.module(a);
                                    else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                    else {
                                        if (!m.p) throw new Error(a + " missing " + k);
                                        m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                    }
                                    l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                                } else a && (q[a] = d)
                            }, a = c = n = function(a, c, d, e, f) {
                                if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                                if (!a.splice) {
                                    if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                    c.splice ? (a = c, c = d, d = null) : a = b
                                }
                                return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                                    m(b, a, c, d)
                                }, 4), n
                            }, n.config = function(a) {
                                return n(a)
                            }, a._defined = q, d = function(a, b, c) {
                                if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                                b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                            }, d.amd = {
                                jQuery: !0
                            }
                        }(), b.requirejs = a, b.require = c, b.define = d
                    }
                }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                    var b = a || $;
                    return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
                }), b.define("select2/utils", ["jquery"], function(a) {
                    function b(a) {
                        var b = a.prototype,
                            c = [];
                        for (var d in b) {
                            var e = b[d];
                            "function" == typeof e && "constructor" !== d && c.push(d)
                        }
                        return c
                    }
                    var c = {};
                    c.Extend = function(a, b) {
                        function c() {
                            this.constructor = a
                        }
                        var d = {}.hasOwnProperty;
                        for (var e in b) d.call(b, e) && (a[e] = b[e]);
                        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                    }, c.Decorate = function(a, c) {
                        function d() {
                            var b = Array.prototype.unshift,
                                d = c.prototype.constructor.length,
                                e = a.prototype.constructor;
                            d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                        }

                        function e() {
                            this.constructor = d
                        }
                        var f = b(c),
                            g = b(a);
                        c.displayName = a.displayName, d.prototype = new e;
                        for (var h = 0; h < g.length; h++) {
                            var i = g[h];
                            d.prototype[i] = a.prototype[i]
                        }
                        for (var j = (function(a) {
                                var b = function() {};
                                a in d.prototype && (b = d.prototype[a]);
                                var e = c.prototype[a];
                                return function() {
                                    var a = Array.prototype.unshift;
                                    return a.call(arguments, b), e.apply(this, arguments)
                                }
                            }), k = 0; k < f.length; k++) {
                            var l = f[k];
                            d.prototype[l] = j(l)
                        }
                        return d
                    };
                    var d = function() {
                        this.listeners = {}
                    };
                    return d.prototype.on = function(a, b) {
                        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                    }, d.prototype.trigger = function(a) {
                        var b = Array.prototype.slice,
                            c = b.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, d.prototype.invoke = function(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
                    }, c.Observable = d, c.generateChars = function(a) {
                        for (var b = "", c = 0; a > c; c++) {
                            var d = Math.floor(36 * Math.random());
                            b += d.toString(36)
                        }
                        return b
                    }, c.bind = function(a, b) {
                        return function() {
                            a.apply(b, arguments)
                        }
                    }, c._convertData = function(a) {
                        for (var b in a) {
                            var c = b.split("-"),
                                d = a;
                            if (1 !== c.length) {
                                for (var e = 0; e < c.length; e++) {
                                    var f = c[e];
                                    f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                                }
                                delete a[b]
                            }
                        }
                        return a
                    }, c.hasScroll = function(b, c) {
                        var d = a(c),
                            e = c.style.overflowX,
                            f = c.style.overflowY;
                        return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
                    }, c.escapeMarkup = function(a) {
                        var b = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                            return b[a]
                        })
                    }, c.appendMany = function(b, c) {
                        if ("1.7" === a.fn.jquery.substr(0, 3)) {
                            var d = a();
                            a.map(c, function(a) {
                                d = d.add(a)
                            }), c = d
                        }
                        b.append(c)
                    }, c
                }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                    function c(a, b, d) {
                        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                    }, c.prototype.clear = function() {
                        this.$results.empty()
                    }, c.prototype.displayMessage = function(b) {
                        var c = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            e = this.options.get("translations").get(b.message);
                        d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                    }, c.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, c.prototype.append = function(a) {
                        this.hideLoading();
                        var b = [];
                        if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        a.results = this.sort(a.results);
                        for (var c = 0; c < a.results.length; c++) {
                            var d = a.results[c],
                                e = this.option(d);
                            b.push(e)
                        }
                        this.$results.append(b)
                    }, c.prototype.position = function(a, b) {
                        var c = b.find(".select2-results");
                        c.append(a)
                    }, c.prototype.sort = function(a) {
                        var b = this.options.get("sorter");
                        return b(a)
                    }, c.prototype.highlightFirstItem = function() {
                        var a = this.$results.find(".select2-results__option[aria-selected]"),
                            b = a.filter("[aria-selected=true]");
                        b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, c.prototype.setClasses = function() {
                        var b = this;
                        this.data.current(function(c) {
                            var d = a.map(c, function(a) {
                                    return a.id.toString()
                                }),
                                e = b.$results.find(".select2-results__option[aria-selected]");
                            e.each(function() {
                                var b = a(this),
                                    c = a.data(this, "data"),
                                    e = "" + c.id;
                                null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                            })
                        })
                    }, c.prototype.showLoading = function(a) {
                        this.hideLoading();
                        var b = this.options.get("translations").get("searching"),
                            c = {
                                disabled: !0,
                                loading: !0,
                                text: b(a)
                            },
                            d = this.option(c);
                        d.className += " loading-results", this.$results.prepend(d)
                    }, c.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, c.prototype.option = function(b) {
                        var c = document.createElement("li");
                        c.className = "select2-results__option";
                        var d = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                        for (var e in d) {
                            var f = d[e];
                            c.setAttribute(e, f)
                        }
                        if (b.children) {
                            var g = a(c),
                                h = document.createElement("strong");
                            h.className = "select2-results__group";
                            a(h);
                            this.template(b, h);
                            for (var i = [], j = 0; j < b.children.length; j++) {
                                var k = b.children[j],
                                    l = this.option(k);
                                i.push(l)
                            }
                            var m = a("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            m.append(i), g.append(h), g.append(m)
                        } else this.template(b, c);
                        return a.data(c, "data", b), c
                    }, c.prototype.bind = function(b, c) {
                        var d = this,
                            e = b.id + "-results";
                        this.$results.attr("id", e), b.on("results:all", function(a) {
                            d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("results:append", function(a) {
                            d.append(a.data), b.isOpen() && d.setClasses()
                        }), b.on("query", function(a) {
                            d.hideMessages(), d.showLoading(a)
                        }), b.on("select", function() {
                            b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("unselect", function() {
                            b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("open", function() {
                            d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                        }), b.on("close", function() {
                            d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                        }), b.on("results:toggle", function() {
                            var a = d.getHighlightedResults();
                            0 !== a.length && a.trigger("mouseup")
                        }), b.on("results:select", function() {
                            var a = d.getHighlightedResults();
                            if (0 !== a.length) {
                                var b = a.data("data");
                                "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                    data: b
                                })
                            }
                        }), b.on("results:previous", function() {
                            var a = d.getHighlightedResults(),
                                b = d.$results.find("[aria-selected]"),
                                c = b.index(a);
                            if (0 !== c) {
                                var e = c - 1;
                                0 === a.length && (e = 0);
                                var f = b.eq(e);
                                f.trigger("mouseenter");
                                var g = d.$results.offset().top,
                                    h = f.offset().top,
                                    i = d.$results.scrollTop() + (h - g);
                                0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                            }
                        }), b.on("results:next", function() {
                            var a = d.getHighlightedResults(),
                                b = d.$results.find("[aria-selected]"),
                                c = b.index(a),
                                e = c + 1;
                            if (!(e >= b.length)) {
                                var f = b.eq(e);
                                f.trigger("mouseenter");
                                var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                    h = f.offset().top + f.outerHeight(!1),
                                    i = d.$results.scrollTop() + h - g;
                                0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                            }
                        }), b.on("results:focus", function(a) {
                            a.element.addClass("select2-results__option--highlighted")
                        }), b.on("results:message", function(a) {
                            d.displayMessage(a)
                        }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                            var b = d.$results.scrollTop(),
                                c = d.$results.get(0).scrollHeight - b + a.deltaY,
                                e = a.deltaY > 0 && b - a.deltaY <= 0,
                                f = a.deltaY < 0 && c <= d.$results.height();
                            e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                            var c = a(this),
                                e = c.data("data");
                            return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                                originalEvent: b,
                                data: e
                            }) : d.trigger("close", {})) : void d.trigger("select", {
                                originalEvent: b,
                                data: e
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                            var c = a(this).data("data");
                            d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                                data: c,
                                element: a(this)
                            })
                        })
                    }, c.prototype.getHighlightedResults = function() {
                        var a = this.$results.find(".select2-results__option--highlighted");
                        return a
                    }, c.prototype.destroy = function() {
                        this.$results.remove()
                    }, c.prototype.ensureHighlightVisible = function() {
                        var a = this.getHighlightedResults();
                        if (0 !== a.length) {
                            var b = this.$results.find("[aria-selected]"),
                                c = b.index(a),
                                d = this.$results.offset().top,
                                e = a.offset().top,
                                f = this.$results.scrollTop() + (e - d),
                                g = e - d;
                            f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                        }
                    }, c.prototype.template = function(b, c) {
                        var d = this.options.get("templateResult"),
                            e = this.options.get("escapeMarkup"),
                            f = d(b, c);
                        null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                    }, c
                }), b.define("select2/keys", [], function() {
                    var a = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return a
                }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                    function d(a, b) {
                        this.$element = a, this.options = b, d.__super__.constructor.call(this)
                    }
                    return b.Extend(d, b.Observable), d.prototype.render = function() {
                        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                    }, d.prototype.bind = function(a, b) {
                        var d = this,
                            e = (a.id + "-container", a.id + "-results");
                        this.container = a, this.$selection.on("focus", function(a) {
                            d.trigger("focus", a)
                        }), this.$selection.on("blur", function(a) {
                            d._handleBlur(a)
                        }), this.$selection.on("keydown", function(a) {
                            d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                        }), a.on("results:focus", function(a) {
                            d.$selection.attr("aria-activedescendant", a.data._resultId)
                        }), a.on("selection:update", function(a) {
                            d.update(a.data)
                        }), a.on("open", function() {
                            d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                        }), a.on("close", function() {
                            d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                        }), a.on("enable", function() {
                            d.$selection.attr("tabindex", d._tabindex)
                        }), a.on("disable", function() {
                            d.$selection.attr("tabindex", "-1")
                        })
                    }, d.prototype._handleBlur = function(b) {
                        var c = this;
                        window.setTimeout(function() {
                            document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                        }, 1)
                    }, d.prototype._attachCloseHandler = function(b) {
                        a(document.body).on("mousedown.select2." + b.id, function(b) {
                            var c = a(b.target),
                                d = c.closest(".select2"),
                                e = a(".select2.select2-container--open");
                            e.each(function() {
                                var b = a(this);
                                if (this != d[0]) {
                                    var c = b.data("element");
                                    c.select2("close")
                                }
                            })
                        })
                    }, d.prototype._detachCloseHandler = function(b) {
                        a(document.body).off("mousedown.select2." + b.id)
                    }, d.prototype.position = function(a, b) {
                        var c = b.find(".selection");
                        c.append(a)
                    }, d.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, d.prototype.update = function(a) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, d
                }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                    function e() {
                        e.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(e, b), e.prototype.render = function() {
                        var a = e.__super__.render.call(this);
                        return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                    }, e.prototype.bind = function(a, b) {
                        var c = this;
                        e.__super__.bind.apply(this, arguments);
                        var d = a.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                            1 === a.which && c.trigger("toggle", {
                                originalEvent: a
                            })
                        }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) {
                            a.isOpen() || c.$selection.focus()
                        }), a.on("selection:update", function(a) {
                            c.update(a.data)
                        })
                    }, e.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, e.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection"),
                            d = this.options.get("escapeMarkup");
                        return d(c(a, b))
                    }, e.prototype.selectionContainer = function() {
                        return a("<span></span>")
                    }, e.prototype.update = function(a) {
                        if (0 === a.length) return void this.clear();
                        var b = a[0],
                            c = this.$selection.find(".select2-selection__rendered"),
                            d = this.display(b, c);
                        c.empty().append(d), c.prop("title", b.title || b.text)
                    }, e
                }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                    function d(a, b) {
                        d.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(d, b), d.prototype.render = function() {
                        var a = d.__super__.render.call(this);
                        return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                    }, d.prototype.bind = function(b, c) {
                        var e = this;
                        d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                            e.trigger("toggle", {
                                originalEvent: a
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                            if (!e.options.get("disabled")) {
                                var c = a(this),
                                    d = c.parent(),
                                    f = d.data("data");
                                e.trigger("unselect", {
                                    originalEvent: b,
                                    data: f
                                })
                            }
                        })
                    }, d.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, d.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection"),
                            d = this.options.get("escapeMarkup");
                        return d(c(a, b))
                    }, d.prototype.selectionContainer = function() {
                        var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return b
                    }, d.prototype.update = function(a) {
                        if (this.clear(), 0 !== a.length) {
                            for (var b = [], d = 0; d < a.length; d++) {
                                var e = a[d],
                                    f = this.selectionContainer(),
                                    g = this.display(e, f);
                                f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                            }
                            var h = this.$selection.find(".select2-selection__rendered");
                            c.appendMany(h, b)
                        }
                    }, d
                }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                    function b(a, b, c) {
                        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                    }
                    return b.prototype.normalizePlaceholder = function(a, b) {
                        return "string" == typeof b && (b = {
                            id: "",
                            text: b
                        }), b
                    }, b.prototype.createPlaceholder = function(a, b) {
                        var c = this.selectionContainer();
                        return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                    }, b.prototype.update = function(a, b) {
                        var c = 1 == b.length && b[0].id != this.placeholder.id,
                            d = b.length > 1;
                        if (d || c) return a.call(this, b);
                        this.clear();
                        var e = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(e)
                    }, b
                }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                    function c() {}
                    return c.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                            d._handleClear(a)
                        }), b.on("keypress", function(a) {
                            d._handleKeyboardClear(a, b)
                        })
                    }, c.prototype._handleClear = function(a, b) {
                        if (!this.options.get("disabled")) {
                            var c = this.$selection.find(".select2-selection__clear");
                            if (0 !== c.length) {
                                b.stopPropagation();
                                for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                    var f = {
                                        data: d[e]
                                    };
                                    if (this.trigger("unselect", f), f.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, c.prototype._handleKeyboardClear = function(a, c, d) {
                        d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
                    }, c.prototype.update = function(b, c) {
                        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                            var d = a('<span class="select2-selection__clear">&times;</span>');
                            d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                        }
                    }, c
                }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                    function d(a, b, c) {
                        a.call(this, b, c)
                    }
                    return d.prototype.render = function(b) {
                        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = c, this.$search = c.find("input");
                        var d = b.call(this);
                        return this._transferTabIndex(), d
                    }, d.prototype.bind = function(a, b, d) {
                        var e = this;
                        a.call(this, b, d), b.on("open", function() {
                            e.$search.trigger("focus")
                        }), b.on("close", function() {
                            e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                        }), b.on("enable", function() {
                            e.$search.prop("disabled", !1), e._transferTabIndex()
                        }), b.on("disable", function() {
                            e.$search.prop("disabled", !0)
                        }), b.on("focus", function(a) {
                            e.$search.trigger("focus")
                        }), b.on("results:focus", function(a) {
                            e.$search.attr("aria-activedescendant", a.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                            e.trigger("focus", a)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                            e._handleBlur(a)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                            a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                            var b = a.which;
                            if (b === c.BACKSPACE && "" === e.$search.val()) {
                                var d = e.$searchContainer.prev(".select2-selection__choice");
                                if (d.length > 0) {
                                    var f = d.data("data");
                                    e.searchRemoveChoice(f), a.preventDefault()
                                }
                            }
                        });
                        var f = document.documentMode,
                            g = f && 11 >= f;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                            return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                            if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                            var b = a.which;
                            b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                        })
                    }, d.prototype._transferTabIndex = function(a) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, d.prototype.createPlaceholder = function(a, b) {
                        this.$search.attr("placeholder", b.text)
                    }, d.prototype.update = function(a, b) {
                        var c = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                    }, d.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var a = this.$search.val();
                            this.trigger("query", {
                                term: a
                            })
                        }
                        this._keyUpPrevented = !1
                    }, d.prototype.searchRemoveChoice = function(a, b) {
                        this.trigger("unselect", {
                            data: b
                        }), this.$search.val(b.text), this.handleSearch()
                    }, d.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var a = "";
                        if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var b = this.$search.val().length + 1;
                            a = .75 * b + "em"
                        }
                        this.$search.css("width", a)
                    }, d
                }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                    function b() {}
                    return b.prototype.bind = function(b, c, d) {
                        var e = this,
                            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            g = ["opening", "closing", "selecting", "unselecting"];
                        b.call(this, c, d), c.on("*", function(b, c) {
                            if (-1 !== a.inArray(b, f)) {
                                c = c || {};
                                var d = a.Event("select2:" + b, {
                                    params: c
                                });
                                e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                            }
                        })
                    }, b
                }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                    function c(a) {
                        this.dict = a || {}
                    }
                    return c.prototype.all = function() {
                        return this.dict
                    }, c.prototype.get = function(a) {
                        return this.dict[a]
                    }, c.prototype.extend = function(b) {
                        this.dict = a.extend({}, b.all(), this.dict)
                    }, c._cache = {}, c.loadPath = function(a) {
                        if (!(a in c._cache)) {
                            var d = b(a);
                            c._cache[a] = d
                        }
                        return new c(c._cache[a])
                    }, c
                }), b.define("select2/diacritics", [], function() {
                    var a = {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    };
                    return a
                }), b.define("select2/data/base", ["../utils"], function(a) {
                    function b(a, c) {
                        b.__super__.constructor.call(this)
                    }
                    return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, b.prototype.query = function(a, b) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                        var d = b.id + "-result-";
                        return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
                    }, b
                }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        this.$element = a, this.options = b, d.__super__.constructor.call(this)
                    }
                    return b.Extend(d, a), d.prototype.current = function(a) {
                        var b = [],
                            d = this;
                        this.$element.find(":selected").each(function() {
                            var a = c(this),
                                e = d.item(a);
                            b.push(e)
                        }), a(b)
                    }, d.prototype.select = function(a) {
                        var b = this;
                        if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(d) {
                            var e = [];
                            a = [a], a.push.apply(a, d);
                            for (var f = 0; f < a.length; f++) {
                                var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                            }
                            b.$element.val(e), b.$element.trigger("change")
                        });
                        else {
                            var d = a.id;
                            this.$element.val(d), this.$element.trigger("change")
                        }
                    }, d.prototype.unselect = function(a) {
                        var b = this;
                        if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                            for (var e = [], f = 0; f < d.length; f++) {
                                var g = d[f].id;
                                g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                            }
                            b.$element.val(e), b.$element.trigger("change")
                        })
                    }, d.prototype.bind = function(a, b) {
                        var c = this;
                        this.container = a, a.on("select", function(a) {
                            c.select(a.data)
                        }), a.on("unselect", function(a) {
                            c.unselect(a.data)
                        })
                    }, d.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            c.removeData(this, "data")
                        })
                    }, d.prototype.query = function(a, b) {
                        var d = [],
                            e = this,
                            f = this.$element.children();
                        f.each(function() {
                            var b = c(this);
                            if (b.is("option") || b.is("optgroup")) {
                                var f = e.item(b),
                                    g = e.matches(a, f);
                                null !== g && d.push(g)
                            }
                        }), b({
                            results: d
                        })
                    }, d.prototype.addOptions = function(a) {
                        b.appendMany(this.$element, a)
                    }, d.prototype.option = function(a) {
                        var b;
                        a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                        var d = c(b),
                            e = this._normalizeItem(a);
                        return e.element = b, c.data(b, "data", e), d
                    }, d.prototype.item = function(a) {
                        var b = {};
                        if (b = c.data(a[0], "data"), null != b) return b;
                        if (a.is("option")) b = {
                            id: a.val(),
                            text: a.text(),
                            disabled: a.prop("disabled"),
                            selected: a.prop("selected"),
                            title: a.prop("title")
                        };
                        else if (a.is("optgroup")) {
                            b = {
                                text: a.prop("label"),
                                children: [],
                                title: a.prop("title")
                            };
                            for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                                var g = c(d[f]),
                                    h = this.item(g);
                                e.push(h)
                            }
                            b.children = e
                        }
                        return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                    }, d.prototype._normalizeItem = function(a) {
                        c.isPlainObject(a) || (a = {
                            id: a,
                            text: a
                        }), a = c.extend({}, {
                            text: ""
                        }, a);
                        var b = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                    }, d.prototype.matches = function(a, b) {
                        var c = this.options.get("matcher");
                        return c(a, b)
                    }, d
                }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        var c = b.get("data") || [];
                        d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                    }
                    return b.Extend(d, a), d.prototype.select = function(a) {
                        var b = this.$element.find("option").filter(function(b, c) {
                            return c.value == a.id.toString()
                        });
                        0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                    }, d.prototype.convertToOptions = function(a) {
                        function d(a) {
                            return function() {
                                return c(this).val() == a.id
                            }
                        }
                        for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                                return e.item(c(this)).id
                            }).get(), h = [], i = 0; i < a.length; i++) {
                            var j = this._normalizeItem(a[i]);
                            if (c.inArray(j.id, g) >= 0) {
                                var k = f.filter(d(j)),
                                    l = this.item(k),
                                    m = c.extend(!0, {}, j, l),
                                    n = this.option(m);
                                k.replaceWith(n)
                            } else {
                                var o = this.option(j);
                                if (j.children) {
                                    var p = this.convertToOptions(j.children);
                                    b.appendMany(o, p)
                                }
                                h.push(o)
                            }
                        }
                        return h
                    }, d
                }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
                    }
                    return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                        var b = {
                            data: function(a) {
                                return c.extend({}, a, {
                                    q: a.term
                                })
                            },
                            transport: function(a, b, d) {
                                var e = c.ajax(a);
                                return e.then(b), e.fail(d), e
                            }
                        };
                        return c.extend({}, b, a, !0)
                    }, d.prototype.processResults = function(a) {
                        return a
                    }, d.prototype.query = function(a, b) {
                        function d() {
                            var d = f.transport(f, function(d) {
                                var f = e.processResults(d, a);
                                e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                            }, function() {
                                d.status && "0" === d.status || e.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            e._request = d
                        }
                        var e = this;
                        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var f = c.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                    }, d
                }), b.define("select2/data/tags", ["jquery"], function(a) {
                    function b(b, c, d) {
                        var e = d.get("tags"),
                            f = d.get("createTag");
                        void 0 !== f && (this.createTag = f);
                        var g = d.get("insertTag");
                        if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                            for (var h = 0; h < e.length; h++) {
                                var i = e[h],
                                    j = this._normalizeItem(i),
                                    k = this.option(j);
                                this.$element.append(k)
                            }
                    }
                    return b.prototype.query = function(a, b, c) {
                        function d(a, f) {
                            for (var g = a.results, h = 0; h < g.length; h++) {
                                var i = g[h],
                                    j = null != i.children && !d({
                                        results: i.children
                                    }, !0),
                                    k = i.text === b.term;
                                if (k || j) return f ? !1 : (a.data = g, void c(a))
                            }
                            if (f) return !0;
                            var l = e.createTag(b);
                            if (null != l) {
                                var m = e.option(l);
                                m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                            }
                            a.results = g, c(a)
                        }
                        var e = this;
                        return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
                    }, b.prototype.createTag = function(b, c) {
                        var d = a.trim(c.term);
                        return "" === d ? null : {
                            id: d,
                            text: d
                        }
                    }, b.prototype.insertTag = function(a, b, c) {
                        b.unshift(c)
                    }, b.prototype._removeOldTags = function(b) {
                        var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        c.each(function() {
                            this.selected || a(this).remove()
                        })
                    }, b
                }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                    function b(a, b, c) {
                        var d = c.get("tokenizer");
                        void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                    }
                    return b.prototype.bind = function(a, b, c) {
                        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                    }, b.prototype.query = function(b, c, d) {
                        function e(b) {
                            var c = g._normalizeItem(b),
                                d = g.$element.find("option").filter(function() {
                                    return a(this).val() === c.id
                                });
                            if (!d.length) {
                                var e = g.option(c);
                                e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e])
                            }
                            f(c)
                        }

                        function f(a) {
                            g.trigger("select", {
                                data: a
                            })
                        }
                        var g = this;
                        c.term = c.term || "";
                        var h = this.tokenizer(c, this.options, e);
                        h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
                    }, b.prototype.tokenizer = function(b, c, d, e) {
                        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                                return {
                                    id: a.term,
                                    text: a.term
                                }
                            }; h < g.length;) {
                            var j = g[h];
                            if (-1 !== a.inArray(j, f)) {
                                var k = g.substr(0, h),
                                    l = a.extend({}, c, {
                                        term: k
                                    }),
                                    m = i(l);
                                null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                            } else h++
                        }
                        return {
                            term: g
                        }
                    }, b
                }), b.define("select2/data/minimumInputLength", [], function() {
                    function a(a, b, c) {
                        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: b.term,
                                params: b
                            }
                        }) : void a.call(this, b, c)
                    }, a
                }), b.define("select2/data/maximumInputLength", [], function() {
                    function a(a, b, c) {
                        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: b.term,
                                params: b
                            }
                        }) : void a.call(this, b, c)
                    }, a
                }), b.define("select2/data/maximumSelectionLength", [], function() {
                    function a(a, b, c) {
                        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        var d = this;
                        this.current(function(e) {
                            var f = null != e ? e.length : 0;
                            return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: d.maximumSelectionLength
                                }
                            }) : void a.call(d, b, c)
                        })
                    }, a
                }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                    function c(a, b) {
                        this.$element = a, this.options = b, c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                    }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, c
                }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                    function c() {}
                    return c.prototype.render = function(b) {
                        var c = b.call(this),
                            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                    }, c.prototype.bind = function(b, c, d) {
                        var e = this;
                        b.call(this, c, d), this.$search.on("keydown", function(a) {
                            e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                        }), this.$search.on("input", function(b) {
                            a(this).off("keyup")
                        }), this.$search.on("keyup input", function(a) {
                            e.handleSearch(a)
                        }), c.on("open", function() {
                            e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                                e.$search.focus()
                            }, 0)
                        }), c.on("close", function() {
                            e.$search.attr("tabindex", -1), e.$search.val("")
                        }), c.on("focus", function() {
                            c.isOpen() && e.$search.focus()
                        }), c.on("results:all", function(a) {
                            if (null == a.query.term || "" === a.query.term) {
                                var b = e.showSearch(a);
                                b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, c.prototype.handleSearch = function(a) {
                        if (!this._keyUpPrevented) {
                            var b = this.$search.val();
                            this.trigger("query", {
                                term: b
                            })
                        }
                        this._keyUpPrevented = !1
                    }, c.prototype.showSearch = function(a, b) {
                        return !0
                    }, c
                }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                    function a(a, b, c, d) {
                        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                    }
                    return a.prototype.append = function(a, b) {
                        b.results = this.removePlaceholder(b.results), a.call(this, b)
                    }, a.prototype.normalizePlaceholder = function(a, b) {
                        return "string" == typeof b && (b = {
                            id: "",
                            text: b
                        }), b
                    }, a.prototype.removePlaceholder = function(a, b) {
                        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                            var e = b[d];
                            this.placeholder.id === e.id && c.splice(d, 1)
                        }
                        return c
                    }, a
                }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                    function b(a, b, c, d) {
                        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return b.prototype.append = function(a, b) {
                        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                    }, b.prototype.bind = function(b, c, d) {
                        var e = this;
                        b.call(this, c, d), c.on("query", function(a) {
                            e.lastParams = a, e.loading = !0
                        }), c.on("query:append", function(a) {
                            e.lastParams = a, e.loading = !0
                        }), this.$results.on("scroll", function() {
                            var b = a.contains(document.documentElement, e.$loadingMore[0]);
                            if (!e.loading && b) {
                                var c = e.$results.offset().top + e.$results.outerHeight(!1),
                                    d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                                c + 50 >= d && e.loadMore()
                            }
                        })
                    }, b.prototype.loadMore = function() {
                        this.loading = !0;
                        var b = a.extend({}, {
                            page: 1
                        }, this.lastParams);
                        b.page++, this.trigger("query:append", b)
                    }, b.prototype.showLoadingMore = function(a, b) {
                        return b.pagination && b.pagination.more
                    }, b.prototype.createLoadingMore = function() {
                        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            c = this.options.get("translations").get("loadingMore");
                        return b.html(c(this.lastParams)), b
                    }, b
                }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                    function c(b, c, d) {
                        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
                    }
                    return c.prototype.bind = function(a, b, c) {
                        var d = this,
                            e = !1;
                        a.call(this, b, c), b.on("open", function() {
                            d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                                d._positionDropdown(), d._resizeDropdown()
                            }), b.on("results:append", function() {
                                d._positionDropdown(), d._resizeDropdown()
                            }))
                        }), b.on("close", function() {
                            d._hideDropdown(), d._detachPositioningHandler(b)
                        }), this.$dropdownContainer.on("mousedown", function(a) {
                            a.stopPropagation()
                        })
                    }, c.prototype.destroy = function(a) {
                        a.call(this), this.$dropdownContainer.remove()
                    }, c.prototype.position = function(a, b, c) {
                        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = c
                    }, c.prototype.render = function(b) {
                        var c = a("<span></span>"),
                            d = b.call(this);
                        return c.append(d), this.$dropdownContainer = c, c
                    }, c.prototype._hideDropdown = function(a) {
                        this.$dropdownContainer.detach()
                    }, c.prototype._attachPositioningHandler = function(c, d) {
                        var e = this,
                            f = "scroll.select2." + d.id,
                            g = "resize.select2." + d.id,
                            h = "orientationchange.select2." + d.id,
                            i = this.$container.parents().filter(b.hasScroll);
                        i.each(function() {
                            a(this).data("select2-scroll-position", {
                                x: a(this).scrollLeft(),
                                y: a(this).scrollTop()
                            })
                        }), i.on(f, function(b) {
                            var c = a(this).data("select2-scroll-position");
                            a(this).scrollTop(c.y)
                        }), a(window).on(f + " " + g + " " + h, function(a) {
                            e._positionDropdown(), e._resizeDropdown()
                        })
                    }, c.prototype._detachPositioningHandler = function(c, d) {
                        var e = "scroll.select2." + d.id,
                            f = "resize.select2." + d.id,
                            g = "orientationchange.select2." + d.id,
                            h = this.$container.parents().filter(b.hasScroll);
                        h.off(e), a(window).off(e + " " + f + " " + g)
                    }, c.prototype._positionDropdown = function() {
                        var b = a(window),
                            c = this.$dropdown.hasClass("select2-dropdown--above"),
                            d = this.$dropdown.hasClass("select2-dropdown--below"),
                            e = null,
                            f = this.$container.offset();
                        f.bottom = f.top + this.$container.outerHeight(!1);
                        var g = {
                            height: this.$container.outerHeight(!1)
                        };
                        g.top = f.top, g.bottom = f.top + g.height;
                        var h = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            i = {
                                top: b.scrollTop(),
                                bottom: b.scrollTop() + b.height()
                            },
                            j = i.top < f.top - h.height,
                            k = i.bottom > f.bottom + h.height,
                            l = {
                                left: f.left,
                                top: g.bottom
                            },
                            m = this.$dropdownParent;
                        "static" === m.css("position") && (m = m.offsetParent());
                        var n = m.offset();
                        l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                    }, c.prototype._resizeDropdown = function() {
                        var a = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
                    }, c.prototype._showDropdown = function(a) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, c
                }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function a(b) {
                        for (var c = 0, d = 0; d < b.length; d++) {
                            var e = b[d];
                            e.children ? c += a(e.children) : c++
                        }
                        return c
                    }

                    function b(a, b, c, d) {
                        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                    }
                    return b.prototype.showSearch = function(b, c) {
                        return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
                    }, b
                }), b.define("select2/dropdown/selectOnClose", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), b.on("close", function(a) {
                            d._handleSelectOnClose(a)
                        })
                    }, a.prototype._handleSelectOnClose = function(a, b) {
                        if (b && null != b.originalSelect2Event) {
                            var c = b.originalSelect2Event;
                            if ("select" === c._type || "unselect" === c._type) return
                        }
                        var d = this.getHighlightedResults();
                        if (!(d.length < 1)) {
                            var e = d.data("data");
                            null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                                data: e
                            })
                        }
                    }, a
                }), b.define("select2/dropdown/closeOnSelect", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), b.on("select", function(a) {
                            d._selectTriggered(a)
                        }), b.on("unselect", function(a) {
                            d._selectTriggered(a)
                        })
                    }, a.prototype._selectTriggered = function(a, b) {
                        var c = b.originalEvent;
                        c && c.ctrlKey || this.trigger("close", {
                            originalEvent: c,
                            originalSelect2Event: b
                        })
                    }, a
                }), b.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(a) {
                            var b = a.input.length - a.maximum,
                                c = "Please delete " + b + " character";
                            return 1 != b && (c += "s"), c
                        },
                        inputTooShort: function(a) {
                            var b = a.minimum - a.input.length,
                                c = "Please enter " + b + " or more characters";
                            return c
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(a) {
                            var b = "You can only select " + a.maximum + " item";
                            return 1 != a.maximum && (b += "s"), b
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                    function D() {
                        this.reset()
                    }
                    D.prototype.apply = function(l) {
                        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                            if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                                var C = b(l.amdBase + "compat/query");
                                l.dataAdapter = j.Decorate(l.dataAdapter, C)
                            }
                            if (null != l.initSelection) {
                                var D = b(l.amdBase + "compat/initSelection");
                                l.dataAdapter = j.Decorate(l.dataAdapter, D)
                            }
                        }
                        if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                            if (l.multiple) l.dropdownAdapter = u;
                            else {
                                var E = j.Decorate(u, v);
                                l.dropdownAdapter = E
                            }
                            if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                                var F = b(l.amdBase + "compat/dropdownCss");
                                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                            }
                            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                        }
                        if (null == l.selectionAdapter) {
                            if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                                var G = b(l.amdBase + "compat/containerCss");
                                l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                            }
                            l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                        }
                        if ("string" == typeof l.language)
                            if (l.language.indexOf("-") > 0) {
                                var H = l.language.split("-"),
                                    I = H[0];
                                l.language = [l.language, I]
                            } else l.language = [l.language];
                        if (a.isArray(l.language)) {
                            var J = new k;
                            l.language.push("en");
                            for (var K = l.language, L = 0; L < K.length; L++) {
                                var M = K[L],
                                    N = {};
                                try {
                                    N = k.loadPath(M)
                                } catch (O) {
                                    try {
                                        M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                    } catch (P) {
                                        l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                J.extend(N)
                            }
                            l.translations = J
                        } else {
                            var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                                R = new k(l.language);
                            R.extend(Q), l.translations = R
                        }
                        return l
                    }, D.prototype.reset = function() {
                        function b(a) {
                            function b(a) {
                                return l[a] || a
                            }
                            return a.replace(/[^\u0000-\u007E]/g, b)
                        }

                        function c(d, e) {
                            if ("" === a.trim(d.term)) return e;
                            if (e.children && e.children.length > 0) {
                                for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                    var h = e.children[g],
                                        i = c(d, h);
                                    null == i && f.children.splice(g, 1)
                                }
                                return f.children.length > 0 ? f : c(d, f)
                            }
                            var j = b(e.text).toUpperCase(),
                                k = b(d.term).toUpperCase();
                            return j.indexOf(k) > -1 ? e : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: j.escapeMarkup,
                            language: C,
                            matcher: c,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(a) {
                                return a
                            },
                            templateResult: function(a) {
                                return a.text
                            },
                            templateSelection: function(a) {
                                return a.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, D.prototype.set = function(b, c) {
                        var d = a.camelCase(b),
                            e = {};
                        e[d] = c;
                        var f = j._convertData(e);
                        a.extend(this.defaults, f)
                    };
                    var E = new D;
                    return E
                }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                    function e(b, e) {
                        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                            var f = a(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                        }
                    }
                    return e.prototype.fromElement = function(a) {
                        var c = ["select2"];
                        null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                        var e = {};
                        e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                        var f = b.extend(!0, {}, e);
                        f = d._convertData(f);
                        for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                        return this
                    }, e.prototype.get = function(a) {
                        return this.options[a]
                    }, e.prototype.set = function(a, b) {
                        this.options[a] = b
                    }, e
                }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                    var e = function(a, c) {
                        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                        var d = a.attr("tabindex") || 0;
                        a.data("old-tabindex", d), a.attr("tabindex", "-1");
                        var f = this.options.get("dataAdapter");
                        this.dataAdapter = new f(a, this.options);
                        var g = this.render();
                        this._placeContainer(g);
                        var h = this.options.get("selectionAdapter");
                        this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                        var i = this.options.get("dropdownAdapter");
                        this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                        var j = this.options.get("resultsAdapter");
                        this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var k = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                            k.trigger("selection:update", {
                                data: a
                            })
                        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                    };
                    return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                        var b = "";
                        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
                    }, e.prototype._placeContainer = function(a) {
                        a.insertAfter(this.$element);
                        var b = this._resolveWidth(this.$element, this.options.get("width"));
                        null != b && a.css("width", b)
                    }, e.prototype._resolveWidth = function(a, b) {
                        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == b) {
                            var d = this._resolveWidth(a, "style");
                            return null != d ? d : this._resolveWidth(a, "element")
                        }
                        if ("element" == b) {
                            var e = a.outerWidth(!1);
                            return 0 >= e ? "auto" : e + "px"
                        }
                        if ("style" == b) {
                            var f = a.attr("style");
                            if ("string" != typeof f) return null;
                            for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                                var j = g[h].replace(/\s/g, ""),
                                    k = j.match(c);
                                if (null !== k && k.length >= 1) return k[1]
                            }
                            return null
                        }
                        return b
                    }, e.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, e.prototype._registerDomEvents = function() {
                        var b = this;
                        this.$element.on("change.select2", function() {
                            b.dataAdapter.current(function(a) {
                                b.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }), this.$element.on("focus.select2", function(a) {
                            b.trigger("focus", a)
                        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != d ? (this._observer = new d(function(c) {
                            a.each(c, b._syncA), a.each(c, b._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                    }, e.prototype._registerDataEvents = function() {
                        var a = this;
                        this.dataAdapter.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerSelectionEvents = function() {
                        var b = this,
                            c = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            b.toggleDropdown()
                        }), this.selection.on("focus", function(a) {
                            b.focus(a)
                        }), this.selection.on("*", function(d, e) {
                            -1 === a.inArray(d, c) && b.trigger(d, e)
                        })
                    }, e.prototype._registerDropdownEvents = function() {
                        var a = this;
                        this.dropdown.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerResultsEvents = function() {
                        var a = this;
                        this.results.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerEvents = function() {
                        var a = this;
                        this.on("open", function() {
                            a.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            a.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            a.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            a.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            a.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(b) {
                            a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                                a.trigger("results:all", {
                                    data: c,
                                    query: b
                                })
                            })
                        }), this.on("query:append", function(b) {
                            this.dataAdapter.query(b, function(c) {
                                a.trigger("results:append", {
                                    data: c,
                                    query: b
                                })
                            })
                        }), this.on("keypress", function(b) {
                            var c = b.which;
                            a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                        })
                    }, e.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, e.prototype._syncSubtree = function(a, b) {
                        var c = !1,
                            d = this;
                        if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                            if (b)
                                if (b.addedNodes && b.addedNodes.length > 0)
                                    for (var e = 0; e < b.addedNodes.length; e++) {
                                        var f = b.addedNodes[e];
                                        f.selected && (c = !0)
                                    } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                                else c = !0;
                            c && this.dataAdapter.current(function(a) {
                                d.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }
                    }, e.prototype.trigger = function(a, b) {
                        var c = e.__super__.trigger,
                            d = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === b && (b = {}), a in d) {
                            var f = d[a],
                                g = {
                                    prevented: !1,
                                    name: a,
                                    args: b
                                };
                            if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                        }
                        c.call(this, a, b)
                    }, e.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, e.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, e.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, e.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, e.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, e.prototype.focus = function(a) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, e.prototype.enable = function(a) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                        var b = !a[0];
                        this.$element.prop("disabled", b)
                    }, e.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var a = [];
                        return this.dataAdapter.current(function(b) {
                            a = b
                        }), a
                    }, e.prototype.val = function(b) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                        var c = b[0];
                        a.isArray(c) && (c = a.map(c, function(a) {
                            return a.toString()
                        })), this.$element.val(c).trigger("change")
                    }, e.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
                    }, e.prototype.render = function() {
                        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                    }, e
                }), b.define("select2/compat/utils", ["jquery"], function(a) {
                    function b(b, c, d) {
                        var e, f, g = [];
                        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && g.push(this)
                        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f))
                        })), b.attr("class", g.join(" "))
                    }
                    return {
                        syncCssClasses: b
                    }
                }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                    function c(a) {
                        return null
                    }

                    function d() {}
                    return d.prototype.render = function(d) {
                        var e = d.call(this),
                            f = this.options.get("containerCssClass") || "";
                        a.isFunction(f) && (f = f(this.$element));
                        var g = this.options.get("adaptContainerCssClass");
                        if (g = g || c, -1 !== f.indexOf(":all:")) {
                            f = f.replace(":all:", "");
                            var h = g;
                            g = function(a) {
                                var b = h(a);
                                return null != b ? b + " " + a : a
                            }
                        }
                        var i = this.options.get("containerCss") || {};
                        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                    }, d
                }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                    function c(a) {
                        return null
                    }

                    function d() {}
                    return d.prototype.render = function(d) {
                        var e = d.call(this),
                            f = this.options.get("dropdownCssClass") || "";
                        a.isFunction(f) && (f = f(this.$element));
                        var g = this.options.get("adaptDropdownCssClass");
                        if (g = g || c, -1 !== f.indexOf(":all:")) {
                            f = f.replace(":all:", "");
                            var h = g;
                            g = function(a) {
                                var b = h(a);
                                return null != b ? b + " " + a : a
                            }
                        }
                        var i = this.options.get("dropdownCss") || {};
                        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                    }, d
                }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                    function b(a, b, c) {
                        c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
                    }
                    return b.prototype.current = function(b, c) {
                        var d = this;
                        return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function(b) {
                            d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                        })
                    }, b
                }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                    function b(a, b, c) {
                        this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
                    }
                    return b.prototype.current = function(b, c) {
                        function d(b, c) {
                            var e = [];
                            return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                        }
                        for (var e = [], f = 0; f < this._currentData.length; f++) {
                            var g = this._currentData[f];
                            e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                        }
                        c(e)
                    }, b.prototype.select = function(b, c) {
                        if (this.options.get("multiple")) {
                            var d = this.$element.val();
                            d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                        } else this.current(function(b) {
                            a.map(b, function(a) {
                                a.selected = !1
                            })
                        }), this.$element.val(c.id), this.$element.trigger("change")
                    }, b.prototype.unselect = function(a, b) {
                        var c = this;
                        b.selected = !1, this.current(function(a) {
                            for (var d = [], e = 0; e < a.length; e++) {
                                var f = a[e];
                                b.id != f.id && d.push(f.id)
                            }
                            c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                        })
                    }, b.prototype.query = function(a, b, c) {
                        for (var d = [], e = 0; e < this._currentData.length; e++) {
                            var f = this._currentData[e],
                                g = this.matches(b, f);
                            null !== g && d.push(g)
                        }
                        c({
                            results: d
                        })
                    }, b.prototype.addOptions = function(b, c) {
                        var d = a.map(c, function(b) {
                            return a.data(b[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, d)
                    }, b
                }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                    function b(b) {
                        function c(c, d) {
                            var e = a.extend(!0, {}, d);
                            if (null == c.term || "" === a.trim(c.term)) return e;
                            if (d.children) {
                                for (var f = d.children.length - 1; f >= 0; f--) {
                                    var g = d.children[f],
                                        h = b(c.term, g.text, g);
                                    h || e.children.splice(f, 1)
                                }
                                if (e.children.length > 0) return e
                            }
                            return b(c.term, d.text, d) ? e : null
                        }
                        return c
                    }
                    return b
                }), b.define("select2/compat/query", [], function() {
                    function a(a, b, c) {
                        c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        b.callback = c;
                        var d = this.options.get("query");
                        d.call(null, b)
                    }, a
                }), b.define("select2/dropdown/attachContainer", [], function() {
                    function a(a, b, c) {
                        a.call(this, b, c)
                    }
                    return a.prototype.position = function(a, b, c) {
                        var d = c.find(".dropdown-wrapper");
                        d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                    }, a
                }), b.define("select2/dropdown/stopPropagation", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(d.join(" "), function(a) {
                            a.stopPropagation()
                        })
                    }, a
                }), b.define("select2/selection/stopPropagation", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(d.join(" "), function(a) {
                            a.stopPropagation()
                        })
                    }, a
                }),
                function(c) {
                    "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
                }(function(a) {
                    function b(b) {
                        var g = b || window.event,
                            h = i.call(arguments, 1),
                            j = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0;
                        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                            if (1 === g.deltaMode) {
                                var q = a.data(this, "mousewheel-line-height");
                                j *= q, m *= q, l *= q
                            } else if (2 === g.deltaMode) {
                                var r = a.data(this, "mousewheel-page-height");
                                j *= r, m *= r, l *= r
                            }
                            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                var s = this.getBoundingClientRect();
                                o = b.clientX - s.left, p = b.clientY - s.top
                            }
                            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                        }
                    }

                    function c() {
                        f = null
                    }

                    function d(a, b) {
                        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
                    }
                    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        i = Array.prototype.slice;
                    if (a.event.fixHooks)
                        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                    var k = a.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                            else this.onmousewheel = b;
                            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                            else this.onmousewheel = null;
                            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(b) {
                            var c = a(b),
                                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(b) {
                            return a(b).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    a.fn.extend({
                        mousewheel: function(a) {
                            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(a) {
                            return this.unbind("mousewheel", a)
                        }
                    })
                }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                    if (null == a.fn.select2) {
                        var e = ["open", "close", "destroy"];
                        a.fn.select2 = function(b) {
                            if (b = b || {}, "object" == typeof b) return this.each(function() {
                                var d = a.extend(!0, {}, b);
                                new c(a(this), d)
                            }), this;
                            if ("string" == typeof b) {
                                var d, f = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var c = a(this).data("select2");
                                    null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                                }), a.inArray(b, e) > -1 ? this : d
                            }
                            throw new Error("Invalid arguments for Select2: " + b)
                        }
                    }
                    return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                }), {
                    define: b.define,
                    require: b.require
                }
        }(),
        c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});