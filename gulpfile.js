var gulp = require("gulp");
var clean = require("gulp-clean");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");
var server = require("gulp-webserver");
var sequence = require("gulp-sequence");
gulp.task("css", function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
});
gulp.task("clean", function() {
    return gulp.src("src/css")
        .pipe(clean())
});
gulp.task("watch", function() {
    gulp.watch("src/scss/*.scss", ["css"]);
});
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                if (req.url === "/favicon.ico") {
                    return;
                }
                next()
            }
        }))
});
gulp.task("default", function(cb) {
    sequence("clean", "css", "server", "watch", cb)
})