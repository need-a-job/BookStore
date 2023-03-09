import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from "react-client-session";

interface YourBooksCardsProps {

}

const YourBooksCards: FunctionComponent<YourBooksCardsProps> = () => {
    // edit button need to get specific id from somewhere
    const edit = () => {
        axios.get(`http://localhost:8000/api/book/book?_id=`)
    }

    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const userId = ReactSession.get("_id");
        axios
            .get(`http://localhost:8000/api/book/user-books?userId=${userId}`)
            .then((response) => {
                setData(response.data.message);
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
            <div className="app">
                {data.map((item) => (
                    <div className="card col m-3">
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
                                <button className="card-button">Edit</button>
                                <button className="card-button">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}



export default YourBooksCards;