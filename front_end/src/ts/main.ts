import {
    initLocomotiveScroll,
    initMagnetic,
    home_loader_animation,
    initFontWeight,
    initMousePose
} from './animations';

import {
    hero_animation,
    about_animation,
    works_animation,
    values_animation,
    credits_animation
} from './pages';
import { menu_functionality } from './layouts';

const initALLScripts = () => {
    // initLocomotiveScroll();
    initFontWeight();
    initMousePose();
    home_loader_animation();
    initMagnetic();
    menu_functionality();
    //
    // hero_animation();
    about_animation();
    // works_animation();
    values_animation();
    credits_animation();
};

initALLScripts();
