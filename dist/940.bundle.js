"use strict";(self.webpackChunkwallweb=self.webpackChunkwallweb||[]).push([[940],{5761:(e,t,s)=>{s.d(t,{Ao:()=>i,D8:()=>P,IN:()=>p,dC:()=>z,jL:()=>n,lH:()=>X,mb:()=>m,pV:()=>T,vZ:()=>c});var o=s(9073);const a=(0,o.BX)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),n={state:a,subscribe:e=>(0,o.B1)(a,(()=>e(a))),push(e,t){e!==a.view&&(a.view=e,t&&(a.data=t),a.history.push(e))},reset(e){a.view=e,a.history=[e]},replace(e){a.history.length>1&&(a.history[a.history.length-1]=e,a.view=e)},goBack(){if(a.history.length>1){a.history.pop();const[e]=a.history.slice(-1);a.view=e}},setData(e){a.data=e}},i={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>i.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return i.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(i.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;return o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!i.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;return o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(i.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(i.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=n.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},l=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),r=(0,o.BX)({enabled:l,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:r,subscribe:e=>(0,o.B1)(r.events,(()=>e((0,o.P9)(r.events[r.events.length-1])))),initialize(){r.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(r.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){r.connectedWalletId=e},click(e){if(r.enabled){const t={type:"CLICK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},track(e){if(r.enabled){const t={type:"TRACK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},view(e){if(r.enabled){const t={type:"VIEW",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}}},d=(0,o.BX)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),p={state:d,subscribe:e=>(0,o.B1)(d,(()=>e(d))),setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},u=(0,o.BX)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:u,subscribe:e=>(0,o.B1)(u,(()=>e(u))),setConfig(e){var t,s;c.initialize(),p.setChains(e.chains),p.setIsAuth(Boolean(e.enableAuthMode)),p.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),p.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),i.setModalVersionInStorage(),Object.assign(u,e)}};var h=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,g=(e,t,s)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const y="https://explorer-api.walletconnect.com",C="wcm",f="js-2.6.2";async function w(e,t){const s=((e,t)=>{for(var s in t||(t={}))v.call(t,s)&&g(e,s,t[s]);if(b)for(var s of b(t))I.call(t,s)&&g(e,s,t[s]);return e})({sdkType:C,sdkVersion:f},t),o=new URL(e,y);return o.searchParams.append("projectId",m.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const W=async e=>w("/w3m/v1/getDesktopListings",e),E=async e=>w("/w3m/v1/getMobileListings",e),L=async e=>w("/w3m/v1/getAllListings",e),O=e=>`${y}/w3m/v1/getWalletImage/${e}?projectId=${m.state.projectId}&sdkType=${C}&sdkVersion=${f}`,A=e=>`${y}/w3m/v1/getAssetImage/${e}?projectId=${m.state.projectId}&sdkType=${C}&sdkVersion=${f}`;var U=Object.defineProperty,D=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,k=(e,t,s)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const N=i.isMobile(),S=(0,o.BX)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),T={state:S,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=m.state;if("NONE"===e||"ALL"===t&&!e)return S.recomendedWallets;if(i.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await L(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),S.recomendedWallets=o}else{const{chains:e,isAuth:s}=p.state,o=e?.join(","),a=i.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:i.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:l}=N?await E(n):await W(n);S.recomendedWallets=Object.values(l)}return S.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))M.call(t,s)&&k(e,s,t[s]);if(D)for(var s of D(t))j.call(t,s)&&k(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=m.state,{recomendedWallets:a}=S;if("ALL"===o)return S.wallets;a.length?t.excludedIds=a.map((e=>e.id)).join(","):i.isArray(s)&&(t.excludedIds=s.join(",")),i.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),p.state.isAuth&&(t.sdks="auth_v1");const{page:n,search:l}=e,{listings:r,total:c}=N?await E(t):await W(t),d=Object.values(r),u=l?"search":"wallets";return S[u]={listings:[...S[u].listings,...d],total:c,page:n??1},{listings:d,total:c}},getWalletImageUrl:e=>O(e),getAssetImageUrl:e=>A(e),resetSearch(){S.search={listings:[],total:0,page:1}}},B=(0,o.BX)({open:!1}),P={state:B,subscribe:e=>(0,o.B1)(B,(()=>e(B))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=p.state;if(i.removeWalletConnectDeepLink(),p.setWalletConnectUri(e?.uri),p.setChains(e?.chains),n.reset("ConnectWallet"),s&&o)B.open=!0,t();else{const e=setInterval((()=>{const s=p.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),B.open=!0,t())}),200)}})),close(){B.open=!1}};var _=Object.defineProperty,x=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,H=(e,t,s)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const V=(0,o.BX)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),X={state:V,subscribe:e=>(0,o.B1)(V,(()=>e(V))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(V.themeMode=t),s&&(V.themeVariables=((e,t)=>{for(var s in t||(t={}))$.call(t,s)&&H(e,s,t[s]);if(x)for(var s of x(t))R.call(t,s)&&H(e,s,t[s]);return e})({},s))}},K=(0,o.BX)({open:!1,message:"",variant:"success"}),z={state:K,subscribe:e=>(0,o.B1)(K,(()=>e(K))),openToast(e,t){K.open=!0,K.message=e,K.variant=t},closeToast(){K.open=!1}}},940:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>a});var o=s(5761);class a{constructor(e){this.openModal=o.D8.open,this.closeModal=o.D8.close,this.subscribeModal=o.D8.subscribe,this.setTheme=o.lH.setThemeConfig,o.lH.setThemeConfig(e),o.mb.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(430).then(s.bind(s,3430));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.IN.setIsUiLoaded(!0)}}}}}]);