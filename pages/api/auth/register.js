import nc from "next-connect";
import connectDB from './../../../server/config/config.js';
import { register } from "@/server/controllers/auth.js";

connectDB();

const handler = nc();

handler.post(register);


export default handler