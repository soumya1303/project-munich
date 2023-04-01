import React from "react";

const SimilarPost = (props)=>{
    return(
        <React.Fragment>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <article className="blog_post" data-aos="fade-up" data-aos-duration="700">
                    <div className="post_img" data-aos="overlay-left">
                        <a href="#"><img src={props.imgURL} /></a>
                    </div>
                    <div className="post_content">
                        <div className="post_header">
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

export default SimilarPost;