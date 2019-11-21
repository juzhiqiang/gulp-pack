/*
 * @Author: jzq
 * @Email: 3027704690@qq.com
 * @Date: 2019-11-21 09:51:13
 * @LastEditors: null
 * @LastEditTime: 2019-11-21 14:22:01
 * @Description: add  inject
 * @form: (0 U 0)
 */

const {
    dest,
    src,
    jsPath
} = require('./common');
const fs = require('fs');
const path = require('path');
const concat = require('gulp-concat');

/**
 * @description: 注入文件到指定文件内  循环注入指定位置所有文件
 * @param {Function}  cb  为回调函数
 * @param {type} 
 * @return: 
 */
function mapInjectFile(cb) {
    const filePath = path.resolve(jsPath.injects.src);
    let files = fs.readdirSync(filePath);
   
    files.map(function (filename) {
        let filedir = path.join(filePath, filename);
        let stats = fs.statSync(filedir);
        if (!stats.isDirectory()) {
            inject(filename, path.join(filedir));
        }
    })
    cb()
}

function inject(fileName, filePath) {
    let injectSite = jsPath.injects.insert != 'after' ? [filePath, jsPath.src] : [jsPath.src, filePath];
    return src(injectSite)
        .pipe(concat(`${fileName}`))
        .pipe(dest(jsPath.dest))
}

module.exports = mapInjectFile;