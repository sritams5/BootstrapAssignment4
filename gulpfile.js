const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();





//compile by scss to css and place in my src folder



gulp.task('sass',() =>{

  return gulp

  .src(['scss/*.scss'])

  .pipe(sass())

  .pipe(gulp.dest('css'))

  .pipe(browserSync.stream());

})

gulp.task('js',() =>{

  return gulp

  .src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.slim.min.js','node_modules/popper.js','node_modules/tether/dist/js/tether.min.js'])

  .pipe(gulp.dest('js'))

  .pipe(browserSync.stream());

})





// Static Server + watching scss/html files

gulp.task('serve', ['sass'], function() {



  browserSync.init({

    server: '.'

  });



  gulp.watch("styles/*.scss", ['sass']);

  gulp.watch("*.html").on('change', browserSync.reload);

});





gulp.task('default', ['serve','js']);
