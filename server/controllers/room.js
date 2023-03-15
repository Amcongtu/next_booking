import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"

export const createRoom = async (req,res,next)=>{
    console.log(req.query.id)
    const hotelID = req.query.id;

    const newRoom = new Room(req.body)
    try{
        const saveRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelID,{$push:{rooms: saveRoom._id},});
        }catch(err){
            next(err);
        }
        res.status(200).json(saveRoom);
    }catch(err){
        next(err);
    }
}
export const updateRoom = async (req,res,next)=>{
    try{
        const updateRoom = await Room.findByIdAndUpdate(req.query.id,{$set:req.body},
            {new: true})
        res.status(200).json(updateRoom);
    }catch(err){
        next(err);
    }
}
export const deleteRoom = async (req,res,next)=>{
    const hotelID = req.query.hotelid;
    try{
        await Room.findByIdAndDelete(req.query.id);
        try{
            await Hotel.findByIdAndUpdate(hotelID,{$pull:{rooms: req.query.hotelid},});
        }catch(err){
            next(err);
        }
           res.status(200).json("Room has been deleted.");
    }catch(err){
        next(err);
    }
}
export const getRoom = async (req,res,next)=>{
    try{
        const room = await Room.findById(req.query.id);
           res.status(200).json(room);
       }catch(err){
        next(err);
    }
}
export const getRooms = async (req,res,next)=>{
    try{
      
        const rooms = await Room.find();
           res.status(200).json(rooms);
       }catch(err){
        next(err);
    }
}