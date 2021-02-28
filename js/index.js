/* Please insert your JS in here! */

const hamburgerIcon = document.querySelector(".hamburger--container");
const navbar = document.querySelector(".navbar");

hamburgerIcon.addEventListener('click', function(){
    navbar.classList.toggle("change")
})
