// show / hide sidebar
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'block';
    sideMenu.style.left = '0';
});
closeBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'none';
    sideMenu.style.left = '-110%';
});


// toggle to light / dark theme
const body = document.body;
const themeToggler = document.querySelector('.theme-toggler');
themeToggler.addEventListener('click', (e)=>{
    body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})