import React from "react";
import Prepare from "../Prepare/Prepare";

const data = [
  {
    id: 1,
    prepareStep: "The car must be brought in good working condition",
  },
  {
    id: 2,
    prepareStep:
      "If the car is sold for less than AED 5,000, the company commission is only AED 500.",
  },
  {
    id: 3,
    prepareStep:
      "In case the chassis is not OK, we'll do a registration test (AED 170 is the cost).",
  },
  {
    id: 4,
    prepareStep:
      "For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED).",
  },
  {
    id: 5,
    prepareStep:
      "The commission is 5% for GCC cars and 7% forimported cars (minimum commission 1000 AED).",
  },
  {
    id: 6,
    prepareStep:
      "For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required.",
  },
  {
    id: 7,
    prepareStep:
      "If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion",
  },
  {
    id: 8,
    prepareStep:
      "We'll do a comprehensive test (AED 300 is the cost).The car must be brought in good working condition",
  },
];

const PrepareData = () => {
  return <Prepare prepares={data} />;
};

export default PrepareData;
