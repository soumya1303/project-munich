import React from "react";

const SwiperWrapper = (props)=>{
    return (
        <React.Fragment>
            <div className="swiper-wrapper">{props.children}</div>
        </React.Fragment>
    )
}

export default SwiperWrapper;