const BASE_CLASS = "main-nav";
const navigation = document.querySelector(`.${BASE_CLASS}`);
const toggle = navigation?.querySelector<HTMLButtonElement>(`.${BASE_CLASS}__toggle`);


function toggleNav() {
	const isWillBeOpen = (toggle as HTMLButtonElement).getAttribute('aria-expanded') === 'false';
	(toggle as HTMLButtonElement).setAttribute('aria-expanded', String(isWillBeOpen));
	(toggle as HTMLButtonElement).ariaLabel = `${isWillBeOpen ? 'Закрыть' : 'Открыть'} меню`;
}

export function initNav() {
	if (!navigation || !toggle) {
		return;
	}

	toggle.hidden = false;
	navigation.classList.add(`${BASE_CLASS}--enabled`);

	toggle.addEventListener("click", toggleNav);
}
