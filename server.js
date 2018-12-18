var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/*
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/dist/" + "index.html" );
}) // 使用后方路由的情况
*/

// 使用前方history路由，需要使用中间件，即可
const history = require('connect-history-api-fallback');
//这句代码需要在express.static上面
app.use(history());
app.use(express.static('dist'));


/*
app.use(history(
   {
       htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
   }
));
*/

app.use(express.static('public'));


/*
app.get('/*', function (req, res) {
   res.sendFile( __dirname + "/" + "vuesroute.html" );
})

app.get('/vue',function(req,res){
   res.sendFile(__dirname + "/" + 'myvue.html')
})

app.get('/myvue.js',function(req,res){
   res.sendFile(__dirname + "/" + 'myvue.js')
})

app.get('/vuesroute',function(req,res){
   res.sendFile(__dirname + "/" + "vuesroute.html")
})

app.get('/dist', function (req, res) {
   res.sendFile( __dirname + "/dist/" + "index.html" );
})
*/

function loginCallback(results, res , user_password){

   var backPassword = results[0].password;

   if(user_password != backPassword){
      res.write("Login Faild" + "\n")
      res.end();
   }else{
      res.write("Login Success");
      res.write("\n")

      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";
      MongoClient.connect(url, function(err, db){
         if (err) throw err;
         mongoConnCallback(db, res);
      });
   }
}

function mongoConnCallback(db, res){        
   
   var jddb = db.db("JD");
   var categories = jddb.collection("Categories");
   var comments = jddb.collection("Comment");
   var shops = jddb.collection("Shop");

   //var startup = db.db("local").collection("startup_log");
   res.end("查询\n");

   comments.estimatedDocumentCount().then((value)=>{
      console.log(value);//42
   });

   /*
   comments.find({}).toArray(function(err, items){
      if (err) throw err;
      if(items instanceof Array){
         console.log("类别总数为：" + items.length);
      }
      db.close();
   });

   comments.find({}).toArray(function(err, items){
      if (err) throw err;
      if(items instanceof Array){
         res.write("评论总数为：" + items.length);

      }
      db.close();
   });
   */

}

function dbCallback(items, res){
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

   connection.query('SELECT password from users where idusers = "' + first_name + '"', function(error, results, fields){
      if (error) throw error;
      loginCallback(results, res , user_password);
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