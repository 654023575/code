//require导入一个功能模块，参数是模块名。
var express = require("express");
//body-parser解析请求体的模块
var bodyParser = require("body-parser");
//var cookieParser = require('cookie-parser');
var db = require('./mongoose')

//创建服务器对象。
var app = express();

//配置服务器静态文件夹。静态文件夹中的文件被访问时，会以下载文件的
//方式返回给客户端，所以静态文件夹中用于存放html，js,css,jpg等文件
app.use(express.static("wwwroot"));

//使用body-parser模块，当客户端发送post请求时，body-parser能够将
//请求体中的参数解析为对象。
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(cookieParser)

//打开服务器。
app.listen(3000, function () {
	console.log("服务器开启成功");
});