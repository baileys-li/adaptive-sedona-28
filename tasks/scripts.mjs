
import gulp from 'gulp'
import gulpEsbuild from 'gulp-esbuild'
import { isDev } from './mode.mjs'

export function compileScripts() {
	return gulp.src('source/typescript/*.ts')
			.pipe(gulpEsbuild({
					bundle: true,
					target: 'es2015',
					sourcemap: 'external',
					format: 'esm',
					minify: isDev()
			}))
			.pipe(gulp.dest('build/js'))
}
