/*
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-09-09 11:45:32
 * @LastEditors: null
 * @LastEditTime: 2019-11-21 11:42:44
 * @Description: 
 * @form: (0 U 0)
 */

;(function(){
    /**
     * @description: 注入测试内容
     * @param {params} 测试参数
     * @return: 
     */    
    var dependA = function (params) {
        console.log('test depend a')
    }
    dependA();
})()