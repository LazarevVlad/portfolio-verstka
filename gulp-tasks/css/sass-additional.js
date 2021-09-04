'use strict';

module.exports = function (gulp, plugins, appPath, runPath, browserSync) {
  return function (done) {
    gulp.src([appPath + '/scss/libs.scss', appPath + '/scss/normalize.scss'])
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message
          };
        })
      }))
      .pipe(plugins.sass())
      .pipe(gulp.dest(runPath + '/css/'))
      .pipe(browserSync.reload({stream: true}));
    
    done();
  };
};
