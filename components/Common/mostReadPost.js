import React from "react";
import Image from "next/image";
import Link from "next/link";

const MostReadPost = (props)=>{
    return (
        <div className="popular_post_item">
            <div className="popular_post_item_wrapper">
            <Image src={props.imgSource} alt="most_read_post_img" width={370} height={225}/>
                <div className="popular_post_item_content">
                    <h4 className="popular_post_item_title">
                        <Link href={`/category/${props.catId}/${props.blogId}`}>{props.title}</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default MostReadPost;