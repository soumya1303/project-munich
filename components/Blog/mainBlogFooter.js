import React from "react";

const MainBlogFooter = ()=>{
    return(
        <React.Fragment>
            <div className="post_footer">
                <div className="post_share" data-aos="fade-up" data-aos-duration="700">
                    <ul className="share_list">
                        <li>Share:</li>
                        <li data-aos="fade-up" data-aos-duration="500"><a href="#"><i className="ion-social-facebook"></i></a></li>
                        <li data-aos="fade-up" data-aos-duration="700"><a href="#"><i className="ion-social-twitter"></i></a></li>
                        <li data-aos="fade-up" data-aos-duration="900"><a href="#"><i className="ion-social-dribbble"></i></a></li>
                        <li data-aos="fade-up" data-aos-duration="1100"><a href="#"><i className="ion-social-instagram"></i></a></li>
                        <li data-aos="fade-up" data-aos-duration="1300"><a href="#"><i className="ion-social-pinterest"></i></a></li>
                    </ul>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default MainBlogFooter;