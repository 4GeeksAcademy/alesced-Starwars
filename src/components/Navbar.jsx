import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	//puedes utilizar useGlobalReducer para obtener el case actualizado del store
	const { store, dispatch } = useGlobalReducer();

	const handleRemoveFavorite = (fav) => {
        dispatch({ type: 'remove_Favorite', payload: fav });
    };

	return (
		<nav className="navbar ">
			<div className="container" >
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/560px-Star_Wars_Logo.svg.png" style={{width: "100px"}}alt="" />
					</span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							 {store.favorites.length === 0 ? (
                                <li><span className="dropdown-item">No favorites</span></li>
                            ) : (
                                store.favorites.map((fav, idx) => (
                                    <li key={idx}>
                                        <span className="dropdown-item">{fav.name ? fav.name : fav}</span>
										 <button
                                            className="btn btn-sm btn-outline-danger ms-2"
                                            onClick={() => handleRemoveFavorite(fav)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </li>
                                ))
                            )}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};