'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData = $.gulp.src('./source/images/sprite-png/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.sass',
        imgPath:'../img/sprite.png'
    }));
    var imgStream = spriteData.img
        .pipe($.gulp.dest($.config.root+'/assets/img'));

    var cssStream = spriteData.css
        .pipe($.gulp.dest('source/style/sprite-stylesheets'));

    return $.merge(imgStream, cssStream);

  });
};
