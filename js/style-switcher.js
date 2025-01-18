// ==============================toggler style switcher==========================================
const styleswitcher=document.querySelector(".style-switcher");

const styleswitchertoggler=document.querySelector(".style-switcher-toggler");
styleswitchertoggler.addEventListener("click" ,() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

document.querySelector(".toggler_color_close").addEventListener("click",()=>{
    if(styleswitcher.classList.contains("open")){
        styleswitcher.classList.remove("open")
    }
})

window.addEventListener("scroll" ,()=>{
    if(styleswitcher.classList.contains("open")){
        styleswitcher.classList.remove("open")
    }
   
})


   
    

const alternatestyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    if(styleswitcher.classList.contains("open")){
        styleswitcher.classList.remove("open")
    }
    alternatestyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", true);
        }
    });
}

const daynight=document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" ,()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>slider start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let currentSlide = 0;
let startX = 0;
let endX = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
}

function handleMouseDown(event) {
    startX = event.clientX;
}

function handleMouseMove(event) {
    endX = event.clientX;
}

function handleMouseUp() {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
}

// Auto slide change every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// Add event listeners for touch events
document.querySelector('.slider').addEventListener('touchstart', handleTouchStart);
document.querySelector('.slider').addEventListener('touchmove', handleTouchMove);
document.querySelector('.slider').addEventListener('touchend', handleTouchEnd);

// Add event listeners for mouse events (optional for desktop interaction)
document.querySelector('.slider').addEventListener('mousedown', handleMouseDown);
document.querySelector('.slider').addEventListener('mousemove', handleMouseMove);
document.querySelector('.slider').addEventListener('mouseup', handleMouseUp);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>slider end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



let currentSlide1 = 0;
let startX1 = 0;
let endX1 = 0;

const slides1 = document.querySelectorAll('.slide1');
const totalSlides1 = slides1.length;

function showSlide1(index) {
    if (index >= totalSlides1) {
        currentSlide1 = 0;
    } else if (index < 0) {
        currentSlide1 = totalSlides1 - 1;
    } else {
        currentSlide1 = index;
    }
    const offset = -currentSlide1 * 100;
    document.querySelector('.slider1').style.transform = `translateX(${offset}%)`;
}

function nextSlide1() {
    showSlide1(currentSlide1 + 1);
}

function prevSlide1() {
    showSlide1(currentSlide1 - 1);
}

function handleTouchStart1(event) {
    startX1 = event.touches[0].clientX;
}

function handleTouchMove1(event) {
    endX1 = event.touches[0].clientX;
}

function handleTouchEnd1() {
    if (startX1 > endX1 + 50) {
        nextSlide1();
    } else if (startX1 < endX1 - 50) {
        prevSlide1();
    }
}

function handleMouseDown1(event) {
    startX1 = event.clientX;
}

function handleMouseMove1(event) {
    endX1 = event.clientX;
}

function handleMouseUp1() {
    if (startX1 > endX1 + 50) {
        nextSlide1();
    } else if (startX1 < endX1 - 50) {
        prevSlide1();
    }
}

// Auto slide change every 3 seconds
setInterval(() => {
    nextSlide1();
}, 3000);

// Add event listeners for touch events
document.querySelector('.slider1').addEventListener('touchstart', handleTouchStart1);
document.querySelector('.slider1').addEventListener('touchmove', handleTouchMove1);
document.querySelector('.slider1').addEventListener('touchend', handleTouchEnd1);

// Add event listeners for mouse events (optional for desktop interaction)
document.querySelector('.slider1').addEventListener('mousedown', handleMouseDown1);
document.querySelector('.slider1').addEventListener('mousemove', handleMouseMove1);
document.querySelector('.slider1').addEventListener('mouseup', handleMouseUp1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>slider end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>