(window.webpackJsonp=window.webpackJsonp||[]).push([[1317],{1663:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"avplayer-and-avplayerviewcontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avplayer-and-avplayerviewcontroller"}},[t._v("#")]),t._v(" AVPlayer and AVPlayerViewController")]),t._v(" "),s("h2",{attrs:{id:"playing-media-using-avplayerviewcontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playing-media-using-avplayerviewcontroller"}},[t._v("#")]),t._v(" Playing Media Using AVPlayerViewController")]),t._v(" "),s("h3",{attrs:{id:"objective-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective-c"}},[t._v("#")]),t._v(" Objective-C")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR URL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url can be remote or local")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),t._v(" playerWithURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a player view controller")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayerViewController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("controller "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayerViewController")]),t._v(" alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" presentViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("controller animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),t._v(" completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("player play"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"swift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url can be remote or local")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" playerViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVPlayerViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// creating a player view controller")]),t._v("\nplayerViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" player\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("presentViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("playerViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    playerViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"playing-media-using-avplayer-and-avplayerlayer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playing-media-using-avplayer-and-avplayerlayer"}},[t._v("#")]),t._v(" Playing Media using AVPlayer and AVPlayerLayer")]),t._v(" "),s("h3",{attrs:{id:"objective-c-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective-c-2"}},[t._v("#")]),t._v(" Objective C")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("URLWithString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR URL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayer")]),t._v(" playerWithURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("videoURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayerLayer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("playerLayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AVPlayerLayer")]),t._v(" playerLayerWithPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayerLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer addSublayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("playerLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("player play"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"swift-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift-2"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR URL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" videoURL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" playerLayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVPlayerLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplayerLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSublayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("playerLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"avplayer-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avplayer-example"}},[t._v("#")]),t._v(" AVPlayer Example")]),t._v(" "),s("p",[t._v('AVPlayer *avPlayer = [AVPlayer playerWithURL:[NSURL URLWithString:@"YOUR URL"]];')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   AVPlayerViewController *avPlayerCtrl = [[AVPlayerViewController alloc] init];\n    avPlayerCtrl.view.frame = self.view.frame;\n    avPlayerCtrl.player = avPlayer;\n    avPlayerCtrl.delegate = self;\n    [avPlayer play];\n    [self presentViewController:avPlayerCtrl animated:YES completion:nil\n\n")])])]),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("import AVKit, import AVFoundation.")])])}),[],!1,null,null,null);a.default=e.exports}}]);