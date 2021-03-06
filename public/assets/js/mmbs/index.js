!(function(e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t();
  else if ('function' == typeof define && define.amd) define([], t);
  else {
    var r = t();
    for (var s in r) ('object' == typeof exports ? exports : e)[s] = r[s];
  }
})('undefined' != typeof self ? self : this, function() {
  return (function(e) {
    function t(s) {
      if (r[s]) return r[s].exports;
      var n = (r[s] = { i: s, l: !1, exports: {} });
      return e[s].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function(e, r, s) {
        t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: s });
      }),
      (t.n = function(e) {
        var r =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(r, 'a', r), r;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 0))
    );
  })([
    function(e, t, r) {
      !(function(t, r) {
        e.exports = r();
      })('undefined' != typeof self && self, function() {
        return (function(e) {
          function t(s) {
            if (r[s]) return r[s].exports;
            var n = (r[s] = { i: s, l: !1, exports: {} });
            return e[s].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
          }
          var r = {};
          return (
            (t.m = e),
            (t.c = r),
            (t.d = function(e, r, s) {
              t.o(e, r) ||
                Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: s });
            }),
            (t.n = function(e) {
              var r =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return t.d(r, 'a', r), r;
            }),
            (t.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ''),
            t((t.s = 26))
          );
        })([
          function(e, t, r) {
            'use strict';
            (function(e) {
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = !0;
              class s {
                constructor(e) {
                  (this._resolved = !1),
                    (this._rejected = !1),
                    (this._resolvedCallbacks = []),
                    (this._rejectedCallbacks = []),
                    'function' == typeof e && e(this.resolve.bind(this), this.reject.bind(this));
                }
                resolve(...e) {
                  if (this._resolved || this._rejected)
                    throw new Error(
                      'A promise was resolved even though it had already been ' +
                        (this._resolved ? 'resolved' : 'rejected') +
                        '.'
                    );
                  (this._resolved = !0), (this._result = e);
                  for (var t = 0; t < this._resolvedCallbacks.length; t++)
                    this._resolvedCallbacks[t].apply(this, e);
                  (this._resolvedCallbacks = []), (this._rejectedCallbacks = []);
                }
                reject(e) {
                  if (this._resolved || this._rejected)
                    throw new Error(
                      'A promise was rejected even though it had already been ' +
                        (this._resolved ? 'resolved' : 'rejected') +
                        '.'
                    );
                  (this._rejected = !0), (this._error = e);
                  for (var t = 0; t < this._rejectedCallbacks.length; t++)
                    this._rejectedCallbacks[t](e);
                  (this._resolvedCallbacks = []), (this._rejectedCallbacks = []);
                }
                then(t, n) {
                  var i = new s(),
                    a = function(...e) {
                      if ('function' == typeof t)
                        if (r)
                          try {
                            e = [t.apply(this, e)];
                          } catch (t) {
                            e = [s.error(t)];
                          }
                        else e = [t.apply(this, e)];
                      1 === e.length && s.is(e[0])
                        ? e[0].then(
                            function() {
                              i.resolve.apply(i, arguments);
                            },
                            function(e) {
                              i.reject(e);
                            }
                          )
                        : i.resolve.apply(i, e);
                    },
                    o = function(e) {
                      var t = [];
                      if ('function' == typeof n) {
                        if (r)
                          try {
                            t = [n(e)];
                          } catch (e) {
                            t = [s.error(e)];
                          }
                        else t = [n(e)];
                        1 === t.length && s.is(t[0])
                          ? t[0].then(
                              function() {
                                i.resolve.apply(i, arguments);
                              },
                              function(e) {
                                i.reject(e);
                              }
                            )
                          : r ? i.resolve.apply(i, t) : i.reject(t[0]);
                      } else i.reject(e);
                    },
                    l = function(e) {
                      e.call();
                    };
                  return (
                    r &&
                      (void 0 !== e && 'function' == typeof e.nextTick
                        ? (l = function(t) {
                            e.nextTick(t);
                          })
                        : 'function' == typeof setTimeout &&
                          (l = function(e) {
                            setTimeout(e, 0);
                          })),
                    this._resolved
                      ? l(() => {
                          a.apply(this, this._result);
                        })
                      : this._rejected
                        ? l(() => {
                            o(this._error);
                          })
                        : (this._resolvedCallbacks.push(a), this._rejectedCallbacks.push(o)),
                    i
                  );
                }
                always(e) {
                  return this.then(e, e);
                }
                done(e) {
                  return this.then(e);
                }
                fail(e) {
                  return this.then(null, e);
                }
                catch(e) {
                  return this.then(null, e);
                }
                _thenRunCallbacks(e, t) {
                  var r = {};
                  return (
                    'function' == typeof e
                      ? ((r.success = function(t) {
                          e(t, null);
                        }),
                        (r.error = function(t) {
                          e(null, t);
                        }))
                      : 'object' == typeof e &&
                        ('function' == typeof e.success && (r.success = e.success),
                        'function' == typeof e.error && (r.error = e.error)),
                    this.then(
                      function(...e) {
                        return r.success && r.success.apply(this, e), s.as.apply(s, arguments);
                      },
                      function(e) {
                        return r.error && (void 0 !== t ? r.error(t, e) : r.error(e)), s.error(e);
                      }
                    )
                  );
                }
                _continueWith(e) {
                  return this.then(
                    function(...t) {
                      return e(t, null);
                    },
                    function(t) {
                      return e(null, t);
                    }
                  );
                }
                static is(e) {
                  return null != e && 'function' == typeof e.then;
                }
                static as(...e) {
                  var t = new s();
                  return t.resolve.apply(t, e), t;
                }
                static resolve(e) {
                  return new s((t, r) => {
                    s.is(e) ? e.then(t, r) : t(e);
                  });
                }
                static error(...e) {
                  var t = new s();
                  return t.reject.apply(t, e), t;
                }
                static reject(...e) {
                  return s.error.apply(null, e);
                }
                static when(e) {
                  var t,
                    r = Array.isArray(e),
                    n = (t = r ? e : arguments).length,
                    i = !1,
                    a = [],
                    o = r ? [a] : a,
                    l = [];
                  if (((a.length = t.length), (l.length = t.length), 0 === n))
                    return s.as.apply(this, o);
                  for (
                    var u = new s(),
                      c = function() {
                        --n <= 0 && (i ? u.reject(l) : u.resolve.apply(u, o));
                      },
                      d = function(e, t) {
                        s.is(e)
                          ? e.then(
                              function(e) {
                                (a[t] = e), c();
                              },
                              function(e) {
                                (l[t] = e), (i = !0), c();
                              }
                            )
                          : ((a[f] = e), c());
                      },
                      f = 0;
                    f < t.length;
                    f++
                  )
                    d(t[f], f);
                  return u;
                }
                static all(e) {
                  let t = 0,
                    r = [];
                  for (let s of e) r[t++] = s;
                  if (0 === t) return s.as([]);
                  let n = !1,
                    i = new s(),
                    a = 0,
                    o = [];
                  return (
                    r.forEach((e, r) => {
                      s.is(e)
                        ? e.then(
                            e => {
                              if (n) return !1;
                              (o[r] = e), ++a >= t && i.resolve(o);
                            },
                            e => {
                              i.reject(e), (n = !0);
                            }
                          )
                        : ((o[r] = e), a++, !n && a >= t && i.resolve(o));
                    }),
                    i
                  );
                }
                static race(e) {
                  let t = !1,
                    r = new s();
                  for (let n of e)
                    s.is(n)
                      ? n.then(
                          e => {
                            t || ((t = !0), r.resolve(e));
                          },
                          e => {
                            t || ((t = !0), r.reject(e));
                          }
                        )
                      : t || ((t = !0), r.resolve(n));
                  return r;
                }
                static _continueWhile(e, t) {
                  return e()
                    ? t().then(function() {
                        return s._continueWhile(e, t);
                      })
                    : s.as();
                }
                static isPromisesAPlusCompliant() {
                  return r;
                }
                static enableAPlusCompliant() {
                  r = !0;
                }
                static disableAPlusCompliant() {
                  r = !1;
                }
              }
              t.default = s;
            }.call(t, r(14)));
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            }
            function n(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function i() {
              var e = a.default.get('SERVER_URL');
              '/' !== e[e.length - 1] && (e += '/');
              var t = e.replace(/https?:\/\//, '');
              return t.substr(t.indexOf('/'));
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var a = n(r(2)),
              o = n(r(29)),
              l = n(r(10)),
              u = n(r(6)),
              c = (n(r(30)), n(r(20))),
              d = n(r(7)),
              f = n(r(31)),
              h = n(r(3)),
              p = n(r(4)),
              _ = r(8),
              g = n(r(0)),
              y = n(r(13)),
              v = n(r(5)),
              m = s(r(32)),
              b = n(r(19)),
              O = s(r(33)),
              w = n(r(34)),
              C = {},
              S = 0,
              E = 0,
              A = !a.default.get('IS_NODE');
            A ? a.default.setObjectStateController(m) : a.default.setObjectStateController(O);
            class N {
              constructor(e, t, r) {
                'function' == typeof this.initialize && this.initialize.apply(this, arguments);
                var s = null;
                if (((this._objCount = E++), 'string' == typeof e))
                  (this.className = e), t && 'object' == typeof t && (s = t);
                else if (e && 'object' == typeof e) {
                  (this.className = e.className), (s = {});
                  for (var n in e) 'className' !== n && (s[n] = e[n]);
                  t && 'object' == typeof t && (r = t);
                }
                if (s && !this.set(s, r)) throw new Error("Can't create an invalid Mmbs Object");
              }
              get attributes() {
                let e = a.default.getObjectStateController();
                return Object.freeze(e.estimateAttributes(this._getStateIdentifier()));
              }
              get createdAt() {
                return this._getServerData().createdAt;
              }
              get updatedAt() {
                return this._getServerData().updatedAt;
              }
              _getId() {
                if ('string' == typeof this.id) return this.id;
                if ('string' == typeof this._localId) return this._localId;
                var e = 'local' + String(S++);
                return (this._localId = e), e;
              }
              _getStateIdentifier() {
                if (A) {
                  let e = this.id;
                  return e || (e = this._getId()), { id: e, className: this.className };
                }
                return this;
              }
              _getServerData() {
                return a.default
                  .getObjectStateController()
                  .getServerData(this._getStateIdentifier());
              }
              _clearServerData() {
                var e = this._getServerData(),
                  t = {};
                for (var r in e) t[r] = void 0;
                a.default.getObjectStateController().setServerData(this._getStateIdentifier(), t);
              }
              _getPendingOps() {
                return a.default
                  .getObjectStateController()
                  .getPendingOps(this._getStateIdentifier());
              }
              _clearPendingOps() {
                var e = this._getPendingOps(),
                  t = e[e.length - 1];
                Object.keys(t).forEach(e => {
                  delete t[e];
                });
              }
              _getDirtyObjectAttributes() {
                var e = this.attributes,
                  t = a.default
                    .getObjectStateController()
                    .getObjectCache(this._getStateIdentifier()),
                  r = {};
                for (var s in e) {
                  var n = e[s];
                  if (
                    n &&
                    'object' == typeof n &&
                    !(n instanceof N) &&
                    !(n instanceof p.default) &&
                    !(n instanceof v.default)
                  )
                    try {
                      var i = (0, u.default)(n, !1, !0),
                        o = JSON.stringify(i);
                      t[s] !== o && (r[s] = n);
                    } catch (e) {
                      r[s] = n;
                    }
                }
                return r;
              }
              _toFullJSON(e) {
                var t = this.toJSON(e);
                return (t.__type = 'Object'), (t.className = this.className), t;
              }
              _getSaveJSON() {
                var e,
                  t = this._getPendingOps(),
                  r = this._getDirtyObjectAttributes(),
                  s = {};
                for (e in r) s[e] = new _.SetOp(r[e]).toJSON();
                for (e in t[0]) s[e] = t[0][e].toJSON();
                return s;
              }
              _getSaveParams() {
                var e = this.id ? 'PUT' : 'POST',
                  t = this._getSaveJSON(),
                  r = 'classes/' + this.className;
                return (
                  this.id ? (r += '/' + this.id) : '_User' === this.className && (r = 'users'),
                  { method: e, body: t, path: r }
                );
              }
              _finishFetch(e) {
                !this.id && e.objectId && (this.id = e.objectId);
                let t = a.default.getObjectStateController();
                t.initializeState(this._getStateIdentifier());
                var r = {};
                for (var s in e)
                  'ACL' === s
                    ? (r[s] = new d.default(e[s]))
                    : 'objectId' !== s &&
                      ((r[s] = (0, l.default)(e[s])),
                      r[s] instanceof v.default && r[s]._ensureParentAndKey(this, s));
                r.createdAt &&
                  'string' == typeof r.createdAt &&
                  (r.createdAt = (0, f.default)(r.createdAt)),
                  r.updatedAt &&
                    'string' == typeof r.updatedAt &&
                    (r.updatedAt = (0, f.default)(r.updatedAt)),
                  !r.updatedAt && r.createdAt && (r.updatedAt = r.createdAt),
                  t.commitServerChanges(this._getStateIdentifier(), r);
              }
              _setExisted(e) {
                let t = a.default.getObjectStateController().getState(this._getStateIdentifier());
                t && (t.existed = e);
              }
              _migrateId(e) {
                if (this._localId && e)
                  if (A) {
                    let t = a.default.getObjectStateController(),
                      r = t.removeState(this._getStateIdentifier());
                    (this.id = e),
                      delete this._localId,
                      r && t.initializeState(this._getStateIdentifier(), r);
                  } else (this.id = e), delete this._localId;
              }
              _handleSaveResponse(e, t) {
                var r,
                  s = {},
                  n = a.default.getObjectStateController(),
                  i = n.popPendingState(this._getStateIdentifier());
                for (r in i)
                  i[r] instanceof _.RelationOp
                    ? (s[r] = i[r].applyTo(void 0, this, r))
                    : r in e || (s[r] = i[r].applyTo(void 0));
                for (r in e)
                  ('createdAt' !== r && 'updatedAt' !== r) || 'string' != typeof e[r]
                    ? 'ACL' === r
                      ? (s[r] = new d.default(e[r]))
                      : 'objectId' !== r &&
                        ((s[r] = (0, l.default)(e[r])),
                        s[r] instanceof _.UnsetOp && (s[r] = void 0))
                    : (s[r] = (0, f.default)(e[r]));
                s.createdAt && !s.updatedAt && (s.updatedAt = s.createdAt),
                  this._migrateId(e.objectId),
                  201 !== t && this._setExisted(!0),
                  n.commitServerChanges(this._getStateIdentifier(), s);
              }
              _handleSaveError() {
                this._getPendingOps();
                a.default
                  .getObjectStateController()
                  .mergeFirstPendingState(this._getStateIdentifier());
              }
              initialize() {}
              toJSON(e) {
                var t = this.id ? this.className + ':' + this.id : this,
                  r = ((e = e || [t]), {}),
                  s = this.attributes;
                for (var n in s)
                  ('createdAt' !== n && 'updatedAt' !== n) || !s[n].toJSON
                    ? (r[n] = (0, u.default)(s[n], !1, !1, e))
                    : (r[n] = s[n].toJSON());
                var i = this._getPendingOps();
                for (var n in i[0]) r[n] = i[0][n].toJSON();
                return this.id && (r.objectId = this.id), r;
              }
              equals(e) {
                return (
                  this === e ||
                  (e instanceof N &&
                    this.className === e.className &&
                    this.id === e.id &&
                    void 0 !== this.id)
                );
              }
              dirty(e) {
                if (!this.id) return !0;
                var t = this._getPendingOps(),
                  r = this._getDirtyObjectAttributes();
                if (e) {
                  if (r.hasOwnProperty(e)) return !0;
                  for (var s = 0; s < t.length; s++) if (t[s].hasOwnProperty(e)) return !0;
                  return !1;
                }
                return 0 !== Object.keys(t[0]).length || 0 !== Object.keys(r).length;
              }
              dirtyKeys() {
                for (var e = this._getPendingOps(), t = {}, r = 0; r < e.length; r++)
                  for (var s in e[r]) t[s] = !0;
                var n = this._getDirtyObjectAttributes();
                for (var s in n) t[s] = !0;
                return Object.keys(t);
              }
              toPointer() {
                if (!this.id) throw new Error('Cannot create a pointer to an unsaved MmbsObject');
                return { __type: 'Pointer', className: this.className, objectId: this.id };
              }
              get(e) {
                return this.attributes[e];
              }
              relation(e) {
                var t = this.get(e);
                if (t) {
                  if (!(t instanceof v.default))
                    throw new Error('Called relation() on non-relation field ' + e);
                  return t._ensureParentAndKey(this, e), t;
                }
                return new v.default(this, e);
              }
              escape(e) {
                var t = this.attributes[e];
                if (null == t) return '';
                if ('string' != typeof t) {
                  if ('function' != typeof t.toString) return '';
                  t = t.toString();
                }
                return (0, c.default)(t);
              }
              has(e) {
                var t = this.attributes;
                return !!t.hasOwnProperty(e) && null != t[e];
              }
              set(e, t, r) {
                var s = {},
                  n = {};
                if (e && 'object' == typeof e) (s = e), (r = t);
                else {
                  if ('string' != typeof e) return this;
                  s[e] = t;
                }
                r = r || {};
                var i = [];
                'function' == typeof this.constructor.readOnlyAttributes &&
                  (i = i.concat(this.constructor.readOnlyAttributes()));
                for (var o in s)
                  if ('createdAt' !== o && 'updatedAt' !== o) {
                    if (i.indexOf(o) > -1)
                      throw new Error('Cannot modify readonly attribute: ' + o);
                    r.unset
                      ? (n[o] = new _.UnsetOp())
                      : s[o] instanceof _.Op
                        ? (n[o] = s[o])
                        : s[o] && 'object' == typeof s[o] && 'string' == typeof s[o].__op
                          ? (n[o] = (0, _.opFromJSON)(s[o]))
                          : 'objectId' === o || 'id' === o
                            ? 'string' == typeof s[o] && (this.id = s[o])
                            : 'ACL' !== o || 'object' != typeof s[o] || s[o] instanceof d.default
                              ? (n[o] = new _.SetOp(s[o]))
                              : (n[o] = new _.SetOp(new d.default(s[o])));
                  }
                var l = this.attributes,
                  u = {};
                for (var c in n)
                  n[c] instanceof _.RelationOp
                    ? (u[c] = n[c].applyTo(l[c], this, c))
                    : n[c] instanceof _.UnsetOp || (u[c] = n[c].applyTo(l[c]));
                if (!r.ignoreValidation) {
                  var f = this.validate(u);
                  if (f) return 'function' == typeof r.error && r.error(this, f), !1;
                }
                var h = this._getPendingOps(),
                  p = h.length - 1,
                  g = a.default.getObjectStateController();
                for (var c in n) {
                  var y = n[c].mergeWith(h[p][c]);
                  g.setPendingOp(this._getStateIdentifier(), c, y);
                }
                return this;
              }
              unset(e, t) {
                return (t = t || {}), (t.unset = !0), this.set(e, null, t);
              }
              increment(e, t) {
                if ((void 0 === t && (t = 1), 'number' != typeof t))
                  throw new Error('Cannot increment by a non-numeric amount.');
                return this.set(e, new _.IncrementOp(t));
              }
              add(e, t) {
                return this.set(e, new _.AddOp([t]));
              }
              addAll(e, t) {
                return this.set(e, new _.AddOp(t));
              }
              addUnique(e, t) {
                return this.set(e, new _.AddUniqueOp([t]));
              }
              addAllUnique(e, t) {
                return this.set(e, new _.AddUniqueOp(t));
              }
              remove(e, t) {
                return this.set(e, new _.RemoveOp([t]));
              }
              removeAll(e, t) {
                return this.set(e, new _.RemoveOp(t));
              }
              op(e) {
                for (var t = this._getPendingOps(), r = t.length; r--; )
                  if (t[r][e]) return t[r][e];
              }
              clone() {
                let e = new this.constructor();
                e.className || (e.className = this.className);
                let t = this.attributes;
                if ('function' == typeof this.constructor.readOnlyAttributes) {
                  let e = this.constructor.readOnlyAttributes() || [],
                    r = {};
                  for (let s in t) e.indexOf(s) < 0 && (r[s] = t[s]);
                  t = r;
                }
                return e.set && e.set(t), e;
              }
              newInstance() {
                let e = new this.constructor();
                if ((e.className || (e.className = this.className), (e.id = this.id), A)) return e;
                let t = a.default.getObjectStateController();
                return (
                  t && t.duplicateState(this._getStateIdentifier(), e._getStateIdentifier()), e
                );
              }
              isNew() {
                return !this.id;
              }
              existed() {
                if (!this.id) return !1;
                let e = a.default.getObjectStateController().getState(this._getStateIdentifier());
                return !!e && e.existed;
              }
              isValid() {
                return !this.validate(this.attributes);
              }
              validate(e) {
                if (e.hasOwnProperty('ACL') && !(e.ACL instanceof d.default))
                  return new h.default(h.default.OTHER_CAUSE, 'ACL must be a Mmbs ACL.');
                for (var t in e)
                  if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(t))
                    return new h.default(h.default.INVALID_KEY_NAME);
                return !1;
              }
              getACL() {
                var e = this.get('ACL');
                return e instanceof d.default ? e : null;
              }
              setACL(e, t) {
                return this.set('ACL', e, t);
              }
              revert() {
                this._clearPendingOps();
              }
              clear() {
                var e = this.attributes,
                  t = {},
                  r = ['createdAt', 'updatedAt'];
                'function' == typeof this.constructor.readOnlyAttributes &&
                  (r = r.concat(this.constructor.readOnlyAttributes()));
                for (var s in e) r.indexOf(s) < 0 && (t[s] = !0);
                return this.set(t, { unset: !0 });
              }
              fetch(e) {
                var t = {};
                (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                  e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken);
                return a.default
                  .getObjectController()
                  .fetch(this, !0, t)
                  ._thenRunCallbacks(e);
              }
              save(e, t, r) {
                var s, n;
                if (
                  ('object' == typeof e || void 0 === e
                    ? ((s = e), 'object' == typeof t && (n = t))
                    : (((s = {})[e] = t), (n = r)),
                  !n &&
                    s &&
                    ((n = {}),
                    'function' == typeof s.success && ((n.success = s.success), delete s.success),
                    'function' == typeof s.error && ((n.error = s.error), delete s.error)),
                  s)
                ) {
                  var i = this.validate(s);
                  if (i)
                    return (
                      n && 'function' == typeof n.error && n.error(this, i), g.default.error(i)
                    );
                  this.set(s, n);
                }
                var o = {};
                (n = n || {}).hasOwnProperty('useMasterKey') && (o.useMasterKey = !!n.useMasterKey),
                  n.hasOwnProperty('sessionToken') &&
                    'string' == typeof n.sessionToken &&
                    (o.sessionToken = n.sessionToken);
                var l = a.default.getObjectController(),
                  u = (0, w.default)(this);
                return l
                  .save(u, o)
                  .then(() => l.save(this, o))
                  ._thenRunCallbacks(n, this);
              }
              destroy(e) {
                var t = {};
                return (
                  (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                  e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken),
                  this.id
                    ? a.default
                        .getObjectController()
                        .destroy(this, t)
                        ._thenRunCallbacks(e)
                    : g.default.as()._thenRunCallbacks(e)
                );
              }
              static _clearAllState() {
                a.default.getObjectStateController().clearAllState();
              }
              static fetchAll(e, t) {
                var r = {};
                return (
                  (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                  t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                  a.default
                    .getObjectController()
                    .fetch(e, !0, r)
                    ._thenRunCallbacks(t)
                );
              }
              static fetchAllIfNeeded(e, t) {
                var r = {};
                return (
                  (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                  t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                  a.default
                    .getObjectController()
                    .fetch(e, !1, r)
                    ._thenRunCallbacks(t)
                );
              }
              static destroyAll(e, t) {
                var r = {};
                return (
                  (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                  t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                  a.default
                    .getObjectController()
                    .destroy(e, r)
                    ._thenRunCallbacks(t)
                );
              }
              static saveAll(e, t) {
                var r = {};
                return (
                  (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                  t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                  a.default
                    .getObjectController()
                    .save(e, r)
                    ._thenRunCallbacks(t)
                );
              }
              static createWithoutData(e) {
                var t = new this();
                return (t.id = e), t;
              }
              static createPointerData(e) {
                if (!e) return null;
                if (!e.split) return null;
                var t = e.split('$');
                if (2 != t.length) return null;
                return N.extend(t[0]).createWithoutData(t[1]);
              }
              static fromJSON(e, t) {
                if (!e.className) throw new Error('Cannot create an object without a className');
                var r = C[e.className],
                  s = r ? new r() : new N(e.className),
                  n = {};
                for (var i in e) 'className' !== i && '__type' !== i && (n[i] = e[i]);
                if (t) {
                  n.objectId && (s.id = n.objectId);
                  let e = null;
                  'function' == typeof s._preserveFieldsOnFetch && (e = s._preserveFieldsOnFetch()),
                    s._clearServerData(),
                    e && s._finishFetch(e);
                }
                return s._finishFetch(n), e.objectId && s._setExisted(!0), s;
              }
              static registerSubclass(e, t) {
                if ('string' != typeof e)
                  throw new TypeError('The first argument must be a valid class name.');
                if (void 0 === t) throw new TypeError('You must supply a subclass constructor.');
                if ('function' != typeof t)
                  throw new TypeError(
                    'You must register the subclass constructor. Did you attempt to register an instance of the subclass?'
                  );
                (C[e] = t), t.className || (t.className = e);
              }
              static extend(e, t, r) {
                if ('string' != typeof e) {
                  if (e && 'string' == typeof e.className) return N.extend(e.className, e, t);
                  throw new Error("Mmbs.Object.extend's first argument should be the className.");
                }
                var s = e;
                'User' === s && a.default.get('PERFORM_USER_REWRITE') && (s = '_User');
                var n = N.prototype;
                this.hasOwnProperty('__super__') && this.__super__
                  ? (n = this.prototype)
                  : C[s] && (n = C[s].prototype);
                var i = function(e, t) {
                  if (
                    ((this.className = s),
                    (this._objCount = E++),
                    'function' == typeof this.initialize && this.initialize.apply(this, arguments),
                    e && 'object' == typeof e && !this.set(e || {}, t))
                  )
                    throw new Error("Can't create an invalid Mmbs Object");
                };
                if (
                  ((i.className = s),
                  (i.__super__ = n),
                  (i.prototype = Object.create(n, {
                    constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                  t)
                )
                  for (var o in t)
                    'className' !== o &&
                      Object.defineProperty(i.prototype, o, {
                        value: t[o],
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      });
                if (r)
                  for (var o in r)
                    'className' !== o &&
                      Object.defineProperty(i, o, {
                        value: r[o],
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      });
                return (
                  (i.extend = function(e, t, r) {
                    return 'string' == typeof e
                      ? N.extend.call(i, e, t, r)
                      : N.extend.call(i, s, e, t);
                  }),
                  (i.createWithoutData = N.createWithoutData),
                  (C[s] = i),
                  i
                );
              }
              static enableSingleInstance() {
                (A = !0), a.default.setObjectStateController(m);
              }
              static disableSingleInstance() {
                (A = !1), a.default.setObjectStateController(O);
              }
            }
            var T = {
              fetch(e, t, r) {
                if (Array.isArray(e)) {
                  if (e.length < 1) return g.default.as([]);
                  var s = [],
                    n = [],
                    i = null,
                    o = [],
                    l = null;
                  if (
                    (e.forEach((e, r) => {
                      l ||
                        (i || (i = e.className),
                        i !== e.className &&
                          (l = new h.default(
                            h.default.INVALID_CLASS_NAME,
                            'All objects should be of the same class'
                          )),
                        e.id ||
                          (l = new h.default(
                            h.default.MISSING_OBJECT_ID,
                            'All objects must have an ID'
                          )),
                        (t || 0 === Object.keys(e._getServerData()).length) &&
                          (n.push(e.id), s.push(e)),
                        o.push(e));
                    }),
                    l)
                  )
                    return g.default.error(l);
                  var u = new y.default(i);
                  return (
                    u.containedIn('objectId', n),
                    (u._limit = n.length),
                    u.find(r).then(e => {
                      var r = {};
                      e.forEach(e => {
                        r[e.id] = e;
                      });
                      for (var n = 0; n < s.length; n++) {
                        if ((!(i = s[n]) || !i.id || !r[i.id]) && t)
                          return g.default.error(
                            new h.default(
                              h.default.OBJECT_NOT_FOUND,
                              'All objects must exist on the server.'
                            )
                          );
                      }
                      if (!A)
                        for (n = 0; n < o.length; n++) {
                          var i;
                          if ((i = o[n]) && i.id && r[i.id]) {
                            var a = i.id;
                            i._finishFetch(r[a].toJSON()), (o[n] = r[a]);
                          }
                        }
                      return g.default.as(o);
                    })
                  );
                }
                return a.default
                  .getRESTController()
                  .request('GET', 'classes/' + e.className + '/' + e._getId(), {}, r)
                  .then(
                    (t, r, s) => (
                      e instanceof N &&
                        (e._clearPendingOps(), e._clearServerData(), e._finishFetch(t)),
                      e
                    )
                  );
              },
              destroy(e, t) {
                var r = a.default.getRESTController();
                if (Array.isArray(e)) {
                  if (e.length < 1) return g.default.as([]);
                  var s = [[]];
                  e.forEach(e => {
                    e.id && (s[s.length - 1].push(e), s[s.length - 1].length >= 20 && s.push([]));
                  }),
                    0 === s[s.length - 1].length && s.pop();
                  var n = g.default.as(),
                    o = [];
                  return (
                    s.forEach(e => {
                      n = n.then(() =>
                        r
                          .request(
                            'POST',
                            'batch',
                            {
                              requests: e.map(e => ({
                                method: 'DELETE',
                                path: i() + 'classes/' + e.className + '/' + e._getId(),
                                body: {},
                              })),
                            },
                            t
                          )
                          .then(t => {
                            for (var r = 0; r < t.length; r++)
                              if (t[r] && t[r].hasOwnProperty('error')) {
                                var s = new h.default(t[r].error.code, t[r].error.error);
                                (s.object = e[r]), o.push(s);
                              }
                          })
                      );
                    }),
                    n.then(() => {
                      if (o.length) {
                        var t = new h.default(h.default.AGGREGATE_ERROR);
                        return (t.errors = o), g.default.error(t);
                      }
                      return g.default.as(e);
                    })
                  );
                }
                return e instanceof N
                  ? r
                      .request('DELETE', 'classes/' + e.className + '/' + e._getId(), {}, t)
                      .then(() => g.default.as(e))
                  : g.default.as(e);
              },
              save(e, t) {
                var r = a.default.getRESTController(),
                  s = a.default.getObjectStateController();
                if (Array.isArray(e)) {
                  if (e.length < 1) return g.default.as([]);
                  for (var n = e.concat(), l = 0; l < e.length; l++)
                    e[l] instanceof N && (n = n.concat((0, w.default)(e[l], !0)));
                  n = (0, b.default)(n);
                  var u = g.default.as(),
                    c = [];
                  return (
                    n.forEach(e => {
                      e instanceof p.default
                        ? (u = u.then(() => e.save()))
                        : e instanceof N && c.push(e);
                    }),
                    u.then(() => {
                      var n = null;
                      return g.default
                        ._continueWhile(
                          () => c.length > 0,
                          () => {
                            var e = [],
                              a = [];
                            if (
                              (c.forEach(t => {
                                e.length < 20 && (0, o.default)(t) ? e.push(t) : a.push(t);
                              }),
                              (c = a),
                              e.length < 1)
                            )
                              return g.default.error(
                                new h.default(
                                  h.default.OTHER_CAUSE,
                                  'Tried to save a batch with a cycle.'
                                )
                              );
                            var l = new g.default(),
                              u = [],
                              d = [];
                            return (
                              e.forEach((e, t) => {
                                var r = new g.default();
                                u.push(r);
                                s.pushPendingState(e._getStateIdentifier()),
                                  d.push(
                                    s.enqueueTask(e._getStateIdentifier(), function() {
                                      return (
                                        r.resolve(),
                                        l.then((r, s) => {
                                          if (r[t].hasOwnProperty('success'))
                                            e._handleSaveResponse(r[t].success, s);
                                          else {
                                            if (!n && r[t].hasOwnProperty('error')) {
                                              var i = r[t].error;
                                              (n = new h.default(i.code, i.error)), (c = []);
                                            }
                                            e._handleSaveError();
                                          }
                                        })
                                      );
                                    })
                                  );
                              }),
                              g.default
                                .when(u)
                                .then(() =>
                                  r.request(
                                    'POST',
                                    'batch',
                                    {
                                      requests: e.map(e => {
                                        var t = e._getSaveParams();
                                        return (t.path = i() + t.path), t;
                                      }),
                                    },
                                    t
                                  )
                                )
                                .then(
                                  (e, t, r) => {
                                    l.resolve(e, t);
                                  },
                                  e => {
                                    l.reject(e);
                                  }
                                ),
                              g.default.when(d)
                            );
                          }
                        )
                        .then(() => (n ? g.default.error(n) : g.default.as(e)));
                    })
                  );
                }
                if (e instanceof N) {
                  var d = e,
                    f = function() {
                      var e = d._getSaveParams();
                      return r.request(e.method, e.path, e.body, t).then((e, t) => {
                        d._handleSaveResponse(e, t);
                      }, e => (d._handleSaveError(), g.default.error(e)));
                    };
                  return (
                    s.pushPendingState(e._getStateIdentifier()),
                    s.enqueueTask(e._getStateIdentifier(), f).then(() => e, e => g.default.error(e))
                  );
                }
                return g.default.as();
              },
            };
            a.default.setObjectController(T), (t.default = N);
          },
          function(e, t, r) {
            'use strict';
            (function(t) {
              function s(e, t, r) {
                t.forEach(t => {
                  if ('function' != typeof r[t]) throw new Error(`${e} must implement ${t}()`);
                });
              }
              var n = {
                IS_NODE: void 0 !== t && !!t.versions && !!t.versions.node && !t.versions.electron,
                REQUEST_ATTEMPT_LIMIT: 5,
                SERVER_URL: 'https://api.cmetamap.com/1',
                LIVEQUERY_SERVER_URL: null,
                VERSION: 'js' + r(28).version,
                APPLICATION_ID: null,
                JAVASCRIPT_KEY: null,
                MASTER_KEY: null,
                USE_MASTER_KEY: !1,
                PERFORM_USER_REWRITE: !0,
                FORCE_REVOCABLE_SESSION: !1,
                ALLOW_ANONYMOUS_KEY: null,
                USE_ALLOW_ANONYMOUS_KEY: !1,
              };
              e.exports = {
                get: function(e) {
                  if (n.hasOwnProperty(e)) return n[e];
                  throw new Error('Configuration key not found: ' + e);
                },
                set: function(e, t) {
                  n[e] = t;
                },
                setAnalyticsController(e) {
                  s('AnalyticsController', ['track'], e), (n.AnalyticsController = e);
                },
                getAnalyticsController: () => n.AnalyticsController,
                setCloudController(e) {
                  s('CloudController', ['run'], e), (n.CloudController = e);
                },
                getCloudController: () => n.CloudController,
                setConfigController(e) {
                  s('ConfigController', ['current', 'get'], e), (n.ConfigController = e);
                },
                getConfigController: () => n.ConfigController,
                setFileController(e) {
                  s('FileController', ['saveFile', 'saveBase64'], e), (n.FileController = e);
                },
                getFileController: () => n.FileController,
                setInstallationController(e) {
                  s('InstallationController', ['currentInstallationId'], e),
                    (n.InstallationController = e);
                },
                getInstallationController: () => n.InstallationController,
                setObjectController(e) {
                  s('ObjectController', ['save', 'fetch', 'destroy'], e), (n.ObjectController = e);
                },
                getObjectController: () => n.ObjectController,
                setObjectStateController(e) {
                  s(
                    'ObjectStateController',
                    [
                      'getState',
                      'initializeState',
                      'removeState',
                      'getServerData',
                      'setServerData',
                      'getPendingOps',
                      'setPendingOp',
                      'pushPendingState',
                      'popPendingState',
                      'mergeFirstPendingState',
                      'getObjectCache',
                      'estimateAttribute',
                      'estimateAttributes',
                      'commitServerChanges',
                      'enqueueTask',
                      'clearAllState',
                    ],
                    e
                  ),
                    (n.ObjectStateController = e);
                },
                getObjectStateController: () => n.ObjectStateController,
                setPushController(e) {
                  s('PushController', ['send'], e), (n.PushController = e);
                },
                getPushController: () => n.PushController,
                setQueryController(e) {
                  s('QueryController', ['find', 'aggregate'], e), (n.QueryController = e);
                },
                getQueryController: () => n.QueryController,
                setRESTController(e) {
                  s('RESTController', ['request', 'ajax'], e), (n.RESTController = e);
                },
                getRESTController: () => n.RESTController,
                setSchemaController(e) {
                  s('SchemaController', ['get', 'create', 'update', 'delete', 'send'], e),
                    (n.SchemaController = e);
                },
                getSchemaController: () => n.SchemaController,
                setSessionController(e) {
                  s('SessionController', ['getSession'], e), (n.SessionController = e);
                },
                getSessionController: () => n.SessionController,
                setStorageController(e) {
                  e.async
                    ? s(
                        'An async StorageController',
                        ['getItemAsync', 'setItemAsync', 'removeItemAsync'],
                        e
                      )
                    : s('A synchronous StorageController', ['getItem', 'setItem', 'removeItem'], e),
                    (n.StorageController = e);
                },
                getStorageController: () => n.StorageController,
                setAsyncStorage(e) {
                  n.AsyncStorage = e;
                },
                getAsyncStorage: () => n.AsyncStorage,
                setUserController(e) {
                  s(
                    'UserController',
                    [
                      'setCurrentUser',
                      'currentUser',
                      'currentUserAsync',
                      'signUp',
                      'logIn',
                      'become',
                      'logOut',
                      'requestPasswordReset',
                      'upgradeToRevocableSession',
                      'linkWith',
                    ],
                    e
                  ),
                    (n.UserController = e);
                },
                getUserController: () => n.UserController,
                setLiveQueryController(e) {
                  s('LiveQueryController', ['subscribe', 'unsubscribe', 'open', 'close'], e),
                    (n.LiveQueryController = e);
                },
                getLiveQueryController: () => n.LiveQueryController,
                setHooksController(e) {
                  s('HooksController', ['create', 'get', 'update', 'remove'], e),
                    (n.HooksController = e);
                },
                getHooksController: () => n.HooksController,
              };
            }.call(t, r(14)));
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            class s {
              constructor(e, t) {
                (this.code = e), (this.message = t);
              }
              toString() {
                return 'MmbsError: ' + this.code + ' ' + this.message;
              }
            }
            (s.OTHER_CAUSE = -1),
              (s.INTERNAL_SERVER_ERROR = 1),
              (s.CONNECTION_FAILED = 100),
              (s.OBJECT_NOT_FOUND = 101),
              (s.INVALID_QUERY = 102),
              (s.INVALID_CLASS_NAME = 103),
              (s.MISSING_OBJECT_ID = 104),
              (s.INVALID_KEY_NAME = 105),
              (s.INVALID_POINTER = 106),
              (s.INVALID_JSON = 107),
              (s.COMMAND_UNAVAILABLE = 108),
              (s.NOT_INITIALIZED = 109),
              (s.INCORRECT_TYPE = 111),
              (s.INVALID_CHANNEL_NAME = 112),
              (s.PUSH_MISCONFIGURED = 115),
              (s.OBJECT_TOO_LARGE = 116),
              (s.OPERATION_FORBIDDEN = 119),
              (s.CACHE_MISS = 120),
              (s.INVALID_NESTED_KEY = 121),
              (s.INVALID_FILE_NAME = 122),
              (s.INVALID_ACL = 123),
              (s.TIMEOUT = 124),
              (s.INVALID_EMAIL_ADDRESS = 125),
              (s.MISSING_CONTENT_TYPE = 126),
              (s.MISSING_CONTENT_LENGTH = 127),
              (s.INVALID_CONTENT_LENGTH = 128),
              (s.FILE_TOO_LARGE = 129),
              (s.FILE_SAVE_ERROR = 130),
              (s.DUPLICATE_VALUE = 137),
              (s.INVALID_ROLE_NAME = 139),
              (s.EXCEEDED_QUOTA = 140),
              (s.SCRIPT_FAILED = 141),
              (s.VALIDATION_ERROR = 142),
              (s.INVALID_IMAGE_DATA = 143),
              (s.UNSAVED_FILE_ERROR = 151),
              (s.INVALID_PUSH_TIME_ERROR = 152),
              (s.FILE_DELETE_ERROR = 153),
              (s.REQUEST_LIMIT_EXCEEDED = 155),
              (s.INVALID_EVENT_NAME = 160),
              (s.USERNAME_MISSING = 200),
              (s.PASSWORD_MISSING = 201),
              (s.USERNAME_TAKEN = 202),
              (s.EMAIL_TAKEN = 203),
              (s.EMAIL_MISSING = 204),
              (s.EMAIL_NOT_FOUND = 205),
              (s.SESSION_MISSING = 206),
              (s.MUST_CREATE_USER_THROUGH_SIGNUP = 207),
              (s.ACCOUNT_ALREADY_LINKED = 208),
              (s.INVALID_SESSION_TOKEN = 209),
              (s.LINKED_ID_MISSING = 250),
              (s.INVALID_LINKED_SESSION = 251),
              (s.UNSUPPORTED_SERVICE = 252),
              (s.AGGREGATE_ERROR = 600),
              (s.FILE_READ_ERROR = 601),
              (s.X_DOMAIN_REQUEST = 602),
              (t.default = s);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e) {
              if (e < 26) return String.fromCharCode(65 + e);
              if (e < 52) return String.fromCharCode(e - 26 + 97);
              if (e < 62) return String.fromCharCode(e - 52 + 48);
              if (62 === e) return '+';
              if (63 === e) return '/';
              throw new TypeError('Tried to encode large digit ' + e + ' in base64.');
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = s(r(2)),
              a = (s(r(0)),
              /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,/);
            class o {
              constructor(e, t, r) {
                var s = r || '';
                if (((this._name = e), void 0 !== t))
                  if (Array.isArray(t))
                    this._source = { format: 'base64', base64: o.encodeBase64(t), type: s };
                  else if ('undefined' != typeof File && t instanceof File)
                    this._source = { format: 'file', file: t, type: s };
                  else {
                    if (!t || 'string' != typeof t.base64)
                      throw new TypeError('Cannot create a Mmbs.File with that data.');
                    {
                      const e = t.base64;
                      var n = e.indexOf(',');
                      if (-1 !== n) {
                        var i = a.exec(e.slice(0, n + 1));
                        this._source = { format: 'base64', base64: e.slice(n + 1), type: i[1] };
                      } else this._source = { format: 'base64', base64: e, type: s };
                    }
                  }
              }
              name() {
                return this._name.substr(this._name.indexOf('_') + 1);
              }
              fname() {
                return this._name;
              }
              url(e) {
                if (((e = e || {}), this._url))
                  return e.forceSecure ? this._url.replace(/^http:\/\//i, 'https://') : this._url;
              }
              save(e) {
                e = e || {};
                var t = i.default.getFileController();
                if (
                  (this._previousSave ||
                    ('file' === this._source.format
                      ? (this._previousSave = t
                          .saveFile(this._name, this._source, e)
                          .then(e => ((this._name = e.name), (this._url = e.url), this)))
                      : (this._previousSave = t
                          .saveBase64(this._name, this._source, e)
                          .then(e => ((this._name = e.name), (this._url = e.url), this)))),
                  this._previousSave)
                )
                  return this._previousSave._thenRunCallbacks(e);
              }
              toJSON() {
                return { __type: 'File', name: this._name, url: this._url };
              }
              equals(e) {
                return (
                  this === e ||
                  (e instanceof o &&
                    this.name() === e.name() &&
                    this.url() === e.url() &&
                    void 0 !== this.url())
                );
              }
              static fromJSON(e) {
                if ('File' !== e.__type)
                  throw new TypeError('JSON object does not represent a MmbsFile');
                var t = new o(e.name);
                return (t._url = e.url), t;
              }
              static encodeBase64(e) {
                var t = [];
                t.length = Math.ceil(e.length / 3);
                for (var r = 0; r < t.length; r++) {
                  var s = e[3 * r],
                    i = e[3 * r + 1] || 0,
                    a = e[3 * r + 2] || 0,
                    o = 3 * r + 1 < e.length,
                    l = 3 * r + 2 < e.length;
                  t[r] = [
                    n((s >> 2) & 63),
                    n(((s << 4) & 48) | ((i >> 4) & 15)),
                    o ? n(((i << 2) & 60) | ((a >> 6) & 3)) : '=',
                    l ? n(63 & a) : '=',
                  ].join('');
                }
                return t.join('');
              }
            }
            var l = {
              saveFile: function(e, t) {
                if ('file' !== t.format)
                  throw new Error('saveFile can only be used with File-type sources.');
                var r = {
                    'X-Mmbs-Application-ID': i.default.get('APPLICATION_ID'),
                    'X-Mmbs-JavaScript-Key': i.default.get('JAVASCRIPT_KEY'),
                    'Content-Type': t.type || (t.file ? t.file.type : null),
                  },
                  s = i.default.get('SERVER_URL');
                return (
                  '/' !== s[s.length - 1] && (s += '/'),
                  (s += 'files/' + e),
                  i.default.getRESTController().ajax('POST', s, t.file, r)
                );
              },
              saveBase64: function(e, t, r) {
                if ('base64' !== t.format)
                  throw new Error('saveBase64 can only be used with Base64-type sources.');
                var s = { base64: t.base64 };
                t.type && (s._ContentType = t.type);
                var n = 'files/' + e;
                return i.default.getRESTController().request('POST', n, s, r);
              },
            };
            i.default.setFileController(l), (t.default = o);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = r(8),
              i = (s(r(1)), s(r(13)));
            t.default = class {
              constructor(e, t) {
                (this.parent = e), (this.key = t), (this.targetClassName = null);
              }
              _ensureParentAndKey(e, t) {
                if (((this.key = this.key || t), this.key !== t))
                  throw new Error('Internal Error. Relation retrieved from two different keys.');
                if (this.parent) {
                  if (this.parent.className !== e.className)
                    throw new Error(
                      'Internal Error. Relation retrieved from two different Objects.'
                    );
                  if (this.parent.id) {
                    if (this.parent.id !== e.id)
                      throw new Error(
                        'Internal Error. Relation retrieved from two different Objects.'
                      );
                  } else e.id && (this.parent = e);
                } else this.parent = e;
              }
              add(e) {
                Array.isArray(e) || (e = [e]);
                var t = new n.RelationOp(e, []),
                  r = this.parent;
                if (!r) throw new Error('Cannot add to a Relation without a parent');
                return r.set(this.key, t), (this.targetClassName = t._targetClassName), r;
              }
              remove(e) {
                Array.isArray(e) || (e = [e]);
                var t = new n.RelationOp([], e);
                if (!this.parent) throw new Error('Cannot remove from a Relation without a parent');
                this.parent.set(this.key, t), (this.targetClassName = t._targetClassName);
              }
              toJSON() {
                return { __type: 'Relation', className: this.targetClassName };
              }
              query() {
                var e,
                  t = this.parent;
                if (!t) throw new Error('Cannot construct a query for a Relation without a parent');
                return (
                  this.targetClassName
                    ? (e = new i.default(this.targetClassName))
                    : ((e = new i.default(
                        t.className
                      ))._extraOptions.redirectClassNameForKey = this.key),
                  e._addCondition('$relatedTo', 'object', {
                    __type: 'Pointer',
                    className: t.className,
                    objectId: t.id,
                  }),
                  e._addCondition('$relatedTo', 'key', this.key),
                  e
                );
              }
            };
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e, t, r, s) {
              if (e instanceof u.default) {
                if (t) throw new Error('Mmbs Objects not allowed here');
                var h = e.id ? e.className + ':' + e.id : e;
                return r ||
                  !s ||
                  s.indexOf(h) > -1 ||
                  e.dirty() ||
                  Object.keys(e._getServerData()).length < 1
                  ? e.toPointer()
                  : ((s = s.concat(h)), e._toFullJSON(s));
              }
              if (
                e instanceof c.Op ||
                e instanceof i.default ||
                e instanceof o.default ||
                e instanceof l.default ||
                e instanceof d.default
              )
                return e.toJSON();
              if (e instanceof a.default) {
                if (!e.url()) throw new Error('Tried to encode an unsaved file.');
                return e.toJSON();
              }
              if ('[object Date]' === f.call(e)) {
                if (isNaN(e)) throw new Error('Tried to encode an invalid date.');
                return { __type: 'Date', iso: e.toJSON() };
              }
              if ('[object RegExp]' === f.call(e) && 'string' == typeof e.source) return e.source;
              if (Array.isArray(e)) return e.map(e => n(e, t, r, s));
              if (e && 'object' == typeof e) {
                var p = {};
                for (var _ in e) p[_] = n(e[_], t, r, s);
                return p;
              }
              return e;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t, r, s) {
                return n(e, !!t, !!r, s || []);
              });
            var i = s(r(7)),
              a = s(r(4)),
              o = s(r(9)),
              l = s(r(12)),
              u = s(r(1)),
              c = r(8),
              d = s(r(5)),
              f = Object.prototype.toString;
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(17)),
              i = s(r(15)),
              a = '*';
            class o {
              constructor(e) {
                if (((this.permissionsById = {}), e && 'object' == typeof e))
                  if (e instanceof i.default) this.setReadAccess(e, !0), this.setWriteAccess(e, !0);
                  else
                    for (var t in e) {
                      var r = e[t];
                      if ('string' != typeof t)
                        throw new TypeError('Tried to create an ACL with an invalid user id.');
                      this.permissionsById[t] = {};
                      for (var s in r) {
                        var n = r[s];
                        if ('read' !== s && 'write' !== s)
                          throw new TypeError(
                            'Tried to create an ACL with an invalid permission type.'
                          );
                        if ('boolean' != typeof n)
                          throw new TypeError(
                            'Tried to create an ACL with an invalid permission value.'
                          );
                        this.permissionsById[t][s] = n;
                      }
                    }
                else if ('function' == typeof e)
                  throw new TypeError('MmbsACL constructed with a function. Did you forget ()?');
              }
              toJSON() {
                var e = {};
                for (var t in this.permissionsById) e[t] = this.permissionsById[t];
                return e;
              }
              equals(e) {
                if (!(e instanceof o)) return !1;
                var t = Object.keys(this.permissionsById),
                  r = Object.keys(e.permissionsById);
                if (t.length !== r.length) return !1;
                for (var s in this.permissionsById) {
                  if (!e.permissionsById[s]) return !1;
                  if (this.permissionsById[s].read !== e.permissionsById[s].read) return !1;
                  if (this.permissionsById[s].write !== e.permissionsById[s].write) return !1;
                }
                return !0;
              }
              _setAccess(e, t, r) {
                if (t instanceof i.default) t = t.id;
                else if (t instanceof n.default) {
                  const e = t.getName();
                  if (!e) throw new TypeError('Role must have a name');
                  t = 'role:' + e;
                }
                if ('string' != typeof t) throw new TypeError('userId must be a string.');
                if ('boolean' != typeof r)
                  throw new TypeError('allowed must be either true or false.');
                var s = this.permissionsById[t];
                if (!s) {
                  if (!r) return;
                  (s = {}), (this.permissionsById[t] = s);
                }
                r
                  ? (this.permissionsById[t][e] = !0)
                  : (delete s[e], 0 === Object.keys(s).length && delete this.permissionsById[t]);
              }
              _getAccess(e, t) {
                if (t instanceof i.default) {
                  if (!(t = t.id))
                    throw new Error('Cannot get access for a MmbsUser without an ID');
                } else if (t instanceof n.default) {
                  const e = t.getName();
                  if (!e) throw new TypeError('Role must have a name');
                  t = 'role:' + e;
                }
                var r = this.permissionsById[t];
                return !!r && !!r[e];
              }
              setReadAccess(e, t) {
                this._setAccess('read', e, t);
              }
              getReadAccess(e) {
                return this._getAccess('read', e);
              }
              setWriteAccess(e, t) {
                this._setAccess('write', e, t);
              }
              getWriteAccess(e) {
                return this._getAccess('write', e);
              }
              setPublicReadAccess(e) {
                this.setReadAccess(a, e);
              }
              getPublicReadAccess() {
                return this.getReadAccess(a);
              }
              setPublicWriteAccess(e) {
                this.setWriteAccess(a, e);
              }
              getPublicWriteAccess() {
                return this.getWriteAccess(a);
              }
              getRoleReadAccess(e) {
                if ((e instanceof n.default && (e = e.getName()), 'string' != typeof e))
                  throw new TypeError('role must be a MmbsRole or a String');
                return this.getReadAccess('role:' + e);
              }
              getRoleWriteAccess(e) {
                if ((e instanceof n.default && (e = e.getName()), 'string' != typeof e))
                  throw new TypeError('role must be a MmbsRole or a String');
                return this.getWriteAccess('role:' + e);
              }
              setRoleReadAccess(e, t) {
                if ((e instanceof n.default && (e = e.getName()), 'string' != typeof e))
                  throw new TypeError('role must be a MmbsRole or a String');
                this.setReadAccess('role:' + e, t);
              }
              setRoleWriteAccess(e, t) {
                if ((e instanceof n.default && (e = e.getName()), 'string' != typeof e))
                  throw new TypeError('role must be a MmbsRole or a String');
                this.setWriteAccess('role:' + e, t);
              }
            }
            t.default = o;
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.RelationOp = t.RemoveOp = t.AddUniqueOp = t.AddOp = t.IncrementOp = t.UnsetOp = t.SetOp = t.Op = void 0),
              (t.opFromJSON = function(e) {
                if (!e || !e.__op) return null;
                switch (e.__op) {
                  case 'Delete':
                    return new f();
                  case 'Increment':
                    return new h(e.amount);
                  case 'Add':
                    return new p((0, i.default)(e.objects));
                  case 'AddUnique':
                    return new _((0, i.default)(e.objects));
                  case 'Remove':
                    return new g((0, i.default)(e.objects));
                  case 'AddRelation':
                    var t = (0, i.default)(e.objects);
                    return Array.isArray(t) ? new y(t, []) : new y([], []);
                  case 'RemoveRelation':
                    var r = (0, i.default)(e.objects);
                    return Array.isArray(r) ? new y([], r) : new y([], []);
                  case 'Batch':
                    (t = []), (r = []);
                    for (var s = 0; s < e.ops.length; s++)
                      'AddRelation' === e.ops[s].__op
                        ? (t = t.concat((0, i.default)(e.ops[s].objects)))
                        : 'RemoveRelation' === e.ops[s].__op &&
                          (r = r.concat((0, i.default)(e.ops[s].objects)));
                    return new y(t, r);
                }
                return null;
              });
            var n = s(r(18)),
              i = s(r(10)),
              a = s(r(6)),
              o = s(r(1)),
              l = s(r(5)),
              u = s(r(19));
            class c {
              applyTo(e) {}
              mergeWith(e) {}
              toJSON() {}
            }
            t.Op = c;
            class d extends c {
              constructor(e) {
                super(), (this._value = e);
              }
              applyTo(e) {
                return this._value;
              }
              mergeWith(e) {
                return new d(this._value);
              }
              toJSON() {
                return (0, a.default)(this._value, !1, !0);
              }
            }
            t.SetOp = d;
            class f extends c {
              applyTo(e) {}
              mergeWith(e) {
                return new f();
              }
              toJSON() {
                return { __op: 'Delete' };
              }
            }
            t.UnsetOp = f;
            class h extends c {
              constructor(e) {
                if ((super(), 'number' != typeof e))
                  throw new TypeError('Increment Op must be initialized with a numeric amount.');
                this._amount = e;
              }
              applyTo(e) {
                if (void 0 === e) return this._amount;
                if ('number' != typeof e)
                  throw new TypeError('Cannot increment a non-numeric value.');
                return this._amount + e;
              }
              mergeWith(e) {
                if (!e) return this;
                if (e instanceof d) return new d(this.applyTo(e._value));
                if (e instanceof f) return new d(this._amount);
                if (e instanceof h) return new h(this.applyTo(e._amount));
                throw new Error('Cannot merge Increment Op with the previous Op');
              }
              toJSON() {
                return { __op: 'Increment', amount: this._amount };
              }
            }
            t.IncrementOp = h;
            class p extends c {
              constructor(e) {
                super(), (this._value = Array.isArray(e) ? e : [e]);
              }
              applyTo(e) {
                if (null == e) return this._value;
                if (Array.isArray(e)) return e.concat(this._value);
                throw new Error('Cannot add elements to a non-array value');
              }
              mergeWith(e) {
                if (!e) return this;
                if (e instanceof d) return new d(this.applyTo(e._value));
                if (e instanceof f) return new d(this._value);
                if (e instanceof p) return new p(this.applyTo(e._value));
                throw new Error('Cannot merge Add Op with the previous Op');
              }
              toJSON() {
                return { __op: 'Add', objects: (0, a.default)(this._value, !1, !0) };
              }
            }
            t.AddOp = p;
            class _ extends c {
              constructor(e) {
                super(), (this._value = (0, u.default)(Array.isArray(e) ? e : [e]));
              }
              applyTo(e) {
                if (null == e) return this._value || [];
                if (Array.isArray(e)) {
                  var t = e,
                    r = [];
                  return (
                    this._value.forEach(e => {
                      e instanceof o.default
                        ? (0, n.default)(t, e) || r.push(e)
                        : t.indexOf(e) < 0 && r.push(e);
                    }),
                    e.concat(r)
                  );
                }
                throw new Error('Cannot add elements to a non-array value');
              }
              mergeWith(e) {
                if (!e) return this;
                if (e instanceof d) return new d(this.applyTo(e._value));
                if (e instanceof f) return new d(this._value);
                if (e instanceof _) return new _(this.applyTo(e._value));
                throw new Error('Cannot merge AddUnique Op with the previous Op');
              }
              toJSON() {
                return { __op: 'AddUnique', objects: (0, a.default)(this._value, !1, !0) };
              }
            }
            t.AddUniqueOp = _;
            class g extends c {
              constructor(e) {
                super(), (this._value = (0, u.default)(Array.isArray(e) ? e : [e]));
              }
              applyTo(e) {
                if (null == e) return [];
                if (Array.isArray(e)) {
                  var t = e.indexOf(this._value),
                    r = e.concat([]);
                  for (t = 0; t < this._value.length; t++) {
                    for (var s = r.indexOf(this._value[t]); s > -1; )
                      r.splice(s, 1), (s = r.indexOf(this._value[t]));
                    if (this._value[t] instanceof o.default && this._value[t].id)
                      for (var n = 0; n < r.length; n++)
                        r[n] instanceof o.default &&
                          this._value[t].id === r[n].id &&
                          (r.splice(n, 1), n--);
                  }
                  return r;
                }
                throw new Error('Cannot remove elements from a non-array value');
              }
              mergeWith(e) {
                if (!e) return this;
                if (e instanceof d) return new d(this.applyTo(e._value));
                if (e instanceof f) return new f();
                if (e instanceof g) {
                  for (var t = e._value.concat([]), r = 0; r < this._value.length; r++)
                    this._value[r] instanceof o.default
                      ? (0, n.default)(t, this._value[r]) || t.push(this._value[r])
                      : t.indexOf(this._value[r]) < 0 && t.push(this._value[r]);
                  return new g(t);
                }
                throw new Error('Cannot merge Remove Op with the previous Op');
              }
              toJSON() {
                return { __op: 'Remove', objects: (0, a.default)(this._value, !1, !0) };
              }
            }
            t.RemoveOp = g;
            class y extends c {
              constructor(e, t) {
                super(),
                  (this._targetClassName = null),
                  Array.isArray(e) &&
                    (this.relationsToAdd = (0, u.default)(e.map(this._extractId, this))),
                  Array.isArray(t) &&
                    (this.relationsToRemove = (0, u.default)(t.map(this._extractId, this)));
              }
              _extractId(e) {
                if ('string' == typeof e) return e;
                if (!e.id)
                  throw new Error(
                    'You cannot add or remove an unsaved Mmbs Object from a relation'
                  );
                if (
                  (this._targetClassName || (this._targetClassName = e.className),
                  this._targetClassName !== e.className)
                )
                  throw new Error(
                    'Tried to create a Relation with 2 different object types: ' +
                      this._targetClassName +
                      ' and ' +
                      e.className +
                      '.'
                  );
                return e.id;
              }
              applyTo(e, t, r) {
                if (!e) {
                  if (!t || !r)
                    throw new Error(
                      'Cannot apply a RelationOp without either a previous value, or an object and a key'
                    );
                  var s = new o.default(t.className);
                  t.id && 0 === t.id.indexOf('local') ? (s._localId = t.id) : t.id && (s.id = t.id);
                  var n = new l.default(s, r);
                  return (n.targetClassName = this._targetClassName), n;
                }
                if (e instanceof l.default) {
                  if (this._targetClassName)
                    if (e.targetClassName) {
                      if (this._targetClassName !== e.targetClassName)
                        throw new Error(
                          'Related object must be a ' +
                            e.targetClassName +
                            ', but a ' +
                            this._targetClassName +
                            ' was passed in.'
                        );
                    } else e.targetClassName = this._targetClassName;
                  return e;
                }
                throw new Error('Relation cannot be applied to a non-relation field');
              }
              mergeWith(e) {
                if (!e) return this;
                if (e instanceof f)
                  throw new Error('You cannot modify a relation after deleting it.');
                if (e instanceof y) {
                  if (e._targetClassName && e._targetClassName !== this._targetClassName)
                    throw new Error(
                      'Related object must be of class ' +
                        e._targetClassName +
                        ', but ' +
                        (this._targetClassName || 'null') +
                        ' was passed in.'
                    );
                  var t = e.relationsToAdd.concat([]);
                  this.relationsToRemove.forEach(e => {
                    var r = t.indexOf(e);
                    r > -1 && t.splice(r, 1);
                  }),
                    this.relationsToAdd.forEach(e => {
                      t.indexOf(e) < 0 && t.push(e);
                    });
                  var r = e.relationsToRemove.concat([]);
                  this.relationsToAdd.forEach(e => {
                    var t = r.indexOf(e);
                    t > -1 && r.splice(t, 1);
                  }),
                    this.relationsToRemove.forEach(e => {
                      r.indexOf(e) < 0 && r.push(e);
                    });
                  var s = new y(t, r);
                  return (s._targetClassName = this._targetClassName), s;
                }
                throw new Error('Cannot merge Relation Op with the previous Op');
              }
              toJSON() {
                var e = e => ({ __type: 'Pointer', className: this._targetClassName, objectId: e }),
                  t = null,
                  r = null;
                return (
                  this.relationsToAdd.length > 0 &&
                    (t = { __op: 'AddRelation', objects: this.relationsToAdd.map(e) }),
                  this.relationsToRemove.length > 0 &&
                    (r = { __op: 'RemoveRelation', objects: this.relationsToRemove.map(e) }),
                  t && r ? { __op: 'Batch', ops: [t, r] } : t || r || {}
                );
              }
            }
            t.RelationOp = y;
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var s = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(r(0));
            class n {
              constructor(e, t) {
                Array.isArray(e)
                  ? (n._validate(e[0], e[1]), (this._latitude = e[0]), (this._longitude = e[1]))
                  : 'object' == typeof e
                    ? (n._validate(e.latitude, e.longitude),
                      (this._latitude = e.latitude),
                      (this._longitude = e.longitude))
                    : 'number' == typeof e && 'number' == typeof t
                      ? (n._validate(e, t), (this._latitude = e), (this._longitude = t))
                      : ((this._latitude = 0), (this._longitude = 0));
              }
              get latitude() {
                return this._latitude;
              }
              set latitude(e) {
                n._validate(e, this.longitude), (this._latitude = e);
              }
              get longitude() {
                return this._longitude;
              }
              set longitude(e) {
                n._validate(this.latitude, e), (this._longitude = e);
              }
              toJSON() {
                return (
                  n._validate(this._latitude, this._longitude),
                  { __type: 'GeoPoint', latitude: this._latitude, longitude: this._longitude }
                );
              }
              equals(e) {
                return (
                  e instanceof n && this.latitude === e.latitude && this.longitude === e.longitude
                );
              }
              radiansTo(e) {
                var t = Math.PI / 180,
                  r = this.latitude * t,
                  s = this.longitude * t,
                  n = e.latitude * t,
                  i = r - n,
                  a = s - e.longitude * t,
                  o = Math.sin(i / 2),
                  l = Math.sin(a / 2),
                  u = o * o + Math.cos(r) * Math.cos(n) * l * l;
                return (u = Math.min(1, u)), 2 * Math.asin(Math.sqrt(u));
              }
              kilometersTo(e) {
                return 6371 * this.radiansTo(e);
              }
              milesTo(e) {
                return 3958.8 * this.radiansTo(e);
              }
              static _validate(e, t) {
                if (e != e || t != t)
                  throw new TypeError('GeoPoint latitude and longitude must be valid numbers');
                if (e < -90)
                  throw new TypeError('GeoPoint latitude out of bounds: ' + e + ' < -90.0.');
                if (e > 90)
                  throw new TypeError('GeoPoint latitude out of bounds: ' + e + ' > 90.0.');
                if (t < -180)
                  throw new TypeError('GeoPoint longitude out of bounds: ' + t + ' < -180.0.');
                if (t > 180)
                  throw new TypeError('GeoPoint longitude out of bounds: ' + t + ' > 180.0.');
              }
              static current(e) {
                var t = new s.default();
                return (
                  navigator.geolocation.getCurrentPosition(
                    function(e) {
                      t.resolve(new n(e.coords.latitude, e.coords.longitude));
                    },
                    function(e) {
                      t.reject(e);
                    }
                  ),
                  t._thenRunCallbacks(e)
                );
              }
            }
            t.default = n;
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e) {
              if (null === e || 'object' != typeof e) return e;
              if (Array.isArray(e)) {
                var t = [];
                return (
                  e.forEach((e, r) => {
                    t[r] = n(e);
                  }),
                  t
                );
              }
              if ('string' == typeof e.__op) return (0, u.opFromJSON)(e);
              if ('Pointer' === e.__type && e.className) return l.default.fromJSON(e);
              if ('Object' === e.__type && e.className) return l.default.fromJSON(e);
              if ('Relation' === e.__type) {
                var r = new c.default(null, null);
                return (r.targetClassName = e.className), r;
              }
              if ('Date' === e.__type) return new Date(e.iso);
              if ('File' === e.__type) return i.default.fromJSON(e);
              if ('GeoPoint' === e.__type)
                return new a.default({ latitude: e.latitude, longitude: e.longitude });
              if ('Polygon' === e.__type) return new o.default(e.coordinates);
              var s = {};
              for (var d in e) s[d] = n(e[d]);
              return s;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
            s(r(7));
            var i = s(r(4)),
              a = s(r(9)),
              o = s(r(12)),
              l = s(r(1)),
              u = r(8),
              c = s(r(5));
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var n = s(r(2)),
              i = s(r(0)),
              a = {
                async: () => !!n.default.getStorageController().async,
                getItem(e) {
                  var t = n.default.getStorageController();
                  if (1 === t.async)
                    throw new Error(
                      'Synchronous storage is not supported by the current storage controller'
                    );
                  return t.getItem(e);
                },
                getItemAsync(e) {
                  var t = n.default.getStorageController();
                  return 1 === t.async ? t.getItemAsync(e) : i.default.as(t.getItem(e));
                },
                setItem(e, t) {
                  var r = n.default.getStorageController();
                  if (1 === r.async)
                    throw new Error(
                      'Synchronous storage is not supported by the current storage controller'
                    );
                  return r.setItem(e, t);
                },
                setItemAsync(e, t) {
                  var r = n.default.getStorageController();
                  return 1 === r.async ? r.setItemAsync(e, t) : i.default.as(r.setItem(e, t));
                },
                removeItem(e) {
                  var t = n.default.getStorageController();
                  if (1 === t.async)
                    throw new Error(
                      'Synchronous storage is not supported by the current storage controller'
                    );
                  return t.removeItem(e);
                },
                removeItemAsync(e) {
                  var t = n.default.getStorageController();
                  return 1 === t.async ? t.removeItemAsync(e) : i.default.as(t.removeItem(e));
                },
                generatePath(e) {
                  if (!n.default.get('APPLICATION_ID'))
                    throw new Error('You need to call Mmbs.initialize before using Mmbs.');
                  if ('string' != typeof e)
                    throw new Error('Tried to get a Storage path that was not a String.');
                  return (
                    '/' === e[0] && (e = e.substr(1)),
                    'Mmbs/' + n.default.get('APPLICATION_ID') + '/' + e
                  );
                },
                _clear() {
                  var e = n.default.getStorageController();
                  e.hasOwnProperty('clear') && e.clear();
                },
              };
            (e.exports = a), n.default.setStorageController(r(35));
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var s = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(r(9));
            class n {
              constructor(e) {
                this._coordinates = n._validate(e);
              }
              get coordinates() {
                return this._coordinates;
              }
              set coordinates(e) {
                this._coordinates = n._validate(e);
              }
              toJSON() {
                return (
                  n._validate(this._coordinates),
                  { __type: 'Polygon', coordinates: this._coordinates }
                );
              }
              equals(e) {
                if (!(e instanceof n) || this.coordinates.length !== e.coordinates.length)
                  return !1;
                let t = !0;
                for (let r = 1; r < this._coordinates.length; r += 1)
                  if (
                    this._coordinates[r][0] != e.coordinates[r][0] ||
                    this._coordinates[r][1] != e.coordinates[r][1]
                  ) {
                    t = !1;
                    break;
                  }
                return t;
              }
              containsPoint(e) {
                let t = this._coordinates[0][0],
                  r = this._coordinates[0][0],
                  s = this._coordinates[0][1],
                  n = this._coordinates[0][1];
                for (let e = 1; e < this._coordinates.length; e += 1) {
                  const i = this._coordinates[e];
                  (t = Math.min(i[0], t)),
                    (r = Math.max(i[0], r)),
                    (s = Math.min(i[1], s)),
                    (n = Math.max(i[1], n));
                }
                if (e.latitude < t || e.latitude > r || e.longitude < s || e.longitude > n)
                  return !1;
                let i = !1;
                for (
                  let t = 0, r = this._coordinates.length - 1;
                  t < this._coordinates.length;
                  r = t++
                ) {
                  let s = this._coordinates[t][0],
                    n = this._coordinates[t][1],
                    a = this._coordinates[r][0],
                    o = this._coordinates[r][1];
                  n > e.longitude != o > e.longitude &&
                    e.latitude < (a - s) * (e.longitude - n) / (o - n) + s &&
                    (i = !i);
                }
                return i;
              }
              static _validate(e) {
                if (!Array.isArray(e)) throw new TypeError('Coordinates must be an Array');
                if (e.length < 3)
                  throw new TypeError('Polygon must have at least 3 GeoPoints or Points');
                const t = [];
                for (let r = 0; r < e.length; r += 1) {
                  const n = e[r];
                  let i;
                  if (n instanceof s.default) i = n;
                  else {
                    if (!Array.isArray(n) || 2 !== n.length)
                      throw new TypeError('Coordinates must be an Array of GeoPoints or Points');
                    i = new s.default(n[0], n[1]);
                  }
                  t.push([i.latitude, i.longitude]);
                }
                return t;
              }
            }
            t.default = n;
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e) {
              return '\\Q' + e.replace('\\E', '\\E\\\\E\\Q') + '\\E';
            }
            function i(e, t) {
              var r = {};
              if (
                (t.forEach(t => {
                  let s = -1 !== t.indexOf('.');
                  if (s || e.hasOwnProperty(t)) {
                    if (s) {
                      let s = t.split('.');
                      var n = e,
                        i = r;
                      s.forEach((e, t, r) => {
                        n && !n.hasOwnProperty(e) && (n[e] = void 0),
                          void 0 !== n && (n = n[e]),
                          t < r.length - 1 && (i[e] || (i[e] = {}), (i = i[e]));
                      });
                    }
                  } else e[t] = void 0;
                }),
                Object.keys(r).length > 0)
              ) {
                function s(e, t, r, n) {
                  if (n)
                    for (var i in e) e.hasOwnProperty(i) && !t.hasOwnProperty(i) && (t[i] = e[i]);
                  for (var i in r)
                    void 0 !== t[i] &&
                      null !== t[i] &&
                      void 0 !== e &&
                      null !== e &&
                      s(e[i], t[i], r[i], !0);
                }
                s(
                  a.default
                    .getObjectStateController()
                    .getServerData({ id: e.objectId, className: e.className }),
                  e,
                  r,
                  !1
                );
              }
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var a = s(r(2)),
              o = s(r(6)),
              l = s(r(3)),
              u = s(r(9)),
              c = (s(r(12)), s(r(1))),
              d = s(r(0));
            class f {
              constructor(e) {
                if ('string' == typeof e)
                  'User' === e && a.default.get('PERFORM_USER_REWRITE')
                    ? (this.className = '_User')
                    : (this.className = e);
                else if (e instanceof c.default) this.className = e.className;
                else {
                  if ('function' != typeof e)
                    throw new TypeError(
                      'A MmbsQuery must be constructed with a MmbsObject or class name.'
                    );
                  if ('string' == typeof e.className) this.className = e.className;
                  else {
                    var t = new e();
                    this.className = t.className;
                  }
                }
                (this._where = {}),
                  (this._include = []),
                  (this._limit = -1),
                  (this._skip = 0),
                  (this._extraOptions = {});
              }
              _orQuery(e) {
                var t = e.map(e => e.toJSON().where);
                return (this._where.$or = t), this;
              }
              _addCondition(e, t, r) {
                return (
                  (this._where[e] && 'string' != typeof this._where[e]) || (this._where[e] = {}),
                  (this._where[e][t] = (0, o.default)(r, !1, !0)),
                  this
                );
              }
              toJSON() {
                var e = { where: this._where };
                this._include.length && (e.include = this._include.join(',')),
                  this._select && (e.keys = this._select.join(',')),
                  this._limit >= 0 && (e.limit = this._limit),
                  this._skip > 0 && (e.skip = this._skip),
                  this._order && (e.order = this._order.join(','));
                for (var t in this._extraOptions) e[t] = this._extraOptions[t];
                return e;
              }
              withJSON(e) {
                e.where && (this._where = e.where),
                  e.include && (this._include = e.include.split(',')),
                  e.keys && (this._select = e.keys.split(',')),
                  e.limit && (this._limit = e.limit),
                  e.skip && (this._skip = e.skip),
                  e.order && (this._order = e.order.split(','));
                for (let t in e)
                  e.hasOwnProperty(t) &&
                    -1 === ['where', 'include', 'keys', 'limit', 'skip', 'order'].indexOf(t) &&
                    (this._extraOptions[t] = e[t]);
                return this;
              }
              static fromJSON(e, t) {
                return new f(e).withJSON(t);
              }
              get(e, t) {
                this.equalTo('objectId', e);
                var r = {};
                return (
                  t && t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                  t && t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                  this.first(r)
                    .then(e => {
                      if (e) return e;
                      var t = new l.default(l.default.OBJECT_NOT_FOUND, 'Object not found.');
                      return d.default.error(t);
                    })
                    ._thenRunCallbacks(t, null)
                );
              }
              find(e) {
                let t = {};
                (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                  e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken);
                let r = a.default.getQueryController(),
                  s = this._select;
                return r
                  .find(this.className, this.toJSON(), t)
                  .then(e =>
                    e.results.map(t => {
                      let r = e.className || this.className;
                      return (
                        t.className || (t.className = r), s && i(t, s), c.default.fromJSON(t, !s)
                      );
                    })
                  )
                  ._thenRunCallbacks(e);
              }
              count(e) {
                var t = {};
                (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                  e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken);
                var r = a.default.getQueryController(),
                  s = this.toJSON();
                return (
                  (s.limit = 0),
                  (s.count = 1),
                  r
                    .find(this.className, s, t)
                    .then(e => e.count)
                    ._thenRunCallbacks(e)
                );
              }
              distinct(e, t) {
                const r = {};
                (t = t || {}).hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken);
                const s = a.default.getQueryController(),
                  n = { distinct: e, where: this._where };
                return s
                  .aggregate(this.className, n, r)
                  .then(e => e.results)
                  ._thenRunCallbacks(t);
              }
              aggregate(e, t) {
                const r = {};
                (t = t || {}).hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken);
                const s = a.default.getQueryController();
                let n = {};
                if (Array.isArray(e))
                  e.forEach(e => {
                    for (let t in e) n[t] = e[t];
                  });
                else {
                  if (!e || 'object' != typeof e)
                    throw new Error('Invalid pipeline must be Array or Object');
                  if (0 != Object.keys(this._where).length) {
                    n.match = this._where;
                    for (let t in e) n[t] = e[t];
                  } else n = e;
                }
                return s
                  .aggregate(this.className, n, r)
                  .then(e => e.results)
                  ._thenRunCallbacks(t);
              }
              first(e) {
                var t = {};
                (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                  e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken);
                var r = a.default.getQueryController(),
                  s = this.toJSON();
                s.limit = 1;
                var n = this._select;
                return r
                  .find(this.className, s, t)
                  .then(e => {
                    var t = e.results;
                    if (t[0])
                      return (
                        t[0].className || (t[0].className = this.className),
                        n && i(t[0], n),
                        c.default.fromJSON(t[0], !n)
                      );
                  })
                  ._thenRunCallbacks(e);
              }
              each(e, t) {
                if (((t = t || {}), this._order || this._skip || this._limit >= 0)) {
                  return d.default
                    .error('Cannot iterate on a query with sort, skip, or limit.')
                    ._thenRunCallbacks(t);
                }
                new d.default();
                var r = new f(this.className);
                (r._limit = t.batchSize || 100),
                  (r._include = this._include.map(e => e)),
                  this._select && (r._select = this._select.map(e => e)),
                  (r._where = {});
                for (var s in this._where) {
                  var n = this._where[s];
                  if (Array.isArray(n)) r._where[s] = n.map(e => e);
                  else if (n && 'object' == typeof n) {
                    var i = {};
                    r._where[s] = i;
                    for (var a in n) i[a] = n[a];
                  } else r._where[s] = n;
                }
                r.ascending('objectId');
                var o = {};
                t.hasOwnProperty('useMasterKey') && (o.useMasterKey = t.useMasterKey),
                  t.hasOwnProperty('sessionToken') && (o.sessionToken = t.sessionToken);
                var l = !1;
                return d.default
                  ._continueWhile(
                    () => !l,
                    () =>
                      r.find(o).then(t => {
                        var s = d.default.as();
                        return (
                          t.forEach(t => {
                            s = s.then(() => e(t));
                          }),
                          s.then(() => {
                            t.length >= r._limit
                              ? r.greaterThan('objectId', t[t.length - 1].id)
                              : (l = !0);
                          })
                        );
                      })
                  )
                  ._thenRunCallbacks(t);
              }
              equalTo(e, t) {
                return void 0 === t
                  ? this.doesNotExist(e)
                  : ((this._where[e] = (0, o.default)(t, !1, !0)), this);
              }
              notEqualTo(e, t) {
                return this._addCondition(e, '$ne', t);
              }
              lessThan(e, t) {
                return this._addCondition(e, '$lt', t);
              }
              greaterThan(e, t) {
                return this._addCondition(e, '$gt', t);
              }
              lessThanOrEqualTo(e, t) {
                return this._addCondition(e, '$lte', t);
              }
              greaterThanOrEqualTo(e, t) {
                return this._addCondition(e, '$gte', t);
              }
              containedIn(e, t) {
                return this._addCondition(e, '$in', t);
              }
              notContainedIn(e, t) {
                return this._addCondition(e, '$nin', t);
              }
              containsAll(e, t) {
                return this._addCondition(e, '$all', t);
              }
              exists(e) {
                return this._addCondition(e, '$exists', !0);
              }
              doesNotExist(e) {
                return this._addCondition(e, '$exists', !1);
              }
              matches(e, t, r) {
                return (
                  this._addCondition(e, '$regex', t),
                  r || (r = ''),
                  t.ignoreCase && (r += 'i'),
                  t.multiline && (r += 'm'),
                  r.length && this._addCondition(e, '$options', r),
                  this
                );
              }
              matchesQuery(e, t) {
                var r = t.toJSON();
                return (r.className = t.className), this._addCondition(e, '$inQuery', r);
              }
              doesNotMatchQuery(e, t) {
                var r = t.toJSON();
                return (r.className = t.className), this._addCondition(e, '$notInQuery', r);
              }
              matchesKeyInQuery(e, t, r) {
                var s = r.toJSON();
                return (
                  (s.className = r.className),
                  this._addCondition(e, '$select', { key: t, query: s })
                );
              }
              doesNotMatchKeyInQuery(e, t, r) {
                var s = r.toJSON();
                return (
                  (s.className = r.className),
                  this._addCondition(e, '$dontSelect', { key: t, query: s })
                );
              }
              contains(e, t) {
                if ('string' != typeof t)
                  throw new Error('The value being searched for must be a string.');
                return this._addCondition(e, '$regex', n(t));
              }
              startsWith(e, t) {
                if ('string' != typeof t)
                  throw new Error('The value being searched for must be a string.');
                return this._addCondition(e, '$regex', '^' + n(t));
              }
              endsWith(e, t) {
                if ('string' != typeof t)
                  throw new Error('The value being searched for must be a string.');
                return this._addCondition(e, '$regex', n(t) + '$');
              }
              near(e, t) {
                return (
                  t instanceof u.default || (t = new u.default(t)),
                  this._addCondition(e, '$nearSphere', t)
                );
              }
              withinRadians(e, t, r) {
                return this.near(e, t), this._addCondition(e, '$maxDistance', r);
              }
              withinMiles(e, t, r) {
                return this.withinRadians(e, t, r / 3958.8);
              }
              withinKilometers(e, t, r) {
                return this.withinRadians(e, t, r / 6371);
              }
              withinGeoBox(e, t, r) {
                return (
                  t instanceof u.default || (t = new u.default(t)),
                  r instanceof u.default || (r = new u.default(r)),
                  this._addCondition(e, '$within', { $box: [t, r] }),
                  this
                );
              }
              withinPolygon(e, t) {
                return this._addCondition(e, '$geoWithin', { $polygon: t });
              }
              polygonContains(e, t) {
                return this._addCondition(e, '$geoIntersects', { $point: t });
              }
              ascending(...e) {
                return (this._order = []), this.addAscending.apply(this, e);
              }
              addAscending(...e) {
                return (
                  this._order || (this._order = []),
                  e.forEach(e => {
                    Array.isArray(e) && (e = e.join()),
                      (this._order = this._order.concat(e.replace(/\s/g, '').split(',')));
                  }),
                  this
                );
              }
              descending(...e) {
                return (this._order = []), this.addDescending.apply(this, e);
              }
              addDescending(...e) {
                return (
                  this._order || (this._order = []),
                  e.forEach(e => {
                    Array.isArray(e) && (e = e.join()),
                      (this._order = this._order.concat(
                        e
                          .replace(/\s/g, '')
                          .split(',')
                          .map(e => '-' + e)
                      ));
                  }),
                  this
                );
              }
              skip(e) {
                if ('number' != typeof e || e < 0)
                  throw new Error('You can only skip by a positive number');
                return (this._skip = e), this;
              }
              limit(e) {
                if ('number' != typeof e)
                  throw new Error('You can only set the limit to a numeric value');
                return (this._limit = e), this;
              }
              include(...e) {
                return (
                  e.forEach(e => {
                    Array.isArray(e)
                      ? (this._include = this._include.concat(e))
                      : this._include.push(e);
                  }),
                  this
                );
              }
              select(...e) {
                return (
                  this._select || (this._select = []),
                  e.forEach(e => {
                    Array.isArray(e)
                      ? (this._select = this._select.concat(e))
                      : this._select.push(e);
                  }),
                  this
                );
              }
              subscribe() {
                return a.default.getLiveQueryController().subscribe(this);
              }
              static or(...e) {
                var t = null;
                e.forEach(e => {
                  if ((t || (t = e.className), t !== e.className))
                    throw new Error('All queries must be for the same class.');
                });
                var r = new f(t);
                return r._orQuery(e), r;
              }
            }
            var h = {
              find: (e, t, r) => a.default.getRESTController().request('GET', 'classes/' + e, t, r),
              aggregate: (e, t, r) =>
                a.default.getRESTController().request('GET', 'aggregate/' + e, t, r),
            };
            a.default.setQueryController(h), (t.default = f);
          },
          function(e, t, r) {
            'use strict';
            function s() {
              throw new Error('setTimeout has not been defined');
            }
            function n() {
              throw new Error('clearTimeout has not been defined');
            }
            function i(e) {
              if (c === setTimeout) return setTimeout(e, 0);
              if ((c === s || !c) && setTimeout) return (c = setTimeout), setTimeout(e, 0);
              try {
                return c(e, 0);
              } catch (t) {
                try {
                  return c.call(null, e, 0);
                } catch (t) {
                  return c.call(this, e, 0);
                }
              }
            }
            function a() {
              _ && h && ((_ = !1), h.length ? (p = h.concat(p)) : (g = -1), p.length && o());
            }
            function o() {
              if (!_) {
                var e = i(a);
                _ = !0;
                for (var t = p.length; t; ) {
                  for (h = p, p = []; ++g < t; ) h && h[g].run();
                  (g = -1), (t = p.length);
                }
                (h = null),
                  (_ = !1),
                  (function(e) {
                    if (d === clearTimeout) return clearTimeout(e);
                    if ((d === n || !d) && clearTimeout) return (d = clearTimeout), clearTimeout(e);
                    try {
                      d(e);
                    } catch (t) {
                      try {
                        return d.call(null, e);
                      } catch (t) {
                        return d.call(this, e);
                      }
                    }
                  })(e);
              }
            }
            function l(e, t) {
              (this.fun = e), (this.array = t);
            }
            function u() {}
            var c,
              d,
              f = (e.exports = {});
            !(function() {
              try {
                c = 'function' == typeof setTimeout ? setTimeout : s;
              } catch (e) {
                c = s;
              }
              try {
                d = 'function' == typeof clearTimeout ? clearTimeout : n;
              } catch (e) {
                d = n;
              }
            })();
            var h,
              p = [],
              _ = !1,
              g = -1;
            (f.nextTick = function(e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
              p.push(new l(e, t)), 1 !== p.length || _ || i(o);
            }),
              (l.prototype.run = function() {
                this.fun.apply(null, this.array);
              }),
              (f.title = 'browser'),
              (f.browser = !0),
              (f.env = {}),
              (f.argv = []),
              (f.version = ''),
              (f.versions = {}),
              (f.on = u),
              (f.addListener = u),
              (f.once = u),
              (f.off = u),
              (f.removeListener = u),
              (f.removeAllListeners = u),
              (f.emit = u),
              (f.prependListener = u),
              (f.prependOnceListener = u),
              (f.listeners = function(e) {
                return [];
              }),
              (f.binding = function(e) {
                throw new Error('process.binding is not supported');
              }),
              (f.cwd = function() {
                return '/';
              }),
              (f.chdir = function(e) {
                throw new Error('process.chdir is not supported');
              }),
              (f.umask = function() {
                return 0;
              });
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(2)),
              i = s(r(23)),
              a = s(r(3)),
              o = s(r(1)),
              l = s(r(0)),
              u = s(r(24)),
              c = s(r(11)),
              d = 'currentUser',
              f = !n.default.get('IS_NODE'),
              h = !1,
              p = null,
              _ = {};
            class g extends o.default {
              constructor(e) {
                if ((super('_User'), e && 'object' == typeof e && !this.set(e || {})))
                  throw new Error("Can't create an invalid Mmbs User");
              }
              _upgradeToRevocableSession(e) {
                var t = {};
                (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey);
                return n.default
                  .getUserController()
                  .upgradeToRevocableSession(this, t)
                  ._thenRunCallbacks(e);
              }
              _linkWith(e, t) {
                var r;
                if (
                  ('string' == typeof e ? ((r = e), (e = _[e])) : (r = e.getAuthType()),
                  t && t.hasOwnProperty('authData'))
                ) {
                  var s = this.get('authData') || {};
                  if ('object' != typeof s)
                    throw new Error('Invalid type: authData field should be an object');
                  s[r] = t.authData;
                  return n.default
                    .getUserController()
                    .linkWith(this, s)
                    ._thenRunCallbacks(t, this);
                }
                var i = new l.default();
                return (
                  e.authenticate({
                    success: (e, r) => {
                      var s = {};
                      (s.authData = r),
                        t.success && (s.success = t.success),
                        t.error && (s.error = t.error),
                        this._linkWith(e, s).then(
                          () => {
                            i.resolve(this);
                          },
                          e => {
                            i.reject(e);
                          }
                        );
                    },
                    error: (e, r) => {
                      'function' == typeof t.error && t.error(this, r), i.reject(r);
                    },
                  }),
                  i
                );
              }
              _synchronizeAuthData(e) {
                if (this.isCurrent() && e) {
                  var t;
                  'string' == typeof e ? (e = _[(t = e)]) : (t = e.getAuthType());
                  var r = this.get('authData');
                  if (e && r && 'object' == typeof r) {
                    e.restoreAuthentication(r[t]) || this._unlinkFrom(e);
                  }
                }
              }
              _synchronizeAllAuthData() {
                var e = this.get('authData');
                if ('object' == typeof e) for (var t in e) this._synchronizeAuthData(t);
              }
              _cleanupAuthData() {
                if (this.isCurrent()) {
                  var e = this.get('authData');
                  if ('object' == typeof e) for (var t in e) e[t] || delete e[t];
                }
              }
              _unlinkFrom(e, t) {
                return (
                  'string' == typeof e ? (e, (e = _[e])) : e.getAuthType(),
                  this._linkWith(e, { authData: null })
                    .then(() => (this._synchronizeAuthData(e), l.default.as(this)))
                    ._thenRunCallbacks(t)
                );
              }
              _isLinked(e) {
                var t;
                t = 'string' == typeof e ? e : e.getAuthType();
                var r = this.get('authData') || {};
                return 'object' == typeof r && !!r[t];
              }
              _logOutWithAll() {
                var e = this.get('authData');
                if ('object' == typeof e) for (var t in e) this._logOutWith(t);
              }
              _logOutWith(e) {
                this.isCurrent() &&
                  ('string' == typeof e && (e = _[e]), e && e.deauthenticate && e.deauthenticate());
              }
              _preserveFieldsOnFetch() {
                return { sessionToken: this.get('sessionToken') };
              }
              isCurrent() {
                var e = g.current();
                return !!e && e.id === this.id;
              }
              getUsername() {
                const e = this.get('username');
                return null == e || 'string' == typeof e ? e : '';
              }
              setUsername(e) {
                var t = this.get('authData');
                t && 'object' == typeof t && t.hasOwnProperty('anonymous') && (t.anonymous = null),
                  this.set('username', e);
              }
              setPassword(e) {
                this.set('password', e);
              }
              getEmail() {
                const e = this.get('email');
                return null == e || 'string' == typeof e ? e : '';
              }
              setEmail(e) {
                this.set('email', e);
              }
              getSessionToken() {
                const e = this.get('sessionToken');
                return null == e || 'string' == typeof e ? e : '';
              }
              authenticated() {
                var e = g.current();
                return !!this.get('sessionToken') && !!e && e.id === this.id;
              }
              signUp(e, t) {
                var r = {};
                (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                  t.hasOwnProperty('installationId') && (r.installationId = t.installationId);
                return n.default
                  .getUserController()
                  .signUp(this, e, r)
                  ._thenRunCallbacks(t, this);
              }
              logIn(e) {
                var t = {};
                (e = e || {}).hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                  e.hasOwnProperty('installationId') && (t.installationId = e.installationId);
                return n.default
                  .getUserController()
                  .logIn(this, t)
                  ._thenRunCallbacks(e, this);
              }
              save(...e) {
                return super.save
                  .apply(this, e)
                  .then(
                    () =>
                      this.isCurrent() ? n.default.getUserController().updateUserOnDisk(this) : this
                  );
              }
              destroy(...e) {
                return super.destroy
                  .apply(this, e)
                  .then(
                    () =>
                      this.isCurrent() ? n.default.getUserController().removeUserFromDisk() : this
                  );
              }
              fetch(...e) {
                return super.fetch
                  .apply(this, e)
                  .then(
                    () =>
                      this.isCurrent() ? n.default.getUserController().updateUserOnDisk(this) : this
                  );
              }
              static readOnlyAttributes() {
                return ['sessionToken'];
              }
              static extend(e, t) {
                if (e)
                  for (var r in e)
                    'className' !== r &&
                      Object.defineProperty(g.prototype, r, {
                        value: e[r],
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      });
                if (t)
                  for (var r in t)
                    'className' !== r &&
                      Object.defineProperty(g, r, {
                        value: t[r],
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      });
                return g;
              }
              static current() {
                if (!f) return null;
                return n.default.getUserController().currentUser();
              }
              static currentAsync() {
                if (!f) return l.default.as(null);
                return n.default.getUserController().currentUserAsync();
              }
              static signUp(e, t, r, s) {
                ((r = r || {}).username = e), (r.password = t);
                return new g(r).signUp({}, s);
              }
              static logIn(e, t, r) {
                if ('string' != typeof e)
                  return l.default.error(
                    new a.default(a.default.OTHER_CAUSE, 'Username must be a string.')
                  );
                if ('string' != typeof t)
                  return l.default.error(
                    new a.default(a.default.OTHER_CAUSE, 'Password must be a string.')
                  );
                var s = new g();
                return s._finishFetch({ username: e, password: t }), s.logIn(r);
              }
              static become(e, t) {
                if (!f)
                  throw new Error('It is not memory-safe to become a user in a server environment');
                var r = { sessionToken: e };
                (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey);
                return n.default
                  .getUserController()
                  .become(r)
                  ._thenRunCallbacks(t);
              }
              static logInWith(e, t) {
                return g._logInWith(e, t);
              }
              static logOut() {
                if (!f)
                  throw new Error('There is no current user on a node.js server environment.');
                return n.default.getUserController().logOut();
              }
              static requestPasswordReset(e, t) {
                var r = {};
                (t = t || {}).hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey);
                return n.default
                  .getUserController()
                  .requestPasswordReset(e, r)
                  ._thenRunCallbacks(t);
              }
              static allowCustomUserClass(e) {
                n.default.set('PERFORM_USER_REWRITE', !e);
              }
              static enableRevocableSession(e) {
                if (((e = e || {}), n.default.set('FORCE_REVOCABLE_SESSION', !0), f)) {
                  var t = g.current();
                  if (t) return t._upgradeToRevocableSession(e);
                }
                return l.default.as()._thenRunCallbacks(e);
              }
              static enableUnsafeCurrentUser() {
                f = !0;
              }
              static disableUnsafeCurrentUser() {
                f = !1;
              }
              static _registerAuthenticationProvider(e) {
                (_[e.getAuthType()] = e),
                  g.currentAsync().then(t => {
                    t && t._synchronizeAuthData(e.getAuthType());
                  });
              }
              static _logInWith(e, t) {
                return new g()._linkWith(e, t);
              }
              static _clearCache() {
                (p = null), (h = !1);
              }
              static _setCurrentUserCache(e) {
                p = e;
              }
            }
            o.default.registerSubclass('_User', g);
            var y = {
              updateUserOnDisk(e) {
                var t = c.default.generatePath(d),
                  r = e.toJSON();
                return (
                  (r.className = '_User'),
                  c.default.setItemAsync(t, JSON.stringify(r)).then(() => e)
                );
              },
              removeUserFromDisk() {
                let e = c.default.generatePath(d);
                return (h = !0), (p = null), c.default.removeItemAsync(e);
              },
              setCurrentUser: e => (
                (p = e), e._cleanupAuthData(), e._synchronizeAllAuthData(), y.updateUserOnDisk(e)
              ),
              currentUser() {
                if (p) return p;
                if (h) return null;
                if (c.default.async())
                  throw new Error(
                    'Cannot call currentUser() when using a platform with an async storage system. Call currentUserAsync() instead.'
                  );
                var e = c.default.generatePath(d),
                  t = c.default.getItem(e);
                if (((h = !0), !t)) return (p = null), null;
                (t = JSON.parse(t)).className || (t.className = '_User'),
                  t._id && (t.objectId !== t._id && (t.objectId = t._id), delete t._id),
                  t._sessionToken && ((t.sessionToken = t._sessionToken), delete t._sessionToken);
                var r = o.default.fromJSON(t);
                return (p = r), r._synchronizeAllAuthData(), r;
              },
              currentUserAsync() {
                if (p) return l.default.as(p);
                if (h) return l.default.as(null);
                var e = c.default.generatePath(d);
                return c.default.getItemAsync(e).then(e => {
                  if (((h = !0), !e)) return (p = null), l.default.as(null);
                  (e = JSON.parse(e)).className || (e.className = '_User'),
                    e._id && (e.objectId !== e._id && (e.objectId = e._id), delete e._id),
                    e._sessionToken && ((e.sessionToken = e._sessionToken), delete e._sessionToken);
                  var t = o.default.fromJSON(e);
                  return (p = t), t._synchronizeAllAuthData(), l.default.as(t);
                });
              },
              signUp(e, t, r) {
                var s = (t && t.username) || e.get('username'),
                  n = (t && t.password) || e.get('password');
                return s && s.length
                  ? n && n.length
                    ? e
                        .save(t, r)
                        .then(
                          () => (e._finishFetch({ password: void 0 }), f ? y.setCurrentUser(e) : e)
                        )
                    : l.default.error(
                        new a.default(
                          a.default.OTHER_CAUSE,
                          'Cannot sign up user with an empty password.'
                        )
                      )
                  : l.default.error(
                      new a.default(
                        a.default.OTHER_CAUSE,
                        'Cannot sign up user with an empty name.'
                      )
                    );
              },
              logIn(e, t) {
                var r = n.default.getRESTController(),
                  s = n.default.getObjectStateController(),
                  i = { username: e.get('username'), password: e.get('password') };
                return r
                  .request('GET', 'login', i, t)
                  .then(
                    (t, r) => (
                      e._migrateId(t.objectId),
                      e._setExisted(!0),
                      s.setPendingOp(e._getStateIdentifier(), 'username', void 0),
                      s.setPendingOp(e._getStateIdentifier(), 'password', void 0),
                      (t.password = void 0),
                      e._finishFetch(t),
                      f ? y.setCurrentUser(e) : l.default.as(e)
                    )
                  );
              },
              become(e) {
                var t = new g();
                return n.default
                  .getRESTController()
                  .request('GET', 'users/me', {}, e)
                  .then((e, r) => (t._finishFetch(e), t._setExisted(!0), y.setCurrentUser(t)));
              },
              logOut: () =>
                y.currentUserAsync().then(e => {
                  var t = c.default.generatePath(d),
                    r = c.default.removeItemAsync(t),
                    s = n.default.getRESTController();
                  if (null !== e) {
                    var a = e.getSessionToken();
                    a &&
                      (0, i.default)(a) &&
                      (r = r.then(() => s.request('POST', 'logout', {}, { sessionToken: a }))),
                      e._logOutWithAll(),
                      e._finishFetch({ sessionToken: void 0 });
                  }
                  return (h = !0), (p = null), r;
                }),
              requestPasswordReset: (e, t) =>
                n.default
                  .getRESTController()
                  .request('POST', 'requestPasswordReset', { email: e }, t),
              upgradeToRevocableSession(e, t) {
                var r = e.getSessionToken();
                if (!r)
                  return l.default.error(
                    new a.default(
                      a.default.SESSION_MISSING,
                      'Cannot upgrade a user with no session token'
                    )
                  );
                t.sessionToken = r;
                return n.default
                  .getRESTController()
                  .request('POST', 'upgradeToRevocableSession', {}, t)
                  .then(t => {
                    var r = new u.default();
                    return (
                      r._finishFetch(t),
                      e._finishFetch({ sessionToken: r.getSessionToken() }),
                      e.isCurrent() ? y.setCurrentUser(e) : l.default.as(e)
                    );
                  });
              },
              linkWith: (e, t) => e.save({ authData: t }).then(() => (f ? y.setCurrentUser(e) : e)),
            };
            n.default.setUserController(y), (t.default = g);
          },
          function(e, t, r) {
            'use strict';
            e.exports = r(45).EventEmitter;
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(7)),
              i = s(r(3)),
              a = s(r(1));
            class o extends a.default {
              constructor(e, t) {
                super('_Role'),
                  'string' == typeof e &&
                    t instanceof n.default &&
                    (this.setName(e), this.setACL(t));
              }
              getName() {
                const e = this.get('name');
                return null == e || 'string' == typeof e ? e : '';
              }
              setName(e, t) {
                return this.set('name', e, t);
              }
              getUsers() {
                return this.relation('users');
              }
              getRoles() {
                return this.relation('roles');
              }
              validate(e, t) {
                var r = super.validate(e, t);
                if (r) return r;
                if ('name' in e && e.name !== this.getName()) {
                  var s = e.name;
                  if (this.id && this.id !== e.objectId)
                    return new i.default(
                      i.default.OTHER_CAUSE,
                      "A role's name can only be set before it has been saved."
                    );
                  if ('string' != typeof s)
                    return new i.default(i.default.OTHER_CAUSE, "A role's name must be a String.");
                }
                return !1;
              }
            }
            a.default.registerSubclass('_Role', o), (t.default = o);
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t) {
                if (e.indexOf(t) > -1) return !0;
                for (var r = 0; r < e.length; r++)
                  if (
                    e[r] instanceof s.default &&
                    e[r].className === t.className &&
                    e[r]._getId() === t._getId()
                  )
                    return !0;
                return !1;
              });
            var s = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(r(1));
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                var t = [];
                return (
                  e.forEach(e => {
                    e instanceof i.default
                      ? (0, n.default)(t, e) || t.push(e)
                      : t.indexOf(e) < 0 && t.push(e);
                  }),
                  t
                );
              });
            var n = s(r(18)),
              i = s(r(1));
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                return e.replace(/[&<>\/'"]/g, function(e) {
                  return s[e];
                });
              });
            var s = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '/': '&#x2F;',
              "'": '&#x27;',
              '"': '&quot;',
            };
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e) {
              let t = e.shift();
              return e.length || (e[0] = {}), t;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.defaultState = function() {
                return {
                  serverData: {},
                  pendingOps: [{}],
                  objectCache: {},
                  tasks: new u.default(),
                  existed: !1,
                };
              }),
              (t.setServerData = function(e, t) {
                for (let r in t) void 0 !== t[r] ? (e[r] = t[r]) : delete e[r];
              }),
              (t.setPendingOp = function(e, t, r) {
                let s = e.length - 1;
                r ? (e[s][t] = r) : delete e[s][t];
              }),
              (t.pushPendingState = function(e) {
                e.push({});
              }),
              (t.popPendingState = n),
              (t.mergeFirstPendingState = function(e) {
                let t = n(e),
                  r = e[0];
                for (let e in t)
                  if (r[e] && t[e]) {
                    let s = r[e].mergeWith(t[e]);
                    s && (r[e] = s);
                  } else r[e] = t[e];
              }),
              (t.estimateAttribute = function(e, t, r, s, n) {
                let i = e[n];
                for (let e = 0; e < t.length; e++)
                  t[e][n] &&
                    (t[e][n] instanceof c.RelationOp
                      ? s && (i = t[e][n].applyTo(i, { className: r, id: s }, n))
                      : (i = t[e][n].applyTo(i)));
                return i;
              }),
              (t.estimateAttributes = function(e, t, r, s) {
                let n,
                  i = {};
                for (n in e) i[n] = e[n];
                for (let e = 0; e < t.length; e++)
                  for (n in t[e])
                    t[e][n] instanceof c.RelationOp
                      ? s && (i[n] = t[e][n].applyTo(i[n], { className: r, id: s }, n))
                      : (i[n] = t[e][n].applyTo(i[n]));
                return i;
              }),
              (t.commitServerChanges = function(e, t, r) {
                for (let s in r) {
                  let n = r[s];
                  if (
                    ((e[s] = n),
                    n &&
                      'object' == typeof n &&
                      !(n instanceof o.default) &&
                      !(n instanceof a.default) &&
                      !(n instanceof l.default))
                  ) {
                    let e = (0, i.default)(n, !1, !0);
                    t[s] = JSON.stringify(e);
                  }
                }
              });
            var i = s(r(6)),
              a = s(r(4)),
              o = s(r(1)),
              l = (s(r(0)), s(r(5))),
              u = s(r(22)),
              c = r(8);
          },
          function(e, t, r) {
            'use strict';
            var s = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(r(0));
            e.exports = class {
              constructor() {
                this.queue = [];
              }
              enqueue(e) {
                var t = new s.default();
                return (
                  this.queue.push({ task: e, _completion: t }),
                  1 === this.queue.length &&
                    e().then(
                      () => {
                        this._dequeue(), t.resolve();
                      },
                      e => {
                        this._dequeue(), t.reject(e);
                      }
                    ),
                  t
                );
              }
              _dequeue() {
                if ((this.queue.shift(), this.queue.length)) {
                  var e = this.queue[0];
                  e.task().then(
                    () => {
                      this._dequeue(), e._completion.resolve();
                    },
                    t => {
                      this._dequeue(), e._completion.reject(t);
                    }
                  );
                }
              }
            };
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                return e.indexOf('r:') > -1;
              });
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(2)),
              i = s(r(23)),
              a = s(r(1)),
              o = s(r(0)),
              l = s(r(15));
            class u extends a.default {
              constructor(e) {
                if ((super('_Session'), e && 'object' == typeof e && !this.set(e || {})))
                  throw new Error("Can't create an invalid Session");
              }
              getSessionToken() {
                const e = this.get('sessionToken');
                return 'string' == typeof e ? e : '';
              }
              static readOnlyAttributes() {
                return [
                  'createdWith',
                  'expiresAt',
                  'installationId',
                  'restricted',
                  'sessionToken',
                  'user',
                ];
              }
              static current(e) {
                e = e || {};
                var t = n.default.getSessionController(),
                  r = {};
                return (
                  e.hasOwnProperty('useMasterKey') && (r.useMasterKey = e.useMasterKey),
                  l.default.currentAsync().then(e => {
                    if (!e) return o.default.error('There is no current user.');
                    e.getSessionToken();
                    return (r.sessionToken = e.getSessionToken()), t.getSession(r);
                  })
                );
              }
              static isCurrentSessionRevocable() {
                var e = l.default.current();
                return !!e && (0, i.default)(e.getSessionToken() || '');
              }
            }
            a.default.registerSubclass('_Session', u);
            var c = {
              getSession(e) {
                var t = n.default.getRESTController(),
                  r = new u();
                return t
                  .request('GET', 'sessions/me', {}, e)
                  .then(e => (r._finishFetch(e), r._setExisted(!0), r));
              },
            };
            n.default.setSessionController(c), (t.default = u);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(16)),
              i = s(r(0)),
              a = s(r(1)),
              o = s(r(46));
            const l = {
                INITIALIZED: 'initialized',
                CONNECTING: 'connecting',
                CONNECTED: 'connected',
                CLOSED: 'closed',
                RECONNECTING: 'reconnecting',
                DISCONNECTED: 'disconnected',
              },
              u = {
                CONNECT: 'connect',
                SUBSCRIBE: 'subscribe',
                UNSUBSCRIBE: 'unsubscribe',
                ERROR: 'error',
              },
              c = {
                CONNECTED: 'connected',
                SUBSCRIBED: 'subscribed',
                UNSUBSCRIBED: 'unsubscribed',
                ERROR: 'error',
                CREATE: 'create',
                UPDATE: 'update',
                ENTER: 'enter',
                LEAVE: 'leave',
                DELETE: 'delete',
              },
              d = { CLOSE: 'close', ERROR: 'error', OPEN: 'open' },
              f = {
                OPEN: 'open',
                CLOSE: 'close',
                ERROR: 'error',
                CREATE: 'create',
                UPDATE: 'update',
                ENTER: 'enter',
                LEAVE: 'leave',
                DELETE: 'delete',
              };
            let h = e => Math.random() * Math.min(30, Math.pow(2, e) - 1) * 1e3;
            t.default = class extends n.default {
              constructor({
                applicationId: e,
                serverURL: t,
                javascriptKey: r,
                masterKey: s,
                sessionToken: n,
                allowAnonymousKey: a,
              }) {
                if ((super(), !t || 0 !== t.indexOf('ws')))
                  throw new Error(
                    'You need to set a proper Mmbs LiveQuery server url before using LiveQueryClient'
                  );
                (this.reconnectHandle = null),
                  (this.attempts = 1),
                  (this.id = 0),
                  (this.requestId = 1),
                  (this.serverURL = t),
                  (this.applicationId = e),
                  (this.javascriptKey = r),
                  (this.allowAnonymousKey = a),
                  (this.masterKey = s),
                  (this.sessionToken = n),
                  (this.connectPromise = new i.default()),
                  (this.subscriptions = new Map()),
                  (this.state = l.INITIALIZED);
              }
              shouldOpen() {
                return this.state === l.INITIALIZED || this.state === l.DISCONNECTED;
              }
              subscribe(e, t) {
                if (!e) return;
                let r = e.className,
                  s = e.toJSON(),
                  n = s.where,
                  i = s.keys ? s.keys.split(',') : void 0,
                  a = {
                    op: u.SUBSCRIBE,
                    requestId: this.requestId,
                    query: { className: r, where: n, fields: i },
                  };
                t && (a.sessionToken = t);
                let l = new o.default(this.requestId, e, t);
                return (
                  this.subscriptions.set(this.requestId, l),
                  (this.requestId += 1),
                  this.connectPromise.then(() => {
                    this.socket.send(JSON.stringify(a));
                  }),
                  l.on('error', () => {}),
                  l
                );
              }
              unsubscribe(e) {
                if (!e) return;
                this.subscriptions.delete(e.id);
                let t = { op: u.UNSUBSCRIBE, requestId: e.id };
                this.connectPromise.then(() => {
                  this.socket.send(JSON.stringify(t));
                });
              }
              open() {
                let e = this._getWebSocketImplementation();
                e
                  ? (this.state !== l.RECONNECTING && (this.state = l.CONNECTING),
                    (this.socket = new e(this.serverURL)),
                    (this.socket.onopen = () => {
                      this._handleWebSocketOpen();
                    }),
                    (this.socket.onmessage = e => {
                      this._handleWebSocketMessage(e);
                    }),
                    (this.socket.onclose = () => {
                      this._handleWebSocketClose();
                    }),
                    (this.socket.onerror = e => {
                      this._handleWebSocketError(e);
                    }))
                  : this.emit(d.ERROR, 'Can not find WebSocket implementation');
              }
              resubscribe() {
                this.subscriptions.forEach((e, t) => {
                  let r = e.query,
                    s = r.toJSON(),
                    n = s.where,
                    i = s.keys ? s.keys.split(',') : void 0,
                    a = r.className,
                    o = e.sessionToken,
                    l = {
                      op: u.SUBSCRIBE,
                      requestId: t,
                      query: { className: a, where: n, fields: i },
                    };
                  o && (l.sessionToken = o),
                    this.connectPromise.then(() => {
                      this.socket.send(JSON.stringify(l));
                    });
                });
              }
              close() {
                if (this.state !== l.INITIALIZED && this.state !== l.DISCONNECTED) {
                  (this.state = l.DISCONNECTED), this.socket.close();
                  for (let e of this.subscriptions.values()) e.emit(f.CLOSE);
                  this._handleReset(), this.emit(d.CLOSE);
                }
              }
              _getWebSocketImplementation() {
                return 'function' == typeof WebSocket || 'object' == typeof WebSocket
                  ? WebSocket
                  : null;
              }
              _handleReset() {
                (this.attempts = 1),
                  (this.id = 0),
                  (this.requestId = 1),
                  (this.connectPromise = new i.default()),
                  (this.subscriptions = new Map());
              }
              _handleWebSocketOpen() {
                this.attempts = 1;
                let e = {
                  op: u.CONNECT,
                  applicationId: this.applicationId,
                  javascriptKey: this.javascriptKey,
                  masterKey: this.masterKey,
                  sessionToken: this.sessionToken,
                  allowAnonymousKey: this.allowAnonymousKey,
                };
                this.socket.send(JSON.stringify(e));
              }
              _handleWebSocketMessage(e) {
                let t = e.data;
                'string' == typeof t && (t = JSON.parse(t));
                let r = null;
                switch ((t.requestId && (r = this.subscriptions.get(t.requestId)), t.op)) {
                  case c.CONNECTED:
                    this.state === l.RECONNECTING && this.resubscribe(),
                      this.emit(d.OPEN),
                      (this.id = t.clientId),
                      this.connectPromise.resolve(),
                      (this.state = l.CONNECTED);
                    break;
                  case c.SUBSCRIBED:
                    r && r.emit(f.OPEN);
                    break;
                  case c.ERROR:
                    t.requestId ? r && r.emit(f.ERROR, t.error) : this.emit(d.ERROR, t.error);
                    break;
                  case c.UNSUBSCRIBED:
                    break;
                  default:
                    let e = t.object.className;
                    delete t.object.__type, delete t.object.className;
                    let s = new a.default(e);
                    if ((s._finishFetch(t.object), !r)) break;
                    r.emit(t.op, s);
                }
              }
              _handleWebSocketClose() {
                if (this.state !== l.DISCONNECTED) {
                  (this.state = l.CLOSED), this.emit(d.CLOSE);
                  for (let e of this.subscriptions.values()) e.emit(f.CLOSE);
                  this._handleReconnect();
                }
              }
              _handleWebSocketError(e) {
                this.emit(d.ERROR, e);
                for (let e of this.subscriptions.values()) e.emit(f.ERROR);
                this._handleReconnect();
              }
              _handleReconnect() {
                if (this.state === l.DISCONNECTED) return;
                this.state = l.RECONNECTING;
                let e = h(this.attempts);
                this.reconnectHandle && clearTimeout(this.reconnectHandle),
                  (this.reconnectHandle = setTimeout(
                    (() => {
                      this.attempts++, (this.connectPromise = new i.default()), this.open();
                    }).bind(this),
                    e
                  ));
              }
            };
          },
          function(e, t, r) {
            'use strict';
            e.exports = r(27);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var n = s(r(10)),
              i = s(r(6)),
              a = s(r(2)),
              o = s(r(36)),
              l = (function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t.default = e), t;
              })(r(8)),
              u = s(r(37)),
              c = {
                initialize(e, t) {
                  a.default.get('IS_NODE') &&
                    !Object({ MMBS_BUILD: 'browser' }).SERVER_RENDERING &&
                    console.log(
                      "It looks like you're using the browser version of the SDK in a node.js environment. You should require('parse/node') instead."
                    ),
                    c._initialize(e, t);
                },
                _initialize(e, t, r, s) {
                  a.default.set('APPLICATION_ID', e),
                    a.default.set('JAVASCRIPT_KEY', t),
                    a.default.set('MASTER_KEY', r),
                    a.default.set('USE_MASTER_KEY', !1),
                    a.default.set('ALLOW_ANONYMOUS_KEY', s);
                },
                setAsyncStorage(e) {
                  a.default.setAsyncStorage(e);
                },
              };
            Object.defineProperty(c, 'applicationId', {
              get: () => a.default.get('APPLICATION_ID'),
              set(e) {
                a.default.set('APPLICATION_ID', e);
              },
            }),
              Object.defineProperty(c, 'javaScriptKey', {
                get: () => a.default.get('JAVASCRIPT_KEY'),
                set(e) {
                  a.default.set('JAVASCRIPT_KEY', e);
                },
              }),
              Object.defineProperty(c, 'masterKey', {
                get: () => a.default.get('MASTER_KEY'),
                set(e) {
                  a.default.set('MASTER_KEY', e);
                },
              }),
              Object.defineProperty(c, 'allowAnonymousKey', {
                get: () => a.default.get('ALLOW_ANONYMOUS_KEY'),
                set(e) {
                  a.default.set('ALLOW_ANONYMOUS_KEY', e);
                },
              }),
              Object.defineProperty(c, 'useAllowAnonymousKey', {
                get: () => a.default.get('USE_ALLOW_ANONYMOUS_KEY'),
                set(e) {
                  a.default.set('USE_ALLOW_ANONYMOUS_KEY', e);
                },
              }),
              Object.defineProperty(c, 'serverURL', {
                get: () => a.default.get('SERVER_URL'),
                set(e) {
                  a.default.set('SERVER_URL', e);
                },
              }),
              Object.defineProperty(c, 'liveQueryServerURL', {
                get: () => a.default.get('LIVEQUERY_SERVER_URL'),
                set(e) {
                  a.default.set('LIVEQUERY_SERVER_URL', e);
                },
              }),
              (c.ACL = r(7).default),
              (c.Analytics = r(38)),
              (c.Cloud = r(39)),
              (c.CoreManager = r(2)),
              (c.Config = r(40).default),
              (c.Error = r(3).default),
              (c.File = r(4).default),
              (c.GeoPoint = r(9).default),
              (c.Polygon = r(12).default),
              (c.Installation = r(41).default),
              (c.Object = r(1).default),
              (c.Op = {
                Set: l.SetOp,
                Unset: l.UnsetOp,
                Increment: l.IncrementOp,
                Add: l.AddOp,
                Remove: l.RemoveOp,
                AddUnique: l.AddUniqueOp,
                Relation: l.RelationOp,
              }),
              (c.Promise = r(0).default),
              (c.Push = r(42)),
              (c.Query = r(13).default),
              (c.Relation = r(5).default),
              (c.Role = r(17).default),
              (c.Schema = r(43).default),
              (c.Session = r(24).default),
              (c.Storage = r(11)),
              (c.User = r(15).default),
              (c.LiveQuery = r(44).default),
              (c.LiveQueryClient = r(25).default),
              (c._request = function(...e) {
                return a.default.getRESTController().request.apply(null, e);
              }),
              (c._ajax = function(...e) {
                return a.default.getRESTController().ajax.apply(null, e);
              }),
              (c._decode = function(e, t) {
                return (0, n.default)(t);
              }),
              (c._encode = function(e, t, r) {
                return (0, i.default)(e, r);
              }),
              (c._getInstallationId = function() {
                return a.default.getInstallationController().currentInstallationId();
              }),
              a.default.setInstallationController(o.default),
              a.default.setRESTController(u.default),
              (c.Mmbs = c),
              (e.exports = { Mmbs: c });
          },
          function(e, t) {
            e.exports = {
              name: 'parse',
              version: '1.11.0',
              description: 'The Mmbs JavaScript SDK',
              homepage: 'https://www.cmetamap.com',
              keywords: ['cloud', 'mobile', 'api'],
              license: 'BSD-3-Clause',
              repository: { type: 'git', url: 'https://github.com/MmbsPlatform/Mmbs-SDK-JS' },
              bugs: 'https://github.com/MmbsPlatform/Mmbs-SDK-JS/issues',
              files: [
                'index.js',
                'node.js',
                'react-native.js',
                'dist/',
                'lib/',
                'LICENSE',
                'PATENTS',
                'README.md',
              ],
              browser: { 'react-native': !1 },
              dependencies: { 'babel-runtime': '^6.11.6', ws: '^3.3.1', xmlhttprequest: '^1.7.0' },
              devDependencies: {
                babel: '^6.23.0',
                'babel-cli': '^6.26.0',
                'babel-core': '^6.26.0',
                'babel-eslint': '^8.0.3',
                'babel-jest': '^19.0.0',
                'babel-loader': '^7.1.2',
                'babel-plugin-flow-comments': '^6.3.19',
                'babel-plugin-inline-package-json': '~2.0.0',
                'babel-plugin-minify-dead-code-elimination': '0.1.4',
                'babel-plugin-syntax-flow': '^6.18.0',
                'babel-plugin-transform-flow-strip-types': '^6.22.0',
                'babel-plugin-transform-inline-environment-variables': '^6.8.0',
                'babel-plugin-transform-runtime': '^6.15.0',
                'babel-preset-env': '^1.6.1',
                'babel-preset-es2015': '^6.24.1',
                'babel-preset-react': '^6.11.1',
                'babel-preset-stage-2': '^6.13.0',
                'babel-preset-stage-3': '^6.24.1',
                'babel-register': '^6.26.0',
                browserify: '^14.3.0',
                'codecov.io': '^0.1.6',
                'cross-env': '^5.1.1',
                eslint: '^4.12.1',
                'eslint-plugin-flowtype': '^2.39.1',
                gulp: '^3.9.1',
                'gulp-babel': '^6.1.2',
                'gulp-derequire': '^2.1.0',
                'gulp-insert': '^0.5.0',
                'gulp-rename': '^1.2.2',
                'gulp-replace': '^0.5.4',
                'gulp-uglify': '^2.1.2',
                'jasmine-reporters': '~2.2.1',
                'jest-cli': '^19.0.2',
                jsdoc: '^3.5.5',
                'jsdoc-babel': '^0.3.0',
                minami: '^1.2.3',
                'uglifyjs-webpack-plugin': '^1.1.2',
                'vinyl-source-stream': '^1.1.0',
                webpack: '^3.10.0',
                'webpack-node-externals': '^1.6.0',
              },
              scripts: {
                build: './build_releases.sh',
                release: './build_releases.sh && npm publish',
                test: 'MMBS_BUILD=node jest',
                docs: 'jsdoc -c ./jsdoc-conf.json ./src',
                release_docs: './release_docs.sh',
              },
              jest: {
                automock: !0,
                collectCoverage: !0,
                roots: ['src/'],
                testPathIgnorePatterns: ['/node_modules/', '/test_helpers/'],
                transform: { '.*': './babel-jest.js' },
                setupTestFrameworkScriptFile: './setup-jest.js',
              },
            };
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e) {
              if ('object' != typeof e) return !0;
              if (e instanceof o.default) return !0;
              if (e instanceof a.default) return !!e.id;
              if (e instanceof i.default) return !!e.url();
              if (Array.isArray(e)) {
                for (var t = 0; t < e.length; t++) if (!n(e[t])) return !1;
                return !0;
              }
              for (var r in e) if (!n(e[r])) return !1;
              return !0;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                if (!(e instanceof a.default)) return !0;
                var t = e.attributes;
                for (var r in t) if (!n(t[r])) return !1;
                return !0;
              });
            var i = s(r(4)),
              a = s(r(1)),
              o = s(r(5));
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e, t) {
              if (typeof e != typeof t) return !1;
              if (!e || 'object' != typeof e) return e === t;
              if (Array.isArray(e) || Array.isArray(t)) {
                if (!Array.isArray(e) || !Array.isArray(t)) return !1;
                if (e.length !== t.length) return !1;
                for (var r = e.length; r--; ) if (!n(e[r], t[r])) return !1;
                return !0;
              }
              if (
                e instanceof i.default ||
                e instanceof a.default ||
                e instanceof o.default ||
                e instanceof l.default
              )
                return e.equals(t);
              if (Object.keys(e).length !== Object.keys(t).length) return !1;
              for (var s in e) if (!n(e[s], t[s])) return !1;
              return !0;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
            var i = s(r(7)),
              a = s(r(4)),
              o = s(r(9)),
              l = s(r(1));
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e) {
                var t = new RegExp(
                  '^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$'
                ).exec(e);
                if (!t) return null;
                var r = t[1] || 0,
                  s = (t[2] || 1) - 1,
                  n = t[3] || 0,
                  i = t[4] || 0,
                  a = t[5] || 0,
                  o = t[6] || 0,
                  l = t[8] || 0;
                return new Date(Date.UTC(r, s, n, i, a, o, l));
              });
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              let t = l[e.className];
              return t ? t[e.id] || null : null;
            }
            function n(e, t) {
              let r = s(e);
              return (
                r ||
                (l[e.className] || (l[e.className] = {}),
                t || (t = o.defaultState()),
                (r = l[e.className][e.id] = t))
              );
            }
            function i(e) {
              let t = s(e);
              return t ? t.serverData : {};
            }
            function a(e) {
              let t = s(e);
              return t ? t.pendingOps : [{}];
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.getState = s),
              (t.initializeState = n),
              (t.removeState = function(e) {
                let t = s(e);
                return null === t ? null : (delete l[e.className][e.id], t);
              }),
              (t.getServerData = i),
              (t.setServerData = function(e, t) {
                let r = n(e).serverData;
                o.setServerData(r, t);
              }),
              (t.getPendingOps = a),
              (t.setPendingOp = function(e, t, r) {
                let s = n(e).pendingOps;
                o.setPendingOp(s, t, r);
              }),
              (t.pushPendingState = function(e) {
                let t = n(e).pendingOps;
                o.pushPendingState(t);
              }),
              (t.popPendingState = function(e) {
                let t = n(e).pendingOps;
                return o.popPendingState(t);
              }),
              (t.mergeFirstPendingState = function(e) {
                let t = a(e);
                o.mergeFirstPendingState(t);
              }),
              (t.getObjectCache = function(e) {
                let t = s(e);
                return t ? t.objectCache : {};
              }),
              (t.estimateAttribute = function(e, t) {
                let r = i(e),
                  s = a(e);
                return o.estimateAttribute(r, s, e.className, e.id, t);
              }),
              (t.estimateAttributes = function(e) {
                let t = i(e),
                  r = a(e);
                return o.estimateAttributes(t, r, e.className, e.id);
              }),
              (t.commitServerChanges = function(e, t) {
                let r = n(e);
                o.commitServerChanges(r.serverData, r.objectCache, t);
              }),
              (t.enqueueTask = function(e, t) {
                return n(e).tasks.enqueue(t);
              }),
              (t.clearAllState = function() {
                l = {};
              }),
              (t.duplicateState = function(e, t) {
                t.id = e.id;
              });
            var o = (function(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(r(21));
            let l = {};
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return u.get(e) || null;
            }
            function n(e, t) {
              let r = s(e);
              return (
                r ||
                (t ||
                  (t = {
                    serverData: {},
                    pendingOps: [{}],
                    objectCache: {},
                    tasks: new l.default(),
                    existed: !1,
                  }),
                (r = t),
                u.set(e, r),
                r)
              );
            }
            function i(e) {
              let t = s(e);
              return t ? t.serverData : {};
            }
            function a(e) {
              let t = s(e);
              return t ? t.pendingOps : [{}];
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.getState = s),
              (t.initializeState = n),
              (t.removeState = function(e) {
                let t = s(e);
                return null === t ? null : (u.delete(e), t);
              }),
              (t.getServerData = i),
              (t.setServerData = function(e, t) {
                let r = n(e).serverData;
                o.setServerData(r, t);
              }),
              (t.getPendingOps = a),
              (t.setPendingOp = function(e, t, r) {
                let s = n(e).pendingOps;
                o.setPendingOp(s, t, r);
              }),
              (t.pushPendingState = function(e) {
                let t = n(e).pendingOps;
                o.pushPendingState(t);
              }),
              (t.popPendingState = function(e) {
                let t = n(e).pendingOps;
                return o.popPendingState(t);
              }),
              (t.mergeFirstPendingState = function(e) {
                let t = a(e);
                o.mergeFirstPendingState(t);
              }),
              (t.getObjectCache = function(e) {
                let t = s(e);
                return t ? t.objectCache : {};
              }),
              (t.estimateAttribute = function(e, t) {
                let r = i(e),
                  s = a(e);
                return o.estimateAttribute(r, s, e.className, e.id, t);
              }),
              (t.estimateAttributes = function(e) {
                let t = i(e),
                  r = a(e);
                return o.estimateAttributes(t, r, e.className, e.id);
              }),
              (t.commitServerChanges = function(e, t) {
                let r = n(e);
                o.commitServerChanges(r.serverData, r.objectCache, t);
              }),
              (t.enqueueTask = function(e, t) {
                return n(e).tasks.enqueue(t);
              }),
              (t.duplicateState = function(e, t) {
                let r = n(e),
                  s = n(t);
                for (let e in r.serverData) s.serverData[e] = r.serverData[e];
                for (let e = 0; e < r.pendingOps.length; e++)
                  for (let t in r.pendingOps[e]) s.pendingOps[e][t] = r.pendingOps[e][t];
                for (let e in r.objectCache) s.objectCache[e] = r.objectCache[e];
                s.existed = r.existed;
              }),
              (t.clearAllState = function() {
                u = new WeakMap();
              });
            var o = (function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t.default = e), t;
              })(r(21)),
              l = (function(e) {
                return e && e.__esModule ? e : { default: e };
              })(r(22));
            let u = new WeakMap();
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e, t, r, s) {
              if (e instanceof a.default) {
                if (!e.id && r) throw new Error('Cannot create a pointer to an unsaved Object.');
                var l = e.className + ':' + e._getId();
                if (!t.objects[l]) {
                  t.objects[l] = !e.dirty() || e;
                  var u = e.attributes;
                  for (var c in u) 'object' == typeof u[c] && n(u[c], t, !s, s);
                }
              } else if (e instanceof i.default)
                !e.url() && t.files.indexOf(e) < 0 && t.files.push(e);
              else if (!(e instanceof o.default)) {
                Array.isArray(e) &&
                  e.forEach(e => {
                    'object' == typeof e && n(e, t, r, s);
                  });
                for (var d in e) 'object' == typeof e[d] && n(e[d], t, r, s);
              }
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t) {
                var r = { objects: {}, files: [] },
                  s = e.className + ':' + e._getId();
                r.objects[s] = !e.dirty() || e;
                var i = e.attributes;
                for (var a in i) 'object' == typeof i[a] && n(i[a], r, !1, !!t);
                var o = [];
                for (var l in r.objects) l !== s && !0 !== r.objects[l] && o.push(r.objects[l]);
                return o.concat(r.files);
              });
            var i = s(r(4)),
              a = s(r(1)),
              o = s(r(5));
          },
          function(e, t, r) {
            'use strict';
            !(function(e) {
              e && e.__esModule;
            })(r(0));
            var s = {
              async: 0,
              getItem: e => localStorage.getItem(e),
              setItem(e, t) {
                try {
                  localStorage.setItem(e, t);
                } catch (e) {}
              },
              removeItem(e) {
                localStorage.removeItem(e);
              },
              clear() {
                localStorage.clear();
              },
            };
            e.exports = s;
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n() {
              return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            }
            s(r(2));
            var i = s(r(0)),
              a = s(r(11)),
              o = null,
              l = {
                currentInstallationId() {
                  if ('string' == typeof o) return i.default.as(o);
                  var e = a.default.generatePath('installationId');
                  return a.default
                    .getItemAsync(e)
                    .then(
                      t =>
                        t
                          ? ((o = t), t)
                          : ((t =
                              n() +
                              n() +
                              '-' +
                              n() +
                              '-' +
                              n() +
                              '-' +
                              n() +
                              '-' +
                              n() +
                              n() +
                              n()),
                            a.default.setItemAsync(e, t).then(() => ((o = t), t)))
                    );
                },
                _clearCache() {
                  o = null;
                },
                _setInstallationIdCache(e) {
                  o = e;
                },
              };
            e.exports = l;
          },
          function(e, t, r) {
            'use strict';
            (function(t) {
              function s(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var n = s(r(2)),
                i = s(r(3)),
                a = s(r(0)),
                o = (s(r(11)), null);
              'undefined' != typeof XMLHttpRequest && (o = XMLHttpRequest);
              var l = !1;
              'undefined' == typeof XDomainRequest ||
                'withCredentials' in new XMLHttpRequest() ||
                (l = !0);
              const u = {
                ajax(e, r, s, u) {
                  if (l)
                    return (function(e, t, r) {
                      var s = new a.default(),
                        n = new XDomainRequest();
                      return (
                        (n.onload = function() {
                          var e;
                          try {
                            e = JSON.parse(n.responseText);
                          } catch (e) {
                            s.reject(e);
                          }
                          e && s.resolve(e);
                        }),
                        (n.onerror = n.ontimeout = function() {
                          var e = {
                            responseText: JSON.stringify({
                              code: i.default.X_DOMAIN_REQUEST,
                              error: "IE's XDomainRequest does not supply error info.",
                            }),
                          };
                          s.reject(e);
                        }),
                        (n.onprogress = function() {}),
                        n.open(e, t),
                        n.send(r),
                        s
                      );
                    })(e, r, s);
                  var c = new a.default(),
                    d = 0,
                    f = function() {
                      if (null == o)
                        throw new Error(
                          'Cannot make a request: No definition of XMLHttpRequest was found.'
                        );
                      var i = !1,
                        a = new o();
                      (a.onreadystatechange = function() {
                        if (4 === a.readyState && !i)
                          if (((i = !0), a.status >= 200 && a.status < 300)) {
                            var e;
                            try {
                              e = JSON.parse(a.responseText);
                            } catch (e) {
                              c.reject(e.toString());
                            }
                            e && c.resolve(e, a.status, a);
                          } else if (a.status >= 500 || 0 === a.status)
                            if (++d < n.default.get('REQUEST_ATTEMPT_LIMIT')) {
                              var t = Math.round(125 * Math.random() * Math.pow(2, d));
                              setTimeout(f, t);
                            } else
                              0 === a.status
                                ? c.reject('Unable to connect to the Mmbs API')
                                : c.reject(a);
                          else c.reject(a);
                      }),
                        'string' != typeof (u = u || {})['Content-Type'] &&
                          (u['Content-Type'] = 'text/plain'),
                        n.default.get('IS_NODE') &&
                          (u['User-Agent'] =
                            'Mmbs/' +
                            n.default.get('VERSION') +
                            ' (NodeJS ' +
                            t.versions.node +
                            ')'),
                        a.open(e, r, !0);
                      for (var l in u) a.setRequestHeader(l, u[l]);
                      a.send(s);
                    };
                  return f(), c;
                },
                request(e, t, r, s) {
                  s = s || {};
                  var o = n.default.get('SERVER_URL');
                  '/' !== o[o.length - 1] && (o += '/'), (o += t);
                  var l = {};
                  if (r && 'object' == typeof r) for (var c in r) l[c] = r[c];
                  'POST' !== e && ((l._method = e), (e = 'POST')),
                    (l._ApplicationId = n.default.get('APPLICATION_ID'));
                  let d = n.default.get('JAVASCRIPT_KEY');
                  d && (l._JavaScriptKey = d), (l._ClientVersion = n.default.get('VERSION'));
                  var f = s.useAllowAnonymousKey;
                  if ((void 0 === f && (f = n.default.get('USE_ALLOW_ANONYMOUS_KEY')), f)) {
                    if (!n.default.get('ALLOW_ANONYMOUS_KEY'))
                      throw new Error(
                        'Cannot use the AllowAnonymous Key, it has not been provided.'
                      );
                    l._AllowAnonymousKey = n.default.get('ALLOW_ANONYMOUS_KEY');
                  }
                  var h = s.useMasterKey;
                  if ((void 0 === h && (h = n.default.get('USE_MASTER_KEY')), h)) {
                    if (!n.default.get('MASTER_KEY'))
                      throw new Error('Cannot use the Master Key, it has not been provided.');
                    delete l._AllowAnonymousKey,
                      delete l._JavaScriptKey,
                      (l._MasterKey = n.default.get('MASTER_KEY'));
                  }
                  n.default.get('FORCE_REVOCABLE_SESSION') && (l._RevocableSession = '1');
                  var p,
                    _ = s.installationId;
                  if (_ && 'string' == typeof _) p = a.default.as(_);
                  else {
                    p = n.default.getInstallationController().currentInstallationId();
                  }
                  return p
                    .then(e => {
                      l._InstallationId = e;
                      var t = n.default.getUserController();
                      return s && 'string' == typeof s.sessionToken
                        ? a.default.as(s.sessionToken)
                        : t
                          ? t
                              .currentUserAsync()
                              .then(
                                e => (e ? a.default.as(e.getSessionToken()) : a.default.as(null))
                              )
                          : a.default.as(null);
                    })
                    .then(t => {
                      t && (l._SessionToken = t);
                      var r = JSON.stringify(l);
                      return u.ajax(e, o, r);
                    })
                    .then(null, function(e) {
                      var t;
                      if (e && e.responseText)
                        try {
                          var r = JSON.parse(e.responseText);
                          t = new i.default(r.code, r.error);
                        } catch (r) {
                          t = new i.default(
                            i.default.INVALID_JSON,
                            'Received an error with invalid JSON from Mmbs: ' + e.responseText
                          );
                        }
                      else
                        t = new i.default(
                          i.default.CONNECTION_FAILED,
                          'XMLHttpRequest failed: ' + JSON.stringify(e)
                        );
                      return a.default.error(t);
                    });
                },
                _setXHR(e) {
                  o = e;
                },
              };
              e.exports = u;
            }.call(t, r(14)));
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.track = function(e, t, r) {
                if (
                  ((e = e || ''),
                  (e = e.replace(/^\s*/, '')),
                  0 === (e = e.replace(/\s*$/, '')).length)
                )
                  throw new TypeError('A name for the custom event must be provided');
                for (var n in t)
                  if ('string' != typeof n || 'string' != typeof t[n])
                    throw new TypeError(
                      'track() dimensions expects keys and values of type "string".'
                    );
                return (
                  (r = r || {}),
                  s.default
                    .getAnalyticsController()
                    .track(e, t)
                    ._thenRunCallbacks(r)
                );
              });
            var s = (function(e) {
                return e && e.__esModule ? e : { default: e };
              })(r(2)),
              n = {
                track(e, t) {
                  var r = 'events/' + e;
                  return s.default.getRESTController().request('POST', r, { dimensions: t });
                },
              };
            s.default.setAnalyticsController(n);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.run = function(e, t, r) {
                if (((r = r || {}), 'string' != typeof e || 0 === e.length))
                  throw new TypeError('Cloud function name must be a string.');
                var s = {};
                return (
                  r.useMasterKey && (s.useMasterKey = r.useMasterKey),
                  r.sessionToken && (s.sessionToken = r.sessionToken),
                  n.default
                    .getCloudController()
                    .run(e, t, s)
                    ._thenRunCallbacks(r)
                );
              }),
              (t.runJob = function(e, t, r) {
                if (((r = r || {}), 'string' != typeof e || 0 === e.length))
                  throw new TypeError('Cloud job name must be a string.');
                var s = {};
                return (
                  r.useMasterKey && (s.useMasterKey = r.useMasterKey),
                  r.sessionToken && (s.sessionToken = r.sessionToken),
                  n.default
                    .getCloudController()
                    .runJob(e, t, s)
                    ._thenRunCallbacks(r)
                );
              });
            var n = s(r(2)),
              i = s(r(10)),
              a = s(r(6)),
              o = s(r(3)),
              l = s(r(0)),
              u = {
                run(e, t, r) {
                  var s = n.default.getRESTController(),
                    u = (0, a.default)(t, !0),
                    c = {};
                  r.hasOwnProperty('useMasterKey') && (c.useMasterKey = r.useMasterKey),
                    r.hasOwnProperty('sessionToken') && (c.sessionToken = r.sessionToken);
                  return s
                    .request('POST', 'functions/' + e, u, c)
                    .then(function(e) {
                      var t = (0, i.default)(e);
                      return t && t.hasOwnProperty('result')
                        ? l.default.as(t.result)
                        : l.default.error(
                            new o.default(
                              o.default.INVALID_JSON,
                              'The server returned an invalid response.'
                            )
                          );
                    })
                    ._thenRunCallbacks(r);
                },
                runJob(e, t, r) {
                  var s = n.default.getRESTController(),
                    u = (0, a.default)(t, !0),
                    c = {};
                  r.hasOwnProperty('useMasterKey') && (c.useMasterKey = r.useMasterKey),
                    r.hasOwnProperty('sessionToken') && (c.sessionToken = r.sessionToken);
                  return s
                    .request('POST', 'jobs/' + e, u, c)
                    .then(function(e) {
                      var t = (0, i.default)(e);
                      return t && t.hasOwnProperty('result')
                        ? l.default.as(t.result)
                        : l.default.error(
                            new o.default(
                              o.default.INVALID_JSON,
                              'The server returned an invalid response.'
                            )
                          );
                    })
                    ._thenRunCallbacks(r);
                },
              };
            n.default.setCloudController(u);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n(e) {
              try {
                var t = JSON.parse(e);
                if (t && 'object' == typeof t) return (0, a.default)(t);
              } catch (e) {
                return null;
              }
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = s(r(2)),
              a = s(r(10)),
              o = (s(r(6)), s(r(20))),
              l = s(r(3)),
              u = s(r(0)),
              c = s(r(11));
            class d {
              constructor() {
                (this.attributes = {}), (this._escapedAttributes = {});
              }
              get(e) {
                return this.attributes[e];
              }
              escape(e) {
                var t = this._escapedAttributes[e];
                if (t) return t;
                var r = this.attributes[e],
                  s = '';
                return (
                  null != r && (s = (0, o.default)(r.toString())),
                  (this._escapedAttributes[e] = s),
                  s
                );
              }
              static current() {
                return i.default.getConfigController().current();
              }
              static get(e) {
                e = e || {};
                return i.default
                  .getConfigController()
                  .get()
                  ._thenRunCallbacks(e);
              }
            }
            var f = null,
              h = {
                current() {
                  if (f) return f;
                  var e,
                    t = new d(),
                    r = c.default.generatePath('currentConfig');
                  if (!c.default.async()) {
                    if ((e = c.default.getItem(r))) {
                      var s = n(e);
                      s && ((t.attributes = s), (f = t));
                    }
                    return t;
                  }
                  return c.default.getItemAsync(r).then(e => {
                    if (e) {
                      var r = n(e);
                      r && ((t.attributes = r), (f = t));
                    }
                    return t;
                  });
                },
                get: () =>
                  i.default
                    .getRESTController()
                    .request('GET', 'config', {}, {})
                    .then(e => {
                      if (!e || !e.params) {
                        var t = new l.default(
                          l.default.INVALID_JSON,
                          'Config JSON response invalid.'
                        );
                        return u.default.error(t);
                      }
                      var r = new d();
                      r.attributes = {};
                      for (var s in e.params) r.attributes[s] = (0, a.default)(e.params[s]);
                      return (
                        (f = r),
                        c.default
                          .setItemAsync(
                            c.default.generatePath('currentConfig'),
                            JSON.stringify(e.params)
                          )
                          .then(() => r)
                      );
                    }),
              };
            i.default.setConfigController(h), (t.default = d);
          },
          function(e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var s = (function(e) {
              return e && e.__esModule ? e : { default: e };
            })(r(1));
            class n extends s.default {
              constructor(e) {
                if ((super('_Installation'), e && 'object' == typeof e && !this.set(e || {})))
                  throw new Error("Can't create an invalid Session");
              }
            }
            (t.default = n), s.default.registerSubclass('_Installation', n);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.send = function(e, t) {
                if (
                  ((t = t || {}),
                  e.where && e.where instanceof i.default && (e.where = e.where.toJSON().where),
                  e.push_time &&
                    'object' == typeof e.push_time &&
                    (e.push_time = e.push_time.toJSON()),
                  e.expiration_time &&
                    'object' == typeof e.expiration_time &&
                    (e.expiration_time = e.expiration_time.toJSON()),
                  e.expiration_time && e.expiration_interval)
                )
                  throw new Error('expiration_time and expiration_interval cannot both be set.');
                return n.default
                  .getPushController()
                  .send(e, { useMasterKey: t.useMasterKey })
                  ._thenRunCallbacks(t);
              });
            var n = s(r(2)),
              i = s(r(13)),
              a = {
                send: (e, t) =>
                  n.default
                    .getRESTController()
                    .request('POST', 'push', e, { useMasterKey: !!t.useMasterKey })
                    ._thenRunCallbacks(t),
              };
            n.default.setPushController(a);
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(2));
            s(r(0));
            const i = [
              'String',
              'Number',
              'Boolean',
              'Date',
              'File',
              'GeoPoint',
              'Array',
              'Object',
              'Pointer',
              'Relation',
            ];
            const a = {
              send(e, t, r, s) {
                const i = n.default.getRESTController(),
                  a = { useMasterKey: !0 };
                return (
                  s.hasOwnProperty('sessionToken') && (a.sessionToken = s.sessionToken),
                  i.request(t, `schemas/${e}`, r, a)
                );
              },
              get(e, t) {
                return this.send(e, 'GET', {}, t);
              },
              create(e, t, r) {
                return this.send(e, 'POST', t, r);
              },
              update(e, t, r) {
                return this.send(e, 'PUT', t, r);
              },
              delete(e, t) {
                return this.send(e, 'DELETE', {}, t);
              },
            };
            n.default.setSchemaController(a),
              (t.default = class {
                constructor(e) {
                  'string' == typeof e &&
                    ('User' === e && n.default.get('PERFORM_USER_REWRITE')
                      ? (this.className = '_User')
                      : (this.className = e)),
                    (this._fields = {}),
                    (this._indexes = {}),
                    (this._classLevelPermissions = {});
                }
                static all(e) {
                  return (
                    (e = e || {}),
                    n.default
                      .getSchemaController()
                      .get('', e)
                      .then(e => {
                        if (0 === e.results.length) throw new Error('Schema not found.');
                        return e.results;
                      })
                      ._thenRunCallbacks(e)
                  );
                }
                get(e) {
                  return (
                    this.assertClassName(),
                    (e = e || {}),
                    n.default
                      .getSchemaController()
                      .get(this.className, e)
                      .then(e => {
                        if (!e) throw new Error('Schema not found.');
                        return (this._classLevelPermissions = e.classLevelPermissions), e;
                      })
                      ._thenRunCallbacks(e)
                  );
                }
                save(e) {
                  this.assertClassName(), (e = e || {});
                  const t = n.default.getSchemaController(),
                    r = {
                      className: this.className,
                      fields: this._fields,
                      indexes: this._indexes,
                      classLevelPermissions: this._classLevelPermissions,
                    };
                  return t
                    .create(this.className, r, e)
                    .then(e => e)
                    ._thenRunCallbacks(e);
                }
                update(e) {
                  this.assertClassName(), (e = e || {});
                  const t = n.default.getSchemaController(),
                    r = {
                      className: this.className,
                      fields: this._fields,
                      indexes: this._indexes,
                      classLevelPermissions: this._classLevelPermissions,
                    };
                  return (
                    (this._fields = {}),
                    (this._indexes = {}),
                    (this._classLevelPermissions = {}),
                    t
                      .update(this.className, r, e)
                      .then(e => e)
                      ._thenRunCallbacks(e)
                  );
                }
                delete(e) {
                  return (
                    this.assertClassName(),
                    (e = e || {}),
                    n.default
                      .getSchemaController()
                      .delete(this.className, e)
                      .then(e => e)
                      ._thenRunCallbacks(e)
                  );
                }
                assertClassName() {
                  if (!this.className)
                    throw new Error('You must set a Class Name before making any request.');
                }
                addField(e, t) {
                  if (((t = t || 'String'), !e)) throw new Error('field name may not be null.');
                  if (-1 === i.indexOf(t)) throw new Error(`${t} is not a valid type.`);
                  return (this._fields[e] = { type: t }), this;
                }
                addIndex(e, t) {
                  if (!e) throw new Error('index name may not be null.');
                  if (!t) throw new Error('index may not be null.');
                  return (this._indexes[e] = t), this;
                }
                addString(e) {
                  return this.addField(e, 'String');
                }
                addNumber(e) {
                  return this.addField(e, 'Number');
                }
                addBoolean(e) {
                  return this.addField(e, 'Boolean');
                }
                addDate(e) {
                  return this.addField(e, 'Date');
                }
                addFile(e) {
                  return this.addField(e, 'File');
                }
                addGeoPoint(e) {
                  return this.addField(e, 'GeoPoint');
                }
                addArray(e) {
                  return this.addField(e, 'Array');
                }
                addObject(e) {
                  return this.addField(e, 'Object');
                }
                addPointer(e, t) {
                  if (!e) throw new Error('field name may not be null.');
                  if (!t) throw new Error('You need to set the targetClass of the Pointer.');
                  return (this._fields[e] = { type: 'Pointer', targetClass: t }), this;
                }
                addRelation(e, t) {
                  if (!e) throw new Error('field name may not be null.');
                  if (!t) throw new Error('You need to set the targetClass of the Relation.');
                  return (this._fields[e] = { type: 'Relation', targetClass: t }), this;
                }
                deleteField(e) {
                  this._fields[e] = { __op: 'Delete' };
                }
                deleteIndex(e) {
                  this._indexes[e] = { __op: 'Delete' };
                }
                updateClassLevelPermissions(e, t, r) {
                  if (
                    [
                      'read',
                      'write',
                      'find',
                      'get',
                      'create',
                      'update',
                      'delete',
                      'addField',
                    ].indexOf(e) < 0
                  )
                    throw new Error(
                      'method name may not find.use [find, get, create, update, delete, addField]'
                    );
                  if (!t) throw new Error('You need to set the Role name.');
                  (this._classLevelPermissions = this._classLevelPermissions || {}),
                    'read' == e
                      ? ((this._classLevelPermissions.find =
                          this._classLevelPermissions.find || {}),
                        (this._classLevelPermissions.get = this._classLevelPermissions.get || {}))
                      : 'write' == e
                        ? ((this._classLevelPermissions.create =
                            this._classLevelPermissions.create || {}),
                          (this._classLevelPermissions.update =
                            this._classLevelPermissions.update || {}),
                          (this._classLevelPermissions.delete =
                            this._classLevelPermissions.delete || {}),
                          (this._classLevelPermissions.addField =
                            this._classLevelPermissions.addField || {}))
                        : (this._classLevelPermissions[e] = this._classLevelPermissions[e] || {});
                  var s = ('*' === t ? '' : 'role:') + t;
                  return (
                    r
                      ? 'read' == e
                        ? ((this._classLevelPermissions.find[s] = !0),
                          (this._classLevelPermissions.get[s] = !0))
                        : 'write' == e
                          ? ((this._classLevelPermissions.create[s] = !0),
                            (this._classLevelPermissions.update[s] = !0),
                            (this._classLevelPermissions.delete[s] = !0),
                            (this._classLevelPermissions.addField[s] = !0))
                          : (this._classLevelPermissions[e][s] = !0)
                      : 'read' == e
                        ? (delete this._classLevelPermissions.find[s],
                          delete this._classLevelPermissions.get[s])
                        : 'write' == e
                          ? (delete this._classLevelPermissions.create[s],
                            delete this._classLevelPermissions.update[s],
                            delete this._classLevelPermissions.delete[s],
                            delete this._classLevelPermissions.addField[s])
                          : delete this._classLevelPermissions[e][s],
                    this
                  );
                }
                getClassLevelPermissions() {
                  return this._classLevelPermissions;
                }
              });
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function n() {
              return l.default
                .getUserController()
                .currentUserAsync()
                .then(e => (e ? e.getSessionToken() : void 0));
            }
            function i() {
              return l.default.getLiveQueryController().getDefaultLiveQueryClient();
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var a = s(r(16)),
              o = s(r(25)),
              l = s(r(2)),
              u = s(r(0));
            let c = new a.default();
            (c.open = function() {
              l.default.getLiveQueryController().open();
            }),
              (c.close = function() {
                l.default.getLiveQueryController().close();
              }),
              c.on('error', () => {}),
              (t.default = c);
            let d;
            const f = {
              setDefaultLiveQueryClient(e) {
                d = e;
              },
              getDefaultLiveQueryClient: () =>
                d
                  ? u.default.as(d)
                  : n().then(e => {
                      let t = l.default.get('LIVEQUERY_SERVER_URL');
                      if (t && 0 !== t.indexOf('ws'))
                        throw new Error(
                          'You need to set a proper Mmbs LiveQuery server url before using LiveQueryClient'
                        );
                      if (!t) {
                        const e = l.default.get('SERVER_URL');
                        let r = 'ws://';
                        0 === e.indexOf('https') && (r = 'wss://');
                        (t = r + e.replace(/^https?:\/\//, '')),
                          l.default.set('LIVEQUERY_SERVER_URL', t);
                      }
                      const r = l.default.get('APPLICATION_ID'),
                        s = l.default.get('JAVASCRIPT_KEY'),
                        n = l.default.get('MASTER_KEY'),
                        i = l.default.get('ALLOW_ANONYMOUS_KEY');
                      return (
                        (d = new o.default({
                          applicationId: r,
                          serverURL: t,
                          javascriptKey: s,
                          masterKey: n,
                          sessionToken: e,
                          allowAnonymousKey: i,
                        })).on('error', e => {
                          c.emit('error', e);
                        }),
                        d.on('open', () => {
                          c.emit('open');
                        }),
                        d.on('close', () => {
                          c.emit('close');
                        }),
                        d
                      );
                    }),
              open() {
                i().then(e => {
                  this.resolve(e.open());
                });
              },
              close() {
                i().then(e => {
                  this.resolve(e.close());
                });
              },
              subscribe(e) {
                let t = new a.default();
                return (
                  i().then(r => {
                    r.shouldOpen() && r.open();
                    return n().then(s => {
                      let n = r.subscribe(e, s);
                      (t.id = n.id),
                        (t.query = n.query),
                        (t.sessionToken = n.sessionToken),
                        (t.unsubscribe = n.unsubscribe),
                        n.on('open', () => {
                          t.emit('open');
                        }),
                        n.on('create', e => {
                          t.emit('create', e);
                        }),
                        n.on('update', e => {
                          t.emit('update', e);
                        }),
                        n.on('enter', e => {
                          t.emit('enter', e);
                        }),
                        n.on('leave', e => {
                          t.emit('leave', e);
                        }),
                        n.on('delete', e => {
                          t.emit('delete', e);
                        }),
                        n.on('close', e => {
                          t.emit('close', e);
                        }),
                        n.on('error', e => {
                          t.emit('error', e);
                        }),
                        this.resolve();
                    });
                  }),
                  t
                );
              },
              unsubscribe(e) {
                i().then(t => {
                  this.resolve(t.unsubscribe(e));
                });
              },
              _clearCachedDefaultClient() {
                d = null;
              },
            };
            l.default.setLiveQueryController(f);
          },
          function(e, t, r) {
            'use strict';
            function s() {
              (this._events && Object.prototype.hasOwnProperty.call(this, '_events')) ||
                ((this._events = c(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }
            function n(e) {
              return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
            }
            function i(e, t, r, s) {
              var i, a, o;
              if ('function' != typeof r)
                throw new TypeError('"listener" argument must be a function');
              if (
                ((a = e._events)
                  ? (a.newListener &&
                      (e.emit('newListener', t, r.listener ? r.listener : r), (a = e._events)),
                    (o = a[t]))
                  : ((a = e._events = c(null)), (e._eventsCount = 0)),
                o)
              ) {
                if (
                  ('function' == typeof o
                    ? (o = a[t] = s ? [r, o] : [o, r])
                    : s ? o.unshift(r) : o.push(r),
                  !o.warned && (i = n(e)) && i > 0 && o.length > i)
                ) {
                  o.warned = !0;
                  var l = new Error(
                    'Possible EventEmitter memory leak detected. ' +
                      o.length +
                      ' "' +
                      String(t) +
                      '" listeners added. Use emitter.setMaxListeners() to increase limit.'
                  );
                  (l.name = 'MaxListenersExceededWarning'),
                    (l.emitter = e),
                    (l.type = t),
                    (l.count = o.length),
                    'object' == typeof console &&
                      console.warn &&
                      console.warn('%s: %s', l.name, l.message);
                }
              } else (o = a[t] = r), ++e._eventsCount;
              return e;
            }
            function a() {
              if (!this.fired)
                switch ((this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                arguments.length)) {
                  case 0:
                    return this.listener.call(this.target);
                  case 1:
                    return this.listener.call(this.target, arguments[0]);
                  case 2:
                    return this.listener.call(this.target, arguments[0], arguments[1]);
                  case 3:
                    return this.listener.call(
                      this.target,
                      arguments[0],
                      arguments[1],
                      arguments[2]
                    );
                  default:
                    for (var e = new Array(arguments.length), t = 0; t < e.length; ++t)
                      e[t] = arguments[t];
                    this.listener.apply(this.target, e);
                }
            }
            function o(e, t, r) {
              var s = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
                n = f.call(a, s);
              return (n.listener = r), (s.wrapFn = n), n;
            }
            function l(e) {
              var t = this._events;
              if (t) {
                var r = t[e];
                if ('function' == typeof r) return 1;
                if (r) return r.length;
              }
              return 0;
            }
            function u(e, t) {
              for (var r = new Array(t), s = 0; s < t; ++s) r[s] = e[s];
              return r;
            }
            var c =
                Object.create ||
                function(e) {
                  var t = function() {};
                  return (t.prototype = e), new t();
                },
              d =
                Object.keys ||
                function(e) {
                  var t = [];
                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                  return r;
                },
              f =
                Function.prototype.bind ||
                function(e) {
                  var t = this;
                  return function() {
                    return t.apply(e, arguments);
                  };
                };
            (e.exports = s),
              (s.EventEmitter = s),
              (s.prototype._events = void 0),
              (s.prototype._maxListeners = void 0);
            var h,
              p = 10;
            try {
              var _ = {};
              Object.defineProperty && Object.defineProperty(_, 'x', { value: 0 }), (h = 0 === _.x);
            } catch (e) {
              h = !1;
            }
            h
              ? Object.defineProperty(s, 'defaultMaxListeners', {
                  enumerable: !0,
                  get: function() {
                    return p;
                  },
                  set: function(e) {
                    if ('number' != typeof e || e < 0 || e != e)
                      throw new TypeError('"defaultMaxListeners" must be a positive number');
                    p = e;
                  },
                })
              : (s.defaultMaxListeners = p),
              (s.prototype.setMaxListeners = function(e) {
                if ('number' != typeof e || e < 0 || isNaN(e))
                  throw new TypeError('"n" argument must be a positive number');
                return (this._maxListeners = e), this;
              }),
              (s.prototype.getMaxListeners = function() {
                return n(this);
              }),
              (s.prototype.emit = function(e) {
                var t,
                  r,
                  s,
                  n,
                  i,
                  a,
                  o = 'error' === e;
                if ((a = this._events)) o = o && null == a.error;
                else if (!o) return !1;
                if (o) {
                  if ((arguments.length > 1 && (t = arguments[1]), t instanceof Error)) throw t;
                  var l = new Error('Unhandled "error" event. (' + t + ')');
                  throw ((l.context = t), l);
                }
                if (!(r = a[e])) return !1;
                var c = 'function' == typeof r;
                switch ((s = arguments.length)) {
                  case 1:
                    !(function(e, t, r) {
                      if (t) e.call(r);
                      else for (var s = e.length, n = u(e, s), i = 0; i < s; ++i) n[i].call(r);
                    })(r, c, this);
                    break;
                  case 2:
                    !(function(e, t, r, s) {
                      if (t) e.call(r, s);
                      else for (var n = e.length, i = u(e, n), a = 0; a < n; ++a) i[a].call(r, s);
                    })(r, c, this, arguments[1]);
                    break;
                  case 3:
                    !(function(e, t, r, s, n) {
                      if (t) e.call(r, s, n);
                      else
                        for (var i = e.length, a = u(e, i), o = 0; o < i; ++o) a[o].call(r, s, n);
                    })(r, c, this, arguments[1], arguments[2]);
                    break;
                  case 4:
                    !(function(e, t, r, s, n, i) {
                      if (t) e.call(r, s, n, i);
                      else
                        for (var a = e.length, o = u(e, a), l = 0; l < a; ++l)
                          o[l].call(r, s, n, i);
                    })(r, c, this, arguments[1], arguments[2], arguments[3]);
                    break;
                  default:
                    for (n = new Array(s - 1), i = 1; i < s; i++) n[i - 1] = arguments[i];
                    !(function(e, t, r, s) {
                      if (t) e.apply(r, s);
                      else for (var n = e.length, i = u(e, n), a = 0; a < n; ++a) i[a].apply(r, s);
                    })(r, c, this, n);
                }
                return !0;
              }),
              (s.prototype.addListener = function(e, t) {
                return i(this, e, t, !1);
              }),
              (s.prototype.on = s.prototype.addListener),
              (s.prototype.prependListener = function(e, t) {
                return i(this, e, t, !0);
              }),
              (s.prototype.once = function(e, t) {
                if ('function' != typeof t)
                  throw new TypeError('"listener" argument must be a function');
                return this.on(e, o(this, e, t)), this;
              }),
              (s.prototype.prependOnceListener = function(e, t) {
                if ('function' != typeof t)
                  throw new TypeError('"listener" argument must be a function');
                return this.prependListener(e, o(this, e, t)), this;
              }),
              (s.prototype.removeListener = function(e, t) {
                var r, s, n, i, a;
                if ('function' != typeof t)
                  throw new TypeError('"listener" argument must be a function');
                if (!(s = this._events)) return this;
                if (!(r = s[e])) return this;
                if (r === t || r.listener === t)
                  0 == --this._eventsCount
                    ? (this._events = c(null))
                    : (delete s[e],
                      s.removeListener && this.emit('removeListener', e, r.listener || t));
                else if ('function' != typeof r) {
                  for (n = -1, i = r.length - 1; i >= 0; i--)
                    if (r[i] === t || r[i].listener === t) {
                      (a = r[i].listener), (n = i);
                      break;
                    }
                  if (n < 0) return this;
                  0 === n
                    ? r.shift()
                    : (function(e, t) {
                        for (var r = t, s = r + 1, n = e.length; s < n; r += 1, s += 1) e[r] = e[s];
                        e.pop();
                      })(r, n),
                    1 === r.length && (s[e] = r[0]),
                    s.removeListener && this.emit('removeListener', e, a || t);
                }
                return this;
              }),
              (s.prototype.removeAllListeners = function(e) {
                var t, r, s;
                if (!(r = this._events)) return this;
                if (!r.removeListener)
                  return (
                    0 === arguments.length
                      ? ((this._events = c(null)), (this._eventsCount = 0))
                      : r[e] && (0 == --this._eventsCount ? (this._events = c(null)) : delete r[e]),
                    this
                  );
                if (0 === arguments.length) {
                  var n,
                    i = d(r);
                  for (s = 0; s < i.length; ++s)
                    'removeListener' !== (n = i[s]) && this.removeAllListeners(n);
                  return (
                    this.removeAllListeners('removeListener'),
                    (this._events = c(null)),
                    (this._eventsCount = 0),
                    this
                  );
                }
                if ('function' == typeof (t = r[e])) this.removeListener(e, t);
                else if (t) for (s = t.length - 1; s >= 0; s--) this.removeListener(e, t[s]);
                return this;
              }),
              (s.prototype.listeners = function(e) {
                var t,
                  r = this._events;
                return r && (t = r[e])
                  ? 'function' == typeof t
                    ? [t.listener || t]
                    : (function(e) {
                        for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                          t[r] = e[r].listener || e[r];
                        return t;
                      })(t)
                  : [];
              }),
              (s.listenerCount = function(e, t) {
                return 'function' == typeof e.listenerCount ? e.listenerCount(t) : l.call(e, t);
              }),
              (s.prototype.listenerCount = l),
              (s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
              });
          },
          function(e, t, r) {
            'use strict';
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = s(r(16)),
              i = s(r(2));
            t.default = class extends n.default {
              constructor(e, t, r) {
                super(), (this.id = e), (this.query = t), (this.sessionToken = r);
              }
              unsubscribe() {
                let e = this;
                i.default
                  .getLiveQueryController()
                  .getDefaultLiveQueryClient()
                  .then(t => {
                    t.unsubscribe(e), e.emit('close'), this.resolve();
                  });
              }
            };
          },
        ]);
      });
    },
  ]);
});
