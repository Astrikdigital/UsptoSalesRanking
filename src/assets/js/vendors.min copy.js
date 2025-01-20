/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/**
 * @popperjs/core v2.9.2 - MIT License
 */

("use strict");
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Popper =
          {})
      );
})(this, function (e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function n(e) {
    return null == e
      ? window
      : "[object Window]" !== e.toString()
      ? ((e = e.ownerDocument) && e.defaultView) || window
      : e;
  }
  function o(e) {
    return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
  }
  function r(e) {
    return e instanceof n(e).Element || e instanceof Element;
  }
  function i(e) {
    return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
  }
  function a(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  function s(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function f(e) {
    return (
      (r(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function p(e) {
    return t(f(e)).left + o(e).scrollLeft;
  }
  function c(e) {
    return n(e).getComputedStyle(e);
  }
  function l(e) {
    return (
      (e = c(e)),
      /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    );
  }
  function u(e, r, a) {
    void 0 === a && (a = !1);
    var c = f(r);
    e = t(e);
    var u = i(r),
      d = { scrollLeft: 0, scrollTop: 0 },
      m = { x: 0, y: 0 };
    return (
      (u || (!u && !a)) &&
        (("body" !== s(r) || l(c)) &&
          (d =
            r !== n(r) && i(r)
              ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
              : o(r)),
        i(r)
          ? (((m = t(r)).x += r.clientLeft), (m.y += r.clientTop))
          : c && (m.x = p(c))),
      {
        x: e.left + d.scrollLeft - m.x,
        y: e.top + d.scrollTop - m.y,
        width: e.width,
        height: e.height,
      }
    );
  }
  function d(e) {
    var n = t(e),
      o = e.offsetWidth,
      r = e.offsetHeight;
    return (
      1 >= Math.abs(n.width - o) && (o = n.width),
      1 >= Math.abs(n.height - r) && (r = n.height),
      { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
    );
  }
  function m(e) {
    return "html" === s(e)
      ? e
      : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
  }
  function h(e) {
    return 0 <= ["html", "body", "#document"].indexOf(s(e))
      ? e.ownerDocument.body
      : i(e) && l(e)
      ? e
      : h(m(e));
  }
  function v(e, t) {
    var o;
    void 0 === t && (t = []);
    var r = h(e);
    return (
      (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body)),
      (o = n(r)),
      (r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r),
      (t = t.concat(r)),
      e ? t : t.concat(v(m(r)))
    );
  }
  function g(e) {
    return i(e) && "fixed" !== c(e).position ? e.offsetParent : null;
  }
  function y(e) {
    for (
      var t = n(e), o = g(e);
      o &&
      0 <= ["table", "td", "th"].indexOf(s(o)) &&
      "static" === c(o).position;

    )
      o = g(o);
    if (
      o &&
      ("html" === s(o) || ("body" === s(o) && "static" === c(o).position))
    )
      return t;
    if (!o)
      e: {
        if (
          ((o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")),
          -1 === navigator.userAgent.indexOf("Trident") ||
            !i(e) ||
            "fixed" !== c(e).position)
        )
          for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e)); ) {
            var r = c(e);
            if (
              "none" !== r.transform ||
              "none" !== r.perspective ||
              "paint" === r.contain ||
              -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
              (o && "filter" === r.willChange) ||
              (o && r.filter && "none" !== r.filter)
            ) {
              o = e;
              break e;
            }
            e = e.parentNode;
          }
        o = null;
      }
    return o || t;
  }
  function b(e) {
    function t(e) {
      o.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            o.has(e) || ((e = n.get(e)) && t(e));
          }),
        r.push(e);
    }
    var n = new Map(),
      o = new Set(),
      r = [];
    return (
      e.forEach(function (e) {
        n.set(e.name, e);
      }),
      e.forEach(function (e) {
        o.has(e.name) || t(e);
      }),
      r
    );
  }
  function w(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function x(e) {
    return e.split("-")[0];
  }
  function O(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n))
      do {
        if (t && e.isSameNode(t)) return !0;
        t = t.parentNode || t.host;
      } while (t);
    return !1;
  }
  function j(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function E(e, r) {
    if ("viewport" === r) {
      r = n(e);
      var a = f(e);
      r = r.visualViewport;
      var s = a.clientWidth;
      a = a.clientHeight;
      var l = 0,
        u = 0;
      r &&
        ((s = r.width),
        (a = r.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((l = r.offsetLeft), (u = r.offsetTop))),
        (e = j((e = { width: s, height: a, x: l + p(e), y: u })));
    } else i(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((u = f(e)), (e = f(u)), (s = o(u)), (r = null == (a = u.ownerDocument) ? void 0 : a.body), (a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (u = -s.scrollLeft + p(u)), (s = -s.scrollTop), "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), (e = j({ width: a, height: l, x: u, y: s })));
    return e;
  }
  function D(e, t, n) {
    return (
      (t =
        "clippingParents" === t
          ? (function (e) {
              var t = v(m(e)),
                n =
                  0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e)
                    ? y(e)
                    : e;
              return r(n)
                ? t.filter(function (e) {
                    return r(e) && O(e, n) && "body" !== s(e);
                  })
                : [];
            })(e)
          : [].concat(t)),
      ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
        return (
          (n = E(e, n)),
          (t.top = _(n.top, t.top)),
          (t.right = U(n.right, t.right)),
          (t.bottom = U(n.bottom, t.bottom)),
          (t.left = _(n.left, t.left)),
          t
        );
      }, E(e, n[0]))).width = n.right - n.left),
      (n.height = n.bottom - n.top),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function L(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }
  function P(e) {
    var t = e.reference,
      n = e.element,
      o = (e = e.placement) ? x(e) : null;
    e = e ? e.split("-")[1] : null;
    var r = t.x + t.width / 2 - n.width / 2,
      i = t.y + t.height / 2 - n.height / 2;
    switch (o) {
      case "top":
        r = { x: r, y: t.y - n.height };
        break;
      case "bottom":
        r = { x: r, y: t.y + t.height };
        break;
      case "right":
        r = { x: t.x + t.width, y: i };
        break;
      case "left":
        r = { x: t.x - n.width, y: i };
        break;
      default:
        r = { x: t.x, y: t.y };
    }
    if (null != (o = o ? L(o) : null))
      switch (((i = "y" === o ? "height" : "width"), e)) {
        case "start":
          r[o] -= t[i] / 2 - n[i] / 2;
          break;
        case "end":
          r[o] += t[i] / 2 - n[i] / 2;
      }
    return r;
  }
  function M(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function k(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function A(e, n) {
    void 0 === n && (n = {});
    var o = n;
    n = void 0 === (n = o.placement) ? e.placement : n;
    var i = o.boundary,
      a = void 0 === i ? "clippingParents" : i,
      s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
    i = void 0 === (i = o.elementContext) ? "popper" : i;
    var p = o.altBoundary,
      c = void 0 !== p && p;
    o = M(
      "number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)
    );
    var l = e.elements.reference;
    (p = e.rects.popper),
      (a = D(
        r((c = e.elements[c ? ("popper" === i ? "reference" : "popper") : i]))
          ? c
          : c.contextElement || f(e.elements.popper),
        a,
        s
      )),
      (c = P({
        reference: (s = t(l)),
        element: p,
        strategy: "absolute",
        placement: n,
      })),
      (p = j(Object.assign({}, p, c))),
      (s = "popper" === i ? p : s);
    var u = {
      top: a.top - s.top + o.top,
      bottom: s.bottom - a.bottom + o.bottom,
      left: a.left - s.left + o.left,
      right: s.right - a.right + o.right,
    };
    if (((e = e.modifiersData.offset), "popper" === i && e)) {
      var d = e[n];
      Object.keys(u).forEach(function (e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
          n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        u[e] += d[n] * t;
      });
    }
    return u;
  }
  function W() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function B(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
      n = void 0 === t ? [] : t,
      o = void 0 === (e = e.defaultOptions) ? F : e;
    return function (e, t, i) {
      function a() {
        f.forEach(function (e) {
          return e();
        }),
          (f = []);
      }
      void 0 === i && (i = o);
      var s = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, F, o),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        f = [],
        p = !1,
        c = {
          state: s,
          setOptions: function (i) {
            return (
              a(),
              (s.options = Object.assign({}, o, s.options, i)),
              (s.scrollParents = {
                reference: r(e)
                  ? v(e)
                  : e.contextElement
                  ? v(e.contextElement)
                  : [],
                popper: v(t),
              }),
              (i = (function (e) {
                var t = b(e);
                return I.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(n, s.options.modifiers))
              )),
              (s.orderedModifiers = i.filter(function (e) {
                return e.enabled;
              })),
              s.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options;
                (n = void 0 === n ? {} : n),
                  "function" == typeof (e = e.effect) &&
                    ((t = e({ state: s, name: t, instance: c, options: n })),
                    f.push(t || function () {}));
              }),
              c.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = s.elements,
                t = e.reference;
              if (W(t, (e = e.popper)))
                for (
                  s.rects = {
                    reference: u(t, y(e), "fixed" === s.options.strategy),
                    popper: d(e),
                  },
                    s.reset = !1,
                    s.placement = s.options.placement,
                    s.orderedModifiers.forEach(function (e) {
                      return (s.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    }),
                    t = 0;
                  t < s.orderedModifiers.length;
                  t++
                )
                  if (!0 === s.reset) (s.reset = !1), (t = -1);
                  else {
                    var n = s.orderedModifiers[t];
                    e = n.fn;
                    var o = n.options;
                    (o = void 0 === o ? {} : o),
                      (n = n.name),
                      "function" == typeof e &&
                        (s =
                          e({ state: s, options: o, name: n, instance: c }) ||
                          s);
                  }
            }
          },
          update: w(function () {
            return new Promise(function (e) {
              c.forceUpdate(), e(s);
            });
          }),
          destroy: function () {
            a(), (p = !0);
          },
        };
      return W(e, t)
        ? (c.setOptions(i).then(function (e) {
            !p && i.onFirstUpdate && i.onFirstUpdate(e);
          }),
          c)
        : c;
    };
  }
  function T(e) {
    var t,
      o = e.popper,
      r = e.popperRect,
      i = e.placement,
      a = e.offsets,
      s = e.position,
      p = e.gpuAcceleration,
      l = e.adaptive;
    if (!0 === (e = e.roundOffsets)) {
      e = a.y;
      var u = window.devicePixelRatio || 1;
      e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 };
    } else e = "function" == typeof e ? e(a) : a;
    (e = void 0 === (e = (u = e).x) ? 0 : e),
      (u = void 0 === (u = u.y) ? 0 : u);
    var d = a.hasOwnProperty("x");
    a = a.hasOwnProperty("y");
    var m,
      h = "left",
      v = "top",
      g = window;
    if (l) {
      var b = y(o),
        w = "clientHeight",
        x = "clientWidth";
      b === n(o) &&
        "static" !== c((b = f(o))).position &&
        ((w = "scrollHeight"), (x = "scrollWidth")),
        "top" === i &&
          ((v = "bottom"), (u -= b[w] - r.height), (u *= p ? 1 : -1)),
        "left" === i &&
          ((h = "right"), (e -= b[x] - r.width), (e *= p ? 1 : -1));
    }
    return (
      (o = Object.assign({ position: s }, l && J)),
      p
        ? Object.assign(
            {},
            o,
            (((m = {})[v] = a ? "0" : ""),
            (m[h] = d ? "0" : ""),
            (m.transform =
              2 > (g.devicePixelRatio || 1)
                ? "translate(" + e + "px, " + u + "px)"
                : "translate3d(" + e + "px, " + u + "px, 0)"),
            m)
          )
        : Object.assign(
            {},
            o,
            (((t = {})[v] = a ? u + "px" : ""),
            (t[h] = d ? e + "px" : ""),
            (t.transform = ""),
            t)
          )
    );
  }
  function H(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return $[e];
    });
  }
  function R(e) {
    return e.replace(/start|end/g, function (e) {
      return ee[e];
    });
  }
  function S(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function q(e) {
    return ["top", "right", "bottom", "left"].some(function (t) {
      return 0 <= e[t];
    });
  }
  var C = ["top", "bottom", "right", "left"],
    N = C.reduce(function (e, t) {
      return e.concat([t + "-start", t + "-end"]);
    }, []),
    V = [].concat(C, ["auto"]).reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
    I =
      "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(
        " "
      ),
    _ = Math.max,
    U = Math.min,
    z = Math.round,
    F = { placement: "bottom", modifiers: [], strategy: "absolute" },
    X = { passive: !0 },
    Y = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          o = e.instance,
          r = (e = e.options).scroll,
          i = void 0 === r || r,
          a = void 0 === (e = e.resize) || e,
          s = n(t.elements.popper),
          f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          i &&
            f.forEach(function (e) {
              e.addEventListener("scroll", o.update, X);
            }),
          a && s.addEventListener("resize", o.update, X),
          function () {
            i &&
              f.forEach(function (e) {
                e.removeEventListener("scroll", o.update, X);
              }),
              a && s.removeEventListener("resize", o.update, X);
          }
        );
      },
      data: {},
    },
    G = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state;
        t.modifiersData[e.name] = P({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    J = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
    K = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = void 0 === (e = n.gpuAcceleration) || e;
        var o = n.adaptive;
        (o = void 0 === o || o),
          (n = void 0 === (n = n.roundOffsets) || n),
          (e = {
            placement: x(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: e,
          }),
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: o,
                  roundOffsets: n,
                })
              )
            )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: n,
                })
              )
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          }));
      },
      data: {},
    },
    Q = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            o = t.attributes[e] || {},
            r = t.elements[e];
          i(r) &&
            s(r) &&
            (Object.assign(r.style, n),
            Object.keys(o).forEach(function (e) {
              var t = o[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var o = t.elements[e],
                r = t.attributes[e] || {};
              (e = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {})),
                i(o) &&
                  s(o) &&
                  (Object.assign(o.style, e),
                  Object.keys(r).forEach(function (e) {
                    o.removeAttribute(e);
                  }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    },
    Z = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          o = void 0 === (e = e.options.offset) ? [0, 0] : e,
          r = (e = V.reduce(function (e, n) {
            var r = t.rects,
              i = x(n),
              a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
              s =
                "function" == typeof o
                  ? o(Object.assign({}, r, { placement: n }))
                  : o;
            return (
              (r = (r = s[0]) || 0),
              (s = ((s = s[1]) || 0) * a),
              (i =
                0 <= ["left", "right"].indexOf(i)
                  ? { x: s, y: r }
                  : { x: r, y: s }),
              (e[n] = i),
              e
            );
          }, {}))[t.placement],
          i = r.x;
        (r = r.y),
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += i),
            (t.modifiersData.popperOffsets.y += r)),
          (t.modifiersData[n] = e);
      },
    },
    $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
    ee = { start: "end", end: "start" },
    te = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        if (((e = e.name), !t.modifiersData[e]._skip)) {
          var o = n.mainAxis;
          o = void 0 === o || o;
          var r = n.altAxis;
          r = void 0 === r || r;
          var i = n.fallbackPlacements,
            a = n.padding,
            s = n.boundary,
            f = n.rootBoundary,
            p = n.altBoundary,
            c = n.flipVariations,
            l = void 0 === c || c,
            u = n.allowedAutoPlacements;
          (c = x((n = t.options.placement))),
            (i =
              i ||
              (c !== n && l
                ? (function (e) {
                    if ("auto" === x(e)) return [];
                    var t = H(e);
                    return [R(e), t, R(t)];
                  })(n)
                : [H(n)]));
          var d = [n].concat(i).reduce(function (e, n) {
            return e.concat(
              "auto" === x(n)
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t.boundary,
                      o = t.rootBoundary,
                      r = t.padding,
                      i = t.flipVariations,
                      a = t.allowedAutoPlacements,
                      s = void 0 === a ? V : a,
                      f = t.placement.split("-")[1];
                    0 ===
                      (i = (t = f
                        ? i
                          ? N
                          : N.filter(function (e) {
                              return e.split("-")[1] === f;
                            })
                        : C).filter(function (e) {
                        return 0 <= s.indexOf(e);
                      })).length && (i = t);
                    var p = i.reduce(function (t, i) {
                      return (
                        (t[i] = A(e, {
                          placement: i,
                          boundary: n,
                          rootBoundary: o,
                          padding: r,
                        })[x(i)]),
                        t
                      );
                    }, {});
                    return Object.keys(p).sort(function (e, t) {
                      return p[e] - p[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: s,
                    rootBoundary: f,
                    padding: a,
                    flipVariations: l,
                    allowedAutoPlacements: u,
                  })
                : n
            );
          }, []);
          (n = t.rects.reference), (i = t.rects.popper);
          var m = new Map();
          c = !0;
          for (var h = d[0], v = 0; v < d.length; v++) {
            var g = d[v],
              y = x(g),
              b = "start" === g.split("-")[1],
              w = 0 <= ["top", "bottom"].indexOf(y),
              O = w ? "width" : "height",
              j = A(t, {
                placement: g,
                boundary: s,
                rootBoundary: f,
                altBoundary: p,
                padding: a,
              });
            if (
              ((b = w ? (b ? "right" : "left") : b ? "bottom" : "top"),
              n[O] > i[O] && (b = H(b)),
              (O = H(b)),
              (w = []),
              o && w.push(0 >= j[y]),
              r && w.push(0 >= j[b], 0 >= j[O]),
              w.every(function (e) {
                return e;
              }))
            ) {
              (h = g), (c = !1);
              break;
            }
            m.set(g, w);
          }
          if (c)
            for (
              o = function (e) {
                var t = d.find(function (t) {
                  if ((t = m.get(t)))
                    return t.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (h = t), "break";
              },
                r = l ? 3 : 1;
              0 < r && "break" !== o(r);
              r--
            );
          t.placement !== h &&
            ((t.modifiersData[e]._skip = !0),
            (t.placement = h),
            (t.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    },
    ne = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var o = n.mainAxis,
          r = void 0 === o || o,
          i = void 0 !== (o = n.altAxis) && o;
        o = void 0 === (o = n.tether) || o;
        var a = n.tetherOffset,
          s = void 0 === a ? 0 : a,
          f = A(t, {
            boundary: n.boundary,
            rootBoundary: n.rootBoundary,
            padding: n.padding,
            altBoundary: n.altBoundary,
          });
        n = x(t.placement);
        var p = t.placement.split("-")[1],
          c = !p,
          l = L(n);
        (n = "x" === l ? "y" : "x"), (a = t.modifiersData.popperOffsets);
        var u = t.rects.reference,
          m = t.rects.popper,
          h =
            "function" == typeof s
              ? s(Object.assign({}, t.rects, { placement: t.placement }))
              : s;
        if (((s = { x: 0, y: 0 }), a)) {
          if (r || i) {
            var v = "y" === l ? "top" : "left",
              g = "y" === l ? "bottom" : "right",
              b = "y" === l ? "height" : "width",
              w = a[l],
              O = a[l] + f[v],
              j = a[l] - f[g],
              E = o ? -m[b] / 2 : 0,
              D = "start" === p ? u[b] : m[b];
            (p = "start" === p ? -m[b] : -u[b]),
              (m = t.elements.arrow),
              (m = o && m ? d(m) : { width: 0, height: 0 });
            var P = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 };
            (v = P[v]),
              (g = P[g]),
              (m = _(0, U(u[b], m[b]))),
              (D = c ? u[b] / 2 - E - m - v - h : D - m - v - h),
              (u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h),
              (c = t.elements.arrow && y(t.elements.arrow)),
              (h = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement][l]
                : 0),
              (c =
                a[l] +
                D -
                h -
                (c ? ("y" === l ? c.clientTop || 0 : c.clientLeft || 0) : 0)),
              (u = a[l] + u - h),
              r &&
                ((r = o ? U(O, c) : O),
                (j = o ? _(j, u) : j),
                (r = _(r, U(w, j))),
                (a[l] = r),
                (s[l] = r - w)),
              i &&
                ((r = (i = a[n]) + f["x" === l ? "top" : "left"]),
                (f = i - f["x" === l ? "bottom" : "right"]),
                (r = o ? U(r, c) : r),
                (o = o ? _(f, u) : f),
                (o = _(r, U(i, o))),
                (a[n] = o),
                (s[n] = o - i));
          }
          t.modifiersData[e] = s;
        }
      },
      requiresIfExists: ["offset"],
    },
    oe = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          o = e.name,
          r = e.options,
          i = n.elements.arrow,
          a = n.modifiersData.popperOffsets,
          s = x(n.placement);
        if (
          ((e = L(s)),
          (s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width"),
          i && a)
        ) {
          r = M(
            "number" !=
              typeof (r =
                "function" == typeof (r = r.padding)
                  ? r(Object.assign({}, n.rects, { placement: n.placement }))
                  : r)
              ? r
              : k(r, C)
          );
          var f = d(i),
            p = "y" === e ? "top" : "left",
            c = "y" === e ? "bottom" : "right",
            l =
              n.rects.reference[s] +
              n.rects.reference[e] -
              a[e] -
              n.rects.popper[s];
          (a = a[e] - n.rects.reference[e]),
            (a =
              (i = (i = y(i))
                ? "y" === e
                  ? i.clientHeight || 0
                  : i.clientWidth || 0
                : 0) /
                2 -
              f[s] / 2 +
              (l / 2 - a / 2)),
            (s = _(r[p], U(a, i - f[s] - r[c]))),
            (n.modifiersData[o] =
              (((t = {})[e] = s), (t.centerOffset = s - a), t));
        }
      },
      effect: function (e) {
        var t = e.state;
        if (
          null !=
          (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)
        ) {
          if ("string" == typeof e && !(e = t.elements.popper.querySelector(e)))
            return;
          O(t.elements.popper, e) && (t.elements.arrow = e);
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    re = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state;
        e = e.name;
        var n = t.rects.reference,
          o = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          i = A(t, { elementContext: "reference" }),
          a = A(t, { altBoundary: !0 });
        (n = S(i, n)),
          (o = S(a, o, r)),
          (r = q(n)),
          (a = q(o)),
          (t.modifiersData[e] = {
            referenceClippingOffsets: n,
            popperEscapeOffsets: o,
            isReferenceHidden: r,
            hasPopperEscaped: a,
          }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": r,
            "data-popper-escaped": a,
          }));
      },
    },
    ie = B({ defaultModifiers: [Y, G, K, Q] }),
    ae = [Y, G, K, Q, Z, te, ne, oe, re],
    se = B({ defaultModifiers: ae });
  (e.applyStyles = Q),
    (e.arrow = oe),
    (e.computeStyles = K),
    (e.createPopper = se),
    (e.createPopperLite = ie),
    (e.defaultModifiers = ae),
    (e.detectOverflow = A),
    (e.eventListeners = Y),
    (e.flip = te),
    (e.hide = re),
    (e.offset = Z),
    (e.popperGenerator = B),
    (e.popperOffsets = G),
    (e.preventOverflow = ne),
    Object.defineProperty(e, "__esModule", { value: !0 });
});

/*!
 * Bootstrap v5.0.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("@popperjs/core")))
    : "function" == typeof define && define.amd
    ? define(["@popperjs/core"], e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e(t.Popper));
})(this, function (t) {
  "use strict";
  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return (
      t &&
        Object.keys(t).forEach(function (s) {
          if ("default" !== s) {
            var i = Object.getOwnPropertyDescriptor(t, s);
            Object.defineProperty(
              e,
              s,
              i.get
                ? i
                : {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    },
                  }
            );
          }
        }),
      (e.default = t),
      Object.freeze(e)
    );
  }
  var s = e(t);
  const i = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    n = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let s = t.getAttribute("href");
        if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
        s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]),
          (e = s && "#" !== s ? s.trim() : null);
      }
      return e;
    },
    o = (t) => {
      const e = n(t);
      return e && document.querySelector(e) ? e : null;
    },
    r = (t) => {
      const e = n(t);
      return e ? document.querySelector(e) : null;
    },
    a = (t) => {
      if (!t) return 0;
      let { transitionDuration: e, transitionDelay: s } =
        window.getComputedStyle(t);
      const i = Number.parseFloat(e),
        n = Number.parseFloat(s);
      return i || n
        ? ((e = e.split(",")[0]),
          (s = s.split(",")[0]),
          1e3 * (Number.parseFloat(e) + Number.parseFloat(s)))
        : 0;
    },
    l = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    c = (t) => (t[0] || t).nodeType,
    h = (t, e) => {
      let s = !1;
      const i = e + 5;
      t.addEventListener("transitionend", function e() {
        (s = !0), t.removeEventListener("transitionend", e);
      }),
        setTimeout(() => {
          s || l(t);
        }, i);
    },
    d = (t, e, s) => {
      Object.keys(s).forEach((i) => {
        const n = s[i],
          o = e[i],
          r =
            o && c(o)
              ? "element"
              : null == (a = o)
              ? "" + a
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(n).test(r))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
          );
      });
    },
    u = (t) => {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        const e = getComputedStyle(t),
          s = getComputedStyle(t.parentNode);
        return (
          "none" !== e.display &&
          "none" !== s.display &&
          "hidden" !== e.visibility
        );
      }
      return !1;
    },
    g = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    f = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? f(t.parentNode)
        : null;
    },
    p = () => {},
    m = (t) => t.offsetHeight,
    _ = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    b = () => "rtl" === document.documentElement.dir,
    v = (t, e) => {
      var s;
      (s = () => {
        const s = _();
        if (s) {
          const i = s.fn[t];
          (s.fn[t] = e.jQueryInterface),
            (s.fn[t].Constructor = e),
            (s.fn[t].noConflict = () => ((s.fn[t] = i), e.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", s)
          : s();
    },
    y = (t) => {
      "function" == typeof t && t();
    },
    w = new Map();
  var E = {
    set(t, e, s) {
      w.has(t) || w.set(t, new Map());
      const i = w.get(t);
      i.has(e) || 0 === i.size
        ? i.set(e, s)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(i.keys())[0]
            }.`
          );
    },
    get: (t, e) => (w.has(t) && w.get(t).get(e)) || null,
    remove(t, e) {
      if (!w.has(t)) return;
      const s = w.get(t);
      s.delete(e), 0 === s.size && w.delete(t);
    },
  };
  const T = /[^.]*(?=\..*)\.|.*/,
    A = /\..*/,
    L = /::\d+$/,
    k = {};
  let C = 1;
  const D = { mouseenter: "mouseover", mouseleave: "mouseout" },
    S = /^(mouseenter|mouseleave)/i,
    N = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function O(t, e) {
    return (e && `${e}::${C++}`) || t.uidEvent || C++;
  }
  function I(t) {
    const e = O(t);
    return (t.uidEvent = e), (k[e] = k[e] || {}), k[e];
  }
  function j(t, e, s = null) {
    const i = Object.keys(t);
    for (let n = 0, o = i.length; n < o; n++) {
      const o = t[i[n]];
      if (o.originalHandler === e && o.delegationSelector === s) return o;
    }
    return null;
  }
  function x(t, e, s) {
    const i = "string" == typeof e,
      n = i ? s : e;
    let o = M(t);
    return N.has(o) || (o = t), [i, n, o];
  }
  function P(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;
    if ((s || ((s = i), (i = null)), S.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      i ? (i = t(i)) : (s = t(s));
    }
    const [o, r, a] = x(e, s, i),
      l = I(t),
      c = l[a] || (l[a] = {}),
      h = j(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = O(r, e.replace(T, "")),
      u = o
        ? (function (t, e, s) {
            return function i(n) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = n; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (n.delegateTarget = r),
                      i.oneOff && R.off(t, n.type, e, s),
                      s.apply(r, [n])
                    );
              return null;
            };
          })(t, s, i)
        : (function (t, e) {
            return function s(i) {
              return (
                (i.delegateTarget = t),
                s.oneOff && R.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, s);
    (u.delegationSelector = o ? s : null),
      (u.originalHandler = r),
      (u.oneOff = n),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function H(t, e, s, i, n) {
    const o = j(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }
  function M(t) {
    return (t = t.replace(A, "")), D[t] || t;
  }
  const R = {
    on(t, e, s, i) {
      P(t, e, s, i, !1);
    },
    one(t, e, s, i) {
      P(t, e, s, i, !0);
    },
    off(t, e, s, i) {
      if ("string" != typeof e || !t) return;
      const [n, o, r] = x(e, s, i),
        a = r !== e,
        l = I(t),
        c = e.startsWith(".");
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void H(t, l, r, o, n ? s : null);
      }
      c &&
        Object.keys(l).forEach((s) => {
          !(function (t, e, s, i) {
            const n = e[s] || {};
            Object.keys(n).forEach((o) => {
              if (o.includes(i)) {
                const i = n[o];
                H(t, e, s, i.originalHandler, i.delegationSelector);
              }
            });
          })(t, l, s, e.slice(1));
        });
      const h = l[r] || {};
      Object.keys(h).forEach((s) => {
        const i = s.replace(L, "");
        if (!a || e.includes(i)) {
          const e = h[s];
          H(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },
    trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      const i = _(),
        n = M(e),
        o = e !== n,
        r = N.has(n);
      let a,
        l = !0,
        c = !0,
        h = !1,
        d = null;
      return (
        o &&
          i &&
          ((a = i.Event(e, s)),
          i(t).trigger(a),
          (l = !a.isPropagationStopped()),
          (c = !a.isImmediatePropagationStopped()),
          (h = a.isDefaultPrevented())),
        r
          ? ((d = document.createEvent("HTMLEvents")), d.initEvent(n, l, !0))
          : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
        void 0 !== s &&
          Object.keys(s).forEach((t) => {
            Object.defineProperty(d, t, { get: () => s[t] });
          }),
        h && d.preventDefault(),
        c && t.dispatchEvent(d),
        d.defaultPrevented && void 0 !== a && a.preventDefault(),
        d
      );
    },
  };
  class B {
    constructor(t) {
      (t = "string" == typeof t ? document.querySelector(t) : t) &&
        ((this._element = t),
        E.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      E.remove(this._element, this.constructor.DATA_KEY),
        R.off(this._element, "." + this.constructor.DATA_KEY),
        (this._element = null);
    }
    static getInstance(t) {
      return E.get(t, this.DATA_KEY);
    }
    static get VERSION() {
      return "5.0.0";
    }
  }
  class $ extends B {
    static get DATA_KEY() {
      return "bs.alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        s = this._triggerCloseEvent(e);
      null === s || s.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return r(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return R.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      if ((t.classList.remove("show"), !t.classList.contains("fade")))
        return void this._destroyElement(t);
      const e = a(t);
      R.one(t, "transitionend", () => this._destroyElement(t)), h(t, e);
    }
    _destroyElement(t) {
      t.parentNode && t.parentNode.removeChild(t),
        R.trigger(t, "closed.bs.alert");
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = E.get(this, "bs.alert");
        e || (e = new $(this)), "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  R.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    $.handleDismiss(new $())
  ),
    v("alert", $);
  class z extends B {
    static get DATA_KEY() {
      return "bs.button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = E.get(this, "bs.button");
        e || (e = new z(this)), "toggle" === t && e[t]();
      });
    }
  }
  function U(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function K(t) {
    return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
  }
  R.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      let s = E.get(e, "bs.button");
      s || (s = new z(e)), s.toggle();
    }
  ),
    v("button", z);
  const F = {
      setDataAttribute(t, e, s) {
        t.setAttribute("data-bs-" + K(e), s);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute("data-bs-" + K(e));
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((s) => {
              let i = s.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = U(t.dataset[s]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => U(t.getAttribute("data-bs-" + K(e))),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    W = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const s = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && s.push(i), (i = i.parentNode);
        return s;
      },
      prev(t, e) {
        let s = t.previousElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let s = t.nextElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.nextElementSibling;
        }
        return [];
      },
    },
    Y = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    V = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    q = "next",
    Q = "prev",
    X = "left",
    G = "right";
  class Z extends B {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = W.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return Y;
    }
    static get DATA_KEY() {
      return "bs.carousel";
    }
    next() {
      this._isSliding || this._slide(q);
    }
    nextWhenVisible() {
      !document.hidden && u(this._element) && this.next();
    }
    prev() {
      this._isSliding || this._slide(Q);
    }
    pause(t) {
      t || (this._isPaused = !0),
        W.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (l(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = W.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void R.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const s = t > e ? q : Q;
      this._slide(s, this._items[t]);
    }
    dispose() {
      (this._items = null),
        (this._config = null),
        (this._interval = null),
        (this._isPaused = null),
        (this._isSliding = null),
        (this._activeElement = null),
        (this._indicatorsElement = null),
        super.dispose();
    }
    _getConfig(t) {
      return (t = { ...Y, ...t }), d("carousel", t, V), t;
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? G : X);
    }
    _addEventListeners() {
      this._config.keyboard &&
        R.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (R.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          R.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) => {
          !this._pointerEvent ||
          ("pen" !== t.pointerType && "touch" !== t.pointerType)
            ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            : (this.touchStartX = t.clientX);
        },
        e = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        s = (t) => {
          !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
            (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      W.find(".carousel-item img", this._element).forEach((t) => {
        R.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (R.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
            R.on(this._element, "pointerup.bs.carousel", (t) => s(t)),
            this._element.classList.add("pointer-event"))
          : (R.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
            R.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
            R.on(this._element, "touchend.bs.carousel", (t) => s(t)));
    }
    _keydown(t) {
      /input|textarea/i.test(t.target.tagName) ||
        ("ArrowLeft" === t.key
          ? (t.preventDefault(), this._slide(G))
          : "ArrowRight" === t.key && (t.preventDefault(), this._slide(X)));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? W.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const s = t === q,
        i = t === Q,
        n = this._getItemIndex(e),
        o = this._items.length - 1;
      if (((i && 0 === n) || (s && n === o)) && !this._config.wrap) return e;
      const r = (n + (i ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }
    _triggerSlideEvent(t, e) {
      const s = this._getItemIndex(t),
        i = this._getItemIndex(
          W.findOne(".active.carousel-item", this._element)
        );
      return R.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: s,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = W.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");
        const s = W.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < s.length; e++)
          if (
            Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            s[e].classList.add("active"),
              s[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t =
        this._activeElement ||
        W.findOne(".active.carousel-item", this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const s = this._directionToOrder(t),
        i = W.findOne(".active.carousel-item", this._element),
        n = this._getItemIndex(i),
        o = e || this._getItemByOrder(s, i),
        r = this._getItemIndex(o),
        l = Boolean(this._interval),
        c = s === q,
        d = c ? "carousel-item-start" : "carousel-item-end",
        u = c ? "carousel-item-next" : "carousel-item-prev",
        g = this._orderToDirection(s);
      if (o && o.classList.contains("active")) this._isSliding = !1;
      else if (!this._triggerSlideEvent(o, g).defaultPrevented && i && o) {
        if (
          ((this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(o),
          (this._activeElement = o),
          this._element.classList.contains("slide"))
        ) {
          o.classList.add(u), m(o), i.classList.add(d), o.classList.add(d);
          const t = a(i);
          R.one(i, "transitionend", () => {
            o.classList.remove(d, u),
              o.classList.add("active"),
              i.classList.remove("active", u, d),
              (this._isSliding = !1),
              setTimeout(() => {
                R.trigger(this._element, "slid.bs.carousel", {
                  relatedTarget: o,
                  direction: g,
                  from: n,
                  to: r,
                });
              }, 0);
          }),
            h(i, t);
        } else
          i.classList.remove("active"),
            o.classList.add("active"),
            (this._isSliding = !1),
            R.trigger(this._element, "slid.bs.carousel", {
              relatedTarget: o,
              direction: g,
              from: n,
              to: r,
            });
        l && this.cycle();
      }
    }
    _directionToOrder(t) {
      return [G, X].includes(t)
        ? b()
          ? t === X
            ? Q
            : q
          : t === X
          ? q
          : Q
        : t;
    }
    _orderToDirection(t) {
      return [q, Q].includes(t)
        ? b()
          ? t === Q
            ? X
            : G
          : t === Q
          ? G
          : X
        : t;
    }
    static carouselInterface(t, e) {
      let s = E.get(t, "bs.carousel"),
        i = { ...Y, ...F.getDataAttributes(t) };
      "object" == typeof e && (i = { ...i, ...e });
      const n = "string" == typeof e ? e : i.slide;
      if ((s || (s = new Z(t, i)), "number" == typeof e)) s.to(e);
      else if ("string" == typeof n) {
        if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
        s[n]();
      } else i.interval && i.ride && (s.pause(), s.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Z.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = r(this);
      if (!e || !e.classList.contains("carousel")) return;
      const s = { ...F.getDataAttributes(e), ...F.getDataAttributes(this) },
        i = this.getAttribute("data-bs-slide-to");
      i && (s.interval = !1),
        Z.carouselInterface(e, s),
        i && E.get(e, "bs.carousel").to(i),
        t.preventDefault();
    }
  }
  R.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    Z.dataApiClickHandler
  ),
    R.on(window, "load.bs.carousel.data-api", () => {
      const t = W.find('[data-bs-ride="carousel"]');
      for (let e = 0, s = t.length; e < s; e++)
        Z.carouselInterface(t[e], E.get(t[e], "bs.carousel"));
    }),
    v("carousel", Z);
  const J = { toggle: !0, parent: "" },
    tt = { toggle: "boolean", parent: "(string|element)" };
  class et extends B {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = W.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      const s = W.find('[data-bs-toggle="collapse"]');
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t],
          i = o(e),
          n = W.find(i).filter((t) => t === this._element);
        null !== i &&
          n.length &&
          ((this._selector = i), this._triggerArray.push(e));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return J;
    }
    static get DATA_KEY() {
      return "bs.collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show"))
        return;
      let t, e;
      this._parent &&
        ((t = W.find(".show, .collapsing", this._parent).filter((t) =>
          "string" == typeof this._config.parent
            ? t.getAttribute("data-bs-parent") === this._config.parent
            : t.classList.contains("collapse")
        )),
        0 === t.length && (t = null));
      const s = W.findOne(this._selector);
      if (t) {
        const i = t.find((t) => s !== t);
        if (((e = i ? E.get(i, "bs.collapse") : null), e && e._isTransitioning))
          return;
      }
      if (R.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t &&
        t.forEach((t) => {
          s !== t && et.collapseInterface(t, "hide"),
            e || E.set(t, "bs.collapse", null);
        });
      const i = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        (this._element.style[i] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove("collapsed"),
              t.setAttribute("aria-expanded", !0);
          }),
        this.setTransitioning(!0);
      const n = "scroll" + (i[0].toUpperCase() + i.slice(1)),
        o = a(this._element);
      R.one(this._element, "transitionend", () => {
        this._element.classList.remove("collapsing"),
          this._element.classList.add("collapse", "show"),
          (this._element.style[i] = ""),
          this.setTransitioning(!1),
          R.trigger(this._element, "shown.bs.collapse");
      }),
        h(this._element, o),
        (this._element.style[i] = this._element[n] + "px");
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show"))
        return;
      if (R.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        this._element.getBoundingClientRect()[t] + "px"),
        m(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            s = r(e);
          s &&
            !s.classList.contains("show") &&
            (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
        }
      this.setTransitioning(!0), (this._element.style[t] = "");
      const s = a(this._element);
      R.one(this._element, "transitionend", () => {
        this.setTransitioning(!1),
          this._element.classList.remove("collapsing"),
          this._element.classList.add("collapse"),
          R.trigger(this._element, "hidden.bs.collapse");
      }),
        h(this._element, s);
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    dispose() {
      super.dispose(),
        (this._config = null),
        (this._parent = null),
        (this._triggerArray = null),
        (this._isTransitioning = null);
    }
    _getConfig(t) {
      return (
        ((t = { ...J, ...t }).toggle = Boolean(t.toggle)),
        d("collapse", t, tt),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let { parent: t } = this._config;
      c(t)
        ? (void 0 === t.jquery && void 0 === t[0]) || (t = t[0])
        : (t = W.findOne(t));
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return (
        W.find(e, t).forEach((t) => {
          const e = r(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        t
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const s = t.classList.contains("show");
      e.forEach((t) => {
        s ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
          t.setAttribute("aria-expanded", s);
      });
    }
    static collapseInterface(t, e) {
      let s = E.get(t, "bs.collapse");
      const i = {
        ...J,
        ...F.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {}),
      };
      if (
        (!s &&
          i.toggle &&
          "string" == typeof e &&
          /show|hide/.test(e) &&
          (i.toggle = !1),
        s || (s = new et(t, i)),
        "string" == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        et.collapseInterface(this, t);
      });
    }
  }
  R.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (t) {
      ("A" === t.target.tagName ||
        (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
        t.preventDefault();
      const e = F.getDataAttributes(this),
        s = o(this);
      W.find(s).forEach((t) => {
        const s = E.get(t, "bs.collapse");
        let i;
        s
          ? (null === s._parent &&
              "string" == typeof e.parent &&
              ((s._config.parent = e.parent), (s._parent = s._getParent())),
            (i = "toggle"))
          : (i = e),
          et.collapseInterface(t, i);
      });
    }
  ),
    v("collapse", et);
  const st = new RegExp("ArrowUp|ArrowDown|Escape"),
    it = b() ? "top-end" : "top-start",
    nt = b() ? "top-start" : "top-end",
    ot = b() ? "bottom-end" : "bottom-start",
    rt = b() ? "bottom-start" : "bottom-end",
    at = b() ? "left-start" : "right-start",
    lt = b() ? "right-start" : "left-start",
    ct = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    ht = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class dt extends B {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return ct;
    }
    static get DefaultType() {
      return ht;
    }
    static get DATA_KEY() {
      return "bs.dropdown";
    }
    toggle() {
      g(this._element) ||
        (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (g(this._element) || this._menu.classList.contains("show")) return;
      const t = dt.getParentFromElement(this._element),
        e = { relatedTarget: this._element };
      if (!R.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) F.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === s)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = t)
            : c(this._config.reference)
            ? ((e = this._config.reference),
              void 0 !== this._config.reference.jquery &&
                (e = this._config.reference[0]))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const i = this._getPopperConfig(),
            n = i.modifiers.find(
              (t) => "applyStyles" === t.name && !1 === t.enabled
            );
          (this._popper = s.createPopper(e, this._menu, i)),
            n && F.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => R.on(t, "mouseover", p)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.toggle("show"),
          this._element.classList.toggle("show"),
          R.trigger(this._element, "shown.bs.dropdown", e);
      }
    }
    hide() {
      if (g(this._element) || !this._menu.classList.contains("show")) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      (this._menu = null),
        this._popper && (this._popper.destroy(), (this._popper = null)),
        super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      R.on(this._element, "click.bs.dropdown", (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _completeHide(t) {
      R.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => R.off(t, "mouseover", p)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        F.removeDataAttribute(this._menu, "popper"),
        R.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...F.getDataAttributes(this._element),
          ...t,
        }),
        d("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !c(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          "dropdown".toUpperCase() +
            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        );
      return t;
    }
    _getMenuElement() {
      return W.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return at;
      if (t.classList.contains("dropstart")) return lt;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? nt : it) : e ? rt : ot;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem(t) {
      const e = W.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(u);
      if (!e.length) return;
      let s = e.indexOf(t.target);
      "ArrowUp" === t.key && s > 0 && s--,
        "ArrowDown" === t.key && s < e.length - 1 && s++,
        (s = -1 === s ? 0 : s),
        e[s].focus();
    }
    static dropdownInterface(t, e) {
      let s = E.get(t, "bs.dropdown");
      if (
        (s || (s = new dt(t, "object" == typeof e ? e : null)),
        "string" == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        dt.dropdownInterface(this, t);
      });
    }
    static clearMenus(t) {
      if (t) {
        if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
        if (/input|select|option|textarea|form/i.test(t.target.tagName)) return;
      }
      const e = W.find('[data-bs-toggle="dropdown"]');
      for (let s = 0, i = e.length; s < i; s++) {
        const i = E.get(e[s], "bs.dropdown");
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._element.classList.contains("show")) continue;
        const n = { relatedTarget: i._element };
        if (t) {
          const e = t.composedPath(),
            s = e.includes(i._menu);
          if (
            e.includes(i._element) ||
            ("inside" === i._config.autoClose && !s) ||
            ("outside" === i._config.autoClose && s)
          )
            continue;
          if (
            "keyup" === t.type &&
            "Tab" === t.key &&
            i._menu.contains(t.target)
          )
            continue;
          "click" === t.type && (n.clickEvent = t);
        }
        i._completeHide(n);
      }
    }
    static getParentFromElement(t) {
      return r(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? "Space" === t.key ||
            ("Escape" !== t.key &&
              (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                t.target.closest(".dropdown-menu")))
          : !st.test(t.key)
      )
        return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key) return;
      if ((t.preventDefault(), t.stopPropagation(), g(this))) return;
      const s = () =>
        this.matches('[data-bs-toggle="dropdown"]')
          ? this
          : W.prev(this, '[data-bs-toggle="dropdown"]')[0];
      if ("Escape" === t.key) return s().focus(), void dt.clearMenus();
      e || ("ArrowUp" !== t.key && "ArrowDown" !== t.key)
        ? e && "Space" !== t.key
          ? dt.getInstance(s())._selectMenuItem(t)
          : dt.clearMenus()
        : s().click();
    }
  }
  R.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    dt.dataApiKeydownHandler
  ),
    R.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      dt.dataApiKeydownHandler
    ),
    R.on(document, "click.bs.dropdown.data-api", dt.clearMenus),
    R.on(document, "keyup.bs.dropdown.data-api", dt.clearMenus),
    R.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), dt.dropdownInterface(this);
      }
    ),
    v("dropdown", dt);
  const ut = () => {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    },
    gt = (t = ut()) => {
      ft(),
        pt("body", "paddingRight", (e) => e + t),
        pt(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (e) => e + t
        ),
        pt(".sticky-top", "marginRight", (e) => e - t);
    },
    ft = () => {
      const t = document.body.style.overflow;
      t && F.setDataAttribute(document.body, "overflow", t),
        (document.body.style.overflow = "hidden");
    },
    pt = (t, e, s) => {
      const i = ut();
      W.find(t).forEach((t) => {
        if (t !== document.body && window.innerWidth > t.clientWidth + i)
          return;
        const n = t.style[e],
          o = window.getComputedStyle(t)[e];
        F.setDataAttribute(t, e, n),
          (t.style[e] = s(Number.parseFloat(o)) + "px");
      });
    },
    mt = () => {
      _t("body", "overflow"),
        _t("body", "paddingRight"),
        _t(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
        _t(".sticky-top", "marginRight");
    },
    _t = (t, e) => {
      W.find(t).forEach((t) => {
        const s = F.getDataAttribute(t, e);
        void 0 === s
          ? t.style.removeProperty(e)
          : (F.removeDataAttribute(t, e), (t.style[e] = s));
      });
    },
    bt = {
      isVisible: !0,
      isAnimated: !1,
      rootElement: document.body,
      clickCallback: null,
    },
    vt = {
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "element",
      clickCallback: "(function|null)",
    };
  class yt {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && m(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            y(t);
          }))
        : y(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), y(t);
          }))
        : y(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = "modal-backdrop"),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        (t = { ...bt, ...("object" == typeof t ? t : {}) }),
        d("backdrop", t, vt),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.appendChild(this._getElement()),
        R.on(this._getElement(), "mousedown.bs.backdrop", () => {
          y(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (R.off(this._element, "mousedown.bs.backdrop"),
        this._getElement().parentNode.removeChild(this._element),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      if (!this._config.isAnimated) return void y(t);
      const e = a(this._getElement());
      R.one(this._getElement(), "transitionend", () => y(t)),
        h(this._getElement(), e);
    }
  }
  const wt = { backdrop: !0, keyboard: !0, focus: !0 },
    Et = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class Tt extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = W.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1);
    }
    static get Default() {
      return wt;
    }
    static get DATA_KEY() {
      return "bs.modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      const e = R.trigger(this._element, "show.bs.modal", { relatedTarget: t });
      this._isShown ||
        e.defaultPrevented ||
        ((this._isShown = !0),
        gt(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        R.on(
          this._element,
          "click.dismiss.bs.modal",
          '[data-bs-dismiss="modal"]',
          (t) => this.hide(t)
        ),
        R.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          R.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if ((t && t.preventDefault(), !this._isShown || this._isTransitioning))
        return;
      if (R.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      if (
        (e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        R.off(document, "focusin.bs.modal"),
        this._element.classList.remove("show"),
        R.off(this._element, "click.dismiss.bs.modal"),
        R.off(this._dialog, "mousedown.dismiss.bs.modal"),
        e)
      ) {
        const t = a(this._element);
        R.one(this._element, "transitionend", (t) => this._hideModal(t)),
          h(this._element, t);
      } else this._hideModal();
    }
    dispose() {
      [window, this._dialog].forEach((t) => R.off(t, ".bs.modal")),
        super.dispose(),
        R.off(document, "focusin.bs.modal"),
        (this._config = null),
        (this._dialog = null),
        this._backdrop.dispose(),
        (this._backdrop = null),
        (this._isShown = null),
        (this._ignoreBackdropClick = null),
        (this._isTransitioning = null);
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new yt({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _getConfig(t) {
      return (
        (t = { ...wt, ...F.getDataAttributes(this._element), ...t }),
        d("modal", t, Et),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        s = W.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        s && (s.scrollTop = 0),
        e && m(this._element),
        this._element.classList.add("show"),
        this._config.focus && this._enforceFocus();
      const i = () => {
        this._config.focus && this._element.focus(),
          (this._isTransitioning = !1),
          R.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
      };
      if (e) {
        const t = a(this._dialog);
        R.one(this._dialog, "transitionend", i), h(this._dialog, t);
      } else i();
    }
    _enforceFocus() {
      R.off(document, "focusin.bs.modal"),
        R.on(document, "focusin.bs.modal", (t) => {
          document === t.target ||
            this._element === t.target ||
            this._element.contains(t.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? R.on(this._element, "keydown.dismiss.bs.modal", (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : R.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? R.on(window, "resize.bs.modal", () => this._adjustDialog())
        : R.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            mt(),
            R.trigger(this._element, "hidden.bs.modal");
        });
    }
    _showBackdrop(t) {
      R.on(this._element, "click.dismiss.bs.modal", (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (R.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t =
        this._element.scrollHeight > document.documentElement.clientHeight;
      t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add("modal-static");
      const e = a(this._dialog);
      R.off(this._element, "transitionend"),
        R.one(this._element, "transitionend", () => {
          this._element.classList.remove("modal-static"),
            t ||
              (R.one(this._element, "transitionend", () => {
                this._element.style.overflowY = "";
              }),
              h(this._element, e));
        }),
        h(this._element, e),
        this._element.focus();
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = ut(),
        s = e > 0;
      ((!s && t && !b()) || (s && !t && b())) &&
        (this._element.style.paddingLeft = e + "px"),
        ((s && !t && !b()) || (!s && t && b())) &&
          (this._element.style.paddingRight = e + "px");
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const s =
          Tt.getInstance(this) || new Tt(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
          s[t](e);
        }
      });
    }
  }
  R.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = r(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        R.one(e, "show.bs.modal", (t) => {
          t.defaultPrevented ||
            R.one(e, "hidden.bs.modal", () => {
              u(this) && this.focus();
            });
        }),
        (Tt.getInstance(e) || new Tt(e)).toggle(this);
    }
  ),
    v("modal", Tt);
  const At = { backdrop: !0, keyboard: !0, scroll: !1 },
    Lt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class kt extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        this._addEventListeners();
    }
    static get Default() {
      return At;
    }
    static get DATA_KEY() {
      return "bs.offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (
        R.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented
      )
        return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll ||
          (gt(), this._enforceFocusOnElement(this._element)),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show");
      const e = a(this._element);
      R.one(this._element, "transitionend", () => {
        R.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t });
      }),
        h(this._element, e);
    }
    hide() {
      if (!this._isShown) return;
      if (R.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
        return;
      R.off(document, "focusin.bs.offcanvas"),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove("show"),
        this._backdrop.hide();
      const t = a(this._element);
      R.one(this._element, "transitionend", () => {
        this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._element.style.visibility = "hidden"),
          this._config.scroll || mt(),
          R.trigger(this._element, "hidden.bs.offcanvas");
      }),
        h(this._element, t);
    }
    dispose() {
      this._backdrop.dispose(),
        super.dispose(),
        R.off(document, "focusin.bs.offcanvas"),
        (this._config = null),
        (this._backdrop = null);
    }
    _getConfig(t) {
      return (
        (t = {
          ...At,
          ...F.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        d("offcanvas", t, Lt),
        t
      );
    }
    _initializeBackDrop() {
      return new yt({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _enforceFocusOnElement(t) {
      R.off(document, "focusin.bs.offcanvas"),
        R.on(document, "focusin.bs.offcanvas", (e) => {
          document === e.target ||
            t === e.target ||
            t.contains(e.target) ||
            t.focus();
        }),
        t.focus();
    }
    _addEventListeners() {
      R.on(
        this._element,
        "click.dismiss.bs.offcanvas",
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        R.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
          this._config.keyboard && "Escape" === t.key && this.hide();
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e =
          E.get(this, "bs.offcanvas") ||
          new kt(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  R.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = r(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this)))
        return;
      R.one(e, "hidden.bs.offcanvas", () => {
        u(this) && this.focus();
      });
      const s = W.findOne(".offcanvas.show");
      s && s !== e && kt.getInstance(s).hide(),
        (E.get(e, "bs.offcanvas") || new kt(e)).toggle(this);
    }
  ),
    R.on(window, "load.bs.offcanvas.data-api", () => {
      W.find(".offcanvas.show").forEach((t) =>
        (E.get(t, "bs.offcanvas") || new kt(t)).show()
      );
    }),
    v("offcanvas", kt);
  const Ct = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Dt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    St =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Nt = (t, e) => {
      const s = t.nodeName.toLowerCase();
      if (e.includes(s))
        return (
          !Ct.has(s) || Boolean(Dt.test(t.nodeValue) || St.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;
      return !1;
    };
  function Ot(t, e, s) {
    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"),
      n = Object.keys(e),
      o = [].concat(...i.body.querySelectorAll("*"));
    for (let t = 0, s = o.length; t < s; t++) {
      const s = o[t],
        i = s.nodeName.toLowerCase();
      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        continue;
      }
      const r = [].concat(...s.attributes),
        a = [].concat(e["*"] || [], e[i] || []);
      r.forEach((t) => {
        Nt(t, a) || s.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    jt = new Set(["sanitize", "allowList", "sanitizeFn"]),
    xt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Pt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: b() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: b() ? "right" : "left",
    },
    Ht = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Mt = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class Rt extends B {
    constructor(t, e) {
      if (void 0 === s)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this.config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Ht;
    }
    static get NAME() {
      return "tooltip";
    }
    static get DATA_KEY() {
      return "bs.tooltip";
    }
    static get Event() {
      return Mt;
    }
    static get EVENT_KEY() {
      return ".bs.tooltip";
    }
    static get DefaultType() {
      return xt;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        R.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip &&
          this.tip.parentNode &&
          this.tip.parentNode.removeChild(this.tip),
        (this._isEnabled = null),
        (this._timeout = null),
        (this._hoverState = null),
        (this._activeTrigger = null),
        this._popper && this._popper.destroy(),
        (this._popper = null),
        (this.config = null),
        (this.tip = null),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = R.trigger(this._element, this.constructor.Event.SHOW),
        e = f(this._element),
        n =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !n) return;
      const o = this.getTipElement(),
        r = i(this.constructor.NAME);
      o.setAttribute("id", r),
        this._element.setAttribute("aria-describedby", r),
        this.setContent(),
        this.config.animation && o.classList.add("fade");
      const l =
          "function" == typeof this.config.placement
            ? this.config.placement.call(this, o, this._element)
            : this.config.placement,
        c = this._getAttachment(l);
      this._addAttachmentClass(c);
      const d = this._getContainer();
      E.set(o, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (d.appendChild(o),
          R.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = s.createPopper(
              this._element,
              o,
              this._getPopperConfig(c)
            )),
        o.classList.add("show");
      const u =
        "function" == typeof this.config.customClass
          ? this.config.customClass()
          : this.config.customClass;
      u && o.classList.add(...u.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            R.on(t, "mouseover", p);
          });
      const g = () => {
        const t = this._hoverState;
        (this._hoverState = null),
          R.trigger(this._element, this.constructor.Event.SHOWN),
          "out" === t && this._leave(null, this);
      };
      if (this.tip.classList.contains("fade")) {
        const t = a(this.tip);
        R.one(this.tip, "transitionend", g), h(this.tip, t);
      } else g();
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement(),
        e = () => {
          this._isWithActiveTrigger() ||
            ("show" !== this._hoverState &&
              t.parentNode &&
              t.parentNode.removeChild(t),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            R.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        };
      if (
        !R.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      ) {
        if (
          (t.classList.remove("show"),
          "ontouchstart" in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((t) => R.off(t, "mouseover", p)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          this.tip.classList.contains("fade"))
        ) {
          const s = a(t);
          R.one(t, "transitionend", e), h(t, s);
        } else e();
        this._hoverState = "";
      }
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (
        (t.innerHTML = this.config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(W.findOne(".tooltip-inner", t), this.getTitle()),
        t.classList.remove("fade", "show");
    }
    setElementContent(t, e) {
      if (null !== t)
        return "object" == typeof e && c(e)
          ? (e.jquery && (e = e[0]),
            void (this.config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this.config.html
              ? (this.config.sanitize &&
                  (e = Ot(e, this.config.allowList, this.config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (
        t ||
          (t =
            "function" == typeof this.config.title
              ? this.config.title.call(this._element)
              : this.config.title),
        t
      );
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const s = this.constructor.DATA_KEY;
      return (
        (e = e || E.get(t.delegateTarget, s)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          E.set(t.delegateTarget, s, e)),
        e
      );
    }
    _getOffset() {
      const { offset: t } = this.config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this.config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this.config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this.config.popperConfig
          ? this.config.popperConfig(e)
          : this.config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-tooltip-" + this.updateAttachment(t)
      );
    }
    _getContainer() {
      return !1 === this.config.container
        ? document.body
        : c(this.config.container)
        ? this.config.container
        : W.findOne(this.config.container);
    }
    _getAttachment(t) {
      return Pt[t.toUpperCase()];
    }
    _setListeners() {
      this.config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          R.on(
            this._element,
            this.constructor.Event.CLICK,
            this.config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              "hover" === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            s =
              "hover" === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          R.on(this._element, e, this.config.selector, (t) => this._enter(t)),
            R.on(this._element, s, this.config.selector, (t) => this._leave(t));
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        R.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.config.selector
          ? (this.config = { ...this.config, trigger: "manual", selector: "" })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState
          ? (e._hoverState = "show")
          : (clearTimeout(e._timeout),
            (e._hoverState = "show"),
            e.config.delay && e.config.delay.show
              ? (e._timeout = setTimeout(() => {
                  "show" === e._hoverState && e.show();
                }, e.config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          e.config.delay && e.config.delay.hide
            ? (e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide();
              }, e.config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = F.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          jt.has(t) && delete e[t];
        }),
        t &&
          "object" == typeof t.container &&
          t.container.jquery &&
          (t.container = t.container[0]),
        "number" ==
          typeof (t = {
            ...this.constructor.Default,
            ...e,
            ...("object" == typeof t && t ? t : {}),
          }).delay && (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        d("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = Ot(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this.config)
        for (const e in this.config)
          this.constructor.Default[e] !== this.config[e] &&
            (t[e] = this.config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(It);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = E.get(this, "bs.tooltip");
        const s = "object" == typeof t && t;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || (e = new Rt(this, s)), "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v("tooltip", Rt);
  const Bt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    $t = {
      ...Rt.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    zt = { ...Rt.DefaultType, content: "(string|element|function)" },
    Ut = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Kt extends Rt {
    static get Default() {
      return $t;
    }
    static get NAME() {
      return "popover";
    }
    static get DATA_KEY() {
      return "bs.popover";
    }
    static get Event() {
      return Ut;
    }
    static get EVENT_KEY() {
      return ".bs.popover";
    }
    static get DefaultType() {
      return zt;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(W.findOne(".popover-header", t), this.getTitle());
      let e = this._getContent();
      "function" == typeof e && (e = e.call(this._element)),
        this.setElementContent(W.findOne(".popover-body", t), e),
        t.classList.remove("fade", "show");
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-popover-" + this.updateAttachment(t)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this.config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Bt);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = E.get(this, "bs.popover");
        const s = "object" == typeof t ? t : null;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || ((e = new Kt(this, s)), E.set(this, "bs.popover", e)),
          "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v("popover", Kt);
  const Ft = { offset: 10, method: "auto", target: "" },
    Wt = { offset: "number", method: "string", target: "(string|element)" };
  class Yt extends B {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        R.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Ft;
    }
    static get DATA_KEY() {
      return "bs.scrollspy";
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        e = "auto" === this._config.method ? t : this._config.method,
        s = "position" === e ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        W.find(this._selector)
          .map((t) => {
            const i = o(t),
              n = i ? W.findOne(i) : null;
            if (n) {
              const t = n.getBoundingClientRect();
              if (t.width || t.height) return [F[e](n).top + s, i];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      super.dispose(),
        R.off(this._scrollElement, ".bs.scrollspy"),
        (this._scrollElement = null),
        (this._config = null),
        (this._selector = null),
        (this._offsets = null),
        (this._targets = null),
        (this._activeTarget = null),
        (this._scrollHeight = null);
    }
    _getConfig(t) {
      if (
        "string" !=
          typeof (t = {
            ...Ft,
            ...F.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }).target &&
        c(t.target)
      ) {
        let { id: e } = t.target;
        e || ((e = i("scrollspy")), (t.target.id = e)), (t.target = "#" + e);
      }
      return d("scrollspy", t, Wt), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        s = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= s)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = this._selector
          .split(",")
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        s = W.findOne(e.join(","));
      s.classList.contains("dropdown-item")
        ? (W.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add(
            "active"
          ),
          s.classList.add("active"))
        : (s.classList.add("active"),
          W.parents(s, ".nav, .list-group").forEach((t) => {
            W.prev(t, ".nav-link, .list-group-item").forEach((t) =>
              t.classList.add("active")
            ),
              W.prev(t, ".nav-item").forEach((t) => {
                W.children(t, ".nav-link").forEach((t) =>
                  t.classList.add("active")
                );
              });
          })),
        R.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      W.find(this._selector)
        .filter((t) => t.classList.contains("active"))
        .forEach((t) => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e =
          Yt.getInstance(this) || new Yt(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  R.on(window, "load.bs.scrollspy.data-api", () => {
    W.find('[data-bs-spy="scroll"]').forEach((t) => new Yt(t));
  }),
    v("scrollspy", Yt);
  class Vt extends B {
    static get DATA_KEY() {
      return "bs.tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains("active")
      )
        return;
      let t;
      const e = r(this._element),
        s = this._element.closest(".nav, .list-group");
      if (s) {
        const e =
          "UL" === s.nodeName || "OL" === s.nodeName
            ? ":scope > li > .active"
            : ".active";
        (t = W.find(e, s)), (t = t[t.length - 1]);
      }
      const i = t
        ? R.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        R.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== i && i.defaultPrevented)
      )
        return;
      this._activate(this._element, s);
      const n = () => {
        R.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          R.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, n) : n();
    }
    _activate(t, e, s) {
      const i = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? W.children(e, ".active")
            : W.find(":scope > li > .active", e)
        )[0],
        n = s && i && i.classList.contains("fade"),
        o = () => this._transitionComplete(t, i, s);
      if (i && n) {
        const t = a(i);
        i.classList.remove("show"), R.one(i, "transitionend", o), h(i, t);
      } else o();
    }
    _transitionComplete(t, e, s) {
      if (e) {
        e.classList.remove("active");
        const t = W.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        m(t),
        t.classList.contains("fade") && t.classList.add("show");
      let i = t.parentNode;
      if (
        (i && "LI" === i.nodeName && (i = i.parentNode),
        i && i.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e &&
          W.find(".dropdown-toggle", e).forEach((t) =>
            t.classList.add("active")
          ),
          t.setAttribute("aria-expanded", !0);
      }
      s && s();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = E.get(this, "bs.tab") || new Vt(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  R.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        g(this) || (E.get(this, "bs.tab") || new Vt(this)).show();
    }
  ),
    v("tab", Vt);
  const qt = { animation: "boolean", autohide: "boolean", delay: "number" },
    Qt = { animation: !0, autohide: !0, delay: 5e3 };
  class Xt extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        this._setListeners();
    }
    static get DefaultType() {
      return qt;
    }
    static get Default() {
      return Qt;
    }
    static get DATA_KEY() {
      return "bs.toast";
    }
    show() {
      if (R.trigger(this._element, "show.bs.toast").defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      const t = () => {
        this._element.classList.remove("showing"),
          this._element.classList.add("show"),
          R.trigger(this._element, "shown.bs.toast"),
          this._config.autohide &&
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay));
      };
      if (
        (this._element.classList.remove("hide"),
        m(this._element),
        this._element.classList.add("showing"),
        this._config.animation)
      ) {
        const e = a(this._element);
        R.one(this._element, "transitionend", t), h(this._element, e);
      } else t();
    }
    hide() {
      if (!this._element.classList.contains("show")) return;
      if (R.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
      const t = () => {
        this._element.classList.add("hide"),
          R.trigger(this._element, "hidden.bs.toast");
      };
      if ((this._element.classList.remove("show"), this._config.animation)) {
        const e = a(this._element);
        R.one(this._element, "transitionend", t), h(this._element, e);
      } else t();
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        super.dispose(),
        (this._config = null);
    }
    _getConfig(t) {
      return (
        (t = {
          ...Qt,
          ...F.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        d("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _setListeners() {
      R.on(
        this._element,
        "click.dismiss.bs.toast",
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = E.get(this, "bs.toast");
        if (
          (e || (e = new Xt(this, "object" == typeof t && t)),
          "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    v("toast", Xt),
    {
      Alert: $,
      Button: z,
      Carousel: Z,
      Collapse: et,
      Dropdown: dt,
      Modal: Tt,
      Offcanvas: kt,
      Popover: Kt,
      ScrollSpy: Yt,
      Tab: Vt,
      Toast: Xt,
      Tooltip: Rt,
    }
  );
});

/*jquery-slimscroll*/

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function (e) {
  e.fn.extend({
    slimScroll: function (f) {
      var a = e.extend(
        {
          width: "auto",
          height: "250px",
          size: "4px",
          color: "#E4E6EF",
          position: "right",
          distance: "3px",
          start: "top",
          opacity: 0.8,
          alwaysVisible: !1,
          disableFadeOut: !1,
          railVisible: !1,
          railColor: "#333",
          railOpacity: 0.2,
          railDraggable: !0,
          railClass: "slimScrollRail",
          barClass: "slimScrollBar",
          wrapperClass: "slimScrollDiv",
          allowPageScroll: !1,
          wheelStep: 20,
          touchScrollStep: 200,
          borderRadius: "7px",
          railBorderRadius: "7px",
        },
        f
      );
      this.each(function () {
        function v(d) {
          if (r) {
            d = d || window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement)
              .closest("." + a.wrapperClass)
              .is(b.parent()) && n(c, !0);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = !1);
          }
        }
        function n(d, g, e) {
          k = !1;
          var f = b.outerHeight() - c.outerHeight();
          g &&
            ((g =
              parseInt(c.css("top")) +
              ((d * parseInt(a.wheelStep)) / 100) * c.outerHeight()),
            (g = Math.min(Math.max(g, 0), f)),
            (g = 0 < d ? Math.ceil(g) : Math.floor(g)),
            c.css({ top: g + "px" }));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          g = l * (b[0].scrollHeight - b.outerHeight());
          e &&
            ((g = d),
            (d = (g / b[0].scrollHeight) * b.outerHeight()),
            (d = Math.min(Math.max(d, 0), f)),
            c.css({ top: d + "px" }));
          b.scrollTop(g);
          b.trigger("slimscrolling", ~~g);
          w();
          p();
        }
        function x() {
          u = Math.max(
            (b.outerHeight() / b[0].scrollHeight) * b.outerHeight(),
            30
          );
          c.css({ height: u + "px" });
          var a = u == b.outerHeight() ? "none" : "block";
          c.css({ display: a });
        }
        function w() {
          x();
          clearTimeout(B);
          l == ~~l
            ? ((k = a.allowPageScroll),
              C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom"))
            : (k = !1);
          C = l;
          u >= b.outerHeight()
            ? (k = !0)
            : (c.stop(!0, !0).fadeIn("fast"),
              a.railVisible && m.stop(!0, !0).fadeIn("fast"));
        }
        function p() {
          a.alwaysVisible ||
            (B = setTimeout(function () {
              (a.disableFadeOut && r) ||
                y ||
                z ||
                (c.fadeOut("slow"), m.fadeOut("slow"));
            }, 1e3));
        }
        var r,
          y,
          z,
          B,
          A,
          u,
          l,
          C,
          k = !1,
          b = e(this);
        if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(),
            c = b.siblings("." + a.barClass),
            m = b.siblings("." + a.railClass);
          x();
          if (e.isPlainObject(f)) {
            if ("height" in f && "auto" == f.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var h = b.parent().parent().height();
              b.parent().css("height", h);
              b.css("height", h);
            } else
              "height" in f &&
                ((h = f.height),
                b.parent().css("height", h),
                b.css("height", h));
            if ("scrollTo" in f) q = parseInt(a.scrollTo);
            else if ("scrollBy" in f) q += parseInt(a.scrollBy);
            else if ("destroy" in f) {
              c.remove();
              m.remove();
              b.unwrap();
              return;
            }
            n(q, !1, !0);
          }
        } else if (!(e.isPlainObject(f) && "destroy" in f)) {
          a.height = "auto" == a.height ? b.parent().height() : a.height;
          q = e("<div></div>").addClass(a.wrapperClass).css({
            position: "relative",
            overflow: "hidden",
            width: a.width,
            height: a.height,
          });
          b.css({ overflow: "hidden", width: a.width, height: a.height });
          var m = e("<div></div>")
              .addClass(a.railClass)
              .css({
                width: a.size,
                height: "100%",
                position: "absolute",
                top: 0,
                display: a.alwaysVisible && a.railVisible ? "block" : "none",
                "border-radius": a.railBorderRadius,
                background: a.railColor,
                opacity: a.railOpacity,
                zIndex: 90,
              }),
            c = e("<div></div>")
              .addClass(a.barClass)
              .css({
                background: a.color,
                width: a.size,
                position: "absolute",
                top: 0,
                opacity: a.opacity,
                display: a.alwaysVisible ? "block" : "none",
                "border-radius": a.borderRadius,
                BorderRadius: a.borderRadius,
                MozBorderRadius: a.borderRadius,
                WebkitBorderRadius: a.borderRadius,
                zIndex: 99,
              }),
            h =
              "right" == a.position
                ? { right: a.distance }
                : { left: a.distance };
          m.css(h);
          c.css(h);
          b.wrap(q);
          b.parent().append(c);
          b.parent().append(m);
          a.railDraggable &&
            c
              .bind("mousedown", function (a) {
                var b = e(document);
                z = !0;
                t = parseFloat(c.css("top"));
                pageY = a.pageY;
                b.bind("mousemove.slimscroll", function (a) {
                  currTop = t + a.pageY - pageY;
                  c.css("top", currTop);
                  n(0, c.position().top, !1);
                });
                b.bind("mouseup.slimscroll", function (a) {
                  z = !1;
                  p();
                  b.unbind(".slimscroll");
                });
                return !1;
              })
              .bind("selectstart.slimscroll", function (a) {
                a.stopPropagation();
                a.preventDefault();
                return !1;
              });
          m.hover(
            function () {
              w();
            },
            function () {
              p();
            }
          );
          c.hover(
            function () {
              y = !0;
            },
            function () {
              y = !1;
            }
          );
          b.hover(
            function () {
              r = !0;
              w();
              p();
            },
            function () {
              r = !1;
              p();
            }
          );
          b.bind("touchstart", function (a, b) {
            a.originalEvent.touches.length &&
              (A = a.originalEvent.touches[0].pageY);
          });
          b.bind("touchmove", function (b) {
            k || b.originalEvent.preventDefault();
            b.originalEvent.touches.length &&
              (n(
                (A - b.originalEvent.touches[0].pageY) / a.touchScrollStep,
                !0
              ),
              (A = b.originalEvent.touches[0].pageY));
          });
          x();
          "bottom" === a.start
            ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, !0))
            : "top" !== a.start &&
              (n(e(a.start).position().top, null, !0),
              a.alwaysVisible || c.hide());
          window.addEventListener
            ? (this.addEventListener("DOMMouseScroll", v, !1),
              this.addEventListener("mousewheel", v, !1))
            : document.attachEvent("onmousewheel", v);
        }
      });
      return this;
    },
  });
  e.fn.extend({ slimscroll: e.fn.slimScroll });
})(jQuery);

/*!
 * screenfull
 * v4.0.0 - 2018-12-15
 * (c) Sindre Sorhus; MIT License
 */

!(function () {
  "use strict";
  var u =
      "undefined" != typeof window && void 0 !== window.document
        ? window.document
        : {},
    e = "undefined" != typeof module && module.exports,
    t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
    c = (function () {
      for (
        var e,
          n = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          r = 0,
          l = n.length,
          t = {};
        r < l;
        r++
      )
        if ((e = n[r]) && e[1] in u) {
          for (r = 0; r < e.length; r++) t[n[0][r]] = e[r];
          return t;
        }
      return !1;
    })(),
    l = { change: c.fullscreenchange, error: c.fullscreenerror },
    n = {
      request: function (l) {
        return new Promise(
          function (e) {
            var n = c.requestFullscreen,
              r = function () {
                this.off("change", r), e();
              }.bind(this);
            (l = l || u.documentElement),
              / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)
                ? l[n]()
                : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}),
              this.on("change", r);
          }.bind(this)
        );
      },
      exit: function () {
        return new Promise(
          function (e) {
            var n = function () {
              this.off("change", n), e();
            }.bind(this);
            u[c.exitFullscreen](), this.on("change", n);
          }.bind(this)
        );
      },
      toggle: function (e) {
        return this.isFullscreen ? this.exit() : this.request(e);
      },
      onchange: function (e) {
        this.on("change", e);
      },
      onerror: function (e) {
        this.on("error", e);
      },
      on: function (e, n) {
        var r = l[e];
        r && u.addEventListener(r, n, !1);
      },
      off: function (e, n) {
        var r = l[e];
        r && u.removeEventListener(r, n, !1);
      },
      raw: c,
    };
  c
    ? (Object.defineProperties(n, {
        isFullscreen: {
          get: function () {
            return Boolean(u[c.fullscreenElement]);
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return u[c.fullscreenElement];
          },
        },
        enabled: {
          enumerable: !0,
          get: function () {
            return Boolean(u[c.fullscreenEnabled]);
          },
        },
      }),
      e ? (module.exports = n) : (window.screenfull = n))
    : e
    ? (module.exports = !1)
    : (window.screenfull = !1);
})();

/*!
 * fastclick
 */
(function () {
  "use strict";

  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/
  /*global define, Event, Node*/

  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  function FastClick(layer, options) {
    var oldOnClick;

    options = options || {};

    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */
    this.trackingClick = false;

    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */
    this.trackingClickStart = 0;

    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */
    this.targetElement = null;

    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartX = 0;

    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartY = 0;

    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */
    this.lastTouchIdentifier = 0;

    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */
    this.touchBoundary = options.touchBoundary || 10;

    /**
     * The FastClick layer.
     *
     * @type Element
     */
    this.layer = layer;

    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */
    this.tapDelay = options.tapDelay || 200;

    /**
     * The maximum time for a tap
     *
     * @type number
     */
    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    }

    // Some old versions of Android don't have Function.prototype.bind
    function bind(method, context) {
      return function () {
        return method.apply(context, arguments);
      };
    }

    var methods = [
      "onMouse",
      "onClick",
      "onTouchStart",
      "onTouchMove",
      "onTouchEnd",
      "onTouchCancel",
    ];
    var context = this;
    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    }

    // Set up event handlers as required
    if (deviceIsAndroid) {
      layer.addEventListener("mouseover", this.onMouse, true);
      layer.addEventListener("mousedown", this.onMouse, true);
      layer.addEventListener("mouseup", this.onMouse, true);
    }

    layer.addEventListener("click", this.onClick, true);
    layer.addEventListener("touchstart", this.onTouchStart, false);
    layer.addEventListener("touchmove", this.onTouchMove, false);
    layer.addEventListener("touchend", this.onTouchEnd, false);
    layer.addEventListener("touchcancel", this.onTouchCancel, false);

    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.
    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function (type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;
        if (type === "click") {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function (type, callback, capture) {
        var adv = Node.prototype.addEventListener;
        if (type === "click") {
          adv.call(
            layer,
            type,
            callback.hijacked ||
              (callback.hijacked = function (event) {
                if (!event.propagationStopped) {
                  callback(event);
                }
              }),
            capture
          );
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    }

    // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.
    if (typeof layer.onclick === "function") {
      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener(
        "click",
        function (event) {
          oldOnClick(event);
        },
        false
      );
      layer.onclick = null;
    }
  }

  /**
   * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
   *
   * @type boolean
   */
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

  /**
   * Android requires exceptions.
   *
   * @type boolean
   */
  var deviceIsAndroid =
    navigator.userAgent.indexOf("Android") > 0 && !deviceIsWindowsPhone;

  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */
  var deviceIsIOS =
    /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */
  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */
  var deviceIsIOSWithBadTarget =
    deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */
  var deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;

  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */
  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
      // Don't send a synthetic click to disabled inputs (issue #62)
      case "button":
      case "select":
      case "textarea":
        if (target.disabled) {
          return true;
        }

        break;
      case "input":
        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if ((deviceIsIOS && target.type === "file") || target.disabled) {
          return true;
        }

        break;
      case "label":
      case "iframe": // iOS8 homescreen apps can prevent events bubbling into frames
      case "video":
        return true;
    }

    return /\bneedsclick\b/.test(target.className);
  };

  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */
  FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case "textarea":
        return true;
      case "select":
        return !deviceIsAndroid;
      case "input":
        switch (target.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return false;
        }

        // No point in attempting to focus disabled inputs
        return !target.disabled && !target.readOnly;
      default:
        return /\bneedsfocus\b/.test(target.className);
    }
  };

  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */
  FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch;

    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0];

    // Synthesise a click event, with an extra attribute so it can be tracked
    clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(
      this.determineEventType(targetElement),
      true,
      true,
      window,
      1,
      touch.screenX,
      touch.screenY,
      touch.clientX,
      touch.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function (targetElement) {
    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
      return "mousedown";
    }

    return "click";
  };

  /**
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.focus = function (targetElement) {
    var length;

    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (
      deviceIsIOS &&
      targetElement.setSelectionRange &&
      targetElement.type.indexOf("date") !== 0 &&
      targetElement.type !== "time" &&
      targetElement.type !== "month"
    ) {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };

  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;

    scrollParent = targetElement.fastClickScrollParent;

    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.
    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    }

    // Always update the scroll top tracker if possible.
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };

  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */
  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };

  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection;

    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {
      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {
        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier;

        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;

    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;

    // Prevent phantom clicks on fast double-tap (issue #36)
    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };

  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0],
      boundary = this.touchBoundary;

    if (
      Math.abs(touch.pageX - this.touchStartX) > boundary ||
      Math.abs(touch.pageY - this.touchStartY) > boundary
    ) {
      return true;
    }

    return false;
  };

  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
      return true;
    }

    // If the touch has moved, cancel the click tracking
    if (
      this.targetElement !==
        this.getTargetElementFromEventTarget(event.target) ||
      this.touchHasMoved(event)
    ) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };

  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */
  FastClick.prototype.findControl = function (labelElement) {
    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    }

    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    }

    // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
    return labelElement.querySelector(
      "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
    );
  };

  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchEnd = function (event) {
    var forElement,
      trackingClickStart,
      targetTagName,
      scrollParent,
      touch,
      targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    // Prevent phantom clicks on fast double-tap (issue #36)
    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    }

    // Reset to prevent wrong click cancel on input (issue #156).
    this.cancelNextClick = false;

    this.lastClickTime = event.timeStamp;

    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .
    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0];

      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
      targetElement =
        document.elementFromPoint(
          touch.pageX - window.pageXOffset,
          touch.pageY - window.pageYOffset
        ) || targetElement;
      targetElement.fastClickScrollParent =
        this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === "label") {
      forElement = this.findControl(targetElement);
      if (forElement) {
        this.focus(targetElement);
        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {
      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if (
        event.timeStamp - trackingClickStart > 100 ||
        (deviceIsIOS && window.top !== window && targetTagName === "input")
      ) {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event);

      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
      if (!deviceIsIOS || targetTagName !== "select") {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {
      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;
      if (
        scrollParent &&
        scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop
      ) {
        return true;
      }
    }

    // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };

  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */
  FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };

  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onMouse = function (event) {
    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    }

    // Programmatically generated events targeting a specific element should be permitted
    if (!event.cancelable) {
      return true;
    }

    // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      }

      // Cancel the event
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    // If the mouse event is permitted, return true for the action to go through.
    return true;
  };

  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onClick = function (event) {
    var permitted;

    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
    if (event.target.type === "submit" && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event);

    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
    if (!permitted) {
      this.targetElement = null;
    }

    // If clicks are permitted, return true for the action to go through.
    return permitted;
  };

  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */
  FastClick.prototype.destroy = function () {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener("mouseover", this.onMouse, true);
      layer.removeEventListener("mousedown", this.onMouse, true);
      layer.removeEventListener("mouseup", this.onMouse, true);
    }

    layer.removeEventListener("click", this.onClick, true);
    layer.removeEventListener("touchstart", this.onTouchStart, false);
    layer.removeEventListener("touchmove", this.onTouchMove, false);
    layer.removeEventListener("touchend", this.onTouchEnd, false);
    layer.removeEventListener("touchcancel", this.onTouchCancel, false);
  };

  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */
  FastClick.notNeeded = function (layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion;

    // Devices that don't support touch don't need FastClick
    if (typeof window.ontouchstart === "undefined") {
      return true;
    }

    // Chrome version - zero for other browsers
    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (chromeVersion) {
      if (deviceIsAndroid) {
        metaViewport = document.querySelector("meta[name=viewport]");

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          // Chrome 32 and above with width=device-width or less don't need FastClick
          if (
            chromeVersion > 31 &&
            document.documentElement.scrollWidth <= window.outerWidth
          ) {
            return true;
          }
        }

        // Chrome desktop doesn't need FastClick (issue #15)
      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(
        /Version\/([0-9]*)\.([0-9]*)/
      );

      // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251
      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector("meta[name=viewport]");

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          // width=device-width (or less than device-width) eliminates click delay.
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
    if (
      layer.style.msTouchAction === "none" ||
      layer.style.touchAction === "manipulation"
    ) {
      return true;
    }

    // Firefox version - zero for other browsers
    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [
      ,
      0,
    ])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

      metaViewport = document.querySelector("meta[name=viewport]");
      if (
        metaViewport &&
        (metaViewport.content.indexOf("user-scalable=no") !== -1 ||
          document.documentElement.scrollWidth <= window.outerWidth)
      ) {
        return true;
      }
    }

    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
    if (
      layer.style.touchAction === "none" ||
      layer.style.touchAction === "manipulation"
    ) {
      return true;
    }

    return false;
  };

  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  FastClick.attach = function (layer, options) {
    return new FastClick(layer, options);
  };

  if (
    typeof define === "function" &&
    typeof define.amd === "object" &&
    define.amd
  ) {
    // AMD. Register as an anonymous module.
    define(function () {
      return FastClick;
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
})();

/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/
 ** Licensed under the New BSD License - see above site for details */

(function (document, Math, undefined) {
  (function (factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else if (jQuery && !jQuery.fn.sparkline) {
      factory(jQuery);
    }
  })(function ($) {
    "use strict";
    var UNSET_OPTION = {},
      getDefaults,
      createClass,
      SPFormat,
      clipval,
      quartile,
      normalizeValue,
      normalizeValues,
      remove,
      isNumber,
      all,
      sum,
      addCSS,
      ensureArray,
      formatNumber,
      RangeMap,
      MouseHandler,
      Tooltip,
      barHighlightMixin,
      line,
      bar,
      tristate,
      discrete,
      bullet,
      pie,
      box,
      defaultStyles,
      initStyles,
      VShape,
      VCanvas_base,
      VCanvas_canvas,
      VCanvas_vml,
      pending,
      shapeCount = 0;
    getDefaults = function () {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: false,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: false,
          enableHighlight: true,
          highlightLighten: 1.4,
          tooltipSkipNull: true,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: false,
          numberFormatter: false,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: false,
          disableInteraction: false,
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: undefined,
          normalRangeMax: undefined,
          normalRangeColor: "#ccc",
          drawNormalOnTop: false,
          chartRangeMin: undefined,
          chartRangeMax: undefined,
          chartRangeMinX: undefined,
          chartRangeMaxX: undefined,
          tooltipFormat: new SPFormat(
            '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}'
          ),
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: [
            "#3366cc",
            "#dc3912",
            "#ff9900",
            "#109618",
            "#66aa00",
            "#dd4477",
            "#0099c6",
            "#990099",
          ],
          zeroColor: undefined,
          nullColor: undefined,
          zeroAxis: true,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          colorMap: undefined,
          tooltipFormat: new SPFormat(
            '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}'
          ),
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new SPFormat(
            '<span style="color: {{color}}">&#9679;</span> {{value:map}}'
          ),
          tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } },
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: undefined,
          thresholdValue: 0,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          tooltipFormat: new SPFormat("{{prefix}}{{value}}{{suffix}}"),
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: undefined,
          tooltipFormat: new SPFormat("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: { r: "Range", p: "Performance", t: "Target" },
          },
        },
        pie: {
          offset: 0,
          sliceColors: [
            "#3366cc",
            "#dc3912",
            "#ff9900",
            "#109618",
            "#66aa00",
            "#dd4477",
            "#0099c6",
            "#990099",
          ],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new SPFormat(
            '<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)'
          ),
        },
        box: {
          raw: false,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: true,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: undefined,
          targetColor: "#4a2",
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          tooltipFormat: new SPFormat("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker",
            },
          },
        },
      };
    };
    defaultStyles =
      ".jqstooltip { " +
      "position: absolute;" +
      "left: 0px;" +
      "top: 0px;" +
      "visibility: hidden;" +
      "background: rgb(0, 0, 0) transparent;" +
      "background-color: rgba(0,0,0,0.6);" +
      "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);" +
      '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' +
      "color: white;" +
      "font: 10px arial, san serif;" +
      "text-align: left;" +
      "white-space: nowrap;" +
      "padding: 5px;" +
      "border: 1px solid white;" +
      "box-sizing: content-box;" +
      "z-index: 10000;" +
      "}" +
      ".jqsfield { " +
      "color: white;" +
      "font: 10px arial, san serif;" +
      "text-align: left;" +
      "}";
    createClass = function () {
      var Class, args;
      Class = function () {
        this.init.apply(this, arguments);
      };
      if (arguments.length > 1) {
        if (arguments[0]) {
          Class.prototype = $.extend(
            new arguments[0](),
            arguments[arguments.length - 1]
          );
          Class._super = arguments[0].prototype;
        } else {
          Class.prototype = arguments[arguments.length - 1];
        }
        if (arguments.length > 2) {
          args = Array.prototype.slice.call(arguments, 1, -1);
          args.unshift(Class.prototype);
          $.extend.apply($, args);
        }
      } else {
        Class.prototype = arguments[0];
      }
      Class.prototype.cls = Class;
      return Class;
    };
    $.SPFormatClass = SPFormat = createClass({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function (format, fclass) {
        this.format = format;
        this.fclass = fclass;
      },
      render: function (fieldset, lookups, options) {
        var self = this,
          fields = fieldset,
          match,
          token,
          lookupkey,
          fieldvalue,
          prec;
        return this.format.replace(this.fre, function () {
          var lookup;
          token = arguments[1];
          lookupkey = arguments[3];
          match = self.precre.exec(token);
          if (match) {
            prec = match[2];
            token = match[1];
          } else {
            prec = false;
          }
          fieldvalue = fields[token];
          if (fieldvalue === undefined) {
            return "";
          }
          if (lookupkey && lookups && lookups[lookupkey]) {
            lookup = lookups[lookupkey];
            if (lookup.get) {
              return lookups[lookupkey].get(fieldvalue) || fieldvalue;
            } else {
              return lookups[lookupkey][fieldvalue] || fieldvalue;
            }
          }
          if (isNumber(fieldvalue)) {
            if (options.get("numberFormatter")) {
              fieldvalue = options.get("numberFormatter")(fieldvalue);
            } else {
              fieldvalue = formatNumber(
                fieldvalue,
                prec,
                options.get("numberDigitGroupCount"),
                options.get("numberDigitGroupSep"),
                options.get("numberDecimalMark")
              );
            }
          }
          return fieldvalue;
        });
      },
    });
    $.spformat = function (format, fclass) {
      return new SPFormat(format, fclass);
    };
    clipval = function (val, min, max) {
      if (val < min) {
        return min;
      }
      if (val > max) {
        return max;
      }
      return val;
    };
    quartile = function (values, q) {
      var vl;
      if (q === 2) {
        vl = Math.floor(values.length / 2);
        return values.length % 2
          ? values[vl]
          : (values[vl - 1] + values[vl]) / 2;
      } else {
        if (values.length % 2) {
          vl = (values.length * q + q) / 4;
          return vl % 1
            ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2
            : values[vl - 1];
        } else {
          vl = (values.length * q + 2) / 4;
          return vl % 1
            ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2
            : values[vl - 1];
        }
      }
    };
    normalizeValue = function (val) {
      var nf;
      switch (val) {
        case "undefined":
          val = undefined;
          break;
        case "null":
          val = null;
          break;
        case "true":
          val = true;
          break;
        case "false":
          val = false;
          break;
        default:
          nf = parseFloat(val);
          if (val == nf) {
            val = nf;
          }
      }
      return val;
    };
    normalizeValues = function (vals) {
      var i,
        result = [];
      for (i = vals.length; i--; ) {
        result[i] = normalizeValue(vals[i]);
      }
      return result;
    };
    remove = function (vals, filter) {
      var i,
        vl,
        result = [];
      for (i = 0, vl = vals.length; i < vl; i++) {
        if (vals[i] !== filter) {
          result.push(vals[i]);
        }
      }
      return result;
    };
    isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };
    formatNumber = function (num, prec, groupsize, groupsep, decsep) {
      var p, i;
      num = (
        prec === false ? parseFloat(num).toString() : num.toFixed(prec)
      ).split("");
      p = (p = $.inArray(".", num)) < 0 ? num.length : p;
      if (p < num.length) {
        num[p] = decsep;
      }
      for (i = p - groupsize; i > 0; i -= groupsize) {
        num.splice(i, 0, groupsep);
      }
      return num.join("");
    };
    all = function (val, arr, ignoreNull) {
      var i;
      for (i = arr.length; i--; ) {
        if (ignoreNull && arr[i] === null) continue;
        if (arr[i] !== val) {
          return false;
        }
      }
      return true;
    };
    sum = function (vals) {
      var total = 0,
        i;
      for (i = vals.length; i--; ) {
        total += typeof vals[i] === "number" ? vals[i] : 0;
      }
      return total;
    };
    ensureArray = function (val) {
      return $.isArray(val) ? val : [val];
    };
    addCSS = function (css) {
      var tag, iefail;
      if (document.createStyleSheet) {
        try {
          document.createStyleSheet().cssText = css;
          return;
        } catch (e) {
          iefail = true;
        }
      }
      tag = document.createElement("style");
      tag.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(tag);
      if (iefail) {
        document.styleSheets[document.styleSheets.length - 1].cssText = css;
      } else {
        tag[
          typeof document.body.style.WebkitAppearance == "string"
            ? "innerText"
            : "innerHTML"
        ] = css;
      }
    };
    $.fn.simpledraw = function (width, height, useExisting, interact) {
      var target, mhandler;
      if (useExisting && (target = this.data("_jqs_vcanvas"))) {
        return target;
      }
      if ($.fn.sparkline.canvas === false) {
        return false;
      } else if ($.fn.sparkline.canvas === undefined) {
        var el = document.createElement("canvas");
        if (!!(el.getContext && el.getContext("2d"))) {
          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_canvas(width, height, target, interact);
          };
        } else if (document.namespaces && !document.namespaces.v) {
          document.namespaces.add(
            "v",
            "urn:schemas-microsoft-com:vml",
            "#default#VML"
          );
          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_vml(width, height, target);
          };
        } else {
          $.fn.sparkline.canvas = false;
          return false;
        }
      }
      if (width === undefined) {
        width = $(this).innerWidth();
      }
      if (height === undefined) {
        height = $(this).innerHeight();
      }
      target = $.fn.sparkline.canvas(width, height, this, interact);
      mhandler = $(this).data("_jqs_mhandler");
      if (mhandler) {
        mhandler.registerCanvas(target);
      }
      return target;
    };
    $.fn.cleardraw = function () {
      var target = this.data("_jqs_vcanvas");
      if (target) {
        target.reset();
      }
    };
    $.RangeMapClass = RangeMap = createClass({
      init: function (map) {
        var key,
          range,
          rangelist = [];
        for (key in map) {
          if (
            map.hasOwnProperty(key) &&
            typeof key === "string" &&
            key.indexOf(":") > -1
          ) {
            range = key.split(":");
            range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
            range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
            range[2] = map[key];
            rangelist.push(range);
          }
        }
        this.map = map;
        this.rangelist = rangelist || false;
      },
      get: function (value) {
        var rangelist = this.rangelist,
          i,
          range,
          result;
        if ((result = this.map[value]) !== undefined) {
          return result;
        }
        if (rangelist) {
          for (i = rangelist.length; i--; ) {
            range = rangelist[i];
            if (range[0] <= value && range[1] >= value) {
              return range[2];
            }
          }
        }
        return undefined;
      },
    });
    $.range_map = function (map) {
      return new RangeMap(map);
    };
    MouseHandler = createClass({
      init: function (el, options) {
        var $el = $(el);
        this.$el = $el;
        this.options = options;
        this.currentPageX = 0;
        this.currentPageY = 0;
        this.el = el;
        this.splist = [];
        this.tooltip = null;
        this.over = false;
        this.displayTooltips = !options.get("disableTooltips");
        this.highlightEnabled = !options.get("disableHighlight");
      },
      registerSparkline: function (sp) {
        this.splist.push(sp);
        if (this.over) {
          this.updateDisplay();
        }
      },
      registerCanvas: function (canvas) {
        var $canvas = $(canvas.canvas);
        this.canvas = canvas;
        this.$canvas = $canvas;
        $canvas.mouseenter($.proxy(this.mouseenter, this));
        $canvas.mouseleave($.proxy(this.mouseleave, this));
        $canvas.click($.proxy(this.mouseclick, this));
      },
      reset: function (removeTooltip) {
        this.splist = [];
        if (this.tooltip && removeTooltip) {
          this.tooltip.remove();
          this.tooltip = undefined;
        }
      },
      mouseclick: function (e) {
        var clickEvent = $.Event("sparklineClick");
        clickEvent.originalEvent = e;
        clickEvent.sparklines = this.splist;
        this.$el.trigger(clickEvent);
      },
      mouseenter: function (e) {
        $(document.body).unbind("mousemove.jqs");
        $(document.body).bind("mousemove.jqs", $.proxy(this.mousemove, this));
        this.over = true;
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;
        if (!this.tooltip && this.displayTooltips) {
          this.tooltip = new Tooltip(this.options);
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }
        this.updateDisplay();
      },
      mouseleave: function () {
        $(document.body).unbind("mousemove.jqs");
        var splist = this.splist,
          spcount = splist.length,
          needsRefresh = false,
          sp,
          i;
        this.over = false;
        this.currentEl = null;
        if (this.tooltip) {
          this.tooltip.remove();
          this.tooltip = null;
        }
        for (i = 0; i < spcount; i++) {
          sp = splist[i];
          if (sp.clearRegionHighlight()) {
            needsRefresh = true;
          }
        }
        if (needsRefresh) {
          this.canvas.render();
        }
      },
      mousemove: function (e) {
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;
        if (this.tooltip) {
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }
        this.updateDisplay();
      },
      updateDisplay: function () {
        var splist = this.splist,
          spcount = splist.length,
          needsRefresh = false,
          offset = this.$canvas.offset(),
          localX = this.currentPageX - offset.left,
          localY = this.currentPageY - offset.top,
          tooltiphtml,
          sp,
          i,
          result,
          changeEvent;
        if (!this.over) {
          return;
        }
        for (i = 0; i < spcount; i++) {
          sp = splist[i];
          result = sp.setRegionHighlight(this.currentEl, localX, localY);
          if (result) {
            needsRefresh = true;
          }
        }
        if (needsRefresh) {
          changeEvent = $.Event("sparklineRegionChange");
          changeEvent.sparklines = this.splist;
          this.$el.trigger(changeEvent);
          if (this.tooltip) {
            tooltiphtml = "";
            for (i = 0; i < spcount; i++) {
              sp = splist[i];
              tooltiphtml += sp.getCurrentRegionTooltip();
            }
            this.tooltip.setContent(tooltiphtml);
          }
          if (!this.disableHighlight) {
            this.canvas.render();
          }
        }
        if (result === null) {
          this.mouseleave();
        }
      },
    });
    Tooltip = createClass({
      sizeStyle:
        "position: static !important;" +
        "display: block !important;" +
        "visibility: hidden !important;" +
        "float: left !important;",
      init: function (options) {
        var tooltipClassname = options.get("tooltipClassname", "jqstooltip"),
          sizetipStyle = this.sizeStyle,
          offset;
        this.container = options.get("tooltipContainer") || document.body;
        this.tooltipOffsetX = options.get("tooltipOffsetX", 10);
        this.tooltipOffsetY = options.get("tooltipOffsetY", 12);
        $("#jqssizetip").remove();
        $("#jqstooltip").remove();
        this.sizetip = $("<div/>", {
          id: "jqssizetip",
          style: sizetipStyle,
          class: tooltipClassname,
        });
        this.tooltip = $("<div/>", {
          id: "jqstooltip",
          class: tooltipClassname,
        }).appendTo(this.container);
        offset = this.tooltip.offset();
        this.offsetLeft = offset.left;
        this.offsetTop = offset.top;
        this.hidden = true;
        $(window).unbind("resize.jqs scroll.jqs");
        $(window).bind(
          "resize.jqs scroll.jqs",
          $.proxy(this.updateWindowDims, this)
        );
        this.updateWindowDims();
      },
      updateWindowDims: function () {
        this.scrollTop = $(window).scrollTop();
        this.scrollLeft = $(window).scrollLeft();
        this.scrollRight = this.scrollLeft + $(window).width();
        this.updatePosition();
      },
      getSize: function (content) {
        this.sizetip.html(content).appendTo(this.container);
        this.width = this.sizetip.width() + 1;
        this.height = this.sizetip.height();
        this.sizetip.remove();
      },
      setContent: function (content) {
        if (!content) {
          this.tooltip.css("visibility", "hidden");
          this.hidden = true;
          return;
        }
        this.getSize(content);
        this.tooltip.html(content).css({
          width: this.width,
          height: this.height,
          visibility: "visible",
        });
        if (this.hidden) {
          this.hidden = false;
          this.updatePosition();
        }
      },
      updatePosition: function (x, y) {
        if (x === undefined) {
          if (this.mousex === undefined) {
            return;
          }
          x = this.mousex - this.offsetLeft;
          y = this.mousey - this.offsetTop;
        } else {
          this.mousex = x = x - this.offsetLeft;
          this.mousey = y = y - this.offsetTop;
        }
        if (!this.height || !this.width || this.hidden) {
          return;
        }
        y -= this.height + this.tooltipOffsetY;
        x += this.tooltipOffsetX;
        if (y < this.scrollTop) {
          y = this.scrollTop;
        }
        if (x < this.scrollLeft) {
          x = this.scrollLeft;
        } else if (x + this.width > this.scrollRight) {
          x = this.scrollRight - this.width;
        }
        this.tooltip.css({ left: x, top: y });
      },
      remove: function () {
        this.tooltip.remove();
        this.sizetip.remove();
        this.sizetip = this.tooltip = undefined;
        $(window).unbind("resize.jqs scroll.jqs");
      },
    });
    initStyles = function () {
      addCSS(defaultStyles);
    };
    $(initStyles);
    pending = [];
    $.fn.sparkline = function (userValues, userOptions) {
      return this.each(function () {
        var options = new $.fn.sparkline.options(this, userOptions),
          $this = $(this),
          render,
          i;
        render = function () {
          var values, width, height, tmp, mhandler, sp, vals;
          if (userValues === "html" || userValues === undefined) {
            vals = this.getAttribute(options.get("tagValuesAttribute"));
            if (vals === undefined || vals === null) {
              vals = $this.html();
            }
            values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
          } else {
            values = userValues;
          }
          width =
            options.get("width") === "auto"
              ? values.length * options.get("defaultPixelsPerValue")
              : options.get("width");
          if (options.get("height") === "auto") {
            if (!options.get("composite") || !$.data(this, "_jqs_vcanvas")) {
              tmp = document.createElement("span");
              tmp.innerHTML = "a";
              $this.html(tmp);
              height = $(tmp).innerHeight() || $(tmp).height();
              $(tmp).remove();
              tmp = null;
            }
          } else {
            height = options.get("height");
          }
          if (!options.get("disableInteraction")) {
            mhandler = $.data(this, "_jqs_mhandler");
            if (!mhandler) {
              mhandler = new MouseHandler(this, options);
              $.data(this, "_jqs_mhandler", mhandler);
            } else if (!options.get("composite")) {
              mhandler.reset();
            }
          } else {
            mhandler = false;
          }
          if (options.get("composite") && !$.data(this, "_jqs_vcanvas")) {
            if (!$.data(this, "_jqs_errnotify")) {
              alert(
                "Attempted to attach a composite sparkline to an element with no existing sparkline"
              );
              $.data(this, "_jqs_errnotify", true);
            }
            return;
          }
          sp = new $.fn.sparkline[options.get("type")](
            this,
            values,
            options,
            width,
            height
          );
          sp.render();
          if (mhandler) {
            mhandler.registerSparkline(sp);
          }
        };
        if (
          ($(this).html() &&
            !options.get("disableHiddenCheck") &&
            $(this).is(":hidden")) ||
          !$(this).parents("body").length
        ) {
          if (!options.get("composite") && $.data(this, "_jqs_pending")) {
            for (i = pending.length; i; i--) {
              if (pending[i - 1][0] == this) {
                pending.splice(i - 1, 1);
              }
            }
          }
          pending.push([this, render]);
          $.data(this, "_jqs_pending", true);
        } else {
          render.call(this);
        }
      });
    };
    $.fn.sparkline.defaults = getDefaults();
    $.sparkline_display_visible = function () {
      var el, i, pl;
      var done = [];
      for (i = 0, pl = pending.length; i < pl; i++) {
        el = pending[i][0];
        if ($(el).is(":visible") && !$(el).parents().is(":hidden")) {
          pending[i][1].call(el);
          $.data(pending[i][0], "_jqs_pending", false);
          done.push(i);
        } else if (
          !$(el).closest("html").length &&
          !$.data(el, "_jqs_pending")
        ) {
          $.data(pending[i][0], "_jqs_pending", false);
          done.push(i);
        }
      }
      for (i = done.length; i; i--) {
        pending.splice(done[i - 1], 1);
      }
    };
    $.fn.sparkline.options = createClass({
      init: function (tag, userOptions) {
        var extendedOptions, defaults, base, tagOptionType;
        this.userOptions = userOptions = userOptions || {};
        this.tag = tag;
        this.tagValCache = {};
        defaults = $.fn.sparkline.defaults;
        base = defaults.common;
        this.tagOptionsPrefix =
          userOptions.enableTagOptions &&
          (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);
        tagOptionType = this.getTagSetting("type");
        if (tagOptionType === UNSET_OPTION) {
          extendedOptions = defaults[userOptions.type || base.type];
        } else {
          extendedOptions = defaults[tagOptionType];
        }
        this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
      },
      getTagSetting: function (key) {
        var prefix = this.tagOptionsPrefix,
          val,
          i,
          pairs,
          keyval;
        if (prefix === false || prefix === undefined) {
          return UNSET_OPTION;
        }
        if (this.tagValCache.hasOwnProperty(key)) {
          val = this.tagValCache.key;
        } else {
          val = this.tag.getAttribute(prefix + key);
          if (val === undefined || val === null) {
            val = UNSET_OPTION;
          } else if (val.substr(0, 1) === "[") {
            val = val.substr(1, val.length - 2).split(",");
            for (i = val.length; i--; ) {
              val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else if (val.substr(0, 1) === "{") {
            pairs = val.substr(1, val.length - 2).split(",");
            val = {};
            for (i = pairs.length; i--; ) {
              keyval = pairs[i].split(":", 2);
              val[keyval[0].replace(/(^\s*)|(\s*$)/g, "")] = normalizeValue(
                keyval[1].replace(/(^\s*)|(\s*$)/g, "")
              );
            }
          } else {
            val = normalizeValue(val);
          }
          this.tagValCache.key = val;
        }
        return val;
      },
      get: function (key, defaultval) {
        var tagOption = this.getTagSetting(key),
          result;
        if (tagOption !== UNSET_OPTION) {
          return tagOption;
        }
        return (result = this.mergedOptions[key]) === undefined
          ? defaultval
          : result;
      },
    });
    $.fn.sparkline._base = createClass({
      disabled: false,
      init: function (el, values, options, width, height) {
        this.el = el;
        this.$el = $(el);
        this.values = values;
        this.options = options;
        this.width = width;
        this.height = height;
        this.currentRegion = undefined;
      },
      initTarget: function () {
        var interactive = !this.options.get("disableInteraction");
        if (
          !(this.target = this.$el.simpledraw(
            this.width,
            this.height,
            this.options.get("composite"),
            interactive
          ))
        ) {
          this.disabled = true;
        } else {
          this.canvasWidth = this.target.pixelWidth;
          this.canvasHeight = this.target.pixelHeight;
        }
      },
      render: function () {
        if (this.disabled) {
          this.el.innerHTML = "";
          return false;
        }
        return true;
      },
      getRegion: function (x, y) {},
      setRegionHighlight: function (el, x, y) {
        var currentRegion = this.currentRegion,
          highlightEnabled = !this.options.get("disableHighlight"),
          newRegion;
        if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
          return null;
        }
        newRegion = this.getRegion(el, x, y);
        if (currentRegion !== newRegion) {
          if (currentRegion !== undefined && highlightEnabled) {
            this.removeHighlight();
          }
          this.currentRegion = newRegion;
          if (newRegion !== undefined && highlightEnabled) {
            this.renderHighlight();
          }
          return true;
        }
        return false;
      },
      clearRegionHighlight: function () {
        if (this.currentRegion !== undefined) {
          this.removeHighlight();
          this.currentRegion = undefined;
          return true;
        }
        return false;
      },
      renderHighlight: function () {
        this.changeHighlight(true);
      },
      removeHighlight: function () {
        this.changeHighlight(false);
      },
      changeHighlight: function (highlight) {},
      getCurrentRegionTooltip: function () {
        var options = this.options,
          header = "",
          entries = [],
          fields,
          formats,
          formatlen,
          fclass,
          text,
          i,
          showFields,
          showFieldsKey,
          newFields,
          fv,
          formatter,
          format,
          fieldlen,
          j;
        if (this.currentRegion === undefined) {
          return "";
        }
        fields = this.getCurrentRegionFields();
        formatter = options.get("tooltipFormatter");
        if (formatter) {
          return formatter(this, options, fields);
        }
        if (options.get("tooltipChartTitle")) {
          header +=
            '<div class="jqs jqstitle">' +
            options.get("tooltipChartTitle") +
            "</div>\n";
        }
        formats = this.options.get("tooltipFormat");
        if (!formats) {
          return "";
        }
        if (!$.isArray(formats)) {
          formats = [formats];
        }
        if (!$.isArray(fields)) {
          fields = [fields];
        }
        showFields = this.options.get("tooltipFormatFieldlist");
        showFieldsKey = this.options.get("tooltipFormatFieldlistKey");
        if (showFields && showFieldsKey) {
          newFields = [];
          for (i = fields.length; i--; ) {
            fv = fields[i][showFieldsKey];
            if ((j = $.inArray(fv, showFields)) != -1) {
              newFields[j] = fields[i];
            }
          }
          fields = newFields;
        }
        formatlen = formats.length;
        fieldlen = fields.length;
        for (i = 0; i < formatlen; i++) {
          format = formats[i];
          if (typeof format === "string") {
            format = new SPFormat(format);
          }
          fclass = format.fclass || "jqsfield";
          for (j = 0; j < fieldlen; j++) {
            if (!fields[j].isNull || !options.get("tooltipSkipNull")) {
              $.extend(fields[j], {
                prefix: options.get("tooltipPrefix"),
                suffix: options.get("tooltipSuffix"),
              });
              text = format.render(
                fields[j],
                options.get("tooltipValueLookups"),
                options
              );
              entries.push('<div class="' + fclass + '">' + text + "</div>");
            }
          }
        }
        if (entries.length) {
          return header + entries.join("\n");
        }
        return "";
      },
      getCurrentRegionFields: function () {},
      calcHighlightColor: function (color, options) {
        var highlightColor = options.get("highlightColor"),
          lighten = options.get("highlightLighten"),
          parse,
          mult,
          rgbnew,
          i;
        if (highlightColor) {
          return highlightColor;
        }
        if (lighten) {
          parse =
            /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) ||
            /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
          if (parse) {
            rgbnew = [];
            mult = color.length === 4 ? 16 : 1;
            for (i = 0; i < 3; i++) {
              rgbnew[i] = clipval(
                Math.round(parseInt(parse[i + 1], 16) * mult * lighten),
                0,
                255
              );
            }
            return "rgb(" + rgbnew.join(",") + ")";
          }
        }
        return color;
      },
    });
    barHighlightMixin = {
      changeHighlight: function (highlight) {
        var currentRegion = this.currentRegion,
          target = this.target,
          shapeids = this.regionShapes[currentRegion],
          newShapes;
        if (shapeids) {
          newShapes = this.renderRegion(currentRegion, highlight);
          if ($.isArray(newShapes) || $.isArray(shapeids)) {
            target.replaceWithShapes(shapeids, newShapes);
            this.regionShapes[currentRegion] = $.map(
              newShapes,
              function (newShape) {
                return newShape.id;
              }
            );
          } else {
            target.replaceWithShape(shapeids, newShapes);
            this.regionShapes[currentRegion] = newShapes.id;
          }
        }
      },
      render: function () {
        var values = this.values,
          target = this.target,
          regionShapes = this.regionShapes,
          shapes,
          ids,
          i,
          j;
        if (!this.cls._super.render.call(this)) {
          return;
        }
        for (i = values.length; i--; ) {
          shapes = this.renderRegion(i);
          if (shapes) {
            if ($.isArray(shapes)) {
              ids = [];
              for (j = shapes.length; j--; ) {
                shapes[j].append();
                ids.push(shapes[j].id);
              }
              regionShapes[i] = ids;
            } else {
              shapes.append();
              regionShapes[i] = shapes.id;
            }
          } else {
            regionShapes[i] = null;
          }
        }
        target.render();
      },
    };
    $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
      type: "line",
      init: function (el, values, options, width, height) {
        line._super.init.call(this, el, values, options, width, height);
        this.vertices = [];
        this.regionMap = [];
        this.xvalues = [];
        this.yvalues = [];
        this.yminmax = [];
        this.hightlightSpotId = null;
        this.lastShapeId = null;
        this.initTarget();
      },
      getRegion: function (el, x, y) {
        var i,
          regionMap = this.regionMap;
        for (i = regionMap.length; i--; ) {
          if (
            regionMap[i] !== null &&
            x >= regionMap[i][0] &&
            x <= regionMap[i][1]
          ) {
            return regionMap[i][2];
          }
        }
        return undefined;
      },
      getCurrentRegionFields: function () {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.yvalues[currentRegion] === null,
          x: this.xvalues[currentRegion],
          y: this.yvalues[currentRegion],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: currentRegion,
        };
      },
      renderHighlight: function () {
        var currentRegion = this.currentRegion,
          target = this.target,
          vertex = this.vertices[currentRegion],
          options = this.options,
          spotRadius = options.get("spotRadius"),
          highlightSpotColor = options.get("highlightSpotColor"),
          highlightLineColor = options.get("highlightLineColor"),
          highlightSpot,
          highlightLine;
        if (!vertex) {
          return;
        }
        if (spotRadius && highlightSpotColor) {
          highlightSpot = target.drawCircle(
            vertex[0],
            vertex[1],
            spotRadius,
            undefined,
            highlightSpotColor
          );
          this.highlightSpotId = highlightSpot.id;
          target.insertAfterShape(this.lastShapeId, highlightSpot);
        }
        if (highlightLineColor) {
          highlightLine = target.drawLine(
            vertex[0],
            this.canvasTop,
            vertex[0],
            this.canvasTop + this.canvasHeight,
            highlightLineColor
          );
          this.highlightLineId = highlightLine.id;
          target.insertAfterShape(this.lastShapeId, highlightLine);
        }
      },
      removeHighlight: function () {
        var target = this.target;
        if (this.highlightSpotId) {
          target.removeShapeId(this.highlightSpotId);
          this.highlightSpotId = null;
        }
        if (this.highlightLineId) {
          target.removeShapeId(this.highlightLineId);
          this.highlightLineId = null;
        }
      },
      scanValues: function () {
        var values = this.values,
          valcount = values.length,
          xvalues = this.xvalues,
          yvalues = this.yvalues,
          yminmax = this.yminmax,
          i,
          val,
          isStr,
          isArray,
          sp;
        for (i = 0; i < valcount; i++) {
          val = values[i];
          isStr = typeof values[i] === "string";
          isArray = typeof values[i] === "object" && values[i] instanceof Array;
          sp = isStr && values[i].split(":");
          if (isStr && sp.length === 2) {
            xvalues.push(Number(sp[0]));
            yvalues.push(Number(sp[1]));
            yminmax.push(Number(sp[1]));
          } else if (isArray) {
            xvalues.push(val[0]);
            yvalues.push(val[1]);
            yminmax.push(val[1]);
          } else {
            xvalues.push(i);
            if (values[i] === null || values[i] === "null") {
              yvalues.push(null);
            } else {
              yvalues.push(Number(val));
              yminmax.push(Number(val));
            }
          }
        }
        if (this.options.get("xvalues")) {
          xvalues = this.options.get("xvalues");
        }
        this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
        this.miny = this.minyorg = Math.min.apply(Math, yminmax);
        this.maxx = Math.max.apply(Math, xvalues);
        this.minx = Math.min.apply(Math, xvalues);
        this.xvalues = xvalues;
        this.yvalues = yvalues;
        this.yminmax = yminmax;
      },
      processRangeOptions: function () {
        var options = this.options,
          normalRangeMin = options.get("normalRangeMin"),
          normalRangeMax = options.get("normalRangeMax");
        if (normalRangeMin !== undefined) {
          if (normalRangeMin < this.miny) {
            this.miny = normalRangeMin;
          }
          if (normalRangeMax > this.maxy) {
            this.maxy = normalRangeMax;
          }
        }
        if (
          options.get("chartRangeMin") !== undefined &&
          (options.get("chartRangeClip") ||
            options.get("chartRangeMin") < this.miny)
        ) {
          this.miny = options.get("chartRangeMin");
        }
        if (
          options.get("chartRangeMax") !== undefined &&
          (options.get("chartRangeClip") ||
            options.get("chartRangeMax") > this.maxy)
        ) {
          this.maxy = options.get("chartRangeMax");
        }
        if (
          options.get("chartRangeMinX") !== undefined &&
          (options.get("chartRangeClipX") ||
            options.get("chartRangeMinX") < this.minx)
        ) {
          this.minx = options.get("chartRangeMinX");
        }
        if (
          options.get("chartRangeMaxX") !== undefined &&
          (options.get("chartRangeClipX") ||
            options.get("chartRangeMaxX") > this.maxx)
        ) {
          this.maxx = options.get("chartRangeMaxX");
        }
      },
      drawNormalRange: function (
        canvasLeft,
        canvasTop,
        canvasHeight,
        canvasWidth,
        rangey
      ) {
        var normalRangeMin = this.options.get("normalRangeMin"),
          normalRangeMax = this.options.get("normalRangeMax"),
          ytop =
            canvasTop +
            Math.round(
              canvasHeight -
                canvasHeight * ((normalRangeMax - this.miny) / rangey)
            ),
          height = Math.round(
            (canvasHeight * (normalRangeMax - normalRangeMin)) / rangey
          );
        this.target
          .drawRect(
            canvasLeft,
            ytop,
            canvasWidth,
            height,
            undefined,
            this.options.get("normalRangeColor")
          )
          .append();
      },
      render: function () {
        var options = this.options,
          target = this.target,
          canvasWidth = this.canvasWidth,
          canvasHeight = this.canvasHeight,
          vertices = this.vertices,
          spotRadius = options.get("spotRadius"),
          regionMap = this.regionMap,
          rangex,
          rangey,
          yvallast,
          canvasTop,
          canvasLeft,
          vertex,
          path,
          paths,
          x,
          y,
          xnext,
          xpos,
          xposnext,
          last,
          next,
          yvalcount,
          lineShapes,
          fillShapes,
          plen,
          valueSpots,
          hlSpotsEnabled,
          color,
          xvalues,
          yvalues,
          i;
        if (!line._super.render.call(this)) {
          return;
        }
        this.scanValues();
        this.processRangeOptions();
        xvalues = this.xvalues;
        yvalues = this.yvalues;
        if (!this.yminmax.length || this.yvalues.length < 2) {
          return;
        }
        canvasTop = canvasLeft = 0;
        rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
        rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
        yvallast = this.yvalues.length - 1;
        if (
          spotRadius &&
          (canvasWidth < spotRadius * 4 || canvasHeight < spotRadius * 4)
        ) {
          spotRadius = 0;
        }
        if (spotRadius) {
          hlSpotsEnabled =
            options.get("highlightSpotColor") &&
            !options.get("disableInteraction");
          if (
            hlSpotsEnabled ||
            options.get("minSpotColor") ||
            (options.get("spotColor") && yvalues[yvallast] === this.miny)
          ) {
            canvasHeight -= Math.ceil(spotRadius);
          }
          if (
            hlSpotsEnabled ||
            options.get("maxSpotColor") ||
            (options.get("spotColor") && yvalues[yvallast] === this.maxy)
          ) {
            canvasHeight -= Math.ceil(spotRadius);
            canvasTop += Math.ceil(spotRadius);
          }
          if (
            hlSpotsEnabled ||
            ((options.get("minSpotColor") || options.get("maxSpotColor")) &&
              (yvalues[0] === this.miny || yvalues[0] === this.maxy))
          ) {
            canvasLeft += Math.ceil(spotRadius);
            canvasWidth -= Math.ceil(spotRadius);
          }
          if (
            hlSpotsEnabled ||
            options.get("spotColor") ||
            options.get("minSpotColor") ||
            (options.get("maxSpotColor") &&
              (yvalues[yvallast] === this.miny ||
                yvalues[yvallast] === this.maxy))
          ) {
            canvasWidth -= Math.ceil(spotRadius);
          }
        }
        canvasHeight--;
        if (
          options.get("normalRangeMin") !== undefined &&
          !options.get("drawNormalOnTop")
        ) {
          this.drawNormalRange(
            canvasLeft,
            canvasTop,
            canvasHeight,
            canvasWidth,
            rangey
          );
        }
        path = [];
        paths = [path];
        last = next = null;
        yvalcount = yvalues.length;
        for (i = 0; i < yvalcount; i++) {
          x = xvalues[i];
          xnext = xvalues[i + 1];
          y = yvalues[i];
          xpos =
            canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
          xposnext =
            i < yvalcount - 1
              ? canvasLeft +
                Math.round((xnext - this.minx) * (canvasWidth / rangex))
              : canvasWidth;
          next = xpos + (xposnext - xpos) / 2;
          regionMap[i] = [last || 0, next, i];
          last = next;
          if (y === null) {
            if (i) {
              if (yvalues[i - 1] !== null) {
                path = [];
                paths.push(path);
              }
              vertices.push(null);
            }
          } else {
            if (y < this.miny) {
              y = this.miny;
            }
            if (y > this.maxy) {
              y = this.maxy;
            }
            if (!path.length) {
              path.push([xpos, canvasTop + canvasHeight]);
            }
            vertex = [
              xpos,
              canvasTop +
                Math.round(
                  canvasHeight - canvasHeight * ((y - this.miny) / rangey)
                ),
            ];
            path.push(vertex);
            vertices.push(vertex);
          }
        }
        lineShapes = [];
        fillShapes = [];
        plen = paths.length;
        for (i = 0; i < plen; i++) {
          path = paths[i];
          if (path.length) {
            if (options.get("fillColor")) {
              path.push([path[path.length - 1][0], canvasTop + canvasHeight]);
              fillShapes.push(path.slice(0));
              path.pop();
            }
            if (path.length > 2) {
              path[0] = [path[0][0], path[1][1]];
            }
            lineShapes.push(path);
          }
        }
        plen = fillShapes.length;
        for (i = 0; i < plen; i++) {
          target
            .drawShape(
              fillShapes[i],
              options.get("fillColor"),
              options.get("fillColor")
            )
            .append();
        }
        if (
          options.get("normalRangeMin") !== undefined &&
          options.get("drawNormalOnTop")
        ) {
          this.drawNormalRange(
            canvasLeft,
            canvasTop,
            canvasHeight,
            canvasWidth,
            rangey
          );
        }
        plen = lineShapes.length;
        for (i = 0; i < plen; i++) {
          target
            .drawShape(
              lineShapes[i],
              options.get("lineColor"),
              undefined,
              options.get("lineWidth")
            )
            .append();
        }
        if (spotRadius && options.get("valueSpots")) {
          valueSpots = options.get("valueSpots");
          if (valueSpots.get === undefined) {
            valueSpots = new RangeMap(valueSpots);
          }
          for (i = 0; i < yvalcount; i++) {
            color = valueSpots.get(yvalues[i]);
            if (color) {
              target
                .drawCircle(
                  canvasLeft +
                    Math.round(
                      (xvalues[i] - this.minx) * (canvasWidth / rangex)
                    ),
                  canvasTop +
                    Math.round(
                      canvasHeight -
                        canvasHeight * ((yvalues[i] - this.miny) / rangey)
                    ),
                  spotRadius,
                  undefined,
                  color
                )
                .append();
            }
          }
        }
        if (
          spotRadius &&
          options.get("spotColor") &&
          yvalues[yvallast] !== null
        ) {
          target
            .drawCircle(
              canvasLeft +
                Math.round(
                  (xvalues[xvalues.length - 1] - this.minx) *
                    (canvasWidth / rangex)
                ),
              canvasTop +
                Math.round(
                  canvasHeight -
                    canvasHeight * ((yvalues[yvallast] - this.miny) / rangey)
                ),
              spotRadius,
              undefined,
              options.get("spotColor")
            )
            .append();
        }
        if (this.maxy !== this.minyorg) {
          if (spotRadius && options.get("minSpotColor")) {
            x = xvalues[$.inArray(this.minyorg, yvalues)];
            target
              .drawCircle(
                canvasLeft +
                  Math.round((x - this.minx) * (canvasWidth / rangex)),
                canvasTop +
                  Math.round(
                    canvasHeight -
                      canvasHeight * ((this.minyorg - this.miny) / rangey)
                  ),
                spotRadius,
                undefined,
                options.get("minSpotColor")
              )
              .append();
          }
          if (spotRadius && options.get("maxSpotColor")) {
            x = xvalues[$.inArray(this.maxyorg, yvalues)];
            target
              .drawCircle(
                canvasLeft +
                  Math.round((x - this.minx) * (canvasWidth / rangex)),
                canvasTop +
                  Math.round(
                    canvasHeight -
                      canvasHeight * ((this.maxyorg - this.miny) / rangey)
                  ),
                spotRadius,
                undefined,
                options.get("maxSpotColor")
              )
              .append();
          }
        }
        this.lastShapeId = target.getLastShapeId();
        this.canvasTop = canvasTop;
        target.render();
      },
    });
    $.fn.sparkline.bar = bar = createClass(
      $.fn.sparkline._base,
      barHighlightMixin,
      {
        type: "bar",
        init: function (el, values, options, width, height) {
          var barWidth = parseInt(options.get("barWidth"), 10),
            barSpacing = parseInt(options.get("barSpacing"), 10),
            chartRangeMin = options.get("chartRangeMin"),
            chartRangeMax = options.get("chartRangeMax"),
            chartRangeClip = options.get("chartRangeClip"),
            stackMin = Infinity,
            stackMax = -Infinity,
            isStackString,
            groupMin,
            groupMax,
            stackRanges,
            numValues,
            i,
            vlen,
            range,
            zeroAxis,
            xaxisOffset,
            min,
            max,
            clipMin,
            clipMax,
            stacked,
            vlist,
            j,
            slen,
            svals,
            val,
            yoffset,
            yMaxCalc,
            canvasHeightEf;
          bar._super.init.call(this, el, values, options, width, height);
          for (i = 0, vlen = values.length; i < vlen; i++) {
            val = values[i];
            isStackString = typeof val === "string" && val.indexOf(":") > -1;
            if (isStackString || $.isArray(val)) {
              stacked = true;
              if (isStackString) {
                val = values[i] = normalizeValues(val.split(":"));
              }
              val = remove(val, null);
              groupMin = Math.min.apply(Math, val);
              groupMax = Math.max.apply(Math, val);
              if (groupMin < stackMin) {
                stackMin = groupMin;
              }
              if (groupMax > stackMax) {
                stackMax = groupMax;
              }
            }
          }
          this.stacked = stacked;
          this.regionShapes = {};
          this.barWidth = barWidth;
          this.barSpacing = barSpacing;
          this.totalBarWidth = barWidth + barSpacing;
          this.width = width =
            values.length * barWidth + (values.length - 1) * barSpacing;
          this.initTarget();
          if (chartRangeClip) {
            clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
            clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
          }
          numValues = [];
          stackRanges = stacked ? [] : numValues;
          var stackTotals = [];
          var stackRangesNeg = [];
          for (i = 0, vlen = values.length; i < vlen; i++) {
            if (stacked) {
              vlist = values[i];
              values[i] = svals = [];
              stackTotals[i] = 0;
              stackRanges[i] = stackRangesNeg[i] = 0;
              for (j = 0, slen = vlist.length; j < slen; j++) {
                val = svals[j] = chartRangeClip
                  ? clipval(vlist[j], clipMin, clipMax)
                  : vlist[j];
                if (val !== null) {
                  if (val > 0) {
                    stackTotals[i] += val;
                  }
                  if (stackMin < 0 && stackMax > 0) {
                    if (val < 0) {
                      stackRangesNeg[i] += Math.abs(val);
                    } else {
                      stackRanges[i] += val;
                    }
                  } else {
                    stackRanges[i] += Math.abs(
                      val - (val < 0 ? stackMax : stackMin)
                    );
                  }
                  numValues.push(val);
                }
              }
            } else {
              val = chartRangeClip
                ? clipval(values[i], clipMin, clipMax)
                : values[i];
              val = values[i] = normalizeValue(val);
              if (val !== null) {
                numValues.push(val);
              }
            }
          }
          this.max = max = Math.max.apply(Math, numValues);
          this.min = min = Math.min.apply(Math, numValues);
          this.stackMax = stackMax = stacked
            ? Math.max.apply(Math, stackTotals)
            : max;
          this.stackMin = stackMin = stacked
            ? Math.min.apply(Math, numValues)
            : min;
          if (
            options.get("chartRangeMin") !== undefined &&
            (options.get("chartRangeClip") ||
              options.get("chartRangeMin") < min)
          ) {
            min = options.get("chartRangeMin");
          }
          if (
            options.get("chartRangeMax") !== undefined &&
            (options.get("chartRangeClip") ||
              options.get("chartRangeMax") > max)
          ) {
            max = options.get("chartRangeMax");
          }
          this.zeroAxis = zeroAxis = options.get("zeroAxis", true);
          if (min <= 0 && max >= 0 && zeroAxis) {
            xaxisOffset = 0;
          } else if (zeroAxis == false) {
            xaxisOffset = min;
          } else if (min > 0) {
            xaxisOffset = min;
          } else {
            xaxisOffset = max;
          }
          this.xaxisOffset = xaxisOffset;
          range = stacked
            ? Math.max.apply(Math, stackRanges) +
              Math.max.apply(Math, stackRangesNeg)
            : max - min;
          this.canvasHeightEf =
            zeroAxis && min < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1;
          if (min < xaxisOffset) {
            yMaxCalc = stacked && max >= 0 ? stackMax : max;
            yoffset = ((yMaxCalc - xaxisOffset) / range) * this.canvasHeight;
            if (yoffset !== Math.ceil(yoffset)) {
              this.canvasHeightEf -= 2;
              yoffset = Math.ceil(yoffset);
            }
          } else {
            yoffset = this.canvasHeight;
          }
          this.yoffset = yoffset;
          if ($.isArray(options.get("colorMap"))) {
            this.colorMapByIndex = options.get("colorMap");
            this.colorMapByValue = null;
          } else {
            this.colorMapByIndex = null;
            this.colorMapByValue = options.get("colorMap");
            if (
              this.colorMapByValue &&
              this.colorMapByValue.get === undefined
            ) {
              this.colorMapByValue = new RangeMap(this.colorMapByValue);
            }
          }
          this.range = range;
        },
        getRegion: function (el, x, y) {
          var result = Math.floor(x / this.totalBarWidth);
          return result < 0 || result >= this.values.length
            ? undefined
            : result;
        },
        getCurrentRegionFields: function () {
          var currentRegion = this.currentRegion,
            values = ensureArray(this.values[currentRegion]),
            result = [],
            value,
            i;
          for (i = values.length; i--; ) {
            value = values[i];
            result.push({
              isNull: value === null,
              value: value,
              color: this.calcColor(i, value, currentRegion),
              offset: currentRegion,
            });
          }
          return result;
        },
        calcColor: function (stacknum, value, valuenum) {
          var colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            options = this.options,
            color,
            newColor;
          if (this.stacked) {
            color = options.get("stackedBarColor");
          } else {
            color =
              value < 0 ? options.get("negBarColor") : options.get("barColor");
          }
          if (value === 0 && options.get("zeroColor") !== undefined) {
            color = options.get("zeroColor");
          }
          if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
            color = newColor;
          } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
            color = colorMapByIndex[valuenum];
          }
          return $.isArray(color) ? color[stacknum % color.length] : color;
        },
        renderRegion: function (valuenum, highlight) {
          var vals = this.values[valuenum],
            options = this.options,
            xaxisOffset = this.xaxisOffset,
            result = [],
            range = this.range,
            stacked = this.stacked,
            target = this.target,
            x = valuenum * this.totalBarWidth,
            canvasHeightEf = this.canvasHeightEf,
            yoffset = this.yoffset,
            y,
            height,
            color,
            isNull,
            yoffsetNeg,
            i,
            valcount,
            val,
            minPlotted,
            allMin;
          vals = $.isArray(vals) ? vals : [vals];
          valcount = vals.length;
          val = vals[0];
          isNull = all(null, vals);
          allMin = all(xaxisOffset, vals, true);
          if (isNull) {
            if (options.get("nullColor")) {
              color = highlight
                ? options.get("nullColor")
                : this.calcHighlightColor(options.get("nullColor"), options);
              y = yoffset > 0 ? yoffset - 1 : yoffset;
              return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
            } else {
              return undefined;
            }
          }
          yoffsetNeg = yoffset;
          for (i = 0; i < valcount; i++) {
            val = vals[i];
            if (stacked && val === xaxisOffset) {
              if (!allMin || minPlotted) {
                continue;
              }
              minPlotted = true;
            }
            if (range > 0) {
              height =
                Math.floor(
                  canvasHeightEf * (Math.abs(val - xaxisOffset) / range)
                ) + 1;
            } else {
              height = 1;
            }
            if (val < xaxisOffset || (val === xaxisOffset && yoffset === 0)) {
              y = yoffsetNeg;
              yoffsetNeg += height;
            } else {
              y = yoffset - height;
              yoffset -= height;
            }
            color = this.calcColor(i, val, valuenum);
            if (highlight) {
              color = this.calcHighlightColor(color, options);
            }
            result.push(
              target.drawRect(x, y, this.barWidth - 1, height - 1, color, color)
            );
          }
          if (result.length === 1) {
            return result[0];
          }
          return result;
        },
      }
    );
    $.fn.sparkline.tristate = tristate = createClass(
      $.fn.sparkline._base,
      barHighlightMixin,
      {
        type: "tristate",
        init: function (el, values, options, width, height) {
          var barWidth = parseInt(options.get("barWidth"), 10),
            barSpacing = parseInt(options.get("barSpacing"), 10);
          tristate._super.init.call(this, el, values, options, width, height);
          this.regionShapes = {};
          this.barWidth = barWidth;
          this.barSpacing = barSpacing;
          this.totalBarWidth = barWidth + barSpacing;
          this.values = $.map(values, Number);
          this.width = width =
            values.length * barWidth + (values.length - 1) * barSpacing;
          if ($.isArray(options.get("colorMap"))) {
            this.colorMapByIndex = options.get("colorMap");
            this.colorMapByValue = null;
          } else {
            this.colorMapByIndex = null;
            this.colorMapByValue = options.get("colorMap");
            if (
              this.colorMapByValue &&
              this.colorMapByValue.get === undefined
            ) {
              this.colorMapByValue = new RangeMap(this.colorMapByValue);
            }
          }
          this.initTarget();
        },
        getRegion: function (el, x, y) {
          return Math.floor(x / this.totalBarWidth);
        },
        getCurrentRegionFields: function () {
          var currentRegion = this.currentRegion;
          return {
            isNull: this.values[currentRegion] === undefined,
            value: this.values[currentRegion],
            color: this.calcColor(this.values[currentRegion], currentRegion),
            offset: currentRegion,
          };
        },
        calcColor: function (value, valuenum) {
          var values = this.values,
            options = this.options,
            colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            color,
            newColor;
          if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
            color = newColor;
          } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
            color = colorMapByIndex[valuenum];
          } else if (values[valuenum] < 0) {
            color = options.get("negBarColor");
          } else if (values[valuenum] > 0) {
            color = options.get("posBarColor");
          } else {
            color = options.get("zeroBarColor");
          }
          return color;
        },
        renderRegion: function (valuenum, highlight) {
          var values = this.values,
            options = this.options,
            target = this.target,
            canvasHeight,
            height,
            halfHeight,
            x,
            y,
            color;
          canvasHeight = target.pixelHeight;
          halfHeight = Math.round(canvasHeight / 2);
          x = valuenum * this.totalBarWidth;
          if (values[valuenum] < 0) {
            y = halfHeight;
            height = halfHeight - 1;
          } else if (values[valuenum] > 0) {
            y = 0;
            height = halfHeight - 1;
          } else {
            y = halfHeight - 1;
            height = 2;
          }
          color = this.calcColor(values[valuenum], valuenum);
          if (color === null) {
            return;
          }
          if (highlight) {
            color = this.calcHighlightColor(color, options);
          }
          return target.drawRect(
            x,
            y,
            this.barWidth - 1,
            height - 1,
            color,
            color
          );
        },
      }
    );
    $.fn.sparkline.discrete = discrete = createClass(
      $.fn.sparkline._base,
      barHighlightMixin,
      {
        type: "discrete",
        init: function (el, values, options, width, height) {
          discrete._super.init.call(this, el, values, options, width, height);
          this.regionShapes = {};
          this.values = values = $.map(values, Number);
          this.min = Math.min.apply(Math, values);
          this.max = Math.max.apply(Math, values);
          this.range = this.max - this.min;
          this.width = width =
            options.get("width") === "auto" ? values.length * 2 : this.width;
          this.interval = Math.floor(width / values.length);
          this.itemWidth = width / values.length;
          if (
            options.get("chartRangeMin") !== undefined &&
            (options.get("chartRangeClip") ||
              options.get("chartRangeMin") < this.min)
          ) {
            this.min = options.get("chartRangeMin");
          }
          if (
            options.get("chartRangeMax") !== undefined &&
            (options.get("chartRangeClip") ||
              options.get("chartRangeMax") > this.max)
          ) {
            this.max = options.get("chartRangeMax");
          }
          this.initTarget();
          if (this.target) {
            this.lineHeight =
              options.get("lineHeight") === "auto"
                ? Math.round(this.canvasHeight * 0.3)
                : options.get("lineHeight");
          }
        },
        getRegion: function (el, x, y) {
          return Math.floor(x / this.itemWidth);
        },
        getCurrentRegionFields: function () {
          var currentRegion = this.currentRegion;
          return {
            isNull: this.values[currentRegion] === undefined,
            value: this.values[currentRegion],
            offset: currentRegion,
          };
        },
        renderRegion: function (valuenum, highlight) {
          var values = this.values,
            options = this.options,
            min = this.min,
            max = this.max,
            range = this.range,
            interval = this.interval,
            target = this.target,
            canvasHeight = this.canvasHeight,
            lineHeight = this.lineHeight,
            pheight = canvasHeight - lineHeight,
            ytop,
            val,
            color,
            x;
          val = clipval(values[valuenum], min, max);
          x = valuenum * interval;
          ytop = Math.round(pheight - pheight * ((val - min) / range));
          color =
            options.get("thresholdColor") && val < options.get("thresholdValue")
              ? options.get("thresholdColor")
              : options.get("lineColor");
          if (highlight) {
            color = this.calcHighlightColor(color, options);
          }
          return target.drawLine(x, ytop, x, ytop + lineHeight, color);
        },
      }
    );
    $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
      type: "bullet",
      init: function (el, values, options, width, height) {
        var min, max, vals;
        bullet._super.init.call(this, el, values, options, width, height);
        this.values = values = normalizeValues(values);
        vals = values.slice();
        vals[0] = vals[0] === null ? vals[2] : vals[0];
        vals[1] = values[1] === null ? vals[2] : vals[1];
        min = Math.min.apply(Math, values);
        max = Math.max.apply(Math, values);
        if (options.get("base") === undefined) {
          min = min < 0 ? min : 0;
        } else {
          min = options.get("base");
        }
        this.min = min;
        this.max = max;
        this.range = max - min;
        this.shapes = {};
        this.valueShapes = {};
        this.regiondata = {};
        this.width = width = options.get("width") === "auto" ? "4.0em" : width;
        this.target = this.$el.simpledraw(
          width,
          height,
          options.get("composite")
        );
        if (!values.length) {
          this.disabled = true;
        }
        this.initTarget();
      },
      getRegion: function (el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined
          ? this.shapes[shapeid]
          : undefined;
      },
      getCurrentRegionFields: function () {
        var currentRegion = this.currentRegion;
        return {
          fieldkey: currentRegion.substr(0, 1),
          value: this.values[currentRegion.substr(1)],
          region: currentRegion,
        };
      },
      changeHighlight: function (highlight) {
        var currentRegion = this.currentRegion,
          shapeid = this.valueShapes[currentRegion],
          shape;
        delete this.shapes[shapeid];
        switch (currentRegion.substr(0, 1)) {
          case "r":
            shape = this.renderRange(currentRegion.substr(1), highlight);
            break;
          case "p":
            shape = this.renderPerformance(highlight);
            break;
          case "t":
            shape = this.renderTarget(highlight);
            break;
        }
        this.valueShapes[currentRegion] = shape.id;
        this.shapes[shape.id] = currentRegion;
        this.target.replaceWithShape(shapeid, shape);
      },
      renderRange: function (rn, highlight) {
        var rangeval = this.values[rn],
          rangewidth = Math.round(
            this.canvasWidth * ((rangeval - this.min) / this.range)
          ),
          color = this.options.get("rangeColors")[rn - 2];
        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }
        return this.target.drawRect(
          0,
          0,
          rangewidth - 1,
          this.canvasHeight - 1,
          color,
          color
        );
      },
      renderPerformance: function (highlight) {
        var perfval = this.values[1],
          perfwidth = Math.round(
            this.canvasWidth * ((perfval - this.min) / this.range)
          ),
          color = this.options.get("performanceColor");
        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }
        return this.target.drawRect(
          0,
          Math.round(this.canvasHeight * 0.3),
          perfwidth - 1,
          Math.round(this.canvasHeight * 0.4) - 1,
          color,
          color
        );
      },
      renderTarget: function (highlight) {
        var targetval = this.values[0],
          x = Math.round(
            this.canvasWidth * ((targetval - this.min) / this.range) -
              this.options.get("targetWidth") / 2
          ),
          targettop = Math.round(this.canvasHeight * 0.1),
          targetheight = this.canvasHeight - targettop * 2,
          color = this.options.get("targetColor");
        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }
        return this.target.drawRect(
          x,
          targettop,
          this.options.get("targetWidth") - 1,
          targetheight - 1,
          color,
          color
        );
      },
      render: function () {
        var vlen = this.values.length,
          target = this.target,
          i,
          shape;
        if (!bullet._super.render.call(this)) {
          return;
        }
        for (i = 2; i < vlen; i++) {
          shape = this.renderRange(i).append();
          this.shapes[shape.id] = "r" + i;
          this.valueShapes["r" + i] = shape.id;
        }
        if (this.values[1] !== null) {
          shape = this.renderPerformance().append();
          this.shapes[shape.id] = "p1";
          this.valueShapes.p1 = shape.id;
        }
        if (this.values[0] !== null) {
          shape = this.renderTarget().append();
          this.shapes[shape.id] = "t0";
          this.valueShapes.t0 = shape.id;
        }
        target.render();
      },
    });
    $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
      type: "pie",
      init: function (el, values, options, width, height) {
        var total = 0,
          i;
        pie._super.init.call(this, el, values, options, width, height);
        this.shapes = {};
        this.valueShapes = {};
        this.values = values = $.map(values, Number);
        if (options.get("width") === "auto") {
          this.width = this.height;
        }
        if (values.length > 0) {
          for (i = values.length; i--; ) {
            total += values[i];
          }
        }
        this.total = total;
        this.initTarget();
        this.radius = Math.floor(
          Math.min(this.canvasWidth, this.canvasHeight) / 2
        );
      },
      getRegion: function (el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined
          ? this.shapes[shapeid]
          : undefined;
      },
      getCurrentRegionFields: function () {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          percent: (this.values[currentRegion] / this.total) * 100,
          color:
            this.options.get("sliceColors")[
              currentRegion % this.options.get("sliceColors").length
            ],
          offset: currentRegion,
        };
      },
      changeHighlight: function (highlight) {
        var currentRegion = this.currentRegion,
          newslice = this.renderSlice(currentRegion, highlight),
          shapeid = this.valueShapes[currentRegion];
        delete this.shapes[shapeid];
        this.target.replaceWithShape(shapeid, newslice);
        this.valueShapes[currentRegion] = newslice.id;
        this.shapes[newslice.id] = currentRegion;
      },
      renderSlice: function (valuenum, highlight) {
        var target = this.target,
          options = this.options,
          radius = this.radius,
          borderWidth = options.get("borderWidth"),
          offset = options.get("offset"),
          circle = 2 * Math.PI,
          values = this.values,
          total = this.total,
          next = offset ? 2 * Math.PI * (offset / 360) : 0,
          start,
          end,
          i,
          vlen,
          color;
        vlen = values.length;
        for (i = 0; i < vlen; i++) {
          start = next;
          end = next;
          if (total > 0) {
            end = next + circle * (values[i] / total);
          }
          if (valuenum === i) {
            color =
              options.get("sliceColors")[i % options.get("sliceColors").length];
            if (highlight) {
              color = this.calcHighlightColor(color, options);
            }
            return target.drawPieSlice(
              radius,
              radius,
              radius - borderWidth,
              start,
              end,
              undefined,
              color
            );
          }
          next = end;
        }
      },
      render: function () {
        var target = this.target,
          values = this.values,
          options = this.options,
          radius = this.radius,
          borderWidth = options.get("borderWidth"),
          shape,
          i;
        if (!pie._super.render.call(this)) {
          return;
        }
        if (borderWidth) {
          target
            .drawCircle(
              radius,
              radius,
              Math.floor(radius - borderWidth / 2),
              options.get("borderColor"),
              undefined,
              borderWidth
            )
            .append();
        }
        for (i = values.length; i--; ) {
          if (values[i]) {
            shape = this.renderSlice(i).append();
            this.valueShapes[i] = shape.id;
            this.shapes[shape.id] = i;
          }
        }
        target.render();
      },
    });
    $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
      type: "box",
      init: function (el, values, options, width, height) {
        box._super.init.call(this, el, values, options, width, height);
        this.values = $.map(values, Number);
        this.width = options.get("width") === "auto" ? "4.0em" : width;
        this.initTarget();
        if (!this.values.length) {
          this.disabled = 1;
        }
      },
      getRegion: function () {
        return 1;
      },
      getCurrentRegionFields: function () {
        var result = [
          { field: "lq", value: this.quartiles[0] },
          { field: "med", value: this.quartiles[1] },
          { field: "uq", value: this.quartiles[2] },
        ];
        if (this.loutlier !== undefined) {
          result.push({ field: "lo", value: this.loutlier });
        }
        if (this.routlier !== undefined) {
          result.push({ field: "ro", value: this.routlier });
        }
        if (this.lwhisker !== undefined) {
          result.push({ field: "lw", value: this.lwhisker });
        }
        if (this.rwhisker !== undefined) {
          result.push({ field: "rw", value: this.rwhisker });
        }
        return result;
      },
      render: function () {
        var target = this.target,
          values = this.values,
          vlen = values.length,
          options = this.options,
          canvasWidth = this.canvasWidth,
          canvasHeight = this.canvasHeight,
          minValue =
            options.get("chartRangeMin") === undefined
              ? Math.min.apply(Math, values)
              : options.get("chartRangeMin"),
          maxValue =
            options.get("chartRangeMax") === undefined
              ? Math.max.apply(Math, values)
              : options.get("chartRangeMax"),
          canvasLeft = 0,
          lwhisker,
          loutlier,
          iqr,
          q1,
          q2,
          q3,
          rwhisker,
          routlier,
          i,
          size,
          unitSize;
        if (!box._super.render.call(this)) {
          return;
        }
        if (options.get("raw")) {
          if (options.get("showOutliers") && values.length > 5) {
            loutlier = values[0];
            lwhisker = values[1];
            q1 = values[2];
            q2 = values[3];
            q3 = values[4];
            rwhisker = values[5];
            routlier = values[6];
          } else {
            lwhisker = values[0];
            q1 = values[1];
            q2 = values[2];
            q3 = values[3];
            rwhisker = values[4];
          }
        } else {
          values.sort(function (a, b) {
            return a - b;
          });
          q1 = quartile(values, 1);
          q2 = quartile(values, 2);
          q3 = quartile(values, 3);
          iqr = q3 - q1;
          if (options.get("showOutliers")) {
            lwhisker = rwhisker = undefined;
            for (i = 0; i < vlen; i++) {
              if (
                lwhisker === undefined &&
                values[i] > q1 - iqr * options.get("outlierIQR")
              ) {
                lwhisker = values[i];
              }
              if (values[i] < q3 + iqr * options.get("outlierIQR")) {
                rwhisker = values[i];
              }
            }
            loutlier = values[0];
            routlier = values[vlen - 1];
          } else {
            lwhisker = values[0];
            rwhisker = values[vlen - 1];
          }
        }
        this.quartiles = [q1, q2, q3];
        this.lwhisker = lwhisker;
        this.rwhisker = rwhisker;
        this.loutlier = loutlier;
        this.routlier = routlier;
        unitSize = canvasWidth / (maxValue - minValue + 1);
        if (options.get("showOutliers")) {
          canvasLeft = Math.ceil(options.get("spotRadius"));
          canvasWidth -= 2 * Math.ceil(options.get("spotRadius"));
          unitSize = canvasWidth / (maxValue - minValue + 1);
          if (loutlier < lwhisker) {
            target
              .drawCircle(
                (loutlier - minValue) * unitSize + canvasLeft,
                canvasHeight / 2,
                options.get("spotRadius"),
                options.get("outlierLineColor"),
                options.get("outlierFillColor")
              )
              .append();
          }
          if (routlier > rwhisker) {
            target
              .drawCircle(
                (routlier - minValue) * unitSize + canvasLeft,
                canvasHeight / 2,
                options.get("spotRadius"),
                options.get("outlierLineColor"),
                options.get("outlierFillColor")
              )
              .append();
          }
        }
        target
          .drawRect(
            Math.round((q1 - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight * 0.1),
            Math.round((q3 - q1) * unitSize),
            Math.round(canvasHeight * 0.8),
            options.get("boxLineColor"),
            options.get("boxFillColor")
          )
          .append();
        target
          .drawLine(
            Math.round((lwhisker - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight / 2),
            Math.round((q1 - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight / 2),
            options.get("lineColor")
          )
          .append();
        target
          .drawLine(
            Math.round((lwhisker - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight / 4),
            Math.round((lwhisker - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight - canvasHeight / 4),
            options.get("whiskerColor")
          )
          .append();
        target
          .drawLine(
            Math.round((rwhisker - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight / 2),
            Math.round((q3 - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight / 2),
            options.get("lineColor")
          )
          .append();
        target
          .drawLine(
            Math.round((rwhisker - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight / 4),
            Math.round((rwhisker - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight - canvasHeight / 4),
            options.get("whiskerColor")
          )
          .append();
        target
          .drawLine(
            Math.round((q2 - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight * 0.1),
            Math.round((q2 - minValue) * unitSize + canvasLeft),
            Math.round(canvasHeight * 0.9),
            options.get("medianColor")
          )
          .append();
        if (options.get("target")) {
          size = Math.ceil(options.get("spotRadius"));
          target
            .drawLine(
              Math.round(
                (options.get("target") - minValue) * unitSize + canvasLeft
              ),
              Math.round(canvasHeight / 2 - size),
              Math.round(
                (options.get("target") - minValue) * unitSize + canvasLeft
              ),
              Math.round(canvasHeight / 2 + size),
              options.get("targetColor")
            )
            .append();
          target
            .drawLine(
              Math.round(
                (options.get("target") - minValue) * unitSize +
                  canvasLeft -
                  size
              ),
              Math.round(canvasHeight / 2),
              Math.round(
                (options.get("target") - minValue) * unitSize +
                  canvasLeft +
                  size
              ),
              Math.round(canvasHeight / 2),
              options.get("targetColor")
            )
            .append();
        }
        target.render();
      },
    });
    VShape = createClass({
      init: function (target, id, type, args) {
        this.target = target;
        this.id = id;
        this.type = type;
        this.args = args;
      },
      append: function () {
        this.target.appendShape(this);
        return this;
      },
    });
    VCanvas_base = createClass({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function (width, height, target) {
        if (!width) {
          return;
        }
        this.width = width;
        this.height = height;
        this.target = target;
        this.lastShapeId = null;
        if (target[0]) {
          target = target[0];
        }
        $.data(target, "_jqs_vcanvas", this);
      },
      drawLine: function (x1, y1, x2, y2, lineColor, lineWidth) {
        return this.drawShape(
          [
            [x1, y1],
            [x2, y2],
          ],
          lineColor,
          lineWidth
        );
      },
      drawShape: function (path, lineColor, fillColor, lineWidth) {
        return this._genShape("Shape", [path, lineColor, fillColor, lineWidth]);
      },
      drawCircle: function (x, y, radius, lineColor, fillColor, lineWidth) {
        return this._genShape("Circle", [
          x,
          y,
          radius,
          lineColor,
          fillColor,
          lineWidth,
        ]);
      },
      drawPieSlice: function (
        x,
        y,
        radius,
        startAngle,
        endAngle,
        lineColor,
        fillColor
      ) {
        return this._genShape("PieSlice", [
          x,
          y,
          radius,
          startAngle,
          endAngle,
          lineColor,
          fillColor,
        ]);
      },
      drawRect: function (x, y, width, height, lineColor, fillColor) {
        return this._genShape("Rect", [
          x,
          y,
          width,
          height,
          lineColor,
          fillColor,
        ]);
      },
      getElement: function () {
        return this.canvas;
      },
      getLastShapeId: function () {
        return this.lastShapeId;
      },
      reset: function () {
        alert("reset not implemented");
      },
      _insert: function (el, target) {
        $(target).html(el);
      },
      _calculatePixelDims: function (width, height, canvas) {
        var match;
        match = this._pxregex.exec(height);
        if (match) {
          this.pixelHeight = match[1];
        } else {
          this.pixelHeight = $(canvas).height();
        }
        match = this._pxregex.exec(width);
        if (match) {
          this.pixelWidth = match[1];
        } else {
          this.pixelWidth = $(canvas).width();
        }
      },
      _genShape: function (shapetype, shapeargs) {
        var id = shapeCount++;
        shapeargs.unshift(id);
        return new VShape(this, id, shapetype, shapeargs);
      },
      appendShape: function (shape) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function (shapeid, shape) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function (shapeid, shape) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function (shapeid) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function (el, x, y) {
        alert("getShapeAt not implemented");
      },
      render: function () {
        alert("render not implemented");
      },
    });
    VCanvas_canvas = createClass(VCanvas_base, {
      init: function (width, height, target, interact) {
        VCanvas_canvas._super.init.call(this, width, height, target);
        this.canvas = document.createElement("canvas");
        if (target[0]) {
          target = target[0];
        }
        $.data(target, "_jqs_vcanvas", this);
        $(this.canvas).css({
          display: "inline-block",
          width: width,
          height: height,
          verticalAlign: "top",
        });
        this._insert(this.canvas, target);
        this._calculatePixelDims(width, height, this.canvas);
        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        this.interact = interact;
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
        $(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight,
        });
      },
      _getContext: function (lineColor, fillColor, lineWidth) {
        var context = this.canvas.getContext("2d");
        if (lineColor !== undefined) {
          context.strokeStyle = lineColor;
        }
        context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
        if (fillColor !== undefined) {
          context.fillStyle = fillColor;
        }
        return context;
      },
      reset: function () {
        var context = this._getContext();
        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
      },
      _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth),
          i,
          plen;
        context.beginPath();
        context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);
        for (i = 1, plen = path.length; i < plen; i++) {
          context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5);
        }
        if (lineColor !== undefined) {
          context.stroke();
        }
        if (fillColor !== undefined) {
          context.fill();
        }
        if (
          this.targetX !== undefined &&
          this.targetY !== undefined &&
          context.isPointInPath(this.targetX, this.targetY)
        ) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawCircle: function (
        shapeid,
        x,
        y,
        radius,
        lineColor,
        fillColor,
        lineWidth
      ) {
        var context = this._getContext(lineColor, fillColor, lineWidth);
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        if (
          this.targetX !== undefined &&
          this.targetY !== undefined &&
          context.isPointInPath(this.targetX, this.targetY)
        ) {
          this.currentTargetShapeId = shapeid;
        }
        if (lineColor !== undefined) {
          context.stroke();
        }
        if (fillColor !== undefined) {
          context.fill();
        }
      },
      _drawPieSlice: function (
        shapeid,
        x,
        y,
        radius,
        startAngle,
        endAngle,
        lineColor,
        fillColor
      ) {
        var context = this._getContext(lineColor, fillColor);
        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, startAngle, endAngle, false);
        context.lineTo(x, y);
        context.closePath();
        if (lineColor !== undefined) {
          context.stroke();
        }
        if (fillColor) {
          context.fill();
        }
        if (
          this.targetX !== undefined &&
          this.targetY !== undefined &&
          context.isPointInPath(this.targetX, this.targetY)
        ) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(
          shapeid,
          [
            [x, y],
            [x + width, y],
            [x + width, y + height],
            [x, y + height],
            [x, y],
          ],
          lineColor,
          fillColor
        );
      },
      appendShape: function (shape) {
        this.shapes[shape.id] = shape;
        this.shapeseq.push(shape.id);
        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function (shapeid, shape) {
        var shapeseq = this.shapeseq,
          i;
        this.shapes[shape.id] = shape;
        for (i = shapeseq.length; i--; ) {
          if (shapeseq[i] == shapeid) {
            shapeseq[i] = shape.id;
          }
        }
        delete this.shapes[shapeid];
      },
      replaceWithShapes: function (shapeids, shapes) {
        var shapeseq = this.shapeseq,
          shapemap = {},
          sid,
          i,
          first;
        for (i = shapeids.length; i--; ) {
          shapemap[shapeids[i]] = true;
        }
        for (i = shapeseq.length; i--; ) {
          sid = shapeseq[i];
          if (shapemap[sid]) {
            shapeseq.splice(i, 1);
            delete this.shapes[sid];
            first = i;
          }
        }
        for (i = shapes.length; i--; ) {
          shapeseq.splice(first, 0, shapes[i].id);
          this.shapes[shapes[i].id] = shapes[i];
        }
      },
      insertAfterShape: function (shapeid, shape) {
        var shapeseq = this.shapeseq,
          i;
        for (i = shapeseq.length; i--; ) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i + 1, 0, shape.id);
            this.shapes[shape.id] = shape;
            return;
          }
        }
      },
      removeShapeId: function (shapeid) {
        var shapeseq = this.shapeseq,
          i;
        for (i = shapeseq.length; i--; ) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i, 1);
            break;
          }
        }
        delete this.shapes[shapeid];
      },
      getShapeAt: function (el, x, y) {
        this.targetX = x;
        this.targetY = y;
        this.render();
        return this.currentTargetShapeId;
      },
      render: function () {
        var shapeseq = this.shapeseq,
          shapes = this.shapes,
          shapeCount = shapeseq.length,
          context = this._getContext(),
          shapeid,
          shape,
          i;
        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        for (i = 0; i < shapeCount; i++) {
          shapeid = shapeseq[i];
          shape = shapes[shapeid];
          this["_draw" + shape.type].apply(this, shape.args);
        }
        if (!this.interact) {
          this.shapes = {};
          this.shapeseq = [];
        }
      },
    });
    VCanvas_vml = createClass(VCanvas_base, {
      init: function (width, height, target) {
        var groupel;
        VCanvas_vml._super.init.call(this, width, height, target);
        if (target[0]) {
          target = target[0];
        }
        $.data(target, "_jqs_vcanvas", this);
        this.canvas = document.createElement("span");
        $(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: width,
          height: height,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top",
        });
        this._insert(this.canvas, target);
        this._calculatePixelDims(width, height, this.canvas);
        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        groupel =
          '<v:group coordorigin="0 0" coordsize="' +
          this.pixelWidth +
          " " +
          this.pixelHeight +
          '"' +
          ' style="position:absolute;top:0;left:0;width:' +
          this.pixelWidth +
          "px;height=" +
          this.pixelHeight +
          'px;"></v:group>';
        this.canvas.insertAdjacentHTML("beforeEnd", groupel);
        this.group = $(this.canvas).children()[0];
        this.rendered = false;
        this.prerender = "";
      },
      _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
        var vpath = [],
          initial,
          stroke,
          fill,
          closed,
          vel,
          plen,
          i;
        for (i = 0, plen = path.length; i < plen; i++) {
          vpath[i] = "" + path[i][0] + "," + path[i][1];
        }
        initial = vpath.splice(0, 1);
        lineWidth = lineWidth === undefined ? 1 : lineWidth;
        stroke =
          lineColor === undefined
            ? ' stroked="false" '
            : ' strokeWeight="' +
              lineWidth +
              'px" strokeColor="' +
              lineColor +
              '" ';
        fill =
          fillColor === undefined
            ? ' filled="false"'
            : ' fillColor="' + fillColor + '" filled="true" ';
        closed = vpath[0] === vpath[vpath.length - 1] ? "x " : "";
        vel =
          '<v:shape coordorigin="0 0" coordsize="' +
          this.pixelWidth +
          " " +
          this.pixelHeight +
          '" ' +
          ' id="jqsshape' +
          shapeid +
          '" ' +
          stroke +
          fill +
          ' style="position:absolute;left:0px;top:0px;height:' +
          this.pixelHeight +
          "px;width:" +
          this.pixelWidth +
          'px;padding:0px;margin:0px;" ' +
          ' path="m ' +
          initial +
          " l " +
          vpath.join(", ") +
          " " +
          closed +
          'e">' +
          " </v:shape>";
        return vel;
      },
      _drawCircle: function (
        shapeid,
        x,
        y,
        radius,
        lineColor,
        fillColor,
        lineWidth
      ) {
        var stroke, fill, vel;
        x -= radius;
        y -= radius;
        stroke =
          lineColor === undefined
            ? ' stroked="false" '
            : ' strokeWeight="' +
              lineWidth +
              'px" strokeColor="' +
              lineColor +
              '" ';
        fill =
          fillColor === undefined
            ? ' filled="false"'
            : ' fillColor="' + fillColor + '" filled="true" ';
        vel =
          "<v:oval " +
          ' id="jqsshape' +
          shapeid +
          '" ' +
          stroke +
          fill +
          ' style="position:absolute;top:' +
          y +
          "px; left:" +
          x +
          "px; width:" +
          radius * 2 +
          "px; height:" +
          radius * 2 +
          'px"></v:oval>';
        return vel;
      },
      _drawPieSlice: function (
        shapeid,
        x,
        y,
        radius,
        startAngle,
        endAngle,
        lineColor,
        fillColor
      ) {
        var vpath, startx, starty, endx, endy, stroke, fill, vel;
        if (startAngle === endAngle) {
          return "";
        }
        if (endAngle - startAngle === 2 * Math.PI) {
          startAngle = 0;
          endAngle = 2 * Math.PI;
        }
        startx = x + Math.round(Math.cos(startAngle) * radius);
        starty = y + Math.round(Math.sin(startAngle) * radius);
        endx = x + Math.round(Math.cos(endAngle) * radius);
        endy = y + Math.round(Math.sin(endAngle) * radius);
        if (startx === endx && starty === endy) {
          if (endAngle - startAngle < Math.PI) {
            return "";
          }
          startx = endx = x + radius;
          starty = endy = y;
        }
        if (
          startx === endx &&
          starty === endy &&
          endAngle - startAngle < Math.PI
        ) {
          return "";
        }
        vpath = [
          x - radius,
          y - radius,
          x + radius,
          y + radius,
          startx,
          starty,
          endx,
          endy,
        ];
        stroke =
          lineColor === undefined
            ? ' stroked="false" '
            : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
        fill =
          fillColor === undefined
            ? ' filled="false"'
            : ' fillColor="' + fillColor + '" filled="true" ';
        vel =
          '<v:shape coordorigin="0 0" coordsize="' +
          this.pixelWidth +
          " " +
          this.pixelHeight +
          '" ' +
          ' id="jqsshape' +
          shapeid +
          '" ' +
          stroke +
          fill +
          ' style="position:absolute;left:0px;top:0px;height:' +
          this.pixelHeight +
          "px;width:" +
          this.pixelWidth +
          'px;padding:0px;margin:0px;" ' +
          ' path="m ' +
          x +
          "," +
          y +
          " wa " +
          vpath.join(", ") +
          ' x e">' +
          " </v:shape>";
        return vel;
      },
      _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(
          shapeid,
          [
            [x, y],
            [x, y + height],
            [x + width, y + height],
            [x + width, y],
            [x, y],
          ],
          lineColor,
          fillColor
        );
      },
      reset: function () {
        this.group.innerHTML = "";
      },
      appendShape: function (shape) {
        var vel = this["_draw" + shape.type].apply(this, shape.args);
        if (this.rendered) {
          this.group.insertAdjacentHTML("beforeEnd", vel);
        } else {
          this.prerender += vel;
        }
        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function (shapeid, shape) {
        var existing = $("#jqsshape" + shapeid),
          vel = this["_draw" + shape.type].apply(this, shape.args);
        existing[0].outerHTML = vel;
      },
      replaceWithShapes: function (shapeids, shapes) {
        var existing = $("#jqsshape" + shapeids[0]),
          replace = "",
          slen = shapes.length,
          i;
        for (i = 0; i < slen; i++) {
          replace += this["_draw" + shapes[i].type].apply(this, shapes[i].args);
        }
        existing[0].outerHTML = replace;
        for (i = 1; i < shapeids.length; i++) {
          $("#jqsshape" + shapeids[i]).remove();
        }
      },
      insertAfterShape: function (shapeid, shape) {
        var existing = $("#jqsshape" + shapeid),
          vel = this["_draw" + shape.type].apply(this, shape.args);
        existing[0].insertAdjacentHTML("afterEnd", vel);
      },
      removeShapeId: function (shapeid) {
        var existing = $("#jqsshape" + shapeid);
        this.group.removeChild(existing[0]);
      },
      getShapeAt: function (el, x, y) {
        var shapeid = el.id.substr(8);
        return shapeid;
      },
      render: function () {
        if (!this.rendered) {
          this.group.innerHTML = this.prerender;
          this.rendered = true;
        }
      },
    });
  });
})(document, Math);

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.PerfectScrollbar = e());
})(this, function () {
  "use strict";
  function t(t) {
    return getComputedStyle(t);
  }
  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), (t.style[i] = r);
    }
    return t;
  }
  function i(t) {
    var e = document.createElement("div");
    return (e.className = t), e;
  }
  function r(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e);
  }
  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }
  function n(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return r(t, e);
    });
  }
  function o(t, e) {
    var i = t.element.classList,
      r = m.state.scrolling(e);
    i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
  }
  function s(t, e) {
    Y[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }
  function a(t, e) {
    o(t, e), s(t, e);
  }
  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }
  function h(t, e, i, r, l) {
    var n = i[0],
      o = i[1],
      s = i[2],
      h = i[3],
      u = i[4],
      d = i[5];
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var f = t.element;
    (t.reach[h] = null),
      f[s] < 1 && (t.reach[h] = "start"),
      f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"),
      e &&
        (f.dispatchEvent(c("ps-scroll-" + h)),
        e < 0
          ? f.dispatchEvent(c("ps-scroll-" + u))
          : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)),
        r && a(t, h)),
      t.reach[h] &&
        (e || l) &&
        f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
  }
  function u(t) {
    return parseInt(t, 10) || 0;
  }
  function d(t) {
    return (
      r(t, "input,[contenteditable]") ||
      r(t, "select,[contenteditable]") ||
      r(t, "textarea,[contenteditable]") ||
      r(t, "button,[contenteditable]")
    );
  }
  function f(e) {
    var i = t(e);
    return (
      u(i.width) +
      u(i.paddingLeft) +
      u(i.paddingRight) +
      u(i.borderLeftWidth) +
      u(i.borderRightWidth)
    );
  }
  function p(t, e) {
    return (
      t.settings.minScrollbarLength &&
        (e = Math.max(e, t.settings.minScrollbarLength)),
      t.settings.maxScrollbarLength &&
        (e = Math.min(e, t.settings.maxScrollbarLength)),
      e
    );
  }
  function b(t, i) {
    var r = { width: i.railXWidth },
      l = Math.floor(t.scrollTop);
    i.isRtl
      ? (r.left =
          i.negativeScrollAdjustment +
          t.scrollLeft +
          i.containerWidth -
          i.contentWidth)
      : (r.left = t.scrollLeft),
      i.isScrollbarXUsingBottom
        ? (r.bottom = i.scrollbarXBottom - l)
        : (r.top = i.scrollbarXTop + l),
      e(i.scrollbarXRail, r);
    var n = { top: l, height: i.railYHeight };
    i.isScrollbarYUsingRight
      ? i.isRtl
        ? (n.right =
            i.contentWidth -
            (i.negativeScrollAdjustment + t.scrollLeft) -
            i.scrollbarYRight -
            i.scrollbarYOuterWidth)
        : (n.right = i.scrollbarYRight - t.scrollLeft)
      : i.isRtl
      ? (n.left =
          i.negativeScrollAdjustment +
          t.scrollLeft +
          2 * i.containerWidth -
          i.contentWidth -
          i.scrollbarYLeft -
          i.scrollbarYOuterWidth)
      : (n.left = i.scrollbarYLeft + t.scrollLeft),
      e(i.scrollbarYRail, n),
      e(i.scrollbarX, {
        left: i.scrollbarXLeft,
        width: i.scrollbarXWidth - i.railBorderXWidth,
      }),
      e(i.scrollbarY, {
        top: i.scrollbarYTop,
        height: i.scrollbarYHeight - i.railBorderYWidth,
      });
  }
  function g(t, e) {
    function i(e) {
      (b[d] = g + Y * (e[a] - v)),
        o(t, f),
        R(t),
        e.stopPropagation(),
        e.preventDefault();
    }
    function r() {
      s(t, f),
        t[p].classList.remove(m.state.clicking),
        t.event.unbind(t.ownerDocument, "mousemove", i);
    }
    var l = e[0],
      n = e[1],
      a = e[2],
      c = e[3],
      h = e[4],
      u = e[5],
      d = e[6],
      f = e[7],
      p = e[8],
      b = t.element,
      g = null,
      v = null,
      Y = null;
    t.event.bind(t[h], "mousedown", function (e) {
      (g = b[d]),
        (v = e[a]),
        (Y = (t[n] - t[l]) / (t[c] - t[u])),
        t.event.bind(t.ownerDocument, "mousemove", i),
        t.event.once(t.ownerDocument, "mouseup", r),
        t[p].classList.add(m.state.clicking),
        e.stopPropagation(),
        e.preventDefault();
    });
  }
  var v =
      "undefined" != typeof Element &&
      (Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector),
    m = {
      main: "ps",
      element: {
        thumb: function (t) {
          return "ps__thumb-" + t;
        },
        rail: function (t) {
          return "ps__rail-" + t;
        },
        consuming: "ps__child--consume",
      },
      state: {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function (t) {
          return "ps--active-" + t;
        },
        scrolling: function (t) {
          return "ps--scrolling-" + t;
        },
      },
    },
    Y = { x: null, y: null },
    X = function (t) {
      (this.element = t), (this.handlers = {});
    },
    w = { isEmpty: { configurable: !0 } };
  (X.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []),
      this.handlers[t].push(e),
      this.element.addEventListener(t, e, !1);
  }),
    (X.prototype.unbind = function (t, e) {
      var i = this;
      this.handlers[t] = this.handlers[t].filter(function (r) {
        return (
          !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1)
        );
      });
    }),
    (X.prototype.unbindAll = function () {
      var t = this;
      for (var e in t.handlers) t.unbind(e);
    }),
    (w.isEmpty.get = function () {
      var t = this;
      return Object.keys(this.handlers).every(function (e) {
        return 0 === t.handlers[e].length;
      });
    }),
    Object.defineProperties(X.prototype, w);
  var y = function () {
    this.eventElements = [];
  };
  (y.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || ((e = new X(t)), this.eventElements.push(e)), e;
  }),
    (y.prototype.bind = function (t, e, i) {
      this.eventElement(t).bind(e, i);
    }),
    (y.prototype.unbind = function (t, e, i) {
      var r = this.eventElement(t);
      r.unbind(e, i),
        r.isEmpty &&
          this.eventElements.splice(this.eventElements.indexOf(r), 1);
    }),
    (y.prototype.unbindAll = function () {
      this.eventElements.forEach(function (t) {
        return t.unbindAll();
      }),
        (this.eventElements = []);
    }),
    (y.prototype.once = function (t, e, i) {
      var r = this.eventElement(t),
        l = function (t) {
          r.unbind(e, l), i(t);
        };
      r.bind(e, l);
    });
  var W = function (t, e, i, r, l) {
      void 0 === r && (r = !0), void 0 === l && (l = !1);
      var n;
      if ("top" === e)
        n = [
          "contentHeight",
          "containerHeight",
          "scrollTop",
          "y",
          "up",
          "down",
        ];
      else {
        if ("left" !== e) throw new Error("A proper axis should be provided");
        n = [
          "contentWidth",
          "containerWidth",
          "scrollLeft",
          "x",
          "left",
          "right",
        ];
      }
      h(t, i, n, r, l);
    },
    L = {
      isWebKit:
        "undefined" != typeof document &&
        "WebkitAppearance" in document.documentElement.style,
      supportsTouch:
        "undefined" != typeof window &&
        ("ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
      supportsIePointer:
        "undefined" != typeof navigator && navigator.msMaxTouchPoints,
      isChrome:
        "undefined" != typeof navigator &&
        /Chrome/i.test(navigator && navigator.userAgent),
    },
    R = function (t) {
      var e = t.element,
        i = Math.floor(e.scrollTop);
      (t.containerWidth = e.clientWidth),
        (t.containerHeight = e.clientHeight),
        (t.contentWidth = e.scrollWidth),
        (t.contentHeight = e.scrollHeight),
        e.contains(t.scrollbarXRail) ||
          (n(e, m.element.rail("x")).forEach(function (t) {
            return l(t);
          }),
          e.appendChild(t.scrollbarXRail)),
        e.contains(t.scrollbarYRail) ||
          (n(e, m.element.rail("y")).forEach(function (t) {
            return l(t);
          }),
          e.appendChild(t.scrollbarYRail)),
        !t.settings.suppressScrollX &&
        t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
          ? ((t.scrollbarXActive = !0),
            (t.railXWidth = t.containerWidth - t.railXMarginWidth),
            (t.railXRatio = t.containerWidth / t.railXWidth),
            (t.scrollbarXWidth = p(
              t,
              u((t.railXWidth * t.containerWidth) / t.contentWidth)
            )),
            (t.scrollbarXLeft = u(
              ((t.negativeScrollAdjustment + e.scrollLeft) *
                (t.railXWidth - t.scrollbarXWidth)) /
                (t.contentWidth - t.containerWidth)
            )))
          : (t.scrollbarXActive = !1),
        !t.settings.suppressScrollY &&
        t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
          ? ((t.scrollbarYActive = !0),
            (t.railYHeight = t.containerHeight - t.railYMarginHeight),
            (t.railYRatio = t.containerHeight / t.railYHeight),
            (t.scrollbarYHeight = p(
              t,
              u((t.railYHeight * t.containerHeight) / t.contentHeight)
            )),
            (t.scrollbarYTop = u(
              (i * (t.railYHeight - t.scrollbarYHeight)) /
                (t.contentHeight - t.containerHeight)
            )))
          : (t.scrollbarYActive = !1),
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
          (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
          (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        b(e, t),
        t.scrollbarXActive
          ? e.classList.add(m.state.active("x"))
          : (e.classList.remove(m.state.active("x")),
            (t.scrollbarXWidth = 0),
            (t.scrollbarXLeft = 0),
            (e.scrollLeft = 0)),
        t.scrollbarYActive
          ? e.classList.add(m.state.active("y"))
          : (e.classList.remove(m.state.active("y")),
            (t.scrollbarYHeight = 0),
            (t.scrollbarYTop = 0),
            (e.scrollTop = 0));
    },
    T = {
      "click-rail": function (t) {
        t.event.bind(t.scrollbarY, "mousedown", function (t) {
          return t.stopPropagation();
        }),
          t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
            var i =
              e.pageY -
                window.pageYOffset -
                t.scrollbarYRail.getBoundingClientRect().top >
              t.scrollbarYTop
                ? 1
                : -1;
            (t.element.scrollTop += i * t.containerHeight),
              R(t),
              e.stopPropagation();
          }),
          t.event.bind(t.scrollbarX, "mousedown", function (t) {
            return t.stopPropagation();
          }),
          t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
            var i =
              e.pageX -
                window.pageXOffset -
                t.scrollbarXRail.getBoundingClientRect().left >
              t.scrollbarXLeft
                ? 1
                : -1;
            (t.element.scrollLeft += i * t.containerWidth),
              R(t),
              e.stopPropagation();
          });
      },
      "drag-thumb": function (t) {
        g(t, [
          "containerWidth",
          "contentWidth",
          "pageX",
          "railXWidth",
          "scrollbarX",
          "scrollbarXWidth",
          "scrollLeft",
          "x",
          "scrollbarXRail",
        ]),
          g(t, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
            "scrollbarYRail",
          ]);
      },
      keyboard: function (t) {
        function e(e, r) {
          var l = Math.floor(i.scrollTop);
          if (0 === e) {
            if (!t.scrollbarYActive) return !1;
            if (
              (0 === l && r > 0) ||
              (l >= t.contentHeight - t.containerHeight && r < 0)
            )
              return !t.settings.wheelPropagation;
          }
          var n = i.scrollLeft;
          if (0 === r) {
            if (!t.scrollbarXActive) return !1;
            if (
              (0 === n && e < 0) ||
              (n >= t.contentWidth - t.containerWidth && e > 0)
            )
              return !t.settings.wheelPropagation;
          }
          return !0;
        }
        var i = t.element,
          l = function () {
            return r(i, ":hover");
          },
          n = function () {
            return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
          };
        t.event.bind(t.ownerDocument, "keydown", function (r) {
          if (
            !(
              (r.isDefaultPrevented && r.isDefaultPrevented()) ||
              r.defaultPrevented
            ) &&
            (l() || n())
          ) {
            var o = document.activeElement
              ? document.activeElement
              : t.ownerDocument.activeElement;
            if (o) {
              if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
              else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
              if (d(o)) return;
            }
            var s = 0,
              a = 0;
            switch (r.which) {
              case 37:
                s = r.metaKey
                  ? -t.contentWidth
                  : r.altKey
                  ? -t.containerWidth
                  : -30;
                break;
              case 38:
                a = r.metaKey
                  ? t.contentHeight
                  : r.altKey
                  ? t.containerHeight
                  : 30;
                break;
              case 39:
                s = r.metaKey
                  ? t.contentWidth
                  : r.altKey
                  ? t.containerWidth
                  : 30;
                break;
              case 40:
                a = r.metaKey
                  ? -t.contentHeight
                  : r.altKey
                  ? -t.containerHeight
                  : -30;
                break;
              case 32:
                a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                break;
              case 33:
                a = t.containerHeight;
                break;
              case 34:
                a = -t.containerHeight;
                break;
              case 36:
                a = t.contentHeight;
                break;
              case 35:
                a = -t.contentHeight;
                break;
              default:
                return;
            }
            (t.settings.suppressScrollX && 0 !== s) ||
              (t.settings.suppressScrollY && 0 !== a) ||
              ((i.scrollTop -= a),
              (i.scrollLeft += s),
              R(t),
              e(s, a) && r.preventDefault());
          }
        });
      },
      wheel: function (e) {
        function i(t, i) {
          var r = Math.floor(o.scrollTop),
            l = 0 === o.scrollTop,
            n = r + o.offsetHeight === o.scrollHeight,
            s = 0 === o.scrollLeft,
            a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
          return (
            !(Math.abs(i) > Math.abs(t) ? l || n : s || a) ||
            !e.settings.wheelPropagation
          );
        }
        function r(t) {
          var e = t.deltaX,
            i = -1 * t.deltaY;
          return (
            (void 0 !== e && void 0 !== i) ||
              ((e = (-1 * t.wheelDeltaX) / 6), (i = t.wheelDeltaY / 6)),
            t.deltaMode && 1 === t.deltaMode && ((e *= 10), (i *= 10)),
            e !== e && i !== i && ((e = 0), (i = t.wheelDelta)),
            t.shiftKey ? [-i, -e] : [e, i]
          );
        }
        function l(e, i, r) {
          if (!L.isWebKit && o.querySelector("select:focus")) return !0;
          if (!o.contains(e)) return !1;
          for (var l = e; l && l !== o; ) {
            if (l.classList.contains(m.element.consuming)) return !0;
            var n = t(l);
            if (
              [n.overflow, n.overflowX, n.overflowY]
                .join("")
                .match(/(scroll|auto)/)
            ) {
              var s = l.scrollHeight - l.clientHeight;
              if (
                s > 0 &&
                !((0 === l.scrollTop && r > 0) || (l.scrollTop === s && r < 0))
              )
                return !0;
              var a = l.scrollWidth - l.clientWidth;
              if (
                a > 0 &&
                !(
                  (0 === l.scrollLeft && i < 0) ||
                  (l.scrollLeft === a && i > 0)
                )
              )
                return !0;
            }
            l = l.parentNode;
          }
          return !1;
        }
        function n(t) {
          var n = r(t),
            s = n[0],
            a = n[1];
          if (!l(t.target, s, a)) {
            var c = !1;
            e.settings.useBothWheelAxes
              ? e.scrollbarYActive && !e.scrollbarXActive
                ? (a
                    ? (o.scrollTop -= a * e.settings.wheelSpeed)
                    : (o.scrollTop += s * e.settings.wheelSpeed),
                  (c = !0))
                : e.scrollbarXActive &&
                  !e.scrollbarYActive &&
                  (s
                    ? (o.scrollLeft += s * e.settings.wheelSpeed)
                    : (o.scrollLeft -= a * e.settings.wheelSpeed),
                  (c = !0))
              : ((o.scrollTop -= a * e.settings.wheelSpeed),
                (o.scrollLeft += s * e.settings.wheelSpeed)),
              R(e),
              (c = c || i(s, a)) &&
                !t.ctrlKey &&
                (t.stopPropagation(), t.preventDefault());
          }
        }
        var o = e.element;
        void 0 !== window.onwheel
          ? e.event.bind(o, "wheel", n)
          : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
      },
      touch: function (e) {
        function i(t, i) {
          var r = Math.floor(h.scrollTop),
            l = h.scrollLeft,
            n = Math.abs(t),
            o = Math.abs(i);
          if (o > n) {
            if (
              (i < 0 && r === e.contentHeight - e.containerHeight) ||
              (i > 0 && 0 === r)
            )
              return 0 === window.scrollY && i > 0 && L.isChrome;
          } else if (
            n > o &&
            ((t < 0 && l === e.contentWidth - e.containerWidth) ||
              (t > 0 && 0 === l))
          )
            return !0;
          return !0;
        }
        function r(t, i) {
          (h.scrollTop -= i), (h.scrollLeft -= t), R(e);
        }
        function l(t) {
          return t.targetTouches ? t.targetTouches[0] : t;
        }
        function n(t) {
          return !(
            (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
            ((!t.targetTouches || 1 !== t.targetTouches.length) &&
              (!t.pointerType ||
                "mouse" === t.pointerType ||
                t.pointerType === t.MSPOINTER_TYPE_MOUSE))
          );
        }
        function o(t) {
          if (n(t)) {
            var e = l(t);
            (u.pageX = e.pageX),
              (u.pageY = e.pageY),
              (d = new Date().getTime()),
              null !== p && clearInterval(p);
          }
        }
        function s(e, i, r) {
          if (!h.contains(e)) return !1;
          for (var l = e; l && l !== h; ) {
            if (l.classList.contains(m.element.consuming)) return !0;
            var n = t(l);
            if (
              [n.overflow, n.overflowX, n.overflowY]
                .join("")
                .match(/(scroll|auto)/)
            ) {
              var o = l.scrollHeight - l.clientHeight;
              if (
                o > 0 &&
                !((0 === l.scrollTop && r > 0) || (l.scrollTop === o && r < 0))
              )
                return !0;
              var s = l.scrollLeft - l.clientWidth;
              if (
                s > 0 &&
                !(
                  (0 === l.scrollLeft && i < 0) ||
                  (l.scrollLeft === s && i > 0)
                )
              )
                return !0;
            }
            l = l.parentNode;
          }
          return !1;
        }
        function a(t) {
          if (n(t)) {
            var e = l(t),
              o = { pageX: e.pageX, pageY: e.pageY },
              a = o.pageX - u.pageX,
              c = o.pageY - u.pageY;
            if (s(t.target, a, c)) return;
            r(a, c), (u = o);
            var h = new Date().getTime(),
              p = h - d;
            p > 0 && ((f.x = a / p), (f.y = c / p), (d = h)),
              i(a, c) && t.preventDefault();
          }
        }
        function c() {
          e.settings.swipeEasing &&
            (clearInterval(p),
            (p = setInterval(function () {
              e.isInitialized
                ? clearInterval(p)
                : f.x || f.y
                ? Math.abs(f.x) < 0.01 && Math.abs(f.y) < 0.01
                  ? clearInterval(p)
                  : (r(30 * f.x, 30 * f.y), (f.x *= 0.8), (f.y *= 0.8))
                : clearInterval(p);
            }, 10)));
        }
        if (L.supportsTouch || L.supportsIePointer) {
          var h = e.element,
            u = {},
            d = 0,
            f = {},
            p = null;
          L.supportsTouch
            ? (e.event.bind(h, "touchstart", o),
              e.event.bind(h, "touchmove", a),
              e.event.bind(h, "touchend", c))
            : L.supportsIePointer &&
              (window.PointerEvent
                ? (e.event.bind(h, "pointerdown", o),
                  e.event.bind(h, "pointermove", a),
                  e.event.bind(h, "pointerup", c))
                : window.MSPointerEvent &&
                  (e.event.bind(h, "MSPointerDown", o),
                  e.event.bind(h, "MSPointerMove", a),
                  e.event.bind(h, "MSPointerUp", c)));
        }
      },
    },
    H = function (r, l) {
      var n = this;
      if (
        (void 0 === l && (l = {}),
        "string" == typeof r && (r = document.querySelector(r)),
        !r || !r.nodeName)
      )
        throw new Error(
          "no element is specified to initialize PerfectScrollbar"
        );
      (this.element = r),
        r.classList.add(m.main),
        (this.settings = {
          handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1e3,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipeEasing: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !0,
          wheelSpeed: 1,
        });
      for (var o in l) n.settings[o] = l[o];
      (this.containerWidth = null),
        (this.containerHeight = null),
        (this.contentWidth = null),
        (this.contentHeight = null);
      var s = function () {
          return r.classList.add(m.state.focus);
        },
        a = function () {
          return r.classList.remove(m.state.focus);
        };
      (this.isRtl = "rtl" === t(r).direction),
        (this.isNegativeScroll = (function () {
          var t = r.scrollLeft,
            e = null;
          return (
            (r.scrollLeft = -1), (e = r.scrollLeft < 0), (r.scrollLeft = t), e
          );
        })()),
        (this.negativeScrollAdjustment = this.isNegativeScroll
          ? r.scrollWidth - r.clientWidth
          : 0),
        (this.event = new y()),
        (this.ownerDocument = r.ownerDocument || document),
        (this.scrollbarXRail = i(m.element.rail("x"))),
        r.appendChild(this.scrollbarXRail),
        (this.scrollbarX = i(m.element.thumb("x"))),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", s),
        this.event.bind(this.scrollbarX, "blur", a),
        (this.scrollbarXActive = null),
        (this.scrollbarXWidth = null),
        (this.scrollbarXLeft = null);
      var c = t(this.scrollbarXRail);
      (this.scrollbarXBottom = parseInt(c.bottom, 10)),
        isNaN(this.scrollbarXBottom)
          ? ((this.isScrollbarXUsingBottom = !1),
            (this.scrollbarXTop = u(c.top)))
          : (this.isScrollbarXUsingBottom = !0),
        (this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth)),
        e(this.scrollbarXRail, { display: "block" }),
        (this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight)),
        e(this.scrollbarXRail, { display: "" }),
        (this.railXWidth = null),
        (this.railXRatio = null),
        (this.scrollbarYRail = i(m.element.rail("y"))),
        r.appendChild(this.scrollbarYRail),
        (this.scrollbarY = i(m.element.thumb("y"))),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", s),
        this.event.bind(this.scrollbarY, "blur", a),
        (this.scrollbarYActive = null),
        (this.scrollbarYHeight = null),
        (this.scrollbarYTop = null);
      var h = t(this.scrollbarYRail);
      (this.scrollbarYRight = parseInt(h.right, 10)),
        isNaN(this.scrollbarYRight)
          ? ((this.isScrollbarYUsingRight = !1),
            (this.scrollbarYLeft = u(h.left)))
          : (this.isScrollbarYUsingRight = !0),
        (this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null),
        (this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth)),
        e(this.scrollbarYRail, { display: "block" }),
        (this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom)),
        e(this.scrollbarYRail, { display: "" }),
        (this.railYHeight = null),
        (this.railYRatio = null),
        (this.reach = {
          x:
            r.scrollLeft <= 0
              ? "start"
              : r.scrollLeft >= this.contentWidth - this.containerWidth
              ? "end"
              : null,
          y:
            r.scrollTop <= 0
              ? "start"
              : r.scrollTop >= this.contentHeight - this.containerHeight
              ? "end"
              : null,
        }),
        (this.isAlive = !0),
        this.settings.handlers.forEach(function (t) {
          return T[t](n);
        }),
        (this.lastScrollTop = Math.floor(r.scrollTop)),
        (this.lastScrollLeft = r.scrollLeft),
        this.event.bind(this.element, "scroll", function (t) {
          return n.onScroll(t);
        }),
        R(this);
    };
  return (
    (H.prototype.update = function () {
      this.isAlive &&
        ((this.negativeScrollAdjustment = this.isNegativeScroll
          ? this.element.scrollWidth - this.element.clientWidth
          : 0),
        e(this.scrollbarXRail, { display: "block" }),
        e(this.scrollbarYRail, { display: "block" }),
        (this.railXMarginWidth =
          u(t(this.scrollbarXRail).marginLeft) +
          u(t(this.scrollbarXRail).marginRight)),
        (this.railYMarginHeight =
          u(t(this.scrollbarYRail).marginTop) +
          u(t(this.scrollbarYRail).marginBottom)),
        e(this.scrollbarXRail, { display: "none" }),
        e(this.scrollbarYRail, { display: "none" }),
        R(this),
        W(this, "top", 0, !1, !0),
        W(this, "left", 0, !1, !0),
        e(this.scrollbarXRail, { display: "" }),
        e(this.scrollbarYRail, { display: "" }));
    }),
    (H.prototype.onScroll = function (t) {
      this.isAlive &&
        (R(this),
        W(this, "top", this.element.scrollTop - this.lastScrollTop),
        W(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        (this.lastScrollTop = Math.floor(this.element.scrollTop)),
        (this.lastScrollLeft = this.element.scrollLeft));
    }),
    (H.prototype.destroy = function () {
      this.isAlive &&
        (this.event.unbindAll(),
        l(this.scrollbarX),
        l(this.scrollbarY),
        l(this.scrollbarXRail),
        l(this.scrollbarYRail),
        this.removePsClasses(),
        (this.element = null),
        (this.scrollbarX = null),
        (this.scrollbarY = null),
        (this.scrollbarXRail = null),
        (this.scrollbarYRail = null),
        (this.isAlive = !1));
    }),
    (H.prototype.removePsClasses = function () {
      this.element.className = this.element.className
        .split(" ")
        .filter(function (t) {
          return !t.match(/^ps([-_].+|)$/);
        })
        .join(" ");
    }),
    H
  );
});
