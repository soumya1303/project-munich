import React from "react";

const MainBlogHeader = (props)=>{
    return (
        <React.Fragment>
            <div className="post_header">
                <h2 className="post_title" >
                    <a href="#">{props.blogHeader}</a>
                </h2>
            </div>
        </React.Fragment>
    )
}

export default MainBlogHeader;