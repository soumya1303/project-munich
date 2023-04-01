import React from "react";

const BigArticleWrapper=(props)=>{
    return (<div className="blog_list" data-aos="fade-up" data-aos-duration="700">{props.children}</div>)
}

export default BigArticleWrapper;