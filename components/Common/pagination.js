
import PaginationLink  from "./paginationLink";

const Pagination = ({blogList, itemsPerPage, onPageClick})=>{

    var blogCount = blogList.length;    
    
    const pageCount =  blogCount%itemsPerPage === 0 ? blogCount/itemsPerPage : (blogCount-(blogCount%itemsPerPage))/itemsPerPage+1;
    
    const paginatedBlogItemsList=[];

    var i=0;
    
    for (var j=0; j<pageCount; j++){
        var id=j;
        var pageNumber=j+1;
        var blogItems=[];
        for (var k=0; k<itemsPerPage; k++){
            blogList[i+k] !==undefined && blogItems.push(blogList[i+k])
        }
        
        var paginatedBlogItems = {
            id:id,
            pageNumber:pageNumber,
            blogItems:blogItems
        }
        paginatedBlogItemsList.push(paginatedBlogItems);

        i = i + itemsPerPage;
    }

    return(
        <div className="pagination-div">
            <ul className="pagination">
                {
                    paginatedBlogItemsList.map((e)=>{
                        return (<PaginationLink
                                    id="pagination_link_id"
                                    key={e.id} 
                                    pageNumber={e.pageNumber} 
                                    blogItems={e.blogItems} 
                                    onPageClick = {onPageClick}
                                    />)
                    })
                }
            </ul>
        </div>
    )
    
}

export default Pagination;