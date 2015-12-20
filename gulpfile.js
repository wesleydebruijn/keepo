var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

// Paths
var paths = {
  libs: {
    scripts: ['node_modules/angular2/bundles/angular2-polyfills.js',
              'node_modules/systemjs/dist/system.src.js',
              'node_modules/rxjs/bundles/Rx.js',
              'node_modules/angular2/bundles/angular2.dev.js',
              'node_modules/materialize-css/dist/js/materialize.min.js'],
    style: ['node_modules/materialize-css/dist/css/materialize.min.css']
  },
  scripts: ['app/*.js', 'public/assets/js/*'],
  style: ['public/assets/css/*']
}

// Tasks
gulp.task('scripts', function() {
  gulp.src(paths.libs.scripts.concat(paths.scripts))
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

gulp.task('style', function() {
  gulp.src(paths.libs.style.concat(paths.libs.style))
  .pipe(minifyCss())
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('build'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.style, ['style']);
});

// Default task
gulp.task('default', ['watch', 'scripts', 'style']);
