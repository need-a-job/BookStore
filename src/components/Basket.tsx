import { FunctionComponent } from "react";
import { NavBar } from "./Navigate_page";
import Footer from "./Footer";
import YourBooks from "./Your_Books";

interface ShoppingBasketProps {

}

const ShoppingBasket: FunctionComponent<ShoppingBasketProps> = () => {
    return (<div>
        <NavBar />


        <Footer />
    </div>);
}

export default ShoppingBasket;