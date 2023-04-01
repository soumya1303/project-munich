import React from "react";
import Script from 'next/script';


//import MainHeader from "../components/mainHeader";
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


export default function Home() {
  return (
    <React.Fragment>
      {/* <MainHeader /> */}

      <MainBody>
          {/* <PreLoader /> */}

          <MousePointer />
          <BodyContent>
            <TopContent>
              <MainNavigation imgSource="/images/logo1.png"/>
              <SocialHandleTopContainer />
              <ThemeSlider>
                <SliderTextWrapper>
                  <SwipeSlide 
                    date="30" 
                    month="May" 
                    title="Live with no excuses & travel with no regrets"
                    initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..."
                    footer="Continue Reading"
                    />
                    <SwipeSlide 
                    date="27" 
                    month="Jun" 
                    title="50 travel essentials you must have to collect"
                    initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..."
                    footer="Continue Reading"
                    />
                    <SwipeSlide 
                    date="18" 
                    month="Jul" 
                    title="With age, comes wisdom, comes understanding"
                    initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..."
                    footer="Continue Reading"
                    />
                </SliderTextWrapper>
                <SliderImageWrapper>
                    <SwipeSlideImage imgSource="/images/slider/2.jpg"/>
                    <SwipeSlideImage imgSource="/images/slider/3.jpg"/>
                    <SwipeSlideImage imgSource="/images/slider/1.jpg"/>
                </SliderImageWrapper>
              </ThemeSlider>

            </TopContent> 

            

            <FeaturCategoryWrapper>
                <FeatureCategoryItem 
                  imgSource="/images/category/1.jpg"
                  featureCategory="Travel & Advanture"
                  postCount="6"
                />
                <FeatureCategoryItem 
                  imgSource="/images/category/2.jpg"
                  featureCategory="Road Trips"
                  postCount="6"
                />
                <FeatureCategoryItem 
                  imgSource="/images/category/3.jpg"
                  featureCategory="Camping Trips"
                  postCount="6"
                />
                <FeatureCategoryItem 
                  imgSource="/images/category/4.jpg"
                  featureCategory="Travel Photography"
                  postCount="6"
                />
            </FeaturCategoryWrapper>

            <MainContentWrapper>
              <MainContentLeftWrapper>
                <BlogList>
                  <BigArticle 
                      imgSource="/images/blog/1.jpg" 
                      date="30" month="May" 
                      author="Partricia Doe" 
                      title="Live with no excuses & travel with no regrets" 
                      initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..." 
                      footer="Continue Reading"
                  />
                  <BigArticle 
                      imgSource="/images/blog/2.jpg" 
                      date="30" month="May" 
                      author="Partricia Doe" 
                      title="50 travel essentials you must have" 
                      initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                              et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..." 
                      footer="Continue Reading"
                  />
                </BlogList> 

                <NewsLetter />

                <MorePostWrapper>
                    <SmallArticleWrapper imgSource="/images/blog/sm1.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>
                    <SmallArticleWrapper imgSource="/images/blog/sm2.jpg" date="07" month="May" author="Partricia Doe" title="I am not the same having seen the moon shine on the sky"/>
                    <SmallArticleWrapper imgSource="/images/blog/sm3.jpg" date="07" month="May" author="Partricia Doe" title="Travel and change of place impart new vigor to the mind"/>
                    <SmallArticleWrapper imgSource="/images/blog/sm4.jpg" date="07" month="May" author="Partricia Doe" title="A journey is best measured in friends, rather than miles"/>
                    <SmallArticleWrapper imgSource="/images/blog/sm5.jpg" date="07" month="May" author="Partricia Doe" title="He who would travel happily must travel light"/>
                    <SmallArticleWrapper imgSource="/images/blog/sm6.jpg" date="07" month="May" author="Partricia Doe" title="You will see what a tiny place occupy in the world"/>
                </MorePostWrapper>
                
                <Pagination />
              
              </MainContentLeftWrapper>

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
            </MainContentWrapper>

            <FooterComponent 
              logoImgSource="/images/logo-white.png"
              instaImgURL1="/images/insta/1.jpg"
              instaImgURL2="/images/insta/2.jpg"
              instaImgURL3="/images/insta/3.jpg"
              instaImgURL4="/images/insta/4.jpg"
              instaImgURL5="/images/insta/5.jpg"
              instaImgURL6="/images/insta/6.jpg"
              imageLogoBig="/images/logo-big.png"
            />
          
          </BodyContent>
          
          
          <Script id="menu-script" type="module" src="/static/menu.js" defer> </Script>
          <Script id="custom-script" type="module" src="/static/custom.js" defer> </Script>

      </MainBody>
      
    </React.Fragment>
  )
}
