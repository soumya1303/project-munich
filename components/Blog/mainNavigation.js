import React from "react";
import RenderSubMenu from "./renderSubMenu";
import Link from "next/link";
import Image from "next/image";

const MainNavigation = (props)=>{
return (<React.Fragment>
            <header id="header" className="header_3 header">
					<div className="container">
						<div className="navigation">
							<nav id="flexmenu">
								<div className="logo">
									<Link href="/"><Image src={props.imgSource} alt="WebsiteLogo" width={540} height={120}/></Link>
								</div>
								<div className="nav-inner">
									<div id="mobile-toggle" className="mobile-btn"></div>
									<ul className="main-menu">
										<li className="menu-item"><Link href="/">Home</Link>
										</li>
										<li className="menu-item active"><Link href="#">Regions</Link> 
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