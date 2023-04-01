import React from "react";

const RecentPostWrapper = (props)=>{
    return (								
        <div id="recent-posts-1" className="widget widget_recent_posts">
            <h4 className="widget_title">Recent Posts</h4>
            <div className="sidebar_recent_posts">
                <ul>{props.children}</ul>
            </div>
        </div>
    )
}

export default RecentPostWrapper;