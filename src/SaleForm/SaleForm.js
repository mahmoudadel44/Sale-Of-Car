import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaChevronRight } from "react-icons/fa";
import "./SaleForm.css";
import Video from "../Video/Video.mp4";

const SaleForm = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <section className="p-5 form">
      <div className="text-center mb-3">
        <h2 className="start">Start today!</h2>
        <span>You are just one click away from selling your car. </span>
      </div>
      <section className="saleForm">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 col-sm-12">
              <video
                autoPlay
                src={Video}
                height="200px"
                width="auto"
                controls
                className="videoCar"
              />

              <div className="mt-3 inquery">
                <h5>Why you should sell your car with us?</h5>
                <span className="support">
                  We support you from start to finish
                </span>
                <p className="mt-4">
                  We have streamlined the process to sell your car online for
                  quick payment to get your free cash offer.
                </p>
                <span className="mt-2">Ready to sell your car?</span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 pl-5 formContainer">
              <form className="py-5">
                <Formik
                  initialValues={{
                    fullname: "",
                    phonenumber: "",
                    brand: "",
                    model: "",
                  }}
                  onSubmit={onSubmit}
                  validationSchema={Yup.object().shape({
                    fullname: Yup.string().required("Please Add Full Name"),
                    phonenumber: Yup.string()
                      .matches(phoneRegExp, "Please add a valid phone number")
                      .required("enter phone number"),
                    brand: Yup.string()
                      .ensure()
                      .required("please select a car brand"),
                    model: Yup.string()
                      .ensure()
                      .required("please select a car brand"),
                  })}
                  render={({
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    errors,
                    touched,
                    values,
                  }) => (
                    <>
                      {values.brand === "" &&
                      values.model === "" &&
                      values.fullname === "" &&
                      values.phonenumber === "" ? (
                        <small className="form-text text-left p-1 mt-5">
                          * All filelds are required to be filled
                        </small>
                      ) : null}
                      <h5 className="mt-3 mb-3 addDetails">
                        Enter your car details
                      </h5>
                      <label htmlFor="CarModel" className="mt-2">
                        Car Make
                      </label>

                      <select
                        className="form-select mt-2"
                        aria-label="Default select example"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="brand"
                      >
                        <option>Select Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <small className="form-text">
                        {errors.brand && touched.brand ? errors.brand : null}
                      </small>
                      <label htmlFor="CarModel" className="mt-3">
                        Car Model
                      </label>
                      <select
                        className="form-select mt-2"
                        aria-label="Default select example"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="model"
                      >
                        <option>Select Model</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <small className="form-text">
                        {errors.model && touched.model ? errors.model : null}
                      </small>
                      <h5 className="mt-3 mb-3">Enter your Contact Info</h5>
                      <div className="mb-3">
                        <label htmlFor="exampleFullName" className="form-label">
                          Yor Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFullName"
                          aria-describedby="FulNameHelp"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name="fullname"
                          placeholder="Magdy Allam"
                        />
                        <small className="form-text">
                          {errors.fullname && touched.fullname
                            ? errors.fullname
                            : null}
                        </small>
                      </div>
                      <div className="mb-3 mt-3">
                        <label htmlFor="exampleFullName" className="form-label">
                          Yor Phone Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleFullName"
                          aria-describedby="FulNameHelp"
                          placeholder="+972 444 786 096"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name="phonenumber"
                        />
                        <small className="form-text">
                          {errors.phonenumber && touched.phonenumber
                            ? errors.phonenumber
                            : null}
                        </small>
                      </div>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn mt-4 send"
                      >
                        Send Your Inquery <FaChevronRight />
                      </button>
                    </>
                  )}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SaleForm;
