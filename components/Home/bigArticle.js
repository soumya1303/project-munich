import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BigArticle = (props)=>{

    return (
            <article className="blog_post" id="big_article">
                <div className="post_img" data-aos="overlay-left">
                    <Link href={`/category/${props.catId}/${props.blogId}`}>
                        <Image src={props.imgSource} alt="blog" width={1170} height={710}/>
                    </Link>
                    <div className="calendar">
                        <Link href={`/category/${props.catId}/${props.blogId}`}>
                            <span className="date">{props.date}</span><br />{props.month}
                        </Link>
                    </div>
                    
                </div>
                <div className="post_content" id="big_article_post_content">
                    <div className="post_header">
                        <div className="author"><i className="ion-android-create"></i>{props.author}</div>
                        <h2 className="post_title" id="big_article_post_title">
                            <Link href={`/category/${props.catId}/${props.blogId}`}>{props.title}</Link>
                        </h2>
                    </div>
                    <div className="post_intro">
                        <p>{props.initContent}</p>
                    </div>
                    <div className="post_footer">
                        <div className="read_more" data-aos="fade-up" data-aos-duration="700">
                            <Link href={`/category/${props.catId}/${props.blogId}`}>{props.footer}</Link>
                        </div>
                        <div className="post_share">
                            <ul className="share_list">
                                <li data-aos="fade-up" data-aos-duration="500">
                                    <Link href="#big_article_post_title" onClick={()=>{
                                        window.open(`${props.masterURI.facebook.share}${props.masterURI.host.dev}/category/${props.catId}/${props.blogId}`, "", "width=500px, height=400px")
                                    }}>
                                        <i className="ion-social-facebook"></i>
                                    </Link>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="700"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                {/* <li data-aos="fade-up" data-aos-duration="900"><a href="#"><i className="ion-social-rss"></i></a></li> */}
                                {/* <li data-aos="fade-up" data-aos-duration="1100"><a href="#"><i className="ion-social-instagram"></i></a></li> */}

                            </ul>
                        </div>
                    </div>
                </div>
            </article>
    )
}

export default BigArticle;