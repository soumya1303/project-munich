import React from "react";

const GridLayoutWrapper = (props)=>{
    return(
        <React.Fragment>
            <div className="row">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default GridLayoutWrapper;