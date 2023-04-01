import React from "react";

const ThemeSliderWrapper = (props)=>{
return(
    <React.Fragment>
        <div className="theme_slider_2">
            <div className="slider_inner_content">
                <div className="slider_text">
                    {props.children}
                </div>
            </div>
        </div>
    </React.Fragment>
)
}

export default ThemeSliderWrapper;