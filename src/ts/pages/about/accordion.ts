export const accordion = () => {
    const el = document.querySelectorAll('.accordion li') as NodeListOf<HTMLLIElement>
    const headers = document.querySelectorAll('.accordion-header') as NodeListOf<HTMLDivElement>

    if (!el) return

    headers.forEach((item, index: number) => {
        item.addEventListener('click', () => {
            el.forEach((li: HTMLLIElement) => {
                li.classList.remove('active')
            })

            el[index].classList.add('active')
        })
    })
}
