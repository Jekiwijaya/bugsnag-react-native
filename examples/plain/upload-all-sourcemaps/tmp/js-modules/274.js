__d(function(g,r,i,a,m,e,d){'use strict';var t,n=r(d[0]),o=r(d[1]),s=r(d[2]),p=r(d[3]),l=r(d[4]),u=r(d[5]),c=(r(d[6]),r(d[7])),h=(r(d[8]),r(d[9]),r(d[10])),f=r(d[11]),v=r(d[12]),y=r(d[13]),S=r(d[14]),b=r(d[15]),w=r(d[16])('RCTModalHostView'),C=0,_=(function(t){function n(t){var s;return o(this,n),s=p(this,l(n).call(this,t)),n._confirmProps(t),s._identifier=C++,s}return u(n,t),s(n,[{key:"getChildContext",value:function(){return{virtualizedList:null}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this._eventSubscription&&this._eventSubscription.remove()}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){n._confirmProps(t)}},{key:"render",value:function(){if(!1===this.props.visible)return null;var t={backgroundColor:this.props.transparent?'transparent':'white'},n=this.props.animationType;n||(n='none',this.props.animated&&(n='slide'));var o=this.props.presentationStyle;o||(o='fullScreen',this.props.transparent&&(o='overFullScreen'));var s=this.props.children;return f.createElement(w,{animationType:n,presentationStyle:o,transparent:this.props.transparent,hardwareAccelerated:this.props.hardwareAccelerated,onRequestClose:this.props.onRequestClose,onShow:this.props.onShow,identifier:this._identifier,style:O.modal,onStartShouldSetResponder:this._shouldSetResponder,supportedOrientations:this.props.supportedOrientations,onOrientationChange:this.props.onOrientationChange},f.createElement(S,{style:[O.container,t]},s))}},{key:"_shouldSetResponder",value:function(){return!0}}],[{key:"_confirmProps",value:function(t){t.presentationStyle&&'overFullScreen'!==t.presentationStyle&&t.transparent&&console.warn("Modal with '"+t.presentationStyle+"' presentation style and 'transparent' value is not supported.")}}]),n})(f.Component);_.propTypes={animationType:v.oneOf(['none','slide','fade']),presentationStyle:v.oneOf(['fullScreen','pageSheet','formSheet','overFullScreen']),transparent:v.bool,hardwareAccelerated:v.bool,visible:v.bool,onRequestClose:(h.isTV,v.func.isRequired),onShow:v.func,onDismiss:v.func,animated:b(v.bool,'Use the `animationType` prop instead.'),supportedOrientations:v.arrayOf(v.oneOf(['portrait','portrait-upside-down','landscape','landscape-left','landscape-right'])),onOrientationChange:v.func},_.defaultProps={visible:!0,hardwareAccelerated:!1},_.contextTypes={rootTag:v.number},_.childContextTypes={virtualizedList:v.object};var T=c.isRTL?'right':'left',O=y.create({modal:{position:'absolute'},container:(t={position:'absolute'},n(t,T,0),n(t,"top",0),t)});m.exports=_},274,[60,15,16,17,20,21,275,276,125,30,57,61,73,62,89,80,159]);