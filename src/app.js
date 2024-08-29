const express=require("express");
const app=express();
const routes=require('./routes/main');
const hbs=require('hbs')
const mongoose=require("mongoose")
//importing  detail model
const detail=require("./models/detail")
const slider=require("./models/slider")
const service=require("./models/service")
const contact=require("./models/contact")
const gallery=require("./models/gallery")
const bodyParser=require('body-parser');





app.use(bodyParser.urlencoded({                     //body parser se data submit ho jayega mtlb data backend pr aajayga ab is data ko database me pahuchana h 

    extended:true
}))
app.use('',routes)
app.use('/static' ,express.static("public"))           //serving static files  app.use is a middleware

app.set('view engine','hbs');
app.set("views","views")      //setting template engine
hbs.registerPartials("views/partials")                //setting that we will use partials




//db connection
mongoose.connect("mongodb://localhost/freelance").then(()=>console.log("connected succesfully"))
.catch((err)=>{console.error(err);


   
})                             //mongooseconnection


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
//     detail.create({
//         brandName:"Infosys",               //inserting the values into database
//         brandIconUrl:"https://th.bing.com/th/id/OIP._HwL-eTTs-Q42PxhMkPXvwHaGJ?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//         links:[
//             {
//             label:"Home",
//             url:"/"
//         },
//     { label:"About",
//         url:"/about"
        
//     },

//     {
//         label:"Gallery",
//         url:"/gallery"

//     },

//     {
//         label:"Services",
//         url:"/services"

//     },

//     {
//         label:"Contact Us",
//         url:"/contact-us"


//     },






// ]  //sari chize database me save ho chuki h 

//     })   //comment isliye kiya kyuki humko ek hi  bar data database me dalna h 
// slider.create({
//     imageUrl:"/static/images/s1.jpeg"

// },
// {
//     imageUrl:"/static/images/s2.jpeg"                //images dynamic banane k liye jo bhi us section me dik rha h sbka object bana do 

// },
// {
//     imageUrl:"/static/images/s2.jpeg"          //comment isliye kiya kyuki bar bar chalane se ny ny objects bante jayenge database me

// })


//databse me khud se hi  values dal rahe h abhi usse pehele up hi upr us schema ko import karo

// service.create([
    
//     {
//         icon:'fa-solid fa-shield-halved',
//         title:'Provide Best Services',
//         description:'We provide courses that helps our student in learning and in placements',
//         linkText:'https://www.infosys.com',
//         link:'Check'

// },
//     {
//         icon:'fa-brands fa-accusoft',
//         title:'Learn Projects',
//         description:'We provide courses that helps our student in learning and in placements',
//         linkText:'https://www.infosys.com',
//         link:'Learn'

// },
//     {
//         icon:'fa-brands fa-github',
//         title:'Learn Git and Github',
//         description:'We provide courses that helps our student in learning and in placements',
//         linkText:'https://www.infosys.com',
//         link:'Github'

// }


// ])


gallery.create({
        img:"/static/images/g1.jpeg"
    
    })
gallery.create({
        img:"/static/images/g2.jpeg"
    
    })
gallery.create({
        img:"/static/images/g3.jpeg"
    
    })






})


