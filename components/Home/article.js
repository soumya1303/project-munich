import React from "react";


const Article = (props)=>{
    return (
            <article className="blog_post">
                <div className="post_img">
                    <div className="calendar">
                        <a href={`/category/${props.catId}/${props.blogId}`}><span className="date">{props.date}</span><br />{props.month}</a>
                    </div>
                </div>
                <div className="post_content">
                    <div className="post_header">
                        <h2 className="post_title" data-swiper="overlay-left">
                            <a href={`/category/${props.catId}/${props.blogId}`}>{props.title}</a>
                        </h2>
                    </div>
                    <div className="post_intro">
                        <p>{props.initContent}</p>
                    </div>
                    <div className="post_footer">
                        <div className="read_more">
                            <a href={`/category/${props.catId}/${props.blogId}`}>{props.footer}</a>
                        </div>
                    </div>
                </div>
            </article>
        )
}

export default Article;