# gulp-pack
基于gulp的基础文件压缩工具,目前支持js【含es6+ 转 es5，混淆压缩】，css/img[png.gif,jpg]压缩

## gulpfile
gulpfile 必须放根目录下，是gulp运行的必须代码

## config 配置文件
| 配置文件参数 |    说明    |   默认值 |
| ----------- | :--------: | :--------: | 
| origin【有如下可选参数】 | 文件读取路径 | - |
| css   | css文件输入路径  | ./src/css/**/\*.css |
| js    | js文件输入路径   | .\/src/js/**/\*.js|
| image | image文件输入路径 |./src/image/** |
| dest【有如下可选参数】   | 文件输出路径 | - |
| css   | css文件输入路径  | ./dist/css/ |
| js    | js文件输入路径   | ./dist/js/ |
| image | image文件输入路径 | ./dist/image/ |
| concat| 合并文件         |            |
|css    |  字符串【存在则为文件名】不存在不启动合并| "" |
|JS     |  字符串【存在则为文件名】不存在不启动合并| "" |
#### 示例
```js
  const config= {
    origin:{
        css: './a/**/.css',
    },
    dest:{
       css: './condense/css/'
    },
    concat: {
      css: ""
    }
 }
```

## 启动命令
| 命令 |    说明    | 
| ---- | :--------: |
| gulp --task | 启动默认 |
| gulp minCss | 启动css压缩 |
| gulp minImg | 启动图片压缩 |
| gulp minJs  | 启动js转译压缩混淆 |
| gulp watch  | 监听文件【js,css,image】变化，文件变化后自动更新压缩 |


## test 
 test是测试文件夹

## 更新日志
### v 0.1.1
##### 2019-12-21
* 支持 js/css 合并文件

### v 0.1.0
##### 2019-10-14 gulp-pack 上线 
* 支持 css 压缩
* 支持 js  压缩 / es6转es5
* 支持 image 压缩
 
## 开源协议
本项目基于 MIT 协议，请自由地享受和参与开源。
 

 
