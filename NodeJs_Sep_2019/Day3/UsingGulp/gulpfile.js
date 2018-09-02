let gulp = require('gulp');
let minify = require('gulp-minify');

gulp.task('default', ()=>{

    return gulp.src('Source/**')
            .pipe(minify())
            .pipe(gulp.dest('./Target'));
});

gulp.task('minifyjs', ()=>{

    return gulp.src('Source/**')
            .pipe(minify())
            .pipe(gulp.dest('./Target'));
});

