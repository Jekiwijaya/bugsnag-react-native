__d(function(g,r,i,a,m,e,d){'use strict';var t,n,s,u,o=r(d[0]),c=r(d[1]);function f(){if(u)return u;var t=g.nativeExtensions&&g.nativeExtensions.SourceCode;if(!t){var n=r(d[2]);t=n&&n.SourceCode}return u=t.scriptURL}function l(){if(void 0===n){var t=f(),s=t&&t.match(/^https?:\/\/.*?\//);n=s?s[0]:null}return n}function v(t){if(t){if(t.startsWith('assets://'))return null;(t=t.substring(0,t.lastIndexOf('/')+1)).includes('://')||(t='file://'+t)}return t}m.exports=function(n){if('object'==typeof n)return n;var u=o.getAssetByID(n);if(!u)return null;var p=new c(l(),(void 0===s&&(s=v(f())),s),u);return t?t(p):p.defaultAsset()},m.exports.pickScale=c.pickScale,m.exports.setCustomSourceTransformer=function(n){t=n}},165,[166,167,30]);