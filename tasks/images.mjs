import gulp from "gulp";
import sharpResponsive from "gulp-sharp-responsive";
import cache from "gulp-cache";

import { Path } from "./_constants.mjs";

const RE_SIZERS = [(image) => image.width, (image) => Math.ceil((image.width * 2) / 3), (image) => Math.ceil(image.width / 3)];
const RE_NAMERS = [{ suffix: "@3x" }, { suffix: "@2x" }];
const OPTIONS = createOptionsFormat();

function processImages() {
	return gulp
		.src(Path.IMAGES.src)
		.pipe(cache(sharpResponsive(OPTIONS)))
		.pipe(gulp.dest(Path.IMAGES.dest));
}

function createOptionsFormat() {
	const formats = [];

	for (const format of [undefined, "avif", "webp"]) {
		formats.push(
			{
				width: RE_SIZERS[0],
				rename: RE_NAMERS[0],
				format,
			},
			{
				width: RE_SIZERS[1],
				rename: RE_NAMERS[1],
				format,
			},
			{ width: RE_SIZERS[2], format }
		);
	}

	return {formats};
}

export { processImages };
