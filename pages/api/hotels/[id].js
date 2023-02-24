import { verifyAdmin } from "@/server/utils/verifyToken.js";
import nc from "next-connect"
import connectDB from './../../../server/config/config.js';
import { deleteHotel, getHotel, updateHotel, } from '@/server/controllers/hotel.js';


connectDB();
const handler = nc();

handler.get(verifyAdmin,getHotel);
handler.put(verifyAdmin,updateHotel);
handler.delete(verifyAdmin,deleteHotel);
export default handler;