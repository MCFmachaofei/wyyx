# 前期准备
## 1. 项目开发准备
    项目描述
    技术选型
    API接口
    你能从此项目中学到什么?

## 2. 开启项目开发
    使用vue-cli(脚手架)快速搭建项目
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与发布

## 3.	项目结构分析
    项目功能分析，准备相关资源，设计项目src目录

# day01
## 1. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        router-view/router-link/keep-alive
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Msite/Search/Order/Profile

## 2. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList
    
## 3. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta
