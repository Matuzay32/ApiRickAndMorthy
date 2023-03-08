import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
export default function Paginations({
	setPageNumber,
	pageNumber,
	info,
}) {
	const [width, setWidth] = useState(window.innerWidth);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () =>
			window.removeEventListener(
				"resize",
				updateDimensions
			);
	}, []);
	return (
		<>
			<ReactPaginate
				className="pagination justify-content-center my-4 gap-4"
				nextLabel="Next"
				forcePage={
					pageNumber === 1 ? 0 : pageNumber - 1
				}
				marginPagesDisplayed={2}
				pageRangeDisplayed={2}
				previousLabel="Prev"
				previousClassName={`${styles.prev} btn btn-success fs-5 prev ${styles.color}`}
				nextClassName={`btn btn-success fs-5 ${styles.color} ${styles.next}`}
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
