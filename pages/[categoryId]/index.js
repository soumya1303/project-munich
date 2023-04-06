import React from "react";
import Script from "next/script";
import {useRouter} from "next/router"; 

import MainBody from "../../components/Category/mainBody";
import MousePointer from "../../components/Category/mousePointer";
import BodyContent from "../../components/Category/bodyContent";
import TopContent from "../../components/Category/topContent";
import MainNavigation from "../../components/Category/mainNavigation";
import ThemeSliderWrapper from "../../components/Category/themeSliderWrapper";
import SwiperContainerWrapper from "../../components/Category/swiperContainerWrapper";
import SwiperWrapper from "../../components/Category/swiperWrapper";
import SwiperPagination from "../../components/Category/swiperPagination";
import SwiperSlide from "../../components/Category/swiperSlide";
import MainContentWrapper from "../../components/Category/mainContentWrapper";
import MainContentLeftWrapper from "../../components/Category/MainContentLeftWrapper";
import BigArticleWrapper from "../../components/Category/BigArticleWrapper";
import BigArticle from "../../components/Category/bigArticle";
import SmallArticleWrapper from "../../components/Category/SmallArticleWrapper";
import SmallArticle from "../../components/Category/smallArticle";
import Pagination from "../../components/Category/Pagination";
import SideBar from "../../components/Common/sideBar";
import FooterComponent from "../../components/Common/footerComponent";

const Category = ()=>{

    const router = useRouter();
    const categoryId = router.query.categoryId;
    console.log(`category Id is ${categoryId}`);

    return(
    <React.Fragment>

        <MainBody>
            <MousePointer />
            <BodyContent>
                
                <TopContent>
                    <MainNavigation imgSource="/images/common/logo-white.png"/>
                    <ThemeSliderWrapper>
                        <SwiperContainerWrapper>
                            <SwiperWrapper>
                                <SwiperSlide 
                                    imgSource="/images/slider/4.jpg"
                                    date="4"
                                    month="June"
                                    title="Live with no excuses & travel with no regrets"
                                    initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
												et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..."
                                    footer="Continue Reading"
                                />
                                <SwiperSlide 
                                    imgSource="/images/slider/5.jpg"
                                    date="4"
                                    month="June"
                                    title="50 travel essentials you must have"
                                    initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
												et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..."
                                    footer="Continue Reading"
                                />
                                <SwiperSlide 
                                    imgSource="/images/slider/6.jpg"
                                    date="4"
                                    month="June"
                                    title="With age, comes wisdom. With travel, comes understanding"
                                    initContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
												et dolore magina aliqua. Quis ipsum suspendise ultrces gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..."
                                />
                            </SwiperWrapper>
                            <SwiperPagination />

                        </SwiperContainerWrapper>
                    </ThemeSliderWrapper>
                </TopContent>

                <MainContentWrapper>
                    <MainContentLeftWrapper>
                        <BigArticleWrapper>
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

                        </BigArticleWrapper>
                        <SmallArticleWrapper>
                            <SmallArticle imgSource="/images/blog/sm1.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>
                            <SmallArticle imgSource="/images/blog/sm2.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>
                            <SmallArticle imgSource="/images/blog/sm3.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>
                            <SmallArticle imgSource="/images/blog/sm4.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>
                            <SmallArticle imgSource="/images/blog/sm5.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>
                            <SmallArticle imgSource="/images/blog/sm6.jpg" date="07" month="May" author="Partricia Doe" title="With age, comes wisdom. With travel, comes understanding"/>

                        </SmallArticleWrapper>

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

export default Category;
