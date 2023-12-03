import {Navigation, Pagination} from "swiper/modules";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach(slider => {
        if (slider.dataset.slider === 'default') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination],
                slidesPerView: 'auto',
                watchSlidesProgress: true,
                spaceBetween: 30,
                watchOverflow: true,
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                pagination: {
                    el: '.slider__pagination',
                    bulletClass: 'slider__bullet',
                    bulletActiveClass: 'slider__bullet--active',
                    clickable: true,
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 2,
                    }
                },
            })
        } else if (slider.dataset.slider === 'extended') {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination],
                slidesPerView: 'auto',
                spaceBetween: 30,
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev',
                    disabledClass: 'slider__button--disabled'
                },
                pagination: {
                    el: '.slider__pagination',
                    bulletClass: 'slider__bullet',
                    bulletActiveClass: 'slider__bullet--active',
                    clickable: true,
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    }
                },
                watchSlidesProgress: true
            })
        }
    })
})