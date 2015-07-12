exports.index = function(req,res,next){

    req.models.Article.find({},function(err,articles){
        if(err) return next(error);
        res.render('index',{articles:articles});
    });
};



exports.users = require('./users');
