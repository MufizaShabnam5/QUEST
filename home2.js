(function(){

    
    const animatedElements = document.querySelectorAll(
        ".animate-left, .animate-right, .animate-top, .animate-bottom"
    );

    
    function revealOnScroll(){
        const trigger = window.innerHeight * 0.85; 

        animatedElements.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if(top < trigger){
                el.classList.add("show"); 
            }
        });
    }

    
    window.addEventListener("scroll", revealOnScroll);

    
    revealOnScroll();

})();


