'use strict';

//npm i --save-dev gulp gulp-watch gulp-autoprefixer gulp-uglify gulp-sass gulp-sourcemaps gulp-rigger gulp-minify-css gulp-csscomb gulp-imagemin imagemin-pngquant browser-sync rimraf gulp-svgo gulp-typograf gulp-merge-media-queries
// Gulp 4

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    csscomb = require('gulp-csscomb'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    svgo = require('gulp-svgo'),
    typograf = require('gulp-typograf'),
    rimraf = require('rimraf'),
    mmq = require('gulp-merge-media-queries'),
    cache = require('gulp-cache'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'web/',
        js: 'web/js/',
        libs: 'web/js/libs',
        css: 'web/css/',
        img: 'web/img/',
        svg: 'web/img/svg',
        fonts: 'web/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        libs: 'src/js/libs/**/*.*',
        style: 'src/sass/main.scss',
        img: 'src/img/**/*.*',
        svg: 'src/img/svg/*.svg',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.*',
        libs: 'src/js/libs/**/*.*',
        style: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*',
        svg: 'src/img/svg/*.svg',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './web'
};

var config = {
    server: {
        baseDir: "./web"
    },
    tunnel: false,
    host: 'localhost',
    port: 9005,
    logPrefix: "dev"
};

gulp.task('server', function (done) {
  browserSync.init(config);
  done();
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(typograf({locale: 'ru'}))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    return gulp.src(path.src.style)
        //.pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/sass/']
            //outputStyle: 'compressed',
            //sourceMap: true,
            //errLogToConsole: true
            }).on( 'error', function( error ){
                console.log( error );
            }
        ))
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(mmq({
            log: true
        }))
        //.pipe(cssmin())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        //.pipe(sourcemaps.init())
        //.pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    return gulp.src(path.src.img)
        .pipe(cache(imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({quality: 75, progressive: true}),
          pngquant(),
          imagemin.svgo({ 
            plugins: [
              { removeViewBox: false }
            ] 
          }),
        ])))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('svg:build', function () {
    return gulp.src(path.src.svg)
        .pipe(svgo())
        .pipe(gulp.dest(path.build.svg))
        .pipe(reload({stream: true}));
});

gulp.task('libs:build', function() {
    return gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs))
});

gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// очистка кэша
gulp.task('cache:clear', function() {
  cache.clearAll();
});

// сборка
gulp.task('build', gulp.series('html:build', 'style:build', 'image:build', 'svg:build', 'js:build', 'libs:build'));
gulp.task('build-full', gulp.series('html:build', 'style:build', 'image:build', 'svg:build', 'js:build', 'libs:build', 'fonts:build'));

// запуск задач при изменении файлов
gulp.task('watch', function(){
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.style, gulp.series('style:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

// задача по умолчанию
gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')));
gulp.task('full', gulp.series('build-full', gulp.parallel('server', 'watch')));