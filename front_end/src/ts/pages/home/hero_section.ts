import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export const hero_animation = () => {
    gsap.registerPlugin(ScrollTrigger);
    const heroSection = document.querySelector('.hero__section') as HTMLTableSectionElement;
};
