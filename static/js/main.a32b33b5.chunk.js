(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={login:"Login_login__3kx-W",control:"Login_control__2uWxY",invalid:"Login_invalid__2WiKD",actions:"Login_actions__1ZxJY"}},,,,function(e,t,n){e.exports={card:"Card_card__dp4pt"}},function(e,t,n){e.exports={button:"Button_button__kJ-Ek"}},function(e,t,n){e.exports={home:"Home_home__2b526"}},function(e,t,n){e.exports={nav:"Navigation_nav__1yogf"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__36IDr"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),o=n.n(i),l=(n(19),n(3)),s=n(6),r=n.n(s),u=n(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=n(2),b=n.n(j),g=Object(c.createContext)({isLoggedIn:!1}),h=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(u.jsx)(g.Provider,{value:{isLoggedIn:a,onLogout:function(){localStorage.removeItem("isLoggedIn"),i(!1)},onLogin:function(e,t){localStorage.setItem("isLoggedIn","1"),i(!0)}},children:e.children})},v=g,O=n(7),m=n.n(O),x=function(e){var t=Object(c.useContext)(v);return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(m.a.button," ").concat(e.className),onClick:t.onClick,disabled:e.disabled,children:e.children})},f=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:t.val.includes("@")}:"INPUT_BLUR"===t.type?{value:e.val,isValid:e.value.includes("@")}:e},p=function(e,t){return"INPUT_PASSWORD"===t.type?{value:t.val,isValid:t.val.trim().length>6}:"INVALID_PASSWORD"===t.type?{value:t.val,isValid:e.value.trim().length>6}:e},_=function(e){var t=Object(c.useContext)(v),n=Object(c.useState)(!1),a=Object(l.a)(n,2),i=a[0],o=a[1],s=Object(c.useReducer)(f,{value:"",isValid:!0}),r=Object(l.a)(s,2),j=r[0],g=r[1],h=Object(c.useReducer)(p,{value:"",isValid:!0}),O=Object(l.a)(h,2),m=O[0],_=O[1];j.isValid;Object(c.useEffect)((function(){return console.log("EFFECT RUNNING"),function(){console.log("EFFECT CLEANUP")}}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){console.log("Checking form validity!"),o(j.value.includes("@")&&m.value.trim().length>6)}),500);return function(){console.log("CLEANUP"),clearTimeout(e)}}),[j.isValid,m.isValid]);return Object(u.jsx)(d,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onLogin(j.value,m.value)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===j.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:j.value,onChange:function(e){g({type:"USER_INPUT",val:e.target.value}),o(e.target.value.includes("@")&&m.value.trim().length>6)},onBlur:function(){g({type:"INPUT_BLUR"})}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===m.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:m.value,onChange:function(e){_({type:"INPUT_PASSWORD",val:e.target.value}),o(j.isValid&&e.target.value.trim().length>6)},onBlur:function(){_({type:"INVALID_PASSWORD"})}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(x,{type:"submit",className:b.a.btn,disabled:!i,children:"Login"})})]})})},N=n(8),I=n.n(N),L=function(e){return Object(u.jsx)(d,{className:I.a.home,children:Object(u.jsx)("h1",{children:"Welcome back!"})})},y=n(9),C=n.n(y),S=function(){return Object(u.jsx)(v.Consumer,{children:function(e){return Object(u.jsx)("nav",{className:C.a.nav,children:Object(u.jsxs)("ul",{children:[e&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})}})},P=n(10),E=n.n(P),U=function(){return Object(u.jsxs)("header",{className:E.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(S,{})]})};var V=function(){var e=Object(c.useContext)(v);return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(U,{}),Object(u.jsxs)("main",{children:[!e.isLoggedIn&&Object(u.jsx)(_,{}),e.isLoggedIn&&Object(u.jsx)(L,{})]})]})};o.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(h,{children:Object(u.jsx)(V,{})}))}],[[21,1,2]]]);
//# sourceMappingURL=main.a32b33b5.chunk.js.map