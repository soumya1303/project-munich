import React from "react";

const YouTubeLink = (props)=>{
    return (
        <React.Fragment>
            <div className  ="post_video">
                <iframe className="vid" id="yt" src={props.ytVidURL} allowFullScreen></iframe>
                <div id="content">
                    <img id="alternative" src={props.ytImgURL} alt="img" />
                    <div className="play_btn"><i className="ion-ios-play"></i></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default YouTubeLink;