var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var $ = require('./controllers/controller') 
var cors = require('cors')

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors({
   origin:['http://localhost:8080/api/*'],
   methods:['GET','POST'],
   //allowHeaders:['Content-type','Authorization']
}));

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