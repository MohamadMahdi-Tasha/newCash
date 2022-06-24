// Configurations Of Swiper Js . Docs At https://swiperjs.com/swiper-api
// Swiper Of First Section
const firstSectionsSwiperVertical = new Swiper(".first-section-swiper", {
    pagination: {el: ".swiper-pagination",},
    direction: 'vertical',
    effect: 'cube',
    autoplay: {delay: 5000,},
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper Of Third Section
const thirdSectionsSwiper = new Swiper(".third-sections-swiper", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});