const menuToggle = document.querySelector('.menu-toggle'); // Hamburger button
const navMenu = document.querySelector('.nav-menu'); // Navigation menu

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle 'active' class on menu
});
