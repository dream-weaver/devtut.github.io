(window.webpackJsonp=window.webpackJsonp||[]).push([[1986],{2333:function(e,s,t){"use strict";t.r(s);var a=t(19),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-view"}},[e._v("#")]),e._v(" CREATE VIEW")]),e._v(" "),t("h2",{attrs:{id:"create-indexed-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-indexed-view"}},[e._v("#")]),e._v(" CREATE Indexed VIEW")]),e._v(" "),t("p",[e._v("To create a view with an index, the view must be created using the "),t("code",[e._v("WITH SCHEMABINDING")]),e._v(" keywords:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" view_EmployeeInfo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" SCHEMABINDING\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("   \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" EmployeeID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        FirstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        HireDate  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Employee\nGO\n\n")])])]),t("p",[e._v("Any clustered or non-clustered indexes can be now be created:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UNIQUE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CLUSTERED")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" IX_view_EmployeeInfo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" view_EmployeeInfo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n     EmployeeID "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ASC")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n")])])]),t("p",[t("strong",[e._v("There Are some limitations to indexed Views:")])]),e._v(" "),t("li",[e._v("\nThe view definition can reference one or more tables in the same database.\n")]),e._v(" "),t("li",[e._v("\nOnce the unique clustered index is created, additional nonclustered indexes can be created against the view.\n")]),e._v(" "),t("li",[e._v("\nYou can update the data in the underlying tables – including inserts, updates, deletes, and even truncates.\n")]),e._v(" "),t("li",[e._v("\nYou can’t modify the underlying tables and columns. The view is created with the WITH SCHEMABINDING option.\n")]),e._v(" "),t("li",[e._v("\nIt can’t contain COUNT, MIN, MAX, TOP, outer joins, or a few other keywords or elements.\n")]),e._v(" "),t("p",[e._v("For more information about creating indexed Views you can read this "),t("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/ms191432.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("MSDN article"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"create-view-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-view-2"}},[e._v("#")]),e._v(" CREATE VIEW")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" view_EmployeeInfo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("   \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" EmployeeID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        FirstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        HireDate  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee\nGO\n\n")])])]),t("p",[e._v("Rows from views can be selected much like tables:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" FirstName\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" view_EmployeeInfo\n\n")])])]),t("p",[e._v("You may also create a view with a calculated column. We can modify the view above as follows by adding a calculated column:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" view_EmployeeReport\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("   \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" EmployeeID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        FirstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Coalesce")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("FirstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("' '")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Coalesce")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" FullName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        HireDate  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee\nGO\n\n")])])]),t("p",[e._v("This view adds an additional column that will appear when you "),t("code",[e._v("SELECT")]),e._v(" rows from it. The values in this additional column will be dependent on the fields "),t("code",[e._v("FirstName")]),e._v(" and "),t("code",[e._v("LastName")]),e._v(" in the table "),t("code",[e._v("Employee")]),e._v(" and will automatically update behind-the-scenes when those fields are updated.")]),e._v(" "),t("h2",{attrs:{id:"create-view-with-encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-view-with-encryption"}},[e._v("#")]),e._v(" CREATE VIEW With Encryption")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" view_EmployeeInfo\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" ENCRYPTION\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("   \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" EmployeeID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" FirstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" HireDate  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee\nGO\n\n")])])]),t("h2",{attrs:{id:"create-view-with-inner-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-view-with-inner-join"}},[e._v("#")]),e._v(" CREATE VIEW With INNER JOIN")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" view_PersonEmployee\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" P"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("LastName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        P"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("FirstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        E"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("JobTitle\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Employee "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" E\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INNER")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" Person "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" P  \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" P"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BusinessEntityID "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" E"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BusinessEntityID\nGO\n\n")])])]),t("p",[e._v("Views can use joins to select data from numerous sources like tables, table functions, or even other views. This example uses the FirstName and LastName columns from the Person table and the JobTitle column from the Employee table.")]),e._v(" "),t("p",[e._v("This view can now be used to see all corresponding rows for Managers in the database:")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" view_PersonEmployee\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" JobTitle "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("LIKE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'%Manager%'")]),e._v("\n\n")])])]),t("h2",{attrs:{id:"grouped-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grouped-views"}},[e._v("#")]),e._v(" Grouped VIEWs")]),e._v(" "),t("p",[e._v("A grouped VIEW is based on a query with a GROUP BY clause. Since each of the groups may have more than one row in the base from which it was built, these are necessarily read-only VIEWs. Such VIEWs usually have one or more aggregate functions and they are used for reporting purposes. They are also handy for working around weaknesses in SQL. Consider a VIEW that shows the largest sale in each state. The query is straightforward:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.simple-talk.com/sql/t-sql-programming/sql-view-beyond-the-basics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.simple-talk.com/sql/t-sql-programming/sql-view-beyond-the-basics/"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" BigSales "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("state_code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sales_amt_total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" state_code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("sales_amt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Sales\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" state_code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),t("h2",{attrs:{id:"union-ed-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-ed-views"}},[e._v("#")]),e._v(" UNION-ed VIEWs")]),e._v(" "),t("p",[e._v("VIEWs based on a UNION or UNION ALL operation are read-only because there is no single way to map a change onto just one row in one of the base tables. The UNION operator will remove duplicate rows from the results. Both the UNION and UNION ALL operators hide which table the rows came from. Such VIEWs must use a , because the columns in a UNION [ALL] have no names of their own. In theory, a UNION of two disjoint tables, neither of which has duplicate rows in itself should be updatable.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.simple-talk.com/sql/t-sql-programming/sql-view-beyond-the-basics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.simple-talk.com/sql/t-sql-programming/sql-view-beyond-the-basics/"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VIEW")]),e._v(" DepTally2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("emp_nbr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" dependent_cnt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" emp_nbr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Dependents\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" emp_nbr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UNION")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" emp_nbr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Personnel "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" P2\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("EXISTS")]),e._v(" \n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n             "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" Dependents "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" D2\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" D2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("emp_nbr "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" P2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("emp_nbr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);