__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]),u=r(d[4]),l=(r(d[5]),r(d[6])),v=r(d[7]),h=(function(h){function c(n,u){var l;return t(this,c),(l=s(this,o(c).call(this,null))).isAvailable=!1,l._nativeModuleName=n,l._nativeEventEmitterName=u,l}return u(c,l),n(c,[{key:"throwMissingNativeModule",value:function(){v(!1,"Cannot use '"+this._nativeEventEmitterName+"' module when native '"+this._nativeModuleName+"' is not included in the build. Either include it, or check '"+this._nativeEventEmitterName+"'.isAvailable before calling any methods.")}},{key:"addListener",value:function(t,n,s){this.throwMissingNativeModule()}},{key:"removeAllListeners",value:function(t){this.throwMissingNativeModule()}},{key:"removeSubscription",value:function(t){this.throwMissingNativeModule()}}]),c})();m.exports=h},124,[15,16,17,20,21,52,51,28]);