(window.webpackJsonp=window.webpackJsonp||[]).push([[1131],{1480:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-tagging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-tagging"}},[t._v("#")]),t._v(" Git Tagging")]),t._v(" "),s("p",[t._v("Like most Version Control Systems (VCSs), "),s("code",[t._v("Git")]),t._v(" has the ability to "),s("code",[t._v("tag")]),t._v(" specific points in history as being important. Typically people use this functionality to mark release points ("),s("code",[t._v("v1.0")]),t._v(", and so on).")]),t._v(" "),s("h2",{attrs:{id:"listing-all-available-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listing-all-available-tags"}},[t._v("#")]),t._v(" Listing all available tags")]),t._v(" "),s("p",[t._v("Using the command "),s("code",[t._v("git tag")]),t._v(" lists out all available tags:")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git tag")]),t._v("\n<output follows>\nv0.1\nv1.3\n\n")])])]),s("blockquote"),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": the "),s("code",[t._v("tags")]),t._v(" are output in an "),s("strong",[t._v("alphabetical")]),t._v(" order.")]),t._v(" "),s("p",[t._v("One may also "),s("code",[t._v("search")]),t._v(" for available "),s("code",[t._v("tags")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git tag"),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -l")]),t._v(" ")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1.8.5*"')]),t._v("\n<output follows>\nv1.8.5\nv1.8.5-rc0\nv1.8.5-rc1\nv1.8.5-rc2\nv1.8.5-rc3\nv1.8.5.1\nv1.8.5.2\nv1.8.5.3\nv1.8.5.4\nv1.8.5.5\n\n")])])]),s("h2",{attrs:{id:"create-and-push-tag-s-in-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-and-push-tag-s-in-git"}},[t._v("#")]),t._v(" Create and push tag(s) in GIT")]),t._v(" "),s("p",[s("strong",[t._v("Create a tag:")])]),t._v(" "),s("li",[t._v("\nTo create a tag on your current branch:\n"),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git tag < tagname >\n\n")])])]),s("p",[t._v("This will create a local "),s("code",[t._v("tag")]),t._v(" with the current state of the branch you are on.\n")])]),t._v(" "),s("li",[t._v("\nTo create a tag with some commit:"),s("p"),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git tag tag-name commit-identifier\n\n")])])]),s("p",[t._v("This will create a local "),s("code",[t._v("tag")]),t._v(" with the commit-identifier of the branch you are on.\n")])]),s("p"),t._v(" "),s("p",[s("strong",[t._v("Push a commit in GIT:")])]),t._v(" "),s("li",[t._v("\nPush an individual tag:\n"),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git push origin tag-name\n\n")])])])]),t._v(" "),s("li",[t._v("\nPush all the tags at once\n"),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git push origin --tags\n\n")])])])]),t._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("li",[s("p",[t._v("git tag [-a | -s | -u < keyid >] [-f] [-m < msg > | -F < file >]\n< tagname > [< commit > | < object >]")])]),t._v(" "),s("li",[t._v("\ngit tag -d <  tagname​  >\n")]),t._v(" "),s("li",[s("p",[t._v("git tag [-n[< num >]] -l [--contains < commit >] [--contains < commit >]\n[--points-at < object >] [--column[=< options >] | --no-column]\n[--create-reflog] [--sort=< key >] [--format=< format >]\n[--[no-]merged [< commit >]] [< pattern >…​]")])]),t._v(" "),s("li",[t._v("\ngit tag -v [--format=< format >] < tagname >…​\n")])])}),[],!1,null,null,null);a.default=n.exports}}]);