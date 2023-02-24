import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.set('strictQuery', true);

const RoomSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true,"Room title is required"]
    },
    price: {
        type:Number,
        required:[true,"Room price is required"],
        default:0.0
    },
    desc: {
        type:String,
        required:[true,"Room desc is required"],
    },
    maxPeople: {
        type:Number,
        required:true
    },
    numOfBeds:{
        type:Number,
        required:[true,"Room bed number is required"],
    },
    breakfast:{
        type:Boolean,
        default:false,
    },
    petAllowed:{
        type:Boolean,
        default:false,
    },
    roomCleaning:{
        type:Boolean,
        default:false,
    },
    rating:{
        type: Number,
        default:0,
    },
    numOfReviews:{
        type: Number,
        default:0,
    },
    images:[
        {public_id:{type:String},
        url:{type:String}
        }
    ],
    category:{
        type: String,
        required:[true,"Room category is required"],
    },
    roomNumbers:[{
        number:Number, 
        unavailableDates:{type:[Date]},
    }],
    
},{timestamps:true})


export default mongoose.models.Room ||  mongoose.model("Room",RoomSchema) 