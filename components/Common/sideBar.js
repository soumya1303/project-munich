import React from "react";
import SideBarWrapper from "./sideBarWrapper";
import AuthorProfileWrapper from "./authorProfileWrapper";
import AboutAuthor from "./aboutAuthor";
import RecentPostWrapper from "./recentPostsWrapper";
import RecentPost from "./recentPost";
import CategoryWrapper from "./categoryWrapper";
import CategoryItem from "./categoryItem";
import MostReadWrapper from "./mostReadWrapper";
import MostReadPost from "./mostReadPost";

const SideBar = (props)=>{
    return(
        <React.Fragment>
            <SideBarWrapper>
            
                <AuthorProfileWrapper>
                    <AboutAuthor authorImg={props.authorImg} authorIntro={props.authorIntro} fbLikes={props.fbLikes} twitterLikes={props.twitterLikes} instaLikes={props.instaLikes}></AboutAuthor>
                </AuthorProfileWrapper>
                
                <RecentPostWrapper>
                    <RecentPost title={props.title1}></RecentPost>
                    <RecentPost title={props.title2}></RecentPost>
                    <RecentPost title={props.title3}></RecentPost>
                </RecentPostWrapper>

                <CategoryWrapper>
                    <CategoryItem categoryName={props.categoryName1} postCount={props.postCount1}></CategoryItem>
                    <CategoryItem categoryName={props.categoryName2} postCount={props.postCount2}></CategoryItem>
                    <CategoryItem categoryName={props.categoryName3} postCount={props.postCount3}></CategoryItem>
                    <CategoryItem categoryName={props.categoryName4} postCount={props.postCount4}></CategoryItem>
                    
                </CategoryWrapper>

                <MostReadWrapper>
                    <MostReadPost imgSource={props.imgSource1} title={props.mostReadtitle1}></MostReadPost>
                    <MostReadPost imgSource={props.imgSource2} title={props.mostReadtitle2}></MostReadPost>
                    <MostReadPost imgSource={props.imgSource3} title={props.mostReadtitle3}></MostReadPost>
                </MostReadWrapper>

            </SideBarWrapper>
        </React.Fragment>
    )

}

export default SideBar;