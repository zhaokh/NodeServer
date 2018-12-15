var express = require('express');
var app = express();
//var fs = require("fs");
 
//var bodyParser = require('body-parser');
var multer  = require('multer');
 
var upload =multer({ dest: "tmp/"});

//app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: 'tmp/'}).single('image'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.post('/file_upload', upload.single("image"),function (req, res) {
    //console.log(req)
    console.log(req.file);  // 上传的文件信息
    console.log(req.body);  // 上传的文件信息
    console.log(req.files);  // 上传的文件信息
 
return;

   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})