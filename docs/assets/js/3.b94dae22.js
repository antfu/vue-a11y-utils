(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    147: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(0),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s("div", { staticClass: "content" }, [
              t._m(0),
              t._v(" "),
              s(
                "div",
                { staticStyle: { display: "flex", "align-items": "center" } },
                [
                  s("img", {
                    attrs: {
                      src: "https://vuejs.org/images/logo.png",
                      width: "200",
                      height: "200"
                    }
                  }),
                  t._v(" "),
                  s(
                    "svg",
                    {
                      staticStyle: {
                        "enable-background": "new -3627 353 1024 1024"
                      },
                      attrs: {
                        width: "200",
                        height: "200",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        "xml:space": "preserve",
                        version: "1.1",
                        x: "0",
                        y: "0",
                        viewBox: "-3627 353 1024 1024"
                      }
                    },
                    [
                      s("circle", {
                        attrs: {
                          cx: "-3115",
                          cy: "865",
                          r: "512",
                          fill: "#4dba87"
                        }
                      }),
                      s("path", {
                        attrs: {
                          d:
                            "M-3116.4 353c-282 0-510.6 228.6-510.6 510.6s228.6 510.6 510.6 510.6s510.6-228.6 510.6-510.6S-2834.4 353-3116.4 353z M-3124.1 454.4c36.6 0 66.2 29.6 66.2 65.9c0 36.6-29.6 66.2-66.2 66.2c-36.3 0-65.9-29.6-65.9-66.2 C-3190.1 484-3160.5 454.4-3124.1 454.4L-3124.1 454.4z M-2838 667.7l-196.4 24.8l0.1 196.6l95.2 317.7c5 20.1-7 40.1-26.9 45.1 c-19.8 5-40.1-6-45.1-26l-97.5-289.2h-30l-89.7 295.2c-7.5 19.3-29 28.1-48.2 20.6c-19.1-7.4-30.7-29.1-23.2-48.4l82.4-311.8V692.5 l-181-24.6c-18.6-1.5-31.2-17.8-29.7-36.4c1.4-18.7 18.3-32.6 36.8-31.1l219.9 18.9h96.4l234.1-19.3c18.6-0.7 34.4 13.7 35 32.5 C-2805 651-2819.4 666.9-2838 667.7L-2838 667.7z",
                          fill: "#435466"
                        }
                      })
                    ]
                  )
                ]
              ),
              t._v(" "),
              s("p", [
                s(
                  "a",
                  {
                    attrs: {
                      href:
                        "https://github.com/Jinjiang/vue-a11y-utils/blob/master/LICENSE",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [
                    s("img", {
                      attrs: {
                        src:
                          "https://img.shields.io/github/license/Jinjiang/vue-a11y-utils.svg?style=for-the-badge",
                        alt: "LICENSE"
                      }
                    }),
                    s("OutboundLink")
                  ],
                  1
                ),
                t._v(" "),
                s(
                  "a",
                  {
                    attrs: {
                      href:
                        "https://circleci.com/gh/Jinjiang/vue-a11y-utils/tree/master",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [
                    s("img", {
                      attrs: {
                        src:
                          "https://img.shields.io/circleci/project/github/Jinjiang/vue-a11y-utils/master.svg?style=for-the-badge",
                        alt: "CircleCI"
                      }
                    }),
                    s("OutboundLink")
                  ],
                  1
                )
              ]),
              t._v(" "),
              s("p", [t._v("Utilities for accessibility (a11y) in Vue.js")]),
              t._v(" "),
              t._m(1),
              t._v(" "),
              t._m(2),
              t._v(" "),
              t._m(3),
              t._v(" "),
              s("p", [
                t._v(
                  "When you write a Vue app with full accessible control. You may meet some issues frequently. For example:"
                )
              ]),
              t._v(" "),
              s("ul", [
                s("li", [
                  t._v("Make sure the "),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("W3C WAI-ARIA"), s("OutboundLink")],
                    1
                  ),
                  t._v(
                    " roles & properties of each DOM element are set properly."
                  )
                ]),
                t._v(" "),
                t._m(4),
                t._v(" "),
                s("li", [
                  t._v("Using a central "),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("live region"), s("OutboundLink")],
                    1
                  ),
                  t._v(
                    " to show messages which are generated by the app, not the user."
                  )
                ]),
                t._v(" "),
                t._m(5)
              ]),
              t._v(" "),
              s("p", [
                t._v(
                  "Vue A11y Utils try to supply a group of utilities to help Vue developers finish these jobs easier. They are:"
                )
              ]),
              t._v(" "),
              t._m(6),
              t._v(" "),
              t._m(7),
              t._v(" "),
              t._m(8),
              s("p", [t._v("or")]),
              t._v(" "),
              t._m(9),
              t._m(10),
              t._v(" "),
              t._m(11),
              t._m(12),
              t._v(" "),
              t._m(13),
              t._v(" "),
              t._m(14),
              t._v(" "),
              t._m(15),
              t._v(" "),
              t._m(16),
              t._v(" "),
              t._m(17),
              t._v(" "),
              t._m(18),
              t._v(" "),
              t._m(19),
              t._v(" "),
              t._m(20),
              t._v(" "),
              t._m(21),
              t._v(" "),
              t._m(22),
              t._v(" "),
              t._m(23),
              t._v(" "),
              t._m(24),
              t._v(" "),
              t._m(25),
              s("p", [t._v("which is same to:")]),
              t._v(" "),
              t._m(26),
              t._m(27),
              t._v(" "),
              t._m(28),
              t._v(" "),
              t._m(29),
              s("p", [t._v("And this component could be nested like:")]),
              t._v(" "),
              t._m(30),
              s("p", [t._v("or:")]),
              t._v(" "),
              t._m(31),
              t._m(32),
              t._v(" "),
              t._m(33),
              t._v(" "),
              t._m(34),
              t._m(35),
              t._v(" "),
              t._m(36),
              t._m(37),
              t._m(38),
              t._v(" "),
              t._m(39),
              t._v(" "),
              t._m(40),
              t._v(" "),
              t._m(41),
              t._v(" "),
              t._m(42),
              t._v(" "),
              t._m(43),
              t._v(" "),
              t._m(44),
              s("p", [t._v("This example above is same to:")]),
              t._v(" "),
              t._m(45),
              t._m(46),
              t._v(" "),
              t._m(47),
              t._v(" "),
              t._m(48),
              t._v(" "),
              t._m(49),
              t._v(" "),
              t._m(50),
              t._v(" "),
              t._m(51),
              t._v(" "),
              t._m(52),
              t._m(53),
              t._v(" "),
              s("p", [
                t._v(
                  "The second example is about focus travel using arrow keys in a Vue component. There are 2 files:"
                )
              ]),
              t._v(" "),
              t._m(54),
              t._v(" "),
              s("p", [t._v("Here are some points you would notice:")]),
              t._v(" "),
              t._m(55),
              t._v(" "),
              s("p", [
                t._v(
                  "Now you can use ArrowUp and ArrowDown keys to travel each items. When you press enter or space key, an alert with the value of the current focused item would be poped up."
                )
              ]),
              t._v(" "),
              t._m(56),
              t._v(" "),
              t._m(57),
              t._v(" "),
              t._m(58),
              t._v(" "),
              t._m(59),
              t._v(" "),
              t._m(60),
              t._v(" "),
              t._m(61),
              t._v(" "),
              t._m(62),
              t._v(" "),
              t._m(63),
              t._v(" "),
              t._m(64),
              t._v(" "),
              t._m(65),
              t._v(" "),
              t._m(66),
              t._v(" "),
              t._m(67),
              t._v(" "),
              t._m(68),
              t._v(" "),
              t._m(69),
              t._v(" "),
              t._m(70),
              t._v(" "),
              t._m(71),
              t._v(" "),
              t._m(72),
              t._v(" "),
              t._m(73),
              t._v(" "),
              s("p", [
                t._v(
                  "This mixin help you generate unique id (sometimes as an id prefix) for elements in a component by default. And you can also easily specify the id manually if necessary."
                )
              ]),
              t._v(" "),
              t._m(74),
              t._v(" "),
              t._m(75),
              t._v(" "),
              t._m(76),
              t._v(" "),
              t._m(77),
              t._m(78),
              t._v(" "),
              s("p", [
                t._v(
                  "If you have a form with a group of inputs, this example above will be suitable."
                )
              ]),
              t._v(" "),
              t._m(79),
              t._v(" "),
              t._m(80),
              t._v(" "),
              t._m(81),
              t._v(" "),
              t._m(82),
              s("p", [t._v("Now the final generated DOM tree is:")]),
              t._v(" "),
              t._m(83),
              t._m(84),
              t._v(" "),
              t._m(85),
              t._v(" "),
              t._m(86),
              t._v(" "),
              t._m(87),
              t._v(" "),
              t._m(88),
              t._v(" "),
              t._m(89),
              t._v(" "),
              s("p", [
                t._v(
                  "Usually, when there is a modal dialog in your Vue app, you should keep the focus still in this dialog whatever you navigate with touch, mouse or keyboard."
                )
              ]),
              t._v(" "),
              t._m(90),
              t._v(" "),
              t._m(91),
              t._v(" "),
              t._m(92),
              t._v(" "),
              t._m(93),
              t._m(94),
              t._v(" "),
              t._m(95),
              t._v(" "),
              t._m(96),
              t._v(" "),
              t._m(97),
              t._v(" "),
              t._m(98),
              t._v(" "),
              t._m(99),
              t._v(" "),
              t._m(100),
              t._v(" "),
              t._m(101),
              t._v(" "),
              t._m(102),
              t._m(103),
              t._v(" "),
              t._m(104),
              t._v(" "),
              t._m(105),
              t._v(" "),
              t._m(106),
              t._m(107),
              t._v(" "),
              t._m(108),
              t._m(109),
              t._v(" "),
              t._m(110),
              s("p", [
                t._v(
                  "At last, if you would like to bind key shortcuts on a certain element, for example an input text box, we also supports named shortcuts like below:"
                )
              ]),
              t._v(" "),
              t._m(111),
              t._m(112),
              t._v(" "),
              t._m(113),
              t._v(" "),
              t._m(114),
              t._v(" "),
              t._m(115),
              t._v(" "),
              t._m(116),
              t._v(" "),
              t._m(117),
              t._v(" "),
              s("p", [
                s("em", [
                  t._v("inspired from "),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/AlmeroSteyn/react-aria-live",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("react-aria-live"), s("OutboundLink")],
                    1
                  ),
                  t._v(" by AlmeroSteyn")
                ])
              ]),
              t._v(" "),
              s("p", [
                t._v(
                  "This component is actually a wrapper which generates a invisible "
                ),
                s(
                  "a",
                  {
                    attrs: {
                      href:
                        "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [t._v("WAI-ARIA live region"), s("OutboundLink")],
                  1
                ),
                t._v(
                  " and provides a default slot which injects some methods to announce live messages on its descendant components."
                )
              ]),
              t._v(" "),
              t._m(118),
              t._v(" "),
              t._m(119),
              t._v(" "),
              t._m(120),
              t._m(121),
              t._v(" "),
              t._m(122),
              s("p", [
                t._v(
                  "Now, if you enable VoiceOver of other a11y screen readers, there will be a live message when you input something in the textbox and press the announce button."
                )
              ]),
              t._v(" "),
              t._m(123),
              t._v(" "),
              s("p", [
                t._v(
                  'But by default the live message will be announced "politely" after other voices have been spoken. If you want to announce the message immediately, you can add a second parameter with a truthy value:'
                )
              ]),
              t._v(" "),
              t._m(124),
              s("p", [
                t._v(
                  "Also there is a third boolean parameter which could announce the same message by force if the current message is same to the previous one."
                )
              ]),
              t._v(" "),
              t._m(125),
              t._v(" "),
              t._m(126),
              t._m(127),
              t._v(" "),
              t._m(128),
              t._v(" "),
              s("ul", [
                s("li", [
                  s("code", [t._v("role: string")]),
                  t._v(": "),
                  s("code", [t._v('"log"')]),
                  t._v(" by default, you can also choose other "),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Preferring_Specialized_Live_Region_Roles",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("live region roles"), s("OutboundLink")],
                    1
                  )
                ]),
                t._v(" "),
                t._m(129)
              ]),
              t._v(" "),
              t._m(130),
              t._v(" "),
              t._m(131),
              t._v(" "),
              t._m(132),
              t._v(" "),
              t._m(133)
            ]);
          },
          [
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h1", { attrs: { id: "vue-a11y-utils" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#vue-a11y-utils", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Vue A11y Utils")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "table-of-contents" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#table-of-contents", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Table of Contents")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [s("a", { attrs: { href: "#why" } }, [t._v("Why")])]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#getting-started" } }, [
                    t._v("Getting Started")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#vuearia-component" } }, [
                    s("code", [t._v("<VueAria>")]),
                    t._v(" Component")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#v-aria-custom-directive" } }, [
                    s("code", [t._v("v-aria")]),
                    t._v(" Custome Directive")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#keytravel-mixin" } }, [
                    s("code", [t._v("KeyTravel")]),
                    t._v(" Mixin")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#id-mixin" } }, [
                    s("code", [t._v("Id")]),
                    t._v(" Mixin")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#vuefocustrap-component" } }, [
                    s("code", [t._v("<VueFocusTrap>")]),
                    t._v(" Component")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#keyshortcuts-mixin" } }, [
                    s("code", [t._v("KeyShortcuts")]),
                    t._v(" Mixin")
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("a", { attrs: { href: "#vuelive-component" } }, [
                    s("code", [t._v("<VueLive>")]),
                    t._v(" Component")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "why" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#why", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Why")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("li", [
                this._v("Control the "),
                a("em", [this._v("focus")]),
                this._v(" and finish every task elegantly just by a "),
                a("em", [this._v("keyboard")]),
                this._v(".")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("li", [
                t._v("Sometimes you need set a "),
                s("em", [t._v("ID reference")]),
                t._v(" or "),
                s("em", [t._v("ID reference list")]),
                t._v(" type aria attribute with "),
                s("em", [t._v("ID")]),
                t._v(" of another DOM element. But we don't use "),
                s("em", [t._v("ID")]),
                t._v(" for such a long time right?")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "getting-started" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#getting-started", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Getting Started")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "install" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#install", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Install")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("div", { staticClass: "language-bash extra-class" }, [
                a("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                  a("code", [
                    a("span", { attrs: { class: "token function" } }, [
                      this._v("npm")
                    ]),
                    this._v(" "),
                    a("span", { attrs: { class: "token function" } }, [
                      this._v("install")
                    ]),
                    this._v(" vue-a11y-utils\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("div", { staticClass: "language-bash extra-class" }, [
                a("pre", { pre: !0, attrs: { class: "language-bash" } }, [
                  a("code", [this._v("yarn add vue-a11y-utils\n")])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "import" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#import", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Import")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-js extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-js" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token keyword" } }, [
                      t._v("import")
                    ]),
                    t._v(" "),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v("{")
                    ]),
                    t._v("\n  VueAria"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(",")
                    ]),
                    t._v("\n  directiveAria"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(",")
                    ]),
                    t._v("\n  MixinKeyTravel"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(",")
                    ]),
                    t._v("\n  MixinId"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(",")
                    ]),
                    t._v("\n  VueFocusTrap"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(",")
                    ]),
                    t._v("\n  MixinKeyShortcuts"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(",")
                    ]),
                    t._v("\n  VueLive\n"),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v("}")
                    ]),
                    t._v(" "),
                    s("span", { attrs: { class: "token keyword" } }, [
                      t._v("from")
                    ]),
                    t._v(" "),
                    s("span", { attrs: { class: "token string" } }, [
                      t._v('"vue-a11y-utils"')
                    ]),
                    s("span", { attrs: { class: "token punctuation" } }, [
                      t._v(";")
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "usage" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#usage", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Usage")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("See the docs below or some "),
                a("a", { attrs: { href: "/examples" } }, [this._v("online")]),
                this._v(" examples.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "vuearia-component" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#vuearia-component", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("<VueAria>")]),
                this._v(" Component")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("This component helps you to write "),
                a("code", [this._v("role")]),
                this._v(" and "),
                a("code", [this._v("aria-*")]),
                this._v(" attributes better.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("First you could put all "),
                a("code", [this._v("aria-*")]),
                this._v(
                  " attributes in an object. Second these a11y attributes could be inherited when more than 1 "
                ),
                a("code", [this._v("<VueAria>")]),
                this._v(" components nested. Third, it's more portable to use.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "api" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#api", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" API")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "props" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#props", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" props")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [
                  s("code", [t._v("role")]),
                  t._v(": "),
                  s("code", [t._v("string")])
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("aria")]),
                  t._v(": "),
                  s("code", [t._v("Array")]),
                  t._v(" or "),
                  s("code", [t._v("Object")])
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("tabindex")]),
                  t._v(": "),
                  s("code", [t._v("number")])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "tip custom-block" }, [
                s("p", { staticClass: "custom-block-title" }, [t._v("TIP")]),
                t._v(" "),
                s("p", [
                  t._v("When you pass "),
                  s("code", [t._v('"none"')]),
                  t._v(" or "),
                  s("code", [t._v('"appearance"')]),
                  t._v(" value into "),
                  s("code", [t._v("role")]),
                  t._v(" prop but without a "),
                  s("code", [t._v("tabindex")]),
                  t._v(" prop. The "),
                  s("code", [t._v("tabindex")]),
                  t._v(" attribute on the root element will finally be "),
                  s("code", [t._v('""')]),
                  t._v(".")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "slots" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#slots", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" slots")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  this._v(
                    "default slot: the element you would put these a11y attributes on (only one root element is accepted)"
                  )
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "for-props-role-and-aria" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#for-props-role-and-aria",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" For Props "),
                a("code", [this._v("role")]),
                this._v(" And "),
                a("code", [this._v("aria")])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("aria"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  components"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" VueAria "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      aria"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        haspopup"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("true")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        controls"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"menu2"')
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-haspopup")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("true"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-controls")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menu2"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    WAI-ARIA Quick Links\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "So the content and structure is more clear than which with a lot of "
                ),
                a("code", [this._v("aria-*")]),
                this._v(" attribute in.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("The "),
                a("code", [this._v("aria")]),
                this._v(
                  " prop could be an Array which is convenient to merge multiple "
                ),
                a("code", [this._v("aria-*")]),
                this._v(" attribute from different places:")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v(
                          "[\n      ariaData,\n      ariaProps,\n      otherAriaFromSomewhereElse\n    ]"
                        ),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n  "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("otherAriaFromSomewhereElse"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("ariaProps"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("ariaData"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n        "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("aria"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "for-prop-tabindex" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#for-prop-tabindex", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" For Prop "),
                a("code", [this._v("tabindex")])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "If you want to make a ARIA widget focusable which is just a "
                ),
                a("code", [this._v("<div>")]),
                this._v(". You should give it a "),
                a("code", [this._v("tabindex")]),
                this._v(" attribute. For example:")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":tabindex")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("0"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n  "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("p", [
                t._v("When you pass "),
                s("code", [t._v('"none"')]),
                t._v(" or "),
                s("code", [t._v('"appearance"')]),
                t._v(" value into "),
                s("code", [t._v("role")]),
                t._v(" prop but without a "),
                s("code", [t._v("tabindex")]),
                t._v(" prop. The "),
                s("code", [t._v("tabindex")]),
                t._v(" attribute on the root element will finally be "),
                s("code", [t._v('""')]),
                t._v(". For examples:")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token comment" } }, [
                      t._v(
                        "\x3c!-- won't be focused by click or TAB key --\x3e"
                      )
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("none"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("tabindex")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("0"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("menubutton"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token comment" } }, [
                      t._v(
                        "\x3c!-- won't be focused TAB key but could be focused by click --\x3e"
                      )
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueAria")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("none"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":tabindex")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("-1"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("button"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("tabindex")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("0"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("WAI-ARIA Quick Links"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueAria")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "v-aria-custom-directive" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#v-aria-custom-directive",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("v-aria")]),
                this._v(" Custom Directive")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "If you prefer using directives rather than components, here is another choise: "
                ),
                a("code", [this._v("v-aria")]),
                this._v(" custom directive.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("It helps you to write "),
                a("code", [this._v("aria-*")]),
                this._v(" attributes better throught a Vue custom directive.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("Almost the same to the "),
                a("code", [this._v("aria")]),
                this._v(" prop in "),
                a("code", [this._v("<VueAria>")]),
                this._v(" component, let you put all "),
                a("code", [this._v("aria-*")]),
                this._v(" attributes in an object or array.")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "tip custom-block" }, [
                s("p", { staticClass: "custom-block-title" }, [t._v("TIP")]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Because the custom directive would modify the DOM element. It is different from component which renders virtual DOM. So "
                  ),
                  s("code", [t._v("v-aria")]),
                  t._v(" will run after all "),
                  s("code", [t._v("<VueAria>")]),
                  t._v(
                    " executed if you put both of them on a same DOM element. And the performance of "
                  ),
                  s("code", [t._v("v-aria")]),
                  t._v(" would be a little bit slow than "),
                  s("code", [t._v("<VueAria>")]),
                  t._v(" if you use them quite a lot.")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples-2" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples-2", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("i")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("class")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("icon-save"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("button"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-aria")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("aria"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      aria"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        label"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"save your changes"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        controls"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"id-of-a-textbox"')
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  directives"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    aria"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" directiveAria\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("i")
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("class")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("icon-save"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("role")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("button"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-label")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("save your changes"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-controls")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("id-of-a-textbox"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n  "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("Btw. there is not custom directives such as "),
                a("code", [this._v("v-role")]),
                this._v(" and "),
                a("code", [this._v("v-tabindex")]),
                this._v(
                  " because you could set the two raw attributes directly on a component or an element with "
                ),
                a("code", [this._v("v-aria")]),
                this._v(".")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "keytravel-mixin" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#keytravel-mixin", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("KeyTravel")]),
                this._v(" Mixin")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "This mixin help you travel through focusable items by "
                ),
                a("em", [this._v("arrow")]),
                this._v(
                  " keys in a Vue component. At the same time you could easily fire an action by "
                ),
                a("em", [this._v("enter")]),
                this._v(" key or "),
                a("em", [this._v("space")]),
                this._v(" key.")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples-3" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples-3", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "auto-focus" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#auto-focus", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Auto-focus")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "The first example is about auto-focus. Make sure where is a value (through a prop/data/computed etc.) named "
                ),
                a("code", [this._v("autofocus")]),
                this._v(
                  " in the component. When it's truthy, the item returned by "
                ),
                a("code", [this._v("getAutofocusItem()")]),
                this._v(" would be focused when component mounted to the DOM.")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("btn"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Click!"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinKeyTravel"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token comment" } }, [
                          t._v(
                            "// You can also define this value through `prop` or `computed` etc."
                          )
                        ]),
                        t._v("\n      autofocus"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("true")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  methods"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token comment" } }, [
                          t._v(
                            "// The mixin will call this method to find the focus when mounted to the DOM."
                          )
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("getAutofocusItem")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("$refs"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("btn"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a(
                "h4",
                { attrs: { id: "focus-travel-using-arrow-keys" } },
                [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#focus-travel-using-arrow-keys",
                        "aria-hidden": "true"
                      }
                    },
                    [this._v("#")]
                  ),
                  this._v(" Focus Travel Using Arrow Keys")
                ]
              );
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [
                  s("p", [s("code", [t._v("App.vue")]), t._v(":")]),
                  t._v(" "),
                  s("div", { staticClass: "language-vue extra-class" }, [
                    s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                      s("code", [
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("template")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("div")
                          ]),
                          t._v(" "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("role")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("list"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v(" "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("@keydown")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("keyTravel"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("ListItem")
                          ]),
                          t._v("\n      "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("ref")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("items"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v("\n      "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("v-for")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("option in options"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v("\n      "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v(":key")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("option.value"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v("\n      "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v(":text")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("option.text"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v("\n      "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v(":value")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("option.value"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v("\n    "),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v("/>")
                          ])
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("</")]
                            ),
                            t._v("div")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("</")]
                            ),
                            t._v("template")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n\n"),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("script")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        s(
                          "span",
                          {
                            attrs: { class: "token script language-javascript" }
                          },
                          [
                            t._v("\n"),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("export")
                            ]),
                            t._v(" "),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("default")
                            ]),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n  mixins"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("[")]
                            ),
                            t._v("MixinKeyTravel"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("]")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n  components"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v(" ListItem "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n  "),
                            s("span", { attrs: { class: "token function" } }, [
                              t._v("data")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("return")
                            ]),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n      autofocus"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s("span", { attrs: { class: "token boolean" } }, [
                              t._v("true")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n      "),
                            s("span", { attrs: { class: "token comment" } }, [
                              t._v(
                                "// Only ArrowUp and ArrowDown keys would work."
                              )
                            ]),
                            t._v("\n      orientation"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s("span", { attrs: { class: "token string" } }, [
                              t._v('"vertical"')
                            ]),
                            t._v("\n    "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(";")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n  props"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n    options"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" Array\n  "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n  methods"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s("span", { attrs: { class: "token comment" } }, [
                              t._v(
                                "// You need to define all focusable items here. And if you don't define"
                              )
                            ]),
                            t._v("\n    "),
                            s("span", { attrs: { class: "token comment" } }, [
                              t._v(
                                "// getAutofocusItem(), the first one you defined will be auto-focused."
                              )
                            ]),
                            t._v("\n    "),
                            s("span", { attrs: { class: "token function" } }, [
                              t._v("getKeyItems")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n      "),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("return")
                            ]),
                            t._v(" "),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("this")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(".")]
                            ),
                            t._v("$refs"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(".")]
                            ),
                            t._v("items"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(";")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ]
                        ),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("</")]
                            ),
                            t._v("script")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n")
                      ])
                    ])
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("p", [s("code", [t._v("ListItem.vue")]), t._v(":")]),
                  t._v(" "),
                  s("div", { staticClass: "language-vue extra-class" }, [
                    s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                      s("code", [
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("template")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("div")
                          ]),
                          t._v(" "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("role")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("listitem"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v(" "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("tabindex")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("-1"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          t._v(" "),
                          s("span", { attrs: { class: "token attr-name" } }, [
                            t._v("@click")
                          ]),
                          s("span", { attrs: { class: "token attr-value" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            ),
                            t._v("fireAction"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v('"')]
                            )
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("{{ text }}"),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("</")]
                            ),
                            t._v("div")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("</")]
                            ),
                            t._v("template")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n\n"),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("<")]
                            ),
                            t._v("script")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        s(
                          "span",
                          {
                            attrs: { class: "token script language-javascript" }
                          },
                          [
                            t._v("\n"),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("export")
                            ]),
                            t._v(" "),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("default")
                            ]),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n  props"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n    text"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" String"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n    value"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" String\n  "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(",")]
                            ),
                            t._v("\n  methods"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(":")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n    "),
                            s("span", { attrs: { class: "token function" } }, [
                              t._v("fireAction")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("(")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(")")]
                            ),
                            t._v(" "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("{")]
                            ),
                            t._v("\n      "),
                            s("span", { attrs: { class: "token function" } }, [
                              t._v("alert")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("(")]
                            ),
                            s("span", { attrs: { class: "token keyword" } }, [
                              t._v("this")
                            ]),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(".")]
                            ),
                            t._v("value"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(")")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(";")]
                            ),
                            t._v("\n    "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            t._v("\n  "),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            t._v("\n"),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("}")]
                            ),
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v(";")]
                            ),
                            t._v("\n")
                          ]
                        ),
                        s("span", { attrs: { class: "token tag" } }, [
                          s("span", { attrs: { class: "token tag" } }, [
                            s(
                              "span",
                              { attrs: { class: "token punctuation" } },
                              [t._v("</")]
                            ),
                            t._v("script")
                          ]),
                          s("span", { attrs: { class: "token punctuation" } }, [
                            t._v(">")
                          ])
                        ]),
                        t._v("\n")
                      ])
                    ])
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ol", [
                s("li", [
                  t._v("Bind "),
                  s("code", [t._v('@keydown="keyTravel"')]),
                  t._v(" to the root DOM element of your component.")
                ]),
                t._v(" "),
                s("li", [
                  t._v("Put a prop/data/computed named "),
                  s("code", [t._v("orientation")]),
                  t._v(" to define which arrow keys would work.")
                ]),
                t._v(" "),
                s("li", [
                  t._v("Define a "),
                  s("code", [t._v("getKeyItems()")]),
                  t._v(" method to return all focusable items.")
                ]),
                t._v(" "),
                s("li", [
                  t._v("Define a "),
                  s("code", [t._v("fireAction()")]),
                  t._v(" method in "),
                  s("code", [t._v("<ListItem>")]),
                  t._v(" for the action when user press enter or space.")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "api-2" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#api-2", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" API")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "method-you-can-call" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#method-you-can-call",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" Method you can call")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [
                  s("p", [
                    s("code", [
                      t._v(
                        "keyTravel(event: KeyboardEvent, config?: KeyConfig): void"
                      )
                    ])
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v("The second parameter is optional. The key is the "),
                    s("code", [t._v("key")]),
                    t._v(
                      ' in the keyboard event, and the value if the "travel signal" to trigger when user press the corresponding key.'
                    )
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v("All available travel signals: "),
                    s("code", [t._v("prev")]),
                    t._v(", "),
                    s("code", [t._v("next")]),
                    t._v(", "),
                    s("code", [t._v("prevPage")]),
                    t._v(", "),
                    s("code", [t._v("nextPage")]),
                    t._v(", "),
                    s("code", [t._v("first")]),
                    t._v(", "),
                    s("code", [t._v("last")]),
                    t._v(", "),
                    s("code", [t._v("action")]),
                    t._v(".")
                  ]),
                  t._v(" "),
                  s("p", [t._v("Default config:")]),
                  t._v(" "),
                  s("ul", [
                    s("li", [
                      s("code", [t._v("ArrowUp")]),
                      t._v(": "),
                      s("code", [t._v("prev")]),
                      t._v(" when "),
                      s("code", [t._v("this.orientation")]),
                      t._v(" is "),
                      s("code", [t._v("vertical")]),
                      t._v(" or empty")
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("ArrowDown")]),
                      t._v(": "),
                      s("code", [t._v("next")]),
                      t._v(" when "),
                      s("code", [t._v("this.orientation")]),
                      t._v(" is "),
                      s("code", [t._v("vertical")]),
                      t._v(" or empty")
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("ArrowLeft")]),
                      t._v(": "),
                      s("code", [t._v("prev")]),
                      t._v(" when "),
                      s("code", [t._v("this.orientation")]),
                      t._v(" is "),
                      s("code", [t._v("horizontal")]),
                      t._v(" or empty")
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("ArrowRight")]),
                      t._v(": "),
                      s("code", [t._v("next")]),
                      t._v(" when "),
                      s("code", [t._v("this.orientation")]),
                      t._v(" is "),
                      s("code", [t._v("horizontal")]),
                      t._v(" or empty")
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("Home")]),
                      t._v(": "),
                      s("code", [t._v("first")])
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("End")]),
                      t._v(": "),
                      s("code", [t._v("last")])
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("Enter")]),
                      t._v(": "),
                      s("code", [t._v("action")])
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("Space")]),
                      t._v(": "),
                      s("code", [t._v("action")])
                    ])
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "values-you-can-define" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#values-you-can-define",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" Values you can define")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [a("code", [this._v("autofocus: boolean")])]),
                this._v(" "),
                a("li", [
                  a("code", [
                    this._v("orientation: 'horizontal' | 'vertical' | other")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "methods-you-can-override" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#methods-you-can-override",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" Methods you can override")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [a("em", [this._v("Main method for travel:")])]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  a("code", [
                    this._v("getKeyItems(): Array<Vue | HTMLElement>")
                  ]),
                  this._v(": return an empty array by default")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                a("em", [this._v("Main method for auto-focus:")])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  a("code", [this._v("getAutofocusItem(): void")]),
                  this._v(": return first key item by default")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                a("em", [this._v("Methods you can customize to fire action:")])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  a("code", [
                    this._v("fireAction(item: Vue | HTMLElement): void")
                  ]),
                  this._v(": call "),
                  a("code", [this._v("item.fireAction()")]),
                  this._v(" by default")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                a("em", [this._v("Methods you can customize to travel:")])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [
                  s("code", [t._v("goPrev(): void")]),
                  t._v(": focus previous item")
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("goNext(): void")]),
                  t._v(": focus next item")
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("goFirst(): void")]),
                  t._v(": focus the first item")
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("goLast(): void")]),
                  t._v(": focus the last item")
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("goNextPage(): void")]),
                  t._v(": do nothing by default")
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("goPrevPage(): void")]),
                  t._v(": do nothing by default")
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("goAction(): void")]),
                  t._v(": fire action at the current focused item")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a(
                "h4",
                { attrs: { id: "method-you-can-define-in-item-component" } },
                [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#method-you-can-define-in-item-component",
                        "aria-hidden": "true"
                      }
                    },
                    [this._v("#")]
                  ),
                  this._v(" Method you can define in item component")
                ]
              );
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [a("code", [this._v("fireAction(): void")])])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "id-mixin" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#id-mixin", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("Id")]),
                this._v(" Mixin")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("p", [
                t._v(
                  "In modern web framework today, the id attribute of an element is almost never used. But in WAI-ARIA, some "
                ),
                s("code", [t._v("aria-*")]),
                t._v(" attributes like "),
                s("code", [t._v("aria-controls")]),
                t._v(", "),
                s("code", [t._v("aria-labelledby")]),
                t._v(" only accept "),
                s("em", [t._v("id reference")]),
                t._v(" or "),
                s("em", [t._v("id reference list")]),
                t._v(
                  ". Another problem about id is that it's always global unique. But every Vue component has its own scope. It's not easy to make sure the id in this component wouldn't be used in other Vue components."
                )
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples-4" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples-4", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "generate-unique-id" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#generate-unique-id",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" Generate unique id")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [a("code", [this._v("input.vue")]), this._v(":")]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("localId"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("label")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("label"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("`${localId}-label`"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Username"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("label")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("input"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("`${localId}-input`"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":aria-labelledby")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("`${localId}-label`"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinId"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("In this example, the "),
                a("code", [this._v("localId")]),
                this._v(" is a data member which is generated by "),
                a("code", [this._v("Id")]),
                this._v(
                  " mixin. It's globally unique so you don't need worry about that."
                )
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a(
                "h4",
                { attrs: { id: "use-id-passed-from-parent-component" } },
                [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#use-id-passed-from-parent-component",
                        "aria-hidden": "true"
                      }
                    },
                    [this._v("#")]
                  ),
                  this._v(" Use id passed from parent component")
                ]
              );
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "Think about you should bind a clear button out of the input component above. For this kind of cases, you can easily set an "
                ),
                a("code", [this._v("id")]),
                this._v(" prop to it from parent like this:")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [a("code", [this._v("foo.vue")]), this._v(":")]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueInput")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-controls")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo-input"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Clear"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("import")
                        ]),
                        t._v(" VueInput "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("from")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"input.vue"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinId"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  components"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" VueInput "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-html extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-html" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("label")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo-label"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Username"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("label")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("id")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo-input"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-labelledby")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo-label"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("aria-controls")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("foo-input"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Clear"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "api-3" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#api-3", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" API")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "props-you-can-use" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#props-you-can-use", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Props you can use")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [a("li", [a("code", [this._v("id: string")])])]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "values-you-can-get" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#values-you-can-get",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" Values you can get")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [a("code", [this._v("localId: string")])])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "vuefocustrap-component" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#vuefocustrap-component",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("<VueFocusTrap>")]),
                this._v(" Component")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                a("code", [this._v("<VueFocusTrap>")]),
                this._v(
                  " gives you a easy way to trap focus by just two events "
                ),
                a("code", [this._v("gofirst")]),
                this._v(" and "),
                a("code", [this._v("golast")]),
                this._v(
                  " which should bind handlers to reset the focus to the first or last focusable target in the dialog."
                )
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples-5" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples-5", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("p", [
                t._v(
                  "In this example below, after you open the modal dialog by click the trigger button, the focus will always in the 4 control elements in "
                ),
                s("code", [t._v("<form>")]),
                t._v(", whatever you press "),
                s("kbd", [t._v("tab")]),
                t._v(", "),
                s("kbd", [t._v("tab")]),
                t._v(" + "),
                s("kbd", [t._v("shift")]),
                t._v(" or click somewhere out of the dialog:")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("trigger"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("shown = true"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      Open a Modal Dialog\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("form")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("class")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("dialog"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-show")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("shown"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueFocusTrap")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@gofirst")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("goFirst"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@golast")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("goLast"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n        "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("label")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Email: "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("email"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("email"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("label")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n        "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("label")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Password: "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("password"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("password"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("label")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n        "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("login"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("shown = false"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Login"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n        "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("cancel"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Cancel"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueFocusTrap")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("form")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  components"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" VueFocusTrap "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" shown"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("false")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  watch"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("shown")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("if")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("$nextTick")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=>")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goFirst")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("else")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("$nextTick")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=>")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goTrigger")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  methods"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goFirst")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("$refs"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("email"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("focus")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goLast")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("$refs"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("cancel"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("focus")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goTrigger")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("$refs"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("trigger"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("focus")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("div", { staticClass: "tip custom-block" }, [
                a("p", { staticClass: "custom-block-title" }, [this._v("TIP")]),
                this._v(" "),
                a("p", [
                  this._v(
                    "Additionally, as a best practise of managing focus, you'd better auto-focus the first control element in when the dialog shows up, and auto-focus the trigger button back when the dialog closed. Just like the code logic in the example above."
                  )
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "api-4" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#api-4", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" API")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "slots-2" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#slots-2", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Slots")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  this._v("default slot: the content you would trap focus in.")
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "events" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#events", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Events")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  a("code", [this._v("gofirst")]),
                  this._v(
                    ": when you should manually set focus to the first focusable element"
                  )
                ]),
                this._v(" "),
                a("li", [
                  a("code", [this._v("golast")]),
                  this._v(
                    ": when you should manually set focus to the last focusable element"
                  )
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a(
                "h3",
                {
                  attrs: {
                    id:
                      "using-vuefocustrap-component-and-keytravel-mixin-together"
                  }
                },
                [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href:
                          "#using-vuefocustrap-component-and-keytravel-mixin-together",
                        "aria-hidden": "true"
                      }
                    },
                    [this._v("#")]
                  ),
                  this._v(" Using "),
                  a("code", [this._v("<VueFocusTrap>")]),
                  this._v(" Component and "),
                  a("code", [this._v("KeyTravel")]),
                  this._v(" Mixin Together")
                ]
              );
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("The better thing is: you can combine "),
                a("code", [this._v("<VueFocusTrap>")]),
                this._v(" component and "),
                a("code", [this._v("KeyTravel")]),
                this._v(" mixin together in a widget like actionsheet.")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("trigger"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("shown = true"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      Open a Modal Dialog\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("ul")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("class")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("actionsheet"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-show")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("shown"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@keydown")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("keyTravel"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueFocusTrap")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@gofirst")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("goFirst"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@golast")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("goLast"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n        "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("li")
                      ]),
                      t._v("\n          "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-for")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("option in options"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n          "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v(":key")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("option.value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n          "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("ref")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("items"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n          "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("tabindex")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("0"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n        "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("{{ option.text }}"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("li")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n      "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueFocusTrap")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("ul")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinKeyTravel"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  components"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" VueFocusTrap "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  props"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" options"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" Array"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" String "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" shown"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("false")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" orientation"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v("'vertical'")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  watch"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("shown")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("if")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("$nextTick")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=>")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("getAutofocusItem")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("focus")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("else")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("$nextTick")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=>")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goTrigger")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  methods"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("getKeyItems")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("$refs"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("items"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("getAutofocusItem")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("const")
                        ]),
                        t._v(" items "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("getKeyItems")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("const")
                        ]),
                        t._v(" index "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("options"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("map")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("option "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=>")
                        ]),
                        t._v(" option"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("indexOf")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" items"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("index"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("||")
                        ]),
                        t._v(" items"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        s("span", { attrs: { class: "token number" } }, [
                          t._v("0")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("goTrigger")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("$refs"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("trigger"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("focus")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("fireAction")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("item"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("const")
                        ]),
                        t._v(" items "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("getKeyItems")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("const")
                        ]),
                        t._v(" index "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("options"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("map")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("option "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=>")
                        ]),
                        t._v(" option"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("indexOf")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("const")
                        ]),
                        t._v(" currentIndex "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" items"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("indexOf")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("item"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("if")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("index "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("!==")
                        ]),
                        t._v(" currentIndex"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("const")
                        ]),
                        t._v(" option "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("options"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("index"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("if")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("option"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n          "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("$emit")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v("'input'")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("value"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("this")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(".")
                        ]),
                        t._v("shown "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("=")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("false")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "keyshortcuts-mixin" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#keyshortcuts-mixin",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("KeyShortcuts")]),
                this._v(" Mixin")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples-6" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples-6", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("Listen "),
                a("kbd", [this._v("CMD")]),
                this._v(" + "),
                a("kbd", [this._v("G")]),
                this._v(":")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("..."),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinKeyShortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  shortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"G"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      modifiers"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" meta"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("true")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("alert")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"trigger: CMD + G"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("Another way to config "),
                a("kbd", [this._v("CMD")]),
                this._v(" + "),
                a("kbd", [this._v("G")]),
                this._v(" as a "),
                a("code", [this._v("keys")]),
                this._v(" sequence:")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("..."),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinKeyShortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  shortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      keys"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"G"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("modifiers"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" meta"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("true")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("alert")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"trigger: CMD + G"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("You can also quickly config each key in "),
                a("code", [this._v("keys")]),
                this._v(" as a string if there is no modifiers to declare:")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("..."),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinKeyShortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  shortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      keys"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"a"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"s"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"d"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"f"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("alert")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"trigger: A-S-D-F"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("text"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("value")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("CMD + G"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@keydown")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("bindShortcut($event, "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("'")
                        ]),
                        t._v("foo"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("'")
                        ]),
                        t._v(")"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("text"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("value")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("CMD + K"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n      "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@keydown")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("bindShortcut($event, "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("'")
                        ]),
                        t._v("bar"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("'")
                        ]),
                        t._v(")"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v("\n    "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  mixins"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("MixinKeyShortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  shortcuts"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    foo"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"g"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        modifiers"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" meta"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("true")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n          "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("alert")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"trigger: CMD + G"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    bar"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"k"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        modifiers"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" meta"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("true")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n          "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("alert")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"trigger: CMD + K"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n        "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "api-5" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#api-5", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" API")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "new-option-you-can-define" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#new-option-you-can-define",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" New option you can define")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [
                  s("p", [
                    s("code", [t._v("shortcuts: Array<ShortcutConfig>")])
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("p", [
                    s("code", [
                      t._v("shortcuts: Record<string, ShortcutConfig>")
                    ])
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("p", [
                    s("code", [
                      t._v("shortcuts: Record<string, Array<ShortcutConfig>>")
                    ])
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v("The interface "),
                    s("code", [t._v("ShortcutConfig")]),
                    t._v(" is like:")
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "language-ts extra-class" }, [
                    s("pre", { pre: !0, attrs: { class: "language-ts" } }, [
                      s("code", [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("string")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  modifiers"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    ctrl"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    shift"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n    alt"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token comment" } }, [
                          t._v("// you can also use `option`")
                        ]),
                        t._v("\n    meta"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token comment" } }, [
                          t._v("// you can also use `cmd` or `window`")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" KeyboardEvent"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("|")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  keys"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("string")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      modifiers"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n        ctrl"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        shift"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n        alt"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token comment" } }, [
                          t._v("// you can also use `option`")
                        ]),
                        t._v("\n        meta"),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("?")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("boolean")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token comment" } }, [
                          t._v("// you can also use `cmd` or `window`")
                        ]),
                        t._v("\n      "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token operator" } }, [
                          t._v("|")
                        ]),
                        t._v("\n    key"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token builtin" } }, [
                          t._v("string")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("handle")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        t._v("event"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" KeyboardEvent"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n")
                      ])
                    ])
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "methods-you-can-use" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: {
                      href: "#methods-you-can-use",
                      "aria-hidden": "true"
                    }
                  },
                  [this._v("#")]
                ),
                this._v(" Methods you can use")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [
                  a("code", [
                    this._v("bindShortcut(event: KeyboardEvent, name: string)")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h2", { attrs: { id: "vuelive-component" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#vuelive-component", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" "),
                a("code", [this._v("<VueLive>")]),
                this._v(" Component")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "examples-7" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#examples-7", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Examples")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [a("code", [this._v("App.vue")]), this._v(":")]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("VueLive")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("Foo")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("VueLive")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  components"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" VueLive "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [a("code", [this._v("Foo.vue")]), this._v(":")]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    Message: "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("text"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-model")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("message"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("announce(message)"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Announce"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  inject"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"announce"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v(" message"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('""')
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v("The injected method "),
                a("code", [this._v("announce(message)")]),
                this._v(" could announce live message to the screen reader.")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    Message: "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("text"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-model")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("message"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("checkbox"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-model")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("immediately"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v(": immediately\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("announce(message, immediately)"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Announce"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  inject"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"announce"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      message"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('""')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      immediately"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("false")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("p", [
                this._v(
                  "As the example below, you can choose the way by two parameters: "
                ),
                a("code", [this._v("immediately")]),
                this._v(" and "),
                a("code", [this._v("force")]),
                this._v(
                  ". And another injected method could manually clear the message history. That is another way to ensure the same message could be announced."
                )
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("div", { staticClass: "language-vue extra-class" }, [
                s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                  s("code", [
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    Message: "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("text"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-model")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("message"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("checkbox"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-model")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("immediately"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v(": immediately\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("input")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("type")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("checkbox"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("v-model")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("force"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v("/>")
                      ])
                    ]),
                    t._v(": force\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("announce(message, immediately, force)"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Announce"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n    "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("button")
                      ]),
                      t._v(" "),
                      s("span", { attrs: { class: "token attr-name" } }, [
                        t._v("@click")
                      ]),
                      s("span", { attrs: { class: "token attr-value" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("=")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ]),
                        t._v("clear()"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v('"')
                        ])
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("Clear"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("button")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n  "),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("div")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("template")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n\n"),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("<")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    s(
                      "span",
                      { attrs: { class: "token script language-javascript" } },
                      [
                        t._v("\n"),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("export")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("default")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n  inject"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("[")
                        ]),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"announce"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('"clear"')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("]")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token function" } }, [
                          t._v("data")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("(")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(")")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token keyword" } }, [
                          t._v("return")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("{")
                        ]),
                        t._v("\n      message"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token string" } }, [
                          t._v('""')
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      immediately"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("false")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(",")
                        ]),
                        t._v("\n      force"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(":")
                        ]),
                        t._v(" "),
                        s("span", { attrs: { class: "token boolean" } }, [
                          t._v("false")
                        ]),
                        t._v("\n    "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n  "),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        t._v("\n"),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("}")
                        ]),
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v(";")
                        ]),
                        t._v("\n")
                      ]
                    ),
                    s("span", { attrs: { class: "token tag" } }, [
                      s("span", { attrs: { class: "token tag" } }, [
                        s("span", { attrs: { class: "token punctuation" } }, [
                          t._v("</")
                        ]),
                        t._v("script")
                      ]),
                      s("span", { attrs: { class: "token punctuation" } }, [
                        t._v(">")
                      ])
                    ]),
                    t._v("\n")
                  ])
                ])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h3", { attrs: { id: "api-6" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#api-6", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" API")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "props-2" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#props-2", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Props")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("li", [
                a("code", [this._v("label: string")]),
                this._v(": the label of the live region")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "slots-3" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#slots-3", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Slots")
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("ul", [
                a("li", [this._v("default slot: the content you would wrap.")])
              ]);
            },
            function() {
              var t = this.$createElement,
                a = this._self._c || t;
              return a("h4", { attrs: { id: "provide" } }, [
                a(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#provide", "aria-hidden": "true" }
                  },
                  [this._v("#")]
                ),
                this._v(" Provide")
              ]);
            },
            function() {
              var t = this,
                a = t.$createElement,
                s = t._self._c || a;
              return s("ul", [
                s("li", [
                  s("code", [
                    t._v(
                      "announce(message: string, immediately: boolean, force: boolean)"
                    )
                  ]),
                  t._v(": announce message to screen reader\n"),
                  s("ul", [
                    s("li", [
                      s("code", [t._v("message")]),
                      t._v(": the message text would be announced")
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("immediately")]),
                      t._v(': whether announce immediately or "politely"')
                    ]),
                    t._v(" "),
                    s("li", [
                      s("code", [t._v("force")]),
                      t._v(
                        ": whether announce by force whatever the message is same to the previous one"
                      )
                    ])
                  ])
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("clear()")]),
                  t._v(
                    ": clear the previous message history to ensure the next message 100% would be announced"
                  )
                ]),
                t._v(" "),
                s("li", [
                  s("code", [t._v("isBusy(busy: boolean)")]),
                  t._v(
                    " if you set it true, only the last message you send during that time would be announced after you set it false later "
                  ),
                  s("em", [
                    t._v(
                      "(experimental, not sure screen readers support that well)"
                    )
                  ])
                ])
              ]);
            }
          ],
          !1,
          null,
          null,
          null
        );
      e.options.__file = "README.md";
      a.default = e.exports;
    }
  }
]);
