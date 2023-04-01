import React from "react";

const ImageGallaryWrapper = (props)=>{
    return(
        <React.Fragment>
            <div className="post_gallery">
                <div className="row">{props.children}</div>
            </div>
        </React.Fragment>
    )
}

export default ImageGallaryWrapper; 