import React from "react";
import Image from "next/image";

const Advert = (props)=>{
    return (
        <div id="custom_2" className="widget widget_custom">
            <div className="sidebar_add">
                <Image src={props.imgSource} alt="ad" width={370} height={360}/>
            </div>
        </div>
    )
}

export default Advert;