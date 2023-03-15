import { verifyAdmin } from "@/server/utils/verifyToken.js";
import nc from "next-connect"
import connectDB from './../../../server/config/config.js';
import { getRoom, updateRoom,deleteRoom,createRoom } from './../../../server/controllers/room.js';

connectDB();
const handler = nc();
handler.get(getRoom);
handler.put(verifyAdmin,updateRoom);
handler.delete(verifyAdmin,deleteRoom);
export default handler;