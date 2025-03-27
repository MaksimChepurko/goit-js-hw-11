import{a as d,S as y,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();d.defaults.baseURL="https://pixabay.com/api/";const g="49354290-35d6e1dc5d842ed86975730ff",L=r=>({params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}});function b(r){return new Promise((o,s)=>{d.get("",L(r)).then(a=>{if(a.data.total!==0){o(a.data.hits);return}else{s(`Sorry, there are no images matching your ${r}. Please try again!`);return}}).catch(a=>{s(a.message)})})}const q=new y(".item a",{captions:!0,captionsData:"alt",captionDelay:1e3});function v(r,o){const s=r.map(({largeImageURL:e,webformatURL:t,tags:i,likes:m,views:f,comments:p,downloads:h})=>`
    <li class= "item">
      <a href="${e}">
        <img class= "item-img" src="${t}" alt="${i}" />
        <div class = "item-descrp">
          <table>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comment</th>
              <th>Downloads</th>
            </tr>
            <tr>
              <td>${m}</td>
              <td>${f}</td>
              <td>${p}</td>
              <td>${h}</td>
            </tr>
          </table>
        </div>
      </a>
    </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".item-img").forEach(e=>e.onload=()=>e.classList.add("loaded")),q.refresh()}function S(){const r=document.querySelector(".gallery");r&&r.replaceChildren()}const n=document.querySelector(".form"),$=document.querySelector(".gallery"),u=document.querySelector(".loader");function O(){u.classList.add("active")}function w(){u.classList.remove("active")}const l=()=>n.reset();n.addEventListener("submit",r=>{r.preventDefault(),S();const o=n.querySelector('[name="search-text"]').value.trim();if(o!=="")O(),b(o).then(s=>{v(s,$)}).catch(s=>{c.error({message:s,position:"center",timeout:2e3})}).finally(()=>{w(),l()});else{c.warning({message:"Field must not be empty!",position:"center",timeout:2e3}),l();return}});
//# sourceMappingURL=index.js.map
