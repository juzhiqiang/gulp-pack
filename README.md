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
#### 示例
```js
  const config= {
    origin:{
        css: './a/**/.css',
    },
    dest:{
       css: './condense/css/'
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
 

 
