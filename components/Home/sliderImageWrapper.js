import React from "react";

const SliderImageWrapper = (props)=>{
    return (						
        <div className="slider_images">
            <div className={`swiper-container slider_posts`}>
                <div className="swiper-wrapper">
                {props.children}
                </div>
            </div>
        </div>    
    )
}

export default SliderImageWrapper;