import { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
import RegisterSchema from "../validation/register.validation";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Navigate_page";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  isBizz: boolean;
}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <div>
      <NavBar />
      <h1 className="d-flex justify-content-center">Register</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          isBizz: false,
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:8000/api/register/register", values)
            .then((Response) => console.log(Response))
            .catch((err) => console.log(err));
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <section className="vh-100 bg-info">
            <div className="container h-100 -e">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black">
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
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
                              <label htmlFor="email">Email</label>
                              <Field
                                name="email"
                                type="email"
                                className="form-control"
                              />
                              {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                              ) : null}
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <Field
                                name="password"
                                className="form-control"
                                type="password"
                              />
                              {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                              ) : null}
                            </div>
                            <div className="form-check">
                              <Field
                                name="isBizz"
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="isBizz"
                              >
                                Business Account
                              </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <div className="d-flex">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid"
                                alt="Sample image"
                              ></img>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
};

export default Register;
