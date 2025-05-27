import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/560px-Star_Wars_Logo.svg.png" style={{width: "100px"}}alt="" />
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="#">
						<button className="btn btn-primary">Favorites 0</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};