import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
// import "../../App.scss";

const Navbar = () => {
	return (
		<>
			<nav
				className={`${styles.navBg2} navbar navbar-expand-lg  mb-4 p-3 sticky-top`}
				style={{ zIndex: 999 }}>
				<div className="container">
					<Link
						to="/"
						className="navbar-brand fs-3 ubuntu">
						<span
							style={{
								color: "white",
								textShadow:
									"0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00, 0 0 60px #00ff00, 0 0 70px #00ff00",
							}}>
							Rick & Morty
						</span>
					</Link>
					<style jsx>{`
						button[aria-expanded="false"] .close {
							display: none;
						}
						button[aria-expanded="true"] .open {
							display: none;
						}
					`}</style>
					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="fas fa-bars open text-white "></span>
						<span class="fas fa-times close text-white"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav fs-5">
							<NavLink
								to="/"
								className={`nav-link text-success ${styles.links}`}>
								Characters
							</NavLink>

							<Link
								to="/episodes"
								className={`nav-link text-success ${styles.links}`}>
								Episode
							</Link>

							<Link
								activeClassName="active"
								className={`nav-link text-success ${styles.links}`}
								to="/location">
								Location
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
