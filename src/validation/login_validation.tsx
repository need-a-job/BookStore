import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .min(7)
    .max(255),
  password: Yup.string()
    .required("required")
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "password must contain at least 1 lower case letter")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number")
    .minSymbols(1, "password must contain at least 1 special character"),
  isBizz: Yup.boolean(),
});

export default LoginSchema;
