import { gsap } from 'gsap/gsap-core';
import SplitType from 'split-type';

export const home_loader_animation = () => {
    //NOTE: spliting text
    new SplitType('.hero__section__right__top__title', {
        types: 'lines,words'
    }).words;

    new SplitType('.hero__section__right__top__text', {
        types: 'lines,words'
    }).words;

    //NOTE: settin init values
    const tl = gsap.timeline({});

    tl.set('html', {
        // overflow: 'hidden'
        onStart: () => {
            window.scrollTo(0, 0);
        }
    });

    tl.set('.header', {
        yPercent: -20
    });

    tl.set(
        '.hero__card__img',
        {
            yPercent: 120
        },
        '>'
    );

    tl.set('.hero__section__left__svg', {
        opacity: 0,
        scale: 0.5
    });

    tl.set('.hero__section__left__img', {
        height: 0
    });

    tl.set('.hero__section__right__top', {
        overflow: 'hidden'
    });

    tl.set('.hero__section__right__bottom', {
        overflow: 'hidden'
    });

    tl.set('.hero__section__right__top__btn', {
        yPercent: 101,
        pointerEvents: 'none'
    });

    tl.set('.once-in', {
        yPercent: -20
    });

    tl.set('.loader', {
        cursor: 'crosshair'
    });

    //NOTE: starting the animation

    tl.to('.loader h2 .char', {
        y: 0,
        stagger: { amount: 0.4 },
        duration: 0.5
    });

    tl.to(
        '.loader h2 .char',
        {
            yPercent: -100,
            stagger: { amount: 0.4 },
            duration: 0.5
        },
        '+=0.5'
    );

    tl.to(
        '.loader',
        {
            yPercent: -100,
            stagger: 0.4,
            duration: 0.8,
            ease: 'Power4.easeInOut',
            delay: 0.2
        },
        '<.5'
    );

    tl.to(
        'header',
        {
            yPercent: 0,
            duration: 0.8,
            ease: 'Power4.easeInOut',
            delay: 0.2
        },
        '<.4'
    );

    tl.to(
        '.once-in',
        {
            yPercent: 0,
            stagger: 0.4,
            duration: 0.8,
            ease: 'Power3.easeInOut'
        },
        '-=1.2'
    );

    tl.to(
        '.hero__section__right__top__title .word',
        {
            y: 0,
            stagger: { amount: 0.4 },
            duration: 0.8,
            ease: 'Power1.easeInOut'
        },
        '-=.7'
    );

    tl.to(
        '.hero__section__right__top__text .word',
        {
            y: 0,
            stagger: { amount: 0.4 },
            duration: 0.8,
            ease: 'Power1.easeInOut'
        },
        '-=.7'
    );

    tl.to(
        '.hero__section__right__top__btn',
        {
            yPercent: 0,
            stagger: 0.4,
            duration: 0.8,
            ease: 'Power1.easeInOut'
        },
        '-=.8'
    );

    tl.to(
        '.once-in-t',
        {
            x: 0,
            y: 0,
            stagger: { amount: 0.4 },
            duration: 0.8,
            ease: 'Power3.easeInOut'
        },
        '-=1.2'
    );

    tl.to(
        '.hero__section__left__img',
        {
            height: '765',
            duration: 0.8,
            ease: 'Power4.easeInOut'
        },
        '-=0.6'
    );

    tl.fromTo(
        '.once-in-i',
        {
            yPercent: 35,
            opacity: 0
        },
        {
            yPercent: 0,
            opacity: 1,
            stagger: { amount: 0.4 },
            duration: 0.8,
            ease: 'Power4.easeInOut'
        },
        '-=.8'
    );

    tl.to(
        '.hero__card__img',
        {
            yPercent: 0
        },
        '-=0.8'
    );

    tl.to(
        '.hero__section__left__svg',
        {
            opacity: 1,
            scale: 1
        },
        '-=0.8'
    );

    //NOTE: reseting init valuse again

    tl.set('.hero__section__right__top__btn', {
        pointerEvents: 'all'
    });

    tl.set('.hero__section__right__top', {
        overflow: 'initial'
    });

    tl.set('html', {
        overflowY: 'initial'
    });
};
