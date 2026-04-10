// LOAD HEADER
fetch("../components/navbar.html")
.then(response => response.text())
.then(data => {
  document.getElementById("header-container").innerHTML = data;

  initHeader();
});


function initHeader(){

  const header = document.getElementById("header");

  window.addEventListener("scroll", function(){
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
      themeToggleBtn.classList.replace("fa-moon","fa-sun");
    }else{
      themeToggleBtn.classList.replace("fa-sun","fa-moon");
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
  // ACTIVE NAV LINK
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add("active");
  }
});
const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {

    // prevent navigation if dropdown exists
    const parent = drop.parentElement;
    if(parent.querySelector(".dropdown-menu")){
      e.preventDefault();
      parent.classList.toggle("active");
    }

  });
});
}

function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load footer
loadComponent("footer", "../components/footer.html");

// ===== GLOBAL RTL (WORKS ON ALL PAGES) =====

// APPLY ON LOAD
if(localStorage.getItem("rtl") === "enabled"){
  document.body.classList.add("rtl");
  document.documentElement.setAttribute("dir","rtl");
}else{
  document.documentElement.setAttribute("dir","ltr");
}

// TOGGLE RTL
document.addEventListener("click", function(e){
  if(e.target.closest("#rtlToggle")){
    
    document.body.classList.toggle("rtl");

    if(document.body.classList.contains("rtl")){
      localStorage.setItem("rtl","enabled");
      document.documentElement.setAttribute("dir","rtl");
    }else{
      localStorage.setItem("rtl","disabled");
      document.documentElement.setAttribute("dir","ltr");
    }
  }
});