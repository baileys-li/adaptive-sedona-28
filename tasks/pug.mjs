import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "pug-bem";
import { isDev } from "./mode.mjs";

export function compilePug() {
	return gulp.src("source/pages/*.pug")
		.pipe(pug({
			pretty: isDev(),
			plugins: [pugBEM],
		}))
		.pipe(gulp.dest("build/"));
}
