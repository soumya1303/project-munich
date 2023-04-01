import React from "react";


const MiddleFooterWrapper = (props)=>{
    return (
    <div className="footer-middle">
        <div className="container">
            <div className="footer_widget_wrapper">
                <div className="row">{props.children}</div>
            </div>
        </div>
    </div>
    )
}

export default MiddleFooterWrapper;