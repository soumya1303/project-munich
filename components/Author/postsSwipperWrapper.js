import React from "react";

const PostsSwipperWrapper=(props)=>{
    return (<React.Fragment>
                
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {props.children}
                        </div>
                    </div>
                
    </React.Fragment>)
}

export default PostsSwipperWrapper;