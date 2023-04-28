import React from "react";
import Script from "next/script";
import {useRouter} from "next/router"; 

import MainBody from "../../../components/Common/mainBody";
import MousePointer from "../../../components/Common/mousePointer";
import BodyContent from "../../../components/Common/bodyContent";
import TopContent from "../../../components/Common/topContent";

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
import Pagination from "../../../components/Category/Pagination";
import SideBar from "../../../components/Common/sideBar";
import FooterComponent from "../../../components/Common/footerComponent";

import blogList from "../../../public/blogListMaster";
import categoryList from "../../../public/categoryListMaster";
import authorProfie from "../../../public/authorProfile";
import instagramToken from "../../../public/instagramToken";
import masterURI from "../../../public/masterURI";

const Category = (props)=>{

    return(
        <React.Fragment>
            <MainBody>
                <MousePointer />
                <BodyContent>
                    
                    <TopContent>
                        <MainNavigation imgSource="/images/common/logo-white.png" catList={props.categoryList}/>
                        <ThemeSliderWrapper>
                            <SwiperContainerWrapper>
                                <SwiperWrapper>

                                    {
                                        props.selectBlogList.map((b)=>{
                                            return <SwiperSlide
                                                key={b.blogId}
                                                blogId={b.blogId}
                                                catId={b.catId}
                                                imgSource={b.generalImageLib.bannerImgURL}
                                                date={b.date.toString()}
                                                month={`${b.month} ${b.year.toString().slice(2,4)}`}
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
                                    props.recentBlogList.map((b)=>{
                                        return <BigArticle
                                            key={b.blogId}
                                            blogId={b.blogId}
                                            catId={b.catId}
                                            imgSource={b.generalImageLib.titleImgURL}
                                            date={b.date.toString()}
                                            month={`${b.month} ${b.year.toString().slice(2,4)}`}
                                            author={b.author}
                                            title={b.title}
                                            initContent={b.initContent}
                                            footer="Continue Reading"
                                            masterURI={props.masterURI}
                                            />
                                    })
                                }

                            </BigArticleWrapper>
                            <SmallArticleWrapper>

                                    {
                                        props.recentBlogList.map((b)=>{
                                            return <SmallArticle
                                                key={b.blogId}
                                                blogId={b.blogId}
                                                catId={b.catId}
                                                imgSource={b.generalImageLib.smallTitleImgURL}
                                                date={b.date.toString()}
                                                month={`${b.month} ${b.year.toString().slice(2,4)}`}
                                                author={b.author}
                                                title={b.title}
                                            />
                                        })

                                    }

                            </SmallArticleWrapper>

                            <Pagination />
                        </MainContentLeftWrapper>

                        <SideBar 
                            authorProfie={props.authorProfie}
                            categoryList={props.categoryList}
                            recentBlogList={props.recentBlogList}
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

export default Category;

const getStaticPaths = (context)=>{
    return({
        paths:[
            {
                params:{
                    categoryId:"usa"
                }
            },
            {
                params:{
                    categoryId:"brit"
                }
            },
            {
                params:{
                    categoryId:"europe"
                }
            },
            {
                params:{
                    categoryId:"asiaandothers"
                }
            }
        ],
        fallback:true
    })
}

const getStaticProps = async (context)=>
{

    const catId = context.params.categoryId;

    const selectBlogListArr = blogList.blogListArr.filter((b)=>{
        return b.catId === catId
        
    })
    
    const selectBlogListArrReduced=[];
    var n=0;
    selectBlogListArr.forEach((b)=>{
        if (n<2){
            selectBlogListArrReduced.push(b)
        }
        n++;
    })

    const recentBlogListArr = [];
    var i=0;
    
    selectBlogListArr.forEach((b)=>{
        if (i<3){
            recentBlogListArr.push(b)
        }
        i++;
    })
    
    const resp = await fetch(`${instagramToken.uri}${instagramToken.tokens[1].tokenId}`, {
        method:"GET",
      });

    const {data} = await resp.json();
    
    const instaGramImgArr = data.filter((d)=>{
        return d.media_type==="IMAGE"
        
    })

    const instaGramImgArrReduced=[];
    var j=0;
    instaGramImgArr.forEach((e)=>{
        if (j<6){
            instaGramImgArrReduced.push(e);
            j++;
        }
    })

    return(
        {
            props:  {
                        selectBlogList:selectBlogListArrReduced,
                        recentBlogList: recentBlogListArr,
                        categoryList:categoryList.categoryListArr,
                        authorProfie:authorProfie,
                        instagramImgArr:instaGramImgArrReduced,
                        masterURI:masterURI,
                    }
        }
    )
  
}

export {getStaticPaths, getStaticProps};
