import { connectMongo } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try{
       await connectMongo();
       console.log("MongoDB connected successfully");

    }
    catch(error){
        console.error("Error in API handler:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}