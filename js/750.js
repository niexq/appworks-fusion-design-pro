"use strict";(self.webpackChunkappworks_fusion_design_pro=self.webpackChunkappworks_fusion_design_pro||[]).push([[750],{97026:function(e,t,n){var r=n(88239),a=n(99663),l=n(49135),o=n(93196),c=n(67294),i=n(45697),m=n.n(i),s=n(94184),p=n.n(s),u=n(46871),d=n(70408),E=n(81183),Z,f,v=(f=Z=function(e){function t(){return(0,a.Z)(this,t),(0,l.Z)(this,e.apply(this,arguments))}return(0,o.Z)(t,e),t.prototype.render=function e(){var n,a=this.props,l=a.prefix,o=a.className,i=a.dashed,m=a.direction,s=a.orientation,u=a.children,d=E.j6.pickOthers(t.propTypes,this.props),Z=p()(((n={})[l+"divider"]=!0,n[l+"divider-dashed"]=!!i,n[l+"divider-"+m]=!!m,n[l+"divider-with-text-"+s]=!!s&&u,n),o);return c.createElement("div",(0,r.Z)({role:"separator",className:Z},d),u&&c.createElement("span",{className:l+"divider-inner-text"},u))},t}(c.Component),Z.propTypes={prefix:m().string,children:m().any,className:m().string,dashed:m().bool,direction:m().oneOf(["hoz","ver"]),orientation:m().oneOf(["left","right","center"])},Z.defaultProps={prefix:"next-",direction:"hoz",orientation:"center",dashed:!1},f);v.displayName="Divider",t.Z=d.Z.config((0,u.polyfill)(v))},14750:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(67294),a=n(76449),l=n(40683),o=n(73935),c=n(30299),i=n(77431),m=n(80655),s=n(6173),p=n(72068),u=n(90880),d=n(15303),E=n(30411),Z=n(16404),f=n(97026),v=n(94451),y=n(68621),b=n(4035),g="FlowForm--flowForm--34Zhtic",w="FlowForm--flowFormFooter--3mldAEM",h="FlowForm--divider--2A-FDoS",S="FlowForm--titleName--q-W3pP9",I="FlowForm--titleInfo--3rpz8rj",x="FlowForm--subTitle--3BdXwZY";function N(e,t){return T(e)||A(e,t)||O(e,t)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],a=!0,l=!1,o,c;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){l=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw c}}return r}}function T(e){if(Array.isArray(e))return e}var C=r.useEffect,j=r.useState,D=r.useRef,H={approval:{approverId:1,assessmentType:1},person:{avatar:"https://img.alicdn.com/tfs/TB1WpoDouH2gK0jSZJnXXaT1FXa-1072-1608.jpg",surname:"\u8c22",name:"\u8389\u8389",phone:"13676349585",email:"Xielili@aliwork-inc.com",region:"\u4e2d\u56fd/\u6d59\u6c5f",address:"\u676d\u5dde",workTime:3,education:"Singapore University of Technology and Design",rank:"P10",position:"Senior Director",department:"aliwork&EHR",workAddress:"\u676d\u5dde",salary:"20,000",experiences:[{company:"\u6d59\u6c5f\u676d\u5dde\u5929\u732b\u6709\u9650\u516c\u53f8",position:"\u9ad8\u7ea7\u7814\u53d1\u4e13\u5bb6",region:"\u4e2d\u56fd/\u6d59\u6c5f",description:"Fusion \u662f\u4e00\u5957\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u8bbe\u8ba1\u7cfb\u7edf\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u89e3\u51b3\u4ea7\u54c1\u4f53\u9a8c\u4e00\u81f4\u6027\u95ee\u9898\u3001\u8bbe\u8ba1\u7814\u53d1\u534f\u540c\u95ee\u9898\uff0c\u4ee5\u53caUI\u5f00\u53d1\u6548\u7387\u95ee\u9898\u3002",salary:"20,000 USD",time:13,allowance:"5,000 USD",rsu:!1}]}},q,P=function e(t){var n=t.dataSource,l=void 0===n?H:n,S=t.onAgree,I=void 0===S?function(){}:S,k=t.onRefuse,O=void 0===k?function(){}:k,F=t.onTransfer,A=void 0===F?function(){}:F,T=t.onSignature,q=void 0===T?function(){}:T,P=c.Z.useField({values:l.approval}),_=D(null),U,R=N(j(0),2),X=R[0],B=R[1],W,z=N(j(0),2),M=z[0],V=z[1];return C((function(){var e=(0,o.findDOMNode)(_.current),t=null==e?void 0:e.getBoundingClientRect();B(null==t?void 0:t.left),V(document.documentElement.offsetWidth-(null==t?void 0:t.left)-(null==t?void 0:t.width))}),[]),r.createElement(i.Z,{ref:_,spacing:20,className:g},r.createElement(m.Z,{free:!0},r.createElement(m.Z.Content,null,r.createElement(s.Z,{shape:"dot",current:1},r.createElement(s.Z.Item,{key:0,title:"\u7533\u8bf7"}),r.createElement(s.Z.Item,{key:1,title:"\u5ba1\u6279",content:"\u674e\u5f3a"}),r.createElement(s.Z.Item,{key:2,title:"\u63a5\u53d7"}),r.createElement(s.Z.Item,{key:3,title:"\u5408\u540c\u53d1\u9001"}),r.createElement(s.Z.Item,{key:4,title:"\u5408\u540c\u63a5\u53d7"}),r.createElement(s.Z.Item,{key:5,title:"\u5165\u804c\u51c6\u5907"}),r.createElement(s.Z.Item,{key:6,title:"\u5b8c\u6210"})))),r.createElement(m.Z,{free:!0},r.createElement(m.Z.Header,{title:"\u5ba1\u6279\u4fe1\u606f"}),r.createElement(m.Z.Divider,null),r.createElement(m.Z.Content,null,r.createElement(p.Z,{labelAlign:"top",fullWidth:!0,field:P,responsive:!0},r.createElement(p.Z.Item,{label:"\u5ba1\u6279\u4eba",colSpan:4,required:!0},r.createElement(u.Z,{name:"approverId",placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u4eba"},r.createElement(u.Z.Option,{value:1},"\u674e\u5f3a"),r.createElement(u.Z.Option,{value:2},"\u5f20\u4e09"),r.createElement(u.Z.Option,{value:3},"\u674e\u56db"),r.createElement(u.Z.Option,{value:4},"\u738b\u4e94"),r.createElement(u.Z.Option,{value:5},"\u962e\u5c0f\u4e8c"))),r.createElement(p.Z.Item,{label:"\u52a0\u7b7e\u4eba",colSpan:4},r.createElement(u.Z,{name:"signatureId",placeholder:"\u8bf7\u9009\u62e9\u52a0\u7b7e\u4eba"},r.createElement(u.Z.Option,{value:1},"\u674e\u5f3a"),r.createElement(u.Z.Option,{value:2},"\u5f20\u4e09"),r.createElement(u.Z.Option,{value:3},"\u674e\u56db"),r.createElement(u.Z.Option,{value:4},"\u738b\u4e94"),r.createElement(u.Z.Option,{value:5},"\u962e\u5c0f\u4e8c"))),r.createElement(p.Z.Item,{label:"\u8bc4\u4f30\u65b9\u5f0f",colSpan:4},r.createElement(d.Z.Group,{name:"assessmentType"},r.createElement(d.Z,{value:1},"\u5df2\u7535\u9762"),r.createElement(d.Z,{value:2},"\u672a\u7535\u9762"))),r.createElement(p.Z.Item,{label:"\u610f\u89c1&\u53cd\u9988",colSpan:8},r.createElement(E.Z.TextArea,{maxLength:500,showLimitHint:!0,placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0"}))))),r.createElement(m.Z,{free:!0},r.createElement(m.Z.Header,{title:"\u5019\u9009\u4eba\u4fe1\u606f"}),r.createElement(m.Z.Divider,null),r.createElement(m.Z.Content,null,r.createElement(a.Z,null,r.createElement(a.Z.Cell,{colSpan:6},r.createElement(i.Z,{spacing:16,direction:"row",align:"flex-start"},r.createElement(i.Z,{padding:[9,0,0,0]},r.createElement(Z.Z,{src:l.person.avatar})),r.createElement(i.Z,{spacing:10},r.createElement(p.Z,{labelAlign:"top",responsive:!0},r.createElement(p.Z.Item,{label:"".concat(l.person.surname).concat(l.person.name),colSpan:12},r.createElement("span",{className:"next-form-preview"},l.person.phone," | ",l.person.email)),r.createElement(p.Z.Item,{label:"\u73b0\u5728\u6240\u5728\u5730",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.address)),r.createElement(p.Z.Item,{label:"\u5de5\u4f5c\u7ecf\u9a8c",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.workTime)),r.createElement(p.Z.Item,{label:"\u6559\u80b2\u7ecf\u5386",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.education)))))),r.createElement(a.Z.Cell,{colSpan:6,style:{position:"relative"}},r.createElement(f.Z,{className:h,direction:"ver"}),r.createElement(p.Z,{labelAlign:"top",responsive:!0},r.createElement(p.Z.Item,{label:"\u804c\u7ea7",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.rank)),r.createElement(p.Z.Item,{label:"\u804c\u4f4d",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.position)),r.createElement(p.Z.Item,{label:"\u90e8\u95e8",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.department)),r.createElement(p.Z.Item,{label:"\u5de5\u4f5c\u5730",colSpan:6},r.createElement("span",{className:"next-form-preview"},l.person.workAddress)),r.createElement(p.Z.Item,{label:"\u85aa\u6c34",colSpan:6},r.createElement(i.Z,{direction:"row",spacing:8,align:"center",className:"next-form-preview"},l.person.salary," ",r.createElement(v.Z,{color:"green"},"+23.2%")))))))),r.createElement(m.Z,{free:!0},r.createElement(m.Z.Header,{title:"\u57fa\u7840\u4fe1\u606f"}),r.createElement(m.Z.Divider,null),r.createElement(m.Z.Content,null,r.createElement(p.Z,{labelAlign:"top",responsive:!0},r.createElement(p.Z.Item,{label:"\u59d3\u6c0f",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},l.person.surname)),r.createElement(p.Z.Item,{label:"\u540d\u5b57",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},l.person.name)),r.createElement(p.Z.Item,{label:"\u56fd\u5bb6/\u5730\u533a",colSpan:4},r.createElement("span",{className:"next-form-preview"},l.person.region)),r.createElement(p.Z.Item,{label:"\u7535\u8bdd\u53f7\u7801",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},l.person.phone)),r.createElement(p.Z.Item,{label:"\u90ae\u7bb1",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},l.person.email)),r.createElement(p.Z.Item,{label:"\u73b0\u5c45\u5730\u5740",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},l.person.address))))),r.createElement(m.Z,{free:!0},r.createElement(m.Z.Header,{title:"\u5de5\u4f5c\u7ecf\u5386"}),r.createElement(m.Z.Divider,null),l.person.experiences.map((function(e,t){return r.createElement(m.Z.Content,{key:t},r.createElement(i.Z,null,r.createElement(y.Z.Text,{className:x},"\u516c\u53f8\u4fe1\u606f"),r.createElement(p.Z,{labelAlign:"top",responsive:!0},r.createElement(p.Z.Item,{label:"\u5de5\u4f5c\u5355\u4f4d",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},e.company)),r.createElement(p.Z.Item,{label:"\u804c\u4f4d",required:!0,colSpan:4},r.createElement("span",{className:"next-form-preview"},e.position)),r.createElement(p.Z.Item,{label:"\u56fd\u5bb6/\u5730\u533a",colSpan:4},r.createElement("span",{className:"next-form-preview"},e.region)),r.createElement(p.Z.Item,{label:"\u804c\u8d23\u63cf\u8ff0",required:!0,colSpan:8},r.createElement("span",{className:"next-form-preview"},e.description)))),r.createElement(f.Z,{dashed:!0}),r.createElement(i.Z,null,r.createElement(y.Z.Text,{className:x},"\u5f85\u9047\u4fe1\u606f"),r.createElement(p.Z,{labelAlign:"top",responsive:!0},r.createElement(p.Z.Item,{label:"\u6708\u85aa",colSpan:4},r.createElement("span",{className:"next-form-preview"},e.salary)),r.createElement(p.Z.Item,{label:"\u6708\u6570",colSpan:4},r.createElement("span",{className:"next-form-preview"},e.time)),r.createElement(p.Z.Item,{label:"\u56fd\u5bb6/\u5730\u533a",colSpan:4},r.createElement("span",{className:"next-form-preview"},e.region)),r.createElement(p.Z.Item,{label:"Options/RSU",colSpan:4},r.createElement("span",{className:"next-form-preview"},e.rsu?"Yes":"No")))))}))),r.createElement("div",null,r.createElement(i.Z,{direction:"row",spacing:8,align:"center",justify:"center",style:{left:X,right:M},className:w},r.createElement(b.Z,{onClick:function e(){return I(P.getValues())},type:"primary"},"\u540c\u610f"),r.createElement(b.Z,{onClick:O,type:"secondary"},"\u62d2\u7edd"),r.createElement(b.Z,{onClick:A,type:"secondary"},"\u8f6c\u79fb"),r.createElement(b.Z,{onClick:q,type:"secondary"},"\u52a0\u7b7e"))))},_=a.Z.Cell,U,R,X,B=function e(){return r.createElement(a.Z,{gap:20},r.createElement(_,{colSpan:12},r.createElement(l.Z,{title:"\u6b65\u9aa4\u8868\u5355",description:"\u6b65\u9aa4\u8868\u5355\u6b65\u9aa4\u8868\u5355\u6b65\u9aa4\u8868\u5355\u6b65\u9aa4\u8868\u5355\u6b65\u9aa4\u8868\u5355\u6b65\u9aa4\u8868\u5355\u6b65\u9aa4\u8868\u5355",breadcrumbs:[{name:"\u8868\u5355\u9875\u9762"},{name:"\u6b65\u9aa4\u8868\u5355"}]})),r.createElement(_,{colSpan:12},r.createElement(P,null)))}},40683:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(77431),l=n(65049),o=n(68621),c={pageHeader:"PageHeader--pageHeader--IvPvuqT",title:"PageHeader--title--3yDuSsx",description:"PageHeader--description--2J_BNVV"},i=["breadcrumbs","title","description"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n=p(e,t),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function p(e,t){if(null==e)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}var u,d=function e(t){var n=t.breadcrumbs,p=t.title,u=t.description,d=s(t,i);return r.createElement(a.Z,m({spacing:8,className:c.pageHeader},d),n&&n.length>0?r.createElement(l.Z,{className:c.breadcrumbs,separator:" / "},n.map((function(e,t){return r.createElement(l.Z.Item,{key:t,link:e.path},e.name)}))):null,p&&r.createElement(o.Z.Text,{className:c.title},p),u&&r.createElement(o.Z.Text,{className:c.description},u))}}}]);