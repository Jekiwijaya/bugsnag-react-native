__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]).Vibration;r(d[1]);var n={vibrate:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:400,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if('number'==typeof n)t.vibrate(n);else{if(!Array.isArray(n))throw new Error('Vibration pattern should be a number or array');t.vibrateByPattern(n,o?0:-1)}},cancel:function(){t.cancel()}};m.exports=n},334,[30,57]);