(window.webpackJsonp=window.webpackJsonp||[]).push([[2104],{2449:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"drop-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drop-table"}},[t._v("#")]),t._v(" Drop Table")]),t._v(" "),s("h2",{attrs:{id:"drop-table-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drop-table-2"}},[t._v("#")]),t._v(" Drop Table")]),t._v(" "),s("p",[t._v("Drop Table is used to delete the table from database.")]),t._v(" "),s("p",[s("strong",[t._v("Creating Table:")])]),t._v(" "),s("p",[t._v("Creating a table named tbl and then deleting the created table")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    submission_date "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Dropping Table:")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("blockquote"),t._v(" "),s("p",[s("strong",[t._v("PLEASE NOTE")])]),s("p",[t._v("Dropping table will completely delete the table from the database and\nall its information, and it will not be recovered.")]),s("p"),t._v(" "),s("h2",{attrs:{id:"drop-tables-from-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drop-tables-from-database"}},[t._v("#")]),t._v(" Drop tables from database")]),t._v(" "),s("p",[t._v("DROP TABLE Database.table_name")]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[t._v("DROP TABLE table_name;")]),t._v(" "),s("li",[t._v("DROP TABLE IF EXISTS table_name;  -- to avoid pesky error in automated script")]),t._v(" "),s("li",[t._v("DROP TABLE t1, t2, t3;   -- DROP multiple tables")]),t._v(" "),s("li",[t._v("DROP TEMPORARY TABLE t;  -- DROP a table from CREATE TEMPORARY TABLE ...")])]),t._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Details")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("TEMPORARY")]),t._v(" "),s("td",[t._v("Optional. It specifies that only temporary tables should be dropped by the DROP TABLE statement.")])]),t._v(" "),s("tr",[s("td",[t._v("IF EXISTS")]),t._v(" "),s("td",[t._v("Optional. If specified, the DROP TABLE statement will not raise an error if one of the tables does not exist.")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);