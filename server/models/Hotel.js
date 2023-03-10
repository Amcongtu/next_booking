import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.set('strictQuery', true);
const HotelSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    type: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    distance: {
        type:String,
        required:true
    },
    photos: {
        type:[String],
    },
    title: {
        type:String,
        required:true
    },
    desc: {
        type:String,
        required:true
    },
    ratting: {
        type:Number,
        min:0,
        max:5
    },
    rooms: {
        type:[String],
    },
    cheapestPrice: {
        type:Number,
        required:true
    },
    featured: {
        type:Boolean,
        required:false
    },
    rate: {
        type: Number ,
        default: 10.0,
        min: 0,
        max: 10,
    }
})

export default mongoose.models.Hotel ||  mongoose.model("Hotel",HotelSchema) 