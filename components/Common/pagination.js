import React from "react";
import PaginationLink  from "./paginationLink";

const Pagination = (props)=>{
    
    var blogCount = props.blogList.length;
    var blogsPerPage=2;
    
    const pageCount =  blogCount%blogsPerPage === 0 ? blogCount/blogsPerPage : (blogCount-(blogCount%blogsPerPage))/blogsPerPage+1

    const paginatedBlogItemsList=[];

    var i=0;
    
    for (var j=0; j<pageCount; j++){
        var id=j;
        var pageNumber=j+1;
        var blogItems=[];
        for (var k=0; k<blogsPerPage; k++){
            props.blogList[i+k] !==undefined && blogItems.push(props.blogList[i+k])
        }
        i=i+blogsPerPage;
        var paginatedBlogItems = {
            id:id,
            pageNumber:pageNumber,
            blogItems:blogItems
        }
        paginatedBlogItemsList.push(paginatedBlogItems);
    }

    paginatedBlogItemsList.map((page)=>{
        console.log(page)
    })
    
    return(
        <div className="pagination-div">
            <ul className="pagination">
                {
                    paginatedBlogItemsList.map((e)=>{
                        return (<PaginationLink 
                                    key={e.id} 
                                    pageNumber={e.pageNumber} 
                                    blogItems={e.blogItems} 
                                    onPageClick = {props.onPageClick}
                                    />)
                    })
                }
            </ul>
        </div>
    )
    

    /*
    return (
            <div className="pagination-div">
                <ul className="pagination">
                    <li><a className="page-number current" href="#">1</a></li>
                    <li><a className="page-number" href="#">2</a></li>
                    <li><a className="page-number" href="#">3</a></li>
                    <li><a href="#">Older Post</a></li>
                </ul>
            </div>
    )
    */
}

export default Pagination;