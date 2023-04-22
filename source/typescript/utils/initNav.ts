const BASE_CLASS = "main-nav",
			navigation = document.querySelector(`.${BASE_CLASS}`),
			toggle = navigation?.querySelector<HTMLButtonElement>(`.${BASE_CLASS}__toggle`),
			list = navigation?.querySelector<HTMLUListElement>(`.${BASE_CLASS}__list`);

if (navigation && toggle && list) {
	toggle.hidden = false;
	navigation.classList.add(`${BASE_CLASS}--enabled`);

	toggle.addEventListener("click", toggleNav);
}

function toggleNav() {
	const isWillBeOpen = toggle!.getAttribute('aria-expanded') === 'false';

	toggle!.setAttribute('aria-expanded', String(isWillBeOpen));
	toggle!.ariaLabel = toggle!.title = `${isWillBeOpen ? 'Закрыть' : 'Открыть'} меню`;
	list!.inert = !isWillBeOpen;
}
