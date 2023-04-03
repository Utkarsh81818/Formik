import * as Yup from "yup";

export const signupSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email address"),
  phoneNo: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter your phone number"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const signinSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const profileSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter your full name"),
  dob: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter your date of birth in DD/MM/YYYY format"),
  interests: Yup.string().min(3).required("Please enter your interests"),
  location: Yup.string().min(4).required("Please enter your location"),
});
