const paths = {
    src_js: 'src/js/*.js',
    src_scss: 'src/scss/**/*.scss',
    src_html: 'src/*.html',
    src_img: 'src/images/*',
    dest_js: 'public/js',
    dest_css: 'public/styles',
    dest_html: 'public',
    dest_img: 'public/images'
}

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const { series } = require('gulp');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

//copy all HTML files
function copyHTML() {
    return gulp.src(paths.src_html).pipe(gulp.dest(paths.dest_html));
}

//minimizing all the images.

function minifyImages() {
    return gulp.src(paths.src_img).pipe(imagemin()).pipe(gulp.dest(paths.dest_img));;
}

//Compile main style scss to css

function styles() {
    return gulp.src(paths.src_scss).pipe(sass().on('error', sass.logError)).pipe(gulp.dest(paths.dest_css));
}


function deleteHTML() {
    return gulp.src(`${paths.dest_html}/*.html`).pipe(clean())
}

function watch() {
    gulp.watch(paths.src_scss, styles);
    //rerender dest html
    gulp.watch(paths.src_html, gulp.series(deleteHTML, copyHTML))
    gulp.watch(paths.src_js, minifyJS)
}

function minifyJS() {
    return gulp.src(paths.src_js).pipe(minify()).pipe(gulp.dest(paths.dest_js))
}

function autoprefixify() {
    return gulp.src(`${paths.dest_css}/main.css`).pipe(autoprefixer({ cascade: false })).pipe(gulp.dest(paths.dest_css))
}

function minifyCSS() {
    return gulp.src(`${paths.dest_css}/main.css`).pipe(cssmin()).pipe(rename({ suffix: '.min' })).pipe(gulp.dest(paths.dest_css))
}

//Exports
exports.copyHTML = copyHTML;
exports.deleteHTML = deleteHTML;
exports.minifyImages = minifyImages;
exports.styles = styles;
exports.watch = watch;
exports.minifyJS = minifyJS;
exports.autoprefixify = autoprefixify;
exports.minifyCSS = minifyCSS;