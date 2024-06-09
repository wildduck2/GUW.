import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const addGridStyle = () => {
    const ely = document.querySelector('.projects-wrapper') as HTMLDivElement

    if (!ely) return
    if (window.innerWidth < 768) {
        ely?.classList.add('grid')
        ely?.classList.remove('menu')
    } else {
        ely.classList.remove('grid')
        ely?.classList.add('menu')
    }
}

export const works_animation = () => {
    gsap.registerPlugin(ScrollTrigger)

    const el = document.querySelector('.works__section') as HTMLDivElement
    window.addEventListener('resize', addGridStyle)

    if (!el) return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
        gsap.context(() => {
            gsap.set('.works__section__title', {
                x: -50
            })

            gsap.set('.float-project-container', {
                yPercent: 40
            })

            gsap.set('.works__section__btn', {
                overflow: 'hidden'
            })

            gsap.set('.works__section__btn button', {
                yPercent: 100
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.works__section',
                    start: 'clamp(top bottom)',
                    end: 'clamp(98% bottom)',
                    scrub: 1,
                    toggleActions: 'play none none none'
                },

                defaults: {
                    ease: 'power1.out'
                }
            })

            tl.to('.works__section__title', {
                x: 0
            })

            tl.to(
                '.float-project-container',
                {
                    yPercent: 0
                },
                '<'
            )

            tl.to(
                '.works__section__btn button',
                {
                    yPercent: 0
                },
                '-=0.5'
            )

            tl.set('.works__section__btn', {
                overflow: 'visible'
            })
        })
    })
}
