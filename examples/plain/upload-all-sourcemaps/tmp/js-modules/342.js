__d(function(g,r,i,a,m,e,d){var n=r(d[0]),t=['string','number','boolean'],l=function(n){return{message:n.message,stack:n.stack,name:n.name}};m.exports=function o(s){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,v=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Set;c.add(s);var p={};for(var f in n(s)&&(s=l(s)),s)if({}.hasOwnProperty.call(s,f)){var y=s[f];if([void 0,null].includes(y)||'number'==typeof y&&isNaN(y))p[f]={type:'string',value:String(y)};else if('object'==typeof y)c.has(y)?p[f]={type:'string',value:'[circular]'}:p[f]=v===u?{type:'string',value:'[max depth exceeded]'}:{type:'map',value:o(y,u,v+1,c)};else{var b=typeof y;t.includes(b)?p[f]={type:b,value:y}:console.warn('Could not serialize breadcrumb data for \''+f+'\': Invalid type \''+b+'\'')}}return p}},342,[343]);