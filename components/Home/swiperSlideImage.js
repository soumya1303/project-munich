import React from "react";
import Image from "next/image";

const SwipeSlideImage = (props)=>{
    return (
        <div className="swiper-slide">
            <div className="slide_img" data-swiper="overlay-left">
            
                <Image src={props.imgSource} alt="img"  width={876} height={1000}/>
            </div>
        </div>
    )
}

export default SwipeSlideImage;