import React from "react";

const ImageSwiperSlide=(props)=>{
    return (<React.Fragment>
                <div className="swiper-slide">
                    <div className="slide_img" data-swiper="overlay-bottom">
                        <img src={props.imgURL} alt="img" />
                    </div>
                </div>
            </React.Fragment>)
}

export default ImageSwiperSlide;