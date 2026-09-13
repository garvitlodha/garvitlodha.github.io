document.addEventListener("DOMContentLoaded",()=>{
  const current=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll("nav a").forEach(a=>{
    if(a.getAttribute("href")===current)a.classList.add("active");
  });
  const tabs=document.querySelectorAll(".tab");
  const panels=document.querySelectorAll(".tab-panel");
  tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
      tabs.forEach(t=>t.classList.remove("active"));
      panels.forEach(p=>p.classList.remove("active"));
      tab.classList.add("active");
      const panel=document.getElementById(tab.dataset.tab);
      if(panel) panel.classList.add("active");
    });
  });
});
