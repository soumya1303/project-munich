import React from "react";

const SingleImage = (props)=>{
    return (<div className="col-lg-12 col-md-12 col-sm-12 img_box" data-aos="overlay-right">
                <img src={props.imgURL} alt="img" />
            </div>)
}

export default SingleImage;