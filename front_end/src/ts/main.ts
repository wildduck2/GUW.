import { initMagnetic, initFontWeight, initMousePose, initBarbaAnimation } from './animations';

import {
    hero_animation,
    about_animation,
    works_animation,
    values_animation,
    credits_animation,
    slider_section
} from './pages';
import { footer__section, menu_functionality } from './layouts';
import { accordion } from './pages/about';

export const initALLScripts = () => {
    initFontWeight();
    initMousePose();
    initMagnetic();
    menu_functionality();

    //INFO: HOME
    hero_animation();
    about_animation();
    works_animation();
    values_animation();
    credits_animation();
    slider_section();
    footer__section();

    //INFO: ABOUT
    accordion();
};

initALLScripts();
initBarbaAnimation();
