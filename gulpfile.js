var gulp = require('gulp');

gulp.task('hello', function(){
    console.log('hello world');
});

// copy src to dist
gulp.task('html', function(){

    // copy file
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dest')); // next action

    /* multiple, wildcard, etc...
       gulp.src(['./src/index.html','./src/main.html']);
       gulp.src(['./src/*.html']);
       */
});

// specify default gulp task
gulp.task('default', ['hello', 'html']);


