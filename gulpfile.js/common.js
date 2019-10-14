/*
 * @Author: jzq
 * @Date: 2019-09-09 20:50:42
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 15:09:25
 * @Description: file content
 */
const {
    dest,
    src
} = require('gulp');
const rename = require('gulp-rename');
const config = require('../config');

const cssPath = {
    src: config.origin.css ? config.origin.css : './src/css/**/*.css',
    dest: config.dest.css ? config.dest.css : './dist/css/'
};
const jsPath = {
    src: config.origin.js ? config.origin.js : './src/js/**/*.js',
    dest: config.dest.js ? config.dest.js : './dist/js/'
}
const imagePath = {
    src: config.origin.iamge ? config.origin.iamge : './src/image/**',
    dest: config.dest.iamge ? config.dest.iamge : './dist/iamge/'
}

module.exports = {
    dest,
    src,
    rename,
    cssPath,
    jsPath,
    imagePath
};