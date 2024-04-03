import ScrollTrigger from 'gsap/all';
import gsap from 'gsap';
import SplitType from 'split-type';

export const values_animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    // NOTE: spliting the title to words
    new SplitType('.values__section__wrapper__title', {
        types: 'words'
    }).words;

    new SplitType('.values__section__content__title', {
        types: 'words'
    }).words;

    new SplitType('.values__section__content__text', {
        types: 'words,lines'
    }).words;

    // NOTE: makging the aniamtion
    // gsap.set('.values__section__wrapper__title .word', {
    //     yPercent: 124
    // });

    gsap.set('.values__section__content__title .word', {
        yPercent: 100
    });

    gsap.set('.values__section__content__text .word', {
        yPercent: 100
    });

    gsap.set('.values__section__content__btn', {
        yPercent: 100
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.values__section',
            start: 'top top',
            end: '+=1400',
            scrub: 1,
            // invalidateOnRefresh: true,
            pin: '.values__section',
            pinType: 'transform',
            // pinSpacing: '-100%',
            // pinnedContainer: '.values__section',
            anticipatePin: 1
            // markers: true
        }
    });

    tl.to(
        '.values__section__wrapper__title .word',
        {
            y: 0,
            stagger: 0.1,
            ease: 'none'
        },
        '<'
    );

    tl.to('.values__section__wrapper__title .word', {
        yPercent: -124,
        stagger: 0.1,
        ease: 'none'
    });

    tl.to('.value__2', {
        yPercent: -100,
        ease: 'none'
    });

    tl.to(
        '.values__section__content__title .word',
        {
            yPercent: 0,
            ease: 'none'
        },
        '+=0.2'
    );

    tl.to(
        '.values__section__content__text .word',
        {
            yPercent: 0,
            stagger: { amount: 0.8 },
            ease: 'none'
        },
        '<'
    );

    tl.to(
        '.values__section__content__btn',
        {
            yPercent: 0,
            ease: 'none'
        },
        '<'
    );

    tl.set('.values__btn__wrapper', {
        overflow: 'initial'
    });
};
