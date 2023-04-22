import React from "react";
import Link from "next/link";
//import {Link} from "react-router-dom";

import RenderSubMenu from "./renderSubMenu";

const MainNavigation = (props)=>{
    return (
        <React.Fragment>
            <header id="header" className="header_3 header">
					<div className="container">
						<div className="navigation">
							<nav id="flexmenu">
								<div className="logo">
									<a href="index.html"><img src={props.imgSource} alt="logo" /></a>
								</div>
								<div className="nav-inner">
									<div id="mobile-toggle" className="mobile-btn"></div>
									<ul className="main-menu">
										<li className="menu-item">
										  <a href="/">Home</a>
										</li>
										<li className="menu-item"><a href="#">Regions</a>
											<ul className="sub-menu">
											{
												props.catList.map((c)=>{
												return <RenderSubMenu key={c.catKey} menuId={c.catId} menuItem={c.catDesc}/>
												})
											}
											</ul>
											
										</li>
										<li className="menu-item active"><a href="#">Me</a></li>
										
									</ul>
								</div>
							</nav>
						</div>
					</div>
		        </header>
        </React.Fragment>
    )
}

export default MainNavigation;