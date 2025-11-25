
// Navbar Toggle

let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.add('show');
}

closeIcon.onclick = () => {
    navbar.classList.remove('show');
}