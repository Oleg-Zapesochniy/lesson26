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
let uglifycss = require('gulp-uglifycss');
let rename = require('gulp-rename');
let concat = require('gulp-concat');
let browserSync = require('browser-sync');

gulp.task('minify', ()=> {
    return gulp.src(['js/*.js'])
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream:true}))
})

gulp.task('minify-css', ()=> {
    return gulp.src('css/*.css')
        .pipe(uglifycss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}))
})

gulp.task('concat', ()=>{
    return gulp.src(arrayJsFilesWithPath)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}))
})

gulp.task('browserSync', ()=>{
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8090,
        open: true,
        notify: false
    });
});

gulp.task('html', () => {
    return gulp.src('*.html')
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', ()=>{
    gulp.watch('js/*.js', gulp.parallel('minify', 'concat'));
    gulp.watch('css/*.css', gulp.parallel('minify-css'));
    gulp.watch([
        '*.html',
        'data.json'
    ], gulp.parallel('html'))
})

gulp.task('default', gulp.parallel('minify','concat','minify-css', 'watch', 'browserSync'))