import{a as x,Q as R,b as Z}from"./QItem-BwMnUleo.js";import{b as xe,u as Te,a as De,Q as ee}from"./QList-DXTxxY6f.js";import{t as j,c as u,k as g,l as K,a6 as Ae,g as de,r as p,a3 as Oe,V as Ee,w as O,a7 as Ie,a8 as Qe,T as Ue,b as Fe,s as Me,a4 as He,a as fe,Q as Le,u as Re,a9 as Ve,aa as je,A as Ke,_ as $e,B as m,C as T,D as S,E as f,G as c,M as D,S as te,R as k,I as oe,J as ne,K as Ne,L as We,H as A}from"./index-DJ_WzErL.js";import{n as he,g as ze,a as V}from"./QBtn-Dn4_BT9M.js";import{h as Ge,u as Je,b as ge,v as ae,i as Xe,c as Ye,d as Ze,j as et,k as tt,f as ot,e as nt,p as se,r as le,l as at,s as st,m as lt,n as rt,o as it,g as re,Q as ut,a as ct}from"./axios-DeiWpJaL.js";import{b as dt,r as ft,a as ie,c as ht}from"./focusout-DELA8suR.js";import{u as gt}from"./use-id-B9KL2PST.js";const vt=j({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=u(()=>{const s=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${s.length!==0?" "+s:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>g("div",{class:n.value},K(t.default))}}),mt=j({name:"QMenu",inheritAttrs:!1,props:{...Ge,...Je,...xe,...ge,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ae},self:{type:String,validator:ae},offset:{type:Array,validator:Xe},scrollTarget:Ae,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ye,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:s}){let l=null,i,r,b;const P=de(),{proxy:y}=P,{$q:d}=y,h=p(null),v=p(!1),E=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),I=Te(e,d),{registerTick:Q,removeTick:U}=Oe(),{registerTimeout:q}=Ee(),{transitionProps:C,transitionStyle:w}=Ze(e),{localScrollTarget:a,changeScrollEvent:ve,unconfigureScrollTarget:me}=et(e,X),{anchorEl:B,canShow:be}=tt({showing:v}),{hide:$}=ot({showing:v,canShow:be,handleShow:ke,handleHide:Se,hideOnRouteChange:E,processOnMount:!0}),{showPortal:N,hidePortal:W,renderPortal:ye}=nt(P,h,Pe,"menu"),F={anchorEl:B,innerRef:h,onClickOutside(o){if(e.persistent!==!0&&v.value===!0)return $(o),(o.type==="touchstart"||o.target.classList.contains("q-dialog__backdrop"))&&Me(o),!0}},z=u(()=>se(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),we=u(()=>e.cover===!0?z.value:se(e.self||"top start",d.lang.rtl)),Be=u(()=>(e.square===!0?" q-menu--square":"")+(I.value===!0?" q-menu--dark q-dark":"")),_e=u(()=>e.autoClose===!0?{onClick:pe}:{}),G=u(()=>v.value===!0&&e.persistent!==!0);O(G,o=>{o===!0?(ht(H),lt(F)):(ie(H),le(F))});function M(){De(()=>{let o=h.value;o&&o.contains(document.activeElement)!==!0&&(o=o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function ke(o){if(l=e.noRefocus===!1?document.activeElement:null,dt(Y),N(),X(),i=void 0,o!==void 0&&(e.touchPosition||e.contextMenu)){const L=Ie(o);if(L.left!==void 0){const{top:qe,left:Ce}=B.value.getBoundingClientRect();i={left:L.left-Ce,top:L.top-qe}}}r===void 0&&(r=O(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,_)),e.noFocus!==!0&&document.activeElement.blur(),Q(()=>{_(),e.noFocus!==!0&&M()}),q(()=>{d.platform.is.ios===!0&&(b=e.autoClose,h.value.click()),_(),N(!0),n("show",o)},e.transitionDuration)}function Se(o){U(),W(),J(!0),l!==null&&(o===void 0||o.qClickOutside!==!0)&&(((o&&o.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),q(()=>{W(!0),n("hide",o)},e.transitionDuration)}function J(o){i=void 0,r!==void 0&&(r(),r=void 0),(o===!0||v.value===!0)&&(ft(Y),me(),le(F),ie(H)),o!==!0&&(l=null)}function X(){(B.value!==null||e.scrollTarget!==void 0)&&(a.value=Qe(B.value,e.scrollTarget),ve(a.value,_))}function pe(o){b!==!0?(at(y,o),n("click",o)):b=!1}function Y(o){G.value===!0&&e.noFocus!==!0&&He(h.value,o.target)!==!0&&M()}function H(o){n("escapeKey"),$(o)}function _(){st({targetEl:h.value,offset:e.offset,anchorEl:B.value,anchorOrigin:z.value,selfOrigin:we.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Pe(){return g(Ue,C.value,()=>v.value===!0?g("div",{role:"menu",...s,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+Be.value,s.class],style:[s.style,w.value],..._e.value},K(t.default)):null)}return Fe(J),Object.assign(y,{focus:M,updatePosition:_}),ye}}),bt=Object.keys(he);function yt(e){return bt.reduce((t,n)=>{const s=e[n];return s!==void 0&&(t[n]=s),t},{})}const wt=j({name:"QBtnDropdown",props:{...he,...ge,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:s}=de(),l=p(e.modelValue),i=p(null),r=gt(),b=u(()=>{const a={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r.value,"aria-label":e.toggleAriaLabel||s.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(a["aria-disabled"]="true"),a}),P=u(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),y=u(()=>ze(e)),d=u(()=>yt(e));O(()=>e.modelValue,a=>{i.value!==null&&i.value[a?"show":"hide"]()}),O(()=>e.split,w);function h(a){l.value=!0,n("beforeShow",a)}function v(a){n("show",a),n("update:modelValue",!0)}function E(a){l.value=!1,n("beforeHide",a)}function I(a){n("hide",a),n("update:modelValue",!1)}function Q(a){n("click",a)}function U(a){Re(a),w(),n("click",a)}function q(a){i.value!==null&&i.value.toggle(a)}function C(a){i.value!==null&&i.value.show(a)}function w(a){i.value!==null&&i.value.hide(a)}return Object.assign(s,{show:C,hide:w,toggle:q}),fe(()=>{e.modelValue===!0&&C()}),()=>{const a=[g(Le,{class:P.value,name:e.dropdownIcon||s.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&a.push(g(mt,{ref:i,id:r.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:h,onShow:v,onBeforeHide:E,onHide:I},t.default)),e.split===!1?g(V,{class:"q-btn-dropdown q-btn-dropdown--simple",...d.value,...b.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:Q},{default:()=>K(t.label,[]).concat(a),loading:t.loading}):g(vt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...y.value,glossy:e.glossy,stretch:e.stretch},()=>[g(V,{class:"q-btn-dropdown--current",...d.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:U},{default:t.label,loading:t.loading}),g(V,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...b.value,...y.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>a)])}}});function ue(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const ce=Ve({name:"close-popup",beforeMount(e,{value:t}){const n={depth:ue(t),handler(s){n.depth!==0&&setTimeout(()=>{const l=rt(e);l!==void 0&&it(l,s,n.depth)})},handlerKey(s){je(s,13)===!0&&n.handler(s)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=ue(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}),Bt=Ke("posts",{state:()=>({posts:[],users:[],loading:!1,selectedUser:""}),getters:{filteredPosts:e=>e.posts},actions:{fetchUsers(){re.get("https://jsonplaceholder.typicode.com/users").then(e=>{this.users=e.data}).catch(e=>{console.error("Error fetching users:",e)})},applyFilter(e){this.loading=!0,this.selectedUser=e,setTimeout(()=>{re.get(`https://jsonplaceholder.typicode.com/posts?userId=${e}`).then(t=>{this.posts=t.data,this.loading=!1}).catch(t=>{console.error("Error fetching posts:",t),this.loading=!1})},1e3)},getUser(e){return this.users.find(t=>t.id===e)||{}}}}),_t={name:"Post",setup(){const e=Bt(),t=p("");fe(()=>{e.fetchUsers()});const n=l=>{t.value=l,s()},s=()=>{e.applyFilter(t.value)};return{selectedUser:t,users:u(()=>e.users),posts:u(()=>e.posts),filteredPosts:u(()=>e.filteredPosts),loading:u(()=>e.loading),applyFilter:s,getUser:e.getUser,selectUser:n}}},kt=e=>(Ne("data-v-3d06072b"),e=e(),We(),e),St=kt(()=>S("h1",null,"POST",-1)),pt={class:"nj"},Pt={class:"content-container"},qt={key:0,class:"spinner-container"};function Ct(e,t,n,s,l,i){return m(),T("div",null,[St,S("div",pt,[f(wt,{id:"userFilter",color:"dark",label:"User","dropdown-icon":"change_history"},{default:c(()=>[f(ee,null,{default:c(()=>[te((m(),D(R,{clickable:"",onClick:t[0]||(t[0]=r=>s.selectUser(""))},{default:c(()=>[f(x,null,{default:c(()=>[k(" All Users ")]),_:1})]),_:1})),[[ce]]),(m(!0),T(oe,null,ne(s.users,r=>te((m(),D(R,{key:r.id,clickable:"",onClick:b=>s.selectUser(r.id)},{default:c(()=>[f(x,null,{default:c(()=>[k(A(r.name),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[ce]])),128))]),_:1})]),_:1})]),S("div",Pt,[s.loading?(m(),T("div",qt,[f(ct,{color:"dark",size:"3em"}),f(ut,{offset:[0,8]},{default:c(()=>[k("Loading...")]),_:1})])):(m(),D(ee,{key:1,bordered:"",separator:""},{default:c(()=>[(m(!0),T(oe,null,ne(s.filteredPosts,r=>(m(),D(R,{clickable:"",key:r.id},{default:c(()=>[f(x,null,{default:c(()=>[f(x,{header:""},{default:c(()=>[k(A(r.title),1)]),_:2},1024),f(Z,{caption:""},{default:c(()=>[k(A(r.body),1)]),_:2},1024),f(Z,{overline:""},{default:c(()=>[S("p",null,[S("strong",null,"User: "+A(s.getUser(r.userId).name),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))])])}const Qt=$e(_t,[["render",Ct],["__scopeId","data-v-3d06072b"]]);export{Qt as default};