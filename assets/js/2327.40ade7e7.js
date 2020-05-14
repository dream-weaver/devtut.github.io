(window.webpackJsonp=window.webpackJsonp||[]).push([[2327],{2672:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"assignments-model-and-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assignments-model-and-language"}},[s._v("#")]),s._v(" Assignments model and language")]),s._v(" "),a("h2",{attrs:{id:"assignments-model-in-pl-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assignments-model-in-pl-sql"}},[s._v("#")]),s._v(" Assignments model in PL/SQL")]),s._v(" "),a("p",[s._v("All programming languages allow us to assign values to variables. Usually, a value is assigned to variable, standing on left side. The prototype of the overall assignment operations in any contemporary programming language looks like this:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("left_operand assignment_operand right_operand instructions_of_stop\n\n")])])]),a("p",[s._v("This will assign right operand to the left operand. In PL/SQL this operation looks like this:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("left_operand :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" right_operand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Left operand "),a("strong",[s._v("must be always a variable")]),s._v(". Right operand can be value, variable or function:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" serveroutput "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v("\n  v_hello1 varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32767")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  v_hello2 varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32767")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  v_hello3 varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32767")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" hello "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" varchar2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello from a function!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- from a value (string literal)")]),s._v("\n  v_hello1 :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello from a value!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- from variable")]),s._v("\n  v_hello2 :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" v_hello1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- from function")]),s._v("\n  v_hello3 :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v_hello1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v_hello2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v_hello3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n\n")])])]),a("p",[s._v("When the code block is executed in SQL*Plus the following output is printed in console:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("Hello "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nHello "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nHello "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n")])])]),a("p",[s._v('There is a feature in PL/SQL that allow us to assign "from right to the left". It\'s possible to do in SELECT INTO statement. Prototype of this instrunction you will find below:')]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" literal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" column_value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" local_variable\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" aliastable_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" comparison_instructions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("This code will assign character literal to a local variable:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" serveroutput "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v("\n  v_hello varchar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32767")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world!'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" v_hello\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  dbms_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v_hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n\n")])])]),a("p",[s._v("When the code block is executed in SQL*Plus the following output is printed in console:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("Hello world"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n")])])]),a("p",[s._v('Asignment "from right to the left" '),a("strong",[s._v("is not a standard")]),s._v(", but it's valuable feature for programmers and users. Generally it's used when programmer is using cursors in PL/SQL - this technique is used, when we want to return a single scalar value or set of columns in the one line of cursor from SQL cursor.")]),s._v(" "),a("p",[s._v("Further Reading:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://docs.oracle.com/cd/E11882_01/appdev.112/e25519/fundamentals.htm#LNPLS00205",target:"_blank",rel:"noopener noreferrer"}},[s._v("Assigning Values to Variables"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);