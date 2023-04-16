import React from "react";
import Script from 'next/script';

import MainBody from "../components/Common/mainBody";
import PreLoader from "../components/Author/preLoader";
import BodyContent from "../components/Common/bodyContent";
import TopContent from "../components/Common/topContent";
import MousePointer from "../components/Common/mousePointer";
import MainNavigation from "../components/Author/mainNavigation";
import AuthorHeader from "../components/Author/authorHeader";
import MainContentWrapper from "../components/Author/mainContentWrapper";
import AuthorIntroWrapper from "../components/Author/authorIntroWrapper";
import ImageContainer from "../components/Author/imageContainer";
import ImageSwiperWrapper from "../components/Author/imageSwiperWrapper";
import ImageSwiperSlide from "../components/Author/imageSwiperSlide";
import Pagination from "../components/Author/pagination";
import AuthorIntroTextContainer from "../components/Author/authorIntroTextContainer";
import AuthorIntroText from "../components/Author/authorIntroText";
import AuthorBottomWrapper from "../components/Author/authorBottomWrapper";
import AuthorSignature from "../components/Author/authorSignature";
import AuthorSocialProfile from "../components/Author/authorSocialProfile";
import AuthorPostsWrapper from "../components/Author/authorPostsWrapper";
import PostSectionHeading from "../components/Author/postSectionHeading";
import PostsFadeUpWrapper from "../components/Author/postsFadeUpWrapper";
import PostsSwipperWrapper from  "../components/Author/postsSwipperWrapper";
import SwipeCarousel from "../components/Author/swipeCarousel";
import RecentSwipperPost from "../components/Author/recentSwipperPost";
import FooterComponent from "../components/Common/footerComponent";

import authorProfile from "../public/authorProfile";
import blogList from "../public/blogListMaster";
import categoryList from "../public/categoryListMaster";

const Author = (props)=>{


    return (
        <MainBody>
            {/* <PreLoader /> */}
            <MousePointer />
            <BodyContent>
                
                <TopContent>
                    <MainNavigation imgSource="/images/common/logo.png" catList={props.categoryList}/>
                </TopContent>

                <AuthorHeader />
                
                <MainContentWrapper>
                    <AuthorIntroWrapper>
                        <ImageContainer>
                            <ImageSwiperWrapper>
                                {
                                    props.authorProfileInfo.authMainImgLib.map((e)=>{
                                        
                                        return <ImageSwiperSlide key={e.imgId} imgURL={e.imgSrc}/>
                                    })
                                }
                            </ImageSwiperWrapper>
                            <Pagination />

                        </ImageContainer>

                        <AuthorIntroTextContainer>
                                <AuthorIntroText authProfileInfo = {props.authorProfileInfo}/>
                                <AuthorBottomWrapper>
                                        <AuthorSignature imgSrc={props.authorProfileInfo.authSignatureImgSrc}/>
                                        <AuthorSocialProfile />
                                </AuthorBottomWrapper>
                        </AuthorIntroTextContainer>
                    
                    </AuthorIntroWrapper>
                    
                    <AuthorPostsWrapper>
                        <PostSectionHeading />
                        <PostsFadeUpWrapper>
                            <PostsSwipperWrapper>
                                {
                                    props.recentBlogList.map((b)=>{
                                        
                                        return <RecentSwipperPost 
                                                key={b.blogId}
                                                blogId={b.blogId}
                                                catId={b.catId}
                                                date={b.date}
                                                month={`${b.month} ${b.year.toString().slice(2,4)}`}
                                                title={b.title}
                                                imgSrc={b.generalImageLib.smallTitleImgURL}
                                                author={b.author} />
                                    })
                                }        

                            </PostsSwipperWrapper>
                            <SwipeCarousel />
                        </PostsFadeUpWrapper>
                    </AuthorPostsWrapper>

                </MainContentWrapper>

                <FooterComponent 
                    logoImgSource="/images/common/logo-white.png"
                    instaImgURL1="/images/insta/1.jpg"
                    instaImgURL2="/images/insta/2.jpg"
                    instaImgURL3="/images/insta/3.jpg"
                    instaImgURL4="/images/insta/4.jpg"
                    instaImgURL5="/images/insta/5.jpg"
                    instaImgURL6="/images/insta/6.jpg"
                    imageLogoBig="/images/common/logo-big.png"
                />
            
            </BodyContent>
        
            <Script id="menu-script" type="module" src="/static/menu.js" > </Script>
            <Script id="custom-script" type="module" src="/static/custom.js" > </Script>

        </MainBody>
    )
}

export default Author;

const getStaticProps = ()=>{

    const blogListArr = blogList.blogListArr;
    var i=0;
    const recentThreePostsByAuthor= [];
    blogListArr.forEach((e)=>{
            if (i<4){
            if (e.author==="Madhurima Ranu"){
                recentThreePostsByAuthor.push(e)
                i++;
            }
            
            }
            
    })

    return (
        {
            props:{
                authorProfileInfo:authorProfile,
                recentBlogList:recentThreePostsByAuthor,
                categoryList:categoryList.categoryListArr,
            }
        }
    )
}

export {getStaticProps}