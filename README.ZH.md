<h1 align="center">babel-plugin-library</h1>
<div align="center">
  <img width="300" src="https://raw.githubusercontent.com/AaronBank/static-files/master/images/tool-babel.jpg" alt="tool-libraries">
</div>

<div align="center">
  <br />
  <a href="https://github.com/AaronBank/babel-plugin-library/blob/master/README.ZH.md">中文文档</a>
  <a href="https://github.com/AaronBank/babel-plugin-library" style="margin-left: 12px;">英文文档</a>
  <br /><br />
  <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
  <img src="https://img.shields.io/badge/npm-v6.5.0-blue.svg" style="margin-left: 12px;"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen.svg" style="margin-left: 12px;"/>
</div>
<br/>

<div align="center">
  <a href="https://github.com/AaronBank/tool-libraries">tool-libraries</a>
  按需加载<b>babel</b>插件
</div>

### 安装

```javascript
npm install babel-plugin-library --save-dev
```

### 使用

**方式一：在 `.babelrc` 里进行配置(推荐)**

- `.babelrc`配置

```javascript
{
  "plugins": [
    [
      "babel-plugin-library",
      {"libraryName": "tool-libraries"}
    ]
  ]
}
```

> `webpack`配置

```javascript
module: {
  rules: [{
    test: /\.js$/,
    loader: "babel-loader",
  }]
}
```

---

**方式二：直接在 `webpack` 里进行配置**

```javascript
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      options: {
        plugins: [
          [
            "babel-plugin-library",
            {"libraryName": "tool-libraries"}
          ]
        ]
      }
    }]
  }
  ...
}
```

### 转化

```javascript
// 转化前 =>
import { types } from 'tool-libraries'

// 转化后 =>
import equal from 'tool-libraries/lib/types'
```

## Licence ##
**[MIT](https://github.com/AaronBank/babel-plugin-library/blob/master/LICENSE)**