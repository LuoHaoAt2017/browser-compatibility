### 如何解决浏览器之间的兼容问题
- 开发之前决定应用将要运行在那些浏览器上及要求的最低版本。
- 确定在这些版本上有哪些兼容问题需要去处理，百度。

### 浏览器的兼容性问题的分类
- 样式兼容性 css

1.初始内外边距，抹平差异。

2.部分css3属性还没有纳入标准，各个浏览器厂商各行其是，加前缀。
    microsoft：-ms, 
    opera：-o, 
    firfox：-moz, 
    chrome/sanfari -webkit

3.案例解析
    
- 交互兼容性 javascript


- 浏览器 hack

### babel-polyfill
Babel 默认只转换新的 JavaScript 句法，而不转换新的 API，比如 Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

对于一些低版本的浏览器以及安卓5.0以下，es6的api不能被支持，这时候需要使用 babel-polyfill 来做兼容。
Because this is a polyfill (which will run before your source code), 
we need it to be a dependency, not a devDependency。

step1: npm install @babel/polyfill [注意：不能安装在开发环境，生产环境也需要。]
step2: import '@babel/polyfill' [在项目的main.js文件首部引入]
step3: entry: {main: ["@babel/polyfill", resolve('src/main.js')]} [在项目的入口处引入]

### 本项目不支持IE9以下版本
如果你想构建的项目能够支持IE8 -> https://github.com/xcatliu/react-ie8
import will be transformed to `Object.defineProperty` by babel,
Object.defineProperty` doesn't exists in IE8

### 参考文档
https://juejin.im/post/5b3da006e51d4518f140edb2#heading-0
https://github.com/xcatliu/react-ie8