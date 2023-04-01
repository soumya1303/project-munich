import React from "react";

const SimilarPostMainWrapper = (props)=>{
    return(
        <div className="related_posts" data-aos="fade-up" data-aos-duration="900">{props.children}</div>
    )
}

export default SimilarPostMainWrapper;