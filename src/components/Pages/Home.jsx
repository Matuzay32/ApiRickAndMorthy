import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import Paginations from "../Pagination/Paginations";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function Home() {
	const [pageNumber, setPageNumber] = useState(1);
	const [fetchedData, updateFetchedData] = useState([]);
	const [search, setSearch] = useState("");
	const [status, updateStatus] = useState("");
	const [gender, updateGender] = useState("");
	const [species, updateSpecies] = useState("");

	let { info, results } = fetchedData;
	const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
	const { loading } = useFetch(api, updateFetchedData);

	return (
		<div className="App" style={{ paddingTop: "7rem" }}>
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
							{loading && (
								<div>
									<h1>Loading....</h1>
								</div>
							)}
							<Cards
								page="/"
								results={results}></Cards>
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
