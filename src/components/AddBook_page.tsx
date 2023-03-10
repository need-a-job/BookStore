import axios from "axios";
import { Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";
import { NavBar } from "./Navigate_page";
import bookSchema from "../validation/book_validation";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from "react-client-session";
import Footer from "./Footer"

interface AddBookProps { }

const AddBook: FunctionComponent<AddBookProps> = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-center text-white bg-dark">Add book</h1>
      <section className="vh-100 bg-info">
        <div className="container h-100 -e">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <Formik
                    initialValues={{
                      userId: "",
                      name: "",
                      author: "",
                      price: "",
                      release_date: "",
                      children: false,
                      image: null,
                    }}
                    validationSchema={bookSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 1000);
                      values.userId = ReactSession.get("_id");

                      axios
                        .post(
                          "http://localhost:8000/api/book/book_publish",
                          values
                        )
                        .then((response) => {
                          values.userId = response.data.user.userId;
                        });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <Field
                            name="name"
                            className="form-control"
                            type="text"
                          />
                          {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="author">Author name</label>
                          <Field
                            name="author"
                            className="form-control"
                            type="text"
                          />
                          {errors.author && touched.author ? (
                            <div>{errors.author}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="price">Price</label>
                          <Field
                            name="price"
                            className="form-control"
                            type="text"
                          />
                          {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="release_date">Release date</label>
                          <Field
                            name="release_date"
                            className="form-control"
                            type="calendar"
                          />
                          {errors.release_date && touched.release_date ? (
                            <div>{errors.release_date}</div>
                          ) : null}
                        </div>
                        <div className="form-check">
                          <Field
                            name="children"
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label className="form-check-label" htmlFor="isBizz">
                            if this is a book for children press here
                          </label>
                        </div>
                        <div className="form-group">
                          <div className="form-control">
                            <label
                              className="custom-file-label"
                              htmlFor="image"
                            >
                              Choose file
                            </label>
                            <Field
                              name="image"
                              className="form-control"
                              id="image"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AddBook;
