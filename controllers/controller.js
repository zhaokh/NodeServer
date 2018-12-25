var Models = require('../mongodb/model.js'); // 引入model文件
var CommentsModel = Models.Comments;
var CatelogModel = Models.Categories;
var ProductsModel = Models.Products;
var CommentImageModel = Models.CommentImages;
var CommentSummaryModel = Models.CommentSummaries;
var HotCommentTagModel = Models.HotCommentTags;
var ShopModel = Models.Shops;


var CollectionModels = {
    Categories: CatelogModel,
    Products:ProductsModel,
    Comments:CommentsModel,
    CommentImages:CommentImageModel,
    CommentSummaries:CommentSummaryModel,
    HotCommentTags:HotCommentTagModel,
    Shopes:ShopModel
};

let CollectionsAPI = {};

Object.keys(CollectionModels).forEach(function(key){
    let childrenAPI = {};
    let chieldModel = CollectionModels[key];
    childrenAPI.listCount = function (req,res,next) {
        res.setHeader("contentType", "text/html; charset=utf-8");
        // 查询数量
        var wherestr = {};
        chieldModel.count(wherestr, function(err, doc){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                res.end(JSON.stringify(doc));
            }
        })
    
    };

    childrenAPI.findById = function (req,res,next) {
        var param = req.query.Id; //解析get请求所携带的参数sort
        console.log("findCommentsById, param = " + param);
        var wherestr = {_id:param};
        chieldModel.find(wherestr,function (err,doc) {
            if(err){
                res.end(JSON.stringify(err));
                return
            }
            //这里直接返回数据库返回的数据，我并没有进行其他封装，所以返回的是一个数组，后续会考虑统一标准
            res.end(JSON.stringify(doc));
        });
    };
    console.log(childrenAPI)
    CollectionsAPI[key] = childrenAPI;
});

module.exports = CollectionsAPI;