export const menu_functionality = () => {
    const menu_button_rounded = document.querySelector(
        '.header__nav__container__btn '
    ) as HTMLDivElement
    const _menu = document.querySelector('.main__menu') as HTMLDivElement
    const hamburger = document.querySelector('.hamburger-button-wrapper') as HTMLDivElement
    menu_button_rounded.addEventListener('click', () => {
        hamburger.classList.toggle('active-hamburger')
        _menu.classList.toggle('active')
        menu_button_rounded.classList.toggle('active')
    })

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active-hamburger')
        _menu.classList.toggle('active')
        menu_button_rounded.classList.toggle('active')
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            hamburger.classList.add('show-hamburger-scroll')
        } else {
            hamburger.classList.remove('show-hamburger-scroll')
        }
    })

    const menu = document.querySelector('.main__menu') as HTMLDivElement

    const lis = document.querySelectorAll('.main__menu__list li') as NodeListOf<HTMLLIElement>

    lis.forEach((item: HTMLLIElement) => {
        item.addEventListener('click', () => {
            _menu.classList.remove('active')
            menu_button_rounded.classList.remove('active')
            hamburger.classList.remove('active-hamburger')
        })
    })

    lis.forEach((item: HTMLLIElement, index: number) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index.toString()
        }
    })
}
