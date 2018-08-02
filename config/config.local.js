'use strict';

module.exports = () => ({
  cors: {
    origin: ctx => {
      const origin = ctx.get('origin');
      return origin;
    },
    credentials: true,
  },

  // 插件 实参
  security: {
    csrf: {
      enable: false,
    },
    methodnoallow: {
      enable: false,
    },
  },
});
