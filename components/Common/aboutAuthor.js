import React from "react";


const AboutAuthor = (props)=>{
    return (
    <React.Fragment>
        <h4 className="widget_title">About Author</h4>
        <div className="sidebar_author">
            <img src={props.authorImg} alt="img" />									
            <p className="intro">{props.authorIntro}</p>

            <div className="social_profile">
                <div className="social_media">
                    <a href="#">
                        <i className="ion-social-facebook"></i>
                        <div className="name">Facebook</div>
                        <div className="off_text">{props.fbLikes} Likes</div>
                    </a>
                </div>

                <div className="social_media">
                    <a href="#">
                        <i className="ion-social-twitter"></i>
                        <div className="name">Twitter</div>
                        <div className="off_text">{props.twitterLikes} Follower</div>
                    </a>
                </div>

                <div className="social_media">
                    <a href="#">
                        <i className="ion-social-instagram"></i>
                        <div className="name">Instagram</div>
                        <div className="off_text">{props.instaLikes} Follower</div>
                    </a>
                </div>
            </div>
        </div>
    </React.Fragment>)
}
export default AboutAuthor;
