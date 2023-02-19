import { FunctionComponent } from "react";
import { NavBar } from "./Navigate_page";
import "bootstrap/dist/css/bootstrap.min.css";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import contactUsSchema from "../validation/contact_us_validation";

interface ContactUsProps {}

const ContactUs: FunctionComponent<ContactUsProps> = () => {
  return (
    <div>
      <NavBar />
      <h1 className="d-flex justify-content-center">Contact us</h1>
      <section className="vh-100 bg-info">
        <div className="container h-100 -e">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      content: "",
                    }}
                    validationSchema={contactUsSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 1000);
                      axios.post(
                        "http://localhost:8000/api/contactUs/",
                        values
                      );
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
                          <label htmlFor="email">Email Address</label>
                          <Field
                            name="email"
                            className="form-control"
                            type="email"
                          />
                          {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <Field
                            name="subject"
                            className="form-control"
                            type="text"
                          />
                          {errors.subject && touched.subject ? (
                            <div>{errors.subject}</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label htmlFor="content">Content</label>
                          <Field
                            name="content"
                            className="form-control"
                            as="textarea"
                          />
                          {errors.content && touched.content ? (
                            <div>{errors.content}</div>
                          ) : null}
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
    </div>
  );
};

export default ContactUs;
