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
                    <InstagramItem instaImgURL={props.instaImgURL1}/>
                    <InstagramItem instaImgURL={props.instaImgURL2}/>
                    <InstagramItem instaImgURL={props.instaImgURL3}/>
                    <InstagramItem instaImgURL={props.instaImgURL4}/>
                    <InstagramItem instaImgURL={props.instaImgURL5}/>
                    <InstagramItem instaImgURL={props.instaImgURL6}/>
                </InstagramWrapper>
                <StandardFooterElements imageLogoBig={props.imageLogoBig}/>
            </MiddleFooterWrapper>

            <BottomFooterCopyright />

        </MainFooterWrapper>
    )

}

export default FooterComponent;