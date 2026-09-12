// Garvit Lodha — Chaos Universe
const canvas = document.getElementById('chaosCanvas');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resize(){
  W = canvas.width = innerWidth * devicePixelRatio;
  H = canvas.height = innerHeight * devicePixelRatio;
  canvas.style.width = innerWidth+'px';
  canvas.style.height = innerHeight+'px';
  pts = [];
  for(let i=0;i<16;i++) pts.push({x:Math.random()*W,y:Math.random()*H,a:Math.random()*6.28,s:.15+Math.random()*.45});
}
function draw(){
  ctx.clearRect(0,0,W,H);
  ctx.lineWidth = 1 * devicePixelRatio;
  for(const p of pts){
    p.a += .0025;
    p.x += Math.cos(p.a*1.7)*p.s*devicePixelRatio;
    p.y += Math.sin(p.a*1.25)*p.s*devicePixelRatio;
    if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
    ctx.beginPath();
    for(let t=0;t<150;t++){
      const x=p.x + Math.sin(t*.055+p.a)*22*devicePixelRatio + t*.8*devicePixelRatio;
      const y=p.y + Math.cos(t*.047+p.a*2)*18*devicePixelRatio + Math.sin(t*.09+p.a)*35*devicePixelRatio;
      if(t===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.strokeStyle = 'rgba(157,123,255,.10)';
    ctx.stroke();
  }
  requestAnimationFrame(draw);
}
addEventListener('resize',resize); resize(); draw();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const quotes = [
  "The interesting part of a system is often what happens when it refuses to behave.",
  "I don't fear chaos. I study it.",
  "Some equations don't give answers. They give adventures.",
  "A tiny change can be the beginning of a completely different story.",
  "Mathematics is serious. My relationship with deadlines is not.",
  "If the system looks simple, look again.",
  "Curiosity is probably my most stable dynamical variable."
];
const quoteBtn=document.getElementById('quoteBtn');
const generated=document.getElementById('generatedQuote');
quoteBtn.addEventListener('click',()=>{
  const current=generated.textContent.replace(/[“”]/g,'');
  let q=current;
  while(q===current) q=quotes[Math.floor(Math.random()*quotes.length)];
  generated.textContent='“'+q+'”';
});

document.getElementById('modeBtn').addEventListener('click',()=>{
  document.body.classList.toggle('light');
  document.getElementById('modeBtn').textContent=document.body.classList.contains('light')?'◑':'◐';
});
