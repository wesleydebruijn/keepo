var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var express = require('express');

var libs = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/materialize-css/dist/js/materialize.min.js'
];

var styling = [
    'node_modules/materialize-css/dist/css/materialize.min.css',
    'public/assets/css/*'
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
        .pipe(concat('app.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
    gulp.watch('public/assets/css/*', ['css']);
    gulp.watch('app/**/*.ts', ['build-core']);
});

// Start Server
gulp.task('server', function() {
  var app = express();

  // Server static files
  app.use(express.static(__dirname + '/public'));
  app.use('/build', express.static(__dirname + '/build'));

  // Set jade as our renderer
  app.set('view engine', 'jade');
  app.set('views', __dirname);

  // Router
  app.get('/', function (req, res) {
    res.render('./app/index', { title: 'Hey', message: 'Hello world!'});
  });

  // Register server
  var server = app.listen(3000, function() {
  	var host = server.address().address;
  	var port = server.address().port;
  });
});

gulp.task('default', ['server', 'watch']);
