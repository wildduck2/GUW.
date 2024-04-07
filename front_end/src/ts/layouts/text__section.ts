import gsap from 'gsap'
import SplitType from 'split-type'

export const text__section = () => {
    const pin__section = document.querySelector('.col__2') as HTMLDivElement
    if (!pin__section) return

    new SplitType('.pin__section h2', {
        types: 'lines,words'
    })
    if (!document.querySelector('.pin__section')) return

    const mm = gsap.matchMedia()
    // mm.add('(min-width: 768px)', () => {
    gsap.context(() => {
        gsap.set('.pin__section h2 .word', {
            yPercent: 100
        })

        gsap.set('.pin__section h2 .line', {
            overflow: 'hidden'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.pin__section',
                start: 'top top',
                end: 'clamp(+=3400, bottom)',
                pin: '.pin__section',
                scrub: true
            }
        })

        tl.to('.col__2__title-1 .word', {
            yPercent: 0,
            stagger: { amount: 0.8 },
            ease: 'Power1.inOut'
        })

        tl.to('.col__2__title-1 .word', {
            yPercent: -100,
            stagger: { amount: 0.8 },
            ease: 'Power1.inOut'
        })

        tl.to('.col__2__title-2 .word', {
            yPercent: 0,
            stagger: { amount: 0.8 },
            ease: 'Power1.inOut'
        })

        tl.to('.col__2__title-2 .word', {
            yPercent: -100,
            stagger: { amount: 0.8 },
            ease: 'Power1.inOut'
        })

        if (!document.querySelector('.col__2__title-3')) return
        tl.to('.col__2__title-3 .word', {
            yPercent: 0,
            stagger: { amount: 0.8 },
            ease: 'Power1.inOut'
        })

        tl.to('.col__2__title-3 .word', {
            yPercent: -100,
            stagger: { amount: 0.8 },
            ease: 'Power1.inOut'
        })
    })
    // })
}
