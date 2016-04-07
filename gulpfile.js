var gulp = require('gulp')
var babel = require('gulp-babel')
var watch = require('gulp-watch')

var contentScriptsURI = 'content_scripts/src/*.js'

gulp.task('compile', function () {
  return gulp.src(contentScriptsURI)
    .pipe(watch(contentScriptsURI, {verbose: true}))
    .pipe(babel())
    .pipe(gulp.dest('content_scripts/dist'))
})
