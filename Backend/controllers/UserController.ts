import  {Request,Response}  from "express";
import Thumbnail from "../model/thumbnail.js";

//Controller to get All User Thumbnails
export const getUserThumbnails=async(req:Request,res:Response)=>{
    try {
        const {userId}=req.session;
        const thumbnail = await Thumbnail.find({userId}).sort({createdAt:-1});
        res.json({thumbnail})
    } catch (error : any) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

//Controller to get Single Thumbnail by ID
export const getThumbnailById=async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const {userId}=req.session;

        const thumbnail=await Thumbnail.findOne({userId,_id:id});
        res.json({thumbnail})
    }catch (error : any) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}