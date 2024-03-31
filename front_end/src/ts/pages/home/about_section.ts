import gsap from 'gsap';
import SplitType from 'split-type';

export const about_animation = () => {
    const aboutSection = document.querySelector('.about__section') as HTMLTableSectionElement;

    // NOTE: spliting text
    const aboutTitleWords = new SplitType('.about__section__title', {
        types: 'lines,words'
    }).words;
    const aboutDiscWords = new SplitType('.about__section__text', {
        types: 'lines,words'
    }).words;

    // NOTE: top elements
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top 60%',
            end: '90% bottom',
            scrub: 1,
            toggleActions: 'play none none none'
            // markers: true
        },

        defaults: {
            ease: 'power1.out'
        }
    });

    tl.set('.button__wrapper', {
        pointerEvents: 'none'
    });

    tl.to(aboutTitleWords, {
        y: 0,
        stagger: { amount: 0.4 }
    });

    tl.to(
        aboutDiscWords,
        {
            y: 0,
            stagger: { amount: 0.4 }
        },
        '>'
    );

    tl.to(
        '.button__wrapper button',
        {
            y: 0,
            opacity: 1
        },
        '-=0.5'
    );

    tl.set('.button__wrapper', { overflow: 'visible', pointerEvents: 'all' }, '+=0.1');

    // NOTE: logos
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top 40%',
            end: '130% bottom',
            // scrub: 1,
            toggleActions: 'play none none none'
            // markers: true
        }
    });

    tl2.to(
        '.about__section__logos li',
        {
            y: 0,
            stagger: 0.1,
            ease: 'none',
            onStart: () => { }
        },
        '-=0.5'
    );
    gsap
        .to('.about__section__logos', {
            xPercent: 100,
            repeat: -1,
            ease: 'linear',
            duration: 10
        })
        .totalProgress(0.5);
};
