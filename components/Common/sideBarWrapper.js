import React from "react";
import "aos/dist/aos.css";

const SideBarWrapper = (props)=>{

    return (
        <div className="col-lg-4 col-md-5">
            <div className="sidebar" data-aos="fade-up" data-aos-duration="900">{props.children}</div>
        </div>
    )
}

export default SideBarWrapper;