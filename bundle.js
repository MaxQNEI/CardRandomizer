(()=>{function f(){}function yt(t){return t()}function ht(){return Object.create(null)}function E(t){t.forEach(yt)}function ft(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Jt(t){return Object.keys(t).length===0}var Gt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var At=class t{_listeners="WeakMap"in Gt?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)t.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};At.entries="WeakMap"in Gt?new WeakMap:void 0;var Ht=!1;function Tt(){Ht=!0}function Mt(){Ht=!1}function r(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function A(){return _(" ")}function Ot(){return _("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function h(t,e,n){t.classList.toggle(e,!!n)}function Pt(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}var D;function N(t){D=t}function qt(){if(!D)throw new Error("Function called outside component initialization");return D}function Wt(t){qt().$$.on_mount.push(t)}var $=[];var te=[],q=[],ee=[],fe=Promise.resolve(),wt=!1;function ne(){wt||(wt=!0,fe.then(mt))}function rt(t){q.push(t)}var Zt=new Set,K=0;function mt(){if(K!==0)return;let t=D;do{try{for(;K<$.length;){let e=$[K];K++,N(e),Ae(e.$$)}}catch(e){throw $.length=0,K=0,e}for(N(null),$.length=0,K=0;te.length;)te.pop()();for(let e=0;e<q.length;e+=1){let n=q[e];Zt.has(n)||(Zt.add(n),n())}q.length=0}while($.length);for(;ee.length;)ee.pop()();wt=!1,Zt.clear(),N(t)}function Ae(t){if(t.fragment!==null){t.update(),E(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function ie(t){let e=[],n=[];q.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),q=e}var bt=new Set,me;function J(t,e){t&&t.i&&(bt.delete(t),t.i(e))}function lt(t,e,n,i){if(t&&t.o){if(bt.has(t))return;bt.add(t),me.c.push(()=>{bt.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function at(t){return t?.length!==void 0?t:Array.from(t)}var be=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],xe=new Set([...be]);function Et(t){t&&t.c()}function xt(t,e,n){let{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),rt(()=>{let o=t.$$.on_mount.map(yt).filter(ft);t.$$.on_destroy?t.$$.on_destroy.push(...o):E(o),t.$$.on_mount=[]}),s.forEach(rt)}function Ft(t,e){let n=t.$$;n.fragment!==null&&(ie(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&($.push(t),ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(t,e,n,i,s,o,l=null,m=[-1]){let p=D;N(t);let c=t.$$={fragment:null,ctx:[],props:o,update:f,not_equal:s,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:ht(),dirty:m,skip_bound:!1,root:e.target||p.$$.root};l&&l(c.root);let x=!1;if(c.ctx=n?n(t,e.props||{},(C,F,...y)=>{let W=y.length?y[0]:F;return c.ctx&&s(c.ctx[C],c.ctx[C]=W)&&(!c.skip_bound&&c.bound[C]&&c.bound[C](W),x&&Be(t,C)),F}):[],c.update(),x=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Tt();let C=jt(e.target);c.fragment&&c.fragment.l(C),C.forEach(Q)}else c.fragment&&c.fragment.c();e.intro&&J(t.$$.fragment),xt(t,e.target,e.anchor),Mt(),mt()}N(p)}var Qe;typeof HTMLElement=="function"&&(Qe=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){let i=this.$$c.$on(t,e);this.$$l_u.set(e,i)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){let i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let o;return{c:function(){o=a("slot"),s!=="default"&&g(o,"name",s)},m:function(p,c){L(p,o,c)},d:function(p){p&&Q(o)}}}};if(await Promise.resolve(),!this.$$cn)return;let e={},n=Pt(this);for(let s of this.$$s)s in n&&(e[s]=[t(s)]);for(let s of this.attributes){let o=this.$$g_p(s.name);o in this.$$d||(this.$$d[o]=vt(o,s.value,this.$$p_d,"toProp"))}for(let s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});let i=()=>{this.$$r=!0;for(let s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){let o=vt(s,this.$$d[s],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,o)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(let s in this.$$l)for(let o of this.$$l[s]){let l=this.$$c.$on(s,o);this.$$l_u.set(o,l)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=vt(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function vt(t,e,n,i){let s=n[t]?.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var S=class{$$=void 0;$$set=void 0;$destroy(){Ft(this,1),this.$destroy=f}$on(e,n){if(!ft(n))return f;let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Jt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);function _e(t){let e;return{c(){e=a("div"),g(e,"class","background svelte-15zkok0")},m(n,i){L(n,e,i)},p:f,i:f,o:f,d(n){n&&Q(e)}}}var kt=class extends S{constructor(e){super(),tt(this,e,null,_e,P,{})}},oe=kt;function et(t,e){return Math.round(Math.random()*(e-t)+t)}function nt(t){return t[et(0,t.length-1)]}function re(t,e,n){let i=t.slice();return i[8]=e[n].name,i[9]=e[n].age,i[10]=e[n].proffesion,i[7]=e[n].gender,i}function ye(t){let e;return{c(){e=a("span"),e.textContent="Ingen"},m(n,i){L(n,e,i)},p:f,d(n){n&&Q(e)}}}function Ge(t){let e,n=at(t[3]),i=[];for(let s=0;s<n.length;s+=1)i[s]=le(re(t,n,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Ot()},m(s,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(s,o);L(s,e,o)},p(s,o){if(o&8){n=at(s[3]);let l;for(l=0;l<n.length;l+=1){let m=re(s,n,l);i[l]?i[l].p(m,o):(i[l]=le(m),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},d(s){s&&Q(e),zt(i,s)}}}function Ue(t){let e;return{c(){e=a("span"),e.textContent="..."},m(n,i){L(n,e,i)},p:f,d(n){n&&Q(e)}}}function le(t){let e,n,i=t[8]+"",s,o,l,m,p=t[9]+"",c,x,C=t[9]>=18?`, ${t[10]}`:"",F,y,W;return{c(){e=a("div"),n=a("span"),s=_(i),o=A(),l=a("span"),m=_("("),c=_(p),x=_("\xE5r"),F=_(C),y=_(")"),W=A(),g(n,"class","as-h4 light"),g(e,"class","sibling-item")},m(b,B){L(b,e,B),r(e,n),r(n,s),r(e,o),r(e,l),r(l,m),r(l,c),r(l,x),r(l,F),r(l,y),r(e,W)},p(b,B){B&8&&i!==(i=b[8]+"")&&k(s,i),B&8&&p!==(p=b[9]+"")&&k(c,p),B&8&&C!==(C=b[9]>=18?`, ${b[10]}`:"")&&k(F,C)},d(b){b&&Q(e)}}}function Le(t){let e,n,i,s,o,l,m,p,c,x,C,F,y,W,b,B,H,X,it,Y,R,st,V,T=(t[9]>=18?t[10]:"Barn")+"",v,G,Z,M,ct,U,gt,z,ut,Xt,It,Bt,Yt,ot,Ct,Vt,dt,Qt,Dt,O,j,_t,Rt;function $t(u,d){return u[3]===null?Ue:u[3].length>0?Ge:ye}let pt=$t(t,-1),w=pt(t);return{c(){e=a("div"),n=a("div"),i=a("div"),s=A(),o=a("div"),l=a("div"),m=a("div"),m.textContent="Navn",p=A(),c=a("div"),x=_(t[8]),C=A(),F=a("div"),y=a("div"),y.textContent="Alder",W=A(),b=a("div"),B=a("span"),H=_(t[9]),X=a("span"),X.textContent="\xE5r",it=A(),Y=a("div"),R=a("div"),R.textContent="Yrke",st=A(),V=a("div"),v=_(T),G=A(),Z=a("div"),M=a("div"),M.textContent="S\xF8sken",ct=A(),U=a("div"),w.c(),gt=A(),z=a("div"),ut=a("div"),ut.textContent="Bosted",Xt=A(),It=a("div"),Bt=_(t[4]),Yt=A(),ot=a("div"),Ct=a("div"),Ct.textContent="Kommer fra",Vt=A(),dt=a("div"),Qt=_(t[5]),Dt=A(),O=a("div"),j=a("button"),j.innerHTML="",g(i,"class","gender svelte-1xkihnl"),h(i,"show",!t[0]),h(i,"male",t[7]==="male"),h(i,"female",t[7]==="female"),g(m,"class","as-h5 light placeholder svelte-1xkihnl"),g(c,"class","as-h3 svelte-1xkihnl"),g(y,"class","as-h5 light placeholder svelte-1xkihnl"),g(B,"class","as-h3 svelte-1xkihnl"),g(X,"class","as-h4 light"),g(R,"class","as-h5 light placeholder svelte-1xkihnl"),g(V,"class","as-h3 svelte-1xkihnl"),g(M,"class","as-h5 light placeholder svelte-1xkihnl"),g(U,"class","sibling-list svelte-1xkihnl"),h(U,"left-padding",t[3]?.length>0),h(U,"c-gray",!t[3]?.length),h(U,"fs-italic",t[3]?.length===0),g(ut,"class","as-h5 light placeholder svelte-1xkihnl"),g(It,"class","as-h3 svelte-1xkihnl"),g(Ct,"class","as-h5 light placeholder svelte-1xkihnl"),g(dt,"class","as-h3 svelte-1xkihnl"),g(o,"class","card svelte-1xkihnl"),Lt(o,"filter","hue-rotate("+t[6]+"deg)"),g(j,"type","button"),g(j,"class","svelte-1xkihnl"),g(O,"class","randomize svelte-1xkihnl"),h(O,"hover",t[2]),g(n,"class","card-layout svelte-1xkihnl"),h(n,"show",t[1]),h(n,"animation",t[1]&&t[0]),g(e,"class","card-layer svelte-1xkihnl")},m(u,d){L(u,e,d),r(e,n),r(n,i),r(n,s),r(n,o),r(o,l),r(l,m),r(l,p),r(l,c),r(c,x),r(o,C),r(o,F),r(F,y),r(F,W),r(F,b),r(b,B),r(B,H),r(b,X),r(o,it),r(o,Y),r(Y,R),r(Y,st),r(Y,V),r(V,v),r(o,G),r(o,Z),r(Z,M),r(Z,ct),r(Z,U),w.m(U,null),r(o,gt),r(o,z),r(z,ut),r(z,Xt),r(z,It),r(It,Bt),r(o,Yt),r(o,ot),r(ot,Ct),r(ot,Vt),r(ot,dt),r(dt,Qt),r(n,Dt),r(n,O),r(O,j),_t||(Rt=Ut(j,"click",t[11]),_t=!0)},p(u,[d]){d&1&&h(i,"show",!u[0]),d&128&&h(i,"male",u[7]==="male"),d&128&&h(i,"female",u[7]==="female"),d&256&&k(x,u[8]),d&512&&k(H,u[9]),d&1536&&T!==(T=(u[9]>=18?u[10]:"Barn")+"")&&k(v,T),pt===(pt=$t(u,d))&&w?w.p(u,d):(w.d(1),w=pt(u),w&&(w.c(),w.m(U,null))),d&8&&h(U,"left-padding",u[3]?.length>0),d&8&&h(U,"c-gray",!u[3]?.length),d&8&&h(U,"fs-italic",u[3]?.length===0),d&16&&k(Bt,u[4]),d&32&&k(Qt,u[5]),d&64&&Lt(o,"filter","hue-rotate("+u[6]+"deg)"),d&4&&h(O,"hover",u[2]),d&2&&h(n,"show",u[1]),d&3&&h(n,"animation",u[1]&&u[0])},i:f,o:f,d(u){u&&Q(e),w.d(),_t=!1,Rt()}}}function We(t,e,n){let i="Einar, Olav, Harald, Bj\xF8rn, Per, Lars, Kjell, Knut, Andreas, Ole, Sven, Erik, Jan, Arne, Frode, Gunnar, H\xE5kon, Morten, Odd, Terje, Trond, Rune, Geir, Steinar, \xD8ystein, Vidar, Stian, Joakim, Espen, Magnus, Mathias, Trygve, Vegard, Dag, Are, Kim, Tor, Gunnhild, Roar, J\xF8rgen, P\xE5l, Kai, Ola, Leif, Tore, Kristoffer, Kristian, Sindre, Guttorm".split(", "),s="Ada, Agnes, Alva, Amalie, Andrea, Anette, Angelica, Anja, Anniken, Astrid, Aurora, Camilla, Caroline, Christina, Elin, Emilie, Emma, Eva, Frida, Hanna, Hanne, Hedda, Helene, Hilde, Ida, Ingrid, Isabella, Johanne, Julia, Karen, Kari, Karoline, Katarina, Kristin, Kristine, Lene, Lillian, Lina, Line, Live, Maja, Malin, Marianne, Marie, Marte, Merete, Mia, Monica, Nina".split(", "),o="L\xE6rer, Lege, Ingeni\xF8r, Advokat, Sykepleier, Arkitekt, Journalist, Politimann, Forsker, Kunstner, Snekker, Fris\xF8r, Baker, Kokk, Selger, Psykolog, Sj\xE5f\xF8r, Fotograf, Tannlege, Elektriker, Regnskapsf\xF8rer, Renholder, Veterin\xE6r, Barnehagel\xE6rer, Snekkersvenn, Barista, Tolk, Maskiningeni\xF8r, Idrettsut\xF8ver".split(", "),l="Oslo, Bergen, Stavanger, Trondheim, Kristiansand, Troms\xF8, Drammen, Fredrikstad, Skien, Sandnes, Sarpsborg, \xC5lesund, Sandefjord, Haugesund, T\xF8nsberg, Moss, Porsgrunn, Bod\xF8, Arendal, Hamar, Larvik, Halden, Lillehammer, Mo i Rana, Gj\xF8vik, Harstad, Molde, Horten, Ask\xF8y, Kongsberg, Alta, Kristiansund, Ytrebygda, Leirvik, Vennesla, \xC5s, Askim, Kleppe, Jessheim, Horten, Nesoddtangen, Bryne, Elverum, Stj\xF8rdalshalsen, Ski, Moelv, H\xF8nefoss".split(", "),m="Afghanistan, Albania, Algeria, Andorra, Angola, Antigua og Barbuda, Argentina, Armenia, Australia, \xD8sterrike, Aserbajdsjan, Bahamas, Bahrain, Bangladesh, Barbados, Hviterussland, Belgia, Belize, Benin, Bhutan, Bolivia, Bosnia og Herzegovina, Botswana, Brasil, Brunei, Bulgaria, Burkina Faso, Burundi, Kambodsja, Kamerun, Canada, Kapp Verde, Den sentralafrikanske republikk, Tsjad, Chile, Kina, Colombia, Komorene, Kongo, Costa Rica, Kroatia, Cuba, Kypros, Tsjekkia, Danmark, Djibouti, Dominica, Den dominikanske republikk, \xD8st-Timor, Ecuador, Egypt, El Salvador, Ekvatorial-Guinea, Eritrea, Estland, Eswatini, Etiopia, Fiji, Finland, Frankrike, Gabon, Gambia, Georgia, Tyskland, Ghana, Hellas, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Ungarn, Island, India, Indonesia, Iran, Irak, Irland, Israel, Italia, Elfenbenskysten, Jamaica, Japan, Jordan, Kasakhstan, Kenya, Kiribati, Kosovo, Kuwait, Kirgisistan, Laos, Latvia, Libanon, Lesotho, Liberia, Libya, Liechtenstein, Litauen, Luxembourg, Madagaskar, Malawi, Malaysia, Maldivene, Mali, Malta, Marshall\xF8yene, Mauritania, Mauritius, Mexico, Mikronesiaf\xF8derasjonen, Moldova, Monaco, Mongolia, Montenegro, Marokko, Mosambik, Myanmar, Namibia, Nauru, Nepal, Nederland, New Zealand, Nicaragua, Niger, Nigeria, Nord-Makedonia, Norge, Oman, Pakistan, Palau, Palestina, Panama, Papua Ny-Guinea, Paraguay, Peru, Filippinene, Polen, Portugal, Qatar, Romania, Russland, Rwanda, Saint Kitts og Nevis, Saint Lucia, Saint Vincent og Grenadinene, Samoa, San Marino, S\xE3o Tom\xE9 og Pr\xEDncipe, Saudi-Arabia, Senegal, Serbia, Seychellene, Sierra Leone, Singapore, Slovakia, Slovenia, Salomon\xF8yene, Somalia, S\xF8r-Afrika, S\xF8r-Korea, S\xF8r-Sudan, Spania, Sri Lanka, Sudan, Surinam, Sverige, Sveits, Syria, Taiwan, Tadsjikistan, Tanzania, Thailand, Togo, Tonga, Trinidad og Tobago, Tunisia, Tyrkia, Turkmenistan, Tuvalu, Uganda, Ukraina, De forente arabiske emirater, Storbritannia, USA, Uruguay, Usbekistan, Vanuatu, Vatikanstaten, Venezuela, Vietnam, Jemen, Zambia, Zimbabwe".split(", "),p,c=100,x=null,C,F=!1,y=!0,W,b,B,H,X=[],it,Y,R;Wt(()=>{V(()=>{c=500,n(1,F=!0),setTimeout(()=>{n(2,y=!1)},1e3)})});function st(v=!1){let G=nt(["male","female"]),Z=nt(G==="male"?i:s),M=v?et(Math.max(10,B-20),Math.min(80,B+20)):et(1,100),ct=nt(o),U=nt(m),gt=nt(l);return{hue:et(0,360),gender:G,name:Z,age:M,proffesion:ct,residence:U,from:gt}}function V(v){n(0,C=!0);let G=st();n(8,b=G.name),n(9,B=G.age),n(10,H=G.proffesion),n(4,it=G.residence),n(3,X=null),n(5,Y=G.from);let Z;{if(x=x??Date.now()+c,Z=(c-(x-Date.now()))/c,Z>1){n(0,C=!1),x=null,n(6,R=G.hue),n(7,W=G.gender),n(3,X=new Array(et(0,5)).fill(null).map(()=>st(!0))),v&&v();return}p=setTimeout(()=>V(v),Z*50)}}function T(){clearTimeout(p),x=null,V()}return[C,F,y,X,it,Y,R,W,b,B,H,T]}var Nt=class extends S{constructor(e){super(),tt(this,e,We,Le,P,{})}},ae=Nt;function Ze(t){let e,n,i,s;return e=new oe({}),i=new ae({}),{c(){Et(e.$$.fragment),n=A(),Et(i.$$.fragment)},m(o,l){xt(e,o,l),L(o,n,l),xt(i,o,l),s=!0},p:f,i(o){s||(J(e.$$.fragment,o),J(i.$$.fragment,o),s=!0)},o(o){lt(e.$$.fragment,o),lt(i.$$.fragment,o),s=!1},d(o){o&&Q(n),Ft(e,o),Ft(i,o)}}}var St=class extends S{constructor(e){super(),tt(this,e,null,Ze,P,{})}},ce=St;new ce({target:document.body});})();
