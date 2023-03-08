import { FunctionComponent, } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import YourBooksCards from "./Your_Books_Card";
import { NavBar } from "./Navigate_page";
import Footer from "./Footer";

interface YourBooksProps {

}

const YourBooks: FunctionComponent<YourBooksProps> = () => {

    return (
        <div>
            <NavBar />
            <h1 className="text-center text-white bg-dark">Your cards</h1>
            <div className="container"><div className=" d-lg-flex justify-content-lg-around "> <YourBooksCards />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default YourBooks;