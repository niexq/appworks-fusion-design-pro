"use strict";(self.webpackChunkappworks_fusion_design_pro=self.webpackChunkappworks_fusion_design_pro||[]).push([[501],{2070:function(e,n,r){var t=r(88094),i=r(54733),o=r(2928),a=r(68713),s=r(14179),p=r(59301),c=r(68712),f=r.n(c),l=r(92691),u=r.n(l),d=r(42201),m=r(17276),g=r(37557),y,v,h=m.j6.pickOthers,b=function e(n,r){var t=r.spacing,i=r.direction,o=r.wrap,c=r.device,f=p.Children.toArray(n);return n?f.map((function(e,n){var r={};if(r=(0,g.nD)(t),!o){var c=[0===n,n===f.length-1],l="row"===i?["marginLeft","marginRight"]:["marginTop","marginBottom"];["marginTop","marginRight","marginBottom","marginLeft"].forEach((function(e){e in r&&-1===l.indexOf(e)&&(r[e]=0),l.forEach((function(e,n){e in r&&c[n]&&(r[e]=0)}))}))}if(p.isValidElement(e)){var u=e.props.margin,d=(0,g.mH)(u),m={};return["function","object"].indexOf((0,s.default)(e.type))>-1&&"responsive_grid"===e.type._typeMark&&(m=(0,g.ZP)((0,a.Z)({display:"grid"},e.props))),p.cloneElement(e,{style:(0,a.Z)({},r,d,m,e.props.style||{})})}return e})):null},w=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];return(0,a.Z)({},(0,g.ZP)((0,a.Z)({display:"flex"},r)),n)},x=function e(n,r){var t=w(n,r);return(0,g.Ss)(t)},k=function e(n,r){var t=w(n,r);return(0,g.ol)((0,a.Z)({},t,(0,g.P)(r.spacing)))},Z=function e(n,r){var t=w(n,r);return(0,g.Lj)(t)},O=(v=y=function(e){function n(){return(0,t.Z)(this,n),(0,i.Z)(this,e.apply(this,arguments))}return(0,o.Z)(n,e),n.prototype.render=function e(){var r,t=this.props,i=t.prefix,o=t.direction,s=t.justify,c=t.align,f=t.wrap,l=t.flex,d=t.spacing,m=t.padding,g=t.margin,y=t.style,v=t.className,O=t.children,T=t.device,j,E={direction:o,justify:s,align:c,wrap:f,flex:l,spacing:d,padding:m,margin:g},S=t.component,N=h(Object.keys(n.propTypes),this.props),_=w(y,E),A=b(O,{spacing:d,direction:o,wrap:f,device:T}),C=u()(((r={})[i+"box"]=!0,r),v);if(f&&d){var P=x(y,E),R=k(y,E),B=Z(y,E);return p.createElement(S,(0,a.Z)({style:P,className:C},N),p.createElement("div",{style:R},p.createElement("div",{style:B,className:i+"box"},A)))}return p.createElement(S,(0,a.Z)({style:_,className:C},N),A)},n}(p.Component),y.propTypes={prefix:f().string,style:f().object,className:f().any,flex:f().oneOfType([f().arrayOf(f().oneOfType([f().number,f().string])),f().number]),direction:f().oneOf(["row","column","row-reverse"]),wrap:f().bool,spacing:f().oneOfType([f().arrayOf(f().number),f().number]),margin:f().oneOfType([f().arrayOf(f().number),f().number]),padding:f().oneOfType([f().arrayOf(f().number),f().number]),justify:f().oneOf(["flex-start","center","flex-end","space-between","space-around"]),align:f().oneOf(["flex-start","center","flex-end","baseline","stretch"]),device:f().oneOf(["phone","tablet","desktop"]),component:f().string},y.defaultProps={prefix:"next-",direction:"column",wrap:!1,component:"div"},v);O.displayName="Box",n.Z=d.Z.config(O)},37557:function(e,n,r){r.d(n,{ZP:function(){return T},ol:function(){return x},Lj:function(){return k},Ss:function(){return w},nD:function(){return u},fT:function(){return Z},mH:function(){return l},P:function(){return m}});var t=r(14179),i=r(68713),o=r(17276),a=o.j6.isPlainObject;function s(e){if(!a(e))return e;var n={};return Object.keys(e).forEach((function(r){var t=e[r];void 0!==t&&(n[r]=t)})),n}function p(e,n){var r={};return Object.keys(e).forEach((function(t){t in n||(r[t]=e[t])})),r}var c=o.OB.ieVersion,f=function e(n){if(!Array.isArray(n))return{padding:n};var r,t={},i=void 0;return["paddingTop","paddingRight","paddingBottom","paddingLeft"].forEach((function(e,r){switch(n.length){case 1:i=n[0]||0;break;case 2:i=n[r]||n[r-2]||0;break;case 3:i=2===r?n[2]:n[r]||n[r-2]||0;break;default:i=n[r]||0}t[e]=i})),t},l=function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{isNegative:!1,half:!1},t=r.isNegative,i=r.half;if(!n)return{};var o=["marginTop","marginRight","marginBottom","marginLeft"],a={},s=1*(t?-1:1)*(i?.5:1),p=void 0;return o.forEach((function(e,r){if(Array.isArray(n))switch(n.length){case 1:p=s*(n[0]||0);break;case 2:p=s*(n[r]||n[r-2]||0);break;case 3:p=s*(2===r?n[2]:n[r]||n[r-2]||0);break;default:p=s*(n[r]||0)}else p=s*n;a[e]=p})),a},u=function e(n){return l(n,{half:!0})},d=function e(n){return l(n,{half:!0})},m=function e(n){return l(n,{isNegative:!0,half:!0})},g=function e(n){if(!Array.isArray(n))return{flex:n};var r=["flexGrow","flexShrink","flexBasis"],t={};return n.forEach((function(e,n){t[r[n]]=e})),t},y=function e(n){if(!Array.isArray(n))return{gap:n};var r=["rowGap","columnGap"],t={};return n.forEach((function(e,n){t[r[n]]=e})),t},v=function e(n){return isNaN(n)&&"string"!=typeof n?n:"repeat("+n+", minmax(0,1fr))"},h=["margin","marginTop","marginLeft","marginRight","marginBottom"],b=["flexDirection","flexWrap","alignContent","alignItems","display"],w=function e(n){var r={};return[].concat(b).forEach((function(e){r[e]=n[e]})),s(p(n,r))},x=function e(n){var r={};return h.forEach((function(e){r[e]=n[e]})),s((0,i.Z)({},r,{overflow:"hidden"}))},k=function e(n){var r={};return b.forEach((function(e){r[e]=n[e]})),s(r)},Z=function e(n,r,o){var a=n.row,p=void 0===a?"initial":a,f=n.col,l=void 0===f?"initial":f,u=n.rowSpan,d=void 0===u?1:u,m=n.colSpan,g=void 0===m?1:m,y=12,v="object"===(void 0===g?"undefined":(0,t.default)(g))&&"desktop"in g?g.desktop:g;["tablet","phone"].forEach((function(e){if(e===r)if("object"===(void 0===g?"undefined":(0,t.default)(g))&&r in g)v=g[r];else switch(e){case"tablet":y=8,v=g>5?8:g>2?4:2;break;case"phone":y=4,v=g>2?4:2}}));var h=o;Array.isArray(o)&&(h=o[1]);var b=!c||1===d&&1===g?{}:{display:"inline-block",width:h?"calc("+v/y*100+"% - "+h+"px)":v/y*100+"%"};return s((0,i.Z)({gridRowStart:p,gridRowEnd:"span "+d,gridColumnStart:l,gridColumnEnd:"span "+v},b))},O=function e(n){var r=n.alignSelf,t=n.flex;return s((0,i.Z)({alignSelf:r},g(t)))},T=function(e){var n=e.device,r=e.display,t=e.gap,o=e.direction,a=e.dense,p=e.rowSpan,c=e.colSpan,u=e.row,d=e.col,m=e.rows,g=e.columns,h=e.justify,b=e.align,w=e.alignSelf,x=e.wrap,k=e.flex,T=e.padding,j=e.margin,E=(0,i.Z)({},f(T)),S="auto";switch(n){case"phone":S=4;break;case"tablet":S=8;break;case"desktop":S=12}var N=isNaN(g)&&"string"!=typeof g?S:g;switch(r){case"grid":E=(0,i.Z)({},y(t),{gridTemplateRows:v(m),gridTemplateColumns:v(N),gridAutoFlow:""+(o||"")+(a&&" dense")},Z({row:u,rowSpan:p,col:d,colSpan:c},n),E);break;case"flex":E=(0,i.Z)({msFlexDirection:o,flexDirection:o,msFlexWrap:x?"wrap":"none",flexWrap:x?"wrap":"nowrap",msFlexPack:h,justifyContent:h,msFlexAlign:b,alignItems:b},l(j),O({alignSelf:w,flex:k}),E)}return s(E)}},32501:function(e,n,r){r.d(n,{Z:function(){return _}});var t=r(88094),i=r(54733),o=r(2928),a=r(68713),s=r(14179),p=r(59301),c=r(68712),f=r.n(c),l=r(92691),u=r.n(l),d=r(42201),m=r(2070),g=r(17276),y=r(37557),v,h,b=g.j6.pickOthers,w=(h=v=function(e){function n(){return(0,t.Z)(this,n),(0,i.Z)(this,e.apply(this,arguments))}return(0,o.Z)(n,e),n.prototype.render=function e(){var r=this.props,t=r.component,i=r.children,o=b(Object.keys(n.propTypes),this.props);return p.createElement(t,o,i)},n}(p.Component),v._typeMark="responsive_grid_cell",v.propTypes={device:f().oneOf(["phone","tablet","desktop"]),colSpan:f().oneOfType([f().number,f().object]),rowSpan:f().number,component:f().elementType},v.defaultProps={component:"div",device:"desktop"},h);w.displayName="Cell";var x=d.Z.config(w),k,Z,O=g.OB.ieVersion,T=g.j6.pickOthers,j=g.j6.isReactFragment,E=function e(n,r,t){var i=p.Children.toArray(n);return n?i.map((function(n){return j(n)?e(n.props.children,r,t):p.isValidElement(n)&&["function","object"].indexOf((0,s.default)(n.type))>-1&&["form_item","responsive_grid_cell"].indexOf(n.type._typeMark)>-1?p.cloneElement(n,{style:(0,a.Z)({},(0,y.fT)(n.props,r,t),n.props.style||{})}):n})):null},S=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];return(0,a.Z)({},(0,y.ZP)((0,a.Z)({display:"grid"},r)),n)},N=(Z=k=function(e){function n(){return(0,t.Z)(this,n),(0,i.Z)(this,e.apply(this,arguments))}return(0,o.Z)(n,e),n.prototype.render=function e(){var r,t=this.props,i=t.prefix,o=t.component,s=t.style,c=t.className,f=t.children,l=t.device,d=t.rows,g=t.columns,y=t.gap,v,h,b,w,x={rows:d,columns:g,gap:y,device:l,rowSpan:t.rowSpan,colSpan:t.colSpan,component:t.component,dense:t.dense},k=T(Object.keys(n.propTypes),this.props),Z=S(s,x),j=u()(((r={})[i+"responsive-grid"]=!0,r[i+"responsive-grid-ie"]=O,r),c);return O?p.createElement(m.Z,(0,a.Z)({},this.props,{direction:"row",wrap:!0,spacing:y,children:E(f,l,y)})):p.createElement(o,(0,a.Z)({style:Z,className:j},k),E(f,l,y))},n}(p.Component),k._typeMark="responsive_grid",k.propTypes={prefix:f().string,className:f().any,device:f().oneOf(["phone","tablet","desktop"]),rows:f().oneOfType([f().number,f().string]),columns:f().oneOfType([f().number,f().string]),gap:f().oneOfType([f().arrayOf(f().number),f().number]),component:f().elementType,dense:f().bool,style:f().object},k.defaultProps={prefix:"next-",component:"div",device:"desktop",dense:!1},Z);N.displayName="ResponsiveGrid",N.Cell=x;var _=d.Z.config(N)}}]);