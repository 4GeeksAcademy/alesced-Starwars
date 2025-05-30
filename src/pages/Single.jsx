// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";
import { getListbyId, getListData } from "../services/services";

// Define and export the Single component which displays individual item details.
export const Single = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { typeElement, idElement } = useParams()
  const [element, setelement] = useState(null)

  const handlegetelement = async (type, id) => {
    const element = await getListbyId(type, id)
    setelement(element)
  }

  useEffect (() => {
    handlegetelement(typeElement, idElement)

  }, [idElement, typeElement]);

  if (!element) return <div className="text-center text-gray">Cargando...</div>;

  return (
    <div className="container text-center mt-3">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
       <div className="d-grid" style={{ gridTemplateRows: "1fr 1fr", display: "grid" }}>
        {/* Primera fila: dos columnas */}
        <div className="row bg-dark mb-3" style={ {height: "100%" }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ borderRight: "1px solid #ccc" }}>
            <img
              src={`https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_23e5105b.jpeg?region=387%2C27%2C1350%2C760`}
              className="img-fluid rounded"
              alt={element.name}
              style={{ objectFit: "cover" }}
              onError={e => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column text-start text-white">
            <h5 className="card-title mt-2">{element.name || "Card title"}</h5>
            <p className="card-text mt-3">{element.description || "Descripción no disponible."}</p>
            <p className="card-text"><small className="text-white">Last updated 3 mins ago</small></p>
          </div>
        </div>
        {/* Segunda fila: cuatro columnas */}
        <div className="row" style={{ height: "100%"}} >
          <div className="col-md-3 text-white mt-5" style={{ borderRight: "1px solid #ccc" }}>
            <strong>Propiedad 1:</strong>
            <div>{element.height || element.population || "N/A"}</div>
          </div>
          <div className="col-md-3 text-white mt-5" style={{ borderRight: "1px solid #ccc" }}>
            <strong>Propiedad 2:</strong>
            <div>{element.mass || element.climate || "N/A"}</div>
          </div>
          <div className="col-md-3 text-white mt-5" style={{ borderRight: "1px solid #ccc" }}>
            <strong>Propiedad 3:</strong>
            <div>{element.gender || element.terrain || "N/A"}</div>
          </div>
          <div className="col-md-3 text-white mt-5">
            <strong>Propiedad 4:</strong>
            <div>{element.birth_year || element.diameter || "N/A"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
