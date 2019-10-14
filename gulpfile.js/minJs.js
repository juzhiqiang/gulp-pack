/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 15:24:43
 * @Description: file content
 */
const {
    dest,
    src,
    rename,
    jsPath
} = require('./common');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel')

function minJs() {
    return src(jsPath.src, {
            sourcemaps: true
        })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest(jsPath.dest,{sourcemaps:'.'}))
}

module.exports = minJs;