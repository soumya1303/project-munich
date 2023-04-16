import React from "react";

const ImageContainer = (props)=>{
    return (<React.Fragment>
                <div className="col-lg-6">
                    <div className="author_slider">
                        <div className="swiper-container">
                            {props.children}
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
}

export default ImageContainer;