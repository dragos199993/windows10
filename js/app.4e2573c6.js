(function(t){function s(s){for(var e,r,o=s[0],c=s[1],l=s[2],f=0,p=[];f<o.length;f++)r=o[f],n[r]&&p.push(n[r][0]),n[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(e=!1)}e&&(i.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},n={1:0},i=[];function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var u=c;i.push([6,0]),a()})({"4yyJ":function(t,s,a){},"5pot":function(t,s,a){"use strict";var e=a("Uc8q"),n=a.n(e);n.a},6:function(t,s,a){t.exports=a("Vtdi")},LXML:function(t,s,a){},RJFz:function(t,s,a){},Uc8q:function(t,s,a){},VagF:function(t,s,a){"use strict";var e=a("LXML"),n=a.n(e);n.a},Vtdi:function(t,s,a){"use strict";a.r(s);a("VRzm");var e=a("Kw5r"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=a("SliI"),o=a("Q9IY"),c=a.n(o),l=a("zEwE"),u=a.n(l);a("4yyJ");r["default"].library.add(c.a,u.a);var f={name:"App"},p=f,d=(a("nNx0"),a("KHd+")),h=Object(d["a"])(p,n,i,!1,null,null,null),m=h.exports,v=a("jE9Z"),g=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home",on:{contextmenu:function(s){t.handler(s)}}},[a("Desktop"),a("TaskBar")],1)},b=[],C=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"desktop"},[a("div",{staticClass:"icons-dekstop"},[a("div",{staticClass:"icon-desktop"},[a("a",[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527510180-chrome-5122.png",alt:""}}),a("span",[t._v("Chrome")])])]),a("div",{staticClass:"icon-desktop"},[a("a",[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527510180-visual-studio-code-0-10-1-icon2.png",alt:""}}),a("span",[t._v("Code")])])]),a("div",{staticClass:"icon-desktop"},[a("a",[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/18/6/1525513595-screenshot-5.png",alt:""}}),a("span",[t._v("File Explorer")])])]),a("div",{staticClass:"icon-desktop"},[a("a",[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/18/6/1525514340-screenshot-6.png",alt:""}}),a("span",[t._v("Recycle bin")])])])]),a("div",{attrs:{id:"sound-modal"}},[a("div",{staticClass:"sound-text"},[a("span",[t._v("Speakers")])]),a("div",{staticClass:"sound-progress"},[a("i",{staticClass:"fas fa-volume-up"}),a("div",{staticClass:"bar-sound"}),a("div",{staticClass:"bar-sound-drag"}),a("span",{staticClass:"data-value"},[t._v("50%")])])])])}],k={name:"Desktop"},w=k,x=(a("nQb0"),Object(d["a"])(w,C,_,!1,null,null,null)),y=x.exports,O=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"taskbar-container"},[a("div",{staticClass:"taskbar"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icons-left"},[a("span",{attrs:{id:"start-menu"},on:{click:t.toggleTaskBarMenu}},[a("font-awesome-icon",{attrs:{icon:["fab","windows"]}})],1),a("a",{attrs:{id:"search"}}),a("a",{attrs:{id:"tabs-windows"}}),a("a",{staticClass:"px"}),a("a",{staticClass:"border",attrs:{id:"folder"}}),a("a",{staticClass:"border",attrs:{id:"chrome"}})]),a("div",{staticClass:"icons-right"},[t._m(0),a("a",{staticClass:"small-icons",attrs:{id:"sound"}}),a("a",{staticClass:"small-icons",attrs:{id:"wifi"}}),t._m(1),a("span",{attrs:{href:"#notifications",id:"notifications"}},[a("font-awesome-icon",{attrs:{icon:"bell"}})],1),a("a",{staticClass:"clear disabled"}),a("a",{attrs:{id:"return"}})])])]),a("TaskBarMenu",{attrs:{showTaskBarMenu:t.visibleMenu}})],1)},M=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"small-icons",attrs:{id:"up"}},[a("i",{staticClass:"fas fa-chevron-up"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"datetime"},[a("span",{staticClass:"hour"},[t._v("\n                          23:58\n                      ")]),a("span",{staticClass:"date"},[t._v("\n                          03/05/2018\n                      ")])])}],E=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTaskBarMenu,expression:"showTaskBarMenu"}],attrs:{id:"start-menu-modal"}},[a("div",{attrs:{id:"user"}},[a("a",{staticClass:"push",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-bars"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-user"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-cog"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-power-off"})])]),a("div",{attrs:{id:"apps"}},[a("a",{staticClass:"category",attrs:{href:"#"}},[t._v("&")]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527510180-logo-microsoft-access-20132.png",alt:"access"}}),a("span",[t._v("Access")])]),a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://assets.nnm-club.ws/forum/image.php?link=http://s019.radikal.ru/i622/1709/cc/334931ae4fe7.png",alt:"sublime"}}),a("span",[t._v("Sublime text 3")])])]),a("div",{attrs:{id:"others"}},[a("div",{staticClass:"title-others"},[t._v("\r\n                Office 365\r\n            ")]),a("div",{staticClass:"box-others"},[a("div",{staticClass:"box"},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-word-20132.png",alt:""}}),a("span",[t._v("Word")])]),a("div",{staticClass:"box"},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-excel-20132.png",alt:""}}),a("span",[t._v("Excel")])]),a("div",{staticClass:"box"},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-powerpoint-2013.png",alt:""}}),a("span",[t._v("Powerpoint")])]),a("div",{staticClass:"box"},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527527145-logo-microsoft-outlook-2013.png",alt:""}}),a("span",[t._v("Outlook")])]),a("div",{staticClass:"box"},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527527458-publisher-by-navdbest-d6186xo-600x6002.png",alt:""}}),a("span",[t._v("Publisher")])]),a("div",{staticClass:"box"},[a("img",{attrs:{src:"https://image.noelshack.com/fichiers/2018/22/1/1527527243-logo-microsoft-onenote-20132.png",alt:""}}),a("span",[t._v("OneNote")])])])])])])},j=[],B={name:"TaskBarMenu",props:{showTaskBarMenu:Boolean}},T=B,$=(a("xh9c"),Object(d["a"])(T,E,j,!1,null,null,null)),F=$.exports,S=a("FD7d"),P=a.n(S),J={name:"TaskBar",components:{FontAwesomeIcon:P.a,TaskBarMenu:F},data:function(){return{visibleMenu:!1}},methods:{toggleTaskBarMenu:function(){this.visibleMenu=!this.visibleMenu}}},A=J,N=(a("VagF"),Object(d["a"])(A,O,M,!1,null,null,null)),D=N.exports,L={name:"home",components:{TaskBar:D,Desktop:y},methods:{handler:function(t){t.preventDefault()}}},V=L,z=(a("5pot"),Object(d["a"])(V,g,b,!1,null,null,null)),I=z.exports,R=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"log-screen"},[a("h1",[t._v("This is an about page")])])}],Q={},U=Object(d["a"])(Q,R,q,!1,null,null,null),W=U.exports;e["a"].use(v["a"]);var K=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:I},{path:"/logscreen",name:"logscreen",component:W}]}),X=a("L2JU");e["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{}}),H=a("lIOY");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),e["a"].config.productionTip=!1,new e["a"]({router:K,store:Y,render:function(t){return t(m)}}).$mount("#app")},mpBs:function(t,s,a){},nNx0:function(t,s,a){"use strict";var e=a("uWEC"),n=a.n(e);n.a},nQb0:function(t,s,a){"use strict";var e=a("mpBs"),n=a.n(e);n.a},uWEC:function(t,s,a){},xh9c:function(t,s,a){"use strict";var e=a("RJFz"),n=a.n(e);n.a}});
//# sourceMappingURL=app.4e2573c6.js.map