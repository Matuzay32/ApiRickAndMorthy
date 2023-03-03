import React from "react";

const FilterBTN = ({
	input,
	task,
	setPageNumber,
	index,
	name,
}) => {
	return (
		<div>
			<style jsx>
				{`
					.miRadioBtn:checked + label {
						box-shadow: 4px 5px 12px #75ef9e;
						background-color: #75ef9e;
						color: white;
						border: none;
					}
					input[type="radio"] {
						display: none;
					}
				`}
			</style>

			<div className="form-check">
				<input
					className="form-check-input miRadioBtn"
					type="radio"
					name={name}
					id={`${name}-${index}`}
				/>
				<label
					onClick={(x) => {
						task(input);
						setPageNumber(1);
					}}
					className="btn btn-outline-success"
					for={`${name}-${index}`}>
					{input}
				</label>
			</div>
		</div>
	);
};

export default FilterBTN;
