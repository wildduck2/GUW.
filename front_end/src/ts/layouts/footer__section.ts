import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const footer__section = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.context(() => {
        gsap.set('.footer__section__col1 h2', {
            yPercent: 100
        });

        gsap.set('.footer__section__col2 button', {
            xPercent: 150
        });

        gsap.set('.footer__section__col2 img', {
            yPercent: 150,
            xPercent: 150
        });

        gsap.set('.footer__section__col3 button', {
            yPercent: 150
        });

        gsap.set('.footer__section__col4', {
            yPercent: 150
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer__section',
                start: '0% 100%',
                end: '90% bottom',
                scrub: 1
            },
            defaults: {
                rotate: '0.001deg',
                ease: 'none'
            }
        });

        tl.to(
            '.footer-shape',
            {
                height: 0
            },
            0
        );

        tl.to(
            '.footer__section__col1 h2',
            {
                yPercent: 0
            },
            0
        );

        tl.to(
            '.footer__section__col2 button',
            {
                xPercent: 0
            },
            0
        );

        tl.to(
            '.footer__section__col2 img',
            {
                xPercent: 0,
                yPercent: 0
            },
            0
        );

        tl.to(
            '.footer__section__col3 button',
            {
                yPercent: 0,
                stagger: 0.2
            },
            0
        );

        tl.to(
            '.footer__section__col4',
            {
                yPercent: 0
            },
            0
        );
    });
};
