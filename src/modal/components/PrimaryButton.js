import React from "react";
import { useGlobalContext } from "../../Context.js";

function PrimaryButton() {
  const { page, setPage, primaryButtonDisabled } = useGlobalContext();

  const primaryButtonText = page === 1 ? "Continue" : "Continue to poset a job";

  const handleButton = (e) => {
    e.stopPropagation();
    e.preventDefault(e);
    setPage((page) => page + 1);
  };
  return (
    <button
      disabled={primaryButtonDisabled}
      className="primarybutton"
      onClick={handleButton}
    >
      {" "}
      {primaryButtonText}
    </button>
  );
}

export default PrimaryButton;
