import React from "react";

const Pagination =()=>{
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
}

export default Pagination;