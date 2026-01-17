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
const Hs = (e) => ne(e) ? e : e == null ? "" : A(e) || J(e) && (e.toString === Ba || !_(e.toString)) ? JSON.stringify(e, Ma, 2) : String(e), Ma = (e, s) => s && s.__v_isRef ? Ma(e, s.value) : ks(s) ? [...
  [
    `Map(${s.size})`: [...s.entries()].reduce((t, [o, a]) => (t[`${o} =>`] = a, t), {})
  } : Ka(s) ? {
    [`Set(${s.size})`]: [...s.values()]
  } : J(s) && !A(s) && !Wa(s) ? String(s) : s,
  H = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Rs = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
  },
  Pa = () => !1,
  ti = /^on[^a-z]/,
  rt = (e) => ti.test(e),
  xt = (e) => e.startsWith("onUpdate:"),
  ae = Object.assign,
  Oo = (e, s) => {
    const t = e.indexOf(s);
    t > -1 && e.splice(t, 1);
  },
  oi = Object.prototype.hasOwnProperty,
  F = (e, s) => oi.call(e, s),
  A = Array.isArray,
  ks = (e) => Dt(e) === "[object Map]", Ka = (e) => Dt(e) === "[object Set]", _ = (e) => typeof e == "function", [...]