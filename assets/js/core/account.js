(function(){"use strict";
const GUEST_MEMBERSHIP=Object.freeze({role:"guest",isVvip:false,status:"guest"});
const state={ready:false,authenticated:null,user:null,membership:{role:"unknown",isVvip:false,status:"unknown"},captcha:{provider:"turnstile",siteKey:"",enabled:false,required:null,status:"unknown"},tools:new Map(),wa:"",error:null};
const LOGIN_REQUIRED_TOOLS=new Map([
  ["aiimage","Nexora AI Image"],
  ["animetoreal","Anime to Real"],
  ["animegallery","Nexora Anime Discover"],
  ["htmlvideo","HTML / WebGL to MP4"],
  ["safelinku","SafeLinku Bypass"],
  ["socialdownloader","Social Downloader"],
  ["fotolink","Foto to Link"],
  ["promptgenerate","Nexora Prompt Generator"],
  ["removebg","Remove BG"],
  ["enhancer","Upscale Image"],
  ["avatarstudio","Nexora Avatar Studio"]
]);
function safeReturnPath(value){if(!value)return "";try{const url=new URL(String(value),location.origin);if(url.origin!==location.origin||url.pathname==="/"||url.pathname.startsWith("//"))return "";return url.pathname+url.search+url.hash}catch{return ""}}
const accountQuery=new URLSearchParams(location.search);
const loginReturnPath=safeReturnPath(accountQuery.get("next"));
let turnstileLoader=null;
let resolveReady;const ready=new Promise(resolve=>{resolveReady=resolve});
const defaultRestrictedTools=new Map();
let verifiedAt=0,sessionFlight=null,accountRevision=0;
const UI_SESSION_TTL_MS=60000;
async function ensureAccess(id,options={}){
  await ready;
  if(options.refresh===true||(Date.now()-verifiedAt>=UI_SESSION_TTL_MS||(state.authenticated&&state.sessionExpiresAt&&Number(state.sessionExpiresAt)<=Date.now()))){
    if(!sessionFlight){const revision=accountRevision;sessionFlight=accountRequestWithTimeout().then(data=>{if(revision===accountRevision)hydrate(data)}).catch(()=>{if(revision===accountRevision)hydrate({authenticated:false},{error:"ACCOUNT_SESSION_UNAVAILABLE"})}).finally(()=>{sessionFlight=null});}
    await sessionFlight;
  }
  return guard(String(id||"").toLowerCase());
}
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cookie=n=>{const x=document.cookie.split(";").map(v=>v.trim()).find(v=>v.startsWith(n+"="));return x?decodeURIComponent(x.slice(n.length+1)):""};
async function api(options={}){const mutation=options.method&&!['GET'].includes(options.method);const response=await fetch("/api/account",{credentials:"same-origin",cache:"no-store",...options,headers:{Accept:"application/json",...(options.body?{"Content-Type":"application/json"}:{}),...(mutation?{"X-CSRF-Token":cookie("nx_account_csrf")}:{})}});const data=await response.json().catch(()=>({}));if(!response.ok||data.ok===false){const error=new Error(data.message||data.error||"Permintaan gagal.");error.code=String(data.error||"ACCOUNT_REQUEST_FAILED");error.status=response.status;error.retryAfter=Math.max(0,Number(data.retryAfter||response.headers.get("Retry-After")||0));throw error}return data;}
function cacheTools(){document.querySelectorAll(".tools-card[data-tool-id]").forEach(card=>state.tools.set(card.dataset.toolId,{id:card.dataset.toolId,name:card.getAttribute("aria-label")?.replace(/^Buka /,"")||card.dataset.toolId,accessLevel:card.dataset.accessLevel||"free"}));}
function ensureButton(){
  let b=document.getElementById("nxAccountButton");
  if(!b){
    b=document.createElement("button");b.id="nxAccountButton";b.className="nx-account-button";b.type="button";document.body.appendChild(b);
  }
  if(b.dataset.accountBound!=="1"){
    b.dataset.accountBound="1";
    b.addEventListener("click",()=>{if(!state.ready)return;open(state.authenticated?"profile":"login")});
  }
  return b;
}
function renderButton(){
  const b=ensureButton();
  if(!state.ready){
    b.disabled=true;b.setAttribute("aria-busy","true");b.setAttribute("aria-label","Memuat akun");
    b.classList.add("is-hydrating");b.classList.remove("is-vvip");
    b.innerHTML='<span class="nx-account-skeleton" aria-hidden="true"></span>';
    return;
  }
  b.disabled=false;b.removeAttribute("aria-busy");b.classList.remove("is-hydrating");
  b.classList.toggle("is-vvip",state.membership.isVvip);
  b.setAttribute("aria-label",state.authenticated?"Buka profil Nexora":"Login Nexora");
  b.innerHTML=`<i class="fas ${state.authenticated?state.membership.isVvip?'fa-crown':'fa-user':'fa-right-to-bracket'}"></i><span>${esc(state.authenticated?(state.user?.displayName||"Akun Nexora")+(state.membership.isVvip?" · VVIP":" · FREE"):"Login")}</span>`;
}
function shell(){let x=document.getElementById("nxAccountModal");if(x)return x;x=document.createElement("div");x.id="nxAccountModal";x.className="nx-account-backdrop";x.hidden=true;x.innerHTML='<section class="nx-account-modal" role="dialog" aria-modal="true"><header class="nx-account-head"><div><p>NEXORA ACCOUNT</p><h2 id="nxAccountTitle">Akun</h2><p id="nxAccountSubtitle"></p></div><button class="nx-account-close" type="button" aria-label="Tutup"><i class="fas fa-xmark"></i></button></header><div id="nxAccountBody"></div></section>';x.addEventListener("click",e=>{if(e.target===x||e.target.closest(".nx-account-close"))close()});document.body.appendChild(x);return x;}
function authForm(mode){const reg=mode==="register",forgot=mode==="forgot",recovery=mode==="recovery",captcha=!recovery&&(state.captcha.status!=="ready"||state.captcha.required);return `<form class="nx-account-form" id="nxAccountForm">${reg?'<label>Nama tampil<input name="displayName" maxlength="80" required></label>':''}${!recovery?'<label>Email<input name="email" type="email" autocomplete="email" required></label>':''}${!forgot?`<label>${recovery?'Password baru':'Password'}<input name="password" type="password" minlength="8" autocomplete="${recovery||reg?'new-password':'current-password'}" required></label>`:''}${captcha?'<div class="nx-account-captcha" data-account-captcha role="group" aria-label="Verifikasi CAPTCHA"><span>Memuat konfigurasi keamanan…</span></div>':''}<button class="nx-account-primary" type="submit" ${recovery?'':'disabled aria-disabled="true"'}>${forgot?'Kirim tautan pemulihan':recovery?'Simpan password baru':reg?'Buat akun FREE':'Login'}</button><p class="nx-account-message" id="nxAccountMessage" aria-live="polite"></p></form><div class="nx-account-links">${mode!=="login"?'<button data-account-view="login">Kembali ke login</button>':'<button data-account-view="register">Daftar akun</button><button data-account-view="forgot">Lupa password?</button>'}</div>`;}
function profile(){const m=state.membership,expires=m.expiresAt?new Intl.DateTimeFormat("id-ID",{dateStyle:"long",timeStyle:"short"}).format(new Date(m.expiresAt)):"Tidak ada masa aktif";return `<div class="nx-account-profile"><div class="nx-membership-card"><span>STATUS MEMBERSHIP</span><strong>${esc(m.role.toUpperCase())}</strong><span>${esc(m.status)} · ${esc(expires)}</span></div><form class="nx-account-form" id="nxProfileForm"><label>Nama tampil<input name="displayName" maxlength="80" value="${esc(state.user?.displayName)}" required></label><label>URL avatar<input name="avatarUrl" type="url" value="${esc(state.user?.avatarUrl||"")}"></label><button class="nx-account-primary" type="submit">Simpan profil</button><p class="nx-account-message" id="nxAccountMessage"></p></form>${!m.isVvip?'<button class="nx-account-wa" data-account-upgrade><i class="fab fa-whatsapp"></i> Upgrade ke VVIP</button>':''}<button class="nx-account-secondary" data-account-logout>Logout</button></div>`;}
function upgrade(tool){const name=tool?.name||"tool premium",msg=`Halo Admin Nexora, saya ingin upgrade VVIP untuk mengakses ${name}.\nEmail: ${state.user?.email||'belum login'}\nNama: ${state.user?.displayName||'-'}`,url=state.wa?`${state.wa}${state.wa.includes('?')?'&':'?'}text=${encodeURIComponent(msg)}`:"#";return `<div class="nx-account-profile"><div class="nx-membership-card"><span>VVIP ACCESS</span><strong>${esc(name)}</strong><span>Tool ini hanya dapat dijalankan oleh member VVIP aktif.</span></div>${!state.authenticated?'<button class="nx-account-primary" data-account-view="login">Login dahulu</button>':`<a class="nx-account-wa" href="${esc(url)}" ${state.wa?'target="_blank" rel="noopener"':''}><i class="fab fa-whatsapp"></i> Hubungi admin untuk upgrade</a>`}<button class="nx-account-secondary" data-account-close>Nanti saja</button></div>`;}
function open(view="login",tool=null){const x=shell(),body=x.querySelector("#nxAccountBody");x.querySelector("#nxAccountTitle").textContent={upgrade:"Khusus VVIP",profile:"Profil & Membership",register:"Daftar akun",forgot:"Pulihkan akun",recovery:"Password baru",login:"Login"}[view]||"Akun";x.querySelector("#nxAccountSubtitle").textContent=view==="upgrade"?"Upgrade dikelola langsung oleh admin Nexora.":"Satu akun untuk seluruh All Tools Nexora.";body.innerHTML=view==="profile"?profile():view==="upgrade"?upgrade(tool):authForm(view);x.hidden=false;document.body.style.overflow="hidden";bind(view,tool);}
function close(){shell().hidden=true;document.body.style.overflow="";}
function message(text,error=false){const x=document.getElementById("nxAccountMessage");if(x){x.textContent=text;x.classList.toggle("is-error",error)}}
function captchaBlocks(form){return form?.dataset.captchaGate!=="open"&&form?.dataset.captchaGate!=="verified";}
function syncSubmitState(form){const button=form?.querySelector("button[type='submit']");if(!button)return;const disabled=form.dataset.busy==="1"||captchaBlocks(form);button.disabled=disabled;button.setAttribute("aria-disabled",String(disabled));}
function busy(form,value,label){const button=form?.querySelector("button[type='submit']");if(!button)return;if(value){button.dataset.label=button.textContent;button.textContent=label||"Memproses…";}else if(button.dataset.label){button.textContent=button.dataset.label;delete button.dataset.label;}syncSubmitState(form);}
function loadTurnstile(){if(window.turnstile)return Promise.resolve(window.turnstile);if(turnstileLoader)return turnstileLoader;turnstileLoader=new Promise((resolve,reject)=>{const script=document.createElement("script");script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";script.async=true;script.defer=true;script.dataset.nexoraTurnstile="1";script.onload=()=>window.turnstile?resolve(window.turnstile):reject(new Error("CAPTCHA gagal dimuat."));script.onerror=()=>{script.remove();reject(new Error("CAPTCHA gagal dimuat."))};document.head.appendChild(script)}).catch(error=>{turnstileLoader=null;throw error});return turnstileLoader;}
function captchaAction(view){return view==="forgot"?"recovery":view;}
function captchaRetry(host,label="Coba lagi"){host.innerHTML=`<div class="nx-account-captcha-state"><span>${esc(label==="Muat ulang CAPTCHA"?"CAPTCHA gagal dimuat.":"Konfigurasi CAPTCHA gagal dimuat.")}</span><button type="button" data-account-captcha-retry>${esc(label)}</button></div>`;}
function removeCaptchaWidget(form){if(form.__captchaWidget!==undefined&&window.turnstile){try{window.turnstile.remove(form.__captchaWidget)}catch{}}delete form.__captchaWidget;delete form.dataset.captchaToken;}
async function retryCaptchaConfig(view,form){if(form.dataset.captchaConfigBusy==="1")return;form.dataset.captchaConfigBusy="1";form.dataset.captchaGate="pending";syncSubmitState(form);const host=form.querySelector("[data-account-captcha]");if(host)host.innerHTML="<span>Memuat ulang konfigurasi keamanan…</span>";try{await ensureAccess("",{refresh:true});if(state.error||state.captcha.status!=="ready")throw Object.assign(new Error("Konfigurasi CAPTCHA tidak tersedia."),{code:"CAPTCHA_CONFIG_UNAVAILABLE"});await mountCaptcha(view,form)}catch(error){state.captcha={...state.captcha,status:"error",required:null};form.dataset.captchaGate="config-error";if(host)captchaRetry(host,"Coba lagi");message("Konfigurasi CAPTCHA gagal dimuat. Periksa koneksi lalu coba lagi.",true);syncSubmitState(form)}finally{delete form.dataset.captchaConfigBusy}}
async function mountCaptcha(view,form){if(!form)return;const host=form.querySelector("[data-account-captcha]");if(view==="recovery"){form.dataset.captchaGate="open";syncSubmitState(form);return}if(state.captcha.status!=="ready"){form.dataset.captchaGate=state.captcha.status==="error"?"config-error":"pending";if(host){host.hidden=false;if(state.captcha.status==="error")captchaRetry(host,"Coba lagi");else host.innerHTML="<span>Memuat konfigurasi keamanan…</span>"}syncSubmitState(form);return}if(!state.captcha.required){if(host)host.hidden=true;form.dataset.captchaGate="open";syncSubmitState(form);return}if(host)host.hidden=false;if(!host||!state.captcha.enabled||!state.captcha.siteKey){form.dataset.captchaGate="config-error";if(host)captchaRetry(host,"Coba lagi");message("Konfigurasi CAPTCHA belum tersedia. Coba muat ulang.",true);syncSubmitState(form);return}removeCaptchaWidget(form);form.dataset.captchaGate="loading";host.innerHTML="<span>Memuat verifikasi keamanan…</span>";syncSubmitState(form);try{const turnstile=await loadTurnstile();if(!host.isConnected)return;host.replaceChildren();form.dataset.captchaGate="waiting";form.__captchaWidget=turnstile.render(host,{sitekey:state.captcha.siteKey,theme:"dark",action:captchaAction(view),callback:token=>{form.dataset.captchaToken=token;form.dataset.captchaGate="verified";message("");syncSubmitState(form)},"expired-callback":()=>{delete form.dataset.captchaToken;form.dataset.captchaGate="expired";message("CAPTCHA kedaluwarsa. Lakukan verifikasi ulang.",true);syncSubmitState(form)},"timeout-callback":()=>{delete form.dataset.captchaToken;form.dataset.captchaGate="expired";message("CAPTCHA kedaluwarsa. Lakukan verifikasi ulang.",true);syncSubmitState(form)},"error-callback":()=>{delete form.dataset.captchaToken;form.dataset.captchaGate="error";captchaRetry(host,"Muat ulang CAPTCHA");message("CAPTCHA gagal dimuat. Tekan “Muat ulang CAPTCHA”.",true);syncSubmitState(form)}});syncSubmitState(form)}catch(error){form.dataset.captchaGate="error";captchaRetry(host,"Muat ulang CAPTCHA");message("CAPTCHA gagal dimuat. Periksa koneksi lalu coba lagi.",true);syncSubmitState(form)}}
function resetCaptcha(form){delete form.dataset.captchaToken;if(form.__captchaWidget!==undefined&&window.turnstile){try{window.turnstile.reset(form.__captchaWidget);form.dataset.captchaGate="waiting"}catch{form.dataset.captchaGate="error"}}syncSubmitState(form);}
function retryText(seconds){const value=Math.max(0,Number(seconds||0));if(!value)return "beberapa menit";if(value<60)return `${Math.ceil(value)} detik`;return `${Math.ceil(value/60)} menit`;}
function accountErrorMessage(error){const code=String(error?.code||"").toUpperCase();if(code==="CAPTCHA_EXPIRED")return "CAPTCHA kedaluwarsa. Lakukan verifikasi ulang.";if(["CAPTCHA_FAILED","CAPTCHA_REJECTED","CAPTCHA_FAILED_ERROR"].includes(code))return "CAPTCHA gagal diverifikasi. Muat ulang lalu coba lagi.";if(code==="CAPTCHA_REQUIRED")return "Selesaikan verifikasi CAPTCHA terlebih dahulu.";if(["CAPTCHA_NOT_CONFIGURED","CAPTCHA_UNAVAILABLE","CAPTCHA_TIMEOUT","CAPTCHA_CONFIG_UNAVAILABLE"].includes(code))return "Layanan CAPTCHA belum tersedia. Coba muat ulang CAPTCHA.";if(code==="AUTH_EMAIL_COOLDOWN")return `Pendaftaran sementara dijeda karena batas email sedang tercapai. Coba lagi dalam ${retryText(error?.retryAfter)}.`;if(["ACCOUNT_RATE_LIMITED","OVER_REQUEST_RATE_LIMIT"].includes(code))return `Batas percobaan akun tercapai. Coba lagi dalam ${retryText(error?.retryAfter)}.`;if(["OVER_EMAIL_SEND_RATE_LIMIT","EMAIL_RATE_LIMIT_EXCEEDED"].includes(code))return "Kuota email Supabase sedang tercapai. Tunggu beberapa saat sebelum meminta email baru.";return error?.message||"Permintaan akun gagal.";}
function bind(view,tool){const body=document.getElementById("nxAccountBody");body.querySelectorAll("[data-account-view]").forEach(b=>b.addEventListener("click",()=>open(b.dataset.accountView,tool)));body.querySelector("[data-account-close]")?.addEventListener("click",close);body.querySelector("[data-account-upgrade]")?.addEventListener("click",()=>open("upgrade",tool));body.querySelector("[data-account-logout]")?.addEventListener("click",async event=>{const button=event.currentTarget;if(button.disabled)return;button.disabled=true;try{await api({method:"DELETE"});hydrate({authenticated:false});open("login")}catch(err){message(err.message,true);button.disabled=false;}});const authFormNode=body.querySelector("#nxAccountForm");if(authFormNode){authFormNode.dataset.captchaGate=view==="recovery"?"open":"pending";syncSubmitState(authFormNode);void mountCaptcha(view,authFormNode);authFormNode.addEventListener("click",event=>{const retry=event.target.closest?.("[data-account-captcha-retry]");if(!retry)return;if(state.captcha.status!=="ready"||!state.captcha.enabled)void retryCaptchaConfig(view,authFormNode);else void mountCaptcha(view,authFormNode)})}authFormNode?.addEventListener("submit",async e=>{e.preventDefault();const form=e.currentTarget;if(form.dataset.busy==="1")return;if(captchaBlocks(form)){message(state.captcha.status==="error"?"Konfigurasi CAPTCHA belum berhasil dimuat. Tekan “Coba lagi”.":"Tunggu konfigurasi CAPTCHA lalu selesaikan verifikasi keamanan.",true);return}form.dataset.busy="1";busy(form,true);const d=Object.fromEntries(new FormData(form));try{const recovery=view==="recovery";const result=await api({method:recovery?"PATCH":"POST",body:JSON.stringify({action:recovery?"reset-password":view,captchaToken:form.dataset.captchaToken||"",...d})});if(result.authenticated){hydrate(result);if(view==="login"&&loginReturnPath){location.assign(loginReturnPath);return}close()}else message(result.message||"Periksa email Anda.")}catch(err){message(accountErrorMessage(err),true)}finally{resetCaptcha(form);form.dataset.busy="0";busy(form,false)}});body.querySelector("#nxProfileForm")?.addEventListener("submit",async e=>{e.preventDefault();const form=e.currentTarget;if(form.dataset.busy==="1")return;form.dataset.captchaGate="open";form.dataset.busy="1";busy(form,true,"Menyimpan…");try{hydrate(await api({method:"PATCH",body:JSON.stringify({action:"profile",...Object.fromEntries(new FormData(form))})}));message("Profil berhasil disimpan.")}catch(err){message(err.message,true)}finally{form.dataset.busy="0";busy(form,false)}});}
function syncLoginRequiredCards(){cacheTools();document.querySelectorAll(".tools-card[data-tool-id]").forEach(card=>{const id=String(card.dataset.toolId||"").toLowerCase();if(!LOGIN_REQUIRED_TOOLS.has(id))return;card.dataset.loginRequired="true";card.classList.toggle("nx-login-required",state.ready&&!state.authenticated);const name=LOGIN_REQUIRED_TOOLS.get(id);card.setAttribute("aria-label",state.authenticated?`Buka ${name}`:`Login untuk membuka ${name}`)})}
function hydrate(data,meta={}){accountRevision++;verifiedAt=Date.now();state.sessionExpiresAt=data?.sessionExpiresAt||null;if(data?.toolAccess)state.toolAccess=data.toolAccess;const first=!state.ready;state.ready=true;state.authenticated=Boolean(data&&data.authenticated);state.user=data&&data.user||null;state.membership=data&&data.membership||GUEST_MEMBERSHIP;if(data&&data.captcha)state.captcha={...data.captcha,status:"ready"};else if(meta.error)state.captcha={...state.captcha,required:null,status:"error"};state.error=meta.error||null;renderButton();syncLoginRequiredCards();const detail={ready:true,authenticated:state.authenticated,user:state.user,membership:state.membership,error:state.error};window.dispatchEvent(new CustomEvent("nexora:account-ready",{detail}));if(first)resolveReady(detail);}
function guard(id){
  id=String(id||"").toLowerCase();cacheTools();
  if(!state.ready||state.error)return false;
  if((Date.now()-verifiedAt>=UI_SESSION_TTL_MS||(state.authenticated&&state.sessionExpiresAt&&Number(state.sessionExpiresAt)<=Date.now()))){void ensureAccess(id);return false;}
  if(state.membership.status==="suspended"){open("profile");return false}
  if((LOGIN_REQUIRED_TOOLS.has(id)||id==="comicreader")&&!requireLogin(id))return false;
  const serverTool=state.toolAccess?.[id];
  const tool=serverTool||state.tools.get(id)||defaultRestrictedTools.get(id);
  const protectedEntry=LOGIN_REQUIRED_TOOLS.has(id)||["aisong","aivideo","alightpremium","bigjpg-nexora","bmkg","comicreader","cryptomarket","danbooru","documentai","elevenlabs","fakeovo","genmail","getcode","imagevectorizer","ipintel","multiai","nexoraai","ocrintel","sertifikat","spaceexplorer","svgalight","webintel","autopdf"].includes(id);
  if(tool?.isActive===false)return false;
  if(!serverTool&&protectedEntry)return false;
  if(tool?.accessLevel==="vvip"&&(!state.membership.isVvip||(!state.membership.isAdmin&&!(Date.parse(state.membership.expiresAt)>Date.now())))){open("upgrade",{id,name:id});return false}
  return true;
}
function requireLogin(id){cacheTools();if(!state.ready){ready.then(()=>requireLogin(id));return false}if(state.authenticated&&!state.error&&state.membership.status!=="suspended")return true;const normalizedId=String(id||"").toLowerCase();const name=LOGIN_REQUIRED_TOOLS.get(normalizedId)||(normalizedId==="comicreader"?"Baca Komik":"fitur ini");open("login");const title=document.getElementById("nxAccountTitle");const subtitle=document.getElementById("nxAccountSubtitle");if(title)title.textContent=`Login untuk ${name}`;if(subtitle)subtitle.textContent=normalizedId==="comicreader"?"Login diperlukan untuk menggunakan Baca Komik.":"Masuk dengan akun NEXORA untuk melanjutkan. Akun provider pihak ketiga tetap terpisah.";return false}
let detachLoginDispatcher=null;
function attachLoginDispatcher(){if(detachLoginDispatcher||!window.NexoraTools||typeof window.NexoraTools.use!=="function")return Boolean(detachLoginDispatcher);detachLoginDispatcher=window.NexoraTools.use((toolId,context,next)=>ensureAccess(toolId).then(allowed=>allowed?next():false),1000);return true}
document.addEventListener("click",e=>{const card=e.target.closest?.(".tools-card[data-access-level='vvip']");if(card&&!state.membership.isVvip){e.preventDefault();e.stopImmediatePropagation();guard(card.dataset.toolId)}},true);
document.addEventListener("nexora:tools-rendered",syncLoginRequiredCards);
window.NexoraAccount={state,ready,guard,ensureAccess,requireLogin,open,canAccess:id=>guard(id),loginRequiredTools:LOGIN_REQUIRED_TOOLS};
attachLoginDispatcher();
window.addEventListener("nexora:tool-dispatcher-ready",attachLoginDispatcher);
async function loadSocialContact(){
  try{
    const social=await fetch("/api/database?resource=socials",{cache:"default"}).then(r=>r.json());
    state.wa=(social.data||[]).find(x=>x.key==="whatsapp_access")?.url||"";
  }catch{}
}
async function accountRequestWithTimeout(options){
  const timeoutMs=4200;
  if(typeof AbortController!=="function"){
    let timer;
    try{
      return await Promise.race([
        api(options||{}),
        new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error("ACCOUNT_BOOT_TIMEOUT")),timeoutMs)})
      ]);
    }finally{if(timer)clearTimeout(timer);}
  }
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),timeoutMs);
  try{return await api({...options,signal:controller.signal});}
  finally{clearTimeout(timer);}
}
async function boot(){
  shell();renderButton();
  void loadSocialContact();
  const hash=new URLSearchParams(location.hash.replace(/^#/,""));
  if(hash.get("access_token")&&hash.get("refresh_token")){
    try{
      hydrate(await accountRequestWithTimeout({method:"POST",body:JSON.stringify({action:"adopt-session",accessToken:hash.get("access_token"),refreshToken:hash.get("refresh_token"),expiresIn:hash.get("expires_in")})}));
      history.replaceState({},"",location.pathname+location.search);open("recovery");return;
    }catch{}
  }
  try{hydrate(await accountRequestWithTimeout());}
  catch(error){hydrate({authenticated:false,user:null,membership:GUEST_MEMBERSHIP},{error:error&&error.name==="AbortError"?"ACCOUNT_BOOT_TIMEOUT":"ACCOUNT_SESSION_UNAVAILABLE"});}
  if(accountQuery.get("account")==="login"&&!state.authenticated)requireLogin(accountQuery.get("tool")||"fitur");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
