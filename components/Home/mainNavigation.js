import React from "react";


const MainNavigation = (props)=>{
return(
    <header id="header" className="header_1 header">
        <div className="navigation">
            <nav id="flexmenu">
                <div className="logo">
                    <a href="index.html"><img src= {props.imgSource} alt="logo" /></a>
                </div>
                <div className="nav-inner">
                    <div id="mobile-toggle" className="mobile-btn"></div>
                    <ul className="main-menu">
                        <li className="menu-item active"><a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="index-2.html">Home 2</a></li>
                                <li className="menu-item"><a href="index-3.html">Home 3</a></li>
                            </ul>
                        </li>
                        <li className="menu-item"><a href="#">Posts</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="blog-details.html">Blog Details</a></li>
                                <li className="menu-item"><a href="blog-details-fullwidth.html">Blog Details Fullwidth</a></li>
                            </ul>
                        </li>
                        <li className="menu-item"><a href="about.html">About Author</a></li>
                        <li className="menu-item"><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
)
}

export default MainNavigation;