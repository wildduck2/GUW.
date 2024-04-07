import gsap from 'gsap'
import SplitType from 'split-type'

export const col_1_2 = () => {
    const projectsContainer = document.querySelector('.col__1__span') as HTMLDivElement
    const el = document.querySelector('.col__1.works_section ') as HTMLDivElement
    if (!projectsContainer || !el) return

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

            gsap.set(TWords, {
                yPercent: 100
            })

            gsap.set('.filters-wrapper button , .col__1__btn__wrapper button', {
                yPercent: 100
            })

            gsap.set('.col__1.works_section >div:nth-child(1), .filters-wrapper', {
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

            tl.to(
                '.filters-wrapper button',
                {
                    yPercent: 0,
                    stagger: { amount: 0.8 },
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '<'
            )

            tl.set(
                '.filters-wrapper',
                {
                    overflow: 'visible'
                },
                '-=0.3'
            )
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.col__1__title',
                    start: '24% 70%',
                    end: '850px bottom',
                    scrub: 0.7
                }
            })

            tl2.to(
                '.col__1__btn__wrapper button',
                {
                    yPercent: 0,
                    stagger: { amount: 0.8 },
                    ease: 'Power1.easeInOut',
                    delay: 0.2
                },
                '+=.3'
            )
        })
    })
}
