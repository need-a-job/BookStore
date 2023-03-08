import { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
import LoginSchema from "../validation/login_validation";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Navigate_page";
import Footer from "./Footer";
import { ReactSession } from "react-client-session";
import { useHistory } from "react-router-dom";



interface LoginProps {
  email: string;
  password: string;
  isBizz: boolean;
}

const Login: FunctionComponent<LoginProps> = () => {
let history = useHistory();
  return (
    <div>
      <i className="bi bi-arrow-through-heart-fill"></i>
      <NavBar />
      <h1 className="text-center text-white bg-dark">Login</h1>
      <section className="vh-100 bg-info">
        <div className="container h-50 -e">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      isBizz: false,
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                      
                      axios 
                        .post("http://localhost:8000/api/login/login", values)
                        .then((response) => {
                          console.log("resp", response);
                          values.email = response.data.user.email;
                          values.password = response.data.user.password;
                          values.isBizz = response.data.user.isBizz;
                          const userId = response.data.user._id;
                          ReactSession.set("bizz", values.isBizz);
                          ReactSession.set("_id", userId);
                          const isBizz = ReactSession.get("bizz");
                          const userIdGet = ReactSession.get("_id");
                          console.log("val", values);
                          console.log({ isBizz });
                          console.log(userIdGet);
                          history.push("/");
                        })
                        .catch((err) => console.log("err", err));
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
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
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
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

export default Login;
