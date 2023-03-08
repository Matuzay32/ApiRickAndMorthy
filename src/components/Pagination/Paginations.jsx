import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
export default function Paginations({
	setPageNumber,
	pageNumber,
	info,
}) {
	return (
		<>
			<ReactPaginate
				className="pagination justify-content-center my-4 gap-4"
				nextLabel="Next"
				forcePage={
					pageNumber === 1 ? 0 : pageNumber - 1
				}
				previousLabel="Prev"
				previousClassName={` btn btn-success fs-5 ${styles.color}`}
				nextClassName={` btn btn-success fs-5 ${styles.color}`}
				activeClassName="active"
				pageCount={info?.pages}
				pageClassName={`btn btn-success${styles.numeros}`}
				pageLinkClassName={`btn btn-success  ${styles.numeros}`}
				activeLinkClassName={`btn btn-success  ${styles.active}`}
				onPageChange={({ selected }) =>
					setPageNumber(selected + 1)
				}
			/>
		</>
	);
}
