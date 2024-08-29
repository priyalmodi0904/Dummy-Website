const mongoose=require("mongoose")
const Contact= mongoose.Schema({
    email: String,
    contact:String,
    query:String
})
module.exports=mongoose.model("contacts",Contact)