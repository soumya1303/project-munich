import React from "react";

const AuthorIntroText=(props)=>{
    return (
            <React.Fragment>
                <h3>{props.authProfileInfo.introParagraphs[0].paraText}</h3>
                <p>{props.authProfileInfo.introParagraphs[1].paraText}</p>
                <p>{props.authProfileInfo.introParagraphs[2].paraText}</p>
                <p>{props.authProfileInfo.introParagraphs[3].paraText}</p>
                <p>{props.authProfileInfo.introParagraphs[4].paraText}</p>
                <p>{props.authProfileInfo.introParagraphs[5].paraText}</p>
            </React.Fragment>
        )
}

export default AuthorIntroText;