import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context.js";

const TextBox = () => {
  const { page } = useGlobalContext();
  let textBoxHeading = "Welcome!";
  let textBoxDescription =
    "Since this is your first job posting, let’s setup your company account.";

  useEffect(() => {
    if (page === 2) {
      textBoxHeading = "Whom are you hiring for?";
      textBoxDescription = "Choose any option below";
    }
  }, [page]);

  return (
    <div className="textbox">
      <h2>{textBoxHeading}</h2>
      <p>{textBoxDescription}</p>
    </div>
  );
};

export default TextBox;
