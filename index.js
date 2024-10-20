import{i as l,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="46590311-6ed07305336452fed03a33c90",b="image_type=photo&orientation=horizontal&safesearch=true";function h(o){return fetch(`${m}?key=${p}&q=${o}&${b}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(o){return o.map(({webformatURL:t,tags:n,likes:s,views:e,comments:r,downloads:i,largeImageURL:f})=>`
      <div class="photo-card">
        <a href="${f}" class="photo-link">
          <img src="${t}" alt="${n}" loading="lazy" class="gallery-image" data-source=${f}/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b><br>${s}
          </p>
          <p class="info-item">
            <b>Views</b><br>${e}
          </p>
          <p class="info-item">
            <b>Comments</b><br>${r}
          </p>
          <p class="info-item">
            <b>Downloads</b><br>${i}
          </p>
        </div>
      </div>`).join("")}const u={timeout:5e3,position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutUp",transitionInMobile:"bounceInDown",transitionOutMobile:"fadeOutUp",messageSize:"16px",theme:"dark",messageColor:"white"};function g(o){l.error({...u,backgroundColor:"#ef4040",message:`Error!<br><b>${o}</b><br>Please try again!`})}function O(o){l.error({...u,backgroundColor:"#ef4040",message:`Sorry, there are no images matching your <br><b>${o}</b> query.<br>Please try again!`})}function $(){l.info({...u,backgroundColor:"#ffa000",message:"Sorry, we can't search empty query.<br>Please try again!"})}const w=document.querySelector("form");document.querySelector("button");const a=document.querySelector(".gallery"),c=document.querySelector(".loader");w.addEventListener("submit",E);let S=new d(".gallery a",{captionsData:"alt",captionDelay:250});function E(o){o.preventDefault();const t=o.target[0].value.trim();if(t===""){$();return}c.hidden=!1,a.innerHTML="",h(t).then(n=>{if(n.hits.length===0){a.innerHTML="",c.hidden=!0,O(t);return}c.hidden=!0,a.innerHTML=y(n.hits),S.refresh()}).catch(n=>g(n))}
//# sourceMappingURL=index.js.map
