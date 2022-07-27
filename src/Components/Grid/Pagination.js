import React, { Fragment, useEffect, useState } from "react";
import { Page } from "../../Style/Page";

const Pagination = ({ total, page, paginate }) => {
    const [currentPage, setCurrentPage] = useState(page);
    const [totalPage, setTotalPage] = useState(page + 5);

    const RenderPagination = () => {
        let rows = [];
        for (let i = currentPage; i < totalPage; i++) {
            rows.push(<span key={i} onClick={() => paginate(i)} className={page === i ? 'active' : ''}>{i}</span>)
        }

        return rows;
    }

    useEffect(() => {
        if (page > 4) {
            setCurrentPage(currentPage + 1);
            setTotalPage(totalPage + 1);
        }

        if (page === currentPage && page !== 1) {
            setCurrentPage(currentPage - 1);
            setTotalPage(totalPage - 1);
        }
        // eslint-disable-next-line
    }, [page])

    return (
        <Fragment>
            <Page>
                <span key="back" onClick={() => paginate(page - 1)}>&laquo;</span>
                {RenderPagination()}
                <span key="next" onClick={() => paginate(page + 1)}>&raquo;</span>
            </Page>
        </Fragment>
    )
}

export default Pagination;