<h1 align="center">babel-plugin-library</h1>
<div align="center">
  <img width="300" src="https://raw.githubusercontent.com/AaronBank/static-files/master/images/tool-babel.jpg" alt="tool-libraries">
</div>

<div align="center">
  <br />
  <a href="https://github.com/AaronBank/babel-plugin-library/blob/master/README.ZH.md">Chinese</a> | 
  <a href="https://github.com/AaronBank/babel-plugin-library">English</a>
  <br /><br />
  <img src="https://img.shields.io/badge/license-MIT-green.svg"/> 
  <img src="https://img.shields.io/badge/npm-v6.5.0-blue.svg"/> 
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen.svg"/>
</div>
<br/>

<div align="center">
  <a href="https://github.com/AaronBank/tool-libraries">tool-libraries</a>
  load <b>babel</b> plugin on demand
</div>

### Installation

```javascript
npm install babel-plugin-library --save-dev
```

### Use

**Method 1：Configure in `.babelrc`**

- `.babelrc`

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

> `webpack`

```javascript
module: {
  rules: [{
    test: /\.js$/,
    loader: "babel-loader",
  }]
}
```

---

**Method 2：Configure directly in `webpack`**

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

### Conversion

```javascript
// Before conversion =>
import { types } from 'tool-libraries'

// After conversion =>
import equal from 'tool-libraries/lib/types'
```

## Licence ##
**[MIT](https://github.com/AaronBank/babel-plugin-library/blob/master/LICENSE)**