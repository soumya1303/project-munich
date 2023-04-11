import React from "react";
import SideBarWrapper from "./sideBarWrapper";
import AuthorProfileWrapper from "./authorProfileWrapper";
import AboutAuthor from "./aboutAuthor";
import RecentPostWrapper from "./recentPostsWrapper";
import RecentPost from "./recentPost";
import Advert from "./advert";
import CategoryWrapper from "./categoryWrapper";
import CategoryItem from "./categoryItem";
import MostReadWrapper from "./mostReadWrapper";
import MostReadPost from "./mostReadPost";

const SideBar = (props)=>{

    // console.log(props.categoryList);
    // console.log(props.recentBlogList);

    return(
        <React.Fragment>
            <SideBarWrapper>
            
                <AuthorProfileWrapper>
                    {/* <AboutAuthor authorImg={props.authorImg} authorIntro={props.authorIntro} fbLikes={props.fbLikes} twitterLikes={props.twitterLikes} instaLikes={props.instaLikes}></AboutAuthor> */}
                    <AboutAuthor 
                        authorImg={props.authorProfie.imgURL} 
                        authorIntro={props.authorProfie.introInitContent} 
                        fbFollower={props.authorProfie.fbFollower} 
                        twitterFollower={props.authorProfie.twtrFollower} 
                        instaFollower={props.authorProfie.instaFollower}>
                    </AboutAuthor>
                </AuthorProfileWrapper>
                
                <Advert imgSource="/images/common/advert.png"/>

                <CategoryWrapper>
                    {
                        props.categoryList.map((c)=>{
                            return (
                                <CategoryItem 
                                    key={c.catId}
                                    catId={c.catId}
                                    categoryName={c.catDesc}
                                    postCount={c.postCount}
                                />
                            )
                        })
                    }

                </CategoryWrapper>

                <MostReadWrapper>
                    {
                        props.recentBlogList.map((b)=>{
                            return (
                                <MostReadPost 
                                    key={b.blogId}
                                    blogId={b.blogId}
                                    catId={b.catId}
                                    imgSource={b.generalImageLib.mostReadImgURL}
                                    title={b.title}
                                />
                            )
                        })
                    }
                </MostReadWrapper>

            </SideBarWrapper>
        </React.Fragment>
    )

}

export default SideBar;