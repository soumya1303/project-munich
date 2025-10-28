const mongoose = require("mongoose");

const handler = async (req, res)=>{

    const catId=req.query.catId;

    try {
        //await mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {useNewUrlParser:true});
        await mongoose.connect(`${process.env.mongo_conn_str}${process.env.mongo_schema}`, {useNewUrlParser:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({errCode:"CONN-ERR", errDesc:"Error in connecting to database. Exiting..."})
        return
    }

    const regSchema = new mongoose.Schema({
        catKey:Number,
        catId:String,
        CatDesc:String,
        imgURL:String,
        searchEngineText:String,
        postCount:Number  
    });

    const Region = mongoose.models.Region || new mongoose.model("Region", regSchema);

    try {

        const data = await Region.findOne({catId:catId}, {});

        if (!data){
            res.status(501).json({errCode:"NO-DATA-FOUND", errDesc:"No data found. Returning empty object"});
        }

        res.status(200).json({data:data});
        
    } catch (error) {
        res.status(502).json({errCode:"UNHANDLED-ERR", errDesc:"Unhandled error happened. Exiting..."})        
    }
    finally {
        mongoose.connection.close();
    }

}

export default handler;