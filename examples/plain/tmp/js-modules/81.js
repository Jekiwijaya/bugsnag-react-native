__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=t({},r(d[3]),{color:n,fontFamily:o.string,fontSize:o.number,fontStyle:o.oneOf(['normal','italic']),fontWeight:o.oneOf(['normal','bold','100','200','300','400','500','600','700','800','900']),fontVariant:o.arrayOf(o.oneOf(['small-caps','oldstyle-nums','lining-nums','tabular-nums','proportional-nums'])),textShadowOffset:o.shape({width:o.number,height:o.number}),textShadowRadius:o.number,textShadowColor:n,letterSpacing:o.number,lineHeight:o.number,textAlign:o.oneOf(['auto','left','right','center','justify']),textAlignVertical:o.oneOf(['auto','top','bottom','center']),includeFontPadding:o.bool,textDecorationLine:o.oneOf(['none','underline','line-through','underline line-through']),textDecorationStyle:o.oneOf(['solid','double','dotted','dashed']),textDecorationColor:n,textTransform:o.oneOf(['none','capitalize','uppercase','lowercase']),writingDirection:o.oneOf(['auto','ltr','rtl'])});m.exports=l},81,[59,68,73,82]);