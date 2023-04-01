import React from "react";

const SwiperContainerWrapper = (props)=>{
    return (
        <React.Fragment>
            <div className="swiper-container slider_posts">{props.children}</div>
        </React.Fragment>
    )
}

export default SwiperContainerWrapper;