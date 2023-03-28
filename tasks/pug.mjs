import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "pug-bem";
import { isDev } from "./mode.mjs";
import { Path } from "./_constants.mjs";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

export function compilePug() {
	return gulp.src(Path.PUG.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Компиляция Pug",
				message: error.message
			}))
		}))
		.pipe(pug({
			pretty: isDev(),
			plugins: [pugBEM]
		}))
		.pipe(gulp.dest(Path.BUILD));
}
