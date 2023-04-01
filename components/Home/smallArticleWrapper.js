import React from "react";
import SmallArticle from "./smallArticle";

const SmallArticleWrapper = (props)=>{
    return(<div className="col-lg-6 col-md-6">
                <SmallArticle 
                imgSource={props.imgSource} 
                date={props.date} 
                month={props.month} 
                author={props.author} 
                title={props.title}/>
    </div>
    )
}

export default SmallArticleWrapper;