//menu bar
const navbar = document.querySelector(".nav");
const menu = document.querySelector(".nav-links");
const cancelBtn = document.querySelector(".cancel-btn");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{
    this.scrollY > 10 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
// -----------menu bar

// -------------scroll animation
const scroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: false,
    delay: 100
});

scroll.reveal('.container, .who-box, .about-text, .about-btn, .service-box, .contact-box');
scroll.reveal('.about-box.right',{
    delay: 200
});
// -----------x--scroll animation