
import { verifyAdmin } from "@/server/utils/verifyToken.js";
import nc from "next-connect"
import connectDB from './../../../server/config/config.js';
import { getHotels,createHotel } from '@/server/controllers/hotel.js';


connectDB();
const handler = nc();

handler.get(getHotels);
handler.post(verifyAdmin,createHotel);
export default handler;