import gsap from 'gsap'

export const initMagnetic = () => {
    const domElemetns = document.querySelectorAll('.magnetic') as NodeListOf<HTMLElement>

    let boundingClientRect: DOMRect,
        domElementText: Element | null,
        domElementFill: Element | null,
        magnetsStrength: string | null,
        magnetsStrengthText: string | null

    const buttonMovement = (Element: HTMLElement, event: MouseEvent) => {
        domElementText = Element.querySelector('.btn-text-m')
        boundingClientRect = Element.getBoundingClientRect()
        magnetsStrength = Element.getAttribute('data-strength') as string
        magnetsStrengthText = Element.getAttribute('data-strength-text') as string

        // setting context scope to prevent buggs in animation on larger screens
        const ctx1 = gsap.context(() => {
            if (window.innerWidth > 540) {
                gsap.to(Element, {
                    x:
                        ((event.clientX - boundingClientRect.left) / Element.offsetWidth - 0.5) *
                        +magnetsStrength!,
                    y:
                        ((event.clientY - boundingClientRect.top) / Element.offsetHeight - 0.5) *
                        +magnetsStrength!,
                    rotate: '0.001deg',
                    duration: 1.5,
                    ease: 'power4.out'
                })

                if (domElementText) {
                    gsap.to(domElementText, {
                        x:
                            ((event.clientX - boundingClientRect.left) / Element.offsetWidth - 0.5) *
                            +magnetsStrengthText!,
                        y:
                            ((event.clientY - boundingClientRect.top) / Element.offsetHeight - 0.5) *
                            +magnetsStrengthText!,
                        duration: 1.5,
                        ease: 'power4.out'
                    })
                }
            }
        })
        return () => ctx1.revert()
    }

    // mouseEnter handler animation
    domElemetns.forEach((Element: HTMLElement) => {
        Element.addEventListener('mouseenter', (event: MouseEvent | any) => {
            domElementFill = Element.querySelector('.btn-fill')
            buttonMovement(Element, event)
            const chngeFilterText = Element.querySelectorAll('.change, .change > span')

            const ctx2 = gsap.context(() => {
                // if there is a fill layer do else not
                if (window.innerWidth > 540) {
                    if (domElementFill) {
                        gsap.to(domElementFill, 0.6, {
                            startAt: { y: '76%' },
                            y: '0%',
                            ease: 'power2.inOut'
                        })
                    }
                }
                // anomation for the works button
                if (event.target?.closest('.works-btn')) {
                    if (window.innerWidth > 540) {
                        gsap.to('.btn-c', 0.3, {
                            startAt: { color: '#1C1D20' },
                            color: '#FFFFFF',
                            ease: 'power3.inOut'
                        })
                    }
                }

                if (chngeFilterText.length) {
                    gsap.to(chngeFilterText, {
                        startAt: { color: '#1C1D20', stroke: '#1C1D20' },
                        color: '#FFFFFF',
                        stroke: '#FFFFFF',
                        duration: 0.3,
                        ease: 'power2.in'
                    })
                }
            })
            return () => ctx2.revert()
        })
    })

    domElemetns.forEach((Element: HTMLElement) => {
        Element.addEventListener('mousemove', (event: MouseEvent) => {
            buttonMovement(Element, event)
        })
    })

    domElemetns.forEach((Element: HTMLElement) => {
        Element.addEventListener('mouseleave', () => {
            domElementText = Element.querySelector('.btn-text-m')
            const magnetButtonfill = Element.querySelector('.btn-fill')
            const btnC = Element.querySelector('.btn-c')
            const chngeFilterText = Element.querySelectorAll('.change, .change > span')

            // restring all tweens on mouseLeave
            const ctx3 = gsap.context(() => {
                gsap.to(Element, 1.5, {
                    x: 0,
                    y: 0,
                    ease: 'elastic.out'
                })

                if (domElementText) {
                    gsap.to(domElementText, 1.5, {
                        x: 0,
                        y: 0,
                        ease: 'elastic.out'
                    })
                    if (chngeFilterText.length) {
                        gsap.to(chngeFilterText, {
                            color: '#1C1D20',
                            stroke: '#1C1D20',
                            ease: 'power3.inOut',
                            duration: 0.3,
                            delay: 0.3
                        })
                    }
                }

                if (magnetButtonfill) {
                    gsap.to(magnetButtonfill, 0.6, {
                        y: '-76%',
                        ease: 'power2.inOut'
                    })
                }

                if (window.innerWidth > 540) {
                    if (btnC) {
                        gsap.to(btnC, 0.3, {
                            color: '#1C1D20',
                            ease: 'power3.inOut',
                            delay: 0.3
                        })
                    }
                }

                return () => ctx3.revert()
            })
        })
    })
}
