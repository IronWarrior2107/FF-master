const slider1 = new Swiper ('.swiper-window', {
    speed: 400,
    spaceBetween: 10,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
    pagination: {
		el: '.swiper-pagination',
		clickable: true,
        dynamicBullets: true,
	},
    initialSlide: 3,
    loop: true,
    autoplay: false
    // autoplay: {
    //     delay: 3500,
    //     stopOnLastSlide: false,
    //     disableOnInteractio: true,
    // }
});

const slider2 = new Swiper ('.product-swiper', {
    speed: 500,
    spaceBetween: 10,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
    simulateTouch: false,
    initialSlide: 3,
    slidesPerView: 5,
    loop: true,
    autoplay: false,
    // autoplay: {
    //     delay: 3500,
    //     stopOnLastSlide: false,
    //     disableOnInteractio: true,
    // }
})
document.addEventListener("DOMContentLoaded", function () {
    const thumbsSwiper = new Swiper(".images-product__thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
    pagination: {
        el: ".images-product__pagination",
        
    }
    });

    const mainSwiper = new Swiper(".images-product__slider", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        thumbs: {
            swiper: thumbsSwiper,
        },
    });
});


