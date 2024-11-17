const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function(event) {
    navLinks.classList.toggle('active'); 
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});
