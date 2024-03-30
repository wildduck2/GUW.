export const menu_functionality = () => {
    const menu_button_rounded = document.querySelector(
        '.header__nav__container__btn '
    ) as HTMLDivElement;
    menu_button_rounded.addEventListener('click', () => {
        menu_button_rounded.classList.toggle('active');
    });
};
