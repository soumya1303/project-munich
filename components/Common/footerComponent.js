import React from "react";

import MainFooterWrapper from "./mainFooterWrapper";
import TopFooterWrapper from "./topFooterWrapper";
import TopFooter from "./topFooter";
import MiddleFooterWrapper from "./middleFooterWrapper";
import InstagramWrapper from "./instagramWrapper";
import InstagramItem from "./instagramItem";
import StandardFooterElements from "./standardFooterElements";
import BottomFooterCopyright from "./bottomFooterCopyright";

const FooterComponent = (props)=>{

    return(
        <MainFooterWrapper>
                
            <TopFooterWrapper>
                <TopFooter logoImgSource={props.logoImgSource}/>
            </TopFooterWrapper>
            
            <MiddleFooterWrapper>
                <InstagramWrapper>
                    {
                        props.instagramImgArr.map((imgObj)=>{
                            return (<InstagramItem key={imgObj.id} instaImgURL={imgObj.media_url}/>)
                        })
                    }
                </InstagramWrapper>
                <StandardFooterElements imageLogoBig={props.imageLogoBig}/>
            </MiddleFooterWrapper>

            <BottomFooterCopyright />

        </MainFooterWrapper>
    )

}

export default FooterComponent;

