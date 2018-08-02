'use strict';

module.exports = appInfo => ({
  keys: `${appInfo.name}_1533092598539_5429`,

  // 中间件顺序 配置
  middleware: [ 'cors', 'errorHandler' ],

  // 中间件 实参
  errorHandler: {
    match: '/api',
  },


  // 插件 实参

});
