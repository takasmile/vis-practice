let collModel = require('./collModel.js');
module.exports = {
  save(data) {
    return new Promise((resolve, reject) => {
      collModel.create(data, (err, docs) => {
        if (err) {
          rejct(err);
        } else {
          resolve(docs);
        }
      })
    })
  },
  find(data = {}, fields = null, options = {}) {
    return new Promise((resolve, reject) => {
      //model.find(需要查找的对象(如果为空，则查找到所有数据), 属性过滤对象[可选参数], options[可选参数], callback)
      collModel.find(data, fields, options, (error, doc) => {
        if (error) {
          reject(error)
        } else {
          resolve(doc)
        }
      })
    })
  },
  findOne(data) {
    return new Promise((resolve, reject) => {
      //model.findOne(需要查找的对象,callback)
      collModel.findOne(data, (error, doc) => {
        if (error) {
          reject(error)
        } else {
          resolve(doc)
        }
      })
    })
  },
  findById(data) {
    return new Promise((resolve, reject) => {
      //model.findById(需要查找的id对象 ,callback)
      collModel.findById(data, (error, doc) => {
        if (error) {
          reject(error)
        } else {
          resolve(doc)
        }
      })
    })
  },
  update(conditions, update) {
    return new Promise((resolve, reject) => {
      //model.update(查询条件,更新对象,callback)
      collModel.update(conditions, update, (error, doc) => {
        if (error) {
          reject(error)
        } else {
          resolve(doc)
        }
      })
    })
  },
  remove(conditions) {
    return new Promise((resolve, reject) => {
      //model.update(查询条件,callback)
      collModel.remove(conditions, (error, doc) => {
        if (error) {
          reject(error)
        } else {
          resolve(doc)
        }
      })
    })
  }
};