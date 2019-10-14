/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 15:09:46
 * @Description: file content
 */
const {
    dest,
    src,
    imagePath
} = require('./common');
const imagemin = require('gulp-imagemin');

function minImg() {
    return src(imagePath.src)
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ]))
        .pipe(dest(imagePath.dest))
}

module.exports = minImg;