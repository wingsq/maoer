let express = require('express')
const koaReq     = require('request')    
let router = express.Router()
module.exports = function () {
    return async function (ctx,next) {
        // node封装的请求中间件GET请求
        // await koaReq('http://api.douban.com/v2/movie/top250?start=25&count=2', function (error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         console.log(JSON.parse(body))
        //     }
        // })
        await koaReq({
            method: 'get',
            uri: 'https://www.missevan.com/explore/tagalbum?order=0',
            // json: true//设置返回的数据为json
        },function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        })