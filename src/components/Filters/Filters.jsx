import React from "react";
import Gender from "./Category/Gender";
import Speicies from "./Category/Speicies";
import Status from "./Category/Status";
import styles from "./Filter.module.scss";

const Filter = ({
	pageNumber,
	setPageNumber,
	updateStatus,
	updateGender,
	updateSpecies,
}) => {
	let clear = () => {
		updateStatus("");
		updateGender("");
		updateSpecies("");
		setPageNumber(1);
		window.location.reload(false);
	};
	return (
		<div className="col-lg-3 col-12 mb-5">
			<div className="text-center fw-bold fs-4 mb-2">
				Filters
			</div>
			<div
				style={{ cursor: "pointer" }}
				onClick={clear}
				className={`text-success text-decoration-underline text-center mb-3 ${styles.clearFilters}`}>
				Clear Filters
			</div>
			<div className="accordion" id="accordionExample">
				<Status
					setPageNumber={setPageNumber}
					updateStatus={updateStatus}
				/>
				<Speicies
					setPageNumber={setPageNumber}
					updateSpecies={updateSpecies}
				/>
				<Gender
					setPageNumber={setPageNumber}
					updateGender={updateGender}
				/>
			</div>
		</div>
	);
};

export default Filter;
