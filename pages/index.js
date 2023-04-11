import React from "react";
import Script from 'next/script';

import MainBody from "../components/Home/mainBody";
import PreLoader from "../components/Home/preLoader";
import MousePointer from "../components/Home/mousePointer";
import MainNavigation from "../components/Home/mainNavigation";
import BodyContent from "../components/Home/bodyContent";
import TopContent from "../components/Home/topContent";
import SocialHandleTopContainer from "../components/Home/socialHandleTopContainer";
import ThemeSlider from "../components/Home/themeSlider";
import SliderTextWrapper from "../components/Home/sliderTextWrapper";
import SwipeSlide from "../components/Home/swiperSlide";
import SliderImageWrapper from "../components/Home/sliderImageWrapper";
import SwipeSlideImage from "../components/Home/swiperSlideImage";
import FeaturCategoryWrapper from "../components/Home/featureCategoryWrapper";
import FeatureCategoryItem from "../components/Home/featureCategoryItem";
import MainContentWrapper from "../components/Home/mainContentWrapper";
import MainContentLeftWrapper from "../components/Home/mainContentLeftWrapper";
import BlogList from "../components/Home/blogList";
import BigArticle from "../components/Home/bigArticle";
import NewsLetter from "../components/Home/newsLetter";
import MorePostWrapper from "../components/Home/morePostWrapper";
import SmallArticleWrapper from "../components/Home/smallArticleWrapper";
import Pagination from "../components/Home/pagination";
import SideBar from "../components/Common/sideBar";
import FooterComponent from "../components/Common/footerComponent";

import blogList from "../public/blogListMaster";
import categoryList from "../public/categoryListMaster";
import authorProfie from "../public/authorProfile";

const Home = (props)=> {

  const categoryListArr = props.categoryList.categoryListArr;
  const blogList = props.blogList.blogListArr;
  const mostRecentThreeBlogs= [];
  const recentThreeBlogs=[];
  const earlierBlogs=[];

  var i=0;

  blogList.forEach((b)=>{
    
    if(i<3){
      mostRecentThreeBlogs.push(b);
    }else if (i<6){
      recentThreeBlogs.push(b);
    }else if (i<10){
      earlierBlogs.push(b);
    }
    i=i+1;
  });


  return (
    <React.Fragment>

      <MainBody>
          {/* <PreLoader /> */}

          <MousePointer />
          <BodyContent>
            <TopContent>
              <MainNavigation imgSource="/images/common/logo.png"/>
              <SocialHandleTopContainer />
              <ThemeSlider>
                <SliderTextWrapper>
                    {
                      mostRecentThreeBlogs.map((b)=>{
                        return <SwipeSlide 
                        key={b.blogId}
                        blogId={b.blogId}
                        catId={b.catId}
                        date={b.date.toString()} 
                        month={`${b.month} ${b.year.toString().slice(2,4)}`}
                        title={b.title}
                        initContent={b.initContent}
                        footer="Continue Reading"
                        />
                      })
                    }
                    
                </SliderTextWrapper>
                <SliderImageWrapper>
                    {
                      mostRecentThreeBlogs.map((b)=>{
                        return <SwipeSlideImage key={b.blogId} imgSource={b.generalImageLib.authorImgURL}/>
                      })
                    }
                    
                </SliderImageWrapper>
              </ThemeSlider>
            </TopContent> 

            <FeaturCategoryWrapper>

                {
                  categoryListArr.map((c)=>{
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
                    recentThreeBlogs.map((b)=>{
                      return <BigArticle 
                              key={b.blogId}
                              blogId={b.blogId}
                              catId={b.catId}
                              date={b.date.toString()}
                              month={`${b.month} ${b.year.toString().slice(2,4)}`}
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
                      earlierBlogs.map((b)=>{
                        return <SmallArticleWrapper 
                                key={b.blogId}
                                blogId={b.blogId}
                                catId={b.catId}
                                date={b.date.toString()}
                                month={`${b.month} ${b.year.toString().slice(2,4)}`}
                                author={b.author}
                                title={b.title}
                                imgSource={b.generalImageLib.smallTitleImgURL}
                                />
                      })
                    }
                </MorePostWrapper>
                
                <Pagination />
              
              </MainContentLeftWrapper>

              <SideBar 
                authorProfie={props.authorProfie}
                categoryList={props.categoryList.categoryListArr}
                recentBlogList={mostRecentThreeBlogs}
              />

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

export default Home;

const getStaticProps = ()=>{

  return({
    props:{
      blogList:blogList,
      categoryList:categoryList,
      authorProfie:authorProfie
    }
  })

}

export {getStaticProps};


