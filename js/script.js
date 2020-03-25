'use strict';
$(window).on('load', function() {
    $.fakeLoader({
        timeToHide:2400,
        bgColor:"#407599",
        spinner:"spinner5",
        anchorPlacement: 'top-bottom',
    });
});
$(document).ready(function(){
    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    let swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: 10,
        effect: 'cube',
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    particlesJS.load('bg_part-one', 'assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
    particlesJS.load('bg_part-two', 'assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
    new fullpage("#fullpage",{
        autoScrolling: true,
        navigation: true,
        fitToSection: true,
        dragAndMove: true,
        fadingEffect: true,
        resetSliders: true,
        anchors: ['title', 'about', 'skills', 'works', 'contacts'],
        menu: '#myMenu',
        animateAnchor: false,
        scrollOverflow: true,
        scrollOverflowEndPrevent: { delay: 500, reversal: true },
    });
    $('#next').click(function() {
        $('.cube-wrapper').css({'transform' : 'rotateY('+ '-90' +'deg)'});
        return $('.cube-wrapper');
    });
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                links.forEach(link => {
                    link.classList.remove("fade");
                });
            });
        });
    });
    AOS.init({
        delay: 2400
    });
});