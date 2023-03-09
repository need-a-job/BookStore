import { FunctionComponent } from "react";
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

interface BookCardProps {

}

const BookCard: FunctionComponent<BookCardProps> = () => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

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
                        <div className="card col m-3 d-sm-flex justify-content-sm-center" style={{ width: "18rem" }}>
                            <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.author}</p>
                                <p className="card-text">{item.price}</p>
                                <p className="card-text">{item.sold}</p>
                                <p className="card-text">{item.release_date}</p>
                                <button className="btn btn-primary">
                                    buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default BookCard;
