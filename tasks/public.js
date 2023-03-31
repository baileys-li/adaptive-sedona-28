import gulp from "gulp";
import { Path } from "./_constants.mjs";

export const copyAssets = () => gulp.src(Path.ASSETS).pipe(gulp.dest("build"));
