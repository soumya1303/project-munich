import React from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import MainBody from "../../../components/Blog/mainBody";
import MousePointer from "../../../components/Blog/mousePointer";
import BodyContent from "../../../components/Blog/bodyContent";
import TopContent from "../../../components/Blog/topContent";
import MainNavigation from "../../../components/Blog/mainNavigation";
import BlogTitle from "../../../components/Blog/blogTitle";
import MainContentWrapper from "../../../components/Blog/mainContentWrapper";
import TitleImage from "../../../components/Blog/titleImage";
import GridLayoutWrapper from "../../../components/Blog/gridLayoutWrapper";
import GridLayoutLeftWrapper from "../../../components/Blog/gridLayoutLeftWrapper";
import MainBlogWrapper from "../../../components/Blog/mainBlogWrapper";
import MainBlogHeader from "../../../components/Blog/mainBlogHeader";
import MainBlogBodyWrapper from "../../../components/Blog/mainBlogBodyWrapper";
import MainBlogSectionWrapper from "../../../components/Blog/mainBlogSectionWrapper";
import ParagraphWrapper from "../../../components/Common/paragraphWrapper";
import BlockQuoteWrapper from "../../../components/Common/blockQuoteWrapper";
import ImageGallaryWrapper from "../../../components/Common/imageGallaryWrapper";
import SingleImage from "../../../components/Common/singleImage";
import DuelImage from "../../../components/Common/duelImage";
import YouTubeLink from "../../../components/Common/youTubeLink";

import MainBlogFooter from "../../../components/Blog/mainBlogFooter";
import SimilarPostMainWrapper from "../../../components/Blog/similarPostMainWrapper";
import SimilarPostHeading from "../../../components/Blog/similarPostHeading";
import SimilarPostWrapper from "../../../components/Blog/similarPostWrapper";
import SimilarPost from "../../../components/Blog/similarPost";
import SideBar from "../../../components/Common/sideBar";
import FooterComponent from "../../../components/Common/footerComponent";


import FakeBlogContent from "../../../public/fakeBlogContent"; /* To be deleted later */
import dummyBlogContent from "../../../public/dummyBlogContent";

import blogList from "../../../public/blogListMaster";
import categoryList from "../../../public/categoryListMaster";
import authorProfie from "../../../public/authorProfile";


const Blog=(props)=>{


    return(
        <React.Fragment>
            <MainBody>
                <MousePointer />
                <BodyContent>
                    <TopContent>
                        <MainNavigation imgSource="/images/common/logo.png"/>
                    </TopContent>
                    <BlogTitle blogTitle="BLOG" />
                    <MainContentWrapper>
                        <TitleImage 
                            imgSource={props.blogItem.generalImageLib.titleImgURL}
                            date={props.blogItem.date.toString()}
                            month={`${b.month} ${b.year.toString().slice(2,4)}`}
                        />
                        <GridLayoutWrapper>
                            <GridLayoutLeftWrapper>
                                <MainBlogWrapper>
                                    <MainBlogHeader 
                                        blogHeader={props.blogItem.title}
                                    />
                                    <MainBlogBodyWrapper>

                                    <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[0]}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p2}/>
                                            <BlockQuoteWrapper blockQuoteContent = {dummyBlogContent.blogBlockQuotes.bq1} />
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p3}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p4}/>
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            <SingleImage imgURL={dummyBlogContent.blogImages.img1}/>
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img2} />
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img3} />
                                        </ImageGallaryWrapper>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p5}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p6}/>
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            <SingleImage imgURL={dummyBlogContent.blogImages.img1}/>
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img2} />
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img3} />
                                        </ImageGallaryWrapper>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p5}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p6}/>
                                        </MainBlogSectionWrapper>
                                        <YouTubeLink ytVidURL={dummyBlogContent.blogYTVideos.ytVidURL} ytImgURL={dummyBlogContent.blogYTImages.ytImgURL}/>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p5}/>
                                        </MainBlogSectionWrapper>
                                        
                                        {/* <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p1}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p2}/>
                                            <BlockQuoteWrapper blockQuoteContent = {dummyBlogContent.blogBlockQuotes.bq1} />
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p3}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p4}/>
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            <SingleImage imgURL={dummyBlogContent.blogImages.img1}/>
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img2} />
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img3} />
                                        </ImageGallaryWrapper>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p5}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p6}/>
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            <SingleImage imgURL={dummyBlogContent.blogImages.img1}/>
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img2} />
                                            <DuelImage imgURL={dummyBlogContent.blogImages.img3} />
                                        </ImageGallaryWrapper>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p5}/>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p6}/>
                                        </MainBlogSectionWrapper>
                                        <YouTubeLink ytVidURL={dummyBlogContent.blogYTVideos.ytVidURL} ytImgURL={dummyBlogContent.blogYTImages.ytImgURL}/>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={dummyBlogContent.blogParagraphs.p5}/>
                                        </MainBlogSectionWrapper> */}
                                    </MainBlogBodyWrapper> 
                                    <MainBlogFooter />
                                </MainBlogWrapper>
                                
                                <SimilarPostMainWrapper>
                                    <SimilarPostHeading />
                                    <SimilarPostWrapper>
                                        <SimilarPost 
                                            imgURL="/images/blog/related1.jpg"
                                            title="To me Life is either a daring adventure or nothing"
                                        />
                                        <SimilarPost 
                                            imgURL="/images/blog/related2.jpg"
                                            title="Life begins at the end of your comfort zone"
                                        />
                                    </SimilarPostWrapper>
                                </SimilarPostMainWrapper>
                            </GridLayoutLeftWrapper>

                            <SideBar 
                                authorImg="/images/author.png"
                                authorIntro="blah blah blah blah blah blah"
                                fbLikes="10K"
                                twitterLikes="8K"
                                instaLikes="11K"
                                title1="Let’s escape in the  cityscape"
                                title2="Failure doesn’t define  anything"
                                title3="Bohemian mountain towards Us"
                                categoryName1="Travel Hacks"
                                postCount1="5"
                                categoryName2="South Asia"
                                postCount2="5"
                                categoryName3="Photography"
                                postCount3="5"
                                categoryName4="Wildlife Adventure"
                                postCount4="5"
                                imgSource1="/images/popular/1.jpg"
                                mostReadtitle1="Beautiful afternoon boating in Morine Lake"
                                imgSource2="/images/popular/2.jpg"
                                mostReadtitle2="Beautiful afternoon boating in Morine Lake"
                                imgSource3="/images/popular/3.jpg"
                                mostReadtitle3="Beautiful afternoon boating in Morine Lake"
                            />
                        </GridLayoutWrapper>

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

                <Script id="menu-script" type="module" src="/static/menu.js" defer> </Script>
                <Script id="custom-script" type="module" src="/static/custom.js" defer> </Script>

            </MainBody>
        
        </React.Fragment>
    )
}

export default Blog;

const getStaticPaths = (context)=>{

}


const getStaticProps = (context)=>{

    const blogId = context.params.blogId;
    
    const blogItem = blogList.blogListArr.forEach((b)=>{
        if (b.blogId === blogId){
            return b
        }

        return ({
            props:{
                blogItem:blogItem,
                categoryListArr: categoryList.categoryListArr,
                authorProfie:authorProfie
            }
        })
    })

}

export {getStaticPaths, getStaticProps}