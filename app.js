'use strict';

const log = (...rest) => console.log(...rest);

const logInfo = (label, info) => {
  log('=====================================');
  log(`${label}: `, info);
  log('=====================================');
};

module.exports = app => {
  app.beforeStart(async () => {
    logInfo('当前环境', app.config.env);
    logInfo('当前环境', app.config.HOME);
    logInfo('核心中间件', app.config.coreMiddlewares);
    logInfo('应用中间件', app.config.appMiddlewares);
  });
};
