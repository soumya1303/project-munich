import React from "react";


const InstagramWrapper = (props)=>{
    return (
        <div className="col-lg-6 col-md-6">
            <div className="footer_widget">
                <div className="widget-title">
                    <h4>Instagram</h4>
                </div>
                <div className="instagram">
                    <ul>{props.children}</ul>
                </div>
            </div>
        </div>
    )
}

export default InstagramWrapper;