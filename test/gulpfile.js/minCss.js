/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 14:49:37
 * @Description: file content
 */
const {
    dest,
    src,
    rename,
    cssPath
} = require('./common');
const cleanCss = require('gulp-clean-css')

function minCss() {
    return src(cssPath.src)
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest(cssPath.dest))
}

module.exports = minCss;