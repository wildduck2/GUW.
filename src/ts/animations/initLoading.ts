// @ts-ignore
import { ITransitionData } from "@barba/core";
import { gsap } from "gsap/gsap-core";
import SplitType from "split-type";
import { initHomePage, initHomePageAnimations } from "./home_animations";

export const initPageOnce = () => {
	const tl = gsap.timeline({});

	new SplitType(".arabic", { types: "lines,words" });

	tl.to(".loader__h2 .word", {
		y: 150,
	});

	tl.set(".loader__h2.arabic.active", {
		opacity: 1,
		pointerEvents: "none",
	});

	tl.to(".loader__h2.active .word", {
		y: 0,
		duration: 0.8,
		stagger: { amount: 0.4 },
		ease: "Power1.easeInOut",
	});

	tl.to(
		".loader__h2.active .word",
		{
			yPercent: -100,
			duration: 0.8,
			stagger: { amount: 0.4 },
			ease: "Power1.easeInOut",
		},
		"+=.2",
	);

	tl.to(
		".loader",
		{
			yPercent: -100,
			stagger: 0.4,
			duration: 0.8,
			ease: "Power4.easeInOut",
			delay: 0.2,
		},
		"-=0.5",
	);

	initPageAnimations(tl);
};

export const initLoaderHome = () => {
	const tl = gsap.timeline({});
	initHomePage();

	//NOTE: starting the animation

	tl.to(".loader__h2.active .char", {
		y: 0,
		stagger: { amount: 0.4 },
		duration: 0.5,
	});

	tl.to(
		".loader__h2.active .char",
		{
			yPercent: -100,
			stagger: { amount: 0.4 },
			duration: 0.5,
		},
		"+=0.5",
	);

	tl.to(
		".loader",
		{
			yPercent: -100,
			stagger: 0.4,
			duration: 0.8,
			ease: "Power4.easeInOut",
			delay: 0.2,
		},
		"<.5",
	);

	initHomePageAnimations(tl);
};

export const initPageLeave = () => {
	const tl = gsap.timeline();

	tl.set(".loader", {
		yPercent: 100,
	});

	tl.to(".loader_second", {
		yPercent: 0,
		duration: 0.8,
		ease: "Power4.easeInOut",
	});

	tl.to(
		".loader_first",
		{
			yPercent: 0,
			duration: 0.8,
			ease: "Power4.easeInOut",
			delay: 0.2,
		},
		"-=.7",
	);
};
export const initPageEnter = () => {
	const tl = gsap.timeline();
	new SplitType(".arabic", { types: "lines,words" });
	console.log(window.location.pathname);

	tl.set(".loader__h2.init", {
		opacity: 0,
		pointerEvents: "none",
	});

	tl.set(".loader__h2.arabic.active", {
		opacity: 1,
		pointerEvents: "none",
	});

	tl.to(
		".loader__h2.active .word",
		{
			y: 0,
			duration: 0.8,
			stagger: { amount: 0.4 },
			ease: "Power1.easeInOut",
		},
		"+=.2",
	);

	tl.to(
		".loader__h2.active .word",
		{
			yPercent: -100,
			duration: 0.8,
			stagger: { amount: 0.4 },
			ease: "Power1.easeInOut",
		},
		"+=.2",
	);

	tl.to(
		".loader",
		{
			yPercent: -100,
			stagger: 0.4,
			duration: 0.8,
			ease: "Power4.easeInOut",
			delay: 0.2,
		},
		"-=0.5",
	);

	const location = window.location.pathname;

	if (location === "/index.html") {
		initHomePage();
		initHomePageAnimations(tl);
	} else {
		initPageAnimations(tl);
		//
		// if (window.location.pathname === './about.html') {
		//     col_1();
		// }
	}
};

export const initPageAnimations = (tl: gsap.core.Timeline) => {
	//NOTE: splitting headers
	new SplitType(".once-in-title", { types: "lines,words" });

	//NOTE: setting values
	gsap.set(".once-in-view img", {
		scale: 1.8,
		transformOrigin: "center",
	});

	gsap.set(".once-in-title .line", {
		overflow: "hidden",
	});

	gsap.set(".once-in-title .word", {
		yPercent: 120,
	});

	tl.to(
		".once-in-view img",
		{
			scale: 1.4,
			duration: 0.8,
			ease: "Power4.easeInOut",
			delay: 0.2,
		},
		"-=.9",
	);

	tl.to(
		".once-in-title .word",
		{
			yPercent: 0,
			stagger: { amount: 0.4 },
			duration: 0.8,
			ease: "Power1.easeInOut",
		},
		"<.2",
	);
};

export function initNextWord(data: ITransitionData) {
	// update Text Loading https://github.com/barbajs/barba/issues/507
	const parser = new DOMParser();
	const dom = parser.parseFromString(data.next.html, "text/html");
	const nextProjects = dom.querySelector(".loading-words");
	document.querySelector(".loading-words")!.innerHTML = nextProjects!.innerHTML;
}

export function delay(n: number) {
	n = n || 2000;
	return new Promise<void>((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}
