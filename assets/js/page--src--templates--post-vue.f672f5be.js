(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0fQM":function(t,e,n){"use strict";n("V1Si")},"4Brf":function(t,e,n){"use strict";var r=n("I+eb"),o=n("g6v/"),i=n("2oRo"),s=n("UTVS"),a=n("hh1v"),c=n("m/L8").f,u=n("6JNq"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(f,l);var v=f.prototype=l.prototype;v.constructor=f;var d=v.toString,g="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(p,t))return"";var n=g?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},"5Tg+":function(t,e,n){var r=n("tiKp");e.f=r},"BX/b":function(t,e,n){var r=n("/GqU"),o=n("JBy8").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(r(t))}},DQNa:function(t,e,n){var r=n("busE"),o=Date.prototype,i=o.toString,s=o.getTime;new Date(NaN)+""!="Invalid Date"&&r(o,"toString",(function(){var t=s.call(this);return t==t?i.call(this):"Invalid Date"}))},SHZv:function(t,e,n){"use strict";n.r(e);n("+2oP"),n("ma9I"),n("pNMO"),n("4Brf");var r={methods:{goBack:function(){this.$router.go(-1)}},props:{passedClass:{type:String,default:""}}},o=n("KHd+"),i=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("button",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"hover:text-jfrog-green transition-all",class:this.passedClass,domProps:{innerHTML:this._s("< Back")},on:{click:this.goBack}})}),[],!1,null,null,null).exports,s=(n("DQNa"),n("vgRX")),a={name:"PostHero",props:{vul:{type:Object,default:function(){return{path:"-path-",title:"-title-",description:"-description-",date_published:new Date,xray_id:"-xray_id-",vul_id:"-vul_id-",severity:"-severity-",discovered_by:"-discovered_by-",last_updated:new Date,cvss:"-cvss-"}}}},computed:{severityColorVal:function(){return Object(s.severityColor)(this.vul.severity)},datePublishString:function(){return Object(s.toBlogDateStr)(this.vul.date_published)},dateUpdateString:function(){return Object(s.toBlogDateStr)(this.vul.last_updated)},severityDotClass:function(){return"inline-block rounded-full w-4 h-4 bg-"+this.severityColorVal}}},c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"single-post-hero mt-3 py-5 sm:py-8 px-4 sm:px-10 bg-gray-100 text-black"},[n("h1",[t._v(t._s(t.vul.title))]),n("p",{staticClass:"text-jfrog-green font-bold"},[t._v(" \n    "+t._s(t.vul.vul_id)+"\n    "),t.vul.cvss?n("span",{staticClass:"cvss"},[t._v("\n      | CVSS "+t._s(t.vul.cvss)+"\n    ")]):t._e()]),n("p",{staticClass:"severity mt-1 flex gap-2 items-center"},[n("span",{class:t.severityDotClass}),t._v(" JFrog Severity:"),n("span",{staticClass:"capitalize"},[t._v(t._s(t.vul.severity))])]),n("p",{staticClass:"dates font-bold text-sm mt-4"},[t._v("\n    Published "+t._s(t.datePublishString)+" | Last updated "+t._s(t.dateUpdateString)+"\n  ")])])}),[],!1,null,null,null).exports,u={name:"PostContent",props:{content:{type:String,default:"lorem ipsum"}}},l=(n("0fQM"),{name:"Post",data:function(){return{}},computed:{severityCapital:function(){var t=this.$page.post.severity;return t.charAt(0).toUpperCase()+t.slice(1)}},metaInfo:function(){return{title:"".concat(this.$page.post.title," | ").concat(this.$page.post.xray_id," | JFrog"),meta:[{name:"description",content:"".concat(this.$page.post.vul_id," ").concat(this.severityCapital," severity. ").concat(this.$page.post.description," ")}],link:[{rel:"canonical",content:this.$static.metadata.baseURL+this.$page.post.path}]}},components:{BackButton:i,PostHero:c,PostContent:Object(o.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("section",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"single-post-content mt-3 py-5 sm:py-8 px-4 sm:px-10 text-black border-black border-b text-xs",domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,null,null).exports}}),p=null,f=n("Kw5r"),v=f.a.config.optionMergeStrategies.computed,d={metadata:{baseURL:"https://research.jfrog.com"}},g=function(t){var e=t.options;e.__staticData?e.__staticData.data=d:(e.__staticData=f.a.observable({data:d}),e.computed=v({$static:function(){return e.__staticData.data}},e.computed))},y=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"container py-10"},[e("BackButton"),e("PostHero",{attrs:{vul:this.$page.post}}),e("PostContent",{attrs:{content:this.$page.post.content}}),e("BackButton",{attrs:{passedClass:"py-4"}})],1)])}),[],!1,null,null,null);"function"==typeof p&&p(y),"function"==typeof g&&g(y);e.default=y.exports},V1Si:function(t,e,n){},"dG/n":function(t,e,n){var r=n("Qo9l"),o=n("UTVS"),i=n("5Tg+"),s=n("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},pNMO:function(t,e,n){"use strict";var r=n("I+eb"),o=n("2oRo"),i=n("0GbY"),s=n("xDBR"),a=n("g6v/"),c=n("STAE"),u=n("/b8u"),l=n("0Dky"),p=n("UTVS"),f=n("6LWA"),v=n("hh1v"),d=n("glrk"),g=n("ewvW"),y=n("/GqU"),h=n("wE6v"),b=n("XGwC"),m=n("fHMY"),S=n("33Wh"),_=n("JBy8"),w=n("BX/b"),O=n("dBg+"),C=n("Bs8V"),k=n("m/L8"),x=n("0eef"),D=n("kRJp"),j=n("busE"),B=n("VpIT"),P=n("93I0"),$=n("0BK2"),N=n("kOOl"),E=n("tiKp"),T=n("5Tg+"),L=n("dG/n"),U=n("1E5z"),I=n("afO8"),J=n("tycR").forEach,V=P("hidden"),R=E("toPrimitive"),H=I.set,M=I.getterFor("Symbol"),Q=Object.prototype,G=o.Symbol,F=i("JSON","stringify"),K=C.f,X=k.f,W=w.f,q=x.f,A=B("symbols"),Y=B("op-symbols"),z=B("string-to-symbol-registry"),Z=B("symbol-to-string-registry"),tt=B("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&l((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(Q,e);r&&delete Q[e],X(t,e,n),r&&t!==Q&&X(Q,e,r)}:X,ot=function(t,e){var n=A[t]=m(G.prototype);return H(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,n){t===Q&&st(Y,e,n),d(t);var r=h(e,!0);return d(n),p(A,r)?(n.enumerable?(p(t,V)&&t[V][r]&&(t[V][r]=!1),n=m(n,{enumerable:b(0,!1)})):(p(t,V)||X(t,V,b(1,{})),t[V][r]=!0),rt(t,r,n)):X(t,r,n)},at=function(t,e){d(t);var n=y(e),r=S(n).concat(pt(n));return J(r,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=h(t,!0),n=q.call(this,e);return!(this===Q&&p(A,e)&&!p(Y,e))&&(!(n||!p(this,e)||!p(A,e)||p(this,V)&&this[V][e])||n)},ut=function(t,e){var n=y(t),r=h(e,!0);if(n!==Q||!p(A,r)||p(Y,r)){var o=K(n,r);return!o||!p(A,r)||p(n,V)&&n[V][r]||(o.enumerable=!0),o}},lt=function(t){var e=W(y(t)),n=[];return J(e,(function(t){p(A,t)||p($,t)||n.push(t)})),n},pt=function(t){var e=t===Q,n=W(e?Y:y(t)),r=[];return J(n,(function(t){!p(A,t)||e&&!p(Q,t)||r.push(A[t])})),r};(c||(j((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===Q&&n.call(Y,t),p(this,V)&&p(this[V],e)&&(this[V][e]=!1),rt(this,e,b(1,t))};return a&&nt&&rt(Q,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return M(this).tag})),j(G,"withoutSetter",(function(t){return ot(N(t),t)})),x.f=ct,k.f=st,C.f=ut,_.f=w.f=lt,O.f=pt,T.f=function(t){return ot(E(t),t)},a&&(X(G.prototype,"description",{configurable:!0,get:function(){return M(this).description}}),s||j(Q,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),J(S(tt),(function(t){L(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(p(z,e))return z[e];var n=G(e);return z[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(p(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?m(t):at(m(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),F)&&r({target:"JSON",stat:!0,forced:!c||l((function(){var t=G();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(v(e)||void 0!==t)&&!it(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,F.apply(null,o)}});G.prototype[R]||D(G.prototype,R,G.prototype.valueOf),U(G,"Symbol"),$[V]=!0},vgRX:function(t,e,n){n("DQNa"),n("ma9I");t.exports={toBlogDateStr:function(t){var e=new Date(t),n=e.getDate(),r=e.toLocaleString("en-US",{month:"short"}),o=e.getFullYear();return"".concat(n," ").concat(r,". ").concat(o)},severityColor:function(t){var e="red";switch(t){case"low":e="yellow-300";break;case"medium":e="yellow-500";break;case"high":e="red-500";break;case"critical":e="red-700";break;default:e="gray-200"}return e}}}}]);