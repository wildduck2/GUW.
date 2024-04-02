import {
    initLocomotiveScroll,
    MagnaticObject,
    home_loader_animation,
    text_weight,
    floatImage
} from './animations';

import { hero_animation, about_animation, works_animation, values_animation } from './pages';
import { menu_functionality } from './layouts';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const initALLScripts = () => {
    initLocomotiveScroll();
    text_weight();
    floatImage();
    home_loader_animation();
    MagnaticObject();
    menu_functionality();

    hero_animation();
    about_animation();
    works_animation();
    values_animation();
};

document.addEventListener('DOMContentLoaded', () => {
    initALLScripts();
});
