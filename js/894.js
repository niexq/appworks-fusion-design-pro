"use strict";(self.webpackChunkappworks_fusion_design_pro=self.webpackChunkappworks_fusion_design_pro||[]).push([[894],{18894:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var n=r(67294),a=r(76449),l=r(40683),c=r(72068),o=r(31568),i=r(80655),u=r(30411),p=r(3145),s=r(90880),m=r(15303),d=r(337),f=r(4035),b=r(77431);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function E(e,t){return O(e)||Z(e,t)||g(e,t)||v()}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n=[],a=!0,l=!1,c,o;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return n}}function O(e){if(Array.isArray(e))return e}var S=n.useState,w=c.Z.Item,k={colSpan:4},j={type:"private"},x=function e(t,r){r?console.log("errors",r):(console.log("values:",t),o.Z.success("\u63d0\u4ea4\u6210\u529f"))},C,P=function e(t){var r=t.dataSource,a=void 0===r?j:r,l=t.onSubmit,o=void 0===l?x:l,v=t.onCancel,g=void 0===v?function(){}:v,h,Z=E(S(a),2),O=Z[0],C=Z[1],P=function e(t){C(t)};return n.createElement(i.Z,{free:!0},n.createElement(i.Z.Content,null,n.createElement(c.Z,{responsive:!0,fullWidth:!0,value:O,labelAlign:"top",onChange:P},n.createElement(w,y({},k,{label:"\u9879\u76ee\u540d\u79f0\uff1a",required:!0}),n.createElement(u.Z,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0",name:"name"})),n.createElement(w,y({},k,{label:"\u9879\u76ee\u6240\u5c5e\u5206\u7c7b\uff1a",required:!0}),n.createElement(u.Z,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u5206\u7c7b",name:"category"})),n.createElement(w,y({},k,{label:"\u7533\u8bf7\u65e5\u671f\uff1a",required:!0}),n.createElement(p.Z.RangePicker,{name:"date"})),n.createElement(w,y({},k,{label:"\u7533\u8bf7\u4eba\uff1a",required:!0}),n.createElement(u.Z,{placeholder:"\u7533\u8bf7\u4eba",name:"person"})),n.createElement(w,y({},k,{label:"\u72b6\u6001\uff1a",required:!0}),n.createElement(s.Z,{name:"state","aria-labelledby":"state of project"},n.createElement(s.Z.Option,{id:"step1",value:"step1"},"\u9636\u6bb5\u4e00"),n.createElement(s.Z.Option,{id:"step2",value:"step2"},"\u9636\u6bb5\u4e8c"),n.createElement(s.Z.Option,{id:"step3",value:"step3"},"\u9636\u6bb5\u4e09"))),n.createElement(w,y({},k,{label:"\u9879\u76ee\u6743\u9650\uff1a"}),n.createElement(m.Z.Group,{name:"type","aria-labelledby":"authority of project"},n.createElement(m.Z,{id:"private",value:"private"},"\u79c1\u5bc6\u9879\u76ee"),n.createElement(m.Z,{id:"internal",value:"internal"},"\u5185\u90e8\u9879\u76ee"),n.createElement(m.Z,{id:"publish",value:"publish"},"\u5f00\u653e\u76ee"))),n.createElement(w,y({},k,{colSpan:8,label:"\u9879\u76ee\u63cf\u8ff0\uff1a"}),n.createElement(u.Z.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u8be6\u7ec6\u4fe1\u606f",name:"desc"})),n.createElement(w,y({},k,{colSpan:12,help:"\u8bf7\u9009\u62e9\u5927\u5c0f\u4e0d\u8d85\u8fc75M\u7684\u6587\u4ef6\uff0c\u652f\u6301doc\uff0cdocx\uff0cxls\uff0cxlsx\uff0czip\u683c\u5f0f"}),n.createElement(d.Z,{name:"pic",action:"https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"},n.createElement(f.Z,{type:"normal",style:{margin:"0 0 10px"}},"\u4e0a\u4f20\u6587\u4ef6"))),n.createElement(w,{colSpan:12},n.createElement(b.Z,{spacing:8,direction:"row"},n.createElement(c.Z.Submit,{type:"primary",onClick:o,validate:!0},"\u63d0\u4ea4"),n.createElement(f.Z,{onClick:g,type:"secondary"},"\u53d6\u6d88"))))))},A=a.Z.Cell,I,_,q,H=function e(){return n.createElement(a.Z,{gap:20},n.createElement(A,{colSpan:12},n.createElement(l.Z,{title:"\u4e09\u5217\u57fa\u7840\u8868\u5355",description:"\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355",breadcrumbs:[{name:"\u8868\u5355\u9875\u9762"},{name:"\u4e09\u5217\u57fa\u7840\u8868\u5355"}]})),n.createElement(A,{colSpan:12},n.createElement(P,null)))}},40683:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),a=r(77431),l=r(65049),c=r(68621),o={pageHeader:"PageHeader--pageHeader--IvPvuqT",title:"PageHeader--title--3yDuSsx",description:"PageHeader--description--2J_BNVV"},i=["breadcrumbs","title","description"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var r=s(e,t),n,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(null==e)return{};var r={},n=Object.keys(e),a,l;for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}var m,d=function e(t){var r=t.breadcrumbs,s=t.title,m=t.description,d=p(t,i);return n.createElement(a.Z,u({spacing:8,className:o.pageHeader},d),r&&r.length>0?n.createElement(l.Z,{className:o.breadcrumbs,separator:" / "},r.map((function(e,t){return n.createElement(l.Z.Item,{key:t,link:e.path},e.name)}))):null,s&&n.createElement(c.Z.Text,{className:o.title},s),m&&n.createElement(c.Z.Text,{className:o.description},m))}}}]);