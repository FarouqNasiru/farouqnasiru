/*let numa = 7;
let numb = 10;
if (numb > numa) {
    alert("hello there");
}

window.prompt("input your age");
let i;
    if (i>=18) {
        alert("youre an adult");
    }*/




    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/*let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#menu-icon');

menu.onclick = () => {
  menu.classList.toggle('menu-btn');
  navbar.classList.toggle('open');
};*/