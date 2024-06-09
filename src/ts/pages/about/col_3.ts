import gsap from 'gsap';
import SplitType from 'split-type';

export const col_3 = () => {
    const col_3 = document.querySelector('.col__1__btn__wrapper__btn') as HTMLDivElement;

    if (!col_3) return;

    const TWords = new SplitType('.col__3__title', {
        types: 'lines,words'
    }).words;

    new SplitType('.accordion-header h3', {
        types: 'lines,words'
    }).lines;

    new SplitType('.accordion p', {
        types: 'lines,words'
    }).lines;

    //NOTE: set initial values
    gsap.set('.col__3__span', {
        yPercent: 170
    });

    gsap.set('.col__3__right', {
        overflow: 'hidden'
    });

    gsap.set('.col__3__title', {
        position: 'relative',
        background: '#1c1d20',
        overflow: 'hidden',
        zIndex: 3
    });

    gsap.set('.col__3__svg', {
        yPercent: 150
    });

    gsap.set(TWords, {
        yPercent: 100
    });

    gsap.set('.col__3.about__col > div', {
        overflow: 'initial'
    });

    gsap.set('.accordion-header, .accordion p .line', {
        overflow: 'hidden'
    });

    gsap.set('.accordion-header h3 .word, .accordion li p .word', {
        yPercent: -115
    });

    gsap.set('.accordion-header svg', {
        opacity: 0
    });

    gsap.set('.accordion .stripe', {
        yPercent: 150,
        opacity: 0
    });

    //NOTE: animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.col__3__title',
            start: 'top bottom',
            end: '550px bottom',
            scrub: 0.7
        }
    });

    tl.to('.col__3__span', {
        yPercent: 0,
        ease: 'Power1.easeInOut',
        delay: 0.2
    });

    tl.to(
        TWords,
        {
            yPercent: 0,
            stagger: { amount: 0.6 },
            ease: 'Power1.easeInOut',
            delay: 0.2
        },
        '<'
    );

    tl.to(
        '.col__3__svg',
        {
            yPercent: 0,
            ease: 'Power1.easeInOut',
            delay: 0.2
        },
        '<'
    );

    // NOTE: pin
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.col__3',
            start: 'top 40%',
            end: '80% bottom',
            scrub: 0.7
        }
    });

    tl3.to('.accordion-header h3 .word, .accordion .stripe', {
        opacity: 1,
        yPercent: 0,
        stagger: { amount: 0.8 },
        ease: 'Power1.easeInOut'
    });

    tl3.to(
        '.accordion-header svg',
        {
            opacity: 1,
            stagger: { amount: 0.8 },
            ease: 'Power1.easeInOut'
        },
        '<'
    );

    tl3.to(
        '.accordion p .word',
        {
            yPercent: 0,
            stagger: { amount: 0.8 },
            ease: 'none'
        },
        ''
    );
};
