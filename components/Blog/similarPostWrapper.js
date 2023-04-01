import React from "react";

const SimilarPostWrapper = (props)=>{
    return(
        <React.Fragment>
            <div className="more_posts">
                <div className="row">{props.children}</div>
            </div>
        </React.Fragment>
    )
}

export default SimilarPostWrapper;