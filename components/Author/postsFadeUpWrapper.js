import React from "react";

const PostsFadeUpWrapper = (props)=>{
    return (<div className="more_posts" data-aos="fade-up" data-aos-duration="900">{props.children}</div>)
}

export default PostsFadeUpWrapper;