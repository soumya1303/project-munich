import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainFooterWrapper = (props)=>{

    useEffect(()=>{
        AOS.init();
    },[]);

    return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="700">{props.children}</footer>
    )
}
export default MainFooterWrapper;