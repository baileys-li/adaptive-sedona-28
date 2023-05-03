const BASE_CLASS = "header",
			MEDIA_BP = '(min-width: 42rem)';

const navigation = document.querySelector(`.${BASE_CLASS}__nav`),
			toggle = navigation?.querySelector<HTMLButtonElement>(`.${BASE_CLASS}__toggle`),
			list = navigation?.querySelector<HTMLUListElement>(`.${BASE_CLASS}__list`);

const mediaQuery = window.matchMedia(MEDIA_BP);

if (navigation && toggle && list) {
	toggle.hidden = false;
	navigation.classList.add(`${BASE_CLASS}__nav--enabled`);

	toggle.addEventListener("click", toggleNav);
	mediaQuery.addEventListener('change', correctNavInert)
}

function toggleNav() {
	const isWillBeOpen = toggle!.getAttribute('aria-expanded') === 'false';

	toggle!.title = `${isWillBeOpen ? 'Закрыть' : 'Открыть'} меню`;
	toggle!.setAttribute('aria-expanded', String(isWillBeOpen));
	toggle!.setAttribute('aria-label',toggle!.title);

	list!.inert = !isWillBeOpen;
}

function correctNavInert() {
	const isClose = toggle!.getAttribute('aria-expanded') === 'false';
	list!.inert = !mediaQuery.matches && isClose;
}
