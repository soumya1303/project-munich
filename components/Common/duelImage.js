import Image from "next/image";

const DuelImage = (props)=>{
    return (<div className="col-lg-6 col-md-6 col-sm-6 img_box" data-aos="overlay-right">
                <Image src={props.imgURL} alt="BlogPostImage" width={props.width} height={props.height}></Image>
            </div>)
}

export default DuelImage;