__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),o=r(d[1]),n=r(d[2]),u=r(d[3]),l=r(d[4]),c=r(d[5]);function s(){f.addFileSource('react_hierarchy.txt',function(){return r(d[6])()})}var f=(function(){function l(){o(this,l)}return n(l,null,[{key:"_maybeInit",value:function(){l._subscription||(l._subscription=u.addListener('collectBugExtraData',l.collectExtraData,null),s()),l._redboxSubscription||(l._redboxSubscription=u.addListener('collectRedBoxExtraData',l.collectExtraData,null))}},{key:"addSource",value:function(t,o){return this._addSource(t,o,l._extraSources)}},{key:"addFileSource",value:function(t,o){return this._addSource(t,o,l._fileSources)}},{key:"_addSource",value:function(t,o,n){return l._maybeInit(),n.has(t)&&console.warn("BugReporting.add* called multiple times for same key '"+t+"'"),n.set(t,o),{remove:function(){n.delete(t)}}}},{key:"collectExtraData",value:function(){var o={},n=l._extraSources,u=Array.isArray(n),s=0;for(n=u?n:n["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var f;if(u){if(s>=n.length)break;f=n[s++]}else{if((s=n.next()).done)break;f=s.value}var x=t(f,2),_=x[0],b=x[1];o[_]=b()}var y={},S=l._fileSources,v=Array.isArray(S),p=0;for(S=v?S:S["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var k;if(v){if(p>=S.length)break;k=S[p++]}else{if((p=S.next()).done)break;k=p.value}var D=t(k,2),E=D[0],h=D[1];y[E]=h()}c('BugReporting extraData:',o);var B=r(d[7]).BugReporting;B&&B.setExtraData&&B.setExtraData(o,y);var R=r(d[7]).RedBox;return R&&R.setExtraData&&R.setExtraData(o,'From BugReporting.js'),{extras:o,files:y}}}]),l})();f._extraSources=new l,f._fileSources=new l,f._subscription=null,f._redboxSubscription=null,m.exports=f},311,[33,15,16,48,96,153,312,30]);