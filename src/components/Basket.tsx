import { FunctionComponent } from "react";
import { NavBar } from "./Navigate_page";
import Footer from "./Footer";
import YourBooks from "./Your_Books";

//        let cart = JSON.parse(ReactSession.get("cart"))

interface ShoppingBasketProps {

}

const ShoppingBasket: FunctionComponent<ShoppingBasketProps> = () => {
    return (<div>
        <NavBar />


        <Footer />
    </div>);
}

export default ShoppingBasket;