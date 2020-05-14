(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{390:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"kruskal-s-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kruskal-s-algorithm"}},[t._v("#")]),t._v(" Kruskal's Algorithm")]),t._v(" "),s("h2",{attrs:{id:"optimal-disjoint-set-based-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimal-disjoint-set-based-implementation"}},[t._v("#")]),t._v(" Optimal, disjoint-set based implementation")]),t._v(" "),s("p",[t._v("We can do two things to improve the simple and sub-optimal disjoint-set subalgorithms:")]),t._v(" "),s("li",[t._v("\n**Path compression heuristic**: `findSet` does not need to ever handle a tree with height bigger than `2`. If it ends up iterating such a tree, it can link the lower nodes directly to the root, optimizing future traversals;\n"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("subalgo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" v\n        v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent\n\n")])])])]),t._v(" "),s("li",[t._v("\n**Height-based merging heuristic**: for each node, store the height of its subtree. When merging, make the taller tree the parent of the smaller one, thus not increasing anyone's height.\n"),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("subalgo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unionSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    vRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    uRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uRoot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        vRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uRoot\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vRoot\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vRoot\n        uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])])]),t._v(" "),s("p",[t._v("This leads to "),s("code",[t._v("O(alpha(n))")]),t._v(" time for each operation, where "),s("code",[t._v("alpha")]),t._v(" is the inverse of the fast-growing Ackermann function, thus it is very slow growing, and can be considered "),s("code",[t._v("O(1)")]),t._v(" for practical purposes.")]),t._v(" "),s("p",[t._v("This makes the entire Kruskal's algorithm "),s("code",[t._v("O(m log m + m) = O(m log m)")]),t._v(", because of the initial sorting.")]),t._v(" "),s("p",[s("strong",[t._v("Note")])]),t._v(" "),s("p",[t._v("Path compression may reduce the height of the tree, hence comparing heights of the trees during union operation might not be a trivial task. Hence to avoid the complexity of storing and calculating the height of the trees the resulting parent can be picked randomly:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("subalgo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unionSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    vRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    uRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" uRoot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        vRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uRoot\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vRoot\n\n")])])]),s("p",[t._v("In practice this randomised algorithm together with path compression for "),s("code",[t._v("findSet")]),t._v(" operation will result in comparable performance, yet much simpler to implement.")]),t._v(" "),s("h2",{attrs:{id:"simple-more-detailed-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-more-detailed-implementation"}},[t._v("#")]),t._v(" Simple, more detailed implementation")]),t._v(" "),s("p",[t._v("In order to efficiently handle cycle detection, we consider each node as part of a tree. When adding an edge, we check if its two component nodes are part of distinct trees. Initially, each node makes up a one-node tree.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("algorithm kruskalMST"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sort G"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("'")]),t._v("s edges by their value\n    MST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a forest of trees"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initially each tree is a node in the graph\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each edge e in G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the root of the tree that e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first belongs to is "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" the same \n        as the root of the tree that e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second belongs to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            connect one of the roots to the other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thus merging two trees\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" which now a single"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tree forest\n\n")])])]),s("h2",{attrs:{id:"simple-disjoint-set-based-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-disjoint-set-based-implementation"}},[t._v("#")]),t._v(" Simple, disjoint-set based implementation")]),t._v(" "),s("p",[t._v("The above forest methodology is actually a disjoint-set data structure, which involves three main operations:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("subalgo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" make a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" tree rooted at v\n    \n\nsubalgo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsubalgo "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unionSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    vRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    uRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    uRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vRoot\n\nalgorithm kruskalMST"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    sort G"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("'")]),t._v("s edges by their value\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each node n in G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each edge e in G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unionSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("This naive implementation leads to "),s("code",[t._v("O(n log n)")]),t._v(" time for managing the disjoint-set data structure, leading to "),s("code",[t._v("O(m*n log n)")]),t._v(" time for the entire Kruskal's algorithm.")]),t._v(" "),s("h2",{attrs:{id:"simple-high-level-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-high-level-implementation"}},[t._v("#")]),t._v(" Simple, high level implementation")]),t._v(" "),s("p",[t._v("Sort the edges by value and add each one to the MST in sorted order, if it doesn't create a cycle.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("algorithm "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kruskalMST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sort G"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("'")]),t._v("s edges by their value\n    MST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" an empty graph\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each edge e in G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" adding e to MST does "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" create a cycle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            add e to MST\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MST\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("Kruskal's Algorithm is a "),s("strong",[t._v("greedy")]),t._v(" algorithm used to find "),s("strong",[t._v("Minimum Spanning Tree (MST)")]),t._v(" of a graph. A minimum spanning tree is a tree which connects all the vertices of the graph and has the minimum total edge weight.")]),t._v(" "),s("p",[t._v("Kruskal's algorithm does so by repeatedly picking out edges with "),s("strong",[t._v("minimum weight")]),t._v(" (which are not already in the MST) and add them to the final result if the two vertices connected by that edge are not yet connected in the MST, otherwise it skips that edge. Union - Find data structure can be used to check whether two vertices are already connected in the MST or not. A few properties of MST are as follows:")]),t._v(" "),s("ol",[s("li",[t._v("A MST of a graph with "),s("code",[t._v("n")]),t._v(" vertices will have exactly "),s("code",[t._v("n-1")]),t._v(" edges.")]),t._v(" "),s("li",[t._v("There exists a unique path from each vertex to every other vertex.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);