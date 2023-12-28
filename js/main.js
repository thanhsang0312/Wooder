// Scroll to top button
window.onscroll = function () {
    scrollToTop();
}
function scrollToTop() {
    const btnElement = document.querySelector('.footer__backtotopbtn');
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
    }
    else {
        btnElement.classList.remove('show');
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