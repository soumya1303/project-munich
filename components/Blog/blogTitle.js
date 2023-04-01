import React from "react";

const BlogTitle = (props)=>{
    return (
        <React.Fragment>
            <div className="page-header">
				<div className="page-header-content">
					<div className="container">
						<h2 className="heading">{props.blogTitle}</h2>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

export default BlogTitle;