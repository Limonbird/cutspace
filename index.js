const e=document.querySelector(".site"),t=document.querySelector(".header"),r=document.querySelector(".header__burger"),o=document.querySelector(".intro-form"),i=[o.querySelector(".intro-form__input"),o.querySelector(".intro-form__button")];i.forEach((e=>{e.addEventListener("focus",(()=>{o.classList.add("intro-form--active")}))})),i.forEach((e=>{e.addEventListener("blur",(()=>{o.classList.remove("intro-form--active")}))})),o.addEventListener("submit",(e=>{e.preventDefault(),alert("Заглушка для отправки формы"),o.reset()})),r.addEventListener("click",(()=>{e.classList.toggle("site--menu-opened")}));const n=document.querySelectorAll(".header__link"),s=()=>{e.classList.remove("site--menu-opened")};n.forEach((e=>{e.addEventListener("click",(()=>{n.forEach((e=>{e.classList.remove("header__link--active")})),e.classList.add("header__link--active"),window.innerWidth<768&&s()}))}));const c=document.querySelectorAll(".footer-unit"),l=document.querySelectorAll(".footer-unit__title"),d=document.querySelectorAll(".footer-unit__list");l.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(window.innerWidth<576){c[t].classList.toggle("footer-unit--expanded");const e=d[t];e.style.height&&"0px"!==e.style.height?e.style.height="0px":e.style.height=e.scrollHeight+"px"}}))}));const a=()=>{r.classList.remove("header__burger--ontop")};new IntersectionObserver((()=>{0===window.scrollY?a():r.classList.add("header__burger--ontop")}),{threshold:1}).observe(t);const u=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting&&e.intersectionRatio>=.5){const r=e.target.getAttribute("id");r&&(t.querySelector(".header__link--active").classList.remove("header__link--active"),t.querySelector(`[href="#${r}"]`).classList.add("header__link--active"))}}))}),{threshold:.5});document.querySelectorAll(".page__section").forEach((e=>u.observe(e)));window.addEventListener("resize",((e,t=250)=>{let r;return()=>{clearTimeout(r),r=setTimeout((()=>{e()}),t)}})((()=>{window.innerWidth>=768&&e.classList.contains("site--menu-opened")&&s(),window.innerWidth>=576&&(d.forEach((e=>{e.style.removeProperty("height")})),c.forEach((e=>{e.classList.remove("footer-unit--expanded")}))),window.innerWidth<768&&0===window.scrollY&&a()})));