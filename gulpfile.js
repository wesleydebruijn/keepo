var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var streamqueue = require('streamqueue');

var buildDirectory = './public/build';

var libs = {
    jquery: gulp.src('node_modules/jquery/dist/jquery.js'),
    systemjs: gulp.src('node_modules/systemjs/dist/system-register-only.js'),
    angular: gulp.src(['node_modules/angular2/bundles/angular2-polyfills.js',
                      'node_modules/angular2/bundles/angular2.js']),
    rx: gulp.src('node_modules/rxjs/bundles/Rx.js'),
    materialize: gulp.src('node_modules/materialize-css/dist/js/materialize.min.js')
};

var styling = [
    'node_modules/materialize-css/dist/css/materialize.min.css',
    'public/css/*'
];

gulp.task('build-lib', function() {
  return streamqueue({ objectMode: true },
          libs.jquery,
          libs.systemjs,
          libs.angular,
          libs.rx,
          libs.materialize
        )
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildDirectory));
});

gulp.task('build-core', function() {
    return browserify({entries: __dirname + '/app/boot.ts', extensions: ['.ts'], debug: true})
        .plugin(tsify)
        .bundle().on('error', function(e) {
            console.log(e);
        })
        .pipe(source('app.min.js'))
        .pipe(gulp.dest(buildDirectory));
});

gulp.task('css', function() {
    return gulp.src(styling)
          .pipe(concat('app.min.css'))
          .pipe(minify())
          .pipe(gulp.dest(buildDirectory))
          .pipe(livereload());
});

gulp.task('html', function() {
  return gulp.src('app/views/*.html')
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('app/**/*.ts', ['build-core']);
    gulp.watch('app/*.html', ['html']);
    gulp.watch('public/css/*', ['css']);
});

gulp.task('default', ['watch']);
