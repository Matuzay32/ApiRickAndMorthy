import React from "react";
import styles from "./Cards.module.scss";

export default function Cards({ results }) {
	return (
		<>
			{results
				? results?.map(
						({
							id,
							name,
							image,
							location,
							status,
						}) => {
							return (
								<div
									key={id}
									className="col-4 mb-5">
									<div
										className={`${styles.card} card`}>
										<img
											className="card-img-top"
											src={image}
											alt={`${name}${id}`}
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
													{location.name}
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
				  )
				: "No character found :/"}
		</>
	);
}
