import { verifyAdmin } from "@/server/utils/verifyToken.js";
import nc from "next-connect"
import connectDB from './../../../server/config/config.js';
import { getRooms, updateRoom,deleteRoom,createRoom } from './../../../server/controllers/room.js';


connectDB();
const handler = nc();
handler.post(verifyAdmin,createRoom);
handler.get(verifyAdmin,getRooms);
handler.put(verifyAdmin,updateRoom);
handler.delete(verifyAdmin,deleteRoom);
export default handler;