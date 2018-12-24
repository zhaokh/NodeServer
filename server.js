var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var $ = require('./controllers/controller') 
var cors = require('cors')

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // 允许跨域的请求发起者
  res.header('Access-Control-Allow-Methods', 'GET,POST');  // 复杂请求，设置允许的方法
  res.header('Access-Control-Allow-Headers', 'Content-Type');  // 请求的自定义请求头字段
  res.header('Access-Control-Allow-Credentials','true');  // 是否接受发送cookies
  next();
};

app.use(allowCrossDomain);

/*
//allow custom header and CORS
app.all('*',function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

   if (req.method == 'OPTIONS') {
     res.send(200); //让options请求快速返回/
   }
   else {
     next();
   }
 });
*/


/*
app.use(cors({
   origin:['http://localhost:8080/api/*'],
   methods:['GET','POST'],
   //allowHeaders:['Content-type','Authorization']
}));
*/

app.use(express.static('dist'));

Object.keys($).forEach(function(key){
   Object.keys($[key]).forEach(function(api){
      app.get('/api'+'/'+key+'/'+api,$[key][api]);
   });
});
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})