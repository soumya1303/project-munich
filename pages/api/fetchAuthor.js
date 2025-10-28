const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const handler = async (req, res)=>{
    
    try {
        //await mongoose.connect("mongodb://127.0.0.1:27017/blogDB", ({useNewUrlParser:true}));    
        await mongoose.connect(`${process.env.mongo_conn_str}${process.env.mongo_schema}`, {useNewUrlParser:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({errCode:"CONN-ERR", errDesc:"Error in connecting to database. Exiting..."})
        return
    }
    const authorSchema = new mongoose.Schema({
        name:String,
        introInitContent:String,
        imgURL:String,
        fbFollower:String,
        twtrFollower:String,
        instaFollower:String,
        authMainImgLib:[{
            imgId:Number,
            imgSrc:String
        }],
        introParagraphs:[{
            paraId:Number,
            paraText:String
        }],
        authSignatureImgSrc:String
    });
    
    const Author = mongoose.models.Author || new mongoose.model("Author", authorSchema);

    try {

        const data = await Author.findOne({});

        if (!data){
            res.status(501).json({errCode:"NO-DATA-FOUND", errDesc:"No data found. Returning empty array", data:[]});
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