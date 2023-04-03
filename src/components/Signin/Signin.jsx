import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signinSchema } from "../Schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Signin.css";

const initialValues = {
  email: "",
  password: "",
};

const Signin = ({ onSetView, setToken }) => {
  const navigate = useNavigate();

  const notifySigninError = () =>
    toast.error("Invalid Credentials!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const notifySignin = () =>
    toast("User Login Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues,
      validationSchema: signinSchema,
      onSubmit: async (values, action) => {
        axios
          .post("http://localhost:4000/app/user/signin", values)
          .then((response) => {
            console.log(response);
            notifySignin();
            setToken(response.data.data);
            onSetView(1);
            navigate("/profile");
          })
          .catch((error) => {
            notifySigninError();
          });
        action.resetForm();
      },
    });

  return (
    <div className="signup_container">
      <form className="form_signin" onSubmit={handleSubmit}>
        <h1 className="heading">Signin</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control"
            id="exampleInputEmail1"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
            autoComplete="off"
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control"
            id="exampleInputPassword1"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/" className="accountcolor">
            Create an account
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

export default Signin;
