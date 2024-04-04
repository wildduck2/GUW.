import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const slider_section = () => {
    const el = document.querySelector('.slider__section') as HTMLDivElement;

    if (!el) return;
    gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.slider__section',
                start: 'top 80%',
                end: '200% bottom',
                scrub: 1,
                toggleActions: 'play none none none'
                // markers: true
            },
            defaults: { ease: 'Power1.inOut' }
        });

        tl.to('.slider__1', {
            transform: 'translate(15%, 0) scale(1) rotate(0.001deg)'
        });

        tl.to(
            '.slider__2',
            {
                transform: 'translate(30%, 0) scale(1) rotate(0.001deg)'
            },
            '<'
        );
    });
};
