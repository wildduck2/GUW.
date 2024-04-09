import SplitType from 'split-type';
import gsap from 'gsap/gsap-core';

export const initHomePage = () => {
    //NOTE: spliting text
    new SplitType('.hero__section__right__top__title', {
        types: 'lines,words'
    }).words;

    new SplitType('.hero__section__right__top__text', {
        types: 'lines,words'
    }).words;

    //NOTE: settin init values
    gsap.set('html', {
        overflow: 'hidden',
        onStart: () => {
            window.scrollTo(0, 0);
        }
    });

    gsap.set('.header', {
        yPercent: -20
    });

    gsap.set('.loader h2.init', {
        opacity: 1,
        pointerEvents: 'all'
    });

    gsap.set('.hero__section__right__top .word', {
        yPercent: 105
    });

    gsap.set('.hero__section__right__top__btn', {
        yPercent: 105
    });

    gsap.set('.hero__card__1', {
        yPercent: -110
    });

    gsap.set('.hero__card__2', {
        xPercent: -110
    });

    gsap.set('.hero__card__3', {
        yPercent: 110
    });

    gsap.set('.hero__card__img', {
        yPercent: 120
    });

    gsap.set('.hero__section__left__svg', {
        opacity: 0,
        scale: 0.5
    });

    gsap.set('.hero__section__left__img', {
        height: 0
    });

    gsap.set('.hero__section__right__top', {
        overflow: 'hidden'
    });

    gsap.set('.hero__section__right__bottom', {
        overflow: 'hidden'
    });
};

export const initHomePageAnimations = (tl: gsap.core.Timeline) => {
    //NOTE: animations
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
            yPercent: 0,
            stagger: { amount: 0.4 },
            duration: 0.8,
            ease: 'Power1.easeInOut'
        },
        '-=.7'
    );

    tl.to(
        '.hero__section__right__top__text .word',
        {
            yPercent: 0,
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
            xPercent: 0,
            yPercent: 0,
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
