import React from "react";
import { useRouter } from "next/router";
import Script from "next/script";


import MainBody from "../../../../components/Common/mainBody";
import MousePointer from "../../../../components/Common/mousePointer";
import BodyContent from "../../../../components/Common/bodyContent";
import TopContent from "../../../../components/Common/topContent";


import MainNavigation from "../../../../components/Blog/mainNavigation";
import BlogTitle from "../../../../components/Blog/blogTitle";
import MainContentWrapper from "../../../../components/Blog/mainContentWrapper";
import TitleImage from "../../../../components/Blog/titleImage";
import GridLayoutWrapper from "../../../../components/Blog/gridLayoutWrapper";
import GridLayoutLeftWrapper from "../../../../components/Blog/gridLayoutLeftWrapper";
import MainBlogWrapper from "../../../../components/Blog/mainBlogWrapper";
import MainBlogHeader from "../../../../components/Blog/mainBlogHeader";
import MainBlogBodyWrapper from "../../../../components/Blog/mainBlogBodyWrapper";
import MainBlogSectionWrapper from "../../../../components/Blog/mainBlogSectionWrapper";
import ParagraphWrapper from "../../../../components/Common/paragraphWrapper";
import BlockQuoteWrapper from "../../../../components/Common/blockQuoteWrapper";
import ImageGallaryWrapper from "../../../../components/Common/imageGallaryWrapper";
import SingleImage from "../../../../components/Common/singleImage";
import DuelImage from "../../../../components/Common/duelImage";
import YouTubeLink from "../../../../components/Common/youTubeLink";

import MainBlogFooter from "../../../../components/Blog/mainBlogFooter";
import SimilarPostMainWrapper from "../../../../components/Blog/similarPostMainWrapper";
import SimilarPostHeading from "../../../../components/Blog/similarPostHeading";
import SimilarPostWrapper from "../../../../components/Blog/similarPostWrapper";
import SimilarPost from "../../../../components/Blog/similarPost";
import SideBar from "../../../../components/Common/sideBar";
import FooterComponent from "../../../../components/Common/footerComponent";

import blogList from "../../../../public/blogListMaster";
import categoryList from "../../../../public/categoryListMaster";
import authorProfie from "../../../../public/authorProfile";
import instagramToken from "../../../../public/instagramToken";
import masterURI from "../../../../public/masterURI";


const Blog=(props)=>{

    return(
        <React.Fragment>
            <MainBody>
                <MousePointer />
                <BodyContent>
                    <TopContent>
                        <MainNavigation imgSource="/images/common/logoTopLeft.png" catList={props.categoryList}/>
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
                                    <MainBlogFooter 
                                        masterURI={props.masterURI}
                                        blogId={props.blogItem.blogId}
                                        catId={props.blogItem.catId}
                                    />
                                </MainBlogWrapper>
                                
                                <SimilarPostMainWrapper>
                                    <SimilarPostHeading />
                                    <SimilarPostWrapper>

                                        {
                                            props.similarBlogList.map((sb)=>{
                                                return <SimilarPost 
                                                            key={sb.blogId}
                                                            blogId={sb.blogId}
                                                            catId={sb.catId}
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
                        logoImgSource="/images/common/logoBottomLeft.png"
                        instagramImgArr={props.instagramImgArr}
                        imageLogoBig="/images/common/logo-big.png"
                    />

                </BodyContent>

                <Script id="menu-script" type="module" src="/static/menu.js" > </Script>
                <Script id="custom-script" type="module" src="/static/custom.js" > </Script>

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


const getStaticProps = async (context)=>{

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

    blogList.blogListArr.forEach((b)=>{

        if (b.relatedBlogId.includes(Number(blogId))){
            similarBloglistArr.push(b);
        }
    })

    const resp = await fetch(`${instagramToken.uri}${instagramToken.tokens[1].tokenId}`, {
        method:"GET",
      });

    const {data} = await resp.json();
    
    const instaGramImgArr = data.filter((d)=>{
        return d.media_type==="IMAGE"
        
    })

    const instaGramImgArrReduced=[];
    var i=0;
    instaGramImgArr.forEach((e)=>{
        if (i<6){
        instaGramImgArrReduced.push(e);
        i++;
        }
    })

    return ({
        props:{
            masterURI:masterURI,
            blogItem:blogItem[0],
            categoryList: categoryList.categoryListArr,
            recentBlogList: recentBlogListArr,
            similarBlogList: similarBloglistArr,
            authorProfie:authorProfie,
            instagramImgArr:instaGramImgArrReduced
        }
    })

}

export {getStaticPaths, getStaticProps}