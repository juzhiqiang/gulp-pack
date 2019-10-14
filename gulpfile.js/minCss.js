/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: jzq
 * @LastEditTime: 2019-09-09 21:15:50
 * @Description: file content
 */
const {
    dest,
    src,
    rename
} = require('./common');
const cleanCss = require('gulp-clean-css')

function minCss() {
    return src('./src/css/**/*.css')
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest('./dist/css'))
}

module.exports = minCss;