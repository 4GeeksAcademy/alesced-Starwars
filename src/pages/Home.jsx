import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className=" m-5">
			<div>
				<h5>List of People</h5>
			</div>
			<div className="d-flex">
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." class="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
						<a href="#" className="btn btn-primary ms-5" style={{width:"40px", height:"39px"}} >Go somewhere</a>
					</div>
				</div>
			</div>
			<div>
				<h5>List of Planets</h5>
				<div className="d-flex">
					<div className="card" style={{ width: "18rem" }}>
						<img src="..." class="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn btn-primary">Go somewhere</a>
							<a href="#" className="btn btn-primary ms-5" style={{width:"40px", height:"39px"}} >Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h5>List of Vehicles</h5>
				<div className="d-flex">
					<div className="card" style={{ width: "18rem" }}>
						<img src="..." class="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn btn-primary">Go somewhere</a>
							<a href="#" className="btn btn-primary ms-5" style={{width:"40px", height:"39px"}}></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}; 