import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SmallArticle = (props)=>{

    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <article className="blog_post" data-aos="fade-up" data-aos-duration="700">
            <div className="post_img" data-aos="overlay-left">
                <Link href={`/category/${props.catId}/${props.blogId}`}><Image src={props.imgSource} alt="blog" width={370} height={467}/></Link>
                <div className="calendar">
                    <Link href={`/category/${props.catId}/${props.blogId}`}><span className="date">{props.date}</span><br />{props.month}</Link>
                </div>
            </div>
            <div className="post_content">
                <div className="post_header">
                    <div className="author"><a href="#"><i className="ion-android-create"></i>{props.author}</a></div>
                    <h2 className="post_title">
                        <Link href={`/category/${props.catId}/${props.blogId}`}>{props.title}</Link>
                    </h2>
                </div>
            </div>
        </article>
        )
}

export default SmallArticle;