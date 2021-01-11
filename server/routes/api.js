const express=require('express')


const router=express.Router();

//GETTERS**************************************************************************************************************************
// Users***************************************************************************************************************************
router.get('/users',(req,res)=>{
    // res.send("hello")
    let user={
        "email":"user@email.com",
        "password":"mypassword"
    }
    res.send(user)
})
//get lessons
router.get('/lessons',(req,res)=>{
    let lessons=[
        {"topic":"math","location":"London","price":100},
        {"topic":"math","location":"Liverpool","price":80},
        {"topic":"math","location":"Oxford","price":90},
        {"topic":"math","location":"Bristol","price":120},
        {"topic":"Java","location":"London","price":900},
        {"topic":"Web App","location":"London","price":900},
        {"topic":"Web Dev","location":"London","price":1000},
        {"topic":"IT","location":"London","price":1200}
    ]
    res.send(lessons)
})



//export the router
module.exports = router;