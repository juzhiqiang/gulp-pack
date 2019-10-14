/*
 * @Author: jzq
 * @Date: 2019-09-09 20:51:22
 * @LastEditors: null
 * @LastEditTime: 2019-09-10 09:21:23
 * @Description: file content
 */
const {
    dest,
    src,
    rename
} = require('./common');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel')

function minJs() {
    return src('./src/js/**/*.js', {
            sourcemaps: true
        })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest('./dist/js',{sourcemaps:'.'}))
}

module.exports = minJs;