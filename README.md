<p align="center">
  <img width="320" src="./logo.svg">
</p>

## 目标

旨在打造自己顺手的工具库，并且以项目驱动学习

## 项目技术栈

本项目基于`Electron`，`Node`，`React`，`Antd`构建，图标库选用`font-awesome`，Eslint 规范选用`airbnb`，现在项目还未引入`redux`，当需要的时候自然会引入的。

## 文件结构

该项目的 UI 类似后台，公用的部分放在公用的部分，比如 src 文件夹下，公用的组件（components），公用的一些资源（assets），公用的功能函数（utils），作为开发者，当你有一个好点子，不妨你自己想做的功能则放置于 views 文件夹中（需在 views 文件夹中新建一个文件夹，你可以在你的文件夹下面随意操作）

### src 文件夹

`index` 则是整个应用的入口
`App.js` 负责项目的布局
`routes/index.js` 负责项目的路由
`assets` 公共的资源
`components` 公共的组件
`utils` 公共的功能函数
`views` 单个页面

eslint，babel 配置文件都在 package.json 文件中

### 目录结构

```js
├── build
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── favicon.png
├── LICENSE
├── LICENSE.md
├── logo.svg
├── main.js
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   ├── components
│   ├── index.html
│   ├── index.js
│   ├── routes
│   │   └── index.js
│   ├── utils
│   └── views
│       └── ImageOptimizer
│           ├── FileSelect.js
│           └── index.js
```

## 工作流

执行操作请新开分支，分支命名规则,如 `feat/picToResize@lgq`
