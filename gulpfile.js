import gulp from "gulp";
import pug from "gulp-pug";

/**
 * @param {"production" | "development"} mode
 */
function setMode(mode = "development") {
	process.env.NODE_ENV = mode;
}

const isDev = () => process.env.NODE_ENV === "development";
const isProd = () => !isDev();
const setProd = async () => await setMode("production");
const setDev = async () => await setMode("development");

function compilePug() {
	return gulp.src("source/pages/*.pug")
		.pipe(pug({
			pretty: isDev()
		}))
		.pipe(gulp.dest("build/"));
}

export default gulp.series(setDev, compilePug);
export const build = gulp.series(setProd, compilePug);
