'use strict';

module.exports = appInfo => ({
  keys: `${appInfo.name}_1533092598539_5429`,

  // 中间件顺序 配置
  middleware: [ 'cors', 'errorHandler' ],

  // 中间件 实参
  errorHandler: {
    match: '/api',
  },

  cors: {
    origin: ctx => {
      const origin = ctx.get('origin');
      // if (ctx.isSafeDomain && ctx.isSafeDomain(origin))
      console.log(ctx.isSafeDomain(origin));
      return '*';
    },
  },

  // 插件 实参
  security: {
    domainWhiteList: [],
    csrf: {
      enable: false,
    },
    methodnoallow: {
      enable: false,
    },
  },
});
