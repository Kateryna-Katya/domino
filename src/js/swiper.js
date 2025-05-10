import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.play-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        slidesPerView: 'auto',
        loop: true,
        slideClass: 'play-swiper-slide',
        wrapperClass: 'play-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        });
});