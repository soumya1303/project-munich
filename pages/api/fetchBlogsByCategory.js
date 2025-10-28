import mongoose from "mongoose";

const handler=async (req, res)=>{

    const catId=req.query.catId;

    try {
            await mongoose.connect(`${process.env.mongo_conn_str}${process.env.mongo_schema}`, {useNewUrlParser:true});
        } 
    catch (error) {
            console.log(error);
            res.status(500).json({errCode:"CONN-ERR", errDesc:"Error in connecting to database. Exiting..."})
            return []
    }

    const blogSchema=new mongoose.Schema({
        blogId:String,
        title:String,
        author:String,
        date:String,
        created_dt:Date,
        readCount:Number,
        catKey:Number,
        catId:String,
        relatedBlogId:[],
        initContent:String,
        generalImageLib:{
            bannerImgURL:String,
            authorImgURL:String,
            titleImgURL:String,
            smallTitleImgURL:String,
            mostReadImgURL:String,
            similarPostImgURL:String
        },
        blogImageLib:[
            {
                blockId:Number,
                fwHhImgURL11:String,
                fwFhImgURL11:String,
                hwHhImgURL11:String,
                hwHhImgURL12:String,
                hwFhImgURL11:String,
                hwFhImgURL12:String
            },
            {
                blockId:Number,
                fwHhImgURL21:String,
                fwFhImgURL21:String,
                hwHhImgURL21:String,
                hwHhImgURL22:String,
                hwFhImgURL21:String,
                hwFhImgURL22:String
            },
            {
                blockId:Number,
                fwHhImgURL31:String,
                fwFhImgURL31:String,
                hwHhImgURL31:String,
                hwHhImgURL32:String,
                hwFhImgURL31:String,
                hwFhImgURL32:String
            },
            {
                blockId:Number,
                fwHhImgURL41:String,
                fwFhImgURL41:String,
                hwHhImgURL41:String,
                hwHhImgURL42:String,
                hwFhImgURL41:String,
                hwFhImgURL42:String
            },
            {
                blockId:Number,
                fwHhImgURL51:String,
                fwFhImgURL51:String,
                hwHhImgURL51:String,
                hwHhImgURL52:String,
                hwFhImgURL51:String,
                hwFhImgURL52:String
            },
            {
                blockId:Number,
                fwHhImgURL61:String,
                fwFhImgURL61:String,
                hwHhImgURL61:String,
                hwHhImgURL62:String,
                hwFhImgURL61:String,
                hwFhImgURL62:String
            }
        ],
        blogYTImageLib:[
            {
                blockId:Number,
                YTLinks:{
                    YTLink:String,
                    YTImgURL:String
                }
            }
        ],
        blogParagraphs:[
            {
                paraId:Number,
                paraText:String
            }
        ],
        blockQuotes:[
            {
                blockQuoteId:Number,
                blockQuoteText:String
            }
        ]
    });

    const Blog = mongoose.models.Blog || new mongoose.model("Blog", blogSchema);

    try {
    
            const data = await Blog.find({catId:catId}, {}).sort({created_dt:-1});

            //console.log(data);
    
            if (!data){
                res.status(501).json({errCode:"NO-DATA-FOUND", errDesc:"No data found. Returning empty array", data:[]});
            }
    
            res.status(200).json({data});
            
        } catch (error) {
            res.status(502).json({errCode:"UNHANDLED-ERR", errDesc:error.message})        
        }
        finally {
            mongoose.connection.close();
        }

    

}

export default handler;