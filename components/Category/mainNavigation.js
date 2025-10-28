import React from "react";
import RenderSubMenu from "./renderSubMenu";
import Image from "next/image";
import Link from "next/link";

const MainNavigation = (props)=>{
return (<React.Fragment>
            <header id="header" className="header_2 header">
                <div className="container">
                    <div className="navigation">
                        <nav id="flexmenu">
                            <div className="logo">
                                <Link href="/"><Image src={props.imgSource} alt="websiteLogo" width={123} height={27}/></Link>
                            </div>
                            <div className="nav-inner">
                                <div id="mobile-toggle" className="mobile-btn"></div>
                                <ul className="main-menu">
                                    <li className="menu-item"><Link href="/">Home</Link></li>
                                    <li className="menu-item active">Regions
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
                </div>
            </header>
</React.Fragment>

)
}
export default MainNavigation;