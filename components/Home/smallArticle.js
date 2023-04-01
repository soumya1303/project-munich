import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SmallArticle = (props)=>{

    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <article className="blog_post" data-aos="fade-up" data-aos-duration="700">
            <div className="post_img" data-aos="overlay-left">
                <a href="#"><img src={props.imgSource} alt="blog" /></a>
                <div className="calendar">
                    <a href="#"><span className="date">{props.date}</span><br />{props.month}</a>
                </div>
            </div>
            <div className="post_content">
                <div className="post_header">
                    <div className="author"><a href="#"><i className="ion-android-create"></i>{props.author}</a></div>
                    <h2 className="post_title">
                        <a href="#">{props.title}</a>
                    </h2>
                </div>
            </div>
        </article>
        )
}

export default SmallArticle;