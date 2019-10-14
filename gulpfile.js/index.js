/*
 * @Author: jzq
 * @Date: 2019-09-09 20:50:21
 * @LastEditors: null
 * @LastEditTime: 2019-09-10 09:21:46
 * @Description: file content
 */
const {watch,series} = require('gulp');
const minJs = require('./minJs');
const minCss = require('./minCss');
const minImg = require('./minImg');

function a(cb){
    cb()
}


watch('./src/**', series(minCss, minJs,minImg));

exports.build = series(minCss, minJs,minImg);