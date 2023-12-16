import { Link } from "react-router-dom";
import { data } from "../../Utils/mocks/dataMock";
import { CarouselItem } from "../Carousel/CarouselItem";
import './Cards.css';

export const Cards = () => {
	return (
		<div className="container">
			<div className="row">
				{data.map((d, key) => {
					return (
						<div className="col-md-4 col-lg-3 col-xl-3 col-12" key={key}>
							<div
								class="card border-0 border-0 p-2"
								style={{ width: "18rem" }}
							>
								<Link to={`/cardPage/${d.id}`} state={{content: d}} className="linkItem">
									<div>
										{d.images && <CarouselItem images={d.images} key={key} />}
										<div className="card-body text-start">
											<div className="d-flex justify-content-between">
												<p className="fw-bold m-0">
													{d.country}, {d.city}
												</p>
												<i className="bi bi-star"> 4.55</i>
											</div>
											<p className="m-0 text-secondary">{`${(
												Math.random() *
												(1000 - 10)
											).toFixed(0)} kilometers away`}</p>
											<p className="m-0 text-secondary">
												{d.startDate} - {d.endDate}
											</p>
											<p className="m-0">
												<span className="fw-semibold">
													{(Math.random() * (100 - 75) + 75).toFixed(0)} $
												</span>{" "}
												night
											</p>
										</div>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
				;
			</div>
		</div>
	);
};
