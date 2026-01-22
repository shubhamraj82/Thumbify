import express, {Request,Response}  from "express";
import cors from "cors";
 const app=express();

 app.use(express.json());
 app.use(cors());

  const port=process.env.PORT ||3000;
 app.get('/',(req:Request,res:Response)=>{
    res.send('Server is running');
 });
 app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
 });