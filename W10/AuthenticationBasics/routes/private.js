const router = require('express').Router();

router.get('/',function(req,res){
    res.send('Visible only to logged in user.');
})

module.exports = router;