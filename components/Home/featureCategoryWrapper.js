import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const FeaturCategoryWrapper=(props)=>{
    
    useEffect(() => {
        AOS.init();
      }, [])

    return(
            <div className="featured_category bg_image_1" data-aos="fade-up" data-aos-duration="700">
                <div className="container">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
    )

}

export default FeaturCategoryWrapper;