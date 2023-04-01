import React from "react";


const StandardFooterElements = (props)=>{
    return (
        <div className="col-lg-6 col-md-6">
            <div className="footer_widget pd_lt">
                <div className="blend-logo">
                    <a href="#"><img src={props.imageLogoBig} alt="logo" /></a>
                </div>
                <div className="footer_nav">
                    <ul>
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#">About Author</a></li>
                        <li className="menu-item"><a href="#">Travel</a></li>
                        <li className="menu-item"><a href="#">Posts</a></li>
                        <li className="menu-item"><a href="#">Contact Us</a></li>
                        <li className="menu-item"><a href="#">Photography</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StandardFooterElements;