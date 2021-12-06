"use strict";(self.webpackChunkappworks_fusion_design_pro=self.webpackChunkappworks_fusion_design_pro||[]).push([[817],{97026:function(e,t,n){var r=n(88239),a=n(99663),l=n(49135),o=n(93196),c=n(67294),i=n(45697),s=n.n(i),p=n(94184),u=n.n(p),m=n(46871),d=n(70408),f=n(81183),v,g,h=(g=v=function(e){function t(){return(0,a.Z)(this,t),(0,l.Z)(this,e.apply(this,arguments))}return(0,o.Z)(t,e),t.prototype.render=function e(){var n,a=this.props,l=a.prefix,o=a.className,i=a.dashed,s=a.direction,p=a.orientation,m=a.children,d=f.j6.pickOthers(t.propTypes,this.props),v=u()(((n={})[l+"divider"]=!0,n[l+"divider-dashed"]=!!i,n[l+"divider-"+s]=!!s,n[l+"divider-with-text-"+p]=!!p&&m,n),o);return c.createElement("div",(0,r.Z)({role:"separator",className:v},d),m&&c.createElement("span",{className:l+"divider-inner-text"},m))},t}(c.Component),v.propTypes={prefix:s().string,children:s().any,className:s().string,dashed:s().bool,direction:s().oneOf(["hoz","ver"]),orientation:s().oneOf(["left","right","center"])},v.defaultProps={prefix:"next-",direction:"hoz",orientation:"center",dashed:!1},g);h.displayName="Divider",t.Z=d.Z.config((0,m.polyfill)(h))},58817:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(67294),a=n(76449),l=n(40683),o=n(72068),c=n(31568),i=n(80655),s=n(16404),p=n(77431),u=n(337),m=n(4035),d=n(97026),f=n(30411),v="SettingPersonBlock--settingPersonBlock--2mQwhWZ",g="SettingPersonBlock--uploadButton--1kwC073",h="SettingPersonBlock--changeLogo--okSD-cL",E="SettingPersonBlock--validateCodeInput--1avfjhp",y="SettingPersonBlock--validateCodeButton--1VHBQBy";function b(e,t){return w(e)||O(e,t)||S(e,t)||Z()}function Z(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,o,c;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){l=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw c}}return r}}function w(e){if(Array.isArray(e))return e}var N=r.useState,x=a.Z.Cell,P=o.Z.Item,C={name:"\u963f\u91cc-Amy"},j=function e(t,n){n?console.log("errors",n):(console.log("values:",t),c.Z.success("\u66f4\u65b0\u6210\u529f"))},B,I=function e(t){var n=t.dataSource,l=void 0===n?C:n,c=t.onSubmit,Z=void 0===c?j:c,S,k=b(N(l),2),O=k[0],w=k[1],B,I=b(N("\u53d1\u9001\u9a8c\u8bc1\u7801"),2),A=I[0],H=I[1],_,T=b(N(!1),2),q=T[0],z=T[1],D=function e(t){w(t)},V,L=60,M=function e(){z(!0),H("".concat(L=60,"s")),V=setInterval((function(){if(--L<=0)return V&&clearInterval(V),H("\u83b7\u53d6\u9a8c\u8bc1\u7801"),void z(!1);H("".concat(L,"s"))}),1e3)};return r.createElement(i.Z,{free:!0},r.createElement(i.Z.Content,{className:v},r.createElement(o.Z,{value:O,labelAlign:"top",onChange:D,responsive:!0},r.createElement(P,{label:"",colSpan:12},r.createElement(a.Z,{gap:10},r.createElement(x,{colSpan:2},r.createElement(s.Z,{shape:"circle",size:64,icon:"account"})),r.createElement(x,{colSpan:10,className:h},r.createElement(p.Z,{spacing:12},r.createElement(P,null,r.createElement(u.Z,{name:"pic"},r.createElement(m.Z,{className:g,type:"normal"},"\u66f4\u65b0\u5934\u50cf"))),r.createElement(p.Z,null,r.createElement("p",null,"* \u5934\u50cf\u5c3d\u91cf\u4e0a\u4f20\u8d85\u8fc7 80px*80px, \u4f46\u4e0d\u8981\u592a\u5927\u4e86\u3002"),r.createElement("p",null,"* \u8bf7\u4e0a\u4f20\u4e24\u500d\u56fe\u4fdd\u8bc1\u6e05\u6670\u5ea6")))))),r.createElement(P,{colSpan:12},r.createElement(d.Z,null)),r.createElement(P,{label:"\u6635\u79f0",required:!0,requiredMessage:"\u5fc5\u586b",colSpan:12},r.createElement(f.Z,{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0",name:"name"})),r.createElement(P,{label:"\u624b\u673a\uff1a",colSpan:12},r.createElement(a.Z,{gap:10,device:"desktop"},r.createElement(x,{colSpan:8},r.createElement(f.Z,{className:E,placeholder:"\u8bf7\u8f93\u5165\u624b\u673a",name:"phone"})),r.createElement(x,{colSpan:4},r.createElement(m.Z,{className:y,type:"secondary",disabled:q,onClick:M},A)))),r.createElement(P,{label:"\u9a8c\u8bc1\u7801",colSpan:12},r.createElement(f.Z,{placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",name:"vcode"})),r.createElement(P,{colSpan:12},r.createElement(p.Z,{spacing:8,direction:"row"},r.createElement(o.Z.Submit,{type:"primary",onClick:Z,validate:!0},"\u66f4\u65b0\u4fe1\u606f"))))))},A=a.Z.Cell,H,_,T,q=function e(){return r.createElement(a.Z,{gap:20},r.createElement(A,{colSpan:12},r.createElement(l.Z,{title:"\u4e2a\u4eba\u8bbe\u7f6e",breadcrumbs:[{name:"\u8bbe\u7f6e\u9875\u9762"},{name:"\u4e2a\u4eba\u8bbe\u7f6e"}]})),r.createElement(A,{colSpan:12},r.createElement(I,null)))}},40683:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(77431),l=n(65049),o=n(68621),c={pageHeader:"PageHeader--pageHeader--IvPvuqT",title:"PageHeader--title--3yDuSsx",description:"PageHeader--description--2J_BNVV"},i=["breadcrumbs","title","description"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n=u(e,t),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e,t){if(null==e)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}var m,d=function e(t){var n=t.breadcrumbs,u=t.title,m=t.description,d=p(t,i);return r.createElement(a.Z,s({spacing:8,className:c.pageHeader},d),n&&n.length>0?r.createElement(l.Z,{className:c.breadcrumbs,separator:" / "},n.map((function(e,t){return r.createElement(l.Z.Item,{key:t,link:e.path},e.name)}))):null,u&&r.createElement(o.Z.Text,{className:c.title},u),m&&r.createElement(o.Z.Text,{className:c.description},m))}}}]);