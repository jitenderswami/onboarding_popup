import React, { useContext, useEffect, useState, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const[companySize, setCompanySize] = useState(0)  
  const [SelectedRadio, setSelectedRadio] = useState(null);
  const [page, setPage] = useState(1);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const [userName, setUserName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [hireForName, setHireForName] = useState("");
  const [consultancyName, setconsultancyName] = useState("");
  const [consultancyWebsite, setConsultancyWebsite] = useState("");

  const finalobject = {
    username: { userName },
    companyname: { companyName },
    hireforname: { hireForName },
    consultancyname: { consultancyName },
    companysize:{companySize}
  };

  useEffect(() => {
    {
      userName && page === 1
        ? setbuttonDisabled(false)
        : setbuttonDisabled(true);
    }
  }, [userName, page]);

  useEffect(() => {
    if (page === 2 && SelectedRadio === 1) {
      {
        companyName ? setbuttonDisabled(false) : setbuttonDisabled(true);
      }
    }
  }, [SelectedRadio, companyName, page]);

  useEffect(() => {
    if (page === 2 && SelectedRadio === 2 ) {
      {
        hireForName && consultancyName
          ? setbuttonDisabled(false)
          : setbuttonDisabled(true);
      }
    }
  }, [SelectedRadio, companyName, hireForName, consultancyName, page]);


  useEffect(() =>{
    if(page >=3){
        console.log(finalobject)
    }
  })

  return (
    <AppContext.Provider
      value={{
        finalobject,
        buttonDisabled,
        setbuttonDisabled,
        SelectedRadio,
        setSelectedRadio,
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
        setconsultancyName,
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
