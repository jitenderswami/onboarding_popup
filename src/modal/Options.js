import React from "react";
import RadioButton from "./components/RadioButton.js";

import { useGlobalContext } from "../Context.js";
import { planData } from "./util/data.js";

function Options() {
  const { setSelectedPlanRadio } = useGlobalContext();

  const handleClick = (plan) => {
    setSelectedPlanRadio(plan.id);
  };

  return (
    <div className="options">
      {planData.map((plan) => {
        return (
          <RadioButton handleClick={handleClick} key={plan.id} plan={plan} />
        );
      })}
    </div>
  );
}

export default Options;
