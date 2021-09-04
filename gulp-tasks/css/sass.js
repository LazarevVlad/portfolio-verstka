'use strict';

module.exports = function (gulp, plugins, appPath, runPath, browserSync) {
  return function (done) {
    gulp.src(appPath + '/scss/template.scss', { sourcemaps: true })
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message
          };
        })
      }))
      .pipe(plugins.sass())
      .pipe(gulp.dest(runPath + '/css/', { sourcemaps: '.' }))
      .pipe(browserSync.reload({stream: true}));
    
    done();
  };
};
