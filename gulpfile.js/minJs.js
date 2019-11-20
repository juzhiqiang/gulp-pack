/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: null
 * @LastEditTime: 2019-11-20 18:20:13
 * @Description: file content
 */
const {
    dest,
    src,
    concat,
    rename,
    jsPath
} = require('./common');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
//不存在时使用二次压缩 hack 待处理
const concats = jsPath.concatName ? concat(jsPath.concatName+'.js'): uglify();

function minJs() {
    return src(jsPath.src, {
            sourcemaps: true
        })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concats)
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest(jsPath.dest,{sourcemaps:'.'}))
}

module.exports = minJs;