import React from "react";


const MostReadWrapper = (props)=>{
    return (
        <div id="popular-1" className="widget widget_popular_posts">
            <h4 className="widget_title">Most Read Blogs</h4>
            <div className="sidebar_popular_posts">{props.children}</div>
        </div>
    )
}

export default MostReadWrapper;