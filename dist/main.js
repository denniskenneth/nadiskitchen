(()=>{"use strict";(function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");t.classList.add("header"),n.classList.add("body"),a.classList.add("footer");const d=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div");d.classList.add("logoHolder"),c.classList.add("navHolder"),s.classList.add("left"),i.classList.add("center"),r.classList.add("right"),d.innerHTML="<h3>REPAG</h3>";var o=document.createElement("a"),m=document.createElement("a"),l=document.createElement("a");o.classList.add("navbtn","active"),m.classList.add("navbtn"),l.classList.add("navbtn"),m.addEventListener("click",(()=>{if(o.classList.contains("active"))o.classList.remove("active");else{if(!l.classList.contains("active"))return;l.classList.remove("active")}m.classList.add("active")})),l.addEventListener("click",(()=>{if(o.classList.contains("active"))o.classList.remove("active");else{if(!m.classList.contains("active"))return;m.classList.remove("active")}l.classList.add("active")}));const u=document.createElement("h1"),p=document.createElement("p"),L=document.createElement("div"),v=document.createElement("h2"),E=document.createElement("div"),h=document.createElement("div"),H=document.createElement("div"),f=document.createElement("button");p.classList.add("catchPhrase"),L.classList.add("scheduleDiv"),v.classList.add("scheduleHeader"),E.classList.add("weekdayHolder"),h.classList.add("weekendHolder"),H.classList.add("sundayHolder"),f.classList.add("menuBtn");const M=document.createElement("p"),T=document.createElement("a");var g,y,b,w;o.innerHTML="Home",m.innerHTML="Menu",l.innerHTML="Contact",u.innerHTML="Welcome to the Home of Amazing Food &#x1f609;",p.innerHTML="We serve some of your <br><br>Favourite Ghana Dishes",v.innerHTML="Working Hours",E.innerHTML="<p>Monday - Thursday</p><p>11:30am - 9:30pm</p>",h.innerHTML="<p>Friday - Saturday</p><p>11:30am - 10:00pm</p>",H.innerHTML="<p>Sunday</p><p>1:00pm - 8:00pm</p>",f.innerHTML="See Menu",T.setAttribute("href","https://www.instagram.com/denioncode/"),T.setAttribute("target","_blank"),T.innerHTML="DeniOnCode",M.innerHTML="Build By ",t.append(c),c.append(o,m,l),L.append(v,E,h,H),i.append(u,p,L,f),n.append(s,i,r),M.append(T),a.append(M),e.append(t,n,a),o.addEventListener("click",(()=>{window.location.reload(!0)})),g=m,y=f,b=i,w=l,e.addEventListener("click",(e=>{e.target===w?function(){const e=document.querySelector(".center");e.innerHTML=" ";const t=document.createElement("div"),n=document.createElement("div");t.classList.add("pageTitle");const a=document.createElement("h1");a.innerHTML="Contact Us",t.append(a),n.classList.add("mainBody");const d=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");d.classList.add("holder"),c.classList.add("holder"),s.classList.add("holder");const i=document.createElement("div"),r=document.createElement("div");i.classList.add("chefLeft"),r.classList.add("chefRight");const o=document.createElement("div"),m=document.createElement("div");o.classList.add("chefLeft"),m.classList.add("chefRight");const l=document.createElement("div"),u=document.createElement("div");l.classList.add("chefLeft"),u.classList.add("chefRight");const p=document.createElement("p"),L=document.createElement("p"),v=document.createElement("img"),E=document.createElement("img"),h=document.createElement("img");p.innerHTML="Chèf",L.innerHTML="555-231-0293",v.setAttribute("src","../dist/assets/user.svg"),E.setAttribute("src","../dist/assets/user.svg"),h.setAttribute("src","../dist/assets/user.svg");const H=document.createElement("p"),f=document.createElement("p");H.innerHTML="Manager",f.innerHTML="505-213-0523";const M=document.createElement("p"),T=document.createElement("p");M.innerHTML="Waiter",T.innerHTML="419-911-1000",i.append(p,L),r.append(v),o.append(H,f),m.append(E),l.append(M,T),u.append(h),s.append(l,u),c.append(o,m),d.append(i,r),n.append(d,c,s),e.append(t,n)}():e.target!==g&&e.target!==y||(b.innerHTML=" ",function(){const e=document.querySelector(".center");e.innerHTML=" ";const t=document.createElement("div"),n=document.createElement("div");t.classList.add("pageTitle");const a=document.createElement("h1");a.innerHTML="Menu",t.append(a),n.classList.add("mainBody");const d=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");d.classList.add("holder"),c.classList.add("holder"),s.classList.add("holder");const i=document.createElement("div"),r=document.createElement("div");i.classList.add("chefLeft"),r.classList.add("chefRight");const o=document.createElement("div"),m=document.createElement("div");o.classList.add("chefLeft"),m.classList.add("chefRight");const l=document.createElement("div"),u=document.createElement("div");l.classList.add("chefLeft"),u.classList.add("chefRight");const p=document.createElement("p"),L=document.createElement("p");p.innerHTML="Kenkey n stew ",L.innerHTML="A wonderful delicacy made of maize<br>Served with tasty tomatoe stew ";const v=document.createElement("p"),E=document.createElement("p");v.innerHTML="Banku n tilapia ",E.innerHTML="A delicacy made of fermented corn.<br>Served with pepper n tilapia";const h=document.createElement("p"),H=document.createElement("p");h.innerHTML="Light soup n fufu",H.innerHTML="A cassava dough served with<br>Light soup",i.append(p,L),o.append(v,E),l.append(h,H),s.append(l,u),c.append(o,m),d.append(i,r),n.append(d,c,s),e.append(t,n)}())}))})(),console.log("THIS IS REAL BITCH")})();