import Image from "next/image";

const SingleImage = (props)=>{
    return (<div className="col-lg-12 col-md-12 col-sm-12 img_box" data-aos="overlay-right">
                <Image src={props.imgURL} alt="BlogImage" width={props.width} height={props.height}/>
            </div>)
}

export default SingleImage;