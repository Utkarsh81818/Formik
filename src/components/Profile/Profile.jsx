import React, { useEffect } from "react";
import { useFormik } from "formik";
import { profileSchema } from "../Schema";
import "./Profile.css";
import axios from "axios";

const initialValues = {
  name: "",
  dob: "",
  interests: [],
  location: "",
};

const Profile = ({ token }) => {
  
  const config = {
    headers: {
      authorization: "Bearer" + " " + token,
    },
  };

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: profileSchema,
      onSubmit: async (values, action) => {
        try {
          const data = { ...values, interests: [values.interests] };
          const input = await axios.post(
            "http://localhost:4000/app/profile/profile",
            data,
            config
          );
          console.log(input);
          action.resetForm();
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <div className="profile_container">
      <form className="profile_form_container" onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Profile</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            autoComplete="off"
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            DOB
          </label>
          <input
            name="dob"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dob}
            autoComplete="off"
          />
          {errors.dob && touched.dob ? (
            <p className="form-error">{errors.dob}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Interest
          </label>
          <input
            name="interests"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.interests}
            autoComplete="off"
          />
          {errors.interests && touched.interests ? (
            <p className="form-error">{errors.interests}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Location
          </label>
          <input
            name="location"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
            autoComplete="off"
          />
          {errors.location && touched.location ? (
            <p className="form-error">{errors.location}</p>
          ) : null}
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Add Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
