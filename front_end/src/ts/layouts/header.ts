export const menu_functionality = () => {
    const menu_button_rounded = document.querySelector(
        '.header__nav__container__btn '
    ) as HTMLDivElement
    menu_button_rounded.addEventListener('click', () => {
        menu_button_rounded.classList.toggle('active')
    })

    const menu = document.querySelector('.main__menu') as HTMLDivElement

    const lis = document.querySelectorAll('.main__menu__list li') as NodeListOf<HTMLLIElement>

    lis.forEach((item: HTMLLIElement, index: number) => {
        item.onmouseover = () => {
            console.log(lis)
            menu.dataset.activeIndex = index.toString()
        }
    })
}
