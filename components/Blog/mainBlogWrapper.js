import React from "react";

const MainBlogWrapper = (props)=>{
    return(
        <React.Fragment>
            <article className="blog_post post_expand">
                <div className="post_content">{props.children}</div>
            </article>
        </React.Fragment>
    )
}

export default MainBlogWrapper;