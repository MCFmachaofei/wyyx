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

# 界面搭建
## 1. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, 函数/minxin(混合)
    vue-router的理解和使用
        router-view/router-link/keep-alive
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Home/Identify/Classify/Cart/Person

## 2. 抽取组件
    头部组件: HeaderTop 
    Home页底部组件 BottomFooter
    发现更多 DetailFindMore
    回到顶部组件 GoTop
    使用组件步骤
     1.使用组件页面引入组件
     2.映射成组件标签
     3.写标签到相应的html对应位置
    
## 3. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta
     
     
   # 项目开发中遇到的坑及问题总结
    1.底部组件实现，以及是否需要显示（meta）
    2.flex布局时如果父元素如果不能被子元素撑开，给父元素的父元素设置display：flex
    3.存在多层表达式时出现错误 xxx of ‘undefinde’解决方法v-if判断
    4.better-scroll不能上下滑动
    5.better-scroll/Swiper对象的两个创建时机
    
    6.Swiper两翼留白效果实现
       new Swiper('.swiper-container', {
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1.15,
                centeredSlides: true,
                onInit: function (swiper) {
                  swiper.slides[1].className = 'swiper-slide swiper-slide-active'
                },
                autoplay: {
                  autoplay:true,
                  delay: 3000
                },
              })
 
    7.@ipmort引入的混合如果页面上有对应的类名可以不用引用,但是如果页面没有对应的类名就需要在你的类里引用混合有参数传参数
    8.实现按需打包,减少项目体积 npm install --save-dev babel-plugin-component
    9.路由懒加载 const Shopcart = () => import('../pages/Shopcart/Shopcart.vue')
    10.图片懒加载 npm install --save vue-loader
      
        import VueLazyload from 'vue-lazyload'
    import loading from './common/img/loading.gif'
    Vue.use(VueLazyload, {
      loading
    })
    <img v-lazy="food.image">
  
    11.打包文件分析 npm run build --report
    12.缓存路由对象
    
      <keep-alive> <router-view /> </keep-alive>
    
    13.书写vue transition组件时 v-if 要放在里面
    

