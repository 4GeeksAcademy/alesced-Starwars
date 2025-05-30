import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getListData } from "../services/services.js";
import CardElement from "../components/CardElement.jsx";
import { Navbar } from "../components/Navbar.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// funcion para obtener los datos de la lista del fecth
	// type: tipo de elemento a obtener (people, planets, vehicles)
	// action: tipo de accion a despachar al store
	const HandleGetData = async (type, action) => {
		const data = await getListData(type);
		dispatch({ type: action, payload: data });
	}


	useEffect(() => {
		// Llamadas a mi funcion HandleGetData para obtener datos de personas, planetas y vehículos
		HandleGetData("people", 'get_People');
		HandleGetData("planets", 'get_Planets');
		HandleGetData("vehicles", 'get_Vehicles');

	}, []);

	return (
		<>
			<div className=" m-5">
				<div>
					<h5 style={{ color: "white"}}>List of People</h5>
				</div>
				<div>
					<ul
						className="d-flex flex-row overflow-auto"
						style={{
							listStyle: "none",
							padding: 0,
							gap: "1rem",
							scrollSnapType: "x mandatory",
							WebkitOverflowScrolling: "touch",
						}}
					>
						{store.people.map((people) => (
							<li key={people.uid} style={{ scrollSnapAlign: "start"}}>
								<CardElement name={people.name} uid={people.uid} type="people" />
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5 style={{ color: "white"}}>List of Planets</h5>
					<div>
						<ul
							className="d-flex flex-row overflow-auto"
							style={{
								listStyle: "none",
								padding: 0,
								gap: "1rem",
								scrollSnapType: "x mandatory",
								WebkitOverflowScrolling: "touch",
							}}
						>
							{store.planets.map((planet) => (
								<li key={planet.uid} style={{ scrollSnapAlign: "start" }}>
									<CardElement name={planet.name} uid={planet.uid} type="planets" />
								</li>
							))}
						</ul>

						<ul
							className="d-flex flex-row overflow-auto"
							style={{
								listStyle: "none",
								padding: 0,
								gap: "1rem",
								scrollSnapType: "x mandatory",
								WebkitOverflowScrolling: "touch",
							}}
						>
							{store.vehicles.map((vehicle) => (
								<li key={vehicle.uid} style={{ scrollSnapAlign: "start" }}>
									<CardElement name={vehicle.name} uid={vehicle.uid} type="vehicles" />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}; 