import React from "react";

const ThemeSlider = (props)=>{

    return(
        <div className="theme_slider_1">
            <div className="slider_inner_content">
                {props.children}
            </div>
        </div>)

}

export default ThemeSlider