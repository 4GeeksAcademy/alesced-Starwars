import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


const CardElement = ({name, uid, type}) =>{
    const { dispatch } = useGlobalReducer();

    const handleAddFavorite = (e) => {
        e.preventDefault();
        dispatch({ type: 'add_Favorite', payload: name });
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/single/${type}/${uid}`} className="btn btn-primary">
                    More
                </Link>
                <a href="#" className="btn btn-primary ms-5" 
                style={{ width: "40px", height: "39px" }} 
                onClick={ handleAddFavorite}
                >
                    <i className="fa-solid fa-heart"></i>
                </a>
            </div>
        </div>
    )
}

export default CardElement;