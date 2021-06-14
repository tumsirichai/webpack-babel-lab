## Webpack คืออะไร ?
Webpack คือ Module ของ Node.js เป็นตัวรวมไฟล์ (Bundler) และมีหน้าที่ Transpile JavaScript สมัยใหม่ออกมาเป็น JavaScript ที่สามารถใช้ได้กับ Web browser ปัจจุบันได้ทุกตัว ซึ่งไม่ว่าจะเป็น React, Angular, Vue.js ต่างก็นำ Webpack มาช่วยในรวมไฟล์ทั้งสิ้น จริงๆ webpack สามารถทำอะไรได้มากกว่านี้ สามารถค้นหาบนอินเตอร์เน็ทได้ด้วยตัวเอง

## เริ่มต้น

สร้างไฟล์ package.json ซึ่งเป็นไฟล์ในการจัดการเก็บรายการแพ็กเกจหรือโมดูล รวมถึงรายละเอียดเกี่ยวกับโปรเจคของเรา
```
npm init -y
```
## ติดตั้ง Webpack

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

## สร้างไฟล์ index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="dist/main.js"></script>
</head>
<body>
    
</body>
</html>
```
## สร้างไฟล์ index.js

```
import hello from './app'

const fullName = hello('Somchai','Deesuk')

alert(`${fullName}, Try to view the console.log`)
console.log('Result: ' , fullName)
```
## สร้างไฟล์ app.js
```
var hello = function (a, b) {
    return `Hello! Mr.${a} ${b}`;
};
module.exports = hello;
```

## ทดสอบเบื้องต้น
สร้างไฟล์ `app.js` เสร็จแล้วรัน 
` ./node_modules/.bin/webpack <INPUT> --output <OUTPUT>`  ตัวอย่าง
```
./node_modules/.bin/webpack ./index.js --output dist/main.js
```

## เพิ่ม Script ใน package.json

```
"dev": "webpack --mode development",
"build": "webpack --mode production",
```
## สร้าง webpack.config.js

```
module.exports = {
    entry: './index.js',
    output: {
      filename: './main.js'
    },
    watch: true
  };
```

## ทดลองรัน Development Mode
```
npm run dev
```


## ทดลอง Build Mode
```
npm run build
```

## ใช้งาน Loader
ตัว Webpack เองไม่สามารถ Transpile Code ได้ด้วยตัวมันเอง ัแต่เราสามารถหา Loaders มาลงผ่าน npm หรือ yarn [https://webpack.js.org/loaders/](https://webpack.js.org/loaders/)

## ติดตั้ง babel 
เพื่อ Transpiling Modern JavaScript (ES6+) ไปยัง Standard JavaScript (ES5)

```
npm install --save-dev babel-loader babel-core babel-preset-env
```

## ปรับปรุง Script ใน package.json
เพิ่มส่วน `module: {rules: [ ... ]}` และตั้งค่า babel-loader

```
module.exports = {
  entry: "./index.js",
  output: {
    filename: "./main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  watch: true,
};
```

## ติดตั้ง css-loader และ style-loader 
เพื่อ import ไฟล์ main.css ภายใน main.js

```
npm install --save-dev css-loader style-loader
```

## อธิบาย webpack.config.js
>  * test: กำหนดนามสกุลไฟล์ที่ให้ Loader เข้าไปจัดการ เช่น .js
>  * loader: ชื่อ Loader ที่เรียกใช้ เช่น babel-loader
>  * exclude: โฟลเดอร์ที่ไม่ต้องเกี่ยวข้องไม่ต้อง Process
>  * query.presets: preset ค่าที่​กำหนดล่วงหน้า


---

## Resources
- [https://webpack.js.org](https://webpack.js.org)
- [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/)
- [https://medium.com/ag-grid/webpack-tutorial-understanding-how-it-works-f73dfa164f01](https://medium.com/ag-grid/webpack-tutorial-understanding-how-it-works-f73dfa164f01)
- [https://medium.com/@sivaraj-v/basic-webpack-4-and-es5-to-es6-transpiler-using-babel-dc66e72c86c6](https://medium.com/@sivaraj-v/basic-webpack-4-and-es5-to-es6-transpiler-using-babel-dc66e72c86c6)
- [https://www.sitepoint.com/webpack-beginner-guide/](https://www.sitepoint.com/webpack-beginner-guide/)
- [https://www.smashingmagazine.com/2021/06/getting-started-webpack/](https://www.smashingmagazine.com/2021/06/getting-started-webpack/)
- [https://medium.com/geekculture/webpack-101-a-quick-look-at-webpack-and-its-uses-22ff598723a9](https://medium.com/geekculture/webpack-101-a-quick-look-at-webpack-and-its-uses-22ff598723a9)