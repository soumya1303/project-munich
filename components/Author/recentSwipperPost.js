import React from "react";

const RecentSwipperPost = (props)=>{
    return (
        <React.Fragment>
            <div className="swiper-slide">
                <article className="blog_post">
                    <div className="post_img">
                        <a href="#"><img src={props.imgSrc} alt="blog" /></a>
                        <div className="calendar">
                            <a href="#"><span className="date">{props.date}</span><br/>{props.month}</a>
                        </div>
                    </div>
                    <div className="post_content">
                        <div className="post_header">
                            <div className="author"><a href="#"><i className="ion-android-create"></i> {`by ${props.author}`}</a></div>
                            <h2 className="post_title">
                                <a href="#">{props.title}</a>
                            </h2>
                        </div>
                    </div>
                </article>
            </div>
        </React.Fragment>
    )
}

export default RecentSwipperPost;