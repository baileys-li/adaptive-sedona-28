const likes = document.querySelectorAll<HTMLButtonElement>(".like");

likes.forEach((like) => like.addEventListener("click", handleLike));

function handleLike() {
	const button = this as HTMLButtonElement;
	const willBeLiked = button.ariaPressed === "false",
		amount = Number(button.value),
		newAmount = willBeLiked ? amount + 1 : amount - 1;

	button.value = newAmount.toString();
	button.setAttribute('aria-pressed', String(willBeLiked));
	button.setAttribute('aria-description', `Всего лайков ${newAmount}`);
	toggle!.setAttribute('aria-label', `${willBeLiked ? 'Убрать' : 'Поставить'} лайк`);
}
