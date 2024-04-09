import gsap from 'gsap';
import SplitType from 'split-type';

export const col_1 = () => {
    const col_1 = document.querySelector('.col__1__btn__wrapper__btn') as HTMLDivElement;

    if (!col_1) return;

    const TWords = new SplitType('.col__1__title', {
        types: 'lines,words'
    }).words;

    const PWords = new SplitType('.col__1__p', {
        types: 'lines,words'
    }).words;

    gsap.set('.col__1__span', {
        yPercent: 170
    });

    gsap.set('.col__1__svg', {
        yPercent: 100
    });

    gsap.set(TWords, {
        yPercent: 100
    });

    gsap.set(PWords, {
        yPercent: 100
    });

    gsap.set('.col__1.about__col > div', {
        overflow: 'hidden'
    });

    gsap.set('.col__1.about__col > div > h2', {
        background: 'white',
        overflow: 'hidden',
        zIndex: 3
    });

    gsap.set('.col__1__p .line', {
        overflow: 'hidden'
    });

    gsap.set('.col__1.about__col > div  button', {
        yPercent: 120
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.col__1.about__col',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 0.7
        }
    });

    tl.to('.col__1.about__col > div > span', {
        yPercent: 0,
        duration: 0.8,
        ease: 'Power1.easeInOut',
        delay: 0.2
    });

    tl.to(
        TWords,
        {
            yPercent: 0,
            duration: 0.8,
            stagger: { amount: 0.8 },
            ease: 'Power1.easeInOut',
            delay: 0.2
        },
        '<'
    );

    tl.to(
        PWords,
        {
            yPercent: 0,
            duration: 0.8,
            stagger: { amount: 0.8 },
            ease: 'Power1.easeInOut',
            delay: 0.2
        },
        '<0.3'
    );

    tl.to(
        '.col__1.about__col > div > svg',
        {
            yPercent: 0,
            duration: 0.8,
            ease: 'Power4.easeInOut',
            delay: 0.2
        },
        '-=.7'
    );

    tl.to(
        '.col__1.about__col > div   button',
        {
            yPercent: 0,
            duration: 0.8,
            ease: 'Power1.easeInOut',
            delay: 0.2
        },
        '-=.7'
    );

    tl.set('.col__1.about__col > div', {
        overflow: 'initial'
    });
};
