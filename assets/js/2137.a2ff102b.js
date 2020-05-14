(window.webpackJsonp=window.webpackJsonp||[]).push([[2137],{2484:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pivot-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pivot-queries"}},[t._v("#")]),t._v(" Pivot queries")]),t._v(" "),s("h2",{attrs:{id:"creating-a-pivot-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-pivot-query"}},[t._v("#")]),t._v(" Creating a pivot query")]),t._v(" "),s("p",[t._v("MySQL does not provide a built-in way to create pivot queries. However, these can be created using prepared statements.")]),t._v(" "),s("p",[t._v("Assume the table "),s("code",[t._v("tbl_values")]),t._v(":")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Id")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Group")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Pete")]),t._v(" "),s("td",[t._v("A")]),t._v(" "),s("td",[t._v("10")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("Pete")]),t._v(" "),s("td",[t._v("B")]),t._v(" "),s("td",[t._v("20")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("John")]),t._v(" "),s("td",[t._v("A")]),t._v(" "),s("td",[t._v("10")])])])]),t._v(" "),s("p",[t._v("Request: Create a query that shows the sum of "),s("code",[t._v("Value")]),t._v(" for each "),s("code",[t._v("Name")]),t._v("; the "),s("code",[t._v("Group")]),t._v(" must be column header and "),s("code",[t._v("Name")]),t._v(" must be the row header.")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 1. Create an expression that builds the columns")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sql")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" group_concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" \n        concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sum(case when `Group`=\'"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\' then `Value` end) as `"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"`"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tbl_values\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 2. Complete the SQL instruction")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sql")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select Name, "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" from tbl_values group by `Name`"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 3. Create a prepared statement")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("prepare")]),t._v(" stmt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 4. Execute the prepared statement")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("execute")]),t._v(" stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Result:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("A")]),t._v(" "),s("th",[t._v("B")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("John")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",[t._v("NULL")])]),t._v(" "),s("tr",[s("td",[t._v("Pete")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",[t._v("20")])])])]),t._v(" "),s("p",[s("strong",[t._v("Important:")]),t._v(" Deallocate the prepared statement once it's no longer needed:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deallocate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("prepare")]),t._v(" stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("a",{attrs:{href:"http://sqlfiddle.com/#!9/4a3e88/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example on SQL Fiddle"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Pivot query creation in MySQL relies upon the "),s("code",[t._v("GROUP_CONCAT()")]),t._v(" function. If the result of the expression that creates the columns of the pivot query is expected to be large, the value of the "),s("code",[t._v("group_concat_max_len")]),t._v(" variable must be increased:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" group_concat_max_len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- This should be enough for most cases")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);