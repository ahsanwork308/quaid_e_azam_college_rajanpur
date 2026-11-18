document.addEventListener("DOMContentLoaded",()=>{
 const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
 const current=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".navbar .nav-link").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});
 const form=document.getElementById("enquiryForm");
 if(form) form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const course=document.getElementById("course").value;
  const msg=document.getElementById("message").value.trim();
  const text=`College enquiry\nName: ${name}\nPhone: ${phone}\nProgramme: ${course}\nMessage: ${msg}`;
  const out=document.getElementById("formMessage");
  out.textContent="Enquiry text prepared. To send it, connect the college's verified WhatsApp number in script.js.";
  // Once the official number is supplied, use: window.open("https://wa.me/92XXXXXXXXXX?text="+encodeURIComponent(text),"_blank");
 });
});