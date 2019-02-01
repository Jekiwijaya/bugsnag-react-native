__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),l=r(d[4]),u=r(d[5]),c=r(d[6]),p=r(d[7]),f=r(d[8]),h=r(d[9]),C=r(d[10]),y=(r(d[11]),r(d[12])),v=r(d[13]),_=c({},C.defaultProps,{numColumns:1}),b=(function(_){function b(t){var l;return n(this,b),(l=o(this,s(b).call(this,t)))._hasWarnedLegacy=!1,l._virtualizedListPairs=[],l._captureRef=function(t){l._listRef=t},l._getItem=function(t,n){var o=l.props.numColumns;if(o>1){for(var s=[],u=0;u<o;u++){var c=t[n*o+u];null!=c&&s.push(c)}return s}return t[n]},l._getItemCount=function(t){return t?Math.ceil(t.length/l.props.numColumns):0},l._keyExtractor=function(t,n){var o=l.props,s=o.keyExtractor,u=o.numColumns;return u>1?(v(Array.isArray(t),"FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.",u),t.map(function(t,o){return s(t,n*u+o)}).join(':')):s(t,n)},l._renderItem=function(t){var n=l.props,o=n.renderItem,s=n.numColumns,u=n.columnWrapperStyle;if(s>1){var c=t.item,p=t.index;return v(Array.isArray(c),'Expected array of items with numColumns > 1'),f.createElement(h,{style:y.compose(w.row,u)},c.map(function(n,l){var u=o({item:n,index:p*s+l,separators:t.separators});return u&&f.cloneElement(u,{key:l})}))}return o(t)},l._checkProps(l.props),l.props.viewabilityConfigCallbackPairs?l._virtualizedListPairs=l.props.viewabilityConfigCallbackPairs.map(function(t){return{viewabilityConfig:t.viewabilityConfig,onViewableItemsChanged:l._createOnViewableItemsChanged(t.onViewableItemsChanged)}}):l.props.onViewableItemsChanged&&l._virtualizedListPairs.push({viewabilityConfig:l.props.viewabilityConfig,onViewableItemsChanged:l._createOnViewableItemsChanged(l.props.onViewableItemsChanged)}),l}return u(b,_),l(b,[{key:"scrollToEnd",value:function(t){this._listRef&&this._listRef.scrollToEnd(t)}},{key:"scrollToIndex",value:function(t){this._listRef&&this._listRef.scrollToIndex(t)}},{key:"scrollToItem",value:function(t){this._listRef&&this._listRef.scrollToItem(t)}},{key:"scrollToOffset",value:function(t){this._listRef&&this._listRef.scrollToOffset(t)}},{key:"recordInteraction",value:function(){this._listRef&&this._listRef.recordInteraction()}},{key:"flashScrollIndicators",value:function(){this._listRef&&this._listRef.flashScrollIndicators()}},{key:"getScrollResponder",value:function(){if(this._listRef)return this._listRef.getScrollResponder()}},{key:"getScrollableNode",value:function(){if(this._listRef)return this._listRef.getScrollableNode()}},{key:"setNativeProps",value:function(t){this._listRef&&this._listRef.setNativeProps(t)}}]),l(b,[{key:"componentDidUpdate",value:function(t){v(t.numColumns===this.props.numColumns,"Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component."),v(t.onViewableItemsChanged===this.props.onViewableItemsChanged,'Changing onViewableItemsChanged on the fly is not supported'),v(t.viewabilityConfig===this.props.viewabilityConfig,'Changing viewabilityConfig on the fly is not supported'),v(t.viewabilityConfigCallbackPairs===this.props.viewabilityConfigCallbackPairs,'Changing viewabilityConfigCallbackPairs on the fly is not supported'),this._checkProps(this.props)}},{key:"_checkProps",value:function(t){var n=t.getItem,o=t.getItemCount,s=t.horizontal,l=t.legacyImplementation,u=t.numColumns,c=t.columnWrapperStyle,p=t.onViewableItemsChanged,f=t.viewabilityConfigCallbackPairs;v(!n&&!o,'FlatList does not support custom data formats.'),u>1?v(!s,'numColumns does not support horizontal.'):v(!c,'columnWrapperStyle not supported for single column lists'),l&&(v(1===u,'Legacy list does not support multiple columns.'),this._hasWarnedLegacy||(console.warn("FlatList: legacyImplementation is deprecated and will be removed in a future release - some features not supported and performance may suffer. Please migrate to the default implementation."),this._hasWarnedLegacy=!0)),v(!(p&&f),"FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.")}},{key:"_pushMultiColumnViewable",value:function(t,n){var o=this.props,s=o.numColumns,l=o.keyExtractor;n.item.forEach(function(o,u){v(null!=n.index,'Missing index!');var p=n.index*s+u;t.push(c({},n,{item:o,key:l(o,p),index:p}))})}},{key:"_createOnViewableItemsChanged",value:function(t){var n=this;return function(o){var s=n.props.numColumns;if(t)if(s>1){var l=[],u=[];o.viewableItems.forEach(function(t){return n._pushMultiColumnViewable(u,t)}),o.changed.forEach(function(t){return n._pushMultiColumnViewable(l,t)}),t({viewableItems:u,changed:l})}else t(o)}}},{key:"render",value:function(){return this.props.legacyImplementation?f.createElement(p,t({},this.props,{items:this.props.data,ref:this._captureRef})):f.createElement(C,t({},this.props,{renderItem:this._renderItem,getItem:this._getItem,getItemCount:this._getItemCount,keyExtractor:this._keyExtractor,ref:this._captureRef,viewabilityConfigCallbackPairs:this._virtualizedListPairs}))}}]),b})(f.PureComponent);b.defaultProps=_;var w=y.create({row:{flexDirection:'row'}});m.exports=b},231,[26,15,17,20,16,21,59,232,61,89,250,233,62,28]);