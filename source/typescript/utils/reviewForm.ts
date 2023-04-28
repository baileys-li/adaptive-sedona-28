const form = document.querySelector<HTMLFormElement>('.review'),
			successModal = document.querySelector<HTMLDialogElement>('#success'),
			failModal = document.querySelector<HTMLDialogElement>('#fail');


form?.addEventListener('submit', (evt) => {
	evt.preventDefault();
	form.checkValidity() ? successModal?.showModal() : failModal?.showModal();
})
