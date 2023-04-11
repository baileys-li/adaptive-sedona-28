import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import postcss from "gulp-postcss";
import csso from "postcss-csso";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import preset from "postcss-preset-env";
import calc from "postcss-calc";
import sortMQ from "postcss-sort-media-queries";

import { isDev } from "./mode.mjs";
import { Path } from "./_constants.mjs";

const sass = gulpSass(dartSass);
const pluginsPostCSS = [preset(), calc({ precision: 3 })];

const errorHandler = notify.onError((error) => ({
	title: "Компиляция стилей",
	message: error.message,
}));

const plumberOption = {
	errorHandler,
};

export function compileSass() {
	const isDevMode = isDev();

	!isDevMode && pluginsPostCSS.push(sortMQ({
		sort: "mobile-first",
	}), csso());

	return gulp
		.src(Path.STYLES.src, {
			sourcemaps: isDevMode,
		})
		.pipe(plumber(plumberOption))
		.pipe(
			sass({
				outputStyle: isDevMode ? "expanded" : "compressed",
				indentType: "tab",
				includePaths: ["node_modules", Path.STYLES.common],
			})
		)
		.pipe(postcss(pluginsPostCSS))
		.pipe(
			gulp.dest(Path.STYLES.dest, {
				sourcemaps: ".",
			})
		);
}
