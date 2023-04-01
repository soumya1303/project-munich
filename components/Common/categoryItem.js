import React from "react";


const CategoryItem = (props)=>{
    return (<li><a href="#">{props.categoryName}</a> {props.postCount}</li>)
}

export default CategoryItem;