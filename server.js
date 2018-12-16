var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


function dbCallback(items){
   console.log(items.length);
}

function login(req, res){
   var first_name = req.body.first_name,
       user_password = req.body.last_name;

   var mysql      = require('mysql');
   var connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : '12345',
     database : 'jdspider'
   });
    
   connection.connect();

   res.write('<head><meta charset = "utf-8"></head>')

   connection.query('SELECT password from users where idusers = "' + first_name + '"', function (error, results, fields) {
      if (error) throw error;
      backPassword = results[0].password;

      var outString = "";
      if(user_password != backPassword){
         res.write("Login Faild" + "\n")
         res.end();
      }else{
         res.write("Login Success" + "\n")
         console.log(first_name + '登录成功');
         var MongoClient = require('mongodb').MongoClient;
         var url = "mongodb://localhost:27017/";
         MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            res.write("mongodb 数据库已连接!");            
            
            var jddb = db.db("JD");
            var categories = jddb.collection("Categories");
            var comments = jddb.collection("Comment");
            

            //var startup = db.db("local").collection("startup_log");

            categories.find({}).toArray(function(err, items){
               if (err) throw err;
               if(items instanceof Array){
                  dbCallback(items);
               }
               db.close();
            });

            res.end();
         });
      }
   });

   connection.end();

}



app.post('/login', urlencodedParser, login);

function inquire(req, res){
   console.log("inquire");
   var MongoClient = require('mongodb').MongoClient;
   var url = "mongodb://localhost:27017/JD";
 
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      res.write("mongodb 数据库已创建!");
      db.close();
   });
}

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