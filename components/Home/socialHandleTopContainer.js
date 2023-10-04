import React from "react";
import Link from "next/link";

const SocialHandleTopContainer = ()=>{
    return (
    <div className="top-social-1 social_links">
        <ul className="top-social">
            <li><Link href="https://www.facebook.com" target="_blank"><i className="ion-social-facebook"></i></Link></li>
            <li><Link href="#"><i className="ion-social-instagram"></i></Link></li>
            <li><Link href="#"><i className="ion-social-twitter"></i></Link></li>
        </ul>
    </div>)
}

export default SocialHandleTopContainer;