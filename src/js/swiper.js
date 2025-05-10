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
    new Swiper('.reviews-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        slidesPerView: 'auto',
        loop: true,
        slideClass: 'reviews-swiper-slide',
        wrapperClass: 'reviews-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.reviews-custom-next',
            prevEl: '.reviews-custom-prev',
        },

    });
    let featuresSwiper = null;

    function initFeaturesSwiper() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 1439) {
            if (!featuresSwiper) {
                featuresSwiper = new Swiper('.features-swiper', {
                    modules: [Navigation],
                    slidesPerView: 'auto',
                    loop: true,
                    spaceBetween: 20,
                    slideClass: 'features-swiper-slide',
                    wrapperClass: 'features-swiper-wrapper',
                    direction: 'horizontal',
                    navigation: {
                        nextEl: '.features-custom-next',
                        prevEl: '.features-custom-prev',
                    },
                });
            }
        } else {
            if (featuresSwiper) {
                featuresSwiper.destroy(true, true);
                featuresSwiper = null;
            }
        }
    }

 
    initFeaturesSwiper();
    window.addEventListener('resize', initFeaturesSwiper);
});
