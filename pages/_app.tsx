import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from 'next/script'
import { useEffect } from "react";
import { useRouter } from "next/router";

/*
import {$} from "jquery";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'aos/dist/aos.css';
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
*/

/* Custom CSS */
import "/styles/style.css";
import "/styles/menu.css";
import "/styles/ionicons/css/ionicons.css";
import "/styles/plugins/swiper/swiper.css";
import "/styles/font-awesome/css/font-awesome.css";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps)=> {

  return (
  
  <React.Fragment>
    
      <Head>
        <title>Life In a Bagpack</title>
        <meta charSet="utf-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="description" content="Life in a bagpack" />
        <meta name="author" content="" />

        <meta property="og:image" content={undefined!==pageProps.blogItem ? `${pageProps.masterURI.host.dev}${pageProps.blogItem.generalImageLib.titleImgURL}`:""}/>
        <meta property="og:title" content={undefined!==pageProps.blogItem ? pageProps.blogItem.title:""}/>
        <meta property="og:type" content="Blog"/>
        <meta property="og:description" content={undefined!==pageProps.blogItem ? pageProps.blogItem.initContent : ""}/>


        <Link rel="shortcut icon"    href="/images/favicon.png" type="image/png" />
        <Link rel="apple-touch-icon" href="/images/apple-touch-icon.png"  />
        <Link rel="apple-touch-icon" href="/images/apple-touch-icon-72x72.png"   />
        <Link rel="apple-touch-icon" href="/images/apple-touch-icon-114x114.png"   />
        <Link rel="apple-touch-icon" href="/images/apple-touch-icon-144x144.png"   />
  
      </Head>  
      
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.js" ></Script>
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" ></Script>
      {/* <Script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossOrigin="anonymous"></Script> */}
      <Script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></Script>
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"  integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous"></Script>
      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.min.js"  integrity="sha384-heAjqF+bCxXpCWLa6Zhcp4fu20XoNIA98ecBC1YkdXhszjoejr5y9Q77hIrv8R9i" crossOrigin="anonymous"></Script>
      
      <Component {...pageProps} />

  </React.Fragment>
  
  )
}

export default App;
