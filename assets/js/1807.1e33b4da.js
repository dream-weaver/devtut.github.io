(window.webpackJsonp=window.webpackJsonp||[]).push([[1807],{2154:function(t,e,a){"use strict";a.r(e);var r=a(19),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),a("h2",{attrs:{id:"differece-between-attr-and-prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differece-between-attr-and-prop"}},[t._v("#")]),t._v(" Differece between attr() and prop()")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/documentation/jquery/4429/attributes/15471/getting-value-of-html-attribute#t=201608020513212065116",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("attr()")]),a("OutboundLink")],1),t._v(" gets/sets the HTML attribute using the DOM functions "),a("code",[t._v("getAttribute()")]),t._v(" and "),a("code",[t._v("setAttribute()")]),t._v(". "),a("a",{attrs:{href:"https://api.jquery.com/prop/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("prop()")]),a("OutboundLink")],1),t._v(" works by setting the DOM property without changing the attribute. In many cases the two are interchangeable, but occasionally one is needed over the other.")]),t._v(" "),a("p",[t._v("To set a checkbox as checked:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#tosAccept'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checked'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using attr() won't work properly here")]),t._v("\n\n")])])]),a("p",[t._v("To remove a property you can use the "),a("a",{attrs:{href:"https://api.jquery.com/removeProp/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("removeProp()")]),a("OutboundLink")],1),t._v(" method. Similarly "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/jquery/4429/attributes/15473/removing-attribute#t=201608020514117105889",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("removeAttr()")]),a("OutboundLink")],1),t._v(" removes attributes.")]),t._v(" "),a("h2",{attrs:{id:"get-the-attribute-value-of-a-html-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-attribute-value-of-a-html-element"}},[t._v("#")]),t._v(" Get the attribute value of a HTML element")]),t._v(" "),a("p",[t._v("When a single parameter is passed to the "),a("a",{attrs:{href:"https://api.jquery.com/attr/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v(".attr()")]),a("OutboundLink")],1),t._v(" function it returns the value of passed attribute on the selected element.")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("p",[a("code",[t._v("$([selector]).attr([attribute name]);")])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("p",[t._v("HTML:")]),t._v(" "),a("p",[a("code",[t._v('<a href="/home">Home</a>')])]),t._v(" "),a("p",[t._v("jQuery:")]),t._v(" "),a("p",[a("code",[t._v("$('a').attr('href');")])]),t._v(" "),a("p",[a("strong",[t._v("Fetching "),a("code",[t._v("data")]),t._v(" attributes:")])]),t._v(" "),a("p",[t._v("jQuery offers "),a("a",{attrs:{href:"https://api.jquery.com/data/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v(".data()")]),a("OutboundLink")],1),t._v(" function in order to deal with data attributes. "),a("code",[t._v(".data")]),t._v(" function returns the value of the data attribute on the selected element.")]),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),a("p",[a("code",[t._v("$([selector]).data([attribute name]);")])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("p",[t._v("Html:")]),t._v(" "),a("p",[a("code",[t._v('<article data-column="3"></article>')])]),t._v(" "),a("p",[t._v("jQuery:")]),t._v(" "),a("p",[a("code",[t._v('$("article").data("column")')])]),t._v(" "),a("p",[a("strong",[t._v("Note:")])]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("jQuery's data() method will give you access to data-* attributes, BUT, it clobbers the case of the attribute name. "),a("a",{attrs:{href:"http://stackoverflow.com/questions/17351282/jquery-cant-get-data-attribute-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"setting-value-of-html-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-value-of-html-attribute"}},[t._v("#")]),t._v(" Setting value of HTML attribute")]),t._v(" "),a("p",[t._v("If you want to add an attribute to some element you can use the "),a("a",{attrs:{href:"https://api.jquery.com/attr/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("attr(attributeName, attributeValue)")]),a("OutboundLink")],1),t._v(" function. For example:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Click me'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("This example will add mouseover text "),a("code",[t._v('"Click me"')]),t._v(" to all links on the page.")]),t._v(" "),a("p",[t._v("The same function is used to change attributes' values.")]),t._v(" "),a("h2",{attrs:{id:"removing-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-attribute"}},[t._v("#")]),t._v(" Removing attribute")]),t._v(" "),a("p",[t._v("To remove an attribute from an element you can use the function "),a("a",{attrs:{href:"https://api.jquery.com/removeAttr/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v(".removeAttr(attributeName)")]),a("OutboundLink")],1),t._v(". For example:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("This will remove "),a("code",[t._v("title")]),t._v(" attribute from the element with ID "),a("code",[t._v("home")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("The jQuery function "),a("code",[t._v(".attr()")]),t._v(", gets the value of an attribute for the "),a("strong",[t._v("first")]),t._v(" element in the set of matched elements or set one or more attributes for "),a("strong",[t._v("every")]),t._v(" matched element.")]),t._v(" "),a("p",[t._v("It is worth noting that when getting the value of an attribute, it only gets it from the first element that matches the selector (i.e. "),a("code",[t._v('$("input").attr("type");')]),t._v(" would only get the type of the first input, if there are more than one)")]),t._v(" "),a("p",[t._v("However, when setting an attribute, it will apply it to all matching elements.")])])}),[],!1,null,null,null);e.default=n.exports}}]);