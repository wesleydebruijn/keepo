var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

var libs = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/materialize-css/dist/js/materialize.min.js'
];

var styling = [
    'node_modules/materialize-css/dist/css/materialize.min.css',
    'public/assets/css/**/*'
];

gulp.task('build-lib', function() {
    gulp.src(libs)
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
});

gulp.task('build-core', function() {
    return browserify({entries: __dirname + '/app/boot.ts', extensions: ['.ts'], debug: true})
        .plugin(tsify)
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('css', function() {
    gulp.src(styling)
        .pipe(concat())
        .pipe(minify('app.min.css'))
        .pipe(gulp.dest('build'))
})

gulp.task('watch', function() {
    gulp.watch('public/css/**/*', ['style']);
    gulp.watch('app/**/*.ts', ['build-core']);
})

gulp.task('default', ['build-lib', 'build-core']);
