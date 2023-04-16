import React from "react";

const AuthorIntroWrapper = (props)=>{
    return (<React.Fragment>
            <div className="author_wrapper">
                <div className="row">
                    {props.children}
                </div>
            </div>
    </React.Fragment>)
}

export default AuthorIntroWrapper;