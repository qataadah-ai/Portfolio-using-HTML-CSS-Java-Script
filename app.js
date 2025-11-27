
let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let navbar = document.querySelector('.navbar');

let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
let header = document.querySelector('header');


// Navbar Toggle
menuIcon.onclick = () => {
    navbar.classList.add('show');
    navbar.classList.add("active")
}

closeIcon.onclick = () => {
    navbar.classList.remove('show');
    
}



// On scroll: update active nav link + sticky header
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
};

// Menu closing after click on link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        navbar.classList.remove("show");

    })
})  ;

 ScrollReveal({ 
    
    distance:'80px',
    duration:'2000',
    delay:'200'
});

ScrollReveal().reveal('.home-content,.skills-heading, .heading', { origin: 'top' });
ScrollReveal().reveal(' .skills-container ,.contact form ,.project-container', { origin: 'bottom' });
ScrollReveal().reveal(' .about-image', { origin: 'left' });
ScrollReveal().reveal(' .about-content', { origin: 'right' });


const typed=new Typed('.text',{
strings:['Frontend Developer',''],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});