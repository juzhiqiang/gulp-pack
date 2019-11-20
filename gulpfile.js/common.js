/*
 * @Author: jzq
 * @Date: 2019-09-09 20:50:42
 * @LastEditors: null
 * @LastEditTime: 2019-11-20 18:04:34
 * @Description: file content
 */
const {
    dest,
    src
} = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const config = require('../config');
//入口
const imports = config.origin;
//出口
const dests = config.dest;
const concats = config.concat;

const cssPath = {
    src: imports.css ? imports.css : './src/css/**/*.css',
    dest: dests.css ? dests.css : './dist/css/',
    concatName: concats.css ? concats.css : false ,
};
const jsPath = {
    src: imports.js ? imports.js : './src/js/**/*.js',
    dest: dests.js ? dests.js : './dist/js/',
    concatName: concats.js ? concats.js : false ,
}
const imagePath = {
    src: imports.iamge ? imports.iamge : './src/image/**',
    dest: dests.iamge ? dests.iamge : './dist/iamge/',
}

module.exports = {
    dest,
    src,
    rename,
    concat,
    cssPath,
    jsPath,
    imagePath
};