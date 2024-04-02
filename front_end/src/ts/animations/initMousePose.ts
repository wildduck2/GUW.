import gsap from 'gsap';

export function initMousePose() {
    const cursorImage = document.querySelector<HTMLDivElement>('.mouse-pos-list-image');
    const cursorBtn = document.querySelector<HTMLDivElement>('.mouse-pos-list-btn');
    const cursorSpan = document.querySelector<HTMLDivElement>('.mouse-pos-list-span');
    const floatProjectContainer = document.querySelector<HTMLUListElement>(
        '.float-project-container'
    );
    const floatProjectContainerItem = floatProjectContainer?.querySelectorAll(
        'li'
    ) as NodeListOf<HTMLLIElement>;
    const mousePosListImageBounce = document.querySelectorAll(
        '.float-image-item'
    ) as NodeListOf<HTMLLIElement>;
    const mousePosListBtnBounce = document.querySelector('.mouse-pos-list-image-bounce');
    const projectList = document.querySelector('.projects-wrapper') as HTMLUListElement;

    if (!floatProjectContainer && !cursorImage) return;

    const cursorImggeDir = {
        x: 0,
        y: 0
    };

    // when mouse in and out actions
    floatProjectContainer?.addEventListener('mouseenter', () => {
        cursorImage?.classList.add('active');
        cursorBtn?.classList.add('active');
        cursorSpan?.classList.add('active');
        mousePosListBtnBounce?.classList.add('active');
        mousePosListImageBounce?.forEach((item) => item.classList.add('active'));
    });

    floatProjectContainer?.addEventListener('mouseleave', () => {
        cursorImage?.classList.remove('active');
        cursorBtn?.classList.remove('active');
        cursorSpan?.classList.remove('active');
        mousePosListBtnBounce?.classList.remove('active');
        mousePosListImageBounce?.forEach((item) => item.classList.remove('active'));
    });

    // float img movement with the cursor
    document.addEventListener('mousemove', (e) => {
        cursorImggeDir.x = e.clientX;
        cursorImggeDir.y = e.clientY;

        if (projectList.classList.contains('menu')) {
            cursorImage?.classList.remove('grid');
            cursorBtn?.classList.remove('pressed');
            cursorSpan?.classList.remove('pressed');
            cursorImage?.animate(
                {
                    left: `${cursorImggeDir.x}px`,
                    top: `${cursorImggeDir.y}px`
                },
                {
                    duration: 900,
                    fill: 'forwards'
                }
            );
        } else {
            cursorImage?.classList.add('grid');
            cursorBtn?.classList.add('pressed');
            cursorSpan?.classList.add('pressed');
        }
        cursorBtn?.animate(
            {
                left: `${cursorImggeDir.x}px`,
                top: `${cursorImggeDir.y}px`
            },
            {
                duration: 600,
                fill: 'forwards'
            }
        );
        cursorSpan?.animate(
            {
                left: `${cursorImggeDir.x}px`,
                top: `${cursorImggeDir.y}px`
            },
            {
                duration: 500,
                fill: 'forwards'
            }
        );
    });

    // float image indexing
    floatProjectContainerItem.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            gsap.to('.float-image-wrap', {
                y: (index * 100) / (floatProjectContainerItem.length * -1) + '%',
                duration: 0.6,
                ease: 'power2.inOut'
            });
        });
    });
}
