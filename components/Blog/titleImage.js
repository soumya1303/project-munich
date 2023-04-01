import React from "react";

const TitleImage = (props)=>{

    return (
        <React.Fragment>
            <div className="post_img" data-aos="overlay-left">
                <img src={props.imgSource} />
                <div className="calendar">
                    <a href="#"><span className="date">{props.date}</span><br/>{props.month}</a>
                </div>
            </div>
        </React.Fragment>
    )

}

export default TitleImage;