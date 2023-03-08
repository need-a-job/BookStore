import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from "react-client-session";

interface YourBooksCardsProps {

}

const YourBooksCards: FunctionComponent<YourBooksCardsProps> = () => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const userId = ReactSession.get("_id");
        axios
            .get(`http://localhost:8000/api/book/user-books/userId=${userId}`)
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
            <div className="app" style={{ marginLeft: "5em" }}>
                {data.map((item) => (
                    <div className="card col m-3">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.author}</p>
                            <p className="card-text">{item.price}</p>
                            <p className="card-text">{item.sold}</p>
                            <p className="card-text">{item.release_date}</p>
                            <a href="#" className="btn btn-primary">
                                buy
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}



export default YourBooksCards;