import React from "react";

const SliderTextWrapper = (props)=>{
    return(
            <div className="slider_text">
                <div className="swiper-container slider_posts">
                    <div className="swiper-wrapper">
                        {props.children}
                    </div>
                    {/* <!-- Add Pagination --> */}
					<div className="swiper-pagination"></div>
                </div>
            </div>
    )
}

export default SliderTextWrapper;