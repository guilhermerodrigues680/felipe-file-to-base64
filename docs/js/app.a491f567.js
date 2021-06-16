(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("FileToBase64")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("File to base64")]),r("div",[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.pickDirectory,expression:"pickDirectory"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.pickDirectory)?e._i(e.pickDirectory,null)>-1:e.pickDirectory},on:{change:function(t){var r=e.pickDirectory,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);n.checked?i<0&&(e.pickDirectory=r.concat([o])):i>-1&&(e.pickDirectory=r.slice(0,i).concat(r.slice(i+1)))}else e.pickDirectory=a}}}),e._v(" Ler um diretório ")]),r("div",[r("input",{attrs:{type:"file",accept:e.pickDirectory?null:e.allowedMimeTypesStr,webkitdirectory:e.pickDirectory,multiple:!e.pickDirectory},on:{change:function(t){return e.inputFileChanged(t)}}})]),e.logs&&e.logs.length?r("div",[r("p",[e._v("Logs da conversão")]),r("ul",e._l(e.logs,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0)]):e._e(),r("Base64ResultsList",{attrs:{base64Results:e.base64Results}})],1)])},c=[],s=r("b85c"),u=r("1da1"),l=(r("96cf"),r("a15b"),r("a434"),r("caad"),r("2532"),r("99af"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.base64Results,(function(t,n){return r("div",{key:n},[r("img",{staticClass:"base64-result-preview",attrs:{src:t,alt:"img-idx-"+n}}),r("textarea",{attrs:{disabled:""},domProps:{value:t}}),r("span",[r("a",{attrs:{href:t,target:"_blank"}},[e._v("Abrir em uma nova aba")])])])})),0)}),p=[],d={name:"Base64ResultsList",props:{base64Results:Array}},f=d,b=(r("d92c"),r("2877")),v=Object(b["a"])(f,l,p,!1,null,"743fafaa",null),y=v.exports;r("d3b7");function m(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(e){console.debug("Error: ",e),r(e)},n.readAsDataURL(e)}))}var h={getBase64:m},g={name:"FileToBase64",components:{Base64ResultsList:y},data:function(){return{allowedMimeTypes:["image/jpeg","image/png"],pickDirectory:!1,base64Results:[],logs:[]}},computed:{allowedMimeTypesStr:function(){return this.allowedMimeTypes.join(",")}},methods:{inputFileChanged:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.target.files,console.debug(n),t.base64Results.splice(0),a=Object(s["a"])(n),r.prev=4,a.s();case 6:if((o=a.n()).done){r.next=19;break}if(i=o.value,t.allowedMimeTypes.includes(i.type)){r.next=13;break}return c="[AVISO] ".concat(i.name," do tipo '").concat(i.type||"desconhecido","' não é suportado."),console.debug(c),t.logs.push(c),r.abrupt("continue",17);case 13:return r.next=15,h.getBase64(i);case 15:u=r.sent,t.base64Results.push(u);case 17:r.next=6;break;case 19:r.next=24;break;case 21:r.prev=21,r.t0=r["catch"](4),a.e(r.t0);case 24:return r.prev=24,a.f(),r.finish(24);case 27:case"end":return r.stop()}}),r,null,[[4,21,24,27]])})))()}}},k=g,w=Object(b["a"])(k,i,c,!1,null,null,null),_=w.exports,x={name:"App",components:{FileToBase64:_}},O=x,j=Object(b["a"])(O,a,o,!1,null,null,null),D=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(D)}}).$mount("#app")},d92c:function(e,t,r){"use strict";r("d958")},d958:function(e,t,r){}});
//# sourceMappingURL=app.a491f567.js.map