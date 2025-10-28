import React from "react";
import Link from "next/link";
import Image from "next/image";

const InstagramItem = (props)=>{
    return (<li>
                <Link href="https://www.instagram.com" target="_blank">
                    <Image src={props.instaImgURL} width={170} height={170} alt="instgram_img"/>
                </Link>
            </li>)
}

export default InstagramItem;