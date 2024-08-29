const express=require('express');
const routes=express.Router();
const detail=require("../models/detail");
const slider = require('../models/slider');
const service=require('../models/service');
const contact=require('../models/contact')




routes.get("/", async function(req,res){
     const details=await detail.findOne({"_id":"66cf4aa81f1e633714d1ff55"});    //objectid from mongodb campuss
    // console.log(details)                    //ye isliye kiya kyuki jb admin ko values change krni h to vo direct mongodb campuss me jakr kr  sakta h
    const slides=await slider.find()               //slider.js partials me uska nam
   // console.log(slides)
     const services=await service.find()
     //console.log(services)


  

    res.render("index",{
        details: details ,   //index.hbs me is object ki values jayegi
        slides:slides,          //slider k partials me bhj diya
        services:services
    
    })


})

routes.get('/gallery',async function(req,res){
    const details=await detail.findOne({"_id":"66cf4aa81f1e633714d1ff55"});    //objectid from mongodb campuss
    // console.log(details)                    //ye isliye kiya kyuki jb admin ko values change krni h to vo direct mongodb campuss me jakr kr  sakta h
   
   
          //gallery.hbs me is object ki values jayegi
        

    res.render("gallery",{
        details: details , 
        // gallerys:gallerys
    })
}) 


routes.post("/process-contact-form", async function(req,res){            //is url pr data aayega 
   // console.log("this form is sumitted")
   // console.log(req.body)      //bodyparser sdorm ka data submt hota h
//now save the data to db using model

try{
    const data= await contact.create(req.body)
    console.log(data)
    res.redirect("/")

}catch(e){
    console.log(e)
    res.redirect("/")

}

})







module.exports=routes;