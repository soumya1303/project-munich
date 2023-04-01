import React from "react";

const TopFooter = (props)=>{

    return (
        <React.Fragment>
            <div className="footer-logo">
                <a href="#"><img src={props.logoImgSource} alt="logo" /></a>
            </div>
            <div className="footer-social">
                <ul>
                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                    <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                </ul>
            </div>
        </React.Fragment>
    )

}
export default TopFooter;