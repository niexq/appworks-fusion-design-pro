var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&n(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&n(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{F as c,_ as m,Q as i,E as x,a9 as d,V as E,a3 as u,aa as b,T as y,W as v,J as f,M as g,K as h}from"./vendor.js";import{P as O}from"./index5.js";const{useState:S}=f,j=c.Item,w={colSpan:4},P={type:"private"},C=(e,t)=>{t?console.log("errors",t):(console.log("values:",e),g.success("\u63d0\u4ea4\u6210\u529f"))},k=e=>{const{dataSource:t=P,onSubmit:r=C,onCancel:a=(()=>{})}=e,[l,o]=S(t),n=e=>{o(e)};return m.exports.createElement(i,{free:!0},m.exports.createElement(i.Content,null,m.exports.createElement(c,{responsive:!0,fullWidth:!0,value:l,labelAlign:"top",onChange:n},m.exports.createElement(j,s(p({},w),{label:"\u9879\u76ee\u540d\u79f0\uff1a",required:!0}),m.exports.createElement(x,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0",name:"name"})),m.exports.createElement(j,s(p({},w),{label:"\u9879\u76ee\u6240\u5c5e\u5206\u7c7b\uff1a",required:!0}),m.exports.createElement(x,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u5206\u7c7b",name:"category"})),m.exports.createElement(j,s(p({},w),{label:"\u7533\u8bf7\u65e5\u671f\uff1a",required:!0}),m.exports.createElement(d.RangePicker,{name:"date"})),m.exports.createElement(j,s(p({},w),{label:"\u7533\u8bf7\u4eba\uff1a",required:!0}),m.exports.createElement(x,{placeholder:"\u7533\u8bf7\u4eba",name:"person"})),m.exports.createElement(j,s(p({},w),{label:"\u72b6\u6001\uff1a",required:!0}),m.exports.createElement(E,{name:"state","aria-labelledby":"state of project"},m.exports.createElement(E.Option,{id:"step1",value:"step1"},"\u9636\u6bb5\u4e00"),m.exports.createElement(E.Option,{id:"step2",value:"step2"},"\u9636\u6bb5\u4e8c"),m.exports.createElement(E.Option,{id:"step3",value:"step3"},"\u9636\u6bb5\u4e09"))),m.exports.createElement(j,s(p({},w),{label:"\u9879\u76ee\u6743\u9650\uff1a"}),m.exports.createElement(u.Group,{name:"type","aria-labelledby":"authority of project"},m.exports.createElement(u,{id:"private",value:"private"},"\u79c1\u5bc6\u9879\u76ee"),m.exports.createElement(u,{id:"internal",value:"internal"},"\u5185\u90e8\u9879\u76ee"),m.exports.createElement(u,{id:"publish",value:"publish"},"\u5f00\u653e\u76ee"))),m.exports.createElement(j,s(p({},w),{colSpan:8,label:"\u9879\u76ee\u63cf\u8ff0\uff1a"}),m.exports.createElement(x.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u8be6\u7ec6\u4fe1\u606f",name:"desc"})),m.exports.createElement(j,s(p({},w),{colSpan:12,help:"\u8bf7\u9009\u62e9\u5927\u5c0f\u4e0d\u8d85\u8fc75M\u7684\u6587\u4ef6\uff0c\u652f\u6301doc\uff0cdocx\uff0cxls\uff0cxlsx\uff0czip\u683c\u5f0f"}),m.exports.createElement(b,{name:"pic",action:"https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"},m.exports.createElement(y,{type:"normal",style:{margin:"0 0 10px"}},"\u4e0a\u4f20\u6587\u4ef6"))),m.exports.createElement(j,{colSpan:12},m.exports.createElement(v,{spacing:8,direction:"row"},m.exports.createElement(c.Submit,{type:"primary",onClick:r,validate:!0},"\u63d0\u4ea4"),m.exports.createElement(y,{onClick:a,type:"secondary"},"\u53d6\u6d88"))))))},{Cell:q}=h,A=undefined,I=()=>m.exports.createElement(h,{gap:20},m.exports.createElement(q,{colSpan:12},m.exports.createElement(O,{title:"\u4e09\u5217\u57fa\u7840\u8868\u5355",description:"\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355\u4e09\u5217\u57fa\u7840\u8868\u5355",breadcrumbs:[{name:"\u8868\u5355\u9875\u9762"},{name:"\u4e09\u5217\u57fa\u7840\u8868\u5355"}]})),m.exports.createElement(q,{colSpan:12},m.exports.createElement(k,null)));export{I as default};