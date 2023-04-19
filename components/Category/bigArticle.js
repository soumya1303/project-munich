import React from "react";

const BigArticle = (props)=>{
    return(
        <React.Fragment>
            <article className="blog_post">
                <div className="post_img" data-aos="overlay-left">
                    <a href={`/category/${props.catId}/${props.blogId}`}><img src={props.imgSource} /></a>
                    <div className="calendar">
                        <a href={`/category/${props.catId}/${props.blogId}`}><span className="date">{props.date}</span><br/>{props.month}</a>
                    </div>
                </div>
                <div className="post_content">
                    <div className="post_header">
                        <div className="author"><a href="#"><i className="ion-android-create"></i>{props.author}</a></div>
                        <h2 className="post_title">
                            <a href={`/category/${props.catId}/${props.blogId}`}>{props.title}</a>
                        </h2>
                    </div>
                    <div className="post_intro">
                        <p>{props.initContent}</p>
                    </div>
                    <div className="post_footer">
                        <div className="read_more" data-aos="fade-up" data-aos-duration="700">
                            <a href={`/category/${props.catId}/${props.blogId}`}>{props.footer}</a>
                        </div>
                        <div className="post_share">
                            <ul className="share_list">
                                <li data-aos="fade-up" data-aos-duration="500">
                                    <a onClick={()=>{
                                        window.open(`${props.masterURI.facebook.share}${props.masterURI.host.dev}/category/${props.catId}/${props.blogId}`,"", "width=500px, height=400px")
                                    }}> 
                                        <i className="ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="700"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                <li data-aos="fade-up" data-aos-duration="900"><a href="#"><i className="ion-social-rss"></i></a></li>
                                <li data-aos="fade-up" data-aos-duration="1100"><a href="#"><i className="ion-social-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </React.Fragment>
    )
}

export default BigArticle;