import React from "react";

const RenderSubMenu=(props)=>{

    console.log(props.menuItem);

    return (<li className="menu-item"><a href={`/category/${props.menuId}`}>{props.menuItem}</a></li>)
           
}

export default RenderSubMenu;