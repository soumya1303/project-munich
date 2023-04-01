import React from "react";

const MostReadPost = (props)=>{
    return (
        <div className="popular_post_item">
            <div className="popular_post_item_wrapper">
            <img src={props.imgSource} alt="img" />
                <div className="popular_post_item_content">
                <h4 className="popular_post_item_title"><a href="#">{props.title}</a></h4>
                </div>
            </div>
        </div>
    )
}

export default MostReadPost;