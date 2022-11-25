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

function imagenes(done) {
  src("src/img/**/*").pipe(dest("build/img"));

  done();
}

function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/img/**/*", imagenes);
  // watch("src/scss/app.scss", css);
}

exports.css = css;
exports.dev = dev;
exports.imaimagenes = imagenes;
exports.default = series(imagenes, css, dev);
