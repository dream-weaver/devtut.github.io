(window.webpackJsonp=window.webpackJsonp||[]).push([[928],{1276:function(t,e,r){"use strict";r.r(e);var s=r(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"border"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[t._v("#")]),t._v(" Border")]),t._v(" "),r("h2",{attrs:{id:"border-radius"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-radius"}},[t._v("#")]),t._v(" border-radius")]),t._v(" "),r("p",[t._v("The border-radius property allows you to change the shape of the basic box model.")]),t._v(" "),r("p",[t._v("Every corner of an element can have up to two values, for the vertical and horizontal radius of that corner (for a maximum of 8 values).")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/FnIqF.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/FnIqF.png",alt:"border-radius"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("The first set of values defines the horizontal radius. The optional second set of values, preceded by a ‘/’ , defines the vertical radius. If only one set of values is supplied, it is used for both the vertical and horizontal radius.")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 5% / 20px 25em 30px 35em"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("p",[t._v("The "),r("code",[t._v("10px")]),t._v(" is the horizontal radius of the top-left-and-bottom-right. And the "),r("code",[t._v("5%")]),t._v(" is the horizontal radius of the top-right-and-bottom-left. The other four values after '/' are the vertical radii for top-left, top-right, bottom-right and bottom-left.")]),t._v(" "),r("p",[t._v("As with many CSS properties, shorthands can be used for any or all\npossible values. You can therefore specify anything from one to eight values. The following shorthand allows you to set the horizontal and vertical radius of every corner to the same value:")]),t._v(" "),r("p",[t._v("HTML:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[t._v("<div class="),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box'")]),t._v("></div>\n\n")])])]),r("p",[t._v("CSS:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[t._v("Border-radius is most commonly used to convert box elements into circles. By setting the border-radius to half of the length of a square element, a circular element is created:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".circle")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[t._v("Because border-radius accepts percentages, it is common to use 50% to avoid manually calculating the border-radius value:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".circle")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[t._v("If the width and height properties are not equal, the resulting shape will be an oval rather than a circle.")]),t._v(" "),r("p",[t._v("Browser specific border-radius example:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("\n -webkit-border-top-right-radius: 4px;\n  -webkit-border-bottom-right-radius: 4px;\n  -webkit-border-bottom-left-radius: 0;\n  -webkit-border-top-left-radius: 0;\n  -moz-border-radius-topright: 4px;\n  -moz-border-radius-bottomright: 4px;\n  -moz-border-radius-bottomleft: 0;\n  -moz-border-radius-topleft: 0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n\n")])])]),r("h2",{attrs:{id:"border-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-style"}},[t._v("#")]),t._v(" border-style")]),t._v(" "),r("p",[t._v("The "),r("code",[t._v("border-style")]),t._v(" property sets the style of an element's border.\nThis property can have from one to four values (for every side of the element one value.)")]),t._v(" "),r("p",[t._v("Examples:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dotted"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dotted solid double dashed"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/gieW6.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/gieW6.png",alt:"border-styles"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("code",[t._v("border-style")]),t._v(" can also have the values "),r("code",[t._v("none")]),t._v(" and "),r("code",[t._v("hidden")]),t._v(". They have the same effect, except "),r("code",[t._v("hidden")]),t._v(" works for border conflict resolution for "),r("code",[t._v("<table>")]),t._v(" elements. In a "),r("code",[t._v("<table>")]),t._v(" with multiple borders, "),r("code",[t._v("none")]),t._v(" has the lowest priority (meaning in a conflict, the border would show), and "),r("code",[t._v("hidden")]),t._v(" has the highest priority (meaning in a conflict, the border would not show).")]),t._v(" "),r("h2",{attrs:{id:"multiple-borders"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multiple-borders"}},[t._v("#")]),t._v(" Multiple Borders")]),t._v(" "),r("p",[t._v("Using outline:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid black"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 6px solid blue"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[t._v("Using box-shadow:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid green"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px 0px 0px 4px #000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[t._v("Using a pseudo element:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div3")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".div3:before")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid blue"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/lta3P.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/lta3P.png",alt:"multiple borders"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"http://jsfiddle.net/MadalinaTn/bvqpcohm/2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jsfiddle.net/MadalinaTn/bvqpcohm/2/"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"border-shorthands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-shorthands"}},[t._v("#")]),t._v(" border (shorthands)")]),t._v(" "),r("p",[t._v("In most cases you want to define several border properties ("),r("code",[t._v("border-width")]),t._v(", "),r("code",[t._v("border-style")]),t._v(" and "),r("code",[t._v("border-color")]),t._v(") for all sides of an element.")]),t._v(" "),r("p",[t._v("Instead of writing:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("p",[t._v("You can simply write:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("p",[t._v("These shorthands are also available for every side of an element:\n"),r("code",[t._v("border-top")]),t._v(", "),r("code",[t._v("border-left")]),t._v(", "),r("code",[t._v("border-right")]),t._v(" and "),r("code",[t._v("border-bottom")]),t._v(". So you can do:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px double #aaaaaa"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("h2",{attrs:{id:"border-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-image"}},[t._v("#")]),t._v(" border-image")]),t._v(" "),r("p",[t._v("With the "),r("code",[t._v("border-image")]),t._v(" property you have the possibility to set an image to be used instead of normal border styles.")]),t._v(" "),r("p",[t._v("A "),r("code",[t._v("border-image")]),t._v(" essentially consist of a")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("border-image-source")]),t._v(": The path to the image to be used")]),t._v(" "),r("li",[r("code",[t._v("border-image-slice")]),t._v(": Specifies the offset that is used to divide the image into "),r("strong",[t._v("nine regions")]),t._v(" (four "),r("strong",[t._v("corners")]),t._v(", four "),r("strong",[t._v("edges")]),t._v(" and a "),r("strong",[t._v("middle")]),t._v(")")]),t._v(" "),r("li",[r("code",[t._v("border-image-repeat")]),t._v(": Specifies how the images for the sides and the middle of the border image are scaled")])]),t._v(" "),r("p",[t._v("Consider the following example wheras border.png is a image of 90x90 pixels:")]),t._v(" "),r("p",[r("code",[t._v('border-image: url("border.png") 30 stretch;')])]),t._v(" "),r("p",[t._v("The image will be split into nine regions with 30x30 pixels. The edges will be used as the corners of the border while the side will be used in between. If the element is higher / wider than 30px this part of the image will be "),r("strong",[t._v("stretched")]),t._v(". The middle part of the image defaults to be transparent.")]),t._v(" "),r("h2",{attrs:{id:"border-collapse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-collapse"}},[t._v("#")]),t._v(" border-collapse")]),t._v(" "),r("p",[t._v("The "),r("code",[t._v("border-collapse")]),t._v(" property applies only to "),r("code",[t._v("table")]),t._v("s (and elements displayed as "),r("code",[t._v("display: table")]),t._v(" or "),r("code",[t._v("inline-table")]),t._v(") and sets whether the table borders are collapsed into a single border or detached as in standard HTML.")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v("table")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-collapse")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" separate"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-spacing")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Only works if border-collapse is separate */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("p",[t._v("Also see "),r("a",{attrs:{href:"http://stackoverflow.com/documentation/css/1074/tables/3456/border-collapse",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tables - border-collapse"),r("OutboundLink")],1),t._v(" documentation entry")]),t._v(" "),r("h2",{attrs:{id:"creating-a-multi-colored-border-using-border-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-multi-colored-border-using-border-image"}},[t._v("#")]),t._v(" Creating a multi-colored border using border-image")]),t._v(" "),r("h3",{attrs:{id:"css"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bordered")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to right"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red 20%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" green 20%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" green 40%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blue 40%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blue 60%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maroon 60%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maroon 80%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chocolate 80%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* gradient with required colors */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image-slice")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("h3",{attrs:{id:"html"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[t._v("<div class="),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bordered'")]),t._v(">Border on all sides</div>\n\n")])])]),r("p",[t._v("The above example would produce a border that comprises of 5 different colors. The colors are defined through a "),r("code",[t._v("linear-gradient")]),t._v(" (you can find more information about gradients in the "),r("a",{attrs:{href:"http://stackoverflow.com/documentation/css/296/backgrounds/2478/css-gradients#t=201607291511493190436",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),r("OutboundLink")],1),t._v("). You can find more information about "),r("code",[t._v("border-image-slice")]),t._v(" property in the "),r("a",{attrs:{href:"http://stackoverflow.com/documentation/css/2160/border/9699/border-image",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("border-image")]),t._v(" example"),r("OutboundLink")],1),t._v(" in same page.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/YWzek.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/YWzek.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("("),r("strong",[t._v("Note: Additional properties were added to the element for presentational purpose.")]),t._v(")")]),t._v(" "),r("p",[t._v("You'd have noticed that the left border has only a single color (the start color of the gradient) while the right border also has only a single color (the  gradient's end color). This is because of the way that border image property works. It is as though the gradient is applied to the entire box and then the colors are masked from the padding and content areas, thus making it look as though only the border has the gradient.")]),t._v(" "),r("p",[t._v("Which border(s) have a single color is dependant on the gradient definition. If the gradient is a "),r("code",[t._v("to right")]),t._v(" gradient, the left border would be the start color of the gradient and right border would be the end color. If it was a "),r("code",[t._v("to bottom")]),t._v(" gradient the top border would be the gradient's start color and bottom border would be end color. Below is the output of a "),r("code",[t._v("to bottom")]),t._v(" 5 colored gradient.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/6ihGO.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/6ihGO.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("If the border is required only on specific sides of the element then the "),r("code",[t._v("border-width")]),t._v(" property can be used just like with any other normal border. For example, adding the below code would produce a border only on the top of the element.")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px 0px 0px 0px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),r("p",[r("a",{attrs:{href:"https://i.stack.imgur.com/wU0fE.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://i.stack.imgur.com/wU0fE.png",alt:"enter image description here"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Note that, any element that has "),r("code",[t._v("border-image")]),t._v(" property "),r("strong",[t._v("won't respect the")]),t._v(" "),r("code",[t._v("border-radius")]),t._v(" (that is the border won't curve). This is based on the below statement in the spec:")]),t._v(" "),r("blockquote"),t._v(" "),r("p",[t._v("A box's backgrounds, but not its border-image, are clipped to the appropriate curve (as determined by ‘background-clip’).")]),t._v(" "),r("h2",{attrs:{id:"border-left-right-top-bottom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-left-right-top-bottom"}},[t._v("#")]),t._v(" border-[left|right|top|bottom]")]),t._v(" "),r("p",[t._v("The "),r("code",[t._v("border-[left|right|top|bottom]")]),t._v(" property is used to add a border to a specific side of an element.")]),t._v(" "),r("p",[t._v("For example if you wanted to add a border to the left side of an element, you could do:")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#element")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),r("h4",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),r("li",[t._v("\n**border**\n")]),t._v(" "),r("li",[t._v("\nborder: border-width border-style border-color | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-top: border-width border-style border-color | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-bottom: border-width border-style border-color | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-left: border-width border-style border-color | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-right: border-width border-style border-color | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\n**border-style**\n")]),t._v(" "),r("li",[t._v("\nborder-style: 1-4 none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\n**border-radius**\n")]),t._v(" "),r("li",[t._v("\nborder-radius: 1-4 length | % / 1-4 length | % | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-top-left-radius: length | %  [length | %] | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-top-right-radius: length | %  [length | %] | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-left-radius: length | %  [length | %] | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-right-radius: length | %  [length | %] | initial | inherit;\n")]),t._v(" "),r("li",[t._v("\n**border-image**\n")]),t._v(" "),r("li",[t._v("\nborder-image: border-image-source border-image-slice [ border-image-width [ border-image-outset ] ] border-image-repeat\n")]),t._v(" "),r("li",[t._v("\nborder-image-source: none | image;\n")]),t._v(" "),r("li",[t._v("\nborder-image-slice: 1-4 number | percentage [fill]\n")]),t._v(" "),r("li",[t._v("\nborder-image-repeat: 1-2 stretch | repeat | round | space\n")]),t._v(" "),r("li",[t._v("\n**border-collapse**\n")]),t._v(" "),r("li",[t._v("\nborder-collapse: separate | collapse | initial | inherit\n")]),t._v(" "),r("h4",{attrs:{id:"remarks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),r("p",[t._v("Related "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/border",target:"_blank",rel:"noopener noreferrer"}},[t._v("properties"),r("OutboundLink")],1),t._v(":")]),t._v(" "),r("li",[t._v("\nborder\n")]),t._v(" "),r("li",[t._v("\nborder-bottom\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-color\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-left-radius\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-right-radius\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-style\n")]),t._v(" "),r("li",[t._v("\nborder-bottom-width\n")]),t._v(" "),r("li",[t._v("\nborder-color\n")]),t._v(" "),r("li",[t._v("\nborder-image\n")]),t._v(" "),r("li",[t._v("\nborder-image-outset\n")]),t._v(" "),r("li",[t._v("\nborder-image-repeat\n")]),t._v(" "),r("li",[t._v("\nborder-image-slice\n")]),t._v(" "),r("li",[t._v("\nborder-image-source\n")]),t._v(" "),r("li",[t._v("\nborder-image-width\n")]),t._v(" "),r("li",[t._v("\nborder-left\n")]),t._v(" "),r("li",[t._v("\nborder-left-color\n")]),t._v(" "),r("li",[t._v("\nborder-left-style\n")]),t._v(" "),r("li",[t._v("\nborder-left-width\n")]),t._v(" "),r("li",[t._v("\nborder-radius\n")]),t._v(" "),r("li",[t._v("\nborder-right\n")]),t._v(" "),r("li",[t._v("\nborder-right-color\n")]),t._v(" "),r("li",[t._v("\nborder-right-style\n")]),t._v(" "),r("li",[t._v("\nborder-right-width\n")]),t._v(" "),r("li",[t._v("\nborder-style\n")]),t._v(" "),r("li",[t._v("\nborder-top\n")]),t._v(" "),r("li",[t._v("\nborder-top-color\n")]),t._v(" "),r("li",[t._v("\nborder-top-left-radius\n")]),t._v(" "),r("li",[t._v("\nborder-top-right-radius\n")]),t._v(" "),r("li",[t._v("\nborder-top-style\n")]),t._v(" "),r("li",[t._v("\nborder-top-width\n")]),t._v(" "),r("li",[t._v("\nborder-width\n")])])}),[],!1,null,null,null);e.default=a.exports}}]);