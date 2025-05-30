import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


const CardElement = ({name, uid, type}) =>{
    const { dispatch } = useGlobalReducer();

    const handleAddFavorite = (e) => {
        e.preventDefault();
        dispatch({ type: 'add_Favorite', payload: name });
    };

    return (
        <div className="card" style={{ width: "18rem", margin: "10px", height: "20rem", backgroundColor: "grey"}}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_23e5105b.jpeg?region=387%2C27%2C1350%2C760" 
            className="card-img-top" 
            alt="..." 
            style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/single/${type}/${uid}`} className="btn btn-primary bg-dark border-0">
                    More
                </Link>
                <a href="#" className="btn btn-primary bg-dark ms-2 border-0" 
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