
import gulp from "gulp";
import { setDev, setProd } from "./tasks/mode.mjs";
import { compilePug } from "./tasks/pug.mjs";

export default gulp.series(setDev, compilePug);
export const build = gulp.series(setProd, compilePug);
