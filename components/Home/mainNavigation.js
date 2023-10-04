import React from "react";
import RenderSubMenu from "./renderSubMenu";
import Link from "next/link";
import Image from "next/image";


const MainNavigation = (props)=>{
return(
    <header id="header" className="header_1 header">
        <div className="navigation">
            <nav id="flexmenu">
                <div className="logo">
                    <Link href="#"><Image src= {props.imgSource} alt="logo" height={120} width={540} /></Link>
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
                        <li className="menu-item"><Link href="/author">Me</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
)
}

export default MainNavigation;