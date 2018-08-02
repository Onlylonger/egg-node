# example

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。

[egg]: https://eggjs.org

# 说明

- app.config 获取的是最终配置
- 一个中间件是一个文件, 导出一个函数
- 一个插件是需要在 config/plugin.js 里面注册, 如果需要自定义配置需要在 config/config.${xx}.js 修改

```js
const middleFn = ((options = app.config[middlewareName]), app) => {}
```

## RESTful

```js
// app/router.js

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
 */
router.resources('topics', '/api/v2/topics', controller.topics)
```

```js
// app/controller/topics.js
```
