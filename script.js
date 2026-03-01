// SLIDER
let slides=document.querySelectorAll(".hero img");
let i=0;
setInterval(()=>{
slides[i].classList.remove("active");
i=(i+1)%slides.length;
slides[i].classList.add("active");
},4000);

// SCROLL
document.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
});

// DEVIS
document.getElementById("quoteForm").addEventListener("submit",e=>{
e.preventDefault();
let service=document.getElementById("service").value;
let qty=document.getElementById("quantity").value;
let price=0;
if(service=="Canapé") price=5000;
if(service=="Tapis") price=3000;
if(service=="Fauteuil") price=2000;
document.getElementById("price").innerText="Prix estimé : "+(price*qty)+" DJF";
});

// AVIS
let reviews=JSON.parse(localStorage.getItem("reviews"))||[];
const list=document.getElementById("reviewsList");

function showReviews(){
list.innerHTML="";
reviews.forEach(r=>{
list.innerHTML+=`<p><strong>${r.name}</strong>: ${r.comment}</p>`;
});
}
showReviews();

document.getElementById("reviewForm").addEventListener("submit",e=>{
e.preventDefault();
let name=document.getElementById("name").value;
let comment=document.getElementById("comment").value;
reviews.push({name,comment});
localStorage.setItem("reviews",JSON.stringify(reviews));
showReviews();
});
