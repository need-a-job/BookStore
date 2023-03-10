import * as Yup from "yup";

const BookSchema = Yup.object().shape({
  userId: Yup.string(),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
  author: Yup.string()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(225, "Too Long!")
    .required("Required"),
  sold: Yup.number(),
  release_date: Yup.string().min(2, "Too Short!").max(225, "Too Long!"),
  children: Yup.boolean(),
  image: Yup.object(),
});
export default BookSchema;
