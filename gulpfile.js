var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('build', function () {
	'use strict';
	//Complete this task. It should be production build task. Code should be minified, concatenated, disabled debug information for app and copied to build folder
});

gulp.task('default', ['js', 'copyHtml', 'style:dev', 'watch'], function () {
	'use strict';

    browserSync.init({
        server: './build'
    });
});

gulp.task('watch', function () {
    'use strict';
    gulp.watch(['./src/js/**/*.js'], ['js:dev']);
    gulp.watch(['./src/style/*.*/*.css'], ['style']);
    gulp.watch(['./src/index.html'], ['copyHtml']);
    gulp.watch(['./build/**/*.*',]).on('change', browserSync.reload);
});

gulp.task('js:dev', function () {
    'use strict';

    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('copyHtml', function () {
    'use strict';

    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('style', function () {
    'use strict';

    return gulp.src('./src/style/style.css')
        .pipe(gulp.dest('./build/'));
});


