(window.webpackJsonp=window.webpackJsonp||[]).push([[2621],{2967:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"running-executables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-executables"}},[t._v("#")]),t._v(" Running Executables")]),t._v(" "),a("h2",{attrs:{id:"gui-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui-applications"}},[t._v("#")]),t._v(" GUI Applications")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> gui_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & gui_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & gui_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Out-Null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start-Process")]),t._v(" gui_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start-Process")]),t._v(" gui_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Wait "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("GUI applications launch in a different process, and will immediately return control to the PowerShell host. Sometimes you need the application to finish processing before the next PowerShell statement must be executed. This can be achieved by piping the application output to $null (3) or by using Start-Process with the -Wait switch (5).")]),t._v(" "),a("h2",{attrs:{id:"console-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console-streams"}},[t._v("#")]),t._v(" Console Streams")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ErrorActionPreference")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Continue"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">&1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">&1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" ? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Management.Automation.ErrorRecord]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">&1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" ? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Management.Automation.WarningRecord]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">&1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" ? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Management.Automation.VerboseRecord]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(">&1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe 2>&1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v('Stream 2 contains System.Management.Automation.ErrorRecord objects. Note that some applications like git.exe use the "error stream" for informational purposes, that are not necessarily errors at all. In this case it is best to look at the exit code to determine whether the error stream should be interpreted as errors.')]),t._v(" "),a("p",[t._v("PowerShell understands these streams: Output, Error, Warning, Verbose, Debug, Progress. Native applications commonly use only these streams: Output, Error, Warning.")]),t._v(" "),a("p",[t._v("In PowerShell 5, all streams can be redirected to the standard output/success stream (6).")]),t._v(" "),a("p",[t._v('In earlier PowerShell versions, only specific streams can be redirected to the standard output/success stream (7). In this example, the "error stream" will be redirected to the output stream.')]),t._v(" "),a("h2",{attrs:{id:"exit-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit-codes"}},[t._v("#")]),t._v(" Exit Codes")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LastExitCode")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> $?\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("These are built-in PowerShell variables that provide additional information about the most recent error. "),a("code",[t._v("$LastExitCode")]),t._v(" is the final exit code of the last native application that was executed. "),a("code",[t._v("$?")]),t._v(" and "),a("code",[t._v("$Error[0]")]),t._v(" is the last error record that was generated by PowerShell.")]),t._v(" "),a("h2",{attrs:{id:"console-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console-applications"}},[t._v("#")]),t._v(" Console Applications")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> & console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start-Process")]),t._v(" console_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);