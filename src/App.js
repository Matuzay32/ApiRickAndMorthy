import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./components/Pages/Episodes";
import Location from "./components/Pages/Location";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./components/Pages/Home";
import CardDetails from "./components/Cards/CardDetails";

export default function App() {
	return (
		<Router>
			<div className="App">
				<Navbar></Navbar>
			</div>

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/:id"
					element={<CardDetails />}></Route>

				<Route
					path="/episodes"
					element={<Episodes />}></Route>

				<Route
					path="/episodes/:id"
					element={<CardDetails />}></Route>

				<Route
					path="/location"
					element={<Location />}></Route>

				<Route
					path="/location/:id"
					element={<CardDetails />}></Route>
			</Routes>
		</Router>
	);
}
