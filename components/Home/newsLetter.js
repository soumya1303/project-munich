import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLetter = ()=>{

    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <div className="newsletter bg_image_2" data-aos="fade-up" data-aos-duration="700">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <form className="newsletter_form" method="post">
                        <div className="newsletter_header">
                            <p><i className="ion-email"></i>Subscribe to newsletter</p>
                            <h3>Get each & every new blogs through your e-mail</h3>
                        </div>
                        <div className="form_group">
                            <input className="form-control" type="email" placeholder="Your Email Address" name="ne" required="" />
                            <input type="submit" className="button" value="Subscribe" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default NewsLetter;