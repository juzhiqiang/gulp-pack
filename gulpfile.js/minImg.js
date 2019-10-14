/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: jzq
 * @LastEditTime: 2019-09-09 21:11:19
 * @Description: file content
 */
const {
    dest,
    src
} = require('./common');
const imagemin = require('gulp-imagemin');

function minImg() {
    return src('./src/image/**')
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
        .pipe(dest('./dist/image'))
}

module.exports = minImg;