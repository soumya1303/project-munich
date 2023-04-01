import React from "react";


const BottomFooterCopyright = ()=>{

    const date = new Date;
    const year = date.getFullYear();
    const websiteName = "www.lifeinabagpack.com";
    const programmer = "Soumyadeep Ghosh";
    
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="copyright">
                    <p> &copy; {year} - {websiteName}. Created by {programmer}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default BottomFooterCopyright;