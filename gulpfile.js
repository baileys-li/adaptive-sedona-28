
import gulp from "gulp";
import { setDev, setProd } from "./tasks/mode.mjs";
import { compilePug } from "./tasks/pug.mjs";
import { serve } from "./tasks/serve.mjs";

export default gulp.series(setDev, compilePug, serve);
export const build = gulp.series(setProd, compilePug);
