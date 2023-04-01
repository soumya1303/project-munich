import React from "react";

const GridLayoutLeftWrapper=(props)=>{
    return(
        <div className="col-lg-8 col-md-7 details_with_sidebar">{props.children}</div>
    )
}

export default GridLayoutLeftWrapper;