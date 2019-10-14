/*
 * @Author: jzq
 * @Date: 2019-09-09 20:50:21
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 15:23:37
 * @Description: file content
 */
const {watch,series} = require('gulp');
const minJs = require('./minJs');
const minCss = require('./minCss');
const minImg = require('./minImg');

function a(cb){
    cb()
}


const watchs = ()=>{
    watch('./src/**', series(minCss, minJs,minImg));
};

exports.watchs = watchs;
exports.minCss = series(minCss);
exports.minJs = series(minJs);
exports.minImg = series(minImg);
exports.build = series(minCss, minJs,minImg);