import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const hero_animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero__section',
                start: '-10% top',
                end: '180% bottom',
                scrub: 1,
                toggleActions: 'play none none none',
                markers: true
            },
            defaults: {
                ease: 'power1.out'
            }
        });

        tl.set('.hero__section__right__bottom', {
            overflow: 'initial'
        });

        tl.set('.hero__section__right__bottom > div:first-child', {
            overflow: 'initial'
        });

        tl.to('.hero__section__right__top h1', {
            yPercent: -20
        });

        tl.to(
            '.hero__section__right__top p',
            {
                yPercent: -40
            },
            '<'
        );

        tl.to(
            '.hero__section__right__top button',
            {
                yPercent: '-=30'
            },
            '<'
        );

        tl.to(
            '.once-in-t',
            {
                yPercent: '-=30',
                stagger: 0.2
            },
            '<'
        );

        tl.to(
            '.hero__section__left__img',
            {
                yPercent: '-=10'
            },
            '<'
        );

        tl.to(
            '.hero__section__left__svg',
            {
                yPercent: '-=10'
            },
            '<'
        );

        tl.to(
            '.hero__section__left__img img',
            {
                yPercent: -15
            },
            '<'
        );
    });
};
