import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./SaleForm.css";
import Video from "../Video/Video.mp4";
const SaleForm = () => {
  return (
    <section className="p-5">
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
                <h5 className="mt-3 mb-3 addDetails">Enter your car details</h5>
                <label for="CarModel" className="mt-2">
                  Car Make
                </label>

                <select
                  className="form-select mt-2"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select Brand</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <label for="CarModel" className="mt-3">
                  Car Model
                </label>
                <select
                  className="form-select mt-2"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select Model</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <h5 className="mt-3 mb-3">Enter your Contact Info</h5>
                <div className="mb-3">
                  <label for="exampleFullName" className="form-label">
                    Yor Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFullName"
                    aria-describedby="FulName
                    Help"
                    placeholder="Magdy Allam"
                    required
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label for="exampleFullName" className="form-label">
                    Yor Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFullName"
                    aria-describedby="FulNameHelp"
                    placeholder="+972 444 786 096"
                    required
                  />
                </div>
                <button type="submit" className="btn mt-4 send">
                  Send Your Inquery <FaChevronRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SaleForm;
