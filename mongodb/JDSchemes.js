var mongoose = require('./mongoconfig.js'), // 引入mongodb配置文件
    Schema = mongoose.Schema;

// 类别
var CategorySchema = new Schema({
    _id:String, //类别码
    name:String, // 种类名称
    url:String // 路径
},{ collection: 'Categories' });

// 商品
var ProductScheme = new Schema({
    _id:String, //
    shopId:String, // 
    category:String, // 
    name:String,
    url:String,
    description:String,
    reallyPrice:String,
    originalPrice:String,
    favourableDesc1:String
},{ collection: 'Products' });

// 评论
var CommentSchema = new Schema({
    _id:Number,
    productId:String,
    guid:String,
    content:String,
    creationTime:String,
    isTop:Boolean,
    referenceId:String,
    referenceName:String,
    referenceType:String,
    referenceTypeId:Number,
    firstCategory:Number,
    secondCategory:Number,
    thirdCategory:Number,
    replyCount:Number,
    score:Number,
    status:Number,
    title:String,
    usefulVoteCount:Number,
    uselessVoteCount:Number,
    userImage:String,
    userImageUrl:String,
    userLevelId:String,
    userProvince:String,
    viewCount:Number,
    orderId:Number,
    isReplyGrade:Boolean,
    nickname:String,
    userClient:Number,
    mergeOrderStatus:String,  // Mixed
    discussionId:String,    // Mixed
    productColor:String,
    productSize:String,
    imageCount:String,     // Mixed
    integral:Number,
    userImgFlag:Number,
    anonymousFlay:Number,
    userLevelName:String,
    plusAvailable:Number,
    recommand:Boolean,
    userLevelColor:String,
    userClientShow:String,
    isMobile:Boolean,
    days:Number,
    afterDays:Number
}, { collection: 'Comment' });

// 图片评论
var CommentImageScheme = new Schema({
    _id:Number,
    associateId:Number,
    productId:Number,
    imgurl:String,
    available:Number,
    pin:String,
    dealt:Number,
    imgTitle:Number,
    isMain:Number
},{ collection: 'CommentImage' });

// 评论概要
var CommentSummaryScheme = new Schema({
    _id:String,
    goodRateShow:Number,
    poorRateShow:Number,
    poorCountStr:String,
    averageScore:Number,
    generalCountStr:String,
    showCount:Number,
    showCountStr:String,
    goodCount:Number,
    generalRate:Number,
    generalCount:Number,
    skuId:String,
    goodCountStr:String,
    poorRate:Number,
    afterCount:Number,
    goodRateStyle:Number,
    poorCount:Number,
    skuIds:String,
    poorRateStyle:Number,
    generalRateStyle:Number,
    commentCountStr:String,
    commentCount:Number,
    productId:String,
    afterCountStr:String,
    goodRate:Number,
    generalRateShow:Number,
    jwotestProduct:String,
    maxPage:Number,
    score:Number,
    soType:Number,
    imageListCount:Number
}, { collection: 'CommentSummary' });

// 热评
var HotCommentTagScheme = new Schema({
    _id:String,
    name:String,
    status:String,
    rid:String,
    productId:String,
    count:Number,
    created:String,
    modified:String,
    type:Number,
    canBeFiltered:Boolean
}, { collection: 'HotCommentTag' })

// 网店
var ShopScheme = new Schema({
    _id:String,
    shopId:String,
    venderId:String,
    url1:String,
    url2:String,
    name:String
}, { collection: 'Shop' });

module.exports = {
    categories:mongoose.model('categories',CategorySchema),
    products:mongoose.model('products',ProductScheme),
    comments:mongoose.model('comments',CommentSchema),
    commentImages:mongoose.model('commentImages',CommentImageScheme),
    commentSummaries:mongoose.model('commentSummaries',CommentSummaryScheme),
    hotCommentTags:mongoose.model('hotCommentTags',HotCommentTagScheme),
    shops:mongoose.model('shops',ShopScheme),
};