import nc from "next-connect";
import { login } from '@/server/controllers/auth.js';
import connectDB from './../../../server/config/config';

connectDB();

const handler = nc();

handler.post(login);


export default handler