
const SubContentWrapper = (props)=>{

    return(
        <div className="main-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-4">{props.children}</div>
                </div>
            </div>
        </div>
    )

}

export default SubContentWrapper;