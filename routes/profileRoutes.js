var router = require('express').Router();

var authCheck = (req, res, next) => {
    if(!req.app.get("user")){
        res.redirect('/')
    } else{
        next();
    }
};

router.get("/", authCheck, (req,res)=>{
    console.log("=====================")
    console.log('HERE IS THE PROFILE ', req.app.get('user'))
    console.log("=====================")
    res.send('you are logged in, this is your profile - ' + req.app.get("user").dataValues.name);
});

module.exports=router;