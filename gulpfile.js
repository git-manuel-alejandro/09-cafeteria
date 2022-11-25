const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function css(done) {
  src("src/scss/app.scss")
    // .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(dest("build/css"));

  done();
}

function dev() {
  watch("src/scss/**/*.scss", css);
  // watch("src/scss/app.scss", css);
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);
