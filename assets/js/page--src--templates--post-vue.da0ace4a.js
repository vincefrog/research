(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0fQM":function(t,e,n){"use strict";n("V1Si")},"4Brf":function(t,e,n){"use strict";var r=n("I+eb"),o=n("g6v/"),i=n("2oRo"),a=n("UTVS"),s=n("hh1v"),c=n("m/L8").f,u=n("6JNq"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(f,l);var d=f.prototype=l.prototype;d.constructor=f;var v=d.toString,g="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(a(p,t))return"";var n=g?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},"5Tg+":function(t,e,n){var r=n("tiKp");e.f=r},"BX/b":function(t,e,n){var r=n("/GqU"),o=n("JBy8").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},DQNa:function(t,e,n){var r=n("busE"),o=Date.prototype,i=o.toString,a=o.getTime;new Date(NaN)+""!="Invalid Date"&&r(o,"toString",(function(){var t=a.call(this);return t==t?i.call(this):"Invalid Date"}))},SHZv:function(t,e,n){"use strict";n.r(e);n("+2oP"),n("ma9I"),n("pNMO"),n("4Brf");var r={methods:{goBack:function(){this.$router.go(-1)}},props:{passedClass:{type:String,default:""}}},o=n("KHd+"),i=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("button",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hover:text-jfrog-green transition-all",class:this.passedClass,domProps:{innerHTML:this._s("< Back")},on:{click:this.goBack}})}),[],!1,null,null,null).exports,a=(n("DQNa"),n("vgRX")),s={name:"PostHero",props:{vul:{type:Object,default:function(){return{path:"-path-",title:"-title-",description:"-description-",date_published:new Date,xray_id:"-xray_id-",vul_id:"-vul_id-",severity:"-severity-",discovered_by:"-discovered_by-",last_updated:new Date,cvss:"-cvss-"}}}},computed:{severityColorVal:function(){return Object(a.severityColor)(this.vul.severity)},datePublishString:function(){return Object(a.toBlogDateStr)(this.vul.date_published)},dateUpdateString:function(){return Object(a.toBlogDateStr)(this.vul.last_updated)},severityDotClass:function(){return"inline-block rounded-full w-4 h-4 bg-"+this.severityColorVal}}},c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"single-post-hero mt-3 py-5 sm:py-8 px-4 sm:px-10 bg-gray-100 text-black"},[n("h1",[t._v(t._s(t.vul.xray_id)+" - "+t._s(t.vul.title))]),n("p",{staticClass:"text-jfrog-green font-bold"},[t._v(" \n    "+t._s(t.vul.vul_id)+"\n    "),t.vul.cvss?n("span",{staticClass:"cvss"},[t._v("\n      | CVSS "+t._s(t.vul.cvss)+"\n    ")]):t._e()]),n("p",{staticClass:"severity mt-1 flex gap-2 items-center"},[n("span",{class:t.severityDotClass}),t._v(" JFrog Severity:"),n("span",{staticClass:"capitalize"},[t._v(t._s(t.vul.severity))])]),n("p",{staticClass:"dates font-bold text-sm mt-4"},[t._v("\n    Published "+t._s(t.datePublishString)+" | Last updated "+t._s(t.dateUpdateString)+"\n  ")])])}),[],!1,null,null,null).exports,u={name:"PostContent",props:{content:{type:String,default:"lorem ipsum"}}},l=(n("0fQM"),{name:"Post",data:function(){return{}},computed:{severityCapital:function(){var t=this.$page.post.severity,e=t.charAt(0).toUpperCase()+t.slice(1);console.log(e)}},metaInfo:function(){return{title:"".concat(this.$page.post.title," | ").concat(this.$page.post.xray_id),meta:[{name:"title",content:"".concat(this.$page.post.title," | ").concat(this.$page.post.xray_id)},{name:"description",content:"".concat(this.$page.post.description)}],link:[{rel:"canonical",content:this.$static.metadata.baseURL+this.$page.post.path}]}},components:{BackButton:i,PostHero:c,PostContent:Object(o.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("section",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"single-post-content mt-3 py-5 sm:py-8 px-4 sm:px-10 text-black border-black border-b text-xs",domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,null,null).exports}}),p=null,f=n("Kw5r"),d=f.a.config.optionMergeStrategies.computed,v={metadata:{baseURL:"https://research.jfrog.com"}},g=function(t){var e=t.options;e.__staticData?e.__staticData.data=v:(e.__staticData=f.a.observable({data:v}),e.computed=d({$static:function(){return e.__staticData.data}},e.computed))},y=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"container py-10"},[e("BackButton"),e("PostHero",{attrs:{vul:this.$page.post}}),e("PostContent",{attrs:{content:this.$page.post.content}}),e("BackButton",{attrs:{passedClass:"py-4"}})],1)])}),[],!1,null,null,null);"function"==typeof p&&p(y),"function"==typeof g&&g(y);e.default=y.exports},V1Si:function(t,e,n){},"dG/n":function(t,e,n){var r=n("Qo9l"),o=n("UTVS"),i=n("5Tg+"),a=n("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},pNMO:function(t,e,n){"use strict";var r=n("I+eb"),o=n("2oRo"),i=n("0GbY"),a=n("xDBR"),s=n("g6v/"),c=n("STAE"),u=n("/b8u"),l=n("0Dky"),p=n("UTVS"),f=n("6LWA"),d=n("hh1v"),v=n("glrk"),g=n("ewvW"),y=n("/GqU"),h=n("wE6v"),b=n("XGwC"),m=n("fHMY"),S=n("33Wh"),_=n("JBy8"),w=n("BX/b"),O=n("dBg+"),C=n("Bs8V"),x=n("m/L8"),k=n("0eef"),D=n("kRJp"),j=n("busE"),B=n("VpIT"),P=n("93I0"),$=n("0BK2"),N=n("kOOl"),E=n("tiKp"),T=n("5Tg+"),L=n("dG/n"),U=n("1E5z"),I=n("afO8"),V=n("tycR").forEach,J=P("hidden"),R=E("toPrimitive"),H=I.set,M=I.getterFor("Symbol"),Q=Object.prototype,G=o.Symbol,K=i("JSON","stringify"),X=C.f,F=x.f,W=w.f,q=k.f,A=B("symbols"),Y=B("op-symbols"),z=B("string-to-symbol-registry"),Z=B("symbol-to-string-registry"),tt=B("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=s&&l((function(){return 7!=m(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=X(Q,e);r&&delete Q[e],F(t,e,n),r&&t!==Q&&F(Q,e,r)}:F,ot=function(t,e){var n=A[t]=m(G.prototype);return H(n,{type:"Symbol",tag:t,description:e}),s||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},at=function(t,e,n){t===Q&&at(Y,e,n),v(t);var r=h(e,!0);return v(n),p(A,r)?(n.enumerable?(p(t,J)&&t[J][r]&&(t[J][r]=!1),n=m(n,{enumerable:b(0,!1)})):(p(t,J)||F(t,J,b(1,{})),t[J][r]=!0),rt(t,r,n)):F(t,r,n)},st=function(t,e){v(t);var n=y(e),r=S(n).concat(pt(n));return V(r,(function(e){s&&!ct.call(n,e)||at(t,e,n[e])})),t},ct=function(t){var e=h(t,!0),n=q.call(this,e);return!(this===Q&&p(A,e)&&!p(Y,e))&&(!(n||!p(this,e)||!p(A,e)||p(this,J)&&this[J][e])||n)},ut=function(t,e){var n=y(t),r=h(e,!0);if(n!==Q||!p(A,r)||p(Y,r)){var o=X(n,r);return!o||!p(A,r)||p(n,J)&&n[J][r]||(o.enumerable=!0),o}},lt=function(t){var e=W(y(t)),n=[];return V(e,(function(t){p(A,t)||p($,t)||n.push(t)})),n},pt=function(t){var e=t===Q,n=W(e?Y:y(t)),r=[];return V(n,(function(t){!p(A,t)||e&&!p(Q,t)||r.push(A[t])})),r};(c||(j((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===Q&&n.call(Y,t),p(this,J)&&p(this[J],e)&&(this[J][e]=!1),rt(this,e,b(1,t))};return s&&nt&&rt(Q,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return M(this).tag})),j(G,"withoutSetter",(function(t){return ot(N(t),t)})),k.f=ct,x.f=at,C.f=ut,_.f=w.f=lt,O.f=pt,T.f=function(t){return ot(E(t),t)},s&&(F(G.prototype,"description",{configurable:!0,get:function(){return M(this).description}}),a||j(Q,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),V(S(tt),(function(t){L(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(p(z,e))return z[e];var n=G(e);return z[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(p(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(t,e){return void 0===e?m(t):st(m(t),e)},defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),K)&&r({target:"JSON",stat:!0,forced:!c||l((function(){var t=G();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,K.apply(null,o)}});G.prototype[R]||D(G.prototype,R,G.prototype.valueOf),U(G,"Symbol"),$[J]=!0},vgRX:function(t,e,n){n("DQNa"),n("ma9I");t.exports={toBlogDateStr:function(t){var e=new Date(t),n=e.getDate(),r=e.toLocaleString("en-US",{month:"short"}),o=e.getFullYear();return"".concat(n," ").concat(r,". ").concat(o)},severityColor:function(t){var e="red";switch(t){case"low":e="yellow-300";break;case"medium":e="yellow-500";break;case"high":e="red-500";break;case"critical":e="red-700";break;default:e="gray-200"}return e}}}}]);