import { type } from "os";

const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

const handler= async (req, res)=>{

    try {
        //await mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {useNewUrlParser:true});
        await mongoose.connect(`${process.env.mongo_conn_str}${process.env.mongo_schema}`, {useNewUrlParser:true});
    
    } catch (error) {
        console.log(error);
        res.status(500).json({errCode:"CONN-ERR", errDesc:"Error in connecting to database. Exiting..."});
        return
    }

    const regionSchema = new mongoose.Schema({
        catKey:{
            type:Number
        },
        catId:{
            type:String
        },
        catDesc:{
            type:String
        },
        imgURL:{
            type:String
        },
        searchEngineText:{
            type:String
        },
        postCount:{
            type:Number
        }
    });

    const Region = mongoose.models.Region || new mongoose.model("Region", regionSchema);

    try {
        
        const data=await Region.find({}, {});

        if (!data){
            res.status(501).json({errCode:"NO-DATA-FOUND", errDesc:"No data found. Returning empty array", data:[]})
            return 
        }
        res.status(200).json({data:data})


    } catch (error) {
        console.log(error);
        res.status(502).json({errCode:"UNHANDLED-ERR", errDesc:"Unhandled error happened. Exiting..."})
        
    } finally {
        mongoose.connection.close();
    }
}

export default handler;