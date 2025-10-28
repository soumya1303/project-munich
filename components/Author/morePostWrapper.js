import React from "react";


const MorePostWrapper = (props)=>{
    return (
        <div className="more_posts">
            <div className="row">{props.children}</div>
        </div>
    )
}

export default MorePostWrapper;