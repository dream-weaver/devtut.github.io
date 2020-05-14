(window.webpackJsonp=window.webpackJsonp||[]).push([[1209],{1554:function(a,t,s){"use strict";s.r(t);var n=s(19),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"partial-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partial-application"}},[a._v("#")]),a._v(" Partial Application")]),a._v(" "),s("h2",{attrs:{id:"sections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[a._v("#")]),a._v(" Sections")]),a._v(" "),s("p",[a._v("Sectioning is a concise way to partially apply arguments to infix operators.")]),a._v(" "),s("p",[a._v('For example, if we want to write a function which adds "ing" to the end of a word we can use a section to succinctly define a function.')]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"laugh"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"laughing"')]),a._v("\n\n")])])]),s("p",[a._v("Notice how we have partially applied the second argument. Normally, we can only partially apply the arguments in the specified order.")]),a._v(" "),s("p",[a._v("We can also use left sectioning to partially apply the first argument.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"re"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"do"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"redo"')]),a._v("\n\n")])])]),s("p",[a._v("We could equivalently write this using normal prefix partial application:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"re"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"do"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"redo"')]),a._v("\n\n")])])]),s("h3",{attrs:{id:"a-note-on-subtraction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-subtraction"}},[a._v("#")]),a._v(" A Note on Subtraction")]),a._v(" "),s("p",[a._v("Beginners often incorrectly section negation.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("***")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("error")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Could")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("not")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("deduce")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n\n")])])]),s("p",[a._v("This does not work as "),s("code",[a._v("-1")]),a._v(" is parsed as the literal "),s("code",[a._v("-1")]),a._v(" rather than the sectioned operator "),s("code",[a._v("-")]),a._v(" applied to "),s("code",[a._v("1")]),a._v(". The "),s("code",[a._v("subtract")]),a._v(" function exists to circumvent this issue.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("subtract")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"partially-applied-adding-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partially-applied-adding-function"}},[a._v("#")]),a._v(" Partially Applied Adding Function")]),a._v(" "),s("p",[a._v("We can use "),s("strong",[a._v("partial application")]),a._v(' to "lock" the first argument. After applying one argument we are left with a function which expects one more argument before returning the result.')]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n")])])]),s("p",[a._v("We can then use "),s("code",[a._v("addOne")]),a._v(" in order to add one to an "),s("code",[a._v("Int")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("map")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("addOne")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"returning-a-partially-applied-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returning-a-partially-applied-function"}},[a._v("#")]),a._v(" Returning a Partially Applied Function")]),a._v(" "),s("p",[a._v("Returning partially applied functions is one technique to write concise code.")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Int")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n")])])]),s("p",[a._v("In this example (+x) is a partially applied function. Notice that the second parameter to the add function does not need to be specified in the function definition.")]),a._v(" "),s("p",[a._v("The result of calling "),s("code",[a._v("add 5 2")]),a._v(" is seven.")]),a._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[a._v("#")]),a._v(" Remarks")]),a._v(" "),s("p",[a._v("Let's clear up some misconceptions that beginners might make.")]),a._v(" "),s("p",[a._v("You may have encountered functions such as:")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Ord")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v("  \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("m")]),a._v("  \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("otherwise")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("n")]),a._v("  \n\n")])])]),s("p",[a._v("Beginners will typically view "),s("code",[a._v("max :: (Ord a) => a -> a -> a")]),a._v(" as function that takes two arguments (values) of type "),s("code",[a._v("a")]),a._v(" and returns a value of type "),s("code",[a._v("a")]),a._v(". However, what is really happening, is that "),s("code",[a._v("max")]),a._v(" is "),s("strong",[a._v("taking one argument")]),a._v(" of type "),s("code",[a._v("a")]),a._v(" and "),s("strong",[a._v("returning a function")]),a._v(" of type "),s("code",[a._v("a -> a")]),a._v(". This function then takes an argument of type "),s("code",[a._v("a")]),a._v(" and returns a final value of type "),s("code",[a._v("a")]),a._v(".")]),a._v(" "),s("p",[a._v("Indeed, "),s("code",[a._v("max")]),a._v(" can be written as "),s("code",[a._v("max :: (Ord a) => a -> (a -> a)")])]),a._v(" "),s("p",[a._v("Consider the type signature of "),s("code",[a._v("max")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-hs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Ord")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Num")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Ord")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("a")]),a._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Fury Road"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Fury Road"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Prelude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Fury Road"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Furiosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("max")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Fury Road"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Furiosa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  \n\n")])])]),s("p",[s("code",[a._v("max 75")]),a._v(" and "),s("code",[a._v('max "Fury Road"')]),a._v(" may not "),s("strong",[a._v("look")]),a._v(" like functions, but in actuality, they are.")]),a._v(" "),s("p",[a._v("The confusion stems from the fact that in mathematics and many, other, common programming languages, we are allowed to have functions that take multiple arguments. However, in Haskell, "),s("strong",[a._v("functions can only take one argument")]),a._v(" and they can return either values such as "),s("code",[a._v("a")]),a._v(", or functions such as "),s("code",[a._v("a -> a")]),a._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);