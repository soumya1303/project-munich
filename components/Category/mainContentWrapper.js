import React from "react";

const MainContentWrapper=(props)=>{
    return(
        <React.Fragment>
            <div className="main-wrapper">
                <div className="container">
                    <div className="row">{props.children}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainContentWrapper;