import React from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import MainBody from "../../../components/Blog/mainBody";
import MousePointer from "../../../components/Blog/mousePointer";
import BodyContent from "../../../components/Blog/bodyContent";
import TopContent from "../../../components/Blog/topContent";
import MainNavigation from "../../../components/Blog/mainNavigation";
//import MainNavigation from "../../../components/Common/mainNavigation";
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

    console.log(props.similarBlogList);

    return(
        <React.Fragment>
            <MainBody>
                <MousePointer />
                <BodyContent>
                    <TopContent>
                        <MainNavigation imgSource="/images/common/logo.png"/>
                    </TopContent>
                    <BlogTitle blogTitle={props.blogItem.title} />
                    <MainContentWrapper>
                        <TitleImage 
                            imgSource={props.blogItem.generalImageLib.titleImgURL}
                            date={props.blogItem.date.toString()}
                            month={`${props.blogItem.month} ${props.blogItem.year.toString().slice(2,4)}`}
                        />
                        <GridLayoutWrapper>
                            
                            <GridLayoutLeftWrapper>
                                <MainBlogWrapper>
                                    {/* <MainBlogHeader 
                                        blogHeader={props.blogItem.title}
                                    /> */}
                                    <MainBlogBodyWrapper>

                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[0].paraText}/>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[1].paraText}/>
                                            <BlockQuoteWrapper blockQuoteContent = {props.blogItem.blockQuotes[0].blockQuoteText} />
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[2].paraText}/>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[3].paraText}/>
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            <SingleImage imgURL={props.blogItem.blogImageLib[0].fullwidthImg.fwImgURL}/>
                                            <DuelImage imgURL={props.blogItem.blogImageLib[0].halfwidthImg1.hwImgURL} />
                                            <DuelImage imgURL={props.blogItem.blogImageLib[0].halfwidthImg2.hwImgURL} />
                                        </ImageGallaryWrapper>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[4].paraText}/>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[5].paraText}/>
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            <SingleImage imgURL={props.blogItem.blogImageLib[1].fullwidthImg.fwImgURL}/>
                                            <DuelImage imgURL={props.blogItem.blogImageLib[1].halfwidthImg1.hwImgURL} />
                                            <DuelImage imgURL={props.blogItem.blogImageLib[1].halfwidthImg2.hwImgURL} />
                                        </ImageGallaryWrapper>
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[6].paraText}/>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[7].paraText}/>
                                        </MainBlogSectionWrapper>
                                        <YouTubeLink 
                                            ytVidURL={props.blogItem.blogYTImageLib[0].YTLinks.YTLink} 
                                            ytImgURL={props.blogItem.blogYTImageLib[0].YTLinks.YTImgURL}
                                        />
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={props.blogItem.blogParagraphs[8].paraText}/>
                                        </MainBlogSectionWrapper>
                                        
                                        
                                    </MainBlogBodyWrapper> 
                                    <MainBlogFooter />
                                </MainBlogWrapper>
                                
                                <SimilarPostMainWrapper>
                                    <SimilarPostHeading />
                                    <SimilarPostWrapper>

                                        {
                                            props.similarBlogList.map((sb)=>{
                                                return <SimilarPost 
                                                            key={sb.blogId}
                                                            imgURL={sb.generalImageLib.similarPostImgURL}
                                                            title={sb.title}
                                                        />
                                            })
                                        }
                                        
                                    </SimilarPostWrapper>
                                </SimilarPostMainWrapper>
                            </GridLayoutLeftWrapper>

                            <SideBar 
                                authorProfie={props.authorProfie}
                                categoryList={props.categoryList}
                                recentBlogList={props.recentBlogList}
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
    return({
        paths:[
            {params:{
                        blogId:"1011",
                        categoryId:"europe"
                    }
            },
            {params:{
                        blogId:"1010",
                        categoryId:"europe"
                    }
            },
            {params:{
                        blogId:"1009",
                        categoryId:"brit"
                    }
            },
            {params:{
                        blogId:"1008",
                        categoryId:"europe"
                    }
            },
            {params:{
                        blogId:"1007",
                        categoryId:"asiaandothers"
                    }
            },
            {params:{
                        blogId:"1006",
                        categoryId:"usa"
            }
            },
            {params:{
                        blogId:"1005",
                        categoryId:"usa"
                    }
            },
            {params:{
                        blogId:"1004",
                        categoryId:"usa"
                    }
            },
            {params:{
                        blogId:"1003",
                        categoryId:"europe"
                    }
            },
            {params:{
                        blogId:"1002",
                        categoryId:"asiaandothers"
                    }
            },
            {params:{
                        blogId:"1001",
                        categoryId:"asiaandothers"
                    }
            }, 
             
        ],
        fallback:false
    })
}


const getStaticProps = (context)=>{

    const blogId = context.params.blogId;
    
    const blogItem = blogList.blogListArr.filter((b)=>{
        return b.blogId.toString()===blogId
    })

    const recentBlogListArr = [];
    var i=0;

    blogList.blogListArr.forEach((b)=>{
        if (i<3){
            recentBlogListArr.push(b)
        }
        i++;
    })

    const similarBloglistArr=[];

    // blogItem.relatedBlogId.forEach((e)=>{
    //     blogList.blogListArr.forEach((b)=>{
    //         if (b.blogId === e)
    //                 {
    //                     similarBloglistArr.push(b);
    //                 }
    //     })
    // })

    blogList.blogListArr.forEach((b)=>{

        if (b.relatedBlogId.includes(Number(blogId))){
            similarBloglistArr.push(b);
        }
    })

    return ({
        props:{
            blogItem:blogItem[0],
            categoryList: categoryList.categoryListArr,
            recentBlogList: recentBlogListArr,
            similarBlogList: similarBloglistArr,
            authorProfie:authorProfie
        }
    })

}

export {getStaticPaths, getStaticProps}