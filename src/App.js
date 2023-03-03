import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Paginations from "./components/Pagination/Paginations";
import Search from "./components/Search/Search";
export default function App() {
	const [pageNumber, setPageNumber] = useState(1);

	const [fetchedData, updateFetchedData] = useState([]);
	const [search, setSearch] = useState("");
	const [status, updateStatus] = useState("");
	const [gender, updateGender] = useState("");
	const [species, updateSpecies] = useState("");

	let { info, results } = fetchedData;

	const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
	useEffect(() => {
		(async () => {
			const data = await fetch(api);
			const res = await data.json();
			updateFetchedData(res);
		})();

		return () => {};
	}, [api]);

	return (
		<div className="App">
			<h1
				style={{
					textShadow:
						"-2px -1px 11px #75ef9e ,-2px -1px 12px #75ef9e ",
					color: "white",
				}}
				className="text-center my-4 ">
				Rick and Morty
			</h1>
			<Search
				setPageNumber={setPageNumber}
				setSearch={setSearch}></Search>
			<div className="container">
				<div className="row">
					<Filters
						pageNumber={pageNumber}
						status={status}
						updateStatus={updateStatus}
						updateGender={updateGender}
						updateSpecies={updateSpecies}
						setPageNumber={setPageNumber}></Filters>
					<div className="col-8">
						<div className="row">
							<Cards results={results}></Cards>
						</div>
					</div>
				</div>
			</div>

			<Paginations
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
				info={info}></Paginations>
		</div>
	);
}
