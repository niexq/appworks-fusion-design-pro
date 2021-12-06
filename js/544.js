"use strict";(self.webpackChunkappworks_fusion_design_pro=self.webpackChunkappworks_fusion_design_pro||[]).push([[544],{28544:function(e,o,t){t.d(o,{Z:function(){return Q}});var n=t(88239),r=t(42723),i=t(70408),l=t(81183),a=t(99663),s=t(49135),c=t(93196),p=t(67294),f=t(45697),d=t.n(f),u=t(8582),h=t(48926),g=t(94184),y=t.n(g),v=t(4035),m=t(69338),b,C,k=l.Yl.makeChain,P=l.j6.pickOthers,x=function e(){},Z=(C=b=function(e){function o(){return(0,a.Z)(this,o),(0,s.Z)(this,e.apply(this,arguments))}return(0,c.Z)(o,e),o.prototype.getNode=function e(o,t){this[o]=t},o.prototype.renderHeader=function e(){var o=this.props,t=o.prefix,n=o.title;return n?(this.titleId=(0,l.M8)("dialog-title-"),p.createElement("div",{className:t+"dialog-header",id:this.titleId,ref:this.getNode.bind(this,"headerNode"),role:"heading","aria-level":"1"},n)):null},o.prototype.renderBody=function e(){var o=this.props,t=o.prefix,n=o.children;return n?p.createElement("div",{className:t+"dialog-body",ref:this.getNode.bind(this,"bodyNode")},n):null},o.prototype.renderFooter=function e(){var o,t=this,r=this.props,i=r.prefix,l=r.footer,a=r.footerAlign,s=r.footerActions,c=r.locale,f=r.height;if(!1===l)return null;var d=y()(((o={})[i+"dialog-footer"]=!0,o[i+"align-"+a]=!0,o[i+"dialog-footer-fixed-height"]=!!f,o)),u=!0!==l&&l?l:s.map((function(e){var o=t.props[e+"Props"],r=(0,n.Z)({},o,{prefix:i,className:y()(i+"dialog-btn",o.className),onClick:k(t.props["on"+(e[0].toUpperCase()+e.slice(1))],o.onClick),children:o.children||c[e]});return"ok"===e&&(r.type="primary"),p.createElement(v.Z,(0,n.Z)({key:e},r))}));return p.createElement("div",{className:d,ref:this.getNode.bind(this,"footerNode")},u)},o.prototype.renderCloseLink=function e(){var o=this.props,t=o.prefix,n=o.closeable,r=o.onClose,i=o.locale;return n?p.createElement("a",{role:"button","aria-label":i.close,className:t+"dialog-close",onClick:r},p.createElement(m.Z,{className:t+"dialog-close-icon",type:"close"})):null},o.prototype.render=function e(){var t,r=this.props,i=r.prefix,l=r.className,a=r.closeable,s=r.title,c=r.role,f=r.rtl,d=r.height,u=P(Object.keys(o.propTypes),this.props),h=y()(((t={})[i+"dialog"]=!0,t[i+"closeable"]=a,t[l]=!!l,t)),g=this.renderHeader(),v=this.renderBody(),m=this.renderFooter(),b=this.renderCloseLink(),C={role:c,"aria-modal":"true"};return s&&(C["aria-labelledby"]=this.titleId),u.style=(0,n.Z)({},u.style,{height:d}),p.createElement("div",(0,n.Z)({},C,{className:h},u,{dir:f?"rtl":void 0}),g,v,m,b)},o}(p.Component),b.propTypes={prefix:d().string,className:d().string,title:d().node,children:d().node,footer:d().oneOfType([d().bool,d().node]),footerAlign:d().oneOf(["left","center","right"]),footerActions:d().array,onOk:d().func,onCancel:d().func,okProps:d().object,cancelProps:d().object,closeable:d().bool,onClose:d().func,locale:d().object,role:d().string,rtl:d().bool,height:d().string},b.defaultProps={prefix:"next-",footerAlign:"right",footerActions:["ok","cancel"],onOk:x,onCancel:x,okProps:{},cancelProps:{},closeable:!0,onClose:x,locale:h.Z.Dialog,role:"dialog"},C),N,O;Z.displayName="Inner";var w=function e(){},S=l.T_.limitTabRange,A=l.Yl.bindCtx,j=l.j6.pickOthers,E=l.vz.getStyle,M=l.vz.setStyle;function I(e,o){var t=E(e,"boxSizing");return l.OB.ieVersion&&-1!==["width","height"].indexOf(o)&&"border-box"===t?parseFloat(e.getBoundingClientRect()[o].toFixed(1)):E(e,o)}var D=(O=N=function(e){function o(t,n){(0,a.Z)(this,o);var r=(0,s.Z)(this,e.call(this,t,n));return A(r,["onKeyDown","beforePosition","adjustPosition","getOverlayRef"]),r}return(0,c.Z)(o,e),o.prototype.componentDidMount=function e(){l.U3.on(document,"keydown",this.onKeyDown),this.useCSSToPosition()||this.adjustPosition()},o.prototype.componentWillUnmount=function e(){l.U3.off(document,"keydown",this.onKeyDown)},o.prototype.useCSSToPosition=function e(){var o=this.props,t=o.align,n=o.isFullScreen;return"cc cc"===t&&n},o.prototype.onKeyDown=function e(o){var t=this.getInnerNode();t&&S(t,o)},o.prototype.beforePosition=function e(){if(this.props.visible&&this.overlay){var o=this.getInner();if(o){var t=this.getInnerNode();this._lastDialogHeight!==I(t,"height")&&this.revertSize(o.bodyNode)}}},o.prototype.adjustPosition=function e(){if(this.props.visible&&this.overlay){var o=this.getInner();if(o){var t=this.getInnerNode(),n=E(t,"top"),r=this.props.minMargin;n<r&&(n=r,M(t,"top",r+"px"));var i=I(t,"height"),l=window.innerHeight||document.documentElement.clientHeight;l<i+2*n-1||this.props.height?this.adjustSize(o,t,Math.min(i,l-2*n)):this.revertSize(o.bodyNode),this._lastDialogHeight=i}}},o.prototype.adjustSize=function e(o,t,n){var r=o.headerNode,i=o.bodyNode,l,a=[r,o.footerNode].map((function(e){return e?I(e,"height"):0})),s,c,p,f=n-a[0]-a[1]-["padding-top","padding-bottom"].reduce((function(e,o){return e+E(t,o)}),0);f<0&&(f=1),i&&(this.dialogBodyStyleMaxHeight=i.style.maxHeight,this.dialogBodyStyleOverflowY=i.style.overflowY,M(i,{"max-height":f+"px","overflow-y":"auto"}))},o.prototype.revertSize=function e(o){M(o,{"max-height":this.dialogBodyStyleMaxHeight,"overflow-y":this.dialogBodyStyleOverflowY})},o.prototype.mapcloseableToConfig=function e(o){return["esc","close","mask"].reduce((function(e,t){var n=t.charAt(0).toUpperCase()+t.substr(1),r="boolean"==typeof o?o:o.split(",").indexOf(t)>-1;return"esc"===t||"mask"===t?e["canCloseBy"+n]=r:e["canCloseBy"+n+"Click"]=r,e}),{})},o.prototype.getOverlayRef=function e(o){this.overlay=o},o.prototype.getInner=function e(){return this.overlay.getInstance().getContent()},o.prototype.getInnerNode=function e(){return this.overlay.getInstance().getContentNode()},o.prototype.renderInner=function e(t){var r=this.props,i=r.prefix,l=r.className,a=r.title,s=r.children,c=r.footer,f=r.footerAlign,d=r.footerActions,u=r.onOk,h=r.onCancel,g=r.okProps,y=r.cancelProps,v=r.onClose,m=r.locale,b=r.visible,C=r.rtl,k=r.height,P=j(Object.keys(o.propTypes),this.props);return p.createElement(Z,(0,n.Z)({prefix:i,className:l,title:a,footer:c,footerAlign:f,footerActions:d,onOk:b?u:w,onCancel:b?h:w,okProps:g,cancelProps:y,locale:m,closeable:t,rtl:C,onClose:v.bind(this,"closeClick"),height:k},P),s)},o.prototype.render=function e(){var o=this.props,t=o.prefix,i=o.visible,l=o.hasMask,a=o.animation,s=o.autoFocus,c=o.closeable,f=o.closeMode,d=o.onClose,h=o.afterClose,g=o.shouldUpdatePosition,y=o.align,v=o.popupContainer,m=o.cache,b=o.overlayProps,C=o.rtl,k=this.useCSSToPosition(),P="closeMode"in this.props?Array.isArray(f)?f.join(","):f:c,x=this.mapcloseableToConfig(P),Z=x.canCloseByCloseClick,N=(0,r.Z)(x,["canCloseByCloseClick"]),O=(0,n.Z)({disableScroll:!0,container:v,cache:m},b,{prefix:t,visible:i,animation:a,hasMask:l,autoFocus:s,afterClose:h},N,{canCloseByOutSideClick:!1,align:!k&&y,onRequestClose:d,needAdjust:!1,ref:this.getOverlayRef,rtl:C,maskClass:k?t+"dialog-container":"",isChildrenInMask:k&&l});k||(O.beforePosition=this.beforePosition,O.onPosition=this.adjustPosition,O.shouldUpdatePosition=g);var w=this.renderInner(Z);return p.createElement(u.Z,O,k&&!l?p.createElement("div",{className:t+"dialog-container",dir:C?"rtl":void 0},w):w)},o}(p.Component),N.propTypes={prefix:d().string,pure:d().bool,rtl:d().bool,className:d().string,visible:d().bool,title:d().node,children:d().node,footer:d().oneOfType([d().bool,d().node]),footerAlign:d().oneOf(["left","center","right"]),footerActions:d().array,onOk:d().func,onCancel:d().func,okProps:d().object,cancelProps:d().object,closeable:d().oneOfType([d().string,d().bool]),closeMode:d().oneOfType([d().arrayOf(d().oneOf(["close","mask","esc"])),d().oneOf(["close","mask","esc"])]),cache:d().bool,onClose:d().func,afterClose:d().func,hasMask:d().bool,animation:d().oneOfType([d().object,d().bool]),autoFocus:d().bool,align:d().oneOfType([d().string,d().bool]),isFullScreen:d().bool,shouldUpdatePosition:d().bool,minMargin:d().number,overlayProps:d().object,locale:d().object,height:d().string,popupContainer:d().any},N.defaultProps={prefix:"next-",pure:!1,visible:!1,footerAlign:"right",footerActions:["ok","cancel"],onOk:w,onCancel:w,cache:!1,okProps:{},cancelProps:{},closeable:"esc,close",onClose:w,afterClose:w,hasMask:!0,animation:{in:"fadeInUp",out:"fadeOutUp"},autoFocus:!1,align:"cc cc",isFullScreen:!1,shouldUpdatePosition:!1,minMargin:40,overlayProps:{},locale:h.Z.Dialog},O);D.displayName="Dialog";var T=t(73935),B=t(31568),F,U,z=i.Z.config(D),H=function e(){},_={alert:"warning",confirm:"help"},R=function e(o){var t=o.type,r=o.messageProps,i=void 0===r?{}:r,l=o.title,a=o.rtl,s=o.prefix,c=void 0===s?"next-":s,f=o.content;return p.createElement(B.Z,(0,n.Z)({size:"large",shape:"addon",type:_[t]},i,{title:l,rtl:a,className:y()(c+"dialog-message",i.className)}),f)},W=(U=F=function(e){function o(){var t,n,r;(0,a.Z)(this,o);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return t=n=(0,s.Z)(this,e.call.apply(e,[this].concat(l))),n.state={visible:!0,loading:!1},n.close=function(){n.setState({visible:!1})},n.loading=function(e){n.setState({loading:e})},r=t,(0,s.Z)(n,r)}return(0,c.Z)(o,e),o.prototype.wrapper=function e(o,t){var n=this;return function(){var e=o.apply(void 0,arguments);if(e&&e.then)n.loading(!0),e.then((function(e){if(n.loading(!1),!1!==e)return t()})).catch((function(e){throw n.loading(!1),e}));else if(!1!==e)return t()}},o.prototype.render=function e(){var o=this.props,t=o.prefix,i=o.type,l=o.title,a=o.content,s=o.messageProps,c=o.footerActions,f=o.onOk,d=o.onCancel,u=o.onClose,h=o.okProps,g=o.needWrapper,v=o.rtl,m=o.className,b=(0,r.Z)(o,["prefix","type","title","content","messageProps","footerActions","onOk","onCancel","onClose","okProps","needWrapper","rtl","className"]),C=g&&i?null:l,k=g&&i?p.createElement(R,{type:i,messageProps:s,title:l,rtl:v,prefix:t,content:a}):a,P=c||("alert"===i?["ok"]:"confirm"===i?["ok","cancel"]:void 0),x=this.wrapper(f,this.close),Z=this.wrapper(d,this.close),N=this.wrapper(u,this.close),O=this.state,w=O.visible,S=O.loading;h.loading=S;var A=y()(t+"dialog-quick",m);return p.createElement(z,(0,n.Z)({prefix:t,role:"alertdialog"},b,{visible:w,title:C,rtl:v,footerActions:P,onOk:this.state.loading?H:x,onCancel:Z,onClose:N,okProps:h,className:A}),k)},o}(p.Component),F.propTypes={prefix:d().string,pure:d().bool,rtl:d().bool,type:d().oneOf(["alert","confirm"]),title:d().node,content:d().node,messageProps:d().object,footerActions:d().array,onOk:d().func,onCancel:d().func,onClose:d().func,okProps:d().object,locale:d().object,needWrapper:d().bool,className:d().string},F.defaultProps={prefix:"next-",pure:!1,messageProps:{},onOk:H,onCancel:H,onClose:H,okProps:{},locale:h.Z.Dialog,needWrapper:!0},U);W.displayName="Modal";var Y=i.Z.config(W,{componentName:"Dialog"}),K=function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=document.createElement("div"),r=function e(){o.afterClose&&o.afterClose(),T.unmountComponentAtNode(t),t.parentNode.removeChild(t)};document.body.appendChild(t);var l=o.contextConfig;l||(l=i.Z.getContext());var a=void 0,s=void 0;return T.render(p.createElement(i.Z,l,p.createElement(Y,(0,n.Z)({},o,{afterClose:r,ref:function e(o){s=o}}))),t,(function(){a=s})),{hide:function e(){var o=a&&a.getInstance();o&&o.close()}}},q=function e(o){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.type=o,K(e)}},L=q("alert"),V=q("confirm"),G=function e(o){var t=function e(t){return p.createElement(i.Z.Consumer,null,(function(e){return p.createElement(o,(0,n.Z)({},t,{contextDialog:{show:function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return K((0,n.Z)({},t,{contextConfig:e}))},alert:function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return L((0,n.Z)({},t,{contextConfig:e}))},confirm:function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return V((0,n.Z)({},t,{contextConfig:e}))}}}))}))};return t};function J(e,o){if("closable"in e){o("closable","closeable","Dialog");var t=e,i=t.closable,l=(0,r.Z)(t,["closable"]);e=(0,n.Z)({closeable:i},l)}var a;return["target","offset","beforeOpen","onOpen","afterOpen","beforePosition","onPosition","cache","safeNode","wrapperClassName","container"].forEach((function(t){if(t in e){var i;o(t,"overlayProps."+t,"Dialog");var l=e,a=l.overlayProps,s=(0,r.Z)(l,["overlayProps"]),c=(0,n.Z)(((i={})[t]=e[t],i),a||{});delete s[t],e=(0,n.Z)({overlayProps:c},s)}})),e}D.Inner=Z,D.show=function(e){var o,t;return!1!==i.Z.getContextProps(e,"Dialog").warning&&(e=J(e,l.cM.deprecated)),K(e)},D.alert=function(e){var o,t;return!1!==i.Z.getContextProps(e,"Dialog").warning&&(e=J(e,l.cM.deprecated)),L(e)},D.confirm=function(e){var o,t;return!1!==i.Z.getContextProps(e,"Dialog").warning&&(e=J(e,l.cM.deprecated)),V(e)},D.withContext=G;var Q=i.Z.config(D,{transform:function e(o,t){return J(o,t)}})}}]);