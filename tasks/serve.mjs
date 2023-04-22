import gulp from "gulp";
import browserSync from "browser-sync";
import { compilePug } from "./pug.mjs";
import { Path } from "./_constants.mjs";
import { copyAssets, copyFonts } from "./public.js";
import { compileSass } from "./styles.mjs";
import { compileScripts } from "./scripts.mjs";
import { processImages } from "./images.mjs";

const server = browserSync.create();

/**
 * @type {browserSync.Options}
 */
const SERVER_OPTIONS = {
	server: Path.BUILD,
	notify: true,
	open: true,
	cors: true,
	watch: true,
};

const streamStyles = () => compileSass().pipe(server.stream());

async function serve() {
	server.init(SERVER_OPTIONS);

	gulp.watch([Path.PUG.watch, Path.DATA.watch], compilePug);
	gulp.watch(Path.ASSETS, copyAssets);
	gulp.watch(Path.STYLES.watch, streamStyles);
	gulp.watch(Path.SCRIPTS.watch, compileScripts);
	gulp.watch(Path.IMAGES.src, processImages);
}

const initialBuild = gulp.parallel(compilePug, copyFonts, copyAssets, compileSass, compileScripts, processImages);
const startServer = gulp.series(initialBuild, serve);

export { initialBuild, startServer };
