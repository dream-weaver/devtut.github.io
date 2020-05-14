(window.webpackJsonp=window.webpackJsonp||[]).push([[1109],{1453:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cloning-repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloning-repositories"}},[e._v("#")]),e._v(" Cloning Repositories")]),e._v(" "),a("h2",{attrs:{id:"shallow-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shallow-clone"}},[e._v("#")]),e._v(" Shallow Clone")]),e._v(" "),a("p",[e._v("Cloning a huge repository (like a project with multiple years of history) might take a long time, or fail because of the amount of data to be transferred. In cases where you don't need to have the full history available, you can do a shallow clone:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone [repo_url] --depth 1\n\n")])])]),a("p",[e._v("The above command will fetch just the last commit from the remote repository.")]),e._v(" "),a("p",[e._v("Be aware that you may not be able to resolve merges in a shallow repository. It's often a good idea to take at least as many commits are you are going to need to backtrack to resolve merges. For example, to instead get the last 50 commits:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone [repo_url] --depth 50\n\n")])])]),a("p",[e._v("Later, if required, you can the fetch the rest of the repository:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git fetch --unshallow     # equivalent of git fetch -–depth=2147483647\n                          # fetches the rest of the repository\n\n")])])]),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git fetch --depth=1000    # fetch the last 1000 commits\n\n")])])]),a("h2",{attrs:{id:"regular-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-clone"}},[e._v("#")]),e._v(" Regular Clone")]),e._v(" "),a("p",[e._v("To download the entire repository including the full history and all branches, type:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone <url>\n\n")])])]),a("p",[e._v("The example above will place it in a directory with the same name as the repository name.")]),e._v(" "),a("p",[e._v("To download the repository and save it in a specific directory, type:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone <url> [directory]\n\n")])])]),a("p",[e._v("For more details, visit "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/git/218/getting-started-with-git/818/clone-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clone a repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"clone-a-specific-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-a-specific-branch"}},[e._v("#")]),e._v(" Clone a specific branch")]),e._v(" "),a("p",[e._v("To clone a specific branch of a repository, type "),a("code",[e._v("--branch <branch name>")]),e._v(" before the repository url:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone --branch <branch name> <url> [directory]\n\n")])])]),a("p",[e._v("To use the shorthand option for "),a("code",[e._v("--branch")]),e._v(", type "),a("code",[e._v("-b")]),e._v(". This command downloads entire repository and checks out "),a("code",[e._v("<branch name>")]),e._v(".")]),e._v(" "),a("p",[e._v("To save disk space you can clone history leading only to single branch with:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone --branch <branch_name> --single-branch <url> [directory]\n\n")])])]),a("p",[e._v("If "),a("code",[e._v("--single-branch")]),e._v(" is not added to the command, history of all branches will be cloned into "),a("code",[e._v("[directory]")]),e._v(". This can be issue with big repositories.")]),e._v(" "),a("p",[e._v("To later undo "),a("code",[e._v("--single-branch")]),e._v(" flag and fetch the rest of repository use command:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git config remote.origin.fetch "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+refs/heads/*:refs/remotes/origin/*"')]),e._v("\ngit fetch origin\n\n")])])]),a("h2",{attrs:{id:"clone-recursively"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-recursively"}},[e._v("#")]),e._v(" Clone recursively")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone <url> --recursive\n\n")])])]),a("p",[e._v("Clones the repository and also clones all submodules. If the submodules themselves contain additional submodules, Git will also clone those.")]),e._v(" "),a("h2",{attrs:{id:"clone-using-a-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-using-a-proxy"}},[e._v("#")]),e._v(" Clone using a proxy")]),e._v(" "),a("p",[e._v("If you need to download files with git under a proxy, setting proxy server system-wide couldn't be enough. You could also try the following:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git config --global http.proxy http://<proxy-server>:<port>/\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("ul",[a("li",[e._v("git clone ["),a("options",[e._v("] [--] "),a("repo",[e._v(" ["),a("dir",[e._v("]")])],1)],1)],1),e._v(" "),a("li",[e._v("git clone [--template=<template_directory>] [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror] [-o "),a("name",[e._v("] [-b "),a("name",[e._v("] [-u "),a("upload-pack",[e._v("] [--reference "),a("repository",[e._v("] [--dissociate] [--separate-git-dir "),a("git",{attrs:{dir:""}},[e._v("] [--depth "),a("depth",[e._v("] [--[no-]single-branch] [--recursive | --recurse-submodules] [--[no-]shallow-submodules] [--jobs "),a("n",[e._v("] [--] "),a("repository",[e._v(" ["),a("directory",[e._v("]")])],1)],1)],1)],1)],1)],1)],1)],1)],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);