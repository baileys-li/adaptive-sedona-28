import gulp from "gulp";
import browserSync from "browser-sync";
import { compilePug } from "./pug.mjs";
import { Path } from "./_constants.mjs";

const server = browserSync.create();

export async function serve() {
	server.init({
		server: Path.BUILD,
		notify: true,
		open: true,
		cors: true,
		watch: true,
	});

	gulp.watch(Path.PUG.watch, compilePug);
}
