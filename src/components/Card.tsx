import { FunctionComponent } from "react";
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from "react-client-session"


interface BookCardProps {

}

const BookCard: FunctionComponent<BookCardProps> = () => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const add_to_cart = (id: String) => {
        let cart = JSON.parse(ReactSession.get("cart"))
        cart.push(id)
        ReactSession.set("cart", JSON.stringify(cart))
        alert("added!");
    }

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("http://localhost:8000/api/book/all-books")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <h1>Loading data</h1>;
    else if (isError) return <h1>Error loading data</h1>;
    else if (!data.length) return <h1>No data available</h1>;
    else {
        return (
            <div className="container">
                <div className=" d-lg-flex justify-content-lg-around ">
                    {data.map((item) => (
                        <div className="card col-2 col-sm-6 m-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.image} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Name: {item.name}</h5>
                                    <p className="card-text">Author: {item.author}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: {item.price}</li>
                                    <li className="list-group-item">Sold: {item.sold}</li>
                                    <li className="list-group-item">Release date: {item.release_date}</li>
                                </ul>
                                <div className="card-body d-flex justify-content-around">
                                    <button className="card-button" onClick={() => { add_to_cart(item._id)} } >buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default BookCard;
