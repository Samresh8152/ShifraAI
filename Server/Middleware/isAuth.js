import jwt from "jsonwebtoken";

export const isAuth = (req,res,next)=>{
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(400).json({message : "Unauthorized"});
        }

        const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifytoken){
            return res.status(400).json({message : "user does not have a valid token"});
        }
        req.userId = verifytoken.userId;
        next();

    }
    catch(error){
        return res.status(500).json({message : "isauth error"});
    }
}