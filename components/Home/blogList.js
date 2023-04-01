import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogList = (props)=>{

    useEffect(()=>{
        AOS.init();
    },[])

    return(
        <div className="blog_list" data-aos="fade-up" data-aos-duration="700">{props.children}</div>
        
    )
}

export default BlogList;