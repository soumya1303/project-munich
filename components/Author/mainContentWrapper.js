const MainContentWrapper = (props)=>{
    return (
    			<div className="main-wrapper m_tp_0">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            )
}

export default MainContentWrapper;