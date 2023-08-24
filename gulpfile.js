const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const webp = require('gulp-webp');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function webpImage() {
    return gulp.src('./src/images/*')
        .pipe(webp())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, scripts, webpImage);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*js', gulp.parallel(scripts))
}