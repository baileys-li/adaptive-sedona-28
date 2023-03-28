import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "pug-bem";
import { isDev } from "./mode.mjs";
import { Path } from "./_constants.mjs";

export function compilePug() {
	return gulp.src(Path.PUG.src)
		.pipe(pug({
			pretty: isDev(),
			plugins: [pugBEM]
		}))
		.pipe(gulp.dest(Path.BUILD));
}
