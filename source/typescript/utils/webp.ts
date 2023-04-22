import supportsWebP from 'supports-webp';

export async function checkWebPSupport() {
	const isSupported = await supportsWebP;

	if (!isSupported) {
		document.body.classList.add('no-webp');
	}
}

