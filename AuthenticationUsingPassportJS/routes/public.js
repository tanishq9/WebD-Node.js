const router = require('express').Router();

router.get('/',function(req,res){
    res.send('Visible to All.');
})

module.exports = router;