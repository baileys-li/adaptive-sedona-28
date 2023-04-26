import gulp from "gulp";
import svgo from "gulp-svgmin";
import { stacksvg } from "gulp-stacksvg";
import { readdir } from "fs/promises";
import { Path } from "./_constants.mjs";

function optimizeVector() {
	return gulp
		.src(Path.ICONS.src)
		.pipe(svgo())
		.pipe(gulp.dest(Path.IMAGES.dest));
}

async function createStack() {
	const folders = await readdir(Path.ICONS.dir);

	return folders.forEach((folder) =>
		gulp
			.src(`${Path.ICONS.dir}/${folder}/*.svg`)
			.pipe(svgo())
			.pipe(
				stacksvg({
					output: `${folder}.svg`,
				})
			)
			.pipe(gulp.dest(Path.IMAGES.dest))
	);
}

export { optimizeVector, createStack };
