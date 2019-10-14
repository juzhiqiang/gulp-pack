/*
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-10-14 14:03:37
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 16:13:25
 * @Description: gulp-pack 配置文件
 *  origin 需处理文件起始地点 
 *     |----  css        css文件存放地址      默认 ./src/css/**\/*.css
 *     |----  js         js文件存放地址       默认  ./src/js/**\/*.js
 *     |----  image      image文件存放地址    默认  ./src/image/**
 *  dest   处理后文件输出地点  默认：./dist/对应文件夹  根目录下的dist文件下对应文件夹 [参数如下]
 *     |----  css        css文件输出地址 
 *     |----  js         js文件输出地址  
 *     |----  image      js文件输出地址  
 */

 const config= {
    origin:{},
    dest:{}
 };


 module.exports = config;