import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutAuthor = (props)=>{
    return (
    <React.Fragment>
        <Link href="/author">
            <h4 className="widget_title">Me</h4>
            <div className="sidebar_author">
                <Image src={props.authorImg} alt="author_img" width={252} height={267}/>									
                <p className="intro">{props.authorIntro}</p>

                {/* <div className="social_profile">
                    <div className="social_media">
                        <a href="https://www.facebook.com" target="_blank">
                            <i className="ion-social-facebook"></i>
                            <div className="name">Facebook</div>
                            <div className="off_text">{props.fbFollower} Likes</div>
                        </a>
                    </div>

                    <div className="social_media">
                        <a href="#">
                            <i className="ion-social-twitter"></i>
                            <div className="name">Twitter</div>
                            <div className="off_text">{props.twitterFollower} Follower</div>
                        </a>
                    </div>

                    <div className="social_media">
                        <a href="#">
                            <i className="ion-social-instagram"></i>
                            <div className="name">Instagram</div>
                            <div className="off_text">{props.instaFollower} Follower</div>
                        </a>
                    </div>
                </div> */}
            </div>
        </Link>
    </React.Fragment>)
}
export default AboutAuthor;
