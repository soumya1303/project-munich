import React from "react";
import Image from "next/image";

const StandardFooterElements = (props)=>{
    return (
        <div className="col-lg-6 col-md-6">
            <div className="footer_widget pd_lt">
                <div className="blend-logo">
                    <a href="#"><Image src={props.imageLogoBig} alt="bottom_logo" width={524} height={113}/></a>
                </div>
            </div>
        </div>
    )
}

export default StandardFooterElements;