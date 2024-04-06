import { gsap } from 'gsap';

export const WorksFilter = () => {
    const projectsContainer = document.querySelector('.projects-wrapper') as HTMLDivElement;

    if (projectsContainer) {
        const typeFilterButtons: NodeListOf<HTMLDivElement> =
            document.querySelectorAll('.filter-button');
        const projects = projectsContainer.querySelectorAll('.project') as NodeListOf<HTMLLIElement>;

        // checking if the button shpae and show the propjects correct grid with animation
        typeFilterButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const el = e.target as HTMLButtonElement;
                typeFilterButtons.forEach((button) => {
                    const btn = button.querySelector('.btn-text-m');
                    btn?.classList.add('change');
                    button.classList.remove('active');
                });
                el.querySelector('.btn-text-m')?.classList.remove('change');
                gsap.to('.btn-text-m.change span', { color: '#1C1D20', clearProps: 'all' });
                button.classList.add('active');

                projects.forEach((element) => {
                    element.classList.remove('show');

                    if (element.dataset.type === el.dataset.type) {
                        element.classList.add('show');
                    }
                    if (el.dataset.type === 'all') {
                        element.classList.add('show');
                    }
                });
            });
        });
    }
};
