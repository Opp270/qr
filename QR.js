!(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define(n)
      : (((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
        (t.__SVGATOR_PLAYER__["91c80d77"] = n()));
  })(this, function () {
    "use strict";
  
    function t(t, n) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        n &&
          (e = e.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          r.push.apply(r, e);
      }
      return r;
    }
  
    function n(n) {
      for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? t(Object(e), !0).forEach(function (t) {
              o(n, t, e[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
          : t(Object(e)).forEach(function (t) {
              Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
            });
      }
      return n;
    }
  
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
  
    function e(t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
  
    function i(t, n) {
      for (var r = 0; r < n.length; r++) {
        var e = n[r];
        (e.enumerable = e.enumerable || !1),
          (e.configurable = !0),
          "value" in e && (e.writable = !0),
          Object.defineProperty(t, e.key, e);
      }
    }
  
    function u(t, n, r) {
      return n && i(t.prototype, n), r && i(t, r), t;
    }
  
    function o(t, n, r) {
      return (
        n in t
          ? Object.defineProperty(t, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[n] = r),
        t
      );
    }
  
    function a(t) {
      return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
  
    function l(t, n) {
      return (l =
        Object.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
  
    function s() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
  
    function f(t, n, r) {
      return (f = s()
        ? Reflect.construct
        : function (t, n, r) {
            var e = [null];
            e.push.apply(e, n);
            var i = new (Function.bind.apply(t, e))();
            return r && l(i, r.prototype), i;
          }).apply(null, arguments);
    }
  
    function c(t, n) {
      if (n && ("object" == typeof n || "function" == typeof n)) return n;
      if (void 0 !== n)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
  
    function h(t, n, r) {
      return (h =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, n, r) {
              var e = (function (t, n) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, n) &&
                  null !== (t = a(t));
  
                );
                return t;
              })(t, n);
              if (e) {
                var i = Object.getOwnPropertyDescriptor(e, n);
                return i.get ? i.get.call(r) : i.value;
              }
            })(t, n, r || t);
    }
  
    function v(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return d(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t, n) {
          if (!t) return;
          if ("string" == typeof t) return d(t, n);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return d(t, n);
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
  
    function d(t, n) {
      (null == n || n > t.length) && (n = t.length);
      for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
      return e;
    }
    var y = g(Math.pow(10, -6));
  
    function g(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
      if (Number.isInteger(t)) return t;
      var r = Math.pow(10, n);
      return Math.round((+t + Number.EPSILON) * r) / r;
    }
  
    function p(t, n) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
      return Math.abs(t - n) < r;
    }
    var m = Math.PI / 180;
  
    function b(t) {
      return t;
    }
  
    function w(t, n, r) {
      var e = 1 - r;
      return 3 * r * e * (t * e + n * r) + r * r * r;
    }
  
    function A() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      return t < 0 || t > 1 || r < 0 || r > 1
        ? null
        : p(t, n) && p(r, e)
        ? b
        : function (i) {
            if (i <= 0)
              return t > 0 ? (i * n) / t : 0 === n && r > 0 ? (i * e) / r : 0;
            if (i >= 1)
              return r < 1
                ? 1 + ((i - 1) * (e - 1)) / (r - 1)
                : 1 === r && t < 1
                ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                : 1;
            for (var u, o = 0, a = 1; o < a; ) {
              var l = w(t, r, (u = (o + a) / 2));
              if (p(i, l)) break;
              l < i ? (o = u) : (a = u);
            }
            return w(n, e, u);
          };
    }
  
    function x() {
      return 1;
    }
  
    function k(t) {
      return 1 === t ? 1 : 0;
    }
  
    function _() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (1 === t) {
        if (0 === n) return k;
        if (1 === n) return x;
      }
      var r = 1 / t;
      return function (t) {
        return t >= 1 ? 1 : (t += n * r) - (t % r);
      };
    }
    var S = Math.sin,
      O = Math.cos,
      M = Math.acos,
      E = Math.asin,
      j = Math.tan,
      P = Math.atan2,
      I = Math.PI / 180,
      B = 180 / Math.PI,
      R = Math.sqrt,
      T = (function () {
        function t() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            r =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            u =
              arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            o =
              arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            a =
              arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          e(this, t),
            (this.m = [n, r, i, u, o, a]),
            (this.i = null),
            (this.w = null),
            (this.s = null);
        }
        return (
          u(
            t,
            [
              {
                key: "determinant",
                get: function () {
                  var t = this.m;
                  return t[0] * t[3] - t[1] * t[2];
                }
              },
              {
                key: "isIdentity",
                get: function () {
                  if (null === this.i) {
                    var t = this.m;
                    this.i =
                      1 === t[0] &&
                      0 === t[1] &&
                      0 === t[2] &&
                      1 === t[3] &&
                      0 === t[4] &&
                      0 === t[5];
                  }
                  return this.i;
                }
              },
              {
                key: "point",
                value: function (t, n) {
                  var r = this.m;
                  return {
                    x: r[0] * t + r[2] * n + r[4],
                    y: r[1] * t + r[3] * n + r[5]
                  };
                }
              },
              {
                key: "translateSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  if (!t && !n) return this;
                  var r = this.m;
                  return (
                    (r[4] += r[0] * t + r[2] * n),
                    (r[5] += r[1] * t + r[3] * n),
                    (this.w = this.s = this.i = null),
                    this
                  );
                }
              },
              {
                key: "rotateSelf",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  if ((t %= 360)) {
                    var n = S((t *= I)),
                      r = O(t),
                      e = this.m,
                      i = e[0],
                      u = e[1];
                    (e[0] = i * r + e[2] * n),
                      (e[1] = u * r + e[3] * n),
                      (e[2] = e[2] * r - i * n),
                      (e[3] = e[3] * r - u * n),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                }
              },
              {
                key: "scaleSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1;
                  if (1 !== t || 1 !== n) {
                    var r = this.m;
                    (r[0] *= t),
                      (r[1] *= t),
                      (r[2] *= n),
                      (r[3] *= n),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                }
              },
              {
                key: "skewSelf",
                value: function (t, n) {
                  if (((n %= 360), (t %= 360) || n)) {
                    var r = this.m,
                      e = r[0],
                      i = r[1],
                      u = r[2],
                      o = r[3];
                    t && ((t = j(t * I)), (r[2] += e * t), (r[3] += i * t)),
                      n && ((n = j(n * I)), (r[0] += u * n), (r[1] += o * n)),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                }
              },
              {
                key: "resetSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    e =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 1,
                    i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 0,
                    u =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : 0,
                    o = this.m;
                  return (
                    (o[0] = t),
                    (o[1] = n),
                    (o[2] = r),
                    (o[3] = e),
                    (o[4] = i),
                    (o[5] = u),
                    (this.w = this.s = this.i = null),
                    this
                  );
                }
              },
              {
                key: "recomposeSelf",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    e =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                    i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : null;
                  return (
                    this.isIdentity || this.resetSelf(),
                    t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                    n && this.rotateSelf(n),
                    r &&
                      (r.x && this.skewSelf(r.x, 0),
                      r.y && this.skewSelf(0, r.y)),
                    !e || (1 === e.x && 1 === e.y) || this.scaleSelf(e.x, e.y),
                    i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                    this
                  );
                }
              },
              {
                key: "decompose",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    r = this.m,
                    e = r[0] * r[0] + r[1] * r[1],
                    i = [
                      [r[0], r[1]],
                      [r[2], r[3]]
                    ],
                    u = R(e);
                  if (0 === u)
                    return {
                      origin: {
                        x: g(r[4]),
                        y: g(r[5])
                      },
                      translate: {
                        x: g(t),
                        y: g(n)
                      },
                      scale: {
                        x: 0,
                        y: 0
                      },
                      skew: {
                        x: 0,
                        y: 0
                      },
                      rotate: 0
                    };
                  (i[0][0] /= u), (i[0][1] /= u);
                  var o = r[0] * r[3] - r[1] * r[2] < 0;
                  o && (u = -u);
                  var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                  (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                  var l = R(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                  if (0 === l)
                    return {
                      origin: {
                        x: g(r[4]),
                        y: g(r[5])
                      },
                      translate: {
                        x: g(t),
                        y: g(n)
                      },
                      scale: {
                        x: g(u),
                        y: 0
                      },
                      skew: {
                        x: 0,
                        y: 0
                      },
                      rotate: 0
                    };
                  (i[1][0] /= l), (i[1][1] /= l), (a /= l);
                  var s = 0;
                  return (
                    i[1][1] < 0
                      ? ((s = M(i[1][1]) * B), i[0][1] < 0 && (s = 360 - s))
                      : (s = E(i[0][1]) * B),
                    o && (s = -s),
                    (a = P(a, R(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * B),
                    o && (a = -a),
                    {
                      origin: {
                        x: g(r[4]),
                        y: g(r[5])
                      },
                      translate: {
                        x: g(t),
                        y: g(n)
                      },
                      scale: {
                        x: g(u),
                        y: g(l)
                      },
                      skew: {
                        x: g(a),
                        y: 0
                      },
                      rotate: g(s)
                    }
                  );
                }
              },
              {
                key: "clone",
                value: function () {
                  var t = this.m;
                  return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
                }
              },
              {
                key: "toString",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : " ";
                  if (null === this.s) {
                    var n = this.m.map(function (t) {
                      return g(t);
                    });
                    1 === n[0] && 0 === n[1] && 0 === n[2] && 1 === n[3]
                      ? (this.s = "translate(" + n[4] + t + n[5] + ")")
                      : (this.s = "matrix(" + n.join(t) + ")");
                  }
                  return this.s;
                }
              }
            ],
            [
              {
                key: "create",
                value: function (t) {
                  return t
                    ? Array.isArray(t)
                      ? f(this, v(t))
                      : t instanceof this
                      ? t.clone()
                      : new this().recomposeSelf(
                          t.origin,
                          t.rotate,
                          t.skew,
                          t.scale,
                          t.translate
                        )
                    : new this();
                }
              }
            ]
          ),
          t
        );
      })();
  
    function N(t, n, r) {
      return t >= 0.5 ? r : n;
    }
  
    function C(t, n, r) {
      return 0 === t || n === r ? n : t * (r - n) + n;
    }
  
    function F(t, n, r) {
      var e = C(t, n, r);
      return e <= 0 ? 0 : e;
    }
  
    function L(t, n, r) {
      var e = C(t, n, r);
      return e <= 0 ? 0 : e >= 1 ? 1 : e;
    }
  
    function q(t, n, r) {
      return 0 === t
        ? n
        : 1 === t
        ? r
        : {
            x: C(t, n.x, r.x),
            y: C(t, n.y, r.y)
          };
    }
  
    function V(t, n, r) {
      return 0 === t
        ? n
        : 1 === t
        ? r
        : {
            x: F(t, n.x, r.x),
            y: F(t, n.y, r.y)
          };
    }
  
    function D(t, n, r) {
      var e = (function (t, n, r) {
        return Math.round(C(t, n, r));
      })(t, n, r);
      return e <= 0 ? 0 : e >= 255 ? 255 : e;
    }
  
    function z(t, n, r) {
      return 0 === t
        ? n
        : 1 === t
        ? r
        : {
            r: D(t, n.r, r.r),
            g: D(t, n.g, r.g),
            b: D(t, n.b, r.b),
            a: C(t, null == n.a ? 1 : n.a, null == r.a ? 1 : r.a)
          };
    }
  
    function Y(t, n, r) {
      var e = n.length;
      if (e !== r.length) return N(t, n, r);
      for (var i = new Array(e), u = 0; u < e; u++) i[u] = C(t, n[u], r[u]);
      return i;
    }
  
    function G(t, n) {
      for (var r = [], e = 0; e < t; e++) r.push(n);
      return r;
    }
  
    function U(t, n) {
      if (--n <= 0) return t;
      var r = (t = Object.assign([], t)).length;
      do {
        for (var e = 0; e < r; e++) t.push(t[e]);
      } while (--n > 0);
      return t;
    }
    var $,
      W = (function () {
        function t(n) {
          e(this, t), (this.list = n), (this.length = n.length);
        }
        return (
          u(t, [
            {
              key: "setAttribute",
              value: function (t, n) {
                for (var r = this.list, e = 0; e < this.length; e++)
                  r[e].setAttribute(t, n);
              }
            },
            {
              key: "removeAttribute",
              value: function (t) {
                for (var n = this.list, r = 0; r < this.length; r++)
                  n[r].removeAttribute(t);
              }
            },
            {
              key: "style",
              value: function (t, n) {
                for (var r = this.list, e = 0; e < this.length; e++)
                  r[e].style[t] = n;
              }
            }
          ]),
          t
        );
      })(),
      H = /-./g,
      Q = function (t, n) {
        return n.toUpperCase();
      };
  
    function X(t) {
      return "function" == typeof t ? t : N;
    }
  
    function J(t) {
      return t
        ? "function" == typeof t
          ? t
          : Array.isArray(t)
          ? (function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b;
              if (!Array.isArray(t)) return n;
              switch (t.length) {
                case 1:
                  return _(t[0]) || n;
                case 2:
                  return _(t[0], t[1]) || n;
                case 4:
                  return A(t[0], t[1], t[2], t[3]) || n;
              }
              return n;
            })(t, null)
          : (function (t, n) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : b;
              switch (t) {
                case "linear":
                  return b;
                case "steps":
                  return _(n.steps || 1, n.jump || 0) || r;
                case "bezier":
                case "cubic-bezier":
                  return A(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || r;
              }
              return r;
            })(t.type, t.value, null)
        : null;
    }
  
    function Z(t, n, r) {
      var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = n.length - 1;
      if (t <= n[0].t) return e ? [0, 0, n[0].v] : n[0].v;
      if (t >= n[i].t) return e ? [i, 1, n[i].v] : n[i].v;
      var u,
        o = n[0],
        a = null;
      for (u = 1; u <= i; u++) {
        if (!(t > n[u].t)) {
          a = n[u];
          break;
        }
        o = n[u];
      }
      return null == a
        ? e
          ? [i, 1, n[i].v]
          : n[i].v
        : o.t === a.t
        ? e
          ? [u, 1, a.v]
          : a.v
        : ((t = (t - o.t) / (a.t - o.t)),
          o.e && (t = o.e(t)),
          e ? [u, t, r(t, o.v, a.v)] : r(t, o.v, a.v));
    }
  
    function K(t, n) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return t && t.length
        ? "function" != typeof n
          ? null
          : ("function" != typeof r && (r = null),
            function (e) {
              var i = Z(e, t, n);
              return null != i && r && (i = r(i)), i;
            })
        : null;
    }
  
    function tt(t, n) {
      return t.t - n.t;
    }
  
    function nt(t, n, e, i, u) {
      var o,
        a = "@" === e[0],
        l = "#" === e[0],
        s = $[e],
        f = N;
      switch (
        (a ? ((o = e.substr(1)), (e = o.replace(H, Q))) : l && (e = e.substr(1)),
        r(s))
      ) {
        case "function":
          if (((f = s(i, u, Z, J, e, a, n, t)), l)) return f;
          break;
        case "string":
          f = K(i, X(s));
          break;
        case "object":
          if ((f = K(i, X(s.i), s.f)) && "function" == typeof s.u)
            return s.u(n, f, e, a, t);
      }
      return f
        ? (function (t, n, r) {
            if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
              return t instanceof W
                ? function (e) {
                    return t.style(n, r(e));
                  }
                : function (e) {
                    return (t.style[n] = r(e));
                  };
            if (Array.isArray(n)) {
              var e = n.length;
              return function (i) {
                var u = r(i);
                if (null == u)
                  for (var o = 0; o < e; o++) t[o].removeAttribute(n);
                else for (var a = 0; a < e; a++) t[a].setAttribute(n, u);
              };
            }
            return function (e) {
              var i = r(e);
              null == i ? t.removeAttribute(n) : t.setAttribute(n, i);
            };
          })(n, e, f, a)
        : null;
    }
  
    function rt(t, n, e, i) {
      if (!i || "object" !== r(i)) return null;
      var u = null,
        o = null;
      return (
        Array.isArray(i)
          ? (o = (function (t) {
              if (!t || !t.length) return null;
              for (var n = 0; n < t.length; n++) t[n].e && (t[n].e = J(t[n].e));
              return t.sort(tt);
            })(i))
          : ((o = i.keys), (u = i.data || null)),
        o ? nt(t, n, e, o, u) : null
      );
    }
  
    function et(t, n, r) {
      if (!r) return null;
      var e = [];
      for (var i in r)
        if (r.hasOwnProperty(i)) {
          var u = rt(t, n, i, r[i]);
          u && e.push(u);
        }
      return e.length ? e : null;
    }
  
    function it(t, n) {
      if (!n.duration || n.duration < 0) return null;
      var r = (function (t, n) {
        if (!n) return null;
        var r = [];
        if (Array.isArray(n))
          for (var e = n.length, i = 0; i < e; i++) {
            var u = n[i];
            if (2 === u.length) {
              var o = null;
              if ("string" == typeof u[0]) o = t.getElementById(u[0]);
              else if (Array.isArray(u[0])) {
                o = [];
                for (var a = 0; a < u[0].length; a++)
                  if ("string" == typeof u[0][a]) {
                    var l = t.getElementById(u[0][a]);
                    l && o.push(l);
                  }
                o = o.length ? (1 === o.length ? o[0] : new W(o)) : null;
              }
              if (o) {
                var s = et(t, o, u[1]);
                s && (r = r.concat(s));
              }
            }
          }
        else
          for (var f in n)
            if (n.hasOwnProperty(f)) {
              var c = t.getElementById(f);
              if (c) {
                var h = et(t, c, n[f]);
                h && (r = r.concat(h));
              }
            }
        return r.length ? r : null;
      })(t, n.elements);
      return r
        ? (function (t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1 / 0,
              e =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              u =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 1,
              o = t.length,
              a = e > 0 ? n : 0;
            i && r % 2 == 0 && (a = n - a);
            var l = null;
            return function (s, f) {
              var c = s % n,
                h = 1 + (s - c) / n;
              (f *= e), i && h % 2 == 0 && (f = -f);
              var v = !1;
              if (h > r) (c = a), (v = !0), -1 === u && (c = e > 0 ? 0 : n);
              else if ((f < 0 && (c = n - c), c === l)) return !1;
              l = c;
              for (var d = 0; d < o; d++) t[d](c);
              return v;
            };
          })(
            r,
            n.duration,
            n.iterations || 1 / 0,
            n.direction || 1,
            !!n.alternate,
            n.fill || 1
          )
        : null;
    }
  
    function ut(t) {
      return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
    }
  
    function ot(t, n, r) {
      return !t || !r || n > t.length
        ? t
        : t.substring(0, n) + ot(t.substring(n + 1), r, r);
    }
  
    function at(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
      return !t || t % n ? t % n : at(t / n, n);
    }
  
    function lt(t, n, r) {
      if (t && t.length) {
        var e = ut(r),
          i = ut(n),
          u = at(e) + 5,
          o = ot(t, at(e, 5), u);
        return (
          (o = o.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
          (o = (function (t, n, r) {
            var e = +("0x" + t.substring(0, 4));
            t = t.substring(4);
            for (var i = (n % e) + (r % 27), u = [], o = 0; o < t.length; o += 2)
              if ("|" !== t[o]) {
                var a = +("0x" + t[o] + t[o + 1]) - i;
                u.push(a);
              } else {
                var l = +("0x" + t.substring(o + 1, o + 1 + 4)) - i;
                (o += 3), u.push(l);
              }
            return String.fromCharCode.apply(String, u);
          })((o = (o = atob(o)).replace(/[\x41-\x5A]/g, "")), i, e)),
          (o = JSON.parse(o))
        );
      }
    }
    Number.isInteger ||
      (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
      }),
      Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
    var st = (function () {
      function t(n, r) {
        var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e(this, t),
          (this._id = 0),
          (this._running = !1),
          (this._rollingBack = !1),
          (this._animations = n),
          (this.duration = r.duration),
          (this.alternate = r.alternate),
          (this.fill = r.fill),
          (this.iterations = r.iterations),
          (this.direction = i.direction || 1),
          (this.speed = i.speed || 1),
          (this.fps = i.fps || 100),
          (this.offset = i.offset || 0),
          (this.rollbackStartOffset = 0);
      }
      return (
        u(
          t,
          [
            {
              key: "_rollback",
              value: function () {
                var t = this,
                  n = 1 / 0,
                  r = null;
                (this.rollbackStartOffset = this.offset),
                  this._rollingBack ||
                    ((this._rollingBack = !0), (this._running = !0));
                this._id = window.requestAnimationFrame(function e(i) {
                  if (t._rollingBack) {
                    null == r && (r = i);
                    var u = i - r,
                      o = t.rollbackStartOffset - u,
                      a = Math.round(o * t.speed);
                    if (a > t.duration && n != 1 / 0) {
                      var l = !!t.alternate && (a / t.duration) % 2 > 1,
                        s = a % t.duration;
                      a = (s += l ? t.duration : 0) || t.duration;
                    }
                    var f = t.fps ? 1e3 / t.fps : 0,
                      c = Math.max(0, a);
                    if (c < n - f) {
                      (t.offset = c), (n = c);
                      for (var h = t._animations, v = h.length, d = 0; d < v; d++)
                        h[d](c, t.direction);
                    }
                    var y = !1;
                    if (t.iterations > 0 && -1 === t.fill) {
                      var g = t.iterations * t.duration,
                        p = g == a;
                      (a = p ? 0 : a), (t.offset = p ? 0 : t.offset), (y = a > g);
                    }
                    a > 0 && t.offset >= a && !y
                      ? (t._id = window.requestAnimationFrame(e))
                      : t.stop();
                  }
                });
              }
            },
            {
              key: "_start",
              value: function () {
                var t = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  r = -1 / 0,
                  e = null,
                  i = {},
                  u = function u(o) {
                    (t._running = !0), null == e && (e = o);
                    var a = Math.round((o - e + n) * t.speed),
                      l = t.fps ? 1e3 / t.fps : 0;
                    if (a > r + l && !t._rollingBack) {
                      (t.offset = a), (r = a);
                      for (
                        var s = t._animations, f = s.length, c = 0, h = 0;
                        h < f;
                        h++
                      )
                        i[h] ? c++ : ((i[h] = s[h](a, t.direction)), i[h] && c++);
                      if (c === f) return void t._stop();
                    }
                    t._id = window.requestAnimationFrame(u);
                  };
                this._id = window.requestAnimationFrame(u);
              }
            },
            {
              key: "_stop",
              value: function () {
                this._id && window.cancelAnimationFrame(this._id),
                  (this._running = !1),
                  (this._rollingBack = !1);
              }
            },
            {
              key: "play",
              value: function () {
                (!this._rollingBack && this._running) ||
                  ((this._rollingBack = !1),
                  this.rollbackStartOffset > this.duration &&
                    ((this.offset =
                      this.rollbackStartOffset -
                      ((this.rollbackStartOffset - this.offset) % this.duration)),
                    (this.rollbackStartOffset = 0)),
                  this._start(this.offset));
              }
            },
            {
              key: "stop",
              value: function () {
                this._stop(), (this.offset = 0), (this.rollbackStartOffset = 0);
                var t = this.direction,
                  n = this._animations;
                window.requestAnimationFrame(function () {
                  for (var r = 0; r < n.length; r++) n[r](0, t);
                });
              }
            },
            {
              key: "reachedToEnd",
              value: function () {
                return (
                  this.iterations > 0 &&
                  this.offset >= this.iterations * this.duration
                );
              }
            },
            {
              key: "restart",
              value: function () {
                this._stop(), (this.offset = 0), this._start();
              }
            },
            {
              key: "pause",
              value: function () {
                this._stop();
              }
            },
            {
              key: "reverse",
              value: function () {
                this.direction = -this.direction;
              }
            }
          ],
          [
            {
              key: "build",
              value: function (r, e) {
                return (
                  delete r.animationSettings,
                  (r.options = lt(r.options, r.root, "91c80d77")),
                  r.animations.map(function (t) {
                    var e = lt(t.s, r.root, "91c80d77");
                    for (var i in (delete t.s,
                    r.animationSettings || (r.animationSettings = n({}, e)),
                    e))
                      e.hasOwnProperty(i) && (t[i] = e[i]);
                  }),
                  (r = (function (t, n) {
                    if ((($ = n), !t || !t.root || !Array.isArray(t.animations)))
                      return null;
                    for (
                      var r = document.getElementsByTagName("svg"), e = !1, i = 0;
                      i < r.length;
                      i++
                    )
                      if (r[i].id === t.root && !r[i].svgatorAnimation) {
                        (e = r[i]).svgatorAnimation = !0;
                        break;
                      }
                    if (!e) return null;
                    var u = t.animations
                      .map(function (t) {
                        return it(e, t);
                      })
                      .filter(function (t) {
                        return !!t;
                      });
                    return u.length
                      ? {
                          element: e,
                          animations: u,
                          animationSettings: t.animationSettings,
                          options: t.options || void 0
                        }
                      : null;
                  })(r, e))
                    ? {
                        el: r.element,
                        options: r.options || {},
                        player: new t(
                          r.animations,
                          r.animationSettings,
                          r.options
                        )
                      }
                    : null
                );
              }
            },
            {
              key: "push",
              value: function (t) {
                return this.build(t);
              }
            },
            {
              key: "init",
              value: function () {
                var t = this,
                  n =
                    window.__SVGATOR_PLAYER__ &&
                    window.__SVGATOR_PLAYER__["91c80d77"];
                Array.isArray(n) &&
                  n.splice(0).forEach(function (n) {
                    return t.build(n);
                  });
              }
            }
          ]
        ),
        t
      );
    })();
    !(function () {
      for (
        var t = 0, n = ["ms", "moz", "webkit", "o"], r = 0;
        r < n.length && !window.requestAnimationFrame;
        ++r
      )
        (window.requestAnimationFrame = window[n[r] + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame =
            window[n[r] + "CancelAnimationFrame"] ||
            window[n[r] + "CancelRequestAnimationFrame"]);
      window.requestAnimationFrame ||
        ((window.requestAnimationFrame = function (n) {
          var r = Date.now(),
            e = Math.max(0, 16 - (r - t)),
            i = window.setTimeout(function () {
              n(r + e);
            }, e);
          return (t = r + e), i;
        }),
        (window.cancelAnimationFrame = window.clearTimeout));
    })();
    var ft = function (t, n) {
        var r = !1,
          e = null;
        return function (i) {
          r && clearTimeout(r),
            (r = setTimeout(function () {
              return (function () {
                for (
                  var i = 0,
                    u = window.innerHeight,
                    o = 0,
                    a = window.innerWidth,
                    l = t.parentNode;
                  l instanceof Element;
  
                ) {
                  var s = window.getComputedStyle(l);
                  if ("visible" !== s.overflowY || "visible" !== s.overflowX) {
                    var f = l.getBoundingClientRect();
                    "visible" !== s.overflowY &&
                      ((i = Math.max(i, f.top)), (u = Math.min(u, f.bottom))),
                      "visible" !== s.overflowX &&
                        ((o = Math.max(o, f.left)), (a = Math.min(a, f.right)));
                  }
                  if (l === l.parentNode) break;
                  l = l.parentNode;
                }
                r = !1;
                var c = t.getBoundingClientRect(),
                  h = Math.min(c.height, Math.max(0, i - c.top)),
                  v = Math.min(c.height, Math.max(0, c.bottom - u)),
                  d = Math.min(c.width, Math.max(0, o - c.left)),
                  y = Math.min(c.width, Math.max(0, c.right - a)),
                  g = (c.height - h - v) / c.height,
                  p = (c.width - d - y) / c.width,
                  m = Math.round(g * p * 100);
                (null !== e && e === m) || ((e = m), n(m));
              })();
            }, 100));
        };
      },
      ct = (function () {
        function t(n, r, i) {
          e(this, t),
            (r = Math.max(1, r || 1)),
            (r = Math.min(r, 100)),
            (this.el = n),
            (this.onTresholdChange = i && i.call ? i : function () {}),
            (this.tresholdPercent = r || 1),
            (this.currentVisibility = null),
            (this.visibilityCalculator = ft(
              n,
              this.onVisibilityUpdate.bind(this)
            )),
            this.bindScrollWatchers(),
            this.visibilityCalculator();
        }
        return (
          u(t, [
            {
              key: "bindScrollWatchers",
              value: function () {
                for (
                  var t = this.el.parentNode;
                  t &&
                  (t.addEventListener("scroll", this.visibilityCalculator),
                  t !== t.parentNode && t !== document);
  
                )
                  t = t.parentNode;
              }
            },
            {
              key: "onVisibilityUpdate",
              value: function (t) {
                var n = this.currentVisibility >= this.tresholdPercent,
                  r = t >= this.tresholdPercent;
                if (null === this.currentVisibility || n !== r)
                  return (
                    (this.currentVisibility = t), void this.onTresholdChange(r)
                  );
                this.currentVisibility = t;
              }
            }
          ]),
          t
        );
      })();
  
    function ht(t) {
      return g(t) + "";
    }
  
    function vt(t) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
      return t && t.length ? t.map(ht).join(n) : "";
    }
  
    function dt(t) {
      return ht(t.x) + "," + ht(t.y);
    }
  
    function yt(t) {
      if (!t) return "transparent";
      if (null == t.a || t.a >= 1) {
        var n = function (t) {
            return 1 === (t = parseInt(t).toString(16)).length ? "0" + t : t;
          },
          r = function (t) {
            return t.charAt(0) === t.charAt(1);
          },
          e = n(t.r),
          i = n(t.g),
          u = n(t.b);
        return (
          r(e) &&
            r(i) &&
            r(u) &&
            ((e = e.charAt(0)), (i = i.charAt(0)), (u = u.charAt(0))),
          "#" + e + i + u
        );
      }
      return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
    }
  
    function gt(t) {
      return t ? "url(#" + t + ")" : "none";
    }
    var pt = {
        f: null,
        i: V,
        u: function (t, n) {
          return function (r) {
            var e = n(r);
            t.setAttribute("rx", ht(e.x)), t.setAttribute("ry", ht(e.y));
          };
        }
      },
      mt = {
        f: null,
        i: function (t, n, r) {
          return 0 === t
            ? n
            : 1 === t
            ? r
            : {
                width: F(t, n.width, r.width),
                height: F(t, n.height, r.height)
              };
        },
        u: function (t, n) {
          return function (r) {
            var e = n(r);
            t.setAttribute("width", ht(e.width)),
              t.setAttribute("height", ht(e.height));
          };
        }
      };
    Object.freeze({
      M: 2,
      L: 2,
      Z: 0,
      H: 1,
      V: 1,
      C: 6,
      Q: 4,
      T: 2,
      S: 4,
      A: 7
    });
    var bt = {},
      wt = null;
  
    function At(t) {
      var n = (function () {
        if (wt) return wt;
        if (
          "object" !==
            ("undefined" == typeof document ? "undefined" : r(document)) ||
          !document.createElementNS
        )
          return {};
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        return t && t.style
          ? ((t.style.position = "absolute"),
            (t.style.opacity = "0.01"),
            (t.style.zIndex = "-9999"),
            (t.style.left = "-9999px"),
            (t.style.width = "1px"),
            (t.style.height = "1px"),
            (wt = {
              svg: t
            }))
          : {};
      })().svg;
      if (!n)
        return function (t) {
          return null;
        };
      var e = document.createElementNS(n.namespaceURI, "path");
      e.setAttributeNS(null, "d", t),
        e.setAttributeNS(null, "fill", "none"),
        e.setAttributeNS(null, "stroke", "none"),
        n.appendChild(e);
      var i = e.getTotalLength();
      return function (t) {
        var n = e.getPointAtLength(i * t);
        return {
          x: n.x,
          y: n.y
        };
      };
    }
  
    function xt(t) {
      return bt[t] ? bt[t] : (bt[t] = At(t));
    }
  
    function kt(t, n, r, e) {
      if (!t || !e) return !1;
      var i = ["M", t.x, t.y];
      if (
        (n &&
          r &&
          (i.push("C"), i.push(n.x), i.push(n.y), i.push(r.x), i.push(r.y)),
        n ? !r : r)
      ) {
        var u = n || r;
        i.push("Q"), i.push(u.x), i.push(u.y);
      }
      return n || r || i.push("L"), i.push(e.x), i.push(e.y), i.join(" ");
    }
  
    function _t(t, n, r, e) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        u = kt(t, n, r, e),
        o = xt(u);
      try {
        return o(i);
      } catch (t) {
        return null;
      }
    }
  
    function St(t, n, r, e) {
      var i = 1 - e;
      return i * i * t + 2 * i * e * n + e * e * r;
    }
  
    function Ot(t, n, r, e) {
      return 2 * (1 - e) * (n - t) + 2 * e * (r - n);
    }
  
    function Mt(t, n, r, e) {
      var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        u = _t(t, n, null, r, e);
      return (
        u ||
          (u = {
            x: St(t.x, n.x, r.x, e),
            y: St(t.y, n.y, r.y, e)
          }),
        i && (u.a = Et(t, n, r, e)),
        u
      );
    }
  
    function Et(t, n, r, e) {
      return Math.atan2(Ot(t.y, n.y, r.y, e), Ot(t.x, n.x, r.x, e));
    }
  
    function jt(t, n, r, e, i) {
      var u = i * i;
      return (
        i * u * (e - t + 3 * (n - r)) +
        3 * u * (t + r - 2 * n) +
        3 * i * (n - t) +
        t
      );
    }
  
    function Pt(t, n, r, e, i) {
      var u = 1 - i;
      return 3 * (u * u * (n - t) + 2 * u * i * (r - n) + i * i * (e - r));
    }
  
    function It(t, n, r, e, i) {
      var u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        o = _t(t, n, r, e, i);
      return (
        o ||
          (o = {
            x: jt(t.x, n.x, r.x, e.x, i),
            y: jt(t.y, n.y, r.y, e.y, i)
          }),
        u && (o.a = Bt(t, n, r, e, i)),
        o
      );
    }
  
    function Bt(t, n, r, e, i) {
      return Math.atan2(Pt(t.y, n.y, r.y, e.y, i), Pt(t.x, n.x, r.x, e.x, i));
    }
  
    function Rt(t, n, r) {
      return t + (n - t) * r;
    }
  
    function Tt(t, n, r) {
      var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = {
          x: Rt(t.x, n.x, r),
          y: Rt(t.y, n.y, r)
        };
      return e && (i.a = Nt(t, n)), i;
    }
  
    function Nt(t, n) {
      return Math.atan2(n.y - t.y, n.x - t.x);
    }
  
    function Ct(t, n, r) {
      var e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Lt(n)) {
        if (qt(r)) return Mt(n, r.start, r, t, e);
      } else if (Lt(r)) {
        if (n.end) return Mt(n, n.end, r, t, e);
      } else {
        if (n.end)
          return r.start ? It(n, n.end, r.start, r, t, e) : Mt(n, n.end, r, t, e);
        if (r.start) return Mt(n, r.start, r, t, e);
      }
      return Tt(n, r, t, e);
    }
  
    function Ft(t, n, r) {
      var e = Ct(t, n, r, !0);
      return (
        (e.a =
          (function (t) {
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              ? t + Math.PI
              : t;
          })(e.a) / m),
        e
      );
    }
  
    function Lt(t) {
      return !t.type || "corner" === t.type;
    }
  
    function qt(t) {
      return null != t.start && !Lt(t);
    }
    var Vt = new T();
    var Dt = {
        f: function (t) {
          return t ? t.join(" ") : "";
        },
        i: function (t, n, e) {
          if (0 === t) return n;
          if (1 === t) return e;
          var i = n.length;
          if (i !== e.length) return N(t, n, e);
          for (var u, o = new Array(i), a = 0; a < i; a++) {
            if ((u = r(n[a])) !== r(e[a])) return N(t, n, e);
            if ("number" === u) o[a] = C(t, n[a], e[a]);
            else {
              if (n[a] !== e[a]) return N(t, n, e);
              o[a] = n[a];
            }
          }
          return o;
        }
      },
      zt = {
        f: null,
        i: Y,
        u: function (t, n) {
          return function (r) {
            var e = n(r);
            t.setAttribute("x1", ht(e[0])),
              t.setAttribute("y1", ht(e[1])),
              t.setAttribute("x2", ht(e[2])),
              t.setAttribute("y2", ht(e[3]));
          };
        }
      },
      Yt = {
        f: ht,
        i: C
      },
      Gt = {
        f: ht,
        i: L
      },
      Ut = {
        f: function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
          return (
            t &&
              t.length > 0 &&
              (t = t.map(function (t) {
                return g(t, 4);
              })),
            vt(t, n)
          );
        },
        i: function (t, n, r) {
          var e,
            i,
            u,
            o = n.length,
            a = r.length;
          if (o !== a)
            if (0 === o) n = G((o = a), 0);
            else if (0 === a) (a = o), (r = G(o, 0));
            else {
              var l =
                (u =
                  ((e = o) * (i = a)) /
                  (function (t, n) {
                    for (var r; n; ) (r = n), (n = t % n), (t = r);
                    return t || 1;
                  })(e, i)) < 0
                  ? -u
                  : u;
              (n = U(n, Math.floor(l / o))),
                (r = U(r, Math.floor(l / a))),
                (o = a = l);
            }
          for (var s = [], f = 0; f < o; f++) s.push(g(F(t, n[f], r[f])));
          return s;
        }
      };
  
    function $t(t, n, r) {
      return t.map(function (t) {
        return (function (t, n, r) {
          var e = t.v;
          if (!e || "g" !== e.t || e.s || !e.v || !e.r) return t;
          var i = r.getElementById(e.r),
            u = (i && i.querySelectorAll("stop")) || [];
          return (
            (e.s = e.v.map(function (t, n) {
              var r = u[n] && u[n].getAttribute("offset");
              return {
                c: t,
                o: (r = g(parseInt(r) / 100))
              };
            })),
            delete e.v,
            t
          );
        })(t, 0, r);
      });
    }
    var Wt = {
      gt: "gradientTransform",
      c: {
        x: "cx",
        y: "cy"
      },
      rd: "r",
      f: {
        x: "x1",
        y: "y1"
      },
      to: {
        x: "x2",
        y: "y2"
      }
    };
  
    function Ht(t, n, e, i, u, o, a, l) {
      return (
        $t(t, 0, l),
        (n = (function (t, n, r) {
          for (var e, i, u, o = t.length - 1, a = {}, l = 0; l <= o; l++)
            (e = t[l]).e && (e.e = n(e.e)),
              e.v &&
                "g" === (i = e.v).t &&
                i.r &&
                (u = r.getElementById(i.r)) &&
                (a[i.r] = {
                  e: u,
                  s: u.querySelectorAll("stop")
                });
          return a;
        })(t, i, l)),
        function (i) {
          var u = e(i, t, Qt);
          if (!u) return "none";
          if ("c" === u.t) return yt(u.v);
          if ("g" === u.t) {
            if (!n[u.r]) return gt(u.r);
            var o = n[u.r];
            return (
              (function (t, n) {
                for (var r = t.s, e = r.length; e < n.length; e++) {
                  var i = r[r.length - 1].cloneNode();
                  (i.id = Zt(i.id)),
                    t.e.appendChild(i),
                    (r = t.s = t.e.querySelectorAll("stop"));
                }
                for (var u = 0, o = r.length, a = n.length - 1; u < o; u++)
                  r[u].setAttribute("stop-color", yt(n[Math.min(u, a)].c)),
                    r[u].setAttribute("offset", n[Math.min(u, a)].o);
              })(o, u.s),
              Object.keys(Wt).forEach(function (t) {
                if (void 0 !== u[t])
                  if ("object" !== r(Wt[t])) {
                    var n,
                      e =
                        "gt" === t
                          ? ((n = u[t]),
                            Array.isArray(n) ? "matrix(" + n.join(" ") + ")" : "")
                          : u[t],
                      i = Wt[t];
                    o.e.setAttribute(i, e);
                  } else
                    Object.keys(Wt[t]).forEach(function (n) {
                      if (void 0 !== u[t][n]) {
                        var r = u[t][n],
                          e = Wt[t][n];
                        o.e.setAttribute(e, r);
                      }
                    });
              }),
              gt(u.r)
            );
          }
          return "none";
        }
      );
    }
  
    function Qt(t, r, e) {
      if (0 === t) return r;
      if (1 === t) return e;
      if (r && e) {
        var i = r.t;
        if (i === e.t)
          switch (r.t) {
            case "c":
              return {
                t: i,
                v: z(t, r.v, e.v)
              };
            case "g":
              if (r.r === e.r) {
                var u = {
                  t: i,
                  s: Xt(t, r.s, e.s),
                  r: r.r
                };
                return (
                  r.gt && e.gt && (u.gt = Y(t, r.gt, e.gt)),
                  r.c
                    ? ((u.c = q(t, r.c, e.c)), (u.rd = F(t, r.rd, e.rd)))
                    : r.f && ((u.f = q(t, r.f, e.f)), (u.to = q(t, r.to, e.to))),
                  u
                );
              }
          }
        if (("c" === r.t && "g" === e.t) || ("c" === e.t && "g" === r.t)) {
          var o = "c" === r.t ? r : e,
            a = "g" === r.t ? n({}, r) : n({}, e),
            l = a.s.map(function (t) {
              return {
                c: o.v,
                o: t.o
              };
            });
          return (a.s = "c" === r.t ? Xt(t, l, a.s) : Xt(t, a.s, l)), a;
        }
      }
      return N(t, r, e);
    }
  
    function Xt(t, n, r) {
      if (n.length === r.length)
        return n.map(function (n, e) {
          return Jt(t, n, r[e]);
        });
      for (var e = Math.max(n.length, r.length), i = [], u = 0; u < e; u++) {
        var o = Jt(t, n[Math.min(u, n.length - 1)], r[Math.min(u, r.length - 1)]);
        i.push(o);
      }
      return i;
    }
  
    function Jt(t, n, r) {
      return {
        o: L(t, n.o, r.o || 0),
        c: z(t, n.c, r.c || {})
      };
    }
  
    function Zt(t) {
      return t.replace(/-fill-([0-9]+)$/, function (t, n) {
        return "-fill-" + (+n + 1);
      });
    }
    var Kt = {
      blur: V,
      brightness: F,
      contrast: F,
      "drop-shadow": function (t, n, r) {
        return 0 === t
          ? n
          : 1 === t
          ? r
          : {
              blur: V(t, n.blur, r.blur),
              offset: q(t, n.offset, r.offset),
              color: z(t, n.color, r.color)
            };
      },
      grayscale: F,
      "hue-rotate": C,
      invert: F,
      opacity: F,
      saturate: F,
      sepia: F
    };
  
    function tn(t, n, r) {
      if (0 === t) return n;
      if (1 === t) return r;
      var e = n.length;
      if (e !== r.length) return N(t, n, r);
      for (var i, u = [], o = 0; o < e; o++) {
        if (n[o].type !== r[o].type) return n;
        if (!(i = Kt[n[o].type])) return N(t, n, r);
        u.push({
          type: n.type,
          value: i(t, n[o].value, r[o].value)
        });
      }
      return u;
    }
    var nn = {
      blur: function (t) {
        return t
          ? function (n) {
              t.setAttribute("stdDeviation", dt(n));
            }
          : null;
      },
      brightness: function (t, n, r) {
        return (t = en(r, n))
          ? function (n) {
              (n = ht(n)),
                t.map(function (t) {
                  return t.setAttribute("slope", n);
                });
            }
          : null;
      },
      contrast: function (t, n, r) {
        return (t = en(r, n))
          ? function (n) {
              var r = ht((1 - n) / 2);
              (n = ht(n)),
                t.map(function (t) {
                  t.setAttribute("slope", n), t.setAttribute("intercept", r);
                });
            }
          : null;
      },
      "drop-shadow": function (t, n, r) {
        var e = r.getElementById(n + "-blur");
        if (!e) return null;
        var i = r.getElementById(n + "-offset");
        if (!i) return null;
        var u = r.getElementById(n + "-flood");
        return u
          ? function (t) {
              e.setAttribute("stdDeviation", dt(t.blur)),
                i.setAttribute("dx", ht(t.offset.x)),
                i.setAttribute("dy", ht(t.offset.y)),
                u.setAttribute("flood-color", yt(t.color));
            }
          : null;
      },
      grayscale: function (t) {
        return t
          ? function (n) {
              t.setAttribute(
                "values",
                vt(
                  (function (t) {
                    return [
                      0.2126 + 0.7874 * (t = 1 - t),
                      0.7152 - 0.7152 * t,
                      0.0722 - 0.0722 * t,
                      0,
                      0,
                      0.2126 - 0.2126 * t,
                      0.7152 + 0.2848 * t,
                      0.0722 - 0.0722 * t,
                      0,
                      0,
                      0.2126 - 0.2126 * t,
                      0.7152 - 0.7152 * t,
                      0.0722 + 0.9278 * t,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0
                    ];
                  })(n)
                )
              );
            }
          : null;
      },
      "hue-rotate": function (t) {
        return t
          ? function (n) {
              return t.setAttribute("values", ht(n));
            }
          : null;
      },
      invert: function (t, n, r) {
        return (t = en(r, n))
          ? function (n) {
              (n = ht(n) + " " + ht(1 - n)),
                t.map(function (t) {
                  return t.setAttribute("tableValues", n);
                });
            }
          : null;
      },
      opacity: function (t, n, r) {
        return (t = r.getElementById(n + "-A"))
          ? function (n) {
              return t.setAttribute("tableValues", "0 " + ht(n));
            }
          : null;
      },
      saturate: function (t) {
        return t
          ? function (n) {
              return t.setAttribute("values", ht(n));
            }
          : null;
      },
      sepia: function (t) {
        return t
          ? function (n) {
              return t.setAttribute(
                "values",
                vt(
                  (function (t) {
                    return [
                      0.393 + 0.607 * (t = 1 - t),
                      0.769 - 0.769 * t,
                      0.189 - 0.189 * t,
                      0,
                      0,
                      0.349 - 0.349 * t,
                      0.686 + 0.314 * t,
                      0.168 - 0.168 * t,
                      0,
                      0,
                      0.272 - 0.272 * t,
                      0.534 - 0.534 * t,
                      0.131 + 0.869 * t,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0
                    ];
                  })(n)
                )
              );
            }
          : null;
      }
    };
    var rn = ["R", "G", "B"];
  
    function en(t, n) {
      var r = rn.map(function (r) {
        return t.getElementById(n + "-" + r) || null;
      });
      return -1 !== r.indexOf(null) ? null : r;
    }
    var un = {
        fill: Ht,
        "fill-opacity": Gt,
        stroke: Ht,
        "stroke-opacity": Gt,
        "stroke-width": Yt,
        "stroke-dashoffset": {
          f: ht,
          i: C
        },
        "stroke-dasharray": Ut,
        opacity: Gt,
        transform: function (t, n, e, i) {
          if (
            !(t = (function (t, n) {
              if (!t || "object" !== r(t)) return null;
              var e = !1;
              for (var i in t)
                t.hasOwnProperty(i) &&
                  (t[i] && t[i].length
                    ? (t[i].forEach(function (t) {
                        t.e && (t.e = n(t.e));
                      }),
                      (e = !0))
                    : delete t[i]);
              return e ? t : null;
            })(t, i))
          )
            return null;
          var u = function (r, i, u) {
            var o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return t[r] ? e(i, t[r], u) : n && n[r] ? n[r] : o;
          };
          return n && n.a && t.o
            ? function (n) {
                var r = e(n, t.o, Ft);
                return Vt.recomposeSelf(
                  r,
                  u("r", n, C, 0) + r.a,
                  u("k", n, q),
                  u("s", n, q),
                  u("t", n, q)
                ).toString();
              }
            : function (t) {
                return Vt.recomposeSelf(
                  u("o", t, Ct, null),
                  u("r", t, C, 0),
                  u("k", t, q),
                  u("s", t, q),
                  u("t", t, q)
                ).toString();
              };
        },
        "#filter": function (t, n, r, e, i, u, o, a) {
          if (!n.items || !t || !t.length) return null;
          var l = (function (t, n) {
            var r = (t = t.map(function (t) {
              return t && nn[t[0]]
                ? (n.getElementById(t[1]),
                  nn[t[0]](n.getElementById(t[1]), t[1], n))
                : null;
            })).length;
            return function (n) {
              for (var e = 0; e < r; e++) t[e] && t[e](n[e].value);
            };
          })(n.items, a);
          return l
            ? ((t = (function (t, n) {
                return t.map(function (t) {
                  return (t.e = n(t.e)), t;
                });
              })(t, e)),
              function (n) {
                l(r(n, t, tn));
              })
            : null;
        },
        "#line": zt,
        points: {
          f: vt,
          i: Y
        },
        d: Dt,
        r: Yt,
        "#size": mt,
        "#radius": pt,
        _: function (t, n) {
          if (Array.isArray(t)) for (var r = 0; r < t.length; r++) this[t[r]] = n;
          else this[t] = n;
        }
      },
      on = (function (t) {
        !(function (t, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          })),
            n && l(t, n);
        })(o, t);
        var n,
          r,
          i =
            ((n = o),
            (r = s()),
            function () {
              var t,
                e = a(n);
              if (r) {
                var i = a(this).constructor;
                t = Reflect.construct(e, arguments, i);
              } else t = e.apply(this, arguments);
              return c(this, t);
            });
  
        function o() {
          return e(this, o), i.apply(this, arguments);
        }
        return (
          u(o, null, [
            {
              key: "build",
              value: function (t) {
                var n = h(a(o), "build", this).call(this, t, un);
                if (!n) return null;
                var r = n.el,
                  e = n.options,
                  i = n.player;
                return (
                  (function (t, n, r) {
                    if ("click" === r.start) {
                      var e = function () {
                        switch (r.click) {
                          case "freeze":
                            return (
                              !t._running && t.reachedToEnd() && (t.offset = 0),
                              t._running ? t.pause() : t.play()
                            );
                          case "restart":
                            return t.offset > 0 ? t.restart() : t.play();
                          case "reverse":
                            var n = !t._rollingBack && t._running,
                              e = t.reachedToEnd();
                            return n || (e && 1 === t.fill)
                              ? (t.pause(),
                                e && (t.offset = t.duration - 1),
                                t._rollback())
                              : e
                              ? t.restart()
                              : t.play();
                          case "none":
                          default:
                            return !t._running && t.offset
                              ? t.restart()
                              : t.play();
                        }
                      };
                      return void n.addEventListener("click", e);
                    }
                    if ("hover" === r.start)
                      return (
                        n.addEventListener("mouseenter", function () {
                          return t.reachedToEnd() ? t.restart() : t.play();
                        }),
                        void n.addEventListener("mouseleave", function () {
                          switch (r.hover) {
                            case "freeze":
                              return t.pause();
                            case "reset":
                              return t.stop();
                            case "reverse":
                              return t.pause(), t._rollback();
                            case "none":
                            default:
                              return;
                          }
                        })
                      );
                    if ("scroll" === r.start)
                      return void new ct(n, r.scroll || 25, function (n) {
                        n
                          ? t.reachedToEnd()
                            ? t.restart()
                            : t.play()
                          : t.pause();
                      });
                    t.play();
                  })(i, r, e),
                  i
                );
              }
            }
          ]),
          o
        );
      })(st);
    return on.init(), on;
  });
  (function (s, i, o, w) {
    w[o] = w[o] || {};
    w[o][s] = w[o][s] || [];
    w[o][s].push(i);
  })(
    "91c80d77",
    {
      root: "e1NyoXeMEFL1",
      animations: [
        {
          elements: {
            e1NyoXeMEFL334: {
              "stroke-dashoffset": [
                {
                  t: 0,
                  v: 9108,
                  e: [0.42, 0, 0.58, 1]
                },
                {
                  t: 3000,
                  v: 0
                }
              ]
            }
          },
          s:
            "MDHA1M2M0NmJhZUGJlYmJhYWJkYYjJiOENiNzZQiODM3Yzc5NzIk3OTc1NmJhZRGIyU2JiYWVhVY2JkYjJiOGIA3NmI4MzdhRTPc1NmJiMmJkYPWViYmFhYmRiQMmI4YjdCYmMS2YjgzNzk3NTOZiYWZiMmI1YPjU2YjgzN2E3BNTZiYWFiNWJLkYWViYmI3YWRFiZGFlNmI4MR2FmYWFiNWJjKYWU3NTZiYmNWiOWFlYWVhZDHZiODNMN2FjNKg|"
        }
      ],
      options: "MDQAxMDgyMjlXNB2E3YjY4Nzk3XYjI5NDEyOTcWzNzZVNjg2YjHI5Qjg0"
    },
    "__SVGATOR_PLAYER__",
    window
  );
  