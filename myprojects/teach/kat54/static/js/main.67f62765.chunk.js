(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = a(30);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        c = a(7),
        r = (a(22), a(8)),
        o = a(9),
        s = a(11),
        i = a(10),
        m = a(12),
        u = a(4),
        p =
          (a(23),
          a(24),
          function () {
            return (
              Object(n.useEffect)(function () {
                var e = document.querySelector("#log-box-button"),
                  t = document.querySelector(".inner-login-post"),
                  a = document.querySelector(".bottom-container"),
                  n = t.clientHeight;
                function l() {
                  window.innerWidth > 1024
                    ? t.classList.contains("active")
                      ? ((t.style.top = "60px"),
                        (a.style.paddingTop = "".concat(n, "px")))
                      : ((t.style.top = "-".concat(n, "px")),
                        (a.style.paddingTop = "0px"))
                    : t.classList.contains("active")
                    ? ((t.style.top = "0px"),
                      (a.style.paddingTop = "".concat(n, "px")))
                    : ((t.style.top = "-".concat(n, "px")),
                      (a.style.paddingTop = "0px"));
                }
                function c() {
                  (n = t.clientHeight), l();
                }
                e.addEventListener("click", function () {
                  t.classList.toggle("active"),
                    e.classList.toggle("active"),
                    l();
                }),
                  c(),
                  window.addEventListener("resize", c);
              }),
              l.a.createElement(
                "div",
                { className: "top-container" },
                l.a.createElement(
                  "div",
                  { className: "login-container" },
                  l.a.createElement(
                    "ul",
                    { className: "login-ul" },
                    l.a.createElement(
                      "li",
                      { className: "login-li", id: "log-box-button" },
                      "Zaloguj si\u0119"
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "inner-login-post" },
                  l.a.createElement(
                    "div",
                    { className: "login-post" },
                    l.a.createElement(
                      "form",
                      null,
                      l.a.createElement(
                        "h1",
                        { className: "post-h1" },
                        "Masz ju\u017c istniej\u0105ce konto?"
                      ),
                      l.a.createElement(
                        "h2",
                        { className: "post-h2" },
                        "Zaloguj si\u0119!"
                      ),
                      l.a.createElement("label", { for: "log" }, "Login"),
                      l.a.createElement("input", {
                        type: "text",
                        name: "log",
                        className: "login-input",
                      }),
                      l.a.createElement("label", { for: "pass" }, "Has\u0142o"),
                      l.a.createElement("input", {
                        type: "password",
                        name: "pass",
                        className: "login-input",
                      }),
                      l.a.createElement(
                        "button",
                        { type: "submit", className: "button-login" },
                        "Zaloguj!"
                      )
                    ),
                    l.a.createElement(
                      "form",
                      null,
                      l.a.createElement(
                        "h1",
                        { className: "post-h1" },
                        "Nie masz jeszcze konta?"
                      ),
                      l.a.createElement(
                        "h2",
                        { className: "post-h2" },
                        "Zarejestruj si\u0119!"
                      ),
                      l.a.createElement("label", { for: "login" }, "Login"),
                      l.a.createElement("input", {
                        type: "text",
                        name: "login",
                        className: "login-input",
                      }),
                      l.a.createElement("label", { for: "pass" }, "Has\u0142o"),
                      l.a.createElement("input", {
                        type: "password",
                        name: "pass",
                        className: "login-input",
                      }),
                      l.a.createElement("label", { for: "email" }, "E-mail"),
                      l.a.createElement("input", {
                        type: "email",
                        name: "email",
                        className: "login-input",
                      }),
                      l.a.createElement(
                        "button",
                        { type: "submit", className: "button-login" },
                        "Zarejestruj!"
                      )
                    )
                  )
                )
              )
            );
          }),
        E =
          (a(25),
          a(26),
          a(27),
          function () {
            return l.a.createElement("div", { className: "home" }, "HomePage");
          }),
        d = function () {
          return l.a.createElement("div", null, "AboutPage");
        },
        v =
          (a(5),
          ["Wszystko", "Just Unique", "Gucci", "LaCoste", "Nike", "Puma"]),
        f = [
          "Wszystko",
          "Bluzki",
          "Bluzy",
          "Body",
          "Dresy",
          "Kamizelki",
          "Kombinezony",
          "Komplety",
          "Koszule",
          "Kurtki",
          "Legginsy",
          "Marynarki",
          "Narzutki",
          "P\u0142aszcze",
          "Spodnie",
          "Sp\xf3dnice",
          "Sukienki",
          "Swetry",
          "Szorty",
          "Tuniki",
          "Obuwie",
          "Akcesoria",
          "Nowo\u015bci",
          "Promocje",
        ],
        g = function () {
          var e = v.map(function (e) {
              return l.a.createElement("option", { value: e.toLowerCase }, e);
            }),
            t = f.map(function (e) {
              return l.a.createElement("li", { className: "shop-li" }, e);
            });
          return (
            Object(n.useEffect)(function () {
              document.querySelector(".left-side");
            }),
            l.a.createElement(
              "div",
              { className: "left-side" },
              l.a.createElement(
                "div",
                { className: "shop-tag" },
                l.a.createElement(
                  "h3",
                  { className: "shop-header" },
                  "Producent"
                )
              ),
              l.a.createElement(
                "div",
                { className: "shop-producer" },
                l.a.createElement("h4", null, "Wybierz producenta"),
                l.a.createElement(
                  "select",
                  { className: "shop-combobox", name: "brands" },
                  e
                )
              ),
              l.a.createElement(
                "div",
                { className: "shop-tag" },
                l.a.createElement("h3", { className: "shop-header" }, "Menu")
              ),
              l.a.createElement(
                "div",
                { className: "shop-menu" },
                l.a.createElement("ul", { className: "shop-ul" }, t)
              )
            )
          );
        },
        b = function () {
          return l.a.createElement(
            "div",
            { className: "right-side" },
            l.a.createElement("div", { className: "item-wrapper" }, "itemList")
          );
        },
        h = function () {
          return l.a.createElement(
            "div",
            { className: "shop" },
            l.a.createElement(g, null),
            l.a.createElement(b, null)
          );
        },
        N = function () {
          return l.a.createElement("div", null, "BlogPage");
        },
        y = function () {
          return l.a.createElement("div", null, "ContactPage");
        },
        w = [
          { name: "home", path: "/", element: l.a.createElement(E, null) },
          {
            name: "about",
            path: "/about",
            element: l.a.createElement(d, null),
          },
          { name: "shop", path: "/shop", element: l.a.createElement(h, null) },
          { name: "blog", path: "/blog", element: l.a.createElement(N, null) },
          {
            name: "contact",
            path: "/contact",
            element: l.a.createElement(y, null),
          },
        ],
        k = function () {
          var e = 0,
            t = "";
          function a() {
            (e = window.innerWidth),
              (t = e > 1024 ? "window" : "mobile"),
              (function () {
                var e = document.querySelector(".nav-ul"),
                  t = document.querySelector(".burger-wrapper");
                e.classList.contains("active") && e.classList.remove("active"),
                  e.classList.contains("window") &&
                    e.classList.remove("window"),
                  t.classList.contains("active") &&
                    t.classList.remove("active");
              })(),
              (function () {
                var e = document.querySelector(".nav-ul");
                e.dataset.state = "window" === t ? "window" : "mobile";
              })();
          }
          Object(n.useEffect)(function () {
            var e = document.querySelector(".burger-wrapper"),
              t = document.querySelector("nav.navbar");
            e.addEventListener("click", function () {
              e.classList.toggle("active"), t.classList.toggle("active");
            }),
              window.addEventListener("resize", a),
              a();
          });
          var c = w.map(function (e) {
            return l.a.createElement(
              u.b,
              { key: e.name, className: "nav-a", to: e.path },
              e.name,
              l.a.createElement("span", null)
            );
          });
          return l.a.createElement(
            "nav",
            { className: "navbar-container" },
            l.a.createElement(
              "div",
              { className: "burger-wrapper" },
              l.a.createElement(
                "div",
                { className: "burger" },
                l.a.createElement("span", null),
                l.a.createElement("span", null),
                l.a.createElement("span", null)
              )
            ),
            l.a.createElement(
              "nav",
              { className: "navbar" },
              l.a.createElement("ul", { className: "nav-ul" }, c)
            )
          );
        },
        L = (a(28), a(1)),
        j = function () {
          return l.a.createElement("div", null, "ErrorPage");
        },
        z = function () {
          var e = w.map(function (e) {
            return l.a.createElement(L.a, {
              key: e.name,
              path: e.path,
              element: e.element,
            });
          });
          return l.a.createElement(
            "main",
            { className: "content" },
            l.a.createElement(
              L.c,
              null,
              e,
              l.a.createElement(L.a, {
                path: "*",
                element: l.a.createElement(j, null),
              })
            )
          );
        },
        S =
          (a(29),
          function () {
            return l.a.createElement(
              "footer",
              { className: "footer" },
              "Aneta Szczerbi\u0144ska"
            );
          }),
        x = function () {
          return l.a.createElement(
            "div",
            { className: "bottom-container" },
            l.a.createElement(k, null),
            l.a.createElement(z, null),
            l.a.createElement(S, null)
          );
        },
        q = function () {
          return l.a.createElement(
            "div",
            { className: "wrapper" },
            l.a.createElement(p, null),
            l.a.createElement(x, null)
          );
        },
        O = (function (e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(s.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    u.a,
                    { basename: "/cv-react/myprojects/teach/kat54/" },
                    l.a.createElement(q, null)
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      c.createRoot(document.getElementById("root")).render(
        l.a.createElement(O, null)
      );
    },
  ],
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.67f62765.chunk.js.map
