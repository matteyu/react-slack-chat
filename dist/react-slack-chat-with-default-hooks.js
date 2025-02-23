!(function(e, A) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = A(require('react'), require('prop-types'));
  else if ('function' == typeof define && define.amd)
    define(['react', 'prop-types'], A);
  else {
    var n =
      'object' == typeof exports
        ? A(require('react'), require('prop-types'))
        : A(e.react, e['prop-types']);
    for (var t in n) ('object' == typeof exports ? exports : e)[t] = n[t];
  }
})(window, function(
  __WEBPACK_EXTERNAL_MODULE__3__,
  __WEBPACK_EXTERNAL_MODULE__6__
) {
  return (function(e) {
    var A = {};
    function n(t) {
      if (A[t]) return A[t].exports;
      var r = (A[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = A),
      (n.d = function(e, A, t) {
        n.o(e, A) || Object.defineProperty(e, A, { enumerable: !0, get: t });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, A) {
        if ((1 & A && (e = n(e)), 8 & A)) return e;
        if (4 & A && 'object' == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (
          (n.r(t),
          Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
          2 & A && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              t,
              r,
              function(A) {
                return e[A];
              }.bind(null, r)
            );
        return t;
      }),
      (n.n = function(e) {
        var A =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(A, 'a', A), A;
      }),
      (n.o = function(e, A) {
        return Object.prototype.hasOwnProperty.call(e, A);
      }),
      (n.p = '/'),
      n((n.s = 152))
    );
  })([
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A, n) {
          var a = r.default.stringify(A),
            o = 'https://slack.com/api/' + e + '?' + a;
          t.default.get(o, function(e, A) {
            if (e) n(e);
            else if (A.body.error) n(Error(A.body.error));
            else if (
              'string' == typeof A.body &&
              A.body.includes(
                'You are sending too many requests. Please relax.'
              )
            )
              n(Error('rate_limit'));
            else {
              var t = JSON.parse(A.body);
              t.ok ? (delete t.ok, n(null, t)) : n(Error(t.error));
            }
          });
        });
      var t = a(n(115)),
        r = a(n(121));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = a.default[e]
              .filter(function(e) {
                return 'Required' === e.required;
              })
              .filter(function(e) {
                return void 0 === A[e.name];
              }),
            t = !1;
          if (n.length) {
            var r = n.map(function(e) {
                return '- ' + e.name + ' ... ' + e.description;
              }),
              o = e + ' missing params:\n' + r.join('\n');
            t = Error(o);
          }
          return t;
        });
      var t,
        r = n(124),
        a = (t = r) && t.__esModule ? t : { default: t };
      e.exports = A.default;
    },
    function(e, A, n) {
      var t = n(147);
      'string' == typeof t && (t = [[e.i, t, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(149)(t, r);
      t.locals && (e.exports = t.locals);
    },
    function(e, A) {
      e.exports = __WEBPACK_EXTERNAL_MODULE__3__;
    },
    function(e, A, n) {
      'use strict';
      n.d(A, 'h', function() {
        return a;
      }),
        n.d(A, 'g', function() {
          return o;
        }),
        n.d(A, 'b', function() {
          return i;
        }),
        n.d(A, 'f', function() {
          return s;
        }),
        n.d(A, 'e', function() {
          return c;
        }),
        n.d(A, 'i', function() {
          return _;
        }),
        n.d(A, 'd', function() {
          return l;
        }),
        n.d(A, 'c', function() {
          return u;
        }),
        n.d(A, 'a', function() {
          return g;
        });
      var t = n(8),
        r = n(7),
        a = function(e) {
          var A = e.text,
            n = e.lastThreadTs,
            r = e.apiToken,
            a = e.channel,
            o = e.username;
          return new Promise(function(e, i) {
            if ('' !== A)
              return t.chat.postMessage(
                { token: r, thread_ts: n, channel: a, text: A, username: o },
                function(A, n) {
                  return A ? i(A) : e(n);
                }
              );
          });
        },
        o = function(e) {
          var A = e.file,
            n = e.title,
            t = e.apiToken,
            a = e.channel;
          return new Promise(function(e, o) {
            Object(r.debugLog)('UPLOADING', A);
            var i = {
                token: t,
                title: n,
                filename: A.name,
                filetype: 'auto',
                channels: a
              },
              s = new FormData();
            s.append('token', i.token),
              s.append('filename', i.filename),
              s.append('title', i.title),
              s.append('filetype', i.filetype),
              s.append('channels', i.channels),
              s.append('file', new Blob([A]));
            var c = new XMLHttpRequest();
            c.open('POST', 'https://slack.com/api/files.upload'),
              c.send(s),
              (c.onload = function() {
                if (200 !== c.status) {
                  var A = new Error(
                    'There was an error uploading the file. Response:',
                    c.status,
                    c.responseText
                  );
                  return o(A);
                }
                return e();
              });
          });
        },
        i = function(e, A, n) {
          var t = JSON.stringify(e);
          return A.filter(function(e) {
            if (-1 === t.indexOf(JSON.stringify(e)) && e.username !== n)
              return e;
          });
        },
        s = function(e) {
          return /<@.[^|]*[|].*>/.test(e.text) && e.text.indexOf(e.user) > -1;
        },
        c = function(e) {
          return void 0 !== e.user;
        },
        _ = function(e, A) {
          return !(e.username === A) && e.text.indexOf('@'.concat(A)) > -1;
        },
        l = function(e) {
          return /(:[:a-zA-Z\/_]*:)/.test(e);
        },
        u = function(e) {
          return e.match(
            /uploaded a file: <(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*))/
          );
        },
        g = function(e) {
          var A = document.createElement('textarea');
          return (A.innerHTML = e), A.value;
        };
    },
    function(e, A, n) {
      var t;
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function() {
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], A = 0; A < arguments.length; A++) {
            var t = arguments[A];
            if (t) {
              var a = typeof t;
              if ('string' === a || 'number' === a) e.push(t);
              else if (Array.isArray(t) && t.length) {
                var o = r.apply(null, t);
                o && e.push(o);
              } else if ('object' === a)
                for (var i in t) n.call(t, i) && t[i] && e.push(i);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (t = function() {
                return r;
              }.apply(A, [])) || (e.exports = t);
      })();
    },
    function(e, A) {
      e.exports = __WEBPACK_EXTERNAL_MODULE__6__;
    },
    function(e, A, n) {
      'use strict';
      n.r(A),
        n.d(A, 'debugLog', function() {
          return t;
        }),
        n.d(A, 'arraysIdentical', function() {
          return r;
        });
      var t = function() {},
        r = function(e, A) {
          return JSON.stringify(e) === JSON.stringify(A);
        };
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = U(n(114)),
        r = U(n(125)),
        a = U(n(128)),
        o = U(n(16)),
        i = U(n(129)),
        s = U(n(130)),
        c = U(n(131)),
        _ = U(n(41)),
        l = U(n(132)),
        u = U(n(133)),
        g = U(n(134)),
        d = U(n(135)),
        C = U(n(136)),
        p = U(n(137)),
        I = U(n(138)),
        f = U(n(139)),
        B = U(n(140)),
        h = U(n(10)),
        E = U(n(142)),
        m = U(n(143)),
        x = U(n(144)),
        w = U(n(145)),
        b = U(n(146));
      function U(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        describe:
          '\n  slack\n    api.client(token)\n    api.test(params, (err, data)=>)\n    auth.test(token, (err, data)=>)\n    bots.info\n    channels.archive({token, channel}, (err, data)=>)\n    channels.create({token, name}, (err, data)=>)\n    channels.history({token, channel}, (err, data)=>)\n    channels.info\n    channels.invite\n    channels.join\n    channels.kick\n    channels.leave\n    channels.list({token, exclude_archived}, (err, data)=>)\n    channels.mark\n    channels.rename\n    channels.setPurpose\n    channels.setTopic\n    channels.unarchive\n    chat.delete\n    chat.postMessage({token, text, channel}, (err, data)=>)\n    chat.update\n    emoji.list\n    files.delete\n    files.info\n    files.list\n    files.upload\n    groups.archive\n    groups.close\n    groups.create\n    groups.createChild\n    groups.history\n    groups.info\n    groups.invite\n    groups.kick\n    groups.leave\n    groups.list\n    groups.mark\n    groups.open\n    groups.rename\n    groups.setPurpose\n    groups.setTopic\n    groups.unarchive\n    im.close\n    im.history\n    im.list\n    im.mark\n    im.open\n    mpim.close\n    mpim.history\n    mpim.list\n    mpim.mark\n    mpim.open\n    oauth.access({client_id, client_secret, code}, (err, data)=>)\n    pins.add\n    pins.list\n    pins.remove\n    reactions.add\n    reactions.get\n    reactions.list\n    reactions.remove\n    reminders.add\n    reminders.complete\n    reminders.delete\n    reminders.info\n    reminders.list\n    rtm.client()\n    rtm.start({token}, (err, data)=>)\n    search.all\n    search.files\n    search.messages\n    stars.add\n    stars.list\n    stars.remove\n    team.acccessLogs\n    team.billableInfo\n    team.info(token, (err, data)=>)\n    team.integrationLogs\n    team.profile.get\n    usergroups.create\n    usergroups.disable\n    usergroups.enable\n    usergroups.list\n    usergroups.update\n    usergroups.users.list\n    usergroups.users.update\n    users.getPresence\n    users.identity\n    users.info\n    users.list(token, (err, data)=>)\n    users.setActive\n    users.setPresence\n',
        api: { test: t.default, client: r.default },
        auth: { test: o.default },
        bots: a.default,
        channels: i.default,
        chat: s.default,
        dnd: c.default,
        emoji: { list: _.default },
        files: l.default,
        groups: u.default,
        im: g.default,
        mpim: d.default,
        oauth: { access: C.default },
        reactions: p.default,
        reminders: I.default,
        pins: f.default,
        rtm: { client: B.default, start: h.default },
        search: E.default,
        stars: m.default,
        team: x.default,
        usergroups: w.default,
        users: b.default
      }),
        (e.exports = A.default);
    },
    function(e, A) {
      e.exports = function() {
        for (var e = {}, A = 0; A < arguments.length; A++) {
          var n = arguments[A];
          for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        }
        return e;
      };
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'rtm.start',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      var t, r, a;
      (r = []),
        void 0 ===
          (a = 'function' == typeof (t = function() {}) ? t.apply(A, r) : t) ||
          (e.exports = a),
        (r = [A]),
        void 0 ===
          (a =
            'function' ==
            typeof (t = function(e) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.find = function(e) {
                  return e.match(n) || [];
                }),
                (e.load = function() {
                  return new Promise(function(e) {
                    return t
                      ? e(t)
                      : r(A)
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(A) {
                            e((t = A));
                          });
                  });
                }),
                (e.all = a),
                (e.exist = o),
                (e.getUrl = i),
                (e.parse = function(e) {
                  var A =
                      arguments.length <= 1 || void 0 === arguments[1]
                        ? {}
                        : arguments[1],
                    t = '',
                    r = A.classNames ? A.classNames.trim().split(/\s+/) : '';
                  return (t += e.replace(n, function(e) {
                    var A = e.replace(/:/g, ''),
                      n = ['gh-emoji', 'gh-emoji-' + A];
                    return o(A)
                      ? (r &&
                          n.push.apply(
                            n,
                            (function(e) {
                              if (Array.isArray(e)) {
                                for (
                                  var A = 0, n = Array(e.length);
                                  A < e.length;
                                  A++
                                )
                                  n[A] = e[A];
                                return n;
                              }
                              return Array.from(e);
                            })(r)
                          ),
                        '<img src="' +
                          i(A) +
                          '" class="' +
                          n.join(' ') +
                          '" alt="' +
                          A +
                          '" />')
                      : e;
                  }));
                });
              var A = 'https://api.github.com/emojis',
                n = /(\:[\w\-\+]+\:)/g,
                t = null,
                r =
                  window.fetch ||
                  function(e) {
                    return new Promise(function(A, n) {
                      var t = new XMLHttpRequest();
                      (t.onreadystatechange = function() {
                        if (t.readyState === XMLHttpRequest.DONE)
                          return 200 !== t.status
                            ? n(t.responseText)
                            : A({
                                json: function() {
                                  return JSON.parse(t.responseText);
                                }
                              });
                      }),
                        t.open('GET', e, !0),
                        t.send();
                    });
                  };
              function a() {
                return t;
              }
              function o(e) {
                var A = a();
                return null != A && !!A[e];
              }
              function i(e) {
                var A = a();
                return null == A ? null : A[e];
              }
            })
              ? t.apply(A, r)
              : t) || (e.exports = a);
    },
    function(e, A) {
      e.exports =
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve"><circle style="fill:#84DBFF;" cx="254" cy="254" r="254"></circle><path style="fill:#F1543F;" d="M441.2,190.8c0,3.2-0.8,6-2.8,8.8c-8.8-4.8-19.2-7.2-30-7.2c-11.2,0-21.6,2-30,7.2 c-1.6-2.8-2.8-5.6-2.8-8.8c0-12,14.8-22,32.8-22C426.4,168.8,441.2,178.8,441.2,190.8z"></path><path style="fill:#FF7058;" d="M464.8,254.4c0,12.4-2,25.2-5.2,37.6H357.2c-0.8-3.6-1.6-6.8-2.4-10.4c9.6-17.2,20-45.6,14.8-76 c10-9.2,23.6-13.2,38.4-13.2C439.6,192.4,464.8,209.6,464.8,254.4z"></path><path style="fill:#F9B54C;" d="M444.8,328c0,0,2.8,16-15.6,32.4l-57.6-28c0.4-4.4,1.6-8.4,3.2-12c8.8,16,20.8,26.8,34,26.8 s25.2-11.2,34-26.8C443.6,322.8,444.4,325.2,444.8,328L444.8,328z"></path><path style="fill:#4CDBC4;" d="M485.6,358.4c-8.8,20-20.4,38.4-34,55.2l-3.2-10.4c2-6,9.6-39.6,4.8-60.8L485.6,358.4z"></path><g><path style="fill:#FFFFFF;" d="M448.4,403.2l-12.8-40l-6.4-3.2c18.4-16.4,15.6-32.4,15.6-32.4C462.8,341.6,450.8,395.2,448.4,403.2 z"></path><path style="fill:#FFFFFF;" d="M372,328c-0.4,1.2-0.4,2.8-0.8,4.4l-2.4-1.2C369.6,330,370.8,328.8,372,328z"></path></g><path style="fill:#FFD05B;" d="M462.8,296.8c-3.6,7.2-9.6,10.4-13.6,8c-9.2,23.6-24,42-41.2,42s-32-18.4-41.2-42 c-4,2.4-10-1.2-13.6-8c-1.6-3.2-2.4-6.4-2.8-9.2c2-2.8,4-6.4,6-10.4c0.8,0,1.6,0,2.8,0.4l0,0l0.4,0.4l0,0c0-0.4-1.6-15.2,37.6-31.2 c14-5.6,22.8-12,28-18c2,8.8,6.8,21.2,19.6,26c0,0,12,2.8,10.8,22.8l0,0c2-0.8,4-0.8,5.6,0.4C466.4,281.2,466.8,289.6,462.8,296.8z"></path><path style="fill:#E6E9EE;" d="M342.8,395.2L342.8,395.2c-0.8,5.6-2,11.6-2.8,18l-14-42.4C332.8,376.4,339.2,384,342.8,395.2z"></path><path style="fill:#F9B54C;" d="M338.8,304c0,0,4.8,26.4-33.6,49.2L261.6,332c-11.6-15.2-9.2-28-9.2-28s0,0-0.4,0 c0-0.4,0-0.8,0.4-1.6c12,14.8,26.8,24.4,43.2,24.4s31.2-9.6,43.2-24.4C338.8,303.2,339.2,303.6,338.8,304 C339.2,304,339.2,304,338.8,304z"></path><path style="fill:#2B3B4E;" d="M451.6,413.6c-24,29.6-54.4,53.6-89.2,70l-22.8-70.4c1.2-6,2-12,2.8-18c0.4,0.8,12.8-45.6,6-73.6 l86.4,41.6L451.6,413.6z"></path><g><path style="fill:#FFFFFF;" d="M342.8,395.2c-3.6-11.2-10-19.2-16.8-24.4l-2.8-8.8l-17.6-8.4c38.4-22.8,33.6-49.2,33.6-49.2 C362.8,322,343.2,396.4,342.8,395.2z"></path><path style="fill:#FFFFFF;" d="M261.6,332l-19.2-9.2c1.6-8,4.8-14.8,10-18.8C252.4,304,250,316.8,261.6,332z"></path></g><path style="fill:#FFD05B;" d="M350.8,269.2c-5.6,17.6-8,27.2-8,28.4l0,0c-12.8,17.2-29.2,29.2-46.8,29.2c-16.8,0-32.4-10.4-44.8-26 c0,0,0.4,0,0.4,0.4c-12-14.8-14.8-35.6-14.4-53.6l0,0c4.4-10.4,7.6-22.8,9.6-36c16,12,52.8,12.8,52.8,12.8 c-18.8-3.2-21.6-18-21.6-18c3.2,9.2,44.8,14.8,44.8,14.8C365.2,227.2,350.8,269.2,350.8,269.2z"></path><g><path style="fill:#2B3B4E;" d="M251.2,301.2c0,0-14-11.2-25.6-30.8c3.6-6,7.6-14,11.2-22.8C236.4,265.6,239.2,286.4,251.2,301.2z"></path><path style="fill:#2B3B4E;" d="M342.8,298c0,0,2-10,8-28.4c0,0,14.4-42-28.8-48.4c0,0-41.6-5.6-44.8-14.8c0,0,3.2,15.2,21.6,18 c0,0-36.8-0.8-52.8-12.8c2.4-20,0.8-42-9.6-64c8.4-4.4,19.2-6,34-2c0,0,58.4-23.2,88.4,29.6C390.8,231.6,350.8,292.8,342.8,298z"></path></g><path style="fill:#324A5E;" d="M334.4,239.2H314h-2h-32.4h-1.2h-21.6c-6.4,0-11.6,5.2-11.6,11.6v9.6c0,6.4,5.2,11.6,11.6,11.6h22.4 c2.8,0,5.6-1.2,7.6-2.8c0.8-0.4,1.2-0.8,1.6-1.6c1.6-3.6,4.4-5.6,7.2-5.6c2.8,0,5.6,2,7.2,5.6c0.4,0.8,0.8,1.2,1.6,1.6 c2,2,4.8,2.8,7.6,2.8h22.4c6.4,0,11.6-5.2,11.6-11.6v-9.6C346,244.4,340.8,239.2,334.4,239.2z M256.8,266.4c-3.2,0-6-2.8-6-6v-9.6 c0-3.2,2.8-6,6-6h21.6h1.2c3.2,0,6,2.8,6,6v9.6c0,0.8,0,1.6-0.4,2.4c-0.4,0.4-0.4,0.8-0.8,1.2c-1.2,1.6-2.8,2.4-4.8,2.4H256.8z M295.6,256c-1.6,0-3.2,0.4-4.8,1.2v-6.8c0-2.4-0.8-4.4-1.6-6h13.2c-1.2,1.6-1.6,4-1.6,6v6.8C298.8,256.4,297.2,256,295.6,256z M340.4,260.4c0,3.2-2.8,6-6,6H312c-2,0-3.6-0.8-4.8-2.4c-0.4-0.4-0.4-0.8-0.8-1.2c-0.4-0.8-0.4-1.6-0.4-2.4v-9.6c0-3.2,2.8-6,6-6h2 h20.4c3.2,0,6,2.8,6,6V260.4z"></path><g><path style="fill:#E6E9EE;" d="M77.6,436.4c0.4,0.8,1.2,1.2,1.6,1.6C78.8,437.6,78,437.2,77.6,436.4L77.6,436.4z"></path><path style="fill:#E6E9EE;" d="M160,355.6c-0.4,0-0.8,0.4-1.2,0.4s-0.8-0.4-1.2-0.4H160z"></path><path style="fill:#E6E9EE;" d="M214,399.6c-4.4,29.2-11.6,63.2-23.6,100.4c-26-6.8-50.8-17.6-72.8-31.6c-6.8-24.8-11.2-48-14-68.8 c12.8-40,55.2-43.6,55.2-43.6S201.6,359.6,214,399.6z"></path></g><path style="fill:#F9B54C;" d="M209.6,292c0,0,6.4,36-50.8,64h-0.4c-57.2-28-50.8-64-50.8-64s0,0-0.4,0c0-0.4,0.4-1.2,0.4-1.6 c14,17.2,31.6,28.4,50.8,28.4s36.4-11.2,50.8-28.4C209.6,291.2,210,291.6,209.6,292C210,292.4,210,292,209.6,292z"></path><g><path style="fill:#54C0EB;" d="M159.2,356C159.2,356,158.8,356,159.2,356c-0.4,0-0.4,0-0.4,0H159.2z"></path><path style="fill:#54C0EB;" d="M179.2,361.6l-6.8,19.6h-26.8l-6.8-19.6c11.2-4.8,20-5.6,20-5.6S168,356.8,179.2,361.6z"></path></g><path style="fill:#84DBFF;" d="M189.2,499.6l-16.8-118.4h-26.8L132,476.8C149.6,486.4,168.8,494.4,189.2,499.6z"></path><path style="fill:#324A5E;" d="M117.6,468.4c-44-28-78.8-69.2-98.8-118l77.6-37.2c-8,33.6,6.8,88,7.2,86.8 C106.4,420.4,111.2,443.2,117.6,468.4z"></path><g><path style="fill:#FFFFFF;" d="M209.6,292c0,0,6.4,36-50.8,64c0,0,42.8,3.2,55.2,43.6C214.8,400.8,238,313.6,209.6,292z"></path><path style="fill:#FFFFFF;" d="M108,292c-28,21.2-4.8,108.8-4.4,107.2c12.8-40,55.2-43.6,55.2-43.6C101.6,328.4,108,292,108,292z"></path></g><path style="fill:#FFD05B;" d="M223.6,251.2c-7.2,22-9.6,33.6-9.6,33.6c-14.8,20.4-34,34-55.2,34c-20,0-38-12.4-52.8-30.8l0.4,0.4 c-31.2-38.4-9.6-109.2-9.6-109.2c15.6,17.6,66,18.8,66,18.8c-22-3.6-25.6-21.2-25.6-21.2c3.6,10.8,52.4,17.2,52.4,17.2 C240.4,202,223.6,251.2,223.6,251.2z"></path><g><path style="fill:#324A5E;" d="M129.6,105.6c0,0,68.8-27.6,103.6,34.8c37.6,66.4-9.6,138.8-19.2,144.4c0,0,2.4-11.6,9.6-33.6 c0,0,16.8-49.2-33.6-56.8c0,0-49.2-6.4-52.4-17.2c0,0,3.6,17.6,25.6,21.2c0,0-50.4-1.2-66-18.8c0,0-21.6,70.8,10,109.2 c0,0-54-43.2-47.6-110C59.2,178.8,56.4,87.2,129.6,105.6z"></path><path style="fill:#324A5E;" d="M362.4,483.6C329.6,499.2,292.8,508,254,508c-22,0-43.2-2.8-63.2-8c12-37.2,19.2-71.2,23.6-100.4 l0,0c0.8,0,14.8-53.6,7.2-86.8L323.2,362L362.4,483.6z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    },
    function(e, A, n) {
      'use strict';
      var t = n(14),
        r = n(15);
      function a(e) {
        (this.request = e.request),
          (this.xhr = e.xhr),
          (this.headers = e.headers || {}),
          (this.status = e.status || 0),
          (this.text = e.text),
          (this.body = e.body),
          (this.contentType = e.contentType),
          (this.isHttpError = e.status >= 400);
      }
      (a.prototype.header = t.prototype.header),
        (a.fromRequest = function(e) {
          return new a(r(e));
        }),
        (e.exports = a);
    },
    function(e, A, n) {
      'use strict';
      function t(e) {
        var A = 'string' == typeof e ? { url: e } : e || {};
        (this.method = A.method ? A.method.toUpperCase() : 'GET'),
          (this.url = A.url),
          (this.headers = A.headers || {}),
          (this.body = A.body),
          (this.timeout = A.timeout || 0),
          (this.errorOn404 = null == A.errorOn404 || A.errorOn404),
          (this.onload = A.onload),
          (this.onerror = A.onerror);
      }
      (t.prototype.abort = function() {
        if (!this.aborted) return (this.aborted = !0), this.xhr.abort(), this;
      }),
        (t.prototype.header = function(e, A) {
          var n;
          for (n in this.headers)
            if (
              this.headers.hasOwnProperty(n) &&
              e.toLowerCase() === n.toLowerCase()
            ) {
              if (1 === arguments.length) return this.headers[n];
              delete this.headers[n];
              break;
            }
          if (null != A) return (this.headers[e] = A), A;
        }),
        (e.exports = t);
    },
    function(e, A, n) {
      'use strict';
      var t = n(9);
      e.exports = function(e) {
        var A = e.xhr,
          n = { request: e, xhr: A };
        try {
          var r,
            a,
            o,
            i = {};
          if (A.getAllResponseHeaders)
            for (
              r = A.getAllResponseHeaders().split('\n'), a = 0;
              a < r.length;
              a++
            )
              (o = r[a].match(/\s*([^\s]+):\s+([^\s]+)/)) && (i[o[1]] = o[2]);
          n = t(n, {
            status: A.status,
            contentType:
              A.contentType ||
              (A.getResponseHeader && A.getResponseHeader('Content-Type')),
            headers: i,
            text: A.responseText,
            body: A.response || A.responseText
          });
        } catch (e) {}
        return n;
      };
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'auth.test',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'bots.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.archive',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.create',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.history',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.invite',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.join',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.kick',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.leave',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.mark',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.rename',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.setPurpose',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.setTopic',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'channels.unarchive',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'chat.delete',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'chat.meMessage',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'chat.postMessage',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'chat.update',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'dnd.endDnd',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'dnd.endSnooze',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'dnd.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'dnd.setSnooze',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'dnd.teamInfo',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'emoji.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.comments.add',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.comments.delete',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.comments.edit',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.delete',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.revokePublicURL',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.sharedPublicURL',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'files.upload',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.archive',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.close',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.create',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.createChild',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.history',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.invite',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.kick',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.leave',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.mark',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.open',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.rename',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.setPurpose',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.setTopic',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'groups.unarchive',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'im.close',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'im.history',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'im.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'im.mark',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'im.open',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'mpim.close',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'mpim.history',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'mpim.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'mpim.mark',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'mpim.open',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'pins.add',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'pins.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'pins.remove',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reactions.add',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reactions.get',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reactions.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reactions.remove',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reminders.add',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reminders.complete',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reminders.delete',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reminders.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'reminders.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'search.all',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'search.files',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'search.messages',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'stars.add',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'stars.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'stars.remove',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'team.accessLogs',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'team.billableInfo',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'team.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'team.integrationLogs',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'team.profile.get',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.create',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.disable',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.enable',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.update',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.users.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'usergroups.users.update',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.getPresence',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.identity',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.info',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.list',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.setActive',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.setPresence',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(module, exports, __webpack_require__) {
      /*!
       * html2canvas 1.0.0-rc.1 <https://html2canvas.hertzen.com>
       * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
       * Released under MIT License
       */
      var factory;
      window,
        (factory = function() {
          return (function(e) {
            var A = {};
            function n(t) {
              if (A[t]) return A[t].exports;
              var r = (A[t] = { i: t, l: !1, exports: {} });
              return (
                e[t].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = e),
              (n.c = A),
              (n.d = function(e, A, t) {
                n.o(e, A) ||
                  Object.defineProperty(e, A, { enumerable: !0, get: t });
              }),
              (n.r = function(e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (n.t = function(e, A) {
                if ((1 & A && (e = n(e)), 8 & A)) return e;
                if (4 & A && 'object' == typeof e && e && e.__esModule)
                  return e;
                var t = Object.create(null);
                if (
                  (n.r(t),
                  Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    value: e
                  }),
                  2 & A && 'string' != typeof e)
                )
                  for (var r in e)
                    n.d(
                      t,
                      r,
                      function(A) {
                        return e[A];
                      }.bind(null, r)
                    );
                return t;
              }),
              (n.n = function(e) {
                var A =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return n.d(A, 'a', A), A;
              }),
              (n.o = function(e, A) {
                return Object.prototype.hasOwnProperty.call(e, A);
              }),
              (n.p = ''),
              n((n.s = './src/index.js'))
            );
          })({
            './node_modules/css-line-break/dist/LineBreak.js':
              /*!*******************************************************!*\
  !*** ./node_modules/css-line-break/dist/LineBreak.js ***!
  \*******************************************************/
              /*! no static exports found */ function(
                module,
                exports,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _Trie = __webpack_require__(/*! ./Trie */ \"./node_modules/css-line-break/dist/Trie.js\");\n\nvar _linebreakTrie = __webpack_require__(/*! ./linebreak-trie */ \"./node_modules/css-line-break/dist/linebreak-trie.js\");\n\nvar _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);\n\nvar _Util = __webpack_require__(/*! ./Util */ \"./node_modules/css-line-break/dist/Util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;\n\n// Non-tailorable Line Breaking Classes\nvar BK = 1; //  Cause a line break (after)\nvar CR = 2; //  Cause a line break (after), except between CR and LF\nvar LF = 3; //  Cause a line break (after)\nvar CM = 4; //  Prohibit a line break between the character and the preceding character\nvar NL = 5; //  Cause a line break (after)\nvar SG = 6; //  Do not occur in well-formed text\nvar WJ = 7; //  Prohibit line breaks before and after\nvar ZW = 8; //  Provide a break opportunity\nvar GL = 9; //  Prohibit line breaks before and after\nvar SP = 10; // Enable indirect line breaks\nvar ZWJ = 11; // Prohibit line breaks within joiner sequences\n// Break Opportunities\nvar B2 = 12; //  Provide a line break opportunity before and after the character\nvar BA = 13; //  Generally provide a line break opportunity after the character\nvar BB = 14; //  Generally provide a line break opportunity before the character\nvar HY = 15; //  Provide a line break opportunity after the character, except in numeric context\nvar CB = 16; //   Provide a line break opportunity contingent on additional information\n// Characters Prohibiting Certain Breaks\nvar CL = 17; //  Prohibit line breaks before\nvar CP = 18; //  Prohibit line breaks before\nvar EX = 19; //  Prohibit line breaks before\nvar IN = 20; //  Allow only indirect line breaks between pairs\nvar NS = 21; //  Allow only indirect line breaks before\nvar OP = 22; //  Prohibit line breaks after\nvar QU = 23; //  Act like they are both opening and closing\n// Numeric Context\nvar IS = 24; //  Prevent breaks after any and before numeric\nvar NU = 25; //  Form numeric expressions for line breaking purposes\nvar PO = 26; //  Do not break following a numeric expression\nvar PR = 27; //  Do not break in front of a numeric expression\nvar SY = 28; //  Prevent a break before; and allow a break after\n// Other Characters\nvar AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID\nvar AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters\nvar CJ = 31; //  Treat as NS or ID for strict or normal breaking.\nvar EB = 32; //  Do not break from following Emoji Modifier\nvar EM = 33; //  Do not break from preceding Emoji Base\nvar H2 = 34; //  Form Korean syllable blocks\nvar H3 = 35; //  Form Korean syllable blocks\nvar HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic\nvar ID = 37; //  Break before or after; except in some numeric context\nvar JL = 38; //  Form Korean syllable blocks\nvar JV = 39; //  Form Korean syllable blocks\nvar JT = 40; //  Form Korean syllable blocks\nvar RI = 41; //  Keep pairs together. For pairs; break before and after other classes\nvar SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis\nvar XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions\n\nvar classes = exports.classes = {\n    BK: BK,\n    CR: CR,\n    LF: LF,\n    CM: CM,\n    NL: NL,\n    SG: SG,\n    WJ: WJ,\n    ZW: ZW,\n    GL: GL,\n    SP: SP,\n    ZWJ: ZWJ,\n    B2: B2,\n    BA: BA,\n    BB: BB,\n    HY: HY,\n    CB: CB,\n    CL: CL,\n    CP: CP,\n    EX: EX,\n    IN: IN,\n    NS: NS,\n    OP: OP,\n    QU: QU,\n    IS: IS,\n    NU: NU,\n    PO: PO,\n    PR: PR,\n    SY: SY,\n    AI: AI,\n    AL: AL,\n    CJ: CJ,\n    EB: EB,\n    EM: EM,\n    H2: H2,\n    H3: H3,\n    HL: HL,\n    ID: ID,\n    JL: JL,\n    JV: JV,\n    JT: JT,\n    RI: RI,\n    SA: SA,\n    XX: XX\n};\n\nvar BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';\nvar BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';\nvar BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';\nvar UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);\n\nvar ALPHABETICS = [AL, HL];\nvar HARD_LINE_BREAKS = [BK, CR, LF, NL];\nvar SPACE = [SP, ZW];\nvar PREFIX_POSTFIX = [PR, PO];\nvar LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);\nvar KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];\nvar HYPHEN = [HY, BA];\n\nvar codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {\n    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';\n\n    var types = [];\n    var indicies = [];\n    var categories = [];\n    codePoints.forEach(function (codePoint, index) {\n        var classType = UnicodeTrie.get(codePoint);\n        if (classType > LETTER_NUMBER_MODIFIER) {\n            categories.push(true);\n            classType -= LETTER_NUMBER_MODIFIER;\n        } else {\n            categories.push(false);\n        }\n\n        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {\n            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0\n            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {\n                indicies.push(index);\n                return types.push(CB);\n            }\n        }\n\n        if (classType === CM || classType === ZWJ) {\n            // LB10 Treat any remaining combining mark or ZWJ as AL.\n            if (index === 0) {\n                indicies.push(index);\n                return types.push(AL);\n            }\n\n            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of\n            // the base character in all of the following rules. Treat ZWJ as if it were CM.\n            var prev = types[index - 1];\n            if (LINE_BREAKS.indexOf(prev) === -1) {\n                indicies.push(indicies[index - 1]);\n                return types.push(prev);\n            }\n            indicies.push(index);\n            return types.push(AL);\n        }\n\n        indicies.push(index);\n\n        if (classType === CJ) {\n            return types.push(lineBreak === 'strict' ? NS : ID);\n        }\n\n        if (classType === SA) {\n            return types.push(AL);\n        }\n\n        if (classType === AI) {\n            return types.push(AL);\n        }\n\n        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL\n        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised\n        // to take into account the actual line breaking properties for these characters.\n        if (classType === XX) {\n            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {\n                return types.push(ID);\n            } else {\n                return types.push(AL);\n            }\n        }\n\n        types.push(classType);\n    });\n\n    return [indicies, types, categories];\n};\n\nvar isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {\n    var current = classTypes[currentIndex];\n    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {\n        var i = currentIndex;\n        while (i <= classTypes.length) {\n            i++;\n            var next = classTypes[i];\n\n            if (next === b) {\n                return true;\n            }\n\n            if (next !== SP) {\n                break;\n            }\n        }\n    }\n\n    if (current === SP) {\n        var _i = currentIndex;\n\n        while (_i > 0) {\n            _i--;\n            var prev = classTypes[_i];\n\n            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {\n                var n = currentIndex;\n                while (n <= classTypes.length) {\n                    n++;\n                    var _next = classTypes[n];\n\n                    if (_next === b) {\n                        return true;\n                    }\n\n                    if (_next !== SP) {\n                        break;\n                    }\n                }\n            }\n\n            if (prev !== SP) {\n                break;\n            }\n        }\n    }\n    return false;\n};\n\nvar previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {\n    var i = currentIndex;\n    while (i >= 0) {\n        var type = classTypes[i];\n        if (type === SP) {\n            i--;\n        } else {\n            return type;\n        }\n    }\n    return 0;\n};\n\nvar _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {\n    if (indicies[index] === 0) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    var currentIndex = index - 1;\n    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    var beforeIndex = currentIndex - 1;\n    var afterIndex = currentIndex + 1;\n    var current = classTypes[currentIndex];\n\n    // LB4 Always break after hard line breaks.\n    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.\n    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;\n    var next = classTypes[afterIndex];\n\n    if (current === CR && next === LF) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {\n        return BREAK_MANDATORY;\n    }\n\n    // LB6 Do not break before hard line breaks.\n    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB7 Do not break before spaces or zero width space.\n    if (SPACE.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.\n    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.\n    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB11 Do not break before or after Word joiner and related characters.\n    if (current === WJ || next === WJ) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB12 Do not break after NBSP and related characters.\n    if (current === GL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.\n    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.\n    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB14 Do not break after ‘[’, even after spaces.\n    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB15 Do not break within ‘”[’, even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB17 Do not break within ‘——’, even with intervening spaces.\n    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB18 Break after spaces.\n    if (current === SP) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.\n    if (current === QU || next === QU) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB20 Break before and after unresolved CB.\n    if (next === CB || current === CB) {\n        return BREAK_ALLOWED;\n    }\n\n    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.\n    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB21a Don't break after Hebrew + Hyphen.\n    if (before === HL && HYPHEN.indexOf(current) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB21b Don’t break between Solidus and Hebrew letters.\n    if (current === SY && next === HL) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.\n    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB23 Do not break between digits and letters.\n    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.\n    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.\n    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB25 Do not break between the following pairs of classes relevant to numbers:\n    if (\n    // (PR | PO) × ( OP | HY )? NU\n    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||\n    // ( OP | HY ) × NU\n    [OP, HY].indexOf(current) !== -1 && next === NU ||\n    // NU ×\t(NU | SY | IS)\n    current === NU && [NU, SY, IS].indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)\n    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {\n        var prevIndex = currentIndex;\n        while (prevIndex >= 0) {\n            var type = classTypes[prevIndex];\n            if (type === NU) {\n                return BREAK_NOT_ALLOWED;\n            } else if ([SY, IS].indexOf(type) !== -1) {\n                prevIndex--;\n            } else {\n                break;\n            }\n        }\n    }\n\n    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))\n    if ([PR, PO].indexOf(next) !== -1) {\n        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;\n        while (_prevIndex >= 0) {\n            var _type = classTypes[_prevIndex];\n            if (_type === NU) {\n                return BREAK_NOT_ALLOWED;\n            } else if ([SY, IS].indexOf(_type) !== -1) {\n                _prevIndex--;\n            } else {\n                break;\n            }\n        }\n    }\n\n    // LB26 Do not break a Korean syllable.\n    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB27 Treat a Korean Syllable Block the same as ID.\n    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB28 Do not break between alphabetics (“at”).\n    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).\n    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.\n    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional\n    // indicators preceding the position of the break.\n    if (current === RI && next === RI) {\n        var i = indicies[currentIndex];\n        var count = 1;\n        while (i > 0) {\n            i--;\n            if (classTypes[i] === RI) {\n                count++;\n            } else {\n                break;\n            }\n        }\n        if (count % 2 !== 0) {\n            return BREAK_NOT_ALLOWED;\n        }\n    }\n\n    // LB30b Do not break between an emoji base and an emoji modifier.\n    if (current === EB && next === EM) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    return BREAK_ALLOWED;\n};\n\nvar lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {\n    // LB2 Never break at the start of text.\n    if (index === 0) {\n        return BREAK_NOT_ALLOWED;\n    }\n\n    // LB3 Always break at the end of text.\n    if (index >= codePoints.length) {\n        return BREAK_MANDATORY;\n    }\n\n    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),\n        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),\n        indicies = _codePointsToCharacte2[0],\n        classTypes = _codePointsToCharacte2[1];\n\n    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);\n};\n\nvar cssFormattedClasses = function cssFormattedClasses(codePoints, options) {\n    if (!options) {\n        options = { lineBreak: 'normal', wordBreak: 'normal' };\n    }\n\n    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),\n        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),\n        indicies = _codePointsToCharacte4[0],\n        classTypes = _codePointsToCharacte4[1],\n        isLetterNumber = _codePointsToCharacte4[2];\n\n    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {\n        classTypes = classTypes.map(function (type) {\n            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;\n        });\n    }\n\n    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {\n        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;\n    }) : null;\n\n    return [indicies, classTypes, forbiddenBreakpoints];\n};\n\nvar inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {\n    var codePoints = (0, _Util.toCodePoints)(str);\n    var output = BREAK_NOT_ALLOWED;\n\n    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),\n        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),\n        indicies = _cssFormattedClasses2[0],\n        classTypes = _cssFormattedClasses2[1],\n        forbiddenBreakpoints = _cssFormattedClasses2[2];\n\n    codePoints.forEach(function (codePoint, i) {\n        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));\n    });\n\n    return output;\n};\n\nvar Break = function () {\n    function Break(codePoints, lineBreak, start, end) {\n        _classCallCheck(this, Break);\n\n        this._codePoints = codePoints;\n        this.required = lineBreak === BREAK_MANDATORY;\n        this.start = start;\n        this.end = end;\n    }\n\n    _createClass(Break, [{\n        key: 'slice',\n        value: function slice() {\n            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));\n        }\n    }]);\n\n    return Break;\n}();\n\nvar LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {\n    var codePoints = (0, _Util.toCodePoints)(str);\n\n    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),\n        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),\n        indicies = _cssFormattedClasses4[0],\n        classTypes = _cssFormattedClasses4[1],\n        forbiddenBreakpoints = _cssFormattedClasses4[2];\n\n    var length = codePoints.length;\n    var lastEnd = 0;\n    var nextIndex = 0;\n\n    return {\n        next: function next() {\n            if (nextIndex >= length) {\n                return { done: true };\n            }\n            var lineBreak = BREAK_NOT_ALLOWED;\n            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}\n\n            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {\n                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);\n                lastEnd = nextIndex;\n                return { value: value, done: false };\n            }\n\n            return { done: true };\n        }\n    };\n};\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/LineBreak.js?"
                );
              },
            './node_modules/css-line-break/dist/Trie.js':
              /*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Trie.js ***!
  \**************************************************/
              /*! no static exports found */ function(
                module,
                exports,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n/** Shift size for getting the index-2 table offset. */\nvar UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;\n\n/** Shift size for getting the index-1 table offset. */\nvar UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;\n\n/**\n * Shift size for shifting left the index array values.\n * Increases possible data size with 16-bit index values at the cost\n * of compactability.\n * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.\n */\nvar UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;\n\n/**\n * Difference between the two shift sizes,\n * for getting an index-1 offset from an index-2 offset. 6=11-5\n */\nvar UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;\n\n/**\n * The part of the index-2 table for U+D800..U+DBFF stores values for\n * lead surrogate code _units_ not code _points_.\n * Values for lead surrogate code _points_ are indexed with this portion of the table.\n * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)\n */\nvar UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;\n\n/** Number of entries in a data block. 32=0x20 */\nvar UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;\n/** Mask for getting the lower bits for the in-data-block offset. */\nvar UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;\n\nvar UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;\n/** Count the lengths of both BMP pieces. 2080=0x820 */\nvar UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;\n/**\n * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.\n * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.\n */\nvar UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;\nvar UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */\n/**\n * The index-1 table, only used for supplementary code points, at offset 2112=0x840.\n * Variable length, for code points up to highStart, where the last single-value range starts.\n * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.\n * (For 0x100000 supplementary code points U+10000..U+10ffff.)\n *\n * The part of the index-2 table for supplementary code points starts\n * after this index-1 table.\n *\n * Both the index-1 table and the following part of the index-2 table\n * are omitted completely if there is only BMP data.\n */\nvar UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;\n\n/**\n * Number of index-1 entries for the BMP. 32=0x20\n * This part of the index-1 table is omitted from the serialized form.\n */\nvar UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;\n\n/** Number of entries in an index-2 block. 64=0x40 */\nvar UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;\n/** Mask for getting the lower bits for the in-index-2-block offset. */\nvar UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;\n\nvar createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {\n    var buffer = (0, _Util.decode)(base64);\n    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);\n    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);\n    var headerLength = 24;\n\n    var index = view16.slice(headerLength / 2, view32[4] / 2);\n    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));\n\n    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);\n};\n\nvar Trie = exports.Trie = function () {\n    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {\n        _classCallCheck(this, Trie);\n\n        this.initialValue = initialValue;\n        this.errorValue = errorValue;\n        this.highStart = highStart;\n        this.highValueIndex = highValueIndex;\n        this.index = index;\n        this.data = data;\n    }\n\n    /**\n     * Get the value for a code point as stored in the Trie.\n     *\n     * @param codePoint the code point\n     * @return the value\n     */\n\n\n    _createClass(Trie, [{\n        key: \'get\',\n        value: function get(codePoint) {\n            var ix = void 0;\n            if (codePoint >= 0) {\n                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {\n                    // Ordinary BMP code point, excluding leading surrogates.\n                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.\n                    // 16 bit data is stored in the index array itself.\n                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n\n                if (codePoint <= 0xffff) {\n                    // Lead Surrogate Code Point.  A Separate index section is stored for\n                    // lead surrogate code units and code points.\n                    //   The main index has the code unit data.\n                    //   For this function, we need the code point data.\n                    // Note: this expression could be refactored for slightly improved efficiency, but\n                    //       surrogate code points will be so rare in practice that it\'s not worth it.\n                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n\n                if (codePoint < this.highStart) {\n                    // Supplemental code point, use two-level lookup.\n                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);\n                    ix = this.index[ix];\n                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;\n                    ix = this.index[ix];\n                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);\n                    return this.data[ix];\n                }\n                if (codePoint <= 0x10ffff) {\n                    return this.data[this.highValueIndex];\n                }\n            }\n\n            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.\n            return this.errorValue;\n        }\n    }]);\n\n    return Trie;\n}();\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/Trie.js?'
                );
              },
            './node_modules/css-line-break/dist/Util.js':
              /*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Util.js ***!
  \**************************************************/
              /*! no static exports found */ function(
                module,
                exports,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar toCodePoints = exports.toCodePoints = function toCodePoints(str) {\n    var codePoints = [];\n    var i = 0;\n    var length = str.length;\n    while (i < length) {\n        var value = str.charCodeAt(i++);\n        if (value >= 0xd800 && value <= 0xdbff && i < length) {\n            var extra = str.charCodeAt(i++);\n            if ((extra & 0xfc00) === 0xdc00) {\n                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);\n            } else {\n                codePoints.push(value);\n                i--;\n            }\n        } else {\n            codePoints.push(value);\n        }\n    }\n    return codePoints;\n};\n\nvar fromCodePoint = exports.fromCodePoint = function fromCodePoint() {\n    if (String.fromCodePoint) {\n        return String.fromCodePoint.apply(String, arguments);\n    }\n\n    var length = arguments.length;\n    if (!length) {\n        return '';\n    }\n\n    var codeUnits = [];\n\n    var index = -1;\n    var result = '';\n    while (++index < length) {\n        var codePoint = arguments.length <= index ? undefined : arguments[index];\n        if (codePoint <= 0xffff) {\n            codeUnits.push(codePoint);\n        } else {\n            codePoint -= 0x10000;\n            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);\n        }\n        if (index + 1 === length || codeUnits.length > 0x4000) {\n            result += String.fromCharCode.apply(String, codeUnits);\n            codeUnits.length = 0;\n        }\n    }\n    return result;\n};\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n\n// Use a lookup table to find the index.\nvar lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);\nfor (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n}\n\nvar decode = exports.decode = function decode(base64) {\n    var bufferLength = base64.length * 0.75,\n        len = base64.length,\n        i = void 0,\n        p = 0,\n        encoded1 = void 0,\n        encoded2 = void 0,\n        encoded3 = void 0,\n        encoded4 = void 0;\n\n    if (base64[base64.length - 1] === '=') {\n        bufferLength--;\n        if (base64[base64.length - 2] === '=') {\n            bufferLength--;\n        }\n    }\n\n    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);\n    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);\n\n    for (i = 0; i < len; i += 4) {\n        encoded1 = lookup[base64.charCodeAt(i)];\n        encoded2 = lookup[base64.charCodeAt(i + 1)];\n        encoded3 = lookup[base64.charCodeAt(i + 2)];\n        encoded4 = lookup[base64.charCodeAt(i + 3)];\n\n        bytes[p++] = encoded1 << 2 | encoded2 >> 4;\n        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;\n        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;\n    }\n\n    return buffer;\n};\n\nvar polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {\n    var length = buffer.length;\n    var bytes = [];\n    for (var _i = 0; _i < length; _i += 2) {\n        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);\n    }\n    return bytes;\n};\n\nvar polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {\n    var length = buffer.length;\n    var bytes = [];\n    for (var _i2 = 0; _i2 < length; _i2 += 4) {\n        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);\n    }\n    return bytes;\n};\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/Util.js?"
                );
              },
            './node_modules/css-line-break/dist/index.js':
              /*!***************************************************!*\
  !*** ./node_modules/css-line-break/dist/index.js ***!
  \***************************************************/
              /*! no static exports found */ function(
                module,
                exports,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");\n\nObject.defineProperty(exports, \'toCodePoints\', {\n  enumerable: true,\n  get: function get() {\n    return _Util.toCodePoints;\n  }\n});\nObject.defineProperty(exports, \'fromCodePoint\', {\n  enumerable: true,\n  get: function get() {\n    return _Util.fromCodePoint;\n  }\n});\n\nvar _LineBreak = __webpack_require__(/*! ./LineBreak */ "./node_modules/css-line-break/dist/LineBreak.js");\n\nObject.defineProperty(exports, \'LineBreaker\', {\n  enumerable: true,\n  get: function get() {\n    return _LineBreak.LineBreaker;\n  }\n});\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/index.js?'
                );
              },
            './node_modules/css-line-break/dist/linebreak-trie.js':
              /*!************************************************************!*\
  !*** ./node_modules/css-line-break/dist/linebreak-trie.js ***!
  \************************************************************/
              /*! no static exports found */ function(
                module,
                exports,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "\n\nmodule.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';\n\n//# sourceURL=webpack://html2canvas/./node_modules/css-line-break/dist/linebreak-trie.js?"
                );
              },
            './src/Angle.js':
              /*!**********************!*\
  !*** ./src/Angle.js ***!
  \**********************/
              /*! exports provided: parseAngle */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseAngle\", function() { return parseAngle; });\n\n\nvar ANGLE = /([+-]?\\d*\\.?\\d+)(deg|grad|rad|turn)/i;\nvar parseAngle = function parseAngle(angle) {\n  var match = angle.match(ANGLE);\n\n  if (match) {\n    var value = parseFloat(match[1]);\n\n    switch (match[2].toLowerCase()) {\n      case 'deg':\n        return Math.PI * value / 180;\n\n      case 'grad':\n        return Math.PI / 200 * value;\n\n      case 'rad':\n        return value;\n\n      case 'turn':\n        return Math.PI * 2 * value;\n    }\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Angle.js?"
                );
              },
            './src/Bounds.js':
              /*!***********************!*\
  !*** ./src/Bounds.js ***!
  \***********************/
              /*! exports provided: Bounds, parseBounds, calculatePaddingBox, calculateContentBox, parseDocumentSize, parsePathForBorder, calculateBorderBoxPath, calculatePaddingBoxPath, parseBoundCurves */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return Bounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBounds", function() { return parseBounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePaddingBox", function() { return calculatePaddingBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateContentBox", function() { return calculateContentBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDocumentSize", function() { return parseDocumentSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePathForBorder", function() { return parsePathForBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBorderBoxPath", function() { return calculateBorderBoxPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePaddingBoxPath", function() { return calculatePaddingBoxPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBoundCurves", function() { return parseBoundCurves; });\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing/Vector */ "./src/drawing/Vector.js");\n/* harmony import */ var _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing/BezierCurve */ "./src/drawing/BezierCurve.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TOP = 0;\nvar RIGHT = 1;\nvar BOTTOM = 2;\nvar LEFT = 3;\nvar H = 0;\nvar V = 1;\nvar Bounds =\n/*#__PURE__*/\nfunction () {\n  function Bounds(x, y, w, h) {\n    _classCallCheck(this, Bounds);\n\n    this.left = x;\n    this.top = y;\n    this.width = w;\n    this.height = h;\n  }\n\n  _createClass(Bounds, null, [{\n    key: "fromClientRect",\n    value: function fromClientRect(clientRect, scrollX, scrollY) {\n      return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);\n    }\n  }]);\n\n  return Bounds;\n}();\nvar parseBounds = function parseBounds(node, scrollX, scrollY) {\n  return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);\n};\nvar calculatePaddingBox = function calculatePaddingBox(bounds, borders) {\n  return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));\n};\nvar calculateContentBox = function calculateContentBox(bounds, padding, borders) {\n  // TODO support percentage paddings\n  var paddingTop = padding[TOP].value;\n  var paddingRight = padding[RIGHT].value;\n  var paddingBottom = padding[BOTTOM].value;\n  var paddingLeft = padding[LEFT].value;\n  return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));\n};\nvar parseDocumentSize = function parseDocumentSize(document) {\n  var body = document.body;\n  var documentElement = document.documentElement;\n\n  if (!body || !documentElement) {\n    throw new Error( true ? "Unable to get document size" : undefined);\n  }\n\n  var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));\n  var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));\n  return new Bounds(0, 0, width, height);\n};\nvar parsePathForBorder = function parsePathForBorder(curves, borderSide) {\n  switch (borderSide) {\n    case TOP:\n      return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);\n\n    case RIGHT:\n      return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);\n\n    case BOTTOM:\n      return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);\n\n    case LEFT:\n    default:\n      return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);\n  }\n};\n\nvar createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {\n  var path = [];\n\n  if (outer1 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"]) {\n    path.push(outer1.subdivide(0.5, false));\n  } else {\n    path.push(outer1);\n  }\n\n  if (outer2 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"]) {\n    path.push(outer2.subdivide(0.5, true));\n  } else {\n    path.push(outer2);\n  }\n\n  if (inner2 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"]) {\n    path.push(inner2.subdivide(0.5, true).reverse());\n  } else {\n    path.push(inner2);\n  }\n\n  if (inner1 instanceof _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"]) {\n    path.push(inner1.subdivide(0.5, false).reverse());\n  } else {\n    path.push(inner1);\n  }\n\n  return path;\n};\n\nvar calculateBorderBoxPath = function calculateBorderBoxPath(curves) {\n  return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];\n};\nvar calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {\n  return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];\n};\nvar parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {\n  var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);\n  var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);\n  var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);\n  var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);\n  var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);\n  var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);\n  var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);\n  var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);\n  var factors = [];\n  factors.push((tlh + trh) / bounds.width);\n  factors.push((blh + brh) / bounds.width);\n  factors.push((tlv + blv) / bounds.height);\n  factors.push((trv + brv) / bounds.height);\n  var maxFactor = Math.max.apply(Math, factors);\n\n  if (maxFactor > 1) {\n    tlh /= maxFactor;\n    tlv /= maxFactor;\n    trh /= maxFactor;\n    trv /= maxFactor;\n    brh /= maxFactor;\n    brv /= maxFactor;\n    blh /= maxFactor;\n    blv /= maxFactor;\n  }\n\n  var topWidth = bounds.width - trh;\n  var rightHeight = bounds.height - brv;\n  var bottomWidth = bounds.width - brh;\n  var leftHeight = bounds.height - blv;\n  return {\n    topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left, bounds.top),\n    topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),\n    topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left + bounds.width, bounds.top),\n    topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),\n    bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left + bounds.width, bounds.top + bounds.height),\n    bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),\n    bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left, bounds.top + bounds.height),\n    bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)\n  };\n};\nvar CORNER = {\n  TOP_LEFT: 0,\n  TOP_RIGHT: 1,\n  BOTTOM_RIGHT: 2,\n  BOTTOM_LEFT: 3\n};\n\nvar getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {\n  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);\n  var ox = r1 * kappa; // control point offset horizontal\n\n  var oy = r2 * kappa; // control point offset vertical\n\n  var xm = x + r1; // x-middle\n\n  var ym = y + r2; // y-middle\n\n  switch (position) {\n    case CORNER.TOP_LEFT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, ym - oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm - ox, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm, y));\n\n    case CORNER.TOP_RIGHT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x + ox, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm, ym - oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm, ym));\n\n    case CORNER.BOTTOM_RIGHT:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm, y), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm, y + oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x + ox, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, ym));\n\n    case CORNER.BOTTOM_LEFT:\n    default:\n      return new _drawing_BezierCurve__WEBPACK_IMPORTED_MODULE_1__["default"](new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](xm - ox, ym), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y + oy), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/Bounds.js?'
                );
              },
            './src/Clone.js':
              /*!**********************!*\
  !*** ./src/Clone.js ***!
  \**********************/
              /*! exports provided: DocumentCloner, cloneWindow */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCloner", function() { return DocumentCloner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneWindow", function() { return cloneWindow; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ "./src/Bounds.js");\n/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "./src/Proxy.js");\n/* harmony import */ var _ResourceLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceLoader */ "./src/ResourceLoader.js");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ "./src/Util.js");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/background */ "./src/parsing/background.js");\n/* harmony import */ var _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./src/renderer/CanvasRenderer.js");\n/* harmony import */ var _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PseudoNodeContent */ "./src/PseudoNodeContent.js");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar IGNORE_ATTRIBUTE = \'data-html2canvas-ignore\';\nvar DocumentCloner =\n/*#__PURE__*/\nfunction () {\n  function DocumentCloner(element, options, logger, copyInline, renderer) {\n    _classCallCheck(this, DocumentCloner);\n\n    this.referenceElement = element;\n    this.scrolledElements = [];\n    this.copyStyles = copyInline;\n    this.inlineImages = copyInline;\n    this.logger = logger;\n    this.options = options;\n    this.renderer = renderer;\n    this.resourceLoader = new _ResourceLoader__WEBPACK_IMPORTED_MODULE_2__["default"](options, logger, window);\n    this.pseudoContentData = {\n      counters: {},\n      quoteDepth: 0\n    }; // $FlowFixMe\n\n    this.documentElement = this.cloneNode(element.ownerDocument.documentElement);\n  }\n\n  _createClass(DocumentCloner, [{\n    key: "inlineAllImages",\n    value: function inlineAllImages(node) {\n      var _this = this;\n\n      if (this.inlineImages && node) {\n        var style = node.style;\n        Promise.all(Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["parseBackgroundImage"])(style.backgroundImage).map(function (backgroundImage) {\n          if (backgroundImage.method === \'url\') {\n            return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {\n              return img && typeof img.src === \'string\' ? "url(\\"".concat(img.src, "\\")") : \'none\';\n            }).catch(function (e) {\n              if (true) {\n                _this.logger.log("Unable to load image", e);\n              }\n            });\n          }\n\n          return Promise.resolve("".concat(backgroundImage.prefix).concat(backgroundImage.method, "(").concat(backgroundImage.args.join(\',\'), ")"));\n        })).then(function (backgroundImages) {\n          if (backgroundImages.length > 1) {\n            // TODO Multiple backgrounds somehow broken in Chrome\n            style.backgroundColor = \'\';\n          }\n\n          style.backgroundImage = backgroundImages.join(\',\');\n        });\n\n        if (node instanceof HTMLImageElement) {\n          this.resourceLoader.inlineImage(node.src).then(function (img) {\n            if (img && node instanceof HTMLImageElement && node.parentNode) {\n              var parentNode = node.parentNode;\n              var clonedChild = Object(_Util__WEBPACK_IMPORTED_MODULE_3__["copyCSSStyles"])(node.style, img.cloneNode(false));\n              parentNode.replaceChild(clonedChild, node);\n            }\n          }).catch(function (e) {\n            if (true) {\n              _this.logger.log("Unable to load image", e);\n            }\n          });\n        }\n      }\n    }\n  }, {\n    key: "inlineFonts",\n    value: function inlineFonts(document) {\n      var _this2 = this;\n\n      return Promise.all(Array.from(document.styleSheets).map(function (sheet) {\n        if (sheet.href) {\n          return fetch(sheet.href).then(function (res) {\n            return res.text();\n          }).then(function (text) {\n            return createStyleSheetFontsFromText(text, sheet.href);\n          }).catch(function (e) {\n            if (true) {\n              _this2.logger.log("Unable to load stylesheet", e);\n            }\n\n            return [];\n          });\n        }\n\n        return getSheetFonts(sheet, document);\n      })).then(function (fonts) {\n        return fonts.reduce(function (acc, font) {\n          return acc.concat(font);\n        }, []);\n      }).then(function (fonts) {\n        return Promise.all(fonts.map(function (font) {\n          return fetch(font.formats[0].src).then(function (response) {\n            return response.blob();\n          }).then(function (blob) {\n            return new Promise(function (resolve, reject) {\n              var reader = new FileReader();\n              reader.onerror = reject;\n\n              reader.onload = function () {\n                // $FlowFixMe\n                var result = reader.result;\n                resolve(result);\n              };\n\n              reader.readAsDataURL(blob);\n            });\n          }).then(function (dataUri) {\n            font.fontFace.setProperty(\'src\', "url(\\"".concat(dataUri, "\\")"));\n            return "@font-face {".concat(font.fontFace.cssText, " ");\n          });\n        }));\n      }).then(function (fontCss) {\n        var style = document.createElement(\'style\');\n        style.textContent = fontCss.join(\'\\n\');\n\n        _this2.documentElement.appendChild(style);\n      });\n    }\n  }, {\n    key: "createElementClone",\n    value: function createElementClone(node) {\n      var _this3 = this;\n\n      if (this.copyStyles && node instanceof HTMLCanvasElement) {\n        var img = node.ownerDocument.createElement(\'img\');\n\n        try {\n          img.src = node.toDataURL();\n          return img;\n        } catch (e) {\n          if (true) {\n            this.logger.log("Unable to clone canvas contents, canvas is tainted");\n          }\n        }\n      }\n\n      if (node instanceof HTMLIFrameElement) {\n        var tempIframe = node.cloneNode(false);\n        var iframeKey = generateIframeKey();\n        tempIframe.setAttribute(\'data-html2canvas-internal-iframe-key\', iframeKey);\n\n        var _parseBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__["parseBounds"])(node, 0, 0),\n            width = _parseBounds.width,\n            height = _parseBounds.height;\n\n        this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {\n          return _this3.renderer(documentElement, {\n            allowTaint: _this3.options.allowTaint,\n            backgroundColor: \'#ffffff\',\n            canvas: null,\n            imageTimeout: _this3.options.imageTimeout,\n            logging: _this3.options.logging,\n            proxy: _this3.options.proxy,\n            removeContainer: _this3.options.removeContainer,\n            scale: _this3.options.scale,\n            foreignObjectRendering: _this3.options.foreignObjectRendering,\n            useCORS: _this3.options.useCORS,\n            target: new _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_5__["default"](),\n            width: width,\n            height: height,\n            x: 0,\n            y: 0,\n            windowWidth: documentElement.ownerDocument.defaultView.innerWidth,\n            windowHeight: documentElement.ownerDocument.defaultView.innerHeight,\n            scrollX: documentElement.ownerDocument.defaultView.pageXOffset,\n            scrollY: documentElement.ownerDocument.defaultView.pageYOffset\n          }, _this3.logger.child(iframeKey));\n        }).then(function (canvas) {\n          return new Promise(function (resolve, reject) {\n            var iframeCanvas = document.createElement(\'img\');\n\n            iframeCanvas.onload = function () {\n              return resolve(canvas);\n            };\n\n            iframeCanvas.onerror = function (event) {\n              // Empty iframes may result in empty "data:," URLs, which are invalid from the <img>\'s point of view\n              // and instead of `onload` cause `onerror` and unhandled rejection warnings\n              // https://github.com/niklasvh/html2canvas/issues/1502\n              iframeCanvas.src == \'data:,\' ? resolve(canvas) : reject(event);\n            };\n\n            iframeCanvas.src = canvas.toDataURL();\n\n            if (tempIframe.parentNode) {\n              tempIframe.parentNode.replaceChild(Object(_Util__WEBPACK_IMPORTED_MODULE_3__["copyCSSStyles"])(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);\n            }\n          });\n        });\n        return tempIframe;\n      }\n\n      try {\n        if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {\n          var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {\n            if (rule && rule.cssText) {\n              return css + rule.cssText;\n            }\n\n            return css;\n          }, \'\');\n          var style = node.cloneNode(false);\n          style.textContent = css;\n          return style;\n        }\n      } catch (e) {\n        // accessing node.sheet.cssRules throws a DOMException\n        this.logger.log(\'Unable to access cssRules property\');\n\n        if (e.name !== \'SecurityError\') {\n          this.logger.log(e);\n          throw e;\n        }\n      }\n\n      return node.cloneNode(false);\n    }\n  }, {\n    key: "cloneNode",\n    value: function cloneNode(node) {\n      var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);\n      var window = node.ownerDocument.defaultView;\n      var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;\n      var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, \':before\') : null;\n      var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, \':after\') : null;\n\n      if (this.referenceElement === node && clone instanceof window.HTMLElement) {\n        this.clonedReferenceElement = clone;\n      }\n\n      if (clone instanceof window.HTMLBodyElement) {\n        createPseudoHideStyles(clone);\n      }\n\n      var counters = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__["parseCounterReset"])(style, this.pseudoContentData);\n      var contentBefore = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__["resolvePseudoContent"])(node, styleBefore, this.pseudoContentData);\n\n      for (var child = node.firstChild; child; child = child.nextSibling) {\n        if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== \'SCRIPT\' && // $FlowFixMe\n        !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== \'function\' || // $FlowFixMe\n        !this.options.ignoreElements(child))) {\n          if (!this.copyStyles || child.nodeName !== \'STYLE\') {\n            clone.appendChild(this.cloneNode(child));\n          }\n        }\n      }\n\n      var contentAfter = Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__["resolvePseudoContent"])(node, styleAfter, this.pseudoContentData);\n      Object(_PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__["popCounters"])(counters, this.pseudoContentData);\n\n      if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {\n        if (styleBefore) {\n          this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));\n        }\n\n        if (styleAfter) {\n          this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));\n        }\n\n        if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {\n          Object(_Util__WEBPACK_IMPORTED_MODULE_3__["copyCSSStyles"])(style, clone);\n        }\n\n        this.inlineAllImages(clone);\n\n        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {\n          this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);\n        }\n\n        switch (node.nodeName) {\n          case \'CANVAS\':\n            if (!this.copyStyles) {\n              cloneCanvasContents(node, clone);\n            }\n\n            break;\n\n          case \'TEXTAREA\':\n          case \'SELECT\':\n            clone.value = node.value;\n            break;\n        }\n      }\n\n      return clone;\n    }\n  }]);\n\n  return DocumentCloner;\n}();\n\nvar getSheetFonts = function getSheetFonts(sheet, document) {\n  // $FlowFixMe\n  return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {\n    return rule.type === CSSRule.FONT_FACE_RULE;\n  }).map(function (rule) {\n    var src = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["parseBackgroundImage"])(rule.style.getPropertyValue(\'src\'));\n    var formats = [];\n\n    for (var i = 0; i < src.length; i++) {\n      if (src[i].method === \'url\' && src[i + 1] && src[i + 1].method === \'format\') {\n        var a = document.createElement(\'a\');\n        a.href = src[i].args[0];\n\n        if (document.body) {\n          document.body.appendChild(a);\n        }\n\n        var font = {\n          src: a.href,\n          format: src[i + 1].args[0]\n        };\n        formats.push(font);\n      }\n    }\n\n    return {\n      // TODO select correct format for browser),\n      formats: formats.filter(function (font) {\n        return /^woff/i.test(font.format);\n      }),\n      fontFace: rule.style\n    };\n  }).filter(function (font) {\n    return font.formats.length;\n  });\n};\n\nvar createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {\n  var doc = document.implementation.createHTMLDocument(\'\');\n  var base = document.createElement(\'base\'); // $FlowFixMe\n\n  base.href = baseHref;\n  var style = document.createElement(\'style\');\n  style.textContent = text;\n\n  if (doc.head) {\n    doc.head.appendChild(base);\n  }\n\n  if (doc.body) {\n    doc.body.appendChild(style);\n  }\n\n  return style.sheet ? getSheetFonts(style.sheet, doc) : [];\n};\n\nvar restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {\n  if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {\n    ownerDocument.defaultView.scrollTo(x, y);\n  }\n};\n\nvar cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {\n  try {\n    if (clonedCanvas) {\n      clonedCanvas.width = canvas.width;\n      clonedCanvas.height = canvas.height;\n      var ctx = canvas.getContext(\'2d\');\n      var clonedCtx = clonedCanvas.getContext(\'2d\');\n\n      if (ctx) {\n        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);\n      } else {\n        clonedCtx.drawImage(canvas, 0, 0);\n      }\n    }\n  } catch (e) {}\n};\n\nvar inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {\n  if (!style || !style.content || style.content === \'none\' || style.content === \'-moz-alt-content\' || style.display === \'none\') {\n    return;\n  }\n\n  var anonymousReplacedElement = clone.ownerDocument.createElement(\'html2canvaspseudoelement\');\n  Object(_Util__WEBPACK_IMPORTED_MODULE_3__["copyCSSStyles"])(style, anonymousReplacedElement);\n\n  if (contentItems) {\n    var len = contentItems.length;\n\n    for (var i = 0; i < len; i++) {\n      var item = contentItems[i];\n\n      switch (item.type) {\n        case _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__["PSEUDO_CONTENT_ITEM_TYPE"].IMAGE:\n          var img = clone.ownerDocument.createElement(\'img\');\n          img.src = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["parseBackgroundImage"])("url(".concat(item.value, ")"))[0].args[0];\n          img.style.opacity = \'1\';\n          anonymousReplacedElement.appendChild(img);\n          break;\n\n        case _PseudoNodeContent__WEBPACK_IMPORTED_MODULE_6__["PSEUDO_CONTENT_ITEM_TYPE"].TEXT:\n          anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));\n          break;\n      }\n    }\n  }\n\n  anonymousReplacedElement.className = "".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE, " ").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);\n  clone.className += pseudoElt === PSEUDO_BEFORE ? " ".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE) : " ".concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);\n\n  if (pseudoElt === PSEUDO_BEFORE) {\n    clone.insertBefore(anonymousReplacedElement, clone.firstChild);\n  } else {\n    clone.appendChild(anonymousReplacedElement);\n  }\n\n  return anonymousReplacedElement;\n};\n\nvar URL_REGEXP = /^url\\((.+)\\)$/i;\nvar PSEUDO_BEFORE = \':before\';\nvar PSEUDO_AFTER = \':after\';\nvar PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = \'___html2canvas___pseudoelement_before\';\nvar PSEUDO_HIDE_ELEMENT_CLASS_AFTER = \'___html2canvas___pseudoelement_after\';\nvar PSEUDO_HIDE_ELEMENT_STYLE = "{\\n    content: \\"\\" !important;\\n    display: none !important;\\n}";\n\nvar createPseudoHideStyles = function createPseudoHideStyles(body) {\n  createStyles(body, ".".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE).concat(PSEUDO_BEFORE).concat(PSEUDO_HIDE_ELEMENT_STYLE, "\\n         .").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER).concat(PSEUDO_AFTER).concat(PSEUDO_HIDE_ELEMENT_STYLE));\n};\n\nvar createStyles = function createStyles(body, styles) {\n  var style = body.ownerDocument.createElement(\'style\');\n  style.innerHTML = styles;\n  body.appendChild(style);\n};\n\nvar initNode = function initNode(_ref) {\n  var _ref2 = _slicedToArray(_ref, 3),\n      element = _ref2[0],\n      x = _ref2[1],\n      y = _ref2[2];\n\n  element.scrollLeft = x;\n  element.scrollTop = y;\n};\n\nvar generateIframeKey = function generateIframeKey() {\n  return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);\n};\n\nvar DATA_URI_REGEXP = /^data:text\\/(.+);(base64)?,(.*)$/i;\n\nvar getIframeDocumentElement = function getIframeDocumentElement(node, options) {\n  try {\n    return Promise.resolve(node.contentWindow.document.documentElement);\n  } catch (e) {\n    return options.proxy ? Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__["Proxy"])(node.src, options).then(function (html) {\n      var match = html.match(DATA_URI_REGEXP);\n\n      if (!match) {\n        return Promise.reject();\n      }\n\n      return match[2] === \'base64\' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);\n    }).then(function (html) {\n      return createIframeContainer(node.ownerDocument, Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__["parseBounds"])(node, 0, 0)).then(function (cloneIframeContainer) {\n        var cloneWindow = cloneIframeContainer.contentWindow;\n        var documentClone = cloneWindow.document;\n        documentClone.open();\n        documentClone.write(html);\n        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {\n          return documentClone.documentElement;\n        });\n        documentClone.close();\n        return iframeLoad;\n      });\n    }) : Promise.reject();\n  }\n};\n\nvar createIframeContainer = function createIframeContainer(ownerDocument, bounds) {\n  var cloneIframeContainer = ownerDocument.createElement(\'iframe\');\n  cloneIframeContainer.className = \'html2canvas-container\';\n  cloneIframeContainer.style.visibility = \'hidden\';\n  cloneIframeContainer.style.position = \'fixed\';\n  cloneIframeContainer.style.left = \'-10000px\';\n  cloneIframeContainer.style.top = \'0px\';\n  cloneIframeContainer.style.border = \'0\';\n  cloneIframeContainer.width = bounds.width.toString();\n  cloneIframeContainer.height = bounds.height.toString();\n  cloneIframeContainer.scrolling = \'no\'; // ios won\'t scroll without it\n\n  cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, \'true\');\n\n  if (!ownerDocument.body) {\n    return Promise.reject( true ? "Body element not found in Document that is getting rendered" : undefined);\n  }\n\n  ownerDocument.body.appendChild(cloneIframeContainer);\n  return Promise.resolve(cloneIframeContainer);\n};\n\nvar iframeLoader = function iframeLoader(cloneIframeContainer) {\n  var cloneWindow = cloneIframeContainer.contentWindow;\n  var documentClone = cloneWindow.document;\n  return new Promise(function (resolve, reject) {\n    cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {\n      var interval = setInterval(function () {\n        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === \'complete\') {\n          clearInterval(interval);\n          resolve(cloneIframeContainer);\n        }\n      }, 50);\n    };\n  });\n};\n\nvar cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {\n  var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);\n  var scrollX = ownerDocument.defaultView.pageXOffset;\n  var scrollY = ownerDocument.defaultView.pageYOffset;\n  return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {\n    var cloneWindow = cloneIframeContainer.contentWindow;\n    var documentClone = cloneWindow.document;\n    /* Chrome doesn\'t detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle\n         if window url is about:blank, we can assign the url to current by writing onto the document\n         */\n\n    var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {\n      cloner.scrolledElements.forEach(initNode);\n      cloneWindow.scrollTo(bounds.left, bounds.top);\n\n      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {\n        documentClone.documentElement.style.top = -bounds.top + \'px\';\n        documentClone.documentElement.style.left = -bounds.left + \'px\';\n        documentClone.documentElement.style.position = \'absolute\';\n      }\n\n      var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);\n      var onclone = options.onclone;\n      return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === \'function\' ? Promise.resolve().then(function () {\n        return onclone(documentClone);\n      }).then(function () {\n        return result;\n      }) : result : Promise.reject( true ? "Error finding the ".concat(referenceElement.nodeName, " in the cloned document") : undefined);\n    });\n    documentClone.open();\n    documentClone.write("".concat(serializeDoctype(document.doctype), "<html></html>")); // Chrome scrolls the parent document for some reason after the write to the cloned window???\n\n    restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);\n    documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);\n    documentClone.close();\n    return iframeLoad;\n  });\n};\n\nvar serializeDoctype = function serializeDoctype(doctype) {\n  var str = \'\';\n\n  if (doctype) {\n    str += \'<!DOCTYPE \';\n\n    if (doctype.name) {\n      str += doctype.name;\n    }\n\n    if (doctype.internalSubset) {\n      str += doctype.internalSubset;\n    }\n\n    if (doctype.publicId) {\n      str += "\\"".concat(doctype.publicId, "\\"");\n    }\n\n    if (doctype.systemId) {\n      str += "\\"".concat(doctype.systemId, "\\"");\n    }\n\n    str += \'>\';\n  }\n\n  return str;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Clone.js?'
                );
              },
            './src/Color.js':
              /*!**********************!*\
  !*** ./src/Color.js ***!
  \**********************/
              /*! exports provided: default, TRANSPARENT */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSPARENT", function() { return TRANSPARENT; });\n // http://dev.w3.org/csswg/css-color/\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HEX3 = /^#([a-f0-9]{3})$/i;\n\nvar hex3 = function hex3(value) {\n  var match = value.match(HEX3);\n\n  if (match) {\n    return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];\n  }\n\n  return false;\n};\n\nvar HEX6 = /^#([a-f0-9]{6})$/i;\n\nvar hex6 = function hex6(value) {\n  var match = value.match(HEX6);\n\n  if (match) {\n    return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];\n  }\n\n  return false;\n};\n\nvar RGB = /^rgb\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$/;\n\nvar rgb = function rgb(value) {\n  var match = value.match(RGB);\n\n  if (match) {\n    return [Number(match[1]), Number(match[2]), Number(match[3]), null];\n  }\n\n  return false;\n};\n\nvar RGBA = /^rgba\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d?\\.?\\d+)\\s*\\)$/;\n\nvar rgba = function rgba(value) {\n  var match = value.match(RGBA);\n\n  if (match && match.length > 4) {\n    return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];\n  }\n\n  return false;\n};\n\nvar fromArray = function fromArray(array) {\n  return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];\n};\n\nvar namedColor = function namedColor(name) {\n  var color = NAMED_COLORS[name.toLowerCase()];\n  return color ? color : false;\n};\n\nvar Color =\n/*#__PURE__*/\nfunction () {\n  function Color(value) {\n    _classCallCheck(this, Color);\n\n    var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],\n        _ref2 = _slicedToArray(_ref, 4),\n        r = _ref2[0],\n        g = _ref2[1],\n        b = _ref2[2],\n        a = _ref2[3];\n\n    this.r = r;\n    this.g = g;\n    this.b = b;\n    this.a = a;\n  }\n\n  _createClass(Color, [{\n    key: "isTransparent",\n    value: function isTransparent() {\n      return this.a === 0;\n    }\n  }, {\n    key: "toString",\n    value: function toString() {\n      return this.a !== null && this.a !== 1 ? "rgba(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ",").concat(this.a, ")") : "rgb(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ")");\n    }\n  }]);\n\n  return Color;\n}();\n\n\nvar NAMED_COLORS = {\n  transparent: [0, 0, 0, 0],\n  aliceblue: [240, 248, 255, null],\n  antiquewhite: [250, 235, 215, null],\n  aqua: [0, 255, 255, null],\n  aquamarine: [127, 255, 212, null],\n  azure: [240, 255, 255, null],\n  beige: [245, 245, 220, null],\n  bisque: [255, 228, 196, null],\n  black: [0, 0, 0, null],\n  blanchedalmond: [255, 235, 205, null],\n  blue: [0, 0, 255, null],\n  blueviolet: [138, 43, 226, null],\n  brown: [165, 42, 42, null],\n  burlywood: [222, 184, 135, null],\n  cadetblue: [95, 158, 160, null],\n  chartreuse: [127, 255, 0, null],\n  chocolate: [210, 105, 30, null],\n  coral: [255, 127, 80, null],\n  cornflowerblue: [100, 149, 237, null],\n  cornsilk: [255, 248, 220, null],\n  crimson: [220, 20, 60, null],\n  cyan: [0, 255, 255, null],\n  darkblue: [0, 0, 139, null],\n  darkcyan: [0, 139, 139, null],\n  darkgoldenrod: [184, 134, 11, null],\n  darkgray: [169, 169, 169, null],\n  darkgreen: [0, 100, 0, null],\n  darkgrey: [169, 169, 169, null],\n  darkkhaki: [189, 183, 107, null],\n  darkmagenta: [139, 0, 139, null],\n  darkolivegreen: [85, 107, 47, null],\n  darkorange: [255, 140, 0, null],\n  darkorchid: [153, 50, 204, null],\n  darkred: [139, 0, 0, null],\n  darksalmon: [233, 150, 122, null],\n  darkseagreen: [143, 188, 143, null],\n  darkslateblue: [72, 61, 139, null],\n  darkslategray: [47, 79, 79, null],\n  darkslategrey: [47, 79, 79, null],\n  darkturquoise: [0, 206, 209, null],\n  darkviolet: [148, 0, 211, null],\n  deeppink: [255, 20, 147, null],\n  deepskyblue: [0, 191, 255, null],\n  dimgray: [105, 105, 105, null],\n  dimgrey: [105, 105, 105, null],\n  dodgerblue: [30, 144, 255, null],\n  firebrick: [178, 34, 34, null],\n  floralwhite: [255, 250, 240, null],\n  forestgreen: [34, 139, 34, null],\n  fuchsia: [255, 0, 255, null],\n  gainsboro: [220, 220, 220, null],\n  ghostwhite: [248, 248, 255, null],\n  gold: [255, 215, 0, null],\n  goldenrod: [218, 165, 32, null],\n  gray: [128, 128, 128, null],\n  green: [0, 128, 0, null],\n  greenyellow: [173, 255, 47, null],\n  grey: [128, 128, 128, null],\n  honeydew: [240, 255, 240, null],\n  hotpink: [255, 105, 180, null],\n  indianred: [205, 92, 92, null],\n  indigo: [75, 0, 130, null],\n  ivory: [255, 255, 240, null],\n  khaki: [240, 230, 140, null],\n  lavender: [230, 230, 250, null],\n  lavenderblush: [255, 240, 245, null],\n  lawngreen: [124, 252, 0, null],\n  lemonchiffon: [255, 250, 205, null],\n  lightblue: [173, 216, 230, null],\n  lightcoral: [240, 128, 128, null],\n  lightcyan: [224, 255, 255, null],\n  lightgoldenrodyellow: [250, 250, 210, null],\n  lightgray: [211, 211, 211, null],\n  lightgreen: [144, 238, 144, null],\n  lightgrey: [211, 211, 211, null],\n  lightpink: [255, 182, 193, null],\n  lightsalmon: [255, 160, 122, null],\n  lightseagreen: [32, 178, 170, null],\n  lightskyblue: [135, 206, 250, null],\n  lightslategray: [119, 136, 153, null],\n  lightslategrey: [119, 136, 153, null],\n  lightsteelblue: [176, 196, 222, null],\n  lightyellow: [255, 255, 224, null],\n  lime: [0, 255, 0, null],\n  limegreen: [50, 205, 50, null],\n  linen: [250, 240, 230, null],\n  magenta: [255, 0, 255, null],\n  maroon: [128, 0, 0, null],\n  mediumaquamarine: [102, 205, 170, null],\n  mediumblue: [0, 0, 205, null],\n  mediumorchid: [186, 85, 211, null],\n  mediumpurple: [147, 112, 219, null],\n  mediumseagreen: [60, 179, 113, null],\n  mediumslateblue: [123, 104, 238, null],\n  mediumspringgreen: [0, 250, 154, null],\n  mediumturquoise: [72, 209, 204, null],\n  mediumvioletred: [199, 21, 133, null],\n  midnightblue: [25, 25, 112, null],\n  mintcream: [245, 255, 250, null],\n  mistyrose: [255, 228, 225, null],\n  moccasin: [255, 228, 181, null],\n  navajowhite: [255, 222, 173, null],\n  navy: [0, 0, 128, null],\n  oldlace: [253, 245, 230, null],\n  olive: [128, 128, 0, null],\n  olivedrab: [107, 142, 35, null],\n  orange: [255, 165, 0, null],\n  orangered: [255, 69, 0, null],\n  orchid: [218, 112, 214, null],\n  palegoldenrod: [238, 232, 170, null],\n  palegreen: [152, 251, 152, null],\n  paleturquoise: [175, 238, 238, null],\n  palevioletred: [219, 112, 147, null],\n  papayawhip: [255, 239, 213, null],\n  peachpuff: [255, 218, 185, null],\n  peru: [205, 133, 63, null],\n  pink: [255, 192, 203, null],\n  plum: [221, 160, 221, null],\n  powderblue: [176, 224, 230, null],\n  purple: [128, 0, 128, null],\n  rebeccapurple: [102, 51, 153, null],\n  red: [255, 0, 0, null],\n  rosybrown: [188, 143, 143, null],\n  royalblue: [65, 105, 225, null],\n  saddlebrown: [139, 69, 19, null],\n  salmon: [250, 128, 114, null],\n  sandybrown: [244, 164, 96, null],\n  seagreen: [46, 139, 87, null],\n  seashell: [255, 245, 238, null],\n  sienna: [160, 82, 45, null],\n  silver: [192, 192, 192, null],\n  skyblue: [135, 206, 235, null],\n  slateblue: [106, 90, 205, null],\n  slategray: [112, 128, 144, null],\n  slategrey: [112, 128, 144, null],\n  snow: [255, 250, 250, null],\n  springgreen: [0, 255, 127, null],\n  steelblue: [70, 130, 180, null],\n  tan: [210, 180, 140, null],\n  teal: [0, 128, 128, null],\n  thistle: [216, 191, 216, null],\n  tomato: [255, 99, 71, null],\n  turquoise: [64, 224, 208, null],\n  violet: [238, 130, 238, null],\n  wheat: [245, 222, 179, null],\n  white: [255, 255, 255, null],\n  whitesmoke: [245, 245, 245, null],\n  yellow: [255, 255, 0, null],\n  yellowgreen: [154, 205, 50, null]\n};\nvar TRANSPARENT = new Color([0, 0, 0, 0]);\n\n//# sourceURL=webpack://html2canvas/./src/Color.js?'
                );
              },
            './src/Feature.js':
              /*!************************!*\
  !*** ./src/Feature.js ***!
  \************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ \"./src/renderer/ForeignObjectRenderer.js\");\n\n\n\n\nvar testRangeBounds = function testRangeBounds(document) {\n  var TEST_HEIGHT = 123;\n\n  if (document.createRange) {\n    var range = document.createRange();\n\n    if (range.getBoundingClientRect) {\n      var testElement = document.createElement('boundtest');\n      testElement.style.height = \"\".concat(TEST_HEIGHT, \"px\");\n      testElement.style.display = 'block';\n      document.body.appendChild(testElement);\n      range.selectNode(testElement);\n      var rangeBounds = range.getBoundingClientRect();\n      var rangeHeight = Math.round(rangeBounds.height);\n      document.body.removeChild(testElement);\n\n      if (rangeHeight === TEST_HEIGHT) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar testCORS = function testCORS() {\n  return typeof new Image().crossOrigin !== 'undefined';\n};\n\nvar testResponseType = function testResponseType() {\n  return typeof new XMLHttpRequest().responseType === 'string';\n};\n\nvar testSVG = function testSVG(document) {\n  var img = new Image();\n  var canvas = document.createElement('canvas');\n  var ctx = canvas.getContext('2d');\n  img.src = \"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>\";\n\n  try {\n    ctx.drawImage(img, 0, 0);\n    canvas.toDataURL();\n  } catch (e) {\n    return false;\n  }\n\n  return true;\n};\n\nvar isGreenPixel = function isGreenPixel(data) {\n  return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;\n};\n\nvar testForeignObject = function testForeignObject(document) {\n  var canvas = document.createElement('canvas');\n  var size = 100;\n  canvas.width = size;\n  canvas.height = size;\n  var ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'rgb(0, 255, 0)';\n  ctx.fillRect(0, 0, size, size);\n  var img = new Image();\n  var greenImageSrc = canvas.toDataURL();\n  img.src = greenImageSrc;\n  var svg = Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"createForeignObjectSVG\"])(size, size, 0, 0, img);\n  ctx.fillStyle = 'red';\n  ctx.fillRect(0, 0, size, size);\n  return Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"loadSerializedSVG\"])(svg).then(function (img) {\n    ctx.drawImage(img, 0, 0);\n    var data = ctx.getImageData(0, 0, size, size).data;\n    ctx.fillStyle = 'red';\n    ctx.fillRect(0, 0, size, size);\n    var node = document.createElement('div');\n    node.style.backgroundImage = \"url(\".concat(greenImageSrc, \")\");\n    node.style.height = \"\".concat(size, \"px\"); // Firefox 55 does not render inline <img /> tags\n\n    return isGreenPixel(data) ? Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"loadSerializedSVG\"])(Object(_renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_0__[\"createForeignObjectSVG\"])(size, size, 0, 0, node)) : Promise.reject(false);\n  }).then(function (img) {\n    ctx.drawImage(img, 0, 0); // Edge does not render background-images\n\n    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);\n  }).catch(function (e) {\n    return false;\n  });\n};\n\nvar FEATURES = {\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_RANGE_BOUNDS() {\n    'use strict';\n\n    var value = testRangeBounds(document);\n    Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_SVG_DRAWING() {\n    'use strict';\n\n    var value = testSVG(document);\n    Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_FOREIGNOBJECT_DRAWING() {\n    'use strict';\n\n    var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);\n    Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_CORS_IMAGES() {\n    'use strict';\n\n    var value = testCORS();\n    Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_RESPONSE_TYPE() {\n    'use strict';\n\n    var value = testResponseType();\n    Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {\n      value: value\n    });\n    return value;\n  },\n\n  // $FlowFixMe - get/set properties not yet supported\n  get SUPPORT_CORS_XHR() {\n    'use strict';\n\n    var value = 'withCredentials' in new XMLHttpRequest();\n    Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {\n      value: value\n    });\n    return value;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FEATURES);\n\n//# sourceURL=webpack://html2canvas/./src/Feature.js?"
                );
              },
            './src/Font.js':
              /*!*********************!*\
  !*** ./src/Font.js ***!
  \*********************/
              /*! exports provided: FontMetrics */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontMetrics\", function() { return FontMetrics; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SAMPLE_TEXT = 'Hidden Text';\n\nvar FontMetrics =\n/*#__PURE__*/\nfunction () {\n  function FontMetrics(document) {\n    _classCallCheck(this, FontMetrics);\n\n    this._data = {};\n    this._document = document;\n  }\n\n  _createClass(FontMetrics, [{\n    key: \"_parseMetrics\",\n    value: function _parseMetrics(font) {\n      var container = this._document.createElement('div');\n\n      var img = this._document.createElement('img');\n\n      var span = this._document.createElement('span');\n\n      var body = this._document.body;\n\n      if (!body) {\n        throw new Error( true ? 'No document found for font metrics' : undefined);\n      }\n\n      container.style.visibility = 'hidden';\n      container.style.fontFamily = font.fontFamily;\n      container.style.fontSize = font.fontSize;\n      container.style.margin = '0';\n      container.style.padding = '0';\n      body.appendChild(container);\n      img.src = _Util__WEBPACK_IMPORTED_MODULE_0__[\"SMALL_IMAGE\"];\n      img.width = 1;\n      img.height = 1;\n      img.style.margin = '0';\n      img.style.padding = '0';\n      img.style.verticalAlign = 'baseline';\n      span.style.fontFamily = font.fontFamily;\n      span.style.fontSize = font.fontSize;\n      span.style.margin = '0';\n      span.style.padding = '0';\n      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));\n      container.appendChild(span);\n      container.appendChild(img);\n      var baseline = img.offsetTop - span.offsetTop + 2;\n      container.removeChild(span);\n      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));\n      container.style.lineHeight = 'normal';\n      img.style.verticalAlign = 'super';\n      var middle = img.offsetTop - container.offsetTop + 2;\n      body.removeChild(container);\n      return {\n        baseline: baseline,\n        middle: middle\n      };\n    }\n  }, {\n    key: \"getMetrics\",\n    value: function getMetrics(font) {\n      var key = \"\".concat(font.fontFamily, \" \").concat(font.fontSize);\n\n      if (this._data[key] === undefined) {\n        this._data[key] = this._parseMetrics(font);\n      }\n\n      return this._data[key];\n    }\n  }]);\n\n  return FontMetrics;\n}();\n\n//# sourceURL=webpack://html2canvas/./src/Font.js?"
                );
              },
            './src/Gradient.js':
              /*!*************************!*\
  !*** ./src/Gradient.js ***!
  \*************************/
              /*! exports provided: GRADIENT_TYPE, RADIAL_GRADIENT_SHAPE, LinearGradient, RadialGradient, parseGradient, transformWebkitRadialGradientArgs */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRADIENT_TYPE\", function() { return GRADIENT_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RADIAL_GRADIENT_SHAPE\", function() { return RADIAL_GRADIENT_SHAPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinearGradient\", function() { return LinearGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RadialGradient\", function() { return RadialGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseGradient\", function() { return parseGradient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformWebkitRadialGradientArgs\", function() { return transformWebkitRadialGradientArgs; });\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _Angle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Angle */ \"./src/Angle.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ \"./src/Color.js\");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Length */ \"./src/Length.js\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;\nvar PERCENTAGE_ANGLES = /^([+-]?\\d*\\.?\\d+)% ([+-]?\\d*\\.?\\d+)%$/i;\nvar ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;\nvar FROM_TO_COLORSTOP = /^(from|to|color-stop)\\((?:([\\d.]+)(%)?,\\s*)?(.+?)\\)$/i;\nvar RADIAL_SHAPE_DEFINITION = /^\\s*(circle|ellipse)?\\s*((?:([\\d.]+)(px|r?em|%)\\s*(?:([\\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\\s*(?:at\\s*(?:(left|center|right)|([\\d.]+)(px|r?em|%))\\s+(?:(top|center|bottom)|([\\d.]+)(px|r?em|%)))?(?:\\s|$)/i;\nvar GRADIENT_TYPE = {\n  LINEAR_GRADIENT: 0,\n  RADIAL_GRADIENT: 1\n};\nvar RADIAL_GRADIENT_SHAPE = {\n  CIRCLE: 0,\n  ELLIPSE: 1\n};\nvar LENGTH_FOR_POSITION = {\n  left: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%'),\n  top: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%'),\n  center: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('50%'),\n  right: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%'),\n  bottom: new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%')\n};\nvar LinearGradient = function LinearGradient(colorStops, direction) {\n  _classCallCheck(this, LinearGradient);\n\n  this.type = GRADIENT_TYPE.LINEAR_GRADIENT;\n  this.colorStops = colorStops;\n  this.direction = direction;\n};\nvar RadialGradient = function RadialGradient(colorStops, shape, center, radius) {\n  _classCallCheck(this, RadialGradient);\n\n  this.type = GRADIENT_TYPE.RADIAL_GRADIENT;\n  this.colorStops = colorStops;\n  this.shape = shape;\n  this.center = center;\n  this.radius = radius;\n};\nvar parseGradient = function parseGradient(container, _ref, bounds) {\n  var args = _ref.args,\n      method = _ref.method,\n      prefix = _ref.prefix;\n\n  if (method === 'linear-gradient') {\n    return parseLinearGradient(args, bounds, !!prefix);\n  } else if (method === 'gradient' && args[0] === 'linear') {\n    // TODO handle correct angle\n    return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);\n  } else if (method === 'radial-gradient') {\n    return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);\n  } else if (method === 'gradient' && args[0] === 'radial') {\n    return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);\n  }\n};\n\nvar parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {\n  var colorStops = [];\n\n  for (var i = firstColorStopIndex; i < args.length; i++) {\n    var value = args[i];\n    var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);\n    var lastSpaceIndex = value.lastIndexOf(' ');\n    var color = new _Color__WEBPACK_IMPORTED_MODULE_2__[\"default\"](HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);\n    var stop = HAS_LENGTH ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"](value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('0%') : i === args.length - 1 ? new _Length__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('100%') : null;\n    colorStops.push({\n      color: color,\n      stop: stop\n    });\n  }\n\n  var absoluteValuedColorStops = colorStops.map(function (_ref2) {\n    var color = _ref2.color,\n        stop = _ref2.stop;\n    var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;\n    return {\n      color: color,\n      // $FlowFixMe\n      stop: absoluteStop\n    };\n  });\n  var previousColorStop = absoluteValuedColorStops[0].stop;\n\n  for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {\n    if (previousColorStop !== null) {\n      var _stop = absoluteValuedColorStops[_i].stop;\n\n      if (_stop === null) {\n        var n = _i;\n\n        while (absoluteValuedColorStops[n].stop === null) {\n          n++;\n        }\n\n        var steps = n - _i + 1;\n        var nextColorStep = absoluteValuedColorStops[n].stop;\n        var stepSize = (nextColorStep - previousColorStop) / steps;\n\n        for (; _i < n; _i++) {\n          previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;\n        }\n      } else {\n        previousColorStop = _stop;\n      }\n    }\n  }\n\n  return absoluteValuedColorStops;\n};\n\nvar parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {\n  var angle = Object(_Angle__WEBPACK_IMPORTED_MODULE_1__[\"parseAngle\"])(args[0]);\n  var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);\n  var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);\n  var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection( // if there is a prefix, the 0° angle points due East (instead of North per W3C)\n  hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);\n  var firstColorStopIndex = HAS_DIRECTION ? 1 : 0; // TODO: Fix some inaccuracy with color stops with px values\n\n  var lineLength = Math.min(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);\n  return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);\n};\n\nvar parseRadialGradient = function parseRadialGradient(container, args, bounds) {\n  var m = args[0].match(RADIAL_SHAPE_DEFINITION);\n  var shape = m && (m[1] === 'circle' || // explicit shape specification\n  m[3] !== undefined && m[5] === undefined) // only one radius coordinate\n  ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;\n  var radius = {};\n  var center = {};\n\n  if (m) {\n    // Radius\n    if (m[3] !== undefined) {\n      radius.x = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[3], m[4]).getAbsoluteValue(bounds.width);\n    }\n\n    if (m[5] !== undefined) {\n      radius.y = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[5], m[6]).getAbsoluteValue(bounds.height);\n    } // Position\n\n\n    if (m[7]) {\n      center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];\n    } else if (m[8] !== undefined) {\n      center.x = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[8], m[9]);\n    }\n\n    if (m[10]) {\n      center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];\n    } else if (m[11] !== undefined) {\n      center.y = Object(_Length__WEBPACK_IMPORTED_MODULE_3__[\"calculateLengthFromValueWithUnit\"])(container, m[11], m[12]);\n    }\n  }\n\n  var gradientCenter = {\n    x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),\n    y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)\n  };\n  var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);\n  return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);\n};\n\nvar calculateGradientDirection = function calculateGradientDirection(radian, bounds) {\n  var width = bounds.width;\n  var height = bounds.height;\n  var HALF_WIDTH = width * 0.5;\n  var HALF_HEIGHT = height * 0.5;\n  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));\n  var HALF_LINE_LENGTH = lineLength / 2;\n  var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;\n  var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;\n  var x1 = width - x0;\n  var y1 = height - y0;\n  return {\n    x0: x0,\n    x1: x1,\n    y0: y0,\n    y1: y1\n  };\n};\n\nvar parseTopRight = function parseTopRight(bounds) {\n  return Math.acos(bounds.width / 2 / (Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(bounds.width, bounds.height) / 2));\n};\n\nvar parseSideOrCorner = function parseSideOrCorner(side, bounds) {\n  switch (side) {\n    case 'bottom':\n    case 'to top':\n      return calculateGradientDirection(0, bounds);\n\n    case 'left':\n    case 'to right':\n      return calculateGradientDirection(Math.PI / 2, bounds);\n\n    case 'right':\n    case 'to left':\n      return calculateGradientDirection(3 * Math.PI / 2, bounds);\n\n    case 'top right':\n    case 'right top':\n    case 'to bottom left':\n    case 'to left bottom':\n      return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);\n\n    case 'top left':\n    case 'left top':\n    case 'to bottom right':\n    case 'to right bottom':\n      return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);\n\n    case 'bottom left':\n    case 'left bottom':\n    case 'to top right':\n    case 'to right top':\n      return calculateGradientDirection(parseTopRight(bounds), bounds);\n\n    case 'bottom right':\n    case 'right bottom':\n    case 'to top left':\n    case 'to left top':\n      return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);\n\n    case 'top':\n    case 'to bottom':\n    default:\n      return calculateGradientDirection(Math.PI, bounds);\n  }\n};\n\nvar parsePercentageAngle = function parsePercentageAngle(angle, bounds) {\n  var _angle$split$map = angle.split(' ').map(parseFloat),\n      _angle$split$map2 = _slicedToArray(_angle$split$map, 2),\n      left = _angle$split$map2[0],\n      top = _angle$split$map2[1];\n\n  var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);\n  return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);\n};\n\nvar findCorner = function findCorner(bounds, x, y, closest) {\n  var corners = [{\n    x: 0,\n    y: 0\n  }, {\n    x: 0,\n    y: bounds.height\n  }, {\n    x: bounds.width,\n    y: 0\n  }, {\n    x: bounds.width,\n    y: bounds.height\n  }]; // $FlowFixMe\n\n  return corners.reduce(function (stat, corner) {\n    var d = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - corner.x, y - corner.y);\n\n    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {\n      return {\n        optimumCorner: corner,\n        optimumDistance: d\n      };\n    }\n\n    return stat;\n  }, {\n    optimumDistance: closest ? Infinity : -Infinity,\n    optimumCorner: null\n  }).optimumCorner;\n};\n\nvar calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {\n  var x = center.x;\n  var y = center.y;\n  var rx = 0;\n  var ry = 0;\n\n  switch (extent) {\n    case 'closest-side':\n      // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.\n      // If the shape is an ellipse, it exactly meets the closest side in each dimension.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));\n        ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));\n      }\n\n      break;\n\n    case 'closest-corner':\n      // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.\n      // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.min(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y - bounds.height), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        // Compute the ratio ry/rx (which is to be the same as for \"closest-side\")\n        var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));\n        var corner = findCorner(bounds, x, y, true);\n        rx = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(corner.x - x, (corner.y - y) / c);\n        ry = c * rx;\n      }\n\n      break;\n\n    case 'farthest-side':\n      // Same as closest-side, except the ending shape is sized based on the farthest side(s)\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));\n        ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));\n      }\n\n      break;\n\n    case 'farthest-corner':\n      // Same as closest-corner, except the ending shape is sized based on the farthest corner.\n      // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.\n      if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {\n        rx = ry = Math.max(Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x, y - bounds.height), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y), Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(x - bounds.width, y - bounds.height));\n      } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {\n        // Compute the ratio ry/rx (which is to be the same as for \"farthest-side\")\n        var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));\n\n        var _corner = findCorner(bounds, x, y, false);\n\n        rx = Object(_Util__WEBPACK_IMPORTED_MODULE_4__[\"distance\"])(_corner.x - x, (_corner.y - y) / _c);\n        ry = _c * rx;\n      }\n\n      break;\n\n    default:\n      // pixel or percentage values\n      rx = radius.x || 0;\n      ry = radius.y !== undefined ? radius.y : rx;\n      break;\n  }\n\n  return {\n    x: rx,\n    y: ry\n  };\n};\n\nvar transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {\n  var shape = '';\n  var radius = '';\n  var extent = '';\n  var position = '';\n  var idx = 0;\n  var POSITION = /^(left|center|right|\\d+(?:px|r?em|%)?)(?:\\s+(top|center|bottom|\\d+(?:px|r?em|%)?))?$/i;\n  var SHAPE_AND_EXTENT = /^(circle|ellipse)?\\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;\n  var RADIUS = /^\\d+(px|r?em|%)?(?:\\s+\\d+(px|r?em|%)?)?$/i;\n  var matchStartPosition = args[idx].match(POSITION);\n\n  if (matchStartPosition) {\n    idx++;\n  }\n\n  var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);\n\n  if (matchShapeExtent) {\n    shape = matchShapeExtent[1] || '';\n    extent = matchShapeExtent[2] || '';\n\n    if (extent === 'contain') {\n      extent = 'closest-side';\n    } else if (extent === 'cover') {\n      extent = 'farthest-corner';\n    }\n\n    idx++;\n  }\n\n  var matchStartRadius = args[idx].match(RADIUS);\n\n  if (matchStartRadius) {\n    idx++;\n  }\n\n  var matchEndPosition = args[idx].match(POSITION);\n\n  if (matchEndPosition) {\n    idx++;\n  }\n\n  var matchEndRadius = args[idx].match(RADIUS);\n\n  if (matchEndRadius) {\n    idx++;\n  }\n\n  var matchPosition = matchEndPosition || matchStartPosition;\n\n  if (matchPosition && matchPosition[1]) {\n    position = matchPosition[1] + (/^\\d+$/.test(matchPosition[1]) ? 'px' : '');\n\n    if (matchPosition[2]) {\n      position += ' ' + matchPosition[2] + (/^\\d+$/.test(matchPosition[2]) ? 'px' : '');\n    }\n  }\n\n  var matchRadius = matchEndRadius || matchStartRadius;\n\n  if (matchRadius) {\n    radius = matchRadius[0];\n\n    if (!matchRadius[1]) {\n      radius += 'px';\n    }\n  }\n\n  if (position && !shape && !radius && !extent) {\n    radius = position;\n    position = '';\n  }\n\n  if (position) {\n    position = \"at \".concat(position);\n  }\n\n  return [[shape, extent, radius, position].filter(function (s) {\n    return !!s;\n  }).join(' ')].concat(args.slice(idx));\n};\n\nvar transformObsoleteColorStops = function transformObsoleteColorStops(args) {\n  return args.map(function (color) {\n    return color.match(FROM_TO_COLORSTOP);\n  }) // $FlowFixMe\n  .map(function (v, index) {\n    if (!v) {\n      return args[index];\n    }\n\n    switch (v[1]) {\n      case 'from':\n        return \"\".concat(v[4], \" 0%\");\n\n      case 'to':\n        return \"\".concat(v[4], \" 100%\");\n\n      case 'color-stop':\n        if (v[3] === '%') {\n          return \"\".concat(v[4], \" \").concat(v[2]);\n        }\n\n        return \"\".concat(v[4], \" \").concat(parseFloat(v[2]) * 100, \"%\");\n    }\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Gradient.js?"
                );
              },
            './src/Input.js':
              /*!**********************!*\
  !*** ./src/Input.js ***!
  \**********************/
              /*! exports provided: INPUT_COLOR, INPUT_BORDERS, INPUT_BACKGROUND, getInputBorderRadius, inlineInputElement, inlineTextAreaElement, inlineSelectElement, reformatInputBounds */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_COLOR", function() { return INPUT_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_BORDERS", function() { return INPUT_BORDERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_BACKGROUND", function() { return INPUT_BACKGROUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputBorderRadius", function() { return getInputBorderRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineInputElement", function() { return inlineInputElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineTextAreaElement", function() { return inlineTextAreaElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineSelectElement", function() { return inlineSelectElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reformatInputBounds", function() { return reformatInputBounds; });\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContainer */ "./src/TextContainer.js");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/background */ "./src/parsing/background.js");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing/border */ "./src/parsing/border.js");\n/* harmony import */ var _drawing_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing/Circle */ "./src/drawing/Circle.js");\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing/Vector */ "./src/drawing/Vector.js");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ "./src/Color.js");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Length */ "./src/Length.js");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Bounds */ "./src/Bounds.js");\n/* harmony import */ var _TextBounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextBounds */ "./src/TextBounds.js");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util */ "./src/Util.js");\n\n\n\n\n\n\n\n\n\n\n\n\nvar INPUT_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__["default"]([42, 42, 42]);\nvar INPUT_BORDER_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__["default"]([165, 165, 165]);\nvar INPUT_BACKGROUND_COLOR = new _Color__WEBPACK_IMPORTED_MODULE_5__["default"]([222, 222, 222]);\nvar INPUT_BORDER = {\n  borderWidth: 1,\n  borderColor: INPUT_BORDER_COLOR,\n  borderStyle: _parsing_border__WEBPACK_IMPORTED_MODULE_2__["BORDER_STYLE"].SOLID\n};\nvar INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];\nvar INPUT_BACKGROUND = {\n  backgroundColor: INPUT_BACKGROUND_COLOR,\n  backgroundImage: [],\n  backgroundClip: _parsing_background__WEBPACK_IMPORTED_MODULE_1__["BACKGROUND_CLIP"].PADDING_BOX,\n  backgroundOrigin: _parsing_background__WEBPACK_IMPORTED_MODULE_1__["BACKGROUND_ORIGIN"].PADDING_BOX\n};\nvar RADIO_BORDER_RADIUS = new _Length__WEBPACK_IMPORTED_MODULE_6__["default"](\'50%\');\nvar RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];\nvar INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];\nvar CHECKBOX_BORDER_RADIUS = new _Length__WEBPACK_IMPORTED_MODULE_6__["default"](\'3px\');\nvar CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];\nvar INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];\nvar getInputBorderRadius = function getInputBorderRadius(node) {\n  return node.type === \'radio\' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;\n};\nvar inlineInputElement = function inlineInputElement(node, container) {\n  if (node.type === \'radio\' || node.type === \'checkbox\') {\n    if (node.checked) {\n      var size = Math.min(container.bounds.width, container.bounds.height);\n      container.childNodes.push(node.type === \'checkbox\' ? [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_4__["default"](container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _drawing_Circle__WEBPACK_IMPORTED_MODULE_3__["default"](container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));\n    }\n  } else {\n    inlineFormElement(getInputValue(node), node, container, false);\n  }\n};\nvar inlineTextAreaElement = function inlineTextAreaElement(node, container) {\n  inlineFormElement(node.value, node, container, true);\n};\nvar inlineSelectElement = function inlineSelectElement(node, container) {\n  var option = node.options[node.selectedIndex || 0];\n  inlineFormElement(option ? option.text || \'\' : \'\', node, container, false);\n};\nvar reformatInputBounds = function reformatInputBounds(bounds) {\n  if (bounds.width > bounds.height) {\n    bounds.left += (bounds.width - bounds.height) / 2;\n    bounds.width = bounds.height;\n  } else if (bounds.width < bounds.height) {\n    bounds.top += (bounds.height - bounds.width) / 2;\n    bounds.height = bounds.width;\n  }\n\n  return bounds;\n};\n\nvar inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {\n  var body = node.ownerDocument.body;\n\n  if (value.length > 0 && body) {\n    var wrapper = node.ownerDocument.createElement(\'html2canvaswrapper\');\n    Object(_Util__WEBPACK_IMPORTED_MODULE_9__["copyCSSStyles"])(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);\n    wrapper.style.position = \'absolute\';\n    wrapper.style.left = "".concat(container.bounds.left, "px");\n    wrapper.style.top = "".concat(container.bounds.top, "px");\n\n    if (!allowLinebreak) {\n      wrapper.style.whiteSpace = \'nowrap\';\n    }\n\n    var text = node.ownerDocument.createTextNode(value);\n    wrapper.appendChild(text);\n    body.appendChild(wrapper);\n    container.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_0__["default"].fromTextNode(text, container));\n    body.removeChild(wrapper);\n  }\n};\n\nvar getInputValue = function getInputValue(node) {\n  var value = node.type === \'password\' ? new Array(node.value.length + 1).join("\\u2022") : node.value;\n  return value.length === 0 ? node.placeholder || \'\' : value;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Input.js?'
                );
              },
            './src/Length.js':
              /*!***********************!*\
  !*** ./src/Length.js ***!
  \***********************/
              /*! exports provided: LENGTH_TYPE, default, calculateLengthFromValueWithUnit */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_TYPE", function() { return LENGTH_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Length; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLengthFromValueWithUnit", function() { return calculateLengthFromValueWithUnit; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LENGTH_WITH_UNIT = /([\\d.]+)(px|r?em|%)/i;\nvar LENGTH_TYPE = {\n  PX: 0,\n  PERCENTAGE: 1\n};\n\nvar Length =\n/*#__PURE__*/\nfunction () {\n  function Length(value) {\n    _classCallCheck(this, Length);\n\n    this.type = value.substr(value.length - 1) === \'%\' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;\n    var parsedValue = parseFloat(value);\n\n    if ( true && isNaN(parsedValue)) {\n      console.error("Invalid value given for Length: \\"".concat(value, "\\""));\n    }\n\n    this.value = isNaN(parsedValue) ? 0 : parsedValue;\n  }\n\n  _createClass(Length, [{\n    key: "isPercentage",\n    value: function isPercentage() {\n      return this.type === LENGTH_TYPE.PERCENTAGE;\n    }\n  }, {\n    key: "getAbsoluteValue",\n    value: function getAbsoluteValue(parentLength) {\n      return this.isPercentage() ? parentLength * (this.value / 100) : this.value;\n    }\n  }], [{\n    key: "create",\n    value: function create(v) {\n      return new Length(v);\n    }\n  }]);\n\n  return Length;\n}();\n\n\n\nvar getRootFontSize = function getRootFontSize(container) {\n  var parent = container.parent;\n  return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);\n};\n\nvar calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {\n  switch (unit) {\n    case \'px\':\n    case \'%\':\n      return new Length(value + unit);\n\n    case \'em\':\n    case \'rem\':\n      var length = new Length(value);\n      length.value *= unit === \'em\' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);\n      return length;\n\n    default:\n      // TODO: handle correctly if unknown unit is used\n      return new Length(\'0\');\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/Length.js?'
                );
              },
            './src/ListItem.js':
              /*!*************************!*\
  !*** ./src/ListItem.js ***!
  \*************************/
              /*! exports provided: getListOwner, inlineListItemElement, createCounterText */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListOwner\", function() { return getListOwner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineListItemElement\", function() { return inlineListItemElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCounterText\", function() { return createCounterText; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeContainer */ \"./src/NodeContainer.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ \"./src/TextContainer.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Unicode */ \"./src/Unicode.js\");\n\n\n\n\n\n\n // Margin between the enumeration and the list item content\n\nvar MARGIN_RIGHT = 7;\nvar ancestorTypes = ['OL', 'UL', 'MENU'];\nvar getListOwner = function getListOwner(container) {\n  var parent = container.parent;\n\n  if (!parent) {\n    return null;\n  }\n\n  do {\n    var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;\n\n    if (isAncestor) {\n      return parent;\n    }\n\n    parent = parent.parent;\n  } while (parent);\n\n  return container.parent;\n};\nvar inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {\n  var listStyle = container.style.listStyle;\n\n  if (!listStyle) {\n    return;\n  }\n\n  var style = node.ownerDocument.defaultView.getComputedStyle(node, null);\n  var wrapper = node.ownerDocument.createElement('html2canvaswrapper');\n  Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"copyCSSStyles\"])(style, wrapper);\n  wrapper.style.position = 'absolute';\n  wrapper.style.bottom = 'auto';\n  wrapper.style.display = 'block';\n  wrapper.style.letterSpacing = 'normal';\n\n  switch (listStyle.listStylePosition) {\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_POSITION\"].OUTSIDE:\n      wrapper.style.left = 'auto';\n      wrapper.style.right = \"\".concat(node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT, \"px\");\n      wrapper.style.textAlign = 'right';\n      break;\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_POSITION\"].INSIDE:\n      wrapper.style.left = \"\".concat(container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width), \"px\");\n      wrapper.style.right = 'auto';\n      wrapper.style.textAlign = 'left';\n      break;\n  }\n\n  var text;\n  var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);\n  var styleImage = listStyle.listStyleImage;\n\n  if (styleImage) {\n    if (styleImage.method === 'url') {\n      var image = node.ownerDocument.createElement('img');\n      image.src = styleImage.args[0];\n      wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP, \"px\");\n      wrapper.style.width = 'auto';\n      wrapper.style.height = 'auto';\n      wrapper.appendChild(image);\n    } else {\n      var size = parseFloat(container.style.font.fontSize) * 0.5;\n      wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size, \"px\");\n      wrapper.style.width = \"\".concat(size, \"px\");\n      wrapper.style.height = \"\".concat(size, \"px\");\n      wrapper.style.backgroundImage = style.listStyleImage;\n    }\n  } else if (typeof container.listIndex === 'number') {\n    text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));\n    wrapper.appendChild(text);\n    wrapper.style.top = \"\".concat(container.bounds.top - MARGIN_TOP, \"px\");\n  } // $FlowFixMe\n\n\n  var body = node.ownerDocument.body;\n  body.appendChild(wrapper);\n\n  if (text) {\n    container.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTextNode(text, container));\n    body.removeChild(wrapper);\n  } else {\n    // $FlowFixMe\n    container.childNodes.push(new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](wrapper, container, resourceLoader, 0));\n  }\n};\nvar ROMAN_UPPER = {\n  integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],\n  values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']\n};\nvar ARMENIAN = {\n  integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']\n};\nvar HEBREW = {\n  integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']\n};\nvar GEORGIAN = {\n  integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\n  values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']\n};\n\nvar createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {\n  if (value < min || value > max) {\n    return createCounterText(value, fallback, suffix.length > 0);\n  }\n\n  return symbols.integers.reduce(function (string, integer, index) {\n    while (value >= integer) {\n      value -= integer;\n      string += symbols.values[index];\n    }\n\n    return string;\n  }, '') + suffix;\n};\n\nvar createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {\n  var string = '';\n\n  do {\n    if (!isNumeric) {\n      value--;\n    }\n\n    string = resolver(value) + string;\n    value /= codePointRangeLength;\n  } while (value * codePointRangeLength >= codePointRangeLength);\n\n  return string;\n};\n\nvar createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {\n  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;\n  return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {\n    return Object(_Unicode__WEBPACK_IMPORTED_MODULE_4__[\"fromCodePoint\"])(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);\n  }) + suffix);\n};\n\nvar createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {\n  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';\n  var codePointRangeLength = symbols.length;\n  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {\n    return symbols[Math.floor(codePoint % codePointRangeLength)];\n  }) + suffix;\n};\n\nvar CJK_ZEROS = 1 << 0;\nvar CJK_TEN_COEFFICIENTS = 1 << 1;\nvar CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;\nvar CJK_HUNDRED_COEFFICIENTS = 1 << 3;\n\nvar createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {\n  if (value < -9999 || value > 9999) {\n    return createCounterText(value, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_DECIMAL, suffix.length > 0);\n  }\n\n  var tmp = Math.abs(value);\n  var string = suffix;\n\n  if (tmp === 0) {\n    return numbers[0] + string;\n  }\n\n  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {\n    var coefficient = tmp % 10;\n\n    if (coefficient === 0 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_ZEROS) && string !== '') {\n      string = numbers[coefficient] + string;\n    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(flags, CJK_HUNDRED_COEFFICIENTS)) {\n      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;\n    } else if (coefficient === 1 && digit > 0) {\n      string = multipliers[digit - 1] + string;\n    }\n\n    tmp = Math.floor(tmp / 10);\n  }\n\n  return (value < 0 ? negativeSign : '') + string;\n};\n\nvar CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';\nvar CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';\nvar JAPANESE_NEGATIVE = 'マイナス';\nvar KOREAN_NEGATIVE = '마이너스';\nvar createCounterText = function createCounterText(value, type, appendSuffix) {\n  var defaultSuffix = appendSuffix ? '. ' : '';\n  var cjkSuffix = appendSuffix ? '、' : '';\n  var koreanSuffix = appendSuffix ? ', ' : '';\n\n  switch (type) {\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DISC:\n      return '•';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CIRCLE:\n      return '◦';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SQUARE:\n      return '◾';\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL_LEADING_ZERO:\n      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);\n      return string.length < 4 ? \"0\".concat(string) : string;\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_DECIMAL:\n      return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ROMAN:\n      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix).toLowerCase();\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ROMAN:\n      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_GREEK:\n      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ALPHA:\n      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ALPHA:\n      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ARABIC_INDIC:\n      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ARMENIAN:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].UPPER_ARMENIAN:\n      return createAdditiveCounter(value, 1, 9999, ARMENIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LOWER_ARMENIAN:\n      return createAdditiveCounter(value, 1, 9999, ARMENIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix).toLowerCase();\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].BENGALI:\n      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CAMBODIAN:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KHMER:\n      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_EARTHLY_BRANCH:\n      return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_HEAVENLY_STEM:\n      return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].CJK_IDEOGRAPHIC:\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TRAD_CHINESE_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TRAD_CHINESE_FORMAL:\n      return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SIMP_CHINESE_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].SIMP_CHINESE_FORMAL:\n      return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].JAPANESE_INFORMAL:\n      return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].JAPANESE_FORMAL:\n      return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANGUL_FORMAL:\n      return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANJA_INFORMAL:\n      return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KOREAN_HANJA_FORMAL:\n      return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DEVANAGARI:\n      return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GEORGIAN:\n      return createAdditiveCounter(value, 1, 19999, GEORGIAN, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GUJARATI:\n      return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].GURMUKHI:\n      return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HEBREW:\n      return createAdditiveCounter(value, 1, 10999, HEBREW, _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HIRAGANA:\n      return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].HIRAGANA_IROHA:\n      return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KANNADA:\n      return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KATAKANA:\n      return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].KATAKANA_IROHA:\n      return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].LAO:\n      return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].MONGOLIAN:\n      return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].MYANMAR:\n      return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].ORIYA:\n      return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].PERSIAN:\n      return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TAMIL:\n      return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TELUGU:\n      return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].THAI:\n      return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].TIBETAN:\n      return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);\n\n    case _parsing_listStyle__WEBPACK_IMPORTED_MODULE_3__[\"LIST_STYLE_TYPE\"].DECIMAL:\n    default:\n      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/ListItem.js?"
                );
              },
            './src/Logger.js':
              /*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger(enabled, id, start) {\n    _classCallCheck(this, Logger);\n\n    this.enabled = typeof window !== \'undefined\' && enabled;\n    this.start = start ? start : Date.now();\n    this.id = id;\n  }\n\n  _createClass(Logger, [{\n    key: "child",\n    value: function child(id) {\n      return new Logger(this.enabled, id, this.start);\n    } // eslint-disable-next-line flowtype/no-weak-types\n\n  }, {\n    key: "log",\n    value: function log() {\n      if (this.enabled && window.console && window.console.log) {\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + \'ms\', this.id ? "html2canvas (".concat(this.id, "):") : \'html2canvas:\'].concat([].slice.call(args, 0)));\n      }\n    } // eslint-disable-next-line flowtype/no-weak-types\n\n  }, {\n    key: "error",\n    value: function error() {\n      if (this.enabled && window.console && window.console.error) {\n        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n          args[_key2] = arguments[_key2];\n        }\n\n        Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + \'ms\', this.id ? "html2canvas (".concat(this.id, "):") : \'html2canvas:\'].concat([].slice.call(args, 0)));\n      }\n    }\n  }]);\n\n  return Logger;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/Logger.js?'
                );
              },
            './src/NodeContainer.js':
              /*!******************************!*\
  !*** ./src/NodeContainer.js ***!
  \******************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeContainer; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/Color.js");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/Util.js");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing/background */ "./src/parsing/background.js");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsing/border */ "./src/parsing/border.js");\n/* harmony import */ var _parsing_borderRadius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/borderRadius */ "./src/parsing/borderRadius.js");\n/* harmony import */ var _parsing_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/display */ "./src/parsing/display.js");\n/* harmony import */ var _parsing_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsing/float */ "./src/parsing/float.js");\n/* harmony import */ var _parsing_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing/font */ "./src/parsing/font.js");\n/* harmony import */ var _parsing_letterSpacing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing/letterSpacing */ "./src/parsing/letterSpacing.js");\n/* harmony import */ var _parsing_lineBreak__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsing/lineBreak */ "./src/parsing/lineBreak.js");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsing/listStyle */ "./src/parsing/listStyle.js");\n/* harmony import */ var _parsing_margin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsing/margin */ "./src/parsing/margin.js");\n/* harmony import */ var _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsing/overflow */ "./src/parsing/overflow.js");\n/* harmony import */ var _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsing/overflowWrap */ "./src/parsing/overflowWrap.js");\n/* harmony import */ var _parsing_padding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsing/padding */ "./src/parsing/padding.js");\n/* harmony import */ var _parsing_position__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsing/position */ "./src/parsing/position.js");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsing/textDecoration */ "./src/parsing/textDecoration.js");\n/* harmony import */ var _parsing_textShadow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsing/textShadow */ "./src/parsing/textShadow.js");\n/* harmony import */ var _parsing_textTransform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsing/textTransform */ "./src/parsing/textTransform.js");\n/* harmony import */ var _parsing_transform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsing/transform */ "./src/parsing/transform.js");\n/* harmony import */ var _parsing_visibility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsing/visibility */ "./src/parsing/visibility.js");\n/* harmony import */ var _parsing_word_break__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsing/word-break */ "./src/parsing/word-break.js");\n/* harmony import */ var _parsing_zIndex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsing/zIndex */ "./src/parsing/zIndex.js");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Bounds */ "./src/Bounds.js");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Input */ "./src/Input.js");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ListItem */ "./src/ListItem.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar INPUT_TAGS = [\'INPUT\', \'TEXTAREA\', \'SELECT\'];\n\nvar NodeContainer =\n/*#__PURE__*/\nfunction () {\n  function NodeContainer(node, parent, resourceLoader, index) {\n    var _this = this;\n\n    _classCallCheck(this, NodeContainer);\n\n    this.parent = parent;\n    this.tagName = node.tagName;\n    this.index = index;\n    this.childNodes = [];\n    this.listItems = [];\n\n    if (typeof node.start === \'number\') {\n      this.listStart = node.start;\n    }\n\n    var defaultView = node.ownerDocument.defaultView;\n    var scrollX = defaultView.pageXOffset;\n    var scrollY = defaultView.pageYOffset;\n    var style = defaultView.getComputedStyle(node, null);\n    var display = Object(_parsing_display__WEBPACK_IMPORTED_MODULE_5__["parseDisplay"])(style.display);\n    var IS_INPUT = node.type === \'radio\' || node.type === \'checkbox\';\n    var position = Object(_parsing_position__WEBPACK_IMPORTED_MODULE_15__["parsePosition"])(style.position);\n    this.style = {\n      background: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__["INPUT_BACKGROUND"] : Object(_parsing_background__WEBPACK_IMPORTED_MODULE_2__["parseBackground"])(style, resourceLoader),\n      border: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__["INPUT_BORDERS"] : Object(_parsing_border__WEBPACK_IMPORTED_MODULE_3__["parseBorder"])(style),\n      borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? Object(_Input__WEBPACK_IMPORTED_MODULE_24__["getInputBorderRadius"])(node) : Object(_parsing_borderRadius__WEBPACK_IMPORTED_MODULE_4__["parseBorderRadius"])(style),\n      color: IS_INPUT ? _Input__WEBPACK_IMPORTED_MODULE_24__["INPUT_COLOR"] : new _Color__WEBPACK_IMPORTED_MODULE_0__["default"](style.color),\n      display: display,\n      float: Object(_parsing_float__WEBPACK_IMPORTED_MODULE_6__["parseCSSFloat"])(style.float),\n      font: Object(_parsing_font__WEBPACK_IMPORTED_MODULE_7__["parseFont"])(style),\n      letterSpacing: Object(_parsing_letterSpacing__WEBPACK_IMPORTED_MODULE_8__["parseLetterSpacing"])(style.letterSpacing),\n      listStyle: display === _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].LIST_ITEM ? Object(_parsing_listStyle__WEBPACK_IMPORTED_MODULE_10__["parseListStyle"])(style) : null,\n      lineBreak: Object(_parsing_lineBreak__WEBPACK_IMPORTED_MODULE_9__["parseLineBreak"])(style.lineBreak),\n      margin: Object(_parsing_margin__WEBPACK_IMPORTED_MODULE_11__["parseMargin"])(style),\n      opacity: parseFloat(style.opacity),\n      overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? Object(_parsing_overflow__WEBPACK_IMPORTED_MODULE_12__["parseOverflow"])(style.overflow) : _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__["OVERFLOW"].HIDDEN,\n      overflowWrap: Object(_parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_13__["parseOverflowWrap"])(style.overflowWrap ? style.overflowWrap : style.wordWrap),\n      padding: Object(_parsing_padding__WEBPACK_IMPORTED_MODULE_14__["parsePadding"])(style),\n      position: position,\n      textDecoration: Object(_parsing_textDecoration__WEBPACK_IMPORTED_MODULE_16__["parseTextDecoration"])(style),\n      textShadow: Object(_parsing_textShadow__WEBPACK_IMPORTED_MODULE_17__["parseTextShadow"])(style.textShadow),\n      textTransform: Object(_parsing_textTransform__WEBPACK_IMPORTED_MODULE_18__["parseTextTransform"])(style.textTransform),\n      transform: Object(_parsing_transform__WEBPACK_IMPORTED_MODULE_19__["parseTransform"])(style),\n      visibility: Object(_parsing_visibility__WEBPACK_IMPORTED_MODULE_20__["parseVisibility"])(style.visibility),\n      wordBreak: Object(_parsing_word_break__WEBPACK_IMPORTED_MODULE_21__["parseWordBreak"])(style.wordBreak),\n      zIndex: Object(_parsing_zIndex__WEBPACK_IMPORTED_MODULE_22__["parseZIndex"])(position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__["POSITION"].STATIC ? style.zIndex : \'auto\')\n    };\n\n    if (this.isTransformed()) {\n      // getBoundingClientRect provides values post-transform, we want them without the transformation\n      node.style.transform = \'matrix(1,0,0,1,0,0)\';\n    }\n\n    if (display === _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].LIST_ITEM) {\n      var listOwner = Object(_ListItem__WEBPACK_IMPORTED_MODULE_25__["getListOwner"])(this);\n\n      if (listOwner) {\n        var listIndex = listOwner.listItems.length;\n        listOwner.listItems.push(this);\n        this.listIndex = node.hasAttribute(\'value\') && typeof node.value === \'number\' ? node.value : listIndex === 0 ? typeof listOwner.listStart === \'number\' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;\n      }\n    } // TODO move bound retrieval for all nodes to a later stage?\n\n\n    if (node.tagName === \'IMG\') {\n      node.addEventListener(\'load\', function () {\n        _this.bounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__["parseBounds"])(node, scrollX, scrollY);\n        _this.curvedBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__["parseBoundCurves"])(_this.bounds, _this.style.border, _this.style.borderRadius);\n      });\n    }\n\n    this.image = getImage(node, resourceLoader);\n    this.bounds = IS_INPUT ? Object(_Input__WEBPACK_IMPORTED_MODULE_24__["reformatInputBounds"])(Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__["parseBounds"])(node, scrollX, scrollY)) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__["parseBounds"])(node, scrollX, scrollY);\n    this.curvedBounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__["parseBoundCurves"])(this.bounds, this.style.border, this.style.borderRadius);\n\n    if (true) {\n      this.name = "".concat(node.tagName.toLowerCase()).concat(node.id ? "#".concat(node.id) : \'\').concat(node.className.toString().split(\' \').map(function (s) {\n        return s.length ? ".".concat(s) : \'\';\n      }).join(\'\'));\n    }\n  }\n\n  _createClass(NodeContainer, [{\n    key: "getClipPaths",\n    value: function getClipPaths() {\n      var parentClips = this.parent ? this.parent.getClipPaths() : [];\n      var isClipped = this.style.overflow !== _parsing_overflow__WEBPACK_IMPORTED_MODULE_12__["OVERFLOW"].VISIBLE;\n      return isClipped ? parentClips.concat([Object(_Bounds__WEBPACK_IMPORTED_MODULE_23__["calculatePaddingBoxPath"])(this.curvedBounds)]) : parentClips;\n    }\n  }, {\n    key: "isInFlow",\n    value: function isInFlow() {\n      return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();\n    }\n  }, {\n    key: "isVisible",\n    value: function isVisible() {\n      return !Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].NONE) && this.style.opacity > 0 && this.style.visibility === _parsing_visibility__WEBPACK_IMPORTED_MODULE_20__["VISIBILITY"].VISIBLE;\n    }\n  }, {\n    key: "isAbsolutelyPositioned",\n    value: function isAbsolutelyPositioned() {\n      return this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__["POSITION"].STATIC && this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__["POSITION"].RELATIVE;\n    }\n  }, {\n    key: "isPositioned",\n    value: function isPositioned() {\n      return this.style.position !== _parsing_position__WEBPACK_IMPORTED_MODULE_15__["POSITION"].STATIC;\n    }\n  }, {\n    key: "isFloating",\n    value: function isFloating() {\n      return this.style.float !== _parsing_float__WEBPACK_IMPORTED_MODULE_6__["FLOAT"].NONE;\n    }\n  }, {\n    key: "isRootElement",\n    value: function isRootElement() {\n      return this.parent === null;\n    }\n  }, {\n    key: "isTransformed",\n    value: function isTransformed() {\n      return this.style.transform !== null;\n    }\n  }, {\n    key: "isPositionedWithZIndex",\n    value: function isPositionedWithZIndex() {\n      return this.isPositioned() && !this.style.zIndex.auto;\n    }\n  }, {\n    key: "isInlineLevel",\n    value: function isInlineLevel() {\n      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_BLOCK) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_FLEX) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_GRID) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_LIST_ITEM) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_TABLE);\n    }\n  }, {\n    key: "isInlineBlockOrInlineTable",\n    value: function isInlineBlockOrInlineTable() {\n      return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_BLOCK) || Object(_Util__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.style.display, _parsing_display__WEBPACK_IMPORTED_MODULE_5__["DISPLAY"].INLINE_TABLE);\n    }\n  }]);\n\n  return NodeContainer;\n}();\n\n\n\nvar getImage = function getImage(node, resourceLoader) {\n  if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {\n    var s = new XMLSerializer();\n    return resourceLoader.loadImage("data:image/svg+xml,".concat(encodeURIComponent(s.serializeToString(node))));\n  }\n\n  switch (node.tagName) {\n    case \'IMG\':\n      // $FlowFixMe\n      var img = node;\n      return resourceLoader.loadImage(img.currentSrc || img.src);\n\n    case \'CANVAS\':\n      // $FlowFixMe\n      var canvas = node;\n      return resourceLoader.loadCanvas(canvas);\n\n    case \'IFRAME\':\n      var iframeKey = node.getAttribute(\'data-html2canvas-internal-iframe-key\');\n\n      if (iframeKey) {\n        return iframeKey;\n      }\n\n      break;\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/NodeContainer.js?'
                );
              },
            './src/NodeParser.js':
              /*!***************************!*\
  !*** ./src/NodeParser.js ***!
  \***************************/
              /*! exports provided: NodeParser */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeParser", function() { return NodeParser; });\n/* harmony import */ var _StackingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StackingContext */ "./src/StackingContext.js");\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeContainer */ "./src/NodeContainer.js");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ "./src/TextContainer.js");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/Input.js");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem */ "./src/ListItem.js");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/listStyle */ "./src/parsing/listStyle.js");\n\n\n\n\n\n\n\n\nvar NodeParser = function NodeParser(node, resourceLoader, logger) {\n  if (true) {\n    logger.log("Starting node parsing");\n  }\n\n  var index = 0;\n  var container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__["default"](node, null, resourceLoader, index++);\n  var stack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__["default"](container, null, true);\n  parseNodeTree(node, container, stack, resourceLoader, index);\n\n  if (true) {\n    logger.log("Finished parsing node tree");\n  }\n\n  return stack;\n};\nvar IGNORED_NODE_NAMES = [\'SCRIPT\', \'HEAD\', \'TITLE\', \'OBJECT\', \'BR\', \'OPTION\'];\n\nvar parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {\n  if ( true && index > 50000) {\n    throw new Error("Recursion error while parsing node tree");\n  }\n\n  for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {\n    nextNode = childNode.nextSibling;\n    var defaultView = childNode.ownerDocument.defaultView;\n\n    if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {\n      if (childNode.data.trim().length > 0) {\n        parent.childNodes.push(_TextContainer__WEBPACK_IMPORTED_MODULE_2__["default"].fromTextNode(childNode, parent));\n      }\n    } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {\n      if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {\n        var container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__["default"](childNode, parent, resourceLoader, index++);\n\n        if (container.isVisible()) {\n          if (childNode.tagName === \'INPUT\') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__["inlineInputElement"])(childNode, container);\n          } else if (childNode.tagName === \'TEXTAREA\') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__["inlineTextAreaElement"])(childNode, container);\n          } else if (childNode.tagName === \'SELECT\') {\n            // $FlowFixMe\n            Object(_Input__WEBPACK_IMPORTED_MODULE_3__["inlineSelectElement"])(childNode, container);\n          } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _parsing_listStyle__WEBPACK_IMPORTED_MODULE_5__["LIST_STYLE_TYPE"].NONE) {\n            Object(_ListItem__WEBPACK_IMPORTED_MODULE_4__["inlineListItemElement"])(childNode, container, resourceLoader);\n          }\n\n          var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== \'TEXTAREA\';\n          var treatAsRealStackingContext = createsRealStackingContext(container, childNode);\n\n          if (treatAsRealStackingContext || createsStackingContext(container)) {\n            // for treatAsRealStackingContext:false, any positioned descendants and descendants\n            // which actually create a new stacking context should be considered part of the parent stacking context\n            var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;\n            var childStack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__["default"](container, parentStack, treatAsRealStackingContext);\n            parentStack.contexts.push(childStack);\n\n            if (SHOULD_TRAVERSE_CHILDREN) {\n              parseNodeTree(childNode, container, childStack, resourceLoader, index);\n            }\n          } else {\n            stack.children.push(container);\n\n            if (SHOULD_TRAVERSE_CHILDREN) {\n              parseNodeTree(childNode, container, stack, resourceLoader, index);\n            }\n          }\n        }\n      }\n    } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {\n      var _container = new _NodeContainer__WEBPACK_IMPORTED_MODULE_1__["default"](childNode, parent, resourceLoader, index++);\n\n      var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);\n\n      if (_treatAsRealStackingContext || createsStackingContext(_container)) {\n        // for treatAsRealStackingContext:false, any positioned descendants and descendants\n        // which actually create a new stacking context should be considered part of the parent stacking context\n        var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;\n\n        var _childStack = new _StackingContext__WEBPACK_IMPORTED_MODULE_0__["default"](_container, _parentStack, _treatAsRealStackingContext);\n\n        _parentStack.contexts.push(_childStack);\n      } else {\n        stack.children.push(_container);\n      }\n    }\n  }\n};\n\nvar createsRealStackingContext = function createsRealStackingContext(container, node) {\n  return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);\n};\n\nvar createsStackingContext = function createsStackingContext(container) {\n  return container.isPositioned() || container.isFloating();\n};\n\nvar isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {\n  return node.nodeName === \'BODY\' && container.parent instanceof _NodeContainer__WEBPACK_IMPORTED_MODULE_1__["default"] && container.parent.style.background.backgroundColor.isTransparent();\n};\n\n//# sourceURL=webpack://html2canvas/./src/NodeParser.js?'
                );
              },
            './src/Proxy.js':
              /*!**********************!*\
  !*** ./src/Proxy.js ***!
  \**********************/
              /*! exports provided: Proxy */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proxy", function() { return Proxy; });\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ "./src/Feature.js");\n\n\n\nvar Proxy = function Proxy(src, options) {\n  if (!options.proxy) {\n    return Promise.reject( true ? \'No proxy defined\' : undefined);\n  }\n\n  var proxy = options.proxy;\n  return new Promise(function (resolve, reject) {\n    var responseType = _Feature__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_CORS_XHR && _Feature__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_RESPONSE_TYPE ? \'blob\' : \'text\';\n    var xhr = _Feature__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();\n\n    xhr.onload = function () {\n      if (xhr instanceof XMLHttpRequest) {\n        if (xhr.status === 200) {\n          if (responseType === \'text\') {\n            resolve(xhr.response);\n          } else {\n            var reader = new FileReader(); // $FlowFixMe\n\n            reader.addEventListener(\'load\', function () {\n              return resolve(reader.result);\n            }, false); // $FlowFixMe\n\n            reader.addEventListener(\'error\', function (e) {\n              return reject(e);\n            }, false);\n            reader.readAsDataURL(xhr.response);\n          }\n        } else {\n          reject( true ? "Failed to proxy resource ".concat(src.substring(0, 256), " with status code ").concat(xhr.status) : undefined);\n        }\n      } else {\n        resolve(xhr.responseText);\n      }\n    };\n\n    xhr.onerror = reject;\n    xhr.open(\'GET\', "".concat(proxy, "?url=").concat(encodeURIComponent(src), "&responseType=").concat(responseType));\n\n    if (responseType !== \'text\' && xhr instanceof XMLHttpRequest) {\n      xhr.responseType = responseType;\n    }\n\n    if (options.imageTimeout) {\n      var timeout = options.imageTimeout;\n      xhr.timeout = timeout;\n\n      xhr.ontimeout = function () {\n        return reject( true ? "Timed out (".concat(timeout, "ms) proxying ").concat(src.substring(0, 256)) : undefined);\n      };\n    }\n\n    xhr.send();\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Proxy.js?'
                );
              },
            './src/PseudoNodeContent.js':
              /*!**********************************!*\
  !*** ./src/PseudoNodeContent.js ***!
  \**********************************/
              /*! exports provided: PSEUDO_CONTENT_ITEM_TYPE, TOKEN_TYPE, parseCounterReset, popCounters, resolvePseudoContent, parseContent */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PSEUDO_CONTENT_ITEM_TYPE\", function() { return PSEUDO_CONTENT_ITEM_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_TYPE\", function() { return TOKEN_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCounterReset\", function() { return parseCounterReset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popCounters\", function() { return popCounters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvePseudoContent\", function() { return resolvePseudoContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseContent\", function() { return parseContent; });\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ \"./src/ListItem.js\");\n/* harmony import */ var _parsing_listStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/listStyle */ \"./src/parsing/listStyle.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar PSEUDO_CONTENT_ITEM_TYPE = {\n  TEXT: 0,\n  IMAGE: 1\n};\nvar TOKEN_TYPE = {\n  STRING: 0,\n  ATTRIBUTE: 1,\n  URL: 2,\n  COUNTER: 3,\n  COUNTERS: 4,\n  OPENQUOTE: 5,\n  CLOSEQUOTE: 6\n};\nvar parseCounterReset = function parseCounterReset(style, data) {\n  if (!style || !style.counterReset || style.counterReset === 'none') {\n    return [];\n  }\n\n  var counterNames = [];\n  var counterResets = style.counterReset.split(/\\s*,\\s*/);\n  var lenCounterResets = counterResets.length;\n\n  for (var i = 0; i < lenCounterResets; i++) {\n    var _counterResets$i$spli = counterResets[i].split(/\\s+/),\n        _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),\n        counterName = _counterResets$i$spli2[0],\n        initialValue = _counterResets$i$spli2[1];\n\n    counterNames.push(counterName);\n    var counter = data.counters[counterName];\n\n    if (!counter) {\n      counter = data.counters[counterName] = [];\n    }\n\n    counter.push(parseInt(initialValue || 0, 10));\n  }\n\n  return counterNames;\n};\nvar popCounters = function popCounters(counterNames, data) {\n  var lenCounters = counterNames.length;\n\n  for (var i = 0; i < lenCounters; i++) {\n    data.counters[counterNames[i]].pop();\n  }\n};\nvar resolvePseudoContent = function resolvePseudoContent(node, style, data) {\n  if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {\n    return null;\n  }\n\n  var tokens = parseContent(style.content);\n  var len = tokens.length;\n  var contentItems = [];\n  var s = ''; // increment the counter (if there is a \"counter-increment\" declaration)\n\n  var counterIncrement = style.counterIncrement;\n\n  if (counterIncrement && counterIncrement !== 'none') {\n    var _counterIncrement$spl = counterIncrement.split(/\\s+/),\n        _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),\n        counterName = _counterIncrement$spl2[0],\n        incrementValue = _counterIncrement$spl2[1];\n\n    var counter = data.counters[counterName];\n\n    if (counter) {\n      counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);\n    }\n  } // build the content string\n\n\n  for (var i = 0; i < len; i++) {\n    var token = tokens[i];\n\n    switch (token.type) {\n      case TOKEN_TYPE.STRING:\n        s += token.value || '';\n        break;\n\n      case TOKEN_TYPE.ATTRIBUTE:\n        if (node instanceof HTMLElement && token.value) {\n          s += node.getAttribute(token.value) || '';\n        }\n\n        break;\n\n      case TOKEN_TYPE.COUNTER:\n        var _counter = data.counters[token.name || ''];\n\n        if (_counter) {\n          s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);\n        }\n\n        break;\n\n      case TOKEN_TYPE.COUNTERS:\n        var counters = data.counters[token.name || ''];\n\n        if (counters) {\n          s += formatCounterValue(counters, token.glue, token.format);\n        }\n\n        break;\n\n      case TOKEN_TYPE.OPENQUOTE:\n        s += getQuote(style, true, data.quoteDepth);\n        data.quoteDepth++;\n        break;\n\n      case TOKEN_TYPE.CLOSEQUOTE:\n        data.quoteDepth--;\n        s += getQuote(style, false, data.quoteDepth);\n        break;\n\n      case TOKEN_TYPE.URL:\n        if (s) {\n          contentItems.push({\n            type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,\n            value: s\n          });\n          s = '';\n        }\n\n        contentItems.push({\n          type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE,\n          value: token.value || ''\n        });\n        break;\n    }\n  }\n\n  if (s) {\n    contentItems.push({\n      type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,\n      value: s\n    });\n  }\n\n  return contentItems;\n};\nvar parseContent = function parseContent(content, cache) {\n  if (cache && cache[content]) {\n    return cache[content];\n  }\n\n  var tokens = [];\n  var len = content.length;\n  var isString = false;\n  var isEscaped = false;\n  var isFunction = false;\n  var str = '';\n  var functionName = '';\n  var args = [];\n\n  for (var i = 0; i < len; i++) {\n    var c = content.charAt(i);\n\n    switch (c) {\n      case \"'\":\n      case '\"':\n        if (isEscaped) {\n          str += c;\n        } else {\n          isString = !isString;\n\n          if (!isFunction && !isString) {\n            tokens.push({\n              type: TOKEN_TYPE.STRING,\n              value: str\n            });\n            str = '';\n          }\n        }\n\n        break;\n\n      case '\\\\':\n        if (isEscaped) {\n          str += c;\n          isEscaped = false;\n        } else {\n          isEscaped = true;\n        }\n\n        break;\n\n      case '(':\n        if (isString) {\n          str += c;\n        } else {\n          isFunction = true;\n          functionName = str;\n          str = '';\n          args = [];\n        }\n\n        break;\n\n      case ')':\n        if (isString) {\n          str += c;\n        } else if (isFunction) {\n          if (str) {\n            args.push(str);\n          }\n\n          switch (functionName) {\n            case 'attr':\n              if (args.length > 0) {\n                tokens.push({\n                  type: TOKEN_TYPE.ATTRIBUTE,\n                  value: args[0]\n                });\n              }\n\n              break;\n\n            case 'counter':\n              if (args.length > 0) {\n                var counter = {\n                  type: TOKEN_TYPE.COUNTER,\n                  name: args[0]\n                };\n\n                if (args.length > 1) {\n                  counter.format = args[1];\n                }\n\n                tokens.push(counter);\n              }\n\n              break;\n\n            case 'counters':\n              if (args.length > 0) {\n                var counters = {\n                  type: TOKEN_TYPE.COUNTERS,\n                  name: args[0]\n                };\n\n                if (args.length > 1) {\n                  counters.glue = args[1];\n                }\n\n                if (args.length > 2) {\n                  counters.format = args[2];\n                }\n\n                tokens.push(counters);\n              }\n\n              break;\n\n            case 'url':\n              if (args.length > 0) {\n                tokens.push({\n                  type: TOKEN_TYPE.URL,\n                  value: args[0]\n                });\n              }\n\n              break;\n          }\n\n          isFunction = false;\n          str = '';\n        }\n\n        break;\n\n      case ',':\n        if (isString) {\n          str += c;\n        } else if (isFunction) {\n          args.push(str);\n          str = '';\n        }\n\n        break;\n\n      case ' ':\n      case '\\t':\n        if (isString) {\n          str += c;\n        } else if (str) {\n          addOtherToken(tokens, str);\n          str = '';\n        }\n\n        break;\n\n      default:\n        str += c;\n    }\n\n    if (c !== '\\\\') {\n      isEscaped = false;\n    }\n  }\n\n  if (str) {\n    addOtherToken(tokens, str);\n  }\n\n  if (cache) {\n    cache[content] = tokens;\n  }\n\n  return tokens;\n};\n\nvar addOtherToken = function addOtherToken(tokens, identifier) {\n  switch (identifier) {\n    case 'open-quote':\n      tokens.push({\n        type: TOKEN_TYPE.OPENQUOTE\n      });\n      break;\n\n    case 'close-quote':\n      tokens.push({\n        type: TOKEN_TYPE.CLOSEQUOTE\n      });\n      break;\n  }\n};\n\nvar getQuote = function getQuote(style, isOpening, quoteDepth) {\n  var quotes = style.quotes ? style.quotes.split(/\\s+/) : [\"'\\\"'\", \"'\\\"'\"];\n  var idx = quoteDepth * 2;\n\n  if (idx >= quotes.length) {\n    idx = quotes.length - 2;\n  }\n\n  if (!isOpening) {\n    ++idx;\n  }\n\n  return quotes[idx].replace(/^[\"']|[\"']$/g, '');\n};\n\nvar formatCounterValue = function formatCounterValue(counter, glue, format) {\n  var len = counter.length;\n  var result = '';\n\n  for (var i = 0; i < len; i++) {\n    if (i > 0) {\n      result += glue || '';\n    }\n\n    result += Object(_ListItem__WEBPACK_IMPORTED_MODULE_0__[\"createCounterText\"])(counter[i], Object(_parsing_listStyle__WEBPACK_IMPORTED_MODULE_1__[\"parseListStyleType\"])(format || 'decimal'), false);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://html2canvas/./src/PseudoNodeContent.js?"
                );
              },
            './src/Renderer.js':
              /*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ "./src/Bounds.js");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Font */ "./src/Font.js");\n/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gradient */ "./src/Gradient.js");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextContainer */ "./src/TextContainer.js");\n/* harmony import */ var _parsing_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing/background */ "./src/parsing/background.js");\n/* harmony import */ var _parsing_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsing/border */ "./src/parsing/border.js");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Renderer =\n/*#__PURE__*/\nfunction () {\n  function Renderer(target, options) {\n    _classCallCheck(this, Renderer);\n\n    this.target = target;\n    this.options = options;\n    target.render(options);\n  }\n\n  _createClass(Renderer, [{\n    key: "renderNode",\n    value: function renderNode(container) {\n      if (container.isVisible()) {\n        this.renderNodeBackgroundAndBorders(container);\n        this.renderNodeContent(container);\n      }\n    }\n  }, {\n    key: "renderNodeContent",\n    value: function renderNodeContent(container) {\n      var _this = this;\n\n      var callback = function callback() {\n        if (container.childNodes.length) {\n          container.childNodes.forEach(function (child) {\n            if (child instanceof _TextContainer__WEBPACK_IMPORTED_MODULE_3__["default"]) {\n              var style = child.parent.style;\n\n              _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);\n            } else {\n              _this.target.drawShape(child, container.style.color);\n            }\n          });\n        }\n\n        if (container.image) {\n          var _image = _this.options.imageStore.get(container.image);\n\n          if (_image) {\n            var contentBox = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__["calculateContentBox"])(container.bounds, container.style.padding, container.style.border);\n\n            var _width = typeof _image.width === \'number\' && _image.width > 0 ? _image.width : contentBox.width;\n\n            var _height = typeof _image.height === \'number\' && _image.height > 0 ? _image.height : contentBox.height;\n\n            if (_width > 0 && _height > 0) {\n              _this.target.clip([Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__["calculatePaddingBoxPath"])(container.curvedBounds)], function () {\n                _this.target.drawImage(_image, new _Bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"](0, 0, _width, _height), contentBox);\n              });\n            }\n          }\n        }\n      };\n\n      var paths = container.getClipPaths();\n\n      if (paths.length) {\n        this.target.clip(paths, callback);\n      } else {\n        callback();\n      }\n    }\n  }, {\n    key: "renderNodeBackgroundAndBorders",\n    value: function renderNodeBackgroundAndBorders(container) {\n      var _this2 = this;\n\n      var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;\n      var hasRenderableBorders = container.style.border.some(function (border) {\n        return border.borderStyle !== _parsing_border__WEBPACK_IMPORTED_MODULE_5__["BORDER_STYLE"].NONE && !border.borderColor.isTransparent();\n      });\n\n      var callback = function callback() {\n        var backgroundPaintingArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroungPaintingArea"])(container.curvedBounds, container.style.background.backgroundClip);\n\n        if (HAS_BACKGROUND) {\n          _this2.target.clip([backgroundPaintingArea], function () {\n            if (!container.style.background.backgroundColor.isTransparent()) {\n              _this2.target.fill(container.style.background.backgroundColor);\n            }\n\n            _this2.renderBackgroundImage(container);\n          });\n        }\n\n        container.style.border.forEach(function (border, side) {\n          if (border.borderStyle !== _parsing_border__WEBPACK_IMPORTED_MODULE_5__["BORDER_STYLE"].NONE && !border.borderColor.isTransparent()) {\n            _this2.renderBorder(border, side, container.curvedBounds);\n          }\n        });\n      };\n\n      if (HAS_BACKGROUND || hasRenderableBorders) {\n        var paths = container.parent ? container.parent.getClipPaths() : [];\n\n        if (paths.length) {\n          this.target.clip(paths, callback);\n        } else {\n          callback();\n        }\n      }\n    }\n  }, {\n    key: "renderBackgroundImage",\n    value: function renderBackgroundImage(container) {\n      var _this3 = this;\n\n      container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {\n        if (backgroundImage.source.method === \'url\' && backgroundImage.source.args.length) {\n          _this3.renderBackgroundRepeat(container, backgroundImage);\n        } else if (/gradient/i.test(backgroundImage.source.method)) {\n          _this3.renderBackgroundGradient(container, backgroundImage);\n        }\n      });\n    }\n  }, {\n    key: "renderBackgroundRepeat",\n    value: function renderBackgroundRepeat(container, background) {\n      var image = this.options.imageStore.get(background.source.args[0]);\n\n      if (image) {\n        var backgroundPositioningArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroungPositioningArea"])(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);\n        var backgroundImageSize = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroundSize"])(background, image, backgroundPositioningArea);\n        var position = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroundPosition"])(background.position, backgroundImageSize, backgroundPositioningArea);\n\n        var _path = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroundRepeatPath"])(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);\n\n        var _offsetX = Math.round(backgroundPositioningArea.left + position.x);\n\n        var _offsetY = Math.round(backgroundPositioningArea.top + position.y);\n\n        this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);\n      }\n    }\n  }, {\n    key: "renderBackgroundGradient",\n    value: function renderBackgroundGradient(container, background) {\n      var backgroundPositioningArea = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroungPositioningArea"])(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);\n      var backgroundImageSize = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateGradientBackgroundSize"])(background, backgroundPositioningArea);\n      var position = Object(_parsing_background__WEBPACK_IMPORTED_MODULE_4__["calculateBackgroundPosition"])(background.position, backgroundImageSize, backgroundPositioningArea);\n      var gradientBounds = new _Bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);\n      var gradient = Object(_Gradient__WEBPACK_IMPORTED_MODULE_2__["parseGradient"])(container, background.source, gradientBounds);\n\n      if (gradient) {\n        switch (gradient.type) {\n          case _Gradient__WEBPACK_IMPORTED_MODULE_2__["GRADIENT_TYPE"].LINEAR_GRADIENT:\n            // $FlowFixMe\n            this.target.renderLinearGradient(gradientBounds, gradient);\n            break;\n\n          case _Gradient__WEBPACK_IMPORTED_MODULE_2__["GRADIENT_TYPE"].RADIAL_GRADIENT:\n            // $FlowFixMe\n            this.target.renderRadialGradient(gradientBounds, gradient);\n            break;\n        }\n      }\n    }\n  }, {\n    key: "renderBorder",\n    value: function renderBorder(border, side, curvePoints) {\n      this.target.drawShape(Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__["parsePathForBorder"])(curvePoints, side), border.borderColor);\n    }\n  }, {\n    key: "renderStack",\n    value: function renderStack(stack) {\n      var _this4 = this;\n\n      if (stack.container.isVisible()) {\n        var _opacity = stack.getOpacity();\n\n        if (_opacity !== this._opacity) {\n          this.target.setOpacity(stack.getOpacity());\n          this._opacity = _opacity;\n        }\n\n        var transform = stack.container.style.transform;\n\n        if (transform !== null) {\n          this.target.transform(stack.container.bounds.left + transform.transformOrigin[0].value, stack.container.bounds.top + transform.transformOrigin[1].value, transform.transform, function () {\n            return _this4.renderStackContent(stack);\n          });\n        } else {\n          this.renderStackContent(stack);\n        }\n      }\n    }\n  }, {\n    key: "renderStackContent",\n    value: function renderStackContent(stack) {\n      var _splitStackingContext = splitStackingContexts(stack),\n          _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),\n          negativeZIndex = _splitStackingContext2[0],\n          zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],\n          positiveZIndex = _splitStackingContext2[2],\n          nonPositionedFloats = _splitStackingContext2[3],\n          nonPositionedInlineLevel = _splitStackingContext2[4];\n\n      var _splitDescendants = splitDescendants(stack),\n          _splitDescendants2 = _slicedToArray(_splitDescendants, 2),\n          inlineLevel = _splitDescendants2[0],\n          nonInlineLevel = _splitDescendants2[1]; // https://www.w3.org/TR/css-position-3/#painting-order\n      // 1. the background and borders of the element forming the stacking context.\n\n\n      this.renderNodeBackgroundAndBorders(stack.container); // 2. the child stacking contexts with negative stack levels (most negative first).\n\n      negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this); // 3. For all its in-flow, non-positioned, block-level descendants in tree order:\n\n      this.renderNodeContent(stack.container);\n      nonInlineLevel.forEach(this.renderNode, this); // 4. All non-positioned floating descendants, in tree order. For each one of these,\n      // treat the element as if it created a new stacking context, but any positioned descendants and descendants\n      // which actually create a new stacking context should be considered part of the parent stacking context,\n      // not this new one.\n\n      nonPositionedFloats.forEach(this.renderStack, this); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.\n\n      nonPositionedInlineLevel.forEach(this.renderStack, this);\n      inlineLevel.forEach(this.renderNode, this); // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:\n      //  All positioned descendants with \'z-index: auto\' or \'z-index: 0\', in tree order.\n      //  For those with \'z-index: auto\', treat the element as if it created a new stacking context,\n      //  but any positioned descendants and descendants which actually create a new stacking context should be\n      //  considered part of the parent stacking context, not this new one. For those with \'z-index: 0\',\n      //  treat the stacking context generated atomically.\n      //\n      //  All opacity descendants with opacity less than 1\n      //\n      //  All transform descendants with transform other than none\n\n      zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this); // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index\n      // order (smallest first) then tree order.\n\n      positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);\n    }\n  }, {\n    key: "render",\n    value: function render(stack) {\n      var _this5 = this;\n\n      if (this.options.backgroundColor) {\n        this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);\n      }\n\n      this.renderStack(stack);\n      var target = this.target.getTarget();\n\n      if (true) {\n        return target.then(function (output) {\n          _this5.options.logger.log("Render completed");\n\n          return output;\n        });\n      }\n\n      return target;\n    }\n  }]);\n\n  return Renderer;\n}();\n\n\n\nvar splitDescendants = function splitDescendants(stack) {\n  var inlineLevel = [];\n  var nonInlineLevel = [];\n  var length = stack.children.length;\n\n  for (var i = 0; i < length; i++) {\n    var child = stack.children[i];\n\n    if (child.isInlineLevel()) {\n      inlineLevel.push(child);\n    } else {\n      nonInlineLevel.push(child);\n    }\n  }\n\n  return [inlineLevel, nonInlineLevel];\n};\n\nvar splitStackingContexts = function splitStackingContexts(stack) {\n  var negativeZIndex = [];\n  var zeroOrAutoZIndexOrTransformedOrOpacity = [];\n  var positiveZIndex = [];\n  var nonPositionedFloats = [];\n  var nonPositionedInlineLevel = [];\n  var length = stack.contexts.length;\n\n  for (var i = 0; i < length; i++) {\n    var child = stack.contexts[i];\n\n    if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {\n      if (child.container.style.zIndex.order < 0) {\n        negativeZIndex.push(child);\n      } else if (child.container.style.zIndex.order > 0) {\n        positiveZIndex.push(child);\n      } else {\n        zeroOrAutoZIndexOrTransformedOrOpacity.push(child);\n      }\n    } else {\n      if (child.container.isFloating()) {\n        nonPositionedFloats.push(child);\n      } else {\n        nonPositionedInlineLevel.push(child);\n      }\n    }\n  }\n\n  return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];\n};\n\nvar sortByZIndex = function sortByZIndex(a, b) {\n  if (a.container.style.zIndex.order > b.container.style.zIndex.order) {\n    return 1;\n  } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {\n    return -1;\n  }\n\n  return a.container.index > b.container.index ? 1 : -1;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Renderer.js?'
                );
              },
            './src/ResourceLoader.js':
              /*!*******************************!*\
  !*** ./src/ResourceLoader.js ***!
  \*******************************/
              /*! exports provided: default, ResourceStore */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceStore", function() { return ResourceStore; });\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature */ "./src/Feature.js");\n/* harmony import */ var _Proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proxy */ "./src/Proxy.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar ResourceLoader =\n/*#__PURE__*/\nfunction () {\n  function ResourceLoader(options, logger, window) {\n    _classCallCheck(this, ResourceLoader);\n\n    this.options = options;\n    this._window = window;\n    this.origin = this.getOrigin(window.location.href);\n    this.cache = {};\n    this.logger = logger;\n    this._index = 0;\n  }\n\n  _createClass(ResourceLoader, [{\n    key: "loadImage",\n    value: function loadImage(src) {\n      var _this = this;\n\n      if (this.hasResourceInCache(src)) {\n        return src;\n      }\n\n      if (isBlobImage(src)) {\n        this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);\n        return src;\n      }\n\n      if (!isSVG(src) || _Feature__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_SVG_DRAWING) {\n        if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {\n          return this.addImage(src, src, false);\n        } else if (!this.isSameOrigin(src)) {\n          if (typeof this.options.proxy === \'string\') {\n            this.cache[src] = Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__["Proxy"])(src, this.options).then(function (src) {\n              return _loadImage(src, _this.options.imageTimeout || 0);\n            });\n            return src;\n          } else if (this.options.useCORS === true && _Feature__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_CORS_IMAGES) {\n            return this.addImage(src, src, true);\n          }\n        }\n      }\n    }\n  }, {\n    key: "inlineImage",\n    value: function inlineImage(src) {\n      var _this2 = this;\n\n      if (isInlineImage(src)) {\n        return _loadImage(src, this.options.imageTimeout || 0);\n      }\n\n      if (this.hasResourceInCache(src)) {\n        return this.cache[src];\n      }\n\n      if (!this.isSameOrigin(src) && typeof this.options.proxy === \'string\') {\n        return this.cache[src] = Object(_Proxy__WEBPACK_IMPORTED_MODULE_1__["Proxy"])(src, this.options).then(function (src) {\n          return _loadImage(src, _this2.options.imageTimeout || 0);\n        });\n      }\n\n      return this.xhrImage(src);\n    }\n  }, {\n    key: "xhrImage",\n    value: function xhrImage(src) {\n      var _this3 = this;\n\n      this.cache[src] = new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status !== 200) {\n              reject("Failed to fetch image ".concat(src.substring(0, 256), " with status code ").concat(xhr.status));\n            } else {\n              var reader = new FileReader();\n              reader.addEventListener(\'load\', function () {\n                // $FlowFixMe\n                var result = reader.result;\n                resolve(result);\n              }, false);\n              reader.addEventListener(\'error\', function (e) {\n                return reject(e);\n              }, false);\n              reader.readAsDataURL(xhr.response);\n            }\n          }\n        };\n\n        xhr.responseType = \'blob\';\n\n        if (_this3.options.imageTimeout) {\n          var timeout = _this3.options.imageTimeout;\n          xhr.timeout = timeout;\n\n          xhr.ontimeout = function () {\n            return reject( true ? "Timed out (".concat(timeout, "ms) fetching ").concat(src.substring(0, 256)) : undefined);\n          };\n        }\n\n        xhr.open(\'GET\', src, true);\n        xhr.send();\n      }).then(function (src) {\n        return _loadImage(src, _this3.options.imageTimeout || 0);\n      });\n      return this.cache[src];\n    }\n  }, {\n    key: "loadCanvas",\n    value: function loadCanvas(node) {\n      var key = String(this._index++);\n      this.cache[key] = Promise.resolve(node);\n      return key;\n    }\n  }, {\n    key: "hasResourceInCache",\n    value: function hasResourceInCache(key) {\n      return typeof this.cache[key] !== \'undefined\';\n    }\n  }, {\n    key: "addImage",\n    value: function addImage(key, src, useCORS) {\n      var _this4 = this;\n\n      if (true) {\n        this.logger.log("Added image ".concat(key.substring(0, 256)));\n      }\n\n      this.cache[key] = new Promise(function (resolve, reject) {\n        var img = new Image();\n\n        img.onload = function () {\n          return resolve(img);\n        }; //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous\n\n\n        if (isInlineBase64Image(src) || useCORS) {\n          img.crossOrigin = \'anonymous\';\n        }\n\n        img.onerror = reject;\n        img.src = src;\n\n        if (img.complete === true) {\n          // Inline XML images may fail to parse, throwing an Error later on\n          setTimeout(function () {\n            resolve(img);\n          }, 500);\n        }\n\n        if (_this4.options.imageTimeout) {\n          var timeout = _this4.options.imageTimeout;\n          setTimeout(function () {\n            return reject( true ? "Timed out (".concat(timeout, "ms) fetching ").concat(src.substring(0, 256)) : undefined);\n          }, timeout);\n        }\n      });\n      return key;\n    }\n  }, {\n    key: "isSameOrigin",\n    value: function isSameOrigin(url) {\n      return this.getOrigin(url) === this.origin;\n    }\n  }, {\n    key: "getOrigin",\n    value: function getOrigin(url) {\n      var link = this._link || (this._link = this._window.document.createElement(\'a\'));\n\n      link.href = url;\n      link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/\n\n      return link.protocol + link.hostname + link.port;\n    }\n  }, {\n    key: "ready",\n    value: function ready() {\n      var _this5 = this;\n\n      var keys = Object.keys(this.cache);\n      var values = keys.map(function (str) {\n        return _this5.cache[str].catch(function (e) {\n          if (true) {\n            _this5.logger.log("Unable to load image", e);\n          }\n\n          return null;\n        });\n      });\n      return Promise.all(values).then(function (images) {\n        if (true) {\n          _this5.logger.log("Finished loading ".concat(images.length, " images"), images);\n        }\n\n        return new ResourceStore(keys, images);\n      });\n    }\n  }]);\n\n  return ResourceLoader;\n}();\n\n\nvar ResourceStore =\n/*#__PURE__*/\nfunction () {\n  function ResourceStore(keys, resources) {\n    _classCallCheck(this, ResourceStore);\n\n    this._keys = keys;\n    this._resources = resources;\n  }\n\n  _createClass(ResourceStore, [{\n    key: "get",\n    value: function get(key) {\n      var index = this._keys.indexOf(key);\n\n      return index === -1 ? null : this._resources[index];\n    }\n  }]);\n\n  return ResourceStore;\n}();\nvar INLINE_SVG = /^data:image\\/svg\\+xml/i;\nvar INLINE_BASE64 = /^data:image\\/.*;base64,/i;\nvar INLINE_IMG = /^data:image\\/.*/i;\n\nvar isInlineImage = function isInlineImage(src) {\n  return INLINE_IMG.test(src);\n};\n\nvar isInlineBase64Image = function isInlineBase64Image(src) {\n  return INLINE_BASE64.test(src);\n};\n\nvar isBlobImage = function isBlobImage(src) {\n  return src.substr(0, 4) === \'blob\';\n};\n\nvar isSVG = function isSVG(src) {\n  return src.substr(-3).toLowerCase() === \'svg\' || INLINE_SVG.test(src);\n};\n\nvar _loadImage = function _loadImage(src, timeout) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.onerror = reject;\n    img.src = src;\n\n    if (img.complete === true) {\n      // Inline XML images may fail to parse, throwing an Error later on\n      setTimeout(function () {\n        resolve(img);\n      }, 500);\n    }\n\n    if (timeout) {\n      setTimeout(function () {\n        return reject( true ? "Timed out (".concat(timeout, "ms) loading image") : undefined);\n      }, timeout);\n    }\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/ResourceLoader.js?'
                );
              },
            './src/StackingContext.js':
              /*!********************************!*\
  !*** ./src/StackingContext.js ***!
  \********************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StackingContext; });\n/* harmony import */ var _NodeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeContainer */ "./src/NodeContainer.js");\n/* harmony import */ var _parsing_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/position */ "./src/parsing/position.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar StackingContext =\n/*#__PURE__*/\nfunction () {\n  function StackingContext(container, parent, treatAsRealStackingContext) {\n    _classCallCheck(this, StackingContext);\n\n    this.container = container;\n    this.parent = parent;\n    this.contexts = [];\n    this.children = [];\n    this.treatAsRealStackingContext = treatAsRealStackingContext;\n  }\n\n  _createClass(StackingContext, [{\n    key: "getOpacity",\n    value: function getOpacity() {\n      return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;\n    }\n  }, {\n    key: "getRealParentStackingContext",\n    value: function getRealParentStackingContext() {\n      return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();\n    }\n  }]);\n\n  return StackingContext;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/StackingContext.js?'
                );
              },
            './src/TextBounds.js':
              /*!***************************!*\
  !*** ./src/TextBounds.js ***!
  \***************************/
              /*! exports provided: TextBounds, parseTextBounds */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBounds", function() { return TextBounds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTextBounds", function() { return parseTextBounds; });\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounds */ "./src/Bounds.js");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/textDecoration */ "./src/parsing/textDecoration.js");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature */ "./src/Feature.js");\n/* harmony import */ var _Unicode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unicode */ "./src/Unicode.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\n\n\n\nvar TextBounds = function TextBounds(text, bounds) {\n  _classCallCheck(this, TextBounds);\n\n  this.text = text;\n  this.bounds = bounds;\n};\nvar parseTextBounds = function parseTextBounds(value, parent, node) {\n  var letterRendering = parent.style.letterSpacing !== 0;\n  var textList = letterRendering ? Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__["toCodePoints"])(value).map(function (i) {\n    return Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__["fromCodePoint"])(i);\n  }) : Object(_Unicode__WEBPACK_IMPORTED_MODULE_3__["breakWords"])(value, parent);\n  var length = textList.length;\n  var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;\n  var scrollX = defaultView ? defaultView.pageXOffset : 0;\n  var scrollY = defaultView ? defaultView.pageYOffset : 0;\n  var textBounds = [];\n  var offset = 0;\n\n  for (var i = 0; i < length; i++) {\n    var text = textList[i];\n\n    if (parent.style.textDecoration !== _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__["TEXT_DECORATION"].NONE || text.trim().length > 0) {\n      if (_Feature__WEBPACK_IMPORTED_MODULE_2__["default"].SUPPORT_RANGE_BOUNDS) {\n        textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));\n      } else {\n        var replacementNode = node.splitText(text.length);\n        textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));\n        node = replacementNode;\n      }\n    } else if (!_Feature__WEBPACK_IMPORTED_MODULE_2__["default"].SUPPORT_RANGE_BOUNDS) {\n      node = node.splitText(text.length);\n    }\n\n    offset += text.length;\n  }\n\n  return textBounds;\n};\n\nvar getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {\n  var wrapper = node.ownerDocument.createElement(\'html2canvaswrapper\');\n  wrapper.appendChild(node.cloneNode(true));\n  var parentNode = node.parentNode;\n\n  if (parentNode) {\n    parentNode.replaceChild(wrapper, node);\n    var bounds = Object(_Bounds__WEBPACK_IMPORTED_MODULE_0__["parseBounds"])(wrapper, scrollX, scrollY);\n\n    if (wrapper.firstChild) {\n      parentNode.replaceChild(wrapper.firstChild, wrapper);\n    }\n\n    return bounds;\n  }\n\n  return new _Bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"](0, 0, 0, 0);\n};\n\nvar getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {\n  var range = node.ownerDocument.createRange();\n  range.setStart(node, offset);\n  range.setEnd(node, offset + length);\n  return _Bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"].fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);\n};\n\n//# sourceURL=webpack://html2canvas/./src/TextBounds.js?'
                );
              },
            './src/TextContainer.js':
              /*!******************************!*\
  !*** ./src/TextContainer.js ***!
  \******************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextContainer; });\n/* harmony import */ var _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsing/textTransform */ "./src/parsing/textTransform.js");\n/* harmony import */ var _TextBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBounds */ "./src/TextBounds.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar TextContainer =\n/*#__PURE__*/\nfunction () {\n  function TextContainer(text, parent, bounds) {\n    _classCallCheck(this, TextContainer);\n\n    this.text = text;\n    this.parent = parent;\n    this.bounds = bounds;\n  }\n\n  _createClass(TextContainer, null, [{\n    key: "fromTextNode",\n    value: function fromTextNode(node, parent) {\n      var text = transform(node.data, parent.style.textTransform);\n      return new TextContainer(text, parent, Object(_TextBounds__WEBPACK_IMPORTED_MODULE_1__["parseTextBounds"])(text, parent, node));\n    }\n  }]);\n\n  return TextContainer;\n}();\n\n\nvar CAPITALIZE = /(^|\\s|:|-|\\(|\\))([a-z])/g;\n\nvar transform = function transform(text, _transform) {\n  switch (_transform) {\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__["TEXT_TRANSFORM"].LOWERCASE:\n      return text.toLowerCase();\n\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__["TEXT_TRANSFORM"].CAPITALIZE:\n      return text.replace(CAPITALIZE, capitalize);\n\n    case _parsing_textTransform__WEBPACK_IMPORTED_MODULE_0__["TEXT_TRANSFORM"].UPPERCASE:\n      return text.toUpperCase();\n\n    default:\n      return text;\n  }\n};\n\nfunction capitalize(m, p1, p2) {\n  if (m.length > 0) {\n    return p1 + p2.toUpperCase();\n  }\n\n  return m;\n}\n\n//# sourceURL=webpack://html2canvas/./src/TextContainer.js?'
                );
              },
            './src/Unicode.js':
              /*!************************!*\
  !*** ./src/Unicode.js ***!
  \************************/
              /*! exports provided: toCodePoints, fromCodePoint, breakWords */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakWords", function() { return breakWords; });\n/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-line-break */ "./node_modules/css-line-break/dist/index.js");\n/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsing/overflowWrap */ "./src/parsing/overflowWrap.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCodePoints", function() { return css_line_break__WEBPACK_IMPORTED_MODULE_0__["toCodePoints"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromCodePoint", function() { return css_line_break__WEBPACK_IMPORTED_MODULE_0__["fromCodePoint"]; });\n\n\n\n\n\n\nvar breakWords = function breakWords(str, parent) {\n  var breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_0__["LineBreaker"])(str, {\n    lineBreak: parent.style.lineBreak,\n    wordBreak: parent.style.overflowWrap === _parsing_overflowWrap__WEBPACK_IMPORTED_MODULE_1__["OVERFLOW_WRAP"].BREAK_WORD ? \'break-word\' : parent.style.wordBreak\n  });\n  var words = [];\n  var bk;\n\n  while (!(bk = breaker.next()).done) {\n    words.push(bk.value.slice());\n  }\n\n  return words;\n};\n\n//# sourceURL=webpack://html2canvas/./src/Unicode.js?'
                );
              },
            './src/Util.js':
              /*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
              /*! exports provided: contains, distance, copyCSSStyles, SMALL_IMAGE */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyCSSStyles", function() { return copyCSSStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMALL_IMAGE", function() { return SMALL_IMAGE; });\n\n\nvar contains = function contains(bit, value) {\n  return (bit & value) !== 0;\n};\nvar distance = function distance(a, b) {\n  return Math.sqrt(a * a + b * b);\n};\nvar copyCSSStyles = function copyCSSStyles(style, target) {\n  // Edge does not provide value for cssText\n  for (var i = style.length - 1; i >= 0; i--) {\n    var property = style.item(i); // Safari shows pseudoelements if content is set\n\n    if (property !== \'content\') {\n      target.style.setProperty(property, style.getPropertyValue(property));\n    }\n  }\n\n  return target;\n};\nvar SMALL_IMAGE = \'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\';\n\n//# sourceURL=webpack://html2canvas/./src/Util.js?'
                );
              },
            './src/Window.js':
              /*!***********************!*\
  !*** ./src/Window.js ***!
  \***********************/
              /*! exports provided: renderElement */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");\n/* harmony import */ var _NodeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeParser */ "./src/NodeParser.js");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer */ "./src/Renderer.js");\n/* harmony import */ var _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./src/renderer/ForeignObjectRenderer.js");\n/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feature */ "./src/Feature.js");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bounds */ "./src/Bounds.js");\n/* harmony import */ var _Clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clone */ "./src/Clone.js");\n/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Font */ "./src/Font.js");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Color */ "./src/Color.js");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar renderElement = function renderElement(element, options, logger) {\n  var ownerDocument = element.ownerDocument;\n  var windowBounds = new _Bounds__WEBPACK_IMPORTED_MODULE_5__["Bounds"](options.scrollX, options.scrollY, options.windowWidth, options.windowHeight); // http://www.w3.org/TR/css3-background/#special-backgrounds\n\n  var documentBackgroundColor = ownerDocument.documentElement ? new _Color__WEBPACK_IMPORTED_MODULE_8__["default"](getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color__WEBPACK_IMPORTED_MODULE_8__["TRANSPARENT"];\n  var bodyBackgroundColor = ownerDocument.body ? new _Color__WEBPACK_IMPORTED_MODULE_8__["default"](getComputedStyle(ownerDocument.body).backgroundColor) : _Color__WEBPACK_IMPORTED_MODULE_8__["TRANSPARENT"];\n  var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color__WEBPACK_IMPORTED_MODULE_8__["default"](options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color__WEBPACK_IMPORTED_MODULE_8__["default"](options.backgroundColor) : null;\n  return (options.foreignObjectRendering ? // $FlowFixMe\n  _Feature__WEBPACK_IMPORTED_MODULE_4__["default"].SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {\n    return supportForeignObject ? function (cloner) {\n      if (true) {\n        logger.log("Document cloned, using foreignObject rendering");\n      }\n\n      return cloner.inlineFonts(ownerDocument).then(function () {\n        return cloner.resourceLoader.ready();\n      }).then(function () {\n        var renderer = new _renderer_ForeignObjectRenderer__WEBPACK_IMPORTED_MODULE_3__["default"](cloner.documentElement);\n        var defaultView = ownerDocument.defaultView;\n        var scrollX = defaultView.pageXOffset;\n        var scrollY = defaultView.pageYOffset;\n        var isDocument = element.tagName === \'HTML\' || element.tagName === \'BODY\';\n\n        var _ref = isDocument ? Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__["parseDocumentSize"])(ownerDocument) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__["parseBounds"])(element, scrollX, scrollY),\n            width = _ref.width,\n            height = _ref.height,\n            left = _ref.left,\n            top = _ref.top;\n\n        return renderer.render({\n          backgroundColor: backgroundColor,\n          logger: logger,\n          scale: options.scale,\n          x: typeof options.x === \'number\' ? options.x : left,\n          y: typeof options.y === \'number\' ? options.y : top,\n          width: typeof options.width === \'number\' ? options.width : Math.ceil(width),\n          height: typeof options.height === \'number\' ? options.height : Math.ceil(height),\n          windowWidth: options.windowWidth,\n          windowHeight: options.windowHeight,\n          scrollX: options.scrollX,\n          scrollY: options.scrollY\n        });\n      });\n    }(new _Clone__WEBPACK_IMPORTED_MODULE_6__["DocumentCloner"](element, options, logger, true, renderElement)) : Object(_Clone__WEBPACK_IMPORTED_MODULE_6__["cloneWindow"])(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {\n      var _ref3 = _slicedToArray(_ref2, 3),\n          container = _ref3[0],\n          clonedElement = _ref3[1],\n          resourceLoader = _ref3[2];\n\n      if (true) {\n        logger.log("Document cloned, using computed rendering");\n      }\n\n      var stack = Object(_NodeParser__WEBPACK_IMPORTED_MODULE_1__["NodeParser"])(clonedElement, resourceLoader, logger);\n      var clonedDocument = clonedElement.ownerDocument;\n\n      if (backgroundColor === stack.container.style.background.backgroundColor) {\n        stack.container.style.background.backgroundColor = _Color__WEBPACK_IMPORTED_MODULE_8__["TRANSPARENT"];\n      }\n\n      return resourceLoader.ready().then(function (imageStore) {\n        var fontMetrics = new _Font__WEBPACK_IMPORTED_MODULE_7__["FontMetrics"](clonedDocument);\n\n        if (true) {\n          logger.log("Starting renderer");\n        }\n\n        var defaultView = clonedDocument.defaultView;\n        var scrollX = defaultView.pageXOffset;\n        var scrollY = defaultView.pageYOffset;\n        var isDocument = clonedElement.tagName === \'HTML\' || clonedElement.tagName === \'BODY\';\n\n        var _ref4 = isDocument ? Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__["parseDocumentSize"])(ownerDocument) : Object(_Bounds__WEBPACK_IMPORTED_MODULE_5__["parseBounds"])(clonedElement, scrollX, scrollY),\n            width = _ref4.width,\n            height = _ref4.height,\n            left = _ref4.left,\n            top = _ref4.top;\n\n        var renderOptions = {\n          backgroundColor: backgroundColor,\n          fontMetrics: fontMetrics,\n          imageStore: imageStore,\n          logger: logger,\n          scale: options.scale,\n          x: typeof options.x === \'number\' ? options.x : left,\n          y: typeof options.y === \'number\' ? options.y : top,\n          width: typeof options.width === \'number\' ? options.width : Math.ceil(width),\n          height: typeof options.height === \'number\' ? options.height : Math.ceil(height)\n        };\n\n        if (Array.isArray(options.target)) {\n          return Promise.all(options.target.map(function (target) {\n            var renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__["default"](target, renderOptions);\n            return renderer.render(stack);\n          }));\n        } else {\n          var renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__["default"](options.target, renderOptions);\n          var canvas = renderer.render(stack);\n\n          if (options.removeContainer === true) {\n            if (container.parentNode) {\n              container.parentNode.removeChild(container);\n            } else if (true) {\n              logger.log("Cannot detach cloned iframe as it is not in the DOM anymore");\n            }\n          }\n\n          return canvas;\n        }\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/Window.js?'
                );
              },
            './src/drawing/BezierCurve.js':
              /*!************************************!*\
  !*** ./src/drawing/BezierCurve.js ***!
  \************************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BezierCurve; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ "./src/drawing/Path.js");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/drawing/Vector.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar lerp = function lerp(a, b, t) {\n  return new _Vector__WEBPACK_IMPORTED_MODULE_1__["default"](a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);\n};\n\nvar BezierCurve =\n/*#__PURE__*/\nfunction () {\n  function BezierCurve(start, startControl, endControl, end) {\n    _classCallCheck(this, BezierCurve);\n\n    this.type = _Path__WEBPACK_IMPORTED_MODULE_0__["PATH"].BEZIER_CURVE;\n    this.start = start;\n    this.startControl = startControl;\n    this.endControl = endControl;\n    this.end = end;\n  }\n\n  _createClass(BezierCurve, [{\n    key: "subdivide",\n    value: function subdivide(t, firstHalf) {\n      var ab = lerp(this.start, this.startControl, t);\n      var bc = lerp(this.startControl, this.endControl, t);\n      var cd = lerp(this.endControl, this.end, t);\n      var abbc = lerp(ab, bc, t);\n      var bccd = lerp(bc, cd, t);\n      var dest = lerp(abbc, bccd, t);\n      return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);\n    }\n  }, {\n    key: "reverse",\n    value: function reverse() {\n      return new BezierCurve(this.end, this.endControl, this.startControl, this.start);\n    }\n  }]);\n\n  return BezierCurve;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/BezierCurve.js?'
                );
              },
            './src/drawing/Circle.js':
              /*!*******************************!*\
  !*** ./src/drawing/Circle.js ***!
  \*******************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ "./src/drawing/Path.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\n\nvar Circle = function Circle(x, y, radius) {\n  _classCallCheck(this, Circle);\n\n  this.type = _Path__WEBPACK_IMPORTED_MODULE_0__["PATH"].CIRCLE;\n  this.x = x;\n  this.y = y;\n  this.radius = radius;\n\n  if (true) {\n    if (isNaN(x)) {\n      console.error("Invalid x value given for Circle");\n    }\n\n    if (isNaN(y)) {\n      console.error("Invalid y value given for Circle");\n    }\n\n    if (isNaN(radius)) {\n      console.error("Invalid radius value given for Circle");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Circle.js?'
                );
              },
            './src/drawing/Path.js':
              /*!*****************************!*\
  !*** ./src/drawing/Path.js ***!
  \*****************************/
              /*! exports provided: PATH */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH", function() { return PATH; });\n\n\nvar PATH = {\n  VECTOR: 0,\n  BEZIER_CURVE: 1,\n  CIRCLE: 2\n};\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Path.js?'
                );
              },
            './src/drawing/Size.js':
              /*!*****************************!*\
  !*** ./src/drawing/Size.js ***!
  \*****************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Size; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Size = function Size(width, height) {\n  _classCallCheck(this, Size);\n\n  this.width = width;\n  this.height = height;\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Size.js?'
                );
              },
            './src/drawing/Vector.js':
              /*!*******************************!*\
  !*** ./src/drawing/Vector.js ***!
  \*******************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });\n/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Path */ "./src/drawing/Path.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\n\nvar Vector = function Vector(x, y) {\n  _classCallCheck(this, Vector);\n\n  this.type = _Path__WEBPACK_IMPORTED_MODULE_0__["PATH"].VECTOR;\n  this.x = x;\n  this.y = y;\n\n  if (true) {\n    if (isNaN(x)) {\n      console.error("Invalid x value given for Vector");\n    }\n\n    if (isNaN(y)) {\n      console.error("Invalid y value given for Vector");\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://html2canvas/./src/drawing/Vector.js?'
                );
              },
            './src/index.js':
              /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./src/renderer/CanvasRenderer.js");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Window */ "./src/Window.js");\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === \'function\') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar html2canvas = function html2canvas(element, conf) {\n  var config = conf || {};\n  var logger = new _Logger__WEBPACK_IMPORTED_MODULE_1__["default"](typeof config.logging === \'boolean\' ? config.logging : true);\n  logger.log("html2canvas ".concat("1.0.0-rc.1"));\n\n  if ( true && typeof config.onrendered === \'function\') {\n    logger.error("onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value");\n  }\n\n  var ownerDocument = element.ownerDocument;\n\n  if (!ownerDocument) {\n    return Promise.reject("Provided element is not within a Document");\n  }\n\n  var defaultView = ownerDocument.defaultView;\n  var defaultOptions = {\n    allowTaint: false,\n    backgroundColor: \'#ffffff\',\n    imageTimeout: 15000,\n    logging: true,\n    proxy: null,\n    removeContainer: true,\n    foreignObjectRendering: false,\n    scale: defaultView.devicePixelRatio || 1,\n    target: new _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__["default"](config.canvas),\n    useCORS: false,\n    windowWidth: defaultView.innerWidth,\n    windowHeight: defaultView.innerHeight,\n    scrollX: defaultView.pageXOffset,\n    scrollY: defaultView.pageYOffset\n  };\n  var result = Object(_Window__WEBPACK_IMPORTED_MODULE_2__["renderElement"])(element, _objectSpread({}, defaultOptions, config), logger);\n\n  if (true) {\n    return result.catch(function (e) {\n      logger.error(e);\n      throw e;\n    });\n  }\n\n  return result;\n};\n\nhtml2canvas.CanvasRenderer = _renderer_CanvasRenderer__WEBPACK_IMPORTED_MODULE_0__["default"];\n/* harmony default export */ __webpack_exports__["default"] = (html2canvas);\n\n//# sourceURL=webpack://html2canvas/./src/index.js?'
                );
              },
            './src/parsing/background.js':
              /*!***********************************!*\
  !*** ./src/parsing/background.js ***!
  \***********************************/
              /*! exports provided: BACKGROUND_REPEAT, BACKGROUND_SIZE, BACKGROUND_CLIP, BACKGROUND_ORIGIN, calculateBackgroundSize, calculateGradientBackgroundSize, calculateBackgroungPaintingArea, calculateBackgroungPositioningArea, calculateBackgroundPosition, calculateBackgroundRepeatPath, parseBackground, parseBackgroundImage */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_REPEAT", function() { return BACKGROUND_REPEAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZE", function() { return BACKGROUND_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_CLIP", function() { return BACKGROUND_CLIP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_ORIGIN", function() { return BACKGROUND_ORIGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBackgroundSize", function() { return calculateBackgroundSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateGradientBackgroundSize", function() { return calculateGradientBackgroundSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBackgroungPaintingArea", function() { return calculateBackgroungPaintingArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBackgroungPositioningArea", function() { return calculateBackgroungPositioningArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBackgroundPosition", function() { return calculateBackgroundPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBackgroundRepeatPath", function() { return calculateBackgroundRepeatPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBackground", function() { return parseBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBackgroundImage", function() { return parseBackgroundImage; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ "./src/Color.js");\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Length */ "./src/Length.js");\n/* harmony import */ var _drawing_Size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drawing/Size */ "./src/drawing/Size.js");\n/* harmony import */ var _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawing/Vector */ "./src/drawing/Vector.js");\n/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bounds */ "./src/Bounds.js");\n/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./padding */ "./src/parsing/padding.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\n\n\n\n\n\nvar BACKGROUND_REPEAT = {\n  REPEAT: 0,\n  NO_REPEAT: 1,\n  REPEAT_X: 2,\n  REPEAT_Y: 3\n};\nvar BACKGROUND_SIZE = {\n  AUTO: 0,\n  CONTAIN: 1,\n  COVER: 2,\n  LENGTH: 3\n};\nvar BACKGROUND_CLIP = {\n  BORDER_BOX: 0,\n  PADDING_BOX: 1,\n  CONTENT_BOX: 2\n};\nvar BACKGROUND_ORIGIN = BACKGROUND_CLIP;\nvar AUTO = \'auto\';\n\nvar BackgroundSize = function BackgroundSize(size) {\n  _classCallCheck(this, BackgroundSize);\n\n  switch (size) {\n    case \'contain\':\n      this.size = BACKGROUND_SIZE.CONTAIN;\n      break;\n\n    case \'cover\':\n      this.size = BACKGROUND_SIZE.COVER;\n      break;\n\n    case \'auto\':\n      this.size = BACKGROUND_SIZE.AUTO;\n      break;\n\n    default:\n      this.value = new _Length__WEBPACK_IMPORTED_MODULE_1__["default"](size);\n  }\n};\n\nvar calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {\n  var width = 0;\n  var height = 0;\n  var size = backgroundImage.size;\n\n  if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {\n    var targetRatio = bounds.width / bounds.height;\n    var currentRatio = image.width / image.height;\n    return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__["default"](bounds.width, bounds.width / currentRatio) : new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__["default"](bounds.height * currentRatio, bounds.height);\n  }\n\n  if (size[0].value) {\n    width = size[0].value.getAbsoluteValue(bounds.width);\n  }\n\n  if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {\n    height = image.height;\n  } else if (size[1].size === BACKGROUND_SIZE.AUTO) {\n    height = width / image.width * image.height;\n  } else if (size[1].value) {\n    height = size[1].value.getAbsoluteValue(bounds.height);\n  }\n\n  if (size[0].size === BACKGROUND_SIZE.AUTO) {\n    width = height / image.height * image.width;\n  }\n\n  return new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__["default"](width, height);\n};\nvar calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {\n  var size = backgroundImage.size;\n  var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;\n  var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;\n  return new _drawing_Size__WEBPACK_IMPORTED_MODULE_2__["default"](width, height);\n};\nvar AUTO_SIZE = new BackgroundSize(AUTO);\nvar calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {\n  switch (clip) {\n    case BACKGROUND_CLIP.BORDER_BOX:\n      return Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__["calculateBorderBoxPath"])(curves);\n\n    case BACKGROUND_CLIP.PADDING_BOX:\n    default:\n      return Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__["calculatePaddingBoxPath"])(curves);\n  }\n};\nvar calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {\n  var paddingBox = Object(_Bounds__WEBPACK_IMPORTED_MODULE_4__["calculatePaddingBox"])(bounds, border);\n\n  switch (backgroundOrigin) {\n    case BACKGROUND_ORIGIN.BORDER_BOX:\n      return bounds;\n\n    case BACKGROUND_ORIGIN.CONTENT_BOX:\n      var paddingLeft = padding[_padding__WEBPACK_IMPORTED_MODULE_5__["PADDING_SIDES"].LEFT].getAbsoluteValue(bounds.width);\n      var paddingRight = padding[_padding__WEBPACK_IMPORTED_MODULE_5__["PADDING_SIDES"].RIGHT].getAbsoluteValue(bounds.width);\n      var paddingTop = padding[_padding__WEBPACK_IMPORTED_MODULE_5__["PADDING_SIDES"].TOP].getAbsoluteValue(bounds.width);\n      var paddingBottom = padding[_padding__WEBPACK_IMPORTED_MODULE_5__["PADDING_SIDES"].BOTTOM].getAbsoluteValue(bounds.width);\n      return new _Bounds__WEBPACK_IMPORTED_MODULE_4__["Bounds"](paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);\n\n    case BACKGROUND_ORIGIN.PADDING_BOX:\n    default:\n      return paddingBox;\n  }\n};\nvar calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {\n  return new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));\n};\nvar calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {\n  var repeat = background.repeat;\n\n  switch (repeat) {\n    case BACKGROUND_REPEAT.REPEAT_X:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];\n\n    case BACKGROUND_REPEAT.REPEAT_Y:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];\n\n    case BACKGROUND_REPEAT.NO_REPEAT:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];\n\n    default:\n      return [new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _drawing_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(bounds.left), Math.round(bounds.height + bounds.top))];\n  }\n};\nvar parseBackground = function parseBackground(style, resourceLoader) {\n  return {\n    backgroundColor: new _Color__WEBPACK_IMPORTED_MODULE_0__["default"](style.backgroundColor),\n    backgroundImage: parseBackgroundImages(style, resourceLoader),\n    backgroundClip: parseBackgroundClip(style.backgroundClip),\n    backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)\n  };\n};\n\nvar parseBackgroundClip = function parseBackgroundClip(backgroundClip) {\n  switch (backgroundClip) {\n    case \'padding-box\':\n      return BACKGROUND_CLIP.PADDING_BOX;\n\n    case \'content-box\':\n      return BACKGROUND_CLIP.CONTENT_BOX;\n  }\n\n  return BACKGROUND_CLIP.BORDER_BOX;\n};\n\nvar parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {\n  switch (backgroundOrigin) {\n    case \'padding-box\':\n      return BACKGROUND_ORIGIN.PADDING_BOX;\n\n    case \'content-box\':\n      return BACKGROUND_ORIGIN.CONTENT_BOX;\n  }\n\n  return BACKGROUND_ORIGIN.BORDER_BOX;\n};\n\nvar parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {\n  switch (backgroundRepeat.trim()) {\n    case \'no-repeat\':\n      return BACKGROUND_REPEAT.NO_REPEAT;\n\n    case \'repeat-x\':\n    case \'repeat no-repeat\':\n      return BACKGROUND_REPEAT.REPEAT_X;\n\n    case \'repeat-y\':\n    case \'no-repeat repeat\':\n      return BACKGROUND_REPEAT.REPEAT_Y;\n\n    case \'repeat\':\n      return BACKGROUND_REPEAT.REPEAT;\n  }\n\n  if (true) {\n    console.error("Invalid background-repeat value \\"".concat(backgroundRepeat, "\\""));\n  }\n\n  return BACKGROUND_REPEAT.REPEAT;\n};\n\nvar parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {\n  var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {\n    if (backgroundImage.method === \'url\') {\n      var key = resourceLoader.loadImage(backgroundImage.args[0]);\n      backgroundImage.args = key ? [key] : [];\n    }\n\n    return backgroundImage;\n  });\n  var positions = style.backgroundPosition.split(\',\');\n  var repeats = style.backgroundRepeat.split(\',\');\n  var sizes = style.backgroundSize.split(\',\');\n  return sources.map(function (source, index) {\n    var size = (sizes[index] || AUTO).trim().split(\' \').map(parseBackgroundSize);\n    var position = (positions[index] || AUTO).trim().split(\' \').map(parseBackgoundPosition);\n    return {\n      source: source,\n      repeat: parseBackgroundRepeat(typeof repeats[index] === \'string\' ? repeats[index] : repeats[0]),\n      size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],\n      position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]\n    };\n  });\n};\n\nvar parseBackgroundSize = function parseBackgroundSize(size) {\n  return size === \'auto\' ? AUTO_SIZE : new BackgroundSize(size);\n};\n\nvar parseBackgoundPosition = function parseBackgoundPosition(position) {\n  switch (position) {\n    case \'bottom\':\n    case \'right\':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__["default"](\'100%\');\n\n    case \'left\':\n    case \'top\':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__["default"](\'0%\');\n\n    case \'auto\':\n      return new _Length__WEBPACK_IMPORTED_MODULE_1__["default"](\'0\');\n  }\n\n  return new _Length__WEBPACK_IMPORTED_MODULE_1__["default"](position);\n};\n\nvar parseBackgroundImage = function parseBackgroundImage(image) {\n  var whitespace = /^\\s$/;\n  var results = [];\n  var args = [];\n  var method = \'\';\n  var quote = null;\n  var definition = \'\';\n  var mode = 0;\n  var numParen = 0;\n\n  var appendResult = function appendResult() {\n    var prefix = \'\';\n\n    if (method) {\n      if (definition.substr(0, 1) === \'"\') {\n        definition = definition.substr(1, definition.length - 2);\n      }\n\n      if (definition) {\n        args.push(definition.trim());\n      }\n\n      var prefix_i = method.indexOf(\'-\', 1) + 1;\n\n      if (method.substr(0, 1) === \'-\' && prefix_i > 0) {\n        prefix = method.substr(0, prefix_i).toLowerCase();\n        method = method.substr(prefix_i);\n      }\n\n      method = method.toLowerCase();\n\n      if (method !== \'none\') {\n        results.push({\n          prefix: prefix,\n          method: method,\n          args: args\n        });\n      }\n    }\n\n    args = [];\n    method = definition = \'\';\n  };\n\n  image.split(\'\').forEach(function (c) {\n    if (mode === 0 && whitespace.test(c)) {\n      return;\n    }\n\n    switch (c) {\n      case \'"\':\n        if (!quote) {\n          quote = c;\n        } else if (quote === c) {\n          quote = null;\n        }\n\n        break;\n\n      case \'(\':\n        if (quote) {\n          break;\n        } else if (mode === 0) {\n          mode = 1;\n          return;\n        } else {\n          numParen++;\n        }\n\n        break;\n\n      case \')\':\n        if (quote) {\n          break;\n        } else if (mode === 1) {\n          if (numParen === 0) {\n            mode = 0;\n            appendResult();\n            return;\n          } else {\n            numParen--;\n          }\n        }\n\n        break;\n\n      case \',\':\n        if (quote) {\n          break;\n        } else if (mode === 0) {\n          appendResult();\n          return;\n        } else if (mode === 1) {\n          if (numParen === 0 && !method.match(/^url$/i)) {\n            args.push(definition.trim());\n            definition = \'\';\n            return;\n          }\n        }\n\n        break;\n    }\n\n    if (mode === 0) {\n      method += c;\n    } else {\n      definition += c;\n    }\n  });\n  appendResult();\n  return results;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/background.js?'
                );
              },
            './src/parsing/border.js':
              /*!*******************************!*\
  !*** ./src/parsing/border.js ***!
  \*******************************/
              /*! exports provided: BORDER_STYLE, BORDER_SIDES, parseBorder */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLE", function() { return BORDER_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_SIDES", function() { return BORDER_SIDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBorder", function() { return parseBorder; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ "./src/Color.js");\n\n\n\nvar BORDER_STYLE = {\n  NONE: 0,\n  SOLID: 1\n};\nvar BORDER_SIDES = {\n  TOP: 0,\n  RIGHT: 1,\n  BOTTOM: 2,\n  LEFT: 3\n};\nvar SIDES = Object.keys(BORDER_SIDES).map(function (s) {\n  return s.toLowerCase();\n});\n\nvar parseBorderStyle = function parseBorderStyle(style) {\n  switch (style) {\n    case \'none\':\n      return BORDER_STYLE.NONE;\n  }\n\n  return BORDER_STYLE.SOLID;\n};\n\nvar parseBorder = function parseBorder(style) {\n  return SIDES.map(function (side) {\n    var borderColor = new _Color__WEBPACK_IMPORTED_MODULE_0__["default"](style.getPropertyValue("border-".concat(side, "-color")));\n    var borderStyle = parseBorderStyle(style.getPropertyValue("border-".concat(side, "-style")));\n    var borderWidth = parseFloat(style.getPropertyValue("border-".concat(side, "-width")));\n    return {\n      borderColor: borderColor,\n      borderStyle: borderStyle,\n      borderWidth: isNaN(borderWidth) ? 0 : borderWidth\n    };\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/border.js?'
                );
              },
            './src/parsing/borderRadius.js':
              /*!*************************************!*\
  !*** ./src/parsing/borderRadius.js ***!
  \*************************************/
              /*! exports provided: parseBorderRadius */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBorderRadius", function() { return parseBorderRadius; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ "./src/Length.js");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar SIDES = [\'top-left\', \'top-right\', \'bottom-right\', \'bottom-left\'];\nvar parseBorderRadius = function parseBorderRadius(style) {\n  return SIDES.map(function (side) {\n    var value = style.getPropertyValue("border-".concat(side, "-radius"));\n\n    var _value$split$map = value.split(\' \').map(_Length__WEBPACK_IMPORTED_MODULE_0__["default"].create),\n        _value$split$map2 = _slicedToArray(_value$split$map, 2),\n        horizontal = _value$split$map2[0],\n        vertical = _value$split$map2[1];\n\n    return typeof vertical === \'undefined\' ? [horizontal, horizontal] : [horizontal, vertical];\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/borderRadius.js?'
                );
              },
            './src/parsing/display.js':
              /*!********************************!*\
  !*** ./src/parsing/display.js ***!
  \********************************/
              /*! exports provided: DISPLAY, parseDisplay */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISPLAY\", function() { return DISPLAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDisplay\", function() { return parseDisplay; });\n\n\nvar DISPLAY = {\n  NONE: 1 << 0,\n  BLOCK: 1 << 1,\n  INLINE: 1 << 2,\n  RUN_IN: 1 << 3,\n  FLOW: 1 << 4,\n  FLOW_ROOT: 1 << 5,\n  TABLE: 1 << 6,\n  FLEX: 1 << 7,\n  GRID: 1 << 8,\n  RUBY: 1 << 9,\n  SUBGRID: 1 << 10,\n  LIST_ITEM: 1 << 11,\n  TABLE_ROW_GROUP: 1 << 12,\n  TABLE_HEADER_GROUP: 1 << 13,\n  TABLE_FOOTER_GROUP: 1 << 14,\n  TABLE_ROW: 1 << 15,\n  TABLE_CELL: 1 << 16,\n  TABLE_COLUMN_GROUP: 1 << 17,\n  TABLE_COLUMN: 1 << 18,\n  TABLE_CAPTION: 1 << 19,\n  RUBY_BASE: 1 << 20,\n  RUBY_TEXT: 1 << 21,\n  RUBY_BASE_CONTAINER: 1 << 22,\n  RUBY_TEXT_CONTAINER: 1 << 23,\n  CONTENTS: 1 << 24,\n  INLINE_BLOCK: 1 << 25,\n  INLINE_LIST_ITEM: 1 << 26,\n  INLINE_TABLE: 1 << 27,\n  INLINE_FLEX: 1 << 28,\n  INLINE_GRID: 1 << 29\n};\n\nvar parseDisplayValue = function parseDisplayValue(display) {\n  switch (display) {\n    case 'block':\n      return DISPLAY.BLOCK;\n\n    case 'inline':\n      return DISPLAY.INLINE;\n\n    case 'run-in':\n      return DISPLAY.RUN_IN;\n\n    case 'flow':\n      return DISPLAY.FLOW;\n\n    case 'flow-root':\n      return DISPLAY.FLOW_ROOT;\n\n    case 'table':\n      return DISPLAY.TABLE;\n\n    case 'flex':\n      return DISPLAY.FLEX;\n\n    case 'grid':\n      return DISPLAY.GRID;\n\n    case 'ruby':\n      return DISPLAY.RUBY;\n\n    case 'subgrid':\n      return DISPLAY.SUBGRID;\n\n    case 'list-item':\n      return DISPLAY.LIST_ITEM;\n\n    case 'table-row-group':\n      return DISPLAY.TABLE_ROW_GROUP;\n\n    case 'table-header-group':\n      return DISPLAY.TABLE_HEADER_GROUP;\n\n    case 'table-footer-group':\n      return DISPLAY.TABLE_FOOTER_GROUP;\n\n    case 'table-row':\n      return DISPLAY.TABLE_ROW;\n\n    case 'table-cell':\n      return DISPLAY.TABLE_CELL;\n\n    case 'table-column-group':\n      return DISPLAY.TABLE_COLUMN_GROUP;\n\n    case 'table-column':\n      return DISPLAY.TABLE_COLUMN;\n\n    case 'table-caption':\n      return DISPLAY.TABLE_CAPTION;\n\n    case 'ruby-base':\n      return DISPLAY.RUBY_BASE;\n\n    case 'ruby-text':\n      return DISPLAY.RUBY_TEXT;\n\n    case 'ruby-base-container':\n      return DISPLAY.RUBY_BASE_CONTAINER;\n\n    case 'ruby-text-container':\n      return DISPLAY.RUBY_TEXT_CONTAINER;\n\n    case 'contents':\n      return DISPLAY.CONTENTS;\n\n    case 'inline-block':\n      return DISPLAY.INLINE_BLOCK;\n\n    case 'inline-list-item':\n      return DISPLAY.INLINE_LIST_ITEM;\n\n    case 'inline-table':\n      return DISPLAY.INLINE_TABLE;\n\n    case 'inline-flex':\n      return DISPLAY.INLINE_FLEX;\n\n    case 'inline-grid':\n      return DISPLAY.INLINE_GRID;\n  }\n\n  return DISPLAY.NONE;\n};\n\nvar setDisplayBit = function setDisplayBit(bit, display) {\n  return bit | parseDisplayValue(display);\n};\n\nvar parseDisplay = function parseDisplay(display) {\n  return display.split(' ').reduce(setDisplayBit, 0);\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/display.js?"
                );
              },
            './src/parsing/float.js':
              /*!******************************!*\
  !*** ./src/parsing/float.js ***!
  \******************************/
              /*! exports provided: FLOAT, parseCSSFloat */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLOAT\", function() { return FLOAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCSSFloat\", function() { return parseCSSFloat; });\n\n\nvar FLOAT = {\n  NONE: 0,\n  LEFT: 1,\n  RIGHT: 2,\n  INLINE_START: 3,\n  INLINE_END: 4\n};\nvar parseCSSFloat = function parseCSSFloat(float) {\n  switch (float) {\n    case 'left':\n      return FLOAT.LEFT;\n\n    case 'right':\n      return FLOAT.RIGHT;\n\n    case 'inline-start':\n      return FLOAT.INLINE_START;\n\n    case 'inline-end':\n      return FLOAT.INLINE_END;\n  }\n\n  return FLOAT.NONE;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/float.js?"
                );
              },
            './src/parsing/font.js':
              /*!*****************************!*\
  !*** ./src/parsing/font.js ***!
  \*****************************/
              /*! exports provided: parseFont */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseFont\", function() { return parseFont; });\n\n\nvar parseFontWeight = function parseFontWeight(weight) {\n  switch (weight) {\n    case 'normal':\n      return 400;\n\n    case 'bold':\n      return 700;\n  }\n\n  var value = parseInt(weight, 10);\n  return isNaN(value) ? 400 : value;\n};\n\nvar parseFont = function parseFont(style) {\n  var fontFamily = style.fontFamily;\n  var fontSize = style.fontSize;\n  var fontStyle = style.fontStyle;\n  var fontVariant = style.fontVariant;\n  var fontWeight = parseFontWeight(style.fontWeight);\n  return {\n    fontFamily: fontFamily,\n    fontSize: fontSize,\n    fontStyle: fontStyle,\n    fontVariant: fontVariant,\n    fontWeight: fontWeight\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/font.js?"
                );
              },
            './src/parsing/letterSpacing.js':
              /*!**************************************!*\
  !*** ./src/parsing/letterSpacing.js ***!
  \**************************************/
              /*! exports provided: parseLetterSpacing */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseLetterSpacing", function() { return parseLetterSpacing; });\n\n\nvar parseLetterSpacing = function parseLetterSpacing(letterSpacing) {\n  if (letterSpacing === \'normal\') {\n    return 0;\n  }\n\n  var value = parseFloat(letterSpacing);\n  return isNaN(value) ? 0 : value;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/letterSpacing.js?'
                );
              },
            './src/parsing/lineBreak.js':
              /*!**********************************!*\
  !*** ./src/parsing/lineBreak.js ***!
  \**********************************/
              /*! exports provided: LINE_BREAK, parseLineBreak */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LINE_BREAK\", function() { return LINE_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseLineBreak\", function() { return parseLineBreak; });\n\n\nvar LINE_BREAK = {\n  NORMAL: 'normal',\n  STRICT: 'strict'\n};\nvar parseLineBreak = function parseLineBreak(wordBreak) {\n  switch (wordBreak) {\n    case 'strict':\n      return LINE_BREAK.STRICT;\n\n    case 'normal':\n    default:\n      return LINE_BREAK.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/lineBreak.js?"
                );
              },
            './src/parsing/listStyle.js':
              /*!**********************************!*\
  !*** ./src/parsing/listStyle.js ***!
  \**********************************/
              /*! exports provided: LIST_STYLE_POSITION, LIST_STYLE_TYPE, parseListStyleType, parseListStyle */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_STYLE_POSITION\", function() { return LIST_STYLE_POSITION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_STYLE_TYPE\", function() { return LIST_STYLE_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListStyleType\", function() { return parseListStyleType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListStyle\", function() { return parseListStyle; });\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/parsing/background.js\");\n\n\n\nvar LIST_STYLE_POSITION = {\n  INSIDE: 0,\n  OUTSIDE: 1\n};\nvar LIST_STYLE_TYPE = {\n  NONE: -1,\n  DISC: 0,\n  CIRCLE: 1,\n  SQUARE: 2,\n  DECIMAL: 3,\n  CJK_DECIMAL: 4,\n  DECIMAL_LEADING_ZERO: 5,\n  LOWER_ROMAN: 6,\n  UPPER_ROMAN: 7,\n  LOWER_GREEK: 8,\n  LOWER_ALPHA: 9,\n  UPPER_ALPHA: 10,\n  ARABIC_INDIC: 11,\n  ARMENIAN: 12,\n  BENGALI: 13,\n  CAMBODIAN: 14,\n  CJK_EARTHLY_BRANCH: 15,\n  CJK_HEAVENLY_STEM: 16,\n  CJK_IDEOGRAPHIC: 17,\n  DEVANAGARI: 18,\n  ETHIOPIC_NUMERIC: 19,\n  GEORGIAN: 20,\n  GUJARATI: 21,\n  GURMUKHI: 22,\n  HEBREW: 22,\n  HIRAGANA: 23,\n  HIRAGANA_IROHA: 24,\n  JAPANESE_FORMAL: 25,\n  JAPANESE_INFORMAL: 26,\n  KANNADA: 27,\n  KATAKANA: 28,\n  KATAKANA_IROHA: 29,\n  KHMER: 30,\n  KOREAN_HANGUL_FORMAL: 31,\n  KOREAN_HANJA_FORMAL: 32,\n  KOREAN_HANJA_INFORMAL: 33,\n  LAO: 34,\n  LOWER_ARMENIAN: 35,\n  MALAYALAM: 36,\n  MONGOLIAN: 37,\n  MYANMAR: 38,\n  ORIYA: 39,\n  PERSIAN: 40,\n  SIMP_CHINESE_FORMAL: 41,\n  SIMP_CHINESE_INFORMAL: 42,\n  TAMIL: 43,\n  TELUGU: 44,\n  THAI: 45,\n  TIBETAN: 46,\n  TRAD_CHINESE_FORMAL: 47,\n  TRAD_CHINESE_INFORMAL: 48,\n  UPPER_ARMENIAN: 49,\n  DISCLOSURE_OPEN: 50,\n  DISCLOSURE_CLOSED: 51\n};\nvar parseListStyleType = function parseListStyleType(type) {\n  switch (type) {\n    case 'disc':\n      return LIST_STYLE_TYPE.DISC;\n\n    case 'circle':\n      return LIST_STYLE_TYPE.CIRCLE;\n\n    case 'square':\n      return LIST_STYLE_TYPE.SQUARE;\n\n    case 'decimal':\n      return LIST_STYLE_TYPE.DECIMAL;\n\n    case 'cjk-decimal':\n      return LIST_STYLE_TYPE.CJK_DECIMAL;\n\n    case 'decimal-leading-zero':\n      return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;\n\n    case 'lower-roman':\n      return LIST_STYLE_TYPE.LOWER_ROMAN;\n\n    case 'upper-roman':\n      return LIST_STYLE_TYPE.UPPER_ROMAN;\n\n    case 'lower-greek':\n      return LIST_STYLE_TYPE.LOWER_GREEK;\n\n    case 'lower-alpha':\n      return LIST_STYLE_TYPE.LOWER_ALPHA;\n\n    case 'upper-alpha':\n      return LIST_STYLE_TYPE.UPPER_ALPHA;\n\n    case 'arabic-indic':\n      return LIST_STYLE_TYPE.ARABIC_INDIC;\n\n    case 'armenian':\n      return LIST_STYLE_TYPE.ARMENIAN;\n\n    case 'bengali':\n      return LIST_STYLE_TYPE.BENGALI;\n\n    case 'cambodian':\n      return LIST_STYLE_TYPE.CAMBODIAN;\n\n    case 'cjk-earthly-branch':\n      return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;\n\n    case 'cjk-heavenly-stem':\n      return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;\n\n    case 'cjk-ideographic':\n      return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;\n\n    case 'devanagari':\n      return LIST_STYLE_TYPE.DEVANAGARI;\n\n    case 'ethiopic-numeric':\n      return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;\n\n    case 'georgian':\n      return LIST_STYLE_TYPE.GEORGIAN;\n\n    case 'gujarati':\n      return LIST_STYLE_TYPE.GUJARATI;\n\n    case 'gurmukhi':\n      return LIST_STYLE_TYPE.GURMUKHI;\n\n    case 'hebrew':\n      return LIST_STYLE_TYPE.HEBREW;\n\n    case 'hiragana':\n      return LIST_STYLE_TYPE.HIRAGANA;\n\n    case 'hiragana-iroha':\n      return LIST_STYLE_TYPE.HIRAGANA_IROHA;\n\n    case 'japanese-formal':\n      return LIST_STYLE_TYPE.JAPANESE_FORMAL;\n\n    case 'japanese-informal':\n      return LIST_STYLE_TYPE.JAPANESE_INFORMAL;\n\n    case 'kannada':\n      return LIST_STYLE_TYPE.KANNADA;\n\n    case 'katakana':\n      return LIST_STYLE_TYPE.KATAKANA;\n\n    case 'katakana-iroha':\n      return LIST_STYLE_TYPE.KATAKANA_IROHA;\n\n    case 'khmer':\n      return LIST_STYLE_TYPE.KHMER;\n\n    case 'korean-hangul-formal':\n      return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;\n\n    case 'korean-hanja-formal':\n      return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;\n\n    case 'korean-hanja-informal':\n      return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;\n\n    case 'lao':\n      return LIST_STYLE_TYPE.LAO;\n\n    case 'lower-armenian':\n      return LIST_STYLE_TYPE.LOWER_ARMENIAN;\n\n    case 'malayalam':\n      return LIST_STYLE_TYPE.MALAYALAM;\n\n    case 'mongolian':\n      return LIST_STYLE_TYPE.MONGOLIAN;\n\n    case 'myanmar':\n      return LIST_STYLE_TYPE.MYANMAR;\n\n    case 'oriya':\n      return LIST_STYLE_TYPE.ORIYA;\n\n    case 'persian':\n      return LIST_STYLE_TYPE.PERSIAN;\n\n    case 'simp-chinese-formal':\n      return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;\n\n    case 'simp-chinese-informal':\n      return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;\n\n    case 'tamil':\n      return LIST_STYLE_TYPE.TAMIL;\n\n    case 'telugu':\n      return LIST_STYLE_TYPE.TELUGU;\n\n    case 'thai':\n      return LIST_STYLE_TYPE.THAI;\n\n    case 'tibetan':\n      return LIST_STYLE_TYPE.TIBETAN;\n\n    case 'trad-chinese-formal':\n      return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;\n\n    case 'trad-chinese-informal':\n      return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;\n\n    case 'upper-armenian':\n      return LIST_STYLE_TYPE.UPPER_ARMENIAN;\n\n    case 'disclosure-open':\n      return LIST_STYLE_TYPE.DISCLOSURE_OPEN;\n\n    case 'disclosure-closed':\n      return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;\n\n    case 'none':\n    default:\n      return LIST_STYLE_TYPE.NONE;\n  }\n};\nvar parseListStyle = function parseListStyle(style) {\n  var listStyleImage = Object(_background__WEBPACK_IMPORTED_MODULE_0__[\"parseBackgroundImage\"])(style.getPropertyValue('list-style-image'));\n  return {\n    listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),\n    listStyleImage: listStyleImage.length ? listStyleImage[0] : null,\n    listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))\n  };\n};\n\nvar parseListStylePosition = function parseListStylePosition(position) {\n  switch (position) {\n    case 'inside':\n      return LIST_STYLE_POSITION.INSIDE;\n\n    case 'outside':\n    default:\n      return LIST_STYLE_POSITION.OUTSIDE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/listStyle.js?"
                );
              },
            './src/parsing/margin.js':
              /*!*******************************!*\
  !*** ./src/parsing/margin.js ***!
  \*******************************/
              /*! exports provided: parseMargin */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMargin", function() { return parseMargin; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ "./src/Length.js");\n\n\n\nvar SIDES = [\'top\', \'right\', \'bottom\', \'left\'];\nvar parseMargin = function parseMargin(style) {\n  return SIDES.map(function (side) {\n    return new _Length__WEBPACK_IMPORTED_MODULE_0__["default"](style.getPropertyValue("margin-".concat(side)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/margin.js?'
                );
              },
            './src/parsing/overflow.js':
              /*!*********************************!*\
  !*** ./src/parsing/overflow.js ***!
  \*********************************/
              /*! exports provided: OVERFLOW, parseOverflow */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OVERFLOW\", function() { return OVERFLOW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseOverflow\", function() { return parseOverflow; });\n\n\nvar OVERFLOW = {\n  VISIBLE: 0,\n  HIDDEN: 1,\n  SCROLL: 2,\n  AUTO: 3\n};\nvar parseOverflow = function parseOverflow(overflow) {\n  switch (overflow) {\n    case 'hidden':\n      return OVERFLOW.HIDDEN;\n\n    case 'scroll':\n      return OVERFLOW.SCROLL;\n\n    case 'auto':\n      return OVERFLOW.AUTO;\n\n    case 'visible':\n    default:\n      return OVERFLOW.VISIBLE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/overflow.js?"
                );
              },
            './src/parsing/overflowWrap.js':
              /*!*************************************!*\
  !*** ./src/parsing/overflowWrap.js ***!
  \*************************************/
              /*! exports provided: OVERFLOW_WRAP, parseOverflowWrap */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERFLOW_WRAP", function() { return OVERFLOW_WRAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOverflowWrap", function() { return parseOverflowWrap; });\n\n\nvar OVERFLOW_WRAP = {\n  NORMAL: 0,\n  BREAK_WORD: 1\n};\nvar parseOverflowWrap = function parseOverflowWrap(overflow) {\n  switch (overflow) {\n    case \'break-word\':\n      return OVERFLOW_WRAP.BREAK_WORD;\n\n    case \'normal\':\n    default:\n      return OVERFLOW_WRAP.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/overflowWrap.js?'
                );
              },
            './src/parsing/padding.js':
              /*!********************************!*\
  !*** ./src/parsing/padding.js ***!
  \********************************/
              /*! exports provided: PADDING_SIDES, parsePadding */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDING_SIDES", function() { return PADDING_SIDES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePadding", function() { return parsePadding; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ "./src/Length.js");\n\n\n\nvar PADDING_SIDES = {\n  TOP: 0,\n  RIGHT: 1,\n  BOTTOM: 2,\n  LEFT: 3\n};\nvar SIDES = [\'top\', \'right\', \'bottom\', \'left\'];\nvar parsePadding = function parsePadding(style) {\n  return SIDES.map(function (side) {\n    return new _Length__WEBPACK_IMPORTED_MODULE_0__["default"](style.getPropertyValue("padding-".concat(side)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/padding.js?'
                );
              },
            './src/parsing/position.js':
              /*!*********************************!*\
  !*** ./src/parsing/position.js ***!
  \*********************************/
              /*! exports provided: POSITION, parsePosition */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSITION\", function() { return POSITION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePosition\", function() { return parsePosition; });\n\n\nvar POSITION = {\n  STATIC: 0,\n  RELATIVE: 1,\n  ABSOLUTE: 2,\n  FIXED: 3,\n  STICKY: 4\n};\nvar parsePosition = function parsePosition(position) {\n  switch (position) {\n    case 'relative':\n      return POSITION.RELATIVE;\n\n    case 'absolute':\n      return POSITION.ABSOLUTE;\n\n    case 'fixed':\n      return POSITION.FIXED;\n\n    case 'sticky':\n      return POSITION.STICKY;\n  }\n\n  return POSITION.STATIC;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/position.js?"
                );
              },
            './src/parsing/textDecoration.js':
              /*!***************************************!*\
  !*** ./src/parsing/textDecoration.js ***!
  \***************************************/
              /*! exports provided: TEXT_DECORATION_STYLE, TEXT_DECORATION, TEXT_DECORATION_LINE, parseTextDecoration */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION_STYLE\", function() { return TEXT_DECORATION_STYLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION\", function() { return TEXT_DECORATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_DECORATION_LINE\", function() { return TEXT_DECORATION_LINE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextDecoration\", function() { return parseTextDecoration; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar TEXT_DECORATION_STYLE = {\n  SOLID: 0,\n  DOUBLE: 1,\n  DOTTED: 2,\n  DASHED: 3,\n  WAVY: 4\n};\nvar TEXT_DECORATION = {\n  NONE: null\n};\nvar TEXT_DECORATION_LINE = {\n  UNDERLINE: 1,\n  OVERLINE: 2,\n  LINE_THROUGH: 3,\n  BLINK: 4\n};\n\nvar parseLine = function parseLine(line) {\n  switch (line) {\n    case 'underline':\n      return TEXT_DECORATION_LINE.UNDERLINE;\n\n    case 'overline':\n      return TEXT_DECORATION_LINE.OVERLINE;\n\n    case 'line-through':\n      return TEXT_DECORATION_LINE.LINE_THROUGH;\n  }\n\n  return TEXT_DECORATION_LINE.BLINK;\n};\n\nvar parseTextDecorationLine = function parseTextDecorationLine(line) {\n  if (line === 'none') {\n    return null;\n  }\n\n  return line.split(' ').map(parseLine);\n};\n\nvar parseTextDecorationStyle = function parseTextDecorationStyle(style) {\n  switch (style) {\n    case 'double':\n      return TEXT_DECORATION_STYLE.DOUBLE;\n\n    case 'dotted':\n      return TEXT_DECORATION_STYLE.DOTTED;\n\n    case 'dashed':\n      return TEXT_DECORATION_STYLE.DASHED;\n\n    case 'wavy':\n      return TEXT_DECORATION_STYLE.WAVY;\n  }\n\n  return TEXT_DECORATION_STYLE.SOLID;\n};\n\nvar parseTextDecoration = function parseTextDecoration(style) {\n  var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);\n\n  if (textDecorationLine === null) {\n    return TEXT_DECORATION.NONE;\n  }\n\n  var textDecorationColor = style.textDecorationColor ? new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](style.textDecorationColor) : null;\n  var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);\n  return {\n    textDecorationLine: textDecorationLine,\n    textDecorationColor: textDecorationColor,\n    textDecorationStyle: textDecorationStyle\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textDecoration.js?"
                );
              },
            './src/parsing/textShadow.js':
              /*!***********************************!*\
  !*** ./src/parsing/textShadow.js ***!
  \***********************************/
              /*! exports provided: parseTextShadow */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextShadow\", function() { return parseTextShadow; });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color */ \"./src/Color.js\");\n\n\n\nvar NUMBER = /^([+-]|\\d|\\.)$/i;\nvar parseTextShadow = function parseTextShadow(textShadow) {\n  if (textShadow === 'none' || typeof textShadow !== 'string') {\n    return null;\n  }\n\n  var currentValue = '';\n  var isLength = false;\n  var values = [];\n  var shadows = [];\n  var numParens = 0;\n  var color = null;\n\n  var appendValue = function appendValue() {\n    if (currentValue.length) {\n      if (isLength) {\n        values.push(parseFloat(currentValue));\n      } else {\n        color = new _Color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](currentValue);\n      }\n    }\n\n    isLength = false;\n    currentValue = '';\n  };\n\n  var appendShadow = function appendShadow() {\n    if (values.length && color !== null) {\n      shadows.push({\n        color: color,\n        offsetX: values[0] || 0,\n        offsetY: values[1] || 0,\n        blur: values[2] || 0\n      });\n    }\n\n    values.splice(0, values.length);\n    color = null;\n  };\n\n  for (var i = 0; i < textShadow.length; i++) {\n    var c = textShadow[i];\n\n    switch (c) {\n      case '(':\n        currentValue += c;\n        numParens++;\n        break;\n\n      case ')':\n        currentValue += c;\n        numParens--;\n        break;\n\n      case ',':\n        if (numParens === 0) {\n          appendValue();\n          appendShadow();\n        } else {\n          currentValue += c;\n        }\n\n        break;\n\n      case ' ':\n        if (numParens === 0) {\n          appendValue();\n        } else {\n          currentValue += c;\n        }\n\n        break;\n\n      default:\n        if (currentValue.length === 0 && NUMBER.test(c)) {\n          isLength = true;\n        }\n\n        currentValue += c;\n    }\n  }\n\n  appendValue();\n  appendShadow();\n\n  if (shadows.length === 0) {\n    return null;\n  }\n\n  return shadows;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textShadow.js?"
                );
              },
            './src/parsing/textTransform.js':
              /*!**************************************!*\
  !*** ./src/parsing/textTransform.js ***!
  \**************************************/
              /*! exports provided: TEXT_TRANSFORM, parseTextTransform */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_TRANSFORM\", function() { return TEXT_TRANSFORM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTextTransform\", function() { return parseTextTransform; });\n\n\nvar TEXT_TRANSFORM = {\n  NONE: 0,\n  LOWERCASE: 1,\n  UPPERCASE: 2,\n  CAPITALIZE: 3\n};\nvar parseTextTransform = function parseTextTransform(textTransform) {\n  switch (textTransform) {\n    case 'uppercase':\n      return TEXT_TRANSFORM.UPPERCASE;\n\n    case 'lowercase':\n      return TEXT_TRANSFORM.LOWERCASE;\n\n    case 'capitalize':\n      return TEXT_TRANSFORM.CAPITALIZE;\n  }\n\n  return TEXT_TRANSFORM.NONE;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/textTransform.js?"
                );
              },
            './src/parsing/transform.js':
              /*!**********************************!*\
  !*** ./src/parsing/transform.js ***!
  \**********************************/
              /*! exports provided: parseTransform */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTransform\", function() { return parseTransform; });\n/* harmony import */ var _Length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Length */ \"./src/Length.js\");\n\n\n\n\nvar toFloat = function toFloat(s) {\n  return parseFloat(s.trim());\n};\n\nvar MATRIX = /(matrix|matrix3d)\\((.+)\\)/;\nvar parseTransform = function parseTransform(style) {\n  var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform || // $FlowFixMe\n  style.msTransform || // $FlowFixMe\n  style.oTransform);\n\n  if (transform === null) {\n    return null;\n  }\n\n  return {\n    transform: transform,\n    transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin || // $FlowFixMe\n    style.msTransformOrigin || // $FlowFixMe\n    style.oTransformOrigin)\n  };\n}; // $FlowFixMe\n\nvar parseTransformOrigin = function parseTransformOrigin(origin) {\n  if (typeof origin !== 'string') {\n    var v = new _Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('0');\n    return [v, v];\n  }\n\n  var values = origin.split(' ').map(_Length__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create);\n  return [values[0], values[1]];\n}; // $FlowFixMe\n\n\nvar parseTransformMatrix = function parseTransformMatrix(transform) {\n  if (transform === 'none' || typeof transform !== 'string') {\n    return null;\n  }\n\n  var match = transform.match(MATRIX);\n\n  if (match) {\n    if (match[1] === 'matrix') {\n      var matrix = match[2].split(',').map(toFloat);\n      return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];\n    } else {\n      var matrix3d = match[2].split(',').map(toFloat);\n      return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];\n    }\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/transform.js?"
                );
              },
            './src/parsing/visibility.js':
              /*!***********************************!*\
  !*** ./src/parsing/visibility.js ***!
  \***********************************/
              /*! exports provided: VISIBILITY, parseVisibility */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VISIBILITY\", function() { return VISIBILITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseVisibility\", function() { return parseVisibility; });\n\n\nvar VISIBILITY = {\n  VISIBLE: 0,\n  HIDDEN: 1,\n  COLLAPSE: 2\n};\nvar parseVisibility = function parseVisibility(visibility) {\n  switch (visibility) {\n    case 'hidden':\n      return VISIBILITY.HIDDEN;\n\n    case 'collapse':\n      return VISIBILITY.COLLAPSE;\n\n    case 'visible':\n    default:\n      return VISIBILITY.VISIBLE;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/visibility.js?"
                );
              },
            './src/parsing/word-break.js':
              /*!***********************************!*\
  !*** ./src/parsing/word-break.js ***!
  \***********************************/
              /*! exports provided: WORD_BREAK, parseWordBreak */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WORD_BREAK\", function() { return WORD_BREAK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseWordBreak\", function() { return parseWordBreak; });\n\n\nvar WORD_BREAK = {\n  NORMAL: 'normal',\n  BREAK_ALL: 'break-all',\n  KEEP_ALL: 'keep-all'\n};\nvar parseWordBreak = function parseWordBreak(wordBreak) {\n  switch (wordBreak) {\n    case 'break-all':\n      return WORD_BREAK.BREAK_ALL;\n\n    case 'keep-all':\n      return WORD_BREAK.KEEP_ALL;\n\n    case 'normal':\n    default:\n      return WORD_BREAK.NORMAL;\n  }\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/word-break.js?"
                );
              },
            './src/parsing/zIndex.js':
              /*!*******************************!*\
  !*** ./src/parsing/zIndex.js ***!
  \*******************************/
              /*! exports provided: parseZIndex */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseZIndex", function() { return parseZIndex; });\n\n\nvar parseZIndex = function parseZIndex(zIndex) {\n  var auto = zIndex === \'auto\';\n  return {\n    auto: auto,\n    order: auto ? 0 : parseInt(zIndex, 10)\n  };\n};\n\n//# sourceURL=webpack://html2canvas/./src/parsing/zIndex.js?'
                );
              },
            './src/renderer/CanvasRenderer.js':
              /*!****************************************!*\
  !*** ./src/renderer/CanvasRenderer.js ***!
  \****************************************/
              /*! exports provided: default */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasRenderer; });\n/* harmony import */ var _drawing_Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawing/Path */ "./src/drawing/Path.js");\n/* harmony import */ var _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parsing/textDecoration */ "./src/parsing/textDecoration.js");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar addColorStops = function addColorStops(gradient, canvasGradient) {\n  var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {\n    return colorStop.stop;\n  }));\n  var f = 1 / Math.max(1, maxStop);\n  gradient.colorStops.forEach(function (colorStop) {\n    canvasGradient.addColorStop(Math.floor(Math.max(0, f * colorStop.stop)), colorStop.color.toString());\n  });\n};\n\nvar CanvasRenderer =\n/*#__PURE__*/\nfunction () {\n  function CanvasRenderer(canvas) {\n    _classCallCheck(this, CanvasRenderer);\n\n    this.canvas = canvas ? canvas : document.createElement(\'canvas\');\n  }\n\n  _createClass(CanvasRenderer, [{\n    key: "render",\n    value: function render(options) {\n      this.ctx = this.canvas.getContext(\'2d\');\n      this.options = options;\n      this.canvas.width = Math.floor(options.width * options.scale);\n      this.canvas.height = Math.floor(options.height * options.scale);\n      this.canvas.style.width = "".concat(options.width, "px");\n      this.canvas.style.height = "".concat(options.height, "px");\n      this.ctx.scale(this.options.scale, this.options.scale);\n      this.ctx.translate(-options.x, -options.y);\n      this.ctx.textBaseline = \'bottom\';\n      options.logger.log("Canvas renderer initialized (".concat(options.width, "x").concat(options.height, " at ").concat(options.x, ",").concat(options.y, ") with scale ").concat(this.options.scale));\n    }\n  }, {\n    key: "clip",\n    value: function clip(clipPaths, callback) {\n      var _this = this;\n\n      if (clipPaths.length) {\n        this.ctx.save();\n        clipPaths.forEach(function (path) {\n          _this.path(path);\n\n          _this.ctx.clip();\n        });\n      }\n\n      callback();\n\n      if (clipPaths.length) {\n        this.ctx.restore();\n      }\n    }\n  }, {\n    key: "drawImage",\n    value: function drawImage(image, source, destination) {\n      this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);\n    }\n  }, {\n    key: "drawShape",\n    value: function drawShape(path, color) {\n      this.path(path);\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fill();\n    }\n  }, {\n    key: "fill",\n    value: function fill(color) {\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fill();\n    }\n  }, {\n    key: "getTarget",\n    value: function getTarget() {\n      this.canvas.getContext(\'2d\').setTransform(1, 0, 0, 1, 0, 0);\n      return Promise.resolve(this.canvas);\n    }\n  }, {\n    key: "path",\n    value: function path(_path) {\n      var _this2 = this;\n\n      this.ctx.beginPath();\n\n      if (Array.isArray(_path)) {\n        _path.forEach(function (point, index) {\n          var start = point.type === _drawing_Path__WEBPACK_IMPORTED_MODULE_0__["PATH"].VECTOR ? point : point.start;\n\n          if (index === 0) {\n            _this2.ctx.moveTo(start.x, start.y);\n          } else {\n            _this2.ctx.lineTo(start.x, start.y);\n          }\n\n          if (point.type === _drawing_Path__WEBPACK_IMPORTED_MODULE_0__["PATH"].BEZIER_CURVE) {\n            _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);\n          }\n        });\n      } else {\n        this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);\n      }\n\n      this.ctx.closePath();\n    }\n  }, {\n    key: "rectangle",\n    value: function rectangle(x, y, width, height, color) {\n      this.ctx.fillStyle = color.toString();\n      this.ctx.fillRect(x, y, width, height);\n    }\n  }, {\n    key: "renderLinearGradient",\n    value: function renderLinearGradient(bounds, gradient) {\n      var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);\n      addColorStops(gradient, linearGradient);\n      this.ctx.fillStyle = linearGradient;\n      this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);\n    }\n  }, {\n    key: "renderRadialGradient",\n    value: function renderRadialGradient(bounds, gradient) {\n      var _this3 = this;\n\n      var x = bounds.left + gradient.center.x;\n      var y = bounds.top + gradient.center.y;\n      var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);\n\n      if (!radialGradient) {\n        return;\n      }\n\n      addColorStops(gradient, radialGradient);\n      this.ctx.fillStyle = radialGradient;\n\n      if (gradient.radius.x !== gradient.radius.y) {\n        // transforms for elliptical radial gradient\n        var midX = bounds.left + 0.5 * bounds.width;\n        var midY = bounds.top + 0.5 * bounds.height;\n        var f = gradient.radius.y / gradient.radius.x;\n        var invF = 1 / f;\n        this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {\n          return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);\n        });\n      } else {\n        this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);\n      }\n    }\n  }, {\n    key: "renderRepeat",\n    value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {\n      this.path(path);\n      this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), \'repeat\');\n      this.ctx.translate(offsetX, offsetY);\n      this.ctx.fill();\n      this.ctx.translate(-offsetX, -offsetY);\n    }\n  }, {\n    key: "renderTextNode",\n    value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {\n      var _this4 = this;\n\n      this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(\' \');\n      textBounds.forEach(function (text) {\n        _this4.ctx.fillStyle = color.toString();\n\n        if (textShadows && text.text.trim().length) {\n          textShadows.slice(0).reverse().forEach(function (textShadow) {\n            _this4.ctx.shadowColor = textShadow.color.toString();\n            _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;\n            _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;\n            _this4.ctx.shadowBlur = textShadow.blur;\n\n            _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);\n          });\n          _this4.ctx.shadowColor = \'\';\n          _this4.ctx.shadowOffsetX = 0;\n          _this4.ctx.shadowOffsetY = 0;\n          _this4.ctx.shadowBlur = 0;\n        } else {\n          _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);\n        }\n\n        if (textDecoration !== null) {\n          var textDecorationColor = textDecoration.textDecorationColor || color;\n          textDecoration.textDecorationLine.forEach(function (textDecorationLine) {\n            switch (textDecorationLine) {\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__["TEXT_DECORATION_LINE"].UNDERLINE:\n                // Draws a line at the baseline of the font\n                // TODO As some browsers display the line as more than 1px if the font-size is big,\n                // need to take that into account both in position and size\n                var _this4$options$fontMe = _this4.options.fontMetrics.getMetrics(font),\n                    baseline = _this4$options$fontMe.baseline;\n\n                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);\n\n                break;\n\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__["TEXT_DECORATION_LINE"].OVERLINE:\n                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);\n\n                break;\n\n              case _parsing_textDecoration__WEBPACK_IMPORTED_MODULE_1__["TEXT_DECORATION_LINE"].LINE_THROUGH:\n                // TODO try and find exact position for line-through\n                var _this4$options$fontMe2 = _this4.options.fontMetrics.getMetrics(font),\n                    middle = _this4$options$fontMe2.middle;\n\n                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);\n\n                break;\n            }\n          });\n        }\n      });\n    }\n  }, {\n    key: "resizeImage",\n    value: function resizeImage(image, size) {\n      if (image.width === size.width && image.height === size.height) {\n        return image;\n      }\n\n      var canvas = this.canvas.ownerDocument.createElement(\'canvas\');\n      canvas.width = size.width;\n      canvas.height = size.height;\n      var ctx = canvas.getContext(\'2d\');\n      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);\n      return canvas;\n    }\n  }, {\n    key: "setOpacity",\n    value: function setOpacity(opacity) {\n      this.ctx.globalAlpha = opacity;\n    }\n  }, {\n    key: "transform",\n    value: function transform(offsetX, offsetY, matrix, callback) {\n      this.ctx.save();\n      this.ctx.translate(offsetX, offsetY);\n      this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);\n      this.ctx.translate(-offsetX, -offsetY);\n      callback();\n      this.ctx.restore();\n    }\n  }]);\n\n  return CanvasRenderer;\n}();\n\n\n\n//# sourceURL=webpack://html2canvas/./src/renderer/CanvasRenderer.js?'
                );
              },
            './src/renderer/ForeignObjectRenderer.js':
              /*!***********************************************!*\
  !*** ./src/renderer/ForeignObjectRenderer.js ***!
  \***********************************************/
              /*! exports provided: default, createForeignObjectSVG, loadSerializedSVG */ function(
                module,
                __webpack_exports__,
                __webpack_require__
              ) {
                'use strict';
                eval(
                  '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForeignObjectRenderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForeignObjectSVG", function() { return createForeignObjectSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSerializedSVG", function() { return loadSerializedSVG; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ForeignObjectRenderer =\n/*#__PURE__*/\nfunction () {\n  function ForeignObjectRenderer(element) {\n    _classCallCheck(this, ForeignObjectRenderer);\n\n    this.element = element;\n  }\n\n  _createClass(ForeignObjectRenderer, [{\n    key: "render",\n    value: function render(options) {\n      var _this = this;\n\n      this.options = options;\n      this.canvas = document.createElement(\'canvas\');\n      this.ctx = this.canvas.getContext(\'2d\');\n      this.canvas.width = Math.floor(options.width) * options.scale;\n      this.canvas.height = Math.floor(options.height) * options.scale;\n      this.canvas.style.width = "".concat(options.width, "px");\n      this.canvas.style.height = "".concat(options.height, "px");\n      this.ctx.scale(options.scale, options.scale);\n      options.logger.log("ForeignObject renderer initialized (".concat(options.width, "x").concat(options.height, " at ").concat(options.x, ",").concat(options.y, ") with scale ").concat(options.scale));\n      var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);\n      return loadSerializedSVG(svg).then(function (img) {\n        if (options.backgroundColor) {\n          _this.ctx.fillStyle = options.backgroundColor.toString();\n\n          _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);\n        }\n\n        _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);\n\n        return _this.canvas;\n      });\n    }\n  }]);\n\n  return ForeignObjectRenderer;\n}();\n\n\nvar createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {\n  var xmlns = \'http://www.w3.org/2000/svg\';\n  var svg = document.createElementNS(xmlns, \'svg\');\n  var foreignObject = document.createElementNS(xmlns, \'foreignObject\');\n  svg.setAttributeNS(null, \'width\', width);\n  svg.setAttributeNS(null, \'height\', height);\n  foreignObject.setAttributeNS(null, \'width\', \'100%\');\n  foreignObject.setAttributeNS(null, \'height\', \'100%\');\n  foreignObject.setAttributeNS(null, \'x\', x);\n  foreignObject.setAttributeNS(null, \'y\', y);\n  foreignObject.setAttributeNS(null, \'externalResourcesRequired\', \'true\');\n  svg.appendChild(foreignObject);\n  foreignObject.appendChild(node);\n  return svg;\n};\nvar loadSerializedSVG = function loadSerializedSVG(svg) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.onerror = reject;\n    img.src = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(new XMLSerializer().serializeToString(svg)));\n  });\n};\n\n//# sourceURL=webpack://html2canvas/./src/renderer/ForeignObjectRenderer.js?'
                );
              }
          }).default;
        }),
        (module.exports = factory());
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'api.test',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      var t,
        r = n(116),
        a = n(117),
        o = n(118),
        i = n(119),
        s = n(13),
        c = n(14),
        _ = n(9),
        l = n(120),
        u = i.create;
      e.exports = (function e(A, n) {
        function r(e, r) {
          var i, g, d, C, p, I;
          for (e = new c(_(A, e)), t = 0; t < n.length; t++)
            (g = n[t]).processRequest && g.processRequest(e);
          for (t = 0; t < n.length; t++)
            if ((g = n[t]).createXHR) {
              i = g.createXHR(e);
              break;
            }
          for (C in ((i = i || new a()),
          (e.xhr = i),
          (d = l(
            o(function(A) {
              clearTimeout(p),
                (i.onload = i.onerror = i.onabort = i.onreadystatechange = i.ontimeout = i.onprogress = null);
              var a = (function(e, A) {
                  if (e.aborted)
                    return u('Request aborted', e, { name: 'Abort' });
                  if (e.timedOut)
                    return u('Request timeout', e, { name: 'Timeout' });
                  var n,
                    t = e.xhr;
                  switch (Math.floor(t.status / 100)) {
                    case 0:
                    case 2:
                      if (!A) return;
                      return u(A.message, e);
                    case 4:
                      if (404 === t.status && !e.errorOn404) return;
                      n = 'Client';
                      break;
                    case 5:
                      n = 'Server';
                      break;
                    default:
                      n = 'HTTP';
                  }
                  var r =
                    n +
                    ' Error: The server returned a status of ' +
                    t.status +
                    ' for the request "' +
                    e.method.toUpperCase() +
                    ' ' +
                    e.url +
                    '"';
                  return u(r, e);
                })(e, A),
                o = a || s.fromRequest(e);
              for (t = 0; t < n.length; t++)
                (g = n[t]).processResponse && g.processResponse(o);
              a && e.onerror && e.onerror(a),
                !a && e.onload && e.onload(o),
                r && r(a, a ? void 0 : o);
            })
          )),
          (I = 'onload' in i && 'onerror' in i),
          (i.onload = function() {
            d();
          }),
          (i.onerror = d),
          (i.onabort = function() {
            d();
          }),
          (i.onreadystatechange = function() {
            if (4 === i.readyState) {
              if (e.aborted) return d();
              if (!I) {
                var A;
                try {
                  A = i.status;
                } catch (n) {}
                var n = 0 === A ? new Error('Internal XHR Error') : null;
                return d(n);
              }
            }
          }),
          (i.ontimeout = function() {}),
          (i.onprogress = function() {}),
          i.open(e.method, e.url),
          e.timeout &&
            (p = setTimeout(function() {
              (e.timedOut = !0), d();
              try {
                i.abort();
              } catch (e) {}
            }, e.timeout)),
          e.headers))
            e.headers.hasOwnProperty(C) && i.setRequestHeader(C, e.headers[C]);
          return i.send(e.body), e;
        }
        (A = A || {}), (n = n || []);
        var g,
          d = ['get', 'post', 'put', 'head', 'patch', 'delete'],
          C = function(e) {
            return function(A, n) {
              return ((A = new c(A)).method = e), r(A, n);
            };
          };
        for (t = 0; t < d.length; t++) r[(g = d[t])] = C(g);
        return (
          (r.plugins = function() {
            return n;
          }),
          (r.defaults = function(t) {
            return t ? e(_(A, t), n) : A;
          }),
          (r.use = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e(A, n.concat(t));
          }),
          (r.bare = function() {
            return e();
          }),
          (r.Request = c),
          (r.Response = s),
          (r.RequestError = i),
          r
        );
      })({}, [r]);
    },
    function(e, A, n) {
      'use strict';
      e.exports = {
        processRequest: function(e) {
          e.url = e.url.replace(/[^%]+/g, function(e) {
            return encodeURI(e);
          });
        }
      };
    },
    function(e, A) {
      e.exports = window.XMLHttpRequest;
    },
    function(e, A, n) {
      'use strict';
      e.exports = function(e) {
        return function() {
          var A = Array.prototype.slice.call(arguments, 0);
          setTimeout(function() {
            return e.apply(null, A);
          }, 0);
        };
      };
    },
    function(e, A, n) {
      'use strict';
      var t = n(13),
        r = n(15),
        a = n(9);
      function o(e, A) {
        var n = new Error(e);
        for (var t in ((n.name = 'RequestError'),
        (this.name = n.name),
        (this.message = n.message),
        n.stack && (this.stack = n.stack),
        (this.toString = function() {
          return this.message;
        }),
        A))
          A.hasOwnProperty(t) && (this[t] = A[t]);
      }
      (o.prototype = a(Error.prototype)),
        (o.prototype.constructor = o),
        (o.create = function(e, A, n) {
          var a = new o(e, n);
          return t.call(a, r(A)), a;
        }),
        (e.exports = o);
    },
    function(e, A, n) {
      'use strict';
      e.exports = function(e) {
        var A,
          n = !1;
        return function() {
          return n || ((n = !0), (A = e.apply(this, arguments))), A;
        };
      };
    },
    function(e, A, n) {
      'use strict';
      var t = n(122),
        r = n(123);
      function a(e, A) {
        return A.encode ? (A.strict ? t(e) : encodeURIComponent(e)) : e;
      }
      (A.extract = function(e) {
        return e.split('?')[1] || '';
      }),
        (A.parse = function(e, A) {
          var n = (function(e) {
              var A;
              switch (e.arrayFormat) {
                case 'index':
                  return function(e, n, t) {
                    (A = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, '')),
                      A
                        ? (void 0 === t[e] && (t[e] = {}), (t[e][A[1]] = n))
                        : (t[e] = n);
                  };
                case 'bracket':
                  return function(e, n, t) {
                    (A = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, '')),
                      A
                        ? void 0 !== t[e]
                          ? (t[e] = [].concat(t[e], n))
                          : (t[e] = [n])
                        : (t[e] = n);
                  };
                default:
                  return function(e, A, n) {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], A)) : (n[e] = A);
                  };
              }
            })((A = r({ arrayFormat: 'none' }, A))),
            t = Object.create(null);
          return 'string' != typeof e
            ? t
            : (e = e.trim().replace(/^(\?|#|&)/, ''))
            ? (e.split('&').forEach(function(e) {
                var A = e.replace(/\+/g, ' ').split('='),
                  r = A.shift(),
                  a = A.length > 0 ? A.join('=') : void 0;
                (a = void 0 === a ? null : decodeURIComponent(a)),
                  n(decodeURIComponent(r), a, t);
              }),
              Object.keys(t)
                .sort()
                .reduce(function(e, A) {
                  var n = t[A];
                  return (
                    Boolean(n) && 'object' == typeof n && !Array.isArray(n)
                      ? (e[A] = (function e(A) {
                          return Array.isArray(A)
                            ? A.sort()
                            : 'object' == typeof A
                            ? e(Object.keys(A))
                                .sort(function(e, A) {
                                  return Number(e) - Number(A);
                                })
                                .map(function(e) {
                                  return A[e];
                                })
                            : A;
                        })(n))
                      : (e[A] = n),
                    e
                  );
                }, Object.create(null)))
            : t;
        }),
        (A.stringify = function(e, A) {
          var n = (function(e) {
            switch (e.arrayFormat) {
              case 'index':
                return function(A, n, t) {
                  return null === n
                    ? [a(A, e), '[', t, ']'].join('')
                    : [a(A, e), '[', a(t, e), ']=', a(n, e)].join('');
                };
              case 'bracket':
                return function(A, n) {
                  return null === n
                    ? a(A, e)
                    : [a(A, e), '[]=', a(n, e)].join('');
                };
              default:
                return function(A, n) {
                  return null === n
                    ? a(A, e)
                    : [a(A, e), '=', a(n, e)].join('');
                };
            }
          })((A = r({ encode: !0, strict: !0, arrayFormat: 'none' }, A)));
          return e
            ? Object.keys(e)
                .sort()
                .map(function(t) {
                  var r = e[t];
                  if (void 0 === r) return '';
                  if (null === r) return a(t, A);
                  if (Array.isArray(r)) {
                    var o = [];
                    return (
                      r.slice().forEach(function(e) {
                        void 0 !== e && o.push(n(t, e, o.length));
                      }),
                      o.join('&')
                    );
                  }
                  return a(t, A) + '=' + a(r, A);
                })
                .filter(function(e) {
                  return e.length > 0;
                })
                .join('&')
            : '';
        });
    },
    function(e, A, n) {
      'use strict';
      e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
          return (
            '%' +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      };
    },
    function(e, A, n) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var t =
          Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      e.exports = (function() {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var A = {}, n = 0; n < 10; n++)
            A['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(A)
              .map(function(e) {
                return A[e];
              })
              .join('')
          )
            return !1;
          var t = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(e) {
              t[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, t)).join('')
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function(e, A) {
            for (
              var n,
                o,
                i = (function(e) {
                  if (null == e)
                    throw new TypeError(
                      'Object.assign cannot be called with null or undefined'
                    );
                  return Object(e);
                })(e),
                s = 1;
              s < arguments.length;
              s++
            ) {
              for (var c in (n = Object(arguments[s])))
                r.call(n, c) && (i[c] = n[c]);
              if (t) {
                o = t(n);
                for (var _ = 0; _ < o.length; _++)
                  a.call(n, o[_]) && (i[o[_]] = n[o[_]]);
              }
            }
            return i;
          };
    },
    function(e) {
      e.exports = {
        'api.test': [
          {
            name: 'error',
            example: 'my_error',
            required: 'Optional',
            description: 'Error response to return\n'
          },
          {
            name: 'foo',
            example: 'bar',
            required: 'Optional',
            description: 'example property to return\n'
          }
        ],
        'auth.revoke': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Optional',
            description: 'Authentication token\n'
          },
          {
            name: 'test',
            example: 'true',
            required: 'Optional',
            description:
              'Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.\n'
          }
        ],
        'auth.test': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: identify)\n'
          }
        ],
        'bots.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'bot',
            example: 'B12345678',
            required: 'Optional',
            description: 'Bot user to get info on\n'
          }
        ],
        'channels.archive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to archive\n'
          }
        ],
        'channels.create': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'name',
            example: 'mychannel',
            required: 'Required',
            description: 'Name of channel to create\n'
          }
        ],
        'channels.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:history)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'channels.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:read)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to get info on\n'
          }
        ],
        'channels.invite': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to invite user to.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to invite to channel.\n'
          }
        ],
        'channels.join': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'Name of channel to join\n'
          }
        ],
        'channels.kick': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to remove user from.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to remove from channel.\n'
          }
        ],
        'channels.leave': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to leave\n'
          }
        ],
        'channels.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:read)\n'
          },
          {
            name: 'exclude_archived',
            example: '1',
            required: 'Optional, default=0',
            description: "Don't return archived channels.\n"
          }
        ],
        'channels.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'channels.rename': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to rename\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'New name for channel.\n'
          }
        ],
        'channels.setPurpose': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to set the purpose of\n'
          },
          {
            name: 'purpose',
            example: 'My Purpose',
            required: 'Required',
            description: 'The new purpose\n'
          }
        ],
        'channels.setTopic': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to set the topic of\n'
          },
          {
            name: 'topic',
            example: 'My Topic',
            required: 'Required',
            description: 'The new topic\n'
          }
        ],
        'channels.unarchive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to unarchive\n'
          }
        ],
        'chat.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:bot or chat:write:user)\n'
          },
          {
            name: 'ts',
            example: '1405894322.002768',
            required: 'Required',
            description: 'Timestamp of the message to be deleted.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel containing the message to be deleted.\n'
          },
          {
            name: 'as_user',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to delete the message as the authed user. Bot users in this context are considered authed users.\n'
          }
        ],
        'chat.meMessage': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:user)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description:
              'Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.\n'
          },
          {
            name: 'text',
            example: 'Hello world',
            required: 'Required',
            description: 'Text of the message to send.\n'
          }
        ],
        'chat.postMessage': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:bot or chat:write:user)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description:
              'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.\n'
          },
          {
            name: 'text',
            example: 'Hello world',
            required: 'Required',
            description:
              "Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you're providing only attachments instead.\n"
          },
          {
            name: 'parse',
            example: 'full',
            required: 'Optional',
            description:
              'Change how messages are treated. Defaults to none. See below.\n'
          },
          {
            name: 'link_names',
            example: '1',
            required: 'Optional',
            description: 'Find and link channel names and usernames.\n'
          },
          {
            name: 'attachments',
            example: '[{"pretext": "pre-hello", "text": "text-world"}]',
            required: 'Optional',
            description: 'Structured message attachments.\n'
          },
          {
            name: 'unfurl_links',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to enable unfurling of primarily text-based content.\n'
          },
          {
            name: 'unfurl_media',
            example: 'false',
            required: 'Optional',
            description: 'Pass false to disable unfurling of media content.\n'
          },
          {
            name: 'username',
            example: 'My Bot',
            required: 'Optional',
            description:
              "Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"
          },
          {
            name: 'as_user',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.\n'
          },
          {
            name: 'icon_url',
            example: 'http://lorempixel.com/48/48',
            required: 'Optional',
            description:
              'URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n'
          },
          {
            name: 'icon_emoji',
            example: ':chart_with_upwards_trend:',
            required: 'Optional',
            description:
              'emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n'
          }
        ],
        'chat.update': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:bot or chat:write:user)\n'
          },
          {
            name: 'ts',
            example: '1405894322.002768',
            required: 'Required',
            description: 'Timestamp of the message to be updated.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel containing the message to be updated.\n'
          },
          {
            name: 'text',
            example: 'Hello world',
            required: 'Required',
            description:
              'New text for the message, using the default formatting rules.\n'
          },
          {
            name: 'attachments',
            example: '[{"pretext": "pre-hello", "text": "text-world"}]',
            required: 'Optional',
            description: 'Structured message attachments.\n'
          },
          {
            name: 'parse',
            example: 'none',
            required: 'Optional',
            description:
              'Change how messages are treated. Defaults to client, unlike chat.postMessage. See below.\n'
          },
          {
            name: 'link_names',
            example: '1',
            required: 'Optional',
            description:
              'Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.\n'
          },
          {
            name: 'as_user',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to update the message as the authed user. Bot users in this context are considered authed users.\n'
          }
        ],
        'dnd.endDnd': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:write)\n'
          }
        ],
        'dnd.endSnooze': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:write)\n'
          }
        ],
        'dnd.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:read)\n'
          },
          {
            name: 'user',
            example: 'U1234',
            required: 'Optional',
            description: 'User to fetch status for (defaults to current user)\n'
          }
        ],
        'dnd.setSnooze': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:write)\n'
          },
          {
            name: 'num_minutes',
            example: '60',
            required: 'Required',
            description: 'Number of minutes, from now, to snooze until.\n'
          }
        ],
        'dnd.teamInfo': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:read)\n'
          },
          {
            name: 'users',
            example: 'U1234,U4567',
            required: 'Optional',
            description:
              'Comma-separated list of users to fetch Do Not Disturb status for\n'
          }
        ],
        'emoji.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: emoji:read)\n'
          }
        ],
        'files.comments.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234467890',
            required: 'Required',
            description: 'File to add a comment to.\n'
          },
          {
            name: 'comment',
            example: 'Everyone should take a moment to read this file.',
            required: 'Required',
            description: 'Text of the comment to add.\n'
          },
          {
            name: 'channel',
            example: 'C1234467890',
            required: 'Optional',
            description:
              'Channel id (encoded) of which location to associate with the new comment.\n'
          }
        ],
        'files.comments.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File to delete a comment from.\n'
          },
          {
            name: 'id',
            example: 'Fc1234567890',
            required: 'Required',
            description: 'The comment to delete.\n'
          }
        ],
        'files.comments.edit': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File containing the comment to edit.\n'
          },
          {
            name: 'id',
            example: 'Fc1234567890',
            required: 'Required',
            description: 'The comment to edit.\n'
          },
          {
            name: 'comment',
            example:
              'Everyone should take a moment to read this file, seriously.',
            required: 'Required',
            description: 'Text of the comment to edit.\n'
          }
        ],
        'files.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: ' ',
            required: 'Required',
            description: 'ID of file to delete.\n'
          }
        ],
        'files.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: files:read)\n'
          },
          {
            name: 'file',
            example: 'F2147483862',
            required: 'Required',
            description: 'Specify a file by providing its ID.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'files.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: files:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description: 'Filter files created by a single user.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Filter files appearing in a specific channel, indicated by its ID.\n'
          },
          {
            name: 'ts_from',
            example: '123456789',
            required: 'Optional, default=0',
            description:
              'Filter files created after this timestamp (inclusive).\n'
          },
          {
            name: 'ts_to',
            example: '123456789',
            required: 'Optional, default=now',
            description:
              'Filter files created before this timestamp (inclusive).\n'
          },
          {
            name: 'types',
            example: 'images',
            required: 'Optional, default=all',
            description:
              'Filter files by type:\n\n\nall - All files\nspaces - Posts\nsnippets - Snippets\nimages - Image files\ngdocs - Google docs\nzips - Zip files\npdfs - PDF files\n\n\nYou can pass multiple values in the types argument, like types=spaces,snippets.The default value is all, which does not filter the list.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'files.revokePublicURL': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File to revoke\n'
          }
        ],
        'files.sharedPublicURL': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File to share\n'
          }
        ],
        'files.upload': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: '...',
            required: 'Optional',
            description:
              'File contents via multipart/form-data. If omitting this parameter, you must submit content.\n'
          },
          {
            name: 'content',
            example: '...',
            required: 'Optional',
            description:
              'File contents via a POST variable. If omitting this parameter, you must provide a file.\n'
          },
          {
            name: 'filetype',
            example: 'php',
            required: 'Optional',
            description: 'A file type identifier.\n'
          },
          {
            name: 'filename',
            example: 'foo.txt',
            required: 'Required',
            description: 'Filename of file.\n'
          },
          {
            name: 'title',
            example: 'My File',
            required: 'Optional',
            description: 'Title of file.\n'
          },
          {
            name: 'initial_comment',
            example: 'Best!',
            required: 'Optional',
            description: 'Initial comment to add to file.\n'
          },
          {
            name: 'channels',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Comma-separated list of channel names or IDs where the file will be shared.\n'
          }
        ],
        'groups.archive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to archive\n'
          }
        ],
        'groups.close': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to close.\n'
          }
        ],
        'groups.create': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'Name of private channel to create\n'
          }
        ],
        'groups.createChild': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to clone and archive.\n'
          }
        ],
        'groups.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: groups:history)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'groups.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:read)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to get info on\n'
          }
        ],
        'groups.invite': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to invite user to.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to invite.\n'
          }
        ],
        'groups.kick': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to remove user from.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to remove from private channel.\n'
          }
        ],
        'groups.leave': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to leave\n'
          }
        ],
        'groups.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:read)\n'
          },
          {
            name: 'exclude_archived',
            example: '1',
            required: 'Optional, default=0',
            description: "Don't return archived private channels.\n"
          }
        ],
        'groups.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'groups.open': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to open.\n'
          }
        ],
        'groups.rename': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to rename\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'New name for private channel.\n'
          }
        ],
        'groups.setPurpose': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to set the purpose of\n'
          },
          {
            name: 'purpose',
            example: 'My Purpose',
            required: 'Required',
            description: 'The new purpose\n'
          }
        ],
        'groups.setTopic': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to set the topic of\n'
          },
          {
            name: 'topic',
            example: 'My Topic',
            required: 'Required',
            description: 'The new topic\n'
          }
        ],
        'groups.unarchive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to unarchive\n'
          }
        ],
        'im.close': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:write)\n'
          },
          {
            name: 'channel',
            example: 'D1234567890',
            required: 'Required',
            description: 'Direct message channel to close.\n'
          }
        ],
        'im.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:history)\n'
          },
          {
            name: 'channel',
            example: 'D1234567890',
            required: 'Required',
            description: 'Direct message channel to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'im.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:read)\n'
          }
        ],
        'im.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:write)\n'
          },
          {
            name: 'channel',
            example: 'D1234567890',
            required: 'Required',
            description: 'Direct message channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'im.open': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:write)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to open a direct message channel with.\n'
          },
          {
            name: 'return_im',
            example: ' ',
            required: 'Optional',
            description:
              'Boolean, indicates you want the full IM channel definition in the response.\n'
          }
        ],
        'mpim.close': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'MPIM to close.\n'
          }
        ],
        'mpim.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:history)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Multiparty direct message to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'mpim.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:read)\n'
          }
        ],
        'mpim.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description:
              'multiparty direct message channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'mpim.open': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:write)\n'
          },
          {
            name: 'users',
            example: 'U1234567890,U2345678901,U3456789012',
            required: 'Required',
            description:
              'Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.\n'
          }
        ],
        'oauth.access': [
          {
            name: 'client_id',
            example: '4b39e9-752c4',
            required: 'Required',
            description: 'Issued when you created your application.\n'
          },
          {
            name: 'client_secret',
            example: '33fea0113f5b1',
            required: 'Required',
            description: 'Issued when you created your application.\n'
          },
          {
            name: 'code',
            example: 'ccdaa72ad',
            required: 'Required',
            description: 'The code param returned via the OAuth callback.\n'
          },
          {
            name: 'redirect_uri',
            example: 'http://example.com',
            required: 'Optional',
            description:
              'This must match the originally submitted URI (if one was sent).\n'
          }
        ],
        'pins.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: pins:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to pin the item in.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to pin.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to pin.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to pin.\n'
          }
        ],
        'pins.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: pins:read)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to get pinned items for.\n'
          }
        ],
        'pins.remove': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: pins:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel where the item is pinned to.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to un-pin.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to un-pin.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to un-pin.\n'
          }
        ],
        'reactions.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:write)\n'
          },
          {
            name: 'name',
            example: 'thumbsup',
            required: 'Required',
            description: 'Reaction (emoji) name.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to add reaction to.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to add reaction to.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel where the message to add reaction to was posted.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to add reaction to.\n'
          }
        ],
        'reactions.get': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:read)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to get reactions for.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to get reactions for.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel where the message to get reactions for was posted.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to get reactions for.\n'
          },
          {
            name: 'full',
            example: ' ',
            required: 'Optional',
            description: 'If true always return the complete reaction list.\n'
          }
        ],
        'reactions.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'Show reactions made by this user. Defaults to the authed user.\n'
          },
          {
            name: 'full',
            example: ' ',
            required: 'Optional',
            description: 'If true always return the complete reaction list.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'reactions.remove': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:write)\n'
          },
          {
            name: 'name',
            example: 'thumbsup',
            required: 'Required',
            description: 'Reaction (emoji) name.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to remove reaction from.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to remove reaction from.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel where the message to remove reaction from was posted.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to remove reaction from.\n'
          }
        ],
        'reminders.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:write)\n'
          },
          {
            name: 'text',
            example: 'eat a banana',
            required: 'Required',
            description: 'The content of the reminder\n'
          },
          {
            name: 'time',
            example: '1602288000',
            required: 'Required',
            description:
              'When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")\n'
          },
          {
            name: 'user',
            example: 'U18888888',
            required: 'Optional',
            description:
              'The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.\n'
          }
        ],
        'reminders.complete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:write)\n'
          },
          {
            name: 'reminder',
            example: 'Rm12345678',
            required: 'Required',
            description: 'The ID of the reminder to be marked as complete\n'
          }
        ],
        'reminders.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:write)\n'
          },
          {
            name: 'reminder',
            example: 'Rm12345678',
            required: 'Required',
            description: 'The ID of the reminder\n'
          }
        ],
        'reminders.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:read)\n'
          },
          {
            name: 'reminder',
            example: 'Rm23456789',
            required: 'Required',
            description: 'The ID of the reminder\n'
          }
        ],
        'reminders.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:read)\n'
          }
        ],
        'rtm.start': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: client)\n'
          },
          {
            name: 'simple_latest',
            example: ' ',
            required: 'Optional',
            description:
              'Return timestamp only for latest message object of each channel (improves performance).\n'
          },
          {
            name: 'no_unreads',
            example: ' ',
            required: 'Optional',
            description:
              'Skip unread counts for each channel (improves performance).\n'
          },
          {
            name: 'mpim_aware',
            example: ' ',
            required: 'Optional',
            description: 'Returns MPIMs to the client in the API response.\n'
          }
        ],
        'search.all': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: search:read)\n'
          },
          {
            name: 'query',
            example: 'pickleface',
            required: 'Required',
            description: 'Search query. May contains booleans, etc.\n'
          },
          {
            name: 'sort',
            example: 'timestamp',
            required: 'Optional, default=score',
            description: 'Return matches sorted by either score or timestamp.\n'
          },
          {
            name: 'sort_dir',
            example: 'asc',
            required: 'Optional, default=desc',
            description:
              'Change sort direction to ascending (asc) or descending (desc).\n'
          },
          {
            name: 'highlight',
            example: '1',
            required: 'Optional',
            description:
              'Pass a value of 1 to enable query highlight markers (see below).\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=20',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'search.files': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: search:read)\n'
          },
          {
            name: 'query',
            example: 'pickleface',
            required: 'Required',
            description: 'Search query. May contain booleans, etc.\n'
          },
          {
            name: 'sort',
            example: 'timestamp',
            required: 'Optional, default=score',
            description: 'Return matches sorted by either score or timestamp.\n'
          },
          {
            name: 'sort_dir',
            example: 'asc',
            required: 'Optional, default=desc',
            description:
              'Change sort direction to ascending (asc) or descending (desc).\n'
          },
          {
            name: 'highlight',
            example: '1',
            required: 'Optional',
            description:
              'Pass a value of 1 to enable query highlight markers (see below).\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=20',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'search.messages': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: search:read)\n'
          },
          {
            name: 'query',
            example: 'pickleface',
            required: 'Required',
            description: 'Search query. May contains booleans, etc.\n'
          },
          {
            name: 'sort',
            example: 'timestamp',
            required: 'Optional, default=score',
            description: 'Return matches sorted by either score or timestamp.\n'
          },
          {
            name: 'sort_dir',
            example: 'asc',
            required: 'Optional, default=desc',
            description:
              'Change sort direction to ascending (asc) or descending (desc).\n'
          },
          {
            name: 'highlight',
            example: '1',
            required: 'Optional',
            description:
              'Pass a value of 1 to enable query highlight markers (see below).\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=20',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'stars.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: stars:write)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to add star to.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to add star to.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel to add star to, or channel where the message to add star to was posted (used with timestamp).\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to add star to.\n'
          }
        ],
        'stars.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: stars:read)\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'stars.remove': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: stars:write)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to remove star from.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to remove star from.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to remove star from.\n'
          }
        ],
        'team.accessLogs': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: admin)\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'team.billableInfo': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: admin)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'A user to retrieve the billable information for. Defaults to all users.\n'
          }
        ],
        'team.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: team:read)\n'
          }
        ],
        'team.integrationLogs': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: admin)\n'
          },
          {
            name: 'service_id',
            example: ' ',
            required: 'Optional',
            description: 'Filter logs to this service. Defaults to all logs.\n'
          },
          {
            name: 'app_id',
            example: ' ',
            required: 'Optional',
            description:
              'Filter logs to this Slack app. Defaults to all logs.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'Filter logs generated by this user’s actions. Defaults to all logs.\n'
          },
          {
            name: 'change_type',
            example: 'added',
            required: 'Optional',
            description:
              'Filter logs with this change type. Defaults to all logs.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'team.profile.get': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: users.profile:read)\n'
          },
          {
            name: 'visibility',
            example: 'all',
            required: 'Optional',
            description: 'Filter by visibility.\n'
          }
        ],
        'usergroups.create': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'name',
            example: 'My Test Team',
            required: 'Required',
            description:
              'A name for the User Group. Must be unique among User Groups.\n'
          },
          {
            name: 'handle',
            example: ' ',
            required: 'Optional',
            description:
              'A mention handle. Must be unique among channels, users and User Groups.\n'
          },
          {
            name: 'description',
            example: ' ',
            required: 'Optional',
            description: 'A short description of the User Group.\n'
          },
          {
            name: 'channels',
            example: ' ',
            required: 'Optional',
            description:
              'A comma separated string of encoded channel IDs for which the User Group uses as a default.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in each User Group.\n'
          }
        ],
        'usergroups.disable': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to disable.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'usergroups.enable': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to enable.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'usergroups.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:read)\n'
          },
          {
            name: 'include_disabled',
            example: '1',
            required: 'Optional',
            description: 'Include disabled User Groups.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in each User Group.\n'
          },
          {
            name: 'include_users',
            example: '1',
            required: 'Optional',
            description: 'Include the list of users for each User Group.\n'
          }
        ],
        'usergroups.update': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to update.\n'
          },
          {
            name: 'name',
            example: 'My Test Team',
            required: 'Optional',
            description:
              'A name for the User Group. Must be unique among User Groups.\n'
          },
          {
            name: 'handle',
            example: ' ',
            required: 'Optional',
            description:
              'A mention handle. Must be unique among channels, users and User Groups.\n'
          },
          {
            name: 'description',
            example: ' ',
            required: 'Optional',
            description: 'A short description of the User Group.\n'
          },
          {
            name: 'channels',
            example: ' ',
            required: 'Optional',
            description:
              'A comma separated string of encoded channel IDs for which the User Group uses as a default.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'usergroups.users.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:read)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to update.\n'
          },
          {
            name: 'include_disabled',
            example: '1',
            required: 'Optional',
            description: 'Allow results that involve disabled User Groups.\n'
          }
        ],
        'usergroups.users.update': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to update.\n'
          },
          {
            name: 'users',
            example: 'U060R4BJ4,U060RNRCZ',
            required: 'Required',
            description:
              'A comma separated string of encoded user IDs that represent the entire list of users for the User Group.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'users.getPresence': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description:
              'User to get presence info on. Defaults to the authed user.\n'
          }
        ],
        'users.identity': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: identity.basic)\n'
          }
        ],
        'users.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to get info on\n'
          }
        ],
        'users.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'presence',
            example: '1',
            required: 'Optional',
            description: 'Whether to include presence data in the output\n'
          }
        ],
        'users.setActive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:write)\n'
          }
        ],
        'users.setPresence': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:write)\n'
          },
          {
            name: 'presence',
            example: 'away',
            required: 'Required',
            description: 'Either auto or away\n'
          }
        ],
        'users.profile.get': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: users.profile:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description: 'User to retrieve profile info for\n'
          },
          {
            name: 'include_labels',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include labels for each ID in custom profile fields\n'
          }
        ],
        'users.profile.set': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: users.profile:write)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'ID of user to change. This argument may only be specified by team admins.\n'
          },
          {
            name: 'profile',
            example: '{ first_name: "John", ... }',
            required: 'Optional',
            description:
              'Collection of key:value pairs presented as a URL-encoded JSON hash.\n'
          },
          {
            name: 'name',
            example: 'first_name',
            required: 'Optional',
            description:
              'Name of a single key to set. Usable only if profile is not passed.\n'
          },
          {
            name: 'value',
            example: 'John',
            required: 'Optional',
            description:
              'Value to set a single key to. Usable only if profile is not passed.\n'
          }
        ]
      };
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e) {
          var A = {
            auth: {},
            bots: {},
            channels: {},
            chat: {},
            dnd: {},
            emoji: {}
          };
          return (
            (A.files.comments = {}),
            (A.files = {}),
            (A.groups = {}),
            (A.im = {}),
            (A.mpim = {}),
            (A.pins = {}),
            (A.reactions = {}),
            (A.reminders = {}),
            (A.rtm = {}),
            (A.search = {}),
            (A.stars = {}),
            (A.team = {}),
            (A.team.profile = {}),
            (A.usergroups = {}),
            (A.usergroups.users = {}),
            (A.users = {}),
            (A.users.profile = {}),
            (A.auth.test = function(A, t) {
              (A.token = e), n(16).call({}, A, t);
            }),
            (A.bots.info = function(A, t) {
              (A.token = e), n(17).call({}, A, t);
            }),
            (A.channels.archive = function(A, t) {
              (A.token = e), n(18).call({}, A, t);
            }),
            (A.channels.create = function(A, t) {
              (A.token = e), n(19).call({}, A, t);
            }),
            (A.channels.history = function(A, t) {
              (A.token = e), n(20).call({}, A, t);
            }),
            (A.channels.info = function(A, t) {
              (A.token = e), n(21).call({}, A, t);
            }),
            (A.channels.invite = function(A, t) {
              (A.token = e), n(22).call({}, A, t);
            }),
            (A.channels.join = function(A, t) {
              (A.token = e), n(23).call({}, A, t);
            }),
            (A.channels.kick = function(A, t) {
              (A.token = e), n(24).call({}, A, t);
            }),
            (A.channels.leave = function(A, t) {
              (A.token = e), n(25).call({}, A, t);
            }),
            (A.channels.list = function(A, t) {
              (A.token = e), n(26).call({}, A, t);
            }),
            (A.channels.mark = function(A, t) {
              (A.token = e), n(27).call({}, A, t);
            }),
            (A.channels.rename = function(A, t) {
              (A.token = e), n(28).call({}, A, t);
            }),
            (A.channels.setPurpose = function(A, t) {
              (A.token = e), n(29).call({}, A, t);
            }),
            (A.channels.setTopic = function(A, t) {
              (A.token = e), n(30).call({}, A, t);
            }),
            (A.channels.unarchive = function(A, t) {
              (A.token = e), n(31).call({}, A, t);
            }),
            (A.chat.delete = function(A, t) {
              (A.token = e), n(32).call({}, A, t);
            }),
            (A.chat.meMessage = function(A, t) {
              (A.token = e), n(33).call({}, A, t);
            }),
            (A.chat.postMessage = function(A, t) {
              (A.token = e), n(34).call({}, A, t);
            }),
            (A.chat.update = function(A, t) {
              (A.token = e), n(35).call({}, A, t);
            }),
            (A.dnd.endDnd = function(A, t) {
              (A.token = e), n(36).call({}, A, t);
            }),
            (A.dnd.endSnooze = function(A, t) {
              (A.token = e), n(37).call({}, A, t);
            }),
            (A.dnd.info = function(A, t) {
              (A.token = e), n(38).call({}, A, t);
            }),
            (A.dnd.setSnooze = function(A, t) {
              (A.token = e), n(39).call({}, A, t);
            }),
            (A.dnd.teamInfo = function(A, t) {
              (A.token = e), n(40).call({}, A, t);
            }),
            (A.emoji.list = function(A, t) {
              (A.token = e), n(41).call({}, A, t);
            }),
            (A.files.comments.add = function(A, t) {
              (A.token = e), n(42).call({}, A, t);
            }),
            (A.files.comments.delete = function(A, t) {
              (A.token = e), n(43).call({}, A, t);
            }),
            (A.files.comments.edit = function(A, t) {
              (A.token = e), n(44).call({}, A, t);
            }),
            (A.files.delete = function(A, t) {
              (A.token = e), n(45).call({}, A, t);
            }),
            (A.files.info = function(A, t) {
              (A.token = e), n(46).call({}, A, t);
            }),
            (A.files.list = function(A, t) {
              (A.token = e), n(47).call({}, A, t);
            }),
            (A.files.revokePublicURL = function(A, t) {
              (A.token = e), n(48).call({}, A, t);
            }),
            (A.files.sharedPublicURL = function(A, t) {
              (A.token = e), n(49).call({}, A, t);
            }),
            (A.files.upload = function(A, t) {
              (A.token = e), n(50).call({}, A, t);
            }),
            (A.groups.archive = function(A, t) {
              (A.token = e), n(51).call({}, A, t);
            }),
            (A.groups.close = function(A, t) {
              (A.token = e), n(52).call({}, A, t);
            }),
            (A.groups.create = function(A, t) {
              (A.token = e), n(53).call({}, A, t);
            }),
            (A.groups.createChild = function(A, t) {
              (A.token = e), n(54).call({}, A, t);
            }),
            (A.groups.history = function(A, t) {
              (A.token = e), n(55).call({}, A, t);
            }),
            (A.groups.info = function(A, t) {
              (A.token = e), n(56).call({}, A, t);
            }),
            (A.groups.invite = function(A, t) {
              (A.token = e), n(57).call({}, A, t);
            }),
            (A.groups.kick = function(A, t) {
              (A.token = e), n(58).call({}, A, t);
            }),
            (A.groups.leave = function(A, t) {
              (A.token = e), n(59).call({}, A, t);
            }),
            (A.groups.list = function(A, t) {
              (A.token = e), n(60).call({}, A, t);
            }),
            (A.groups.mark = function(A, t) {
              (A.token = e), n(61).call({}, A, t);
            }),
            (A.groups.open = function(A, t) {
              (A.token = e), n(62).call({}, A, t);
            }),
            (A.groups.rename = function(A, t) {
              (A.token = e), n(63).call({}, A, t);
            }),
            (A.groups.setPurpose = function(A, t) {
              (A.token = e), n(64).call({}, A, t);
            }),
            (A.groups.setTopic = function(A, t) {
              (A.token = e), n(65).call({}, A, t);
            }),
            (A.groups.unarchive = function(A, t) {
              (A.token = e), n(66).call({}, A, t);
            }),
            (A.im.close = function(A, t) {
              (A.token = e), n(67).call({}, A, t);
            }),
            (A.im.history = function(A, t) {
              (A.token = e), n(68).call({}, A, t);
            }),
            (A.im.list = function(A, t) {
              (A.token = e), n(69).call({}, A, t);
            }),
            (A.im.mark = function(A, t) {
              (A.token = e), n(70).call({}, A, t);
            }),
            (A.im.open = function(A, t) {
              (A.token = e), n(71).call({}, A, t);
            }),
            (A.mpim.close = function(A, t) {
              (A.token = e), n(72).call({}, A, t);
            }),
            (A.mpim.history = function(A, t) {
              (A.token = e), n(73).call({}, A, t);
            }),
            (A.mpim.list = function(A, t) {
              (A.token = e), n(74).call({}, A, t);
            }),
            (A.mpim.mark = function(A, t) {
              (A.token = e), n(75).call({}, A, t);
            }),
            (A.mpim.open = function(A, t) {
              (A.token = e), n(76).call({}, A, t);
            }),
            (A.pins.add = function(A, t) {
              (A.token = e), n(77).call({}, A, t);
            }),
            (A.pins.list = function(A, t) {
              (A.token = e), n(78).call({}, A, t);
            }),
            (A.pins.remove = function(A, t) {
              (A.token = e), n(79).call({}, A, t);
            }),
            (A.reactions.add = function(A, t) {
              (A.token = e), n(80).call({}, A, t);
            }),
            (A.reactions.get = function(A, t) {
              (A.token = e), n(81).call({}, A, t);
            }),
            (A.reactions.list = function(A, t) {
              (A.token = e), n(82).call({}, A, t);
            }),
            (A.reactions.remove = function(A, t) {
              (A.token = e), n(83).call({}, A, t);
            }),
            (A.reminders.add = function(A, t) {
              (A.token = e), n(84).call({}, A, t);
            }),
            (A.reminders.complete = function(A, t) {
              (A.token = e), n(85).call({}, A, t);
            }),
            (A.reminders.delete = function(A, t) {
              (A.token = e), n(86).call({}, A, t);
            }),
            (A.reminders.info = function(A, t) {
              (A.token = e), n(87).call({}, A, t);
            }),
            (A.reminders.list = function(A, t) {
              (A.token = e), n(88).call({}, A, t);
            }),
            (A.rtm.start = function(A, t) {
              (A.token = e), n(10).call({}, A, t);
            }),
            (A.search.all = function(A, t) {
              (A.token = e), n(89).call({}, A, t);
            }),
            (A.search.files = function(A, t) {
              (A.token = e), n(90).call({}, A, t);
            }),
            (A.search.messages = function(A, t) {
              (A.token = e), n(91).call({}, A, t);
            }),
            (A.stars.add = function(A, t) {
              (A.token = e), n(92).call({}, A, t);
            }),
            (A.stars.list = function(A, t) {
              (A.token = e), n(93).call({}, A, t);
            }),
            (A.stars.remove = function(A, t) {
              (A.token = e), n(94).call({}, A, t);
            }),
            (A.team.accessLogs = function(A, t) {
              (A.token = e), n(95).call({}, A, t);
            }),
            (A.team.billableInfo = function(A, t) {
              (A.token = e), n(96).call({}, A, t);
            }),
            (A.team.info = function(A, t) {
              (A.token = e), n(97).call({}, A, t);
            }),
            (A.team.integrationLogs = function(A, t) {
              (A.token = e), n(98).call({}, A, t);
            }),
            (A.team.profile.get = function(A, t) {
              (A.token = e), n(99).call({}, A, t);
            }),
            (A.usergroups.create = function(A, t) {
              (A.token = e), n(100).call({}, A, t);
            }),
            (A.usergroups.disable = function(A, t) {
              (A.token = e), n(101).call({}, A, t);
            }),
            (A.usergroups.enable = function(A, t) {
              (A.token = e), n(102).call({}, A, t);
            }),
            (A.usergroups.list = function(A, t) {
              (A.token = e), n(103).call({}, A, t);
            }),
            (A.usergroups.update = function(A, t) {
              (A.token = e), n(104).call({}, A, t);
            }),
            (A.usergroups.users.list = function(A, t) {
              (A.token = e), n(105).call({}, A, t);
            }),
            (A.usergroups.users.update = function(A, t) {
              (A.token = e), n(106).call({}, A, t);
            }),
            (A.users.getPresence = function(A, t) {
              (A.token = e), n(107).call({}, A, t);
            }),
            (A.users.identity = function(A, t) {
              (A.token = e), n(108).call({}, A, t);
            }),
            (A.users.info = function(A, t) {
              (A.token = e), n(109).call({}, A, t);
            }),
            (A.users.list = function(A, t) {
              (A.token = e), n(110).call({}, A, t);
            }),
            (A.users.profile.get = function(A, t) {
              (A.token = e), n(126).call({}, A, t);
            }),
            (A.users.profile.set = function(A, t) {
              (A.token = e), n(127).call({}, A, t);
            }),
            (A.users.setActive = function(A, t) {
              (A.token = e), n(111).call({}, A, t);
            }),
            (A.users.setPresence = function(A, t) {
              (A.token = e), n(112).call({}, A, t);
            }),
            A
          );
        }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.profile.get',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'users.profile.set',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t,
        r = n(17),
        a = (t = r) && t.__esModule ? t : { default: t };
      (A.default = { info: a.default }), (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = I(n(18)),
        r = I(n(19)),
        a = I(n(20)),
        o = I(n(21)),
        i = I(n(22)),
        s = I(n(23)),
        c = I(n(24)),
        _ = I(n(25)),
        l = I(n(26)),
        u = I(n(27)),
        g = I(n(28)),
        d = I(n(29)),
        C = I(n(30)),
        p = I(n(31));
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        archive: t.default,
        create: r.default,
        history: a.default,
        info: o.default,
        invite: i.default,
        join: s.default,
        kick: c.default,
        leave: _.default,
        list: l.default,
        mark: u.default,
        rename: g.default,
        setPurpose: d.default,
        setTopic: C.default,
        unarchive: p.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = i(n(32)),
        r = i(n(34)),
        a = i(n(35)),
        o = i(n(33));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        postMessage: r.default,
        delete: t.default,
        update: a.default,
        meMessage: o.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = s(n(38)),
        r = s(n(36)),
        a = s(n(37)),
        o = s(n(39)),
        i = s(n(40));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        info: t.default,
        endDnd: r.default,
        endSnooze: a.default,
        setSnooze: o.default,
        teamInfo: i.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = u(n(45)),
        r = u(n(46)),
        a = u(n(47)),
        o = u(n(50)),
        i = u(n(42)),
        s = u(n(43)),
        c = u(n(44)),
        _ = u(n(48)),
        l = u(n(49));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        delete: t.default,
        info: r.default,
        list: a.default,
        upload: o.default,
        comments: { add: i.default, delete: s.default, edit: c.default },
        revokePublicURL: _.default,
        sharedPublicURL: l.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = B(n(51)),
        r = B(n(52)),
        a = B(n(53)),
        o = B(n(54)),
        i = B(n(55)),
        s = B(n(56)),
        c = B(n(57)),
        _ = B(n(58)),
        l = B(n(59)),
        u = B(n(60)),
        g = B(n(61)),
        d = B(n(62)),
        C = B(n(63)),
        p = B(n(64)),
        I = B(n(65)),
        f = B(n(66));
      function B(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        archive: t.default,
        close: r.default,
        create: a.default,
        createChild: o.default,
        history: i.default,
        info: s.default,
        invite: c.default,
        kick: _.default,
        leave: l.default,
        list: u.default,
        mark: g.default,
        open: d.default,
        rename: C.default,
        setPurpose: p.default,
        setTopic: I.default,
        unarchive: f.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = s(n(67)),
        r = s(n(68)),
        a = s(n(69)),
        o = s(n(70)),
        i = s(n(71));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        close: t.default,
        history: r.default,
        list: a.default,
        mark: o.default,
        open: i.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = s(n(72)),
        r = s(n(73)),
        a = s(n(74)),
        o = s(n(75)),
        i = s(n(76));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        close: t.default,
        history: r.default,
        list: a.default,
        mark: o.default,
        open: i.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function(e, A) {
          var n = 'oauth.access',
            a = (0, r.default)(n, e);
          a ? A(a) : (0, t.default)(n, e, A);
        });
      var t = a(n(0)),
        r = a(n(1));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = i(n(80)),
        r = i(n(81)),
        a = i(n(82)),
        o = i(n(83));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        add: t.default,
        get: r.default,
        list: a.default,
        remove: o.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = s(n(84)),
        r = s(n(85)),
        a = s(n(86)),
        o = s(n(87)),
        i = s(n(88));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        add: t.default,
        complete: r.default,
        delete: a.default,
        info: o.default,
        list: i.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = o(n(77)),
        r = o(n(78)),
        a = o(n(79));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = { add: t.default, list: r.default, remove: a.default }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 }),
        (A.default = function() {
          var e = { handlers: { started: [] } };
          return (
            r.default.push('pong'),
            r.default.forEach(function(A) {
              (e.handlers[A] = []),
                (e[A] = function(n) {
                  e.handlers[A].push(n);
                });
            }),
            (e.started = function(A) {
              e.handlers.started.push(A);
            }),
            (e.listen = function(A, n) {
              (0, t.default)(A, function(A, t) {
                if (A) {
                  if (!n) throw A;
                  n(A);
                } else
                  (e.ws = new WebSocket(t.url)),
                    (e.ws.onmessage = function(A) {
                      var n = JSON.parse(A.data);
                      e.handlers[n.type].forEach(function(e) {
                        return e.call({}, n);
                      });
                    }),
                    e.handlers.started.forEach(function(e) {
                      return e.call({}, t);
                    }),
                    n && n(null, t);
              });
            }),
            (e.close = function() {
              e.ws.close();
            }),
            e
          );
        });
      var t = a(n(10)),
        r = a(n(141));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = A.default;
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      (A.default = [
        'accounts_changed',
        'bot_added',
        'bot_changed',
        'channel_archive',
        'channel_created',
        'channel_deleted',
        'channel_history_changed',
        'channel_joined',
        'channel_left',
        'channel_marked',
        'channel_rename',
        'channel_unarchive',
        'commands_changed',
        'dnd_updated',
        'dnd_updated_user',
        'email_domain_changed',
        'emoji_changed',
        'file_change',
        'file_comment_added',
        'file_comment_deleted',
        'file_comment_edited',
        'file_created',
        'file_deleted',
        'file_public',
        'file_shared',
        'file_unshared',
        'group_archive',
        'group_close',
        'group_history_changed',
        'group_joined',
        'group_left',
        'group_marked',
        'group_open',
        'group_rename',
        'group_unarchive',
        'hello',
        'im_close',
        'im_created',
        'im_history_changed',
        'im_marked',
        'im_open',
        'manual_presence_change',
        'message',
        'message.channels',
        'message.groups',
        'message.im',
        'message.mpim',
        'pin_added',
        'pin_removed',
        'pong',
        'pref_change',
        'presence_change',
        'reaction_added',
        'reaction_removed',
        'reconnect_url',
        'star_added',
        'star_removed',
        'subteam_created',
        'subteam_self_added',
        'subteam_self_removed',
        'subteam_updated',
        'team_domain_change',
        'team_join',
        'team_migration_started',
        'team_plan_change',
        'team_pref_change',
        'team_profile_change',
        'team_profile_delete',
        'team_profile_reorder',
        'team_rename',
        'url_verification',
        'user_change',
        'user_typing'
      ]),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = o(n(89)),
        r = o(n(90)),
        a = o(n(91));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = { all: t.default, files: r.default, messages: a.default }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = o(n(92)),
        r = o(n(93)),
        a = o(n(94));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = { add: t.default, list: r.default, remove: a.default }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = s(n(95)),
        r = s(n(96)),
        a = s(n(97)),
        o = s(n(98)),
        i = s(n(99));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        accessLogs: t.default,
        billableInfo: r.default,
        info: a.default,
        integrationLogs: o.default,
        profile: { get: i.default }
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = _(n(100)),
        r = _(n(101)),
        a = _(n(102)),
        o = _(n(103)),
        i = _(n(104)),
        s = _(n(105)),
        c = _(n(106));
      function _(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        create: t.default,
        disable: r.default,
        enable: a.default,
        list: o.default,
        update: i.default,
        users: { list: s.default, update: c.default }
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      'use strict';
      Object.defineProperty(A, '__esModule', { value: !0 });
      var t = c(n(107)),
        r = c(n(108)),
        a = c(n(109)),
        o = c(n(110)),
        i = c(n(111)),
        s = c(n(112));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (A.default = {
        getPresence: t.default,
        identity: r.default,
        info: a.default,
        list: o.default,
        setActive: i.default,
        setPresence: s.default
      }),
        (e.exports = A.default);
    },
    function(e, A, n) {
      (A = e.exports = n(148)(!1)).push([
        e.i,
        '@import url(https://fonts.googleapis.com/css?family=Raleway:400, 200);',
        ''
      ]),
        A.push([
          e.i,
          ".ReactSlackChat__transition___9M_ac{transition:0.8s cubic-bezier(0.3, 0, 0, 1.3)}.ReactSlackChat__card___3w9UW{background-color:#fff;box-shadow:0 0 10px 2px rgba(0,0,0,0.3);height:60px;position:fixed;right:40px;bottom:0;width:340px;cursor:pointer}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX{cursor:default;height:500px;width:340px;z-index:99999}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX .ReactSlackChat__card_circle___2IssD{background-size:cover;border-radius:0}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX h2{color:#fff}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX h2 small{color:#fff}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__chatActive___2pqMg .ReactSlackChat__helpHeader___1zfWG{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__chatActive___2pqMg .ReactSlackChat__channels___1kZGS{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__chatActive___2pqMg .ReactSlackChat__chat___1XmdD{visibility:visible;opacity:1;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX .ReactSlackChat__subText___1hXWw{visibility:visible;transition:visibility 0s, opacity 0.5s linear;opacity:1}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX p{margin-top:300px}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX .ReactSlackChat__channelActive___3_EXm.ReactSlackChat__channels___1kZGS{overflow-y:auto;visibility:visible;transition:visibility 0s, opacity 0.5s linear;opacity:1;overflow-x:hidden}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__channelActive___3_EXm .ReactSlackChat__helpHeader___1zfWG{visibility:visible;opacity:1;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW .ReactSlackChat__channels___1kZGS{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW .ReactSlackChat__chat___1XmdD{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW .ReactSlackChat__subText___1hXWw{visibility:hidden;transition:visibility 0s, opacity 0.5s linear;opacity:0}.ReactSlackChat__card___3w9UW h2{color:#fff;font-family:Raleway,sans-serif;font-size:24px;font-weight:200;margin-top:0;text-align:center;width:100%;z-index:9999}.ReactSlackChat__contact___2WatO{position:relative;width:95%;height:50px;margin-top:10px;padding-left:1rem;display:flex;align-items:center;cursor:pointer;overflow:hidden}.ReactSlackChat__contact__photo___3tBwT{border-radius:50%;margin-right:1.5rem;height:50px;width:50px;float:right}.ReactSlackChat__contact__photo___3tBwT svg{height:42px}.ReactSlackChat__user__contact__photo___2XFGH{float:left;margin-top:2px;padding-bottom:1px;height:42px;border-radius:50%;margin-right:10px}.ReactSlackChat__user__contact__generated__image___2QFTN{float:right;margin-top:2px;font-size:2.2em;color:#fff;padding-right:12px;padding-left:12px;padding-bottom:1px;padding-top:1px;text-align:center;background:#2e7eea;height:42px;min-width:30px;border-radius:50%}.ReactSlackChat__chat__name___1VEkG{top:15px;right:12px;position:relative}.ReactSlackChat__chat__contact__photo___39wb1{border-radius:50%;height:42px;float:right}.ReactSlackChat__channel__header__photo___1ya40{border-radius:50%;height:48px;float:right;position:relative;right:1.5rem;top:1.5rem}.ReactSlackChat__channel__header__photo___1ya40 svg{height:48px}.ReactSlackChat__channel__close__button___IDR14{position:absolute;top:0;right:0;color:#ccc;background:none;font-weight:bold;font-size:1.4em;border:none;cursor:pointer}.ReactSlackChat__contact__name___vJEfC{font-family:Raleway,Helvetica,Arial,sans-serif}.ReactSlackChat__contact__status___3ZHRm{position:absolute;top:20px;right:15px;width:8px;height:8px;border:2px solid #00b570;border-radius:50%;opacity:0;transition:opacity 0.3s}.ReactSlackChat__contact__status___3ZHRm.ReactSlackChat__online___2H97b{opacity:1}.ReactSlackChat__chatHeader___3Tlfe{position:absolute;top:0px;z-index:9999;left:0rem;width:100%;height:6rem;background:#2e7eea}.ReactSlackChat__chat__back___xUDcG:before{content:'';position:absolute;display:block;cursor:pointer;top:2.4rem;left:1.6rem;width:1.5rem;height:1.5rem;border:2px solid #ccc;border-right:none;border-bottom:none;transform:rotate(-45deg);transition:transform 0.3s}.ReactSlackChat__chat__back___xUDcG:hover:before{transform:translateX(-0.3rem) rotate(-45deg)}.ReactSlackChat__chat__status___1NTQA{position:relative;left:40px;font-family:Raleway,Helvetica,Arial,sans-serif;text-transform:uppercase;color:#fff}.ReactSlackChat__chat__person___2u9ec{display:inline-block;position:absolute;top:2rem;left:3rem;font-family:Raleway,Helvetica,Arial,sans-serif;color:#fff}.ReactSlackChat__chat__online___2ZWMl{position:absolute;left:20px;top:5px;width:8px;height:8px;border:2px solid #43dea3;border-radius:50%;opacity:0;transition:opacity 0.3s}.ReactSlackChat__chat__online___2ZWMl.ReactSlackChat__active___1osoX{opacity:1}.ReactSlackChat__chat__messages___1kJlp{position:absolute;top:60px;height:68%;width:96%;padding-top:35px;padding-right:10px;padding-left:10px;overflow-y:auto}.ReactSlackChat__chat__msgRow___3j1tU{margin-bottom:0.5rem}.ReactSlackChat__chat__msgRow___3j1tU:after{content:'';display:table;clear:both}.ReactSlackChat__chat__msgRow___3j1tU.ReactSlackChat__mine___217x2{text-align:left}.ReactSlackChat__chat__msgRow___3j1tU.ReactSlackChat__notMine___tnTQI{text-align:right}.ReactSlackChat__chat__msgRow___3j1tU.ReactSlackChat__notMine___tnTQI .ReactSlackChat__chat__message___18STE.ReactSlackChat__mentioned___3TGpt{background:#43b2f3 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAEZ0FNQQAAsY58+1GTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASmSURBVHjajJTJbxxFFIe/V9Xtnn3G42TsgIkSsAlgA4EEEAiEBAkSXBCKuMCBPwAkOMCFCxwAcUXcuXHjwiaxCEWIJQlhESCWAMY2sZ3Ejsez2dNbVXHoGcdBCPGkp+6q6v7q1e91/+T9VyeY3Hs1nxz/kmrFQ2lFFMWIsB3Wwr6pPU/HcdxdnFt/Q6lLa85BPtDgHJ0ty3233cH82d/w+EeICEopnLPbc57WN9/76Msvhd3m1tJrz33scGeHa0oJSgTr3GUctXNgnSWfL5DLFUhTcE6IIpi57c7ngvp0qTp5eNeB2ZlnkgjEgUmhkAsoFHL/Dc6ObcnlAoLAx1oIgpFDBw4/clTFKyi7oWbvevSY77MvtRCM+ORzAdbaf2L+BWwsY6OjFItFuj3H7K2Hn6o1Gg3CNoQb7Jqcvuq62Zknu10oFPOM1WsY8z/AAEkSU6/XmWhUb7pm9s6jKtmAuANRB21DdeDm+x9u1IPJ3fU6cZL+GwL9+JES5UqNn39ZQimnBTOhlczWqrV7rpu58dkr9u2/RZm+kMaQGjAJuWJptKi29pmo6zZa64Ver2/6IVtbIUzvvZJWp4m880rjganp649ubsbj5dHq7nyhPBYU8mNekKtXK+WaRwxOAd6lVDkS69Fut5tpGDajzXaz3+tc7LbWVou+Xfv1jx/f8yq5/BPXTk09pvM+2BhEspa7BOJVMID4A6jO0vXwdY5d5aBOKagzWoYkBq7FrJ/n7MKZvPfr4sqb1ZOfHTp48JYDBA7SzUx65wALzoJNwTpwgBNwOjuFU2AFjAW/gt00fP3TV9/NXWy+rY8csqvLq+vzKuzduGd0fLcoB+EqxC2I2lnGHYi6EHUG2YJ+C/rtbF4FmJ7l5A+nTp8+u/SCxZ3UD91BZB0rS+udeRVu3LCnPDIuLoKon1VpXSbHZVcHqYUkAWMwvcid+O2XU9+cX31BFJ8pRVc/eDsoITKOleWN3oJKwuvHK4WGEoTUZpCdmQ42MJk0SYw58eeFE9+cb74ois+1sAmgH7wdBNBClFgWz7X6a+N5ffdoKShnkGEOYHYIt2CF38+1Fj5dbj6PcNxXhNv+4gY9GUTf07IgjpDEQmKAYdMGVuYGclhALB7SH1GyFONiswPkpTv+xsRAI6/Hq57ek4Ht5WC4pLsFlFDWeqLo6V2bUZp97tuOuMN3jUDJ01eXUTniNNtJAKUHlQ6qTtNMFqUpILW8kgnIHt0G55TsdG2/pNVVvrUQGvACcB5hp89cp7uoEW9/sXxlkC+BxBCHFK3VJaX2e8DITnDF09sDX2ylKOxFNHgVTGg5s3bx/M+d1gfn4ui4Qvwr/P6RGyq1B6Zq9br2C6i0RVVkqqyklNPS2wa3jcmkAwJHY/dIfgZT4M+19sb3zbWPlqPw3Rh3WgnLFifzcfjFysULH57ptB8+WB47sreYL9WVN20kHOs6ekOZvWjg/IPeJHO9rR/nen/N/9HvvxVjTylh0Rc2h4Ip4Uzq3Mpc0v92pbny4VQ3OBY7u2AEk+K2dZbXn7rMRosWJo1DaTgnQlsGrjF8YXhvMy8ftY5xJaQKloCtIejvAQAnfFNfd0aAVwAAAABJRU5ErkJggg==) no-repeat -2px -2px !important;color:#fff !important}.ReactSlackChat__chat__message___18STE{display:inline-block;max-width:60%;word-wrap:break-word;margin-right:10px;padding:0.8rem;font-family:Raleway,Helvetica,Arial,sans-serif}.ReactSlackChat__system__message___3Cs0L{max-width:100%;color:#2e7eea}.ReactSlackChat__attachmentIcon___2DWqQ{position:absolute;bottom:15px;left:15px;width:25px;height:25px;z-index:9999;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMEmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarZd3UFT3u8afU7awsEtbEZCygHTBBQQp0rtU6WBddhd2YVnWLSjYjTERjV1UsEQ0CGLQWACJFXsk9hbbD2JQicZg7KJy/wA1987cP+7MfWfOnHc+85zn/b7fmfPHA/ByRCqVgjQCSpRadVpshCAnN0/A6gQHFAwxAlYisUYVnpqaCACf3v8qAnh1HQQAXPEQqVQK/N/KWCLViAEiFUC+RCMuAYh9ABUiVqm1AP0CgMM0rUoLMMwB8NU5uXkAYwQAfuFAHwaAnz/QZwDgqzPSIgGGDGAbiETqQoCrBSAoExdqAe5qAEKlRK4EuCcAhIhlIgnAowGMKCkplQA8IQCX/H/5FP43z/zPniJR4ed+YBcAADtKrlEpROX4/64She7TDHsABjJ1XBoAA4CoLy5NSAPABIh9yvzklEHeJpcAADgAcUqmi8sEYA4QF8WayDwAPIB4JBFFJQxqXumKM8MHOAmRGgDAB0ieXBuf8UmvLk0b9CftlYrkRAAuAOkpk8YnDpyBzJJqotMBGAHkhAJ5TPygXlEhy8ge1Ewvk2clD2pma4rTEwbnLq2QRSYPajaodWmZg7y2QB2TBkAIkLtLNMAg7xSLvszSyjLiBvunUk1O4icukUZFfzq/VJmZPvjtR5U2Iu0TVylSEz9rFLFpA3dCGWjK0qMBmACUmVad8Ym7FInGpg7sRXmrtKmf7wd5EEEDBUqhbKvfc+aSEOkoRhGkUKMEiRChHCKokQQpClEEKRSQQom/oEUPNEhCKZSQQ4tSqJGOYjyAGiU0n/anw+lQOoj2pQOYo5jOzFFMVwiYzswoZgDTi+mHcBRATlpAhCKkQIl8SFEMKZSQQIB8SCGFAhJoIIZs4DyMe4wuxi2kQgQltBBBAQVESMYfKIcWWrxaV1oemCVDHOQ2x6GEAFrIbM4hCnJooIICUhQVhJQHZsloKzqEDqb96Qg6hA771x5S6KCGABJIIYAW5VBBCgHkUEKMUiihhA6pEEEFEdQQQclj8zx44Tw3Hp/H4lnxHP81T4RyajPVSnVQh6gWREA+uFMx/oAaJYhG8YCH8LRwq/CA8IbwiXAboJVO1wJAZKmqXC0vlGkF4SqVQiqIV4o9Rwi8hV5+QE5unmDgF3t+EwQAwoz9hekagTEpADHzCxv/FtglBIZ2fGGOXgB/LnDggVinLhtgNAAwwIEh+LCADRzgAg94ww9BCEM0xiIFGcjFJIghQwnUmIaZmIeFWIzlWINqbMZW1ONH7EELDuIYTuEcLuIabqMT3XiMXrxCH0EQLIJLmBIWhC3hSLgT3oQ/EUJEE4lEGpFLTCEKCSWhI2YSXxGLiZVENbGFaCB+Ig4Qx4izxCXiN6KL6CH+Id6RFGlA8klr0okcSfqT4WQCmUFOJAvJqWQFuYBcSq4ja8mdZDN5jDxHXiM7ycfkSwqUPmVG2VEelD8VSaVQeVQBpaZmU5VUFVVLNVFt1GnqCtVJPaHe0kzalBbQHnQQHUdn0mJ6Kj2bXkJX0/V0M32CvkJ30b30RwaXYcVwZwQy4hk5jELGNMZCRhWjjrGfcZJxjdHNeMVkMs2YzszRzDhmLrOIOYO5hLmRuYt5lHmJeZ/5ksViWbDcWcGsFJaIpWUtZK1n7WQdYV1mdbPesPXZtmxvdgw7j61kz2dXsXewD7Mvsx+y+/SM9Bz1AvVS9CR65XrL9Lbpteld0OvW6+MYc5w5wZwMThFnHmcdp4lzknOH81xfX99eP0B/nL5cf67+Ov3d+mf0u/TfGpgYuBlEGkww0BksNdhucNTgN4PnXC7XiRvGzeNquUu5Ddzj3HvcNzxTnicvnifhzeHV8Jp5l3lPDfUMHQ3DDScZVhhWGe41vGD4xEjPyMko0khkNNuoxuiA0Q2jl8amxl7GKcYlxkuMdxifNX5kwjJxMok2kZgsMNlqctzkvill6mAaaSo2/cp0m+lJ024+k+/Mj+cX8Rfzf+Sf5/cOMRkyakjWkOlDaoYcGtJpRpk5mcWbKcyWme0xu272bqj10PCh0qGLhjYNvTz0tfkw8zBzqXml+S7za+bvLAQW0RbFFissWizuWtKWbpbjLKdZbrI8aflkGH9Y0DDxsMphe4bdsiKt3KzSrGZYbbXqsHppbWMda62yXm993PqJjZlNmE2RzWqbwzY9tqa2IbZy29W2R2z/FAwRhAsUgnWCE4JeOyu7ODud3Ra783Z99s72mfbz7XfZ33XgOPg7FDisdmh36B1uOzxp+MzhjcNvOeo5+jvKHNc6nnZ87eTslO30jVOL0yNnc+d45wrnRuc7LlyXUJepLrUuV12Zrv6uxa4bXS+6kW6+bjK3GrcL7qS7n7vcfaP7pRGMEQEjlCNqR9zwMPAI9yjzaPTo8jTzTPSc79ni+XTk8JF5I1eMPD3yo9BXqBBuE972MvEa6zXfq83rH283b7F3jfdVH65PjM8cn1afZ6PcR0lHbRp109fUN8n3G9923w9+o/3Ufk1+PaOHj54yesPoG/58/1T/Jf5nAhgBEQFzAg4GvA30C9QG7gn8O8gjqDhoR9CjMc5jpGO2jbkfbB8sCt4S3BkiCJkS8n1IZ6hdqCi0NvT3MIcwSVhd2MNw1/Ci8J3hTyOEEeqI/RGvIwMjZ0UejaKiYqMqo85Hm0RnRldH34uxjymMaYzpjfWNnRF7NI4RlxC3Iu5GvHW8OL4hvnfs6LGzxp5IMEhIT6hO+D3RLVGd2JZEJo1NWpV0J9kxWZnckoKU+JRVKXdTnVOnpv48jjkudVzNuAdpXmkz006nm6ZPTt+R/iojImNZxu1Ml0xdZnuWYdaErIas19lR2SuzO3NG5szKOZdrmSvPbc1j5WXl1eW9HB89fs347gm+ExZOuD7ReeL0iWcnWU5STDo02XCyaPLeKYwp2VN2THkvShHVil7mx+dvyO8VR4rXih9LwiSrJT3SYOlK6cOC4IKVBY8KgwtXFfbIQmVVsifySHm1/FlRXNHmotfFKcXbi/sV2YpdJeySKSUHlCbKYuWJUpvS6aWXVO6qharOqYFT10ztVSeo6zSEZqKmVcvXqrQdOhfd17quspCymrI307Km7Z1uPF05vaPcrXxR+cOKmIofZtAzxDPaZ9rNnDeza1b4rC2zidn5s9vnOMxZMKd7buzc+nmcecXzfp0vnL9y/ouvsr9qW2C9YO6C+1/Hft24kLdQvfDGN0HfbP6W/lb+7flFPovWL/pYKan8ZbFwcdXi90vES375zuu7dd/1Ly1Yen6Z37JNy5nLlcuvrwhdUb/SeGXFyvurklY1rxasrlz9Ys3kNWerRlVtXstZq1vbuS5xXev64euXr39fLau+VhNRs2uD1YZFG15vlGy8vClsU9Nm682LN7/7Xv79zS2xW5prnWqrtjK3lm19sC1r2+kf/H9oqLOsW1z3Ybtye2d9Wv2JhtENDTusdixrJBt1jT07J+y8+GPUj61NHk1bdpntWrwbu3W7//xpyk/X9yTsad/rv7dpn+O+DftN91c2E83lzb0tspbO1tzWSwfGHmhvC2rb/7Pnz9sP2h2sOTTk0LLDnMMLDvcfqTjy8qjq6JNjhcfut09uv3085/jVE+NOnD+ZcPLMqZhTx0+Hnz5yJvjMwbOBZw/84v9Lyzm/c80dvh37f/X9df95v/PNF0ZfaL0YcLHt0phLhy+HXj52JerKqavxV89dS7526Xrm9Zs3JtzovCm5+eg3xW/PbpXd6rs99w7jTuVdo7tV96zu1f7H9T+7Ov06D3VFdXX8nv777fvi+4//0PzxvnvBA+6Dqoe2DxseeT862BPTc/HP8X92P1Y97nuy8C/jvzY8dXm67++wvzt6c3q7n6mf9f+z5LnF8+0vRr1of5n68t6rkld9ryvfWLypf+v/9vS77HcP+6a9Z71f98H1Q9vHhI93+kv6+1UitQgAQAEgCwqAf7YD3FzA9CLA4Q1klMFsRXxJWf9bP5BjAAB+QN1cICsMSDgKVM8FHI8CpgBSw4CMMJA+Pp+fwdIU+HgPeOm3AIyq/v7n2QDLFfhwo7+/r6W//0MdQN0Cjr4ayEYAIGwCjKMA4Ky+cu7/zCj/BcvXUmsqGZJDAAA6MGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0xMC0xN1QxMzoyOTowMy0wNzowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMTAtMTdUMTM6Mjk6MDMtMDc6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTEwLTE3VDEzOjI5OjAzLTA3OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoyZTQ1OTY4YS0xMDQwLTRlN2ItYTIzMS01YTE1YzRmMjQwMTg8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiOGE0NTcwNy1jY2JkLTExNzktOWY3Ny04MTA4MjJiYzhkODg8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpkMzBlMzEzOS1iZTU4LTQwNzAtOWEzOC1lZTkxMWIzZTBmZjk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZDMwZTMxMzktYmU1OC00MDcwLTlhMzgtZWU5MTFiM2UwZmY5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTE3VDEzOjI5OjAzLTA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MmU0NTk2OGEtMTA0MC00ZTdiLWEyMzEtNWExNWM0ZjI0MDE4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTE3VDEzOjI5OjAzLTA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+RGlzcGxheTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+9mylZAAAACBjSFJNAABuJwAAc68AAPwDAACEPgAAbxoAAORyAAAw3QAAGDHVrX3tAAAK7UlEQVR42mL8//8/AzJgYWBgYLj98CHD5n37/1vo6zMyMTAwMGzdt/+/irx8lQA/XzDj////Ge4+fMTw+9/f8A8fP64EAAAA//9ixDDj9dv3DB+/fmY4d+WqyLNXr18zMTIyMly5dbv+6YsXr11srKRZVmzd8t/WxITx/79/+hysrM8AAAAA//9i/P//P8Prt+8ZPnz5xPD//38GNlZWhg179v430dZmP3358k+4gk/fvjBs3rPvv7yMdMPff//+PXn+vMnfxRnizsWbNv5/8eo1Aycnx+/7jx83KEpJXVGUlVnz9+9fBsb///8zfPj8WXr5ps13mVlZvgnw8R+REhHxY2FhZhARFGQAAAAA///C8Ac6YGFgYGC49eABA8P//wyMjEwMdx8/nvXz589XP37+dA339jJnQVZ95+HD2Rzs7Jf4eXgmf/vx4w8DAwMDE0zy7qNHc1lYWI5euH590v///7N//folC1dw99HjeSJCQgev3Lo1X0tZOe/7z59KV27fToK74c/f37wv37zRVJKVrfv775/ujVu3Ug01NRnhCuQlpVvZ2NkuPHn2nPvKrVtfNFRVGGGeY2FgYGDYc/z4eUF+/stfPn/WVVVSgnidEaIAIHg4vH77nuH9548MjIyMDP///WNgYGRkYGRgZGBhYWZgZGRiuHH37uRbDx7kMDMzM/z9+5fB39XFVl5S8ggTvkBkYmRkuH733uQNu3f/5+fluaelosKoq6bG6GZtzbhl3/7DKMGEopGJieHuo0dzNu7d+5+Hi+u8qoJCzYFTp/v4uLkE/vz9W7Dz6NH/agryszAMYGRkZLj78NHcTfv2/+fi5DwkIynRePbKlbnfvn//Z6illXP0/IX3375/U/Kys+UREhRMR42ox4/qth04+J+Dnf2Io6WFx9nLVxaysrD+MtPXzXn84kUbCzOzmrOlRfDtBw9zz1+7Pp+fmxsRygwMDAznrl5ttDc1FRHg43srxM/PfZiZmeHh06etHOxsLb4OjsFbDx5YKyEmKmNlZMj46fNX1MTGwMDA8PffP4azV65cFRcVlRAWFPyqoqDAKCEiknDo9On5Hz9/2Wiqq8v46dtXBvTUC/dCSmgIo6S4mOLPnz/nXLx+/emrN2/OfPv547q+hgYjLw9PAK5kDyCkzHaaCKM4fr6Z+aYrXSnVBJp0g0JBhRJlMSpETYhKEC8ElwuvuPUNjN7wCL6BcKUkrZgAlkVjIkgTKKVa7RJKKCq1TdvpdGY6HS9ckEDlPMDvnJPz+59j83BcUQAAmVwO0pkMVAAAfgMlSQKoSKDR1ADLcjWvlhbTCCFckSSQyWSxW1cuOww6nUQc14EkCLV33p/DGHPNDrulvaX5UpnnreufIuNVRfo7HkVqJ6en8xjjfH/XOW1ZFJMalXpRpVSGwtHo/f8CCIQM3vmFrBzT2bZGZ0NsK1mBX9vRTKnkNOh0q9VVRsjoW1hM16hU2WaHQ/8xGkuzPD+FKYp6FwgUeY6X3ejru3kkgECE0etf2JNjnPW0uvVr4bAoShJfb64bisTjRU4QyG5Pe40kSeIhAEmSeq/fv6dWKXMtjU7920BARAhxTotF+SG0WcozDB65fo0WeL4QjscOikSRpM475/+hUatznW63NvwlKiBA5fMejzKSSBSLLCsbuzOKpmZmvyZ3d5dVcvk+gCAQTM29zijkNNPf06NdCQYZAOB6O9pl79fX8yzHKW4PDKBJn+9bieP0tvqGYRrjfcDyWnCcorB48WyXMZnaUeQYRmnU6ydWQ5vZAsOoHwwPE16/f7dQZE1NdrtFFCvbB0yMbm3dVSpkO0yxwHWdPgMkIh6tbGw8RghgbHSEeub1pUo8b/a0uq1MkU0eChNN03uiUFbWGWthNRQCl8365KTJpL43OIgmvC9TLMuam+w2m1SpJA5dDQCgt6PjIScIxvh2cogTeNiMRcFkMDDPZ2azbIk1nXK5bCBJ8aphajhhXqqrNb4JRj6/oDH+TpJEulTi7eWygBttNqsEkKhq7J8n2tnadsFls14lEErxvKA26DRP+7u7ceWIsf+tn8SXa2xTZRjHn/c9p+fS055ubbdu7VZgsDLcyia3EBOFD8YPJppATPxAEAUjCQTIEJN9EUhELjEBEyN4vxCj8UJChgSjEDQECJggOGXr6HVrx9ptXdeee885rx8cJAtTMZj4fHs/Pb83T/7///PM8IPJchnMqgVTUhlsQqazYVra0+87UscIg21ZwLAMcCwLmm5A1TQBgNCj4+NP3M4X1ldkealpWU6eZXMCz3/v93k/bGtpyTA0Tbw1Nf8dAM9xYFRNoS8WO5oYGnoOEAIHRekOmi5QCGmGbfvNarXGsmzkdgmZJ1c9tirg92ceGABsGxiOdSeGhg70xQa3EgLAskxlWXt7j6JpRw2zCgztAIQRNPr9j/x45eopzTC8giDc2Lh2TdeMUPg3hTEGDKg2nssd6E8kNhMCwHFMJTJ33t5aUTyMMQZbUYAQAk4nDxTGIKtqjKKoSYSQ16xWxXtC5X4bI4R88XTmg1PnzxdvxuObeZ4vdS5qe2l5R1TUdN17Mx7/YmxiYgnLMBQCBGATRteNbZd/uZ6VVXU+EGKu7OradU8s/lNjYtv+W+nMwYFEchMBAjWiOBmNRHapuvbRyGh+92AqZamahjHGqtslDIUa6tOSqqy7+mvf4app0hgjCNT5P13Z2bnVK3rk+wLAGAMC8N5Kpw71J5IvAgFwCc5Sc2Njt2nZnyRzw7slSbGmymUs8LwWDgb3hRoaXtcNfcuFn6/dVnWdwQigI9J6dF5zqHusOGkoqgoURYHbJfw1AEIIKIRqB9PpN2KJ5CbLskF0u6aikch2ADieKxT2jk1MmKqmUU6e11vC4T0uQTgkSdK2G/39iqJpPEIIWpqb3lzZ1dmdyY280B9PHPd6PK9phvG7VixCUyAwOwBN0854JvPWQDK10SYEOIapLI127Kjzej/+bSDWk8sXDEXXHCzDVOc0Ne1eEG7eX5oqbx1IJiVZVQVACKKRyJHVK5bvTI+MrOk9d25cVlQfAYBwY6MYbVu4gcJ4bNYRFEtTi89evHhBMwyRYRhj8cKFPQLHHTEsk0lkMgcGUqkej+g2QjWBfQ1+/6uYwluuXL8xVZFlERCC9tbWYw8vatsymEqvfe+rr0cNwwggjKHO5/sm4PN1CzyfvSvr2QAuXbv2rm6aIscy5SUd7c9yDPtdsK4eLNuujheLl2Ns0pZlhQECO0vlco+qabRl2dA2v+XYquXLtqdHRp46efbcqKKqAUAIwsHgiVCg/uVSRcrYNoHZlrAZALKqNtMYA+tgijSiLsqyAlk7D9FIhLiczt6nH39cTA0Pr87m848CIdA6d85PKzo7z4wWxp758vSZbFmWApjCUOfznqjz1r7Cs1yKEPLnj6dN7G8BwsHQt7FUcjMhJFSqlPcseah9V1mS4IfLl8DjcgGFsaxXq6c9bvfpjgULoFiprP+899SEoqpejDE0B4MnG/3+nZKqpCybwP3snTOsOJkdZlPD2bev3+zfxHEc0BQ1GvD73vd5vZ8xtOOWZZusomrRsYni85Isr1N13YMRAo8o9vpra3fwLJumKQokVQECAALHAeNwQKkiAYUwuJxOqPPVAkII5ofD9wJoug6EEMjlC8G+wdj+kcLYBtu2ASN0Nxds275z2Wqh+vp3PKJ4sKIoeQIATo4Dx4MA/B/1xwBBskBP3UckSQAAAABJRU5ErkJggg==) no-repeat;background-size:22px}.ReactSlackChat__attachmentIcon___2DWqQ .ReactSlackChat__chat__upload___PAQM-{display:none !important}.ReactSlackChat__chat__file__uploading___bCpsW{position:absolute;color:#fff;background:#22a2e4;bottom:0;left:0;width:84%;height:1.5rem;padding:1rem 1rem 1rem 2rem}@keyframes ReactSlackChat__dots___A0O3t{0%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}40%{color:#fff;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}60%{text-shadow:0.25em 0 0 #fff,0.5em 0 0 rgba(0,0,0,0)}80%{text-shadow:0.25em 0 0 #fff,0.5em 0 0 #fff}100%{text-shadow:0.25em 0 0 #fff,0.5em 0 0 #fff}}.ReactSlackChat__chat__input___1-Hr1{position:absolute;bottom:0;left:0;width:80%;height:45px;padding:0.5rem 1rem 0.5rem 4rem;background-repeat:no-repeat;background-position:1rem 1rem;background-color:#e9eaf3;font-size:1em;color:#2b2342;font-family:Raleway,Helvetica,Arial,sans-serif}.ReactSlackChat__helpHeader___1zfWG{background:#2e7eea;position:relative;padding:20px}.ReactSlackChat__chat-header___2vQpD{position:absolute;top:0;z-index:9999;left:0;width:100%;height:6rem;background:#2e7eea}.ReactSlackChat__gh-emoji___3QKg6{height:24px}.ReactSlackChat__mine___217x2 .ReactSlackChat__chat__message___18STE{color:#2b2342;border:1px solid #dfdfdf;position:relative}.ReactSlackChat__unreadNotificationsBadge___2AH4O{padding:25px;background:white;border-radius:500px;font-family:Raleway, sans-serif;display:inline-block;min-width:10px;font-size:12px;font-weight:700;line-height:1;color:#5c5c5c;white-space:nowrap;vertical-align:middle;background-color:#fefefe;position:absolute;left:300px;bottom:135px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}.ReactSlackChat__unreadNotificationsBadge___2AH4O:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)}.ReactSlackChat__notMine___tnTQI .ReactSlackChat__chat__message___18STE{color:#23244e;background:#e9eaf3}.ReactSlackChat__loading___MG1np:after{content:' .';animation:ReactSlackChat__dots___A0O3t 1s steps(5, end) infinite}\n",
          ''
        ]),
        (A.locals = {
          transition: 'ReactSlackChat__transition___9M_ac',
          card: 'ReactSlackChat__card___3w9UW',
          active: 'ReactSlackChat__active___1osoX',
          card_circle: 'ReactSlackChat__card_circle___2IssD',
          chatActive: 'ReactSlackChat__chatActive___2pqMg',
          helpHeader: 'ReactSlackChat__helpHeader___1zfWG',
          channels: 'ReactSlackChat__channels___1kZGS',
          chat: 'ReactSlackChat__chat___1XmdD',
          subText: 'ReactSlackChat__subText___1hXWw',
          channelActive: 'ReactSlackChat__channelActive___3_EXm',
          contact: 'ReactSlackChat__contact___2WatO',
          contact__photo: 'ReactSlackChat__contact__photo___3tBwT',
          user__contact__photo: 'ReactSlackChat__user__contact__photo___2XFGH',
          user__contact__generated__image:
            'ReactSlackChat__user__contact__generated__image___2QFTN',
          chat__name: 'ReactSlackChat__chat__name___1VEkG',
          chat__contact__photo: 'ReactSlackChat__chat__contact__photo___39wb1',
          channel__header__photo:
            'ReactSlackChat__channel__header__photo___1ya40',
          channel__close__button:
            'ReactSlackChat__channel__close__button___IDR14',
          contact__name: 'ReactSlackChat__contact__name___vJEfC',
          contact__status: 'ReactSlackChat__contact__status___3ZHRm',
          online: 'ReactSlackChat__online___2H97b',
          chatHeader: 'ReactSlackChat__chatHeader___3Tlfe',
          chat__back: 'ReactSlackChat__chat__back___xUDcG',
          chat__status: 'ReactSlackChat__chat__status___1NTQA',
          chat__person: 'ReactSlackChat__chat__person___2u9ec',
          chat__online: 'ReactSlackChat__chat__online___2ZWMl',
          chat__messages: 'ReactSlackChat__chat__messages___1kJlp',
          chat__msgRow: 'ReactSlackChat__chat__msgRow___3j1tU',
          mine: 'ReactSlackChat__mine___217x2',
          notMine: 'ReactSlackChat__notMine___tnTQI',
          chat__message: 'ReactSlackChat__chat__message___18STE',
          mentioned: 'ReactSlackChat__mentioned___3TGpt',
          system__message: 'ReactSlackChat__system__message___3Cs0L',
          attachmentIcon: 'ReactSlackChat__attachmentIcon___2DWqQ',
          chat__upload: 'ReactSlackChat__chat__upload___PAQM-',
          chat__file__uploading:
            'ReactSlackChat__chat__file__uploading___bCpsW',
          chat__input: 'ReactSlackChat__chat__input___1-Hr1',
          'chat-header': 'ReactSlackChat__chat-header___2vQpD',
          'gh-emoji': 'ReactSlackChat__gh-emoji___3QKg6',
          unreadNotificationsBadge:
            'ReactSlackChat__unreadNotificationsBadge___2AH4O',
          loading: 'ReactSlackChat__loading___MG1np',
          dots: 'ReactSlackChat__dots___A0O3t'
        });
    },
    function(e, A, n) {
      'use strict';
      e.exports = function(e) {
        var A = [];
        return (
          (A.toString = function() {
            return this.map(function(A) {
              var n = (function(e, A) {
                var n = e[1] || '',
                  t = e[3];
                if (!t) return n;
                if (A && 'function' == typeof btoa) {
                  var r =
                      ((o = t),
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                        ' */'),
                    a = t.sources.map(function(e) {
                      return '/*# sourceURL=' + t.sourceRoot + e + ' */';
                    });
                  return [n]
                    .concat(a)
                    .concat([r])
                    .join('\n');
                }
                var o;
                return [n].join('\n');
              })(A, e);
              return A[2] ? '@media ' + A[2] + '{' + n + '}' : n;
            }).join('');
          }),
          (A.i = function(e, n) {
            'string' == typeof e && (e = [[null, e, '']]);
            for (var t = {}, r = 0; r < this.length; r++) {
              var a = this[r][0];
              null != a && (t[a] = !0);
            }
            for (r = 0; r < e.length; r++) {
              var o = e[r];
              (null != o[0] && t[o[0]]) ||
                (n && !o[2]
                  ? (o[2] = n)
                  : n && (o[2] = '(' + o[2] + ') and (' + n + ')'),
                A.push(o));
            }
          }),
          A
        );
      };
    },
    function(e, A, n) {
      var t,
        r,
        a = {},
        o =
          ((t = function() {
            return window && document && document.all && !window.atob;
          }),
          function() {
            return void 0 === r && (r = t.apply(this, arguments)), r;
          }),
        i = (function(e) {
          var A = {};
          return function(e, n) {
            if ('function' == typeof e) return e();
            if (void 0 === A[e]) {
              var t = function(e, A) {
                return A ? A.querySelector(e) : document.querySelector(e);
              }.call(this, e, n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              A[e] = t;
            }
            return A[e];
          };
        })(),
        s = null,
        c = 0,
        _ = [],
        l = n(150);
      function u(e, A) {
        for (var n = 0; n < e.length; n++) {
          var t = e[n],
            r = a[t.id];
          if (r) {
            r.refs++;
            for (var o = 0; o < r.parts.length; o++) r.parts[o](t.parts[o]);
            for (; o < t.parts.length; o++) r.parts.push(f(t.parts[o], A));
          } else {
            var i = [];
            for (o = 0; o < t.parts.length; o++) i.push(f(t.parts[o], A));
            a[t.id] = { id: t.id, refs: 1, parts: i };
          }
        }
      }
      function g(e, A) {
        for (var n = [], t = {}, r = 0; r < e.length; r++) {
          var a = e[r],
            o = A.base ? a[0] + A.base : a[0],
            i = { css: a[1], media: a[2], sourceMap: a[3] };
          t[o] ? t[o].parts.push(i) : n.push((t[o] = { id: o, parts: [i] }));
        }
        return n;
      }
      function d(e, A) {
        var n = i(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var t = _[_.length - 1];
        if ('top' === e.insertAt)
          t
            ? t.nextSibling
              ? n.insertBefore(A, t.nextSibling)
              : n.appendChild(A)
            : n.insertBefore(A, n.firstChild),
            _.push(A);
        else if ('bottom' === e.insertAt) n.appendChild(A);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = i(e.insertAt.before, n);
          n.insertBefore(A, r);
        }
      }
      function C(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var A = _.indexOf(e);
        A >= 0 && _.splice(A, 1);
      }
      function p(e) {
        var A = document.createElement('style');
        if (
          (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
          void 0 === e.attrs.nonce)
        ) {
          var t = (function() {
            0;
            return n.nc;
          })();
          t && (e.attrs.nonce = t);
        }
        return I(A, e.attrs), d(e, A), A;
      }
      function I(e, A) {
        Object.keys(A).forEach(function(n) {
          e.setAttribute(n, A[n]);
        });
      }
      function f(e, A) {
        var n, t, r, a;
        if (A.transform && e.css) {
          if (
            !(a =
              'function' == typeof A.transform
                ? A.transform(e.css)
                : A.transform.default(e.css))
          )
            return function() {};
          e.css = a;
        }
        if (A.singleton) {
          var o = c++;
          (n = s || (s = p(A))),
            (t = E.bind(null, n, o, !1)),
            (r = E.bind(null, n, o, !0));
        } else
          e.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((n = (function(e) {
                var A = document.createElement('link');
                return (
                  void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                  (e.attrs.rel = 'stylesheet'),
                  I(A, e.attrs),
                  d(e, A),
                  A
                );
              })(A)),
              (t = function(e, A, n) {
                var t = n.css,
                  r = n.sourceMap,
                  a = void 0 === A.convertToAbsoluteUrls && r;
                (A.convertToAbsoluteUrls || a) && (t = l(t));
                r &&
                  (t +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                    ' */');
                var o = new Blob([t], { type: 'text/css' }),
                  i = e.href;
                (e.href = URL.createObjectURL(o)), i && URL.revokeObjectURL(i);
              }.bind(null, n, A)),
              (r = function() {
                C(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = p(A)),
              (t = function(e, A) {
                var n = A.css,
                  t = A.media;
                t && e.setAttribute('media', t);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n));
                }
              }.bind(null, n)),
              (r = function() {
                C(n);
              }));
        return (
          t(e),
          function(A) {
            if (A) {
              if (
                A.css === e.css &&
                A.media === e.media &&
                A.sourceMap === e.sourceMap
              )
                return;
              t((e = A));
            } else r();
          }
        );
      }
      e.exports = function(e, A) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error(
            'The style-loader cannot be used in a non-browser environment'
          );
        ((A = A || {}).attrs = 'object' == typeof A.attrs ? A.attrs : {}),
          A.singleton || 'boolean' == typeof A.singleton || (A.singleton = o()),
          A.insertInto || (A.insertInto = 'head'),
          A.insertAt || (A.insertAt = 'bottom');
        var n = g(e, A);
        return (
          u(n, A),
          function(e) {
            for (var t = [], r = 0; r < n.length; r++) {
              var o = n[r];
              (i = a[o.id]).refs--, t.push(i);
            }
            e && u(g(e, A), A);
            for (r = 0; r < t.length; r++) {
              var i;
              if (0 === (i = t[r]).refs) {
                for (var s = 0; s < i.parts.length; s++) i.parts[s]();
                delete a[i.id];
              }
            }
          }
        );
      };
      var B,
        h =
          ((B = []),
          function(e, A) {
            return (B[e] = A), B.filter(Boolean).join('\n');
          });
      function E(e, A, n, t) {
        var r = n ? '' : t.css;
        if (e.styleSheet) e.styleSheet.cssText = h(A, r);
        else {
          var a = document.createTextNode(r),
            o = e.childNodes;
          o[A] && e.removeChild(o[A]),
            o.length ? e.insertBefore(a, o[A]) : e.appendChild(a);
        }
      }
    },
    function(e, A) {
      e.exports = function(e) {
        var A = 'undefined' != typeof window && window.location;
        if (!A) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var n = A.protocol + '//' + A.host,
          t = n + A.pathname.replace(/\/[^\/]*$/, '/');
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, A) {
            var r,
              a = A.trim()
                .replace(/^"(.*)"$/, function(e, A) {
                  return A;
                })
                .replace(/^'(.*)'$/, function(e, A) {
                  return A;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
              ? e
              : ((r =
                  0 === a.indexOf('//')
                    ? a
                    : 0 === a.indexOf('/')
                    ? n + a
                    : t + a.replace(/^\.\//, '')),
                'url(' + JSON.stringify(r) + ')');
          }
        );
      };
    },
    function(e, A, n) {
      'use strict';
      n.r(A),
        n.d(A, 'systemHooks', function() {
          return o;
        });
      var t = n(113),
        r = n.n(t),
        a = n(4),
        o = [
          {
            id: 'getCurrentPath',
            action: function() {
              return Promise.resolve(window.location.href);
            }
          },
          {
            id: 'getPlatform',
            action: function() {
              return Promise.resolve(window.navigator.platform);
            }
          },
          {
            id: 'getScreenshot',
            action: function(e) {
              var A = e.apiToken,
                n = e.channel,
                t = e.username;
              return r()(document.body)
                .then(function(e) {
                  for (
                    var r = e.toDataURL(),
                      o = atob(r.split(',')[1]),
                      i = [],
                      s = 0;
                    s < o.length;
                    s++
                  )
                    i.push(o.charCodeAt(s));
                  var c = new Blob([new Uint8Array(i)], { type: 'image/png' });
                  return (
                    (c.name = '$=>@getScreenshot:Screenshot-by-'.concat(t)),
                    Object(a.g)({
                      file: c,
                      title: 'Posted by '.concat(t),
                      apiToken: A,
                      channel: n
                    }).then(function() {
                      return 'Screenshot sent.';
                    })
                  );
                })
                .catch(function(e) {
                  debugLog(
                    'Error capturing screenshot. Check browser support. '.concat(
                      e
                    )
                  );
                });
            }
          }
        ];
    },
    function(e, A, n) {
      'use strict';
      n.r(A);
      var t = {};
      n.r(t),
        n.d(t, 'isHookMessage', function() {
          return h;
        }),
        n.d(t, 'execHooksIfFound', function() {
          return E;
        });
      var r = {};
      n.r(r),
        n.d(r, 'changeColorRecursive', function() {
          return x;
        });
      var a = n(3),
        o = n.n(a),
        i = n(6),
        s = n.n(i),
        c = n(5),
        _ = n.n(c),
        l = n(8),
        u = n(11);
      var g = function e(A) {
          !(function(e, A) {
            if (!(e instanceof A))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.name = A.name),
            (this.color = A.color),
            (this.id = A.id),
            (this.real_name = A.real_name || A.name),
            (this.image = A.profile.image_48);
        },
        d = n(2),
        C = n.n(d),
        p = n(12),
        I = n.n(p),
        f = n(4),
        B = n(7),
        h = function(e) {
          return /\$=>(@.*.):(.*)/.exec(e);
        },
        E = function(e) {
          var A = e.message,
            t = e.customHooks,
            r = e.apiToken,
            a = e.channel,
            o = e.username,
            i = Object(f.a)(A.text),
            s = h(i);
          s &&
            Object(f.i)(A, o) &&
            Object(f.e)(A) &&
            (s[2] &&
              (n(151).systemHooks.map(function(e) {
                e.id === s[2] &&
                  m({ hook: e, apiToken: r, channel: a, username: o });
              }),
              t.map(function(e) {
                e.id === s[2] &&
                  m({ hook: e, apiToken: r, channel: a, username: o });
              })));
        },
        m = function(e) {
          var A = e.hook,
            n = e.apiToken,
            t = e.channel,
            r = e.username;
          return (
            Object(B.debugLog)('Hook trigger found', A.id),
            A.action({ apiToken: n, channel: t, username: r }).then(function(
              e
            ) {
              return (
                Object(B.debugLog)('Action executed. Posting response.'),
                Object(f.h)({
                  text: '$=>@['.concat(A.id, ']:').concat(e),
                  apiToken: n,
                  channel: t,
                  username: r
                })
              );
            })
          );
        },
        x = function e(A, n, t) {
          if (A.style) {
            var r = window.getComputedStyle(A).backgroundColor;
            r && w(r) === n && (A.style.backgroundColor = t);
          }
          if (A.childNodes)
            for (var a = 0; a < A.childNodes.length; a++)
              e(A.childNodes[a], n, t);
        },
        w = function(e) {
          return (e = e.match(
            /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
          )) && 4 === e.length
            ? '#' +
                ('0' + parseInt(e[1], 10).toString(16)).slice(-2) +
                ('0' + parseInt(e[2], 10).toString(16)).slice(-2) +
                ('0' + parseInt(e[3], 10).toString(16)).slice(-2)
            : '';
        };
      function b(e) {
        return (b =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function U() {
        var e = (function(e, A) {
          A || (A = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(A) } })
          );
        })(['Could not connect to Slack Server. Reason: ', '']);
        return (
          (U = function() {
            return e;
          }),
          e
        );
      }
      function v(e, A) {
        for (var n = 0; n < A.length; n++) {
          var t = A[n];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
        }
      }
      function Q(e) {
        return (Q = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function T(e, A) {
        return (T =
          Object.setPrototypeOf ||
          function(e, A) {
            return (e.__proto__ = A), e;
          })(e, A);
      }
      var F = B.debugLog,
        R = B.arraysIdentical,
        P = t.isHookMessage,
        y = t.execHooksIfFound,
        k = r.changeColorRecursive,
        D = (function(e) {
          function A(e) {
            var n, t, r;
            return (
              (function(e, A) {
                if (!(e instanceof A))
                  throw new TypeError('Cannot call a class as a function');
              })(this, A),
              (t = this),
              (r = Q(A).call(this, e)),
              ((n =
                !r || ('object' !== b(r) && 'function' != typeof r)
                  ? O(t)
                  : r).bot = l.rtm.client()),
              (n.state = {
                failed: !1,
                helpText: n.props.helpText,
                onlineUsers: [],
                channels: [],
                messages: [],
                userThreadTss: [],
                postMyMessage: '',
                postMyFile: '',
                chatbox: {
                  active: !1,
                  channelActiveView: !1,
                  chatActiveView: !1
                }
              }),
              (n.apiToken = atob(n.props.apiToken)),
              (n.refreshTime = 5e3),
              (n.chatInitiatedTs = ''),
              (n.activeChannel = []),
              (n.activeChannelInterval = null),
              (n.messageFormatter = { emoji: !1 }),
              (n.fileUploadTitle = 'Posted by '.concat(n.props.botName)),
              (n.themeDefaultColor = '#2e7eea'),
              (n.loadMessages = n.loadMessages.bind(O(n))),
              (n.postMyMessage = n.postMyMessage.bind(O(n))),
              (n.gotNewMessages = n.gotNewMessages.bind(O(n))),
              (n.getUserImg = n.getUserImg.bind(O(n))),
              (n.handleChange = n.handleChange.bind(O(n))),
              (n.handleFileChange = n.handleFileChange.bind(O(n))),
              (n.openChatBox = n.openChatBox.bind(O(n))),
              (n.closeChatBox = n.closeChatBox.bind(O(n))),
              (n.goToChatView = n.goToChatView.bind(O(n))),
              (n.goToChannelView = n.goToChannelView.bind(O(n))),
              (n.displayFormattedMessage = n.displayFormattedMessage.bind(
                O(n)
              )),
              Object(u.load)()
                .then(function() {
                  n.messageFormatter = { emoji: !0 };
                })
                .catch(function(e) {
                  return F('Cant initiate emoji library '.concat(e));
                }),
              n
                .connectBot(O(n))
                .then(function(e) {
                  F('CONNECTED!', 'got data', e),
                    n.props.defaultChannel &&
                      (n.activeChannel = e.channels.filter(function(e) {
                        return e.name === n.props.defaultChannel;
                      })[0]),
                    n.setState({
                      onlineUsers: e.onlineUsers,
                      channels: e.channels
                    });
                })
                .catch(function(e) {
                  F('could not intialize slack bot', e),
                    n.setState({ failed: !0 });
                }),
              n
            );
          }
          var n, t, r;
          return (
            (function(e, A) {
              if ('function' != typeof A && null !== A)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(A && A.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                A && T(e, A);
            })(A, a['Component']),
            (n = A),
            (t = [
              {
                key: 'gotNewMessages',
                value: function(e) {
                  var A = this.state.newMessageNotification + e.length;
                  this.setState({ newMessageNotification: A });
                }
              },
              {
                key: 'displayFormattedMessage',
                value: function(e) {
                  var A = Object(f.a)(e.text),
                    n = e.username === this.props.botName;
                  if (Object(f.f)(e)) {
                    var t = Object(f.c)(e.text);
                    if (t && t[0] && t[1]) {
                      var r = e.text.indexOf(this.fileUploadTitle) > -1,
                        a = t[1].split('/');
                      return o.a.createElement(
                        'div',
                        {
                          className: _()(
                            C.a.chat__msgRow,
                            r ? C.a.mine : C.a.notMine
                          ),
                          key: e.ts
                        },
                        r
                          ? o.a.createElement('img', {
                              src: this.props.userImage,
                              className: C.a.user__contact__photo,
                              alt: 'userIcon'
                            })
                          : null,
                        o.a.createElement(
                          'div',
                          {
                            className: _()(
                              C.a.chat__message,
                              r ? C.a.mine : C.a.notMine
                            )
                          },
                          o.a.createElement(
                            'strong',
                            null,
                            'Sent an Attachment: '
                          ),
                          o.a.createElement('span', null, a[a.length - 1]),
                          o.a.createElement('hr', null),
                          o.a.createElement(
                            'a',
                            { href: t[1], target: '_blank' },
                            o.a.createElement('span', null, 'Click to Download')
                          )
                        ),
                        r ? null : this.getUserImg(e)
                      );
                    }
                    return o.a.createElement(
                      'div',
                      { className: _()(C.a.chat__msgRow), key: e.ts },
                      o.a.createElement('div', {
                        className: _()(C.a.chat__message, C.a.system__message),
                        dangerouslySetInnerHTML: { __html: A }
                      })
                    );
                  }
                  if (P(A)) return null;
                  var i = Object(f.i)(e, this.props.botName),
                    s = Object(f.d)(A);
                  return (
                    this.messageFormatter.emoji &&
                      s &&
                      (A = Object(u.parse)(A)),
                    o.a.createElement(
                      'div',
                      {
                        className: _()(
                          C.a.chat__msgRow,
                          n ? C.a.mine : C.a.notMine
                        ),
                        key: e.ts
                      },
                      n
                        ? o.a.createElement('img', {
                            src: this.props.userImage,
                            className: C.a.user__contact__photo,
                            alt: 'userIcon'
                          })
                        : null,
                      s
                        ? o.a.createElement('div', {
                            className: _()(
                              C.a.chat__message,
                              i ? C.a.mentioned : ''
                            ),
                            dangerouslySetInnerHTML: { __html: A }
                          })
                        : o.a.createElement(
                            'div',
                            {
                              className: _()(
                                C.a.chat__message,
                                i ? C.a.mentioned : ''
                              )
                            },
                            A
                          ),
                      n ? null : this.getUserImg(e)
                    )
                  );
                }
              },
              {
                key: 'isValidOnlineUser',
                value: function(e) {
                  return !e.is_bot;
                }
              },
              {
                key: 'connectBot',
                value: function() {
                  var e = this;
                  return new Promise(function(A, n) {
                    try {
                      e.bot.started(function(n) {
                        F(n);
                        var t = [];
                        n.users.map(function(A) {
                          return e.isValidOnlineUser(A)
                            ? t.push(new g(A))
                            : null;
                        });
                        var r = [];
                        return (
                          n.channels.map(function(A) {
                            e.props.channels.forEach(function(n) {
                              (n.name !== A.name && n.id !== A.id) ||
                                (e.props.defaultChannel === A.name &&
                                  (e.activeChannel = n),
                                (A.icon = n.icon),
                                r.push(A));
                            });
                          }),
                          A({ channels: r, onlineUsers: t })
                        );
                      }),
                        e.bot.listen({ token: e.apiToken }, function(A) {
                          A &&
                            (F(U(), JSON.stringify(A)),
                            e.setState({
                              helpText: 'Slack Connection Error!'
                            }));
                        });
                    } catch (e) {
                      return n(e);
                    }
                  });
                }
              },
              {
                key: 'postMyMessage',
                value: function() {
                  var e = this;
                  return Object(f.h)({
                    text: this.state.postMyMessage,
                    lastThreadTs: this.state.userThreadTss[
                      this.state.userThreadTss.length - 1
                    ],
                    apiToken: this.apiToken,
                    channel: this.activeChannel.id,
                    username: this.props.botName
                  })
                    .then(function(A) {
                      return (
                        e.setState(
                          { postMyMessage: '', sendingLoader: !1 },
                          function() {
                            setTimeout(function() {
                              var e = document.getElementById(
                                'widget-reactSlakChatMessages'
                              );
                              e.scrollTop = e.scrollHeight;
                            }, e.refreshTime);
                          }
                        ),
                        e.forceUpdate()
                      );
                    })
                    .catch(function(e) {
                      return e ? F('failed to post. Err:', e) : null;
                    });
                }
              },
              {
                key: 'loadMessages',
                value: function(e) {
                  var A = this,
                    n = this;
                  this.chatInitiatedTs ||
                    (this.chatInitiatedTs = Date.now() / 1e3);
                  var t = function() {
                    var t = n.state.messages.length;
                    l.channels.history(
                      { token: A.apiToken, channel: e.id },
                      function(r, a) {
                        if (r)
                          return (
                            F(
                              'There was an error loading messages for '
                                .concat(e.name, '. ')
                                .concat(r)
                            ),
                            A.setState({ failed: !0 })
                          );
                        if (
                          (F('got data', a),
                          !R(A.state.messages, a.messages.reverse()))
                        ) {
                          if (0 !== A.state.messages.length) {
                            var o = Object(f.b)(
                              A.state.messages,
                              a.messages,
                              A.props.botName
                            );
                            A.gotNewMessages(o),
                              o &&
                                o.map(function(e) {
                                  return y({
                                    message: e,
                                    username: A.props.botName,
                                    customHooks: A.props.hooks,
                                    apiToken: A.apiToken,
                                    channel: A.activeChannel.id
                                  });
                                });
                          }
                          return (
                            (n.messages = a.messages),
                            A.props.singleUserMode &&
                              (n.messages.length > 0
                                ? (n.messages = n.messages.filter(function(e) {
                                    return e.username === n.props.botName
                                      ? (e.thread_ts &&
                                          -1 ===
                                            A.state.userThreadTss.indexOf(
                                              e.thread_ts
                                            ) &&
                                          A.state.userThreadTss.push(
                                            e.thread_ts
                                          ),
                                        !0)
                                      : -1 !==
                                          A.state.userThreadTss.indexOf(
                                            e.thread_ts
                                          );
                                  }))
                                : (n.messages = [])),
                            A.props.defaultMessage &&
                              n.messages.unshift({
                                text: A.props.defaultMessage,
                                ts: A.chatInitiatedTs
                              }),
                            A.setState({ messages: n.messages }, function() {
                              var e = document.getElementById(
                                'widget-reactSlakChatMessages'
                              );
                              e.scrollTop =
                                e.scrollHeight < e.scrollTop + 600 || 0 === t
                                  ? e.scrollHeight
                                  : e.scrollTop;
                            })
                          );
                        }
                      }
                    );
                  };
                  t(),
                    (this.activeChannelInterval = setInterval(
                      t,
                      this.refreshTime
                    ));
                }
              },
              {
                key: 'getUserImg',
                value: function(e) {
                  var A,
                    n = e.user || e.username;
                  return (
                    this.state.onlineUsers.map(function(e) {
                      e.id === n && (A = e.image);
                    }),
                    A
                      ? o.a.createElement('img', {
                          src: A,
                          className: C.a.chat__contact__photo,
                          alt: 'mentionedUserImg'
                        })
                      : Object(f.e)(e)
                      ? o.a.createElement('img', {
                          src: 'https://robohash.org/'.concat(n, '?set=set2'),
                          className: C.a.chat__contact__photo,
                          alt: n
                        })
                      : Object(f.f)(e)
                      ? o.a.createElement('img', {
                          src: 'https://robohash.org/'.concat(n, '?set=set3'),
                          className: C.a.chat__contact__photo,
                          alt: n
                        })
                      : o.a.createElement('img', {
                          src: 'https://robohash.org/'.concat(n),
                          className: C.a.chat__contact__photo,
                          alt: n
                        })
                  );
                }
              },
              {
                key: 'handleChange',
                value: function(e) {
                  this.setState({ postMyMessage: e.target.value });
                }
              },
              {
                key: 'handleFileChange',
                value: function(e) {
                  var A = this;
                  F('Going to upload', e.target.value, e.target);
                  var n = document.getElementById('chat__upload').files[0];
                  return this.setState(
                    { postMyFile: e.target.value, fileUploadLoader: !0 },
                    function() {
                      return Object(f.g)({
                        file: n,
                        title: A.fileUploadTitle,
                        apiToken: A.apiToken,
                        channel: A.activeChannel.id
                      })
                        .then(function() {
                          return A.setState({
                            postMyFile: '',
                            fileUploadLoader: !1
                          });
                        })
                        .catch(function(e) {
                          F('Could not post file', e);
                        });
                    }
                  );
                }
              },
              {
                key: 'goToChannelView',
                value: function(e) {
                  return (
                    e.stopPropagation(),
                    this.state.chatbox.active &&
                      (this.setState({
                        chatbox: {
                          active: !0,
                          channelActiveView: !0,
                          chatActiveView: !1
                        },
                        messages: []
                      }),
                      (this.activeChannel = []),
                      this.activeChannelInterval &&
                        (clearInterval(this.activeChannelInterval),
                        (this.activeChannelInterval = null))),
                    !1
                  );
                }
              },
              {
                key: 'goToChatView',
                value: function(e, A) {
                  var n = this;
                  return (
                    e.stopPropagation(),
                    this.state.chatbox.active &&
                      ((this.activeChannel = A),
                      this.setState(
                        {
                          chatbox: {
                            active: !0,
                            channelActiveView: !1,
                            chatActiveView: !0
                          }
                        },
                        function() {
                          n.activeChannelInterval &&
                            clearInterval(n.activeChannelInterval),
                            document
                              .getElementById('chat__input__text')
                              .focus(),
                            n.loadMessages(A);
                        }
                      )),
                    !1
                  );
                }
              },
              {
                key: 'openChatBox',
                value: function(e) {
                  var A = this;
                  return (
                    e.stopPropagation(),
                    e.persist(),
                    this.state.chatbox.active ||
                      this.setState(
                        {
                          chatbox: {
                            active: !0,
                            channelActiveView: !0,
                            chatActiveView: !1
                          },
                          newMessageNotification: 0
                        },
                        function() {
                          Object.keys(A.activeChannel).length > 0 &&
                            A.goToChatView(e, A.activeChannel);
                        }
                      ),
                    !1
                  );
                }
              },
              {
                key: 'closeChatBox',
                value: function(e) {
                  return (
                    e.stopPropagation(),
                    this.state.chatbox.active &&
                      this.setState({
                        chatbox: {
                          active: !1,
                          channelActiveView: !1,
                          chatActiveView: !1
                        }
                      }),
                    !1
                  );
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  this.props.themeColor &&
                    k(
                      document.body,
                      this.themeDefaultColor,
                      this.props.themeColor
                    ),
                    addEventListener('click', function(A) {
                      return e.state.chatbox.active ? e.closeChatBox(A) : null;
                    });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  if (this.state.failed) return !1;
                  var A;
                  return o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(
                      'div',
                      null,
                      ((A = this.props.chatStyle),
                      o.a.createElement(
                        'div',
                        null,
                        o.a.createElement(
                          'div',
                          {
                            style: A,
                            className: _()(
                              C.a.card,
                              C.a.transition,
                              e.state.chatbox.active ? C.a.active : '',
                              e.state.chatbox.chatActiveView
                                ? C.a.chatActive
                                : ''
                            ),
                            onClick: e.openChatBox
                          },
                          o.a.createElement(
                            'div',
                            { className: C.a.helpHeader },
                            e.state.newMessageNotification > 0 &&
                              o.a.createElement(
                                'span',
                                { className: C.a.unreadNotificationsBadge },
                                e.state.newMessageNotification
                              ),
                            o.a.createElement(
                              'h2',
                              { className: C.a.transition },
                              e.state.helpText || 'Help?'
                            )
                          ),
                          o.a.createElement('div', {
                            className: _()(C.a.card_circle, C.a.transition)
                          }),
                          o.a.createElement(
                            'div',
                            {
                              className: _()(
                                C.a.channels,
                                C.a.transition,
                                e.state.chatbox.channelActiveView
                                  ? C.a.channelActive
                                  : ''
                              )
                            },
                            e.state.channels.map(function(A) {
                              return o.a.createElement(
                                'div',
                                {
                                  className: C.a.contact,
                                  key: A.id,
                                  onClick: function(n) {
                                    return e.goToChatView(n, A);
                                  }
                                },
                                A.icon
                                  ? o.a.createElement('img', {
                                      src: A.icon,
                                      className: C.a.contact__photo
                                    })
                                  : o.a.createElement('div', {
                                      dangerouslySetInnerHTML: { __html: I.a },
                                      className: C.a.contact__photo
                                    }),
                                o.a.createElement(
                                  'span',
                                  { className: C.a.contact__name },
                                  A.name
                                ),
                                o.a.createElement('span', {
                                  className: _()(
                                    C.a.contact__status,
                                    C.a.online
                                  )
                                })
                              );
                            })
                          ),
                          o.a.createElement(
                            'div',
                            { className: _()(C.a.chat) },
                            o.a.createElement(
                              'div',
                              { className: _()(C.a.chatHeader) },
                              o.a.createElement('span', {
                                className: C.a.chat__back,
                                onClick: e.goToChannelView
                              }),
                              o.a.createElement(
                                'div',
                                { className: C.a.chat__person },
                                o.a.createElement(
                                  'span',
                                  { className: C.a.chat__status },
                                  'status'
                                ),
                                o.a.createElement('span', {
                                  className: _()(C.a.chat__online, C.a.active)
                                }),
                                o.a.createElement(
                                  'span',
                                  { className: C.a.chat__name },
                                  e.activeChannel.name
                                )
                              ),
                              e.activeChannel.icon
                                ? o.a.createElement('img', {
                                    src: e.activeChannel.icon,
                                    className: C.a.channel__header__photo
                                  })
                                : o.a.createElement('div', {
                                    dangerouslySetInnerHTML: { __html: I.a },
                                    className: C.a.channel__header__photo
                                  }),
                              e.props.closeChatButton
                                ? o.a.createElement(
                                    'button',
                                    {
                                      className: C.a.channel__close__button,
                                      onClick: e.closeChatBox
                                    },
                                    '×'
                                  )
                                : null
                            ),
                            o.a.createElement(
                              'div',
                              {
                                className: C.a.chat__messages,
                                id: 'widget-reactSlakChatMessages'
                              },
                              e.state.messages.map(function(A) {
                                return e.displayFormattedMessage(A);
                              })
                            ),
                            o.a.createElement(
                              'div',
                              null,
                              e.state.fileUploadLoader
                                ? o.a.createElement(
                                    'div',
                                    { className: C.a.chat__file__uploading },
                                    o.a.createElement(
                                      'span',
                                      { className: C.a.loading },
                                      'Uploading'
                                    )
                                  )
                                : null,
                              e.state.fileUploadLoader
                                ? null
                                : o.a.createElement(
                                    'div',
                                    null,
                                    o.a.createElement(
                                      'div',
                                      { className: C.a.attachment },
                                      o.a.createElement(
                                        'label',
                                        {
                                          htmlFor: 'chat__upload',
                                          className: C.a.attachmentIcon
                                        },
                                        o.a.createElement('input', {
                                          type: 'file',
                                          id: 'chat__upload',
                                          className: C.a.chat__upload,
                                          value: e.state.postMyFile,
                                          onChange: function(A) {
                                            return e.handleFileChange(A);
                                          }
                                        })
                                      )
                                    ),
                                    o.a.createElement('input', {
                                      type: 'text',
                                      id: 'chat__input__text',
                                      className: C.a.chat__input,
                                      value: e.state.postMyMessage,
                                      placeholder: 'Enter your message...',
                                      onKeyPress: function(A) {
                                        return 'Enter' === A.key
                                          ? e.postMyMessage()
                                          : null;
                                      },
                                      onChange: function(A) {
                                        return e.handleChange(A);
                                      }
                                    })
                                  )
                            )
                          )
                        )
                      ))
                    )
                  );
                }
              }
            ]) && v(n.prototype, t),
            r && v(n, r),
            A
          );
        })();
      D.propTypes = {
        apiToken: s.a.string.isRequired,
        channels: s.a.array.isRequired,
        botName: s.a.string,
        helpText: s.a.string,
        defaultChannel: s.a.string,
        defaultMessage: s.a.string,
        singleUserMode: s.a.bool,
        closeChatButton: s.a.bool,
        themeColor: s.a.string,
        userImage: s.a.string,
        hooks: s.a.array,
        debugMode: s.a.bool
      };
      var M = D;
      n.d(A, 'ReactSlackChat', function() {
        return M;
      });
    }
  ]);
});
