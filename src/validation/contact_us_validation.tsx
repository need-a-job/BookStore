import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
});

export default ContactUsSchema;
