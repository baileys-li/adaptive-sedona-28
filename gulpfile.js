import gulp from "gulp";

export default function defaultTask() {
	console.log('Default task design');
	return gulp.src('.editorconfig')
		.pipe(gulp.dest('./'))

}

export async function justReturn() {
	return console.log('task without async competition');
}

export function promise(done) {
	console.log('Task ending with callback');
	done();
}

gulp.task('legacyWay', function (done) {
	console.log('Task created with gulp.task');
	done();
});
