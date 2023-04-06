import React from "react";

const Advert = (props)=>{
    return (
        <div id="custom_2" className="widget widget_custom">
            <div className="sidebar_add">
                <img src={props.imgSource} alt="add" />
            </div>
        </div>
    )
}

export default Advert;