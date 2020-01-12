let arrayJsFiles = [
    'request',
    'localStorage',
    'Tasks',
    'functions',
    'app',
    'listeners'
]
let arrayJsFilesWithPath = arrayJsFiles.map( (item) => {
    return "build/"+item+".min.js"
})

let gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
let rename = require('gulp-rename');
let concat = require('gulp-concat');
let livereload = require('gulp-livereload');

gulp.task('minify', ()=> {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('build'))
})
gulp.task('concat', ()=>{
    gulp.src(arrayJsFilesWithPath)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', ()=>{
    livereload.listen();
    gulp.watch('index.html')
})