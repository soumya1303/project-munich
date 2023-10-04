import React from "react";
import Link from "next/link";
const PaginationLink = (props)=>{
    /*
    return <li onClick={()=>{return (props.onPageClick(props.blogItems))}}>
                <a className="page-number">{props.pageNumber}</a>
            </li>
    */
   return (<li><Link href="#pagination_link_id" className="page-number" onClick={()=>{
        return props.onPageClick(props.blogItems)
   }}>{props.pageNumber}</Link></li>)
}

export default PaginationLink;