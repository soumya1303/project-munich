import React from "react";


// const preLoaderParent = styled.div``;
// const preLoaderWrapper = styled.div``;
// const preLoaderLoader = styled.div``;
// const preLoaderInner = styled.div``;

const PreLoader = ()=>{

    // return (
    // <preLoaderParent id="preloader" className="loader_show">
    //     <preLoaderWrapper className="loader-wrap">
    //         <preLoaderLoader className="loader">
    //             <preLoaderInner className="loader-inner"></preLoaderInner>
    //         </preLoaderLoader>
    //     </preLoaderWrapper>
    // </preLoaderParent>)

    return (
    <div id="preloader" className="loader_show">
    {/* <div id="preloader" >  */}
        <div className="loader-wrap">
            <div className="loader">
                <div className="loader-inner"></div>
            </div>
        </div>
    </div>)
}

export default PreLoader;