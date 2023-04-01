import React from "react";

const SwipeSlideImage = (props)=>{
    return (
        <div className="swiper-slide">
            <div className="slide_img" data-swiper="overlay-left">
            
                <img src={props.imgSource} alt="img"  />
            </div>
        </div>
    )
}

export default SwipeSlideImage;