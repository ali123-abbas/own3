const nav = document.querySelector('nav');
const header =document.querySelector('header');

const options = {
    rooMargin: '-12%'
}

const observer = new IntersectionObserver (entries => {
     entries.forEach(entry => {
        if(entry.isIntersecting) {
            nav.classList.remove('changeColor')
        } else {
            nav.classList.add('changeColor')

        }
     })
}, options)

observer.observe(header)
                                            // WORKING ON SCROLL   

                                            // Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
 
  let scrollY = window.pageYOffset;
  

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
   
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
  
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}