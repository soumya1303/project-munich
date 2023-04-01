import React from "react";


const CategoryWrapper = (props)=>{
    return (
        <div id="categories-1" className="widget widget_categories">
            <h4 className="widget_title">Categories</h4>
            <div className="sidebar_categories">
                <ul className="category_list">{props.children}</ul>
            </div>
        </div>
    )
}

export default CategoryWrapper;