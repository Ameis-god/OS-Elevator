(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,i){var r=i("fc6a"),s=i("241c").f,o={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==o.call(t)?c(t):s(r(t))}},1897:function(t,e,i){},"1dde":function(t,e,i){var r=i("d039"),s=i("b622"),o=i("2d00"),n=s("species");t.exports=function(t){return o>=51||!r((function(){var e=[],i=e.constructor={};return i[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"238e":function(t,e,i){"use strict";i("5d69")},"25f0":function(t,e,i){"use strict";var r=i("6eeb"),s=i("825a"),o=i("d039"),n=i("ad6d"),c="toString",a=RegExp.prototype,l=a[c],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(u||f)&&r(RegExp.prototype,c,(function(){var t=s(this),e=String(t.source),i=t.flags,r=String(void 0===i&&t instanceof RegExp&&!("flags"in a)?n.call(t):i);return"/"+e+"/"+r}),{unsafe:!0})},"379d":function(t,e,i){t.exports=i.p+"img/face.3ea71567.png"},"3d6c":function(t,e,i){t.exports=i.p+"img/flyPep.8194d7a6.png"},"436d":function(t,e,i){t.exports=i.p+"img/openDoor.a30a156e.png"},"4df4":function(t,e,i){"use strict";var r=i("0366"),s=i("7b0b"),o=i("9bdd"),n=i("e95a"),c=i("50c4"),a=i("8418"),l=i("35a1");t.exports=function(t){var e,i,u,f,h,d,v=s(t),p="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,b=void 0!==m,y=l(v),A=0;if(b&&(m=r(m,g>2?arguments[2]:void 0,2)),void 0==y||p==Array&&n(y))for(e=c(v.length),i=new p(e);e>A;A++)d=b?m(v[A],A):v[A],a(i,A,d);else for(f=y.call(v),h=f.next,i=new p;!(u=h.call(f)).done;A++)d=b?o(f,m,[u.value,A],!0):u.value,a(i,A,d);return i.length=A,i}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var r=i("1d80"),s=i("5899"),o="["+s+"]",n=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),a=function(t){return function(e){var i=String(r(e));return 1&t&&(i=i.replace(n,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:a(1),end:a(2),trim:a(3)}},"5d69":function(t,e,i){},"65f0":function(t,e,i){var r=i("861d"),s=i("e8b5"),o=i("b622"),n=o("species");t.exports=function(t,e){var i;return s(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?r(i)&&(i=i[n],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"702c":function(t,e,i){t.exports=i.p+"img/tip.f37fb9fc.png"},7070:function(t,e,i){t.exports=i.p+"img/arrowUp.3d949ad7.png"},7156:function(t,e,i){var r=i("861d"),s=i("d2bb");t.exports=function(t,e,i){var o,n;return s&&"function"==typeof(o=e.constructor)&&o!==i&&r(n=o.prototype)&&n!==i.prototype&&s(t,n),t}},"746f":function(t,e,i){var r=i("428f"),s=i("5135"),o=i("e538"),n=i("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});s(e,t)||n(e,t,{value:o.f(t)})}},8418:function(t,e,i){"use strict";var r=i("c04e"),s=i("9bf2"),o=i("5c6c");t.exports=function(t,e,i){var n=r(e);n in t?s.f(t,n,o(0,i)):t[n]=i}},"84b1":function(t,e,i){t.exports=i.p+"img/alert.5d77fd6a.png"},"9bdd":function(t,e,i){var r=i("825a"),s=i("2a62");t.exports=function(t,e,i,o){try{return o?e(r(i)[0],i[1]):e(i)}catch(n){throw s(t),n}}},"9e8e":function(t,e,i){"use strict";i("1897")},a4d3:function(t,e,i){"use strict";var r=i("23e7"),s=i("da84"),o=i("d066"),n=i("c430"),c=i("83ab"),a=i("4930"),l=i("fdbf"),u=i("d039"),f=i("5135"),h=i("e8b5"),d=i("861d"),v=i("825a"),p=i("7b0b"),g=i("fc6a"),m=i("c04e"),b=i("5c6c"),y=i("7c73"),A=i("df75"),L=i("241c"),S=i("057f"),w=i("7418"),C=i("06cf"),F=i("9bf2"),E=i("d1e7"),k=i("9112"),D=i("6eeb"),O=i("5692"),W=i("f772"),x=i("d012"),_=i("90e3"),T=i("b622"),$=i("e538"),N=i("746f"),R=i("d44e"),I=i("69f3"),B=i("b727").forEach,j=W("hidden"),q="Symbol",P="prototype",M=T("toPrimitive"),U=I.set,G=I.getterFor(q),H=Object[P],J=s.Symbol,V=o("JSON","stringify"),X=C.f,Y=F.f,Q=S.f,z=E.f,K=O("symbols"),Z=O("op-symbols"),tt=O("string-to-symbol-registry"),et=O("symbol-to-string-registry"),it=O("wks"),rt=s.QObject,st=!rt||!rt[P]||!rt[P].findChild,ot=c&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=X(H,e);r&&delete H[e],Y(t,e,i),r&&t!==H&&Y(H,e,r)}:Y,nt=function(t,e){var i=K[t]=y(J[P]);return U(i,{type:q,tag:t,description:e}),c||(i.description=e),i},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},at=function(t,e,i){t===H&&at(Z,e,i),v(t);var r=m(e,!0);return v(i),f(K,r)?(i.enumerable?(f(t,j)&&t[j][r]&&(t[j][r]=!1),i=y(i,{enumerable:b(0,!1)})):(f(t,j)||Y(t,j,b(1,{})),t[j][r]=!0),ot(t,r,i)):Y(t,r,i)},lt=function(t,e){v(t);var i=g(e),r=A(i).concat(vt(i));return B(r,(function(e){c&&!ft.call(i,e)||at(t,e,i[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=m(t,!0),i=z.call(this,e);return!(this===H&&f(K,e)&&!f(Z,e))&&(!(i||!f(this,e)||!f(K,e)||f(this,j)&&this[j][e])||i)},ht=function(t,e){var i=g(t),r=m(e,!0);if(i!==H||!f(K,r)||f(Z,r)){var s=X(i,r);return!s||!f(K,r)||f(i,j)&&i[j][r]||(s.enumerable=!0),s}},dt=function(t){var e=Q(g(t)),i=[];return B(e,(function(t){f(K,t)||f(x,t)||i.push(t)})),i},vt=function(t){var e=t===H,i=Q(e?Z:g(t)),r=[];return B(i,(function(t){!f(K,t)||e&&!f(H,t)||r.push(K[t])})),r};if(a||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),i=function(t){this===H&&i.call(Z,t),f(this,j)&&f(this[j],e)&&(this[j][e]=!1),ot(this,e,b(1,t))};return c&&st&&ot(H,e,{configurable:!0,set:i}),nt(e,t)},D(J[P],"toString",(function(){return G(this).tag})),D(J,"withoutSetter",(function(t){return nt(_(t),t)})),E.f=ft,F.f=at,C.f=ht,L.f=S.f=dt,w.f=vt,$.f=function(t){return nt(T(t),t)},c&&(Y(J[P],"description",{configurable:!0,get:function(){return G(this).description}}),n||D(H,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:J}),B(A(it),(function(t){N(t)})),r({target:q,stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=J(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!c},{create:ut,defineProperty:at,defineProperties:lt,getOwnPropertyDescriptor:ht}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),V){var pt=!a||u((function(){var t=J();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,i){var r,s=[t],o=1;while(arguments.length>o)s.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!ct(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),s[1]=e,V.apply(null,s)}})}J[P][M]||k(J[P],M,J[P].valueOf),R(J,q),x[j]=!0},a630:function(t,e,i){var r=i("23e7"),s=i("4df4"),o=i("1c7e"),n=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:n},{from:s})},a7ca:function(t,e,i){t.exports=i.p+"img/closeDoor.407d70d3.png"},a9e3:function(t,e,i){"use strict";var r=i("83ab"),s=i("da84"),o=i("94ca"),n=i("6eeb"),c=i("5135"),a=i("c6b6"),l=i("7156"),u=i("c04e"),f=i("d039"),h=i("7c73"),d=i("241c").f,v=i("06cf").f,p=i("9bf2").f,g=i("58a8").trim,m="Number",b=s[m],y=b.prototype,A=a(h(y))==m,L=function(t){var e,i,r,s,o,n,c,a,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(o=l.slice(2),n=o.length,c=0;c<n;c++)if(a=o.charCodeAt(c),a<48||a>s)return NaN;return parseInt(o,r)}return+l};if(o(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,w=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof w&&(A?f((function(){y.valueOf.call(i)})):a(i)!=m)?l(new b(L(e)),i,w):L(e)},C=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;C.length>F;F++)c(b,S=C[F])&&!c(w,S)&&p(w,S,v(b,S));w.prototype=y,y.constructor=w,n(s,m,w)}},ad6d:function(t,e,i){"use strict";var r=i("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,i){var r=i("83ab"),s=i("9bf2").f,o=Function.prototype,n=o.toString,c=/^\s*function ([^ (]*)/,a="name";r&&!(a in o)&&s(o,a,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,i){var r=i("0366"),s=i("44ad"),o=i("7b0b"),n=i("50c4"),c=i("65f0"),a=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,f=6==t,h=7==t,d=5==t||f;return function(v,p,g,m){for(var b,y,A=o(v),L=s(A),S=r(p,g,3),w=n(L.length),C=0,F=m||c,E=e?F(v,w):i||h?F(v,0):void 0;w>C;C++)if((d||C in L)&&(b=L[C],y=S(b,C,A),t))if(e)E[C]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return C;case 2:a.call(E,b)}else switch(t){case 4:return!1;case 7:a.call(E,b)}return f?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d28b:function(t,e,i){var r=i("746f");r("iterator")},d81d:function(t,e,i){"use strict";var r=i("23e7"),s=i("b727").map,o=i("1dde"),n=o("map");r({target:"Array",proto:!0,forced:!n},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},db6d:function(t,e,i){t.exports=i.p+"img/backgroundEle.586654c1.png"},e01a:function(t,e,i){"use strict";var r=i("23e7"),s=i("83ab"),o=i("da84"),n=i("5135"),c=i("861d"),a=i("9bf2").f,l=i("e893"),u=o.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(h,u);var d=h.prototype=u.prototype;d.constructor=h;var v=d.toString,p="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;a(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(n(f,t))return"";var i=p?e.slice(7,-1):e.replace(g,"$1");return""===i?void 0:i}}),r({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,i){var r=i("b622");e.f=r},e8b5:function(t,e,i){var r=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ed3b:function(t,e,i){t.exports=i.p+"img/arrowDown.dd46ae08.png"},f820:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("HelloWorld")],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("div",{staticClass:"topMain"},[r("img",{staticClass:"face",attrs:{alt:"face",src:i("379d")}}),r("div",{staticClass:"shadow"}),r("div",{staticClass:"buttonList"},[r("p",{staticClass:"tipFloor"},[t._v("请按您想去的楼层按钮")]),r("div",{staticClass:"btnNum"},t._l(t.BtnListTop,(function(e,s){return r("a-button",{key:s,staticClass:"button",attrs:{ghost:!0}},[t._v(t._s(" "+e+" ")+" "),r("img",{staticClass:"btnUp",class:{upBtn:!t.upList[s],upBtn2:t.upList[s]},attrs:{alt:"face",src:i("7070")},on:{click:function(e){return t.handleClick(1,s)}}}),r("img",{staticClass:"btnDown",class:{downBtn:!t.downList[s],downBtn2:t.downList[s]},attrs:{alt:"face",src:i("ed3b")},on:{click:function(e){return t.handleClick(-1,s)}}})])})),1)]),t._m(0)]),r("div",{staticClass:"a1"},[r("Elevator",{attrs:{upWaitList:t.upList,downWaitList:t.downList,id:0,reqList:t.eleReqList[0]},on:{udelecurfloor:t.getEleCurFloor,udeledir:t.getEleDir,udelestate:t.getEleState,checkEleWait:t.checkWait,checkEleArrival:t.checkArrival}})],1),r("div",{staticClass:"a2"},[r("Elevator",{attrs:{upWaitList:t.upList,downWaitList:t.downList,id:1,reqList:t.eleReqList[1]},on:{udelecurfloor:t.getEleCurFloor,udeledir:t.getEleDir,udelestate:t.getEleState,checkEleWait:t.checkWait,checkEleArrival:t.checkArrival}})],1),r("div",{staticClass:"a3"},[r("Elevator",{attrs:{upWaitList:t.upList,downWaitList:t.downList,id:2,reqList:t.eleReqList[2]},on:{udelecurfloor:t.getEleCurFloor,udeledir:t.getEleDir,udelestate:t.getEleState,checkEleWait:t.checkWait,checkEleArrival:t.checkArrival}})],1),r("div",{staticClass:"a4"},[r("Elevator",{attrs:{upWaitList:t.upList,downWaitList:t.downList,id:3,reqList:t.eleReqList[3]},on:{udelecurfloor:t.getEleCurFloor,udeledir:t.getEleDir,udelestate:t.getEleState,checkEleWait:t.checkWait,checkEleArrival:t.checkArrival}})],1),r("div",{staticClass:"a5"},[r("Elevator",{attrs:{upWaitList:t.upList,downWaitList:t.downList,id:4,reqList:t.eleReqList[4]},on:{udelecurfloor:t.getEleCurFloor,udeledir:t.getEleDir,udelestate:t.getEleState,checkEleWait:t.checkWait,checkEleArrival:t.checkArrival}})],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip"},[r("img",{staticClass:"tipPic",attrs:{alt:"face",src:i("702c")}}),r("p",{staticClass:"tipWord"},[t._v("小贴士(可以适当调整页面大小)"),r("br"),t._v("1.在总控制台选择某楼层按钮后"),r("br"),t._v("若某台电梯被分配驶向该楼层"),r("br"),t._v("相当于该电梯此楼层按钮被选择"),r("br"),t._v("我们统一将该电梯楼层按钮变量"),r("br"),t._v("方便观察"),r("br"),t._v("2.总控制台可以选择楼层"),r("br"),t._v("每部电梯支持独自操作和选择取消操作哟！")])])}];function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function a(t){if(Array.isArray(t))return c(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function l(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}i("fb6a"),i("b0c0");function u(t,e){if(t){if("string"===typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,e):void 0}}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t){return a(t)||l(t)||u(t)||f()}i("d81d"),i("25f0");var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"elevator"},[r("div",{staticClass:"floorPicMain"},[r("img",{staticClass:"eleBaGd",attrs:{alt:"ele",src:i("db6d")}}),r("div",{staticClass:"floorBtnNum",class:{btnBackGround:t.btnBackGround}},t._l(t.BtnList,(function(e,i){return r("button",{key:i,staticClass:"buttonFlo",class:{btnNUmFloor:t.isSelect[i]},attrs:{ghost:!0},on:{click:function(e){return t.handleClick(i)}}},[t._v(t._s(e+" "))])})),0),r("div",{staticClass:"flyPepAni"},[r("img",{class:{flyPepDyc:t.isActive,flyPepStc:!t.isActive},attrs:{alt:"ele",src:i("3d6c")}})]),r("p",{staticClass:"line"},[t._v("~·~·~·~·~·~")]),r("div",{staticClass:"foolrNUM"},[t._v(t._s(t.ctFloor+"F"))]),r("div",{staticClass:"lightBcG"},[r("div",{class:{redBusy:t.redActive}},[r("br"),t._v("Busy")]),r("div",{class:{greenFree:t.greActive}},[r("br"),t._v("Free")]),r("div",{class:{yOpenDoor:t.yelOpenActive}},[t._v("open"),r("br"),t._v("Door")]),r("div",{class:{yCloseDoor:t.yelCloseActive}},[t._v("close"),r("br"),t._v("Door")])]),r("div",{staticClass:"alert"},[r("img",{staticClass:"alert",class:{alert:t.isAlert,alert2:!t.isAlert},attrs:{alt:"ele",src:i("84b1")},on:{click:function(e){return t.alertSwing()}}})]),r("div",{staticClass:"Door"},[r("img",{staticClass:"odoor",class:{odoor:!t.openActive,odoor2:t.openActive},attrs:{alt:"od",src:i("436d")},on:{click:function(e){return t.doorStart()}}}),r("img",{staticClass:"cdoor",attrs:{alt:"cd",src:i("a7ca")},on:{click:function(e){return t.doorEnd()}}})])])])},v=[],p=(i("a9e3"),{name:"HelloWorld",props:{upWaitList:Array,downWaitList:Array,reqList:Array,id:Number},data:function(){return{BtnList:h(Array(20)).map((function(t,e){return e+1})),isSelect:h(Array(20)).map((function(){return!1})),isActive:!1,greActive:!0,yelOpenActive:!1,yelCloseActive:!1,redActive:!1,outSign:0,ctFloor:1,destination:0,upList:h(Array(20)).map((function(){return!1})),downList:h(Array(20)).map((function(){return!1})),oldDir:1,waitToRun:!0,isAlert:!0,numTimes:1,openActive:!1,closeActive:!1}},computed:{direction:function(){return this.ctFloor===this.destination?0:this.ctFloor>this.destination?-1:1}},methods:{handleClick:function(t){0==this.isSelect[t]?(this.$set(this.isSelect,t,!0),t+1>this.ctFloor&&this.oldDir?this.destination=this.comTopDes():t+1<this.ctFloor?(this.destination<this.ctFloor||this.waitToRun)&&(this.destination=this.comBotmDes(),this.oldDir=0):t+1>this.ctFloor&&!this.oldDir?(this.destination<this.ctFloor||this.waitToRun)&&(this.destination=this.comBotmDes()):this.openDoor(),1==this.outSign&&(this.outSign=0)):1==this.isSelect[t]&&0==this.outSign&&(this.$set(this.isSelect,t,!1),t+1==this.destination&&(this.destination=this.comTopDes(),0==this.destination?this.destination=this.ctFloor:this.destination<this.ctFloor&&(this.destination=this.comBotmDes()))),this.waitToRun&&(this.yelCloseActive=!1,this.yelOpenActive=!1,this.redActive=!0,this.greActive=!1,this.run(),this.waitToRun=!1,this.isActive=!0)},doorStart:function(){this.redActive||(this.openActive=!0),this.waitToRun&&this.openDoor()},doorEnd:function(){!this.redActive&&this.yelOpenActive&&this.waitToRun&&this.closeDoor(!1)},run:function(){if(1==this.direction)this.oldDir=1,this.isSelect[this.ctFloor-1]?this.openDoor(!0):(this.ctFloor++,this.yelCloseActive=!1,this.yelOpenActive=!1,this.redActive=!0,this.greActive=!1,setTimeout(this.run,1e3));else if(-1==this.direction)this.oldDir=0,this.isSelect[this.ctFloor-1]?this.openDoor(!0):(this.ctFloor--,this.yelCloseActive=!1,this.yelOpenActive=!1,this.redActive=!0,this.greActive=!1,setTimeout(this.run,1e3));else if(0==this.direction)if(this.isActive=!1,this.waitToRun=!0,this.isSelect[this.ctFloor-1])if(this.oldDir){for(var t=0;t<=this.ctFloor-1;t++)this.isSelect[t]=!1;this.openDoor(!1)}else{for(var e=19;e>=this.ctFloor-1;e--)this.isSelect[e]=!1;this.openDoor(!1)}else if(this.destination==this.ctFloor){for(var i=0;i<this.ctFloor-1;i++)this.isSelect[i]=!1;console.log("不理解的部分"),this.yelCloseActive=!1,this.yelOpenActive=!1,this.redActive=!1,this.greActive=!0}},setOpenActive:function(){this.openActive=!1},openDoor:function(t){var e=this;this.openActive&&setTimeout((function(){e.setOpenActive()}),500),this.isActive=!1,this.isSelect[this.ctFloor-1]=!1,this.yelCloseActive=!1,this.yelOpenActive=!0,this.redActive=!1,this.greActive=!1,this.$emit("checkEleArrival",this.ctFloor-1,this.direction,this.id),setTimeout(this.closeDoor,2e3,t)},closeDoor:function(t){var e=this;this.yelCloseActive=!0,this.yelOpenActive=!1,this.redActive=!1,this.greActive=!1,setTimeout((function(){e.block}),500),0==this.direction&&(this.destination=0),t&&(this.isActive=!0,setTimeout(this.run,1e3)),t||(this.yelCloseActive=!1,this.yelOpenActive=!1,this.redActive=!1,this.greActive=!0),this.$emit("checkEleWait")},comTopDes:function(){for(var t=20,e=19;e>=0;e--){if(1==this.isSelect[e])break;t--}return t},comBotmDes:function(){for(var t=1,e=0;e<20;e++){if(1==this.isSelect[e])break;t++}return t},block:function(){for(var t=0;t<100;t++)t++},alertSwing:function(){this.isAlert=!this.isAlert,this.numTimes%2==1&&alert("发出警报,再点击铃铛就可以暂停奥"),this.numTimes++}},watch:{upWaitList:function(){this.$emit("udelestate",this.id,this.waitToRun),this.$emit("udeledir",this.id,this.direction),this.$emit("udelecurfloor",this.id,this.ctFloor)},dowWaitList:function(){this.$emit("udelestate",this.id,this.waitToRun),this.$emit("udeledir",this.id,this.direction),this.$emit("udelecurfloor",this.id,this.ctFloor)},reqList:function(t){for(var e=0;e<20;++e)1==t[e]&&0==this.isSelect[e]&&(this.outSign=1,this.handleClick(e))}}}),g=p,m=(i("9e8e"),i("2877")),b=Object(m["a"])(g,d,v,!1,null,"6c0865e5",null),y=b.exports,A={name:"HelloWorld",props:{msg:String,stateList:[]},components:{Elevator:y},data:function(){return{BtnListTop:h(Array(20)).map((function(t,e){return e+1<10?"0"+(1+e).toString():(1+e).toString()})),upList:h(new Array(20)).map((function(){return!1})),downList:h(new Array(20)).map((function(){return!1})),eleStateList:h(new Array(5)).map((function(){return!0})),eleStateWait:h(new Array(5)).map((function(){return!0})),eleOldDirList:h(new Array(5)).map((function(){return 1})),eleCurFloorList:h(new Array(5)).map((function(){return 0})),cancel:-1,ignoreList:[!1,!0,!0,!0,!0],eleWaitList:h(new Array(20)).map((function(){return 0})),eleReqList:h(new Array(5)).map((function(){return h(new Array(20)).map((function(){return!1}))})),maxFloor:0,minFloor:100,dir:0,index:0}},methods:{getEleCurFloor:function(t,e){this.$set(this.eleCurFloorList,t,e),console.log("当前楼层：",this.eleCurFloorList[t],t)},getEleState:function(t,e){this.$set(this.eleStateList,t,e),this.$set(this.eleStateWait,t,e),console.log("当前状态：",this.eleStateWait[t])},getEleDir:function(t,e){this.$set(this.eleOldDirList,t,e),console.log("上一次方向：",this.eleOldDirList[t])},checkArrival:function(t,e,i){var r=20;if(i>0&&console.log("yes"),1==e&&t+1==this.maxFloor){r=20;for(var s=19;s>=0;s--){if(1==this.upList[s])break;r--}this.maxFloor=r}else if(-1==e&&t+1==this.minFloor){r=1;for(var o=0;o<20;o++){if(1==this.downList[o])break;r++}this.minFloor=r}this.upList[t]&&this.$set(this.upList,t,!1),this.downList[t]&&this.$set(this.downList,t,!1)},checkWait:function(){for(var t=0;t<20;t++)1==this.eleWaitList[t]?(this.checkElevator(1,t),console.log("wait:",t)):-1==this.eleWaitList[t]&&(this.checkElevator(-1,t),console.log("wait:",t))},handleClick:function(t,e){var i=this;1==t?(this.$set(this.upList,e,!0),this.maxFloor<e+1&&(this.maxFloor=e+1),setTimeout((function(){i.checkElevator(t,e)}),200)):-1==t&&(this.$set(this.downList,e,!0),this.minFloor>e+1&&(this.minFloor=e+1),setTimeout((function(){i.checkElevator(t,e)}),200)),this.dir=t,this.index=e},checkElevator:function(t,e){var i=this;this.checkIsUseFul(e);for(var r=100,s=100,o=-1,n=-1,c=0,a=4;a>=0;a--)1==this.eleStateList[a]&&(1==t&&1==this.eleOldDirList[a]?this.eleCurFloorList[a]<=e+1&&(c=e+1-this.eleCurFloorList[a],c<=r&&(r=c,o=a)):-1==t&&-1==this.eleOldDirList[a]&&this.eleCurFloorList[a]>=e+1&&(c=this.eleCurFloorList[a]-e-1,c<=s&&(s=c,n=a)));if(1==t&&100==r)for(var l=4;l>=0;l--)console.log("等待状态：",l,this.eleStateWait[l]),1==this.eleStateWait[l]&&(c=this.eleCurFloorList[l]>e+1?this.eleCurFloorList[l]-e-1:e+1-this.eleCurFloorList[l],c<=r&&(r=c,o=l));else if(-1==t&&100==s)for(var u=4;u>=0;u--)1==this.eleStateWait[u]&&(c=this.eleCurFloorList[u]>e+1?this.eleCurFloorList[u]-e-1:e+1-this.eleCurFloorList[u],c<=s&&(s=c,n=u));console.log("向上：选出来的结果：",r,o),console.log("向下：选出来的结果：",s,n),r<100?(this.$set(this.eleStateWait,o,!1),1==this.eleWaitList[e]&&this.$set(this.eleWaitList,e,0),console.log("等待状态：",this.eleStateWait[o]),this.$set(this.eleReqList[o],e,!0),setTimeout((function(){i.$set(i.eleReqList[o],e,!1)}),500)):1==t&&(this.eleWaitList[e]=1),s<100?(this.$set(this.eleStateWait,n,!1),-1==this.eleWaitList[e]&&this.$set(this.eleWaitList,e,0),this.$set(this.eleReqList[n],e,!0),setTimeout((function(){i.$set(i.eleReqList[n],e,!1)}),500)):-1==t&&(this.eleWaitList[e]=-1)},checkIsUseFul:function(t){for(var e=0;e<5;e++)0==this.eleStateList[e]?(1==this.eleOldDirList[e]&&this.eleCurFloorList[e]<t+1&&(this.eleStateList[e]=!0),-1==this.eleOldDirList[e]&&this.eleCurFloorList[e]>t+1&&(this.eleStateList[e]=!0)):1==this.eleStateList[e]&&(1==this.eleOldDirList[e]&&this.eleCurFloorList[e]>t+1&&(this.eleStateList[e]=!1),-1==this.eleOldDirList[e]&&this.eleCurFloorList[e]<t+1&&(this.eleStateList[e]=!1))}}},L=A,S=(i("238e"),Object(m["a"])(L,o,n,!1,null,"65a3d5dd",null)),w=S.exports,C={name:"About",components:{HelloWorld:w}},F=C,E=Object(m["a"])(F,r,s,!1,null,null,null);e["default"]=E.exports},fb6a:function(t,e,i){"use strict";var r=i("23e7"),s=i("861d"),o=i("e8b5"),n=i("23cb"),c=i("50c4"),a=i("fc6a"),l=i("8418"),u=i("b622"),f=i("1dde"),h=f("slice"),d=u("species"),v=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var i,r,u,f=a(this),h=c(f.length),g=n(t,h),m=n(void 0===e?h:e,h);if(o(f)&&(i=f.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?s(i)&&(i=i[d],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return v.call(f,g,m);for(r=new(void 0===i?Array:i)(p(m-g,0)),u=0;g<m;g++,u++)g in f&&l(r,u,f[g]);return r.length=u,r}})}}]);
//# sourceMappingURL=about.40559278.js.map