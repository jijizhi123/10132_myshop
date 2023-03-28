# 外卖web_App

> 1.此项目为外卖web_App
>
> 2.包括商家、商品、购物车、用户等多个子模块
>
> 3.使用Vue全家桶+ES6+Webpack等前端技术
>
> 4.采用模块化、组件化、工程化的模式开发

## 项目结构分析

```bash
myshop
|-- build : webpack 相关的配置文件夹(基本不需要修改)
|-- config: webpack 相关的配置文件夹(基本不需要修改)
	|-- index.js: 指定的后台服务的端口号和静态资源文件夹
|-- node_modules
|-- src : 源码文件夹
	|-- main.js: 应用入口 js
|-- static: 静态资源文件夹
|-- .babelrc: babel 的配置文件
|-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
|-- .eslintignore: eslint 检查忽略的配置
|-- .eslintrc.js: eslint 检查的配置
|-- .gitignore: git 版本管制忽略的配置
|-- index.html: 主页面文件
|-- package.json: 应用包配置文件
|-- README.md: 应用描述说明的 readme 文件

```

## 项目源码目录设计

```
|--src
	|--api：与后台交互模块文件夹
	|--common：通用资源文件夹，如fonts/img/stylus
	|--components：非路由组件文件夹
	|--filters：自定义过滤器模块文件夹
	|--mock：模拟数据接口文件夹
	|--pages：路由组件文件夹
	|--router：路由器文件夹
	|--store：vuex相关模块文件夹
	|--App.vue：应用组件
	|--main.js：入口JS
```

## 分析应用的整体vue组件结构

```
src
|-- components------------非路由组件文件夹
	|-- FooterGuide---------------底部组件文件夹
		|-- FooterGuide.vue--------底部组件 vue
|-- pages-----------------路由组件文件夹
	|-- Msite---------------首页组件文件夹
        	|-- Msite.vue--------首页组件 vue
	|-- Search----------------搜索组件文件夹
        	|-- Search.vue---------搜索组件 vue
	|-- Order--------------订单组件文件夹
        	|-- Order.vue-------订单组件 vue
	|-- Profile--------------个人组件文件夹
        	|-- Profile.vue-------个人组件 vue
|-- App.vue---------------应用根组件 vue
|-- main.js---------------应用入口 js
```
