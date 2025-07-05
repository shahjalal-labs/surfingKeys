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
  api.map("t", "T");
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
  api.map(",", "<Ctrl-6>");

  // src/modules/github.js
  api.mapkey("gr", "Repository Github", function() {
    window.open("https://github.com/shahjalal-labs?tab=repositories", "_blank");
  });
  api.mapkey("gn", "new repo github", function() {
    window.open("https://github.com/new", "_blank");
  });
  api.mapkey("ga", "\u{1F4CB} Smart GitHub Repo Copier", async function() {
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
    "gl",
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
  api.mapkey("gb", "\u{1F464} Go to GitHub user profile from repo page", function() {
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

  // src/settings/theme.js
  api.mapkey("ck", "\u{1F312} Toggle dark mode (CSS inversion)", function() {
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
  });
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
  api.Hints.setCharacters("asdjkluiopwerm,nhgzxcvq'");
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
  api.mapkey("sq", "Open Quran", function() {
    window.open("https://quran.com", "_blank");
  });
  api.mapkey("sb", "Open blank page", function() {
    window.open("https://blank.page/", "_blank");
  });

  // src/modules/opener/aiOpener.js
  api.mapkey("sc", "Open ChatGPT chk", function() {
    let newTab = window.open("https://chatgpt.com/", "_blank");
    console.log(newTab, ".surfingkeys.js", 240);
    setInterval(() => {
      console.log(`hellow`);
    }, 2e3);
  });
  api.mapkey("ax", "perplexity ai", function() {
    if (window.location.hostname.includes("perplexity")) {
      window.location.href = "https://www.perplexity.ai/";
    } else {
      window.open("https://www.perplexity.ai/", "_blank");
    }
  });
  api.mapkey("gh", "gemini ai", function() {
    if (window.location.hostname.includes("gemini")) {
      window.location.href = "https://gemini.google.com/app";
    } else {
      window.open("https://gemini.google.com/app", "_blank");
    }
  });
  api.mapkey("ah", "Deep ai", function() {
    window.open("https://deepai.org/dashboard/images", "_blank");
  });
  api.mapkey("al", "Open claude ai", function() {
    window.open("https://claude.ai/new");
  });
  api.mapkey("am", "Chk claude", function() {
    if (window.location.hostname.includes("claude.ai")) {
      window.location.href = "/new";
    } else {
      window.open("https://claude.ai/new", "_blank");
    }
  });

  // src/modules/opener/mernOpener.js
  api.mapkey("cd", "daisy ui", function() {
    if (window.location.hostname.includes("daisy")) {
      window.location.href = "https://daisyui.com/docs/install/vite/";
    } else {
      window.open("https://daisyui.com/docs/install/vite/", "_blank");
    }
  });
  api.mapkey("at", "tailwind css v4 installation", function() {
    window.open("https://tailwindcss.com/docs/installation/using-vite", "_blank");
  });
  api.mapkey("sl", "localhost", function() {
    window.open("http://localhost:5173/", "_blank");
  });

  // src/modules/opener/socialOpener.js
  api.mapkey("sf", "Open Facebook", function() {
    window.open("https://www.facebook.com", "_blank");
  });
  api.mapkey("sa", "email inbox opening", function() {
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
  });
  api.mapkey("sm", "whatsApp", function() {
    window.open("https://web.whatsapp.com/", "_blank");
  });
  api.mapkey("co", "open linkedin", function() {
    if (window.location.hostname.includes("linkedin")) {
      window.location.href = "https://www.linkedin.com/in/shahjalal-mern/";
    } else {
      window.open("https://www.linkedin.com/in/shahjalal-mern/", "_blank");
    }
  });
  api.mapkey("and", "open ejp discord sesssion announcement", function() {
    if (window.location.hostname.includes("discord")) {
      window.location.href = "https://discord.com/channels/1386609361345843211/1386636865842708550";
    } else {
      window.open(
        "https://discord.com/channels/1386609361345843211/1386636865842708550",
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

  // src/modules/opener/phOpener.js
  api.mapkey("pso", "scribble l1b10", () => {
    window.open(
      "https://web.programming-hero.com/update-1/video/update-1-42-1-scribbles-cafe-project-overview-and-tailwind-setup",
      "_blank"
    );
  });
  api.mapkey("pa,", "HELP DESK", function() {
    window.open("https://helpdesk.programming-hero.com/", "_blank");
  });
  api.mapkey("sn", "PH b11 github repositories", function() {
    window.open("https://github.com/ProgrammingHero1?tab=repositories", "_blank");
  });
  api.mapkey("s1", "fbLevel1", function() {
    window.open("https://www.facebook.com/groups/programmingHero", "_blank");
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
  api.mapkey("ac", "Conceptual Level1 Batch 11", function() {
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
  api.mapkey("s2", "fbLevel2", function() {
    window.open("https://www.facebook.com/groups/phapollo4", "_blank");
  });
  api.mapkey("s4", "L2B4 typescript module 2", function() {
    window.open(
      "https://web.programming-hero.com/level2-batch-4/video/level2-batch-4-2-1-type-assertion-type-narrowing"
    );
  });
  api.mapkey("ai", "Level1 Batch 11", function() {
    window.open(
      "https://web.programming-hero.com/web-11/video/web-11-15-9-module-summary-legal-system-practice-task-",
      "_blank"
    );
  });
  api.mapkey("ak", "outline level1 batch 11", function() {
    window.open(
      "https://web.programming-hero.com/675439d776a088463223e16d/course-outline",
      "_blank"
    );
  });
  api.mapkey("aj", "fb  Level1 Batch 11 support group", function() {
    window.open("https://www.facebook.com/groups/targetwebdevcareer", "_blank");
  });

  // src/modules/opener/islamicOpener.js
  api.mapkey("sj", "Open Wedding Nasheed", function() {
    window.open(
      "https://www.youtube.com/watch?v=dWBgNHT4ipE&ab_channel=HuzaifahNasheeds",
      "_blank"
    );
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
})();
