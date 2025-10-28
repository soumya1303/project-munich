import React from "react";
import Image from "next/image";

const TitleImage = (props)=>{

    return (
        <React.Fragment>
            <div className="post_img" data-aos="overlay-left">
                <Image src={props.imgSource} alt="BlogTitleImage" width={1170} height={710}/>
                <div className="calendar">
                    <a href="#"><span className="date">{props.date}</span><br/>{props.month}</a>
                </div>
            </div>
        </React.Fragment>
    )

}

export default TitleImage;