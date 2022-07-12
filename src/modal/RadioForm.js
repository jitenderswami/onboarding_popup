import React from "react";
import { useGlobalContext } from "../Context.js";
import InputField from "./components/InputField.js";

function RadioForm() {
  const {
    selectedPlanRadio,
    companyWebsite,
    setCompanyWebsite,
    companyName,
    setCompanyName,
    hireForName,
    setHireForName,
    consultancyName,
    setConsultancyName,
    consultancyWebsite,
    setConsultancyWebsite,
  } = useGlobalContext();

  return (
    <>
      {selectedPlanRadio === 1 && (
        <>
          <InputField
            isoptional={false}
            value={companyName}
            setValue={setCompanyName}
            label={"Your company name"}
            placeholder={"Example: apna"}
          />
          <InputField
            isoptional={true}
            value={companyWebsite}
            setValue={setCompanyWebsite}
            label={"Company Website"}
            placeholder={"Example: www.companyname.com"}
          />
        </>
      )}
      {selectedPlanRadio === 2 && (
        <>
          <InputField
            isoptional={false}
            value={hireForName}
            setValue={setHireForName}
            label={"Clients you normally hire for"}
            placeholder={"Example: Swiggy, Zomato, Flipkart"}
          />
          <InputField
            isoptional={true}
            value={consultancyName}
            setValue={setConsultancyName}
            label={"Your consultancy name"}
            placeholder={"Example: Abc consultancy"}
          />
          <InputField
            isoptional={true}
            value={consultancyWebsite}
            setValue={setConsultancyWebsite}
            label={"Consultancy website"}
            placeholder={"Example: www.abc.com "}
          />
        </>
      )}
    </>
  );
}

export default RadioForm;
