import React from "react";

const SmallArticle = (props)=>{
    return(
        <React.Fragment>
            <div className="col-lg-6 col-md-6">
                <article className="blog_post" data-aos="fade-up" data-aos-duration="700">
                    <div className="post_img" data-aos="overlay-left">
                        <a href={`/${props.catId}/${props.blogId}`}><img src={props.imgSource} alt="blog" /></a>
                        <div className="calendar">
                            <a href={`/${props.catId}/${props.blogId}`}><span className="date">{props.date}</span><br/>{props.month}</a>
                        </div>
                    </div>
                    <div className="post_content">
                        <div className="post_header">
                            <div className="author"><a href="#"><i className="ion-android-create"></i>{props.author}</a></div>
                            <h2 className="post_title">
                                <a href={`/${props.catId}/${props.blogId}`}>{props.title}</a>
                            </h2>
                        </div>
                    </div>
                </article>
            </div>
        </React.Fragment>
    )
}

export default SmallArticle;