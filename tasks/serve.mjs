import gulp from "gulp";
import browserSync from "browser-sync";
import { compilePug } from "./pug.mjs";
import { Path } from "./_constants.mjs";
import { copyAssets } from "./public.js";

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

async function serve() {
	server.init(SERVER_OPTIONS);

	gulp.watch([Path.PUG.watch, Path.DATA.watch], compilePug);
	gulp.watch(Path.ASSETS, copyAssets);
}

const initialBuild = gulp.parallel(compilePug, copyAssets);
const startServer = gulp.series(initialBuild, serve);

export { initialBuild, startServer };
