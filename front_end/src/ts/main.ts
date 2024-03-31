import { MagnaticObject } from './animations';
import { hero_animation, about_animation } from './pages';
import { menu_functionality } from './layouts';
import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', () => {
    MagnaticObject();
    menu_functionality();

    about_animation();

    // hoverEffect();
});

// new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
