//require导入一个功能模块，参数是模块名。
var express = require("express");
//body-parser解析请求体的模块
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var db = require('./mongoose')

//创建服务器对象。
var app = express();

//配置服务器静态文件夹。静态文件夹中的文件被访问时，会以下载文件的
//方式返回给客户端，所以静态文件夹中用于存放html，js,css,jpg等文件
app.use(express.static("wwwroot"));

//使用body-parser模块，当客户端发送post请求时，body-parser能够将
//请求体中的参数解析为对象。
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())

// 登录
app.post('/user/login', (req, res) => {
    db.User.find({ username: req.body.username }).count((err, count) => {
        if (err) {
            // err
        } else {
            if (count > 0) {
                db.User.findOne({ username: req.body.username }, (err, data) => {
                    console.log(data)
                    if (req.body.password == data.password) {
                        res.cookie('username', req.body.username)
                        res.cookie('uid', data._id)
                        res.status(200).json({ code: 'success', message: '登录成功' })
                    } else {
                        res.status(200).json({ code: 'error', message: '用户名或密码错误！' })
                    }
                })
            } else {
                res.status(200).json({ code: 'error', message: '用户名未注册！' })
                // util.send(res, 'register error', '用户名未注册！')
            }
        }
    })
})

// 注销
app.get('/logout', (req, res) => {
    res.clearCookie('username')
    res.redirect('/')
    // 在服务端控制浏览器页面跳转
    // redirect('/')重定向到首页
})
// 注册
app.post('/user/register', (req, res) => {
    new db.User(req.body).save(err => {
        if (err) {
            // util.send(res, 'registered', '用户名已经注册过了！')
        }
        else {
            // util.send(res, 'success', '恭喜，注册成功！请登录...')
            res.status(200).json({ code: 'success', message: '注册成功' })
        }
    })
})







//打开服务器。
app.listen(3000, function () {
	console.log("服务器开启成功");
});