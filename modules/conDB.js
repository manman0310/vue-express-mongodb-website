var mongoose = require('mongoose')
var conDbSchema = require('../schemas/conDb') //拿到导出的数据集模块
var conDb = mongoose.model('conDb', conDbSchema) // 编译生成Movie 模型

module.exports = conDb