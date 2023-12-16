import { Cards } from "../../Components/Cards/Cards";
import { Categories } from "../../Components/Categories/Categories";
import { Navbar } from "../../Components/NavBar/Navbar"

export const Home = () => {
    return(
        <>
            <header>
                <Navbar/>
                <Categories/>
            </header>
            <body>
                <div>
                    <Cards/>
                </div>
            </body>
        </>
    );
}