import { categoriesMock } from "../../Utils/mocks/categoriesMock";
import "./Categories.css";
import parse from "html-react-parser";

export const Categories = () => {
	return (
		<div className="container-fluid position-relative d-flex flex-row flex-grow-1 w-100 overflow-auto justify-content-between">
			{categoriesMock.map((category, k) => {
				return (
					<a className="categories" key={k}>
						{parse(category?.icon)}
						<span className="d-block">{category.title}</span>
					</a>
				);
			})}
		</div>
	);
};
