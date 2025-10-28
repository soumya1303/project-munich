import {useState, Fragment} from "react";
import Script from 'next/script';
import Head from "next/head";

//Importing utility functions
import parseDate from "../utilities/dateParser";
import getInstaImages from "../utilities/instaImages";
import getAllBlogs from "../utilities/allBlogs";
import getAllCategories from "../utilities/allCategories";
import getAuthorProfile from "../utilities/authorProfile";
import getMostReadBlogs from "../utilities/mostReadBlogs";


//Importing common UI components
import MainBody from "../components/Common/mainBody";
import MousePointer from "../components/Common/mousePointer";
import BodyContent from "../components/Common/bodyContent";
import TopContent from "../components/Common/topContent";
import Pagination from "../components/Common/pagination";
import SideBar from "../components/Common/sideBar";
import NewsLetter from "../components/Common/newsLetter";
import FooterComponent from "../components/Common/footerComponent";

//Importing home UI components
import MainNavigation from "../components/Home/mainNavigation";
import SocialHandleTopContainer from "../components/Home/socialHandleTopContainer";
import ThemeSlider from "../components/Home/themeSlider";
import SliderTextWrapper from "../components/Home/sliderTextWrapper";
import SwipeSlide from "../components/Home/swiperSlide";
import SwiperPagination from "../components/Home/swiperPagination";
import SliderImageWrapper from "../components/Home/sliderImageWrapper";
import SwipeSlideImage from "../components/Home/swiperSlideImage";
import FeaturCategoryWrapper from "../components/Home/featureCategoryWrapper";
import FeatureCategoryItem from "../components/Home/featureCategoryItem";
import MainContentWrapper from "../components/Home/mainContentWrapper";
import MainContentLeftWrapper from "../components/Home/mainContentLeftWrapper";
import BlogList from "../components/Home/blogList";
import BigArticle from "../components/Home/bigArticle";
import MorePostWrapper from "../components/Home/morePostWrapper";
import SmallArticleWrapper from "../components/Home/smallArticleWrapper";

//Defining constants
const INSTAGRAM_IMAGE_COUNT=6;
const MOST_RECENT_BLOG_COUNT=2;
const RECENT_BLOG_COUNT=3;
const EARLIER_BLOGS_PAGINATION_PER_PAGE=2;
const MOST_READ_BLOG_COUNT_MAX_LIMIT=3;


const Home = ({blogList, categoryList, authorProfie, instagramImgArr, mostRead})=> {


  const mostRecentBlogs= [];
  const recentBlogs=[];
  const earlierBlogs=[];

  /* Pagination code starts here */

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

  var j=0;
  const initPaginationItems=[];
  earlierBlogs.forEach((b)=>{
      if (j<EARLIER_BLOGS_PAGINATION_PER_PAGE){
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
    <Fragment>

      <MainBody>
          {/* <PreLoader /> */}

          <MousePointer />
          <BodyContent>
            <TopContent>
              <MainNavigation imgSource="/images/common/logoTopLeft.png" catList={categoryList}/>
              <SocialHandleTopContainer />
              <ThemeSlider>
                <SliderTextWrapper>
                    {
                        mostRecentBlogs.map((b)=>{

                        const dateObj = parseDate(b.created_dt);

                        return <SwipeSlide 
                          key={b.blogId}
                          blogId={b.blogId}
                          catId={b.catId}
                          date={dateObj.day}
                          month={`${dateObj.month} ${dateObj.year}`}
                          title={b.title}
                          initContent={b.initContent}
                          footer="Continue Reading"
                        />
                      })
                    }
                    
                </SliderTextWrapper>
                
                <SliderImageWrapper>
                    {
                        mostRecentBlogs.map((b)=>{
                         
                        return <SwipeSlideImage key={b.blogId} imgSource={b.generalImageLib.heroImgURL}/>
                      })
                    }
                    
                </SliderImageWrapper>
              </ThemeSlider>
            </TopContent> 

            <FeaturCategoryWrapper>

                {
                  categoryList.map((c)=>{
                    return <FeatureCategoryItem 
                            key={c.catId}
                            imgSource={c.imgURL}
                            featureCategoryId={c.catId}
                            featureCategory={c.catDesc}
                            postCount={c.postCount}
                            />
                  })
                }
            </FeaturCategoryWrapper>

            <MainContentWrapper>
              <MainContentLeftWrapper>
                <BlogList>

                  {
                      recentBlogs.map((b)=>{

                      const dateObj = parseDate(b.created_dt);

                      return <BigArticle 
                              key={b.blogId}
                              blogId={b.blogId}
                              catId={b.catId}
                              date={dateObj.day}
                              month={`${dateObj.month} ${dateObj.year}`}
                              author={b.author}
                              title={b.title}
                              initContent={b.initContent}
                              imgSource={b.generalImageLib.titleImgURL}
                              footer="CONTINUE READING "
                              
                              />
                    })
                  }

                </BlogList> 

                <NewsLetter />

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
                                  itemsPerPage={EARLIER_BLOGS_PAGINATION_PER_PAGE}
                                  />
                        })
                      }

                      
                </MorePostWrapper>
                
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

export default Home;

const getStaticProps = async (context)=>{

  const categoryList=await getAllCategories();
  
  const instaArr=await getInstaImages(INSTAGRAM_IMAGE_COUNT);

  const authorProfie=await getAuthorProfile();

  const blogList=await getAllBlogs();

  const mostRead=await getMostReadBlogs(MOST_READ_BLOG_COUNT_MAX_LIMIT);
  
  return({
    props:{
      
      blogList:blogList,
      categoryList:categoryList,
      authorProfie:authorProfie,
      instagramImgArr:instaArr,
      mostRead:mostRead
    }
  })

}

export {getStaticProps};


