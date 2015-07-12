exports.login = function(req,res,next){
  res.render('login');
};

exports.authenticate = function(req,res,next){
  if(!req.body || !req.body.password) {
    res.render('login', {error: " Please enter your Email and Password"});
  }
  req.models.User.findOne({emai:req.body.email, password:req.body.password},function(err,user){
    if(err) throw err;
    if(!user) res.render('login',{error : "Incorrect username & password combination!"});
    req.session.user = user;
    req.session.admin = user.admin;
    res.redirect('/');
  });

};