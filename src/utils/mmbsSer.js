import {Message} from 'antd'
// import request from '../utils/request'
import Mmbs from 'Mmbs'

// 缓存配置信息
let configData = null
const mmbsUtil = {
  /**
   * 登录
   * @param data {Object} - 提交对象
   */
  login(data) {
    return new Promise((resolve, reject) => {
      Mmbs.User.logIn(data.username, data.password, {
        success (user) {
          resolve(user)
        },
        error (user, error) {
          reject(error)
          Message.error(error)
          // (reject && reject(error)) || Message.error(error)
        },
      });
    })
  },
  /**
   * 运行云代码
   * @param funcName {String} - 函数名称
   * @param data {Object} - 函数参数
   */
  runCloud(funcName, data) {
    return new Promise((resolve, reject) => {
      Mmbs.Cloud.run(funcName, data, {
        success: resolve,
        error: reject,
      });
    })
  },

  /**
   * 登出
   */
  logout() {
    return Mmbs.User.logOut().catch(error => {
      Message.error(error)
    })
  },
  /**
   * 上传文件
   * @param {Object} file - 文件
   */
  uploadFile(file) {
    const mfile = new Mmbs.File(file.name, file)
    return mfile.save().catch(error => {
      Message.error(error && error.statusText)
    })
  },
  /**
   * 统计数据
   * @param collectionName {String} - 集合名称
   * @param options {String} - 选项
   */
  agg(collectionName, params, pipeline) {
    const ClassObj = Mmbs.Object.extend(collectionName)
    const query = new Mmbs.Query(ClassObj)
    util.extendQueryParams(query, params)
    return query.aggregate(pipeline).catch(error => {
      Message.error(error)
    })
  },
  /**
   * 根据ID获取数据
   * @param {String} collectionName - 集合名称
   * @param {String} objectId - 对象ID
   */
  getById(collectionName, objectId) {
    const ClassObj = Mmbs.Object.extend(collectionName)
    const query = new Mmbs.Query(ClassObj)
    return new Promise((resolve, reject) => {
      query.get(objectId, {
        success(object) {
          resolve(object)
        },
        error(object, error) {
          // console.error("query object fail")
           reject(error)
        },
      })
    })
  },
  // Mmbs实例
  getMmbs() {
    return Mmbs
  },
    /**
   * 获取Mmbs全局配置
  */
  getMmbsConfig(name = '') {
    return name ? configData.get(name) : configData
  },
  /**
   * 获取Mmbs全局配置
  */
  initMmbsConfig() {
    return new Promise((resolve, reject) => {
      Mmbs.Config.get().then((config) => {
        configData = config
        resolve(config)
      }, (error) => {
        // console.log("Failed to get Config.")
       reject(error)
      })
    })
  },
  /**
   * 创建实体
   * @param collectionName
   * @param obj
   * @return {*}
   */
  createInstance( collectionName, obj = {} ) {
    const ClassObj = Mmbs.Object.extend(collectionName)
    return new ClassObj(obj)
  },

  
}
export default mmbsUtil

