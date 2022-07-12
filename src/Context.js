import React, { useContext, useEffect, useState, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const[companySize, setCompanySize] = useState(0)  
  const [selectedPlanRadio, setSelectedPlanRadio] = useState();
  const [page, setPage] = useState(1);
  const [primaryButtonDisabled, setPrimaryButtonDisabled] = useState(true);

  const [userName, setUserName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [hireForName, setHireForName] = useState("");
  const [consultancyName, setConsultancyName] = useState("");
  const [consultancyWebsite, setConsultancyWebsite] = useState("");

  const finalobject = {
    username: userName ,
    companyname: companyName ,
    hireforname: hireForName ,
    consultancyname: consultancyName ,
    companysize: companySize
  };

  useEffect(() => {
    {
      userName && page === 1
        ? setPrimaryButtonDisabled(false)
        : setPrimaryButtonDisabled(true);
    }
  }, [userName, page]);

  useEffect(() => {
    if (page === 2 && selectedPlanRadio=== 1) {
      {
        companyName ? setPrimaryButtonDisabled(false) : setPrimaryButtonDisabled(true);
      }
    }
  }, [selectedPlanRadio, companyName, page]);

  useEffect(() => {
    if (page === 2 && selectedPlanRadio=== 2 ) {
      {
        hireForName && consultancyName
          ? setPrimaryButtonDisabled(false)
          : setPrimaryButtonDisabled(true);
      }
    }
  }, [selectedPlanRadio, companyName, hireForName, consultancyName, page]);


  useEffect(() =>{
    if(page >=3){
        console.log(finalobject)
    }
  },[page])

  return (
    <AppContext.Provider
      value={{
        finalobject,
        primaryButtonDisabled,
        setPrimaryButtonDisabled,
        selectedPlanRadio,
        setSelectedPlanRadio,
        page,
        setPage,
        userName,
        setUserName,
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
        companySize,
        setCompanySize
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
