(this.webpackJsonpkando=this.webpackJsonpkando||[]).push([[7],{146:function(e,a,t){e.exports=t.p+"static/media/blurbg.92c323aa.jpg"},419:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(92),l=t(11),o=t(422),i=t(423),s=t(409),m=t(424),u=t(413),d=t(418),E=t(426),f=t(151),g=t(1),b=t(18),p=t(23),h=t(12),_=t(404),v=t(6),j=o.a.Types.StringType,k=o.a.Model({name:j().isRequired(v.a.t("validator:isRequired")),password:j().isRequired(v.a.t("validator:isRequired"))});var w=function(){var e=Object(g.g)(),a=Object(g.h)(),t=Object(h.d)(),r=Object(_.a)("signin").t,o=(a.state||{from:{pathname:"/"}}).from,v=Object(n.useRef)(),j=Object(n.useState)({name:"",password:""}),w=Object(l.a)(j,2),O=w[0],N=w[1],y=Object(n.useState)(null),C=Object(l.a)(y,2),I=C[0],z=C[1];return c.a.createElement(i.a,{className:"login_form",fluid:!0,ref:v,onSubmit:function(){z(null),v.current.checkAsync().then((function(a){a.hasError||Object(p.d)(O.name,O.password).then((function(a){Object(h.b)(t,a),e.replace(o)})).catch(z)}))},model:k,onChange:N},c.a.createElement("h3",{className:"mb-4"},r("authorization")),c.a.createElement(s.a,null,c.a.createElement(m.a,null,r("login")),c.a.createElement(u.a,{name:"name"})),c.a.createElement(s.a,null,c.a.createElement(m.a,null,r("password")),c.a.createElement(u.a,{name:"password",type:"password"})),I&&c.a.createElement(s.a,null,c.a.createElement(d.a,{type:"error",description:I.message})),c.a.createElement(s.a,null,c.a.createElement(E.a,{className:"d-flex"},c.a.createElement(f.a,{onClick:function(){e.replace(o)}},r("back")),c.a.createElement(f.a,{type:"submit",className:"ml-auto",appearance:"primary"},r("signin")))),c.a.createElement("span",null,r("dont have an account?"))," ",c.a.createElement(b.b,{className:"default",to:{pathname:"/register",state:a.state}},r("create account")))},O=t(146),N=t.n(O);a.default=function(){return c.a.createElement(r.a,{withHeader:!0},c.a.createElement("div",{className:"login_page"},c.a.createElement("img",{src:N.a,alt:"",className:"login_page__bg"}),c.a.createElement("div",{className:"login_form__wrapper rsuite_default_theme"},c.a.createElement(w,null))))}},64:function(e,a,t){"use strict";var n=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e&&e.trim().length})).join(" ")};a.a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.className,t=void 0===a?"":a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length,l=new Array(r>2?r-2:0),o=2;o<r;o++)l[o-2]=arguments[o];return n.apply(void 0,[t,c].concat(l))}},68:function(e,a,t){"use strict";var n=t(0);a.a=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];Object(n.useEffect)((function(){return a.forEach((function(e){document.body.classList.add(e)})),function(){a.forEach((function(e){document.body.classList.remove(e)}))}}))}},69:function(e,a,t){"use strict";var n=t(60);a.a=function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),c=1;c<a;c++)t[c-1]=arguments[c];return[e].concat(Object(n.a)(t.filter((function(e){return!!e})).map((function(a){return"".concat(e,"-").concat(a)})))).join(" ")}},70:function(e,a,t){"use strict";var n=t(11),c=t(65),r=t(0),l=t.n(r),o=t(64),i=t(410),s=t(426),m=t(402),u=t(149),d=t(415),E=t(151),f=t(425),g=t(411),b=t(1),p=t(18),h=t(73),_=t.n(h),v=t(20),j=t(12),k=t(404),w=[{code:"ru",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{code:"kk",name:"\u049a\u0430\u0437\u0430\u049b\u0448\u0430"},{code:"en",name:"English"}];var O=function(){window.location.reload()};a.a=function(e){var a=e.stickyTransparent,t=Object(c.a)(e,["stickyTransparent"]),h=Object(k.a)("translation"),N=h.t,y=h.i18n,C=Object(r.useState)(!1),I=Object(n.a)(C,2),z=I[0],x=I[1],L=Object(b.h)(),A=Object(v.b)(),S=Object(j.d)(),T=Object(r.useState)(!1),R=Object(n.a)(T,2),q=R[0],H=R[1];Object(r.useEffect)((function(){function e(){x(window.scrollY<10&&a)}return a&&(e(),window.addEventListener("scroll",e),window.addEventListener("resize",e)),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}),[a]);var F=Object(r.useCallback)((function(){Object(j.c)(S)}),[S]),J=Object(r.useMemo)((function(){var e;return null===(e=w.find((function(e){var a=e.code;return y.language===a})))||void 0===e?void 0:e.name}),[y.language]);return l.a.createElement(l.a.Fragment,null,!a&&l.a.createElement("div",{className:"header__margin"}),l.a.createElement("header",{className:Object(o.a)(t,"header",z?"header-transparent":"")},l.a.createElement("div",{className:"header__container container"},l.a.createElement("div",{className:"header__sidebar_toggle"}),l.a.createElement(p.b,{to:"/",className:"link_inherit header__logo"},l.a.createElement("img",{src:_.a,alt:"",className:"header__logo_image"}),l.a.createElement("span",{className:"header__logo_text"},"KANDO")),l.a.createElement("div",{className:"header__desktop header__nav rsuite_dark_theme mx-auto"},l.a.createElement(i.a,null,l.a.createElement(i.a.Item,{componentClass:p.b,to:"/"},N("home")),l.a.createElement(i.a.Item,{componentClass:p.b},N("categories")),l.a.createElement(i.a.Item,{componentClass:p.b,to:"/about"},N("about")))),l.a.createElement("div",{className:"header__desktop header__sign_in ml-4 rsuite_dark_theme"},l.a.createElement(s.a,{className:"d-flex"},l.a.createElement(m.a,{size:"lg",icon:l.a.createElement(u.a,{icon:"search"}),appearance:"subtle"}),l.a.createElement(d.a,{trigger:["hover","click"],placement:"bottomEnd",renderTitle:function(){return l.a.createElement(m.a,{size:"lg",icon:l.a.createElement(u.a,{icon:"globe2"}),appearance:"subtle"})}},w.map((function(e){var a=e.code,t=e.name;return l.a.createElement(d.a.Item,{key:a,onClick:function(){return y.changeLanguage(a).then(O)}},t," ",y.language===a&&l.a.createElement(u.a,{icon:"check",className:"ml-2"}))}))),A?l.a.createElement(d.a,{trigger:["hover","click"],placement:"bottomEnd",renderTitle:function(){return l.a.createElement(f.a,{className:"ml-1",circle:!0,src:A.avatar})}},l.a.createElement(d.a.Item,{componentClass:E.a,onClick:F},l.a.createElement(u.a,{icon:"sign-out"})," ",N("logout"))):l.a.createElement(E.a,{to:{pathname:"/login",state:{from:L}},componentClass:p.b,size:"lg",appearance:"subtle"},N("login")))),l.a.createElement("div",{className:"header__mobile ml-auto"},l.a.createElement(m.a,{size:"lg",appearance:"subtle",icon:l.a.createElement(u.a,{icon:"bars",size:"lg"}),onClick:function(){return H(!0)}}))),l.a.createElement(g.a,{size:"xs",backdropClassName:"drawer__backdrop-dark",full:!0,className:"header__drawer rsuite_dark_theme",show:q,onHide:function(){return H(!1)}},l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(m.a,{size:"lg",icon:l.a.createElement(u.a,{icon:"close"}),onClick:function(){return H(!1)}})),l.a.createElement(i.a,{vertical:!0},l.a.createElement(i.a.Item,{componentClass:p.b,to:"/"},N("home")),l.a.createElement(i.a.Item,{componentClass:p.b},N("categories")),l.a.createElement(i.a.Item,{componentClass:p.b,to:"/about"},N("about"))),l.a.createElement(i.a,{vertical:!0,className:"mt-5"},l.a.createElement(i.a.Item,null,l.a.createElement(u.a,{icon:"search"})," ",N("search")),l.a.createElement(d.a,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{icon:"globe2"})," ",J)},w.map((function(e){var a=e.code,t=e.name;return l.a.createElement(d.a.Item,{key:a,onClick:function(){return y.changeLanguage(a).then(O)}},t," ",y.language===a&&l.a.createElement(u.a,{icon:"check",className:"ml-2"}))}))),!A&&l.a.createElement(i.a.Item,{componentClass:p.b,to:"/login"},l.a.createElement(u.a,{icon:"sign-in"})," ",N("login")),A&&l.a.createElement(i.a.Item,{onClick:F},l.a.createElement(u.a,{icon:"sign-out"})," ",N("logout"))))))}},72:function(e,a,t){"use strict";var n=t(60),c=t(69);a.a=function(e,a){return c.a.apply(void 0,[e].concat(Object(n.a)(Object.keys(a).filter((function(e){return a[e]})))))}},73:function(e,a,t){e.exports=t.p+"static/media/naruto.001be13c.svg"},92:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(70),l=t(68),o=t(72);a.a=function(e){var a=e.withHeader,t=e.children;return Object(l.a)("full_screen_layout"),c.a.createElement("div",{className:"full_screen_layout__wrapper"},a&&c.a.createElement(r.a,null),c.a.createElement("div",{className:Object(o.a)("full_screen_layout__content",{with_header:a})},t))}}}]);
//# sourceMappingURL=7.7b62efd5.chunk.js.map