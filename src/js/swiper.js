import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.child-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 3.2,
                spaceBetween: 10,
            },
        },
        slidesPerView: 'auto',
        loop: true,
        slideClass: 'child-swiper-slide',
        wrapperClass: 'child-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        });
});