import Swiper, { Autoplay, Navigation } from "swiper";

export const init = () => {

    new Swiper('.swiper', {
        modules: [Navigation, Autoplay],
        direction: 'horizontal',
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: "slide",
        centeredSlides: true,
        centeredSlidesBounds: true,
        watchOverflow: true,
        loopedSlides: 0,
        breakpoints: {

            992: {
                slidesPerView: 2.4,
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        speed: 800,
        a11y: {
            enabled: true,
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
        }

    });
}

