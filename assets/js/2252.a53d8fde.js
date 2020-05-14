(window.webpackJsonp=window.webpackJsonp||[]).push([[2252],{2596:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"running-node-js-as-a-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-node-js-as-a-service"}},[t._v("#")]),t._v(" Running node.js as a service")]),t._v(" "),e("p",[t._v("Unlike many web servers, Node isn't installed as a service out of the box. But in production, it's better to have it run as a dæmon, managed by an init system.")]),t._v(" "),e("h2",{attrs:{id:"node-js-as-a-systemd-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-as-a-systemd-daemon"}},[t._v("#")]),t._v(" Node.js as a systemd dæmon")]),t._v(" "),e("p",[t._v("systemd is the "),e("strong",[t._v("de facto")]),t._v(" init system in most Linux distributions. After Node has been configured to run with systemd, it's possible to use the "),e("code",[t._v("service")]),t._v(" command to manage it.")]),t._v(" "),e("p",[t._v("First of all, it needs a config file, let's create it. For Debian based distros, it will be in "),e("code",[t._v("/etc/systemd/system/node.service")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDescription"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("My "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" nodejs app\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n# "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" the working directory to have consistent relative paths\nWorkingDirectory"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app\n\n# start the server "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file is relative to WorkingDirectory here"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nExecStart"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node serverCluster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\n# "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" process crashes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" always "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" to restart\nRestart"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always\n\n# "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("ms between the crash and the restart\nRestartSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("ms\n\n# send log tot syslog "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("here")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it doesn't compete "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" other log config "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the app itself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nStandardOutput"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("syslog\nStandardError"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("syslog\n\n# nodejs process name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" syslog\nSyslogIdentifier"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nodejs\n\n# user and group starting the app\nUser"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("www"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data\nGroup"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("www"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data\n\n# "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" the "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("environement")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prod…"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEnvironment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production\n\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n# start node at multi user system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("level")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sysVinit runlevel "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nWantedBy"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n\n")])])]),e("p",[t._v("It's now possible to respectively start, stop and restart the app with:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("service node start\nservice node stop\nservice node restart\n\n")])])]),e("p",[t._v("To tell systemd to automatically start node on boot, just type: "),e("code",[t._v("systemctl enable node")]),t._v(".")]),t._v(" "),e("p",[t._v("That's all, node now runs as a dæmon.")])])}),[],!1,null,null,null);s.default=n.exports}}]);