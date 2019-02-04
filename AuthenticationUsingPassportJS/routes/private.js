const router = require('express').Router();

router.get('/',function(req,res){
    if(req.user){ // if this request has a cookie
        return res.send('Visible only to logged in user.');
    }else{
        res.redirect('/login');
    }
})

module.exports = router;