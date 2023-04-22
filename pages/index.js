import React from "react";
import Script from 'next/script';


import MainBody from "../components/Common/mainBody";
import MousePointer from "../components/Common/mousePointer";
import BodyContent from "../components/Common/bodyContent";
import TopContent from "../components/Common/topContent";

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
import NewsLetter from "../components/Home/newsLetter";
import MorePostWrapper from "../components/Home/morePostWrapper";
import SmallArticleWrapper from "../components/Home/smallArticleWrapper";
import Pagination from "../components/Home/pagination";
import SideBar from "../components/Common/sideBar";
import FooterComponent from "../components/Common/footerComponent";


import blogList from "../public/blogListMaster";
import categoryList from "../public/categoryListMaster";
import authorProfie from "../public/authorProfile";
import instagramToken from "../public/instagramToken";
import masterURI from "../public/masterURI";

const Home = (props)=> {

  

  const categoryListArr = props.categoryList.categoryListArr;
  const blogList = props.blogList.blogListArr;
  const mostRecentThreeBlogs= [];
  const recentThreeBlogs=[];
  const earlierBlogs=[];

  var i=0;

  blogList.forEach((b)=>{
    
    if(i<2){
      mostRecentThreeBlogs.push(b);
    }else if (i<5){
      recentThreeBlogs.push(b);
    }else if (i<9){
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
              <MainNavigation imgSource="/images/common/logoTopLeft.png" catList={categoryListArr}/>
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
                              masterURI={props.masterURI}
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

export default Home;

const getStaticProps = async ()=>{

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

  return({
    props:{
      masterURI:masterURI,
      blogList:blogList,
      categoryList:categoryList,
      authorProfie:authorProfie,
      instagramImgArr:instaGramImgArrReduced
    }
  })

}

export {getStaticProps};


