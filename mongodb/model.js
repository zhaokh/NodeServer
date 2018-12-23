var JDCollections = require('./JDSchemes.js'); //引入Schema 文件
var JDComments = JDCollections.comments;
var JDCategories = JDCollections.categories;
var JDProducts = JDCollections.products;
var JDCommentImages = JDCollections.commentImages;
var JDCommentSummaries = JDCollections.commentSummaries;
var JDCommentHotCommentTags = JDCollections.hotCommentTags;
var JDShops = JDCollections.shops;

//comment查询
function findComments(conditions,callback) {
    conditions = conditions || {};
    JDComments.find(conditions,callback);
}

//comment查询
function countComments(conditions,callback) {
    conditions = conditions || {};
    JDComments.count(conditions,callback);
}

//category查询
function findCategories(conditions,callback) {
    conditions = conditions || {};
    JDCategories.find(conditions,callback);
}

//category数据查询
function countCategories(conditions,callback) {
    conditions = conditions || {};
    JDCategories.count(conditions,callback);
}

//category查询
function findProducts(conditions,callback) {
    conditions = conditions || {};
    JDProducts.find(conditions,callback);
}

//category数据查询
function countProducts(conditions,callback) {
    conditions = conditions || {};
    JDProducts.count(conditions,callback);
}

//category查询
function findCommentImages(conditions,callback) {
    conditions = conditions || {};
    JDCommentImages.find(conditions,callback);
}

//category数据查询
function countCommentImages(conditions,callback) {
    conditions = conditions || {};
    JDCommentImages.count(conditions,callback);
}

//category查询
function findCommentSummaries(conditions,callback) {
    conditions = conditions || {};
    JDCommentSummaries.find(conditions,callback);
}

//category数据查询
function countCommentSummaries(conditions,callback) {
    conditions = conditions || {};
    JDCommentSummaries.count(conditions,callback);
}


//category查询
function findHotCommentTags(conditions,callback) {
    conditions = conditions || {};
    JDCommentHotCommentTags.find(conditions,callback);
}

//category数据查询
function countHotCommentTags(conditions,callback) {
    conditions = conditions || {};
    JDCommentHotCommentTags.count(conditions,callback);
}


//category查询
function findShops(conditions,callback) {
    conditions = conditions || {};
    JDShops.find(conditions,callback);
}

//category数据查询
function countShops(conditions,callback) {
    conditions = conditions || {};
    JDShops.count(conditions,callback);
}



module.exports = {
    Categories:{
        find:findCategories,
        count:countCategories
    },
    Products:{
        find:findProducts,
        count:countProducts
    },
    Comments:{
        find:findComments,
        count:countComments
    },
    CommentImages:{
        find:findCommentImages,
        count:countCommentImages
    },
    CommentSummaries:{
        find:findCommentSummaries,
        count:countCommentSummaries
    },
    HotCommentTags:{
        find:findHotCommentTags,
        count:countHotCommentTags
    },
    Shops:{
        find:findShops,
        count:countShops
    },
};