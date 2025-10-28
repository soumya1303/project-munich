import { ObjectId, MongoClient } from "mongodb";

const handle=async (req, res)=>{

    let conn;

    try {

        const {_id, readCount}=req.body;

        const client=new MongoClient(process.env.mongo_conn_str);

        conn=await client.connect();

        const _db=conn.db(process.env.mongo_schema);

        const blogs=_db.collection("blogs");

        const resp = await blogs.updateOne({_id:new ObjectId(_id)}, {$set:{readCount:readCount}});

        res.status(200).json({errCode:"API-SUCCESS", errDesc:"Success"});
        
    } catch (error) {
        console.log(error.message);
        res.status(200).json({errCode:"API-SUCCESS", errDesc:error.message});
    
    } finally{
        if (conn){
            conn.close();
        }
    }
    
}

export default handle;
