安装淘宝cnpm：  npm install -g cnpm --registry=https://registry.npm.taobao.org
js文件如果保存为unicode格式，则nodejs启动会报错，保存为utf-8格式，则成功

express框架安装：
安装 Express 并将其保存到依赖列表中：
$ cnpm install express --save

以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：

body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

$ cnpm install body-parser --save
$ cnpm install cookie-parser --save
$ cnpm install multer --save

express_demo运行之前一直报错，运行了以下命令：
cnpm install inherits
cnpm install negotiator
cnpm install mime-types
cnpm install media-typer
cnpm install bytes
cnpm install raw-body
cnpm install safer-buffer
才可以正常运行
讲解url：http://www.runoob.com/nodejs/nodejs-express-framework.html

文件上传，需要安装依赖包：
cnpm install busboy
cnpm install xtend
cnpm install append-field
cnpm install object-assign
cnpm install mkdirp
cnpm install concat-stream

launch.json中添加配置，输入冒号：则会有提示！！！
使用 nodemon，可以实现热启动，不用每次修改server.js都手动启动服务器！并且可以调试服务器端代码！
安装方法：
cnpm install nodemon
然后用nodemon server命令启动项目，不用node server启动
配置调试服务器端代码：
打开launsh.json配置文件，然后在[]中输入冒号，则提示选择nodemon，则会自动生成参数，修改program中的app.js为自己的server.js
调试面板中，选择为nodemon，不要选择启动程序（这个是开发nodejs程序时的调试）。按F5即可启动。然后在浏览器端访问即可调试!!