import React, { useState } from "react";
import styles from "./Search.module.scss";
export default function Search({
	setSearch,
	setPageNumber,
}) {
	const [query, setQuery] = useState("");

	return (
		<div className={`${styles.contenedor} contenedor`}>
			<div className="container">
				<form
					className="d-flex justify-content-center w-100"
					role="search">
					<input
						onChange={(e) => {
							setPageNumber(1);
							setQuery(e.target.value);
							if (!e.target.value) {
								setSearch("");
							}
						}}
						className={`${styles.input} form-control me-2`}
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							setSearch(query);
						}}
						className="btn btn-success"
						type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
