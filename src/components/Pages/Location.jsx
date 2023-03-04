import React, { useEffect, useState } from "react";
import InputGroup from "../Filters/Category/InputGroup";
import Cards from "../Cards/Cards";
import styles from "../Filters/Filter.module.scss";

const Location = () => {
	let [results, setResults] = useState([]);
	let [info, setInfo] = useState([]);
	let { type, dimension, name } = info;
	let [id, setID] = useState(1);
	const [episodies, setEpisodies] = useState(1);

	let api = `https://rickandmortyapi.com/api/location/${id}`;
	const apiE = "https://rickandmortyapi.com/api/location";

	useEffect(() => {
		(async () => {
			const res = await fetch(apiE);
			const data = await res.json();

			setEpisodies(data?.info?.count);
		})();

		return () => {};
	}, [apiE]);

	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((res) =>
				res.json()
			);
			setInfo(data);

			let a = await Promise.all(
				data.residents.map((x) => {
					return fetch(x).then((res) => res.json());
				})
			);
			setResults(a);
		})();
	}, [api]);

	return (
		<div
			className="container "
			style={{ paddingTop: "10rem" }}>
			<div className="row mb-3">
				<h1 className="text-center  mb-3  p-3">
					Location:{" "}
					<span className="text-success">
						{name === "" ? "Unknown" : name}
					</span>
				</h1>
				<h5 className="text-center">
					Dimension:{" "}
					{dimension === "" ? "Unknown" : dimension}
				</h5>
				<h6 className="text-center">
					Type: {type === "" ? "Unknown" : type}
				</h6>
			</div>
			<div className="row">
				<div className="col-lg-3 col-12 mb-4">
					<h4 className="text-center mb-4">
						Pick Locations
					</h4>
					<InputGroup
						name="Location"
						changeID={setID}
						total={episodies}
					/>
				</div>
				<div className="col-lg-8 col-12">
					<div className="row">
						<Cards
							page="/location/"
							results={results}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
