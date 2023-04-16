import React from "react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureCategoryItem = (props)=>{

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div className="col-lg-3 col-sm-6">
            <div className="featured_category_item" data-aos="fade-up" data-aos-duration="600">
                <img src={props.imgSource} alt="img" />
                <div className="featured_category_info">
                    <h6 className="featured_category_heading"><a href={`/category/${props.featureCategoryId}`}>{props.featureCategory}</a></h6>
                    <p className="featured_category_number"><span>{props.postCount}</span> Posts</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCategoryItem;