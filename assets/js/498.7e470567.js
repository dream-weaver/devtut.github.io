(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{844:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[s._v("#")]),s._v(" Functions")]),s._v(" "),a("h2",{attrs:{id:"functions-with-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-with-arguments"}},[s._v("#")]),s._v(" Functions with arguments")]),s._v(" "),a("p",[s._v("In "),a("code",[s._v("helloJohn.sh")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ngreet "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Doe"')]),s._v("\n\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# running above script")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" helloJohn.sh\nHello, John Doe\n\n")])])]),a("li",[s._v('\nIf you don\'t modify the argument in any way, there is no need to copy it to a `local` variable - simply `echo "Hello, $1"`.\n')]),s._v(" "),a("li",[s._v("\nYou can use `$1`, `$2`, `$3` and so on to access the arguments inside the function.\n"),a("blockquote",[s._v("\n**Note:** for arguments more than 9 `$10` won't work (bash will read it as **$1**0), you need to do `${10}`, `${11}` and so on.\n")])]),s._v(" "),a("li",[s._v("\n`$@` refers to all arguments of a function:\n"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nfoo "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output => 1 2 3")]),s._v("\n\n")])])]),a("blockquote",[s._v('\n**Note:** You should practically always use double quotes around `"$@"`, like here.\n')]),s._v("\nOmitting the quotes will cause the shell to expand wildcards (even when the user specifically quoted them in order to avoid that) and generally introduce unwelcome behavior and potentially even security problems.\n"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("foo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string with spaces;"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output => string with spaces; $HOME *")]),s._v("\n\n")])])])]),s._v(" "),a("li",[a("p",[s._v("for default arguments use `${1:-default_val}`.\nEg:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("25}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$val")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nfoo     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output => 25")]),s._v("\nfoo "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output => 30")]),s._v("\n\n")])])])]),s._v(" "),a("li",[s._v("\nto require an argument use `${var:?error message}`\n"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":?")]),s._v("Must provide an argument}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$val")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])]),s._v(" "),a("blockquote"),s._v(" "),a("p",[a("strong",[s._v("Note:")]),s._v(" You should practically always use double quotes around "),a("code",[s._v('"$@"')]),s._v(", like here.")]),s._v(" "),a("h2",{attrs:{id:"simple-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-function"}},[s._v("#")]),s._v(" Simple Function")]),s._v(" "),a("p",[s._v("In "),a("code",[s._v("helloWorld.sh")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Define a function greet")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("greet")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Call the function greet")]),s._v("\ngreet\n\n")])])]),a("p",[s._v("In running the script, we see our message")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" helloWorld.sh\nHello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n")])])]),a("p",[a("strong",[s._v("Note that")]),s._v(" "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/bash/564/sourcing",target:"_blank",rel:"noopener noreferrer"}},[s._v("sourcing"),a("OutboundLink")],1),s._v(" a file with functions makes them available in your current bash session.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" helloWorld.sh   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# or, more portably, ". helloWorld.sh"')]),s._v("\n$ greet\nHello World"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n")])])]),a("p",[s._v("You can "),a("code",[s._v("export")]),s._v(" a function in some shells, so that it is exposed to child processes.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'greet'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fails")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" -f greet  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export function; note -f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'greet'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# success")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"handling-flags-and-optional-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-flags-and-optional-parameters"}},[s._v("#")]),s._v(" Handling flags and optional parameters")]),s._v(" "),a("p",[s._v("The "),a("strong",[s._v("getopts")]),s._v(" builtin can be used inside functions to write functions that accommodate flags and optional parameters.  This presents no special difficulty but one has to handle appropriately the values touched by "),a("strong",[s._v("getopts")]),s._v(".  As an example, we define a "),a("strong",[s._v("failwith")]),s._v(" function that writes a message on "),a("strong",[s._v("stderr")]),s._v(" and exits with code 1 or an arbitrary code supplied as parameter to the "),a("code",[s._v("-x")]),s._v(" option:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# failwith [-x STATUS] PRINTF-LIKE-ARGV")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  Fail with the given diagnostic message")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The -x flag can be used to convey a custom exit status, instead of")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the value 1.  A newline is automatically added to the output.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("failwith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("OPTIND")]),s._v(" OPTION OPTARG status\n\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("OPTIND")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("getopts")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x:'")]),s._v(" OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPTION}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n            x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPTARG}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'failwith: %s: Unsupported option."),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OPTION}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v(" OPTIND "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Failure: '")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${status}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("This function can be used as follows:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("failwith "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s: File not found.'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v('"')]),s._v("\nfailwith -x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'General internal error.'")]),s._v("\n\n")])])]),a("p",[s._v("and so on.")]),s._v(" "),a("p",[s._v("Note that as for "),a("strong",[s._v("printf")]),s._v(", variables should not be used as first argument.  If the message to print consists of the content of a variable, one should use the "),a("code",[s._v("%s")]),s._v(" specifier to print it, like in")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("failwith "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${message}")]),s._v('"')]),s._v("\n\n")])])]),a("h2",{attrs:{id:"return-value-from-a-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-value-from-a-function"}},[s._v("#")]),s._v(" Return value from a function")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("return")]),s._v(" statement in Bash doesn't return a value like C-functions, instead it exits the function with a return status. You can think of it as the exit status of that function.")]),s._v(" "),a("p",[s._v("If you want to return a value from the function then send the value to "),a("code",[s._v("stdout")]),s._v(" like this:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sample value to be returned"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#printf "%s\\n" "$var"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("Now, if you do:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("fun"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n")])])]),a("p",[s._v("the output of "),a("code",[s._v("fun")]),s._v(" will be stored in "),a("code",[s._v("$var")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"the-exit-code-of-a-function-is-the-exit-code-of-its-last-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-exit-code-of-a-function-is-the-exit-code-of-its-last-command"}},[s._v("#")]),s._v(" The exit code of a function is the exit code of its last command")]),s._v(" "),a("p",[s._v("Consider this example function to check if a host is up:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("is_alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" -c1 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("This function sends a single ping to the host specified by the first function parameter.\nThe output and error output of "),a("code",[s._v("ping")]),s._v(" are both redirected to "),a("code",[s._v("/dev/null")]),s._v(",\nso the function will never output anything.\nBut the "),a("code",[s._v("ping")]),s._v(" command will have exit code 0 on success,\nand non-zero on failure.\nAs this is the last (and in this example, the only) command of the function,\nthe exit code of "),a("code",[s._v("ping")]),s._v(" will be reused for the exit code of the function itself.")]),s._v(" "),a("p",[s._v("This fact is very useful in conditional statements.")]),s._v(" "),a("p",[s._v("For example, if host "),a("code",[s._v("graucho")]),s._v(" is up, then connect to it with "),a("code",[s._v("ssh")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" is_alive graucho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" graucho\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n")])])]),a("p",[s._v("Another example: repeatedly check until host "),a("code",[s._v("graucho")]),s._v(" is up, and then connect to it with "),a("code",[s._v("ssh")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" is_alive graucho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" graucho\n\n")])])]),a("h2",{attrs:{id:"print-the-function-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print-the-function-definition"}},[s._v("#")]),s._v(" Print the function definition")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("getfunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am a sample function"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("funcd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("getfunc func"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" \ngetfunc func "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# or echo "$funcd"')]),s._v("\n\n")])])]),a("p",[s._v("Output:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am a sample function"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"a-function-that-accepts-named-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-function-that-accepts-named-parameters"}},[s._v("#")]),s._v(" A function that accepts named parameters")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v('"')]),s._v(" -gt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n      -f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--follow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FOLLOW")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"following"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      -t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TAIL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tail='),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FOLLOW: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FOLLOW")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TAIL: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TAIL")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("Example usage:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("foo -f\nfoo -t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nfoo -f --tail "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nfoo --follow --tail "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("li",[s._v("\nDefine a function with the `function` keyword:\n"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n")])])]),a("p",[s._v("}\n")])]),s._v(" "),a("li",[s._v("\nDefine a function with "),a("code",[s._v("()")]),s._v(":"),a("p"),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n")])])]),a("p",[s._v("}\n")])]),s._v(" "),a("li",[s._v("\nDefine a function with both the "),a("code",[s._v("function")]),s._v(" keyword and "),a("code",[s._v("()")]),s._v(":"),a("p"),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n")])])]),a("p",[s._v("}\n")])]),a("p")])}),[],!1,null,null,null);t.default=e.exports}}]);