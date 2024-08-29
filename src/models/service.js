//jb bhi kisi view vale page ko database se connect karna h to models banao

const mongoose=require("mongoose")

const Service= mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    linkText: String,
    link: String

})

module.exports=mongoose.model("services",Service)   //phela vala database me collection ak nam or dusra vala schema ka nam