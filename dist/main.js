(()=>{"use strict";const e=document.querySelector(".todos-container");function t(e,t){const o=document.createElement(e);return o.classList=t,o}function o(o){const c=t("div","todo"),n=t("div","todo-panel-left"),d=t("div","todo-panel-right"),r=t("i","far fa-circle");n.appendChild(r);const p=t("p","todo-text");p.textContent=o,n.appendChild(p);const l=t("p","time-submitted");l.textContent="5 mins ago",d.appendChild(l);const a=t("i","fas fa-trash-alt");d.appendChild(a),c.appendChild(n),c.appendChild(d),e.appendChild(c)}function c(e){return e.classList.toggle("active")}console.log("henlo world");let n=[];const d={projectName:"Default Project",projectDescription:"This is a description for a project",projectTodos:[]};d.projectTodos+=o("do laundry"),n+=d,d.projectTodos+=o("watch tv"),d.projectTodos+=o("finish homework");const r=document.querySelector(".add-project"),p=document.querySelector(".add-project-popup"),l=document.querySelector(".submit-project"),a=document.querySelector(".cancel-project"),i=(document.querySelectorAll(".project"),document.querySelector(".add-todo")),s=document.querySelector(".add-todo-popup"),u=document.querySelector(".cancel-todo");i.addEventListener("click",(()=>{c(i),c(s)})),r.addEventListener("click",(()=>{c(r),c(p)})),u.addEventListener("click",(()=>{c(i),c(s)})),a.addEventListener("click",(()=>{c(p),c(r)})),l.addEventListener("click",(()=>{let e={projectName:"",projectDescription:"",projectTodos:[]};e.projectName=document.getElementById("project-name-popup").value,e.projectDescription=document.getElementById("project-description-popup").value;let o=e.projectName.replace(/\s+/g,"");console.log(o),function(){const e=document.querySelector(".projects-container"),o=document.getElementById("project-name-popup").value,n=t("div","project");n.textContent=o;const d=t("i","fas fa-trash-alt");n.appendChild(d),e.appendChild(n);const r=document.querySelector(".add-project"),p=document.querySelector(".add-project-popup");c(r),c(p)}()}))})();