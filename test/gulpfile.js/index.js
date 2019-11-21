/*
 * @Author: jzq
 * @Date: 2019-09-09 20:50:21
 * @LastEditors: null
 * @LastEditTime: 2019-11-21 11:15:57
 * @Description: file content
 */
const {
    watch,
    series,
} = require('gulp');
const minJs = require('./minJs');
const minCss = require('./minCss');
const minImg = require('./minImg');
const mapInjectFile = require('./injectJs');

function a(cb) {
    cb()
}


const watchs = () => {
    watch('./src/**', series(minCss, minJs, minImg));
};

/**
 * @description: 
 * @param {type} 
 * @return: 
 */
exports.watchs = watchs;
exports.minCss = series(minCss);
exports.minJs = series(minJs);
exports.minImg = series(minImg);
exports.injectJS = series(mapInjectFile);
exports.build = series(minCss, minJs, minImg);