import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';

export const initLocomotiveScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true
    });

    window.onresize = scroll.update();

    scroll.on('scroll', () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector<HTMLElement>('[data-scroll-container]')?.style.transform
            ? 'transform'
            : 'fixed'
    });

    ScrollTrigger.defaults({
        scroller: document.querySelector('[data-scroll-container]')
    });

    const scrollbar = document.querySelectorAll('.c-scrollbar');

    if (scrollbar.length > 1) {
        scrollbar[0].remove();
    }

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();
};
