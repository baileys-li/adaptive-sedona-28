import gulp from "gulp";
import { Path } from "./_constants.mjs";

export const copyAssets = () => gulp.src(Path.ASSETS).pipe(gulp.dest("build"));

export function copyFonts() {
	const fontFiles = [400, 700].map(
		(weight) =>
			`node_modules/@fontsource/pt-sans/files/pt-sans-cyrillic-${weight}-normal.woff2`
	);

	return gulp.src(fontFiles).pipe(gulp.dest("build/fonts"));
}
