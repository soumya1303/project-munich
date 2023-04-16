import React from "react";

const AuthorIntroTextContainer=(props)=>{
    return (<React.Fragment>
                <div className="col-lg-6">
                    <div className="author_info">
                        {props.children}
                    </div>
                </div>
            </React.Fragment>
           )
}

export default AuthorIntroTextContainer;