import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const handler=async (req, res)=>{

    try {
        
        const conn=await mongoose.connect(`${process.env.mongo_conn_str}${process.env.mongo_schema}`, {useNewUrlParser:true});

        if (!conn){
            throw new Error("Error in connecting database");
        }
        
        const {email}=req.body;

        
        const Subscriber = mongoose.models.Subscriber || new mongoose.model("Subscriber", new mongoose.Schema({
            email:String,
        }));

        const n=await Subscriber.countDocuments({email:email});

        if (n && n>0){
            throw new Error("Subscriber exists");
        }

        const resp=await Subscriber.create({email:email});

        res.status(200).json({errCode:"SUCCESS", errDesc:"Subscriber created"});
            
    } 
    catch (error) 
    {res.status(500).json({errCode:"API-ERROR", errDesc:error.message})        
    }
    finally 
    {mongoose.connection.close();
    }

}

export default handler;