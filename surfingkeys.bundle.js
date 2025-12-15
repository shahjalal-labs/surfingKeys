(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _ || !(!t2 || !t2[p]);
        }, w = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1) return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, O = function(t2, e2) {
          if (S(t2)) return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2) return /* @__PURE__ */ new Date(NaN);
              if (b.u(e2)) return /* @__PURE__ */ new Date();
              if (e2 instanceof Date) return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m2.$g = function(t2, e2, n2) {
            return b.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
              var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c || o2 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[b.p(t2)]();
          }, m2.add = function(r2, f2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b.p(f2), y2 = function(t2) {
              var e2 = O(l2);
              return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c) return this.set(c, this.$M + r2);
            if ($2 === h) return this.set(h, this.$y + r2);
            if ($2 === a) return y2(1);
            if ($2 === o) return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b.s(s2 % 12 || 12, t3, "0");
            }, $2 = f2 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y, function(t3, r3) {
              return r3 || function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h2(n2.monthsShort, a2, c2, 3);
                  case "MMMM":
                    return h2(c2, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h2(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h2(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u2, true);
                  case "A":
                    return $2(s2, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b.s(e2.$s, 2, "0");
                  case "SSS":
                    return b.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              }(t3) || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n;
                break;
              case s:
                $2 = g2 / e;
                break;
              case i:
                $2 = g2 / t;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(), r2 = w(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), k = _.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, O), t2.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      });
    }
  });

  // src/modules/defaultRemapped.js
  api.map("gt", "t");
  api.map("w", "d");
  api.map("tt", "T");
  api.map("ao", ";di");
  api.map("su", ";U");
  api.map("C-1", "g0");
  api.map("aa", "S");
  api.map("<Alt-j>", "l");
  api.map("<Alt-k>", "h");
  api.map("h", "E");
  api.map("gj", "G");
  api.map("gi", "yy", /.*youtube.*/i);
  api.map("l", "R");
  api.lmap("f", "<t>");
  api.map("as", ";fs");
  api.map("u", "<Ctrl-i>");
  api.map("Ctrl+d", "<Ctrl-f>");
  api.unmap("<ctrl-i>");
  api.unmap("p");
  api.unmap("t");
  api.map(",", "<Ctrl-6>");

  // src/settings/theme.js
  api.mapkey("ck", "\u{1F312} Toggle dark mode (CSS inversion)", inverse);
  function inverse() {
    if (!document.getElementById("__sk_darkmode")) {
      const style = document.createElement("style");
      style.id = "__sk_darkmode";
      style.innerHTML = `html { filter: invert(0.92) hue-rotate(180deg); background: #111 !important; } img, video { filter: invert(1) hue-rotate(180deg) !important; }`;
      document.head.appendChild(style);
      api.Front.showBanner("\u{1F31A} Dark mode ON");
    } else {
      document.getElementById("__sk_darkmode").remove();
      api.Front.showBanner("\u{1F31E} Dark mode OFF");
    }
  }
  settings.theme = `
.sk_theme {
    font-family: "Input Sans Condensed", Charcoal, sans-serif;
    font-size: 10pt;
    background: #1e1e2e; /* Base */
    color: #cdd6f4; /* Text */
}
.sk_theme tbody {
    color: #f5e0dc; /* Light text */
}
.sk_theme input {
    color: #cdd6f4; /* Input text */
}
.sk_theme .url {
    color: #89b4aa; /* Blue */
}
.sk_theme .annotation {
    color: #f5c2e7; /* Pink */
}
.sk_theme .omnibar_highlight {
    color: #a6e3a1; /* Green */
}
.sk_theme .omnibar_timestamp {
    color: #fab387; /* Peach */
}
.sk_theme .omnibar_visitcount {
    color: #f9e2af; /* Yellow */
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #181825; /* Darker Base */
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #313244; /* Highlight */
}
#sk_status, #sk_find {
    font-size: 20pt;
    background: #1e1e2e; /* Base */
    color: #cdd6f4; /* Text */
}`;

  // src/settings/settings.js
  api.Hints.setCharacters("asdjkluiopwermnhgzx,cvq'");
  settings.startToShowEmoji = 1;

  // src/modules/opener/opener.js
  api.mapkey("ad", "Dotfiles", function() {
    window.open(
      "https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs",
      "_blank"
    );
  });
  api.mapkey("ay", "youtube opening", function() {
    window.open("https://www.youtube.com/", "_blank");
  });
  api.mapkey("sb", "Open blank page", function() {
    window.open("https://blank.page/", "_blank");
  });

  // src/modules/opener/aiOpener.js
  api.mapkey("oac", "Open ChatGPT chk", function() {
    let newTab = window.open("https://chatgpt.com/", "_blank");
    console.log(newTab, ".surfingkeys.js", 240);
    setInterval(() => {
      console.log(`hellow`);
    }, 2e3);
  });
  api.mapkey("oap", "perplexity ai", function() {
    if (window.location.hostname.includes("perplexity")) {
      window.location.href = "https://www.perplexity.ai/";
    } else {
      window.open("https://www.perplexity.ai/", "_blank");
    }
  });
  api.mapkey("oaj", "gemini ai", function() {
    if (window.location.hostname.includes("gemini")) {
      window.location.href = "https://gemini.google.com/app";
    } else {
      window.open("https://gemini.google.com/app", "_blank");
    }
  });
  api.mapkey("oad", "Deep ai", function() {
    window.open("https://deepai.org/dashboard/images", "_blank");
  });
  api.mapkey("oas", "Open deepseek", function() {
    if (window.location.hostname.includes("deepseek")) {
      window.location.href = "https://chat.deepseek.com";
    } else {
      window.open("https://chat.deepseek.com/", "_blank");
    }
  });
  api.mapkey("oaq", "Open claude ai", function() {
    window.open("https://claude.ai/new");
  });
  api.mapkey("oak", "Chk claude", function() {
    if (window.location.hostname.includes("claude.ai")) {
      window.location.href = "/new";
    } else {
      window.open("https://claude.ai/new", "_blank");
    }
  });
  api.mapkey("oag", "open grok ai", function() {
    if (window.location.hostname.includes("grok")) {
      window.location.href = "https://grok.com/";
    } else {
      window.open("https://grok.com/", "_blank");
    }
  });
  api.mapkey("oaa", "open google audio", function() {
    if (window.location.hostname.includes("aistudio")) {
      window.location.href = "https://aistudio.google.com/live";
    } else {
      window.open("https://aistudio.google.com/live", "_blank");
    }
  });

  // src/modules/opener/webDevOpener.js
  api.mapkey("ocm", "open mongodb", function() {
    if (window.location.hostname.includes("mongodb")) {
      window.location.href = "https://cloud.mongodb.com";
    } else {
      window.open("https://cloud.mongodb.com", "_blank");
    }
  });
  api.mapkey("oct", "open tailwind vite ", function() {
    if (window.location.hostname.includes("tailwindcss")) {
      window.location.href = "https://tailwindcss.com/docs/installation/using-vite";
    } else {
      window.open(
        "https://tailwindcss.com/docs/installation/using-vite",
        "_blank"
      );
    }
  });
  api.mapkey("ocd", "open daisyUI", function() {
    if (window.location.hostname.includes("daisyui")) {
      window.location.href = "https://daisyui.com/docs/install/vite/";
    } else {
      window.open("https://daisyui.com/docs/install/vite/", "_blank");
    }
  });
  api.mapkey("ocl", "open localhost", function() {
    if (window.location.hostname.includes("localhost")) {
      window.open("http://localhost:5174/", "_blank");
    } else {
      window.open("http://localhost:5173/", "_blank");
    }
  });
  api.mapkey("ocn", "open nextjs Docs", function() {
    if (window.location.hostname.includes("nextjs.org")) {
      window.location.href = "https://nextjs.org/docs";
    } else {
      window.open("https://nextjs.org/docs", "_blank");
    }
  });
  api.mapkey("ocf", "Fiverr Message Rewriter", function() {
    if (window.location.hostname.includes("relevance-phi.vercel.app")) {
      window.location.href = "https://relevance-phi.vercel.app/";
    } else {
      window.open("https://relevance-phi.vercel.app/", "_blank");
    }
  });

  // src/modules/opener/socialOpener.js
  api.mapkey("ouc", "open gContacts", function() {
    if (window.location.hostname.includes("contacts")) {
      window.location.href = "https://contacts.google.com/new";
    } else {
      window.location.href = "https://contacts.google.com/";
      window.open("https://contacts.google.com/new", "_blank");
    }
  });
  api.mapkey("oux", "open twitter @shahjalal_labs", function() {
    if (window.location.hostname.includes("x.com")) {
      window.location.href = "https://x.com/shahjalal_labs ";
    } else {
      window.open("https://x.com/shahjalal_labs ", "_blank");
    }
  });
  api.mapkey("ouf", "Open Facebook", function() {
    window.open("https://www.facebook.com", "_blank");
  });
  api.mapkey("oue", "email inbox opening", function() {
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
  });
  api.mapkey("ouw", "whatsApp", function() {
    window.open("https://web.whatsapp.com/", "_blank");
  });
  api.mapkey("oul", "open linkedin", function() {
    if (window.location.hostname.includes("linkedin")) {
      window.location.href = "https://www.linkedin.com/in/shahjalal-labs/";
    } else {
      window.open("https://www.linkedin.com/in/shahjalal-labs/", "_blank");
    }
  });
  api.mapkey("oud", "open ejp discord sesssion announcement", function() {
    if (window.location.hostname.includes("discord")) {
      window.location.href = "https://discord.com/channels/1391805056957026364/1391809512100462592";
    } else {
      window.open(
        "https://discord.com/channels/1391805056957026364/1391809512100462592",
        "_blank"
      );
    }
  });
  api.mapkey("anz", "open ejp discord sesssion announcement", function() {
    if (window.location.hostname.includes("zoom")) {
      window.location.href = "https://www.zoom.us/join";
    } else {
      window.open("https://www.zoom.us/profile", "_blank");
    }
  });
  api.mapkey("ouy", "open yt @shahjalal-labs", function() {
    if (window.location.hostname.includes("youtube")) {
      window.location.href = "https://www.youtube.com/@shahjalal-labs";
    } else {
      window.open("https://www.youtube.com/@shahjalal-labs", "_blank");
    }
  });
  api.mapkey("oup", "open portfolio shahjalal-labs", function() {
    if (window.location.hostname.includes("shahjalal-labs.surge.sh")) {
      window.location.href = "https://shahjalal-labs.surge.sh";
    } else {
      window.open("https://shahjalal-labs.surge.sh", "_blank");
    }
  });
  api.mapkey("our", "open resume root", function() {
    if (window.location.hostname.includes("drive.google.com")) {
      window.location.href = "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view";
    } else {
      window.open(
        "https://drive.google.com/file/d/1eKx1OO7p2tvSIxPKD1aDHu6sgPkVcJwN/view",
        "_blank"
      );
    }
  });
  api.mapkey("out", "open ms team live", function() {
    if (window.location.hostname.includes("teams.live.com")) {
      window.location.href = "https://teams.live.com/v2/";
    } else {
      window.open("https://teams.live.com/v2/", "_blank");
    }
  });

  // src/modules/opener/phOpener.js
  api.mapkey("pso", "scribble l1b10", () => {
    window.open(
      "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup",
      "_blank"
    );
  });
  api.mapkey("pwh", "HELP DESK", function() {
    window.open("https://helpdesk.programming-hero.com/", "_blank");
  });
  api.mapkey("si", "L2B4Web", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-36-11-displaying-blogs-and-handling-loading-with-rtk-query-module-summary",
      "_blank"
    );
  });
  api.mapkey("sk", "outline L2B4", function() {
    window.open(
      "https://web.programming-hero.com/676fa61320dff5186afcd780/course-outline",
      "_blank"
    );
  });
  api.mapkey("ae", "Conceptual Level1 Batch 10", function() {
    window.open("https://web.programming-hero.com/conceptual-session", "_blank");
  });
  api.mapkey("acd", "Conceptual Level1 Batch 11", function() {
    window.open("https://web.programming-hero.com/conceptual-session", "_blank");
  });
  api.mapkey("sr", "redux", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-21-1-project-initialization-and-redux-store-setup-recap",
      "_blank"
    );
  });
  api.mapkey("sp", "pre requisite level2", function() {
    window.open(
      "https://web.programming-hero.com/next-level-prerequisites-batch4/video/next-level-prerequisites-batch4-45-8-active-route-loading-spinner-uselocation-usenavigation",
      "_blank"
    );
  });
  api.mapkey("s4", "L2B4 typescript module 2", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing"
    );
  });
  api.mapkey("pwj", "Level1 Batch 11", function() {
    window.open(
      "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
      "_blank"
    );
  });
  api.mapkey("php", "open ph podcast", function() {
    if (window.location.hostname.includes("youtube.com") && window.location.pathname.toLowerCase().includes("@ProgrammingHeroCommunity/podcasts")) {
      window.location.href = "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts";
    } else {
      window.open(
        "https://www.youtube.com/@ProgrammingHeroCommunity/podcasts",
        "_blank"
      );
    }
  });

  // src/modules/opener/islamicOpener.js
  api.mapkey("sj", "Open Wedding Nasheed", function() {
    window.open(
      "https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds",
      "_blank"
    );
  });
  api.mapkey("opq", "Open Quran", function() {
    window.open("https://quran.com", "_blank");
  });
  api.mapkey("ops", "open shariyah solution ahmadullah", function() {
    if (window.location.hostname.includes("youtube.com") && window.location.pathname.toLowerCase().includes("@sheikhahmadullahofficial")) {
      window.location.href = "https://www.youtube.com/@sheikhahmadullahofficial/streams";
    } else {
      window.open(
        "https://www.youtube.com/@sheikhahmadullahofficial/streams",
        "_blank"
      );
    }
  });

  // src/modules/yank/imgYank.js
  api.mapkey("ci", "\u{1F5BC}\uFE0F Copy image URL under cursor or focused image", () => {
    const img = document.querySelector("img:hover") || document.activeElement;
    if (img && img.tagName === "IMG") {
      const url = img.src;
      if (url) {
        api.Clipboard.write(url);
      }
    }
  });
  var copyLoopActive = false;
  api.mapkey(
    "cl",
    "\u{1F501} Copy multiple image URLs with hints loop",
    function startCopyLoop() {
      copyLoopActive = true;
      const copyImageWithHints = () => {
        if (!copyLoopActive) return;
        api.Hints.create("img[src]", function(el) {
          api.Clipboard.write(el.src);
          setTimeout(copyImageWithHints, 300);
        });
      };
      copyImageWithHints();
    }
  );
  api.mapkey("cj", "\u{1F4F7} Copy image URL using hints", function() {
    api.Hints.create("img[src]", function(el) {
      api.Clipboard.write(el.src);
    });
  });
  api.mapkey("cm", "\u{1F4C4} Copy image as Markdown", function() {
    api.Hints.create("img[src]", function(el) {
      const alt = el.alt || "image";
      const markdown = `![${alt}](${el.src})`;
      api.Clipboard.write(markdown);
      api.Front.showPopup("\u2705 Copied as Markdown!");
    });
  });
  api.mapkey("cy", "Copy multiple image URLs and open tabs", () => {
    api.Hints.create(
      "img[src]",
      (el) => {
        api.Clipboard.write(el.src);
        api.tabOpenLink(el.src);
      },
      { multipleHits: true }
    );
  });
  api.mapkey("gI", "#7View image in new tab", function() {
    api.Hints.create("img", (i) => api.tabOpenLink(i.src));
  });

  // src/modules/hoverClick/hoverClick.js
  api.mapkey("cb", "\u{1F501} Persistent click hints", function repeatClickHints() {
    api.Hints.create(
      "a, button, select, input, textarea, summary, *[onclick], *[contenteditable=true], *.jfk-button, *.goog-flat-menu-button, *[role=button], *[role=link], *[role=menuitem], *[role=option], *[role=switch], *[role=tab], *[role=checkbox], *[role=combobox], *[role=menuitemcheckbox], *[role=menuitemradio]",
      // { tabbed: true },
      function(el) {
        el.click();
        setTimeout(() => {
          repeatClickHints();
        }, 200);
      }
    );
  });
  api.mapkey("ch", "\u{1F5B1}\uFE0F Smart hover using hints", function() {
    api.Hints.create("*", function(el) {
      ["mouseover", "mouseenter", "focus"].forEach((type) => {
        el.dispatchEvent(
          new MouseEvent(type, { bubbles: true, cancelable: true, view: window })
        );
      });
    });
  });
  api.mapkey("ca", "\u{1F50D} Reveal hidden elements using hints", function() {
    api.Hints.create("*", function(el) {
      el.style.display = "block";
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.hidden = false;
      api.Front.showPopup("\u2705 Revealed element: " + el.tagName);
    });
  });
  api.mapkey("of", "#8Open URL in incognito window", function() {
    api.Hints.create("*[href]", function(element) {
      api?.RUNTIME("openIncognito", {
        url: element.href
      });
    });
  });

  // src/modules/testDate.js
  var import_dayjs = __toESM(require_dayjs_min());
  function showCurrentDate() {
    const now = (0, import_dayjs.default)().format("YYYY-MM-DD HH:mm:ss");
    api.Front.showBanner(`\u{1F552} Now: ${now}`);
  }
  api.mapkey("g,", "\u{1F552} Show current date", showCurrentDate);

  // node_modules/fuse.js/dist/fuse.mjs
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
  var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        let obj = createKey(key);
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }
    return { path, id, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index]) {
        list.push(obj2);
      } else {
        let key = path2[index];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], path2, index + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index + 1);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When `true`, the algorithm will ignore diacritics (accents) in comparisons
    ignoreDiacritics: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = {
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
  };
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n = parseFloat(Math.round(norm2 * m) / m);
        cache.set(numTokens, n);
        return n;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i = idx, len = this.size(); i < len; i += 1) {
        this.records[i].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray(value2)) {
              value2.forEach((item, k) => {
                stack.push({
                  nestedArrIndex: k,
                  value: item
                });
              });
            } else ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for (let len = matchmask.length; i < len; i += 1) {
      let match = matchmask[i];
      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location: location2 = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location2, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore$1(pattern, {
        currentLocation: index,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;
      if (computeMatches) {
        let i = 0;
        while (i < patternLen) {
          matchMask[index + i] = 1;
          i += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i = 0; i < patternLen; i += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern, {
          errors: i,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i) - 1;
      for (let j = finish; j >= start; j -= 1) {
        let currentLocation = j - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
        if (i) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }
        if (bitArr[j] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: i,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern, {
        errors: i + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i = 0, len = pattern.length; i < len; i += 1) {
      const char = pattern.charAt(i);
      mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
  }
  var stripDiacritics = String.prototype.normalize ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "") : (str) => str;
  var BitapSearch = class {
    constructor(pattern, {
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location: location2,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i < end) {
          addChunk(this.pattern.substr(i, MAX_BITS), i);
          i += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location: location2,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern, alphabet, {
          location: location2 + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index = text.indexOf(this.pattern);
      const isMatch = index === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern, {
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location: location2,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location2 = 0;
      let index;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index = text.indexOf(this.pattern, location2)) > -1) {
        location2 = index + patternLen;
        indices.push([index, location2 - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i = 0, len = query.length; i < len; i += 1) {
        const queryItem = query[i];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location: location2 = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        ignoreDiacritics,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location: location2,
        threshold,
        distance
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i = 0, qLen = query.length; i < qLen; i += 1) {
        const searchers2 = query[i];
        allIndices.length = 0;
        numMatches = 0;
        for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
          const searcher = searchers2[j];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
      let searcherClass = registeredSearchers[i];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options, { auto = true } = {}) {
    const next = (query2) => {
      let keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options = {}, index) {
      this.options = { ...Config, ...options };
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }
    setCollection(docs, index) {
      this._docs = docs;
      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i = 0, len = this._docs.length; i < len; i += 1) {
        const doc = this._docs[i];
        if (predicate(doc, i)) {
          this.removeAt(i);
          i -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i = 0, len = node.children.length; i < len; i += 1) {
          const child = node.children[i];
          const result = evaluate(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "7.1.0";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }

  // src/modules/fzfFinder.js
  var historyStore = [
    "open https://github.com/shahjalal-labs",
    "scroll down",
    "copy image url",
    "evaluate Surfingkeys UI",
    "jump to GitHub user profile",
    "highlight text in markdown format",
    "persistent hint click"
  ];
  function openFuzzyFinder() {
    const container = document.createElement("div");
    container.id = "fzf-finder";
    Object.assign(container.style, {
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#1f2937",
      // bg-gray-800
      color: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      zIndex: "9999",
      width: "500px",
      maxHeight: "60vh",
      padding: "16px",
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    });
    const input = document.createElement("input");
    Object.assign(input.style, {
      width: "100%",
      padding: "8px 12px",
      marginBottom: "12px",
      borderRadius: "8px",
      backgroundColor: "#111827",
      // bg-gray-900
      color: "#ffffff",
      border: "1px solid #4b5563",
      // border-gray-600
      outline: "none",
      fontSize: "14px",
      boxSizing: "border-box"
    });
    input.placeholder = "\u{1F50D} Fuzzy Search History...";
    const resultsContainer = document.createElement("div");
    Object.assign(resultsContainer.style, {
      overflowY: "auto",
      maxHeight: "40vh",
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    });
    container.appendChild(input);
    container.appendChild(resultsContainer);
    document.body.appendChild(container);
    input.focus();
    const fuse = new Fuse(historyStore, { includeScore: true, threshold: 0.4 });
    const renderResults = (query) => {
      resultsContainer.innerHTML = "";
      const results = fuse.search(query || "").slice(0, 10);
      results.forEach((r, idx) => {
        const div = document.createElement("div");
        Object.assign(div.style, {
          padding: "8px 12px",
          backgroundColor: "#374151",
          // bg-gray-700
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "13px",
          userSelect: "none"
        });
        div.textContent = r.item;
        div.tabIndex = idx;
        div.onmouseenter = () => {
          div.style.backgroundColor = "#4b5563";
        };
        div.onmouseleave = () => {
          div.style.backgroundColor = "#374151";
        };
        div.onclick = () => {
          api.Front.showBanner("\u2705 Selected: " + r.item);
          container.remove();
        };
        resultsContainer.appendChild(div);
      });
    };
    renderResults("");
    input.oninput = (e) => renderResults(e.target.value);
    input.onkeydown = (e) => {
      if (e.key === "Escape") {
        container.remove();
      }
    };
  }
  api.mapkey("zf", "\u{1F50D} Fuzzy search history like fzf", () => {
    openFuzzyFinder();
  });

  // src/modules/opener/resourceOpener.js
  var openGDrive = () => {
    if (window.location.hostname.includes("drive")) {
      window.location.href = "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp";
    } else {
      window.open(
        "https://drive.google.com/drive/u/0/folders/1zjnO2RfqwIhV_95-7nMnTPi1-2q5m1Cp",
        "_blank"
      );
    }
  };
  api.mapkey("ord", "open GDrive Resource", openGDrive);
  var openImgbb = () => {
    if (window.location.hostname.includes("imgbb") || window.location.hostname.includes("ibb")) {
      window.location.href = "https://md-shahjalal.imgbb.com/";
    } else {
      window.open("https://md-shahjalal.imgbb.com/", "_blank");
    }
  };
  api.mapkey("ori", "open imgbb Resource", openImgbb);
  var openJpSheet = () => {
    if (window.location.hostname.includes("docs")) {
      window.location.href = "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628";
    } else {
      window.open(
        "https://docs.google.com/spreadsheets/d/1OA2UGMcqJc6zST3BVR70qUqyMnjftBuFHLGP7sHR0z8/edit?gid=2099620628#gid=2099620628",
        "_blank"
      );
    }
  };
  api.mapkey("ors", "open Jp Sheet", openJpSheet);
  var openJpMasumVaiSheet = () => {
    if (window.location.hostname.includes("docs")) {
      window.location.href = "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0";
    } else {
      window.open(
        "https://docs.google.com/spreadsheets/d/1MVvvT7qvJZEmejn9vdfPyOnjLFCxMpqUT92eClzV9PE/edit?gid=0#gid=0",
        "_blank"
      );
    }
  };
  api.mapkey("orm", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);
  api.mapkey("ork", "open Jp Masum Vai Sheet", openJpMasumVaiSheet);
  var openPeopleDesk = () => {
    if (window.location.hostname.includes("app.peopledesk.io")) {
      window.location.href = "https://app.peopledesk.io/dashboard/employee";
    } else {
      window.open("https://app.peopledesk.io/dashboard/employee", "_blank");
    }
  };
  api.mapkey("orp", "openPeopleDesk", openPeopleDesk);
  var openTeamUnitySheets = () => {
    if (window.location.hostname.includes("docs")) {
      window.location.href = "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421";
    } else {
      window.open(
        "https://docs.google.com/spreadsheets/d/1nGC-g1KKlB4soo28RgKguGwghvV0CCF7h_ahhUzjpFw/edit?gid=568784421#gid=568784421",
        "_blank"
      );
    }
  };
  api.mapkey("oru", "open Team Unity Sheets", openTeamUnitySheets);

  // src/modules/yank/urlYanker.js
  var { mapkey, Clipboard } = api;
  function copyUrlParts(n) {
    const { origin, pathname } = window.location;
    const parts = pathname.split("/").filter(Boolean);
    let toCopy = "";
    if (n === 0) {
      toCopy = origin;
    } else if (parts.length === 0) {
      return;
    } else {
      const sliced = parts.slice(-n);
      toCopy = sliced.join("/");
    }
    Clipboard.write(toCopy);
  }
  mapkey("ag0", "Copy root URL", () => copyUrlParts(0));
  mapkey("ag1", "Copy last 1 path segment", () => copyUrlParts(1));
  mapkey("ag2", "Copy last 2 path segments", () => copyUrlParts(2));
  mapkey("ag3", "Copy last 3 path segments", () => copyUrlParts(3));
  mapkey("ag4", "Copy last 4 path segments", () => copyUrlParts(4));
  mapkey("ag,", "Open root URL in new tab", () => {
    const root = window.location.origin;
    window.open(root, "_blank");
  });
  function appendClipboardToPath(n = 0) {
    try {
      const { origin, pathname } = window.location;
      const segments = pathname.split("/").filter(Boolean);
      const base = n > 0 ? segments.slice(0, n).join("/") : "";
      Clipboard.read((clip) => {
        let clipContent = "";
        if (typeof clip === "string") {
          clipContent = clip;
        } else if (clip?.data) {
          clipContent = String(clip.data);
        } else {
          throw new Error("Clipboard content is not a string");
        }
        let clipPath = clipContent;
        try {
          if (clipContent.includes("://")) {
            const url = new URL(clipContent);
            clipPath = url.pathname + url.search + url.hash;
          }
        } catch (e) {
        }
        const normalize = (path) => path.replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/");
        const cleanBase = normalize(base);
        const cleanClip = normalize(clipPath);
        const newPath = [cleanBase, cleanClip].filter((p) => p.length > 0).join("/");
        const finalUrl = new URL(newPath, origin).href;
        api.Front.showBanner(`\u2197\uFE0F Redirecting to: ${finalUrl}`);
        window.location.href = finalUrl;
      });
    } catch (error) {
      console.error("URL Manipulation Error:", error);
      api.Front.showBanner(`\u274C Error: ${error.message}`);
    }
  }
  api.mapkey(
    "ap,",
    "Append clipboard to root path",
    () => appendClipboardToPath(0)
  );
  for (let i = 1; i <= 3; i++) {
    api.mapkey(
      `ap${i}`,
      `Append clipboard to first ${i} path segments`,
      () => appendClipboardToPath(i)
    );
  }
  api.mapkey("aph", "Show URL manipulator help", () => {
    api.Front.showPopup(`
    <div style="padding:15px;font-family:system-ui;max-width:500px">
      <h3>URL Path Manipulator Help</h3>
      <p><strong>ap,</strong>: Append clipboard to domain root</p>
      <p><strong>ap1-ap9</strong>: Append after N path segments</p>
      <p><strong>Examples</strong>:</p>
      <ul>
        <li>URL: <code>http://localhost:5173/dashboard/tourist</code></li>
        <li>Clipboard: <code>manage-profile</code></li>
        <li><code>ap,</code> \u2192 <code>http://localhost:5173/manage-profile</code></li>
        <li><code>ap1</code> \u2192 <code>http://localhost:5173/dashboard/manage-profile</code></li>
        <li><code>ap2</code> \u2192 <code>http://localhost:5173/dashboard/tourist/manage-profile</code></li>
      </ul>
      <p>Handles URLs in clipboard, relative paths, and special characters</p>
    </div>
  `);
  });
  api.mapkey("ar", "\u{1F504} Replace current URL with clipboard content", function() {
    api.Clipboard.read((clipContent) => {
      try {
        let url = "";
        if (typeof clipContent === "string") {
          url = clipContent;
        } else if (clipContent?.data) {
          url = String(clipContent.data);
        } else {
          throw new Error("Clipboard content is not a valid string");
        }
        url = url.trim();
        if (!url) {
          throw new Error("Clipboard is empty");
        }
        if (!url.match(/^https?:\/\//)) {
          if (url.includes("localhost") || url.match(/^\d+\.\d+\.\d+\.\d+/)) {
            url = `http://${url}`;
          } else {
            url = `https://${url}`;
          }
        }
        new URL(url);
        window.location.href = url;
      } catch (error) {
        console.error("URL Replace Error:", error);
      }
    });
  });
  var formData = {
    email: "your@email.com",
    name: "Your Name",
    phone: "123-456-7890",
    github: "https://github.com/shahjalal-labs",
    linkedin: "https://linkedin.com/in/shahjalal-labs"
  };
  api.mapkey("zf", "\u26A1 Auto-fill form fields", function() {
    const inputs = document.querySelectorAll("input, textarea, select");
    let filled = 0;
    inputs.forEach((input) => {
      const type = input.type?.toLowerCase();
      const name = input.name?.toLowerCase();
      const id = input.id?.toLowerCase();
      const placeholder = input.placeholder?.toLowerCase();
      if (type === "email" || name?.includes("email") || id?.includes("email")) {
        input.value = formData.email;
        filled++;
      } else if (name?.includes("name") || id?.includes("name") || placeholder?.includes("name")) {
        input.value = formData.name;
        filled++;
      } else if (type === "tel" || name?.includes("phone") || id?.includes("phone")) {
        input.value = formData.phone;
        filled++;
      }
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
    api.Front.showBanner(`\u26A1 Auto-filled ${filled} fields`);
  });
  api.mapkey("zt", "\u26A1 Fuzzy tab switcher", function() {
    api.RUNTIME("getTabs", {}, (response) => {
      const tabs = response.tabs;
      const container = document.createElement("div");
      container.id = "tab-switcher";
      Object.assign(container.style, {
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#0f172a",
        color: "#e2e8f0",
        borderRadius: "12px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        zIndex: "10000",
        width: "700px",
        maxHeight: "70vh",
        padding: "20px",
        overflow: "hidden",
        fontFamily: "JetBrains Mono, monospace",
        border: "1px solid #334155"
      });
      const input = document.createElement("input");
      Object.assign(input.style, {
        width: "100%",
        padding: "12px 16px",
        marginBottom: "16px",
        borderRadius: "8px",
        backgroundColor: "#1e293b",
        color: "#e2e8f0",
        border: "1px solid #475569",
        outline: "none",
        fontSize: "16px",
        boxSizing: "border-box",
        fontFamily: "JetBrains Mono, monospace"
      });
      input.placeholder = "\u{1F50D} Search tabs...";
      const resultsList = document.createElement("div");
      Object.assign(resultsList.style, {
        overflowY: "auto",
        maxHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      });
      let selectedIndex = 0;
      const renderTabs = (searchTabs) => {
        resultsList.innerHTML = "";
        searchTabs.slice(0, 15).forEach((tab, idx) => {
          const div = document.createElement("div");
          Object.assign(div.style, {
            padding: "12px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: idx === selectedIndex ? "#3b82f6" : "#334155",
            color: idx === selectedIndex ? "#ffffff" : "#e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            transition: "all 0.15s ease"
          });
          const favicon = document.createElement("img");
          favicon.src = tab.favIconUrl || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3C/svg%3E";
          favicon.style.width = "16px";
          favicon.style.height = "16px";
          const title = document.createElement("span");
          title.style.fontWeight = "500";
          title.textContent = tab.title.substring(0, 60);
          const url = document.createElement("span");
          url.style.opacity = "0.7";
          url.style.fontSize = "12px";
          url.textContent = tab.url.substring(0, 80);
          div.appendChild(favicon);
          div.appendChild(title);
          div.appendChild(url);
          div.onclick = () => {
            api.RUNTIME("focusTab", { tabId: tab.id });
            container.remove();
          };
          resultsList.appendChild(div);
        });
      };
      const filterTabs = (query) => {
        if (!query) return tabs;
        return tabs.filter(
          (tab) => tab.title.toLowerCase().includes(query.toLowerCase()) || tab.url.toLowerCase().includes(query.toLowerCase())
        );
      };
      input.oninput = (e) => {
        const filtered = filterTabs(e.target.value);
        selectedIndex = 0;
        renderTabs(filtered);
      };
      input.onkeydown = (e) => {
        const filtered = filterTabs(input.value);
        if (e.key === "ArrowDown") {
          e.preventDefault();
          selectedIndex = Math.min(
            selectedIndex + 1,
            Math.min(filtered.length - 1, 14)
          );
          renderTabs(filtered);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          selectedIndex = Math.max(selectedIndex - 1, 0);
          renderTabs(filtered);
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filtered[selectedIndex]) {
            api.RUNTIME("focusTab", { tabId: filtered[selectedIndex].id });
            container.remove();
          }
        } else if (e.key === "Escape") {
          container.remove();
        }
      };
      container.appendChild(input);
      container.appendChild(resultsList);
      document.body.appendChild(container);
      input.focus();
      renderTabs(tabs);
    });
  });

  // src/modules/opener/PH/PhHelp/phHelp.js
  api.mapkey("phg", "PH b11 github repositories", function() {
    window.open("https://github.com/ProgrammingHero1?tab=repositories", "_blank");
  });
  api.mapkey("phc", "fbLevel1", function() {
    window.open("https://www.facebook.com/groups/programmingHero", "_blank");
  });
  api.mapkey("ph2", "fbLevel2", function() {
    window.open("https://www.facebook.com/groups/phapollo4", "_blank");
  });
  api.mapkey("phf", "fb  Level1 Batch 11 support group", function() {
    window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
  });
  api.mapkey("phs", "SCIC", function() {
    if (window.location.pathname.includes("/groups/scic11/announcements")) {
      console.log(window.location.pathname, "pathname");
      window.location.href = "https://www.facebook.com/groups/scic11/";
    } else {
      window.open(
        "https://www.facebook.com/groups/scic11/announcements",
        "_blank"
      );
    }
  });

  // src/modules/opener/PH/PhWeb/phWeb.js
  api.mapkey("pws", "SCIC", function() {
    if (window.location.pathname.includes("/groups/scic11/announcements")) {
      console.log(window.location.pathname, "pathname");
      window.location.href = "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic";
    } else {
      window.open(
        "https://web.programming-hero.com/scic-11/video/scic-11-0-2-tips-to-get-the-best-out-of-scic",
        "_blank"
      );
    }
  });
  api.mapkey("pwo", "outline SCIC", function() {
    window.open(
      "https://web.programming-hero.com/688f7b564965ce7350b23f35/course-outline",
      "_blank"
    );
  });

  // src/modules/tab.js
  var { mapkey: mapkey2, RUNTIME } = api;
  api.map("tj", "g0");
  api.map("tk", "g$");
  api.map("th", "E");
  for (let i = 1; i <= 9; i++) {
    api.mapkey(`t${i}`, `\u{1F522} Jump to tab ${i}`, function() {
      api.RUNTIME(
        "getTabs",
        { queryInfo: { currentWindow: true } },
        (response) => {
          if (response.tabs && response.tabs[i - 1]) {
            const targetTab = response.tabs[i - 1];
            api.RUNTIME("focusTab", { tabId: targetTab.id }, () => {
              api.Front.showBanner(`\u{1F522} Jumped to tab ${i}`);
            });
          } else {
            api.Front.showBanner(`\u274C Tab ${i} doesn't exist`);
          }
        }
      );
    });
  }
  api.map("tc", "x");
  api.map("td", "yt");
  api.map("th", "<<");
  api.map("tl", ">>");
  console.log("\u{1F680} Console error-free tab navigation loaded!");
  mapkey2("sxx", "Close all tabs from same host", function() {
    chrome.tabs.query({}, function(tabs) {
      chrome.tabs.query(
        { active: true, currentWindow: true },
        function(activeTabs) {
          const currentTab = activeTabs[0];
          const currentHost = new URL(currentTab.url).hostname;
          const sameHostTabs = tabs.filter((tab) => {
            try {
              return new URL(tab.url).hostname === currentHost;
            } catch (e) {
              return false;
            }
          });
          sameHostTabs.forEach((tab) => chrome.tabs.remove(tab.id));
        }
      );
    });
  });
  api.map("txh", "gxt");
  api.map("txl", "gxT");
  api.map("txH", "gx0");
  api.map("txL", "gx$");

  // src/modules/github/github.js
  api.mapkey("gro", "Github own Repositories", function() {
    window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
  });
  api.mapkey("grr", "github Ruhul vai ", function() {
    const baseUrl = "https://github.com/ruhulamin-programming";
    const repoUrl = baseUrl + "?tab=repositories";
    if (window.location.href.startsWith(repoUrl)) {
      window.location.href = baseUrl;
    } else if (window.location.href.startsWith(baseUrl)) {
      window.location.href = repoUrl;
    } else {
      window.open(repoUrl, "_blank");
    }
  });
  api.mapkey("grm", "github Mirhasankhan vai", function() {
    const baseUrl = "https://github.com/Mirhasankhan";
    const repoUrl = baseUrl + "?tab=repositories";
    if (window.location.href.startsWith(repoUrl)) {
      window.location.href = baseUrl;
    } else if (window.location.href.startsWith(baseUrl)) {
      window.location.href = repoUrl;
    } else {
      window.open(repoUrl, "_blank");
    }
  });
  api.mapkey("grn", "create new github repo", function() {
    window.open("https://github.com/new", "_blank");
  });
  api.mapkey("gyu", "\u{1F4CB} Smart GitHub Repo Copier", async function() {
    const url = window.location.href;
    const extractUserRepo = (href) => {
      const match = href.match(/^\/([^/]+)\/([^/]+)/);
      return match ? `${match[1]}/${match[2]}` : null;
    };
    if (url.includes("?tab=repositories")) {
      let clickLoopActive = true;
      const runHintLoop = () => {
        if (!clickLoopActive) return;
        api.Hints.create('a[href*="/"][itemprop="name codeRepository"]', (el) => {
          const user = location.pathname.split("/")[1];
          const repo = el.innerText.trim();
          if (user && repo) {
            api.Clipboard.write(`${user}/${repo}`);
            api.Front.showBanner(`\u2705 Copied: ${user}/${repo}`);
          }
          setTimeout(runHintLoop, 200);
        });
      };
      runHintLoop();
      api.mapkey("<Esc>", "\u274C Stop GitHub Repo Copier loop", () => {
        clickLoopActive = false;
      });
    } else if (/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(url)) {
      const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/);
      if (match) {
        const userRepo = `${match[1]}/${match[2]}`;
        api.Clipboard.write(userRepo);
        api.Front.showBanner(`\u2705 Copied: ${userRepo}`);
      }
      api.Hints.create("clipboard-copy[data-copy-feedback]", (el) => {
        const ssh = el.getAttribute("value") || el.innerText;
        api.Clipboard.write(ssh);
        api.Front.showBanner(`\u{1F511} Copied SSH: ${ssh}`);
      });
    } else {
      api.Front.showBanner("\u26A0\uFE0F Not on a GitHub repo or repositories page");
    }
  });
  api.mapkey(
    "gyr",
    "Copy GitHub username/repo",
    function() {
      const url = window.location.href;
      if (!url.includes("github.com")) {
        api.Front.showBanner("Not a GitHub page");
        return;
      }
      const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)(\/|$)/);
      if (match) {
        const user = match[1];
        const repo = match[2];
        const textToCopy = `${user}/${repo}`;
        api.Clipboard.write(textToCopy);
        api.Front.showBanner(`Copied: ${textToCopy}`);
      } else {
        api.Front.showBanner("Not a repo URL");
      }
    },
    { domain: /./, prefix: " " }
  );
  api.mapkey("grp", "\u{1F464} Go to GitHub user profile from repo page", function() {
    const match = window.location.href.match(
      /^https:\/\/github\.com\/([^\/?#]+)/
    );
    if (match && match[1]) {
      const user = match[1];
      window.location.href = `https://github.com/${user}`;
    } else {
      api.Front.showBanner("\u274C Not on a GitHub repo page");
    }
  });
  api.mapkey(
    "gm",
    "\u{1F464} Go to GitHub user profile or repositories tab",
    function() {
      const currentUrl = window.location.href;
      const staticProfile = "https://github.com/shahjalal-labs";
      const yourReposTab = "https://github.com/shahjalal-labs?tab=repositories";
      if (!currentUrl.startsWith("https://github.com/")) {
        api.tabOpenLink(staticProfile);
        return;
      }
      const match = currentUrl.match(/^https:\/\/github\.com\/([^\/?#]+)/);
      const currentUser = match && match[1];
      if (!currentUser || ["features", "topics", "collections"].includes(currentUser)) {
        window.location.href = staticProfile;
        return;
      }
      const isOnProfilePage = currentUrl === `https://github.com/${currentUser}`;
      if (isOnProfilePage) {
        if (currentUser.toLowerCase() === "shahjalal-labs") {
          window.location.href = yourReposTab;
        } else {
          window.location.href = staticProfile;
        }
      } else {
        window.location.href = `https://github.com/${currentUser}`;
      }
    }
  );

  // src/modules/opener/smtFigma/smtFigma.js
  api.mapkey("ova", "ashmaster figma", function() {
    if (window.location.hostname.includes("www.figma.com")) {
      window.location.href = "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1";
    } else {
      window.open(
        "https://www.figma.com/design/zQdcO8yAzu6RBqaWAHY5Qt/ash_master_Bridge-Network-App?node-id=28320-2244&t=SAlFLJ39wHSWPOjA-1",
        "_blank"
      );
    }
  });
  api.mapkey("ovda", "ashmaster docs", function() {
    if (window.location.hostname.includes("docs.google.com")) {
      window.location.href = "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0";
    } else {
      window.open(
        "https://docs.google.com/spreadsheets/d/1QUT4qSbz6graO9wLbTLk5rrr37AMKlN09dOIG5dUCTg/edit?gid=0#gid=0",
        "_blank"
      );
    }
  });

  // src/modules/style/chatgpt.js
  var { mapkey: mapkey3, Front } = api;
  function initFaviconReplacement() {
    let faviconObserver;
    let customFaviconUrl;
    function createCustomFavicon() {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#561530";
      ctx.beginPath();
      ctx.moveTo(16, 4);
      ctx.lineTo(24, 10);
      ctx.lineTo(24, 22);
      ctx.lineTo(16, 28);
      ctx.lineTo(8, 22);
      ctx.lineTo(8, 10);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px Arial";
      ctx.textAlign = "center";
      ctx.fillText("SJ", 16, 20);
      return canvas.toDataURL();
    }
    function replaceFavicon() {
      const favicons = document.querySelectorAll('link[rel*="icon"]');
      customFaviconUrl = customFaviconUrl || createCustomFavicon();
      favicons.forEach((favicon) => {
        if (!favicon.hasAttribute("data-original-href")) {
          favicon.setAttribute("data-original-href", favicon.href);
        }
        if (favicon.href !== customFaviconUrl) {
          favicon.href = customFaviconUrl;
        }
      });
      if (favicons.length === 0) {
        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.type = "image/x-icon";
        newFavicon.href = customFaviconUrl;
        document.head.appendChild(newFavicon);
      }
    }
    function setupFaviconObserver() {
      if (faviconObserver) faviconObserver.disconnect();
      faviconObserver = new MutationObserver((mutations) => {
        let faviconChanged = false;
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "LINK" && node.getAttribute("rel")?.includes("icon")) {
                faviconChanged = true;
              }
            });
          }
          if (mutation.type === "attributes" && mutation.target.tagName === "LINK" && mutation.target.getAttribute("rel")?.includes("icon") && (mutation.attributeName === "href" || mutation.attributeName === "rel")) {
            faviconChanged = true;
          }
        });
        if (faviconChanged) {
          setTimeout(replaceFavicon, 100);
        }
      });
      faviconObserver.observe(document.head, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["href", "rel"]
      });
    }
    function overrideDOMMethods() {
      const originalSetAttribute = Element.prototype.setAttribute;
      const originalAppendChild = Node.prototype.appendChild;
      const originalInsertBefore = Node.prototype.insertBefore;
      Element.prototype.setAttribute = function(name, value) {
        if (this.tagName === "LINK" && name === "href" && this.getAttribute("rel")?.includes("icon") && !value.includes("data:image")) {
          value = customFaviconUrl || createCustomFavicon();
        }
        return originalSetAttribute.call(this, name, value);
      };
      Node.prototype.appendChild = function(node) {
        if (node && node.tagName === "LINK" && node.getAttribute("rel")?.includes("icon")) {
          node.setAttribute("href", customFaviconUrl || createCustomFavicon());
        }
        return originalAppendChild.call(this, node);
      };
      Node.prototype.insertBefore = function(newNode, referenceNode) {
        if (newNode && newNode.tagName === "LINK" && newNode.getAttribute("rel")?.includes("icon")) {
          newNode.setAttribute("href", customFaviconUrl || createCustomFavicon());
        }
        return originalInsertBefore.call(this, newNode, referenceNode);
      };
    }
    replaceFavicon();
    setupFaviconObserver();
    overrideDOMMethods();
    const interval = setInterval(replaceFavicon, 3e3);
    return () => {
      if (faviconObserver) faviconObserver.disconnect();
      clearInterval(interval);
    };
  }
  function initPlaceholderReplacement() {
    let placeholderObserver;
    let isReplacing = false;
    function replacePlaceholders() {
      if (isReplacing) return;
      isReplacing = true;
      const textareas = document.querySelectorAll("textarea");
      textareas.forEach((textarea) => {
        if (textarea.placeholder && textarea.placeholder.includes("Ask anything")) {
          Object.defineProperty(textarea, "placeholder", {
            get: function() {
              return "Pulse Query \u{1FAC0}";
            },
            set: function(value) {
              if (!value.includes("Pulse Query")) {
                this.setAttribute("placeholder", "Pulse Query \u{1FAC0}");
              }
            },
            configurable: true
          });
          textarea.setAttribute("placeholder", "Pulse Query \u{1FAC0}");
          const originalDescriptor = Object.getOwnPropertyDescriptor(
            textarea,
            "placeholder"
          );
          if (!originalDescriptor || !originalDescriptor.get) {
            textarea._originalPlaceholder = "Pulse Query \u{1FAC0}";
          }
        }
      });
      isReplacing = false;
    }
    function setupObserver() {
      if (placeholderObserver) placeholderObserver.disconnect();
      placeholderObserver = new MutationObserver((mutations) => {
        let shouldReplace = false;
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.tagName === "TEXTAREA" || node.querySelector("textarea")) {
                  shouldReplace = true;
                }
              }
            });
          }
          if (mutation.type === "attributes" && mutation.target.tagName === "TEXTAREA" && mutation.attributeName === "placeholder") {
            shouldReplace = true;
          }
        });
        if (shouldReplace) {
          setTimeout(replacePlaceholders, 100);
        }
      });
      placeholderObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["placeholder"]
      });
    }
    replacePlaceholders();
    setupObserver();
    const interval = setInterval(replacePlaceholders, 2e3);
    return () => {
      if (placeholderObserver) placeholderObserver.disconnect();
      clearInterval(interval);
    };
  }
  function createSJPulseUI() {
    const css = `
    /* Main Theme - Deep Night */
    body {
      background: linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #16213e 100%) !important;
      color: #A7B49E !important;
      font-family: 'Segoe UI', system-ui, sans-serif !important;
    }

    /* Header & Branding */
    header, .sticky {
      background: rgba(10, 10, 20, 0.95) !important;
      backdrop-filter: blur(20px) !important;
      border-bottom: 1px solid #2a2a4a !important;
    }

    /* Main Chat Area - Safe styling */
    main, [class*="flex-1"] {
      background: rgba(15, 15, 30, 0.8) !important;
      border-radius: 16px !important;
      margin: 8px !important;
      border: 1px solid #2a2a4a !important;
    }

    /* Message Bubbles */
    .text-base {
      background: linear-gradient(135deg, #1e1e3f 0%, #2d2b55 100%) !important;
      border-radius: 18px !important;
      padding: 16px 20px !important;
      margin: 12px 0 !important;
      border: 1px solid #3a3a6a !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
      color: #A7B49E !important;
    }

    /* User message bubbles */
    [data-message-author-role="user"] .text-base {
      background: linear-gradient(135deg, #2a2a5a 0%, #3a3a7a 100%) !important;
      border: 1px solid #4a4a8a !important;
      color: #A7B49E !important;
    }

    /* Input Area - Fixed */
    form textarea, [data-testid*="textarea"] {
      background: rgba(20, 20, 40, 0.9) !important;
      color: #A7B49E !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 20px !important;
      padding: 16px 20px !important;
      font-size: 14px !important;
      backdrop-filter: blur(10px) !important;
      resize: vertical !important;
    }

    form textarea:focus, [data-testid*="textarea"]:focus {
      border-color: #646cff !important;
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2) !important;
      outline: none !important;
    }

    /* Send button */
    button[data-testid*="send"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      transition: all 0.3s ease !important;
    }

    button[data-testid*="send"]:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(100, 108, 255, 0.4) !important;
    }

    /* Sidebar - Safe styling */
    nav, [class*="sidebar"], [class*="Nav"] {
      background: rgba(10, 10, 20, 0.9) !important;
      backdrop-filter: blur(15px) !important;
      border-right: 1px solid #2a2a4a !important;
    }

    /* Sidebar items */
    nav a, [class*="Nav"] a, [class*="nav"] a {
      background: transparent !important;
      border-radius: 10px !important;
      margin: 4px 8px !important;
      transition: all 0.3s ease !important;
      color: #A7B49E !important;
    }

    nav a:hover, [class*="Nav"] a:hover {
      background: rgba(100, 108, 255, 0.1) !important;
      transform: translateX(4px) !important;
    }

    /* Code Blocks */
    pre, code {
      background: #1a1a2e !important;
      border: 1px solid #2a2a4a !important;
      border-radius: 12px !important;
      color: #A7B49E !important;
    }

    /* Copy/Yank button */
    button:has(> div > svg), button[class*="copy"] {
      background: rgba(100, 108, 255, 0.1) !important;
      border: 1px solid #646cff !important;
      border-radius: 8px !important;
      color: #646cff !important;
      transition: all 0.3s ease !important;
    }

    button:has(> div > svg):hover, button[class*="copy"]:hover {
      background: #646cff !important;
      color: white !important;
      transform: scale(1.05) !important;
    }

    /* Scrollbars */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #1a1a2e;
    }

    ::-webkit-scrollbar-thumb {
      background: #646cff;
      border-radius: 4px;
    }

    /* Loading Animation */
    [class*="animate-spin"] {
      color: #646cff !important;
    }

    /* New Chat button */
    button:has(svg), button[class*="new-chat"] {
      background: linear-gradient(135deg, #646cff 0%, #747bff 100%) !important;
      border: none !important;
      border-radius: 12px !important;
      color: white !important;
      font-weight: 600 !important;
    }

    /* User menu */
    [class*="user"] button {
      background: transparent !important;
      border: 1px solid #3a3a6a !important;
      border-radius: 12px !important;
      color: #A7B49E !important;
    }

    /* Additional text elements */
    h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
      color: #A7B49E !important;
    }

    /* Input text */
    input, select, option {
      color: #A7B49E !important;
    }

    /* Placeholder text */
    ::placeholder {
      color: #A7B49E !important;
      opacity: 0.7 !important;
    }
  `;
    const style = document.createElement("style");
    style.id = "sjPulse-night-theme";
    style.textContent = css;
    document.head.appendChild(style);
  }
  function replaceBranding() {
    const replaceText = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        let newText = node.textContent;
        if (!node.parentElement?.closest("script") && !node.parentElement?.closest("style") && !node.parentElement?.getAttribute("href")) {
          newText = newText.replace(/\bChatGPT\b/gi, "SJ Pulse \u{1F680}").replace(/\bChatGPT-\d\b/gi, "SJ Pulse").replace(/Copy code/gi, "Yank \u{1F4CB}").replace(/\bCopy\b/gi, "Yank").replace(/\bAsk anything\b/gi, "Pulse Query \u{1FAC0}");
        }
        if (newText !== node.textContent) {
          node.textContent = newText;
        }
      } else {
        node.childNodes.forEach(replaceText);
      }
    };
    replaceText(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            replaceText(node);
          }
        });
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  function createVariantThemes() {
    return {
      cyberpunk: `
      body {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a0033 0%, #330066 100%) !important;
        border: 1px solid #00ff88 !important;
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
        color: #A7B49E !important;
      }
      button[data-testid*="send"] {
        background: linear-gradient(135deg, #ff00ff 0%, #00ff88 100%) !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
      "midnight-blue": `
      body {
        background: linear-gradient(135deg, #0f1a2b 0%, #1e3a5f 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1e3a5f 0%, #2e4a7f 100%) !important;
        border: 1px solid #3a5f8f !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
      amethyst: `
      body {
        background: linear-gradient(135deg, #1a102b 0%, #3a1f5f 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #2a1f4f 0%, #4a2f7f 100%) !important;
        border: 1px solid #6b46c1 !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `,
      "deep-space": `
      body {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f3460 100%) !important;
        color: #A7B49E !important;
      }
      .text-base {
        background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%) !important;
        border: 1px solid #4cc9f0 !important;
        color: #A7B49E !important;
      }
      h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label {
        color: #A7B49E !important;
      }
    `
    };
  }
  if (window.location.hostname.includes("chatgpt.com")) {
    let currentVariant = "default";
    const variants = createVariantThemes();
    let cleanupPlaceholders;
    let cleanupFavicon;
    createSJPulseUI();
    replaceBranding();
    cleanupFavicon = initFaviconReplacement();
    cleanupPlaceholders = initPlaceholderReplacement();
    mapkey3("ts", "Toggle SJ Pulse/ChatGPT UI", () => {
      const style = document.getElementById("sjPulse-night-theme");
      if (style) {
        style.remove();
        if (cleanupPlaceholders) cleanupPlaceholders();
        if (cleanupFavicon) cleanupFavicon();
        Front.showBanner("\u{1F535} Original ChatGPT UI Restored");
      } else {
        createSJPulseUI();
        cleanupPlaceholders = initPlaceholderReplacement();
        cleanupFavicon = initFaviconReplacement();
        Front.showBanner("\u{1F680} SJ Pulse Stealth UI Activated");
      }
    });
    mapkey3("tv", "Cycle theme variants", () => {
      const variantNames = Object.keys(variants);
      const currentIndex = variantNames.indexOf(currentVariant);
      const nextIndex = (currentIndex + 1) % (variantNames.length + 1);
      document.getElementById("sjPulse-variant")?.remove();
      if (nextIndex === 0) {
        currentVariant = "default";
        Front.showBanner("\u{1F319} Default Night Theme");
      } else {
        currentVariant = variantNames[nextIndex - 1];
        const variantStyle = document.createElement("style");
        variantStyle.id = "sjPulse-variant";
        variantStyle.textContent = variants[currentVariant];
        document.head.appendChild(variantStyle);
        Front.showBanner(
          `\u{1F3A8} ${currentVariant.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Theme`
        );
      }
    });
    mapkey3("tc", "Toggle compact layout", () => {
      const styleId = "sjPulse-compact-style";
      let style = document.getElementById(styleId);
      if (style) {
        style.remove();
        Front.showBanner("\u{1F4CF} Normal Layout");
      } else {
        style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
        .text-base { 
          font-size: 13px !important; 
          padding: 12px 16px !important; 
          margin: 8px 0 !important;
        }
        form textarea, [data-testid*="textarea"] {
          padding: 12px 16px !important;
          font-size: 13px !important;
          min-height: 60px !important;
        }
        main, [class*="flex-1"] {
          margin: 4px !important;
        }
      `;
        document.head.appendChild(style);
        Front.showBanner("\u{1F4D0} Compact Layout");
      }
    });
    Front.showBanner(
      "\u{1F680} SJ Pulse Stealth UI Loaded! Use 'ts' to toggle, 'tv' for variants, 'tc' for compact"
    );
  }

  // surfingkeys.js
  settings.defaultLLMProvider = "deepseek";
  settings.llm = {
    deepseek: {
      apiBaseUrl: "https://api.deepseek.com",
      apiKey: "check the env with name DEEPSEEK",
      model: "deepseek-chat"
    }
  };
  api.mapkey("A", "#8Open DeepSeek Chat with role", function() {
    api.Front.openOmnibar({
      type: "LLMChat",
      extra: {
        system: "You are a Linux and browser automation assistant. Reply clearly and concisely, assuming user uses Arch, CLI, and Neovim."
      }
    });
  });
})();
