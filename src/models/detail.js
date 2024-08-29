const  mongoose=require("mongoose")

//creating schema to store the dynamic value in database
const detail=mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links:[{
        label:String,
        url:String
    },] ,                          //writing objects which is in the nav bar as we want them to be dyamnic means they can be change according to user
});

module.exports=mongoose.model("details",detail) //first vala detail to mondb campuss me jis nam se collectio h vo or second vala detail hamari schema ka nam