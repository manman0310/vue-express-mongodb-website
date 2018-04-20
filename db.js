
var mongoose = require("mongoose"); //引入mongoose
var db = mongoose.connection; db.on('error', function callback() { //监听是否有异常 
    console.log("Connection error");
});
db.once('open', function callback() {
    //监听一次打开 
    //在这里创建你的模式和模型
    console.log('database has been connected!');
});

mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败" + error);
});
mongoose.connect('mongodb://localhost/advertisement');
//连接到mongoDB的todo数据库 
//该地址格式：mongodb:
//[username:password@]host:port/database[?options] 
//默认port为27017  
module.exports = mongoose;

