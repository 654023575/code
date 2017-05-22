const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project')
const db = mongoose.connection;
//数据库连接失败提示
db.on('error',err => console.log('数据库打开失败', err));
//连接成功
db.on('open', () => console.log('成功打开数据库'));

const User = mongoose.model('users',{
    username: String,
    password: String 
})

module.exports = {User};