(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{380:function(t,e,i){"use strict";i.r(e);var a=i(0),l=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"用来衡量什么问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#用来衡量什么问题"}},[t._v("#")]),t._v(" 用来衡量什么问题")]),i("p",[t._v("衡量一个weex页面质量的角度有很多种，不管哪种角度，都是为了在端侧给用户更好的体验。")]),i("p",[t._v("通常来说，用户接触最频繁、影响最大、感受最明显的是页面的加载时间。在之前的版本中，weex提供了首屏时间这个概念，来衡量这个时间。但是随着业务复杂度的增加，引入底图、框架壳子，首屏越来越有局限性，只能算是加载时间的一部分，并不能作为度量整个加载时间的指标。")]),i("p",[t._v("目前业务的逻辑大概是")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1532953927448-6af8006c-efa9-4a83-a33e-31ac264e2320.png",alt:"img_js_logic_normal"}})]),i("p",[t._v("老的秒开时间最多只能监测到第3步的时间，但是业务方真正想要的、和用户感官最接近的应该是第5步完成的时间")]),i("p",[t._v("因此，我们做了两件事，来处理这个问题")]),i("ul",[i("li",[i("p",[t._v("推出"),i("code",[t._v("可交互时间")]),t._v("这个指标，来衡量 "),i("strong",[t._v("开始渲染到屏幕("),i("code",[t._v("instance")]),t._v(")内view稳定渲染完成的时间")]),t._v(" (开始渲染bundle—>异步请求—>屏幕内view树稳定、渲染完成)")])]),i("li",[i("p",[t._v("修正首屏算法，使用新的字段"),i("code",[t._v("newFSRenderTime")]),t._v("来作为新的首屏指标 （"),i("strong",[t._v("老首屏字段不受影响")]),t._v("）")])])]),i("h1",{attrs:{id:"可交互时间"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可交互时间"}},[t._v("#")]),t._v(" 可交互时间")]),i("h2",{attrs:{id:"衡量标准是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#衡量标准是什么"}},[t._v("#")]),t._v(" 衡量标准是什么")]),i("p",[t._v("如上所示，可交互时间的起始点分别是")]),i("ul",[i("li",[t._v("起始点 : render(url)")]),i("li",[t._v("结束 : 屏幕内view渲染完成且view树稳定的时间")])]),i("p",[t._v("对于起始点，应该没什么疑问，对于结束点的两个限定条件，做一些说明。")]),i("h3",{attrs:{id:"第一个限定条件：屏幕内view树稳定下来："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#第一个限定条件：屏幕内view树稳定下来："}},[t._v("#")]),t._v(" 第一个限定条件：屏幕内view树稳定下来：")]),i("p",[t._v("可交互时间是对首屏时间的补充，首屏后，因为有异步刷新的缘故，view还是会不断增删刷新，所以第一个限定条件是 屏幕内view树且稳定下来，不再出现增删的操作。")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1532953850732-b0d52294-a6c6-4fbb-bd08-ee7e2a4b84b8.png",alt:"img_async_data_case"}})]),i("h3",{attrs:{id:"第二个限定条件：屏幕内view渲染完成"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#第二个限定条件：屏幕内view渲染完成"}},[t._v("#")]),t._v(" 第二个限定条件：屏幕内view渲染完成")]),i("p",[t._v("定义可交互的时候，碰到一个问题，什么时候算是可交互呢？")]),i("ul",[i("li",[t._v("只有一个view 也可以点")]),i("li",[t._v("view渲染半屏的时候可以点")]),i("li",[t._v("view全屏的完成的时候可以点")]),i("li",[t._v("在渲染屏幕外的view的时候，屏幕内的view也是可以交互的")])]),i("p",[t._v("如上所述，无论是渲染到什么程度，事实上都是可以交互的。")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1532953896764-72b52689-f4b2-4442-9f0f-9a2e4edb007f.png",alt:"img_interaction_screen_case"}})]),i("p",[t._v("最后选择屏幕内所有view渲染完成这个结点(图3)作为约束的边界点")]),i("ul",[i("li",[t._v("其一，按照经验，大部分用户打开页面后，基本都会等一会儿，等屏幕内view稳定，不再有剧烈变动后，再开始操作。")]),i("li",[t._v("其二，一般设计的时候屏幕内展示的内容优先级是最高最重要的，整屏的数据比半屏的数据更有说服力，不管从数据层面还是感官体验层面")])]),i("h2",{attrs:{id:"可交互时间的算法实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可交互时间的算法实现"}},[t._v("#")]),t._v(" 可交互时间的算法实现")]),i("p",[t._v("回想一下可交互时间的两个限制条件")]),i("ul",[i("li",[t._v("屏幕内view渲染完成")]),i("li",[t._v("屏幕内view树稳定下来")])]),i("p",[t._v("所以思路很简单，当屏幕内发生view的add/rm操作时，认为是可交互点,记录数据。直到没有再发生为止。")]),i("p",[t._v("实现过程中，碰到3个bad case")]),i("ul",[i("li",[t._v("渲染过程中，用户点击了view，有可能触发刷新或者其它什么逻辑。")]),i("li",[t._v("由于没办法知道什么时候是最后一次add/rm 操作，要有个截止时间。")]),i("li",[t._v("fix元素,比如会场的购物津贴，或者某个悬浮元素，晚个几s出来。")])]),i("p",[t._v("这几个case的解决方案如下，如果大家有更好的想法，可以提出来")]),i("ul",[i("li",[t._v("点击事件case，每次add/rm操作时，如果当前weex页面发生过点击事件，不再记录，以上一次时间为准。")]),i("li",[t._v("截止时间case，按照历史数据，首屏基本在2s内，加上可交互延长的时间，最差大概在5s内，考虑到线上复杂情况，截止时间设置为8s，8s后数据不在记录。")]),i("li",[t._v("fix元素问题，和天猫、淘宝会场同学讨论后，一致认为在前端中，fix元素一般都是悬浮view或者导航，对用户体验来说影响不大。所以，最终排除对fix元素的计算。")]),i("li",[t._v("算法优化，去掉rm操作的监测，对结果影响很小，但是理论上会减少一半的计算量。")])]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/ac84ce579b28867aac2e8ba18e40e954.png",alt:"img_interaction_logic"}})]),i("p",[t._v("iOS 代码实现")]),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("//when addview，call _handleRenderTime\n\n- (void) _handleRenderTime:(WXComponent*)targetComponent withModifyTime:(double)modifyTime\n{\n    //超过8s不再记录\n    double diff = modifyTime - self.renderTimeOrigin;\n    if (diff > 8000) {\n        return;\n    }\n    \n    // 去除不必要的多余计算\n    if (diff < self.interactionTime) {\n        //useless calulcate ,for imporove performance\n        return;\n    }\n    \n    //有点击事件，直接返回\n    UIView *root = targetComponent.weexInstance.rootView;\n    if (root && [root isKindOfClass:[WXRootView class]]) {\n        WXRootView* wxRootView = (WXRootView *)root;\n        if ([wxRootView isHasEvent]) {\n            return;\n        }\n    }\n    \n    //屏蔽fix元素\n    if ([targetComponent.isfix]) {\n        return;\n    }\n    \n    CGRect absoluteFrame = [targetComponent.view.superview convertRect:targetComponent.view.frame toView:targetComponent.weexInstance.rootView];\n    CGRect rootFrame = targetComponent.weexInstance.rootView.frame;\n    CGPoint leftTop = absoluteFrame.origin;\n    CGPoint rightBottom = CGPointMake(absoluteFrame.origin.x+absoluteFrame.size.width, absoluteFrame.origin.y+absoluteFrame.size.height);\n\n    \n    bool inScreen = CGRectContainsPoint(rootFrame, leftTop) || CGRectContainsPoint(rootFrame, rightBottom);\n    \n    //屏幕外的view，不care\n    if (!inScreen) {\n        return;\n    }\n    \n    //更新可交互时间\n    self.interactionLimitAddOpCount++;\n    self.interactionAddCount = self.interactionAddCountRecord;\n    self.interactionTime = self.interactionTime < diff ? diff :self.interactionTime;\n}\n")])])]),i("h2",{attrs:{id:"测试验证数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#测试验证数据"}},[t._v("#")]),t._v(" 测试验证数据")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("系统")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("系统版本")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("机型")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("iOS")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("11.2")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("iPhone 8")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Android")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("8.0")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("华为P10")])])])]),i("p",[t._v("摄像机帧率50，即20ms/帧")]),i("h3",{attrs:{id:"验证数据结果"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#验证数据结果"}},[t._v("#")]),t._v(" 验证数据结果")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("业务")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("埋点时间")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("摄像机拍摄体感时间")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("网络时间")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("误差")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("有好货Android")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("2297")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("2900")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("-20%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("有好货iOS")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1437")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1300")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("11%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("有好货Android")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("5678")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("5960")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("96")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("-3%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("​​​​​​头条iOS")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("529")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("660")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("-18")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("天天特价Android（首次）")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("3831")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("4440")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("100")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("-13%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("​​​​​​​​​​天天特价iOS（首次）")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1308")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1500")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("144")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("3%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("​​​​​​​​​​​​天天特价Android（非首次）")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("3288")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("3480")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("60")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("-4%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("​​​​​​​​​​​​天天特价iOS（非首次）")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1280")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("1460")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("74")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("6%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("​​​​​​​​​​​​爱逛街Android")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("2463")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("2240")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("10%")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("​​​​​​​​​​​​爱逛街iOS")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("830")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("940")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("-10%")])])])]),i("h3",{attrs:{id:"验证case示例"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#验证case示例"}},[t._v("#")]),t._v(" 验证case示例")]),i("p",[t._v("展示三个测试case。")]),i("p",[t._v("天天特价iOS（首次）")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1532953955583-a020c31d-9e1e-4d5f-8754-ba9b42e04eb6.png",alt:"img_tttj_first_iOS"}})]),i("p",[t._v("有好货Android\n"),i("img",{attrs:{src:"/blog/interaction-optimization/1532953968812-86ca8419-7b4f-4ac1-987a-1cc32049e385.png",alt:"img_yhh_android"}})]),i("p",[t._v("爱逛街iOS")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1532953779052-391a0eb5-2902-4a76-bb7d-ecb79fad40d5.png",alt:"img_agj_iOS"}})]),i("h2",{attrs:{id:"可交互时间参考改进数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可交互时间参考改进数据"}},[t._v("#")]),t._v(" 可交互时间参考改进数据")]),i("p",[t._v("有同学可能问了，衡量指标给了，那有没有优化的建议或者参考信息呢")]),i("p",[t._v("当然有的，不都讲究一条龙服务吗 （手动滑稽.jpg）")]),i("h3",{attrs:{id:"使用-weex-dev-tool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用-weex-dev-tool"}},[t._v("#")]),t._v(" 使用 weex-dev-tool")]),i("p",[t._v("github 地址：https://github.com/weexteam/weex-devtool-iOS")]),i("p",[t._v("整体耗时：")]),i("p",[i("img",{attrs:{src:"http://ata2-img.cn-hangzhou.img-pub.aliyun-inc.com/e5aae2e2c2da360fb6204f64b1e3cd31.png",alt:"图片.png"}})]),i("p",[t._v("详细view渲染到屏幕上的时序")]),i("p",[i("img",{attrs:{src:"http://ata2-img.cn-hangzhou.img-pub.aliyun-inc.com/45e36879f4baed04dfbad0382c23dd8a.png",alt:"屏幕快照 2019-02-22 下午2.59.31.png"}})]),i("h3",{attrs:{id:"其它信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其它信息"}},[t._v("#")]),t._v(" 其它信息")]),i("p",[t._v("weex在统计可交互时间的同时，同时记录了以下几个辅助信息数据")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("字段")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("含义")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("wxInteractionComponentCreateCount")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("可交互时间内，创建component个数")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("创建组件要耗时的"),i("br"),t._v("肾5s上，3ms/个")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("wxInteractionScreenViewCount")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("可交互时间内添加view的次数(屏幕内)")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("屏幕内view，直接影响可交互时间结果")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("wxInteractionAllViewCount")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("可交互时间内添加view的次数 (屏幕内+屏幕外)")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("参考数据"),i("br"),t._v("不影响可交互时间"),i("br"),t._v("但不建议在屏幕外创建大量组件，耗时又耗内存")])])])]),i("h1",{attrs:{id:"首屏时间的修正"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#首屏时间的修正"}},[t._v("#")]),t._v(" 首屏时间的修正")]),i("p",[t._v("在讲首屏修正方案之前，先回忆下现在的前端逻辑")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1532953927448-6af8006c-efa9-4a83-a33e-31ac264e2320.png",alt:"img_js_logic_normal"}})]),i("p",[t._v("前面说过，老版首屏最多能监控到第3步的情况。实际上。在业务支撑过程中，发现第3步时未必到达用户真实“首屏”感受")]),i("ul",[i("li",[t._v("在createfinish时，业务方只渲染了了一半（爱逛街），剩下一半搞异步渲染，这时老的首屏时间最多只能算“半屏时间”")]),i("li",[t._v("业务方只render一个view壳子，真正的内容异步填充，这时候老白屏意义不大，因为屏幕内70%的内容几乎都是在异步渲染")])]),i("p",[t._v("鉴于以上case，修正了首屏时间的算法")]),i("ul",[i("li",[t._v("以叶子结点（text/img/button）填满屏幕作为结束点 ，不关心容器（viewgroup）是否填满")]),i("li",[t._v("若果叶子结点未填满，以createfinish时间为准。")])]),i("p",[t._v("新的字段"),i("code",[t._v("newFsRenderTime")]),t._v(" 作为新的首屏参考 "),i("strong",[t._v("老字段不受影响")])]),i("p",[t._v("测试数据比较,以iOS数据为例，如下图所示")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1533126050649-50116f85-0101-4389-99f5-35f3ef4813d9.png",alt:"img_wx_render_compare"}})]),i("h1",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),i("p",[t._v("算法和数据结果如上文所述，这里放一张图总结一下首屏(老)、首屏(新)、可交互时间的覆盖范围")]),i("p",[i("img",{attrs:{src:"/blog/interaction-optimization/1533125815712-c17b4df4-e072-42b7-8c77-560deabf7696.png",alt:"img_wx_screen_render_stream"}})]),i("p",[t._v("欢迎广大业务方来提改进，和bad case 优化可交互时间的算法")]),i("p",[t._v("毕竟业务认可的，和实际感官相符的，才是正确的。")])])}],!1,null,null,null);e.default=l.exports}}]);