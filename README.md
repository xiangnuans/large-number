# 大整数加法包

1. 需要打包压缩版和非压缩版
2. 直至AMD/CJS/ESM模块引入

## 库的目录和打包要求

- 未压缩版large-number.js
- 压缩版large-number.min.js

## 支持的使用方式

- 支持ES module

```js
import * as largeNumber from 'large-number-co'
largeNumber('9999', '1')
```

- 支持CJS

```js
const largeNumber = require('large-number-co')
largeNumber('999', '1');
```

- 支持AMD

```js
require(['large-number'], function((large-number) {
  largeNumber('9999', '1')
}))
```

- 可以直接铜鼓script标签引入

```html
<script  src="https://"></script>
```

## 如何将库暴露出去

- library：指定库的全局变量
- libraryTarget： 支持库的引入方式

```js
module.exports = {
  mode: 'production',
  entry: {
    'large-number': './src/index.js',
    'large-number': './src/index.js'
  },
  output: {
    filename: '[name].js',
    libary: 'largeNumber',
    libaryTarget: 'umd',
    libaryExport: 'default'
  }
}
```

## 如何指定对.min压缩

安装压缩插件`Terser-webpack-plugin`

```js

module.exports = {
  mode: 'production',
  entry: {
    'large-number': './src/index.js',
    'large-number': './src/index.js'
  },
  output: {
    filename: '[name].js',
    libary: 'largeNumber',
    libaryTarget: 'umd',
    libaryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({    
        inclue: /\.min\.js$/
      })
    ]
  }
}
```

说明： 在webpack4中设置`mode: 'production'`，开启生产环境默认会对`.min.js`文件压缩

## 设置入口文件

package.json文件的main字段为index.js

```js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/large-number.min.js')
} else {
  module.exports = require('./dist/large-number.js')
}

```