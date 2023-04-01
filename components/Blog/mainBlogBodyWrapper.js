import React from "react";

const MainBlogBodyWrapper = (props)=>{
    return (<div className="post_fulltext">
                {props.children}
            </div>)
}

export default MainBlogBodyWrapper;