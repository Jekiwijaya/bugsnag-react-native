__d(function(g,r,i,a,m,e,d){'use strict';r(d[0]);var t=r(d[1]).TVNavigationEventEmitter,n=r(d[2]);function v(){this.__nativeTVNavigationEventListener=null,this.__nativeTVNavigationEventEmitter=null}v.prototype.enable=function(v,o){this.__nativeTVNavigationEventEmitter=new n(t),this.__nativeTVNavigationEventListener=this.__nativeTVNavigationEventEmitter.addListener('onHWKeyEvent',function(t){o&&o(v,t)})},v.prototype.disable=function(){this.__nativeTVNavigationEventListener&&(this.__nativeTVNavigationEventListener.remove(),delete this.__nativeTVNavigationEventListener),this.__nativeTVNavigationEventEmitter&&delete this.__nativeTVNavigationEventEmitter},m.exports=v},190,[57,30,125]);