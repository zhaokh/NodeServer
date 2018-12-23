var Models = require('../mongodb/model.js'); // 引入model文件
var CommentsModel = Models.Comments;
var CatelogModel = Models.Categories;
var ProductsModel = Models.Products;
var CommentImageModel = Models.CommentImages;
var CommentSummaryModel = Models.CommentSummaries;
var HotCommentTagModel = Models.HotCommentTags;
var ShopModel = Models.Shops;

listCatelogCount = function (req,res,next) {

    var param = req.query.sort; //解析get请求所携带的参数sort

    console.log("listCatelogCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    // 查询数量
    var wherestr = {};
    CatelogModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findCatelogById = function (req,res,next) {

    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findCatelogById, param = " + param);

    var wherestr = {_id:param};
    CatelogModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};

listProductsCount = function (req,res,next) {

    var param = req.query.sort; //解析get请求所携带的参数sort

    console.log("listProductsCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    // 查询数量
    var wherestr = {};
    ProductsModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findProductsById = function (req,res,next) {

    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findProductsById, param = " + param);

    var wherestr = {_id:param};
    ProductsModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};

listCommentsCount = function (req,res,next) {
    var param = req.query.sort; //解析get请求所携带的参数sort

    console.log("listCommentsCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    
    // 查询数量
    var wherestr = {};
    CommentsModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findCommentsById = function (req,res,next) {
    
    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findCommentsById, param = " + param);
    
    var wherestr = {_id:param};
    CommentsModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};

listCommentImagesCount = function (req,res,next) {

    console.log("listCommentImagesCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    // 查询数量
    var wherestr = {};
    CommentImageModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findCommentImagesById = function (req,res,next) {
    
    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findCommentsById, param = " + param);
    
    var wherestr = {_id:param};
    CommentImageModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};

listCommentSummariesCount = function (req,res,next) {

    console.log("listCommentImagesCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    // 查询数量
    var wherestr = {};
    CommentSummaryModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findCommentSummariesById = function (req,res,next) {
    
    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findCommentsById, param = " + param);
    
    var wherestr = {_id:param};
    CommentSummaryModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};

listHotCommentTagsCount = function (req,res,next) {

    console.log("listCommentImagesCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    // 查询数量
    var wherestr = {};
    HotCommentTagModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findHotCommentTagsById = function (req,res,next) {
    
    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findCommentsById, param = " + param);
    
    var wherestr = {_id:param};
    HotCommentTagModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};

listShopesCount = function (req,res,next) {

    console.log("listCommentImagesCount");

    res.setHeader("contentType", "text/html; charset=utf-8");
    
    // 查询数量
    var wherestr = {};
    ShopModel.count(wherestr, function(err, doc){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.end(JSON.stringify(doc));
        }
    })

};

findShopesById = function (req,res,next) {
    
    var param = req.query.Id; //解析get请求所携带的参数sort

    console.log("findCommentsById, param = " + param);
    
    var wherestr = {_id:param};
    ShopModel.find(wherestr,function (err,doc) {
        if(err){
            res.end(JSON.stringify(err));
            return
        }
        //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
        res.end(JSON.stringify(doc));
    });
    

};


module.exports = {
    Categories:{
        listCount:listCatelogCount,
        findById:findCatelogById
    },

    Comments:{
        listCount:listCommentsCount,
        findById:findCommentsById
    },

    Products:{
        listCount:listProductsCount,
        findById:findProductsById
    },

    CommentImages:{
        listCount:listCommentImagesCount,
        findById:findCommentImagesById
    },

    CommentSummaries:{
        listCount:listCommentSummariesCount,
        findById:findCommentSummariesById
    },

    HotCommentTags:{
        listCount:listHotCommentTagsCount,
        findById:findHotCommentTagsById
    },

    Shopes:{
        listCount:listShopesCount,
        findById:findShopesById
    }
};
