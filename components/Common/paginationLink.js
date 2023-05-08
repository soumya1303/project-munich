import React from "react";

const PaginationLink = (props)=>{

    return <li onClick={()=>{
                return (props.onPageClick(props.blogItems))
            }}>
                <a className="page-number">{props.pageNumber}</a>
              </li>
}

export default PaginationLink;