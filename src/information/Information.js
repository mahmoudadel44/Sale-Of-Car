import React from "react";
import "./Information.css";
const Information = () => {
  return (
    <section class="information">
      <div class="left-side">
        <div class="work">
          <h2>How it works?</h2>
          <span>Sell Your Car in Three Simple Steps</span>

          <div class="nums">
            <div class="num1">
              <div class="num">
                <span>1</span>
              </div>
              <div class="text">
                <h6>Submit Your Car</h6>
                <p>
                  Enter your car details for inspection on Emirates Auction.
                </p>
              </div>
            </div>

            <div class="num2">
              <div class="num">
                <span>2</span>
              </div>
              <div class="text">
                <h6>Receive Valuation and Offer</h6>
                <p>
                  We will check your car and provide you with approved purchase
                  price.
                </p>
              </div>
            </div>

            <div class="num3">
              <div class="num">
                <span>3</span>
              </div>
              <div class="text">
                <h6>Get Your Payment</h6>
                <p>
                  After a price is agreed for your car, <br />
                  we will exchange cash on a day that suits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right-side text-center">
        <div class="overlay"></div>
        <div class="div_content">
          <div>
            <i class="fa fa-hammer fa-3x"></i>
          </div>
          <div class="text">
            <h2 class="text-uppercase">Your car will be sold by bidding</h2>
            <p>
              You set the starting price it will be sold for the highest bidder{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
