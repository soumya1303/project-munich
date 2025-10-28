import Script from 'next/script';
import { useState } from 'react';

//Importing utility functions
import parseDate from "../utilities/dateParser";
import getInstaImages from "../utilities/instaImages";
import getAllBlogs from "../utilities/allBlogs";
import getAllCategories from "../utilities/allCategories";
import getAuthorProfile from "../utilities/authorProfile";

//Importing author UI components
import MainBody from "../components/Common/mainBody";
import FooterComponent from "../components/Common/footerComponent";
import BodyContent from "../components/Common/bodyContent";
import TopContent from "../components/Common/topContent";
import MousePointer from "../components/Common/mousePointer";
import Pagination from '../components/Common/pagination';

//Importing common UI components

import MainNavigation from "../components/Author/mainNavigation";
import AuthorHeader from "../components/Author/authorHeader";
import MainContentWrapper from "../components/Author/mainContentWrapper";
import AuthorIntroWrapper from "../components/Author/authorIntroWrapper";
import ImageContainer from "../components/Author/imageContainer";
import ImageSwiperWrapper from "../components/Author/imageSwiperWrapper";
import ImageSwiperSlide from "../components/Author/imageSwiperSlide";
//import Pagination from "../components/Author/pagination";
import AuthorIntroTextContainer from "../components/Author/authorIntroTextContainer";
import AuthorIntroText from "../components/Author/authorIntroText";
import AuthorBottomWrapper from "../components/Author/authorBottomWrapper";
import AuthorSignature from "../components/Author/authorSignature";
import AuthorSocialProfile from "../components/Author/authorSocialProfile";
import MorePostWrapper from "../components/Author/morePostWrapper";
import SmallArticleWrapper from '../components/Author/smallArticleWrapper';
import SubContentWrapper from "../components/Author/subContentWrapper";
import SubContentLeftWrapper from "../components/Author/subContentLeftWrapper";

import PreLoader from "../components/Author/preLoader";
import AuthorPostsWrapper from "../components/Author/authorPostsWrapper";
import PostSectionHeading from "../components/Author/postSectionHeading";
import PostsFadeUpWrapper from "../components/Author/postsFadeUpWrapper";
import PostsSwipperWrapper from  "../components/Author/postsSwipperWrapper";
import SwipeCarousel from "../components/Author/swipeCarousel";
import RecentSwipperPost from "../components/Author/recentSwipperPost";


//Defining constants
const INSTAGRAM_IMAGE_COUNT=6;
const LATEST_X_BLOG_COUNT=6;
const BLOGS_PAGINATION_PER_PAGE=2;

const Author = ({authorProfileInfo, categoryList, blogList, instagramImgArr})=>{

    var j=0;
    const initPaginationItems=[];
    blogList.forEach((b)=>{
      if (j<BLOGS_PAGINATION_PER_PAGE){
        initPaginationItems.push(b);
      }
      j++;
    })

    /* Managing state of paginated items to display items as per page number */
  
    const [paginationItems, setPaginationItems] = useState(initPaginationItems);

    const handlePagination=(blogItems)=>{
        setPaginationItems(blogItems);
    }

    return (
        <MainBody>
            {/* <PreLoader /> */}
            <MousePointer />
            <BodyContent>
                
                <TopContent>
                    <MainNavigation imgSource="/images/common/logoTopLeft.png" catList={categoryList}/>
                </TopContent>

                <AuthorHeader />
                
                <MainContentWrapper>
                    <AuthorIntroWrapper>
                        <ImageContainer>
                            <ImageSwiperWrapper>
                                {
                                        authorProfileInfo.authMainImgLib.map((e)=>{
                                        
                                        return <ImageSwiperSlide key={e.imgId} imgURL={e.imgSrc}/>
                                    })
                                }
                            </ImageSwiperWrapper>
                            {/* <Pagination /> */}

                        </ImageContainer>

                        <AuthorIntroTextContainer>
                                <AuthorIntroText authProfileInfo = {authorProfileInfo}/>
                                <AuthorBottomWrapper>
                                        <AuthorSignature imgSrc={authorProfileInfo.authSignatureImgSrc}/>
                                        <AuthorSocialProfile />
                                </AuthorBottomWrapper>
                        </AuthorIntroTextContainer>
                    
                    </AuthorIntroWrapper>

                    
                    
                    {/* <AuthorPostsWrapper>
                        <PostSectionHeading />
                        <PostsFadeUpWrapper>
                            <PostsSwipperWrapper>
                                {
                                        recentBlogList.map((b)=>{

                                        const dateObj = parseDate(b.created_dt);

                                        return <RecentSwipperPost 
                                                key={b.blogId}
                                                blogId={b.blogId}
                                                catId={b.catId}
                                                date={dateObj.day}
                                                month={`${dateObj.month} ${dateObj.year}`}
                                                title={b.title}
                                                imgSrc={b.generalImageLib.smallTitleImgURL}
                                                author={b.author} />
                                    })
                                }        

                            </PostsSwipperWrapper>
                            <SwipeCarousel />
                        </PostsFadeUpWrapper>
                    </AuthorPostsWrapper> */}

                </MainContentWrapper>

                    <SubContentWrapper>
                        {/* <SubContentLeftWrapper> */}
                            <MorePostWrapper>

                            {
                            
                                paginationItems.map((b)=>{
                                
                                const dateObj = parseDate(b.created_dt);

                                return <SmallArticleWrapper 
                                        key={b.blogId}
                                        blogId={b.blogId}
                                        catId={b.catId}
                                        date={dateObj.day}
                                        month={`${dateObj.month} ${dateObj.year}`}
                                        author={b.author}
                                        title={b.title}
                                        imgSource={b.generalImageLib.smallTitleImgURL}
                                        itemsPerPage={BLOGS_PAGINATION_PER_PAGE}
                                        />
                            })
                            }

                            
                            </MorePostWrapper>
                    
                            <Pagination 
                            blogList={blogList} 
                            itemsPerPage={BLOGS_PAGINATION_PER_PAGE} 
                            onPageClick={handlePagination}
                        
                            />
                        {/* </SubContentLeftWrapper> */}
                    </SubContentWrapper>

                

                <FooterComponent 
                    logoImgSource="/images/common/logoBottomLeft.png"
                    instagramImgArr={instagramImgArr}
                    imageLogoBig="/images/common/logo-big.png"
                />
                
            
            </BodyContent>
        
            <Script id="menu-script" type="module" src="/static/menu.js" > </Script>
            <Script id="custom-script" type="module" src="/static/custom.js" > </Script>

        </MainBody>
    )
}

export default Author;

const getStaticProps = async ()=>{
    
    const categoryList=await getAllCategories();

    const instaArr=await getInstaImages(INSTAGRAM_IMAGE_COUNT);

    const authorProfie=await getAuthorProfile();

    const blogList=await getAllBlogs(LATEST_X_BLOG_COUNT);

    return (
        {
            props:{
                authorProfileInfo:authorProfie,
                blogList:blogList,
                categoryList:categoryList,
                instagramImgArr:instaArr
            }
        }
    )
}

export {getStaticProps}