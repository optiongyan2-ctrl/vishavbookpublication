/*=========================================
VISHAV BOOK PUBLICATION
SCRIPT.JS
PART 1
=========================================*/

/*==========================
LIVE JOIN NOTIFICATION
==========================*/

const joinNames = [

"Ritu from Delhi just joined",

"Sneha from Rajasthan just joined",

"Priya from Mumbai just joined",

"Anjali from Jaipur just joined",

"Neha from Indore just joined",

"Muskan from Bhopal just joined",

"Pooja from Lucknow just joined",

"Kajal from Gujarat just joined",

"Payal from Haryana just joined",

"Komal from Punjab just joined"

];

const liveJoin = document.getElementById("liveJoin");

let currentJoin = 0;

if(liveJoin){

setInterval(()=>{

liveJoin.style.opacity="0";

setTimeout(()=>{

currentJoin++;

if(currentJoin>=joinNames.length){

currentJoin=0;

}

liveJoin.textContent=

"🟢 " + joinNames[currentJoin];

liveJoin.style.opacity="1";

},300);

},2000);

}

/*==========================
LIMITED SEAT COUNTER
==========================*/

const seatCounter=

document.getElementById("seatCount");

let seats=27;

if(seatCounter){

setInterval(()=>{

if(seats>6){

seats--;

}else{

seats=27;

}

seatCounter.textContent=seats;

},12000);

}

/*==========================
FAQ ACCORDION
==========================*/

const faqButtons=

document.querySelectorAll(".faq-btn");

faqButtons.forEach(button=>{

button.addEventListener("click",()=>{

const content=

button.nextElementSibling;

const icon=

button.querySelector("span");

document

.querySelectorAll(".faq-content")

.forEach(item=>{

if(item!==content){

item.style.maxHeight=null;

}

});

document

.querySelectorAll(".faq-btn span")

.forEach(i=>{

if(i!==icon){

i.textContent="+";

}

});

if(content.style.maxHeight){

content.style.maxHeight=null;

icon.textContent="+";

}else{

content.style.maxHeight=

content.scrollHeight+"px";

icon.textContent="−";

}

});

});

/*=========================================
REVIEWS AUTO SLIDER
=========================================*/

const reviewTrack =
document.querySelector(".review-track");

const reviewCards =
document.querySelectorAll(".review-card");

let reviewIndex = 0;

if(reviewTrack){

setInterval(()=>{

reviewIndex++;

if(reviewIndex>=reviewCards.length){

reviewIndex=0;

}

reviewTrack.style.transform=

`translateX(-${reviewIndex*100}%)`;

},3500);

}

/*=========================================
RECENT PAYOUT AUTO SCROLL
=========================================*/

const payoutTrack=

document.querySelector(".payout-track");

if(payoutTrack){

payoutTrack.innerHTML +=

payoutTrack.innerHTML;

}

/*=========================================
SCROLL REVEAL ANIMATION
=========================================*/

const revealItems=

document.querySelectorAll(

".feature-card,.plan-card,.payout-card,.book,.step-card,.review-card,.faq-item"

);

const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=

"translateY(0)";

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform=

"translateY(40px)";

item.style.transition=

".6s ease";

observer.observe(item);

});

/*=========================================
BUTTON ANIMATION
=========================================*/

const buttons =

document.querySelectorAll(".join-btn");

buttons.forEach(button=>{

button.addEventListener("click",function(){

this.style.transform="scale(.96)";

setTimeout(()=>{

this.style.transform="scale(1)";

},180);

});

});

/*=========================================
PAGE FADE IN
=========================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition=".5s";

document.body.style.opacity="1";

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=

this.getAttribute("href");

if(

target.startsWith("#")

){

e.preventDefault();

document

.querySelector(target)

.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
META PIXEL LEAD EVENT
=========================================*/

buttons.forEach(button=>{

button.addEventListener("click",()=>{

if(typeof fbq==="function"){

fbq("track","Lead");

}

});

});

/*=========================================
CONSOLE
=========================================*/

console.log(

"Vishav Book Publication Loaded Successfully"

);