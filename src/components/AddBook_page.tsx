import axios from "axios";
import { Field, Form, Formik, useFormikContext } from "formik";
import { FunctionComponent } from "react";
import { NavBar } from "./Navigate_page";
import bookSchema from "../validation/book_validation";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from "react-client-session";
import Footer from "./Footer"

interface AddBookProps {
}

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

                    onSubmit={(values) => {
                      console.log('submit');
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                      }, 1000);
                      values.userId = ReactSession.get("_id");
                      const formData = new FormData()
                      for (const [key, value] of Object.entries(values)) {
                        formData.append(key, String(value));
                      }
                      console.log(formData)
                      axios
                        .post(
                          "http://localhost:8000/api/book/book_publish",
                          formData
                        )
                        .then((response) => {
                          console.log(values)
                          values.userId = response.data.user.userId;
                        }).catch((err) => {
                          console.log(err)
                          console.log(values)
                        });
                    }}
                  >
                    {(formik) => (
                      <Form encType="multipart/form-data">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <Field
                            name="name"
                            className="form-control"
                            type="text"
                          />
                          {formik.errors.name && formik.touched.name ? (
                            <div>{formik.errors.name}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="author">Author name</label>
                          <Field
                            name="author"
                            className="form-control"
                            type="text"
                          />
                          {formik.errors.author && formik.touched.author ? (
                            <div>{formik.errors.author}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="price">Price</label>
                          <Field
                            name="price"
                            className="form-control"
                            type="text"
                          />
                          {formik.errors.price && formik.touched.price ? (
                            <div>{formik.errors.price}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="release_date">Release date</label>
                          <Field
                            name="release_date"
                            className="form-control"
                            type="calendar"
                          />
                          {formik.errors.release_date && formik.touched.release_date ? (
                            <div>{formik.errors.release_date}</div>
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
                            <input
                              name="image"
                              className="form-control"
                              id="image"
                              accept="image/*"
                              type="file"
                              value={undefined}
                              onChange={(event: any) => {
                                console.log(event)
                                formik.setFieldValue("image", event.currentTarget.files[0])
                                console.log(formik.values)
                              }}
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
