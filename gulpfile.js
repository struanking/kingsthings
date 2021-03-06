const { parallel, watch } = require("gulp");

// Pull in each task
const fonts = require("./gulp-tasks/fonts.js");
const sass = require("./gulp-tasks/sass.js");

function watcher() {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
}

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(fonts, sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;
