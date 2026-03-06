(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var td={exports:{}},Lo={};var Cg;function Ry(){if(Cg)return Lo;Cg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Dg;function wy(){return Dg||(Dg=1,td.exports=Ry()),td.exports}var v=wy(),nd={exports:{}},No={},id={exports:{}},ad={};var Ug;function Cy(){return Ug||(Ug=1,(function(s){function e(N,I){var ce=N.length;N.push(I);e:for(;0<ce;){var me=ce-1>>>1,Se=N[me];if(0<l(Se,I))N[me]=I,N[ce]=Se,ce=me;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],ce=N.pop();if(ce!==I){N[0]=ce;e:for(var me=0,Se=N.length,z=Se>>>1;me<z;){var Y=2*(me+1)-1,fe=N[Y],be=Y+1,Oe=N[be];if(0>l(fe,ce))be<Se&&0>l(Oe,fe)?(N[me]=Oe,N[be]=ce,me=be):(N[me]=fe,N[Y]=ce,me=Y);else if(be<Se&&0>l(Oe,ce))N[me]=Oe,N[be]=ce,me=be;else break e}}return I}function l(N,I){var ce=N.sortIndex-I.sortIndex;return ce!==0?ce:N.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],g=1,_=null,x=3,M=!1,T=!1,C=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var I=i(h);I!==null;){if(I.callback===null)r(h);else if(I.startTime<=N)r(h),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(h)}}function H(N){if(C=!1,L(N),!T)if(i(m)!==null)T=!0,F||(F=!0,Z());else{var I=i(h);I!==null&&Q(H,I.startTime-N)}}var F=!1,B=-1,A=5,U=-1;function ue(){return b?!0:!(s.unstable_now()-U<A)}function V(){if(b=!1,F){var N=s.unstable_now();U=N;var I=!0;try{e:{T=!1,C&&(C=!1,D(B),B=-1),M=!0;var ce=x;try{t:{for(L(N),_=i(m);_!==null&&!(_.expirationTime>N&&ue());){var me=_.callback;if(typeof me=="function"){_.callback=null,x=_.priorityLevel;var Se=me(_.expirationTime<=N);if(N=s.unstable_now(),typeof Se=="function"){_.callback=Se,L(N),I=!0;break t}_===i(m)&&r(m),L(N)}else r(m);_=i(m)}if(_!==null)I=!0;else{var z=i(h);z!==null&&Q(H,z.startTime-N),I=!1}}break e}finally{_=null,x=ce,M=!1}I=void 0}}finally{I?Z():F=!1}}}var Z;if(typeof P=="function")Z=function(){P(V)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,se=J.port2;J.port1.onmessage=V,Z=function(){se.postMessage(null)}}else Z=function(){S(V,0)};function Q(N,I){B=S(function(){N(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(N){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var ce=x;x=I;try{return N()}finally{x=ce}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ce=x;x=N;try{return I()}finally{x=ce}},s.unstable_scheduleCallback=function(N,I,ce){var me=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?me+ce:me):ce=me,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ce+Se,N={id:g++,callback:I,priorityLevel:N,startTime:ce,expirationTime:Se,sortIndex:-1},ce>me?(N.sortIndex=ce,e(h,N),i(m)===null&&N===i(h)&&(C?(D(B),B=-1):C=!0,Q(H,ce-me))):(N.sortIndex=Se,e(m,N),T||M||(T=!0,F||(F=!0,Z()))),N},s.unstable_shouldYield=ue,s.unstable_wrapCallback=function(N){var I=x;return function(){var ce=x;x=I;try{return N.apply(this,arguments)}finally{x=ce}}}})(ad)),ad}var Lg;function Dy(){return Lg||(Lg=1,id.exports=Cy()),id.exports}var rd={exports:{}},st={};var Ng;function Uy(){if(Ng)return st;Ng=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function S(z,Y,fe){this.props=z,this.context=Y,this.refs=b,this.updater=fe||T}S.prototype.isReactComponent={},S.prototype.setState=function(z,Y){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Y,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=S.prototype;function P(z,Y,fe){this.props=z,this.context=Y,this.refs=b,this.updater=fe||T}var L=P.prototype=new D;L.constructor=P,C(L,S.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function F(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function U(z,Y,fe){var be=fe.ref;return{$$typeof:s,type:z,key:Y,ref:be!==void 0?be:null,props:fe}}function ue(z,Y){return U(z.type,Y,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function Z(z){var Y={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(fe){return Y[fe]})}var J=/\/+/g;function se(z,Y){return typeof z=="object"&&z!==null&&z.key!=null?Z(""+z.key):Y.toString(36)}function Q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(F,F):(z.status="pending",z.then(function(Y){z.status==="pending"&&(z.status="fulfilled",z.value=Y)},function(Y){z.status==="pending"&&(z.status="rejected",z.reason=Y)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function N(z,Y,fe,be,Oe){var ne=typeof z;(ne==="undefined"||ne==="boolean")&&(z=null);var ve=!1;if(z===null)ve=!0;else switch(ne){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(z.$$typeof){case s:case e:ve=!0;break;case g:return ve=z._init,N(ve(z._payload),Y,fe,be,Oe)}}if(ve)return Oe=Oe(z),ve=be===""?"."+se(z,0):be,H(Oe)?(fe="",ve!=null&&(fe=ve.replace(J,"$&/")+"/"),N(Oe,Y,fe,"",function(Ke){return Ke})):Oe!=null&&(V(Oe)&&(Oe=ue(Oe,fe+(Oe.key==null||z&&z.key===Oe.key?"":(""+Oe.key).replace(J,"$&/")+"/")+ve)),Y.push(Oe)),1;ve=0;var Me=be===""?".":be+":";if(H(z))for(var Ge=0;Ge<z.length;Ge++)be=z[Ge],ne=Me+se(be,Ge),ve+=N(be,Y,fe,ne,Oe);else if(Ge=M(z),typeof Ge=="function")for(z=Ge.call(z),Ge=0;!(be=z.next()).done;)be=be.value,ne=Me+se(be,Ge++),ve+=N(be,Y,fe,ne,Oe);else if(ne==="object"){if(typeof z.then=="function")return N(Q(z),Y,fe,be,Oe);throw Y=String(z),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ve}function I(z,Y,fe){if(z==null)return z;var be=[],Oe=0;return N(z,be,"","",function(ne){return Y.call(fe,ne,Oe++)}),be}function ce(z){if(z._status===-1){var Y=z._result;Y=Y(),Y.then(function(fe){(z._status===0||z._status===-1)&&(z._status=1,z._result=fe)},function(fe){(z._status===0||z._status===-1)&&(z._status=2,z._result=fe)}),z._status===-1&&(z._status=0,z._result=Y)}if(z._status===1)return z._result.default;throw z._result}var me=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Se={map:I,forEach:function(z,Y,fe){I(z,function(){Y.apply(this,arguments)},fe)},count:function(z){var Y=0;return I(z,function(){Y++}),Y},toArray:function(z){return I(z,function(Y){return Y})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return st.Activity=_,st.Children=Se,st.Component=S,st.Fragment=i,st.Profiler=l,st.PureComponent=P,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,st.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},st.cache=function(z){return function(){return z.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(z,Y,fe){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var be=C({},z.props),Oe=z.key;if(Y!=null)for(ne in Y.key!==void 0&&(Oe=""+Y.key),Y)!A.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(be[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)be.children=fe;else if(1<ne){for(var ve=Array(ne),Me=0;Me<ne;Me++)ve[Me]=arguments[Me+2];be.children=ve}return U(z.type,Oe,be)},st.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},st.createElement=function(z,Y,fe){var be,Oe={},ne=null;if(Y!=null)for(be in Y.key!==void 0&&(ne=""+Y.key),Y)A.call(Y,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Oe[be]=Y[be]);var ve=arguments.length-2;if(ve===1)Oe.children=fe;else if(1<ve){for(var Me=Array(ve),Ge=0;Ge<ve;Ge++)Me[Ge]=arguments[Ge+2];Oe.children=Me}if(z&&z.defaultProps)for(be in ve=z.defaultProps,ve)Oe[be]===void 0&&(Oe[be]=ve[be]);return U(z,ne,Oe)},st.createRef=function(){return{current:null}},st.forwardRef=function(z){return{$$typeof:p,render:z}},st.isValidElement=V,st.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:ce}},st.memo=function(z,Y){return{$$typeof:h,type:z,compare:Y===void 0?null:Y}},st.startTransition=function(z){var Y=B.T,fe={};B.T=fe;try{var be=z(),Oe=B.S;Oe!==null&&Oe(fe,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(F,me)}catch(ne){me(ne)}finally{Y!==null&&fe.types!==null&&(Y.types=fe.types),B.T=Y}},st.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},st.use=function(z){return B.H.use(z)},st.useActionState=function(z,Y,fe){return B.H.useActionState(z,Y,fe)},st.useCallback=function(z,Y){return B.H.useCallback(z,Y)},st.useContext=function(z){return B.H.useContext(z)},st.useDebugValue=function(){},st.useDeferredValue=function(z,Y){return B.H.useDeferredValue(z,Y)},st.useEffect=function(z,Y){return B.H.useEffect(z,Y)},st.useEffectEvent=function(z){return B.H.useEffectEvent(z)},st.useId=function(){return B.H.useId()},st.useImperativeHandle=function(z,Y,fe){return B.H.useImperativeHandle(z,Y,fe)},st.useInsertionEffect=function(z,Y){return B.H.useInsertionEffect(z,Y)},st.useLayoutEffect=function(z,Y){return B.H.useLayoutEffect(z,Y)},st.useMemo=function(z,Y){return B.H.useMemo(z,Y)},st.useOptimistic=function(z,Y){return B.H.useOptimistic(z,Y)},st.useReducer=function(z,Y,fe){return B.H.useReducer(z,Y,fe)},st.useRef=function(z){return B.H.useRef(z)},st.useState=function(z){return B.H.useState(z)},st.useSyncExternalStore=function(z,Y,fe){return B.H.useSyncExternalStore(z,Y,fe)},st.useTransition=function(){return B.H.useTransition()},st.version="19.2.4",st}var Og;function zh(){return Og||(Og=1,rd.exports=Uy()),rd.exports}var sd={exports:{}},Rn={};var zg;function Ly(){if(zg)return Rn;zg=1;var s=zh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Rn.flushSync=function(m){var h=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=g,r.d.f()}},Rn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Rn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,h){return m(h)},Rn.useFormState=function(m,h,g){return d.H.useFormState(m,h,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var Pg;function Ny(){if(Pg)return sd.exports;Pg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sd.exports=Ly(),sd.exports}var Fg;function Oy(){if(Fg)return No;Fg=1;var s=Dy(),e=zh(),i=Ny();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var J=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:se(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return se(t(n))}catch{}}return null}var Q=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},me=[],Se=-1;function z(t){return{current:t}}function Y(t){0>Se||(t.current=me[Se],me[Se]=null,Se--)}function fe(t,n){Se++,me[Se]=t.current,t.current=n}var be=z(null),Oe=z(null),ne=z(null),ve=z(null);function Me(t,n){switch(fe(ne,n),fe(Oe,t),fe(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?J0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=J0(n),t=$0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(be),fe(be,t)}function Ge(){Y(be),Y(Oe),Y(ne)}function Ke(t){t.memoizedState!==null&&fe(ve,t);var n=be.current,a=$0(n,t.type);n!==a&&(fe(Oe,t),fe(be,a))}function Xe(t){Oe.current===t&&(Y(be),Y(Oe)),ve.current===t&&(Y(ve),wo._currentValue=ce)}var Jt,yt;function gt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+yt}var Lt=!1;function lt(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var re=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){re=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){re=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var G=y.split(`
`),te=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===te.length)for(o=G.length-1,u=te.length-1;1<=o&&0<=u&&G[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==te[u]){var pe=`
`+G[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return gt("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xt=Object.prototype.hasOwnProperty,Tt=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,qe=s.unstable_shouldYield,O=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,je=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,Qe=s.log,tt=s.unstable_setDisableYieldValue,Ae=null,Ee=null;function ze(t){if(typeof Qe=="function"&&tt(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Ae,t)}catch{}}var Ne=Math.clz32?Math.clz32:X,Pe=Math.log,ut=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Pe(t)/ut|0)|0}var we=256,Re=262144,Fe=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function de(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Te(o):(y&=R,y!==0?u=Te(y):a||(a=R&~t,a!==0&&(u=Te(a))))):(R=o&~f,R!==0?u=Te(R):y!==0?u=Te(y):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _i(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,te=t.hiddenUpdates;for(a=y&~a;0<a;){var pe=31-Ne(a),_e=1<<pe;R[pe]=0,G[pe]=-1;var re=te[pe];if(re!==null)for(te[pe]=null,pe=0;pe<re.length;pe++){var le=re[pe];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&Vs(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Vs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ne(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Or(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ne(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Jo(t,n){var a=n&-n;return a=(a&42)!==0?1:zr(a),(a&(t.suspendedLanes|n))!==0?0:a}function zr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ni(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:bg(t.type))}function Fr(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var yi=Math.random().toString(36).slice(2),rn="__reactFiber$"+yi,hn="__reactProps$"+yi,Yi="__reactContainer$"+yi,Ma="__reactEvents$"+yi,$o="__reactListeners$"+yi,el="__reactHandles$"+yi,tl="__reactResources$"+yi,ar="__reactMarker$"+yi;function ks(t){delete t[rn],delete t[hn],delete t[Ma],delete t[$o],delete t[el]}function Ea(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Yi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=sg(t);t!==null;){if(a=t[rn])return a;t=sg(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[rn]||t[Yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function w(t){var n=t[tl];return n||(n=t[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[ar]=!0}var oe=new Set,ae={};function $(t,n){De(t,n),De(t+"Capture",n)}function De(t,n){for(ae[t]=n,t=0;t<n.length;t++)oe.add(n[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},We={};function Ze(t){return Xt.call(We,t)?!0:Xt.call(Ue,t)?!1:Be.test(t)?We[t]=!0:(Ue[t]=!0,!1)}function nt(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function rt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function He(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){if(!t._valueTracker){var n=qt(t)?"checked":"value";t._valueTracker=Yt(t,n,""+t[n])}}function pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=qt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nn=/[\n"\\]/g;function at(t){return t.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function On(t,n,a,o,u,f,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ft(n)):t.value!==""+ft(n)&&(t.value=""+ft(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Si(t,y,ft(n)):a!=null?Si(t,y,ft(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ft(R):t.removeAttribute("name")}function qn(t,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){wt(t);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),wt(t)}function Si(t,n,a){n==="number"&&ke(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,a){if(n!=null&&(n=""+ft(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ft(a):""}function sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ft(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),wt(t)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bi(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Zi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bi(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&bi(t,f,n[f])}function Br(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return Ev.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Qc=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,Hr=null;function Qh(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;e:switch(t=n.stateNode,n.type){case"input":if(On(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[hn]||null;if(!u)throw Error(r(90));On(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&pn(o)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}}}var $c=!1;function Jh(t,n,a){if($c)return t(n,a);$c=!0;try{var o=t(n);return o}finally{if($c=!1,(Ir!==null||Hr!==null)&&(kl(),Ir&&(n=Ir,t=Hr,Hr=Ir=null,Qh(n),t)))for(n=0;n<t.length;n++)Qh(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[hn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Qi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{eu=!1}var Aa=null,tu=null,il=null;function $h(){if(il)return il;var t,n=tu,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return il=u.slice(t,1<o?1-o:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function ep(){return!1}function In(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:ep,this.isPropagationStopped=ep,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=In(sr),Xs=_({},sr,{view:0,detail:0}),Tv=In(Xs),nu,iu,qs,ol=_({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(nu=t.screenX-qs.screenX,iu=t.screenY-qs.screenY):iu=nu=0,qs=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),tp=In(ol),Av=_({},ol,{dataTransfer:0}),Rv=In(Av),wv=_({},Xs,{relatedTarget:0}),au=In(wv),Cv=_({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=In(Cv),Uv=_({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=In(Uv),Nv=_({},sr,{data:0}),np=In(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pv[t])?!!n[t]:!1}function ru(){return Fv}var Bv=_({},Xs,{key:function(t){if(t.key){var n=Ov[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iv=In(Bv),Hv=_({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=In(Hv),Gv=_({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Vv=In(Gv),kv=_({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=In(kv),Wv=_({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=In(Wv),qv=_({},sr,{newState:0,oldState:0}),Yv=In(qv),Zv=[9,13,27,32],su=Qi&&"CompositionEvent"in window,Ys=null;Qi&&"documentMode"in document&&(Ys=document.documentMode);var Kv=Qi&&"TextEvent"in window&&!Ys,ap=Qi&&(!su||Ys&&8<Ys&&11>=Ys),rp=" ",sp=!1;function op(t,n){switch(t){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function Qv(t,n){switch(t){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(sp=!0,rp);case"textInput":return t=n.data,t===rp&&sp?null:t;default:return null}}function Jv(t,n){if(Gr)return t==="compositionend"||!su&&op(t,n)?(t=$h(),il=tu=Aa=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$v[t.type]:n==="textarea"}function up(t,n,a,o){Ir?Hr?Hr.push(o):Hr=[o]:Ir=o,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zs=null,Ks=null;function e_(t){X0(t,0)}function ll(t){var n=rr(t);if(pn(n))return t}function fp(t,n){if(t==="change")return n}var dp=!1;if(Qi){var ou;if(Qi){var lu="oninput"in document;if(!lu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),lu=typeof hp.oninput=="function"}ou=lu}else ou=!1;dp=ou&&(!document.documentMode||9<document.documentMode)}function pp(){Zs&&(Zs.detachEvent("onpropertychange",mp),Ks=Zs=null)}function mp(t){if(t.propertyName==="value"&&ll(Ks)){var n=[];up(n,Ks,t,Jc(t)),Jh(e_,n)}}function t_(t,n,a){t==="focusin"?(pp(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",mp)):t==="focusout"&&pp()}function n_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(Ks)}function i_(t,n){if(t==="click")return ll(n)}function a_(t,n){if(t==="input"||t==="change")return ll(n)}function r_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:r_;function Qs(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var a=gp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gp(a)}}function vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ke(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ke(t.document)}return n}function cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var s_=Qi&&"documentMode"in document&&11>=document.documentMode,Vr=null,uu=null,Js=null,fu=!1;function yp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Vr==null||Vr!==ke(o)||(o=Vr,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Kl(uu,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Vr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var kr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},du={},Sp={};Qi&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function lr(t){if(du[t])return du[t];if(!kr[t])return t;var n=kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return du[t]=n[a];return t}var bp=lr("animationend"),Mp=lr("animationiteration"),Ep=lr("animationstart"),o_=lr("transitionrun"),l_=lr("transitionstart"),c_=lr("transitioncancel"),Tp=lr("transitionend"),Ap=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function Mi(t,n){Ap.set(t,n),$(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],jr=0,pu=0;function ul(){for(var t=jr,n=pu=jr=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Rp(a,u,f)}}function fl(t,n,a,o){oi[jr++]=t,oi[jr++]=n,oi[jr++]=a,oi[jr++]=o,pu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function mu(t,n,a,o){return fl(t,n,a,o),dl(t)}function cr(t,n){return fl(t,null,null,n),dl(t)}function Rp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ne(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<So)throw So=0,Tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function u_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new u_(t,n,a,o)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,o,u,f){var y=0;if(o=t,typeof t=="function")gu(t)&&(y=1);else if(typeof t=="string")y=my(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Kn(31,a,n,u),t.elementType=U,t.lanes=f,t;case C:return ur(a.children,u,f,n);case b:y=8,u|=24;break;case S:return t=Kn(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case H:return t=Kn(13,a,n,u),t.elementType=H,t.lanes=f,t;case F:return t=Kn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:y=10;break e;case D:y=9;break e;case L:y=11;break e;case B:y=14;break e;case A:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ur(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function xu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Cp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function vu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},Dp.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var Xr=[],qr=0,pl=null,$s=0,ci=[],ui=0,Ra=null,Oi=1,zi="";function $i(t,n){Xr[qr++]=$s,Xr[qr++]=pl,pl=t,$s=n}function Up(t,n,a){ci[ui++]=Oi,ci[ui++]=zi,ci[ui++]=Ra,Ra=t;var o=Oi;t=zi;var u=32-Ne(o)-1;o&=~(1<<u),a+=1;var f=32-Ne(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Oi=1<<32-Ne(n)+u|a<<u|o,zi=f+t}else Oi=1<<f|a<<u|o,zi=t}function _u(t){t.return!==null&&($i(t,1),Up(t,1,0))}function yu(t){for(;t===pl;)pl=Xr[--qr],Xr[qr]=null,$s=Xr[--qr],Xr[qr]=null;for(;t===Ra;)Ra=ci[--ui],ci[ui]=null,zi=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null}function Lp(t,n){ci[ui++]=Oi,ci[ui++]=zi,ci[ui++]=Ra,Oi=n.id,zi=n.overflow,Ra=t}var yn=null,jt=null,Mt=!1,wa=null,fi=!1,Su=Error(r(519));function Ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(li(n,t)),Su}function Np(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[rn]=t,n[hn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)vt(Mo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),sn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||K0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ca(t,!0)}function Op(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:yn=yn.return}}function Yr(t){if(t!==yn)return!1;if(!Mt)return Op(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&jt&&Ca(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=rg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=rg(t)}else n===27?(n=jt,ka(t.type)?(t=Wf,Wf=null,jt=t):jt=n):jt=yn?hi(t.stateNode.nextSibling):null;return!0}function fr(){jt=yn=null,Mt=!1}function bu(){var t=wa;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),wa=null),t}function eo(t){wa===null?wa=[t]:wa.push(t)}var Mu=z(null),dr=null,ea=null;function Da(t,n,a){fe(Mu,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Mu.current,Y(Mu)}function Eu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Tu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Eu(f.return,a,t),o||(y=null);break e}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Eu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Zr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;Zn(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===ve.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(wo):t=[wo])}u=u.return}t!==null&&Tu(n,t,a,o),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return zp(dr,t)}function gl(t,n){return dr===null&&hr(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(r(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var f_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},d_=s.unstable_scheduleCallback,h_=s.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new f_,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&d_(h_,function(){t.controller.abort()})}var no=null,Ru=0,Kr=0,Qr=null;function p_(t,n){if(no===null){var a=no=[];Ru=0,Kr=Uf(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Pp,Pp),n}function Pp(){if(--Ru===0&&no!==null){Qr!==null&&(Qr.status="fulfilled");var t=no;no=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function m_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Fp=N.S;N.S=function(t,n){y0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&p_(t,n),Fp!==null&&Fp(t,n)};var pr=z(null);function wu(){var t=pr.current;return t!==null?t:kt.pooledCache}function xl(t,n){n===null?fe(pr,pr.current):fe(pr,n.pool)}function Bp(){var t=wu();return t===null?null:{parent:ln._currentValue,pool:t}}var Jr=Error(r(460)),Cu=Error(r(474)),vl=Error(r(542)),_l={then:function(){}};function Ip(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t}throw gr=n,Jr}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,Jr):a}}var gr=null;function Gp(){if(gr===null)throw Error(r(459));var t=gr;return gr=null,t}function Vp(t){if(t===Jr||t===vl)throw Error(r(483))}var $r=null,io=0;function yl(t){var n=io;return io+=1,$r===null&&($r=[]),Hp($r,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function kp(t){function n(K,j){if(t){var ee=K.deletions;ee===null?(K.deletions=[j],K.flags|=16):ee.push(j)}}function a(K,j){if(!t)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function o(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=Ji(K,j),K.index=0,K.sibling=null,K}function f(K,j,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<j?(K.flags|=67108866,j):ee):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function y(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,j,ee,xe){return j===null||j.tag!==6?(j=xu(ee,K.mode,xe),j.return=K,j):(j=u(j,ee),j.return=K,j)}function G(K,j,ee,xe){var Je=ee.type;return Je===C?pe(K,j,ee.props.children,xe,ee.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&mr(Je)===j.type)?(j=u(j,ee.props),ao(j,ee),j.return=K,j):(j=hl(ee.type,ee.key,ee.props,null,K.mode,xe),ao(j,ee),j.return=K,j)}function te(K,j,ee,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=vu(ee,K.mode,xe),j.return=K,j):(j=u(j,ee.children||[]),j.return=K,j)}function pe(K,j,ee,xe,Je){return j===null||j.tag!==7?(j=ur(ee,K.mode,xe,Je),j.return=K,j):(j=u(j,ee),j.return=K,j)}function _e(K,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=xu(""+j,K.mode,ee),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return ee=hl(j.type,j.key,j.props,null,K.mode,ee),ao(ee,j),ee.return=K,ee;case T:return j=vu(j,K.mode,ee),j.return=K,j;case A:return j=mr(j),_e(K,j,ee)}if(Q(j)||Z(j))return j=ur(j,K.mode,ee,null),j.return=K,j;if(typeof j.then=="function")return _e(K,yl(j),ee);if(j.$$typeof===P)return _e(K,gl(K,j),ee);Sl(K,j)}return null}function re(K,j,ee,xe){var Je=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Je!==null?null:R(K,j,""+ee,xe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===Je?G(K,j,ee,xe):null;case T:return ee.key===Je?te(K,j,ee,xe):null;case A:return ee=mr(ee),re(K,j,ee,xe)}if(Q(ee)||Z(ee))return Je!==null?null:pe(K,j,ee,xe,null);if(typeof ee.then=="function")return re(K,j,yl(ee),xe);if(ee.$$typeof===P)return re(K,j,gl(K,ee),xe);Sl(K,ee)}return null}function le(K,j,ee,xe,Je){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return K=K.get(ee)||null,R(j,K,""+xe,Je);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case M:return K=K.get(xe.key===null?ee:xe.key)||null,G(j,K,xe,Je);case T:return K=K.get(xe.key===null?ee:xe.key)||null,te(j,K,xe,Je);case A:return xe=mr(xe),le(K,j,ee,xe,Je)}if(Q(xe)||Z(xe))return K=K.get(ee)||null,pe(j,K,xe,Je,null);if(typeof xe.then=="function")return le(K,j,ee,yl(xe),Je);if(xe.$$typeof===P)return le(K,j,ee,gl(j,xe),Je);Sl(j,xe)}return null}function Ve(K,j,ee,xe){for(var Je=null,Ct=null,Ye=j,dt=j=0,bt=null;Ye!==null&&dt<ee.length;dt++){Ye.index>dt?(bt=Ye,Ye=null):bt=Ye.sibling;var Dt=re(K,Ye,ee[dt],xe);if(Dt===null){Ye===null&&(Ye=bt);break}t&&Ye&&Dt.alternate===null&&n(K,Ye),j=f(Dt,j,dt),Ct===null?Je=Dt:Ct.sibling=Dt,Ct=Dt,Ye=bt}if(dt===ee.length)return a(K,Ye),Mt&&$i(K,dt),Je;if(Ye===null){for(;dt<ee.length;dt++)Ye=_e(K,ee[dt],xe),Ye!==null&&(j=f(Ye,j,dt),Ct===null?Je=Ye:Ct.sibling=Ye,Ct=Ye);return Mt&&$i(K,dt),Je}for(Ye=o(Ye);dt<ee.length;dt++)bt=le(Ye,K,dt,ee[dt],xe),bt!==null&&(t&&bt.alternate!==null&&Ye.delete(bt.key===null?dt:bt.key),j=f(bt,j,dt),Ct===null?Je=bt:Ct.sibling=bt,Ct=bt);return t&&Ye.forEach(function(Ya){return n(K,Ya)}),Mt&&$i(K,dt),Je}function et(K,j,ee,xe){if(ee==null)throw Error(r(151));for(var Je=null,Ct=null,Ye=j,dt=j=0,bt=null,Dt=ee.next();Ye!==null&&!Dt.done;dt++,Dt=ee.next()){Ye.index>dt?(bt=Ye,Ye=null):bt=Ye.sibling;var Ya=re(K,Ye,Dt.value,xe);if(Ya===null){Ye===null&&(Ye=bt);break}t&&Ye&&Ya.alternate===null&&n(K,Ye),j=f(Ya,j,dt),Ct===null?Je=Ya:Ct.sibling=Ya,Ct=Ya,Ye=bt}if(Dt.done)return a(K,Ye),Mt&&$i(K,dt),Je;if(Ye===null){for(;!Dt.done;dt++,Dt=ee.next())Dt=_e(K,Dt.value,xe),Dt!==null&&(j=f(Dt,j,dt),Ct===null?Je=Dt:Ct.sibling=Dt,Ct=Dt);return Mt&&$i(K,dt),Je}for(Ye=o(Ye);!Dt.done;dt++,Dt=ee.next())Dt=le(Ye,K,dt,Dt.value,xe),Dt!==null&&(t&&Dt.alternate!==null&&Ye.delete(Dt.key===null?dt:Dt.key),j=f(Dt,j,dt),Ct===null?Je=Dt:Ct.sibling=Dt,Ct=Dt);return t&&Ye.forEach(function(Ay){return n(K,Ay)}),Mt&&$i(K,dt),Je}function Vt(K,j,ee,xe){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var Je=ee.key;j!==null;){if(j.key===Je){if(Je=ee.type,Je===C){if(j.tag===7){a(K,j.sibling),xe=u(j,ee.props.children),xe.return=K,K=xe;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&mr(Je)===j.type){a(K,j.sibling),xe=u(j,ee.props),ao(xe,ee),xe.return=K,K=xe;break e}a(K,j);break}else n(K,j);j=j.sibling}ee.type===C?(xe=ur(ee.props.children,K.mode,xe,ee.key),xe.return=K,K=xe):(xe=hl(ee.type,ee.key,ee.props,null,K.mode,xe),ao(xe,ee),xe.return=K,K=xe)}return y(K);case T:e:{for(Je=ee.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(K,j.sibling),xe=u(j,ee.children||[]),xe.return=K,K=xe;break e}else{a(K,j);break}else n(K,j);j=j.sibling}xe=vu(ee,K.mode,xe),xe.return=K,K=xe}return y(K);case A:return ee=mr(ee),Vt(K,j,ee,xe)}if(Q(ee))return Ve(K,j,ee,xe);if(Z(ee)){if(Je=Z(ee),typeof Je!="function")throw Error(r(150));return ee=Je.call(ee),et(K,j,ee,xe)}if(typeof ee.then=="function")return Vt(K,j,yl(ee),xe);if(ee.$$typeof===P)return Vt(K,j,gl(K,ee),xe);Sl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(a(K,j.sibling),xe=u(j,ee),xe.return=K,K=xe):(a(K,j),xe=xu(ee,K.mode,xe),xe.return=K,K=xe),y(K)):a(K,j)}return function(K,j,ee,xe){try{io=0;var Je=Vt(K,j,ee,xe);return $r=null,Je}catch(Ye){if(Ye===Jr||Ye===vl)throw Ye;var Ct=Kn(29,Ye,null,K.mode);return Ct.lanes=xe,Ct.return=K,Ct}}}var xr=kp(!0),jp=kp(!1),Ua=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=dl(t),Rp(t,null,a),n}return fl(t,o,n,a),dl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Or(t,a)}}function Lu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nu=!1;function so(){if(Nu){var t=Qr;if(t!==null)throw t}}function oo(t,n,a,o){Nu=!1;var u=t.updateQueue;Ua=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,te=G.next;G.next=null,y===null?f=te:y.next=te,y=G;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==y&&(R===null?pe.firstBaseUpdate=te:R.next=te,pe.lastBaseUpdate=G))}if(f!==null){var _e=u.baseState;y=0,pe=te=G=null,R=f;do{var re=R.lane&-536870913,le=re!==R.lane;if(le?(St&re)===re:(o&re)===re){re!==0&&re===Kr&&(Nu=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ve=t,et=R;re=n;var Vt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){_e=Ve.call(Vt,_e,re);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,re=typeof Ve=="function"?Ve.call(Vt,_e,re):Ve,re==null)break e;_e=_({},_e,re);break e;case 2:Ua=!0}}re=R.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(te=pe=le,G=_e):pe=pe.next=le,y|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(G=_e),u.baseState=G,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ba|=y,t.lanes=y,t.memoizedState=_e}}function Wp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Xp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Wp(a[t],n)}var es=z(null),bl=z(0);function qp(t,n){t=ua,fe(bl,t),fe(es,n),ua=t|n.baseLanes}function Ou(){fe(bl,ua),fe(es,es.current)}function zu(){ua=bl.current,Y(es),Y(bl)}var Qn=z(null),di=null;function Oa(t){var n=t.alternate;fe(nn,nn.current&1),fe(Qn,t),di===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(di=t)}function Pu(t){fe(nn,nn.current),fe(Qn,t),di===null&&(di=t)}function Yp(t){t.tag===22?(fe(nn,nn.current),fe(Qn,t),di===null&&(di=t)):za()}function za(){fe(nn,nn.current),fe(Qn,Qn.current)}function Jn(t){Y(Qn),di===t&&(di=null),Y(nn)}var nn=z(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ct=null,Ht=null,cn=null,El=!1,ts=!1,vr=!1,Tl=0,lo=0,ns=null,g_=0;function $t(){throw Error(r(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Bu(t,n,a,o,u,f){return na=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Um:$u,vr=!1,f=a(o,u),vr=!1,ts&&(f=Kp(n,a,o,u)),Zp(t),f}function Zp(t){N.H=fo;var n=Ht!==null&&Ht.next!==null;if(na=0,cn=Ht=ct=null,El=!1,lo=0,ns=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&ml(t)&&(un=!0))}function Kp(t,n,a,o){ct=t;var u=0;do{if(ts&&(ns=null),lo=0,ts=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Lm,f=n(a,o)}while(ts);return f}function x_(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ct.flags|=1024),n}function Iu(){var t=Tl!==0;return Tl=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}na=0,cn=Ht=ct=null,ts=!1,lo=Tl=0,ns=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ct.memoizedState=cn=t:cn=cn.next=t,cn}function an(){if(Ht===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=cn===null?ct.memoizedState:cn.next;if(n!==null)cn=n,Ht=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},cn===null?ct.memoizedState=cn=t:cn=cn.next=t}return cn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,ns===null&&(ns=[]),t=Hp(ns,t,n),n=ct,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Um:$u),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===P)return Sn(t)}throw Error(r(438,String(t)))}function Vu(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=ue;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=an();return ku(n,Ht,t)}function ku(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=y=null,G=null,te=n,pe=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(St&_e)===_e:(na&_e)===_e){var re=te.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Kr&&(pe=!0);else if((na&re)===re){te=te.next,re===Kr&&(pe=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(R=G=_e,y=f):G=G.next=_e,ct.lanes|=re,Ba|=re;_e=te.action,vr&&a(f,_e),f=te.hasEagerState?te.eagerState:a(f,_e)}else re={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(R=G=re,y=f):G=G.next=re,ct.lanes|=_e,Ba|=_e;te=te.next}while(te!==null&&te!==n);if(G===null?y=f:G.next=R,!Zn(f,t.memoizedState)&&(un=!0,pe&&(a=Qr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ju(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Qp(t,n,a){var o=ct,u=an(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Zn((Ht||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,qu(em.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,is(9,{destroy:void 0},$p.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));f||(na&127)!==0||Jp(o,n,a)}return a}function Jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Al(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $p(t,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&nm(t)}function em(t,n,a){return a(function(){tm(n)&&nm(t)})}function tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function nm(t){var n=cr(t,2);n!==null&&jn(n,t,2)}function Wu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),vr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function im(t,n,a,o){return t.baseState=a,ku(t,Ht,typeof o=="function"?o:ia)}function v_(t,n,a,o,u){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=N.T,y={};N.T=y;try{var R=a(u,o),G=N.S;G!==null&&G(y,R),rm(t,n,R)}catch(te){Xu(t,n,te)}finally{f!==null&&y.types!==null&&(f.types=y.types),N.T=f}}else try{f=a(u,o),rm(t,n,f)}catch(te){Xu(t,n,te)}}function rm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(t,n,o)},function(o){return Xu(t,n,o)}):sm(t,n,a)}function sm(t,n,a){n.status="fulfilled",n.value=a,om(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,am(t,a)))}function Xu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==o)}t.action=null}function om(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function lm(t,n){return n}function cm(t,n){if(Mt){var a=kt.formState;if(a!==null){e:{var o=ct;if(Mt){if(jt){t:{for(var u=jt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=hi(u.nextSibling),o=u.data==="F!";break e}}Ca(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=o,a=wm.bind(null,ct,o),o.dispatch=a,o=Wu(!1),f=Ju.bind(null,ct,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=v_.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function um(t){var n=an();return fm(n,Ht,t)}function fm(t,n,a){if(n=ku(t,n,lm)[0],t=wl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(y){throw y===Jr?vl:y}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,is(9,{destroy:void 0},__.bind(null,u,a),null)),[o,f,t]}function __(t,n){t.action=n}function dm(t){var n=an(),a=Ht;if(a!==null)return fm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function is(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Al(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function hm(){return an().memoizedState}function Cl(t,n,a,o){var u=Pn();ct.flags|=t,u.memoizedState=is(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(t,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&Fu(o,Ht.memoizedState.deps)?u.memoizedState=is(n,f,a,o):(ct.flags|=t,u.memoizedState=is(1|n,f,a,o))}function pm(t,n){Cl(8390656,8,t,n)}function qu(t,n){Dl(2048,8,t,n)}function y_(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Al(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function mm(t){var n=an().memoizedState;return y_({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function gm(t,n){return Dl(4,2,t,n)}function xm(t,n){return Dl(4,4,t,n)}function vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _m(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,vm.bind(null,n,t),a)}function Yu(){}function ym(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Sm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=t(),vr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function Zu(t,n,a){return a===void 0||(na&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=b0(),ct.lanes|=t,Ba|=t,a)}function bm(t,n,a,o){return Zn(a,n)?a:es.current!==null?(t=Zu(t,a,o),Zn(t,n)||(un=!0),t):(na&42)===0||(na&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=a):(t=b0(),ct.lanes|=t,Ba|=t,n)}function Mm(t,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var y=N.T,R={};N.T=R,Ju(t,!1,n,a);try{var G=u(),te=N.S;if(te!==null&&te(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pe=m_(G,o);uo(t,n,pe,ti(t))}else uo(t,n,o,ti(t))}catch(_e){uo(t,n,{then:function(){},status:"rejected",reason:_e},ti())}finally{I.p=f,y!==null&&R.types!==null&&(y.types=R.types),N.T=y}}function S_(){}function Ku(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Em(t).queue;Mm(t,u,n,ce,a===null?S_:function(){return Tm(t),a(o)})}function Em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:ce},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Tm(t){var n=Em(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ti())}function Qu(){return Sn(wo)}function Am(){return an().memoizedState}function Rm(){return an().memoizedState}function b_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=La(a);var o=Na(n,t,a);o!==null&&(jn(o,n,a),ro(o,n,a)),n={cache:Au()},t.payload=n;return}n=n.return}}function M_(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Cm(n,a):(a=mu(t,n,a,o),a!==null&&(jn(a,t,o),Dm(a,n,o)))}function wm(t,n,a){var o=ti();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Cm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,y))return fl(t,n,u,0),kt===null&&ul(),!1}catch{}if(a=mu(t,n,u,o),a!==null)return jn(a,t,o),Dm(a,n,o),!0}return!1}function Ju(t,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=mu(t,a,o,2),n!==null&&jn(n,t,2)}function Ul(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Cm(t,n){ts=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Dm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Or(t,a)}}var fo={readContext:Sn,use:Rl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};fo.useEffectEvent=$t;var Um={readContext:Sn,use:Rl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:pm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(vr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(vr){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=M_.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,a=wm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(t,n){var a=Pn();return Zu(a,t,n)},useTransition:function(){var t=Wu(!1);return t=Mm.bind(null,ct,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Pn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(St&127)!==0||Jp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(em.bind(null,o,f,t),[t]),o.flags|=2048,is(9,{destroy:void 0},$p.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=kt.identifierPrefix;if(Mt){var a=zi,o=Oi;a=(o&~(1<<32-Ne(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=g_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qu,useFormState:cm,useActionState:cm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vu,useCacheRefresh:function(){return Pn().memoizedState=b_.bind(null,ct)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Sn,use:Rl,useCallback:ym,useContext:Sn,useEffect:qu,useImperativeHandle:_m,useInsertionEffect:gm,useLayoutEffect:xm,useMemo:Sm,useReducer:wl,useRef:hm,useState:function(){return wl(ia)},useDebugValue:Yu,useDeferredValue:function(t,n){var a=an();return bm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=wl(ia)[0],n=an().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Qu,useFormState:um,useActionState:um,useOptimistic:function(t,n){var a=an();return im(a,Ht,t,n)},useMemoCache:Vu,useCacheRefresh:Rm};$u.useEffectEvent=mm;var Lm={readContext:Sn,use:Rl,useCallback:ym,useContext:Sn,useEffect:qu,useImperativeHandle:_m,useInsertionEffect:gm,useLayoutEffect:xm,useMemo:Sm,useReducer:ju,useRef:hm,useState:function(){return ju(ia)},useDebugValue:Yu,useDeferredValue:function(t,n){var a=an();return Ht===null?Zu(a,t,n):bm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=ju(ia)[0],n=an().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Qu,useFormState:dm,useActionState:dm,useOptimistic:function(t,n){var a=an();return Ht!==null?im(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=La(o);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(jn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=La(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(jn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=La(a);o.tag=2,n!=null&&(o.callback=n),n=Na(t,o,a),n!==null&&(jn(n,t,a),ro(n,t,a))}};function Nm(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(u,f):!0}function Om(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&tf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function zm(t){cl(t)}function Pm(t){console.error(t)}function Fm(t){cl(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(t,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Im(t){return t=La(t),t.tag=3,t}function Hm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Bm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Bm(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function E_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?jl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(t,o,u)),!1;case 22:return a.flags|=65536,o===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(t,o,u)),!1}throw Error(r(435,a.tag))}return wf(t,o,u),jl(),!1}if(Mt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Su&&(t=Error(r(422),{cause:o}),eo(li(t,a)))):(o!==Su&&(n=Error(r(423),{cause:o}),eo(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=nf(t.stateNode,o,u),Lu(t,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:o});if(f=li(f,a),yo===null?yo=[f]:yo.push(f),en!==4&&(en=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=nf(a.stateNode,o,t),Lu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Hm(u,t,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(r(461)),un=!1;function bn(t,n,a,o){n.child=t===null?jp(n,null,a,o):xr(n,t.child,a,o)}function Gm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return hr(n),o=Bu(t,n,a,y,f,u),R=Iu(),t!==null&&!un?(Hu(t,n,u),aa(t,n,u)):(Mt&&R&&_u(n),n.flags|=1,bn(t,n,o,u),n.child)}function Vm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(t,n,f,o,u)):(t=hl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!df(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(y,o)&&t.ref===n.ref)return aa(t,n,u)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function km(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Qs(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,df(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,aa(t,n,u)}return rf(t,n,a,o,u)}function jm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Wm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?qp(n,f):Ou(),Yp(n);else return o=n.lanes=536870912,Wm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(xl(n,f.cachePool),qp(n,f),za(),n.memoizedState=null):(t!==null&&xl(n,null),Ou(),za());return bn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(t,n,a,o,u){var f=wu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&xl(n,null),Ou(),Yp(n),t!==null&&Zr(t,n,o,!0),n.childLanes=u,null}function Nl(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xm(t,n,a){return xr(n,t.child,null,a),t=Nl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function T_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Nl(n,o),n.lanes=536870912,ho(null,t);if(Pu(n),(t=jt)?(t=ag(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Cp(t),a.return=n,n.child=a,yn=n,jt=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Nl(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Pu(n),u)if(n.flags&256)n.flags&=-257,n=Xm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=kt,o!==null&&(y=Jo(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,cr(t,y),jn(o,t,y),af;jl(),n=Xm(t,n,a)}else t=f.treeContext,jt=hi(y.nextSibling),yn=n,Mt=!0,wa=null,fi=!1,t!==null&&Lp(n,t),n=Nl(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rf(t,n,a,o,u){return hr(n),a=Bu(t,n,a,o,void 0,u),o=Iu(),t!==null&&!un?(Hu(t,n,u),aa(t,n,u)):(Mt&&o&&_u(n),n.flags|=1,bn(t,n,a,u),n.child)}function qm(t,n,a,o,u,f){return hr(n),n.updateQueue=null,a=Kp(n,o,a,u),Zp(t),o=Iu(),t!==null&&!un?(Hu(t,n,f),aa(t,n,f)):(Mt&&o&&_u(n),n.flags|=1,bn(t,n,a,f),n.child)}function Ym(t,n,a,o,u){if(hr(n),n.stateNode===null){var f=Wr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Sn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Du(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Sn(y):Wr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ef(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&tf.enqueueReplaceState(f,f.state,null),oo(n,o,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,G=_r(a,R);f.props=G;var te=f.context,pe=a.contextType;y=Wr,typeof pe=="object"&&pe!==null&&(y=Sn(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==y)&&Om(n,f,o,y),Ua=!1;var re=n.memoizedState;f.state=re,oo(n,o,f,u),so(),te=n.memoizedState,R||re!==te||Ua?(typeof _e=="function"&&(ef(n,a,_e,o),te=n.memoizedState),(G=Ua||Nm(n,a,G,o,re,te,y))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=y,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(t,n),y=n.memoizedProps,pe=_r(a,y),f.props=pe,_e=n.pendingProps,re=f.context,te=a.contextType,G=Wr,typeof te=="object"&&te!==null&&(G=Sn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==_e||re!==G)&&Om(n,f,o,G),Ua=!1,re=n.memoizedState,f.state=re,oo(n,o,f,u),so();var le=n.memoizedState;y!==_e||re!==le||Ua||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof R=="function"&&(ef(n,a,R,o),le=n.memoizedState),(pe=Ua||Nm(n,a,pe,o,re,le,G)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=G,o=pe):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,u),n.child=xr(n,null,a,u)):bn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=aa(t,n,u),t}function Zm(t,n,a,o){return fr(),n.flags|=256,bn(t,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(t){return{baseLanes:t,cachePool:Bp()}}function lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Km(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Oa(n):za(),(t=jt)?(t=ag(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Cp(t),a.return=n,n.child=a,yn=n,jt=null)):t=null,t===null)throw Ca(n);return jf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(za(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=ur(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=of(a),o.childLanes=lf(t,y,a),n.memoizedState=sf,ho(null,o)):(Oa(n),cf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=uf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),R=ur(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,xr(n,t.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(t,y,a),n.memoizedState=sf,n=ho(null,o));else if(Oa(n),jf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var te=y.dgst;y=te,o=Error(r(419)),o.stack="",o.digest=y,eo({value:o,source:null,stack:null}),n=uf(t,n,a)}else if(un||Zr(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=kt,y!==null&&(o=Jo(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,cr(t,o),jn(y,t,o),af;kf(R)||jl(),n=uf(t,n,a)}else kf(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,jt=hi(R.nextSibling),yn=n,Mt=!0,wa=null,fi=!1,t!==null&&Lp(n,t),n=cf(n,o.children),n.flags|=4096);return n}return u?(za(),R=o.fallback,u=n.mode,G=t.child,te=G.sibling,o=Ji(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,te!==null?R=Ji(te,R):(R=ur(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,ho(null,o),o=n.child,R=t.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Bp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=lf(t,y,a),n.memoizedState=sf,ho(t.child,o)):(Oa(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function cf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function uf(t,n,a){return xr(n,t.child,null,a),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Eu(t.return,n,a)}function ff(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Jm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=nn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,fe(nn,y),bn(t,n,o,a),o=Mt?$s:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,a,n);else if(t.tag===19)Qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function A_(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Da(n,ln,t.memoizedState.cache),fr();break;case 27:case 5:Ke(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(t,n,a):(Oa(n),t=aa(t,n,a),t!==null?t.sibling:null);Oa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Jm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(nn,nn.current),o)break;return null;case 22:return n.lanes=0,jm(t,n,a,n.pendingProps);case 24:Da(n,ln,t.memoizedState.cache)}return aa(t,n,a)}function $m(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!df(t,a)&&(n.flags&128)===0)return un=!1,A_(t,n,a);un=(t.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&Up(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")gu(t)?(o=_r(t,o),n.tag=1,n=Ym(null,n,t,o,a)):(n.tag=0,n=rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Gm(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=Vm(null,n,t,o,a);break e}}throw n=se(t)||t,Error(r(306,n,""))}}return n;case 0:return rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),Ym(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(t,n),oo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Da(n,ln,o),o!==f.cache&&Tu(n,[ln],a,!0),so(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(t,n,o,a);break e}else if(o!==u){u=li(Error(r(424)),n),eo(u),n=Zm(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=hi(t.firstChild),yn=n,Mt=!0,wa=null,fi=!0,a=jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fr(),o===u){n=aa(t,n,a);break e}bn(t,n,o,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=Ql(ne.current).createElement(a),o[rn]=n,o[hn]=t,Mn(o,a,t),W(o),n.stateNode=o):n.memoizedState=ug(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Mt&&(o=n.stateNode=og(n.type,n.pendingProps,ne.current),yn=n,fi=!0,u=jt,ka(n.type)?(Wf=u,jt=hi(o.firstChild)):jt=u),bn(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=jt)&&(o=ny(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,yn=n,jt=hi(o.firstChild),fi=!1,u=!0):u=!1),u||Ca(n)),Ke(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,Hf(u,f)?o=null:y!==null&&Hf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(t,n,x_,null,null,a),wo._currentValue=u),Ol(t,n),bn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=jt)&&(a=iy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,yn=n,jt=null,t=!0):t=!1),t||Ca(n)),null;case 13:return Km(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,a):bn(t,n,o,a),n.child;case 11:return Gm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=Sn(u),o=o(u),n.flags|=1,bn(t,n,o,a),n.child;case 14:return Vm(t,n,n.type,n.pendingProps,a);case 15:return km(t,n,n.type,n.pendingProps,a);case 19:return Jm(t,n,a);case 31:return T_(t,n,a);case 22:return jm(t,n,a,n.pendingProps);case 24:return hr(n),o=Sn(ln),t===null?(u=wu(),u===null&&(u=kt,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Du(n),Da(n,ln,u)):((t.lanes&a)!==0&&(Uu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,ln,o)):(o=f.cache,Da(n,ln,o),o!==u.cache&&Tu(n,[ln],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ra(t){t.flags|=4}function hf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(A0())t.flags|=8192;else throw gr=_l,Cu}else t.flags&=-16777217}function e0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mg(n))if(A0())t.flags|=8192;else throw gr=_l,Cu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pt():536870912,t.lanes|=n,os|=n)}function po(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function R_(t,n,a){var o=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(ln),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bu())),Wt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ra(n),f!==null?(Wt(n),e0(n,f)):(Wt(n),hf(n,u,null,o,a))):f?f!==t.memoizedState?(ra(n),Wt(n),e0(n,f)):(Wt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ra(n),Wt(n),hf(n,u,t,o,a)),null;case 27:if(Xe(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}t=be.current,Yr(n)?Np(n):(t=og(u,o,a),n.stateNode=t,ra(n))}return Wt(n),null;case 5:if(Xe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(f=be.current,Yr(n))Np(n);else{var y=Ql(ne.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[rn]=n,f[hn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Mn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ra(n)}}return Wt(n),hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||K0(t.nodeValue,a)),t||Ca(n,!0)}else t=Ql(t).createTextNode(o),t[rn]=n,n.stateNode=t}return Wt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Yr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),t=!1}else a=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),u=!1}else u=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Wt(n),null);case 4:return Ge(),t===null&&zf(n.stateNode.containerInfo),Wt(n),null;case 10:return ta(n.type),Wt(n),null;case 19:if(Y(nn),o=n.memoizedState,o===null)return Wt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)po(o,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,po(o,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wp(a,t),a=a.sibling;return fe(nn,nn.current&1|2),Mt&&$i(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Gl&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Wt(n),null}else 2*E()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=nn.current,fe(nn,u?a&1|2:a&1),Mt&&$i(n,o.treeForkCount),t):(Wt(n),null);case 22:case 23:return Jn(n),zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(ln),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function w_(t,n){switch(yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(ln),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(nn),null;case 4:return Ge(),null;case 10:return ta(n.type),null;case 22:case 23:return Jn(n),zu(),t!==null&&Y(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(ln),null;case 25:return null;default:return null}}function t0(t,n){switch(yu(n),n.tag){case 3:ta(ln),Ge();break;case 26:case 27:case 5:Xe(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:Y(nn);break;case 10:ta(n.type);break;case 22:case 23:Jn(n),zu(),t!==null&&Y(pr);break;case 24:ta(ln)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Bt(n,n.return,R)}}function Pa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var G=a,te=R;try{te()}catch(pe){Bt(u,G,pe)}}}o=o.next}while(o!==f)}}catch(pe){Bt(n,n.return,pe)}}function n0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Xp(n,a)}catch(o){Bt(t,t.return,o)}}}function i0(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function a0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function pf(t,n,a){try{var o=t.stateNode;K_(o,t.type,a,n),o[hn]=n}catch(u){Bt(t,t.return,u)}}function r0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gf(t,n,a),t=t.sibling;t!==null;)gf(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function s0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,a),n[rn]=t,n[hn]=a}catch(f){Bt(t,t.return,f)}}var sa=!1,fn=!1,xf=!1,o0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function C_(t,n){if(t=t.containerInfo,Bf=ac,t=_p(t),cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,R=-1,G=-1,te=0,pe=0,_e=t,re=null;t:for(;;){for(var le;_e!==a||u!==0&&_e.nodeType!==3||(R=y+u),_e!==f||o!==0&&_e.nodeType!==3||(G=y+o),_e.nodeType===3&&(y+=_e.nodeValue.length),(le=_e.firstChild)!==null;)re=_e,_e=le;for(;;){if(_e===t)break t;if(re===a&&++te===u&&(R=y),re===f&&++pe===o&&(G=y),(le=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=le}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:t,selectionRange:a},ac=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ve=_r(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){Bt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function l0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(t,a),o&4&&mo(5,a);break;case 1:if(la(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Bt(a,a.return,y)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Bt(a,a.return,y)}}o&64&&n0(a),o&512&&go(a,a.return);break;case 3:if(la(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(t,n)}catch(y){Bt(a,a.return,y)}}break;case 27:n===null&&o&4&&s0(a);case 26:case 5:la(t,a),n===null&&o&4&&a0(a),o&512&&go(a,a.return);break;case 12:la(t,a);break;case 31:la(t,a),o&4&&f0(t,a);break;case 13:la(t,a),o&4&&d0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=B_.bind(null,a),ay(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||fn,u=sa;var f=fn;sa=o,(fn=n)&&!f?ca(t,a,(a.subtreeFlags&8772)!==0):la(t,a),sa=u,fn=f}break;case 30:break;default:la(t,a)}}function c0(t){var n=t.alternate;n!==null&&(t.alternate=null,c0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Hn=!1;function oa(t,n,a){for(a=a.child;a!==null;)u0(t,n,a),a=a.sibling}function u0(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),oa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Zt,u=Hn;ka(a.type)&&(Zt=a.stateNode,Hn=!1),oa(t,n,a),To(a.stateNode),Zt=o,Hn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Zt,u=Hn,Zt=null,oa(t,n,a),Zt=o,Hn=u,Zt!==null)if(Hn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Zt!==null&&(Hn?(t=Zt,ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ms(t)):ng(Zt,a.stateNode));break;case 4:o=Zt,u=Hn,Zt=a.stateNode.containerInfo,Hn=!0,oa(t,n,a),Zt=o,Hn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),fn||Pa(4,a,n),oa(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&i0(a,n,o)),oa(t,n,a);break;case 21:oa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,oa(t,n,a),fn=o;break;default:oa(t,n,a)}}function f0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ms(t)}catch(a){Bt(n,n.return,a)}}}function d0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ms(t)}catch(a){Bt(n,n.return,a)}}function D_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new o0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new o0),n;default:throw Error(r(435,t.tag))}}function Bl(t,n){var a=D_(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=I_.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(ka(R.type)){Zt=R.stateNode,Hn=!1;break e}break;case 5:Zt=R.stateNode,Hn=!1;break e;case 3:case 4:Zt=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(Zt===null)throw Error(r(160));u0(f,y,u),Zt=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)h0(n,t),n=n.sibling}var Ei=null;function h0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),o&4&&(Pa(3,t,t.return),mo(3,t),Pa(5,t,t.return));break;case 1:Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ar]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,o,a),f[rn]=t,W(f),o=f;break e;case"link":var y=hg("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=hg("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[rn]=t,W(f),o=f}t.stateNode=o}else pg(u,t.type,t.stateNode);else t.stateNode=dg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?pg(u,t.type,t.stateNode):dg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{zn(u,"")}catch(Ve){Bt(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,pf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Gn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){Bt(t,t.return,Ve)}}break;case 3:if(ec=null,u=Ei,Ei=Jl(n.containerInfo),Gn(n,t),Ei=u,Vn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(Ve){Bt(t,t.return,Ve)}xf&&(xf=!1,p0(t));break;case 4:o=Ei,Ei=Jl(t.stateNode.containerInfo),Gn(n,t),Vn(t),Ei=o;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,te=sa,pe=fn;if(sa=te||u,fn=pe||G,Gn(n,t),fn=pe,sa=te,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||sa||fn||yr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=G.stateNode;var _e=G.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ve){Bt(G,G.return,Ve)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ve){Bt(G,G.return,Ve)}}}else if(n.tag===18){if(a===null){G=n;try{var le=G.stateNode;u?ig(le,!0):ig(G.stateNode,!1)}catch(Ve){Bt(G,G.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(t,a))));break;case 19:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(r0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(t);Fl(t,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(zn(y,""),a.flags&=-33);var R=mf(t);Fl(t,R,y);break;case 3:case 4:var G=a.stateNode.containerInfo,te=mf(t);gf(t,te,G);break;default:throw Error(r(161))}}catch(pe){Bt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function p0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;p0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function la(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l0(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),yr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i0(n,n.return,a),yr(n);break;case 27:To(n.stateNode);case 26:case 5:Pi(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),mo(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Bt(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Wp(G[u],R)}catch(te){Bt(o,o.return,te)}}a&&y&64&&n0(f),go(f,f.return);break;case 27:s0(f);case 26:case 5:ca(u,f,a),a&&o===null&&y&4&&a0(f),go(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&y&4&&f0(u,f);break;case 13:ca(u,f,a),a&&y&4&&d0(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),go(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function _f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(t,n,a,o),n=n.sibling}function m0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),u&2048&&mo(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Ti(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Bt(n,n.return,G)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,o):xo(t,n):f._visibility&2?Ti(t,n,a,o):(f._visibility|=2,as(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(y,n);break;case 24:Ti(t,n,a,o),u&2048&&_f(n.alternate,n);break;default:Ti(t,n,a,o)}}function as(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,R=a,G=o,te=y.flags;switch(y.tag){case 0:case 11:case 15:as(f,y,R,G,u),mo(8,y);break;case 23:break;case 22:var pe=y.stateNode;y.memoizedState!==null?pe._visibility&2?as(f,y,R,G,u):xo(f,y):(pe._visibility|=2,as(f,y,R,G,u)),u&&te&2048&&vf(y.alternate,y);break;case 24:as(f,y,R,G,u),u&&te&2048&&_f(y.alternate,y);break;default:as(f,y,R,G,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&vf(o.alternate,o);break;case 24:xo(a,o),u&2048&&_f(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var vo=8192;function rs(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)g0(t,n,a),t=t.sibling}function g0(t,n,a){switch(t.tag){case 26:rs(t,n,a),t.flags&vo&&t.memoizedState!==null&&gy(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:rs(t,n,a);break;case 3:case 4:var o=Ei;Ei=Jl(t.stateNode.containerInfo),rs(t,n,a),Ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,rs(t,n,a),vo=o):rs(t,n,a));break;default:rs(t,n,a)}}function x0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,_0(o,t)}x0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v0(t),t=t.sibling}function v0(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Il(t)):_o(t);break;default:_o(t)}}function Il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,_0(o,t)}x0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}t=t.sibling}}function _0(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,f=o.return;if(c0(o),o===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var U_={getCacheForType:function(t){var n=Sn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(ln).controller.signal}},L_=typeof WeakMap=="function"?WeakMap:Map,Nt=0,kt=null,xt=null,St=0,Ft=0,$n=null,Fa=!1,ss=!1,yf=!1,ua=0,en=0,Ba=0,Sr=0,Sf=0,ei=0,os=0,yo=null,kn=null,bf=!1,Hl=0,y0=0,Gl=1/0,Vl=null,Ia=null,mn=0,Ha=null,ls=null,fa=0,Mf=0,Ef=null,S0=null,So=0,Tf=null;function ti(){return(Nt&2)!==0&&St!==0?St&-St:N.T!==null?Uf():Ni()}function b0(){if(ei===0)if((St&536870912)===0||Mt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function jn(t,n,a){(t===kt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(cs(t,0),Ga(t,St,ei,!1)),Ln(t,a),((Nt&2)===0||t!==kt)&&(t===kt&&((Nt&2)===0&&(Sr|=a),en===4&&Ga(t,St,ei,!1)),Fi(t))}function M0(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),u=o?z_(t,n):Rf(t,n,!0),f=o;do{if(u===0){ss&&!o&&Ga(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!N_(a)){u=Rf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=yo;var G=R.current.memoizedState.isDehydrated;if(G&&(cs(R,y).flags|=256),y=Rf(R,y,!1),y!==2){if(yf&&!G){R.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break e}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){cs(t,0),Ga(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,ei,!Fa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-E(),10<u)){if(Ga(o,n,ei,!Fa),de(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=eg(E0.bind(null,o,a,kn,Vl,bf,n,ei,Sr,os,Fa,f,"Throttled",-0,0),u);break e}E0(o,a,kn,Vl,bf,n,ei,Sr,os,Fa,f,null,-0,0)}}break}while(!0);Fi(t)}function E0(t,n,a,o,u,f,y,R,G,te,pe,_e,re,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},g0(n,f,_e);var Ve=(f&62914560)===f?Hl-E():(f&4194048)===f?y0-E():0;if(Ve=xy(_e,Ve),Ve!==null){fa=f,t.cancelPendingCommit=Ve(L0.bind(null,t,n,f,a,o,u,y,R,G,pe,_e,null,re,le)),Ga(t,f,y,!te);return}}L0(t,n,f,a,o,u,y,R,G)}function N_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,a,o){n&=~Sf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ne(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Vs(t,a,n)}function kl(){return(Nt&6)===0?(bo(0),!1):!0}function Af(){if(xt!==null){if(Ft===0)var t=xt.return;else t=xt,ea=dr=null,Gu(t),$r=null,io=0,t=xt;for(;t!==null;)t0(t.alternate,t),t=t.return;xt=null}}function cs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$_(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,Af(),kt=t,xt=a=Ji(t.current,null),St=n,Ft=0,$n=null,Fa=!1,ss=Ie(t,n),yf=!1,os=ei=Sf=Sr=Ba=en=0,kn=yo=null,bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ne(o),f=1<<u;n|=t[u],o&=~f}return ua=n,ul(),a}function T0(t,n){ct=null,N.H=fo,n===Jr||n===vl?(n=Gp(),Ft=3):n===Cu?(n=Gp(),Ft=4):Ft=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,xt===null&&(en=1,Ll(t,li(n,t.current)))}function A0(){var t=Qn.current;return t===null?!0:(St&4194048)===St?di===null:(St&62914560)===St||(St&536870912)!==0?t===di:!1}function R0(){var t=N.H;return N.H=fo,t===null?fo:t}function w0(){var t=N.A;return N.A=U_,t}function jl(){en=4,Fa||(St&4194048)!==St&&Qn.current!==null||(ss=!0),(Ba&134217727)===0&&(Sr&134217727)===0||kt===null||Ga(kt,St,ei,!1)}function Rf(t,n,a){var o=Nt;Nt|=2;var u=R0(),f=w0();(kt!==t||St!==n)&&(Vl=null,cs(t,n)),n=!1;var y=en;e:do try{if(Ft!==0&&xt!==null){var R=xt,G=$n;switch(Ft){case 8:Af(),y=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var te=Ft;if(Ft=0,$n=null,us(t,R,G,te),a&&ss){y=0;break e}break;default:te=Ft,Ft=0,$n=null,us(t,R,G,te)}}O_(),y=en;break}catch(pe){T0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ea=dr=null,Nt=o,N.H=u,N.A=f,xt===null&&(kt=null,St=0,ul()),y}function O_(){for(;xt!==null;)C0(xt)}function z_(t,n){var a=Nt;Nt|=2;var o=R0(),u=w0();kt!==t||St!==n?(Vl=null,Gl=E()+500,cs(t,n)):ss=Ie(t,n);e:do try{if(Ft!==0&&xt!==null){n=xt;var f=$n;t:switch(Ft){case 1:Ft=0,$n=null,us(t,n,f,1);break;case 2:case 9:if(Ip(f)){Ft=0,$n=null,D0(n);break}n=function(){Ft!==2&&Ft!==9||kt!==t||(Ft=7),Fi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Ip(f)?(Ft=0,$n=null,D0(n)):(Ft=0,$n=null,us(t,n,f,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var R=xt;if(y?mg(y):R.stateNode.complete){Ft=0,$n=null;var G=R.sibling;if(G!==null)xt=G;else{var te=R.return;te!==null?(xt=te,Wl(te)):xt=null}break t}}Ft=0,$n=null,us(t,n,f,5);break;case 6:Ft=0,$n=null,us(t,n,f,6);break;case 8:Af(),en=6;break e;default:throw Error(r(462))}}P_();break}catch(pe){T0(t,pe)}while(!0);return ea=dr=null,N.H=o,N.A=u,Nt=a,xt!==null?0:(kt=null,St=0,ul(),en)}function P_(){for(;xt!==null&&!qe();)C0(xt)}function C0(t){var n=$m(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?Wl(t):xt=n}function D0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Gu(n);default:t0(a,n),n=xt=wp(n,ua),n=$m(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?Wl(t):xt=n}function us(t,n,a,o){ea=dr=null,Gu(n),$r=null,io=0;var u=n.return;try{if(E_(t,u,n,a,St)){en=1,Ll(t,li(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;en=1,Ll(t,li(a,t.current)),xt=null;return}n.flags&32768?(Mt||o===1?t=!0:ss||(St&536870912)!==0?t=!1:(Fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),U0(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){U0(n,Fa);return}t=n.return;var a=R_(n.alternate,n,ua);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);en===0&&(en=5)}function U0(t,n){do{var a=w_(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);en=6,xt=null}function L0(t,n,a,o,u,f,y,R,G){t.cancelPendingCommit=null;do Xl();while(mn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,_i(t,a,f,y,R,G),t===kt&&(xt=kt=null,St=0),ls=n,Ha=t,fa=a,Mf=f,Ef=u,S0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,H_(he,function(){return F0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=I.p,I.p=2,y=Nt,Nt|=4;try{C_(t,n,a)}finally{Nt=y,I.p=u,N.T=o}}mn=1,N0(),O0(),z0()}}function N0(){if(mn===1){mn=0;var t=Ha,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Nt;Nt|=4;try{h0(n,t);var f=If,y=_p(t.containerInfo),R=f.focusedElem,G=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&vp(R.ownerDocument.documentElement,R)){if(G!==null&&cu(R)){var te=G.start,pe=G.end;if(pe===void 0&&(pe=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(pe,R.value.length);else{var _e=R.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var le=re.getSelection(),Ve=R.textContent.length,et=Math.min(G.start,Ve),Vt=G.end===void 0?et:Math.min(G.end,Ve);!le.extend&&et>Vt&&(y=Vt,Vt=et,et=y);var K=xp(R,et),j=xp(R,Vt);if(K&&j&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var ee=_e.createRange();ee.setStart(K.node,K.offset),le.removeAllRanges(),et>Vt?(le.addRange(ee),le.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),le.addRange(ee))}}}}for(_e=[],le=R;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var xe=_e[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}ac=!!Bf,If=Bf=null}finally{Nt=u,I.p=o,N.T=a}}t.current=n,mn=2}}function O0(){if(mn===2){mn=0;var t=Ha,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Nt;Nt|=4;try{l0(t,n.alternate,n)}finally{Nt=u,I.p=o,N.T=a}}mn=3}}function z0(){if(mn===4||mn===3){mn=0,O();var t=Ha,n=ls,a=fa,o=S0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ls=Ha=null,P0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),Pr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=I.p,I.p=2,N.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{N.T=n,I.p=u}}(fa&3)!==0&&Xl(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Tf?So++:(So=0,Tf=t):So=0,bo(0)}}function P0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Xl(){return N0(),O0(),z0(),F0()}function F0(){if(mn!==5)return!1;var t=Ha,n=Mf;Mf=0;var a=Pr(fa),o=N.T,u=I.p;try{I.p=32>a?32:a,N.T=null,a=Ef,Ef=null;var f=Ha,y=fa;if(mn=0,ls=Ha=null,fa=0,(Nt&6)!==0)throw Error(r(331));var R=Nt;if(Nt|=4,v0(f.current),m0(f,f.current,y,a),Nt=R,bo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{I.p=u,N.T=o,P0(t,n)}}function B0(t,n,a){n=li(a,n),n=nf(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Ln(t,2),Fi(t))}function Bt(t,n,a){if(t.tag===3)B0(t,t,a);else for(;n!==null;){if(n.tag===3){B0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){t=li(a,t),a=Im(2),o=Na(n,a,2),o!==null&&(Hm(a,o,n,t),Ln(o,2),Fi(o));break}}n=n.return}}function wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new L_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yf=!0,u.add(a),t=F_.bind(null,t,n,a),n.then(t,t))}function F_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(St&a)===a&&(en===4||en===3&&(St&62914560)===St&&300>E()-Hl?(Nt&2)===0&&cs(t,0):Sf|=a,os===St&&(os=0)),Fi(t)}function I0(t,n){n===0&&(n=Pt()),t=cr(t,n),t!==null&&(Ln(t,n),Fi(t))}function B_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),I0(t,a)}function I_(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),I0(t,a)}function H_(t,n){return Tt(t,n)}var ql=null,fs=null,Cf=!1,Yl=!1,Df=!1,Va=0;function Fi(t){t!==fs&&t.next===null&&(fs===null?ql=fs=t:fs=fs.next=t),Yl=!0,Cf||(Cf=!0,V_())}function bo(t,n){if(!Df&&Yl){Df=!0;do for(var a=!1,o=ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ne(42|t)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k0(o,f))}else f=St,f=de(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ie(o,f)||(a=!0,k0(o,f));o=o.next}while(a);Df=!1}}function G_(){H0()}function H0(){Yl=Cf=!1;var t=0;Va!==0&&J_()&&(t=Va);for(var n=E(),a=null,o=ql;o!==null;){var u=o.next,f=G0(o,n);f===0?(o.next=null,a===null?ql=u:a.next=u,u===null&&(fs=a)):(a=o,(t!==0||(f&3)!==0)&&(Yl=!0)),o=u}mn!==0&&mn!==5||bo(t),Va!==0&&(Va=0)}function G0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Ne(f),R=1<<y,G=u[y];G===-1?((R&a)===0||(R&o)!==0)&&(u[y]=it(R,n)):G<=n&&(t.expiredLanes|=R),f&=~R}if(n=kt,a=St,a=de(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Pr(a)){case 2:case 8:a=ye;break;case 32:a=he;break;case 268435456:a=Ce;break;default:a=he}return o=V0.bind(null,t),a=Tt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function V0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var o=St;return o=de(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(M0(t,o,n),G0(t,E()),t.callbackNode!=null&&t.callbackNode===a?V0.bind(null,t):null)}function k0(t,n){if(Xl())return null;M0(t,n,!0)}function V_(){ey(function(){(Nt&6)!==0?Tt(ge,G_):H0()})}function Uf(){if(Va===0){var t=Kr;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),Va=t}return Va}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function W0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function k_(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=j0((u[hn]||null).action),y=o.submitter;y&&(n=(n=y[hn]||null)?j0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new sl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Va!==0){var G=y?W0(u,y):new FormData(u);Ku(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=y?W0(u,y):new FormData(u),Ku(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Lf=0;Lf<hu.length;Lf++){var Nf=hu[Lf],j_=Nf.toLowerCase(),W_=Nf[0].toUpperCase()+Nf.slice(1);Mi(j_,"on"+W_)}Mi(bp,"onAnimationEnd"),Mi(Mp,"onAnimationIteration"),Mi(Ep,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(o_,"onTransitionRun"),Mi(l_,"onTransitionStart"),Mi(c_,"onTransitionCancel"),Mi(Tp,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function X0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],G=R.instance,te=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(pe){cl(pe)}u.currentTarget=null,f=G}else for(y=0;y<o.length;y++){if(R=o[y],G=R.instance,te=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(pe){cl(pe)}u.currentTarget=null,f=G}}}}function vt(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var o=t+"__bubble";a.has(o)||(q0(n,t,2,!1),a.add(o))}function Of(t,n,a){var o=0;n&&(o|=4),q0(a,t,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[Zl]){t[Zl]=!0,oe.forEach(function(a){a!=="selectionchange"&&(X_.has(a)||Of(a,!1,t),Of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Of("selectionchange",!1,n))}}function q0(t,n,a,o){switch(bg(n)){case 2:var u=yy;break;case 8:u=Sy;break;default:u=Kf}a=u.bind(null,n,a,t),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Pf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Ea(R),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=f=y;continue e}R=R.parentNode}}o=o.return}Jh(function(){var te=f,pe=Jc(a),_e=[];e:{var re=Ap.get(t);if(re!==void 0){var le=sl,Ve=t;switch(t){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":le=Iv;break;case"focusin":Ve="focus",le=au;break;case"focusout":Ve="blur",le=au;break;case"beforeblur":case"afterblur":le=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Vv;break;case bp:case Mp:case Ep:le=Dv;break;case Tp:le=jv;break;case"scroll":case"scrollend":le=Tv;break;case"wheel":le=Xv;break;case"copy":case"cut":case"paste":le=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=ip;break;case"toggle":case"beforetoggle":le=Yv}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),K=et?re!==null?re+"Capture":null:re;et=[];for(var j=te,ee;j!==null;){var xe=j;if(ee=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ee===null||K===null||(xe=js(j,K),xe!=null&&et.push(Eo(j,xe,ee))),Vt)break;j=j.return}0<et.length&&(re=new le(re,Ve,null,a,pe),_e.push({event:re,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==Qc&&(Ve=a.relatedTarget||a.fromElement)&&(Ea(Ve)||Ve[Yi]))break e;if((le||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,le?(Ve=a.relatedTarget||a.toElement,le=te,Ve=Ve?Ea(Ve):null,Ve!==null&&(Vt=c(Ve),et=Ve.tag,Ve!==Vt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(le=null,Ve=te),le!==Ve)){if(et=tp,xe="onMouseLeave",K="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(et=ip,xe="onPointerLeave",K="onPointerEnter",j="pointer"),Vt=le==null?re:rr(le),ee=Ve==null?re:rr(Ve),re=new et(xe,j+"leave",le,a,pe),re.target=Vt,re.relatedTarget=ee,xe=null,Ea(pe)===te&&(et=new et(K,j+"enter",Ve,a,pe),et.target=ee,et.relatedTarget=Vt,xe=et),Vt=xe,le&&Ve)t:{for(et=q_,K=le,j=Ve,ee=0,xe=K;xe;xe=et(xe))ee++;xe=0;for(var Je=j;Je;Je=et(Je))xe++;for(;0<ee-xe;)K=et(K),ee--;for(;0<xe-ee;)j=et(j),xe--;for(;ee--;){if(K===j||j!==null&&K===j.alternate){et=K;break t}K=et(K),j=et(j)}et=null}else et=null;le!==null&&Y0(_e,re,le,et,!1),Ve!==null&&Vt!==null&&Y0(_e,Vt,Ve,et,!0)}}e:{if(re=te?rr(te):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Ct=fp;else if(cp(re))if(dp)Ct=a_;else{Ct=n_;var Ye=t_}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&Br(te.elementType)&&(Ct=fp):Ct=i_;if(Ct&&(Ct=Ct(t,te))){up(_e,Ct,a,pe);break e}Ye&&Ye(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Si(re,"number",re.value)}switch(Ye=te?rr(te):window,t){case"focusin":(cp(Ye)||Ye.contentEditable==="true")&&(Vr=Ye,uu=te,Js=null);break;case"focusout":Js=uu=Vr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,yp(_e,a,pe);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":yp(_e,a,pe)}var dt;if(su)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Gr?op(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(ap&&a.locale!=="ko"&&(Gr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Gr&&(dt=$h()):(Aa=pe,tu="value"in Aa?Aa.value:Aa.textContent,Gr=!0)),Ye=Kl(te,bt),0<Ye.length&&(bt=new np(bt,t,null,a,pe),_e.push({event:bt,listeners:Ye}),dt?bt.data=dt:(dt=lp(a),dt!==null&&(bt.data=dt)))),(dt=Kv?Qv(t,a):Jv(t,a))&&(bt=Kl(te,"onBeforeInput"),0<bt.length&&(Ye=new np("onBeforeInput","beforeinput",null,a,pe),_e.push({event:Ye,listeners:bt}),Ye.data=dt)),k_(_e,t,te,a,pe)}X0(_e,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=js(t,a),u!=null&&o.unshift(Eo(t,u,f)),u=js(t,n),u!=null&&o.push(Eo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function q_(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Y0(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,G=R.alternate,te=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||te===null||(G=te,u?(te=js(a,f),te!=null&&y.unshift(Eo(a,te,G))):u||(te=js(a,f),te!=null&&y.push(Eo(a,te,G)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Y_=/\r\n?/g,Z_=/\u0000|\uFFFD/g;function Z0(t){return(typeof t=="string"?t:""+t).replace(Y_,`
`).replace(Z_,"")}function K0(t,n){return n=Z0(n),Z0(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(t,""+o);break;case"className":rt(t,"class",o);break;case"tabIndex":rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(t,a,o);break;case"style":Zi(t,o,f);break;case"data":if(n!=="object"){rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=nl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=nl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),nt(t,"popover",o);break;case"xlinkActuate":He(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":He(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":He(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":He(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":He(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":He(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":He(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":He(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":He(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mv.get(a)||a,nt(t,a,o))}}function Ff(t,n,a,o,u,f){switch(a){case"style":Zi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?zn(t,o):(typeof o=="number"||typeof o=="bigint")&&zn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):nt(t,a,o)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,y,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=f=y=u=null,G=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":y=pe;break;case"checked":G=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Gt(t,n,o,pe,a,null)}}qn(t,f,R,G,te,y,u,!1);return;case"select":vt("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Gt(t,n,u,R,a,null)}n=f,a=y,t.multiple=!!o,n!=null?Yn(t,!!o,n,!1):a!=null&&Yn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(t,n,y,R,a,null)}sn(t,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(t,n,G,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Mo.length;o++)vt(Mo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,te,o,a,null)}return;default:if(Br(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Ff(t,n,pe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Gt(t,n,R,o,a,null))}function K_(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,G=null,te=null,pe=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":G=_e;default:o.hasOwnProperty(le)||Gt(t,n,le,null,o,_e)}}for(var re in o){var le=o[re];if(_e=a[re],o.hasOwnProperty(re)&&(le!=null||_e!=null))switch(re){case"type":f=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":pe=le;break;case"value":y=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==_e&&Gt(t,n,re,le,o,_e)}}On(t,y,R,G,te,pe,f,u);return;case"select":le=y=R=re=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":le=G;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":re=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==G&&Gt(t,n,u,f,o,G)}n=R,a=y,o=le,re!=null?Yn(t,!!a,re,!1):!!o!=!!a&&(n!=null?Yn(t,!!a,n,!0):Yn(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(t,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(t,n,y,u,o,f)}zt(t,re,le);return;case"option":for(var Ve in a)re=a[Ve],a.hasOwnProperty(Ve)&&re!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Gt(t,n,Ve,null,o,re));for(G in o)re=o[G],le=a[G],o.hasOwnProperty(G)&&re!==le&&(re!=null||le!=null)&&(G==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Gt(t,n,G,re,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)re=a[et],a.hasOwnProperty(et)&&re!=null&&!o.hasOwnProperty(et)&&Gt(t,n,et,null,o,re);for(te in o)if(re=o[te],le=a[te],o.hasOwnProperty(te)&&re!==le&&(re!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Gt(t,n,te,re,o,le)}return;default:if(Br(n)){for(var Vt in a)re=a[Vt],a.hasOwnProperty(Vt)&&re!==void 0&&!o.hasOwnProperty(Vt)&&Ff(t,n,Vt,void 0,o,re);for(pe in o)re=o[pe],le=a[pe],!o.hasOwnProperty(pe)||re===le||re===void 0&&le===void 0||Ff(t,n,pe,re,o,le);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!o.hasOwnProperty(K)&&Gt(t,n,K,null,o,re);for(_e in o)re=o[_e],le=a[_e],!o.hasOwnProperty(_e)||re===le||re==null&&le==null||Gt(t,n,_e,re,o,le)}function Q0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Q_(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&Q0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],te=G.startTime;if(te>R)break;var pe=G.transferSize,_e=G.initiatorType;pe&&Q0(_e)&&(G=G.responseEnd,y+=pe*(G<R?1:(R-te)/(G-te)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bf=null,If=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function J0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function J_(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(ty)}:eg;function ty(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function ng(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ms(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[ar]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&To(t.ownerDocument.body);a=u}while(a);ms(n)}function ig(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ny(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function iy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function ag(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$?"||t.data==="$~"}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ay(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wf=null;function rg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function og(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ks(t)}var pi=new Map,lg=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=I.d;I.d={f:ry,r:sy,D:oy,C:ly,L:cy,m:uy,X:dy,S:fy,M:hy};function ry(){var t=da.f(),n=kl();return t||n}function sy(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?Tm(n):da.r(t)}var ds=typeof document>"u"?null:document;function cg(t,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lg.has(u)||(lg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",t),W(n),o.head.appendChild(n)))}}function oy(t){da.D(t),cg("dns-prefetch",t,null)}function ly(t,n){da.C(t,n),cg("preconnect",t,n)}function cy(t,n,a){da.L(t,n,a);var o=ds;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var f=u;switch(n){case"style":f=hs(t);break;case"script":f=ps(t)}pi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Mn(n,"link",t),W(n),o.head.appendChild(n)))}}function uy(t,n){da.m(t,n);var a=ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(t)}if(!pi.has(f)&&(t=_({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Mn(o,"link",t),W(o),a.head.appendChild(o)}}}function fy(t,n,a){da.S(t,n,a);var o=ds;if(o&&t){var u=w(o).hoistableStyles,f=hs(t);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Ao(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&Xf(t,a);var G=y=o.createElement("link");W(G),Mn(G,"link",t),G._p=new Promise(function(te,pe){G.onload=te,G.onerror=pe}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function dy(t,n){da.X(t,n);var a=ds;if(a&&t){var o=w(a).hoistableScripts,u=ps(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=_({src:t,async:!0},n),(n=pi.get(u))&&qf(t,n),f=a.createElement("script"),W(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hy(t,n){da.M(t,n);var a=ds;if(a&&t){var o=w(a).hoistableScripts,u=ps(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&qf(t,n),f=a.createElement("script"),W(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ug(t,n,a,o){var u=(u=ne.current)?Jl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var f=w(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(Ao(t)))&&!f._p&&(y.instance=f,y.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||py(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+at(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function fg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function py(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),W(n),t.head.appendChild(n))}function ps(t){return'[src="'+at(t)+'"]'}function Ro(t){return"script[async]"+t}function dg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),W(o),Mn(o,"style",u),$l(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=fg(a),(u=pi.get(u))&&Xf(o,u),f=(t.ownerDocument||t).createElement("link"),W(f);var y=f;return y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Mn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=ps(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,W(u),u):(o=a,(u=pi.get(f))&&(o=_({},a),qf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),W(u),Mn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,t));return n.instance}function $l(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function hg(t,n,a){if(ec===null){var o=new Map,u=ec=new Map;u.set(a,o)}else u=ec,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ar]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function pg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function my(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(o.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,o=fg(o),(u=pi.get(u))&&Xf(o,u),f=f.createElement("link"),W(f);var y=f;y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Mn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function xy(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Yf===0&&(Yf=62500*Q_());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Yf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(vy,t),nc=null,tc.call(t))}function vy(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var o=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var wo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function _y(t,n,a,o,u,f,y,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function gg(t,n,a,o,u,f,y,R,G,te,pe,_e){return t=new _y(t,n,a,y,G,te,pe,_e,R),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Au(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Du(f),t}function xg(t){return t?(t=Wr,t):Wr}function vg(t,n,a,o,u,f){u=xg(u),o.context===null?o.context=u:o.pendingContext=u,o=La(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Na(t,o,n),a!==null&&(jn(a,t,n),ro(a,t,n))}function _g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){_g(t,n),(t=t.alternate)&&_g(t,n)}function yg(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&jn(n,t,67108864),Zf(t,67108864)}}function Sg(t){if(t.tag===13||t.tag===31){var n=ti();n=zr(n);var a=cr(t,n);a!==null&&jn(a,t,n),Zf(t,n)}}var ac=!0;function yy(t,n,a,o){var u=N.T;N.T=null;var f=I.p;try{I.p=2,Kf(t,n,a,o)}finally{I.p=f,N.T=u}}function Sy(t,n,a,o){var u=N.T;N.T=null;var f=I.p;try{I.p=8,Kf(t,n,a,o)}finally{I.p=f,N.T=u}}function Kf(t,n,a,o){if(ac){var u=Qf(o);if(u===null)Pf(t,n,o,rc,a),Mg(t,o);else if(My(u,t,n,a,o))o.stopPropagation();else if(Mg(t,o),n&4&&-1<by.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Te(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var G=1<<31-Ne(y);R.entanglements[1]|=G,y&=~G}Fi(f),(Nt&6)===0&&(Gl=E()+500,bo(0))}}break;case 31:case 13:R=cr(f,2),R!==null&&jn(R,f,2),kl(),Zf(f,2)}if(f=Qf(o),f===null&&Pf(t,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Pf(t,n,o,null,a)}}function Qf(t){return t=Jc(t),Jf(t)}var rc=null;function Jf(t){if(rc=null,t=Ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function bg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ge:return 2;case ye:return 8;case he:case je:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var $f=!1,ja=null,Wa=null,Xa=null,Co=new Map,Do=new Map,qa=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mg(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&yg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function My(t,n,a,o,u){switch(n){case"focusin":return ja=Uo(ja,t,n,a,o,u),!0;case"dragenter":return Wa=Uo(Wa,t,n,a,o,u),!0;case"mouseover":return Xa=Uo(Xa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Uo(Co.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,o,u)),!0}return!1}function Eg(t){var n=Ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){Sg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){Sg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=Ta(a),n!==null&&yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Tg(t,n,a){sc(t)&&a.delete(n)}function Ey(){$f=!1,ja!==null&&sc(ja)&&(ja=null),Wa!==null&&sc(Wa)&&(Wa=null),Xa!==null&&sc(Xa)&&(Xa=null),Co.forEach(Tg),Do.forEach(Tg)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ey)))}var lc=null;function Ag(t){lc!==t&&(lc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ms(t){function n(G){return oc(G,t)}ja!==null&&oc(ja,t),Wa!==null&&oc(Wa,t),Xa!==null&&oc(Xa,t),Co.forEach(n),Do.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Eg(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[hn]||null;if(typeof f=="function")y||Ag(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[hn]||null)R=y.formAction;else if(Jf(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Ag(a)}}}function Rg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(t){this._internalRoot=t}cc.prototype.render=ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();vg(a,o,t,n,null,null)},cc.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;vg(t.current,2,null,t,null,null),kl(),n[Yi]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ni();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&Eg(t)}};var wg=e.version;if(wg!=="19.2.4")throw Error(r(527,wg,"19.2.4"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Ty={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Ae=uc.inject(Ty),Ee=uc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=zm,f=Pm,y=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=gg(t,1,!1,null,null,a,o,null,u,f,y,Rg),t[Yi]=n.current,zf(t),new ed(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=zm,y=Pm,R=Fm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=gg(t,1,!0,n,a??null,o,u,G,f,y,R,Rg),n.context=xg(null),a=n.current,o=ti(),o=zr(o),u=La(o),u.callback=null,Na(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Fi(n),t[Yi]=n.current,zf(t),new cc(n)},No.version="19.2.4",No}var Bg;function zy(){if(Bg)return nd.exports;Bg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),nd.exports=Oy(),nd.exports}var Py=zy(),$e=zh();const Ph="183",Fy=0,Ig=1,By=2,zc=1,Iy=2,Vo=3,ir=0,Xn=1,Ci=2,_a=0,Us=1,Hg=2,Gg=3,Vg=4,Hy=5,Cr=100,Gy=101,Vy=102,ky=103,jy=104,Wy=200,Xy=201,qy=202,Yy=203,Gd=204,Vd=205,Zy=206,Ky=207,Qy=208,Jy=209,$y=210,eS=211,tS=212,nS=213,iS=214,kd=0,jd=1,Wd=2,Ns=3,Xd=4,qd=5,Yd=6,Zd=7,Hx=0,aS=1,rS=2,ki=0,Gx=1,Vx=2,kx=3,jx=4,Wx=5,Xx=6,qx=7,Yx=300,Nr=301,Os=302,od=303,ld=304,Wc=306,Kd=1e3,va=1001,Qd=1002,Tn=1003,sS=1004,fc=1005,Dn=1006,cd=1007,Ur=1008,ri=1009,Zx=1010,Kx=1011,Wo=1012,Fh=1013,Wi=1014,Gi=1015,Sa=1016,Bh=1017,Ih=1018,Xo=1020,Qx=35902,Jx=35899,$x=1021,ev=1022,Ui=1023,ba=1026,Lr=1027,tv=1028,Hh=1029,zs=1030,Gh=1031,Vh=1033,Pc=33776,Fc=33777,Bc=33778,Ic=33779,Jd=35840,$d=35841,eh=35842,th=35843,nh=36196,ih=37492,ah=37496,rh=37488,sh=37489,oh=37490,lh=37491,ch=37808,uh=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,xh=37816,vh=37817,_h=37818,yh=37819,Sh=37820,bh=37821,Mh=36492,Eh=36494,Th=36495,Ah=36283,Rh=36284,wh=36285,Ch=36286,oS=3200,nv=0,lS=1,tr="",gi="srgb",Ps="srgb-linear",Gc="linear",It="srgb",gs=7680,kg=519,cS=512,uS=513,fS=514,kh=515,dS=516,hS=517,jh=518,pS=519,jg=35044,Wg="300 es",Vi=2e3,qo=2001;function mS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gS(){const s=Vc("canvas");return s.style.display="block",s}const Xg={};function qg(...s){const e="THREE."+s.shift();console.log(e,...s)}function iv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=iv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Ut(...s){s=iv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function kc(...s){const e=s.join(" ");e in Xg||(Xg[e]=!0,ot(...s))}function xS(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const vS={[kd]:jd,[Wd]:Yd,[Xd]:Zd,[Ns]:qd,[jd]:kd,[Yd]:Wd,[Zd]:Xd,[qd]:Ns};class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Dh=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function _t(s,e,i){return Math.max(e,Math.min(i,s))}function _S(s,e){return(s%e+e)%e}function fd(s,e,i){return(1-i)*s+i*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,i=0){mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],g=r[l+2],_=r[l+3],x=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(_!==C||m!==x||h!==M||g!==T){let b=m*x+h*M+g*T+_*C;b<0&&(x=-x,M=-M,T=-T,C=-C,b=-b);let S=1-p;if(b<.9995){const D=Math.acos(b),P=Math.sin(D);S=Math.sin(S*D)/P,p=Math.sin(p*D)/P,m=m*S+x*p,h=h*S+M*p,g=g*S+T*p,_=_*S+C*p}else{m=m*S+x*p,h=h*S+M*p,g=g*S+T*p,_=_*S+C*p;const D=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=D,h*=D,g*=D,_*=D}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],g=r[l+3],_=c[d],x=c[d+1],M=c[d+2],T=c[d+3];return e[i]=p*T+g*_+m*M-h*x,e[i+1]=m*T+g*x+h*_-p*M,e[i+2]=h*T+g*M+p*x-m*_,e[i+3]=g*T-p*_-m*x-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),g=p(l/2),_=p(c/2),x=m(r/2),M=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=x*g*_+h*M*T,this._y=h*M*_-x*g*T,this._z=h*g*T+x*M*_,this._w=h*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+h*M*T,this._y=h*M*_-x*g*T,this._z=h*g*T-x*M*_,this._w=h*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-h*M*T,this._y=h*M*_+x*g*T,this._z=h*g*T+x*M*_,this._w=h*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-h*M*T,this._y=h*M*_+x*g*T,this._z=h*g*T-x*M*_,this._w=h*g*_+x*M*T;break;case"YZX":this._x=x*g*_+h*M*T,this._y=h*M*_+x*g*T,this._z=h*g*T-x*M*_,this._w=h*g*_-x*M*T;break;case"XZY":this._x=x*g*_-h*M*T,this._y=h*M*_-x*g*T,this._z=h*g*T+x*M*_,this._w=h*g*_+x*M*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],g=i[6],_=i[10],x=r+p+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(r>p&&r>_){const M=2*Math.sqrt(1+r-p-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-r-_);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+d*p+l*h-c*m,this._y=l*g+d*m+c*p-r*h,this._z=c*g+d*h+r*m-l*p,this._w=d*g-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,i=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Yg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Yg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),g=2*(p*i-c*l),_=2*(c*r-d*i);return this.x=i+m*h+d*_-p*g,this.y=r+m*g+p*h-c*_,this.z=l+m*_+c*g-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new ie,Yg=new Is;class ht{constructor(e,i,r,l,c,d,p,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],g=r[4],_=r[7],x=r[2],M=r[5],T=r[8],C=l[0],b=l[3],S=l[6],D=l[1],P=l[4],L=l[7],H=l[2],F=l[5],B=l[8];return c[0]=d*C+p*D+m*H,c[3]=d*b+p*P+m*F,c[6]=d*S+p*L+m*B,c[1]=h*C+g*D+_*H,c[4]=h*b+g*P+_*F,c[7]=h*S+g*L+_*B,c[2]=x*C+M*D+T*H,c[5]=x*b+M*P+T*F,c[8]=x*S+M*L+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*d*g-i*p*h-r*c*g+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=g*d-p*h,x=p*m-g*c,M=h*c-d*m,T=i*_+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(l*h-g*r)*C,e[2]=(p*r-l*d)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(hd.makeScale(e,i)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new ht,Zg=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yS(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===It&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===tr?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:e,whitePoint:r,transfer:Gc,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Rt=yS();function ya(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class SS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xs===void 0&&(xs=Vc("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=xs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ya(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ya(i[r]/255)*255):i[r]=ya(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?SS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let MS=0;const md=new ie;class Un extends Bs{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=va,l=va,c=Dn,d=Ur,p=Ui,m=ri,h=Un.DEFAULT_ANISOTROPY,g=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Zo(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Yx;Un.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],g=m[4],_=m[8],x=m[1],M=m[5],T=m[9],C=m[2],b=m[6],S=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(T-b)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(T+b)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,L=(M+1)/2,H=(S+1)/2,F=(g+x)/4,B=(_+C)/4,A=(T+b)/4;return P>L&&P>H?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=F/r,c=B/r):L>H?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=F/l,c=A/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=B/c,l=A/c),this.set(r,l,c,i),this}let D=Math.sqrt((b-T)*(b-T)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(b-T)/D,this.y=(_-C)/D,this.z=(x-g)/D,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ES extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Un(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends ES{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class av extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TS extends Un{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(e,i,r,l,c,d,p,m,h,g,_,x,M,T,C,b){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,g,_,x,M,T,C,b)}set(e,i,r,l,c,d,p,m,h,g,_,x,M,T,C,b){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=g,S[10]=_,S[14]=x,S[3]=M,S[7]=T,S[11]=C,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),c=1/vs.setFromMatrixColumn(e,1).length(),d=1/vs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*g,M=d*_,T=p*g,C=p*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=M+T*h,i[5]=x-C*h,i[9]=-p*m,i[2]=C-x*h,i[6]=T+M*h,i[10]=d*m}else if(e.order==="YXZ"){const x=m*g,M=m*_,T=h*g,C=h*_;i[0]=x+C*p,i[4]=T*p-M,i[8]=d*h,i[1]=d*_,i[5]=d*g,i[9]=-p,i[2]=M*p-T,i[6]=C+x*p,i[10]=d*m}else if(e.order==="ZXY"){const x=m*g,M=m*_,T=h*g,C=h*_;i[0]=x-C*p,i[4]=-d*_,i[8]=T+M*p,i[1]=M+T*p,i[5]=d*g,i[9]=C-x*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const x=d*g,M=d*_,T=p*g,C=p*_;i[0]=m*g,i[4]=T*h-M,i[8]=x*h+C,i[1]=m*_,i[5]=C*h+x,i[9]=M*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*g,i[4]=C-x*_,i[8]=T*_+M,i[1]=_,i[5]=d*g,i[9]=-p*g,i[2]=-h*g,i[6]=M*_+T,i[10]=x-C*_}else if(e.order==="XZY"){const x=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=x*_+C,i[5]=d*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=p*g,i[10]=C*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,RS)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Za.crossVectors(r,ni),Za.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Za.crossVectors(r,ni)),Za.normalize(),dc.crossVectors(ni,Za),l[0]=Za.x,l[4]=dc.x,l[8]=ni.x,l[1]=Za.y,l[5]=dc.y,l[9]=ni.y,l[2]=Za.z,l[6]=dc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],g=r[1],_=r[5],x=r[9],M=r[13],T=r[2],C=r[6],b=r[10],S=r[14],D=r[3],P=r[7],L=r[11],H=r[15],F=l[0],B=l[4],A=l[8],U=l[12],ue=l[1],V=l[5],Z=l[9],J=l[13],se=l[2],Q=l[6],N=l[10],I=l[14],ce=l[3],me=l[7],Se=l[11],z=l[15];return c[0]=d*F+p*ue+m*se+h*ce,c[4]=d*B+p*V+m*Q+h*me,c[8]=d*A+p*Z+m*N+h*Se,c[12]=d*U+p*J+m*I+h*z,c[1]=g*F+_*ue+x*se+M*ce,c[5]=g*B+_*V+x*Q+M*me,c[9]=g*A+_*Z+x*N+M*Se,c[13]=g*U+_*J+x*I+M*z,c[2]=T*F+C*ue+b*se+S*ce,c[6]=T*B+C*V+b*Q+S*me,c[10]=T*A+C*Z+b*N+S*Se,c[14]=T*U+C*J+b*I+S*z,c[3]=D*F+P*ue+L*se+H*ce,c[7]=D*B+P*V+L*Q+H*me,c[11]=D*A+P*Z+L*N+H*Se,c[15]=D*U+P*J+L*I+H*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],g=e[2],_=e[6],x=e[10],M=e[14],T=e[3],C=e[7],b=e[11],S=e[15],D=m*M-h*x,P=p*M-h*_,L=p*x-m*_,H=d*M-h*g,F=d*x-m*g,B=d*_-p*g;return i*(C*D-b*P+S*L)-r*(T*D-b*H+S*F)+l*(T*P-C*H+S*B)-c*(T*L-C*F+b*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=e[9],x=e[10],M=e[11],T=e[12],C=e[13],b=e[14],S=e[15],D=i*p-r*d,P=i*m-l*d,L=i*h-c*d,H=r*m-l*p,F=r*h-c*p,B=l*h-c*m,A=g*C-_*T,U=g*b-x*T,ue=g*S-M*T,V=_*b-x*C,Z=_*S-M*C,J=x*S-M*b,se=D*J-P*Z+L*V+H*ue-F*U+B*A;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/se;return e[0]=(p*J-m*Z+h*V)*Q,e[1]=(l*Z-r*J-c*V)*Q,e[2]=(C*B-b*F+S*H)*Q,e[3]=(x*F-_*B-M*H)*Q,e[4]=(m*ue-d*J-h*U)*Q,e[5]=(i*J-l*ue+c*U)*Q,e[6]=(b*L-T*B-S*P)*Q,e[7]=(g*B-x*L+M*P)*Q,e[8]=(d*Z-p*ue+h*A)*Q,e[9]=(r*ue-i*Z-c*A)*Q,e[10]=(T*F-C*L+S*D)*Q,e[11]=(_*L-g*F-M*D)*Q,e[12]=(p*U-d*V-m*A)*Q,e[13]=(i*V-r*U+l*A)*Q,e[14]=(C*P-T*H-b*D)*Q,e[15]=(g*H-_*P+x*D)*Q,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,g=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+r,g*m-l*d,0,h*m-l*p,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,g=d+d,_=p+p,x=c*h,M=c*g,T=c*_,C=d*g,b=d*_,S=p*_,D=m*h,P=m*g,L=m*_,H=r.x,F=r.y,B=r.z;return l[0]=(1-(C+S))*H,l[1]=(M+L)*H,l[2]=(T-P)*H,l[3]=0,l[4]=(M-L)*F,l[5]=(1-(x+S))*F,l[6]=(b+D)*F,l[7]=0,l[8]=(T+P)*B,l[9]=(b-D)*B,l[10]=(1-(x+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=vs.set(l[0],l[1],l[2]).length();const p=vs.set(l[4],l[5],l[6]).length(),m=vs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ai.copy(this);const h=1/d,g=1/p,_=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=Vi,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let T,C;if(m)T=c/(d-c),C=d*c/(d-c);else if(p===Vi)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===qo)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=Vi,m=!1){const h=this.elements,g=2/(i-e),_=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,C;if(m)T=1/(d-c),C=d/(d-c);else if(p===Vi)T=-2/(d-c),C=-(d+c)/(d-c);else if(p===qo)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vs=new ie,Ai=new Qt,AS=new ie(0,0,0),RS=new ie(1,1,1),Za=new ie,dc=new ie,ni=new ie,Qg=new Qt,Jg=new Is;class Xi{constructor(e=0,i=0,r=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const $g=new ie,_s=new Is,ha=new Qt,hc=new ie,zo=new ie,CS=new ie,DS=new Is,ex=new ie(1,0,0),tx=new ie(0,1,0),nx=new ie(0,0,1),ix={type:"added"},US={type:"removed"},ys={type:"childadded",child:null},gd={type:"childremoved",child:null};class An extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ie,i=new Xi,r=new Is,l=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ex,e)}rotateY(e){return this.rotateOnAxis(tx,e)}rotateZ(e){return this.rotateOnAxis(nx,e)}translateOnAxis(e,i){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ex,e)}translateY(e){return this.translateOnAxis(tx,e)}translateZ(e){return this.translateOnAxis(nx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?hc.copy(e):hc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(zo,hc,this.up):ha.lookAt(hc,zo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ha),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ix),ys.child=e,this.dispatchEvent(ys),ys.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(US),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ix),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,DS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),g=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),T=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new ie(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ko extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LS={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const b=i.getJointPose(C,r),S=this._getHandJoint(h,C);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;h.inputState.pinching&&x>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},pc={h:0,s:0,l:0};function vd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Et{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=_S(e,1),i=_t(i,0,1),r=_t(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=vd(d,c,e+1/3),this.g=vd(d,c,e),this.b=vd(d,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=sv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Rt.workingToColorSpace(Cn.copy(this),e),Math.round(_t(Cn.r*255,0,255))*65536+Math.round(_t(Cn.g*255,0,255))*256+Math.round(_t(Cn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const g=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=g<=.5?_/(d+p):_/(2-d-p),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=gi){Rt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(pc);const r=fd(Ka.h,pc.h,i),l=fd(Ka.s,pc.s,i),c=fd(Ka.l,pc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Et;Et.NAMES=sv;class NS extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new ie,pa=new ie,_d=new ie,ma=new ie,Ss=new ie,bs=new ie,ax=new ie,yd=new ie,Sd=new ie,bd=new ie,Md=new tn,Ed=new tn,Td=new tn;class Di{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),pa.subVectors(r,i),_d.subVectors(e,i);const d=Ri.dot(Ri),p=Ri.dot(pa),m=Ri.dot(_d),h=pa.dot(pa),g=pa.dot(_d),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(h*m-p*g)*x,T=(d*g-p*m)*x;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(d,ma.y),m.addScaledVector(p,ma.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(e,i),Ed.fromBufferAttribute(e,r),Td.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Md,c.x),d.addScaledVector(Ed,c.y),d.addScaledVector(Td,c.z),d}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),pa.subVectors(e,i),Ri.cross(pa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ri.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Ss.subVectors(l,r),bs.subVectors(c,r),yd.subVectors(e,r);const m=Ss.dot(yd),h=bs.dot(yd);if(m<=0&&h<=0)return i.copy(r);Sd.subVectors(e,l);const g=Ss.dot(Sd),_=bs.dot(Sd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*h;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(Ss,d);bd.subVectors(e,c);const M=Ss.dot(bd),T=bs.dot(bd);if(T>=0&&M<=T)return i.copy(c);const C=M*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(bs,p);const b=g*T-M*_;if(b<=0&&_-g>=0&&M-T>=0)return ax.subVectors(c,l),p=(_-g)/(_-g+(M-T)),i.copy(l).addScaledVector(ax,p);const S=1/(b+C+x);return d=C*S,p=x*S,i.copy(r).addScaledVector(Ss,d).addScaledVector(bs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mc.copy(r.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),gc.subVectors(this.max,Po),Ms.subVectors(e.a,Po),Es.subVectors(e.b,Po),Ts.subVectors(e.c,Po),Qa.subVectors(Es,Ms),Ja.subVectors(Ts,Es),br.subVectors(Ms,Ts);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-br.z,br.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,br.z,0,-br.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-br.y,br.x,0];return!Ad(i,Ms,Es,Ts,gc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,Ms,Es,Ts,gc))?!1:(xc.crossVectors(Qa,Ja),i=[xc.x,xc.y,xc.z],Ad(i,Ms,Es,Ts,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],wi=new ie,mc=new Ko,Ms=new ie,Es=new ie,Ts=new ie,Qa=new ie,Ja=new ie,br=new ie,Po=new ie,gc=new ie,xc=new ie,Mr=new ie;function Ad(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Mr.fromArray(s,c);const p=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),h=i.dot(Mr),g=r.dot(Mr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const dn=new ie,vc=new mt;let OS=0;class Li{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=jg,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jg&&(e.usage=this.usage),e}}class ov extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class lv extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Bn extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}const zS=new Ko,Fo=new ie,Rd=new ie;class Xc{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):zS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Rd)),this.expandByPoint(Fo.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PS=0;const mi=new Qt,wd=new An,As=new ie,ii=new Ko,Bo=new Ko,_n=new ie;class si extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mS(e)?lv:ov)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Bn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Bo.setFromBufferAttribute(p),this.morphTargetsRelative?(_n.addVectors(ii.min,Bo.min),ii.expandByPoint(_n),_n.addVectors(ii.max,Bo.max),ii.expandByPoint(_n)):(ii.expandByPoint(Bo.min),ii.expandByPoint(Bo.max))}ii.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)_n.fromBufferAttribute(p,h),m&&(As.fromBufferAttribute(e,h),_n.add(As)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<r.count;A++)p[A]=new ie,m[A]=new ie;const h=new ie,g=new ie,_=new ie,x=new mt,M=new mt,T=new mt,C=new ie,b=new ie;function S(A,U,ue){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,ue),x.fromBufferAttribute(c,A),M.fromBufferAttribute(c,U),T.fromBufferAttribute(c,ue),g.sub(h),_.sub(h),M.sub(x),T.sub(x);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),b.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(V),p[A].add(C),p[U].add(C),p[ue].add(C),m[A].add(b),m[U].add(b),m[ue].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,U=D.length;A<U;++A){const ue=D[A],V=ue.start,Z=ue.count;for(let J=V,se=V+Z;J<se;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new ie,L=new ie,H=new ie,F=new ie;function B(A){H.fromBufferAttribute(l,A),F.copy(H);const U=p[A];P.copy(U),P.sub(H.multiplyScalar(H.dot(U))).normalize(),L.crossVectors(F,U);const V=L.dot(m[A])<0?-1:1;d.setXYZW(A,P.x,P.y,P.z,V)}for(let A=0,U=D.length;A<U;++A){const ue=D[A],V=ue.start,Z=ue.count;for(let J=V,se=V+Z;J<se;J+=3)B(e.getX(J+0)),B(e.getX(J+1)),B(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new ie,c=new ie,d=new ie,p=new ie,m=new ie,h=new ie,g=new ie,_=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),C=e.getX(x+1),b=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,b),p.add(g),m.add(g),h.add(g),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(b,h.x,h.y,h.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,_=p.normalized,x=new h.constructor(m.length*g);let M=0,T=0;for(let C=0,b=m.length;C<b;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*g;for(let S=0;S<g;S++)x[T++]=h[M++]}return new Li(x,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,_=h.length;g<_;g++){const x=h[g],M=e(x,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,x=h.length;_<x;_++){const M=h[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,g=d.length;h<g;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let FS=0;class Hs extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Us,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Vd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gd&&(r.blendSrc=this.blendSrc),this.blendDst!==Vd&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new ie,Cd=new ie,_c=new ie,$a=new ie,Dd=new ie,yc=new ie,Ud=new ie;class cv{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Cd.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Cd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(_c),p=$a.dot(this.direction),m=-$a.dot(_c),h=$a.lengthSq(),g=Math.abs(1-d*d);let _,x,M,T;if(g>0)if(_=d*m-p,x=d*p-m,T=c*g,_>=0)if(x>=-T)if(x<=T){const C=1/g;_*=C,x*=C,M=_*(_+d*x+2*p)+x*(d*_+x+2*m)+h}else x=c,_=Math.max(0,-(d*x+p)),M=-_*_+x*(x+2*m)+h;else x=-c,_=Math.max(0,-(d*x+p)),M=-_*_+x*(x+2*m)+h;else x<=-T?(_=Math.max(0,-(-d*c+p)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+h):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+h):(_=Math.max(0,-(d*c+p)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+h);else x=d>0?-c:c,_=Math.max(0,-(d*x+p)),M=-_*_+x*(x+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Cd).addScaledVector(_c,x),M}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const r=xa.dot(this.direction),l=xa.dot(xa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,r,l,c){Dd.subVectors(i,e),yc.subVectors(r,e),Ud.crossVectors(Dd,yc);let d=this.direction.dot(Ud),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;$a.subVectors(this.origin,e);const m=p*this.direction.dot(yc.crossVectors($a,yc));if(m<0)return null;const h=p*this.direction.dot(Dd.cross($a));if(h<0||m+h>d)return null;const g=-p*$a.dot(Ud);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xh extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rx=new Qt,Er=new cv,Sc=new Xc,sx=new ie,bc=new ie,Mc=new ie,Ec=new ie,Ld=new ie,Tc=new ie,ox=new ie,Ac=new ie;class xi extends An{constructor(e=new si,i=new Xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Tc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],_=c[m];g!==0&&(Ld.fromBufferAttribute(_,e),d?Tc.addScaledVector(Ld,g):Tc.addScaledVector(Ld.sub(i),g))}i.add(Tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(Sc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Sc,sx)===null||Er.origin.distanceToSquared(sx)>(e.far-e.near)**2))&&(rx.copy(c).invert(),Er.copy(e.ray).applyMatrix4(rx),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const b=x[T],S=d[b.materialIndex],D=Math.max(b.start,M.start),P=Math.min(p.count,Math.min(b.start+b.count,M.start+M.count));for(let L=D,H=P;L<H;L+=3){const F=p.getX(L),B=p.getX(L+1),A=p.getX(L+2);l=Rc(this,S,e,r,h,g,_,F,B,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let b=T,S=C;b<S;b+=3){const D=p.getX(b),P=p.getX(b+1),L=p.getX(b+2);l=Rc(this,d,e,r,h,g,_,D,P,L),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const b=x[T],S=d[b.materialIndex],D=Math.max(b.start,M.start),P=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let L=D,H=P;L<H;L+=3){const F=L,B=L+1,A=L+2;l=Rc(this,S,e,r,h,g,_,F,B,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let b=T,S=C;b<S;b+=3){const D=b,P=b+1,L=b+2;l=Rc(this,d,e,r,h,g,_,D,P,L),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function BS(s,e,i,r,l,c,d,p){let m;if(e.side===Xn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===ir,p),m===null)return null;Ac.copy(p),Ac.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Ac);return h<i.near||h>i.far?null:{distance:h,point:Ac.clone(),object:s}}function Rc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,bc),s.getVertexPosition(m,Mc),s.getVertexPosition(h,Ec);const g=BS(s,e,i,r,bc,Mc,Ec,ox);if(g){const _=new ie;Di.getBarycoord(ox,bc,Mc,Ec,_),l&&(g.uv=Di.getInterpolatedAttribute(l,p,m,h,_,new mt)),c&&(g.uv1=Di.getInterpolatedAttribute(c,p,m,h,_,new mt)),d&&(g.normal=Di.getInterpolatedAttribute(d,p,m,h,_,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new ie,materialIndex:0};Di.getNormal(bc,Mc,Ec,x.normal),g.face=x,g.barycoord=_}return g}class IS extends Un{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Tn,g=Tn,_,x){super(null,d,p,m,h,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new ie,HS=new ie,GS=new ht;class wr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Nd.subVectors(r,i).cross(HS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||GS.getNormalMatrix(e),l=this.coplanarPoint(Nd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Xc,VS=new mt(.5,.5),wc=new ie;class qh{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,d=new wr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],g=c[4],_=c[5],x=c[6],M=c[7],T=c[8],C=c[9],b=c[10],S=c[11],D=c[12],P=c[13],L=c[14],H=c[15];if(l[0].setComponents(h-d,M-g,S-T,H-D).normalize(),l[1].setComponents(h+d,M+g,S+T,H+D).normalize(),l[2].setComponents(h+p,M+_,S+C,H+P).normalize(),l[3].setComponents(h-p,M-_,S-C,H-P).normalize(),r)l[4].setComponents(m,x,b,L).normalize(),l[5].setComponents(h-m,M-x,S-b,H-L).normalize();else if(l[4].setComponents(h-m,M-x,S-b,H-L).normalize(),i===Vi)l[5].setComponents(h+m,M+x,S+b,H+L).normalize();else if(i===qo)l[5].setComponents(m,x,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=VS.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lx=new Qt,Uh=new cv,Cc=new Xc,Dc=new ie;class kS extends An{constructor(e=new si,i=new uv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;lx.copy(l).invert(),Uh.copy(e.ray).applyMatrix4(lx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,_=r.attributes.position;if(h!==null){const x=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let T=x,C=M;T<C;T++){const b=h.getX(T);Dc.fromBufferAttribute(_,b),cx(Dc,b,m,l,e,i,this)}}else{const x=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let T=x,C=M;T<C;T++)Dc.fromBufferAttribute(_,T),cx(Dc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function cx(s,e,i,r,l,c,d){const p=Uh.distanceSqToPoint(s);if(p<i){const m=new ie;Uh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class fv extends Un{constructor(e=[],i=Nr,r,l,c,d,p,m,h,g){super(e,i,r,l,c,d,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends Un{constructor(e,i,r,l,c,d,p,m,h){super(e,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yo extends Un{constructor(e,i,r=Wi,l,c,d,p=Tn,m=Tn,h,g=ba,_=1){if(g!==ba&&g!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,d,p,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class WS extends Yo{constructor(e,i=Wi,r=Nr,l,c,d=Tn,p=Tn,m,h=ba){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dv extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qo extends si{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,e,d,c,0),T("z","y","x",1,-1,r,i,-e,d,c,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Bn(h,3)),this.setAttribute("normal",new Bn(g,3)),this.setAttribute("uv",new Bn(_,2));function T(C,b,S,D,P,L,H,F,B,A,U){const ue=L/B,V=H/A,Z=L/2,J=H/2,se=F/2,Q=B+1,N=A+1;let I=0,ce=0;const me=new ie;for(let Se=0;Se<N;Se++){const z=Se*V-J;for(let Y=0;Y<Q;Y++){const fe=Y*ue-Z;me[C]=fe*D,me[b]=z*P,me[S]=se,h.push(me.x,me.y,me.z),me[C]=0,me[b]=0,me[S]=F>0?1:-1,g.push(me.x,me.y,me.z),_.push(Y/B),_.push(1-Se/A),I+=1}}for(let Se=0;Se<A;Se++)for(let z=0;z<B;z++){const Y=x+z+Q*Se,fe=x+z+Q*(Se+1),be=x+(z+1)+Q*(Se+1),Oe=x+(z+1)+Q*Se;m.push(Y,fe,Oe),m.push(fe,be,Oe),ce+=6}p.addGroup(M,ce,U),M+=ce,x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jc extends si{constructor(e=1,i=1,r=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],M=[];let T=0;const C=[],b=r/2;let S=0;D(),d===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(M,2));function D(){const L=new ie,H=new ie;let F=0;const B=(i-e)/r;for(let A=0;A<=c;A++){const U=[],ue=A/c,V=ue*(i-e)+e;for(let Z=0;Z<=l;Z++){const J=Z/l,se=J*m+p,Q=Math.sin(se),N=Math.cos(se);H.x=V*Q,H.y=-ue*r+b,H.z=V*N,_.push(H.x,H.y,H.z),L.set(Q,B,N).normalize(),x.push(L.x,L.y,L.z),M.push(J,1-ue),U.push(T++)}C.push(U)}for(let A=0;A<l;A++)for(let U=0;U<c;U++){const ue=C[U][A],V=C[U+1][A],Z=C[U+1][A+1],J=C[U][A+1];(e>0||U!==0)&&(g.push(ue,V,J),F+=3),(i>0||U!==c-1)&&(g.push(V,Z,J),F+=3)}h.addGroup(S,F,0),S+=F}function P(L){const H=T,F=new mt,B=new ie;let A=0;const U=L===!0?e:i,ue=L===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,b*ue,0),x.push(0,ue,0),M.push(.5,.5),T++;const V=T;for(let Z=0;Z<=l;Z++){const se=Z/l*m+p,Q=Math.cos(se),N=Math.sin(se);B.x=U*N,B.y=b*ue,B.z=U*Q,_.push(B.x,B.y,B.z),x.push(0,ue,0),F.x=Q*.5+.5,F.y=N*.5*ue+.5,M.push(F.x,F.y),T++}for(let Z=0;Z<l;Z++){const J=H+Z,se=V+Z;L===!0?g.push(se,se+1,J):g.push(se+1,se,J),A+=3}h.addGroup(S,A,L===!0?1:2),S+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends si{constructor(e=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],i=12,r=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:r,phiLength:l},i=Math.floor(i),l=_t(l,0,Math.PI*2);const c=[],d=[],p=[],m=[],h=[],g=1/i,_=new ie,x=new mt,M=new ie,T=new ie,C=new ie;let b=0,S=0;for(let D=0;D<=e.length-1;D++)switch(D){case 0:b=e[D+1].x-e[D].x,S=e[D+1].y-e[D].y,M.x=S*1,M.y=-b,M.z=S*0,C.copy(M),M.normalize(),m.push(M.x,M.y,M.z);break;case e.length-1:m.push(C.x,C.y,C.z);break;default:b=e[D+1].x-e[D].x,S=e[D+1].y-e[D].y,M.x=S*1,M.y=-b,M.z=S*0,T.copy(M),M.x+=C.x,M.y+=C.y,M.z+=C.z,M.normalize(),m.push(M.x,M.y,M.z),C.copy(T)}for(let D=0;D<=i;D++){const P=r+D*g*l,L=Math.sin(P),H=Math.cos(P);for(let F=0;F<=e.length-1;F++){_.x=e[F].x*L,_.y=e[F].y,_.z=e[F].x*H,d.push(_.x,_.y,_.z),x.x=D/i,x.y=F/(e.length-1),p.push(x.x,x.y);const B=m[3*F+0]*L,A=m[3*F+1],U=m[3*F+0]*H;h.push(B,A,U)}}for(let D=0;D<i;D++)for(let P=0;P<e.length-1;P++){const L=P+D*e.length,H=L,F=L+e.length,B=L+e.length+1,A=L+1;c.push(H,F,A),c.push(B,A,F)}this.setIndex(c),this.setAttribute("position",new Bn(d,3)),this.setAttribute("uv",new Bn(p,2)),this.setAttribute("normal",new Bn(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.points,e.segments,e.phiStart,e.phiLength)}}class qc extends si{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,g=m+1,_=e/p,x=i/m,M=[],T=[],C=[],b=[];for(let S=0;S<g;S++){const D=S*x-d;for(let P=0;P<h;P++){const L=P*_-c;T.push(L,-D,0),C.push(0,0,1),b.push(P/p),b.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<p;D++){const P=D+h*S,L=D+h*(S+1),H=D+1+h*(S+1),F=D+1+h*S;M.push(P,L,F),M.push(L,H,F)}this.setIndex(M),this.setAttribute("position",new Bn(T,3)),this.setAttribute("normal",new Bn(C,3)),this.setAttribute("uv",new Bn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Fs(s[i]);for(const l in r)e[l]=r[l]}return e}function XS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function hv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const qS={clone:Fs,merge:Fn};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=XS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class KS extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pv extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QS extends pv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class JS extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zh extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Od=new Qt,ux=new ie,fx=new ie;class mv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;ux.setFromMatrixPosition(e.matrixWorld),i.position.copy(ux),fx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(fx),i.updateMatrixWorld(),Od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===qo||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uc=new ie,Lc=new Is,Bi=new ie;class gv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uc,Lc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Uc,Lc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const er=new ie,dx=new mt,hx=new mt;class ai extends gv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,i){return this.getViewBounds(e,dx,hx),i.subVectors(hx,dx)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ud*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class eb extends mv{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}}class tb extends Zh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Kh extends gv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nb extends mv{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class px extends Zh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new nb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ib extends Zh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Rs=-90,ws=1;class ab extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(Rs,ws,e,i);l.layers=this.layers,this.add(l);const c=new ai(Rs,ws,e,i);c.layers=this.layers,this.add(c);const d=new ai(Rs,ws,e,i);d.layers=this.layers,this.add(d);const p=new ai(Rs,ws,e,i);p.layers=this.layers,this.add(p);const m=new ai(Rs,ws,e,i);m.layers=this.layers,this.add(m);const h=new ai(Rs,ws,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class rb extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function mx(s,e,i,r){const l=sb(r);switch(i){case $x:return s*e;case tv:return s*e/l.components*l.byteLength;case Hh:return s*e/l.components*l.byteLength;case zs:return s*e*2/l.components*l.byteLength;case Gh:return s*e*2/l.components*l.byteLength;case ev:return s*e*3/l.components*l.byteLength;case Ui:return s*e*4/l.components*l.byteLength;case Vh:return s*e*4/l.components*l.byteLength;case Pc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:case th:return Math.max(s,16)*Math.max(e,8)/4;case Jd:case eh:return Math.max(s,8)*Math.max(e,8)/2;case nh:case ih:case rh:case sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ah:case oh:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mh:case Eh:case Th:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wh:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(s){switch(s){case ri:case Zx:return{byteLength:1,components:1};case Wo:case Kx:case Sa:return{byteLength:2,components:1};case Bh:case Ih:return{byteLength:2,components:4};case Wi:case Fh:case Gi:return{byteLength:4,components:1};case Qx:case Jx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function xv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ob(s){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,_=h.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,h,g),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const g=m.array,_=m.updateRanges;if(s.bindBuffer(h,p),_.length===0)s.bufferSubData(h,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];s.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:db,alphatest_pars_fragment:hb,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:xb,begin_vertex:vb,beginnormal_vertex:_b,bsdfs:yb,iridescence_fragment:Sb,bumpmap_pars_fragment:bb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:wb,color_pars_vertex:Cb,color_vertex:Db,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Ob,displacementmap_vertex:zb,emissivemap_fragment:Pb,emissivemap_pars_fragment:Fb,colorspace_fragment:Bb,colorspace_pars_fragment:Ib,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:eM,envmap_vertex:jb,fog_vertex:Wb,fog_pars_vertex:Xb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:aM,lights_physical_fragment:rM,lights_physical_pars_fragment:sM,lights_fragment_begin:oM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:xM,metalnessmap_fragment:vM,metalnessmap_pars_fragment:_M,morphinstance_vertex:yM,morphcolor_vertex:SM,morphnormal_vertex:bM,morphtarget_pars_vertex:MM,morphtarget_vertex:EM,normal_fragment_begin:TM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:wM,normal_vertex:CM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:LM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:OM,opaque_fragment:zM,packing:PM,premultiplied_alpha_fragment:FM,project_vertex:BM,dithering_fragment:IM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:jM,shadowmap_vertex:WM,shadowmask_pars_fragment:XM,skinbase_vertex:qM,skinning_pars_vertex:YM,skinning_vertex:ZM,skinnormal_vertex:KM,specularmap_fragment:QM,specularmap_pars_fragment:JM,tonemapping_fragment:$M,tonemapping_pars_fragment:e1,transmission_fragment:t1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:d1,depth_vert:h1,depth_frag:p1,distance_vert:m1,distance_frag:g1,equirect_vert:x1,equirect_frag:v1,linedashed_vert:_1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:b1,meshlambert_vert:M1,meshlambert_frag:E1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:w1,meshphong_vert:C1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:O1,points_vert:z1,points_frag:P1,shadow_vert:F1,shadow_frag:B1,sprite_vert:I1,sprite_frag:H1},Le={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Fn([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Fn([Le.lights,Le.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Nc={r:0,b:0,g:0},Ar=new Xi,G1=new Qt;function V1(s,e,i,r,l,c){const d=new Et(0);let p=l===!0?0:1,m,h,g=null,_=0,x=null;function M(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const L=D.backgroundBlurriness>0;P=e.get(P,L)}return P}function T(D){let P=!1;const L=M(D);L===null?b(d,p):L&&L.isColor&&(b(L,1),P=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(D,P){const L=M(P);L&&(L.isCubeTexture||L.mapping===Wc)?(h===void 0&&(h=new xi(new Qo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Fs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ar.copy(P.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Ar)),h.material.toneMapped=Rt.getTransfer(L.colorSpace)!==It,(g!==L||_!==L.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,g=L,_=L.version,x=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new xi(new qc(2,2),new qi({name:"BackgroundMaterial",uniforms:Fs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(L.colorSpace)!==It,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,g=L,_=L.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function b(D,P){D.getRGB(Nc,hv(s)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,P,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,b(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,b(d,p)},render:T,addToRenderList:C,dispose:S}}function k1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function p(V,Z,J,se,Q){let N=!1;const I=_(V,se,J,Z);c!==I&&(c=I,h(c.object)),N=M(V,se,J,Q),N&&T(V,se,J,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,L(V,Z,J,se),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function g(V){return s.deleteVertexArray(V)}function _(V,Z,J,se){const Q=se.wireframe===!0;let N=r[Z.id];N===void 0&&(N={},r[Z.id]=N);const I=V.isInstancedMesh===!0?V.id:0;let ce=N[I];ce===void 0&&(ce={},N[I]=ce);let me=ce[J.id];me===void 0&&(me={},ce[J.id]=me);let Se=me[Q];return Se===void 0&&(Se=x(m()),me[Q]=Se),Se}function x(V){const Z=[],J=[],se=[];for(let Q=0;Q<i;Q++)Z[Q]=0,J[Q]=0,se[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:se,object:V,attributes:{},index:null}}function M(V,Z,J,se){const Q=c.attributes,N=Z.attributes;let I=0;const ce=J.getAttributes();for(const me in ce)if(ce[me].location>=0){const z=Q[me];let Y=N[me];if(Y===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(Y=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(Y=V.instanceColor)),z===void 0||z.attribute!==Y||Y&&z.data!==Y.data)return!0;I++}return c.attributesNum!==I||c.index!==se}function T(V,Z,J,se){const Q={},N=Z.attributes;let I=0;const ce=J.getAttributes();for(const me in ce)if(ce[me].location>=0){let z=N[me];z===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(z=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(z=V.instanceColor));const Y={};Y.attribute=z,z&&z.data&&(Y.data=z.data),Q[me]=Y,I++}c.attributes=Q,c.attributesNum=I,c.index=se}function C(){const V=c.newAttributes;for(let Z=0,J=V.length;Z<J;Z++)V[Z]=0}function b(V){S(V,0)}function S(V,Z){const J=c.newAttributes,se=c.enabledAttributes,Q=c.attributeDivisors;J[V]=1,se[V]===0&&(s.enableVertexAttribArray(V),se[V]=1),Q[V]!==Z&&(s.vertexAttribDivisor(V,Z),Q[V]=Z)}function D(){const V=c.newAttributes,Z=c.enabledAttributes;for(let J=0,se=Z.length;J<se;J++)Z[J]!==V[J]&&(s.disableVertexAttribArray(J),Z[J]=0)}function P(V,Z,J,se,Q,N,I){I===!0?s.vertexAttribIPointer(V,Z,J,Q,N):s.vertexAttribPointer(V,Z,J,se,Q,N)}function L(V,Z,J,se){C();const Q=se.attributes,N=J.getAttributes(),I=Z.defaultAttributeValues;for(const ce in N){const me=N[ce];if(me.location>=0){let Se=Q[ce];if(Se===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(Se=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(Se=V.instanceColor)),Se!==void 0){const z=Se.normalized,Y=Se.itemSize,fe=e.get(Se);if(fe===void 0)continue;const be=fe.buffer,Oe=fe.type,ne=fe.bytesPerElement,ve=Oe===s.INT||Oe===s.UNSIGNED_INT||Se.gpuType===Fh;if(Se.isInterleavedBufferAttribute){const Me=Se.data,Ge=Me.stride,Ke=Se.offset;if(Me.isInstancedInterleavedBuffer){for(let Xe=0;Xe<me.locationSize;Xe++)S(me.location+Xe,Me.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Xe=0;Xe<me.locationSize;Xe++)b(me.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Xe=0;Xe<me.locationSize;Xe++)P(me.location+Xe,Y/me.locationSize,Oe,z,Ge*ne,(Ke+Y/me.locationSize*Xe)*ne,ve)}else{if(Se.isInstancedBufferAttribute){for(let Me=0;Me<me.locationSize;Me++)S(me.location+Me,Se.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Me=0;Me<me.locationSize;Me++)b(me.location+Me);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Me=0;Me<me.locationSize;Me++)P(me.location+Me,Y/me.locationSize,Oe,z,Y*ne,Y/me.locationSize*Me*ne,ve)}}else if(I!==void 0){const z=I[ce];if(z!==void 0)switch(z.length){case 2:s.vertexAttrib2fv(me.location,z);break;case 3:s.vertexAttrib3fv(me.location,z);break;case 4:s.vertexAttrib4fv(me.location,z);break;default:s.vertexAttrib1fv(me.location,z)}}}}D()}function H(){U();for(const V in r){const Z=r[V];for(const J in Z){const se=Z[J];for(const Q in se){const N=se[Q];for(const I in N)g(N[I].object),delete N[I];delete se[Q]}}delete r[V]}}function F(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const J in Z){const se=Z[J];for(const Q in se){const N=se[Q];for(const I in N)g(N[I].object),delete N[I];delete se[Q]}}delete r[V.id]}function B(V){for(const Z in r){const J=r[Z];for(const se in J){const Q=J[se];if(Q[V.id]===void 0)continue;const N=Q[V.id];for(const I in N)g(N[I].object),delete N[I];delete Q[V.id]}}}function A(V){for(const Z in r){const J=r[Z],se=V.isInstancedMesh===!0?V.id:0,Q=J[se];if(Q!==void 0){for(const N in Q){const I=Q[N];for(const ce in I)g(I[ce].object),delete I[ce];delete Q[N]}delete J[se],Object.keys(J).length===0&&delete r[Z]}}}function U(){ue(),d=!0,c!==l&&(c=l,h(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:ue,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:b,disableUnusedAttributes:D}}function j1(s,e,i){let r;function l(h){r=h}function c(h,g){s.drawArrays(r,h,g),i.update(g,r,1)}function d(h,g,_){_!==0&&(s.drawArraysInstanced(r,h,g,_),i.update(g,r,_))}function p(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];i.update(M,r,1)}function m(h,g,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<h.length;T++)d(h[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,g,0,x,0,_);let T=0;for(let C=0;C<_;C++)T+=g[C]*x[C];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function W1(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ui&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const A=B===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ri&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Gi&&!A)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ot("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:L,maxSamples:H,samples:F}}function X1(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new wr,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,C=_.clipIntersection,b=_.clipShadows,S=s.get(_);if(!l||T===null||T.length===0||c&&!b)c?g(null):h();else{const D=c?0:r,P=D*4;let L=S.clippingState||null;m.value=L,L=g(T,x,P,M);for(let H=0;H!==P;++H)L[H]=i[H];S.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,M,T){const C=_!==null?_.length:0;let b=null;if(C!==0){if(b=m.value,T!==!0||b===null){const S=M+C*4,D=x.matrixWorldInverse;p.getNormalMatrix(D),(b===null||b.length<S)&&(b=new Float32Array(S));for(let P=0,L=M;P!==C;++P,L+=4)d.copy(_[P]).applyMatrix4(D,p),d.normal.toArray(b,L),b[L+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,b}}const nr=4,gx=[.125,.215,.35,.446,.526,.582],Dr=20,q1=256,Io=new Kh,xx=new Et;let zd=null,Pd=0,Fd=0,Bd=!1;const Y1=new ie;class vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=Y1}=c;zd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Pd,Fd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Sa,format:Ui,colorSpace:Ps,depthBuffer:!1},l=_x(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_x(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=Q1(c,e,i),this._ggxMaterial=K1(c,e,i)}return l}_compileMaterial(e){const i=new xi(new si,e);this._renderer.compile(i,Io)}_sceneToCubeUV(e,i,r,l,c){const m=new ai(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(xx),_.toneMapping=ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new Qo,new Xh({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let S=!1;const D=e.background;D?D.isColor&&(b.color.copy(D),e.background=null,S=!0):(b.color.copy(xx),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):L===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const H=this._cubeSize;Cs(l,L*H,P>2?H:0,H,H),_.setRenderTarget(l),S&&_.render(C,m),_.render(e,m)}_.toneMapping=M,_.autoClear=x,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yx());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Io)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),x=0+h*1.25,M=_*x,{_lodMax:T}=this,C=this._sizeLods[r],b=3*C*(r>T-nr?r-T+nr:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Cs(c,b,S,3*C,2*C),l.setRenderTarget(c),l.render(p,Io),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Cs(e,b,S,3*C,2*C),l.setRenderTarget(e),l.render(p,Io)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=h;const x=h.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Dr-1),C=c/T,b=isFinite(c)?1+Math.floor(g*C):Dr;b>Dr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Dr}`);const S=[];let D=0;for(let B=0;B<Dr;++B){const A=B/C,U=Math.exp(-A*A/2);S.push(U),B===0?D+=U:B<b&&(D+=2*U)}for(let B=0;B<S.length;B++)S[B]=S[B]/D;x.envMap.value=e.texture,x.samples.value=b,x.weights.value=S,x.latitudinal.value=d==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-r;const L=this._sizeLods[l],H=3*L*(l>P-nr?l-P+nr:0),F=4*(this._cubeSize-L);Cs(i,H,F,3*L,2*L),m.setRenderTarget(i),m.render(_,Io)}}function Z1(s){const e=[],i=[],r=[];let l=s;const c=s-nr+1+gx.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-nr?m=gx[d-s+nr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,_=1+h,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,C=3,b=2,S=1,D=new Float32Array(C*T*M),P=new Float32Array(b*T*M),L=new Float32Array(S*T*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,A=F>2?0:-1,U=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];D.set(U,C*T*F),P.set(x,b*T*F);const ue=[F,F,F,F,F,F];L.set(ue,S*T*F)}const H=new si;H.setAttribute("position",new Li(D,C)),H.setAttribute("uv",new Li(P,b)),H.setAttribute("faceIndex",new Li(L,S)),r.push(new xi(H,null)),l>nr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function _x(s,e,i){const r=new ji(s,e,i);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function K1(s,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Q1(s,e,i){const r=new Float32Array(Dr),l=new ie(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function yx(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Sx(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class vv extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Qo(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:_a});c.uniforms.tEquirect.value=i;const d=new xi(l,c),p=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Dn),new ab(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function J1(s){let e=new WeakMap,i=new WeakMap,r=null;function l(x,M=!1){return x==null?null:M?d(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===od||M===ld)if(e.has(x)){const T=e.get(x).texture;return p(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const C=new vv(T.height);return C.fromEquirectangularTexture(s,x),e.set(x,C),x.addEventListener("dispose",h),p(C.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const M=x.mapping,T=M===od||M===ld,C=M===Nr||M===Os;if(T||C){let b=i.get(x);const S=b!==void 0?b.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==S)return r===null&&(r=new vx(s)),b=T?r.fromEquirectangular(x,b):r.fromCubemap(x,b),b.texture.pmremVersion=x.pmremVersion,i.set(x,b),b.texture;if(b!==void 0)return b.texture;{const D=x.image;return T&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new vx(s)),b=T?r.fromEquirectangular(x):r.fromCubemap(x),b.texture.pmremVersion=x.pmremVersion,i.set(x,b),x.addEventListener("dispose",g),b.texture):null}}}return x}function p(x,M){return M===od?x.mapping=Nr:M===ld&&(x.mapping=Os),x}function m(x){let M=0;const T=6;for(let C=0;C<T;C++)x[C]!==void 0&&M++;return M===T}function h(x){const M=x.target;M.removeEventListener("dispose",h);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function g(x){const M=x.target;M.removeEventListener("dispose",g);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function $1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&kc("WebGLRenderer: "+r+" extension not supported."),l}}}function eE(s,e,i,r){const l={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function h(_){const x=[],M=_.index,T=_.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let P=0,L=D.length;P<L;P+=3){const H=D[P+0],F=D[P+1],B=D[P+2];x.push(H,F,F,B,B,H)}}else{const D=T.array;C=T.version;for(let P=0,L=D.length/3-1;P<L;P+=3){const H=P+0,F=P+1,B=P+2;x.push(H,F,F,B,B,H)}}const b=new(T.count>=65535?lv:ov)(x,1);b.version=C;const S=c.get(_);S&&e.remove(S),c.set(_,b)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function tE(s,e,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*d),i.update(M,r,1)}function h(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*d,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let b=0;for(let S=0;S<T;S++)b+=M[S];i.update(b,r,1)}function _(x,M,T,C){if(T===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let S=0;S<x.length;S++)h(x[S]/d,M[S],C[S]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,T);let S=0;for(let D=0;D<T;D++)S+=M[D]*C[D];i.update(S,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function nE(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iE(s,e,i){const r=new WeakMap,l=new tn;function c(d,p,m){const h=d.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(p);if(x===void 0||x.count!==_){let ue=function(){A.dispose(),r.delete(p),p.removeEventListener("dispose",ue)};var M=ue;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),C===!0&&(L=2),b===!0&&(L=3);let H=p.attributes.position.count*L,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*F*4*_),A=new av(B,H,F,_);A.type=Gi,A.needsUpdate=!0;const U=L*4;for(let V=0;V<_;V++){const Z=S[V],J=D[V],se=P[V],Q=H*F*4*V;for(let N=0;N<Z.count;N++){const I=N*U;T===!0&&(l.fromBufferAttribute(Z,N),B[Q+I+0]=l.x,B[Q+I+1]=l.y,B[Q+I+2]=l.z,B[Q+I+3]=0),C===!0&&(l.fromBufferAttribute(J,N),B[Q+I+4]=l.x,B[Q+I+5]=l.y,B[Q+I+6]=l.z,B[Q+I+7]=0),b===!0&&(l.fromBufferAttribute(se,N),B[Q+I+8]=l.x,B[Q+I+9]=l.y,B[Q+I+10]=l.z,B[Q+I+11]=se.itemSize===4?l.w:1)}}x={count:_,texture:A,size:new mt(H,F)},r.set(p,x),p.addEventListener("dispose",ue)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let b=0;b<h.length;b++)T+=h[b];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function aE(s,e,i,r,l){let c=new WeakMap;function d(h){const g=l.render.frame,_=h.geometry,x=e.get(h,_);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:d,dispose:p}}const rE={[Gx]:"LINEAR_TONE_MAPPING",[Vx]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Xx]:"AGX_TONE_MAPPING",[qx]:"NEUTRAL_TONE_MAPPING",[Wx]:"CUSTOM_TONE_MAPPING"};function sE(s,e,i,r,l){const c=new ji(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),d=new ji(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new si;p.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const m=new KS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new xi(p,m),g=new Kh(-1,1,1,-1,0,1);let _=null,x=null,M=!1,T,C=null,b=[],S=!1;this.setSize=function(D,P){c.setSize(D,P),d.setSize(D,P);for(let L=0;L<b.length;L++){const H=b[L];H.setSize&&H.setSize(D,P)}},this.setEffects=function(D){b=D,S=b.length>0&&b[0].isRenderPass===!0;const P=c.width,L=c.height;for(let H=0;H<b.length;H++){const F=b[H];F.setSize&&F.setSize(P,L)}},this.begin=function(D,P){if(M||D.toneMapping===ki&&b.length===0)return!1;if(C=P,P!==null){const L=P.width,H=P.height;(c.width!==L||c.height!==H)&&this.setSize(L,H)}return S===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(D,P){D.toneMapping=T,M=!0;let L=c,H=d;for(let F=0;F<b.length;F++){const B=b[F];if(B.enabled!==!1&&(B.render(D,H,L,P),B.needsSwap!==!1)){const A=L;L=H,H=A}}if(_!==D.outputColorSpace||x!==D.toneMapping){_=D.outputColorSpace,x=D.toneMapping,m.defines={},Rt.getTransfer(_)===It&&(m.defines.SRGB_TRANSFER="");const F=rE[x];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(C),D.render(h,g),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const _v=new Un,Lh=new Yo(1,1),yv=new av,Sv=new TS,bv=new fv,bx=[],Mx=[],Ex=new Float32Array(16),Tx=new Float32Array(9),Ax=new Float32Array(4);function Gs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=bx[l];if(c===void 0&&(c=new Float32Array(l),bx[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Zc(s,e){let i=Mx[e];i===void 0&&(i=new Int32Array(e),Mx[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function oE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function lE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function cE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function uE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function fE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,r))return;Ax.set(r),s.uniformMatrix2fv(this.addr,!1,Ax),xn(i,r)}}function dE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,r))return;Tx.set(r),s.uniformMatrix3fv(this.addr,!1,Tx),xn(i,r)}}function hE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,r))return;Ex.set(r),s.uniformMatrix4fv(this.addr,!1,Ex),xn(i,r)}}function pE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function mE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function gE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function xE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function vE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function _E(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function yE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function SE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function bE(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?jh:kh,c=Lh):c=_v,i.setTexture2D(e||c,l)}function ME(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Sv,l)}function EE(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||bv,l)}function TE(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||yv,l)}function AE(s){switch(s){case 5126:return oE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return fE;case 35675:return dE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return xE;case 5125:return vE;case 36294:return _E;case 36295:return yE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return TE}}function RE(s,e){s.uniform1fv(this.addr,e)}function wE(s,e){const i=Gs(e,this.size,2);s.uniform2fv(this.addr,i)}function CE(s,e){const i=Gs(e,this.size,3);s.uniform3fv(this.addr,i)}function DE(s,e){const i=Gs(e,this.size,4);s.uniform4fv(this.addr,i)}function UE(s,e){const i=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function LE(s,e){const i=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function NE(s,e){const i=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function OE(s,e){s.uniform1iv(this.addr,e)}function zE(s,e){s.uniform2iv(this.addr,e)}function PE(s,e){s.uniform3iv(this.addr,e)}function FE(s,e){s.uniform4iv(this.addr,e)}function BE(s,e){s.uniform1uiv(this.addr,e)}function IE(s,e){s.uniform2uiv(this.addr,e)}function HE(s,e){s.uniform3uiv(this.addr,e)}function GE(s,e){s.uniform4uiv(this.addr,e)}function VE(s,e,i){const r=this.cache,l=e.length,c=Zc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Lh:d=_v;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function kE(s,e,i){const r=this.cache,l=e.length,c=Zc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Sv,c[d])}function jE(s,e,i){const r=this.cache,l=e.length,c=Zc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||bv,c[d])}function WE(s,e,i){const r=this.cache,l=e.length,c=Zc(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||yv,c[d])}function XE(s){switch(s){case 5126:return RE;case 35664:return wE;case 35665:return CE;case 35666:return DE;case 35674:return UE;case 35675:return LE;case 35676:return NE;case 5124:case 35670:return OE;case 35667:case 35671:return zE;case 35668:case 35672:return PE;case 35669:case 35673:return FE;case 5125:return BE;case 36294:return IE;case 36295:return HE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return WE}}class qE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AE(i.type)}}class YE{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XE(i.type)}}class ZE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function Rx(s,e){s.seq.push(e),s.map[e.id]=e}function KE(s,e,i){const r=s.name,l=r.length;for(Id.lastIndex=0;;){const c=Id.exec(r),d=Id.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Rx(i,h===void 0?new qE(p,s,e):new YE(p,s,e));break}else{let _=i.map[p];_===void 0&&(_=new ZE(p),Rx(i,_)),i=_}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);KE(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function wx(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const QE=37297;let JE=0;function $E(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Cx=new ht;function eT(s){Rt._getMatrix(Cx,Rt.workingColorSpace,s);const e=`mat3( ${Cx.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Gc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dx(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+$E(s.getShaderSource(e),p)}else return c}function tT(s,e){const i=eT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nT={[Gx]:"Linear",[Vx]:"Reinhard",[kx]:"Cineon",[jx]:"ACESFilmic",[Xx]:"AgX",[qx]:"Neutral",[Wx]:"Custom"};function iT(s,e){const i=nT[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new ie;function aT(){Rt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function sT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function oT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function jo(s){return s!==""}function Ux(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(s){return s.replace(lT,uT)}const cT=new Map;function uT(s,e){let i=pt[e];if(i===void 0){const r=cT.get(e);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nh(i)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(s){return s.replace(fT,dT)}function dT(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ox(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hT={[zc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function pT(s){return hT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mT={[Nr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function gT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const xT={[Os]:"ENVMAP_MODE_REFRACTION"};function vT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _T={[Hx]:"ENVMAP_BLENDING_MULTIPLY",[aS]:"ENVMAP_BLENDING_MIX",[rS]:"ENVMAP_BLENDING_ADD"};function yT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_T[s.combine]||"ENVMAP_BLENDING_NONE"}function ST(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function bT(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=pT(i),h=gT(i),g=vT(i),_=yT(i),x=ST(i),M=rT(i),T=sT(c),C=l.createProgram();let b,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),S.length>0&&(S+=`
`)):(b=[Ox(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),S=[Ox(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?pt.tonemapping_pars_fragment:"",i.toneMapping!==ki?iT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,tT("linearToOutputTexel",i.outputColorSpace),aT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Nh(d),d=Ux(d,i),d=Lx(d,i),p=Nh(p),p=Ux(p,i),p=Lx(p,i),d=Nx(d),p=Nx(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=D+b+d,L=D+S+p,H=wx(l,l.VERTEX_SHADER,P),F=wx(l,l.FRAGMENT_SHADER,L);l.attachShader(C,H),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",J=l.getShaderInfoLog(H)||"",se=l.getShaderInfoLog(F)||"",Q=Z.trim(),N=J.trim(),I=se.trim();let ce=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,H,F);else{const Se=Dx(l,H,"vertex"),z=Dx(l,F,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+Se+`
`+z)}else Q!==""?ot("WebGLProgram: Program Info Log:",Q):(N===""||I==="")&&(me=!1);me&&(V.diagnostics={runnable:ce,programLog:Q,vertexShader:{log:N,prefix:b},fragmentShader:{log:I,prefix:S}})}l.deleteShader(H),l.deleteShader(F),A=new Hc(l,C),U=oT(l,C)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let ue=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(C,QE)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=F,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new TT(e),i.set(e,r)),r}}class TT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function AT(s,e,i,r,l,c){const d=new rv,p=new ET,m=new Set,h=[],g=new Map,_=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,U,ue,V,Z){const J=V.fog,se=Z.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,N=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,I=e.get(A.envMap||Q,N),ce=I&&I.mapping===Wc?I.image.height:null,me=M[A.type];A.precision!==null&&(x=r.getMaxPrecision(A.precision),x!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const Se=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,z=Se!==void 0?Se.length:0;let Y=0;se.morphAttributes.position!==void 0&&(Y=1),se.morphAttributes.normal!==void 0&&(Y=2),se.morphAttributes.color!==void 0&&(Y=3);let fe,be,Oe,ne;if(me){const At=Hi[me];fe=At.vertexShader,be=At.fragmentShader}else fe=A.vertexShader,be=A.fragmentShader,p.update(A),Oe=p.getVertexShaderID(A),ne=p.getFragmentShaderID(A);const ve=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ge=Z.isInstancedMesh===!0,Ke=Z.isBatchedMesh===!0,Xe=!!A.map,Jt=!!A.matcap,yt=!!I,gt=!!A.aoMap,Lt=!!A.lightMap,lt=!!A.bumpMap,Kt=!!A.normalMap,k=!!A.displacementMap,Xt=!!A.emissiveMap,Tt=!!A.metalnessMap,Ot=!!A.roughnessMap,qe=A.anisotropy>0,O=A.clearcoat>0,E=A.dispersion>0,q=A.iridescence>0,ge=A.sheen>0,ye=A.transmission>0,he=qe&&!!A.anisotropyMap,je=O&&!!A.clearcoatMap,Ce=O&&!!A.clearcoatNormalMap,Qe=O&&!!A.clearcoatRoughnessMap,tt=q&&!!A.iridescenceMap,Ae=q&&!!A.iridescenceThicknessMap,Ee=ge&&!!A.sheenColorMap,ze=ge&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,Pe=!!A.specularColorMap,ut=!!A.specularIntensityMap,X=ye&&!!A.transmissionMap,we=ye&&!!A.thicknessMap,Re=!!A.gradientMap,Fe=!!A.alphaMap,Te=A.alphaTest>0,de=!!A.alphaHash,Ie=!!A.extensions;let it=ki;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=s.toneMapping);const Pt={shaderID:me,shaderType:A.type,shaderName:A.name,vertexShader:fe,fragmentShader:be,defines:A.defines,customVertexShaderID:Oe,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&Z._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&Z.instanceColor!==null,instancingMorph:Ge&&Z.morphTexture!==null,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ps,alphaToCoverage:!!A.alphaToCoverage,map:Xe,matcap:Jt,envMap:yt,envMapMode:yt&&I.mapping,envMapCubeUVHeight:ce,aoMap:gt,lightMap:Lt,bumpMap:lt,normalMap:Kt,displacementMap:k,emissiveMap:Xt,normalMapObjectSpace:Kt&&A.normalMapType===lS,normalMapTangentSpace:Kt&&A.normalMapType===nv,metalnessMap:Tt,roughnessMap:Ot,anisotropy:qe,anisotropyMap:he,clearcoat:O,clearcoatMap:je,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Qe,dispersion:E,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Ee,sheenRoughnessMap:ze,specularMap:Ne,specularColorMap:Pe,specularIntensityMap:ut,transmission:ye,transmissionMap:X,thicknessMap:we,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Us&&A.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:de,combine:A.combine,mapUv:Xe&&T(A.map.channel),aoMapUv:gt&&T(A.aoMap.channel),lightMapUv:Lt&&T(A.lightMap.channel),bumpMapUv:lt&&T(A.bumpMap.channel),normalMapUv:Kt&&T(A.normalMap.channel),displacementMapUv:k&&T(A.displacementMap.channel),emissiveMapUv:Xt&&T(A.emissiveMap.channel),metalnessMapUv:Tt&&T(A.metalnessMap.channel),roughnessMapUv:Ot&&T(A.roughnessMap.channel),anisotropyMapUv:he&&T(A.anisotropyMap.channel),clearcoatMapUv:je&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(A.sheenRoughnessMap.channel),specularMapUv:Ne&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:ut&&T(A.specularIntensityMap.channel),transmissionMapUv:X&&T(A.transmissionMap.channel),thicknessMapUv:we&&T(A.thicknessMap.channel),alphaMapUv:Fe&&T(A.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Kt||qe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!se.attributes.uv&&(Xe||Fe),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||se.attributes.normal===void 0&&Kt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:Z.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Y,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&ue.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:Xe&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===It,decodeVideoTextureEmissive:Xt&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===It,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ci,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ie&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function b(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ue in A.defines)U.push(ue),U.push(A.defines[ue]);return A.isRawShaderMaterial===!1&&(S(U,A),D(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function S(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function D(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function P(A){const U=M[A.type];let ue;if(U){const V=Hi[U];ue=qS.clone(V.uniforms)}else ue=A.uniforms;return ue}function L(A,U){let ue=g.get(U);return ue!==void 0?++ue.usedTimes:(ue=new bT(s,U,A,l),h.push(ue),g.set(U,ue)),ue}function H(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function F(A){p.remove(A)}function B(){p.dispose()}return{getParameters:C,getProgramCacheKey:b,getUniforms:P,acquireProgram:L,releaseProgram:H,releaseShaderCache:F,programs:h,dispose:B}}function RT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function wT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Px(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function p(x,M,T,C,b,S){let D=s[e];return D===void 0?(D={id:x.id,object:x,geometry:M,material:T,materialVariant:d(x),groupOrder:C,renderOrder:x.renderOrder,z:b,group:S},s[e]=D):(D.id=x.id,D.object=x,D.geometry=M,D.material=T,D.materialVariant=d(x),D.groupOrder=C,D.renderOrder=x.renderOrder,D.z=b,D.group=S),e++,D}function m(x,M,T,C,b,S){const D=p(x,M,T,C,b,S);T.transmission>0?r.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(x,M,T,C,b,S){const D=p(x,M,T,C,b,S);T.transmission>0?r.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function g(x,M){i.length>1&&i.sort(x||wT),r.length>1&&r.sort(M||zx),l.length>1&&l.sort(M||zx)}function _(){for(let x=e,M=s.length;x<M;x++){const T=s[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:g}}function CT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Px,s.set(r,[d])):l>=c.length?(d=new Px,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function DT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Et};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=i,i}}}function UT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let LT=0;function NT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OT(s){const e=new DT,i=UT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const l=new ie,c=new Qt,d=new Qt;function p(h){let g=0,_=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,T=0,C=0,b=0,S=0,D=0,P=0,L=0,H=0,F=0,B=0;h.sort(NT);for(let U=0,ue=h.length;U<ue;U++){const V=h[U],Z=V.color,J=V.intensity,se=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===zs?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Z.r*J,_+=Z.g*J,x+=Z.b*J;else if(V.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(V.sh.coefficients[N],J);B++}else if(V.isDirectionalLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const I=V.shadow,ce=i.get(V);ce.shadowIntensity=I.intensity,ce.shadowBias=I.bias,ce.shadowNormalBias=I.normalBias,ce.shadowRadius=I.radius,ce.shadowMapSize=I.mapSize,r.directionalShadow[M]=ce,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=N,M++}else if(V.isSpotLight){const N=e.get(V);N.position.setFromMatrixPosition(V.matrixWorld),N.color.copy(Z).multiplyScalar(J),N.distance=se,N.coneCos=Math.cos(V.angle),N.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),N.decay=V.decay,r.spot[C]=N;const I=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,I.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=I.matrix,V.castShadow){const ce=i.get(V);ce.shadowIntensity=I.intensity,ce.shadowBias=I.bias,ce.shadowNormalBias=I.normalBias,ce.shadowRadius=I.radius,ce.shadowMapSize=I.mapSize,r.spotShadow[C]=ce,r.spotShadowMap[C]=Q,L++}C++}else if(V.isRectAreaLight){const N=e.get(V);N.color.copy(Z).multiplyScalar(J),N.halfWidth.set(V.width*.5,0,0),N.halfHeight.set(0,V.height*.5,0),r.rectArea[b]=N,b++}else if(V.isPointLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),N.distance=V.distance,N.decay=V.decay,V.castShadow){const I=V.shadow,ce=i.get(V);ce.shadowIntensity=I.intensity,ce.shadowBias=I.bias,ce.shadowNormalBias=I.normalBias,ce.shadowRadius=I.radius,ce.shadowMapSize=I.mapSize,ce.shadowCameraNear=I.camera.near,ce.shadowCameraFar=I.camera.far,r.pointShadow[T]=ce,r.pointShadowMap[T]=Q,r.pointShadowMatrix[T]=V.shadow.matrix,P++}r.point[T]=N,T++}else if(V.isHemisphereLight){const N=e.get(V);N.skyColor.copy(V.color).multiplyScalar(J),N.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[S]=N,S++}}b>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==M||A.pointLength!==T||A.spotLength!==C||A.rectAreaLength!==b||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==P||A.numSpotShadows!==L||A.numSpotMaps!==H||A.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=b,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,A.directionalLength=M,A.pointLength=T,A.spotLength=C,A.rectAreaLength=b,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=P,A.numSpotShadows=L,A.numSpotMaps=H,A.numLightProbes=B,r.version=LT++)}function m(h,g){let _=0,x=0,M=0,T=0,C=0;const b=g.matrixWorldInverse;for(let S=0,D=h.length;S<D;S++){const P=h[S];if(P.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(b),_++}else if(P.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(b),M++}else if(P.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),d.identity(),c.copy(P.matrixWorld),c.premultiply(b),d.extractRotation(c),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),x++}else if(P.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(b),C++}}}return{setup:p,setupView:m,state:r}}function Fx(s){const e=new OT(s),i=[],r=[];function l(g){h.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function p(){e.setup(i)}function m(g){e.setupView(i,g)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function zT(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Fx(s),e.set(l,[p])):c>=d.length?(p=new Fx(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const PT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BT=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],IT=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Bx=new Qt,Ho=new ie,Hd=new ie;function HT(s,e,i){let r=new qh;const l=new mt,c=new mt,d=new tn,p=new JS,m=new $S,h={},g=i.maxTextureSize,_={[ir]:Xn,[Xn]:ir,[Ci]:Ci},x=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:PT,fragmentShader:FT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new si;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new xi(T,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let S=this.type;this.render=function(F,B,A){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||F.length===0)return;this.type===Iy&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const U=s.getRenderTarget(),ue=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(_a),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const J=S!==this.type;J&&B.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Q=>Q.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Q=F.length;se<Q;se++){const N=F[se],I=N.shadow;if(I===void 0){ot("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ce=I.getFrameExtents();l.multiply(ce),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ce.x),l.x=c.x*ce.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ce.y),l.y=c.y*ce.y,I.mapSize.y=c.y));const me=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=me,I.map===null||J===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Vo){if(N.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new ji(l.x,l.y,{format:zs,type:Sa,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new Yo(l.x,l.y,Gi),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=ba,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tn,I.map.depthTexture.magFilter=Tn}else N.isPointLight?(I.map=new vv(l.x),I.map.depthTexture=new WS(l.x,Wi)):(I.map=new ji(l.x,l.y),I.map.depthTexture=new Yo(l.x,l.y,Wi)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=ba,this.type===zc?(I.map.depthTexture.compareFunction=me?jh:kh,I.map.depthTexture.minFilter=Dn,I.map.depthTexture.magFilter=Dn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tn,I.map.depthTexture.magFilter=Tn);I.camera.updateProjectionMatrix()}const Se=I.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Se;z++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,z),s.clear();else{z===0&&(s.setRenderTarget(I.map),s.clear());const Y=I.getViewport(z);d.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),Z.viewport(d)}if(N.isPointLight){const Y=I.camera,fe=I.matrix,be=N.distance||Y.far;be!==Y.far&&(Y.far=be,Y.updateProjectionMatrix()),Ho.setFromMatrixPosition(N.matrixWorld),Y.position.copy(Ho),Hd.copy(Y.position),Hd.add(BT[z]),Y.up.copy(IT[z]),Y.lookAt(Hd),Y.updateMatrixWorld(),fe.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Bx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Bx,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(N);r=I.getFrustum(),L(B,A,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Vo&&D(I,A),I.needsUpdate=!1}S=this.type,b.needsUpdate=!1,s.setRenderTarget(U,ue,V)};function D(F,B){const A=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ji(l.x,l.y,{format:zs,type:Sa})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,A,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,A,M,C,null)}function P(F,B,A,U){let ue=null;const V=A.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)ue=V;else if(ue=A.isPointLight===!0?m:p,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=ue.uuid,J=B.uuid;let se=h[Z];se===void 0&&(se={},h[Z]=se);let Q=se[J];Q===void 0&&(Q=ue.clone(),se[J]=Q,B.addEventListener("dispose",H)),ue=Q}if(ue.visible=B.visible,ue.wireframe=B.wireframe,U===Vo?ue.side=B.shadowSide!==null?B.shadowSide:B.side:ue.side=B.shadowSide!==null?B.shadowSide:_[B.side],ue.alphaMap=B.alphaMap,ue.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ue.map=B.map,ue.clipShadows=B.clipShadows,ue.clippingPlanes=B.clippingPlanes,ue.clipIntersection=B.clipIntersection,ue.displacementMap=B.displacementMap,ue.displacementScale=B.displacementScale,ue.displacementBias=B.displacementBias,ue.wireframeLinewidth=B.wireframeLinewidth,ue.linewidth=B.linewidth,A.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const Z=s.properties.get(ue);Z.light=A}return ue}function L(F,B,A,U,ue){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ue===Vo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,F.matrixWorld);const J=e.update(F),se=F.material;if(Array.isArray(se)){const Q=J.groups;for(let N=0,I=Q.length;N<I;N++){const ce=Q[N],me=se[ce.materialIndex];if(me&&me.visible){const Se=P(F,me,U,ue);F.onBeforeShadow(s,F,B,A,J,Se,ce),s.renderBufferDirect(A,null,J,Se,F,ce),F.onAfterShadow(s,F,B,A,J,Se,ce)}}}else if(se.visible){const Q=P(F,se,U,ue);F.onBeforeShadow(s,F,B,A,J,Q,null),s.renderBufferDirect(A,null,J,Q,F,null),F.onAfterShadow(s,F,B,A,J,Q,null)}}const Z=F.children;for(let J=0,se=Z.length;J<se;J++)L(Z[J],B,A,U,ue)}function H(F){F.target.removeEventListener("dispose",H);for(const A in h){const U=h[A],ue=F.target.uuid;ue in U&&(U[ue].dispose(),delete U[ue])}}}function GT(s,e){function i(){let X=!1;const we=new tn;let Re=null;const Fe=new tn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!X&&(s.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){X=Te},setClear:function(Te,de,Ie,it,Pt){Pt===!0&&(Te*=it,de*=it,Ie*=it),we.set(Te,de,Ie,it),Fe.equals(we)===!1&&(s.clearColor(Te,de,Ie,it),Fe.copy(we))},reset:function(){X=!1,Re=null,Fe.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,Re=null,Fe=null,Te=null;return{setReversed:function(de){if(we!==de){const Ie=e.get("EXT_clip_control");de?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),we=de;const it=Te;Te=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(de){de?ve(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(de){Re!==de&&!X&&(s.depthMask(de),Re=de)},setFunc:function(de){if(we&&(de=vS[de]),Fe!==de){switch(de){case kd:s.depthFunc(s.NEVER);break;case jd:s.depthFunc(s.ALWAYS);break;case Wd:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case Xd:s.depthFunc(s.EQUAL);break;case qd:s.depthFunc(s.GEQUAL);break;case Yd:s.depthFunc(s.GREATER);break;case Zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=de}},setLocked:function(de){X=de},setClear:function(de){Te!==de&&(Te=de,we&&(de=1-de),s.clearDepth(de))},reset:function(){X=!1,Re=null,Fe=null,Te=null,we=!1}}}function l(){let X=!1,we=null,Re=null,Fe=null,Te=null,de=null,Ie=null,it=null,Pt=null;return{setTest:function(At){X||(At?ve(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(At){we!==At&&!X&&(s.stencilMask(At),we=At)},setFunc:function(At,Ln,_i){(Re!==At||Fe!==Ln||Te!==_i)&&(s.stencilFunc(At,Ln,_i),Re=At,Fe=Ln,Te=_i)},setOp:function(At,Ln,_i){(de!==At||Ie!==Ln||it!==_i)&&(s.stencilOp(At,Ln,_i),de=At,Ie=Ln,it=_i)},setLocked:function(At){X=At},setClear:function(At){Pt!==At&&(s.clearStencil(At),Pt=At)},reset:function(){X=!1,we=null,Re=null,Fe=null,Te=null,de=null,Ie=null,it=null,Pt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,C=!1,b=null,S=null,D=null,P=null,L=null,H=null,F=null,B=new Et(0,0,0),A=0,U=!1,ue=null,V=null,Z=null,J=null,se=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(ce)[1]),N=I>=1):ce.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),N=I>=2);let me=null,Se={};const z=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),fe=new tn().fromArray(z),be=new tn().fromArray(Y);function Oe(X,we,Re,Fe){const Te=new Uint8Array(4),de=s.createTexture();s.bindTexture(X,de),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<Re;Ie++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(we+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return de}const ne={};ne[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ve(s.DEPTH_TEST),d.setFunc(Ns),lt(!1),Kt(Ig),ve(s.CULL_FACE),gt(_a);function ve(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Me(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Ge(X,we){return _[X]!==we?(s.bindFramebuffer(X,we),_[X]=we,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ke(X,we){let Re=M,Fe=!1;if(X){Re=x.get(we),Re===void 0&&(Re=[],x.set(we,Re));const Te=X.textures;if(Re.length!==Te.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Ie=Te.length;de<Ie;de++)Re[de]=s.COLOR_ATTACHMENT0+de;Re.length=Te.length,Fe=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Re)}function Xe(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const Jt={[Cr]:s.FUNC_ADD,[Gy]:s.FUNC_SUBTRACT,[Vy]:s.FUNC_REVERSE_SUBTRACT};Jt[ky]=s.MIN,Jt[jy]=s.MAX;const yt={[Wy]:s.ZERO,[Xy]:s.ONE,[qy]:s.SRC_COLOR,[Gd]:s.SRC_ALPHA,[$y]:s.SRC_ALPHA_SATURATE,[Qy]:s.DST_COLOR,[Zy]:s.DST_ALPHA,[Yy]:s.ONE_MINUS_SRC_COLOR,[Vd]:s.ONE_MINUS_SRC_ALPHA,[Jy]:s.ONE_MINUS_DST_COLOR,[Ky]:s.ONE_MINUS_DST_ALPHA,[eS]:s.CONSTANT_COLOR,[tS]:s.ONE_MINUS_CONSTANT_COLOR,[nS]:s.CONSTANT_ALPHA,[iS]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(X,we,Re,Fe,Te,de,Ie,it,Pt,At){if(X===_a){C===!0&&(Me(s.BLEND),C=!1);return}if(C===!1&&(ve(s.BLEND),C=!0),X!==Hy){if(X!==b||At!==U){if((S!==Cr||L!==Cr)&&(s.blendEquation(s.FUNC_ADD),S=Cr,L=Cr),At)switch(X){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hg:s.blendFunc(s.ONE,s.ONE);break;case Gg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",X);break}else switch(X){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",X);break}D=null,P=null,H=null,F=null,B.set(0,0,0),A=0,b=X,U=At}return}Te=Te||we,de=de||Re,Ie=Ie||Fe,(we!==S||Te!==L)&&(s.blendEquationSeparate(Jt[we],Jt[Te]),S=we,L=Te),(Re!==D||Fe!==P||de!==H||Ie!==F)&&(s.blendFuncSeparate(yt[Re],yt[Fe],yt[de],yt[Ie]),D=Re,P=Fe,H=de,F=Ie),(it.equals(B)===!1||Pt!==A)&&(s.blendColor(it.r,it.g,it.b,Pt),B.copy(it),A=Pt),b=X,U=!1}function Lt(X,we){X.side===Ci?Me(s.CULL_FACE):ve(s.CULL_FACE);let Re=X.side===Xn;we&&(Re=!Re),lt(Re),X.blending===Us&&X.transparent===!1?gt(_a):gt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Fe=X.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Xt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(X){ue!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),ue=X)}function Kt(X){X!==Fy?(ve(s.CULL_FACE),X!==V&&(X===Ig?s.cullFace(s.BACK):X===By?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),V=X}function k(X){X!==Z&&(N&&s.lineWidth(X),Z=X)}function Xt(X,we,Re){X?(ve(s.POLYGON_OFFSET_FILL),(J!==we||se!==Re)&&(J=we,se=Re,d.getReversed()&&(we=-we),s.polygonOffset(we,Re))):Me(s.POLYGON_OFFSET_FILL)}function Tt(X){X?ve(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=s.TEXTURE0+Q-1),me!==X&&(s.activeTexture(X),me=X)}function qe(X,we,Re){Re===void 0&&(me===null?Re=s.TEXTURE0+Q-1:Re=me);let Fe=Se[Re];Fe===void 0&&(Fe={type:void 0,texture:void 0},Se[Re]=Fe),(Fe.type!==X||Fe.texture!==we)&&(me!==Re&&(s.activeTexture(Re),me=Re),s.bindTexture(X,we||ne[X]),Fe.type=X,Fe.texture=we)}function O(){const X=Se[me];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function ge(){try{s.texSubImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function ye(){try{s.texSubImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Ce(){try{s.texStorage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Qe(){try{s.texStorage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function tt(){try{s.texImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Ae(){try{s.texImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Ee(X){fe.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),fe.copy(X))}function ze(X){be.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function Ne(X,we){let Re=h.get(we);Re===void 0&&(Re=new WeakMap,h.set(we,Re));let Fe=Re.get(X);Fe===void 0&&(Fe=s.getUniformBlockIndex(we,X.name),Re.set(X,Fe))}function Pe(X,we){const Fe=h.get(we).get(X);m.get(we)!==Fe&&(s.uniformBlockBinding(we,Fe,X.__bindingPointIndex),m.set(we,Fe))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},me=null,Se={},_={},x=new WeakMap,M=[],T=null,C=!1,b=null,S=null,D=null,P=null,L=null,H=null,F=null,B=new Et(0,0,0),A=0,U=!1,ue=null,V=null,Z=null,J=null,se=null,fe.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:ve,disable:Me,bindFramebuffer:Ge,drawBuffers:Ke,useProgram:Xe,setBlending:gt,setMaterial:Lt,setFlipSided:lt,setCullFace:Kt,setLineWidth:k,setPolygonOffset:Xt,setScissorTest:Tt,activeTexture:Ot,bindTexture:qe,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:tt,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Qe,texSubImage2D:ge,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:je,scissor:Ee,viewport:ze,reset:ut}}function VT(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return M?new OffscreenCanvas(O,E):Vc("canvas")}function C(O,E,q){let ge=1;const ye=qe(O);if((ye.width>q||ye.height>q)&&(ge=q/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(ge*ye.width),je=Math.floor(ge*ye.height);_===void 0&&(_=T(he,je));const Ce=E?T(he,je):_;return Ce.width=he,Ce.height=je,Ce.getContext("2d").drawImage(O,0,0,he,je),ot("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+je+")."),Ce}else return"data"in O&&ot("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function b(O){return O.generateMipmaps}function S(O){s.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(O,E,q,ge,ye=!1){if(O!==null){if(s[O]!==void 0)return s[O];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=E;if(E===s.RED&&(q===s.FLOAT&&(he=s.R32F),q===s.HALF_FLOAT&&(he=s.R16F),q===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.R8UI),q===s.UNSIGNED_SHORT&&(he=s.R16UI),q===s.UNSIGNED_INT&&(he=s.R32UI),q===s.BYTE&&(he=s.R8I),q===s.SHORT&&(he=s.R16I),q===s.INT&&(he=s.R32I)),E===s.RG&&(q===s.FLOAT&&(he=s.RG32F),q===s.HALF_FLOAT&&(he=s.RG16F),q===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.RG8UI),q===s.UNSIGNED_SHORT&&(he=s.RG16UI),q===s.UNSIGNED_INT&&(he=s.RG32UI),q===s.BYTE&&(he=s.RG8I),q===s.SHORT&&(he=s.RG16I),q===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),q===s.UNSIGNED_INT&&(he=s.RGB32UI),q===s.BYTE&&(he=s.RGB8I),q===s.SHORT&&(he=s.RGB16I),q===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),q===s.UNSIGNED_INT&&(he=s.RGBA32UI),q===s.BYTE&&(he=s.RGBA8I),q===s.SHORT&&(he=s.RGBA16I),q===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const je=ye?Gc:Rt.getTransfer(ge);q===s.FLOAT&&(he=s.RGBA32F),q===s.HALF_FLOAT&&(he=s.RGBA16F),q===s.UNSIGNED_BYTE&&(he=je===It?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function L(O,E){let q;return O?E===null||E===Wi||E===Xo?q=s.DEPTH24_STENCIL8:E===Gi?q=s.DEPTH32F_STENCIL8:E===Wo&&(q=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===Xo?q=s.DEPTH_COMPONENT24:E===Gi?q=s.DEPTH_COMPONENT32F:E===Wo&&(q=s.DEPTH_COMPONENT16),q}function H(O,E){return b(O)===!0||O.isFramebufferTexture&&O.minFilter!==Tn&&O.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function F(O){const E=O.target;E.removeEventListener("dispose",F),A(E),E.isVideoTexture&&g.delete(E)}function B(O){const E=O.target;E.removeEventListener("dispose",B),ue(E)}function A(O){const E=r.get(O);if(E.__webglInit===void 0)return;const q=O.source,ge=x.get(q);if(ge){const ye=ge[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&U(O),Object.keys(ge).length===0&&x.delete(q)}r.remove(O)}function U(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const q=O.source,ge=x.get(q);delete ge[E.__cacheKey],d.memory.textures--}function ue(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ye=0;ye<E.__webglFramebuffer[ge].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[ge][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=O.textures;for(let ge=0,ye=q.length;ge<ye;ge++){const he=r.get(q[ge]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(q[ge])}r.remove(O)}let V=0;function Z(){V=0}function J(){const O=V;return O>=l.maxTextures&&ot("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function se(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Q(O,E){const q=r.get(O);if(O.isVideoTexture&&Tt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const ge=O.image;if(ge===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,O,E);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function N(O,E){const q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ne(q,O,E);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function I(O,E){const q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ne(q,O,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function ce(O,E){const q=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){ve(q,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const me={[Kd]:s.REPEAT,[va]:s.CLAMP_TO_EDGE,[Qd]:s.MIRRORED_REPEAT},Se={[Tn]:s.NEAREST,[sS]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[cd]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},z={[cS]:s.NEVER,[pS]:s.ALWAYS,[uS]:s.LESS,[kh]:s.LEQUAL,[fS]:s.EQUAL,[jh]:s.GEQUAL,[dS]:s.GREATER,[hS]:s.NOTEQUAL};function Y(O,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===cd||E.magFilter===fc||E.magFilter===Ur||E.minFilter===Dn||E.minFilter===cd||E.minFilter===fc||E.minFilter===Ur)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,me[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,me[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,me[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Se[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==fc&&E.minFilter!==Ur||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function fe(O,E){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",F));const ge=E.source;let ye=x.get(ge);ye===void 0&&(ye={},x.set(ge,ye));const he=se(E);if(he!==O.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,q=!0),ye[he].usedTimes++;const je=ye[O.__cacheKey];je!==void 0&&(ye[O.__cacheKey].usedTimes--,je.usedTimes===0&&U(E)),O.__cacheKey=he,O.__webglTexture=ye[he].texture}return q}function be(O,E,q){return Math.floor(Math.floor(O/q)/E)}function Oe(O,E,q,ge){const he=O.updateRanges;if(he.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,ge,E.data);else{he.sort((Ae,Ee)=>Ae.start-Ee.start);let je=0;for(let Ae=1;Ae<he.length;Ae++){const Ee=he[je],ze=he[Ae],Ne=Ee.start+Ee.count,Pe=be(ze.start,E.width,4),ut=be(Ee.start,E.width,4);ze.start<=Ne+1&&Pe===ut&&be(ze.start+ze.count-1,E.width,4)===Pe?Ee.count=Math.max(Ee.count,ze.start+ze.count-Ee.start):(++je,he[je]=ze)}he.length=je+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),Qe=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,Ee=he.length;Ae<Ee;Ae++){const ze=he[Ae],Ne=Math.floor(ze.start/4),Pe=Math.ceil(ze.count/4),ut=Ne%E.width,X=Math.floor(Ne/E.width),we=Pe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ut,X,we,Re,q,ge,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function ne(O,E,q){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const ye=fe(O,E),he=E.source;i.bindTexture(ge,O.__webglTexture,s.TEXTURE0+q);const je=r.get(he);if(he.version!==je.__version||ye===!0){i.activeTexture(s.TEXTURE0+q);const Ce=Rt.getPrimaries(Rt.workingColorSpace),Qe=E.colorSpace===tr?null:Rt.getPrimaries(E.colorSpace),tt=E.colorSpace===tr||Ce===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ae=C(E.image,!1,l.maxTextureSize);Ae=Ot(E,Ae);const Ee=c.convert(E.format,E.colorSpace),ze=c.convert(E.type);let Ne=P(E.internalFormat,Ee,ze,E.colorSpace,E.isVideoTexture);Y(ge,E);let Pe;const ut=E.mipmaps,X=E.isVideoTexture!==!0,we=je.__version===void 0||ye===!0,Re=he.dataReady,Fe=H(E,Ae);if(E.isDepthTexture)Ne=L(E.format===Lr,E.type),we&&(X?i.texStorage2D(s.TEXTURE_2D,1,Ne,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Ne,Ae.width,Ae.height,0,Ee,ze,null));else if(E.isDataTexture)if(ut.length>0){X&&we&&i.texStorage2D(s.TEXTURE_2D,Fe,Ne,ut[0].width,ut[0].height);for(let Te=0,de=ut.length;Te<de;Te++)Pe=ut[Te],X?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ee,ze,Pe.data):i.texImage2D(s.TEXTURE_2D,Te,Ne,Pe.width,Pe.height,0,Ee,ze,Pe.data);E.generateMipmaps=!1}else X?(we&&i.texStorage2D(s.TEXTURE_2D,Fe,Ne,Ae.width,Ae.height),Re&&Oe(E,Ae,Ee,ze)):i.texImage2D(s.TEXTURE_2D,0,Ne,Ae.width,Ae.height,0,Ee,ze,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ne,ut[0].width,ut[0].height,Ae.depth);for(let Te=0,de=ut.length;Te<de;Te++)if(Pe=ut[Te],E.format!==Ui)if(Ee!==null)if(X){if(Re)if(E.layerUpdates.size>0){const Ie=mx(Pe.width,Pe.height,E.format,E.type);for(const it of E.layerUpdates){const Pt=Pe.data.subarray(it*Ie/Pe.data.BYTES_PER_ELEMENT,(it+1)*Ie/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,it,Pe.width,Pe.height,1,Ee,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ae.depth,Ee,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Ne,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ae.depth,Ee,ze,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Ne,Pe.width,Pe.height,Ae.depth,0,Ee,ze,Pe.data)}else{X&&we&&i.texStorage2D(s.TEXTURE_2D,Fe,Ne,ut[0].width,ut[0].height);for(let Te=0,de=ut.length;Te<de;Te++)Pe=ut[Te],E.format!==Ui?Ee!==null?X?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ee,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Ne,Pe.width,Pe.height,0,Pe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ee,ze,Pe.data):i.texImage2D(s.TEXTURE_2D,Te,Ne,Pe.width,Pe.height,0,Ee,ze,Pe.data)}else if(E.isDataArrayTexture)if(X){if(we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ne,Ae.width,Ae.height,Ae.depth),Re)if(E.layerUpdates.size>0){const Te=mx(Ae.width,Ae.height,E.format,E.type);for(const de of E.layerUpdates){const Ie=Ae.data.subarray(de*Te/Ae.data.BYTES_PER_ELEMENT,(de+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Ae.width,Ae.height,1,Ee,ze,Ie)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ee,ze,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,Ae.width,Ae.height,Ae.depth,0,Ee,ze,Ae.data);else if(E.isData3DTexture)X?(we&&i.texStorage3D(s.TEXTURE_3D,Fe,Ne,Ae.width,Ae.height,Ae.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ee,ze,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,Ae.width,Ae.height,Ae.depth,0,Ee,ze,Ae.data);else if(E.isFramebufferTexture){if(we)if(X)i.texStorage2D(s.TEXTURE_2D,Fe,Ne,Ae.width,Ae.height);else{let Te=Ae.width,de=Ae.height;for(let Ie=0;Ie<Fe;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,Ne,Te,de,0,Ee,ze,null),Te>>=1,de>>=1}}else if(ut.length>0){if(X&&we){const Te=qe(ut[0]);i.texStorage2D(s.TEXTURE_2D,Fe,Ne,Te.width,Te.height)}for(let Te=0,de=ut.length;Te<de;Te++)Pe=ut[Te],X?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ee,ze,Pe):i.texImage2D(s.TEXTURE_2D,Te,Ne,Ee,ze,Pe);E.generateMipmaps=!1}else if(X){if(we){const Te=qe(Ae);i.texStorage2D(s.TEXTURE_2D,Fe,Ne,Te.width,Te.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,ze,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Ne,Ee,ze,Ae);b(E)&&S(ge),je.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ve(O,E,q){if(E.image.length!==6)return;const ge=fe(O,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+q);const he=r.get(ye);if(ye.version!==he.__version||ge===!0){i.activeTexture(s.TEXTURE0+q);const je=Rt.getPrimaries(Rt.workingColorSpace),Ce=E.colorSpace===tr?null:Rt.getPrimaries(E.colorSpace),Qe=E.colorSpace===tr||je===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let de=0;de<6;de++)!tt&&!Ae?Ee[de]=C(E.image[de],!0,l.maxCubemapSize):Ee[de]=Ae?E.image[de].image:E.image[de],Ee[de]=Ot(E,Ee[de]);const ze=Ee[0],Ne=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type),ut=P(E.internalFormat,Ne,Pe,E.colorSpace),X=E.isVideoTexture!==!0,we=he.__version===void 0||ge===!0,Re=ye.dataReady;let Fe=H(E,ze);Y(s.TEXTURE_CUBE_MAP,E);let Te;if(tt){X&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ut,ze.width,ze.height);for(let de=0;de<6;de++){Te=Ee[de].mipmaps;for(let Ie=0;Ie<Te.length;Ie++){const it=Te[Ie];E.format!==Ui?Ne!==null?X?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,it.width,it.height,Ne,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,ut,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,it.width,it.height,Ne,Pe,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,ut,it.width,it.height,0,Ne,Pe,it.data)}}}else{if(Te=E.mipmaps,X&&we){Te.length>0&&Fe++;const de=qe(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ut,de.width,de.height)}for(let de=0;de<6;de++)if(Ae){X?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee[de].width,Ee[de].height,Ne,Pe,Ee[de].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Ee[de].width,Ee[de].height,0,Ne,Pe,Ee[de].data);for(let Ie=0;Ie<Te.length;Ie++){const Pt=Te[Ie].image[de].image;X?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Pt.width,Pt.height,Ne,Pe,Pt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,ut,Pt.width,Pt.height,0,Ne,Pe,Pt.data)}}else{X?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Pe,Ee[de]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Ne,Pe,Ee[de]);for(let Ie=0;Ie<Te.length;Ie++){const it=Te[Ie];X?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Ne,Pe,it.image[de]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,ut,Ne,Pe,it.image[de])}}}b(E)&&S(s.TEXTURE_CUBE_MAP),he.__version=ye.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Me(O,E,q,ge,ye,he){const je=c.convert(q.format,q.colorSpace),Ce=c.convert(q.type),Qe=P(q.internalFormat,je,Ce,q.colorSpace),tt=r.get(E),Ae=r.get(q);if(Ae.__renderTarget=E,!tt.__hasExternalTextures){const Ee=Math.max(1,E.width>>he),ze=Math.max(1,E.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,he,Qe,Ee,ze,E.depth,0,je,Ce,null):i.texImage2D(ye,he,Qe,Ee,ze,0,je,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Xt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ye,Ae.__webglTexture,0,k(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ye,Ae.__webglTexture,he),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(O,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const ge=E.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,he=L(E.stencilBuffer,ye),je=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),he,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,O)}else{const ge=E.textures;for(let ye=0;ye<ge.length;ye++){const he=ge[ye],je=c.convert(he.format,he.colorSpace),Ce=c.convert(he.type),Qe=P(he.internalFormat,je,Ce,he.colorSpace);Xt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),Qe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),Qe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(O,E,q){const ge=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const tt=c.convert(E.depthTexture.format),Ae=c.convert(E.depthTexture.type);let Ee;E.depthTexture.format===ba?Ee=s.DEPTH_COMPONENT24:E.depthTexture.format===Lr&&(Ee=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ee,E.width,E.height,0,tt,Ae,null)}}else Q(E.depthTexture,0);const he=ye.__webglTexture,je=k(E),Ce=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Qe=E.depthTexture.format===Lr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)Xt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qe,Ce,he,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Qe,Ce,he,0);else if(E.depthTexture.format===Lr)Xt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qe,Ce,he,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Qe,Ce,he,0);else throw new Error("Unknown depthTexture format")}function Xe(O){const E=r.get(O),q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=ge}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Ke(E.__webglFramebuffer[ge],O,ge);else{const ge=O.texture.mipmaps;ge&&ge.length>0?Ke(E.__webglFramebuffer[0],O,0):Ke(E.__webglFramebuffer,O,0)}else if(q){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),Ge(E.__webglDepthbuffer[ge],O,!1);else{const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const ge=O.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ge(E.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(O,E,q){const ge=r.get(O);E!==void 0&&Me(ge.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Xe(O)}function yt(O){const E=O.texture,q=r.get(O),ge=r.get(E);O.addEventListener("dispose",B);const ye=O.textures,he=O.isWebGLCubeRenderTarget===!0,je=ye.length>1;if(je||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,d.memory.textures++),he){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let Qe=0;Qe<E.mipmaps.length;Qe++)q.__webglFramebuffer[Ce][Qe]=s.createFramebuffer()}else q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ce=0,Qe=ye.length;Ce<Qe;Ce++){const tt=r.get(ye[Ce]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&Xt(O)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const Qe=ye[Ce];q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const tt=c.convert(Qe.format,Qe.colorSpace),Ae=c.convert(Qe.type),Ee=P(Qe.internalFormat,tt,Ae,Qe.colorSpace,O.isXRRenderTarget===!0),ze=k(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ee,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Me(q.__webglFramebuffer[Ce][Qe],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe);else Me(q.__webglFramebuffer[Ce],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);b(E)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Ce=0,Qe=ye.length;Ce<Qe;Ce++){const tt=ye[Ce],Ae=r.get(tt);let Ee=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ee=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,Ae.__webglTexture),Y(Ee,tt),Me(q.__webglFramebuffer,O,tt,s.COLOR_ATTACHMENT0+Ce,Ee,0),b(tt)&&S(Ee)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,ge.__webglTexture),Y(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Me(q.__webglFramebuffer[Qe],O,E,s.COLOR_ATTACHMENT0,Ce,Qe);else Me(q.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,Ce,0);b(E)&&S(Ce),i.unbindTexture()}O.depthBuffer&&Xe(O)}function gt(O){const E=O.textures;for(let q=0,ge=E.length;q<ge;q++){const ye=E[q];if(b(ye)){const he=D(O),je=r.get(ye).__webglTexture;i.bindTexture(he,je),S(he),i.unbindTexture()}}}const Lt=[],lt=[];function Kt(O){if(O.samples>0){if(Xt(O)===!1){const E=O.textures,q=O.width,ge=O.height;let ye=s.COLOR_BUFFER_BIT;const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(O),Ce=E.length>1;if(Ce)for(let tt=0;tt<E.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Qe=O.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Ae=r.get(E[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,q,ge,0,0,q,ge,ye,s.NEAREST),m===!0&&(Lt.length=0,lt.length=0,Lt.push(s.COLOR_ATTACHMENT0+tt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Lt.push(he),lt.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let tt=0;tt<E.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Ae=r.get(E[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function k(O){return Math.min(l.maxSamples,O.samples)}function Xt(O){const E=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(O){const E=d.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function Ot(O,E){const q=O.colorSpace,ge=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Ps&&q!==tr&&(Rt.getTransfer(q)===It?(ge!==Ui||ye!==ri)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",q)),E}function qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=ce,this.rebindTextures=Jt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function kT(s,e){function i(r,l=tr){let c;const d=Rt.getTransfer(l);if(r===ri)return s.UNSIGNED_BYTE;if(r===Bh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ih)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Zx)return s.BYTE;if(r===Kx)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Fh)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Sa)return s.HALF_FLOAT;if(r===$x)return s.ALPHA;if(r===ev)return s.RGB;if(r===Ui)return s.RGBA;if(r===ba)return s.DEPTH_COMPONENT;if(r===Lr)return s.DEPTH_STENCIL;if(r===tv)return s.RED;if(r===Hh)return s.RED_INTEGER;if(r===zs)return s.RG;if(r===Gh)return s.RG_INTEGER;if(r===Vh)return s.RGBA_INTEGER;if(r===Pc||r===Fc||r===Bc||r===Ic)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jd||r===$d||r===eh||r===th)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===nh||r===ih)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ah)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===rh)return c.COMPRESSED_R11_EAC;if(r===sh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===oh)return c.COMPRESSED_RG11_EAC;if(r===lh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===xh||r===vh||r===_h||r===yh||r===Sh||r===bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ch)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ph)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_h)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mh||r===Eh||r===Th)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Mh)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Th)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ah||r===Rh||r===wh||r===Ch)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ah)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const jT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:jT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xi(new qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends Bs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,g=null,_=null,x=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",b=new XT,S={},D=i.getContextAttributes();let P=null,L=null;const H=[],F=[],B=new mt;let A=null;const U=new ai;U.viewport=new tn;const ue=new ai;ue.viewport=new tn;const V=[U,ue],Z=new rb;let J=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=H[ne];return ve===void 0&&(ve=new xd,H[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=H[ne];return ve===void 0&&(ve=new xd,H[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=H[ne];return ve===void 0&&(ve=new xd,H[ne]=ve),ve.getHandSpace()};function Q(ne){const ve=F.indexOf(ne.inputSource);if(ve===-1)return;const Me=H[ve];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,h||d),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function N(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let ne=0;ne<H.length;ne++){const ve=F[ne];ve!==null&&(F[ne]=null,H[ne].disconnect(ve))}J=null,se=null,b.reset();for(const ne in S)delete S[ne];e.setRenderTarget(P),M=null,x=null,_=null,l=null,L=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ge=null,Ke=null;D.depth&&(Ke=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=D.stencil?Lr:ba,Ge=D.stencil?Xo:Wi);const Xe={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Xe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new ji(x.textureWidth,x.textureHeight,{format:Ui,type:ri,depthTexture:new Yo(x.textureWidth,x.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new ji(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function I(ne){for(let ve=0;ve<ne.removed.length;ve++){const Me=ne.removed[ve],Ge=F.indexOf(Me);Ge>=0&&(F[Ge]=null,H[Ge].disconnect(Me))}for(let ve=0;ve<ne.added.length;ve++){const Me=ne.added[ve];let Ge=F.indexOf(Me);if(Ge===-1){for(let Xe=0;Xe<H.length;Xe++)if(Xe>=F.length){F.push(Me),Ge=Xe;break}else if(F[Xe]===null){F[Xe]=Me,Ge=Xe;break}if(Ge===-1)break}const Ke=H[Ge];Ke&&Ke.connect(Me)}}const ce=new ie,me=new ie;function Se(ne,ve,Me){ce.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Me.matrixWorld);const Ge=ce.distanceTo(me),Ke=ve.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Jt=Ke[14]/(Ke[10]-1),yt=Ke[14]/(Ke[10]+1),gt=(Ke[9]+1)/Ke[5],Lt=(Ke[9]-1)/Ke[5],lt=(Ke[8]-1)/Ke[0],Kt=(Xe[8]+1)/Xe[0],k=Jt*lt,Xt=Jt*Kt,Tt=Ge/(-lt+Kt),Ot=Tt*-lt;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ot),ne.translateZ(Tt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ke[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const qe=Jt+Tt,O=yt+Tt,E=k-Ot,q=Xt+(Ge-Ot),ge=gt*yt/O*qe,ye=Lt*yt/O*qe;ne.projectionMatrix.makePerspective(E,q,ge,ye,qe,O),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function z(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ve=ne.near,Me=ne.far;b.texture!==null&&(b.depthNear>0&&(ve=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),Z.near=ue.near=U.near=ve,Z.far=ue.far=U.far=Me,(J!==Z.near||se!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),J=Z.near,se=Z.far),Z.layers.mask=ne.layers.mask|6,U.layers.mask=Z.layers.mask&-5,ue.layers.mask=Z.layers.mask&-3;const Ge=ne.parent,Ke=Z.cameras;z(Z,Ge);for(let Xe=0;Xe<Ke.length;Xe++)z(Ke[Xe],Ge);Ke.length===2?Se(Z,U,ue):Z.projectionMatrix.copy(U.projectionMatrix),Y(ne,Z,Ge)};function Y(ne,ve,Me){Me===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Dh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(ne){m=ne,x!==null&&(x.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(ne){return S[ne]};let fe=null;function be(ne,ve){if(g=ve.getViewerPose(h||d),T=ve,g!==null){const Me=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ge=!1;Me.length!==Z.cameras.length&&(Z.cameras.length=0,Ge=!0);for(let yt=0;yt<Me.length;yt++){const gt=Me[yt];let Lt=null;if(M!==null)Lt=M.getViewport(gt);else{const Kt=_.getViewSubImage(x,gt);Lt=Kt.viewport,yt===0&&(e.setRenderTargetTextures(L,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(L))}let lt=V[yt];lt===void 0&&(lt=new ai,lt.layers.enable(yt),lt.viewport=new tn,V[yt]=lt),lt.matrix.fromArray(gt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(gt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),yt===0&&(Z.matrix.copy(lt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ge===!0&&Z.cameras.push(lt)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const yt=_.getDepthInformation(Me[0]);yt&&yt.isValid&&yt.texture&&b.init(yt,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let yt=0;yt<Me.length;yt++){const gt=Me[yt].camera;if(gt){let Lt=S[gt];Lt||(Lt=new dv,S[gt]=Lt);const lt=_.getCameraImage(gt);Lt.sourceTexture=lt}}}}for(let Me=0;Me<H.length;Me++){const Ge=F[Me],Ke=H[Me];Ge!==null&&Ke!==void 0&&Ke.update(Ge,ve,h||d)}fe&&fe(ne,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),T=null}const Oe=new xv;Oe.setAnimationLoop(be),this.setAnimationLoop=function(ne){fe=ne},this.dispose=function(){}}}const Rr=new Xi,YT=new Qt;function ZT(s,e){function i(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function r(b,S){S.color.getRGB(b.fogColor.value,hv(s)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function l(b,S,D,P,L){S.isMeshBasicMaterial?c(b,S):S.isMeshLambertMaterial?(c(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(b,S),_(b,S)):S.isMeshPhongMaterial?(c(b,S),g(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(b,S),x(b,S),S.isMeshPhysicalMaterial&&M(b,S,L)):S.isMeshMatcapMaterial?(c(b,S),T(b,S)):S.isMeshDepthMaterial?c(b,S):S.isMeshDistanceMaterial?(c(b,S),C(b,S)):S.isMeshNormalMaterial?c(b,S):S.isLineBasicMaterial?(d(b,S),S.isLineDashedMaterial&&p(b,S)):S.isPointsMaterial?m(b,S,D,P):S.isSpriteMaterial?h(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,i(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===Xn&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,i(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===Xn&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,i(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,i(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const D=e.get(S),P=D.envMap,L=D.envMapRotation;P&&(b.envMap.value=P,Rr.copy(L),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),b.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Rr)),b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,b.aoMapTransform))}function d(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform))}function p(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function m(b,S,D,P){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*D,b.scale.value=P*.5,S.map&&(b.map.value=S.map,i(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function h(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function g(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function _(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function x(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function M(b,S,D){b.ior.value=S.ior,S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=D.texture,b.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,S){S.matcap&&(b.matcap.value=S.matcap)}function C(b,S){const D=e.get(S).light;b.referencePosition.value.setFromMatrixPosition(D.matrixWorld),b.nearDistance.value=D.shadow.camera.near,b.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function KT(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const L=P.program;r.uniformBlockBinding(D,L)}function h(D,P){let L=l[D.id];L===void 0&&(T(D),L=g(D),l[D.id]=L,D.addEventListener("dispose",b));const H=P.program;r.updateUBOMapping(D,H);const F=e.render.frame;c[D.id]!==F&&(x(D),c[D.id]=F)}function g(D){const P=_();D.__bindingPointIndex=P;const L=s.createBuffer(),H=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function _(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const P=l[D.id],L=D.uniforms,H=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,B=L.length;F<B;F++){const A=Array.isArray(L[F])?L[F]:[L[F]];for(let U=0,ue=A.length;U<ue;U++){const V=A[U];if(M(V,F,U,H)===!0){const Z=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let se=0;for(let Q=0;Q<J.length;Q++){const N=J[Q],I=C(N);typeof N=="number"||typeof N=="boolean"?(V.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,Z+se,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=0,V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=0,V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=0):(N.toArray(V.__data,se),se+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,P,L,H){const F=D.value,B=P+"_"+L;if(H[B]===void 0)return typeof F=="number"||typeof F=="boolean"?H[B]=F:H[B]=F.clone(),!0;{const A=H[B];if(typeof F=="number"||typeof F=="boolean"){if(A!==F)return H[B]=F,!0}else if(A.equals(F)===!1)return A.copy(F),!0}return!1}function T(D){const P=D.uniforms;let L=0;const H=16;for(let B=0,A=P.length;B<A;B++){const U=Array.isArray(P[B])?P[B]:[P[B]];for(let ue=0,V=U.length;ue<V;ue++){const Z=U[ue],J=Array.isArray(Z.value)?Z.value:[Z.value];for(let se=0,Q=J.length;se<Q;se++){const N=J[se],I=C(N),ce=L%H,me=ce%I.boundary,Se=ce+me;L+=me,Se!==0&&H-Se<I.storage&&(L+=H-Se),Z.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=I.storage}}}const F=L%H;return F>0&&(L+=H-F),D.__size=L,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",D),P}function b(D){const P=D.target;P.removeEventListener("dispose",b);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function S(){for(const D in l)s.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:S}}const QT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function JT(){return Ii===null&&(Ii=new IS(QT,16,16,zs,Sa),Ii.name="DFG_LUT",Ii.minFilter=Dn,Ii.magFilter=Dn,Ii.wrapS=va,Ii.wrapT=va,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class $T{constructor(e={}){const{canvas:i=gS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ri}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=M,b=new Set([Vh,Gh,Hh]),S=new Set([ri,Wi,Wo,Xo,Bh,Ih]),D=new Uint32Array(4),P=new Int32Array(4);let L=null,H=null;const F=[],B=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ue=!1;this._outputColorSpace=gi;let V=0,Z=0,J=null,se=-1,Q=null;const N=new tn,I=new tn;let ce=null;const me=new Et(0);let Se=0,z=i.width,Y=i.height,fe=1,be=null,Oe=null;const ne=new tn(0,0,z,Y),ve=new tn(0,0,z,Y);let Me=!1;const Ge=new qh;let Ke=!1,Xe=!1;const Jt=new Qt,yt=new ie,gt=new tn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return J===null?fe:1}let k=r;function Xt(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ph}`),i.addEventListener("webglcontextlost",Ie,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),k===null){const W="webgl2";if(k=Xt(W,w),k===null)throw Xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let Tt,Ot,qe,O,E,q,ge,ye,he,je,Ce,Qe,tt,Ae,Ee,ze,Ne,Pe,ut,X,we,Re,Fe;function Te(){Tt=new $1(k),Tt.init(),we=new kT(k,Tt),Ot=new W1(k,Tt,e,we),qe=new GT(k,Tt),Ot.reversedDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),O=new nE(k),E=new RT,q=new VT(k,Tt,qe,E,Ot,we,O),ge=new J1(U),ye=new ob(k),Re=new k1(k,ye),he=new eE(k,ye,O,Re),je=new aE(k,he,ye,Re,O),Pe=new iE(k,Ot,q),Ee=new X1(E),Ce=new AT(U,ge,Tt,Ot,Re,Ee),Qe=new ZT(U,E),tt=new CT,Ae=new zT(Tt),Ne=new V1(U,ge,qe,je,T,m),ze=new HT(U,je,Ot),Fe=new KT(k,O,Ot,qe),ut=new j1(k,Tt,O),X=new tE(k,Tt,O),O.programs=Ce.programs,U.capabilities=Ot,U.extensions=Tt,U.properties=E,U.renderLists=tt,U.shadowMap=ze,U.state=qe,U.info=O}Te(),C!==ri&&(A=new sE(C,i.width,i.height,l,c));const de=new qT(U,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(w){w!==void 0&&(fe=w,this.setSize(z,Y,!1))},this.getSize=function(w){return w.set(z,Y)},this.setSize=function(w,W,oe=!0){if(de.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Y=W,i.width=Math.floor(w*fe),i.height=Math.floor(W*fe),oe===!0&&(i.style.width=w+"px",i.style.height=W+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(z*fe,Y*fe).floor()},this.setDrawingBufferSize=function(w,W,oe){z=w,Y=W,fe=oe,i.width=Math.floor(w*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(C===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,W,oe,ae){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,W,oe,ae),qe.viewport(N.copy(ne).multiplyScalar(fe).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,W,oe,ae){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,W,oe,ae),qe.scissor(I.copy(ve).multiplyScalar(fe).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){qe.setScissorTest(Me=w)},this.setOpaqueSort=function(w){be=w},this.setTransparentSort=function(w){Oe=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,oe=!0){let ae=0;if(w){let $=!1;if(J!==null){const De=J.texture.format;$=b.has(De)}if($){const De=J.texture.type,Be=S.has(De),Ue=Ne.getClearColor(),We=Ne.getClearAlpha(),Ze=Ue.r,nt=Ue.g,rt=Ue.b;Be?(D[0]=Ze,D[1]=nt,D[2]=rt,D[3]=We,k.clearBufferuiv(k.COLOR,0,D)):(P[0]=Ze,P[1]=nt,P[2]=rt,P[3]=We,k.clearBufferiv(k.COLOR,0,P))}else ae|=k.COLOR_BUFFER_BIT}W&&(ae|=k.DEPTH_BUFFER_BIT),oe&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Ne.dispose(),tt.dispose(),Ae.dispose(),E.dispose(),ge.dispose(),je.dispose(),Re.dispose(),Fe.dispose(),Ce.dispose(),de.dispose(),de.removeEventListener("sessionstart",zr),de.removeEventListener("sessionend",Pr),Ni.stop()};function Ie(w){w.preventDefault(),qg("WebGLRenderer: Context Lost."),ue=!0}function it(){qg("WebGLRenderer: Context Restored."),ue=!1;const w=O.autoReset,W=ze.enabled,oe=ze.autoUpdate,ae=ze.needsUpdate,$=ze.type;Te(),O.autoReset=w,ze.enabled=W,ze.autoUpdate=oe,ze.needsUpdate=ae,ze.type=$}function Pt(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){const W=w.target;W.removeEventListener("dispose",At),Ln(W)}function Ln(w){_i(w),E.remove(w)}function _i(w){const W=E.get(w).programs;W!==void 0&&(W.forEach(function(oe){Ce.releaseProgram(oe)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,oe,ae,$,De){W===null&&(W=Lt);const Be=$.isMesh&&$.matrixWorld.determinant()<0,Ue=tl(w,W,oe,ae,$);qe.setMaterial(ae,Be);let We=oe.index,Ze=1;if(ae.wireframe===!0){if(We=he.getWireframeAttribute(oe),We===void 0)return;Ze=2}const nt=oe.drawRange,rt=oe.attributes.position;let He=nt.start*Ze,ft=(nt.start+nt.count)*Ze;De!==null&&(He=Math.max(He,De.start*Ze),ft=Math.min(ft,(De.start+De.count)*Ze)),We!==null?(He=Math.max(He,0),ft=Math.min(ft,We.count)):rt!=null&&(He=Math.max(He,0),ft=Math.min(ft,rt.count));const qt=ft-He;if(qt<0||qt===1/0)return;Re.setup($,ae,Ue,oe,We);let Yt,wt=ut;if(We!==null&&(Yt=ye.get(We),wt=X,wt.setIndex(Yt)),$.isMesh)ae.wireframe===!0?(qe.setLineWidth(ae.wireframeLinewidth*Kt()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if($.isLine){let pn=ae.linewidth;pn===void 0&&(pn=1),qe.setLineWidth(pn*Kt()),$.isLineSegments?wt.setMode(k.LINES):$.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else $.isPoints?wt.setMode(k.POINTS):$.isSprite&&wt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)kc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pn=$._multiDrawStarts,ke=$._multiDrawCounts,Nn=$._multiDrawCount,at=We?ye.get(We).bytesPerElement:1,On=E.get(ae).currentProgram.getUniforms();for(let qn=0;qn<Nn;qn++)On.setValue(k,"_gl_DrawID",qn),wt.render(pn[qn]/at,ke[qn])}else if($.isInstancedMesh)wt.renderInstances(He,qt,$.count);else if(oe.isInstancedBufferGeometry){const pn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,pn);wt.renderInstances(He,qt,ke)}else wt.render(He,qt)};function Vs(w,W,oe){w.transparent===!0&&w.side===Ci&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,Ma(w,W,oe),w.side=ir,w.needsUpdate=!0,Ma(w,W,oe),w.side=Ci):Ma(w,W,oe)}this.compile=function(w,W,oe=null){oe===null&&(oe=w),H=Ae.get(oe),H.init(W),B.push(H),oe.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(H.pushLight($),$.castShadow&&H.pushShadow($))}),w!==oe&&w.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(H.pushLight($),$.castShadow&&H.pushShadow($))}),H.setupLights();const ae=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const De=$.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ue=De[Be];Vs(Ue,oe,$),ae.add(Ue)}else Vs(De,oe,$),ae.add(De)}),H=B.pop(),ae},this.compileAsync=function(w,W,oe=null){const ae=this.compile(w,W,oe);return new Promise($=>{function De(){if(ae.forEach(function(Be){E.get(Be).currentProgram.isReady()&&ae.delete(Be)}),ae.size===0){$(w);return}setTimeout(De,10)}Tt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Or=null;function Jo(w){Or&&Or(w)}function zr(){Ni.stop()}function Pr(){Ni.start()}const Ni=new xv;Ni.setAnimationLoop(Jo),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){Or=w,de.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},de.addEventListener("sessionstart",zr),de.addEventListener("sessionend",Pr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const oe=de.enabled===!0&&de.isPresenting===!0,ae=A!==null&&(J===null||oe)&&A.begin(U,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(W),W=de.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,W,J),H=Ae.get(w,B.length),H.init(W),B.push(H),Jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ge.setFromProjectionMatrix(Jt,Vi,W.reversedDepth),Xe=this.localClippingEnabled,Ke=Ee.init(this.clippingPlanes,Xe),L=tt.get(w,F.length),L.init(),F.push(L),de.enabled===!0&&de.isPresenting===!0){const Be=U.xr.getDepthSensingMesh();Be!==null&&Fr(Be,W,-1/0,U.sortObjects)}Fr(w,W,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(be,Oe),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Ne.addToRenderList(L,w),this.info.render.frame++,Ke===!0&&Ee.beginShadows();const $=H.state.shadowsArray;if(ze.render($,w,W),Ke===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&A.hasRenderPass())===!1){const Be=L.opaque,Ue=L.transmissive;if(H.setupLights(),W.isArrayCamera){const We=W.cameras;if(Ue.length>0)for(let Ze=0,nt=We.length;Ze<nt;Ze++){const rt=We[Ze];rn(Be,Ue,w,rt)}lt&&Ne.render(w);for(let Ze=0,nt=We.length;Ze<nt;Ze++){const rt=We[Ze];yi(L,w,rt,rt.viewport)}}else Ue.length>0&&rn(Be,Ue,w,W),lt&&Ne.render(w),yi(L,w,W)}J!==null&&Z===0&&(q.updateMultisampleRenderTarget(J),q.updateRenderTargetMipmap(J)),ae&&A.end(U),w.isScene===!0&&w.onAfterRender(U,w,W),Re.resetDefaultState(),se=-1,Q=null,B.pop(),B.length>0?(H=B[B.length-1],Ke===!0&&Ee.setGlobalState(U.clippingPlanes,H.state.camera)):H=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function Fr(w,W,oe,ae){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)H.pushLight(w),w.castShadow&&H.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){ae&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Jt);const Be=je.update(w),Ue=w.material;Ue.visible&&L.push(w,Be,Ue,oe,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const Be=je.update(w),Ue=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),gt.copy(Be.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ue)){const We=Be.groups;for(let Ze=0,nt=We.length;Ze<nt;Ze++){const rt=We[Ze],He=Ue[rt.materialIndex];He&&He.visible&&L.push(w,Be,He,oe,gt.z,rt)}}else Ue.visible&&L.push(w,Be,Ue,oe,gt.z,null)}}const De=w.children;for(let Be=0,Ue=De.length;Be<Ue;Be++)Fr(De[Be],W,oe,ae)}function yi(w,W,oe,ae){const{opaque:$,transmissive:De,transparent:Be}=w;H.setupLightsView(oe),Ke===!0&&Ee.setGlobalState(U.clippingPlanes,oe),ae&&qe.viewport(N.copy(ae)),$.length>0&&hn($,W,oe),De.length>0&&hn(De,W,oe),Be.length>0&&hn(Be,W,oe),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function rn(w,W,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ae.id]===void 0){const He=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ae.id]=new ji(1,1,{generateMipmaps:!0,type:He?Sa:ri,minFilter:Ur,samples:Math.max(4,Ot.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const De=H.state.transmissionRenderTarget[ae.id],Be=ae.viewport||N;De.setSize(Be.z*U.transmissionResolutionScale,Be.w*U.transmissionResolutionScale);const Ue=U.getRenderTarget(),We=U.getActiveCubeFace(),Ze=U.getActiveMipmapLevel();U.setRenderTarget(De),U.getClearColor(me),Se=U.getClearAlpha(),Se<1&&U.setClearColor(16777215,.5),U.clear(),lt&&Ne.render(oe);const nt=U.toneMapping;U.toneMapping=ki;const rt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),H.setupLightsView(ae),Ke===!0&&Ee.setGlobalState(U.clippingPlanes,ae),hn(w,oe,ae),q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ft=0,qt=W.length;ft<qt;ft++){const Yt=W[ft],{object:wt,geometry:pn,material:ke,group:Nn}=Yt;if(ke.side===Ci&&wt.layers.test(ae.layers)){const at=ke.side;ke.side=Xn,ke.needsUpdate=!0,Yi(wt,oe,ae,pn,ke,Nn),ke.side=at,ke.needsUpdate=!0,He=!0}}He===!0&&(q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De))}U.setRenderTarget(Ue,We,Ze),U.setClearColor(me,Se),rt!==void 0&&(ae.viewport=rt),U.toneMapping=nt}function hn(w,W,oe){const ae=W.isScene===!0?W.overrideMaterial:null;for(let $=0,De=w.length;$<De;$++){const Be=w[$],{object:Ue,geometry:We,group:Ze}=Be;let nt=Be.material;nt.allowOverride===!0&&ae!==null&&(nt=ae),Ue.layers.test(oe.layers)&&Yi(Ue,W,oe,We,nt,Ze)}}function Yi(w,W,oe,ae,$,De){w.onBeforeRender(U,W,oe,ae,$,De),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(U,W,oe,ae,w,De),$.transparent===!0&&$.side===Ci&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,U.renderBufferDirect(oe,W,ae,$,w,De),$.side=ir,$.needsUpdate=!0,U.renderBufferDirect(oe,W,ae,$,w,De),$.side=Ci):U.renderBufferDirect(oe,W,ae,$,w,De),w.onAfterRender(U,W,oe,ae,$,De)}function Ma(w,W,oe){W.isScene!==!0&&(W=Lt);const ae=E.get(w),$=H.state.lights,De=H.state.shadowsArray,Be=$.state.version,Ue=Ce.getParameters(w,$.state,De,W,oe),We=Ce.getProgramCacheKey(Ue);let Ze=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=ge.get(w.envMap||ae.environment,nt),ae.envMapRotation=ae.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",At),Ze=new Map,ae.programs=Ze);let rt=Ze.get(We);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===Be)return el(w,Ue),rt}else Ue.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Ue,U),rt=Ce.acquireProgram(Ue,We),Ze.set(We,rt),ae.uniforms=Ue.uniforms;const He=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Ee.uniform),el(w,Ue),ae.needsLights=ks(w),ae.lightsStateVersion=Be,ae.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=rt,ae.uniformsList=null,rt}function $o(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Hc.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function el(w,W){const oe=E.get(w);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function tl(w,W,oe,ae,$){W.isScene!==!0&&(W=Lt),q.resetTextureUnits();const De=W.fog,Be=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Ue=J===null?U.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ps,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ze=ge.get(ae.envMap||Be,We),nt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),He=!!oe.morphAttributes.position,ft=!!oe.morphAttributes.normal,qt=!!oe.morphAttributes.color;let Yt=ki;ae.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Yt=U.toneMapping);const wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pn=wt!==void 0?wt.length:0,ke=E.get(ae),Nn=H.state.lights;if(Ke===!0&&(Xe===!0||w!==Q)){const on=w===Q&&ae.id===se;Ee.setState(ae,w,on)}let at=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Nn.state.version||ke.outputColorSpace!==Ue||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isBatchedMesh&&ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==Ze||ae.fog===!0&&ke.fog!==De||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==nt||ke.vertexTangents!==rt||ke.morphTargets!==He||ke.morphNormals!==ft||ke.morphColors!==qt||ke.toneMapping!==Yt||ke.morphTargetsCount!==pn)&&(at=!0):(at=!0,ke.__version=ae.version);let On=ke.currentProgram;at===!0&&(On=Ma(ae,W,$));let qn=!1,Si=!1,Yn=!1;const zt=On.getUniforms(),sn=ke.uniforms;if(qe.useProgram(On.program)&&(qn=!0,Si=!0,Yn=!0),ae.id!==se&&(se=ae.id,Si=!0),qn||Q!==w){qe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",w.projectionMatrix),zt.setValue(k,"viewMatrix",w.matrixWorldInverse);const bi=zt.map.cameraPosition;bi!==void 0&&bi.setValue(k,yt.setFromMatrixPosition(w.matrixWorld)),Ot.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Si=!0,Yn=!0)}if(ke.needsLights&&(Nn.state.directionalShadowMap.length>0&&zt.setValue(k,"directionalShadowMap",Nn.state.directionalShadowMap,q),Nn.state.spotShadowMap.length>0&&zt.setValue(k,"spotShadowMap",Nn.state.spotShadowMap,q),Nn.state.pointShadowMap.length>0&&zt.setValue(k,"pointShadowMap",Nn.state.pointShadowMap,q)),$.isSkinnedMesh){zt.setOptional(k,$,"bindMatrix"),zt.setOptional(k,$,"bindMatrixInverse");const on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),zt.setValue(k,"boneTexture",on.boneTexture,q))}$.isBatchedMesh&&(zt.setOptional(k,$,"batchingTexture"),zt.setValue(k,"batchingTexture",$._matricesTexture,q),zt.setOptional(k,$,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",$._indirectTexture,q),zt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",$._colorsTexture,q));const zn=oe.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Pe.update($,oe,On),(Si||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,zt.setValue(k,"receiveShadow",$.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(sn.envMapIntensity.value=W.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=JT()),Si&&(zt.setValue(k,"toneMappingExposure",U.toneMappingExposure),ke.needsLights&&ar(sn,Yn),De&&ae.fog===!0&&Qe.refreshFogUniforms(sn,De),Qe.refreshMaterialUniforms(sn,ae,fe,Y,H.state.transmissionRenderTarget[w.id]),Hc.upload(k,$o(ke),sn,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Hc.upload(k,$o(ke),sn,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(k,"center",$.center),zt.setValue(k,"modelViewMatrix",$.modelViewMatrix),zt.setValue(k,"normalMatrix",$.normalMatrix),zt.setValue(k,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const on=ae.uniformsGroups;for(let bi=0,Zi=on.length;bi<Zi;bi++){const Br=on[bi];Fe.update(Br,On),Fe.bind(Br,On)}}return On}function ar(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function ks(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,W,oe){const ae=E.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=W,E.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const oe=E.get(w);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const Ea=k.createFramebuffer();this.setRenderTarget=function(w,W=0,oe=0){J=w,V=W,Z=oe;let ae=null,$=!1,De=!1;if(w){const Ue=E.get(w);if(Ue.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(k.FRAMEBUFFER,Ue.__webglFramebuffer),N.copy(w.viewport),I.copy(w.scissor),ce=w.scissorTest,qe.viewport(N),qe.scissor(I),qe.setScissorTest(ce),se=-1;return}else if(Ue.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Ue.__hasExternalTextures)q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Ue.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ze=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?ae=Ze[W][oe]:ae=Ze[W],$=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?ae=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?ae=Ze[oe]:ae=Ze,N.copy(w.viewport),I.copy(w.scissor),ce=w.scissorTest}else N.copy(ne).multiplyScalar(fe).floor(),I.copy(ve).multiplyScalar(fe).floor(),ce=Me;if(oe!==0&&(ae=Ea),qe.bindFramebuffer(k.FRAMEBUFFER,ae)&&qe.drawBuffers(w,ae),qe.viewport(N),qe.scissor(I),qe.setScissorTest(ce),$){const Ue=E.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,oe)}else if(De){const Ue=W;for(let We=0;We<w.textures.length;We++){const Ze=E.get(w.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,Ze.__webglTexture,oe,Ue)}}else if(w!==null&&oe!==0){const Ue=E.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ue.__webglTexture,oe)}se=-1},this.readRenderTargetPixels=function(w,W,oe,ae,$,De,Be,Ue=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){qe.bindFramebuffer(k.FRAMEBUFFER,We);try{const Ze=w.textures[Ue],nt=Ze.format,rt=Ze.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ue),!Ot.textureFormatReadable(nt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(rt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ae&&oe>=0&&oe<=w.height-$&&k.readPixels(W,oe,ae,$,we.convert(nt),we.convert(rt),De)}finally{const Ze=J!==null?E.get(J).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,W,oe,ae,$,De,Be,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We)if(W>=0&&W<=w.width-ae&&oe>=0&&oe<=w.height-$){qe.bindFramebuffer(k.FRAMEBUFFER,We);const Ze=w.textures[Ue],nt=Ze.format,rt=Ze.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ue),!Ot.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),k.readPixels(W,oe,ae,$,we.convert(nt),we.convert(rt),0);const ft=J!==null?E.get(J).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,ft);const qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xS(k,qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.deleteBuffer(He),k.deleteSync(qt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,oe=0){const ae=Math.pow(2,-oe),$=Math.floor(w.image.width*ae),De=Math.floor(w.image.height*ae),Be=W!==null?W.x:0,Ue=W!==null?W.y:0;q.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Be,Ue,$,De),qe.unbindTexture()};const Ta=k.createFramebuffer(),rr=k.createFramebuffer();this.copyTextureToTexture=function(w,W,oe=null,ae=null,$=0,De=0){let Be,Ue,We,Ze,nt,rt,He,ft,qt;const Yt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(oe!==null)Be=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Ze=oe.min.x,nt=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-$);Be=Math.floor(Yt.width*sn),Ue=Math.floor(Yt.height*sn),w.isDataArrayTexture?We=Yt.depth:w.isData3DTexture?We=Math.floor(Yt.depth*sn):We=1,Ze=0,nt=0,rt=0}ae!==null?(He=ae.x,ft=ae.y,qt=ae.z):(He=0,ft=0,qt=0);const wt=we.convert(W.format),pn=we.convert(W.type);let ke;W.isData3DTexture?(q.setTexture3D(W,0),ke=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),ke=k.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),ke=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Nn=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),On=k.getParameter(k.UNPACK_SKIP_PIXELS),qn=k.getParameter(k.UNPACK_SKIP_ROWS),Si=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);const Yn=w.isDataArrayTexture||w.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const sn=E.get(w),zn=E.get(W),on=E.get(sn.__renderTarget),bi=E.get(zn.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,on.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Zi=0;Zi<We;Zi++)Yn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(w).__webglTexture,$,rt+Zi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(W).__webglTexture,De,qt+Zi)),k.blitFramebuffer(Ze,nt,Be,Ue,He,ft,Be,Ue,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||E.has(w)){const sn=E.get(w),zn=E.get(W);qe.bindFramebuffer(k.READ_FRAMEBUFFER,Ta),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,rr);for(let on=0;on<We;on++)Yn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,$,rt+on):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,$),zt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zn.__webglTexture,De,qt+on):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zn.__webglTexture,De),$!==0?k.blitFramebuffer(Ze,nt,Be,Ue,He,ft,Be,Ue,k.COLOR_BUFFER_BIT,k.NEAREST):zt?k.copyTexSubImage3D(ke,De,He,ft,qt+on,Ze,nt,Be,Ue):k.copyTexSubImage2D(ke,De,He,ft,Ze,nt,Be,Ue);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else zt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(ke,De,He,ft,qt,Be,Ue,We,wt,pn,Yt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,De,He,ft,qt,Be,Ue,We,wt,Yt.data):k.texSubImage3D(ke,De,He,ft,qt,Be,Ue,We,wt,pn,Yt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,He,ft,Be,Ue,wt,pn,Yt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,He,ft,Yt.width,Yt.height,wt,Yt.data):k.texSubImage2D(k.TEXTURE_2D,De,He,ft,Be,Ue,wt,pn,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,On),k.pixelStorei(k.UNPACK_SKIP_ROWS,qn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Si),De===0&&W.generateMipmaps&&k.generateMipmap(ke),qe.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),qe.unbindTexture()},this.resetState=function(){V=0,Z=0,J=null,qe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const Kc={bg:"#060d0a",surface:"#0b1612",card:"rgba(255,255,255,0.03)",border:"rgba(255,255,255,0.07)",borderHi:"rgba(207,255,229,0.3)",mint:"#CFFFE5",teal:"#5eead4",purple:"#c4b5fd",rose:"#fda4af",white:"#fff",gray:"rgba(255,255,255,0.5)",dim:"rgba(255,255,255,0.25)",overlay:"rgba(255,255,255,0.06)",overlayHover:"rgba(255,255,255,0.1)",overlayBorder:"rgba(255,255,255,0.13)"};function En({children:s,style:e,delay:i=0}){const r=$e.useRef(null),[l,c]=$e.useState(!1);return $e.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(c(!0),d.disconnect())},{threshold:.12});return r.current&&d.observe(r.current),()=>d.disconnect()},[]),v.jsx("div",{ref:r,style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(24px)",transition:`opacity 0.6s ease ${i}s, transform 0.6s ease ${i}s`,...e},children:s})}function e2({C:s=Kc}){const e=[{name:"Dr. Arjun Mehta",role:"Chief Scientific Officer",bio:"PhD in Nutritional Biochemistry, Stanford. 18 years formulating nutraceuticals.",initials:"AM",color:s.mint},{name:"Sofia Reinhardt",role:"Head of R&D",bio:"MSc Pharmacology, University of Vienna. Expert in bioavailability optimisation.",initials:"SR",color:s.teal},{name:"Marcus Cole",role:"CEO & Co-Founder",bio:"Former biotech executive with 20 years building premium supplement brands.",initials:"MC",color:s.purple},{name:"Priya Nair",role:"Quality Assurance Director",bio:"GMP compliance specialist. Oversees all third-party testing and batch validation.",initials:"PN",color:s.rose}],i=[{icon:"🔬",title:"Science First",desc:"Every ingredient decision is made based on peer-reviewed evidence — never trend or marketing."},{icon:"🌿",title:"Pure by Principle",desc:"Zero artificial colours, flavours, preservatives, or hormones. Ever. In any product."},{icon:"🔍",title:"Radical Transparency",desc:"Certificate of Analysis for every batch, available on request. No hidden proprietary blends."},{icon:"♻️",title:"Sustainability",desc:"Recyclable packaging, sustainably-sourced botanicals, and carbon-neutral shipping by 2027."},{icon:"🤝",title:"Customer Trust",desc:"60-day no-questions-asked refund. We stand behind every capsule we produce."},{icon:"🌍",title:"Global Reach",desc:"Shipping to 42 countries. Formulas trusted by 12,400+ customers worldwide."}];return v.jsxs("div",{style:{background:s.bg,color:s.white,fontFamily:"'Inter','Helvetica Neue',sans-serif",lineHeight:1.5,overflowX:"hidden"},children:[v.jsx("style",{children:"@keyframes ambg{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(18px,-18px)scale(1.04)}}"}),v.jsxs("section",{style:{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(60px,8vw,100px)",position:"relative",overflow:"hidden"},children:[v.jsx("div",{style:{position:"absolute",top:"-10%",left:"-8%",width:"44vw",height:"44vw",background:"rgba(207,255,229,0.04)",borderRadius:"50%",filter:"blur(100px)",pointerEvents:"none",zIndex:0,animation:"ambg 14s ease-in-out infinite"}}),v.jsx("div",{style:{maxWidth:760,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1},children:v.jsxs(En,{children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:18,fontWeight:600},children:"Est. 2008 · Boynton Beach, FL"}),v.jsxs("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,4.5rem)",color:s.white,fontWeight:400,lineHeight:1.1,marginBottom:22},children:["We believe health is ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"earned through science"})]}),v.jsx("p",{style:{fontSize:"clamp(0.9rem,1.5vw,1.05rem)",color:s.gray,lineHeight:1.9,fontWeight:300,maxWidth:580,margin:"0 auto"},children:"Idingo was founded by scientists tired of an industry built on marketing instead of medicine. We exist to give every person access to the highest-quality nutraceuticals on earth — formulated with honesty, tested with rigour."})]})})]}),v.jsx("section",{style:{padding:"clamp(50px,7vw,90px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`},children:v.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[v.jsx(En,{style:{textAlign:"center",marginBottom:52},children:v.jsx("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:s.white,fontWeight:400},children:"What we stand for"})}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2.5vw,24px)"},className:"about-grid",children:[v.jsx("style",{children:"@media(max-width:900px){.about-grid{grid-template-columns:1fr 1fr!important}}.@media(max-width:520px){.about-grid{grid-template-columns:1fr!important}}"}),i.map((r,l)=>v.jsx(En,{delay:l*.07,children:v.jsxs("div",{style:{background:s.overlay,border:`1px solid ${s.border}`,borderRadius:20,padding:"clamp(20px,3vw,28px)",transition:"all .3s",cursor:"default"},onMouseEnter:c=>{c.currentTarget.style.borderColor=s.borderHi,c.currentTarget.style.background="rgba(207,255,229,0.05)"},onMouseLeave:c=>{c.currentTarget.style.borderColor=s.border,c.currentTarget.style.background=s.overlay},children:[v.jsx("div",{style:{fontSize:"1.6rem",marginBottom:14},children:r.icon}),v.jsx("h3",{style:{color:s.white,fontSize:"0.95rem",fontWeight:500,marginBottom:8},children:r.title}),v.jsx("p",{style:{fontSize:"0.82rem",color:s.dim,lineHeight:1.7,fontWeight:300},children:r.desc})]})},l))]})]})}),v.jsx("section",{style:{padding:"clamp(50px,7vw,90px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`,background:"rgba(255,255,255,0.01)"},children:v.jsx("div",{style:{maxWidth:780,margin:"0 auto"},children:v.jsxs(En,{children:[v.jsxs("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:s.white,fontWeight:400,marginBottom:28,textAlign:"center"},children:["The Idingo ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"Story"})]}),["Founded in 2008 in a research lab in Boynton Beach, Florida, Idingo began as a personal project. Our founders — a team of biochemists and nutritional scientists — were frustrated by what they saw in the supplement aisle: underdosed formulas, cheap filler forms, and marketing claims unsupported by any clinical evidence.","We spent 3 years in R&D before releasing a single product. Our first formula — the Energy Optimizer — was reformulated 14 times before we were satisfied it met our standards. That obsessive attention to detail has defined every product we've released since.","Today, Idingo formulas are used in 42 countries. Our facility in Oklahoma City holds NSF GMP certification, and every batch is independently tested by a third-party laboratory before it ever ships. The science has never compromised — and never will."].map((r,l)=>v.jsx(En,{delay:l*.1,children:v.jsx("p",{style:{fontSize:"clamp(0.88rem,1.4vw,1rem)",color:l===0?s.gray:s.dim,lineHeight:1.9,fontWeight:300,marginBottom:22},children:r})},l))]})})}),v.jsx("section",{style:{padding:"clamp(50px,7vw,90px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`},children:v.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[v.jsx(En,{style:{textAlign:"center",marginBottom:52},children:v.jsxs("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:s.white,fontWeight:400},children:["The team behind ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"the science"})]})}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20},className:"team-grid",children:[v.jsx("style",{children:"@media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr!important}}"}),e.map((r,l)=>v.jsx(En,{delay:l*.08,children:v.jsxs("div",{style:{textAlign:"center"},children:[v.jsx("div",{style:{width:80,height:80,borderRadius:"50%",background:`${r.color}18`,border:`1px solid ${r.color}40`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:"1.1rem",fontWeight:600,color:r.color,fontFamily:"serif"},children:r.initials}),v.jsx("h4",{style:{color:s.white,fontSize:"0.9rem",fontWeight:500,marginBottom:4},children:r.name}),v.jsx("p",{style:{fontSize:"0.65rem",color:r.color,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10},children:r.role}),v.jsx("p",{style:{fontSize:"0.8rem",color:s.dim,lineHeight:1.65,fontWeight:300},children:r.bio})]})},l))]})]})})]})}function t2({C:s=Kc}){const e=[{n:"01",icon:"📚",title:"Research & Evidence Review",desc:"Our science team begins every formula with a systematic literature review. We only consider ingredients with at least 3 peer-reviewed randomised controlled trials demonstrating efficacy at the intended dose.",details:["12,000+ scientific papers reviewed to date","Minimum 3 RCTs required per ingredient","Independent biostatistician review","Annual ongoing literature monitoring"]},{n:"02",icon:"⚗️",title:"Raw Material Qualification",desc:"We source only from GMP-certified suppliers who can provide full chain-of-custody documentation, certificates of analysis, and independent third-party testing results for every lot.",details:["Supplier audits every 18 months","COA required for every shipment","Heavy metal, pesticide & microbiological screens","Patented extract forms preferred"]},{n:"03",icon:"🧮",title:"Formulation & Synergy Testing",desc:"Our formulators engineer each product around pharmacokinetic synergy — how ingredients interact in vivo. Ratios are tested, not guessed. Antagonistic combinations are eliminated before any prototype is created.",details:["Synergy/antagonism interaction screening","Pharmacokinetic half-life matching","Bioavailability form optimisation","14+ reformulation iterations on average"]},{n:"04",icon:"🏭",title:"GMP Manufacturing",desc:"All products are manufactured in our NSF GMP-certified facility in Oklahoma City, Oklahoma under strict clean-room conditions with full chain-of-custody tracking from raw material receipt to sealed product.",details:["NSF GMP & HACCP certified facility","Real-time environmental monitoring","Batch records maintained for 7 years","Zero cross-contamination tolerance"]},{n:"05",icon:"🧪",title:"3rd Party Laboratory Testing",desc:"Every batch is tested by an independent, ISO 17025-accredited laboratory before release. We test for identity, potency, purity, heavy metals, pesticides, and microbiological contamination.",details:["ISO 17025-accredited lab partner","Potency verified ±5% of label claim","Full heavy metals panel (As, Cd, Hg, Pb)","Batch QR code for consumer traceability"]},{n:"06",icon:"📦",title:"Climate-Controlled Distribution",desc:"Products ship from our Norcross, GA warehouse within 24–48 hours of order. All products are stored below 25°C / 77°F in humidity-controlled conditions to preserve potency through delivery.",details:["24–48hr order fulfillment","Temperature monitored cold-chain","Recyclable amber glass or HDPE packaging","Batch QR traceability on every order"]}];return v.jsxs("div",{style:{background:s.bg,color:s.white,fontFamily:"'Inter','Helvetica Neue',sans-serif",lineHeight:1.5,overflowX:"hidden"},children:[v.jsx("style",{children:"@keyframes ambg{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(18px,-18px)scale(1.04)}}"}),v.jsxs("section",{style:{padding:"clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(60px,8vw,100px)",position:"relative",overflow:"hidden"},children:[v.jsx("div",{style:{position:"absolute",top:"-10%",right:"-8%",width:"44vw",height:"44vw",background:"rgba(94,234,212,0.03)",borderRadius:"50%",filter:"blur(100px)",pointerEvents:"none",animation:"ambg 18s ease-in-out infinite"}}),v.jsx("div",{style:{maxWidth:760,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1},children:v.jsxs(En,{children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.teal,marginBottom:18,fontWeight:600},children:"How We Build Every Formula"}),v.jsxs("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,4.5rem)",color:s.white,fontWeight:400,lineHeight:1.1,marginBottom:22},children:["6 stages. ",v.jsx("em",{style:{fontStyle:"italic",color:s.teal},children:"Zero shortcuts."})]}),v.jsx("p",{style:{fontSize:"clamp(0.9rem,1.5vw,1.05rem)",color:s.gray,lineHeight:1.9,fontWeight:300},children:"From the first literature search to the QR code on your bottle — here's exactly how an Idingo formula comes to life."})]})})]}),v.jsx("section",{style:{padding:"0 clamp(18px,5vw,56px) clamp(80px,10vw,120px)",maxWidth:1100,margin:"0 auto"},children:e.map((i,r)=>v.jsx(En,{delay:.08,children:v.jsxs("div",{style:{display:"grid",gridTemplateColumns:(r%2===0,"80px 1fr"),gap:"clamp(24px,4vw,48px)",marginBottom:"clamp(40px,6vw,72px)",borderLeft:r<e.length-1?`1px solid ${s.border}`:"none",paddingLeft:0,position:"relative"},children:[v.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:0},children:[v.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(207,255,229,0.07)",border:`1px solid ${s.borderHi}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",flexShrink:0,zIndex:2},children:i.icon}),v.jsx("span",{style:{fontSize:"0.6rem",color:s.mint,letterSpacing:"0.15em",marginTop:8,fontWeight:600},children:i.n})]}),v.jsxs("div",{style:{paddingBottom:"clamp(32px,5vw,60px)",borderBottom:r<e.length-1?`1px solid ${s.border}`:"none"},children:[v.jsx("h3",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.2rem,2.5vw,1.8rem)",color:s.white,fontWeight:400,marginBottom:14},children:i.title}),v.jsx("p",{style:{fontSize:"0.9rem",color:s.gray,lineHeight:1.85,fontWeight:300,marginBottom:20,maxWidth:580},children:i.desc}),v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:i.details.map((l,c)=>v.jsxs("span",{style:{fontSize:"0.72rem",color:s.dim,background:s.overlay,border:`1px solid ${s.border}`,borderRadius:999,padding:"4px 12px",fontWeight:300},children:["✓ ",l]},c))})]})]})},r))}),v.jsx("section",{style:{padding:"clamp(40px,6vw,72px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`,background:"rgba(255,255,255,0.01)"},children:v.jsx("div",{style:{maxWidth:760,margin:"0 auto",textAlign:"center"},children:v.jsx(En,{children:v.jsx("div",{style:{display:"inline-flex",gap:"clamp(18px,3vw,40px)",flexWrap:"wrap",justifyContent:"center"},children:["NSF GMP Certified","ISO 17025 Lab","HACCP Compliant","FDA Registered","3rd Party Verified"].map((i,r)=>v.jsx("div",{style:{padding:"10px 18px",borderRadius:999,border:`1px solid ${s.borderHi}`,fontSize:"0.72rem",color:s.mint,letterSpacing:"0.08em",fontWeight:500},children:i},r))})})})})]})}function n2({C:s=Kc}){const[e,i]=$e.useState("All"),[r,l]=$e.useState(null),c=["All","Lab","Ingredients","Manufacturing","Packaging"],d=[{label:"Ashwagandha Root",emoji:"🌿",filter:"Ingredients",desc:"KSM-66® — the world's most studied ashwagandha extract, harvested from certified organic farms in Rajasthan, India.",color:s.mint},{label:"CoQ10 Ubiquinol Crystal",emoji:"✨",filter:"Ingredients",desc:"Kaneka Ubiquinol™ — the most bioavailable form of CoQ10, 8× more absorbable than standard ubiquinone.",color:s.teal},{label:"Formulation Lab",emoji:"⚗️",filter:"Lab",desc:"Our state-of-the-art formulation laboratory in Boynton Beach, FL where every synergy ratio is developed and tested.",color:s.purple},{label:"Mass Spectrometry Testing",emoji:"🔬",filter:"Lab",desc:"Every ingredient is screened using HPLC and LC-MS/MS before entering our facility to verify identity and purity.",color:s.mint},{label:"Lion's Mane Extract",emoji:"🍄",filter:"Ingredients",desc:"8:1 concentrated lion's mane mushroom extract standardised for beta-glucan content and NGF-stimulating hericenones.",color:s.teal},{label:"GMP Encapsulation Line",emoji:"🏭",filter:"Manufacturing",desc:"Our automated encapsulation line operates under ISO 7 cleanroom conditions with 100% weight-controlled output.",color:s.rose},{label:"Batch Testing Lab",emoji:"🧪",filter:"Lab",desc:"Finished product batch testing at our ISO 17025-accredited third-party laboratory partner.",color:s.purple},{label:"Amber Glass Bottling",emoji:"🫙",filter:"Packaging",desc:"Amber glass protects formula potency by blocking UV-A and UV-B light. Our bottles are 100% recyclable.",color:s.mint},{label:"Organic Elderberry",emoji:"🫐",filter:"Ingredients",desc:"Triple-extracted Sambucus nigra with guaranteed minimum anthocyanin content for maximum immune-modulating activity.",color:s.rose},{label:"Label Application",emoji:"📋",filter:"Manufacturing",desc:"Each label includes a batch-specific QR code linking to that batch's certificate of analysis and testing results.",color:s.teal},{label:"Cold Chain Shipping",emoji:"❄️",filter:"Packaging",desc:"Temperature-maintained packaging keeps formulas within optimal range from our Norcross, GA warehouse to your door.",color:s.purple},{label:"Ingredient Archive Wall",emoji:"🗂️",filter:"Lab",desc:"Our research archive holds sample records for 340+ compounds evaluated since 2008. Only 18 formulas made the cut.",color:s.mint}],p=e==="All"?d:d.filter(m=>m.filter===e);return v.jsxs("div",{style:{background:s.bg,color:s.white,fontFamily:"'Inter','Helvetica Neue',sans-serif",lineHeight:1.5,overflowX:"hidden"},children:[v.jsx("style",{children:"@keyframes fadeIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}"}),v.jsx("section",{style:{padding:"clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(40px,6vw,70px)",textAlign:"center"},children:v.jsxs(En,{children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:14,fontWeight:600},children:"Inside Idingo"}),v.jsxs("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,4.5rem)",color:s.white,fontWeight:400,lineHeight:1.1,marginBottom:18},children:["The art of ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"precision formulation"})]}),v.jsx("p",{style:{fontSize:"clamp(0.88rem,1.4vw,1rem)",color:s.gray,fontWeight:300,maxWidth:520,margin:"0 auto"},children:"From raw botanicals to finished capsule — a visual journey through the Idingo process."})]})}),v.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8,flexWrap:"wrap",marginBottom:48,padding:"0 clamp(18px,5vw,56px)"},children:c.map(m=>v.jsx("button",{onClick:()=>i(m),style:{padding:"8px 20px",borderRadius:999,border:`1px solid ${e===m?s.mint:s.border}`,background:e===m?"rgba(207,255,229,0.1)":"transparent",color:e===m?s.mint:s.dim,fontSize:"0.8rem",cursor:"pointer",transition:"all .25s"},children:m},m))}),v.jsx("section",{style:{padding:"0 clamp(18px,5vw,56px) clamp(80px,10vw,120px)"},children:v.jsxs("div",{style:{maxWidth:1160,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16},className:"gallery-grid",children:[v.jsx("style",{children:"@media(max-width:900px){.gallery-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:520px){.gallery-grid{grid-template-columns:1fr!important}}"}),p.map((m,h)=>v.jsxs("div",{onClick:()=>l(m),style:{aspectRatio:"4/3",background:`${m.color}08`,border:`1px solid ${m.color}20`,borderRadius:20,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,cursor:"pointer",transition:"all 0.3s",animation:"fadeIn 0.4s ease both",animationDelay:`${h*.05}s`,position:"relative",overflow:"hidden"},onMouseEnter:g=>{g.currentTarget.style.borderColor=`${m.color}50`,g.currentTarget.style.background=`${m.color}12`,g.currentTarget.style.transform="translateY(-4px)",g.currentTarget.style.boxShadow=`0 16px 40px ${m.color}15`},onMouseLeave:g=>{g.currentTarget.style.borderColor=`${m.color}20`,g.currentTarget.style.background=`${m.color}08`,g.currentTarget.style.transform="none",g.currentTarget.style.boxShadow="none"},children:[v.jsx("span",{style:{fontSize:"3rem"},children:m.emoji}),v.jsx("span",{style:{fontSize:"0.78rem",color:m.color,fontWeight:500,letterSpacing:"0.06em",textAlign:"center",padding:"0 16px"},children:m.label}),v.jsx("span",{style:{fontSize:"0.62rem",color:s.dim,letterSpacing:"0.12em",textTransform:"uppercase"},children:m.filter})]},`${m.label}-${h}`))]})}),r&&v.jsx("div",{onClick:()=>l(null),style:{position:"fixed",inset:0,background:"rgba(6,13,10,0.92)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:24,backdropFilter:"blur(20px)"},children:v.jsxs("div",{onClick:m=>m.stopPropagation(),style:{background:s.surface,border:`1px solid ${s.borderHi}`,borderRadius:28,padding:"clamp(28px,5vw,52px)",maxWidth:480,width:"100%",textAlign:"center"},children:[v.jsx("div",{style:{fontSize:"4rem",marginBottom:20},children:r.emoji}),v.jsx("h3",{style:{fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",color:s.white,fontWeight:400,marginBottom:14},children:r.label}),v.jsx("p",{style:{fontSize:"0.9rem",color:s.gray,lineHeight:1.8,fontWeight:300,marginBottom:24},children:r.desc}),v.jsx("button",{onClick:()=>l(null),style:{background:"transparent",border:`1px solid ${s.border}`,color:s.dim,borderRadius:999,padding:"10px 24px",cursor:"pointer",fontSize:"0.8rem"},children:"Close ✕"})]})})]})}function i2({C:s=Kc}){const[e,i]=$e.useState({name:"",email:"",subject:"",message:""}),[r,l]=$e.useState(!1),[c,d]=$e.useState(null),p=h=>({width:"100%",padding:"12px 16px",background:c===h?"rgba(207,255,229,0.04)":"rgba(255,255,255,0.04)",border:`1px solid ${c===h?"rgba(207,255,229,0.4)":s.border}`,borderRadius:12,color:s.white,fontSize:"0.87rem",outline:"none",boxSizing:"border-box",transition:"all .25s",boxShadow:c===h?"0 0 0 3px rgba(207,255,229,0.07)":"none"}),m=[{role:"Headquarters",address:"Boynton Beach, Florida, USA",icon:"🏢"},{role:"Distribution Center",address:"Norcross, Georgia, USA",icon:"📦"},{role:"Manufacturing",address:"Oklahoma City, Oklahoma, USA",icon:"🏭"}];return v.jsxs("div",{style:{background:s.bg,color:s.white,fontFamily:"'Inter','Helvetica Neue',sans-serif",lineHeight:1.5,overflowX:"hidden"},children:[v.jsx("section",{style:{padding:"clamp(80px,10vw,140px) clamp(18px,5vw,56px) clamp(40px,6vw,70px)",textAlign:"center"},children:v.jsxs(En,{children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:14,fontWeight:600},children:"Get In Touch"}),v.jsxs("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,4.5rem)",color:s.white,fontWeight:400,lineHeight:1.1,marginBottom:18},children:["We'd love to ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"hear from you"})]}),v.jsx("p",{style:{fontSize:"clamp(0.88rem,1.4vw,1rem)",color:s.gray,fontWeight:300,maxWidth:480,margin:"0 auto"},children:"Questions about a formula, an order, or our science? Our team typically responds within 24 hours."})]})}),v.jsx("section",{style:{padding:"0 clamp(18px,5vw,56px) clamp(80px,10vw,120px)"},children:v.jsxs("div",{style:{maxWidth:1060,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 380px",gap:"clamp(32px,5vw,72px)"},className:"contact-grid",children:[v.jsx("style",{children:"@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}"}),r?v.jsx(En,{children:v.jsxs("div",{style:{background:"rgba(207,255,229,0.04)",border:`1px solid ${s.borderHi}`,borderRadius:28,padding:"clamp(40px,6vw,72px)",textAlign:"center"},children:[v.jsx("div",{style:{fontSize:"3.5rem",marginBottom:20},children:"🎉"}),v.jsx("h3",{style:{fontFamily:"'Playfair Display',serif",fontSize:"1.8rem",color:s.white,marginBottom:14},children:"Message sent!"}),v.jsx("p",{style:{fontSize:"0.9rem",color:s.gray,lineHeight:1.8,fontWeight:300,marginBottom:24},children:"Thank you for reaching out. Our team will get back to you within 24 hours."}),v.jsx("button",{onClick:()=>{i({name:"",email:"",subject:"",message:""}),l(!1)},style:{background:"transparent",border:`1px solid ${s.border}`,color:s.dim,borderRadius:999,padding:"10px 24px",cursor:"pointer",fontSize:"0.8rem"},children:"Send another message"})]})}):v.jsx(En,{children:v.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${s.border}`,borderRadius:28,padding:"clamp(24px,4vw,44px)"},children:[v.jsx("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",color:s.white,fontWeight:400,marginBottom:28},children:"Send us a message"}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14},children:[v.jsxs("div",{children:[v.jsx("label",{style:{fontSize:"0.7rem",color:s.dim,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:7},children:"Name"}),v.jsx("input",{value:e.name,onChange:h=>i(g=>({...g,name:h.target.value})),onFocus:()=>d("name"),onBlur:()=>d(null),placeholder:"Your name",style:p("name")})]}),v.jsxs("div",{children:[v.jsx("label",{style:{fontSize:"0.7rem",color:s.dim,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:7},children:"Email"}),v.jsx("input",{value:e.email,onChange:h=>i(g=>({...g,email:h.target.value})),onFocus:()=>d("email"),onBlur:()=>d(null),placeholder:"you@example.com",style:p("email")})]})]}),v.jsxs("div",{style:{marginBottom:14},children:[v.jsx("label",{style:{fontSize:"0.7rem",color:s.dim,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:7},children:"Subject"}),v.jsx("input",{value:e.subject,onChange:h=>i(g=>({...g,subject:h.target.value})),onFocus:()=>d("subject"),onBlur:()=>d(null),placeholder:"What's this about?",style:p("subject")})]}),v.jsxs("div",{style:{marginBottom:24},children:[v.jsx("label",{style:{fontSize:"0.7rem",color:s.dim,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:7},children:"Message"}),v.jsx("textarea",{value:e.message,onChange:h=>i(g=>({...g,message:h.target.value})),onFocus:()=>d("message"),onBlur:()=>d(null),placeholder:"Tell us more...",rows:5,style:{...p("message"),resize:"none",verticalAlign:"top"}})]}),v.jsx("button",{onClick:()=>{e.name&&e.email&&e.message&&l(!0)},style:{width:"100%",background:s.mint,color:"#060d0a",border:"none",borderRadius:12,padding:"14px",fontWeight:600,fontSize:"0.88rem",cursor:"pointer",transition:"all .25s"},onMouseEnter:h=>{h.currentTarget.style.boxShadow="0 0 28px rgba(207,255,229,0.35)",h.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:h=>{h.currentTarget.style.boxShadow="none",h.currentTarget.style.transform="none"},children:"Send Message →"})]})}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[v.jsx(En,{children:v.jsxs("div",{style:{background:s.overlay,border:`1px solid ${s.border}`,borderRadius:20,padding:"24px"},children:[v.jsx("h4",{style:{color:s.white,fontSize:"0.9rem",fontWeight:500,marginBottom:18},children:"Our Locations"}),m.map((h,g)=>v.jsxs("div",{style:{display:"flex",gap:12,marginBottom:g<m.length-1?14:0,paddingBottom:g<m.length-1?14:0,borderBottom:g<m.length-1?`1px solid ${s.border}`:"none"},children:[v.jsx("span",{style:{fontSize:"1.2rem"},children:h.icon}),v.jsxs("div",{children:[v.jsx("p",{style:{fontSize:"0.62rem",color:s.mint,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:2},children:h.role}),v.jsx("p",{style:{fontSize:"0.82rem",color:s.dim,fontWeight:300},children:h.address})]})]},g))]})}),v.jsx(En,{delay:.1,children:v.jsxs("div",{style:{background:s.overlay,border:`1px solid ${s.border}`,borderRadius:20,padding:"24px"},children:[v.jsx("h4",{style:{color:s.white,fontSize:"0.9rem",fontWeight:500,marginBottom:14},children:"Response Times"}),[["General enquiries","Within 24 hours"],["Order support","Within 4 hours"],["Scientific questions","Within 48 hours"]].map(([h,g],_)=>v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:_<2?10:0,paddingBottom:_<2?10:0,borderBottom:_<2?`1px solid ${s.border}`:"none"},children:[v.jsx("span",{style:{fontSize:"0.8rem",color:s.gray,fontWeight:300},children:h}),v.jsx("span",{style:{fontSize:"0.72rem",color:s.mint,fontWeight:500},children:g})]},_))]})}),v.jsx(En,{delay:.2,children:v.jsxs("div",{style:{background:"rgba(207,255,229,0.04)",border:`1px solid ${s.borderHi}`,borderRadius:20,padding:"24px"},children:[v.jsx("p",{style:{fontSize:"0.8rem",color:s.mint,fontWeight:500,marginBottom:6},children:"📧 hello@idingo.com"}),v.jsx("p",{style:{fontSize:"0.78rem",color:s.dim,fontWeight:300},children:"Our team is available Mon–Fri, 9am–5pm EST."})]})})]})]})})]})}const a2={bg:"#060d0a",surface:"#0b1612",card:"rgba(255,255,255,0.03)",border:"rgba(255,255,255,0.07)",borderHi:"rgba(207,255,229,0.3)",mint:"#CFFFE5",teal:"#5eead4",purple:"#c4b5fd",rose:"#fda4af",white:"#fff",gray:"rgba(255,255,255,0.5)",dim:"rgba(255,255,255,0.25)",overlay:"rgba(255,255,255,0.06)",overlayHover:"rgba(255,255,255,0.1)",overlayBorder:"rgba(255,255,255,0.13)",shadow:"rgba(0,0,0,0.5)",shadowHover:"rgba(207,255,229,0.12)",glassBg:"linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))"};function r2(){const s=$e.useRef(null),e=$e.useRef({mouse:{x:0,y:0},target:{x:0,y:0},scroll:0,raf:0}),i=$e.useRef({});return $e.useEffect(()=>{const r=s.current;if(!r)return;const l=r.clientWidth,c=r.clientHeight,d=new $T({antialias:!0,alpha:!0});d.setSize(l,c),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setClearColor(0,0),d.shadowMap.enabled=!0,r.appendChild(d.domElement);const p=new NS,m=new ai(42,l/c,.1,100);m.position.set(0,0,6.5),p.add(new ib(16777215,.6));const h=new px(16777215,1.4);h.position.set(4,6,5),h.castShadow=!0,p.add(h);const g=new tb(13631461,2.5,20);g.position.set(-3,0,4),p.add(g);const _=new px(6220500,.8);_.position.set(-4,2,-3),p.add(_),i.current.fillLight=g;const x=new ko;p.add(x),i.current.group=x;const M=[];[[0,-.02],[.02,-.02],[.03,.02],[.55,.06],[.62,.1],[.65,.8],[.67,1.6],[.65,2.2],[.55,2.4],[.42,2.52],[.38,2.65],[.38,2.85],[.28,2.95],[.2,3],[0,3]].forEach(([fe,be])=>M.push(new mt(fe,be)));const T=new Yh(M,80),C=new QS({color:16777215,metalness:.05,roughness:.08,transmission:.6,ior:1.5,transparent:!0,opacity:.85,side:Ci,envMapIntensity:1}),b=new xi(T,C);b.castShadow=!0,x.add(b);const S=new jc(.58,.58,.5,48),D=new pv({color:16579836,metalness:.1,roughness:.5}),P=new xi(S,D);P.position.y=2.65,x.add(P);const L=document.createElement("canvas");L.width=512,L.height=320;const H=L.getContext("2d"),F=H.createLinearGradient(0,0,512,0);F.addColorStop(0,"rgba(0,0,0,0)"),F.addColorStop(.1,"rgba(6,13,10,0.85)"),F.addColorStop(.5,"rgba(6,13,10,0.95)"),F.addColorStop(.9,"rgba(6,13,10,0.85)"),F.addColorStop(1,"rgba(0,0,0,0)"),H.fillStyle=F,H.fillRect(0,0,512,320),H.fillStyle="#CFFFE5",H.font="bold 72px sans-serif",H.textAlign="center",H.fillText("IDINGO",256,130),H.fillStyle="rgba(207,255,229,0.5)",H.font="28px sans-serif",H.fillText("FORMULA",256,175),H.fillStyle="rgba(207,255,229,0.3)",H.font="22px sans-serif",H.fillText("90 CAPSULES",256,215);const B=new jS(L),A=new jc(.702,.702,1.4,64,1,!0,-Math.PI*.55,Math.PI*1.1),U=new Xh({map:B,transparent:!0,side:Ci,depthWrite:!1}),ue=new xi(A,U);ue.position.y=.95,x.add(ue);const V=new si,Z=90,J=new Float32Array(Z*3),se=new Float32Array(Z),Q=new Float32Array(Z),N=new Float32Array(Z);for(let fe=0;fe<Z;fe++)se[fe]=Math.random()*Math.PI*2,Q[fe]=1.4+Math.random()*2.2,N[fe]=(Math.random()-.5)*.008,J[fe*3]=0,J[fe*3+1]=(Math.random()-.5)*5,J[fe*3+2]=0;V.setAttribute("position",new Li(J,3));const I=new uv({color:13631461,size:.045,transparent:!0,opacity:.55,sizeAttenuation:!0}),ce=new kS(V,I);x.add(ce),i.current.particles=ce,i.current.pAngles=se,i.current.pRadii=Q,i.current.pSpeeds=N,i.current.pPos=J,x.position.y=-.8;const me=fe=>{const be=r.getBoundingClientRect();e.current.mouse.x=((fe.clientX-be.left)/l-.5)*2,e.current.mouse.y=-((fe.clientY-be.top)/c-.5)*2};r.addEventListener("mousemove",me);let Se=0;const z=()=>{e.current.raf=requestAnimationFrame(z),Se+=.012;const{mouse:fe}=e.current,{group:be,fillLight:Oe,particles:ne,pAngles:ve,pRadii:Me,pSpeeds:Ge,pPos:Ke}=i.current;e.current.target.x+=(fe.x*.5-e.current.target.x)*.05,e.current.target.y+=(fe.y*.18-e.current.target.y)*.05,be.rotation.y=e.current.target.x,be.rotation.x=e.current.target.y,be.position.y=-.8+Math.sin(Se*.9)*.1,Oe&&(Oe.intensity=2.2+Math.sin(Se*1.8)*.8);for(let Xe=0;Xe<Z;Xe++)ve[Xe]+=Ge[Xe],Ke[Xe*3]=Math.cos(ve[Xe])*Me[Xe],Ke[Xe*3+2]=Math.sin(ve[Xe])*Me[Xe]*.35;ne.geometry.attributes.position.needsUpdate=!0,ne.rotation.y=Se*.05,d.render(p,m)};z();const Y=()=>{const fe=r.clientWidth,be=r.clientHeight;m.aspect=fe/be,m.updateProjectionMatrix(),d.setSize(fe,be)};return window.addEventListener("resize",Y),()=>{cancelAnimationFrame(e.current.raf),r.removeEventListener("mousemove",me),window.removeEventListener("resize",Y),d.dispose(),r.contains(d.domElement)&&r.removeChild(d.domElement)}},[]),v.jsx("div",{ref:s,style:{width:"100%",height:"100%",minHeight:460,cursor:"pointer",position:"relative"},children:v.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",fontSize:"0.62rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(207,255,229,0.35)",whiteSpace:"nowrap",pointerEvents:"none"},children:"Click to release capsules · Drag to rotate"})})}function s2(){const s=$e.useRef(null),e=$e.useRef({x:-9999,y:-9999});return $e.useEffect(()=>{const i=s.current;if(!i)return;const r=i.getContext("2d");let l=0,c=0,d=0;class p{x=Math.random()*l;y=Math.random()*c;vx=(Math.random()-.5)*.4;vy=(Math.random()-.5)*.4;r=Math.random()*1.6+.4;phase=Math.random()*Math.PI*2;colorIndex=0;hue=150+Math.random()*30;update(M){this.hue=150+Math.sin(M*.3+this.phase)*30+Math.cos(M*.15)*15;const T=this.x-e.current.x,C=this.y-e.current.y,b=Math.sqrt(T*T+C*C);if(b<100){const S=(100-b)/100*.8;this.vx+=T/b*S,this.vy+=C/b*S}this.vx*=.97,this.vy*=.97,this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=l),this.x>l&&(this.x=0),this.y<0&&(this.y=c),this.y>c&&(this.y=0)}draw(M,T){const C=.3+Math.sin(T*.8+this.phase)*.15;M.beginPath(),M.arc(this.x,this.y,this.r,0,Math.PI*2),M.fillStyle=`hsla(${this.hue},100%,80%,${C})`,M.fill()}}let m=[],h=0;const g=()=>{l=i.width=i.offsetWidth,c=i.height=i.offsetHeight,m=Array.from({length:80},()=>new p)};g(),window.addEventListener("resize",g),i.addEventListener("mousemove",x=>{const M=i.getBoundingClientRect();e.current={x:x.clientX-M.left,y:x.clientY-M.top}}),i.addEventListener("mouseleave",()=>{e.current={x:-9999,y:-9999}});const _=()=>{d=requestAnimationFrame(_),h+=.01,r.clearRect(0,0,l,c);for(let x=0;x<m.length;x++)for(let M=x+1;M<m.length;M++){const T=m[x].x-m[M].x,C=m[x].y-m[M].y,b=Math.sqrt(T*T+C*C);b<80&&(r.beginPath(),r.moveTo(m[x].x,m[x].y),r.lineTo(m[M].x,m[M].y),r.strokeStyle=`rgba(207,255,229,${.08*(1-b/80)})`,r.lineWidth=.5,r.stroke())}m.forEach(x=>{x.update(h),x.draw(r,h)})};return _(),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",g)}},[]),v.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"auto"}})}function o2(){const[s,e]=$e.useState(0);return $e.useEffect(()=>{const i=()=>{const r=document.documentElement;e(r.scrollTop/(r.scrollHeight-r.clientHeight))};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),v.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,height:2,zIndex:300,background:"rgba(255,255,255,0.06)"},children:v.jsx("div",{style:{height:"100%",width:`${s*100}%`,background:"linear-gradient(90deg,#CFFFE5,#5eead4)",transition:"width 0.1s",boxShadow:"0 0 8px rgba(207,255,229,0.6)"}})})}function vi({children:s,delay:e=0,style:i}){const r=$e.useRef(null),[l,c]=$e.useState(!1);return $e.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(c(!0),d.disconnect())},{threshold:.1});return r.current&&d.observe(r.current),()=>d.disconnect()},[]),v.jsx("div",{ref:r,style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(32px)",transition:`opacity .65s ease ${e}s, transform .65s ease ${e}s`,...i},children:s})}function Ds({children:s,style:e,p:i="32px 28px",flip:r,flipBack:l,C:c}){const d=$e.useRef(null),[p,m]=$e.useState({x:0,y:0}),[h,g]=$e.useState(!1),[_,x]=$e.useState(!1),M=T=>{if(!d.current)return;const C=d.current.getBoundingClientRect(),b=((T.clientX-C.left)/C.width-.5)*16,S=-((T.clientY-C.top)/C.height-.5)*16;m({x:b,y:S})};return v.jsx("div",{ref:d,onMouseMove:M,onMouseEnter:()=>g(!0),onMouseLeave:()=>{g(!1),m({x:0,y:0})},onClick:()=>r&&x(T=>!T),style:{perspective:600,cursor:r?"pointer":"default",...e},children:v.jsxs("div",{style:{position:"relative",padding:i,background:c.glassBg,backdropFilter:"blur(40px) saturate(140%)",WebkitBackdropFilter:"blur(40px) saturate(140%)",border:`1px solid ${h?c.borderHi:c.border||"rgba(255,255,255,0.08)"}`,borderRadius:"36px 48px 36px 48px",boxShadow:h?`0 30px 60px ${c.shadowHover}, inset 0 1px 0 rgba(255,255,255,0.2)`:`0 8px 32px ${c.shadow}`,transform:`perspective(800px) rotateX(${p.y}deg) rotateY(${p.x}deg) ${h?"translateY(-5px) scale(1.02)":"translateY(0) scale(1)"}`,transition:"border .5s ease-out, box-shadow .5s ease-out, transform .4s cubic-bezier(0.16, 1, 0.3, 1)",transformStyle:"preserve-3d",overflow:"hidden"},children:[v.jsxs("svg",{style:{position:"absolute",bottom:-20,right:-20,opacity:.04,pointerEvents:"none",transition:"transform 1s"},width:"120",height:"120",viewBox:"0 0 100 100",children:[v.jsx("polygon",{points:"50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5",fill:"none",stroke:c.mint,strokeWidth:"1"}),v.jsx("polygon",{points:"50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5",fill:"none",stroke:c.mint,strokeWidth:"0.5"})]}),r?v.jsxs("div",{style:{position:"relative",transformStyle:"preserve-3d",transition:"transform 0.55s ease",transform:_?"rotateY(180deg)":"rotateY(0)"},children:[v.jsx("div",{style:{backfaceVisibility:"hidden"},children:s}),v.jsx("div",{style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)",position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",gap:12},children:l})]}):s]})})}function l2({C:s}){const e=[["🌿","VEGAN FRIENDLY"],["🚫","NO PRESERVATIVES"],["✨","100% PURE"],["🔬","SCIENCE BACKED"],["📅","EST. 2008"],["🏛","FDA REGISTERED"],["🧪","3RD PARTY TESTED"],["↩","MONEY-BACK GUARANTEE"],["🌱","ORGANIC CERTIFIED"],["0️⃣","ZERO ADDITIVES"]],i=[...e,...e,...e];return v.jsxs("div",{style:{overflow:"hidden",borderTop:`1px solid ${s.border}`,background:s.overlayHover,backdropFilter:"blur(12px)",padding:"13px 0"},children:[v.jsx("style",{children:"@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}"}),v.jsx("div",{style:{display:"flex",animation:"mq 38s linear infinite",whiteSpace:"nowrap"},children:i.map(([r,l],c)=>v.jsxs("span",{style:{fontSize:"0.6rem",letterSpacing:"0.22em",marginRight:48,fontWeight:c%3===0?600:400,color:c%3===0?s.mint:s.dim,cursor:"default",transition:"all .2s",display:"inline-flex",alignItems:"center",gap:6},onMouseEnter:d=>{const p=d.currentTarget;p.style.color=s.mint,p.style.textShadow=`0 0 12px ${s.mint}`,p.style.transform="translateY(-2px)"},onMouseLeave:d=>{const p=d.currentTarget;p.style.color=c%3===0?s.mint:s.dim,p.style.textShadow="none",p.style.transform="none"},children:[v.jsx("span",{style:{fontSize:"0.75rem"},children:r}),l," ",v.jsx("span",{style:{opacity:.4,marginLeft:4},children:"◆"})]},c))})]})}function c2({scrolled:s,C:e,currentPage:i,onNavigate:r}){const[l,c]=$e.useState(!1),d=[{label:"Home",page:"home"},{label:"About",page:"about"},{label:"Process",page:"process"},{label:"Gallery",page:"gallery"},{label:"Contact",page:"contact"}],p=m=>{r(m),c(!1),window.scrollTo({top:0,behavior:"smooth"})};return v.jsxs(v.Fragment,{children:[v.jsxs("nav",{style:{position:"fixed",top:2,left:0,right:0,zIndex:150,padding:s?"14px clamp(18px,5vw,56px)":"22px clamp(18px,5vw,56px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:s||i!=="home"?`${e.bg}ee`:"transparent",backdropFilter:s||i!=="home"?"blur(20px)":"none",borderBottom:s||i!=="home"?`1px solid ${e.border}`:"none",transition:"all 0.4s ease"},children:[v.jsxs("button",{onClick:()=>p("home"),style:{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",cursor:"pointer"},children:[v.jsx("span",{style:{fontSize:"1.1rem"},children:"🌿"}),v.jsxs("span",{style:{fontFamily:"serif",fontSize:"1.3rem",color:e.white,letterSpacing:"0.12em"},children:["Idingo",v.jsx("span",{style:{color:e.mint},children:"."})]})]}),v.jsx("div",{style:{display:"flex",gap:"clamp(14px,2.5vw,34px)"},className:"nav-links",children:d.map(m=>v.jsx("span",{onClick:()=>p(m.page),style:{fontSize:"0.76rem",letterSpacing:"0.07em",color:i===m.page?e.mint:e.dim,cursor:"pointer",transition:"color .2s",borderBottom:i===m.page?`1px solid ${e.mint}`:"1px solid transparent",paddingBottom:2},onMouseEnter:h=>h.currentTarget.style.color=e.mint,onMouseLeave:h=>h.currentTarget.style.color=i===m.page?e.mint:e.dim,children:m.label},m.label))}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[v.jsx("button",{style:{background:e.overlay,border:`1px solid ${e.overlayBorder}`,color:e.white,borderRadius:999,padding:"9px clamp(14px,2vw,24px)",fontSize:"0.76rem",cursor:"pointer",transition:"all .3s",whiteSpace:"nowrap"},className:"nav-links",onMouseEnter:m=>{const h=m.currentTarget;h.style.background=e.mint,h.style.color="#060d0a",h.style.borderColor=e.mint},onMouseLeave:m=>{const h=m.currentTarget;h.style.background=e.overlay,h.style.color=e.white,h.style.borderColor=e.overlayBorder},children:"Get Started →"}),v.jsxs("button",{onClick:()=>c(m=>!m),className:"hamburger-btn",style:{display:"none",background:"none",border:`1px solid ${e.border}`,borderRadius:8,padding:"8px 10px",cursor:"pointer",color:e.white,flexDirection:"column",gap:4},children:[v.jsx("style",{children:"@media(max-width:900px){.hamburger-btn{display:flex!important}.nav-links{display:none!important}}"}),v.jsx("span",{style:{width:18,height:1.5,background:e.white,display:"block",transition:"all .3s",transform:l?"rotate(45deg) translate(4px,4px)":"none"}}),v.jsx("span",{style:{width:18,height:1.5,background:e.white,display:"block",opacity:l?0:1,transition:"all .3s"}}),v.jsx("span",{style:{width:18,height:1.5,background:e.white,display:"block",transition:"all .3s",transform:l?"rotate(-45deg) translate(4px,-4px)":"none"}})]})]})]}),l&&v.jsxs("div",{style:{position:"fixed",inset:0,zIndex:140,display:"flex"},children:[v.jsx("div",{onClick:()=>c(!1),style:{flex:1,background:"rgba(6,13,10,0.7)",backdropFilter:"blur(8px)"}}),v.jsxs("div",{style:{width:260,background:e.surface,borderLeft:`1px solid ${e.border}`,padding:"90px 28px 40px",display:"flex",flexDirection:"column",gap:8},children:[v.jsx("button",{onClick:()=>p("home"),style:{textAlign:"left",background:"none",border:"none",padding:"12px 0",color:i==="home"?e.mint:e.gray,fontSize:"1rem",cursor:"pointer",borderBottom:`1px solid ${e.border}`},children:"🏠 Home"}),d.map(m=>v.jsx("button",{onClick:()=>p(m.page),style:{textAlign:"left",background:"none",border:"none",padding:"12px 0",color:i===m.page?e.mint:e.gray,fontSize:"1rem",cursor:"pointer",borderBottom:`1px solid ${e.border}`},children:m.label},m.label)),v.jsx("button",{style:{marginTop:20,background:e.mint,color:"#060d0a",border:"none",borderRadius:999,padding:"12px",fontWeight:600,fontSize:"0.86rem",cursor:"pointer"},children:"Get Started →"})]})]})]})}const Oh={energy:{icon:"⚡",title:"Energy Optimizer",color:"#CFFFE5",glow:"rgba(207,255,229,0.12)",desc:"Synergistic adaptogens and B-vitamins for sustained cellular energy without stimulant crashes.",ings:[{n:"Ashwagandha KSM-66®",d:"Clinically proven to reduce cortisol by 28%",mg:"600mg"},{n:"CoQ10 Ubiquinol",d:"8× bioavailability vs. standard form",mg:"200mg"},{n:"Vitamin B12 Methyl",d:"Active form bypassing MTHFR variants",mg:"1000mcg"},{n:"Rhodiola Rosea",d:"Standardised 3% rosavins for anti-fatigue",mg:"400mg"}],combo:"Best with Cellular Shield"},immunity:{icon:"🛡",title:"Cellular Shield",color:"#5eead4",glow:"rgba(94,234,212,0.12)",desc:"Potent antioxidant stack to fortify the body's natural defence systems at the cellular level.",ings:[{n:"Liposomal Vitamin C",d:"2000% enhanced absorption vs standard",mg:"1000mg"},{n:"Zinc Bisglycinate",d:"Optimal chelate form, gentle absorption",mg:"30mg"},{n:"Organic Elderberry",d:"High anthocyanin content, triple extract",mg:"500mg"},{n:"Vitamin D3+K2",d:"Synergistic pair for immune modulation",mg:"5000IU"}],combo:"Best with Deep Recovery"},focus:{icon:"🧠",title:"Cognitive Nootropic",color:"#c4b5fd",glow:"rgba(196,181,253,0.12)",desc:"Clinically-researched formula for enhanced concentration, memory and mental clarity during demanding work.",ings:[{n:"Lion's Mane 8:1",d:"NGF synthesis support, neuroprotective",mg:"1000mg"},{n:"L-Theanine+Caffeine",d:"4:1 synergy ratio for clean focus",mg:"200mg"},{n:"Bacopa Monnieri",d:"Standardised 50% bacosides for memory",mg:"300mg"},{n:"Alpha-GPC 50%",d:"Choline donor for acetylcholine synthesis",mg:"300mg"}],combo:"Best with Energy Optimizer"},sleep:{icon:"🌙",title:"Deep Recovery",color:"#fda4af",glow:"rgba(253,164,175,0.12)",desc:"Advanced sleep formula for deep restorative cycles. Zero dependency, zero morning grogginess.",ings:[{n:"Magnesium Glycinate",d:"Superior absorption, no laxative effect",mg:"400mg"},{n:"Ashwagandha Night",d:"Evening-optimised KSM-66 formulation",mg:"300mg"},{n:"L-Theanine",d:"Promotes alpha brain wave relaxation",mg:"200mg"},{n:"Micro-dose Melatonin",d:"Circadian rhythm support without overload",mg:"0.5mg"}],combo:"Best with Cognitive Nootropic"}};function u2({formulaKey:s,onClose:e,C:i}){const[r,l]=$e.useState(!1),[c,d]=$e.useState(null);if($e.useEffect(()=>{if(s)d(s),requestAnimationFrame(()=>requestAnimationFrame(()=>l(!0)));else{l(!1);const m=setTimeout(()=>d(null),350);return()=>clearTimeout(m)}},[s]),$e.useEffect(()=>{const m=h=>{h.key==="Escape"&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[e]),!c)return null;const p=Oh[c];return v.jsx("div",{onClick:e,style:{position:"fixed",inset:0,zIndex:600,background:`rgba(3,8,5,${r?.85:0})`,backdropFilter:`blur(${r?18:0}px)`,display:"flex",alignItems:"center",justifyContent:"center",padding:"clamp(16px,4vw,48px)",transition:"background 0.35s ease, backdrop-filter 0.35s ease"},children:v.jsxs("div",{onClick:m=>m.stopPropagation(),style:{width:"100%",maxWidth:780,maxHeight:"90vh",overflowY:"auto",background:"linear-gradient(160deg, rgba(15,30,22,0.97) 0%, rgba(8,18,13,0.99) 100%)",border:`1px solid ${p.color}33`,borderRadius:"40px",padding:"clamp(28px,5vw,52px)",boxShadow:`0 40px 100px rgba(0,0,0,0.7), 0 0 60px ${p.glow}`,opacity:r?1:0,transform:r?"scale(1) translateY(0)":"scale(0.92) translateY(24px)",transition:"opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:32},children:[v.jsxs("div",{children:[v.jsx("div",{style:{fontSize:"2.4rem",marginBottom:10},children:p.icon}),v.jsx("p",{style:{fontSize:"0.6rem",letterSpacing:"0.25em",textTransform:"uppercase",color:p.color,fontWeight:600,marginBottom:6},children:"Full Formula Breakdown"}),v.jsx("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.6rem,3vw,2.4rem)",color:i.white,fontWeight:400},children:p.title})]}),v.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"50%",width:44,height:44,cursor:"pointer",fontSize:"1.1rem",color:i.dim,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s"},onMouseEnter:m=>{m.currentTarget.style.background="rgba(255,255,255,0.12)",m.currentTarget.style.color="#fff"},onMouseLeave:m=>{m.currentTarget.style.background="rgba(255,255,255,0.06)",m.currentTarget.style.color=i.dim},children:"×"})]}),v.jsx("p",{style:{fontSize:"0.92rem",color:i.gray,lineHeight:1.8,fontWeight:300,marginBottom:32,paddingBottom:28,borderBottom:`1px solid ${i.border}`},children:p.desc}),v.jsx("p",{style:{fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:p.color,fontWeight:600,marginBottom:20},children:"Active Ingredients"}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:14,marginBottom:32},children:p.ings.map((m,h)=>v.jsxs("div",{style:{background:`linear-gradient(135deg, ${p.glow}, transparent)`,border:`1px solid ${p.color}22`,borderRadius:18,padding:"20px 22px",transition:"border-color .3s, box-shadow .3s"},onMouseEnter:g=>{const _=g.currentTarget;_.style.borderColor=`${p.color}66`,_.style.boxShadow=`0 8px 24px ${p.glow}`},onMouseLeave:g=>{const _=g.currentTarget;_.style.borderColor=`${p.color}22`,_.style.boxShadow="none"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8},children:[v.jsx("span",{style:{fontSize:"0.88rem",color:i.white,fontWeight:500},children:m.n}),v.jsx("span",{style:{fontSize:"0.78rem",color:p.color,fontWeight:600,flexShrink:0,marginLeft:10},children:m.mg})]}),v.jsx("p",{style:{fontSize:"0.78rem",color:i.dim,lineHeight:1.6,fontWeight:300},children:m.d}),v.jsx("div",{style:{marginTop:14,height:2,borderRadius:2,background:"rgba(255,255,255,0.06)"},children:v.jsx("div",{style:{height:"100%",width:["85%","70%","92%","78%"][h%4],borderRadius:2,background:`linear-gradient(90deg, ${p.color}, ${p.color}66)`,transition:"width 0.8s ease"}})})]},h))}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",borderRadius:14,background:"rgba(207,255,229,0.04)",border:"1px solid rgba(207,255,229,0.1)"},children:[v.jsx("span",{style:{fontSize:"1.4rem"},children:"🔗"}),v.jsxs("div",{children:[v.jsx("p",{style:{fontSize:"0.62rem",letterSpacing:"0.15em",textTransform:"uppercase",color:i.mint,fontWeight:600,marginBottom:3},children:"Optimal Stack Pairing"}),v.jsx("p",{style:{fontSize:"0.84rem",color:i.gray,fontWeight:300},children:p.combo})]})]})]})})}function f2({C:s,onViewFormula:e}){const[i,r]=$e.useState("energy"),[l,c]=$e.useState(!0),d=Oh[i],[p,m]=$e.useState(null),h=g=>{c(!1),setTimeout(()=>{r(g),c(!0)},160)};return v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`,background:`${s.surface}44`},children:v.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[v.jsxs(vi,{children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"AI Health Assistant"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400,lineHeight:1.15,marginBottom:48},children:["What does your body",v.jsx("br",{}),v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"need today?"})]})]}),v.jsxs("div",{style:{position:"relative"},children:[v.jsx("div",{style:{position:"absolute",inset:0,background:`radial-gradient(ellipse at 70% 50%, ${d.glow} 0%, transparent 65%)`,pointerEvents:"none",borderRadius:24,transition:"background 0.4s"}}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(180px,260px) 1fr",gap:14,position:"relative",zIndex:1},className:"lab-grid",children:[v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Object.entries(Oh).map(([g,_])=>v.jsxs("button",{onClick:()=>h(g),style:{textAlign:"left",padding:"18px 24px",borderRadius:"24px",border:`1px solid ${i===g?_.color:s.border}`,background:i===g?`${_.glow}`:`${s.surface}66`,color:i===g?s.white:s.dim,cursor:"pointer",transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:i===g?`0 12px 32px ${_.color}22`:"none",transform:i===g?"scale(1.02)":"scale(1)"},children:[v.jsxs("span",{style:{fontSize:"0.92rem",fontWeight:500},children:[_.icon," ",_.title]}),i===g&&v.jsx("span",{style:{color:_.color},children:"→"})]},g))}),v.jsx("div",{style:{background:"linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))",backdropFilter:"blur(32px) saturate(150%)",border:`1px solid ${s.border}`,borderRadius:"40px",padding:"clamp(28px,5vw,56px)",opacity:l?1:0,transition:"opacity .25s ease-out",overflow:"hidden",boxShadow:"0 20px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"},children:v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(18px,3vw,36px)"},className:"lab-inner",children:[v.jsxs("div",{children:[v.jsx("div",{style:{fontSize:"2rem",marginBottom:18},children:d.icon}),v.jsx("h3",{style:{fontFamily:"serif",fontSize:"clamp(1.2rem,2vw,1.7rem)",color:s.white,marginBottom:12,fontWeight:400},children:d.title}),v.jsx("p",{style:{fontSize:"0.88rem",color:s.gray,lineHeight:1.75,fontWeight:300,marginBottom:24},children:d.desc}),v.jsxs("div",{style:{padding:"12px 16px",borderRadius:10,background:`${d.glow}`,border:`1px solid ${d.color}33`,marginBottom:24},children:[v.jsx("p",{style:{fontSize:"0.7rem",color:d.color,fontWeight:600,letterSpacing:"0.1em"},children:"OPTIMAL STACK"}),v.jsx("p",{style:{fontSize:"0.82rem",color:s.gray,marginTop:4},children:d.combo})]}),v.jsx("button",{style:{background:s.white,color:"#060d0a",border:"none",padding:"12px clamp(18px,2vw,28px)",borderRadius:999,fontWeight:600,fontSize:"0.8rem",cursor:"pointer",transition:"all .25s"},onMouseEnter:g=>{const _=g.currentTarget;_.style.background=s.mint,_.style.boxShadow=`0 0 24px ${d.glow}`,_.style.transform="translateY(-2px)"},onMouseLeave:g=>{const _=g.currentTarget;_.style.background=s.white,_.style.boxShadow="none",_.style.transform="translateY(0)"},onClick:()=>e(i),children:"View Formula →"})]}),v.jsxs("div",{style:{background:"rgba(0,0,0,0.28)",borderRadius:14,padding:"22px 18px",border:`1px solid ${s.border}`},children:[v.jsx("p",{style:{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:d.color,marginBottom:16,fontWeight:600},children:"Key Ingredients"}),d.ings.map((g,_)=>v.jsxs("div",{style:{position:"relative",marginBottom:12,paddingBottom:12,borderBottom:_<d.ings.length-1?`1px solid ${s.border}`:"none"},onMouseEnter:()=>m(_),onMouseLeave:()=>m(null),children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start"},children:[v.jsx("span",{style:{color:s.mint,fontSize:"0.68rem",marginTop:2,flexShrink:0},children:"✓"}),v.jsx("span",{style:{fontSize:"0.82rem",color:p===_?s.white:s.gray,fontWeight:300,transition:"color .2s"},children:g.n})]}),v.jsx("span",{style:{fontSize:"0.68rem",color:d.color,flexShrink:0,marginLeft:8},children:g.mg})]}),p===_&&v.jsx("div",{style:{position:"absolute",left:0,top:"100%",zIndex:10,background:s.surface,border:`1px solid ${d.color}44`,borderRadius:8,padding:"8px 12px",fontSize:"0.75rem",color:s.gray,lineHeight:1.5,marginTop:4,whiteSpace:"normal",maxWidth:220,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:g.d})]},_))]})]})})]})]})]})})}const Ix={energy:{label:"Energy Optimizer",color:"#CFFFE5",glow:"rgba(207,255,229,0.18)",icon:"⚡",ingredients:[{name:"Ashwagandha",emoji:"🌿",benefit:"Cortisol −28%",detail:"KSM-66® extract. Reduces stress hormones, boosting energy availability.",angle:0,radius:160},{name:"CoQ10",emoji:"⚡",benefit:"8× bioavailability",detail:"Ubiquinol form. Powers mitochondria — the cell's energy factories.",angle:72,radius:155},{name:"B12 Methyl",emoji:"💊",benefit:"Active form",detail:"Bypasses MTHFR variants. Directly fuels neurological energy metabolism.",angle:144,radius:165},{name:"Rhodiola",emoji:"🏔",benefit:"Anti-fatigue",detail:"3% rosavins standardised. Proven to reduce mental and physical fatigue.",angle:216,radius:155},{name:"Magnesium",emoji:"🔋",benefit:"ATP synthesis",detail:"Bisglycinate form. Essential cofactor for over 300 enzymatic reactions.",angle:288,radius:162}]},immunity:{label:"Cellular Shield",color:"#5eead4",glow:"rgba(94,234,212,0.18)",icon:"🛡",ingredients:[{name:"Vitamin C",emoji:"🍋",benefit:"2000% absorption",detail:"Liposomal form bypasses gut limitations for maximum cellular uptake.",angle:0,radius:160},{name:"Zinc",emoji:"🔵",benefit:"Chelate form",detail:"Bisglycinate chelate — gentlest, highest-absorption form of zinc.",angle:72,radius:155},{name:"Elderberry",emoji:"🫐",benefit:"Triple extract",detail:"High anthocyanin content. Powerful antioxidant and immune activator.",angle:144,radius:165},{name:"D3+K2",emoji:"☀️",benefit:"Immune modulation",detail:"Synergistic pair. D3 activates immune cells; K2 guides calcium metabolism.",angle:216,radius:155},{name:"Glutathione",emoji:"🛡",benefit:"Master antioxidant",detail:"Reduced form. The body's primary cellular defence molecule.",angle:288,radius:162}]},focus:{label:"Cognitive Nootropic",color:"#c4b5fd",glow:"rgba(196,181,253,0.18)",icon:"🧠",ingredients:[{name:"Lion's Mane",emoji:"🍄",benefit:"NGF synthesis",detail:"8:1 extract. Stimulates nerve growth factor for neuroplasticity and memory.",angle:0,radius:160},{name:"L-Theanine",emoji:"🍵",benefit:"Alpha waves",detail:"4:1 ratio with caffeine. Produces calm, focused alertness without jitters.",angle:72,radius:155},{name:"Bacopa",emoji:"🌱",benefit:"Memory recall",detail:"50% bacosides. Proven to enhance memory recall and reduce cognitive anxiety.",angle:144,radius:165},{name:"Alpha-GPC",emoji:"🧠",benefit:"Acetylcholine",detail:"Choline donor. Directly fuels acetylcholine — the learning neurotransmitter.",angle:216,radius:155},{name:"Caffeine",emoji:"☕",benefit:"Clean energy",detail:"Paired with L-Theanine for smooth, crash-free focus and reaction time.",angle:288,radius:162}]},sleep:{label:"Deep Recovery",color:"#fda4af",glow:"rgba(253,164,175,0.18)",icon:"🌙",ingredients:[{name:"Mg Glycinate",emoji:"💤",benefit:"Deep sleep",detail:"Glycinate form crosses blood-brain barrier. Activates GABA — the calm switch.",angle:0,radius:160},{name:"Ashwagandha",emoji:"🌙",benefit:"Evening formula",detail:"Night-optimised KSM-66. Lowers cortisol for faster sleep onset.",angle:72,radius:155},{name:"L-Theanine",emoji:"🍵",benefit:"Alpha relaxation",detail:"Promotes alpha brain waves — the state between wakefulness and sleep.",angle:144,radius:165},{name:"Melatonin",emoji:"🌕",benefit:"Circadian sync",detail:"0.5mg micro-dose. Syncs your body clock without next-day grogginess.",angle:216,radius:155},{name:"GABA",emoji:"🧘",benefit:"Neural calm",detail:"Primary inhibitory neurotransmitter. Quiets neural hyperactivity for rest.",angle:288,radius:162}]}};function d2({C:s}){const[e,i]=$e.useState("energy"),[r,l]=$e.useState(null),[c,d]=$e.useState(0),p=Ix[e],m=g=>{l(null),d(_=>_+1),i(g)},h=r!==null?p.ingredients[r]:null;return v.jsxs("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`,position:"relative",overflow:"hidden"},children:[v.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"60vw",height:"60vw",background:`radial-gradient(circle, ${p.glow} 0%, transparent 65%)`,pointerEvents:"none",transition:"background 0.6s",borderRadius:"50%"}}),v.jsxs("div",{style:{maxWidth:1160,margin:"0 auto",position:"relative",zIndex:1},children:[v.jsxs(vi,{style:{textAlign:"center",marginBottom:40},children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"Inside Every Capsule"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["Precision ",v.jsx("em",{style:{fontStyle:"italic",color:p.color},children:"Formulated"})]})]}),v.jsx("div",{style:{display:"flex",justifyContent:"center",gap:10,marginBottom:56,flexWrap:"wrap"},children:Object.entries(Ix).map(([g,_])=>v.jsxs("button",{onClick:()=>m(g),style:{padding:"8px 20px",borderRadius:999,cursor:"pointer",fontSize:"0.78rem",fontWeight:500,border:`1px solid ${e===g?_.color:s.border}`,background:e===g?`${_.glow}`:"transparent",color:e===g?_.color:s.dim,transition:"all 0.3s"},children:[_.icon," ",_.label]},g))}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(28px,5vw,64px)",alignItems:"center"},className:"hero-grid",children:[v.jsxs("div",{style:{position:"relative",height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:[v.jsx("style",{children:`
              @keyframes orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
              @keyframes orbit-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
              @keyframes capsule-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
              @keyframes ing-pop { 0% { transform: scale(0.5) rotate(-10deg); opacity: 0; } 100% { transform: scale(1) rotate(0deg); opacity: 1; } }
              .ing-chip { animation: ing-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }
            `}),v.jsx("div",{style:{position:"absolute",width:360,height:360,borderRadius:"50%",border:`1px solid ${p.color}18`,animation:"orbit-cw 40s linear infinite"}}),v.jsx("div",{style:{position:"absolute",width:310,height:310,borderRadius:"50%",border:`1px dashed ${p.color}10`,animation:"orbit-ccw 28s linear infinite"}}),v.jsxs("div",{style:{position:"relative",zIndex:10,animation:"capsule-float 4s ease-in-out infinite"},children:[v.jsxs("svg",{width:"90",height:"180",viewBox:"0 0 90 180",fill:"none",children:[v.jsx("path",{d:"M8,90 Q8,8 45,8 Q82,8 82,90 Z",fill:`${p.color}22`,stroke:p.color,strokeWidth:"1"}),v.jsx("path",{d:"M8,90 Q8,172 45,172 Q82,172 82,90 Z",fill:"rgba(255,255,255,0.04)",stroke:`${p.color}55`,strokeWidth:"1"}),v.jsx("path",{d:"M18,44 Q22,22 38,18",stroke:"rgba(255,255,255,0.35)",strokeWidth:"2",strokeLinecap:"round"}),v.jsx("line",{x1:"8",y1:"90",x2:"82",y2:"90",stroke:p.color,strokeWidth:"0.8",strokeOpacity:"0.6"}),v.jsx("text",{x:"45",y:"78",textAnchor:"middle",fill:p.color,fontSize:"11",fontFamily:"serif",fontWeight:"600",letterSpacing:"2",children:"ID"}),v.jsx("text",{x:"45",y:"110",textAnchor:"middle",fill:`${p.color}88`,fontSize:"7",fontFamily:"sans-serif",children:"FORMULA"})]}),v.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:60,height:60,borderRadius:"50%",background:p.color,filter:"blur(28px)",opacity:.2,pointerEvents:"none"}})]}),p.ingredients.map((g,_)=>{const x=g.angle*Math.PI/180,M=Math.cos(x)*g.radius,T=Math.sin(x)*g.radius,C=r===_;return v.jsxs("div",{className:"ing-chip",onMouseEnter:()=>l(_),onMouseLeave:()=>l(null),style:{animationDelay:`${_*.07}s`,position:"absolute",left:`calc(50% + ${M}px)`,top:`calc(50% + ${T}px)`,transform:`translate(-50%, -50%) scale(${C?1.18:1})`,transition:"transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s",background:C?`${p.color}22`:"rgba(255,255,255,0.04)",border:`1px solid ${C?p.color:`${p.color}40`}`,borderRadius:999,padding:"6px 13px",cursor:"pointer",whiteSpace:"nowrap",zIndex:C?20:5,boxShadow:C?`0 0 20px ${p.glow}, 0 0 8px ${p.color}44`:"0 2px 8px rgba(0,0,0,0.3)",backdropFilter:"blur(8px)"},children:[v.jsx("span",{style:{fontSize:"0.88rem"},children:g.emoji}),v.jsx("span",{style:{marginLeft:5,fontSize:"0.68rem",color:C?p.color:s.dim,fontWeight:C?600:400,transition:"color 0.2s"},children:g.name})]},`${c}-${_}`)})]}),v.jsx("div",{style:{minHeight:340},children:h?v.jsxs("div",{style:{opacity:1,transform:"translateY(0)",animation:"ing-pop 0.3s ease forwards"},children:[v.jsx("div",{style:{fontSize:"3rem",marginBottom:16},children:h.emoji}),v.jsx("p",{style:{fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:p.color,fontWeight:600,marginBottom:10},children:"Active Ingredient"}),v.jsx("h3",{style:{fontFamily:"serif",fontSize:"clamp(1.4rem,2.5vw,2.2rem)",color:s.white,fontWeight:400,marginBottom:8},children:h.name}),v.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:`${p.glow}`,border:`1px solid ${p.color}33`,borderRadius:999,padding:"4px 14px",marginBottom:20},children:v.jsx("span",{style:{fontSize:"0.68rem",color:p.color,fontWeight:600},children:h.benefit})}),v.jsx("p",{style:{fontSize:"0.9rem",color:s.gray,lineHeight:1.8,fontWeight:300,marginBottom:28},children:h.detail}),v.jsxs("div",{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[v.jsx("span",{style:{fontSize:"0.65rem",color:s.dim,letterSpacing:"0.12em",textTransform:"uppercase"},children:"Bioavailability"}),v.jsx("span",{style:{fontSize:"0.65rem",color:p.color,fontWeight:600},children:"High"})]}),v.jsx("div",{style:{height:3,background:"rgba(255,255,255,0.06)",borderRadius:3},children:v.jsx("div",{style:{height:"100%",width:["88%","75%","92%","82%","79%"][r??0%5],background:`linear-gradient(90deg,${p.color},${p.color}66)`,borderRadius:3,boxShadow:`0 0 10px ${p.color}55`,transition:"width 0.6s 0.1s ease"}})})]})]},r):v.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",height:"100%",gap:20},children:[v.jsx("div",{style:{fontSize:"3.5rem",opacity:.3},children:"👆"}),v.jsxs("p",{style:{fontFamily:"serif",fontSize:"clamp(1.2rem,2vw,1.7rem)",color:s.dim,fontWeight:400,lineHeight:1.4},children:["Hover an ingredient",v.jsx("br",{}),"to explore its role"]}),v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"100%",marginTop:8},children:p.ingredients.map((g,_)=>v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,opacity:.4+_*.04},children:[v.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:p.color,flexShrink:0,display:"inline-block"}}),v.jsxs("span",{style:{fontSize:"0.8rem",color:s.dim},children:[g.emoji," ",g.name]})]},_))})]})})]})]})]})}const Go=[{q:"What's your main health goal?",opts:[{label:"⚡ Boost energy & stamina",key:"energy"},{label:"🛡 Strengthen immunity",key:"immunity"},{label:"🧠 Sharpen focus & memory",key:"focus"},{label:"🌙 Improve sleep & recovery",key:"sleep"}]},{q:"How would you describe your current lifestyle?",opts:[{label:"🏃 Very active — gym or sport daily",key:"energy"},{label:"💼 Demanding work schedule, often stressed",key:"focus"},{label:"🍂 Seasonal dips in energy or mood",key:"immunity"},{label:"😴 Poor sleep or frequent fatigue",key:"sleep"}]},{q:"Which matters most to you?",opts:[{label:"⚗️ Highest bioavailability forms",key:"energy"},{label:"🌿 100% natural, zero additives",key:"immunity"},{label:"🔬 Clinically proven ingredients",key:"focus"},{label:"💤 Zero dependency, zero grogginess",key:"sleep"}]}],h2={energy:{title:"Energy Optimizer",icon:"⚡",color:"#CFFFE5",desc:"Your lifestyle calls for sustained, crash-free energy. This formula combines adaptogens and mitochondrial support for all-day performance."},immunity:{title:"Cellular Shield",icon:"🛡",color:"#5eead4",desc:"Your body needs a fortified defence. This stack delivers the highest-absorption forms of key immune modulators."},focus:{title:"Cognitive Nootropic",icon:"🧠",color:"#c4b5fd",desc:"Your focus and memory demand the best. This nootropic stack is built for peak mental performance under pressure."},sleep:{title:"Deep Recovery",icon:"🌙",color:"#fda4af",desc:"Rest is your missing piece. This zero-dependency sleep formula restores deep sleep cycles without morning fog."}};function p2({C:s,onViewFormula:e}){const[i,r]=$e.useState(0),[l,c]=$e.useState({energy:0,immunity:0,focus:0,sleep:0}),[d,p]=$e.useState(!1),[m,h]=$e.useState(!1),g=T=>{const C={...l,[T]:l[T]+1};c(C),i<Go.length-1?(h(!0),setTimeout(()=>{r(b=>b+1),h(!1)},280)):p(!0)},_=Object.entries(l).sort((T,C)=>C[1]-T[1])[0][0],x=h2[_],M=()=>{r(0),c({energy:0,immunity:0,focus:0,sleep:0}),p(!1),h(!1)};return v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`,background:`${s.surface}33`},children:v.jsxs("div",{style:{maxWidth:720,margin:"0 auto"},children:[v.jsxs(vi,{style:{textAlign:"center",marginBottom:48},children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"Find Your Formula"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["Which formula is ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"right for you?"})]})]}),d?v.jsxs("div",{style:{textAlign:"center"},children:[v.jsx("div",{style:{fontSize:"3.5rem",marginBottom:16},children:x.icon}),v.jsx("p",{style:{fontSize:"0.62rem",letterSpacing:"0.22em",textTransform:"uppercase",color:x.color,fontWeight:600,marginBottom:10},children:"Your Recommendation"}),v.jsx("h3",{style:{fontFamily:"serif",fontSize:"clamp(1.6rem,3vw,2.4rem)",color:s.white,fontWeight:400,marginBottom:16},children:x.title}),v.jsx("p",{style:{fontSize:"0.92rem",color:s.gray,lineHeight:1.8,maxWidth:480,margin:"0 auto 28px",fontWeight:300},children:x.desc}),v.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:12},children:[v.jsx("button",{onClick:()=>e?.(_),style:{background:x.color,color:"#060d0a",border:"none",borderRadius:999,padding:"12px 28px",fontWeight:600,fontSize:"0.84rem",cursor:"pointer"},children:"View Formula →"}),v.jsx("button",{onClick:M,style:{background:"transparent",border:`1px solid ${s.border}`,color:s.dim,borderRadius:999,padding:"12px 28px",fontSize:"0.84rem",cursor:"pointer"},children:"Retake Quiz"})]})]}):v.jsxs("div",{style:{opacity:m?0:1,transform:m?"translateY(16px)":"translateY(0)",transition:"all 0.28s ease"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8,marginBottom:32},children:Go.map((T,C)=>v.jsx("div",{style:{width:C===i?24:8,height:8,borderRadius:999,background:C===i?s.mint:s.border,transition:"all 0.3s"}},C))}),v.jsx("p",{style:{fontFamily:"serif",fontSize:"clamp(1.1rem,2vw,1.5rem)",color:s.white,textAlign:"center",marginBottom:28,fontWeight:400},children:Go[i].q}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:Go[i].opts.map(T=>v.jsx("button",{onClick:()=>g(T.key),style:{padding:"18px 22px",borderRadius:20,cursor:"pointer",textAlign:"left",background:s.overlay,border:`1px solid ${s.border}`,color:s.gray,fontSize:"0.88rem",fontWeight:400,transition:"all 0.25s",lineHeight:1.4},onMouseEnter:C=>{const b=C.currentTarget;b.style.background="rgba(207,255,229,0.08)",b.style.borderColor=s.mint,b.style.color=s.white,b.style.transform="translateY(-2px)"},onMouseLeave:C=>{const b=C.currentTarget;b.style.background=s.overlay,b.style.borderColor=s.border,b.style.color=s.gray,b.style.transform="none"},children:T.label},T.key))}),v.jsxs("p",{style:{textAlign:"center",fontSize:"0.68rem",color:s.dim,marginTop:20},children:["Step ",i+1," of ",Go.length]})]})]})})}const m2=[{label:"Energy Levels",before:34,after:91,color:"#CFFFE5",timeframe:"After 4 weeks"},{label:"Focus & Clarity",before:41,after:88,color:"#c4b5fd",timeframe:"After 4 weeks"},{label:"Sleep Quality",before:28,after:85,color:"#fda4af",timeframe:"After 2 weeks"},{label:"Immune Resilience",before:45,after:87,color:"#5eead4",timeframe:"After 6 weeks"}];function g2({C:s}){const[e,i]=$e.useState(!1),r=$e.useRef(null);return $e.useEffect(()=>{const l=new IntersectionObserver(([c])=>{c.isIntersecting&&(i(!0),l.disconnect())},{threshold:.3});return r.current&&l.observe(r.current),()=>l.disconnect()},[]),v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`},children:v.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[v.jsxs(vi,{style:{textAlign:"center",marginBottom:56},children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"Proven Results"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["Real outcomes, ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"measurable change"})]}),v.jsx("p",{style:{fontSize:"0.88rem",color:s.dim,marginTop:14,fontWeight:300},children:"Based on self-reported data from 1,240 Idingo customers over 6 weeks."})]}),v.jsx("div",{ref:r,style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(20px,4vw,40px)"},className:"hero-grid",children:m2.map((l,c)=>v.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${s.border}`,borderRadius:24,padding:"clamp(20px,3vw,32px)"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:20},children:[v.jsx("span",{style:{fontSize:"0.88rem",color:s.white,fontWeight:500},children:l.label}),v.jsx("span",{style:{fontSize:"0.62rem",color:s.dim,letterSpacing:"0.1em"},children:l.timeframe})]}),v.jsxs("div",{style:{marginBottom:12},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[v.jsx("span",{style:{fontSize:"0.62rem",color:s.dim,letterSpacing:"0.1em",textTransform:"uppercase"},children:"Before"}),v.jsxs("span",{style:{fontSize:"0.72rem",color:s.dim},children:[l.before,"%"]})]}),v.jsx("div",{style:{height:6,background:"rgba(255,255,255,0.06)",borderRadius:6},children:v.jsx("div",{style:{height:"100%",width:e?`${l.before}%`:"0%",background:"rgba(255,255,255,0.18)",borderRadius:6,transition:`width 1.2s cubic-bezier(.25,.46,.45,.94) ${c*.12}s`}})})]}),v.jsxs("div",{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[v.jsx("span",{style:{fontSize:"0.62rem",color:l.color,letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600},children:"After"}),v.jsxs("span",{style:{fontSize:"0.72rem",color:l.color,fontWeight:600},children:[l.after,"%"]})]}),v.jsx("div",{style:{height:6,background:"rgba(255,255,255,0.06)",borderRadius:6},children:v.jsx("div",{style:{height:"100%",width:e?`${l.after}%`:"0%",background:`linear-gradient(90deg, ${l.color}, ${l.color}88)`,borderRadius:6,boxShadow:`0 0 12px ${l.color}44`,transition:`width 1.4s cubic-bezier(.25,.46,.45,.94) ${c*.12+.2}s`}})})]}),v.jsx("div",{style:{marginTop:16,display:"inline-flex",alignItems:"center",gap:5,background:`${l.color}12`,border:`1px solid ${l.color}30`,borderRadius:999,padding:"3px 10px"},children:v.jsxs("span",{style:{fontSize:"0.7rem",color:l.color,fontWeight:600},children:["+",l.after-l.before,"% improvement"]})})]},c))})]})})}const x2=[{q:"Are Idingo products vegan and allergen-free?",a:"Yes. Every formula is 100% vegan, gluten-free, and free from common allergens. We use no artificial colours, flavours, or preservatives. Our capsules are made from plant-derived HPMC."},{q:"Where are the ingredients sourced?",a:"We source exclusively from GMP-certified suppliers with full traceability documentation. Patented extracts like KSM-66® Ashwagandha and Ubiquinol CoQ10 are sourced directly from their original manufacturers."},{q:"Are there side effects?",a:"When taken as directed, our formulas are well-tolerated by the vast majority of users. All ingredients are at clinically-studied doses. We recommend consulting your healthcare provider if you are pregnant, nursing, or on medication."},{q:"How long before I notice results?",a:"Many users report improvements in energy and sleep within 7–14 days. For cognitive and immune benefits, 4–6 weeks of consistent use is typically recommended, consistent with clinical research timelines."},{q:"Can I stack multiple formulas?",a:"Yes — we design our formulas with synergistic stacking in mind. Each formula card shows an Optimal Stack partner. Our most popular combination is Energy Optimizer + Cognitive Nootropic."},{q:"What is your money-back policy?",a:"We offer a no-questions-asked 60-day money-back guarantee on every order. If you don't notice a difference, simply contact our team and we will process a full refund — no return required."}];function v2({C:s}){const[e,i]=$e.useState(null);return v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`,background:`${s.surface}22`},children:v.jsxs("div",{style:{maxWidth:780,margin:"0 auto"},children:[v.jsxs(vi,{style:{textAlign:"center",marginBottom:52},children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"Common Questions"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["Frequently Asked ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"Questions"})]})]}),v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:x2.map((r,l)=>{const c=e===l;return v.jsxs("div",{onClick:()=>i(c?null:l),style:{background:c?"rgba(207,255,229,0.04)":"rgba(255,255,255,0.02)",border:`1px solid ${c?"rgba(207,255,229,0.2)":s.border}`,borderRadius:18,padding:"0",cursor:"pointer",transition:"all 0.3s",overflow:"hidden"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px"},children:[v.jsx("span",{style:{fontSize:"0.9rem",color:c?s.white:s.gray,fontWeight:c?500:400,transition:"color .3s",paddingRight:16},children:r.q}),v.jsx("span",{style:{color:s.mint,fontSize:"1.1rem",flexShrink:0,transition:"transform 0.35s",transform:c?"rotate(45deg)":"rotate(0deg)"},children:"+"})]}),v.jsx("div",{style:{maxHeight:c?200:0,overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.16,1,0.3,1)"},children:v.jsx("p",{style:{fontSize:"0.86rem",color:s.dim,lineHeight:1.8,fontWeight:300,padding:"0 22px 20px"},children:r.a})})]},l)})})]})})}function _2({C:s}){const e=[{label:"Clinically-studied doses",idingo:!0,typical:!1},{label:"Patented extract forms",idingo:!0,typical:!1},{label:"100% vegan capsules",idingo:!0,typical:!1},{label:"Zero artificial additives",idingo:!0,typical:!1},{label:"Full CoA per batch",idingo:!0,typical:!1},{label:"3rd-party lab verified",idingo:!0,typical:!1},{label:"60-day money-back",idingo:!0,typical:!1},{label:"Proprietary blends used",idingo:!1,typical:!0}];return v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`},children:v.jsxs("div",{style:{maxWidth:760,margin:"0 auto"},children:[v.jsxs(vi,{style:{textAlign:"center",marginBottom:48},children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"Why Idingo"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["Idingo vs ",v.jsx("em",{style:{fontStyle:"italic",color:"#fda4af"},children:"Typical Supplements"})]})]}),v.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:`1px solid ${s.border}`,borderRadius:24,overflow:"hidden"},children:[v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 160px 160px",background:"rgba(255,255,255,0.04)",padding:"14px 24px",borderBottom:`1px solid ${s.border}`},children:[v.jsx("span",{style:{fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",color:s.dim},children:"Feature"}),v.jsx("span",{style:{fontSize:"0.72rem",fontWeight:600,color:s.mint,textAlign:"center"},children:"🌿 Idingo"}),v.jsx("span",{style:{fontSize:"0.72rem",fontWeight:500,color:s.dim,textAlign:"center"},children:"Generic Brand"})]}),e.map((i,r)=>v.jsx(vi,{delay:r*.06,children:v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 160px 160px",padding:"14px 24px",borderBottom:r<e.length-1?`1px solid ${s.border}`:"none",transition:"background 0.2s"},onMouseEnter:l=>l.currentTarget.style.background="rgba(255,255,255,0.02)",onMouseLeave:l=>l.currentTarget.style.background="transparent",children:[v.jsx("span",{style:{fontSize:"0.84rem",color:s.gray,fontWeight:300},children:i.label}),v.jsx("div",{style:{textAlign:"center"},children:i.idingo?v.jsx("span",{style:{color:s.mint,fontSize:"1rem",filter:"drop-shadow(0 0 6px rgba(207,255,229,0.5))"},children:"✓"}):v.jsx("span",{style:{color:"#fda4af",fontSize:"1rem",opacity:.7},children:"✗"})}),v.jsx("div",{style:{textAlign:"center"},children:i.typical?v.jsx("span",{style:{color:s.mint,fontSize:"1rem"},children:"✓"}):v.jsx("span",{style:{color:"rgba(255,255,255,0.2)",fontSize:"1rem"},children:"✗"})})]})},r))]})]})})}function y2({C:s}){const e=v.jsxs(v.Fragment,{children:[v.jsx("p",{style:{fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"#CFFFE5",fontWeight:600},children:"By The Numbers"}),[["12,000+","Studies reviewed"],["340+","Compounds tested"],["18","Formulas active"],["99.7%","Batch pass rate"]].map(([i,r])=>v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",borderBottom:"1px solid rgba(255,255,255,0.07)",paddingBottom:8},children:[v.jsx("span",{style:{fontFamily:"serif",fontSize:"1.6rem",color:"#CFFFE5"},children:i}),v.jsx("span",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontWeight:300},children:r})]},r)),v.jsx("p",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginTop:4},children:"Click to flip back"})]});return v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)"},children:v.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[v.jsxs(vi,{style:{textAlign:"center",marginBottom:48},children:[v.jsx("p",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:s.mint,marginBottom:12,fontWeight:600},children:"Our Standard"}),v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["The Idingo ",v.jsx("em",{style:{fontStyle:"italic"},children:"Difference"})]})]}),v.jsxs(vi,{delay:.1,children:[v.jsxs("div",{className:"bento-desktop",style:{display:"grid",gridTemplateColumns:"2fr 1.2fr 1fr",gridTemplateRows:"auto auto",gap:24},children:[v.jsxs(Ds,{style:{gridColumn:"span 2",gridRow:"span 2"},p:"56px 48px",flip:!0,flipBack:e,C:s,children:[v.jsx("div",{style:{fontSize:"1.8rem",marginBottom:22},children:"🔬"}),v.jsxs("h3",{style:{fontFamily:"serif",fontSize:"clamp(1.4rem,2.5vw,2rem)",color:s.white,marginBottom:14,fontWeight:400,lineHeight:1.2},children:["Research &",v.jsx("br",{}),"Development"]}),v.jsx("p",{style:{fontSize:"0.9rem",color:s.gray,lineHeight:1.8,fontWeight:300,maxWidth:380},children:"We review thousands of peer-reviewed studies to select only compounds with clinically demonstrated efficacy. No ingredient enters our formulas without data to back it."}),v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:28},children:["Peer-reviewed","Clinical Trials","Bioavailability-optimised"].map(i=>v.jsx("span",{style:{fontSize:"0.62rem",border:`1px solid ${s.borderHi}`,color:s.mint,borderRadius:999,padding:"4px 12px"},children:i},i))}),v.jsx("p",{style:{fontSize:"0.68rem",color:s.dim,marginTop:20},children:"Click card to see stats →"})]}),v.jsxs(Ds,{p:"30px 26px",C:s,children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:14},children:[v.jsx("span",{style:{color:s.white,fontSize:"0.9rem",fontWeight:500},children:"Safety & Efficacy"}),v.jsx("span",{style:{color:s.teal},children:"🛡"})]}),v.jsxs("div",{style:{fontFamily:"serif",fontSize:"3rem",color:s.white,lineHeight:1},children:["100",v.jsx("span",{style:{color:s.mint,fontSize:"1.6rem"},children:"%"})]}),v.jsx("p",{style:{fontSize:"0.75rem",color:s.dim,marginTop:8,fontWeight:300},children:"External testing every batch"})]}),v.jsxs(Ds,{p:"30px 26px",style:{position:"relative"},C:s,children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[v.jsx("div",{style:{fontSize:"1.3rem"},children:"↩"}),v.jsx("div",{style:{display:"flex",gap:2},children:[1,2,3,4,5].map(i=>v.jsx("span",{style:{color:"#CFFFE5",fontSize:"0.7rem"},children:"★"},i))})]}),v.jsx("h3",{style:{color:s.white,fontSize:"0.9rem",fontWeight:500,marginBottom:6},children:"Full Guarantee"}),v.jsx("p",{style:{fontSize:"0.75rem",color:s.dim,fontWeight:300,lineHeight:1.6,marginBottom:10},children:"Money-back, no questions asked on every formula."}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:999,background:"rgba(207,255,229,0.06)",border:"1px solid rgba(207,255,229,0.12)",width:"fit-content"},children:[v.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#CFFFE5",display:"inline-block"}}),v.jsx("span",{style:{fontSize:"0.6rem",color:s.mint,letterSpacing:"0.08em"},children:"12,400+ satisfied customers"})]})]}),v.jsxs(Ds,{p:"30px 26px",C:s,children:[v.jsxs("div",{style:{fontFamily:"serif",fontSize:"2.8rem",color:s.mint,lineHeight:1},children:["0",v.jsx("span",{style:{fontSize:"1.3rem"},children:"%"})]}),v.jsx("p",{style:{fontSize:"0.75rem",color:s.dim,marginTop:8,fontWeight:300},children:"Additives · Preservatives · Hormones"}),v.jsx("h3",{style:{color:s.white,fontSize:"0.88rem",fontWeight:500,marginTop:10},children:"🌿 Pure Formula"})]}),v.jsxs(Ds,{p:"30px 26px",C:s,children:[v.jsx("div",{style:{fontSize:"1.5rem",marginBottom:12},children:"📋"}),v.jsx("h3",{style:{color:s.white,fontSize:"0.9rem",fontWeight:500,marginBottom:8},children:"Transparency"}),v.jsx("p",{style:{fontSize:"0.75rem",color:s.dim,fontWeight:300,lineHeight:1.65},children:"CoA available for every single batch on request."})]})]}),v.jsx("div",{className:"bento-mobile",style:{display:"none",flexDirection:"column",gap:14},children:[{icon:"🔬",title:"Research & Development",desc:"We review thousands of peer-reviewed studies. Every ingredient is backed by data."},{icon:"🛡",title:"100% Safety Tested",desc:"External third-party testing on every single batch we produce."},{icon:"↩",title:"Full Guarantee",desc:"Money-back, no questions asked on every formula."},{icon:"🌿",title:"0% Additives",desc:"Zero preservatives, hormones or additives. Ever."},{icon:"📋",title:"Transparent",desc:"Certificate of Analysis available for every batch on request."}].map(i=>v.jsxs(Ds,{p:"28px 24px",C:s,children:[v.jsx("div",{style:{fontSize:"1.4rem",marginBottom:12},children:i.icon}),v.jsx("h3",{style:{color:s.white,fontSize:"1rem",fontWeight:500,marginBottom:8},children:i.title}),v.jsx("p",{style:{fontSize:"0.84rem",color:s.dim,fontWeight:300,lineHeight:1.65},children:i.desc})]},i.title))})]})]})})}function S2({C:s}){const[e,i]=$e.useState(0),[r,l]=$e.useState(null),c=$e.useRef(null),d=[{n:"01",icon:"🔬",title:"Research",desc:"Sourcing only compounds backed by robust peer-reviewed data.",detail:"Our science team reviews 100+ studies per ingredient. Only compounds with at least 3 randomized controlled trials make the cut.",facts:["12,000+ papers reviewed","Zero proprietary blends","Efficacy over popularity"]},{n:"02",icon:"⚗️",title:"Formulation",desc:"Synergistic blends engineered for maximum bioavailability.",detail:"We engineer ratios based on pharmacokinetic data. Every pairing is tested for synergistic or antagonistic interactions before approval.",facts:["4:1 Theanine:Caffeine ratio","Liposomal delivery tech","Form-specific sourcing"]},{n:"03",icon:"🏭",title:"Manufacturing",desc:"GMP-certified facility in Oklahoma City, OK.",detail:"Our FDA-registered facility operates under full chain-of-custody traceability from raw material to sealed capsule.",facts:["NSF GMP Certified","HACCP compliant","Full CoA per batch"]},{n:"04",icon:"🌍",title:"Distribution",desc:"Shipped from Norcross, GA warehouse worldwide.",detail:"Climate-controlled storage preserves potency from warehouse to doorstep. Every shipment includes a batch QR code.",facts:["24–48hr fulfillment","Cold-chain logistics","Batch QR traceability"]}];return $e.useEffect(()=>{const p=new IntersectionObserver(([m])=>{m.isIntersecting&&i(100)},{threshold:.3});return c.current&&p.observe(c.current),()=>p.disconnect()},[]),v.jsx("section",{style:{padding:"clamp(60px,8vw,100px) clamp(18px,5vw,56px)",borderTop:`1px solid ${s.border}`},children:v.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[v.jsx(vi,{style:{textAlign:"center",marginBottom:68},children:v.jsxs("h2",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",color:s.white,fontWeight:400},children:["The Formulation ",v.jsx("em",{style:{fontStyle:"italic",color:s.mint},children:"Journey"})]})}),v.jsxs("div",{ref:c,style:{position:"relative"},children:[v.jsx("style",{children:`
            @media(max-width:900px){
              .timeline-connector { height: 100% !important; width: 1px !important; left: 30px !important; top: 0 !important; right: auto !important; }
              .timeline-connector > div { width: 100% !important; height: ${e}% !important; background: linear-gradient(to bottom, ${s.mint}, ${s.teal}) !important; }
              .timeline-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: left !important; padding-left: 80px; }
              .timeline-step-icon { margin-left: 0 !important; margin-right: 0 !important; position: absolute !important; left: -80px; top: 0; }
              .timeline-reveal { text-align: left !important; position: relative; }
            }
          `}),v.jsx("div",{className:"timeline-connector",style:{position:"absolute",top:30,left:"12.5%",right:"12.5%",height:1,background:s.border},children:v.jsx("div",{style:{height:"100%",width:`${e}%`,background:`linear-gradient(to right, ${s.mint}, ${s.teal})`,transition:"all 1.5s cubic-bezier(.25,.46,.45,.94)",boxShadow:"0 0 8px rgba(207,255,229,0.4)"}})}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"clamp(14px,3vw,32px)"},className:"timeline-grid",children:d.map((p,m)=>{const h=r===m;return v.jsxs(vi,{delay:m*.12,style:{textAlign:"center"},className:"timeline-reveal",children:[v.jsx("div",{onClick:()=>l(h?null:m),className:"timeline-step-icon",style:{width:60,height:60,borderRadius:"50%",background:h?"rgba(207,255,229,0.08)":s.bg,border:`1px solid ${h?s.mint:s.border}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 22px",position:"relative",zIndex:2,boxShadow:h?"0 0 24px rgba(207,255,229,0.2)":"0 0 24px rgba(0,0,0,0.7)",transition:"all .3s",cursor:"pointer"},children:v.jsx("span",{style:{fontSize:h?"1.4rem":"1.1rem",fontFamily:"serif",color:h?s.mint:s.dim,transition:"all .3s"},children:h?p.icon:p.n})}),v.jsx("h4",{onClick:()=>l(h?null:m),style:{color:h?s.mint:s.white,fontSize:"0.98rem",fontWeight:500,marginBottom:8,cursor:"pointer",transition:"color .3s"},children:p.title}),v.jsx("p",{style:{fontSize:"0.8rem",color:s.dim,lineHeight:1.65,fontWeight:300},children:p.desc}),v.jsx("div",{style:{overflow:"hidden",maxHeight:h?240:0,transition:"max-height 0.45s cubic-bezier(0.16,1,0.3,1)",marginTop:h?14:0},children:v.jsxs("div",{style:{background:"rgba(207,255,229,0.04)",border:"1px solid rgba(207,255,229,0.1)",borderRadius:14,padding:"14px 16px",textAlign:"left"},children:[v.jsx("p",{style:{fontSize:"0.78rem",color:s.gray,lineHeight:1.7,marginBottom:12},children:p.detail}),p.facts.map((g,_)=>v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:5},children:[v.jsx("span",{style:{color:s.mint,fontSize:"0.65rem"},children:"✓"}),v.jsx("span",{style:{fontSize:"0.72rem",color:s.dim},children:g})]},_))]})}),v.jsx("p",{onClick:()=>l(h?null:m),style:{fontSize:"0.58rem",color:s.dim,marginTop:8,opacity:.45,cursor:"pointer"},children:h?"▲ collapse":"▼ details"})]},m)})})]})]})})}function b2({active:s}){const e=$e.useMemo(()=>Array.from({length:40},(i,r)=>({id:r,x:Math.random()*100,vx:(Math.random()-.5)*4,vy:-Math.random()*6-4,color:["#CFFFE5","#5eead4","#fda4af","#c4b5fd","#fff"][r%5],r:Math.random()*6+3,rot:Math.random()*360})),[]);return s?v.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:500},children:[v.jsx("style",{children:"@keyframes cfti{0%{transform:translateY(0) rotate(0deg);opacity:1}100%{transform:translateY(120vh) rotate(720deg);opacity:0}}"}),e.map(i=>v.jsx("div",{style:{position:"absolute",left:`${i.x}%`,top:"20%",width:i.r,height:i.r*1.6,background:i.color,borderRadius:2,animation:`cfti ${1.5+Math.random()*1.2}s ease-in ${Math.random()*.5}s forwards`,transform:`rotate(${i.rot}deg)`}},i.id))]}):null}function M2({C:s,onNavigate:e}){const[i,r]=$e.useState(!1),[l,c]=$e.useState(!1),[d,p]=$e.useState(""),m=()=>{d&&(r(!0),c(!0),setTimeout(()=>c(!1),2500))};return v.jsxs(v.Fragment,{children:[v.jsx(b2,{active:l}),v.jsx("footer",{style:{borderTop:`1px solid ${s.border}`,padding:"clamp(40px,6vw,68px) clamp(18px,5vw,56px) 26px",background:s.bg},children:v.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:"clamp(28px,5vw,68px)",marginBottom:44},className:"footer-grid",children:[v.jsxs("div",{children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14},children:[v.jsx("span",{children:"🌿"}),v.jsx("span",{style:{fontFamily:"serif",fontSize:"1.35rem",color:s.white,letterSpacing:"0.1em"},children:"Idingo."})]}),v.jsx("p",{style:{fontSize:"0.83rem",color:s.dim,lineHeight:1.75,maxWidth:300,fontWeight:300,marginBottom:26},children:"Optimize health naturally. Premium nutraceuticals grounded in science since 2008."}),i?v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,color:s.mint,fontSize:"0.88rem"},children:[v.jsx("span",{style:{fontSize:"1.2rem"},children:"🎉"})," You're in! Welcome to Idingo."]}):v.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[v.jsx("input",{value:d,onChange:h=>p(h.target.value),placeholder:"Your email",onFocus:h=>{h.target.style.borderColor="rgba(207,255,229,0.45)",h.target.style.boxShadow="0 0 0 3px rgba(207,255,229,0.08)"},onBlur:h=>{h.target.style.borderColor=s.border,h.target.style.boxShadow="none"},style:{background:"rgba(255,255,255,0.05)",border:`1px solid ${s.border}`,borderRadius:8,padding:"10px 14px",color:s.white,fontSize:"0.8rem",outline:"none",width:185,transition:"border-color .25s, box-shadow .25s"}}),v.jsx("button",{onClick:m,style:{background:s.mint,color:"#060d0a",border:"none",borderRadius:8,padding:"10px 16px",fontWeight:600,fontSize:"0.76rem",cursor:"pointer",transition:"all .2s"},onMouseEnter:h=>{h.currentTarget.style.boxShadow="0 0 20px rgba(207,255,229,0.4)"},onMouseLeave:h=>{h.currentTarget.style.boxShadow="none"},children:"Subscribe →"})]})]}),v.jsxs("div",{children:[v.jsx("h5",{style:{color:s.white,fontWeight:500,marginBottom:16,fontSize:"0.86rem"},children:"Locations"}),[["HQ","Boynton Beach, FL"],["Warehouse","Norcross, GA"],["Manufacturing","Oklahoma City, OK"]].map(([h,g])=>v.jsxs("div",{style:{marginBottom:9},children:[v.jsxs("span",{style:{fontSize:"0.62rem",color:s.mint,letterSpacing:"0.1em",textTransform:"uppercase"},children:[h,": "]}),v.jsx("span",{style:{fontSize:"0.8rem",color:s.dim,fontWeight:300},children:g})]},h))]}),v.jsxs("div",{children:[v.jsx("h5",{style:{color:s.white,fontWeight:500,marginBottom:16,fontSize:"0.86rem"},children:"Company"}),[{label:"About Idingo",page:"about"},{label:"Our Process",page:"process"},{label:"Gallery",page:"gallery"},{label:"Contact",page:"contact"}].map(h=>v.jsx("div",{onClick:()=>{e(h.page),window.scrollTo({top:0,behavior:"smooth"})},style:{marginBottom:9,fontSize:"0.83rem",color:s.dim,cursor:"pointer",fontWeight:300,transition:"color .2s"},onMouseEnter:g=>g.currentTarget.style.color=s.mint,onMouseLeave:g=>g.currentTarget.style.color=s.dim,children:h.label},h.label))]})]}),v.jsxs("div",{style:{borderTop:`1px solid ${s.border}`,paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10},children:[v.jsx("span",{style:{fontSize:"0.7rem",color:s.dim},children:"© 2026 Idingo LLC. All rights reserved."}),v.jsx("span",{style:{fontSize:"0.62rem",color:s.dim,letterSpacing:"0.18em",textTransform:"uppercase"},children:"Est. 2008"})]})]})})]})}function E2(){const[s,e]=$e.useState("home"),[i,r]=$e.useState(null),[l,c]=$e.useState(!1),d=a2;$e.useEffect(()=>{const m=()=>c(window.scrollY>48);return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]);const p=()=>{switch(s){case"about":return v.jsx(e2,{C:d});case"process":return v.jsx(t2,{C:d});case"gallery":return v.jsx(n2,{C:d});case"contact":return v.jsx(i2,{C:d});default:return null}};return v.jsxs("div",{style:{background:d.bg,color:d.white,fontFamily:"'Inter','Helvetica Neue',sans-serif",overflowX:"hidden",lineHeight:1.5},children:[v.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#060d0a}::-webkit-scrollbar-thumb{background:#1a3d2b;border-radius:2px}::-webkit-scrollbar-thumb:hover{background:#CFFFE5}
        ::selection{background:#CFFFE5;color:#060d0a}
        @keyframes ambg{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(18px,-18px)scale(1.04)}}
        @keyframes spincw{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes spinccw{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @keyframes shimmer{0%,100%{opacity:.6}50%{opacity:1}}
        @keyframes bfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes pulseglow{0%,100%{box-shadow:0 0 8px rgba(207,255,229,0.3)}50%{box-shadow:0 0 24px rgba(207,255,229,0.7)}}

        .hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,6vw,80px);align-items:center}
        .bento-mobile{display:none!important}

        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important}
          .hero-bottle-col{height:340px}
          .bento-desktop{display:none!important}
          .bento-mobile{display:flex!important}
          .lab-grid{grid-template-columns:1fr!important}
          .lab-inner{grid-template-columns:1fr!important}
          .timeline-grid{grid-template-columns:repeat(2,1fr)!important}
          .footer-grid{grid-template-columns:1fr!important}
          .nav-links{display:none!important}
        }
        @media(max-width:520px){
          .timeline-grid{grid-template-columns:1fr!important}
          .hero-bottle-col{height:260px}
        }
      `}),v.jsx(o2,{}),v.jsx("div",{style:{position:"fixed",top:"-5%",left:"-8%",width:"44vw",height:"44vw",background:"rgba(207,255,229,0.032)",borderRadius:"50%",filter:"blur(110px)",pointerEvents:"none",zIndex:0,animation:"ambg 14s ease-in-out infinite"}}),v.jsx("div",{style:{position:"fixed",bottom:"-8%",right:"-8%",width:"34vw",height:"34vw",background:"rgba(94,234,212,0.022)",borderRadius:"50%",filter:"blur(90px)",pointerEvents:"none",zIndex:0,animation:"ambg 18s ease-in-out 5s infinite reverse"}}),v.jsx("div",{style:{position:"fixed",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,opacity:.04,pointerEvents:"none",zIndex:1,mixBlendMode:"overlay"}}),v.jsx("div",{style:{position:"fixed",inset:0,background:"radial-gradient(circle at 50% 0%, rgba(207,255,229,0.05) 0%, transparent 60%)",pointerEvents:"none",zIndex:1}}),v.jsx(c2,{scrolled:l,C:d,currentPage:s,onNavigate:e}),s==="home"?v.jsxs(v.Fragment,{children:[v.jsxs("section",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",paddingTop:80},children:[v.jsx("div",{style:{position:"absolute",inset:0},children:v.jsx(s2,{})}),v.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",maxWidth:1160,margin:"0 auto",padding:"clamp(28px,5vw,60px) clamp(18px,5vw,56px)",width:"100%",position:"relative",zIndex:2},children:v.jsxs("div",{className:"hero-grid",style:{width:"100%"},children:[v.jsxs("div",{children:[v.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(207,255,229,0.07)",border:"1px solid rgba(207,255,229,0.18)",borderRadius:999,padding:"5px 14px",marginBottom:26},children:[v.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:d.mint,display:"inline-block",animation:"pulseglow 2.5s ease-in-out infinite"}}),v.jsx("span",{style:{fontSize:"0.62rem",letterSpacing:"0.25em",textTransform:"uppercase",color:d.mint,fontWeight:600},children:"Crafted in the Lab · Est. 2008"})]}),v.jsxs("h1",{style:{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.6rem,6vw,5.5rem)",color:d.white,lineHeight:1.06,fontWeight:400,marginBottom:22},children:["Your health.",v.jsx("br",{}),v.jsx("em",{style:{fontStyle:"italic",background:`linear-gradient(90deg,${d.mint},${d.teal})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 3s ease-in-out infinite"},children:"Optimised"}),v.jsx("br",{}),"by science."]}),v.jsx("p",{style:{fontSize:"clamp(0.88rem,1.4vw,1rem)",color:d.gray,lineHeight:1.8,fontWeight:300,maxWidth:400,marginBottom:36},children:"Premium nutraceuticals. Vegan, organic, 100% pure. Zero compromises on quality, purity, or transparency."}),v.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[v.jsx("button",{style:{background:d.mint,color:"#060d0a",border:"none",borderRadius:999,padding:"14px clamp(22px,3vw,38px)",fontWeight:600,fontSize:"0.86rem",cursor:"pointer",transition:"all .3s",boxShadow:"0 0 0 rgba(207,255,229,0)"},onMouseEnter:m=>{const h=m.currentTarget;h.style.boxShadow="0 0 28px rgba(207,255,229,0.35)",h.style.transform="translateY(-2px)"},onMouseLeave:m=>{const h=m.currentTarget;h.style.boxShadow="none",h.style.transform="translateY(0)"},children:"Explore Formulas 🧪"}),v.jsx("button",{style:{background:d.overlay,color:d.white,border:`1px solid ${d.overlayBorder}`,borderRadius:999,padding:"14px clamp(22px,3vw,38px)",fontWeight:400,fontSize:"0.86rem",cursor:"pointer",transition:"background .3s"},onMouseEnter:m=>m.currentTarget.style.background=d.overlayHover,onMouseLeave:m=>m.currentTarget.style.background=d.overlay,children:"📖 Science Basis"})]}),v.jsx("div",{style:{display:"flex",gap:16,marginTop:36,flexWrap:"wrap"},children:["✓ 100% Organic","✓ 3rd Party Tested","✓ Vegan Certified"].map(m=>v.jsx("span",{style:{fontSize:"0.68rem",color:"rgba(207,255,229,0.55)",letterSpacing:"0.04em",fontWeight:500},children:m},m))})]}),v.jsxs("div",{className:"hero-bottle-col",style:{position:"relative",height:"clamp(360px,50vw,580px)",display:"flex",alignItems:"center",justifyContent:"center"},children:[v.jsx("div",{style:{position:"absolute",width:"68%",aspectRatio:"1",border:"1px solid rgba(207,255,229,0.07)",borderRadius:"50%",animation:"spincw 22s linear infinite",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}),v.jsx("div",{style:{position:"absolute",width:"88%",aspectRatio:"1",border:"1px solid rgba(255,255,255,0.03)",borderRadius:"50%",animation:"spinccw 34s linear infinite",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}),v.jsx("div",{style:{position:"absolute",width:"48%",aspectRatio:"1",background:"radial-gradient(circle,rgba(207,255,229,0.07),transparent 70%)",borderRadius:"50%",filter:"blur(18px)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none"}}),v.jsx("div",{style:{width:"100%",height:"100%",position:"relative",zIndex:2},children:v.jsx(r2,{})}),v.jsx("div",{style:{position:"absolute",top:"12%",right:"3%",background:d.surface,backdropFilter:"blur(14px)",border:`1px solid ${d.borderHi}`,borderRadius:12,padding:"8px 13px",fontSize:"0.68rem",color:d.mint,whiteSpace:"nowrap",zIndex:3},children:"✓ 100% Organic"}),v.jsx("div",{style:{position:"absolute",bottom:"20%",left:"1%",background:d.surface,backdropFilter:"blur(14px)",border:`1px solid ${d.border}`,borderRadius:12,padding:"8px 13px",fontSize:"0.68rem",color:d.gray,whiteSpace:"nowrap",zIndex:3},children:"🛡 Clinically Validated"})]})]})}),v.jsx(l2,{C:d})]}),v.jsx("div",{style:{background:d.surface,borderTop:`1px solid ${d.border}`,borderBottom:`1px solid ${d.border}`},children:v.jsx("div",{style:{maxWidth:1160,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)"},className:"timeline-grid",children:[["16+","Years Research"],["100%","Vegan & Organic"],["3rd","Party Lab Tested"],["0","Additives"]].map(([m,h],g)=>v.jsx(vi,{delay:g*.08,children:v.jsxs("div",{style:{padding:"clamp(18px,3vw,28px) 12px",borderRight:`1px solid ${d.border}`,textAlign:"center"},children:[v.jsx("div",{style:{fontFamily:"serif",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",color:d.mint,lineHeight:1},children:m}),v.jsx("div",{style:{fontSize:"0.62rem",letterSpacing:"0.15em",textTransform:"uppercase",color:d.dim,marginTop:7},children:h})]})},h))})}),v.jsx(p2,{C:d,onViewFormula:r}),v.jsx(g2,{C:d}),v.jsx(y2,{C:d}),v.jsx(d2,{C:d}),v.jsx(f2,{C:d,onViewFormula:r}),v.jsx(_2,{C:d}),v.jsx(v2,{C:d}),v.jsx(S2,{C:d})]}):p(),v.jsx(u2,{formulaKey:i,onClose:()=>r(null),C:d}),v.jsx(M2,{C:d,onNavigate:e})]})}Py.createRoot(document.getElementById("root")).render(v.jsx(E2,{}));
