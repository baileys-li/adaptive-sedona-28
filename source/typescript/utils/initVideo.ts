const BEM_BLOCK = "video";

const initVideos = () =>
	document.querySelectorAll<HTMLElement>(`.${BEM_BLOCK}`).forEach(initVideo);

function initVideo(wrapper: HTMLElement) {
	const button = wrapper.querySelector<HTMLButtonElement>(
			`.${BEM_BLOCK}__play`
		),
		link = wrapper.querySelector<HTMLAnchorElement>(`.${BEM_BLOCK}__link`),
		image = wrapper.querySelector<HTMLImageElement>(`.${BEM_BLOCK}__image`);

	if (!button || !link || !image) return;

	button.hidden = false;
	const youtubeID = link.href.slice(-11);
	link.removeAttribute("href");

	const initWidth = image.getAttribute("width") || "400";
	const initHeight = image.getAttribute("width") || "225";
	wrapper.addEventListener("click", () =>
		wrapper.parentElement?.replaceChild(
			createYouTubeFrame(youtubeID, initWidth, initHeight, wrapper.className),
			wrapper
		)
	);
}

function createYouTubeFrame(
	id: string,
	width: string,
	height: string,
	className = ""
) {
	const iframe = document.createElement("iframe");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("allow", "autoplay");
	iframe.setAttribute(
		"src",
		`https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`
	);
	iframe.width = width;
	iframe.height = height;
	iframe.className = className;

	return iframe;
}

export { initVideos };
