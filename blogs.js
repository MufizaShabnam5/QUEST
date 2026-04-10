



// SHOW BLOG CARDS
function showCards(){
  let trigger = window.innerHeight * 0.85;

  document.querySelectorAll(".blog-card").forEach(card =>{
    let top = card.getBoundingClientRect().top;
    if(top < trigger){
      card.classList.add("show");
    }
  });
}

// REVEAL ANIMATION
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

// RUN AFTER PAGE LOAD (IMPORTANT FIX)
window.addEventListener("load", () => {

  revealElements();
  showCards();

  setTimeout(() => {
    revealElements();
    showCards();
  }, 200);

  setTimeout(() => {
    revealElements();
    showCards();
  }, 600);
});

// RUN ON SCROLL
window.addEventListener("scroll", () => {
  revealElements();
  showCards();
});