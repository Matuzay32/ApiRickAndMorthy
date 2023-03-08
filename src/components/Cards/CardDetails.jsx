import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "../Cards/Cards.module.scss";

export default function CardDetails() {
	const { id } = useParams();
	const [fetchedData, updateFetchedData] = useState([]);

	const url = `https://rickandmortyapi.com/api/character/${id}`;
	const { loading } = useFetch(url, updateFetchedData);

	console.log(fetchedData);
	const {
		species,
		name,
		status,
		gender,
		location,
		image,
		type,
	} = fetchedData;
	return (
		<div class="container d-flex justify-content-center align-items-center vh-100">
			<div className={`${styles.card} card`}>
				<img
					className="card-img-top"
					src={image}
					alt={`${name}`}
				/>
				<div className="card-body">
					<h4 className="card-title text-success">
						{name}
					</h4>
					<div>
						<h5 className="card-text">
							last location
						</h5>
						<p className="card-text fs-5">
							{location?.name}
						</p>
					</div>
					{status === "Alive" ? (
						<div
							className={`${styles.badge} badge bg-success position-absolute`}>
							{status}
						</div>
					) : status === "Dead" ? (
						<div
							className={`${styles.badge} badge bg-danger position-absolute`}>
							{status}
						</div>
					) : (
						<div
							className={`${styles.badge} badge bg-primary position-absolute`}>
							{status}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
