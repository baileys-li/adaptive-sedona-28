import gulp from "gulp";
import pug from "gulp-pug";
import { isDev } from "./mode.mjs";

export function compilePug() {
	return gulp.src("source/pages/*.pug")
		.pipe(pug({
			pretty: isDev()
		}))
		.pipe(gulp.dest("build/"));
}
