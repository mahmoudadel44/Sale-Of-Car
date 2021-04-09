import React from "react";
import "./Prepare.css";
const Prepare = () => {
  return (
    <section class="prepare">
      <div class="container">
        <div class="text-center mb-3">
          <h2>Get prepared before our call</h2>
          <span>Required Documents & Procedures </span>
        </div>

        <div class="row required">
          <div class="col-6">
            <ul>
              <li>The car must be brought in good working condition</li>
              <li>
                In case the chassis is not OK, we'll do a registration test (AED
                170 is the cost).
              </li>
              <li>
                The commission is 5% for GCC cars and 7% for imported cars
                (minimum commission 1000 AED).
              </li>
              <li>
                The commission is 5% for GCC cars and 7% for imported cars
                (minimum commission 1000 AED).
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul>
              <li>
                If the car is sold for less than AED 5,000, the company
                commission is only AED 500.
              </li>
              <li>
                For the classic cars, trucks and heavy equipment, you must bring
                export test only and the commission is 7% (minimum commission
                1000 AED).
              </li>
              <li>
                For the classic cars, trucks and heavy equipment, you must bring
                export test only and the commission is 7% (minimum commission
                1000 AED).
              </li>
              <li>We'll do a comprehensive test (AED 300 is the cost).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
