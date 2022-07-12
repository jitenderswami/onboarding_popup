import React from "react";
import { useGlobalContext } from "../Context.js";
import CompanySize from "./components/CompanySize.js";
import InputField from "./components/InputField.js";
import Options from "./Options.js";
import PrimaryButton from "./components/PrimaryButton.js";
import RadioForm from "./RadioForm.js";

const DetailForm = () => {
  const { userName, setUserName, page, selectedPlanRadio } = useGlobalContext();

  return (
    <form className="userform">
      {page === 1 && (
        <InputField
          setValue={setUserName}
          value={userName}
          label={"What is your full name?"}
          placeholder={"Example: Ramadugu Rakesh Kumar"}
        />
      )}
      {page === 2 && (
        <>
          <Options />

          {selectedPlanRadio && (
            <>
              <RadioForm />
              <CompanySize />
            </>
          )}
        </>
      )}

      {page <= 2 && <PrimaryButton />}

      {page >= 3 && <>Form Submitted!</>}
    </form>
  );
};

export default DetailForm;
