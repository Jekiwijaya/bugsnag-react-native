__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),o=r(d[1]),n=(r(d[2]),r(d[3]).BlobModule),u=null;n&&'string'==typeof n.BLOB_URI_SCHEME&&(u=n.BLOB_URI_SCHEME+':','string'==typeof n.BLOB_URI_HOST&&(u+="//"+n.BLOB_URI_HOST+"/"));var f=(function(){function n(){throw t(this,n),new Error('Creating URL objects is not supported yet.')}return o(n,null,[{key:"createObjectURL",value:function(t){if(null===u)throw new Error('Cannot create URL for blob!');return""+u+t.data.blobId+"?offset="+t.data.offset+"&size="+t.size}},{key:"revokeObjectURL",value:function(t){}}]),n})();m.exports=f},139,[15,16,129,30]);