export const accordion = () => {
    const el = document.querySelectorAll('.accordion li') as NodeList<HTMLLIElement>;
    const headers = document.querySelectorAll('.accordion-header') as NodeList<HTMLDivElement>;
    const ps = document.querySelectorAll('.about__col__p') as NodeList<HTMLDivElement>;

    if (!el) return;

    headers.forEach((item: HTMLLIElement, index: number) => {
        item.addEventListener('click', () => {
            el.forEach((li: HTMLLIElement) => {
                li.classList.remove('active');
            });

            el[index].classList.add('active');
        });
    });
};
