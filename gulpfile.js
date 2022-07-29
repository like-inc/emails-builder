const { src, dest, series, watch } = require('gulp'),
  inlineCss = require('gulp-inline-css'),
  pug = require('gulp-pug');
  connect = require('gulp-connect'),
  sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./compile'));
};

function compilePug () {
  return src('./src/*.pug').pipe(pug()).pipe(dest('./compile'));
}

function generateEmails() {
  return src('./compile/*.html')
    .pipe(
      inlineCss({
        applyStyleTags: true,
        applyLinkTags: true,
        removeStyleTags: true,
        removeLinkTags: true,
      }),
    )
    .pipe(dest('./build/'))
    .pipe(connect.reload());
}

function watchTemplate() {
  webserver();
  return watch([
    './src/*.pug',
    './src/layouts/*.pug',
    './src/styles/*.scss'
  ], { ignoreInitial: false }, series(build()));
};

function webserver() {
  connect.server({
    livereload: true,
    root: ['build']
  });
};

function build () {
  return series(buildStyles, compilePug, generateEmails);
}

exports.watch = watchTemplate;
exports.default = build();
