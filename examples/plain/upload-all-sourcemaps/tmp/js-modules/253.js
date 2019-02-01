__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]),l=r(d[4]),h=(function(){function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{viewAreaCoveragePercentThreshold:0};s(this,h),this._hasInteracted=!1,this._timers=new Set,this._viewableIndices=[],this._viewableItems=new Map,this._config=t}return o(h,[{key:"dispose",value:function(){this._timers.forEach(clearTimeout)}},{key:"computeViewableItems",value:function(t,n,s,o,h){var c=this._config,f=c.itemVisiblePercentThreshold,v=c.viewAreaCoveragePercentThreshold,_=null!=v,b=_?v:f;l(null!=b&&null!=f!=(null!=v),'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');var y=[];if(0===t)return y;var w=-1,I=h||{first:0,last:t-1},p=I.first,k=I.last;l(k<t,'Invalid render range '+JSON.stringify({renderRange:h,itemCount:t}));for(var S=p;S<=k;S++){var T=o(S);if(T){var A=T.offset-n,V=A+T.length;if(A<s&&V>0)w=S,u(_,b,A,V,s,T.length)&&y.push(S);else if(w>=0)break}}return y}},{key:"onUpdate",value:function(t,n,s,o,l,h,u){var c=this;if((!this._config.waitForInteraction||this._hasInteracted)&&0!==t&&o(0)){var f=[];if(t&&(f=this.computeViewableItems(t,n,s,o,u)),this._viewableIndices.length!==f.length||!this._viewableIndices.every(function(t,n){return t===f[n]}))if(this._viewableIndices=f,this._config.minimumViewTime){var v=setTimeout(function(){c._timers.delete(v),c._onUpdateSync(f,h,l)},this._config.minimumViewTime);this._timers.add(v)}else this._onUpdateSync(f,h,l)}}},{key:"resetViewableIndices",value:function(){this._viewableIndices=[]}},{key:"recordInteraction",value:function(){this._hasInteracted=!0}},{key:"_onUpdateSync",value:function(s,o,l){var h=this;s=s.filter(function(t){return h._viewableIndices.includes(t)});var u=this._viewableItems,c=new Map(s.map(function(t){var n=l(t,!0);return[n.key,n]})),f=[],v=c,_=Array.isArray(v),b=0;for(v=_?v:v["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var y;if(_){if(b>=v.length)break;y=v[b++]}else{if((b=v.next()).done)break;y=b.value}var w=n(y,2),I=w[0],p=w[1];u.has(I)||f.push(p)}var k=u,S=Array.isArray(k),T=0;for(k=S?k:k["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var A;if(S){if(T>=k.length)break;A=k[T++]}else{if((T=k.next()).done)break;A=T.value}var V=n(A,2),x=V[0],M=V[1];c.has(x)||f.push(t({},M,{isViewable:!1}))}f.length>0&&(this._viewableItems=c,o({viewableItems:Array.from(c.values()),changed:f,viewabilityConfig:this._config}))}}]),h})();function u(t,n,s,o,l,h){if(f(s,o,l))return!0;var u=c(s,o,l);return 100*(t?u/l:u/h)>=n}function c(t,n,s){var o=Math.min(n,s)-Math.max(t,0);return Math.max(0,o)}function f(t,n,s){return t>=0&&n<=s&&n>t}m.exports=h},253,[59,33,15,16,28]);