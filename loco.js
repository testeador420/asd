var B=Object.defineProperty,F=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var j=(t,r,a)=>r in t?B(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,c=(t,r)=>{for(var a in r||(r={}))S.call(r,a)&&j(t,a,r[a]);if(v)for(var a of v(r))$.call(r,a)&&j(t,a,r[a]);return t},u=(t,r)=>F(t,D(r));var h=(t,r)=>{var a={};for(var n in t)S.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&v)for(var n of v(t))r.indexOf(n)<0&&$.call(t,n)&&(a[n]=t[n]);return a};import{i as V,a as f,j as e,c as p,b as o,H as T,C as H,r as d,S as Y,M as q,d as z,X as K,F as g,L as y,u as C,W as J,f as U,p as Q,e as W,P as E,I as X,g as G,h as Z,A as ee,k as I,R as te,l as N,m as re,n as ae,B as ne,q as se}from"./vendor.0016bab3.js";const le=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=a(l);fetch(l.href,s)}};le();const oe="8730c29fcceb3d775d49bb72d4208bec";function L(t){return`https://api.themoviedb.org/3${t}?api_key=${oe}&language=es-ES`}function x(t){return fetch(L(t)).then(r=>r.json())}function ie(t){return f(`/movie/${t}`,x)}function ce(t){return fetch(`${L("/movie/popular")}${t}`).then(r=>r.json())}const de=t=>`&page=${t+1}`;function me(){return V(de,ce)}function ue(t){return f(`/movie/${t}/credits`,x)}function he(t){return f(`/movie/${t}/videos`,x)}function fe(t){return f(`/person/${t}`,x)}function pe(t){return f(`/person/${t}/movie_credits`,x)}const m=a=>{var n=a,{className:t=""}=n,r=h(n,["className"]);return e("div",u(c({},r),{className:p("max-w-4xl mx-auto px-6",t)}))},ge=()=>e(m,{children:e("div",{className:"py-8 border-t border-gray-300 dark:border-gray-800",children:o("p",{className:"flex items-center justify-center",children:["Hecho con ",e(T,{className:"mx-2"})," y mucho ",e(H,{className:"mx-2"})]})})}),xe=a=>{var n=a,{className:t}=n,r=h(n,["className"]);return e("div",u(c({},r),{className:p("bg-white text-gray-900 rounded-md w-6 h-6 text-sm font-extrabold flex items-center justify-center",t),children:"R"}))};function be(t,r){const[a,n]=d.exports.useState(()=>{try{const s=window.localStorage.getItem(t);return s?JSON.parse(s):r}catch(s){return console.error(s),r}});return[a,s=>{try{const i=typeof s=="function"?s(a):s;n(i),window.localStorage.setItem(t,JSON.stringify(i))}catch(i){console.error(i)}}]}const ve=()=>{const[t,r]=be("is-dark-mode",!0);return d.exports.useEffect(()=>{document.documentElement.classList.toggle("dark",t)},[t]),e("button",{className:"active:scale-90 focus:outline-none",onClick:()=>r(!t),children:t?e(Y,{}):e(q,{})})},ye=({active:t=!0,onClose:r=()=>{}})=>{const a=d.exports.useRef(null);return d.exports.useEffect(()=>{!a.current||t&&a.current.focus()},[]),e("div",{className:p("absolute top-0 pt-16 mx-auto duration-200 inset-x-0 z-40",{"translate-y-0":t,"-translate-y-full":!t}),children:e(m,{className:"w-full text-black",children:o("div",{className:"px-6 rounded-lg bg-white/70 backdrop-blur-sm relative flex items-center h-16",children:[e(z,{}),e("input",{ref:a,type:"text",placeholder:"\xBFQue est\xE1s buscando?",className:"bg-transparent px-4 h-12 w-full rounded-md text-black placeholder-gray-900 focus:outline-none"}),e("button",{onClick:r,children:e(K,{})})]})})})};function Ne(t){const[r,a]=d.exports.useState(t);return[r,{on:()=>a(!0),off:()=>a(!1),toggle:()=>a(!r)}]}const we=({variant:t="dark"})=>{const[r,a]=Ne(!1),n=p("top-0 right-0 w-full absolute z-50 ",{"text-white bg-gray-900":t==="dark","text-white":t==="light"});return o(g,{children:[e(ye,{active:r,onClose:a.off}),e("div",{className:n,children:o(m,{className:"h-14 flex items-center",children:[e("h2",{className:"flex-1 text-xl font-extrabold",children:o(y,{to:"/",className:"inline-flex items-center",children:[e(xe,{className:"mr-4"}),"Explorador"]})}),e("div",{className:"flex items-center space-x-6",children:e(ve,{})})]})})]})},w=n=>{var l=n,{children:t,topbar:r="light"}=l,a=h(l,["children","topbar"]);var i,_;const s=C();return o(g,{children:[o(J,{children:[e("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),e("title",{children:a.title}),e("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),e("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap",rel:"stylesheet"}),e("meta",{name:"description",content:(i=a.description)!=null?i:"El mejor lugar para las mejores peliculas"}),e("link",{rel:"canonical",href:`${s.pathname}`}),e("meta",{name:"twitter:card",content:"summary_large_image"}),e("meta",{name:"twitter:creator",content:"@jgmateran"}),e("meta",{name:"twitter:domain",content:""}),e("meta",{property:"og:url",content:`${s.pathname}`}),e("meta",{property:"og:type",content:"website"}),e("meta",{property:"og:locale",content:"es_ES"}),e("meta",{property:"og:title",content:a.title}),a.image&&e("meta",{property:"og:image",content:a.image}),e("meta",{property:"og:description",content:(_=a.description)!=null?_:"El mejor lugar para las mejores peliculas"}),e("meta",{property:"og:site_name",content:""})]}),e(we,{variant:r}),e("main",{children:t}),e(ge,{})]})},ke=n=>{var l=n,{className:t,variant:r="primary"}=l,a=h(l,["className","variant"]);return e("button",u(c({},a),{className:p("active:scale-95 focus:ring-2 ring-blue-300 focus:outline-none uppercase font-semibold inline-flex items-center border text-sm border-transparent h-11 px-4 rounded-md",{"bg-blue-600 text-white":r==="primary","border-blue-600 bg-transparent text-blue-600":r==="outline"},t)}))},M=({to:t,children:r})=>e(y,{to:t,className:"active:scale-95 focus:ring-2 ring-blue-300 focus:outline-none uppercase font-semibold inline-flex items-center border text-sm border-transparent h-11 px-4 rounded-md bg-blue-600 text-white",children:r});function P(t){return U(Q(t),"dd MMMM yyyy",{locale:W})}const R=t=>o("div",{className:"text-white bg-gray-800 pt-14 relative",children:[t.backdrop_path&&e("img",{className:"absolute inset-0 w-full h-full object-cover",src:`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${t.backdrop_path}`,alt:t.title}),e("div",{className:"absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900/40 to-gray-900"}),e("div",{className:"relative",children:e(m,{className:"h-96 justify-center flex flex-col",children:o("div",{children:[e("div",{className:"mb-8 text-gray-200 text-sm",children:t.release_date&&P(t.release_date)}),e("h2",{className:"mb-8 text-4xl font-extrabold",children:t.title}),o("div",{className:"flex sm:space-x-2 sm:space-y-0 sm:items-center sm:flex-row flex-col space-y-2",children:[e("div",{children:o(M,{to:`/movie/${t.id}#overview`,children:[e(E,{className:"mr-3"}),"Reproducir"]})}),e("div",{children:o(M,{to:`/movie/${t.id}#overview`,children:[e(X,{className:"mr-3"}),"Mas informaci\xF3n"]})})]})]})})})]});function _e(t){const[r,a]=d.exports.useState(),n=()=>{if(!t)return;const l=G(Z(t.map(s=>s.results)));a(l)};return d.exports.useEffect(()=>{!t||n()},[t]),{movie:r,reload:n}}const O=()=>e("div",{className:"w-6 h-6 rounded-full border-transparent animate-spin border-4 border-t-blue-900"}),k=()=>o("div",{className:"fixed inset-0 w-full h-full flex flex-col items-center justify-center",children:[e(O,{}),e("h2",{className:"mt-6",children:"Cargando"})]}),Se={title:"404: Pagina no encontrada"},b=()=>e(w,u(c({},Se),{topbar:"dark",children:e("div",{className:"min-h-[calc(100vh-90px)] pt-14 flex items-center justify-center text-center",children:e("h2",{className:"text-5xl font-extrabold leading-normal",children:"\xA1Ups! algo ha salido mal"})})})),$e=({name:t})=>e("div",{className:"bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden relative after:pt-[150%] after:block",children:e("img",{className:"absolute w-full h-full inset-0 object-cover",src:`https://image.tmdb.org/t/p//w500/${t}`,alt:t})}),A=t=>o(y,{className:"focus:outline-none focus:scale-105 hover:scale-105 duration-150",to:`/movie/${t.id}`,children:[o("div",{className:"relative",children:[e($e,{name:t.poster_path}),e("div",{className:"absolute top-0 w-full p-2 text-right inset-x-0",children:e("div",{className:"text-xs py-1 px-2 inline-block rounded bg-red-600 text-white",children:t.vote_average})})]}),o("div",{className:"p-4",children:[e("div",{className:"text-base font-extrabold truncate",children:t.title}),e("div",{className:"text-xs text-gray-600 dark:text-gray-400",children:P(t.release_date)})]})]}),je={title:"El mejor lugar para las mejores pel\xEDculas"},Ce=()=>{const{data:t,error:r,setSize:a,isValidating:n}=me(),{movie:l}=_e(t);return r?e(b,{}):t?o(g,{children:[e(R,c({},l)),e(w,u(c({},je),{children:o(m,{className:"py-10",children:[e("h2",{className:"font-extrabold text-4xl mb-10",children:"Peliculas populares"}),e("div",{className:"grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8",children:t.map(s=>s.results.map(i=>e(A,c({},i),i.id)))}),e("div",{className:"mt-8 text-center",children:o(ke,{disabled:n,onClick:()=>a(s=>s+1),children:[e(ee,{className:"mr-2"}),n?"Cargando":"Cargar m\xE1s"]})})]})}))]}):e(k,{})},Ee=({src:t,alt:r})=>e("div",{className:"sm:w-14 sm:h-14 w-12 h-12 relative after:pt-[100%] after:block dark:bg-gray-800 bg-gray-300 rounded-full",children:e("img",{src:t,alt:r,className:"absolute inset-0 w-full h-full rounded-full object-cover"})}),Ie=({children:t})=>e("div",{children:o("div",{className:"flex items-center my-10 justify-center",children:[e("div",{className:"mr-4",children:e(O,{})}),e("h4",{className:"text-sm font-bold",children:t})]})}),Le=({id:t})=>{const{data:r,error:a}=ue(t);return a?null:r?o(g,{children:[r.cast.length>0&&e("h2",{className:"text-center mt-10 mb-10 text-3xl font-bold",children:"Reparto"}),e("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6",children:r.cast.filter(n=>n.profile_path).map(n=>o(y,{to:`/person/${n.id}`,className:"dark:text-gray-400 text-gray-700 flex items-center dark:active:bg-gray-800 dark:hover:bg-gray-800/60 py-2 px-3 rounded-md",children:[e("div",{children:e(Ee,{src:`https://image.tmdb.org/t/p//w500/${n.profile_path}`,alt:n.name})}),o("div",{className:"pl-4 overflow-hidden text-left",children:[e("h2",{className:"text-black dark:text-white font-bold truncate",children:n.name}),e("p",{className:"text-gray-700 dark:text-gray-400 text-sm truncate",children:n.character})]})]},n.id))})]}):e(Ie,{children:"Cargando reparto"})},Me=({id:t,name:r,type:a,onSelect:n=()=>{}})=>o("div",{onClick:()=>n(t),className:"hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-800/40 dark:active:bg-gray-800 cursor-pointer flex items-center p-4 border-b border-gray-300 dark:border-gray-800",children:[e("div",{children:e(E,{className:"mr-4 flex-1"})}),o("div",{className:"overflow-hidden text-left items-start justify-center",children:[e("h2",{className:"flex-1 truncate font-semibold",children:r}),e("p",{className:"text-sm dark:text-gray-400 text-gray-600",children:a})]})]}),Pe=({id:t})=>t?e("div",{className:"relative after:pt-[56.25%] after:block",children:e("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"absolute w-full h-full"})}):null,Re=({id:t})=>{const{error:r,data:a}=he(t),[n,l]=d.exports.useState("");return d.exports.useEffect(()=>{if(!a)return;const[s]=a.results;!s||l(s.key)},[a]),r||!a?null:o("div",{className:"my-10",children:[e("div",{className:"mb-10",children:a.results.map(s=>e(Me,{id:s.key,name:s.name,type:s.type,onSelect:l},s.id))}),e(Pe,{id:n})]})},Oe=()=>{const t=I(),r=C(),{data:a,error:n}=ie(Number(t.id));return d.exports.useEffect(()=>{if(!r.hash||!a)return;const l=document.querySelector(r.hash);l&&l.scrollIntoView()},[a,r]),n?e(b,{}):a?o(w,{title:a.title,image:`https://image.tmdb.org/t/p/w500/${a.backdrop_path}`,description:a.overview,children:[e(R,c({},a)),e(m,{className:"py-10",children:o("div",{className:"text-center",children:[a.overview&&o(g,{children:[e("h2",{id:"overview",className:"text-3xl font-extrabold mb-4",children:"Sinopsis"}),e("p",{className:"leading-7 dark:text-gray-400 text-gray-700",children:a.overview})]}),e(Re,{id:a.id}),e(Le,{id:a.id})]})})]}):e(k,{})},Ae=({id:t})=>{const{data:r,error:a}=pe(t);return a?e(b,{}):r?e("div",{className:"mt-10 grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8",children:r.cast.map(n=>!n.poster_path||!n.release_date?null:e(A,c({},n),n.id))}):null},Be=()=>{const t=I(),{data:r,error:a}=fe(Number(t.id));return a?e(b,{}):r?e(w,{topbar:"dark",title:r.name,description:r.biography,image:`https://image.tmdb.org/t/p//w500/${r.profile_path}`,children:o(m,{className:"pt-14 pb-10",children:[o("div",{className:"flex items-center flex-col mt-16",children:[e("div",{className:"h-60 w-60 rounded-full flex flex-col items-center p-1 bg-gradient-to-r from-purple-600 to-blue-600",children:e("img",{className:"h-full w-full object-cover rounded-full",src:`https://image.tmdb.org/t/p//w500/${r.profile_path}`,alt:r.name})}),e("p",{className:"mt-10 dark:text-gray-400 text-gray-600",children:r.known_for_department}),e("h2",{className:"text-4xl mb-4 mt-3 font-extrabold",children:r.name}),e("p",{className:"dark:text-gray-300 leading-7 text-center",children:r.biography})]}),e(Ae,{id:r.id})]})}):e(k,{})};function Fe(){return e("div",{className:"min-h-screen text-black dark:bg-gray-900 dark:text-white",children:o(te,{children:[e(N,{path:"/",element:e(Ce,{})}),e(N,{path:"/movie/:id",element:e(Oe,{})}),e(N,{path:"/person/:id",element:e(Be,{})}),e(N,{path:"*",element:e(b,{})})]})})}re.render(e(ae.StrictMode,{children:e(ne,{children:e(se,{children:e(Fe,{})})})}),document.getElementById("root"));
