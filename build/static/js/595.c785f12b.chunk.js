"use strict";(self.webpackChunkbharat_re_admin=self.webpackChunkbharat_re_admin||[]).push([[595],{722:function(e,t,r){r.d(t,{sZ:function(){return u},DJ:function(){return l},Nv:function(){return c},lE:function(){return d}});var n=r(4569),a=r.n(n),i=r(1927),o=a().create({headers:{Authorization:"Bearer "+function(){var e=i.O.user();return e&&(null===e||void 0===e?void 0:e.accessToken)||""}()}}),s=r(3294),l=function(e){var t={email:null===e||void 0===e?void 0:e.keyUser,password:null===e||void 0===e?void 0:e.keyPassword};return o.post(s.H.api.accounts.login,t)},d=function(e){var t="".concat(s.H.api.accounts.joinMeList);return o.get(t)},c=function(e){var t="".concat(s.H.api.accounts.insightList);return o.get(t)},u=function(e){return o.post(s.H.api.accounts.addCity,e)}},595:function(e,t,r){r.r(t),r.d(t,{default:function(){return V}});var n=r(4942),a=r(1413),i=r(885),o=r(2791),s=r(6871),l=r(3294),d=r(3366),c=r(7462),u=r(8182),p=r(4419),h=r(4036),v=r(8519),m=r(5255),g=r(1046),y=r(7225),f=r(5878);function b(e){return(0,y.Z)("MuiTypography",e)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var Z=r(184),w=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,m.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t["align".concat((0,h.Z)(r.align))],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((function(e){var t=e.theme,r=e.ownerState;return(0,c.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),j={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},P={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=o.forwardRef((function(e,t){var r=(0,g.Z)({props:e,name:"MuiTypography"}),n=function(e){return P[e]||e}(r.color),a=(0,v.Z)((0,c.Z)({},r,{color:n})),i=a.align,o=void 0===i?"inherit":i,s=a.className,l=a.component,m=a.gutterBottom,y=void 0!==m&&m,f=a.noWrap,k=void 0!==f&&f,S=a.paragraph,E=void 0!==S&&S,N=a.variant,M=void 0===N?"body1":N,z=a.variantMapping,B=void 0===z?j:z,C=(0,d.Z)(a,w),L=(0,c.Z)({},a,{align:o,color:n,className:s,component:l,gutterBottom:y,noWrap:k,paragraph:E,variant:M,variantMapping:B}),R=l||(E?"p":B[M]||j[M])||"span",W=function(e){var t=e.align,r=e.gutterBottom,n=e.noWrap,a=e.paragraph,i=e.variant,o=e.classes,s={root:["root",i,"inherit"!==e.align&&"align".concat((0,h.Z)(t)),r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,p.Z)(s,b,o)}(L);return(0,Z.jsx)(x,(0,c.Z)({as:R,ref:t,ownerState:L,className:(0,u.Z)(W.root,s)},C))})),S=r(3840),E=r(2930);function N(e){return(0,y.Z)("MuiInputAdornment",e)}var M,z=(0,f.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),B=["children","className","component","disablePointerEvents","disableTypography","position","variant"],C=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["position".concat((0,h.Z)(r.position))],!0===r.disablePointerEvents&&t.disablePointerEvents,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,c.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===r.variant&&(0,n.Z)({},"&.".concat(z.positionStart,"&:not(.").concat(z.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),L=o.forwardRef((function(e,t){var r=(0,g.Z)({props:e,name:"MuiInputAdornment"}),n=r.children,a=r.className,i=r.component,s=void 0===i?"div":i,l=r.disablePointerEvents,v=void 0!==l&&l,m=r.disableTypography,y=void 0!==m&&m,f=r.position,b=r.variant,w=(0,d.Z)(r,B),x=(0,E.Z)()||{},j=b;b&&x.variant,x&&!j&&(j=x.variant);var P=(0,c.Z)({},r,{hiddenLabel:x.hiddenLabel,size:x.size,disablePointerEvents:v,position:f,variant:j}),z=function(e){var t=e.classes,r=e.disablePointerEvents,n=e.hiddenLabel,a=e.position,i=e.size,o=e.variant,s={root:["root",r&&"disablePointerEvents",a&&"position".concat((0,h.Z)(a)),o,n&&"hiddenLabel",i&&"size".concat((0,h.Z)(i))]};return(0,p.Z)(s,N,t)}(P);return(0,Z.jsx)(S.Z.Provider,{value:null,children:(0,Z.jsx)(C,(0,c.Z)({as:s,ownerState:P,className:(0,u.Z)(z.root,a),ref:t},w,{children:"string"!==typeof n||y?(0,Z.jsxs)(o.Fragment,{children:["start"===f?M||(M=(0,Z.jsx)("span",{className:"notranslate",children:"\u200b"})):null,n]}):(0,Z.jsx)(k,{color:"text.secondary",children:n})}))})})),R=r(6362),W=r(8029),O=r(7071),U=r(3400),T=r(9201),A=(0,T.Z)((0,Z.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),I=(0,T.Z)((0,Z.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),H=r(8588),K=r(9962),F=r(722),_=r(1927),J=r(7939),D=r(9807);function V(){var e=(0,s.s0)(),t=(0,K.K1)(),r=(0,i.Z)(t,2),d=(r[0].user,r[1]),c=(0,o.useState)(!1),u=(0,i.Z)(c,2),p=u[0],h=u[1],v=(0,o.useState)({keyUser:"",keyPassword:"",showKeyPassword:!1}),m=(0,i.Z)(v,2),g=m[0],y=m[1],f=(0,o.useState)(""),b=(0,i.Z)(f,2),w=(b[0],b[1],{keyUser:{error:!1,message:""},keyPassword:{error:!1,message:""}}),x=(0,o.useState)(w),j=(0,i.Z)(x,2),P=j[0],k=j[1],S=function(e,t){y((0,a.Z)((0,a.Z)({},g),{},(0,n.Z)({},e,t)))};return(0,o.useEffect)((function(){if(_.O.user())return e(l.H.accounts.myCity),function(){}}),[e]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:"text-white",children:[(0,Z.jsx)("div",{className:"text-center mb-3 bg-white rounded--2",children:(0,Z.jsx)("img",{src:D,alt:"bharatRe",style:{width:"160px"}})}),(0,Z.jsxs)("form",{method:"post",onSubmit:function(t){t.preventDefault(),h(!0);var r=Object.assign({},w),n=!0;if(g.keyUser||(r.keyUser.error=!0,r.keyUser.message="Required Field",n=!1),g.keyPassword||(r.keyPassword.error=!0,r.keyPassword.message="Required Field",n=!1),!n)return h(!1),void k(r);(0,F.DJ)(g).then((function(t){if(console.log(t),200===(null===t||void 0===t?void 0:t.status)){localStorage.setItem("temp",J.U.encode(JSON.stringify(t.data)));var r=_.O.user();d({type:"SET_USER",user:r}),e(l.H.accounts.myCity)}})).catch((function(e){if(400===e.response.status){var t=Object.assign({},w);if(Object.entries){var r=e.response.data.error;Object.entries(r).forEach((function(e){var r=(0,i.Z)(e,2),n=r[0],a=r[1];t[n].error=!0,t[n].message=a})),k(t)}}})).finally((function(){h(!1)}))},noValidate:!0,children:[(0,Z.jsxs)("div",{className:"mb-3",children:[(0,Z.jsx)("div",{children:"Email"}),(0,Z.jsxs)(R.Z,{fullWidth:!0,variant:"outlined",error:P.keyUser.error,children:[(0,Z.jsx)(W.Z,{className:"bg-white",label:" ",placeholder:"Enter Email Address",notched:!1,type:"email",onChange:function(e){return S("keyUser",e.target.value)}}),(0,Z.jsx)(O.Z,{id:"my-helper-text",children:P.keyUser.message})]})]}),(0,Z.jsxs)("div",{className:"mb-3",children:[(0,Z.jsx)("div",{children:"Password"}),(0,Z.jsxs)(R.Z,{fullWidth:!0,variant:"outlined",error:P.keyPassword.error,children:[(0,Z.jsx)(W.Z,{className:"bg-white",label:" ",placeholder:"Enter Password",notched:!1,type:g.showKeyPassword?"text":"password",onChange:function(e){return S("keyPassword",e.target.value)},endAdornment:(0,Z.jsx)(L,{position:"end",children:(0,Z.jsx)(U.Z,{"aria-label":"toggle password visibility",onClick:function(){return S("showKeyPassword",!g.showKeyPassword)},edge:"end",children:g.showKeyPassword?(0,Z.jsx)(A,{}):(0,Z.jsx)(I,{})})})}),(0,Z.jsx)(O.Z,{id:"my-helper-text",children:P.keyPassword.message})]})]}),(0,Z.jsx)("div",{className:"mt-5",children:(0,Z.jsx)(H.Z,{className:"rounded--2",type:"submit",color:"secondary",variant:"contained",loadingPosition:"end",endIcon:(0,Z.jsx)(Z.Fragment,{}),loading:p,fullWidth:!0,size:"large",children:"LOGIN"})})]})]})})}},9807:function(e,t,r){e.exports=r.p+"static/media/myweather.1eada1bcd33a7128e195.png"}}]);
//# sourceMappingURL=595.c785f12b.chunk.js.map