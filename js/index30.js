var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,p=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&l(e,t,r[t]);if(n)for(var t of n(r))a.call(r,t)&&l(e,t,r[t]);return e},m=(e,n)=>r(e,t(n));import{_ as d,Q as i,a6 as g,ah as s,K as u}from"./vendor.js";import{P as c}from"./index5.js";import{u as x}from"./index23.js";import"./index7.js";const f=[{gender:"female",name:"Sando",email:"melissa.sando@example.com",phone:"82757809",id:"27096632423",groupCount:2,groupIndex:0,group2Merged:["gender"]},{gender:"female",name:"ihle",email:"torvald.ihle@example.com",phone:"(18) 2827578509",id:"27096632423",groupCount:2,groupIndex:1,group2Merged:["gender"]},{gender:"male",name:"Ortega",email:"jesus.ortega@example.com",phone:"902-264-345",id:"67967111-Y",groupCount:4,groupIndex:0,group2Merged:["gender"]},{gender:"male",name:"Daluz",email:"dositeu.daluz@example.com",phone:"(98) 2534-5239",id:"0b2dffc6a3e282dbee19b432371a1248",groupCount:4,groupIndex:1,group2Merged:["gender"]},{gender:"male",name:"Rousseau",email:"marcel.rousseau@example.com",phone:"077 383 91 73",id:"3c51c6551a2a263ee1626d84e6426ea53fa60a3a",groupCount:4,groupIndex:2,group2Merged:["gender"]},{gender:"male",name:"Berger",email:"evan.berger@example.com",phone:"02-46-03-53-36",id:"1NNaN50556983-14",groupCount:4,groupIndex:3,group2Merged:["gender"]}],b=()=>Promise.resolve({total:f.length,list:f}),h=(e,r,t,n)=>{const{groupCount:o,groupIndex:a,group2Merged:l}=n;if(l.find((e=>e===t))&&0===a)return{rowSpan:o}};function E(){const{paginationProps:e,tableProps:r}=x(b,{});return d.exports.createElement(i,{free:!0},d.exports.createElement(i.Content,null,d.exports.createElement(g,m(p({},r),{primaryKey:"email",cellProps:h}),d.exports.createElement(g.Column,{title:"gender",dataIndex:"gender",width:500}),d.exports.createElement(g.Column,{title:"name",dataIndex:"name",width:240}),d.exports.createElement(g.Column,{title:"email",dataIndex:"email",width:500}),d.exports.createElement(g.Column,{title:"phone",dataIndex:"phone",width:500})),d.exports.createElement(s,p({style:{marginTop:16,textAlign:"right"}},e))))}const{Cell:C}=u,I=undefined,j=()=>d.exports.createElement(u,{gap:20},d.exports.createElement(C,{colSpan:12},d.exports.createElement(c,{title:"\u5408\u5e76\u5355\u5143\u683c",breadcrumbs:[{name:"\u5217\u8868\u9875\u9762"},{name:"\u8868\u683c\u5217\u8868"},{name:"\u5408\u5e76\u5355\u5143\u683c"}],description:"\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c\u5408\u5e76\u5355\u5143\u683c"})),d.exports.createElement(C,{colSpan:12},d.exports.createElement(E,null)));export{j as default};
