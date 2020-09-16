const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sourcemap = require(`gulp-sourcemaps`);
const rename = require(`gulp-rename`);
const sass = require(`gulp-sass`);
const autoprefixer = require(`gulp-autoprefixer`);
const server = require(`browser-sync`).create();
const csso = require(`gulp-csso`);
const imagemin = require(`gulp-imagemin`);
const webp = require(`gulp-webp`);
const svgstore = require(`gulp-svgstore`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const del = require(`del`);
const htmlmin = require(`gulp-htmlmin`);
const webpackStream = require(`webpack-stream`);

sass.compiler = require(`node-sass`);

gulp.task(`scripts`, function () {
  return gulp.src(`./src/index.tsx`)
    .pipe(webpackStream(require(`./webpack.config.js`)))
    .pipe(gulp.dest(`build/`))
    .pipe(server.stream());
});

gulp.task(`css`, function () {
  return gulp.src(`src/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(`build/css`))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});

gulp.task(`server`, function () {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch(`src/sass/**/*.scss`, gulp.series(`css`));
  gulp.watch(`src/img/sprite-*.svg`, gulp.series(`sprite`, `html`, `refresh`));
  gulp.watch(`src/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`src/**/*.js`, gulp.series(`scripts`, `refresh`));
  gulp.watch(`src/**/*.jsx`, gulp.series(`scripts`, `refresh`));
  gulp.watch(`src/**/*.ts`, gulp.series(`scripts`, `refresh`));
  gulp.watch(`src/**/*.tsx`, gulp.series(`scripts`, `refresh`));
});

gulp.task(`refresh`, function (done) {
  server.reload();
  done();
});

gulp.task(`images`, function () {
  return gulp.src(`src/img/**/*.{png,jpg,svg}`)
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest(`src/img`));
});

gulp.task(`webp`, function () {
  return gulp.src(`src/img/**/*.{png,jpg}`)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(`src/img`));
});

gulp.task(`sprite`, function () {
  return gulp.src(`src/img/sprite-*.svg`)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename(`sprite.svg`))
    .pipe(gulp.dest(`build/img`));
});

gulp.task(`html`, function () {
  return gulp.src(`src/*.html`)
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(`build`));
});

gulp.task(`copy`, function () {
  return gulp.src([
    `src/fonts/**/*.{woff,woff2}`,
    `src/img/**`,
    `src/*.ico`
  ], {
    base: `src`
  })
  .pipe(gulp.dest(`build`));
});

gulp.task(`clean`, function () {
  return del(`build`);
});

gulp.task(`build`, gulp.series(`clean`, `copy`, `css`, `sprite`, `html`, `scripts`));
gulp.task(`start`, gulp.series(`build`, `server`));
