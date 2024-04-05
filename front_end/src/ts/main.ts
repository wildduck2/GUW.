import {
    initMagnetic,
    initFontWeight,
    initMousePose,
    initBarbaAnimation,
    other_pages
} from './animations';

import {
    hero_animation,
    about_animation,
    works_animation,
    values_animation,
    credits_animation,
    slider_section,
    accordion,
    col_1,
    col_2,
    col_3
} from './pages';
import { footer__section, menu_functionality } from './layouts';

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
    col_1();
    col_2();
    col_3();

    //INFO: OTHER PAGES
    other_pages();
};

initALLScripts();
initBarbaAnimation();
