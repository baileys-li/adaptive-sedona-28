import gulp from "gulp";
import pug from "gulp-pug";

function compilePug() {
	return gulp.src("source/pages/*.pug")
		.pipe(pug())
		.pipe(gulp.dest("build/"));
}

export default compilePug;
