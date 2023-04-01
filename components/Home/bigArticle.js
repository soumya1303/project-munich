import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BigArticle = (props)=>{

    useEffect(()=>{
        AOS.init();
    },[])

    return (
            <article className="blog_post">
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
                    <div className="post_intro">
                        <p>{props.initContent}</p>
                    </div>
                    <div className="post_footer">
                        <div className="read_more" data-aos="fade-up" data-aos-duration="700">
                        
                            <a href="blog-details.html">{props.footer}</a>
                        </div>
                        <div className="post_share">
                            <ul className="share_list">
                                <li data-aos="fade-up" data-aos-duration="500"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                <li data-aos="fade-up" data-aos-duration="700"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                <li data-aos="fade-up" data-aos-duration="900"><a href="#"><i className="ion-social-rss"></i></a></li>
                                <li data-aos="fade-up" data-aos-duration="1100"><a href="#"><i className="ion-social-instagram"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </article>
    )
}

export default BigArticle;