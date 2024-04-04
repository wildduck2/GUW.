import barba from '@barba/core';
import { delay, initLoaderHome, initNextWord, initPageEnter, initPageLeave } from './initLoading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis';
import { initALLScripts } from '../main';
import SplitType from 'split-type';

export const initBarbaAnimation = () => {
    //NOTE: init lenis
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        lerp: 0.1,
        syncTouchLerp: 0.1,
        smoothWheel: true
    });
    //TODO: make sure to re init the scroll thing when window resize

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // NOTE: do something before the transition starts
    barba.hooks.before(() => {
        document.querySelector('html')!.classList.add('is-transitioning');
    });

    // NOTE: do something after the transition finishes
    barba.hooks.after(() => {
        document.querySelector('html')!.classList.remove('is-transitioning');

        // reinit Lenis scroll
        lenis.start();
        lenis.stop();
    });

    //NOTE: scroll to the top of the page
    barba.hooks.enter(() => {
        lenis.destroy();
    });

    //NOTE: scroll to the top of the page
    barba.hooks.afterEnter(() => {
        window.scrollTo(0, 0);
        //TODO: cookie functionality
    });

    // TODO: idk what to call it but it's a clearing thing
    // if (window.innerWidth > 540) {
    //     barba.hooks.leave(() => {
    //         document.querySelectorAll('.btn-hamburger, .btn-menu').forEach((el) => {
    //             el.classList.remove('active');
    //         });
    //         document.querySelector('main')!.classList.remove('nav-active');
    //     });
    // }

    barba.init({
        sync: true,
        debug: false,
        timeout: 7000,
        transitions: [
            {
                name: 'works',
                async once() { },
                async leave({ current }) {
                    // NOTE: animate loading screen in
                    initPageLeave();
                    await delay(695);
                    current.container.remove();
                },
                async enter(data) {
                    // NOTE: animate loading screen away
                    initNextWord(data);
                    initPageEnter();
                },
                async beforeEnter() {
                    ScrollTrigger.getAll().forEach((t) => t.kill());
                    initALLScripts();
                }
            },
            {
                name: 'initHomeLoader',
                from: {},
                to: {
                    namespace: ['home']
                },
                once() {
                    initLoaderHome();
                }
            }
        ]
    });
};
