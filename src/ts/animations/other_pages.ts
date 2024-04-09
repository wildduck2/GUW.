import gsap from 'gsap'

export const other_pages = () => {
    const onceInView = document.querySelector('.once-in-view') as HTMLDivElement
    if (!onceInView) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
        gsap.context(() => {
            gsap.set('.once-in-view img', {
                // y: 100,
                scale: 1.4
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.page__hero__section',
                    start: '-10% top',
                    end: '230% bottom',
                    scrub: true
                    // markers: true
                }
            })

            tl.to('.once-in-view img', {
                y: 0,
                scale: 1,
                ease: 'Power1.easeInOut'
            })
        })
    })
}
