/*
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-10-14 14:03:37
 * @LastEditors: null
 * @LastEditTime: 2019-11-21 14:05:02
 * @Description: gulp-pack 配置文件
 *  origin 需处理文件起始地点 
 *     |----  css        css文件存放地址      默认 ./src/css/**\/*.css
 *     |----  js         js文件存放地址       默认  ./src/js/**\/*.js
 *     |----  image      image文件存放地址    默认  ./src/image/**
 *  dest   处理后文件输出地点  默认：./dist/对应文件夹  根目录下的dist文件下对应文件夹 [参数如下]
 *     |----  css        css文件输出地址 
 *     |----  js         js文件输出地址  
 *     |----  image      js文件输出地址  
 *  concat  合并文件          
 *     |----  css        合并css文件      默认为空时，将关闭合并文件功能，出现输出文件名时输出为该文件名
 *     |----  js         合并js文件       默认为空时，将关闭合并文件功能
 *  inject  注入代码      目前只支持 js
 *     |----  src        需要注入的文件
 *     |----  insert     在文件前注入 还是 后注入
 *       |----    before     注入在最前面
 *       |----    after      注入在最后面
 */  

const config = {
   origin: {},
   dest: {},
   concat: {
      css: ""
   },
   inject: {
      src: './depend',
      insert: "after"

   }
};


module.exports = config;