/**
 * React project template 1.0.0
 * 
 * Copyright 2017, Roberto Prevato
 * https://github.com/RobertoPrevato/React-template
 * 
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
var gulp        = require("gulp");
var source      = require("vinyl-source-stream"); // Used to stream bundle for further handling
var browserify  = require("browserify");
var watchify    = require("watchify");
var reactify    = require("reactify");
var concat      = require("gulp-concat");
var uglify      = require("gulp-uglify");
var babelify    = require("babelify");
var sourcemaps  = require('gulp-sourcemaps');
var less        = require("gulp-less");
var rename      = require("gulp-rename");
var gutil       = require("gulp-util");
var buffer      = require("vinyl-buffer");
var del         = require('del');
var PUBLIC_MAIN = "./cssrc/scripts/areas/public/main.js";
var PUBLIC_DEST = "./httpdocs/scripts/areas/public";
var MAIN_BUILT  = "main.built.js";

//source maps and uglify:
//https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md

// Build without watch:
gulp.task("public-build", function() {
  return browserify(PUBLIC_MAIN)
    .transform(babelify, { presets: ["es2015", "react"] })
    .bundle()
    .on("error", function (e) {
      console.log("ERROR", e);
    })
    .pipe(source(MAIN_BUILT))
    .pipe(gulp.dest(PUBLIC_DEST));
});

// Build using watchify, and watch
gulp.task("public-watch", function (watch) {
  if (watch === undefined) watch = true;
  var bundler = browserify(PUBLIC_MAIN, {
    debug: true,              // gives us sourcemapping
    cache: {},                // required for watchify
    packageCache: {},         // required for watchify
    fullPaths: true           // required for watchify
  });
  bundler.transform(babelify, {presets: ["es2015", "react"]});

  if (watch) {
    bundler = watchify(bundler);
  }

  function rebundle() {
    var stream = bundler.bundle();
    stream.on("error", function (error) {
      console.log("ERROR while rebuilding public:", error);
    });
    gutil.log("Rebuilding public");
    stream = stream.pipe(source(MAIN_BUILT));

    //NB: the following lines are working examples of source mapping generation and js minification
    //they are commented on purpose, to keep the build process fast during development
    /*
    //support for source maps (and minification):
    stream = stream.pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify()) //js minification and obfuscation
      .pipe(sourcemaps.write("./"));
    */
    return stream.pipe(gulp.dest(PUBLIC_DEST));
  }

  bundler.on("update", function () {
    rebundle();
  });
  return rebundle();
});

gulp.task("public-less", function () {
  //compile the shared styles:
  gulp.src("cssrc/styles/*.less") // path to your files
    .pipe(less().on("error", function(err) {
        console.log(err);
    }))
    .pipe(gulp.dest("httpdocs/styles"));

  //compile the public area styles:
  gulp.src("cssrc/styles/areas/public/styles.less") // path to your files
    .pipe(less().on("error", function(err) {
      console.log(err);
    }))
    .pipe(gulp.dest("httpdocs/styles"));
});

// Copies static files to the output folder
gulp.task("copy-static", function() {
  gulp.src(["cssrc/scripts/libs/**/*.js"])
    .pipe(gulp.dest("httpdocs/scripts/libs"));
  gulp.src(["cssrc/images/*"])
    .pipe(gulp.dest("httpdocs/images"));
  gulp.src(["cssrc/*.html"])
    .pipe(gulp.dest("httpdocs"));
  gulp.src(["cssrc/favicon.ico"])
    .pipe(gulp.dest("httpdocs"));
});

// Runs the tasks for the public area
gulp.task("public-area", ["clean", "copy-static", "public-less", "public-watch", "watch-less"]);

// Deletes the contents of the httpdocs folder
gulp.task("clean", function (cb) {
  del(["httpdocs/*"], cb);
});

//watches less files for changes; compiles the files upon change
gulp.task("watch-less", function() {
  gulp.watch("cssrc/styles/**/*.less", ["public-less"]);
});

