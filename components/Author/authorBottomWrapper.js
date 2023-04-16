import React from "react";

const AuthorBottomWrapper=(props)=>{
    return (
        <React.Fragment>
            <div className="author_bottom">{props.children}</div>
        </React.Fragment>
    )
}
export default AuthorBottomWrapper;