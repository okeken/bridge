import{C as t,S as e,i as s,s as a,J as n,e as o,c,a as l,d as r,b as i,f as d,F as h,K as u,L as m,M as p,x as f,u as $,N as g,t as x,g as b,h as v,j as E,m as w,E as y,o as I,O as k,P as C,v as U,k as N,l as S,n as B,r as D,w as T,Q as q}from"./vendor-d7714359.js";const L=t("light");function M(){L.update((t=>(t="light"==t?"dark":"light",localStorage.setItem("mode",t),document.querySelector("html").dataset.mode=t,t)))}function V(){const t=localStorage.getItem("mode"),e=window.matchMedia("(prefers-color-scheme: dark)").matches;let s;var a;s="light"===(a=t)||"dark"===a?t:e?"dark":"light",L.set(s),document.querySelector("html").dataset.mode=s}function F(t){let e,s,a,g;const E=t[4].default,w=n(E,t,t[3],null),y=w||function(t){let e;return{c(){e=x(t[0])},l(s){e=b(s,t[0])},m(t,s){d(t,e,s)},p(t,s){1&s&&v(e,t[0])},d(t){t&&r(e)}}}(t);return{c(){e=o("button"),y&&y.c(),this.h()},l(t){e=c(t,"BUTTON",{class:!0});var s=l(e);y&&y.l(s),s.forEach(r),this.h()},h(){e.disabled=t[1],i(e,"class","svelte-79hytl")},m(n,o){d(n,e,o),y&&y.m(e,null),s=!0,a||(g=h(e,"click",t[2]),a=!0)},p(t,[a]){w?w.p&&(!s||8&a)&&u(w,E,t,t[3],s?p(E,t[3],a,null):m(t[3]),null):y&&y.p&&(!s||1&a)&&y.p(t,s?a:-1),(!s||2&a)&&(e.disabled=t[1])},i(t){s||(f(y,t),s=!0)},o(t){$(y,t),s=!1},d(t){t&&r(e),y&&y.d(t),a=!1,g()}}}function _(t,e,s){let{$$slots:a={},$$scope:n}=e,{text:o="Click me"}=e,{disabled:c=!1}=e;const l=g();return t.$$set=t=>{"text"in t&&s(0,o=t.text),"disabled"in t&&s(1,c=t.disabled),"$$scope"in t&&s(3,n=t.$$scope)},[o,c,function(){l("click",{})},n,a]}class j extends e{constructor(t){super(),s(this,t,_,F,a,{text:0,disabled:1})}}function A(t){let e,s,a;const h=t[4].default,g=n(h,t,t[3],null),E=g||function(t){let e;return{c(){e=x(t[0])},l(s){e=b(s,t[0])},m(t,s){d(t,e,s)},p(t,s){1&s&&v(e,t[0])},d(t){t&&r(e)}}}(t);return{c(){e=o("h1"),E&&E.c(),this.h()},l(t){e=c(t,"H1",{class:!0,style:!0});var s=l(e);E&&E.l(s),s.forEach(r),this.h()},h(){i(e,"class","title svelte-1951ugc"),i(e,"style",s=(t[1]?`margin-top: ${t[1]};`:"")+" "+(t[2]?`margin-bottom: ${t[2]};`:""))},m(t,s){d(t,e,s),E&&E.m(e,null),a=!0},p(t,[n]){g?g.p&&(!a||8&n)&&u(g,h,t,t[3],a?p(h,t[3],n,null):m(t[3]),null):E&&E.p&&(!a||1&n)&&E.p(t,a?n:-1),(!a||6&n&&s!==(s=(t[1]?`margin-top: ${t[1]};`:"")+" "+(t[2]?`margin-bottom: ${t[2]};`:"")))&&i(e,"style",s)},i(t){a||(f(E,t),a=!0)},o(t){$(E,t),a=!1},d(t){t&&r(e),E&&E.d(t)}}}function H(t,e,s){let{$$slots:a={},$$scope:n}=e,{title:o="Nahmii"}=e,{marginTop:c=""}=e,{marginBottom:l=""}=e;return t.$$set=t=>{"title"in t&&s(0,o=t.title),"marginTop"in t&&s(1,c=t.marginTop),"marginBottom"in t&&s(2,l=t.marginBottom),"$$scope"in t&&s(3,n=t.$$scope)},[o,c,l,n,a]}class O extends e{constructor(t){super(),s(this,t,H,A,a,{title:0,marginTop:1,marginBottom:2})}}function G(t){let e,s;const a=t[1].default,h=n(a,t,t[0],null);return{c(){e=o("div"),h&&h.c(),this.h()},l(t){e=c(t,"DIV",{class:!0});var s=l(e);h&&h.l(s),s.forEach(r),this.h()},h(){i(e,"class","card svelte-di3y99")},m(t,a){d(t,e,a),h&&h.m(e,null),s=!0},p(t,[e]){h&&h.p&&(!s||1&e)&&u(h,a,t,t[0],s?p(a,t[0],e,null):m(t[0]),null)},i(t){s||(f(h,t),s=!0)},o(t){$(h,t),s=!1},d(t){t&&r(e),h&&h.d(t)}}}function J(t,e,s){let{$$slots:a={},$$scope:n}=e;return t.$$set=t=>{"$$scope"in t&&s(0,n=t.$$scope)},[n,a]}class K extends e{constructor(t){super(),s(this,t,J,G,a,{})}}const P=t=>({}),Q=t=>({});function R(t){let e,s;return{c(){e=o("h1"),s=x(t[0]),this.h()},l(a){e=c(a,"H1",{class:!0});var n=l(e);s=b(n,t[0]),n.forEach(r),this.h()},h(){i(e,"class","svelte-1fa1024")},m(t,a){d(t,e,a),y(e,s)},p(t,e){1&e&&v(s,t[0])},d(t){t&&r(e)}}}function z(t){let e;const s=t[4].footer,a=n(s,t,t[5],Q),h=a||function(t){let e,s,a;return s=new j({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),s.$on("click",t[3]),{c(){e=o("div"),E(s.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var a=l(e);w(s.$$.fragment,a),a.forEach(r),this.h()},h(){i(e,"class","footer svelte-1fa1024")},m(t,n){d(t,e,n),I(s,e,null),a=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){a||(f(s.$$.fragment,t),a=!0)},o(t){$(s.$$.fragment,t),a=!1},d(t){t&&r(e),U(s)}}}(t);return{c(){h&&h.c()},l(t){h&&h.l(t)},m(t,s){h&&h.m(t,s),e=!0},p(t,n){a&&a.p&&(!e||32&n)&&u(a,s,t,t[5],e?p(s,t[5],n,P):m(t[5]),Q)},i(t){e||(f(h,t),e=!0)},o(t){$(h,t),e=!1},d(t){h&&h.d(t)}}}function W(t){let e;return{c(){e=x("Close")},l(t){e=b(t,"Close")},m(t,s){d(t,e,s)},d(t){t&&r(e)}}}function X(t){let e,s,a,i,h,g=t[0]&&R(t);const x=t[4].default,b=n(x,t,t[5],null);let v=t[1]&&z(t);return{c(){g&&g.c(),e=N(),s=o("div"),b&&b.c(),a=N(),v&&v.c(),i=S()},l(t){g&&g.l(t),e=B(t),s=c(t,"DIV",{});var n=l(s);b&&b.l(n),n.forEach(r),a=B(t),v&&v.l(t),i=S()},m(t,n){g&&g.m(t,n),d(t,e,n),d(t,s,n),b&&b.m(s,null),d(t,a,n),v&&v.m(t,n),d(t,i,n),h=!0},p(t,s){t[0]?g?g.p(t,s):(g=R(t),g.c(),g.m(e.parentNode,e)):g&&(g.d(1),g=null),b&&b.p&&(!h||32&s)&&u(b,x,t,t[5],h?p(x,t[5],s,null):m(t[5]),null),t[1]?v?(v.p(t,s),2&s&&f(v,1)):(v=z(t),v.c(),f(v,1),v.m(i.parentNode,i)):v&&(D(),$(v,1,1,(()=>{v=null})),T())},i(t){h||(f(b,t),f(v),h=!0)},o(t){$(b,t),$(v),h=!1},d(t){g&&g.d(t),t&&r(e),t&&r(s),b&&b.d(t),t&&r(a),v&&v.d(t),t&&r(i)}}}function Y(t){let e,s,a,n,u,m,p;return a=new K({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){e=o("div"),s=o("div"),E(a.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=l(e);s=c(n,"DIV",{class:!0});var o=l(s);w(a.$$.fragment,o),o.forEach(r),n.forEach(r),this.h()},h(){i(s,"class","container svelte-1fa1024"),i(e,"class","modal-backdrop svelte-1fa1024")},m(n,o){d(n,e,o),y(e,s),I(a,s,null),u=!0,m||(p=h(e,"click",t[2]),m=!0)},p(t,[e]){const s={};35&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){u||(f(a.$$.fragment,t),k((()=>{n||(n=C(e,q,{},!0)),n.run(1)})),u=!0)},o(t){$(a.$$.fragment,t),n||(n=C(e,q,{},!1)),n.run(0),u=!1},d(t){t&&r(e),U(a),t&&n&&n.end(),m=!1,p()}}}function Z(t,e,s){let{$$slots:a={},$$scope:n}=e,{title:o=""}=e,{footer:c=!0}=e;const l=g();return t.$$set=t=>{"title"in t&&s(0,o=t.title),"footer"in t&&s(1,c=t.footer),"$$scope"in t&&s(5,n=t.$$scope)},[o,c,function(t){t.srcElement.classList.contains("modal-backdrop")&&l("cancel")},function(){l("cancel")},a,n]}class tt extends e{constructor(t){super(),s(this,t,Z,Y,a,{title:0,footer:1})}}const et=t(""),st=t("0x"),at=t(!1),nt=[{chainId:"0x1",chainName:"Ethereum Mainnet",isSupported:!0,L2:!1,rpcUrls:["https://mainnet.infura.io/v3/f36942ff00514b7fb154a652fa510972"],blockExplorerUrls:["https://etherscan.io"],companionChainId:"0x15af",standardBridge:"0x2fCE9b92a64c1DDf14a1A9E5Ec6D4e4C7C9F4Fdd"},{chainId:"0x3",chainName:"Ropsten Testnet",isSupported:!0,L2:!1,rpcUrls:["https://ropsten.infura.io/v3/f36942ff00514b7fb154a652fa510972"],blockExplorerUrls:["https://ropsten.etherscan.io"],companionChainId:"0x15b1",standardBridge:"0x21De2607E90edb1736bc460a4cd58c0FCd74ABcc"},{chainId:"0x15af",chainName:"Nahmii Mainnet",isSupported:!0,L2:!0,companionChainId:"0x1",rpcUrls:["https://l2.nahmii.io"],blockExplorerUrls:["https://explorer.nahmii.io"]},{chainId:"0x15b1",chainName:"Nahmii Testnet",isSupported:!0,L2:!0,companionChainId:"0x3",rpcUrls:["https://l2.testnet.nahmii.io"],blockExplorerUrls:["https://explorer.testnet.nahmii.io"]}];async function ot(t){et.set(t)}async function ct(t){let e;const s=st.subscribe((t=>{e=t[0]}));0===t.length||t[0]!==e&&st.set(t),s()}const lt=async()=>{const t=window.ethereum;if(!t)return!1;try{const e=await t.request({method:"eth_chainId"});et.set(e),t.on("chainChanged",await ot);const s=await t.request({method:"eth_requestAccounts"});return t.on("accountsChanged",await ct),st.set(s),at.set(!0),!0}catch(e){return 4001===e.code&&console.log("User rejected request"),!1}},rt=async t=>{let e=nt.find((e=>e.chainId==t));return e||(e={chainId:t,chainName:"Unsupported",isSupported:!1}),e},it=async t=>{const e=window.ethereum;if(e)try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]})}catch(s){if(4902===s.code){const{chainName:e,rpcUrls:s,blockExplorerUrls:a}=await rt(t);await dt(t,e,s,a)}else console.error(s)}else console.log("User does not have an Ethereum provider installed")},dt=async(t,e,s,a)=>{const n=window.ethereum;if(n)try{await n.request({method:"wallet_addEthereumChain",params:[{chainId:t,chainName:e,rpcUrls:s,blockExplorerUrls:a,nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18}}]})}catch(o){console.log(o)}};export{j as B,K as C,O as G,tt as M,it as a,lt as c,rt as f,at as i,L as m,et as n,V as s,M as t,st as w};
