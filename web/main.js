(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.ft(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cF(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cs:function cs(){},
e7:function(){return new P.b2("No element")},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
S:function S(){},
dF:function(a){var t,s=H.dE(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
h2:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bu(a)
if(typeof t!="string")throw H.e(H.dl(a))
return t},
bB:function(a){var t=H.e9(a)
return t},
e9:function(a){var t,s,r
if(a instanceof P.n)return H.x(H.Y(a),null)
if(J.bs(a)===C.r||u.o.b(a)){t=C.d(a)
if(H.cX(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cX(r))return r}}return H.x(H.Y(a),null)},
cX:function(a){var t=a!=="Object"&&a!==""
return t},
fi:function(a){throw H.e(H.dl(a))},
aD:function(a,b){if(a==null)J.cp(a)
throw H.e(H.dp(a,b))},
dp:function(a,b){var t,s,r="index"
if(!H.df(b))return new P.A(!0,b,r,null)
t=H.br(J.cp(a))
if(!(b<0)){if(typeof t!=="number")return H.fi(t)
s=b>=t}else s=!0
if(s)return P.cU(b,a,r,null,t)
return P.ea(b,r)},
dl:function(a){return new P.A(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.aY()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.dD})
t.name=""}else t.toString=H.dD
return t},
dD:function(){return J.bu(this.dartException)},
cI:function(a){throw H.e(a)},
fs:function(a){throw H.e(P.cS(a))},
G:function(a){var t,s,r,q,p,o
a=H.dz(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.dA([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
d_:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cW:function(a,b){return new H.aX(a,b==null?null:b.method)},
ct:function(a,b){var t=b==null,s=t?null:b.method
return new H.aR(a,s,t?null:b.receiver)},
P:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.co(a)
if(a==null)return f
if(a instanceof H.ad)return e.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.t.a5(s,16)&8191)===10)switch(r){case 438:return e.$1(H.ct(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.cW(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.dH()
p=$.dI()
o=$.dJ()
n=$.dK()
m=$.dN()
l=$.dO()
k=$.dM()
$.dL()
j=$.dQ()
i=$.dP()
h=q.m(t)
if(h!=null)return e.$1(H.ct(H.a3(t),h))
else{h=p.m(t)
if(h!=null){h.method="call"
return e.$1(H.ct(H.a3(t),h))}else{h=o.m(t)
if(h==null){h=n.m(t)
if(h==null){h=m.m(t)
if(h==null){h=l.m(t)
if(h==null){h=k.m(t)
if(h==null){h=n.m(t)
if(h==null){h=j.m(t)
if(h==null){h=i.m(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.cW(H.a3(t),h))}}return e.$1(new H.b6(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ak()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.A(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ak()
return a},
E:function(a){var t
if(a instanceof H.ad)return a.b
if(a==null)return new H.as(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.as(a)},
fm:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.br(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bQ("Unsupported number of arguments for wrapped closure"))},
aB:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fm)
a.$identity=t
return t},
e5:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.b3().constructor.prototype):Object.create(new H.a9(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.F
if(typeof s!=="number")return s.k()
$.F=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.cR(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.e1(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cR(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
e1:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.du,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
t=c?H.e_:H.dZ
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.e("Error in functionType of tearoff")},
e2:function(a,b,c,d){var t=H.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cR:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.e4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.e2(s,!q,t,b)
if(s===0){q=$.F
if(typeof q!=="number")return q.k()
$.F=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aa
return new Function(q+H.d(p==null?$.aa=H.bx("self"):p)+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.F
if(typeof q!=="number")return q.k()
$.F=q+1
n+=q
q="return function("+n+"){return this."
p=$.aa
return new Function(q+H.d(p==null?$.aa=H.bx("self"):p)+"."+H.d(t)+"("+n+");}")()},
e3:function(a,b,c,d){var t=H.cP,s=H.e0
switch(b?-1:a){case 0:throw H.e(H.ed("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
e4:function(a,b){var t,s,r,q,p,o,n,m=$.aa
if(m==null)m=$.aa=H.bx("self")
t=$.cO
if(t==null)t=$.cO=H.bx("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.e3(r,!p,s,b)
if(r===1){m="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.F
if(typeof t!=="number")return t.k()
$.F=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.F
if(typeof t!=="number")return t.k()
$.F=t+1
return new Function(m+t+"}")()},
cF:function(a,b,c,d,e,f,g){return H.e5(a,b,c,d,!!e,!!f,g)},
dZ:function(a,b){return H.bp(v.typeUniverse,H.Y(a.a),b)},
e_:function(a,b){return H.bp(v.typeUniverse,H.Y(a.c),b)},
cP:function(a){return a.a},
e0:function(a){return a.c},
bx:function(a){var t,s,r,q=new H.a9("self","target","receiver","name"),p=J.e8(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
dn:function(a){if(a==null)H.f8("boolean expression must not be null")
return a},
f8:function(a){throw H.e(new H.b9(a))},
ft:function(a){throw H.e(new P.aI(a))},
ed:function(a){return new H.b0(a)},
dr:function(a){return v.getIsolateTag(a)},
dA:function(a,b){a[v.arrayRti]=b
return a},
ds:function(a){if(a==null)return null
return a.$ti},
h1:function(a,b,c){return H.dC(a["$a"+H.d(c)],H.ds(b))},
dC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
h_:function(a,b,c){return a.apply(b,H.dC(J.bs(b)["$a"+H.d(c)],H.ds(b)))},
h0:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fo:function(a){var t,s,r,q,p=H.a3($.dt.$1(a)),o=$.cf[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.ck[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.a3($.dk.$2(a,p))
if(p!=null){o=$.cf[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.ck[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.cn(t)
$.cf[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.ck[p]=t
return t}if(r==="-"){q=H.cn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.dx(a,t)
if(r==="*")throw H.e(P.cv(p))
if(v.leafTags[p]===true){q=H.cn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.dx(a,t)},
dx:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cH(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn:function(a){return J.cH(a,!1,null,!!a.$iI)},
fp:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.cn(t)
else return J.cH(t,c,null,null)},
fk:function(){if(!0===$.cG)return
$.cG=!0
H.fl()},
fl:function(){var t,s,r,q,p,o,n,m
$.cf=Object.create(null)
$.ck=Object.create(null)
H.fj()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dy.$1(p)
if(o!=null){n=H.fp(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fj:function(){var t,s,r,q,p,o,n=C.i()
n=H.a6(C.j,H.a6(C.k,H.a6(C.e,H.a6(C.e,H.a6(C.l,H.a6(C.m,H.a6(C.n(C.d),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dt=new H.ch(q)
$.dk=new H.ci(p)
$.dy=new H.cj(o)},
a6:function(a,b){return a(b)||b},
fe:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
dz:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dB:function(a,b,c){var t=H.fr(a,b,c)
return t},
fr:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.dz(b),'g'),H.fe(c))},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aX:function aX(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
co:function co(a){this.a=a},
as:function as(a){this.a=a
this.b=null},
R:function R(){},
b4:function b4(){},
b3:function b3(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a){this.a=a},
b9:function b9(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
cj:function cj(a){this.a=a},
db:function(a,b,c){},
cC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.dp(b,a))},
aT:function aT(){},
aU:function aU(){},
ah:function ah(){},
ai:function ai(){},
aV:function aV(){},
aj:function aj(){},
aW:function aW(){},
aq:function aq(){},
ar:function ar(){},
ec:function(a,b){var t=b.c
return t==null?b.c=H.cz(a,b.z,!0):t},
cY:function(a,b){var t=b.c
return t==null?b.c=H.au(a,"H",[b.z]):t},
cZ:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cZ(a.z)
return t===11||t===12},
eb:function(a){return a.cy},
ff:function(a){return H.cA(v.typeUniverse,a,!1)},
N:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.N(a,t,c,a0)
if(s===t)return b
return H.d7(a,s,!0)
case 7:t=b.z
s=H.N(a,t,c,a0)
if(s===t)return b
return H.cz(a,s,!0)
case 8:t=b.z
s=H.N(a,t,c,a0)
if(s===t)return b
return H.d6(a,s,!0)
case 9:r=b.Q
q=H.az(a,r,c,a0)
if(q===r)return b
return H.au(a,b.z,q)
case 10:p=b.z
o=H.N(a,p,c,a0)
n=b.Q
m=H.az(a,n,c,a0)
if(o===p&&m===n)return b
return H.cx(a,o,m)
case 11:l=b.z
k=H.N(a,l,c,a0)
j=b.Q
i=H.f3(a,j,c,a0)
if(k===l&&i===j)return b
return H.d5(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.az(a,h,c,a0)
p=b.z
o=H.N(a,p,c,a0)
if(g===h&&o===p)return b
return H.cy(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.e(P.bv("Attempted to substitute unexpected RTI kind "+d))}},
az:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.N(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
f4:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.N(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
f3:function(a,b,c,d){var t,s=b.a,r=H.az(a,s,c,d),q=b.b,p=H.az(a,q,c,d),o=b.c,n=H.f4(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bi()
t.a=r
t.b=p
t.c=n
return t},
fc:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.du(t)
return a.$S()}return null},
dv:function(a,b){var t
if(H.cZ(b))if(a instanceof H.R){t=H.fc(a)
if(t!=null)return t}return H.Y(a)},
Y:function(a){var t
if(a instanceof P.n){t=a.$ti
return t!=null?t:H.cD(a)}if(Array.isArray(a))return H.cB(a)
return H.cD(J.bs(a))},
cB:function(a){var t=a[v.arrayRti],s=u.t
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aw:function(a){var t=a.$ti
return t!=null?t:H.cD(a)},
cD:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eQ(a,t)},
eQ:function(a,b){var t=a instanceof H.R?a.__proto__.__proto__.constructor:b,s=H.eD(v.typeUniverse,t.name)
b.$ccache=s
return s},
du:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.cA(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
eP:function(a){var t=this,s=H.eO,r=u.K
if(t===r){s=H.eS
t.a=H.eE}else if(H.O(t)||t===r){s=H.eW
t.a=H.eF}else if(t===u.S)s=H.df
else if(t===u.i)s=H.dg
else if(t===u.D)s=H.dg
else if(t===u.N)s=H.eT
else if(t===u.y)s=H.dd
else if(t.y===9){r=t.z
if(t.Q.every(H.fn)){t.r="$i"+r
s=H.eU}}t.b=s
return t.b(a)},
eO:function(a){var t=this
return H.m(v.typeUniverse,H.dv(a,t),null,t,null)},
eU:function(a){var t=this,s=t.r
if(a instanceof P.n)return!!a[s]
return!!J.bs(a)[s]},
eN:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.e(H.et(H.d2(a,H.dv(a,t),H.x(t,null))))},
d2:function(a,b,c){var t=P.aJ(a),s=H.x(b==null?H.Y(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
et:function(a){return new H.at("TypeError: "+a)},
bm:function(a,b){return new H.at("TypeError: "+H.d2(a,null,b))},
eS:function(a){return!0},
eE:function(a){return a},
eW:function(a){return!0},
eF:function(a){return a},
dd:function(a){return!0===a||!1===a},
fW:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.e(H.bm(a,"bool"))},
fX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.bm(a,"double"))},
df:function(a){return typeof a=="number"&&Math.floor(a)===a},
br:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.bm(a,"int"))},
dg:function(a){return typeof a=="number"},
fY:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.bm(a,"num"))},
eT:function(a){return typeof a=="string"},
a3:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.bm(a,"String"))},
f0:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.b.k(s,H.x(a[r],b))
return t},
dc:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.dA([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)C.f.N(a2,"T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.aD(a2,l)
o=C.b.k(o,a2[l])
k=a3[q]
if(!(H.O(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.b.k(" extends ",H.x(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.x(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.b.k(a,H.x(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.b.k(a,H.x(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.b.k(a,H.x(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.d(c)},
x:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.x(a.z,b)
return t}if(m===7){s=a.z
t=H.x(s,b)
r=s.y
return J.dS(r===11||r===12?C.b.k("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.x(a.z,b))+">"
if(m===9){q=H.f5(a.z)
p=a.Q
return p.length!==0?q+("<"+H.f0(p,b)+">"):q}if(m===11)return H.dc(a,b,null)
if(m===12)return H.dc(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.aD(b,o)
return b[o]}return"?"},
f5:function(a){var t,s=H.dE(a)
if(s!=null)return s
t="minified:"+a
return t},
d9:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eD:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cA(a,b,!1)
else if(typeof n=="number"){t=n
s=H.av(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.au(a,b,r)
o[b]=p
return p}else return n},
eB:function(a,b){return H.da(a.tR,b)},
eA:function(a,b){return H.da(a.eT,b)},
cA:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.d8(a,null,b,c)
s.set(b,t)
return t},
bp:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.d8(a,b,c,!0)
r.set(c,s)
return s},
eC:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cx(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
d8:function(a,b,c,d){var t=H.eq(H.em(a,b,c,d))
if(t!=null)return t
throw H.e(P.cv('_Universe._parseRecipe("'+H.d(c)+'")'))},
M:function(a,b){b.a=H.eN
b.b=H.eP
return b},
av:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.u(null,null)
t.y=b
t.cy=c
s=H.M(a,t)
a.eC.set(c,s)
return s},
d7:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ey(a,b,s,c)
a.eC.set(s,t)
return t},
ey:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.O(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.u(null,null)
s.y=6
s.z=b
s.cy=c
return H.M(a,s)},
cz:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.ex(a,b,s,c)
a.eC.set(s,t)
return t},
ex:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.O(b))if(!(b===u.P))if(t!==7)s=t===8&&H.cl(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.cl(r.z))return r
else return H.ec(a,b)}}p=new H.u(null,null)
p.y=7
p.z=b
p.cy=c
return H.M(a,p)},
d6:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.ev(a,b,s,c)
a.eC.set(s,t)
return t},
ev:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.O(b)||b===u.K||b===u.K)return b
else if(t===1)return H.au(a,"H",[b])
else if(b===u.P)return u.f}s=new H.u(null,null)
s.y=8
s.z=b
s.cy=c
return H.M(a,s)},
ez:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.u(null,null)
t.y=13
t.z=b
t.cy=r
s=H.M(a,t)
a.eC.set(r,s)
return s},
bo:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
eu:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
au:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.bo(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.u(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.M(a,s)
a.eC.set(q,r)
return r},
cx:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.bo(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.u(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.M(a,p)
a.eC.set(r,o)
return o},
d5:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.bo(o)
if(l>0)i+=(n>0?",":"")+"["+H.bo(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.eu(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.u(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.M(a,r)
a.eC.set(t,q)
return q},
cy:function(a,b,c,d){var t,s=b.cy+"<"+H.bo(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.ew(a,b,c,s,d)
a.eC.set(s,t)
return t},
ew:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.N(a,b,s,0)
n=H.az(a,c,s,0)
return H.cy(a,o,n,c!==n)}}m=new H.u(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.M(a,m)},
em:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eq:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.en(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.d4(a,s,h,g,!1)
else if(r===46)s=H.d4(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.L(a.u,a.e,g.pop()))
break
case 94:g.push(H.ez(a.u,g.pop()))
break
case 35:g.push(H.av(a.u,5,"#"))
break
case 64:g.push(H.av(a.u,2,"@"))
break
case 126:g.push(H.av(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cw(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.au(q,o,p))
else{n=H.L(q,a.e,o)
switch(n.y){case 11:g.push(H.cy(q,n,p,a.n))
break
default:g.push(H.cx(q,n,p))
break}}break
case 38:H.eo(a,g)
break
case 42:m=a.u
g.push(H.d7(m,H.L(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.cz(m,H.L(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.d6(m,H.L(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.bi()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.cw(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.d5(q,H.L(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cw(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.er(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.L(a.u,a.e,i)},
en:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d4:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.d9(t,p.z)[q]
if(o==null)H.cI('No "'+q+'" in "'+H.eb(p)+'"')
d.push(H.bp(t,p,o))}else d.push(q)
return n},
eo:function(a,b){var t=b.pop()
if(0===t){b.push(H.av(a.u,1,"0&"))
return}if(1===t){b.push(H.av(a.u,4,"1&"))
return}throw H.e(P.bv("Unexpected extended operation "+H.d(t)))},
L:function(a,b,c){if(typeof c=="string")return H.au(a,c,a.sEA)
else if(typeof c=="number")return H.ep(a,b,c)
else return c},
cw:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.L(a,b,c[t])},
er:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.L(a,b,c[t])},
ep:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.e(P.bv("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.e(P.bv("Bad index "+c+" for "+b.i(0)))},
m:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.O(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.O(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.m(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.m(a,b.z,c,d,e)
if(r===6){q=d.z
return H.m(a,b,c,q,e)}if(t===8){if(!H.m(a,b.z,c,d,e))return!1
return H.m(a,H.cY(a,b),c,d,e)}if(t===7){q=H.m(a,b.z,c,d,e)
return q}if(r===8){if(H.m(a,b,c,d.z,e))return!0
return H.m(a,b,c,H.cY(a,d),e)}if(r===7){q=H.m(a,b,c,d.z,e)
return q}if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(q=u.h,m=0;m<n;++m){l=p[m]
k=o[m]
q.a(l)
q.a(k)
if(!H.m(a,l,c,k,e)||!H.m(a,k,e,l,c))return!1}return H.de(a,b.z,c,d.z,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return H.de(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.eR(a,b,c,d,e)}return!1},
de:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(!H.m(a0,a1.z,a2,a3.z,a4))return!1
t=a1.Q
s=a3.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.m(a0,q[i],a4,h,a2))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.m(a0,q[p+i],a4,h,a2))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.m(a0,l[i],a4,h,a2))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(i=0,c=0;c<d;c+=2){b=f[c]
do{if(i>=e)return!1
a=g[i]
i+=2}while(a<b)
if(b<a)return!1
h=g[i-1]
if(!H.m(a0,f[c+1],a4,h,a2))return!1}return!0},
eR:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.m(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.d9(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.m(a,H.bp(a,b,m[q]),c,s[q],e))return!1
return!0},
cl:function(a){var t,s=a.y
if(!(a===u.P))if(!H.O(a))if(s!==7)if(!(s===6&&H.cl(a.z)))t=s===8&&H.cl(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fn:function(a){return H.O(a)||a===u.K},
O:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
da:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
u:function u(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bi:function bi(){this.c=this.b=this.a=null},
bf:function bf(){},
at:function at(a){this.a=a},
dE:function(a){return v.mangledGlobalNames[a]}},J={
cH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bt:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cG==null){H.fk()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.e(P.cv("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[$.cJ()]
if(q!=null)return q
q=H.fo(a)
if(q!=null)return q
if(typeof a=="function")return C.u
t=Object.getPrototypeOf(a)
if(t==null)return C.h
if(t===Object.prototype)return C.h
if(typeof r=="function"){Object.defineProperty(r,$.cJ(),{value:C.c,enumerable:false,writable:true,configurable:true})
return C.c}return C.c},
e8:function(a){a.fixed$length=Array
return a},
bs:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.af.prototype
return J.aP.prototype}if(typeof a=="string")return J.U.prototype
if(a==null)return J.aQ.prototype
if(typeof a=="boolean")return J.aO.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.n)return a
return J.bt(a)},
fg:function(a){if(typeof a=="number")return J.ag.prototype
if(typeof a=="string")return J.U.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.n)return a
return J.bt(a)},
dq:function(a){if(typeof a=="string")return J.U.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.n)return a
return J.bt(a)},
fh:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.n)return a
return J.bt(a)},
cg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.D.prototype
return a}if(a instanceof P.n)return a
return J.bt(a)},
dS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fg(a).k(a,b)},
dT:function(a,b,c,d){return J.cg(a).Z(a,b,c,d)},
dU:function(a,b,c,d){return J.cg(a).a3(a,b,c,d)},
cL:function(a){return J.cg(a).gP(a)},
dV:function(a){return J.fh(a).gE(a)},
cp:function(a){return J.dq(a).gj(a)},
dW:function(a){return J.cg(a).gU(a)},
bu:function(a){return J.bs(a).i(a)},
o:function o(){},
aO:function aO(){},
aQ:function aQ(){},
J:function J(){},
aZ:function aZ(){},
an:function an(){},
D:function D(){},
t:function t(a){this.$ti=a},
bA:function bA(a){this.$ti=a},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ag:function ag(){},
af:function af(){},
aP:function aP(){},
U:function U(){}},P={
eh:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.f9()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.aB(new P.bL(r),1)).observe(t,{childList:true})
return new P.bK(r,t,s)}else if(self.setImmediate!=null)return P.fa()
return P.fb()},
ei:function(a){self.scheduleImmediate(H.aB(new P.bM(u.M.a(a)),0))},
ej:function(a){self.setImmediate(H.aB(new P.bN(u.M.a(a)),0))},
ek:function(a){u.M.a(a)
P.es(0,a)},
es:function(a,b){var t=new P.c6()
t.Y(a,b)
return t},
eX:function(a){return new P.ba(new P.l($.h,a.h("l<0>")),a.h("ba<0>"))},
eJ:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
eG:function(a,b){P.eK(a,b)},
eI:function(a,b){var t,s,r
b.toString
t=b.$ti
t.h("1/").a(a)
s=!b.b||t.h("H<1>").b(a)
r=b.a
if(s)r.a_(a)
else r.I(t.c.a(a))},
eH:function(a,b){var t,s=H.P(a),r=H.E(a)
b.toString
if(r==null)r=P.cq(s)
t=b.a
if(b.b)t.n(s,r)
else t.a0(s,r)},
eK:function(a,b){var t,s,r=new P.c8(b),q=new P.c9(b)
if(a instanceof P.l)a.M(r,q,u.z)
else{t=u.z
if(u.c.b(a))a.G(r,q,t)
else{s=new P.l($.h,u._)
s.a=4
s.c=a
s.M(r,q,t)}}},
f6:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.h.S(new P.cc(t),u.P,u.S,u.z)},
d3:function(a,b){var t,s,r
b.a=1
try{a.G(new P.bV(b),new P.bW(b),u.P)}catch(r){t=H.P(r)
s=H.E(r)
P.fq(new P.bX(b,t,s))}},
bU:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.u()
b.a=a.a
b.c=a.c
P.a2(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.L(r)}},
a2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d={},c=d.a=a
for(t=u.n,s=u.x,r=u.c;!0;){q={}
p=c.a===8
if(b==null){if(p){o=t.a(c.c)
P.ca(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.a2(d.a,b)}c=d.a
m=c.c
q.a=p
q.b=m
l=!p
if(l){k=b.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){k=b.b
j=k.b
if(p){i=c.b===j
i=!(i||i)}else i=!1
if(i){t.a(m)
P.ca(e,e,c.b,m.a,m.b)
return}h=$.h
if(h!==j)$.h=j
else h=e
c=b.c
if((c&15)===8)new P.c1(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.c0(q,b,m).$0()}else if((c&2)!==0)new P.c_(d,q,b).$0()
if(h!=null)$.h=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.v(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.bU(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.v(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
eZ:function(a,b){var t
if(u.Q.b(a))return b.S(a,u.z,u.K,u.l)
t=u.v
if(t.b(a))return t.a(a)
throw H.e(P.cN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
eY:function(){var t,s
for(;t=$.a4,t!=null;){$.ay=null
s=t.b
$.a4=s
if(s==null)$.ax=null
t.a.$0()}},
f2:function(){$.cE=!0
try{P.eY()}finally{$.ay=null
$.cE=!1
if($.a4!=null)$.cK().$1(P.dm())}},
dj:function(a){var t=new P.bb(a)
if($.a4==null){$.a4=$.ax=t
if(!$.cE)$.cK().$1(P.dm())}else $.ax=$.ax.b=t},
f1:function(a){var t,s,r=$.a4
if(r==null){P.dj(a)
$.ay=$.ax
return}t=new P.bb(a)
s=$.ay
if(s==null){t.b=r
$.a4=$.ay=t}else{t.b=s.b
$.ay=s.b=t
if(t.b==null)$.ax=t}},
fq:function(a){var t=null,s=$.h
if(C.a===s){P.a5(t,t,C.a,a)
return}P.a5(t,t,s,u.M.a(s.O(a)))},
fH:function(a,b){if(a==null)H.cI(P.cM("stream"))
return new P.bk(b.h("bk<0>"))},
eL:function(a,b,c){a.a8()
b.B(c)},
bw:function(a,b){var t=b==null?P.cq(a):b
P.dX(a,"error",u.K)
return new P.a8(a,t)},
cq:function(a){var t
if(u.C.b(a)){t=a.gw()
if(t!=null)return t}return C.o},
ca:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.A(!1,null,"error","Must not be null")
t.b=P.ee()}P.f1(new P.cb(t))},
dh:function(a,b,c,d,e){var t,s=$.h
if(s===c)return d.$0()
$.h=c
t=s
try{s=d.$0()
return s}finally{$.h=t}},
di:function(a,b,c,d,e,f,g){var t,s=$.h
if(s===c)return d.$1(e)
$.h=c
t=s
try{s=d.$1(e)
return s}finally{$.h=t}},
f_:function(a,b,c,d,e,f,g,h,i){var t,s=$.h
if(s===c)return d.$2(e,f)
$.h=c
t=s
try{s=d.$2(e,f)
return s}finally{$.h=t}},
a5:function(a,b,c,d){var t
u.M.a(d)
t=C.a!==c
if(t)d=!(!t||!1)?c.O(d):c.a6(d,u.H)
P.dj(d)},
bL:function bL(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a){this.a=a},
bN:function bN(a){this.a=a},
c6:function c6(){},
c7:function c7(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=!1
this.$ti=b},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
cc:function cc(a){this.a=a},
W:function W(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bR:function bR(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a){this.a=a},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a){this.a=a
this.b=null},
al:function al(){},
bE:function bE(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.a=a},
am:function am(){},
bk:function bk(a){this.$ti=a},
a8:function a8(a,b){this.a=a
this.b=b},
bq:function bq(){},
cb:function cb(a){this.a=a},
bj:function bj(){},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function(a,b,c){var t,s
if(P.eV(a))return b+"..."+c
t=new P.bG(b)
C.f.N($.aA,a)
try{s=t
s.a=P.ef(s.a,a,", ")}finally{if(0>=$.aA.length)return H.aD($.aA,-1)
$.aA.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eV:function(a){var t,s
for(t=$.aA.length,s=0;s<t;++s)if(a===$.aA[s])return!0
return!1},
q:function q(){},
e6:function(a){if(a instanceof H.R)return a.i(0)
return"Instance of '"+H.d(H.bB(a))+"'"},
ef:function(a,b,c){var t=J.dV(b)
if(!t.q())return a
if(c.length===0){do a+=H.d(t.gp())
while(t.q())}else{a+=H.d(t.gp())
for(;t.q();)a=a+c+H.d(t.gp())}return a},
ee:function(){var t,s
if(H.dn($.dR()))return H.E(new Error())
try{throw H.e("")}catch(s){H.P(s)
t=H.E(s)
return t}},
aJ:function(a){if(typeof a=="number"||H.dd(a)||null==a)return J.bu(a)
if(typeof a=="string")return JSON.stringify(a)
return P.e6(a)},
bv:function(a){return new P.a7(a)},
cN:function(a,b,c){return new P.A(!0,a,b,c)},
cM:function(a){return new P.A(!1,null,a,"Must not be null")},
dX:function(a,b,c){if(a==null)throw H.e(P.cM(b))
return a},
ea:function(a,b){return new P.b_(null,null,!0,a,b,"Value not in range")},
cU:function(a,b,c,d,e){var t=H.br(e==null?J.cp(b):e)
return new P.aN(t,!0,a,c,"Index out of range")},
d0:function(a){return new P.b7(a)},
cv:function(a){return new P.b5(a)},
cS:function(a){return new P.aH(a)},
X:function X(){},
aC:function aC(){},
i:function i(){},
a7:function a7(a){this.a=a},
aY:function aY(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aN:function aN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b7:function b7(a){this.a=a},
b5:function b5(a){this.a=a},
b2:function b2(a){this.a=a},
aH:function aH(a){this.a=a},
ak:function ak(){},
aI:function aI(a){this.a=a},
bQ:function bQ(a){this.a=a},
f:function f(){},
p:function p(){},
k:function k(){},
z:function z(){},
n:function n(){},
v:function v(){},
bl:function bl(){},
w:function w(){},
bG:function bG(a){this.a=a},
fd:function(a){var t,s
if(u.I.b(a)){t=J.cL(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}s=a.data
a.width
return new P.bn(s)},
bn:function bn(a){this.a=a},
b8:function b8(){}},W={
dY:function(a,b){var t={}
t.type=b
return new self.Blob(a,t)},
bO:function(a,b,c,d,e){var t=W.f7(new W.bP(c),u.A),s=t!=null
if(s&&!0){u.U.a(t)
if(s)J.dT(a,b,t,!1)}return new W.ap(a,b,t,!1,e.h("ap<0>"))},
eM:function(a){var t
if("postMessage" in a){t=W.el(a)
return t}else return u.r.a(a)},
el:function(a){if(a===window)return u.w.a(a)
else return new W.bd()},
f7:function(a,b){var t=$.h
if(t===C.a)return a
return t.a7(a,b)},
c:function c(){},
Z:function Z(){},
aE:function aE(){},
aG:function aG(){},
Q:function Q(){},
ab:function ab(){},
B:function B(){},
ac:function ac(){},
by:function by(){},
bz:function bz(){},
b:function b(){},
a:function a(){},
j:function j(){},
y:function y(){},
aK:function aK(){},
ae:function ae(){},
aM:function aM(){},
T:function T(){},
a1:function a1(){},
r:function r(){},
K:function K(){},
b1:function b1(){},
ao:function ao(){},
cr:function cr(a,b){this.a=a
this.$ti=b},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ap:function ap(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bP:function bP(a){this.a=a},
a0:function a0(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bd:function bd(){},
bc:function bc(){},
bg:function bg(){},
bh:function bh(){}},F={
dw:function(){var t,s,r=u.q.a(document.querySelector("#file"))
r.toString
t=u.E
s=t.h("~(1)").a(new F.cm(r))
u.M.a(null)
W.bO(r,"change",s,!1,t.c)},
cd:function(a,b){var t=0,s=P.eX(u.z),r,q,p,o,n,m,l,k,j
var $async$cd=P.f6(function(c,d){if(c===1)return P.eH(d,s)
while(true)switch(t){case 0:m=u.B.a(J.dW(a)).files
l=new FileReader()
k=new W.V(l,"load",!1,u.u)
j=k.ga9(k)
if(0>=m.length){r=H.aD(m,0)
t=1
break}l.readAsDataURL(m[0])
t=3
return P.eG(j,$async$cd)
case 3:k=document
q=u.d.a(k.querySelector("#canvas"))
p=u.b.a((q&&C.p).V(q,"2d"))
o=H.a3(C.q.gac(l))
n=k.createElement("img")
if(o!=null)n.src=o
k=u.E
o=k.h("~(1)").a(new F.ce(q,n,p,b))
u.M.a(null)
W.bO(n,"load",o,!1,k.c)
case 1:return P.eI(r,s)}})
return P.eJ($async$cd,s)},
cm:function cm(a){this.a=a},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cs.prototype={}
J.o.prototype={
i:function(a){return"Instance of '"+H.d(H.bB(a))+"'"}}
J.aO.prototype={
i:function(a){return String(a)},
$iX:1}
J.aQ.prototype={
i:function(a){return"null"},
$ik:1}
J.J.prototype={
i:function(a){return String(a)}}
J.aZ.prototype={}
J.an.prototype={}
J.D.prototype={
i:function(a){var t=a[$.dG()]
if(t==null)return this.X(a)
return"JavaScript function for "+H.d(J.bu(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ia_:1}
J.t.prototype={
N:function(a,b){H.cB(a).c.a(b)
if(!!a.fixed$length)H.cI(P.d0("add"))
a.push(b)},
i:function(a){return P.cV(a,"[","]")},
gE:function(a){return new J.aF(a,a.length,H.cB(a).h("aF<1>"))},
gj:function(a){return a.length},
$iC:1,
$ip:1}
J.bA.prototype={}
J.aF.prototype={
gp:function(){return this.d},
q:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(H.fs(r))
t=s.c
if(t>=q){s.sJ(null)
return!1}s.sJ(r[t]);++s.c
return!0},
sJ:function(a){this.d=this.$ti.c.a(a)}}
J.ag.prototype={
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a5:function(a,b){var t
if(a>0)t=this.a4(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
a4:function(a,b){return b>31?0:a>>>b},
$iz:1}
J.af.prototype={$if:1}
J.aP.prototype={}
J.U.prototype={
k:function(a,b){if(typeof b!="string")throw H.e(P.cN(b,null,null))
return a+b},
i:function(a){return a},
gj:function(a){return a.length},
$icu:1,
$iw:1}
H.aS.prototype={
gp:function(){return this.d},
q:function(){var t,s=this,r=s.a,q=J.dq(r),p=q.gj(r)
if(s.b!==p)throw H.e(P.cS(r))
t=s.c
if(t>=p){s.sH(null)
return!1}s.sH(q.R(r,t));++s.c
return!0},
sH:function(a){this.d=this.$ti.c.a(a)}}
H.S.prototype={}
H.bH.prototype={
m:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aX.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aR.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.d(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.d(s.a)+")"
return r+q+"' on '"+t+"' ("+H.d(s.a)+")"}}
H.b6.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ad.prototype={}
H.co.prototype={
$1:function(a){if(u.C.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.as.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iv:1}
H.R.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dF(s==null?"unknown":s)+"'"},
$ia_:1,
gah:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.b4.prototype={}
H.b3.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dF(t)+"'"}}
H.a9.prototype={
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bB(t))+"'")}}
H.b0.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.b9.prototype={
i:function(a){return"Assertion failed: "+P.aJ(this.a)}}
H.ch.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.ci.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.cj.prototype={
$1:function(a){return this.a(H.a3(a))},
$S:7}
H.aT.prototype={$icQ:1}
H.aU.prototype={}
H.ah.prototype={
gj:function(a){return a.length},
$iI:1}
H.ai.prototype={$iC:1,$ip:1}
H.aV.prototype={
t:function(a,b){H.cC(b,a,a.length)
return a[b]}}
H.aj.prototype={
gj:function(a){return a.length},
t:function(a,b){H.cC(b,a,a.length)
return a[b]},
$ieg:1}
H.aW.prototype={
gj:function(a){return a.length},
t:function(a,b){H.cC(b,a,a.length)
return a[b]}}
H.aq.prototype={}
H.ar.prototype={}
H.u.prototype={
h:function(a){return H.bp(v.typeUniverse,this,a)},
l:function(a){return H.eC(v.typeUniverse,this,a)}}
H.bi.prototype={}
H.bf.prototype={
i:function(a){return this.a}}
H.at.prototype={}
P.bL.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:4}
P.bK.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:8}
P.bM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bN.prototype={
$0:function(){this.a.$0()},
$S:0}
P.c6.prototype={
Y:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aB(new P.c7(this,b),0),a)
else throw H.e(P.d0("`setTimeout()` not found."))}}
P.c7.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ba.prototype={}
P.c8.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:9}
P.c9.prototype={
$2:function(a,b){this.a.$2(1,new H.ad(a,u.l.a(b)))},
$S:10}
P.cc.prototype={
$2:function(a,b){this.a(H.br(a),b)},
$S:11}
P.W.prototype={
ab:function(a){if((this.c&15)!==6)return!0
return this.b.b.F(u.m.a(this.d),a.a,u.y,u.K)},
aa:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.h("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.ad(t,a.a,a.b,s,r,u.l))
else return q.a(p.F(u.v.a(t),a.a,s,r))}}
P.l.prototype={
G:function(a,b,c){var t,s,r,q=this.$ti
q.l(c).h("1/(2)").a(a)
t=$.h
if(t!==C.a){c.h("@<0/>").l(q.c).h("1(2)").a(a)
if(b!=null)b=P.eZ(b,t)}s=new P.l($.h,c.h("l<0>"))
r=b==null?1:3
this.A(new P.W(s,r,a,b,q.h("@<1>").l(c).h("W<1,2>")))
return s},
ag:function(a,b){return this.G(a,null,b)},
M:function(a,b,c){var t,s=this.$ti
s.l(c).h("1/(2)").a(a)
t=new P.l($.h,c.h("l<0>"))
this.A(new P.W(t,19,a,b,s.h("@<1>").l(c).h("W<1,2>")))
return t},
A:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.A(a)
return}s.a=r
s.c=t.c}P.a5(null,null,s.b,u.M.a(new P.bR(s,a)))}},
L:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.L(a)
return}o.a=t
o.c=p.c}n.a=o.v(a)
P.a5(null,null,o.b,u.M.a(new P.bZ(n,o)))}},
u:function(){var t=u.x.a(this.c)
this.c=null
return this.v(t)},
v:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
B:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
if(r.h("H<1>").b(a))if(r.b(a))P.bU(a,s)
else P.d3(a,s)
else{t=s.u()
r.c.a(a)
s.a=4
s.c=a
P.a2(s,t)}},
I:function(a){var t,s=this
s.$ti.c.a(a)
t=s.u()
s.a=4
s.c=a
P.a2(s,t)},
n:function(a,b){var t,s,r=this
u.l.a(b)
t=r.u()
s=P.bw(a,b)
r.a=8
r.c=s
P.a2(r,t)},
a_:function(a){var t=this,s=t.$ti
s.h("1/").a(a)
if(s.h("H<1>").b(a)){t.a1(a)
return}t.a=1
P.a5(null,null,t.b,u.M.a(new P.bT(t,a)))},
a1:function(a){var t=this,s=t.$ti
s.h("H<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.a5(null,null,t.b,u.M.a(new P.bY(t,a)))}else P.bU(a,t)
return}P.d3(a,t)},
a0:function(a,b){this.a=1
P.a5(null,null,this.b,u.M.a(new P.bS(this,a,b)))},
$iH:1}
P.bR.prototype={
$0:function(){P.a2(this.a,this.b)},
$S:0}
P.bZ.prototype={
$0:function(){P.a2(this.b,this.a.a)},
$S:0}
P.bV.prototype={
$1:function(a){var t=this.a
t.a=0
t.B(a)},
$S:4}
P.bW.prototype={
$2:function(a,b){u.l.a(b)
this.a.n(a,b)},
$1:function(a){return this.$2(a,null)},
$S:12}
P.bX.prototype={
$0:function(){this.a.n(this.b,this.c)},
$S:0}
P.bT.prototype={
$0:function(){var t=this.a
t.I(t.$ti.c.a(this.b))},
$S:0}
P.bY.prototype={
$0:function(){P.bU(this.b,this.a)},
$S:0}
P.bS.prototype={
$0:function(){this.a.n(this.b,this.c)},
$S:0}
P.c1.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.T(u.O.a(r.d),u.z)}catch(q){t=H.P(q)
s=H.E(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.bw(t,s)
p.a=!0
return}if(u.c.b(m)){if(m instanceof P.l&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.ag(new P.c2(o),u.z)
r.a=!1}},
$S:1}
P.c2.prototype={
$1:function(a){return this.a},
$S:13}
P.c0.prototype={
$0:function(){var t,s,r,q,p,o,n,m=this
try{r=m.b
q=r.$ti
p=q.c
o=p.a(m.c)
m.a.b=r.b.b.F(q.h("2/(1)").a(r.d),o,q.h("2/"),p)}catch(n){t=H.P(n)
s=H.E(n)
r=m.a
r.b=P.bw(t,s)
r.a=!0}},
$S:1}
P.c_.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.dn(q.ab(t))&&q.e!=null){p=l.b
p.b=q.aa(t)
p.a=!1}}catch(o){s=H.P(o)
r=H.E(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.bw(s,r)
m.a=!0}},
$S:1}
P.bb.prototype={}
P.al.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.l($.h,u.j)
q.a=0
t=H.aw(r)
s=t.h("~(1)").a(new P.bE(q,r))
u.M.a(new P.bF(q,p))
W.bO(r.a,r.b,s,!1,t.c)
return p},
ga9:function(a){var t,s=this,r={},q=H.aw(s),p=new P.l($.h,q.h("l<1>"))
r.a=null
t=q.h("~(1)").a(new P.bC(r,s,p))
u.M.a(new P.bD(p))
r.a=W.bO(s.a,s.b,t,!1,q.c)
return p}}
P.bE.prototype={
$1:function(a){H.aw(this.b).c.a(a);++this.a.a},
$S:function(){return H.aw(this.b).h("k(1)")}}
P.bF.prototype={
$0:function(){this.b.B(this.a.a)},
$S:0}
P.bC.prototype={
$1:function(a){H.aw(this.b).c.a(a)
P.eL(this.a.a,this.c,a)},
$S:function(){return H.aw(this.b).h("k(1)")}}
P.bD.prototype={
$0:function(){var t,s,r,q,p,o
try{r=H.e7()
throw H.e(r)}catch(q){t=H.P(q)
s=H.E(q)
p=t
o=s
if(o==null)o=P.cq(p)
this.a.n(p,o)}},
$S:0}
P.am.prototype={}
P.bk.prototype={}
P.a8.prototype={
i:function(a){return H.d(this.a)},
$ii:1,
gw:function(){return this.b}}
P.bq.prototype={$id1:1}
P.cb.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.e(s.a)
t=H.e(s.a)
t.stack=r.i(0)
throw t},
$S:0}
P.bj.prototype={
ae:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.a===$.h){a.$0()
return}P.dh(q,q,this,a,u.H)}catch(r){t=H.P(r)
s=H.E(r)
P.ca(q,q,this,t,u.l.a(s))}},
af:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.a===$.h){a.$1(b)
return}P.di(q,q,this,a,b,u.H,c)}catch(r){t=H.P(r)
s=H.E(r)
P.ca(q,q,this,t,u.l.a(s))}},
a6:function(a,b){return new P.c4(this,b.h("0()").a(a),b)},
O:function(a){return new P.c3(this,u.M.a(a))},
a7:function(a,b){return new P.c5(this,b.h("~(0)").a(a),b)},
T:function(a,b){b.h("0()").a(a)
if($.h===C.a)return a.$0()
return P.dh(null,null,this,a,b)},
F:function(a,b,c,d){c.h("@<0>").l(d).h("1(2)").a(a)
d.a(b)
if($.h===C.a)return a.$1(b)
return P.di(null,null,this,a,b,c,d)},
ad:function(a,b,c,d,e,f){d.h("@<0>").l(e).l(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.h===C.a)return a.$2(b,c)
return P.f_(null,null,this,a,b,c,d,e,f)},
S:function(a,b,c,d){return b.h("@<0>").l(c).l(d).h("1(2,3)").a(a)}}
P.c4.prototype={
$0:function(){return this.a.T(this.b,this.c)},
$S:function(){return this.c.h("0()")}}
P.c3.prototype={
$0:function(){return this.a.ae(this.b)},
$S:1}
P.c5.prototype={
$1:function(a){var t=this.c
return this.a.af(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.q.prototype={
gE:function(a){return new H.aS(a,this.gj(a),H.Y(a).h("aS<q.E>"))},
R:function(a,b){return this.t(a,b)},
i:function(a){return P.cV(a,"[","]")}}
P.X.prototype={}
P.aC.prototype={}
P.i.prototype={
gw:function(){return H.E(this.$thrownJsError)}}
P.a7.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.aJ(t)
return"Assertion failed"}}
P.aY.prototype={
i:function(a){return"Throw of null."}}
P.A.prototype={
gD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gC:function(){return""},
i:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+o
s=p.gD()+n+t
if(!p.a)return s
r=p.gC()
q=P.aJ(p.b)
return s+r+": "+q}}
P.b_.prototype={
gD:function(){return"RangeError"},
gC:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.d(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(r)
else if(s>r)t=": Not in range "+H.d(r)+".."+H.d(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.d(r)}return t}}
P.aN.prototype={
gD:function(){return"RangeError"},
gC:function(){var t,s=H.br(this.b)
if(typeof s!=="number")return s.ai()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gj:function(a){return this.f}}
P.b7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.b5.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.aH.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aJ(t)+"."}}
P.ak.prototype={
i:function(a){return"Stack Overflow"},
gw:function(){return null},
$ii:1}
P.aI.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.bQ.prototype={
i:function(a){return"Exception: "+this.a}}
P.f.prototype={}
P.p.prototype={$iC:1}
P.k.prototype={
i:function(a){return"null"}}
P.z.prototype={}
P.n.prototype={constructor:P.n,$in:1,
i:function(a){return"Instance of '"+H.d(H.bB(this))+"'"},
toString:function(){return this.i(this)}}
P.v.prototype={}
P.bl.prototype={
i:function(a){return""},
$iv:1}
P.w.prototype={$icu:1}
P.bG.prototype={
gj:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.Z.prototype={
i:function(a){return String(a)},
$iZ:1}
W.aE.prototype={
i:function(a){return String(a)}}
W.aG.prototype={}
W.Q.prototype={
V:function(a,b){return a.getContext(b)},
$iQ:1}
W.ab.prototype={$iab:1}
W.B.prototype={
gj:function(a){return a.length}}
W.ac.prototype={
gj:function(a){return a.length}}
W.by.prototype={}
W.bz.prototype={
i:function(a){return String(a)}}
W.b.prototype={
i:function(a){return a.localName},
$ib:1}
W.a.prototype={
gU:function(a){return W.eM(a.target)},
$ia:1}
W.j.prototype={
Z:function(a,b,c,d){return a.addEventListener(b,H.aB(u.U.a(c),1),!1)},
a3:function(a,b,c,d){return a.removeEventListener(b,H.aB(u.U.a(c),1),!1)},
$ij:1}
W.y.prototype={$iy:1}
W.aK.prototype={
gj:function(a){return a.length},
t:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.cU(b,a,null,null,null))
return a[b]},
R:function(a,b){if(b<0||b>=a.length)return H.aD(a,b)
return a[b]},
$iI:1,
$iC:1,
$ip:1}
W.ae.prototype={
gac:function(a){var t,s=a.result
if(u.J.b(s)){H.db(s,0,null)
t=new Uint8Array(s,0)
return t}return s}}
W.aM.prototype={
gj:function(a){return a.length}}
W.T.prototype={
gP:function(a){return a.data},
$iT:1}
W.a1.prototype={$ia1:1,$icT:1}
W.r.prototype={
i:function(a){var t=a.nodeValue
return t==null?this.W(a):t}}
W.K.prototype={$iK:1}
W.b1.prototype={
gj:function(a){return a.length}}
W.ao.prototype={$ibJ:1}
W.cr.prototype={}
W.V.prototype={}
W.be.prototype={}
W.ap.prototype={
a8:function(){var t,s,r=this,q=r.b
if(q==null)return null
t=r.d
s=t!=null
if(s){u.U.a(t)
if(s)J.dU(q,r.c,t,!1)}r.b=null
r.sa2(null)
return null},
sa2:function(a){this.d=u.U.a(a)}}
W.bP.prototype={
$1:function(a){return this.a.$1(u.A.a(a))},
$S:14}
W.a0.prototype={
gE:function(a){return new W.aL(a,a.length,H.Y(a).h("aL<a0.E>"))}}
W.aL.prototype={
q:function(){var t=this,s=t.c+1,r=t.b
if(s<r){r=t.a
if(s<0||s>=r.length)return H.aD(r,s)
t.sK(r[s])
t.c=s
return!0}t.sK(null)
t.c=r
return!1},
gp:function(){return this.d},
sK:function(a){this.d=this.$ti.c.a(a)}}
W.bd.prototype={$ij:1,$ibJ:1}
W.bc.prototype={}
W.bg.prototype={}
W.bh.prototype={}
P.bn.prototype={$iT:1,
gP:function(a){return this.a}}
P.b8.prototype={
gU:function(a){return a.target}}
F.cm.prototype={
$1:function(a){var t=this.a.value
t.toString
t=H.dB(t,".png","")
F.cd(a,H.dB(t,"C:\\fakepath\\",""))},
$S:5}
F.ce.prototype={
$1:function(a){var t,s,r,q=this,p=q.a,o=q.b
p.height=o.height
p.width=o.width
p=q.c
p.drawImage(o,0,0,o.width,o.height)
o=J.cL(P.fd(p.getImageData(0,0,o.width,o.height))).buffer
H.db(o,0,null)
t=new Uint16Array(o,0)
p=q.d+".skin"
s=W.dY([t],"octet/stream")
r=u.a.a(document.querySelector("#download"))
r.href=(self.URL||self.webkitURL).createObjectURL(s)
r.textContent="\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"
r.download=p
p=r.style
p.display=""},
$S:5};(function aliases(){var t=J.o.prototype
t.W=t.i
t=J.J.prototype
t.X=t.i})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"f9","ei",2)
t(P,"fa","ej",2)
t(P,"fb","ek",2)
s(P,"dm","f2",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.n,null)
r(P.n,[H.cs,J.o,J.aF,H.aS,H.S,H.bH,P.i,H.ad,H.R,H.as,H.u,H.bi,P.c6,P.ba,P.W,P.l,P.bb,P.al,P.am,P.bk,P.a8,P.bq,P.q,P.X,P.z,P.ak,P.bQ,P.p,P.k,P.v,P.bl,P.w,P.bG,W.by,W.cr,W.a0,W.aL,W.bd,P.bn])
r(J.o,[J.aO,J.aQ,J.J,J.t,J.ag,J.U,H.aT,H.aU,W.j,W.aG,W.ab,W.bc,W.bz,W.a,W.bg,W.T])
r(J.J,[J.aZ,J.an,J.D])
s(J.bA,J.t)
r(J.ag,[J.af,J.aP])
r(P.i,[H.aX,H.aR,H.b6,H.b0,P.a7,H.bf,P.aY,P.A,P.b7,P.b5,P.b2,P.aH,P.aI])
r(H.R,[H.co,H.b4,H.ch,H.ci,H.cj,P.bL,P.bK,P.bM,P.bN,P.c7,P.c8,P.c9,P.cc,P.bR,P.bZ,P.bV,P.bW,P.bX,P.bT,P.bY,P.bS,P.c1,P.c2,P.c0,P.c_,P.bE,P.bF,P.bC,P.bD,P.cb,P.c4,P.c3,P.c5,W.bP,F.cm,F.ce])
r(H.b4,[H.b3,H.a9])
s(H.b9,P.a7)
s(H.ah,H.aU)
s(H.aq,H.ah)
s(H.ar,H.aq)
s(H.ai,H.ar)
r(H.ai,[H.aV,H.aj,H.aW])
s(H.at,H.bf)
s(P.bj,P.bq)
r(P.z,[P.aC,P.f])
r(P.A,[P.b_,P.aN])
r(W.j,[W.r,W.ae,W.ao])
r(W.r,[W.b,W.B])
s(W.c,W.b)
r(W.c,[W.Z,W.aE,W.Q,W.aM,W.a1,W.b1])
s(W.ac,W.bc)
s(W.y,W.aG)
s(W.bh,W.bg)
s(W.aK,W.bh)
r(W.a,[W.K,P.b8])
s(W.V,P.al)
s(W.be,W.V)
s(W.ap,P.am)
t(H.aq,P.q)
t(H.ar,H.S)
t(W.bc,W.by)
t(W.bg,P.q)
t(W.bh,W.a0)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",aC:"double",z:"num",w:"String",X:"bool",k:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["k()","~()","~(~())","@(@)","k(@)","k(a)","@(@,w)","@(w)","k(~())","~(@)","k(@,v)","k(f,@)","k(@[v])","l<@>(@)","@(a)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.eB(v.typeUniverse,JSON.parse('{"aZ":"J","an":"J","D":"J","fv":"a","fA":"a","fu":"b","fB":"b","fI":"b","fF":"j","fG":"j","fV":"K","fw":"c","fE":"c","fC":"r","fz":"r","fx":"B","fJ":"B","aO":{"X":[]},"aQ":{"k":[]},"J":{"a_":[]},"t":{"p":["1"],"C":["1"]},"bA":{"t":["1"],"p":["1"],"C":["1"]},"ag":{"z":[]},"af":{"f":[],"z":[]},"aP":{"z":[]},"U":{"w":[],"cu":[]},"aX":{"i":[]},"aR":{"i":[]},"b6":{"i":[]},"as":{"v":[]},"R":{"a_":[]},"b4":{"a_":[]},"b3":{"a_":[]},"a9":{"a_":[]},"b0":{"i":[]},"b9":{"i":[]},"aT":{"cQ":[]},"ah":{"I":["@"]},"ai":{"q":["f"],"p":["f"],"I":["@"],"S":["f"],"C":["f"]},"aV":{"q":["f"],"p":["f"],"I":["@"],"S":["f"],"C":["f"],"q.E":"f"},"aj":{"eg":[],"q":["f"],"p":["f"],"I":["@"],"S":["f"],"C":["f"],"q.E":"f"},"aW":{"q":["f"],"p":["f"],"I":["@"],"S":["f"],"C":["f"],"q.E":"f"},"bf":{"i":[]},"at":{"i":[]},"l":{"H":["1"]},"a8":{"i":[]},"bq":{"d1":[]},"bj":{"d1":[]},"aC":{"z":[]},"a7":{"i":[]},"aY":{"i":[]},"A":{"i":[]},"b_":{"i":[]},"aN":{"i":[]},"b7":{"i":[]},"b5":{"i":[]},"b2":{"i":[]},"aH":{"i":[]},"ak":{"i":[]},"aI":{"i":[]},"f":{"z":[]},"p":{"C":["1"]},"bl":{"v":[]},"w":{"cu":[]},"c":{"b":[],"j":[]},"Z":{"b":[],"j":[]},"aE":{"b":[],"j":[]},"Q":{"b":[],"j":[]},"B":{"j":[]},"b":{"j":[]},"aK":{"a0":["y"],"q":["y"],"I":["y"],"p":["y"],"C":["y"],"q.E":"y","a0.E":"y"},"ae":{"j":[]},"aM":{"b":[],"j":[]},"a1":{"cT":[],"b":[],"j":[]},"r":{"j":[]},"K":{"a":[]},"b1":{"b":[],"j":[]},"ao":{"bJ":[],"j":[]},"V":{"al":["1"]},"be":{"V":["1"],"al":["1"]},"ap":{"am":["1"]},"bd":{"bJ":[],"j":[]},"bn":{"T":[]},"b8":{"a":[]}}'))
H.eA(v.typeUniverse,JSON.parse('{"am":1}'))
var u=(function rtii(){var t=H.ff
return{a:t("Z"),n:t("a8"),J:t("cQ"),d:t("Q"),b:t("ab"),C:t("i"),A:t("a"),r:t("j"),B:t("cT"),Z:t("a_"),f:t("H<k>"),c:t("H<@>"),I:t("T"),q:t("a1"),s:t("t<w>"),t:t("t<@>"),g:t("D"),p:t("I<@>"),P:t("k"),K:t("n"),h:t("u"),l:t("v"),N:t("w"),o:t("an"),w:t("bJ"),E:t("be<a>"),u:t("V<K>"),x:t("W<@,@>"),_:t("l<@>"),j:t("l<f>"),y:t("X"),m:t("X(n)"),i:t("aC"),z:t("@"),O:t("@()"),U:t("@(a)"),v:t("@(n)"),Q:t("@(n,v)"),S:t("f"),D:t("z"),H:t("~"),M:t("~()")}})();(function constants(){C.p=W.Q.prototype
C.q=W.ae.prototype
C.r=J.o.prototype
C.f=J.t.prototype
C.t=J.af.prototype
C.b=J.U.prototype
C.u=J.D.prototype
C.h=J.aZ.prototype
C.c=J.an.prototype
C.d=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.k=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.e=function(hooks) { return hooks; }

C.a=new P.bj()
C.o=new P.bl()})();(function staticFields(){$.F=0
$.aa=null
$.cO=null
$.dt=null
$.dk=null
$.dy=null
$.cf=null
$.ck=null
$.cG=null
$.a4=null
$.ax=null
$.ay=null
$.cE=!1
$.h=C.a
$.aA=[]})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"fy","dG",function(){return H.dr("_$dart_dartClosure")})
t($,"fD","cJ",function(){return H.dr("_$dart_js")})
t($,"fK","dH",function(){return H.G(H.bI({
toString:function(){return"$receiver$"}}))})
t($,"fL","dI",function(){return H.G(H.bI({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fM","dJ",function(){return H.G(H.bI(null))})
t($,"fN","dK",function(){return H.G(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fQ","dN",function(){return H.G(H.bI(void 0))})
t($,"fR","dO",function(){return H.G(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fP","dM",function(){return H.G(H.d_(null))})
t($,"fO","dL",function(){return H.G(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"fT","dQ",function(){return H.G(H.d_(void 0))})
t($,"fS","dP",function(){return H.G(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"fU","cK",function(){return P.eh()})
t($,"fZ","dR",function(){return new Error().stack!=void 0})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.o,MediaError:J.o,Navigator:J.o,NavigatorConcurrentHardware:J.o,NavigatorUserMediaError:J.o,OverconstrainedError:J.o,PositionError:J.o,WebGLRenderingContext:J.o,WebGL2RenderingContext:J.o,SQLError:J.o,ArrayBuffer:H.aT,ArrayBufferView:H.aU,Uint16Array:H.aV,Uint8ClampedArray:H.aj,CanvasPixelArray:H.aj,Uint8Array:H.aW,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.Z,HTMLAreaElement:W.aE,Blob:W.aG,HTMLCanvasElement:W.Q,CanvasRenderingContext2D:W.ab,CDATASection:W.B,CharacterData:W.B,Comment:W.B,ProcessingInstruction:W.B,Text:W.B,CSSStyleDeclaration:W.ac,MSStyleCSSProperties:W.ac,CSS2Properties:W.ac,DOMException:W.bz,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,USBConnectionEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,EventTarget:W.j,File:W.y,FileList:W.aK,FileReader:W.ae,HTMLFormElement:W.aM,ImageData:W.T,HTMLInputElement:W.a1,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,ProgressEvent:W.K,ResourceProgressEvent:W.K,HTMLSelectElement:W.b1,Window:W.ao,DOMWindow:W.ao,IDBVersionChangeEvent:P.b8})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,Uint16Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,EventTarget:false,File:true,FileList:true,FileReader:true,HTMLFormElement:true,ImageData:true,HTMLInputElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,Window:true,DOMWindow:true,IDBVersionChangeEvent:true})
H.ah.$nativeSuperclassTag="ArrayBufferView"
H.aq.$nativeSuperclassTag="ArrayBufferView"
H.ar.$nativeSuperclassTag="ArrayBufferView"
H.ai.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dw,[])
else F.dw([])})})()
//# sourceMappingURL=main.js.map
