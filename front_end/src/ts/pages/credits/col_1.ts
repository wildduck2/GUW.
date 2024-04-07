import gsap from 'gsap'
import SplitType from 'split-type'

export const col_1_3 = () => {
    const projectsContainer = document.querySelector('.col__1__wrapper') as HTMLDivElement
    if (!projectsContainer) return
    const TWords = new SplitType('.col__1__title', {
        types: 'lines,words'
    }).words
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
        gsap.context(() => {
            gsap.set('.col__1__span', {
                display: 'inline-block',
                yPercent: 170
            })

            gsap.set('.col__1__title', {
                position: 'relative',
                background: 'white',
                overflow: 'hidden',
                zIndex: 3
            })

            gsap.set('.col__1__svg', {
                yPercent: 150
            })

            if (!projectsContainer) return
            gsap.set(TWords, {
                yPercent: 100
            })

            gsap.set('.col__1__wrapper img', {
                yPercent: 100,
                opacity: 0
            })

            gsap.set('.col__1__ul-1 img, .col__1__ul-2 img, .col__1__ul-3 img', {
                overflow: 'hidden'
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.col__1__title',
                    start: '10% bottom',
                    end: '650px bottom',
                    scrub: 0.7
                }
            })

            tl.to('.col__1__span', {
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
                '.col__1__svg',
                {
                    yPercent: 0,
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.col__1__wrapper',
                    start: '10% bottom',
                    end: '1950px bottom',
                    scrub: 0.7
                }
            })

            tl2.to(
                '.col__1__ul-1 img',
                {
                    yPercent: 0,
                    opacity: 1,
                    stagger: { amount: 0.6 },
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )

            tl2.to(
                '.col__1__ul-2 img',
                {
                    yPercent: 0,
                    opacity: 1,
                    stagger: { amount: 0.6 },
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )

            tl2.to(
                '.col__1__ul-3 img',
                {
                    yPercent: 0,
                    opacity: 1,
                    stagger: { amount: 0.6 },
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )
        })
    })
}
