# gulp-add-less-variables

Add varibles to less files in gulp-plugin config options.

[![Package Quality](http://npm.packagequality.com/badge/gulp-add-less-variables.png)](http://packagequality.com/#?package=gulp-add-less-variables)


example:

```JavaScript

var gulp = require('gulp');
var lessVars = require('gulp-add-less-variables');

gulp.task('less', function() {
    gulp.src(lessFiles)
        .pipe(lessVars({
            var1: '10px', // => @var1: '10px'
            var2: '20px', // => @var2: '20px'
            var3: ['#000000', '#ffffff', '#acacac'] // => @var3: '#000000, #ffffff, #acacac'
        }))
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/css'));
});

```

`var1, var2, var3` will be added at begin of file.
