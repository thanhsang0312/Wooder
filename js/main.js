// Scroll to top button
window.onscroll = function () {
    scrollToTop();
}
function scrollToTop() {
    const btnElement = document.querySelector('.footer__backtotopbtn');
    const headerElement = document.querySelector('.header');
    const heroElement = document.querySelector('.hero');
    const heroHeight = heroElement.clientHeight;
    if (window.scrollY > heroHeight) {
        btnElement.classList.add('show');
        btnElement.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
        headerElement.classList.add("--black");
    }
    else {
        btnElement.classList.remove('show');
        headerElement.classList.remove("--black");
    }
}
// -----------------------

function scrollToProducts() {
    const productsElement = document.querySelector('#products');
    productsElement.scrollIntoView();
}
function scrollToAbout() {
    const aboutElement = document.querySelector('#about');
    aboutElement.scrollIntoView();
}
function scrollToGallery() {
    const galleryElement = document.querySelector('#gallery');
    galleryElement.scrollIntoView();
}
function scrollToNews() {
    const newsElement = document.querySelector('#news');
    newsElement.scrollIntoView();
}
function scrollToVideos() {
    const videosElement = document.querySelector('#videos');
    videosElement.scrollIntoView();
}