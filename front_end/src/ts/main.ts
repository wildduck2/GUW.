import { MagnaticObject, home_loader_animation, text_weight, floatImage } from './animations';

import { hero_animation, about_animation } from './pages';
import { menu_functionality } from './layouts';
import LocomotiveScroll from 'locomotive-scroll';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    text_weight();
    floatImage();
    home_loader_animation();
    MagnaticObject();
    menu_functionality();

    about_animation();

    // hoverEffect();
});

// new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
