 
window.addEventListener("scroll", function(){
 
let header = document.getElementById("header");
 
if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
 
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

