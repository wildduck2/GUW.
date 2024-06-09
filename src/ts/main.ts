import {
    initMagnetic,
    initFontWeight,
    initMousePose,
    initBarbaAnimation,
    other_pages
} from './animations'

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
    col_3,
    WorksFilter,
    col_1_2,
    addGridStyle
} from './pages'
import { footer__section, menu_functionality, text__section } from './layouts'
import { col_1_3 } from './pages/credits'

export const initALLScripts = () => {
    initFontWeight()
    initMousePose()
    initMagnetic()
    addGridStyle()

    //INFO: HOME
    hero_animation()
    about_animation()
    works_animation()
    values_animation()
    credits_animation()
    slider_section()

    //INFO: ABOUT
    accordion()
    col_1()
    col_2()
    col_3()

    //INFO: WORKS
    WorksFilter()
    col_1_2()

    //INFO: CREDITS
    col_1_3()

    //INFO: OTHER PAGES
    other_pages()
    text__section()
    footer__section()
    menu_functionality()
}

initBarbaAnimation()
initALLScripts()
