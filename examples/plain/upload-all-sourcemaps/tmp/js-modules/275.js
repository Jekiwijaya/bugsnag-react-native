__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),l=r(d[4]),p=(r(d[5]),r(d[6])),u=(r(d[7]),r(d[8])),c=(r(d[9]),r(d[10])),h=r(d[11]),f=(function(p){function c(){var n,l;t(this,c);for(var p=arguments.length,u=new Array(p),h=0;h<p;h++)u[h]=arguments[h];return(l=o(this,(n=s(c)).call.apply(n,[this].concat(u)))).state={inspector:null,mainKey:1},l._subscription=null,l}return l(c,p),n(c,[{key:"getChildContext",value:function(){return{rootTag:this.props.rootTag}}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){null!=this._subscription&&this._subscription.remove()}},{key:"render",value:function(){var t=this,n=u.createElement(h,{collapsable:!this.state.inspector,key:this.state.mainKey,pointerEvents:"box-none",style:v.appContainer,ref:function(n){t._mainRef=n}},this.props.children),o=this.props.WrapperComponent;return null!=o&&(n=u.createElement(o,null,n)),u.createElement(h,{style:v.appContainer,pointerEvents:"box-none"},n,null,this.state.inspector)}}]),c})(u.Component);f.childContextTypes={rootTag:p.number};var v=c.create({appContainer:{flex:1}});m.exports=f},275,[15,16,17,20,21,52,73,48,61,92,62,89]);