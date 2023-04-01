import React from "react";

const DuelImage = (props)=>{
    return (<div className="col-lg-6 col-md-6 col-sm-6 img_box" data-aos="overlay-right">
                <img src={props.imgURL} alt="img" />
            </div>)
}

export default DuelImage;