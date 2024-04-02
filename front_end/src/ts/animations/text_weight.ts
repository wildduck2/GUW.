import gsap from 'gsap';
import SplitType from 'split-type';

export const text_weight = () => {
    const fontWeightItems: NodeListOf<HTMLElement> = document.querySelectorAll(
        '[data-animate=font-weight]'
    );
    const maxDistance = 300; // Adjust the maximum distance for font weight change as needed
    const maxFontWeight = 800; // Maximum font weight
    const minFontWeight = 100; // Minimum font weight

    fontWeightItems.forEach((item) => {
        item.setAttribute('data-cursor', '-lg'); // Uncomment if necessary
        let splitChars;
        if (!item.querySelector('.char')) {
            const splitCharType = new SplitType(item, { types: 'chars,words' });
            splitChars = splitCharType.chars;
        } else {
            splitChars = item.querySelectorAll('.char') as NodeListOf<HTMLElement>;
        }

        splitChars?.forEach((char) => {
            char.dataset.initialWeight = parseInt(window.getComputedStyle(char).fontWeight).toString(); // Store initial font weight

            char.addEventListener('mouseenter', () => {
                const charTl = gsap.timeline();
                charTl.to(char, {
                    fontWeight: maxFontWeight,
                    duration: 0.5
                });
            });

            char.addEventListener('mouseleave', () => {
                const charTl = gsap.timeline();
                charTl.to(char, {
                    fontWeight: parseInt(char.dataset.initialWeight!),
                    duration: 0.5
                });
            });
        });
    });

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        fontWeightItems.forEach((item) => {
            const chars = item.querySelectorAll('.char') as NodeListOf<HTMLElement>;
            chars.forEach((char) => {
                const itemPosition = char.getBoundingClientRect();
                const itemWidth = char.offsetWidth;
                const itemHeight = char.offsetHeight;
                const itemCenterX = itemPosition.left + itemWidth / 2;
                const itemCenterY = itemPosition.top + itemHeight / 2 + window.scrollY;
                const distance = Math.sqrt(
                    Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2)
                );
                let fontWeight = minFontWeight;
                if (distance < maxDistance) {
                    const weightRange = maxFontWeight - minFontWeight;
                    const distanceRatio = (maxDistance - distance) / maxDistance;
                    fontWeight = minFontWeight + weightRange * distanceRatio;
                }
                gsap.to(char, {
                    fontWeight: fontWeight,
                    duration: 0.5
                });
            });
        });
    });
};
