import {Fragment} from "react";
import { useState } from "react";
import Script from "next/script";
import Head from "next/head";
import {useRouter} from "next/router"; 

//Importing utility functions
import parseDate from "../../../utilities/dateParser";
import getInstaImages from "../../../utilities/instaImages";
import getCategoryByCatId from "../../../utilities/categoryByCatId"
import getBlogsByCategoryId from "../../../utilities/blogsByCategoryId";
import getAllCategories from "../../../utilities/allCategories";
import getAuthorProfile from "../../../utilities/authorProfile";
import getMostReadBlogs from "../../../utilities/mostReadBlogs"; 

//Importing common UI components
import MainBody from "../../../components/Common/mainBody";
import MousePointer from "../../../components/Common/mousePointer";
import BodyContent from "../../../components/Common/bodyContent";
import TopContent from "../../../components/Common/topContent";
import Pagination from "../../../components/Common/pagination";
import SideBar from "../../../components/Common/sideBar";
import FooterComponent from "../../../components/Common/footerComponent";
import NewsLetter from "../../../components/Common/newsLetter";

//Importing blog specific UI components
import MainNavigation from "../../../components/Category/mainNavigation";
import ThemeSliderWrapper from "../../../components/Category/themeSliderWrapper";
import SwiperContainerWrapper from "../../../components/Category/swiperContainerWrapper";
import SwiperWrapper from "../../../components/Category/swiperWrapper";
import SwiperPagination from "../../../components/Category/swiperPagination";
import SwiperSlide from "../../../components/Category/swiperSlide";
import MainContentWrapper from "../../../components/Category/mainContentWrapper";
import MainContentLeftWrapper from "../../../components/Category/MainContentLeftWrapper";
import BigArticleWrapper from "../../../components/Category/BigArticleWrapper";
import BigArticle from "../../../components/Category/bigArticle";
import SmallArticleWrapper from "../../../components/Category/SmallArticleWrapper";
import SmallArticle from "../../../components/Category/smallArticle";


//Defining constants
const INSTAGRAM_IMAGE_COUNT=6;
const MOST_RECENT_BLOG_COUNT=1;
const RECENT_BLOG_COUNT=2;
const EARLIER_BLOGS_PAGINATION_PER_PAGE=2;
const MOST_READ_BLOG_COUNT_MAX_LIMIT=3;

const Category = ({blogList, category, categoryList, instagramImgArr, authorProfie, mostRead})=>{


    const mostRecentBlogs=[];
    const recentBlogs=[];
    const earlierBlogs=[];

    var i=0;

    blogList.forEach((b)=>{
    
        if(i < MOST_RECENT_BLOG_COUNT){
            mostRecentBlogs.push(b);
        }else if (i<(MOST_RECENT_BLOG_COUNT+RECENT_BLOG_COUNT)){
            recentBlogs.push(b);
        }else {
            earlierBlogs.push(b);
        }
        i=i+1;
    });

    /* Pagination code starts here */

    var j=0;
    const initPaginationItems=[];
    earlierBlogs.forEach((b)=>{
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

    return(
        <Fragment>
            <Head>
                <title>{category.catDesc}</title>
                <meta name="description" content={category.searchEngineText}/>
            </Head>
            <MainBody>
                <MousePointer />
                <BodyContent>
                    
                    <TopContent>
                        <MainNavigation imgSource="/images/common/logo-white.png" catList={categoryList}/>
                        <ThemeSliderWrapper>
                            <SwiperContainerWrapper>
                                <SwiperWrapper>

                                    {
                                            mostRecentBlogs.map((b)=>{

                                            const dateObj = parseDate(b.created_dt);

                                            return <SwiperSlide
                                                key={b.blogId}
                                                blogId={b.blogId}
                                                catId={b.catId}
                                                imgSource={b.generalImageLib.bannerImgURL}
                                                date={dateObj.day}
                                                month={`${dateObj.month} ${dateObj.year}`}
                                                title={b.title}
                                                initContent={b.initContent}
                                                footer="Continue Reading"
                                            />
                                        })
                                    }

                                </SwiperWrapper>
                                <SwiperPagination />

                            </SwiperContainerWrapper>
                        </ThemeSliderWrapper>
                    </TopContent>

                    <MainContentWrapper>
                        <MainContentLeftWrapper>
                            <BigArticleWrapper>
                                {
                                        recentBlogs.map((b)=>{
                                        const dateObj = parseDate(b.created_dt);
                                        return <BigArticle
                                            key={b.blogId}
                                            blogId={b.blogId}
                                            catId={b.catId}
                                            imgSource={b.generalImageLib.titleImgURL}
                                            date={dateObj.day}
                                            month={`${dateObj.month} ${dateObj.year}`}
                                            author={b.author}
                                            title={b.title}
                                            initContent={b.initContent}
                                            footer="Continue Reading"
                                            
                                            />
                                    })
                                }

                            </BigArticleWrapper>

                            <NewsLetter />

                            <SmallArticleWrapper>

                                    {
                                        paginationItems.map((b)=>{
                                            const dateObj = parseDate(b.created_dt);
                                            return <SmallArticle
                                                key={b.blogId}
                                                blogId={b.blogId}
                                                catId={b.catId}
                                                imgSource={b.generalImageLib.smallTitleImgURL}
                                                date={dateObj.day}
                                                month={`${dateObj.month} ${dateObj.year}`}
                                                author={b.author}
                                                title={b.title}
                                            />
                                        })

                                    }

                            </SmallArticleWrapper>

                            <Pagination 
                                blogList={earlierBlogs} 
                                itemsPerPage={EARLIER_BLOGS_PAGINATION_PER_PAGE} 
                                onPageClick={handlePagination}
                    
                            />
                        
                        
                        </MainContentLeftWrapper>

                        <SideBar 
                            authorProfie={authorProfie}
                            categoryList={categoryList}
                            mostReadBlogList={mostRead}
                        />
                        
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

export default Category;

const getStaticPaths = async ()=>{

    const categoryList=await getAllCategories();

    return ({
        paths: categoryList.map((e)=>{return {params:{categoryId:e.catId}}}),
        fallback:true
    });

}

const getStaticProps = async (context)=>
{

    const catId = context.params.categoryId;

    const category=await getCategoryByCatId(catId);

    const categoryList=await getAllCategories();

    const blogList = await getBlogsByCategoryId(catId);

    const instaArr=await getInstaImages(INSTAGRAM_IMAGE_COUNT);

    const authorProfie=await getAuthorProfile();

    const mostRead=await getMostReadBlogs(MOST_READ_BLOG_COUNT_MAX_LIMIT);

    if (!category || categoryList.length===0 || blogList.length===0){
        return ({
            props:{
                notFound:true,

            }
            }
            
        )
    }

    return(
        {
            props:  {
                        category:category,
                        categoryList:categoryList,
                        blogList:blogList,
                        instagramImgArr:instaArr,
                        authorProfie:authorProfie,
                        mostRead:mostRead
                    },
            revalidate:60000,
            
        }
    )
  
}

export {getStaticPaths, getStaticProps};
