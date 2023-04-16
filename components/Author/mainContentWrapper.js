import React from "react";

const MainContentWrapper = (props)=>{
    return (<React.Fragment>
    			<div className="main-wrapper m_tp_0">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            </React.Fragment>)
}

export default MainContentWrapper;