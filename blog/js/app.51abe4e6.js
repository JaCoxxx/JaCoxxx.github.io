(function(n){function e(e){for(var o,i,l=e[0],c=e[1],h=e[2],u=0,d=[];u<l.length;u++)i=l[u],a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);s&&s(e);while(d.length)d.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),n=l(l.s=t[0]))}return n}var o={},a={app:0},r=[];function i(n){return l.p+"js/"+({about:"about"}[n]||n)+"."+{"chunk-38a65424":"b62e5dee",about:"aba713d2","chunk-2dd72036":"f0189f66","chunk-69d4e2ce":"8c1709ec"}[n]+".js"}function l(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(n){var e=[],t=a[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise(function(e,o){t=a[n]=[e,o]});e.push(t[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(n),r=function(e){c.onerror=c.onload=null,clearTimeout(h);var t=a[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+n+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,t[1](i)}a[n]=void 0}};var h=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},l.m=n,l.c=o,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},l.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)l.d(t,o,function(e){return n[e]}.bind(null,o));return t},l.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="",l.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=h;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),a=(t("7f7f"),t("1481")),r=t("94c0"),i=t("e35e"),l=t("2ae3"),c=t("bb51"),h=t("4e41"),u=t("c22a"),s=(c["a"],h["a"],u["a"],{components:{Tabbar:c["a"],TabbarItem:h["a"],Actionsheet:u["a"]},data:function(){return{show:!1}},computed:{tab:function(){return this.$store.getters.getTab},isPost:function(){return this.$store.getters.getIsPost},menus:function(){return{all:"全部",ask:"问答",share:"分享"}}},methods:{handleChangeTab:function(n){this.$store.dispatch("setTab",{tab:"cancel"===n?"all":n})},handleClick:function(){this.show=!0}}}),d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.isPost?t("tabbar",[t("tabbar-item",{on:{"on-item-click":n.handleClick}},[t("span",{attrs:{slot:"label"},slot:"label"},[n._v("筛选")])])],1):n._e(),n._v(" "),t("actionsheet",{attrs:{menus:n.menus,"close-on-clicking-mask":!1,"show-cancel":""},on:{"on-click-menu":n.handleChangeTab},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}})],1)},f=[],p=t("2455"),b=!1,m=null,C=null,z=null,g=Object(p["a"])(s,d,f,b,m,C,z),v=g.exports,y=(a["a"],r["a"],i["a"],l["a"],{components:{XHeader:a["a"],ButtonTab:r["a"],ButtonTabItem:i["a"],ViewBox:l["a"],Footer:v},methods:{handleClickTab:function(n){0===n?this.$router.push({name:"home"}):1===n&&this.$router.push({name:"about"})},handleBackClick:function(){"home"!==this.$route.name&&this.$router.go(-1)}}}),N=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("view-box",{ref:"viewBox",attrs:{id:"app"}},[t("x-header",{staticStyle:{width:"100%",position:"fixed",left:"0",top:"0","z-index":"100"},attrs:{slot:"header","left-options":{preventGoBack:!0},title:"slot:overwrite-title"},on:{"on-click-back":n.handleBackClick},slot:"header"},[t("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[t("button-tab",[t("button-tab-item",{attrs:{selected:""},on:{"on-item-click":n.handleClickTab}},[n._v("Home")]),n._v(" "),t("button-tab-item",{on:{"on-item-click":n.handleClickTab}},[n._v("Search")])],1)],1)]),n._v(" "),t("router-view"),n._v(" "),t("Footer",{staticStyle:{width:"100%",position:"fixed",left:"0",bottom:"0","z-index":"100"},attrs:{slot:"bottom"},slot:"bottom"})],1)},k=[];function w(n){t("fa66")}var x=!1,j=w,P=null,T=null,_=Object(p["a"])(y,N,k,x,j,P,T),O=_.exports,S=t("8c4f");o["a"].use(S["a"]);var B,$=new S["a"]({base:"",routes:[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-38a65424"),t.e("about")]).then(t.bind(null,"bb51b"))}},{path:"/about",name:"about",component:function(){return Promise.all([t.e("chunk-38a65424"),t.e("about")]).then(t.bind(null,"f820"))}},{path:"/posts",name:"posts",component:function(){return t.e("chunk-69d4e2ce").then(t.bind(null,"7c2a"))}},{path:"/add",name:"add",component:function(){return Promise.all([t.e("chunk-38a65424"),t.e("chunk-2dd72036")]).then(t.bind(null,"6cf0"))}}]}),I=t("bd86"),E=t("75fc"),H=(t("6762"),t("2fdb"),t("2f62")),M="ADD_POSTS",A="DEL_POSTSBYID",D="SET_TAB",F="SET_ISPOST";o["a"].use(H["a"]);var J=new H["a"].Store({state:{posts:[{id:1,title:"第一个",content:"jfjknjdsfnjk",author:"jack",type:"ask"},{id:2,title:"第二个",content:"阿萨大大大啊阿萨啊 啊啊 阿达",author:"jack",type:"share"},{id:3,title:"第二个",content:"阿萨大大大啊阿萨啊 啊啊 阿达",author:"jack",type:"share"},{id:4,title:"第二个",content:"阿萨大大大啊阿萨啊 啊啊 阿达",author:"jack",type:"share"},{id:5,title:"第二个",content:"阿萨大大大啊阿萨啊 啊啊 阿达",author:"jack",type:"share"}],tab:"all",isPost:!1},getters:{getFilterPosts:function(n){return function(e){return n.posts.filter(function(n){return"all"===e||n.type===e})}},getPosts:function(n){return function(e,t){return n.posts.filter(function(n){return(n[e]+"").includes(t)})}},getTab:function(n){return n.tab},getIsPost:function(n){return n.isPost}},mutations:(B={},Object(I["a"])(B,M,function(n,e){console.log(n),n.posts=[].concat(Object(E["a"])(n.posts),[e.post]),e.callback("success")}),Object(I["a"])(B,A,function(n,e){n.posts=n.posts.filter(function(n){return n.id!==e.id})}),Object(I["a"])(B,D,function(n,e){n.tab=e.tab}),Object(I["a"])(B,F,function(n,e){n.isPost=e.isPost}),B),actions:{addPosts:function(n,e){var t=n.commit;t(M,e)},delPostsById:function(n,e){var t=n.commit;t(A,e)},setTab:function(n,e){var t=n.commit;t(D,e)},setIsPost:function(n,e){var t=n.commit;t(F,e)}}});o["a"].config.productionTip=!1,new o["a"]({router:$,store:J,render:function(n){return n(O)}}).$mount("#app")},c221:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  line-height: 1.6;\n  font-family: -apple-system-font, "Helvetica Neue", sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\na img {\n  border: 0;\n}\na {\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/** env = windows **/\n::-webkit-input-placeholder {\n  font-family: -apple-system-font, "Helvetica Neue", sans-serif;\n}\n/** prevent default menu callout **/\na {\n  -webkit-touch-callout: none;\n}\ndiv.weui-tab__panel {\n  padding-top: 45px;\n  height: auto;\n}\ndiv.overwrite-title-demo {\n  padding-top: 5px;\n}\n',""])},fa66:function(n,e,t){var o=t("c221");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("499e").default;a("44cc66a0",o,!0,{})}});
//# sourceMappingURL=app.51abe4e6.js.map