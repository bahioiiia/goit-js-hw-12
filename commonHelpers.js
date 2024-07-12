import{a as l,S as d,i as c}from"./assets/vendor-b11e2a50.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function g(r,n=1,t=12){const e=`https://pixabay.com/api/?${new URLSearchParams({key:"44785846-fbfadd775113e3685d7630ccf",q:r,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:t,page:n})}`;return await l.get(e).then(o=>o.data.hits).catch(o=>console.log(o))}function u(){const r=document.getElementById("gallery");r.innerHTML=""}let i;function f(r){document.getElementById("gallery").insertAdjacentHTML("beforeend",r.map(t=>`
        <div class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong><br>${t.likes}</p>
                <p><strong>Views:</strong><br>${t.views}</p>
                <p><strong>Comments:</strong><br>${t.comments}</p>
                <p><strong>Downloads:</strong><br>${t.downloads}</p>
            </div>
        </div>`).join("")),i?i.refresh():i=new d(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function p(){const r=document.getElementById("loader");r.style.display="inline-block"}function m(){const r=document.getElementById("loader");r.style.display="none"}function y(){c.warning({title:"Not found",message:"Sorry, there are no images matching search query. Please try again!",position:"topRight"})}function h(r){c.error({title:"Error",message:r.message,position:"topRight"})}document.getElementById("searchButton").addEventListener("click",async()=>{const r=document.getElementById("searchInput").value.trim();if(r==="")return;p(),u();const n=24;try{const t=await g(r,n);t.length===0?y():f(t)}catch(t){h(t)}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map
