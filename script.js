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
document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("contact-form");
  if(!form) return;
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const subject=document.getElementById("subject").value.trim();
    const message=document.getElementById("message").value.trim();
    const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href=`mailto:sgarvit87@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
