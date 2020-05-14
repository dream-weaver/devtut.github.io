(window.webpackJsonp=window.webpackJsonp||[]).push([[2128],{2474:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-lock-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-lock-table"}},[s._v("#")]),s._v(" MySQL LOCK TABLE")]),s._v(" "),a("h2",{attrs:{id:"mysql-locks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-locks"}},[s._v("#")]),s._v(" Mysql Locks")]),s._v(" "),a("p",[a("strong",[s._v("Table locks can be an important tool for "),a("code",[s._v("ENGINE=MyISAM")]),s._v(", but are rarely useful for "),a("code",[s._v("ENGINE=InnoDB")]),s._v(".  If you are tempted to use table locks with InnoDB, you should rethink how you are working with transactions.")])]),s._v(" "),a("p",[s._v("MySQL enables client sessions to acquire table locks explicitly for the purpose of cooperating with other sessions for access to tables, or to prevent other sessions from modifying tables during periods when a session requires exclusive access to them. A session can acquire or release locks only for itself. One session cannot acquire locks for another session or release locks held by another session.")]),s._v(" "),a("p",[s._v("Locks may be used to emulate transactions or to get more speed when updating tables. This is explained in more detail later in this section.")]),s._v(" "),a("p",[s._v("Command:"),a("code",[s._v("LOCK TABLES table_name READ|WRITE;")])]),s._v(" "),a("p",[s._v("you can assign only lock type to a single table;")]),s._v(" "),a("p",[s._v("Example (READ LOCK):")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Example (WRITE LOCK):")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WRITE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("To see lock is applied or not, use following Command")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("To flush/remove all locks, use following command:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNLOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("EXAMPLE:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" products "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WRITE")]),s._v(":  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("product_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old_product_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" old_products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNLOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Above example any external connection cannot write any data to products table until unlocking table product")]),s._v(" "),a("p",[s._v("EXAMPLE:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" products "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(":  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("product_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("old_product_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" old_products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNLOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("Above example any external connection cannot read any data from products table until unlocking table product")]),s._v(" "),a("h2",{attrs:{id:"row-level-locking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-level-locking"}},[s._v("#")]),s._v(" Row Level Locking")]),s._v(" "),a("p",[s._v("If the tables use InnoDB, MySQL automatically uses row level locking so that multiple transactions can use same table simultaneously for read and write, without making each other wait.")]),s._v(" "),a("p",[s._v("If two transactions trying to modify the same row and both uses row level locking, one of the transactions waits for the other to complete.")]),s._v(" "),a("p",[s._v("Row level locking also can be obtained by using "),a("code",[s._v("SELECT ... FOR UPDATE")]),s._v(" statement for each rows expected to be modified.")]),s._v(" "),a("p",[s._v("Consider two connections to explain Row level locking in detail")]),s._v(" "),a("p",[s._v("Connection 1")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" accDetails "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("In connection 1, row level lock obtained by "),a("code",[s._v("SELECT ... FOR UPDATE")]),s._v(" statement.")]),s._v(" "),a("p",[s._v("Connection 2")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" accDetails "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("When some one try to update same row in connection 2, that will wait for connection 1 to finish transaction or error message will be displayed according to the "),a("code",[s._v("innodb_lock_wait_timeout")]),s._v(" setting, which defaults to 50 seconds.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("Error Code: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1205.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Lock")]),s._v(" wait timeout exceeded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" try restarting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n\n")])])]),a("p",[s._v("To view details about this lock, run "),a("code",[s._v("SHOW ENGINE INNODB STATUS")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---TRANSACTION 1973004, ACTIVE 7 sec updating")]),s._v("\nmysql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" locked "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCK")]),s._v(" WAIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lock")]),s._v(" struct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" heap size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nMySQL thread id "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OS thread handle "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x7f996beac700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" query id "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" localhost root "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" accDetails "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------- TRX HAS BEEN WAITING 7 SEC FOR THIS LOCK TO BE GRANTED:")]),s._v("\n\n")])])]),a("p",[s._v("Connection 2")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" accDetails "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" affected\n\n")])])]),a("p",[s._v("But while updating some other row in connection 2 will be executed without any error.")]),s._v(" "),a("p",[s._v("Connection 1")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" accDetails "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" affected\n\n")])])]),a("p",[s._v("Now row lock is released, because transaction is commited in Connection 1.")]),s._v(" "),a("p",[s._v("Connection 2")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" accDetails "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ledgerAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" affected\n\n")])])]),a("p",[s._v("The update is executed without any error in Connection 2 after Connection 1 released row lock by finishing the transaction.")]),s._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("li",[s._v("\nLOCK TABLES table_name [READ | WRITE]; // Lock Table\n")]),s._v(" "),a("li",[s._v("\nUNLOCK TABLES; // Unlock Tables\n")]),s._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("Locking is used to solve concurrency problems.Locking is required only when running a transaction, that first read a value from a database and later write that value in to the database. Locks are never required for self-contained insert, update, or delete operations.")]),s._v(" "),a("p",[s._v("There are two kinds of locks available")]),s._v(" "),a("p",[s._v("READ LOCK - when a user is only reading from a table.")]),s._v(" "),a("p",[s._v("WRITE LOCK -  when a user is doing both reading and writing to a table.")]),s._v(" "),a("p",[s._v("When a user holds a "),a("code",[s._v("WRITE LOCK")]),s._v(" on a table, no other users can read or write to that table. When a user holds a "),a("code",[s._v("READ LOCK")]),s._v(" on a table, other users can also read or hold a "),a("code",[s._v("READ LOCK")]),s._v(", but no user can write or hold a "),a("code",[s._v("WRITE LOCK")]),s._v(" on that table.")]),s._v(" "),a("p",[s._v("If default storage engine is InnoDB, MySQL automatically uses row level locking so that multiple transactions can use same table simultaneously for read and write, without making each other wait.")]),s._v(" "),a("p",[s._v("For all storage engines other than InnoDB, MySQL uses table locking.")]),s._v(" "),a("p",[s._v("For more details about table lock "),a("a",{attrs:{href:"http://dev.mysql.com/doc/refman/5.7/en/lock-tables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("See here"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);