(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{237:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6570a8f6",content,!0,{sourceMap:!1})},239:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("b3cfd566",content,!0,{sourceMap:!1})},246:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("704e1082",content,!0,{sourceMap:!1})},247:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("04b6c634",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";var r={name:"ProfileDesktop",data:function(){return{cardAttrs:{class:"mb-12",width:"500",boilerplate:!0,elevation:2},switchAttrs:{width:"242",height:"106",boilerplate:!0,elevation:2}}}},o=n(59),l=n(70),c=n.n(l),d=n(400),f=n(406),v=n(401),h=n(402),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{align:"start"}},[n("v-col",{attrs:{cols:"2"}},[t._t("left-side")],2),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("div",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"d-flex flex-column"},[t._t("main",[n("v-skeleton-loader",t._b({attrs:{type:"card"}},"v-skeleton-loader",t.cardAttrs,!1)),t._v(" "),n("v-skeleton-loader",t._b({attrs:{type:"card"}},"v-skeleton-loader",t.cardAttrs,!1)),t._v(" "),n("v-skeleton-loader",t._b({attrs:{type:"card"}},"v-skeleton-loader",t.cardAttrs,!1))])],2)])]),t._v(" "),n("v-col",{attrs:{cols:"2"}},[t._t("right-side",[n("v-skeleton-loader",t._b({attrs:{type:"card"}},"v-skeleton-loader",t.switchAttrs,!1))])],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCol:d.a,VContainer:f.a,VRow:v.a,VSkeletonLoader:h.a})},260:function(t){t.exports=JSON.parse('{"name":"Yusuke Miyakawa","profession":"Software Engineer & Web Development.","about-sub-title":"I am a software engineer working in Tokyo.","about":"I enjoy turning complex problems into simple and beautiful designs.Therefore, I\'m studying and coding so that I can design products with great UI/UX.When I\'m not tweet or pushing to GitHub, I\'m running or reading.","work":{"sub-titile-1":"Work history","history":{"domain01":{"title":"TOPPAN PRINTING CO., LTD.","contents":{"content01":{"sub-title":"","text":"incumbent"}}},"university":{"title":"Graduate School of Science and Technology, Nihon University","contents":{"content01":{"sub-title":"","text":"Completed Master\'s program in Information Science"}}}}}}')},263:function(t,e,n){"use strict";var r=n(264),o=n(265),l={components:{PortfoliemHeader:r.default,ContactFooter:o.default},data:function(){return{transMode:"en",socialData:[{icon:"mdi-email",href:"mailto:chidoriashi00918@gmail.com"},{icon:"mdi-linkedin",href:"https://www.linkedin.com/in/yusuke-miyakawa-a0a219191/"},{icon:"mdi-facebook",href:"https://www.facebook.com/YuM1909"},{icon:"mdi-twitter",href:"https://twitter.com/MiyakawaYusuke"},{icon:"mdi-github",href:"https://github.com/chidoriashi1990"}]}},created:function(){this.initialTransMode()},methods:{scrollTo:function(menu){this.$vuetify.goTo("#"+menu)},initialTransMode:function(){this.transMode=this.$i18n.locale},cangeTransMode:function(t){switch(t){case"en":this.$router.push("/");break;default:this.$router.push("/"+t)}}}},c=(n(358),n(59)),d=n(70),f=n.n(d),v=n(397),h=n(406),m=n(399),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("portfoliem-header",{attrs:{"initial-trans-mode":t.transMode},on:{menu:t.scrollTo,transMode:t.cangeTransMode}}),t._v(" "),n("v-container",[n("nuxt",{staticClass:"wrapper"})],1),t._v(" "),n("contact-footer",{attrs:{id:"contact",title:"contact","action-buttons":t.socialData}})],1)],1)}),[],!1,null,"6ae65384",null);e.a=component.exports;f()(component,{VApp:v.a,VContainer:h.a,VMain:m.a})},264:function(t,e,n){"use strict";n.r(e);var r={name:"PortfoliemHeader",props:{initialTransMode:{type:String,require:!1,default:"en"}},data:function(){return{navButtons:[{label:"about",href:""},{label:"works",href:""},{label:"contact",href:""}],selectItemIndex:0,transName:"English",transModel:"en",transItems:[{label:"English",val:"en"},{label:"日本語",val:"ja"}]}},created:function(){this.transModeName(this.initialTransMode)},methods:{transModeName:function(t){for(var i=0;i<this.transItems.length;i++)this.transItems[i].val===t&&(this.selectItemIndex=i,this.transName=this.transItems[i].label,this.transModel=this.transItems[i].val,this.$emit("transMode",this.transModel))}}},o=(n(301),n(59)),l=n(70),c=n.n(l),d=n(404),f=n(405),v=n(406),h=n(194),m=n(195),_=n(117),y=n(197),x=n(116),w=n(403),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dark:""}},[n("v-container",{staticClass:"d-flex justify-end align-center",attrs:{fluid:""}},[t._l(t.navButtons,(function(e){return n("v-btn",{key:e.label,staticClass:"text-lowercase",attrs:{text:"","x-large":"",href:e.href},on:{click:function(n){return t.$emit("menu",e.label)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),t._v(" "),n("v-menu",{attrs:{rounded:"b-xl","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,o=e.on;return[n("v-btn",t._g(t._b({staticClass:"white--text text-capitalize",attrs:{text:""}},"v-btn",r,!1),o),[n("v-icon",{staticClass:"mr-3"},[t._v("mdi-translate")]),t._v(" "),n("div",{staticClass:"button-style"},[t._v(t._s(t.transName))]),t._v(" "),n("v-icon",{staticClass:"ml-3"},[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),n("v-list",{attrs:{shaped:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectItemIndex,callback:function(e){t.selectItemIndex=e},expression:"selectItemIndex"}},t._l(t.transItems,(function(e,i){return n("v-list-item",{key:i,attrs:{link:""},on:{click:function(n){return t.transModeName(e.val)}}},[n("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)})),1)],1)],1)],2)],1)}),[],!1,null,"979017f6",null);e.default=component.exports;c()(component,{VAppBar:d.a,VBtn:f.a,VContainer:v.a,VIcon:h.a,VList:m.a,VListItem:_.a,VListItemGroup:y.a,VListItemTitle:x.a,VMenu:w.a})},265:function(t,e,n){"use strict";n.r(e);var r={name:"SectionCard",props:{title:{type:String,required:!1,default:""},actionButtons:{type:Array,required:!0}}},o=(n(350),n(59)),l=n(70),c=n.n(l),d=n(405),f=n(196),v=n(87),h=n(398),m=n(194),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-flex flex-column",attrs:{absolute:""}},[n("v-card",{staticClass:"transparent",attrs:{tile:"",flat:""}},[n("v-card",{staticClass:"d-flex justify-center transparent",attrs:{tile:"",flat:""}},[n("v-card-title",[n("div",{staticClass:"title-style"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center",attrs:{color:"black",height:"10",width:"auto",flat:"",tile:""}}),t._v(" "),n("v-card",{staticClass:"my-10 transparent",attrs:{tile:"",flat:""}},[n("v-card-actions",{staticClass:"white--text pt-0"},t._l(t.actionButtons,(function(button){return n("div",{key:button.icon},[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",small:"",dark:"",href:button.href,target:"_blank"}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(button.icon))])],1)],1)})),0)],1),t._v(" "),n("v-card",{staticClass:"d-flex justify-center transparent",attrs:{tile:"",flat:""}},[n("v-card-text",{staticClass:"pt-0 text-center"},[n("strong",{staticClass:"text-body-2"},[t._v("\n          Copyright © "+t._s((new Date).getFullYear())+" Yusuke Miyakawa\n        ")])])],1)],1)],1)}),[],!1,null,"0176c4d8",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VFooter:h.a,VIcon:m.a})},270:function(t,e,n){n(271),t.exports=n(272)},295:function(t,e,n){"use strict";n(237)},296:function(t,e,n){var r=n(18)(!1);r.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=r},301:function(t,e,n){"use strict";n(239)},302:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap);"]),r.push([t.i,'p.button-style[data-v-979017f6]{font-family:"Noto Sans JP",sans-serif;font-weight:700;font-size:2.125rem}',""]),t.exports=r},350:function(t,e,n){"use strict";n(246)},351:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap);"]),r.push([t.i,'div.title-style[data-v-0176c4d8]{font-family:"Noto Sans JP",sans-serif;font-weight:700;font-size:2.125rem}',""]),t.exports=r},358:function(t,e,n){"use strict";n(247)},359:function(t,e,n){var r=n(18)(!1);r.push([t.i,".wrapper[data-v-6ae65384]{padding-bottom:260px}",""]),t.exports=r},85:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(295),n(59)),l=n(70),c=n.n(l),d=n(397),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[270,8,2,9]]]);