/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: null
 * @LastEditTime: 2019-11-20 18:20:04
 * @Description: file content
 */
const {
    dest,
    src,
    concat,
    rename,
    cssPath
} = require('./common');
const cleanCss = require('gulp-clean-css')
const concats = cssPath.concatName ? concat(cssPath.concatName+'.css'): cleanCss({
    compatibility: 'ie8'
});
function minCss() {
    return src(cssPath.src)
        .pipe(concats)
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest(cssPath.dest))
}

module.exports = minCss;