var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

function login(req, res){
   var first_name = req.body.first_name,
       password = req.body.last_name;
   res.end("Server get");

   var mysql      = require('mysql');
   var connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : '12345',
     database : 'jdspider'
   });
    
   connection.connect();

   connection.query('SELECT password from users where idusers = "' + first_name + '"', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
    });

}

app.post('/login', urlencodedParser,login);
 
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})