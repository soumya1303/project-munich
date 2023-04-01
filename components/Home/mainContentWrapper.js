import React from "react";


const MainContentWrapper = (props)=>{

    return(
        <div className="main-wrapper">
            <div className="container">
                <div className="row">
                {props.children}
                </div>
            </div>
        </div>
    )

}

export default MainContentWrapper;