
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const auth = (req,res,next)=>{
    const header = req.cookies['token'];

    console.log("Authorization header:", header);
    if(!header){
        return res.status(401).json({message:"brak autoryzacji"})
    }
    
   

    try{
        const decoded = jwt.verify(header,process.env.JWT_SECRET);
        req.user=decoded;
        console.log("decoded token:", decoded);
        console.log("req.user:", req.user);
        
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({
            message:"token niepoprawny"
        })
    }
}
export default auth;    