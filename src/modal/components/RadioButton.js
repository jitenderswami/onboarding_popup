import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context.js";

function RadioButton({ plan, handleClick }) {
  const {
    selectedPlanRadio,
    setCompanyName,
    setHireForName,
    setConsultancyName,
  } = useGlobalContext();

  useEffect(() => {
    if (selectedPlanRadio === 1) {
      setHireForName("");
      setConsultancyName("");
    } else if (selectedPlanRadio === 2) {
      setCompanyName("");
    }
  }, [selectedPlanRadio]);

  return (
    <div className={`tile${selectedPlanRadio === plan.id ? "active" : ""}`}>
      <div className={"tile-content"}>
        <label className="radio-overlay">
          <input
            onChange={() => handleClick(plan)}
            checked={plan.id === selectedPlanRadio}
            type="radio"
            name="hiriingfor"
          />
          <div className="radio-detail">
            <div className="icon">
              <img src={plan.logo} alt="logo" />
              <p>{plan.heading}</p>
            </div>
            <p className="icon-des">{plan.des}</p>
          </div>
        </label>
      </div>
    </div>
  );
}

export default RadioButton;
