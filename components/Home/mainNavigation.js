import React from "react";
import RenderSubMenu from "./renderSubMenu";
//import Link from "next/link";
//import {Link} from "react-router-dom";

const MainNavigation = (props)=>{
return(
    <header id="header" className="header_1 header">
        <div className="navigation">
            <nav id="flexmenu">
                <div className="logo">
                    <a href="#"><img src= {props.imgSource} alt="logo" /></a>
                </div>
                <div className="nav-inner">
                    <div id="mobile-toggle" className="mobile-btn"></div>
                    <ul className="main-menu">
                        <li className="menu-item active"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#">Regions</a>
                            <ul className="sub-menu">
                                {
                                    props.catList.map((c)=>{
                                        return <RenderSubMenu key={c.catKey} menuId={c.catId} menuItem={c.catDesc}/>
                                    })
                                }
                                </ul>
                        </li>
                        {/* <li className="menu-item"><a href="/author">About Author</a></li> */}
                        <li className="menu-item"><a href="/author">Me</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
)
}

export default MainNavigation;