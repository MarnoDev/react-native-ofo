>- **本文为 Marno 原创，转载必须保留出处！**
>- **公众号【 aMarno 】，关注后回复 RN 加入交流群**
>- **React Native 优秀开源项目大全：http://www.marno.cn**

-------

## 一、前言

并没有实现 ofo 所有功能，只完成了主要的界面和逻辑，感觉其中也就【**地图**】和【**扫码**】两个比较核心的功能还需要花点时间以外，其他的就都比较简单了，而且由于没有API，模拟数据也没啥意思，所以就没有写那么完整。

**地图:** 用的是高德的 JS 地图，我在之前的一片文章中[**《Android快速实现地图功能（不仅快！而且小！）》**](http://www.jianshu.com/p/b1f87c660fa9)有提到过这样的实现方式，感兴趣的朋友可以点过去看一下，只不过这一次用到了更多的功能而已。使用 JS 地图代替原生地图的好处就是不用再处理麻烦的依赖包关系，但是缺点就是性能要比原生地图差。但是实际使用下来，也还是能达到正常使用的级别，不至于完全没法用。

**扫码:** 的功能是基于 react-native-camera 开源库进行的二次开发，前段时间我也将其封装成了开源组件，上传到了 NPM 服务器，可以直接通过 `npm install ac-qrcode --save` 进行安装使用，有需要的朋友可以到我 github 主页进行查看，或者在我博客之前的文章里找下，**传送门 >>> https://juejin.im/post/590740e544d904006931f0c6**

## 二、截图预览

|首页|个人中心|扫码|
|:--:|:--:|:--:|
|![](http://upload-images.jianshu.io/upload_images/960283-bfaf3888dace630c.gif?imageMogr2/auto-orient/strip)|![](http://upload-images.jianshu.io/upload_images/960283-f7963ab461001442.gif?imageMogr2/auto-orient/strip)|![](http://upload-images.jianshu.io/upload_images/960283-3a6c5bc745964818.gif?imageMogr2/auto-orient/strip)|

## 三、技术框架

- **"react": "16.0.0-alpha.6"**
- **"react-native": "0.43.1"**
- **"native-base": "^2.1.1"**（综合框架）
- **"react-navigation": "^1.0.0-beta.7"**（导航）
- **"ac-qrcode": "^1.0.0"**(扫码组件)
- **"react-native-simple-toast": "0.0.5"**（吐司）


## 四、仓库地址：[react-native-ofo](https://github.com/MarnoDev/react-native-ofo)

>项目运行步骤如下：
>- 第一步：npm install
>- 第二步：react-native link
>- 第三步：react-native run-android（或 run-ios）
>
>**理论兼容 Andorid / iOS，但没在 iOS 真机上试过，只在虚拟机上试了下。**

需要特别声明一下，因为用到了 “react-navigation”，在 RN 0.43 上会报错，虽然在 RN 0.44 中已经进行了修复，但是我还没有升级版本。暂时的解决办法可以到这里看下：https://github.com/react-community/react-navigation/issues/923

## 五、项目心得

>按照惯例，每完成一个仿写项目，我还是喜欢进行一下总结。

这个是我开源的第二个用 RN 仿写的的项目了，所以无论是对 RN 的理解还是使用上，相对之前开源 [react-native-eyepetizer](https://github.com/MarnoDev/react-native-eyepetizer) 的时候有了一些进步，而且中间还在不断学习一些 React 的知识，去深入理解组件生命周期，并以此作为着手点进行性能的优化，这部分内容后面我也会整理成文章分享出来。

回到这次开源的项目上来，最明显的就是关于分包结构的调整，之前在仿写开眼的时候，并没有考虑那么多，想的就是先入门再说。但是随着学习的深入，需要处理的逻辑逐渐复杂，合理清晰的管理代码是十分有必要的。

|仿开眼项目包结构|仿ofo项目包结构|
|:--:|:--:|
|![](http://upload-images.jianshu.io/upload_images/960283-c32916e904f53ac2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)|![](http://upload-images.jianshu.io/upload_images/960283-ee4f876d1683aca5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)|

**直接用上面的两张图做了个简单的对比，总结下就是：**

- 存放页面的文件夹命名从 pages 改为 screens
- 页面中组件的样式用单独文件进行管理，采用 **”页面名+Styles“方式命名，如：HomeScreenStyles** ，方便样式的复用和管理。
- 需要复用的组件抽取成单独一个类，存放到 components 包中。
- 图片、常量、颜色、公共样式等资源，分别用一个入口类管理，就和 Android 中管理资源的做法类似，这样更易维护。

**最后说一下为啥没有用 Redux**

- 一、觉得项目还不算复杂，没有必要使用 Redux
- 二、如果只是管理状态，Mobx 使用要简单点
- 三、好吧，我说实话，因为我还不太会。

-----

![](http://upload-images.jianshu.io/upload_images/960283-7b9bfe97c18a32ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
