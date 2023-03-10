import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from "react-client-session";
import { useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import bookSchema from "../validation/book_validation";

interface YourBooksCardsProps {

}

const YourBooksCards: FunctionComponent<YourBooksCardsProps> = () => {
    function getBookIdFromUrl(url: string): string | null {
        const searchParams = new URLSearchParams(url.substring(url.indexOf("?")));
        return searchParams.get("_id");
    }

    const location = useLocation();
    const bookId = getBookIdFromUrl(location.search);

    const deleteBook = (bookId: string) => {
        axios.delete(`http://localhost:8000/api/book/book?_id=${bookId}`)
            .then((response) => {

            })
            .catch((err) => {

            })
    }

    // const editBook = (bookId: string) => {
    //     axios.get(`http://localhost:8000/api/book/book?_id=${bookId}`)
    //         .then((response) => {
    //             return (<section className="vh-100 bg-info">
    //                 <div className="container h-100 -e">
    //                     <div className="row d-flex justify-content-center align-items-center h-100">
    //                         <div className="card text-black">
    //                             <div className="card-body p-md-5">
    //                                 <div className="row justify-content-center">
    //                                     <Formik
    //                                         initialValues={{
    //                                             userId: response.data.userId,
    //                                             name: response.data.name,
    //                                             author: response.data.author,
    //                                             price: response.data.price,
    //                                             release_date: response.data.release_date,
    //                                             children: response.data.children,
    //                                             image: response.data.image,
    //                                         }}
    //                                         validationSchema={bookSchema}
    //                                         onSubmit={(values, { setSubmitting }) => {
    //                                             setTimeout(() => {
    //                                                 alert(JSON.stringify(values, null, 2));
    //                                                 setSubmitting(false);
    //                                             }, 1000);
    //                                             values.userId = ReactSession.get("_id");

    //                                             axios
    //                                                 .patch(
    //                                                     "http://localhost:8000/api/book/book",
    //                                                     values
    //                                                 )
    //                                                 .then((response) => {
    //                                                     values.userId = response.data.user.userId;
    //                                                 });
    //                                         }}
    //                                     >
    //                                         {({ errors, touched }) => (
    //                                             <Form>
    //                                                 <div className="form-group">
    //                                                     <label htmlFor="name">Name</label>
    //                                                     <Field
    //                                                         name="name"
    //                                                         className="form-control"
    //                                                         type="text"
    //                                                     />
    //                                                     {errors.name && touched.name ? (
    //                                                         <div>{errors.name}</div>
    //                                                     ) : null}
    //                                                 </div>

    //                                                 <div className="form-group">
    //                                                     <label htmlFor="author">Author name</label>
    //                                                     <Field
    //                                                         name="author"
    //                                                         className="form-control"
    //                                                         type="text"
    //                                                     />
    //                                                     {errors.author && touched.author ? (
    //                                                         <div>{errors.author}</div>
    //                                                     ) : null}
    //                                                 </div>

    //                                                 <div className="form-group">
    //                                                     <label htmlFor="price">Price</label>
    //                                                     <Field
    //                                                         name="price"
    //                                                         className="form-control"
    //                                                         type="text"
    //                                                     />
    //                                                     {errors.price && touched.price ? (
    //                                                         <div>{errors.price}</div>
    //                                                     ) : null}
    //                                                 </div>

    //                                                 <div className="form-group">
    //                                                     <label htmlFor="release_date">Release date</label>
    //                                                     <Field
    //                                                         name="release_date"
    //                                                         className="form-control"
    //                                                         type="calendar"
    //                                                     />
    //                                                     {errors.release_date && touched.release_date ? (
    //                                                         <div>{errors.release_date}</div>
    //                                                     ) : null}
    //                                                 </div>
    //                                                 <div className="form-check">
    //                                                     <Field
    //                                                         name="children"
    //                                                         className="form-check-input"
    //                                                         type="checkbox"
    //                                                         id="gridCheck"
    //                                                     />
    //                                                     <label className="form-check-label" htmlFor="isBizz">
    //                                                         if this is a book for children press here
    //                                                     </label>
    //                                                 </div>
    //                                                 <div className="form-group">
    //                                                     <div className="form-control">
    //                                                         <label
    //                                                             className="custom-file-label"
    //                                                             htmlFor="image"
    //                                                         >
    //                                                             Choose file
    //                                                         </label>
    //                                                         <Field
    //                                                             type="file"
    //                                                             name="image"
    //                                                             className="form-control"
    //                                                             id="image"
    //                                                             accept="image/*"
    //                                                         />
    //                                                     </div>
    //                                                 </div>
    //                                                 <div className="form-group">
    //                                                     <button type="submit" className="btn btn-primary">
    //                                                         Submit
    //                                                     </button>
    //                                                 </div>
    //                                             </Form>
    //                                         )}
    //                                     </Formik>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //             )


    //         })
    //         .catch((err) => {

    //         });
    // }

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
                                <button className="card-button" onClick={() => deleteBook(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default YourBooksCards;