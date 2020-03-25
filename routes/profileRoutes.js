var router = require('express').Router();

var authCheck = (req, res, next) => {
    if(!req.app.get("user")){
        res.redirect('/')
    } else{
        next();
    }
};

// router.get("/", authCheck, (req,res)=>{
//     console.log("=====================")
//     console.log('HERE IS THE PROFILE ', req.app.get('user'))
//     console.log("=====================")
//     res.render('dashboard', {
//         name: req.app.get("user").dataValues.name,
//         hitpoints: req.app.get("user").dataValues.hitpoints,
//         intelligence:req.app.get("user").dataValues.intelligence 
//         //req.app.get("user").dataValues}
//     });
        
    //res.send('you are logged in, this is your profile - ' + req.app.get("user").dataValues.name);
// });

router.get("/", authCheck, (req,res)=>{
    console.log("=====================")
    console.log('HERE IS THE PROFILE ', req.app.get('user'))
    console.log("=====================")
    //res.cookie("cookieName",req.app.get("user"),{maxAge:3600});
    res.render('battle', {
        name: req.app.get("user").dataValues.name,
        hitpoints: req.app.get("user").dataValues.hitpoints,
        intelligence:req.app.get("user").dataValues.intelligence, 
        defense:req.app.get("user").dataValues.defense 
        //req.app.get("user").dataValues}
    });
        
    //res.send('you are logged in, this is your profile - ' + req.app.get("user").dataValues.name);
});


module.exports=router;