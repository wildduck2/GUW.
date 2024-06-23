import gsap from 'gsap'
import SplitType from 'split-type'

export const col_2 = () => {
    const col_2 = document.querySelector('.col__1__btn__wrapper__btn') as HTMLDivElement

    if (!col_2) return

    const TWords = new SplitType('.col__2__title', {
        types: 'lines,words'
    }).words

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
        gsap.context(() => {
            gsap.set('.col__2__span', {
                yPercent: 170
            })

            gsap.set('.col__2__pin', {
                overflow: 'hidden'
            })

            gsap.set('.col__2__title', {
                position: 'relative',
                background: 'white',
                overflow: 'hidden',
                zIndex: 3
            })

            gsap.set('.col__2__svg', {
                yPercent: 150
            })

            gsap.set(TWords, {
                yPercent: 100
            })

            gsap.set('.our__team img', {
                scale: 0.5,
                opacity: 0
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.col__2__title',
                    start: 'top bottom',
                    end: '650px bottom',
                    scrub: 0.7
                }
            })

            tl.to('.col__2__span', {
                yPercent: 0,
                ease: 'Power1.easeInOut',
                delay: 0.2
            })

            tl.to(
                TWords,
                {
                    yPercent: 0,
                    stagger: { amount: 0.6 },
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )

            tl.to(
                '.col__2__svg',
                {
                    yPercent: 0,
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )

            tl.set('.col__2.about__col > div', {
                overflow: 'initial'
            })

            // NOTE: imgs

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.col__2',
                    start: 'clamp(-10% 98%)',
                    end: 'clamp(110% bottom)',
                    scrub: 0.5
                    // markers: true
                }
            })

            tl2.to(
                '.our__team img',
                {
                    scale: 1,
                    opacity: 1,
                    stagger: { amount: 0.8 },
                    ease: 'Power1.easeInOut'
                },
                '<'
            )

            // NOTE: pin
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.col__2',
                    start: 'top 40%',
                    end: 'bottom bottom',
                    pin: '.col__2__pin',
                    // pinSpacing: true,
                    scrub: 0.1
                }
            })
        })
    })
}
