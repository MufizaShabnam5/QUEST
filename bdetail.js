

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

revealElements();
showCards();

});




const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeToggleBtn.classList.remove("fa-moon");
themeToggleBtn.classList.add("fa-sun");

}else{

themeToggleBtn.classList.remove("fa-sun");
themeToggleBtn.classList.add("fa-moon");

}

});




const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});




document.querySelectorAll(".dropdown > a").forEach(item => {

item.addEventListener("click", function(e){

if(window.innerWidth < 640){

e.preventDefault();
this.parentElement.classList.toggle("active");

}

});

});



const blogCards = document.querySelectorAll(".blog-card");

function showCards(){

let trigger = window.innerHeight * 0.85;

blogCards.forEach(card =>{

let top = card.getBoundingClientRect().top;

if(top < trigger){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", showCards);



function revealElements(){

const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

elements.forEach(el => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}






