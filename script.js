document.addEventListener("DOMContentLoaded",()=>{
  const path=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll("nav a").forEach(a=>{
    if(a.getAttribute("href")===path)a.classList.add("active");
  });
  const tabs=document.querySelectorAll(".tab");
  const panels=document.querySelectorAll(".tab-panel");
  tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
      tabs.forEach(t=>t.classList.remove("active"));
      panels.forEach(p=>p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});