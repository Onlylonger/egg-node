'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  /**
   * RESTful 例子
   * GET     /api/v2/topics           app.controller.topics.index
   * POST    /api/v2/topics           app.controller.topics.create
   * GET     /api/v2/topics/new       app.controller.topics.new
   * GET     /api/v2/topics/:id       app.controller.topics.show
   * PUT     /api/v2/topics/:id       app.controller.topics.update
   * DELETE  /api/v2/topics/:id       app.controller.topics.destroy
   * GET     /api/v2/topics/:id/edit  app.controller.topics.edit
   *
   * api/v2/topics?a=1&b=3
   */
  router.resources('topics', '/api/v2/topics', controller.topics);
};
