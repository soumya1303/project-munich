import React from "react";
import Link from "next/link";
import Image from "next/image";

const SmallArticle = (props)=>{
    return(
        <React.Fragment>
            <div className="col-lg-6 col-md-6">
                <article className="blog_post" data-aos="fade-up" data-aos-duration="700">
                    <div className="post_img" data-aos="overlay-left">
                        <Link href={`/category/${props.catId}/${props.blogId}`}><Image src={props.imgSource} alt="SmallArticleBlog" width={370} height={467}/></Link>
                        <div className="calendar">
                            <Link href={`/category/${props.catId}/${props.blogId}`}><span className="date">{props.date}</span><br/>{props.month}</Link>
                        </div>
                    </div>
                    <div className="post_content">
                        <div className="post_header">
                            <div className="author"><a href="#"><i className="ion-android-create"></i>{props.author}</a></div>
                            <h2 className="post_title">
                                <Link href={`/category/${props.catId}/${props.blogId}`}>{props.title}</Link>
                            </h2>
                        </div>
                    </div>
                </article>
            </div>
        </React.Fragment>
    )
}

export default SmallArticle;