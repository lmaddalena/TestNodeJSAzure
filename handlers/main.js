// GET /
exports.home = function(req, res, next){      
    res.render('main/home', { title : "Home" });    
};

// GET /about
exports.about = function(req, res, next){      
    res.render('main/about', { title : "About" });    
};


// GET /contact
exports.contact = function(req, res, next){      
    res.render('main/contact', { title : "Contact" });    
};
