import React from "react";

const ParagraphWrapper = (props)=>{
    
    return (
                <div dangerouslySetInnerHTML={{__html:props.textContent}} />
            )
}

export default ParagraphWrapper;