import {
    initLocomotiveScroll,
    initMagnetic,
    home_loader_animation,
    initFontWeight,
    initMousePose
} from './animations';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

import {
    hero_animation,
    about_animation,
    works_animation,
    values_animation,
    credits_animation,
    slider_section
} from './pages';
import { footer__section, menu_functionality } from './layouts';

const initALLScripts = () => {
    // initLocomotiveScroll();
    initFontWeight();
    initMousePose();
    home_loader_animation();
    initMagnetic();
    menu_functionality();

    hero_animation();
    about_animation();
    works_animation();
    values_animation();
    credits_animation();
    slider_section();
    footer__section();
};
//
// import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import Lenis from 'https://cdn.skypack.dev/@studio-freight/lenis@0.1.12';

const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: 'vertical'
});

lenis.on('scroll', (e: any) => {
    console.log(e);
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

initALLScripts();
