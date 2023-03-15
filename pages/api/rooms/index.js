
import { verifyAdmin } from "@/server/utils/verifyToken.js";
import nc from "next-connect"
import connectDB from './../../../server/config/config.js';
import { getRooms,createRoom } from './../../../server/controllers/room';
connectDB();
const handler = nc();
handler.post(verifyAdmin,createRoom);

handler.get(getRooms);
export default handler;