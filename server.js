var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var sessionParser = require('express-session');
//var MongoStore = require('connect-mongostore');
 

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cookieParser('123456'));

app.use(express.static('dist'));

app.use(sessionParser({
  secret:'my app secret',// 用来对session id相关的cookie进行签名
  saveUninitialized:false,// 是否自动保存未初始化的会话，建议false
  resave:false,// 是否每次都重新保存会话，建议false
  //store: new MongoStore({   //创建新的mongodb数据库存储session
  //    host: 'localhost',    //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
  //    port: 27017,          //数据库的端口号
  //    db: 'test-app'        //数据库的名称。
  //}),
  name:'test',//cookie的name，默认值是：connect.sid
  cookie:{
      maxAge:10*1000
  }
}));


// 访问index.html,mysql登录，查询mongodb中JD中catalog记录条数
app.get('/', function (req, res) {  

   res.sendFile( __dirname + "/" + "login.html" );

})
app.post('/login', urlencodedParser,function (req, res) {
  console.log("index页面登录请求post的request的cookies：");
  console.log(req.cookies);
  console.log(req.signedCookies); 
  console.log(req.session.id);
  res.cookie('sessionid',req.sessionID); 
  req.session.save();
  login(req, res);
})

app.get("/set",function(req,res){
  //参数1：名字
  //参数2:cookie的值
  //参数3：cookie的配置信息
  res.cookie('username','cookievalue111');

  res.send("设置cookie成功");
});


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


  connection.query('SELECT password from users where idusers = "' + first_name + '"', function(error, results, fields){
     if (error) throw error;
     console.log(results.length);
     if(results.length<=0){
       res.end("Login Failed");
     }else{
      
      res.sendFile( __dirname + "/" + "index.html" );
      
      console.log(__dirname + "/" + "index.html");
      /*
      res.cookie('username',first_name,{ maxAge:10*1000,signed:true}); // 设置cookie
      res.write('<head><meta charset = "utf-8"></head>')
      console.log("index页面get请求request的cookies：");
      if(req.session.isVisit) {
         req.session.isVisit++;
         res.write('<p>第 ' + req.session.isVisit + '次来此页面</p>');
      } else {
         req.session.isVisit = 1;
         res.write("欢迎第一次来这里");
         console.log(req.session);
      }
      loginCallback(results, res , first_name, user_password);
      */

     }
  });

  connection.end();

}

function loginCallback(results, res , first_name, user_password){

   var backPassword = results[0].password;

   res.write("Login Success");
   res.write("\n")
   var MongoClient = require('mongodb').MongoClient;
   var url = "mongodb://localhost:27017/";
   MongoClient.connect(url, function(err, db){
      if (err) throw err;
      mongoConnCallback(db, res);
   });

}

function mongoConnCallback(db, res){        
   
   var jddb = db.db("JD");
   var categories = jddb.collection("Categories");
   var comments = jddb.collection("Comment");
   var shops = jddb.collection("Shop");

   //var startup = db.db("local").collection("startup_log");

   comments.estimatedDocumentCount().then((value)=>{
      console.log(value);//42
      res.end("mongodb中记录条数："+value + "\n");
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