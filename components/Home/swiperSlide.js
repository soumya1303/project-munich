import React from "react";

import Article from "./article";

const SwipeSlide = (props)=>{
    return (
            <div className="swiper-slide">
                <Article 
                        blogId = {props.blogId}
                        catId={props.catId}
                        date={props.date} 
                        month={props.month} 
                        title={props.title} 
                        initContent={props.initContent} 
                        footer={props.footer}>
                </Article>
            </div>
    )
}

export default SwipeSlide;