/*
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-10-14 14:03:37
 * @LastEditors: null
 * @LastEditTime: 2019-10-14 14:23:15
 * @Description: gulp-pack 配置文件
 *  origin 需处理文件起始地点
 *     |----  css        css文件存放地址
 *     |----  js         css文件存放地址
 *     |----  image      css文件存放地址
 *  dest   处理后文件输出地点  默认：./dist/对应文件夹  根目录下的dist文件下对应文件夹 [参数如下]
 *     |----  css        css文件输出地址 
 *     |----  js         js文件输出地址  
 *     |----  image      js文件输出地址  
 */



const config = {
    origin: {
        css: '',
        js: '',
        image: ''
    },
    dest: {
        css: './dist/mincss/'
    }
}