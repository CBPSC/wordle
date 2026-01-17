function Fs(e, s) {
  const t = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let a = 0; a < o.length; a++)
    t[o[a]] = !0;
  return s ? (a) => !!t[a.toLowerCase()] : (a) => !!t[a];
}
const Gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xr = /* @__PURE__ */ Fs(Gr);
function Fa(e) {
  return !!e || e === "";
}
function jo(e) {
  if (A(e)) {
    const s = {};
    for (let t = 0; t < e.length; t++) {
      const o = e[t], a = ne(o) ? si(o) : jo(o);
      if (a)
        for (const r in a)
          s[r] = a[r];
    }
    return s;
  } else {
    if (ne(e))
      return e;
    if (J(e))
      return e;
  }
}
const $r = /;(?![^(]*\))/g, ei = /:(.+)/;
function si(e) {
  const s = {};
  return e.split($r).forEach((t) => {
    if (t) {
      const o = t.split(ei);
      o.length > 1 && (s[o[0].trim()] = o[1].trim());
    }
  }), s;
}
function zo(e) {
  let s = "";
  if (ne(e))
    s = e;
  else if (A(e))
    for (let t = 0; t < e.length; t++) {
      const o = zo(e[t]);
      o && (s += o + " ");
    }
  else if (J(e))
    for (const t in e)
      e[t] && (s += t + " ");
  return s.trim();
}
const Hs = (e) => ne(e) ? e : e == null ? "" : A(e) || J(e) && (e.toString === Ba || !_(e.toString)) ? JSON.stringify(e, Ma, 2) : String(e), Ma = (e, s) => s && s.__v_isRef ? Ma(e, s.value) : ks(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce((t, [o, a]) => (t[`${o} =>`] = a, t), {})
} : Ka(s) ? {
  [`Set(${s.size})`]: [...s.values()]
} : J(s) && !A(s) && !Wa(s) ? String(s) : s, H = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Rs = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
}, Pa = () => !1, ti = /^on[^a-z]/, rt = (e) => ti.test(e), xt = (e) => e.startsWith("onUpdate:"), ae = Object.assign, Oo = (e, s) => {
  const t = e.indexOf(s);
  t > -1 && e.splice(t, 1);
}, oi = Object.prototype.hasOwnProperty, F = (e, s) => oi.call(e, s), A = Array.isArray, ks = (e) => Dt(e) === "[object Map]", Ka = (e) => Dt(e) === "[object Set]", _ = (e) => typeof e == "function", ne = (e) => typeof e == "string", Vo = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", qo = (e) => J(e) && _(e.then) && _(e.catch), Ba = Object.prototype.toString, Dt = (e) => Ba.call(e), Do = (e) => Dt(e).slice(8, -1), Wa = (e) => Dt(e) === "[object Object]", Co = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mt = /* @__PURE__ */ Fs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ai = /* @__PURE__ */ Fs("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Ct = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return (t) => s[t] || (s[t] = e(t));
}, ri = /-(\w)/g, as = Ct((e) => e.replace(ri, (s, t) => t ? t.toUpperCase() : "")), ii = /\B([A-Z])/g, Ue = Ct((e) => e.replace(ii, "-$1").toLowerCase()), It = Ct((e) => e.charAt(0).toUpperCase() + e.slice(1)), hs = Ct((e) => e ? `on${It(e)}` : ""), Zs = (e, s) => !Object.is(e, s), Ps = (e, s) => {
  for (let t = 0; t < e.length; t++)
    e[t](s);
}, Et = (e, s, t) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Nt = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
};
let ea;
const La = () => ea || (ea = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function so(e, ...s) {
  console.warn(`[Vue warn] ${e}`, ...s);
}
let Pe;
class ni {
  constructor(s = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !s && Pe && (this.parent = Pe, this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1);
  }
  run(s) {
    if (this.active) {
      const t = Pe;
      try {
        return Pe = this, s();
      } finally {
        Pe = t;
      }
    } else
      ({}).NODE_ENV !== "production" && so("cannot run an inactive effect scope.");
  }
  on() {
    Pe = this;
  }
  off() {
    Pe = this.parent;
  }
  stop(s) {
    if (this.active) {
      let t, o;
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].stop();
      for (t = 0, o = this.cleanups.length; t < o; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].stop(!0);
      if (this.parent && !s) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.active = !1;
    }
  }
}
function li(e, s = Pe) {
  s && s.active && s.effects.push(e);
}
const Gs = (e) => {
  const s = new Set(e);
  return s.w = 0, s.n = 0, s;
}, Ha = (e) => (e.w & rs) > 0, Ya = (e) => (e.n & rs) > 0, ui = ({ deps: e }) => {
  if (e.length)
    for (let s = 0; s < e.length; s++)
      e[s].w |= rs;
}, ci = (e) => {
  const { deps: s } = e;
  if (s.length) {
    let t = 0;
    for (let o = 0; o < s.length; o++) {
      const a = s[o];
      Ha(a) && !Ya(a) ? a.delete(e) : s[t++] = a, a.w &= ~rs, a.n &= ~rs;
    }
    s.length = t;
  }
}, to = /* @__PURE__ */ new WeakMap();
let Ws = 0, rs = 1;
const oo = 30;
let be;
const ws = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), ao = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class Io {
  constructor(s, t = null, o) {
    this.fn = s, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, li(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let s = be, t = os;
    for (; s; ) {
      if (s === this)
        return;
      s = s.parent;
    }
    try {
      return this.parent = be, be = this, os = !0, rs = 1 << ++Ws, Ws <= oo ? ui(this) : sa(this), this.fn();
    } finally {
      Ws <= oo && ci(this), rs = 1 << --Ws, be = this.parent, os = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    be === this ? this.deferStop = !0 : this.active && (sa(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function sa(e) {
  const { deps: s } = e;
  if (s.length) {
    for (let t = 0; t < s.length; t++)
      s[t].delete(e);
    s.length = 0;
  }
}
let os = !0;
const Ja = [];
function zs() {
  Ja.push(os), os = !1;
}
function Os() {
  const e = Ja.pop();
  os = e === void 0 ? !0 : e;
}
function je(e, s, t) {
  if (os && be) {
    let o = to.get(e);
    o || to.set(e, o = /* @__PURE__ */ new Map());
    let a = o.get(t);
    a || o.set(t, a = Gs());
    const r = {}.NODE_ENV !== "production" ? { effect: be, target: e, type: s, key: t } : void 0;
    ro(a, r);
  }
}
function ro(e, s) {
  let t = !1;
  Ws <= oo ? Ya(e) || (e.n |= rs, t = !Ha(e)) : t = !e.has(be), t && (e.add(be), be.deps.push(e), {}.NODE_ENV !== "production" && be.onTrack && be.onTrack(Object.assign({ effect: be }, s)));
}
function Qe(e, s, t, o, a, r) {
  const i = to.get(e);
  if (!i)
    return;
  let l = [];
  if (s === "clear")
    l = [...i.values()];
  else if (t === "length" && A(e))
    i.forEach((c, p) => {
      (p === "length" || p >= o) && l.push(c);
    });
  else
    switch (t !== void 0 && l.push(i.get(t)), s) {
      case "add":
        A(e) ? Co(t) && l.push(i.get("length")) : (l.push(i.get(ws)), ks(e) && l.push(i.get(ao)));
        break;
      case "delete":
        A(e) || (l.push(i.get(ws)), ks(e) && l.push(i.get(ao)));
        break;
      case "set":
        ks(e) && l.push(i.get(ws));
        break;
    }
  const u = {}.NODE_ENV !== "production" ? { target: e, type: s, key: t, newValue: o, oldValue: a, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && ({}.NODE_ENV !== "production" ? Is(l[0], u) : Is(l[0]));
  else {
    const c = [];
    for (const p of l)
      p && c.push(...p);
    ({}).NODE_ENV !== "production" ? Is(Gs(c), u) : Is(Gs(c));
  }
}
function Is(e, s) {
  const t = A(e) ? e : [...e];
  for (const o of t)
    o.computed && ta(o, s);
  for (const o of t)
    o.computed || ta(o, s);
}
function ta(e, s) {
  (e !== be || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ae({ effect: e }, s)), e.scheduler ? e.scheduler() : e.run());
}
const di = /* @__PURE__ */ Fs("__proto__,__v_isRef,__isVue"), Qa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vo)
), fi = /* @__PURE__ */ Tt(), pi = /* @__PURE__ */ Tt(!1, !0), hi = /* @__PURE__ */ Tt(!0), mi = /* @__PURE__ */ Tt(!0, !0), oa = /* @__PURE__ */ yi();
function yi() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((s) => {
    e[s] = function(...t) {
      const o = U(this);
      for (let r = 0, i = this.length; r < i; r++)
        je(o, "get", r + "");
      const a = o[s](...t);
      return a === -1 || a === !1 ? o[s](...t.map(U)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((s) => {
    e[s] = function(...t) {
      zs();
      const o = U(this)[s].apply(this, t);
      return Os(), o;
    };
  }), e;
}
function Tt(e = !1, s = !1) {
  return function(o, a, r) {
    if (a === "__v_isReactive")
      return !e;
    if (a === "__v_isReadonly")
      return e;
    if (a === "__v_isShallow")
      return s;
    if (a === "__v_raw" && r === (e ? s ? or : tr : s ? sr : er).get(o))
      return o;
    const i = A(o);
    if (!e && i && F(oa, a))
      return Reflect.get(oa, a, r);
    const l = Reflect.get(o, a, r);
    return (Vo(a) ? Qa.has(a) : di(a)) || (e || je(o, "get", a), s) ? l : de(l) ? i && Co(a) ? l : l.value : J(l) ? e ? ar(l) : Ao(l) : l;
  };
}
const gi = /* @__PURE__ */ Za(), bi = /* @__PURE__ */ Za(!0);
function Za(e = !1) {
  return function(t, o, a, r) {
    let i = t[o];
    if (is(i) && de(i) && !de(a))
      return !1;
    if (!e && (!jt(a) && !is(a) && (i = U(i), a = U(a)), !A(t) && de(i) && !de(a)))
      return i.value = a, !0;
    const l = A(t) && Co(o) ? Number(o) < t.length : F(t, o), u = Reflect.set(t, o, a, r);
    return t === U(r) && (l ? Zs(a, i) && Qe(t, "set", o, a, i) : Qe(t, "add", o, a)), u;
  };
}
function ki(e, s) {
  const t = F(e, s), o = e[s], a = Reflect.deleteProperty(e, s);
  return a && t && Qe(e, "delete", s, void 0, o), a;
}
function wi(e, s) {
  const t = Reflect.has(e, s);
  return (!Vo(s) || !Qa.has(s)) && je(e, "has", s), t;
}
function vi(e) {
  return je(e, "iterate", A(e) ? "length" : ws), Reflect.ownKeys(e);
}
const Ga = {
  get: fi,
  set: gi,
  deleteProperty: ki,
  has: wi,
  ownKeys: vi
}, Xa = {
  get: hi,
  set(e, s) {
    return {}.NODE_ENV !== "production" && so(`Set operation on key "${String(s)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, s) {
    return {}.NODE_ENV !== "production" && so(`Delete operation on key "${String(s)}" failed: target is readonly.`, e), !0;
  }
}, xi = /* @__PURE__ */ ae({}, Ga, {
  get: pi,
  set: bi
}), Ei = /* @__PURE__ */ ae({}, Xa, {
  get: mi
}), To = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function ct(e, s, t = !1, o = !1) {
  e = e.__v_raw;
  const a = U(e), r = U(s);
  t || (s !== r && je(a, "get", s), je(a, "get", r));
  const { has: i } = At(a), l = o ? To : t ? Ro : Xs;
  if (i.call(a, s))
    return l(e.get(s));
  if (i.call(a, r))
    return l(e.get(r));
  e !== a && e.get(s);
}
function dt(e, s = !1) {
  const t = this.__v_raw, o = U(t), a = U(e);
  return s || (e !== a && je(o, "has", e), je(o, "has", a)), e === a ? t.has(e) : t.has(e) || t.has(a);
}
function ft(e, s = !1) {
  return e = e.__v_raw, !s && je(U(e), "iterate", ws), Reflect.get(e, "size", e);
}
function aa(e) {
  e = U(e);
  const s = U(this);
  return At(s).has.call(s, e) || (s.add(e), Qe(s, "add", e, e)), this;
}
function ra(e, s) {
  s = U(s);
  const t = U(this), { has: o, get: a } = At(t);
  let r = o.call(t, e);
  r ? {}.NODE_ENV !== "production" && $a(t, o, e) : (e = U(e), r = o.call(t, e));
  const i = a.call(t, e);
  return t.set(e, s), r ? Zs(s, i) && Qe(t, "set", e, s, i) : Qe(t, "add", e, s), this;
}
function ia(e) {
  const s = U(this), { has: t, get: o } = At(s);
  let a = t.call(s, e);
  a ? {}.NODE_ENV !== "production" && $a(s, t, e) : (e = U(e), a = t.call(s, e));
  const r = o ? o.call(s, e) : void 0, i = s.delete(e);
  return a && Qe(s, "delete", e, void 0, r), i;
}
function na() {
  const e = U(this), s = e.size !== 0, t = {}.NODE_ENV !== "production" ? ks(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return s && Qe(e, "clear", void 0, void 0, t), o;
}
function pt(e, s) {
  return function(o, a) {
    const r = this, i = r.__v_raw, l = U(i), u = s ? To : e ? Ro : Xs;
    return !e && je(l, "iterate", ws), i.forEach((c, p) => o.call(a, u(c), u(p), r));
  };
}
function ht(e, s, t) {
  return function(...o) {
    const a = this.__v_raw, r = U(a), i = ks(r), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, c = a[e](...o), p = t ? To : s ? Ro : Xs;
    return !s && je(r, "iterate", u ? ao : ws), {
      next() {
        const { value: f, done: h } = c.next();
        return h ? { value: f, done: h } : {
          value: l ? [p(f[0]), p(f[1])] : p(f),
          done: h
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ge(e) {
  return function(...s) {
    if ({}.NODE_ENV !== "production") {
      const t = s[0] ? `on key "${s[0]}" ` : "";
      console.warn(`${It(e)} operation ${t}failed: target is readonly.`, U(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ni() {
  const e = {
    get(r) {
      return ct(this, r);
    },
    get size() {
      return ft(this);
    },
    has: dt,
    add: aa,
    set: ra,
    delete: ia,
    clear: na,
    forEach: pt(!1, !1)
  }, s = {
    get(r) {
      return ct(this, r, !1, !0);
    },
    get size() {
      return ft(this);
    },
    has: dt,
    add: aa,
    set: ra,
    delete: ia,
    clear: na,
    forEach: pt(!1, !0)
  }, t = {
    get(r) {
      return ct(this, r, !0);
    },
    get size() {
      return ft(this, !0);
    },
    has(r) {
      return dt.call(this, r, !0);
    },
    add: Ge("add"),
    set: Ge("set"),
    delete: Ge("delete"),
    clear: Ge("clear"),
    forEach: pt(!0, !1)
  }, o = {
    get(r) {
      return ct(this, r, !0, !0);
    },
    get size() {
      return ft(this, !0);
    },
    has(r) {
      return dt.call(this, r, !0);
    },
    add: Ge("add"),
    set: Ge("set"),
    delete: Ge("delete"),
    clear: Ge("clear"),
    forEach: pt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = ht(r, !1, !1), t[r] = ht(r, !0, !1), s[r] = ht(r, !1, !0), o[r] = ht(r, !0, !0);
  }), [
    e,
    t,
    s,
    o
  ];
}
const [ji, zi, Oi, Vi] = /* @__PURE__ */ Ni();
function Rt(e, s) {
  const t = s ? e ? Vi : Oi : e ? zi : ji;
  return (o, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? o : Reflect.get(F(t, a) && a in o ? t : o, a, r);
}
const qi = {
  get: /* @__PURE__ */ Rt(!1, !1)
}, Di = {
  get: /* @__PURE__ */ Rt(!1, !0)
}, Ci = {
  get: /* @__PURE__ */ Rt(!0, !1)
}, Ii = {
  get: /* @__PURE__ */ Rt(!0, !0)
};
function $a(e, s, t) {
  const o = U(t);
  if (o !== t && s.call(e, o)) {
    const a = Do(e);
    console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const er = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap();
function Ti(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ai(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ti(Do(e));
}
function Ao(e) {
  return is(e) ? e : _t(e, !1, Ga, qi, er);
}
function Ri(e) {
  return _t(e, !1, xi, Di, sr);
}
function ar(e) {
  return _t(e, !0, Xa, Ci, tr);
}
function Ts(e) {
  return _t(e, !0, Ei, Ii, or);
}
function _t(e, s, t, o, a) {
  if (!J(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const i = Ai(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : t);
  return a.set(e, l), l;
}
function vs(e) {
  return is(e) ? vs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function is(e) {
  return !!(e && e.__v_isReadonly);
}
function jt(e) {
  return !!(e && e.__v_isShallow);
}
function io(e) {
  return vs(e) || is(e);
}
function U(e) {
  const s = e && e.__v_raw;
  return s ? U(s) : e;
}
function rr(e) {
  return Et(e, "__v_skip", !0), e;
}
const Xs = (e) => J(e) ? Ao(e) : e, Ro = (e) => J(e) ? ar(e) : e;
function ir(e) {
  os && be && (e = U(e), {}.NODE_ENV !== "production" ? ro(e.dep || (e.dep = Gs()), {
    target: e,
    type: "get",
    key: "value"
  }) : ro(e.dep || (e.dep = Gs())));
}
function nr(e, s) {
  e = U(e), e.dep && ({}.NODE_ENV !== "production" ? Is(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: s
  }) : Is(e.dep));
}
function de(e) {
  return !!(e && e.__v_isRef === !0);
}
function $(e) {
  return _i(e, !1);
}
function _i(e, s) {
  return de(e) ? e : new Ui(e, s);
}
class Ui {
  constructor(s, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? s : U(s), this._value = t ? s : Xs(s);
  }
  get value() {
    return ir(this), this._value;
  }
  set value(s) {
    const t = this.__v_isShallow || jt(s) || is(s);
    s = t ? s : U(s), Zs(s, this._rawValue) && (this._rawValue = s, this._value = t ? s : Xs(s), nr(this, s));
  }
}
function Si(e) {
  return de(e) ? e.value : e;
}
const Fi = {
  get: (e, s, t) => Si(Reflect.get(e, s, t)),
  set: (e, s, t, o) => {
    const a = e[s];
    return de(a) && !de(t) ? (a.value = t, !0) : Reflect.set(e, s, t, o);
  }
};
function lr(e) {
  return vs(e) ? e : new Proxy(e, Fi);
}
var ur;
class Mi {
  constructor(s, t, o, a) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this[ur] = !1, this._dirty = !0, this.effect = new Io(s, () => {
      this._dirty || (this._dirty = !0, nr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = o;
  }
  get value() {
    const s = U(this);
    return ir(s), (s._dirty || !s._cacheable) && (s._dirty = !1, s._value = s.effect.run()), s._value;
  }
  set value(s) {
    this._setter(s);
  }
}
ur = "__v_isReadonly";
function Pi(e, s, t = !1) {
  let o, a;
  const r = _(e);
  r ? (o = e, a = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : fe) : (o = e.get, a = e.set);
  const i = new Mi(o, a, r || !a, t);
  return {}.NODE_ENV !== "production" && s && !t && (i.effect.onTrack = s.onTrack, i.effect.onTrigger = s.onTrigger), i;
}
const xs = [];
function yt(e) {
  xs.push(e);
}
function gt() {
  xs.pop();
}
function N(e, ...s) {
  zs();
  const t = xs.length ? xs[xs.length - 1].component : null, o = t && t.appContext.config.warnHandler, a = Ki();
  if (o)
    Je(o, t, 11, [
      e + s.join(""),
      t && t.proxy,
      a.map(({ vnode: r }) => `at <${Bt(t, r.type)}>`).join(`
`),
      a
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...s];
    a.length && r.push(`
`, ...Bi(a)), console.warn(...r);
  }
  Os();
}
function Ki() {
  let e = xs[xs.length - 1];
  if (!e)
    return [];
  const s = [];
  for (; e; ) {
    const t = s[0];
    t && t.vnode === e ? t.recurseCount++ : s.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return s;
}
function Bi(e) {
  const s = [];
  return e.forEach((t, o) => {
    s.push(...o === 0 ? [] : [`
`], ...Wi(t));
  }), s;
}
function Wi({ vnode: e, recurseCount: s }) {
  const t = s > 0 ? `... (${s} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, a = ` at <${Bt(e.component, e.type, o)}`, r = ">" + t;
  return e.props ? [a, ...Li(e.props), r] : [a + r];
}
function Li(e) {
  const s = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((o) => {
    s.push(...cr(o, e[o]));
  }), t.length > 3 && s.push(" ..."), s;
}
function cr(e, s, t) {
  return ne(s) ? (s = JSON.stringify(s), t ? s : [`${e}=${s}`]) : typeof s == "number" || typeof s == "boolean" || s == null ? t ? s : [`${e}=${s}`] : de(s) ? (s = cr(e, U(s.value), !0), t ? s : [`${e}=Ref<`, s, ">"]) : _(s) ? [`${e}=fn${s.name ? `<${s.name}>` : ""}`] : (s = U(s), t ? s : [`${e}=`, s]);
}
const _o = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Je(e, s, t, o) {
  let a;
  try {
    a = o ? e(...o) : e();
  } catch (r) {
    Ut(r, s, t);
  }
  return a;
}
function De(e, s, t, o) {
  if (_(e)) {
    const r = Je(e, s, t, o);
    return r && qo(r) && r.catch((i) => {
      Ut(i, s, t);
    }), r;
  }
  const a = [];
  for (let r = 0; r < e.length; r++)
    a.push(De(e[r], s, t, o));
  return a;
}
function Ut(e, s, t, o = !0) {
  const a = s ? s.vnode : null;
  if (s) {
    let r = s.parent;
    const i = s.proxy, l = {}.NODE_ENV !== "production" ? _o[t] : t;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let p = 0; p < c.length; p++)
          if (c[p](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const u = s.appContext.config.errorHandler;
    if (u) {
      Je(u, null, 10, [e, i, l]);
      return;
    }
  }
  Hi(e, t, a, o);
}
function Hi(e, s, t, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const a = _o[s];
    if (t && yt(t), N(`Unhandled error${a ? ` during execution of ${a}` : ""}`), t && gt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let $s = !1, no = !1;
const me = [];
let Be = 0;
const _s = [];
let Ke = null, es = 0;
const dr = /* @__PURE__ */ Promise.resolve();
let Uo = null;
const Yi = 100;
function fr(e) {
  const s = Uo || dr;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Ji(e) {
  let s = Be + 1, t = me.length;
  for (; s < t; ) {
    const o = s + t >>> 1;
    et(me[o]) < e ? s = o + 1 : t = o;
  }
  return s;
}
function St(e) {
  (!me.length || !me.includes(e, $s && e.allowRecurse ? Be + 1 : Be)) && (e.id == null ? me.push(e) : me.splice(Ji(e.id), 0, e), pr());
}
function pr() {
  !$s && !no && (no = !0, Uo = dr.then(yr));
}
function Qi(e) {
  const s = me.indexOf(e);
  s > Be && me.splice(s, 1);
}
function hr(e) {
  A(e) ? _s.push(...e) : (!Ke || !Ke.includes(e, e.allowRecurse ? es + 1 : es)) && _s.push(e), pr();
}
function la(e, s = $s ? Be + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); s < me.length; s++) {
    const t = me[s];
    if (t && t.pre) {
      if ({}.NODE_ENV !== "production" && So(e, t))
        continue;
      me.splice(s, 1), s--, t();
    }
  }
}
function mr(e) {
  if (_s.length) {
    const s = [...new Set(_s)];
    if (_s.length = 0, Ke) {
      Ke.push(...s);
      return;
    }
    for (Ke = s, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ke.sort((t, o) => et(t) - et(o)), es = 0; es < Ke.length; es++)
      ({}).NODE_ENV !== "production" && So(e, Ke[es]) || Ke[es]();
    Ke = null, es = 0;
  }
}
const et = (e) => e.id == null ? 1 / 0 : e.id, Zi = (e, s) => {
  const t = et(e) - et(s);
  if (t === 0) {
    if (e.pre && !s.pre)
      return -1;
    if (s.pre && !e.pre)
      return 1;
  }
  return t;
};
function yr(e) {
  no = !1, $s = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), me.sort(Zi);
  const s = {}.NODE_ENV !== "production" ? (t) => So(e, t) : fe;
  try {
    for (Be = 0; Be < me.length; Be++) {
      const t = me[Be];
      if (t && t.active !== !1) {
        if ({}.NODE_ENV !== "production" && s(t))
          continue;
        Je(t, null, 14);
      }
    }
  } finally {
    Be = 0, me.length = 0, mr(e), $s = !1, Uo = null, (me.length || _s.length) && yr(e);
  }
}
function So(e, s) {
  if (!e.has(s))
    e.set(s, 1);
  else {
    const t = e.get(s);
    if (t > Yi) {
      const o = s.ownerInstance, a = o && Yr(o.type);
      return N(`Maximum recursive updates exceeded${a ? ` in component <${a}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(s, t + 1);
  }
}
let Es = !1;
const Cs = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (La().__VUE_HMR_RUNTIME__ = {
  createRecord: Ht(gr),
  rerender: Ht($i),
  reload: Ht(en)
});
const js = /* @__PURE__ */ new Map();
function Gi(e) {
  const s = e.type.__hmrId;
  let t = js.get(s);
  t || (gr(s, e.type), t = js.get(s)), t.instances.add(e);
}
function Xi(e) {
  js.get(e.type.__hmrId).instances.delete(e);
}
function gr(e, s) {
  return js.has(e) ? !1 : (js.set(e, {
    initialDef: Ys(s),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ys(e) {
  return Jr(e) ? e.__vccOpts : e;
}
function $i(e, s) {
  const t = js.get(e);
  !t || (t.initialDef.render = s, [...t.instances].forEach((o) => {
    s && (o.render = s, Ys(o.type).render = s), o.renderCache = [], Es = !0, o.update(), Es = !1;
  }));
}
function en(e, s) {
  const t = js.get(e);
  if (!t)
    return;
  s = Ys(s), ua(t.initialDef, s);
  const o = [...t.instances];
  for (const a of o) {
    const r = Ys(a.type);
    Cs.has(r) || (r !== t.initialDef && ua(r, s), Cs.add(r)), a.appContext.optionsCache.delete(a.type), a.ceReload ? (Cs.add(r), a.ceReload(s.styles), Cs.delete(r)) : a.parent ? (St(a.parent.update), a.parent.type.__asyncLoader && a.parent.ceReload && a.parent.ceReload(s.styles)) : a.appContext.reload ? a.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  hr(() => {
    for (const a of o)
      Cs.delete(Ys(a.type));
  });
}
function ua(e, s) {
  ae(e, s);
  for (const t in e)
    t !== "__file" && !(t in s) && delete e[t];
}
function Ht(e) {
  return (s, t) => {
    try {
      return e(s, t);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ys, Ls = [], lo = !1;
function it(e, ...s) {
  ys ? ys.emit(e, ...s) : lo || Ls.push({ event: e, args: s });
}
function br(e, s) {
  var t, o;
  ys = e, ys ? (ys.enabled = !0, Ls.forEach(({ event: a, args: r }) => ys.emit(a, ...r)), Ls = []) : typeof window < "u" && window.HTMLElement && !(!((o = (t = window.navigator) === null || t === void 0 ? void 0 : t.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((s.__VUE_DEVTOOLS_HOOK_REPLAY__ = s.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    br(r, s);
  }), setTimeout(() => {
    ys || (s.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, lo = !0, Ls = []);
  }, 3e3)) : (lo = !0, Ls = []);
}
function sn(e, s) {
  it("app:init", e, s, {
    Fragment: he,
    Text: Pt,
    Comment: pe,
    Static: Js
  });
}
function tn(e) {
  it("app:unmount", e);
}
const on = /* @__PURE__ */ Fo("component:added"), kr = /* @__PURE__ */ Fo("component:updated"), an = /* @__PURE__ */ Fo("component:removed");
function Fo(e) {
  return (s) => {
    it(e, s.appContext.app, s.uid, s.parent ? s.parent.uid : void 0, s);
  };
}
const rn = /* @__PURE__ */ wr("perf:start"), nn = /* @__PURE__ */ wr("perf:end");
function wr(e) {
  return (s, t, o) => {
    it(e, s.appContext.app, s.uid, s, t, o);
  };
}
function ln(e, s, t) {
  it("component:emit", e.appContext.app, e, s, t);
}
function un(e, s, ...t) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || H;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [f] } = e;
    if (p)
      if (!(s in p))
        (!f || !(hs(s) in f)) && N(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${hs(s)}" prop.`);
      else {
        const h = p[s];
        _(h) && (h(...t) || N(`Invalid event arguments: event validation failed for event "${s}".`));
      }
  }
  let a = t;
  const r = s.startsWith("update:"), i = r && s.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: h } = o[p] || H;
    h && (a = t.map((v) => v.trim())), f && (a = t.map(Nt));
  }
  if ({}.NODE_ENV !== "production" && ln(e, s, a), {}.NODE_ENV !== "production") {
    const p = s.toLowerCase();
    p !== s && o[hs(p)] && N(`Event "${p}" is emitted in component ${Bt(e, e.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ue(s)}" instead of "${s}".`);
  }
  let l, u = o[l = hs(s)] || o[l = hs(as(s))];
  !u && r && (u = o[l = hs(Ue(s))]), u && De(u, e, 6, a);
  const c = o[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, De(c, e, 6, a);
  }
}
function vr(e, s, t = !1) {
  const o = s.emitsCache, a = o.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let i = {}, l = !1;
  if (!_(e)) {
    const u = (c) => {
      const p = vr(c, s, !0);
      p && (l = !0, ae(i, p));
    };
    !t && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (J(e) && o.set(e, null), null) : (A(r) ? r.forEach((u) => i[u] = null) : ae(i, r), J(e) && o.set(e, i), i);
}
function Ft(e, s) {
  return !e || !rt(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), F(e, s[0].toLowerCase() + s.slice(1)) || F(e, Ue(s)) || F(e, s));
}
let qe = null, xr = null;
function zt(e) {
  const s = qe;
  return qe = e, xr = e && e.type.__scopeId || null, s;
}
function Mo(e, s = qe, t) {
  if (!s || e._n)
    return e;
  const o = (...a) => {
    o._d && va(-1);
    const r = zt(s), i = e(...a);
    return zt(r), o._d && va(1), {}.NODE_ENV !== "production" && kr(s), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let uo = !1;
function Ot() {
  uo = !0;
}
function Yt(e) {
  const { type: s, vnode: t, proxy: o, withProxy: a, props: r, propsOptions: [i], slots: l, attrs: u, emit: c, render: p, renderCache: f, data: h, setupState: v, ctx: E, inheritAttrs: z } = e;
  let C, P;
  const T = zt(e);
  ({}).NODE_ENV !== "production" && (uo = !1);
  try {
    if (t.shapeFlag & 4) {
      const G = a || o;
      C = Ae(p.call(G, G, f, r, v, h, E)), P = u;
    } else {
      const G = s;
      ({}).NODE_ENV !== "production" && u === r && Ot(), C = Ae(G.length > 1 ? G(r, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return Ot(), u;
        },
        slots: l,
        emit: c
      } : { attrs: u, slots: l, emit: c }) : G(r, null)), P = s.props ? u : dn(u);
    }
  } catch (G) {
    Qs.length = 0, Ut(G, e, 1), C = ue(pe);
  }
  let Q = C, le;
  if ({}.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([Q, le] = cn(C)), P && z !== !1) {
    const G = Object.keys(P), { shapeFlag: ze } = Q;
    if (G.length) {
      if (ze & 7)
        i && G.some(xt) && (P = fn(P, i)), Q = We(Q, P);
      else if ({}.NODE_ENV !== "production" && !uo && Q.type !== pe) {
        const ke = Object.keys(u), S = [], Z = [];
        for (let W = 0, ie = ke.length; W < ie; W++) {
          const O = ke[W];
          rt(O) ? xt(O) || S.push(O[2].toLowerCase() + O.slice(3)) : Z.push(O);
        }
        Z.length && N(`Extraneous non-props attributes (${Z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), S.length && N(`Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return t.dirs && ({}.NODE_ENV !== "production" && !ca(Q) && N("Runtime directive used on component with non-element root node. The directives will not function as intended."), Q = We(Q), Q.dirs = Q.dirs ? Q.dirs.concat(t.dirs) : t.dirs), t.transition && ({}.NODE_ENV !== "production" && !ca(Q) && N("Component inside <Transition> renders non-element root node that cannot be animated."), Q.transition = t.transition), {}.NODE_ENV !== "production" && le ? le(Q) : C = Q, zt(T), C;
}
const cn = (e) => {
  const s = e.children, t = e.dynamicChildren, o = Er(s);
  if (!o)
    return [e, void 0];
  const a = s.indexOf(o), r = t ? t.indexOf(o) : -1, i = (l) => {
    s[a] = l, t && (r > -1 ? t[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...t, l]));
  };
  return [Ae(o), i];
};
function Er(e) {
  let s;
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    if (tt(o)) {
      if (o.type !== pe || o.children === "v-if") {
        if (s)
          return;
        s = o;
      }
    } else
      return;
  }
  return s;
}
const dn = (e) => {
  let s;
  for (const t in e)
    (t === "class" || t === "style" || rt(t)) && ((s || (s = {}))[t] = e[t]);
  return s;
}, fn = (e, s) => {
  const t = {};
  for (const o in e)
    (!xt(o) || !(o.slice(9) in s)) && (t[o] = e[o]);
  return t;
}, ca = (e) => e.shapeFlag & 7 || e.type === pe;
function pn(e, s, t) {
  const { props: o, children: a, component: r } = e, { props: i, children: l, patchFlag: u } = s, c = r.emitsOptions;
  if ({}.NODE_ENV !== "production" && (a || l) && Es || s.dirs || s.transition)
    return !0;
  if (t && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? da(o, i, c) : !!i;
    if (u & 8) {
      const p = s.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        const h = p[f];
        if (i[h] !== o[h] && !Ft(c, h))
          return !0;
      }
    }
  } else
    return (a || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? da(o, i, c) : !0 : !!i;
  return !1;
}
function da(e, s, t) {
  const o = Object.keys(s);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < o.length; a++) {
    const r = o[a];
    if (s[r] !== e[r] && !Ft(t, r))
      return !0;
  }
  return !1;
}
function hn({ vnode: e, parent: s }, t) {
  for (; s && s.subTree === e; )
    (e = s.vnode).el = t, s = s.parent;
}
const mn = (e) => e.__isSuspense;
function yn(e, s) {
  s && s.pendingBranch ? A(e) ? s.effects.push(...e) : s.effects.push(e) : hr(e);
}
function gn(e, s) {
  if (!ce)
    ({}).NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let t = ce.provides;
    const o = ce.parent && ce.parent.provides;
    o === t && (t = ce.provides = Object.create(o)), t[e] = s;
  }
}
function Jt(e, s, t = !1) {
  const o = ce || qe;
  if (o) {
    const a = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return t && _(s) ? s.call(o.proxy) : s;
    ({}).NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
function bn(e, s) {
  return Po(e, null, {}.NODE_ENV !== "production" ? Object.assign(Object.assign({}, s), { flush: "post" }) : { flush: "post" });
}
const fa = {};
function Qt(e, s, t) {
  return {}.NODE_ENV !== "production" && !_(s) && N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Po(e, s, t);
}
function Po(e, s, { immediate: t, deep: o, flush: a, onTrack: r, onTrigger: i } = H) {
  ({}).NODE_ENV !== "production" && !s && (t !== void 0 && N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (T) => {
    N("Invalid watch source: ", T, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = ce;
  let c, p = !1, f = !1;
  if (de(e) ? (c = () => e.value, p = jt(e)) : vs(e) ? (c = () => e, o = !0) : A(e) ? (f = !0, p = e.some((T) => vs(T) || jt(T)), c = () => e.map((T) => {
    if (de(T))
      return T.value;
    if (vs(T))
      return As(T);
    if (_(T))
      return Je(T, u, 2);
    ({}).NODE_ENV !== "production" && l(T);
  })) : _(e) ? s ? c = () => Je(e, u, 2) : c = () => {
    if (!(u && u.isUnmounted))
      return h && h(), De(e, u, 3, [v]);
  } : (c = fe, {}.NODE_ENV !== "production" && l(e)), s && o) {
    const T = c;
    c = () => As(T());
  }
  let h, v = (T) => {
    h = P.onStop = () => {
      Je(T, u, 4);
    };
  };
  if (ot)
    return v = fe, s ? t && De(s, u, 3, [
      c(),
      f ? [] : void 0,
      v
    ]) : c(), fe;
  let E = f ? [] : fa;
  const z = () => {
    if (!!P.active)
      if (s) {
        const T = P.run();
        (o || p || (f ? T.some((Q, le) => Zs(Q, E[le])) : Zs(T, E))) && (h && h(), De(s, u, 3, [
          T,
          E === fa ? void 0 : E,
          v
        ]), E = T);
      } else
        P.run();
  };
  z.allowRecurse = !!s;
  let C;
  a === "sync" ? C = z : a === "post" ? C = () => Ee(z, u && u.suspense) : (z.pre = !0, u && (z.id = u.uid), C = () => St(z));
  const P = new Io(c, C);
  return {}.NODE_ENV !== "production" && (P.onTrack = r, P.onTrigger = i), s ? t ? z() : E = P.run() : a === "post" ? Ee(P.run.bind(P), u && u.suspense) : P.run(), () => {
    P.stop(), u && u.scope && Oo(u.scope.effects, P);
  };
}
function kn(e, s, t) {
  const o = this.proxy, a = ne(e) ? e.includes(".") ? Nr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  _(s) ? r = s : (r = s.handler, t = s);
  const i = ce;
  Ss(this);
  const l = Po(a, r.bind(o), t);
  return i ? Ss(i) : Ns(), l;
}
function Nr(e, s) {
  const t = s.split(".");
  return () => {
    let o = e;
    for (let a = 0; a < t.length && o; a++)
      o = o[t[a]];
    return o;
  };
}
function As(e, s) {
  if (!J(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), de(e))
    As(e.value, s);
  else if (A(e))
    for (let t = 0; t < e.length; t++)
      As(e[t], s);
  else if (Ka(e) || ks(e))
    e.forEach((t) => {
      As(t, s);
    });
  else if (Wa(e))
    for (const t in e)
      As(e[t], s);
  return e;
}
function wn() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lt(() => {
    e.isMounted = !0;
  }), Ko(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ve = [Function, Array], vn = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ve,
    onEnter: Ve,
    onAfterEnter: Ve,
    onEnterCancelled: Ve,
    onBeforeLeave: Ve,
    onLeave: Ve,
    onAfterLeave: Ve,
    onLeaveCancelled: Ve,
    onBeforeAppear: Ve,
    onAppear: Ve,
    onAfterAppear: Ve,
    onAppearCancelled: Ve
  },
  setup(e, { slots: s }) {
    const t = Wr(), o = wn();
    let a;
    return () => {
      const r = s.default && Or(s.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        let z = !1;
        for (const C of r)
          if (C.type !== pe) {
            if ({}.NODE_ENV !== "production" && z) {
              N("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = C, z = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const l = U(e), { mode: u } = l;
      if ({}.NODE_ENV !== "production" && u && u !== "in-out" && u !== "out-in" && u !== "default" && N(`invalid <transition> mode: ${u}`), o.isLeaving)
        return Zt(i);
      const c = pa(i);
      if (!c)
        return Zt(i);
      const p = co(c, l, o, t);
      fo(c, p);
      const f = t.subTree, h = f && pa(f);
      let v = !1;
      const { getTransitionKey: E } = c.type;
      if (E) {
        const z = E();
        a === void 0 ? a = z : z !== a && (a = z, v = !0);
      }
      if (h && h.type !== pe && (!gs(c, h) || v)) {
        const z = co(h, l, o, t);
        if (fo(h, z), u === "out-in")
          return o.isLeaving = !0, z.afterLeave = () => {
            o.isLeaving = !1, t.update();
          }, Zt(i);
        u === "in-out" && c.type !== pe && (z.delayLeave = (C, P, T) => {
          const Q = zr(o, h);
          Q[String(h.key)] = h, C._leaveCb = () => {
            P(), C._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = T;
        });
      }
      return i;
    };
  }
}, jr = vn;
function zr(e, s) {
  const { leavingVNodes: t } = e;
  let o = t.get(s.type);
  return o || (o = /* @__PURE__ */ Object.create(null), t.set(s.type, o)), o;
}
function co(e, s, t, o) {
  const { appear: a, mode: r, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: p, onBeforeLeave: f, onLeave: h, onAfterLeave: v, onLeaveCancelled: E, onBeforeAppear: z, onAppear: C, onAfterAppear: P, onAppearCancelled: T } = s, Q = String(e.key), le = zr(t, e), G = (S, Z) => {
    S && De(S, o, 9, Z);
  }, ze = (S, Z) => {
    const W = Z[1];
    G(S, Z), A(S) ? S.every((ie) => ie.length <= 1) && W() : S.length <= 1 && W();
  }, ke = {
    mode: r,
    persisted: i,
    beforeEnter(S) {
      let Z = l;
      if (!t.isMounted)
        if (a)
          Z = z || l;
        else
          return;
      S._leaveCb && S._leaveCb(!0);
      const W = le[Q];
      W && gs(e, W) && W.el._leaveCb && W.el._leaveCb(), G(Z, [S]);
    },
    enter(S) {
      let Z = u, W = c, ie = p;
      if (!t.isMounted)
        if (a)
          Z = C || u, W = P || c, ie = T || p;
        else
          return;
      let O = !1;
      const ee = S._enterCb = (we) => {
        O || (O = !0, we ? G(ie, [S]) : G(W, [S]), ke.delayedLeave && ke.delayedLeave(), S._enterCb = void 0);
      };
      Z ? ze(Z, [S, ee]) : ee();
    },
    leave(S, Z) {
      const W = String(e.key);
      if (S._enterCb && S._enterCb(!0), t.isUnmounting)
        return Z();
      G(f, [S]);
      let ie = !1;
      const O = S._leaveCb = (ee) => {
        ie || (ie = !0, Z(), ee ? G(E, [S]) : G(v, [S]), S._leaveCb = void 0, le[W] === e && delete le[W]);
      };
      le[W] = e, h ? ze(h, [S, O]) : O();
    },
    clone(S) {
      return co(S, s, t, o);
    }
  };
  return ke;
}
function Zt(e) {
  if (nt(e))
    return e = We(e), e.children = null, e;
}
function pa(e) {
  return nt(e) ? e.children ? e.children[0] : void 0 : e;
}
function fo(e, s) {
  e.shapeFlag & 6 && e.component ? fo(e.component.subTree, s) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Or(e, s = !1, t) {
  let o = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = t == null ? i.key : String(t) + String(i.key != null ? i.key : r);
    i.type === he ? (i.patchFlag & 128 && a++, o = o.concat(Or(i.children, s, l))) : (s || i.type !== pe) && o.push(l != null ? We(i, { key: l }) : i);
  }
  if (a > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
function Vs(e) {
  return _(e) ? { setup: e, name: e.name } : e;
}
const bt = (e) => !!e.type.__asyncLoader, nt = (e) => e.type.__isKeepAlive;
function xn(e, s) {
  Vr(e, "a", s);
}
function En(e, s) {
  Vr(e, "da", s);
}
function Vr(e, s, t = ce) {
  const o = e.__wdc || (e.__wdc = () => {
    let a = t;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Mt(s, o, t), t) {
    let a = t.parent;
    for (; a && a.parent; )
      nt(a.parent.vnode) && Nn(o, s, t, a), a = a.parent;
  }
}
function Nn(e, s, t, o) {
  const a = Mt(s, e, o, !0);
  Bo(() => {
    Oo(o[s], a);
  }, t);
}
function Mt(e, s, t = ce, o = !1) {
  if (t) {
    const a = t[e] || (t[e] = []), r = s.__weh || (s.__weh = (...i) => {
      if (t.isUnmounted)
        return;
      zs(), Ss(t);
      const l = De(s, t, e, i);
      return Ns(), Os(), l;
    });
    return o ? a.unshift(r) : a.push(r), r;
  } else if ({}.NODE_ENV !== "production") {
    const a = hs(_o[e].replace(/ hook$/, ""));
    N(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ze = (e) => (s, t = ce) => (!ot || e === "sp") && Mt(e, s, t), qr = Ze("bm"), lt = Ze("m"), jn = Ze("bu"), zn = Ze("u"), Ko = Ze("bum"), Bo = Ze("um"), On = Ze("sp"), Vn = Ze("rtg"), qn = Ze("rtc");
function Dn(e, s = ce) {
  Mt("ec", e, s);
}
function Dr(e) {
  ai(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function cs(e, s, t, o) {
  const a = e.dirs, r = s && s.dirs;
  for (let i = 0; i < a.length; i++) {
    const l = a[i];
    r && (l.oldValue = r[i].value);
    let u = l.dir[o];
    u && (zs(), De(u, t, 8, [
      e.el,
      l,
      e,
      s
    ]), Os());
  }
}
const Cn = Symbol();
function kt(e, s, t, o) {
  let a;
  const r = t && t[o];
  if (A(e) || ne(e)) {
    a = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      a[i] = s(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), a = new Array(e);
    for (let i = 0; i < e; i++)
      a[i] = s(i + 1, i, void 0, r && r[i]);
  } else if (J(e))
    if (e[Symbol.iterator])
      a = Array.from(e, (i, l) => s(i, l, void 0, r && r[l]));
    else {
      const i = Object.keys(e);
      a = new Array(i.length);
      for (let l = 0, u = i.length; l < u; l++) {
        const c = i[l];
        a[l] = s(e[c], c, l, r && r[l]);
      }
    }
  else
    a = [];
  return t && (t[o] = a), a;
}
const po = (e) => e ? Lr(e) ? Qo(e) || e.proxy : po(e.parent) : null, Us = /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => ({}).NODE_ENV !== "production" ? Ts(e.props) : e.props,
  $attrs: (e) => ({}).NODE_ENV !== "production" ? Ts(e.attrs) : e.attrs,
  $slots: (e) => ({}).NODE_ENV !== "production" ? Ts(e.slots) : e.slots,
  $refs: (e) => ({}).NODE_ENV !== "production" ? Ts(e.refs) : e.refs,
  $parent: (e) => po(e.parent),
  $root: (e) => po(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Lo(e),
  $forceUpdate: (e) => e.f || (e.f = () => St(e.update)),
  $nextTick: (e) => e.n || (e.n = fr.bind(e.proxy)),
  $watch: (e) => kn.bind(e)
}), Wo = (e) => e === "_" || e === "$", Cr = {
  get({ _: e }, s) {
    const { ctx: t, setupState: o, data: a, props: r, accessCache: i, type: l, appContext: u } = e;
    if ({}.NODE_ENV !== "production" && s === "__isVue")
      return !0;
    if ({}.NODE_ENV !== "production" && o !== H && o.__isScriptSetup && F(o, s))
      return o[s];
    let c;
    if (s[0] !== "$") {
      const v = i[s];
      if (v !== void 0)
        switch (v) {
          case 1:
            return o[s];
          case 2:
            return a[s];
          case 4:
            return t[s];
          case 3:
            return r[s];
        }
      else {
        if (o !== H && F(o, s))
          return i[s] = 1, o[s];
        if (a !== H && F(a, s))
          return i[s] = 2, a[s];
        if ((c = e.propsOptions[0]) && F(c, s))
          return i[s] = 3, r[s];
        if (t !== H && F(t, s))
          return i[s] = 4, t[s];
        ho && (i[s] = 0);
      }
    }
    const p = Us[s];
    let f, h;
    if (p)
      return s === "$attrs" && (je(e, "get", s), {}.NODE_ENV !== "production" && Ot()), p(e);
    if ((f = l.__cssModules) && (f = f[s]))
      return f;
    if (t !== H && F(t, s))
      return i[s] = 4, t[s];
    if (h = u.config.globalProperties, F(h, s))
      return h[s];
    ({}).NODE_ENV !== "production" && qe && (!ne(s) || s.indexOf("__v") !== 0) && (a !== H && Wo(s[0]) && F(a, s) ? N(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === qe && N(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, s, t) {
    const { data: o, setupState: a, ctx: r } = e;
    return a !== H && F(a, s) ? (a[s] = t, !0) : o !== H && F(o, s) ? (o[s] = t, !0) : F(e.props, s) ? ({}.NODE_ENV !== "production" && N(`Attempting to mutate prop "${s}". Props are readonly.`, e), !1) : s[0] === "$" && s.slice(1) in e ? ({}.NODE_ENV !== "production" && N(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`, e), !1) : ({}.NODE_ENV !== "production" && s in e.appContext.config.globalProperties ? Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : r[s] = t, !0);
  },
  has({ _: { data: e, setupState: s, accessCache: t, ctx: o, appContext: a, propsOptions: r } }, i) {
    let l;
    return !!t[i] || e !== H && F(e, i) || s !== H && F(s, i) || (l = r[0]) && F(l, i) || F(o, i) || F(Us, i) || F(a.config.globalProperties, i);
  },
  defineProperty(e, s, t) {
    return t.get != null ? e._.accessCache[s] = 0 : F(t, "value") && this.set(e, s, t.value, null), Reflect.defineProperty(e, s, t);
  }
};
({}).NODE_ENV !== "production" && (Cr.ownKeys = (e) => (N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function In(e) {
  const s = {};
  return Object.defineProperty(s, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Us).forEach((t) => {
    Object.defineProperty(s, t, {
      configurable: !0,
      enumerable: !1,
      get: () => Us[t](e),
      set: fe
    });
  }), s;
}
function Tn(e) {
  const { ctx: s, propsOptions: [t] } = e;
  t && Object.keys(t).forEach((o) => {
    Object.defineProperty(s, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: fe
    });
  });
}
function An(e) {
  const { ctx: s, setupState: t } = e;
  Object.keys(U(t)).forEach((o) => {
    if (!t.__isScriptSetup) {
      if (Wo(o[0])) {
        N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(s, o, {
        enumerable: !0,
        configurable: !0,
        get: () => t[o],
        set: fe
      });
    }
  });
}
function Rn() {
  const e = /* @__PURE__ */ Object.create(null);
  return (s, t) => {
    e[t] ? N(`${s} property "${t}" is already defined in ${e[t]}.`) : e[t] = s;
  };
}
let ho = !0;
function _n(e) {
  const s = Lo(e), t = e.proxy, o = e.ctx;
  ho = !1, s.beforeCreate && ha(s.beforeCreate, e, "bc");
  const {
    data: a,
    computed: r,
    methods: i,
    watch: l,
    provide: u,
    inject: c,
    created: p,
    beforeMount: f,
    mounted: h,
    beforeUpdate: v,
    updated: E,
    activated: z,
    deactivated: C,
    beforeDestroy: P,
    beforeUnmount: T,
    destroyed: Q,
    unmounted: le,
    render: G,
    renderTracked: ze,
    renderTriggered: ke,
    errorCaptured: S,
    serverPrefetch: Z,
    expose: W,
    inheritAttrs: ie,
    components: O,
    directives: ee,
    filters: we
  } = s, Oe = {}.NODE_ENV !== "production" ? Rn() : null;
  if ({}.NODE_ENV !== "production") {
    const [K] = e.propsOptions;
    if (K)
      for (const M in K)
        Oe("Props", M);
  }
  if (c && Un(c, o, Oe, e.appContext.config.unwrapInjectedRef), i)
    for (const K in i) {
      const M = i[K];
      _(M) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, K, {
        value: M.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[K] = M.bind(t), {}.NODE_ENV !== "production" && Oe("Methods", K)) : {}.NODE_ENV !== "production" && N(`Method "${K}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`);
    }
  if (a) {
    ({}).NODE_ENV !== "production" && !_(a) && N("The data option must be a function. Plain object usage is no longer supported.");
    const K = a.call(t, t);
    if ({}.NODE_ENV !== "production" && qo(K) && N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !J(K))
      ({}).NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = Ao(K), {}.NODE_ENV !== "production")
      for (const M in K)
        Oe("Data", M), Wo(M[0]) || Object.defineProperty(o, M, {
          configurable: !0,
          enumerable: !0,
          get: () => K[M],
          set: fe
        });
  }
  if (ho = !0, r)
    for (const K in r) {
      const M = r[K], Ce = _(M) ? M.bind(t, t) : _(M.get) ? M.get.bind(t, t) : fe;
      ({}).NODE_ENV !== "production" && Ce === fe && N(`Computed property "${K}" has no getter.`);
      const ns = !_(M) && _(M.set) ? M.set.bind(t) : {}.NODE_ENV !== "production" ? () => {
        N(`Write operation failed: computed property "${K}" is readonly.`);
      } : fe, ls = wl({
        get: Ce,
        set: ns
      });
      Object.defineProperty(o, K, {
        enumerable: !0,
        configurable: !0,
        get: () => ls.value,
        set: (Le) => ls.value = Le
      }), {}.NODE_ENV !== "production" && Oe("Computed", K);
    }
  if (l)
    for (const K in l)
      Ir(l[K], o, t, K);
  if (u) {
    const K = _(u) ? u.call(t) : u;
    Reflect.ownKeys(K).forEach((M) => {
      gn(M, K[M]);
    });
  }
  p && ha(p, e, "c");
  function re(K, M) {
    A(M) ? M.forEach((Ce) => K(Ce.bind(t))) : M && K(M.bind(t));
  }
  if (re(qr, f), re(lt, h), re(jn, v), re(zn, E), re(xn, z), re(En, C), re(Dn, S), re(qn, ze), re(Vn, ke), re(Ko, T), re(Bo, le), re(On, Z), A(W))
    if (W.length) {
      const K = e.exposed || (e.exposed = {});
      W.forEach((M) => {
        Object.defineProperty(K, M, {
          get: () => t[M],
          set: (Ce) => t[M] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  G && e.render === fe && (e.render = G), ie != null && (e.inheritAttrs = ie), O && (e.components = O), ee && (e.directives = ee);
}
function Un(e, s, t = fe, o = !1) {
  A(e) && (e = mo(e));
  for (const a in e) {
    const r = e[a];
    let i;
    J(r) ? "default" in r ? i = Jt(r.from || a, r.default, !0) : i = Jt(r.from || a) : i = Jt(r), de(i) ? o ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : ({}.NODE_ENV !== "production" && N(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), s[a] = i) : s[a] = i, {}.NODE_ENV !== "production" && t("Inject", a);
  }
}
function ha(e, s, t) {
  De(A(e) ? e.map((o) => o.bind(s.proxy)) : e.bind(s.proxy), s, t);
}
function Ir(e, s, t, o) {
  const a = o.includes(".") ? Nr(t, o) : () => t[o];
  if (ne(e)) {
    const r = s[e];
    _(r) ? Qt(a, r) : {}.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, r);
  } else if (_(e))
    Qt(a, e.bind(t));
  else if (J(e))
    if (A(e))
      e.forEach((r) => Ir(r, s, t, o));
    else {
      const r = _(e.handler) ? e.handler.bind(t) : s[e.handler];
      _(r) ? Qt(a, r, e) : {}.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    ({}).NODE_ENV !== "production" && N(`Invalid watch option: "${o}"`, e);
}
function Lo(e) {
  const s = e.type, { mixins: t, extends: o } = s, { mixins: a, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, l = r.get(s);
  let u;
  return l ? u = l : !a.length && !t && !o ? u = s : (u = {}, a.length && a.forEach((c) => Vt(u, c, i, !0)), Vt(u, s, i)), J(s) && r.set(s, u), u;
}
function Vt(e, s, t, o = !1) {
  const { mixins: a, extends: r } = s;
  r && Vt(e, r, t, !0), a && a.forEach((i) => Vt(e, i, t, !0));
  for (const i in s)
    if (o && i === "expose")
      ({}).NODE_ENV !== "production" && N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Sn[i] || t && t[i];
      e[i] = l ? l(e[i], s[i]) : s[i];
    }
  return e;
}
const Sn = {
  data: ma,
  props: ms,
  emits: ms,
  methods: ms,
  computed: ms,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: ms,
  directives: ms,
  watch: Mn,
  provide: ma,
  inject: Fn
};
function ma(e, s) {
  return s ? e ? function() {
    return ae(_(e) ? e.call(this, this) : e, _(s) ? s.call(this, this) : s);
  } : s : e;
}
function Fn(e, s) {
  return ms(mo(e), mo(s));
}
function mo(e) {
  if (A(e)) {
    const s = {};
    for (let t = 0; t < e.length; t++)
      s[e[t]] = e[t];
    return s;
  }
  return e;
}
function ge(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function ms(e, s) {
  return e ? ae(ae(/* @__PURE__ */ Object.create(null), e), s) : s;
}
function Mn(e, s) {
  if (!e)
    return s;
  if (!s)
    return e;
  const t = ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in s)
    t[o] = ge(e[o], s[o]);
  return t;
}
function Pn(e, s, t, o = !1) {
  const a = {}, r = {};
  Et(r, Kt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Tr(e, s, a, r);
  for (const i in e.propsOptions[0])
    i in a || (a[i] = void 0);
  ({}).NODE_ENV !== "production" && Rr(s || {}, a, e), t ? e.props = o ? a : Ri(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Kn(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Bn(e, s, t, o) {
  const { props: a, attrs: r, vnode: { patchFlag: i } } = e, l = U(a), [u] = e.propsOptions;
  let c = !1;
  if (!({}.NODE_ENV !== "production" && Kn(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        let h = p[f];
        if (Ft(e.emitsOptions, h))
          continue;
        const v = s[h];
        if (u)
          if (F(r, h))
            v !== r[h] && (r[h] = v, c = !0);
          else {
            const E = as(h);
            a[E] = yo(u, l, E, v, e, !1);
          }
        else
          v !== r[h] && (r[h] = v, c = !0);
      }
    }
  } else {
    Tr(e, s, a, r) && (c = !0);
    let p;
    for (const f in l)
      (!s || !F(s, f) && ((p = Ue(f)) === f || !F(s, p))) && (u ? t && (t[f] !== void 0 || t[p] !== void 0) && (a[f] = yo(u, l, f, void 0, e, !0)) : delete a[f]);
    if (r !== l)
      for (const f in r)
        (!s || !F(s, f) && !0) && (delete r[f], c = !0);
  }
  c && Qe(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Rr(s || {}, a, e);
}
function Tr(e, s, t, o) {
  const [a, r] = e.propsOptions;
  let i = !1, l;
  if (s)
    for (let u in s) {
      if (mt(u))
        continue;
      const c = s[u];
      let p;
      a && F(a, p = as(u)) ? !r || !r.includes(p) ? t[p] = c : (l || (l = {}))[p] = c : Ft(e.emitsOptions, u) || (!(u in o) || c !== o[u]) && (o[u] = c, i = !0);
    }
  if (r) {
    const u = U(t), c = l || H;
    for (let p = 0; p < r.length; p++) {
      const f = r[p];
      t[f] = yo(a, u, f, c[f], e, !F(c, f));
    }
  }
  return i;
}
function yo(e, s, t, o, a, r) {
  const i = e[t];
  if (i != null) {
    const l = F(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && _(u)) {
        const { propsDefaults: c } = a;
        t in c ? o = c[t] : (Ss(a), o = c[t] = u.call(null, s), Ns());
      } else
        o = u;
    }
    i[0] && (r && !l ? o = !1 : i[1] && (o === "" || o === Ue(t)) && (o = !0));
  }
  return o;
}
function Ar(e, s, t = !1) {
  const o = s.propsCache, a = o.get(e);
  if (a)
    return a;
  const r = e.props, i = {}, l = [];
  let u = !1;
  if (!_(e)) {
    const p = (f) => {
      u = !0;
      const [h, v] = Ar(f, s, !0);
      ae(i, h), v && l.push(...v);
    };
    !t && s.mixins.length && s.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return J(e) && o.set(e, Rs), Rs;
  if (A(r))
    for (let p = 0; p < r.length; p++) {
      ({}).NODE_ENV !== "production" && !ne(r[p]) && N("props must be strings when using array syntax.", r[p]);
      const f = as(r[p]);
      ya(f) && (i[f] = H);
    }
  else if (r) {
    ({}).NODE_ENV !== "production" && !J(r) && N("invalid props options", r);
    for (const p in r) {
      const f = as(p);
      if (ya(f)) {
        const h = r[p], v = i[f] = A(h) || _(h) ? { type: h } : h;
        if (v) {
          const E = ba(Boolean, v.type), z = ba(String, v.type);
          v[0] = E > -1, v[1] = z < 0 || E < z, (E > -1 || F(v, "default")) && l.push(f);
        }
      }
    }
  }
  const c = [i, l];
  return J(e) && o.set(e, c), c;
}
function ya(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function go(e) {
  const s = e && e.toString().match(/^\s*function (\w+)/);
  return s ? s[1] : e === null ? "null" : "";
}
function ga(e, s) {
  return go(e) === go(s);
}
function ba(e, s) {
  return A(s) ? s.findIndex((t) => ga(t, e)) : _(s) && ga(s, e) ? 0 : -1;
}
function Rr(e, s, t) {
  const o = U(s), a = t.propsOptions[0];
  for (const r in a) {
    let i = a[r];
    i != null && Wn(r, o[r], i, !F(e, r) && !F(e, Ue(r)));
  }
}
function Wn(e, s, t, o) {
  const { type: a, required: r, validator: i } = t;
  if (r && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(s == null && !t.required)) {
    if (a != null && a !== !0) {
      let l = !1;
      const u = A(a) ? a : [a], c = [];
      for (let p = 0; p < u.length && !l; p++) {
        const { valid: f, expectedType: h } = Hn(s, u[p]);
        c.push(h || ""), l = f;
      }
      if (!l) {
        N(Yn(e, s, c));
        return;
      }
    }
    i && !i(s) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ln = /* @__PURE__ */ Fs("String,Number,Boolean,Function,Symbol,BigInt");
function Hn(e, s) {
  let t;
  const o = go(s);
  if (Ln(o)) {
    const a = typeof e;
    t = a === o.toLowerCase(), !t && a === "object" && (t = e instanceof s);
  } else
    o === "Object" ? t = J(e) : o === "Array" ? t = A(e) : o === "null" ? t = e === null : t = e instanceof s;
  return {
    valid: t,
    expectedType: o
  };
}
function Yn(e, s, t) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${t.map(It).join(" | ")}`;
  const a = t[0], r = Do(s), i = ka(s, a), l = ka(s, r);
  return t.length === 1 && wa(a) && !Jn(a, r) && (o += ` with value ${i}`), o += `, got ${r} `, wa(r) && (o += `with value ${l}.`), o;
}
function ka(e, s) {
  return s === "String" ? `"${e}"` : s === "Number" ? `${Number(e)}` : `${e}`;
}
function wa(e) {
  return ["string", "number", "boolean"].some((t) => e.toLowerCase() === t);
}
function Jn(...e) {
  return e.some((s) => s.toLowerCase() === "boolean");
}
const _r = (e) => e[0] === "_" || e === "$stable", Ho = (e) => A(e) ? e.map(Ae) : [Ae(e)], Qn = (e, s, t) => {
  if (s._n)
    return s;
  const o = Mo((...a) => ({}.NODE_ENV !== "production" && ce && N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Ho(s(...a))), t);
  return o._c = !1, o;
}, Ur = (e, s, t) => {
  const o = e._ctx;
  for (const a in e) {
    if (_r(a))
      continue;
    const r = e[a];
    if (_(r))
      s[a] = Qn(a, r, o);
    else if (r != null) {
      ({}).NODE_ENV !== "production" && N(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);
      const i = Ho(r);
      s[a] = () => i;
    }
  }
}, Sr = (e, s) => {
  ({}).NODE_ENV !== "production" && !nt(e.vnode) && N("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const t = Ho(s);
  e.slots.default = () => t;
}, Zn = (e, s) => {
  if (e.vnode.shapeFlag & 32) {
    const t = s._;
    t ? (e.slots = U(s), Et(s, "_", t)) : Ur(s, e.slots = {});
  } else
    e.slots = {}, s && Sr(e, s);
  Et(e.slots, Kt, 1);
}, Gn = (e, s, t) => {
  const { vnode: o, slots: a } = e;
  let r = !0, i = H;
  if (o.shapeFlag & 32) {
    const l = s._;
    l ? {}.NODE_ENV !== "production" && Es ? ae(a, s) : t && l === 1 ? r = !1 : (ae(a, s), !t && l === 1 && delete a._) : (r = !s.$stable, Ur(s, a)), i = s;
  } else
    s && (Sr(e, s), i = { default: 1 });
  if (r)
    for (const l in a)
      !_r(l) && !(l in i) && delete a[l];
};
function Fr() {
  return {
    app: null,
    config: {
      isNativeTag: Pa,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Xn = 0;
function $n(e, s) {
  return function(o, a = null) {
    _(o) || (o = Object.assign({}, o)), a != null && !J(a) && ({}.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), a = null);
    const r = Fr(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = r.app = {
      _uid: Xn++,
      _component: o,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Na,
      get config() {
        return r.config;
      },
      set config(c) {
        ({}).NODE_ENV !== "production" && N("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...p) {
        return i.has(c) ? {}.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : c && _(c.install) ? (i.add(c), c.install(u, ...p)) : _(c) ? (i.add(c), c(u, ...p)) : {}.NODE_ENV !== "production" && N('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(c) {
        return r.mixins.includes(c) ? {}.NODE_ENV !== "production" && N("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : r.mixins.push(c), u;
      },
      component(c, p) {
        return {}.NODE_ENV !== "production" && wo(c, r.config), p ? ({}.NODE_ENV !== "production" && r.components[c] && N(`Component "${c}" has already been registered in target app.`), r.components[c] = p, u) : r.components[c];
      },
      directive(c, p) {
        return {}.NODE_ENV !== "production" && Dr(c), p ? ({}.NODE_ENV !== "production" && r.directives[c] && N(`Directive "${c}" has already been registered in target app.`), r.directives[c] = p, u) : r.directives[c];
      },
      mount(c, p, f) {
        if (l)
          ({}).NODE_ENV !== "production" && N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && c.__vue_app__ && N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const h = ue(o, a);
          return h.appContext = r, {}.NODE_ENV !== "production" && (r.reload = () => {
            e(We(h), c, f);
          }), p && s ? s(h, c) : e(h, c, f), l = !0, u._container = c, c.__vue_app__ = u, {}.NODE_ENV !== "production" && (u._instance = h.component, sn(u, Na)), Qo(h.component) || h.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), {}.NODE_ENV !== "production" && (u._instance = null, tn(u)), delete u._container.__vue_app__) : {}.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(c, p) {
        return {}.NODE_ENV !== "production" && c in r.provides && N(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), r.provides[c] = p, u;
      }
    };
    return u;
  };
}
function bo(e, s, t, o, a = !1) {
  if (A(e)) {
    e.forEach((h, v) => bo(h, s && (A(s) ? s[v] : s), t, o, a));
    return;
  }
  if (bt(o) && !a)
    return;
  const r = o.shapeFlag & 4 ? Qo(o.component) || o.component.proxy : o.el, i = a ? null : r, { i: l, r: u } = e;
  if ({}.NODE_ENV !== "production" && !l) {
    N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = s && s.r, p = l.refs === H ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== u && (ne(c) ? (p[c] = null, F(f, c) && (f[c] = null)) : de(c) && (c.value = null)), _(u))
    Je(u, l, 12, [i, p]);
  else {
    const h = ne(u), v = de(u);
    if (h || v) {
      const E = () => {
        if (e.f) {
          const z = h ? p[u] : u.value;
          a ? A(z) && Oo(z, r) : A(z) ? z.includes(r) || z.push(r) : h ? (p[u] = [r], F(f, u) && (f[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else
          h ? (p[u] = i, F(f, u) && (f[u] = i)) : v ? (u.value = i, e.k && (p[e.k] = i)) : {}.NODE_ENV !== "production" && N("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (E.id = -1, Ee(E, t)) : E();
    } else
      ({}).NODE_ENV !== "production" && N("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Ks, ts;
function He(e, s) {
  e.appContext.config.performance && qt() && ts.mark(`vue-${s}-${e.uid}`), {}.NODE_ENV !== "production" && rn(e, s, qt() ? ts.now() : Date.now());
}
function Ye(e, s) {
  if (e.appContext.config.performance && qt()) {
    const t = `vue-${s}-${e.uid}`, o = t + ":end";
    ts.mark(o), ts.measure(`<${Bt(e, e.type)}> ${s}`, t, o), ts.clearMarks(t), ts.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && nn(e, s, qt() ? ts.now() : Date.now());
}
function qt() {
  return Ks !== void 0 || (typeof window < "u" && window.performance ? (Ks = !0, ts = window.performance) : Ks = !1), Ks;
}
function el() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const s = e.length > 1;
    console.warn(`Feature flag${s ? "s" : ""} ${e.join(", ")} ${s ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ee = yn;
function sl(e) {
  return tl(e);
}
function tl(e, s) {
  el();
  const t = La();
  t.__VUE__ = !0, {}.NODE_ENV !== "production" && br(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const { insert: o, remove: a, patchProp: r, createElement: i, createText: l, createComment: u, setText: c, setElementText: p, parentNode: f, nextSibling: h, setScopeId: v = fe, cloneNode: E, insertStaticContent: z } = e, C = (n, d, m, g = null, y = null, w = null, j = !1, k = null, x = {}.NODE_ENV !== "production" && Es ? !1 : !!d.dynamicChildren) => {
    if (n === d)
      return;
    n && !gs(n, d) && (g = q(n), Se(n, y, w, !0), n = null), d.patchFlag === -2 && (x = !1, d.dynamicChildren = null);
    const { type: b, ref: D, shapeFlag: V } = d;
    switch (b) {
      case Pt:
        P(n, d, m, g);
        break;
      case pe:
        T(n, d, m, g);
        break;
      case Js:
        n == null ? Q(d, m, g, j) : {}.NODE_ENV !== "production" && le(n, d, m, j);
        break;
      case he:
        we(n, d, m, g, y, w, j, k, x);
        break;
      default:
        V & 1 ? ke(n, d, m, g, y, w, j, k, x) : V & 6 ? Oe(n, d, m, g, y, w, j, k, x) : V & 64 || V & 128 ? b.process(n, d, m, g, y, w, j, k, x, se) : {}.NODE_ENV !== "production" && N("Invalid VNode type:", b, `(${typeof b})`);
    }
    D != null && y && bo(D, n && n.ref, w, d || n, !d);
  }, P = (n, d, m, g) => {
    if (n == null)
      o(d.el = l(d.children), m, g);
    else {
      const y = d.el = n.el;
      d.children !== n.children && c(y, d.children);
    }
  }, T = (n, d, m, g) => {
    n == null ? o(d.el = u(d.children || ""), m, g) : d.el = n.el;
  }, Q = (n, d, m, g) => {
    [n.el, n.anchor] = z(n.children, d, m, g, n.el, n.anchor);
  }, le = (n, d, m, g) => {
    if (d.children !== n.children) {
      const y = h(n.anchor);
      ze(n), [d.el, d.anchor] = z(d.children, m, y, g);
    } else
      d.el = n.el, d.anchor = n.anchor;
  }, G = ({ el: n, anchor: d }, m, g) => {
    let y;
    for (; n && n !== d; )
      y = h(n), o(n, m, g), n = y;
    o(d, m, g);
  }, ze = ({ el: n, anchor: d }) => {
    let m;
    for (; n && n !== d; )
      m = h(n), a(n), n = m;
    a(d);
  }, ke = (n, d, m, g, y, w, j, k, x) => {
    j = j || d.type === "svg", n == null ? S(d, m, g, y, w, j, k, x) : ie(n, d, y, w, j, k, x);
  }, S = (n, d, m, g, y, w, j, k) => {
    let x, b;
    const { type: D, props: V, shapeFlag: I, transition: R, patchFlag: L, dirs: X } = n;
    if ({}.NODE_ENV === "production" && n.el && E !== void 0 && L === -1)
      x = n.el = E(n.el);
    else {
      if (x = n.el = i(n.type, w, V && V.is, V), I & 8 ? p(x, n.children) : I & 16 && W(n.children, x, null, g, y, w && D !== "foreignObject", j, k), X && cs(n, null, g, "created"), V) {
        for (const oe in V)
          oe !== "value" && !mt(oe) && r(x, oe, null, V[oe], w, n.children, g, y, Ie);
        "value" in V && r(x, "value", null, V.value), (b = V.onVnodeBeforeMount) && Me(b, g, n);
      }
      Z(x, n, n.scopeId, j, g);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(x, "__vnode", {
      value: n,
      enumerable: !1
    }), Object.defineProperty(x, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), X && cs(n, null, g, "beforeMount");
    const te = (!y || y && !y.pendingBranch) && R && !R.persisted;
    te && R.beforeEnter(x), o(x, d, m), ((b = V && V.onVnodeMounted) || te || X) && Ee(() => {
      b && Me(b, g, n), te && R.enter(x), X && cs(n, null, g, "mounted");
    }, y);
  }, Z = (n, d, m, g, y) => {
    if (m && v(n, m), g)
      for (let w = 0; w < g.length; w++)
        v(n, g[w]);
    if (y) {
      let w = y.subTree;
      if ({}.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && (w = Er(w.children) || w), d === w) {
        const j = y.vnode;
        Z(n, j, j.scopeId, j.slotScopeIds, y.parent);
      }
    }
  }, W = (n, d, m, g, y, w, j, k, x = 0) => {
    for (let b = x; b < n.length; b++) {
      const D = n[b] = k ? ss(n[b]) : Ae(n[b]);
      C(null, D, d, m, g, y, w, j, k);
    }
  }, ie = (n, d, m, g, y, w, j) => {
    const k = d.el = n.el;
    let { patchFlag: x, dynamicChildren: b, dirs: D } = d;
    x |= n.patchFlag & 16;
    const V = n.props || H, I = d.props || H;
    let R;
    m && ds(m, !1), (R = I.onVnodeBeforeUpdate) && Me(R, m, d, n), D && cs(d, n, m, "beforeUpdate"), m && ds(m, !0), {}.NODE_ENV !== "production" && Es && (x = 0, j = !1, b = null);
    const L = y && d.type !== "foreignObject";
    if (b ? (O(n.dynamicChildren, b, k, m, g, L, w), {}.NODE_ENV !== "production" && m && m.type.__hmrId && wt(n, d)) : j || ns(n, d, k, null, m, g, L, w, !1), x > 0) {
      if (x & 16)
        ee(k, d, V, I, m, g, y);
      else if (x & 2 && V.class !== I.class && r(k, "class", null, I.class, y), x & 4 && r(k, "style", V.style, I.style, y), x & 8) {
        const X = d.dynamicProps;
        for (let te = 0; te < X.length; te++) {
          const oe = X[te], Te = V[oe], Ds = I[oe];
          (Ds !== Te || oe === "value") && r(k, oe, Te, Ds, y, n.children, m, g, Ie);
        }
      }
      x & 1 && n.children !== d.children && p(k, d.children);
    } else
      !j && b == null && ee(k, d, V, I, m, g, y);
    ((R = I.onVnodeUpdated) || D) && Ee(() => {
      R && Me(R, m, d, n), D && cs(d, n, m, "updated");
    }, g);
  }, O = (n, d, m, g, y, w, j) => {
    for (let k = 0; k < d.length; k++) {
      const x = n[k], b = d[k], D = x.el && (x.type === he || !gs(x, b) || x.shapeFlag & 70) ? f(x.el) : m;
      C(x, b, D, null, g, y, w, j, !0);
    }
  }, ee = (n, d, m, g, y, w, j) => {
    if (m !== g) {
      for (const k in g) {
        if (mt(k))
          continue;
        const x = g[k], b = m[k];
        x !== b && k !== "value" && r(n, k, b, x, j, d.children, y, w, Ie);
      }
      if (m !== H)
        for (const k in m)
          !mt(k) && !(k in g) && r(n, k, m[k], null, j, d.children, y, w, Ie);
      "value" in g && r(n, "value", m.value, g.value);
    }
  }, we = (n, d, m, g, y, w, j, k, x) => {
    const b = d.el = n ? n.el : l(""), D = d.anchor = n ? n.anchor : l("");
    let { patchFlag: V, dynamicChildren: I, slotScopeIds: R } = d;
    ({}).NODE_ENV !== "production" && (Es || V & 2048) && (V = 0, x = !1, I = null), R && (k = k ? k.concat(R) : R), n == null ? (o(b, m, g), o(D, m, g), W(d.children, m, D, y, w, j, k, x)) : V > 0 && V & 64 && I && n.dynamicChildren ? (O(n.dynamicChildren, I, m, y, w, j, k), {}.NODE_ENV !== "production" && y && y.type.__hmrId ? wt(n, d) : (d.key != null || y && d === y.subTree) && wt(n, d, !0)) : ns(n, d, m, D, y, w, j, k, x);
  }, Oe = (n, d, m, g, y, w, j, k, x) => {
    d.slotScopeIds = k, n == null ? d.shapeFlag & 512 ? y.ctx.activate(d, m, g, j, x) : re(d, m, g, y, w, j, x) : K(n, d, x);
  }, re = (n, d, m, g, y, w, j) => {
    const k = n.component = fl(n, g, y);
    if ({}.NODE_ENV !== "production" && k.type.__hmrId && Gi(k), {}.NODE_ENV !== "production" && (yt(n), He(k, "mount")), nt(n) && (k.ctx.renderer = se), {}.NODE_ENV !== "production" && He(k, "init"), hl(k), {}.NODE_ENV !== "production" && Ye(k, "init"), k.asyncDep) {
      if (y && y.registerDep(k, M), !n.el) {
        const x = k.subTree = ue(pe);
        T(null, x, d, m);
      }
      return;
    }
    M(k, n, d, m, y, w, j), {}.NODE_ENV !== "production" && (gt(), Ye(k, "mount"));
  }, K = (n, d, m) => {
    const g = d.component = n.component;
    if (pn(n, d, m))
      if (g.asyncDep && !g.asyncResolved) {
        ({}).NODE_ENV !== "production" && yt(d), Ce(g, d, m), {}.NODE_ENV !== "production" && gt();
        return;
      } else
        g.next = d, Qi(g.update), g.update();
    else
      d.el = n.el, g.vnode = d;
  }, M = (n, d, m, g, y, w, j) => {
    const k = () => {
      if (n.isMounted) {
        let { next: D, bu: V, u: I, parent: R, vnode: L } = n, X = D, te;
        ({}).NODE_ENV !== "production" && yt(D || n.vnode), ds(n, !1), D ? (D.el = L.el, Ce(n, D, j)) : D = L, V && Ps(V), (te = D.props && D.props.onVnodeBeforeUpdate) && Me(te, R, D, L), ds(n, !0), {}.NODE_ENV !== "production" && He(n, "render");
        const oe = Yt(n);
        ({}).NODE_ENV !== "production" && Ye(n, "render");
        const Te = n.subTree;
        n.subTree = oe, {}.NODE_ENV !== "production" && He(n, "patch"), C(
          Te,
          oe,
          f(Te.el),
          q(Te),
          n,
          y,
          w
        ), {}.NODE_ENV !== "production" && Ye(n, "patch"), D.el = oe.el, X === null && hn(n, oe.el), I && Ee(I, y), (te = D.props && D.props.onVnodeUpdated) && Ee(() => Me(te, R, D, L), y), {}.NODE_ENV !== "production" && kr(n), {}.NODE_ENV !== "production" && gt();
      } else {
        let D;
        const { el: V, props: I } = d, { bm: R, m: L, parent: X } = n, te = bt(d);
        if (ds(n, !1), R && Ps(R), !te && (D = I && I.onVnodeBeforeMount) && Me(D, X, d), ds(n, !0), V && xe) {
          const oe = () => {
            ({}).NODE_ENV !== "production" && He(n, "render"), n.subTree = Yt(n), {}.NODE_ENV !== "production" && Ye(n, "render"), {}.NODE_ENV !== "production" && He(n, "hydrate"), xe(V, n.subTree, n, y, null), {}.NODE_ENV !== "production" && Ye(n, "hydrate");
          };
          te ? d.type.__asyncLoader().then(
            () => !n.isUnmounted && oe()
          ) : oe();
        } else {
          ({}).NODE_ENV !== "production" && He(n, "render");
          const oe = n.subTree = Yt(n);
          ({}).NODE_ENV !== "production" && Ye(n, "render"), {}.NODE_ENV !== "production" && He(n, "patch"), C(null, oe, m, g, n, y, w), {}.NODE_ENV !== "production" && Ye(n, "patch"), d.el = oe.el;
        }
        if (L && Ee(L, y), !te && (D = I && I.onVnodeMounted)) {
          const oe = d;
          Ee(() => Me(D, X, oe), y);
        }
        (d.shapeFlag & 256 || X && bt(X.vnode) && X.vnode.shapeFlag & 256) && n.a && Ee(n.a, y), n.isMounted = !0, {}.NODE_ENV !== "production" && on(n), d = m = g = null;
      }
    }, x = n.effect = new Io(
      k,
      () => St(b),
      n.scope
    ), b = n.update = () => x.run();
    b.id = n.uid, ds(n, !0), {}.NODE_ENV !== "production" && (x.onTrack = n.rtc ? (D) => Ps(n.rtc, D) : void 0, x.onTrigger = n.rtg ? (D) => Ps(n.rtg, D) : void 0, b.ownerInstance = n), b();
  }, Ce = (n, d, m) => {
    d.component = n;
    const g = n.vnode.props;
    n.vnode = d, n.next = null, Bn(n, d.props, g, m), Gn(n, d.children, m), zs(), la(), Os();
  }, ns = (n, d, m, g, y, w, j, k, x = !1) => {
    const b = n && n.children, D = n ? n.shapeFlag : 0, V = d.children, { patchFlag: I, shapeFlag: R } = d;
    if (I > 0) {
      if (I & 128) {
        Le(b, V, m, g, y, w, j, k, x);
        return;
      } else if (I & 256) {
        ls(b, V, m, g, y, w, j, k, x);
        return;
      }
    }
    R & 8 ? (D & 16 && Ie(b, y, w), V !== b && p(m, V)) : D & 16 ? R & 16 ? Le(b, V, m, g, y, w, j, k, x) : Ie(b, y, w, !0) : (D & 8 && p(m, ""), R & 16 && W(V, m, g, y, w, j, k, x));
  }, ls = (n, d, m, g, y, w, j, k, x) => {
    n = n || Rs, d = d || Rs;
    const b = n.length, D = d.length, V = Math.min(b, D);
    let I;
    for (I = 0; I < V; I++) {
      const R = d[I] = x ? ss(d[I]) : Ae(d[I]);
      C(n[I], R, m, null, y, w, j, k, x);
    }
    b > D ? Ie(n, y, w, !0, !1, V) : W(d, m, g, y, w, j, k, x, V);
  }, Le = (n, d, m, g, y, w, j, k, x) => {
    let b = 0;
    const D = d.length;
    let V = n.length - 1, I = D - 1;
    for (; b <= V && b <= I; ) {
      const R = n[b], L = d[b] = x ? ss(d[b]) : Ae(d[b]);
      if (gs(R, L))
        C(R, L, m, null, y, w, j, k, x);
      else
        break;
      b++;
    }
    for (; b <= V && b <= I; ) {
      const R = n[V], L = d[I] = x ? ss(d[I]) : Ae(d[I]);
      if (gs(R, L))
        C(R, L, m, null, y, w, j, k, x);
      else
        break;
      V--, I--;
    }
    if (b > V) {
      if (b <= I) {
        const R = I + 1, L = R < D ? d[R].el : g;
        for (; b <= I; )
          C(null, d[b] = x ? ss(d[b]) : Ae(d[b]), m, L, y, w, j, k, x), b++;
      }
    } else if (b > I)
      for (; b <= V; )
        Se(n[b], y, w, !0), b++;
    else {
      const R = b, L = b, X = /* @__PURE__ */ new Map();
      for (b = L; b <= I; b++) {
        const ye = d[b] = x ? ss(d[b]) : Ae(d[b]);
        ye.key != null && ({}.NODE_ENV !== "production" && X.has(ye.key) && N("Duplicate keys found during update:", JSON.stringify(ye.key), "Make sure keys are unique."), X.set(ye.key, b));
      }
      let te, oe = 0;
      const Te = I - L + 1;
      let Ds = !1, Go = 0;
      const Ms = new Array(Te);
      for (b = 0; b < Te; b++)
        Ms[b] = 0;
      for (b = R; b <= V; b++) {
        const ye = n[b];
        if (oe >= Te) {
          Se(ye, y, w, !0);
          continue;
        }
        let Fe;
        if (ye.key != null)
          Fe = X.get(ye.key);
        else
          for (te = L; te <= I; te++)
            if (Ms[te - L] === 0 && gs(ye, d[te])) {
              Fe = te;
              break;
            }
        Fe === void 0 ? Se(ye, y, w, !0) : (Ms[Fe - L] = b + 1, Fe >= Go ? Go = Fe : Ds = !0, C(ye, d[Fe], m, null, y, w, j, k, x), oe++);
      }
      const Xo = Ds ? ol(Ms) : Rs;
      for (te = Xo.length - 1, b = Te - 1; b >= 0; b--) {
        const ye = L + b, Fe = d[ye], $o = ye + 1 < D ? d[ye + 1].el : g;
        Ms[b] === 0 ? C(null, Fe, m, $o, y, w, j, k, x) : Ds && (te < 0 || b !== Xo[te] ? us(Fe, m, $o, 2) : te--);
      }
    }
  }, us = (n, d, m, g, y = null) => {
    const { el: w, type: j, transition: k, children: x, shapeFlag: b } = n;
    if (b & 6) {
      us(n.component.subTree, d, m, g);
      return;
    }
    if (b & 128) {
      n.suspense.move(d, m, g);
      return;
    }
    if (b & 64) {
      j.move(n, d, m, se);
      return;
    }
    if (j === he) {
      o(w, d, m);
      for (let V = 0; V < x.length; V++)
        us(x[V], d, m, g);
      o(n.anchor, d, m);
      return;
    }
    if (j === Js) {
      G(n, d, m);
      return;
    }
    if (g !== 2 && b & 1 && k)
      if (g === 0)
        k.beforeEnter(w), o(w, d, m), Ee(() => k.enter(w), y);
      else {
        const { leave: V, delayLeave: I, afterLeave: R } = k, L = () => o(w, d, m), X = () => {
          V(w, () => {
            L(), R && R();
          });
        };
        I ? I(w, L, X) : X();
      }
    else
      o(w, d, m);
  }, Se = (n, d, m, g = !1, y = !1) => {
    const { type: w, props: j, ref: k, children: x, dynamicChildren: b, shapeFlag: D, patchFlag: V, dirs: I } = n;
    if (k != null && bo(k, null, m, n, !0), D & 256) {
      d.ctx.deactivate(n);
      return;
    }
    const R = D & 1 && I, L = !bt(n);
    let X;
    if (L && (X = j && j.onVnodeBeforeUnmount) && Me(X, d, n), D & 6)
      Lt(n.component, m, g);
    else {
      if (D & 128) {
        n.suspense.unmount(m, g);
        return;
      }
      R && cs(n, null, d, "beforeUnmount"), D & 64 ? n.type.remove(n, d, m, y, se, g) : b && (w !== he || V > 0 && V & 64) ? Ie(b, d, m, !1, !0) : (w === he && V & 384 || !y && D & 16) && Ie(x, d, m), g && qs(n);
    }
    (L && (X = j && j.onVnodeUnmounted) || R) && Ee(() => {
      X && Me(X, d, n), R && cs(n, null, d, "unmounted");
    }, m);
  }, qs = (n) => {
    const { type: d, el: m, anchor: g, transition: y } = n;
    if (d === he) {
      ({}).NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048 && y && !y.persisted ? n.children.forEach((j) => {
        j.type === pe ? a(j.el) : qs(j);
      }) : ut(m, g);
      return;
    }
    if (d === Js) {
      ze(n);
      return;
    }
    const w = () => {
      a(m), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (n.shapeFlag & 1 && y && !y.persisted) {
      const { leave: j, delayLeave: k } = y, x = () => j(m, w);
      k ? k(n.el, w, x) : x();
    } else
      w();
  }, ut = (n, d) => {
    let m;
    for (; n !== d; )
      m = h(n), a(n), n = m;
    a(d);
  }, Lt = (n, d, m) => {
    ({}).NODE_ENV !== "production" && n.type.__hmrId && Xi(n);
    const { bum: g, scope: y, update: w, subTree: j, um: k } = n;
    g && Ps(g), y.stop(), w && (w.active = !1, Se(j, n, d, m)), k && Ee(k, d), Ee(() => {
      n.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && n.asyncDep && !n.asyncResolved && n.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), {}.NODE_ENV !== "production" && an(n);
  }, Ie = (n, d, m, g = !1, y = !1, w = 0) => {
    for (let j = w; j < n.length; j++)
      Se(n[j], d, m, g, y);
  }, q = (n) => n.shapeFlag & 6 ? q(n.component.subTree) : n.shapeFlag & 128 ? n.suspense.next() : h(n.anchor || n.el), B = (n, d, m) => {
    n == null ? d._vnode && Se(d._vnode, null, null, !0) : C(d._vnode || null, n, d, null, null, null, m), la(), mr(), d._vnode = n;
  }, se = {
    p: C,
    um: Se,
    m: us,
    r: qs,
    mt: re,
    mc: W,
    pc: ns,
    pbc: O,
    n: q,
    o: e
  };
  let ve, xe;
  return s && ([ve, xe] = s(se)), {
    render: B,
    hydrate: ve,
    createApp: $n(B, ve)
  };
}
function ds({ effect: e, update: s }, t) {
  e.allowRecurse = s.allowRecurse = t;
}
function wt(e, s, t = !1) {
  const o = e.children, a = s.children;
  if (A(o) && A(a))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = a[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[r] = ss(a[r]), l.el = i.el), t || wt(i, l)), {}.NODE_ENV !== "production" && l.type === pe && !l.el && (l.el = i.el);
    }
}
function ol(e) {
  const s = e.slice(), t = [0];
  let o, a, r, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const c = e[o];
    if (c !== 0) {
      if (a = t[t.length - 1], e[a] < c) {
        s[o] = a, t.push(o);
        continue;
      }
      for (r = 0, i = t.length - 1; r < i; )
        l = r + i >> 1, e[t[l]] < c ? r = l + 1 : i = l;
      c < e[t[r]] && (r > 0 && (s[o] = t[r - 1]), t[r] = o);
    }
  }
  for (r = t.length, i = t[r - 1]; r-- > 0; )
    t[r] = i, i = s[i];
  return t;
}
const al = (e) => e.__isTeleport, he = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Pt = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), pe = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), Js = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Qs = [];
let Re = null;
function Ne(e = !1) {
  Qs.push(Re = e ? null : []);
}
function rl() {
  Qs.pop(), Re = Qs[Qs.length - 1] || null;
}
let st = 1;
function va(e) {
  st += e;
}
function Mr(e) {
  return e.dynamicChildren = st > 0 ? Re || Rs : null, rl(), st > 0 && Re && Re.push(e), e;
}
function _e(e, s, t, o, a, r) {
  return Mr(Y(e, s, t, o, a, r, !0));
}
function Yo(e, s, t, o, a) {
  return Mr(ue(e, s, t, o, a, !0));
}
function tt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gs(e, s) {
  return {}.NODE_ENV !== "production" && s.shapeFlag & 6 && Cs.has(s.type) ? !1 : e.type === s.type && e.key === s.key;
}
const il = (...e) => Kr(...e), Kt = "__vInternal", Pr = ({ key: e }) => e ?? null, vt = ({ ref: e, ref_key: s, ref_for: t }) => e != null ? ne(e) || de(e) || _(e) ? { i: qe, r: e, k: s, f: !!t } : e : null;
function Y(e, s = null, t = null, o = 0, a = null, r = e === he ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Pr(s),
    ref: s && vt(s),
    scopeId: xr,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null
  };
  return l ? (Jo(u, t), r & 128 && e.normalize(u)) : t && (u.shapeFlag |= ne(t) ? 8 : 16), {}.NODE_ENV !== "production" && u.key !== u.key && N("VNode created with invalid key (NaN). VNode type:", u.type), st > 0 && !i && Re && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && Re.push(u), u;
}
const ue = {}.NODE_ENV !== "production" ? il : Kr;
function Kr(e, s = null, t = null, o = 0, a = null, r = !1) {
  if ((!e || e === Cn) && ({}.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = pe), tt(e)) {
    const l = We(e, s, !0);
    return t && Jo(l, t), st > 0 && !r && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag |= -2, l;
  }
  if (Jr(e) && (e = e.__vccOpts), s) {
    s = nl(s);
    let { class: l, style: u } = s;
    l && !ne(l) && (s.class = zo(l)), J(u) && (io(u) && !A(u) && (u = ae({}, u)), s.style = jo(u));
  }
  const i = ne(e) ? 1 : mn(e) ? 128 : al(e) ? 64 : J(e) ? 4 : _(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && io(e) && (e = U(e), N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Y(e, s, t, o, a, i, r, !0);
}
function nl(e) {
  return e ? io(e) || Kt in e ? ae({}, e) : e : null;
}
function We(e, s, t = !1) {
  const { props: o, ref: a, patchFlag: r, children: i } = e, l = s ? ul(o || {}, s) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Pr(l),
    ref: s && s.ref ? t && a ? A(a) ? a.concat(vt(s)) : [a, vt(s)] : vt(s) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && r === -1 && A(i) ? i.map(Br) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: s && e.type !== he ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && We(e.ssContent),
    ssFallback: e.ssFallback && We(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function Br(e) {
  const s = We(e);
  return A(e.children) && (s.children = e.children.map(Br)), s;
}
function ll(e = " ", s = 0) {
  return ue(Pt, null, e, s);
}
function ko(e = "", s = !1) {
  return s ? (Ne(), Yo(pe, null, e)) : ue(pe, null, e);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? ue(pe) : A(e) ? ue(
    he,
    null,
    e.slice()
  ) : typeof e == "object" ? ss(e) : ue(Pt, null, String(e));
}
function ss(e) {
  return e.el === null || e.memo ? e : We(e);
}
function Jo(e, s) {
  let t = 0;
  const { shapeFlag: o } = e;
  if (s == null)
    s = null;
  else if (A(s))
    t = 16;
  else if (typeof s == "object")
    if (o & 65) {
      const a = s.default;
      a && (a._c && (a._d = !1), Jo(e, a()), a._c && (a._d = !0));
      return;
    } else {
      t = 32;
      const a = s._;
      !a && !(Kt in s) ? s._ctx = qe : a === 3 && qe && (qe.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else
    _(s) ? (s = { default: s, _ctx: qe }, t = 32) : (s = String(s), o & 64 ? (t = 16, s = [ll(s)]) : t = 8);
  e.children = s, e.shapeFlag |= t;
}
function ul(...e) {
  const s = {};
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    for (const a in o)
      if (a === "class")
        s.class !== o.class && (s.class = zo([s.class, o.class]));
      else if (a === "style")
        s.style = jo([s.style, o.style]);
      else if (rt(a)) {
        const r = s[a], i = o[a];
        i && r !== i && !(A(r) && r.includes(i)) && (s[a] = r ? [].concat(r, i) : i);
      } else
        a !== "" && (s[a] = o[a]);
  }
  return s;
}
function Me(e, s, t, o = null) {
  De(e, s, 7, [
    t,
    o
  ]);
}
const cl = Fr();
let dl = 0;
function fl(e, s, t) {
  const o = e.type, a = (s ? s.appContext : e.appContext) || cl, r = {
    uid: dl++,
    vnode: e,
    type: o,
    parent: s,
    appContext: a,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new ni(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: s ? s.provides : Object.create(a.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Ar(o, a),
    emitsOptions: vr(o, a),
    emit: null,
    emitted: null,
    propsDefaults: H,
    inheritAttrs: o.inheritAttrs,
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? r.ctx = In(r) : r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = un.bind(null, r), e.ce && e.ce(r), r;
}
let ce = null;
const Wr = () => ce || qe, Ss = (e) => {
  ce = e, e.scope.on();
}, Ns = () => {
  ce && ce.scope.off(), ce = null;
}, pl = /* @__PURE__ */ Fs("slot,component");
function wo(e, s) {
  const t = s.isNativeTag || Pa;
  (pl(e) || t(e)) && N("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Lr(e) {
  return e.vnode.shapeFlag & 4;
}
let ot = !1;
function hl(e, s = !1) {
  ot = s;
  const { props: t, children: o } = e.vnode, a = Lr(e);
  Pn(e, t, a, s), Zn(e, o);
  const r = a ? ml(e, s) : void 0;
  return ot = !1, r;
}
function ml(e, s) {
  var t;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && wo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        wo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        Dr(r[i]);
    }
    o.compilerOptions && yl() && N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = rr(new Proxy(e.ctx, Cr)), {}.NODE_ENV !== "production" && Tn(e);
  const { setup: a } = o;
  if (a) {
    const r = e.setupContext = a.length > 1 ? gl(e) : null;
    Ss(e), zs();
    const i = Je(a, e, 0, [{}.NODE_ENV !== "production" ? Ts(e.props) : e.props, r]);
    if (Os(), Ns(), qo(i)) {
      if (i.then(Ns, Ns), s)
        return i.then((l) => {
          xa(e, l, s);
        }).catch((l) => {
          Ut(l, e, 0);
        });
      if (e.asyncDep = i, {}.NODE_ENV !== "production" && !e.suspense) {
        const l = (t = o.name) !== null && t !== void 0 ? t : "Anonymous";
        N(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      xa(e, i, s);
  } else
    Hr(e, s);
}
function xa(e, s, t) {
  _(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : J(s) ? ({}.NODE_ENV !== "production" && tt(s) && N("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = s), e.setupState = lr(s), {}.NODE_ENV !== "production" && An(e)) : {}.NODE_ENV !== "production" && s !== void 0 && N(`setup() should return an object. Received: ${s === null ? "null" : typeof s}`), Hr(e, t);
}
let vo;
const yl = () => !vo;
function Hr(e, s, t) {
  const o = e.type;
  if (!e.render) {
    if (!s && vo && !o.render) {
      const a = o.template || Lo(e).template;
      if (a) {
        ({}).NODE_ENV !== "production" && He(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, c = ae(ae({
          isCustomElement: r,
          delimiters: l
        }, i), u);
        o.render = vo(a, c), {}.NODE_ENV !== "production" && Ye(e, "compile");
      }
    }
    e.render = o.render || fe;
  }
  Ss(e), zs(), _n(e), Os(), Ns(), {}.NODE_ENV !== "production" && !o.render && e.render === fe && !s && (o.template ? N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : N("Component is missing template or render function."));
}
function Ea(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(s, t) {
      return Ot(), je(e, "get", "$attrs"), s[t];
    },
    set() {
      return N("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return N("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(s, t) {
      return je(e, "get", "$attrs"), s[t];
    }
  });
}
function gl(e) {
  const s = (o) => {
    ({}).NODE_ENV !== "production" && e.exposed && N("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let t;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return t || (t = Ea(e));
    },
    get slots() {
      return Ts(e.slots);
    },
    get emit() {
      return (o, ...a) => e.emit(o, ...a);
    },
    expose: s
  }) : {
    get attrs() {
      return t || (t = Ea(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Qo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(lr(rr(e.exposed)), {
      get(s, t) {
        if (t in s)
          return s[t];
        if (t in Us)
          return Us[t](e);
      }
    }));
}
const bl = /(?:^|[-_])(\w)/g, kl = (e) => e.replace(bl, (s) => s.toUpperCase()).replace(/[-_]/g, "");
function Yr(e, s = !0) {
  return _(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Bt(e, s, t = !1) {
  let o = Yr(s);
  if (!o && s.__file) {
    const a = s.__file.match(/([^/\\]+)\.\w+$/);
    a && (o = a[1]);
  }
  if (!o && e && e.parent) {
    const a = (r) => {
      for (const i in r)
        if (r[i] === s)
          return i;
    };
    o = a(e.components || e.parent.type.components) || a(e.appContext.components);
  }
  return o ? kl(o) : t ? "App" : "Anonymous";
}
function Jr(e) {
  return _(e) && "__vccOpts" in e;
}
const wl = (e, s) => Pi(e, s, ot);
function vl(e, s, t) {
  const o = arguments.length;
  return o === 2 ? J(s) && !A(s) ? tt(s) ? ue(e, null, [s]) : ue(e, s) : ue(e, null, s) : (o > 3 ? t = Array.prototype.slice.call(arguments, 2) : o === 3 && tt(t) && (t = [t]), ue(e, s, t));
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function xl() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, s = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, a = {
    header(f) {
      return J(f) ? f.__isVue ? ["div", e, "VueInstance"] : de(f) ? [
        "div",
        {},
        ["span", e, p(f)],
        "<",
        l(f.value),
        ">"
      ] : vs(f) ? [
        "div",
        {},
        ["span", e, Gt(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${is(f) ? " (readonly)" : ""}`
      ] : is(f) ? [
        "div",
        {},
        ["span", e, Gt(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const h = [];
    f.type.props && f.props && h.push(i("props", U(f.props))), f.setupState !== H && h.push(i("setup", f.setupState)), f.data !== H && h.push(i("data", U(f.data)));
    const v = u(f, "computed");
    v && h.push(i("computed", v));
    const E = u(f, "inject");
    return E && h.push(i("injected", E)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), h;
  }
  function i(f, h) {
    return h = ae({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((v) => [
          "div",
          {},
          ["span", o, v + ": "],
          l(h[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, h = !0) {
    return typeof f == "number" ? ["span", s, f] : typeof f == "string" ? ["span", t, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : J(f) ? ["object", { object: h ? U(f) : f }] : ["span", t, String(f)];
  }
  function u(f, h) {
    const v = f.type;
    if (_(v))
      return;
    const E = {};
    for (const z in f.ctx)
      c(v, z, h) && (E[z] = f.ctx[z]);
    return E;
  }
  function c(f, h, v) {
    const E = f[v];
    if (A(E) && E.includes(h) || J(E) && h in E || f.extends && c(f.extends, h, v) || f.mixins && f.mixins.some((z) => c(z, h, v)))
      return !0;
  }
  function p(f) {
    return Gt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
const Na = "3.2.39", El = "http://www.w3.org/2000/svg", bs = typeof document < "u" ? document : null, ja = bs && /* @__PURE__ */ bs.createElement("template"), Nl = {
  insert: (e, s, t) => {
    s.insertBefore(e, t || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, t, o) => {
    const a = s ? bs.createElementNS(El, e) : bs.createElement(e, t ? { is: t } : void 0);
    return e === "select" && o && o.multiple != null && a.setAttribute("multiple", o.multiple), a;
  },
  createText: (e) => bs.createTextNode(e),
  createComment: (e) => bs.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bs.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  cloneNode(e) {
    const s = e.cloneNode(!0);
    return "_value" in e && (s._value = e._value), s;
  },
  insertStaticContent(e, s, t, o, a, r) {
    const i = t ? t.previousSibling : s.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; s.insertBefore(a.cloneNode(!0), t), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      ja.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = ja.content;
      if (o) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      s.insertBefore(l, t);
    }
    return [
      i ? i.nextSibling : s.firstChild,
      t ? t.previousSibling : s.lastChild
    ];
  }
};
function jl(e, s, t) {
  const o = e._vtc;
  o && (s = (s ? [s, ...o] : [...o]).join(" ")), s == null ? e.removeAttribute("class") : t ? e.setAttribute("class", s) : e.className = s;
}
function zl(e, s, t) {
  const o = e.style, a = ne(t);
  if (t && !a) {
    for (const r in t)
      xo(o, r, t[r]);
    if (s && !ne(s))
      for (const r in s)
        t[r] == null && xo(o, r, "");
  } else {
    const r = o.display;
    a ? s !== t && (o.cssText = t) : s && e.removeAttribute("style"), "_vod" in e && (o.display = r);
  }
}
const za = /\s*!important$/;
function xo(e, s, t) {
  if (A(t))
    t.forEach((o) => xo(e, s, o));
  else if (t == null && (t = ""), s.startsWith("--"))
    e.setProperty(s, t);
  else {
    const o = Ol(e, s);
    za.test(t) ? e.setProperty(Ue(o), t.replace(za, ""), "important") : e[o] = t;
  }
}
const Oa = ["Webkit", "Moz", "ms"], Xt = {};
function Ol(e, s) {
  const t = Xt[s];
  if (t)
    return t;
  let o = as(s);
  if (o !== "filter" && o in e)
    return Xt[s] = o;
  o = It(o);
  for (let a = 0; a < Oa.length; a++) {
    const r = Oa[a] + o;
    if (r in e)
      return Xt[s] = r;
  }
  return s;
}
const Va = "http://www.w3.org/1999/xlink";
function Vl(e, s, t, o, a) {
  if (o && s.startsWith("xlink:"))
    t == null ? e.removeAttributeNS(Va, s.slice(6, s.length)) : e.setAttributeNS(Va, s, t);
  else {
    const r = Xr(s);
    t == null || r && !Fa(t) ? e.removeAttribute(s) : e.setAttribute(s, r ? "" : t);
  }
}
function ql(e, s, t, o, a, r, i) {
  if (s === "innerHTML" || s === "textContent") {
    o && i(o, a, r), e[s] = t ?? "";
    return;
  }
  if (s === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = t;
    const u = t ?? "";
    (e.value !== u || e.tagName === "OPTION") && (e.value = u), t == null && e.removeAttribute(s);
    return;
  }
  let l = !1;
  if (t === "" || t == null) {
    const u = typeof e[s];
    u === "boolean" ? t = Fa(t) : t == null && u === "string" ? (t = "", l = !0) : u === "number" && (t = 0, l = !0);
  }
  try {
    e[s] = t;
  } catch (u) {
    ({}).NODE_ENV !== "production" && N(`Failed setting prop "${s}" on <${e.tagName.toLowerCase()}>: value ${t} is invalid.`, u);
  }
  l && e.removeAttribute(s);
}
const [Qr, Dl] = /* @__PURE__ */ (() => {
  let e = Date.now, s = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const t = navigator.userAgent.match(/firefox\/(\d+)/i);
    s = !!(t && Number(t[1]) <= 53);
  }
  return [e, s];
})();
let Eo = 0;
const Cl = /* @__PURE__ */ Promise.resolve(), Il = () => {
  Eo = 0;
}, Tl = () => Eo || (Cl.then(Il), Eo = Qr());
function Al(e, s, t, o) {
  e.addEventListener(s, t, o);
}
function Rl(e, s, t, o) {
  e.removeEventListener(s, t, o);
}
function _l(e, s, t, o, a = null) {
  const r = e._vei || (e._vei = {}), i = r[s];
  if (o && i)
    i.value = o;
  else {
    const [l, u] = Ul(s);
    if (o) {
      const c = r[s] = Sl(o, a);
      Al(e, l, c, u);
    } else
      i && (Rl(e, l, i, u), r[s] = void 0);
  }
}
const qa = /(?:Once|Passive|Capture)$/;
function Ul(e) {
  let s;
  if (qa.test(e)) {
    s = {};
    let o;
    for (; o = e.match(qa); )
      e = e.slice(0, e.length - o[0].length), s[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ue(e.slice(2)), s];
}
function Sl(e, s) {
  const t = (o) => {
    const a = o.timeStamp || Qr();
    (Dl || a >= t.attached - 1) && De(Fl(o, t.value), s, 5, [o]);
  };
  return t.value = e, t.attached = Tl(), t;
}
function Fl(e, s) {
  if (A(s)) {
    const t = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      t.call(e), e._stopped = !0;
    }, s.map((o) => (a) => !a._stopped && o && o(a));
  } else
    return s;
}
const Da = /^on[a-z]/, Ml = (e, s, t, o, a = !1, r, i, l, u) => {
  s === "class" ? jl(e, o, a) : s === "style" ? zl(e, t, o) : rt(s) ? xt(s) || _l(e, s, t, o, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Pl(e, s, o, a)) ? ql(e, s, o, r, i, l, u) : (s === "true-value" ? e._trueValue = o : s === "false-value" && (e._falseValue = o), Vl(e, s, o, a));
};
function Pl(e, s, t, o) {
  return o ? !!(s === "innerHTML" || s === "textContent" || s in e && Da.test(s) && _(t)) : s === "spellcheck" || s === "draggable" || s === "translate" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA" || Da.test(s) && ne(t) ? !1 : s in e;
}
function Kl(e, s) {
  const t = Vs(e);
  class o extends Zo {
    constructor(r) {
      super(t, r, s);
    }
  }
  return o.def = t, o;
}
const Bl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Zo extends Bl {
  constructor(s, t = {}, o) {
    super(), this._def = s, this._props = t, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : ({}.NODE_ENV !== "production" && this.shadowRoot && N("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, fr(() => {
      this._connected || (Sa(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const a of o)
        this._setAttr(a.attributeName);
    }).observe(this, { attributes: !0 });
    const s = (o) => {
      const { props: a, styles: r } = o, i = !A(a), l = a ? i ? Object.keys(a) : a : [];
      let u;
      if (i)
        for (const c in this._props) {
          const p = a[c];
          (p === Number || p && p.type === Number) && (this._props[c] = Nt(this._props[c]), (u || (u = /* @__PURE__ */ Object.create(null)))[c] = !0);
        }
      this._numberProps = u;
      for (const c of Object.keys(this))
        c[0] !== "_" && this._setProp(c, this[c], !0, !1);
      for (const c of l.map(as))
        Object.defineProperty(this, c, {
          get() {
            return this._getProp(c);
          },
          set(p) {
            this._setProp(c, p);
          }
        });
      this._applyStyles(r), this._update();
    }, t = this._def.__asyncLoader;
    t ? t().then(s) : s(this._def);
  }
  _setAttr(s) {
    let t = this.getAttribute(s);
    this._numberProps && this._numberProps[s] && (t = Nt(t)), this._setProp(as(s), t, !1);
  }
  _getProp(s) {
    return this._props[s];
  }
  _setProp(s, t, o = !0, a = !0) {
    t !== this._props[s] && (this._props[s] = t, a && this._instance && this._update(), o && (t === !0 ? this.setAttribute(Ue(s), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(Ue(s), t + "") : t || this.removeAttribute(Ue(s))));
  }
  _update() {
    Sa(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const s = ue(this._def, ae({}, this._props));
    return this._instance || (s.ce = (t) => {
      this._instance = t, t.isCE = !0, {}.NODE_ENV !== "production" && (t.ceReload = (a) => {
        this._styles && (this._styles.forEach((r) => this.shadowRoot.removeChild(r)), this._styles.length = 0), this._applyStyles(a), this._def.__asyncLoader || (this._instance = null, this._update());
      }), t.emit = (a, ...r) => {
        this.dispatchEvent(new CustomEvent(a, {
          detail: r
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Zo) {
          t.parent = o._instance;
          break;
        }
    }), s;
  }
  _applyStyles(s) {
    s && s.forEach((t) => {
      const o = document.createElement("style");
      o.textContent = t, this.shadowRoot.appendChild(o), {}.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
function Wl(e) {
  const s = Wr();
  if (!s) {
    ({}).NODE_ENV !== "production" && N("useCssVars is called without current active component instance.");
    return;
  }
  const t = () => No(s.subTree, e(s.proxy));
  bn(t), lt(() => {
    const o = new MutationObserver(t);
    o.observe(s.subTree.el.parentNode, { childList: !0 }), Bo(() => o.disconnect());
  });
}
function No(e, s) {
  if (e.shapeFlag & 128) {
    const t = e.suspense;
    e = t.activeBranch, t.pendingBranch && !t.isHydrating && t.effects.push(() => {
      No(t.activeBranch, s);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ca(e.el, s);
  else if (e.type === he)
    e.children.forEach((t) => No(t, s));
  else if (e.type === Js) {
    let { el: t, anchor: o } = e;
    for (; t && (Ca(t, s), t !== o); )
      t = t.nextSibling;
  }
}
function Ca(e, s) {
  if (e.nodeType === 1) {
    const t = e.style;
    for (const o in s)
      t.setProperty(`--${o}`, s[o]);
  }
}
const Xe = "transition", Bs = "animation", Wt = (e, { slots: s }) => vl(jr, Ll(e), s);
Wt.displayName = "Transition";
const Zr = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Wt.props = /* @__PURE__ */ ae({}, jr.props, Zr);
const fs = (e, s = []) => {
  A(e) ? e.forEach((t) => t(...s)) : e && e(...s);
}, Ia = (e) => e ? A(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Ll(e) {
  const s = {};
  for (const O in e)
    O in Zr || (s[O] = e[O]);
  if (e.css === !1)
    return s;
  const { name: t = "v", type: o, duration: a, enterFromClass: r = `${t}-enter-from`, enterActiveClass: i = `${t}-enter-active`, enterToClass: l = `${t}-enter-to`, appearFromClass: u = r, appearActiveClass: c = i, appearToClass: p = l, leaveFromClass: f = `${t}-leave-from`, leaveActiveClass: h = `${t}-leave-active`, leaveToClass: v = `${t}-leave-to` } = e, E = Hl(a), z = E && E[0], C = E && E[1], { onBeforeEnter: P, onEnter: T, onEnterCancelled: Q, onLeave: le, onLeaveCancelled: G, onBeforeAppear: ze = P, onAppear: ke = T, onAppearCancelled: S = Q } = s, Z = (O, ee, we) => {
    ps(O, ee ? p : l), ps(O, ee ? c : i), we && we();
  }, W = (O, ee) => {
    O._isLeaving = !1, ps(O, f), ps(O, v), ps(O, h), ee && ee();
  }, ie = (O) => (ee, we) => {
    const Oe = O ? ke : T, re = () => Z(ee, O, we);
    fs(Oe, [ee, re]), Ta(() => {
      ps(ee, O ? u : r), $e(ee, O ? p : l), Ia(Oe) || Aa(ee, o, z, re);
    });
  };
  return ae(s, {
    onBeforeEnter(O) {
      fs(P, [O]), $e(O, r), $e(O, i);
    },
    onBeforeAppear(O) {
      fs(ze, [O]), $e(O, u), $e(O, c);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(O, ee) {
      O._isLeaving = !0;
      const we = () => W(O, ee);
      $e(O, f), Zl(), $e(O, h), Ta(() => {
        !O._isLeaving || (ps(O, f), $e(O, v), Ia(le) || Aa(O, o, C, we));
      }), fs(le, [O, we]);
    },
    onEnterCancelled(O) {
      Z(O, !1), fs(Q, [O]);
    },
    onAppearCancelled(O) {
      Z(O, !0), fs(S, [O]);
    },
    onLeaveCancelled(O) {
      W(O), fs(G, [O]);
    }
  });
}
function Hl(e) {
  if (e == null)
    return null;
  if (J(e))
    return [$t(e.enter), $t(e.leave)];
  {
    const s = $t(e);
    return [s, s];
  }
}
function $t(e) {
  const s = Nt(e);
  return {}.NODE_ENV !== "production" && Yl(s), s;
}
function Yl(e) {
  typeof e != "number" ? N(`<transition> explicit duration is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && N("<transition> explicit duration is NaN - the duration expression might be incorrect.");
}
function $e(e, s) {
  s.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(s);
}
function ps(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: t } = e;
  t && (t.delete(s), t.size || (e._vtc = void 0));
}
function Ta(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Jl = 0;
function Aa(e, s, t, o) {
  const a = e._endId = ++Jl, r = () => {
    a === e._endId && o();
  };
  if (t)
    return setTimeout(r, t);
  const { type: i, timeout: l, propCount: u } = Ql(e, s);
  if (!i)
    return o();
  const c = i + "end";
  let p = 0;
  const f = () => {
    e.removeEventListener(c, h), r();
  }, h = (v) => {
    v.target === e && ++p >= u && f();
  };
  setTimeout(() => {
    p < u && f();
  }, l + 1), e.addEventListener(c, h);
}
function Ql(e, s) {
  const t = window.getComputedStyle(e), o = (E) => (t[E] || "").split(", "), a = o(Xe + "Delay"), r = o(Xe + "Duration"), i = Ra(a, r), l = o(Bs + "Delay"), u = o(Bs + "Duration"), c = Ra(l, u);
  let p = null, f = 0, h = 0;
  s === Xe ? i > 0 && (p = Xe, f = i, h = r.length) : s === Bs ? c > 0 && (p = Bs, f = c, h = u.length) : (f = Math.max(i, c), p = f > 0 ? i > c ? Xe : Bs : null, h = p ? p === Xe ? r.length : u.length : 0);
  const v = p === Xe && /\b(transform|all)(,|$)/.test(t[Xe + "Property"]);
  return {
    type: p,
    timeout: f,
    propCount: h,
    hasTransform: v
  };
}
function Ra(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((t, o) => _a(t) + _a(e[o])));
}
function _a(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Zl() {
  return document.body.offsetHeight;
}
const Gl = ["ctrl", "shift", "alt", "meta"], Xl = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, s) => Gl.some((t) => e[`${t}Key`] && !s.includes(t))
}, $l = (e, s) => (t, ...o) => {
  for (let a = 0; a < s.length; a++) {
    const r = Xl[s[a]];
    if (r && r(t, s))
      return;
  }
  return e(t, ...o);
}, eu = /* @__PURE__ */ ae({ patchProp: Ml }, Nl);
let Ua;
function su() {
  return Ua || (Ua = sl(eu));
}
const Sa = (...e) => {
  su().render(...e);
};
function tu() {
  xl();
}
({}).NODE_ENV !== "production" && tu();
const ou = { id: "keyboard" }, au = { class: "wrapper" }, ru = { class: "keyboard" }, iu = /* @__PURE__ */ Y("div", { class: "space" }, null, -1), nu = /* @__PURE__ */ Y("div", { class: "space" }, null, -1), lu = /* @__PURE__ */ Y("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, [
  /* @__PURE__ */ Y("path", {
    fill: "",
    d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
  })
], -1), uu = [
  lu
], cu = /* @__PURE__ */ Vs({
  __name: "Keyboard.ce",
  emits: ["keyClick", "enterClick", "deleteClick"],
  setup(e, { expose: s, emit: t }) {
    s({ startInteraction: p, stopInteraction: f, getKey: i });
    const o = $(), a = $(), r = $();
    function i(h) {
      for (const v of o.value)
        if (v.textContent === h.toUpperCase())
          return v;
    }
    function l(h) {
      return t("keyClick", h.currentTarget.textContent);
    }
    function u(h) {
      return t("enterClick");
    }
    function c(h) {
      return t("deleteClick");
    }
    function p() {
      for (const h of o.value)
        h.addEventListener("click", l), h.value = h.textContent;
      a.value.addEventListener("click", u), r.value.addEventListener("click", c);
    }
    function f() {
      for (const h of o.value)
        h.removeEventListener("click", l);
      a.value.removeEventListener("click", u), r.value.removeEventListener("click", c);
    }
    return (h, v) => (Ne(), _e("div", ou, [
      Y("div", au, [
        Y("div", ru, [
          (Ne(), _e(he, null, kt(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], (E) => Y("button", {
            class: "key",
            key: E,
            ref_for: !0,
            ref_key: "letterKey",
            ref: o
          }, Hs(E), 1)), 64)),
          iu,
          (Ne(), _e(he, null, kt(["A", "S", "D", "F", "G", "H", "J", "K", "L"], (E) => Y("button", {
            class: "key",
            key: E,
            ref_for: !0,
            ref_key: "letterKey",
            ref: o
          }, Hs(E), 1)), 64)),
          nu,
          Y("button", {
            class: "key large",
            ref_key: "enterKey",
            ref: a
          }, "Enter", 512),
          (Ne(), _e(he, null, kt(["Z", "X", "C", "V", "B", "N", "M"], (E) => Y("button", {
            class: "key",
            key: E,
            ref_for: !0,
            ref_key: "letterKey",
            ref: o
          }, Hs(E), 1)), 64)),
          Y("button", {
            class: "key large",
            ref_key: "deleteKey",
            ref: r
          }, uu, 512)
        ])
      ])
    ]));
  }
}), du = { id: "gameboard" }, fu = { class: "wrapper" }, pu = /* @__PURE__ */ Vs({
  __name: "Gameboard.ce",
  props: {
    title: {
      type: String
    },
    shareTitle: {
      type: String
    }
  },
  setup(e, { expose: s }) {
    const t = e;
    s({
      nextTile: r,
      getActiveTiles: i,
      getResults: c,
      getShareTiles: u,
      shakeTiles: p,
      danceTiles: f,
      getRemainingTiles: l
    });
    const o = $(), a = 500;
    function r() {
      return o.value.querySelector(":not([data-letter])");
    }
    function i() {
      return o.value.querySelectorAll("[data-state='active']");
    }
    function l() {
      return o.value.querySelectorAll(":not([data-letter])");
    }
    function u() {
      const v = o.value.querySelectorAll(
        ".tile[data-state='wrong'], .tile[data-state='wrong-location'], .tile[data-state='correct']"
      ), E = [];
      for (const C of v)
        C.dataset.state === "wrong" && E.push("\u2B1B\uFE0F"), C.dataset.state === "wrong-location" && E.push("\u{1F7E8}"), C.dataset.state === "correct" && E.push("\u{1F7E9}");
      let z = "";
      for (let C = 0; C < E.length / 5; C++)
        z += `${E[0 + C * 5]}${E[1 + C * 5]}${E[2 + C * 5]}${E[3 + C * 5]}${E[4 + C * 5]}
`;
      return z;
    }
    function c() {
      const v = o.value.querySelectorAll(
        ".tile[data-state='wrong'], .tile[data-state='wrong-location'], .tile[data-state='correct']"
      ), E = t.shareTitle || t.title, z = [];
      for (const T of v)
        T.dataset.state === "wrong" && z.push("\u2B1B\uFE0F"), T.dataset.state === "wrong-location" && z.push("\u{1F7E8}"), T.dataset.state === "correct" && z.push("\u{1F7E9}");
      let C = "";
      for (let T = 0; T < z.length / 5; T++)
        C += `${z[0 + T * 5]}${z[1 + T * 5]}${z[2 + T * 5]}${z[3 + T * 5]}${z[4 + T * 5]}
`;
      let P = !1;
      for (const T of z.slice(-5))
        T !== "\u{1F7E9}" && (P = !0);
      return `${E} ${P ? "X" : z.length / 5}/6

${C}
${window.location.href}
`.trim();
    }
    function p(v) {
      v.forEach((E) => {
        E.classList.add("shake");
      });
    }
    function f(v) {
      v.forEach((E, z) => {
        setTimeout(() => {
          E.classList.add("dance");
        }, z * a / 5);
      });
    }
    function h(v) {
      const E = v.target;
      E.classList.remove("shake"), E.classList.remove("dance");
    }
    return (v, E) => (Ne(), _e("div", du, [
      Y("div", fu, [
        Y("div", {
          ref_key: "gameboard",
          ref: o,
          class: "gameboard"
        }, [
          (Ne(), _e(he, null, kt(30, (z) => Y("div", {
            onAnimationend: h,
            class: "tile",
            key: z
          }, null, 32)), 64))
        ], 512)
      ])
    ]));
  }
}), hu = /* @__PURE__ */ Vs({
  __name: "Header.ce",
  props: {
    title: {
      type: String,
      default: "Wordle For Good"
    }
  },
  setup(e) {
    return (s, t) => (Ne(), _e("header", null, [
      Y("h1", null, Hs(e.title), 1)
    ]));
  }
}), mu = {
  key: 0,
  class: "alert-container"
}, yu = { class: "alert" }, gu = /* @__PURE__ */ Vs({
  __name: "Alert.ce",
  setup(e, { expose: s }) {
    s({ showAlert: a });
    const t = $(!1), o = $("");
    function a(r, i = 1e3) {
      t.value = !0, o.value = r, i && setTimeout(() => {
        t.value = !1;
      }, i);
    }
    return (r, i) => (Ne(), Yo(Wt, null, {
      default: Mo(() => [
        t.value ? (Ne(), _e("div", mu, [
          Y("span", yu, Hs(o.value), 1)
        ])) : ko("", !0)
      ]),
      _: 1
    }));
  }
}), bu = { id: "wfg-help" }, ku = /* @__PURE__ */ Y("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2aTU7DMBCFP7gDUVuOlB6BC8C6lAPAtcoFYEUX3IOwgFVYZCIguJFn/BML+UlWKnWcvq9J7RdNoaqqyqotcADegX7h0YmXVgvxUID5U+PeF2IrEz6AHbDWfgsJtAZuGTz1eF6ZRynepfNl1p7B28GnuJPiVUpHRq0YvL35FI/3Yqly+jtfwEgSVZDSVEFKUwyQa6AJmN/IOaJLs/zeSO0RG0wjc3s5l4+8/WlALoAXqX9FF2emc3034CQgLkM+MFYIlT/Lzq6BCYFQ+bNGFB+YUAiVv5CsNQcTA0LlLzQ0umBiQaj8xUi/P5fV4+R1yJ4DmUHg91WIcSVGFRHjz3J+WL21RK4fdkgCMPuLufyuZt6zwmTfEF0/7BgwWSPK3OoUCpMtNPossSEwWWK8Zp+wwiQB+TcPVpD/UTd7REmlIiJKMlWQ0lRBSpMLpJNjCS23qS7l+KfR4wJ5kuNVMjt2jZ6efYpbvpuhe2CTyJRGG+AO+ETRDIWhBXyqPbz08G5Pj2oZuqdjc3TJYf7DQFVV1aAvuftbeCQwpVAAAAAASUVORK5CYII=" }, null, -1), wu = [
  ku
], vu = /* @__PURE__ */ Y("section", null, [
  /* @__PURE__ */ Y("h1", null, "How to Play"),
  /* @__PURE__ */ Y("h3", null, "Guess the Wordle in 6 tries."),
  /* @__PURE__ */ Y("div", { class: "content" }, [
    /* @__PURE__ */ Y("ul", null, [
      /* @__PURE__ */ Y("li", null, " Each guess must be a valid 5 letter word. Hit the enter button to submit. "),
      /* @__PURE__ */ Y("li", null, " After each guess, the color of the tiles will change to show how close your guess was to the word. ")
    ]),
    /* @__PURE__ */ Y("img", {
      alt: "Game Examples",
      src: "data:image/webp;base64,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"
    })
  ])
], -1), xu = /* @__PURE__ */ Vs({
  __name: "Help.ce",
  emits: ["close"],
  setup(e, { emit: s }) {
    function t() {
      s("close");
    }
    return lt(() => {
    }), (o, a) => (Ne(), _e("div", bu, [
      Y("div", {
        onClick: t,
        class: "backdrop"
      }, [
        Y("div", {
          onClick: a[0] || (a[0] = $l(() => {
          }, ["stop"])),
          class: "wrapper"
        }, [
          Y("a", {
            class: "close",
            onClick: t
          }, wu),
          vu
        ])
      ])
    ]));
  }
}), eo = [
  "aahed",
  "aalii",
  "aargh",
  "aarti",
  "abaca",
  "abaci",
  "abacs",
  "abaft",
  "abaka",
  "abamp",
  "aband",
  "abash",
  "abask",
  "abaya",
  "abbas",
  "abbed",
  "abbes",
  "abcee",
  "abeam",
  "abear",
  "abele",
  "abers",
  "abets",
  "abies",
  "abler",
  "ables",
  "ablet",
  "ablow",
  "abmho",
  "abohm",
  "aboil",
  "aboma",
  "aboon",
  "abord",
  "abore",
  "abram",
  "abray",
  "abrim",
  "abrin",
  "abris",
  "absey",
  "absit",
  "abuna",
  "abune",
  "abuts",
  "abuzz",
  "abyes",
  "abysm",
  "acais",
  "acari",
  "accas",
  "accoy",
  "acerb",
  "acers",
  "aceta",
  "achar",
  "ached",
  "aches",
  "achoo",
  "acids",
  "acidy",
  "acing",
  "acini",
  "ackee",
  "acker",
  "acmes",
  "acmic",
  "acned",
  "acnes",
  "acock",
  "acold",
  "acred",
  "acres",
  "acros",
  "acted",
  "actin",
  "acton",
  "acyls",
  "adaws",
  "adays",
  "adbot",
  "addax",
  "added",
  "adder",
  "addio",
  "addle",
  "adeem",
  "adhan",
  "adieu",
  "adios",
  "adits",
  "adman",
  "admen",
  "admix",
  "adobo",
  "adown",
  "adoze",
  "adrad",
  "adred",
  "adsum",
  "aduki",
  "adunc",
  "adust",
  "advew",
  "adyta",
  "adzed",
  "adzes",
  "aecia",
  "aedes",
  "aegis",
  "aeons",
  "aerie",
  "aeros",
  "aesir",
  "afald",
  "afara",
  "afars",
  "afear",
  "aflaj",
  "afore",
  "afrit",
  "afros",
  "agama",
  "agami",
  "agars",
  "agast",
  "agave",
  "agaze",
  "agene",
  "agers",
  "agger",
  "aggie",
  "aggri",
  "aggro",
  "aggry",
  "aghas",
  "agila",
  "agios",
  "agism",
  "agist",
  "agita",
  "aglee",
  "aglet",
  "agley",
  "agloo",
  "aglus",
  "agmas",
  "agoge",
  "agone",
  "agons",
  "agood",
  "agria",
  "agrin",
  "agros",
  "agued",
  "agues",
  "aguna",
  "aguti",
  "aheap",
  "ahent",
  "ahigh",
  "ahind",
  "ahing",
  "ahint",
  "ahold",
  "ahull",
  "ahuru",
  "aidas",
  "aided",
  "aides",
  "aidoi",
  "aidos",
  "aiery",
  "aigas",
  "aight",
  "ailed",
  "aimed",
  "aimer",
  "ainee",
  "ainga",
  "aioli",
  "aired",
  "airer",
  "airns",
  "airth",
  "airts",
  "aitch",
  "aitus",
  "aiver",
  "aiyee",
  "aizle",
  "ajies",
  "ajiva",
  "ajuga",
  "ajwan",
  "akees",
  "akela",
  "akene",
  "aking",
  "akita",
  "akkas",
  "alaap",
  "alack",
  "alamo",
  "aland",
  "alane",
  "alang",
  "alans",
  "alant",
  "alapa",
  "alaps",
  "alary",
  "alate",
  "alays",
  "albas",
  "albee",
  "alcid",
  "alcos",
  "aldea",
  "alder",
  "aldol",
  "aleck",
  "alecs",
  "alefs",
  "aleft",
  "aleph",
  "alews",
  "aleye",
  "alfas",
  "algal",
  "algas",
  "algid",
  "algin",
  "algor",
  "algum",
  "alias",
  "alifs",
  "aline",
  "alist",
  "aliya",
  "alkie",
  "alkos",
  "alkyd",
  "alkyl",
  "allee",
  "allel",
  "allis",
  "allod",
  "allyl",
  "almah",
  "almas",
  "almeh",
  "almes",
  "almud",
  "almug",
  "alods",
  "aloed",
  "aloes",
  "aloha",
  "aloin",
  "aloos",
  "alowe",
  "altho",
  "altos",
  "alula",
  "alums",
  "alure",
  "alvar",
  "alway",
  "amahs",
  "amain",
  "amate",
  "amaut",
  "amban",
  "ambit",
  "ambos",
  "ambry",
  "ameba",
  "ameer",
  "amene",
  "amens",
  "ament",
  "amias",
  "amice",
  "amici",
  "amide",
  "amido",
  "amids",
  "amies",
  "amiga",
  "amigo",
  "amine",
  "amino",
  "amins",
  "amirs",
  "amlas",
  "amman",
  "ammon",
  "ammos",
  "amnia",
  "amnic",
  "amnio",
  "amoks",
  "amole",
  "amort",
  "amour",
  "amove",
  "amowt",
  "amped",
  "ampul",
  "amrit",
  "amuck",
  "amyls",
  "anana",
  "anata",
  "ancho",
  "ancle",
  "ancon",
  "andro",
  "anear",
  "anele",
  "anent",
  "angas",
  "anglo",
  "anigh",
  "anile",
  "anils",
  "anima",
  "animi",
  "anion",
  "anise",
  "anker",
  "ankhs",
  "ankus",
  "anlas",
  "annal",
  "annas",
  "annat",
  "anoas",
  "anole",
  "anomy",
  "ansae",
  "antae",
  "antar",
  "antas",
  "anted",
  "antes",
  "antis",
  "antra",
  "antre",
  "antsy",
  "anura",
  "anyon",
  "apace",
  "apage",
  "apaid",
  "apayd",
  "apays",
  "apeak",
  "apeek",
  "apers",
  "apert",
  "apery",
  "apgar",
  "aphis",
  "apian",
  "apiol",
  "apish",
  "apism",
  "apode",
  "apods",
  "apoop",
  "aport",
  "appal",
  "appay",
  "appel",
  "appro",
  "appui",
  "appuy",
  "apres",
  "apses",
  "apsis",
  "apsos",
  "apted",
  "apter",
  "aquae",
  "aquas",
  "araba",
  "araks",
  "arame",
  "arars",
  "arbas",
  "arced",
  "archi",
  "arcos",
  "arcus",
  "ardeb",
  "ardri",
  "aread",
  "areae",
  "areal",
  "arear",
  "areas",
  "areca",
  "aredd",
  "arede",
  "arefy",
  "areic",
  "arene",
  "arepa",
  "arere",
  "arete",
  "arets",
  "arett",
  "argal",
  "argan",
  "argil",
  "argle",
  "argol",
  "argon",
  "argot",
  "argus",
  "arhat",
  "arias",
  "ariel",
  "ariki",
  "arils",
  "ariot",
  "arish",
  "arked",
  "arled",
  "arles",
  "armed",
  "armer",
  "armet",
  "armil",
  "arnas",
  "arnut",
  "aroba",
  "aroha",
  "aroid",
  "arpas",
  "arpen",
  "arrah",
  "arras",
  "arret",
  "arris",
  "arroz",
  "arsed",
  "arses",
  "arsey",
  "arsis",
  "artal",
  "artel",
  "artic",
  "artis",
  "aruhe",
  "arums",
  "arval",
  "arvee",
  "arvos",
  "aryls",
  "asana",
  "ascon",
  "ascus",
  "asdic",
  "ashed",
  "ashes",
  "ashet",
  "asked",
  "asker",
  "askoi",
  "askos",
  "aspen",
  "asper",
  "aspic",
  "aspie",
  "aspis",
  "aspro",
  "assai",
  "assam",
  "asses",
  "assez",
  "assot",
  "aster",
  "astir",
  "astun",
  "asura",
  "asway",
  "aswim",
  "asyla",
  "ataps",
  "ataxy",
  "atigi",
  "atilt",
  "atimy",
  "atlas",
  "atman",
  "atmas",
  "atmos",
  "atocs",
  "atoke",
  "atoks",
  "atoms",
  "atomy",
  "atony",
  "atopy",
  "atria",
  "atrip",
  "attap",
  "attar",
  "atuas",
  "audad",
  "auger",
  "aught",
  "aulas",
  "aulic",
  "auloi",
  "aulos",
  "aumil",
  "aunes",
  "aunts",
  "aurae",
  "aural",
  "aurar",
  "auras",
  "aurei",
  "aures",
  "auric",
  "auris",
  "aurum",
  "autos",
  "auxin",
  "avale",
  "avant",
  "avast",
  "avels",
  "avens",
  "avers",
  "avgas",
  "avine",
  "avion",
  "avise",
  "aviso",
  "avize",
  "avows",
  "avyze",
  "awarn",
  "awato",
  "awave",
  "aways",
  "awdls",
  "aweel",
  "aweto",
  "awing",
  "awmry",
  "awned",
  "awner",
  "awols",
  "awork",
  "axels",
  "axile",
  "axils",
  "axing",
  "axite",
  "axled",
  "axles",
  "axman",
  "axmen",
  "axoid",
  "axone",
  "axons",
  "ayahs",
  "ayaya",
  "ayelp",
  "aygre",
  "ayins",
  "ayont",
  "ayres",
  "ayrie",
  "azans",
  "azide",
  "azido",
  "azine",
  "azlon",
  "azoic",
  "azole",
  "azons",
  "azote",
  "azoth",
  "azuki",
  "azurn",
  "azury",
  "azygy",
  "azyme",
  "azyms",
  "baaed",
  "baals",
  "babas",
  "babel",
  "babes",
  "babka",
  "baboo",
  "babul",
  "babus",
  "bacca",
  "bacco",
  "baccy",
  "bacha",
  "bachs",
  "backs",
  "baddy",
  "baels",
  "baffs",
  "baffy",
  "bafts",
  "baghs",
  "bagie",
  "bahts",
  "bahus",
  "bahut",
  "bails",
  "bairn",
  "baisa",
  "baith",
  "baits",
  "baiza",
  "baize",
  "bajan",
  "bajra",
  "bajri",
  "bajus",
  "baked",
  "baken",
  "bakes",
  "bakra",
  "balas",
  "balds",
  "baldy",
  "baled",
  "bales",
  "balks",
  "balky",
  "balls",
  "bally",
  "balms",
  "baloo",
  "balsa",
  "balti",
  "balun",
  "balus",
  "bambi",
  "banak",
  "banco",
  "bancs",
  "banda",
  "bandh",
  "bands",
  "bandy",
  "baned",
  "banes",
  "bangs",
  "bania",
  "banks",
  "banns",
  "bants",
  "bantu",
  "banty",
  "banya",
  "bapus",
  "barbe",
  "barbs",
  "barby",
  "barca",
  "barde",
  "bardo",
  "bards",
  "bardy",
  "bared",
  "barer",
  "bares",
  "barfi",
  "barfs",
  "baric",
  "barks",
  "barky",
  "barms",
  "barmy",
  "barns",
  "barny",
  "barps",
  "barra",
  "barre",
  "barro",
  "barry",
  "barye",
  "basan",
  "based",
  "basen",
  "baser",
  "bases",
  "basho",
  "basij",
  "basks",
  "bason",
  "basse",
  "bassi",
  "basso",
  "bassy",
  "basta",
  "basti",
  "basto",
  "basts",
  "bated",
  "bates",
  "baths",
  "batik",
  "batta",
  "batts",
  "battu",
  "bauds",
  "bauks",
  "baulk",
  "baurs",
  "bavin",
  "bawds",
  "bawks",
  "bawls",
  "bawns",
  "bawrs",
  "bawty",
  "bayed",
  "bayer",
  "bayes",
  "bayle",
  "bayts",
  "bazar",
  "bazoo",
  "beads",
  "beaks",
  "beaky",
  "beals",
  "beams",
  "beamy",
  "beano",
  "beans",
  "beany",
  "beare",
  "bears",
  "beath",
  "beats",
  "beaty",
  "beaus",
  "beaut",
  "beaux",
  "bebop",
  "becap",
  "becke",
  "becks",
  "bedad",
  "bedel",
  "bedes",
  "bedew",
  "bedim",
  "bedye",
  "beedi",
  "beefs",
  "beeps",
  "beers",
  "beery",
  "beets",
  "befog",
  "begad",
  "begar",
  "begem",
  "begot",
  "begum",
  "beige",
  "beigy",
  "beins",
  "bekah",
  "belah",
  "belar",
  "belay",
  "belee",
  "belga",
  "bells",
  "belon",
  "belts",
  "bemad",
  "bemas",
  "bemix",
  "bemud",
  "bends",
  "bendy",
  "benes",
  "benet",
  "benga",
  "benis",
  "benne",
  "benni",
  "benny",
  "bento",
  "bents",
  "benty",
  "bepat",
  "beray",
  "beres",
  "bergs",
  "berko",
  "berks",
  "berme",
  "berms",
  "berob",
  "beryl",
  "besat",
  "besaw",
  "besee",
  "beses",
  "besit",
  "besom",
  "besot",
  "besti",
  "bests",
  "betas",
  "beted",
  "betes",
  "beths",
  "betid",
  "beton",
  "betta",
  "betty",
  "bever",
  "bevor",
  "bevue",
  "bevvy",
  "bewet",
  "bewig",
  "bezes",
  "bezil",
  "bezzy",
  "bhais",
  "bhaji",
  "bhang",
  "bhats",
  "bhels",
  "bhoot",
  "bhuna",
  "bhuts",
  "biach",
  "biali",
  "bialy",
  "bibbs",
  "bibes",
  "biccy",
  "bices",
  "bided",
  "bider",
  "bides",
  "bidet",
  "bidis",
  "bidon",
  "bield",
  "biers",
  "biffo",
  "biffs",
  "biffy",
  "bifid",
  "bigae",
  "biggs",
  "biggy",
  "bigha",
  "bight",
  "bigly",
  "bigos",
  "bijou",
  "biked",
  "biker",
  "bikes",
  "bikie",
  "bilbo",
  "bilby",
  "biled",
  "biles",
  "bilgy",
  "bilks",
  "bills",
  "bimah",
  "bimas",
  "bimbo",
  "binal",
  "bindi",
  "binds",
  "biner",
  "bines",
  "bings",
  "bingy",
  "binit",
  "binks",
  "bints",
  "biogs",
  "biont",
  "biota",
  "biped",
  "bipod",
  "birds",
  "birks",
  "birle",
  "birls",
  "biros",
  "birrs",
  "birse",
  "birsy",
  "bises",
  "bisks",
  "bisom",
  "bitch",
  "biter",
  "bites",
  "bitos",
  "bitou",
  "bitsy",
  "bitte",
  "bitts",
  "bivia",
  "bivvy",
  "bizes",
  "bizzo",
  "bizzy",
  "blabs",
  "blads",
  "blady",
  "blaer",
  "blaes",
  "blaff",
  "blags",
  "blahs",
  "blain",
  "blams",
  "blart",
  "blase",
  "blash",
  "blate",
  "blats",
  "blatt",
  "blaud",
  "blawn",
  "blaws",
  "blays",
  "blear",
  "blebs",
  "blech",
  "blees",
  "blent",
  "blert",
  "blest",
  "blets",
  "bleys",
  "blimy",
  "bling",
  "blini",
  "blins",
  "bliny",
  "blips",
  "blist",
  "blite",
  "blits",
  "blive",
  "blobs",
  "blocs",
  "blogs",
  "blook",
  "bloop",
  "blore",
  "blots",
  "blows",
  "blowy",
  "blubs",
  "blude",
  "bluds",
  "bludy",
  "blued",
  "blues",
  "bluet",
  "bluey",
  "bluid",
  "blume",
  "blunk",
  "blurs",
  "blype",
  "boabs",
  "boaks",
  "boars",
  "boart",
  "boats",
  "bobac",
  "bobak",
  "bobas",
  "bobol",
  "bobos",
  "bocca",
  "bocce",
  "bocci",
  "boche",
  "bocks",
  "boded",
  "bodes",
  "bodge",
  "bodhi",
  "bodle",
  "boeps",
  "boets",
  "boeuf",
  "boffo",
  "boffs",
  "bogan",
  "bogey",
  "boggy",
  "bogie",
  "bogle",
  "bogue",
  "bogus",
  "bohea",
  "bohos",
  "boils",
  "boing",
  "boink",
  "boite",
  "boked",
  "bokeh",
  "bokes",
  "bokos",
  "bolar",
  "bolas",
  "bolds",
  "boles",
  "bolix",
  "bolls",
  "bolos",
  "bolts",
  "bolus",
  "bomas",
  "bombe",
  "bombo",
  "bombs",
  "bonce",
  "bonds",
  "boned",
  "boner",
  "bones",
  "bongs",
  "bonie",
  "bonks",
  "bonne",
  "bonny",
  "bonza",
  "bonze",
  "booai",
  "booay",
  "boobs",
  "boody",
  "booed",
  "boofy",
  "boogy",
  "boohs",
  "books",
  "booky",
  "bools",
  "booms",
  "boomy",
  "boong",
  "boons",
  "boord",
  "boors",
  "boose",
  "boots",
  "boppy",
  "borak",
  "boral",
  "boras",
  "borde",
  "bords",
  "bored",
  "boree",
  "borel",
  "borer",
  "bores",
  "borgo",
  "boric",
  "borks",
  "borms",
  "borna",
  "boron",
  "borts",
  "borty",
  "bortz",
  "bosie",
  "bosks",
  "bosky",
  "boson",
  "bosun",
  "botas",
  "botel",
  "botes",
  "bothy",
  "botte",
  "botts",
  "botty",
  "bouge",
  "bouks",
  "boult",
  "bouns",
  "bourd",
  "bourg",
  "bourn",
  "bouse",
  "bousy",
  "bouts",
  "bovid",
  "bowat",
  "bowed",
  "bower",
  "bowes",
  "bowet",
  "bowie",
  "bowls",
  "bowne",
  "bowrs",
  "bowse",
  "boxed",
  "boxen",
  "boxes",
  "boxla",
  "boxty",
  "boyar",
  "boyau",
  "boyed",
  "boyfs",
  "boygs",
  "boyla",
  "boyos",
  "boysy",
  "bozos",
  "braai",
  "brach",
  "brack",
  "bract",
  "brads",
  "braes",
  "brags",
  "brail",
  "braks",
  "braky",
  "brame",
  "brane",
  "brank",
  "brans",
  "brant",
  "brast",
  "brats",
  "brava",
  "bravi",
  "braws",
  "braxy",
  "brays",
  "braza",
  "braze",
  "bream",
  "brede",
  "breds",
  "breem",
  "breer",
  "brees",
  "breid",
  "breis",
  "breme",
  "brens",
  "brent",
  "brere",
  "brers",
  "breve",
  "brews",
  "breys",
  "brier",
  "bries",
  "brigs",
  "briki",
  "briks",
  "brill",
  "brims",
  "brins",
  "brios",
  "brise",
  "briss",
  "brith",
  "brits",
  "britt",
  "brize",
  "broch",
  "brock",
  "brods",
  "brogh",
  "brogs",
  "brome",
  "bromo",
  "bronc",
  "brond",
  "brool",
  "broos",
  "brose",
  "brosy",
  "brows",
  "brugh",
  "bruin",
  "bruit",
  "brule",
  "brume",
  "brung",
  "brusk",
  "brust",
  "bruts",
  "buats",
  "buaze",
  "bubal",
  "bubas",
  "bubba",
  "bubbe",
  "bubby",
  "bubus",
  "buchu",
  "bucko",
  "bucks",
  "bucku",
  "budas",
  "budis",
  "budos",
  "buffa",
  "buffe",
  "buffi",
  "buffo",
  "buffs",
  "buffy",
  "bufos",
  "bufty",
  "buhls",
  "buhrs",
  "buiks",
  "buist",
  "bukes",
  "bulbs",
  "bulgy",
  "bulks",
  "bulla",
  "bulls",
  "bulse",
  "bumbo",
  "bumfs",
  "bumph",
  "bumps",
  "bumpy",
  "bunas",
  "bunce",
  "bunco",
  "bunde",
  "bundh",
  "bunds",
  "bundt",
  "bundu",
  "bundy",
  "bungs",
  "bungy",
  "bunia",
  "bunje",
  "bunjy",
  "bunko",
  "bunks",
  "bunns",
  "bunts",
  "bunty",
  "bunya",
  "buoys",
  "buppy",
  "buran",
  "buras",
  "burbs",
  "burds",
  "buret",
  "burfi",
  "burgh",
  "burgs",
  "burin",
  "burka",
  "burke",
  "burks",
  "burls",
  "burns",
  "buroo",
  "burps",
  "burqa",
  "burro",
  "burrs",
  "burry",
  "bursa",
  "burse",
  "busby",
  "buses",
  "busks",
  "busky",
  "bussu",
  "busti",
  "busts",
  "busty",
  "buteo",
  "butes",
  "butle",
  "butoh",
  "butts",
  "butty",
  "butut",
  "butyl",
  "buzzy",
  "bwana",
  "bwazi",
  "byded",
  "bydes",
  "byked",
  "bykes",
  "byres",
  "byrls",
  "byssi",
  "bytes",
  "byway",
  "caaed",
  "cabas",
  "caber",
  "cabob",
  "caboc",
  "cabre",
  "cacas",
  "cacks",
  "cacky",
  "cadee",
  "cades",
  "cadge",
  "cadgy",
  "cadie",
  "cadis",
  "cadre",
  "caeca",
  "caese",
  "cafes",
  "caffs",
  "caged",
  "cager",
  "cages",
  "cagot",
  "cahow",
  "caids",
  "cains",
  "caird",
  "cajon",
  "cajun",
  "caked",
  "cakes",
  "cakey",
  "calfs",
  "calid",
  "calif",
  "calix",
  "calks",
  "calla",
  "calls",
  "calms",
  "calmy",
  "calos",
  "calpa",
  "calps",
  "calve",
  "calyx",
  "caman",
  "camas",
  "cames",
  "camis",
  "camos",
  "campi",
  "campo",
  "camps",
  "campy",
  "camus",
  "caned",
  "caneh",
  "caner",
  "canes",
  "cangs",
  "canid",
  "canna",
  "canns",
  "canso",
  "canst",
  "canto",
  "cants",
  "canty",
  "capas",
  "caped",
  "capes",
  "capex",
  "caphs",
  "capiz",
  "caple",
  "capon",
  "capos",
  "capot",
  "capri",
  "capul",
  "carap",
  "carbo",
  "carbs",
  "carby",
  "cardi",
  "cards",
  "cardy",
  "cared",
  "carer",
  "cares",
  "caret",
  "carex",
  "carks",
  "carle",
  "carls",
  "carns",
  "carny",
  "carob",
  "carom",
  "caron",
  "carpi",
  "carps",
  "carrs",
  "carse",
  "carta",
  "carte",
  "carts",
  "carvy",
  "casas",
  "casco",
  "cased",
  "cases",
  "casks",
  "casky",
  "casts",
  "casus",
  "cates",
  "cauda",
  "cauks",
  "cauld",
  "cauls",
  "caums",
  "caups",
  "cauri",
  "causa",
  "cavas",
  "caved",
  "cavel",
  "caver",
  "caves",
  "cavie",
  "cawed",
  "cawks",
  "caxon",
  "ceaze",
  "cebid",
  "cecal",
  "cecum",
  "ceded",
  "ceder",
  "cedes",
  "cedis",
  "ceiba",
  "ceili",
  "ceils",
  "celeb",
  "cella",
  "celli",
  "cells",
  "celom",
  "celts",
  "cense",
  "cento",
  "cents",
  "centu",
  "ceorl",
  "cepes",
  "cerci",
  "cered",
  "ceres",
  "cerge",
  "ceria",
  "ceric",
  "cerne",
  "ceroc",
  "ceros",
  "certs",
  "certy",
  "cesse",
  "cesta",
  "cesti",
  "cetes",
  "cetyl",
  "cezve",
  "chace",
  "chack",
  "chaco",
  "chado",
  "chads",
  "chaft",
  "chais",
  "chals",
  "chams",
  "chana",
  "chang",
  "chank",
  "chape",
  "chaps",
  "chapt",
  "chara",
  "chare",
  "chark",
  "charr",
  "chars",
  "chary",
  "chats",
  "chave",
  "chavs",
  "chawk",
  "chaws",
  "chaya",
  "chays",
  "cheep",
  "chefs",
  "cheka",
  "chela",
  "chelp",
  "chemo",
  "chems",
  "chere",
  "chert",
  "cheth",
  "chevy",
  "chews",
  "chewy",
  "chiao",
  "chias",
  "chibs",
  "chica",
  "chich",
  "chico",
  "chics",
  "chiel",
  "chiks",
  "chile",
  "chimb",
  "chimo",
  "chimp",
  "chine",
  "ching",
  "chink",
  "chino",
  "chins",
  "chips",
  "chirk",
  "chirl",
  "chirm",
  "chiro",
  "chirr",
  "chirt",
  "chiru",
  "chits",
  "chive",
  "chivs",
  "chivy",
  "chizz",
  "choco",
  "chocs",
  "chode",
  "chogs",
  "choil",
  "choko",
  "choky",
  "chola",
  "choli",
  "cholo",
  "chomp",
  "chons",
  "choof",
  "chook",
  "choom",
  "choon",
  "chops",
  "chota",
  "chott",
  "chout",
  "choux",
  "chowk",
  "chows",
  "chubs",
  "chufa",
  "chuff",
  "chugs",
  "chums",
  "churl",
  "churr",
  "chuse",
  "chuts",
  "chyle",
  "chyme",
  "chynd",
  "cibol",
  "cided",
  "cides",
  "ciels",
  "ciggy",
  "cilia",
  "cills",
  "cimar",
  "cimex",
  "cinct",
  "cines",
  "cinqs",
  "cions",
  "cippi",
  "circs",
  "cires",
  "cirls",
  "cirri",
  "cisco",
  "cissy",
  "cists",
  "cital",
  "cited",
  "citer",
  "cites",
  "cives",
  "civet",
  "civie",
  "civvy",
  "clach",
  "clade",
  "clads",
  "claes",
  "clags",
  "clame",
  "clams",
  "clans",
  "claps",
  "clapt",
  "claro",
  "clart",
  "clary",
  "clast",
  "clats",
  "claut",
  "clave",
  "clavi",
  "claws",
  "clays",
  "cleck",
  "cleek",
  "cleep",
  "clefs",
  "clegs",
  "cleik",
  "clems",
  "clepe",
  "clept",
  "cleve",
  "clews",
  "clied",
  "clies",
  "clift",
  "clime",
  "cline",
  "clint",
  "clipe",
  "clips",
  "clipt",
  "clits",
  "cloam",
  "clods",
  "cloff",
  "clogs",
  "cloke",
  "clomb",
  "clomp",
  "clonk",
  "clons",
  "cloop",
  "cloot",
  "clops",
  "clote",
  "clots",
  "clour",
  "clous",
  "clows",
  "cloye",
  "cloys",
  "cloze",
  "clubs",
  "clues",
  "cluey",
  "clunk",
  "clype",
  "cnida",
  "coact",
  "coady",
  "coala",
  "coals",
  "coaly",
  "coapt",
  "coarb",
  "coate",
  "coati",
  "coats",
  "cobbs",
  "cobby",
  "cobia",
  "coble",
  "cobza",
  "cocas",
  "cocci",
  "cocco",
  "cocks",
  "cocky",
  "cocos",
  "codas",
  "codec",
  "coded",
  "coden",
  "coder",
  "codes",
  "codex",
  "codon",
  "coeds",
  "coffs",
  "cogie",
  "cogon",
  "cogue",
  "cohab",
  "cohen",
  "cohoe",
  "cohog",
  "cohos",
  "coifs",
  "coign",
  "coils",
  "coins",
  "coirs",
  "coits",
  "coked",
  "cokes",
  "colas",
  "colby",
  "colds",
  "coled",
  "coles",
  "coley",
  "colic",
  "colin",
  "colls",
  "colly",
  "colog",
  "colts",
  "colza",
  "comae",
  "comal",
  "comas",
  "combe",
  "combi",
  "combo",
  "combs",
  "comby",
  "comer",
  "comes",
  "comix",
  "commo",
  "comms",
  "commy",
  "compo",
  "comps",
  "compt",
  "comte",
  "comus",
  "coned",
  "cones",
  "coney",
  "confs",
  "conga",
  "conge",
  "congo",
  "conia",
  "conin",
  "conks",
  "conky",
  "conne",
  "conns",
  "conte",
  "conto",
  "conus",
  "convo",
  "cooch",
  "cooed",
  "cooee",
  "cooer",
  "cooey",
  "coofs",
  "cooks",
  "cooky",
  "cools",
  "cooly",
  "coomb",
  "cooms",
  "coomy",
  "coons",
  "coops",
  "coopt",
  "coost",
  "coots",
  "cooze",
  "copal",
  "copay",
  "coped",
  "copen",
  "coper",
  "copes",
  "coppy",
  "copra",
  "copsy",
  "coqui",
  "coram",
  "corbe",
  "corby",
  "cords",
  "cored",
  "cores",
  "corey",
  "corgi",
  "coria",
  "corks",
  "corky",
  "corms",
  "corni",
  "corno",
  "corns",
  "cornu",
  "corps",
  "corse",
  "corso",
  "cosec",
  "cosed",
  "coses",
  "coset",
  "cosey",
  "cosie",
  "costa",
  "coste",
  "costs",
  "cotan",
  "coted",
  "cotes",
  "coths",
  "cotta",
  "cotts",
  "coude",
  "coups",
  "courb",
  "courd",
  "coure",
  "cours",
  "couta",
  "couth",
  "coved",
  "coves",
  "covin",
  "cowal",
  "cowan",
  "cowed",
  "cowks",
  "cowls",
  "cowps",
  "cowry",
  "coxae",
  "coxal",
  "coxed",
  "coxes",
  "coxib",
  "coyau",
  "coyed",
  "coyer",
  "coypu",
  "cozed",
  "cozen",
  "cozes",
  "cozey",
  "cozie",
  "craal",
  "crabs",
  "crags",
  "craic",
  "craig",
  "crake",
  "crame",
  "crams",
  "crans",
  "crape",
  "craps",
  "crapy",
  "crare",
  "craws",
  "crays",
  "creds",
  "creel",
  "crees",
  "crems",
  "crena",
  "creps",
  "crepy",
  "crewe",
  "crews",
  "crias",
  "cribs",
  "cries",
  "crims",
  "crine",
  "crios",
  "cripe",
  "crips",
  "crise",
  "crith",
  "crits",
  "croci",
  "crocs",
  "croft",
  "crogs",
  "cromb",
  "crome",
  "cronk",
  "crons",
  "crool",
  "croon",
  "crops",
  "crore",
  "crost",
  "crout",
  "crows",
  "croze",
  "cruck",
  "crudo",
  "cruds",
  "crudy",
  "crues",
  "cruet",
  "cruft",
  "crunk",
  "cruor",
  "crura",
  "cruse",
  "crusy",
  "cruve",
  "crwth",
  "cryer",
  "ctene",
  "cubby",
  "cubeb",
  "cubed",
  "cuber",
  "cubes",
  "cubit",
  "cuddy",
  "cuffo",
  "cuffs",
  "cuifs",
  "cuing",
  "cuish",
  "cuits",
  "cukes",
  "culch",
  "culet",
  "culex",
  "culls",
  "cully",
  "culms",
  "culpa",
  "culti",
  "cults",
  "culty",
  "cumec",
  "cundy",
  "cunei",
  "cunit",
  "cunts",
  "cupel",
  "cupid",
  "cuppa",
  "cuppy",
  "curat",
  "curbs",
  "curch",
  "curds",
  "curdy",
  "cured",
  "curer",
  "cures",
  "curet",
  "curfs",
  "curia",
  "curie",
  "curli",
  "curls",
  "curns",
  "curny",
  "currs",
  "cursi",
  "curst",
  "cusec",
  "cushy",
  "cusks",
  "cusps",
  "cuspy",
  "cusso",
  "cusum",
  "cutch",
  "cuter",
  "cutes",
  "cutey",
  "cutin",
  "cutis",
  "cutto",
  "cutty",
  "cutup",
  "cuvee",
  "cuzes",
  "cwtch",
  "cyano",
  "cyans",
  "cycad",
  "cycas",
  "cyclo",
  "cyder",
  "cylix",
  "cymae",
  "cymar",
  "cymas",
  "cymes",
  "cymol",
  "cysts",
  "cytes",
  "cyton",
  "czars",
  "daals",
  "dabba",
  "daces",
  "dacha",
  "dacks",
  "dadah",
  "dadas",
  "dados",
  "daffs",
  "daffy",
  "dagga",
  "daggy",
  "dagos",
  "dahls",
  "daiko",
  "daine",
  "daint",
  "daker",
  "daled",
  "dales",
  "dalis",
  "dalle",
  "dalts",
  "daman",
  "damar",
  "dames",
  "damme",
  "damns",
  "damps",
  "dampy",
  "dancy",
  "dangs",
  "danio",
  "danks",
  "danny",
  "dants",
  "daraf",
  "darbs",
  "darcy",
  "dared",
  "darer",
  "dares",
  "darga",
  "dargs",
  "daric",
  "daris",
  "darks",
  "darky",
  "darns",
  "darre",
  "darts",
  "darzi",
  "dashi",
  "dashy",
  "datal",
  "dated",
  "dater",
  "dates",
  "datos",
  "datto",
  "daube",
  "daubs",
  "dauby",
  "dauds",
  "dault",
  "daurs",
  "dauts",
  "daven",
  "davit",
  "dawah",
  "dawds",
  "dawed",
  "dawen",
  "dawks",
  "dawns",
  "dawts",
  "dayan",
  "daych",
  "daynt",
  "dazed",
  "dazer",
  "dazes",
  "deads",
  "deair",
  "deals",
  "deans",
  "deare",
  "dearn",
  "dears",
  "deary",
  "deash",
  "deave",
  "deaws",
  "deawy",
  "debag",
  "debby",
  "debel",
  "debes",
  "debts",
  "debud",
  "debur",
  "debus",
  "debye",
  "decad",
  "decaf",
  "decan",
  "decko",
  "decks",
  "decos",
  "dedal",
  "deeds",
  "deedy",
  "deely",
  "deems",
  "deens",
  "deeps",
  "deere",
  "deers",
  "deets",
  "deeve",
  "deevs",
  "defat",
  "deffo",
  "defis",
  "defog",
  "degas",
  "degum",
  "degus",
  "deice",
  "deids",
  "deify",
  "deils",
  "deism",
  "deist",
  "deked",
  "dekes",
  "dekko",
  "deled",
  "deles",
  "delfs",
  "delft",
  "delis",
  "dells",
  "delly",
  "delos",
  "delph",
  "delts",
  "deman",
  "demes",
  "demic",
  "demit",
  "demob",
  "demoi",
  "demos",
  "dempt",
  "denar",
  "denay",
  "dench",
  "denes",
  "denet",
  "denis",
  "dents",
  "deoxy",
  "derat",
  "deray",
  "dered",
  "deres",
  "derig",
  "derma",
  "derms",
  "derns",
  "derny",
  "deros",
  "derro",
  "derry",
  "derth",
  "dervs",
  "desex",
  "deshi",
  "desis",
  "desks",
  "desse",
  "devas",
  "devel",
  "devis",
  "devon",
  "devos",
  "devot",
  "dewan",
  "dewar",
  "dewax",
  "dewed",
  "dexes",
  "dexie",
  "dhaba",
  "dhaks",
  "dhals",
  "dhikr",
  "dhobi",
  "dhole",
  "dholl",
  "dhols",
  "dhoti",
  "dhows",
  "dhuti",
  "diact",
  "dials",
  "diane",
  "diazo",
  "dibbs",
  "diced",
  "dicer",
  "dices",
  "dicht",
  "dicks",
  "dicky",
  "dicot",
  "dicta",
  "dicts",
  "dicty",
  "diddy",
  "didie",
  "didos",
  "didst",
  "diebs",
  "diels",
  "diene",
  "diets",
  "diffs",
  "dight",
  "dikas",
  "diked",
  "diker",
  "dikes",
  "dikey",
  "dildo",
  "dilli",
  "dills",
  "dimbo",
  "dimer",
  "dimes",
  "dimps",
  "dinar",
  "dined",
  "dines",
  "dinge",
  "dings",
  "dinic",
  "dinks",
  "dinky",
  "dinna",
  "dinos",
  "dints",
  "diols",
  "diota",
  "dippy",
  "dipso",
  "diram",
  "direr",
  "dirke",
  "dirks",
  "dirls",
  "dirts",
  "disas",
  "disci",
  "discs",
  "dishy",
  "disks",
  "disme",
  "dital",
  "ditas",
  "dited",
  "dites",
  "ditsy",
  "ditts",
  "ditzy",
  "divan",
  "divas",
  "dived",
  "dives",
  "divis",
  "divna",
  "divos",
  "divot",
  "divvy",
  "diwan",
  "dixie",
  "dixit",
  "diyas",
  "dizen",
  "djinn",
  "djins",
  "doabs",
  "doats",
  "dobby",
  "dobes",
  "dobie",
  "dobla",
  "dobra",
  "dobro",
  "docht",
  "docks",
  "docos",
  "docus",
  "doddy",
  "dodos",
  "doeks",
  "doers",
  "doest",
  "doeth",
  "doffs",
  "dogan",
  "doges",
  "dogey",
  "doggo",
  "doggy",
  "dogie",
  "dohyo",
  "doilt",
  "doily",
  "doits",
  "dojos",
  "dolce",
  "dolci",
  "doled",
  "doles",
  "dolia",
  "dolls",
  "dolma",
  "dolor",
  "dolos",
  "dolts",
  "domal",
  "domed",
  "domes",
  "domic",
  "donah",
  "donas",
  "donee",
  "doner",
  "donga",
  "dongs",
  "donko",
  "donna",
  "donne",
  "donny",
  "donsy",
  "doobs",
  "dooce",
  "doody",
  "dooks",
  "doole",
  "dools",
  "dooly",
  "dooms",
  "doomy",
  "doona",
  "doorn",
  "doors",
  "doozy",
  "dopas",
  "doped",
  "doper",
  "dopes",
  "dorad",
  "dorba",
  "dorbs",
  "doree",
  "dores",
  "doric",
  "doris",
  "dorks",
  "dorky",
  "dorms",
  "dormy",
  "dorps",
  "dorrs",
  "dorsa",
  "dorse",
  "dorts",
  "dorty",
  "dosai",
  "dosas",
  "dosed",
  "doseh",
  "doser",
  "doses",
  "dosha",
  "dotal",
  "doted",
  "doter",
  "dotes",
  "dotty",
  "douar",
  "douce",
  "doucs",
  "douks",
  "doula",
  "douma",
  "doums",
  "doups",
  "doura",
  "douse",
  "douts",
  "doved",
  "doven",
  "dover",
  "doves",
  "dovie",
  "dowar",
  "dowds",
  "dowed",
  "dower",
  "dowie",
  "dowle",
  "dowls",
  "dowly",
  "downa",
  "downs",
  "dowps",
  "dowse",
  "dowts",
  "doxed",
  "doxes",
  "doxie",
  "doyen",
  "doyly",
  "dozed",
  "dozer",
  "dozes",
  "drabs",
  "drack",
  "draco",
  "draff",
  "drags",
  "drail",
  "drams",
  "drant",
  "draps",
  "drats",
  "drave",
  "draws",
  "drays",
  "drear",
  "dreck",
  "dreed",
  "dreer",
  "drees",
  "dregs",
  "dreks",
  "drent",
  "drere",
  "drest",
  "dreys",
  "dribs",
  "drice",
  "dries",
  "drily",
  "drips",
  "dript",
  "droid",
  "droil",
  "droke",
  "drole",
  "drome",
  "drony",
  "droob",
  "droog",
  "drook",
  "drops",
  "dropt",
  "drouk",
  "drows",
  "drubs",
  "drugs",
  "drums",
  "drupe",
  "druse",
  "drusy",
  "druxy",
  "dryad",
  "dryas",
  "dsobo",
  "dsomo",
  "duads",
  "duals",
  "duans",
  "duars",
  "dubbo",
  "ducal",
  "ducat",
  "duces",
  "ducks",
  "ducky",
  "ducts",
  "duddy",
  "duded",
  "dudes",
  "duels",
  "duets",
  "duett",
  "duffs",
  "dufus",
  "duing",
  "duits",
  "dukas",
  "duked",
  "dukes",
  "dukka",
  "dulce",
  "dules",
  "dulia",
  "dulls",
  "dulse",
  "dumas",
  "dumbo",
  "dumbs",
  "dumka",
  "dumky",
  "dumps",
  "dunam",
  "dunch",
  "dunes",
  "dungs",
  "dungy",
  "dunks",
  "dunno",
  "dunny",
  "dunsh",
  "dunts",
  "duomi",
  "duomo",
  "duped",
  "duper",
  "dupes",
  "duple",
  "duply",
  "duppy",
  "dural",
  "duras",
  "dured",
  "dures",
  "durgy",
  "durns",
  "duroc",
  "duros",
  "duroy",
  "durra",
  "durrs",
  "durry",
  "durst",
  "durum",
  "durzi",
  "dusks",
  "dusts",
  "duxes",
  "dwaal",
  "dwale",
  "dwalm",
  "dwams",
  "dwang",
  "dwaum",
  "dweeb",
  "dwile",
  "dwine",
  "dyads",
  "dyers",
  "dyked",
  "dykes",
  "dykey",
  "dykon",
  "dynel",
  "dynes",
  "dzhos",
  "eagre",
  "ealed",
  "eales",
  "eaned",
  "eards",
  "eared",
  "earls",
  "earns",
  "earnt",
  "earst",
  "eased",
  "easer",
  "eases",
  "easle",
  "easts",
  "eathe",
  "eaved",
  "eaves",
  "ebbed",
  "ebbet",
  "ebons",
  "ebook",
  "ecads",
  "eched",
  "eches",
  "echos",
  "ecrus",
  "edema",
  "edged",
  "edger",
  "edges",
  "edile",
  "edits",
  "educe",
  "educt",
  "eejit",
  "eensy",
  "eeven",
  "eevns",
  "effed",
  "egads",
  "egers",
  "egest",
  "eggar",
  "egged",
  "egger",
  "egmas",
  "ehing",
  "eider",
  "eidos",
  "eigne",
  "eiked",
  "eikon",
  "eilds",
  "eisel",
  "ejido",
  "ekkas",
  "elain",
  "eland",
  "elans",
  "elchi",
  "eldin",
  "elemi",
  "elfed",
  "eliad",
  "elint",
  "elmen",
  "eloge",
  "elogy",
  "eloin",
  "elops",
  "elpee",
  "elsin",
  "elute",
  "elvan",
  "elven",
  "elver",
  "elves",
  "emacs",
  "embar",
  "embay",
  "embog",
  "embow",
  "embox",
  "embus",
  "emeer",
  "emend",
  "emerg",
  "emery",
  "emeus",
  "emics",
  "emirs",
  "emits",
  "emmas",
  "emmer",
  "emmet",
  "emmew",
  "emmys",
  "emoji",
  "emong",
  "emote",
  "emove",
  "empts",
  "emule",
  "emure",
  "emyde",
  "emyds",
  "enarm",
  "enate",
  "ended",
  "ender",
  "endew",
  "endue",
  "enews",
  "enfix",
  "eniac",
  "enlit",
  "enmew",
  "ennog",
  "enoki",
  "enols",
  "enorm",
  "enows",
  "enrol",
  "ensew",
  "ensky",
  "entia",
  "enure",
  "enurn",
  "envoi",
  "enzym",
  "eorls",
  "eosin",
  "epact",
  "epees",
  "ephah",
  "ephas",
  "ephod",
  "ephor",
  "epics",
  "epode",
  "epopt",
  "epris",
  "eques",
  "equid",
  "erbia",
  "erevs",
  "ergon",
  "ergos",
  "ergot",
  "erhus",
  "erica",
  "erick",
  "erics",
  "ering",
  "erned",
  "ernes",
  "erose",
  "erred",
  "erses",
  "eruct",
  "erugo",
  "eruvs",
  "erven",
  "ervil",
  "escar",
  "escot",
  "esile",
  "eskar",
  "esker",
  "esnes",
  "esses",
  "estoc",
  "estop",
  "estro",
  "etage",
  "etape",
  "etats",
  "etens",
  "ethal",
  "ethne",
  "ethyl",
  "etics",
  "etnas",
  "ettin",
  "ettle",
  "etuis",
  "etwee",
  "etyma",
  "eughs",
  "euked",
  "eupad",
  "euros",
  "eusol",
  "evens",
  "evert",
  "evets",
  "evhoe",
  "evils",
  "evite",
  "evohe",
  "ewers",
  "ewest",
  "ewhow",
  "ewked",
  "exams",
  "exeat",
  "execs",
  "exeem",
  "exeme",
  "exfil",
  "exies",
  "exine",
  "exing",
  "exits",
  "exode",
  "exome",
  "exons",
  "expat",
  "expos",
  "exude",
  "exuls",
  "exurb",
  "eyass",
  "eyers",
  "eyots",
  "eyras",
  "eyres",
  "eyrie",
  "eyrir",
  "ezine",
  "fabby",
  "faced",
  "facer",
  "faces",
  "facia",
  "facta",
  "facts",
  "faddy",
  "faded",
  "fader",
  "fades",
  "fadge",
  "fados",
  "faena",
  "faery",
  "faffs",
  "faffy",
  "faggy",
  "fagin",
  "fagot",
  "faiks",
  "fails",
  "faine",
  "fains",
  "fairs",
  "faked",
  "faker",
  "fakes",
  "fakey",
  "fakie",
  "fakir",
  "falaj",
  "falls",
  "famed",
  "fames",
  "fanal",
  "fands",
  "fanes",
  "fanga",
  "fango",
  "fangs",
  "fanks",
  "fanon",
  "fanos",
  "fanum",
  "faqir",
  "farad",
  "farci",
  "farcy",
  "fards",
  "fared",
  "farer",
  "fares",
  "farle",
  "farls",
  "farms",
  "faros",
  "farro",
  "farse",
  "farts",
  "fasci",
  "fasti",
  "fasts",
  "fated",
  "fates",
  "fatly",
  "fatso",
  "fatwa",
  "faugh",
  "fauld",
  "fauns",
  "faurd",
  "fauts",
  "fauve",
  "favas",
  "favel",
  "faver",
  "faves",
  "favus",
  "fawns",
  "fawny",
  "faxed",
  "faxes",
  "fayed",
  "fayer",
  "fayne",
  "fayre",
  "fazed",
  "fazes",
  "feals",
  "feare",
  "fears",
  "feart",
  "fease",
  "feats",
  "feaze",
  "feces",
  "fecht",
  "fecit",
  "fecks",
  "fedex",
  "feebs",
  "feeds",
  "feels",
  "feens",
  "feers",
  "feese",
  "feeze",
  "fehme",
  "feint",
  "feist",
  "felch",
  "felid",
  "fells",
  "felly",
  "felts",
  "felty",
  "femal",
  "femes",
  "femmy",
  "fends",
  "fendy",
  "fenis",
  "fenks",
  "fenny",
  "fents",
  "feods",
  "feoff",
  "ferer",
  "feres",
  "feria",
  "ferly",
  "fermi",
  "ferms",
  "ferns",
  "ferny",
  "fesse",
  "festa",
  "fests",
  "festy",
  "fetas",
  "feted",
  "fetes",
  "fetor",
  "fetta",
  "fetts",
  "fetwa",
  "feuar",
  "feuds",
  "feued",
  "feyed",
  "feyer",
  "feyly",
  "fezes",
  "fezzy",
  "fiars",
  "fiats",
  "fibro",
  "fices",
  "fiche",
  "fichu",
  "ficin",
  "ficos",
  "fides",
  "fidge",
  "fidos",
  "fiefs",
  "fient",
  "fiere",
  "fiers",
  "fiest",
  "fifed",
  "fifer",
  "fifes",
  "fifis",
  "figgy",
  "figos",
  "fiked",
  "fikes",
  "filar",
  "filch",
  "filed",
  "files",
  "filii",
  "filks",
  "fille",
  "fillo",
  "fills",
  "filmi",
  "films",
  "filos",
  "filum",
  "finca",
  "finds",
  "fined",
  "fines",
  "finis",
  "finks",
  "finny",
  "finos",
  "fiord",
  "fiqhs",
  "fique",
  "fired",
  "firer",
  "fires",
  "firie",
  "firks",
  "firms",
  "firns",
  "firry",
  "firth",
  "fiscs",
  "fisks",
  "fists",
  "fisty",
  "fitch",
  "fitly",
  "fitna",
  "fitte",
  "fitts",
  "fiver",
  "fives",
  "fixed",
  "fixes",
  "fixit",
  "fjeld",
  "flabs",
  "flaff",
  "flags",
  "flaks",
  "flamm",
  "flams",
  "flamy",
  "flane",
  "flans",
  "flaps",
  "flary",
  "flats",
  "flava",
  "flawn",
  "flaws",
  "flawy",
  "flaxy",
  "flays",
  "fleam",
  "fleas",
  "fleek",
  "fleer",
  "flees",
  "flegs",
  "fleme",
  "fleur",
  "flews",
  "flexi",
  "flexo",
  "fleys",
  "flics",
  "flied",
  "flies",
  "flimp",
  "flims",
  "flips",
  "flirs",
  "flisk",
  "flite",
  "flits",
  "flitt",
  "flobs",
  "flocs",
  "floes",
  "flogs",
  "flong",
  "flops",
  "flors",
  "flory",
  "flosh",
  "flota",
  "flote",
  "flows",
  "flubs",
  "flued",
  "flues",
  "fluey",
  "fluky",
  "flump",
  "fluor",
  "flurr",
  "fluty",
  "fluyt",
  "flyby",
  "flype",
  "flyte",
  "foals",
  "foams",
  "foehn",
  "fogey",
  "fogie",
  "fogle",
  "fogou",
  "fohns",
  "foids",
  "foils",
  "foins",
  "folds",
  "foley",
  "folia",
  "folic",
  "folie",
  "folks",
  "folky",
  "fomes",
  "fonda",
  "fonds",
  "fondu",
  "fones",
  "fonly",
  "fonts",
  "foods",
  "foody",
  "fools",
  "foots",
  "footy",
  "foram",
  "forbs",
  "forby",
  "fordo",
  "fords",
  "forel",
  "fores",
  "forex",
  "forks",
  "forky",
  "forme",
  "forms",
  "forts",
  "forza",
  "forze",
  "fossa",
  "fosse",
  "fouat",
  "fouds",
  "fouer",
  "fouet",
  "foule",
  "fouls",
  "fount",
  "fours",
  "fouth",
  "fovea",
  "fowls",
  "fowth",
  "foxed",
  "foxes",
  "foxie",
  "foyle",
  "foyne",
  "frabs",
  "frack",
  "fract",
  "frags",
  "fraim",
  "franc",
  "frape",
  "fraps",
  "frass",
  "frate",
  "frati",
  "frats",
  "fraus",
  "frays",
  "frees",
  "freet",
  "freit",
  "fremd",
  "frena",
  "freon",
  "frere",
  "frets",
  "fribs",
  "frier",
  "fries",
  "frigs",
  "frise",
  "frist",
  "frith",
  "frits",
  "fritt",
  "frize",
  "frizz",
  "froes",
  "frogs",
  "frons",
  "frore",
  "frorn",
  "frory",
  "frosh",
  "frows",
  "frowy",
  "frugs",
  "frump",
  "frush",
  "frust",
  "fryer",
  "fubar",
  "fubby",
  "fubsy",
  "fucks",
  "fucus",
  "fuddy",
  "fudgy",
  "fuels",
  "fuero",
  "fuffs",
  "fuffy",
  "fugal",
  "fuggy",
  "fugie",
  "fugio",
  "fugle",
  "fugly",
  "fugus",
  "fujis",
  "fulls",
  "fumed",
  "fumer",
  "fumes",
  "fumet",
  "fundi",
  "funds",
  "fundy",
  "fungo",
  "fungs",
  "funks",
  "fural",
  "furan",
  "furca",
  "furls",
  "furol",
  "furrs",
  "furth",
  "furze",
  "furzy",
  "fused",
  "fusee",
  "fusel",
  "fuses",
  "fusil",
  "fusks",
  "fusts",
  "fusty",
  "futon",
  "fuzed",
  "fuzee",
  "fuzes",
  "fuzil",
  "fyces",
  "fyked",
  "fykes",
  "fyles",
  "fyrds",
  "fytte",
  "gabba",
  "gabby",
  "gable",
  "gaddi",
  "gades",
  "gadge",
  "gadid",
  "gadis",
  "gadje",
  "gadjo",
  "gadso",
  "gaffs",
  "gaged",
  "gager",
  "gages",
  "gaids",
  "gains",
  "gairs",
  "gaita",
  "gaits",
  "gaitt",
  "gajos",
  "galah",
  "galas",
  "galax",
  "galea",
  "galed",
  "gales",
  "galls",
  "gally",
  "galop",
  "galut",
  "galvo",
  "gamas",
  "gamay",
  "gamba",
  "gambe",
  "gambo",
  "gambs",
  "gamed",
  "games",
  "gamey",
  "gamic",
  "gamin",
  "gamme",
  "gammy",
  "gamps",
  "ganch",
  "gandy",
  "ganef",
  "ganev",
  "gangs",
  "ganja",
  "ganof",
  "gants",
  "gaols",
  "gaped",
  "gaper",
  "gapes",
  "gapos",
  "gappy",
  "garbe",
  "garbo",
  "garbs",
  "garda",
  "gares",
  "garis",
  "garms",
  "garni",
  "garre",
  "garth",
  "garum",
  "gases",
  "gasps",
  "gaspy",
  "gasts",
  "gatch",
  "gated",
  "gater",
  "gates",
  "gaths",
  "gator",
  "gauch",
  "gaucy",
  "gauds",
  "gauje",
  "gault",
  "gaums",
  "gaumy",
  "gaups",
  "gaurs",
  "gauss",
  "gauzy",
  "gavot",
  "gawcy",
  "gawds",
  "gawks",
  "gawps",
  "gawsy",
  "gayal",
  "gazal",
  "gazar",
  "gazed",
  "gazes",
  "gazon",
  "gazoo",
  "geals",
  "geans",
  "geare",
  "gears",
  "geats",
  "gebur",
  "gecks",
  "geeks",
  "geeps",
  "geest",
  "geist",
  "geits",
  "gelds",
  "gelee",
  "gelid",
  "gelly",
  "gelts",
  "gemel",
  "gemma",
  "gemmy",
  "gemot",
  "genal",
  "genas",
  "genes",
  "genet",
  "genic",
  "genii",
  "genip",
  "genny",
  "genoa",
  "genom",
  "genro",
  "gents",
  "genty",
  "genua",
  "genus",
  "geode",
  "geoid",
  "gerah",
  "gerbe",
  "geres",
  "gerle",
  "germs",
  "germy",
  "gerne",
  "gesse",
  "gesso",
  "geste",
  "gests",
  "getas",
  "getup",
  "geums",
  "geyan",
  "geyer",
  "ghast",
  "ghats",
  "ghaut",
  "ghazi",
  "ghees",
  "ghest",
  "ghyll",
  "gibed",
  "gibel",
  "giber",
  "gibes",
  "gibli",
  "gibus",
  "gifts",
  "gigas",
  "gighe",
  "gigot",
  "gigue",
  "gilas",
  "gilds",
  "gilet",
  "gills",
  "gilly",
  "gilpy",
  "gilts",
  "gimel",
  "gimme",
  "gimps",
  "gimpy",
  "ginch",
  "ginge",
  "gings",
  "ginks",
  "ginny",
  "ginzo",
  "gipon",
  "gippo",
  "gippy",
  "girds",
  "girls",
  "girns",
  "giron",
  "giros",
  "girrs",
  "girsh",
  "girts",
  "gismo",
  "gisms",
  "gists",
  "gitch",
  "gites",
  "giust",
  "gived",
  "gives",
  "gizmo",
  "glace",
  "glads",
  "glady",
  "glaik",
  "glair",
  "glams",
  "glans",
  "glary",
  "glaum",
  "glaur",
  "glazy",
  "gleba",
  "glebe",
  "gleby",
  "glede",
  "gleds",
  "gleed",
  "gleek",
  "glees",
  "gleet",
  "gleis",
  "glens",
  "glent",
  "gleys",
  "glial",
  "glias",
  "glibs",
  "gliff",
  "glift",
  "glike",
  "glime",
  "glims",
  "glisk",
  "glits",
  "glitz",
  "gloam",
  "globi",
  "globs",
  "globy",
  "glode",
  "glogg",
  "gloms",
  "gloop",
  "glops",
  "glost",
  "glout",
  "glows",
  "gloze",
  "glued",
  "gluer",
  "glues",
  "gluey",
  "glugs",
  "glume",
  "glums",
  "gluon",
  "glute",
  "gluts",
  "gnarl",
  "gnarr",
  "gnars",
  "gnats",
  "gnawn",
  "gnaws",
  "gnows",
  "goads",
  "goafs",
  "goals",
  "goary",
  "goats",
  "goaty",
  "goban",
  "gobar",
  "gobbi",
  "gobbo",
  "gobby",
  "gobis",
  "gobos",
  "godet",
  "godso",
  "goels",
  "goers",
  "goest",
  "goeth",
  "goety",
  "gofer",
  "goffs",
  "gogga",
  "gogos",
  "goier",
  "gojis",
  "golds",
  "goldy",
  "goles",
  "golfs",
  "golpe",
  "golps",
  "gombo",
  "gomer",
  "gompa",
  "gonch",
  "gonef",
  "gongs",
  "gonia",
  "gonif",
  "gonks",
  "gonna",
  "gonof",
  "gonys",
  "gonzo",
  "gooby",
  "goods",
  "goofs",
  "googs",
  "gooks",
  "gooky",
  "goold",
  "gools",
  "gooly",
  "goons",
  "goony",
  "goops",
  "goopy",
  "goors",
  "goory",
  "goosy",
  "gopak",
  "gopik",
  "goral",
  "goras",
  "gored",
  "gores",
  "goris",
  "gorms",
  "gormy",
  "gorps",
  "gorse",
  "gorsy",
  "gosht",
  "gosse",
  "gotch",
  "goths",
  "gothy",
  "gotta",
  "gouch",
  "gouks",
  "goura",
  "gouts",
  "gouty",
  "gowan",
  "gowds",
  "gowfs",
  "gowks",
  "gowls",
  "gowns",
  "goxes",
  "goyim",
  "goyle",
  "graal",
  "grabs",
  "grads",
  "graff",
  "graip",
  "grama",
  "grame",
  "gramp",
  "grams",
  "grana",
  "grans",
  "grapy",
  "gravs",
  "grays",
  "grebe",
  "grebo",
  "grece",
  "greek",
  "grees",
  "grege",
  "grego",
  "grein",
  "grens",
  "grese",
  "greve",
  "grews",
  "greys",
  "grice",
  "gride",
  "grids",
  "griff",
  "grift",
  "grigs",
  "grike",
  "grins",
  "griot",
  "grips",
  "gript",
  "gripy",
  "grise",
  "grist",
  "grisy",
  "grith",
  "grits",
  "grize",
  "groat",
  "grody",
  "grogs",
  "groks",
  "groma",
  "grone",
  "groof",
  "grosz",
  "grots",
  "grouf",
  "grovy",
  "grows",
  "grrls",
  "grrrl",
  "grubs",
  "grued",
  "grues",
  "grufe",
  "grume",
  "grump",
  "grund",
  "gryce",
  "gryde",
  "gryke",
  "grype",
  "grypt",
  "guaco",
  "guana",
  "guano",
  "guans",
  "guars",
  "gucks",
  "gucky",
  "gudes",
  "guffs",
  "gugas",
  "guids",
  "guimp",
  "guiro",
  "gulag",
  "gular",
  "gulas",
  "gules",
  "gulet",
  "gulfs",
  "gulfy",
  "gulls",
  "gulph",
  "gulps",
  "gulpy",
  "gumma",
  "gummi",
  "gumps",
  "gundy",
  "gunge",
  "gungy",
  "gunks",
  "gunky",
  "gunny",
  "guqin",
  "gurdy",
  "gurge",
  "gurls",
  "gurly",
  "gurns",
  "gurry",
  "gursh",
  "gurus",
  "gushy",
  "gusla",
  "gusle",
  "gusli",
  "gussy",
  "gusts",
  "gutsy",
  "gutta",
  "gutty",
  "guyed",
  "guyle",
  "guyot",
  "guyse",
  "gwine",
  "gyals",
  "gyans",
  "gybed",
  "gybes",
  "gyeld",
  "gymps",
  "gynae",
  "gynie",
  "gynny",
  "gynos",
  "gyoza",
  "gypos",
  "gyppo",
  "gyppy",
  "gyral",
  "gyred",
  "gyres",
  "gyron",
  "gyros",
  "gyrus",
  "gytes",
  "gyved",
  "gyves",
  "haafs",
  "haars",
  "hable",
  "habus",
  "hacek",
  "hacks",
  "hadal",
  "haded",
  "hades",
  "hadji",
  "hadst",
  "haems",
  "haets",
  "haffs",
  "hafiz",
  "hafts",
  "haggs",
  "hahas",
  "haick",
  "haika",
  "haiks",
  "haiku",
  "hails",
  "haily",
  "hains",
  "haint",
  "hairs",
  "haith",
  "hajes",
  "hajis",
  "hajji",
  "hakam",
  "hakas",
  "hakea",
  "hakes",
  "hakim",
  "hakus",
  "halal",
  "haled",
  "haler",
  "hales",
  "halfa",
  "halfs",
  "halid",
  "hallo",
  "halls",
  "halma",
  "halms",
  "halon",
  "halos",
  "halse",
  "halts",
  "halva",
  "halwa",
  "hamal",
  "hamba",
  "hamed",
  "hames",
  "hammy",
  "hamza",
  "hanap",
  "hance",
  "hanch",
  "hands",
  "hangi",
  "hangs",
  "hanks",
  "hanky",
  "hansa",
  "hanse",
  "hants",
  "haole",
  "haoma",
  "hapax",
  "haply",
  "happi",
  "hapus",
  "haram",
  "hards",
  "hared",
  "hares",
  "harim",
  "harks",
  "harls",
  "harms",
  "harns",
  "haros",
  "harps",
  "harts",
  "hashy",
  "hasks",
  "hasps",
  "hasta",
  "hated",
  "hates",
  "hatha",
  "hauds",
  "haufs",
  "haugh",
  "hauld",
  "haulm",
  "hauls",
  "hault",
  "hauns",
  "hause",
  "haver",
  "haves",
  "hawed",
  "hawks",
  "hawms",
  "hawse",
  "hayed",
  "hayer",
  "hayey",
  "hayle",
  "hazan",
  "hazed",
  "hazer",
  "hazes",
  "heads",
  "heald",
  "heals",
  "heame",
  "heaps",
  "heapy",
  "heare",
  "hears",
  "heast",
  "heats",
  "heben",
  "hebes",
  "hecht",
  "hecks",
  "heder",
  "hedgy",
  "heeds",
  "heedy",
  "heels",
  "heeze",
  "hefte",
  "hefts",
  "heids",
  "heigh",
  "heils",
  "heirs",
  "hejab",
  "hejra",
  "heled",
  "heles",
  "helio",
  "hells",
  "helms",
  "helos",
  "helot",
  "helps",
  "helve",
  "hemal",
  "hemes",
  "hemic",
  "hemin",
  "hemps",
  "hempy",
  "hench",
  "hends",
  "henge",
  "henna",
  "henny",
  "henry",
  "hents",
  "hepar",
  "herbs",
  "herby",
  "herds",
  "heres",
  "herls",
  "herma",
  "herms",
  "herns",
  "heros",
  "herry",
  "herse",
  "hertz",
  "herye",
  "hesps",
  "hests",
  "hetes",
  "heths",
  "heuch",
  "heugh",
  "hevea",
  "hewed",
  "hewer",
  "hewgh",
  "hexad",
  "hexed",
  "hexer",
  "hexes",
  "hexyl",
  "heyed",
  "hiant",
  "hicks",
  "hided",
  "hider",
  "hides",
  "hiems",
  "highs",
  "hight",
  "hijab",
  "hijra",
  "hiked",
  "hiker",
  "hikes",
  "hikoi",
  "hilar",
  "hilch",
  "hillo",
  "hills",
  "hilts",
  "hilum",
  "hilus",
  "himbo",
  "hinau",
  "hinds",
  "hings",
  "hinky",
  "hinny",
  "hints",
  "hiois",
  "hiply",
  "hired",
  "hiree",
  "hirer",
  "hires",
  "hissy",
  "hists",
  "hithe",
  "hived",
  "hiver",
  "hives",
  "hizen",
  "hoaed",
  "hoagy",
  "hoars",
  "hoary",
  "hoast",
  "hobos",
  "hocks",
  "hocus",
  "hodad",
  "hodja",
  "hoers",
  "hogan",
  "hogen",
  "hoggs",
  "hoghs",
  "hohed",
  "hoick",
  "hoied",
  "hoiks",
  "hoing",
  "hoise",
  "hokas",
  "hoked",
  "hokes",
  "hokey",
  "hokis",
  "hokku",
  "hokum",
  "holds",
  "holed",
  "holes",
  "holey",
  "holks",
  "holla",
  "hollo",
  "holme",
  "holms",
  "holon",
  "holos",
  "holts",
  "homas",
  "homed",
  "homes",
  "homey",
  "homie",
  "homme",
  "homos",
  "honan",
  "honda",
  "honds",
  "honed",
  "honer",
  "hones",
  "hongi",
  "hongs",
  "honks",
  "honky",
  "hooch",
  "hoods",
  "hoody",
  "hooey",
  "hoofs",
  "hooka",
  "hooks",
  "hooky",
  "hooly",
  "hoons",
  "hoops",
  "hoord",
  "hoors",
  "hoosh",
  "hoots",
  "hooty",
  "hoove",
  "hopak",
  "hoped",
  "hoper",
  "hopes",
  "hoppy",
  "horah",
  "horal",
  "horas",
  "horis",
  "horks",
  "horme",
  "horns",
  "horst",
  "horsy",
  "hosed",
  "hosel",
  "hosen",
  "hoser",
  "hoses",
  "hosey",
  "hosta",
  "hosts",
  "hotch",
  "hoten",
  "hotty",
  "houff",
  "houfs",
  "hough",
  "houri",
  "hours",
  "houts",
  "hovea",
  "hoved",
  "hoven",
  "hoves",
  "howbe",
  "howes",
  "howff",
  "howfs",
  "howks",
  "howls",
  "howre",
  "howso",
  "hoxed",
  "hoxes",
  "hoyas",
  "hoyed",
  "hoyle",
  "hubby",
  "hucks",
  "hudna",
  "hudud",
  "huers",
  "huffs",
  "huffy",
  "huger",
  "huggy",
  "huhus",
  "huias",
  "hulas",
  "hules",
  "hulks",
  "hulky",
  "hullo",
  "hulls",
  "hully",
  "humas",
  "humfs",
  "humic",
  "humps",
  "humpy",
  "hunks",
  "hunts",
  "hurds",
  "hurls",
  "hurly",
  "hurra",
  "hurst",
  "hurts",
  "hushy",
  "husks",
  "husos",
  "hutia",
  "huzza",
  "huzzy",
  "hwyls",
  "hydra",
  "hyens",
  "hygge",
  "hying",
  "hykes",
  "hylas",
  "hyleg",
  "hyles",
  "hylic",
  "hymns",
  "hynde",
  "hyoid",
  "hyped",
  "hypes",
  "hypha",
  "hyphy",
  "hypos",
  "hyrax",
  "hyson",
  "hythe",
  "iambi",
  "iambs",
  "ibrik",
  "icers",
  "iched",
  "iches",
  "ichor",
  "icier",
  "icker",
  "ickle",
  "icons",
  "ictal",
  "ictic",
  "ictus",
  "idant",
  "ideas",
  "idees",
  "ident",
  "idled",
  "idles",
  "idola",
  "idols",
  "idyls",
  "iftar",
  "igapo",
  "igged",
  "iglus",
  "ihram",
  "ikans",
  "ikats",
  "ikons",
  "ileac",
  "ileal",
  "ileum",
  "ileus",
  "iliad",
  "ilial",
  "ilium",
  "iller",
  "illth",
  "imago",
  "imams",
  "imari",
  "imaum",
  "imbar",
  "imbed",
  "imide",
  "imido",
  "imids",
  "imine",
  "imino",
  "immew",
  "immit",
  "immix",
  "imped",
  "impis",
  "impot",
  "impro",
  "imshi",
  "imshy",
  "inapt",
  "inarm",
  "inbye",
  "incel",
  "incle",
  "incog",
  "incus",
  "incut",
  "indew",
  "india",
  "indie",
  "indol",
  "indow",
  "indri",
  "indue",
  "inerm",
  "infix",
  "infos",
  "infra",
  "ingan",
  "ingle",
  "inion",
  "inked",
  "inker",
  "inkle",
  "inned",
  "innit",
  "inorb",
  "inrun",
  "inset",
  "inspo",
  "intel",
  "intil",
  "intis",
  "intra",
  "inula",
  "inure",
  "inurn",
  "inust",
  "invar",
  "inwit",
  "iodic",
  "iodid",
  "iodin",
  "iotas",
  "ippon",
  "irade",
  "irids",
  "iring",
  "irked",
  "iroko",
  "irone",
  "irons",
  "isbas",
  "ishes",
  "isled",
  "isles",
  "isnae",
  "issei",
  "istle",
  "items",
  "ither",
  "ivied",
  "ivies",
  "ixias",
  "ixnay",
  "ixora",
  "ixtle",
  "izard",
  "izars",
  "izzat",
  "jaaps",
  "jabot",
  "jacal",
  "jacks",
  "jacky",
  "jaded",
  "jades",
  "jafas",
  "jaffa",
  "jagas",
  "jager",
  "jaggs",
  "jaggy",
  "jagir",
  "jagra",
  "jails",
  "jaker",
  "jakes",
  "jakey",
  "jalap",
  "jalop",
  "jambe",
  "jambo",
  "jambs",
  "jambu",
  "james",
  "jammy",
  "jamon",
  "janes",
  "janns",
  "janny",
  "janty",
  "japan",
  "japed",
  "japer",
  "japes",
  "jarks",
  "jarls",
  "jarps",
  "jarta",
  "jarul",
  "jasey",
  "jaspe",
  "jasps",
  "jatos",
  "jauks",
  "jaups",
  "javas",
  "javel",
  "jawan",
  "jawed",
  "jaxie",
  "jeans",
  "jeats",
  "jebel",
  "jedis",
  "jeels",
  "jeely",
  "jeeps",
  "jeers",
  "jeeze",
  "jefes",
  "jeffs",
  "jehad",
  "jehus",
  "jelab",
  "jello",
  "jells",
  "jembe",
  "jemmy",
  "jenny",
  "jeons",
  "jerid",
  "jerks",
  "jerry",
  "jesse",
  "jests",
  "jesus",
  "jetes",
  "jeton",
  "jeune",
  "jewed",
  "jewie",
  "jhala",
  "jiaos",
  "jibba",
  "jibbs",
  "jibed",
  "jiber",
  "jibes",
  "jiffs",
  "jiggy",
  "jigot",
  "jihad",
  "jills",
  "jilts",
  "jimmy",
  "jimpy",
  "jingo",
  "jinks",
  "jinne",
  "jinni",
  "jinns",
  "jirds",
  "jirga",
  "jirre",
  "jisms",
  "jived",
  "jiver",
  "jives",
  "jivey",
  "jnana",
  "jobed",
  "jobes",
  "jocko",
  "jocks",
  "jocky",
  "jocos",
  "jodel",
  "joeys",
  "johns",
  "joins",
  "joked",
  "jokes",
  "jokey",
  "jokol",
  "joled",
  "joles",
  "jolls",
  "jolts",
  "jolty",
  "jomon",
  "jomos",
  "jones",
  "jongs",
  "jonty",
  "jooks",
  "joram",
  "jorum",
  "jotas",
  "jotty",
  "jotun",
  "joual",
  "jougs",
  "jouks",
  "joule",
  "jours",
  "jowar",
  "jowed",
  "jowls",
  "jowly",
  "joyed",
  "jubas",
  "jubes",
  "jucos",
  "judas",
  "judgy",
  "judos",
  "jugal",
  "jugum",
  "jujus",
  "juked",
  "jukes",
  "jukus",
  "julep",
  "jumar",
  "jumby",
  "jumps",
  "junco",
  "junks",
  "junky",
  "jupes",
  "jupon",
  "jural",
  "jurat",
  "jurel",
  "jures",
  "justs",
  "jutes",
  "jutty",
  "juves",
  "juvie",
  "kaama",
  "kabab",
  "kabar",
  "kabob",
  "kacha",
  "kacks",
  "kadai",
  "kades",
  "kadis",
  "kafir",
  "kagos",
  "kagus",
  "kahal",
  "kaiak",
  "kaids",
  "kaies",
  "kaifs",
  "kaika",
  "kaiks",
  "kails",
  "kaims",
  "kaing",
  "kains",
  "kakas",
  "kakis",
  "kalam",
  "kales",
  "kalif",
  "kalis",
  "kalpa",
  "kamas",
  "kames",
  "kamik",
  "kamis",
  "kamme",
  "kanae",
  "kanas",
  "kandy",
  "kaneh",
  "kanes",
  "kanga",
  "kangs",
  "kanji",
  "kants",
  "kanzu",
  "kaons",
  "kapas",
  "kaphs",
  "kapok",
  "kapow",
  "kapus",
  "kaput",
  "karas",
  "karat",
  "karks",
  "karns",
  "karoo",
  "karos",
  "karri",
  "karst",
  "karsy",
  "karts",
  "karzy",
  "kasha",
  "kasme",
  "katal",
  "katas",
  "katis",
  "katti",
  "kaugh",
  "kauri",
  "kauru",
  "kaury",
  "kaval",
  "kavas",
  "kawas",
  "kawau",
  "kawed",
  "kayle",
  "kayos",
  "kazis",
  "kazoo",
  "kbars",
  "kebar",
  "kebob",
  "kecks",
  "kedge",
  "kedgy",
  "keech",
  "keefs",
  "keeks",
  "keels",
  "keema",
  "keeno",
  "keens",
  "keeps",
  "keets",
  "keeve",
  "kefir",
  "kehua",
  "keirs",
  "kelep",
  "kelim",
  "kells",
  "kelly",
  "kelps",
  "kelpy",
  "kelts",
  "kelty",
  "kembo",
  "kembs",
  "kemps",
  "kempt",
  "kempy",
  "kenaf",
  "kench",
  "kendo",
  "kenos",
  "kente",
  "kents",
  "kepis",
  "kerbs",
  "kerel",
  "kerfs",
  "kerky",
  "kerma",
  "kerne",
  "kerns",
  "keros",
  "kerry",
  "kerve",
  "kesar",
  "kests",
  "ketas",
  "ketch",
  "ketes",
  "ketol",
  "kevel",
  "kevil",
  "kexes",
  "keyed",
  "keyer",
  "khadi",
  "khafs",
  "khans",
  "khaph",
  "khats",
  "khaya",
  "khazi",
  "kheda",
  "kheth",
  "khets",
  "khoja",
  "khors",
  "khoum",
  "khuds",
  "kiaat",
  "kiack",
  "kiang",
  "kibbe",
  "kibbi",
  "kibei",
  "kibes",
  "kibla",
  "kicks",
  "kicky",
  "kiddo",
  "kiddy",
  "kidel",
  "kidge",
  "kiefs",
  "kiers",
  "kieve",
  "kievs",
  "kight",
  "kikes",
  "kikoi",
  "kiley",
  "kilim",
  "kills",
  "kilns",
  "kilos",
  "kilps",
  "kilts",
  "kilty",
  "kimbo",
  "kinas",
  "kinda",
  "kinds",
  "kindy",
  "kines",
  "kings",
  "kinin",
  "kinks",
  "kinos",
  "kiore",
  "kipes",
  "kippa",
  "kipps",
  "kirby",
  "kirks",
  "kirns",
  "kirri",
  "kisan",
  "kissy",
  "kists",
  "kited",
  "kiter",
  "kites",
  "kithe",
  "kiths",
  "kitul",
  "kivas",
  "kiwis",
  "klang",
  "klaps",
  "klett",
  "klick",
  "klieg",
  "kliks",
  "klong",
  "kloof",
  "kluge",
  "klutz",
  "knags",
  "knaps",
  "knarl",
  "knars",
  "knaur",
  "knawe",
  "knees",
  "knell",
  "knish",
  "knits",
  "knive",
  "knobs",
  "knops",
  "knosp",
  "knots",
  "knout",
  "knowe",
  "knows",
  "knubs",
  "knurl",
  "knurr",
  "knurs",
  "knuts",
  "koans",
  "koaps",
  "koban",
  "kobos",
  "koels",
  "koffs",
  "kofta",
  "kogal",
  "kohas",
  "kohen",
  "kohls",
  "koine",
  "kojis",
  "kokam",
  "kokas",
  "koker",
  "kokra",
  "kokum",
  "kolas",
  "kolos",
  "kombu",
  "konbu",
  "kondo",
  "konks",
  "kooks",
  "kooky",
  "koori",
  "kopek",
  "kophs",
  "kopje",
  "koppa",
  "korai",
  "koras",
  "korat",
  "kores",
  "korma",
  "koros",
  "korun",
  "korus",
  "koses",
  "kotch",
  "kotos",
  "kotow",
  "koura",
  "kraal",
  "krabs",
  "kraft",
  "krais",
  "krait",
  "krang",
  "krans",
  "kranz",
  "kraut",
  "krays",
  "kreep",
  "kreng",
  "krewe",
  "krona",
  "krone",
  "kroon",
  "krubi",
  "krunk",
  "ksars",
  "kubie",
  "kudos",
  "kudus",
  "kudzu",
  "kufis",
  "kugel",
  "kuias",
  "kukri",
  "kukus",
  "kulak",
  "kulan",
  "kulas",
  "kulfi",
  "kumis",
  "kumys",
  "kuris",
  "kurre",
  "kurta",
  "kurus",
  "kusso",
  "kutas",
  "kutch",
  "kutis",
  "kutus",
  "kuzus",
  "kvass",
  "kvell",
  "kwela",
  "kyack",
  "kyaks",
  "kyang",
  "kyars",
  "kyats",
  "kybos",
  "kydst",
  "kyles",
  "kylie",
  "kylin",
  "kylix",
  "kyloe",
  "kynde",
  "kynds",
  "kypes",
  "kyrie",
  "kytes",
  "kythe",
  "laari",
  "labda",
  "labia",
  "labis",
  "labra",
  "laced",
  "lacer",
  "laces",
  "lacet",
  "lacey",
  "lacks",
  "laddy",
  "laded",
  "lader",
  "lades",
  "laers",
  "laevo",
  "lagan",
  "lahal",
  "lahar",
  "laich",
  "laics",
  "laids",
  "laigh",
  "laika",
  "laiks",
  "laird",
  "lairs",
  "lairy",
  "laith",
  "laity",
  "laked",
  "laker",
  "lakes",
  "lakhs",
  "lakin",
  "laksa",
  "laldy",
  "lalls",
  "lamas",
  "lambs",
  "lamby",
  "lamed",
  "lamer",
  "lames",
  "lamia",
  "lammy",
  "lamps",
  "lanai",
  "lanas",
  "lanch",
  "lande",
  "lands",
  "lanes",
  "lanks",
  "lants",
  "lapin",
  "lapis",
  "lapje",
  "larch",
  "lards",
  "lardy",
  "laree",
  "lares",
  "largo",
  "laris",
  "larks",
  "larky",
  "larns",
  "larnt",
  "larum",
  "lased",
  "laser",
  "lases",
  "lassi",
  "lassu",
  "lassy",
  "lasts",
  "latah",
  "lated",
  "laten",
  "latex",
  "lathi",
  "laths",
  "lathy",
  "latke",
  "latus",
  "lauan",
  "lauch",
  "lauds",
  "laufs",
  "laund",
  "laura",
  "laval",
  "lavas",
  "laved",
  "laver",
  "laves",
  "lavra",
  "lavvy",
  "lawed",
  "lawer",
  "lawin",
  "lawks",
  "lawns",
  "lawny",
  "laxed",
  "laxer",
  "laxes",
  "laxly",
  "layed",
  "layin",
  "layup",
  "lazar",
  "lazed",
  "lazes",
  "lazos",
  "lazzi",
  "lazzo",
  "leads",
  "leady",
  "leafs",
  "leaks",
  "leams",
  "leans",
  "leany",
  "leaps",
  "leare",
  "lears",
  "leary",
  "leats",
  "leavy",
  "leaze",
  "leben",
  "leccy",
  "ledes",
  "ledgy",
  "ledum",
  "leear",
  "leeks",
  "leeps",
  "leers",
  "leese",
  "leets",
  "leeze",
  "lefte",
  "lefts",
  "leger",
  "leges",
  "legge",
  "leggo",
  "legit",
  "lehrs",
  "lehua",
  "leirs",
  "leish",
  "leman",
  "lemed",
  "lemel",
  "lemes",
  "lemma",
  "lemme",
  "lends",
  "lenes",
  "lengs",
  "lenis",
  "lenos",
  "lense",
  "lenti",
  "lento",
  "leone",
  "lepid",
  "lepra",
  "lepta",
  "lered",
  "leres",
  "lerps",
  "lesbo",
  "leses",
  "lests",
  "letch",
  "lethe",
  "letup",
  "leuch",
  "leuco",
  "leuds",
  "leugh",
  "levas",
  "levee",
  "leves",
  "levin",
  "levis",
  "lewis",
  "lexes",
  "lexis",
  "lezes",
  "lezza",
  "lezzy",
  "liana",
  "liane",
  "liang",
  "liard",
  "liars",
  "liart",
  "liber",
  "libra",
  "libri",
  "lichi",
  "licht",
  "licit",
  "licks",
  "lidar",
  "lidos",
  "liefs",
  "liens",
  "liers",
  "lieus",
  "lieve",
  "lifer",
  "lifes",
  "lifts",
  "ligan",
  "liger",
  "ligge",
  "ligne",
  "liked",
  "liker",
  "likes",
  "likin",
  "lills",
  "lilos",
  "lilts",
  "liman",
  "limas",
  "limax",
  "limba",
  "limbi",
  "limbs",
  "limby",
  "limed",
  "limen",
  "limes",
  "limey",
  "limma",
  "limns",
  "limos",
  "limpa",
  "limps",
  "linac",
  "linch",
  "linds",
  "lindy",
  "lined",
  "lines",
  "liney",
  "linga",
  "lings",
  "lingy",
  "linin",
  "links",
  "linky",
  "linns",
  "linny",
  "linos",
  "lints",
  "linty",
  "linum",
  "linux",
  "lions",
  "lipas",
  "lipes",
  "lipin",
  "lipos",
  "lippy",
  "liras",
  "lirks",
  "lirot",
  "lisks",
  "lisle",
  "lisps",
  "lists",
  "litai",
  "litas",
  "lited",
  "liter",
  "lites",
  "litho",
  "liths",
  "litre",
  "lived",
  "liven",
  "lives",
  "livor",
  "livre",
  "llano",
  "loach",
  "loads",
  "loafs",
  "loams",
  "loans",
  "loast",
  "loave",
  "lobar",
  "lobed",
  "lobes",
  "lobos",
  "lobus",
  "loche",
  "lochs",
  "locie",
  "locis",
  "locks",
  "locos",
  "locum",
  "loden",
  "lodes",
  "loess",
  "lofts",
  "logan",
  "loges",
  "loggy",
  "logia",
  "logie",
  "logoi",
  "logon",
  "logos",
  "lohan",
  "loids",
  "loins",
  "loipe",
  "loirs",
  "lokes",
  "lolls",
  "lolly",
  "lolog",
  "lomas",
  "lomed",
  "lomes",
  "loner",
  "longa",
  "longe",
  "longs",
  "looby",
  "looed",
  "looey",
  "loofa",
  "loofs",
  "looie",
  "looks",
  "looky",
  "looms",
  "loons",
  "loony",
  "loops",
  "loord",
  "loots",
  "loped",
  "loper",
  "lopes",
  "loppy",
  "loral",
  "loran",
  "lords",
  "lordy",
  "lorel",
  "lores",
  "loric",
  "loris",
  "losed",
  "losel",
  "losen",
  "loses",
  "lossy",
  "lotah",
  "lotas",
  "lotes",
  "lotic",
  "lotos",
  "lotsa",
  "lotta",
  "lotte",
  "lotto",
  "lotus",
  "loued",
  "lough",
  "louie",
  "louis",
  "louma",
  "lound",
  "louns",
  "loupe",
  "loups",
  "loure",
  "lours",
  "loury",
  "louts",
  "lovat",
  "loved",
  "loves",
  "lovey",
  "lovie",
  "lowan",
  "lowed",
  "lowes",
  "lownd",
  "lowne",
  "lowns",
  "lowps",
  "lowry",
  "lowse",
  "lowts",
  "loxed",
  "loxes",
  "lozen",
  "luach",
  "luaus",
  "lubed",
  "lubes",
  "lubra",
  "luces",
  "lucks",
  "lucre",
  "ludes",
  "ludic",
  "ludos",
  "luffa",
  "luffs",
  "luged",
  "luger",
  "luges",
  "lulls",
  "lulus",
  "lumas",
  "lumbi",
  "lumme",
  "lummy",
  "lumps",
  "lunas",
  "lunes",
  "lunet",
  "lungi",
  "lungs",
  "lunks",
  "lunts",
  "lupin",
  "lured",
  "lurer",
  "lures",
  "lurex",
  "lurgi",
  "lurgy",
  "lurks",
  "lurry",
  "lurve",
  "luser",
  "lushy",
  "lusks",
  "lusts",
  "lusus",
  "lutea",
  "luted",
  "luter",
  "lutes",
  "luvvy",
  "luxed",
  "luxer",
  "luxes",
  "lweis",
  "lyams",
  "lyard",
  "lyart",
  "lyase",
  "lycea",
  "lycee",
  "lycra",
  "lymes",
  "lynes",
  "lyres",
  "lysed",
  "lyses",
  "lysin",
  "lysis",
  "lysol",
  "lyssa",
  "lyted",
  "lytes",
  "lythe",
  "lytic",
  "lytta",
  "maaed",
  "maare",
  "maars",
  "mabes",
  "macas",
  "maced",
  "macer",
  "maces",
  "mache",
  "machi",
  "machs",
  "macks",
  "macle",
  "macon",
  "madge",
  "madid",
  "madre",
  "maerl",
  "mafic",
  "mages",
  "maggs",
  "magot",
  "magus",
  "mahoe",
  "mahua",
  "mahwa",
  "maids",
  "maiko",
  "maiks",
  "maile",
  "maill",
  "mails",
  "maims",
  "mains",
  "maire",
  "mairs",
  "maise",
  "maist",
  "makar",
  "makes",
  "makis",
  "makos",
  "malam",
  "malar",
  "malas",
  "malax",
  "males",
  "malic",
  "malik",
  "malis",
  "malls",
  "malms",
  "malmy",
  "malts",
  "malty",
  "malus",
  "malva",
  "malwa",
  "mamas",
  "mamba",
  "mamee",
  "mamey",
  "mamie",
  "manas",
  "manat",
  "mandi",
  "maneb",
  "maned",
  "maneh",
  "manes",
  "manet",
  "mangs",
  "manis",
  "manky",
  "manna",
  "manos",
  "manse",
  "manta",
  "manto",
  "manty",
  "manul",
  "manus",
  "mapau",
  "maqui",
  "marae",
  "marah",
  "maras",
  "marcs",
  "mardy",
  "mares",
  "marge",
  "margs",
  "maria",
  "marid",
  "marka",
  "marks",
  "marle",
  "marls",
  "marly",
  "marms",
  "maron",
  "maror",
  "marra",
  "marri",
  "marse",
  "marts",
  "marvy",
  "masas",
  "mased",
  "maser",
  "mases",
  "mashy",
  "masks",
  "massa",
  "massy",
  "masts",
  "masty",
  "masus",
  "matai",
  "mated",
  "mater",
  "mates",
  "maths",
  "matin",
  "matlo",
  "matte",
  "matts",
  "matza",
  "matzo",
  "mauby",
  "mauds",
  "mauls",
  "maund",
  "mauri",
  "mausy",
  "mauts",
  "mauzy",
  "maven",
  "mavie",
  "mavin",
  "mavis",
  "mawed",
  "mawks",
  "mawky",
  "mawns",
  "mawrs",
  "maxed",
  "maxes",
  "maxis",
  "mayan",
  "mayas",
  "mayed",
  "mayos",
  "mayst",
  "mazed",
  "mazer",
  "mazes",
  "mazey",
  "mazut",
  "mbira",
  "meads",
  "meals",
  "meane",
  "means",
  "meany",
  "meare",
  "mease",
  "meath",
  "meats",
  "mebos",
  "mechs",
  "mecks",
  "medii",
  "medle",
  "meeds",
  "meers",
  "meets",
  "meffs",
  "meins",
  "meint",
  "meiny",
  "meith",
  "mekka",
  "melas",
  "melba",
  "melds",
  "melic",
  "melik",
  "mells",
  "melts",
  "melty",
  "memes",
  "memos",
  "menad",
  "mends",
  "mened",
  "menes",
  "menge",
  "mengs",
  "mensa",
  "mense",
  "mensh",
  "menta",
  "mento",
  "menus",
  "meous",
  "meows",
  "merch",
  "mercs",
  "merde",
  "mered",
  "merel",
  "merer",
  "meres",
  "meril",
  "meris",
  "merks",
  "merle",
  "merls",
  "merse",
  "mesal",
  "mesas",
  "mesel",
  "meses",
  "meshy",
  "mesic",
  "mesne",
  "meson",
  "messy",
  "mesto",
  "meted",
  "metes",
  "metho",
  "meths",
  "metic",
  "metif",
  "metis",
  "metol",
  "metre",
  "meuse",
  "meved",
  "meves",
  "mewed",
  "mewls",
  "meynt",
  "mezes",
  "mezze",
  "mezzo",
  "mhorr",
  "miaou",
  "miaow",
  "miasm",
  "miaul",
  "micas",
  "miche",
  "micht",
  "micks",
  "micky",
  "micos",
  "micra",
  "middy",
  "midgy",
  "midis",
  "miens",
  "mieve",
  "miffs",
  "miffy",
  "mifty",
  "miggs",
  "mihas",
  "mihis",
  "miked",
  "mikes",
  "mikra",
  "mikva",
  "milch",
  "milds",
  "miler",
  "miles",
  "milfs",
  "milia",
  "milko",
  "milks",
  "mille",
  "mills",
  "milor",
  "milos",
  "milpa",
  "milts",
  "milty",
  "miltz",
  "mimed",
  "mimeo",
  "mimer",
  "mimes",
  "mimsy",
  "minae",
  "minar",
  "minas",
  "mincy",
  "minds",
  "mined",
  "mines",
  "minge",
  "mings",
  "mingy",
  "minis",
  "minke",
  "minks",
  "minny",
  "minos",
  "mints",
  "mired",
  "mires",
  "mirex",
  "mirid",
  "mirin",
  "mirks",
  "mirky",
  "mirly",
  "miros",
  "mirvs",
  "mirza",
  "misch",
  "misdo",
  "mises",
  "misgo",
  "misos",
  "missa",
  "mists",
  "misty",
  "mitch",
  "miter",
  "mites",
  "mitis",
  "mitre",
  "mitts",
  "mixed",
  "mixen",
  "mixer",
  "mixes",
  "mixte",
  "mixup",
  "mizen",
  "mizzy",
  "mneme",
  "moans",
  "moats",
  "mobby",
  "mobes",
  "mobey",
  "mobie",
  "moble",
  "mochi",
  "mochs",
  "mochy",
  "mocks",
  "moder",
  "modes",
  "modge",
  "modii",
  "modus",
  "moers",
  "mofos",
  "moggy",
  "mohel",
  "mohos",
  "mohrs",
  "mohua",
  "mohur",
  "moile",
  "moils",
  "moira",
  "moire",
  "moits",
  "mojos",
  "mokes",
  "mokis",
  "mokos",
  "molal",
  "molas",
  "molds",
  "moled",
  "moles",
  "molla",
  "molls",
  "molly",
  "molto",
  "molts",
  "molys",
  "momes",
  "momma",
  "mommy",
  "momus",
  "monad",
  "monal",
  "monas",
  "monde",
  "mondo",
  "moner",
  "mongo",
  "mongs",
  "monic",
  "monie",
  "monks",
  "monos",
  "monte",
  "monty",
  "moobs",
  "mooch",
  "moods",
  "mooed",
  "mooks",
  "moola",
  "mooli",
  "mools",
  "mooly",
  "moong",
  "moons",
  "moony",
  "moops",
  "moors",
  "moory",
  "moots",
  "moove",
  "moped",
  "moper",
  "mopes",
  "mopey",
  "moppy",
  "mopsy",
  "mopus",
  "morae",
  "moras",
  "morat",
  "moray",
  "morel",
  "mores",
  "moria",
  "morne",
  "morns",
  "morra",
  "morro",
  "morse",
  "morts",
  "mosed",
  "moses",
  "mosey",
  "mosks",
  "mosso",
  "moste",
  "mosts",
  "moted",
  "moten",
  "motes",
  "motet",
  "motey",
  "moths",
  "mothy",
  "motis",
  "motte",
  "motts",
  "motty",
  "motus",
  "motza",
  "mouch",
  "moues",
  "mould",
  "mouls",
  "moups",
  "moust",
  "mousy",
  "moved",
  "moves",
  "mowas",
  "mowed",
  "mowra",
  "moxas",
  "moxie",
  "moyas",
  "moyle",
  "moyls",
  "mozed",
  "mozes",
  "mozos",
  "mpret",
  "mucho",
  "mucic",
  "mucid",
  "mucin",
  "mucks",
  "mucor",
  "mucro",
  "mudge",
  "mudir",
  "mudra",
  "muffs",
  "mufti",
  "mugga",
  "muggs",
  "muggy",
  "muhly",
  "muids",
  "muils",
  "muirs",
  "muist",
  "mujik",
  "mulct",
  "muled",
  "mules",
  "muley",
  "mulga",
  "mulie",
  "mulla",
  "mulls",
  "mulse",
  "mulsh",
  "mumms",
  "mumps",
  "mumsy",
  "mumus",
  "munga",
  "munge",
  "mungo",
  "mungs",
  "munis",
  "munts",
  "muntu",
  "muons",
  "muras",
  "mured",
  "mures",
  "murex",
  "murid",
  "murks",
  "murls",
  "murly",
  "murra",
  "murre",
  "murri",
  "murrs",
  "murry",
  "murti",
  "murva",
  "musar",
  "musca",
  "mused",
  "muser",
  "muses",
  "muset",
  "musha",
  "musit",
  "musks",
  "musos",
  "musse",
  "mussy",
  "musth",
  "musts",
  "mutch",
  "muted",
  "muter",
  "mutes",
  "mutha",
  "mutis",
  "muton",
  "mutts",
  "muxed",
  "muxes",
  "muzak",
  "muzzy",
  "mvule",
  "myall",
  "mylar",
  "mynah",
  "mynas",
  "myoid",
  "myoma",
  "myope",
  "myops",
  "myopy",
  "mysid",
  "mythi",
  "myths",
  "mythy",
  "myxos",
  "mzees",
  "naams",
  "naans",
  "nabes",
  "nabis",
  "nabks",
  "nabla",
  "nabob",
  "nache",
  "nacho",
  "nacre",
  "nadas",
  "naeve",
  "naevi",
  "naffs",
  "nagas",
  "naggy",
  "nagor",
  "nahal",
  "naiad",
  "naifs",
  "naiks",
  "nails",
  "naira",
  "nairu",
  "naked",
  "naker",
  "nakfa",
  "nalas",
  "naled",
  "nalla",
  "named",
  "namer",
  "names",
  "namma",
  "namus",
  "nanas",
  "nance",
  "nancy",
  "nandu",
  "nanna",
  "nanos",
  "nanua",
  "napas",
  "naped",
  "napes",
  "napoo",
  "nappa",
  "nappe",
  "nappy",
  "naras",
  "narco",
  "narcs",
  "nards",
  "nares",
  "naric",
  "naris",
  "narks",
  "narky",
  "narre",
  "nashi",
  "natch",
  "nates",
  "natis",
  "natty",
  "nauch",
  "naunt",
  "navar",
  "naves",
  "navew",
  "navvy",
  "nawab",
  "nazes",
  "nazir",
  "nazis",
  "nduja",
  "neafe",
  "neals",
  "neaps",
  "nears",
  "neath",
  "neats",
  "nebek",
  "nebel",
  "necks",
  "neddy",
  "needs",
  "neeld",
  "neele",
  "neemb",
  "neems",
  "neeps",
  "neese",
  "neeze",
  "negro",
  "negus",
  "neifs",
  "neist",
  "neive",
  "nelis",
  "nelly",
  "nemas",
  "nemns",
  "nempt",
  "nenes",
  "neons",
  "neper",
  "nepit",
  "neral",
  "nerds",
  "nerka",
  "nerks",
  "nerol",
  "nerts",
  "nertz",
  "nervy",
  "nests",
  "netes",
  "netop",
  "netts",
  "netty",
  "neuks",
  "neume",
  "neums",
  "nevel",
  "neves",
  "nevus",
  "newbs",
  "newed",
  "newel",
  "newie",
  "newsy",
  "newts",
  "nexts",
  "nexus",
  "ngaio",
  "ngana",
  "ngati",
  "ngoma",
  "ngwee",
  "nicad",
  "nicht",
  "nicks",
  "nicol",
  "nidal",
  "nided",
  "nides",
  "nidor",
  "nidus",
  "niefs",
  "nieve",
  "nifes",
  "niffs",
  "niffy",
  "nifty",
  "niger",
  "nighs",
  "nihil",
  "nikab",
  "nikah",
  "nikau",
  "nills",
  "nimbi",
  "nimbs",
  "nimps",
  "niner",
  "nines",
  "ninon",
  "nipas",
  "nippy",
  "niqab",
  "nirls",
  "nirly",
  "nisei",
  "nisse",
  "nisus",
  "niter",
  "nites",
  "nitid",
  "niton",
  "nitre",
  "nitro",
  "nitry",
  "nitty",
  "nival",
  "nixed",
  "nixer",
  "nixes",
  "nixie",
  "nizam",
  "nkosi",
  "noahs",
  "nobby",
  "nocks",
  "nodal",
  "noddy",
  "nodes",
  "nodus",
  "noels",
  "noggs",
  "nohow",
  "noils",
  "noily",
  "noint",
  "noirs",
  "noles",
  "nolls",
  "nolos",
  "nomas",
  "nomen",
  "nomes",
  "nomic",
  "nomoi",
  "nomos",
  "nonas",
  "nonce",
  "nones",
  "nonet",
  "nongs",
  "nonis",
  "nonny",
  "nonyl",
  "noobs",
  "nooit",
  "nooks",
  "nooky",
  "noons",
  "noops",
  "nopal",
  "noria",
  "noris",
  "norks",
  "norma",
  "norms",
  "nosed",
  "noser",
  "noses",
  "notal",
  "noted",
  "noter",
  "notes",
  "notum",
  "nould",
  "noule",
  "nouls",
  "nouns",
  "nouny",
  "noups",
  "novae",
  "novas",
  "novum",
  "noway",
  "nowed",
  "nowls",
  "nowts",
  "nowty",
  "noxal",
  "noxes",
  "noyau",
  "noyed",
  "noyes",
  "nubby",
  "nubia",
  "nucha",
  "nuddy",
  "nuder",
  "nudes",
  "nudie",
  "nudzh",
  "nuffs",
  "nugae",
  "nuked",
  "nukes",
  "nulla",
  "nulls",
  "numbs",
  "numen",
  "nummy",
  "nunny",
  "nurds",
  "nurdy",
  "nurls",
  "nurrs",
  "nutso",
  "nutsy",
  "nyaff",
  "nyala",
  "nying",
  "nyssa",
  "oaked",
  "oaker",
  "oakum",
  "oared",
  "oases",
  "oasis",
  "oasts",
  "oaten",
  "oater",
  "oaths",
  "oaves",
  "obang",
  "obeah",
  "obeli",
  "obeys",
  "obias",
  "obied",
  "obiit",
  "obits",
  "objet",
  "oboes",
  "obole",
  "oboli",
  "obols",
  "occam",
  "ocher",
  "oches",
  "ochre",
  "ochry",
  "ocker",
  "ocrea",
  "octad",
  "octan",
  "octas",
  "octyl",
  "oculi",
  "odahs",
  "odals",
  "odeon",
  "odeum",
  "odism",
  "odist",
  "odium",
  "odors",
  "odour",
  "odyle",
  "odyls",
  "ofays",
  "offed",
  "offie",
  "oflag",
  "ofter",
  "ogams",
  "ogeed",
  "ogees",
  "oggin",
  "ogham",
  "ogive",
  "ogled",
  "ogler",
  "ogles",
  "ogmic",
  "ogres",
  "ohias",
  "ohing",
  "ohmic",
  "ohone",
  "oidia",
  "oiled",
  "oiler",
  "oinks",
  "oints",
  "ojime",
  "okapi",
  "okays",
  "okehs",
  "okras",
  "oktas",
  "oldie",
  "oleic",
  "olein",
  "olent",
  "oleos",
  "oleum",
  "olios",
  "ollas",
  "ollav",
  "oller",
  "ollie",
  "ology",
  "olpae",
  "olpes",
  "omasa",
  "omber",
  "ombus",
  "omens",
  "omers",
  "omits",
  "omlah",
  "omovs",
  "omrah",
  "oncer",
  "onces",
  "oncet",
  "oncus",
  "onely",
  "oners",
  "onery",
  "onium",
  "onkus",
  "onlay",
  "onned",
  "ontic",
  "oobit",
  "oohed",
  "oomph",
  "oonts",
  "ooped",
  "oorie",
  "ooses",
  "ootid",
  "oozed",
  "oozes",
  "opahs",
  "opals",
  "opens",
  "opepe",
  "oping",
  "oppos",
  "opsin",
  "opted",
  "opter",
  "orach",
  "oracy",
  "orals",
  "orang",
  "orant",
  "orate",
  "orbed",
  "orcas",
  "orcin",
  "ordos",
  "oread",
  "orfes",
  "orgia",
  "orgic",
  "orgue",
  "oribi",
  "oriel",
  "orixa",
  "orles",
  "orlon",
  "orlop",
  "ormer",
  "ornis",
  "orpin",
  "orris",
  "ortho",
  "orval",
  "orzos",
  "oscar",
  "oshac",
  "osier",
  "osmic",
  "osmol",
  "ossia",
  "ostia",
  "otaku",
  "otary",
  "ottar",
  "ottos",
  "oubit",
  "oucht",
  "ouens",
  "ouija",
  "oulks",
  "oumas",
  "oundy",
  "oupas",
  "ouped",
  "ouphe",
  "ouphs",
  "ourie",
  "ousel",
  "ousts",
  "outby",
  "outed",
  "outre",
  "outro",
  "outta",
  "ouzel",
  "ouzos",
  "ovals",
  "ovels",
  "ovens",
  "overs",
  "ovist",
  "ovoli",
  "ovolo",
  "ovule",
  "owche",
  "owies",
  "owled",
  "owler",
  "owlet",
  "owned",
  "owres",
  "owrie",
  "owsen",
  "oxbow",
  "oxers",
  "oxeye",
  "oxids",
  "oxies",
  "oxime",
  "oxims",
  "oxlip",
  "oxter",
  "oyers",
  "ozeki",
  "ozzie",
  "paals",
  "paans",
  "pacas",
  "paced",
  "pacer",
  "paces",
  "pacey",
  "pacha",
  "packs",
  "pacos",
  "pacta",
  "pacts",
  "padis",
  "padle",
  "padma",
  "padre",
  "padri",
  "paean",
  "paedo",
  "paeon",
  "paged",
  "pager",
  "pages",
  "pagle",
  "pagod",
  "pagri",
  "paiks",
  "pails",
  "pains",
  "paire",
  "pairs",
  "paisa",
  "paise",
  "pakka",
  "palas",
  "palay",
  "palea",
  "paled",
  "pales",
  "palet",
  "palis",
  "palki",
  "palla",
  "palls",
  "pally",
  "palms",
  "palmy",
  "palpi",
  "palps",
  "palsa",
  "pampa",
  "panax",
  "pance",
  "panda",
  "pands",
  "pandy",
  "paned",
  "panes",
  "panga",
  "pangs",
  "panim",
  "panko",
  "panne",
  "panni",
  "panto",
  "pants",
  "panty",
  "paoli",
  "paolo",
  "papas",
  "papaw",
  "papes",
  "pappi",
  "pappy",
  "parae",
  "paras",
  "parch",
  "pardi",
  "pards",
  "pardy",
  "pared",
  "paren",
  "pareo",
  "pares",
  "pareu",
  "parev",
  "parge",
  "pargo",
  "paris",
  "parki",
  "parks",
  "parky",
  "parle",
  "parly",
  "parma",
  "parol",
  "parps",
  "parra",
  "parrs",
  "parti",
  "parts",
  "parve",
  "parvo",
  "paseo",
  "pases",
  "pasha",
  "pashm",
  "paska",
  "paspy",
  "passe",
  "pasts",
  "pated",
  "paten",
  "pater",
  "pates",
  "paths",
  "patin",
  "patka",
  "patly",
  "patte",
  "patus",
  "pauas",
  "pauls",
  "pavan",
  "paved",
  "paven",
  "paver",
  "paves",
  "pavid",
  "pavin",
  "pavis",
  "pawas",
  "pawaw",
  "pawed",
  "pawer",
  "pawks",
  "pawky",
  "pawls",
  "pawns",
  "paxes",
  "payed",
  "payor",
  "paysd",
  "peage",
  "peags",
  "peaks",
  "peaky",
  "peals",
  "peans",
  "peare",
  "pears",
  "peart",
  "pease",
  "peats",
  "peaty",
  "peavy",
  "peaze",
  "pebas",
  "pechs",
  "pecke",
  "pecks",
  "pecky",
  "pedes",
  "pedis",
  "pedro",
  "peece",
  "peeks",
  "peels",
  "peens",
  "peeoy",
  "peepe",
  "peeps",
  "peers",
  "peery",
  "peeve",
  "peggy",
  "peghs",
  "peins",
  "peise",
  "peize",
  "pekan",
  "pekes",
  "pekin",
  "pekoe",
  "pelas",
  "pelau",
  "peles",
  "pelfs",
  "pells",
  "pelma",
  "pelon",
  "pelta",
  "pelts",
  "pends",
  "pendu",
  "pened",
  "penes",
  "pengo",
  "penie",
  "penis",
  "penks",
  "penna",
  "penni",
  "pents",
  "peons",
  "peony",
  "pepla",
  "pepos",
  "peppy",
  "pepsi",
  "perai",
  "perce",
  "percs",
  "perdu",
  "perdy",
  "perea",
  "peres",
  "peris",
  "perks",
  "perms",
  "perns",
  "perog",
  "perps",
  "perry",
  "perse",
  "perst",
  "perts",
  "perve",
  "pervo",
  "pervs",
  "pervy",
  "pesos",
  "pests",
  "pesty",
  "petar",
  "peter",
  "petit",
  "petre",
  "petri",
  "petti",
  "petto",
  "pewee",
  "pewit",
  "peyse",
  "phage",
  "phang",
  "phare",
  "pharm",
  "pheer",
  "phene",
  "pheon",
  "phese",
  "phial",
  "phish",
  "phizz",
  "phlox",
  "phoca",
  "phono",
  "phons",
  "phots",
  "phpht",
  "phuts",
  "phyla",
  "phyle",
  "piani",
  "pians",
  "pibal",
  "pical",
  "picas",
  "piccy",
  "picks",
  "picot",
  "picra",
  "picul",
  "piend",
  "piers",
  "piert",
  "pieta",
  "piets",
  "piezo",
  "pight",
  "pigmy",
  "piing",
  "pikas",
  "pikau",
  "piked",
  "piker",
  "pikes",
  "pikey",
  "pikis",
  "pikul",
  "pilae",
  "pilaf",
  "pilao",
  "pilar",
  "pilau",
  "pilaw",
  "pilch",
  "pilea",
  "piled",
  "pilei",
  "piler",
  "piles",
  "pilis",
  "pills",
  "pilow",
  "pilum",
  "pilus",
  "pimas",
  "pimps",
  "pinas",
  "pined",
  "pines",
  "pingo",
  "pings",
  "pinko",
  "pinks",
  "pinna",
  "pinny",
  "pinon",
  "pinot",
  "pinta",
  "pints",
  "pinup",
  "pions",
  "piony",
  "pious",
  "pioye",
  "pioys",
  "pipal",
  "pipas",
  "piped",
  "pipes",
  "pipet",
  "pipis",
  "pipit",
  "pippy",
  "pipul",
  "pirai",
  "pirls",
  "pirns",
  "pirog",
  "pisco",
  "pises",
  "pisky",
  "pisos",
  "pissy",
  "piste",
  "pitas",
  "piths",
  "piton",
  "pitot",
  "pitta",
  "piums",
  "pixes",
  "pized",
  "pizes",
  "plaas",
  "plack",
  "plage",
  "plans",
  "plaps",
  "plash",
  "plasm",
  "plast",
  "plats",
  "platt",
  "platy",
  "playa",
  "plays",
  "pleas",
  "plebe",
  "plebs",
  "plena",
  "pleon",
  "plesh",
  "plews",
  "plica",
  "plies",
  "plims",
  "pling",
  "plink",
  "ploat",
  "plods",
  "plong",
  "plonk",
  "plook",
  "plops",
  "plots",
  "plotz",
  "plouk",
  "plows",
  "ploye",
  "ploys",
  "plues",
  "pluff",
  "plugs",
  "plums",
  "plumy",
  "pluot",
  "pluto",
  "plyer",
  "poach",
  "poaka",
  "poake",
  "poboy",
  "pocks",
  "pocky",
  "podal",
  "poddy",
  "podex",
  "podge",
  "podgy",
  "podia",
  "poems",
  "poeps",
  "poets",
  "pogey",
  "pogge",
  "pogos",
  "pohed",
  "poilu",
  "poind",
  "pokal",
  "poked",
  "pokes",
  "pokey",
  "pokie",
  "poled",
  "poler",
  "poles",
  "poley",
  "polio",
  "polis",
  "polje",
  "polks",
  "polls",
  "polly",
  "polos",
  "polts",
  "polys",
  "pombe",
  "pomes",
  "pommy",
  "pomos",
  "pomps",
  "ponce",
  "poncy",
  "ponds",
  "pones",
  "poney",
  "ponga",
  "pongo",
  "pongs",
  "pongy",
  "ponks",
  "ponts",
  "ponty",
  "ponzu",
  "poods",
  "pooed",
  "poofs",
  "poofy",
  "poohs",
  "pooja",
  "pooka",
  "pooks",
  "pools",
  "poons",
  "poops",
  "poopy",
  "poori",
  "poort",
  "poots",
  "poove",
  "poovy",
  "popes",
  "poppa",
  "popsy",
  "porae",
  "poral",
  "pored",
  "porer",
  "pores",
  "porge",
  "porgy",
  "porin",
  "porks",
  "porky",
  "porno",
  "porns",
  "porny",
  "porta",
  "ports",
  "porty",
  "posed",
  "poses",
  "posey",
  "posho",
  "posts",
  "potae",
  "potch",
  "poted",
  "potes",
  "potin",
  "potoo",
  "potsy",
  "potto",
  "potts",
  "potty",
  "pouff",
  "poufs",
  "pouke",
  "pouks",
  "poule",
  "poulp",
  "poult",
  "poupe",
  "poupt",
  "pours",
  "pouts",
  "powan",
  "powin",
  "pownd",
  "powns",
  "powny",
  "powre",
  "poxed",
  "poxes",
  "poynt",
  "poyou",
  "poyse",
  "pozzy",
  "praam",
  "prads",
  "prahu",
  "prams",
  "prana",
  "prang",
  "praos",
  "prase",
  "prate",
  "prats",
  "pratt",
  "praty",
  "praus",
  "prays",
  "predy",
  "preed",
  "prees",
  "preif",
  "prems",
  "premy",
  "prent",
  "preon",
  "preop",
  "preps",
  "presa",
  "prese",
  "prest",
  "preve",
  "prexy",
  "preys",
  "prial",
  "pricy",
  "prief",
  "prier",
  "pries",
  "prigs",
  "prill",
  "prima",
  "primi",
  "primp",
  "prims",
  "primy",
  "prink",
  "prion",
  "prise",
  "priss",
  "proas",
  "probs",
  "prods",
  "proem",
  "profs",
  "progs",
  "proin",
  "proke",
  "prole",
  "proll",
  "promo",
  "proms",
  "pronk",
  "props",
  "prore",
  "proso",
  "pross",
  "prost",
  "prosy",
  "proto",
  "proul",
  "prows",
  "proyn",
  "prunt",
  "pruta",
  "pryer",
  "pryse",
  "pseud",
  "pshaw",
  "psion",
  "psoae",
  "psoai",
  "psoas",
  "psora",
  "psych",
  "psyop",
  "pubco",
  "pubes",
  "pubis",
  "pucan",
  "pucer",
  "puces",
  "pucka",
  "pucks",
  "puddy",
  "pudge",
  "pudic",
  "pudor",
  "pudsy",
  "pudus",
  "puers",
  "puffa",
  "puffs",
  "puggy",
  "pugil",
  "puhas",
  "pujah",
  "pujas",
  "pukas",
  "puked",
  "puker",
  "pukes",
  "pukey",
  "pukka",
  "pukus",
  "pulao",
  "pulas",
  "puled",
  "puler",
  "pules",
  "pulik",
  "pulis",
  "pulka",
  "pulks",
  "pulli",
  "pulls",
  "pully",
  "pulmo",
  "pulps",
  "pulus",
  "pumas",
  "pumie",
  "pumps",
  "punas",
  "punce",
  "punga",
  "pungs",
  "punji",
  "punka",
  "punks",
  "punky",
  "punny",
  "punto",
  "punts",
  "punty",
  "pupae",
  "pupas",
  "pupus",
  "purda",
  "pured",
  "pures",
  "purin",
  "puris",
  "purls",
  "purpy",
  "purrs",
  "pursy",
  "purty",
  "puses",
  "pusle",
  "pussy",
  "putid",
  "puton",
  "putti",
  "putto",
  "putts",
  "puzel",
  "pwned",
  "pyats",
  "pyets",
  "pygal",
  "pyins",
  "pylon",
  "pyned",
  "pynes",
  "pyoid",
  "pyots",
  "pyral",
  "pyran",
  "pyres",
  "pyrex",
  "pyric",
  "pyros",
  "pyxed",
  "pyxes",
  "pyxie",
  "pyxis",
  "pzazz",
  "qadis",
  "qaids",
  "qajaq",
  "qanat",
  "qapik",
  "qibla",
  "qophs",
  "qorma",
  "quads",
  "quaff",
  "quags",
  "quair",
  "quais",
  "quaky",
  "quale",
  "quant",
  "quare",
  "quass",
  "quate",
  "quats",
  "quayd",
  "quays",
  "qubit",
  "quean",
  "queme",
  "quena",
  "quern",
  "queyn",
  "queys",
  "quich",
  "quids",
  "quiff",
  "quims",
  "quina",
  "quine",
  "quino",
  "quins",
  "quint",
  "quipo",
  "quips",
  "quipu",
  "quire",
  "quirt",
  "quist",
  "quits",
  "quoad",
  "quods",
  "quoif",
  "quoin",
  "quoit",
  "quoll",
  "quonk",
  "quops",
  "qursh",
  "quyte",
  "rabat",
  "rabic",
  "rabis",
  "raced",
  "races",
  "rache",
  "racks",
  "racon",
  "radge",
  "radix",
  "radon",
  "raffs",
  "rafts",
  "ragas",
  "ragde",
  "raged",
  "ragee",
  "rager",
  "rages",
  "ragga",
  "raggs",
  "raggy",
  "ragis",
  "ragus",
  "rahed",
  "rahui",
  "raias",
  "raids",
  "raiks",
  "raile",
  "rails",
  "raine",
  "rains",
  "raird",
  "raita",
  "raits",
  "rajas",
  "rajes",
  "raked",
  "rakee",
  "raker",
  "rakes",
  "rakia",
  "rakis",
  "rakus",
  "rales",
  "ramal",
  "ramee",
  "ramet",
  "ramie",
  "ramin",
  "ramis",
  "rammy",
  "ramps",
  "ramus",
  "ranas",
  "rance",
  "rands",
  "ranee",
  "ranga",
  "rangi",
  "rangs",
  "rangy",
  "ranid",
  "ranis",
  "ranke",
  "ranks",
  "rants",
  "raped",
  "raper",
  "rapes",
  "raphe",
  "rappe",
  "rared",
  "raree",
  "rares",
  "rarks",
  "rased",
  "raser",
  "rases",
  "rasps",
  "rasse",
  "rasta",
  "ratal",
  "ratan",
  "ratas",
  "ratch",
  "rated",
  "ratel",
  "rater",
  "rates",
  "ratha",
  "rathe",
  "raths",
  "ratoo",
  "ratos",
  "ratus",
  "rauns",
  "raupo",
  "raved",
  "ravel",
  "raver",
  "raves",
  "ravey",
  "ravin",
  "rawer",
  "rawin",
  "rawly",
  "rawns",
  "raxed",
  "raxes",
  "rayah",
  "rayas",
  "rayed",
  "rayle",
  "rayne",
  "razed",
  "razee",
  "razer",
  "razes",
  "razoo",
  "readd",
  "reads",
  "reais",
  "reaks",
  "realo",
  "reals",
  "reame",
  "reams",
  "reamy",
  "reans",
  "reaps",
  "rears",
  "reast",
  "reata",
  "reate",
  "reave",
  "rebbe",
  "rebec",
  "rebid",
  "rebit",
  "rebop",
  "rebuy",
  "recal",
  "recce",
  "recco",
  "reccy",
  "recit",
  "recks",
  "recon",
  "recta",
  "recti",
  "recto",
  "redan",
  "redds",
  "reddy",
  "reded",
  "redes",
  "redia",
  "redid",
  "redip",
  "redly",
  "redon",
  "redos",
  "redox",
  "redry",
  "redub",
  "redux",
  "redye",
  "reech",
  "reede",
  "reeds",
  "reefs",
  "reefy",
  "reeks",
  "reeky",
  "reels",
  "reens",
  "reest",
  "reeve",
  "refed",
  "refel",
  "reffo",
  "refis",
  "refix",
  "refly",
  "refry",
  "regar",
  "reges",
  "reggo",
  "regie",
  "regma",
  "regna",
  "regos",
  "regur",
  "rehem",
  "reifs",
  "reify",
  "reiki",
  "reiks",
  "reink",
  "reins",
  "reird",
  "reist",
  "reive",
  "rejig",
  "rejon",
  "reked",
  "rekes",
  "rekey",
  "relet",
  "relie",
  "relit",
  "rello",
  "reman",
  "remap",
  "remen",
  "remet",
  "remex",
  "remix",
  "renay",
  "rends",
  "reney",
  "renga",
  "renig",
  "renin",
  "renne",
  "renos",
  "rente",
  "rents",
  "reoil",
  "reorg",
  "repeg",
  "repin",
  "repla",
  "repos",
  "repot",
  "repps",
  "repro",
  "reran",
  "rerig",
  "resat",
  "resaw",
  "resay",
  "resee",
  "reses",
  "resew",
  "resid",
  "resit",
  "resod",
  "resow",
  "resto",
  "rests",
  "resty",
  "resus",
  "retag",
  "retax",
  "retem",
  "retia",
  "retie",
  "retox",
  "revet",
  "revie",
  "rewan",
  "rewax",
  "rewed",
  "rewet",
  "rewin",
  "rewon",
  "rewth",
  "rexes",
  "rezes",
  "rheas",
  "rheme",
  "rheum",
  "rhies",
  "rhime",
  "rhine",
  "rhody",
  "rhomb",
  "rhone",
  "rhumb",
  "rhyne",
  "rhyta",
  "riads",
  "rials",
  "riant",
  "riata",
  "ribas",
  "ribby",
  "ribes",
  "riced",
  "ricer",
  "rices",
  "ricey",
  "richt",
  "ricin",
  "ricks",
  "rides",
  "ridgy",
  "ridic",
  "riels",
  "riems",
  "rieve",
  "rifer",
  "riffs",
  "rifte",
  "rifts",
  "rifty",
  "riggs",
  "rigol",
  "riled",
  "riles",
  "riley",
  "rille",
  "rills",
  "rimae",
  "rimed",
  "rimer",
  "rimes",
  "rimus",
  "rinds",
  "rindy",
  "rines",
  "rings",
  "rinks",
  "rioja",
  "riots",
  "riped",
  "ripes",
  "ripps",
  "rises",
  "rishi",
  "risks",
  "risps",
  "risus",
  "rites",
  "ritts",
  "ritzy",
  "rivas",
  "rived",
  "rivel",
  "riven",
  "rives",
  "riyal",
  "rizas",
  "roads",
  "roams",
  "roans",
  "roars",
  "roary",
  "roate",
  "robed",
  "robes",
  "roble",
  "rocks",
  "roded",
  "rodes",
  "roguy",
  "rohes",
  "roids",
  "roils",
  "roily",
  "roins",
  "roist",
  "rojak",
  "rojis",
  "roked",
  "roker",
  "rokes",
  "rolag",
  "roles",
  "rolfs",
  "rolls",
  "romal",
  "roman",
  "romeo",
  "romps",
  "ronde",
  "rondo",
  "roneo",
  "rones",
  "ronin",
  "ronne",
  "ronte",
  "ronts",
  "roods",
  "roofs",
  "roofy",
  "rooks",
  "rooky",
  "rooms",
  "roons",
  "roops",
  "roopy",
  "roosa",
  "roose",
  "roots",
  "rooty",
  "roped",
  "roper",
  "ropes",
  "ropey",
  "roque",
  "roral",
  "rores",
  "roric",
  "rorid",
  "rorie",
  "rorts",
  "rorty",
  "rosed",
  "roses",
  "roset",
  "roshi",
  "rosin",
  "rosit",
  "rosti",
  "rosts",
  "rotal",
  "rotan",
  "rotas",
  "rotch",
  "roted",
  "rotes",
  "rotis",
  "rotls",
  "roton",
  "rotos",
  "rotte",
  "rouen",
  "roues",
  "roule",
  "rouls",
  "roums",
  "roups",
  "roupy",
  "roust",
  "routh",
  "routs",
  "roved",
  "roven",
  "roves",
  "rowan",
  "rowed",
  "rowel",
  "rowen",
  "rowie",
  "rowme",
  "rownd",
  "rowth",
  "rowts",
  "royne",
  "royst",
  "rozet",
  "rozit",
  "ruana",
  "rubai",
  "rubby",
  "rubel",
  "rubes",
  "rubin",
  "ruble",
  "rubli",
  "rubus",
  "ruche",
  "rucks",
  "rudas",
  "rudds",
  "rudes",
  "rudie",
  "rudis",
  "rueda",
  "ruers",
  "ruffe",
  "ruffs",
  "rugae",
  "rugal",
  "ruggy",
  "ruing",
  "ruins",
  "rukhs",
  "ruled",
  "rules",
  "rumal",
  "rumbo",
  "rumen",
  "rumes",
  "rumly",
  "rummy",
  "rumpo",
  "rumps",
  "rumpy",
  "runch",
  "runds",
  "runed",
  "runes",
  "rungs",
  "runic",
  "runny",
  "runts",
  "runty",
  "rupia",
  "rurps",
  "rurus",
  "rusas",
  "ruses",
  "rushy",
  "rusks",
  "rusma",
  "russe",
  "rusts",
  "ruths",
  "rutin",
  "rutty",
  "ryals",
  "rybat",
  "ryked",
  "rykes",
  "rymme",
  "rynds",
  "ryots",
  "ryper",
  "saags",
  "sabal",
  "sabed",
  "saber",
  "sabes",
  "sabha",
  "sabin",
  "sabir",
  "sable",
  "sabot",
  "sabra",
  "sabre",
  "sacks",
  "sacra",
  "saddo",
  "sades",
  "sadhe",
  "sadhu",
  "sadis",
  "sados",
  "sadza",
  "safed",
  "safes",
  "sagas",
  "sager",
  "sages",
  "saggy",
  "sagos",
  "sagum",
  "saheb",
  "sahib",
  "saice",
  "saick",
  "saics",
  "saids",
  "saiga",
  "sails",
  "saims",
  "saine",
  "sains",
  "sairs",
  "saist",
  "saith",
  "sajou",
  "sakai",
  "saker",
  "sakes",
  "sakia",
  "sakis",
  "sakti",
  "salal",
  "salat",
  "salep",
  "sales",
  "salet",
  "salic",
  "salix",
  "salle",
  "salmi",
  "salol",
  "salop",
  "salpa",
  "salps",
  "salse",
  "salto",
  "salts",
  "salue",
  "salut",
  "saman",
  "samas",
  "samba",
  "sambo",
  "samek",
  "samel",
  "samen",
  "sames",
  "samey",
  "samfu",
  "sammy",
  "sampi",
  "samps",
  "sands",
  "saned",
  "sanes",
  "sanga",
  "sangh",
  "sango",
  "sangs",
  "sanko",
  "sansa",
  "santo",
  "sants",
  "saola",
  "sapan",
  "sapid",
  "sapor",
  "saran",
  "sards",
  "sared",
  "saree",
  "sarge",
  "sargo",
  "sarin",
  "saris",
  "sarks",
  "sarky",
  "sarod",
  "saros",
  "sarus",
  "saser",
  "sasin",
  "sasse",
  "satai",
  "satay",
  "sated",
  "satem",
  "sates",
  "satis",
  "sauba",
  "sauch",
  "saugh",
  "sauls",
  "sault",
  "saunt",
  "saury",
  "sauts",
  "saved",
  "saver",
  "saves",
  "savey",
  "savin",
  "sawah",
  "sawed",
  "sawer",
  "saxes",
  "sayed",
  "sayer",
  "sayid",
  "sayne",
  "sayon",
  "sayst",
  "sazes",
  "scabs",
  "scads",
  "scaff",
  "scags",
  "scail",
  "scala",
  "scall",
  "scams",
  "scand",
  "scans",
  "scapa",
  "scape",
  "scapi",
  "scarp",
  "scars",
  "scart",
  "scath",
  "scats",
  "scatt",
  "scaud",
  "scaup",
  "scaur",
  "scaws",
  "sceat",
  "scena",
  "scend",
  "schav",
  "schmo",
  "schul",
  "schwa",
  "sclim",
  "scody",
  "scogs",
  "scoog",
  "scoot",
  "scopa",
  "scops",
  "scots",
  "scoug",
  "scoup",
  "scowp",
  "scows",
  "scrab",
  "scrae",
  "scrag",
  "scran",
  "scrat",
  "scraw",
  "scray",
  "scrim",
  "scrip",
  "scrob",
  "scrod",
  "scrog",
  "scrow",
  "scudi",
  "scudo",
  "scuds",
  "scuff",
  "scuft",
  "scugs",
  "sculk",
  "scull",
  "sculp",
  "sculs",
  "scums",
  "scups",
  "scurf",
  "scurs",
  "scuse",
  "scuta",
  "scute",
  "scuts",
  "scuzz",
  "scyes",
  "sdayn",
  "sdein",
  "seals",
  "seame",
  "seams",
  "seamy",
  "seans",
  "seare",
  "sears",
  "sease",
  "seats",
  "seaze",
  "sebum",
  "secco",
  "sechs",
  "sects",
  "seder",
  "sedes",
  "sedge",
  "sedgy",
  "sedum",
  "seeds",
  "seeks",
  "seeld",
  "seels",
  "seely",
  "seems",
  "seeps",
  "seepy",
  "seers",
  "sefer",
  "segar",
  "segni",
  "segno",
  "segol",
  "segos",
  "sehri",
  "seifs",
  "seils",
  "seine",
  "seirs",
  "seise",
  "seism",
  "seity",
  "seiza",
  "sekos",
  "sekts",
  "selah",
  "seles",
  "selfs",
  "sella",
  "selle",
  "sells",
  "selva",
  "semee",
  "semes",
  "semie",
  "semis",
  "senas",
  "sends",
  "senes",
  "sengi",
  "senna",
  "senor",
  "sensa",
  "sensi",
  "sente",
  "senti",
  "sents",
  "senvy",
  "senza",
  "sepad",
  "sepal",
  "sepic",
  "sepoy",
  "septa",
  "septs",
  "serac",
  "serai",
  "seral",
  "sered",
  "serer",
  "seres",
  "serfs",
  "serge",
  "seric",
  "serin",
  "serks",
  "seron",
  "serow",
  "serra",
  "serre",
  "serrs",
  "serry",
  "servo",
  "sesey",
  "sessa",
  "setae",
  "setal",
  "seton",
  "setts",
  "sewan",
  "sewar",
  "sewed",
  "sewel",
  "sewen",
  "sewin",
  "sexed",
  "sexer",
  "sexes",
  "sexto",
  "sexts",
  "seyen",
  "shads",
  "shags",
  "shahs",
  "shako",
  "shakt",
  "shalm",
  "shaly",
  "shama",
  "shams",
  "shand",
  "shans",
  "shaps",
  "sharn",
  "shash",
  "shaul",
  "shawm",
  "shawn",
  "shaws",
  "shaya",
  "shays",
  "shchi",
  "sheaf",
  "sheal",
  "sheas",
  "sheds",
  "sheel",
  "shend",
  "shent",
  "sheol",
  "sherd",
  "shere",
  "shero",
  "shets",
  "sheva",
  "shewn",
  "shews",
  "shiai",
  "shiel",
  "shier",
  "shies",
  "shill",
  "shily",
  "shims",
  "shins",
  "ships",
  "shirr",
  "shirs",
  "shish",
  "shiso",
  "shist",
  "shite",
  "shits",
  "shiur",
  "shiva",
  "shive",
  "shivs",
  "shlep",
  "shlub",
  "shmek",
  "shmoe",
  "shoat",
  "shoed",
  "shoer",
  "shoes",
  "shogi",
  "shogs",
  "shoji",
  "shojo",
  "shola",
  "shool",
  "shoon",
  "shoos",
  "shope",
  "shops",
  "shorl",
  "shote",
  "shots",
  "shott",
  "showd",
  "shows",
  "shoyu",
  "shred",
  "shris",
  "shrow",
  "shtik",
  "shtum",
  "shtup",
  "shule",
  "shuln",
  "shuls",
  "shuns",
  "shura",
  "shute",
  "shuts",
  "shwas",
  "shyer",
  "sials",
  "sibbs",
  "sibyl",
  "sices",
  "sicht",
  "sicko",
  "sicks",
  "sicky",
  "sidas",
  "sided",
  "sider",
  "sides",
  "sidha",
  "sidhe",
  "sidle",
  "sield",
  "siens",
  "sient",
  "sieth",
  "sieur",
  "sifts",
  "sighs",
  "sigil",
  "sigla",
  "signa",
  "signs",
  "sijos",
  "sikas",
  "siker",
  "sikes",
  "silds",
  "siled",
  "silen",
  "siler",
  "siles",
  "silex",
  "silks",
  "sills",
  "silos",
  "silts",
  "silty",
  "silva",
  "simar",
  "simas",
  "simba",
  "simis",
  "simps",
  "simul",
  "sinds",
  "sined",
  "sines",
  "sings",
  "sinhs",
  "sinks",
  "sinky",
  "sinus",
  "siped",
  "sipes",
  "sippy",
  "sired",
  "siree",
  "sires",
  "sirih",
  "siris",
  "siroc",
  "sirra",
  "sirup",
  "sisal",
  "sises",
  "sista",
  "sists",
  "sitar",
  "sited",
  "sites",
  "sithe",
  "sitka",
  "situp",
  "situs",
  "siver",
  "sixer",
  "sixes",
  "sixmo",
  "sixte",
  "sizar",
  "sized",
  "sizel",
  "sizer",
  "sizes",
  "skags",
  "skail",
  "skald",
  "skank",
  "skart",
  "skats",
  "skatt",
  "skaws",
  "skean",
  "skear",
  "skeds",
  "skeed",
  "skeef",
  "skeen",
  "skeer",
  "skees",
  "skeet",
  "skegg",
  "skegs",
  "skein",
  "skelf",
  "skell",
  "skelm",
  "skelp",
  "skene",
  "skens",
  "skeos",
  "skeps",
  "skers",
  "skets",
  "skews",
  "skids",
  "skied",
  "skies",
  "skiey",
  "skimo",
  "skims",
  "skink",
  "skins",
  "skint",
  "skios",
  "skips",
  "skirl",
  "skirr",
  "skite",
  "skits",
  "skive",
  "skivy",
  "sklim",
  "skoal",
  "skody",
  "skoff",
  "skogs",
  "skols",
  "skool",
  "skort",
  "skosh",
  "skran",
  "skrik",
  "skuas",
  "skugs",
  "skyed",
  "skyer",
  "skyey",
  "skyfs",
  "skyre",
  "skyrs",
  "skyte",
  "slabs",
  "slade",
  "slaes",
  "slags",
  "slaid",
  "slake",
  "slams",
  "slane",
  "slank",
  "slaps",
  "slart",
  "slats",
  "slaty",
  "slaws",
  "slays",
  "slebs",
  "sleds",
  "sleer",
  "slews",
  "sleys",
  "slier",
  "slily",
  "slims",
  "slipe",
  "slips",
  "slipt",
  "slish",
  "slits",
  "slive",
  "sloan",
  "slobs",
  "sloes",
  "slogs",
  "sloid",
  "slojd",
  "slomo",
  "sloom",
  "sloot",
  "slops",
  "slopy",
  "slorm",
  "slots",
  "slove",
  "slows",
  "sloyd",
  "slubb",
  "slubs",
  "slued",
  "slues",
  "sluff",
  "slugs",
  "sluit",
  "slums",
  "slurb",
  "slurs",
  "sluse",
  "sluts",
  "slyer",
  "slype",
  "smaak",
  "smaik",
  "smalm",
  "smalt",
  "smarm",
  "smaze",
  "smeek",
  "smees",
  "smeik",
  "smeke",
  "smerk",
  "smews",
  "smirr",
  "smirs",
  "smits",
  "smogs",
  "smoko",
  "smolt",
  "smoor",
  "smoot",
  "smore",
  "smorg",
  "smout",
  "smowt",
  "smugs",
  "smurs",
  "smush",
  "smuts",
  "snabs",
  "snafu",
  "snags",
  "snaps",
  "snarf",
  "snark",
  "snars",
  "snary",
  "snash",
  "snath",
  "snaws",
  "snead",
  "sneap",
  "snebs",
  "sneck",
  "sneds",
  "sneed",
  "snees",
  "snell",
  "snibs",
  "snick",
  "snies",
  "snift",
  "snigs",
  "snips",
  "snipy",
  "snirt",
  "snits",
  "snobs",
  "snods",
  "snoek",
  "snoep",
  "snogs",
  "snoke",
  "snood",
  "snook",
  "snool",
  "snoot",
  "snots",
  "snowk",
  "snows",
  "snubs",
  "snugs",
  "snush",
  "snyes",
  "soaks",
  "soaps",
  "soare",
  "soars",
  "soave",
  "sobas",
  "socas",
  "soces",
  "socko",
  "socks",
  "socle",
  "sodas",
  "soddy",
  "sodic",
  "sodom",
  "sofar",
  "sofas",
  "softa",
  "softs",
  "softy",
  "soger",
  "sohur",
  "soils",
  "soily",
  "sojas",
  "sojus",
  "sokah",
  "soken",
  "sokes",
  "sokol",
  "solah",
  "solan",
  "solas",
  "solde",
  "soldi",
  "soldo",
  "solds",
  "soled",
  "solei",
  "soler",
  "soles",
  "solon",
  "solos",
  "solum",
  "solus",
  "soman",
  "somas",
  "sonce",
  "sonde",
  "sones",
  "songs",
  "sonly",
  "sonne",
  "sonny",
  "sonse",
  "sonsy",
  "sooey",
  "sooks",
  "sooky",
  "soole",
  "sools",
  "sooms",
  "soops",
  "soote",
  "soots",
  "sophs",
  "sophy",
  "sopor",
  "soppy",
  "sopra",
  "soral",
  "soras",
  "sorbo",
  "sorbs",
  "sorda",
  "sordo",
  "sords",
  "sored",
  "soree",
  "sorel",
  "sorer",
  "sores",
  "sorex",
  "sorgo",
  "sorns",
  "sorra",
  "sorta",
  "sorts",
  "sorus",
  "soths",
  "sotol",
  "souce",
  "souct",
  "sough",
  "souks",
  "souls",
  "soums",
  "soups",
  "soupy",
  "sours",
  "souse",
  "souts",
  "sowar",
  "sowce",
  "sowed",
  "sowff",
  "sowfs",
  "sowle",
  "sowls",
  "sowms",
  "sownd",
  "sowne",
  "sowps",
  "sowse",
  "sowth",
  "soyas",
  "soyle",
  "soyuz",
  "sozin",
  "spacy",
  "spado",
  "spaed",
  "spaer",
  "spaes",
  "spags",
  "spahi",
  "spail",
  "spain",
  "spait",
  "spake",
  "spald",
  "spale",
  "spall",
  "spalt",
  "spams",
  "spane",
  "spang",
  "spans",
  "spard",
  "spars",
  "spart",
  "spate",
  "spats",
  "spaul",
  "spawl",
  "spaws",
  "spayd",
  "spays",
  "spaza",
  "spazz",
  "speal",
  "spean",
  "speat",
  "specs",
  "spect",
  "speel",
  "speer",
  "speil",
  "speir",
  "speks",
  "speld",
  "spelk",
  "speos",
  "spets",
  "speug",
  "spews",
  "spewy",
  "spial",
  "spica",
  "spick",
  "spics",
  "spide",
  "spier",
  "spies",
  "spiff",
  "spifs",
  "spiks",
  "spile",
  "spims",
  "spina",
  "spink",
  "spins",
  "spirt",
  "spiry",
  "spits",
  "spitz",
  "spivs",
  "splay",
  "splog",
  "spode",
  "spods",
  "spoom",
  "spoor",
  "spoot",
  "spork",
  "sposh",
  "spots",
  "sprad",
  "sprag",
  "sprat",
  "spred",
  "sprew",
  "sprit",
  "sprod",
  "sprog",
  "sprue",
  "sprug",
  "spuds",
  "spued",
  "spuer",
  "spues",
  "spugs",
  "spule",
  "spume",
  "spumy",
  "spurs",
  "sputa",
  "spyal",
  "spyre",
  "squab",
  "squaw",
  "squeg",
  "squid",
  "squit",
  "squiz",
  "stabs",
  "stade",
  "stags",
  "stagy",
  "staig",
  "stane",
  "stang",
  "staph",
  "staps",
  "starn",
  "starr",
  "stars",
  "stats",
  "staun",
  "staws",
  "stays",
  "stean",
  "stear",
  "stedd",
  "stede",
  "steds",
  "steek",
  "steem",
  "steen",
  "steil",
  "stela",
  "stele",
  "stell",
  "steme",
  "stems",
  "stend",
  "steno",
  "stens",
  "stent",
  "steps",
  "stept",
  "stere",
  "stets",
  "stews",
  "stewy",
  "steys",
  "stich",
  "stied",
  "sties",
  "stilb",
  "stile",
  "stime",
  "stims",
  "stimy",
  "stipa",
  "stipe",
  "stire",
  "stirk",
  "stirp",
  "stirs",
  "stive",
  "stivy",
  "stoae",
  "stoai",
  "stoas",
  "stoat",
  "stobs",
  "stoep",
  "stogy",
  "stoit",
  "stoln",
  "stoma",
  "stond",
  "stong",
  "stonk",
  "stonn",
  "stook",
  "stoor",
  "stope",
  "stops",
  "stopt",
  "stoss",
  "stots",
  "stott",
  "stoun",
  "stoup",
  "stour",
  "stown",
  "stowp",
  "stows",
  "strad",
  "strae",
  "strag",
  "strak",
  "strep",
  "strew",
  "stria",
  "strig",
  "strim",
  "strop",
  "strow",
  "stroy",
  "strum",
  "stubs",
  "stude",
  "studs",
  "stull",
  "stulm",
  "stumm",
  "stums",
  "stuns",
  "stupa",
  "stupe",
  "sture",
  "sturt",
  "styed",
  "styes",
  "styli",
  "stylo",
  "styme",
  "stymy",
  "styre",
  "styte",
  "subah",
  "subas",
  "subby",
  "suber",
  "subha",
  "succi",
  "sucks",
  "sucky",
  "sucre",
  "sudds",
  "sudor",
  "sudsy",
  "suede",
  "suent",
  "suers",
  "suete",
  "suets",
  "suety",
  "sugan",
  "sughs",
  "sugos",
  "suhur",
  "suids",
  "suint",
  "suits",
  "sujee",
  "sukhs",
  "sukuk",
  "sulci",
  "sulfa",
  "sulfo",
  "sulks",
  "sulph",
  "sulus",
  "sumis",
  "summa",
  "sumos",
  "sumph",
  "sumps",
  "sunis",
  "sunks",
  "sunna",
  "sunns",
  "sunup",
  "supes",
  "supra",
  "surah",
  "sural",
  "suras",
  "surat",
  "surds",
  "sured",
  "sures",
  "surfs",
  "surfy",
  "surgy",
  "surra",
  "sused",
  "suses",
  "susus",
  "sutor",
  "sutra",
  "sutta",
  "swabs",
  "swack",
  "swads",
  "swage",
  "swags",
  "swail",
  "swain",
  "swale",
  "swaly",
  "swamy",
  "swang",
  "swank",
  "swans",
  "swaps",
  "swapt",
  "sward",
  "sware",
  "swarf",
  "swart",
  "swats",
  "swayl",
  "sways",
  "sweal",
  "swede",
  "sweed",
  "sweel",
  "sweer",
  "swees",
  "sweir",
  "swelt",
  "swerf",
  "sweys",
  "swies",
  "swigs",
  "swile",
  "swims",
  "swink",
  "swipe",
  "swire",
  "swiss",
  "swith",
  "swits",
  "swive",
  "swizz",
  "swobs",
  "swole",
  "swoln",
  "swops",
  "swopt",
  "swots",
  "swoun",
  "sybbe",
  "sybil",
  "syboe",
  "sybow",
  "sycee",
  "syces",
  "sycon",
  "syens",
  "syker",
  "sykes",
  "sylis",
  "sylph",
  "sylva",
  "symar",
  "synch",
  "syncs",
  "synds",
  "syned",
  "synes",
  "synth",
  "syped",
  "sypes",
  "syphs",
  "syrah",
  "syren",
  "sysop",
  "sythe",
  "syver",
  "taals",
  "taata",
  "taber",
  "tabes",
  "tabid",
  "tabis",
  "tabla",
  "tabor",
  "tabun",
  "tabus",
  "tacan",
  "taces",
  "tacet",
  "tache",
  "tacho",
  "tachs",
  "tacks",
  "tacos",
  "tacts",
  "taels",
  "tafia",
  "taggy",
  "tagma",
  "tahas",
  "tahrs",
  "taiga",
  "taigs",
  "taiko",
  "tails",
  "tains",
  "taira",
  "taish",
  "taits",
  "tajes",
  "takas",
  "takes",
  "takhi",
  "takin",
  "takis",
  "takky",
  "talak",
  "talaq",
  "talar",
  "talas",
  "talcs",
  "talcy",
  "talea",
  "taler",
  "tales",
  "talks",
  "talky",
  "talls",
  "talma",
  "talpa",
  "taluk",
  "talus",
  "tamal",
  "tamed",
  "tames",
  "tamin",
  "tamis",
  "tammy",
  "tamps",
  "tanas",
  "tanga",
  "tangi",
  "tangs",
  "tanhs",
  "tanka",
  "tanks",
  "tanky",
  "tanna",
  "tansy",
  "tanti",
  "tanto",
  "tanty",
  "tapas",
  "taped",
  "tapen",
  "tapes",
  "tapet",
  "tapis",
  "tappa",
  "tapus",
  "taras",
  "tardo",
  "tared",
  "tares",
  "targa",
  "targe",
  "tarns",
  "taroc",
  "tarok",
  "taros",
  "tarps",
  "tarre",
  "tarry",
  "tarsi",
  "tarts",
  "tarty",
  "tasar",
  "tased",
  "taser",
  "tases",
  "tasks",
  "tassa",
  "tasse",
  "tasso",
  "tatar",
  "tater",
  "tates",
  "taths",
  "tatie",
  "tatou",
  "tatts",
  "tatus",
  "taube",
  "tauld",
  "tauon",
  "taupe",
  "tauts",
  "tavah",
  "tavas",
  "taver",
  "tawai",
  "tawas",
  "tawed",
  "tawer",
  "tawie",
  "tawse",
  "tawts",
  "taxed",
  "taxer",
  "taxes",
  "taxis",
  "taxol",
  "taxon",
  "taxor",
  "taxus",
  "tayra",
  "tazza",
  "tazze",
  "teade",
  "teads",
  "teaed",
  "teaks",
  "teals",
  "teams",
  "tears",
  "teats",
  "teaze",
  "techs",
  "techy",
  "tecta",
  "teels",
  "teems",
  "teend",
  "teene",
  "teens",
  "teeny",
  "teers",
  "teffs",
  "teggs",
  "tegua",
  "tegus",
  "tehrs",
  "teiid",
  "teils",
  "teind",
  "teins",
  "telae",
  "telco",
  "teles",
  "telex",
  "telia",
  "telic",
  "tells",
  "telly",
  "teloi",
  "telos",
  "temed",
  "temes",
  "tempi",
  "temps",
  "tempt",
  "temse",
  "tench",
  "tends",
  "tendu",
  "tenes",
  "tenge",
  "tenia",
  "tenne",
  "tenno",
  "tenny",
  "tenon",
  "tents",
  "tenty",
  "tenue",
  "tepal",
  "tepas",
  "tepoy",
  "terai",
  "teras",
  "terce",
  "terek",
  "teres",
  "terfe",
  "terfs",
  "terga",
  "terms",
  "terne",
  "terns",
  "terry",
  "terts",
  "tesla",
  "testa",
  "teste",
  "tests",
  "tetes",
  "teths",
  "tetra",
  "tetri",
  "teuch",
  "teugh",
  "tewed",
  "tewel",
  "tewit",
  "texas",
  "texes",
  "texts",
  "thack",
  "thagi",
  "thaim",
  "thale",
  "thali",
  "thana",
  "thane",
  "thang",
  "thans",
  "thanx",
  "tharm",
  "thars",
  "thaws",
  "thawy",
  "thebe",
  "theca",
  "theed",
  "theek",
  "thees",
  "thegn",
  "theic",
  "thein",
  "thelf",
  "thema",
  "thens",
  "theow",
  "therm",
  "thesp",
  "thete",
  "thews",
  "thewy",
  "thigs",
  "thilk",
  "thill",
  "thine",
  "thins",
  "thiol",
  "thirl",
  "thoft",
  "thole",
  "tholi",
  "thoro",
  "thorp",
  "thous",
  "thowl",
  "thrae",
  "thraw",
  "thrid",
  "thrip",
  "throe",
  "thuds",
  "thugs",
  "thuja",
  "thunk",
  "thurl",
  "thuya",
  "thymi",
  "thymy",
  "tians",
  "tiars",
  "tical",
  "ticca",
  "ticed",
  "tices",
  "tichy",
  "ticks",
  "ticky",
  "tiddy",
  "tided",
  "tides",
  "tiers",
  "tiffs",
  "tifos",
  "tifts",
  "tiges",
  "tigon",
  "tikas",
  "tikes",
  "tikis",
  "tikka",
  "tilak",
  "tiled",
  "tiler",
  "tiles",
  "tills",
  "tilly",
  "tilth",
  "tilts",
  "timbo",
  "timed",
  "times",
  "timon",
  "timps",
  "tinas",
  "tinct",
  "tinds",
  "tinea",
  "tined",
  "tines",
  "tinge",
  "tings",
  "tinks",
  "tinny",
  "tints",
  "tinty",
  "tipis",
  "tippy",
  "tired",
  "tires",
  "tirls",
  "tiros",
  "tirrs",
  "titch",
  "titer",
  "titis",
  "titre",
  "titty",
  "titup",
  "tiyin",
  "tiyns",
  "tizes",
  "tizzy",
  "toads",
  "toady",
  "toaze",
  "tocks",
  "tocky",
  "tocos",
  "todde",
  "toeas",
  "toffs",
  "toffy",
  "tofts",
  "tofus",
  "togae",
  "togas",
  "toged",
  "toges",
  "togue",
  "tohos",
  "toile",
  "toils",
  "toing",
  "toise",
  "toits",
  "tokay",
  "toked",
  "toker",
  "tokes",
  "tokos",
  "tolan",
  "tolar",
  "tolas",
  "toled",
  "toles",
  "tolls",
  "tolly",
  "tolts",
  "tolus",
  "tolyl",
  "toman",
  "tombs",
  "tomes",
  "tomia",
  "tommy",
  "tomos",
  "tondi",
  "tondo",
  "toned",
  "toner",
  "tones",
  "toney",
  "tongs",
  "tonka",
  "tonks",
  "tonne",
  "tonus",
  "tools",
  "tooms",
  "toons",
  "toots",
  "toped",
  "topee",
  "topek",
  "toper",
  "topes",
  "tophe",
  "tophi",
  "tophs",
  "topis",
  "topoi",
  "topos",
  "toppy",
  "toque",
  "torah",
  "toran",
  "toras",
  "torcs",
  "tores",
  "toric",
  "torii",
  "toros",
  "torot",
  "torrs",
  "torse",
  "torsi",
  "torsk",
  "torta",
  "torte",
  "torts",
  "tosas",
  "tosed",
  "toses",
  "toshy",
  "tossy",
  "toted",
  "toter",
  "totes",
  "totty",
  "touks",
  "touns",
  "tours",
  "touse",
  "tousy",
  "touts",
  "touze",
  "touzy",
  "towed",
  "towie",
  "towns",
  "towny",
  "towse",
  "towsy",
  "towts",
  "towze",
  "towzy",
  "toyed",
  "toyer",
  "toyon",
  "toyos",
  "tozed",
  "tozes",
  "tozie",
  "trabs",
  "trads",
  "tragi",
  "traik",
  "trams",
  "trank",
  "tranq",
  "trans",
  "trant",
  "trape",
  "traps",
  "trapt",
  "trass",
  "trats",
  "tratt",
  "trave",
  "trayf",
  "trays",
  "treck",
  "treed",
  "treen",
  "trees",
  "trefa",
  "treif",
  "treks",
  "trema",
  "trems",
  "tress",
  "trest",
  "trets",
  "trews",
  "treyf",
  "treys",
  "triac",
  "tride",
  "trier",
  "tries",
  "triff",
  "trigo",
  "trigs",
  "trike",
  "trild",
  "trill",
  "trims",
  "trine",
  "trins",
  "triol",
  "trior",
  "trios",
  "trips",
  "tripy",
  "trist",
  "troad",
  "troak",
  "troat",
  "trock",
  "trode",
  "trods",
  "trogs",
  "trois",
  "troke",
  "tromp",
  "trona",
  "tronc",
  "trone",
  "tronk",
  "trons",
  "trooz",
  "troth",
  "trots",
  "trows",
  "troys",
  "trued",
  "trues",
  "trugo",
  "trugs",
  "trull",
  "tryer",
  "tryke",
  "tryma",
  "tryps",
  "tsade",
  "tsadi",
  "tsars",
  "tsked",
  "tsuba",
  "tsubo",
  "tuans",
  "tuart",
  "tuath",
  "tubae",
  "tubar",
  "tubas",
  "tubby",
  "tubed",
  "tubes",
  "tucks",
  "tufas",
  "tuffe",
  "tuffs",
  "tufts",
  "tufty",
  "tugra",
  "tuile",
  "tuina",
  "tuism",
  "tuktu",
  "tules",
  "tulpa",
  "tulsi",
  "tumid",
  "tummy",
  "tumps",
  "tumpy",
  "tunas",
  "tunds",
  "tuned",
  "tuner",
  "tunes",
  "tungs",
  "tunny",
  "tupek",
  "tupik",
  "tuple",
  "tuque",
  "turds",
  "turfs",
  "turfy",
  "turks",
  "turme",
  "turms",
  "turns",
  "turnt",
  "turps",
  "turrs",
  "tushy",
  "tusks",
  "tusky",
  "tutee",
  "tutti",
  "tutty",
  "tutus",
  "tuxes",
  "tuyer",
  "twaes",
  "twain",
  "twals",
  "twank",
  "twats",
  "tways",
  "tweel",
  "tween",
  "tweep",
  "tweer",
  "twerk",
  "twerp",
  "twier",
  "twigs",
  "twill",
  "twilt",
  "twink",
  "twins",
  "twiny",
  "twire",
  "twirp",
  "twite",
  "twits",
  "twoer",
  "twyer",
  "tyees",
  "tyers",
  "tyiyn",
  "tykes",
  "tyler",
  "tymps",
  "tynde",
  "tyned",
  "tynes",
  "typal",
  "typed",
  "types",
  "typey",
  "typic",
  "typos",
  "typps",
  "typto",
  "tyran",
  "tyred",
  "tyres",
  "tyros",
  "tythe",
  "tzars",
  "udals",
  "udons",
  "ugali",
  "ugged",
  "uhlan",
  "uhuru",
  "ukase",
  "ulama",
  "ulans",
  "ulema",
  "ulmin",
  "ulnad",
  "ulnae",
  "ulnar",
  "ulnas",
  "ulpan",
  "ulvas",
  "ulyie",
  "ulzie",
  "umami",
  "umbel",
  "umber",
  "umble",
  "umbos",
  "umbre",
  "umiac",
  "umiak",
  "umiaq",
  "ummah",
  "ummas",
  "ummed",
  "umped",
  "umphs",
  "umpie",
  "umpty",
  "umrah",
  "umras",
  "unais",
  "unapt",
  "unarm",
  "unary",
  "unaus",
  "unbag",
  "unban",
  "unbar",
  "unbed",
  "unbid",
  "unbox",
  "uncap",
  "unces",
  "uncia",
  "uncos",
  "uncoy",
  "uncus",
  "undam",
  "undee",
  "undos",
  "undug",
  "uneth",
  "unfix",
  "ungag",
  "unget",
  "ungod",
  "ungot",
  "ungum",
  "unhat",
  "unhip",
  "unica",
  "units",
  "unjam",
  "unked",
  "unket",
  "unkid",
  "unlaw",
  "unlay",
  "unled",
  "unlet",
  "unlid",
  "unman",
  "unmew",
  "unmix",
  "unpay",
  "unpeg",
  "unpen",
  "unpin",
  "unred",
  "unrid",
  "unrig",
  "unrip",
  "unsaw",
  "unsay",
  "unsee",
  "unsew",
  "unsex",
  "unsod",
  "untax",
  "untin",
  "unwet",
  "unwit",
  "unwon",
  "upbow",
  "upbye",
  "updos",
  "updry",
  "upend",
  "upjet",
  "uplay",
  "upled",
  "uplit",
  "upped",
  "upran",
  "uprun",
  "upsee",
  "upsey",
  "uptak",
  "upter",
  "uptie",
  "uraei",
  "urali",
  "uraos",
  "urare",
  "urari",
  "urase",
  "urate",
  "urbex",
  "urbia",
  "urdee",
  "ureal",
  "ureas",
  "uredo",
  "ureic",
  "urena",
  "urent",
  "urged",
  "urger",
  "urges",
  "urial",
  "urite",
  "urman",
  "urnal",
  "urned",
  "urped",
  "ursae",
  "ursid",
  "urson",
  "urubu",
  "urvas",
  "users",
  "usnea",
  "usque",
  "usure",
  "usury",
  "uteri",
  "uveal",
  "uveas",
  "uvula",
  "vacua",
  "vaded",
  "vades",
  "vagal",
  "vagus",
  "vails",
  "vaire",
  "vairs",
  "vairy",
  "vakas",
  "vakil",
  "vales",
  "valis",
  "valse",
  "vamps",
  "vampy",
  "vanda",
  "vaned",
  "vanes",
  "vangs",
  "vants",
  "vaped",
  "vaper",
  "vapes",
  "varan",
  "varas",
  "vardy",
  "varec",
  "vares",
  "varia",
  "varix",
  "varna",
  "varus",
  "varve",
  "vasal",
  "vases",
  "vasts",
  "vasty",
  "vatic",
  "vatus",
  "vauch",
  "vaute",
  "vauts",
  "vawte",
  "vaxes",
  "veale",
  "veals",
  "vealy",
  "veena",
  "veeps",
  "veers",
  "veery",
  "vegas",
  "veges",
  "vegie",
  "vegos",
  "vehme",
  "veils",
  "veily",
  "veins",
  "veiny",
  "velar",
  "velds",
  "veldt",
  "veles",
  "vells",
  "velum",
  "venae",
  "venal",
  "vends",
  "vendu",
  "veney",
  "venge",
  "venin",
  "vents",
  "venus",
  "verbs",
  "verra",
  "verry",
  "verst",
  "verts",
  "vertu",
  "vespa",
  "vesta",
  "vests",
  "vetch",
  "vexed",
  "vexer",
  "vexes",
  "vexil",
  "vezir",
  "vials",
  "viand",
  "vibes",
  "vibex",
  "vibey",
  "viced",
  "vices",
  "vichy",
  "viers",
  "views",
  "viewy",
  "vifda",
  "viffs",
  "vigas",
  "vigia",
  "vilde",
  "viler",
  "villi",
  "vills",
  "vimen",
  "vinal",
  "vinas",
  "vinca",
  "vined",
  "viner",
  "vines",
  "vinew",
  "vinic",
  "vinos",
  "vints",
  "viold",
  "viols",
  "vired",
  "vireo",
  "vires",
  "virga",
  "virge",
  "virid",
  "virls",
  "virtu",
  "visas",
  "vised",
  "vises",
  "visie",
  "visne",
  "vison",
  "visto",
  "vitae",
  "vitas",
  "vitex",
  "vitro",
  "vitta",
  "vivas",
  "vivat",
  "vivda",
  "viver",
  "vives",
  "vizir",
  "vizor",
  "vleis",
  "vlies",
  "vlogs",
  "voars",
  "vocab",
  "voces",
  "voddy",
  "vodou",
  "vodun",
  "voema",
  "vogie",
  "voids",
  "voile",
  "voips",
  "volae",
  "volar",
  "voled",
  "voles",
  "volet",
  "volks",
  "volta",
  "volte",
  "volti",
  "volts",
  "volva",
  "volve",
  "vomer",
  "voted",
  "votes",
  "vouge",
  "voulu",
  "vowed",
  "vower",
  "voxel",
  "vozhd",
  "vraic",
  "vrils",
  "vroom",
  "vrous",
  "vrouw",
  "vrows",
  "vuggs",
  "vuggy",
  "vughs",
  "vughy",
  "vulgo",
  "vulns",
  "vulva",
  "vutty",
  "waacs",
  "wacke",
  "wacko",
  "wacks",
  "wadds",
  "waddy",
  "waded",
  "wader",
  "wades",
  "wadge",
  "wadis",
  "wadts",
  "waffs",
  "wafts",
  "waged",
  "wages",
  "wagga",
  "wagyu",
  "wahoo",
  "waide",
  "waifs",
  "waift",
  "wails",
  "wains",
  "wairs",
  "waite",
  "waits",
  "wakas",
  "waked",
  "waken",
  "waker",
  "wakes",
  "wakfs",
  "waldo",
  "walds",
  "waled",
  "waler",
  "wales",
  "walie",
  "walis",
  "walks",
  "walla",
  "walls",
  "wally",
  "walty",
  "wamed",
  "wames",
  "wamus",
  "wands",
  "waned",
  "wanes",
  "waney",
  "wangs",
  "wanks",
  "wanky",
  "wanle",
  "wanly",
  "wanna",
  "wants",
  "wanty",
  "wanze",
  "waqfs",
  "warbs",
  "warby",
  "wards",
  "wared",
  "wares",
  "warez",
  "warks",
  "warms",
  "warns",
  "warps",
  "warre",
  "warst",
  "warts",
  "wases",
  "washy",
  "wasms",
  "wasps",
  "waspy",
  "wasts",
  "watap",
  "watts",
  "wauff",
  "waugh",
  "wauks",
  "waulk",
  "wauls",
  "waurs",
  "waved",
  "waves",
  "wavey",
  "wawas",
  "wawes",
  "wawls",
  "waxed",
  "waxer",
  "waxes",
  "wayed",
  "wazir",
  "wazoo",
  "weald",
  "weals",
  "weamb",
  "weans",
  "wears",
  "webby",
  "weber",
  "wecht",
  "wedel",
  "wedgy",
  "weeds",
  "weeke",
  "weeks",
  "weels",
  "weems",
  "weens",
  "weeny",
  "weeps",
  "weepy",
  "weest",
  "weete",
  "weets",
  "wefte",
  "wefts",
  "weids",
  "weils",
  "weirs",
  "weise",
  "weize",
  "wekas",
  "welds",
  "welke",
  "welks",
  "welkt",
  "wells",
  "welly",
  "welts",
  "wembs",
  "wends",
  "wenge",
  "wenny",
  "wents",
  "weros",
  "wersh",
  "wests",
  "wetas",
  "wetly",
  "wexed",
  "wexes",
  "whamo",
  "whams",
  "whang",
  "whaps",
  "whare",
  "whata",
  "whats",
  "whaup",
  "whaur",
  "wheal",
  "whear",
  "wheen",
  "wheep",
  "wheft",
  "whelk",
  "whelm",
  "whens",
  "whets",
  "whews",
  "wheys",
  "whids",
  "whift",
  "whigs",
  "whilk",
  "whims",
  "whins",
  "whios",
  "whips",
  "whipt",
  "whirr",
  "whirs",
  "whish",
  "whiss",
  "whist",
  "whits",
  "whity",
  "whizz",
  "whomp",
  "whoof",
  "whoot",
  "whops",
  "whore",
  "whorl",
  "whort",
  "whoso",
  "whows",
  "whump",
  "whups",
  "whyda",
  "wicca",
  "wicks",
  "wicky",
  "widdy",
  "wides",
  "wiels",
  "wifed",
  "wifes",
  "wifey",
  "wifie",
  "wifty",
  "wigan",
  "wigga",
  "wiggy",
  "wikis",
  "wilco",
  "wilds",
  "wiled",
  "wiles",
  "wilga",
  "wilis",
  "wilja",
  "wills",
  "wilts",
  "wimps",
  "winds",
  "wined",
  "wines",
  "winey",
  "winge",
  "wings",
  "wingy",
  "winks",
  "winna",
  "winns",
  "winos",
  "winze",
  "wiped",
  "wiper",
  "wipes",
  "wired",
  "wirer",
  "wires",
  "wirra",
  "wised",
  "wises",
  "wisha",
  "wisht",
  "wisps",
  "wists",
  "witan",
  "wited",
  "wites",
  "withe",
  "withs",
  "withy",
  "wived",
  "wiver",
  "wives",
  "wizen",
  "wizes",
  "woads",
  "woald",
  "wocks",
  "wodge",
  "woful",
  "wojus",
  "woker",
  "wokka",
  "wolds",
  "wolfs",
  "wolly",
  "wolve",
  "wombs",
  "womby",
  "womyn",
  "wonga",
  "wongi",
  "wonks",
  "wonky",
  "wonts",
  "woods",
  "wooed",
  "woofs",
  "woofy",
  "woold",
  "wools",
  "woons",
  "woops",
  "woopy",
  "woose",
  "woosh",
  "wootz",
  "words",
  "works",
  "worms",
  "wormy",
  "worts",
  "wowed",
  "wowee",
  "woxen",
  "wrang",
  "wraps",
  "wrapt",
  "wrast",
  "wrate",
  "wrawl",
  "wrens",
  "wrick",
  "wried",
  "wrier",
  "wries",
  "writs",
  "wroke",
  "wroot",
  "wroth",
  "wryer",
  "wuddy",
  "wudus",
  "wulls",
  "wurst",
  "wuses",
  "wushu",
  "wussy",
  "wuxia",
  "wyled",
  "wyles",
  "wynds",
  "wynns",
  "wyted",
  "wytes",
  "xebec",
  "xenia",
  "xenic",
  "xenon",
  "xeric",
  "xerox",
  "xerus",
  "xoana",
  "xrays",
  "xylan",
  "xylem",
  "xylic",
  "xylol",
  "xylyl",
  "xysti",
  "xysts",
  "yaars",
  "yabas",
  "yabba",
  "yabby",
  "yacca",
  "yacka",
  "yacks",
  "yaffs",
  "yager",
  "yages",
  "yagis",
  "yahoo",
  "yaird",
  "yakka",
  "yakow",
  "yales",
  "yamen",
  "yampy",
  "yamun",
  "yangs",
  "yanks",
  "yapok",
  "yapon",
  "yapps",
  "yappy",
  "yarak",
  "yarco",
  "yards",
  "yarer",
  "yarfa",
  "yarks",
  "yarns",
  "yarrs",
  "yarta",
  "yarto",
  "yates",
  "yauds",
  "yauld",
  "yaups",
  "yawed",
  "yawey",
  "yawls",
  "yawns",
  "yawny",
  "yawps",
  "ybore",
  "yclad",
  "ycled",
  "ycond",
  "ydrad",
  "ydred",
  "yeads",
  "yeahs",
  "yealm",
  "yeans",
  "yeard",
  "years",
  "yecch",
  "yechs",
  "yechy",
  "yedes",
  "yeeds",
  "yeesh",
  "yeggs",
  "yelks",
  "yells",
  "yelms",
  "yelps",
  "yelts",
  "yenta",
  "yente",
  "yerba",
  "yerds",
  "yerks",
  "yeses",
  "yesks",
  "yests",
  "yesty",
  "yetis",
  "yetts",
  "yeuks",
  "yeuky",
  "yeven",
  "yeves",
  "yewen",
  "yexed",
  "yexes",
  "yfere",
  "yiked",
  "yikes",
  "yills",
  "yince",
  "yipes",
  "yippy",
  "yirds",
  "yirks",
  "yirrs",
  "yirth",
  "yites",
  "yitie",
  "ylems",
  "ylike",
  "ylkes",
  "ymolt",
  "ympes",
  "yobbo",
  "yobby",
  "yocks",
  "yodel",
  "yodhs",
  "yodle",
  "yogas",
  "yogee",
  "yoghs",
  "yogic",
  "yogin",
  "yogis",
  "yoick",
  "yojan",
  "yoked",
  "yokel",
  "yoker",
  "yokes",
  "yokul",
  "yolks",
  "yolky",
  "yomim",
  "yomps",
  "yonic",
  "yonis",
  "yonks",
  "yoofs",
  "yoops",
  "yores",
  "yorks",
  "yorps",
  "youks",
  "yourn",
  "yours",
  "yourt",
  "youse",
  "yowed",
  "yowes",
  "yowie",
  "yowls",
  "yowza",
  "yrapt",
  "yrent",
  "yrivd",
  "yrneh",
  "ysame",
  "ytost",
  "yuans",
  "yucas",
  "yucca",
  "yucch",
  "yucko",
  "yucks",
  "yucky",
  "yufts",
  "yugas",
  "yuked",
  "yukes",
  "yukky",
  "yukos",
  "yulan",
  "yules",
  "yummo",
  "yummy",
  "yumps",
  "yupon",
  "yuppy",
  "yurta",
  "yurts",
  "yuzus",
  "zabra",
  "zacks",
  "zaida",
  "zaidy",
  "zaire",
  "zakat",
  "zaman",
  "zambo",
  "zamia",
  "zanja",
  "zante",
  "zanza",
  "zanze",
  "zappy",
  "zarfs",
  "zaris",
  "zatis",
  "zaxes",
  "zayin",
  "zazen",
  "zeals",
  "zebec",
  "zebub",
  "zebus",
  "zedas",
  "zeins",
  "zendo",
  "zerda",
  "zerks",
  "zeros",
  "zests",
  "zetas",
  "zexes",
  "zezes",
  "zhomo",
  "zibet",
  "ziffs",
  "zigan",
  "zilas",
  "zilch",
  "zilla",
  "zills",
  "zimbi",
  "zimbs",
  "zinco",
  "zincs",
  "zincy",
  "zineb",
  "zines",
  "zings",
  "zingy",
  "zinke",
  "zinky",
  "zippo",
  "zippy",
  "ziram",
  "zitis",
  "zizel",
  "zizit",
  "zlote",
  "zloty",
  "zoaea",
  "zobos",
  "zobus",
  "zocco",
  "zoeae",
  "zoeal",
  "zoeas",
  "zoism",
  "zoist",
  "zombi",
  "zonae",
  "zonda",
  "zoned",
  "zoner",
  "zones",
  "zonks",
  "zooea",
  "zooey",
  "zooid",
  "zooks",
  "zooms",
  "zoons",
  "zooty",
  "zoppa",
  "zoppo",
  "zoril",
  "zoris",
  "zorro",
  "zouks",
  "zowee",
  "zowie",
  "zulus",
  "zupan",
  "zupas",
  "zuppa",
  "zurfs",
  "zuzim",
  "zygal",
  "zygon",
  "zymes",
  "zymic",
  "cigar",
  "rebut",
  "sissy",
  "humph",
  "awake",
  "blush",
  "focal",
  "evade",
  "naval",
  "serve",
  "heath",
  "dwarf",
  "model",
  "karma",
  "stink",
  "grade",
  "quiet",
  "bench",
  "abate",
  "feign",
  "major",
  "death",
  "fresh",
  "crust",
  "stool",
  "colon",
  "abase",
  "marry",
  "react",
  "batty",
  "pride",
  "floss",
  "helix",
  "croak",
  "staff",
  "paper",
  "unfed",
  "whelp",
  "trawl",
  "outdo",
  "adobe",
  "crazy",
  "sower",
  "repay",
  "digit",
  "crate",
  "cluck",
  "spike",
  "mimic",
  "pound",
  "maxim",
  "linen",
  "unmet",
  "flesh",
  "booby",
  "forth",
  "first",
  "stand",
  "belly",
  "ivory",
  "seedy",
  "print",
  "yearn",
  "drain",
  "bribe",
  "stout",
  "panel",
  "crass",
  "flume",
  "offal",
  "agree",
  "error",
  "swirl",
  "argue",
  "bleed",
  "delta",
  "flick",
  "totem",
  "wooer",
  "front",
  "shrub",
  "parry",
  "biome",
  "lapel",
  "start",
  "greet",
  "goner",
  "golem",
  "lusty",
  "loopy",
  "round",
  "audit",
  "lying",
  "gamma",
  "labor",
  "islet",
  "civic",
  "forge",
  "corny",
  "moult",
  "basic",
  "salad",
  "agate",
  "spicy",
  "spray",
  "essay",
  "fjord",
  "spend",
  "kebab",
  "guild",
  "aback",
  "motor",
  "alone",
  "hatch",
  "hyper",
  "thumb",
  "dowry",
  "ought",
  "belch",
  "dutch",
  "pilot",
  "tweed",
  "comet",
  "jaunt",
  "enema",
  "steed",
  "abyss",
  "growl",
  "fling",
  "dozen",
  "boozy",
  "erode",
  "world",
  "gouge",
  "click",
  "briar",
  "great",
  "altar",
  "pulpy",
  "blurt",
  "coast",
  "duchy",
  "groin",
  "fixer",
  "group",
  "rogue",
  "badly",
  "smart",
  "pithy",
  "gaudy",
  "chill",
  "heron",
  "vodka",
  "finer",
  "surer",
  "radio",
  "rouge",
  "perch",
  "retch",
  "wrote",
  "clock",
  "tilde",
  "store",
  "prove",
  "bring",
  "solve",
  "cheat",
  "grime",
  "exult",
  "usher",
  "epoch",
  "triad",
  "break",
  "rhino",
  "viral",
  "conic",
  "masse",
  "sonic",
  "vital",
  "trace",
  "using",
  "peach",
  "champ",
  "baton",
  "brake",
  "pluck",
  "craze",
  "gripe",
  "weary",
  "picky",
  "acute",
  "ferry",
  "aside",
  "tapir",
  "troll",
  "unify",
  "rebus",
  "boost",
  "truss",
  "siege",
  "tiger",
  "banal",
  "slump",
  "crank",
  "gorge",
  "query",
  "drink",
  "favor",
  "abbey",
  "tangy",
  "panic",
  "solar",
  "shire",
  "proxy",
  "point",
  "robot",
  "prick",
  "wince",
  "crimp",
  "knoll",
  "sugar",
  "whack",
  "mount",
  "perky",
  "could",
  "wrung",
  "light",
  "those",
  "moist",
  "shard",
  "pleat",
  "aloft",
  "skill",
  "elder",
  "frame",
  "humor",
  "pause",
  "ulcer",
  "ultra",
  "robin",
  "cynic",
  "agora",
  "aroma",
  "caulk",
  "shake",
  "pupal",
  "dodge",
  "swill",
  "tacit",
  "other",
  "thorn",
  "trove",
  "bloke",
  "vivid",
  "spill",
  "chant",
  "choke",
  "rupee",
  "nasty",
  "mourn",
  "ahead",
  "brine",
  "cloth",
  "hoard",
  "sweet",
  "month",
  "lapse",
  "watch",
  "today",
  "focus",
  "smelt",
  "tease",
  "cater",
  "movie",
  "lynch",
  "saute",
  "allow",
  "renew",
  "their",
  "slosh",
  "purge",
  "chest",
  "depot",
  "epoxy",
  "nymph",
  "found",
  "shall",
  "harry",
  "stove",
  "lowly",
  "snout",
  "trope",
  "fewer",
  "shawl",
  "natal",
  "fibre",
  "comma",
  "foray",
  "scare",
  "stair",
  "black",
  "squad",
  "royal",
  "chunk",
  "mince",
  "slave",
  "shame",
  "cheek",
  "ample",
  "flair",
  "foyer",
  "cargo",
  "oxide",
  "plant",
  "olive",
  "inert",
  "askew",
  "heist",
  "shown",
  "zesty",
  "hasty",
  "trash",
  "fella",
  "larva",
  "forgo",
  "story",
  "hairy",
  "train",
  "homer",
  "badge",
  "midst",
  "canny",
  "fetus",
  "butch",
  "farce",
  "slung",
  "tipsy",
  "metal",
  "yield",
  "delve",
  "being",
  "scour",
  "glass",
  "gamer",
  "scrap",
  "money",
  "hinge",
  "album",
  "vouch",
  "asset",
  "tiara",
  "crept",
  "bayou",
  "atoll",
  "manor",
  "creak",
  "showy",
  "phase",
  "froth",
  "depth",
  "gloom",
  "flood",
  "trait",
  "girth",
  "piety",
  "payer",
  "goose",
  "float",
  "donor",
  "atone",
  "primo",
  "apron",
  "blown",
  "cacao",
  "loser",
  "input",
  "gloat",
  "awful",
  "brink",
  "smite",
  "beady",
  "rusty",
  "retro",
  "droll",
  "gawky",
  "hutch",
  "pinto",
  "gaily",
  "egret",
  "lilac",
  "sever",
  "field",
  "fluff",
  "hydro",
  "flack",
  "agape",
  "wench",
  "voice",
  "stead",
  "stalk",
  "berth",
  "madam",
  "night",
  "bland",
  "liver",
  "wedge",
  "augur",
  "roomy",
  "wacky",
  "flock",
  "angry",
  "bobby",
  "trite",
  "aphid",
  "tryst",
  "midge",
  "power",
  "elope",
  "cinch",
  "motto",
  "stomp",
  "upset",
  "bluff",
  "cramp",
  "quart",
  "coyly",
  "youth",
  "rhyme",
  "buggy",
  "alien",
  "smear",
  "unfit",
  "patty",
  "cling",
  "glean",
  "label",
  "hunky",
  "khaki",
  "poker",
  "gruel",
  "twice",
  "twang",
  "shrug",
  "treat",
  "unlit",
  "waste",
  "merit",
  "woven",
  "octal",
  "needy",
  "clown",
  "widow",
  "irony",
  "ruder",
  "gauze",
  "chief",
  "onset",
  "prize",
  "fungi",
  "charm",
  "gully",
  "inter",
  "whoop",
  "taunt",
  "leery",
  "class",
  "theme",
  "lofty",
  "tibia",
  "booze",
  "alpha",
  "thyme",
  "eclat",
  "doubt",
  "parer",
  "chute",
  "stick",
  "trice",
  "alike",
  "sooth",
  "recap",
  "saint",
  "liege",
  "glory",
  "grate",
  "admit",
  "brisk",
  "soggy",
  "usurp",
  "scald",
  "scorn",
  "leave",
  "twine",
  "sting",
  "bough",
  "marsh",
  "sloth",
  "dandy",
  "vigor",
  "howdy",
  "enjoy",
  "valid",
  "ionic",
  "equal",
  "unset",
  "floor",
  "catch",
  "spade",
  "stein",
  "exist",
  "quirk",
  "denim",
  "grove",
  "spiel",
  "mummy",
  "fault",
  "foggy",
  "flout",
  "carry",
  "sneak",
  "libel",
  "waltz",
  "aptly",
  "piney",
  "inept",
  "aloud",
  "photo",
  "dream",
  "stale",
  "vomit",
  "ombre",
  "fanny",
  "unite",
  "snarl",
  "baker",
  "there",
  "glyph",
  "pooch",
  "hippy",
  "spell",
  "folly",
  "louse",
  "gulch",
  "vault",
  "godly",
  "threw",
  "fleet",
  "grave",
  "inane",
  "shock",
  "crave",
  "spite",
  "valve",
  "skimp",
  "claim",
  "rainy",
  "musty",
  "pique",
  "daddy",
  "quasi",
  "arise",
  "aging",
  "valet",
  "opium",
  "avert",
  "stuck",
  "recut",
  "mulch",
  "genre",
  "plume",
  "rifle",
  "count",
  "incur",
  "total",
  "wrest",
  "mocha",
  "deter",
  "study",
  "lover",
  "safer",
  "rivet",
  "funny",
  "smoke",
  "mound",
  "undue",
  "sedan",
  "pagan",
  "swine",
  "guile",
  "gusty",
  "equip",
  "tough",
  "canoe",
  "chaos",
  "covet",
  "human",
  "udder",
  "lunch",
  "blast",
  "stray",
  "manga",
  "melee",
  "lefty",
  "quick",
  "paste",
  "given",
  "octet",
  "risen",
  "groan",
  "leaky",
  "grind",
  "carve",
  "loose",
  "sadly",
  "spilt",
  "apple",
  "slack",
  "honey",
  "final",
  "sheen",
  "eerie",
  "minty",
  "slick",
  "derby",
  "wharf",
  "spelt",
  "coach",
  "erupt",
  "singe",
  "price",
  "spawn",
  "fairy",
  "jiffy",
  "filmy",
  "stack",
  "chose",
  "sleep",
  "ardor",
  "nanny",
  "niece",
  "woozy",
  "handy",
  "grace",
  "ditto",
  "stank",
  "cream",
  "usual",
  "diode",
  "valor",
  "angle",
  "ninja",
  "muddy",
  "chase",
  "reply",
  "prone",
  "spoil",
  "heart",
  "shade",
  "diner",
  "arson",
  "onion",
  "sleet",
  "dowel",
  "couch",
  "palsy",
  "bowel",
  "smile",
  "evoke",
  "creek",
  "lance",
  "eagle",
  "idiot",
  "siren",
  "built",
  "embed",
  "award",
  "dross",
  "annul",
  "goody",
  "frown",
  "patio",
  "laden",
  "humid",
  "elite",
  "lymph",
  "edify",
  "might",
  "reset",
  "visit",
  "gusto",
  "purse",
  "vapor",
  "crock",
  "write",
  "sunny",
  "loath",
  "chaff",
  "slide",
  "queer",
  "venom",
  "stamp",
  "sorry",
  "still",
  "acorn",
  "aping",
  "pushy",
  "tamer",
  "hater",
  "mania",
  "awoke",
  "brawn",
  "swift",
  "exile",
  "birch",
  "lucky",
  "freer",
  "risky",
  "ghost",
  "plier",
  "lunar",
  "winch",
  "snare",
  "nurse",
  "house",
  "borax",
  "nicer",
  "lurch",
  "exalt",
  "about",
  "savvy",
  "toxin",
  "tunic",
  "pried",
  "inlay",
  "chump",
  "lanky",
  "cress",
  "eater",
  "elude",
  "cycle",
  "kitty",
  "boule",
  "moron",
  "tenet",
  "place",
  "lobby",
  "plush",
  "vigil",
  "index",
  "blink",
  "clung",
  "qualm",
  "croup",
  "clink",
  "juicy",
  "stage",
  "decay",
  "nerve",
  "flier",
  "shaft",
  "crook",
  "clean",
  "china",
  "ridge",
  "vowel",
  "gnome",
  "snuck",
  "icing",
  "spiny",
  "rigor",
  "snail",
  "flown",
  "rabid",
  "prose",
  "thank",
  "poppy",
  "budge",
  "fiber",
  "moldy",
  "dowdy",
  "kneel",
  "track",
  "caddy",
  "quell",
  "dumpy",
  "paler",
  "swore",
  "rebar",
  "scuba",
  "splat",
  "flyer",
  "horny",
  "mason",
  "doing",
  "ozone",
  "amply",
  "molar",
  "ovary",
  "beset",
  "queue",
  "cliff",
  "magic",
  "truce",
  "sport",
  "fritz",
  "edict",
  "twirl",
  "verse",
  "llama",
  "eaten",
  "range",
  "whisk",
  "hovel",
  "rehab",
  "macaw",
  "sigma",
  "spout",
  "verve",
  "sushi",
  "dying",
  "fetid",
  "brain",
  "buddy",
  "thump",
  "scion",
  "candy",
  "chord",
  "basin",
  "march",
  "crowd",
  "arbor",
  "gayly",
  "musky",
  "stain",
  "dally",
  "bless",
  "bravo",
  "stung",
  "title",
  "ruler",
  "kiosk",
  "blond",
  "ennui",
  "layer",
  "fluid",
  "tatty",
  "score",
  "cutie",
  "zebra",
  "barge",
  "matey",
  "bluer",
  "aider",
  "shook",
  "river",
  "privy",
  "betel",
  "frisk",
  "bongo",
  "begun",
  "azure",
  "weave",
  "genie",
  "sound",
  "glove",
  "braid",
  "scope",
  "wryly",
  "rover",
  "assay",
  "ocean",
  "bloom",
  "irate",
  "later",
  "woken",
  "silky",
  "wreck",
  "dwelt",
  "slate",
  "smack",
  "solid",
  "amaze",
  "hazel",
  "wrist",
  "jolly",
  "globe",
  "flint",
  "rouse",
  "civil",
  "vista",
  "relax",
  "cover",
  "alive",
  "beech",
  "jetty",
  "bliss",
  "vocal",
  "often",
  "dolly",
  "eight",
  "joker",
  "since",
  "event",
  "ensue",
  "shunt",
  "diver",
  "poser",
  "worst",
  "sweep",
  "alley",
  "creed",
  "anime",
  "leafy",
  "bosom",
  "dunce",
  "stare",
  "pudgy",
  "waive",
  "choir",
  "stood",
  "spoke",
  "outgo",
  "delay",
  "bilge",
  "ideal",
  "clasp",
  "seize",
  "hotly",
  "laugh",
  "sieve",
  "block",
  "meant",
  "grape",
  "noose",
  "hardy",
  "shied",
  "drawl",
  "daisy",
  "putty",
  "strut",
  "burnt",
  "tulip",
  "crick",
  "idyll",
  "vixen",
  "furor",
  "geeky",
  "cough",
  "naive",
  "shoal",
  "stork",
  "bathe",
  "aunty",
  "check",
  "prime",
  "brass",
  "outer",
  "furry",
  "razor",
  "elect",
  "evict",
  "imply",
  "demur",
  "quota",
  "haven",
  "cavil",
  "swear",
  "crump",
  "dough",
  "gavel",
  "wagon",
  "salon",
  "nudge",
  "harem",
  "pitch",
  "sworn",
  "pupil",
  "excel",
  "stony",
  "cabin",
  "unzip",
  "queen",
  "trout",
  "polyp",
  "earth",
  "storm",
  "until",
  "taper",
  "enter",
  "child",
  "adopt",
  "minor",
  "fatty",
  "husky",
  "brave",
  "filet",
  "slime",
  "glint",
  "tread",
  "steal",
  "regal",
  "guest",
  "every",
  "murky",
  "share",
  "spore",
  "hoist",
  "buxom",
  "inner",
  "otter",
  "dimly",
  "level",
  "sumac",
  "donut",
  "stilt",
  "arena",
  "sheet",
  "scrub",
  "fancy",
  "slimy",
  "pearl",
  "silly",
  "porch",
  "dingo",
  "sepia",
  "amble",
  "shady",
  "bread",
  "friar",
  "reign",
  "dairy",
  "quill",
  "cross",
  "brood",
  "tuber",
  "shear",
  "posit",
  "blank",
  "villa",
  "shank",
  "piggy",
  "freak",
  "which",
  "among",
  "fecal",
  "shell",
  "would",
  "algae",
  "large",
  "rabbi",
  "agony",
  "amuse",
  "bushy",
  "copse",
  "swoon",
  "knife",
  "pouch",
  "ascot",
  "plane",
  "crown",
  "urban",
  "snide",
  "relay",
  "abide",
  "viola",
  "rajah",
  "straw",
  "dilly",
  "crash",
  "amass",
  "third",
  "trick",
  "tutor",
  "woody",
  "blurb",
  "grief",
  "disco",
  "where",
  "sassy",
  "beach",
  "sauna",
  "comic",
  "clued",
  "creep",
  "caste",
  "graze",
  "snuff",
  "frock",
  "gonad",
  "drunk",
  "prong",
  "lurid",
  "steel",
  "halve",
  "buyer",
  "vinyl",
  "utile",
  "smell",
  "adage",
  "worry",
  "tasty",
  "local",
  "trade",
  "finch",
  "ashen",
  "modal",
  "gaunt",
  "clove",
  "enact",
  "adorn",
  "roast",
  "speck",
  "sheik",
  "missy",
  "grunt",
  "snoop",
  "party",
  "touch",
  "mafia",
  "emcee",
  "array",
  "south",
  "vapid",
  "jelly",
  "skulk",
  "angst",
  "tubal",
  "lower",
  "crest",
  "sweat",
  "cyber",
  "adore",
  "tardy",
  "swami",
  "notch",
  "groom",
  "roach",
  "hitch",
  "young",
  "align",
  "ready",
  "frond",
  "strap",
  "puree",
  "realm",
  "venue",
  "swarm",
  "offer",
  "seven",
  "dryer",
  "diary",
  "dryly",
  "drank",
  "acrid",
  "heady",
  "theta",
  "junto",
  "pixie",
  "quoth",
  "bonus",
  "shalt",
  "penne",
  "amend",
  "datum",
  "build",
  "piano",
  "shelf",
  "lodge",
  "suing",
  "rearm",
  "coral",
  "ramen",
  "worth",
  "psalm",
  "infer",
  "overt",
  "mayor",
  "ovoid",
  "glide",
  "usage",
  "poise",
  "randy",
  "chuck",
  "prank",
  "fishy",
  "tooth",
  "ether",
  "drove",
  "idler",
  "swath",
  "stint",
  "while",
  "begat",
  "apply",
  "slang",
  "tarot",
  "radar",
  "credo",
  "aware",
  "canon",
  "shift",
  "timer",
  "bylaw",
  "serum",
  "three",
  "steak",
  "iliac",
  "shirk",
  "blunt",
  "puppy",
  "penal",
  "joist",
  "bunny",
  "shape",
  "beget",
  "wheel",
  "adept",
  "stunt",
  "stole",
  "topaz",
  "chore",
  "fluke",
  "afoot",
  "bloat",
  "bully",
  "dense",
  "caper",
  "sneer",
  "boxer",
  "jumbo",
  "lunge",
  "space",
  "avail",
  "short",
  "slurp",
  "loyal",
  "flirt",
  "pizza",
  "conch",
  "tempo",
  "droop",
  "plate",
  "bible",
  "plunk",
  "afoul",
  "savoy",
  "steep",
  "agile",
  "stake",
  "dwell",
  "knave",
  "beard",
  "arose",
  "motif",
  "smash",
  "broil",
  "glare",
  "shove",
  "baggy",
  "mammy",
  "swamp",
  "along",
  "rugby",
  "wager",
  "quack",
  "squat",
  "snaky",
  "debit",
  "mange",
  "skate",
  "ninth",
  "joust",
  "tramp",
  "spurn",
  "medal",
  "micro",
  "rebel",
  "flank",
  "learn",
  "nadir",
  "maple",
  "comfy",
  "remit",
  "gruff",
  "ester",
  "least",
  "mogul",
  "fetch",
  "cause",
  "oaken",
  "aglow",
  "meaty",
  "gaffe",
  "shyly",
  "racer",
  "prowl",
  "thief",
  "stern",
  "poesy",
  "rocky",
  "tweet",
  "waist",
  "spire",
  "grope",
  "havoc",
  "patsy",
  "truly",
  "forty",
  "deity",
  "uncle",
  "swish",
  "giver",
  "preen",
  "bevel",
  "lemur",
  "draft",
  "slope",
  "annoy",
  "lingo",
  "bleak",
  "ditty",
  "curly",
  "cedar",
  "dirge",
  "grown",
  "horde",
  "drool",
  "shuck",
  "crypt",
  "cumin",
  "stock",
  "gravy",
  "locus",
  "wider",
  "breed",
  "quite",
  "chafe",
  "cache",
  "blimp",
  "deign",
  "fiend",
  "logic",
  "cheap",
  "elide",
  "rigid",
  "false",
  "renal",
  "pence",
  "rowdy",
  "shoot",
  "blaze",
  "envoy",
  "posse",
  "brief",
  "never",
  "abort",
  "mouse",
  "mucky",
  "sulky",
  "fiery",
  "media",
  "trunk",
  "yeast",
  "clear",
  "skunk",
  "scalp",
  "bitty",
  "cider",
  "koala",
  "duvet",
  "segue",
  "creme",
  "super",
  "grill",
  "after",
  "owner",
  "ember",
  "reach",
  "nobly",
  "empty",
  "speed",
  "gipsy",
  "recur",
  "smock",
  "dread",
  "merge",
  "burst",
  "kappa",
  "amity",
  "shaky",
  "hover",
  "carol",
  "snort",
  "synod",
  "faint",
  "haunt",
  "flour",
  "chair",
  "detox",
  "shrew",
  "tense",
  "plied",
  "quark",
  "burly",
  "novel",
  "waxen",
  "stoic",
  "jerky",
  "blitz",
  "beefy",
  "lyric",
  "hussy",
  "towel",
  "quilt",
  "below",
  "bingo",
  "wispy",
  "brash",
  "scone",
  "toast",
  "easel",
  "saucy",
  "value",
  "spice",
  "honor",
  "route",
  "sharp",
  "bawdy",
  "radii",
  "skull",
  "phony",
  "issue",
  "lager",
  "swell",
  "urine",
  "gassy",
  "trial",
  "flora",
  "upper",
  "latch",
  "wight",
  "brick",
  "retry",
  "holly",
  "decal",
  "grass",
  "shack",
  "dogma",
  "mover",
  "defer",
  "sober",
  "optic",
  "crier",
  "vying",
  "nomad",
  "flute",
  "hippo",
  "shark",
  "drier",
  "obese",
  "bugle",
  "tawny",
  "chalk",
  "feast",
  "ruddy",
  "pedal",
  "scarf",
  "cruel",
  "bleat",
  "tidal",
  "slush",
  "semen",
  "windy",
  "dusty",
  "sally",
  "igloo",
  "nerdy",
  "jewel",
  "shone",
  "whale",
  "hymen",
  "abuse",
  "fugue",
  "elbow",
  "crumb",
  "pansy",
  "welsh",
  "syrup",
  "terse",
  "suave",
  "gamut",
  "swung",
  "drake",
  "freed",
  "afire",
  "shirt",
  "grout",
  "oddly",
  "tithe",
  "plaid",
  "dummy",
  "broom",
  "blind",
  "torch",
  "enemy",
  "again",
  "tying",
  "pesky",
  "alter",
  "gazer",
  "noble",
  "ethos",
  "bride",
  "extol",
  "decor",
  "hobby",
  "beast",
  "idiom",
  "utter",
  "these",
  "sixth",
  "alarm",
  "erase",
  "elegy",
  "spunk",
  "piper",
  "scaly",
  "scold",
  "hefty",
  "chick",
  "sooty",
  "canal",
  "whiny",
  "slash",
  "quake",
  "joint",
  "swept",
  "prude",
  "heavy",
  "wield",
  "femme",
  "lasso",
  "maize",
  "shale",
  "screw",
  "spree",
  "smoky",
  "whiff",
  "scent",
  "glade",
  "spent",
  "prism",
  "stoke",
  "riper",
  "orbit",
  "cocoa",
  "guilt",
  "humus",
  "shush",
  "table",
  "smirk",
  "wrong",
  "noisy",
  "alert",
  "shiny",
  "elate",
  "resin",
  "whole",
  "hunch",
  "pixel",
  "polar",
  "hotel",
  "sword",
  "cleat",
  "mango",
  "rumba",
  "puffy",
  "filly",
  "billy",
  "leash",
  "clout",
  "dance",
  "ovate",
  "facet",
  "chili",
  "paint",
  "liner",
  "curio",
  "salty",
  "audio",
  "snake",
  "fable",
  "cloak",
  "navel",
  "spurt",
  "pesto",
  "balmy",
  "flash",
  "unwed",
  "early",
  "churn",
  "weedy",
  "stump",
  "lease",
  "witty",
  "wimpy",
  "spoof",
  "saner",
  "blend",
  "salsa",
  "thick",
  "warty",
  "manic",
  "blare",
  "squib",
  "spoon",
  "probe",
  "crepe",
  "knack",
  "force",
  "debut",
  "order",
  "haste",
  "teeth",
  "agent",
  "widen",
  "icily",
  "slice",
  "ingot",
  "clash",
  "juror",
  "blood",
  "abode",
  "throw",
  "unity",
  "pivot",
  "slept",
  "troop",
  "spare",
  "sewer",
  "parse",
  "morph",
  "cacti",
  "tacky",
  "spool",
  "demon",
  "moody",
  "annex",
  "begin",
  "fuzzy",
  "patch",
  "water",
  "lumpy",
  "admin",
  "omega",
  "limit",
  "tabby",
  "macho",
  "aisle",
  "skiff",
  "basis",
  "plank",
  "verge",
  "botch",
  "crawl",
  "lousy",
  "slain",
  "cubic",
  "raise",
  "wrack",
  "guide",
  "foist",
  "cameo",
  "under",
  "actor",
  "revue",
  "fraud",
  "harpy",
  "scoop",
  "climb",
  "refer",
  "olden",
  "clerk",
  "debar",
  "tally",
  "ethic",
  "cairn",
  "tulle",
  "ghoul",
  "hilly",
  "crude",
  "apart",
  "scale",
  "older",
  "plain",
  "sperm",
  "briny",
  "abbot",
  "rerun",
  "quest",
  "crisp",
  "bound",
  "befit",
  "drawn",
  "suite",
  "itchy",
  "cheer",
  "bagel",
  "guess",
  "broad",
  "axiom",
  "chard",
  "caput",
  "leant",
  "harsh",
  "curse",
  "proud",
  "swing",
  "opine",
  "taste",
  "lupus",
  "gumbo",
  "miner",
  "green",
  "chasm",
  "lipid",
  "topic",
  "armor",
  "brush",
  "crane",
  "mural",
  "abled",
  "habit",
  "bossy",
  "maker",
  "dusky",
  "dizzy",
  "lithe",
  "brook",
  "jazzy",
  "fifty",
  "sense",
  "giant",
  "surly",
  "legal",
  "fatal",
  "flunk",
  "began",
  "prune",
  "small",
  "slant",
  "scoff",
  "torus",
  "ninny",
  "covey",
  "viper",
  "taken",
  "moral",
  "vogue",
  "owing",
  "token",
  "entry",
  "booth",
  "voter",
  "chide",
  "elfin",
  "ebony",
  "neigh",
  "minim",
  "melon",
  "kneed",
  "decoy",
  "voila",
  "ankle",
  "arrow",
  "mushy",
  "tribe",
  "cease",
  "eager",
  "birth",
  "graph",
  "odder",
  "terra",
  "weird",
  "tried",
  "clack",
  "color",
  "rough",
  "weigh",
  "uncut",
  "ladle",
  "strip",
  "craft",
  "minus",
  "dicey",
  "titan",
  "lucid",
  "vicar",
  "dress",
  "ditch",
  "gypsy",
  "pasta",
  "taffy",
  "flame",
  "swoop",
  "aloof",
  "sight",
  "broke",
  "teary",
  "chart",
  "sixty",
  "wordy",
  "sheer",
  "leper",
  "nosey",
  "bulge",
  "savor",
  "clamp",
  "funky",
  "foamy",
  "toxic",
  "brand",
  "plumb",
  "dingy",
  "butte",
  "drill",
  "tripe",
  "bicep",
  "tenor",
  "krill",
  "worse",
  "drama",
  "hyena",
  "think",
  "ratio",
  "cobra",
  "basil",
  "scrum",
  "bused",
  "phone",
  "court",
  "camel",
  "proof",
  "heard",
  "angel",
  "petal",
  "pouty",
  "throb",
  "maybe",
  "fetal",
  "sprig",
  "spine",
  "shout",
  "cadet",
  "macro",
  "dodgy",
  "satyr",
  "rarer",
  "binge",
  "trend",
  "nutty",
  "leapt",
  "amiss",
  "split",
  "myrrh",
  "width",
  "sonar",
  "tower",
  "baron",
  "fever",
  "waver",
  "spark",
  "belie",
  "sloop",
  "expel",
  "smote",
  "baler",
  "above",
  "north",
  "wafer",
  "scant",
  "frill",
  "awash",
  "snack",
  "scowl",
  "frail",
  "drift",
  "limbo",
  "fence",
  "motel",
  "ounce",
  "wreak",
  "revel",
  "talon",
  "prior",
  "knelt",
  "cello",
  "flake",
  "debug",
  "anode",
  "crime",
  "salve",
  "scout",
  "imbue",
  "pinky",
  "stave",
  "vague",
  "chock",
  "fight",
  "video",
  "stone",
  "teach",
  "cleft",
  "frost",
  "prawn",
  "booty",
  "twist",
  "apnea",
  "stiff",
  "plaza",
  "ledge",
  "tweak",
  "board",
  "grant",
  "medic",
  "bacon",
  "cable",
  "brawl",
  "slunk",
  "raspy",
  "forum",
  "drone",
  "women",
  "mucus",
  "boast",
  "toddy",
  "coven",
  "tumor",
  "truer",
  "wrath",
  "stall",
  "steam",
  "axial",
  "purer",
  "daily",
  "trail",
  "niche",
  "mealy",
  "juice",
  "nylon",
  "plump",
  "merry",
  "flail",
  "papal",
  "wheat",
  "berry",
  "cower",
  "erect",
  "brute",
  "leggy",
  "snipe",
  "sinew",
  "skier",
  "penny",
  "jumpy",
  "rally",
  "umbra",
  "scary",
  "modem",
  "gross",
  "avian",
  "greed",
  "satin",
  "tonic",
  "parka",
  "sniff",
  "livid",
  "stark",
  "trump",
  "giddy",
  "reuse",
  "taboo",
  "avoid",
  "quote",
  "devil",
  "liken",
  "gloss",
  "gayer",
  "beret",
  "noise",
  "gland",
  "dealt",
  "sling",
  "rumor",
  "opera",
  "thigh",
  "tonga",
  "flare",
  "wound",
  "white",
  "bulky",
  "etude",
  "horse",
  "circa",
  "paddy",
  "inbox",
  "fizzy",
  "grain",
  "exert",
  "surge",
  "gleam",
  "belle",
  "salvo",
  "crush",
  "fruit",
  "sappy",
  "taker",
  "tract",
  "ovine",
  "spiky",
  "frank",
  "reedy",
  "filth",
  "spasm",
  "heave",
  "mambo",
  "right",
  "clank",
  "trust",
  "lumen",
  "borne",
  "spook",
  "sauce",
  "amber",
  "lathe",
  "carat",
  "corer",
  "dirty",
  "slyly",
  "affix",
  "alloy",
  "taint",
  "sheep",
  "kinky",
  "wooly",
  "mauve",
  "flung",
  "yacht",
  "fried",
  "quail",
  "brunt",
  "grimy",
  "curvy",
  "cagey",
  "rinse",
  "deuce",
  "state",
  "grasp",
  "milky",
  "bison",
  "graft",
  "sandy",
  "baste",
  "flask",
  "hedge",
  "girly",
  "swash",
  "boney",
  "coupe",
  "endow",
  "abhor",
  "welch",
  "blade",
  "tight",
  "geese",
  "miser",
  "mirth",
  "cloud",
  "cabal",
  "leech",
  "close",
  "tenth",
  "pecan",
  "droit",
  "grail",
  "clone",
  "guise",
  "ralph",
  "tango",
  "biddy",
  "smith",
  "mower",
  "payee",
  "serif",
  "drape",
  "fifth",
  "spank",
  "glaze",
  "allot",
  "truck",
  "kayak",
  "virus",
  "testy",
  "tepee",
  "fully",
  "zonal",
  "metro",
  "curry",
  "grand",
  "banjo",
  "axion",
  "bezel",
  "occur",
  "chain",
  "nasal",
  "gooey",
  "filer",
  "brace",
  "allay",
  "pubic",
  "raven",
  "plead",
  "gnash",
  "flaky",
  "munch",
  "dully",
  "eking",
  "thing",
  "slink",
  "hurry",
  "theft",
  "shorn",
  "pygmy",
  "ranch",
  "wring",
  "lemon",
  "shore",
  "mamma",
  "froze",
  "newer",
  "style",
  "moose",
  "antic",
  "drown",
  "vegan",
  "chess",
  "guppy",
  "union",
  "lever",
  "lorry",
  "image",
  "cabby",
  "druid",
  "exact",
  "truth",
  "dopey",
  "spear",
  "cried",
  "chime",
  "crony",
  "stunk",
  "timid",
  "batch",
  "gauge",
  "rotor",
  "crack",
  "curve",
  "latte",
  "witch",
  "bunch",
  "repel",
  "anvil",
  "soapy",
  "meter",
  "broth",
  "madly",
  "dried",
  "scene",
  "known",
  "magma",
  "roost",
  "woman",
  "thong",
  "punch",
  "pasty",
  "downy",
  "knead",
  "whirl",
  "rapid",
  "clang",
  "anger",
  "drive",
  "goofy",
  "email",
  "music",
  "stuff",
  "bleep",
  "rider",
  "mecca",
  "folio",
  "setup",
  "verso",
  "quash",
  "fauna",
  "gummy",
  "happy",
  "newly",
  "fussy",
  "relic",
  "guava",
  "ratty",
  "fudge",
  "femur",
  "chirp",
  "forte",
  "alibi",
  "whine",
  "petty",
  "golly",
  "plait",
  "fleck",
  "felon",
  "gourd",
  "brown",
  "thrum",
  "ficus",
  "stash",
  "decry",
  "wiser",
  "junta",
  "visor",
  "daunt",
  "scree",
  "impel",
  "await",
  "press",
  "whose",
  "turbo",
  "stoop",
  "speak",
  "mangy",
  "eying",
  "inlet",
  "crone",
  "pulse",
  "mossy",
  "staid",
  "hence",
  "pinch",
  "teddy",
  "sully",
  "snore",
  "ripen",
  "snowy",
  "attic",
  "going",
  "leach",
  "mouth",
  "hound",
  "clump",
  "tonal",
  "bigot",
  "peril",
  "piece",
  "blame",
  "haute",
  "spied",
  "undid",
  "intro",
  "basal",
  "shine",
  "gecko",
  "rodeo",
  "guard",
  "steer",
  "loamy",
  "scamp",
  "scram",
  "manly",
  "hello",
  "vaunt",
  "organ",
  "feral",
  "knock",
  "extra",
  "condo",
  "adapt",
  "willy",
  "polka",
  "rayon",
  "skirt",
  "faith",
  "torso",
  "match",
  "mercy",
  "tepid",
  "sleek",
  "riser",
  "twixt",
  "peace",
  "flush",
  "catty",
  "login",
  "eject",
  "roger",
  "rival",
  "untie",
  "refit",
  "aorta",
  "adult",
  "judge",
  "rower",
  "artsy",
  "rural",
  "shave"
], at = (e, s, t = null, o = null) => {
  let a, r, i, l, u, c, p, f = Math.round, h = typeof t == "string";
  return typeof e != "number" || e < -1 || e > 1 || typeof s != "string" || s[0] != "r" && s[0] != "#" || t && !h || (p = s.length > 9, p = h ? t.length > 9 ? !0 : t == "c" ? !p : !1 : p, u = at.pSBCr(s), l = e < 0, c = t && t != "c" ? at.pSBCr(t) : l ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, e = l ? e * -1 : e, l = 1 - e, !u || !c) ? null : (o ? (a = f(l * u.r + e * c.r), r = f(l * u.g + e * c.g), i = f(l * u.b + e * c.b)) : (a = f((l * u.r ** 2 + e * c.r ** 2) ** 0.5), r = f((l * u.g ** 2 + e * c.g ** 2) ** 0.5), i = f((l * u.b ** 2 + e * c.b ** 2) ** 0.5)), h = u.a, c = c.a, u = h >= 0 || c >= 0, h = u ? h < 0 ? c : c < 0 ? h : h * l + c * e : 0, p ? "rgb" + (u ? "a(" : "(") + a + "," + r + "," + i + (u ? "," + f(h * 1e3) / 1e3 : "") + ")" : "#" + (4294967296 + a * 16777216 + r * 65536 + i * 256 + (u ? f(h * 255) : 0)).toString(16).slice(1, u ? void 0 : -2));
};
at.pSBCr = (e) => {
  const s = parseInt;
  let t = e.length, o = {};
  if (t > 9) {
    const [a, r, i, l] = e = e.split(",");
    if (t = e.length, t < 3 || t > 4)
      return null;
    o.r = s(a[3] == "a" ? a.slice(5) : a.slice(4)), o.g = s(r), o.b = s(i), o.a = l ? parseFloat(l) : -1;
  } else {
    if (t == 8 || t == 6 || t < 4)
      return null;
    t < 6 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (t > 4 ? e[4] + e[4] : "")), e = s(e.slice(1), 16), t == 9 || t == 5 ? (o.r = e >> 24 & 255, o.g = e >> 16 & 255, o.b = e >> 8 & 255, o.a = Math.round((e & 255) / 0.255) / 1e3) : (o.r = e >> 16, o.g = e >> 8 & 255, o.b = e & 255, o.a = -1);
  }
  return o;
};
const Eu = { id: "wordleForGood" }, Nu = {
  key: 0,
  class: "game-wrapper"
}, ju = /* @__PURE__ */ Vs({
  __name: "App.ce",
  props: {
    keyboardEvents: {
      type: String,
      default: "true"
    },
    title: {
      type: String
    },
    shareTitle: {
      type: String
    },
    word: {
      type: String,
      default: ""
    },
    randomWord: {
      type: String,
      default: "false"
    },
    successSelector: {
      type: String
    },
    failureSelector: {
      type: String
    },
    bgColor: {
      type: String,
      default: "#333"
    },
    textColor: {
      type: String,
      default: "#fff"
    },
    tileBorderColor: {
      type: String,
      default: "#888"
    },
    tileBgColor: {
      type: String,
      default: "transparent"
    },
    tileBgWrongColor: {
      type: String,
      default: "#39393c"
    },
    tileBgWrongLocationColor: {
      type: String,
      default: "#b59f3b"
    },
    tileBgCorrectColor: {
      type: String,
      default: "#538d4e"
    },
    tileTextColor: {
      type: String,
      default: "#fff"
    },
    keyBgColor: {
      type: String,
      default: "#818283"
    },
    keyTextColor: {
      type: String,
      default: "#fff"
    },
    keyTextSize: {
      type: String,
      default: "1.3rem"
    },
    height: {
      type: String,
      default: "700px"
    }
  },
  setup(e) {
    const s = e;
    const t = (q) => (q || "").split("-").map((B) => B === " " ? " " : String.fromCharCode(parseInt(B))).join(""), o = (q) => {
      const B = q ? document.querySelector(q) : null;
      if (B)
        return B;
      let se = document.querySelector("wordle-for-good")?.parentElement;
      for (; se && se?.parentElement?.tagName !== "BODY" && !se?.nextElementSibling; )
        se = se?.parentElement;
      return se?.nextElementSibling || se?.previousElementSibling || se;
    }, a = $(!1), r = $(), i = $(), l = $(), u = $((s.randomWord === "true" || !s.word) ? eo[Math.floor(Math.random() * eo.length)] : t(s.word)), c = s.keyboardEvents === "true", p = $(s.bgColor), f = $(s.textColor), h = $(s.height), v = o(s.successSelector), E = s.failureSelector ? o(s.failureSelector) : v, z = $(s.tileBorderColor), C = $(
      at(0.5, z.value, p.value)
    ), P = $(s.tileBgColor), T = $(at(-0.5, P.value, p.value)), Q = $(s.tileTextColor), le = $(s.tileBgWrongColor), G = $(s.tileBgWrongLocationColor), ze = $(s.tileBgCorrectColor), ke = $(s.keyBgColor), S = $(s.keyTextColor), Z = $(s.keyTextSize), W = $(!1), ie = $(null), O = $(null), ee = 5, we = 500;

    // [WFG] Apply CSS variables AFTER refs are initialized (prevents TDZ errors)
    Wl((q) => ({
      "67e563af": p.value,
      c9cd48f2: f.value,
      "70a4cd76": h.value,
      "4b812f9a": z.value,
      "1799eef4": C.value,
      "85be8ebe": P.value,
      "3dfa56bb": T.value,
      "4bb4e338": le.value,
      "9a0f90fa": G.value,
      "4a9903ca": ze.value,
      e259880e: Q.value,
      "7f6a738e": ke.value,
      "34cc20b4": S.value,
      a6cee944: Z.value
    }));
    function Oe(q) {
      if (q.key === "Enter")
        return K();
      if (q.key === "Backspace")
        return M();
      if (q.key.match(/^[a-zA-Z]$/))
        return re(q.key);
    }
    function re(q) {
      if (r.value.getActiveTiles().length >= ee)
        return;
      const B = r.value.nextTile();
      B.dataset.letter = q.toLowerCase(), B.textContent = q.toUpperCase(), B.dataset.state = "active";
    }
    async function K() {
      const q = [...r.value.getActiveTiles()];
      if (q.length !== ee)
        return l.value.showAlert("Not enough letters"), r.value.shakeTiles(q);
      const B = q.reduce((se, ve) => se + ve.dataset.letter, "");
      if (!eo.includes(B))
        return l.value.showAlert("Not in word list"), r.value.shakeTiles(q);
      Le(), q.forEach(
        (...se) => Ce(...se, B)
      );
    }
    function M() {
      const q = r.value.getActiveTiles(), B = q[q.length - 1];
      !B || (B.textContent = "", delete B.dataset.letter, delete B.dataset.state);
    }
    function Ce(q, B, se, ve) {
      const xe = q.dataset.letter || "", n = i.value.getKey(xe);
      setTimeout(() => {
        q.classList.add("flip");
      }, B * we / 2), q.addEventListener(
        "transitionend",
        () => {
          q.classList.remove("flip"), u.value[B] === xe ? (q.dataset.state = "correct", n.classList.add("correct")) : u.value.includes(xe) && (ve.lastIndexOf(xe) === ve.indexOf(xe) || ve.lastIndexOf(xe) !== B) && (ve[u.value.indexOf(xe)] !== xe || ve[u.value.lastIndexOf(xe)] !== xe) ? (q.dataset.state = "wrong-location", n.classList.add("wrong-location")) : (q.dataset.state = "wrong", n.classList.add("wrong")), B === se.length - 1 && q.addEventListener(
            "transitionend",
            () => {
              ls(), ns(ve, se);
            },
            { once: !0 }
          );
        },
        { once: !0 }
      );
    }
    function ns(q, B) {
      // --- DEBUG LOGS ---
      // This is the point where the game decides if you WON or LOST.
      // q = the guessed 5-letter word, u.value = the target word.
      if (q === u.value) {
        console.log("[WFG] WIN CONDITION MET", { guess: q, answer: u.value });
        Le();
        r.value.danceTiles(B);
        return us(!0);
      }
      if (r.value.getRemainingTiles().length === 0) {
        console.log("[WFG] LOSS CONDITION MET", { guess: q, answer: u.value });
        Le();
        return us(!1);
      }
    }
    function ls() {
      c && window.addEventListener("keydown", Oe), i.value.startInteraction();
    }
    function Le() {
      c && window.removeEventListener("keydown", Oe), i && i.value.stopInteraction();
    }
    function us(q = !0, B = 2500) {
      console.log("[WFG] endGame() called", { won: q, delayMs: B, target: u.value });
      setTimeout(() => {
        // Capture end-game share info (used by any external success/failure templates)
        ie.value = r.value.getResults(), O.value = r.value.getShareTiles();

        // ✅ Keep the game visible and show a "Play again" overlay instead of collapsing the UI.
        $s(q);

        // Preserve existing success/failure injection behavior (optional)
        q && v ? (v.dataset.wordleForGood = "win", qs(v)) : !q && E && (E.dataset.wordleForGood = "lose", qs(E));
      }, B);
    }

    // --- Play Again Overlay + Reset Logic ---
    function Fs() {
      // Prefer the current custom element instance if possible.
      // (This bundle assumes one instance; if you ever have multiple, you'll want to pass the host in.)
      return document.querySelector("wordle-for-good");
    }

    function Bs() {
      const host = Fs();
      const root = host && host.shadowRoot ? host.shadowRoot : host;
      return root ? root.querySelector("#wordleForGood") : null;
    }

    function $s(won) {
      const rootEl = Bs();
      if (!rootEl) return;

      // If overlay already exists, don't duplicate
      if (rootEl.querySelector("#wfg-play-again")) return;

      console.log("[WFG] Showing end overlay", { won, answer: u.value });

      const overlay = document.createElement("div");
      overlay.id = "wfg-play-again";
      overlay.setAttribute("role", "dialog");
      overlay.style.position = "absolute";
      overlay.style.inset = "0";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.background = "rgba(0,0,0,0.65)";
      overlay.style.zIndex = "9999";

      const card = document.createElement("div");
      card.style.width = "90%";
      card.style.maxWidth = "520px";
      card.style.padding = "18px";
      card.style.borderRadius = "14px";
      card.style.background = "#ffffff";
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
      card.style.textAlign = "center";

      const h2 = document.createElement("div");
      h2.textContent = won ? "Congrats!" : "Game over";
      h2.style.fontWeight = "800";
      h2.style.fontSize = "24px";
      h2.style.marginBottom = "10px";

      const p = document.createElement("div");
      p.textContent = won
        ? `You got it! The word was ${String(u.value || "").toUpperCase()}. Want to play again?`
        : `The word was ${String(u.value || "").toUpperCase()}. Want to play again?`;
      p.style.fontSize = "16px";
      p.style.marginBottom = "16px";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "Play again?";
      btn.style.width = "100%";
      btn.style.height = "56px";
      btn.style.border = "none";
      btn.style.borderRadius = "999px";
      btn.style.fontSize = "20px";
      btn.style.fontWeight = "800";
      btn.style.cursor = "pointer";
      btn.style.background = "#fe7f00";
      btn.style.color = "#111";

      btn.addEventListener("click", () => {
        console.log("[WFG] Play again clicked");
        overlay.remove();
        As();
      });

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(btn);
      overlay.appendChild(card);
      rootEl.appendChild(overlay);
    }

    function As() {
      console.log("[WFG] Resetting game / picking new word");
      // Pick a new random target word
      u.value = eo[Math.floor(Math.random() * eo.length)];
      console.log("[WFG] New target word", u.value);

      // Clear gameboard tiles
      const host = Fs();
      const root = host && host.shadowRoot ? host.shadowRoot : host;
      if (root) {
        root.querySelectorAll("#gameboard .tile").forEach((tile) => {
          tile.textContent = "";
          tile.classList.remove("shake", "dance", "flip");
          delete tile.dataset.letter;
          delete tile.dataset.state;
        });

        // Clear keyboard key state colors
        root.querySelectorAll("#keyboard .key").forEach((key) => {
          key.classList.remove("wrong", "wrong-location", "correct");
        });
      }

      // Clear any stored end-game values
      ie.value = null;
      O.value = null;
      W.value = !1;

      // Re-enable interaction
      ls();
    }
    function Se() {
      const q = ie.value || "", B = /Mobi/i.test(window.navigator.userAgent);
      if (navigator.share && B)
        return navigator.share({ text: q });
      l.value.showAlert("Copied results to clipboard", 2500), navigator.clipboard.writeText(q);
    }
    function qs(q) {
      if (!q)
        return;
      q.innerHTML = q.innerHTML.replaceAll(
        "[[WFG-TILES]]",
        `<pre>${O.value}</pre>`
      ), q.innerHTML = q.innerHTML.replaceAll(
        "[[WFG-WORD]]",
        u.value.toUpperCase()
      ), q.querySelectorAll("[data-wfg-share]").forEach((se) => {
        se.addEventListener("click", (ve) => {
          ve.preventDefault(), Se();
        });
      }), setTimeout(() => {
        q.style.overflow = "visible", q.style.maxHeight = "10000px", q.style.opacity = "1", q.style.display = "block";
      }, 1e3);
    }
    function ut(q) {
      q.style.transition = "max-height 0.5s ease-in-out", q.style.overflow = "hidden", q.style.maxHeight = "0px";
    }
    function Lt() {
      a.value = !0;
    }
    function Ie() {
      a.value = !1;
    }
    return qr(() => {
      u.value.length !== 5 && console.error("Target word must be 5 letters long. Got", u.value), eo.includes(u.value) === !1 && eo.push(u.value), v && c && ut(v), E && c && ut(E);
    }), lt(() => {
      ls(), document.querySelectorAll("[data-wfg-help]").forEach((B) => {
        B.addEventListener("click", (se) => {
          se.preventDefault(), Lt();
        });
      });
    }), Ko(() => {
      c && Le();
    }), (q, B) => (Ne(), _e("div", Eu, [
      ue(gu, {
        ref_key: "alert",
        ref: l
      }, null, 512),
      a.value ? (Ne(), Yo(xu, {
        key: 0,
        onClose: Ie
      })) : ko("", !0),
      ue(Wt, {
        name: "slide-up",
        mode: "out-in",
        appear: ""
      }, {
        default: Mo(() => [
          W.value ? ko("", !0) : (Ne(), _e("div", Nu, [
            ue(hu, { title: e.title }, null, 8, ["title"]),
            ue(pu, {
              ref_key: "gameboard",
              ref: r,
              title: e.title,
              "share-title": e.shareTitle
            }, null, 8, ["title", "share-title"]),
            ue(cu, {
              onKeyClick: re,
              onEnterClick: K,
              onDeleteClick: M,
              ref_key: "keyboard",
              ref: i
            }, null, 512)
          ]))
        ]),
        _: 1
      })
    ]));
  }
}), zu = `@keyframes shake{10%{transform:translate(-5%)}30%{transform:translate(5%)}50%{transform:translate(-7.5%)}70%{transform:translate(7.5%)}90%{transform:translate(-5%)}to{transform:translate(0)}}@keyframes dance{20%{transform:translateY(-50%)}40%{transform:translateY(5%)}60%{transform:translateY(-25%)}80%{transform:translateY(2.5%)}90%{transform:translateY(-5%)}to{transform:translateY(0)}}html,body{width:100%;height:100%;margin:0;padding:0}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}#wordleForGood{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;flex-direction:column;width:100%;font-size:clamp(.5rem,3vmin,1rem);background-color:var(--67e563af);color:var(--c9cd48f2);overflow:hidden;touch-action:manipulation}.game-wrapper{display:flex;flex-direction:column;align-items:center;width:100%;max-width:600px;height:var(--70a4cd76);margin:0 auto;justify-content:space-between}.alert-container{position:fixed;top:40%;z-index:1;user-select:none;left:50%;transform:translate(-50%)}.alert-container .alert{background-color:#d6d9db;color:#242729;padding:.75rem;border-radius:.25rem;font-weight:700;pointer-events:none}.alert-container .alert:last-child{margin-bottom:0}.alert-container .v-enter-active,.alert-container .v-leave-active{transition:opacity .5s ease}.alert-container .v-enter-from,.alert-container .v-leave-to{opacity:0}#wordleForGood{position:relative}#gameboard .wrapper{display:flex;justify-content:center;align-items:center;flex-grow:1}#gameboard .gameboard{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(6,1fr);gap:.3125rem;width:350px;height:420px;padding:10px}#gameboard .tile{font-size:2rem;color:var(--e259880e);border:.05em solid var(--4b812f9a);background-color:var(--85be8ebe);width:100%;height:100%;text-transform:uppercase;font-weight:700;display:flex;justify-content:center;align-items:center;user-select:none;transition:transform .25s linear}#gameboard .tile[data-state=active]{border-color:var(--1799eef4);background-color:var(--3dfa56bb)}#gameboard .tile[data-state=wrong]{border:none;background-color:var(--4bb4e338);color:#fff}#gameboard .tile[data-state=wrong-location]{border:none;background-color:var(--9a0f90fa);color:#fff}#gameboard .tile[data-state=correct]{border:none;background-color:var(--4a9903ca);color:#fff}#gameboard .tile.shake{animation:shake .25s ease-in-out}#gameboard .tile.dance{animation:dance .5s ease-in-out}#gameboard .tile.flip{transform:rotateX(90deg)}.slide-up-enter-active,.slide-up-leave-active{transition:max-height 1s ease;max-height:3000px}.slide-up-enter-from,.slide-up-leave-to{max-height:0}header{display:flex;justify-content:center;align-items:center;padding:1rem 0;width:100%}header h1{font-size:2.25rem;text-align:center;color:var(--c9cd48f2)}header .helpButton{position:absolute;right:10%;cursor:pointer;color:var(--c9cd48f2);border:1px solid var(--c9cd48f2);border-radius:10%;background-color:transparent;transition:all .2s ease-in-out;line-height:1;font-family:monospace;display:flex;justify-content:center;align-items:center;width:32px;height:32px}header .helpButton span{font-size:1.2rem}header .helpButton:hover{background-color:var(--c9cd48f2);color:#fff}#keyboard{width:50ch;font-size:var(--a6cee944);min-width:450px;max-width:100%}@media (max-width: 500px){#keyboard{width:100%;min-width:100%}}#keyboard .wrapper{width:100%;height:200px;padding:0 .5rem;margin-bottom:.5rem}#keyboard .keyboard{display:grid;grid-template-columns:repeat(20,minmax(auto,1fr));grid-auto-rows:1fr;gap:.375rem;width:100%;height:100%;justify-content:center}#keyboard .key{display:flex;flex:1;height:58px;grid-column:span 2;justify-content:center;align-items:center;background-color:var(--7f6a738e);color:var(--34cc20b4);fill:var(--34cc20b4);border:.25rem;border-radius:.25rem;font-size:inherit;font-weight:700;text-transform:uppercase;cursor:pointer;user-select:none}#keyboard .key.large{grid-column:span 3;font-size:clamp(.4em,3vw,.9em)}#keyboard .key>svg{width:1.75rem;height:1.75rem}#keyboard .key.wrong{background-color:var(--4bb4e338);color:#fff}#keyboard .key.wrong-location{background-color:var(--9a0f90fa);color:#fff}#keyboard .key.correct{background-color:var(--4a9903ca);color:#fff}#results .backdrop{display:flex;justify-content:center;align-items:center;position:fixed;height:100vh;width:100vw;left:0;top:0;background-color:#00000080}#results .wrapper{display:flex;flex-direction:column;align-items:center;width:90%;max-width:500px;max-height:100vh;padding:1rem;border:1px solid #1a1a1b;border-radius:.5rem;color:#fff;background-color:#121213;box-shadow:0 4px 23px #0003}#results section{text-align:center}#results section div{font-weight:700;letter-spacing:1px;margin:.75rem 0}#results section time{font-size:2rem;letter-spacing:1px}#results button{height:52px;width:80%;border:none;border-radius:6.25rem;color:inherit;background-color:#538d4e;font-size:20px;font-weight:700;cursor:pointer;user-select:none;margin:.75rem 0}#wfg-help .close{position:absolute;top:0;right:0;padding:.5em;width:32px;height:32px;cursor:pointer;box-sizing:content-box}#wfg-help .close img{width:100%;height:100%}#wfg-help .backdrop{display:flex;justify-content:center;align-items:center;position:fixed;height:100vh;width:100vw;top:0;left:0;background-color:#00000080;z-index:111111}#wfg-help .wrapper{position:relative;display:flex;flex-direction:column;align-items:center;width:90%;max-width:500px;max-height:100%;padding:1rem;border:1px solid #1a1a1b;border-radius:.5rem;color:#121213;background-color:#fff;box-shadow:0 4px 23px #0003;overflow-y:auto}#wfg-help h1{font-size:1.5rem;font-weight:700;margin:0}#wfg-help h3{font-size:1.2rem;margin-bottom:.5rem}#wfg-help h1,#wfg-help h3{text-align:center}#wfg-help ul{margin:10px 0 20px}#wfg-help section div{font-weight:700;letter-spacing:1px;margin:.75rem 0}#wfg-help section .content{padding:0 30px 30px;font-size:1rem;font-weight:400;height:100%;overflow-y:auto}#wfg-help section .content img{width:80%;height:auto}:root{--background: var(--67e563af);--text: var(--c9cd48f2);--height: var(--70a4cd76);--tileBorderColor: var(--4b812f9a);--tileBorderActiveColor: var(--1799eef4);--tileBgColor: var(--85be8ebe);--tileBgActiveColor: var(--3dfa56bb);--tileBgWrongColor: var(--4bb4e338);--tileBgWrongLocationColor: var(--9a0f90fa);--tileBgCorrectColor: var(--4a9903ca);--tileTextColor: var(--e259880e);--keyBgColor: var(--7f6a738e);--keyTextColor: var(--34cc20b4);--keyTextSize: var(--a6cee944)}
`, Ou = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of s)
    t[o] = a;
  return t;
}, Vu = /* @__PURE__ */ Ou(ju, [["styles", [zu]]]);
customElements.define("wordle-for-good", Kl(Vu));
