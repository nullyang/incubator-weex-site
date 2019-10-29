(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{559:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("In this article, we demonstrate how to fit Weex pages for different or changable screen sizes such as orientation switches.")]),t._m(1),t._m(2),s("p",[t._v("Take iOS as example, when your application starts up, Weex acquires current device screen width as global variable. On iOS, this value is screen physical pixels divided by screen scale. For iPhone6, this value is 375.")]),t._m(3),s("p",[t._v("When every WXSDKInstance is created, it's default viewPortWidth is 750px.")]),t._m(4),s("p",[t._v('If you set a CSS style as "375px", in Weex, this value is automatically converted to a UIKit system value considering current screen width and the current instance\'s viewPortWidth.')]),t._m(5),s("p",[t._v("We get:\ndimension(UIKit) = 375 / 750 * 375 = 187.5")]),s("p",[t._v("After that, Weex use value 187.5 for layout and set the final value after layout to an iOS UIView, no more conversion.")]),t._m(6),s("p",[t._v("As mentioned above, Weex converts a raw CSS style value to UI system's unit and dropped the raw style value. This is for historical reason, and could save a lot of memory for huge and complcated pages.")]),s("p",[t._v("At the same time, Weex does not support style value as percentage. Massive existing pages use 750px as the default viewPortWidth, and all sub elements in the page use coordinate values relative to 750 which is treated as full screen width.")]),s("p",[t._v('When screen rotated, as for iPhone6, the "width * height" would be "667 * 375". We need raw style value to calculate the new value for layout and UIView. But because there are no raw style values, we cannot proceed.')]),s("p",[t._v('For style value "375px" after rotation, the UIKit value would be:')]),s("p",[t._v("dimension(UIKit) = 375 / 750 * 667 = 333.5")]),s("p",[t._v("You can see that 333.5 is still half the screen width.")]),t._m(7),s("p",[t._v("We provide a series of APIs to control layout parameter.")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),s("Badge",{attrs:{text:"v0.25+",type:"warning"}}),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),s("Badge",{attrs:{text:"v0.25+",type:"warning"}}),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),s("Badge",{attrs:{text:"v0.25+",type:"warning"}}),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),s("p",[t._v("If your app does not support screen rotation, you can ignore all issues above. When Weex starts up, it will automatically get current screen width and after that all pages will use this global value as default.")]),t._m(39),s("Badge",{attrs:{text:"v0.25+",type:"warning"}}),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),s("p",[t._v("You could use latest Playground to test the "),s("a",{attrs:{href:"http://editor.weex.io/p/wqyfavor/scroller/commit/37810078ef963388b699b5ad7d5e9881",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1)]),s("p",[t._v("Remember to turn on screen rotation in control panel.")]),s("p",[s("a",{attrs:{href:"https://img.alicdn.com/tfs/TB1gWiTcvWG3KVjSZPcXXbkbXXa-240-427.gif",target:"_blank",rel:"noopener noreferrer"}},[t._v("image"),s("OutboundLink")],1)]),t._m(45),s("p",[t._v("For styles that should not be affected by screen width and viewPortWidth, you should use 'wx' as unit.")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("iOS only,Android not support yet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-weex-convert-a-css-style-ot-view-coordinate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-weex-convert-a-css-style-ot-view-coordinate","aria-hidden":"true"}},[this._v("#")]),this._v(" How Weex convert a CSS style ot view coordinate")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("@implementation WXCoreBridge\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("install\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" dispatch_once_t onceToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_once")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("onceToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        WeexCore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("WXCoreEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" env "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WeexCore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("WXCoreEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetPlatform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OS_iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scale"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        CGSize screenSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetDeviceWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screenSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetDeviceHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screenSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The default screen width which helps us to calculate the real size or scale in different devices.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CGFloat WXDefaultScreenWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("750.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dimension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIKit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dimensionPx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CSS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewPortWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" globalScreenWidth\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why-weex-does-not-support-orientation-switch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-weex-does-not-support-orientation-switch","aria-hidden":"true"}},[this._v("#")]),this._v(" Why Weex does not support orientation switch")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"interface-for-screen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interface-for-screen","aria-hidden":"true"}},[this._v("#")]),this._v(" Interface for screen")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-set-viewportwidth-of-a-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-set-viewportwidth-of-a-page","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Set viewPortWidth of a page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"a-use-meta-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-use-meta-module","aria-hidden":"true"}},[this._v("#")]),this._v(" a. Use Meta Module")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" meta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"b-use-wxsdkinstance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-use-wxsdkinstance","aria-hidden":"true"}},[this._v("#")]),this._v(" b. Use WXSDKInstance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("iOS:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("WXSDKInstance* instance = [[WXSDKInstance alloc] init];\n[instance setViewportWidth:800.f];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Android:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("WXSDKInstance instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WXSDKInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInstanceViewPortWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-set-devicewidth-of-a-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-devicewidth-of-a-page","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Set deviceWidth of a page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),e("p",[this._v("iOS only,Android not support yet")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"a-use-meta-module-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-use-meta-module-2","aria-hidden":"true"}},[this._v("#")]),this._v(" a. Use Meta Module")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" meta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdeviceWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdeviceHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"b-use-wxsdkinstance-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-use-wxsdkinstance-2","aria-hidden":"true"}},[this._v("#")]),this._v(" b. Use WXSDKInstance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("WXSDKInstance* instance = [[WXSDKInstance alloc] init];\n[instance setPageRequiredWidth:375.f height:800.f];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"c-set-global-devicewidth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-set-global-devicewidth","aria-hidden":"true"}},[this._v("#")]),this._v(" c. Set global deviceWidth")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[WXSDKEngine setGlobalDeviceSize:CGSizeMake([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height)];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-let-a-page-reserve-all-raw-css-styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-let-a-page-reserve-all-raw-css-styles","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Let a page reserve all raw CSS styles")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"a-use-meta-module-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-use-meta-module-3","aria-hidden":"true"}},[this._v("#")]),this._v(" a. Use Meta Module")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" meta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treserveCssStyles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"b-use-wxsdkinstance-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-use-wxsdkinstance-3","aria-hidden":"true"}},[this._v("#")]),this._v(" b. Use WXSDKInstance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("iOS:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("WXSDKInstance* instance = [[WXSDKInstance alloc] init];\n[instance setPageKeepRawCssStyles];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Android:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("WXSDKInstance instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WXSDKInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPageKeepRawCssStyles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-force-the-page-to-relayout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-force-the-page-to-relayout","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Force the page to relayout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("iOS:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[instance reloadLayout];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Android:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[this._v("instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("reloadPageLayout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"scenarios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scenarios","aria-hidden":"true"}},[this._v("#")]),this._v(" Scenarios")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-applications-that-do-not-support-screen-rotation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-applications-that-do-not-support-screen-rotation","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Applications that do not support screen rotation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-support-screen-rotation-for-a-specific-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-support-screen-rotation-for-a-specific-page","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Support screen rotation for a specific page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Let the page reserve all CSS style values.")]),e("li",[this._v("After screen rotation is done, use the code below to reset screen width for the page and trigger relayout.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("iOS:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("CGFloat w = [UIScreen mainScreen].bounds.size.width;\nCGFloat h = [UIScreen mainScreen].bounds.size.height;\n[_instance setPageRequiredWidth:w height:h];\n[_instance reloadLayout];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Android:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetDeviceDisplayOfPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reloadPageLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-notice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-notice","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Notice")])}],!1,null,null,null);e.default=n.exports}}]);