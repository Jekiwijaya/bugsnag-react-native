__d(function(g,r,i,a,m,e,d){'use strict';var o=r(d[0]),t=r(d[1]),n=r(d[2]),s=r(d[3]),w=r(d[4]),l=r(d[5]),u=r(d[6]),p=r(d[7]),c=r(d[8]),h=r(d[9]),D=r(d[10]),f=r(d[11]),C=r(d[12]),b=D.AndroidDrawerLayout.Constants,S=r(d[13]),k=r(d[14]),y=r(d[15]),B=['Idle','Dragging','Settling'],_=S({displayName:'DrawerLayoutAndroid',statics:{positions:b.DrawerPosition},propTypes:t({},C,{keyboardDismissMode:u.oneOf(['none','on-drag']),drawerBackgroundColor:n,drawerPosition:u.oneOf([b.DrawerPosition.Left,b.DrawerPosition.Right]),drawerWidth:u.number,drawerLockMode:u.oneOf(['unlocked','locked-closed','locked-open']),onDrawerSlide:u.func,onDrawerStateChanged:u.func,onDrawerOpen:u.func,onDrawerClose:u.func,renderNavigationView:u.func.isRequired,statusBarBackgroundColor:n}),mixins:[s],getDefaultProps:function(){return{drawerBackgroundColor:'white'}},getInitialState:function(){return{statusBarBackgroundColor:void 0}},getInnerViewNode:function(){return this.refs.innerView.getInnerViewNode()},render:function(){var t=w.Version>=21&&this.props.statusBarBackgroundColor,n=l.createElement(f,{style:[v.drawerSubview,{width:this.props.drawerWidth,backgroundColor:this.props.drawerBackgroundColor}],collapsable:!1},this.props.renderNavigationView(),t&&l.createElement(f,{style:v.drawerStatusBar})),s=l.createElement(f,{ref:"innerView",style:v.mainSubview,collapsable:!1},t&&l.createElement(c,{translucent:!0,backgroundColor:this.props.statusBarBackgroundColor}),t&&l.createElement(f,{style:[v.statusBar,{backgroundColor:this.props.statusBarBackgroundColor}]}),this.props.children);return l.createElement(L,o({},this.props,{ref:"drawerlayout",drawerWidth:this.props.drawerWidth,drawerPosition:this.props.drawerPosition,drawerLockMode:this.props.drawerLockMode,style:[v.base,this.props.style],onDrawerSlide:this._onDrawerSlide,onDrawerOpen:this._onDrawerOpen,onDrawerClose:this._onDrawerClose,onDrawerStateChanged:this._onDrawerStateChanged}),s,n)},_onDrawerSlide:function(o){this.props.onDrawerSlide&&this.props.onDrawerSlide(o),'on-drag'===this.props.keyboardDismissMode&&k()},_onDrawerOpen:function(){this.props.onDrawerOpen&&this.props.onDrawerOpen()},_onDrawerClose:function(){this.props.onDrawerClose&&this.props.onDrawerClose()},_onDrawerStateChanged:function(o){this.props.onDrawerStateChanged&&this.props.onDrawerStateChanged(B[o.nativeEvent.drawerState])},openDrawer:function(){D.dispatchViewManagerCommand(this._getDrawerLayoutHandle(),D.AndroidDrawerLayout.Commands.openDrawer,null)},closeDrawer:function(){D.dispatchViewManagerCommand(this._getDrawerLayoutHandle(),D.AndroidDrawerLayout.Commands.closeDrawer,null)},_getDrawerLayoutHandle:function(){return p.findNodeHandle(this.refs.drawerlayout)}}),v=h.create({base:{flex:1,elevation:16},mainSubview:{position:'absolute',top:0,left:0,right:0,bottom:0},drawerSubview:{position:'absolute',top:0,bottom:0},statusBar:{height:c.currentHeight},drawerStatusBar:{position:'absolute',top:0,left:0,right:0,height:c.currentHeight,backgroundColor:'rgba(0, 0, 0, 0.251)'}}),L=y('AndroidDrawerLayout');m.exports=_},264,[26,59,68,261,57,61,73,92,265,62,56,89,256,196,242,159]);