import connectDB from './../../../server/config/config.js';
import nc from "next-connect";
import { login } from "@/server/controllers/auth.js";

connectDB();

const handler = nc();

handler.post(login);


export default handler