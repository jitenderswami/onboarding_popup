import React from "react";
import { useGlobalContext } from "../../Context.js";
import back from "/Users/jitenderkumar/onboarding_popup/src/logos/back.svg";

function Back() {
  const { setPage } = useGlobalContext();

  const handleBack = (e) => {
    e.stopPropagation();
    setPage(1);
  };

  return (
    <div onClick={handleBack} className="back">
      <img src={back} alt="back" />
      <span>Back</span>
    </div>
  );
}

export default Back;
