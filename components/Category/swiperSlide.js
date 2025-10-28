import React from "react";
import Link from "next/link";
const SwiperSlide = (props)=>{
    return (
        <React.Fragment>
            <div className="swiper-slide" style={{backgroundImage:`url(${props.imgSource})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <article className="blog_post">
                                <div className="post_img">
                                    <div className="calendar">
                                        <Link href={`/category/${props.catId}/${props.blogId}`}><span className="date">{props.date}</span><br /> {props.month}</Link>
                                    </div>
                                </div>
                                <div className="post_content">
                                    <div className="post_header">
                                        <h2 className="post_title">
                                            <Link href={`/category/${props.catId}/${props.blogId}`}>{props.title}</Link>
                                        </h2>
                                    </div>
                                    <div className="post_intro">
                                        <p>{props.initContent}</p>
                                    </div>
                                    <div className="post_footer">
                                        <div className="read_more">
                                            <Link href={`/category/${props.catId}/${props.blogId}`}>{props.footer}</Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SwiperSlide;