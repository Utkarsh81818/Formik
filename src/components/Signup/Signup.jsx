import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../Schema";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const initialValues = {
  email: "",
  phoneNo: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const notifyError = () =>
    toast("Invalid Input Credentials!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const notify = () =>
    toast("User Registration is Successful!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        axios
          .post("http://localhost:4000/app/user/signup", values)
          .then((res) => {
            notify();
            navigate("/signin");
          })
          .catch((err) => {
            notifyError();
          });
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <div className="signup_container">
      <form className="signup_form" onSubmit={handleSubmit}>
        <h1 className="heading">Signup</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobileInput" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileInput"
            aria-describedby="emailHelp"
            name="phoneNo"
            autoComplete="off"
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNo && touched.phoneNo ? (
            <p className="form-error">{errors.phoneNo}</p>
          ) : null}
          <div id="emailHelp" className="form-text">
            We'll never share your mobile no with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/signin" className="accountcolor">
            I am already register
          </Link>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary button_arjust">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
