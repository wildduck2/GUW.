import gsap from 'gsap';
import SplitType from 'split-type';

export const credits_animation = () => {
    //NOTE: spliting text
    new SplitType('.credits__section__wrapper__title', {
        types: 'words'
    });

    new SplitType('.credits__section__wrapper__text', {
        types: 'words,lines'
    });

    //NOTE: making the animation
    gsap.set('.credits__section__wrapper__title .word', {
        yPercent: 100
    });

    gsap.set('.credits__section__wrapper__text .word', {
        yPercent: 100
    });

    gsap.set('.credits__section__wrapper__wrapper__btn', {
        yPercent: 100
    });
    gsap.set('.credits__section__wrapper__list__item', {
        yPercent: 130
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.credits__section',
            start: 'top 85%',
            end: '90% bottom',
            scrub: 1,
            toggleActions: 'play none none none'
            // markers: true
        },
        defaults: {
            ease: 'power1.out'
        }
    });

    tl.to('.credits__section__wrapper__title .word', {
        yPercent: 0,
        stagger: { amount: 0.4 }
    });

    tl.to(
        '.credits__section__wrapper__text .word',
        {
            yPercent: 0,
            stagger: { amount: 0.4 }
        },
        '<'
    );

    tl.to(
        '.credits__section__wrapper__wrapper__btn',
        {
            yPercent: 0,
            opacity: 1
        },
        '-=0.5'
    );

    tl.set('.credits__section__wrapper__wrapper', { overflow: 'visible', pointerEvents: 'all' }, '<');

    //NOTE: credit swiper
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.credits__section',
            start: 'top 35%',
            // end: '110% 120%',
            end: '+=200px',
            pin: '.credits__section',
            pinType: 'transform',
            scrub: 1,
            toggleActions: 'play none none none'
            // markers: true
        }
    });

    tl2.to(
        '.credits__section__wrapper__list__item',
        {
            yPercent: 0,
            stagger: 0.1,
            ease: 'none',
            onStart: () => { }
        },
        '-=0.1'
    );

    gsap
        .to('.credits__section__wrapper__list', {
            xPercent: 100,
            repeat: -1,
            ease: 'linear',
            duration: 10
        })
        .totalProgress(0.5);
};
