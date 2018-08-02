'use strict';

module.exports = () => ({
  cors: {
    origin: ctx => {
      const origin = ctx.get('origin');
      if (ctx.isSafeDomain && ctx.isSafeDomain(origin)) {
        return origin;
      }
      return '';
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
