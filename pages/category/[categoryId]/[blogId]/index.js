import { Fragment, useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

//Importing utility functions
import parseDate from "../../../../utilities/dateParser";
import getInstaImages from "../../../../utilities/instaImages";
import getBlogByBlogId from "../../../../utilities/blogByBlogId";
import getAllBlogs from "../../../../utilities/allBlogs";
import getAllCategories from "../../../../utilities/allCategories";
import getBlogsByCategoryId from "../../../../utilities/blogsByCategoryId";
import getAuthorProfile from "../../../../utilities/authorProfile";
import getMostReadBlogs from "../../../../utilities/mostReadBlogs";

//Importing common UI components
import MainBody from "../../../../components/Common/mainBody";
import MousePointer from "../../../../components/Common/mousePointer";
import BodyContent from "../../../../components/Common/bodyContent";
import TopContent from "../../../../components/Common/topContent";
import ParagraphWrapper from "../../../../components/Common/paragraphWrapper";
import BlockQuoteWrapper from "../../../../components/Common/blockQuoteWrapper";
import ImageGallaryWrapper from "../../../../components/Common/imageGallaryWrapper";
import SingleImage from "../../../../components/Common/singleImage";
import DuelImage from "../../../../components/Common/duelImage";
import YouTubeLink from "../../../../components/Common/youTubeLink";
import SideBar from "../../../../components/Common/sideBar";
import FooterComponent from "../../../../components/Common/footerComponent";
import Pagination from "../../../../components/Common/pagination";


//Importing blog specific UI components
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
import MainBlogFooter from "../../../../components/Blog/mainBlogFooter";
import SimilarPostMainWrapper from "../../../../components/Blog/similarPostMainWrapper";
import SimilarPostHeading from "../../../../components/Blog/similarPostHeading";
import SimilarPostWrapper from "../../../../components/Blog/similarPostWrapper";
import SimilarPost from "../../../../components/Blog/similarPost";

//Defining constants
const INSTAGRAM_IMAGE_COUNT=6;
const RECENT_BLOG_COUNT=3;
const EARLIER_BLOGS_PAGINATION_PER_PAGE=2;
const MOST_READ_BLOG_COUNT_MAX_LIMIT=3;

const Blog=({blogList, categoryList, similarBlogList, blogItem, authorProfie, instagramImgArr, mostRead})=>{

    useEffect(()=>{

        const updateReadCount=async (item)=>{

            const resp=await fetch(`${process.env.api_server_route}updateReadCount`, {
                method:"POST",
                headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify({_id:item._id, readCount:item.readCount+1})
            });
            
        }

        updateReadCount(blogItem);

    }, [blogItem]);
    
    
    const recentBlogList = [];
    var i=0;

    blogList.forEach((b)=>{
        if (i<RECENT_BLOG_COUNT){
            recentBlogList.push(b)
        }
        i++;
    })

    /* Pagination code starts here */

    var j=0;
    const initPaginationItems=[];
    similarBlogList.forEach((b)=>{
      if (j<EARLIER_BLOGS_PAGINATION_PER_PAGE){
        initPaginationItems.push(b);
      }
      j++;
    })

    const [paginationItems, setPaginationItems] = useState(initPaginationItems);

    const handlePagination=(blogItems)=>{
    setPaginationItems(blogItems);
    }

    /* Pagination code ends here */

    const dateObj = parseDate(blogItem.created_dt);

    return(
        <Fragment>
            <Head>
                <title>{blogItem.title}</title>
                <meta name="description" content={blogItem.title}/>
            </Head>
            <MainBody>
                <MousePointer />
                <BodyContent>
                    <TopContent>
                        <MainNavigation imgSource="/images/common/logoTopLeft.png" catList={categoryList}/>
                    </TopContent>
                    <BlogTitle blogTitle={blogItem.title} />
                    <MainContentWrapper>
                        <TitleImage 
                            imgSource={blogItem.generalImageLib.titleImgURL}
                            date={dateObj.day}
                            month={`${dateObj.month} ${dateObj.year}`}
                        />
                        <GridLayoutWrapper>
                            
                            <GridLayoutLeftWrapper>
                                <MainBlogWrapper>
                                    

                                    <MainBlogBodyWrapper>
                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[0].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[0].paraText}/>}
                                            {blogItem.blockQuotes[0].blockQuoteText != undefined && <BlockQuoteWrapper blockQuoteContent = {blogItem.blockQuotes[0].blockQuoteText} />}
                                            {blogItem.blogParagraphs[1].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[1].paraText}/>}
                                        </MainBlogSectionWrapper>
                                        <ImageGallaryWrapper>
                                            {blogItem.blogImageLib[0].fwHhImgURL11!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[0].fwHhImgURL11} width="1486" height="250" />}
                                            {blogItem.blogImageLib[0].fwFhImgURL11!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[0].fwFhImgURL11} width="1486" height="500"/>}
                                            {blogItem.blogImageLib[0].hwHhImgURL11!=undefined && blogItem.blogImageLib[0].hwHhImgURL12!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[0].hwHhImgURL11} width="440" height="290"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[0].hwHhImgURL12} width="440" height="290"/>
                                                </>
                                            }
                                            {blogItem.blogImageLib[0].hwFhImgURL11!=undefined && blogItem.blogImageLib[0].hwFhImgURL12!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[0].hwFhImgURL11} width="440" height="500"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[0].hwFhImgURL12} width="440" height="500"/>
                                                </>
                                            }
                                        </ImageGallaryWrapper>
                                        
                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[2].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[2].paraText}/>}
                                        </MainBlogSectionWrapper>
                                        
                                        <ImageGallaryWrapper>
                                            {blogItem.blogImageLib[1].fwHhImgURL21!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[1].fwHhImgURL21} width="1486" height="250"/>}
                                            {blogItem.blogImageLib[1].fwFhImgURL21!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[1].fwFhImgURL21} width="1486" height="500"/>}
                                            {blogItem.blogImageLib[1].hwHhImgURL21!=undefined && blogItem.blogImageLib[1].hwHhImgURL22!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[1].hwHhImgURL21} width="440" height="290"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[1].hwHhImgURL22} width="440" height="290"/>
                                                </>
                                            }
                                            {blogItem.blogImageLib[1].hwFhImgURL21!=undefined && blogItem.blogImageLib[1].hwFhImgURL22!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[1].hwFhImgURL21} width="440" height="500"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[1].hwFhImgURL22} width="440" height="500"/>
                                                </>
                                            }
                                        </ImageGallaryWrapper>
                                        
                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[3].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[3].paraText}/>}
                                        </MainBlogSectionWrapper>

                                        <ImageGallaryWrapper>
                                            {blogItem.blogImageLib[2].fwHhImgURL31!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[2].fwHhImgURL31} width="1486" height="250"/>}
                                            {blogItem.blogImageLib[2].fwFhImgURL31!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[2].fwFhImgURL31} width="1486" height="500"/>}
                                            {blogItem.blogImageLib[2].hwHhImgURL31!=undefined && blogItem.blogImageLib[2].hwHhImgURL32!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[2].hwHhImgURL31} width="440" height="290"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[2].hwHhImgURL32} width="440" height="290"/>
                                                </>
                                            }
                                            {blogItem.blogImageLib[2].hwFhImgURL31!=undefined && blogItem.blogImageLib[2].hwFhImgURL32!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[2].hwFhImgURL31} width="440" height="500"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[2].hwFhImgURL32} width="440" height="500"/>
                                                </>
                                            }
                                        </ImageGallaryWrapper>

                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[4].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[4].paraText}/>}
                                        </MainBlogSectionWrapper>

                                        <ImageGallaryWrapper>
                                            {blogItem.blogImageLib[3].fwHhImgURL41!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[3].fwHhImgURL41} width="1486" height="250"/>}
                                            {blogItem.blogImageLib[3].fwFhImgURL41!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[3].fwFhImgURL41} width="1486" height="500"/>}
                                            {blogItem.blogImageLib[3].hwHhImgURL41!=undefined && blogItem.blogImageLib[3].hwHhImgURL42!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[3].hwHhImgURL41} width="440" height="290"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[3].hwHhImgURL42} width="440" height="290"/>
                                                </>
                                            }
                                            {blogItem.blogImageLib[3].hwFhImgURL41!=undefined && blogItem.blogImageLib[3].hwFhImgURL42!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[3].hwFhImgURL41} width="440" height="500"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[3].hwFhImgURL42} width="440" height="500"/>
                                                </>
                                            }
                                        </ImageGallaryWrapper>

                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[5].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[5].paraText}/>}
                                        </MainBlogSectionWrapper>

                                        <ImageGallaryWrapper>
                                            {blogItem.blogImageLib[4].fwHhImgURL51!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[4].fwHhImgURL51} width="1486" height="250"/>}
                                            {blogItem.blogImageLib[4].fwFhImgURL51!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[4].fwFhImgURL51} width="1486" height="500"/>}
                                            {blogItem.blogImageLib[4].hwHhImgURL51!=undefined && blogItem.blogImageLib[4].hwHhImgURL52!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[4].hwHhImgURL51} width="440" height="290"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[4].hwHhImgURL52} width="440" height="290"/>
                                                </>
                                            }
                                            {blogItem.blogImageLib[4].hwFhImgURL51!=undefined && blogItem.blogImageLib[4].hwFhImgURL52!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[4].hwFhImgURL51} width="440" height="500"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[4].hwFhImgURL52} width="440" height="500"/>
                                                </>
                                            }
                                        </ImageGallaryWrapper>

                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[6].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[6].paraText}/>}
                                        </MainBlogSectionWrapper>

                                        <ImageGallaryWrapper>
                                            {blogItem.blogImageLib[5].fwHhImgURL61!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[5].fwHhImgURL61} width="1486" height="250"/>}
                                            {blogItem.blogImageLib[5].fwFhImgURL61!=undefined &&  <SingleImage imgURL={blogItem.blogImageLib[5].fwFhImgURL61} width="1486" height="500"/>}
                                            {blogItem.blogImageLib[5].hwHhImgURL61!=undefined && blogItem.blogImageLib[5].hwHhImgURL62!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[5].hwHhImgURL61} width="440" height="290"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[5].hwHhImgURL62} width="440" height="290"/>
                                                </>
                                            }
                                            {blogItem.blogImageLib[5].hwFhImgURL61!=undefined && blogItem.blogImageLib[5].hwFhImgURL62!=undefined &&
                                                <>
                                                    <DuelImage imgURL={blogItem.blogImageLib[5].hwFhImgURL61} width="440" height="500"/>
                                                    <DuelImage imgURL={blogItem.blogImageLib[5].hwFhImgURL62} width="440" height="500"/>
                                                </>
                                            }
                                        </ImageGallaryWrapper>

                                        <MainBlogSectionWrapper>
                                            {blogItem.blogParagraphs[7].paraText !=undefined && <ParagraphWrapper textContent={blogItem.blogParagraphs[7].paraText}/>}
                                            {blogItem.blockQuotes[1].blockQuoteText != undefined && <BlockQuoteWrapper blockQuoteContent = {blogItem.blockQuotes[1].blockQuoteText} />}
                                        </MainBlogSectionWrapper>
                                        
                                        {/* <YouTubeLink 
                                            ytVidURL={blogItem.blogYTImageLib[0].YTLinks.YTLink} 
                                            ytImgURL={blogItem.blogYTImageLib[0].YTLinks.YTImgURL}
                                        />
                                        <MainBlogSectionWrapper>
                                            <ParagraphWrapper textContent={blogItem.blogParagraphs[8].paraText}/>
                                        </MainBlogSectionWrapper> */}

                                    </MainBlogBodyWrapper>

                                    <MainBlogFooter 
                                        blogId={blogItem.blogId}
                                        catId={blogItem.catId}
                                    />
                                </MainBlogWrapper>
                                
                                <SimilarPostMainWrapper>
                                    <SimilarPostHeading />
                                    <SimilarPostWrapper>

                                        {
                                            paginationItems.map((sb)=>{
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
                                
                                <Pagination 
                                    blogList={similarBlogList} 
                                    itemsPerPage={EARLIER_BLOGS_PAGINATION_PER_PAGE}
                                    onPageClick={handlePagination}/>

                            </GridLayoutLeftWrapper>

                            <SideBar 
                                authorProfie={authorProfie}
                                categoryList={categoryList}
                                mostReadBlogList={mostRead}
                            />

                        </GridLayoutWrapper>

                    </MainContentWrapper>
                    
                    <FooterComponent 
                        logoImgSource="/images/common/logoBottomLeft.png"
                        instagramImgArr={instagramImgArr}
                        imageLogoBig="/images/common/logo-big.png"
                        
                    />

                </BodyContent>

                <Script id="menu-script" type="module" src="/static/menu.js" > </Script>
                <Script id="custom-script" type="module" src="/static/custom.js" > </Script>

            </MainBody>
        
        </Fragment>
    )
}

export default Blog;

const getStaticPaths = async ()=>{

    const blogList=await getAllBlogs();

    return ({
        paths:blogList.map((e)=>{
            return ({params:{
                categoryId:e.catId,
                blogId:e.blogId.toString()
            }})
        }),
        fallback:true
    });
    
}


const getStaticProps = async (context)=>{

    const {blogId, categoryId} = context.params;

    const blogItem=await getBlogByBlogId(blogId);

    if (!blogItem){
        return ({
            notFound:true
        })
    }

    const instaImgArr=await getInstaImages(INSTAGRAM_IMAGE_COUNT);

    const blogList=await getAllBlogs();

    const catList=await getAllCategories();

    const similarBlogList=await getBlogsByCategoryId(categoryId);   

    const authorProfile = await getAuthorProfile();

    const mostRead=await getMostReadBlogs(MOST_READ_BLOG_COUNT_MAX_LIMIT);

    return ({
        props:{
            blogItem:blogItem,
            blogList:blogList,
            categoryList: catList,
            similarBlogList: similarBlogList,
            authorProfie:authorProfile,
            instagramImgArr:instaImgArr,
            mostRead:mostRead
        },
        revalidate:60000
    })

}

export {getStaticPaths, getStaticProps}