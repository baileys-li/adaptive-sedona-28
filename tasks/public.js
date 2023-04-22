import gulp from "gulp";
import { Path } from "./_constants.mjs";

const FONT_FILES = [400, 700].map(
	(weight) =>
		`node_modules/@fontsource/pt-sans/files/pt-sans-cyrillic-${weight}-normal.woff2`
);

const copyAssets = () => gulp.src(Path.ASSETS).pipe(gulp.dest("build"));

const copyFonts = () => gulp.src(FONT_FILES).pipe(gulp.dest("build/fonts"));

export const copyStatic = gulp.parallel(copyAssets, copyFonts);
